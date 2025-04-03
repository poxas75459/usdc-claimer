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
    "2tqj4JNifdJQ6b1GB7vNDW5YLtdF5K5ou6YGiSjHy6dDjL8uhTS9HE8omTYPEwbdozPgGh6w98Yk1YWjMPU9uxWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QMk8fiV5ou4EvDeKvCwruygCojuyS3RoYtaY7jQJr9C79nyq6n3mLMuu95GNTq4FnCWqqVGDhPRwBeGLLMvmR3i",
  "key1": "44uTxwsGt1oSSkNFQoSvdp8nmVq7HYReSJNViuwmS3f4N9PoyAsHYJnsB8FBe8YJEohsNoFmpVW2WxFyitVfj2Dk",
  "key2": "3sDvFBihPzaRzQwib3tPTngWizsShRYDfoatoCQ4yiN67QRpBQ2L32WHE1LvSc1B33xEpP5537iG28xV2ViWGitR",
  "key3": "JQB7uU1C5PqJC4PYqZJ7rWNmp8zzyWs7sNaUMmc2khMMs4QVCT8D6tpDV3kPk3Pq4DwMC2iu5yNHesEMqJLuk2i",
  "key4": "2ST6ziFdQLdy6VsJXuBvfaFqSFsG6LkVJiG6qgb8BZEQKGKn5qzTgzaYQerhWNytc3UHneHd859kgEVk6bEFr1AH",
  "key5": "3cHLwmfNbkUuNnEra9DACZiCCccnLuELX1QsL3aAYi6w9xYZt7sc9zEojnmtbJG4VTnZAKabeMQmDoUUGhvS2uQh",
  "key6": "2nuZJArqrPwmmVdJZepcZbY6UZd4WmkE25Gw1n45neWbGwFutHd8D7bbW3nxygcu4DLvM6QocwzL7KH1RHeJ5BVN",
  "key7": "4TVRbh5RQRxoEwsrxd8gnkRtYzwQLaGbnB1y145RNkdtJeZU6wbAEhx2Cr3t6LpMNeok4JDmqDzyL3yxFLcxPGob",
  "key8": "siSRLSBmWW2YDNNKWm6T5QT68VQdUzQ4ggdDHRiyucem6fka3Hz5UhtsHeYhS3VsB3T44agERe53pKfFuJt6kPe",
  "key9": "3vPfyNKd6zEMUiSALbcmyyEUQduaS6X2m4cUhj9f168ZbM3hFiAeXrdCDeJtnqN4hFiLsKhKMuLjM2osfiY98kPD",
  "key10": "5ZLLuAVZZanABDH4HHiFALcd63MLSUGMCNVd2juqrTBUvtqt6zvUPHXbUXwMTrxxyraahnDZGopw9qaQmnuSzfTq",
  "key11": "5Jq3GSdUijrW7dsmXPRNWSyL4Ywaohp374cmXZFwbauBbnTnZy8AehEGnvFTfgzhF5zgW3smfS71LUMxbLRXvpwt",
  "key12": "5HCY6GUAjpXprkSRrxUMeE7w27PsuvXHzVSsd9X5KG8TsGcv2pB7YfqiYQFtQTyLXSzkzkdJkPXZEUxjXpZVM74j",
  "key13": "3tnXQ9z8g7r6f4CihERd6QfBzE2hGatf9YnQAqN8KvyZdXZ4L2ajyycsCdioJZC5dgUhPieCZLKH88mxxyyWQ9Vp",
  "key14": "5dD2v9Hjd94gyozWrsR8Njq3KWSScfLyoN6j7WuvokvdmJkhxWwcFNL3envL9dDUX8HLKpv69RqjHgYpwzfU1Tqh",
  "key15": "NeNYbnu7WbpDvjjEVpuMdJTqiNUxzoDQoJeKx9deYJBN1yujhePiFPxhtEwTtmTvW7CgoRZeGYNywHgj6YydB3C",
  "key16": "4HwU43eLvog9DiggQmTD7bu8UciPqm4DtGtW1tM7Hafs6epZnEKei2TV19D7aoLtwjDYWyWaRRNhsMZSBkL2Dxuk",
  "key17": "23ZUq6766kLAH1KtxcsBzGZZWBMHhqe9YcYr5M7vwvbSjVk8PSdwvoZrtyi8uopz2KbD5nsEuYzeRbwy6q4D33dw",
  "key18": "4nw3a7jvBfxRXaGpDSVHYXp7T5j3dvmzrMWhCbNNSqroiH9LszX6VmAuQtXuKKyaAa8BgS1s1cE32ydkhYYGRDng",
  "key19": "2a7NosDAFDrJCVvqs9764HXwNMvNScRYymGwmB6PQm1VrE2gqRCrrP2aUNw8GCq21v1JXiueudDNNwARuCRB173v",
  "key20": "4ZDBvPT4LfQQMD7aQX3GvwLcQfenoM14CFkzj52ANW8cG7ignf2ADaFtda9373t4N6Z8Bn68dNF9k3BuTCvwCXyo",
  "key21": "5HJ8CbxBQx44NoLcTFzCfRTvnb8fVtBj2CTuZoMmYckGabbP8zFLPSGs4pHNkfkkP6MRLmA1R2yL898nzbBktehk",
  "key22": "33kbBF1v3dj84UR58L6bePCZQpo98EMrokyKPkJvmps4UmFzAvKp45pWuENWoMLqBVCdYdg7txdfMitULjTqM8vx",
  "key23": "4xAqPCtenbgJXtWozK4M1KPsy5Y3jR93ZrpfLYUtnguWELcuxftdeMUtkHJhSjDCtEFQHsifXJJ3i4BqTRrLJwZn",
  "key24": "5g9jgP4E7wVHfbsXuwoWSdPVHdkxUYiH7ZgbAAkc9AfUS8LuKwpmLJyFrC81YVhcy7ytU8WfGM7juDzkqWQXqP4",
  "key25": "447LW2RvHGh6TvJ2nkpA4vAmsZwqaukYNh7s5AJfKoRUrk9ng83UZpmiVL69x1QtwT92p8iYdkZ4S1wsB47aigGm",
  "key26": "382WKdym42WBewxcj9qDHoDDoTd3b5a1H7JX8Cg3fKvtUefg8eBB4vHoAvdhqAuBBqR8SYkdWfGW3GL4au6jiPmj"
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
