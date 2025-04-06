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
    "4G6AzMh8TAt6Ezfs4ZAmmbMtzPRS6qc4DpLbrqWcXLPyPSkCyyMGUk4STBmDJFJi5jzXEDtzxwoE7QPJqL5Xtjik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qV2tbJdcop2iYS6PLC1ofLhTrnL1acweh62HVrpz4eRXieezBVenciS6uD5TGzryiehGiZo1c4DboqDAm457UJY",
  "key1": "3QFDc44At6PgobaLAGkmXmtdWYvcpzAbEwAY3aDqgUmbyXkwd2wTgNY1V3FDohkADfCHVEw268GEQ4A2Zi86nZ4g",
  "key2": "5fsHpkqugZAMPZ89Crc3m1bwsJWCYNiYVvoxfSLboUMHs3LNLSSr5r3vG8974c5NN23fM3ByGj1TTFkUQbTBjsWv",
  "key3": "4AAEJLRef1H3mwcdRSp7eRGE71aq15ijtf8aqFPDBzhij9kWy4M77g4UaaA6b9FmF4PJK54PXuyh6BaEUefXhLrr",
  "key4": "659Gs8LxpjvpdPZCmoT8LQaNJXv6CeZxmS7Q3UkQnEsfGADwWo36gqZ3soMXr7rrsFKpDaPKJxb3CNG9hnBHxdCz",
  "key5": "2VuQh4cHSiytBPt3m5i8d8nJ5BKtPPVaf94b2FRquuKC2VoqVvZjPxYHcwFpzKu1ko8cCQhK5hrSohxou7vRYpxu",
  "key6": "66dNLRZ9hFNCCwpeGAagXdNMRCZWhVfkjaCgN1WAqfKRMWGtStStjvSBX585dd5XajgzJ186h2Se2XkctQkxwNod",
  "key7": "6HkJpzzyH6x9tYN3cyxMi1WJuAWNkrW4VUQnEqXWJH2Zz6DwEtDsVDgGuETcA29UTsYUUzbHJKbJ9B7n46M7WHc",
  "key8": "BiSp1oxeBm4mVsWvhAEPL7utQF1YkDGdS9cKpJHJhFvpRS9LdgnfKSbJRXQtvkTcQZwCHnkMoaBPnZGAtTQ9BYG",
  "key9": "2eybNhPZ5fg9PUwRF1uaCrMadaNWvDdjztq26Tq3AeqMRgTnbh1dLDVJcuyYjMB94k944Biz6GgN4YJVt1WoLwXp",
  "key10": "21pNDMThQGrJ8mZju5a3GcL2Tu5DBWvvW5SH26hF5TQFUipDxhAej2CFQnj6qGwPfdKLF7cst9FNvMueib24cJ8c",
  "key11": "4MwEbHaw2EdseQwCAHubkGPX5G5oqHRLXKPtAfRtnAZF27gSU5PEjHT4mQUiqbcHZ42Jj7o9Bn4kUCr8MonRJSyP",
  "key12": "4kRqBP3uZsErkto6gXv55bQZ3VRKme53xDB9R4A7X2M9uoRjBUvZkREhLWxU5qifovW6xxertQvsJgNNPNWmuvhL",
  "key13": "2dWY5M5Y6TPb6TnvxxKkp8iDbrDtfNdWvMuzygXFyBeKa4ZobasTPD3mU4yZaCbCzQeRwJyzUibifu5rwYP5wG7z",
  "key14": "DqYxuBUEU57ucWkJqF3xNwzbjP8UQxFKR1iDHDzjPVaZiyJBqeJSCv4gn6K3esU4DnaqxQV5nhXNUD3iwbkSWSn",
  "key15": "2hKDeTwa7z8dB46BXvTnzXB3P6bU5L34JNj7BezZeUUef1ASjvKVmNzggADTEaFz1o6JoZpfGAhfvqK4AxupGdy5",
  "key16": "2hgEpEdCKtCLAH1bWHKdF97BXvkoCcvBqShyyQCpnNfYrs4UBM6m23YHs5JMCo74gsio5RN22Uch8jBZt9usDLj3",
  "key17": "4CT7nADXaUYDTSyW9DH1jsyq355XAxYkU5zBzKPCyHFoPaJiP9Tf9nuGaqsnVZS9X3iGkvUAKnaRawP5zDhtxQCj",
  "key18": "5LEcpatiPvAqKet892g3m5acwxNk1QyNeeNi8XUYsQXk1jtTUcxbXPnPZ1cVWWPaMECX5vHL1DJBrgDYui7G9WBH",
  "key19": "ZvHk6kusJpRrDsmovFot3WuYoHY1hkscsebrtSvPVVsxpbWXB2wDTR7W3yMgPBPXwcRkTiBJYb2ddGZZxguABf8",
  "key20": "4brbLTD9DTnQzcd7pws8DtzoXGnneDEwPUdm16ye8TotJMZQLYN5qQeGqGxic8snAVTqMW4obGBQG6z1313eybwf",
  "key21": "3ckk7pXcxX28LUn1aRPCmVMecrtiVVS7PjBrdKJWyPX4DcqWcwjDFqa4ismFmVt6dC9ZxJdMSdUubMjskA8GnpQU",
  "key22": "3YjhfKdonrY92WXdDGwZjk3DDSoFv3hLidKoAcpWZMgy31p7GgwZdJNtFXoZdxGv5fXUTiY3nJgxKyBg93EEyJzf",
  "key23": "34KieKVyEwqMyhcXdjtfW8thii7UWGnGCkZaFSHCopX4tJxrrwzzS2qS6ornmBwTGBgkpGaE2FMfX92p1XQrpWbK",
  "key24": "49JRH1zCVN37pN9HU1CpqunpUMQkJmaEpm8ZXnexupUdbgT9uaMtsy5obA1zmxndJVVvcPzdUu8XDfQNzczNMCMZ",
  "key25": "xKXkRx2tcUFiXjHw8jybCrmuRzMjsz6SKhTFVXr9CypNcacSwL9TRHMrkoEdHpbs9BNZvnkM3JVh6FNYEviFjXY",
  "key26": "2RCxGgFS33i197WjXPx5jjaSYW2i5tY4pKGp8v1ht6aWWvFVYPWmiry3uAejSa8dkCUKbEWeQZmpHReRSXFi5dYS",
  "key27": "2awLw5CWyW326ihSZ9KAyktUyvt83XYT7ZZqzuBxdShPewSYmrya6FmcwowEuNbSx97UoYPdeYdfbxizxFFjxuuV",
  "key28": "5Z3zTikpqh6thj5B1CY4EDM5grgAVMTSiJatqjJAUEPgjr1eGVa6AhzX7mp3t2n4fRpEN3ZLRbAvxj6SjkTRcwFs",
  "key29": "4jCpYqvdH4UHQjQijRt7j4bHzhUiEPr7ceTyse5sBVmUShajSTuj4tbHJyQRbsotXCDKCZMPUUooLf1mJjxLGYUY",
  "key30": "2qp4grr6CUiTr8uH4x9zPN2TbJr3JXzdFD2skUpBEVEe8esNWZDHEM5uYt8rDZNAYA6XRW6dUsVDPo2Afh2PpsjG",
  "key31": "4eqfvTrJdETmH1PMvDvk6xQS7AhX6jER5iNsUjXUyGZ5phYYLX2y7uHuc7umKfd74U5drxb9APkAsnnjbovvMgsm",
  "key32": "4aho5NjMbbGZrLWeRZ8vWs4jVw7xfK7YuUzJU74GeEEePegHE6K2KP2CbGMAS69FyD7urRedHsTvFY9E7WGWsgW4",
  "key33": "HH5J9kHw77JZFzsj6MK3jRDEp6cQMBPGLhLurcR6UvCZCdQa3As4n9XWXWkJVasuy2P6XbkEo2a2R4pi2hjGrbc",
  "key34": "ZZ2JRTzQC1YUCpr7o8GrqM2wra5aA4ew4NvseGYkZdowWABWWyPRz2sH2yrvZQFSa4UoVR1kpZ6i9GxcE74RB9o",
  "key35": "3Wy3h8xLwNVnPiJ6Nhdsw4dvfqkvCCK29xiAv23mh889kzPNv27EBU6m4CFR5o3UepFhFyc2gbUpTBJg5ygkCeSh",
  "key36": "5GedcTnoPRSsNjGzJdrBRAQzmCHijFckgWYTJN6bSwd8yPWrCLzV2F1KUASTg8UxJTcqgcG6g526AT9obYJA8L1r"
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
