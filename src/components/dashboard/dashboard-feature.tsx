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
    "4qKMjGFKzEXBqRGKN44tBMwpHCkXqPviguz48UNJTsx4jm4EaqxF3zXCRf9ydBgHvYhwz7ecCp8gRBUpF3beXK8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lm4GtedbMwLVVM5ogkqSieJ2qsk4W4onVFu2juTXyPVRCr4VVmRB6q9dHNgEAnWW1vjJE7SsjPMEB6fCiCnwWMV",
  "key1": "pGaA48oYZGutKghq4TEBDxbwLchcbz5EZrJPk2KTsYuKtgWABroq2EjhZHY5qJAVCZC4tk56LNTWv3uCQbYEStM",
  "key2": "3YG7zNS7qsuLFNXHGLYWchFowt8y8UJJeNbMAXQYh7KJaCkuUKkGyJsZjHfUrsYrWkQZuRauD65nAyiRL8zfjWVo",
  "key3": "47qm4L21VdPm41AHNDJeDjGk3nZ7bUdh6aZyz1aBpSpYDaSZutuuZpKAHtxMtZRU5NZYBVbs6AcDkDAG48QxRSL2",
  "key4": "3usbMV2A88Msc7LSYa9k2nFqrzUuHyTv4yNuB53oN6JxTSZiSj5xKrWJ2KTAeYZuyxNKYDsY3cSs3XePTWoLD9u4",
  "key5": "3STGSJyiGDZxJWANBB3QvgAzuybTRksbwqdsZosxrjeN9DHhaj5LajXnK2Voj4oWYhCBzDCCk3wYzxAHW4nLVGTp",
  "key6": "4LFqkRNjQyBUJpPSepVv8p9S6vbR4QYWccxv82HeZcGSE2oSXkcRiFfD3EdVDx1QCBeeYE8BMBYa5y9PJQj3mpSf",
  "key7": "5iZQQ3MtUfGzEJ1Vv8DDz8CtnRz57sBvFbbn823EDG7vh1UGHGnrcUKZHYm9V2pZdozKWWqJjwDG1NFzxi5cniBu",
  "key8": "5jX22BncU9hDNHqFfu9bUZBpRERGw9DNihSmQXyMjjQT7VUqeB78v6BP1gdQ4HaDxEZUY1p6TSMpNaAWZfTV53Ji",
  "key9": "2S3ymjodWfeZw6XGP4hagZ3xCvcQv8DKGKBPbmyNb3Ztm4Uhfao2Wg5JRd1bYRWg8AA1bwMV63gedByJJXwshi3e",
  "key10": "3P6ywjawfaMEkcuQj3PgaHEo49pCdyx82eixQNLGWkWXRsivc9aLaUSgYo658PctCfQVzYk7FmVe7J1chwho19jN",
  "key11": "2ZfTAeBSP1VSiDS4XRFzR5RfzQ2fZuMYsWCnMmTgaFVM2XhJjYnrg5anMcPTyhQVnhqJaNkCuwYCzDBMbghVprRa",
  "key12": "36aedKKKxAPCZ2VyXAiQKWpAN5am5oZw3Bwcj8vHnZwN16qNqr1H6ohsPGT4FgJbtvewHZFV5573oKF9vhMzAtWi",
  "key13": "KuCksSuvUg8YmRYvGcG9ZVz7RS2scqFJg5SUuRWag2GEzDgUKmfcVrW8Ex5LzLZv5wNW2D68ttJbp314uoEkv27",
  "key14": "4Hc6FxFbKV4kFXBGBFN9TySsqBS7hH3L35Hphspc1SeHR6xnyG2Hykh3MTtgN8RFMQSahYvwLcG3u2usAHN4LJJo",
  "key15": "3feEmLxd5AZGqGQ2vgYfZHFSccjCb3GhcrHForyPyxetUxT8KsJDvDqdhjrKsBrKjS1iDsNrfaEL9wDFD4y4e6qd",
  "key16": "e2Hz6wU16pcUqL9YWvn5xa1zAX4sT4nqf3E6DcixGfBgasWquczse3wSd4NbmRUoFmpkCkKM1s8vhDLCpLuoXMn",
  "key17": "31WG9h1neHzLs29NA5jBACHRL5EQkSjKdRPq1YAcQ8e2xytJjoLMjtArpWN4dCvkbnQ3ikExRLBawL9MXZgTxtS1",
  "key18": "5tDuofaxpJby2x7BBo6VXJqziLbnpFBihcRdEjDCbqy2cXRSy6jYNUbyfd4yhnNVhTLPHN5XsVNXXpRsGGHCvjSp",
  "key19": "3YaeCv8SS5LTCM862pqbjAD3Y9dSroh93R1xmoQ6SehDDe86QfNnPoRV9idGMBk3ercCrF314K3L9YHHNG9rwyN9",
  "key20": "457yazHdPHGse6yomzwTkhy44iqHip7kp7jL5XTPq2o8JS8CxSj1MWKSdUmHtPUzZqjgR1r1DsYLj9LGbdUxNpmD",
  "key21": "2doGLgGK8RoQFiGZm2yq3xHwNKsePMmDToFvNoETw6EQ1ZNvdeePmWj9WuScL21PBViRd8YQLDYDT3QoaPbH5po5",
  "key22": "5VGTHwkWa4MNZmQtdFvQPpDvVWhTijFk3JPpRLcJJfADBSu1fGqqsWCpip8hXk79zcvBiiw9bUvYVtDQ2H1oJrno",
  "key23": "53MY2N6Cp3itBKpmm2mwy9QE3JeB8nRN8jHXQdtDJMEeAs9TNbnzwzkyHWoTfrrPFtYf4bUWEVTs1JgxMV1HXRt6",
  "key24": "3jSDgGK7btaA4suKvPFAQqHcBsCzEp3883DAGodHKyRh7hMvxAviL1E9HTMWgQ8PT8jnWQZkLkBCDjUyq1RURmsj"
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
