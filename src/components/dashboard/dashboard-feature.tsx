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
    "5N3j84yF8T98FFGasHEYddugK7wTSgdwGRzZMKFwwU3c9Q6McLvFpVxZWM2gkHGqm92GSALzQiCN1gQ8FwMrcgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ayrXwawgpT2iuM7iuC5hDADLsXLzBeComUzUhHig6Z4ZjvNgL5DXnthcELxohpL8iuXgru6NC19s1rQuKpNDGHX",
  "key1": "2hWFxB4gWkHg7XxVKNd35ws1wUXj65aUkxr392sLqaBH8h5NxcNxQoKZVG4S6raRvB2Lqt5yWmpJvoQ7DqJw9UEu",
  "key2": "34KSiP85QBC6GPbbdCsBsH6sYJZZJpTJ9nHdHbdLKakU3MBgywrP5iEaQP2fUZibdLzu2HbSFvgs7yqfLBKyPBWj",
  "key3": "2q6DQf1caf33sqLoM7wh2bSFJFdxvm8kKA56TYbbs2rGZwgfkDtQJdzwXD3X9ExmGjAc2nt78PWctkCnMZxySXaM",
  "key4": "2HuJs4wL34jaRPwHJaBY8xpFJa55NsRNEDj9sY2T1ePaEehaYF7vncdsnzmQNtESo58rYfvvb5MP7yDvD66b8hpx",
  "key5": "3YWbcT7nHbXkHWnnRdE14X7rxWt4YEjcNR2x1Bb8GLtLgGJSEKoSvM2ebDfMbinL57Yp9Te8uepTzPnBTgEezy8N",
  "key6": "5n51bPxXyEWvbZbLFsGQizNL6i4v4nbow79xcXc2evi7YbQBS7ALrRv7AMXzmdb9p4C9azfXmWPxdx8nuu94nPcp",
  "key7": "3B7dSHvdEPMeVNgeHLXicpMxKDYiZkuvQBmCutmbp8aRvC5jefZ41qA9DcRVcWreSBoVxR6srpSeGsMPRY1Ww6qu",
  "key8": "8BArNYXYdy5WXsLyV7WqqzqR3s8mVgv8ZbiVnAgsEQXrHL8PG6cQqEyDMDzSa161FC48z64xTqN9GHtnn5VtiHr",
  "key9": "2fzjUcrQUNJm3MHa18v6Ua8cdSD81Z99jZvnYcTHHHe3oC4DGcTmiiwd8NxSSvhXuiafMK6RjTXur3uPcKJuu7Nv",
  "key10": "3RKsRKEW1PbSGbNNUXYuFCFWA1coVmvL7CMDFcrK6MrGRMdcZF3xcJQGyk2gU3ty9CciYUcz1ZB6nnTHrMtrEvMT",
  "key11": "2NevrxexAr8CWyLq1JLfvtKY2ArAtHkU38WgsfEt6kAUhVE4hxnbgonE8HPLdrH8atCVkdUX2XiEF2z2N9s4SyC7",
  "key12": "53hZy8GoKV6DgBMsDY8NvJhR6fqCEwoC7Hnm54Abn4umDDxKpBgMBfPNECFWoncLopb7qfwMWEBxnguM1Nv2CB7u",
  "key13": "2kkLLuYY19x3uGA4cdUUfX3vFs6Vr7RonUgGiBk1BN2Bu2SDJD9GSwLdsudNazeJtgrkKZbffipodq77jfMb2phB",
  "key14": "2FKWRreMkDXcubtv3jHwB6fP2pnyFeD8HB7onsjdXeWK9NbaQAFFG7b95SU9m8bZPcFf14wxDHWva7ADenosCjBt",
  "key15": "5wsfJjKCmS4pV6tuvLk8ttdVk9bEqjQB4mkzoLJgzcdR3Fk3Vz4xvNHizHSnV62q9wFnqhWwrGCap44daiG3zQ69",
  "key16": "3qasS2wz4gYx3PZeCFcEb7qMtRyVVFEVf5W1R9dwxJc6K7awV7vmzGChMWcKM96nxBGz7SX2BjXmgekp2vzcjmiH",
  "key17": "4czAMgCbj9Jn3AKuWMEx9YRBqKDaqA8LGQQKBEiS1tH4U5dLtW59bndmXPj4RSzPeM7A4FcFrauzwLfCdxXq41uP",
  "key18": "3Nn9PDY8B1dswVuANssepfSjxQV4C1FyXvYYBFfkxyEpXcyLTGimWJsCzQpzaqmdSFahCr9pki4YPGiWpR7y8diN",
  "key19": "2nzWNavGvABQzm6QCAFMbTxvThE6zPNJvixvjFzrK2Ad3z8xGQkTHBifKy82FeukwVfVwDPtUyvq5A5RDz2PuXqM",
  "key20": "3dYCsnvHx9E6qnSW6VsFhc13cQ1EV9XCBqjG8V7R9hkuCGoyTFB26iFeYikF3nVBXGRhQ3nLJUy83Kv8VVmVih7U",
  "key21": "3xV7vPU57ESbcJR1KhHMA8vevSJfFPos2P4pJLWvsJL3At7TSoR5GaNGBk3YSUtJEys8mnpXpduMXP2ukVDdPjVA",
  "key22": "3VfKDT5FCxuLvMFxDuHBrFSovYdYvrPSGQXqyz26mAqoJm3xD4cJAhCpdg863TL6Q2K63sgfczRYZM4WVKA3ECSG",
  "key23": "3kNfvN6bQrrAmibH9jSzcYxwVoUquaqrnqnL5HqcbBRbFvEpZs7ctJxckidyf4RePTgawPgxGQKRncsQVxQomwoX",
  "key24": "G8yMaR2KrMxeew9Cdy947QTnJGrpc3WfbFgsdULLAK1Dn3Te754EomgGPEvKSZxanHVxGsNyUu52DDQtdXUbo6y",
  "key25": "zLFzFPnMuSNALta3R4dcr9mY5WcFTfmguVtF4retUxf4sp3kYuPzQ2yUL9XEfiP39UbRXgAULnpCb2XHGApoCSo"
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
