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
    "3AbpzaLCUzqFkPP7yvLD4hVU3fKU4JXEdBL2Aukdq2wJb4fZVNPKTSEfBUiVZr7Zm6gC1sBaR45ZrVm2fuEB59FX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54yhBzp1hX9HTyRUByReYUEMyZQHaZUdSRHqiExKRRLxyC9prqf4ZendHfvDN5c8AU7J4V7LrYt38pM9bbmzCvFe",
  "key1": "2uZxwhBeG9hTwNXpPWhvD3J7aCs9Za1o4a7LxYJ6X3kMmmvAq6kTkkTdKeuSYKXkDcf2LJ8UevBDhAdBAdZV1h22",
  "key2": "EyF5hCUhSFtMLBYSh4sUJ8mtSpmsYLmW5McZJmJLvaquQMo7DP9Kd2fJWrDrJXmfQpttSgaw9pU5HmUxpkynhDX",
  "key3": "5oBZJrPukxYMypjpkVoQhCtUnADo9JB6zLruh3qZbCTBUHus5Faq2797NWq86tRmaM9EJQHSScFhBWeSM2u4PF5n",
  "key4": "67Z3XrHfG45v5cUD5SXq4j6V2s1khPPWXqQJ5S93anayPom1QuEM42Jy1P2vG54fy8wE6VCWs41AkJEpCt5CWiB",
  "key5": "5nzKnpe5e2Hfo3ULsGhNtDm1f3fK9vRoQXr2eNh4pSF9vZR78344Y8GG4C89SCQyoLc6QVHn53jF9v8Pw6ZYM3mv",
  "key6": "5uwxKAr4GbnXTzbeL7FVqBpXbK2fy5vjQSEvjLUDM2g6ysKS8aWdDRHthvLs5AsGzfiw2dVy3HxxX3zbinXFFMA8",
  "key7": "2MwGFCKNNA5D33eu4hXe25BpiTURJneBCjwRq98UzPAgRZL9rHzScLdnEeZMN3q66Mpn9YK8EKhSVFGFKWmZbPHL",
  "key8": "2TXmdXCC9W3szu2CtS3voWhH44tLWARn7YgCm1QhJeXkcWgvRuY81WXCMxf1iv6LC12f1cXBy57u5duoj1yyGyBc",
  "key9": "2raamYXp3uA7F9JiQQaN4fbq6AjYzUSrB4bXJjHe6Fc8sTs7x8eY5WwJYW24Bw4XRDrQ3z12oNgvPxheK7noEzfs",
  "key10": "3aRpLJmE4RqboDw6bm13rYziWXNjhrmfnGeRCnytLcHLdFhb9Z9ast9hnqAKz73eFKJM4x5V1ciT3u4wkG8Gaz29",
  "key11": "3GePstk1VcXZNmuZfaN5JDpFCN1ErzNh8h1iwUZtktyDv4ehLHaE1BwDd1SojmdCPTy178RgizXVy5mknLn2Aed8",
  "key12": "28bwh67gWcKAnnSKKxSzDR7rYhK1F8z8F5cy3dpRCwnZE1GfxBKBF1CvSKQGosU1BvWP9PYwCg7yb7Us1ZHdFkMH",
  "key13": "3N8B58PKiU4cciKWY1WnWF3Xi5HJjLNKEkJa3YY7kGtNqf2ADD4XbFvgodzYwQQNVJvTbWYQSs6wcLAg9kERrfaF",
  "key14": "aYDzXWJMMz2JiZNPEWED3nJgbefvuRkL3aDLhhm1XvgkUjd4fSAX1xW2JbN3WtfgH4y2D3N6Sb4mzHRfXjxHTAQ",
  "key15": "38aS3JU3XoxEoNJJZRbpyKsk45xRL5W52EnTmsMGZcBNhqWvgdNzNJ3UwwsSyGUPV6kK2sy3kzD4Mszh5WTfKweq",
  "key16": "5ZucxLeb4AeTYL8FeaHdrXMykW8kCKynFgmckUfswfiv2eNSWZNcRJu6uP71snRBHVCgFtS5Z3AhbMP9Bg4rKExP",
  "key17": "xj7ZP7eDR4mcWuAdUhNevFETxy9PLwdwDxbkdBH5ZQaMWeDw8nCrXFnvseXUQ4XGFAmPYcwM5TH23eciXdpieci",
  "key18": "2Mu531r1gvUX4s9937YZCZ4K8WySjmhBxJzHHY6MMzxGforGyA83jXDoMK6mdKuxkyi4j4oTGSF9iGmd1gTbE6d8",
  "key19": "32UMQJ4HHtqZtQiEJvhsMziipZ6PXCKZ92M8wb7uLkxeEDZAMMzGbzAj9Yp2V26UPnD9nchPv63EVDXtqKqeLWYw",
  "key20": "2GvJGe91xXVJy8xZVBpGFd6ZYKMwDVKu9T5aU9xts3op6d8wMT8wukW1DFgTm6Euh9N9Gmx53mzJaKauge7vhWwC",
  "key21": "3fuSLJSi7F4ijGtTa1cdThjZCaHmgKt9w1HNWRrgTFaUVfsnGNVaBCmvi4be3bjX7fDd6w6foTDpfTzwbRtkGxFC",
  "key22": "48UFv8gKVJQ7NGcXfc91t2FR2qVd7G1AhfBuL1Fa5q7bfxaMRge3QAajHJaDjLgCNt61N8wF1VNVSoohwjASXcnC",
  "key23": "4Y9p1Vfmp6asj2ATQA6vGprNLoCLbDb2o16oZZmB45oLuFsMTeA4W9Xbz2eBBgWgK2dan7cAgBXGGgFFNmUKGYR6",
  "key24": "kkuEmNFgZzmdQ6HwiNu3qmzpSnaCqQXxNPKXLYZuFwTeNfSDLCCGXKnU4faVWbZp649yXFR9jPruexrRf6qG5sg",
  "key25": "5RLDEMhgcPNRJhG5aXd6NT1MmzPQZNkxgMyUwqNCpPosBRBt9rqFq9FKjb1ngLAzQVoqVhGLdFy6YRcvrvg6kurK",
  "key26": "XMpbWcfKXzKGEQGqG4PVm1B6p5DMwtzyx7rhQpkZNPowfSr5ecMBsAuUE2yR7Rfj1ABNhUJqXuSoQC4ESDZ3Qay",
  "key27": "35h71y2C5H1DPo9PEMHhUfDw1Z6W8JurxB88uqtzXNL4PdB2Xogxjq9LimMrFfNgwdmC7Ecq5gtGGppjjirxTKJY",
  "key28": "5wtEqXisTvrNy2QArBG1BdLNRtjZV5T4rkBAdzsVZT98U3q4dxoc7cvAveFAW8UmJJphknDKCoQs9p67GJAPvjt9",
  "key29": "3sfobHArL3MhegdfwUS6Tjp5hT1at9uYXmCUdThKhngtErvqj1c5WiUsdKW9Zt9Npbwem9iPZhntuVRtMLfbWHMu",
  "key30": "2bQ4SkZAthEUyFK2Tp9dw1L4bKfkyi1WnBvmrcoodkGdhtLe1yuDuMPjDuGFWKHurw1kYvvGzPnV1e3psW6T8JVh",
  "key31": "4DTBBzW2CzLBJgkfxRH6Vu4K281fNmcPstpxNAQrdevffgtsb8SYVUgCZAWBMxZ1Btab6AEC5e5mZLRo5SZJXZBD",
  "key32": "pFoVSvwZF9zEPGo6qdXA5fdVZCpFWyehy1eMRMnK7pkFndzK299xKzKnSGnN4nkZH3nTMBVYH7zittgyEAtw2Pe",
  "key33": "4MyjRfA2BxZZYB2PfVw9NPS8R1EzftJn5DPvyK9HQk3Ca44TC3vRbJxELQ1sdzDsq2Xqc8avbLfazmSpFYR5KVK9",
  "key34": "5ZrCmS8vGzT2S48XuzRwY9Ns6UJbPDipr6PKCsTityg7m9uTTt3AA44q154XnpFHW6GvDiu4yd1QadvYhHUxGTXV",
  "key35": "BzWodXqftPjC3LVN5BDLTuZ5q7JrZ1iyJzyAm7ozNMxhXkbtu7aZqynUbCGewj61urBYA3kaDA5jeAMkQ12iBjb",
  "key36": "5bzqkUzwAaW8QXJoF5u2fHHw3xHmKea9uQ8Qsa7nhLGfSi4EXdvv35E2uJPzBumx99VEtCSuQRY4JA8n8LtUX2Cg",
  "key37": "4eJUfnEdjegBzvECBDoM8YETKG337YsexgZdUAadjBvrr5TNJuDAS9dHL4s56neeG25L9fS8cCkTXFjUb9sWUEdZ",
  "key38": "34aeAHVdZMgC4PaXgrSXECK4EvvtGEgK4uUb7JwYpdhopizx4yrBGCgaB2sKFMvS3UzSNU8utd1YcrKdQigVkYgT",
  "key39": "y1SmThZA5vjkJsgTNg8uqnumZdhrA82o2PtYsD3fmNyUEa4C4QH5ouJG7bT24rDpkyZkCP7gmVgwEH1NNVhva7t",
  "key40": "3Y8uXrU4YfTJCWCKcPd16QvPpqpZS4sfeS8YbjacXxL7NbKQugzFYveqQ9WSPJ8XhDJXhFS2iKmCCwxsQLfCk6RW",
  "key41": "5RwbTvoN73gNZ7AUk98xmrnnNzkuyHLLDEy3cmF87bDfsbT3iFbY1fVaCT1HC9NWTN9C338MFzpe7N4Dfjmyvors",
  "key42": "2wa8XXQAW3hUMPVCvZoX2pXCh63WySYihVCAeaTkhqQqMEB5Ai4meWFf6QKbYLjq8np7yrr1ak5HtbbRCsvDdmcD",
  "key43": "2bTibkPgXAMhoxCH8pV5g3vjcbQN9voZCKbTTcGs2Qab9zGMUEYPaDf4JnrJQzDS8RmKV4KdkBye4ut9LwE5QE9J",
  "key44": "eVR8ZSZmZrTPCq4jRh8fBbk1vGkps6pLpr1EFYPFYfaxPQHj2BTHkUnAYBYgWYbimor38m1L9PdKvPDL1hmpmn5"
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
