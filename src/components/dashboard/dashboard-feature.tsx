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
    "5WaNPipNcH5FrXubCSsZaWGSwLQKqcLady1fdepDeAf1J8BrNbGQfvQ75B8ZVsJyKcMsG2hYD4N18CEg9CUx2HNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zsNKSdAbWDA8wTqkE1QaGcTHzVbicRadbLfMK1JHenCdCgSMNfm51pAXRvjS9iYqNRBMjB73gYBim5RDwdqsQ5g",
  "key1": "51czA3Gsz9ReTrVYba4iDnB2Kd3bbgQZ3R312RrFan6uuTz3otTYaz8RCSBh9AyAmj6vxhD9HMbrgNC57qbhkJjQ",
  "key2": "3cA5mzftcbWkAfgDXLfEeXbv6LazSUufPH3H3m1t51LTckdgoFwAoo2yj1mhCzjeKY63mws2t9TYprkNRfYVDvAg",
  "key3": "3a7MsoiKLA2k2sG39gM3VDdPNpCH1JRUDME4eHCBajgrwbDHXrdj5gMEaFB89uNceUuMZxKizardhcy89NDCy49b",
  "key4": "5gfbHnM7AGftuH8UqMCsfYJ2nXarJkv21SGrsiGJG33mvMpQfPAdBviuuAakEiqXxMvi3SP16QgjzV2HP1LG9CWq",
  "key5": "47JyQ2U6QkHFJFQadzTo59SvwoUUSm1NzRzMS2NcZMf32Jnyq7DnVvr7ketvY31uimG751koAuTaz1k57FLnxiCm",
  "key6": "3SkgJNQQiL7d6FaYmv6SCT94CRXJ9cqELFrE9mi1qtJU7YQKZG9HUczvd2smdGxcG2W7azbwyc1UoZgHxu6an9Dp",
  "key7": "2dX3WEcf7YC5rBmaSCPQhgceZvE6fUfzsse6ToEE6gzJCLn1D4iJsCthU4qb7cCPcseFGdWtmZoodxwUNMRMiAmh",
  "key8": "4YFFC36byhZLVxjEfNKN1gaWYKDuryXcPnoFm52v8BbpjutiqvqxQXKC5YdKPpSetwamZFCXyZ6V1eFL3T6bVXN3",
  "key9": "3YGGqEv1Yw45MJJLPfHhnWFi2qPZqRPeSKwSMZ2TdeX5mED2uijxDvWPGt1noS97ivEPJqgQzcTojacXRVbWyeVw",
  "key10": "4mVjaR7EdJUfSFLP3Y7zszXFPKmCNBuiiBJu3mMjDgc6fjHQfkJSBXqiUe4HX4hx4HALZYynRNYgvGwt4NFerCjX",
  "key11": "4Yt1HNSSvoE6Wj9HsZUKdc6EAQxVbHmepcpf8kPMS7XNgpsW3ajG56DXYLwiqstoMWUNpK2REGLQadntcxxP8gZ7",
  "key12": "xCnBQz5DTCwyQjLKvFZBetxAfYU4YE99em7X8urbYg9Dd8rm9m6caxjaCjTXxukrZ2nEJDLUMRMySDgq4Dr2Psb",
  "key13": "4qkV7QdDQ8Q6V6sLeiKSUcBZCVhDbuxxNt3tSjVRGP5ygyrCd5zPcX2LWM6mgWUGJphqPWSuHu8NcfKPm5mLQY79",
  "key14": "34Ty56DarNSRZUsQehfFV5jQK8Jwi78fxRY6vdZjEDc8pQfx1zJPjWC4FXzLitYdJRAP5KnEbe4SZAPxombm6xRX",
  "key15": "4YzocPjYCGsTycAvSUbcrgjqXdUqMxX7iK3MmhkzHLeeecDga7frtWLQnZNDcM6TxjQkv41BBt9t3DVTcMZdQaWz",
  "key16": "4aq75QzWwmgvECqtR9x3WV4gQ6WJZtLbmq2hB3Yqchr9dCcBLkuAooEqWEWfSHSN69jNKEhMaAYNxJRDrcifCEKn",
  "key17": "FaeuosdiRMCQAmVJRSU4s9SazQqS5k6qS75idDcoPhbuHR5J1qHBki3TP1uoGkmsCEsDRfG3b6PAApvX8XKhUHZ",
  "key18": "54g26ZbJni41gn4EnYnTj9R3T1xBibJGCYxf44bjry2z938v4qErvYaJU9bYs3tNDXPMc2ERdX28HmDnurFcAsH9",
  "key19": "4JNP6A2z1BovQZGqEsUEHEdw1rAxAexLDaTApCzNPiyNrYKToY4RuLEGgFuw3xL8TcNniDS1EsnYYFvj2SZzsGHw",
  "key20": "DJYKmJ9uTrAwEvTysZf53kxCLTnfBki6P8JrXshTtMkpDT254PsbiB7hCB6kYmxGZC9jVV4K1ZmgPpQp7HpNwti",
  "key21": "2wpsNfCPeD4Hfh29D3nsDMJWox9Nw1nEbPNavmZH8afPC1PMKJBvAfgPZCWxYCsCfzdg9BtmcP9JvjyHZfnBF3Qh",
  "key22": "2EtnCCmr85qcSYtdt7Tirx7LwrmuZtfmZDKDs3s6ZJn9F6BqUV82ikHZiYXGR19N5uHDXfnShyK6CieFJPWkYXPf",
  "key23": "5RWa45XFh7JRruUsDugJM1F5htX74diyA5RMw2iR8CxRw8jsA9E16UkrrQ54ENu3zDAw46x5fRS54EnXgtF8oPMo",
  "key24": "3Mftr7rDNpbsge8ZRbPue4mVUy6LPgD1gbJTHCMjnxNY8SCdBjceGFd2RtMLdr2RoU1U6j2Yxw8DLDrStVdXQ7pr",
  "key25": "5EoFqH6LLVDdx73pbRW75hTReawQJUiDoSA2qYA3c5vSykLrFvFRFiBAGT6p6eMStwpDyabCkb1m3uGWvECuqTN9",
  "key26": "5MVcKncJG9HdtXC2R9BDuMHGHCmLwRWBEYbGPaWwySsCEbhSPc7bsEQeYdjeCLVHfzZYVKjt8QUmnRVMfiPdH3Zv",
  "key27": "4oLuDBDsAHufn4LkAZ3PfmibrufQdzgujJZiiYW8p4NQjbQ6R8ggDYTJqoD9Tr6VubaW8YEN8eTLSSX71jeZBoJV",
  "key28": "6688DJXYKPMimCzBZiqtXsE6VNs7hjEhQWx7UKyx2koDpwHsLBERUrq2uLZnT65s9qmWv3PkNVFBznnqn8a6BoEh",
  "key29": "5g57VvFpJZazY3GfcC8XLx5su722eQwYQsrgHXrH9hWn7NjHhL7vpfQrjhiCiBnp4hKZ44N26npkPu1evmsbv95W",
  "key30": "3qQx3Z5gpPeUiuWcgkUDiMjvTccH1giSFiZ9ZqEBN1chrZaKgXQt5UqTeLziXQwYakfDXWVy3gppktWqmAgCkZ9g",
  "key31": "2cNmYFKwNMSQbc1YAB1HUULEYLeMCaTp6pi5kSp6jUruR7DKDiqvUBMBYKVwU3n7VvgKa3humqeu8aB1PgZq9LEZ",
  "key32": "3aprmNgYu3kgiBhXB7J4R11rFfzrVjjfqRVJ8yR8HcZFzB1662syeJwwE2Qxs2yhAMVeWmLmuB9Kcpos262r9BKB",
  "key33": "3vPZbr7zPDqzVtNbaKQoKWMcpAaAcrYEoDojTfZsNELf3K8ZX8RPvBcKM6ShW3XhZwGntdgqonUaAqwQa8NpRvSz",
  "key34": "KgZKpt23zgiH2FsRXXt7a8AhQmQc6HTHn2LjUC8w4suaojgWSrDWpqepJR9KZWNkwEgkAE4Fdh4sANStUYBVFKz",
  "key35": "2RKyZZfYyiP82YFmwJc2azTG1RFuetQ8iHKRzjMBcR9ir2o3eKgo937XrAXFCsLqAuUe7GQK5pU4iBHcTp3sfgVN",
  "key36": "4vgVoYA3c5R2jpDzeXxN5XWZZ1DVzpg2YwPncJp9HAAk7A6QPzwzz2n1hSxwxxzm4oQjHJUL3tBYEha3aX6sqnbS",
  "key37": "L4qztCCq69SZzMEZ1hKf3T1Eu4oJ65NqYxTq8rqXUhVQhjfYhsMW2iGxN34YJVfrkR7utSxGKZc8oAdRm2675KH",
  "key38": "A3XeEhPMHSJPzEc9SdEprPCaw1BXTTKk35ACuEZkSfGRzc4nKxgvXSS7VSLF1jj92P8PFmwykDocd351XkGLVpa",
  "key39": "2pZaYQvKo1eTt1GBTH7zabB6iq38E26uH4byfXQcXNYVTKP5abKKrupcEBbyEmu37d2WAKCvMkVassSZwGRzAqfJ",
  "key40": "3kGEuWxn1znFjxZdjpzmGYSV7e7MSa5PayqsTRYyKYpSjy3ws5DQ5YtXBeq6JDkXNxxxAF1kHf2BP1aY4vxt7eJW",
  "key41": "3q2KfCeuBtW5HWP9e3Pf24sEV9MixpivGzegQyDi5c5mNmzCv77xLsS8MmWmGms2X6k3kmPkmxJN7XbKc6wepVXb",
  "key42": "35pX1zjkp9iFt39dp35A54BuyWZpYxDBgeZyCuFkHNeoqLsdfKPn3anEkGYbYsUdTp1XkBFU3kmqoRUP5y8qD9Pr",
  "key43": "4SNzhrZcui28CQhemtXt7acaAv8fKCEzT58eJ4HfBBjHGFg54kLDPZWbWXjptSLcqS6MruGsBPYSf5tbrkSW1m4N",
  "key44": "5ZfzS1oCBi3SDsA7NxriLi5JfKuVQim8sYp7rd7EcFh35W5YG3Rz8mmLbXrN9NFXV2mqXHz66bMpnk8X1nuRgSQX",
  "key45": "2yFavr7YxZyhGYQf15X6uKipJ95aiYxAtzEqNr3aVKpwQmHii9P9VmYBeUAF75qMzdBkE8owowqBSBLkSsnJC2Zq",
  "key46": "2B4yJmnCyHbFkns4XyMfbt1daSjEM4jbB5rvv3a18TaoAborcNa78XnwjamDqEPEnD6vozDytBP2nafwZT2XUQs7"
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
