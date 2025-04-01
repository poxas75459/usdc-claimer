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
    "3LxauadkrsS4frmjksqtrLo8HMDUXfT3o5dZ2sSafWJn85vhf6UEvYxPhMyNWWNz1vR9BQk4Rzbxu1wYsVciWqrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31YGBpv2j7mBKqKMHYL7c3bcLNpvkuCsyCGxPuN7D7JbZ6NMEZ7d7jnAzfcsTzL5hTZHt1iAxbMuYRmVxz4B2Jag",
  "key1": "4wPkLRdLxAGUJsu2WbRqXeG7vwtm4x9nPSKcriNRegDsE5pGVDUjtEm6yK5VVBwF2yu3awjBstmdp1m7kRikJVx6",
  "key2": "5aN1Eq97nBjJ5GSPjmpCnQcyCbfhDZJ6BhNXPMzdUQprHepG2jJAuobVLhbEDxnvkFmCZbtgtQjxDGSNBbVeZ66b",
  "key3": "5rfZ1wGgKLze5dftWiiFnimV8REkgLWUL1YPL3UsL77FDKea7uk2A7peedoKNWu7HmBCeJr5W6aakSSLEWuKKmfp",
  "key4": "4bqy3AH2G2vrRASEnX7DwKsqY7BhVoRUKfCKgmU6giyhuXgySD1cja1dybvNKMpHwRpQfLoCHMVNaPwoFawEvmZ4",
  "key5": "2huZy8cXoxczrB92dnxk7G8yitq5e4CJaL2SFy49JPs73VMsAv2HP5YTM1Zdh7MEerLV8Pt67nGg6nfBeT7xX6dz",
  "key6": "ZW9rwrSnsDy7jfRd23TjhdGKPaY7YwNgr4gVXtHdKbpaQJacuAr8hgpNueSVz6wgKLPXz7EtproJm2osEiNdnTD",
  "key7": "2F3UR7UuSAphbgWEmGyLZEq4eKTUN5662VkcXeaH6cwmfxihujJhGgPjYdyUjYfVAwBgtcqru5sPXbpGTwNS5dYr",
  "key8": "3dWPrnNSbV6ZJgnaHqAxkRpZemjfGcFNkC8U5sMWmrfY1txkJp7VVUrKWExQqPaD1d4fuxW5he6nLCrohUruY8i5",
  "key9": "SRfPPhD4TPJaRaFMAgcEdy4qbH7uFTpmehirH4Vu9rS1Fptrih9Q8KEoFSzHQT9s5vGB2EmJ4Fi8NKjYiKMMhtb",
  "key10": "anDT4ytNiqbEo6CakwMLnXqcmh44BqTxHmFSxdYuzokaXsGgFNFshwHQPCp3AJ4aQn6UBYRriTf4EkodbP8ApVk",
  "key11": "5fxSPoNnjj9YUzDbxv4PX6xZA1XSin4Ft1Vt3YudNhj3n2QxUky35WAjXrf7kz8exV5iAZXFgr5aTf3VDzC1yZwM",
  "key12": "5sfPQibmTbeVJKq3KhmHkrhrm1JgXjNTG1BPwdLoC5q4ANxLzFGnFM6ciFDs7kE1Z5gp6LJqVGeZme5Sbzsu41hZ",
  "key13": "7PWk1nmqUFchy9BeCovNnUdLhpwQkQe2kcZapjSP5bWTNJ1pxpDQcy8MJ1yJjvtNYu54pvQirAfikmKCe21UHhh",
  "key14": "2mrYrr6SnwyAscgeT7LaVwyu42RhxUJRrEr6zEdTNfncw3VhcwLDbt3FmXqJkNW8Qyrq5KZ9AeM9smhqDC55h9Pp",
  "key15": "5TCqEbPa5kgVuBsecS35Thz2bscevyc2D4fxCyt1kxnQLwVMgGdgbGDGSC2jhDGVGYezXqAVHP3iXtC5UVfLEVaH",
  "key16": "56or7vvMWPGBaLsPK8WjgR8SCvPFn7nBfXgdzr3mR99rEBYdRa7F6avJg2E9oj9LVfCN8NgxRH9nbtjWrdcHTE5Q",
  "key17": "4ZzmvMJnNbLLTkrtXKTg8YhMxpTb3kiXMGNiU72SH4mdy44eZVKEEtFsrCi4nsWkB3TWQkg8qdLnhNUN7XHYRrto",
  "key18": "4jCoYnyCzzG9Q2NMxxrmbdKfxwVKuNFhzqVEgwp2x99bTLuATFpnJzsjFg1eDG26HV1baQ9xgfueK8BQtfGLQjPY",
  "key19": "2GCDQnTSMR7J1GZRtX48vmJXHVhMawZfCQ7WbofQxUwmTjLc1xAXv2pgmYzT7WKUGsbPs3WFU1bw6tm47sA74NFg",
  "key20": "3KpQaHUww3KZ9CJHSjoknJAFKZXAf1TKCqyHBrFGGvR23wN6tWHhLQPVBoK6YNTMZPMUV77xCN31NGbbeoNtTEj3",
  "key21": "2K6TY94P1FKnpVU2hpBq44cMrzdcDgtUq7124MRmCS3f49TX8qohfcgraFChaXtXJkLau4wQbNdcnPFvdd9LyYfE",
  "key22": "ygNB7dB8FSwKknLZY1wEyHUw7ZrHZueAXbdSURfe5DjctVnU36WXGnXypipTq2xrUv2tTJbVFcFigwoedvWmDka",
  "key23": "512Ut7Jx2J5g8vduYtokuYCajjWUW4oPremMkGkSaBi9f2K1xmGkq3e7Fa23aQuqB72QKH95hmAB3vwVmhBEdkY3",
  "key24": "596ZjySxeDvfNNBuNKqdfXJACs3TrBuQniCHf9xoYTkcdbKoCuCaSK1ExPgXiKDpUUnp6b2Nx26WbKbvbsyXqLgJ",
  "key25": "5KxHUSvYa6At3CC8wYGf87Xd7SoAKTJ5ZsFBdoGG2C4RMKAe2MCbLkdonaH4UYKDymniamVgRKNPGrcVaxRApTXL",
  "key26": "58vH3hQzmdajKzjEiEUPcwQ2aymi2D4NaHBP6YZhZinpP79WQc1SLLQ1n543NPFXvC42WPjyvKGEwGxNaMogBzvS",
  "key27": "43K1qe3ZE93iTLBAp27F9ZY8ATWaYSP2h4w3PGQmTxC5XErzPQC7RJNgr2kS6RTF1n7eLzAXBdcTXJgjxDxsBtnD",
  "key28": "aEtm6XifpcHsaocyYXBD1MkuKQfUtcccMdPpbVttgFVJ6cyFsAM3oVsiiHajEo6puwdqdco1pGFS3vZ5YzFLNg3",
  "key29": "4xCiB6coReF8ebJp4g3uMgAQWoBJyf1KV8ZExYt3bqop3CZd6sMvv784VUnimAWgtHD48WbCqZVVv8ELyACnecAN",
  "key30": "66F7jgfiEjX8ohfP6uD9YUNGPxU5AYggUvXBbKUn836DUqPJQLP9rKzhTk64nSEb3u8jMsARun27Q6J3QJLmTg2c"
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
