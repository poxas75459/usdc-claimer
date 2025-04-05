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
    "3vNQJMVLgzbfAHEN9jGctE1m2SNrLgkQ8XPEr8RXSdbg28VtwCDeT8nvqeb2gM87prkSAbK4n8DACNsjzcvgjJ6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YfzDBcmGnsdzTzYVAmfZRNMJfyuo3cq4Nph9aHQdbbsJ28han7KS5PiywXBetiaYpyBssQiBQf8DQaeL5fpSBK2",
  "key1": "4ZYiJx9nqj3W2HaqnwLYSgck9eamtT6kpu4oNaPkcHCHoz8uU63f6EtpXWbogXCHpyutEJUrKHfruRHsW2pxQNVh",
  "key2": "5DngiRZSBtexvgy8hBnPCkFnGQW5H8tHyhSsexeFkEiXM1E6cEGYp2pRF7Rmw5LME6nR7DbuYG4wDjQYjPxZgoDA",
  "key3": "2BwVReJd3fSq7M3R1jnmWqBvVXeLT7HzwtR4sGQrW5vbi8qgrLLja5wm5f2pfYx7BddceoTmQQmQLUh1Pby8wvG5",
  "key4": "2USt1eQqZ5mzqfiJmstUfqsbTNWqx3hUYTC9py3PZtBrrbPyXP6qkDVyziiBvu6RqKUCfEWDxhCkxLzuLCZu3hQo",
  "key5": "4BS8qN4hyynuPvmcTuJSQnoofWNMhhwJVZUor6fuKNQ6kKEyaRmH3WjUApyCYfrqLntAaEL7nSaDqXvjEHTL2hfp",
  "key6": "CgVDswLikbeDTNQ6J5hVQcd283kLkMDhH7UYnN6fPjDbJYjmxBVroQurpawf9Hk39MNngX4ysq7feykyyYRtXvH",
  "key7": "xptuv3rN1jJj6crSd1FYRuT1ibs8Uihc95QMcaPPaVUiSetrXWA4GiN3rU4uQsWTCkSRMworuapaujCaq2G1f1p",
  "key8": "4WydzLBcMTa6YsGftyBq8SsKKQgAvTfB2Yox3XhiRG4Hxa1cworM55Src3jekj5gFpfM2kzps9L74SjbkceNCyQF",
  "key9": "46qim5iv1aW7uCH8CKawydZb5nGAL9tFfBDVRtKM8Ecgr3nExH2yvwsn8pjN868ygBJd1D5cW6HGsbfrd7d38oQT",
  "key10": "2zCM779SfYT6MB58nZjhGvuLQAneaFrRNs7qa9gbFGbt8w6wFE2wozbxitPpcy8BVBtG5F7TRMmv8VXM74G8wN1w",
  "key11": "21cNLBhbUJZv2Cq8F6j2RDVPXxwgycwEoTVEDsDWuDANy2cESKufTQMgsuidEQ1yrditBxyrsNPkM3WkrcBqe2QY",
  "key12": "2DW5eMq6ansvjjbH5n2bYYwTgRGUyndfmsqgR6izXyAk674u9Tadn8xkYaWV6QkscfDurE2BKUkCE24VEoZJ4936",
  "key13": "2E4HvVWCixMy8BhjcirYChPmeVXLZX2MA3hqMSmy9cbGkVGJ8sQZHRvedrMHbuCDqCVszxTB4yjw2FuMpeqEb7FG",
  "key14": "5toqk3R6G9mWE5HazQLwYPgsNCJsPh95x6tsFfqbiYdCzDWZRKZ45TsQHuGbrp1a38odHmccGZyVc4YPzfQaEHE6",
  "key15": "5cAwAcTEVzjUBuPw24mzxkpuhJwX9tCpUDAxocEW7wbWbveR4HLiTmtRWgLfB8X6JJneuDdsqJoxZJk77YvHWRCy",
  "key16": "5Cw9uKQJQvmv11W3G61vxvLxFE4kEZDm7cPAcDQ1sRPsWiWLvERaGp5tkvRFGVEakFPXZtEWdYCu64g5L1jeVJ14",
  "key17": "3LEwzFbzs6DciooAKJimFTTmgm3E5iRtospRdPXywjzxz9bfT4wEpjYq9UxRDVVA62BLazSYsCirFwe99rwWHgRB",
  "key18": "3nKvQJRmqpR4tSR1jTKNESk5Jk41xDAf9tY8WBEHBf9fQ7ihUkywSBijtm61QLcMMjKZHGhyaRUgvvne6NNranuQ",
  "key19": "3YDisxTXWZxLvmzmUFDHNmVBihB8YxuXthAezhCRySMjrw7YzgtQFxieXJGFKARTwQD9oYBb5TLm3u4gimoEVyEp",
  "key20": "3ucXK9e8JQAQt3nPJzHAZYiXe145xwRCY1VCiHbrycaGE613K3yEFjwNd8nAPE8Pc8vkrWoLGLSih1D4jY9bjQpu",
  "key21": "33Lzjvys2UXwU59SPdGygLrRUk6cv5d5pusRWBaWBYrhsWXpBZDD1Wor4J1EXrAvLeC5trvnkKTQWatCjhNSpFz",
  "key22": "4cAeZe6DqNdkBBzuD2iqnwtabAQe8Uo8Sy2g3mZN7ZhfEdy7jfEUsjAgMCjJJo2kQPnX47DGXMqUGN26zVaG7so2",
  "key23": "4HCRwMnumHdDMXGtzeoUKTsHpag8NkTi69jV7QZk5C5tLuGCGPmyNnwaEVWGHXRWTaNeBRyndU1HKyrihGM3PNx8",
  "key24": "5K7eAXiRYfJkM49i1hoPnxU6KMh2XFWRPbS69VDYFfLaAjR2mMi7B5ERVpMfwWqYD6R1E46atGXyBtGc6VgNTJVS",
  "key25": "2as6aThmaiC5yJJDs8qfqZ4DRScpB7SZ9bWG2412WSejJKBpbGFcdKG1sojwuTcGQogcyeyjt5JmXa6NPpQLREuX",
  "key26": "61Qh8Sxfc1J7QRL8sf5nCce3YyLQaFbtbziSLShorbGfcUP5Rvebd4vi2PyvF1Vk4py8GTrutR4E2rtRghcGNAzP",
  "key27": "2ieZbBMm262MH5jUCQriuS2eHRx5MxGmKRwjBeZwBh75ofs3uNG8U2TQZeAeyarwh1i7uAYBTT18qTG3FUCHraJV",
  "key28": "k6koVctt1oAoT5xKf4DAvAkgYLH8wQ1JJ31YLJX1qtsYMiLt23wnZiDNu7JFWDt9AEWbEsvXwCLBAxwYKFreNDA",
  "key29": "4PWwTc67PHyd1ffmfRLLK6pVQn5sqnLQuRrvGwhe57uBytZdC8XK2mGihqshQjBAPHp5aD36RFmRE5nCryJ7hgra",
  "key30": "3FAUeYLzF3eEA8ozxn6du81CN74fcjkwrXUZdK75SewhQKKJzRMVMKz8o4BQq3JEHvjqsvEhdo7aRLaRvMA9bA6g",
  "key31": "4gQ2hMrZEtN5oB1hRRpCGoyddaf4YZeq9PjsKY1dru6zUKNwyDxxF8PqvhaaMLvn6VGaq2Jb49MsvCyseCkM7d7t",
  "key32": "5qXGWo8k6i4B2i6tsXSb2Mo8jxpe64LYA6prX43xNcJYjAnH9BYEZEFXsuiQPcNrNE6DWNnFJLQG2pE2Y1d2QtYk",
  "key33": "47AkZfgNBsPPCEyNhdjLj3y9gNnnqAdp4gC2USFof9Wkkb9vzd3Jc2eZ4yuWsMzRNVWCHYQdPkf51CjpyL7A5hDx",
  "key34": "56BFgd5zGkvMQFTkLUJAWdmRQrwxNyFtpZhTzjzoYboxGPsJ41xEaQt9hrc5xvBaBjcbzr76W2wH9nTGcsvYFznH",
  "key35": "44KHbwohKjpdTh8ZnRv3YRBKAW1XnP53qoQDqhbmsX857g7auHnu2ZYgwhbC91vgGk87nQvdB5KUpu9Qf8eRxsJo",
  "key36": "5aoKiKk1FKSXWfWrLsEceMMxATjRxLsusq39F2GWq7kSqbQUnLHyBwgwpzDsSKyCzCb5cAvGj5tdPzB2yjhYgSHz",
  "key37": "2DwXjBTPU46b4FUaLuajJw1hJVYev6e3b5Pxp3GCqW9FNew5QExsnUtrdat2rKqqyDTPdAeaB9xweqcXuiQvBDgq",
  "key38": "5U6NGSFtpLVQTiLCXkATBx1FAcisHhCbAw9i8jy8uBTTWpurtmyVC5v9N44iLAgspV4r8kev284Le2pTf39Sbkka",
  "key39": "3AjyZfuDDkmm1EbBw8aGBXHGJmPRqbvinZdLXQmhH2RKZ6pZ5EZWv9BbbWpSQpNL7g6xyyhsbKXsjUtmqJ4m5R9r",
  "key40": "yvxjZDac1vmXZJttsPK14pSGtRHUpgyVa88JkRoMwT7x5rVPkkLV2ksxdYHDXx7r8wnNj7usTPRwz8XkWBXppG2"
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
