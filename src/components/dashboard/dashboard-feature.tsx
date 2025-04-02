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
    "5ztcUqBitGhEk3ckr4wV4UjmFZ9STvp1GwBxtr71L65nAuYekVAf7SrzZHwjq5p5ZYMDfj6LddbivdjTcvm3csym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7cgiEcdLRiWirmQEzZWF2239k1ipyymUjHN63349yrefsVqLL3VeB9QoE6eyKijyzkLMBtZBhYdhv28RStm5u4W",
  "key1": "3XiwxohFBF6NPtDU8QHTFeieRwaySdtFL1L7NkYKuuHr9BRiNzSmmDHan8juMjxrL35zCoc9GDMkyvWvvtFuRQ1L",
  "key2": "6zdw4NBVtEaZciHsMaVye4a1jAeGdtkVWXqYawu6pq1ALmEBVwfBEVajiG46KZ9JUm2Kp7bvSMyv3Sk2dYpAAAD",
  "key3": "5tmhQNP56LwmAWKoQRHep6eRyjN8k9knXziUpKvW4GwfHCpeCp7KLoHdy8bMwtT7rP5HD1Bz7jLa6xPJhb9hpf1H",
  "key4": "2FxP175eHD6PZkqJdUgMKmYLjfVs8o54313V357DbFE8i27uuvEm8yexowWBvQXP21WvLkJYfJLPbcsAyVWY72yG",
  "key5": "2zxVfNsVqgNGcNQycSXjQnQotCB6GsfG2iFsgaKtw3W1MgXCtFypzcbYsxU8iM3Lgy2h2Qu3yqFKZXYCQ2fvxWVz",
  "key6": "4tLCXFaKzTXQxu7VCT36z455EfLRvaUrDMpxMwkZGxBWTNLv1VDp4zh1RJiVzNvsnFcie1siAtfgcMMBovuFkXKG",
  "key7": "467yLhSjrMDpDNF1NGPPKUxgv2c7nDvgcU7mFhFnfcSLe9eNNnPASVH87GuUuB3pSUqeAvZNMR2d2jGxtJ2275Q7",
  "key8": "5t6mGoiJfpuWkPV7t4Y5RnWobKBHaEud3VLPGjCFFvL7f5CCSDHVHK4Np8jdS9tZYAw3muqxcAZrnJ3ebQS4Qzkg",
  "key9": "4cCiTrfaSCKBjH3xVmbSygn9CLyRM7hn1cRE8aazBqQ5YFuvuLjGsbw2PBn7hE2fMRBr2M9Cp1wzYArUAvhkJR2Y",
  "key10": "5vUk7chP2CF1TsEmrm4eqjteigsvDXruayk96gpLmyDubdxdwJ7Hx7uwr93tt7WbYbVGLVja1ifJQhHYdyR68tSz",
  "key11": "bDyVqUZ4z6WoXPgtdnqqy1nHEMxehF4uyXeQUZev6Mm7MhZ3vhHmaFeSv56DNUSkGjp56JfGEcxnsehgCkQN9Xv",
  "key12": "5K1W8u6dZqiM6x3ejsNVMeyk2KTf23vQurhW2EAwmUFfoBN2HiiwUexAMgZyvZVdvmsMm7qkPvSxFHexB3cwjfWD",
  "key13": "3H4MNoSJ5vY79RRg2CEdCu7AfabUpXodSeuhLq1S6G3DxDrferWnxorb3TZWYATYjFuLjjMdUfqayb8LCZHBoMkK",
  "key14": "4aLMnbh8HL2TKtnGxAU5T3CQeNYNvj8peePepJLLLyu5Ht644Rj6dAEF6Z4uNvKeRd5j4FHufPeZpAe9whj6jW8U",
  "key15": "2HHciaDbgAFyjPgptU5kTXpFXuRS6o8vfTchTdE5AfQzqe4K8S11ok4BkPaoxaN2kY33u3vPzXnENX4YAn6LABor",
  "key16": "ggCtGNbn8tt2MPVVSXbxFtoT5sVm9bAfRtp8zPR6UDQsuKsaEjKtQDvVFFgt4jGbCo7aod3Md1fQ31FbAvXgCmk",
  "key17": "32CiuUTLTdSvdwhBzJw5RTgFeBWkEqTeKW2WGzHrcjyU1zPHgaM3HsdekJN4ZKL2zCsFJjp3rfcoQLFe7Y31Mz6j",
  "key18": "3LZWRxD6PZZieYe8DLBJoFy6aNgr7NSbRD2tYLuPfbws6DLsndbWKQddEe4wta38ozuYQCpSGvXd5WM3xqh9uDXk",
  "key19": "27ZdubY8dRUdUfttH8Hbv9JDdYWvR8yaHwbrq4Drkhjenw4HcdCYAcVGStxTFh8sWhTWb8kY9CXiUFv5ULbzgxDU",
  "key20": "27nkrGhuZq8N8tiXPAzCJbrD1zZwCZUSyHUj3Y3JHUShBstK22h8YUv9wvj68p6CYRDAoRriJnqGStQcyPhFCrbf",
  "key21": "uyzjFs8iWHNLPbTYMsUvjTv3AnUHtmU8VgxaoKgDK2NUqgwKiSf7aEgEyrP5EX8hmKi4w1baXuhA7onuwsnZepc",
  "key22": "3MHYer1V2ZVwcGPdrbNdPppf2n7afex735qVAjcFivzdsBcvjLm4ZC1tnNHDbT1U4s21tKzSmvDqPrNcivBmu5YR",
  "key23": "2CaKcWdPGWB82Jj8uAAnQXTHvGhbRhyLFkeELoawEvhEHyEn6BkuQJAxDHdAneQS2Cy1RnpA55dzT23eAxbaAo2H",
  "key24": "4PvCQAWqFX8HnsBbkcKyNuJwsYoeGSrkfPV1LSh2zr2DJJi8Xc3iz73964bTko1y8ALK3tvFE57YWzMKecUZGSaq",
  "key25": "2fMLJbbvBKVWmVRUzA2cSMJ2Roo6t7rQBtCXjUyXSmozEwDUEzY4rcS3SxQowv35dYA8VQkTU1kq5MZzd1BMXhhe",
  "key26": "2hsXc4219HhAZM3NGYmFXkjLSd7ngunev9KhusmLRs3aneQbM2mCsazoHsdgrLSn4MuoaLP98dhSrFUhov4z2Sj7",
  "key27": "SPyz3NQuJCSYPRc9gbYB97BqWfqLaX15sJLr18FSmvv6N9Ru5fc5bVYjUZKzHTi3RbWQzcwhuQNvPzsbgqhqaZr",
  "key28": "4WN5DhQKuq5XSL7bwKvrKKhi2pYtx978MbfZgr1cTmoaNn8Gr4qgxRaUiQ5UU225S2Rxav3X5Lzhqik91PSJAVQt",
  "key29": "3JcyQn3hphTdLNXNPy5y1pSNkE6xYg5RY9Bt8a2GoGeJfVEXRoDee7ptUEj1uZh83AZrA1JKQJT3EivWD6KnxQb",
  "key30": "64f3pdpheprf6pjDxHj3GSXAaMhBtNC1odwYuyEfXN5kWetYX6F8wVm3KFy1MVBJJCh5Aga9i7E9AjkUwFv6VSuX",
  "key31": "5tQKX1J5uRN4EikjHX3GixvNi5cqeJmzfozpadiua1spgHm34GTtFs6koexfLsMTzJz9HcvNw1DEDzXEEvfbwXXg",
  "key32": "2x8HTDE5o2YW1c6h2Ed3k73N4Lq5Xsq6trjn7xKxaEYWhvByZwLjA7Gnkwm8mwoU4B9pQGz71HVZffrmSWA73VMd",
  "key33": "4zVWN9PZowVeqaBTHcwvsgWyr2xdZjZiBpdrbBnM2sDSpXoJ7swhCsKb4FfvLHnxwauw5UK18v3bgU8rcseR2uSz",
  "key34": "41LWD9MXnxKZdA6KCAXDaHeVnjbYvAFv3SwZnXaA1zWA5AAXp2NPZaEQ1HxWfqSXjBtiKeQbFE7DCxrEjQRtYtuu",
  "key35": "5KJRhrce5BT56uBqsG2SUZe7BePscXu121S7v6yjDNXFEk7qWzHRzgF6uSKpKtXkgRbdA3ZWXpuYSyGjf3C1Xv8M",
  "key36": "asV8duVJsauJa4LEGtEaje8qb5MikaZWUq5tW5xyjWhrP4pFo6eRxTCCpoWbdqzMhUW8t47ZLeaAn3trP9Dqu59",
  "key37": "5bw9NNgf1UesgSeHyRmBSMMfvd9sruzqkknGqn711GL8F9qFcpjjEE48cGjFWjsdYKxfS6natAhWapqnF8LGvoAZ",
  "key38": "VYdqJsbK2wLGGhXzn5sjYCyXHK1Zhh94ieaPqzUMz24HuDJ1KfcZF7Ptv3SvotF1srDxAHZm4q7f12x8iZS9UDV",
  "key39": "3e3yhjPd1xJsJEmkgqFqkNYxAFNSzTkMGVnr7FEnidB4mb9BfrL6eutUhKiVdNyX7jPps8W95NYGHZDthwKzoVCs"
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
