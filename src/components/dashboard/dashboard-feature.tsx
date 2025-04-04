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
    "62N2jfWtnkBBX54SZak4gxxTcpMf4JNm5phxyziqb9nVUJLigLaz3Kc6cssSpGiwRPzb2ak1TaMfZB9fvXWm38kL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BR6qDsfkPd13Ja2P9BXsXKfNvNdawemXH4vn6Jy2eGFSCrz3DVmnYTHzqum6bt1uTZ2Fn9sangzAt8GNVZjrenu",
  "key1": "59ctVw4Gkzkz3WW3D3T5zkKFGqNpDYsX9wZB7amGmo5mjkwtK8HK6NepLvz5oXJWKX5cDzD4QifknxCw7YzLNxpk",
  "key2": "JCLLAnTFZWHBoRbBq4ATjwdMui6GdPdoxhtXd4cChhHQMQsK858oKkMuW88GwKUz9SGcBf6xYobAPAL1SNtEGYC",
  "key3": "5pJoNoMwduBcRQiwzTujyaYcKQNr3A78j18QxVheRVq2QWw284ussuHMYj2kUF6TDarVaLGHCsPj9xyezJFWASAk",
  "key4": "2smdKNkPHZUStXRHDekHiCkEgzc3R2aoqfinnaitWkZhSyRu9wvWDZVPrTHG9F33UEEeQkBMamwJs6jEv6U6f58s",
  "key5": "3gQd48F8Yq4KrkWxmyuS1A2N5yg9WNCnHXLCDGxK1bxLh2DXnwMgEZzB1s4AfcFScZXJ88AfVmT6RBZD7JVt15sP",
  "key6": "25Pf9VYV3BxSUFc1WKHfrgkHz4gpC3K7CuCnE9vfU45QUd4fhFRaLx4cuwqZD1wsbH1RRAdFkrPCEgMQuDoeJjtN",
  "key7": "2QJWbd5x4Jx8WPZW1rXnHJGtPQcdk6FL3FZCV8SzQnMsHWLh215p517fXjjomrBxgRDFAR9Py4pZtXNaUjcSXUxN",
  "key8": "3Yr7qhEzepT5AbVNmsvi98WTkPAxhGU8huFmYYybEAbfS8GgBdmvAXDX4WnKxJL4gVHpHPrdz6iJLgtLkPkNVU2a",
  "key9": "5DE22Zb4FRxbWmw8QDeQmJVaFnpoWZBBa7WXnbGjCEtGuy9LWKABgGwUBBGgBeNaujSUGb4RNZBH3hSLucK75sB2",
  "key10": "4P9xxLX3VuRiMtxx3ZVsV577BbAhoirwbo4YKasayzzj6WfmFqZfttk5sarFNMGesG9LDfa95gxV7MdNaJF5H133",
  "key11": "55CXno49BxoC22515apWUatdU3ouXMA41SvGXwuSJCTsmYrgpDb8st9Vr2aMGFzX8UZC2SBYGDvqhvPdaAyCTjgN",
  "key12": "2uNVFgpyvDdyqfkm1zJshocdrw7ctt7scoxztxhj9aGKQiNE4wMSgPf9oVX5VqVz1dVKBdnBfqPj2USmYfNWnFaN",
  "key13": "5wZSkvqqyzDRdPWm619Fu53Yk263Ew7ACJMbY1wBn2U4VicoqQ84ENxkt81jFqepVQT7VBkDcGVgCgjgwxM5LyJN",
  "key14": "CJrQsmnreaNv92KeC7PqM8iQgLBERbX25kK8wfjCAz2uMkAUWMp9aUR849iqdrcTYwxUc81ax87fxV28DaVH56i",
  "key15": "2D3Rbc5fpUCXY2KYrXAJY4kofrqtT4CMMr7e8G2yfUajMQ9wzuiiFrm9J3r21ngbKDNpdainHSARxaUbHRLviqit",
  "key16": "5HfC1YJ6nB1rEKRqMtpB1YWJok4uSmpr2atcQFgGc3E5FCe2CvKVBXZupaDJFFCRhVkRTEgnemCfnchn7xg3ojUQ",
  "key17": "5y8doKF1MAdRhMYKrRh3uW2iqrB1Php52Tmz4xMSrpKwExxM2gxZPdv3EWAJ411qMTQytaNkKa67829PrCC2cuYQ",
  "key18": "4hwGgGPJgSxMUxDcegvnqyYNSCnqhGvRwBpRAAnY9kzBK37DzkGSkcx48hF4Dwv9cPWUUosraVpgamsWEcsuPUZk",
  "key19": "XUnvVZRjvXzNDHDmBPPb4vRsJSivnATGgBu92MSJ9E56hnwQRGnD7Tx3FBtFDdaqprv6BpTaY5r4R75mSMSSdRb",
  "key20": "3sixL5yF6pmmp41mQY32hUj6uEVDVL7nNW7nvm1g3r8a33y4tUFtXo6izrsksHK4bctjCX8CgpV1iBav1GczdBvo",
  "key21": "3a7a1ARjv9PwvF7NubzUCnmDMG2VZ5zQny64LZ6rTb8kwSv81oS7HMVm46NFY6ibt4GdCKhT9ekt8iLPQgb1cff4",
  "key22": "PbVDt7yfPyt5NA2gmXZNPi2RS8nPGVe1gM5uK3LXXkWWSMA2jdwMU7guS1FEKNGG6Qsi3oMwkT3JPimkoeeio71",
  "key23": "5pXcnw1Ybp1uGSYmykxs2Le1yopswosKoRqQC9CXBhECHLL3pMycTUVnF272xZdykwpfLepQ7Bua11yhhgSExiVa",
  "key24": "jrPTGHaABjjxDWCkCwnXcY3BKtrQYkTkiZSCNDvgy2optPYDiVvHbf9osSYHhhTfursziS2DPY3S5dAHPGRx3xJ",
  "key25": "3qd1viee1rS4a7B5iMQkDFDnj9QnLmUfwhspFELJAjUcrQUatRfW2nupXpv1NUoDxmfXyXWAm86exyFkfAB99o1x",
  "key26": "5G1d1pSeoE7tYkTwQ1uuxV1Dc2kbf3W71C2ewEFjLjCSahJ5kYVcfJNdhJbxB2YP9U5V9MENJzi7GG1Y5EB7CDV8",
  "key27": "42a8TouyujYJxYDv5NqgfCG3jxtJncMkYc8F4id7c5jPjvUTEDQxVVJJwLu8UKjG7XAjTowuwSxNRZzZsW88w4W2",
  "key28": "bps9jEACf9imd266xMNEtmgX5gxnuZmg5fSX4E6mjW1V7QF7sSx8agq56tcgn2ztJ13xUPJR8Lhj45hqexCf9u4",
  "key29": "4MdJiYTgTBwWPFQUqsZYpSsiqQUhwzUVCk2WwhT5iKQL6EMxk7yVh8GD3suixsagUzM9Q3pFFLbZzkswYkZcSsjJ",
  "key30": "4rTQcwjydj8bFvkLBUpFCVuvZP6FvgKjuga1AgvrsMVWX6NN1DyxAqUsw7CpRQ1azDeXEDKzUMdDq6xyA2epeG1M",
  "key31": "4cZVgQUKcJMQvkcbT56GVpGtSc8F6bq61Q1TvxUKuFD3x9agHEAwLdmvU6RcYxeaRBUFkBuvXieew5cCqujxfo4S",
  "key32": "TL96qKATAJMz27RZF3AHa3jAGKynyaQuAfpWZxxBVsbArPFnhRmKZRYuKVVsHguFpKsypdzjqgVhCD1NkAFDKMu",
  "key33": "4Np12xjjUrTjVwVncaKtioGn7UqEGmbnkqU9Qtk58KTXsXrBJaeDJpNHAytHqafeCTNf6Yk6PEYjiMzC4NenRBVp",
  "key34": "4yUqNdCXuLwwhG7v1v3yxtWAikyBAEgso7zjU83fWsRQbxZzbQhgF9nfnXyRBAmNmNpPzQSQC6qKcoT545rEUZpm",
  "key35": "3fZMBtHnU3kHNLZd59VNohKw1avtoMPgACBkZnMDN65DtFdTHKKiQ2gyVG1N3gqgfCYzfHQLdfPCTBqByVqZa3Tx",
  "key36": "3ZzGCkdfudu5h5PZ4bnqghrsuoMgm9ys3Ki9npb6NGqw38D5mfVC2tPZWnjcDQU9fCYtLJ2viv4ReEuhv6QUtfEJ",
  "key37": "49dvw7V55Uvsus649ze1WKLkTo7fBHR5ivJ5TZ422LZc9NDNNzVCPHYbGZWUtDanSkb4C4tREFdowxrpFvfwKQdp",
  "key38": "2MLzqGeZ7nb7BxDLWGBURcGVuDoqbZfUyRjFsuBPLcU8qWvuQqXwTGauiVnsJoWj8v9zQQYPZQ29ju7eVYns6iu9",
  "key39": "63cmCBs6nbjh2qtwQe7UyLgUAQ8kQPuBcZmDysP5aikVxFN9JXTqmD6dQMTVDwTjgWnvDySTpnoLpvxkaEXfTNuP",
  "key40": "5RqxD4gJphs4XZBwdpreuZUMiuMdV6qGSnYRTzmnve2z1UfKPwGtH8LtdRD3fRTx11J7BtPtRvDwCzrajjKLeTju",
  "key41": "CY2BPFYNo4W4XFH93wtsTgmAFMe4gv7TE4bDM92JXh6KjrXHxShpoED97jvZZ8DSeQv1g2482Ksj2d5AYtPqEVy"
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
