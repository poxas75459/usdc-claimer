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
    "3U5AEMQ9PSWSNeqJorTUnrkTfGRK6xvatzgp3dVkKXC7yDvwEwCQAMwWCRQ1PguNRsQZm6H4vKnt5jAGuBLkGaGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UPf9yQZTC2xBFMg5mzWA7bnvoGsxH3nuUm2eBkicUjYoFvNMT4Tp8J16kLP36tnoDRoaH8juSgkTPZz4ZXBuwg4",
  "key1": "JgAtt9QQBZiih52RqFfqU5mm36G1oXui18jZMdabvaEYZke6TJVU8XBY5EJQM48LeZP3i5CtLZcjVJASEUu7qd4",
  "key2": "4TcQBVQbVc3nbmGKLvzu2sAiPCdR8Ws1yJxuQ4uU2FvC8u4z6iWPXUvrbAchiCkLQFkexW5bhbo1Lsic5EF12Ta",
  "key3": "5XaJsnUnUmm57yrzhkhxiuZUQrHcXN7449tEBdjHy2b7XM7dBE6PiiBM6rCtQ66R1hSHaTktZhzt1uYoaQvmTHGM",
  "key4": "4BeqAycSmdfBw8hnhxjZPqhYTkPNoei7tEu5YyjAPTioDNY1RCBiaoFRBDkoRMvdCN3RQuYSsdtueDgaqyadfzCY",
  "key5": "LS9maKWnn1L3Mdy2X12iZLq9GnimoheKzhm9t5PxWbz7dkewk8hPs4Z14Ddyh45PfM2mFej843smhNkbQWCDWuY",
  "key6": "3Tgiw12wM5M9ManZsZ2r1vXYdRs9qrRvkTxYzdUQdJxkTCWNDQt4DJjbsg5AdWXbdoGSM5knGXhM69xLMd8jqm1U",
  "key7": "4c9zmHq1g7LwHWNfdkkoVqx4xA933YNy8EQFjP96ErRTJS2SYzMNDtLk4v2KVTAArSgwJ35sFtM9rDRWcFBJhLSa",
  "key8": "3pnoX14ooajTWwKjZXQmnfyvMAGTHqVLeNEYkZKEdvTmtcXZ7k5Qs3JPLw5LXzmF1wQt3m354WESCGm1Rp1gx9rf",
  "key9": "dYcEs1cppyUo8BjdehEHADvC3FBMQeMXnZjy8otmqV3m6BxHZkr2Ch58XRzBht4SaxFqgYXyhLCYLqVJVLSb4f2",
  "key10": "3thZczATeK2AnxKXjeJF414gB4pSU8cHH1BY5LvtKYwJy83JN5Q2vpSWhMe8PEGHZLeb38o59A5BwBhhtZ55e3aQ",
  "key11": "4cJKggHXdVjr3W1qfshVh2XDTMqNR432NMwTVNoe5RnJvQq4KkocvbrtNNzasrD1VNXHunPUpW53VRQBSPDoEYvg",
  "key12": "3KpHHnEjCihgm8Sm2DHx8Zx1BkLf6p2WFGnhD1ZiyQyxQBsTXAvp5APw5SK3X6pAZHyrjyU91uHgPHXDXjQ4Q9fs",
  "key13": "3KS4M4Rejz37k7kn2Vk4P28AzP68ejLSSt67hRTok1CBo3DLUbpwKqqV1QDwYRXrU6xBdCCaLNWnL3QocMEjoAbd",
  "key14": "5NiAvWmvV6W8asU3ft6VrvabspRiN3TRYnRFGo4Zx3bb6S4uAiq29i1t3Y34FJLxTRfBaj9pVaxVfQXYAX8JupXo",
  "key15": "2jW6B8T2JjuBEHTSxBBUtYBZ8MqzyWfmWpCZnpaWSk8wdZPj12DJYWJdKJpr1UdofQGqZ82PEa6hdy2QZHx6xNeh",
  "key16": "2VgmgmgnxD5DnjnhFro1ETT9PEshP1fUs44vDKtNb2asEHmzgRWD6TbNEpaxg6Zft1DxNRcsQKcPuACWG6zqtSpF",
  "key17": "2tfEjTwwtAs1f1U9JWwhHHeGBtFJF8ZVVFcPFUiTkkLBnWSGtukRELSw1moTNuzrBGGRKyJAEuPoa36a2kkvencr",
  "key18": "2vM81KXmx1Rezpgf1Dn7fyv4zNnm8uRRBy2RCdaNj45THG7CTwdsQF7oJrU7rX3Z5skcQk5bNEQrUdtixHcKNfgj",
  "key19": "4ZKkTseLSEyF15tyGtXYsD26BGUGoy4Jo8XzjCwy1kB3waPBjTzyNx8rLu3bSMwfUDFZj8vAzmhfU2pnAq6ejVvA",
  "key20": "4SQEgrEcL3EZLUERHRiDko8N1Jtm2vtEnvDP5oScF5bAk8wfq3syb1f9YrFqzVj5bLP5TvzaLaZznJqos1GG5RAY",
  "key21": "4M7n71bHUEcCVZDPuCCoc9cYEnkks1oivSY2TeMvgsY4rpe8iByBj3W22h1QXpmDzcKbC24rX6t6srDKdDbqsYHG",
  "key22": "5tCbPJZwDrkissnVoNACG6QPXCpAZwfrmWLruxtoL6DEXt3BJr1WmGiAApRA7LKa98nMfjLKGZwPnvyHCZxeEsBZ",
  "key23": "5BFCQ5EFiAwLLHfw75ybqDPcUWwHGYMRgNTAhzsQ1gMg5x6BhqGeJYQvaconY4D2fssVGb2KBuhacJu3QfgiZ247",
  "key24": "qbomrdN9LNhEaGcnDjjAj52ZWqRiAZXemBqtkaBBDrow8siQYixsCWrDE53mm4BRmH1aPbjhpEgm5oH8QiGZg8Y",
  "key25": "5rMpeKRFUTJY1M7MUGDdxU467AfGJ1JmC2b2we97VDJUkHnQAS5KfvxMmHpyqLtZJyaYk1SkSBmvdTKBnxg466jz",
  "key26": "2hiQRhxWYhXTMRspo9SVTGGuwDXcdHDD5R3aoZ3jxVCjbL6fumRR5kv6nfefEF4UqiTUoQt5VSjwfu6YAUwU6Z5W",
  "key27": "VELviBF3tE6Nr3TnyFFaY5GpBC3DEmzJwyYtFpaGcczp39hd2ppKLfrScRU5zLDbggP5kNnBF8sjX3bcwynwJmE",
  "key28": "oA774aaWKLGQrXgwzAoMEEUoqjRCMZzduk1eGkPrNWVHFKitzWUmeKxo29tJNvtb3A4PwFM3X49LCHLGZQvzG8y",
  "key29": "4gwQer8fqpzuSwVgxEZVeNuXm45vbYTCLBi7BZQYURqLkAeYHuTQofFbMFZHk3gsDVzB4VsDSVgMhViFNxx2t29r",
  "key30": "2nLpLG7M7J8pvgBMRSJbHs8dsvSxfcVfDHoVKJzTXK8Qa4cAmRBWknrWbf7rpEJ4TX4drCdvvcksU1gJbD9ewwiD",
  "key31": "36nC9NcimLBGPhZUveALWadt74cNZ3y6eRoGfagZWg48kn8d8PooCXJ15rVNTvXyfQdSBt4czLLEt4SSkP2kAmCQ",
  "key32": "4cHCSSFg1DEx1QYJEzF17nWEUWjW8uTKhZDphR6MnEbKZjMrxLPT8pzw1kVRGZQ1nzt8SNNQmLLtC8kQ8UB3PW6p",
  "key33": "2X3afbQAGLk3Nht6iqNVdqatuBpwg8w3xfzYDJsiAdh9sxefztW8h9qA9Dqed5GDxUWig2XVs7y1WSejHTkLErTH",
  "key34": "28CztqbTiJJqY7F241Fqn3ySCCCcXkAuR7DxZRHuLnC8fTY7hTzbW72hPWtD8LnLWAM51eotVuTuaQjbY1vGUtM5"
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
