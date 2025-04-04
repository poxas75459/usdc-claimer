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
    "5CDHmrNnTjFPZk5gX3KptzrvJ1BtrxCSkyp3k6vbthcBHVnck8zyijEJHCCfGgCyse4VPGLG2d2KVmFt6crAYGSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47jf44LezNkpWySkC56RTQDy9MxSLdLpoh7vSTVDxhanfkooPFxVE57eRrB5RJASUAANNnXyvrrj9Zmf3prBESTf",
  "key1": "463mAC4GKxpu6HkL7eopVj5JbbQ5KxK6S3BuYCYjKU3rep3eQhboh19TQk2NPicnGkxUYAuj7qQTB7kKumz85wob",
  "key2": "7rMP15UX6zrsySNmiH2rkJzmkVy1cRoRpVFjMC5P95JyhDoAGf6wTmqJwkKZU8CuffatfFpFiTwq8NLh1NpXBzi",
  "key3": "46Aacertk7XHTTe3PfEWsh4A9rZDYMEqz7doRmdJDv6izoETrAU7v5aTNf8ovGy87x1K5NQrMrG1YwFzVHc8FDaK",
  "key4": "34QLPV1UYNHyC2v9WnyEEF4MVH4c1v4jSDe3qVwGhc9dSwFeFwiJNpPHvCftFtXXwXWio8YmbnyJXL4AtbyA7tdA",
  "key5": "2sCFjiMSvywHnLYWCx3VQ2Pz7fiBtW43516DtzBRh2duKzLhSNcx9Ev9afKsfqXxGZNi5ohugvBB4setVaeX4kA8",
  "key6": "4yh7SUGcaHZGEyQ3K4j8XSCqqvpPRpVufEkL1gCenZUaA5GeiBR9YxyBGKtWrKdfmXBTmNu29MFoG6vFUZTHAUMT",
  "key7": "5cHG2qm4uUHPot2EGB2S5WC8LADVn3XB23bpYqRJssyqhtaqPjEH5GZxDEzhtEahfcucjjBUY6Jgb3XqBimEXZuZ",
  "key8": "5uSJLKxRBoCJf1o9vnjezj7KRk749dmx9KwZ5cfX3gPEcceveeSWDwKxrbnEBNVS11pfvk2TASZ5nR4a8Xo9DXZn",
  "key9": "2XbaG8LTao1MK19PwAFjeRi3awywYkQ1ZWj81TnVweHYoYL9bN1YYpS8rdrdb36SPSSKUTvp4VLDAgkn7pe3qwyN",
  "key10": "3rhefDH7c3hYGPWvBdYSDBSw8jYE366fBokEuoQupeUGiBcMkNqgSEW8Ayc2wKxs2FTKYsxKCE3PK1PPzd6YiTbW",
  "key11": "4pkRoJbYZP7sptja39BZgRznsbqesFoWmw654oBji6TXLG39sG4LGrfBUVwhgkht32kUhbTb7qEWFgJofetXWKx7",
  "key12": "NGccGbdiV6uPeF8eD4QCYvw2UQAFg2mEq2CCwj3rUzPS2brD56QzPaR3eYmZ9cKgM5jhfYRpNVbvcNpe2rcQQsC",
  "key13": "64koKozmQFQ5mE23kBFcgpZQMoNEFB8SS32pVJhXrPJCPFazh1QHM8GGqhZ6sNB7oX9ALYNxHiNzx6iMTpvmeeJ4",
  "key14": "4yMwVHXqH1MUYb9ioi9wiUbfpQm9LstMagzwcR3C2YiYNzUzHf2T6iGjPchJ2yyJLCQxv61gFC8m5qtK4wB3MSHi",
  "key15": "31Dm6NFKb5WHRMq45YSjAjoakbw5LZshQxT7tnY2sfVENWmhozbFiMJQvhkKFfCpqUczEUwugP7gvFdQWHwqecph",
  "key16": "48PzejEN6ovT4pS6N6pBkkxrciwQs9JcZzQ9dkgMTw21PWrsU15Ytuq7A9PBydjnvmdLCW8VHR2FxCTYDMUeg6TJ",
  "key17": "3q7iYboVZLXXBNVY2MScL1BTPBnEoc4YCiJJvJUvbV4X9wVXxDh6ifM6GU9p8gJ9McgLxp7qmivQ6NQjhPizxWNe",
  "key18": "HbFxsWWRc8E78NuFNo6V462k36j8dqiesRBTyTxub48G11SM6z5ke4JozsyuLR8RMCS2xPBRKffS4PfEuPvCqDh",
  "key19": "5VhCipoGC7f6FtPFLGSBTKNpXxfqZGf5FEd8N92AJydmwAdbwAPq7hreKMkCEysSiNNGx5KUDX7vVyWQ4m3CButd",
  "key20": "4B4Yt5sta8TY9LiGsW2Lj563UqSUaxZ9E2favArpDdhb3e2SSvgM9P4TeMRMFSm3VmmdjLDWsqCRo2M4sDy4yVXD",
  "key21": "R6u9nErbA4MjMLiSUED7SQdEmRwnBoxjbd3SH5w7KDFtnAfLqRUeraxX9SuKLvgyLPknEZ3tfrYYUUSWX7gssvL",
  "key22": "h1Zu2rp9TNR7ftvRBF76tZNFsNUgNNZSfqz9L4t3rfVgq5PdQohxB2KCopEQvLafNGh4XnmS1yor4ziCvCU3TDp",
  "key23": "Y4dvZw61z6kN19AMxNAWXqi9hd5TfK2C9ezWpJdJvWXBfE4M4VnQfQPRAZDsn5XWoxkM1yZd7rXdAaFLPaMpBa9",
  "key24": "3ZmddruWs47T8tXf6vyU6fAX2aVoiKBRjo37FNZ3htYjxvWqwPUp271nuT8EJcAfzncPzRGAe7Ght3u6Wu6o7Yye",
  "key25": "4M7smviWmKt5fC5hhtwWwtJArDp6GYKNrL1MPMa9x8fHsfAxS4vbL3d1ACtihJmzwXzJqiyZ5WUMFCqf2v8UdjQS"
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
