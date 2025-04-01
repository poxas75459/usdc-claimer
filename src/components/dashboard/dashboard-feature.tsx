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
    "3NTn3Xm9sZQqRzrFJR9VUSjYdQ9aqrDtJpJ158c6DUx1awmTUJttx3Lc3o9jctAKy2mf2LfHY5sLh6dtwoeKobug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AQLBXM2UBZBiU3THTtKKbxSph37cSZFvk8nMfaEym3Lhtygy7WLTp3oB9NzRqiALYQPYj84QrRgW36EY9ecDpSe",
  "key1": "GBXkoxqzMxdNZywaTuQ6To6YVkG1ZbrPqm4XRkUBisc2W1au8zA71aa8HMVV5FCM7nCR2Jabgz41bZgwzADuvHi",
  "key2": "3Z55xzYAzwCwP4Y6wjXeXDRzwCooEZgQYJacRrCGSyrSZ9YBPcfGSfEdiRJtutf4CrdTwhe9H8WG6KQBmL3wJpYF",
  "key3": "4czqAeNouVxGdQ7W5MRVcmzmBT83EN8HPiY8tojVhc1eRr2xWJEEMZZ9nSSjgfNSUkkCfE519Y7Ye3Cz4w2csff7",
  "key4": "4egeoU3UNkEdsZpcXHWQsY7E5mToRYYuN6eRJ52uCTTHs7CzHsCArsTTEF887d1BnpJ9CzeVhycszsnbKpPnmnT2",
  "key5": "4wpF3qepYPXmCunDy4mfrhwxpsHhjRN4FZJxmVbVScPEGPbfR6Q3t67Ah1Gmsv815E5NWeBrWXU8tcUYCSGCNunC",
  "key6": "7VE8qawtME1z1CVi9RkSjinKh65uTF5pBLwpeYekvHFcUU6qdSjPACx7LT7VAj6fn3iy7UGb3bxJj38aojiLCUL",
  "key7": "Xxm5cuVnoXfNywuqr7EmA45x7dKWV3kbD9KyJEbxQPTavJqB6CPv14gTnz6wj6J4ax1zwkDp3CHRPjNLQy7Y2vp",
  "key8": "2k1hnkNwFbjXpwd37Q4zEAeVEqs8dbckHnaiP7ht5jDmD2vMcvLFmA3qph5wKn79S8s9GHKQTojUhekhWFSpK2BU",
  "key9": "2LSG85fpbSd2AhLhyQhbYWy95iqcTL5jRG7SPeFtqcyKBDFgjFp79YKvuKhUj2wxGbuVNqB2Ap4vsiJvFB94y4fX",
  "key10": "5zosJwR88kxcXLfTcyHb1mvccykvZQqPLB5JSoN3H4MLqGyPc1tKqUKGULkXdnfrhGDM3armhePfdWBPzxMCAgm5",
  "key11": "DZLXkDN4stZe3BjFbkZxj3Wy15Nfx1YjBhzRQepaqBUQdPKoNnh7zgJKNnn2rCHiiBA6rn7DmmZz5ypwBDd74bu",
  "key12": "fM4ULoUaSfhDg21usDQfWqNmZWjscJ9mNUQnT3sau6fVkUNp6CXvEwxnzGgEJNzt4a465DA7zh7SHsxSBvjxyW3",
  "key13": "5W9JXQw4yXKXi3YZYVQqkV6kh4kZheuaxi2T5HWGYsUq5Ab2ShnZMyhgsMMqxS9u7U7e7GjjaTK2RH1cpjdAATpQ",
  "key14": "39AXCiZuPpUrndGAYsraZgo8DTDmfhg5j67kKRo76KdM2SP5m3jtGLNB7QSSZVrbYMpK4uT1LgN61SaZuXKcr8Ev",
  "key15": "5UxgMWK5qqLDXKjGMcDZvxmvzGY2nXKZrpn9WPrzKEU7SmDka1fh7TXssbZak9kmMXV6moLDgn27ZGpWmGAtGBSM",
  "key16": "5zTKEhP2EQPvdChmwjhYdTUfTPSqUYRe74hSDMVu2Vgxgs3Veo7aRx3uRvB6KcDa8xWugvJTmqbGZ1Krj5j31Bv4",
  "key17": "T9j8Se5B24SPwiWLmVzZao7tVJGqfT9WbGJCPvuvBHbhBdCsaDWBvcmgsJGA5FMZT6PzSAMhreTaq8C9Qkp3RZG",
  "key18": "4PvDiLDwMa5C4avMvDssKdyXDwoCuAVCFE7raCdnXnBnUm2WeazUCtPrxatGTmVqoAUGiTjMPAEuwdKv71bjmovn",
  "key19": "2v76tcgY87TZ5yNwfjMoFGRMAZekpCRte1TvgDV83PRzWQJrcqzvmhyMWfTPnAiFNx1eYmpB3if4eRchnsP1oJHZ",
  "key20": "596KatWwXG8hhPXkXDgvWQo5LHXyyzSx9ogguMzDHbvFUqjpAFTRcXzuTXkZ6N7RtAvCGmx1EHf3NLCT5GMwMjBD",
  "key21": "jAFoBnX2GzfZYqhcu1mY7uZ3wzR2BH4xkYxnNWEn7YH1VaAwxDWvw8NeZLdK3AtoSLa5mHKPCZFWQXx6WX9CAKW",
  "key22": "uWyYvUG34uUrWGYhapDKY5Ybpy1PdX6jQzn3YnxMMeyX2xh42ydQ1CcjECmY2fE11uQUSD3rBaxRo6vcyw9Rypc",
  "key23": "8V8ia5Pi3D8H2yaRxkESsziWVAyW9iMY6RRkSCa9A9Yrfp51zrophb8WfrCDe4fMPjkhiuo8qMMvukzA8Npkvq7",
  "key24": "tzFbAz1gy5jsdrasUWfTEKgU4FqMr1T8LSAbLq9Q8HqqpFE4fuqBqdxiCEXqDZnQjQqe4mBJWwTK8eaHdojTPfV",
  "key25": "5Vmq76s28canUNQiaSHLBFT5xBFkbPKcVurro3Bngc2jsx6uoiNxGSb4oUDFRzSWcveNUtqBKE6iENHR9SUQRcgk",
  "key26": "5jFsHruLSRBvRV4QqrkC95r5ewysf9f9zvC2qtLFeQTqmjQbSNCTWF5sRXmMKdrCPBA1y5fioZu3U7fwAb2tzdyr",
  "key27": "v5q6iB4V1VwzzkZ4xoL9CXk3KdNh7ob1ykEZL86LXD852rJ3WdwTc1FppsgMJfv5VyW7q4KMaQ9abyRZFSmZgmb",
  "key28": "23aufgEhJYc9PaPjKEdtsBqimnZXGTmuZZrLCiz8NJnwkZ12gkFopvaTeDXhZbW6giqxMd7Jhy6J4c8YQ4z6UUy7",
  "key29": "3UJkAJZjoZQSe9AnasmQ91LorwVrxAT3sGjPFRqyoBKMfJ6KNSfPGeNC2vAdf3cT5C9UUf2vdPMAC875Mf4PjV1E",
  "key30": "3zSZ2dqXZgPrzL624BZerKUfdognbcZ13wUNCFMgJ3BkAPjkoFnSMoqhxoiX8RH3u3rXoZcbNda2aXYCWPL6LMEe",
  "key31": "5MLcq2J49dzEGfUUPb4QtNcGw7Vjsjrf54Zc6qnrFiSQV19QNdyTiR7JXLKw9XhdcZTxdZnJdfotKQ5HGBeUGR36",
  "key32": "5GixcUMBYZQL6U2dD3XFTyFFcNoRBJi6sCs7uJTSdFuWSJwcZj6keG3aePHDEg317zT6bsAXozhScU7Meb9MyxTr",
  "key33": "4UQ5oJ21ocgU9ZfT5DnDF1yx7Z8ZDSNcNus8uFn9U8WpLyErsuRFey8KSUo5cL57JaDPoECrqYVthhFP7WLJntZz",
  "key34": "4czns9CMHQbA2Zwck4ZAXNq56bSR3cUK6ScrFKfw6Mufz8aATQobjBxRAbDVVKHxabVY7YeNyTdxRfaDq6a8dz6E",
  "key35": "4anZni9BJ95Re9covmwYjt9yd82Zp5Kros3BRerby79W3vcn4JdP24pPjjA773bQ8UH8WA1u2NcRZS9CFrmkhnDB",
  "key36": "2HcDHCmdRysFrUjYqWa9hAL3kcgVidRLqKCCM3nuNEZXf9UiEPmD9jygAYhRFM3qa6gKVevLeW6gf8xPA17ey2XQ",
  "key37": "3UjV2HqGAirmRXDEq65BVr7Ko8p7FRaQ42mKZqMDxMAFDtfvA8kKLv3W7g53PVnN47Mp7e5ZL3msYmka2CojQMAC",
  "key38": "5fxhJTzabaGoZ16DnMmi6EB9BK6EFFA5VmzMBHMCQswJgdYAqUGDiRRxptLWHRniS1FgNGWkopR7mCgpX6TW87gv",
  "key39": "4kNhyUviTQTRHZR17mj2jetVfP1b9FUFBYuP5FXo3wTY1gfrR8RQPypQXSMKYKWTnQdHEgRZrWMnrci2NBBD9XtC",
  "key40": "VhfWTKv7z3A1PDt6nfoMuprPL2AbQwLRsM43GgMAwEJJZ4vM2Tmc8RF9YtEBJ7C5ULhfDJpaqqW4bSoZLtsyb7b",
  "key41": "59oGoo7nxZGx57c9JYe5ezgErR1VhywsrrVD1NUjwWCsARTN5hJcN3P96Y3aGLbwgMdnbFcjXwCgzR1kji8Quua3",
  "key42": "X4zgutPktMuoK5JiDUVM2g6mwztneEcgn9cR4j3Tz8UXfTgJGWhEFkgNS9TEoiqsNE2iLmB2kaawyqCpt49qU4w",
  "key43": "64B5SJLdfbsT4NcVDahGJJ7WVw4fDbZ1WNRSjpvP1rA3cnFhN5B3TUvC6ht31ZE3spP1TCe6xVRSskpoLLTr1YKp",
  "key44": "pvgM6oGsWgMuE2MHPydro4UocP3PTuKjkkDMToneBgMSCoCGFs6wwQwHFWf43XU3KVjFyC4CxjKr2KZtPmPxEsG",
  "key45": "4BMrbM4YC7oYTwzgdoPNag8DqVS9kwssiG2xxT6iH9UG88qwQLAswo1YXz4vYEbMJFdDjxYVwiGxEfVZHxGH4PVd"
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
