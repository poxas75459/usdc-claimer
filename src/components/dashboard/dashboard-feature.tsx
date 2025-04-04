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
    "4JGVt99PUM72c4Ae37LNL4dfCQ2CSYGHCQovahuwDYP5T8WGu88m6zzhtwvexeBN9AyusH9dgp8p6epA6R68CHVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cmnYEHBgH65H7GM6BNYWedgkrRYSp16cvVn8cRp5mDeVisWtt31XdJQEwPAUgTVHRjxwp79VM6GkAQpJxSU8DJz",
  "key1": "4mPs6XmWJ8pAqVTQ8YZHLiHYZi7QEQZ7fGoJdCXTUU1UGMoHoLjxYoNejfYEkXzv7dzcbN3xydtvwmAi3y77fYfq",
  "key2": "3XHcwhXiqYfPQdsrhR8VTZtd4FhexKYY75NVkrQMi8ZamdGcv4FHUNu8MbkHkyuQ2YMCNgVWzVxt1CtQrBHALshV",
  "key3": "2iuc8ziBi8Mk5biwvuV9daEAP1KDVbcSjo1R4g7yB6etD94A7hSba7paMfqHsNyxKAVcu3w6JHb1NR6aXzJhXBpu",
  "key4": "2g5XRYfAoeBRZS8XanpNgJSfjeJpFhQUFpPddGUrsBhvgzj7kcvmG6Fuvid9wkqDNSLP6Ggsmg9zNaqZ7ZuGHzLe",
  "key5": "5yg1sSugyBJhyn6uBJHrNoVfTCeuKPA6FiSBwyXerNLzp4PHrtbjjhFz4SUn5XgZq1bkZMCZQQ5v7gin1TVUcabW",
  "key6": "3MTvrNAU9jjnVBfeTrLCze4BAFtgwDzyvAb8QRAHJcMCiB4w1ik442NMDCKWZwNpDRV3gWBZvanf3eUYQiN1T7BT",
  "key7": "V7rssZH9S9kTcaNBxEgFyHJs3rLYTRxHuXYfsMcmUStQvbkgZTpheRJpfYvuvyz9fj6bjHMzSswRADbyMmZoaBD",
  "key8": "5tWsZmLaoWdGYFKMshF5ynq5FvzZH4vyeStf2yXQJW3eBC9Fw3yni1aC6F2pJpf2h6NGtfEk1QAvpoNto2CVbBAG",
  "key9": "3etYps7CWkzJbwDrWKAoySvQ9auY2aQzUxrW57fTfRxZ7vyXNn57qshzZ9QWPWzjkm5HJnE2zUeHr6JJRovS1viD",
  "key10": "2ZSnb39RRJ9GpRpjExq6GXfN7S1yTACouQa9WAehoh8DRsddPrSRED3kvJf78oW5gTmvJTW5w4CnKbNcHTGFmVNH",
  "key11": "zoZnWGxscVjYeeEkPGN5v2FaM3vtZcFwmaBrDFsYHxaR9KF4iTyFP2dwhwnGo9T5kxxStWZEjivHdPU2BLnPBCd",
  "key12": "2K8wDvNJnfo9EFkV3i2cWFmetTseNV5PpA6m6GzgEXh98jcvy1d84hPQGBaQDe9VV7Yy9E1Myjth5qpLSKtzd9sE",
  "key13": "6FzJZhgmMKQyBjbg8W731u4Uu7FijpVH3aBGYqbuBAJJNU81XruDP7ko2JctSTbvgTgjmgsdAou86Wpcw1vqRxA",
  "key14": "3opLbVYwTvGA23Rm4YoxeQgNaeEAwbwTt6GoahaT8serPQYx4L2A8b1jv9HVGjAsduivKD4Vx6cX2xPYN4fMxsvv",
  "key15": "2TzT9Q8qAHKRvnNEdpGzMbG5JiV2NFDA6fWSdJJg9qgehxgT3WaBS8tGZwW8KBrP4LNnCzuoN2SuYwnahQZZT37g",
  "key16": "MRjdMbZi9hHyje6nQxAMSVHstucQ8eZTC6DYqTrg9yRCJNkKdQaF1ruuen6kHhhYVukYZVp2RZuhninfqJHShri",
  "key17": "46zk8pRvp8kGy9B5zc7twYUjcx9mNQhiUhnvFK8r1jaDVxjqKxnMjPVnmnan7D4CoA2YyrbyvfcKWnSy2rmsJ8pH",
  "key18": "51R1iPLgpdP8ddxsjQYMT25DwHK2eD8KXLzmLeQ7A2CSknTU5fgfT8i3MdjoUkXdcue5q5STs81uw2F67VtupQWy",
  "key19": "2wr6Eex8e9QSCFgycMiNd6BKhbz51t3VVWTKG9p2PGWnYXfyQtYh1LMrUmwMfmi6JCKwMaFws5fT5MQWrYfbFdYN",
  "key20": "3oxg3eK4KmiD6k5iZoeDXC4D8jQ8Jer3E1gHZBroZ1wcrM7NfgPS33Cnvhg3hUTkusT7mYMJLYy4RRiAjPYj9fM9",
  "key21": "4WQPKpE2GsWqoVMqE3Yo1QWXjtn2LQihAMf9rCLajPMdxdbaSTkTeYzKfLvHBVwzSdr7vTmp9HGr1VSpo8CQC8hK",
  "key22": "S6XsQdybe2ZQDhn94ezPYk9NvQrRAXh2E1QPALL2susuLBpoQBkZ4byNzpGCxhZxgFbaJZvWMATQJ94uGraoL4T",
  "key23": "4kCzbRqxEznCTE1cDRJrv1RF1pjzJiPwMzfAv4HLVVoFCgrw3k5NJYYn8hBDHoWK6egPxcYoSEFaPo5e28gNbwMj",
  "key24": "3LhvjVy5GTCaBrnKwVqTo9gPJU1rPZihPEFs5X8AjgqZwXdMrX8h814UXVPNedvWjbUr3R19zh8QU5AgGcWr33uR",
  "key25": "4d8bRew9HM77hErgFgZHsRgXngwmtzyZkQwyynzoECpvZNWf5yBuXGc2ZuDKuGRuwFQDytYF5DXhYzAVXxUi3jCy",
  "key26": "3vRJSMfWBbVfocG4EzChqNhvJNpZrbwAcqKUjbnZxn3RYCFH7dScrz2rbbpqymM6jSD3EpGkWs44GHPHhbBLwkru",
  "key27": "3nNYaVSYGWCYQmfAoZeLHuRSEpQgUKUR9QU6eUiPYHMk1kVfbohVVRB2fUMJCJ9ruomdzdBbedJvMDAoCYSx25dP",
  "key28": "2xFdt6RFtdZd6jP23zK59udXG4U9GJLtD9q76L7uVH7vrHZjBV6jVCvEE8GZeGbMJH1gBqPw6uLeWFSdGQdfHkgp",
  "key29": "WDF2Ufi3K1kKtUqBMQdLaxFt61BLwTNBQKxDSkAb3WxSGbduTom9mQsy6wwS3t4hYo4wHwVfEnnWSKT7VskbYNV",
  "key30": "fxPVXYfY1efSDfwdArEJk8zrqBytZkUg64wb2TNPSScMcmvSCUaAsBemjEnKsuSjoYA9hqpGK1kph2Ddvkw5eoA",
  "key31": "3mjSYY3cq6uAfJjcxCL5LVJkMjnzoZuVWgaejTUT9Cqx1i46a3VK5BCnRA7GvEn4QEPQeLzTSECvQw5avGwTi8Vg",
  "key32": "5u95jK6eACS2NJyuFyVNQxfk1iL7AJv8tGMbAtjXvNk5i1DjjzKXHG3dLtKb5pecmvGNzAjLW38vQu1xpSCTTyG1",
  "key33": "4x8Bq3Wivtfe32AYkUzZc1b5oKftQszdJ9PuJVVBzYnLgBTgf5kUBZdXvVj3Cn5zdpTJa9kt8R6uCEhfaF2PSZcZ",
  "key34": "3uej7vn6P8AY7FQju2Lm9oy2jMLg5sMeMLE61nQvviffcsGToXwHNSDcg1zEXeD1TKWfZzE7LaeRJTNyTjbpTuWL",
  "key35": "5a2SU1akqyaTjbupSnbnwkx6Zsr4aoCXgwFa293NY2XAqRzSULudmrYzXnBsYskwggQCqDHsfuqedz7soWy9noQe",
  "key36": "2yG5bkw2QhvNeUKaMV7Va5uj9VCe7kZpTm9CtLYarp7ASPWfSKVGohzrQrrsFgeEhSx43WuQUKP2DhShm3EQ8ism",
  "key37": "4zaQGW7T4kqBxPYPt5W9ufEdEMwkMNJQJ2ttA65YimN1HVJam2qZDAqEoU6sRu1rJFABSLw2pNYcqbtwLsrtrw7u",
  "key38": "2NR3ZyLaAJvbTgycKYLnVffrHrb9b9ptNxbXQxBNzf4kpcLhPR56UMFsdA78WUSFGdjgXLDUGucr5oXKCFz28bWT",
  "key39": "3Zx4mY3RPwYLHVc9FCypppdGDE6Nu1F97T5xXqcmGpAXCqLeYy1BaSnAUizmK7gsRfybvLUytcRUgjzj3GCJtYGW",
  "key40": "3n8mNrsPUA2Xd45ApSSJxMw45eSsiESXmmkh6CA2VuvmUbHHDvzKAZEUktrmcZL5DD8ZYisdN2FX2HvXXm2gYgK1",
  "key41": "35rQBT1wT6CEeF3DmJ3N1K9j3xjTuShjvtx6BeHykVwtYd6dtL9nCSWfj84p7zeebaATQoEtycMsCrYyainNbQJW",
  "key42": "WFZXCiJYSBoHzU57f5wxitzAE3HREAdz3xT9PHTHkhhLqzQwhimmMinbnZeZXdCRCwbimVAa9LjyDBPG6Fb99ia",
  "key43": "6QhJtvHa4AP6ULbFaGAfugEHzUsH9zBjeF9wTZ2BL3HQkqn2EnoG14Ax7YRpvVFt5Dc3ZLV6XmTaD3h8xnjdsga",
  "key44": "22Tk5wZC3S8XYF65YrtU6Gvtawo8SCx6L74i3nyzBFdtqToeaNPbfVqFzzfWq3iRU3gW84uwZKUUmTnnDoFJhw9P",
  "key45": "47fsftMM6x78w5CUjeZnUYFY32HeUsjdpmzF6RP1E5r5GTsTXBhtcbk6NMktoYCWUrPkCjms81Lz9Ut7MTMz1taR",
  "key46": "5WPRejmnj8RKbyNX2CjPTTGauAd6tzfhwUrdH3sm8byNbGGMJAhnpcSNGGJ8FU8WRZvmCcnNrw9CQJhC7VQjFEtc",
  "key47": "DVhmCpApjR4Gq1JQ22uusqZLJdZR9xvHWsh7m596Q3HjzRmNJpNY83bFW7RqxJ7gvq5oa2ojzRs5piyGNgbLKqe"
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
