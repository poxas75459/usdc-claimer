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
    "67jmZp5prJpfpUr3Ptxj2tjBy7zFsHkvZHVb6yUqWUTzSnXh96e1Prqbu1yXZamWqFsoGwWXkyb5PHE5x62AAwzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31TJXgiBLRGproxNjgFtHASVT7EvL2DUnNZfwPk6SpUmJKmrpViwBjg3EV6wqnpf4p7zhsKurhBcTWssHe9RoK8w",
  "key1": "35LTAwkLKmqjWJotFD1s7zGX4yuZPGfvPnX1C1Z9tiF7cbr7s7qj49KbKkr7cRCpwJFbe2zSHfBVT8JYbPQsnX5V",
  "key2": "4PKNH5xVmBnWikzuHHJ2SpDnFKvrJVr7p6p6QX7iovjJ2zUyJoxxr4x9mju5V1k8GsHjfh6v7GPbNLVquFnBFggs",
  "key3": "3nVqjf9SUpdwPfaQC8FwYivCoXwf8mzSEiDdMSV82WmhWjPG9uBycnKpzac6951DsQ71VcCMbD6TgkjfTrsKUzJg",
  "key4": "jqu5BtMC9QvY9EfoHY9rcd2rGQd38WpF6jHmecRv1qG3iBy6QmaTxkLDLiRRvFUQHx7kaBRsAvKY2FaxtxxQtbQ",
  "key5": "5aVoSPkCwsHBpYST2iiEBJvY2FP3FR5JWU1nMw3NucKCqFnni8LUo6Pydo1bcPND3AV1bNF6nhWRKQpRYRgvUofq",
  "key6": "oRoZm84fiHJswqjQAKWqFdvMK3aAc22prT9gMBofRPsBUSHW1zUMb7GpPPyvgkdcPb94HDHRaU8nP6Vqwx97PVf",
  "key7": "eMWcam1mdUZAzg7Rf8cXrEM3ZjeD645AN1QM6mHn8yrYdLwFT9FKBYXLDQTtcGL2kDjxLJ5NgJ85EZ2cMRRrpim",
  "key8": "2pLJuysrsZgsvCi3U8W9AehLU6R4WakDVJtM7Bzp8qwkaYyEmk9tDRuQ4NYZ67w1iCnzDLw9rJxAWzkoQoit2hik",
  "key9": "33b6BdZzWJWDyq4EybAfggHDrK5sEhPVfYsQqj86hH4GzZP2jabkYWgrWLpwLTJZCCR4L3WKtRNNwAV6VaJWWRZ4",
  "key10": "3k5PQUrfi9k6dVNCvTCPvg48Qt2vfomJ5TrvrpoohrHoGvNZyjjnu5jjWeTNkF5qzHEtbBZ149NqVSURea7uYPnd",
  "key11": "4249G1JsTHf5Sb5kD5GYrUQA8M9pREV4mEK6iFgid2jqkQPTMd3Y5jFt3e4qjgVL9qaSzFiSzw1Hs3fNmARMkw5k",
  "key12": "37uRkP41GK7CizxdywrbGbgs3hcqEzrx4CxnhXQFxzZGz9zojed48wHgCyNi9QwqtVpVLZHm5LHfV6VubJgk3A2J",
  "key13": "5XokNUboXSEZ3P4cZA8v4gj2oaNg2u1n8VxGx6Z5TPmoUWHNrQWTKYLpgvzD4WmA9qaFQemB9JonHpVFznvLtSzJ",
  "key14": "3Br2Ux7q4ehWuJ9NdK6dA4iQR1udodemMFLpjsN6u3jBjeBrEPBfjz5mjwif5PJXa1bXYbLmTiWvmqAiCyU94PrQ",
  "key15": "ijPB6dkgehbSurqiZTEhSr8jd9jsaLoAX7Jc1mLd6RtJhDCxun4ZDoGYyqV3kvDXc9W3zhveqwAMtAPvLBgKeVJ",
  "key16": "4VK9ic8ibBcHYWKUenYYuWXqAB7Uxc6MgYdA7HnUYnw56nCpJB7u7dL3BpoBEn1r6Ff1KGtwLeEHFwL1QCnMNqRP",
  "key17": "5Fp6LUvEpBb2NX3BRmh7hopBFzrtjqsR6Dx5NBZq5QYXLHiyJr65jqPjcfvNYhfQCHsK7qddHZdf7jAQxe9WkYCL",
  "key18": "4PXsWQ7kWN6cu7awtVc41az3nYxQZVvqbqhfvt73FzNqtkD2QiZrY9B2vJBbAQrjTLbPvDA7sMZmbGVkNL3kaTYo",
  "key19": "3Wy9n7YhcYHVAC74FR3avhefgMvWekW2Yb8gMt5Po3r7R7f7mf3XWxK1CiDdV5AdXLGv9xBXcnhPccw6jHpJ72pr",
  "key20": "4qH1rzprayTP3Q1WC9x79X46RdrUALdkrM4YyCSci4WDuXGHs4DwqEsdYioaFqgKXvJXttnMaYzJZULgVuRfVEdS",
  "key21": "2BDhqhy4t2eBj4PVPQTkoMLu5CkLB9i6QPWSELsYsPnWkk2RDD5vrciVaXMYEM7NJAN7jtPUudxkvPs1C5BSsK9Z",
  "key22": "5JNxuQoC4djEkxuzvqiSsxB4Qyz8Tbke2V92cGUMBwTT2xwAKaQ2VeDfEaRmabdboRMEuH7aSDoHLQymVptHQhAY",
  "key23": "93TqGaM67LLtkPgdiuQRGvCeuHWXj2nKESihjcvFwnYSadxQd8QQtrqY9zs1qVgePcRbCRwZYJQYCgxxVdvSsEr",
  "key24": "jbNkCXz41BKzBfFPt46aPArJYonYZAjJX1aE7tfpm3HPETDuHokLSfQwitzJF9VLvW3T1hjXsLaNePcoQLDqAzn",
  "key25": "2K1byUPh1KkbTffvUvsudWdM65kHM8R6TMGESjv3GZusCzt3MFFBpb4CwjXQ9YZkt2752JF5wDfxvdxXk15rGvLc",
  "key26": "2TTe2ZbmtziAhbcYmBBYMcqkfJpU2Mjs9cR1gwBdXTCUQJRixkuwfAxjNsLuXm2wQJCTEbUkvLnWZURbqdsUNpsA",
  "key27": "38TZNioz3ePNinWvvHW3E4hJ6QZxvFxSW4kuPkJcTjgVQdMYJTtsaZRA9fijDPa2RsnyLdMM84Hx5K1oWGxJo2Q4",
  "key28": "D9XHdWuDuDhFgHehTAZdKWZrijs827DTKzrRXFC7istGSmMs151Bc7j4Jz9gbdvMZkwC6sgHCDBLrYG7YoaJJJS",
  "key29": "2mmtNHLKxurQyV5dVVgMrRgKt4nFkkBxf9N3EmVb34Xi3JwhJc2JjGDim91bmXabbcZYx1ppsWCstea4pwuP3FWG",
  "key30": "4xWPCwyg1PbjhLPNZH1gU3pg7L4fQ81VcyTVW7vVWivytd4kgZ1sWXVRiSvGPtgsqeeEF1AL5udJBwaymtNP3uwH",
  "key31": "5rSFMwXzRcUfc2TNzY2k6kDsMBAY7vyvGgTPiGtbs5kiS21ZtgJqEwLrxSDtHmev9QuAB6pLRPGHYFr2ho7e2qy",
  "key32": "4Tczw2WLEQKMTqCCm8PG16YQnnPYmu2w9YW3v9xwAYMBYgE33uL16zJyd9u2YHWjjSxEcnr9SoSejnJgnxBnrmnL",
  "key33": "xrTXKFjSy68nAjxW5cAbYXhYAodULNmZ7v4MR43118q56dYRnJKKgGm9BaTY3DrPGpJb6c5rVeewLBdNXhPQDmF"
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
