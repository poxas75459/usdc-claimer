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
    "5XNEqTVa5BUw3EDBsBeGZ549xdoe2nN2SCPb2tC3PgRg3h1CJZcWpgfpRWpb82sVnFyQVXL1A8vtpC5hBUEcBR1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5raXXmS9YHfZ6YCY8dW7g3T7sot1hRTR2BHE3z8QEmzZYiFBsiccCb8VsDFh826dYqKuF7nZd3GEybArVmf4w4yD",
  "key1": "3ZCx5fzUNCcPyfsnfge4bedLXkY8QVLgjYw48vxw1dLDHvyKhjSSPbfSNHSPu5crwp3jNQZYRjQhii3Vu6DABfyK",
  "key2": "poaFD2RuEr2c8JF9nEfmbJwzvPzG3iMkweMogQHPrsydJRHq8sZR6SCrb17b7rG5jRbgmqj7iagAbLftbkWM979",
  "key3": "3QqpCSQogwP8B4ff2aQSVMLjEwq3BV2NgUrXUg5NDrYAVgjupZCwAfpGp963cBmNsPYiGNCnSwf8Ccx3SNydTfVW",
  "key4": "3i7Z7BAFiQA69duqubKwVqey18pi7PvJaRPiSRyK7n1NX6oh7g9qDgRdD7vvcWu3bBaGRiH7MvVy7c1zQtwai9Zg",
  "key5": "3Yr81HafqR5aw8hRmUpi9q6dyJPzFdVw8k4JVE6jfW4PGXTkMQPB9DoSWJYfjjMKYp6uXqSGK9GyDb6rJwwJLRhX",
  "key6": "5xN2ikPE7645ZkcoDEqwQs7m2dRXMojseE1dd3te7BZ3vtkJcVob653MLvRLGnZC4mg6YiKajmcmzJceVSG8XZjg",
  "key7": "4bQ3JTJcsTxypt79TLmkMg7m1rrZZ4HgSu2VkrXwFfcGVf64UhC3h1DUR2WZYUcB6Z2LTuPRCkVPsEMMBW1Y5M3s",
  "key8": "4KASfrrUTEzbgmxm9Gu2JbB9o32brnYE93hsPsNuc2pajgdNehcW88J1XRDqdxTP6nDX7txJY8krsdopyDkSQJXk",
  "key9": "4LXfRkxexw9Y7DTrRLacxDCrcDJC7yUsbzE3FM4L4Gfbto4fKufw3bpLGYZgdXjDLincnrbxxmiVFp9WGLGf4S1r",
  "key10": "24TpJXmAcmgBBmSjZwwg6ELqNebcYozWj4291fc7Wzfifg4Cyi285BBEEPpmHrZuU47RtpPF6dg9S46ay3MhRpN4",
  "key11": "DQyzXDgwNbvW452tBRUF7PEQJxYAEzbdKMSJe9gqpeDqqctj6A785zWr6DzEVKnijgsVcpSsZA6e2QtNTF9NTSy",
  "key12": "5G58cd64dprLDF2yHTVBa5inxQMjm2QcBc9qptfnkw897B6zHhzSnaZSJ54BAULVq2MQqUX4hghPGZUPYyGHC6Az",
  "key13": "5MY6iUVTzXi2F6vpJCv67z22Ag2qDUcozt9vFfPXVSqwAqbxSpsHAYiFbcMUoc4Vg1Bc1wX3wNjPE63jtrZGhLkr",
  "key14": "yRMHEJj74ExF4Dh9aToiBZESR4V5zMRTruHPVH7egYZQMao6AK5D2cNHDZvTpZztnd9t7fUd3H4vjrm86VHNqBF",
  "key15": "5jzBEtR4J88XWPSsb6MCGLNDvYckSBgYXDBrTab4uSox1U16yrfhdpnKd6YTdX52WL3bHJSRasEQ5ihT7Nuh8G6K",
  "key16": "2WQFRQa1wxtYDHEy8h5cRDjmAwmvsPGZoJmB5re56793nHUfykfdB1SZWiiek1eUSpvZawvUmJPTbhtRhE1X2JgV",
  "key17": "56pH1ngfKGENaMaFQaFNdAmQZ2MCgUwsxTUAbJfwFg6urasKZfMRihCuBHxmHxbacpi1pD4xJnN6jQc1yqAyEDef",
  "key18": "365BhbWE92VujQjZy9uUHY7CQiX5xCxDLtEx14hS8dSZ4ped4XiihdNT22HcAxRPRReQVcG8BRTehs8WPwyiCFpJ",
  "key19": "3t8cX9DsCsPWfwWQP21NAQbLp37BDX9ecjhwUk5gQabVFPkqPGMnFR2J32LiVKmoshbV1C6o7k8D8uW4j6YxYw9Q",
  "key20": "2QGmsQj5whZkeqwS8JddozZsD1U2KJtQdyNrdJuJn34dm7qrjpwBvAm3xRsJatP4whGYXuFrJzGXLwEiPSH2fSA3",
  "key21": "2f2g8aAD72w4h8wwPvEsuWa6KeCYXydLDxFD9Bwc1mcuAT5kiBKNNjEvYoTNzEdBBeGUkqvjA8schAptVTbuvZp4",
  "key22": "42WYgdaSpVF9SDY5QDmipDHAmep4GXR2VdiX2qxbcdbBudScLsvs8AjF8H1vQvfZQdw2j2rvvmaf4rRrovGWc63a",
  "key23": "RbC1j2itVE9PpbLRCHJM9bCaF17GJ52aSUPLwfH3R9vGu8kUBytxzGAXqN6MggTNmQvGCgBq75KNANXgFkmyBja",
  "key24": "67QNf49L9vhSEhoNRK8Skbsrjf3VBibGzVKB1EhehkvQyzxhNDF4zzy2qQKXFzZjHFBGg4vTmzFGr1xFifqCysJ9",
  "key25": "47ph4qThzA48dXWQCFzJ71z3RDvQdFywfP8p5YoiAvf7GQ1tKXzXsHAW7pgjw457dnMrPZpYCdMavWKjjVRtmgLT"
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
