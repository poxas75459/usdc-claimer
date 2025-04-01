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
    "oTVM3ioWyFcB84fwqXCtEg7VNd4GwxzXoZRX9d5zBre8Lj9R5gu8FAoCn4CQTwvKeCyHnMAhWDU2nPu9TFaeSza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fARHFFFswSWpC1sv9fZRpiA1dGUvP61NWtEaBrwd9qRw5GyyPrT37ziAeALHfx5CsTQtb6AQ7nKCYXRmnHZKDMz",
  "key1": "3Z5dxZwEAT8BUpRZbPsQS663W3mBBLt2KadVWosS3b41VYaigXAvekG3cUZcQVP38fCbmctXf1c8fUgbgpXnxnLZ",
  "key2": "3ydZpaffUpXGXF4RnrwPjkW6KCTdEyFQvmvPioSVAqVmgnHW65ZjWuA97auZrWcZd8Cy97B1BiYrQ2KTVHvy9KFt",
  "key3": "3zp1KMLkq6yLUUZwpNtiaaiXmLQALRk46k1JULynvBy4vy5xbe3PA9ZpVKGjLtzsxzKGDEnYF8SB1NAMz7gQSLtf",
  "key4": "bGCWQwc68utkVospFzfbsTK7yzRC2trTRtYh7t3uyStD5bgXBzcHzYe6ZJjQFcxHe6ZsUcpazQ9DcXgzBjF5Pym",
  "key5": "bbzvDBLRJyU4iyy3CNtXvWB13mJQyRb86eG4FSqCKDZvveXMBHgqyUN3bNn7wrotKtUEYsqD1XFP6bV2XZGLkYY",
  "key6": "46JKyxP2AyozRqQyGh9rjcrD93JnexeUJrvcZVd422N4jwJXBoSvwX2s9nHzq5vXzf6n7EH6RGimVBteXHJ1QSZh",
  "key7": "36GsHKiydyUKKYi1QhhWJKCd5fBZ2Q6u7SCGavpa6TXqoL3QrRFRpEHh2KoSfxTH7NJPRJdGWymcmJzTtf3sZV66",
  "key8": "2ZDfceSp4cGKxCtmyJV8Jc9AzZc6d9Nwx3fu6WuZDvNqrxqN8ju5naobzfvUiwE17dZ5Vdgfca6tXPJfa2g7hEFh",
  "key9": "2R5eEXVBijrKH3kd4x3P5cE8ENE56vPYXSJuqz7WTo7Bbn9vcZ5hnwRjp6EoMkG1wqRyV1oqUkQCBxjtWcWoEnA4",
  "key10": "4SaHUDB1TkRoctdrbsDQZMitDCK3azNMCayTmfGZFv8kZpx6kppes3qoT4DUcbN8FKEkSBmuLei98FQL641QVknq",
  "key11": "5TS9wVTDHTLgrq15esTqUXcfqedApxKhMBpgV7rm2feA1XH8zm62ZH2V25HL8XN6KQjLCeu2VgdFVMhLHvBWNDRG",
  "key12": "3NPxaphBMMnmMDSQFPVbqrzGbZikqWYC9NXWr1UG4xCdUK5mVN75Cc3PwuqVs5ZDSWAmbr9znHhvULh6GG7bDZgs",
  "key13": "2Wb93uDHiwH7xxmCmVbH34ijHpREsZebgRhy98V7cgwCQdajpn5P36aPc3Hsjivf6qxroQh7qu5TM2PacLC8MiSa",
  "key14": "5LmFeXpuDzjtSisQFEaDqkgmcSciSqL7e1DdzoGq5oXePnZvxdtkb5bmND6Uq1YESobu9QYFuKjetQT5CRuAy8rf",
  "key15": "5GKM6s6auyyW5ynMj2Zjr6D3d97X5WpM6fXqSGxX9AaS4AbzWPEtqoW7KUm8ga7oorKFHzeJAWAfD7GY5hXVcaHK",
  "key16": "5cctrdCnPRnDjt7JZR6nPoHpoKgWZhBnJfkGg3sW8aEViUvcgBUiFVdAhKuNQJgZb8iNJfJ2EzCF7sejK5AjTK5z",
  "key17": "4paF7M6arbnWMPp2WeJWF6VEph9AybSQg5Q6Gv51LQGzt4ZiokWD2FZrgmk16H7S8qKN44oYRZsh4S6LjABawwYg",
  "key18": "5UXrncCZYwkhuhFdLsoCvCJLr7TqnXgFiFo324zNnCFG7BbR3QYJXxSHiNvnmjgGaSq5NoNXv2MDdZHV2n4aKHLq",
  "key19": "3XvXxU4QAwrkqAKneCZCAQ56puhwMsjZRAbaE334zf4Ei8Fqynzy284vFoH6C4N5sR5sdbzuzJuM1poZ7oYdYJNo",
  "key20": "5CXgCjxAf5xsY1RqPeJFUfwa3mN56LZGb7ndaBndn6i7dAfPfJaPZWZNjAYqjSSSdoFuYbrXF26LJHXWVYxZ7eui",
  "key21": "52zWjexDZuExwMTCD11KiVF9iGdx63CuXHE7syfYaettK1q78s91Kv3MTsPDMsq146e9Xnqk49RNkP7qKrBqoot6",
  "key22": "2hBRPe9BSWAzxMhbfW9worRCC2cNvWUWB2P1rrYZ3oF9cLJHgeBxVixgm39k7duwMdJCAuL1XH6KATSEx4A1kTU3",
  "key23": "383P5b38uPZH7vqogixo4udw6nEsyGQdShbxYvHneT3LE2Jhn55k5T9gcWPuZ8CZV8JRe9NwBvEEMmLj1Z3c8AwV",
  "key24": "3xH1PHPSgnCbVoFbjicWmWd7rqPZR4ChAkFQkrZP2qPE8StdfTNM926xtvZZ9fW8Fn6Y142dJxSNPq8cmBEfGJtv",
  "key25": "5E5VLR5wD4jhgngvpwLJEU7neYEXYTXXYL1e6nNKt7fp7WyBT1CM8ceTUPQL4UbPDVWe8KWDPKYNx8sKBFD2mHen",
  "key26": "3CP4H7Huhz6cgapS1Sbss1uBvj5XE5d6KMF4TzGyRibvq6GHUC2utMeefjCqWcoVpa7Yy7xy8uzcX3EGXwRU6F4G",
  "key27": "2CXjUhJPoWVT2bsnNjEk4TY4usbuyiRTyATdfc9dN2fBdzVhj4H2m7q3vrKjHFf5sSMWMAHRKs8kmEGrUJTU9bNU",
  "key28": "5PTXekUSV2e1BfGnt6G4iejJTRdxsfkLJq7cE7TmtSE49SqT1V3tjiFTvB5WZ2YrbmczCZxE3uCrd9Gs87NuDFXj",
  "key29": "38DGraXEcikCHLMFRrtLH9jeeqWj8qgryyenCfU4F56iv2BgC3PsA2xVuX31od4jZM4cVr8XXrmqXRh1Zu29a3HX",
  "key30": "4BeRkK52od4fCpBURohkMYLcB1EiAXAAY8o8A6NXChfCfyZbhDpUuvWD62GxZ37LRPchdvfUPRsAqTQNpS3EigE8"
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
