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
    "3X6rRPeaiQz1usBr7o22xrwUcHuekhVmEJ4EjMNyVsjcR3joGPpkDynKuP4LDgkKaxuv1JxGYdJcExMyz4pFAyMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wRWM2wo54Wcoj722wKr3GU6QLYnaX7EWCmUwScDLkmwDMJJaZ9iSvBSin3AEgaKYVPJoS2yRiMrbUKq4Qibb1eK",
  "key1": "65B4fk8m1cZC6wazwoUeumvbF1kZg5nsLGk8anSaa5PUQtYhQeXooHjKYRaxrKfMCrgKerDG2oGsEu8HoGRFoSAc",
  "key2": "47fXJ97BTfXksqmkaMqowsPb4BJ9Cnq2Jx2PvdxHEKb5eBo9HaBMYDCRhhiAigzPywpHt9KtGxaL881f2C6chrr",
  "key3": "27dpa55LQqZdFNeWihBu4oEFpMv8m3UL9cxNg6ziWQoao3nvdUUND57HwAdzEWj1sregSZzmYo6Xx1FpBes9kLze",
  "key4": "4czBmdAWX8fC1tL8zk5Y6v1dLSn7uocfh3XfzTyK1v329krjjRYRMyqiMq8uURVE1vqtmez7RWxh1BeSBdnSCLq7",
  "key5": "4YRkZo9U2L8s8bvJyPSSRKY1vWVk7Cd1zyPdzj2HciFgb5gLj2ze1TR96apLycPsq26Mi3ZPQExYiMJGDf6Ejab5",
  "key6": "4ryytF9VQW39nANjbGrAo61DixbA3F2rDfhPpDvwefLwYLS3hBE1UcfdeZ9aCPUD5NiUomUQPNNfbGzxamSGUDqD",
  "key7": "4rQntiTp6gSLuYnAAHfVFXqw83cfcenZAPG5YGPcACvbB5b1FFsXjLZ6GvFUtjq1Qg7TT53Yq8bwUvjpT1uBoj3z",
  "key8": "3LtytoD6r8udeHy895xSzWttQR2KJAUn4peiVkeZJ69pteWfB7N5P2MyipxfCZv27Y18oyuVuUeFDaNnunVQ6yLb",
  "key9": "GNf9kCDdTEVNdu78o2u5P71dotLBadDrTRksHZFY5BSjbAKDvp5gnCthjLWnusjppgWrQGSkCwbquBvsfMXeofY",
  "key10": "4ZkpxqXe1WD8P2pPe9CHX4qnGEwAc6ib5RynXEC8tdHDWQQHUP35QUn76WPufbrhdv2QaoGe12TtJuzE8SLKs7ZG",
  "key11": "4X49TiZzskgaR77nMqp9TZsPeFPuqhnKaMNDijnzxw1grHkwijJnEnWqY6nc9Dvxg68MFhGNkcEmpGY8kZGMa2Q9",
  "key12": "4Wjjwd93VwK5Q4dqSJNyC7iKZdoW1i3fCRWrTHBs7GwnvboY9cYrb2nScXByL1Z4M2ymEM4Q9waCZma8SHpbvUff",
  "key13": "5cGo4Pmh8Rxv1WU9dyYDZ7j2vAmiJtwVeKDbcgh5JcgGjLSbXPUJYgBRbdnaf7zvnKDtCfHvJ74fFGHNAbJHXjLf",
  "key14": "51bFKiMfu9dVDnc1JCe4YP3bPoLimH2FJApSfPrSrQ2AKPtMaZn2boXSGRaB6VdyVcdiVjNLi6WZT7tpbJHWV2xq",
  "key15": "8Rki661tAumuCbzY1Tco7Ts6RaHqXSZ6f4V4jabi1S7NT3oh7VZhW6sxwpTMmXV9ycsLc7ZAuB43P5A8g9BSb8z",
  "key16": "4EmYBM96HyuYug9wD1aZN8ZMKG3GuzKxuH4qhKr5tGwTVudh4MeMfk9J25HVavffyaVXkx1VmdP1m5P9EuUoREkD",
  "key17": "L3WMbFjTDDWXBrczjxH5cTwjm4tYDc4HiKrqug5wD6niW5HLd8BiqUWApHyHdMSb94FQ4D35XJFF4MUob8vAvRs",
  "key18": "31xNAgsApoe91NUoiN5d94P5C8wBLt5VqB3WuRooc9C1aK64ozGvhiaJNvK4zYevdefmD7sHHrU9AHcT1tZmFa4X",
  "key19": "5b89FK8HZzKFBzTFtopQiWXwdHT1aWRtruSoYagFRrrHuALJGqNPrVHgGcq4nKv5VgFPzwdh4CQYHt1X8NfFWgq9",
  "key20": "5YzAd8k8uv28NeYaXyqutnE9UcWWyP6g2q6pXMdKeUFNVPK6bZ4mbEqzvhhRm5e1oKBFnKrsiMVWZZUFPE1tu26B",
  "key21": "uFUK61iBzZ5AdLZt8aaJM39ZwF8s3cHUNpEyPFKfD2EA1RPwuKrc6m2prUTR5gEzTzBCsrbq8Yj5mn2cetEj2AS",
  "key22": "zq8GgbwBpbhP2Afwar6U5iBrbMYPN4EMbCQhHShSBHzvZ2NpADScU93LNzzadP6oApAU4YubmUAiL9U1MzjM67L",
  "key23": "5CKGfVT7Ev119kTuX6AMDWQnEDNixe66ZeW3NonwAzFkSAvnDSfDKgZkFHqQ91GR3mjcWeLpWYHVPnriMtrakxbd",
  "key24": "5hj1gV1gRL4HKFVaHyRbbQQYyBRqudMNjBpPKonvbXkiCSubWDjniZgevJZgqCimLTAJ1snormUr73STWxtrdse9",
  "key25": "45SFUWuEmNWyb7hiVQB1i7jpzEGenWdBzZCyUimEh28o3unBSp3wMDsU5iSNvM3SgWTNd9EbA3V69qMdm4CXdT69",
  "key26": "5yPHrnkZVwdxHNzcSkUkY8PLZDA6TwbGeXsmJNeynhkEEvWPt2ap8qSS1acKcqPxQVGqSMu85JWkVssvoc3ksXKU",
  "key27": "5PLtvSX6M5xbgiEwrif1ESz6ZDZg9HXtKRMJibj95ocNKzaNQcKQ6XC5VjvG3zx4FpFPyree6C7UE1WJLvpAWpmf",
  "key28": "4BVVu2C3vM8DSkzLNfoa8ZwPeTHPWRHdKiDV8JUszxYSZxSuYdFRhM4qKZkXjsQqgXLx5dPTtUJSvurra8rEmW4L",
  "key29": "4iYboBw3W5s9Zz9CnrTisjtVeWJcEfQfqKuqKE5FsS99ZV9V4mCUXZVfzWjMsnUDsQ5RgyMrLA3xsq83Qst8zoAg",
  "key30": "4VDPN1tSj4VzfVkotYmXmGzUwPJrmcSSRjrjh1j7AyFk4GfrhRs2AtUqTrpCqSpBAHu4zg5cR5Rj5juq7RBtTaLq",
  "key31": "3pyrHmmmzzBBut9nF5Fkm6vBzJMzJqScdJnJaKYbEffxUEr6BUt9kQEXRvNVaW4KXAjNQtxmgyGWn4efsryGgQcB",
  "key32": "5NsG7GyS4yv7ZdGvrxDoRbnawhbG9BnHMFxbMDD4Tuf8eA3ptjafjW1rnaAkewyeJXVorKnYRnHE3Do72gcNvoyR"
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
