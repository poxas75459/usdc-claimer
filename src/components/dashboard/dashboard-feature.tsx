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
    "4vTBPTmvMLJsx4oDRNhr3mLsxdjmWrn86fTRhyijosx919oLkjrHJ63RR6aRw2sdUPfGVCZmUVnDPskVbbezoSQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sNH4usQTV2PxyyRFqn8u5oJAMTfNdiid8ujAAyb4Cnjjov55Ebjt1QjvsM9AkPwZQXaMrT6ovDApVxBSngG6vpw",
  "key1": "39NeANW2xEarL6W2DW6mHJ82ZjCFbTLgPXBtUXvm8aQbTX2APksBoc3JJyXCPenVEovw6Wip4pR2FEVt8tHmYRNi",
  "key2": "4vLJgKjwPkUvARN6KKdJ8Jboy6CdLsXxK7s6Lo2Vs1RGdPXhtBx5UxYHYY1tUx9VgAoqsodJSjTJsM3CWDiKMKLw",
  "key3": "48JjLxzFUCjEZGsWChLxZBQK5DmrEpmSAVcQVWevjLPTqQCf8kuJqHZPbb4oG21aa7cHfgML68G7nGPtMkrXTbxh",
  "key4": "4KT186a4efSYPZz3YJHiYaxDN5BquTCoNHLpjqzxnzSScwEFZ3gHwTFXtLG6TRyvtasVrTKeK4g8uCV4JHacKPWa",
  "key5": "57zW8UxujVRv31e2Y85VNTQL4BpWCVdPWeX5GKKmppK5MoJVrUqAWABSg5G7yDaD5gXHC3fA3D6GMV4xwa21BkSb",
  "key6": "FdLBn2avP6YoW3g9r5mwokAwAGAsimsZQuGDyaTSCLifCcvUMj1YbGaa1viXdCWmPwg76MHbZWUA9NBJwmzVetV",
  "key7": "3WWaN48rGtuFyPFPhxyjksPM99N6qtXLXK6dcj1HWpnAsCbg8vK4qGiP6HykEYe7zCQJnnhEhNBKocp6cAQTotBh",
  "key8": "1EykYRdqazxHwtiSVvHZ9NFhpGmTNnJGGbHaBMJ8AWEMqHHA5dn2gWuhJkYnjqFLWppbAu4r39jVtjZiTAuNJoH",
  "key9": "J6QU3vTvr6PBqgpQ6KRH2iRmh12K8UZA2QU584wJKcguaENM3unKhz71ZyR1B5V98dRfvvn6J26vnd9dvrSUpyt",
  "key10": "5s624EWSxwAi6T3aWy91MWPPZV5T1vQQhbT6cH2vrf1R8e7T51YNbDxjMTdYYUjxw5fTGRmk7ySvwEMPNAxZZxP2",
  "key11": "5iE1HBDsCJv8w148quCJKMf9Kpy1eht1tmkcweGRHYUWGPAVkcaCzAx1UhTuLQ7ZviuDCUY5y7QP2N43b3sxZtHE",
  "key12": "2JiNQoGbqYhw7qXuwR49AVNtSryQzsTd9GT8SCS9YxUSGB5d9iVVNFDrYsZ3Ht55bEVpZeXo4pzBqcw2L7UYR9qJ",
  "key13": "6Ziu7oQTJvhXMPgEsWLRhTTZRcEPPQFxP2eDWiw1bosVjZv6UP6oaBbA3pNpGqbRbCdmeCk53ZPCZf5hfSu1Qqc",
  "key14": "gDFBnDS5AdNhwkwhfmFthRz7rDaZQ5ymDN3qDrjPU1yQhXGn3PMfM9bAjHQgkcfu1Dj9KXzE8321HxP7GSKNb3s",
  "key15": "s1iV2Z5jFwDR5N5LEAzocQGqomVcHbb4bkGyhPjybrxpSCWy3RjNk9nzqxvEF5UBp2N5EKTWkffzYUgdS1eG19R",
  "key16": "36jvkUKt3YWtci54VSpP7dEgQApJaiUSCxvXyhTwnNCsw8WK3BBcv2VKCWiW8irD4KNL9QwsJ4BHLD7jwDcq4eNy",
  "key17": "ZcWPE3D5oqP8vsorpmCu6HduuzFnxpk1GmGsRXigb16eRcn8PXasxQgGiprdJXZDRLycwZyAfMRd2YxqgrfqH7R",
  "key18": "22iRteQ3eWEyEscgr8GAST25wvRX57p1Z2PsbdWxDNATeAYtbTu6ZxMD3MavspRCGYCAtkcHzXbqS94SWmW55RCw",
  "key19": "4VvfFKqNYLQ18hmHvZhzXuUp8849YFttx8JMcmReqAKf1JVnYvcSzCHpM32j5k68kUNsdcUmtDy9rwfGKK93gYw4",
  "key20": "2WCJK8JsvWXsPvPMzrbS7Ncwf5uQsdXpy2RjCCbALZcrE9ewoVKw2sPcKSiqpy7P6J2rpkiWbgEfcHJWKprELSRv",
  "key21": "3vqwJh2BcL1VxQfNxq5fje4v7b9ADtHNGDWBi7ifi9Sfd7QdPiAmD2mhT6R7sYZMLoGqkJ5JRTbXXXV2xmV6H24Z",
  "key22": "fYfs5AUfTitf77rW6KAnDnUaDTBb4vKpm6PrRkzfXp2LnGYg2LfeKcLpmVjh1qHBakPpoCj8TrFdhmPxdyqiVUC",
  "key23": "25tTXeKAf6cs17WaWJwzpPKDmBnPvYKhRBGzypK7q8khzxf6sGXmMDZBCgPbr2nx36skzMzdnGcNBuMTuvC6rgbA",
  "key24": "5qiFWiE9Ldjx3pAHqQy7BD8WQJZkrMrPR6CH9TxnjVUADQGoU2hsRYHe6aisxmfeHtp2g7cNommsnAznJDL4zJ2i",
  "key25": "BPJSUUHPvNtNrkxjDCg8Tu3fvaVsjJ5gyY1m53vVixsw3QGDozzZoCwwhHSe6Uh4pBQCGUNpeacX98tW4ka5Lt6",
  "key26": "tepEZ78KqYcqK7PYsE4J1xWy2EhFNoupkNciFvCtXdYrq9ZRsrrrBTzs9DVqu1Gad93QAniZbmCAPPeAFwZbHGu",
  "key27": "5VyFjJYtbhZt8pN8bvg5d2yMLCXzumD6z25Xs5WKjPp5Es2VH34pG16yTQEZoyqSwRHkXLuo36Cqs7TASVQyv1tN",
  "key28": "2K5hkN6WfQcDu48MUY3HVUKTirj51oeYig7Y1CKfX4XR8VtRwFF4vaeTDf5fB51FrxbRVFTPcRi3J8j4P1XoMnMM",
  "key29": "4jVVnZc1JQUG4oNVaFgfU7WYJqMpbs4qSqcmzH5o2zYhn4kL2yHnh9p1V6m5XjvLwXn4PrdcMfZSHuLVoLa1133b",
  "key30": "5GMDMmQ97yMQwAasRocxC28dn8c2oYHwgUCPGKDsNGVsWt6rCizZBTwzVZH8QhpLyu2gh5ghEQgtJfDjrZfTtNhC",
  "key31": "4ncyoCBmCqCFjgnLPg5HCFACbqErE4gLDyeiqpRtPkzr7XsZj7CNdfP7yoYasmAY38ZTjTs9JedcFVVBgU7atX8d",
  "key32": "2DoutDPiwgCAsXDFecziWJRnrjZXN7GKSU8viPpqnAmPBf8koBxSczrbAnw9cYhAsKeGi3eJywhvVbwXTHR9kkwC",
  "key33": "3AYsigp6XyX311jJzEqStWSBYDVcw2bCA2qfLXezacHPK4MxY8fw7xXTG952NDdizayPkxwNUaQVWAheHAQcCJZX",
  "key34": "2fp6fq8xMcuyV2gDrNcmXkp3hBZYzEuhut1aCVKJ1YaCkUNNQYcvxMTZYAo2M4dT26uyc1fun96C3etc98yqtG1U",
  "key35": "3AiBqcALwjszokddhwwWGyMKtAjPjKbddD1aQbyQR4uCrr2dKhbUh9KB9fea8xxMP9GsUPGAYaSqXMGtefY2qp1J",
  "key36": "5ZjgMmmqufp5SMK4F8Sf8w98ELDQJ5ykJfoAXdML3a7c3z5JyjwJbdeq627gfNq2MKC9sJ8nrTK8ma7LGPL8E3rB",
  "key37": "3RyiFaLLXT3XoQ5RMCFzEKMgKhXckQvdZeacDPXMR519g3ZKtu3ts2VZH53V362W8JAHu3WqexFWX8FSqyj9utUC",
  "key38": "2UBWXCG4d9w4eaSm7LU2G2jPhYLnjJuPreSioJis3RwP1CTi7a2vcYeAwGwJZfLa92Y8CAgy5AoLWZABJ6qALiqg",
  "key39": "5nTCNzpfWqAsUV21HdamepBMzcViefe3KWTegter1kEqPjRc6yXJJtVBgqg2YdhZtkQNSFQw6KNbEcNrxZgMqzQQ",
  "key40": "65qvpZaJmyxifBBXmyGt1gKYTn7XQcZ8NpsMoPzxNHvNEFkHJx7137ne4hjPBzpyV5ZhMyRs69mukaszJECfdBUW",
  "key41": "2iXqK8qb5sbq8smQhqNqPdpeG5nqvJBAWLoZrdXFxDdLyUFHvjv68euThnTfJ9hjdfP3U3wNjTdXhjSBpb7grQYo",
  "key42": "5o6hcTwEa9rJdf4DKTwjgS1wuLnZgBo4u21UPdoHicutmb6eiK2RQ7GLM6h2HpEF5a6yr1noFNa6rUJ636PJz3WA",
  "key43": "58xqqufj1xkpdDkBBiGxMnoAe8GopN2FoeWwbv75hvuCr4Fgbo9CkkeJZBanwfzvHxmZWNYyS6rYpXtx9QeiA6kQ",
  "key44": "XWPZK3JZLr5NpZKy92uSJ5HDUBLXvw4pupRqXnca147gwYRquYWyBZ5Fb6vrMiwRSKTLy1xESchZB1mUxU6d6LB",
  "key45": "2EtcYVueyJTwYKyYvfAKSMBZ4UyPWwEH77LejTp8XrM5pL66UE35UM5Zn7Jp78aAS45Vm7XRMK5AXaNLrnbH2d9R",
  "key46": "4K1bYhaDCwVxgsrMJ8jFRyJ2rL9WsUhpbGrCgdEt3boYiNVtCbzPJJQTXi3ns2P2hGpfAaviFqaxRnX1jFCZ2d7v",
  "key47": "22NMWMTYxQBsrDx6rtkkwEn3n18EKCVRoq9WrAXgvYxD79ED66dGytA4TgXFWfhw7FD232X4wFPKz4oTwRVtCuVo",
  "key48": "3mGXJR9oR2kUbHohVk1U2m8jTGT2t7Wj6Gw3M4oZ8M48LFx89RvNLbsBQqeHAUKAP35Y9ZiKAfZYgEaxVnZN4udD"
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
