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
    "4f4d95qMP4M58BC2KYeiF2osY3TKFEp9FmnZvaiveKs6rGxpJ8J1C16SuZVUteHoyUjyRAmw2FW7PzsyKX1UrEzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DVcgTYe1XYL7sX72i13paX4WYZEnGXDSjxY8fiUoXU6kwEeAEsasaEEvzaH6PB23YubCVYUaExTto6L2EXTHYuP",
  "key1": "674Uqez8TxPXoxmyTGaKv3RgHeafZvjt5WUofZYryAXRLhonHoyKbt7rwu7fLx3B2xBdLckSsWJv8BWfdh1RXQ45",
  "key2": "48iNNu9ZHhfdm2gydy7vcbHrMaFYeu7ebu93MnZrZxYWfjiRrThiSzfpD57aDFRgVXKkTve5At6EGEbRb5FCAHig",
  "key3": "4BhJoHssjgHHMAN8oCgZ3ixgyTpqe887PxSXCff9qrbyVVzFGpNghwwxwcYZqDd5XVJVeqGewZrmHAsFcWSTi1N",
  "key4": "34WToG3Fm6KX5fNjjVtDGuvwLmmcNKjiNgnjHo75GZQ5NKkSx6LwxZMRd1yrfkfKet2YRZxMmdcr47dL7ex5zu9Z",
  "key5": "2PZ8rFyUG4vqXzuMGEdd3aJRZSSaix3iNUW4wRhYdC6GhYNQaNeo7kqaR5jNziVSqkJtFcHPL2Vbp9oi4UKTjTgH",
  "key6": "4Ne3fH9Yst7PmaY2uAdBP55wViGtU4Xuw5YwVrU14D4JmTX51f5k2btxxTsPd46VfoMqxW2cinm7PikEn7CwifGb",
  "key7": "4gkekNRQqV1h27jeJ1izAKfVp9pDHfbNLmL5Qv9nb5KbKW17ZFKUqAnm9GCJ87Pb7szbk6AuES37kesTQiBGjZda",
  "key8": "4ztQx9kiYtmE12i61jb24SNGdqfPkiWGL3Jj6c6M54jSxUdPFfEyKDUmQdnXZzcrQisGJp1mYjy2EcNpz6D4mYve",
  "key9": "5K6ddpLwNn8xXGEbxdq1KSPcNicii8n7gAf5h5TjzQLkkhCHYeQLMrox9FLhyAYYkq3xae4N9RBm6K11LgiGBZvd",
  "key10": "71qanJeg9B5Goik75WcUqRRufeeHqQh9TTZyA7MZM565iCkP8pUY7tur69tVqtdoeZ87tLasLvrKVZPuVHi1CJv",
  "key11": "VPKA11dQVhKNacfJF9EXVH6GPjRP15JNfuN9pp1495j19qVDTgLLLXShbSkUBNCFtmboaLVAexzCKDALswUS9P5",
  "key12": "2SmDUe5qhr8Y6gChN1aBk56Z58b1SWjDgRW7wnkEKoYr7qKuGgZS9TrGZYmEWLJNR4J8cKssdecmUTvCqLqWF9n5",
  "key13": "4RYdgYgJg533QfReXHYnpzAwnb4FFePqL3Nj8tZgpHBikWNrts7TLTxYcazK96mVqR5BDzvC2Ywgovorm5pG7wPJ",
  "key14": "4HevY6qF4UsxVFxo7cb3Qjk3Y6axr5EGrabiUYENUuUUvhwkQRs2AMfc5XjKEFhaKfQkuDGMgfC9a6dFsDNjYYBz",
  "key15": "XjiZ5CS3prQJ5yvNApfWbHjwtAzHFkx9hbhgxdEvcCsZ4xDf4P392e7xDCwvz7RX6A8arWU6hSWceApCFmWpwvQ",
  "key16": "5oc124D6tpqb7baqZWJEscquVL8PeTU5MbQdboqZcj5CM4AZ3YjqL7mftoXtRJmDAPT8xKx2tTfceoF7ycMU1F7p",
  "key17": "25KWCRaSMSqrWZJHTCdLvZuujDVBSLLQdgYU3RMHTcdNYaYhsqBU48EPwqwp6ZXTihyZ5hrQHgpGEiioiuipeJsz",
  "key18": "3WKzRzm5G5Nr3zXVSxa3apHFuTZCEPvamYqxBaF96ErjpX8WUkBQZcP2NC33Cy4xcwnCRn5En7m8gGwsaNW5ePTd",
  "key19": "2xuZnanqrwK7rce5eFoL56jyJZEuyNpQDa8EDfrX2PnjVrYQ73V9phEQqJUfD3XEo1eaRL55vFaHdY6DqJAJ1f1i",
  "key20": "5MtibLcV1UYTfnbpk66A6z27kNw98F3pw28wz5zAv8NZZossgDknfEwYZUkRi5xhRhN9H3rtrrcjzzWPJsfYCX3v",
  "key21": "42FTn2UqNaEV6tN3mnnQwpcxeY4wmbGSwM5P6q5G4ARjkXZK22W3Wg9ZQkLw1Q92CAKHA3yncofVzioVpNikQpWb",
  "key22": "4rSFdKMkSppKpQUe8a4p8p6esTfD5wXMiB9mJXLNaa2ixQ3ojpYqvZo8EXtV4HCqGjEnbmQEGgjJEG2dbZX8mHyZ",
  "key23": "5yv33uVWwQJYo53zrpDZF9zASzGrKEUa6gqErF14sTBi1ipSjmnfJswtFfXhsi4E2z84AqVuCGYNkYLDnnypZ9Cu",
  "key24": "28eL4Zk8eiXfKxJRyD6UzmUpFEdcjZ7aNSWP8jjfUZ2bqrxNvNYXReQbm9P4qT3CdfzAWyMHA3G5G7wNys2DtqjX",
  "key25": "XNXKBEmENW6rBmrX5SYQfWru4AGUvDD7ZbbmN3c8FvBJ4MF7gk3dedHp8UoJJ1nssHLHaZ14Gh3PF9w39CegwLN",
  "key26": "3xk69SjGJWwbNRefP9XhThNTuGeEgo4bbVXCFFNwpSXGzQWc1a2dfN16JUan7CHk85Fb5mDbywbur6mnXyLx59f8",
  "key27": "42xyQn4cno4e4EofxvRj8jEMLN6XSvFScxPyaFkCJBqbFj6nHqeFSk96k6K1iYRdxJBsAXfFzzBv72RiwF8Se4Z7",
  "key28": "3cDpFGuNFm1KMGF7Yns3q4rz9d1WkGoKzYvriH3QgyWeF3jTnWA7RkAzrT6dus2vZtGpDPcCYZcdDyGHRQ2g3y55",
  "key29": "4upiYCDDKsDhQ9BVDRn8gRqn6NQBM8JsLQjBjQrr9TzMEjTXZJXAvMYnet6zDz36KT7RUZfG6PGgYcVh2X4NsQ14",
  "key30": "c8kfvyAVqgsvTo2CCN6hWqeWyDVPRj4zGSgygf9jz9jCAZhuySFCNxdfoq3a1d76ALrGc8L2URK6VCKDFJyXUwo",
  "key31": "2ZZTZYkke4Ak5c7rXABroYvcu9qy37HcgwRE29sJAdVcoPEHto7SiST9XfTru7o7TjVD7Ez8aHLRmMTv1sHtu7Qa",
  "key32": "5F7TfLPaoKccxGxxNdMLDkZ5zpPjBcp84Li6hAjWUMx2jStv1C7fc3TLoQD873TPdfspVzBn7RFwYX3pDJoN5m4E",
  "key33": "2qTSnKkUKZdfrs96LxExrJwCy4GRshDKrt1QVZb4PFNFEPUuyNvUiFinbtMDUKXqaTknk3quGbbYwnYG4WvxZKab",
  "key34": "Br79doRHKJZPUbg8RRgeeUiTvuqJUwkV4mi23yUbqeay8bxwdTgnwMDn7Y36WMqJQbcCRqJdFvEjZJ2fnYrhPmG",
  "key35": "xnrEm9m3U79EPrFUkSC2XhLr7W4ZBcZkqPNJoGKHkd4kckQWMEMo3o67MZQASWqrmE53AoeuUCzgRniRPx8zV5o",
  "key36": "2YQsbaFSzX1G8YEF1zsUPP751SKAxoydukNToPjk64aLE47W435NtGutAESyuitSXfA2GpeVN657QGmF5beuUBAv",
  "key37": "4VEVChscWWmMTEFbD9b2QYBt6PrY8MdpsrzrcxYcbx5rbh14CA8p5ZXn5Pn6F6d1bfgFdBJP1ngzqxBLPjwsuFGD",
  "key38": "3rarLxUgse2CwXWZ1EqeJysfb5vXDMN8HQywZ4vTNHSpYCyQ195Qe2wsWqm28UBudtMP6jo1ibhoU9WcJe28oGbW",
  "key39": "49LtZiTn4Ki3Pn58t6G4Dp9UXjyAp3AFvysXLddzWsYNUcFeMchqTVDGPpeCy7Vdnq8gLKHHs25k5sECjZVdJggk",
  "key40": "5k3oG9YgFntuKRxLSp9bxznm9QUjJHnYShNKWsfNatJLfHzt9CVcyEHSi74worPkxEA4ckx6ZwVQ6zJHvLGe8VJR",
  "key41": "5UEyfebzc754jvFn9wJx2RxzNZMxayvTTj81P2hBAH5VrBSTYqR374nN69xkXkeLxTFcUhdKSDAV5wvwpXowRqYx"
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
