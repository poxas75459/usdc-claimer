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
    "4cAoFi195nubnTS6RwMAjYngqfwVAM5orsw2u1xsqq7GEbQpazLqbfEv4muDoB1X69Hp27RCkMNy7x3fyixLonsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ECWoKpNsCHHUH6N8tJz2CqE1LYatP7VAhjr713EUsM5icnqbi5W7a3vdiZdGTKt6x37SwywaqSNyCqN9fuSddce",
  "key1": "VfxkYjgGCsp7sMy4LQmFqeJyLsWkj9AfUCMUSCTw7pks34YQgHGR9iAU1f8P4YnBxoVgMTBrW1eRr6NNKyZQhSA",
  "key2": "642h8pZKXk9F6S25wbXN9zX9TW7FeMn8PUjfaPP9mX29r4MDnphbS6qnUnZrtZoC6JLfmsYyV3eMnQ836FS9RcET",
  "key3": "5jeEyh7hFsEt6qr3tKvsS4mrmrkShBpTG3T9pdGRVFCH3qszB4XTHCAf2vfNNKRBomUWNvw9fMUAmfZeCZfo6MsQ",
  "key4": "5detjjrifvaqmotLDhqHgyHxqT4kiyfN4GhAsC3NYq1R4pgkf99SVLZyv5ZP3rRueRXtozFDWoKo2rJZWGQ1NbK2",
  "key5": "Av4SLsN2x543rphp753VNMMeAS9fesriNNf6hdY7QyNQsaM8mZwXAsQ7nniGeG357M62dD3xn44wsvmLAVVYa3U",
  "key6": "2LteZgeqWE8nAYLcf8PMNZp2AtqHNZY1bN4KPesTGvaJRqxn8wQsDAC6uH78iTwdsaBjCtE6LYuyMj5qgo57hDX8",
  "key7": "3H7oQoaddqaPSor3cbmzWjKZstQhNSJWALdG9L2hhCMjeDuBn3qe5QNqSAQBwR6x7rAgmnNir8cKYo6B382WVXbQ",
  "key8": "3JpSna3JhdjWeSbG1XSKCgffH6z2EwBNJPztvj7kV5kw2JHXSoT6BjNCAp43gCuMNFmJm3Dvb4gEXDLxHXxxrBf1",
  "key9": "3svoZkzudyZbmCaEMEiEJwpZQMA3rvvg2cSwZVNRvxQSBuvBuHYC6rNq3stWQpwbe3uwQk8xHzGc7FGGtUhKxJW2",
  "key10": "3CNNmkyEpLUJWn9sHrmRL8TBLw99LiWiyEZXessDU2hcsB5QMRpnPpfZoARZmP5pVr3YfzXpN43LGFctRWCFCLfH",
  "key11": "3jvXNRr17tGfPF9vm3h8tKBUk6wFEPtFmeV6ibMHTixeDcHEFzfg2pEWZkDHrvc5DEgx41imDL7ETqiEirTzdstF",
  "key12": "4RpjcnV5jgCCv3mWb91rWeEBkpipYceXuoYEttXtBmQjHLV1m8YzgZGYcCCcGUE4btfS2SRquLJfHWVd3keCmytm",
  "key13": "3rKcXPuW8GCPYKBG4ML4Y95SDsWUDhUoYK9xQJtxZE1d4gSQtaYyHVVmDfHpXdbV5qupn39uPD1GcUZU58HJdmN5",
  "key14": "4Mv9tUyaaCTT5hyYU2i4cz2XiwfFrEKUxGLXVTi7zbGBgLRb3rwM9okUDpNVWRcZkaUhShd4ZSQhKbf7uVbyfBtU",
  "key15": "Q3oSxBzqz794U4F69ia7BvAyEhqaDTcgwCHfKGpAmci4bBDhb9pLqSkwrbgrimZjVdQVDLimJcnR8zeASfN8ASa",
  "key16": "2evMKcizGA8mPmAkqnRG3m7ynwKwqxvFHC3naqNxhpxRwdePg5EdezyG96LfVWqEUBYytsjjHadgrmhxapBfaUz5",
  "key17": "2gCfQkC3EmE7uK9cDjErLRvpprpEhv7CsWbon5rpfvbTfY4uDCLnz1bTosBbYVyDjB5AYTh5rdxKVNhBdAFQ5faB",
  "key18": "5ZEuw5mmfBj8f2uFLFdgSSt4Ymx57vL7Zpy8pmCwMdZ7tVKybA8MP4G6JN1eXfZpePqe3Rz6QnKHr7YmVLqBNqSG",
  "key19": "34iYGawZWhdkE4vVRZsziqEqtrb1qo9WmXdV6dfor7nzuWtv11ghNZuhHyG3y6jUmnYoeVrYWYGFs3Z7xgcqc6mE",
  "key20": "5L9ezAiq4vhPdQbwQXsJt3qqkUcawJrG8e17vgEQQPyAZwZh6QpbaUUmmNEYoPaXWPCZSfrEHVjkEtZFYaRCkeMj",
  "key21": "31daB7ktpKufPE2rxpytP5muve7VUXStHRtpKGbtGkzvutPhmy1okUnvuEhK7d9bs3R4NjhFGfV369ge17e9x7CF",
  "key22": "2ETFRCdjuN6gGihV44YG4RAwwakfRTN4CujxiKu88Z3LCbt26YdrxiHPmTWzKAF8u1gszD8aJnvfUWJJ4KzS6UXp",
  "key23": "rDwsiMonuqxh3E6pQw1bAQHighavkH3xNZbEiz47Vpfn459DhZH2KWE36uvevNLG2HLmRv8cfPxbpJhs1iAxRs3",
  "key24": "52v1RBrM64jzPEXUu56LFkH2eApkoj2WsgZf4oQze7eNevDsjYXhKgoBNqk77nRk2jrhAsgiHxn4q6UYymiBqg1X",
  "key25": "F7F1gP4nySyzoK78pdMYCAqnjSXVc9unbw1i48LQ3F3GEn3sH3Bs1ACibdbvFCN8WcmmnYgffvXh9Jp9bgGwmAL",
  "key26": "BJpQYqHPbyM2Tv4BSuVS1Nw2ftL2oPXCpbUAQAAdwtCSEDrfXyHMBAvjjHwMyLFAhf61Vd9xMgAkEi3SrnMx1YG",
  "key27": "4aFSm9cMMkrWCoX39M5FdprYLodcG9CahfxTzrLGRMku3PoZzSHC2kPKbh3UgN1XVanShGDUC96hB1tePCogXzi9",
  "key28": "2Qp5FQkC8JxnDKFHpWkeJWXBKh3BWcX8daVqu8HJsg1fceTAfXw1BSYmPepCTiio2z4tWcWQ8cYPumVpznmELJ67",
  "key29": "ei2A2Q8GtKbBqYpGsubD5f8chmZdhLgEqjpVNzQXau5yaA2axyZKWcmkABezA9KmLgREoqmBx3haGioFwWwjzLb",
  "key30": "4no9tkK6i1W12pJJiBiGy7TSn3z14URRkpWHuH1Xntj8yycNtX6uXctYcxZFoDomBusAHud9NQ5hh18YLd3h9uNp",
  "key31": "2BNaHwQHAVtcTDz5bpsCG2SbW8nD3k48jg67UAEuGEpM6eyMSCk8997yvRNtosf3whMGMyNEvBogKG5dycvxowir",
  "key32": "VxAXgVZEKkEfM6EXEXmMxeYu83ZNkTBeMknvjQShGL7RfYNgWf98vgSryKQvapjQE6dT5SW3K2yKMthBdHK2vuJ",
  "key33": "5JCVadq4MD5nQohfjyaT2v9nN4S4Q6StHUrJoPRJr86eHAbQZMLqfeWzs45HRxsYWz5M25PDjdu48VoDp246jpGX",
  "key34": "JkEBxPiLyocqjNJoKstY22XcZrbF1Qmnj5C1FMw3yUASTXodezG59PS473eQiCXcSHWc3RWxUQWLQAPFFKhLY3j",
  "key35": "3nDn1Rv3mu2JJVqNnSMycFwDPQg4SWBszkYrETHxLsfXus474YqEX5MnsKaycmh8aZCvh1cTahfU1bLqv44s4LpL",
  "key36": "4wyj9tio6TzMUxCKPGxW2VrX4jMhFTxTMWZoG1Pdpzshq2w5Lz1Su7nAfDWS1etBtYmTxW6xUBgPYesTW55EmeLW",
  "key37": "5xxhtAQeMV35ZgmCNYcogEhFKmqvZDJZeFTFRPWBzNeqPbHJSBMAPbydixZaNYViHTYsFLHLzYS8FZ1yvuxUVWUT",
  "key38": "4oebwgURqmi8v8Zu3cHisEzB2XUxJPDu43xpWyj8uD49SYFhSXm4jtU8dQVgyepB8vHZZmvNbkBDqZzud3YYEAvY",
  "key39": "58zLLWLzEdYcavKProB32JKS3PKZuGGLTPTi3Xz9DeG7Jka8qKzcrtUyrH8fBCGqyzEobdSU226ZcayA2WRYyLCr",
  "key40": "5fRqZ6P7JMm8TzxxpcM7r3FXbr9Bt6DYd93Pq5uzY3HnsHrcshb223WtuohhpgXh9JA5kNVkEZDkdbZiduaZFqCG"
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
