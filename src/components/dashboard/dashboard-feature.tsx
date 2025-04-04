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
    "5q5PrS6pqCS1jXrPZm6dGWfsnSh4xbTpcCoSmiitPFK7y8Cmax4wxb3nP789EdMxkqyhtP8B1Bd1CW2YfYHHKcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q7V34fqWqHnfVQnkx1hBAeC8keQLWY14XYmoFy2aMTpgE2997M85LGjhnEKBuJXh8tFPLw1Rh3vaE7P5dfoYtuA",
  "key1": "4xYSDi9qfo25xLguMSjThBF64PdzmxpGHHbe8Ei6HMu4ve9cMLLBFkm3KQJEmsgdfHSjEAgWSoYjAMcZrqGipQ7c",
  "key2": "2q88Kn8yFFq21tQrHsamfqWGguZ7JLEDLrNqxsA6n7ch4pjWDhErDyQwvFv38jjihZATi43tfoLB9nFjPhfxhZfb",
  "key3": "eNaK7H3o1bKeDBbSbeZKQqV7xP97jNo4vzGZoybStLLGqqCnq8ttXhbJGc3TgSSceAFgm6FAcZEAq9t7nd2LEzZ",
  "key4": "5QBnyFpJWxsg6aKqT5NfodhANnhULdi6kpYPrKDTeYyei8nv7mJnoLgTGZgCTu6neVJeuKr1jATS8gD7xq4yKwkL",
  "key5": "2NRzQXxwKZnB38CyNk9JedExZoRbfRQ6FT2MT5UGBNvSHKx66zuKpvnva2hy6m2TyA7VaQtmHH11YhXeqsRPpCey",
  "key6": "2ZiXL3aibTbnQoGdsSJe6NoarnbXTquydFNoLYtJ3rhcTnsJZtnph7JGPo5t9MdPgXYhMmeoW6d9Jycim3j4nQf7",
  "key7": "44zgxC28wmLe7M5rz5rdnd5oE6vBmkzkByZ6xpj8UZBA7Kf5GiWrvET2v6oZEPkKr9QmFpDJnfWZ8tXuwD6FUygE",
  "key8": "3STWUq3CXyQDigXWAdgcYrKEKFzYs9dPv27k2tSNhQextNdninMvmLA6Tnz4BZK4KjfcMf3NKjcY22F8CFP8sxUQ",
  "key9": "52zBovZsw39hWGXFXqcingoV2WUXAnpX5rbtXxVYSAPXDS4cPBsYoT2Jj1fgNN2i4zxAL6arpUrVUaZhQFbfKihd",
  "key10": "3rfxUZwdU9txX6wk1MFLzi6dLMfGNx4LXCzkFjtCsTrPgAaJJZQHWRk15qg4Yd8MVo2RWs67mZP4zYW6DHQqMNWo",
  "key11": "66gnTDYX2ojGjv4t8qW8mk1cbzVXxAExji6mZm5ehKjM1CwP22V8TsUPqv1vU1HTS8NWj8o7SZShe9R9H1pRi56E",
  "key12": "qw7gcLiPZzzAwDp3TgfcMRkVGrMgcLyTrPxos5K1zm3D2A4XwuSv8CXNvvRJg8Wbbzchb3Mxbe2ebGXRLLZi8YK",
  "key13": "4Vxnyztf4hczzsCGjcWSuN8J6pggRz1t55UdYjmFW7waCygvYe1HnbNhzJYRaFBxv9Ly3icFjrGVMFBFFuoEdANS",
  "key14": "5EBqgYDhvAQyANLzaVokc69BZJNUTv5xBKAnrKKAgwcJVWVcBu3d1JAbDrX2gyAH1UMpEQM6oQGCqrLU6abAa22h",
  "key15": "5G423FVYCFnntBNzcTymP8Tu5SKaSLNfxc5smNLYvW2wp7Sung1Yd2XLNrGtRgEW9YVXDFpfHpf62BtX8UyCbd6o",
  "key16": "2VnnLtm9Jt7Mnq2zAsL5kDX2jryvy3RQPGtM3BGZkjhPzjgMbKRHXe681EgPzhLF6rByipdieSUR8pCbL516tyPa",
  "key17": "wsUDE9uqNvoyfPL8B2bmsmoUBqNTeh75fiUodq72EYKCHnQQhT6xA3hWChojLDENXZqBnaj9PurGxd8r8SZbV9p",
  "key18": "4se4XNciMVXF3LmMuez47AhwwFPstEnMLbefd5yQCiJB9QKiCyagaWV5zyA9BP1TSKiYYjUWTfMLCxweanTetwCK",
  "key19": "46n3ECTwpq53vSTmc7QGpKa1C8b6vqcVRVpApPaw9ghX8qyS5sypzwgfUFq9k4fAojfGC7F2o6aifUE4uAFLETCX",
  "key20": "64oT6rVmRwcdMMdA7wYb72LD7KYeMyPfPF4wXXMQCLgQ12Ax2PqnZGhHBA1eFCXT3g1CFedQagzcJUWWVj57WPzc",
  "key21": "5d5EThFhAqaz9RJtvb87NmdbKwZTaB37z38tPxw3DH3ms5e1rxx1AFfGrcUwopmCi5Urm9gHKzVKyyawnSxYsvrP",
  "key22": "3w95E3UKPPJ52bW2YGtrgC1L7QRcByHe1z4E3fnjhKBdtSwHvoX2jhDnqB1vvCGdiHiUCTNUcx4TKzd5xt3Y69WK",
  "key23": "4RJZ3yhXrw2gCRVz3SXhGDuonV8KN2XUD8ri7cm4zVnjSY3qiPRGjuceNjJgM3bgkDavzoNky99Y4H8hSkj8f64k",
  "key24": "pPgE7TmKAr4UQF9gosweLLYUfZxWsBWGivYP9niG7rc4fX8AhfoTqUBKWhVLjkJada6PbBxDqAvT1RxrkoxRoQn",
  "key25": "2LPZjAQ6foLACc4WJmW5oGuaLbNfX5KaP5SSXXMUTnLgwz7QBPHz9YVJoF5k5reLQZZNqQZwfKGyYAtfFhGJJzYv",
  "key26": "ifb8UHE2gw9q8xreJw5xnSygv5ubpxPKiiTANzfLxTwaokjsacPFERvrWAJv3wdwMhfyp6AFtbXRAvzbL6Hf34y",
  "key27": "3QNVNLH5zYUVMa8erXEnLbb2BcmgDAwi82F7gQPdFvJgjgdobfRDEAYCqaTk7QmvLyboJZER9RHGF3YoZePv9Uo4",
  "key28": "4YFFXe4WmmAvkd91RWwrsohiX6sJeMozMMzbukzvvArZALCyzvjRDbPKmvMBMc77AUQrDSxuDFMo2oPkAK9rZ6gu",
  "key29": "5eNwENmmdTCaxQkFFiepZeByYxbtvhGUmokhrQ4NdGetpYGf4v1bxmMe8byctTxiHuSpdXaX3cV5xuz2i4grM3dC",
  "key30": "3T1GExeb9uRRiA9LtFtMbWQPefCqvwooWSbjnAiV2G9YrVbpCtAcFn1tRa4doej5XuSmwgtAvRLZGb2wDGR1PVTT",
  "key31": "PBRYP1gPhVWtgenuQQe9nHf7gH9yjzvLc5BUCuo7nDt9HtmGKTbifepET8TLvfpoNzL8AdouVDZ5po35FK8RSKd",
  "key32": "5cL9prEBXWjRvEicDkGwhis2ZKjerfm4MsRtvCYDBEzjB5MVoqqiPqarF7rFDguj1nwpF4hQ1UodNScvj26tueH5"
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
