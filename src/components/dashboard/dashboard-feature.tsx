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
    "2mQqEMUzowvvAe14HuZrNuWUvdEvSjaTHWhGd58foVGT84izyGpReN4vL6tzK3ZGFgYK7KA28K36rivDNqekXQ9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "261prgXa1ACJbGiACacJYFdoYN5Di1e63ePQYCHkNbbhUMxifFusitfhsJq9UzUsnuqy3ZUxjkFA3eREvioUoLUP",
  "key1": "4J1X5xSyhWvu7znXZp1kSaNCVquWH4nNBbqxACTNQQLm2YvsAYw5tuKrYhsMCfHSNxGMDVkhdiC9TFjDkK5HmnwV",
  "key2": "5pF2ZGkyncAAcnujUyVAbcjkC8Tpf3sNLXrRTQuMxw66PwhgMKSR1f8KnHNbGbej8LaA52Y5J5v4d2TGtnxPBGad",
  "key3": "2ynCQrHNG4p8QL9kKmzDHZqmC8PQynXj5VxaZTddWDQkwKD4E6HPLm1P7Re4cqntadzCUGFsCPim99EYqnZejEzG",
  "key4": "kAXTpYVeMqdrphk7ozwUR6JQQbkmn6fPkkgMiZNpHrbXpe6uktfQbsfNaSTDKrZMSaw9rWB2UaM9MEvgvjg9XvS",
  "key5": "3D8NjvjHSj4phqdvaxk4wBcwZ6dES2iyMBRdwSsjU6YKfqFGx7Vy5M2MkNPaSa5sh2bkEbyHMCJo4jZiYcM2EYfx",
  "key6": "FXMUgruZcEcBghcjLoqHtfTpbZvea5VyC1wMtBDMzFm9Hvq9k3FAMsN5nPjjxrKyzihSzxoistMHVs44xuBhPHv",
  "key7": "VrdSWZnx1Ru81AoF4Hz596QsrLjji1uMqgYSQnMCxKzRqhwYP7jiiB3ZvDk3yFfQmN6GhbTSDYAWpFCQJUTu3aZ",
  "key8": "2rbw1q7TF1CF9EX8GQpi6kjzMLmbTHAnMPfqhoZWxw81rY7wcrhbn8NFKeZmp1TrQ9ajhEQbH2MYFAqPDNebGzdi",
  "key9": "3y7LWQvtmBNMpYnhrQiEYAWLvQUNYePEfeNM5eLetaQE6d3Fpg9RVumQFMWQTCobzrDuoSK2Jin6qy3dCxVpH6T2",
  "key10": "PTV8WFfrQYkHttp2T9DW96FWTSruXJFQqAXnSvRb9ACjKrH1ELrTE9MWgNBvaaZUYtxzk9YK4w1Wuz2wm7Hyena",
  "key11": "pUkq3QUwUGcc3fcLCznq7oFgfhpbiFgF9fgihCFxB8n9ibhynTTs2tVrPk1c5eNmsoZLKz85saVR6iPeFe2gaYU",
  "key12": "3cB3t11Gmcg3nbCUvPY67NjYpefSngASGYceCFZXTqJKcAXc4E99JYosaprEUzHgf6D7SRgCMgSh92QsC4Mq6KEN",
  "key13": "5aJa7DKdWhvAdX9QdMLCM9p3zwoTkFXGGpHXJjgu1nDdhMicTM7qF18bN5Ta8Ck5zfrXqnBCghoCnDrSGiRemFNt",
  "key14": "4N7BaX7br5kw2PqeFe67NMQEs9daovUYVzNmbBQawWcKEq26y1Mc1sFwVGRmgvjVS5we8W5t7GLjBjwNJsiZ6dfc",
  "key15": "2TquXXGKwW9ZabNEf8DsevxqquAXvWNTeKmTWGbwQtHcvfKwywACmkxmakfzvpJyRD13xS1HTkhU7LvHvxEpk1SV",
  "key16": "2wz5wpsdXXsMWLK88jCwmUFezLTpxEFtfU5WaUNGy4VSAe5KCxY2HZB87JxTF8eC8mKEvFuva2vEdPQDkoSRN3jw",
  "key17": "3yXoJQoNVjWUxDNQXXaDAfsZN4CMX9RvPBTZ3s3TxrjxoWpwRRe4cJmqJZWmdJf4gRxnZZYpDfhtjHWn894WUdLq",
  "key18": "5ESbnLS3w6QKC9PWxPLz5L77QZR9R6nrdpnUgthSbkfLj6jkpKDgfLqBXwjjE2xyKdP6F1rmdb1ZXdTphtqJLPHE",
  "key19": "3kSJNw65C6A5cF2wdpFvbhS9C1DYa5nftM35F6BYSR7Epsn68sj6D5vdCDC9k8hJemgNSTLJwvMDZonev6629sa",
  "key20": "4c7KZcBTvYiJPyhr8tqWiYbeXokavEqegpPkmBnskQ77Sxytgpa8T8aRW2Mvh6jds381Nf28BM9PCY1giU5GfeGx",
  "key21": "NRkc41JFP1jjs5XGKDjuLQq6Vctji75HBVYoFaNXks9KRcFyXWQATmSXGrzxHB4oRHfYFPhry9m8gYu4jKqdiCn",
  "key22": "5NvqMFTDrUp6NpVgezTjy2QtBoJJYYdNM9HPZoGpaypPtTwvgGR9dKR5vmf8LmCujNqmfSBbXAVhicGpE8ZKQi6G",
  "key23": "5BAAGnq2AAeKxmc24mNHWur3XoRF77uiJHDTdJxDqHjHazJeLStA4Xz7DPxicNm55sN9LXnpepYJ621PPMWj2hLn",
  "key24": "b8Kfz9rm2ipdktf8mnMzRMpYVhFqxTEAAPf217hVXGi2JWK9CehAzUHfMpGcJPporHLeRMiJegMvvHZZFAZ847z",
  "key25": "4iNupvdS5kMp94tQntGLN8jckEFvSF9KqETc5mVKw1nHADEt4rSkGPie8U3M6RRU9aVbjGwbSZVjbRmfPktLm2r",
  "key26": "277GoGTaKzy5EaDjh3VETCBL4A1MYx29idstPmy93r4ojt7KswmUhZdcqSfTajrPAXvpc3r7UeFdpkSSD4vTcewC"
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
