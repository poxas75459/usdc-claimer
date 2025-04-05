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
    "5Z5AJ8ik75QRgfxsVyZhi9ufeKxj66rjRiKmcXfVtpSQFcbbteYaFSB6kH4rgiUmUy5wb588WucTXZE8GHGiwrYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TdYg9Kbny9vhedApUVTkFtRviXyhtXAp2vGYXQ6WwrFNoTNaRrqst4SmEsDaeRC7A9eEzNkcNrJzMYAp22axPfE",
  "key1": "39VXSgo36Yfi39sF8mjpZiuWAKWafTPXEpP48kqzU2bMxiiEDiUe6omXBoytWfsyQBYp4o1maW83UL8eH3pUEELv",
  "key2": "52DvTW5Bs1ZkNZEVR6hRBev5EXjUUksCpt4t5B48uTy1L5DToMnXJeNt2b4SWbxv18LW8UQxiiwvAqJuuvN8Cpge",
  "key3": "5dFkGrCZVBBGQDVn63R3BnG6BcoDoZbUDt8w2PAVf5abTSrpr6eiKGGvu7w2NHYMY3Zrty4Kt6dvzKaSZCSiekta",
  "key4": "44mrC2mpoufXcCFVUwvnxY3QehGrNYT7NQCL3RwPgkUDERbAXkrTprDiNGaevrX3hV1dvSepVEMBMF4gdzNz2Zru",
  "key5": "34nFyW986TxnuaZJD2vmy9hANPUhjf1cqxpShYVAfQcMSXGXNtsxzGTfWMcs5VcsQY4x7iXpELsAYRBxDEBKBHSf",
  "key6": "56tC8zwk9kxpD4mFMRwZnNEC3XUDogNmkUWMs9pEVexNbLqJcnWDG5nf7gPhyY9yWVHtS8rYvwCQNtvQZnssyCDf",
  "key7": "2TgjcYUCvMaUg5JXEo5Zy7FxpaNTBmqcT9roVQsPixQxugEqezY1GE21w7m5jnYLDUAXMwFmgadD8juAUC9M47Xo",
  "key8": "kAmYQ2eZqYQZ6Ry1cUZfLvj5UiD8M5d8J2M6wncHZX6NaUvsheMtNp3B3p1Ft9geF1NptbJ2Z6dE77ZRikxYEsQ",
  "key9": "3yzMRSPJN3a5tJhgiUKjaKzs7cjAgThY1YStcHw7bYpm83mDMB9PoQiPk6asDgtW1JtHjNLErQuYgnhxYhFKpzwL",
  "key10": "56AXtkzhPLhctobxK7h2TrAJ2eH5pM2Y6c33YJRUcQB8sPzuZheTKYvdaoisWmE19iWL14vmbM7sFURuLEERNxDJ",
  "key11": "5bZdnFY5az7SqoL36ngsBbUE8Jb3aX8HcLSDpNRZjPpYoijn65BxHNh1XR58M79C4UhPYxk7sBwzWc31B58VLZFr",
  "key12": "2PXfvTD7xfKzHREuNU2wt7vjiBcqHGR6FZYLWBZrocHu2wGY85wv7xSVKvGq93DBtt6ZLA2TQ1jvYA4xuJ5CGBSv",
  "key13": "5Z6ig44rw4HAuxpSAphFMmJoPznd9rT5snGnpYHYwcH55bnpGUt3Zicx7NNehK2z7ndVLUUw7h55p7L6JN76cuL6",
  "key14": "2AP6LHuzkoKHMYhBP9SntwbXhC7As1ebchfC5egzsKTWbhADgBd2vppXku9qWuzzRCdmdBSkzMj6SfAaBLT3n8Br",
  "key15": "5rGVAtnrTdXb1L1FLnNrAWatTPUYBY6sKBMGLVzWTLVmzeiiPaeKSHwBbwz4wuFSQoND1pQweepcRZTKpniLYvWU",
  "key16": "4yGpZWvGqjdAN2uYjUZgpxEr1XV8tRYFPc2aPfoTjEs1J4N61bX5CiP85qz6SpLTptcxUMTmeJUrhuRdwwXDB5FG",
  "key17": "4nemERXTBra8RBzWAyToiBswzNueDn5V9zwjfcNczdnz88MFrugtTNypbhqNaPed84P1cfNKxXBoh6nYtiqY2NUo",
  "key18": "5igF3JjfRwGwM14K6Epie3vfWp9vE6Pi3z2HMvxu95MTgimw2wcbvh1hcoL2S7cekqEzwNJL9sRVHwKQ3cdLwZmA",
  "key19": "kZy1nFyyw9RU6u6VT8MZHNmuY4cYoRKwZNDJhJXtQiejWWVdPL15U8eACeEtEe4KBCeh9XsjeG5WagjozedRXRm",
  "key20": "cdz9YQzwKeTkTUdAsYLwGSjB9Mw7B1xHAENfYXT4i9T8LYxu2Vn8iDKKCKqNZmLmtyreVPWszrH9w3PXd5g3wBr",
  "key21": "4qYjgiErGEeS4EVUFM23Pkdy9GD182H224fXdgHRfTPd23XanHmwsCztDTbSJ7P1y36fsFvzDhCq9FNv4nxE1sAr",
  "key22": "39dadK75L9ef3UaUVtPCjgSExpYcTsc1ninyvKMMLkA6SfUdKGwCGoAgdz6hrTyuymXWYjR28Gq7vQc5EYXYV9jr",
  "key23": "eirDhaZkh1A94r8vyMRJ6UWknbd7LMfu5HGnEZFQKwPNB3Ezo3bVHaoRANjktHphB9kphLb7zfZM1ziKaCUaLfg",
  "key24": "3KmDyLt8WKC3ShwjHjwq7zXKhMVi4SFH9QpnVDvzJJonFZ5c1YrCvZ55eH9HUeThUdQfp8wjPAPoFt3THV6yyc1Q",
  "key25": "513zVrEQwquFVfwdCHJaypMp9f5Kfib6npcZQCrampHdsPgTKBMGjmz5egwvS4uKJoVVgPP5aVzjKu7BCqbrbPp7",
  "key26": "5FmemLrtKc8tqbJm4oUEYt8ZLUvJ2JeFYj1eNLECMoHVxdX2cdyBxEGdeM4FNJ1dnMPMvWJaJZ6RR81T7afhuNJo",
  "key27": "2uLSGdru8YkGKREP3Pqa7hNPqGp4ev3MyaTwPwS1Qcq7MQntompM2Dwro78QEUCnDCTup8hcnL8ytrrR5FnBWwxP",
  "key28": "3ZnWZz98Gpi636JbchnEbK2pfcp5KREYgMpWS29fKssvbZo55cBxa9o5K2mMCQJvtKj8cqNhFzAAC2z4gUH1vdJY",
  "key29": "2CfJ7Ym2jxVR97QZgy9TzsUTr5nASCVPoeWom2c6rtREQvKRQfEN8bF8sUuWk639qG698D5h6YNvNsYhVk7g2k8d",
  "key30": "3G87TwDXZq3tX5wQwr6fbyPRG3bLhS7aYjxqHmErEpSNCRvDgZXQMRtAifyGVeKQwwMb7nY1HxPZBmcBXKnKkMK",
  "key31": "5QxAW4pta6CGPmhSbutRr446e2Cj9dbn5pTTxomU41VXrJMPWe7CbrYDUxAk3ZGN1FupKgiEEskcTKVmgEU9WCKH",
  "key32": "3nPFTSL9tXhvjEwVnHz5HbCumwSyNRTyavnW52yTcUdypiq8Rn9zhfPMwjKkHPwCGgk5DiHKFy4CAaTJHjmFwhwh",
  "key33": "3846WKheWGajva5Shu1ZnKMvD5fa2vXhNuCx5r6RsRHbP1nfUNs8t1bLFq9tPAc9DA1wbkYHKAX42pzGCpcuRqZy",
  "key34": "36AhLk41QQT7MN2Mcy7obACsrnnd68i4YX3btB8HEvJvdrubkJnay71GvRDimaVZe8jF1m9jkpeD9cvTKuokUQrx",
  "key35": "3zQxzR1JQDrpcNDTJPyMvkg5syEkKjQcKLiSzDpz8S5apZTgut34PBgwowEbJJhQPpkkzxCrx55wfzg89WuCT6NM",
  "key36": "3NrPSwMQJMRg1onB3Rf8rhoFNa9dsQW2ZUAHmvu1zXUccLQFHZima63oxLDHSQtJhu6DR6Wq6DVe1RJGQDpRQ6hn",
  "key37": "4sRZXzxHTVUpS7AyDSXnznnzHXUjk2cUDkrZTVNtrBdzGgb8mkV7NANCQtBvwFuzcEYkUFxdMzCP6Jn9s1xKBP9b",
  "key38": "3JQ3wMtH1EAGV2bEYYqv8kYGeynrthSi82y2bt1fGuCfbbUgXdqVU8UHoACTRJ5uLGSVHNTbaCTSsNV9gSgic3jo",
  "key39": "5cAWsvvvW3LWnVZFCqZjxXceFMCmbu3ao9kLpwp3Uqi1avMeQ3yJDk86w586EfHp4GrTXSxEKNqnaX3RxxJA5p2F",
  "key40": "2hfi63C3naijGd3eusyr7WjhFfVhypWajwgdiptpdjuGytHMRjaUQLJHxoyRpsTjgyrxGrHhbkdv2K89MFW956qN",
  "key41": "2Kv5Jby921PUur8yiEuY5297kJLfxwpxhb8cVKa6BUjDZVFy2RnWCMS9uGCWWJARxWJodiAWkv5CafVcgVRn1hgk",
  "key42": "3VFK8TLwtvBh38tBD5SG1G3VuJpZZpPcWGrgQuUpR6jcTXVpKKdqPjoGGGmyJAxjUzQWextk1YLgAF75E5yE1EJP",
  "key43": "2VcdNYUs2peDpZbs82pVFqvcuiE5DRAKgEeKsxrxH5HH6UAaczQfRPqRNQNFX9iQeudV7StxXkDA12uBmvx7Mm6H",
  "key44": "uCuFrt7NnrJAC3keszAYw8qDCfSf8WnnAbfZmuXghnc7Hfr3riSx1uuPG1M9RJ2D8vFtu7tGTRLowqkZTU4cofk",
  "key45": "w9qRmawvxkciFi9sZYpEHUEEGczqQ72zUrxZgY7dtmD3m7LeErGDJetu2nYoCmoA2VAJBLUQsJ2WGDE5U8UGQeD"
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
