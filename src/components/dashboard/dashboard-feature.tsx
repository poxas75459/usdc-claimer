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
    "2azkRziaer7ooBAfBeGvtoXswvDKF7htS4vWjYHdQ4RQcMaSwDTVNUUoqPQTNW89JkwUq3sHRCcZkHJyKwdXM4hM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3enzHUF8n3t7FPQqPJoQDWRLhovESPNz5mg5drHNfLp4N8YaVV78tgq6Ve9ri9riSz7XUSTdxbv5eUfwjHhWJXR5",
  "key1": "3aazB6pGftPJoSKfx7vVkDBih9CTSVQ2rhW8GFN2oicfytkpoM9tTZKTA673pYsjg6vSpDuczairt23jE4x9Wu9c",
  "key2": "39bQaNMib59vQweJ7PUujqYa2tjWRrAsNC1dNx9HUCCUUPFjDR268pSxXoRTHkdXDKRvzaVrwtBWk5XnoWfUtiZF",
  "key3": "5gqKGcLFTRK4jRXiTFu8ZXwpGDhA5YXL4Ns4bpN2jSdYg3e6Aro8Ni1Svt7eug41xkbaYMh14sTebmSs8y7LsPAp",
  "key4": "46kHtEjpeWocSmyEuhYVVUE363JhoaZugXnQRKfNkWDj3MnYXTBMuaa6FCCsPisN5jzs4b5U3xNwHDev1htNpoGp",
  "key5": "39t3YoZeBucvWj1AUC6RjW1zqcAp5tyJ2wP3pBHcv6x6aAYz28BDFsCYXhBAdfPniDLvkgig2ScxGKjEYYEwUkzq",
  "key6": "5wAx7hTVZHDhncqUSQizLvWCy5qKW3VBg4zui1V3FMj9xyJiCpWJAGwZmJySv7uDjsBReSLCmi5eTCrY3mf4Wrn5",
  "key7": "4zjq8ZYRXUJ4foXJrvaWqch2bcHQ6AT9pT6xhoQMM46DQJ5bWfX2BkEftNSMvddhcWksDp9xSKJi1hBzQNPAj6p8",
  "key8": "wSSZtJ3yed6QwjPk2Xsh9mobrZ1M8rfHykKABByGt59uornmXE7mMD5kVTXpaABswhL57BVmQmFU9tLbnuASsHH",
  "key9": "4MGDbvWP6nY3DAafVb1CPmc9AYYvgLg8qFNwMix6bsT8kFrFLUHcK8dE53TirVhDsAxNPQPE4Xa1SLcgjBdt736e",
  "key10": "4c9v72xqac7Y4exLGMZb2VTTE9wCdgozcRDsnwUkrmp2f3DBM6M6wJYvbnuhyz6MbdGRxizoV6rSmpSnczD12eXa",
  "key11": "jNxU1qvV4R3uYSNuBTo9bsLVfWfB8VYTv3PCVFhyGGkGXzG11ADVrs2EjYriqChYD68qkbQXQySWnFSkEYgGBhB",
  "key12": "5aPNB9MpmYmyF2L1GsBos4xAVh1yAAj2MV529DDQqDtWvbhCyxeXFjuMnFZBrSAtM62tXMbKkwDY8r4aVL4EcnZs",
  "key13": "2AHhVVmrqxiDo6cEhEbfffzH21ZQHekiJHrjsZCthJc2Q2JiuLrxtaEfKS1r94cXNssGV9d7qVdi2cwGTNc3kcPH",
  "key14": "StDaLXq2diooZzpkxkaJVFwrf8Wqvfr2E1BwowvNHuQkFG6g59LpG4dU3aDxePiVonQHZNeh3iMJfg4M3Qc5xZT",
  "key15": "2WZyLdKeYahq5s6r2zmjV1kYULLEnd4acgM1XzU998p4TVpVP5ZHeYYMQzU4e9YQ5syFd3fMtXdaJfjqVeV2sSyM",
  "key16": "2bv8jpM7gcEU8yPcKXcME4GrXY6DxvsMwvp648P1QgiAjVsaHxRaBH1QMSJLJxkCMfSKWWhDHauQmc46x5TTUyLk",
  "key17": "4owrBQYqZLdp7MEUuBDgWdcRgMK7wQ94J1PS98J2F3t5u3NF5Ab8oQeCNaEMUjFQe36M1MPXSGt4QNspUodyMc2s",
  "key18": "3H1AioKJYcvMqH5cyepxT1nG6uMvHwEtZ3PoVrtkW4WxzSCBBerdHtF8UuWnPcF89V5ARsboH6o2yJ999ym2GbFy",
  "key19": "5T4k2PNE2phT39ZELCv1RGcBkvs9vc4sLUGn5JDmjsDZyyERrWhGESSki8qEndXxQq5U2d9VFZPmNshasmagcKqF",
  "key20": "2pV6XqL5F6BF2WooT9zwKipmiL6KZNqrkKDGt69hNaTXz9R1FpFHbYFfwWiUHychV5BPc4Gk22tQfJ9JMtnZFn9x",
  "key21": "3GFCLABkJhkTpVb3GE8Yx7NkshtM5BCXxvvatf2kCvq9rYWQGHVbUq8uod8Fo42icyoRHMNmP53QAKkMzXgVw1ey",
  "key22": "5khm12Q5Q1KcK3JUGYbM48Nu1nvK4iy6AhjrJZghmEqVAapMCkRztifkTvN1EfQRh4H5Gg62q9NfDdY1hafvSPmu",
  "key23": "32HP9KFcKpdtnEkL9N3HiaeZHnYdo3zzRemdfqbK7WdziQ8a1Z2fZNPDS2WCaVCQPzeH58gqJQN1S5BRTAVFzLLG",
  "key24": "2HaQpRTrG9d5VFUgtnDBdwvmHkwjbBRCxuQMDS79ZwSLEX59ewPHk2gKGrVgzQ4s1QtwqUSFGYUjVcjJtm9eeP4n",
  "key25": "4rSVAccFo3XibQAgeLPZMnw4AEaiDz8yTF83Yu3U7hk9rWp1Ws3zjRKahRUGyodUfDW3wzBdUCjakD8kqXgE4h38"
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
