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
    "5c2gDDf5LfEu6sg5LzHNPP2oQnjCbkAbVELtBKA5ubXmZa8V6vvEJuawCRnvUBEaiRqMTiqCjtK74XASqipNL8Mc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NuNtaf4wYE7DJcNkDEKC7LRCyMb4tNm4Khhn3VaCUbe2K6wP31yfJiHK2RojUuXrmm3Yev8GTjAJHq9qYVPHn6N",
  "key1": "24ZuFoq6nJCRrkw2htgdUP1AnL6DRVWzVHEgPeX63nmWwNJDFN8wVfEae6k7LXU8WbCqebmUBNsfnBLZT6vgejem",
  "key2": "2qbXXbGtnW5g9xfpi7Ho9U7D6qkNTztU1dia7raF2bCFZSkf7FjpofnwvYcE5d2T6Rvz3Ey7G45JVLUqFfQpHtHy",
  "key3": "3xF7gyWeb7pCKtqSdACdB13TZFMcwAeDrjQ8xnfCmaurrzVJZ9gPdJPvKAuUyVRHhJbKuhMJVYLQX6wfebqh2UoL",
  "key4": "51YS1Hi82w3Yh2yjLT49tyVDG6VQYak2pVbkYkZePfnTLVzgCfXonQZz6T23Auqa1QgLz5n9vBu1MMUSKx6JtieQ",
  "key5": "5vg7ECDVyAgnfHTAWLyKt3NQxPn4NeBk2VJYDxNYUQ3FPcBRWR9yEdJxAD9ESW9YxXmKTUJpevDH1rFtqEA7734",
  "key6": "DTMrqv4R5WnyaXhUC6v6UkCAq99kXK2x8fbAHLF9e4yu7zE9KwMyhC4evmxCyoPbeQJK7DLS3yEjnA7PoKzPP61",
  "key7": "3r3omvg5atKQGYuUNQhgQZzaD6m5p22TRaEUj2GgLmPcm3cCnHtqgP2d8KBickwe2Vo5NP7pESVpSRo2LMoBzykk",
  "key8": "uUUGZJW46nMseNAHmnSJfMhoJ358scKrB576XBmF81gfhJZ814JsPFXm3Z3DKNRzjvDAKQfyeZULUNG6UoGnQ7X",
  "key9": "jBG5RMPTxPYTFh3hXWADeUt2MZuDpHm76C14KKDLhSysS3TXvLeoxywwUd5HmTtC8nSqroj4ntHRnk1S5nnceD1",
  "key10": "58pwQv3a8ma6z3pggj8Npgr4amxtSoXwvADiT9e2LtvBEdpkjr4VJkowHsJyVcqv1htHLo1ZN75CFm3LhPyL6HzV",
  "key11": "jd6on6dFqustW4Eo7ZnWbS2Nco3SPSqhTKRdPSwiWUG3DcnHXHaPaB3oMZ3rhrofh9hYqXKANFMZKwPjvKd4DBM",
  "key12": "5qwnDAtmhnuyXfwUMPKU8tkanvqT8VtKwmVn2na6STLwiA3eYhGRXyeBSYAYqsFgWFyDWRs6oXXwwKPRc1Z4xxNe",
  "key13": "4azbmjqdFeXGqzwSWF3uzxSTqrBjsw6xchrssgbqjrBYkCAq9B2pjXk25fxkK8Gj84k8uDrYcoTX78WHQ4XZP1nF",
  "key14": "Urh5LS6hQBqT5c6dagwdvQLrb7khSzPUBcLFxJSy8eDDPc4vdAw3iiT5nQzXxUhpwQQgm99KbfPMb4xa3spsCeB",
  "key15": "2ve669zt3LkGmGx2R6GDXnjcWkjVcGoiEW7EEL46JfYFL9MNjj2ENb19pVpggWhid2mCJjwsSFuoeTkQknzDDMep",
  "key16": "64Zh13ofsDgQgxyuXzXgpUMDhkkCKq6hvj77UkBPptvCqrmsbhfoC1GZy56wL2NrFyxPYo83f1NQnc9D4mE8Xzee",
  "key17": "636t6Lser1wsbWKG4BTrTdjHNVkABZMyrDpRe7Z9iaPRqawKCGdSeJ22D9gh8KD3oqTXWKsAWhJy7SBik7otGhn5",
  "key18": "4DRKQo4HuRVPC7NeChkBwnVL9o4c1m4JhnZG7CUtLQ3gZvwVik8yHjREKaFXFKCm5U63DVPcszdWxa5Z1CbFmipw",
  "key19": "t3DpCpmMaev41EcJS3CPa2y8mTJ6oabzwaji4jfZo4NJBAoTHSdgbMYxWnPTcnuAKHzFLV3xsz8JHoKxcme3anN",
  "key20": "2ovMoytxjTVWzHb8zgHJfFm1CGnJeG4w9gvPknmAwReaBih2yBdWpb3G98XKeobJpCLFhaGZjSAiaKQFmFGMmb2A",
  "key21": "4zNJqiY5RiHQvNcFLb3S5oMYKNLm8ZUAX98fUnmpkAbpHcy6aKywiMehRcLYfBRrWnBw2k4JCcvwX1W7mbuomgyy",
  "key22": "ursYAmzEDbw5492nULCsKEx3b2kuk7X39QRdBie869zjnL9gVXwktf41ynJWTgwXbhRoMvhNrpenGsQazN75dqZ",
  "key23": "2BGHhU2c5jdUnCSYDnM1V6fjHrM6HyX6pxEqrLYRSU7fZfpA4tGQmxK4jg269ZvMAB5LYytzm84U35S117uRhBe9",
  "key24": "3R6HFvTgsoSiDAHCK8n2dF8xPLszrY5acfxByNDXR7nhyF7Bj5ESzyTNA2xMGcQDH2fEJNAdGaVWgzmJp3MhUxi1",
  "key25": "2WGTjeumfJiGj2b2Ukoep1qpjqUwS18U3fexz31c8uwaEcgFAQ8cNEtwJdfDpuLiermafhKD1NAXBcFybLmdxYQe",
  "key26": "4XLGPGBotRE2t9rnZ8sj9cqYSwfFFS2KdeUZpx85t5cc5q2mX8iQDY8uLSYUBiLtJuiYPZZaspYFvq6XP8RKdcRW",
  "key27": "AVpQWL2k3NSx7i3jrAia2WazDZZ6HB4iQ46JUmyfMJNxNX9deG2kfb52iGTpwneraRN2FN62YfJVL28qET7BPkS",
  "key28": "mxTmPxAxrs1zTiL1rgsjcNggLtG4VxRzzzEUNJ1AicpVNN46fXJukBWm8pux71fPwqAtY28S7SdEuwi5xqHuTdr",
  "key29": "532dpz12geqRFmjyyGWsRtqiRFCRiAD3fkRWfG4pG68Kjv4RXKUGdaoqKCeCT5VbzmihktGJ99e5XDVoR5QN5HcL",
  "key30": "59hZXBDPkxpcEG6XDwhrwtfACCN24z7bBJmD7ye5SKADSk4BURBsw9F8NQjfSiReZEwh8frvisUm7EDEZCQMTpw3",
  "key31": "bjyWUo6uGjSio8H3EjMdxRd68w9deSzByd8j7DLTEjUfo22bvUNbgq2ZXT2Gu5Aih2Xs28w5wLd6HXhFa8ACynp",
  "key32": "zjaFgQq1CVaTUZNupSw7YLMMSJBtyDAaJVc61iq17GoaCfiGy8d3bmZ6RoRy1oKqBujEhTpJG6fKzfvd5Ei3ry9",
  "key33": "4pqjtQ8J5ZK5NosgVWm2HfhDSzPQRJwh9Z3JBEUt1r3YqhUzFm5rqsyVK1xDp5kF9c5mZ9yVzo5hHRLZ8c3fkZr4",
  "key34": "2EDyeAxEj9XkiUwqyNnkaFPHAMyKrac7SJhgXL3oJNzMkjJS9VaWLcj1XyBRQm3DEavhcQT98Zxhi6NJ9BYYrrAn",
  "key35": "2a4bPFtUQPcZrXF5R5EAQCGHVyx77vQiH7kG4FgBrqq9nJgY1bZ9FcAjJepLsS5RM389QMvKXWbVCkVoMHvjq8uk",
  "key36": "5jmSFqskuwDcoq6bCzz4cMPZQk5iYWkuVzTKMzoRNWMSAbctK89jVEbecR1uT6vGP5PtqwiqyLcBuL1VT5Bc6iRa",
  "key37": "5hWwC28GHkVXSeF4mDUg6sMHchukRbAqE1BtyZ5ZveCFBTVpfLMtXYHqfxDTijWD2384FMQxdtaSVr7E2KUZBQkk"
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
