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
    "5Jjgff1gEw1BK4u4Q9M9oqJpowXD3DrqdPZXoMSLso8Jawy1B63Z3Lv9hzoN7hjBRrwzhqtgwT1XgrC9uDTHVkZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fp5PstYxLUM5nkzkXvPR8aJrGpVJBhtL1bNeuYy6UXMhyzNFH923wJUmErvgaf8RBK1m6ZCZ9vNwc5u2jmmWui5",
  "key1": "5hwBTiJicUx5kNPdPxERCKxFa1WAgyFzrLnaCcM16qoUGZa8yLX9R1BozibnrzSrqKdBTTXBbdTpcSyf8SAUpkF3",
  "key2": "2hrS8cv4a7hkKurkYgJ4MV15Pg3WWQEpkxkwQykwzfhap1fdbCvZfWVd6iDg3oQJUNCs8J8Cfe8KPpFaShRpuYKr",
  "key3": "4HBPg7eRZs7v2UUpAa1r1e4HwHX4mJxzMoSGYXdFvgCcBHkecSVbLgDNYq2MKfJKQXR3rVfdXnByjSYheameALfB",
  "key4": "5KkmNeimEkw6BQ5UypBfkDFccLV2Ex9dgZmkaiWXtLBNCzZvGLB9PT6C1db2xP2MdP29znHhzP9yZXX8Mag4X8Tf",
  "key5": "4BrFn2THFrAokHZCPs6mtbx46jW9vSaXmwA1JzGKRA8xhgjVviA98m14NMiLmsmPp2v17Zs2adFeRUTDrPiZjGqT",
  "key6": "2KiGBf3FcaiQX4dJW7kRFyavr4F5TLREMHBLb67Gf2NQ2y749cvYnt9M2Cy4cEef1VqhYrNshpanHDJ1iymTP14z",
  "key7": "5xGYtCzHFRqbacCZjX8ek6sA2fQL1Qm3exH63ihj21PrtgfptAFbsVjmxzr1jZUsg5iHK2AEMGwyLwV2xgzh7Eto",
  "key8": "2rpj318SDYNTgaR4m1YatThaG8YxYc2E7WXvpfV7p6sc6H1TKi1AHG68AuRWXkm8dzQ2jCgM4A2cNoKjWdeVzJSh",
  "key9": "3RQxXHS8HvTUpho6iiBZF5aNNbWZRESsqfsBkkgyTWp97hSiCvv1kaUxrpkEWzW1iEn9JiF8P2uD5dsqBcYbUhsZ",
  "key10": "4Gtqo6WgUAMJ82MNStLD96pimBUxkkozg1CRUCe22EWPJS4fXmtZBWdihP7HQrKZBRYMoXFJo7Lrb5dLUoBjw3bT",
  "key11": "4BYD9yWfQPkcR6UEcACtushoYhHXrN8MF9vSEeHffJExFCyA4XZ9iWdmT1ByXfS3GkHmTErB7WxYsakguQAaCL4R",
  "key12": "4p8cqgAP1Fscg4vxnjEEKkPxgPxianEuB2BQ6rNZkHu9D6UkgAq2WaDDNH2mf2SLtpTw43pM2gbAfDf363mEgsiD",
  "key13": "5M2ByuBWA3QMnunNzwxmQsJ4HaqorMsQGfNrbqQoqUKCmnjLzPzm8XRCA5CGihua6NgRSoUfFPehvA2k7RzMqbiZ",
  "key14": "5Nsgjf7dzUtdZvxtaM3iacHNWNe6Bkz4si1i3xh8PnDmFzomTKre8hWyvE9mFgx4tDcn1tUEahH2iMc9FY46GByC",
  "key15": "3CxmeQLcG7juUrtxTNif968NMUxXNqBbiBFbVMatxNkNsc6gZjGo8xtvh7v7LhSWMtq3n5Bmrs82a4bX7DoEX1DR",
  "key16": "4RSzE23rQFNWVrD9YHhX8H9EPvknh4dRXmXGnf38eGpqC9HPEPLtp5gxTCZSWNQ4zW2gQrU9efQcMQnZfVC9CCh8",
  "key17": "3jntrg5H5XKftdz8yfrDjRvwZ7ogCqYt6AQA42Dxj7TkLazTXojjH1an6Wav1vyxRz9gfWF1SdNDyn76paafuPMR",
  "key18": "3jrbSydVvWwqiWjV3SsyqTULya36ozQTc1nwT4L3YH9PgQqRPF5isY5F4FCYha6owzbSYWiiz2yBnxJntoQua4KD",
  "key19": "5d2FfwsvStcZ1xXUw4xZJVikWxQVpwz61JYnCanDpsgAAX8afAZXjJmpRkUJqrpwqFyxMz1uyJGuZtbEAQEHuuc3",
  "key20": "nnx5YrjSFny3JsokNdK9xdBdEicFhA61uUbUpV8Q4o594NgF3qVZxJpJDdCF9ux9LghNEt84bj24QkWGmp93aPF",
  "key21": "5bsptu7AqgYXdzfi4VffH9mY7VjAEzA6maA3mUUDaTUunpYfK8KXN4mdHJV7RA9a4HpWmM4ybFCyuFB1vrNhf1n3",
  "key22": "3CWVjdmJ1H5vDQp6GAcZK5mfohUAayDdRd1SFt9w8sv9jXVGdbfMn4Dci5Yh4zhwk1NgY8SbD99L4VUq8V2nv3Tr",
  "key23": "6vMuhu5qdWiwYHfuNcD3swsnkPwkbiVVirwLEMHjmo7ZvxmWKFkXChN7PHMUcCe13WYp9EXPmKdrLxyYgrLEsQh",
  "key24": "5ivoV5biGBqT7qVQ2a9KJVn5suoKThC1hGK5ikCVd6ti17dPm5TNRQM3gRmvszczsrH4yjyR3x1SEhCDarKe1yzA",
  "key25": "vfdjt3ky7hBZJ4URU3GvC36W8fKZHCPMueLByiMZ9SggL9gYCMY3wkM2guJiCzb7C9Grkjs1rexyNvEmoo56NQ9",
  "key26": "3EAqmNsWZTQWWMQbSicjN1NdKLZHeaMx12iiuKb9SfqgGT4Wn73ayjZ9DNoxy1yXs4bxuH1xMmUjUxbS5zQKH355",
  "key27": "3v9MSTucXvzerWrpKrPaLd66gjNQ2Wrp3hbXJ3fZvjYqfAH7P8JjSVLoUFsP7ajzzB6UwtZvv7vKCp4YeZoyt2eg",
  "key28": "4JN5VESVxPwGufKhaHsArovH418ErjSQN1Jebiqwp1hxvigNv7BHxDKF27h23QwX9QAU8NnFwR2PLrSAGHuHzoAC",
  "key29": "65U2hBEBwmhQ8Pt4nsvgKnAWTN16hcr6Z9Yg5AFRePA7zwGnJ16TrjsAtVGvvsRvHHFuMj7zrT2PsAPVh8KPfi8N",
  "key30": "3UQYu7JhFekxtMzUKjZffDabkGUkYE9dZNL4N4dqCxdPYsE4EDtyTz23cV6v1UEuUyzH7WgKVXGu3i78CHj6fYY2",
  "key31": "5JwsuUEcT7DZG6Av5jwxfCdFRsiw1VXMWjACdHXq3t8dTyFXzUtQeUJR6WJuGT5ggEJSS8psLLTwcY7Vc5i99EW",
  "key32": "3i3JFjYkD9867tEnk55mBcPuf5pW2jpUxsT8NpekzgCDWeNYz9HTAFjPb5yaBRaQb9hFvNCsnqJKTFxNYthMxofr",
  "key33": "31V1yBRTXhHqKwNSBK4PFPDbYgTd9kbvPHMfJagdvrCEfaY8geMGuGcRJy3CSFjdu2uUVn5zj8PMYUgcNwAN4ggM",
  "key34": "41CBdnJX9EZzBwreonidrymy83uVzH1NRvXqkRnEJF66ds7uvn7QPG6Mxje3FgNdPwuKGMCsYv1yNNSkxQfmzbHf",
  "key35": "2i4Fs3M9SntVS7udqoNPBGdstWjahcFHADdbhKZjLP1QdnJxAW4jnKSTo1wCLjHJdo52SESBFqaFSbsePAvRVTDQ",
  "key36": "4tmX4RjKqzsMqATGHPiHvasLTmiFH7i9Woh9P4PSk9RyuSj6jzNoZtUakZTeVhV3ncqZ8PUZChFSoTUXtBgpiGm5",
  "key37": "bdMbSwKPfucBzLpgWTDa1LEG3zZEM8oskL7nfWKYYvzA6B3FttuGbD9dnxQpfy3VmmFRktLVbKLPaZVwjY1oKXi",
  "key38": "3rG6J8HACuDjhkGEzyMBMpwRXdqm3pqzN4U9KJKzTdCeycsRJBjhZQ2GNMPS2dui8s7572NDSHS2q1rKv6BD8tZ9"
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
