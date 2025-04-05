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
    "LfWCXWweFnL38vJuyp8rKRp1Cn2zYomahPNgj5DM5feuzrLHUof1gsFAqfJUYR9vRuo2uJb7StDRjYaU8Gnoah6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48fpU6savw2Bx441urXwhXTGASWTbNH1yoFPH4pk61aaWrnDUUnVUwE6y8j6k1AHJSn9bEEHTWGyZJKspTgrphi7",
  "key1": "2AYuBZt5YH6Z3mHtuzsyKMcBzx5q38AB5xcXvHvT43ALjgCag9tDkNeT7wNUGD935ZqXrQnXBhQKZT8Pi63h7FDc",
  "key2": "wYJFnryETT1n57QPREvvXFSNk6ZPVMGV3nE8H4A2bACY4g47XdQgPXiMMP8GG9tTbo4d3iJrEJuG54Eazz9Y7a1",
  "key3": "52pXEyqm15TtgKDeELWBMX2TsqibsjUrNkrNVS4SJPnj3VfRLrdZTc7F6JUvo1y9U27V47WqRxSQzStSdJqiedNX",
  "key4": "5Ru6BQ9KKgTt39e9GDkcKhriPhJa34Ci4DP9mjPWSBwdYyhSX7Xu83aTP3y5nJ2r9G3MNyNr31rSnomLxi3ju8dk",
  "key5": "4XEiyp8wYMGCjiQfx65v8FRstzPyESxiLovvZFGtFideXJH2VJZexQgrHtwTJhJvEXLZgoD4jvjxP8FAa6ZJWGzt",
  "key6": "cdR2QrMC6LsPNo89bvp9FtKRExuc6VkhZ92by11pvj3PYdKo1wX7spEDaBShGc6apB5qv8eBTiaLbPQf83DdLAy",
  "key7": "5ao2q7mLm2VcsVUAXnoeHpiXQqS2NZnrjtQ9THtedLWCMoWpyQpv7mr4mKY7QnWWTHKvXCBmzoxMZ584SjYCQXgW",
  "key8": "317hnufQjEhpLpmd8n5z3kWpxrJkica1LN38zT58g13eoaWLg5ztHJyvtB7AqCdFCozGMA52LeD6UAoNtpNvJrms",
  "key9": "4xuSk7tRu6eEmUkq58YdXzCUZUAeaTF7wQpKeJUmHaei98jUwpfRHZhPW8WvyicC9RQBCQjgwMS4a9pdbQW8nrAC",
  "key10": "4Ci2kVcoH2x5Zy3Ye5LXSL9rvWWpPjmv8W7q2ENYmeD2t8y3HudS3pER7ia16A1erpJxciEBLUsCNsxugGeC2Krc",
  "key11": "3EGVrKTwZYLtyy1TXSeeAKJTmoRjyCfD2WVhwJigFqsPpiuJGbkVbJDpAc7L7Sx6k8Dgcsc7dez3fGWViP7esDr8",
  "key12": "g4S37jUSaucP9rxavLRApfN7ps7aX2RymviSTB7YwN68pnykKgFvumbcrBEYfud6rjjzQtoHR5XaE9jey9F7wRH",
  "key13": "4ECSEsHWKWL1ALPLDV9SvuM98xJFw2hiuhvDPZBLwNLj8dyjrpSSrAhGevX9NcUMpZJPie5SuPB4hQK3dsxNnFq2",
  "key14": "2WZ9LKHXq1SV7tiwZrHfbGSqemNC7XTWAQMNMFMWx8Dj2DQtcVuRFWiXwGh1HEowWRisHGEh2FzqDxkW6wLHscpU",
  "key15": "2vTsLDDLZJSdeS5sjzsMzTEq4eZDyE2chDGP9dPVjCL6U6CL3MqeaNLqFhNtij621ddqWgZw3Z6JogqKzXNXyVKd",
  "key16": "4qFLKnwGexbpvUTmEPZWWcdkxcwMq4tGnuXw8Y25CV2V3c3E221hLkzWoKxKJHEa5hmDAQnCDMCPsVd7bsFmK7s1",
  "key17": "3tAnbqXPFbXFypStyF4fWwo3Fy6EBDLRznQAono3Qx2ThuGteSSTwbtLw5VHZ1kAjbY7dybJMkUUrqs4vGaBhpTg",
  "key18": "JaAeFUUm34G4JJNFYD789fEt6JgGUhCLc3Rg782Sze5oBTuDBBCQ7BXjptqHzmPRavtKi9NuoGKTZgoBhwmmN2P",
  "key19": "3cRUHJdZn9q4ZFSkRL6htzBAibkY9fsy5fdbbAqHwvzchwz7cHrG1k3gYPVRutmTeKpPsYtVaKLEK2vpv2xPJwMN",
  "key20": "2Mbu5xwc6GDaEUxym6TeM7m9Yta8H6BVAwqT5tkWVv2F57VfkJTZJuGMaK8pun6VfWvxF4wnKDKhC8v5ViviBeFh",
  "key21": "cagrnUg5RAGKUqW9BFdxAQoaHcVK4DXVH1gotxWEQoZ5v5QfYYHk2c457WDzf4oGHjA3V563QbCd5fbbQpjVpD6",
  "key22": "5dM1HmxDK7Rp29QhwQKoWvtdqVdqWQpVcKKMceFJxDt6Q2wQrcDcNtu2cr2Gdz2nHanGc8Yb6KphHwutcpzDGyBZ",
  "key23": "5iGwphWoXFsugST4PsL5YyL7UAoch6TrnpUehDa2DKCoNWsefh4K7EKKZhjV2WXJ3xLU8RT2yrfVjNhbRc1FV1Zs",
  "key24": "5LntJCjpYcPWd7GJ61of5vWtYiVP9tGgmcaEYgMqGYnVksofPF9DHvCMn95Zszvzd7kQ4pfkbX7q45fafywDEYXR",
  "key25": "4zndfCiTRH7yeGETxPCfe4RpHobMankeGyAcc2BvFGCxJbK6sKtRiSUvv5RRXzHjBZD27FXQ7XQtxoXAi5ZF1rAB",
  "key26": "4bpXxM74mjcJQvcBx4kXt3RXK4dSedhXAdr8LeVwcyJ6nReaWtHQpBRaBLLqvsFmq2pLUK1LUKzwNwqfUKsf96ZF",
  "key27": "32LZc8x8JGMjmNWGrG5eaHtXuoY6Twghf4qeQWh5ZzVChCumj8LdrhQhaSwybEWLkc86AnTRwQsWS1BjEXbPCJRm",
  "key28": "3HjKY4p2LyqGKdz72PE9FrLGVmTmkydRwi5sZ2EEd4YbAvvFzXTKVzYdcy3knU6jEoAA3WmJ1Q36NNE83kpLJHxS",
  "key29": "4biVQGBq5ocRUeY7fL1CTJMx2X9RM678he6mjkQZQk3XasbY4cGUWyn8Szcx9cEpxEJyN55EqiXiJdQvEvFiGjWf",
  "key30": "2B5e4ZquHPR7AZm4GE8SbdTZFoRKvcF7NpUJtSGfcrKZBXJEjQTv8DNJ5Y1umCiUhieauPVW8HB73ykAgZe79mDM",
  "key31": "3hcZGKcmM7AmRSoVivoYN3LAb1Q5ZTJrsWrgeARytnjuhJ8Fi2PQ6rkrbwY4E7TLFwP1wASHw6ddceS2tFDnPf74",
  "key32": "3EznTivqBYyAxFssRThmJ6e9xzcUZEYbYvdZD9KrfxY6zQ2kTFJPMEufXd6zGReFLRamiWMPF28qqAf2GdAtDrQv",
  "key33": "34xdxkBiBsEiRXhMUMoc4EcPJP65dF4H8dopvFVcsoCptw7ubXxdJRvyQ5EGztv9r3Uaq15ivabQfanZk56n8LRa",
  "key34": "2j12qncHEBYvkLQha5xezXyWvKHFnSnXyvDUavLXFfPFyw1XvSBcH3CQCB9dKrKa1M82KnphAzdPaWDskMtPFvZY",
  "key35": "4GXXjeTVLesQMGvCpGhS9zD4hteh34ZLzS1L8cjmr4YeGPZW9VNkGDojhSu5HMmRyUPSZuv7yQ3ya4FhFmAmkNL1",
  "key36": "4ZJEaEvwchkjsJ9YxHk5UR43NwM9N7ENTxmqY6HwWgfALx94Y6nECa1prQVDLfdSNrp4K6qS2iDfXBpz8FNbmP6c",
  "key37": "5ri9VEKeDXmHwUy5ZgqScJirkgyJbsN4sWwEsc2wwWNza9eyoRMVm3FqYiv65FFiZheCHdg1zhqxHk1PK91FmswH",
  "key38": "3xZnrLJA99KGK7EKUwYah2GXiK4uHhcjzUg7hKnuZF1mNqWJ2nkd1Hrw9AxJskix3E8zzzoWprhgDvWi3YZnVXWo",
  "key39": "DyAauiWa1R7B1vPXaLYoD6q7bEiZQAKhuszhXv8ZPsLvFUT4La6fUBJHzoz5cVs9xjgrNS6pHV7jofwo31HToJ7",
  "key40": "3YVGUrQgXCoCaA4zdF4MgVKHyqZdQ6nwUJqRZVXmdN2UhSoN5acq7YrAjxJ34J3mQw1zdKdqjRLyB1XBne64tXo9",
  "key41": "4PpK7Erqz3Z8mmaxmhmYKEUC6qonrrT5m5P1M68VDe11hMm87iv6BZz4Zkb9GDmqU6j4kic93rukrNaw55av9eQW",
  "key42": "4JjCz64uDinDZBQz47TmrxRraaYUFuvvYTTTKNdS55vgZmDTc6DLap67Jxp26Xc5vSs3RW9YNmRpdxzhCa1FiEDu",
  "key43": "4nLuviJCYFb2eQB29dYzDo8anUMKVU3W4zxqAsGbu96mEdQPv2aD86ywaJho4TWGaM5fXFyyZBfQkLNuG2PAH4zc",
  "key44": "3DjofczLE4C6zKmLhLrGbEKeGM4sBoGjh3WARXEWRfLSeD8UufrWcY68aEJ1TPWTeNQhgsrMAZUyeqLcMANJ1T4K",
  "key45": "4p9SLLxA9vFhnLeMeTSLbq3nyurwL4wbA9B67NwyunBFmQmotFXWyW6Sch1DJFPR5fR1ado8EVw3WX2YUxXhqncc",
  "key46": "24v2GjcUdjM3dQXSyMeNWwfPRDbmyWJhgA2zHfyA2Rd5HDJtN7mK1zRFdEwFppEx6mby2kpii62WbF2JRSNQyun9",
  "key47": "64WU2k231xocPUXgR1fipYw4fE1EHQXU1CGkWXUGvu4CrmNf6Yf1fhNf4fvPZ9qZN4gqos58mJQE1ZYwKaFC773b"
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
