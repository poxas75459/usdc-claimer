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
    "2rLStL2yHjF2ViBJnEAAya6J46y6wPAVoApnikyHKCBZczNLHqMJWAKcJfdW4MCsrFqqiDkpCYf2eVNbQPRg7yEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MSYie7rZESRSkHK9aCTmqq5L49P8DneQHnPchsqi4tJLYYQAKRWiPrC36J5aCwBuJAjoJj2N2w2ZXoJcjrskRd2",
  "key1": "4e91ci1aQgSa4uUZP1HMMJdPRww7hiS485h3yHpf2NqXoAhn2a44UuqWEaZD5RPUncQMpiixWUrrmUWBJyhSNkv9",
  "key2": "EEyBdUM2itUydzR4Da46iTzaXpJSEk9UmFeJvECLysCAJvQPhTJGtSVWc4GeVUNK5GRdSGEWJR9vkUkMGmmqnci",
  "key3": "YdPSYthsXBgj4JTByuGQFrTdnfxUj5BtsHMtuAHnNrjMz29CoJeAhE7yxT7hLuJPREPxAYidZZ6wbjYZckKSE4n",
  "key4": "csD6kgdyJCifqTFvYcTftLbajFE9qot79APg2323AcQRBaM9TqtTuao9E2ePCTzq42sFGPPYyU3THahRzZroNEj",
  "key5": "4VwGgHmNhXe6p6qijQeiSmRYAjYdmHZrY2c3CdhBPZfgdTNXdisDTATGECWGpQQij2zddWBetp3whzWzbPGH9ZZ5",
  "key6": "4dD9wCxLjZTDKXHSsYYaky6mFNPKaURn8KommEE9FAmVMpKXE1SjdyrkRKgCUbBwFdxgLak7v9FgDbRsy6FEF6fg",
  "key7": "4iWE98xnTryhbNfYJPZnjuKDA7A2Di624RwJ1BvXevwaP2f25xDe7Uc316c5t69U54CBgBfbXpVCfuAMM7BSwa3c",
  "key8": "5MjBP1qHGnAfC9qsdVMhumaiWa4sXiwb64C2bxtsRZpKNhm6hLa4riSmTgNeyHZsD4BkhTyb4UVn9EZFE4qSbrns",
  "key9": "4ZqnvCrMmbzsksWjweY7Z4WGXCJgFCghse8qsUygRLL5GTzp78jaQtkCfoFhqLF1V6Fto6o9inZVqEp1KQyETuHn",
  "key10": "5RdYjQ37fgT2LhrVsaJ5wbYkxnWkvpCVk4tqZsdtZ1ktdyhZXWH9APcfg6qKfE2yfDLL7Vnsw6fRzoQtxwMG4V9N",
  "key11": "5jn4RDiZr7h81bBf4ESLqxxtEqdNJYhBWU6U6o3zV6V6z4JxwHu95PejPqC64imJ1Q4n2BhmXdH41B1DHTPtzPaE",
  "key12": "uiFuC6oLKwTzSevfmLz9zkZPUwfLzMkPNxi3EtUWMfKcb1HfBsGGKBMqSJbxJwbW5J1dgvkyZq9kHFCbxBYqG4i",
  "key13": "3TUrgLJGnku644oGmf4RmqrrmhrAMx7P7wmbc8rdN7PVPSPvGQm2uYgwe3j2ryrsv3rgQapG6aBFjgNmQHAx9q4g",
  "key14": "3u31DyP2MRrTvMSJ2Pzt842qwoi6MZX67Sj3HRqjWFPPjhqo65D4NgjghNASs8zjMSDiVbyn9njNeej3FSo7mEYG",
  "key15": "3ydcEf1odALJQYTvDHQAv7iaCcRVSWSgg3AZ9daJPLWrgsrUbwCGXKEUvojFufmx1JXngFmG5fb3DbNMNhm883Ma",
  "key16": "47H8nKa8Hi634YLjy63TjXokMWvo9URj189Z2J8MVMZSv7JQkLZ4gCsbhEhhYk6jgF3M6hJqCgA9o87ym5MW29MG",
  "key17": "48eRN1jseu5rFmxuPo8HwPphgvxzgvV48NCM91qURZQq1W4QeuwSepHKB5nniaDq7axPTdhFmqTqfQ3VPtT6magy",
  "key18": "5kqEumSXrz22EQXUByLwbsc655K1h7aEehqVqAvTbAA9RHfbEsuaudAkvBZ1P9VyovGoKVnUCisSKpKkDEJQGcVm",
  "key19": "3ZaKaoqg4rWzT3XRBF1nLBLd8dMxDvUrpSDSnHgLbufXvYRkNmyUnLQzEEw1X5u1SNdSkZwFjpE6hyYRv7H3hsn8",
  "key20": "o7XepNWKFnFtxX33R9m4RvGHD46vMuHh7RNa9FRzTzBFs8ntmcGSFvZKoTzc1qwhFcvFXxSmFq6oNdxpRN8LR97",
  "key21": "2RvsvCGeDmxxdAXYfh26JF1APLrg5CYcdjFw6qdcT2EeHUhiFj6mG1nsh6SWRPY8irPM9h9u76c3hWYY2Tkxjb9U",
  "key22": "28YPR5j8Vvd2G29ip54uB3nJoG2XQdevynW94B5GdQCAz6w81p19DBzp2ut6wwRdZ6gRf8sorTKNsmrFhz9g85zq",
  "key23": "5oZ5h9j41JnHiqhNnexFW91qwee7Nrqd4e3PBrD3RWbyqPsHKoHQuGtMQ3N5ZvW3SSU3a6UCHKAKL5oUd5rv7q5T",
  "key24": "3vZQGZa7yt6DVNRciZfYT4y7ZZoZzvvFeEhCRDCfF5cKjaCtuq913UMgHdVc4KA4onnudtfUfXS7N1REFPnAKYt1",
  "key25": "2wcySwtjpfh6YaNN7VSwAhcQ3zpay3gVDqswciiUq7c9cbitKiUvvMCSAc7mUJU33fG9UNg4QRQGKFZzef2phfWA",
  "key26": "qxgpj7qWLSs9G2nUbkN3HBMgaQP8LetYf48X6WbEHvogtirERwyJ7PHGHzVHrXXduver9KgSn3EoSgjeH35aizs",
  "key27": "2mPxg35siqJqeQsmTTVdgVq3mDBCMWJf6TktjsETXRNskzJ8MyB2y2C5k1mpYRq8KTH8jxgxWQmAgsnRtVUUW1pW",
  "key28": "5ChqnMCcTsvGwD287BZ2fwuMECoXrefvhK1cFk8CTwJcwjGbdFiczEKeQcuGLxzfTs6UyqFpTmGttuFgYGq8Lj5u",
  "key29": "5hNQMCiKUxTH7XifkcUcHmP1NNyyDMNKh2rcVE6iTQkYmtQ754s4vHhkoSZGcknroyd6qvGfTg23zDN5w24A3U4Q",
  "key30": "3gkcvWMC4GDSEqscQdYrqtY1rguyQNWk9ztMTXc5fMCtzujZjyiTqC7VD4TjoEawYj4akvfn8v3ByPT8GyqqHStZ",
  "key31": "Pz23zoje7EZQemHRq985CkdQbLKneusDkHrGSw46j7fFtJB276haezKtS2SbbePdBhAcUu2tQBELrzj7omPez3B",
  "key32": "565izvz1gpgTPJmFGeoBQu5UtF88Mues6Bn2VGhV5enSdc2CkU5kedHA15A5bVMEWCKpVMym2UerVABB8vYjrLNh",
  "key33": "auUBXQAvuFML5ahdF2KGoJLQdGQe4fa4nfbT79y1fS7SDohvXxLMGEY1ymenNrUM9jA1dZNncqjWLPvhreCAcaC",
  "key34": "5zzocpwNBP7QpYhbh5EH9v5QBbimvhexje94Yz5RqszVQAsHWzpPR3uPxGqf76Wui5bh6628okKC9VGCABcHQ8Qp",
  "key35": "2s2kRCSFkpnQcZt9pUmRTYUuZgoY4Gr9YiZjnDzQ1WAwEzz3Y2gYKTNX8xEnsociB4XkTSVYDKpBVLJpy5WTr5Ma",
  "key36": "33DiW9nZdHqBPJZHC45MvYyJzDFbaJYCs69DAkJWrKqzoje9t96J2PToyMkpDjHzoxhLQhmH2ccsSi2k32BVYWou",
  "key37": "2s7KW9g192WSfT1aYoRdewaf8dD4CJKGf6XcaQP8EQtwcwfmPk1d8jkDQmm4RJejZczopKkXADPtwjJsc67T4SQS",
  "key38": "3apJGkRmRRGMPLRWMSxhXKG5mchLQTKassVuAS5LYsWHS1SVSLK9nEWJZRYBRjacfj5vg3NjDcMZGjadbwh13bzd",
  "key39": "2dH6w3kXu3WcKqhpkx2grivYwGVVobToUPx4g12iaWqA5wReTonC6Cz3Ho7DjhYZjmBHMrGwn8hYLxehb3GjKFHk",
  "key40": "5pSkrtt671mBCc9VVw8KJUGtPDFwk3shtCB3BVf3m4o35mJ8JqkgkEXEWWd2bSBFsekNeQMsTh86ozWC4CNn2r2d",
  "key41": "4ymeNDvveyj7ctL2aLwWRDktvpRrD5mp1yCaex8utV9qd3ifjhNVWC2hvoqApHARWBfm5j6b3oBh2tiNgZ9HsioB",
  "key42": "we2LMHe7C6EkYB7Aqt2kYirVw78rVGyadKt7JVLj6ActWLjJR2zsJJ4bUUicbVSv5Wd25EgFqRUASU65bMq6N2e",
  "key43": "22kRmfoX11ZhcqHzsikBc518RYvPWTDdbDV92vqSTGgqt13NAV7iARZAvePtMY4ZZgJw22NiMhTmMDUnfBaA39ny",
  "key44": "3KmyepQj8Zc1oz6QrJCKQ5kWsefkFSixhaRSmfDTbc4oVUk9qRqzeejzUri6GWG6pfzsvPVMe1XADhdwXZfCe4ej",
  "key45": "2UzQsfftobSkdTMLZuFie5Be3f5dQENQgxHa9fpR2oMA2SQFzJJNYEwRKshcoooXY4iUUS2bqnqjvRPmAyi28uP9",
  "key46": "3TTErmnyN97aBArzSjaXcjPyGWdqNvUpUB6e9NCu43bqgSEyuYcUdDsyS4WVM5KhNb9hbx9hCAHWb3gqS4twcPWn",
  "key47": "2eo7GwxayoCqdm37htKr869t5F6QvPysMuXsDZyQbFwsngVdCcr7X9NGZ8fyaQvaSMMM3wu4uTd1M9X6NJUHf31c"
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
