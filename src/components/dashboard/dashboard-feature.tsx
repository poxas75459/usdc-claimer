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
    "AUSJuSTkfgsezztf4kcB5Tz2SrWsCStiwoDRqb4cLDvTPYnQqeCJnHWrTDkqwTDuzbN97oEjXav7M6WtbW1UFPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SYAp2rw8xsMKiX68KVEGgtubaJrd4B74sw2DNGAQALaPZytrPKkbpZngyYHueE95Q3kUxmbYtBpNt1AnHWxWcJo",
  "key1": "27v1ucATa41CpvnoVT2AN2bsz3nnJiZ9F2VAi4rAbTwGwTNSD6cHdvTFS1QVRbkxZduVcVocnF7iAGytDhnGSDWb",
  "key2": "3hY6CZMNP6BsFvzEH53oS4yJ7jqEapxiG49Qo8kt3snJPB9hkXkvAvNWjj5ezjsSTphmisCFL4opzsFRX3Ynmm2p",
  "key3": "4ZWieYoL5YFxMtZQKZQSQdTgB9GtEX1AGFtjpSXfRg75ix7NchmJwBBqpau3E2PjEJ1YJKpALXg4xgumCzkj9bRs",
  "key4": "4zhD96uEvFaJbqGHkKhscSdXxD17eMKPxfa7mkh8curvWWM8W6YJrkeT6WCjTupzqEJGTxHzLhZFJEDjtd6RfAkx",
  "key5": "5TzLa2t7Y95PY91EEsu24nv9pXgvBHf4r5Gimz5weitE7GECANXyYHhxXAoDw6ZPgJxJ9dNu3UMHkJ1FwHdwzYxY",
  "key6": "2vD2Wv6jcHfAGJH4wBdBxoYxqXTevomR14iMeFqSetSGSZxvSt1SfDFxp1RKvqnaEuATnXxLTQU3xz1TMxWSCsba",
  "key7": "552GrDaoCuno877vnZNZi2sG8ixX114w7qogvtM69Rs2npLxs5nZpHVJKND6uqnH5hXWdZjTLbNfPhBpvikYBCZr",
  "key8": "49d5LwDT9LHQ3uY2DfaysNQk4RUE9B5euW9GTCSGwWtiGqRwysiKaNXFf6CX9pLfkjswjxNL1XYy7eYNRrkWYbLP",
  "key9": "vGFmJCjZaMD4d3QjYmPm8iosf6YfPHVjpVzz5wchaFVMvX6VigHSAfoxFxZEHfdaX2upUZaEiE8Jq9PXudSngts",
  "key10": "5vdQhdJZJ28Sd7UaQ9aTUpeWgVMFZV3mYChAQqRup3WTkK7KtTrh9HbPMfXT78gBq2syjrU123NHntwy98gVvNSx",
  "key11": "4teTRyEtmvkPxg64iWEmH5dcZFCHWcXeJRp9281mdE15YcmzG2pu758XVXy3kvAMT9eTs5YRpB59vGdGDa9N8vDx",
  "key12": "5SVUUmV5Ujp2ZG6Wh4Ms24H22Hnqf8MxqfNkemdSftm7jtGWMoVCpTKfpSULPQ8AW9CwZbzf71k4U3rjwpvx2rfQ",
  "key13": "2c9LamDGurD21V6k6i2j7JHxUDaQ2KJ2k3i23vqWNv8r2RJdEF2bjdjpTuBe7Fbk7pGrzftiBNHFfFCR4WQZ3ftF",
  "key14": "3xVMsppfmKi7vjtePg5EeWQDoCMq6XPXdECJe6TUtkCwjKFyYiU69qy9f864BJfm6KAjK3VfTnhQwBmBtbpedQF4",
  "key15": "3nvoJZWpnXTPnub1gRMqHKRLsTS3U1kRFm3nhFNqcisQvesMNJHR9bG9FSyejBWawZMKJGAgBK7UYtFmvBstvAwi",
  "key16": "1pGV1TAihsC3WZ45PJmRRtNERnfkuB9V9QeMbnuTp28MVxaJiLexTX4y5XwgGxpJ9wdJMaxMRYT6dHwY2Yza5xN",
  "key17": "YS8pdXCwvadFBAR5WGkZnqaqKSXFSUNPAHB8ZZLroRqtdzkK9jHmG7fh2vR2DuHSua6WgHG7hyPb87FRCwVbg5j",
  "key18": "kG4CQAwTQG7tXYcvKXxBF7UCB5raFMEaY1tK13Lp88hMxQCwxLccuBSJo1gZ9PckGjpf7eSQS9NU8kp1rxYJJZz",
  "key19": "4FT9QdxMmDCXtrSEuBjxT4PuX7Q6CCXyPoAnxFRCqRTGNWvX3SaA7gSxPdCuUaH2jR2L2n1QJV8drrUX4gyGf92W",
  "key20": "Uc2SGF6KVCWUwjiSEqLghm2ubX8pUSU4act9BW96SwdU4Cfh4hXtdoBtCxYDMmgMystgrW1sjk8uepWxWkedDkY",
  "key21": "4n2g5d7kaCbjiSGXH3FUW9ouzJbj6DfietsJxtkQVrvi35ecRNmtPw3rKniQCnA2YvSChULcuqM9trgMdi5kKKMa",
  "key22": "2t28JB3QxCJT7hrqUpU8tUYxcxgCUuMUCcBdRLteEUHErCKsc7gFuT1nM7kjuvXdM3vowCBKy3gTQRjD9WUKqEHa",
  "key23": "2tjDJWfkekYE913jV5QiUcZT9VMVQgq86vxhVkk4PqdRGdGoP4AWTUfUMqiq3oaiQbv6TEVrs2CCpcvf8X9K6wiu",
  "key24": "46Uot1ymuo5TQxPKJaHcdUWbo61TqjSpv5KboE3bvBZXBQUt8B2oDGvuvitsExSCotgi75hHrfy4HQE2LseqEpVM",
  "key25": "3YfSXinWXQiLBnsC3aD4FY3eszDQTQPrRi9SRjeVQKDiGefUhA1BpzDenX8NeWz9sePMmp6kUuxuSACzTY6KY7Si",
  "key26": "2LfdSU1CuNxfmaExgBU7haknqNSmfRv1HqZBJPnMQ5B5mRh7CpmBf23FFtCQbqrgHrDUrHXKkcpRevBPqUhtfsoZ",
  "key27": "4truYBMxqg9ASiGVL632queKqEgg1bnUv6JSdsPpQCg4SSxjQwucENnkvY7uDnUhCtip9oTnbXXCbckZqsfZ8HbC",
  "key28": "3ZDmNTYnxoiWVn87nBuZVXgJCUkxsikABuD1aTP2ckuR3f4Ypvhg8dm7mVGirPjZuiNRjG2V3bmZcnY5jyqSPuDc",
  "key29": "94isXzDrYYMB76Uxsq8emahqorFMSMUCcXKzHswdt8fFRcfm5ekHBX778EW5mwWPqSMUMfDTBZmUornJkbHh1M3",
  "key30": "4oV7zgYco2nfdZNFJhyPGx4BsH7dQdyWrtjY4gdwNkzBhDMPXsjBFm5VxkpFvmo8SmP8Tc4DW6fyNM1FK1mjHkhL",
  "key31": "5XxpkA2624fvSj3t2Mwr5tTdhZSDzGStWRgzsFMwx5KAHK7Vwe5avQ9LtpzTxLRD1Vt19uk8y5WYgLfZtcotxsm4",
  "key32": "qFE17MHdsSz4bvhTYezCAJT4yJKySZfg9c6BENt24ms4pSTQYkSdi9iBq8zR3bqjaHjUTfc48zsDom4bw2142r6",
  "key33": "4EHpe3AKnFc7znHZi956HSgzCwS8uYCLot69SuutTLdzYGMcH6HENmnx6CyPhw3JJvTE5b2n2joHuAqsEk3vLdt5",
  "key34": "LXYqJxYDyYTXuYM7kkFuQBGpxGMNGMYBJ3Y4QBkck4z9VnB4cAN69XVsyvp1JBcXCuExETbLQ7wsF4jheHW6Zpf",
  "key35": "3VXRVAie6VVDrN9xhDFYdmq8wGbH9SJpCAvLSmHTiv5b4s8BuDvsArgFGqMiwhnTdebcyhiY3exrhwp3qarnofZY",
  "key36": "4fY5ZW9s3byuYZ2je3djizLoH1Zx8rjtucE5Twmy4qxhEBH4GowHJQ2BeJcw7P55akmGqfK7ZR2HvzkQSKx2PjXJ",
  "key37": "2cXKuognY9pRS3fcCS1jQgV9TCEKuG9FXNAMUJWZ7bQE7uP3QWZteaYetBrwXznjDtB9GBUrGGuEQrPxVk2H9aQF",
  "key38": "4MkPboQWGViGmcoGiB9Bv2NrNW2GN5oJ6NY7Tst7dwh1pyA3ow4NCnMTEy5vxrywAvKsZYLBqGBaZXjBM1MhftG",
  "key39": "2FEVT8jGAv399BH8PdbRtWCg9XdVHv8Yvg8qXz2VedMs4Y8QoHJpmhppJziSRs6PerUWrLY5TFcPX9LkBUokPEMY",
  "key40": "3oF9M9PSWd4ZcDpHdT7cW4TpNGJEUC5QHuZGLdNz9a5ouw5xjQGFs7pPABmkQBsfzcDfSgtAK2Dc4bvhy992gzFr",
  "key41": "w4JJvGANVXhCPdVEpjnWHYEt4M5636Cq9UePvyC4HP5rkcevBawZPZk38BULM3jPfkmK7BBHtJsRWJYgeCP6SCJ",
  "key42": "64qSWanGcPVHkMXoXhiRa917FR6AGZaL649zsR7Kkbb3mMkt6zjHcDEmfnQTSZMc82FkoFGE1CYmm2YGyurdwBzx"
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
