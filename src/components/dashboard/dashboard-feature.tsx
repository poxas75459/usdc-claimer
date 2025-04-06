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
    "4W1VkuEmMtMn5hYXiJZh9weas5PD1w9Rm1ANWAXdFqXpLZ74eVvHNPwmMtfim4DHRWKp5dxCrp3PgcG1w4mBXtAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ubu6GMY9LfSSvttwnRuuuaNARUmEnGaiufhMUPoTzhPBMwCQGw9VsM85ped13qwbEvrLPaRCyxwUFBnFUqEKHQq",
  "key1": "CuSQkc25kNuZJoLaFf1gtGBLp2W5HBAnmxG3rVqEgrcPmfa7GiouwzqSM2bxSDFtPd47y3UX1xFZCaZUj1D9cU4",
  "key2": "62f4DG8FRZwer7g8LFRai8jENjHciFYfZKV31Zme2B464n4E2ApMYxt7eMs1TPb4YGq34U9JVsbUe9SzZhVEDsKL",
  "key3": "2319kFC6mH1YBP6aN98Jm7NyTfeRpgrEKA69TRNAj1LW8EBrpsnL7xfdwCXiobomcTxSpojHjvyjgzhEg8h3eVuH",
  "key4": "4N5DMNZ3XBhULJ1xKuCo8Qo6nbwTt75oYB4GfgsJbtSzSaHk1n9NWJPfDE7jhAVvusiA1uHtptASAPgSRe5HGSB6",
  "key5": "39VcHvGpJCT5m5mUdGTWUQDZG9nSNz3iqXjJF46tAJhhBF6W14scBCzpV3pXgarBVWLKqdTJwSRoU3VufzF5vA2E",
  "key6": "4hHcLWRujoMgEj29UFsAasK39YRoVGAomyzMZKWFKpeJnsiqoFJaCogSBkYR8FnMzY9qg4YqJnZkovbcptSxXU3z",
  "key7": "5SfSGdTHgNuAjneY5ZzRGgryjwgiK1a5wwmSHmZAu2tyHYHGW9JY9ZEmgQ8ijXDxYuiSfA6D3kh1RnLVZEyGkasS",
  "key8": "5jn6dcEwFoLrGbqB3BXQNkFo77RkaQe3Nh8NCK4LiCUZFYkiJFz3gxLvi8PBFEeruPGFV5JMvbSztUaqGRZu4tpS",
  "key9": "2YKi4S7pFUHBN9kc8ZU5oaFtxFBYSNXtDQ9pWHALCNdxp54MhRi4fWzHhBGcfiVkSpMiAsgHgnEMVxhjcPZkA11U",
  "key10": "PskAugcK6MjmQ8iNBmEPKkaSDoNHhb61RTuSs62zctJRTimk5LmdX97Dpfj32eRa9c6uSTYCazucbN8g1U1JBCq",
  "key11": "TT9fcBzZXUt1KuZTUTFEBYHy7ajFUU9ALuKFpHALzg8xgN8MX9S4LXxFqjXYaKwpJbrZMrAfZvVPVeFr8PAtU8Z",
  "key12": "21DySuHwYirmBGx5WN444fjDS5WiBxGWRtc9W3rcF3v3BGWqk9Gsz8cd8RB2TAujd4osrcN86koybwXwGY2YQnVP",
  "key13": "3oqbhdENnEHRUv6GJh4Rpp8tZZZyzb8XzB7oQmyeyZx8YziBHbAr6Q36erHAoGwSBmByhrUDQGaAkGTKiiM5G5ph",
  "key14": "4nzm8u6dDjixgSxB3fCEmpSPC3GumnSpeFCGEdTBbGVdL4PDGPVmVnwtqr3cXEV9ez3ci1QwTtWNY9NSPLvfwKTc",
  "key15": "pMqMEPhWX9onNBonMRveacVKTEB3jQKXVH9cmkC9coZReN5r3PpGbRv4uyCCGXNRG4vzL4DZKDw91d7M71xdwft",
  "key16": "xbvzEgbdg6B7eu8DQaEHJK1ieWHvdtYpR6F61JvmQbnjc1UxtKMJpVwgWJdvw3uZs3KaYoiAkG5K14vz24eYBUY",
  "key17": "5aQSJGWsxLCM5nrHrc7naB2AkZpbEVe69asPJK7tdyAUAtLiSVJo7WWJLfWC7JCUDhjAoft1GQoA9S7cT6Az8DzH",
  "key18": "4EDTKEgXnDnFLoC5KW2Z94ih1MLGeNHvmcQbMp8CCL5DhChZjWVKCWYuMua5Jxq8XPxSyzawpuqrTgy1EzFV86Sv",
  "key19": "4KpjYxaAQ85wYKMrWUb31uz2xS7Zs5DQXjiv6oXtrFU9b1yV2ZCDsZMDHeQMthyv4U9TcrTb1syW3EovtDD94Z7N",
  "key20": "2bCjnY5MB5xBES8Vb5yKwcPkq1VbTGoHk1K3DdFABHakLUT5tReGjs81TJH8LDcBdtsYjH6CuecksmncwhCAmUEd",
  "key21": "FNoZLmkFiCAqDEM1e8U3zHVxESQS8nvj3BUG2mqmEsYKH4dzaYGwWqho3yZW2mmbTVLW4i3YAEf8gR4BZ521Svc",
  "key22": "2bz9xVrJaWNEb5ZetrM2CxtgGpe7ERYwdBbUoRsSVDwWiA7w1PW7GvwH8DiTfKJGJzXCj1wLHNX7nn1GKb3kFHZq",
  "key23": "4F9ki3wXbCq6g6dYSKRDNCuPgX8FSRrumP77qtxostWep9jCW8FULUzkx7YGpd6JtAt9PXAHXrt7oj88rcpkEExw",
  "key24": "4MsRjjstqkoRQBbjxisHoHgY6aY3ZywJB1bQzvsCWkneZRiKaxygSheR1JKfv9rLiHDvyZFkuoVzxK8UkV6X4CxT",
  "key25": "uS6z2ehmrqDGaJTqnG4yv5Qoi5euuicvREmM5SmWSq2H2dsLnh9RSd44wkX28PjJTaEsZCKHZk8haTygBzCKjfX",
  "key26": "LgEJCAA1AawAwe2ra6nxwCmqMXLp1nopVg74enqkBBmB2RXgzMfJJcnEXmruTHfyq22Q66QyHCPPXRfMesBZxFS",
  "key27": "6WJrE3mCoPZQZFbyjQoqBgAeXYMR5mBRRR2kRYjYatfLvY7NmsiUUBvTEXMuFaEU4RGyMLrXu5RErDiz3iFdknR",
  "key28": "5FQNUBopKrrYgVvRAJGdgU4ZAzbth2n1Y3QbruxubrHjN2d16LbhYbYwbjaKczNFHb95L3c8cHZajXmn5ZjjgJTh",
  "key29": "2MSCkHvuEMSXPW5dxQoJHJ1B4qSArwAARbAaoReekXJeD5nBrtVkSpbiWCdR8dkbB1aJtCVBUoDodzmUSfMyiPKg",
  "key30": "NpuJAKePs99H38rwYqpW2CxFfHxsVYZWk7deJQi5xDj9f42KSk3hXs3hgRH4XbzaaCHnUf9SHZbDfoy6XwfrnWv",
  "key31": "47jddre9aM2y4mFSarWvZiXbhFLucW7uzwCxYa1U5HsGfSgdes5qXUhccXh75gPUao87LbviESxHnxw1L4dzx7bz",
  "key32": "4t17kyMsQfbEY4RytS7jLi5MejGrzyHEpSFMM2hqGqKSMexQ9A8ZdGSTdD2y3V7NXXTyHAijN9ZMXtJgXJqjtrG1",
  "key33": "5g5Ze3MXFpGZ2czM6QxoaawxqMWpSGGHCsmUA8MeHxTAoUunmwesZtekYxDLnuLsk7m7fpMwb9kap4gfppEWng5",
  "key34": "U625ABdmbaCLcsT3Bhpm1bXczFCXFf3bf4vxcAotsUy78At7tC1ekoqvYuJPPTvKY3ZYVaYGXs9KsVPvavMFuP8",
  "key35": "3Mi4yGJAvBSi183JJ4EHH4Fd81xMyVtguiiYUzAVavA8xScHmEoVXouvGLM6Dj3nNastSRkiKpi3d43GkYDPBDkF",
  "key36": "2imMCgsi1ku2fKaTfRxRrhM3KVqK4xSdmrhgCbGeoPodzN81chYP4vcRbdBbbafn1J1gerYNCmgF9UPVapkWeqD5",
  "key37": "31M3mjUhU5eZK8YUHMgkMLqdvB9eEqkeZFFsNMExnc9nhAgvpgtU7ubCdeoHj97QEdjpM5kNb2L8mndyRaWkvaWL",
  "key38": "5tBxaT7Tf5z4jGNC4YSeMjja64UgeMANBdsDyvZ5uixz8nDA1omjD6C1hiNkFsnTgrbXUPkcUV1jqobdTdNnUBF",
  "key39": "J1NMfX4h3EX1r1HegJeC7NvBn7ywGmjAqWQJmVNyAieTT73sYzaUDJEEywWW3XBSaWLoWcCdA3GjHFD6tcChLxF",
  "key40": "2Lqv2Qwc5vK99CbtJiZS9sxeYVwyiLtGcvbbmAEtEtt4CGMzAmFHRYrgpvNwWPioGJvquy66Vwhk32Xs2CGHRPZu",
  "key41": "vVoLwiwiJ2b5uWdtpCVv4aafd9N9SzMSCoehytZakSNZsVr52c1sJSC4F68W6i4cAB7yXbv4QrvQztWW4SjZR2d",
  "key42": "hCchE2bkqCogmuSQNrBy9s4taKprQHSsGT7T2RTr9VtNGJk4CXw6DakLkzcNSMksiMWafDgzoAxDcLPcK59ThJk"
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
