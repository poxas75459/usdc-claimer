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
    "vSVuHaPEQVAeDnm7LDJaozhcb6QB3J5eEL1CHuwVFTyZsBAMNJt2vQEnPuhHqukTeHg11y8Yphj9d2e4bsmoGWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9RBxxj6ykJ5PPUfk9xFsd8ogxtYrLgys6GiC3fGiVxH2pmqwMtekGimd3kwCf5NmT9xgnmnt6VL67Cn7uUN9UD",
  "key1": "5HwyznPezXWzKjYQP2gQYdVdKHqfa9BrB95ddao7WjPn4z7hGuBKk82PBZrtq4kXWZK2xqkAEJkBhJNLc5tibTqn",
  "key2": "2uQ4wEsoM3wYiW96qZNhTUrqvoHyrGrCe5RCWacHhNkfzY3C7ATjt1DkCRE1MPfQcnPi2sDnCn3DYUybcwsA46nt",
  "key3": "JgEXSMBYBnVfDAozBDWm8ZFpHSfcVyZksou4CayFDR4EHWVLKXpvozaHuguKL355bgH9gZkC8Pc6Cx1HCArSQtL",
  "key4": "26nPP2Cd9c1ELTK8pEAYXyR4Y7VTQpsf8PDvBA3DKhuwMCs1549JopQeRmS6Kc9sbsQcLdHyCJ2xCvfrNN5J3d12",
  "key5": "V1RxEtx3pmirE2tBpHhd5k75VU1pHnKo5Jsw3zgUVt1jNbGnU8sbadqsk1FvY9dpJvR7K5k5J7La1Vv7h8RaLb8",
  "key6": "2r4m56e8sg36kDAqimD2sbFhAHrCrd5xRBScCMndxy1G51BiaUfjcSB6ozkSBfk8pJWWRQiNnrEUdLW28gHq5ePN",
  "key7": "YQPqhJQbCzf3BTeTZ4rvxat9pVotGZ9xwUU3Ks8tnQy8N1J8x11hi8mu3hc4LgYgpXdj4ZZQfEmMvFZA2q1rDDM",
  "key8": "4p2rkhVcWNa6WxHuEHm78M5KxKdS5WWFhQkfQd9xgDRqxicy9AWDiDBnGiYkwZB5GEUqAq7cJWMZx18KMAzHsPNg",
  "key9": "1kvbbZ31cyXhLcjKwrTb1L72bAdChqKWjFTLCVt5ePsUoHDoUFZ6bR3erM7ZcL4tY5CDjBWSzMLcXYRipqhfKhY",
  "key10": "3dBDQ6GXNMu26bZR1V2BfzFfFNuBUMk2SJgkJeEJ5zqHXA6q9kh1N4jp4Pk1gGobLffoBR3BVpz4NnbsQUzSwYih",
  "key11": "37hEfPTPgPCVXBAko7xmUDecZtsugiuE7KEF684RRZcFHJLzK4tsHortcyEEAg7cNx1Lor7KRhDjYvQsPig9gLWZ",
  "key12": "3DTGWVU4YbuXfZRU7gYdHjwSmx1VsrkLc1zV558cX3AKTNXq9MkFisZfmz3LbifHPebJ8gf6pddQb1rrDgM49Kzy",
  "key13": "2w5sTySQfzCXcgRHoJFjn8y2aXNDMvsqbNrBTvyZfBFLMBUf5pq8e2AtK7Z266jKwUKz8wKT1EePVVYi2WN2zJub",
  "key14": "3Rej5GgAaGniUiyEAZAjToBmrtYeDbnhbe7RxJtoxVhVzY1JNWBvHergy57od28exE1SdgnAakxkBTMhRitHHz9z",
  "key15": "29KdRbMKxhMktcj1QLg5buukQ7QhFHu7RhbPudwAVZrMt4KFWkxi1bUb9BcGTZ9wxxpUetsoDMPEVdyTMpMWYt4Q",
  "key16": "38jNYM3rAwjQpiaYodsPdKgtiV3V7yLwn2EbmQGg2PK8Bg8BLYDBN1jsmQQhQ1Xx3rMWdB58VXVrhEF5XgEpUvtr",
  "key17": "DoioEYuGJZzVSWzAWmNGWi28sTvRYsKQwghbAksE18sdwZS3QynpT7JGh8PiTiow9ngpp6nCVBTouMSpwyzYG2M",
  "key18": "5g7ACB1VhqkbiwSQPRKhsTUp4iJJofyDJgPSAeZsm5f7KSjLMXn8Ufv7a1DVeVmwX8aHoWfVi6eTNvJRrVBDqSg3",
  "key19": "53HBCCveLoQKcXxTDCDH5ZKEuKg5TPCHjLFEPeoYxXrU11Lfj1PavyCKFkSZutjSeMf1aKDBGy7nvBn9jrkf9cto",
  "key20": "3UViRG2a6VqwtVXBQhM8zwFBTecqrjHWw657F1LBUbWoAL9pbZCJABmZVTwyGFsPswYisaqhxwcKea1LMB99pA5W",
  "key21": "BGpVbEart18AjJUL4aabuL2gSdRL5sb487fji9xWLhKwjLUyknbpVHC2zFT572jr6kvgaYk5oMVycwy3v1ZGj5N",
  "key22": "4vZqY6xet6ueDhPAnGd2PW2SCR4ZjxDyAJSZ4u2YjKD3N5b8J5wjNvaFFSfemEo6g1KZF1NwnPybj1zb3FyiVL4x",
  "key23": "2FdPxiLwbXHdkdejaFeuwmA5zLLhiFo6SeqfrP52R1J5QWQG4qcXv58xuJVUQGjvxbph5Ksdg5ApF3T8FW8KNKx1",
  "key24": "R7z9BEq9E1sKF3QF1NFuvhL1kmWdYsfXo4Rmpekx8trUWD2uixnXgu4DvDxYiVUrhfknfNQhpwVdUDHUwNMRsgi",
  "key25": "46CMjPbreE6HFN5QrMYLdg9rsPDk4Xcscztayvv5ZNEeUB3WXG354Cd7hS28T2e9YH1tSHVVq4HLnByH144eAaAb",
  "key26": "2Kxr7sbphYSh73R3Z7kz8ELnpCASTJwXBmBbPtfF3teBpGrvrjiycZuyNuqQLTMdhojYk7pEK8489q5X5W8wSjPY",
  "key27": "62jAofpoB3Tamv5EJL5mAbiTXHdSLyPCw7znA1P7gF9epAoZ2xX3GP9Q2smiatNPZSkRTrisE2TzYhCwCQ7UU6RK",
  "key28": "3ivEQymcf2tdPYpYhXxXp5a1HXBgVQPGbw3oMk8ehCSNd8Kw85uXDeKoDHiaKwdgjBFhEySCkJCbVUEmMttcnWA9",
  "key29": "2pDivKmbAVePbBSCJhBZdAxD7JJpJ1agPQCUfS7seVDevYiYR8Y5jchQsLhZTD3pVNsXLPFanxPftDWiWa5thcQF",
  "key30": "4WwzHsfGbKYtyET1ZZRicukcek4VFszcqqaRx41KTh7K3XJUMT8yemESBEBPJrEYJCq6Xa8hDLyVtANLSXsaxVpB",
  "key31": "37uCTe47EAt1uWvbZgcsFcqkS7VEwoDVxaJaaQrUKLu4uJxinEE18nuwwKSu7sxB2sKmQvZ7CcvPqAsEUbJBFjLv",
  "key32": "2hU8Eeuwntr84YB7eQhzarD3kRR1NefbnhkXk7BEbzQ4QtdgZfAjjnfQxz1y18Ka6hyBbVaZ7AW5yhXoQbT53FM6",
  "key33": "4uHzqdr3TViDLm9FqPq2cvN28eTJMxV3nmS5hZ5jiW4mgJfDQbyQfDFwdsSF7tbCTG23Bmbf9pgSXVWvNv2AuAEX",
  "key34": "2aWo3KKy1Bk3peNtrNF9SsJsrM8xdpJ6FcUphiZXDFXgRohjE8XtieWa3sxv51eYtKUbaaJe5Z6A3jFNBMzWwCq6"
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
