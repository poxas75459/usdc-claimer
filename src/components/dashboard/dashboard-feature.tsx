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
    "5Bv7KG8ZBa6KXEs898L5FexrXKMaiAAdAy7PUtGg5uVQri2Dj2yPmqn1cpw1UYssqHrA78WjHHpmhn2W7tV3756h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eNr9a6Y6TVKKLPCrzsGdUQphjw2WfepjJHwq2MEqPMmq41QZYzU8HBASjfFioLR3S5J1VmX4RkECJBcRNZgqUMt",
  "key1": "5DA1sWD8LDhmqMx31im87iwKYpdYqzjzUqhZktKApkKU464K4u5LMbDv7y64Zxg3drmxqcWQpKnY2AK7zp556XRA",
  "key2": "21iyJdHidQRfYpRo1eS96SLzpZFgJVeD9ZbSB3n8vJkbgKkFDdVEe3BSg65YeXcMBE39a9VwUHNoZczakSnUpQp1",
  "key3": "3GtxqcZLn21jqCZzapMbqYmotDMSwTFg8xkNCAFXHZcKvnVLC5Qb1Eu3DrUsLbLKrtgaztzyhyMYU6pjVXMniLx8",
  "key4": "oYEkqvPTKKnMWCahUbUUwfRSddnq2Vh7RiN8tPHmTs1QUp51yz3scEVvWwEpzPA3fjAb2uzHzD1Ca9oyFTbms98",
  "key5": "4jwqMySmwhxxXPY4wQD1B64B1fnVST6A1rThwmpRWotNHdJ1F6bAEFqBCCkTNyfeGXMmoJqdwzmAHw3nubLQf5U9",
  "key6": "45VYB9crnGRvnZj229YRpmxtz31VoUKVhTWTHhydbTNcZoCi69Ba4CSwFJjTPsf41FmoPnUm9GY8f6hycrgtodoU",
  "key7": "4nU6NTvPMyiVUnJuvrd2GCEtkUzRVaCgdKNHwGZ8QJBudFg3SS322ZtZGayjsGoUeuMHjSjw3vATLHQoucJyBmNj",
  "key8": "4e4He6mns1BPGrtaVadRL4s7BrXSdR8Ysec5wNbzPbgBhPXq41DWf6gYn5mWWXFU5kYRLMD6PHwJeF4XzTFUK2Vw",
  "key9": "3oyR6rJ18Eex5ZE9hdut5iqEZofE9hiw2sfUc28k9TXNmKHVdzzgWpyj8neia5EYZHoga3PdU82nxe23FBJF6tRd",
  "key10": "2XDNqAtvadh7PiPUuhjVHw6JhB4BnAT2uPYBLSWG7enNcavpQFXms1b4JwynaRw9KDkbGwcvobdH8987Q7aCURoL",
  "key11": "34fCPW6u2DjLY7L7jYxrpWAgRY5B7VxA1oVJKtT3fmLFcmAcqFeuiDS8Xi8bABkLcfNC6UKmtd6RHvUs2VNJycZn",
  "key12": "385V79J1u5qj1Dx1fBAGqGYC57yi1N5uEpS1mRCCAurLBAXVnnndNdfwiznrjGdVLXMrMPsoXBRW5GNv9WaV3QV9",
  "key13": "eBb1AgnsB3Pt9j7XsnUStmANZkqyS5jLJ2WZMX4PUrpYe5vKehuYC6W5KpjzJQmjkABAW2yDjZwpNwLHmrr5dmU",
  "key14": "39bis17VUEg4xycQG25R6T3pt4FynU6jUYogdGJPKSDwN7uhYbVuXNoHwWxVnNBGQhbCumqDhQDuMNi4tY21dAad",
  "key15": "3ecFVSzUd5aTP5KVyRrwe4pRbx1XP95SDWC2ebUrDAmsTAEUrQBbgVvHAXqPCDJpJb5zNHR23yLrggY43W4otNEy",
  "key16": "4y13ooSe8HGS6aUxDjcgaYjWFUCUrpMBimqzxJGCy6NqNVq6r3LGQPPufob6PbnhoKdFzrbqZVGw18KJdfHhSrTY",
  "key17": "4ZZf5raFegBQkTYt3Zr2aZ4c3F4KK5fB4bpuawuMEXBStuApRnsEnMgNmhBNVW1kwktTaRTKju2vSFfipDxo7jqe",
  "key18": "4NqpR3yk8AbtEGvnMBuHHbyHD8jP5oXtdBUf3WpmoBSzBcurf2woQXVd4yYyEbPsKp1oz9FrDVw557vV1ynPQA7H",
  "key19": "4nGW7NhcLQoQG4CmHFxPw5FFgfA24awajdbV5kUijUHSEiwfY4hk8EnAJdsHNonc4cKVtjrUvBmLbBZRGmJsXyVw",
  "key20": "5QruzkvzRxfgxeQj9SPcbCE2PwxL7Le3fBzCFAgkGLxGT4ijw3DULn3TWzgsnbYavQFrhLn3hSPNQFy92pKRoQyb",
  "key21": "2dRB7z1uQA4bsMeCZ2tC9LLaUx3RNQHyHdwbgNW6HHnk5WhQnorsRA1xXZvVU7fbqRU1d9z9mrdte4cBex21jviW",
  "key22": "4UcoiecJAgdKGWAsvJEwd9gMFVCuBnMKJEaAFyPymRDYBVnWCCfdW69sZQWSyCBUYqSqrBPwnaZAs8R5y8YdmnA7",
  "key23": "3q2TD4sPx7Cp19h95aKtKs7deRz4rtVFCfdjGovL7s4cjP2kPn2osgfyQrhxqpBfq981QNf1ngJTAbo1MzwNvChh",
  "key24": "39B5pSBxRgEHJnKUNT7G4QUZnhoCDtP4KUSVYmHXFWV4vCA75rUicMgzf3gFX2VtgsyFNK7ifze46STgLqkeHWQ8",
  "key25": "2pJj4BQD2B2z8iVZrPYK8tAEHddDiRKkB9wnvsz9DgMq8NTF6jFdvGZsEVUqmXBru53seZTyFYezVrnBn2Mtyqv7",
  "key26": "teRZUe4UXCcH3AmwiwC5PqZSasxbT3Q5nEFikYyQEyKLAGvapbCHXAprVKpT57yifPYcfrPGiVh8qycXkjSbP8M",
  "key27": "3PDmBhq5ETBkPY7o4t8YWahJBym33vTPqsHtJnCWJhYvQtxACW2fsJwsJdwQBs4B458qTLWN86LoKWns5cihm6iJ",
  "key28": "5gCX88w2cUpF9M2Hm39Fyex6qBH2iSYDns3yjG2BLgT3k7nQNW9WQgVHva9bMSvAJW6DCqHLpcTqpdQjy1o7DADG",
  "key29": "43LAntki2sYhMFvczzPLapEytXrifa6yfq8yFyAkR8AszeNzxy1jTPAbD3bLyYidzQvMpVWQ6BQsrzK845pb3LQW",
  "key30": "2AED3Po3E9Yn7fYk8QYPudekAwe5vyviV924tkxTcXxHSLK8HNwvWmPrFYAoMTQpXFRPvyVdAcRCcb2ZdMeyjyxF",
  "key31": "4hZEFQKURCckGaLKtS3KDvtbJtYQRfws7Q6MSXvVnWWEZMBEULBdvMieUdXBiGnubte22VTK3TQaMExTNCqtrTzr",
  "key32": "3edcpe85xteU3bF5bLEjGVFTcKaTUjfiB71G4dqTofrR2vM3xzFhV41ySv9QzkqGR6MpRznGYzHVyAAZzACwvq9F",
  "key33": "4Xaoi21pqxxaiaaEvWqjAawvT7Uq7dtAsakBEZN635w9hiuntLAKpVT1KcAy3uFfAjNcpwWHSMyX3K5XP6naVJN7",
  "key34": "2XLgqRYQiGq5PxgyZay2r7GHpFXHtHCVehePWgpBreXsKPYe9Q1y3r69voRNeRSUsieJ8MmWpRnuZ16hJLzircaY",
  "key35": "4YfXsV6WgHguBCzK1Yjsrw8xjHNgsC1Njt127UEfCxhBWWrtBZAaXuKCSViCkQQGHanfvcouhC2mQszjzwL3v4up",
  "key36": "3vBjzqC6VsgdZzRyZ9bivh6YHtgqPtQ9KbntFyWxyv9ByfGjSYKnj7gX1MkFzZxHHeJAvyERzb3r4RMDEP2G9R1d",
  "key37": "35BLEEiQzYjS98GB4hGVHRFnUf3gY7rkSWaqGqGPYohMvK2YCqnJwuvDd8kQZediQxFzvkjckUB6b97uAf5j6gWP",
  "key38": "2C7cRb3e4QUxi9AG7do7jVfVQVDudJ3mX2N96FhiYsBxLDSyHGwSPGBU7dCfcu1zMCB62xBBj13amkLSHfjNpubD",
  "key39": "5xhKfFbpFVd26q8VRTBuK8CfB6kPybtJjsMqN53ZttJWJ4HnNMi7CxwKokS8tDPi3z1qaAR3QmNkLfs3zykeqJib",
  "key40": "3FyVHGd8eFQpR8Au6nxDf3BWL9xWQ8D2f4idxN2ZDCLSezB8LFHGLhTVNKn53de666NMGF2au2Dyg9xCT2Kn7AGH",
  "key41": "3HvKYK8ec5H7zB8sqKTHVjyHYL9u4aKwPpFFq3GPvTbwehk5QXdDsBe2op8KvynM9Nqrm9TZHixMeB3ZmbeNojXi",
  "key42": "3x2Qje8s6ZdgXaC3FYjaoUYoYzA4dZP3gnh1SWppipXRNY38p7sVqq6opgwhaAV75opqqVRE7bCFx12PiHjxZSmx",
  "key43": "2KgtbW4UPKt5fybyNxcbQC1JcmwbDAq9aqmpdLMV8r8nK6BHyKDpnPwBuXCR1PqP282r7YkwQ7Cnw3SW2LYGH611",
  "key44": "5FUzixQMd4RKPBrNHbXc6yWQfWECoAwaSqYcX7XvW3fyUhxxBrhLjC7xv5p5Lmt2pJ45zBibeY3s8FXh7y2VfYK9",
  "key45": "AyuXgfeCwqxZYRrBDmRBgWLDx5GWw4BmnymKG4tyTvFrPQZgf2tioNEf69QQh27JWohMgnefQqRj7YymbJzUqYk",
  "key46": "Dmw4toyfL3gxGxMuLUgRb8zrMG2eApdVpNXuXiyqwXYnkyVGE7NeZXKCbLmgF6ytgm2MJgr9VsK2jz5HPEYWFpw"
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
