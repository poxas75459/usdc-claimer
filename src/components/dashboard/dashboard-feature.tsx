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
    "5hvt2sNt4GNYrCwaH7RrUYrbydkUn6GwhwF7Y369L85scm7GYztWd8GbZSEmDyfyQXPEZ8APA6kkUrXw7uAzbKk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QrhTrEms3nnsQipkT52eLaqJtSiZMwmQLhmawteZLBtaJgCDmnc9drNpsvZwsvibJudHWsQhFdcmMk7VtwZp6vC",
  "key1": "5b2cZYcimmoeABQaYWqEuALzaGm9Xhu52eC1H1kBAM9D2NrwZ2qXRCxFxJwmJmkeZQH3K4RTn2T5N6zDsSGuMch2",
  "key2": "2iR8eCrZMAANo4jFkunLCoNf4GNfM9J31wpDiuCA21Dgbr1b7sa3nPUKP8odUxp7TNi82Z5TAavwZKA2YjSfeK49",
  "key3": "4w3ayGx9gbDkzHoqgXciK1t8aawPGuGg2NwMP3pDsjKuJj8919QsyYaK4Cc4Seo32RhAXQRtCuc5sCjmiTACRkZ1",
  "key4": "4MgHHYTwBGJ67ZmhooweYZXDGB8iqNok7r4J6VsKgdwjLoxH3SKZBf721bsDRWC4QXnCc7i4W1VLNY8HNQWLZaVn",
  "key5": "3XyKKxoUpwBRMoKNLTY84vPVdLi8b4jcrEkV1bABKUnEyFBhLHUS7TxunwE6YM9DgJZfWgse9nUrLfZqWDpYr3kv",
  "key6": "352oasXdEy2gwvjqquhKG3upqSTqqWRrUitYFbGF6mCAmTTFQPRjMQBVddo9k6cZBWumVkzf2gBHwVhbk4WzMAPi",
  "key7": "3UzjFcmEUstTJXDirPf4mEobrqwt6vpv6n1Mfzk2ww6GPNkF3NQmK4qUoGCMARNHU27xvztpZriXAiusXttKUqPQ",
  "key8": "5UQqTtihxryFM3dKWX5ByHSP8Xz4CmEReMD1dRroWq7TJ46zHpQU7u1uFMBgD4P6mLSgtqE1LJbDZdP2ufmMHdMz",
  "key9": "3vW2kcqcwS5ueDRAMZ8dGbA54JU89Pe5aqqhjPWKgnJyuxDximSv5Z1rQPv4p9769R6uJnD7vGWGuYrdzWFCAjEF",
  "key10": "65yX6mbyaMHeB4GZVHQE2vHsJertm8U4TwUA1nU8QaHmfyTNVuGdDgYcRaNZhNmF9feKoyxqYh5DrpkZ3V6wWkoC",
  "key11": "5hsD2WeWcBzVHfeDyjeMi6tYVQAS4VrkL3jVDEFK3dojLaMUp3Y5kSTcTFDyPmWnMZJqx3EgMPup4W97MXx2frmh",
  "key12": "5vXLfut57viagZXAUvZU6RaLahSuYejPhXuVTa3DbJEXNpjBveMq42sPKR8yZXuc1hxK7LZGuCWyr27wSP1xd4jN",
  "key13": "2RnEkLTA3ZBmYxqNEVeoxU8APFQb1tTvyyWBPhwd2hnbS9S1Z5879a2ydcBHJtUEzintDWaQ219W8RMUsCirvD6q",
  "key14": "57PdCU7DBjxiwWC5PSuuYACT25dHWvdyRWwbB2gBwWovufMDbxUjRCnUTQTdiYmRtBj2JfeWzFYysVUXL9v9fNwe",
  "key15": "3jrhnpuMfAkmtpXhb3U7CyySf44wpgnAZTeCfiKRL5M9R3PddMsMsR2zcdTGKGoFjevNgkVCSTFAkwdAyWut8gyB",
  "key16": "5PeEeWbktu2iKjUL24PQSxe4CX2RNT8zyeKDh6MWD3SUDtDixFq3wiQa5hVQQHkmYGBeq3hfHe5yMLHBYHDjzgwE",
  "key17": "2WL8keLCCgpQrcEd2SHHwz4cNETfkcVZWatXa6MfMBhaaxByGvKD3qJmz61D4U9iJGbvgkHmRqHZN5kKab2s7mqB",
  "key18": "4pYYPLXyuicvUrckKT3FpbqNVFq57RpxvgrSpWnZbTbWkexEVzcMZMUPB6cGKmQdtGiKByp3v8MrhXJLRYiB8D3b",
  "key19": "4qQ77vHa67t7euDxSDygymTzL5WEuvsvho3ZH4cDWxnZgFMRqocyBQ89Ye6qeG4T8gP6hCCzo4KpUWP75pLdEwZ9",
  "key20": "5C8Ez6VXgPvfbdFoY9jeRmcDSVQKjVTPPn4rfbbctRqJbPX32GQBNuTgWTzUsNX94b81TuDijYVsKfMttpEsHs1w",
  "key21": "2KLZKYhwWY9LbtxS5oM3rA8ujR7GDU8Wg7sQkTay2PshzRc6hzUXhUBHPECx7jcUqt2PPtQc9JTBpy2ddUnfnsUx",
  "key22": "4QqvTPCEgrRs7F8wdgSRL1j8BeggMzx4JLhCBn74Eq2j59V2cKw928QRnbTLMQyEMmvr4NaUwJkMAf3mcDoXvNYB",
  "key23": "4GYz2xiP8fSJBVMWTDajyYV5U5T1ZDfnbmv6puaiKdrDTKX2LfuysdcPpWqZgStgmpBLkMfMv3wU6rxRMRWun9t9",
  "key24": "4kwp7qWaGGyRiyRfjKoE1JHh6e5Qci857SsboAZoHP2fWetpW2719UP733t2CaTPYux6bQ8VRRFWhYmkaTspEFGN",
  "key25": "TZN7KQV2udGFhFcPWQA7GkP1fHeVjnvrjKeACY2RyF93J4hi4tsuUaJZ1qcEP9FwVgDF3gZe9osgJmNEdHbFf1A",
  "key26": "4dpyDGuCjQTh949NXUNV2GQiN1sfTYdKWcPnccAsd6JGXAx258hYosyX5HmPpPQzRuT4PeqgsqQaMGebESsAtYn3",
  "key27": "4Z7JpjxgeZfs4yzYuuiLVFxzeV2PthqaiKHJajFdecMnH1NvyWumigdReFCcQZfirUsfJESM677oQtBmmugNp3LY",
  "key28": "4e78Lqr6LJ3UHgzhMuZfNQK56fRJ1oFMcA2vvPULjkYK4iwZqV6mrEkxfYjf7pdTri87a9BUWEGpYxExoJN769pC",
  "key29": "1x1Y2XxDx9uReYZRwE1s7WVFpHQt6Ciomk2aoCgnuFhJSLhfrg6pHSUyifYU8FiDezdKS8R7XaDbaEgJ3i28eG9",
  "key30": "5njt77HhD88cHkiQDjhB5HAzQHp8YYRtbXPxwizzGKEbr47cPnLomshBTfpe94N3szDj5SAQEzKCrSfFgUqVU1MQ",
  "key31": "5VJFcyZUmzpMojEpX6EAexgEdJTYiyJw6TNDVXNFK95bTuoewvVg9oPWXTVpJKwv6jA5YdMjXJy855DjgaxpqxcS",
  "key32": "MJuvZoriy5inSTgeMsGckthRc4BvdqGe6qPYJ6MybxjtS5trd4Y2TTVmvwSts1u6yrhpZvNBPxnuMNsGsWnV8tL",
  "key33": "5Jx9LJUG4tH1xRbiMj26t8sdo5U8t8Kta7RiQEAMZgsJNQZLr5QsdmCs8JNtCNxKZRwKnoENSADRhPYhR83xxBDL",
  "key34": "4gRtykS5wVZokVmgpyKRC67mFDLZSFJUxp61t5UvDPnA9Yv5FsWGFGiQqh4N5GBukfRjX18PBbKDpMX4taf9LZpG",
  "key35": "Yv4VBmxdgpTRw3JP9gKeZTPV34mjFS4FBffHS9wRo8rhUZNmj3mFQHurHA9JVBHUH2aJQEhzZRZ1SkfmuSJ1GEC",
  "key36": "2rMYvqBrp2NRM6UtPDnLen7pgx3svLtVmyZZFyjrBcadq3eFMZvgRdUjFRTfoTUxgQFgJr2khxCVjQtw8NVsPgca",
  "key37": "5Dp2GHH3DQbs4ZfKS1iLofygXVgTh24MAgti7egYewKLEWu38FhVeJkSMjHaFg5aQ6fLBzn3Mp75s3AzEVRgM6FN",
  "key38": "2Y8ATejQrogxHWsZbff3oZjirPSgeSEm3WtxUWZMhG8uqqeEjBPmBpFFDrj7RaYFg6LoRHJCFQdV1RW9CXutBuKs",
  "key39": "4aPtcUh2vZgGPBYyjqSvkEwEunepRmDuGKXXVqvXxH9C4qbZSYb25PCSAcrQhaCaeo9ogTvXbdKwQw8qWNQvcwqe",
  "key40": "5kg9H46VK6QNP8NURHu595oHULC1FdD1zmGsTo8YwDNGoLFhkGfmfXy5PWV6nM5jmBKSuS6V7dETaTNycmwGcLt4",
  "key41": "2q2mhLXFG272SJxdY885msyv1p7mM9V13PtS6AQua6YaYa47QYqqUH7kxNV5KritU3cq2AThnckzGosETknQxmVa",
  "key42": "5pfu6C2bMMHY6T6hG1c9u2wCYgK9xrHhLo3P3ofMagoSjpjp9J8297APqDnfLTgH11gXCjfLp8USL3HH1Pjc9ex2"
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
