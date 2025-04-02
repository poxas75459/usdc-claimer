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
    "5jX1mTzc63VBx4Sw449YFqE8gfPK4Wj5Y8D9aCQcCajA3n1djN6CJcB7gHdS5ruot4Ls3S4JWCMtu545pGiGKKRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "498UA1AyCLrHzVKGibCHavssuD6cDHCG3AHj2uehjnX7pfy8x49fnt2D36rd8TdDFwnHsCBJ7JAFFGDFRH4mD7Lh",
  "key1": "dCdqbXnZgxmRAiTySJofzCsLSrgGcpNRZSqCqxN9Zvf8Mk5MM1RjHnyvkgDybhWWboPcT721o8Zwn2zh3NxMQHf",
  "key2": "4ycaD5uMk2mVTMsGTKyhwXBtMsps6cRMuydgfcodEskov3yFeon7ah1ENf397tTnTpAKBkXPJKEEsdgFWftWpTVP",
  "key3": "cb2ZKUgjXSWPS7uYKrPBFBmaxkxm64StJcTrbUUGbPqGE2eBTnLkS3tvscK7UNq9pHdWVcntt54SMnAirHUmoXQ",
  "key4": "3CFhLzuTGMUUPncLsnwe839whmjjToB8gScajF8oxBs9BCLEKh2dH3xWmnVGkLCiudxXy7kQbP4GJ2VC3CzbUZHD",
  "key5": "5xpNQVSeZjSENd1EMAKuTrY11WMciv9vr47MukWVVy2tPX2BnmHfcSiNPYM1PL5CRKSu45AC56g7p8y6Pe62Ju6x",
  "key6": "4AM1sXpC4Ana3W5CKz6mjcCFf97LaMPKJcAsgkpXWLuNJccBNcP2LzACX32zyFoCCMgeBqN8nwrqPsYfp9KiXEfB",
  "key7": "9iQ6Poe3AL9qdwe8pAooYhjYZaUPnms4MHS6ZrXsHvYBi5iv3NG5SATyagm5cTKNaomvdFkoVdzFw18JLa8zQQx",
  "key8": "3K6ci9wFSXx3S6mnLnbniynhe9cQsJLLQvq6KTVeEWmHWCuKJueE91GPLMYqr5VRouuvNub1F5WENuCoCSybnaRv",
  "key9": "o3jf7SKbMHw3gbhgSw4cqfjCGHNRifKUnHVLB3xzXZ1MtnzMiE5Fk2fHHGmnTthyz5Pj1StJcwucy6KZ5Q1ozhi",
  "key10": "4zS22HeTbK7P9wmXCiioSguAeB64mvL2QMm5cH6HZpkBSnK7qTjF1euDHhPmKYLdt43qXz2JD8iqTrrhSqFcF6qx",
  "key11": "5rqe5hctS3uqnSpwCwteYtpRhfH2BUaq79JGFdi3gwtuv6ou4zdifJGhkZKcFxW2HSK5BnpSmvM5YdQUqFAu9n1i",
  "key12": "4WdSmTWjapyXeNhsRTMgfXLK643NMwbehFGv5qoAsrUveRfqbbvZYvfuNShyZfpDhxNoLKvmZemw1Mjj55hwEYVe",
  "key13": "wupVzvedWbYaMiK8vcxQ9UysHT2TsLaPkfJvY2QndRZgJX9aTv6yoG9DHnHZxp2NvXueYgQLWY4YgL28BGRAEtp",
  "key14": "5qxf7GZS7CsSqkQB6788aofSJCDeUfqm9ewgKs83V61KuU26HMniZjL1EFDRJ1zq4tU7hKxHtUqYUWXVLbJp3VHr",
  "key15": "V6w3XHPTAzxKaxNxRRHu6Jw69uktNhyBvFZGPYz6DCqz7nBbfEJUzPZcF9Xm18puPpk5wd6PNMtCL4eBDdFig9L",
  "key16": "pMpok3TFWEvpU3stJSB7yca9VdkBHsFtZCsw8DJ6RBWGAvjPG2KCufCQGzaPCVo9WHULaEkr6TbPZjNBPEomgLp",
  "key17": "2UTncnYkv7c4xDfX61v8DrPdvjgKQhGXhxK81vLFyn85nsh3xdbKNiNXfaZASPNgJyQFo9iAoBmXzyzExF2UvCFK",
  "key18": "2xjSu7kUAMSocudnxVUx8Brwwq8KKrvnaeUVtNfV9kPnh9APHSd3qqchh5LCpvVFp9QjdhFWq4hdB1s8mz4VbteN",
  "key19": "4JCQDz2nkLnqStbhUx8xnxkpH6UxwRi7M2YKp1fcg1rBiBwgk6AnjGnQkEbZ1GFXfn6YoWChvJSkHmooB7y6i1Mx",
  "key20": "5GFqoBp9Dty2s6NPi7eZLSfr1WXAcaeUdNLGNH9n1vpq3asfGGRX8yDAGmc4UW1bKZJXVnrq7r185sDjq6KYKSuU",
  "key21": "37DNcuGMnvKQQcRD51gCTMFQm8hrpNKfa3Q7uUvGjcoaHUAazKPecoYh3CMRXYWZSY5FHyaXumuXa8HK3sS1yvV8",
  "key22": "9CzADpfQ5ytVidgPxTDUGbrT2G1589VD7hF4SjjqAfC7NRB9nBfUPKgwAr8Jg9qBP99Ec9Z6KA7BcmhrnUBt1Df",
  "key23": "5vuHuogM2uSdHqxZtLDHZnnUap82NaR4fAPrMU5FxsSGAuEtT7o8TvfxeR6sY8maGcJhiULarEq4pVbwChLq1j8p",
  "key24": "2qixRifwyRqFMfy3cFG8x5Rpu5GF7yFgWZV3r2FukixfZUtPfNN3vfJWKC65LwhA6ySufXaP1pZFj93mdQk9PL4t",
  "key25": "2dun4Kj27NdCr3WTPBdsnEiipzcSRdzn24Pz4HJb7Vja52rHHjee9hrGoxm5smzZbqDHY5A4k49TAJcNSe1AgQqH",
  "key26": "2a49bFz1vcCExY6oXL11BBb9i6MQiwi9qgxupyjtMwaGYg2mXUyywJACfJuXnx5czxHzYmnx9LRvUVXPLLVhfL8D",
  "key27": "2eTQ51uh224ux2ZNpH57CZ5Nv315YR8meydDV8R7hdmheZZSYTTNTVDetDBTTXqiWJrimdAYu81tHWgrtNQRJtaM",
  "key28": "4kxCjHeye5kTvHBk1LdSsgUTMEixHhvpT9Y5CaFWpHG3ievcTWrrYkvQZYDrNkoJBXsEmoQuqqijkPKbZSxmMAP1",
  "key29": "5At1Hh5rzn4BdCeissSwfD7vs11bnrNwA9JN3rHR6rpN2nYzMwSdYcut7uyMDxa8BasL3bVJNYwYpU97GDMKVE4w",
  "key30": "UGDRdZUaW9zAPLYD9No8fhkV7dUQttLpDcQTfKKUio35uJ4sx9JREDmPy5aXUuvRCLXsWz6ALhNRUTzMA7ekj4w",
  "key31": "4VXxz7DmhmhbPPJGoC9K5B1QkociMmobqGJSKXJjpnWTZUjYHp7ZfNzh7yYmAG2Jc2KgnaUQJemZDsdoRYQtpt2b",
  "key32": "3dwXd4r8wCNkgZFS6tWbtWo5pC6VbvG1WD1xpoD3CBYnJbratbcSf5GvzPaz1xNb9mmeVzTo8eSTUJKxMXvtzY5S",
  "key33": "4PYw1Rt7CPU88MtdVAG1vo31PmBB9ZhenFuKutjvtj7vAoFfVtjvQ6dUH6w9nnS4ycoQhxPgYwrF7jExDUz3KyrB",
  "key34": "2mDEaibGnRvCfhSMAF4MQ8t1d4DaRrRERqrS8G2jy3Pdpnge3fJ9rLnXynTAoWHS3LJ4mciD9EARmb4iDT21Vg5t",
  "key35": "5dLzJxS9Wg4Asuy2dmPZpyTP5hpPNBQqF4iPqTdbhaH2qmKLgdRtPUX99qV78Z7DPFniJzqHXcG4LvdW5KaEsySz",
  "key36": "46cQixK6QxbajePiHNvxUNSr4ueaRVLLNkLbtuwLNvkAREMg5axGxFirAhSLYYyGf3BTGBDKJvCmPqc98az3ZDmm",
  "key37": "3k9A8vTh7R6R14arpdQaiADpy3jYs4DtpJsDFWtRVKKnCpcK2nbeXr4vqtdscj39KC1r8UjZXBnB73bJCQNLpbvj",
  "key38": "62MEfsoF3PHe79SJUV3ZvRVmBV7mur8Y7ox8M8v9NzXMUgYCW3oyywkwPqM6g4HyuQDTnVGenGsi2XxytwTe4Phw",
  "key39": "2E4cJJkhHhhJzCEN5vPNpcp21r39JCxF4xE5jAkj361KogdMUsmXwodbJRAgkFStqBtH6EhmfrbHDbx3LbeEmk7X",
  "key40": "5zSmJx5FPpwug9amEvgGk5YHediM4jQi1wEk1tRTr4ZqHK8DPGXP5rJC3hAzyWPHVvfz9RQbWQ1oGh6QaJuvzLYe",
  "key41": "UPou6BWYr4Cs6uQxCWFmQdcP2SsEJu87qD2HEfkXHNSR6KLHUbodm3B9wYj61PchS6K8Fpd2V2ednhZRhXx4yMz",
  "key42": "2P4LMy4Rf4tvDzaKNoXrnqG86qRsuiprhbZia8UWuzcyvseg76u9HGFhridDwwfKJ1agUCb7CpYjGvJqvQoFBMxj",
  "key43": "4L1gMk7qKs4cdPKWvndBLzbnwKKRyatigK8g73gwZtzxWRNy8cjHiVo5aY2MN73J8JxF5hTVu4b3Cdx9W2uKs26i",
  "key44": "3hLcwZMkx4YYvUogArRzCWU1hBwayW6iUPsHBZ2GxL2J6uN8NVcS66awvTiLJustzfdxLCRNtZPMZRqNjpjJQxwK"
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
