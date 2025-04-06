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
    "53eFT6VbomwADEC5rdyEHZW5XB3yvyE88KpQeAm9ELz98aP4AR6EoCS1z54WeUY7sBZc9nPWgQ4QHUwnUYJ7KiQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6qWJ4snmKFkomE8doxVhw9wKNGfC6sUzPyD72sCkPE2yYz1GX9UAYwFisgCqS6yHaAiDtMADApiP53CtY8xVE6a",
  "key1": "4NFJTAZCqyyoKxpvqktuo2hU7BB9z2W1z8ca1bwJzP4cY2a788rJhUpHKvFRboXE67MX39TfqnntgQXRcWXJDcCg",
  "key2": "38ge59iLkwzzorJ9ss4aNSr5pn5uhffchCVqYLM66mmQ7UvaszVCPffHPf7J6sLnU5WmEcPc8umVmrXpZTjjG1d5",
  "key3": "63rdkqfu1eCfAYsxMabS9kiuXkgwbX6BMnFa8VRRWgqjVYS5k2QA8xYr4rYTTvZ6AFyMS2hoKF8TNV3324he4NEg",
  "key4": "4FsSG9Y1YQKJwxmZZm4YWyqy7WdNkJ3bfc3MNy4sA7q3ZTLvjE5KykjJBsmfEjS5DD6GVAWU8JQTR5S8Ju2MhngQ",
  "key5": "SipNhqGDuh3dZwsMx49uDZRLSji8tdbAmauMuE1FmudGdXM5vzFV2by3jjTtB4HSyDXrQFWZS4bMQDmKYnWGB4b",
  "key6": "4AvwJY2aY75hMNmaUx7gVFuNLAWkX79VDEqiR51Q9oF4nNojHE3MkKab9EFKVFZPmgASxLB5hLf9jqihDrDuqkC4",
  "key7": "tbPJ41SFtcfrJiPiYTZBZEDi7YoekdTx5bGaXtdx1AbBy8oRZZ2rLchp4XLfs13gznWNQBiDWhdiMQHBU3n8v9z",
  "key8": "HHjnJCbRXKmr5SomqhKighvUAkx8LrK4EFCvPcsZQYcNjUWhtb86bPZvh6nvfgNyTVDtWJSariLTTHRTLuzZtTu",
  "key9": "4anUBoY2mroXQoHPzHqikYzrS2ziUJTP29y1Ha6C6XQPcJizxS1UKuordbmimWPtgG7yPsQn9V55naW5NieEy87X",
  "key10": "2qs183ramqTKEjoQSuD6Cz6aZwgsj6TeT51YdwNkR3YRkYhaCVfeRpAKC8N4ujBjxJ6JBr7tdjXy3daMyNVGPPDg",
  "key11": "41goqbAfbXS512eYHfugSR7cyCQqcyPH5hwMmRCkz9rS8FsVE9Wwuqiy6pNPjNGdj5Rj6SGan8zcQWZ8eJckLXYi",
  "key12": "3j7qAsUtyB95eakKgF4qPYhHrBjRcZQ7bD5oDv1Kco6u516supAViM9xYX934usRJRjFbhMrXxfcXwgob6dh7HAa",
  "key13": "5ykfoc9zxtqRwDaJXcAwnzQ8Ta7JmwUEMZE5tmvQZe1SNjEtaERczaSuWEiNiWwFAT2MJEs1NB9s4t64M17pRtyV",
  "key14": "2ZX3Ny26vY6xyHFfe2UiwnxnmbGf3kJkZc1w5QHMs8pCx7VDGSvyfPx664cxXQ2aohXdxUKpGSdJiKt1MsLpb32B",
  "key15": "4mY7P4mSeAA7eHWXTgNsYJG6LfLSo4uT4zAQtqjghn87CX1epXGdeoPfhyM56GuXzk4p5qUUSsaJQu2z7W9DAKqx",
  "key16": "2uccMdQf4NWqNvNwbWDibBfWfTrSG8BpKkrNzx7W3JuhiUPWGLGYEb1fTkaRyXcdu8tRwzsjS5AMjqNCvtsTPEMC",
  "key17": "nkyP3c8GPRFmJpYa4i57kfcHAWhTiXzEBYEmdi7FWixAUUUgt3Qv3DxaBjG8qUiUNJEdNkubsrgPQ2JVzHHC7CP",
  "key18": "7urRR2bH1yofVQiq4qiYE3UBgMsrzW1uDs81kSp6ygJvox3gsZ7HEQni4D1DwkzTrofH6a4rTiK2K2M8oXhNW9y",
  "key19": "5HWLrbQyreLw9pLoYsSHgT4G7ffF9caKTxeVGXGmiXYLT1iGznpRmcFXM4gzCKL26cZCq7REkiRcsYg7E4EPioTX",
  "key20": "2ziWHJHMHBxe1ADCuvt1QiB4cbE3thwj2H9dTSSs2umDYcRK3jw9Y9ffy77KoieHQ4iKNVWH2mdybGpT9nYUBC7c",
  "key21": "5PNddeiK8E53jEofacw9xw6shJmYbYZMUkyupySMid5Bnrn8okEeZyyRdURMe8W3mJYjFYL6Ku8DcRaKyfcPwez5",
  "key22": "4KVa8yQkptBcRHDaTo9H8VhWD4iqZaDdbJqUew6wooWx2NvvZqpDDfKdA71oemvH6LKuwwvzCjgsrdFovMBaxReU",
  "key23": "39MLhPUroq9KDjrR2VDLX5FKgvGLkKcKCi9t8gYr7znnT38xBSzsuDDLmT7SGuXGDgnoHkuLhoqm7JYB2pp5fACt",
  "key24": "5WbJT1vhtg8XShUP7SoZqww7gqcT6NDNhzyJZ5rvgyzK9kewv3UvTb77yn8EAAuq1YhmPRGz9mVY5EaNACVf8Xt2"
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
