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
    "5sko1Qbd5U5UrE3PixmXmPFYJMMgnkr4VEdbxWBxxamHPjo3cUKfVmtkBRVnZayKu2syLEB4NMjQYPhuVYbD5rb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "562iRSmgN14VYW5CDYfDbrtoGDpsLfaEnsocyMpe4YRotoHzRNoV93N2vXphwwUuyBLc5YuaxrQaqQMALjS6PXTf",
  "key1": "2HDYzFGnSS6zJAiVNqmdkp1HkmynYNt1YWPAwhTwP6HHQ4FxCfvF2nZpphM3xy4hwzHkkDh3HftyuxxrA7JY5ZvK",
  "key2": "2Sof7mF1JkAAJmHHPsRYEMvC6DYtQx1v8iWN1eVNWEJcS1R6PV91GasUg52n9sfJYiNQg2kj4HUwhMTBzghahJaQ",
  "key3": "3euDtZDiTmwU9FyjKpBTYx5aqRAwTz8j3AGAgkbrbfqdpKM6NPrhw3smCpKPsL86uA7BXQzTjdVbqgPMCmWsn6Dt",
  "key4": "3voqYsUMso5VJ31dhtys73Jcw6DZvXvKJZmpSfcHiYNxsUHnn2bSqEmHCe2cWeRM3TsPprdfR7iDS5uBtaRFFsMU",
  "key5": "54Nk2FMPioE3k3iaZKp5q5c2mqWZjodNK7bwLtApg98bLMwifBTpBgUGoFybAHWecXppqFyNtpnCNgSSYf4G66fC",
  "key6": "5yAFTGurCnE6cdigSYBuLeGKwouGnXDUpxbY8PJBTAxxv8dCvf6gfScGDCRGxmjR8imTDqcqGn9WVbGeuJ9nYA9U",
  "key7": "4jYXi2RpredqY2VV88xWUAGvQZjfk6YTGfeCYmwZWvMsET1JX4t3pyXrR9X4jhqfQqGqQfcRCTSYioZZ6RkiBrcE",
  "key8": "5wtzYbD5Fp9gdFRjGrvfFBXLLXF89vmCmoKtZmuJmVhYRVaq8rqqEmGQHocHiqA18y9ip27JXz5Ki9frv3YajMrq",
  "key9": "62GonCu8SbxgX3qyyvsdVZ6X2XTtVvVz6METHyhnucAaYr1Mv2m2omWqBrFp69zaTc3KKEH8GExo7HfWTDWLE1vi",
  "key10": "48g94jVtQZHtZKHV9M17PVh1rPLQV9iATu2yGjvknAkq7unRYMiRgxUhpvLMjhM2D6Ya5AKiZfhcHuHMYt86a7dT",
  "key11": "3YdWzFFMtDWN3LL5TfZFhbeUQsBArVc12jP8Hdbg3oMWF7UEojjsJ8Dbad1QUxzLfy1Y3mHoBj4J4KLd9pkpSJch",
  "key12": "39DJSDGji2i9quSDK6EZmew5ZNcQdTiKvHDYTJxu86fun5BvXbtciapzhLBYSeDoCLEMofXEq9u4Dh5X3Csnu8Xx",
  "key13": "5sZuA65G166xhwtpEiFBLra9oLHeimcHcYQ6s6KMtqgjjThQcNyZZCFseM9V7wi1DNtQGHo1QeU8DdKWfKX5gDbT",
  "key14": "4AvQP13WftmFwHHoyPGRv3LsGSHxGCuoMTzwz9EU58rTjRYHbAa1y4R7AsNtV2LcAJ1EwpVoeGSkQyG2zQLSkjhE",
  "key15": "2SVV7cTeAo2QGLb7PV5MZe3SpasqfFPg246jdL6dNAM5FcZA4ARai9H6A8h8L9VYgSiKjLqMu9HhD5L8VNE9EP7w",
  "key16": "AtkXgzk2Q52tK36nft6SMoNgd8JYNggmL7R3H1LYjCYfGckBakuigpSQezzf7xoKUSLhiyqBauMqxxKZgLyRtjP",
  "key17": "4MWhKceyAtfkJc9V1gwPcseG6cHUoipPAaDDPfNh6iaTGN5L1WrBGeW4P4ef6UjVKroWuGeGd7t8tSuEN2evxaR",
  "key18": "4y2GsDLKg13ZQHTwjVbcFe4YM6qfiH83w6UAewzSnh33am86sxxokeoZYvDZiWyYfFcdowCnkSfisK1TJE24YQEB",
  "key19": "53y7AHAoMwsCQbVEguZ4Gcqx6hRJwUKceyg6EXFfyFEV4C2qrKcoqHeUKJhBoVduDASype2Ee8beXjVxxRwbAxCz",
  "key20": "A3wMUNT6EiSucZDgv2FJrLue2aY16EqsEK7PnRgNd8ptebPEMhGFTtvPAG7shDQoevwLsLsx73zJS1hW5vuaW9P",
  "key21": "3253GubLrCvFXTJ9oGVN414dic9EB7x4rnuabbpHJbdacQxirG8gwa2G1ZoBD8k1ck5ymHBQDD3usewVoLoPYt5b",
  "key22": "4RuQVroPH7qstmUWfV82MefQVdRb4pLorUa2HRZK8QpEcL5fMocnc1gMxgywFV7ZqTNxes37ESAvCU5gQsp1adNb",
  "key23": "4zuMKF2wjvdUvjc7srRXfbTJS4Tr8m4q6aitZLgU7F3R5KRdaqUxKEMbRvtuGYdWjemQXvSQx984tYEGzi72Hwhy",
  "key24": "3fH79poNvKAcwVbuaxhBJxAnnEZsV4Fxy1WEAJCPBTreSUPzCP4qazkq3YWTx5DP23aeBQZ9NBsRM8SiNkZAdThT",
  "key25": "5pCxiGi8Cvmy9BYQQEUf9MN3BRHsp16t5YcZqEGGv5c3xK8HheUwXMbCTxY2QeE8w2TwkwqHdCZyvsDPrQFJSrBv",
  "key26": "b7s9sn14HrDPCo8tJHpNqFYNsHC11K5HeAiuBNdkgbpSkNWFFoWBjXko8im8KLAzpofGjLLNGX7tuQnGgdMWfSe",
  "key27": "GKziWtGsc5X1s8Nq5uGDbXg4BaDJSQ2EkB2oKjUJsMyR95CzWYXwovkKrcbVQWoYc6xG9PdR5nbopSW7SbcJTJL",
  "key28": "5km9pJJfNsfK7Mn9QpYJm7xR6EkspS6BPJx8mkoCJCSKiCL7wg1nnDKNuFkeDK2iejajvyfYWHzaRWRkMV1dQybT",
  "key29": "5KSMfqgwnsJjvkcaeasdXUFmaC5F4S66HgjeeuoLqUsQihLc3mKqtMobMz2iKiqrTCFqWXihz1W49oqDNzcpuAQG",
  "key30": "4EUqqGtKtEu4rzXaVipp6E82HytcnWVVomWbQDL6kFW2R4J8zkYWNKPmVYGK8n7vmYn33RVFqgz7qefuW2wU6gn1",
  "key31": "5eRpaDPHQnHAYWxnDci5k1iujPQijeW54e32eLxn4HVvXwQ4BEJgBuawjnAxvJ5QiCB3oSjtbfhmah7EYTBKgm4m",
  "key32": "22yCs76bkHs1rmxHPA4Qi8HBmgnGQscxHtWnr7qGJeEUdmLZR8wbXz96gKVexTtNn8KnMpd9BajJqWY9UpR4vABo",
  "key33": "32whJQ5gtjawB5djkZtnE9Hnc2Chn8E4ZEFuWRnz64rmjTAeTWVM6u2zn52za3gNkgaWfj3rspQFJfmGSQQFaPec",
  "key34": "4swzJRxoS4wDh4bwdzY6XihqohC52qAfuqB6r9625DxuqJYLe42HYFJh29Q9JC3jpm6nNsTmqYDaeZi4rkb1EUpk",
  "key35": "5ZyUPVBhniZcLEhC7bNvhYxE8q6fNfucZenjJQz2uNJDTCvFNdk2P3wioEQVNx2qa6NW7rSUwsqhgukrkGAGiTca",
  "key36": "LYgjwPRk9d994fTsfDdaEh2F1jkKzJrnDykTgVxdaFYdfzZR3yE6xE1CtofbGw2AEM9obHsQrm25144b5hFJrSJ",
  "key37": "5JiY25mTewFGvrbt3rfARKQu8m7bKmVMGJqJjDEpvDoRrY1iZz62FTt4E9ZbXADMEzdyrYzDt3pcHALJqUVUfozD",
  "key38": "3tk3NJ3Qz3gN9ztXhtxAmYRPAWC8M6Y3waYFhescuymo93J8eGGxcAzFCpFHqEHks1ELZ1tgAU1zW8uZ8tPnq9YH",
  "key39": "4bcyZpVe8zzxcLk5dx2Nd1wr4CZrKNYWnoAU9stgTo8MtZ5nAnELdB4ZjajXNcsfdyPcVmsMn7RiNZ8Nbs66797K",
  "key40": "4v9XzJ5vWSHEVxCBu2XRHC1RfSy4FceJFdoJdSfcYJQv4sXTEUWK4phMAYmt5mzMG7xuHNzFvrJEd6BBUryWGMDy",
  "key41": "5EK7RE7goMe5tbnaTBm51j5efFdyRqbiLHdGqtS6djhoAunVkqxwDe8U4b9xFZCFc9x2pTLNPdFqqmLvPjJE31jw"
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
