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
    "2M3DHe5kxHdL9mhB3GrLrXEeYYK26j7gm6KoELP1ayvmwhsyL7js2y53hGR7u1p8nPi6him4ExpiHJps8J6edGFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y5oxQt2HvRTLuw9kax9QocxBbzMkucD4bvkHbQS1ai4oSdv97eALZTGjWcpcSM6qsab8PT5y3q6vrs2tVyjNrz",
  "key1": "3SSFcm3aj4AdwHocazkz4s814s9THh9GsQphPYZC1j53mLeaAHTbVBL1LFtqgnjENDBCLEN8Fqdkyqdjn8BcCwDk",
  "key2": "6SrWpmDmTgzcSERk6FA3HxgTKQJMBSsvYaicsU68iMJ8Re7gat43vgy7Kd5kzkkGvZCPHCfg4QGgriisAK74S4B",
  "key3": "3iFExzC8MpDvFeGRuRGMsvdNDYkmea8MaaYZf8U3GU3Kzvfs6jzuPegokSZDtZj9wZCigaNB9WuQssebfgu158xm",
  "key4": "4VHFmpsroFL98HZigW5X5eLKra7BbszJthsgdPShgV91RMhfYjXbsoUqqcbgcPxsE7cJo8naGyqJL4uP9ivrsHWB",
  "key5": "2mGUib12mmw7JW2yRvw2W3qzyAaHEEp1A7pPev5b3o6eeWg7sGhwQQRKZwe4NcaeUKx12EcuvVUn8rWt1dMRbiAv",
  "key6": "3z6iJtjip6zPRPFViJykLdEnwqM88w6FAgTqdrvgbazZCaYwKQjyBTUfqTbRa2uQSK18gv6xf7t4tPYGMmjtyGz9",
  "key7": "epz7v1T2b97R5dg1hpd4gxmzy6VntTT3ec3dH2WgigkuU34Vq1qRNh85SFyJMC43tkmrf6yfpxj3zCTAdJxEoTH",
  "key8": "2rSTMDruBsQU8DyRFCZo7nWjzpaFzpwH2w8uxJTh82HV2ssH3vWV9cW6KQqBSAkCRznsU5tqPEM2zVF3YVzbG2es",
  "key9": "4wKpKgiwxfqXHtsiuNANukcd3e1fS6DTuWogoanUPFS6UT4zRGn16cqrwYzxxWmUMKD3SSaCRsksZYzopExdqLjb",
  "key10": "23vHN6GK84keNSLFzoooCN4ZNoFhgDa43kmcFsHq1T9rDXi7PB6WubAqhDGorRwmaUUWtCkPqAAXa5FYNNhDkQV8",
  "key11": "3oWhWbXdaxQHeSCu6wzeVXbYUbJiA5XB2dPe1DGNPYesusLixEJSBDrT5Jhgpsw4muK1BXeapx4X97rx8nmvgy2P",
  "key12": "5LDtaYQpVhY3EuGtDu4PgZaBNzGbcYACXvdtBiBnvsLhwK2mRGTervUTGUgGRdWpNZ1rK5GVTxwL8MWDCSPkAhEy",
  "key13": "4pwUKWWvfX876ho4MzcMAa1rKCCMD4hhAorNhgkB5VcxxdD7NqEpFEc5HQHCYtvq7uv1VncR5KcxDihdMhaLCCaL",
  "key14": "3DYgWKZqrwq4o31JrkuvgxjsPTJyVZT4wbTnoCidP817uwC3TrR6pyCMFWnmAkomD7CtN3yMUoxVY8Zf5CqRGCVn",
  "key15": "ePDXAEphfbUuixW7LTZYDKEpHGqEg8ouxsuk6EFZiGZ33vummpSAVJ4BG1CvErsEyABWfJHQUzmEnz9sUtmNiCa",
  "key16": "5zjetbxvqy6hd2HBx3CyhnTTQDZme8nMnsUdUVs8v5PgQjRjvCBY5XRYAqVBbXKwPLBDAKaXDBxnwaAtF7ZSAd9j",
  "key17": "45WYkd9NWKkWe3RgTJeEFPA3gPo6TsPWtJR3tewDpNnYv5uvZ5swLNQ1CfUTSvCXyf9X66KgjC1WpwLdeunykXbB",
  "key18": "3zAyD7iXULVRcGEodnVjA83QoFwr7TcgbiWfgCUirMD3BJa1stsmy2nP9zQJZRk9hocw1EZtcwLAAfcniWTEHTvy",
  "key19": "3tv3sizMatVnapUWkdSBEXjvyfP3BPUD3S3wyb3xbJ1D43xWLXcLJZryFRL3WZBHUmLtKzJD4xw8aR8HgK1TH2cR",
  "key20": "hLDbkMroJH4GrjN3ED81ztydekdrx6Du9XmR6SQB3J6Rt5HANHVj8g6uv6zLqbTM4c3kJHUFUhHwzechiQSeJF6",
  "key21": "4n1LfBHxfntxWzYpCv3k6U1NP7X4uLbaFgcyFLDGrhJL2u6DTrVFZHqeH1CSyYDgvVAh1V4Bi15WJuqDDZqjoX92",
  "key22": "2YD1xs7tb7ka7wQ7kiiKsCuGP7qD1kXPoYB5VABqhfENpMLqBVvdthtmJivA1YSxjUb3tkgmtKDviYi1ZAjRP9t4",
  "key23": "5CJjJ3Y43qiioZSd8h5v23WXQQsJoKUeubQkCTok8JYnTUzY8DX4QwQMNh2N3eaiiYgngC9CMytALayzhvq7D5LF",
  "key24": "EJFQq1YtqbLx9r8neavHW8tCmWUuWzCwYGfJ4qokUJyxu1y9fLKbnbutSBxBX5dC7ayShX5xwWQKo6DgfpttWM5",
  "key25": "3t3NGgGFgFzc1bvWVa4UVdzEKitfeqaDMnLHAu91QeqpvkioXNRnfdRzQMk8pBRzJfn9G65MHqBqKrZUKMYgDk6R",
  "key26": "5TCjAJhPFKXxdixM8qvPo2oNYy1iW7VHjYPgMMoZttRMnc7LNNZq223ZUDQwfg2wNiuoUnxXgJnY2xBfmTCriCoQ",
  "key27": "58nXffWyHcVs5GUVnc1TrxVUQxui2tWgQB4gwbJWwLVZfSWd4yhpjM2fnB3WgB2D6ZoV83qeNiLzXy5bbpeBm5G",
  "key28": "31j7XWgh7RtKzX5myJkwZfwQUJjoHHanWHv2Pn2RtMFBdLhYCRGc2AXV96DRUdqqsHi3ob38aukVYGwXz6A97cwJ",
  "key29": "XSAy2hW3JYhwosCfvnRipfQeuce9q2yY3AknXi6bQ1KJtsTXUVQcYvF1WEagb4wJp2nJAYGBBwpwgE3CmnhZ1hM",
  "key30": "4YFJyLtUH45kRgZbWDyK26mg722qtvu4gkiAU6gfRua6ozWtYfyjztzSFSRLmrtEw3uWpc9ywsVFP2uzYsRmX5JN",
  "key31": "HcHVWdc7doecw7brvhjbzBJuj94d78k1WeYQ1CiFfREZMut1S5W4AMvbQqdQsZQ461so7S89ManknEZkzK97UBM",
  "key32": "53Ar571rjYHEkxTFXGcLwxUqYkmVJt4pabKh5qVfmEeGSp7EuLMguS4BLT1anMDfKR9AMS1L7UCyvknqLqDmFSVi",
  "key33": "28RzxHvhWzSb5UAyFkkwtVrwn6HLenemCDvxrwqbtoa9MyV6dTPP7qGFL1zAPPDDjeBXqudcreEihhyZy7E9ivYV",
  "key34": "5GZmtwdNsfUPAWRK9kkAauxvuq64mzHrhM4Np22LocRS5tezU8KzRmxkYKbPXVpELQNjt865gL2D2b2w1C7vjCVF"
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
