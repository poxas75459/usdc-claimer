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
    "2QFJ8yPB4uY4BzvvkwmqHqPcCRyhJqdydC9J3AwJEsVC6xAYwd3zsC859FZHnfVkdduwhRccrYjuL1TKsx5iyGvh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ht67b5yvz4iYbpRGY7Yr8zJyZBfNtrL1jgcysfmiSotLn7jxd7wEwhKMi7vNdgdGfj71KfuhZDmcgBh8CF6pDVt",
  "key1": "5SqerTFNk4qe4JZLPCSKu5SDowM5nehjvJzx2sYJA3swdVPSJVD1HTHQ9GVA6xG5YJqqQ6754ruXueujPgKgZMS9",
  "key2": "32zK5jSVhBCPs9ZFxzJBJZ8dVht9s25RRKuFU6KXB6kzXmptkV7xxJUvDiCoxY462v7BKWowJ5sM7EXHNbNKXjA5",
  "key3": "4YSZgPhwjVw79FjxyChHjUUATe5bwB5nm2hBGJY12jqAX5fcc5PFie92MyXjDNXSyHrbthaV6J8vd6WpRLTmSDW2",
  "key4": "4DhkHZufSB5QJamfYjML5QE3FxBZgbQ5anKHnmVjLJ9xSYXcnaNPv9YmZkiFKJbWjuAvpXUZxosy6NHz4c1cKyfd",
  "key5": "3Kw79sy6Hab3ZCWYcS2WurjdBHGEB9BRrY3rrMPUWdKnARuk8bDkXpEEKU1KU4KdEJqyTjADJ5mCVMQJZth1Qqkr",
  "key6": "aVkQJSn7HYCtNz5UaqBf6WqLzF3pPYAWRcNaBAk9wxUtcekKtTDRwJBgDLf8EqKHq7RR4bTSbTUpSiJ2uR8ayo1",
  "key7": "2TnX4yA5SMqsyac7gu2fMfGWbSsqUtaucQ2ehEwPXhbLSq71rkFSKMB8r6QBUagYdwtxnt35TaRtNPPiqsMjykmC",
  "key8": "4iNBWNahd5Z2uwTkgNnnE79c5sEd6TTD34S7kSJfouLspppRX1aPk3WaWWGMqMhdFaga9efJqb5qovg4C1snFLT8",
  "key9": "3JiwXgCR5WjB6oeNU3fu8hxFWtM16nLkxtisV2rbSjK6ALoTcjmCztnyEzG37xfns9XjjHXXidDNKrQf5H7zptv1",
  "key10": "Y7CdFi21boEuuZFUnzdZM7mTemj54Dwyo4WArAaGYcnNK5oLK3TGiv6HBr59f4VD7ZwNgy8KDzJzW3nBzbo7sTc",
  "key11": "2QniSWi2DdDaQkrm9daZjrBoGNRDYoDPUaVpVR3NAjTjRpADY2a7qkUyynQ1r2t5SmeGo7KruA39SbACDVPYBPwY",
  "key12": "3hActu8CV3BLqbhZAop8FAKXeDMTkKeCqXh77mW9MtYCjhqiEqsQ5V5Acv1Pxd4rRPdXqVTLPC3MTgsjbEK7G9im",
  "key13": "3f1LJc2DJuF8XoFov2qtSBkrQRxoxi99CVXG7K8Vcy7yAZKSevLWM4PPbp4oNN63CJVB48FCVKA8CziyhU288Uv8",
  "key14": "4yAPsKcFniiXZTjSGqBiG28jhkr2N5ftjAtRYKFeMkgCLrzTN5AkZsKinwnmrWPUn4mJpuxs9NsBtrTbSVL3Vvy3",
  "key15": "2wCmzg9k9pfKgUmQLN7jia6HzbQyJBXGWtMfWRiT2SQiFeVQfzejjtCxnKsqQE9xoTht4xF8NLvF8qoLQX2Phmwy",
  "key16": "npfr1WQ4PaC32XyMggnfG1U84ymThoQ5sm1FCDDFGvsJHKEavzc6YQTyCTZSYE2pVc8yCJj8LLiEooZ37kMNuHt",
  "key17": "2cHzJbXyQeMrMsCMLxHt9vS5nA9NUAJhvvW1oGU94r9S2BX9XTiMZkxrs6fB9LegGCiadvNh8xto1QKrxUbAsQe6",
  "key18": "4aVHh7545mncjQoRQhwK1ss2mQjG7UnfedtecDp5DJMfgjnQ5VNjXiEQ7hdyQbqSyCdMk79n1DrWSFyu8xbKFKBh",
  "key19": "5Fe5iRBS3YipEB7Sbe8xwyNqw8ia7gqHGgpggkZULwebKVd5rjNPcJbm82vfXHojL5dK7hqru5iE5WSZ8K53Siru",
  "key20": "3cVXwseSq2yL7CZovmggvaTakmwSqaUYnYaaq2AZt6Ni9QVb3kZRpcQJDw9g5cKxSFi5kHTirtUaQ8m4kgquZNh7",
  "key21": "2YJtGFyp8EQPVs2ngsfC2b6q46uAcS3RhAo8gXxBhSdBiBuw9YLYkMJN8Eq7EdxGbqZXmp2W1gEtiqEQBj78sQPT",
  "key22": "5bwRV9m3JPtACZfKEjsDXJ5jyi7sk2TRj6Nz3SQ2izs1fKgvVhaSkPGxikTxaFMQ9pAB2pKtWXNVtr4E8R9SQSzM",
  "key23": "2T48RQvxCcNDqYX6Y8YabY32xDhGt52a17TYLtvzAjggquz8oRLaCbtNG7uYKSYwkecncqbhQgC7aFNDLd4M79xJ",
  "key24": "4wx8rkdZeMovkDM1Z8Q8nKoNNtpBrYkaNptJTdwXjZv3D4hfwvzx5kb1KcXkJocvGaPaKeb6Cwsoexi8e3ce2W7F",
  "key25": "KrizMxjwvZcZ1h328MvPaBMWR96WKReRojdpJZzzs6uepEMwJnQy4YcsnT7EGKCAK16KFpNGLKpY5g6Rh5UmB6d",
  "key26": "5o1Ug2T8s4myjef6gjHxGzcPKozmdpPsBzZWKtyG4yPqgf3UfD8bhCm21xZBDfL9WKF27bFBHAFd9ke4oFq178C7",
  "key27": "2xYeonuYT2gm4yCTig1jhEbWDXDAQnGWC3ZZW482qFzyeBdWLteFe5PiAjeN3ZHvNwuogmQHFFGAzWisxs4t4Mta",
  "key28": "3zmFmxmuHmBeERZtLmTc7BozYSnQXHMDTqcDG9P7Lroeydxamhg1bRiBhZFKVntJvQ8otu72MyN1E9tmsvRTbnCw"
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
