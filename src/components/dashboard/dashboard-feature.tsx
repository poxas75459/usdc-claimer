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
    "2rCSYkk4cGuCQijGSYcz2PVAdt4f4LBzzCSj5Ywue6SeFCTr583Sh9huWzBLE6w4S9GPVDo9a9bC7WMDxTdC9xAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q7pJrAQRxZD3krUDK5HT9FxeYFgaBGBZH9YLesjGgWYkJzdEJtrvgQATVDovbgMZMxmRduBSqGVsJuCvyMstPLP",
  "key1": "3NQf84JcVP1EunAEMjGt6Zx3N3MH3n6eYqCdumkKSU6E9fLanuzHRAvbgRff8aii3JXqACeRJrL1zVeV9CF2FvF9",
  "key2": "2oiwiVuqMCpJpt4PQ3i5mBPx8mfqzDTQjqM1aR8mZ22F98JVcJNKg2XppAru4uri3nhmT1FFHrWnDnL3h2AMVECf",
  "key3": "2nv7cNwcvhpAVYU1NojnWhZEF58RDCWf8kaNhJ67V2RAehiogz944ti5ardwFXSgx8gBs3JNSS7oZmNXViStogao",
  "key4": "2dyxnFTdnhwqoR47tQMemMbucsQr6viTPdkcpzyZ6icoc8v3mCWdYgp5Sado1ufMbxDyx4WfzFtfsCoenk2cYQSc",
  "key5": "4Ypo1bmwR7no7yNkbqsfPPrbtR7nxVsJgzeeMKt4ZRWQGJv2nDZjBEiP7mrAmhF1UJn92bXP2SEFRuPiyQqzv8zw",
  "key6": "3SibbKHL16WPTbApbdEzBPyX5ZdfPeA5bPMCRQrKtfAfCV7AyeekLGn2sVXjofcKtHnNGy68XMAp7WLCyzBe2tbF",
  "key7": "3szsyrWfKEZuPuGnV9hHoV26zXTNL9iM5hXocnEVk2xd6tWZPDTnMYkgWcEbv6f98j2vGbotnrnAhovfGzM7TMJ9",
  "key8": "4GcvWLUP8DR6spLTaEbsgTeEnVTZi48f2fqfQxR2nsTEg9TAzvYriib4DJjUvvCAUH5DsHLNgqpyaSFzYCwbuydL",
  "key9": "5ix8BcHA2q5dMBpm21NDGXU7kvFbZAViCHzLkN6BNkXbKW6fHe3fQJdX6m9qQ87tVGSdXDUR8niRRoytTHQ98UbG",
  "key10": "5LN393J9bGczXWZGKNDtEZmD1S6NqdGiL8tFa7CChTRLEoMQ4hA4pVADpZZ78oqUDLWxptk485vEjZrk5LeHjWGr",
  "key11": "4QgZvWfVYVPoM7vi3o9Q4NrDuUPQmdqXWauNw287KzQPKmAD3qQRruJm7YYnALcPq1wFo2SkWKK6heTtFNXpfN49",
  "key12": "3n8JkemWayEwcReSWTnGQrw3p3LH98JGRmQJLL2Nd8SMcmWye7QmBgSiVNmQQV4NnQDK9TCeYJzAj4LMsrmY1zSm",
  "key13": "2eFiUBBsgMm8oCYoVSGpNJ43dqm2bLnWo83anJLMzazQdrPo1e9F5osSmfonyunKiyTZ3cCfvUkvwYUBzA7VsvAA",
  "key14": "4AwHYk91vNw9BjWb4qWB3nPC8B36AUWB5A1EKuMtgupx28EooGpsGLCdfRmaaaR3r5JpxZZzKbkJBt2W8w7znHAt",
  "key15": "4m9saSnjkCggUT2L4PUumQyF1YPkJ8q5MS4xi7nZnHFGvyDf6yjLG6LhuhYAwPwWoci2zzhD1p4jrQGtT58XSSxb",
  "key16": "4VcDh5zdWE7w2KencnpHKYEhCcERYZWz2reWsFAghTVh2zM5VsV2WZZQAsm2ZYxNq7ft9Gw8nYNbpJkDmLnXzKHq",
  "key17": "2VrkBeBEcfsQXWAVwDNkKvBTxsYbjBKcwYSbQjtTUBUsAZBx6wCtZkbDsL1SCtShxNyXfVfQL515bHc5Ran5dKSw",
  "key18": "21QZxcVFoy1UKt4KQ9HAFqCz1Ak9KyBF3xE7r2Y8Y2xVhJzEHeJ8aFNXNqctJdgdn3coDU6NWAxEXnwSATjGUT63",
  "key19": "4nu42RujRGng1Us9njGf3bqYSkZoboyraPcaongj6gPzsY9b4KTiymJk7XfHT7Wnr6gDc1rLLiWt9eMjnQZ3u9Cp",
  "key20": "5UnD3MDLGsKNW8oC6PdmxVzBzzLKmgQDiMy5tq5ezbwPnZHopi2vitMPC8cqgu9nRCgAtyD7tYqChz7CLwcFojQK",
  "key21": "5cXL3K4hX7Zj7z7hx6s8kE6XXeC2LH5DRpvyStczji538kXooP2g65KEZvsxvSTandSpKZLeRQZBbrb66sVKcnkL",
  "key22": "2EjHy3hw7quhwqgGFWmB31eR7351Lf1Q3ue14aLKF4XVtE7BdZSFCQUQwqV9AFgXAxEUAbC98yap3j6HjVJdzTme",
  "key23": "21EvQBG56sZCPGrZBRSZu469Fy4kEuEXMfVnvzKFBTk1ZXEgeNudFMR74e1P7TazsKqciWVbcuMFWiDJaGRZugEd",
  "key24": "65Aa76pBFGLY2ABwUXJyLZmiksBejCcTBiSfEhaQRTb6MBQNQEC1zTXP99kHTmVoytVmfmphW4ds37zeS9yjgAg4",
  "key25": "4EDgJK6ZtHJocALjmtuiFVem7LAQWyJ93n86E75mJbQuNEcaUFAx768Jcbkvx1MenGEMtPcKs9b3fLyecqNn21hw",
  "key26": "29mws7UCCE2gyrSK8N7ySrcS68V1ayFWPqj543T46cTYVQdVKu9k7QBePRGLpz3N4YQJ6d41Jk5qFFeDZY6Ycday",
  "key27": "4RYLv5h6bGea9bQ2BJyyzNyubjZViu2t2KZ6VcCxQHpt62KHmzmt1CjUmoGTWJbx9vJz1RkLd12EuUALD94MAkxE",
  "key28": "3pA1HbTQDkeJDXagMANvJCDBtHLNYjLjZrNe9zNke5KBxvvthLNgzGuqdFtw283CrQaqY4nn7n83TFw6kxHwie6g",
  "key29": "2QqV18BjsF3CMQ8nk9RF8wz5vg5fNcJ9nYNZ9qu66QdvhC5niu4qxwowqF7FXsPL1dnXnLUPGnF1ZN3kyHQVKApA",
  "key30": "2J1fiPwVURPhdsDoy9NWPEGxKcTvHvR49nPMy5tzTMKHBHF7qkbeYb9h6oi1nB44dZ3LFLqSM8XEx7D8J5UpHG3M",
  "key31": "5rPGmU3Rtgqf2QrMC2KnUGcNt75KsJ7XFQpSpWGWLmjJ6u26YwVLg9eKw1L7V2Df8XyKe5ZrveDa2xLJ8ZnHcxuH",
  "key32": "26J3sGfMfPBMrwKGSoeY5qRzkThi3QF4UQ4KCxTxihe5E6bikKtQ4hoFVUEq2FyxQ6oW1kUjWoP9kKxnY7aVh44s",
  "key33": "4EJ1Y1yQABd8SyGtyaK3hxgUdWNh8dEmoa1bu3p2XDKyCGrMZTMnRVwm5rndpgqQYJYiJzcBUmh34e8QjMRZpBrV",
  "key34": "4WW3Khw1crtt7yHdSUjcjSaDSkajFgVBf1RkXB3QSaCKFgq9xHTYYmGWDSrsPsWAYeou1mhhhAyfSUwEHMhc1trv",
  "key35": "yeAQYQzV28UyJaGNqWDDbQJ5xy7agmT7pGfKhiKNUsW9VLct8NCW297D1aRQUUHgo1DRdENpkjfLBpisK3165eH",
  "key36": "65n4u4zUxfWFK2UERsePY62USvn4tqbmBsz5ntVcDAD2NLE7eQ35nvpvEFd4ty6QnuGpfSPMN4h1zvQRFmqaNRvq",
  "key37": "394cxKrxzFFYN9QrQPVSha1uHxnhyEaTuW7QA41XxHmF6RLwsZG5kmVqMittfZYrcmSQ1YZ9FyMeHrtsZn7g5QNR"
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
