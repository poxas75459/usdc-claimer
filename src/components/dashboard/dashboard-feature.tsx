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
    "2aRYm7hJYm1y8D9CXcXVGdi7tP9mgBG1FWoY7HWVfN54ML4izkiEQMdjB2mmQZE7jTVtHEEDvx7LJoR2YGDFod7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oAaPEvCLB1xsCkoR237nwJu35NPaqhiDA3Vmz35C5k2Gj2STgi1sL5yWGjodgrV6pUrs6U3g1hZVHSMFP3NnZyD",
  "key1": "65bhdRaKsdhet9dUFf99dVTXV9a9vXBWvdu7wHCFYMehFkMYN4gDdz6fztHXUcS1rnb1PFAfVLffEg8ds7H9Hgk7",
  "key2": "45MtPyBbg27D9Gm6jH9uyCB9HCMXqryz7gCj4EKEmL6ZGbMkkecVrToTHiWvkp55z8DYaNDgpGWyEoUMZCgHkhNN",
  "key3": "YgRswjtFhePVy6pRhWHtnxaCLGV94y8CarpDxCWzXR7AGBi7d6NTYfyfeWtNfXhcanAWxFhREanY89gAymXpeY5",
  "key4": "2nHPmvLT1v1fR5uf5urwtVaEDQqaWhnPaGTDGZ1nAB2YmECSj2tJxb6RcDwrZWLzoDZezJ6UXW6WFQ8CK6fNUVuh",
  "key5": "5xp78J7N6SLgCz2DfT5CW8sKoZFUxWuxf37imfU9QdFc7K5snatFu9oaPKQfpFsEYewUGUQ1QaQsE4NTqoCTjrug",
  "key6": "2QNQDhAP8ArBetX7yZGk5q5AEymZbqTEkcN1GwcFgeaHqhwZqGGQVDQza7og6CWxhxeCGaKP9rgcvjk6o15X1t9U",
  "key7": "4gtjc82JvFyeDTAHRo9DYtRQhzhH8ee2UNXpHzo7uwX29YsB6yreyDvrsB8123PoGvU1RbzysX3E9FrBx7WU2BHv",
  "key8": "4y3ZGPYNQmsEiLfKYZpWzV2HuLbUV23TsL2jQbwigZf4FwfzubSGwd3ckKwbMioFyn589ZcdCEYeDQWF7K5K37NE",
  "key9": "4wtcibTkbfLAxUB6qvHe7dw1ioj7uxqWseL1FfBT3fbrF8f5oRrkDEFW5wQWihyRuK45ZugMds1KHTS243BW6fuo",
  "key10": "emTcJpXceVVhsmRWGkbQPAhB6gTzqrqbWZwPEpWUcbe4ZavVWBANuiS1upm9o5g3BCXeYXoXLu3FFgQ8X26gmP7",
  "key11": "2ZRgkPy764ikK7RsG4bU7NEMG841wrZMKT8iC3xqB6FziDKJpz1ZWjQTiCypzVTQuKKnrYS2ATbw5mBMf2kTgFqW",
  "key12": "27hyEDRPeYViJjoaRPj467asbw3KRuSXXPUfRhrgZeNTaiWATkGs4ixFYEYj3Nqd7RzdcmZyuGQThfAsHupaeseZ",
  "key13": "3c6gsXTGCQ6NMtGAn9Vj63UYUKZVyz8FGJRHrFxVaoHRsbToEBK8H4YYWuW2o8pRgRe7MVFwkxd2fFV4mPBsZNVD",
  "key14": "4HFYkD5evffLWAxaRyHHQdJG72Sk2cywn7KUJM46gHhkAcw7AXA2CpAXYyQR7bjpDgMdPDXKC67njSpmyLphXYJj",
  "key15": "RC6LSLwwNj8bjVLh1U6V3P2rUowR2FCbvmiFt8Y3uGtWodoXpinthgX5RZHaJxxXFdSuFXSkWHnSQQH3SqyAFT4",
  "key16": "24GbgNv8rPewk27tiBqaCUizaK76fkZTmQh5ZWVc68oVWU5AZsCgSAPzbJhxmJu31LUqaVkyasq81XoV5TfAzAoV",
  "key17": "vRZNjWzByp1jBr6EbXTmVYo48EriojfCYLJrkR4YUz8BFWBeaqMwP7iecWoeAXZGZJwJXkZZffXJZyhAD2WmP7F",
  "key18": "t5EDMnBKPJKdo6xSZRG9pj4htkvr9ZauYq8VRvCGwep2SNFvk8bGX377utJZQxzRj7KoQpxtDknrgk66GfUdxT4",
  "key19": "37MxFQEG7koAqCutr2RKbt31myf66inyXEqf8K8oBaexVaeAbS9pSmwRQLKjTe5LmKv1iuj3CwNNpA8E9jhkzg24",
  "key20": "3qt76xYemrxm3L6gKyLGfyBb1atwyBh2VdjJ9GKMnUSMHX4Vo3YPGJqUPTDWpS59qG4nSE9namVAtcpmhiD6tHac",
  "key21": "Vzn3L8roRS1g4ZkG4tZe3MLqCaVmntoZtBbzhoR83eBCHJ83pVX7FZMBXRMKkqLTLqf26H8ECh6dWA1ZmpewPoa",
  "key22": "3N8SCaSty2btf6HzTNCK622LEFwJWknJvg29DE7i36WXwxnQPXsLH2PSLhk73JrqUJgEtPGSKpKzz93DzBaR7izW",
  "key23": "33ZfFRihYJLai8dooffbp9h99tY7c3tNJ5swHPVacEkn2R2asi98b4ST2eEH8ZRr3s8G2umzktsyE7ipFM1kybge",
  "key24": "5PVYduKm8jZLeGBhm3m4R9TkKDECo2RLDU32Z9XWek7wjADewVwjDLtogLCy6mHXHj4B5MbNdkvrVQCvz71uRsJz",
  "key25": "GDuoZc3YV7f55VQxqCJaVT3w8f36RrUpRzWt8z4LBzXzovbmq671ZUs2xLwDpj41ZKbpWFbzZNynz4FPYyCrG8c",
  "key26": "4y3CGgrkvT3V1do5utUursX9iV5CMycU3uQ9sQmtXiMdsafwKbH2Jp4yhFFfNj3kAjvAAsVfZqpr39TqRWgWUZW8",
  "key27": "4hPhM4NErGrLrQLrUkyb7dnVd8wbWSfRTnxC7LvwMF8T48479hmdwVeZC2Gs6DQrsaXRa3zZghXSutooEjFE3pon",
  "key28": "4ACYmJ3kzryR8HdVQKESeQBaLGJFyyC3d5SjnjM9r3MnE4VujVPw7ZVgQGuZQJFGQqtgWyA7ft8pYGrxpWGDfAEt",
  "key29": "2wRTru4hW8Y5HDHULP2GWV9UPCAiG36ceoLoGBgTHJTTEd5Ly4hpPWBZiiPmZNE6hqkDg3JQuhFTUutLKWdezpiJ",
  "key30": "2tJyiYevfdLfPL9SvT6b9i5WUPHqm9QYwwipmTxVhAuRGi2op62ywqrB99qzMCvcVg6U6tfMLkvG5MqNB21MB8Xf",
  "key31": "2Bxn2XtNcoq8h7RxbJGJe3jhMCdvv6FsYpAavkKkR4Zpu75awrWMASWNdCpgWQhqGDphVxccfqTNmKw5qopw8Tbo",
  "key32": "2PskoD9pD1xyAVc1ZzG9FQ6EJjhDkU5TTNAgcUsT2q7B3LEeYLoU5M1TuYtjjRCHqtBL9J9GrbDqweerUoHkehHi",
  "key33": "2ey7uLASRQVKJPcn5HKtsiR3FAVhXExH52pn4gv9yP3KraZeAtwNo6JduL3QLELgafRpjYDmN1UTRjXqf5PMXhN7",
  "key34": "3X3UgiwgeKDtBaLBUvUwBgy5ESkbWaKJfa6Xu8RogPhxLREwdkrjmjQYYNZrB327jx7rZinDuXJhdFjzZf9ZP83z",
  "key35": "2AZyvBvwwND4pQ63MbzS2HmfddaPpAuvFVfYNTGy16X3Y2FGfqtshKXVMyEuE7rAGyXapHanSsMMqzYhLkuSFFjf",
  "key36": "2zxHqzdQEwDWEgDcqRzGr4ounpybgQwVm4ZKPvmZTR1UJgKg92BtSyqxReY4rFMZm2T8pmnV2TrYutmmSngGgaXP",
  "key37": "53twyBfhkk7kWSB6YgmmDd6RkpGVxmcVpg2Zn8XkuUCyWn9rJJQL4Z22rUo1nxWvJjAj51ysB6A9v4po6uWUw4Fy"
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
