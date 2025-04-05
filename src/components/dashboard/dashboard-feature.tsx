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
    "4XmwACgF3C7EuD8Xj8AsfqYm1qweB4PJVLaH6hj5fxCnYxvtQvBDVUWq9FHf1Af5iwfyv8m6ZdGBjMXMa4qddH9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KTeuHtP3Ty9izuTC985UMjPc5FB7vcj8tQPGyPajiBZczLFvoDVAX5n4VNw8pzktneMzDyZxqfpXZGDqVrP5QdN",
  "key1": "3Nbt6A6dbdHP6uqLMi6aMN9iM3H5hc7m2qFuaD7wC6enN4P2CiThFDL1MaDWRr1txRZpmCDX9668XTzqGYLkbkgm",
  "key2": "4UXBLq1EPqBqowA3YAyWy9BQ3wqyiPXhnaN12t74bQ33huEbuBHREHVpjmqEivLLCHPQw3qgqowSyZsQK7XG5UaN",
  "key3": "42a9pPipa2PEEaZepSHqHAvDSBsF3GKWczEd7h9zk33M6WfASjmokkBfWGi4XdZyKFLtKWUg3EFhqniQgZYytNdU",
  "key4": "5e27EZm6128uiNKb3AnjE2kKD7fAF6HqajsFfXRVXvYqj9NC3upeUCAURQzsLDijnqtrSGsaqjNZPihRFhdrYQwZ",
  "key5": "2K2RQYip2ipDXiENCEkSE75NdFEPFCc5nvuyYArGNxqSJ7qNaerHEqTmGwPZNTwQBavMCPgR3PhxDRGQqVnedsQ7",
  "key6": "2q51g66W5yQKWzAaVXVkXyX8EAqJvMY2TsDuHKMquP3wAUcfUaqpxFm6zJ3d1ekp3DAVt8y2Mua4cKUh7GP9rvmG",
  "key7": "2W7G4Vc2qpNiFLutQTaJk9XJAe9oZLDTmuufttZdcynebCTdAqCtXuaJYr7xrHjuVx9WAaGjUN5AfbDRB1G1euDh",
  "key8": "3KScc2kGnCTAJ9hckyJYjfo6eoUaBhaUy2jNkZNP7JeDPNGDcad1mtbxCdugAHXogY9xh3w28yFZY4vhqmvMqpVK",
  "key9": "q3P5mWeAeMd7a6BbhbaYkFaenhMjf8hGgm7zq6ip6pQj5TXMekGpHkLp53yxx6TPuA7WndoxVsETiDw3c5SyuRe",
  "key10": "3KY8QwjiuNq1BFCLkPsE5SPAi4wXTSCCW4kxo2oPcmT1yEJvSqpnwG1iMLfZmjsJJ28MgYQSTsnDVmH2nmq4vWJy",
  "key11": "yZ9qopV9i8w6GU3RKJYtjahvbvQQGGJVxz7uhU6DjAMFoYvj4eWHM18wAvjRzAuudDPzMGMgJrHZTgZKNh9vfuS",
  "key12": "K3fRQunmYYqbMxDAeooShxpNYQDQfcXtZJ7VZje8cbGPg5Mb1rgX9f16eALnxVUpmFuewuWRiVPe2hFRkGb36GR",
  "key13": "5j2WB9b4m9KELg7i1iN4h7SBHdQ7PRUDS9ZuVmnZvhhEqEvwP1YuUx4HWZnMKqGfqNe8h8eC7PioL38C5argXszv",
  "key14": "4akbDxa1MG1hrdZt8TLNipWoEzVDnQNVZMjS8XXyoQoes1L44gRLYeugKwasYFkwF3f93Aq9Sn7b4z3gRg1MQ9K1",
  "key15": "nvhRH5Txo51ByGbr9cZFSBwRYxJHytQsWifgqJ2h2FNDa6vuR14QbGErXdVYgkeJHE3DXLt2ZtAvL67xYKsdi8W",
  "key16": "2EErkXb8gm83EDo8VScCEKQiQa4ZK8UcSviwPHzmNdknfuXvgVR1hvYuF8Nf6kfudTWt9h66AsMe7S2ZXzvw5oMz",
  "key17": "2J7HEdht2ASTNtahYLsojxMLXa5S9h53s9ZNRdtszLAESKTkDD3AKm8VjnHfhyqJE7PQYTrBvnADJC3Kw4piiszX",
  "key18": "oY8oUEqKkr7YpK8YWS4G59ArTqPRQjL9PLm3y4X2mZJbpM8dX5GTaay31xLX6kFuFSRmyj4393ii3JHrPx6d1vx",
  "key19": "5xWxVvc4JmUtZr1n9zWkPnuQSKcUJNBtLW6dhqTBUB7nxEarQ44Kn7KSboP873TenjYd3fFeeATxrQKSPsUPv76W",
  "key20": "xBULd4fkGNKU4JiYAgnfR4CHXJoskfSMFWwW9BdpcSACdir5jJiaXiAYD8wMPDZ8HrtGwnDv8MLCYC2CHdCWkG8",
  "key21": "4Y2zAFXuvbWmW8GT5HUDcyCxd5fAnbpa3BygqK7B292C5Xx2Byjw5HR7bir3DHsRSjkdUzHbXbbFQwwoTPJikZaW",
  "key22": "2me1o7WiUwRjgWhMKu2wRNgoi4m8VnWURXkUtW5BtG3gpCVdWYZG4SKwBv5bGZ8ZujVHmKmHudu6ZBJvPc7rLkmo",
  "key23": "3oS3U2FemDQ9bMBK34ttzs9X2NBaz7oTx4ZZfK7q3x8hySj1ALdDz76qMUqQMoMUJVCqnKkuqVZ5qCKYav1papZ7",
  "key24": "4rQUBaAf51Cv4iHMw3vBeeceFy2WkbZA1R3btV5m7iPtV5dDLNruCjBZcRXeFSpMqnZRMbvJd9Fdvr3W8FeBH73J",
  "key25": "F276hzUAgGCzVqnZBwzWCErXon48ZHybsnRzPz75PZsAZG5qp4JHJAvQX9KkQGr3R7NHSafq93sPSkdJfNJ4pdE",
  "key26": "3AA4inheyeb5SRixkcFTayMTMWbG2RGtRKkmTrdM7e3dn9HtyjVEUCisK8Mtng7NZzgF5Qct67tTdQbodTBx7HVU",
  "key27": "b89PyTy8V3Cr97T24ciNFUFHApur6GvSca1Ty37HMe2rzzH68DjFfqf2k1YxeAr8gbymfRfzjX7ugSFanjRpX8r",
  "key28": "4CYJLLtwdo46oJiqN1P54YBtRwN1TDvZywomxE4B1MsKioMnB9YHhhiY8AZMJjAtCQeUiTfmLEeYGUqkYzdYTruM",
  "key29": "38dTKVWpy4i1AXbmVEfdiJ8hLrjYfhTJxSftEXFW5PPdBHi44sKxbWfMM4en5m7MyxTCL6h5hCKQSDWTEF8JMXD8",
  "key30": "52dMTFv5Vb8cEc1D9bvt9BmyxWyHLsYgaYym9NTeG8DQht5wi7g4LwhQ3pWeghqzVgm14iKMJpZ8M5yX1Eg3uULH",
  "key31": "4W3vU19kbi986T2zBm5Jq6yGU1zb3HFTc6wackMEKABQEhztgPjqvyXTq1xqNAs1Luaxs9Dza96pzB57frqbMUQU",
  "key32": "5NtWUF5Jae4GRvtEUBQAxUWq7qdgPeHWCt6mWspgAa4JZgEZrAtNSMwLP7TAMFJKoyCrcdt2dR2nD5HaWsBq9K6j",
  "key33": "5mG4jj37YcGxvjXAwRiZrnGi7vhdeKHuZp69tDq1483MDEaKwA6H3YvTFsJ4AixhZWext6Q7DNo4sAKZTYAiAvC7",
  "key34": "5snrBhzurJkb3zAAUBhNk6qeqddHixw8Q6km3Rk5DxFxcQA4cj7f3jftK7KEPi2EK64WLLcNYNtnXEuM6s2H3LAB",
  "key35": "5G9PrLeZon9evzBgAfDshuUquHx9xD8hkoZdhMWLN13VzHKkET58reN99RdQUZKNW1v9H3aAmsp18tRpr5mGFxBM",
  "key36": "uwHtHXikwGLtoeUSTjFdoziVzzFTyyiSuWjpw6suQqpMVV7pS6SBWJxWahfa3bEZjTK7QdBToeuqxKEjaLLph4a",
  "key37": "2ozvgLY91RegZMavqogQKWr4Kca6jkGwKNCBBsJzEu6TLceLZRsZXhLgybAG47kh1ADGeadw2mf3cwQy5EFHnSjF",
  "key38": "5dioG4ZV5ZTuYJ4hCiioo9rzMqibNTNgvnVxPcSyfJLZxzxnrzATHT79iUcnbPjig6VKvFHHxejnukUEhNJWVnkS",
  "key39": "2ByLXkZNRWUy7WfVYhDqWWNEmVFrwzbZR2vqBmAivHU3YMo3hftoThkFiuuuqpzsHQmbSWfs5pSEujom9YJ2XeFa",
  "key40": "3RAw5U5nDswjdvS9JavRZZ2V1BS22PCUuY2YofoUab1wWUaMMzrp5LArwk9M9DcYxow6xRWu79YKGFQgcL5eq3x1",
  "key41": "2QNsQpKvwUKRzmBLsNw9p2rhHypp1bLVkS8QVv4qMCwd67pxvh8ScxZUphk8xaHcsbxLVAA8DxfdmVRfFLgheoXG",
  "key42": "5YK8EkP1XQCJvDerqRyovAxx73TnjMmrSgfQ19osXJUE17GCQTRPsPaNXHEvMTmw3Y91gireKGyCAYoCHWmn7V6X"
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
