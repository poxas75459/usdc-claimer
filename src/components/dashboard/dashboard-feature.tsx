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
    "1pr3F27DFpeDLtYxwTiuX5G7dHSrSzRFFNVpXEQqL7fT7wpDSgeAKt1aabrXw1ZQy4MJsMQJQTMqUqBFfUCwDXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LHnA7cVj5689wsPTykXnpddakwRYiNawftS66fWCquq8D9Bipgfeicx3nD229rZKWLgYR8BSqz2tGCquKXstDxV",
  "key1": "4S8N8qKQ4HBJvBjvo5ZvQhnbthXVigW2wmvvPuVXqZmY8Up6KwM6SJKisso17mcVbLZdcMxKjYcjWyN3U7kRe2rQ",
  "key2": "56WKwmt74Uu7uJ2t63UKESiSKw3P8xyveSprnZjpUZMRHpkAnnzpgpc46f97oSongJLB6uSMjYZ2JTZvLK5RCVfG",
  "key3": "2dU4mL5bkm139EuVcmemLX734LgRR2vU6uwuvfpU6pgGBnrZbGVD6WuJBL3YSeeAjGPp9JbpKfLy9nSzuFVptEc5",
  "key4": "5TRgHeUwqb2cnvpFXXcLnGJscEedS5wgwksbDe39v2SigLREDFVTz2PqUzgLPqG7ctA4aMSzxhCGufsmLcAaytQS",
  "key5": "2xSGRr7SpgvjQGRw2h41zGymgMjeC9TxryUB4VJkLWEPnL3A5zT8U9Nn5S9hr6aMyzvhcxMtk5TeQ6NeHzfyreSK",
  "key6": "2u7JF3Zmu8jrKsocDiTZMKTCh9vEmxfyhW8e2CLECqhM2HnZJ2YJcz11wiikD3TXRnk9CbaTWCMSGhrH3y1u5yhF",
  "key7": "5tn8SZBtPyfit9kXSh6koRxkJzVLHSKFfEnb2kH82zyFtX2y2oK6eHL1s9pmVxfuRHviYVDE5m7v7nKfTY5AF2Mx",
  "key8": "3Fsd37XmNmt2i1ouwCBqRhtex1NxavGZJ2GLFMzH8dNA3yhY9kPS75oWPshX2kGs17cyotdM5ueSzTncq1LfFohb",
  "key9": "L4NHHJn88DnCA9fySNRJmRFag75aqfULdKQoDUzZ24csp3P3ogKqgbNvk4zgXiCoAnigThAdKTkkk8bb9xdEfqS",
  "key10": "23qZtKTHdmeNQbY8WTw7QFGzaizXJh2ztRmFgDiNejfV3pjVJaKFqDBMSkvdaQ67d8fXgJJQWyPpaFyZfeaSsgbq",
  "key11": "wiWzQbTTFZQNasBtffcBp8zutBxyW5vnKzNeyJw8UpcGsFjco2HXxTuXFLscxC9vNWp8kKoYY6Q5VXU6Dbx1bsQ",
  "key12": "un8Wek1nZD271mJtU7KTVxUodB5QLi3QTPnCXAgat2FJBDhwQb2NTrRmLX9t8EE7bMByGcGcj8d1uJKLR55XGcE",
  "key13": "3Zg1PsE3dh9DbgGJpsRpesAcy71SJzuUKeYHfGbSG1TyNv5eTJHeY5T3sD82MH14rZ7Qe21XyTuJPj8xdxALj4i1",
  "key14": "3vqyjUzhRKC1GbueB39XC3gPB9YNqB864873U12Ay6S2g9fSvQq3EynscakLB3VUMJt93M3nrQib6nSTn2btEYT1",
  "key15": "35Y1x5BNWD6gxaFPUFP5sftLQ7wfSXsyi54WCAdq7nTokWrBxc1p2gQfpiTMMDbagMu92zPsfrdK6vgfx3mV4zt8",
  "key16": "5qMRuh8xAUqfpyMcY24msdhPJd8VUSVDvQx43K8EPYBTHSEnusQicxmzhPCUhsiAVcj5WLmZMZjNmubp4oW21JWd",
  "key17": "4dho1ThdtYiQrBtC4hbbEuHa5nR6K44n8kjZ7zaZExCrAhfk7mxQtVKPp7B9XsviBT1RcqD3JVNaBUcjff3DNadk",
  "key18": "yEqkneUrKuaXXAXETAPghQwCTEKvE4TtXPS8hYmSTpVazpFdS4DV8rkAZSwXoh1JxSBGbFDu7Baj9wBYBvaUysZ",
  "key19": "3DtfhvTuN5mU2eQtPDPzSBDuTaYpfgAiuk8aGztc3aT67iPtjfYQFtJ7A1foggfd9k7vgKWA5ZJpFGVJEfFKFKh4",
  "key20": "5J419GKY5m27YA347zmB3KJCSBdxTfKjmsGhuJY4WFEzq1R7Pkw4i3mrUJuLAnYNSrb6ijXSkLwXb2HhYsBe5g1v",
  "key21": "4MjyWwfqKjdYxw1pQqreukaTFZYMv9XDjyfyiM4HtZkvNZuWKCQpCxqqDfm8MosCKcE1cnb7SJVyDz5mzbLxq4Au",
  "key22": "5E6PvWVBdtMqe7yBcGVg1CWeuUBHvRCKymhRtaNNWGiYmtWcd4bhAy2xXfj94a4WmJg2PsLAcNPTkU5Kp2T4mUY1",
  "key23": "29FUv2peHSB6yfXffLbwKSgeknDgzdW5yd5xhuYdctAdWH8pHxjvhh9rRwoZUrMJMou1VLdfmB3czpXjiZfKRyzo",
  "key24": "4eyV9iS7NeRwHeBL5rkSdMpLa3LKvzcqdHsYKDAt3S2bTkTBZPnR1MjV4ivtTpL6BJUQQejXEmS6mADweysczjyk",
  "key25": "2Edz6vXpKuV6ghpqysyf9zg3nBgGgUx7arTM6wRpPiQAYRrddM86UYnToMLkExRcnBte9aFDh9bWNd2Tef6BZKmq",
  "key26": "4nRUi8ut4nyv2FdxBH3DrwNDKj4wKunLv8z4AT6hXZQujvbq3g6G5QuKE3h1kxNSYGdMNRnsqf4Trc7FZ8P4hg48",
  "key27": "4EtgJV8QEShRMP7mQuPyqBZ92VXuS3vio1FpE93gNc7DrGj7jYoVGm4ehoDMfXMs9SUAs9j2Z3gEmiEy445XHRT9",
  "key28": "mHpqDGf8VpHKT6yZFsRfzUSC8XJXKmMFKbBXrfFThhdJWDXFj2uTrUDGSetPBRyVQ99QKohoAPrtm9kv9M37PLy"
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
