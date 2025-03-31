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
    "3v9QSBpGK4UGsPfgtKG92YYpLWoyCZ6Wa9iyHguz4BQkZxhgakmPKomjknwibSWW3yFkrCkGxmWsN2mDtZYLRJKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qExZFkUiM8Kc97jqiLvrD7oyPUstCEjbgT4FWbBRmiuMTNbR8sUuTrrMRpVt7h6hxskjCkriFijQT8MTBtSrUbE",
  "key1": "2w4tt7sxNocaAR4ZLudz8ooPzbCs5UVhtaVDFhWLRehW99M8piwTZwi1PPfeRe1hwoeNMBdMjxhhC5Xd53SGXLck",
  "key2": "3BgnmZ55kMS28nH3D95wPuVQkGnHQZNpMDnRCnbCwSMCydKYQBvg7pp3EX77EPsr1agcWcoMei1iRMhcpUEAqEtZ",
  "key3": "3kN36q2fcbNVsEfSRuJJ1bjGFtHrvKutixGtsXQ4EifiGMuXE5ojnuYfLBezekKMXqfsD3TGpcP6FFNBRqvVLd9N",
  "key4": "4mCXwjcjQtB1yNswUauvf6qJrPzEynqgxz5AMbUrUX7CaFf61ctag2L8hK3urE3wydzhCWqUjjbebh7LBpxUEAc",
  "key5": "5hNrwrskNMfwgs6PLs791j9zdhyimeqo3YamJmxudbbLMdFhQLdoGNdPX1FgUHdg9oo4a4brEjpUgZHZ61pJ4gUL",
  "key6": "4vs7p5aorh85QbqwtXUpPeMX7a9NFikDzXbWfqCsMNtCC4A9MUg5noyaKJHeoC8hd5wDyapZwRrUDpDHJiu8m5Ji",
  "key7": "3P2G6Wz3eXsN8vvLtP9cjbLfDAZGPZTYN7d2fBJfHWJWRqTbhFff5fZqbviB99WYerUgSG2T7fRrUd9R9Qb1mS8N",
  "key8": "4PAd9sFGbEZEeSGto6XjsK2e9ZdqX3SA8ASCXfoPapGevFcMxjyyRNTqMVwMixrYedHEJgw9Eufjh84MU2HiLUYq",
  "key9": "3zSpa2Zx8daxTwEwDGK1yZQ92nW2SoP5knHA27EpLVJn7sHpwDimanNhu37qaEdt8NTADkMnKUU5K2LkvU6unUQU",
  "key10": "5TBR7q8iyY2nc8ANnD8ciWQqYNGqJVWEMv4LvwfS4bwHMj4MViaiZCKTDqoXG2ksUgejrfzp457bDG7fWXfn8tDG",
  "key11": "3ZrWcSBDypDgPJA5D3sSVUMMbNYf4oxj2AasawDfHsP5sC8dGkYNSz5P4szCvsroGYM1sZYxY5eJNDpFg25sNiAC",
  "key12": "3NL7zh4W9myNbkozfSVB9kVxLrJcFsyMWYLqVTEp3x4nUoUyBtQewbd9mbe5HZRBQQeUMvWy3STHPvRhfFLC5UY7",
  "key13": "4jDaCFnEXcLfAC9X4H8u6ySE3kfSH1BDyhSuCKNQ4FpMAwrvx8A2yVCWZUPGQoEYmCvr7AEk5WGvx5yoMB9jfQSr",
  "key14": "2nTQ3nWF36fQwZo6Ueqj6iCFj54RX6fHLUUKeUCk5VvZ7WP7m7zJU9SBkAkoPwjMF29pnLwqtLr4X2a3p1VktGZF",
  "key15": "4A8SXPr7FvWFuKgZz9aQqaTSohPnyqGen75acoXgTmjL7rWpz5vhf8ZSmsWe3D9u1cdC57RQQFcvzXYBNyRLT9VM",
  "key16": "5d8Qn2ZYDQWpkzKTAcNYxqd1FTCMwfCTkegAF5v5bv36wFLYCGSvoE9K1M6ksYMRoxGbDtWJEAsKFAnYE9UgJHty",
  "key17": "1jJAnefH4uEkecVqt3N7puq2JMsKTeEkyzXdJLeEYiXjE8y3zrHEMBW39AvTqfsnqy9L64FbyzHdWUSKkwAEXC5",
  "key18": "2oWNNDaVzu6jNLd4esrDx3oW8o5iYpESs7dDiBRR628YMN5HHMqBpF8Gtnw1LHATcH39RCgtGn5x5kvhJjBhHMP8",
  "key19": "4h9Cpa1JCnPMtSBPg7h11ssJrnnhrfZEWk5xtVwpszxBAT8gRKR4XJ96UHjqSemKMR11JPf8FY4vZobfUDY8Tq5V",
  "key20": "2NzhzPu6e64CaeGSWo5q8n7xm5W3Mz4RL943d6LGPWKs2mNFVUN1s5oHtsNVFiNBCMXiDjyd3cy6q6QLBWWR8mZg",
  "key21": "2LrP416pdRe4JPZg5GeTmDdMBgyLUVRUgc4EHhBFLUKs7j616JCXWwdPmP1JbaXQQyY3jqibitKK1CuXYKc3KRUR",
  "key22": "2y7uruZPuiyuT2V6L1VZUHLMLYYFRvcEY7cmnLwq5QjvqBbXovWnR86ZhXLLBVW2vwX3SrRL6VcVRTCvCGLuXcto",
  "key23": "5aVMGsqoSd2h6JJ4NqyBRbiasTzqvtUHjsDfEtGEiPZLbRafshiGjiH22kks7DR7mWrtdL2chaafHuUXk1vXdQYY",
  "key24": "349YAswfSztVceFpPse6F2nQCgBTHkcwvizGerBZ1tqTH2E2LhdVcUCQc75W6ff6LM57ALsuJa2NyZQEvtgBqGoB",
  "key25": "2vJ3mpiKx6xHx43pHZSLWEKog3K76KCyacMdVXB87tpLrL6i5vWyPXgH1xveM5E5KStA2vuPiTZwRxcASvJgB4Mz"
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
