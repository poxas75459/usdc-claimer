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
    "66eiZVkw6jGtsAKGdtBWxMGjpSeu3Dvtad9NBtoiEbRbxFw6UozaVWZBfUPvfmr8MyCC8gW2TT1E4dUpQNmkQAZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ikQPaiYBbgigg4wHmgLvDCduELzKJnwqkYzgeY58gZH7jqeE2CgszNDCcWcdTypTWeTjqSm88vepkLszL5haGKp",
  "key1": "4QvK2ssHG5sp4aS61TbhJEYSaeAKsby8gsE9EieLXeUJ8boHBqW19fUyBzeimrRZjf8hr3t1Xb92TrfGjS2xyoSq",
  "key2": "8oyHMJMmgJxwTVkNavF5sEPqbAWTC5oJaYLh94m8bW4WmDfqj2qW6htWnSv1xrD7Rmo1maEexA3DiSd9859seqJ",
  "key3": "2daG1b4WbnCvJWBTwmr8D2KdE23QiRQZhaeavGhGGJxGmg3gAfjGV7o4Mrx1d52CpqN7Tu8frwSBp61EboqS8otN",
  "key4": "2dVBDJdGNk3YSwaD5RQKqAm7ZKSWQJGYskazUNB826LxBak4f4shz54L3V9F8zX6eMuf3v2xrX8eiFaHHBoix44N",
  "key5": "5X2Y1T5bWgZvwHondozrqP7nK1wHQZwosf15vYWPV35wDS18RZBaJnp748T1QmS7vKxMmHxDesnnTa5RVTGYspZE",
  "key6": "Ypfy4GobJM9qy7FHM1zYeuKiVtLZwFzdgCMghJbPaGRxCNuWRtnw5Mz9hQnputgmmapw8ikjdtLfKD68a9yuJJf",
  "key7": "4b89DA2qvkLpXxK1o2Avjjyhuy9kki7j55FoqdWZQFshwMNh39KwFnENpsaejbPjb86qH6GHGPjbvDYwfyuogZBF",
  "key8": "3wRMd6Jd1stHi7A8CaUpHoTQvjk7eAgt1nK1VYokiH8BAfdzbfaRAyRdhegpUTU4iy8C5VJXFP1ECYtJH5G4Tzuy",
  "key9": "3zsnC5NgRPUjVavJSiQGtt6XeXwDXB8jhrE7ss9NVf1ATtnE51H66sc5MuB3BQXH6fpP3eHTqNyR5UuBeajud4rk",
  "key10": "3bka21vZQVCQg9XN1KqPnytGmRZiKLNQUBTY23WcJRK4Jh8L4LNhhPBpumhP3g7kjGrcywvcwJjGXkfiakwNmYzR",
  "key11": "5JUZc4qj5hYjFruUYD3aGsAjEA1fDSEShJvTPeNiPnP9RMCmgw78PiJ8rdXHvh5uzpDYE6t3nByPHHptsCAjxzZh",
  "key12": "3LMLGXM6yneHtUWnm84qskYvLud2YKRZdGv2KSNu7dJ9uWvGCqHrbgVKGSw2nEzE4KBAZkKmMxDjPhjh6hD54BQh",
  "key13": "2Znke7X9YKTVroqP7Yjf9BwXFXjp5YQFjCdZJ9pstLe8Fq2XP8odZAuLuTLzteCx5PQBDN4e4Bz8wmT3jicLfk2L",
  "key14": "2T6gfULnjvXg6S45PaLCGF1K6gRdPAo3mFGXhGVzRVV8iS1LxgHoGJ5ZM89EBZDKdoEDDro5j2nx8ZLzu7sfDUj5",
  "key15": "5TdMzYkGqbLYmCZV1kDGzd8A3MhxJg2Azex5mrxWJNtE5BHYStPt1qBYQXAVrh19vWCPPFafm5EPyU4gFf7dCpMk",
  "key16": "4gBMF5UW9xjMZi2JbBMB8tCn9Tc6Yz4wCdRjQzvm62cE3jZfMXYsthPq3PPWZarFE7RX7gBWxq7r8Ms7RVt5LWRq",
  "key17": "5XeK5RnRM2DnK2n72CiqEayxB1R4W9s7sTfRHoYfrxtNysQYBhJAVfFwmhuwbKQBvsotzZGDRXbeHVw3f4R8Wd1K",
  "key18": "3MKiqoWdqq8SmxZKxWXSWXM83yEszTntDTc3FECadVj21xjq3JjGibzjYr78zompa2rpRvEiHjVHcwqxFmwNLUmf",
  "key19": "jg5TbbFdZEzWFt9J9sh4s2tmrufJSUBBNPcYNJEk9BmxKNKWEsTuRYcuKhV1NEp6PN9u2CKqVFcLic5difN7w1Q",
  "key20": "5Czb5q8J3Qw9eDrPi89Cdcn3kHA9h6FmuthGCBTbfMoT16eGxHpxiKQg4nK5FCi1hFMRCVEYF9PVZvYecrFHaqhw",
  "key21": "2xCyTnoB1TyWQSYmER8NaZy2pTwR3HXFM7YasVZnHDbF4Er84xAXnGiAFaftWvqhFfqEKjyd2BJoTbvfR9usvds",
  "key22": "5xcRpFTefDTHZX4PRMCbv8o3tv2gZhy2LsfRUvudTPPLyJ5veEAspSdP1v5HvkyDGwQSCG6okfjq5hPEGqt9oUC",
  "key23": "4vC3Nz2ryRjqm2ayhDvETkBPMKd2RErMypfTpLAAadfETRZ5mbKAgcCsLyd13o637uFhqohbdQQ1NHnbWV4SLWVf",
  "key24": "43GZqoLufQaU2uq5f3eA8qmrbAE9XcowPXwjffJsKMBzCDvKNt1bYUmVxvx1yfjTxivjMQzZto9PWDaPb6UVi42n",
  "key25": "3MWSnbGRLTN3WU28XoJFY7sB2YLNAKsbVkoYiMhuB76aYs91E3x3g4AKkTrEvWPRnjkeAqm4AYo2fBS9SdFiELHz",
  "key26": "suGVA4JewVUFBUjepLtsn7cACWZ2gWfV4pi2LkNAiqANnFUmUN69A6JDFDJTpVHrW6hgwHzzwmMrPY4ShQM5pEW",
  "key27": "2jf3RW5akbGvTS89praX8Qx8aNRpV3CgkdR3e9o8DXAJTPnr4HXddNJwwSVMm41R8K8A9aSbYiVdRnX5uqoUHDJ6",
  "key28": "aspZTdqcbRcNJeKbgpaTrmkecLEw3gF9yyLgB1YN5HMM9x5SMCkSpRFFcRT8bTft3WT75j6Tenax1pqXJBviuJm",
  "key29": "5btrnFo3h3wmbjrUzo9emyzAkUyogJF6RrQRbwMeocn54bQ8fdCuZwGWGFosUTe8qLA4bhJvxXhnPBTbaeidC96M",
  "key30": "21dGUqE7vzndvLain1WxAMtMwkVyAkkN9RERMiZKf6sQTpr8BrApSkPhB5MJ4AQMb9a1BTfv2NzHnoH4qmgF9sfd",
  "key31": "679nHfpDX8i7GarwSWHrsinz7VDn2DzTvjqVeNznwXjXQPAVNkAwekCCZVHY5YyaB3Y7qF9aNvKr44aBuc1rG5tj",
  "key32": "4SYPXfW1nQptfcr6ZnE3mxQTCDMBXj1Tw16HQBisVkpjmo6o27QFLRbUYUvig9RCQ2dochL9uCcb6wrKZxXsNei7",
  "key33": "4XZkRjGsPhgFiaXHzrUCuSULjapdaaoBhwC2HkMijmCBHasKUVxwzH4vYpEarLY4yit9d5WT3T6LevYbYPUrvrth",
  "key34": "59tnw4q5zNfx23mdRCJWgTC3mujAb8QmLxoareZMgtuvmCQqdgcCYHYbHbUptYedkCjNHZrDhH4ME78YmoVXvV51",
  "key35": "2eZUb3m3xj5Zw8nC9m9NsQ4pfsXQWeyJpshEzRsYekqXoBHpThFjHsQBfDmZj8S8C2sZVoWhrtB9dZDeXdmukJfA",
  "key36": "3DoUdT4c5YPNZTfAQTXYiAtsKSTHKBU78YDo5x2YvCwEWto2XwxasajbQQPpgpntMXwvWnyygVYifv5oyYM8qs8B",
  "key37": "4KwhKpxrw5yaSsGrjDiAa3Euy3B6JMWKZyzMdHNvVCkG9Ams1vP3twK6nVL5226qYL7m8rGR8VsN6VDGA14PeqPD",
  "key38": "5F8SvxNcLAvdkmSwc8vgiueBy3syoqr3C45Qufe4Nt1T4m9uaWi5FHDgDm7oZvQLxiSdaet1W8b1LoCa5ErxjadG",
  "key39": "48qSASXBwjh5kRD1MFJ3twr67VToSrih6s1kXWTNqw6GjNEuoh4AEyT6nYNdNTPsjYSiMg7vny3AUemEfvhU76zt",
  "key40": "53T97zLSai8S5L5t2umLJmWRY3oE73Eh4N3L7Q8jn7vTYuGFqSsf8m7KEWqgPTYJ59heiafbaXZitypJUqmjD38Y",
  "key41": "4jYceBMnA8iw58SLM7MZVoHS9nAFMgEngrLLbW53Yh8MNsSSAbZL9ShsvcB67yH4PuBeeQTMhf93oSq74Nu8hFV6",
  "key42": "5nWsrGLxtNGv8ReY2tGbMqVZbd8gKkqk1duUMdpb2D2RmFGhDZgiLxUJkscGWpmDWNpW1Q43kLwTVsnjwyWhiVS2",
  "key43": "4Bj6bgSLL7nm64fuskUGEvjPsFGdYXZSd1bkfuZFGuhJw32PALVrbzMPRjWNWi5X1e14V9oVCg5XLZK6Ccm7QyyR",
  "key44": "3hvX6Xf5ibp16yFDeiYPAd3cBPQAJMyAe61LYVPrHnyxf5tQoU8APhzYwM4QgrHnNWmDE1xNFs3g7f451f7iCAUb",
  "key45": "56cm6iC1gaB2dtGuhCVSyZxE9Ey284uaSH3r1ioFNSiyAxPt7xG2FUsW4EF3QH94hF7a7PVCC6pi2eNjYBMwVmaf"
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
