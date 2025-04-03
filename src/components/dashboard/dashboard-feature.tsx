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
    "2S7h7YAbYSui9VWhbaScmV5YtrGumPF8oiynnLaLp172KtavtHn5cE4KRhJda6mnuj5ZEcaXXsfvm74jCCHUWfUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sCAPVMEuwRJvBuSrjCJbFJDyZP1Yk3rNpTQMEvNzsKUcoxSjL65zktPU68oCsK9f4AqUkEnMF6SST824WmbXw68",
  "key1": "5orasSiCB1BogJVzEDb39XiocMx126bjXhf53pTYtpkycWq6HPKf4vpdSkhizt2b1fvTxVevJEXhjd1LZnETArxe",
  "key2": "3ka3piBtyZgvNjsM1CSMPGbxzA61q1WA8NcxR3vEfCwAuUxBXufEk4WNAbKVxVqMpWSPd8fiqDJMXfgYT5aUrAof",
  "key3": "3NyXvS7kU7B3nY1egCzgwZcCkq3DdSxokjM7DzL3172GkA2LGYBSoTxxcvqN1XaL4rxuc1Vog1GWdq9eRFvDj3xy",
  "key4": "58HATznGJpGT6B8o9GkEvHT2zReLo7NxeJZFkEkLUHKdLSLXjBNQ1WXHweUi9P8n8Wo36wimS4bvYuQ7Y6AhkaZS",
  "key5": "57ChNEyDR9oCg1Z6TJ9hnR4rJsWkHXvu45WTHQNdKgfxQHxUgnSkZ6nacBV9LFC4ZxuSTo2NvZ7ZwTC6bvpePjuq",
  "key6": "4B1aSdG6Dk7UQhe4VVgrV9PdtALuF3qVsxK6eY545grGHtd688QexyevEN9zucs6BEeZtZcJDyARCbqZ95TTXFuS",
  "key7": "5eNqkFCqT6Y6CdY8dNTni5ss58Epok1jwWV5YiEScwjLwveY8r5jgaAqpNRjrH441ys6WhaC38TpvJfG7HRU8fQh",
  "key8": "2ukgJ5D9BvndFS3h8E3NQ2McNZFz6itXomL5Cj623tUhnaDScZVfG51WD1gPmcH6ksp7tqEtapDMKzT8jc6xajmW",
  "key9": "5xDxhWkpNgSHyKo1JQqHKgeEqsgt42T8LemN6gaMDyRfeWbLXbX2KjSE2Q1TJHbSp4m2PBkD9RzPoTfzzmGvUgtM",
  "key10": "51NkPF1Am417fVh5y3f3n6Xc5Mnn8sfS4s8HLCuoq8Yg35biySDutZNywxcAtofFr1VujQR6j6W5dgsTfd97k8gn",
  "key11": "4L4HTbWxcopCxfimpUSKKztTzs5mQfRkYhL3hZTix4amQLr1m9rU8F3q8idTAhwywKYSaUHSDBahTo6wDb4fjsck",
  "key12": "2RbYiCkpKA6VRgyieZ4J7RK1E4FukrCRCbYcqdHvXkUKkYuTGGGKQ2BjrGPq642A5UaCbR2Pnby7tJGhbUdYc6t2",
  "key13": "51aYXpSAp5sPo69b99TYPcpmmAUA4g15EvBzPi9MBeb3HUvB7tdse7RuMttWFNYGqN1uDMUr1TiJRC4n1yZd56jM",
  "key14": "4shUUYk1koDRjtjquv7dfwYYVB583K6t32S8q5dDr5qxeobSEHXEnhhrB34jBjKp4iJK3Ah9wCSwCVBvFsCRJNRE",
  "key15": "4gy8wUWJkuVGbBw13yZwTAbVoH36SfHcLDuqXMKAsoCcDiMVMKUNJMvFcW55QbumqjSsCqLitzHB2DPXH5WEJDNr",
  "key16": "4evxtUxUta8yW1WZhmDKPMQWHcYEnaZSvNrwYa7z6jSjrizdK7hc4bfBSp51CGLQh7XuiTrP5FVuj2VFSyV79uwP",
  "key17": "qezf1iAEoC77z96Mv8NTuWnZCvaQEgRkoB2bEi9R4NZTPYHHj5A9vrpzK2rVx826L4VmgGPMKcttGCCN8weJXtx",
  "key18": "29y9Ydv2XC2ZZvZEepiGJcVdFtiqGXJdqQKUWXSXN1CiN1TX6wsfsgk9kZTUzJwSaa7uwDsZzqD98rXMQ5SrJ8gG",
  "key19": "62Ben7gMxT1DY7aYagLnDabJjSSRdHqrNvZi26pBUJ131Yw9GUtSBE5BbMchRgnPyDdNUydjp5MsAKoj7twQPe9a",
  "key20": "5MLBKhDTAgTuBSpn2Xf6zGdsiv1gic5P37RPnCpYht5eS8phuo3DXV87tG7NHDQzbZQmuGWk8KPsFPu4SoGXdtrg",
  "key21": "YPKrCvwwKmihg2MsCd8Ljs4nAj25WKBHLnrVXVHvTZJDLBfWSW1gNLmCoeVdjDPgBr4tK6g8nf5pzaR2fKurgev",
  "key22": "5dTFLe2B5MP9wHZFYVcYXyEc2cwZxst1jpt2xC4inEnPm8Lq92AYCzyrxMhWPHfgo2p5t4vbznCn69FV2h2DGfSE",
  "key23": "eTKMvjV8gcPZgVXnAmUZRGgMWCHhpXnaxSQSbVJvQGFujrXnEECcUnUaNMxPe3uJQnvUAd1YX8jDAYUM859v1pq",
  "key24": "y2EGobhwKEjYZBDfumEezGKx3p6LccfjBasJhNFwmc4G5sMTXgApNJEmJZdXzzkcMvCpj73q56kJW7EL8rLjPwG",
  "key25": "3zBGsB54AN4cGzUAh8vQkNabFw14rA1LJCMsrxg4oYKp8UxjV3XTb5BnAY1SfPCYAcneLbfG1JykhKYVwErJ2PfV",
  "key26": "2EwF4g5JrzRrxZKdKgWyGAN4UTzv4bY2gcEbTztRkY3eMfnsEa8i3LiPqVcft4yo4LnwbVHaNXiYEX9cy6Hd52Bi",
  "key27": "2bGqE62kJcNuvphrDCFfZ8TnhhYQs5Jf137DA8oo8wAykymAX5hpzQg1XoraySgWYYuctD333zPARYjFsLsE3Bnd",
  "key28": "32bsmh6T3572utCQQk76PChSPRdwAK2CCHr5KN68BypGg6Y2EGq3eYmUzfUu9jPComtpkvQf8Y4wi6oqWACFzpQy",
  "key29": "2ZiFNKCAb2MERfG6kFCWEE8b1zA6Lm22ZRYoBVCevyw7xkZRUx1v999Yv9k7BRrcVUcgChSaWxUug822sn4czH1G",
  "key30": "2DHZe4WbaGzKvVUdw1ba77hAAFebs5Lx8DMCNQn5XDrMNrVPFtn6hhCqRKnua15PFRE21TLAHR3c8b3Fv4gZkxrd",
  "key31": "2k56PTFjDtCEp6JdofbDJ5GGwbVAUfeKqPsvZq3k7Fa6Rf5fwWFEQDQGw6q5aJazKhPLu1m5FAv6P5nZrN8C6vdR",
  "key32": "2Wt32vDqLG6LCGvjVjLCoGPB4JYrooqHpwdniTJohuYVSG9Y1eEzC156wBsDJikwLZZvTkvNDEnfcVus1a8cYJto",
  "key33": "3nFbABz3TusYGwuyXmwnE5itca56ajGUzELdmmiLu4YBFt7XaNz72z5MnAxSs1L5jrFauwij6sxGqHJDKRSsAcK2",
  "key34": "3p7MePFBL3WHQUWqrDximcWKLq7Z3uBP7BXj3grNqZLmD6VL6CrN4y9wGBvbuJAv9VeWiQYaUUyfSpnjB1VcXKii",
  "key35": "2YqjwXDG4SNazrPPfgD9vFsdh5bevYkbsEb4XXFDvuE98wF1dEaU6auyMoTCguLc8iph3bGfJjDm439MYjk45zuF",
  "key36": "4EH9tfje3sHX92DStefYVeGeJ89jCo3tfxrqruDA9aA9bfb3LbcAd2j3D9ma4WbKw4XnDWrmXgPGAd8c9FgCUwJc",
  "key37": "4Q5hy2tERpBRP4J91tQJwpQ5o1aXXDB9DDiFcqrwXXrrVAK3NmrTETngRxtWoEFM4C2kNFagpL655C97xvtAiCcx",
  "key38": "2UHwbSETBMq2LPzzQhYHWLd8Dg77H326ZdRptJRx1FN9RXo5CwZzAYDKfz6nZjuYTp7RLe6oi5gV39t17dvzxz1k",
  "key39": "5KVNaGwiM6V6p1sRpDTKB7cHzZ8wVGHoJzHUg1Src4gXVf3K6jFghGSjGZDiWTP2RsLZBkwywumjmKvgZRbHF1xm",
  "key40": "55mnYExtipLA9p3oTCZXNUfQwusWoFxnZDmgoGeFYsdzKHjL8NKo39bLZMGwER4LZkMtd1F4P54YHn8ryEHhpmRo",
  "key41": "275PCVFXD6MLAF6wX9J3Qp4eBdJyktTuwQrEuBWR2NH54DnZwjYfVgxxgTsxmMUqs7EvaxX33FUsDd434D4gATW9",
  "key42": "5cPfdh4vkTwojVLw2ZrPQu8rZCQxq8j6JS6b4kWa7gFZduuv8cGDMBhuCgmr5PQAEyEG9BtEi3yLG8RN3wkfyLbs"
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
