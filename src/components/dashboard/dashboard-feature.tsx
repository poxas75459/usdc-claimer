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
    "4kyuBDRpcYxWmsAufQ3WNVApDMoAdUjHXG6fDrCnkw1T9A7ADazQRdjVxTPCdZ8ZjaiaHrd1NFB84fspCyGfRZ2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UicM7JBxjM8QiEEvKdCYnsYkStjb3djUwedk32GAKZbbXvGhz7eY66jTyzhTsRKh43FYP8YrHZQperJTVNnVaW1",
  "key1": "qLd57suSPrKwXnRNLBTPtrY3R1y1SVkhnymYUBrhcQjWX24fnocK4aCj1mXmroL465KrwzMTRFJ1qyCuCviGRNz",
  "key2": "2nWQNt52u8ru2W2dVx9PY4VcJDtrfiAWmFyKtAc8wjGkN2pc2ysnRbrPp75swTgbd9JSDDru9Uqg3Nn2QG56r1FA",
  "key3": "2koD8d4fSQVuUg1gdYCyACq1zRvdW4SCjY932zcuVpzA1ua9C1fu649h3qbtP2buyNZX7MxMiPVgJCrdcrPm5k1P",
  "key4": "2qDaxtJtqCj1CtscPbYNkbCenYegUCLkEFcptiSTAPJC534q7iRjzTQ3Tj743WR68SGPcP5k5qJcKS69ph9JwbEN",
  "key5": "5sW1LqbzaKmY3o7eW6vkibiBDRxvWucMQdQzC7bXSa7qL8yWUwm4CC28hghVuWj6FyuJQtx8mS81RzF6UittxByr",
  "key6": "2XGwBvhEk9ymkrCqxuB9sPrY32Vd7zTJyy3HWfX5S2GzK6tn1LpsSiZBXh5uzPmGhVdHETg4t4pKHYLPwAMBVKn9",
  "key7": "2QK9FTYcq7aj32CEQgXmhKqcBvaoQJgnE5BofH2SbimVDmXDEqD999ioc2ANiYpTSaa6GeCXj2V8f4zkM2VCgzrj",
  "key8": "2k2J3NMXuWD7NBmgL3En2XgXEoKUy9Ba6GmM46FKnEY5VViYTAJPQVFkFkEkkENiUyyaTEFpUfT8vw4YZX5EbLJi",
  "key9": "38e7Qdq54Lqjv4dQgBkUcJpkQ88514qPy7zAmfrigrhNpHuYciBKB7mMpckM8VvzpV2fZ3vDKugQqSKkDp3wX8NJ",
  "key10": "5MYYwqQEbvXntqjpcPgMpFPBBUdzFCqV47aHV9PbfyVCd2ycjWm8JNZBCN1RGfFG7NYfZMreyiiTZTHb1Cj6kvVy",
  "key11": "4Htyh7YveRx7BpaLJK9wq6MWgR5Z5NK37pSSypgjDLSkDNttfdtwmGADLK7DwsYqox2HewqTRschcKcb9gqwNEP2",
  "key12": "EehNFKAFRdeZ9BDEGsR9sL3TBSB1sLsDKvQ8qzsiSRyVsmFcNHWcPtPEJ3tGwdVJ2JrH1s2LLBUnBQo3ewufAzg",
  "key13": "3JinkjZRerBnzTSRmB5gDX3TG9sarjB2NDFHEEhPTN1DonewsYMbV7A8tRciJiWpjWSFyqbTnbXeQNz5Y9S65i5X",
  "key14": "4mCDtqBvM3AfMQAhMDRaEPkJDfADzzoTU6zU9STvxkqdMHQfGt1GS2WMYqWtiQZDktYmFN42NMmNifcp47gZeYQc",
  "key15": "2z8q4wgAkkxTKptGgcVztqp7hJNTzZPXYQFSvKzfdgNxrgjfsEWWvmZcB2mbSSyBSwcTXC1Vod2cZULa1yGDTUQJ",
  "key16": "1v3jC8nEfpXVqRdwtnpYQ3oKifPWSW3izCik2MYuvDQXTxa4jvedyukUsUfFXf5VxtFhn8j92KUuxgZ2a82h9hV",
  "key17": "5ocoqhkmhKcGjdbLwgyXe5c5XTzqPqqrsEc7475Nrtyg5TgZYJJxWKoxGmV9ExhhHYuRg2NuznMmMxrt9QD8UBQ4",
  "key18": "4LP3SPnbJ1McN4WYchcu8tk6hLjYF6g897cmp3jwfcq66SsKr51qcmMhku6gSQmUoja4tcFnXrsGMDX4CBw3tci1",
  "key19": "9rmpiHBgvcDKoM8aSmfXLq6ra7hWFoSWS7iXnHdh7mSkYvEXqhZGcJ9y3RRMMUKHz4QFdHrxFo6q6sGyBtJH55T",
  "key20": "5FTE3hSW1UVgNP9znjzRXzkUgAx5PyEWN2gAWvuTfh5avTfEykbHRAQnVZvMSusw4snPFsbK1woDqqdPNDdWNoiE",
  "key21": "2AqrtrbXy2fnv9YofqcrVqrPC7JnVEKkgX4purTx553Kow8vGndxRpsEZfxuT41vt3PZwHprsbTQAHNMDyRR1KGR",
  "key22": "2Jaepz4xFZDhUrNvXMM62JdXPbmLEp1nvJu5yVfPsiZfNzwsuzuP3StYjgzzdhQ9594Sv9PaC2dGDPnqabV86Bg6",
  "key23": "2sVp8syRH45qnCe9W75QpMoyt4Q4iGEKtwSXM8FGNQUyPQx6opWQjzjWGjipzJ4AeFQUTEPVgGNwJg7HARwvUoiS",
  "key24": "Vg7L6fdMcrsk7i4WyDF81LhXy4zbfdr79Cr1HRvdpY6qDNgm9zUjmAJwVCSFjQCRo7acjrMYLg7eqmf9sGD9d3m",
  "key25": "4ANgAan6cjVNsWUBfkjXaAqohXBR5U9mWETupPvaxApKTWF3m17xWrpsQt1fpvYeB2MMq4KDDs64yswC3fkG9a15",
  "key26": "2oWfcDT6PGFinv55Uje8KTSFuw3uMD5iYzF4hwBNwgws9x8sqQM1SMYrsEnX5BarsjuUkWr1Knvyp9X1BwVB8Saf",
  "key27": "3MBjAQrSr1bEYq49jGCvDW6whk2BrcB2hyBkApT9zDgV1WzfDrkisFM8KtgCMwuTSrAa4LhLN5rVRtNSxpHrFJzQ",
  "key28": "3qehgbWKR5USWSkieVzHU6Z8rQwj1JobRxANixmpjGEJ9WqZwf9QC7n2n2LQ6AVUzBkFt1sWiULBqg56LiJ2ibE7",
  "key29": "iTiaxwgDKjy7A2Uku3ekor7NpKZodAnRQquQwMmJGLJKLyF91GZzhjV75TvUVSm26ZURLeVAM4jhq2YC17QxKjq",
  "key30": "2tUyWW8bgoKJBpBz5SWYWECM4z3UCtKDUKQwg8TcauueU8bY6CzTxF6GtTQXk7F6K4f4YAy9EDpLgyqU3QHLz1Ux",
  "key31": "5jJJNjbrYhjrujTRqZJ23f9vgw3qwBf21LabkYvktdrf4yKGx5fsX53L9rBz3o3K8jpiN4fDcsRLV7TaVaXmCcME",
  "key32": "9WTFpyeRNnKXnfYeWmaDPubPak3CCCS66ZoTBGEjyEDFMmKF16RyDEBpZFaC9x8pNseY8en3xjif4yqCEJ71bxm",
  "key33": "5hW26rsZGJqToJ4Vsgkq4bs8Exkz92hCwuT2LAzyVr4UzRNSP8sknwhjMc47EacrTYvQEGZc6i2derDf85u7o2Uu",
  "key34": "cnbtdjLZuNmAfDpJimUT19taANC9Zg7GABe3yEc4274qcy8h11YoF5e7sXqJWZ7jpNb2419Kx8SYLkjZUyhn7xS",
  "key35": "2cRVXHQG76dHCwg4j1iCyHhZTbNwArHjcBRhtgyXLM2kvwuffxbUVkCinw1fkBP191cyvkAf5QkpPp6AcLp6XrUk",
  "key36": "4HRuo7qzybdMjoTaTjbfWrxVimuNPF1sJPow6CSff4ihQLa1L2HXLE54raotj3GEVoxEBgMU19JzrxdKfCcpWu4o",
  "key37": "2NXUUJh4UtZ8fPAmYSgbS9uX66h1TQ6DEY9shcxnttXBn31uk2Ture3n2aNtL1ZQ3FLfm6jRQNFjMuRz87QgZJrS",
  "key38": "3hiBznY1wWLuKca12kaCukA2DP6xc3LiNH3dh354yM2PwGF9zTgZHxRXw4G9kkKxXqbww6i8L3tUFML6DpE6bNA5",
  "key39": "3vEPMBPq3rA99op5QK4mcquPWdLDq8Wf9EqrCvWVwNKNLf6BEpSUwvTMu8irsZRaqEeVPEwAN5urbytuUu2cMV6t",
  "key40": "355pKVmp8pBTrJiUwgvsQQJD4QgQvqsodB2URmcYgeUrMy1XZ17xhjhJkaGGNfsFVR4Shxniuf2BG1e777QBncqH",
  "key41": "4LjgRx4nB72WXEEwyyJtHcdhfeMT1kBEYacMPCJGzEeVTepFfjtWfPKxkbW7sNdVok3g4dUxe6tQvxzL7nrJphdX",
  "key42": "4PoRenb72zaNfw4vFCLtxS7aFhKoMcTQs1Fc5SscjQFcyNpMHyMcoKKyes8Q5PREvLoXWd5gUAAboKEh9tAbNQaP",
  "key43": "4zAQwqk9VeyuYS4cpoNzGcH94Uix5mQ7vAgigpJg32pdXkxZGoF6BAJWuJ2Znqihq4wWtV12BTkG7ScfitiL4uUP",
  "key44": "3wRfrpKTBwRX4LTFgbTmdPuD8Q4iCapzLojQBi1zT4uZcL5D1ESVDy2azrgCKQYcBaqAtihbKAVPyhYQXygVrkN2",
  "key45": "57JepnGYKu8SJhTLpAoAUdxrtJVytqntyENv9i7fDdjuJVGqECCmZRPqRN6yrnvQWR6e397E6KQB1zJUmsbr92Bx"
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
