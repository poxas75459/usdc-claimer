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
    "Szb17qfnXv7qerJWqKvTTSMCj7B1DQgvRbj74zQTJwGwU5EfQ6rbXFWuLBG6XdcekJgcZ4y4bhBePTTYd41n3js"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x2H43Zbi2untCjJF2oa9E1UY1wHkKYpWLV742VN1BdtcQdE233NwWGqFU2bthE6JLFkq5Ga1n5JjCJNz4UjzW1J",
  "key1": "QSq1cv294o6sFUkvT9nh7GZRJ6dZBtNVRVidMTa2aLYPDEwAWZ6dcYF3NF5kmoc9ksQWRQ5Fz8niwP2rMXSRcFU",
  "key2": "4KH6snXpDT44YQDXXjRi67PcfPW8hX4NLRmwgghdn9283xWnikMnSqA72bHApF1oAq8fZYCB7ZiDm96GaybYG7eT",
  "key3": "5LF3BpPWiMRsTUGDBRmixxvmXGuJ1CmVyE4BYXQgKvuL411E21GdbzcG69JuArFrLjfRGaeJQ1vtXtWnCDHBMdT6",
  "key4": "5rijMDqFPGpDXRaPK8GGrAYz4Q4uhMVGu3K27H3ia34coguNPJQ34cFmohAnNtCM8PGNL6JTmFgBFxRwsvV3DhxD",
  "key5": "4JPnM79FqWCeHr44CGRdtPj161c1oPMDu9oYsVgF3XpXQCKSqwZ73R7XdVPDifZE5PkPDmkGZjNGJuaE1Nnv2zt",
  "key6": "5UnUUw3GV2KeUHEZQWXvaHoxVyyM9pENpbVN7297NNMyMyZdPutLVbsQrtD2obZ29oCcq93M9rb7UQtMtDDGi1b",
  "key7": "4Ahp8snvQr9JVtX3iDE2fzwF2g9BT8KNxJjwN9YpTv75YubDMTfvZU65QppD7aNssQMA3tXU3UiD4Js6Fx6iZ7vw",
  "key8": "Zx7j48im76is1zcd6tfQsaH4ywQ8tu9btXcuoqjy6d8hDMeYy7P6PbNjJcuS2maESw3EwrMm1gRL5WMK2hHfgdN",
  "key9": "27CkK58HHLq1fjXGHDZpbz3kqrxX9tVjGyGtSKdjSwgqEbwir67JZubyF487s1QAxQWKBWkzMtVz9FsFj6aPqiGJ",
  "key10": "2wU4EoBt2qLTvYz6xRGFoGoCFsbxqbnbAWr2yT8e218FYDdj9gHs14gmbVor9VvHZxj2vyvbNAy2Xa3HZUJKraFk",
  "key11": "a4DFXHH1TATPxBASKtgtCgkzbepVRA5cSW7ZqKYgbwzxHrSYMyzeyMNuNCstPnypDEsovmAb2ZGD7e67hAsN8bx",
  "key12": "3biVc4qyvcfAMSKRsko75nxp1Y69JUeiaN7cJwsAwRmwJBmmehgqFaoiwW8Y4FNgt26RKakzhW4M4PBUkfmp9n3d",
  "key13": "4kTLbQtzFx7c55fe8RSJRCTE68jUAbg3n55ynAnbkupbrWvciow2arjDfEEC6DQdiHpPwnCEM1Xgx41jccPMBnJ7",
  "key14": "62QHtxkMu2CYPKPqcuxbsgLGnKQCzGM8vraRFKiGqKRhpYfE3qMRdNBY9qufuTeqpKxju8T9z653HK9UWpF99XC9",
  "key15": "3CNH6JDaGh7o6EwwVfuQPsVZi6EHVZ53y6yYfiGrZqyLxasZSFp9Jawo15UjATADK6LVkJGmoBZPWWfwQoKeUVU4",
  "key16": "io2PMXVryjTQHNbn7cDBUPCNnXjsTNVyRQYcw1z9vGJpnGntRNGusPNjh2QvHvrPCWxJuZpKkLp3bepGzqiw6pD",
  "key17": "3PGcQZyhLZjaXRqaB7HomqMaxMGYvG5bH8VDwP9ZN7RkcjK5usk5UNQ6HKyUSQkqdbFFQdHzo97YiHYNJJw3XczM",
  "key18": "56ANeZS46vTimvqTubk2gEHr3osGbeVdSVWe23eJKX11BPE3F14PT7tmVb6CqfPiWsQ9srJZuN1Z3euw36hE1aAy",
  "key19": "21bR3Gk9H2w6F5PWbJeHmRs5uYkBggcDi164XeskfEV9UxmdZMZFfiNswuAkGTp5BLnMiUdVtjNJ2bMPseHobSMh",
  "key20": "2irQpMuseDEoodS1kd263pXaE1cHA2QTQBW448YaLFRcbtVdAyQFA5TkhJHD7nu92JaonSVqCVdzm42TJFTsgbMe",
  "key21": "3vDRgar6WA3vHQeofWRwoWixu1fsNRwHdDQ9gcmngE3zvfMeZrjhntb2ShZhFoWFYyTy5FKVbRbNAN4NCZdDv7Hj",
  "key22": "3cUwqtgHc3J8vbEpJmpfhAK63Jnnn5UvmVL3fLCbBFPU3iS9ZKhGVCEZin44NfVUqeEqwS7TMohn2sCyiAoBkqyp",
  "key23": "65sNRaN6zvzWgeWB7Ws9YNw1mq9T85r6BBgyY6q5WAXZiqWPVNYpGd6fx1sT5VQL3b9cDUMN97JLvStpNEkCpMhz",
  "key24": "4ZVvnVAR4dTMQmF7GfieryrtGxUMZm4CVK959R4VMbvKHvpG46PS3sRwpd8LewJrgfS9yCXACMsXoCyGYarXiiMz",
  "key25": "37VGtYCQTjk8jno5aW1J6VLmQD3mhy72SuBBkfyATRydZJoBVFiwbemqsDVcfn3XAhg1x2jmqFUND6E7sasmH3da",
  "key26": "5wuC6qgtvW7Hfg6tDzB9B7Dgd3X4F1rKNLgA1FYkQHM5LXS9KmZ8LbffftxZV3L7BvMaT4LAPVJ2Mmj4hcizxxF4",
  "key27": "3VannsApPvgoXASHm4DMzTwuctcsJ8DuhUMg1mfe4LNrC38EFvNgPQvwjn9aizfjSYQG9eCYZJu5AuJ6yYkt6hJW",
  "key28": "5nvPTACuc2Rjhfim4QUjJVWFYo26VJvrHRH6YdXXVvctMgo44PHkCu2AEmwLZKr3dg4Y6hDR3srqZDXTyXGyafcW",
  "key29": "4m3zjL64RRgjDxKcFGrJR5FqGGTTsXRkjQ4Ljg3Lj7wEQ368RwGom1u92v12bRzvndGX34yUVUu9NuXKcPv7D4Xj",
  "key30": "46dPMnqRWFZ5F8BUnAjN9DYFTzCA2oqg4sQjkrW6cd1mjm2tMsGGhByvYz4jK59LgLEyNkya8FbA7fBt3miTYkjR",
  "key31": "22W3xdWTgrmiQvb288Cb5Xgyyoi2mLoN59ejf2uTZZY75KUzHzQr1RgyE6k6A25Bfv7tB1aNMZNYpxXPQzxXhMfe",
  "key32": "4ripKMWYKqDFu6vACNvB6TtswvSeUHmWgMZ9A5pD3jtof3Khhu5ciat7qNCWguVh68PdCHhesEQqvkdNk6UEbohq",
  "key33": "5gVCgLLeLA2ZE7kz9GAnTMoMgLmPUACPVgZKy3MdC6YmsR4Smjp675AtrrfKBS5SBweef7JkETS3ufdH8sPJwYwi",
  "key34": "4v17NeRNTLwdA4tEpWCEG38EeiBaxkehEHRucbgZru16smJAXMzdsk9nS9z6YkW8fVUac25kUvtVVw1LFv9DN9MV",
  "key35": "4u2FiunETs9ZCVaLuY6fH3XLo3twPWfWaWs3sdWUWua5mdAup22vxirSgXHSwkK4jNnMG9Q3pjRdpP9ZmvCb7rq5",
  "key36": "61UENiYQqnWpRp3tFteeQThDrPw5Sx7ce4VsWUQ3jFwM69takgjW4f9NDB2VtuA842Vqt8yF7uBjRDhzoq6DNhMQ",
  "key37": "f3itr4kTdfHbeWjMVoEYyd8nV2azsDaxRfUdfmEtqE6A1HmSFHJND1pVXs5HHdC5xSco2gXQuG3PfvAAJMTjhX4",
  "key38": "4BSTYzW2wbJqN2xGVUpgAQJhTkbBwyLCdxG6W34JxVzx6QQu5BBRKryKhgPTYhpdpT1i56kGPGi42Dte53PbAErL",
  "key39": "31LaWaxb4APTXEKtVEc3ocTjErF63aDCVZQzUdaQcWwqPr9a7vyacHNGAA8y5PEaKwHLVUtZJ2iQ2WWXyQxcn1A2",
  "key40": "5Q13NfrshMi86zAqt5F3sJ15oujkPxs5gqZssuqCSFwsYiA2Pu5HCmY2Kc8ar5RRiBbvHyzzrsrVakoTSWNYiwRA",
  "key41": "27PbP2HjBeHcaQpigQ8R8cnv3NKLdTXyVJ29gvpfY9XxPhuA3GwbVUNw8EihXcnmXiP6FQGQJG8aRXPjPQgTRExc",
  "key42": "4rH47Z6NH1gJ3LyHK2taWVZzbtFiKZRCRpzRHGApC4haxxmkbwV1KQE13beGdHRsL5MG4Y3B3aVGAJ5UNT4o2dgM",
  "key43": "3s3QF67kPffaPR3ACncofqWKk7mv7Em1ekVaUJ15jBtFdzsPdnHS1TUMwjm1UssniBewiM2cJp6QGxvcvyj7aSW4",
  "key44": "3Q5dyW6E9i1egQJt3Uhp5an1wV62R7SoGZ4Xqt5YKkMLA8CqQSMF9PP78mxwpQSShNBPScfdJdsCEJpwCoHiDyKB",
  "key45": "4r9Pt1NDhaNJaSm7UxeacefGMveTqpSCBMxKH2rdiQsErru9REeBy5ME8ZLMEBBaDqsUUEg84w6HDtLo78qaj8NW",
  "key46": "sg8ZY62rpG8XgXaChk8pnae8PFNurH1Ck3d6LHMSi9FrSv3UfXCaCWekbuX3inVaAvzuB5TdMgWxVoAsRpki1y8",
  "key47": "nokxKHt9kh5yQKz9dL6ni79Wz8QnXnnXRvNJC8jb8QsvtdsanxEeR7KQbiF9NUcFNLdetjAktTCnubPgKHXgyeU",
  "key48": "2oD2BzW8kKMdQCCX8UZxiLFw822V6nLPVCe9okckvGYKb7mNduAcSC6BHU7H36Q6s6MtGwJEAWfyYPdFm77Q1GvL",
  "key49": "63vgNUrPWW3j4tESc7P2WzcoSU4BtSsWXSYqwsEbjsfPacGCHvVqwhTUzeEcY2CJNj6gYjCXwecN5Mocnm31qDos"
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
