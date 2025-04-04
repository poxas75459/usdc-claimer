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
    "2mbMZLRRqa2KDwwUzSFfwYwSf9sXGmNtMwyoBA5FsFvRK7KyqvwqDJoturnsme4kovEEZgTAWvjmQ68pfgBHz3X1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27BsGBRcdEqP9rLgMa9wH6TBySTjTYuRBSUXNy7r1Z9M42w4g2vwoYFGP53VXwwp6nj1NdrCkjQF156qV9nPs41W",
  "key1": "2NL5hcCMpkHkzo8XqgmWanUWDux4yKTrgLm3sTJH4fbYvaHjm26YPDjdQKLANZMY1QJZ1cCbY3Qbi6aAtBpqiQyK",
  "key2": "59xtZbMH5vnuLk8yX7ADW3AswGqB2KEEsttCqFZSWhycQGdrsoQr8VEhMsqAkg6dXG868juEQ8EF3oi3NvppA4g5",
  "key3": "4v2e7GrRT3PRmT1kgpuA9Lj2jssWRfpDcrvWnZfnvMnKaJw95UFZRyCZrFQLyGuErJrBjzqD3dEWqwXWgQcXLX6k",
  "key4": "29CjgZHHrihFCWpdszBwqRMCuoKKnvijGTuqK4159PzPDr8EsL51CQtCdSp3cK1NeN9Bq36ngLuh3veoFiMhEJgp",
  "key5": "5Y6ZqEBUJmftrxSTvEWbBHrFBwVhBBfriFsHmVMrBZa3bRh7T98a4jmJTQy4ievh494SEwbPtMvarPyE3mi94Rgx",
  "key6": "4mp91CRMYnargAVxbdfkc6ky4NWo9wXH3npfFBMX1PUZu5metYLa7zPE831BKnRQa9r6MbUopkr68hCVVKj8W71f",
  "key7": "5FdSLaxYE3ovTqMCa5NaaaMJyxdoKadN9fAEEMYjint6TGniXr84gqxJZT72rBs9LQA13hj3VAuXZQr5XgCpq9rC",
  "key8": "5ZGmB4K25CyvirxLiHr2cik6MQhPXSJhwXER7N91d8g59wC3bAactTtroDrm3m74TnPYe6cKnSLqbWxfW9t6SzNF",
  "key9": "2gPvK6oFSxCtzv2AQPCWScyN3qRs1dSVckPaessd61gufBbY1jgSD9Hc3tPvqpjRESVhq2aGVqJV1FJaojzYHCKd",
  "key10": "vaUbLKxVg6DUFwENKcERroYhbmb4xYa5MYn2sh5Kf9Qpn1JScLEXk91syJh6i6bmYMrXJDySBp7BryPNbQvPnYn",
  "key11": "st6z24LvPAiHK7V9ZZaEQYJHuZ8BFEDBEFJg2FLtL8DGh8o6R5c9jE4WX29faEw8hTEHAi4pSw7oJ9AndsXw8Pm",
  "key12": "3YuMbL18fT5VRtWBmu1E4Tmg9bJCAHZpBvuUySJByXcZUQ5PXJhYW2evxyyfDAujVJZEY1rQvgYmmT7F8ycKk6Am",
  "key13": "3VPeJzPs7Eeuv1TQAvoQYWAYnEQ94P3ywpMYsVTGXLU7FwsVTkEyEAPPRXJdRPTeTQcu4ioe1pyY4UohReRVpdnP",
  "key14": "PeTEMjxXX5yZ645335Zc4sJdBogy5NgBemMZx94qyjvpPkXdhCk7H93MuS5xHeZYCnU7XQtQcrPnSvUU6KCAjaX",
  "key15": "3QHPDz8wsk9QJBnvhQEm1iJYNCs9QJFo1rNXAQZ33GpyeAPDNG6wgMBGmQGM7BGNMYSVXCHwat7EgejNg6F9Dyyb",
  "key16": "5xKLDiweZBMwbjk1tS1dYjSqtTPfJBWMQTshk1fSPpYkqHwV5wCp9GaJyM8cpxoEkzFznERDu7U9idj28RR18k4A",
  "key17": "2FhiTpXuSiZF4U5Xs4jZ92FgsmXZnefUW9NG49i3kxjXcM4dAphMtdwsa5VpmNKa6nMzYDb4WwN7dzZcmTDNXDio",
  "key18": "53KBeXgaEF8b3n6CQi8AaamHzADts2kDQtvFYssaj9nQi29xxnHfpUi3xpNP51y748bsk8CP2Z3z6knFmYqEy5Qd",
  "key19": "4PC8kTYD4hxCJzTSUZtKkfYYqEfuccJYR9KBsGceexLYXjg2w5eo1nyAiMsRQvEmx2knDZjNxfGeZ8W6BDjYiuAq",
  "key20": "3fGmJarB6BrpvtuQaiPm7gHQWLh2tUqPmLqGHrCxoBTrWQHZHKfrD4xseWMsRysQhacHRdg32Vehwfm4KEiwGoAt",
  "key21": "2mBQUNyFMfe7WdUqrjjGetLkVEyamLbtXZehcKVYZCBYcdWs2w2Pw2WHHpMysv1WTfzZu4im3DPL2regLLm2xz7Z",
  "key22": "3PCuy2zGS8hhGuajsWsNrzEBj922dHDB1MqSfrojqbjvnAEiuxCQgQJvuPv1WFC6pgzpmCXKX7Qmje1BdjZdKjP8",
  "key23": "dr7eNR7HvpoKonkXJP8KiXWWAavVx9fj6tyWynA6JVJGtQ7tYBp8EkxGUeSiiV2gUx6yAXEjrYwfdHF9xLswzpu",
  "key24": "3JUvdpWa9RUHn8t62CECT8TSR4AtpNPFP24Fcme6dZhuVXXbtrLA9L14m8JpdR6nbXxwsniRa751WK1hEmfe2a7d",
  "key25": "5StgVEH4wZ9hHq5EAAiKPDEDd8emEF8NKrqUztNLsoM7BZn8f4kPHEp59maefsdpYxmJZ7CKcSaB561qDLbSgjTp",
  "key26": "2uKCi5UFMDeGz4E9M4Uec8RUJdtvB7bPjuDTkQZEcpKDfvHPZz6zCk1W3Xypcdk9kKwYKSi8GoAdAvhVDqNE5tZ3",
  "key27": "2WhhsdGwsfTX7waUzrd8saMUV3YRqNPyj7of9uMhkprQsfz1StXXD8TaW8FnXJNTkwEcJQuT9zsTYEieZnXdsL4S",
  "key28": "5c1NWKWjUd2muZ3vt3fV1d1hgGRiAgGcw9ECNjEenZAq2zfzTczkm9xaD9wnJ7irMtH2oyzUUAK96ybEZceXrAas",
  "key29": "32nef21fP44WSdsBzSmyGjXWoCVf5BzeJn2mv2GiBdezSi9WfZwf6FTNC1hrXWh4REo43wq5RhZw4fPHuV4RUR5Z",
  "key30": "2UxU6kqmXJ6zoehLNWrD4ts8Q4ehy4YnwKDBKW42UTFb4AsL93PuTev2VmcvNy6J7X63twDyHVQSbp5CLoGV8HQF",
  "key31": "5EvYEDpfyNKvvum5PDafgThRwsc8yJgfihXUb8sjt8AwV7pR8YYFBog6j7ph2xY8jGD5rmNdZD52mhzfaptLBfXz",
  "key32": "62Dg4PcM2UEaFa1iYaJx7WuV8PXH8BBvFZ99qdRuZoLMTjHYQZvKubJgxaLVrCVcfyDgpyZj9XxXthfhQb4rY6n9",
  "key33": "3U2piXPAFjcTBiudpfbxrt3tecT7Ugq7yDxj7jFXKuSnQ29uDZ8BRNx64WrBAYgRQu8d8YfHhTtzNNNsVkgZ3h5R",
  "key34": "5JgayAvT5Mq2KRprzTAzSnJfj4K8twFXsBx4b6qM7CgoAUBHjh8A6XP8ojj6s8D2g5xKKwqwuuH9fswQqB5qc1vR",
  "key35": "2EUFfGUfcFueimad3HZJuWDHi5yFWLGPsCE3sj5vrXx4Fyvpn3FNnjCwRymUnpM6vmDdV4SdN489CVzT2gPpND72",
  "key36": "45kBVGk9UVtMnd2KMP6qBZhdqcHLP6voyDDFgm75hpg4ejdNRYotJYZkaEGS8j6pEggB4poYKzKGJoK8cjxXRKuL",
  "key37": "4p3GrVTB3z6ZMVp6WDJGDigCH8QhhVrZpHXb535JUocAo8XTCCbZhVFeutFH8iF3pjokLykWtFLDW1JrdQEmfeYw",
  "key38": "55eupzThhF5Yt9A976gYwRDnSWFtqFNntyFafvUSHGJ5PM1Q5btSkhw9duUjSzKoTkqTjzEkBK8WnVE8D3RfZxPh",
  "key39": "58v2zAueGNj7HLBp7f5LiFymxgtQG36cmfuUst6C7rRfuXNfiqLuwU94t6Te2LzDvkPBoFPBMQPuBiw6a1XdZJmK",
  "key40": "4eqo5hoirFyguimyYdniiFH9b4gBL4y1p9kZTAhaNHJikmUhm6UzT2ahWQX3py6usgupdFmYqdTwag1EUQ6m1bKu",
  "key41": "4LJui4FJb3zCsLBXUrci1ZkWv85VMR6YEa5kkgiiJrTw5L2w6VmEVQDj3VebzVkyaykNSZ9CqQbEVzCtDtpoBz1s",
  "key42": "5rr6MNcYBNKBdTzaQBmrJ4V27YiTiCVKYTGA5rtpcYAkhBGVxyDdsQQfEcgbF6MViADp1pQawFCsWsp2z1Bi2pZY",
  "key43": "4S5zUDkNvgK3wWRaynwLkzKqcxRRQZXwAsPY9VyBMc2yw5zhDqPgzLYWWGanQnSoLTssMGWTwJxppYP814bSXaXE",
  "key44": "26EebUPKVU9gSXeSXwP7wcM72PL5eMmKjoHjJmGD6qZrVhKHhW5ZBmsjA1GnZjXahshiqHLLeYP6o1GaYBTKWtk2",
  "key45": "Tp6S2mi3GMaovZ8XwAJu2hKSojn3oBztubeiRs6bNQoZuUWRfSPYMzQnLfiZQmxx1qh8xicwexem7vtysHk9LCc",
  "key46": "2bmCDkpDLqYijB1eJog29L92eE1jssrg1SmsmQMRqYLqaPV2ifuTj2VHB3Wdxvo9F7rnZF1c7DpCNzScFURFDcqU",
  "key47": "3UZrA9D7pdg6d4edbPKsT8Qh3tYuJJawhK4w98JT3eE3KsnXREGzpNKxwYFY4tQma2s4DP26LXrqnhm5NJNeo3nQ"
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
