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
    "7EFyGc2RK6urmf6SiqKpMFVXTrtb7z6FWwTSjaJNJTs3P9ACekUmbPubzYYTPXFjLAjrfWaPMrMoekEyCHbewFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MhbyoYHTtxQXnbznUT36JLaNEbvPUx16khucdYFrU8XkpqSDeLNxGZKapGKtQDS6wbWMZqKyrRD8WQKHu8HzatR",
  "key1": "3auf8bESTyUP359fSfMeGGJBxYLEFgK84rKDGrTo8N3H8rJkarikBmnLmW38aVsmQVwycuue5X7pBTAaqBuJyoG2",
  "key2": "4a42YBfaWpKQkQvBtzq5KBhbjfBfV62uBBBJPh9R8HbQJBMdo5hTybXZDu64HxKmAdbkfqAKwYcGxqEr8TZjJSts",
  "key3": "45rRAwru72fidn98CPNXuQHN5xYTa5NL97seM3YxRNbDqJg5MSDDsJgbqdqXTWgr6vKiXkLMqbTgh9xXrc9Xc1Wh",
  "key4": "WQZEQDLsWEXQWLZueyL8aQ92NREQh2L9FEjQyhmQt5Wgt4EwR7NHb1XS5EAnUp3cEXvKjvKo48AAfuo6DWS1Nuh",
  "key5": "3m2rKMJsjcf19HkVMCNmYx7Q5v1qZYN5yYDLdQDapkx6XVYWjFW41UgV1McN12hqXMESaSSQ7uRAWPtZYA5p4UYu",
  "key6": "VdVjsRkay6K7AnwVUWAB8NNjWFb6VTcrbAUKXMak4Tt1qKrVQFYaoCHRKsn2d9L63fqaQkfRpw4zSt5NtKPfrsr",
  "key7": "4JNr5f9apjLUFyZ6FTQdSTUzTsf6rdmYHLo9hqVq7c4aQZ2Kw46gXHESjKCoXcLXQe7C2S1JkRqaWKbZWugjqnqV",
  "key8": "4h83CRNPasteMpJ4PNNixAtthtP1Lzo8fATxg39UW5okThU6fkXCHCdR69UM93hQzHGLxjVv5jAmghNYjkHZpaER",
  "key9": "hXLLej2W3svufSJVJ29AFDLCjC94goDi98pZk7L7iUesE2AmSoZB8AAG7GCdAH9VjYWyNmNv2He3HbSbkD7qW94",
  "key10": "41xiP5GiVQQriXUZW8JSMgoS1CsJ7cL7LDUpiwykoTUuENucUc24CFvSpZ7RE5gLoJGFygzZgsZpKHp2kx7pYF7h",
  "key11": "ffgpeMf1B3KUJKqdxMhsEA3XS4yhbt9RHaPSApydzXR8d5WtmMTCy1qJYHr3eGPCeFgrjn4wwGUyzk81dGFUpCm",
  "key12": "5EbeQAVE5eW7paoNAshkbRinUdgb9wtnAZRJdeQ1rCLLVhuo2sDRbDF9HmNyXc4DXKrYrqxDHWNfdNVgqsStg99b",
  "key13": "2gMSHMzbdHXXf9DTn9aWWv5kcvip3aDejpgD1qtThTGmqvvFwWC9dxTW7guKzMNgXEmSLrBp7uQVba6A9JchnxWu",
  "key14": "5tg4cA9h7messvh93q1XBhgR1o3mj4BZA9jz1YSwUHY7Tb4cASGNc6HbRoP5rtWhTxuc3aQmu236iP9F35G6DXwo",
  "key15": "5qCKTxnFVYxR7Hcz8KCKMhU1zCeN26F44ryfTPeL9etTg3vqYiBKbLkE9iKEfQfziBgDKHr9tcwJRPAfKhEwfvja",
  "key16": "5EkXi6fTVbPr6ehCLC8ZiboHqugxUN7FpqQ5X1uLusu8wctHk8ZtpMXCmvzQvRkLvVhMYJHdMBNEbuUBKsGa3zLA",
  "key17": "2yK2MDwmZXz7M7qkTHdK5S6mbVta9Q7qKvkdfAidwUoh4yhCwcTcZ4eQJxQpvdpXX2n6kyPMVtVbNraohZmXoZzg",
  "key18": "s7WHWJBZP357yc72G1YShVskYwvpxgAxRKtbzDpCoQo1jtKMauGbZyoMmGBGc42pXTfVGkmTnpS7gBoq3Dpowqw",
  "key19": "3ykuRmP9cNKt9ARcGjnKMMssdayBUdYdzyQYaCPnvJJEksJ1yXR7wjP7Ym5BdEUkxYux4XwAmJWEBi7ZJSk6d4oY",
  "key20": "3ym5As9hJ63vcxEDkcxLsjdP7y3y5UdLwNLRnb7jLfev98HDBWsr4cm9vv6azPzhjppnwxX8sxGw8cYLohapHpyT",
  "key21": "2dLmHyE4TgGohSGB5swka15AobaPAUrnkqhhGa92BNsCUt6iMqBdTKfPYjj8tgRAHPTWLjziFMCwfd87ebA1hgim",
  "key22": "3x5pL7ZJChgPpzVeETf9FA4T2kfNERPT1vtCVNFqEh4nfbQ23sMyySSJuwMtc4Bx1gFEYCGT6t5Xeb98LEkVhmkY",
  "key23": "4zsesESpWzzVwBpwv5RzfPd12D1LtfUZLq3grXhXThEV9tXdttvxbAJm4aSaV1xvxgqUpDUnijwyzToosu9oJNfJ",
  "key24": "5dBjnqnZLvcbC58iUacRmSyGkke1VArq7iqjT5R9UgUWZLErZXaUv4Cd5MNCNkbfpUm38RX19sTK3zYduwP4ZU3b",
  "key25": "2YGADKe9ZgxQRrpuS54kbP9qGMBCVEVpMDbe5hpW5H2diQm4QevoKL4M97ANQXvmePT8NGvWoxAVJz5S7wBXPazv",
  "key26": "3FZC6QnYw8zHHmZumDF68LrishBRy4W7Eo7GvP7SyiSLf3kYxop8sboqM4M3zq4HwGb7zDeVc1ZeZoxKPvG3L6P4",
  "key27": "5orBxN4yh4pEt582HgGNAzTfZTK5EaTgYiNgNunBnGFgQjph8JAby6JH4x8mXNR9NSboiFYH8x9Nyy1TzgrDmQND",
  "key28": "kd5MbKbfKRwCX3mFSjEZWYPAJxCX5csLgNQKyf6EQoY12TCpgLkS9zxowHhwLvWB7F5nixpbx2UaRXQGbjBV5M3",
  "key29": "2t3WEMb2jtXFw6SWH2CXjGLoTmwyQo2Niv3hPh6ovyxLTsU4q8xU94NcWbprpGcP1ptqw7mJhiEngEtkEef83pjy",
  "key30": "4V1AHPBdbZZzXzC334gzXuufu9UyeT1Xpxm6e3uMCUAT4xbhqysWQ8XP5pwyYGoaCpuoGXKskiETTEBQq3GSwaqy",
  "key31": "4hh6wCuBGBf1kDCg55hVMXCPNgoREVeFwGQrwrGjUP5fP5FsTd8oJMEEakNVcLsxx3SbhxfsHPgyEBRcciHvxB2E",
  "key32": "xaAFioMcUxYUUXvDyaaGHeWxt3KEgNVRyseYMdwCnbms9AsgmGK6yb2FQ7D5PfZaok9Viqe2wU4CMujATvsFiwn",
  "key33": "2PH4GKM7vMZMwsXLuj8UgQPbBGfucvJCfkMVhbfUVRzZZpUattqPiqnYsQ9LHEvKavuekcc7Wr168rRQpkNHgew5",
  "key34": "yBEYjJUZWxVHiHr5mefpDhLQeENX7HjMNgbwDhu8sbnLzz4QUTAmRKaZ7ay6QC5RdbQvAEi8XVcVXb8d9grqNzL",
  "key35": "3ouBf4mCJFFPjTVQM1vpDZYFq8bTMj2EFariAfy3ycX865RhXSciJ7cvkWXvnGQ87EFsHpZSUNZT4fdjxrm4eFiY",
  "key36": "vigwJ1q4XA3vjZgTeNy1W5D8aiw5qdH6cKaS7ZwL7rH1oUGUqqjs8CH4SJLHmLLNZsMr67XPUxR6TNGmTcm9Ftz",
  "key37": "5CW1ayuMgxLEyhNUtoJGFJxWEmYHnu2ARnRPzU1wyKTtFekMYGGSJ3QRy1N7uhBdLkWiJQtEbC3kc9R3NJzeFN3r",
  "key38": "3rUtVsD629vgaB74AGmwUG2k5szTiAQ951TzRyVDFQtvSVP9QQDQkAmXi1YR7NiuQbck3wZM4SvGmKxLrbx2TvxC",
  "key39": "5rkECnw59gFDyEhoGpzmKqFbrqjVzvaddMz7LxXy2c5mDP2qwXcmM4vRHcpu9Q36LFFokni9e7qqhqnpK8FQCjRz",
  "key40": "4j6744Bw5dBmyBYayrYtfkCPvA3h6B9EjVuGfjF3Z1PwEZ7jG1BjL3toA4h5U5sv4qU1fNLsXXixBLj3FYErGUEC",
  "key41": "2akP8zH8AS4sMVubVMDCpsFoxJbN5AUXG5dSDQiTLMVN3esKYDLYsaMQx3xdrZj6tXywX56TsRq6b7RRVPqhzQQX",
  "key42": "45tJQfdGg4vAChQjAy19WrqbawcTKRediNZmwsmiTHmM5fQS6ySjq2k8GSQyhbR2RcGGhiJupgkjiso7V2xQfbAZ",
  "key43": "2MJDCM477kZZJ7iRNPHRcjHKLfFAxEMTxw3V63M1AQLg9F2LezCTf2v8nUkKAcBdCqBtFtpiX3PGPctZGLbhgMA"
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
