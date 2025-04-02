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
    "4EYZJeVXACAYWxLKUJPwm9VHUgw1nUBKC8nEKu3VXEUXtLDBu7UMmu7Nj3vj83rNV3FptZdhHfZuYBMHRFpxCHF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nFBvVL4yLiDGwjH968fyTVW71GN92dDvskgPhatMXMzGiGA39bPEDrRv92UoWMvN6a1JEYCnDmjAaiMwxcGE6KQ",
  "key1": "2uFr5TNuuDkAxmdxzuB8y53tqRHKA2XBF4cvrDsvaTueQKJH5B5DXpqcSygpLwb7zn1rFTQcCyy66SrJ5U1zYKKs",
  "key2": "5Gd9h9svvQupX87QrdsoVxg9CHq1Va1ektTKm1Nkf6JoaaSH351Vx6Rt7bUAv7nhBWXgCDcegxq2GSFGqWkE16Jc",
  "key3": "2cey329GUWyLv4JD8p5bY1Mbz5C7GZAKPe2Sawd2qQLbnrrNRMRDxjFBg1RQ4U4dRkJ5KKEQ7pjsGqv1vnVhoBRc",
  "key4": "3xYY9ZgSuCN4CasEyfoQZho7GqLCtzSXGVneQQ8ZrVUQMaRiAKtfLtig1X6iHni49uCFRvQMBsNG2vMz8MqmHcWe",
  "key5": "BRRsVxg4NWVWDbXaSwyjQUDwH7mntZBGdHMeaTNzdYSptiAAmWXmMXGeRWcRZniU2g6fQcuEafifxnkYqXu4faR",
  "key6": "2HdYckSrJn56TypK33og96HNyAqx9gwdyC4jJ1xiuLZh8AhwXBqB279benmy1TC2i6fp3A6CqwfNbkUrK1SKxNR2",
  "key7": "3G2Wc1Qh5FTjjLM3m39iy9Y6X1EpsF1YAnjQaVG74cRRiCQKvJciTXHaLbKM5uj6ZUdG3QxJ816z7TxqXzUzSqut",
  "key8": "349HQujQ84XB59nYoWMqDiWWARjm23H8Zn9tpQwVmsJwGRRBrpSi8Keq5Aj5HPEXMeTPgwGMXvdyF11UQad9dW8A",
  "key9": "5eTxdEaKWqeRt24yMQhE3hbPBVLzGCMxCJANt8DLEx2RQvyiXs5rmJL9qvLFBWWcQaQQZesM2fLQmBgz38ZazKWR",
  "key10": "5vcBugi28NnpMECiUdPpi2CfgaThLaifGpfPm7SGrkxB8oMjVpoC5Wp7HQ33BFw82J3zdXAJcKeXfcijewwvDP9Z",
  "key11": "2jG9aQae4RgeNLU5DMLc4QmUx8p9x8dKBaDeXDPW1wPmbJWwfLzLUoFrVngHNk2z3xztK3QNNxoPCnigRH19tHtg",
  "key12": "4DRCJjjPBVgjtLjKFAtUET11qbFAVf1Ys1pkTaGXsDCeTUfWfPjD7JtWfyQe9iHdZ7ZEsXVT4ZudpgSh2aCTzEWR",
  "key13": "5gTH1VoQ4U4bL4ZYXyzkixzn8vSG6FJ4ntxU8yvAgGQoDF8LmvUTeVnx6mvq2rcLF29c2KVfsTUyTdYbTEK91hFb",
  "key14": "XX67ckf3Q7UJFTxQpqEc12abM2sZTrV3qmDqr19e7MjLAN3vTowfnMdkLGv8bmpgcT5ButkeKx1RHenz82vTUpT",
  "key15": "5rLZbqEdMALGZPY3BwJwL8mc4ta7jN5wy4jrc8NpJkV8mdNxUzHcWUvhmPXegrcJSVE6GYsV9HH2n4XXr9onh91i",
  "key16": "2zn3CbHYbDDCS4VpMinMmUsDBLeQMvHznzqZ2J18qHmhSy5WqfE9bBk9UAhp2RMThWxCXu75atZaaRU9MwXio8gB",
  "key17": "5N1WacNar1v2xrbvzT8fVD7z2pQ5fsHD1zzyurqtCZPSP1Q4HyvdENVBfJb2L8czV34RMGXRcnrFtBpvYubVNwvm",
  "key18": "2NTXCu38nAySUXic1CYwpDw4ncWWoznLRGtHsb1pM5HChvCWW6GeXAwwKBX9SXX28mHWgzXMuR1reMZabFWwAH4g",
  "key19": "3sSCmwstJm4aoKYMZW9J1BJyxgWv5pPbtXaJ5thnbgjvQVWokwjYAZy1jDr5ni99k1KFvNt2G2VS55eV5XBrbwqB",
  "key20": "57H44zbo4bwqNPzQHG6VWKBfUWt8t5n5WSQeaeVPqcVBujMJKqyJTJnSjrLs3Vyg7ku52WUpa3oerEVG8vBe6ozJ",
  "key21": "51X3LqYrpAKGrMETi8rSpMkzw4eMwnhH7XC1uUcVQ9Kb3ZPTDBNqtJet3rxyYkDW2EbwodohzhBnRN9XeM97rY4q",
  "key22": "3Deq2Vxz49bV7z2P6gEFZxkx4hU8kStakFpy3yrmW13K3wkGxrvCiDZU2z1D22p2sfNPText6XijT5aLvuTUiqpq",
  "key23": "2KuTE2ihXrq3Rud1JTX5cCwakAXD1nGd7mJsgDuNH4mo1rtkQUBVrrZzVrAdKT6gQkLqSixs8XGkt1CYmT2Y6GZJ",
  "key24": "51H74vi2bPSY393WiYk62XBxfUvxeyMJ6c6vHRiEY1pbzHopmgdP9STZPFyepqEdRn7VHjQsTFPwLvKTbgQu2hDp",
  "key25": "961iPsNxtkc3SZfPxBoMwBmWJZLoPkyz4CSkVDmBXjHid3E1pNpfbTbNwNpJgVJDUxjEpaEUtSfMSafA9gDtrtE",
  "key26": "5hoUz9diiLFxgFLpq5KRSTpSgZBdvCw2CQbB8s1zjJWYdzLAPQujk1PWtyMZ5PoJ5r7rxCvTtuMSLQSn1q5tT8uV",
  "key27": "3nk1DQxvGFNdjfdsMA9x4yS3nBeuAuzfNJnhkD8QUYST8LGvqYuJo12HnukEVHQ34Dm2apmBeXnhRH79nuwheUbw",
  "key28": "5yoQvKvXMBxCSWZVAbjT6bd9axNsERHf2bTVrUynqNDETCKEFu8Twv8q55JuxSuD1FQk94H41mNZ9ivNwu4ingHH",
  "key29": "2n7TkEFubBFJ5UCax9aD6JGhv8Khv1PXL56ynAKY13cVBetjEXzNK6ZTqyYRAbuBuWyUST8rEMCGJZypNE3H1H7V",
  "key30": "DQgfHxU5RkxZmH6cTUQSsoQ2DNDGmQwHuhd2K21khEWAxvxqnie4fiFLY6sa15VPjWDkxgnEihijcDNfzMbDAro",
  "key31": "4sSoDMZR92GbwRgYiW5Qdwa8U9cTVZdWqwoBbRvzi6g3r1zAbRjxzNzd6KcCVBiPTqQp7E1pAYWyZpKSuTUqrScV",
  "key32": "3o1c24w1pU1Hr5V5KhNbUQSUokavZHzkBdvjamt83uCchzzYBKvf3RN4SgY7653xxpZFx7jUjJkAtAcmZqPaahdF",
  "key33": "2pNH627StNueyfpoRxdTuhCUUNuzbRYpomA6ERjHeMJVAxVjnMDgRPYjxoZoXFY1zTcXnpAunxFSLUFKWxTY9L4h"
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
