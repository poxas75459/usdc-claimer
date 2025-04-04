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
    "5p3VZVDJm97uiUacfZ4Av9B8XXTGDEhG17jwGvsPFCJrzgLdMzMi5sh6zfKKm8gtaHL4NxhywPUdUM5immEMmvBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47cZxbFXEXxHfe87uxYorB4Tm8EH5apwoJMmL43bR2ZWm9gxyCXBTDdFotZzUXLdSnaJPZhxUn9KTB9mqBxTUQWs",
  "key1": "41cvevzYfcfouEn9B6jY398XskKK3Eku8JfY9WMPFWqtnZHoGjpnXfq9xy1Ph5MKsNSNBC2vpkjBMXGAWbQDR3fj",
  "key2": "FqaVdBmfsSwx7BvSZ63TmzYb8Ms5WGtVxiisZMDkedKpNcHjFUovnZxFHSgt9HgMPc2592SgM8ez8zr3J1tHSss",
  "key3": "5Vh2FmtSm8Gzfgy9J78B8Gg9buMDwZM2iQDZ4H6gmCrJkQQ2vN8vCFcp1SSF3SBfwdfdmUM8FAyBAigNztugoqnK",
  "key4": "5mhW7PvQPcVTafBvKksGveZLGjMLCvt3FnHQtySJmBfVJ6xmLYH1qiM1bcxGYqFfHCaf8fruSJAsvEJgfrjwHduD",
  "key5": "5cJCKtVtURhx1kgWhs2hiEq5eemrUT8RBmyAMqHhLC2rbED1dPoGWnHuNnjmms6Y6CsoweQvZBbmCGQxDYhySGkG",
  "key6": "3HU2JAuGZBVcs53c95hugqTGSD3TG22YKRaZuSHmetxMZce6PJUAfZniM5Zku1a8UASpWtWt6hS4WfDZqdYy8UFk",
  "key7": "3oyLeZtNcRCybtx965Nw8n1ekRtFV9FbVwveBLEULeobqAB9y6hvX9fPpQR8S7sVz9RHPPmvRor9fbvM6H4Ym6g2",
  "key8": "2qvj3oUjnwKCoRSW9rsoZgi1nBq2QRymanS8hGQqnmd4w2hhFERKeXgzyhrZQNTX7K12xfVAdZyFEZVDRjMuuDdw",
  "key9": "2rZsF39gmH2ewatXKc5ePjzsWMGGvvPZqsR3uemk3RL962hQoYFPyvNMNHCxnfgpddirWZTVoMgozG6VTKp1BPwj",
  "key10": "39mYPJC4FBA7sbSV6rNUexo32VhSQ8JzqjstK9dgEarbn5eASefbLvX8YpaTiisLSmeszCSzwKGXECAZ2gdLq5bC",
  "key11": "2nMrriqyfQ3TF7TronFxNHrTuvZUxRYXaCQPAmMX48nFxVr7jSqTTUyaGyZrHh9FyVuHyd5qTCgFXQhGwsWsHHuD",
  "key12": "RS22xDQkhUTeNEQYMmpWju1EnxuxrNFTquMzpUoTpJyY1oMH5UVxkTxCN8bh2heMQspQ8ggTrb87dBPwg7HEtjN",
  "key13": "3dKoXswbP3c6f6oNB34wQSDh7Lho6iFxuAjKGcWgazABkouSHmhYsH3DSDbB4DFK37K2SEsCFWBa58dC9s3zDsz",
  "key14": "4NPStF35FoZSYkCXpDQV6fbn6oyi9Zg5dseb6WSj4HBsjxLBpqfZ6iL1Gy1JLoZ2eBrBNoJxnARRKXn1rDxVbp1e",
  "key15": "4qf2t2CL2ZaLkPbQPsjU6bUWvnR3L29weCBpY5wtGsNL85rfEwJKLPbSKwoqGbibAtQfBj6HkQ4bdPKmzHqJMKzH",
  "key16": "2SGjP2Hi6886AW37yo9ZS6xp9mCRM2PS2yoC4zXT3whZH4Nt2HhFp3UCQ7bKpDjS57fuyikd4TiJNvTriPY2jNoa",
  "key17": "46vj9SPJW79TKrbvgygwuJUeYcSyJxcSyQFrW738tKMAqcjWrXePHYwn7NurJowbbHBeXmoKj97oYAuuTNdxoRSB",
  "key18": "4MNTTJ8skiq85yT1ou7HS2oK4kH7UzRrXu1EL4bJRXE5hEyZ2JdasScsGqtgUB1anZTgkL1voZ4MoiSi6S7JBAMc",
  "key19": "5QptJkYiTvStDsFLyjtarNCXmuymwm9iNG4GETqdjUut3BtvXsTQV5K889WHoadhKbkjdLurYCWW1ZfjLH1Sqmnq",
  "key20": "4Lrv4Qri86fYX1tdLAsEPxUK4kPtxGvJwBkoBNe3x2gB19hNdPewgD2P6YKHb1gAojnaWHsj1c3MbAMdB9pLzuio",
  "key21": "WnafL6HRWob4J4wzvgtKLonhDomCcWxwxVQgTZ2RaYMPgTNGrEeahNBVS76p832shRTtqZKsKoYRQdXsBSK4Nmd",
  "key22": "RLJb1SveGgJAPa8eKEESoiFinVLsZhakNpt575dL5CpvYqu3qVSmKpAu7syb4qS5ZTqVehQKXK98SxnLFjRUK4b",
  "key23": "57P4NACzsN2xoQcJF4HhqEaFqyxGW95oridPeUxBeT5xUnodLEaQRLKv3kXbfBpg6Gd1Vw1HdMzBjraV8nWhsZfN",
  "key24": "4etPLYeyv2QyueRxbyw7csRu8ejvpWkUb32NuSjqbTtGy3HcLLYzaWJ8uyxFCKL414GR6Z2ZpBq5u5nLu6ZHHiWK",
  "key25": "2Xc6bBG2F1SuvaDL6budCXhsXc1S4oj3FfzYfh1HZmM7fcktEB3bTLrH7oj5Uz27q1EiCZwnVJdeFz4gAGYQ6kEe",
  "key26": "5BYbp9D7xYtZXp9PPnHbtVgwrA2xnYYM784yrPHHzcGKJPEVMF8zwBoDKFLZ5oxEsFjfeENRpBcy3ADbXBpBx72A",
  "key27": "3V82PfNCZeMPQLbpkK9CQ1DFHKXg91zGgSYer1qzQng1hGLQaEcEdJ89dEaEGHgrVRX5MPzWx68DQGAShqdb4YGr",
  "key28": "3CJVFbdQDPsQvG1FYbW4CBVi7CMKpYeXMeUBVTz8cDGN1PbBAvMNVbxZGZQhyvDRhjYH6DroxfU8sGPwSzBeWrMD",
  "key29": "2jasMs3qWav5rPg69X2VmHV3RWg8jFopzph1QbZG2GGz8KSU4d83FutD88JrwCvw1T85zFVmgbzJEENEJJkv3Dfg",
  "key30": "3famhC4GquTCQQKTa7cyeTAtSEeh5HEqJr22o1cEiyJ1VPcy4qXybVJCrZAXcSGXeJQ73n1sGR7ijeML5sne1Gdz",
  "key31": "2f3KynswxjMTAbg6Pg5gcoZa6WPuXsFuA7dwXajcfSFyHQ3oCKWR56a1FT6jRGgtzxfZmkJDY1ZXf2u1oTGSe6HJ",
  "key32": "4VqKdzBtrf66U9kLHYwy3Fu3faaFMPYTHYjfJdX2x9oTgTDrHouqfJoCMGEwQ7hyQ7oq9mB8qZjTSPM6UbYXdqAm",
  "key33": "5bnDTiSiF4nPm3aGYsURECh45pvTvcEdB6SR6SMpNhjWvLSVWas6yqusYXwjQaNcR3fw1ZzeUZ3v5yeX2xGeR568",
  "key34": "3ifmTATF9MxeZD55Pt8uxQJPvZjeqPhcqVnB7iUovvvBDKovUyqKdFMAf9rZM3VB8UJpZmCF8rThq8tQiHDREA8T",
  "key35": "NWU2Gjeps2351FsqHMtmuVdgXzF7VVXRTf43iFyvQFxcWkQuFVPDAFVd4sUXmzE6LKDUVzsCEtTtB34hXoVj755",
  "key36": "2DiToTWbr2AFVDECpToGdHJpW64AG6sR3Kz1iT9tJZvFRStgWcmQ1LfCeH5Pha9Uqhj1G86xKbPz6Sa11zWzCtFm",
  "key37": "WQMVUGQc3hHPoAzq1Jht5XAjQpX4tTC3779TXBz2Hsy6MAEQefA6T5fywKcogFZCuFFmR6TctJ4kUaxN4kQnYLS",
  "key38": "3XfTz41WuwqseXktiNsyQePG8iRUB5HiLjw4LsG9HuaFFwH6GfX2hU5XbJkSS3Jz7DLtyPJ1qPnonXJWFg2aeLLW",
  "key39": "2JAMsRW2XMPuTBxxaeQTHxzCFCiXDonLwRNzMTercyMnX2rcbmza4SApQKcMtD4HbRf67W49o6bwe9jPUHwPG6Cj",
  "key40": "4ggt7SC1jMqppbiRbvE9i4qdPC2LhmsNrHmp4ctqw6gPpVSWCvi9AyBhqQ3iJjUR9fxfUXaVoYijBFVrczrvXo3M",
  "key41": "4mDdV2YhpQpfLXHBhTEC8RwUfwuwcfhaf1WsK5p5DmcTvQwt74NpyeXC9XC9HdFufNG9XsryL9agpBnUdaPxS9rt",
  "key42": "3wWJDUooTGmkzMU6kBopPqhco51jCMESJk3V8gUyPQFPEYvkKQDgNK38SjRniij8q5Ao6cWJ3pSx5HxjAKy9PPxU",
  "key43": "dr8tNXrP5AkjY7yeAordpeLSYuETwLzgxua5Ms1WN1Dp5tpQcfEcGwm9sik3TVrcSrUzXWFoJ4YjzBkC62isBzT",
  "key44": "X5VxjYVmrf3Bke9apDY6hcpAQ9hvyA1XAu6mgkSEf9hVe3fUTw3NVZdTcTgNvyWjrhW3RGCtEzMmsM6DQDhdGnk",
  "key45": "2Pm9Xs8DiYCypQY5zGuRfF4mrfTBFCzpvLWQAod1Mh2nrcDRqUXZtMpZEjhMG1Hs93jMPtLVXCrFEFcKiPw9HCw5",
  "key46": "5U7dAU1ziaSi2z2Q5YQNLSfPf26ePup8WiErDjvZMLf8tWY5KSiwLRXwSULtQYYujdN7KuXhXQ6sfXdwuKYBSQzS",
  "key47": "4waCVNXt9PZMSEiEyKsDh7Xs5eSMDXEZUb8qbm13xWmMcFK5dCiLc71KZjRRMNPfaMy6t145Cyf7URTRqu8i9nB5",
  "key48": "iGbmt8MYuUNA6QdD4aRntd6CbeyWzNYX93YdULmSzVaLwuGzicaXbidcaScraJ2fi2hG6YMzLWtVtgG4tRRpg6B"
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
