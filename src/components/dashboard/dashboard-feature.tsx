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
    "58XNBLgswA1RwbgxR2xmNKGDjRuSrU3ksUpecaBacTqUto31eFAMM1L8PUaHvZUybT8XVNteWcqCg6UAcgZ4g29D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kLyR5sdZHjJuUC5GKgecSf1TkMtsYzRhQnJ4LE6M3C7rbKuF8BMiuPUmTKA5R12j1bguqdpPJPoM69Yf3JskSLU",
  "key1": "2VCq4b32UN61rudTtvgZuhF5XPEamPDN3XhbGTmF6Ba8vFpuBGzxd6k9BLqBRhbzNgqsgUF7dLbeZ5QH3Vf24BQQ",
  "key2": "5g69VVtk7GCue6aTJTjm4k2FZEiFM4yxZodtwFB5JBXqzh4Mfhuk6FCtDwUhEifzJAeQKtCyq6j4seAYCcLobWt6",
  "key3": "2at34aVffhEKVZH38nRuQsEPjRxJ7nSqPjcDSirhvjQwQub5LWRo48HdkJgGnadTCbzh5fSPyZezFQYW5xLwWmDp",
  "key4": "5njAL5ds7dwRSshBGiH8ds2bzm6cop7eCFV15TGU4EHHa9stF3EYzfu1H37Ri1jNB6RVgyxa5AYLahGQpodGcXCA",
  "key5": "4PkgokoekiehCLQZ9GDqUhiN5f5ULXPQ6VwBiGHTAwiXzUQ4ZzFPcPn851ZAmTDYUVz3ULgUGCJ7vGXDd2UjTFC4",
  "key6": "52V3H5RmeyujB5JdBSiBxc7MAhDzVyYm7vhaTWX5bUjGT3vrUEkCbDsRQigp1U8rgWV6xAQRrd3TbTcNMoesL4nY",
  "key7": "2Vxks6XvijwhZzVJ2DhEYFMxXiFdRb4PKapgEVvNoqyWQYEXdYQZouLKzY2ZDaxLECWt8R5CbEJoMzupMDSWyi9L",
  "key8": "586XAX7soABvzYcFFk3gPcqp7oWaaLpF5GZkEQtdJDMGhjmaKA91czCSmAyJv6jnJ61qfPG77J3uWqCMNtneCg5j",
  "key9": "2P7T7qUutR5cPEdoesbAG3HvCgospdeGYGxq4acT7ifTV4o6ao6wU679WD29smsb9bFpX7i9r93YKfLQPSaZz7R8",
  "key10": "nAwiaatmmzotBbhD3mHsjdhXzgtkHyCABGTE9rvAHWWPc2bkmg1vNkZ4QFikM9tJ4tMMK1F1WAttnS4odRrLH6F",
  "key11": "3r1FUcc811pKgSpUSpFequUz4PgUvBtrJ5qCEaYFDQTJqUPgmVefG5YARU4Ln7i259p74KvitCDqm9VK2xnxGTW9",
  "key12": "2XZq75qBFvpnCQ84zF99sBuKH9ZBCkwpJCbz5f9Pw5xSiDjpy1JPnUkoLN2BJ8J2fZbSAfndd1yKZifheCesB6QB",
  "key13": "4djosN7A4Ey3fAUojP26bVzn5UJKJH2ULjgYe66qx7Sje6dRREur2jUuDcXvio9hMH7nbV6JxZShmGT7fT7ujxAi",
  "key14": "45Zp6arLgxiynd5fmtbuV5kyc3hvW4n9DwYCLAcAm13rtNBDfcSTJt7nnEWqATcZjfN1RKLRsj5EgiKZq1iSX9s1",
  "key15": "5y1hWUYYxunxVSBSmc6jWota6rKezSNPq2MY99zCFHTUmD2rMgyHnakj7qyPbuF8nGUGEo6wp9e8vWWcynJSxbVh",
  "key16": "2ZR5faua1U2bRujt6mYriMkBxxLy6ADDp9ojkKYJ647amAE4JgTr6rnwP1rsfcUJTrwgWnAPwkhHvj71woJNYyAN",
  "key17": "31DufjFmD7RRDNGZVqcfhji3E9N2Ycxku6Rt3HpdNtbVHHJQJ858khHp9bhdCSW6R9BD21hsGqpiHNDbkDWxUGRS",
  "key18": "2emMhwGJL6ZSZnai5jPhJxkxMdzrVemjUwXPu96YEv6ND6ZJ1oedTz3NHkmfARRv6eG3uJN8ZPs9U8iJ2cvse5nP",
  "key19": "4LLuxtYMfqLwd5LvKoygk85qE3u5YXYss3fY262X4sMcMY9U6nrpUXkM7c4Gu9kETcCuAv9Sj4K9jLnrHLtmk3qJ",
  "key20": "5ZLTyQYFGgEcbNCRg9pz12Tz814qiAeAB6dr4rdrTMpMsP4bfTqFSdEuYUcmVjXa2dMhLEFz7j1BZZZu2VNEXSwJ",
  "key21": "3dHdw3CCGqcpQSiCdHrhSVaKfAZz7bpAV8FHSLN9fBaVN3WoQu1xhz2EneCg7sMaY5iG6YbQnYYVajVASR5g6TFo",
  "key22": "6143yn27qrpoAjhuMf1S2c1AeNgEVV4SH83dTqFDYnNoNczvMh9qs8aoiWU3pMBTc8UXfrRUNAFfGHk3hDMHd6vR",
  "key23": "3P9UpbvrhEcW71aNrsHfpdD414QifH8mdj392ynYnxbwx574CpnayN6GaD57X6kXrd6cKmnCwKYRBcKhJQYaE96U",
  "key24": "3QQQeMkym1X9x1hRtyiiMXZWCL2BiEaKBKTpEpF6rtG9nb2zxKa2QPessbBLZaJKGbjioMPth8Kcq2uo8oQ9RUap",
  "key25": "JnzYtvViML77ve6VtvYHKiwWsVXCtbKS9Brgn6Fe8mTWqvQGdVWsSUenEseem4cds8MyAn7Aue3KAo2KjzXr6XJ",
  "key26": "2ecdQWTrSzDdiYqAQ9VTvtWKbNEqnidFAt3YTEjGGv55qc9Aqq5xjs7ukgnxv3eW9LQArjFzg3p6ZzTzAM2pa6xG",
  "key27": "52QPvjUx2dNRNDLHVsib2h3zV89aRxeNaqJB7cyLV52pKzYBWdSswCpt5HZxY5Uz8F8GL4UQcLRQoVKosN4buNc3",
  "key28": "3SHTigoGikXTgukEzfQt1tcokUGfm8jwD7ZCb9Ramu7EK67gJPZPSZ7xoY9FHZy2y2wHUf1Hb6e3WZkt9gsDFbVq",
  "key29": "57soDbfV7RtypXvyHPdSAraYYF6txodtfsQDdPyMiEFkb8pMtbFH6JvMD1esoqMWzqJZXkfmMfXYsb8APuuA7X9N",
  "key30": "4VR3KVNv5Vv7sFvoQX9ehvVaBGNRoNAhC6iCvozUP38CkERh9yjAuBWAr2ntaocvK4W5hiP35bTodqCPbwPk4zEF",
  "key31": "3m9ory1AokZ5SoRAqrmYcmtMYDdHKPtanev9TXrif6fTtfiKPfbxEMEjyLeXk9daRyrzQkTfcBBcvK1eJbCsRiAi",
  "key32": "31SCddrWsYj94TXr6P9EAGJMLLiLVkVugNnD5uxWwQ2gA3Z3xHK81aQ8NT7czo57Pv38QGjA6XNpJso2PDR6XFVv",
  "key33": "5A2xUPVCW9GPuFsEvZdT3412XM4A6VkWZxaUbCx6J8CqaRNPy9GGFep7PrzckryS97pc4U93JqiwriJeAzLMVCqs"
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
