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
    "jLutwHWCVYV7ceqjp7FBGNcCZ3kNEnPyAwRuyKwn7GqEWVneZ4ZBHPCq9qr3CoH8LsPxLGQqshKUeZu5CEHe7Ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T7ewjPL4vmjBjp5PQuPcLXwYvQqce8vkHucEcpuJhffPiQx71KTou8et7DmgHiu6aX7CxC9heBRVGWGNdBxDpeY",
  "key1": "rL81rDCw4qXRL4z52yeGsQJrWNykTDdY85DZoZrpMSgtWaPvQitocCiFgaX8LMLCHrFg6xzhHquTmhuaA95z4HZ",
  "key2": "3UNAfaXYFM7a3M4ZpP4zk8YqssLAg9ehrPgQWC2juS3cNiU71SVTdqKhaKAUvbFrY4eKhwuPeuFCDzUZyPkGPU6U",
  "key3": "jTyTyKYCLZErTwYzyBjGbDujK7hQ43zmiN1pGcEwjGv7GGDMSmygG2ukPn8fopXSLw45Jjq4wY9zXRgxvEdzBe3",
  "key4": "XEe2YHdjMZT7boFaZRtHmnSBG9jzkyr5XpAVX9tKbCX9ZkLzPn8DhsiQTKCFDrpWCdoLfQCu69EJGRrfo5SvGDG",
  "key5": "X18VBfs7yJRKfTSesMaNHxtcJZ5eMnFhbikHwns1kDweH8WpSoiT9DJCQ3J9zsQvhYEAWrEtkLGwn6Q7AqRah5H",
  "key6": "5RsahBRFFRqAv3UH3fE1rAEgKFZpQozXWPqAMS1ouNJ3FQHHxYNVVMTrQTjtqAKmpRBQbwaUfa4SUqDVTzdRXnHN",
  "key7": "5Ta2PWJTFzZk84iM7W113WcrfMg2SvHa6pr6ErCx8quNnooKeoUikE8skHXzuKjcPDVCBt3rxyFGqjx82XM6DCba",
  "key8": "64wGMLSSgDoxAmxc2odSmVKWiyrwPppW9RQ3HqZyvGhLA781RvfdvZUxU9zs2vbGjVXfpQPGsrP3jgyXLhKcHB15",
  "key9": "wZLpzLJofs7LpCnRk6QrJ99oz3PbPSRsyV2EAmTd1xr2o8bSYVZdRozf2YTLkVenMj9SFmzoNCNi3DyStxtdDjb",
  "key10": "3HTLT8HuPELPdz2MRJAkc46nk6zco3RruggS8qbce5TUfGa2jaJu7e5Enj711a5vtWMMurqaSQeDVjjt1wBFPL9o",
  "key11": "5e2P5JcXR54yzMaVDz2g673P59k6AERxqYkQWgTTHG3ny4fLAW41cmXRYnkDofDYFW1pigah3H9KBe2BDVVDZZ6H",
  "key12": "5LfgoPQi8du8HZFFJrBh9RAXkFvnrqXpekXC75Yxd8k8v1QGMuVAGXqFpqhSQuvxAYmMoNpcxEwbKV9V4p6sv9Ck",
  "key13": "2z7rQrFJ6LG2nToyV15u8fdnega9mYLAtWDuMS2riszfq1ihkaZ3Mq4qKLprFDjZqs9cxBCt7ZFBR6EeJPCaQTwC",
  "key14": "2k6upCLhoCQHiGM76xkq9Fz2RYC17LfowAYau28w8Rs5AmDgNYfHhVwSVf8E9LZNxmaR9vLQCWLAyTo2Ndys9caj",
  "key15": "FJYLFy46yWFxNp6bnPwm5hpeaLcbBNxj7i51tbR8uB5jVAvdw3uAPhcwG5QhpRXcTYEZXNnCdErFZi6GXLCx4Bf",
  "key16": "2YDEFsKvUzNbbxXmX38MbDsxieiDPSfrMQsMh5CrNEA2wi2onugPSuXE2mfFQTyUu5FSRFJPCw6eTQMyEQQpPu8T",
  "key17": "5wJJybcC6Fo1xuKeZxC3EUitxVie6cSHhYB4JQSFGJ3kKSYXcv6nLLusA6ewkhFCUfaJMEUrzCKxmiQXkaNDVgg4",
  "key18": "4Nz6nPkM7M2ctdfZcmFYrnvFhYNkJHonisZ1XX9o8icjzGXiZYQxDnzkf8Hzi3HbXjACAqVGdqon3snhreSqRPsN",
  "key19": "4n7eYfTEx3vKKBJgDBnx4seBx2Vin5JfgNWRpRg4V6bkGKhZpe8cMcunXsddRmmGXDAaRMi2BBmZL6JVLXCoRdj8",
  "key20": "2x1tZ4bh4RBPegNw9LkL9ZaFWXehFhkge3DKBCBuEfVJosLXdeo3Ka8UgAmP3XBYxZDYovEt35qxEnMuyhTpwBk7",
  "key21": "5pprTDbvVC9eamd9171cPbGwxtmwCn7WXhsEvjF6fC8f2FUA7ja8gPL7GKD3Em9ezAjc9P6P7yncfCHTShpxm5A",
  "key22": "35SE3SPrDEvZjvskxTRgkXRWNSXWR8NkvLzu72r3CwZ2Rhyyyjs1MjKtPnsH4wmw8yua6zPSLQGnA4opbbxhKhGv",
  "key23": "5dNssga23oFrQeYoam1zq66Vgk7P1cCw1j6iayzurJu7fV5GVvBNUwBpGctBsjf1o9UWkSMNK3rdWs8kXimFC93i",
  "key24": "2pLzCDpqkagKLDFpZK4cPofPah1EQYiJRHLWAXj28cAch1iLkv7BvwzTHfVNf4AFC5ejjvLpBBdWcztZ1j3xwtNT",
  "key25": "2GgX3QNuqmANoJnEYLCEvbun5ycJt2z8xk2TS6MXHBQiCCwRfnqiWLcgW3SB8g2JfQGBaijHwdm1QKdEmcW9ExTB",
  "key26": "4UGYzCVkrZV1wDExPNE46J1dvPdVSv28daquufUTYVKEhDQ5v4iEjmH2bXpo913Yght7q2Unsk3q9efJka9QHJD2",
  "key27": "3rf7SkqNnmWpyd54AYLcW7h5v3thXUfmAGAAVW23PSb5B4Lw5WWGooL8k2jqSnQXHvqWfid4CSV5Wugr16T5af6X",
  "key28": "3eiot8Jkhgz9BqcvqtXzvx1oqiVf26Vr4BUmMxXrTXd1d7VdvHKnyaFztpv6YLTCgnrG5pouJoAGCY3mqSub7ii8",
  "key29": "2iU9bupXH3AbyNaUsd1JgoZYY1F22Puk5sKrcRRQom2NxJzqY1fcksvDnxJKf1xXx2RDiQGXUZVF4MZ4md5m2Zar",
  "key30": "4JtZ5oRFRzUUvpNrDeDeJ2qk7H9TTbwrdxRsY4p11aTUYpmjj5g14TMaJ9GAdU3p1uums9sSJuJZ2Wsnz3XBYXmi",
  "key31": "3XsTbA39FWAXmzPvf3dSMgiNBTFkAnjmfFSZsufUmVFnHqnYWoZeUVbVvRrRCzbpbbKHvFBUqCeZzQ5rjywx2J1f",
  "key32": "5t8pT3ZGu5JFrLBRTC2RUSHhNGS6daLgVuRbqDm8fFPPPUwLvkeNvcKBNCvPbnqtSmWhTjzZqXcUiX61Pikyniw4",
  "key33": "3CiaJaysVe7tsehgYt4fe1GkCJMnV9DCQbvrSm7u85ZeXLWcmY2EnpxCL9b8Am1EJuRjchcys59HJN3KrURaSEQJ",
  "key34": "FKFEFX5tnwHrCSrqYqNe8Xhf2LKLKyFnZjHHZsUpz4UEftKNYKTViTPTzfG9tYUwhHHMJgC3mDTpDDqKdH2VbzA",
  "key35": "2zXwDgBDV7TSjyrdn2BT6GDPXKGnPtQ89PxzZcopbPW73U9uTyapPiu6cb8cBTzGJqfkNyqnKj7MbYrnN8pbzZJS",
  "key36": "2nkjeaYv7GJphT5dn8t7p4B71MQxWrNSRK38T2BtTWT38vwSDUdTup5S56YEqvnWriJY35JyYiNNmkfATdq92ExW",
  "key37": "5XR7nYE6DkdJZ8Lqs8C5yKBTk6qGpTgV6vngKsFgPibGDwN9ycWosfkcyX3DAB6xxEqPGKxDG7T4LFB9SKz3XePa",
  "key38": "4eETQmCQRRVE2PP7Pe257Ji7LQStFsfeMueDxd417WEmRDhpnYfaERRjZ4rE61GbAqFr8Hw4nwAgnf1EFhtfJUci",
  "key39": "4RJq8m2yJUTsgwrcComfHb2G2yCk6BXDpNnjmWPCa9BDp3RUYW4oaXSELc2yGz9hQgdq2vogH8ofgGvYtbBc1wML",
  "key40": "t9SwtpoeeM8GaVC58MeyiKzDRaXkva4J3wTEdk8dUAetavxA2YEQfR6kykpAGU6MntUeEsUgmATQw6bHAHQs8ZL",
  "key41": "53txG79CypgNTTU9er7Gn94VKnWubJndAMq1ZdKzkZKj9p4QX1bjSd5WyQSvbiLaDRZjjvgQiJ9L6MmuRRLns4oS",
  "key42": "45nZcgXihwG3maSrbAv1KMrdBtdh3BEtK2QRrPeZpsN3KwjHvFkP7TvthK3knL576KcVQdahJ7jGFEfWs8bBgvFy",
  "key43": "5RbuhRBfY7FkCPQwxjQTvYwapT1B3sk6vxaBHusQNSFLHErcyW23hhms9RCE3Z5HXxVdueexTjYxbA9gBViBiSeU"
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
