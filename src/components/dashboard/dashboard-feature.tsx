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
    "4GdzXi9dyoCdN8UAeqHNdMiqKmpAxmJX2unjNjR4xecE7AuNeYdvDXKBFVYJhhPbQ9xzGEBqZi6qAQq8dy6cKn9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tKE5nobKk19xUX3vXGoG2Z9oPEemk1Ru93goMbey81aE8XnjoxGViU68sLbCLNCbxwwaAtCUEHuUpzHwxPSnNqw",
  "key1": "4PHgHbQUDf8QmxC3WWvaPsE3UvTZkLhDvk4JEokWupMzdFQ27Sf2EauicNNe28vK12TVJtQqHySfpDYysKdsMV6k",
  "key2": "zmYAsnRzv7xVgJoVe7xYxgdG2jrJB1pTqyGCde52PTh3rA3xCLbfgicokXaBnu2ZPHFpGSzQA73UUQCYFDhwufi",
  "key3": "3vxdAVy1Vv3S3Q3yLnLRYmVDtr2x4W1NnYwUUWXJMoo5dxGUuDsMxRtmCfih5PYUQGvyNAXZCkWwJkxrFPipvhxp",
  "key4": "61gZWXcWV8vAVetCFAKrvpZRMEcRuv6XqcoLCociWJ6ejKYCgaLgMrasJXdsQzqCcjtUzpLZbRPemqQNphNg3FeQ",
  "key5": "3SCH9ueFZGoXZES7s8xqWAFmfwX494ncz5NYf4gSD5yXNh987dv7gnJpcbiKSmBCr6XJJiv6p26enYEZ8SYgvJhU",
  "key6": "1NGm6SJjx25Egtxn5MyoQy7gk9aU3NifuB13jKYYVxu7pnhMJv7HefYeDfHNdCmx1Ds4euKM6g9kGV5qqd6AYZi",
  "key7": "3RsXcQeRhSiBThwyWMMLxQu97JtKrrEHpnk5cunEDsCrykd6dMY1UUBUCg5UyDHbtA9TwFVvggVbXqKzfhew6rx2",
  "key8": "3hBPUur9ZD9Pza2GDHYk74NVNFv5SNLEgUErrczsEQ9hwni2e2DXu34CEGu9cWRaR9DxydN6AcdYARi9RZLvDHZc",
  "key9": "4MbRMAWZznbJVjfqcbHxzrtew4rVrLVYM5bPn8LgubEZLv5SsFb6b1Lte44BUXEASYayVS2ZGEnRTgULSgaQUL3y",
  "key10": "2RJqJ2hr7VkAr2RNtZUKyYZ23cQzfwbPxsuXRD6Fcy3BnEoxfJy7VJ73r8N9FRhWH3hREs1sNAoCUivFMdXYEkiu",
  "key11": "vQyXKHzasSQT27Phz778deEJBNRo2cnjdZCwrL4XTAP3LvmWhqGCXuSKMZW5GipcfgP6xNmgis3sGubGmHAs3Y3",
  "key12": "2itsQNsBi66nr7MFn8vTxen12R71ysLhN12xLpv4UrScPDxsk1wLSKen69q9VrpB6b1i5Kffb5itMh2do5L6F6J4",
  "key13": "23Tor82CrKqnyPttaurixbTauhXAANC2Xa4QmQZQmUCDo2J5PZeT1ZbrCG7g2H6kdTkWBAKsm3JTobTQ5naCwa6A",
  "key14": "4E11mwmtDYSEbgnUWP75yPD5FWEXPsZZbZT7jiTwEZxJLgTNtJ7jZYzqKiu6nP3YxbWuT3KwRpSfCBDq7Epjw8Rr",
  "key15": "4PoLYwQWQFK3sT5xCk69Hr8ZFJg1S6hRaQfpRYXjrQK2KNgXoofh9YCj98TrNJpCsCxsjh9wDRAiQ19StGUTCmvu",
  "key16": "T6Zc69DYED3RPiGkCtPA5Ek25YtKt1p95sfUJn7B6EzkC4XhD1ujSdvCLg3pguhLhizDF7P28W19qgYwJ1jFEyu",
  "key17": "4u8fYnX8LWi8wKfk4oQrLHQz397Mh4gzgDnqkhjKJB7zTmKa9zXZw9A8RRVmbaYdr44vJBp5dSnkPKSVm49XziKK",
  "key18": "5chVZWr7c5FzFQAZTcyESNmjVArHPsoXKrWBrmrZx738vcx7N7JucDXMqR2JxAEnJ6vZakMFrdYToDcqquT2Cj6U",
  "key19": "wz4z9mPkvgZXRPW8XEn9Bgk5cQ4c4VeRRzt7rvz8xpysuC9uhmTRJw4PvJFHt9Kb95YoAiTh8oSJcqgZGCKE9HT",
  "key20": "66rNL6wCfKas9xtzXK4QjbY56eJQxEP29Hs6NTTfRc7xMKcctY67DuLZooMqbcfkg4xRZVuC2zMZksSh4q55DpbV",
  "key21": "PXxkp38187i7i5sk4geu5WGxDtdd9rsevEMD3Wa1sgZS5zv7dyQvWG5msK8hbmmM3NLK9BQ4FiaYQ5Q2n9FkVua",
  "key22": "27YYczARZ7WDTxVqUi2hgzXKZbbhJuLALRbbN49MwayV7nKF7ucz58mCTgF2PG5VAXH4B3VyzTczhTYjAu3kcTvN",
  "key23": "4t2QNtpt2sPjLajvCZWXeAA5j9zXPYvpTH8spZd63cBAMpvzR3w7vtM2SZXPjKA9CoutEbmorP381se5DUXTSZJ9",
  "key24": "2651VT3uq5JMP6QM1NApG1fHHDLjmmy9msQduMD9REmNjZurekAcwtz3mBLEVE4c6TSscDWYz4RshPRTyQUTjbGT",
  "key25": "5m7ArvdEDfuhsLoT43C8MdQ9BrLHvH15zuMALvxyrMxTQbXYUGq219JHq74823PPdmec3dy1ZvTe548w6KUWhfFc",
  "key26": "4UrELFHpTaqXYTP6byDBEoyxpEEmoQP5uwvmmR9UhZC36SVqcnutCH5Fmumj8uPTRTDFVgNrnN8sWTcZsTQMaWoq",
  "key27": "4Wk78Fa5uRM4FTp22kDLtjKATNh2XhkcQ4t4wYKH56NDDE5c9iAcbEyAZMNkAdrbXprSGJpg8KJbteynWuG4G2Tu",
  "key28": "4GmENqauqMDcif8ec1AiT5bC4ynZ4zVPzTDbHoQ2s4Ti2YFxTcP7oT42xUwWaQ1YdEYw9mkQ5AH94j29H3b4HiqG",
  "key29": "5uKzzow2SYP9EewjrL1C1pW9GchX1od5iorXnKRw8GkY98EYzNXGFvRPdFVe78mFHMs7C4cRnLknKmZ6Y493neuV",
  "key30": "3A5so7Y72ZsQGDv7sTJDNKSrrVc228MxgKgEaXWVwNKe1prXyeXZ2oeTDh7yy4ttn6fJ39MfyBQNd5EJrNxiehko",
  "key31": "2aoFDvKXvAuGSHfq3UAsTDPVNLHeqorS4QsuT49VDSPWXFwhE13GNnw8V8UapzFEx3EV6MBwaxtQ1Wm6gwd8yRcr",
  "key32": "5mAa46KFZSM4BsHWkTVtVk4dkTMUhgduGmcNRuDSdGYLL9Xm3VihHTPRa45uwPeA6HU4eqKRTiRFqGeNcrGu85GQ",
  "key33": "4wLHCaXaaR3tYTXEwTRHDKdKUvxfbAAjDQaPQT1Fxq7HsJ9cJBqNUpiW9ffmynHq6GARewXTvXYs8zuv6h8RfpFE",
  "key34": "3yssVT3vB12EfUrNRiecFq6rpmsncXfduiqpSB4NJUwidnYHHAsAJRQ4xWCX2gX97qNZERSi45ErUumnG6h7tArm",
  "key35": "CG7iWhbA64KbsXvMg2e5NJzjm2Sm95sxXBj5aBhBQSydWHUgTPjNu1WJsnhCQuZpCvJqAxeqBuoRd56RWKmeUF1"
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
