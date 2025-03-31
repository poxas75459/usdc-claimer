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
    "2waVYMLkLpPuNwNhPkfZvqGbHZ1PtNrK4AAf6Hwe8JEypZWwAaR4pMtFsZjLCmHNBiTjvCsPtkG8E3vyXYK1N8kg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BY71FsJ4PXcDAtjSLsEn972NQct162jnfsMyLjk683DcarpQspbcGaJzXzNMhFjmjkqkEtx85jubqXA1SFWRJjN",
  "key1": "27JLAR6UEAP8N3wNc76vYuAcu5QKuKvkgPCTV6aQ6tYBnusbe9vsWmV81Wpnx1UqFUUwCK1qyw1QBRc6h12MyqNk",
  "key2": "65yUCQQM5WtsQd1qNtYXT9o8KsgG8tWch96xHefQGdwzgy8fuU3Ek5zCLyzQy3DpNhhBrXqi2MQH5aQvcZ9tqc8e",
  "key3": "je2kk23gDSvL6GGRPyBLopdsLkEoWdVfrui92WHtTGgHhtLHAA6PrfCxstuxdTwjJYwQLnqc7VAWjea8u6NNpN9",
  "key4": "64tcRZDKgeswNVNNz36GyyYj5z9k5oSo4EoizRKC4cWw24FqYWx7R6P7u6F29ubo1Yr1bGuu3WYdsAJA9kNgzKbx",
  "key5": "5JZ3Y8C8xZoRb1QhLzUvfHuBMCra5PXBJYzPB3zPcSAGSBs3tZTPXMJjAPUiSNLjcWHT4CCHyv7c2FBRfogioLXp",
  "key6": "TVREwSejrkoJwbUABpsEkjAov2ZrA3WYLeSgCYVWttdcJWJkjhhdLnnqTpN9M37jzHvTWmX2dP3UpYpoC6ikKkD",
  "key7": "2GpTA1X2mrcdoufw3V8PYTrGJ4wMcVZ1p4YdhpEB9HJS1uvPYRTusRZMyCCNepWuhmEgoTU4jpEHy51v43ckiutG",
  "key8": "TYMQhvnAdddJ5XoMHkrvbVwUz849xopiABU98nMAesE3FySViXSf1TEYaWctaLUbBV58tWPoWjc9DzHdp5SafSY",
  "key9": "5TYxFnBMz8cdPAnDYU7gaRaNg4pappe6TEcv2nsTXWVkHsYYuFnPUmR1XQh9sjt8hkUSw6XtxjgbGJnkCJhn1qam",
  "key10": "5SCuQXJXdb8NK6YALi4aeyDeKt1xEdCEcY1VKR8etFoYeWuFTf4tCE2HNps6VrktJ2cDkoVGr5ftKsC3EQvFgpVD",
  "key11": "5YoUvRVUcHHXobB1jX73cLTtttyUbpJzRHgKzw7at5wBDvk66TuuZeGKoowSohfUm7fbg2TkKYn5Hn5fypohNgmc",
  "key12": "5teZapV4f7WC4xCEh5tVXwTT1giCTNsD6sJKKbj47JScdbL4rks3q7JpP7yE5qF1bpEQsoDgLfKHJdV8hv9nemci",
  "key13": "3CrgoBEQ3gqkikNMxTJypu3erH2RmBaNQGnaGpbSk8BgJLx5S9EqVNNQfxUrVdAiGnF9XuZF1Y5mDyKneZHHT5A",
  "key14": "64eL2oC49TmoxysEJQyuQwZZWHceF8rCaGU5k6VoCZLEXR1q8KQ1sZtXgAVLqDoLVTjAQFCi67mAdUwGfdsDXfYm",
  "key15": "4jBuX9ELdaZSPQfN6vfvVzsv7S23QAPwzgix8iNbedR1TXtmfyoAUkGKJXuNBZYwjrWnuiiuJigDVvdMka5zDdqC",
  "key16": "2J88qPXKoZBpQ5WCtVjM4EMg9wWpvbxdmYhdDdHp3yuAXTLBsQKRio43ozEvJVoXig8mvoerLugTymEskicTuCF3",
  "key17": "3iQpN6MnA5Eyz7Zm6K2oTisQjkiaDx4PKwPaWWTCQkSuKwVfBJ7MdyEZhMfjNvzKhy2sy7tyFKyfHYDKubNL8dAJ",
  "key18": "H9bv9oTx3HWEc8ydLrQG4W2roDKt4FS9pCvvp3kJGN8jbzKrZ8dCQpvgmFD5Xt2FyCwxaEYC9d5mH93jfe4hL6Z",
  "key19": "2PPb9HH9kjmKZBRpcE9krQrGz1uaSaibGe1UndmtSADjk4jKY7oQYhZM3mAq158cmqTu3y8HgmqWXnaRgTcv9a6W",
  "key20": "5Tbi38bKpK8y4S8bHSGF8EPuwzU8cA5AbxDdat2EE9RnvawsyvmdcyArWEojbXSDRVqQmSJGB9MzKzgN4thv2Kr4",
  "key21": "9dZcBSpMFkbN8UvzSfpYbtawj2DovNAv63DWDJSARs3JDkLtxkfrNYpEZBwmCoA3BYRhFvMpXhr13fVDGNFTFd6",
  "key22": "4Q6ijS4w1v5vT6VdG4jU1RVo8NohtLuQ8nZwHX279Jt4T6or2ARvJXx4ef9qqg2tu5YU9jBxuYJcJFVTLrzAz9vy",
  "key23": "4VTsxQ7doiP2cUoqPV8Bc78ASHQoBarAi9jJ9HwdT34sMo5ZA8siJACaE1CE6c8TRB2rZXXHLs9jtj4s8o5EBpx6",
  "key24": "54tWU5oDZqZgED73WPqSugX8JLabQpVYrVgMDfzJwcWGmU7GczNyRpmpGsTFzNvNiED1ZAAeLGej6B4srESKzmyL",
  "key25": "YjTT9TrudUh6JjP8zeXzA9fJx4Na5rbxBDsumvQc4UABE7QJJkRMojM8Tj1hDohgfykWzFBEXbxcWwXJj5tzQuL",
  "key26": "3i8JfpoKstWzJWwGXMMfWuNv91rNmsW8tK8WSem9ViZYwnfUXb9KPwgvjAnHonRz2gbQMmtQPj9aakEqeQLAm6xh",
  "key27": "3ARAdacMiQRCXEpjLNVkZSAebdY3Qewt39JDP1xHzagkaPgNo57kbxWfbjG24FSN6MnfJxJoMhXbQ7Z8N3SHyCFr"
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
