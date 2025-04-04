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
    "57Yb47vs2omyAjkUkXjLKa7c82E7prNuKjZE6Grz2K9uwjK6AYcivuXMNdVK8jUKkeVkPj22wzKavriWroNjHykh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hPTfqRBCvtDwtGrH9bp1jc7NwkZbhhYYUJm1t7FCn1raz3DLiTpimfNtHP1UP898kLvnCazDeueNWgM5jU1VBDW",
  "key1": "5owL5dDjehCDncQcjfAjUomqVi7Ce7NaDsEaQCbgsB4nyWR125D4VRHVrrLYDJ2uUA2zMSQnwWpPnWWXtVecbbRn",
  "key2": "28NDg6TKXqVvxWyQXfqNryx76hhGGscBp9bKASDNBfzgs77rXzUE15BiriycNPci9SM5fF5jEBW4o5AMAqDUSfrB",
  "key3": "4nsEmCsstnotP7wuqxHNumjzRRn7tADhQJQGjx8mDt5eViKeRoCCPp1VH4sbRLPwFd1fnqvgp3HutknurHKcyHTR",
  "key4": "66LzTkHmwyohZA6zEEz3sbPEouAQTq4UZX1U8PmaQ3GTDGMYtVzQKrX6PpqCfcXwEU5RuMfDb34wA9dgvEu1nftz",
  "key5": "PcgiqHJxCry7KUz94WdFyQWJH9ebF6BSgSij3Tr3FVSZmX4pxTxJM1jpNeZavA6XPnm4nZo6SGeMAyJJ1oXTz6Q",
  "key6": "3gpusS8DeQzGqTWmUmSdqnnszbrRLyq91mG2N8DY6mbTFL3NHgyHd55fDGaDam4XA9u1ZYzMkKwjdP5Z3eSNZCEJ",
  "key7": "5LLRwKBkJNrpJWK9JXkbhHod9hf3QsoBkMTJeiz6gSB9kXrcpX4Ts87rTAVXyUWkM41VWJ93huXH3cjLTysKJYz7",
  "key8": "3JAfcxGHGsb7iLdWn5CeNd4NtNgCx4zYx5HgBsJySNFjUM3YjmDSsxzsTRvjSkdSVbTHeY6n7JsymQjAUmtCSHTq",
  "key9": "4juttu4KLNEuiYURqFdgDQWeiBDJhNrX6Z8To6AVhFLgRF3mB8vkcG2ffWC3Y4BEza9MFbuvBURFVqNYQ7qhBwZn",
  "key10": "2cJRDhzgZsMGcRkHLSyLub2rDW8PAtCJMc9zFMdMT6jZDfdoHenuf59m9Q2VTuoZgHZeJZshdkE5qFqoNrpsXfTw",
  "key11": "64ViF9TodfRpgKgzVtn9WdhMKhnbSkvJyWeZurCqrFgPTLmHeU7j2mfw66V9f2xwCaQFHNQ9brxY6cMrYJVKdJ4X",
  "key12": "2FvZwu4BvzkqPpLvn116ABD3EirZyzQ66R4jePect9w1PASeB6Pg48yhpp8iv4iBKAmBxyBDUqqS9vhgwruDaMZZ",
  "key13": "4WhJGz7myVE3upTBcZ4sjU37PjGGanrnp4Ta7myJUbYbmkmkodfgTx8ht7E5uYwKGbw8eSB7CVDRJfMjUQA3bSvJ",
  "key14": "4pxZbkYYbfXGdsoN8ioiAwzGbgCBkY3JLZQkWW96PH2Yj3VBEPc4mbn89Mj6yuDFgG9NkLBm9Wh2sbBxKVoLJHef",
  "key15": "5axNrv7TEnmR1xNnKSBpHcvmqyQjijBwijuw6yCteBygWMkquvLHdUDDWmimiEshDVhsX9dw5xHuZNAnxdGtaLPp",
  "key16": "3ov45qfHZNu92XhRRSnjSNkPZCPwwa9XJk3VDbAML6qz3R56Nv3BgJsc1y3N9GAEGxeP3NoA9ojECkX4nbwUeoF4",
  "key17": "5mvqdMUSDBGN874szWkwXppBU8Gb9kqEhrotJfAPv2z8HzbEmpeyiRPWAYTQtup4FmgNLvDT1D1bhzmDM8PL8pyx",
  "key18": "3ma47VfPRKS1oGMVzKQEDMF45vq1SQGkDZadgwvwrxj6Ahtiighugxiz8JmcA7vZczxHLvryvUKjNbkAiQYxwiu9",
  "key19": "4F2jHfMJeTg9zjmmuqi9PHjequhPrLXki4QUMgvfDD5MJdyzDtPRtU3iavyeGKCy2s13nTwKgVWxAJhfmyekCaJn",
  "key20": "jVuDxD6cNuY1HLYe9JCiMViE98M8X5qtAePfW8QrXajgoTMde9Ha3E9ajuj1D93oPmVjCAicgVo88SkdsikFD4e",
  "key21": "21HaPzJf1nuEtnN2yJHgniwbRNVfagUdwQjWQ57FzjNXw3ZghpyEiXfjKwm3MekLjtqbsUBvuGG7XuuNSC3SzDyE",
  "key22": "62qcJJujmw2QPC3h4SetVXFU9JhM6SBJAqRjZgYUfY9sMS4WWmNVWDb4E7HZWn4E3E9f3crB4x1D59bbQStA8Q6f",
  "key23": "46qyxtXAVzZPiDARAAWhk1JrWwitNQFhvvqKLL2ruiQcDW5qErkoPDdTXu5Eex35MBiNV3KW5eVgDc6myggHbyon",
  "key24": "5jfiUcXLJLCbMdyZnTzE5j1m2dq2UTst24j5TCyPz9nkvKhTpMN8f7u2TsT86GKdQPMqjiDWUZzrW8CTkMZfP5A",
  "key25": "uThup4M9HVWN8pQWMPLMSvec5VeEX4bTp1P7T8EK5N75C4yrH6SELxQaanYW758G7rp2i3n5VbLxsRWXC8fo8qt",
  "key26": "bcvadgdTUCN689PmvqhSBwXe4mNfaq9ezskKzf93EzibfZY3LTMk9LFJMUD2rtfg2QTKYbahEwKtqAnEVz95r6P",
  "key27": "5Nr5YCBeRDrbPUBHYYVhtUKjAxELTUJ1kvcFMccvsbUs34eTGzps3hnk7ZHZxdpfKdhBJmEYEH8hg6Hm23goVxZe",
  "key28": "2H5V4v2pxSzub9zp8FW2a7cyAhPQCcdg6Rk8FpsNqFPUUVXdh3Ab1RoVg16qTLNJDVUSjWN9NCcBQaK7hm4TY8sq",
  "key29": "4ZLZNuRkv2KSX8T5mwhEBau5UbMJaGAWvLPxazpx8HapKSz1p7Aq7EVS4MQQFXC8JChuKgMVdGTsC2aVjjA2XAKh",
  "key30": "2BQPobPPPSzRWEYSnivG8SNYEyhExTNkMj1EgdNoab3eE2PurjF7fu9mf7TmdghuavARkfCYupmfvwAzyuVTneCf",
  "key31": "4Sbes8jkPkE4f5A1ynr5bHwFQ6e6vdzZ5bY2AhzNzKPAXibygdikixe3p6CJ8CeSjhYFPPivif6BnF2ppHKeJjdc",
  "key32": "33kThaCwtESN8fZ3RmakwR45uHsY6dFSnohMXpZkWdB6BVxMKK5Fxym2UtQEmcYmGQ5E6H6EPJ2aCLyE6uq2wpvw",
  "key33": "u1sRBCDcRpsmagWUBB7dPCGfCEVn8SfYaQgAsQxZXieJaS26AtFZdXqGRLf2aTyp4m7MTHswVDqoC1CiRBY4YzJ",
  "key34": "5mr7iojxvxdHgoW9VSqx65G6rfSTsy7VYBhR2vZRPVXWN9o9wJxhMwAmtoNTFbakTckSqksJBJiwJ1PgSDBxLpSx",
  "key35": "3bnzWEv9up1uTxMftKwGRedEoWQGkbiBcqVfv6848QfLCKDskzHiJZF4ykwc9FCCgGhLzXjSY1HrNUoX1xztoNqF",
  "key36": "2rkUEekLeV6S6m6ZWqLsgyFjqg4w5DuMmY9U6mtp1izcsT94FEGt7jBH2SMvKJVt2vUSzVTAFDUiHdWUYaL24rYW",
  "key37": "4xQNwpCSWw4PMda39GUxot3WnBFp86PGwSkFnYw3qPLCW9gm9zgDadxL46ihxZHVNMejU41QFEKyfajxhFc9rkYC",
  "key38": "5BoVscNGQsmvUoomt8odqFMwCRyX4nyELnRTCWdDVbQr1AMn1Z1hiHXNWxuL7ZvYfXGT9ndJU8KKPS28Qa8i5qnL",
  "key39": "54ZVVqUzHpusDfcyVdLYibUd8XniQRKKQ6ab29pJwHKc5NpjioMs2Xbd6GhmUxokgi96JDDB6ZoySEuLJ1PKmqr8",
  "key40": "QucDtNXkewV3EZj4XYVVPWMK4GnC6L7QPuAB7a5LCMQU39XSh1XThghYvthx4Hnz39gFN4aw4DzNoCq61PF7MYh",
  "key41": "54dKrK5yxMjMuKcFnFEK2mQdtqw3QnKGTVS5aVUB6idDsy6YrwAa1E4DXnNSzRrShKFcUANMw8Dva5QthsT9MaTx",
  "key42": "5p7YQfdzy7h5su4K4pu9MpqgCkEaZ4DwKRzw3xTQGvQ68D5Ht3sAfYyWaDSSf8DYB64pHDTpv1oJBqRjxosbwPqz",
  "key43": "5yZr7kqmPV7DQ1tTT1pvZx7Q81XWEwZ8UKNCKBo26wgy3YULUtzexXhgcdFuinoCdC3uuXR9ZaSRwvST7kCxh64P",
  "key44": "2UNKG6hU273j6Xf3TMq9kXiHEBtrHD7RimjTxBgNp83GMPamTTxxVRsZ9csac5kMHprrLYxUv5mTq3S8BeqfF6s"
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
