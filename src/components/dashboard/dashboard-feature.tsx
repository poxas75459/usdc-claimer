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
    "J1GNMNyxiC3vFAJwHGWnTCNtuo6GX13BvKBiyVcUc9DB9zpReH7C72oSHwQYgh3717gRe6rHTZCoL6Z24HtHLgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DwUYXG6mPdeG5Q3tKEUuiaJJJa9Rj3SqMziuB2bcL9rwduWYWce5TfgsADKGiifgcEch5NEr3xqa3XaCVSxpVj",
  "key1": "23HoC3N15XV6viGyghrt7JiaFqeYcSVQtBQy5LK3NB2GbnUkEQ7WYcLZMypJpndpyQpz7cgjKAnPezTbH71eqGka",
  "key2": "2HK9BM17tC9eRqiYA1PNuAtETdca3RyiTnyS2zjcFEvK2q5hHrM4qtKMJwSD7X1Yn2dWgDarNMQbdxXVLbdAng6R",
  "key3": "91miBjAb4SWNMVhUhVu3Ye2HJvChSFoytYs3mi3pFEWE3t1TuE4hz654H6sy5WLNjrPpaDxzwiLkxdsTatFa24k",
  "key4": "4meXN9PWuimtE33TAcYQic3eG82WBXgKcQNdP5q5TTkXm5JzmNTxUwusWSqRp3M8dXdzb4NL6RCjz2UnEXjTT9iL",
  "key5": "2rM3arWNbd4Jkeqozt2fnFW6ozcDHkHW7dyH9e626sRQn6noMd5E8PQe7bVcZcU8m7kFdSwHCLu4tLL4HS1PNKk1",
  "key6": "21shJaNjDryXRQHjks2vCCX3dCikiBCR619LVyBByVjUtGZEADKfUtexF3913LsVGEhRPd7XjmpwxNS3dupHMW7r",
  "key7": "2LJPtLwfEGHvPXAvQTxpBiJ1BV9182VHksXqxrECFNtKDNuTuBkxkfo5gKkuKutwY1kodABZ2WaiM2AfL9AiT2Xo",
  "key8": "4JiCMmfe7xa9ziidDWXtqtAg3PfE2JKodcxaGPWurNeJpcDcdMr8muihR3YfRCwZnz49PHqw4yXAU6S4EqC5H2E9",
  "key9": "28fySZEV6VFiLruygKsNRvQh6ZdpWEozJq9gU3vCDXYCDEM2iZJpedK6oyz4uKdSWzdzmZEM9c8FrrgMNjbEF9py",
  "key10": "5rVs5Md4HDiAJ5upjam7soxpKahVcK8RFLNAJN4obwRcB4C5A2D5pKh2HL5kxEjXJQBgNQadxCUqrt62qaQXyGNN",
  "key11": "4DCthhDKkYPSkTPpgQqW8AFQQzgDB359Tehi9XwE4TFP98a9xasexkXZxsQ6ByM31qMhMef5FYZBjbwJRQFDn7Xm",
  "key12": "2mUHKxDwwUQ3qyWnoiBjowLaR5Mw4534appi2behKXFFM2M2KUhHEMtkyxcKUgiRTNJ6sjahSmHD8idzQVjPKe4M",
  "key13": "AuQbVENFRynbVrp3fHwXd1wq4n8ZhpjuSoBBsDt1X2QKxeLHy3VxpmLCAepkeWRZvvHWVJRnszhkUW5WLewM9Yt",
  "key14": "5BMg6TqB6Fevw1YMEVDmf6YbCQGqXUPGAhCdX7xPBGKXAVLdewzDQrr4Dy4ttWXjV6RvNQ7a3xevX53gKKWQgYQy",
  "key15": "5GyDK5AUZUmJXNom9mFcngb71ULQcHoH3umz49LqXNFZV47Txd9ZcqhSbZMsqSZJQNoFLifBkUcTwZdkifW8dCsu",
  "key16": "35fec8nad4S2NZ2NgpPuxD4ehxHcviXPuyfzpueEYbstbid7Xw4WhYxdBNBDRyEsDLTcZwZgdKh6yoei2ta8Jopy",
  "key17": "64EVUerE9z6B3vq4FYrvSDi1VGb4wVaU7tdzdcf8nBJyUZXqTMu3wqPSqDSsaMcY2XxuesJrj8HuiGw7qTSBH79i",
  "key18": "4fZXfujYFAWCUqjz3tnypeeNd6eDAqQ2xDJJ5hJePD1DY8A4rUtm6dbqL7byGR7V3Vcdc99xh97bY3eURtCp98LK",
  "key19": "2JWBckbb8nWg4xooCGCLHQGckkT5VRvKjeCjWtxwKtuD4oidn7KVG9WseDmcPbSTH6Yg9P91s4eoVdg2TgyDN5VC",
  "key20": "3R3aYaZPNLQXao82h5DaSsU7armUyePptEsc2Rs9fdgMjmwNNPFPZsLUdv4HDPzzfja7Ad95siSC7qsxCozeoAKp",
  "key21": "6j2n5MR4X6HtQm8AHrkeUyn2F76siXXpAzCtLwzDUvjDYT9Z12nXDwpYPMm2LcCFszDxZMCwx5nSRn5F7MGYp4d",
  "key22": "2EacSwVtYwb6GKczgJHXEGqupjCQDHqqYDXQ5KrxFiAeBJAw7vDBkS3ezuTyeUSPEPGjiwGMggSnQTE9u62nG71P",
  "key23": "61WCUgBWUtqDT8tT7VoPcyXHWyCdWsXvmh2mn8sc1NpEheJS6DpG6CfLmHvN4D6RqiiqHmsj7hDfV7TjA8hnbDa2",
  "key24": "3gRaowtkUhBHKywo6wViVR3f8ugL4VVFAWfP98bV2Vp1YgxAK9356YjwH4D2haEqzmU3y4W923XEBSstLe2giouM",
  "key25": "4ZMwGd6HUw39xiVxmZrT4D1LCkWC2rLgfnUZfUfMoW86TvWpfyLkNASymfVVHHXgUPZmuwXKmJ4HaY3ffUYkboaC",
  "key26": "4LdiuADU4dbi7yuoYiCMq3TPUQFLAq4sJHKKwAKme9ePhrWhwzWiweYgtgE85HSRe7VrhiPZcWY6aeyeaW1mwxqN",
  "key27": "3QbwhdVspp2w12ZvcmNrU6hVcYKRsS9v87Fvf6GYxfqm4FyBzQ8d8nD9TN9Foj6RdsPdWhQpZTdDeCswSm1JuLBb",
  "key28": "3WrzXYEWPgz6BMmX62kM8RdGudQj2WoZbzSUjXQmo3ynJ7vtcWdsrZRX7fJm2ALUz7c2binWR1aRULXAy4rqCxTZ",
  "key29": "3PJKkitfGLJUzHKLAoXcSuqEHb3hzQ2pWH4gtcc5y2XEmCTRPFP573tWGDiFKND7Q3DSKfpGCF3Xt56cRnuUc4fH",
  "key30": "Smuv3j9sf1gdqXG7HxGxA2P4HLJBsjeGBYToUF734XYZQvdsB4j4zLuJFusKJuzpP1DUTeieWUiXqzRoYZqoVpa",
  "key31": "4CtBTTHvzGMcHbXSQjqfH6ebEkKeA857PaeyVr78KGDDKRGRu4JYCswEXH7rkdvhn5b8QmeeLkJ68s3rMMEWLDmg",
  "key32": "5MQK16m1GuHwXWf6gufvcdoMh8h21v3h6tA9sG6RsyHxtLy7Uh4e4HQgEUbchJ8cZVoDUv6WBuvMh82auZQRjmLx",
  "key33": "4eMtS5Zb3Rf17Pzrk8VtuVuohLn5482eBz6eyi9RKfwKVoLU3HiJkiKiPgWaEQr5g4SbZz5xBiNbzf3GrpyAmmo4",
  "key34": "521iZNpyttpwQsoyCTtSuwQUcmeteiRbpog6iJqPCL5ipQL3h7uDzWP4obTtrZf9daa2SSxzFyL94jS3QngzuY85",
  "key35": "AaXf5zWS9TcJpD3ApAMjZchtxJhDy63BpaTQpeHqFs9AhXTYTozX69kbU8GU7fLewjps9u6ZNoTrSifgSNP8y6R",
  "key36": "4RUhCCnc3ZNNRPYVQwQQedyZRpG5tAtH6BWkKbrZS1F69tQPCCJby46ScQ439iVtPJ4GuCfgqGbrEM8NWqDtNWGA",
  "key37": "qPGFKBuxb7vK763r1jLa5CevCMiukkdiktQEtn3Q293UA7EWCZg8hSssBGvghpdSCMvNjvi2LB72AYLo1TNyTcV",
  "key38": "4ri1f6vupGAXav1qV7iZVD1RrQRkMsMeQA6LFiVBQfTuUt8oUcTvEx4zsQadDYyz25dVwsYmrWXo4q1mARwCyBmi",
  "key39": "4CodjXGaC3Pt1J8FADw8mXPBsh3D6zfkUn8zL88CqcNkLgPLYsJN1HLbzGerPRBNujXfGX8ZcQiY8oZ4Jsj8ZgWX",
  "key40": "4NfehDzyAiMiER7Jbyep59AoQd4UWu8bq3E1cnWwaLpbHnaJ2tpoDNXEDuanECZavwaj71apUTSxgzWXvq4ta3RG",
  "key41": "Mgf7U1PPZkhrhuxv5TqYpVGDA3osFQgdtKrzALZZDGLHp91RPJZkEwqdNbriJ9zXdk7orHRxeEjJZHuGoixXCto",
  "key42": "343hjKCqmV8jfeGiZttq3jeRm1ss2A8ADnWRWrYX3HdZdSXPucETFGmN9TJAHCZqo5jL2D7mBvurK1yXwv2nMtxK",
  "key43": "21oqmZHxgpWznFKsvKVBrUsgU7MGYzSTRhYqEAa5ftc6jN4SHYXtuNb86BsJuS2iPRSXKzFk6vW8dKFtQRBJPLgM",
  "key44": "3vMoaD6tG2LZUdfp7QhyHMn6XrvDbpF947hHkPgRYXwjNaFrLi5rUNZsqohaMTos3QATrozCfkHTPozeyd7i4DtG",
  "key45": "2YgmhX1aRsXrpEcUWdavYnGfsd3UcyemL7hDophR6pkTfZu4agnCKtvBPkaza5uGhYXtMiukH4d7tQeN5xzrjjrj"
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
