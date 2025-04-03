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
    "5douZAJvbQKj32UJeLNp7AV6aeipjUnmDMhFTTZTHXKYZyHtXqmgYUnMJwBe3VmnErWMv4HrgQvurrwCAZyVoVM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aW8iikRQi8NgAYKF7ZNFvT8mmZCjqriyAvc6z6Humusi465HfEfoj5BfgQv3FAPEQZwzX7fjit2GCeLaz4F5LY2",
  "key1": "42vgBRucwXjZQ6Ea1dspRBMp53ayVwJufBC1QmsTiFQ1rrXF3wtRTnQBrzU6xLj92bsaBKCyYQVw1pZoBrdC9Z6A",
  "key2": "2sCNU6pjr2cHpSh3LaGQuaBZbBBi7geK87zUCMkSF3ztqb4W7MnwPm1o7Lto33JkoYGnSCJDk7nvnr1Dr6TERmtD",
  "key3": "5dvQA9j8Y1hKQyHddMhJcgkmGvfoKKXcwHa9wAdu9zWEeV5tkTEsixEuiG4AugsveA8bS6tPgoe39QYFWYuKreVK",
  "key4": "5Kb3fjDCfB2LLAMmEz1JYo67GhLpzLz7Tqf9VALQk9KjXoXZhfZSW3JimzfRoQRp4NcDa6t1NexHb1pgnsNF4Vst",
  "key5": "2zaQ8GAurcFzKR2QzXnWVHF7829icCf7XQE7ikDr991uVao32au5JHPSBCDpJdDitzXQwK85Y2oyHBwnECooGmkN",
  "key6": "2TJLBRxTYH1nWagh2Qpu1f3FtHysu42Ljag6i8t65MTkXUnHtrG5ogTRriF1RWb9BUiSf3mw8fLkYL1tmQXbps2w",
  "key7": "V3AUWzr7FVwV8g8zqWuMAFZGjpSPeRbUne6JLTVFzYdgno4kQonAfqZDgateKWVwu4DC2DeFE7kgmYei55PKA3w",
  "key8": "YGxhR2Xooi1XLb4px21sz2Jbgua5MchSUFh4wXG6MffRXBckPxLPmosBQuStjHbuirZ9utTE2WRuK4zmzQoPbpF",
  "key9": "4Badc1HgkEN9yyg5wCMEQ2qerJJjFwzoT1ZzooRc2DzWoTuD4rYjAqt8uYwUvNqhPrgeA1hiKwixbXeR3y71fYch",
  "key10": "4JHNbjYdqvFLQR6UkQAJuf4E5Ge5Ur4BrhnTxeMAbWo23WDdLsrkXQcSo5V3Aipe2iRmfijjjqDiGUb17wYXGv64",
  "key11": "Ek2LREXi6pxkhfDmQUWjb8quvzu1N1YgLYgoo9Z45e5ae7aQibv5BMWgnf6BxueykJpNWMDoeXpBfLzfztZPkro",
  "key12": "52xbbT6n9PhPZkczcsp8X675J1k4x7ewYfxfuMnPRE3P399zEPrAiCM12559SiyUt7RXy4vA2nKqPk72iPfw4Uw2",
  "key13": "2Fv2Hvg54QLFbqeiCumQZzJS97ujzsYWqVQr6irXxt7FYc9dPRdCnwRuUrj6VrmDZKrYPXwJGNfYdsro3ndyZmJL",
  "key14": "2ZaVV8FfQmtyatG7LPFffAVD2MZKunLdhrR1keFtfJyeSGJcfwyfMiRmLj4uQk6kmwihSSw4RV5vLPG2S4535E3K",
  "key15": "ZLfQ72VrdHcj7FwX2H6JuuH1hMYeabqGEqbJBw4jwa8teK3bBKB9AKCPQiLHi3VP5Fc7GNJeN5KWNS3p7D5L3dS",
  "key16": "2bDAPKD8wK84vpwDJg7FL8UESLaGbvYVW9KCCuSp4M7kCtfiQM4T6LWuCSdHwNH7bT3bPL9wpXZTLkcGA1DM63LP",
  "key17": "1sVadjhb8Lf6b8ypAJjqzerhTkVPmh59W1G4CvAtxneWHNnU1jRKZEoZGkJh4Z9dqags1y4WSfBQqe1E3q8xXNN",
  "key18": "5BGizutJmSYBddjaPft56nysBCnbUZS5XBJ7Lp5qZYeXmd3dMcYkooeuhs9rrF7G4GfjghicnSG85sHqJo5qNkAL",
  "key19": "EVYN6bZDvMdPMuXDs8jyfPVYZbkcpniYQisp8NvdLRmySDyScPB6SvonMPC7jP714pd8fYHtEcawbaQUCbrATNy",
  "key20": "2jRdhuSRdbtcBAeZUv3h2T8wfQp9CvKSNAX9dR1ESdPFy5Vo2AFZGBS4HsQKYNqJmyvMJh7uvuac9w93g4DGejJb",
  "key21": "5wTXkzZEmWRAjMDnxNCZSWRptrxk46LJL1onhJ917SfvBFYUGuGa9dNQsPReVqR4GHimi65Angj22FQf95S4pHpW",
  "key22": "cyLar3r9rtzHzjhGMMLUZMJoqCHW1u8y2jQNgcTeXZmoLSuYebMxooiGGWWtvDgdULcCSeT3uNz8xmty1GrekfR",
  "key23": "j8RJDHTUa8NuYGUUrDUoJk8unPhNBf5zEY8bewaXqamq5P4n9Ci3PNowZAgkT7TGsupA9QS24Ey5wF4M7RDiFwQ",
  "key24": "2qZwXqhxLiEigneXNroYYi8Nh5RZGSKhaKGCMDNL12nQ9GVH6oa9N4dScjmniKmqo4ug9W7r8RfixCk8VWEHkAts",
  "key25": "3zNeeNqL56tJvjyGMxSLoXmkcYnDDsWrCoCAVEt4jJfgh3vu4AHT46WABRKVx9ZKXc6FT6HeiNt2P4LNM6niQwaK",
  "key26": "2XvRvzHJu4Ttydx8Jr1nDEWvPeCvoXtsSbv1sfSr64t14gufrKsbqPCXKSTq9HSarMnEfSCHju7VrNGTWRuJUmS3",
  "key27": "4359teVSErGxnwwZpx8LaWnVNUvoTkyAfaKrHczMBW8EXdK3VxJhcjWfLn7oQxaeKnuToU8C2js3bC8d5WeBdMni",
  "key28": "5uRKcmoMSxq8SPz3b7BAaDcYnB6QtW7GyU81noXQXN96R3ZQPm9YsKnSYvWkdxSFMdW6ep6adJ7NxZhG8Ktq98KY",
  "key29": "4Rnnxher7XfMTqMp61HtoGRygNDx4fwY9YemTNRNkuRMGsK6QsnddWXs6jZb3BrDJoqvkA9H5nCTvsvDMBjYdnVR",
  "key30": "5YjVyNektWQKdwuK5ihjdsiiisJqmWXnrSArYQSVC1XLZVPp3Av1xtxy2AgtJBEAbskpCoFx5VJY43py9NeuYvpf",
  "key31": "3fR1EQ3poXsfotTi84QwHXQ5tynGGWEvpCiUfaUeKeDXrafj8kwh1o3fQLT59FssocGWqcq1G6nbtDnxZg1DoYV1",
  "key32": "3Y9ZaZNmWmjk5Ddpq8Zvs4ncjKNNFtPhsSp7sru2eaijpwWSmPLdMNNJ2BRV54JAV29WKEkv8Asr5gRhaZwkj47H",
  "key33": "5BL2ANahHjmqPtfNDm18RZYhoWrYtT3r28csu1Hbc9gTZFuCCKHJpvq3LWQfv7RHpBKEW35JBXix74y6jdGzrh8f",
  "key34": "3AHQ34t32jyPhQvfmr336DzjCHhKvv35zEi8vctg9cyRTdtcPGHgXvEPgbfYYLKQVSfKs5PLrAts8aY2KrPsJKLb"
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
