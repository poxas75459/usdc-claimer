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
    "3GssVMTWFgjPARXate8oAtuRjLzw5SVQVCBDVQLRjeyU46RGn5bikJQBSbWGpU1Jfu4byur9ifDWS76YrmJaHxRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rbxQ2G8cCu1WYJdP4gykoKnBuXtF2jHZw1WYVeaM5rgqDbGjZ4k3jbRGhJYqUayb9ikmjLeRqJyAZDw3uKp39bV",
  "key1": "4LNBucqa8mQarvuDdKeTFzkhC8mH3pRGLHFtsUsJYbXuT1edjey9C6YHeZrAuYE46FSPCoF67k9QiE32jzx2CX1z",
  "key2": "3Wqgs12tANgv2c6mkwTHsXsyxV7sLp3PAHDcx47eZHmB3c2zZUouTDrfNjzp1Xh3HWqdRDfT4enHkznMasKg2vWo",
  "key3": "5Tsg6VNjS7rQ8t1riFQQXBjBexZxzmZVTBbrRhvn8iHDDxFs2xmuB6y8KkC95HsHeYo9c1oEfmsWWmK2NQ7t9mof",
  "key4": "3T9yrXbH4aLURgP5Q4pM72ExBAizgyhXRcriXAmHzVCpPXtSAP3k1zni19ewSbSPqr9rRBeidkXLugznvU1SewM5",
  "key5": "jr1unQgyBfXZEkyPDCXYiiW9UdNps2PJb1uPkePZyC8prHyiBUd9aByNKtZUSXsWG2xgADpoWP5tMyM4JWxUQQg",
  "key6": "34NKSYuWBy2afokLokcgP5jYLBv2HodgedbDnB4UuF9BujEbJNmKXDRYbCw626KVGXZqE4qLnpYFrFtNPkFx2utc",
  "key7": "5RsfXX6jiivKApWnZ9R7EANCGx3EcXrGv19vHAmKWxJfXMD2GDC32CHAYqcXSYtvrn7v7hzEq8qF22498DvbUVbo",
  "key8": "4vMJJo8SN9Wc8vEvdatGBpo7fHauBc16r8otjbzRPeERzT5r516ASWSVYR9AqeXDZutAyvsT4LvsxyUc3ABpgdJD",
  "key9": "5zKbQCkZA3h51iNCnxxRRpeyurndWxDQpJGPKyb77jX2SJE6Y8TEzA3P9Eix94LftaVyK8fcw3NpE61ozZvVGfjS",
  "key10": "5aXPRYvXZ3QR1iGU1KabERmcNakocTxznoZJjFUQEwn8CmqQixA6TDjjXS5dBo7T7XKAdMa5uTcDuSne1VC71g8J",
  "key11": "4P59E2WQoWGvxgZz54ZFffSjAzBayPouHUofprorENsBSemDnLY2Kgx6o3kXSyj665WepufhLfxQTyoUuJ9e2Usj",
  "key12": "4o3xM9ZxAi2vdJGg7C5YpXpruvQSNiDJViqcjGofWPHV7wceiP12JLM8ujA4aD5K29eCz4Hf9g5ZzJCDiSpLk1LK",
  "key13": "4QpxTKAScAV2y4NZ3nEhf2fDFxq6JNGEb9y4u2ye2msRwaUsmvPNJs7yicziV6u5njQTnjokB4d51vs17T3iSjMp",
  "key14": "56hvXKMtFDxLfdFhtcWpPSo6dA9QCL7gm5nsqzmtFJGGsqHT2igypkh1zqzHfEcbLq8BLREZZzAiNP6gvVeZeDs2",
  "key15": "3DMLBo4AcnE7CeD4xZD2pqV7qivhYJBA5P8WsXPabDR35ej3ewmLE8QanvuyrqSCrWRZA5AZPFJNjCTASpzqSM6C",
  "key16": "VV1Spe63rEUH6bA9EneSFAiv8iYW1dWKrFjudFTLz3UG6iueHaS85cB8U5eK6d7L2Bzkof2gnEc9CoTy9LqLMc2",
  "key17": "3cMqew6e9BikxkR26njRGVKaEV5S98jNadcAkRrfEoCjE4vWhGqC32BbVFMNx9Fcs26HCj76BYbL1QiG6YeF5Rgn",
  "key18": "5HJ4iuesGnWEXFGADABbtttgojywwvK8sKgXWRyGPSLtuG27LDeMcC34kfyx7BLDRswZRGmE1kMrwdD9vXk2QfjC",
  "key19": "PuJgkjrkbKa2czkYozKuRyF1sbe5Ls8eN1VWqyQ23n7VEG4CNv8KCzcU6wa4PwECYwgsYzJVek2ak1zMUBGtzEU",
  "key20": "5Tv1gbhtfjJCvdpP4xp3FQ5F29wffWVNbUpJEfdiqrNvcgKBsuXsr7xsghPQy4fGv4Gmqk8kwj7f5VQcLkmcsoh7",
  "key21": "cGMBppenDPunzn9NgMd9QF6v4pnZ6csA9KJnNSHszRNBFwNVz1ivrAfvzbFj3acEyakgSVTxc5HnUMrsbVm4Ccp",
  "key22": "5sG7CaAFXnEqXdMQ4h8YZq87er1VY9X3JGSwNrnUY6zbAVo6dqsfgFcAXjE4zMNbtF6mytAmYEzDhqHS9BGXxvY3",
  "key23": "2rxH8daJrKBcEz9MZjEEkQg8hPdjEyfD7LZSGng51c7pBDRPqiAHwTY9mYtKTZpzfMBFTstGwDVfyK5JPfbUKoio",
  "key24": "4pL6YkvVqeCWbXDWbMvYFiQWnyv6A2ZBJMNiK3GR8TBf2nEp62CsnJnkBFmMnZcHJfYQRFSk33u62pLNZot9sjV7",
  "key25": "45kzEZwGx5QHthpuQfDKpATCi4X81Gxzkjfp9KPhYkXbypCXAkFfAvzmq82wMcbLHpCCCKmhceQnfnN764psNm8N"
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
