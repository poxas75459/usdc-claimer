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
    "gKF1ipbLGTSkv73rHDFC5adk9qojJoFoViwgMCMhQwHXPZ4SjBcSG17RM1qWUiAQu73RYXhR8S198sKjYcFwQpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58EX24L9Bz4EQtJPA8KFi3qmUZLmmZLnQSGYdkMFJsoXrShAEo6B9886yGp3n5JDQ7yJFEp8uRHBg1qrYRnEZ5nv",
  "key1": "5FYHXebfQkUgYDVG3ukvGjzrifz6nE2zvv9BJT9zV7TtG7vYX44BpkgWCGYY34nMxWc5yHjn9BrnuEW3xZijp4ic",
  "key2": "4VprebC6bfQou3ajVoVJnoEohgHXewYkvkZtur9j4QauDCHjtu82HTUGXrQ3RdDrBB1FWEkTcYatLgGwfu6s5PTb",
  "key3": "4MbiYzGy7hDeb3sUDtFYwXKzeasUr7NSDWGKt7YyNa2creLPkUkmdE3Cmm6dL2Hr26SXwAErhRvJC22W9bbgnKcW",
  "key4": "P9ohhKGT8urS4h5PKr2TmArc3vztctRiXhyfGizW5t8cqdAvLg3Ps2xbWQ9wNZm3bRYsGkGHDiQJjjkrdfA4u8D",
  "key5": "xcY3yrZbPvni3tRvBptLCWa2Kz3iZUMeAjKsXhWH83ta7fmhfSogAtvXKXaQkExtqhvpqX8V3xySoSSGGZuKEtX",
  "key6": "3Emx4n2poVMWJMjRio1eScdffeYwW7qPw8vBh4dV5ySf66YzpcEHopekbzkGGUNUwynHdmkFSiFH1xq7FN3WpcUD",
  "key7": "2YgS8vgepds6DbXNDrJSeRQsdxfzVYEqME3WCARj4jW7FqA65KBnXWBEbpnmno5iHmP3xG5WobuswSpyxYCE8QhT",
  "key8": "3214R1KtbaZKhVzorR7ZjfSHERuhW1zxxamDCouFFVTHQxJX8xuCD6Fgn8gMYqqHtUTf4xxysu9rbqXYFppSxWsW",
  "key9": "KuF2AR7FFEUL6FcdZ2vJjitStpoAMMWG3BPiHouhtvxPaFpP7wq4D16VXEra2r75x6hH2bi6j8JxW62YSsaVGwe",
  "key10": "CqPedcggjLF1z9FMBmmPE4tkimE4eatDswzGAwV5m27umHXNmuY15EcvB7xW3Wuh211vqbM5x5wosqNTpusnyec",
  "key11": "5kidzh1Kq9RY3C4bxiSJJvCGGuaZWdgFbt4dnN57vmR2UeBYNJWAQxasYtHVDihBs66FJh1RzPUuJ94ApqxRgKBQ",
  "key12": "5jA8k23ZLcrZyYNdvcZ6Wjeib7LXMobKwLYZ6aKsqbq27Fd99ndW3ryJD8VBhhvnuKNz57cgxTmGYZ4xmseLNspA",
  "key13": "3gKxXyMpYwDLz7YHV9Z1Y9GhJBRESSRLFPiLeZGPRdyzFCznevVNDuUuUYEM1CFDMpLq4e3fSGaYgCNdKszdztPT",
  "key14": "2ef3iFDT2FRC8NrTu88YVHVV9rVhQ6fhcSdba5beAmcLpijmpTUaXxt5K7jvg5fdTewWFLCr6Ykno4wAPfPq6p1D",
  "key15": "8kyXTeC3rc1qmbuZDvq2eAgX15Yynu3ugthVCgsqGhPMBpb12gUc1vtrQ2HoPzwoTbqDZSuqzUpTe1dK1Jqakmt",
  "key16": "22u8VFANTFtgAMvadGJk4AhRdMStrHYUKJ43mxJHKaqMcHQ1smeF8z7TPLoxB8dvDZMyx2TxmSnG7yScsb1sRxCw",
  "key17": "4k85Np6iFagwX1HC1tpzgizGGUbrB6iBy8tAdKyTDTWDchssCZCgTZoJski5bh22u9H72ZksAcoNYG1AibBFfPBb",
  "key18": "4KbsYitUbLEMQ4PApNXTT67C1w6d2BsDReanYRivVrjNWoDmzFgsAVpZmiDKRTdGU5dZ5ZgC7Mh4DUBLzqqHyKSP",
  "key19": "5JJhHcECVv5PugoUgeWE4xAgraP6yDsmowFzwpqiWXbKi8DgsBd6qJ96Sw78q8njjnZwaQ3uBHmwrt9GwBNDhQLM",
  "key20": "5nRXW5YM27Bsx5SQCkkQhj1QTdqX41LrcmBixxbm1gRJtMvaKRnXzXNppH31UG2B22c8j3Uiyx6MVtK1u52BddVK",
  "key21": "2wfBjE66VFXGmKkHKi45AcwPHV5BnxywSPMXX1CJ2KjAa2gZhvPWrEMShk9vCnfWiyK9TJwNZUCqbqB3ZYoRBQJj",
  "key22": "42M9DaTBEAo42JdbxU7LxywNFXbh72qAmJe93r9u8YunGUiBSHQPUi3e8NQJrqotGZE2xbE6Jes6Uv5RC1cHo6Yv",
  "key23": "5XNYQcf7MuudttZpE4FjNAkWZK94FkMKWoJ6VubAPxxBQU9MZG8RYJt2ornsEr7p6xtXqPqwMaaFbSyvLhRejSaq",
  "key24": "LdWarTQqh8AMUiWbhmsnKUqAWF6CBpWw6RAP3WckiZU6zPCBmPUkfUgZBLSmQ4miLLEu2qEJzAWzW1AcyehBEPu",
  "key25": "3G6q39jMcHDXEsDm6oL3fM14PCyQ8CDDVYJLG4n4uxi7bkVBdkohUaoKMaBnf2Fz3zvoi6bXF4VvaerafghA8qSQ",
  "key26": "5i3zKEUjLTpQW61ss5bU2nGqHTbdzHKzcafoeX76wR4WXryXJXjXjFp3JKZ1wNNBWn8UY7nF54XM7u6gHZMvCiG4",
  "key27": "5rKzy7SP5jqnLz6BPCU3vhvtJsbTjKiPpBopNBMSRfj3nSxs2w4XEJnpzV4BtZkz351NZoyV2RDUmsKADqr4J97B",
  "key28": "3WXym9TGZC7sX5QpvVrRDRZkWesj6aT38FGTUFxNH47uWNfJVsNmpsHghGANZkEBt46dPqytgj7J2Md8ywcqWtVs",
  "key29": "qHQFSZtPn1F1Lv6kHC256ur1HaCYugEvaN3MUcjBPYWin1ag8TPG4ebP7Zc9sSmzhYLszQWFdQRjrjhFEsqRUiY",
  "key30": "66ssgnT2Va8WHeVJCUBH3G6MpaTKdnnTZfRKJisVrwBD81Tb8a6a5eafYjLkhRMKwYvymSWWP1FhBiW9Cm1FzReZ",
  "key31": "3aJdGc3iEBPrJwtC9eMzjKg1sMuMmdDhJLkayQeBMmup7H8mSNYp4BjDjGnwJ6e9MFteJrGTfCeYf88rrcWufyBd",
  "key32": "34fmShNZJpsXTQ9uXzNst1kTLZfEru9uMnPqnzm6FFyJQDbd9oYWA7HDsxQGSGk126sHFTuJN8eYKDaGQZVzxv6Q",
  "key33": "sChxSbAL6mBjv1MwwAy3mhx1b1R7q5ucPXYNiSbSH5dzrTPwzbBoAc3JkuXbpD23A63ozp2RXpWPX3k1xSoBwFz",
  "key34": "2s12FdGudnaPebS6ChfJibZ7x21CmuMQ2EZRekfr6nMe3s8tgi27tJfBny1rsD53MvQ1ppB172WGu8xuoodFA726",
  "key35": "4PaK4Jx1MqAcKKCVytdYqtckxASrcbuMEoEzsNHmok1Mc9e1ydFzYg9mqaAMFBkKKDcdYqwnZmf4GHziNEHKGwtC",
  "key36": "3Bw9cUBZgh1Afj39GVTztLSEhKAJYYt4bwzixMCDzhHxwHtwt8Wh74uTGhJM5dAAgm7TfL5mAixGNE1s4k934NxN"
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
