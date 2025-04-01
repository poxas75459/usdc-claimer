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
    "4kCjxkeRtLJGEZNbjRrEujFHgqh2pwoDpGzzKq2s2w23NH83j4E2qXBk3VU68KfUYRypbc4dfWVeP7RCGE6VZUAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bAn8AWYXyasiWmVG2WcrkpYEBr2nDDtxST63jQNGwh3DUNctrvXddX4DWDrCe2av1GCmFsmu25h61gzojB783hs",
  "key1": "31gPeYrRp2XDGC4NEMZmZHmbMiWs7TBQDE8KZBaSc7NqNHybJgTEJxkWpBoWexkPggtm4vqNVaFfEj4tMjynF9Ur",
  "key2": "3N2LvoyVDXAEgZANRc1PS4DWbyE4qqTXpXuop8pvoxB2DbjLSs5AREqqmZvZsTp994qXsNiQsx2kyZHv8wgYMrCc",
  "key3": "5x2UmxPxcLri1EvEFPry97GxhLYTaUAzTFvHLxYmAnSWboyKcd9Q8rCWURQwTwspVei3PJgwtbt8YumJHKqXNPjj",
  "key4": "YHqndTm8CTZuxFU7sYKsUnfhoQtWowXV3RF5KhmkHcjr8QrntPnp4wDhaSBNbNJYiQErAdeMd72a1iat3FNXZKM",
  "key5": "3HvYw2k6Cm2kZdrYmoDL4B8qYatZQrCLhXdtU57C9stRqv5uRhRqv8sBp27dYpkgXF5LdZsZKh2XYojJwJqVSURh",
  "key6": "b6Mqn7kUwnSSZwNXVCZBDdSmFQYXQHMAojnWGGiYLECRLMkvUhxLHqvrbxfG9Dvy5awE35jDLdADvT8LpUugnxU",
  "key7": "4Lz4v4QXndmou2X1mFWM2jCyLXHyWzdCFV7LK2dHiGqp1k3S3ws3mRPuZFhw8QY63vnTBReNfTnSQ64h8ct7HJLF",
  "key8": "5NLnxrmz9Pd2MFcthUCD1EbzAUhk8umQWWUB5Z2btX6nr5kxn9rdPnz7BjYD93NZ1sZKU128ZDxXNdmHKi98siAG",
  "key9": "3ReGMUSMmyycatzXJ9b2EqJiUDq9ZpNrjkVutND7Ujyd5Qjb6nMVtkoCprerrbGqd3EfwffyvUA53w3CL2cE6e23",
  "key10": "5DitpTRMW4cwT5KyUhRBixBFpu4kyZ7WYxBY5hFKXkEzHPB87WoYh9zawEcPmYtW7UQaSwKFywAbcBPMUM4bQUjx",
  "key11": "3BpkpXjuUoa5ToE4qiW3RnDGw7yVYjFuSp81KsARYYcEHyY2s1fyiGr6ehXzPg7fCfMs6waotuoSptNRKSQiJ2vV",
  "key12": "3NWiY2fwMSy9kY8aSdiwBk1rx4Dxmf1wKyLUqojNpCMR3gRPfd1RUrcUaBRH1p4rfieWTSHXSi2Ay88pD5xWFk1j",
  "key13": "2h8pVTSDzGDkyvzNd5qFZVMBR1XQkqFQQeJdm93TZAR8bSQMfgywTZG8p9hRS8TNNbP6Vze63bmXmM356LaeAtpm",
  "key14": "4mC31QKVqXtp6oLmGMn846MNjqa5Z5DrU447neFny8kWRQTWQxtbPhMCNCbtMtHMK1HENPLmeWoh8wiuXfg5T3Ks",
  "key15": "3PAbEnjjgP7s48yb7FSHq9yCAxxMf5st8mke7wFc4CTQk8V1QsUzeT1ke2n3JD5ch4e6THyuaYLcowJH1scJobPt",
  "key16": "4SvNy8TqQPVbhFBvjjR5E2T7C6HxvS6iwrDy5z9vWtHTkRjnZoCytAeUrRSAYLACkjukkTD4v4TMsseJUQE48Xm7",
  "key17": "2MRvoCvhWgLJRSsBpqgshtUuhaMdkhow6G53ww12f5Uw8m1WQvGf9yMqeoqRC5wZYUtNqLSqrF3k6FAC2rXSk2HL",
  "key18": "qrkaALgkL9HeA6NjbTMqq8mUn9BeXgMCEP8FW5bmvgsUBmgnsaSrPLYHVpvTERgh19kMdECyVcQ8QZj2rxMthWJ",
  "key19": "5At2tV93TMVUHnN89dK5xAUf2jH3bdx1ATkFMfaToDgsJUEyEKFTJBHT9xdAT7fEYurhtYT1LRTNjE66uP1mHsXz",
  "key20": "xYsGvpvJLw2XiWHKAiU9EtoCz9wVg6D35aNZP8eX87gwWhoYkALoV8nxW4Kayi8Z7qGFfXCb1qLXiqn7oZ3BPeQ",
  "key21": "23GjdjbJ2dUf7AuCV9YC9HZPoGXgJhz5obcYSpzk3sd1s4ceMbbVm6vCiqQMVFJ6nXn3yyiQPUGq6quQm1qamEbq",
  "key22": "3t6mhyqgdsqJ2YHjkTHxCLDMQKqTdQGBvrnL2tEuJg4G1Py1b3ZeUNhMgx9vFRtSCP2GST3bJQ1teygFiy584Y6o",
  "key23": "5d2QXh75QfX3tZ1Ua14NvMuJxTDg2t9nHGsy7cv7yGAbexwUJjdGrzzWTRafFPwRvAx7Mhot7sAGU164ERz9wbHP",
  "key24": "5gr56Vo2xNJAyhSq1tdkYPoHFU4AvdXXb4UaDQ3BTJsrxyfLyKneQptC3JrnSPjDPWF6m1jtCZbNXDYvFs6wH94W",
  "key25": "5cDGcMyx2L1c5PD7WgQEj93off6agg6bZ7gQTXry34V1tbKp8Rox4nUYUWVvoHXLAioteNGAXQHC4qMqLAGrY6Yv"
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
