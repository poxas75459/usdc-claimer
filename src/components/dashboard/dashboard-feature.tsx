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
    "5pvBEujoQGwF6TQvZ8z2VTXQKDwhXULzLL6imLijp32fEHMegBjt31unCnYPBgwCMaaQ33knF2Y2Js6KchzuXWgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "637J6SB9vsEJmoy6vdufuWzHghjRWYE8dhBefkg6YSVNxCdEKKfdedWHsJymfmeTNeUjF7Nd1gBjRQsa8QuVdxRH",
  "key1": "EZSEgBSFq54PJ5hyuKojmuV7G71qP6VeziPdacvvdQL5bNnBXih6hnnabdUp21Y1ggupg7VPHyD3M8XuQaEoFkM",
  "key2": "3vMDBNLJb9vY2wxSkohyJdpDqfLYpbWtyfwF65xy5vue9wSU3QkUNL357xrPbomgVp4qKF9dttgH9U91yRvLx88U",
  "key3": "48cqp6uyyES7mcnnoyqrHGXHYSy8uQS5fQUYiH4XnKo9VudVpTiNfmGKULp6S6nvt7puiAftHUNtz3LhuYLNRWiP",
  "key4": "3UNoBzbMptfDjbYjFoR2NAcBByKnMuvX1HXvUDG9VMRejbFVF1rzF28YbfykTQair6E5fobMGcnZ32oLVntPGUbZ",
  "key5": "3MmBcLLLP5Yeimpu6zTSmsZKSF3RxUcrZpZFMwhmMtZ6aSM97oj6MBKnYqATKffWBUicrbpksU6M8Qa8Uaf6WZxQ",
  "key6": "23DzNKQ9ZD9BtVAYoCSLhnuHWtJva6zNDGfA35az4j8frd5t2LNBCYu8pDPSeHHzR68zDU89weGw44wDYqDjEr9z",
  "key7": "E9sY5LEGZcTX9BURRqTbwseS6uWFXeWjvxwvzybEEcDBq5nQAeKDfyZFwS1zbbJ641yT9Ai6TmQ99HLNFvQszUK",
  "key8": "46TSRUHFiTA4Q2eundpAz6yi6CQ6kYpMjmFA7GKmL7otzHnYqeM8Xz1sARQzMpa26VFGoySV12ejWZgmNYXqSLZE",
  "key9": "3NjAgy2Nfb8mW75jnnamiXmUJoYJDMF2rG9XXHRXSwHixd1GVtkAfXnwCYy3i3W2caYhBQkrrSkLXr5v4ERD8Hg7",
  "key10": "3QLrLHphbvY7RbEutk2CB3HGGHW1oJXuZUEQHVRmmNHGVn7FTKokBKjBPZFtQz6YodY2EeA5oTWzvSeGB3kHw4Wf",
  "key11": "5KTCeuJohryKFtve6NEWj6VSyYYNsoJzPz4Nm2WPQ8cq6S8ULDupjPES2oCdxAFRE1DNYTdmbPuLXXnA1f8egC3p",
  "key12": "TrNSv5AMuMNymDEq4aPTwRZbt197iM779cEJAB4BwL9TsWd9C4jcTnEkXQAg3uZSXp6vQV2AcG8DwD6vh3t1RsG",
  "key13": "5kQ1KnkDa27PHxmsGCtCBipLTT2uMBCEzZTucfNZzyhe7jtMz5EWct7BrFqL9mA7cScZuD2PUiTsoawvecu9fFYu",
  "key14": "q8QtoD9LR2R4BFqpAuV2aw2kLgLzVRFuqgVCDTnTz9ddpK67CkpmcJeBgZyMV34Z87U1LPro56b8dHSrFyq2jT7",
  "key15": "4X54vGdzN3oN9GRxjgeXnh9fSdrV7B7VhdcPnb73NcD23JZEXTxwbFKRvrU9fmawRir77gN3cDzCvf4XmBs9DBag",
  "key16": "5XzjiowWtW2LGLHLHV6A5r3wtiiS1V1f2PR43v5tB1o4NUNrNG3n9uwZ4u4sWi6qLRATb9aM7nSwk1f1kMUtxXsu",
  "key17": "4qpm2csU2NMjxLGKVG86mBS9UFGarvKZFQfWeMSkFCTfQgiaH9YrdXBHiheyGaGQpPpEhYNhF3atWxCrhJMPUQq3",
  "key18": "JRwsWETakHXdiuAgKpR17EytXxr4B7w9CBcHatULNfBcETi7Jre4if5CDuLUvEGVtQayiNuziofqcaei7HhsdnU",
  "key19": "5DShA5VYRj685spS7mC6TMMeX7RGY9ARfCuH33tJvHsoPnednbWEgafRHGDbrbPiqgrVy8PQArFNvKmGbDaUeLX5",
  "key20": "4zpDSz5KwCoVkqwWVNq22WViiWbiVyBZrjUogFUSJbyH1xMXQUbQS6QGeiDN92i3CiBr6te3MGReBB7AP9L93ok4",
  "key21": "4zTHQPE18oygpBpqDaZvHTGyQLXL6wT4v5d8wyxXQK5SeAMiLSX3vrHXxwUoG2AKdySL3WUHrDvKCgg3TNWPGjjU",
  "key22": "h2aFk7af5hLwQVKaJ3p3BLJ6jdfMnJhxpz8vqbRtDovuv8GUgEh1sJZGFfLe26JcZS4U1Bj5ddaLqD9oAJ98BWq",
  "key23": "5VcgJPyekxr1UrD4RQPv2BXFtiooYtMMx3pgGEWN2nswX1DPEzu9h67vkevpZNnWTRsSHPwxJvJcqQ4vYP8LDGhD",
  "key24": "vRL8PLSENZo9UNctT4G1LaxJzBPdc6mh6TTJRuhKcd6wk175TDYNUN5NoypPQj4YqhKAxcpijRXF7wfbUT5mmDn",
  "key25": "27tLw7xuEyAqH4QEpbUPNxWHfwwZ59maSdpEEtp9bqaaqA1Hes4KHT1wkrKygJV1FWEZzX7jEzHCaasGjGbK2EkF",
  "key26": "XswTnJNo9b8G1ytRL7TwCptEMn4XpAM2ZfsMv4RcVrE2ipsK36ZKfEub49VHR13fN6iW1Boh4XQvM9smLUhsVhc",
  "key27": "3MpmzENYRu9MZxhULNSGwA31vMKcJJQdj11nC3ff33jX66f8jdSfGwds68bQH2ZqskuPLgQ2M3G9kbs95a36EA9a",
  "key28": "3WVwE589qHRsPkhVKTkS8WDX9DSvUy7yAvDCp5qrWsKMBvryvFezp3JcjKHH1qtAF2QgPXzAhvgW33Fztw6aE8V2",
  "key29": "2rezn8USkGDpYxoirXK8t8CfpFk4ESU93dr3EUsbw7iHCjNcBjyvPTYwpByAF8VonCNtPVNJqi16th6nWSLTh7RF"
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
