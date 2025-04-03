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
    "zRxW9MKXwWRHRC7Uayg6d7wS5X6LPrCkEisMqTZgfxRXzcxtuzQoY98YeZYNqf8w8KNULds6A6r4bbCooRb4w8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CzJuQWqepjUyuG5qbqYJZ5kF8AGHLYCJus7hgmv2atNhg2PBvKcrkRWeVUUC4HKX8Nc47qZpiU6nykiZYdf1h7p",
  "key1": "66wmVYcYh5bwPKSgvYkXVz74WcHCuEyZZ9zXM1EmYRSDtfkk24Hxo9kjk6UfSpHuVsRuzbxVTzkJb7h4Xf3E6oNT",
  "key2": "2AWjDWiuPgKGr4bXFxxPbySjPKJ6zsdDtYuBXeib5dnvwC9QPBUJootAaYC6u4F5YKtkjPBMw8s3wfjPZQsL2c9h",
  "key3": "kzSdnnGPjxu2iVwp2ZZm8rg6QCf63xSXFKbuEavK9ri77jd2nhncTBL9kJZFHjjD58ripVZg8QVijMj1UDvGHnQ",
  "key4": "k1WCcKK5fpaLzak9UXDzswggr1FTkhGT6jLK4T2dneEfyAdNT9ihCJS5aZXoKZSk9zb7nWj1TvRkzyPRLw7YkKp",
  "key5": "3gfpwU2JCZdPxKZXe3MWoaiRYdKB223cQTKQn2nzPL5kTqDx5W5jJ7PfAm1u4vHdJAvxEnVTF4nFxKpUhK4UJHTQ",
  "key6": "3419uh75jno4LY1tcEcYMzVSRouzGgGuH4fbrvVtqsJk7eFAGZkXjBzNpR1X146q2y8xtQHPMLcwSYsBtFmf5p6g",
  "key7": "5kVH77UbrSLJp6UyokTgeVhRDPSABnypC1sT4Ub4TDn3BUokSjkZZvJF7TAkvpPzc8v4takCgMWHg6Uzjhb9FfRA",
  "key8": "3sW6vaPxVP8daPq6FPwq99xwynGy8urkExiyKp22g4roNWCmaYrbW5B1ArvadmiQ2BemeP1233W8q2dMnqhUbC53",
  "key9": "5Necb1xWydsAHjQk8vwweu5MouxtP5ceyX45B6GfGwi2uKqCRxcyn9SsBfYGYB7s2RLBg7Jkm7SnrrdGPXFVFXzk",
  "key10": "24vHGCy71eTPhy894xpowY3SsHBWBSEvQkLC7quFn38Mr5D8c2ah8LL57cVT6DbRz25igiHm7PVcmeJhZj9LByFU",
  "key11": "dah3tJTKeCSB7gjxxo4YELFiCGW9dZXUPdb5RwzfgySGLSQHABce4XUSC9h8xoDJCnbtBGSGMcY1pwREt95qi3n",
  "key12": "4JuYaQDSKCNn7TnRt1GsQsJrkGS1xwiF26xgnpq7aj4RmZnAi3krmc9BLbdwsE7EyNBD4w1K16Yv9uSEaSMsXkFe",
  "key13": "5kBVzx5LdEudNAhcaGov1QzJXpxLyEeHc5XLJervAfmPh5qEpzm2XGVwLWojCw5bz6hAvQ876Lzb93tHNLyYkJBD",
  "key14": "hKf5Dmiv4HK5v8T7cxZ5drADoiywm2Ekos8VK1bWTzXPuYRxmvnJLTes5phYWLQeXLM7pir3geK8RLaV5Dn2PLq",
  "key15": "5Bxp3H7fpU49KNAjbmWRbjvfVaJr5e18KedNe7a6Nb4FDgznraftk7vU27HsNpH6AUeJgvUru4GXyZLYCtScUmUe",
  "key16": "3Qw3yaiQM9s3uzUBKuT5E81XPuRaxhvXvrZ3aTyYhAavc4wM1TjEspPF8DUNsiLFs1NpwARKM1fuMZXmG9EZ4CGd",
  "key17": "3bHmFoJEdNG93ebdburpC1YjfzPBDWEzwWBXBR4z9RWzA7EsKfmVYwxb4jiazh5ntmCChcB4e3xVASBuBpnt4vyr",
  "key18": "2YCw9H1exDCebJNF4GXBKfp6LEBz4pFaYoJhN2JMXaoH558YnMPQgYWb8BiPZKiS6T6t7NhB1dmnEN5wBKadhAHz",
  "key19": "4uvrxYCLtRDyeQZ7NPGx3aYN9yY5Nt6FkZoE3MNcd1CYha39ERhDENnvvqYLz5RK6DLDFPRZP8C5f1E41ChkQsdY",
  "key20": "4mPcPbdt1KZKYYgtj47NBRTm9z6rmg2iRPM4vxCoanHVTDgUX3mqbA1ctmVzz2mXsknboHzqAYy7HLEsSbUhyD1k",
  "key21": "5pss4DGjiFREZUumwJEkJibGSah92LpGfbcN4ANQRa7tAtsnsbsxVuFx3ua9PPDrcURaMBfCxtjyM49vpVFDoBdE",
  "key22": "4v1FYjsc9eBjm8g1tDwuKSz4HqjQ6Cb9nvdRq6WonVs5Y4ESJZXcnyCkqTgEnfc6hJ4ARNgg8iFnHTJi3TEn7geH",
  "key23": "3xB6N973njCzRGAP8oE49W6N7r8nBRMzsro4bnYg7svGC1a9udMQJH3mJK1qSUquFKM2qUWEP6cCkUrpxbH2kcTc",
  "key24": "3D2hs9eFRen7ijM8Nn1yy5H2h3Lfun32bEHSS6nzLda9tuBiVHNkBfVyoF4oUcz94v8b72MJ61bLEiohSzJinr6N",
  "key25": "3J66caAuofXLjemXg3uRb2YG1ecpKqjy8qWbTzEXXiwRgcVWvjsWNyDekDw51gYB7qSMzr2tX1mRtgB7dYGrPc7K",
  "key26": "3ZDBWbXAwrdP76ug7eGkHpAqhQPJcYCv6fReywBQ8W2ahJ3yu5sJgGF2J7QG33ZSGoKdRqyKxxztVP2q2Z4Ct1og",
  "key27": "9Bdfb1wQZqcNQXB1qDGnak7jdzYFwsXfUtyusDsRSoqJ1xyitgPQKHQEqCTro3ztusG6eWUDCFDtyzaxtywymBc",
  "key28": "ACUS9pw64nwJ1N8vazc6RHy39A77uykreSRTxhbkF1nLCtJC8czdqP46hsPToZqio911TbLxjxNCnBVjB8RqhVw",
  "key29": "43msmAJf2kvzWxkVn7SPDMWBeFkeU27pxyjMExQ4mmmME8zrTyoCGM1cr7mVFGkLcAoq7uwGmLTQnGr6GENRye7g",
  "key30": "4SJhDamA7kQb3tGLCLKK8vXm7xFWvM9AQ83JJHn9CvAmN6YXNkmtXe6ENNKzNpbsrguK5VjU4TfX1bwYZnTdxMex",
  "key31": "4T97Q3AZV4uCPw3gZszjfvjvX9MiG8Ms1ht2wGMmZdefkZm6N1saoG7NNc8d26zKDM8fT4Kd6zEyyQsG5RmYUJo5",
  "key32": "2KV86VGCve5v6fH39iC5449GufLnBBC3u5km9JzLfcH5wqbB11SFhgV49CLgA3BV2XNVYBBvK92HahJsYeEihX9N",
  "key33": "2e1fjoAejRaFrDWKWEW4JYj4vRaLp4TVUUX3QSUzkjguri1pdkAC6H4UpvD8w7bFFd2mLxDwt1tkujmQoC7nLoi6",
  "key34": "4nL2wovJjzwgM5UvHofghvthwqykqgX2mbj3bnxWx5AAvDyAn9XZBF1bFVgWS4sB9edvQjhA9hotBLb29FqnXgN2",
  "key35": "3NiN9vYPMvSj7o9qZPBESeZh2Q75bMrqXGQonAtbPC5fb6Ka2iRn2sgDM8AZLLRwTT6D3DpoW8K68eLmeeTFJ3sF",
  "key36": "2m3yPS5m3QFb1Y4nbDuYKQfb1BcThRfiNaGMjyKhmtDE1ALpbSgDLpDdwTNZ8iuqQ7pK8iiWSveg1BTHeCRnn2wt",
  "key37": "2Vt3qwD62GQ5EQzJ2Jjy32j9v7kdyn9qT5zvxsMa1C6oa5RaPCDUWFhoF5do42LTRLiVLLoAoLRUr1PaWPsaEdZM",
  "key38": "5dVqG7jvXjJefG4kjwtPgX8JeUexjnzLExek8inoEEA7w3hBqjUH2AERWRuAd8tWA7ttB6nSY4EYyCRDxqVqHZoD",
  "key39": "Kjfvqi8CBGt4GvHTJcTjuQW8ZnmzmX6wUz6siproqknGZRyxJNGa6tXegYPPuSqkVqKRGjYPYWZ1LGS2jFnQqZi"
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
