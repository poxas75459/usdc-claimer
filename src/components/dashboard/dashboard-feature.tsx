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
    "5xhaJtTQn2fZq33squUczt5pr5WgNtoVYMEtPEGZfa9iXNGxQJ9pa6QeNZKVt13q8i33ZJ7ANioXLcZfqp4koXmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JhQYb4EyxXdDieb7dVzkzQ15a7LfZ6XCJ8jai1TmSCdQX45j4QqApve3Q5RR5aveVVmkAX8q8Vwo68PKQN3KaVG",
  "key1": "95EbJbfxZ12YcQSSsxnr7s1hji7N1myvB35LtkCicPckXPeiT51GZSkt4n5XJPKXUaGq9BdUtyW1DiFRm7Vy1hZ",
  "key2": "5YTZHf75J2nqymWCdWzfHPSNYaRL78aL7KWMguwZ2mwuxJhcNPRargn1dUYpPRv8wswnugqLCJ2Eu7PEkXtTe7V6",
  "key3": "2G2zxaqNc2Eh6pGPU8DhP5wU5JELVDaSr5SzUKJ58AEsqLSvibCC25PW8EZcySzPbPhtxw4UNEfFBXhoxy4ZAnW",
  "key4": "5jMuYnA4VhTHuyWBW7eQxLPLL6GLxonV26YMgFBkESVPbh7K855wgvnR12oZR6Loua6tDwcL7EUiZd8UckGEjszE",
  "key5": "2McJAGU95aETwJ29PdpVfeRoS9my2mURHMkxxuWDTJyDMmzQ2kRVz4yo5bxaEKiAxpoZyAFjRbK28icn9F585QfE",
  "key6": "5PXibkxNTEdSeLmqxvAm2hHTKP38QTUr6nhqwGUdVe5LqCccakdAfJuPVVkV5nmEitVXTj5rqhzdM3h5fMFpGu4",
  "key7": "HofJAssCeDottRVBNRCxie7pNB1twgaD7iPVtX1h7gqq23toUWn9CWvt5RTVSgazEGALSXKmUeNzg4mEqcnnpJg",
  "key8": "3CTsyQb9Z9dSfLLMrPyrbsRSkK47Eww9qmprmPKrWhPmwZm5AwnTZPWx43ThYCbCbHeh7P95kMRDELj9Q1DYkU4R",
  "key9": "3rM7StncuVZB23QUCsZqi1LVYTXGcg6ajfUAfSxU5aJUgzXVdDAa6VhLjnePmjno4kWqjsS3bP5yaXCa5uwECZwy",
  "key10": "MwEyRWfmKWCwZ2HQojSnUMsVeoNxiMvmKdZEnZUMHNsaaiDfHzq5NcWsPA3tzpsFL7oL7AnRN2kf7WXHst8yjQU",
  "key11": "3M4rygBzLMpZ5fzB5255kA16z9SxRRv2dJ5GjkqNmm1JsfLpmghwEfVJNo1dxfVTe1DrwwEDAKPKubRMorGduGtm",
  "key12": "5k2nZNZ4EjMWttgM7Lb9vnK4Kj6ienpPGNdR8wzwSDBHDRJhv2mkFDNWS21KnjbUdGWApnsSA1CoRdSLmHgqybBg",
  "key13": "4eyYw1taq56nUhe6a9EKxrbWEbWt7DgN9ngcNb5VppWFyJAprSp12ttVTc1k12jeEaPfgJAngbvrtiBQpY8HxSSx",
  "key14": "411VfLv6R297M4qnC7NkoU5spKWvCd5godvkCDW6pXdVjZ7DtWxxaXNpet192ZMAWvJevQrzExKZppdY5kXPQLVb",
  "key15": "4HuxwajqYCUVTzxRp21jYNTjCNbB4dPo1Uu67DSPrikAW16z4D7TfJJKa4rcELvzUeBa8i88MurjUtgFq6HhRvjT",
  "key16": "3SMdGhQMrBVMKNiFFtnEutQhvwPtdW6J5kRjfSubr8aKGWhFeMou8mXNaCrj8KzxrG7v6jRvSGX1n7gfyDdXoBxS",
  "key17": "5zPgFjeTSAbx4zafNgP4B4BqR7nv3t55i4Vu9U1icpVSJvKRu3dnhUyBs7kpcJmSte41tmMMfbqSUaqLgyRyaHc9",
  "key18": "tSegaNTqaPU7mwKrMwHkFAw1Wv2C9SG7q6tgmDmEeknU7SFRaNs9NJhqSn8x9T56c9UZMgDz5dGfuJH3gm7P8GJ",
  "key19": "2UxsrZUKzJj82XpxY8nhDwLgXLvFL2BdvnchxGKXCd1hh6DLGn5tXKcag8byokHsCKC7YXuHiVRK18GNmkHc2Ma2",
  "key20": "4MHscXz595J6odV8x9g1zkytvc9dw747FSBNdcr9xWksvDz2TZw4937qTQyq9BMFX4S28Xz2Q76Aad34uJzp2TRU",
  "key21": "5Dd3sYu5S6uJMJyDFVpSXHqyAzCsCZgtAxvDDjLsWJhy7bQeg3MFZBcaja42m8zsz34TFYyTLhKkAcfHC6xBMKiN",
  "key22": "43SaUrdUbh85eE1jEKrEgwta96LY5L8WLMwnKsH8psrmx7vzCN6HuL1KHks9bYeur3bFoozdrUvN7DocezW3ZQRz",
  "key23": "3brpTmJYpMkR3ErdFW5AJzDuEpPqpxEFVc1cgw2JMX2Xg7PgL2yLbKBoNVFRtkgHes42AJNocTm3m6g2jMQTuLpM",
  "key24": "4fC6MGMAVN5vNa6mXFFqR87CzoScW7SCFGy9YnB2JiisPVdTKGxVwGrrRD11VWHaoGCgQgbqndfBVLGvNwQGGuVR",
  "key25": "t3EWRtTBMzEmqFFhVLKf9aTepT81Ftdmo9LYnim5CdiNqiMcs8Xj2bMFtv9NS7wmfuBzhFeQPQFRuj6jYHJf8tx",
  "key26": "4eWq9eVa73WpCAsvBvHvsSDSDfhAXVa5ubUvCyWgM29DJhQ41YniR9XWrAnxMsc3DMU9Hw24vWY7yvmjiM3SMcgw",
  "key27": "67fmJmoiTvDAH8QY3BBW8Z9zdW11iiuyfuwaNABv4eQGeVhUYabGxy6N8awQhda5HFpQADfGq1GzCTz5YdoNZFVG",
  "key28": "2s1wQGEKJqgfJZqzxAWFL3xeq1xHGYw6nWJXiujvs8grZ5F5DF98EkrmGrEYK5ryyoCVUougKY63hYDj9MYAgTZc",
  "key29": "2QKYsPaFABqY1M1xUWLT3vJcmhow9NQpCHc62Jp6Yiwz9n75qeJbKjvvFfH39RguadZ9yBNEdC9DwFRDPJi5Wnvv",
  "key30": "24DPGsJmKtduPMPqd8SH31CKkZWrZfRwDcskxaEaUboqbMwPU6v5qsKrWCJ5XF1KpKkWRXyCTXiNePn7HXwrdyAi",
  "key31": "5mrPB95sD534sDJmDkseEi6JVWesmkL7yqjNHuQiHT4bT5dyESjHWGHDq9B1MqAvr5BJDE21RRtmqFv4yxFHCaZq",
  "key32": "NBrsvJFoYc2xmQgEhj3X9ZjrHVuxaNCtMYgekC7nNGpkP67mvhyenX6cwbcLgtKcvhH72yJAK6iWFkJVvmJRDrt",
  "key33": "4R4ENyoh6bjYRXfb5cYteFg2bzVhH24cSoK7zJ6AfjGjRM2fQAUPSph5qgEdY6wVmitvfrofizebSasu9gpByQ9d",
  "key34": "SVyWDWQ47fPJmzcC5JmYoxGnwh8DVAZpJ8Ak2JX5vDen3RjdBFNonSTTp7j9bYpnkC9iNa571VUi1BQiEqsxm1A",
  "key35": "4p1JxhDUDzaqbPFBiGuPU6q1DCG5LXLVf9zneWV4UfG4sDoJXwoFoV5vqEbopqS9TN52QUN32QTJQ3GG9Ug83ayW",
  "key36": "5qknUDZJm4Unfs1sCnzWmuFqDd2uB1bVwXnWb4wi9PGX6vsDHnJ4Pn4xDDjAUkSAytdRMAG72He2eSaVkmCUE9zY",
  "key37": "4YXbQUERdmMVNMh54fwJPToFCZpmSh47pdsvWMugDcyzr3R6yCVKqfRWDKuqUa2Wh6Knj3Tjr7dXXKdhdNG6S98J",
  "key38": "5KZAWCYSd4GfD91smNAEKyA4m9aNuY41oTyasVy7dHAQKBCec7bWTtuA88cKBnkDZCJAEnXx98mUeP5nvbh41evC"
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
