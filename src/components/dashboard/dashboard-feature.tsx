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
    "3Tm3fuTrFSmNMxJjs2KY2NonNCQfM4NqSumxi48suUsiZXK75pMihKZ16K6XSCbc1LSXrVUCoa9dZUfq1JNM9Gva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37AeSzMMr4Q6X7xpSAXdBSrbDj71kPrWYRxkYH8RWEopQj5XChgyDXppvscRrs8LjWA8q5nUjQBrWTLMpsGKPcMb",
  "key1": "TJCRajSQtFGqPDCjDa7MUhGwccgw5n21RyHTjnAeVnBSGvQoVZQD7QGPahs3rQtQ5ReS3zWwRicayHqXEKpBaXL",
  "key2": "317is5L5KsbJzR8s4Z5CFV8cSUcCfku1ZSVEVs1HYYYGXTUyrFyYACXStWvc52s5QJFDcXSH3j1nXEnu5M9FrzRf",
  "key3": "jDdiJ1q8gNqyVC6mHc7VcFPk6dnSuAW7XQbRMiMtxWguWFTJF1okh7N3sXV7S46VZTRovTiAygUqJmsGabWoytV",
  "key4": "3SB9nbBA1g5QjeGZwErmRRKhc42n5gYeaTWAwToknkWR94Vi7MXfNB2vve3ZU6qTDwbsJ9k9Ky5PpQGZZRw2BCt5",
  "key5": "2F7QTRAAccMUfbQ9exjFHcizYc9tnCuta9ev3rmBgVq3KFwreWATuxm4mYGDr7GyBKS4BPqcEdqJcjpUh8JuPcMR",
  "key6": "2eDFHNtb12R6JiL5CxtQvb1YvLnTwk5JrD1gpvgV8pYCAZYoGJNrDo2uHQT9qwwACvtJF4LWjZVZwiXnv6M1AEvY",
  "key7": "4cmSaLG7YxYWopyEwFqtcnpYm1Se2zpw1jYRtVukBY8NQk7LSN7Y8Yff9j2noB6wQrxfLP7bADoBUkvVwyYtB33f",
  "key8": "5hiQukY4fjn3gwhEvpiGKhjavS4Z8LqkuccF5MmVt9raFVJwUHqvWmcvrkoYG8AQreb7ugTrtZzaypZR5uSZgGUx",
  "key9": "XkiuFmf4zTfCHLV54857uMRiBuqKfJcssh4qshiTG4Abv8STroms7mqNQdA5ga3uhriBwj1jrW1LFhLYzNrHaim",
  "key10": "R91tADutdrE7prJwFSauJTPKKHqmrgUXvseBvCEAPWgi6PXqrwhw8cN6YY16rC1iLeknBG3X4gyYVP4U8MM3Pt3",
  "key11": "4wV8oAbzcyHzHh9KaXHZfJQHtzNgZPqBRJPV9d8zHW1BJ9fonj66CG6Rg5v1g31Xn7Uz8mAo34m7ZXhBDFmEpANs",
  "key12": "4rqDmPp2Y4AzYzNEHDfhyd4js3uvYBegu51E6vhYSEsphzmxth1FZB859mC8mCyt4ZHCFxqa7mauHkpxww8Bax3W",
  "key13": "3MdAzEUuvXoPkJYFpCsTNuzwYiJkzForfcaQRamqfYk6xb2s6s78sfjh5Zpkfb4CEHNofiMmUdH6ByKF14vU6G3d",
  "key14": "a4xuE3rfLun5BcFrHdEL7txz6HgXKN5wpvud5pw6SetFg3obpxpgeJjHV6Q1XFjUDozEYkPwudC6xUtEdZeCLbf",
  "key15": "2EXd7jfZzVspcv5kpqmGTKghREKkYWFw4yykp8xUSv5fsTA4CKJyABiXPjBLDoyBbK6wBKfDpunDNzKVFaiknrx5",
  "key16": "2YWyEXLyJTbnPuGibudP2nMnGxzosbMqPWx1bYQwfYD7buvwnTG7osR25kYXzh6a6JLhtrUVMkEm7XtSTfb3vWTi",
  "key17": "2xXLjvnL7rth9MFjvX43QnDE7Q7KM5pKfUCTiEKoJU2qLPSwEg2BwzRbwfQ96A4DxQAeH1JqqkRv7rKwksezptpk",
  "key18": "49FW2h2tS246sEpgKQUESZsttPAEhwzzGP2XBFL9rNyibWGZr973T7Vwt99cWZestDtEayMtmVM3fJaWu4KUd863",
  "key19": "2oMRqmkS2PptiqVNNhXAFyYwuqNsBxp3QPFrij7EBJ6MrzS8uFUffzzsj9kS1rBP2oxPxVsRASJ59iAfuV8pnvM1",
  "key20": "2W4Tm7Um2Jj56NjcpnWJLmz4oKzPNSNXgwTSF72CaMTZ9ABL8ApEsosHXTUf3Tx91UTEKQecm86FwyfR36PS9kfm",
  "key21": "2BQXrUmxCn2pdjCpPt3ctb98XPwtghLW4DJ27fPP5SqMn7imuQHYGdEKzPc9f4b97QQmtcL1wQ2jpa49CNLEppHH",
  "key22": "2hKTVc1nKEX3tM1KmMPhYdsRmFUqKZbunKWfCyWPKEybbGLvKbUUZLDT7y1DuSGybJeGUnyefP3x3RK1jydcJLK4",
  "key23": "2FJEudeswvp1bTNgkeatwk7z6MoGUuvY6SrJE1UwYGGRY3rN4A4qTDEP4d2B4QQTEsuSoNn8WRaF93zuWk8BW9u9",
  "key24": "5QT4g3f67BTyFJW4tbonTwWy9v2dx4GxqCRNNXTkEe7YbpgifcAxkDnJkPBHDRVwBVDAg8tKrofHiUbivvfE2bNC"
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
