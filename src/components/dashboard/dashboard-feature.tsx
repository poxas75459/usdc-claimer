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
    "cPgSVdHmh6FdsbN4Jkd15SYfFsMMsqGEsq9p7yQ6rXJ4HJyqnk1ZPAzSovmzgM1r9wLPZFzwE6gWQDF4xzzpex3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41kezgwSnzW8J18NT1wMxATvNSKcxRyA3PoLdbie8vuEWVXZUCe5k9degdadiQasFircjRyEwsFZKmAwgwnAjqeC",
  "key1": "3oKLoKfnSYvWCN9kKncaPDtVGu6QmjZH5f514P87RqS6eoNisUusXtmfQYfsFNjPXAvcfNuGAV52g6XVYE2jJTp7",
  "key2": "5kUvVXzEYbtHS7ojXj2REKReeTyAfPMaYT1CBAJBUfPU65shJkhVmoCjc7dScHmzvznEuVK7vjWZo5MoK3fZA7bJ",
  "key3": "5BPeRVHb4jK7uxEbsMVwHg6dRjAs5Cx6WQXi3VQCYqqmWtP3H6cY4mNFbqhmP1QdBQEhRBEzx89Y72j8uHdwVViH",
  "key4": "UNKZwi5GqD9xHR4b5Pi3npvssNe1im419aJCPdwRurqpCcW8GRtr37Zxobpxpm5Y53Fv53TCgGUSAi2fXUp9PfH",
  "key5": "3YLRb5twAjdGkthsdcJukzSgijhUM1DqkGTZpJU3HpF94DHLZ1fop4ehWu3hafBnKWdWUjmGqkrQapfZKvy9tky6",
  "key6": "4MfqfAAeR3oLFo7iQo7FQLBRk6j4hjNJCSuERqMNUSxJ5w6fzqb4vSpcpRvtpEQahhce4iEyqCVh5oZDaUxXsU2s",
  "key7": "4euvK9qZ7wrzTGzvvAW4thP58DLrjKVaSNXFZgS7xXF6u5pRN3GMuBzm4yZEcTbBA54Fs6PBFUMpNyMihpEQMsFE",
  "key8": "4AtCciH5nbW3kepqZYvWx3iov6fndtMfJRfjeFgbuAfuPRsX8H9JtB8NXb94uJmtrpG7PpnJXR6oGnsusPBoTibk",
  "key9": "2XzsUXeC1AZAA7qFEyUGmHeuPqUnduNiN8FkDYxCSEAetXSVsvtw57ynireA5rFbxk41GLx7Cvpn22cVdDd3Ty2x",
  "key10": "W1txaBcQNEDB9mMyihToyuv5GU6ChHpqRUqFc5jXbPAXETU3fiWUc1bui9hvABy3WHm7aDBRTfyWAkbxZVHLwhR",
  "key11": "2CXsePQDVoXE6o5p1yfZoBD496TnXpXZWoGWzJZ5z9TBCGvRDeKhyRbkpDmdnvqCmnwdeT5JngzqQsUw4XKXAYs5",
  "key12": "46MDmZVK1GJqGX3aV95zSGmJKJUidvuFvnBc8h171Gwi7mqFxYnoEwxvEVL6JvzJyr1RFQevaWpJsX28dF7radN3",
  "key13": "5eJSVdKAHmc6uKd44HBu6LtkGmrcC1YFQw5nqbxLyYmDXPtKN8NuhwmUNSF1SEj8T33kNoThUUAZ7jnAAu3DhWFk",
  "key14": "5mo6HSRoiFByXidR5Sdnr8gjC8G1DAYvmQPgJzJvM29T5muWVqwq9y69CL4xD9t3f2qFMGTqP8Atn4oZacX8Jx8c",
  "key15": "47HGgmzSERChtbh2Tvssk52vSk6jABUA4UEF7W5qS8NBgJF7FJazfMaDmh1UXGQWHJUq7SSDGyBrVWFrQsqJcaEw",
  "key16": "4XjnKBdxi7jc6WMd7Lr4xGuVAchcKbrbqSns7TAGf4bYU6kHY3TX2TT2w8Z9q6kgTVvDUund9y2dL2Rqk5j8tbHD",
  "key17": "zkbawRqWbia8ZcPFTZQXsZeCPHnxJoz8Gd2LGcLeLpELRk793AtEYk3x3K23Sx2v3A7JcziBA1Xp7oELtzwZTY4",
  "key18": "6692mpWh4hK3RziNdBjcZksM685m2U3x1EHrGVatr764AsgMZGTwCWe81asX9waQUsRmPCEUayxvFngqHE2tAXv5",
  "key19": "3d9QgqCwsE7BkvXohExCp9dxBXMEARwnW3bvbjZ5mm3JoC63VMGKpYnY1STupby3tXpbLuuLguw2irUrkkBebbQf",
  "key20": "2hePiti2Wm2hcA6q5xvw3r8TAQqwiRfFhYKPmfFKV2gLdYenupqFhiaCgHt1ibJ5NSt5KjUVRoqHvKZiD1k5ZSpQ",
  "key21": "3RCRXQorYaTgLLAWgG3T359TzCQFZMAZCQKkaU2gBV9B2byNJY3GNCNXzkUpowrrPuiCCE3z9YAsbSSfUv3xQ4JG",
  "key22": "u71rpgDnsidRhEzj2pb8AD3QHAEHzqBN4hhp2DnhXVRQT9tPFn7JnLGD5h8au9VRvyaCk1GXGyGuFTgDL7mUBB1",
  "key23": "4Ly6UUTsgCVbpwFHEt4ewtpvubx6jgcXne4hZSZSAhuVoCJkQ8oJYwHm3UWHMrZNPgQQrfWgw3vg3PTkNsvqF6fu",
  "key24": "5nBeMNTn5fYzLu7ZjU3ibaACavD3kGd2K5CjMuMSN6ZYBTfPGRSr7gnxFCL6YAmx5oxQQXwCRVuprsMbxFmncXp6",
  "key25": "4F6iMeDrKCmz8QTLCmztULiYc5K8s1Au9zkKdBwTqtVybeVBFWcjhzrmNJcA92SBQYNDkezgJxtRqFmYhu1bFuuy",
  "key26": "5Qv3MgtFkUVYjbZbEoXxfzejJtD8R6hScbiooeFZQWScyCi3yZeysbWzKRoZEjJu3HM7eHcPdygatMdsmKaiuCzF",
  "key27": "2vtrd6ur47VNmZNp35P5fmfF56MWxofZYCfTGM1vhsg8EW6obo6PkvKS1wed95V1SqwAE7oLXd6eDc22TRKVAxrq",
  "key28": "33dvh6XPWr6HzRLoJhfk1SGGDM5gmP9s2iHZhMViQe9tGkjVH6CMH2oYzGQwESa5jba48FdN1UQ47pTXQwR3ckmF",
  "key29": "tW24VnDGt1sxqefBBM9kTbj2n1W8TCViqoy2AkpFg6wYSftH3Y1wogc5hJdqpB5KctZUVX9f4jRPbYoqmGz8yRG",
  "key30": "27sj1PDb6hXtDwHm4dJpMNpdFaahjwazSNnTsCeAQLuB5r5XRN8pUYksigfYADuKnittBo51zV9oDZurGwA5GXpV",
  "key31": "2PW18jxWPxR4wdwSUYmUR83ifmmRBDdqkumbdB9D9dtJD9MamAXjCAU8bpoSS1Jm3nMhA1bqYNvxSQQWus6pJBAk",
  "key32": "2BpCtnaVV4B5tyo53QMYhSuqQ7PBBRGSPvWgcFa9rdVbusxKhzLwafWqji8hdVHmXVtm2GcYhhg96P5VA7Ds2UyK",
  "key33": "2D1CyUuAGhyqZh4NzYy3jmjigE4SYKUwsRK38HdMk2hb4oSCcjDdKZAh99PxmiYv2WWozB1rpPbAEud4544PuRFs",
  "key34": "3V34bU6vUYgcsfh4oMLkjRwXeAjaphqDDuBnhTszXR48JbQ6tWHLfJUuyvPUS8sC7wyJzag2doCNCvhCkY3oFXEm",
  "key35": "25HQFUba1syJjcqFs46wGn78S8QotgEXBpKdwtEZEXETnD7JypJC3MgmVYBM4TsG3W2dHmDiBunQWttUFu7yZfKT",
  "key36": "4EkDFPPjhmZPJhT2X7bMtXNtoCmpiroULMBnyrDxK979LR5PVByVa7415KQEGQrJufNwFsGNSpeUzjwMgteDE2Jh",
  "key37": "4spbZcHnDCY4VVKBTwUcFMSPGm8WvQdXfZe4XPjMB7pJizzZrBMabUFsJJweWzkbJRY5tPqxEAfDBCJif7AvmJUP",
  "key38": "3eAjXHcRM6iKbLuuFNMpL8vCeR5r3xu5En4jQnEYscLZ4iHwYnkje1rsXFzM2Ec5WFZZggsceAPZ87VzzPgZZ5F9",
  "key39": "4Q2QqQcbhoQqaNfAj5p5vMHUAYfFbn6QSnF6e3XPiH8KYPaPoTH8eV4mJ6efLDzGKPeRnwceiGHD3KrveBs4T7Qt",
  "key40": "4fczzkWqx2LLcogrJEoNz3PezPvK3Z3f8kStena6cCMvfoN6MqVxvWVNyfqd8uaQXoAwbgzDFMSp3msGhVp8yrjv",
  "key41": "4Uj6r2urC2tJqckstiZKhi9Bq7GrfRyDPefWPexqev5kSRLbSYAUMmG68RoZe4qEFC4xcXNVSnJ4ots75vQpSexF",
  "key42": "4aBrVo5QAP5jJusY7LCsktucKCKNXVZGZ2GxmCqDibUFUq2NnrnFDPN54pBTJmPCpGfR9xLYmxYiyD8wkuPHJ7QS",
  "key43": "8eoCdhvuyPbK42YZ9n2THCM7h8dxLXToMpMhaPR6QCfRR3RgdTQcDLFJYsBtzpDbum3C69sKXaL7mM6KPZq9p7T",
  "key44": "2Kp7gQqE2Uv2jiEWnwsEQeFV8r5iPzz77npivJGySUawgEak5XWPKhd8h7bD66cm37Rmnso2GALJzZZQZLPY9YTG",
  "key45": "QHHARaoRgp9LnogxfVvVXYgqwFk6N4RY4yvnBiB6NRSdqkW272zStSuPDG8uRhogzEGnCGhGWAUAi8EvmWVHnLD",
  "key46": "zsEsqhia3dfjpg9uyr9hBrZrPtEV1NaqwtSACJjEytPm1LWxqEdHbUoc5prAxEjjUYtjH8ChRvG1RUPSkUKBkwo"
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
