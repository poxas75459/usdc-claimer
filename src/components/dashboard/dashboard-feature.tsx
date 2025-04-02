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
    "4PvAAjMwfksUV3uCjwC83VzZ5wURHe9qdbUXXmkYADxYWnEWva56sQ7Riy5stDQCbniwWyqxJdhktSDZdyoA7vvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mUfVz7w6wTFGbCuS7eGggC9A3PyTyzyrvQWy62wmh9EtKUY31BB1wMRrtjeCWYGHSJrPMBFLRJZiKG3j5BqbCPp",
  "key1": "2YSPa224ZSYpUSbKVpgsdfwxpZnE1eWdkV7TXhLMyftVHGs7x3hg7UnoeC4tEWjTwE2ZMuC6kPCdXKAqu7gzbW9X",
  "key2": "2ftDdaxqqHuCSk2UK2jvQzm5KoD1sT8DBjnLoxaUX8a6D89n72xMuZYLZCafsU5ng1aCHnZaPHDXbBwATxfrj6P3",
  "key3": "5o8NBLUUG61C4XDxQkUaeN9qe2NtMvQKdN7CZ4XQqdZ1CpoyhHS1QhiJHqNx5QuD6crn8c4UMeDLtVHZq4LpTpMc",
  "key4": "47upGeg32Jgcc44qCpa7LXApqxBSdrhkrkPCmFsXJFd21rW2gwanctUmG837oSyFUb8a68BrkoSLVRJqNdqyToVk",
  "key5": "635K9VpsLWNEJY34Fk1DqQPDLuTBoR3tUk7Y8JBkrWn4G3yPCZQVQ4LSdouYX21BYGpTdbneBepxGDWUc31BeJeN",
  "key6": "41nC29po2PgfyvXdXCwjfXosLXaD8Qrev7Xa2HACKsJVFaMV5yxc7gK1kzPRruUWnwPwJmcTVYRLDqjHdJxX4mRx",
  "key7": "PCzVfGvKjfBCYcXGKiFB3kRF3HQgrqkBvvRKaaCJsuBeSyaezE4Ps6DmcQDLmPe7H7dcX5gS9gabRoGkBSFTTUr",
  "key8": "2KoYuEuHui7SV6jxU1wDwY23AfpjEhqPSkhAcHtBeKkn6deMNCayJWx8xFkDLmGKFZ6Xtft9MLr2bj4gb9Cw5hW",
  "key9": "67nB6bmCEyF2kNd2sfC1DYZmAFfDfe9UTGABEFCefXPXECTdCGkFjKp2s77ANgiZPfKHwZvKYnWnc9PUBxvmNd5o",
  "key10": "2Jigum7KmyfmsAVJirY6mtoQT4WaACecshemtZGMcVXkQGdfgba5A9nPkK9Zjm29jUQ5PAnd4MP6A7bh7bMnAsgu",
  "key11": "3d8eswfncrdGDgWMD9rWQuhda5P8fCrqmgb79F69BeybmDCEEGVMrmEeva47cdBnEqs1TL1V6cPDeq3ocgiKG6pJ",
  "key12": "kHXJnhqUyFr9FcTcxuS85xwdXVCgiRadVXqGeTZwtS8wgMKBUdvRQeY3coXGtEUrZS2W1fMym8gCf3gsqxfRubc",
  "key13": "3Aj74oF1uNaV77hhMozFdWfhhLBXbu8ZzstBNeieFBxEhz9eyhQSHMqvxtCjgm8miCLY2ztAZdhGqpyiJpFvpkAd",
  "key14": "4zRV5gE55x53gVcWVTcceDJA8cvJqJaz1Df6ViJmUwcssDkew2qSYHiqvC8M5LYxakeiBaujokwbNLTH7PsDdqyj",
  "key15": "3UKxWUcZhaQkqhX7JsPC5UjgdGguAMfo2vuBS7LspXy4fEsdtKpdWuVBUAhFxxSFQ8mcAdd5tuf6xNTfsb1uw9S9",
  "key16": "3zkHxJHehpqBGAvwWreQSytcUq8rrjcSKoz8kudym68FDFhRPs5LYnNh5MEJyL8mtHUFt7bjvFxMFE8RMhDspJFt",
  "key17": "3Pwpgx714aZAMCQp61F7TVu8p4hB49Bzh7sjNbGnDszzwwA2ayvDbxAkHz5TdrR62Q2fWBe4qmBssxTuABWLmQAA",
  "key18": "ESLZdAtrcu2STAAKAc4sPQqAYes6KgQjztAQVjPazP9bfqFREWP6rEPHsD9VzDBJfvEn6FEGDPUjwRTyKvskWys",
  "key19": "43uxGwCXtVXT7nSwJmVxYGngTyXfALaDwCHQWEZAgyoX5DA5obXYm7kuCBBj1S7Afby4Ae9CAQbpPFNgraNQt4Zi",
  "key20": "3qn1xTXiytRagp9paagHJaPwZuSvzmCvS3AT3NDxhnZZYjsJRcFNBNC2DbqPqDLw7aAhJw61vtn5QjvDaJCDncyV",
  "key21": "3SpoRzL9Di2deeurpkXu1uDB84ijXYSXAgvbDucvKe2tWbRLPEz5kKrsGZhpRJz2wXGQQu9rWAknWavgZz6iitrH",
  "key22": "57ni4F1wuuaWUcXaahvpgZof7uM9s5r2UvEQjDF8e2uxu8usPdrN1jNhU4nMYdeLn8pjgdATK7svd6CFJWLaJE15",
  "key23": "45G6Cs8UX7mG5zP9YU3jiPncMdRnSNkpy8EFY1LxMSA4ifRy3VqrsTTYzaC7KbEUngF5YseCmvTc8e4k8eS1BWEb",
  "key24": "65jJQmnPK3nWn77t3imEqQgwuC5tk3wtCdFx3KKHzjD7ibRdqK7AhDqG7qVbBoMpdeqFxrfA22JhwEmBUmifCD6A",
  "key25": "2TmrReQzyG2K6XdisikvfQrCsYJTkmPUeb97p7dK94HM1WuWZvWRaVicyfgCjDYrPVdHfQXPuJeeUGubFKmag2Bq",
  "key26": "CzjWtR4wEYP7SyUMhdBwHQSGt4FAu3LkxNK68c1Pj8J54PxUvHVKEiXhY92e15fVMKsKT9hikktrWwkYj9Hipgz",
  "key27": "5RYfZ8YSrde8WSUg15msKBuAN3qD38omGm8TS4ok12y5S6KV9uhy5akqXxzfbqQtftFFPEzgZeDrB9YyDTSrrDGS",
  "key28": "2Uy4keYTkxfQB7NFvGfTvhhd5grcTnTaB5ECBbxSc2STtyihgbxKG8aPbHhVtzfphDUuDeR9qnBx7agYmUK4ZXeA",
  "key29": "4RruYEzjBFmgjxgGLD4NuQEkVcdjP2VNupQY1R78d8qo8oMRzvi3An2zVGACpeGKE4GWeAipg2dU4LeB7qySorNe",
  "key30": "5EwDXkp3H5AffXKtHnbWF8Byrwe7aLomQyNu7LvCYkEBKCr7Bxp6mURkVwfQSmPaR1v6kd3vhG3erxevgG8Jxvou",
  "key31": "38gpQ2zfq6qeU9F5RSURaT1mfHrdd6VcZFjwe6G2Zh2rnmpSojQz29Z5Dn4TdKZKcWZhcwHUG4U6t1sxaPp7uCBZ",
  "key32": "3hjmVJ6Xcz51rZHUxStwm7zBFL4SCTuC5KH4ffPGqTic9CZ4Z8NdmHJjGTM2p5yeCdQCd3RvPAAz9KeNw1XAkDoR",
  "key33": "scxN788h6MiMutmep1t1Cqptqnc8kmGXu9wgEN9ZKGB1WQJpjPHxj8sAof46Nbh57tXkgVGupqPTNsTwKXhh3ez",
  "key34": "Pf9ent1GWPCH4PrEGS1wMB33RFiZPQ3GXGgm8dNU4zGxmen3LvfDcqwbqRT36V7CGrjwYv79P3CKph8cmsEKKUz"
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
