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
    "4kivx85audcKoZFjJFYnosK24EZPRpnaaCRdyG53c3dXsetDCBgWUz8xbXVm2CQDCccEiHygDREmXGxsS3afvH6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V63YYGkTWSCKfftakE7fYwbdoZroXWF5xL1tGaSXF6R8v4cHct5wasp5x4SPCboHUvvdAwCbTUzkjGM2DNqds9G",
  "key1": "4NMxwFpfz25hHjbNLNfjgbZebPugovQgLaJ8dHt82wxcs5RoFmbA1zJdixxVqCsLX62MXJaeTwTEhpsmWzNRME3Z",
  "key2": "2hrTQA7Lwk1rTdmyTEQSioaUaUdCS3zR2GXegSi33nTwryzGqWjFK6N8r1fa1X47Wxn6bCHKsLR7ph59BLjjRiBV",
  "key3": "4qRgsuRyDVZpfr6zLXAGNBH5ALuGTpQe6utDB8VgijP9dD3hM648Ap1kbngWNh9rYP4jqmZvk4D7JvKTQBTVkmhy",
  "key4": "FXU7wg4Aa6syShXHuRVzktu7rfD7Qc9R8xADSauhZKKXwg1n3qXTuosxfvpwhdWpo2FtUCDNnHZM5ZfCtPWvRUn",
  "key5": "2xmeeQtP61JGRRQ2YdaQtxFQiTQvzVgYfwh9fxnAbN9kMcHSnJfewVPaUD7TpYExrSQ62ACWvwkwGdLxEK8ytYrP",
  "key6": "5SKmyVnfhm1tyk1A5DKsXqTbZGhYA9uffFNzqjWYprd8fChtFBefy2xc16CppCNamvmJN5CyKfd5FtNdRWPBGqdY",
  "key7": "4Y116nZ6YF58cYRnUA4g68eznoNRqzvgsJRX5Z7TJJPnAjBuMLrA2JMvA3P68vdAUf1ugxPWW6H7ZZYCxP6EnC2r",
  "key8": "3NWuQTgSahSJWmgLDwgGVisQGSZx7LGMpKajYKsMwpxWvEq2xnd4FShACoHtP65j9ktGBPYxfMS79tLqmaaebKhW",
  "key9": "vafkLepxhwMGicmrG7AYG6YQHeM6F4wwBLUNomvgG98RJxvsfNrir87qaoA7Ck1EcHJxCgADzhZWWgbCK2yzzUU",
  "key10": "5P74sX69Ep9sisbNx6HnZm1bA87tdrExsSjwm4oyCeKwtTNsxQvVvEU8S7tXize9TCg6dxvVLXN9bS8FjCY2S5bY",
  "key11": "2wvQMuUMtLRw1p3qvoxD6ECPZggNobs2Nwek9eQi5VFpAVtspfK5BxXiYaNTbLS7rLEP9kYmCma6ovRYyXWxXvgZ",
  "key12": "3VKnrSxjRj7kJGozCGTWjTuwZwLg3aETEDh6AhvoSGrU3NvQRNc9BPmTXPxmqsyaLruuLvE9vECFuXG8Yd4Qvx6x",
  "key13": "ZnUxYwgfGdjorX8e7nndqf1wKzHYaeBKjeAMrij1t86q6BgE3wE2ywmSuBetkDbN2k3cxehmV7Seu4HidtpDNx6",
  "key14": "3z7E7MSQkVZgcMmaho7f5qSaaGNqzZX33rDybBGhQyJS9J5KTmxdD6Urw9vGEX6E25BkEUsdnEiZD94mjY9iH7ec",
  "key15": "5TB6iZsF2TGsaugy4DkZz4FB8nJtdPiTL6SsefytqFaNgSKpB5MM6zZ7hP5srSKezbmN5QTXKsXV7VDsXtFoepnw",
  "key16": "4ZbcF39ZQrKbaVGydrBR3rx7rqaK4UpcaNgnLpSqKABkKeQT9TQdo3o86riWaUta5zicZne5rZqJc9jXWz5gRcVn",
  "key17": "4j3X2NqjrTEK2qi7yJDvcLQBRkZHfB9eh2MEjiSz77Qqy32DmHnF7uyLbZicPEMoNKmMWN9LatbXnZ2AfpZvBWEm",
  "key18": "hAHafNQZ1iKJeUapGVUvQb2J6jnNZrpDNVutVsAQzeTvzLn2N5wLFgn9i5ZCWkKSpDm7HCg8i9rWsuKp7XG6JzY",
  "key19": "2LPyv1UETiupSihxbgQxAoAY13u2APYMnCHgZRuewXfbiLUGZVKf7M8RVjp9Bi2PugJSsECfJGdhcuqqRtFcuhLD",
  "key20": "Ysm8zRyGRuKKCA9Fc7XHxHVqFTWZW4TYNbMAfQEDeRvrvRkXbEU574R5atBLpe8T3m4NzKWtQoo1bcrd9BPgNQq",
  "key21": "3DkCUQFDkNPib9VXTENK96cyoXYcMZmZo8dkFgpNtKWRm6fxVnTdinzg7tpP7AUyJcjV5AgCi7WvwDRZCMHa8BNU",
  "key22": "4vtQgxAiyVHLFhmZD3eRPhW7p9sG7Joc3X5jRhtQdiKBeQEKAkv8CvzYBg2F6ackyw3g8zMAc2uSywMFJ3WoF9K4",
  "key23": "3dHYS8bzPabxUWko3QvWwWnkC8LtvBcuUVDpqB4L4CDkSJCR5P9FTetWR6bfT4G87kGdSUimTjpgQksnfe317Ffd",
  "key24": "41UJGmhduuwPY9yapdvUQ8LfcH2e5iNNK4awLPmYXQ62Q34pZR2iek6NgUbtD9rqSgSUrY5ynS9gtdERJ8MtwRiM",
  "key25": "3mumwYdroreHk8a8cJnxDSLTAnzReDciGVK51wQb4PDNW3HULEdQGj7daSF9K6rB7QWWP2sBpNXGz8kA9MqyEM3i",
  "key26": "5bNfBs5aAK9mkhKjMvLCWSbmB6EXYxTEBxeCqE3VwRr5SJtLtuJdZraQ3dybBtkjbzQ6kD9MknLPvjKnKZgH6hqA",
  "key27": "24L5Xw1boXZgN8gQikWnYrXRK2Cm8LoGDW5EmtFKAYT8AuwziGzWe47z1V8xYwBb7QsBrjub38hJkkLZRbup9coY",
  "key28": "45DngNBsE5PAZQVvixgtQKCjkWBW9EvArdsGot7VjVmsvFFKMWY2jHFEribabQTw7oSdTd8rWhkPau8cFuXTm27r",
  "key29": "2TL8kK9Dj5Lt96VLxAdX87jG5xMssrH5VgjEYZcmtAh7awTknsJdyj7YfkNFTpm5TptaLfcZvB9s3nrw26eQ5jLy"
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
