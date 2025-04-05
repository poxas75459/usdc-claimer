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
    "5dakgqTvd7aGGicN9r8mVU1e2oX7GWTRY6zUoaaSowojJdV8A8EAPb8eVW84gWqKo2Yu2341dokQYcubLAuNFXbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CXQ5D2ZvGEibSedmUdDkYb7vPYfV5SDCP5gDoRorMfNpDAkmSYU53atBxPvJGYnmJ5mpkNAnk1bqGEdQFZmTVyg",
  "key1": "3AoigZzxEkqrWrdyXmMxLzXYwCKpAfytz9bhZVbEuMGmb41BHYBXgrNPvbFMPLTEkqfSrxenETAr5SpkUCKThPPz",
  "key2": "QjoSZaYvj1KWixbsrSP4Bag4Pxm3hVgjRchLapkEY5hCkD9FB7SBnGEN3qXBJtynUFnJ2QnoPbZ2AWJPdGGEyoE",
  "key3": "5uso5j8cjHhruZTQ1FEYaqDQ7wybtGxq1TsfLvPwycS9LxXcR3D1ejT95ETdqj3SAyN2K4qRtvFDzAuUyjZbs1WW",
  "key4": "Gc2dhqUq1S2CmmrPqdmBEMf7RHsHTYbTnG8Pfemp5wvfgD87BpMtEJQeXaU4jPbMetVVZMWUXvmjJ5SoG9UnPZQ",
  "key5": "5JJTSNckcTrxT9JJ3YMQBi9iBWB4eRqVkyhfqbAWeHphTxkZ846ga5bBL4AQXRoAyspeKwWnqfmfzLBZ2VC5Hfzc",
  "key6": "dgGcMbfB76F89EUF3H5U2tCxZo22aGxm1G4CjWYHFDV7DbGCSNDV9t9EaDJtbDqdJJZkGES47U1kNRtepk3BiHt",
  "key7": "4EumXqRoqvzwVXH41kiUYnn8qQyzRs9YC4rwG2sVeatNMQND5aBCBnCgQPotHDa5L4hUibLikc7ZTQeFrKFuEqVV",
  "key8": "bpkcmquAUebSzXfJocBzi9xPGTnuBQGR3aQMyQc7848yyCd8d9z1LeNZPCcCT2VCaDdSCkd4WXu1R2MUkA1NHQd",
  "key9": "5gWDEsgJ1LfaLoAdkfog2LAEgi8ZjnpJmwUwkScaQtHkknSLXJqWEDht5cYsMXXnyKV5JuMcSureUuiJQrSw4bA5",
  "key10": "2nmrBbsWUMHuhRwcwQdqWhsRg8pcebCuEJKU7t9z4AKJvnjd2suC3F3H4o2NfQAoDSRUFi99NV9cBt7UN8t9cc5S",
  "key11": "3TxBPptqXrgpi6q5BZkrEAwfveCnQb3QpzJXjRe7se8dsuWh3NnLfpUoaBZiNKjHKkdi7tv5snY8A5PziJhY6xvo",
  "key12": "42yzTPoZ27mCrhFmzxEBVK2inPU4q6BvsEpTsKRmsxctfePZ6CXHUybyY4Zaiofm3TP8FTj5Ph81mFGDUJwBtWne",
  "key13": "9CLSzeS6Cnz3rE6XtmxUgN6GTGuQazjuWMV4WBNEAKPTwDW3rnno55c5dVcHbX3x63nbakir6Lk1ToiQUNSerSM",
  "key14": "4mnaq2rnJUtbKicZMq3q9yshL198qrMfsW89XAzXE9MRoDGjE3cNuybhnw9HEwtkDhNXmqYQfhL1fJU1hetobQ1q",
  "key15": "4yoywrQHJDdvzyqXiSTKdAFyVQgZVT8yNXdJ9RJwARsnhtUN6KCV3py6dbStXQgEYWMKe8oPNgjMjGWbL7HBRNgA",
  "key16": "3cPg14xZ5Mfoj3Rof41zEnik36tMHt4qYd3H4BYT3SmAmeoqAoqdGydqeX7sTFc4y3fKXGQYzdYFc3i7keSqZHaq",
  "key17": "3s9BXoc4jmzujxU2U7osnHNNvQMt2skZxbPFD35Xw3MJueRRa4vcVMXkFmsJWhqF2B3uSbCPDavAGzduXjHR6iH8",
  "key18": "4ybYbfCHHftTxEgxLSCPcWHKw1dZso8geVrf4oHxmd86uNPrVz4GU66HETZVXHGHXZAKBAZXZwd5HU843pi7uVM3",
  "key19": "4nKRy1214gwvB8GkyJDg5w5vYQ8htXHzaG5Tetm8g7uVqwG8wTCXhK4feJVZRXsapSB3xaPpeTy3tZQjJv8k9k3G",
  "key20": "SQg16GEF3Jg4Yp1rp7SPpx13daYAzgSF3KDuEvXDC88qLpZ3kdg4WdZQHQT4BJi6cYcgDhApsKGWHAUvqbrQgTp",
  "key21": "4u8ybxsiHyyR7iDyKLRgrMgASLpvn4arxb3HNhDMcL71XU2Ksgs2WdZosofvz1VApZD64AEt4TZqEFGYkSvXD8P3",
  "key22": "66XhRBgGjocXab6fo1wENWm4ewbRZbdKwXQhTzPw8KHb6aEe5AS41McAeE3rc4JKroEtXbNNYRofrTpqe3bxdbHo",
  "key23": "Skvyr64z5sJ2RqmzVEZeaqTCXVfEKgdRVrCaB36b3zDDsfpBavoiBSdaGb7Bwe6gLRRHehunPaJv82Uamq9Wtt8",
  "key24": "2ZMLRMK5dzR7xr8K7hHnVekpauPA8ab5wZ73e5ECyXusnMG9UE4VoVkeCJyLrpkDBPGATnVsqEhq9QnCZTj1KsvN",
  "key25": "pbsEpddG7x9jyvzPqM3d5fEuCxf19Rjn5NDa21XU4Gc5Kh7KqJbtHguEBcVHBCk9t9UkDoJvJVbSRBFnZb5xL8k",
  "key26": "2Bieaadz2EXViQAVzgyctdL9wRvVFChk6ZmEYfJjdYYeHyf9t4LejvMyFC5zE9AtAap8TFwDgNcPb71VS98J4u1z",
  "key27": "44UVafag84DabnGhtLPRiWPWibii5CVBzBLriWF4JS518zM7837KPAichWSYajDoQgiLH9LcLPVrGJjKUCx8nd4u",
  "key28": "2w8q1jxHwprMujdHb4txzV8wwdmDHZ8YecMngGi7KTxbHti6p8Dv64H1hS9bYrj9AmhSJrNWpBP8tgjpJEV9mTAW",
  "key29": "4BSFgCMYN7TeWRj95UCCK5q2KAVrrYa3barCSvh1sexqauG2LfMrkCfiZKoviLDjut9NSs6QceeEDuYvTPmdtZM4",
  "key30": "3AUoHrvXCjNqV6MWL8VV857fn7gcvLD6i5X86zyiKxBUzfVPYDQssh6Acxm41Fr1TebL35dnW7qPmbMsFBwgrAee",
  "key31": "58wgeXbTZ1HBTjYLrDGkzNu5bV5fQB27M1ZrzQFtco9u3YSUCqwj1YYfRzZnnvfip65f2n8pvHBwd23FifibSUQs",
  "key32": "3KRfBrsqkBFoB31x4PZTHFPQdGvgqu3PphqHrEoodg4oBGLyCA74tnqtRTNcf7pKg95qT5y1iFta7E6QkZ7RRCbc",
  "key33": "CjqVbiNnqHUtohymebwbMvadTQ1sGSDLjJ5MpaueJPVzK6dBK6A6hWK2bkDkPjHuWwPsEpcymxKpmcAED4QPUE2",
  "key34": "5pDb4BRWwKc6Z5h8baFyCtDo2yGuUrqGj8dPzZAhvLGeQVNV7XHo8PBQrf6dhGbKBe7L8oqcz86oytAty3T4CEAn",
  "key35": "5vsyCMNTQZBHXt8hJU6UNqsnKc1gKUod76ZJo83Vmcrxcg1G3wW3vWn5cSvf1UEUnksiPcfgphgdHfuEXuW9krZs",
  "key36": "4N1C9TJDSnhdGH5AXuJySkA7YZCErkta3BWnzXof13hrb9QL6APj39vormSnAGsNuNnKfFWu3EpQcj1hxTZDLPHu",
  "key37": "46n2FuTSWkSNLcMVEFJYhNgNbS5q1GEzkoHwNdUktJZy1ipaBMbhPxAxpFC94eBrv3W4BYmUe9mLUNXLB2Cqau3d",
  "key38": "3Qpy9bxWCGUyy3PsWWuQtvRbod7HoVjTkfzJgYQdGTVZ8zQdY8QmFmATzS7qD25QEU6de11Jjxmuxq28warWVczK",
  "key39": "4CcuzuQNVj6wkzYD7qUs65jMPmEi3jCEt6GVoAmyEdgKKGjR5iFgjzdgjVpisj6QMxEBVTL2pdnjysCAXoy9Bqcw"
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
