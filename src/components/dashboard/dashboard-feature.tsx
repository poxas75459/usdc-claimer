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
    "49RN6dn3H1DbgqwTrJqzY6ta59BPpgqkPDSihVpyWVxqkiNT2rEUcAwg5VtwzJ42c3YTFxoJFQ7tHpeDdTsEq3qo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k21H23jXnMV2HofkujgsSWPAqGTgA1dUJqb3Ui6KJZe83GWwCFYKX3D1rixjx9ypY99JedzjE6a5SWyKTTQkrAJ",
  "key1": "u5b4uQkSeunPE29PbTvRBNEKaKu3pvK1Ze1d2RM45ZrNuKXEqQZcawNX9JxNY4qL8cjuDLE5mq3AV9j36z6inKZ",
  "key2": "2QihpcHM5noRmPXYn3B4YtD9AMPedY8fWxfJss1KW651oZgwDn8k4AbqHnLcrXYhgYHwAwZ3ytdYXvvdWaMVZzCM",
  "key3": "4BpPKywn37yBq8NyvGRioCHsTpWRQc1gshUxMe1q8prswLA61wosqrSvKKjpcXUE1oGJqJKmYtCYtf97RsYv46Qe",
  "key4": "5gF2Fu1ptvUMAm9w368v9FibxmxbaUupgfgtyH9iBuUVwtFG9GuRxBh38C8z6skx4Z9XPp9Mr7ZY29GAMPXCSF6G",
  "key5": "59uRS4ar3gJWwfhGi7w9yUV78JdheTCJuYfCvyYewT76NXFRT8zbExJYgRyoDpSitmFfqWPq5pbCFVcwQLNxzH2R",
  "key6": "49uuHEtoLDhL6LVrtMZgyuTmKbNqmu443TsbA4mcPJSnVZ29NcispzYiRyDWK5kMHsmiPcMcmWiUrCB46cyNLEyV",
  "key7": "5rux45aBT99kzcwAdn5uhaXrLxBuEGwx8JftWKYfT31Ek5VYXccAhKN1JJPy86BfXB6jZqH6nWse28YJCKgepB3Y",
  "key8": "5CPutyNJ5NCPvmiRrqkdj8H94iAWnEhYq9C9RN84aZ71xc3sVDDxxCxyzUyL6VncN9gzjJaNKaNDE65ok7LRwVT6",
  "key9": "5DPhmujWo9UqEqdPHwVEZf2BQFGsGy6oTKDZQBtjLHtbxeyL3UxPJC2nXSGHE5XmKfewB7yJJuxfd1LZdKrCWcdF",
  "key10": "4SncjnEuysjJpyLXPJToh6Gh2dqm2rucwsCLFkh86vhr9bPoKhzwnaaqFcwccuponBrrigq8Apxr8o8k7qVXcppG",
  "key11": "4FcmY9L8iMrurmiwrM5p8a5utFvvUZiJpQ2WigGEy9hQVTeRrGa43Kf9cK9gKZKnv16tSRPMbX23Jjihy9KX1Z6C",
  "key12": "5wdpnH67TDHHqqZuHeqrinQKZudrmFnfuAaiGU77RpBvuKepe8SifZe5ZvFaYWwuiJZ9s25AaJxaFA9G42Ki4hQG",
  "key13": "5HEmG3dJYJPjG6R76YicrVWe8QjidMdhPxnvHwpyiHWxtJZmqXKa3rjtW1zZayLLHurfAynnmwmTmS7Gd8cD5qJ1",
  "key14": "4ZVpvJzYunH2hWZghEq7d2UeudvFBmSUYQMUXADkGZNLL2VuYtYGoh1cXoPmdy7VQubkUviPMSpysHf51RZtpBxX",
  "key15": "5rvK2qUxZ8dKwuSWobhJHA6YkDi2HnbXEeEXrMHgSAeQ2yDYRP4oA7GVs2CEcScASBndAp8pdbZMi1QEvKKfecQw",
  "key16": "5yWftvJSiiXgj33dmWbtYfgZxH7738p4SA8pQ1dAGKeV2eMb91VMq9kWxoweMDRnZB2dW55wNM8oxnVKMRDfqCGu",
  "key17": "1G2MNoTwt3SCG4Q9oUoSmsZWq6rzq7ffSDWNmSABsS8MbHHXXL18roy7rrCfUHoSH9HY8ymskiFMnFbmkVEvndE",
  "key18": "2D1Zi9fEYNGDyYqvyS3PJGgtdMpjT9YovLT1V5Ue9PgYzuYwgSAyftNSJfoKQReZmQTbQjg28aFkvRkzHM5R2t9p",
  "key19": "5vpZFmtn6g7UUF5wha9cDdPPQoQ9rgyj5A2odbsFbVgrMa4ynetV6FPJuUakzikBhUBZ3GjXQY4NxAFL5729561t",
  "key20": "2WAt2YX7yd8DjJEWfXqDxC3nWTixUCtgz74x9svvkDK6XM9PuFCyKgGSqT1nz2SGvPtcXCtDAopb5jgmYkDWkHdu",
  "key21": "46ATkmRLJQC7bJJCKMhb7gVV6Lf3q2k3ytkUMctEQXNJiRPHD36PHu6YEmATiYtowRh5AYHo921e4Hgsj7Nb9gZ5",
  "key22": "5Li9meWiykq8gM9RVMfwn66osiKSXFR4H4Hs37wW4GTkRf9wmwHRdaFCTtN3MNuCohNk2xLU2obWEkbnrRb9anjx",
  "key23": "5RwjA7VZBjExS3a1mTHoDCh5kHSNboYbnJHi72mPC3YS6jmiA1iP6wTvKcBxZc9ifZ5bVACjhqV96mmAxtjbTu6n",
  "key24": "47vUDVgvNV3894ow9yi2QAHxTvU2EKNjHdRLQFh7cdm7rmmn2hmuhCAgRzinsA1Bjp3KkQhne9dPmjVRYMMcmuK5",
  "key25": "4LAe9dhuKeboPQjLsR5bMZNkWM3R3YsvGGnLNuDSxELv3BCKTCxMUorKQDPEgqA39CeCj85u7yqHnXCCzeBzTeoy",
  "key26": "j1Ju5fXSGYnVTB9gyn3HXwXTBi3XnVrzVybGjbQQV3U5VkTmDPVMW5oZgR5iKXEJK7UCmpSp6fQyWpFtQjWfdyK",
  "key27": "2nXBC2Gq5RMrm7JUZdVhmp5FejG6dwoH28ahcQDo29cX4ZUHDbRsjnn9jEm4eGkyVYjLxaoS51s6nKT2YKmx5M35",
  "key28": "4yKScrjHvNFtchgomtyksY1GeTExw4scj4F3FywHFAxUeQd2DVAdoEkTQDMbJ7df885Akft18F7FWCJfnyn12JYe",
  "key29": "3KcHLXJPgAN8TDnKXXoRR1XEtXGXuGBxA5etYxABiEb3VM85U8P3zSXJqrHfJ8o28yrJZ1HYWPpcqpPM7iHLXm65",
  "key30": "4j3duaUhkMsrMoawXB8zK7pK4BnGnufaZUqtx1nrc7FqjNEmoUEPKBeASC5CUbGBsec26wnd4qdavs2tWRVW7BUu",
  "key31": "5dZSuMrCVCDgoHZ91AW6Akai4JEeeiV6yHLTJdyzPDEqBJwvjPBJkjpHaq44EoG4H3HFYzFWMVwztGdLK6H22Jo4",
  "key32": "4gAnP1mk6sVTwxHwGMs71QzLcGgGHhuZGBusP2CzgGGzcM1De5J8VigAhdttpaMZpTLnFHCq6ZpNTL53AvhycFLy",
  "key33": "54AC2TeToWE4xWxaFxHudn34rq9HVURs6567tngkfHGTdpDBXEfGTsse5NNGd2V5dycR7ZG3RE84Udvi4wgN4Tjf",
  "key34": "2fd2macyf2k4J6mmANhsknGDFUBr8APLfwXJMzQviuoS8yiMCsWyzX4C8Ze3GNH42ororJjYRvbRwmoQ27ckRSec",
  "key35": "2mPuwCJtwVm7JdvtN3zw9FK4QLXixRMXz8sLyRZA926mGCUJFCs1TFQ5RVh7jHvDSXK44PsFL8KwdRCwqjakPZ19",
  "key36": "4oQ5xZMihPDXomTpcR9XH1zhx5ckD6XAKAAhxpZnMzMSGBwAbmkRZawxki49M6DnmXBygW33kyi84Fdez43RzAaL",
  "key37": "235a55tN3BWSEMqRCT6QdgSvmZXRV9THDuD64spMBciuov84vsZK1utS7Ggq4HGSGWc5MuEnYRFVfik2gzzvtNP8",
  "key38": "5az4obhp7vG4rBAgxFimFpFsR3m4seP1HTrtjxiXK81kW2wCj7oqHaskhi84oQ4iCq8bgqvnrdD9eTJA86p2LTUv",
  "key39": "SZLorAC7sD45fJ6rKDH4odipo55iwDkwVisua2tiJ6PLVsi8YmEeuVuBzCeXu2UEAk6aZKGDNnpcpeWrACwEEiy",
  "key40": "4pt29zW6QLbsMnVpKpcG4cjMU3xGcqycQgxpHKVzaxYo5gY8FkDGaNKpkS9ATKBmgdnASi86uYbKJBfmiD4rUNhC",
  "key41": "3rvfYWH7YTzhMdyU1R6gyspFeuHhYAufRe3BFvCLmq5LSUneoKWK1QQ3CeKGK8Lm75hbXyedUmkckkbqtpJeuHxw",
  "key42": "rdhkxE2mi6R5YfZ63f5QAetTGp8n4JLuZ5H3MM7QcQ41WXFmfFBQdR96Hkq8LXnQXWhQUghJaWSehMvvCaLdBPE",
  "key43": "Lio4vRiKCKAH1xcA6dBSk84arj9LtoFH5GYxWZPHGFGjzQPF3b37J9nR5qfQkHaUCjRchY7SajVBWCfWAHbph2i",
  "key44": "3Z7aXi7EsfYagcj7MPwGnLtr49aZG91h6Ya7FAbrCYDxfmHV2imiyTyz7e1dUHY1EZmj1bE5bRYawb5TiLSR9LJA",
  "key45": "3ynxyS8fKof9LA63nF6RuRwAeHbdayAL4Lesbe3KLmhkFYH8gnSnxdWkydXRyZWsvcjd7aYM49M19SxmZB9jbF1t",
  "key46": "37jEmqXEgyZX258JRXK1QW32n2oiMFt1fyZR6qsrebPnLbD5XcQmpd56SUX1xJWwABV5pCRY71BR3aajD132cRNt",
  "key47": "2TpGk4xatSYyRT4KKmiKuZXYUZMo5VmZG67yxdJ93ugzYQ4ZuCd3tX45fFW8LEAdEKyS1eFwWbep5ZW3yao3Ykoh"
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
