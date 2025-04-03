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
    "24WRQBskWjHbp6DAutkaVATmpvQvja8aNgjwXSQ356c1i7ep1jhvUUtNNRjbNdKWh1dvgnoZhc3C1BBb4bhngmkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UTgNiHXvAfBiqhPfiX4qMdhmT4RASKc9nShrrZdLoU2vt3AcAeQw835nZUPJteX93G6saoYgtkmb9of7Mavh7DH",
  "key1": "5xmve53vJApYsQ6LJYgXHV2Vb8Xps2zFx4Hrkb76vZ8g4u2dVhvZHveEsFNyKUL8MSwYWfnyT6c3mJRsUfyGa5VZ",
  "key2": "491LD542zsAfYf9oHf12AcAkcmcEsQppBLPTdz4PFKvZatDo2hGRyQch2MJmssPQoSM8ZDjRafuCsfthHfXHhgkV",
  "key3": "4MeirXNA4D8yHKhz1w5KaZWg6aJczvP3ciX44RGWriB4KqBU92sfoLx9zwXDpGKYqrPpNyW9rqevukrPWFNhVCiT",
  "key4": "34tB5dYP2NVubSafhyyjfxB8vA2ao8xqbiM1sZw3vFks9Y4Usf4w5hQzxbxQx847BJ7nW4h5PbQmFqArx9FSGPR7",
  "key5": "4AoaopBv8DimXvXxYTrHfwzCxUWmy3yfLX3aRDQkXNaX4JQ9QoFE9u9FrrceZZTRLRo7Re9qnLGmvSnH1pc53cHh",
  "key6": "en9478k9fJMm2Bis29qVkjJqXP2Y37R5jxDghMwJ241vQLhnP5cuTkfmopUJcRoSrGM6yLjgy1TDcDAyRqYrGdw",
  "key7": "3C5k3cYQTQYMJa99Ygx8so1vDi5mjyzGYwnn2LSpTKPxux2r1haNV6fkcFbyFw6gvDUW8A3HWqLX3GTTMEvwDaCC",
  "key8": "29puGhJpH9XGKesA1Exf6ZB2aTw1CsaoTCaZKwc6hhnfJ4H6aL9dymK9Jc5ZinMsp2dTiGygHP5MyZPgZ6TLWYeb",
  "key9": "2uJBS2Y1PiZ2L3dfLGDXSvpGbAhyzDCuF1qWa2dZB9ngvsdyfVEQJwyJtfVUzEyqgAE4kcyTxshXjuRnsipuxisT",
  "key10": "2i6SEUKT3r8JcxMYxv4vwxaG1mXoNX8KxSJs6wdBHJhqd4vaLwn8bsBF3C4XQNvUqLVeuFNdSabTpTyAvz6SxQTY",
  "key11": "28m21nUPRRodUzjHWinAibL91TuUiJeAqFs88Kcw2MSdJzGh2cJH1rT8XSZ1734arb2vNe3R5sMnHS1Gu6jYBdg2",
  "key12": "BQpaMrDkisJ3YGgNrC6XFvqynrB5VhyycndJzVBaLaCeu5nDW98o6DYmqpUai6MqJ1FnoX8yxp8Kjp1vdeQJxvr",
  "key13": "2xVkFKS7v2LeYeJWS2h32YT9wmeuUvEY4hyV4PGx8WJmn81w83KGuTN2BJ3MwqDk2qD4R2aoDZaKmR7syoBrX7x",
  "key14": "mjPbeHR3bkKAC4cB5auNLqu6uNjv1ouShrGpMwnbtejj2qiZQ9EWUPBgiuNLWsjdooCLMLC4xHeemYZMz9qVULH",
  "key15": "2UDUKS2ErgvkjSiSgNuyrkAMJGFGD3yDSN8QtTPXPLnXY3gBNSxuwK92ez1o7fPWaP98swPat8ZYL3PwcnmQgAwQ",
  "key16": "iqHyyTt4d8v2Vs2pTjA11udZPvPeHZcwtoBHkGkdDPFgF5k5b5vaKdSQMbEzkrvjwsapxLAX2Xn81ZnkrTrHTFa",
  "key17": "5ueTgauSNs7fcMW2BQDwm8QUj15vJYpVikAfkjSySHHQ1YbwKX9BgnoZzbDT8TSBdm7oR4NMHZLed83jLA2aEu69",
  "key18": "5VtRRdyXosQ5kfB817WXpeUAg8xT9XMMxzXeVcUFUpbXj1jVoFSBWZMEeKbkgVmtqsGPEnF2ikPniBZkFdJhpCEf",
  "key19": "fd6C7w6a3aQgn2B9nkPVBL9avoeWZuPLX4b8EgCrfowFtPk421hRmsEwvjnC1Sgey72CDzmrKQSfqYA3tdE5jAM",
  "key20": "cd8APsqPKvERDgBjoiFbAm83Rm8sjZSYf1bgBb1RG4YnAd2bpADGW9d6GvZQpKk7odJbyinKFfwDeKVGpibWn2h",
  "key21": "Sc63mt3CXfFDbNQRn8MYWvrJLvQHmEPYgxniozXDfbVhnhdCnMz975tawB6VQH7WJDxk6brcXdTgMHQYHBjcatg",
  "key22": "56ETC8NtbAyeghkawVLDrWpW1CMY8JqR7nzrZQoP91DdsggTqd5nwCKtTd3CXsuKYV96JZVFg98P5EpY22sKBK92",
  "key23": "4hsfA7qynoXLdWHDAGEQU5AVy19YMd9Pc13R9s8ZfPFWvN6KR3HT3xN6gQbvMH2AhBnzL8td5pGE39W33GVngAf5",
  "key24": "2ydXhkMeW8kn4j5NRkPv5VEncGGjGddyf3pg4ERC5ihELTZwCLPSbL5HWfhgN1F51ZxcoE5hCGtuuL2q9CXBs9mA",
  "key25": "1tazvJYnnsKbVuNhru2GcvoS8HnHgkNfHYMZ2wZ3xKzAhRwpcnJLiuuoKWxJk8W7REKqmw4zuBbUhfY7fEBkzpC",
  "key26": "2T2S23PXYUrTMQoWda2Gy5ZLbJKYvxPvk5f73c7VZDk9zoFVzYbmppbThc8kqMRF5aDXUYeW9RykEbVBKK7PibGv",
  "key27": "3uiTKzVqLqrWbAjTGav1K2jqHYe4wk3zDwGw2SkPXYpMr4FMcnVC6ccn269cpYq9Kkbdz19LGuH1z31tiQjmYiKy",
  "key28": "BabsrHAagsho8b9USQxUcSrq4x9YKGTiEu6A2Rs4cnr82rK9RWrs2xtYm8qWFLmZYsUthhsEA7c3dLjrM95oij9",
  "key29": "4Vrwy4He6ZUNfk4wRhwQbPpPZbKc6zXHSR3NzCaG1HH27igXboDSwmoUst6WctAcULWurZSGMYVkUvus11MR2hxD",
  "key30": "5LmYisch7kqsAopc3SGtTu3LKf8gYozqt1Em5xZ5jfS75SSGmysWQj2E798e8LmqKFRzBsDv2MRi1zRQkdj3fubZ",
  "key31": "5tPvPHgDcdxDYFyCGdqKKPUXh48RQGu6pzu1u6ybmoMYSjyj24ViJYyGJK54cL2nw3ZJRjJ9o3RnwWxWVHeHLMwD",
  "key32": "ZXso4urLek6WCKzZjp3xtWxQ18HN2iw5MPDGuMojhWqGQprxVXhj8Bcx6cnJBCUFz7fRYt5TPfnk7XjXZwS79fw",
  "key33": "2NJyMMW2ZEDt3kXnBL4q6dhBzTz6D6XmjM7zrViZbpYLd9L5Xnja1yQb4BURF8M4LSzjYsEVTgM4i66EHRiV4iDH",
  "key34": "45YBHqYjxcFaY8hGUyNYqdSgFYLC8mmJiCa4gU9QSm7eivHeQYSM9ZodR5iFTtnwGckW5sayEKekjKZW8CGJX8D3",
  "key35": "2uWxmL6y4vxq7i9tHP5EJhCE7oVWa7DWdGmYwG62ubg7Aw6pTuEScqzL7CuFckWEdmdJApYUyRikvKA5idLfNWQW",
  "key36": "2scCismVa1FnToVvB5GXoDSne1RwaJn3sRanCMoefnq81QAZoRXdVGWwMyu9UsTrgh6CCq39YMx7UNdVprTboukc",
  "key37": "4MYobbCXbaKB8iQ6h16acCueeeLF88Rpd2APWypJTjncjgXANCGMqFaVR1Zc4GFGe6SKBxZue2T7RxT4DqYzdKnw",
  "key38": "34tMDYVSbE25VgxFaSMtkVXBqLQBtQ3F7pqb89czTPRAov2mzKzgMY9eFLLdMhFkfHTGEwsmA9QnvtkNmGwP2Xhn"
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
