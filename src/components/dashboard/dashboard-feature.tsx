/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5Vkg4LJv4jwnVtHVu7koBDdpe8SXmY94XqzAwftVhoepREjZFD9QSPHR8JNnppxkqWDiZmCpHVmEbvccT9yjj5yQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HrgmxXhgdppuFk7KfBD1NFLkr7MtTMSbQ4A8k2QyVZ6dgZ1R32qu7nCGCinwCtzfCKETH9HSUoW6EpG4QeF97BT",
  "key1": "Hf5jDPgMfoiYtPdCLLhGgSqoWzFjSuhckxjKVtkdhtwhP97NQioSdTnTiUeWn8kLtAsze58NC6Vi8jgsjBkRqrG",
  "key2": "4T9RhBcQZZoXGQpZ7myrbdRsy1WRmf95HSY68Nw3AqRq3k1LDxyFu8bESzcRduEXCz2eGgBriAGMoLDydLLkJPsd",
  "key3": "rwFL8BtXsMouGA1MhrCx1kLuKNu77AWsapmQWcDjFJwsUAvbXqdAk53Urr7h5GoSoo3v8BH3fmSdrY7Xi9RSBUK",
  "key4": "2KKLmhyJZp8qGocV5sEr9ancrDxNq82qZZP7DYNnTpnGYoGvpgtbHtZTnhTGk4TL8rDBdP7YaPpjJnrkFhadRbtE",
  "key5": "518jUbWFcwYQsGtxgLv2thAMm1LBfKdjiq2aJQ5nopQ7csCbP11kJyzRKsPrgJYeGKzw57QUfFVWQq4aMuzgi3gz",
  "key6": "3pgmfz5WGnyDmzSH8nfbtx74T3JPphnYfXquBMsbSi4DWHcWVpLDshqetFzfoSooiD9qS8ybk2NiWRU3kHMXjgsb",
  "key7": "4TT7DBonggjC57UihNrZhR3dRaE3dh4R9W7VtGDUxeCEP9VRxzKSX6amYkHraAkwsuLsafmahUEMeZWS9gYaDhay",
  "key8": "48Yczgc2oP1n3WjZHsqAWaE8eEHq73X8a8v6WjvpSbc2Fq8DYJLKUNZp94cjP1ahak7dpkNJCMxmDApzCtqr1zbC",
  "key9": "1Wq43E2VZJNeeoXpNkAFU9U3R5K1qKMz6MbAXNjxXBRdVSWM6wTmmCTT7rR11ExGnW4Z8P6VkTvYAGxdABYLwcu",
  "key10": "5HKtgbTRJGm3XXsR6tAf5urKSHwdz7uDP4k9HkQSXMKCuJuhN3Kkb5w5MFH3Uk5kr7J4dtqBa2Nr4B94WFMYNfTn",
  "key11": "cC86oUihRUtsxARrXKh4SZ1zaXoYfd2hDxiaEQ6jbLAuqWLTo3tDPqzdekmGhqVPK5Wtg2RwLWzs8hM4JWfzL2P",
  "key12": "3X7tRNifsNHJf9wBBXLnaNZWvVW7sWewJYWYLcDHTwpZizTba4Mm5X4zL1yhKsv28wzWsRFQHCFczjoN5DXZmfV1",
  "key13": "484v7kcUfwDP4qKemWGrzJ6Qq5fRXWqdBh4AraUfWHiugocGhtUzfpN1R3wWDDXmdbWwMRMkNBFDCD64bVSQ4Ka5",
  "key14": "4Xeg3f4sM5bLVV4SJQn9F1HyVTywDA8e1hKtRAmeoETvjdpF6ExGf2bwMB88JPipLHx9RA9Sy5EHbbw4LJpiVEuY",
  "key15": "2crkCL25ytgEfhmufqCMacAkQUwQkQo4USjR77tX9M6G7e6YJhAE3cWzHJVsXvDBx1mUrQE2nAwistR93FHWbe1Q",
  "key16": "5nbYneWFFvENbk9Cjg2ZXfTjw8kHdhCyzegVGMB2skW2xACAria6gybU134rbtf6qscrE81L28r6rrT2upppyvv3",
  "key17": "22TFgAdAoHrcAydJaHvUXuzhgDgTtdRAJnQgASVUNivf41Vk9iFSTJrgaMap21ASpao2ZVb3zpKtLygmxCoSLixW",
  "key18": "4DkaU5pkvxLzammJ2QKQE8dLnnhipTEfx2JNWv4CQEjQd3gjgus3fdnt5GpJteMg4gXf3XxyfftbRWHu8gNB5iqW",
  "key19": "teQCnwcSwYUkKwRRBue8fTf8fK8CD5ctCwdWCiKv3fXL6JQ5kQCqpDBu8rDgkisdpus2KWBzcCWZ6hpeFcPCWoE",
  "key20": "3qNMWkTUUKZ8QavSYJU9KpdykkTZbenhsthXFiAC9udYqEQsfxcNMmqj37T2AuEAVRKNES7ZVafZvpfS4rf3kfye",
  "key21": "XjuEGu1NgMjMhCQ5wiHXRoxANBcBfiwYexiS46PjmizUiDC3VMsomJd8apf7m8GwoVNKigJCrCF8PtYUcTBV4dQ",
  "key22": "4ZNq34DEnhxtQx3hnKmREosKhZGtuAFn34WUuECHcnqBLL4YzoXqGES9eG1793mSNwZ4KxpnevQWrLbVrtNvT498",
  "key23": "26Zz1xWcDLrq5BC7PfXL2HzKeARBt2mhru8wq1pzq479dX51RAyHSHmbwq1PA7NMLdjDRFJijtZgvkiURWyTjx4i",
  "key24": "3NeAqGvEYfsgHF48CmPFaP72YBmGfiXYejPGpr5Yu11Ru3YjGyC4a2QGMbUwFWzJi3otafvDRjWDPvSKm7mJyXWv",
  "key25": "4EVaGaQYw7v9KzBhmrjW5SzG3rHULKSG1hkwfTY88mSLnnk5mdtarTf3mP6ymSepC6TNVhBeVZENMTrsTHpmaeTy",
  "key26": "62ho595w1ho9eY7JX2cCxRFzmFBfNg7GHW47bxVKHYzbYo9vWbr9cYXrEnLD6SmM6WhXiEuSJ2zXdAWeDebQZPMY",
  "key27": "43h9ZaNCuP7xFui3c6fjLANSdUuqAaBNKj8jtMULqj447EsPRhMC2gJ6nAEaHEuWuKJLhsb5FvBc9VFeSvAsXM5o",
  "key28": "2NTJMXrizNQ2vvcsiQU8yBAwazaemTWEpYbSVcokkWeEUKoG9VCbbVygyi2rWsCu4vhaubPKAMUTCr3kCENy8vd8",
  "key29": "4UNDekbYCLnBgFjwCLPowbsUPbHDJc2b95zTY8emXmxZv2T2FnsSoaD1CvVLmrf5NChoU2mTmLoUQ1Lbcd1hGTmc",
  "key30": "33kKhrDuyXtcunmBe2B3K45bWesvy6MCBoqWbnxSbEtCckriswMtdTRPTgPqyn4W1xGNhPGk7PXoNgYxzzxPpWTS",
  "key31": "3AX1Xo3iXw1mv1MzWZPuWd88pT9XHozVEsM2NydgWMqRHk1eezA92izsoRrPSncxHk2oiGMtmBebx5aG4P3LzCT8",
  "key32": "5nj7C19KZ7fVuJjyR2ksRpe1ZVjk6b9H9tB1sRmDDfB4o6WKwoEb5F3KfWCFZJaw8NuxxYad51SWQhjSbaEqaRzX",
  "key33": "Wzy2uRg63ta3YGnxhig8wf6PoDGpHpWrPiHosF513BXkcor1eJXq1TJKkaZYSFzi99egCDuVk4Rc1W62vhp1LQK",
  "key34": "3gqCVsxbTydnyaHZA7hqD26f36QRerBgtDuQfFz9ypzYtxkVcbtYCs31JsbxzJd1c4w9sAFmLBFEzwC3kQNbbDxd"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
