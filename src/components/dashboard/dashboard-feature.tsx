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
    "3AibPXd5MeqEQoKLwFuQ39ik14wVJ2Yfsx416gdEEvgrhuThLc4pFvQpUcK8BRQWBEh8ykfAKWC6kr4PyLPMND8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7HLP7pdCHU19uZWnQRXbckqqFSRgYaTyv8BwthFQVdr42886AkkKjZQFvuH5ANTCTBwu85Z4ofuhipjZK6HYtHc",
  "key1": "28x8X3KvUUYKYUtrzPjnHvf9VpaBCrkHZN7TmotTVaEe9XgNYENsVuSDLMnkuMY1ZhcNQzuPU3bjQuzHhG4sE3Y3",
  "key2": "2zwK4CrLNP3v9PxwMUr2E5q4iqH4gtPBgj3TKw3dRM24aJZjUVadMr8WBVLtgPnZzV9WLnv5czunrtoCZGTBvVgy",
  "key3": "5AsPnNVfaNPuEbZRKbteLDCBaMU8SLHaWKpnJ2YmUbaXRrD1BsUkz8HBhNCPy2PqTEVQRMic3HgMMNnBRuztzRxB",
  "key4": "5PwA5Wf13hvy6PY8L7pKbaYG7smudWtorTSNwVJUK5zEdrE7nHU8as8bMHkgNDT8nyFtnfocFEn5DTfBMhdBSLg5",
  "key5": "youc4kXR71ff21Q7VaU1ns6LTCaXzn9w6DTqRiBFzpiMHrugV2mm7s8vxXjdx1yfrPzbhfE4fguJMTaW3f5oABj",
  "key6": "5NekNz2kAihia6FXPCop6JXKKwgDkKRi1DW9kUmuK977e4EVMrjtAzSshAYuy1tUJQjyBSDFFdhJR9Gt7W4zjyXA",
  "key7": "3qx9TMSZxFriFUWs6wkHPt1cSRYr2Cqrgzg9XfWbqCHC8HBna2urJJJqG8h8nMuhMF9gQenpgnWG5KfQPjcNvydq",
  "key8": "5ZHw3eER2UYwWtXGtTaPpSnjprGDzCxyz4xZinuQSAzaeP8iBijQGffw9P2g2x5Rkg5tMTh68SzmzX3pKcZVCe4T",
  "key9": "bbzGDVk8ZKdDXx9Bb6ubvX98nMPTP4WTGVGLp2QyBgXfvD5p49Ln58ZN5uMWfUeS28N8n6XZEuSVgmf4V9MqbDu",
  "key10": "f3LZA3o9vw38yKNcTQ6U4jzh17B3EzdULsL17fiQhLhPkAdTXgibKQySfkwxa31A1qsnxf6r2yW3ygC26W8SHP8",
  "key11": "31NHayW1NCEw5RrT5zh4nCPCCfoYQXtaw2FU9Td77ANiVzCJRue2VeyQLvcEexJ7s3wD6Gk54gqjZXhyGCBVE3qQ",
  "key12": "3aGwKNqefxqh9h7Anpxfo2YVke8ZnsXfzTGk56FngEhU2BLd3B5AgDm7nh8g1tZyuCv8LGbVCnjrLUDWZEdXV8Ng",
  "key13": "2h23i7bNDLTBbLXxKqkDpo8SdMXagCiBeCgAak3kmu2S3r7uTyVnYGgF6mrLRGgaCiv25kh2SMfND8qNL4SAVcCS",
  "key14": "3iEcNW8L7hzT37dhoN4ZrLk3z22xzJhbNCxocWCEUYNe7k1vPKaDsTFrZsyD3k3MsBUP9o3Nu1AZ5tc7o2fZMpNf",
  "key15": "59NnyAgiSKogboXKQ64ikFRHxQ9t12ywUbJkxXsNcBJqgMbPqsGScLxW3Sufjv9uWVpBQSNYPdLo84qGPqbdKgEj",
  "key16": "2JsZb78aZvzYFbgfVjESEZ8ucZpbNegZ5eY6gf6nsvGRzzTB3m6oT3wuMbzqmARzZ9ZJmAo2yurDq4dgkXCuVhfB",
  "key17": "564RQDtjGbNFuBQYUEpAJuas7raerPqDTnijAofWGNW6eYsAR5WQj8bjTuXnMuM4RXB6dB8foPGfAR3Riqvzc1UK",
  "key18": "48R5RfNEyxzFRPsXdu3jgNpetEJoFYtMERBwmx2fVNo5ZScoE4q2JDnx7kM1BaPdYkmmqXfSFkE2nAucQ299HVGx",
  "key19": "eHxCpKaVRHq6CnHm8MRGEYW6oxFxkpZZGSVDJmUWUuimnERAnfML38nVU8U477Lsy9SskgabGwoddiKH5N7ErW3",
  "key20": "5o8RXeC7CWnAcPPXPXuCgwdJWgMrfDyqNXxgWpLVXomQ5UeAeBC92orKuNao8RKPZCdAPttT4ATWmHJj83PseBGz",
  "key21": "4wyYbz6pgg5h6AjPRXwvZTPormgZ1hWZmmShd9c8BQmopVtR8jjBAbEBiTTYQuQguMmf4Pgph7ENgSgYGCqnmPm8",
  "key22": "2GinmWhTfZpBrMqeiV4rXMaiH9ECxxaoHFrrzYPKwYhMsqpU4EPrksQzDtFE8vnqaGswY4G1UkskkQw7JyK1HUnM",
  "key23": "4rYmK7sB5SU1B8Ak3RiPi8fXgXveq538D9LLV4Yi6adCAm827x6eVPTGxbAXdYWiCAvSD1KJ1JZq7BFjXoriLzvp",
  "key24": "2gpWWymGTaSdrVK9z1JYE5fQmL5TvNqNdxgVEVdPGGLShADWiemP1XD5r7sJp9pyoWU237bL72TR7VVJPjGEWqWt",
  "key25": "wVYmmasHi66ccNiERHwABfqvc6dj98WdpcddfazbxkGesQTg1LDGwxuCRQahobkCWEBDYpJy45Agz9PHWyCKXDf",
  "key26": "8GQF7YiY5o912jjgiwfQB6vUiK9m9K8fFcsqrePi82jjfhE1zWB9fuJmZ64sU7nYS7MZ3rBhGzFwrdxkmUPEMue",
  "key27": "5t27bVCWY9vAzqFkMZoke1fYejSk9zTENwLFNbvm56DHB4BVG5W5Qyrt5eaaSV4NrN93n1MdeMkKhNxYix2TMNqB",
  "key28": "3iX1VNaKyvrKykcNKQnjmKoTFtjQD9Sr9MSWtES6G4siYWkAYqiVgsHShdwv3GwvZqnZ4woF3i1FVgA22x5LxZgr",
  "key29": "5GWLDwbTZVgpJLcRqrPa1kCjbWF6PNhWywd7N29hR8focHBHzrNKjnD4nw5iXbqNdfZ15XL3N7WU9tFWjFN9mGrZ",
  "key30": "5obtravtjiR5tAV7nNw3VeqxhGVtjfYCApXBUkhMPzD7dzxVCFuogsi4VVbEEJTBH9D7U73MCFrjw8HCNu8mfzW6"
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
