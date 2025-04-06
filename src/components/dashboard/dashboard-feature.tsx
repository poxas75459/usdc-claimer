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
    "MRibMJBKUm3PmccYtJFT1FXBibcV6cd9AYgWceTZw1u31uLmBjRjaujmof7fdMBfKkNXocmf81zTXmTGvDqj63U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z1ednLh7kwYGZNpkbY5yagwebQqbjE7e4Ucv3Y4aBZob1mmxt1mTHxCrbxutReYQChY7gLXyyMTsxwM3sC8SBfh",
  "key1": "24RbRe6zvDYKS73EqrHDyHWRmjeWbzYvQLLMiCEGRE3g8tkdZ8eZK1fY5iTwy9i7kguJ2gvXhSam4RAoBKXQZiT1",
  "key2": "3rRTzFSkNiDvxLgna3rFpDNTTvDrobzXkG8PE7ks9xebCHEkeDnhd3vjSAQASPQ6jymASq9XFRXPhzPzQ11FUKPB",
  "key3": "3P4uNyg1F7xc3CJZLvwXZJmabJ8UGyHJ6T86K18XpRqcLQG7izcvmuqDyV2kb2vAfJoosPCtVZCfNsNzGLhUPKaQ",
  "key4": "4oqskic767wF68Qdd3kmDXiBu2RUfhLmPu48V6fjeJMVndGGXteshooi2X1yYxwgnyqqfNQtXXAqqXavwjsGNqAj",
  "key5": "bbPphr2YCmUnNvbhb8YDNmLbWDQgc7EJtqM1seRKkRvyNqMV8FbkWr3Pakkc4aiTWaKi5dkPmEV7yxLZPdrLdcr",
  "key6": "5yQ4oKqMycUuEbESaSRMSv18zRx14Mpsr6CP3rD4DzoDcEh8aNor3Z82rFv4cJmZjXRoKprMot5QkmsKHUvTyGS1",
  "key7": "3kfwhNamu1ugqYums544gkTYsaeYGNg6oiCWEn5E4i7kuGx5gSYMKs35GYQxz8tLr1rzVrznzpyrhiBaAKaojTDE",
  "key8": "3ijVAvqzScrwBqp2EmUc2ZpJcmDRK1A98phaMxP1R4HpmYD6nENDYsH5Vt1waYJcdP4v1M7Di4A9Z7xAQFBdTVog",
  "key9": "4cY1DJdsYeV6mgJU8qNYXWS855DTDAhJ9mQnzqFKiE4YFcyGCXfpxoiMUdRvUqtrxkjUGsfbsUCWtJCgVE6raxr3",
  "key10": "3cyQn8GcPYfH77oJH8rPLWT76xeds3HyuXuTZaiBYAGUYmWKqf3wjbWxvXaj2mABDYQ31SkkYjNL5vvUE2f5DWdL",
  "key11": "28QK38bPqmkMKzHodzVvcmjdph8dassZ9ZbiHnUs9HgqqYSzq4oz8RM5jTyGfGugfPnymjpyGEHq4ziVuLLdf3ht",
  "key12": "3BBtyprzhnyJtWRHFHGXA6REb8367SbTeoPUANHD1D3D5ZY2Ftz315y7RAaW9WtMFwUTF3Psdmd7yqfqh1Nsum7",
  "key13": "pEUQj5cMqGxKaS3KPE4cwTcjLkK6FJsTJAadUKWNyLjayopa1i6nEHs7pTr1NynhnhAYeX8RNjQmG6QgQBVGftE",
  "key14": "Lzw6nUXbQ9hYto8cUmrMehr3Zh1dArCqA44kL2sFZRCJ7iMv7DBKnvNw18XCWZSDdieJuXcCYoQx1PUin6RjBAa",
  "key15": "2XiX9BWmNRRNNUtbt4AghtShgBFdqphUEbs5QQMNedqW27PzDvxQrKScTDyUAfFBJhKKypERZnviq7KScH49b56n",
  "key16": "3ubn2cLqPmsoTp4EiePZd9tUG53FaA1viLQJJZLDXfasq7cFpwWMY73ouDLxUmVNSZykh5cNmY7qDygF8EKkF9CB",
  "key17": "4Lnop5BPBuDxHTgrpQMHWG48rARWeBH1soF3qq5Bg3NcZWQu6zWe3TSuRfJ9Hjaurd4VEqSaxD7Mm6iXxcbBqdHU",
  "key18": "3yZNxyGEXVMayB6vyKggyGVh8zYCYuQYkrDEE8ogdVBC6R1UHRyUL3KoSK43raMdUWgrQffJg7stroV9mTr6KNXz",
  "key19": "1wR7Xaa65z1pKU7PfQ2vXLEMgC2oQ9BLnvE6popdK5StLZEjHtTA5pSKj5FRvTJxT6avuz1bjkevt8374jzJRUp",
  "key20": "49UyyLhs2LJ7CMJY6n6zTZ3kAt3UrrNoLUaEc6AC37PFNsPTXcyFZfEMdbDW4HTAh9cBtoNwLohkKkh7HoWGGy6W",
  "key21": "2gceWQhyQMbzUqbuQT2JzLafb18V3SQkZ1Fk8d6o2RKvaauKdFcx7nau5GaWLWP2yaePkuzWQ82H83ALPaYyZ4ie",
  "key22": "5b794oMJrbpCj3L6dXViMbQ72fZsMoc9e16nPC9bRG579usdwJLXcWPaKjPQzWNYXiDcVKEwFmogLmVWNqkvEia3",
  "key23": "5PjhiPs94RJimKHRWXkLGKuHPstpW74HJyXCxTTH63Bjh8jPVWKUiYZZC8BPHfy98Zt77vgoLYmBppTQGtB8afeU",
  "key24": "3AdTxckwaSfUaE7tBHFYrYgg6CvJ9nkNVjnWS1def5HjJxQXa5ooksibkBgr7wgJ6i1NyQU2zTejaQyCiD5WNA2G",
  "key25": "3hajY8y4UvCRNU8mu328unwnxnMAsCNPQNNQSeZZCiaVTJUChTvWWj1pxjp7G95BiDWEk3z8CHAHSAhSRxp1LLHH",
  "key26": "669VdF54933zmfiwr15Z7abWDPtHs6XfU89AXGCF2cjo8daNL2BKyBBVvJaznL69ftFx1gPgxnoa5HT2UrumK7nh",
  "key27": "3gTVkSLqraWyAVpMQNs5ngxkV4TjwF1zQmxsBfJoQzfAYg8Eop7ZQuvSzFL9EuktKrYNFi6vjXXUv7GXjwQ4sxCa",
  "key28": "2XL1rqomMThMfrU8BVn5bajc4pP1xHmzBobHU6S2iXo6CNjB5fyyxjKsrkJvP5TCph3JRunMA4UFQQU5dwTWF4eX",
  "key29": "36ZGX3SFk2NPRUVc8D76oERZnidWLUNmYtcFHSX8iM7z1HJG9ugr616hrr19fzXTamMqRntGJbz6FXMZrBR6aLk4",
  "key30": "5NcLu97Fk6FvP6BZZfaqpxJeopMbaZnC3awQeTebiEseofRJHJTKLs427SyEE4d72oexJ68jLuGC8QEpKzB6QEAU",
  "key31": "2avgReNybBffUoS2NURcJzxtbXLuBc59sf1xASUnpBkMCurbFiAt7Wjw8wzEMoZYi19BTMYaxWLYAYampCPm5rqk",
  "key32": "5inSSZDNqRf6bTbevfaf7NT9nFDc2GpN1vbeWC4SmQv6a3BhzDhvwvDZHLfHuhQ9pGW1RFYveDmrFgKzWdjRV8zr",
  "key33": "bk7iR7X68c7MYBLE6V18SBbz4eGBHXXg6aWsJkkNMxchL9Xz6M5U986gHGX6HBvxhALh8iXeqUJVTYGd2adnpRL",
  "key34": "474RSC3QKkgYk7zjfqBSdRmiFk7fVCQSFWt4TDmUkdKWBEB3oHQGjRQyYQ4uTHduMhTx3fZHZ1n4XgoSg8f8TF6G",
  "key35": "vTUkycx54ryfKjECyPgqMLdDfXK4jipBcpu2D6ALSmqJ3MJmAqWUZpBFZpDjG4P2FDDVN3e5wJKN7YvVQuV7tM9",
  "key36": "2pmhBfUbzZm5ra34Km7U4KavgwF1K5iamJUoVtWfzKu7HMxrDkoKcfqypJ51rA8MqCKqrRSghF9n3uHcoqhbAakF",
  "key37": "41kZZtEaQiFpJtb5N5m6nhyQpb8pF7h8M4DtUTiCJUE5wmee6SkJKTkZocuNDojGoNr49QQJ7Cw9C3pauW12qKZj",
  "key38": "2AEpXV7K9yT5YkyLyX3f9Bn2RU14WiLLfxivdUXmiEq2cuFPiXMpLbgf9EcoqTapFeWT3AvXSAjyPzCDNeCdcut5",
  "key39": "52GyYSpwkVFcWm3viyEEJRLcWk6YcquJXUpztNyH6i8JRNX4vhnjRqTjbksxqbGnobtsa7nJepwoCYNNNHPQDK4R",
  "key40": "TTLdjug97cHHrXfZ6D83aWjAcvmSJeSpcoEZeGS7zz2Nu2TSdMUBcka7iucpXUAb2k1igmsk6s9r5SeYWVCfTK8",
  "key41": "5EobXv1cEF7DQHjMiBvkTE4uyMJiU9gs7fub91GMRRRA8FXEiiQ1F7VDqbidwciJEnhXK3Z9oLzS8TrmaYN2W2mp",
  "key42": "4fEdWvWq4czPpjRvLZBPkJ1Tp9gWWiMgiKKEJvWuCxdTL7Vte7ztGyRtn89LBcp5JNMZERHHzq2xZZKVYQ6qBMkQ",
  "key43": "3Rr2YXHB2AB5ERP9RMBsvJiGWC8bUJj9iDiBd7SfhkwrrrxW8sTFF5CmYY8m9jMpMsayTCdFknkvCGrP6S1hueUc",
  "key44": "3AxGF8qiCa9tFMd8t2bnHQxtdifapf6YBeU2KLeyQqVHE3JCqiZHFJs7woueUAiXuNZGUX5CdbHeM4ztiFFERrDT",
  "key45": "5CioBLWdbP7k9BZGF6211nNESV8gBu8dRDcaQqbVu94QsiuZtDheFeVHdyiQA99Lw9kme1mGzAWv2n6ShWNVsyAE",
  "key46": "6dxuzJwDUhV7i6C3Hkrh3qsjMNCttsyt7jVyZDPKm3cJgT4DgU8ZfhM2QWoeM57Gju4M4RPXN66x3dbZ5iryhAc",
  "key47": "5BPUB6cxVzxn7yk7M1xoqXEiGUtp9X5dcLghuavyHFChurE9c2kS2qMnRBiENy173RNSXAa6oRXhqpehE9FZzxFb",
  "key48": "5m3SmLojEUtUnWMfMDa4WZYxjrCCGVw4tdRwi2F7EcUEMQ1Lu2QmPt6de6GjTWrY4cyqyBTFmpNZj97yRuYcmPdo",
  "key49": "5z6ruiJx1ShVdzco4YsmsAw1Mfo4gb4FFvmbEYwJcMHWNKd7fCqhhGXwBncUVuyX9cBAjZ1dopxAELcLmnkGWhZF"
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
