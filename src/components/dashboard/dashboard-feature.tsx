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
    "3WZsKcEoAdFWmPxKWoxVWpErc8yYhTmiz6aztZEcXyfLxz3A7eyuDkzpVuWq25q71zi15yPnDnsgkt76Rw2sHSoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BSdJNWoEXzguDvn3iMn174H6hvEW6s4CZ865cx8ZVbmsmPJNXX974pqhhx59scE89hbggu8ZZMJdT9HftjQcqRT",
  "key1": "45SNSebNrNNZfp2ZfP4EyKnNYiu3VYGeQTs4tvDMpNjwzDWqFRvattiEh4Yo98c4sJxUkuqmQcDhqHdY5phqCw7A",
  "key2": "5w6ojfb7FWhfzJEWZcHgqmrp9q2AyzkSifoAUSJ3LRNTeESQAnwRSZyDu6qg6DsvB4KNvwoPopkZEchZJNcJ2hd5",
  "key3": "rE87VEw1YQobfRz9wxyWALQA4zp1RFcVWGm8Sp5gGKBzhbKSFUNRwek3t1VBQqVBtDTnu2oux9zkxczzKKVbcLo",
  "key4": "3AZCDDqxNFX9zKF41DaEWPjYHBEModUPVLqXJLnaCb7GRgmsBEFf8niQf5znwRwgD7S6VrEsDJuBMHzMeg236EjB",
  "key5": "4NLHTWejL9xzCJZJAXg6rd2BekCQEoXDbsHwWZxZ5hXNZAjm76U3vUGT4UntXfDfUh4CPDpYZpgTq1DxGynPuEnJ",
  "key6": "LCmPvgQiqNDVsWqFcJbqvwPDKCQCf27AGVw2GmbsekCu5KmBvxy3cuB4CNENuAeecAJWfybpgdABcDzjKNWinJG",
  "key7": "5TjftMNNwUJrFwUJvqt87ySnYEuFz5SDzLyrA83NmddydXkN9dwopRQPEHiFkAs6T1FJybmbHpuZMdg2uYeo2Gf5",
  "key8": "5N3i3SgzgyLfED2RkzPwPayGY7X58WLM8GswDq96Ri5jatMoH1Pujf9fr9fgeR6UNcgnPtHCKkFiaJnyb2cUy32z",
  "key9": "2uAaKfnyZHWmAreHktAn54ipSwxa54sXAjcS943sarZPq8ymLTCJt12pvTWtiYBTcaDdmyGsQjYSVxRPX8CRmFJp",
  "key10": "3HzsyQ6fVRjhm7A7ESMK1AfCn5VJeyirPyjv7UXtNoozYEzy2YZDRGn9ZEwXLrniUCKfADfSqrbwavfD662yL23X",
  "key11": "3tVtCcm8KXfTqnL6w4RJDc9TyetUG6YN2kzQmCuWafd5moVrVCfxySg1fFZWREn9x8MW6R3HcNGAJukH6re6RPcv",
  "key12": "52W2B9HJuazpsNqKkWg1e54FYHXNwcAshnPkWE8mD4WrrjawTfofgRKFUbi92Q1xjjhnKykP8AuVoF8ewdo4WVoZ",
  "key13": "2JeqXciCNefkUWHLsJ4V6uCSuTT6C5NtNczvQxjPE8b8pqYeCyxeB12apfpo3BDRJsAGpVd5owMo818jPRBDG4wF",
  "key14": "5bLvF7YoU7atDzfRkum5npWBBnVZknME93Ttb92F523QKi2tPAJEKd8oyu8Sj7EB5RhScgwtFKqKKydsoaru52F4",
  "key15": "38H5RpKESgK22xcQAznBT8DnpkBaHrXiw79V4KMRMjJSSFrgpLkxYazsorVNfBaJqDubA9T5hxF497ibEDQAmcUL",
  "key16": "4KD8y19bfHHJTyMT9cti5NC8p6EGnvkMySP4ELeg7ebt3xSVY9jDxyGjhn3LDziZgfPWeCQdrWWzyrisdSGdsSaZ",
  "key17": "49LCvkyN78JGcksWe4BjJRro7uymNMm3SWN2Pp7L7HvgDgVD1gaPpLNLEdPCsPN7bp8bmNrBQTzainpFUy34KoX6",
  "key18": "329ykM1WY5PwXCqmDYQAoi5WcSY7xRrDmfqQHP2pm1MkWBAqSTtbmQadMJQ5sNcbfYDZrxQviypsiAUAon2iZtRh",
  "key19": "2Wfofg8hhdce8GX8w3wDAsQiKxojwXH7LD4jcnpBDTDBH2amVZsDUwYkBRrCrQKf8ErgcEH65Dpnp19VoRXDBKk8",
  "key20": "4mGyNbb9H5TBmeHFspriV2LH4FFdXD43UHXGyUzf5y3EdbgihEwm4Jgs14rh733winvcGWXMcBFmVFqHkg88qbrY",
  "key21": "sZqo9wRxH3Sx2zyXY3fJDYxA8FH7vMKF7igPd5eguhkhn3sKADTRkHNrRVZBkrBdBPKzWLsJ7LyrqqUU53NyuZZ",
  "key22": "51BWM6G7nXLCx8NDr7WpPqP9BpzToMJmm4R4owGP72NxaPDnLr8juZ8AhTSaatC6oxTGsS6XbRXxJ6eTKu87YSRd",
  "key23": "34Qx2nLfAHeEw9JUxbtqXHgPDnSRFXF1EZzT5B1pQT2oGT6dYRMNS2FxQjBRadNDrZomYyVn1vtuT3q8MCv14ehc",
  "key24": "48FAo3sTmu5LEkqmShyHxq3FZxjDKV8qpFBdBRSzP5Xs7MxAzrgjDdorkETLPAMRkq8azabKmgoAaNrZoQdjs8q1",
  "key25": "5b4AbHym2CJsYFSGSfKvzURW5NRucT2d6rt5daFtYjLJDPT29UjueWYjidQ1yNND6hcJceGa4GZi5mgq14vG37R2",
  "key26": "43znsFUTjevDg3d2r9v5tYJUUvrQ14zJXQQgCTrTvEBDg5QTN5egABGbqTZTfprrzAyJHKbxcdZDqgbSr4nF1Z6b",
  "key27": "51UBPKjg6KgXkSBGv5DKwi5X4DewhdnX3xGqQqCHZmv4xSDWHDjyBKPMy41nD3YJpfQM7NWHJ67pk9Gj5qgwX1FF",
  "key28": "4voDKVxbzfbMwnyxdw4a12kHgj6rSFTDGCcURApbLardzMRHz2cqURohPanas7w5xzEX64h8z9hPCX8KRQns4a9C"
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
