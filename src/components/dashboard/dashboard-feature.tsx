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
    "3spE14vdwnSA51fHqT6w4WHSKwc6YdXgB2aDY8snaSkDWajfmwQMLS1Z9touAYxrPNmf4LqoBSRevtJ8qBriZBWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hB4t5C9ZUzn8QPCK42CufC8KF43ZL3WVGHvACNXqAAEzEkvVhUHh8ZkJp212dHsUrf3Wis46rNxKLEuf5rYVpyy",
  "key1": "53JxksQhtYJGGBJhvbwvFHG49kozeRLhquiA3aD7ddXsb8bsjFpUrPxkHATzAfEJrZ2WELxKx4pt2LNSkcUfBrSd",
  "key2": "25f2NA5vV2kPgXooNKp8o9JTKbc23C45G5mqR2FwtPMqXc8fHUQqSSCMifjWpc49LpvWjDkufYEVqNkmYx9RRNcE",
  "key3": "3FrwP7enqpFCofdtauMvsYkp7mDJZUywdiD2CVqzzTvgC8e6tD7mvwfZkU97EGk9E86zCRt3fptHWr1Bd2bRkv5p",
  "key4": "sD43qqyV9fqu9wNWqzgwLFPhzEVySg5pWmF76tt8Rn8BzxqPvmcLQpBos1q2jwVA7ySwrUs7bu7k99bfumYdVnx",
  "key5": "3rn9tgadptRPGfe9u4SdSojdTnHYBWs4TPzngcsa3Xz6NiVQ1urFYoRvdEHFCuWTR3GKJuaQyYJ8fpaJi2zHUVUN",
  "key6": "K8wSS6P34AvCsauF7P57VU31HKZZWjQj41AMGo5pPzDXRx5j89UNCXK3PwxkbSqu4V2yG8zEssT5PApSscRNy9p",
  "key7": "553RECGwNWQWaGvTN5WzTPQUTmFGwJxRgeE1qQqTXJz2W5FJH8cLHqczhpcXj8pwB51BR2CjoHCX1ijGdipaBwwg",
  "key8": "4jK4jcSkKQrtfFHW7cv1Qh7J9mhRy3GAMJqh4DQkzeuaVz2ACKWS8QxbFgxEyivg4Db5X3h5yJuh9MYyFJAL9FKD",
  "key9": "5ChCEesutzPb7BPQei9yQrSvdk32Bw4AP7CpxM9LtMyQmAcXeu8kxvG3bforf9cAHFdbrsoCWoYfJJq6Kjq4ZrvJ",
  "key10": "5URjrAuwJPRYVjHMYADCoC2p6c3LuxXbA4XTuWoL4vHxpNHza56F28ctZet6f6xk9h7HAS9BKa1U8acKBDUnzh79",
  "key11": "5And321qnrnSptiW1SjgHwyaQzRCngudk8wDhzWdNJ8sxzmNWCJRrC4sKJyDFuinLfxsxWKCQyhU6iCukJ1vzqwX",
  "key12": "4ztS5EnmwCCR8vQANuE9bDCVinLr1TiegTKtekz5vUanoS4GKFjYJhzLbYHTDFywbhW8261G5zNk5oFXRjyGdbZ8",
  "key13": "612PLMiP68pgMJAtSymEQC2TUUkHKYjgqZZT9KovaCjAEFgapaJA7ADpDfBwoLPmdhhDcNowVE2MriKPiqahp16i",
  "key14": "4GP118vY3fvGhGmfwuBYRxLx6Cv2sPT2X4PPP3mCTKPnJZPAxmKHpBxU8XdFWkaRLtvDuJNdYzQ2ut3WtHWi4K8W",
  "key15": "2y1DED2YNrAFP6cqSboGaptXGJ1isvw2pAjNWhnPaAo83A5chLvYfvucVQT4NRuJaWwwr8jwXd7H2kQ4UPU38T3d",
  "key16": "2FuKg5PvQrFQvWyWaUtwNorGaoK21hWcorraVNfi4wmcojrB77WYruNPC7eY2WB6jV6Xh3pLM4pLDBAn4ka64PBB",
  "key17": "24Tb8BVzjybZnJaGpG4NPSHxVvD1AqDrv9ZS82EYQfeBCo6djBYfzkT3ajbveVmSam1wnt1dmeEuPLWz7CJKzyyp",
  "key18": "3nLRbsaWf2rHmMvVCy7tbW77zQcGfGwvGkzBPTvS92bkbP31jcBziH6iuzZxhJdFDqb36sknZpeMzFn77fk1P15W",
  "key19": "4rKQDUJVcTF5ZQ2cJE8ZhLuMaE3KydpWY8JXAWQVfmN9USLRcvofCWxhLmH7kQHyf25EdmFhWHxptk5vLYQ4PDFR",
  "key20": "2VkFN5td398Wk2Td82ompRS3ekoSuJeppczUmQS25nG4mwfSYjiG4BtdMAUohd7XuVk1QENjh4J4oZQhvtWiHogZ",
  "key21": "wmmmAMKFpRXo8Lyu954Brc7Pc7if3D9fEoFyLSbHK5gJEJ2wRsm5zxs99Vt3trPZamfvrYcoBNarx7ha9EaBeZD",
  "key22": "368UT3i7yXRNPDRPmc8EkuYuRvjTPdnWPjeg4ToXLWsYrV3ERbFH1gvDSjxnNmPCJtqPjyU2heCbp2D46YaJALE1",
  "key23": "PiymaTj2dJuP81RvU3DtrxVyqsRksBJp2KnPKWWVVJxYH7cTb6E71CAhdCXPbTQ8KaXWoCVm9qRzzaCrWMe6s9z",
  "key24": "U3j4x9aziKFWC6Ea37gYvXUDsTRNhkRPPmjjHCS9CxBZS82SXEU1PifLL54PfaELR4GN7bt6WmMH7hWgHeasfBC",
  "key25": "4hacDB6G4x9bLddsnZBmJxeUf3HMv3G1PDPFxcwULVgHCet7dicvt48jpjZhVXnbShndNnvMqbSV7f5gmrez2j4H",
  "key26": "45nXvFXUwhGMKEYTqpLHevuetWsuFSYhHiXkZuL6tQJ1SiUEHXJMQcHiJgmRvey6HkL71YL9oQXh8vtaeUTtMAq2",
  "key27": "boCzDegT6owui9kxziRfxDfgzAhp5uP1vzEyYQtbbiUAAdvYqvNmAswicqCYzipUu4sDh3Xx1vfmjqUAYoNfteA",
  "key28": "2iwNm9WXk9WiXSBVDMu2mp4LPmbWHdk7SahaDG8Fzjh8LHHzTG7ucuj8r3p6NRRSY1S8MTCBnRu1v4yA5ZGdfR1B",
  "key29": "2wUoUNVKqz4HRJ21HcNrePZjDHMWmnMisijDjtX2tu2yfqzXnFd9RbCsx5FWBKj1JcToPqHmXQmRwJ6FFvHvaTwF",
  "key30": "5FRhGqQXZjTZ2P9JhTrHMMZxFHBGBGQGYRTrZegJB2sMozA2dzVbhFJcMwtFjsVkNb6khcSzY5E1HWS8xuqsGVRC",
  "key31": "2xL43cnNvGFVRN5uc5kU2bqPZWF8y6b34m8rvFZBQRcXFLycXeqNSyyCwGJeXgyrEFJqVgGMXvLkXgVwfiLDhXKa",
  "key32": "3N2xgUEsqzFUSWA2YVgZ9DhYrSbtvE9WdHEtykr8FGPKQDBTNNJJreHCkapvY6GQyebb98t34judfGCSyEiKgZsc",
  "key33": "2aitjtSPY9G3iF7kGng6cTzrTjTRDSN48YQ7wJwrcH8JLbh8evCCLq6ngcRHckaL6S3pUyeq1UJEmH7k9bJVzdsd",
  "key34": "4m1QLU2t1CTdf1TTZPjxLVseKtV7JrRPZMZPozrXnaZc8zLdpKoERFAkVEGLiCM5SvfM2k9GfCRJekppABgpxBpM",
  "key35": "3iN6Bf4M3bxszeJbEa7799ur3Pv5paesxZLxbsgSipMdQN3BNByiDwySQrT6nsWzeb9jbfopT24cYVqa3tw5oPKH",
  "key36": "3daBL5bUivEhXMppZaFRcRRdYGv7HxuBXhjecDybgnYirVnbRQK4bntp9AqGamv5Q9ZU6NGAXyroBBa6cxuxsdw",
  "key37": "24bjtMmJrPbP7i7NQbU9DfkzWZ34mqvXUF1fynKMGGHpzLhc7Jt4ciLG6paTbaPC3KHJHZnyHQ8cYCQn9rWJYmS1",
  "key38": "2FNj9ziAXdBJqj9jYB3mR28UMcnz1mAtuKgpuwffNCfnktT6UHu3aWq8ywR92YzB1yx6HxpsvToDhrST4RW2yxq5",
  "key39": "R9hqL3xiCd5Fcq6peAVRP1iCWwK8H22KBzC6C2bwwQd9PRUMJojC4FNgb88auamkukwmSJmfZ6x44sY7YVppRxk",
  "key40": "2hM3ZQjTWBBecKXuk1K9CYhyEbZnLJ8bqStybcTU1tGpWvN5aLPQTsJ7Am5shJEZVvbmwvjrjexeL96zbZGoMq6F",
  "key41": "24zZTMc3o8Rcn5dRPo2Hqcv6UgfXCMZuN1v2gQ7rR32h36ythU6qkwqZcKi5cmysvGLd79J8rxfB2rd5tFNtTUdQ",
  "key42": "4hY58uaVx6LCb7MfvmYEB2uueR7DirDgyjwst7Yh8QuE1XJ6WcN78zNszyremGRKvbDizn1zwqqH1SAhkMXFhXPj",
  "key43": "4gUaagVUYKPSXsEW8fPJyBMRhsztpTNpmoZVM37KvT1Y7FJ53WDGRuqnLzs8qC2LeUpefC1kccXgZTf5Qc4TLTiL",
  "key44": "4qvLCMjR2fXHwdyq6EdDz6cbqHAtnjiHdSxjX9HErBKsCGpYnbJmxCiaBEm5uRYXruGA9xSr91NfNirP5Z1NXrX5",
  "key45": "3nKcvpC32PwBGJFLMNFV3Zj1KUtht1Su4LPdFqRW41kc4LtrSF1trvEsMayCVyuK7H6PDqEm2jzfDwYaWLP4rYSb"
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
