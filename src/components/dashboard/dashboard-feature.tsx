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
    "4jHydwk9j1yAHkXFymrBGS1tphRKwxCkg6WzNyNy4UBQz4nYkZ8du3X6jFze4Z9kiJ3GVLrfLwHycYZtW88UwAWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MEAPxyEu5kEvxCA2BdcGmJYghJcfb2qy5At9WTJkCvTVkzyZkjMU1vfC6MsXz1haiX8As8HYv9zFJz3a5ZcHQJ9",
  "key1": "tt5vutbBL6ghhKCmq4wUB3fupQUPfAtMbig9aTfhtBKoB3PBPCnMzC8Gq4qtGiMayJnZqfA11XHpBiQLdz1nKZn",
  "key2": "PfhzuoKhQ9ffYAYzC4CXwVshoi8fgqGu3WBkqY8Uwj7Kd7EJzHXDyyCTtpYQNmKdYYxfq1LQBKQeAcox3P4yoME",
  "key3": "xF17YQ5ie8U7Yowf3PxFzEJgJdH9Vd3VAcBuM9XEBNHdDTL9S7i4tZLiDehzbCRG4Ch98NMMSLYE5DtURSX9eJf",
  "key4": "3qXHSbt8rzLAHfcKHaYoW5DMGTAdYEJQRo5UuLXihmmkzKHuiC4tf8S6nA4ozE5A4bWMR9Qgs8yH8KXnHNvP9HMy",
  "key5": "4uV97fbKdMaVWNzYo5hchwxKRBEbGjEeSDUj5UKcvo2TyKJC76auQzqZUHVSqMjHnmBy1tCUmfymVfioWKCjww1U",
  "key6": "jExRUduiw1F4GEwwT2FMEog2rRFy5EHWPWuLewiDB7cBRDa1yujrr2buom9nGNWGXtb1yYuZNpvnpMJgtFQgRmv",
  "key7": "muDkGho7EPwcZbE6fgTeXFJT1R74eyYuxQWo3eAUPMqscqfpxYVdzKu3Fc8DQTtTQVbio6Ua2D4xraMyRbz4ecA",
  "key8": "214fiRiiiJfnbaahnieR5xpWcbnnmvcpRGwq5u1xE4JVQRHaVF3bieMX7s5kTNnbEcpS35QE8YsHqo2HeFAnnhx9",
  "key9": "3QQiKQacttYdwyJc5AbthrJb2RUhw3TNFmsoDKKdEbxSke75N5arE9aHaEBbSopQqjVNEu2cg6y575inaDMkDdBw",
  "key10": "BEJZ2qXphcuwBA2MXQEN6JLwzBcQ8G464KWy2jzVF1255kA2Dt2bQXwKQx9cW7CiTXhbfg4kPnx3KMLTWXQ4zmi",
  "key11": "3X9EexzWuTnCuVa1xA7UpvEpzriYECm3HqaBmNjT9kLENtKrUsHhenfAr1Q9zs7L8v2G9K9B61JGv94FgRjV5buh",
  "key12": "2rwn2BAyj1TTpMc9zaQAKLPQVCSdSmyhZ9uTW2ShJpAvAfB5e7mxcyc8FYNAxmfjW3VYn8wwUMkq2hVbByt12zkt",
  "key13": "5k99ANhstGuEL2dt7H2K9YGEDfE4aU2by1q6gKtrTezhg63LYE3LPAD81E2NvGXV44NggFUjtHpne6qdwjw532rD",
  "key14": "3TFtU2Ka2URDGfEfKac58TgbgmY4dsW3QLPoePS52AGFQ9PLnPmYkPHz5ctJ8PmCFf1cxzbwFv94EjURSnbcnrdQ",
  "key15": "moBG1nTm6MSYQEHcsEnF9eb3B8XPQsck64ANbYuk3wQuq9ipeYCvxzhfKgBMSQsv7kNcea6dgBmCon5Tt5w7wKc",
  "key16": "5gC6PafUEpbcV1KNgk8bEoD19qbAgoBs6ooDes4sFxczhGTYN6fdgKRnSzWMmsWZSyvb2z8uYqCFnrrtkUCun6ku",
  "key17": "gB4FY9ZaqqqgpyShZGkWGCkAp5Jxr2Qdiog1J2eonkbtDxqcxegh41FD9adRktdroVzT4pEKFSS8bfdPXyrcEJS",
  "key18": "58a9CBbL6MhYfc4X2nVeKbxLLF7exMiXNW52RRdGDWFVKFGa86dm6o7VgHk3qEWGt6tgR2V299fXKWSATbDq8yFs",
  "key19": "5MwgqDbmsgoN2jBRCLaE2BB8iZVEQ8dxRGCFi4z8dT2pfug1KuBYA6PzSpxb3roKsVB7bGNpVmVmC1XxVRq2yEyD",
  "key20": "2e2hk2imyLsF4PQ8GeiyJ6E5aALBTPehSckTLj3eCPV7ZSdxRbBQaBomg27u5jMsei94mrKyVGmB66qbQUDgmZSw",
  "key21": "3q9gDeGQJumg3cCEdkf1yEMLFohYSVMZZeGQtsNKrVZZRuYNeWGbDbhw3nCFyNrjy8JGAtp3rnVQXgKbGE6hrzK3",
  "key22": "3JbYTtdxZrM3UkyP5ZwuSKcs5Qo32cz2Tq152RiKiV61aDMjXxUmFqcTGm2AcXxkFACsywd28pDXKE951gmL8dKC",
  "key23": "4tWMVoxiwsHthbAkC6UgawgCCtkcrYPDVWy2Rwh1dbgZn4DvKMxdxXtov7Pp3Jw4qGtHCD3vwd3jmJA2MiTJwCXF",
  "key24": "2ZG9kPLTGq1koP1DgzLnH4aeXVG6X3ma6hH4wNuBoEgySLY61zUwbw8P4XoAs47wQCTUa7v7FM4oXd41eZz3qp6R",
  "key25": "b2RuHU7MofDKzXkP4vu3N7E7AG1TDMtXcNW6LCjiuBhw7oYJqTtY6a4Kz4DW2Be9qyBpXZdgZGs6iS1Xkh19CUZ",
  "key26": "44jXWGfbtvcaxhN7QqAoS1zV1EfvxhjQiGfze4gLFX1VfBDqetRXHK74zE3zzkmqQxzpDWxze1YVkfQuctchP4RJ",
  "key27": "gm5of82cooWwp2RKYwc8bqvJJ3FEmMLVNffyTG2T36LezPC8kpCCwwM5vtUUDEkXKyPZ7qyrrpnrQ3ou3X7y9yZ",
  "key28": "4SEhVaE7YhzyAkqEVzDYuxTXvgj2F3Qqgb8z6Ee4CdqnheNenEmzkVqiHJP1U9xFEcczY43AbFx6juS8na3fTzeL",
  "key29": "5ru1PRiRtavsGPUJbabnkDVu1iSidxPpob8k17qDrquyLLGeQLDwvxAY2RU5UVtztmQkdDe1VVs8hpQTX8mJF6hV",
  "key30": "35Ah9XpMazjxoGwGmQiGDugvMKBV1DhNzRwjRBVX8cKYsPWgaUPGftR8nshk6iyYxX79A5ERqzuYmbS8ruAb6YE6",
  "key31": "5ZpUdx76dAMyYSNs3P8Xv2TWgCbCeMTbDcmfoRCshxbaPrqT5doPdRU6vd1ZMBV4umX7SvG4QNqYGsD2gT9aEARP",
  "key32": "5pPeGzSsE7Vm8RDgMhHouPTAf3SKkvtd67vtjKpYfFxY2fBmL31qFGUycH1HBuL4AiQw8RsmRmE6LBhsuKi2Rvok",
  "key33": "4HFpmEUjwe1ydPwyKdyz3JfHQ4ErhFpiAvyyXayuE4Y73ceMHrN4SJN5d6onrcV31TtZnaajtufjsVG9oAjQqduk",
  "key34": "XmkwGGM57AroBMy2g9p6Wt9HatzGw4EFd1CZEccrDLSGgUBn2KG1rehuvRG3nUgNYESzNPpsWjts3hfA4hx9JY9",
  "key35": "FpqyRXaedME4uCvkmPV2R1ZuKhtWYrznEaRQqLkRtzBKuUpaWkiDhGDBomV5wgRev89597QkQNJzPdpfDCFPVNi",
  "key36": "4rJaKrTS6vzPD1Q2xVPtHfMwrUDeAW84ppHMpejPD1NATnbWuPCipKN4uUVKPtdadGbPCXXzxGnkwY1ASPuExemZ",
  "key37": "YiajUU4Z2ftNAPHriWY2dxV3Zx5VtqBZrMw4EoJfMgW5Zd7V9Cq3GenQtnDNrz29c914VHFwMvvxMCRH9bHGaaY",
  "key38": "w6Y8EzDH1y5h3x5XeAgeUTqt1XozQErXQJKUWST1McfoRqoPKrbACZhUDHZ8Moh614vCUCKbiBzm6cYF36EUSTW",
  "key39": "4y8Zui43yKg9Hwb5vBVYSdTQAqUuhsqKikFsh2EmTCrGNDQ5KGFWmSqCLMMpZsSJ4BH3N4sFHJCWCMCSuB2HxubL",
  "key40": "yy8fm2XUWF3a3UosocHarmsTQdT47bQiETRSvDD9tqPshyh4x328Z73Zdf9w9Fov9bALZc1ymUGuFwCpbGQtPSv",
  "key41": "5Rms4rLZj6qtSYdaRQAN996bSnqBwvQjzpj5teUua6Nsm5RgH32Uh193gSuwsEpUkRgnsvJAuUnW3HnMY1QJ7wHq",
  "key42": "5KtUBvuafFkDpLAgrHfxVPoEBUbbNYbtLz4MVs1N5XosyNYLZ2zGp2pJi8rj3xqYP1KjmBT9pH896NcKuyxQdzYs",
  "key43": "49sMSELCAgQqoom2FPLYKhoptegjX9ZEord1FiAXc6YwhizRTDQW8siuE8b4sX88yCT9W3eeLJCHJuzuaKiHGTi4",
  "key44": "4zpoizDTSzgjMjytgkFeY4amjckUuP7hiycEjx5WvNiWYjxVvMjbbxAPPrKE9HuYeixC3gGb7rVsntqKoHJJ5r6b",
  "key45": "2a4uDD6FBDHUc5FEAWaYjeeQUMWjZaC31Xncg8AGT2qtJJg5j7on7A3hRWuws6HMAppDKNz1U3vvA1C4sB2Eqe6n",
  "key46": "3LpghoPzYe9mbVXeykMLWUFtRwMnniCniqgUGTngxerhHSeWmzPiiTfuM3Mjw94pB9z9okoxz8VyxCAgYf4hVmG7",
  "key47": "Lv7tzkCFV45xwnyWTkbp66h3MbwCCPg8Dodr2bRqihVSYXNsbKVY8Ns2tV9sVz4BztffE4rdHLPJ7H3q73UPigH",
  "key48": "2ufT42bUaQuUmCGtm6Y4z3h6G4P5ZnCgYGvW6zeDQCRrbw5APVJfi2Pa6VsHsVB8BCKX4jf7TZkZdnd64d356bQm",
  "key49": "59RwQ6b4mathwVXcrPLnBcdnKXLazGMChBf6nrcAi9Fnt73utyd1RZiAun2c6hiC1SDffRrJ1FSwCf9CusLPuRkT"
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
