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
    "4wwuEySnQpoEeeXxD2sXyWZYBVdBd5jx2Hjb2rgdSYsn7CPCu6mbWaCmNgH5PysVUzY7cvduEDqaAxPhfiUddzG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GB7t774fvU9LrUEWnzPocCCWQMckrr6qxwe2Ky6g7WXWnJHWLScbZmmQCF2QkLfJy3vsGfGT5uv7wrumvWKnMWc",
  "key1": "2Tm9TgT6f9vH53fiLnW6kXeDaYBtTBMWGQyDFRMsaVM7XUGfavmFhZePdPWjEo83CNYRXC1zRpkPAbGatTtx648f",
  "key2": "39U9Wzfo5ZxUwNDRTjh1jB6vom4tMCHs69CHa3nv5w4mgPhQVw5mqMFi4TVRxFYnep7aJWZKTeeC9Qti1Vi8r2wR",
  "key3": "52NDix6uMvbs8hC7PM7hwAwemFpkHM2uNmG3G6qN8E4WXyaHqRnLUMfRWCenjiPJt7LStTCVhcaQeyNipF5mB2UJ",
  "key4": "2T6xPHNJxsoxnqCUANHC1VQhr7P3673WHXACkhPQtH4FiY8BnLH9ixkbjbz213thDCqGFmqsVopmaNNuRAYGTeqm",
  "key5": "2aapHSDt6uJcpxfhXEf83gupPJw6pGc1Hks6xUMQCY3PAEnfF3VsLGbNsvagDVqDdy8YJeZA49qT91Re4LfVAcnp",
  "key6": "4qrtNgTtQvFz3HxPRNfHW9KLVRrH5vdGW9vA9ETyfmpap1TmHq8c2dj1fBdcTnbhg3VnQ7j1c1bj2EsCNCf42EA1",
  "key7": "rZpjZ6SNBKyWCs78bzy8k22CeBn7wFofuXu9HMmx25SVVhWNNBXGYhb64EmDaSmmPFGbfutSkrtWhU6NGCg84R6",
  "key8": "ykbxumSZu8TiXzENCavgiQAdQzjR9ArhYgQiM4paJsHTy98RiPDRL95mtxf3RyegDMoM3dgG4Lu8ECp9YvnomgG",
  "key9": "53nPKGMqHNtH2kCw7yiUKjsfLuHGWJ6YFq649hZZG1fkmEHL2MdJYAmQ6vjCFmrwEpc23K5FtwgyanEzCiWSpZMk",
  "key10": "4PWyCVr8r44dNFZ2LN6RJG4ktsJPsdcMJS1bEPpK3wEz1QXpXsZNW4r8ozVrfYX3YNj7kriQBB6UJzgd5s6DWNJU",
  "key11": "Zoij4gZNxwAMfJmJcokpuWeUm5jP1Y4kkdeE1Q4Nd6nRMCtbkefDSh4SiGtv1eU9Zg5nFEpX1D6sys5WNWRBPUq",
  "key12": "2vnoPcHE2fTj2mMfqcZvWsKwzDARuYnGyty21LmQL43FbfwAZManRr2qWb9cgq5YF6kH3d5SeN1NpSpytCUamaph",
  "key13": "2p71rhvf2Sp2Zq1fTPEhNQpMHuGEbVo8a9ikn4csF2oRFsdb2TcAbLAWGVCKF5h9x2hAi8HnoU4Uotwe7MKVb6Bj",
  "key14": "vrjH9wC7qBXo847tYzDqHTEHS218xgV8sra5YQ3ET2QkYFDVojT95QX1wgEgCiYX8sNJPFDJZYCMmKHcPvfAzBT",
  "key15": "47hKvoCofEC4f29iXwXwiMb61Xz8NU5kM1jBxWzFJAJhRqS9siVtxLCP6rqPFpXoMkZeHnUyMBJA1ZvM46kqsUh6",
  "key16": "3ECpYST4xFA47DouXxFYNyUEg6Zv6D2cf5mqPBWfEnB1XTirfGcAdrpPi5u75JpWW4U9zZuuS8DrmZcshzpCakC4",
  "key17": "pkCAz1cYTJn2zjEfuVmLHn4DN3nPjEQWwnsnz5iymAA1nn1Y7iRRUQBvbHTQVXzw2Z7qj6m14LAjGF6WxAn1QcE",
  "key18": "4zREX2wahD4BquYe7HNoVUKPm7T67ichH4Q1zUcLhF3TVEH5LfcjR429Pn8DFLvLJvNDfFRJ1P4gKr7jbjK2rAQR",
  "key19": "5rRVa8NtmxBg42zHAs2W2krNkmFxTXGAUeqapv5XcakLw48amkTxH4Jrw32LoVJNuQTMZ9zsa2nDYLFUsr5kqjbB",
  "key20": "4kDcKE5MdUCP9rwZC78Z2KJxCWbTFTsPk8tv4yVMWgFYo8yy4uW3zfK2RPhibVpNk24q5kxiUKXLmfoTZVUAB963",
  "key21": "m9jWZaSeMNnr3vtYamTiaSBuuaVTErtWBMCQW7NqvQxHEcDERLUk1CnUuHFuQFKa3U94P4AXXX8oYvNjnXHZ7NY",
  "key22": "4okBXoy5fcLWqiTxkeSrwRKmz46gKhcZtDn119XHv4rGFCLHs2MH9Pb4ccjpv355ijMKUKfHiR2spWdUKPe4Z9cA",
  "key23": "4kACYc5dTiYRsMWMFW8LBw7VH8JtSMDv6G62nZ1WcS83ZUziYJdDKuQ1UkuS7TX5Ti21sekMatd5Cr75NxLusf1Z",
  "key24": "4ZkH5dRphVw57CDjcFqz52GXX5K2t7SzmdWB42g4KeWiDPXE8NfDPJmjUqPzXPbnJAmT8x7N6Fw6nZ4R57WFAzL7",
  "key25": "3X1kmSHoziY1NMT18kd7UPu377YCHcNizSGgUhu1BmMmRhX28VcKKwEz1NtipKBUfpE665PsNxpMxLvmy3Zei4QZ",
  "key26": "5Eng62TbCUnV6ZhpVwsBQwT2dNQ3TMLiKQWSzAcrjVJpRN8LxUNZx7Wm8TZZh8gH16ZERk28FibkXmeVd3cAeAf5",
  "key27": "5Bf6JnySQecDiMJ8A3NdLxmZw8DdKSVqjjrGpaBPDsNrbhkM3Pjr41So4ccBUnBAxww33ooGXDFL9L6G8eAzdaF6",
  "key28": "5MLwUJ1w5FQ2nys4uWqHk5iUcWRZK67wKAwbj17RJ8NAn4derLQBbE3SUfmpZKmMgVSbt8zL169sRc8WuDz5EUUV",
  "key29": "4FE8b3VEZwc59B7xxmdrgCor7RQAxG6L3yAzuDAURauHvWjkgTjvFC7Qoh1GHXTDEpFaHiZgx1BTaSdxcb52p14A",
  "key30": "26BQMzgkf3w5XdVyNgEu9Nw7CkefXvFuypQndNu4inZDwwgeHiqaA4RiJkMZ5nnDak7ee8C52WuM7PQrgLjcEMem",
  "key31": "3aXjvNs6NnbWWhk4QEAKn7Anwh9p4cdqvFhibmLqL7S3RnuZBdNVqCVuUjrDcSd99mB3Zzr2ozGfkKsmHDSQ2G3"
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
