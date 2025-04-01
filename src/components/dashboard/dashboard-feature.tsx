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
    "heGspib6djT1RcAEo7BpFtC4QUk5dgcSXhLZAzgf389E9TX6teqFZBVwC15dzD7PjoSjnxN4JV6bpBBo7cezNFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56NPruViq9P7WhRChw8Bqs3dAyzzdQsPn7DdZv8MBBqU4A1Ji2zRvmerVhpxYjUqbKPQ38aELaFwMGDyP1NdvQJt",
  "key1": "2QeNLtM8VvBbCVwhevZ5LVDvvaDbRdJEeL8nwMzv4VB6yxs8hjG2kDgvv8du2yuTqMeoDpvnCc8FWTKWUstg8WzK",
  "key2": "4BsCDS9CbFbMezvvkBt7yyPgNsieiJ1zN1rTCDVrq1i4WVnVKyPyh5X3YpLKhcqHQbKGsjDxFYReReJtSnC7uPQ9",
  "key3": "2h9gMQEmv5QogmDw7U2zsDhe5zhweRnyF45GcSBky36xx4pU3HX5hvuhiXMjZ988PnkWnFvBQNpw1U9CeGu8bFSX",
  "key4": "31q1VPjgDUhwq8N7WsxTf8c5NtfNE1innX9TrHJpKPb3QpVYtthreYtQXiCXhprQeJWcmCUZnTrXG6YDA5u7hPsK",
  "key5": "2qQjf7tat4iTTThLM5gTFVaQLyyDqGUEEPn4ERQ5JbxUhzLASbBWSPFJEbU1yyqRvYYBy7n1STgxfGeKHKnvd7wh",
  "key6": "2CATgW3YgyW58UGRutwKL9eqRLqT5nuBQrMSJWB5ScF4yVwqP4iH545ggk4WfB1ww1uYStFea8BDxszoP22fz1qD",
  "key7": "4Miem9C5KJGC7Kmbwr7oU4L5PNN6mJHUVoWPjY9nvMQvccK8tGzVwZR5XXzDGAtbnwjP8D8PPpUqj1yFdpNi9pDC",
  "key8": "ibDR2YQc83HRBxek2xjceVc7Vv5HQKfKAYVpbtgFm3rMRotnjsjABcatnayMsK2JdhrDdwsXuYFUvxaK2pFum9W",
  "key9": "3ZHHjQN48CdKozxbViVCsVmZRbzhiLJ2TWXeCPPPj8KoBB3P8AYsqbekFMLGvrkygmMxSVSjS6jGQiorPtsFWJ9a",
  "key10": "4cD7LKMm1nGTjpaWMKvxcmzePTJFTGZ8GxB6AmCrrvvHFFi2N1XiGrY9m3G2nH5SsQJa4pw4bvdpwchWQ4nmqQcA",
  "key11": "3Ady7jvNdGwB5yDzaqfJor7CFda6bRqi889tm4V4m9Z79JwYwX2Qvok8AKmuQfMb9utzvsBu5k2ZvNv2F2HVxdK",
  "key12": "4CPRqCfRrdPzxXbnMFBCaH9tLNPoA4vE83DrguGwoGPgFTuhXiffmxdtkfR5wWttEB3rbJAoqvuZKbHs3jjE4rj2",
  "key13": "4W6EzA1GYX49c1dHpDDZKy5SFHctE7Ka3B8fJ1XRm8MBZz2zujAttRVyefs1h3hvRCeUeEzVWTzVjaJWLUy2Up8Q",
  "key14": "4psTxLXkf7NYxksT3gV49xj2uReZsGu9KqYK9KjJdzzbS1uMpVvd4brpjYCXKvmYXspuratBSZfTwVQdvPKoJgTH",
  "key15": "4ZMgC65UbbU4ZpmEgpMW1jB3Na1AiR8CFnx5LoC1C6Ca2knFe6W41Ree8Yhqosunh8QVi6A1PNwHHfjKAoV58AMf",
  "key16": "2Qv3Nvq55MqttwDxNz4ABcwQtjwUX2GQF1BSFA2pF9oH9bGLqCv4h1jm5edQArckaRQVmUVgFMCa6VFLtWhmzk7x",
  "key17": "2ewgujtL26EzdVNEE9dWvXNt7BRzzfCxxMKgSMUNrrTwcrarcTqDXBCPYz1qs2CcrSTUXRdiN95QkUMWVDas3jgB",
  "key18": "2kGranP9BBDbFdYXd7MkTsR3j9zNohS1UWDS9zhfKSEowQa3zHUksd2gY2ieh8zZ71rv7ZXeabpKKijquWk6k6D2",
  "key19": "5Hw5rDWs7o71akS3aFv9ufHFPErbeWEANsKJn7PrdUn62nbVJpNH4NcbPdWmkbhRdUsfg9KpVqCArHvwc3ihUXek",
  "key20": "35SVDH8MKoDbB2Un3eFpxqJdfYTHFRWS57Yn8o3eoRaRUst67xqXhjNtV6SMMHoAnowtAcYJTzfYoQajHfMCehUt",
  "key21": "32MjnFXo9YrGEC9SYS8PUv9EUA62feJguGG5JBfPSbbsm8ksqMwiWnu7JwcpsdPU2wZLt4W9CCwKSwcWaqnxKJcP",
  "key22": "eBiRosnhisu1rVbNDugdWCtg8r38JrH5TTn49PvRwEBUsManSaXr2heJLw6Tep2EhtG5sR2SXK4z6Yc1yfL628Q",
  "key23": "35Na7nzVntcEBeys7F4eHnTqSsUfgToBwGMBrHje8JjFrNJNp4q993huPswnPQBERbwYq6Nc43btDwfDGF2zm9sk",
  "key24": "3SKAPCqxazEXyArXgtNXcgcyaGSSMbnDM4w5X8U1oBWprkg94G93kfE3a8NaQH2UPGtHWNgGV4mg3piaTyRc6d2v",
  "key25": "S7KTG6w6eQ8g8QoG3vm5pzdvHLh1YmCEwVoMb1Br43t2Rjv3YaLgYkAKfjdPzPj8FqnG2mVMa7bWNckeiXWrcja",
  "key26": "25jpTPSXB9RNP3tK4RuK3XD4qY1J3qfYJvSw5GmD3uoojytq13rCaaXmRVYqB7BQmvzduvH8atxaw2BAhEV8Ggg1",
  "key27": "3Sw29vHnRDqFicN9Y75sTvNS92PqReCFgNgNgPBAuhnUFD8XF5AchBkuKTqE8Y6cWtnroWMmJSdWkPT3CbWgwqLp",
  "key28": "46wJZfJ2EWKyMEHibSEPeTsT9H3WaX4bz6zFc491Au4tgdTwaAPgtJvozcrw1e3jKbJBYW2k9xWKJUSbuo5D8gif",
  "key29": "36FrmqU9L25HaBYG5W1oBohGWDy1mHjtEfEZi7DqtVGh9Xn3gSUXA8YVRTohJ2Xc4m1gdzCYnsUwWuHx2hGRPbEW"
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
