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
    "2rnuZrmWbL4cFaMMoWfVXozEcEEZhETCXPe8jMJoVQMmZFuXbhgk5QRdv6MKfT2gVgHa26TZvAmSVLeYpMbnGYEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B8jPxkLbaVoySSKW74pL7EFGek8FEfcunCWRZsVzsQicSJJKy4hfaNSB7wAHWeZTtvxiHrmCetFNZmzScVZzrmj",
  "key1": "4qp1vyMq5bKh7GioC63rWCHEKGS2C5SHgY7KbDK2khXT7aN8uWS5UUp32Uyrp1aQuzogDyFjoYVBrgZ1TKDf6MRb",
  "key2": "5YBDeUxaG4LBNb34Gtr8CWgA3xCQeMQanPsaHS8LL78XLgHCus6radKtzBscGqGykfbc18g8smGK4g3TFWwQCPBF",
  "key3": "MLYE6dSra4WEcpXLGFzrZvmGqEFZH6jjtbu9G5At55Tfb17wDKgWFxL4MNbjBTdXjWRHhkYmbLoVxnWfwYuHTHX",
  "key4": "2Sg3hywZyko5qohEBvDe61wupZXMJi3J4Lz8C6Lo5nC75ze9P5sg61Ac1jq3puKLUG4aCNSuuhoTejgYUevkFFpK",
  "key5": "4a3LvRqAEGQhw8cYsp5euNSJmb3ffaxLUoU8z6psp312JqhUE15n1gt2a8aUJCLMwQQ5f1tCLq3R2FmqFHwbyzGm",
  "key6": "3R4D5oP5xBtBses6N82HtDzgZMtXkTDXojggPipVGdYoFVFS23Nayig3pFiQw11BPJVagu1EvfU6ukctBgiRvk66",
  "key7": "21bmyC1Wd9124uU1sQ9QrvvGsvtZ67RaRRfqsA3bb24663kz53gY1MnKKSGyPykqpsaFDDBoxJe6QgxS7pniSzPL",
  "key8": "2SNY31RTahdtkAXar8hk7DrstxvcZT6qGkAQ14rTX3GCnskZLCrsGYvTofdy7bfBQzJCE7ysh4P9oA9NKZi7oiUj",
  "key9": "5fCbFwRa6KFYinP5j8vP12usPFxS9fKQd5Pua9JjTWHEZ45VBUyNEiK35dfWpGGHN2BEhYXjH6DJo4HtswqZBfu2",
  "key10": "297b4ZrjxtJ4Dn3APhL4rosR1AhTpxdh3kydqV1X8TXhm3DNLNCy8FcswGRTeroX65TcUcS1t3pVyHYGCY47Juk6",
  "key11": "3gysExZ95miARY38dNQvwyCGWaSaQsiddAvLpVPLfpaiw5bfjgwTXVemv9tq4LmedG3xFJBbfzhQEB7oYp8in7Ka",
  "key12": "yxGj7CHEkUsd2F37QZSPnNu7C3iXDhxxAi93mjwkPbJFDrU2pDu7oxM7dFkfhWYS2bUAMFAruSpWxWJzvPF8DMd",
  "key13": "8icyPdjLj83xdVx5hXS6xeggLkdfDaZBjzwvjnwS8fsRKbmR1n8LPwd7eQYWd1npWM6qY2mDQtoKV6gqyMnkE4E",
  "key14": "653evANsrjGPqbvySZrw6JgeJGx5qjLXxRxHLcBxTRwa8BHNv1EznnoFSAjmKQfkEPDTRbJ8Ct3cgs24juHbQECU",
  "key15": "3hLsubFqVuUpXMuPeKvRoXkgip1n1yYstG8xzxegt2Wui74ss15t43uUTzNsErtrNFyrC6qBmCGeEEw4LrLLSS2F",
  "key16": "3zBGqVbNzMX3VwzxtZdqnr7bqTPgZsq9A91aFNVeb6xWwJQrNxUh86SxRdAwPVncXbVMoCi4GPGNfbEbEoWiWEFT",
  "key17": "3XeShWV3wnzNMzwofPQ7fFuZHge29ZGjCZXuUwCSygB7Tf9jENPvcEkzEmo41v97iCcyfGnstMHdPYcuKbo4XK4S",
  "key18": "5jVFgLNdDZYL5AfnVRB89SAX6dL6aAcDE3Q4bU6JCB7NdN87AHWcZvJAHVRRsNfaRKVbQ1AWPxCvEFRWZwDKNaRW",
  "key19": "drcsc5xXRpVnNFwcsvd63dnJS9FcKE7nhUy9xjichdwE3a6ADomoTaV35G51LZTHCwmZr7idLHdtqWzTT1r26ec",
  "key20": "2Q6cxR5qYiQFF9RY22NjcFR6xAX7hXvf5CbdozdhAy491YKs7AiZMraBGVENpvBpQfJFkYm15q1Yi7sDWjJ2nh3u",
  "key21": "5zLaK7eP3oT9iDD1pLA4Vv9xh9Ar12hQSX22XtFmWUJz4ZjTqE6BjuHmpQYGJTvony7tG5zQkzyZjCneksAKkgDT",
  "key22": "m4Jfj83uEwmhjGte5jAvDLQd92k47QNvggBGWxUFJNdN9pGkxmYi6bqucK6yhQU6ukLAFFgpjB8hFA1FpRvUZ5h",
  "key23": "3fWnSLoUcmK66y7tejdeNy6bZmmTbR8fRL9ka2C25pGkaoM3i85m7HcNkLfcY4dMmjQDNc6BWoPrqUVPAJ6B7NoX",
  "key24": "2zZgK6UrzcvYSCZMqM6x2GfZn3WMzCe4MoSYqGBqqM9AdhdMKJ5D3oXvo5PbaGAXHH84USjJnMbPaLJ1cNGj1EtP",
  "key25": "3qjcbWDfjAzTwrrMqRSq69XPBvBUkJfgU5PKhTcqYivJFTdcZHkRuiZue5SkQrrzg2yXMGuSQz9cR7WiS1M4Yz4q",
  "key26": "nTwoDSd4dv4LD2SwNwtjy5MhE9GXwxPPZWprcdecGzH3LZYGQzSsSd1YJ8mw5syzAEJBqxyzaVr4rHmtuCmYjLs",
  "key27": "3sbc3yKQ7Zr3VDwuJqbnpHd18ebqM1mxje6nRiggmeqUTreoyErM5bdAaGYfy5qey6pNbKHzCdMpkUywgR6CiJpM",
  "key28": "4ypTw3GuKhSpzW2QfYXSCjrCTCuEsiLtAqcZMHnTCGdP24tcbuz6vHsmNiwFdkxNwwEsSwjihA1s4wuuh14mgNT3",
  "key29": "5pmnUqBDtr7Va7es1AiF4RLLCKJ6exDWYvFLrPnXUAh115rK2fT8Ns7p2f1CQATg6a2RuwxzZe6qYHVVDyFEeZR8",
  "key30": "3kSPoXDoscw5BSAx9B6G9CkECw77VUsv4rQsU9pXHrnB7ibMoLr3fJUvArYECStbXVswcHUq8YKC9FCZY9TCKTNB",
  "key31": "24uM9MpdAnt9CyAo4JqDA1K1NoNyw3cHdCBwupKdmrV4FsPXV8a4e3x8VPVEuHNapARJ5oUoCLfw9tbCQwu1XhSu",
  "key32": "2kDzjvEMXLPnhA2hN6T4J6ZYfPKznt2AcjnGocAvitmFhazjCKh46TTo5bYo7SKiuxQCqE9cTaSZzvc8T6XS5BHK",
  "key33": "5B8fXyvFMhoKJomerAumAvGBLsuDRS4ebjWEozGYQt88P4aFizNKTau3aYEjrLhNKhE9PdEUZwZrzq7efYwzNuqN",
  "key34": "5d6y93tALELoDU9Qysse9zAhmXQLYq8yRe5GSouoDwiJUsxEXNZ8HdTYBzPDqSQEeLVvG8bWbQWNpPeBER2pZ6Ap",
  "key35": "3FJHNHxJ19CjRfGaMnLSKHjwoQedd1v9j3xwTMghH4HAsLUykFo71fKi6dEMyGn7RaoHUpndnom28pU4ewZFaya7",
  "key36": "4Ex7YS43kDjfh74PyQWjF2ZF1Xq8xYDmo2V3qkNdJbdGW1KF2gaW4EHs3ycbmu6JdyzyiXCSFvNwVdVqoofLxUuK",
  "key37": "4JsLSZbXa1xZTnkLdAE1xbBRgrkN4FEKYPjNzZrJv318oEv4zpaSrvyv5HpxwwMCetqaMNc7TVgsqKQSw7m2K2yC",
  "key38": "5BUUoJNpHx3q2W2K1XHnuwBwr8cMV8TBvjM9KQ7Ub6VsTZyeAUGpiKu4wMtGnMMsDF5HrCyAJvGRt36DRLDiadRy",
  "key39": "58e7XXmFExPcvMi4yaxzYzsX1DVNptTsiTXSWtAuSp4wrDqASQhRW3JqXXVafVh6zsKqYb5JWfG2p1pcG3Maiy1G",
  "key40": "376kVxjgdxeoATPFU6uj2Z381R6monLopJ7U58TrS4GGYd3Scp2jmXwFBpydkbKtNVcCNJQuEK4PqSUBcq44pMPa",
  "key41": "tjC2VF58eRA4nwWs1UpNLAr7g24YNA94fbXZFuwkmRGHAaBDYqyawXrJBJ8SUN3rjHJF3Eub1ytMtyjA76Bq4wV",
  "key42": "2qwNpBeB6feCahAt6Q4QDxZugBrrvksQqrQgjANfbps89skPZdDDTztprVzKp3qiVy2p7DvA7eGpQoEidq3vASJp",
  "key43": "5YSNr4QP8amcnB6M7vjyLLYF7bs9zYp5qSFzuatetdaoC3SUJ1NYjzgqMTqp26vsHpr2jb9FhCT91z1byJQ6jGFB",
  "key44": "4F8AHsFcnW5f8sTxwr2cGxxZsadWzLj227fPXyYaRsoUWHnjrc59KW8vLkLnNaJQP8pckfpuGoxVrVNEykjWYwAg",
  "key45": "3qDJHsszbhtHx9xPrdKczsrKCLVYDF4r4czTvCJ6pZLToXAHFLBjbYoAQmKaH34wzr3yBTBy5ftWEFQaVP9nCoWM"
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
