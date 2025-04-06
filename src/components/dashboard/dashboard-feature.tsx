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
    "4q4oiZEUq1WMQmntu4AuyzxU1oQWq7FbX7aGtqQiz1i7GGVSzQFCDN9M1kBvaUexvWFJztxB4ikLVZaMtnKGtwC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4KjfftLUp5MDxTWxmbsg2oFq34vpymRQiTeiyqw6CrnCzQQKMNWcv2gzAfWHfDfsEWE2tABmCZubqQe72JdpUS",
  "key1": "54ru88jk4t823SSVBFsaunNBs4e2JGuxNMEWkBNtRuZsS8d3oLW1gb34oDeBSvJVUXtj2TU2L5BdzqnZtzX3fY35",
  "key2": "pZMDan5SvDXvTENtAq8qmq2pjbjyK4gw3xz7WicJREZ6CVhFzqSZafB3TSNB5uXeqZh6fbDENVd5n6N3DWzMBd1",
  "key3": "537ccDcHZcGs9ebWoGnWMZNNvphMt1SwzCp9SL8tLHCK3ria1HGGd68M59BN33TtZvhFMV3G3fxmfe5ptWdqN32Y",
  "key4": "B8ErPVXYnSh5CrgBu7S7M2oLZavFnN6Lw5gEzYiB5jPGKM7XD21RNZxGJsggDY9cCMRuJ7NwJCYxwe8DgikfGY5",
  "key5": "21XCm8TEJZGGPFvZCb2MW6VFKdtHp4oPnXoFqQgeXCaCP126z39JThrdw8EzJJe4Scpr7Bu5ZhDynPk3tfxwtdnJ",
  "key6": "4jbmrkyfSFydssKdJegsiHtiMVVKfyfST2jVFY3LNByRZp3zgYnD8Hn13fVeESXZTueH2fxQrPiLLsFB9185XjGC",
  "key7": "91Jfz7AqUwmVzDZuq94fqf3WNSjDgJmvNiaX2icJXNi9sG3QntRb5DAU8kT8UsUZv2Uxm8QhtMgsTni25HDJRsL",
  "key8": "mGp6aNrk5cnaR6RopmwRVB3jXgb71Xdby4mrQ9UkD7YJGyuuszh5XwNKWvRDbe9jFutmaxUcwruBXapCsFiWt91",
  "key9": "3kwhgDTq1FtSNNLTmfAkwuRGaYWzcUF72vRevb34FJ6wnr6et225vDK7zdMRmMkp76pLt67npVDp5h6kCB7CQyC6",
  "key10": "3RW27JJk1kpyTYhpeyEg8iEmQpFLbJz8YdH6S2Da9f3bQsCDdoVDP6gFAqdMQPwkgc55AE5vUGfaoczQCAzYHpc8",
  "key11": "4YXjRRVB54AEbb4yNddnRdPnMfnn9UAE8Gw2qDwA2fmHRCy5dtaxqhfS2TZQToWTGmmKHXvgsSH4qtCFSVc12w2b",
  "key12": "3xBDByZygojWzRwj7HztdW3Ph6ZE4nFseRKUU6Mvg8GTtwzE2hpNzkL4pWpRx6VAyxsGp91zBmNqkaD1JCdV5CtN",
  "key13": "5vfvFf1r7aPDzeCqmetZVWwEVb5WqKVRg9X34WTHdmJJznd52fp3MAU2y18MDkffdQDAUiB29hPTMYfJjcmDx8wC",
  "key14": "5ihVmstUFGYyQVxZLeXQ4F69JHiGJkWcVM8aACH7H25j3KTq66vooP4NFhSi3RevsWNZ5JjPQ3qAdsSixFFPCXrd",
  "key15": "5CKffKg6KyTQcQWZMYTbMqmWccsXLGn7q2nc8bqicuoeJ2M6ZitVsLJWJDdfT8GUkxvLhJELdtxqVEX5kDNWuyo5",
  "key16": "3cuGdhXdH5fJVnthujyhNYiAyGwDi3mKsvewEBbwRYaruQoXKmaoGiotZEDJynf1QW4g5QjPKEWELcBfKDGqmLcy",
  "key17": "4PxCQG4dywu614Uhgxo1RKV6uYQtY3y3P2RYvqFdNikKjYcNs8YD5omPLQjsScVrNHB3zDRbWkt3sXjwhYmrMX7e",
  "key18": "3GuZH1qQimX3Kxek4NiKYMm5BMXqg9cfPrL4Hw1W6rHhPXsEdwqGQXEjzLuH63bUAjyfJnKoYA2oTnY6hYHNAR8C",
  "key19": "4cJeF4r8EjnXdy6dyABHFWTEHLXaQrXDSboan1TC7FF16J8J8mJdmV3TM71ojXgbqND5CFToVUvotFpEU9quJ8aS",
  "key20": "35CzRL8uq695SchSkP63pjdJoAwezkdjq81AwVztu9mdUVETtpCWcTkXUrmfB6LbyR5maCZ3SYagc3i4jh8WYYXK",
  "key21": "3rsiRwhe8xBhJkBAXW2oXM4uuy9gcBmUUFVDkTZZUUKGEDeoZE85P5C8NoG9P7cBYSCpancok9GFGJ2idsbF8TC",
  "key22": "GEwbsDRb3eDnjzAkJvTBH8DRY77JM9HA2ThGNX8NJJMNmU3KmEBjNmBePnYj5BB9Vd8LHK6tr2hDHP1jjST3Np6",
  "key23": "qF2rM1KuuPTjxDwN2tiN2jncJD3E4AptABQtg3Peg9gTipJzE4cFVm18qWRBA7e5oLCmr1f42UTStMoLmsMtnnH",
  "key24": "5QQFtdMTm8JvvL2S1mr56nXdyK8S5T9wUaUdLBuqEQn7aFkFRJQvyyUEDrwSQBgKZGeJsQJRRBVKVEPR5JHL68c1",
  "key25": "2xdCeiXKNhpSBhhMPDJxkoXxRs75kzzbEP5FW3yKhAHfL7SP9qNDykFR8x83iW5UHH3PaDCcdvh91keZMrnT9RF9"
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
