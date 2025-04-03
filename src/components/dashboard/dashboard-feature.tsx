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
    "2TQN5xynPw13pH8JSomg1kxHJKm9H1uBayjiyzp4uJsoaP4yHtGnTy9rhf3tiDtrEPEAxDj8236iP3igpqdUqows"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zaLa6DqM3KJZRCTMUnXU66drt3KDtvgph9Db4LJNNZKiLHk4e8oUjNPyCmr5dznoTeAxikzYzTXvWwbstyFnKPh",
  "key1": "3NjJzjT97GvmLntZaLUgngy1d7VV9ovx3R426WmAJ9TKy8qDxbHtmswqxmT7MqJCsDcoomB7VqGyBnteNTsam2KK",
  "key2": "4utppcW7EsSMXT8WiD2b5WFYxgNEbYvjgMDvbEQp353fb8vvMGaitFPnamfsEy2wnxqonVq44FaBzFvhazxNz6bP",
  "key3": "47fxjxT66tYkPx1JtEHJoeYPLi1v1MYxKWfhhTDTf8qK6Le6sdoEerWHbNJorVgcCfHg1yuaxsDgJj329UxCZ5iP",
  "key4": "5H4EjESLiwPDSEPXYLacN7KdMHxBHw2STYaDbkQxNVrEPfHiuQBfkLZQbSPweusE1833AjpijTcmiyCPiKCFMtss",
  "key5": "57CAZYCVS2phpTFkCeT2Do3EMkvbnZBNcQ3hfFStzZkBTTMGtQNDTDuZ6eJbtvH4H7sM1YpX3WLHuSok6YeJKUB4",
  "key6": "1PuborszfDHNgKvLquRKGGKoL7wp39Uea2cXCNRRv6YYrFZQdz7urYPDy5xb7SqTVF91RAJdHjWBc7oit942v3Q",
  "key7": "5bzDMTQk4hbDmbhARAS5dtfJ5seygqqYjXAZtbUo2wv2FTXXHudsXoTJEA2JPEzx9ZjYZFifrBfP5dUMZrL2QeQv",
  "key8": "5ESdrLcDunSgwG9sL9pFjeq7CXrFBnGxFc9Z9swD6hL7RjxusADRQhsYQ2aEntgwHNn1dwXCY5EFMWTM4nxfxaPk",
  "key9": "3uwuogDyBM8dD5KyT2TL2S3ekFZN776rDcThMNEXwieMKZoFa4asoDBpZ2UcCgcXVzF5oWMH3FGHtB4Yv6zVSVYH",
  "key10": "s4k1kyf2zKBaF6zATg7u2KYQtE57gkdHAVf4AG2joa5Ai22K7RaYxs7KNbxU47sJhfeZVtntZTxASGYBw2tm2ov",
  "key11": "4zYgSNuMQQ2ME6rZc6Dz7Dmaa35Nrt4q3gd7fDcbywyfyr3pi6sWMci6US9DSbCQUigqezUMtz342EaPd4B9SiVa",
  "key12": "4xv6xgFDD3wV13EBcC7iRvZGxXL2BTzphFmoa5qGnMCGzV7itcSQqvf4udCk4PbAFsBXo9nAhYHRLcqqQpKFpFck",
  "key13": "kZ126CPJMt1RYiBFM9nLLo9XfDcoDugB8BQ9MmCQZv8tHcUkJQv5f3X1zhyW6neTPcnX8U9pVmoQF94aGXQdmHF",
  "key14": "MxRpMqkHe1EPbLskJv8oFPyKnKC5oc93xXJcNeSDef2eTktCgypZB2TQHLxNtRZ4u1CVxq9jvVqqnsXxVesFXEr",
  "key15": "436bUCg2sweWH8NAN24tvgwdgFokzP7EnCSKUQfpm8wZLmymQNo1qqW2ppvdsjgfT1PnsvA6KbsFanJGFbvV8rwj",
  "key16": "2NfC9bwHt8ChbCPA8WFq197B9gt6FwneEVX2gd8ZG6m4gNWKuBD3t3TmDoG2FYDjKhV9haYy3yaz4oECrErB8u1B",
  "key17": "4idqEaUZWeUh1mrPLeLZaQzDRGFnQTt4r1sUVBXRzQB9F1PK8cym1XEo2pVt2zQWWuPgcDh5irzu5qH2vkS6CQt1",
  "key18": "5rhKuR9ZzniiztGoKoaNDzRr2xJ4vxpu7GBMhi2CBDsBy4cgAmiah3TVEgXPpLUwwXnLu17aavqUqJH6NX2fs1uC",
  "key19": "3y39Kp6NG6mvuRqSTtsP3CRDLABnLo2tBWVykvuAhV2buitQ8o3mxc1PZUZCqYE1Q3MzYVwc3u4qNhacXoNbHb9Y",
  "key20": "2iDHRQsTeowgwnjoYNp2upZsvUMppvJXbM5QPoocsxfqCWT8UzEXmSrkBweWHYqAg3aag5CLeB2j7aKXF6XHKa64",
  "key21": "2d7C1J7Eu4SHEyDdVjrqNcRb6xzghgWo4Cfda8BxYHJ2dBiX4KJNzAjXs3SiFWqrs5ejDrFXQfKPopvp3LCTEnZg",
  "key22": "3p5q1HFJuJeXXoK4m82ACLAJhgCk5qLvNDGjLH1xrRBqBYHiVN3tuSa6i9Y2CjLRs5PnTXVbj3qjJH5EsWUGavUc",
  "key23": "57jjGutqF4j619usrS5GT8B9731RnZwCGcaGAxRZqXuf5Lx1AVBqC2NLu2EL58RdE4GwLHcXUgapCzkBcQh9Dzq5",
  "key24": "4NMD1cvFuXXY8MbNa1baD6GhkgxitZaoVaWhMuW2ZuFeW5s3vaioVdYd1Vo5oEhPiLFX5R4xuCh9EyJQVaKHo5Mx",
  "key25": "5t3bjNZodGx61JfAxhSmBiHTBnnjaKmjwNfggLzT5XZNG8WP1NJQHmTaXBKVRkvyrhNiq6Bv9ojjRSgqdDvFraAZ",
  "key26": "TBeW6uq7uUNskvrBZwB5KM1eM7YGbjuCXzrzBEGvw9zT99FM6sf7EQ1haL19bCrXaiXqLgXGWBfGg9rSLUvPJX5",
  "key27": "FvKuvZhw3TcQxjye8mrZEZJDgAGeT2LXs84kfw9nKddZ78eL5ZH7W7XcJzudAXnMSPYtGBg6MFWU1eedhM4Zrk2",
  "key28": "Voz66gMfywcE3zSCeCqZjUEwdENw7zkG8teFagfG8CqiryTKnA7MFjoyKgiBjTABcpEUq2h8VzTApAX5AAGPSbe",
  "key29": "2MXpDa6Xvn53Fkwjv5PK6VH1bpvaXdM756jyFEzU83cdAmRfcnY7iAgB3psDNBs61i9oSXhsS4nVoEGSbPsocgPE",
  "key30": "ZTPa63kMD21qAvHYJqazbBwjUBbHpzRsj9YpDiPFQRFykxAQkxVSPQNe1NsexBbLVkkRdaCjGjkq5FcWbkEZ4Ci",
  "key31": "2f8rrno1x3z9h51jKx3YPff7fSY8gJqGA8pVGieVdBZAfitWsE7z1SkU9wScuuBifb1ATne8FDVwQ1N5tQaWT6dA",
  "key32": "5xswzXyRGdQ8FGeGXMbdDZ2g1xRzG9QydJKBwzAzgBexDPfXR1EkWvJmUeSMuTD7JtNZHUpvPjA2E1rfey8xhkha",
  "key33": "3R4UuajDWHXQK6BSGMRBiKbEnvCXFcbqNmFPE7reDbupAAmg5tAcvYEP81vB5aKN713RDaC323cEReiV4qwLmPUw",
  "key34": "3P7CCcFrU4yfj9wvqMSAdc9BGBucjhLTYP2FUBbFbtNzfAGxb92c4gQnxTgW5wCiXeUQxmmz7ZNsjtYMuqT5pvPa",
  "key35": "3i9cwBS8mDVp96yWxMGPKzEWPEEvWnvw7JDVaH7SHDFdgveUyEmw8zw4ydxi44qc9twsvaZhyRkyhWLuN48hVf82",
  "key36": "2fAWRNNbr1TjcfZxZbagshK5JuDi8iESwKmNNTeue3tuGEfentt5udQS1A1upbkZtiaLof7r9NhTrpY4FSU8RbMW",
  "key37": "bEDuAwft5KFenUGngkoVJAiiaAkDkQoTgQkdjduLbu6AHXf7h6rVJABgedQhmsAzys8jPFgc9B2s89PguCUtse9",
  "key38": "3eh2Ur2YzbhLL1GLkM5n5c37tdDs4zW3sfNYsMKjioAp6K7rnfbTAKPqqwuCa4Rq9QMH4urZ2FEn1L8ghx4LhtvW",
  "key39": "wKuGEKvVNgp5g9ZgzfXcZRsxTuuxxhzvCCLaxmr54jaeMnzPmu6zZFP1j965kECUxpfYAtHgEx6M8qDcR6JRxwu"
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
