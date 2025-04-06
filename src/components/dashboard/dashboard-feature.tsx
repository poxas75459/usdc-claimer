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
    "2dvHagekijyjkM6eZ4ZauJy9V3HMjnruRz7Mee4TrJAhvAykhFJ6GVNRVABNmg69yrsmBNRyoukKa6mmgzYUkAsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bfNJ4ygFEJoR86kSvyvU27D3W1qacy85adAcLJ1NhQPWWhAHmJuVKWjFTooHwM3FsYmt9xZqTzvSnYwkLotoFsv",
  "key1": "4QERSPjhhLPbkSoxAKtZPqBA9a5jsLbcJiN4VnfVQLNr3tJjmVscr1vBZRJRgJPThYFom6KBbpkDiqefj8zuz8am",
  "key2": "5jbbahdRKKyCJEDPuKnd8bZqLD44ZKLZFUZab8DkoF1V1zKbwKsRH9e75nAAWSsnR1Vbq8JogsVCwsSKR5YLQH2L",
  "key3": "4xwbu3FBfJxHzRS4DxEXeMq9Tq7JLVKPDf4tEtf8rME3qMBo178zGD3944tYtJJzCT5TGLqMrSriqckPFZKPiJnS",
  "key4": "thrhdKfoFJWKU9ba6KMWcY5WawVWqZAkuBRkGWimRpq2aqco3y35aBRSFKFnG7G71974txXF3CMSfRweCk3DxxA",
  "key5": "3Tkb2dN6je2nLa8otjiJiEAhnbDrnYfMkTq7ed2sJUMwqfin5DQyjiMYd21L2m6nFtf1EtRvCQLjch52jUov2bYU",
  "key6": "3QDXPFpfruJBQXt3nnf8KrnaiEW4fDzEB8LoRRMifvXgTgy7ymtXCBgcERkFVGiVjrqa8vPtfsYguiKFBhMfq3Pq",
  "key7": "z67ETicMFSprjBVtMFtoB5RkJ6rcidB2VFG2LqpYjGSetnD69vFgoBQbcnBVhqxTrkPS1resmufDbqCzFupgMXU",
  "key8": "4N7gz92gEd2ktxozRXUtmGGMJC4XxLpa4xJPr5xaUw1UWeLGoJ7NkocXkt39UQfNNbMTZZhT8pP76hMovbT6KUgw",
  "key9": "6tto45V4wPpssEHJv5irChWsecsVaK2GjGjohP6af7qvrToL8h2rckDZoxQL2KDe4U83dBgWkDVeYgjpi4yzCZA",
  "key10": "5SP3YPaZ9ZWQUtCCJvoujHVDAJei2i67mgHYab2qgABXy8rqJxyxG5Jcq16BJ37fFdzg4P9iWm6xWCNxs9NazrMm",
  "key11": "FjnxNSWAgDhfqUmZTCutXbsq8vMPhzYhuV3RTv2a64eyjKC1rmbQC9onEDaeUAcfw23ss78rD9e1RVx3PWatUcc",
  "key12": "Jiz1QA2i9CtTCvZ8rWCmcZB7JKAea8SHjP92k21qCEPQ64cYNZx25A5pz5zL7SEbeRoEtNLeWzsFmgNsGK4CrBP",
  "key13": "t3Px6jWU7WrjwzfkwZcvfZyByHAUtqabj9NYaRpkhQo8jDid9U1UnskLvSiKBmdeiSw8tooQu35BgqXnhTVQHRU",
  "key14": "2BKSb7av1vGUo1KJjQKwK3v22PSXGy8SjzLUvnKhN5jGnW7iKbkAcTHq51v2dvk5ZNY6Npmx5skzat6Pacw5z2WP",
  "key15": "5MJKgpgsHt7fEkKXmFgrfWR2Ppb5kw5Ywq7uP85FJwTEjo4Jq6cg39pSKEvRmmTcPARYDhxHGrcr5VJF3j1TLm7D",
  "key16": "5kFUyweBWkzdtV2Jac9q4TbdoLwzzM74vYQzQywbGyVFrpJK7KP5ioYXYKggLWSBCm5vkHsiXd5V4rkF7oDWfkd9",
  "key17": "5tpvJk4KufzPYZHrj86cr98NmgHuaXNqHW7qNewUvupaEE4bCNjatQcBrQtS7f4kKgp5797FUyWuxniC9txswFdo",
  "key18": "4admYD7Fdn3NfjtVTh6Jpa5KktnjD8hyASzBVn3bP2dKCkADDwEGRx9NXdsPJv1a431Ha7hn1hj9bGKqUhKxUDDv",
  "key19": "2SnaWMJgc8NqVYxLxQJY9YFt2AXbSExBYTg3uVBmdnTmRh2vLQitpDH9LcHNW67uon3VnU2kXd54vYoxnoJu4dwA",
  "key20": "2SBCEVQqiBjsqVLPSf23KUqcvYVvhAs3Z2tY12Pn6Qy3agYXDwbyDCWarihbNsfrS1KPAaBrAgNiiGHMcuMbTwsb",
  "key21": "3jFqytKiEtREn7JjeVw5SgeN2MfQ6GfTmhvybzNvv7ocSVkV1hyjsqVq3NbG22rcWzB7ksComiswSEqEfE13UfH8",
  "key22": "24x1zzXKKQkWvShwX1D1E1i6zcCinY5djLjW7aJ5hWEZYJrJgJmTsqfN38ndnHnsuvPFjQeSRsduCAbehLyaHurF",
  "key23": "2fktt8s4KZCuPRME1Dj4jkT6SRtoBE9CzBQtTkNcmsikFvBKFfKZngzXhcXneCs6gUqYTADeL9uqB86WswQgP4KT",
  "key24": "4LFoqAX8QVKg6H9yRGs3yXMYSbeAdHnghkXLYEJnCRVAaqSzpiPrmQVnsWYhBk7YuYY4tnrSCg53F75bv4zyid2K",
  "key25": "3KLomWeQu3p7JhYbodDDFVCVgqLn1D2mJcB4Z4LYvSFSAzJvTqAaXfnX8y9ibVX7kJ17kbNpqSe6caZB8Q39Dvg4",
  "key26": "5HB8bRf4K7AGDRyESFeqhbndiNYSbt5C867q4WSCsWhnLCozDxcKHM91CEkxgxUGH1cJWKYJv38tkynzM3PG6aVN",
  "key27": "5LRe74kD8ihxQnkH4o3pYYtvhGEyaX3GtHekAohB6z9YyfsJiccJX2CFK1npZLnUqPuGrYaKUeTSARfcbCRtqm5K",
  "key28": "3KSY3MpEY6qh3U3jsSBy2hqAZQf82dAVoDKDi4GuVDKyeraBHBNFjyR13G7f4PovH1vkQWPxyVe26ZxrmvHCaBDE",
  "key29": "2dfr8LR2PUsfLFYmEHVa9ZMGFw9gueUczzsqwvU9QM4UWjx48BydmujDS4bHLxGCKQx74ywmBRBVeuHuXnGM22pc",
  "key30": "3r2XAtcLmJAhtoTpLQmx1xZ5nH4oY9t3hPEf47FgAWniG8bWWFRvjQaA7MFaePPAYAySex5hUuSauAPH3kVFrAc6",
  "key31": "4wFzXAUHKmTMQb1BTMKc6gvHwzKo1BAaKMyATnQj3hENG77t1eoJ3zsjZsnMRcQqS8Sq5dHB2wUoKNu8MnTBS3KR"
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
