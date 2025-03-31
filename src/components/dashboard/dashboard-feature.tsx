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
    "5SmDJio4mPXNZgbbJF1bLY7E1nDC2xCrnJi5KD8nj4EsqCUELhA9CBoncK5Tf49ARtBKT6VBhY3LFSAcUrR1Rjf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X477gUFsUVKPHiYgnuLm572eenzCq9p2WuRjWjvGeP3A6P38jmiigLPGo74HkcAmV15NbvoJfN9DLxXRWg8rBuL",
  "key1": "peGLQ5HaDNe3bXndRhAkGw3P6dfn2y2pLni4tSoEwACy1PjfPrtiPg9PibPRwo2ML2WiLpruuTvpjEAeUpaXWs9",
  "key2": "5tSjcUysgES6weR21Ji57zpE9z8Z9DAKYYAjYTsmzYn2ViRRhiq6t8sXBZqqumSaejPzyGLJgh2Js4AtB4XLurcn",
  "key3": "65aqGjP8iXTbc6j9fwvxAxRDg8Qw5xTcJk847MxhqWtqxM7GW8w6kK1fmnooZ1TzccvGVpSHN9vJb8hZGJXALf2P",
  "key4": "3p5yiCYm6Vc2u9jdLaSXnyb8Ku588vAjCJXy6evSPe3yh6HC973HsRsowQRU3Lxf542SB5Li6upttD2C6kaHbvYz",
  "key5": "3J4ugw1BW2vovMgPYt3p443mjjcHcTVHAwHaHfyJJPV9g7ucPWMHGqXfjzeCJZoeNApB4LLqFtwrzedMmRh5f4Lv",
  "key6": "62SSdy16GiwNcM7gCcnkK1mBkQMethZNARGCx2cJMyVCnkU2aZNDqwoK3GUUK1ndigeD2WvaxbH4z8XzcJE2b8pq",
  "key7": "4AJ62YYMzUpCdTjjUkMXFHXf1pBWY7YAaDvQHT5z9wVKxVistBzarx9DZWUikKo14ps5vXwniZ5DDgdV5qACuyPL",
  "key8": "5kEYC3C9EzFreo9ETiM5NEQzzmvvRGFjmY81KribR1kZAqH7TZyNU61CQ1YJiuZdfAxgVtLEYeRdsUZ84PQEdAY4",
  "key9": "3MkiW4UjksmSDJLVzRn3m6qSETLQ54vSJ1YMzZFxAJXqvsoXhYiFNukCjjVbvhx3dVit6K3V5GZCoyKCTdFEiZ9w",
  "key10": "2WdZWk8Xp9iJXybBqTjJ7VdmMjEeRAGiS5yQXQjeHAi42b7No5vxSHtHDANzNTtgzCjdQmAFTSRLfevuanUUpqT2",
  "key11": "4vWMPwtS5PkxP4D8ZWsvuMXM9ybLuYjCjM4sYbcvBHQjwmQZJatnjfXtdxmPpEAMKY6mvY3GYrNiCG9stziPTRnv",
  "key12": "4NHFW36WsN1nHddAWxC4cjZfVVz67gbE95pQtpiGYrHhDe6arzyyjgm3fXq1vtgPKWiykBrxaxGcuCtHEJCbx9R4",
  "key13": "4r3qLQPT1ezYN1KdWsndPsktdxQR9cn3KqJBJzBWjG6dQ1ywHwS6o7MJq1b4q2dbN5X3k1Q98LiWRJMBu3FYtQEB",
  "key14": "tifQBQu3k2vSJauRRzG2eb4jfK5Nkmnd5ihCGzScj2QtuLLvkVswwhKfCBdPWNLt1R49W88geTNVFGNWu8Jv74N",
  "key15": "46tDmXXryqD7aK3fH1ED91bckfkjbrD1AM4rqGbLhBNTURMrGt4zvRL9LKsLN9yjvJLegUKjKadhhbC4CPT374GB",
  "key16": "5JZRnrpuhZcYkic7yXs224W5jGgvrTZgzisrf2QqKXkF4otcjab8C4RNCkjLdB9Vjjz4gFdpB1XKyPRFMvMrke1S",
  "key17": "4jYjS8hCdqThVMp35UTnnJcKWWo7aGe55sTtWnyoTbJe5dMcBAGiQNmwiWbshTEFm2yevjfJGNj4t6gWk5foXEyU",
  "key18": "58gaVcWvHtkoxgo8WJgxi2B7FFLCrVcUJpAq6cXJrYqfNs8JEVsvWsef3jBaULQprMt5YgmCjCpUxjdXraFpaHHT",
  "key19": "4JTDKXyej4y4g9p1qsYX8YqJoKakCq3ogRk7zvzSthgcu6JAnZVHXdFkTSNALddYkwuPFkaEhSv5RXvvDR2aPaSJ",
  "key20": "5jusUKk9GibiiEQd9K7pa5YXGCrLPVR53UPFVZrkYo4VKXabXc6cSMedVxjaDUJXMwnM71y4jXnsBAr6GsqhXFxW",
  "key21": "5YenyYUoN4SL1Zyz7bVK4YXzDVzp9HFK4MMke13bPNsJe8SotcX37rw3UHaCz4xzADwk4UPyHRxS2iHFMnX9vnSs",
  "key22": "zpKt2tMurWcTwpqr4Uwmhe5qcJXUdgKPDbyR4YrnU8R4GEAb1XthbE49VmbihFeMGJQo9ormGHPhxfPabXXFfEU",
  "key23": "2UaeLTCdSgsKPYBBEQDVqGAJH9R4k7P8HpxEjekT3o3M49vfkdUC8hFj6Wj1fKcdeQaaHXn8SySernUcZRWaou3z",
  "key24": "348xCkJ3NjUzoEzcZ24u71FLP9KLmojRA8wv5P4dSHVyk8gYggnPtZVnMNrAwxPPXnpqhLF7PGJexDhxm7ENvaoY",
  "key25": "4mCSETmVWQNaYurEDbBZHzwy7zNPVoceRKutkdSE677zpVHKTsowY32mY8RteTNqTkG22dEB7kM3qPVHCQWDACjb",
  "key26": "462nn9ufXwDvk5wNJPFBLMVMxix5JVTmVjuP8foB5JWDPKgZaEV6rMn4eaRSKP689rxDzpmpfWzY3Y1RXZXBWprn",
  "key27": "ZxAge4tkY6RL9dL6uvbWzZ5jZ42wJNSLr9UfugHtZ7hLahmDJu7e3AdFCUjpQBU6HKo3F5hXsp8ZeaeptioNQvM",
  "key28": "4vS9K9mscdYMJi7doXhKLPinojewqFAYxzSFVpWifd7DwtYQWKGqSJktNtJFrcgucnnK69EwNxKhkKYMkqhH7vqJ",
  "key29": "2tCPhvg5JtJP5DNf9S1R4BjntaY39qNNiUsifX9GTZvjo7HzdnQgmUGx5CwXWrEPjv4wGwZhYTpCr29VyZazCE8Y",
  "key30": "497S4HDL2wMaH82PcD6N8zjoDyyAgGhr1ufgseZs3edFjyGbBDNoPBhZrME87LV86PreH5UHMCp4NuHx38hSbMaK",
  "key31": "2disNaKxmVSg4gxETxiP7tTPkN87YZ8Z74AkCmNqmnbir6qtS1STEaXSp2NgP3htfHTkSZq3jewNyhaQQs5gH2uJ",
  "key32": "4DSWo6vEtksYBtrk165Kw9UBdvnUj8xhWyhJ9dqjfmND3pUSYUaeWuX7nx7wibRqX8DPbGaUK1piQ6Mfyco7Zmiq",
  "key33": "QEhEMASPv4CKmRV6wUC2VB22RQNa2Kdiiy638dF7ZZP5ndUD4hjZxr1dBi1ycHJ5CjVRN6GWaUnYW1TS5oYC6g9",
  "key34": "64HLwgBWmwGTtYTpisXHsoeFfEYAd6xjHd4MKN4v5KoMZacHZgKzhErg5dE9becsC1hW7TZj75F3g3oZYoCGpeJA",
  "key35": "4WY5wbVLS3uCCsbRfASBJM7rDqnVsZQcNdVkoQWzEKAFTcAkjNpZkqnXefADSciU1zx2BfS41ieFDoWTqjW7LHSR",
  "key36": "5Q3L7BMgwppysd9vT9a6b8C7sjGncZK1gVXrmxUnxtcraCnBdyBWYxDWD8Y1DzufQnnRoNq84SWBdkYP6GRRJiZ8",
  "key37": "3MCGmzS1g4o1zjbbFYH8X8f3satbZcPnBtRZHG1ykTpmP9fFT46Qp2qhgwmBnrwnUWcA2mL8RsHSHVbqayB4gFpN",
  "key38": "4Fq2FVS3tAHaZJxLmeEaqkUPP8hNBcCqvkxWA59aoczFtet9rn4zQUdoH5NMwShUeQyhYrbButaDuR6E2i46GJTW",
  "key39": "5hQiEyNF7V8jZex8d3HkZMCpHTSEH62ByVzR9RdDdQpVCr5bmSiNE1q6PFiu2y8Q7jDaycXH3kas6pQTigSfDCpd",
  "key40": "2vc5udQBfczowjeoM9xrJHqnqYSHtxyz25VnZw1QkVpx4rQTKCrnNgfAqzEhNXaLwo3rVwqJ8DxnP6E1oeifvE2h",
  "key41": "26BYxM4PEyMEaehPfZgvxBkEPx9iJVicuDCCFsSr8vvJYWNfx94KibwDNiudt5b4APgzBKbTF4EaPJVJMQ7bKCQa",
  "key42": "2cAr9tUhhzcacQ67bR4CZWtrrhdiJfnLsbMfQELq5ZPB1duBECLrQsHanEka9zg9dTY9xCtCXPtqDopeWX2NmsFM",
  "key43": "3cpCWhuf3SJiZAKgnuXggC4yz2yhtzBRqoHTbD1rz4rxLnAJWiMU6bKbtTGGrKJTpKr6iZTbBSCYTV4yd1LNt296",
  "key44": "5H9F49ypL7R2RtsjStK7RRsos5opZs2WyzrWcRYiAm915GCQQzsyRJKo4xWwCixsPPjLydD4Ek1aQAB19rRZvCrn",
  "key45": "5HPadvjGHKLzP4jcLkUxJ89aEykzK6GoBhyy1BAZ6xKaYXLfBF2wATnpDcNTruEuZoMPauHa1ha6iwbJRAVnRt4w",
  "key46": "3rbV1oPvwPT2WpkNXdDFty2HHTF2e5EFq3QFgDW7wfDcUz2ekWveQqVPb7eq1XunN2fvLAsEoEf1npx2jPV7QMZG",
  "key47": "3Qgg3Hg7dxumQgVTTejHNEmS6m3SPEfEAdZPUdegpbpJCGaVrHFxBWNf76ADDCWPGTcXDNGrzyHVqsvNQyUX1KVR"
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
