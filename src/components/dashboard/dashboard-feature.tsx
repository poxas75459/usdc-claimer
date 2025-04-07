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
    "536AQj8ZreUrTt2LSqDWd2bUuY516u9umai9zoWLQQm6w1bAVmLG1wSc8V2Xguf4fQnK53sd4kE6a7YRgK1PAYMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8TuffmgMZWrLeWRoYGLNrraNEix1oDbW2GwsY4xEXbTWSrSqaNw9QB9dAjw771fNdKfSVRjGRQMZYn2QgNTNjBE",
  "key1": "2XcVLvYDHjH9zoXctBJbkbWGv7jCWYQ2VtZznfrES7wcBe9s4Xwn49pCnXwL6pUfN7YkEgDAbTPKEZNU4rVCVpwd",
  "key2": "3Xap5wJCtSXwqVptyNsv2EHkTmRvV3WA6dpYUuDPsVW4uHaELbtKA7nokK7Cg1fmBaNEy9kuuxb8pSrZZhYqz5wD",
  "key3": "asx9SHLTyGT1jacyA7CmQ1V4GY7y9EHnyc8E2snr6wFz4d7uYRUfyYNLjNzHyDdbxztxhcdBhhP1uDcLVqrDfQm",
  "key4": "2Cfgn9zMFXYrtB3TzHYG6jUuWAftbYiDEUHTZfLYanD52yckXi5mkt4p6Kjqro46S38QES3mzSB4v7h3PMxJYSa8",
  "key5": "5yQ7LEJ1YzEsYVmXM2nS6kE3J3HT3ESQqbt1pimi62TPrdNjYWPyMR2aEqhJznVBskZDx9rn3Bn744apWwWEP9k4",
  "key6": "3HcFD17Vsgx9vo6VPnyRzmw2GroSjfgUmsmdEbZNQDmBrj5vj22yZjTaMqVvtHE5fnrWxoa7tsuGGVSTob6CMws9",
  "key7": "615yD7qxJpwhC5YtRMAYkSq33mY4iwonYuyPMrXMw4JnW3cVJhgud2mHZnnEaCoQhsLs2LqGNAtsih5SabxUao2M",
  "key8": "T89WUS1Yiau2YhTcxkjQL1aCNx1phdwykFq5XViMAVSCJUMzrWPVEmMwTeG696a2uo3rSi9kUoZNGdAY57oD22C",
  "key9": "57xGT62BYNXVKgs9EUhcmFrEYNj4xCJfvYhqDN3V97Vn8wWCjakLH17wNCJn5NHBvLg45PcbyYQ7yYqMez4xoEut",
  "key10": "YSw96mnDgo3eXHsSLeZv6tPvLgGJBbioFnSZp5yBuUp1k9mwGSEEszjumxruReyFARV2mXy5A2aNySfE38ECGNK",
  "key11": "4jCzj4Qyeee4raYi9Mm9oSNbNzQoXuy88QEubZKHGqqkzS9zsBEK1zCN8dLBBC8QVXh4AMWJPdLT78iW6Fx5ZNFd",
  "key12": "5ZpimdwRBeg8fQeo5BMA6gm8cF39UjPBhspYkfz9mgN7B24u8sEfoCHypMiZxEvST6ngBSRQoyXHdLyX9KTRyLuX",
  "key13": "p5eUkDTJ2wsBcKcYSseM6r3ePk1rnDDFsJrbWCgfEoFyqr27SFkMFzN6UHTvTJcURaKEemmCdxeBmNJ1G1cUcdX",
  "key14": "22KLAk71nNH7fpNKTNbUCxsWe3SVPcaiEMytUF8aectJ5GJpuCqoSL814Skr6CVs333ZawsZBwix8XUqiTJ6cTpN",
  "key15": "2EDVPSbQvVha1K3TD2fi1oysDEURcEUjLcQ9H2GKfwijKYu31bL7tdnib2UKJFCe2EmQiVy97v1pLESrqmLFrNry",
  "key16": "4cYgH7k4ZvhAdcovxgnejFvqdtM4wQo5xJ6iTUiM7c2kbacLofAVALv461UwrRsZVZkzfZEzr9hKW12ze7egZuur",
  "key17": "5xZMd4FXdbeGw6ou82JxzaLu2THxU78kaqyd9aEtD5FpvDKaixWQwZHpzcdB1VrJe6jMvP4SGBdvGeA8aFSAfBTY",
  "key18": "5Hp5tqqDvdCj9NGyCM4jqNqpeJHnKavkwpnGvkYTJzSLwda7SGQPFxQUTTpGrXZBsvKj4EwJRriz2Bdz1fnANoF3",
  "key19": "A11jA8Bzk9LPNgUeUe9seVSy5v6xWnwfwrFdNPT7e7uCzergH43QPx1S2rx4QMHhXm1PUVtdYrwXknzah4nYxTA",
  "key20": "5XrufBQmu8KstLhtradoE7YCEFVdqu9MUiWnoRBrzjNZstcrczNSYKBCo6xB2z4v22UYsWvLq7Vy4fW3ucSjic5e",
  "key21": "2rmUjjSos56zePcKmSx9chge7FAZq5xKn27vwsr1MdjTK2gjuQ4mPwntkgscAPZPCv33Ja4KoD2JR232odnR8zHf",
  "key22": "5931a1hM7xMLx8J4x2p6hiwyGbAfwenFVByfB4UScrgwviaQisj52JxDvuLcvT1fSNKd7SpS33ZLqc9s2K23Ng9t",
  "key23": "66TgqQRdHhRTcqkuxcZZJRHrcbXtYQSqSKdnPcC8Di7rY6sAw4qxuoVzWBcQN2jjVrV19BQ4kaunwCmsDEz1pAdi",
  "key24": "2aeydcJNG2xegU1NNUiR1AR5ZpHHmD5zYJq9wf6CRnEhp7wubiKLiRXnE9YngBDARAjH8iVSEQdQiGTUUeMZqdhp",
  "key25": "3SBvVdV3GSN2kCyXUJDZQSU1zwpQGiku4yBUq6ScJLhsDmwirCiEraiHM7PPASMjnNWEiW7TBjeZGLQ8JHUW1KXU",
  "key26": "4gsKXvEEjBnvDB5af5Drq4ibF9PYGthYJdJYnSjpPLhXTyqmVfQ7o6mLNzdTFRXgLd7r9SjB1hHoviJSbzVG7kwi",
  "key27": "1EDxZHKDqMuw5mtLMAgA88LZcmDF8fFyWkbqjzEm7sZrT1YsmnPWJVd2khjRhUp7Z58fqSsAbu3foaCcA5Njz7c",
  "key28": "4nh5JyRZpdjRXRpdS3iRfJAyDqma71Qhjqcjqq2eGWmCM6oGpPiYq3V7G3juMFSvdd2MrmCZKCWhX1C5t3sVND8g",
  "key29": "3WaCX9aARknsmWgLVrCtMSRHPX5az88X5wz5HSNUxXjDsaB5cNiBNZeooQfU2Gj6eLNNsMUJgJQccTbR8cR7BgvM",
  "key30": "F3pjWhoHcLxbEgaa9rfan8gch7xeCBCvGFAZkH4YXrppmjU7D84H34kbXxcGjMqj1n7eGxf6hTc5YksFLfrivzn",
  "key31": "4eFKHcXsRwxMgA6DdNe5KuvL8eKcwVPYxEP3awuBzQzroejuGeaacb2scrAsqAizrq2FrU9w3wRK2D9FxB6oa6E",
  "key32": "4zdSMFmvpjxK4EpgYczATmMr2YGpcftH3FdBQA2v7YUj5ey6bSkPoDH9tLw5oPipLRyeeNjpwH6asbXUeyCSy16z"
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
