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
    "2R2CJCYiyuHRMbCPdh4DJjGZ3uZW95je5F4wj92c4pC8pMGheJAjKRjbAZvoEFvmvaSV4vC4siqeFbC2aFDhgarQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vf8fRSMJ1j5WxAAFVjY12yN1syezpiqaPnXFvfWM56uvb4wEkwXE4VLoCdACjwy1pBKykcUbAV2Bs4VBPy26N1Q",
  "key1": "3SsANYcKRechmJVjCUjv6a6erTH3soQpTzpMatgCUzMG4kix8Ag546UcujEzQbkw55VAuz9DHH7uNo9okR9Ubjzu",
  "key2": "29NVSJWpnWZY1rA9LtfeZRJ47J3YDyb5xkuzZ8fNTpArEHPfhkAjktVjCQB5AYvDMPFhncPp1tbt3MET5rsfoh78",
  "key3": "3hP4pD6cyrKJAuSenCUee1PFtkHFQwHgCKRZZ7zNn3EW17cQ8V3QUMjG1KRQ4Mb4zDnwojoAy1ceD6uUfcGrk9Vj",
  "key4": "63hSobQKretZwmZTYZ153icnkMfN9BsJ8fFdPRuAK6Ahz4AzEfmFNPhWQnvgfocGm7esYoeaXErqLp3wM3emTZLW",
  "key5": "4uphFW8bM3QbqczYrHg5biqLFRfCiSBeg9yWibvjvx5fUjQVtNyjvDi6izA2j9ofAeKQWNTukwVfML6b5wzrwSvG",
  "key6": "67diGz6t5aUeGrBTEp9Zpp6ATpUFdsXC2x6kbzmm2QWgysvNCMaW68aoDuoQhgKGV9VD3yC21vgdgANFrXt3GNXa",
  "key7": "2BjEAcRM8jqidS9kPGn6Auniqw4BHEA5QHB8QSCrZxv3VAUrnbnSQGJH5im38NPUMhy18QtoMiC8r1N86qpo1UBh",
  "key8": "54K4aQbNYQAKBjtugv9GtSA2L7iwijZx2DSDKmCcfUatxtTvYsFLpejZof5E9gxCu9xgHFt3pVnR6GPdDMPk3C1P",
  "key9": "2WbpEVG5euE1jpD7QXSVmuaDmRHpyaS64LcRSndQwrtb63uWkVm1KSf1idvH2R5Qijy5Kj22r6QjSovwo5Lgc8VR",
  "key10": "29WZEhEEUbL7qfvioYAbEpq316m1amNZx3H7y4HkrCrqADrP9FzcipacboDbSjz1K9zvhMn9KTEn1P6fFKfQgGNg",
  "key11": "3jvwTrH55PX19Tf6wvKVCpyYNuVmUqfhbyDjYvXEFFcR272p9WyAqsxDEytYx5RwSB3oLBrJMdywcqBPPcetTLwf",
  "key12": "3Bp2gWk5Fno3uyv3gsGGDzMPtqMdfanUga52zKD3KHsboELD9SQDq7seeq5Bdokt28XDDh48v8wEHUpvukHkWKqU",
  "key13": "2mFBc7Yj6DxhbCqFoUdQR7EWbWp5QBj4Bw55MzZYQ6tg9Rp8A7bKJLJy8qJ5M27vYDKdzmUWjfXuDY42zZ6x51ZC",
  "key14": "3U78xswVcZNfXz8qv1fZmoEVWtJoD6RsmvJEuJtYthKpzUXyKzpeZEbhUf9PaxLA3SBRpaJVUYgkuJrrNQtXFCHZ",
  "key15": "5zz39rVszNA7aC9bHkR63BZZgxpDn8UwqiaFxqp8kaDGnvSGf43SVDZppcYkGawX3P2QgzBANHn6upCw3jMgPCne",
  "key16": "5AgAHN35SfvqfNzx5QiDDMLVoNrnXTUGxZpgPqjHhAP2f8XS8jJ4hQPrpvecVyL4QGvxKSyK856NXi6CzLhTSC88",
  "key17": "4sXmWTP2SsPmJQfy96i2fsWrLfYe1LGEUwCB2U6VSCvGAjgt1Dvra2XgEoiJEvNodNHFaHnnzgnTnUz5m2B88qeF",
  "key18": "2s8kDaNhW88a7QUnb5R8RcfFQsDi41hGhkewA8yYdw2CGnLWnYTVF799ee3rwGm58a9nLbRZwWShyhLAVHmsat84",
  "key19": "YiLsvwSSxdQAYt7J3ezzNBw8whKgNsR2r7e2woA5SxNkDbMgkxo6qu17wMTAL6mBPGVzzBJYxjA2uZxB8kyBgg9",
  "key20": "4WXiyVqfHKrMaa8qoSGN21L9DkepBkRC1bKqpoVKV4FCtshSYxY3eze4ucBjfgS1GMBzr641LVZQUAQqBMhc8ZRg",
  "key21": "5qunoi6rZjsFJuwjFxwrZ7jNCTccZpizEh9m83AEQumAaat5g1NkXdWBqjWAGaKLcw1yzpZ8HVCTH3AUaXWZsCiQ",
  "key22": "4HfQ1Kw3FM2jp714uucfVL1kLtcw2p3YVbtqNyjEDmfo63GriidnW47ToncuJUeHo3xqLEBFwqVpUcQVxq58rbT6",
  "key23": "3o6njufwhjFUr8x7WAcLm1FwQ3wWyfFvwc4W5eC13Sg7QtjYRHZPcTWKNqYrMDhRW7YkF8MJhRJvnSdzHgy56oQS",
  "key24": "3Fp3go3doLvdWXjoyvLjny5wc9WtXf1aSYqA6DDnmygakMwCA7jwotP7LWoq3EjHec1YUNRyr5QiGVVqiyRNsAys",
  "key25": "43jb2TGxUFLABV1BjdreC8GA9ZeQiFSnQVuphNBua6smugtsdGuAGz8Uq9R9RczPNqXFnhtP9JD3vg5j6NaZogx4",
  "key26": "2fV1W7aGD4NhKWX3rU2Xm8vYcDu5YYFJSn8jyqjSeGWTxqnjHYrhvq4pzfW4tsqnTGxgduBPTqX1x8mYPUTk5gGJ",
  "key27": "5EeiFtDWJbq6wjv9TpbyF7GZjyBBFd6yxuWo91nPNVy7WC5ZrqCtJjPVbSSTShrYvKHWhbSfzQSu6V9YTUxGcvH9",
  "key28": "3FfxJAHz8gnKBLFSzz4EhLab1nRoVdAZXugvkVoFiRdNNdW1HHrwgxf6Y8AFkwoMdPt9iao9u1KWYxf9GNyWbBhM",
  "key29": "4BhN4BCbPitfmMtPCcHULJLJo76Pgyjd1Brbq5GESUEVzHz5PQpRe8PbkmRP7uFgibnaSasscwjszakdZoM9M8iX",
  "key30": "4fV897zQAQChLXPD17HQde9HKthfWPkfSKQToezPVqygh9bA2Z6MsXuAa5AB518cbcZZxcEDQT6ECD8jmTgKWTFM"
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
