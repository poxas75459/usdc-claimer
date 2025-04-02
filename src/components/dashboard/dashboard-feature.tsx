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
    "36NTMFHMxJWs43pxraBcajn7Rw6QSGru7hpWgvHgYhomb4NK3NWqavHSJNeqtUux1R4U9tP4xDBfmghnNLUsws2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vroyiSfrJ1ntnwCVdBaZZWBfvTyKJyDSou65xg2RVHdpXXZSMfoirydhfozNNbM7zDWpbgQh1ffEeZSYPexMpet",
  "key1": "5se53YRz1jqqrQZ6j9ZbDGUYyM5z6azEwuT4BguHki972rGvSCepGLYrpQmUbBsHv9MgHAdqqdb9MkB2xA337nkv",
  "key2": "57JVCPkho1qW4SzbBmGsWFxFVEWdn3qLDMshxkDJvSKgZerd3pqu2mfEe9zdyc8AxcoeWVi7sRjKEtGQ4eUoCpCa",
  "key3": "vdWyjXacLKMsaZuKdCpKbnP5N8zEJFz8dkwAqcoP5BcH9Qu5yRyq1Bm8z9UMEdxynjcN318KYSwg15p72wLFTpF",
  "key4": "cWVFywntFzcXxfye8VZoZVQ5V22XqDk2WMDkAPKUMuaZ7cku6tmVwk5tQfD5QpozotCWwRNwf7WT1N1SfEood8U",
  "key5": "Bcxra3DJ48v22J7zxzSGs6YvvcK9zLMenWQai9xEbKw7mnQVUXzifivvKVvS6RzvJMqpRknQwduU7PDvRWXbctA",
  "key6": "vvzKsChA14UtwiMxUiRCwpBgorDGmCzJtuKp9pNr7QRR5JtGf26WPfBAv927jM9E3pkoBtuvyhRSMBWmPRf3MRJ",
  "key7": "4SV9apmUDhUXSQ7zrX961Wwgr2UMwZdGrLpwgSALQxunxv2kMvgnHPrKvVKbbB9fEjPHysKrG6EFdiwTGG3jtd2G",
  "key8": "2xLaMqYRwvPFHgyQx9e97KnjcXkbaZ3T1eX8qntYXJdztsvAfrqSixi1AKejiqXaEP5q98EzCyCqUZBF7ytyzkop",
  "key9": "3ZnXHgajippv8NRpndYsWLY6zfXKF4CfqUhZubop7FfKU96CcnvzixS9HNCbpmsaWvqcuWcsYkMAdHXqqgGVeF8v",
  "key10": "2Giakk5G8H9rugDDrHe88CG5dMSDguPd4iQ9p2aA3UMTjPsBst34rFaktTDCeoTUphKaGsW4hgRDT7sv689TNSdk",
  "key11": "5H4YoqaxJMZHpS6w8AusFYRvvxuEUT3ntbhd3cBNVJgZUS9kX4N7c7jQ6VqGeDfXr4zT5pZjp2ZNuTQWSgyBx3Z5",
  "key12": "2vutA9CqFrXcHtPh9JLUNFjzdqGutDFUTd4HTffmX9c4raN8dc281fjz6C7LK6gAGszPogokMxuuA5MB4Jmb8jGK",
  "key13": "5MPxeywULmeSye1nzXvsJh4keiWCLRBy5gScG69HGXge4JtA29WD7aoFSnWpSHj55Af7iDwoq5fmKxrri2ZjV8Pj",
  "key14": "2PuVVnmoeT3DWXDhkoyDGnp7vAs2u1DdVtGuhGawFkSwFsNZH4Hen4hfNboa7uiHK67nLUpLnrTA92kMedtkCD8L",
  "key15": "5yWkFxp1MESLVsTjGKLWM2nfwj1dbhgnDNiVpiyGzktG3vCsFV76a87ezRWidkPHaVn7HgRAuQ2hJEV3b5PDhbzq",
  "key16": "4KxFnp2Z7yyUiWUqLLH5zUVgmKtZL9DZ7nErdESqVdyt6V39NVZ5WfPU3RFj1jAaYuH3HqX3iARkDVu43iJwpJj1",
  "key17": "49FLBz6BikFCNqYr2JcSBX3stQQ2Y4kVXkfJmZ3A4pkPfdt8ujD8Hf6ePfLUeDPrwh6H1hBPSVqqBG48Kb88qnjY",
  "key18": "4wutAf4QcTDJnKR8xA2bo9vEgWmsZ2Q6G5jx1vcsEVwuKeWqig6eSQKrrR77WoWGgPzfkeenEQxBdHbZFMocvf4Y",
  "key19": "SnrjnzWH62wpSSAywM6TczRhcwJfdziCcZcxLkwuZhybkE3ceKGtRjS9xLovGsdCyE22mjnMRwUBj92YxkByi2Z",
  "key20": "3i1UnXPnof4WSSKe34UvLdzQVD7mowvyyJbzgKoaZWzeYoNfnw5y2tbpawZmLcBzhzFq6VGAr3L9Vxbb4XoV6fgW",
  "key21": "3oy17TnqwR6B8LhDNUZ1jjsoEmseTJtaA9syQAFUGcV7tmzSr8nBodf2Nna363hSnQSCvRWrVErqSc8JMjbUi8GM",
  "key22": "5KNJmsXVovwTa3o28x3C3Tvvoo3YkP7m9qeczTJ4qRvQ2s16ix4byLTRNsLd8pXybKMXQ3JHaocCJh5cocxtFhop",
  "key23": "5Kf8Lm1a77KEu5cqsh6zdT9aMc7iprHGjHZGGdv9CqvwunuNyAPCPqkqDhLs8vM5vRj6pgJKgPufkCV1K21rAru6",
  "key24": "55uN4SShqYCo7Pqj6U8fr1gpUpJNrAdn4UDmZuxqcxzWYm5mo4qjKqSrFPCs7kXqdW65ypqrBAMrDsvGzAPuhfd1",
  "key25": "5AQRLYwtsqRrEJ66WRyWYACxS2cv7Bh9eTgM3TJmCPKJF8jaLdVPjohDZh78hENSihLBZYDcJ6p7ZtENJhUaEhoE",
  "key26": "9YZhM3EfDfGtqMV8GoKBHcMWUwXts5jxUjPDdBJ7MywpCt7Pi9KeT6N886kVKJi6iJFiVhDXJa9QT8YYAQLAPBp",
  "key27": "3NWVPHeZZNLCGfLQrrY73Muk7yPbA8thJoH1VvmLo36qwazrDC7RszNWnsJiHwtYitRgscTtRWHHBbEXDVh5xtie",
  "key28": "B5tyBwMM5T5bMChV9AoPGew8einDqTCBrZkkEee2GdNGxMbzoWcK7U3Mwgku9wB262LV3XawTxaHnhYgwSD1pYo",
  "key29": "21XyxJQDDiECJajuQQVCKijCG1S1NSkR6HoY8omdHfZ8BYB38At1qLioMtoJzqTubHHjew55R1Geia4fg47ZaM2L",
  "key30": "4fBv9pUqtrQ7daL6kUsn4eg4RopuQf9Xm9xDtb9gmd5SDNcSqhpTQ7REY1fs4MByWW1srimx2jd42tHmQ4BNTYJf",
  "key31": "5bh71J9ydy2qBQNTke516wP8Ap1at7YHunrrrCQdXubNbfP998F3iQkqPdXEQsFPVCsirveptYjE7dq8nZy72rQx",
  "key32": "3LsHe6ahk2HRS8Y5muSu7w7HKvdwb9YJTh3StzGRzk6NfFYyTCWCsK8merQWSkmqEBgeFWUJuXPTh6rgBxC6dQGr",
  "key33": "3UYDsAe6koJqaDVg5fF7aQVs77jjtNVcb4RDqxiCSruGsCAobHGhpPZnYZmdUMYG9wYcBRFooc2VctJyeivMcyMT",
  "key34": "2qJEpgeaq5XuniXSg4D525vLL1Vhn5BSLvhe6d2Sicz5NUBbxPxcjCupp7sVeRJXWEfn6Ym3dkNq4sCNHM5Rtm8k",
  "key35": "QHi8yJGUC5q5VHW2Fx5apk4WYDQgCD4Gx4RkTFNsgqZ5wa2ZPjQmdKWRGZ3GHvFBuPZ3cWfRk6mCKJBkkGTS2v5",
  "key36": "429g6742F7CCXMWwJFSAcCzh6wJk1Qqi5AsdMUzDHSjrdXFJ3Vv5Sea4muE5VKPhfx4YjiKebQtV1TVy7x7afjre",
  "key37": "2U64XsjmvxNNpsStD4RZ9LL9YLkrATgTWbaBngGsKEW1fS58Xtb6KtbHsc2vXtYo1BkgNY1GhCZFE4zsNqUPX8Nb"
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
