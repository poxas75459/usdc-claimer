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
    "4TuXZDzWqmEpFHYNq3wd4sADbkyoBDCHTUQ12hm9crBaxHRChpgDmgWgVmePpBSeqUeuCyyoU95dwv3VY46aQnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n4h7eBQVNdfcxA9kLLopRDh6ozAhZs7DzLFw5huBs9oPiXibxGdyiMsFP46EHhie17mVEsyktf9gzG9zvewYMhz",
  "key1": "67YZaYeE82fMyHVs8aAWut8B8Yv4jyimE7j45UTEWdTjMufyfFT1Pc5yuZSztz3Enxjn7JYLDPf6hTvHCrbbQYdK",
  "key2": "HqWC8uHZhsiMmptP7v7uGVA1a9bc8HWeHBywpQfhak9vQE4RPzeMhWsgf3rGdL6R62S7uH1ggGqymow4GRZZrfn",
  "key3": "2nDPKHan6KsNaPgRy4hgeFLP2xD64HJfUjnSGtv47CruheBspCmUufVDyhGrEYuAoEErPZSig4Rfpo55bKbTNDbg",
  "key4": "5zTKKrpYUZAezkkhnMcV6gVApbv17KkWhdLMgr5cWH8Roxj6KSmEE8eBFWdVu49MQkGmqWhAC2Ei9qDiXh4hZazq",
  "key5": "55jaDBUX8ii2wXwQayfLBiBASQPkVQ7dxAR9U9mfB4WCHwLy6vpqjrV7AJiitpxb2smvLs7x3Z6bifbCW4qUYJYS",
  "key6": "2Y7JdSgdcEKvLrKdNabaCBAaoWLoPCC79xrARBmgHuF7zTyypC7nCbmLcm84UWcQsUzCLvn9Q6sBEeKBVtMPYFeH",
  "key7": "42JoKSyuFX49UYwBBErBzXmTJT6vrDSrKFsjiDcJT97ruxL3TzBNwdkG2TVKEQyyzzA5vV9SzEboW5bbXKTKKA89",
  "key8": "2WJ29NUrGMHFBPMya8j3FYBhcy4PCacJPzHYqbZzM2yNxcM6kW9aKw8YgbmsNenk2zY9LP5oidRcxcvw2dZd584r",
  "key9": "5guqtDsW9GwqPKw6nXubbF8AHQCJKPZzxoAaezoXBvVCx9HcuRNKYZ5MqeEzcvTeRwq3WxNobztB3k4dLacFvHFA",
  "key10": "AUoMbF8kig3avQr5ff6NCRB6QvbKg2yzduoxxqGS7fQbWQzfeTj4zvMJgRUj6ffz5ydpJV26H2kS3pjQGNpVpoa",
  "key11": "48UCgsDwir3TyrbJA1NSJqGJrRYHA4VnAJ54zYCtCBdiz8ncaoz4LaCMKX9WFmNCydmyoSiFquMcmrr5XN3quxt",
  "key12": "41QdsEvp39nR7z7zK7zUa1Br1y1wM2PjWcHnqJ6S5yU8hKzTjPKFC5iJ7YGSAjjmdEFtFitkpACute2ya5xx4pVu",
  "key13": "2pLKdQrN7NHhqUkGoynvCHrwYitL1rzwdfgecJBLpFY4FXADrY8R7nyBjjGxqwaz4QFn32RWq9NkrYoqhBA2UqCU",
  "key14": "5m1q35A8extEpPdZrFUxEcyMFbADtLNVKAfyZd9w4KnLQbDuKkHBTL7y2ZAXK7HAF7j4MuDejHQm4QqYBSJDBwGD",
  "key15": "2QYAFts9NtYgsyJNuRNoY5T7wEQd24Cof468egnDU8GUufXCEJBQzv78iaoxdsRgWbsCUhCvvbUZgRxR77oq8SoU",
  "key16": "4CHPMnqc7n2JiXsdwHy4LyZjxTXL3SZMkgpYggAmGGAonkyhtKZHijsW8eTgryG4AX9RJPNSJy2QQYzFW42DAmeL",
  "key17": "425jiLFWa1RUtk1Qn2BhhZuFTjVzaMW78gTnRdA7FgMpE4vewGCpzN2Enj6Ez43SkDizg3mUxNfrsYQAFZfHKRau",
  "key18": "244hU8NNmbx1MdijYX3F2Y2HySwLgnoX4U21ZjeeHNdEWV85kz91Z5ZNAC2dTyuZyrWcCU5iupRs7pLj6oiwxEJQ",
  "key19": "KFfB7qkN4wgamMC8sqHxTiwhba1ohQQuBtU6cuKdRi631bg2fS4bz46uhYsvA6iivJrhzPtEdJNmi453iQP5mUB",
  "key20": "4dETv1WHy1e18YUJsjRUEWeSWbH5okxWfLJ8ZWTKQez72xRfYE5DKugxjwAmTQUBNdAGaXmowHijuj2s2un6wty5",
  "key21": "2SKvLCvdnG7JtZZkEUmzhQqZPWm7RvouyLtPRHgvEoU1NScHB5Nf7QXJpQrB9H5VAcjJdeB8TorR2Z9SYuNUAct9",
  "key22": "4igqJB1WnCFJDTAgAtcUpfU2vRJ8QJLoVoVzsryNzvxe5iBZf4YoTyrEgEcaVC8xR53oS4hEazeBzs6UAExhUYLu",
  "key23": "4fq63cLknQVvPFtFVkgTziwXWA4NaDohv4vzThdTwjSQr8UdpYLVghWYQc6fX2jBYabBoeqPWMpkVcUGSZJLHwo5",
  "key24": "2x87sryWqzC1kyHKh9tvwNQc84PZkHqZRDLnKTGoHSL2yLJEGWKZyLsTiNiZpRUARY93EXQTCrjZ7nBwZeqzgcd7",
  "key25": "2TzrXGuoTcDcCu42mjnVWoQGRpWoGFR2dxtXewd5HDQkyMhgQbBsnvDDZhLB51giFb5wThXqJWXEncCUsa6SkQeu"
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
