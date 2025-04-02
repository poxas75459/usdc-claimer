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
    "3xLMQVp1Q4yupJTvAFAG2VvexvaUHU294jP2kh9YbtcBQhSq4JBMd1KfcxcuSHMHCcLuRmibZoEYjptMtn9A2kBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CpBtswXXBZ3pQ4zvp7rpPoDxDTfKRk5VEiBg8tFwFrdVzz4ZboLkyjQCK5nv687YJojZMoTqGVivCpQzvZGjp5j",
  "key1": "2FYGQMPQabHqRAMpSAro1HjD15i1KubFX7rpWAe7HWxv4CqnrZXK1EBXwa5WWXa7cEiv3JGMnF15S24fLemrzBub",
  "key2": "2hKj8bRMFxA7J115mgT9S9B7Ruh4maGqgUkvWvGGZPYUNobdGVE3Npws6cZi3SJDAexLvHyPiVDRiPLCcxewKeKL",
  "key3": "38aqeTtLxyfXsG7tDG5MxFFc2puyV2Vv9tzshkEg16qnNyNUifX1CJcjBpeyHKosE7oCHMrpgXS4z87CsdSAUPAW",
  "key4": "4nb5quk9UQoDnUfYYLonDBmHdF3WzjGwMjaym8xe5mjDqYddTEg1nAFzGzHZc6nA1ar6sZfedL112Vt6mxeogCSa",
  "key5": "4hDbDPzzVWC7oWhubretDG8eVewcvctBmw8z9Pt9SBeMzC8jvnyE7DtmYawmuTwUQMe7PXtYqdfNbUv4FeJnVj7P",
  "key6": "2RqykVJ8uJRg67Xa3Vgd6HEPszZpXof2Fe3GC5LAkDtAayCc5tFBUxGcKwCyLUbdPLh7YEX8KZ7Szc6eRPPpuiM5",
  "key7": "UGgHp9q3fL6qRG5tCQRcoSZMkVzfXJ1ZkwYHRFv55rxxpLiQuYJeswkoxJP4hCi6ywbSpNGP9M9skBkkRS3TjXd",
  "key8": "3N1MpaEyWZ2bvJzKtbppykzFzQivE15REPp5GuGCMFtas83rbNwFggJWoCtAhwMfHuhByB8tLjHGPwPr8TJeW8Do",
  "key9": "5zBXwUEtL44Utnskup8CK8vK6K85CCTvr4qCuL7LPg2kZsinCBrEP8cqtFVfJFTCjXPC8peXBu7SUU4gjJ7cUWPs",
  "key10": "2tLrL2ZANVuKnAzEUjzxP6XhZxjXyjwBEBDQN6yWpBLXzKYMUSdVQP26e51Mew2VmvR9MDezm5uWD2J9zh37SSuV",
  "key11": "KiFv62pCeszDpGoqbz8tCHeULGSQLoBTfkcvYWRBAqaReWscZabYS8BRH5oZWrko2gN21YwtJDsvABAxG9niHgA",
  "key12": "3WfHVSZRcHejskB3Jkye6PfBkF7bM2RbZMrA595RXrrEbEBJvArBQowKeFGgNCZzADuRinML1LjyVoaxP6C6kksp",
  "key13": "2q7bdSCU57w2vWaLo4rPZo6RVtBvYiJSZQ9HhbFFrtaRu1hRqePyhyBHgXzKgYmZJoc64o2ts6aX1x8sV57VdWa2",
  "key14": "5hwYKNohGLUjxyogzZ85xcSJTSqgvZZ6TBbiKZ9ahEYHQG77fXQqzv8sePMacjGWrE9MgDssHdteYA96wKnw49TM",
  "key15": "3FUbs64n7jWdXoptLY8XFBU692RVXnMUHseg2PXFJFMLrBGHQHDySmQ7ae3qRZ1Ct9FJFGqV158S5w7ypFKpcXtc",
  "key16": "2ag2wRFpezqQTzkRrCVsckoSVY8uCUrzozMLcNBFdzEAmixzznCt1A2QZeUBCZBTrTGD9dGW1NxtuSgCTCg1frLX",
  "key17": "5PwmS1p9WbnX5MoHEGNuBb6FmjB2qH6tJSzjCjomGuTpnBPkUoqTb6pGGGbAFUnNevnz54EkEMVCrUiueiWmjG5L",
  "key18": "2NQeEtZvHaaLuhE6naY8tHmdA3pf8VuAtXbv6V5hjLbhPD733LoAFCTpe6Dra4bSZs3jjGReuAFt34qgNfrx5AXK",
  "key19": "4BS6VqAFvjZ1gp1JgVgcqYotkyUYXAurauL1a8TBfbYGDA3WrNytYArp58bspPm1vJLudJzxJLMycQiLYsjXG3ww",
  "key20": "4kQS81aLnHHxg1sseAgfVh52fngrg6oWELtihF378rR6N2XqnhYnC2RQf2WVsET1LNpyuKo3zYsWvJp5h8Egmeay",
  "key21": "vTetVGuVtE9RHTNjXTtm5VbME39qKQ8MtAwmfZh8NaRAW1vwWo5jYtTrbDbWX8Z9ZzwNKJzGocXyL676xA7FNt9",
  "key22": "3NgsodV4VBExt3GTKCvAhh1fsaRAxpiiQrCG7VrmVfm5KzrGi1gixD5JqsXTEUHMs81imH6MgFHepYWhwikMVwWr",
  "key23": "654nXhdCuPTqidj652ws5QKFbBbswbmNGAKWKihBRGXHzN7gCKW38xswvUXThfsUKDqMrfjnQtTN1u2XhKkAt9tW",
  "key24": "bqAscoPoJ99LrVqD8gJLST5BMDFsr87iGqyp2sNEWfwsdo9JtPKVsjn11Gemq6BUL9x1jySyHJdfYRo6YoXVSTK",
  "key25": "4j5gk1gr1Zt1BsDV5hS6gfiTxiMZbT3eM9gdLfS4cERf9jQBLhHGqd8K2o1K48viQcVzqZc3E7fdvT6c8TazLi7Z"
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
