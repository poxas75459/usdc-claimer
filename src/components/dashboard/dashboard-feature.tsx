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
    "6yKzatdXgaCLGh63wiyNQrwAMN7eHy5bPWLGkXpqVTRNUqYGJJ41gp9F1yLReNj7oEM7EjPsKB8Yh39H2dm32co"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33GxueAuGQzac8HbS7N2DJEuMpb29wmXSd5Pf5Yygj4rziPyycryHCnvuvaF4LduknFw1KnA1R8DVuvSCu4C6g9P",
  "key1": "2zdoUyXz53kWKCQpBuyk7iJNefsn26jLKcGwzVA4Uvf99SrMAYvQXDVCMzjMLAiw42KVFxm5KMzM1nb5iXUJjBhB",
  "key2": "5b6ZNPn9FPafHUp5vpgFHCPQ57u5mstLk2sCpsrC7ZRF9seYWaRz2qBpajzGFq37FaHiqqe2xEKMiFdz8ii5WnsW",
  "key3": "5igTw6eKGq2iV1DSWkT8sGPLWpu8mxYz2s7bg6Wo62TwWT2t8TAtRcVrj1g6KpapNEQ3rgHYBy4dxf8MBwjLfeSY",
  "key4": "25YAP1venzZDwRXtWJMLk31GZnusGaXR5Vj7nSKFuRKNNmnPd9xMdzJoG2C3PffrrKjAMUkxA3gDMounX1kGacv7",
  "key5": "pfj4JDnn1QiGYFvfbm221z45e19mJntqpKDQtwHYC73YSzQPksuS8gk8ZJn1PJUR8kPA3YstDd7N3B5WTzqLny7",
  "key6": "3WssWg5G1tPzMNKgs1ro6qDFfswZg72KGySQtZsKfTQSjyEK8mEy4t6MyRNi8QWU2yLwmRZUwNwwpxTPkFJ2Le8M",
  "key7": "4se3rsqfKe4Rv5r7CJaDTCYGfHsPPfcmdmbiTxDs834dgGK2W5As2nNtpjrt1qMF5wsaQu9ve6friG8nhbqYwfuH",
  "key8": "2JFUmzLApPb9Uj451wCMBFcMe5qSAvoNa3rXurPN5mifKdvFqSGEwxFBya9oUr1rnjMgcb7FJBfiqLcozk6o5QE4",
  "key9": "2fM36XY1TQGehnmjqdqREaw1Q6WNMVs34qy1QRkvd3enCihsFcS8jBr9r7LMLpQxBG6NnNzoj1be8GcTYJyt2N4M",
  "key10": "2Tarst2FDNpgT2h3SSM6b6fMEVZc29cLfwGztpPyekit1YseZB9jr5tRnMMrfLpSgDy7KCZ3q7TfvfgBf1nHeNzu",
  "key11": "4YrLGJssWdTVrM2T2pgv84g9dJCBgrg3hrzCr8WoVgb4a33UN9uwWForBC7sEUV1Q8RveGTNznD3zNZ8xrFRB8ia",
  "key12": "2TVJEYchvU3uTQYGpPSBq85acANW9DtbkeYCE8RVzrKy9wCjnRQSeZfYAuTRj9ddzECDiToXFMHoLP2QtLzrfNCj",
  "key13": "5momQUHujwjTGTpZdUpBQeBQWFVdhg81Cn7TAiYhYv7jJRMkr7PnkFA4viEJ1SeCor5AeXQEb5XtmncyzkCBqvTb",
  "key14": "5h3DVt37c2qm5ExnsddX1iCgfscYtW5etqond9ECDWXQEKMsBkBLKPVF6xqVKTKtxsYS7y8fCzunuyqsNoju6FLi",
  "key15": "3xS4LDhRAG8XzkVVBTMZXh57Pdq4FHLxZKcyzCw7EdaNNoQzN4Km7GmFfVNuFkzAvpuCVXRBTni9CAq8uzz9NDL5",
  "key16": "55QcUiFJZtY6J5D7e9K7NWq9v1TNdGjUTBmq6zjGgGdMmr5ZS2sRsC61CYrGwvcNqJjyjRa2t9LQ5T6w5MTqncKP",
  "key17": "2vm435WfjsHJMYrdXF2eDZrtdvzKkmtKdYpgfnTjdpT3xbY3HmzL4hgFuT44TogJdVhrtGsY4Zbgkhk4o8KSEqcp",
  "key18": "snrsEMYmLu1upe3a3aSyf5Q1vyiaDwG4B3jc7svHnwkA4Xf12ymmsoh9uKd1XwaY5vr5bd1N247Q26kSe6Pyofu",
  "key19": "5nBeMjKKErviQMz6G7ZVLNydkpXwPkLScKekPW7sMuPjJPWW3eS39thxKqZqHTyuEPNFUDMJ8bVq3X1Z6g1RfczR",
  "key20": "3adLrYCCoGhiGUTpTgk9zeQQxC4YhtY3AAikWmQJtcDu91nVtXE647SMVQtarwmizz7F4tZEyt29K3bX3F1DPvqX",
  "key21": "4DrVS6ywcsLmtVNEbw3cTQYAV2KbaHKPotwoEKD8vdkRm2NANaBpbSwtnrq8AX6nzQFoannvJweFTM5qChmLMWtW",
  "key22": "66vS7yfQjAkL9PUF1X9B6zv68nepie8x1QSm2q7SWHkz9jwmGAqtrPfPdt9BjruJxMfP3Hfx2soLTwrZJyUyUVWx",
  "key23": "gVsHZU98e8GyTWrcu6wvi9aw31Fcv3ZbdTWviZnEH2N5EJsSxLAzkr5yXSuKM8oEf7tzoPCWjCP8CQi2vGNx98n",
  "key24": "2qwjg5Xkmvv1JyDpQ2jEF5HQvuqm1JhkAJYA3MjXvp6dJadf9kTFMa18TxYUex2q4Cy4jQr7B1aZFYksYsga8JpZ",
  "key25": "48ubA9684d98uCGJazST8wUugAJMy8iXq8VtES2Scxp7otBoh3XBaVRBgB31mZjLahaPULcAPHTnFF8AqNM5aEQs",
  "key26": "2SJ9AxsqGmZFaW6cfKeScpScT8DwzVbudZQ3gQZTAb3B7MS4xS4vw7yDWVroJEo2hsRNsC6a6yVL1RtpeGJQTTyk",
  "key27": "2Dk9Dv61aRm3QAYFhwtMAy2Zek3VEvLpnnp4rNwcMgkrYrr5jZfQk14MHrgdabeEVawb4Aa8cr9R6BCmgpi5r2Gw",
  "key28": "2Q1y27sBnJSFboSXG4SQYxUrDTzcbKWP6pADMpQ244oBYsG1j6wxGS1oWfe43aMpnmgs8ZquN2wS2rrd8Frg5SAH",
  "key29": "3oPMRveUAy9KHs2mouLGw4N6LKqsmQSYX1fTYUfEo7aqg9wDRrxtDyByrwvYyhyUtkXkNMmQVUQdfQwseZY4d66G",
  "key30": "326mUHvkbCgrC2pT696CdzN9ShfbqHscGczSQcxJQotbRJDBoCJDqvFwqcH4zxjpLwpxQLW1dB9KGA3SCxya46Kz"
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
