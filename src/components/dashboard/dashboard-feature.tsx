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
    "41mifHhAZpZbc2YjwZcspafYVPQZGmA6RuAvR7xrc9ew9H2isMQsJSy3n2jTuE8SA126awt58PgKfgv9jMyk4KE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gg1Q2vMy3FDuWSJ4BxLwJBcoRs5M5i38WzQtLq6LmLWNK33Wt8nZDPDgG9tLixbrHgyPgfxucxcfdYVf2UEY8kp",
  "key1": "5m4pL2K9SecLwVzXzEnzFsqQ53YjPq5hH1e3FTSifyJTaSpVTKmB9qbTJLDtEvMSjZXHfQKSqLvpx91QvTZbrC4j",
  "key2": "2bfT4xbAer8pv5MPBkX7Pc7huST95JU3Fb2TKjHMZsd4UcEGPodHt69ktS5XcD9p1BWoiKTLm3v983FV1CWDQNh5",
  "key3": "2EVEowFdH7YNM1kbW9Fak5U7doEXxsGEqkHk7BohTkUp9NdjZH145AVzcEb5CRu4dDnqMMHFz96z9JJyTN6Gq95G",
  "key4": "5xaqAjUtcG5eW8dXhwUqWVcT22CGnqMJ4RhbaRUYBDExxYd4eSSVKijGRDc4qCcPFzUcZzc16Rfa22R53YXh5Ptx",
  "key5": "j1BcJnAp8NBVKihsCqPLriyTk86KnTxdp5MRttBu3b2c8zupbKdFq2AQG9m5eLehS8QAuqfvxcS15rqMHwVFfua",
  "key6": "PXzSWxw6gnjrRuhcBCkQnkd3neEjWa2Bw1NhTo1z8LpMzZzLcSNyJFm6CKt1x9Y3QNPdxjAFvV3HhztNUxjvqEv",
  "key7": "31y9PEtnq7G84NxHNKd7WVK7LowB74kB2LXFy3K1idCZ6a6STJ7k7HuK5iPbsByvXHezYuT57ZkPjFMV9gV3j2wu",
  "key8": "5kYH7LfFL9V151yyeLkZuVbtejq4RVSBEfHCkgH3Xag5GeLS4ngHhJr8YTvTPgP2wvfnQgWwQ72NL2U7kLHDEHMF",
  "key9": "4ypA9tu5V1MfXMxznuwjpsMfBVz5n1Wi8V9tZY13ToxNZtryYbbv4LX4HxwTKCyBaFN2NyRS7hJWUHv2s8PXfc6k",
  "key10": "64Pku8vAaLtnvohMREoMYjzgatMmQXd2pSZMwuQVX263f41TWbhYRkKNDRrHiHhJ95vAfahQv3kxgaUCpD9biPBe",
  "key11": "5h9ixmMnGChuJfgBLaYs8iEadWq78yeBAgWFE7BVVeXGE8Pe2boz8n9rdA6f5esaux1Yin6LGJ3KwYz3kbRwdtJH",
  "key12": "5YExqVR8t28b9fVNgrdnoNRUrptmLoLLZwTQbG5Zp474eoHVxejWKkDy5PocVtbKjTP6gPdpdeM4ZVGDAAu4fvPc",
  "key13": "4Kx2NbEPeGJCe2sgYcT8yvKW69SkH1SDXemRUEVMC86UakHtSZStmJEoi7JMmgbNzrGiqMZdtkxnD7bHp1paTB8C",
  "key14": "27zN8FZvAkDcj8YSGqLbvmjqV19xq7VJGKkYymJ3VUFYTAD8uePJqrvCxPxL4WHemyWE8JzmAA4An5Jfyquo7ZwE",
  "key15": "fjSunc8uW6NqzQoVV8jkSBE1ghguUzvhSAKqgnh8t8iekAJdoncBJfiJEoLWR6FhieFgHuvLo3p4mMwdsAKjv6g",
  "key16": "JajvmK3x9jVBeZP55EgUqBkEeu957GN533ShNd5hjNZBxKzDmucqTunJYydKTVyYg1Mjzt9BR2q4BCDvTt8r7bG",
  "key17": "cH1FATf22Ykxo5NgYoDvymjpUc6JpqUFwdUfcRjZ9JBwuk158wvZ9ND2tT5ZZV8de4cBa2ekBG9rqPtTgEzBwQB",
  "key18": "2AuWRDrjqo2TLndpJrzcP9H5kzdhyyBLXPzfy558HnVJM7b7HfJ2ifkZJA39yxK2AmUtGW6kroWvhYLqmtSjY36o",
  "key19": "5DLwDiLKQPigjUuyoLWuffKbWzzhoMzbGm2ZLhxMiAKSQNq9ZHepqUF7DZhuw4ZKYS2qg8RxwPyhMCnrqyEsk126",
  "key20": "2sEnYeuUFReDSe7iWxcS5ij4EZPFdbMptCLJhAwSnQDvCokH9upV7KxUPu69dY6QBfSFuK67BJKLR6MaMRAzmdST",
  "key21": "5DffeacAfqTwVz5ErE7foGZSzXPSYExYMxeSCWximtAQCRndkQnXJDTGQtYSJeNUdefzvngM24nXiXrGWPUPr23q",
  "key22": "5m9TATmA6dX2rYhJazKyZbnucFE5TguxufNGbB7q76Gur9yyX2euUsgECD3UxtLTwwbBm2NxLvGNL3pJoQjPaQvQ",
  "key23": "2gVnVWdp3cpECZx18Fxwhi1AGWe7GZ2iYbakgckVnozRuTQa216Mnd71ptFJwk2k9yWL7dSaqrbcdVhFfTtG7NnD",
  "key24": "4G5bLH1W8x4wKzhZQxz3bGuLNheSt39XSPC35C848sr1rRWXw7n1eHrpf3yDzxdo9dZEnMB4AHSCsWFL13mrdn3d",
  "key25": "5eCMpnjFbRcvJzhkef4we8zBKNBrt642kEfRrvXvKspRryHz7wTo6viLjnPBuxibz4bLFJGbNG2QbN8eu9RaTSGK"
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
