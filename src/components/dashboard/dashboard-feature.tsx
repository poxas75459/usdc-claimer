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
    "3xmYVZxjRzNuvLMemiWbZBhzL2ppGhEaHPTXsguSSZ96K54NKMD3nEJBeSQxf121438JA3BRsWLTDFVWKdVWBoiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HpYLSdchikW6dPzX7rTK4uhGZQdmZzBcsmXe4ttfRnyVRAn4jVdek8havkPiC2u5NHcUSGbYj9kSNKqTk8rkbzb",
  "key1": "5xpKMdbwJYd88qdhXTEwJsz5SZQrU16wRkipg3hh63x8qZo6FPsXrmiYZ1qrMEefafT9DYLMZ9vpcs3ExDp8uk6F",
  "key2": "4GE1cCTrKS16gnMeEtrXZr4gD6KBx1Nvn5QJ8nufetKVFxbKm1e1VBjEiCoBjAp8T8sc6eBo2aEh4jDREmb6KdbE",
  "key3": "3fXwt9vdSPA6p6Ysp6wfJe1Ujf13EiVTrC8nxvoDPNsCfEkiXanisuZBPTEeLzkR42Aia1dKoDVbx5g9UkK1QHSY",
  "key4": "3r4it3ALUCPxdEyuETbUoDnxDe9eJat53pq1PscNRcmN4uAFexi1sVdg4sfMMg6pM38yutb64xJosEqp3ttxeMii",
  "key5": "5vNbM3KzA9y4fkkF9U5U3SK48VmgkdFSUM4SoxZyTpmA485AwLsZVxTTrVEH5z3R57D52jTHbwV4Vsv9vYHLenLG",
  "key6": "4hKhoJsNWHGv7Qg5aqtRTNCfLqQwQNyCgXy2ZH7CFLMCot13VPYszScN8HJ1r1jSfiDrAS8tHXm5HBZnSfQ9hr9B",
  "key7": "byF8X5CEtSSGFV8SQZjKxdDPjve8GP6rmWSTUGz4p8zuDJQ72oLDYTZ26RveqTrShkL16o6eQrNPXEpsf7AiTQN",
  "key8": "2V2jHNzYWPcjFnt8moiSZtJ7UUg8xXMwnDKoTv2EY9hF8GZbwvuTbkttwUvBPumvHvNuY63BgmMngdsjgzYYNoft",
  "key9": "4KscVP7igcQkfysmQrte2obcfDzXzM5neSeaa1VNzeYDtVNzKhGAiYGdyywZ4ay8d8znNmEYxLXVsYSrABh1Gvph",
  "key10": "5XTtuGkVzr3VtLCufnwNoSGgyrFm5NCReLxaco1T2jkTihJzFGxqU9TSgCZgVKutCMDPLKdLyQJQzpvVo8mtnxZm",
  "key11": "4VMZ8KSK48AkEeg9pdvJMycxytogJa92xAzdUDH6R3UqwthaS5eAYUso152bpRCe8ahSgdAeFuX7K36Aw5n5ZAJB",
  "key12": "4BbLFYPow9GFd9ebESBt55DzmApokgFGZ8RVoGqJE6Gw3ZteZjFKpvxApVEZBkgL1r3rhnkcCRyxg4GggqbNTc2b",
  "key13": "3ucjxFm21wp9avCYngQKWzUv2hsLb25a2VVth2m57sqNF5pJwDaPBvfnEKj2GRX4zFCbKyfzKbvK72Qc1UMTfjbB",
  "key14": "4wjd8HBeb2wnsTvePcWEQ68xiazhBCcR54cQ1ujEJrUGFv7nKLfyWTJ6t3qv7dgeS2z4JmshZpBfsuhsfJoofa9X",
  "key15": "x9P5U77isERoGrHTAir6SYErma5oZM4HsWeHYaE2CYZLxykHuQPsg9Uzf1WNvyQNBLbXQDrr3Eu4YBKa78k7PA5",
  "key16": "cg7aKqNPgkiPb2MpBSntfqMNkY3i8cKdqFgp27cSAL1Dt9QmhwG2qSZxTD3gqi999WgSANhf8TvDkBDm6dcjD1Q",
  "key17": "SSW8Pf3Wf11CJ4z17EefvE1hHfVdwXMW1o1cWdYCg6P547ncHemHMbwNbe3TQq1KVHQ3QbpYuYnbM4phpAq4xFz",
  "key18": "5DvHD2GnXRz9yQuZjJ3DGGG78XwHhy28SKnXtcyFHygF7Ck5xfT2t6rqYL2K9VThGkc71PaeKrMdUaGUUSAVbGo",
  "key19": "2WevvZr2b7DtYTxWqEygyLE8XUxpPTPyvJra7mEKXCqe1jcYdzkNfwXEczhRrTzAhyf5cgXNLjkuX8axaQXc4c4L",
  "key20": "2uxfQLHhn7as77E9wviGJwPLQMqdAbcDGn1EaFQn9SJZKRqx8BgPcgdEzNGjFG4e7T1Zzdkjsm8fiRahc2XntAgf",
  "key21": "2o5xaDYeBt2xtgDT6WjtKNYArhFFF3fmnjoiDFsqtwXpDdEiGPbVrpxfCWaqjzUTdsS1aVLVNUGPaJMaAxsu37w1",
  "key22": "2wiJo9tf18SV8SV59QMwwrMnP8bF9MUzsx5c6pDSFRz72DMpJj7x3H32MtRv7s2LGnRQhdKTxgpibVTxjadNBzK7",
  "key23": "2NNE2UZJLp3pWZnuCqf6w1zVYeyVSEB3PmQ9kSQ8Mpdd3rML61dicAyENzk3KR9Gjca5VsbaG4MZHffFQeb3k9FB",
  "key24": "2vAZ7A1VC5QhoR8FUXPXEXDQoXWdzQ8Tuh9NK36F5AmNwuLrXGedRZW4RWS1bnUqqybB9AzVf2uUZKZPwU9AnhtM",
  "key25": "26kXxHYEx54e3mbduqkuQ3fsc6UpKjbwpoRLH9tgZkM3aVsdfVgJFnpUyayiJbcf5iQDyE3HFL1MrG3DXjZSNDFJ",
  "key26": "45PgowMMgh51LVozMM8Aac4Ju6sdTRggXadintaxT3XFbfbxyyMJLhWjiyjg9eB5VZfPW4qLVGEYi4mv1vtkPBLC",
  "key27": "3RBETzbb5LEd23oTf1AAacuH5oVjsjoiepJuFHn65KtZJvwxDzB454Qjx7EGN7zRVFMu1KEXRxQzPVDYck5KexRr",
  "key28": "33FD1k6Bxn8mYxWpQws539ek6oFmYTpeqXzoF5BzWj2Jx2i8udyLq1sWYDAGGWHPN9GVG45gy6TYKd7GKaBt2UjT",
  "key29": "Ey5BLkdfhgBuFywjQZwWfravHJuVSWqdTB88u76Uj6TcsjvR7dAVb7H3xpgb9MoRDoNWMz6wD5D58qjC1gNmbAQ",
  "key30": "4nrVg8sX7FK5f39nmT5SSDoGHq9dBhaNSUrQBgjseapa7TNPLBz6Anqok5AzMTsYAKUYbvWmXphFtSFTGPYHuVJT",
  "key31": "2SdqkwPKkVuQS8BpoELnsMBN7fqr2JUWbeuQVduDLY9A61QHd6rUe6MxxYrwMH2y2GWA6mZbdJirw51a4WBj5qza",
  "key32": "2ohGf9bMRoE8mGtMV37DqQQMxvDfts5J7zXziMom63FRGRGbFPXu4gmsMAZmaqsqk4PrEsbFcQ3d1wZ6R4BY6KKC",
  "key33": "2NTpkt2CeBfLb968WDa42WaRtmkSQxdhi7Hdnq1wEzY99nJxbYr5DjQHe4Qk6fAAGzzi5K4P8JzjcGWuLNBYzn23",
  "key34": "461hKktuEhfX2ntNwKDhQun7cGh1y2PiuotxMD4nFQuVqmerbZKfqGysPH4LxKNyimt9jShCLVYoqbHpvtNyEXR5",
  "key35": "Qr39GUtV3qT4qYdRn2veEVFu9jBt4jRqjKAYh4z5NNdLHGh2CG7FsWg7qsDdcsA4PmYBASYMJUE838Q9gHFcdbn"
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
