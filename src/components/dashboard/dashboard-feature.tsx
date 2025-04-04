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
    "5dCwpgv62JfZw6T5pr9J4x5G1xneUzM7kXfgKE6MC4oZiiBVPqTHqcUp4HfaAx2C6cQnrqAkiZGQtUTdZGgtdaB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4577yjqkLwoubRcJtp49V5UqGrdMRfkLTY7hGyCNmcFhX7GGhdto6i53uS6ZQY7HWsa5onzmFVkf94KuJ9Axc7s3",
  "key1": "xbAibhkcSbk2wpgjq2cWPPgkY4fBpqLvxs3pUMVxxTXK9xfPUj2wTR463SgmGkUHDdiy8YnZ9er3Kfo7JzZM76D",
  "key2": "3LEPYfeeHvkChYqiSjTEYXZ562YgJirTqkLZY7GMsyNHVrPwtXuFq2LQE7hYNMzCwHQDmNRmhaQhX4ko2xy9oexQ",
  "key3": "3Z1BvFLvrJQvvz9Zaea1Zz56PKgE2FUJCo1rAgZf39sfGaXa9vsZ8jQtzihrv4QWNBMMibVfbM13pBKrLshY58Zx",
  "key4": "5jheuNa2Uux6z442SYVYpzgVXKW79ZTMrt9CyGbbC7Pg5a6WzuWRHUK5UM3Hgmctky8Acv96jiiAkPBehd6aKbFB",
  "key5": "4dskwwJsNhFhby275jkKj7WcH87CfbQHkS84kbRNzFyv1me6Hz9Cf7HCAq6cW6FiJBXpz7B5KaUhCCgb99uqFi98",
  "key6": "4rUCKcg4EHmh6YVFZDDRdaDtAF7ykJi3DmZTvMe1QDFh6Gyn13vBodXwn9nM7draRuCFKgRQdGPaqJMmHjMVuftt",
  "key7": "3V7RaSxQ6EefKEGu42UGeEC5BTutqVH8yLxdvTebm9YioGXX5SGT5X5YJt4ufiW8hvvmMriVJcvo18WsVELyGfx6",
  "key8": "4aVRix94aiPS92jRBvXXncPqgdq3waE8eW8ZSigA5shJjZzXhA6neKGrgnzqxZJVA3a441Z18bGPXbSwVYNhUa1A",
  "key9": "2tZY2bkTKr8FBUcqHfCTYekS92AtRRcPFbKbQ3NMtsNsyRtZQEx217ezXMw2vRp5LzLa43MXRsoASgJeYZRUnkn8",
  "key10": "2i8NZACL5xswoZCBamY9sGCrVU2Uy2PeGMCuvGNRSFRR4jZhRHMsDd4vuvNqScmeLbjYzyCWwXQzK5QweGpmLCjb",
  "key11": "34UFMhJ3LK37gcskHafveFm8DSyoHCjCov2FCtSynMMj4BgQRwyEsJDRCe9aNiBwUtm7QMeX185TDd8STQPumV3A",
  "key12": "4BunYZvycimFixkxCcXfyG2PHhLQcS4duWPfkFLCLEL4EpnqheHaSxksm3NhYsuXj2VgDVbJYgk9RQURVrESostE",
  "key13": "5xaAtj8sw7bQXbgYnn1Z68ZiEP4hq559fieUqzLZu2jbMHpM2VkQUmWn7BVC9U5Ns4RCyh6fApcrxnZek4Xz7DSg",
  "key14": "5pSTZxkPQ1CgZCnoYeyWLqsyZV14fCH2GTmxueonnnJ6UbcWhDTE9WVXg46V9DKJ38Sv8eatUCw6Pyuyfa2MdJWg",
  "key15": "3FP29VqmqejkfomSd8ePuR9YdLFGjqcULQEArhHA7b75mbqXSSeJX6wFHn1TUwQC5JoZm3iXEy7gsr9zcoSrdAf2",
  "key16": "4txQ6RVrkvawSvnyRVUWUHqchiNE8pjbMkCJzofxCruhugyvRGpucs4q8q2R2zH8tpHx7QqZvS4xnb22LCS3dd1W",
  "key17": "3LaUhCrporHDHtZbdzcpUdCBZCQdp35ZeWYoXZQZzcnxenT5s2zxD95XRPMkXaVTRP8gWAzzY4ZuiaKpA3QemRn7",
  "key18": "5bi8CrPA93TMjcZPHbp9xGCDS8aTHrqx19oGiwMGoVwvPWPwzV5jf4agCZQJSxpi9Ujub6sS8EvmYWtgKrfzJsV3",
  "key19": "4NKqf1aWcpKTJWnecSCrNdkfThyvFSrhM4ZVJp21jTtpyAYLkrnvwJCd4MPm5yHZVjvN9K37qtakSDTXF2dkwF6f",
  "key20": "2CM7azN8WMSNkWwGuQMZoa5m5UDRmRUEwRKN2wwcFH1QQSqQ9TdkVYSMRfDykU5vckb9VvDYfUVxN6h9r3DtMKBf",
  "key21": "4bzjF1EZbnt1S2Au34twFqy86HTaJGfcE7f5o9TGa33CydBX7LtkyCz1BxEz57Jaee9UkkpagPexHEWjKmmm1BQK",
  "key22": "5pDMPgvBm9mTtNzdKDDh3RCZ2vCJotzXkuPVQn2ytNNagZhS2cJTMZnLwEpCPyLBi5amFonfZ1CzWRXnE9Qsamgy",
  "key23": "2U9qo3io3KB4HQG25ahiD12yk8aZn7NX6BqcmdtCxu4uPCFojJ29RCoLwvUeBZed4VUiy12Y2XiATBoEhyaxejvX",
  "key24": "Gpks2AeRvUNzfpPmi5XaoKhmhZP1oRHC9skwvikW7aXAqMPnSLfVmYgvuyCVdZSgpTgxudh4DqLqPEERVKSgSuJ",
  "key25": "2sZHBCHdswPaG3HUSW1VQCcYDSZvKy8VJG8NiyuGHXcVAkseivSDD8E6fYNHgdFCWopvsXvSdKZfhr8DuFKUam2h",
  "key26": "5LxZqqaidwjJJ4Nn4cEiKtX47ssG3aLvvhKLyFAjYgNpq2r9VRvLcKgLYK4vV7tkKuTkW23MtwHuNAr5LYmVrkXq",
  "key27": "5eE4U3gwZTChznxjZJQZxjUMJDk9oehtnBn2DfWEUqZF76Z6YzbUZJp86wpFfxq8yit2YJmBrH8sW1REaiJxn2vP",
  "key28": "eJBkuctJGPmezbeFQVQGauHvasURsXpk46Js8Psqee6Qg8x9YrQ5CvuEpA6eTd1VU8FbqQCaf5Hr5gryNVJvCvf",
  "key29": "4Bi8M4UthcS6ezPoZAvMu7rXjZ4XJV5KZvXKrFhAEUhyVfuVyyD7RZFDGkAUPTn14XW6acQVKLeyzW2oeWwGH5gb"
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
