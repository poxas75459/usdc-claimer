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
    "5siwxg75bicqJxnsr7P8JgMMX3Db3xCu8VCf6Kc9oSoPpYcoEnPdfk3sG2Z6iq9RN1sjrdFYFYbaLMvx9SNkyqCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3okHxJf92vUrjzCpbiNLy5pwo1K2ne4zKE5HuBhLnsiYPiagwEisanM6vCdjqisywwuLHKc3zAbaDY2vnoKkPQ9D",
  "key1": "2g9vbvKoJefNGeBYcbKjocroDw2S7ULQN5fnHoRCK3jwSEB3Jo6nfGGaUUrbQSAzLm2poMF12dchzB5R6NGj1MUJ",
  "key2": "2WSSnvGnTn81a68Pka8UbsxG5vnbd6VfbQMcRXi8AAiefoHdBse2mMfKGk9Tpxdh3N8typ2ugkKVJG3gzJTUgTp6",
  "key3": "5JUCk2nWo8qxLVLZ3VEuceE5nPRz9yVKkwyoBpWhzGv3aG8TNvaL6NDEraRuG3SicF9pAvAtNWzjKpnESdykfxV6",
  "key4": "hy78jqr2MKNKPgcSGqicPqPJncNNBqsu4QenuijpqkJ2dnGMTLx95fYKkpvtwD4tZCEC2iWhyzzbT875YzWtAmy",
  "key5": "PoRqK8paUqXxd1zHhTy6dRAHMc2hy4dA7k7wTD6mA9BMLbywYogd6Cv4GgywPduVTe1AwKjpU7rtoSJmCYDmePJ",
  "key6": "3DCeH43srJj5seGCN8YDT5Va5J9vfTBYk9ddAHBaA21ZbKCnvZdDvfmux9ggpXerRFYbTGVCj1YsG6xK6BtpUbLX",
  "key7": "3s4kjM2nvS4X4AtpuLGyt3sN1JUteLx5bgYdX3C3kgkC8DMmNA1HB2u8ozigmQ3YhWhgsCjR2Hcoz7UKcHkBD5Kp",
  "key8": "43eeQX82dDQWfz7ETb3P7GjW5karETDQaVW275MBX7kgdTYrM72wjyfJojfKNbgS43ALQugJhyvsDZ9A1bSDLbuD",
  "key9": "dbyaZtHVVRh8cnFEmeXAL4FP1Z6oCT9uFuYtgwVNr9aMpSECgHNe3S1gJHfpzoKm5NMiRaibGfQRAKU61EkFdp4",
  "key10": "2SQVf2zSPVpRFsZDSzDFehH96Hozu7KYhJNdENQc1vowyLPScXPrAwSqoyeN1ExMH7RCyxMhdj4XAQAiuRrtBsg1",
  "key11": "BgmXx5RkyrnxKvEF5jqVTZMT89PwjDy1ZavWJufLxyEFGUgyxT4U9UHwAEFKVCRfUZ1r1BRdrTgPsouHPJfgdNn",
  "key12": "5Voz9d5J6HzBL8crs5tvAtSrEEJh1sPd1nSRkk3vJWmFHS5oLx2pQS7ZzNjGGZGBSsbn22nXHLaiTNHJUjBQDJAL",
  "key13": "34rLHcjNHEdZ4vGkk2fR7Xy2BhoZ1YnpSe2FYwppgFcMgqYA6uRnWZHW2MTKG4Msszdji7QMnuyxZgi24tGEHAYa",
  "key14": "3S1Qdo8qm7ZLG3T77Dw2QFDMT2yu37UNXqSQop7WJGED3jzZeAgWcrrCha8cJqRa3VLQRpdzfFx8eLzFkTS8tsby",
  "key15": "63uw5w6uCsd1aQEk4yV7M5fDZAVSTAd2aCcPqRzMnmBzAmF1fm4KvzLXc5bT9Xt8Smb2gtJ1C1MTNWh82YwZ1Y8C",
  "key16": "JQWFkpUhe5JEyjkXcdhvQDpXPRkzEruYiajXnp46x8dBgDwqK2VzsTMuTPMceUYhyDmftrQ73HVsJysaSmfH62Q",
  "key17": "4RSRcQD3jTXc7LFNj38xCgk9s8JtZ7Co2Qv74MGUx7Nxrjmj67n9djRsbRwUcG1KuphpUrtBEtLjFNybGTdsf1ud",
  "key18": "rpBSkoLS9JrerwTQbdJGELKuCrsTVELREayN3VPhMVgWArfE3HwAPXT5Q4EGFVqTm1wTMWv7DEGeFwt8wTrDBew",
  "key19": "3gY1ct8H2SQR32kaxpZZsbiQ1uuiC7xEadtFSDCY9LbJnfSQo6tcxFNn9uzUesjPH8BhFZYiRYas9KV12pBjTVsz",
  "key20": "2xGwyeFgAwiP264m6CJYNtPuCnkoNAkmx9r3Y68XYwcrCtcWrwwipts1rK3wkdkFF23hmXqyoYop96JmFA3t66Kv",
  "key21": "38Ae7P4KXobVadxZa4G3GT926feYqgvXKbkmUQpPF1ZiEmDnVdZSbmE53Qt9jwdrnTw8a1pWbeqVoDtBzCeCrMXm",
  "key22": "42bxeam5oWvGAz4c1niCVkSBpMjkHDyjGyquHEXjgB5u771SJ4ymDMYzFTCUysuT4zzziwJmnzP3VozYTLZpCwR",
  "key23": "4ciePpHHc8DiVhDZjhooaHoJzgAnay8DA7gLQjYh2nqx3VhC2N4jZUqdJbYuSHjhfyFwbiRmgDTxTheuoYYEL4go",
  "key24": "4xEvaZJBBxspwaNELW3beS5D4fn74ajK7k7zy3mCYX9ayz6z6J1sV61zZEsJjF5JzvzbcqfXhNywp1m7hzHDip8c",
  "key25": "5JSLr5S9uQXRde58Aan4QNAnKySpg1AW7XPuSkfGV7JGxMPWa5BmaFQPCH1RpcCZWuZt1X6fzzYfqSCTc4rDPrV7",
  "key26": "3rf7VKYjV6XFr8qTEqtXGJiaSi88LYhn6GPGyp5aM2kuCTpxj7A7FvA5nK5nqXg68B8DkxzTak8SG4VFmfFfkCbH",
  "key27": "2Fs6kfHHfKswLe6nRGAUmYpocdB2qXLCAdtAParC9S7qM7HCwRHQxQM5pPimG5GCaSAMAtvuSVwFrSDMp5CiCmoK",
  "key28": "4WVNkKg3ty4aT7QFs4hmNBgaF55tUZZwSsXjjUwxj91doZ8RKFJqZN2ZtgnbTA51QktDoM2eWKd22jtNS8EEFkdE",
  "key29": "4EDNYmVwtvPkoTEt2TuQx4ngfYReuNbQNVSzwr8tVrFgGZ6ZHf1CtAWRwkvzTqvo1a9VTDB4FmRaqEtwPyrARgCQ",
  "key30": "DaAmH15jvzDCgVfSyNkhk8jLeEykFxFKRihYGfB4DfBXPnBuskyZFVFrSN8ZuYQNfprCMVEpXYNCVvRhiJon9zo",
  "key31": "4xRvGd7tUo6rbobenWNTXd4YiHyzacCuD9M8b6ayVpg1iq83dfGTpwFSkFPCJHY3YPpp6Jswhr3Htdf3B1RZC4bX",
  "key32": "5fGAyfNhV4rJ1E5tr78P8CfgsDaxEHKVsd46wLwvgF7Z1rmSmDjghTsEhNeW6o3DoNNYaUcspdrBXnpL4CPFLS62"
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
