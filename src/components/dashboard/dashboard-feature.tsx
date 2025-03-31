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
    "33QYYN8LwNpaMX4YzZ2QSA7EY4vcq9zNvMrFTB6A2LzrvD9t4KRp1kFXG7rP9WEYGirJ8BsFUji2nerJpfWmsxPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MF1VxS4EHq9VK4ykLmzHq3gVu7tV7co9WpbjdQT9WNC34XC1ovNYpdSSmpvB96XUNzWVAqTuKwdkBwYK4brcwrU",
  "key1": "5gPzmAuVTVBRNBqNXiwkuQXbSgmyQeTpSzxSSsFgrWTJeTExyzthS9dGpZm3f2AFSJNBpYcxEdr2ZXUFeEGZDFDC",
  "key2": "22w4aT1WsEimM33waY3QGoxRT3RGw6uVEjpRins6ksj1YeetMnDkTjVvQcaa4UAX8k6rC5ihvNhQ6eHb2SZ2nnB1",
  "key3": "vvdjTm8PkFM4igXXmE15MA8AWYoJSd7kh1Gawn15BGhWhWy57vSfc2wtuirqskNTvmwQuxkWNVwccMnMtoP79z5",
  "key4": "SbvEwX4sZhaeuuC3ZNjYGPcWykd5B35wKfy15DCiU9DS9ZdQ3gRdt8AofS5ZskRynJXEp2tq2X2dH2XPjXkV53j",
  "key5": "39F4bX2QGumguZwku6rTESidQNpYhzD1Syk7quFxhobhoX5gCTQyK4Lagsk5oGSVXPzP2dgE5JTNyx2psQL4i22J",
  "key6": "yDgLWgQDc3id3J3SMn27NtJU7Gsp3R9Tfy58XToNpPxGU5V11FCqdZh382fWyLkctgjdqA5Pegwp6BDrm2KTrTJ",
  "key7": "5EEWpQbRC25JpvoxGsZ9RZSHVZFQzpZjNmWy1jGBYdP4mNVCwMPCbXV7RYMwbiPz9sDhxAoYFYc9e2m2sE6JH8Wp",
  "key8": "3YpTrjvFMicZJpNNybH3Hz732dU4TUTMnDyCXUevzaaTUcEq8wetA32rpGjvdj25ahhj43CTwfCBxjQKy9DhtJfq",
  "key9": "2eJkTXAwQaUVM5oB1mXD2NpFA48zFKo9Lm2DPuqriQgZ7QViXdtu4xERyJanyJfwgvsYnmzeEp8RcbeAjSDdSSqz",
  "key10": "kRxAzjjXtnDxJj4twyTs1z6snrwo1mAxcTS1VxGSSLeTfdZCyTy6yc7anwbR3NJrjjtYFBo94MHKMFegHj8dipE",
  "key11": "5BhyLxRj2bn4o9ASFF9TKpHD1fq63sx1KsMF7Ng8Fk73aBBW8hrYAgDJmPQSN1ou7QPMJhvQKmNhKQbH7x3A65JJ",
  "key12": "2VrDnXH1raJy95DaHguPiB8qVJwcigcbA5AWAYHssGVMTqkqNQDAHWgfW8QEE65LGUdpjLFWRunkxa3G7AA9W3mv",
  "key13": "3ajBasGdzyoDCNyUDMjLQ2Aue8PEFhM1kQ5Ay94fSNxHHUSJt2uYBxhzY8u6vZx2sivHUyFTdAv1kK5SiFu1iWn7",
  "key14": "2U33WY2cfeZrpdsNCno8D8pMzvnEe4dumuR99aY2TssJPS2xeRNyuxpN2uxZWKaTaCYhANhvVmuUz21Lhwu4a9Sk",
  "key15": "4dBPPgoSnQRYQ49fSfw5GvaFzdYAPsDEANLSVAoiJLsxe2GoUdvNprp7MKnJfyhXWB6TsFonGjDTKiB9ua73vdiU",
  "key16": "mtptAZnLFegBt5pdZi6V1AVsQW7q6NnAAqS4Q5PjgGzoo1uGoTtbkQ2YbJ4Xy42kD3mumjJwPymPidkRArP1JSj",
  "key17": "V7ZX22HXgT1gPJuzgbMf9RMJS1vYMSvxaeDr5Qi2suum9P9ff1ezW1gU6PtaDVog96qoGjfRLQBnucCdpyqqf6S",
  "key18": "2NHqPxCmHDzphx3zThhTEnyjcQmrxfNJy9vKvScPDUbAeFXwbrYHTtKUFYbmh81k7iJ7m9bizGjFUdvYkfqhA1m9",
  "key19": "2kBgfwxGPJ8Z9tnwCHfdfQP9rfe4jxuwuXEakquvHzhLndHpAsTJp9L68eNARfEEmQj5BQXBMx7ot2L1xLj45Bkw",
  "key20": "33hZ6eQeVb94GBwrhZPAZiXXEEXrrqsfj57gR6RnWx1uipkUVcpiyRq2D9zVTsyd7zxcmG3C2fKhtay6aBbXnj2b",
  "key21": "4SigcSTcwu1r6oZYU859uMx2tSe5LvW8PPxYVBCBf84UWLkRTprHiD588cg8bYBig183KFvzxjLFQvX4BwoRM4aq",
  "key22": "RmLWPjNN45ticudjy7HrB9fSf7DXpMorXR1ajWjyebfhRTPX8drvPvdNV8yFT6SG2R4GR3zhkz2QAKiTADb8A6t",
  "key23": "4MbrmgzHbfa8FytFLAN4P1gs9XesdUaeMLwsjTnkm89vMAZLiynLFLNiKt1koBwKZRDefkAX8gdM88qQF3RqoFLE",
  "key24": "5gX2TavNZkQodGPifo6XAiHKhnKQ9seM6vtD2mJQCN6aPHwMcvfiaAG1Qsmh6BFSwCgnTMicRNofu87MSsoThDt",
  "key25": "59PD8FiEEZGk27fkbX9UTN5TKrYJvtPMbtSisUCjGSBaFuCx1jqJ3zYoc8FEBRvziNUnY6cjX6iFgBWApTe3gyoS",
  "key26": "kQwTYx17KouXHszxsHZUEVqnh6qGHJ11SDH9dyuHrYqEMTigwjSdh6rXYAafbjY99kYhpc9d562W41DHBbnew5M",
  "key27": "4Y72D65LeiFK9gBvp8V9455yUTKkBkNmN66V9bZvTvnUyXGk8xteMUeSo1kkFCQiYFvRbWAsmLRWXrMFngH51KM8",
  "key28": "4YtjYZhgy6rYKTfHa1LDimwz6jVHyEWz93THrwx4YwHMNGDxq2GeBVNzPrh21n6TQHPXJNadZt2LJYSXz9KQMNwJ",
  "key29": "3zsid9pDGVRA4xCN1KerF83ZkP8uWreRX6aCCiKzBsS1apyvstsTnQD8qE8mVQBkjvEFJdXH2GRDsBasJ3qFzHNL",
  "key30": "2GEFk1XgZNBRD6skMqaGMkdWwKhLG3CcZYWe3foca55UvU1qVr563BUSBQcY4uNkXgQK4g6CMwjzZJt2uMPFDdb6",
  "key31": "5ijXYR12NZCM6R8padPvyyevv5BT56St5UCGfGAZP69VSoBVZgsubwUtRFPZiCW85dJnPJu2GNrTc59vJuNEiS3t",
  "key32": "3fRksyupmCmDao3SkiwpGqMc4qtwA9oKVJsj2pgfn1yjraSCfHCy97UPeFSZR34jDGA8FG8ArET5CfQ8Arf7TVm4",
  "key33": "4RHnH8hpqMdLyJyGfQ7vh57ymkz3eoxZS1CgTsFZueXDWT4hutUEKw6UkFSJ4bfDnABdh2bxiPP72dbTPi9Zz8nt",
  "key34": "5gXrVsFJZzSzsAQpBz3GLpozCQstUdjUhJmYd6bLd7itepqAoVoj7DrpC2fQD8CX6B915xTMoyzjEsPg2SXkeNV7",
  "key35": "fEoWzGzcnz59zB1pPVrMbtfbM3GqTgu7a7ATVv6dweiS2na2owy6kUbk6fJJvY6y3SJ8mVzGZ9EEJa5iLHcw8gC",
  "key36": "2o2wBDG2HdeXJ6CpRagffr553UCyFAGZHaWrPQMtuvMPHEppVkELtkmBf8jahDoP4U6Ks4dRw7jFzC4eCNeeC6TW",
  "key37": "2SDKnCETf4yapiFTox6cWJD1Pg1C82jePDdDAQE2C5QsrkEmCrS16WXNZ1h2iDgTsLskwB8pUU2GMViKYijGqVU4",
  "key38": "3GF8cQ3NFifi1iyxEAC7E7uJL23Gxv7fmgJywToqdNHAf1ELSb7ipgYJpH7uGbFttE8UA7MZ4szwML8eJng9thzJ",
  "key39": "5EcLFeMuiqBU2u5UBf1wvBRbrB7qDbrMb4X5mkZ4rPETiP4AaGypqLegBU2WsUaJJAqNAFYbdW2Z6nMgYzTikoXj"
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
