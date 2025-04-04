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
    "2sqSxjzFynSz1mDseAaupJ8CptieDUXiExQw2TC6r1nsH1H8Py1ABKk4KAT77EMxdHN8Txvoswc1gxhsEtXmod3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tk547LVNtD7Sbe6LeWjNxDTZGhLZnj5LMP1fstWsfZvMPSqu3BKtdy1pMwi2fyBHXqo5VSpsah3jF7Q1vMEWGu4",
  "key1": "42LjVjegmHFWuDuDrXPif5jRRBNCAfDm2gDbZEvmHxQo4TYBgyMXacUoJaTjnA3oPueC9AsBZ6FxoczV74PscjaH",
  "key2": "57WD5RtQcAY5UBi1cazYdPYPMzoCJgsD8fde1XaK5iP69rE6HWyL15cDu8Gvcac3GteexBahxyCRUb12Jq6SRXzT",
  "key3": "kH1SwDQQkGuEnrzNCJmvjAHkew3JxTRBpzh9DyrFhagYhXhzpKAfTZ7p6V8FRzp7tTYUw8Fmfrcy3w45ShNEgAV",
  "key4": "5EjqiAiF91XnHF125uksdAX8LY7tNfuhHvSio85P5zhXsAViEEbxzd3w2bM47tqUWvT8qRLq6X3oZhEH6kZVMyJT",
  "key5": "eEd7Tkbuv7wJWLPaX35ygX7TixNomKES7t6FU2xUCz5howXjje4gHWBqm2TibpR6eSTs2qmtvWxqugtTEUfbmXE",
  "key6": "4kobmpi54mqRE1oVHWiAUCU3LKy56zoSwjPsko9XmtM3Sg6G2Xo2iNwgPfuTkRgPV1hH6fQvbkdzgETWTpzDdWd7",
  "key7": "3BuNPf4LB9etBhPjHRGmuqQQFiq1UTp45x9fkYRETESixVz8KDYRhFXGePtgJPzNbH5Jk6rvdAEY6QHcMM9xXhcG",
  "key8": "4KTRVsrXCt2JSCWLkWgtMss8ZhPkkbrWTgsAbVK1rwzVYE657MfMWKNxBDZCTFERReCzKMU1UEMMgMCR1z7TqbHU",
  "key9": "2gZc4x8BmbTFdk5o4XwTHjSrYwGrNduKJXdRUq6Dc1YvLstjHiky5mUbYaESBQjfeNEqH47wgB8FXNyCyN3Uw3Cw",
  "key10": "4Td8hKjCr5ZYuVnDrbQTPt2YfSDu5t6utG89PXxKBzWYJVBocyvqwwncmtGuMPpwY5H4fT1wwzbm1PYVcq7DtJpT",
  "key11": "2ho5gaGKwwxjZmp7v9FNemQm2vBE4ViTkcQebANP4AKaSCfq8QwR9oj8yhjNCNZ1hGP5utgQkwoEUXuCcA7dksgX",
  "key12": "44CbcwPmMXCbtgPJF35P8GS88678Ja3oTmZ9MHWzq9kFmKF4idCes2Rq1T8NZGjpRrjBxKQviuGvgqvbyK847Kd7",
  "key13": "4cjsnXEN66MXkk2SzLVsoUPhJDzRuajRzZcgoNpmAoWPbWP9qxjmifK6AG9gMZMLcJ48vJ8XnDBCA4bFRq2LTGP",
  "key14": "3VjUzzqj2MLx7KbDMyQJTQjbz4WBDSURBYS79RKkJaSjcuC3eNVFALq8BN7VNXzbcxSYaNR25fq2yoFphQP2q5dQ",
  "key15": "38NJrbtmArcTiKYjWEKTzEMLXqzcnSnJCgQU9Ldki5aF6fedNpN16ym1gwXLs5W8FFyHhDAHgHk19yME5w4nLJNJ",
  "key16": "3uXrGr31JYWqHJvkjLDaXTxiJBVEYjzmuXY41yHF4VFHm1bDLXbeF7GVj9Uk2YBU3q6GJz7d6rYMLiQMgpikzwMD",
  "key17": "3Z7RbRN96guMbGmBv3J5QmRkXeNrY2zyCbszyaeumRXfFzJjFuV7eoHiXXYXnfrbNbC3QDE94KydUgXsTLfu693G",
  "key18": "3Tj8naQihR3DXCWMELeM3CSbGhkt4tcmpmb8LRxpi8rXQSwx3L25DjExjm7YY6B9jpBgs5MQLWtyX6mMEiLCD7dn",
  "key19": "3UAvc26smKL97dCRzycoy5e5LvwjMsEsMzBqfAQcNV5pMDVGGoZMWpm95e6NZtXmnYJE2xLKthjg94r4uE7SgNz2",
  "key20": "3cdKrLHHzeM1PmkgoTwgpXLdwEL28RRbj4t9g5nP35ov5XuHJEeZG5cU15KUJxGnYghHZRnkusVA7Hx8Mpw5497F",
  "key21": "2PEsaQqA1V7qZhc7darNEdQ5gPQy9YDTaywjVsjBWDqTrGyFDd189gsK78bP3w1gfsr43gDLJ6VhaXw3kEjgRq9g",
  "key22": "3khi85F2tiiVGxTUva2jvKqmG6sbvXjyxbZEGRTox6QyMre5nHxGVkU8YukFJnbFCTipFY9roomx9PKnQbHMP6rU",
  "key23": "3ZSLPYQWYGQDyoZnTBjvPFHKBekxLnf4Dwj3egGQTygAaU2qoMsxhuKRBk5hoe7UENHYWeUjUNq7tCVBVAd5tGtJ",
  "key24": "nCeFMRprLTqXSkMhh1Vow5SsPaec5Gc7P2gG8VpnzPAe8V5VrUh71j64qkU541aNvmVfmDoVi14eiBKFi5q6rGc",
  "key25": "2BGywuR3S2HdUcZ3auENqPruAhWgHD3bxppguCBoMp8qNSDJKTKkRFJR4y68542Umb2bK5tJFCV3yxkqaH8Rovs1",
  "key26": "539aZtpckyj5KExjyDePCrFnsmW45A9WQqfNUYT6u5GsYL6D9GaM8hYMak3Lq5ULaRfn8Rs3eZjMxr1BgDYUhp7A",
  "key27": "5urTNsNCWNiZBgjXqenXUq93pvH5XoNgXcW5BPzhXVGZZfpSe3fBWr7gbccndPvP276nuFxVufCBqfcGrHuQjnSR",
  "key28": "486HvCtpEfuoVYM3WZ7WgAscXojPbYgZuJB2nmE12Gt3ycLTmGjKXLpegdjP3PdmWs64moCJ6LXyMfnR5LuDpDkr",
  "key29": "3WsBfey5BVrdZV84uPJmRHUvykbid9WDjMUksyD1CvfGCT2KA6pu6KNiX7myAWnLSdKt3Nv5VXufPV4bL3s8L2AE",
  "key30": "2bfwJ33gViryDJs6tRAGMACAe3hpKF7y3SUJ8bSqe6k4tUxvE8GcUvdSoLzmoTyzt661aA1xHxLvBonDqjYb5pAM",
  "key31": "4jzKWdxLBRsP2MSVnii5XDoxqpPPkWU3VgKjEAWaSy8qTx6PadS5abshZR1VfXgj3FngFu5rs5v94Qnj4FNQzfYe",
  "key32": "5nGtrLpjmJz8DnpainFrr2nVf8JsD3N5N7VStb5z1HyfCMJSQ2jpv3dRuKQfNocy8unaDJUpPcV5XLXEbS7pmXHd",
  "key33": "4zAvHG98W4Km3hCQ5P54oaZmy2UhH2Uc7BFRx5PNoEeffX3ULU9tr9MUHd1PKJbX2wRKbDxFduokK57TSPnQfGq6"
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
