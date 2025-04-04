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
    "5yhsLToroBSvPRSB4nk8FKJ4SaW2T6wQgvYjVoRxv1RmioWVc8k3RvzqTf65tnTwFmXt8REtzHvPxoqe8EZr25hM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Edtd38hGHgNhiFsM7dsByBY3ZfHN5USSCQJyFrCnc8j1KRwvN8uhkPuPE9f1dvJ76ECvXB9FYZsixb6AonHyg6v",
  "key1": "5ooNST9oc8XE4fS6M99EtwKhk8vHYfA9dUdxmxniGkbpPr4kz1qTpLRLvQF65Rok9FkvA8DchGw8yyLHYC5DntQ8",
  "key2": "28Mk12R18QXew81GQWYyfjjCcXtTt7yvMf1STGDqZ2quCmE19VALL1F8D1qdmv13x31uvP2zEvQXLgEoJ3y3t6gL",
  "key3": "Gw7ZGReDyAGgraRfxnPdAAHwdneqShSLkoYKkzP6Z2pqhMNAJAcyyKcVW8Q4m1j9CoV8FvAW2b4beqcNk1FisX4",
  "key4": "2EP51hdaTrDhUUt1PpiBesYYL3G4WdZktngrkET9T9LaoeiwBHcoLGXLD9VmD6yGovqLNJ69Un7wnGRDipqXwSYs",
  "key5": "3KCZwi4diG7CFJQBx2RFBqzHhzhAM8F9hG8dZZX8dkiiTS744u2N2UZWh4SkjJmV7p9Tyzn8yTBDD1J3SU3Fn5Km",
  "key6": "5JxkP1cpsLhp1Nkgfx3V4rgh3WjGcUFpuyhC7791pCYLbywEYYu7KURpigj8S12rNAr9jbY2U9PkqoeUFMPRHENG",
  "key7": "3xErxDsHnya9ELvxddowxhUaqRBF6cz6XSEPDdeyQ76T73Jq3bnkE3smUrg37epfAgEepCaWqARxLuUyEfJ5Stmd",
  "key8": "2VD6j5gCL2bgyPwN311LbsbzEiYMVS3S3cFsDEbSBTB8CGFryhYJ69X6LH1GF9vN8hCyG6GBmN1KpaipYBGiD8km",
  "key9": "3mrJFJZ9UP1VrTFWqFaKbnNcBVsQS1bZvgqrRjEKnvgUf4DsnEyJ4jU3xwZZGoKt9vxXdGgEMFfWioVWEPYaxNJJ",
  "key10": "WJRzqMekxXqE3zFRYCak1RAK9bmdV7FnewxTXxU6hrMXcQ6uvt31g8eVPsGtwiYyCSjUhscYTHYa61xai7kQryc",
  "key11": "5QFXPu274jQVF5SZMp62fBGZNV3X1sZYZfk62KQELt5zeyFYZVCFR2LvZCUhYSv8vVj1gPU1gJt7krUoYqAav11V",
  "key12": "3FEBFZSMSnJcJPLGP7YrtNKrAhUWtxDQ75ocUdbf7SexqiDY25nnYbVsn23ZKJkEdGSvod2WYpMxjTWUNpJ3xk1w",
  "key13": "2gmPj5Z6dkGYCPiX1DW7HgFvP776G3LVvxcJkRwzF5hBTW67MtfSSnUGjFd7kVGFbUqLM3LNZWyoa4E8wVTgsxjE",
  "key14": "4VLhzkdAhokEFyGEHnc7psEJTHh3HTQ4sJJtC2BDL1UTKgaVx3hjJF7rXwmqtWMcsrjkYhaaEVvP27M2vqASVkE4",
  "key15": "3KGtUB7c7CXtvVzUNEMyG5WRf41rWrL7MN3BgPz9weuTpELKeaXNdKg3TSihrqGEE5b3HurfoJpRU9smA1NhYBtg",
  "key16": "4P95ACopzvPi9SGmSg5XYf9mDCAktfngnWqTXSMrKwS4gC88xe54ufnX6LG5G21HbVAq4S4Ly3FywCGyMCVnrTaY",
  "key17": "3QzMYGNTks8Psg6pfYRFP2zkQCY3GQ2vJdyq2EkqTdxFFMXddjZoSzJF549MqXgMDEt7XfmRUutudutygWw2oeT6",
  "key18": "2wuCLBXEkgPZwSdEf1jbWSvvd82KeQmLk3yxhws4SVgSc4CESm32crVLpX4gN3BWcKChnV6RkqYuuPph1BoCTSoS",
  "key19": "4hH4v7G5mrq9ixEu2vpGRcxEvUN4miysZgUumktHqpHTueW47fCTKAAbtRdPsWZ1HtjY83rGWUYn2eFPjZAqiUkG",
  "key20": "4p1pw2hXpYqa7SGvMYGnJWUHASTzBTiF1sWaksauKu3xDeG3kVLEQAhZzM6LGaLLSbfLov42CPEMd9jrmNdwamM7",
  "key21": "4MqQbsuH9UkvfaJjBVpdpSxombr3po2atdbw2kuJmmGXonKE6fqDNfYDYPGDaGVSzwqKQqKbzsyuMDSMH4JqTiJA",
  "key22": "52wyGcdWbJw8foQe8jbUfnziWGjFmaJRvBEMxZ14frKGBxARxQBYJ9gu6XQS8bYewL3aCfeg7xyiJUZVTtK8trVR",
  "key23": "4cd88NjuKQJfhfm1DNUZhFsjsXZ6X9XMvNnWN3Be4XwhGFpuXTfyKuewff7Qs3j8RjUbY2bu3F7MgEBH9WeLhKiE",
  "key24": "4bH894x6mLvC5T9CNJeQJ4t6ufgzo1hFUDH6D1ekraTZFnNwKUs71teEC6BTvp6darsp16dvjvp5Raoz3m4sPLe4",
  "key25": "4iA8TAqdpU2BpY9qUt3aA8CFvQDbQwWbadpeRSp1FSFupnF8H4J1k11cu9gQ84DKTnAat18YJLo8EU7rM5fsZJKd"
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
