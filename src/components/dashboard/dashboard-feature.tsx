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
    "5MpswYkxDgzA1X5NHxgGGdFgZ62MiCD7BtKXKphoeo9KcCyeLtdZqMx7BXV55ZmmNh1LgE6i2qpF5hzTHYzj2dfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L1XLXi9Z78XQyBC7uYChT3mcj5mrZ9XthfKsTmXj7hy6Gr7s6HbamY2gGK2K2HhuEesrVSo8H2z6AB4KNV9EWwH",
  "key1": "4Rok8Vnx1BUV6rj3V3w2s7yr4a5x9zd7BDSWiSWyCaJAZEBgqZECHmjNv5hPC1YdHDbGegLcFmntiDxVAUBScV2w",
  "key2": "44ktbZiR3C95wzRL95RYQWZnRkXMd2ioXE1NVRSVRrkKbV8rbrXMa31mBTwChUGrGf2JEpZvEZWMXZkqyNcxhhLy",
  "key3": "4HvNE7vXyksKnd6X9gcdSzxXcHg62Fjwq36iMXy33FdtshTz7cvfPF53QrVSycjtcAhWnLCzCLV3HxxQp2XXVB3k",
  "key4": "3p2znvtNGjtQNd6BbydAz95z1FGtRpVzNVyE1dmzXp52mqvDA1H9aD5dMijyZgTPPzoNmGYBeGYZMkG3Tf5987V4",
  "key5": "2gg4Mp4bY5p9mjpGDrpSocnpj4JsCgg7u7WygBiyB5RKSQcoFBT5oXpT6g9Cm2m5jDD2TZigLa8EoNFpwQrHhTnG",
  "key6": "3WLBsJLTPrVib4P3Wp6sYoWt5w6qEMmPwCVqiaRTeJ5Ph8WUahpbH944ttwLeATtX8zdcQaQkCYrnwQTJB2NMd3S",
  "key7": "ks1y2WT5tE87SKpnU5RR72MVBvEurmnL4HxfAAgmnWyUU36iWUmCQnjFTK4bf72K9vF88VqVeVg1hzTpao7CZo5",
  "key8": "4GyANBndHWJEVeWVstJmZGBqdC4XpZP8NphWvbAHAZRBZmSPo9H6vcAmVvrFrZMfY5cCJ6jyvj2H8DCQm3YUBjde",
  "key9": "4yshTANzziaujVS5qrMCPPpzecGgXq7Z3xvJZ2NHgA5MumnUW3jZXNmkEq9RFhusnUjvwYXXN99Vy1M8XXAvgCT7",
  "key10": "2fzcxwsrTeJqcqmX6cfonNBwYHWsEje21ZCYkCd5zNHpPH2jTA3ipvVUw7Kp2dPQ4r2GeUtKz1CareFSucoZGAED",
  "key11": "4FKeRinbKbCKFrbJNwjhj9PwA9GfB47MyKYqoVd77zNi6bCyNXccXgaXeS9q1is6YaMA3gHNydAwaTvUHYpVd8Bs",
  "key12": "G9B2Yx3Wsn4PUpcF7337q58VtPZVo5q5kzK3JBfVTLUKjrZkbaNyexqPkW6W4989PnkiJXjxekBWgT9LJNmzTMB",
  "key13": "2Q34PyCutCwiDgtBVZCoa36zA9NipkapL3LbHt9tuwGh27yiSEsvP5d3faASX2Tsgtx8X1qmjXf16oeGqcbA6Hzo",
  "key14": "5R7xh8iUaDN7ATV3pZJqFiPNxQxxMbrWZZVR1hAMJVzDPXy99TSU1Noy2PGGzQEtA7xXLVABtxEt1mUP8QJJmCWm",
  "key15": "2paydPZ75GuWjetwPkAuU2EWHrUP8tgbqhL9s2zFGMGcfNdChLkVZkUuJ9cE9a96dBKr47FioNpo4tFcRdGQsC1y",
  "key16": "5dfTXheRS8foDWXwDCD6qcQkeL11p1WodQvWiqurEMGJXbraA3Twr43wx3ZgikZGpaX6fPsNFBEitx138UQtGiBo",
  "key17": "2MEphBcVuUCzziJcY37LeHwGzb3QEQS2iji7WMzwkitV4tiJzJ9dYwmF1rM5KuD44uVa7box5eMisvH2whj5Gd6W",
  "key18": "66dKxxTetHrd6AQaShQVR1iXi2FpEHkasvwUKYEqqhrbVkRXcGAk8rreGpeKnUHyYMNnJM9rTUP7dkUkwtqEsCpw",
  "key19": "3AFf2ANsY4AndRKMqfoC8X227V3RjLCw3SzeouJwfoaJdgqkfvdsHRcTm5UuMivv8gDffCuAXQpPHvTPjTPvV3co",
  "key20": "utMHhZNTiNPhtUCzsijnt8uGv1eudHaZqdN5JbDVNFaKqeGrG5HczTEX6Bu9XYLuSe4hau63W1aFgPdTcxW3qFN",
  "key21": "2bzxEbBEx9PZhLxz6mQKGEGtMmd82GKBpxbvypg6Zz52JJsEmoqM3rhzqTjUkBgh7jQuFCGFhQDtKHtGbW6Bv5rw",
  "key22": "45LtBezZ4ccubSbavRWSAnqDFVhx9bpeScNihatH6yBuxXwYa32xaxMEp1mzKDCukJNKmAUXBWSMYpiRtxKYDCpF",
  "key23": "76sb6zuX3XmdqvpZyq7SGfsEVwsAx1u8xSXJRt3jw1tsJ8db8xZgVjXAHeVK2catjreoGspSeg1ChPTLMbKPh4X",
  "key24": "4TZ6hbpZgLwvHPFHPLRxzhdQK6R9DXhRaMwTYPXwuPQKd6XqYZ4sEHaB7KBotbzfFsCLohu4UfqKva7B8GuDq2EK"
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
