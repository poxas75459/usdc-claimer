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
    "md1c9w6uuB2rjPF5fFhHNkqRN1gkAGH1Z1dNudX9QD5LN293s4uXxjWz3onYsKvr7CNiafufkqHaGLKyiTuLhCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qmVnikE6ByGAeKTpZDXBseDutuFQotNcgkPUsvAAzvgg9RadxvFmBDpx9KcKfPH1pABWtEcj72xweW4umEwKQ22",
  "key1": "38ecQtq2tPPXqR2xp5U38qRBcqeLbhc2UpCe7ozuf4WkiTWQpQHDhiHVmZ7EmBRwUn5mAEcGmqPZgrCFNvvqnFuV",
  "key2": "3S6Z3KEZo7pEYxCGGcNsB1DDihjopRu79PJZj7fYtrLcxBotCUab9uGDgnVMa6TutDg2XfG7PYtbXmoVf8zMvJC8",
  "key3": "4W47KDH6ehhpd7JpwEgLRpDZR5dH8Mt35paZGAXeqyuqL5phfhj4SF2XAn2UEV48JwYgHEhZ7ZNdiAKciFDdFGsh",
  "key4": "2wTxuS6iM461wZeoST9vZ3HAjnst6goV3kjwLHeqDu7MPHUNtoJJWwj5f2Nd3U1eNT2azQQy3QbnHfBpBrHMtka7",
  "key5": "57zFVDeuTtgqgv9SSSQAbVECxtWqB9o325dG92TvGcth4C8nzhHFcCeK1CqoC2JjaV9WAqLH1JMwEnVamuQydPwF",
  "key6": "59hgj6YtoZvMbooAEDNTtEL4LPXDXkV1jtRdsBFgNPsfFqh4nEV4C9ExEd4mNk5C1Wm7e5Er7vEQAoSooCsprsGL",
  "key7": "538Rrp6wgp9J6tTBojnzYKxzE2FQZo1Fg6FhWrRwxY2JZFkSUf6SpxUUFxcUGoueY9yXPnhKGixJEdSR9a4kEaqt",
  "key8": "peq665pR7EGsGjKeyKvhTVM8WwzgwkjySRpHvMin9mcPbyzvhra9ST17ZCxYNtgKj17quUBnasdt4oT7ZyKQy6E",
  "key9": "gxJuYCVeBJ6E7j99QxQUGFB3Re6a9bLj1V3fib7chbhAoc4ws9vWWbhhzhoCMAEREem5dB9v5PeTtpDe9G6gQ5W",
  "key10": "2U2HFbkZB8dHFYd6QzLmduDVAttxkiV8kvB5V6okKTVg2ZermDaz6UgWwqrgRA1e5cmuo5qbPUjdKsrYQTbAH9hj",
  "key11": "22NH5RFe417YRGBUAAVW6HoEyjU46U2KSdNRYu4NvhL91V2JaAm2cR2Pf7VSEy2YS5GueTSMkwkqdLpMSGQa5usj",
  "key12": "tw7Gej7ovrwmbi36KW5tSCfGiPstRxzyVuKEgsc5ZvKNNXW487AofRBhoAEAHoEwRjHgvhndE3tCoyeztY5pCms",
  "key13": "35EUoePe5uRueHACDRHC5JB37RGipzUZW97k8yKtpNjN5cJ7kupCn3SygycDW72z2dpBTx5Z46GfjCYtWV8Z4Mip",
  "key14": "3nJbHkgRhxx7JX5KyV7dBjv277AeXvTTTaAdsFuPnVgLMk1ZFVMNPJc9yJro5f5ChTFhSVyNBvw7BQxyzQ8QxbWc",
  "key15": "h7geEtzuKN5sUDoSirK421BwAN513EV1Hg43g9hc59mXgjGTjtm14NVY4w7zDVDo6SLxDWs2VtgkNMgBgU8s1es",
  "key16": "xaKwj9jFt3J2CRyZPZ1cm9qVwKw3QgeCQmDtBN3RMHqK9BoDoDj3NTJu3ydGco4xxWPby6CXpzyEFvx5JBdTXt6",
  "key17": "5o8wK39mvMD87JGFxypo3iG499RoWkpc8RpmtrHbWPsGEmbNTgLeBtQqowc3zFprvj5GZBPBF6JT67e85BhGcjFi",
  "key18": "2di7V1swFCTsYRdZqWoDrDCQi6EqqgamPxPZCzRXsGqxcXGfqr27xR1cgVxoW4e1KCsAZZNgUXRu36H7d8yLfNHP",
  "key19": "5r1UPmpxZtykAFY6gD2p8oULUpmRCdX259m9W4j1cfQwYKNE8HpjVApmtgXr1DWMeT4LDXzsuC7cTXpVnHWTGoyE",
  "key20": "59cAzBiiMMXohodmino8Tpq7SczUUHiQZ3MtanFvKxmUA57TuaFmGHuWPtGRrXLqyNW5yavvpuhQBBW8xsaBsJdp",
  "key21": "2yETZ95B9kcepgdusFuS4KhLNzX4U78AYY4YFNSrBwiC39jCuAcGwq1NdssxG6bL5gkP74BQ6zkVXZceJMezfFtf",
  "key22": "KzUv9re8MC1SrQnrfcAWahh6GuBzC8KuZEtW2hKUckyTkjjZt14RTyuXBzF7NsyszXfBGUkn1Pkzq2XoRtw4wbo",
  "key23": "4iycvHu7v5BTMJV7x3cn6w9BzcmywWeZfDCvKyfNLwZBFX9CYjBca39Lo3PJ6TG7GazZ8iD5yirP1yaSBC82wctJ",
  "key24": "2G1XvneUfr8j5FsL4encW9TjRZitsub9CCixVW1nLpR7LbNZggwuXSTdS9QPGyFbw332vMPbJF3b4ShCCEPGsxNj",
  "key25": "xcjnm8YD7n5CfadHHanXhDPYwNMo8rj88vZYN5NC9zoZKGtSfHdVwJ7UttQFaeWA3eeF1TdFRGDXRcJ9PKWU3jK",
  "key26": "5wkf7P63Xcg432zTeecQnYTag42KFwtqhoXfr1BkDD1pnxE5afgxCbWqp32WUwgA8iyAkfNfPagcEAq98WVKRdfN",
  "key27": "4ZwLkvtjA42YEJpsBd1Gp2FzQmnJpvK4ejVW6YMsU8X3DPgYRcMmpSgw33vPbUgQMh8kAoQMbrMk6rk3cJr6QMof",
  "key28": "21hZJicxG4zbVG1egfniG1fKkHzjjXpFQfuBvzkzT4rDpK1moKX2ZXwWamHiUkQyHxNiw12YdqWsjJZrXmzEEZKm",
  "key29": "2SFGouASzq1kxQUPRHGp5AMMRrDesTGqE5MFDsvCTP8Akm5fuemR6qwZFW4LtW8qUmwyoCRdGTvb2dMzVM7DggkL",
  "key30": "54aPRuaZaAzv55HgCuq2NsdMqRXYGMJ4ssCPjgCweDNZ925cXbbtz9KfmZcCJqkd2UiDxCsY4ZFtZfsCe5YBsiHx",
  "key31": "22tiAf1fStQhp7nGpuA8iH9THvzQocXwPhLSnW2fyjUiFa46KJHyAzEPTwQhQGys5kVM2ij27bEXDdTKnCexfUBJ",
  "key32": "4ULgCXHPNGrDR56EgQkcc4mKgcpj3YNDZjJGDpcfj5zbTGn7wb9cEEwVwDVtvMFuUuyJ2fQxA8vFKTRo7YpZL6hh",
  "key33": "21X1rSJGkEViJjbCkBXTwEfdpw6ue8og2ckPY78jLLhy38F9pjBW22dY6Yy4UhKhz6SE8whre3GUATMXeJSeoSNx",
  "key34": "2cDr5ZP45i9J5VhdMpG9o1aF1Qr6zc1WprX4Whp4BVzmd6WpCch282SBjTBYwNzkiXhVHgsSV3Hm8Ky3yi6XsQ1N",
  "key35": "3P1vd1xssTZDss1F98J52q2QrzheFp8pypFyNwfxQ2VduwxT72cSwoWdnKa5JvZN4rZhDMGGpM5HiWoy1pD5YCP5",
  "key36": "zLE7qNmLodPsRE32tLFJhNLHVQwXGz4T5NtKFeLuTBpi32wRgQFr2QKKD8y1Em7AvLkWzYp5GcpindBciGEBpHu",
  "key37": "2BFmUWoNTqjXwa18e4FPRSttp9Yig8tBgEXfKBXxEuihMYYh86GsjRhxfuydbftJopSzfJqppLJm2s1akvWS2xAz",
  "key38": "3rHsJZYVQJXN5ornxpwe3DBBPnHNWn9X4q5GudHnd16LdJZbaLrsuHABXcbioYXMtggtDVHfReR5cXGKFXr7mTV2",
  "key39": "67QMayK5SLdaU8uTAzBWdptqjtSQmeEF41vesS8YJR2nU3Wc22a4mJf5WvF3QpW4Ebzk35eJFGedpXU3Jq1DP162",
  "key40": "4KDx4mbszjkVpNDqQQsGMgWqrFBCgUxPGjWbw7qR26amCoGf7UjeT3EGLhNc9QVaVRKE6odiuLY5Ph5GmWW4GbTi",
  "key41": "Kz7oa3bTRzeoky9xc5Y4R1aQCEotDVjCKmGJ1mqarpVyhrQUx1zHG573NHrMcuwz1nKSAg8WaVeDBUqfqurGwZ3",
  "key42": "5G1C8toHu55ajDZFtY6bwy82JDCiRqvz7D5mDyyXo9eXjCv5T9VsSuRUWnisEEXDWQzsEB9Mo6j2MbCmn6SgQYCJ",
  "key43": "LFjUs4w7cp1AKsqtDCxdMaABaQSKshhUJKwpVo15z7hnV9zmRgPCmL8NN8oemcjcymiC42vgiFQtdwtiAE1wMfA",
  "key44": "zKh8D2cTd9xTxDr6cfNXt6j6HPeJPFo2bDtp3nwuDvaSbrWRHQDwzk9ffbPxNrxHMvzppyKTQiTUTQ8sNRHwTbm",
  "key45": "3eKA3twYwBuA5GSvfZwEbUHbbSdGjGLX3mQxLDCoRc1czvFPgwJPvmr5fDscH2jXeX8mMXe7rVT4zTxFntNJrAbf",
  "key46": "pKPeau3j42syS6usKFwky8pRWFcVhFoAEyRwbrv1q1wY9tVd1ENSu9UXswJ5v35tbGJWw93RqDkR5XGecawmUQB"
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
