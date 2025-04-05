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
    "4Pz9gY76rU4wfyJBEAPdh2vvw2WK2z8NHXJn6uoqCBixqQFeYvkmZVsHiVxLgBhjpiNBzp8E44UMmzDxdq6nuFd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJQJWM7xjtE7tZahahuTvRNX9TZfu1GAUL4gavBJcHVP1LTCGtatQ6sqQ1R4k42iMePUcfL9z2ZA2ok98LR5786",
  "key1": "XAEp4ZBuBpUU7C6PF3Xjg9cpfPUhg87Rog6n78G5gyF3nF9d6ziLu17d3QsTQPduqSrGVtuS52tBF96hQE6XpUh",
  "key2": "d1JrUFfAHn3bje3zh69JauqMbbqF2qfTjLcxt3NcQEu9niXdKo2RxU2beHjRLpEfNjuNsaW9PtSi5yzUTKtetFc",
  "key3": "5zeP6EB7PTPgeEvvhYf6AQoqefwAq32gGYRXsN2HzS6vjag28VnofdoJ5wvmeL4NAGvTn7TJ6ve8ocCCr9nzb3zX",
  "key4": "5QhoeecFDZ6RRUVeSfKCbdBDLWZjaBwL8ooJTMDf9VCvDGwPtZMDyxhUxWTeMS7CsCQhk8iT6L62DLJXcmvfXX4Z",
  "key5": "3cBSoxNeNzEgiurWMzJQUHJBSeDYuTxhWdqCBF8WqMXtTmtfAMPwvf9zFoRNDKesjgnb6VsSLfB7McjMKBTxt6u8",
  "key6": "4g1hBjfYsEkxbE9mXiaHGEuj3HD3LBvyBQ5iTL9Ahxr2ZNjyrqrJzPp4Taq4KgSYbLJDqAPtYBGBvUwWkqDznQU7",
  "key7": "5grALjfP5FAGK8E2Dix1yQAV9RSKzPQb94LnFyYpTWvqYkfekmXw1M1BMRpifCWDSeLiXDDizwc3VByGFNJj3tVX",
  "key8": "2Pg4cBowukq6Y3MahxYnwcQpMEVYrvDjszHN2yP2K25JbixE8BF5n9MYuCLkF7tSTHs5FeANACLVHxh1yEjcpLTt",
  "key9": "3CoD2gpieGV85Xfw2smDaeN8fwgQg2KitvDpJrHbsthW6BFnLniHUSciLNXvqkKPgukm2sBhAsxyKzb6797RgwQp",
  "key10": "4uofpSCNQqPB2cWDBHPaDiVBMUwMN8ZLXHwxhmdfgyRQAFrG2fyxBAJk5Yrms5fnJmhzCu3M3Dr6iHGHsfrqgLQP",
  "key11": "PKS43FTMDng3nL7aSWtgPTjWQgmSxwYsJ4Mxk9nsL7gRrNLM9LUfgiR3R8zCx53nk8HH4xMBga6JA7zUPaF4XKc",
  "key12": "4RwvMg4rQ8HiSRjfh9BCysjRB51R4Av4U7sADX2vrUZMXzkdkZwXjwgQcxRMhZ7kSv2aVUV1vwTf2snXrB8WkhRE",
  "key13": "4NjtgRUGdz6yeoqAy2dUKEaQydAqnsxeXmFfq6PY5a3iwr2Ag7fMYmVWBpyag6fN4n7kiZLjgs53YU2nnQ5DjUFe",
  "key14": "2QBJqRGhsPViYDzyxJb9Vk8M8uGvUZzNUz1BDDR3m4Uwp4Fs69jnKJ3Vw4AiSNJAYJ9gCjWbT9xsqZdM9PcYb2rH",
  "key15": "4J5V8poDecE1eWNkFG4ZrFULhp1ot6CW3YufdUHC5Neax6Pja9BpNSQeYZPnthMe5mwNn22ArctPX1q3duc5ngr3",
  "key16": "76K8TgPsQGW7XaCdnfgqnNZ4rmRMcY5RRrHdfgCnGJyQKF6QdF2KU5mAWHbgtg3qAJu1UeHYp7iPz4intx7iUMh",
  "key17": "3mtKS68YEWLKg6CGaWnYUVCSmD9SUZ3VamH1dMwDq1H6PG4aMSh9uw1FzGTVkye84g7zaSmkp17kzwj1cJ1GeY3w",
  "key18": "5QYZi3yRz6ZrFGJkZuz5oYYQFHmbmogW9mrnSgx2ZRfYherdVpo24RHWzC4PomVgRmy5AkHupQBMQt7f9cdEfTFg",
  "key19": "2xmhYSCTYLz2FJSEzgnU2wSW1LrveprhzenYh2YtvBWYngjDDRFwyEG6YKu1327jdBw7Ad47kYiHpHnqeMVumURH",
  "key20": "2pDffX2RwKwVGyC9aeV5ia5QCypfvivgy5hJkLBXFDww5PBZLfLMBh7FWpDjFS3f8n4XtE8zvzSDPCnUcp1ZRfrd",
  "key21": "28GmFefeVRJb8LiXDdPWCZ1zpBnNrvsHCbRGegGb6no28j9gsZe11CejcY7UrSLuuJ8hbd9FsHvDkoV8fxCijCDp",
  "key22": "3wC4MAELDgVqRCaFfMXpPAZdVMEweS5HtS9sSi9nYQeNo53HWL9qhDxMR7yZ4ndZSPGQ5DAuyMe7mYCqAwaJk7Ui",
  "key23": "2nwS2SfUqJLsgZRhkqhstbG1ANfmxx52WC1DPHNzEr7kEFmecHTv6vaBS1EGmdFPMXkHrowWj9NzdkgwJdLbbHNf",
  "key24": "b9Pujf6bwkD8YPeW2GU9iKAbsjjvuVTBjrsUe1PHchhWvkRPxKss92Ky9bwcjb2X9mSPkv6e8TF72MCJ8eyuAeK",
  "key25": "3xeyCNWov1Vn5CF43jE6Zs61BLLneQdB79mbGMw2dfg74kq7NvG9w4wXssbet4F6WYq4b2hJnoPtdx22saETKtbd",
  "key26": "8cu9y6QT8x364RRD82WUEeubBTVKd3Zq66f2ZKfWBRKysTK24WEj4xRZ42MG9VX7XZ1Pkj7F8iN7bZgzM2mAhhB",
  "key27": "5oFEp5e1A9uRXfm2DHRZawr4Ewtt1x4my6XQQRobPb5SbNmWWjA4EKwN8qHXk1hhRGKU4dFzFWm1UJcrTW5xtqzX",
  "key28": "36bQ3tnrj8S67tfnVmLvNXCFeR1EtCAaiyauByEznCJdHCa8HvrAWJ6JEfDyGCeaftMdiLYJLzS54Awm6Reobju",
  "key29": "4SG7LHfCCFKUUoVbrydkTdu1LEULX7AhPmzWKjnQPvXKdLqNXqJqpxfNrnQpoYNfn875nFwyd3rSuECgQQvH488z",
  "key30": "5jiYG8YCPv74ygwWQF4gj1wr56WwhTXbJTFfjjcXb2pNQrf8C9fWTuLuSY9TevZoaaGGtzg6uCTXvPZbJ8QskvnW",
  "key31": "5Ss4zsWayx3LANmZnGJkTP7LHUjE2CNXAU7WKy2Gns9Jv3ZQApJAbzfHCRzxRe3QZPSieESz954z4jFgNfGod9iM",
  "key32": "51TqQjyCNhuZBP5A4ApUjHgmycWyFi1uWVigYrzkd1RncLzUoJBmvGZLvSJgZ2wFcNZ8Q2BxtsHpYNkgs1kNGPNb",
  "key33": "5r6DZWBk9vGDPNVgGvwqRxx9715HDiCVfojKvXtYzuxJhhrHTXbiprzwNVE77SRUwzJ3wMwq5vcmQagfDQrJBgZj",
  "key34": "4QspXLC1v1LMXzUcR9hZay3f16ids3zbgcHHPqv5uYyhHiRZEdBVmcwtqC78F5WSRvfeEYWVu6nVM9nCs6nMjRbL",
  "key35": "285J72T6Ph5T2bzN6vgM7HzA7TPsZJXP4DqT3iGB5L6cvzNXWJp2AQTYqdjozqpWTEXMTUbmBGbpcSsgbGw5UyUN",
  "key36": "5ZiTuznNKWTgvJQWARNxpAdWVnohaLBPENL6xLPGiLYVR5pAktDYTLxbqneuGh4oJi8Lw8zbKnmCZFFhs3JnrQrc",
  "key37": "D7crJ72r1cwpDuMZe8YfUmYENcnxUj1ALkUB7pAzPvCYvrEf8zJfaUmQ39BwGRwY8A9WTzLWcb7uryfxTKMu882",
  "key38": "3M7hcU3hArLtHM7xpN7BXZMK8WCQKZyjJzENRcPx5ZwA6sjTyK42yuQCbrBGfyx426sNAR1HnwGBSLxSfKjyvcRR",
  "key39": "DDnqaXhEVMgq6RQNtszECy5njATNGHqF48nRoxQrV2atXvXbgzfMPQt6rVCqx5oXLK8z7tuPQMMXnzvCKrPqM3A",
  "key40": "5ZuRy1yQPJJ2udPmodKNYeoHTbGNWCHdzkAkudw6HeSQJkt4kvHTEHpTumtGEdus74HeCcMmRYZ1prEoRA5a4UR6",
  "key41": "5gEYATuKYP57STjtiuaLqD4uTfMwyZ56sp2Nxu5wibTbDBucuGqzddkEUeCMJGDgyM9yzUNeijKRGJ7LqssPwfHB",
  "key42": "583r52WpWH8YfGuQzRL1StFT7da3QxvrGrurEDfuivTVwJTdQYVAQZmF2RGsJh6SqHgAhihofDw3emu5bJx3ycQA",
  "key43": "39GfJDwEKPa3QZkJbgmXHwhRoLaEhsKmue5GijVJYuD5fDhLsVbuDj6jo4R7nd4SiAsA947xePQ7sCfMyFUGJiCx"
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
