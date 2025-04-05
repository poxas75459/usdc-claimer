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
    "2iLkDosTLTF9pGmsUeCxkiA93bvV79BGnDjp6nvis8dZcxMjNUGK9VndGTWknvsnp2b7cMD2TGSAx4AHqko9cJvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D1jaiM5nZDkTg2c7znmEuXsGFFRSAdAd3Z1DusAC7e1tEVgcFWCunzv95s51LPHu4SYneu6vBAHoAagjtCPQ8z9",
  "key1": "3XiPbR6cGu84w1S8mQm8A1qwjKPPTw88pG3AuqfiaYU9FBMU7BEasMMg5KJQCnNhQws3MGDNqzDSBVc4ieFTKhxT",
  "key2": "3MykZst1hTzNsS4nEQnGrBHCt3ChefcebMPkPzV5kqHW96BNVNhKYRp9LKmLHM8bHNb6EB69wNUT3qi9pzQpWutU",
  "key3": "2eq8UUPXewGcp81GkGefopjH5TKJ95SbXr8n6WPvuTeBoWvdjKhwFiH5APD5R1uFL7Ezp3F4undqosukGRKsFfqe",
  "key4": "5ukLfjKnsuMwG5AuXa7htoYXupfGcbgQzd9kEqPA35wCeaQprbQUFmVYxdKziNY7UehWwtkJpm5TSiL6TLCcRwNB",
  "key5": "5dSq5gPfaKaiE1PQiJ66Rzbwzut6bJZrCQ58uZfFUU4oWcPa7FHn3Kj9p4Pt58c3kLoGCvvUEJro4Td2EEzBamAF",
  "key6": "2gkUNuN3KCuJc9XowMyWhB2n4U3arTatu2V85hfSuo37p6WdUCmXBKufsUWE8V1aiEqw9c4v1rqnMeC5Qe2h75Ff",
  "key7": "1PStJohqgYmA5EmAiRmcsrQadUt2DPQ6gDmDooLoYKqNJpFFDh6UPyD7sRJhGPuH1Wyy7JFVD56tfouXqNYUG5G",
  "key8": "4ehxYPN7kcKT2HeJ7Le3ebUdJzsHMh1Wi7x9bDiZHXWfLC4mHk4vzHSp6DRyGx7ev7LCcxmSxbWhqb8nDyBQfe5J",
  "key9": "4dFg17ibeduLbFvKkwETWhxF4kPieA1unH964po9tn1bdjiWQNRjLZQLmw4LUaRXDidMSG261KjVKYYt9dy6M7mv",
  "key10": "gzyPkmENoPkx3mQSwLMBNpiQ2VHyUf3GfDE1pG8jGi6hs7FKiAuSPJU4TACTXqy8eTCWtUShZYzRtBFsnE7Da1L",
  "key11": "34g3srA3HXGfAAUwrJHDZfoLyFsuEgavw99vRq4MPbsb5tFNJTxBNP1oSRVY8aCqyYEkxKbWTJXBnrjcswW7jfXT",
  "key12": "56jYD6HVw1bygLxSh59ukL3xfpZajk9B3Jemw3fhb6nxuskRtQXCCF9ncNecKcVXn4xtCNnmt4VUL9bXmgYC5TJ8",
  "key13": "36q5LyV7Db5iuxpxzK4Db2akDZgoQcddMFN1gpyHTmH3MzrznGNbav2bwTdJFLbVF2zJg6wzJJRHwUXNWGopwNht",
  "key14": "3ZgssEymfS9RVZCUFwqm12DamN2ZvHRRGTuCqGhzL7dwuznPkDYpdaD5yutxA9gUpbHLRMkpch5qp6yoGVC6FLV",
  "key15": "mnCpKmbue4AV45VBwGsVpqwayXSyH4vPDHaEJQxsuFNpyuwE3Njo2Meg6ijJRAJk2vSdt9w3sKgBYCmbteKyhm4",
  "key16": "24viRepw8ksq9tCmKFVW6y4zfu63JkdWTZQ2tMvzXiqXNMKcZsKVWY5H1E39s7vnhgJ8RwXyRGv5oC2JvVvqPVLE",
  "key17": "5mSs3TEKLU8LchZVKuFPmMbNb9fYATdTvJFM1ex7PvVqwQ11CmCZMbJsaDX8uf4xyk2w9G2td8JYz1pRXJ2yhdn5",
  "key18": "4SnLr64oya4jmziGL7MW4kaRZSZp42nUfWEKtyCskfud8pHC7wmBBKLdAyhdeMRQsU1akjbfJ3wcrRv3xynnAmX3",
  "key19": "446m7kfY1oUuhBchxrNEUM6SkYBnybaKHJxoPW6HM2AgaVb6MYpvTy2csJ3YsX7Di4ztX1NwxaJASVtuqBTLffuB",
  "key20": "4bxy6GH1dQjiCHvk6BP4QLbQLVZg7uorcL2MdYJBXTDsf2c34MtmUbvUrynoDNFFDS8UGioyrwjB9Gu1oFWH2pkJ",
  "key21": "8AmPJazNFbb1TPmhm3kMPTTJW3dE6hUDU5MrTXQ5TrYp9Drbz2oXGyFVeGGEimDXh2ToYo9RA8PGb2QHr2phSoK",
  "key22": "2Lt4oafgqUCxPjjHv9eR4zx5ErTP37wRXodmyMsTjcJrQYRchoH9kiFXMQe7w48Roe6gSC88tkEZaAKJ4KJFNTEA",
  "key23": "2uP1rdfsD5fYk8MhHTD6BjNrzxJbTM5MinxG1hoEU4SvVw4zs69gJ45mMwVgm5B9ubh1SDQkHGkwxKHo6fLZfB5Y",
  "key24": "pHESeF2ySw3sVbk42TwNcXygtrF5MYcLfsHgAJWL3o4mKs2NNx9y9iS7P5aG5vRXxvzP7hUX9GepuA7LtQk78AD",
  "key25": "K38JbuFHxABFHtJ2JkWX666Rv7CqoD41f1hAdMfnCwFgS6XSLwVGtfujWgMQkAgbXVP2tjMax4RT53VapuwCvP9",
  "key26": "34SoP4BazBgtUdiTvh8NtGSktvpurxu28KzkxPijKr2a4dZ8bp4z2KTUmG3fyAgvMUSj42QrdZdgRvTH3Nx3bY67",
  "key27": "2vkm3zeCEFhkKNuuDc9h46job2tzeARpEE7ivXhEe5u6RUAayoyY44mbZydU3DbJPUVASsk8hM6FKXL3Fia6p5Bz",
  "key28": "552w4W5FRhtfRpvLF2LhWd4UfHjeSH6tYXLTae3xiZ1qc85R1Qxve3kgwCkM1YXpqhbHmoGRDtsX1Nf6o5pg2HLA",
  "key29": "64xxLG5G9h3jkhiZuAgNCJpek2fAcxtdM7SqYbjS96F3RSzcLJUPsX3h1KvkMZpRdEPHF86673gcZwVpXiwyDoyx",
  "key30": "qe44kNtrakW2oM5tsNXrp8HA2XbnABbBJ33pr8PszETkPMtRi2t1NAeeMERbNe1QqqzXV1Bm8j5bQLHRcVBBsvZ",
  "key31": "qvd7CtSyop5zLCNhyp6VDRRioLokiS51DEmk5CUHqG5hQQXGoxRryKFSenUE5ahagENM5UvDytiY4fJ9NPr2DR6",
  "key32": "yBvNn6BQEGdCGeQysRFxKg63boiSNx1eCRsW1nc4eavWNC8YLoex9U8v95hHkfxqZYnLqKGvRyVNVUDCEi2JKLV",
  "key33": "23J1qJtX9WCRbDE6NgPYjYT8chzsVcAi6CGtAwn6JS3qh7B9ApiGWTEUWGRxxLJV2EEkWNkpZcVMszQANsWPGvhY",
  "key34": "36kT16hD6BgyPkQneMwSUptfuxF5dNi7zppW1pTj7zAqsaNG6feVNsP1Dxnoo9mvzAc23PiwSTf2cNHDFn9RR6Fv",
  "key35": "5PoRM3nPsEJJ6kCoVjxVHNbhgFToGACtV7h1UHCdKVM5sFNSQxt4Y7pGGVpSJ2W4ZR5ChoYmeGuDdq8dK6qG3Mph",
  "key36": "3ZP3E1srR7ipzc4LFMYtGg5J9GxKv7qdzdHNGKQ8TVNgKPErk34ArEc3R1SdnfffW2uoqVMT8J6TrZhfwkCcPvtC",
  "key37": "2s2PVHoaMGJU5BnXwMW9b3NeEFHx5JgCK7azcL3MPq6Qbir7bph8RT68hpUfdo5qF9RVchwEhcru1wxxKM5DHRf4",
  "key38": "m3VmWTi4k2Jhq6WSyaaW2y8UBa66PhqBNZJXpBgginGde3hvFPzwg37DAppL2pYZuvRh54Vp1fRKTEdD8N1g9Fw",
  "key39": "3ZutLqL3BgjLJdu6NNngpQosMqEpgFRVTA9e5H39xVE5YKAEhZ3JPzszukCjz6A1oNVDmcq3WjZy2zpGewJVHLbx",
  "key40": "22Z9kpkqENTZpyssG51Cde3jMK5JF5pkdVBdZ7f1xEesx8Bb4nUhjX16HHGnGYdUa1cXNe2pNYySdSmuN9FMsuQp",
  "key41": "3mqanZdd91CN3VyBcq95S4abq9hYdYLL9E1yDcXq9Nndv8my6bRaX45FL11QrSSfXZaCvyqE78eH3eJc29yh5eJi",
  "key42": "ydThcgeGLWcfpYWGHMpAZqqixmhcqY6ndkzTmZbVF8XgUK5iFbx7gfktEYEeMy2NWLSzdZ1d4Z3e7ixTWBYMz7p",
  "key43": "65jmV96fd9LhKXyptTqxsf5BYbxBPBncufRcX35nxWriVQMSGj7ba3Fj4T5ZAiLQW6Tg55DRzcs9qk6HF4XVXVH3",
  "key44": "4CogPoHeZ18YMakLD5Ly6VdkqnyDhrkw863H5Egz5PhdNRWQv3h21AAu3wPjzD9rBs3wkTW5J8CXCJGNTmmQp6om",
  "key45": "5Pw37ErUnxUFcxjj94rJPmXypME3baXkX48axNk4jshJREC8bk3ELgtwYh5btPZgQmwnoUGPxY4ZzZ4pknHafDfw",
  "key46": "5JZQFEjt2bzNMyaFy2ceit2xbTCvnZABuN1mcYtSVXzxLrKJKEFDs6xYKdoy1JvLjjs79RMYKnv6oQmr5pR8jBX8"
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
