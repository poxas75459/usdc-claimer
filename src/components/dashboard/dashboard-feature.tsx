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
    "3KfyD3My9fKe8uLQaFdGvD6LkSvsFqUsoDHkW961umHbUyBpVA2tF6hvfHPrS9pAhvascVsDUVC8s2JCXjauQTzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uE4TbSSR8Vi13sf2CbwPdzCSQuvGj8mxdxkVgRRvFe32GhVEwM2V3nS4F1yL37Y1JKjWNWyBCAor4i1whuZxbkY",
  "key1": "5aFdCyBKMbrfXkQhV9ktFDW39cbMPCfGnV2h3wXNsuiiWv36g2VFvkRGhqW4y9hBZdPR3xTyJDJiaah6DePqztDR",
  "key2": "5PvwpbwuyNmRZeSRMG4A2mAi9oTxZy9wVf3xSUrHRP45nXKFrhtwDUCBesK4Ge1Zjj6ANeaNYKbudc2mPkw54WkM",
  "key3": "55nk2emHSQjDxLasSShpPYgFvqnrPkKvgYk9V9EyeD3ycFXEAVXgrjnjLFjfJCP7kd69PuxeJR7CQZ85Lqx8imnd",
  "key4": "5iuD8YhKeQL46rPa73igvFhWJ4QVuE1rA7ERByssFN11Uqh89F789srMHzjr3KZsB1L1nAfJ3safgZAU65Aw9b3F",
  "key5": "CaeS7Hrfp1Euko7wUabttZu3cMP9VZMAFVBuYJ18rKjsjahM89yERvYLmxv1cRa2AjHQpQR1CUohsBhk8RW6Wfy",
  "key6": "5H669DvHJLgc8ZfPFA6geBBZSuGD2oebw3pen4QVQVDeJZUeaSsK835j1YbSky9CCL4Uk59qKzc5D7X3jaxXaAZP",
  "key7": "3RvbU6ksHxkCyMEcwPJPRrPEeT9g971SPUvYUEQ57usdeLguRHTT5Q122pmJZxzhdhzDZfSNQBZ5KYBDFAkJdmiy",
  "key8": "4Ke3D51fX7hn9CFwt95tTjdkkTWWwVqegMLtLStDNiarktbDfryjkZr4k74aeFH4N1gZmeNbcbHTZRhCjb3k5YCe",
  "key9": "2tW5cqGxuCEKydP4LGruxoZaEQLsWqfMKiLsR3NsBHZTjWWyUFWb4L5eresEBsmhj89fLLskNrei8c1udi2nn7CY",
  "key10": "5q5k79nDMYB1VKJCZg29QzZDcddWHeD6NDW5EKEjSZsgfUkf8wKCsEXocRaMsjnsDESgCjY1RmwE9PVozBkQtvZ6",
  "key11": "LkwSrJppRLEvGMRxvLHqAyWr3GyGNjmtnYVkfo22NqpYPhRySSGbZEBJnwtabwCRbm12VEqP3rXo9GMFURm59em",
  "key12": "2t8woVYZ1hrDTunamoJVP8Gcp7mmbwJvmxwakiFtXjsS9fgTsHksvxscPPdZU3tMse2haDr3uRHV696EogHVpzuq",
  "key13": "4bxUL5kQqmyxwbAKfFDJ6X2Zj286rfm2aMPYPEQEofi2A71yQQqpbUJdPFZisKULFYngtidWdg82wiqjNVX7vmzG",
  "key14": "3rYyTQcQfvTMGjZ9FjQepzRv8x5WqmLYuJ5oR8ZPPWoKazDrEuGmnXqXoBbx8dmj3oSWfdghxRoQb68592TQEk2d",
  "key15": "3wgGgspi9ZCyGCWVmWrgbLF9jCFmxDMJKbwb1KGDtBKCbBzH93iLBGtVd5YW6auyyE45spVoUzdpsPJ2haH1jxhh",
  "key16": "5KFrumfzsDm5mY27h2MWsqkx7tt8besWhk5Q5jiPQ8tTw1LFersCqqdLeDAL4c6ihqKGtvtd75ozEePLQ9Se5rcC",
  "key17": "FJN9FYJPcrDWwH5Gx4hJMWhLcQWzzBCMdaKz1dWe3tDkazuXidEPXwnDBsN3ELn9AY5SJUnhqcGtJhtPbzuKnrX",
  "key18": "3sj42hMoNaQnZozRWmpgRawghPJxDFHfu2d1JL5w91TsYT64P2z2xUBiiXKL5KTvcySnBhNwM2mAfUBwjry34q2U",
  "key19": "64rXNQ21zq41nVfEbF1YkBpfNYQPz5HcxJJU36FYx2qRKkkDZrrTwHW6taHxMgaY3LRMAQ5SGk5ZfxqSwwQkf8x7",
  "key20": "3QEvfhZvrVKMYKjk4CmrZWkb7Aqo6JH6aZFMqEbtxJCwBSrbYYDgqTCmaZwjzjbeSduFTyFd8nn4B21C5PPZozdT",
  "key21": "5Wd61ZEBE5uEWKsk795v7cKSanZyG1qWzRi41sjfgdPE6i53qvgchFxeiLV9E4niE68QFaM2CBib73CgsY4k87ja",
  "key22": "4CJqBaEg3o4muJgm2pW1n8i1uciCpx4by7dG3wRMX7fjAFDeYpH6sXiTyFSuFCVy1zLEVkD28sCf3a87NGkahxpW",
  "key23": "2bAXWFEV9rzqZhxTS77XGd9BAMweBs6nLMnrq79NExWCZcFSVv9XqFCYP9BmQzkJ2PbVFTEPxwGuxcX3oQAE3dwK",
  "key24": "KmqFBRMJTumVHxnJZFKe43emyMEqFACmavEUvCb2GnGWKQMVKmiB991Tms4EZ8X3YUExC31SoNpjKMUpoFt524H",
  "key25": "5ALicdhxQyUFB8v3eVxbhgCHybpYRsQKdCbpgTguwDpJcfaCKMRM3zYdR3i8SiPppjsxBjjuhk21iQLRP3tHUjZp",
  "key26": "F2X5R4zcyfKVCStBDz4L8wt6nMbK8RSUkoMMobp7afsbcwCYkkPj79qRnZ9213FTEXdbKymEL2uxnuzS6Lz1g3Q",
  "key27": "4L18h9sEV1yLi14ej76yMjd1Mi9A84cy889jG8pytTuVYbR19Hu3UM8U3a3FQbC7MD54J8hfbyEP9sHTgeesUYc2",
  "key28": "4wqTncVvbTzwyUYGFCtBcPtW4b598Y2dy7NZg1q28ShiLYnKDzLwyfV6tdkAZUoLRBq5ywxSvHv2vpcDBx6GZB7T",
  "key29": "4Aq8o4Bvy44WZhqYGfCk7ic8QYS5BbMUEwVAB7N8j7kKZmY7a2w6KVb65C7gFBxStrWS8SyudUzC8FCQXZ89FfXX",
  "key30": "59nABXtbtCyo7dGcFwFqpRnrWd5RbJnCnDynYwdpR3M3UrTwD4Xj59YsVTgFLUoak611PK1MB7dk8Up7Qs914bPc",
  "key31": "3AKNakry8XjwJb6KZLAdw4MZSiFtk5A8dPrc8wDN4pqc6NAQNTdZrh19Cq6qzPkvUdsUwwspHdCWcCK6gvgjzhjv",
  "key32": "2oEPb6i2CZRaawAZMXqGWEZzLd1k3RHTcmZ5xpHpicwXj1ezfuzD23UqJUfkossU3iU6taeSbeFZGcBHU5qz4ukg",
  "key33": "4mwAhmScmkfwgpG1wWQQyDtxUcuZvjfH95H3Q2hZYWhrSEtdb6xSzxrRFM4quVbmXw4iCBLNh4vSXAW7u7B16xwG",
  "key34": "zJforhvKT6bYgaoCbRR79MarNZBzZhULcdak5U7Vq9bGBZckiYuNRu2hBQGAgbs4bRZCo7Rd3zWFDBUMPWjzYA4",
  "key35": "3qFow54v5PTHB3Dg8GENmn2jSkVMGp67btTBNwxaCyT3MWyHJMGdiUFNM7ziF7cuqaRijfmm7G4e685SWouyDYwJ",
  "key36": "3GT2y1QxSfVejRGhPvYyD97ycMVLS4XADLLf39UoxRPQZQQxYdot1RjgZQJdDLRUyvvG2qk1XAPfxPLzwh7Nip6z",
  "key37": "4vvH3d1ML1MZ525Mhr7J2HvyW2KrY4abXHc4LiAdYB5yhN58of2bkaSfZCvZyMpz54fiTL7JDqTEhauSiRSefeVB",
  "key38": "5gZNVNSyF4qXq2AT41ScjKt2fXfuGTHZsi6tFhguy89xiek6FWqCoFTFa31RMaAo6ArFQ7LTz5awkS7cYzVhd82g",
  "key39": "4QbWcvEsjJg8Zg2cjweSVHHVBNuZgYR1pboEugARCAgXfs1oVULoN4Sidunrscc6i8ywvFwS1WkBZXPAkDmuLCso",
  "key40": "qpKvSo1f3G2XcLUcXFsz6iBnw27BHTQcbzkAzMGnFCfqtWvg92oLyxAvCmqDgH5spXzaiREiR4jApxdxLzMzwYz",
  "key41": "5ddQ8GP5mQWBwAzWkHdLhCiuYke2EwHVhzsd9225T1MHyYcPY1NAcGapmCfoKNZuTiX1KRjnVphJUdcdJ7YKCAzb",
  "key42": "Bb3r1zA4TK2Zm7gBJpRAMRB69g2DW96gE89nhbc7e4GGLwGEMcKE4jNHQ7xznqbnp1MXySFBT9HteaSNdfvKjJK",
  "key43": "xVEF7sHBUG1p7HMDiF5kb5j5hFmLpLGDRfZFBWhBFGD53WdFDw8AjbeaYZ8f2LwZjJnjw76f7kEdPg4xJJ6G9Kz",
  "key44": "dUyaXpLuNJ1KaNCCTAq1DTQhvyb1VhivGFNv77c8NfR5qeJkLjCUM2y3dFB3jnENpZyh9QTpRZpn6QSyu76Zy6d",
  "key45": "2Z4W4xaEfcVtLFRie3mpCqmCiuQLPv9TZJPL4xjwanHMrx4ZZ4w7V7FdXzCzTvYMg9c2CwSCwcH9vWdK5sg6gWVe",
  "key46": "2Zp8PXdEtR8e9o7miv4rV53MMgJpanxp2Q2Xyqpb8wtVkda5f8gSU2kSC4ARCgcA4hn7vtBgSVeZVXVEqDrBjm8r",
  "key47": "3JvM65eL5BpaMy5SdWT1Luu5zisXAsmuUFo5nhxobhoSY3k5masSVEjBssGjq87ShEmu9FkjduNHCGyi6R57q53n",
  "key48": "4q2vnmowRe4LZuzu1PxjZoE8SfDxQdZvMtsRu9DVqPa8sViCBTAU12FgXhzdayRkKnZobJs9DS5EtbyHR8UXqpPB"
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
