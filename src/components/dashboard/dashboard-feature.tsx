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
    "FminVGSHruLayCXpokG8t8bkSapHAs2pnZxrHCEiADvwb2mrka13vjchjZQFHKcrhBaTSgyfS24CxHA77HT8CQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26nRnoMSFNHgDjmZXCD13Rxp6eBTvMqgURhgSEn1vHW7vsFijHV6dBkrm6NZFTE3QLMo4Zpgd9N6VotsSUFgUpwU",
  "key1": "4JRsfFRWtNuXNJkwDtZvprJ6UPsgPvYdoBy572u41fc72YrDWGMyZhQK3M9dn6MJXr3wBhiipaWiRvy1JFuX94yc",
  "key2": "479EeuB1QgC76JgpNC1wpCbVxDSAcnJGyeQ6aXBcNaCKpbnAjc3eB7JXW4xDCE3xHTp4AWs21vg4V65CFQQMnzV5",
  "key3": "3XXXVB8egotuCn58uieYmKskjXu5cm7EqzmsM9Uxjwxc1rYJmxYuCZ4deK54ATR2Jtc2kEWRuKua7iT7vC4Mh8zy",
  "key4": "5qK8eEwByvkv1e5gRfvm2BAGDY2Fa558co9mkfBEmNFQXXZvSRXhANJ1aSfzL2AQYWp3VwVRPkzoSdgQJzFSZiF8",
  "key5": "5xaiJGx3EVxeCmwdSTi27tDdyo5FELJtPZYgSZkURPV5ZqNCwMfZn9PNnJCDyxfrtmUg4QGupcUFy43nc5wJ4t2k",
  "key6": "nQqwPKGu8kQoUNfYoUWQgKwP213osfVuX97w313yk5DSiLZArAsWTH478QEmMTWEpKsSgHJQ2Hw4C26ayDLaLHk",
  "key7": "67ojjXziQAR9hm5Ykn1oFpYCJMBoNTfMcvhPK85ErnaRHNpkphGp2AuUavtSvcHBGxG39TgbXwxa6k2giJtotU4w",
  "key8": "5LqnqpByD6uQ29zRv8HVJfotsZ3JyX5PCaMHwHUjCbyJfTCegjj8qZNPkXrapsXmXQcjq3Dk6DHeth3KckMPT4tT",
  "key9": "HGq2XtG3vu2NmWcyveRvpWHbh1yQ6vW5S9zzcrSmxNMtz9fUqWNo8nsxoidtv6nrKWX6EPEVh1EjFPumEMe44K9",
  "key10": "3t2CgjNstpscymvjbyo6tnKadNoq9iXhAkdmiTpH9rTU9cm8zGZa33oxfbyeJN6ZRmrnmSubrUW7vk8qVAZ8QiSo",
  "key11": "2GVHaSiZxrdTcL3dsoXrEkd95Fjc8E6YKCDKN8AivURH5LB98HJACLWEEsaCVkhRPMDhYMDpB7J72heALzzRYyMt",
  "key12": "2zVjrZFK6vfQYouKVpTkZHyXLdcbTQ3PTC36YRNnNQWNo5oCpEnEx5VbWFCnDriTCVFVBzj8VASxFa35ycGh1yNm",
  "key13": "58cDPpRv6ttFYWohJBmjUrV8Df4h6N9EJ5r5r6AQ8rtdMc2DPcgPzHr74qxWBqgEscv7KUay4Yo4squ1Rw5kqyZv",
  "key14": "5xRvegFzx7AvH8HCUdWMaXBtMK6H2PZ31UoXYoKYd4F41MZkdZW5Pvp6W3FjeR2TGtNV1yv9c172paXKFm9xDDmv",
  "key15": "2XL3PiGwz5xY9yQDbr8wrGBe62NjTBPbwGurGG2PczdmzGGRCCwmj8QRsNw6quddnHksSgEqckY6UbJBJmMFaK2Y",
  "key16": "qzEEwbmDQ9N21kw7rX1EX5cYQFTzZbLWS5BLQSmMMae9MYiJhzufGB5DWv6rYc916pEaVZ1FCZJzMcYqhN9vHPn",
  "key17": "5jDcHpcMZAeuAMsG1dvWcJLyKJMvq8xnHdgi1BmZiNJX4wgSNB23Z5hYRkSsCPjhWsJiwbK6RzuX3ctokDXnAcDN",
  "key18": "57zMYWE3h2C4o4bM63W1sZRL1WbXGyCGuxsc6SMjfzUhRTyme1KAMYXfMcxu1grMtJMT8bjEyAK3H8tYdnbeksQH",
  "key19": "3ce2sF65hGdXgPiMFHbKNRdLQsRFrn2wefBcm5Xz61dyzLqsgSEyFaBaojBrnmjsQnQoY7583nGcER63BicEZL27",
  "key20": "3VHNX3Tux3Lh5za2oDLg2BgKvUTdrL44EAYFAALrXsPAmQXQhBYLxfFkMpbgxBzjw6HvzTgiD2fEMrn3K2cVJxHL",
  "key21": "2edc8fkqs4fvQ2BEoQdjnxhCYmNTH9HmWTxava7aPtLqbQXKD2LfV1Sy3aWURrLLaQiCCvNYaJ6FeXE6CkrUzUYd",
  "key22": "3L3smbSF15xkUJ4Q76iJ1oDdnK8Khvw6ydUdFDVN4EP99MSVWDMwWiuAowRHXhrA8xD6sp1QfR13EAFiYFMPUBHb",
  "key23": "49FgtXhQvhRrHTKudKTpgd4dQLuqCNx9yM5JccV61zhPeEKYudmLm9oqss7G8UZ9xFnGr2o9vZLSQnYCMx2sYopq",
  "key24": "2oyg8jFnCWtLRPUxgA8WtLgk8QLjhETt1PMs3pdMtS8SedEMzjfZ1YoAZWTaLxZshuTi6JUmwKiviKQu93RSo2UR",
  "key25": "4w3UpqxvBNg9Wh3jeZxTqur4uCsXvTecvGPDQdr649Fu6E9WNYXikrywSCDYcHR6XQrqhjNyi6LZhb4ks7TKmHzn",
  "key26": "32CkSNWFMfY16BsroQnNLKxzJRGPXafkBP1yUXMMZ8UsL5EZaSaQUEZVahcZWNtXVxtzeesYj8PonHQotLnzcBkF",
  "key27": "5mV8UJe4G6fA1aZAJZcz7x7MpBh8Nvaaq669gauufn8h2A1sDXd3mJd6bx2qP3koKc3uLXmfWqNgg5PqdsVPapcM",
  "key28": "4i1JPmJRBUsbMXpQmWNx1hupiHmHbCWQFtWdohu6dBeomvLjQiPjBkddeEgxe1GjZrUUnYDyXruNRodm9eAcZmJ3",
  "key29": "2FdLAJHRqwoQ7izHg7gj7dC76BGqvCexe7ArPJ3oi83bgWC9etNk35bF2XRDNZMdrimy7HCY6wf3sysU3eTxbHEP",
  "key30": "38rYLfRiv7kjd1wUns8eyMmBrXsnkMkcfi2AAHa67kmQMpnEWZDRpVF75oT4r3o3MyQSsmqERjVW4yLj6gVNhrUC",
  "key31": "rS3RMGHQDKmgi595aaSfwHtrgu61fA3zh6uXx3Kvk8MeoUSTAzghX9a4qGxY5Fp1LP1jJWhNWSErAXkvRtTHqQ9",
  "key32": "5FWnJ6a7mfXGG52ng8eXiCb7DNKD63QP5iYQ7qhUK6DpjwYYsw45ir2ANcYawgnvGC4MiPGrzyZuYEgxHojLkGAL",
  "key33": "4PgxJr2Na3SmHEgYktCkJfYmtQxZAutckFRUdjvbB8a4KtGx1YFsWk63QGxyGpe22xtwZp2FbACbVAKDXBHfrSdU",
  "key34": "39gN8W4GoYa124gwSBMpapr3hFAPYBRtEWUKzuTEk1PZkSia95MLS2Rv1FmZgF9GhC4sCfj3siQFGpGcYoVvqhey",
  "key35": "4UhvZCG6afmfug6kLeffcw9FeY8SFFhnso2zBQYtdtdhngZGNKf6h7cw74PQajGAC6kY2616gANVSGKzjnXgR1kM",
  "key36": "37ysprkhhi5iYPxkZxEpfcj3dcmg4VYLaQcvKFCMyffbxmeBrz3f2sSkeumqmusUoQEvqBbJYU34aS4bMLBX7k9H",
  "key37": "5CqJJivjA3YLxCVNS717GzTauoTagn9YRRKE2ro3wKYR6vepbYSKXSSM2N27Cs1kCWHmWTxw9REeSb4ozEMRoAoN",
  "key38": "4YgsGwmJmCpbJ8nJ31nKy8TYDXzSpHPW953nChYf7DoPLRiXMUtKeEUqw9XAAojtM1fnBcJjehNqZDqQ6b5tpCma",
  "key39": "3crkAjtpKDocJ66uVKFfNSacouXde2hUtWSKotVcji55opffJ93KaFuxi7qzUK7oMb9tyY16JukkZhuYBBbAvqm4",
  "key40": "5VLQTfoygiDuXnXq6hcyDRVH4fQeArTzFKHXSvg19iV9ESzMExubVFHW9ZuGtUfiqSwnmtbotr7Xc7s7poJGVUZq",
  "key41": "3QLpkrsn33jeqPun76PSrLq7Jio6pRCgcxMrKoi4znKvMRdwgHMMRkkm8W8zYjYxusujHJR645DjnfDmaNBw5Jmx",
  "key42": "Ko5rwwrLfDvLEpe9LSWYw4zr8xZiRK4AVizNv6mJ1ZuCkPWaLmrG4XzL22gLQ2JWupnGZvtZd4szjocNMiGHP2T",
  "key43": "DQ8xSTwRpBf2NMWYDnxs3BMA32TqTgCkSnWNoUWQUmnG1yYgRfrLhBRsWtu744Yeddw3nj18vB26EyDGbPjoosb",
  "key44": "3tHQzayUSEPcjh25QHcviq1UFy4hm3PcWpm2mLvNsZrDhHFBj2Y8DXUovCZDfAiPVwVzGUuPsngUWCPKMbXpBHuT",
  "key45": "yF1L9bbGjvd4E1URbXg9vpZdxowps4b9Xkn8WVXLXkjngFc9t3APq5m5JSM8RS7uryWqqs2vBE29YB9AfACFTXG",
  "key46": "k94P2rCTwwUFtPSGcHFBTd3DBmjxr8YArKphzScWtbyrrWpM8t8taYBdeXmfDNkoimDT6Q9XX31u9NZ11iZrmUP",
  "key47": "5UfK5EBAoTEBVRcm5es93B3jCuKU1E3QBxNJEpNELsKEF1hPhkE6MHhM2Jxbd7RmuJdYK8KiH5kh4eD8MdEHdytE",
  "key48": "39A8ioQWE9yV4yrH3GM8zb8n7JrJQRnJ7N8mus6A2BW2sFsc4pHzKx4NjzXi9GimdTug7VooGsbmKtY5pP6AXnUg"
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
