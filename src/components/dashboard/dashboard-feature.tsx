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
    "cQ3DJbfFRhZFLbRtBkQXBdAKEoeVb451hCsk8NTfgY6niJ8yi4dhyX7rPTAnFid49EZ8zWYCYAcnwGJKfs3zp6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JpSMe8sDacLTW6RbQNf7zKgHGPRdsaL34dY8N7yrSbJZL3rsjS3xfbUB6hfuWE7JC6DGrJX2ztsTrcuFNL1kEEB",
  "key1": "3EFHVtdDRTuDayxCRdUC6nRjVUfG22nmb2sQJbzgBWQ5xBBcRRWmzD1dgn9VZ1sozRQXWPc3DgkRgiXFL7hCqucz",
  "key2": "5B9St8mYWfKfX1aD7R3MpSzzRv5aa3YpTBkuiUGu83C6dGiVZ8mTWqBDkPMPYF1hdPnjwMphi78qJokorFE3Yzkw",
  "key3": "5NKxfiHuaP3ka3P87DRzGH8FuXrteNXuBQo4KLmJ8uvH5Wrr8fEFvU9KLzYKYEU48d1DxFmaPQEGFJnrKNsRHNtj",
  "key4": "5VScP2g6bNxCzUxffAt7J86jLk4RHCvg5GxPE2ExkY4v86fmYLVjWNauQJ4TvCnjv2Jr5AGsKsdNzni81J37sKG5",
  "key5": "32e6Ms2SLyM9VTD43rsC4sep5k6agDNa2jq1QjWJeuE2HVfDgoGFhjNxti4YpELSys6ysUHuJbWDAzR3bebDM1Fx",
  "key6": "5MEjJFips1Mq6FCNZYxHKJ4GZkaZ5dQ3NuRoHnQ11mDNJDvbWoC5PerUReMhVDvfVHDwNBctYCEc958ZhKQK61Kq",
  "key7": "4rJ79xGhNcVDsvqKnj1b5rHq9DWqPsHsuP4e6eYgdZHxVnJZNjF6qQ7WL8j5sFzLMiwnX4dKdRWYdwsUAE8o2p4x",
  "key8": "2C3A2wGrdM7Nw41owARRpQgoGj1MWC7nZaJxk1UbAWKkTaDFXCj8jUkvi94ctVwu854ytWxPsxpB4uvNpu1A4zuG",
  "key9": "41yhUifhFHYnaEDYww2fcKfKSdbQ35Zm4u2rG3NkZPTD6u4xPiWUwcyyuuipksdz5hAQsVEuzR9Du98RvPWCWFkA",
  "key10": "2YHxbqey2aPnMRuedBEnAhRSjfjQjQ7sKu9X3XE85dZY9UHgTag9GWBDFYDYi8rCVp9Dcew9VU5TZVKhRcJcw8Ce",
  "key11": "3Prsrx2MrwkcvqTyRLfswd4WdyDhWhwoiU8qrbDTLLvQuaazfsEbshShejAdwGGbAq61rbtUER6FPbpnzEMvgbpx",
  "key12": "41GoSbb2hPwF2uwiWJLMPzqswPghfpzk5jtZP8nyMwer14FfX39tRJJeyhCyAJYapgjyjF3cRPKRkLkdBXF51JUA",
  "key13": "4A4uGWuVYVfWhCWfhz9KZffkGg9eTd8spP6uyehmLqxYAKoTcjf7dbJ7fFgM1FCA4HyMEo84UL7e2Zjh1gMhHuAp",
  "key14": "NS5EyiKN63BXZZLU1VdtxNBmfnKvM83qN49cB935aKRMHLXbBVjimA2EGmhnRiJrcn4C35aAb2fPqmAp14y3VXk",
  "key15": "4tSBWmmKsufv35DUwD5BnE8f6fFewALVj68hinVhrUoUMeYDryazfXR9kQb3CVFoD5vikSALco4msvU4khQQ4Jgn",
  "key16": "5CX5D3fzcxsCFtNKTiZggAEd64UAotdW1FbxsdCgBGJ4J7XoYCR4Fo4ELoA4NTeHA3iKrDeVX4KwTFctAEMwKq8Q",
  "key17": "1YYzpmjnpFxyAQC9zvxNpd3nv1HB1bEsZfshRzeRrD8AMcJiWjfb5C2C1YkYAH6o28CNDk3MRhkoHQtNsUJLstg",
  "key18": "1yPk1tj7x7PAntLytQ9MswxoC3tRGm3ybHsPPWqk1kRgsLoNioAfUzZjm5AwHs6Vh2ZSsT2TmSNRp6ki3XMMksq",
  "key19": "4LUHvMeCv3W7ADgCjqzKud33iDdqPDaj3MDwbWRLWjhm1WRpLD2q41SxZyBzbYV8ooHzhMpNw7Tr2bd8pfxXB5pT",
  "key20": "47pAsiFJPpupJaocj2cz7JBgKWurdb6suZNYZGTugkiP81TMkk9AFrHTnvgXAAYeWTcVd1DcNtrRxPzvAZ4NSu7d",
  "key21": "5KnrZM8TzZYnJhvtLH1xMZZQndWpNDddde2WwVwJMNg9bENm8LkFeGd3HVaS9qGmiHyCdY8YKbTtN2kv272MEPL8",
  "key22": "26zwUsu6DzdzeV3bCtjo46txzWjZpD72Ba9CKduuVtoQf6KBiYBMbDzxt1jUTPj4LFhbfwyDeJHgpPKSY5u2NyPc",
  "key23": "2qbzezb9Y1CRh6DQLJCY5Yfqc8dyKj8XtU8Zqkt7oCEjRfHb7ekSFa7SwZP6wXUJDMKCrDjdYPuxDLtcipBfY56z",
  "key24": "5w83QijVcJe5RuqLtRXJ7gS6yUqSryiCGui419mNoVJhQrZTjTKEex4NNSQNtdnQsX8jBQgjverunmTf3Ra1GuB4",
  "key25": "2pDuNhiV61wz4UwiictcKUvJ4KmxnWZuRFXQ1k8buQXPZxbUEysEoQiL8ruU9ZBCxXTTPxTSKDEWqBDMan1Jv8AW",
  "key26": "GrH26kQ4EbD9VfzARA8PddZv1RjM3tBjKR83LQCVCLGfHK4c6NR4fgF6Ju553kPhJ6YdA85rjbiQkzgZ7yHoX9f",
  "key27": "5Rwb6RGzNcHrw7rFC7em3ycPeMP1xYugk3GreFCMeYYwPeuzJ68AuDypnYADcdjDtqx73jw9cdiFtJkQmsaPzTd2",
  "key28": "2WMTFJZw1HuF9HKfmeGLqyUDkhftRvBucQwxzq1mwh5eDng793Q2XBv3S8LsivPy7WXRpEpRj5yM9PzVCpgUNN3E",
  "key29": "J52v1sQ7emFcxUbajTbUt1XLNr7PH4tgpBrXxLAjYVhyNvmEnWZyXcPi3ATEHER1fBWePWjvFJ1RVoBXoP36QrD",
  "key30": "3wuPRNzTUeNDzMsUFqxGHY1c77QmWhaT1Tm31mpqHcw8iZphsMwptvtCtnRpPA6VSEcQrM7izF6Mx84D7NwU7gSu",
  "key31": "4RrwhhAQBRTxmeAevXgxWZjj85UjPzaTnjioGw4gHMYiFLWLey1fVcBrCn7RR4T5EFECNvxbMz6EzWUmTWcWFH8P",
  "key32": "5rbNxxnSwqoX53fcSxEdbe2cRfcL5tc9R1y9uCbUzFN6Aagka5J6mzqpep3hp7hFdoAknSex65A3kooDoYnM8wLX",
  "key33": "5Zhiw9U4y76WTQJXpr3sqGDSjMbRksk7hdVCYU7eRP2uunqmpdXTRcXXYwmhTEccsQdGL6FRBmwFyosrAeUX3Ljj",
  "key34": "638vPFLQXsVFR9zGszj2qEvFBP5ctpYoguerRsdTRuhcCBNJJSx8jPZznD83szrXSTpW68yuYhL1RJbUrX7BNFVR",
  "key35": "4dNL5AKXEBjheBXCWiYYM6wZEziThuEaiHM2uZVKEAvS4FPCdrreS2UPucz2KwQQATVtDk1cwso8LYTiWUoFg7yo",
  "key36": "5Bfgy9X2YyCtTG5wc7sfYNJtPUegJm9VJWkZ4U74qk4zDLZStuYPy7PTZ5aabfHCzCTMqZVkzDTT5xAbcUvZXUFM",
  "key37": "46REibFyxmhTGSmFrp4Lpbhyd6JZGNqBkbT643QpiHTrFwn1QZYdViti9cd385xE7ovWA9iX3nUjzfvgZJVLmm32",
  "key38": "4oa3Ao3BfK7merfSnZTkLpGCuAhNKQo7xw3ERi1HFDCrz5wnCGSVieo4dWqK4fWFFND3bfhVR4r1nqbUs5rt3UB2",
  "key39": "5S8ogoLnC4YNxaasitS9Q7DHRU3P9GTQqpYAQRmmfwqYZArKGLBZLKzEgr51LD6zwJfcQu76RN6baF4CVL7kee1G",
  "key40": "3CXHWDxnqvV6hX3dTc1q2XacGF3gj48A1JBSrh1BJzUimSePPpdBVqbD2ZvMA8R7ouaZCunDv2kauckmvbTaSF6x",
  "key41": "4dsvv3bUuQXYjPkukEFzmEV8z1S45RZBg8o7hLtfJCehpbZjvsqo57mkdDybPwAYyWGFT23GCWAFVYXn428HFBAs",
  "key42": "5WVJ5KQDMGbK4JW9AdDJEpZt1xY1uh6pwYvT6VzogaytQuAE2fEzsD24qxJSM7a8ppvQ4kDCVSBfL6cdRmg4Yht1"
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
