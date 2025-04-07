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
    "9Fg66R6YR512QKi2S1dcotHWc1PW29iDePY5PvpyjMp21w6HhshSy97MSCYCLTk3gVwxTgfuPTfVRqVnjLWtKV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iDGBcQy47qzVBek5EVXiWEgUSPidDmGR6EaVZB6g8CMQQKEEYBMhj9gN1c5t6iCrTpehpETb1jiV5wAikW9wzSe",
  "key1": "2RASUnFMqKBTsGbPoMmaqngU9TmFv6z21DCue9qbAKLAvGounVhS6QZG6viME8mqKmggvswKiBrQ154Qmm8aATM9",
  "key2": "62YjbjfSVYUP8eNPTSF7VvZLG8sreodVu3HJ9FXi2moL3aJfyuKWWnQfwyrz6mug7ifJwFFXdYVywYfsZkb8hRTN",
  "key3": "2vwXAJdFxKgckwdjeEnVHonbBE5aymYkabBAQFxaw4bAfuG9ovzjYwdqvFX5FWqmt1hqw8CK8bSU8bBKoamgESbn",
  "key4": "2czKoU7sBGo3tQFe5EB2ssxhbDBVKvJCGjZJfV17HmCKzBxtgFbDT5XLCfZTTsJA1qhGqjoUdcMbHRbqZ4wDUG9Z",
  "key5": "45cjRxcKi2t1s1oWQ5fGmfaLVHPNKpzipdkZQFSAjHAxwixBZVkGW9VHa9X3s5LTFZVpGqSN1ZKzdN1tPzBgWvVz",
  "key6": "srdf3Y7PZFo5YNc2UX8qLFwVyLGb8XGzLme9vdPfjRX9vGgzuH1hcSbtqBtd8BmAtJBoZFXLwpHqdkYZHVzXm8c",
  "key7": "4pgUobEWBvnkBzGJu7njp8C2sSFFUZPvL8W5oj5er35ZBvSRbNVjFEqqJ5qbqVg21TQifDU8KQ2pwxCS5A3mEz3h",
  "key8": "4g9DTGvWxda43jeP1GFBFwBGscVpze1TJ3r9rJseZ3bgkCEtJUcxBS68khHzNFw6YMLgzNqbakmjvXAwPaQZppJE",
  "key9": "41nzBvTUsLa7eoHJ9rHgDQWd3u8HeyNkRR2tK1zi4biHwPL16o3rVBUWUMyiwq1S9mCeGgSuosxakPqHYqVZQF9q",
  "key10": "5SQkvQD7Rsa8ncax85QsMtqwtzENG5x8NtUREPKW25MHHivKpCUQ9ePVdC9ZiLzG5z46ALohjgaTydJ1KZkmdBMC",
  "key11": "3Dubv8qNGWQGZfcrgHD1PMb4iDx4eB4Su31i9RorbpvmUq767Zqmez1aaMfoHeHe4JdLn9VqxYRMfrVcxPyTywz2",
  "key12": "4c1RUuuXjEkoajUYADznjGFD6RHzYhMUqkNLUiNQvyPaN5MYbf6J8MZkoTJ2jfa6KKjSz4Znx4tDWRuiUikQxLNV",
  "key13": "3bqQCDQfCk4W778Nz6SpWT7GhJ4w3utPvutMc3osL8LdXXhD8nt5UPGe3uWiDez1eEKJ22pYxHuTVEWNnkeFwn6U",
  "key14": "5MTVg7sTbZRkKrHZYzui2Gnjc3tLnhnWEKDbnB4tY2YUnMLSZokacACpxrB7q2AaGNMmDVfVeJ6mVeZbukQV5LCd",
  "key15": "4koUXUjvxshFFLeAP7VYKBwnVgDuoxrWuzQtT3sQrKeQZkfDkL48HoPYxKUdHVgg2iYDZiQ4j6etkJypLQxrniis",
  "key16": "4g4Up7R8vi8BAxv5Bx2NjF3WaGYVHXTGVDiNBh87MvzzDqnnNjQBAi3sYo53yGwu9EMgQPmd3oQxg38knSHX6UTa",
  "key17": "2ZJ6sUcZ53VDbbqVMeGcBqCDEL76uWwvayg4dgCkBSEL3ZEymtpotGR6KfbL9Wk7HLUNwTPHGBn6x9pP9DN4Gaib",
  "key18": "5t4MdQnsQ5Pt7tEHoRtqQgPExYgt4douk4vXNiX5eTWnwb5iXJJ4M3oGV7nhkYWZ5bX5BPXqFNo5C8hArQ3uYxTn",
  "key19": "3a7stpfjjfs4yo8xVMLTnu5PSswmcJcqmyhKQPK5GynuuaubZ8ngo2nmnSwm8RhJnLdyRie6BfX721NrVxM94kxc",
  "key20": "3e8kZoTMu1VkdV3MYfirg1KTDQuW2RE436nyUk5fuAFb7D6tKumkLrPGQn3vrn4fsrbZT9fc2vp4YVj2W3Gn86q9",
  "key21": "65StvjMSkfxz1EnWyfQPMhyaBQsz4uxT5Yrbr6ZhhzCwoeSFTTCj5DVsJ3fB8ao4Jc4dWdLZ7EYFk9qNx3GDExL6",
  "key22": "5biHDwzfT3wY3zPcpnC35AVnV3SNKd6YBQEvNAN3wMBKqe5cv9dFaaT5bPegpjSazqYMv6raCAmDFQ9rVXAiKCpv",
  "key23": "63j5iw7nKJag2AYRbVBDbR7yCPF1mDNNuLaWhgoWXkfayhztmdUsFDxMb1AKuqm9j61qNL8PTnNjSvbxK9Cta8hs",
  "key24": "2rJpW7n6hgAQZ3RZfobUPaCq64YuXyeW4GMgCF9gWrEAy4PJkgRBhEjgiUoJB1BNQt4gvtLPXbrDP4YmCTvWsGdJ",
  "key25": "3igMYZsZuw1v1wQZnZ5kqBy1w38on7hbLSRWFSazg9eZ1opL6nmWKjYL13Q2kEVSBMgeJFhUJ7xFkKYcdcKkW3yU",
  "key26": "arG3jJhYNbpYyhAys989s3cma8XC3ngyEfq9CmdHPyTvbbEauyPTdDPRqotRWTcSSxn48c3HKGghFwi5VahMwH5",
  "key27": "5d2G9jYDwfbddmu9KrjGQzp6fpwRFcViLmzBYe9szqTpJMh9acC9hu7z9DUVsL3pPB6iSTvPrLo5GjVjqaVV9TAi",
  "key28": "rPN2ED6zoRqaA3DxwAvu1PRHsZm8zGiCtPWByQ3JPATj3x1WqiUbPWNCDGFmCQMFLBtVrsZfRMwHDgeLGUdEX4o",
  "key29": "nLwzv6tip7ttLybL7ywYdcZ676nLmx2fjVP6ATaYuTjW5gvBZ4U3depGxxp3ELTJCp9Pi62VnTrqm2C98b89c6L"
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
