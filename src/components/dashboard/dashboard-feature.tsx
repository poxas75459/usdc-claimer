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
    "5B4ZCf2AZhDhtsinU2fEnzoW24EpUBzXRLBdta7h6JWfuiSF81c4U1cXvu2wCu5AUqS4jdCw7gZX1pGkKNrXfMqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p5mPfTTMyAdFoDXjkkqB4TRKCEmcNUYtEvjncYvLNPPBAze8cKJ34yMZdCif265bgJtTkbtZTF1JZb8GQHmYQ6U",
  "key1": "5kS1kgMCoSTykeun1d1mYzG4jNAkgM3KZdsf9YHEA1sQmoHKuTTNq3ZLAzk9u9eWCumWTUyeEeNCdcHDbY9QK7Yy",
  "key2": "35HCfMYobKA7zYUyLc1BYZDKYzZb7vKGYnVyatFHoLm9jS5ugqS65Unt1UP9rqcwcLvuRTZ8oavb82Hm1mKMNcdf",
  "key3": "44ZmwJ31fAD48Fp2SfggPAPAY8FLcDWtfH6paGiTnoYHFv7qgHkrHUN7pKDapXvsuFQndJQPTdaH1636V2AuvNSr",
  "key4": "3cdPC7yVPRCMiDktv5bBhZuMwU7BecoZiy1kDM2etK24GWQPHj45xw9Qae4rnAsNcZNWp3ZhswaYrdDLepLJi34",
  "key5": "3TMUmj8JJGPG6vtz5fCvecAqsLEySrqA8iRuNPSLHdtzfJHf1wd4komJ5K5SU2qGPB7mUQeYwP6kYue7zFjTPLbc",
  "key6": "33gfWm5FsQdAtmVp9uzeFtX2T8ou3gbeJ1iFEqY1aFfSW8k8Tee53us8dxjC5YGVBd3qGUQJgkLvwa5h6hxGrVyr",
  "key7": "4UyZ8PZtFVRiSVXrYaFGkcEi34e2aahmx6GiGDU8CtN564qeFpifq5V78pZHNigQF8VmYC9R9YoLYA6Yhs8vLfTD",
  "key8": "4zuo129AXYCZhb6XqLEWWUGL5DCnWHXYpzMUKsDdhzF27AUqaisC8JJVtLWwsrrRWWSRYkxRQiUvLMK6i7MDQdSn",
  "key9": "5EQMJXFNYN2f6Lt3qv7DxXRU1yBn8QENbJVWA16TMha5znhDmyApz8q6bmC78YCMT1yZhg8zhFMNJ83MdmswXxye",
  "key10": "3ZMFDVjqiEhY2Mewm3ENuysvrqif54B4LAYk4kofgGWmnaVJWm5BSo3uqgEHBwRAhwQjc689Noun3MVmRaexYQPh",
  "key11": "2CMotcXMFjGdDT2VuNAipGsgbztvJo1giXoDxF4CouU2sZeZdEJ74CgpteSP8nrncukiHq1rvgNPiThEuQHTrQNw",
  "key12": "61yHmgQYEdw58xHb2ykr5Wv4dK5BUUqMS1eeEqZLQpnPBgXZPQq1uWJeA7RCnicHidEuCGQWYL2fNavWFLgGKz95",
  "key13": "5prBpkhokptD9dswjrzsTVYvpjWZ24dbuiDo9sfgATqiqGcfcgkmyoNgYw4MokzjMbqPUmxxown3Y98ru8zTSFDD",
  "key14": "3UYzFBomtYRnZwXCofxUnoG9PySTMc9CAC1dCtu7SduGfozq6kmoBzx5dTV5dR8h4pp1GNHVA6PFULpKYeun3Qft",
  "key15": "UvhvdvYR1AaJkEjRaJed3vLszWno8e7DmxeChgji1CKCidtd8gmBcKyMY53xrRYECvApqr8Xr8kzeYQSMnYaHKQ",
  "key16": "5VretGQVJJmPJkateXBu6WPQXZaSFZwiueD2kR9uqgz6WaM8X2dyp2RBXeXyWsRFa9VNxydsYyCESkUqe7f1V7pF",
  "key17": "2KzVmZLStAVFcKeKtJmdrywkn718HNxcvCuDJJA2GHe5Jf4gcBhtPg4YHHUwJfjwEfzicBihrwFTy2PPDFPVbU3M",
  "key18": "3WPQBetZCfuGw9Pkx3WwGSZnTnmtt1eCq32zq6EurZ1PbD2ua7F7yC25EnuHDuX38A9QVUreL3RcVTBTzu3Y8uhX",
  "key19": "3D9uMncKoj9xrT9H1QZFcuSwtcJ1DaMXxmqS1kGHTjno6Wdq3xNW6yQSkTNyowghAC8MEjatePNdS8zqBwKQ58Xo",
  "key20": "5qvFpVZS42pWQ6P3ZHPy9RpweF2A11domXfQRbYhQBP4pyhKGVNCyiJ8UBrCmG8XeXAbmQJMHkWWCGtKXXpvs3ug",
  "key21": "EJ2T6P2LFeMnUku6YBfCtfqyCYc7KDorXBNpGBMkutwgfKtCcopK54DksTWAeuD6p1tcYdFxquGiMBeLMiTFnjJ",
  "key22": "5wsWHg7tzJTJefaft5muqtgUupjbS9SJXWZLPov33BZwPh6gWLaMwrXjWtPNKLZEopifxjaJ8pAMAa5dKmRakWEJ",
  "key23": "5FPybMtbW3bkPD9E8dw1XMCqso2BEsyyf1bxAAXmAVS7zdTdP2Ka7yCr5wpvRgdTWrviWZ8CwcZHRdcoVL5qbws9",
  "key24": "3ipEYaLTQwchgwe6vku98kwoiM3uY7MjGizeaoEzSgkQHk8RRVvBwepVGPHYkQgfQqnBsKjGrts1LE2AB1DiEUR6",
  "key25": "2E3vCRA3q4KopdPqLTy8tjshCGix74rKsFA5B1X2VZ3Khx6FEmjcun33Shkzy8x5dvWPc7chAAWUCHx3RQ1TQWcD",
  "key26": "5k42ncqFSrRnHo3LShFZJHJMLmRap5FKdCzhVobfbUhN7J7cU6kKmKccd3785hYFzbjsUiGbJhMnu2BNH7iZgauz",
  "key27": "2Qp1qTRaHnYdqt82r3CTuDyWxUKjRNsvQ8opWkn9Zzk1T69Ar42BavnnZGoqHKJf745bk5bUKvsGXy5ZbJAxAEmS",
  "key28": "3BJoiB9KV1jxMCR6jvbHuNYvV8WRLJssEsARRcL8csPEjNfwj8u7gaK27tCbRsAbmDW49ZjmWvhN2LNw9jTzb5pZ",
  "key29": "5UdTmH42sw8851iShPTU3WowTMNaZkCdsxKkMpiETDu4PiesBkRMsd3nKUEsVTxDSHEMsF72U1zBSgKEt8HnftK5",
  "key30": "4xDGQe9hwMQLebrYBnUcE77e4VyQ5Q2WyNRjy295GwJsGmWpgTSNhVC8aYFBQjZYJ6XvLNQHRHNgtZz2FnuuxPfN",
  "key31": "2JxP4NtnT95bkhqxFPpGdKKoba6a1rAHFWUSStTSYvKRdZjkiJH9CsVtM96esUWVxDcTN44hVNdCgdvqUuWiXAyG"
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
