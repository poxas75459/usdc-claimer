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
    "2yW7BZS21w9qQ67JhTxafgs8sY1pvSAjcGCJDEWHXWzdYroyog7Qq5edZWgpruVho6Vi65QkL1FmtwbcjyueWGC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "318RxxTZSgCR3zF5oX6AupDSXHtkppachGtZ18Yhdk95vEMM5dSuytP5V3Mgz7VtB5VGNzUR3aPP6XLRFH32Pk5p",
  "key1": "5NEJVxmkRrve5MK4dUdZShbGz8kpN6aFNP66mJwpGwBeBtj17rNUSqbdLhs7WkJd4ob5Jc1XeZsobMd1218nWPPt",
  "key2": "P9znyQTQdYEZ5ggNMwtxkDEf6ZYZwM7472pRkFp83QfXTLch3rgPRuuvKTqy4zL5wbdD643x8RdPr2C4KzQstoR",
  "key3": "3KUn1yEwjHdjyWqN6TGrw8mqAnqYRKEUP2WSyiBra6ydViaeeSFUQJiiLvZSp1torZnWL6fRxc28FYBhdR5aRLhR",
  "key4": "3fEqAze4PPJB7xV9veJmVK6HZ4siaq5qb22Hgsk8MzKv4XrrD7eYxNKRoGmXBTFZKDbuUBxHshRWbjAFaLLfdo8o",
  "key5": "3fXfUmMbEAUAqcnrE8PCCUoRxGKkUK3gTkNSQ8Fy9jgKPRR5Bzrd5sbGdN9SRdkHtpB4kchasSkfZKHVqQ7E9BF9",
  "key6": "2WRgUj3EcY9DwT7vv2FmcaHtY9m6VzSceAhPxuA4AnesNoNAxyP8WRP1enNRv9frynK4nN6nbVWAx6SjpYujcbo2",
  "key7": "4JdtgHb62ywnnKG28UgeX3N4M6Soknzpu26pMpk2YA3B7XNep1A3iHfLDenyJbUegvSEE28uijCMHhFaKgVYUj6k",
  "key8": "2pMEAASaZSbdUW5aem8sEsJAkzeox3zBptHGogJnWXGLNAmNP5BPpq2u12R19RyL3KrixfJvtcQZnf5p18KtLMf1",
  "key9": "3ancrdQQEJHim2zUQxuD3rqjb41tkWGKphwZmNTQSB6xQSbEuGSUbxxEn8XVyvBnFwQN1LGcuCugwZ8ZJmByPdDL",
  "key10": "AkexHbPqLkuYuBbRnHnGAvCGWj6TyeU7JTyQtsFXZp22g5yuBeDcBVMvH3QeASRbZZ71XCAFBjWLawVXCBD688h",
  "key11": "4oZFoFE2bjQHP3Y9XvR9ZMRsrrARBE9xnprnCVzsxRS3PRxv83ZR1wAnUcfQj8MGj63MTyFhqHjPYE16zo6Mwc99",
  "key12": "2J8CKoLCM2MtbuBGpn5Lk9W3s2qUEx9RCkhH87tmEY2mTA1VyJFVdhJYRXs3EK6EBMuahqhsZpr5MbUy5KyuaPSY",
  "key13": "XZ6QFpnnMgS7N4es93Yfk1ZWYTubxMQtpCQrGrvRPwv8jQiwgXca2QfLbdNfakvSS4WsSnsNGaPhDUpWQSHRzVF",
  "key14": "3CzfKt1JCfTYnrqJ3hXrnN94Lee2JXdAwsLVwEXaEL2KPWQcNhTBZwNmF9oDn92ZvPeDz2q5Eob11StEpha3XtEi",
  "key15": "XHFLCnDqS9dbA7v6u2v5MLV1xHg44qWgTtKfT5p2WvBoYknTWCh19oPRHazwnajvyPQ1nJ6u5kqKQyXHWXMG79X",
  "key16": "47eb9YfZTogcc9RZDd4tMixEuoLRSMJG3KkLTyHaVG3Hj87RWj6pQXo7szZ59b4HHR3fbnAzGicBe3xbTAbjvGmN",
  "key17": "3A4ahSDc5NJ1QYRQvH6RHTdBWy3hB4XwkubnKoyCUKokVSDVXU4o2Kkb8Xu2UWm9CULcJmrVF4xivmZ6e9TBmYCW",
  "key18": "5g54TaoxGLyw444yEiQm4wgzrqQJhtaAXH7giJPmMEJXnnBp6AYSEzVuyiHYj3aatrAngYUnCuWRTkHSPyHSiZdS",
  "key19": "iczJm9hYQHHvLbTyqLTK7zFmsQKKjunBV4gNrVkJoB1p9aRwpL4JCCn6bCwNurXYgEjSkMWU8KJx5ApeqQ7hbbe",
  "key20": "2V24EPPkfGkHRsCHhamTHViZDmVFAztFoyZ2gjHR2JkAcJuuSjAFMcP5op7k7WZpkqop9DTPPqfZrSNiCUo2AFBC",
  "key21": "34BbUU7sHShAdvAVtVA7Mw9FguVTEf5N2CyLYWHAKN4JA5F78BQCbcfqPCE1MvD4rDtX9Csrv4uXMuAccFxDkhHe",
  "key22": "5bJNEPGm8Ub1mcq5rnFutR9mSkkDTR8YjgzZ1qpo45dsqfW2m5rXonv3mT4UgoamH8idbzmaPS7KGtbd3Vph2zv9",
  "key23": "3GjvbvXzHskSKYSopNR9YiTXzk56mgZraZPRLHtJhny1erjVkdjPJU367jWJ8EMQWxzNi9cTLiuV5gJr8c9fDSG7",
  "key24": "bLGqtFwNEvgmLnxw31yZb335B412THWodwE8hDUmvRSvQtUXQXL7oTAhoKMbXwhAg8JTnEPr5ZFFz5SLGGez1Ys",
  "key25": "4JRjBYfyPgP3MzL3K2ZBV3dwofn9dTo935qtBUQndUPZBb6cZ4VnJe8CneynVLjGupVd4k6oqTPXvXgMpGLYtxKb",
  "key26": "5MhVgAcUbYyFAmG45BKhcLkkRHML8KBb19PvdsQmHG92sejbuErs9KcXF2UGoHr8WcYEae5t2DbwZBp3MFVJttGa",
  "key27": "4wf88Wh9pn24qUk7V9AU97tYfydB8b4yoBpyzyG1VjxeZqB7MUrELYEb2y7C6XwBuEwkFjVF2Vi4QC4ck5nDSNfk",
  "key28": "3tTtFB3qdkkS5fuxZ1mHzvn8GKBUBjjWzS4MSPCuCmrTwd8pAB26bSLz4Dvr8r9ebVUALZAzKSnPnuxZooP2FUNj",
  "key29": "47mnNe637GmC5LaFQS2RzGdcg7Lbe7F9n2SRjA9FNTAccisWtR4Mvqow6MEcaTwxUDugmENbH1ahx7be411z4vFn",
  "key30": "5sHCL8Th1J8L7kV9wb5DCVq3sHEt9SUjyF1erErX3R2tXfVZ8ezaPaj8V644J6rwbACaGoTfV3mcccLjT2mePh9A",
  "key31": "qK8LvtJiK77KYfQCUYfKv51sYQW12VkBWCBvuk6vZTP8NYg6dkT5LxEXiCS6kdrmwzeWojX3gfjTkAzUqKmU9ow",
  "key32": "5VfJZhbFQuPUFcRvX3BtUq2xs7ZrQCvX1uz5iNifVQRM6k1M8iEJZydzfSwzwJJLVo9RAn5LXwo55ED4C8qideV4",
  "key33": "ckraxKM8cqw7YpmVVy7vgrtq7BSD24frJg4e2Pc3jmPJs4ktYDGnL2ezHxzA6GQ135GUw5LrSXsoMM9DH54mD4w",
  "key34": "4cj5Qqm4XsJAedvz85FVVd2rugtq2v6YmLokHzB77TMtcWxy2ymESmMankXrCdBKSuFW94qmohyf1p6vgwb6EPoL",
  "key35": "5YUCCCKbeTzTgz6EjuKx7HPj6uJiwyNXQwSjqD7fTQXSbMPM9cqXmiZvz4T7w36pv9S9g9g4wMmk3qeCwSViDL7N",
  "key36": "4twLsUdmaurP97VHh5edcu89mhyTgoJUmDRrFJgmMq6Vd6BhVYJrgxjJ8dRWMd9tLAfdg9SWgYyc5XA1ptxxG7hT",
  "key37": "2LnvqbxRPVuF3H1yC6o6KwfZrzsaU6hZvV5k4bUqLww2nu5CThyGwzUN1LbEqrjPmAnBQv1QvoSrHRYeui8StiVq"
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
