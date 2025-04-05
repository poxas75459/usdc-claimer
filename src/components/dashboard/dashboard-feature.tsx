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
    "wYkR57CenqiLH9UGXvwSE28VjGFhaEPhorvXbp98ycAtJrKN7w4R16utkAkDpujEGHADmu5WbwjkKb1iPSzX1yM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53ZSqewBXY6y1TmraakV4esr9WCqFRemqm9fv1B65L3v6GxFKjQYzaGfgZTkBYEtx7LZB9ZeTtTe7WuSYE6yoN2i",
  "key1": "wzrMRKbZmwLDf31Prdw6XuwLwLcoNLT3GqnWE2GAa5EN2LpRwmQMLQHmapVsqaaL2LRkQ4MHSKJzg3r3SzAYQ8m",
  "key2": "58wnxHaQjZHpJANBDVxzwHhw1XS5qejNzB2TJbM2XvrSXWcAnGURCgxavbr3cVdfKCchxSiFQDfH8cffZgbBYaik",
  "key3": "A1i4JH7tqoDN3KRFgQeWdkVPJtm5bTYMD6eFjC3u3q3oC4Jd6V9iYXz9PMk1mN3wJE7Ekcyp2fFfbh4gVFoCx3y",
  "key4": "3CyFBEG5dYzYJQNRVptYyZ611BtnoHa4B419i1BMRa7mvAYUYi6rrH2G5Dchmy7f3JQrEDbybVaM3yrQM2Z3GM42",
  "key5": "2XNMG8WXNRdc48LsGThCRFCsqWok7Yhrp4cbWHBPFTaEeGR9ku4B7p2bLku8y6dE73C7ZPU7XrDUfPnVTU4w33Nb",
  "key6": "2HBJioPR1z5myZo6DqBwQPFwWeGSsNzuMej9w4jmvRzKqLCtPsgYYHkdypPnEDmbzYBNu9QbFs3zo12DMJFAXEbm",
  "key7": "41esUrRiLEnLBCyECSFSa14beYbry7dK7kCxM7eea7RSVum44rYFai6qdvEXw5sRUvVrPTbNMT53DZghvXxaNDyU",
  "key8": "2afwtjuwbE1ymUmvBL8ngsxUxa7LAFufvdajxpNMPXBdYet217678tfyuC5TD5Tn1fBAyYSbcbUFAudKyYKwDPzq",
  "key9": "3WVXpUnxLMYiS4PruKUsPQmctPAXvMAQzbxNn41wBHoHbFGtHPb5yfEhEsoYQ4nQqdjJwyfUeg5h7ZsYScPRjzu7",
  "key10": "53kVZEq5MdzRtWaeyLZqAcN3cyS395CaQQKWDamC4hoqgezD8AgMptbGnsXKscC2gNWi3Y46FW3Qbq6aNAfCYM29",
  "key11": "5FgBu29TCMTAdJ5gugusErMNqbVQeAaZkUa9vfxYUdWAYohkdsVkcECMTL4vJZieGs6tSy5f3LF7XLX8ZCtxruk2",
  "key12": "4wzUqU7PdxAYqDHhfgsypLrxrTgQ2tFRFCKmTHfdN9BAJfXEtek6sE7hwUrKCwuDf64CggqpgV5oRCzycENFroSG",
  "key13": "3pVp6pVQaBLf5oaTLS5FZqNerSCUSTRLaHrmm9okxpBKBu25T9HLQ1LZAupCPhuAUDdXTzD6Gfu5PDfJUHsnBkEz",
  "key14": "4p8166eq1PRUFzwNCJpZoAvSrDc9UtyQTdNBsZRsfHmZQwLXjEjPHzt6DhYyrEPwRniqaMx2Zm6YcpeN34b7ohuY",
  "key15": "M3XGJybNew3uoLQUcUtmtnKPLXa84ZLcAAzoHKbkYEqu3KgNnJccMZvu1iusdqCUnqHfKNPchXYcodrHwdcCjzn",
  "key16": "5KQDaqg15XLvLJTvQyqS5tvMRCkeASuJndr443eUwToJ8Sqa3MXwcW8WrS4DVz3QqK6edrnGsJ2zdvbJLQZpT6kr",
  "key17": "gpVzDWQczL1UbnVkXkHBnC764nGim2BibYEyHhjvwT31ZX4Z8P3gmmXuTiaaT2XnRHWFP77j5tBK8h4XeotenpF",
  "key18": "3WSEd8jFLr6pD9wQ7vyecQe3j88Ybie4b8XV7vNTN1Vxyop9a8HNhH5p4ZwUkEWyaP13Wgmr5v7PTM91pLk9rYNk",
  "key19": "3SqtGnbRroMQVYLdKxu4Ni9bFYFJa1VC8zDLoxz7ZqGXFckgRjCA7n5nZ2nCYArCL5Uj51FRDp3W1Rt8bkUBQg3J",
  "key20": "2x5BxLorug42fHHwTToVTGCYnYKfsGAngHD2a1d9yxSdgRcAM7bW7zJ74SLr6uCexe29mRZ5g3GxX5QxG5hVK8pm",
  "key21": "65DRXFwywWSb1rBK8TTUbXurHjLxYDdGDSpDYNDRZXAghRZkex8KsNK7aWMYBtS8neWZDgmjpzE4r2LngFZiA5st",
  "key22": "3XxQHmpEQdMrMLTHKUP92HtdM44WFdviSxKHV1zC2LQFfFpwG2Cewij8B3Dbvb3k81jCanGYu7nyZVVBcogqp9t",
  "key23": "2LCQsHxzjkSzJCtdGRfbEFjg4zgXSxf1GyZrUbsRoqrodgTJYLFWx64BUScEsrZQ8vtMAXVz9pDKSbUxJ3uZYb9Z",
  "key24": "5Zj8rCr9mtKReGvqiL9QSN9M8H7mw59H7z3BbABanSridr9LVHfVUNeZEugbYg7mLJXpnxgwvQhLgVadFR8iEh74",
  "key25": "2EC8zsNds4qx4ksuvtiL5LmfR1WPaEPH17bKL9iTyDeBSJg6NznNwAumVJ5nrMPZaBLL2zJqENt1vFma1Lj2H6GZ",
  "key26": "2hoVW9z6XsdPKLG68MqgRxjXB23C6BrURYRCYdjHvnRQgTzgeU2z9MUEcUmMoQG8pbV2iGw643ZJneGEiHm3jR8h",
  "key27": "66Mcd243iMXxmhFwK53Z5F9RB6kZ2c7v61egbp5SA47xFGMacuQS2AeNDb4c8qYU7WCDkgjG3obPFbx8gyrGyEu",
  "key28": "2WjBjPtyRHADNzNTC9bBjZEt5yqQvBTYe9rf2oMuGiNM7eqkQRsn5VvodhF8JBrUp2fohUwcZxCroYFK9CGRehnn",
  "key29": "63sKLQiKJrgcQ93Mk1JTuSqyHZNwjvuJPYfAWWwmTYH8vTU5chMBLCpU21hAFyCqGRPwhAj5kRX93AQVaEHR91BZ",
  "key30": "2BXZuybNR6DnLNckrGgqqC1xWo3LwufSghNHVtR21YZgUk8KLjBNWyAgBFxC3mVf77k3pXPu939FAPyja6p16ZZ9",
  "key31": "4avLBdMVsSjXu7g4i4c7WLAesJu4BnUbYqpo15FSmMYWnywCLqi4FCTLfXut6NwQPjea69Dzw6xGj7ReqpamXJtE",
  "key32": "3Zz7kgQUprtJeV83BoXcWqa81wvJTGjhKJ7WjThATAyxx2pCUSCNjASyEhdDPJV7spcp5qU6N36i3ii1dzUWRy48"
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
