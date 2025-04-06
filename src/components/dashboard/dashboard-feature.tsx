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
    "5oqpZ1HgDxJmwa8Uth8JW6NUWW6zw9JzXsEyPq8CipN32xcNjaxWMQq8xBZioxHyX29sGmQUYdwuzUXTA5ctMCFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WpndhixTRKvmnrJaWYdPWLdkpHS5USVwEPRRQ5wVLe5dgABwZu8gvCfshR3ZgVESmQ2fTRWe1nRQp7fBEPdqsRa",
  "key1": "25AH2j5FPyZtorDGTSMrsv8FGLThqXQimVnEr35Ddw1Tp9GSiXawDCe97Nzci2UrniR99vwXBkac4ZWh8uu4ezG9",
  "key2": "67C6qRssXsHWgunWxCy8fAhhRXKMySh2yM1WszgXekNke1eWufaZRwKVYx7g9LDbVWt5xAeoc4rctD8LAACsRL8o",
  "key3": "5H77C3e2jwWSN5QiUz5fygebYz4X8rWfhHuPdGpFA7scXn7qaFjxbQbPom7TPeqLN2UEni5mWELcPXEGhDGcCpRb",
  "key4": "21R2Hfsrh9xsdtnCoJrqm5S8wjUo6f76bSZk5ATyC6CDKp2PnuiGKRgkF1ubAwRwfX7BfPu62AQRVbr6DZCDNeRC",
  "key5": "4YxdLurLWNCq1iZCfeqTxrEk6rvsbhz865HhV5m3naRbFyq1M1XfW5UYbybh5U7CjET3SdKRbK9mzYQ85ZetLH7a",
  "key6": "5A4vzpKH5vQWEdiVQmLbQq4H5sVEUbdSRSYyRZxVyjVF17y23UthcCgRcVChLLUGpAsm5oYGPBcjMCURwqpDprPy",
  "key7": "tGsbyf4Mc9tuS39hFQDuovAuANpk9W7yV4UXzDNbwTjX9zVasWcAgEwvU8JKeQrtQ1eFF5NLPN9aZv9KBYuT5Js",
  "key8": "4oswu8BgG6kNDbEoa66kCMvv6ht1KSYDgBC2yoQFCaRgVUynprGw8V6MKZjm8xBWSxBJzs3jqt5Jq6B8jV71fPnL",
  "key9": "3AuA6B4HuG46dzz1xZcYhjaPtJY5kBACjMGEtH2a1Cypmove5GLUux6wxrwZ9M8CavkkazNDrgdt4mxi4g8mLbYC",
  "key10": "xi2ehRT9cAFYPDEZzbyEcS2gRTAVN4qxqSRzpitVDGaopYaww3GCTR2oSbmrEedwuJ2axKg7t2H9tfUXFqBEjyx",
  "key11": "5YEQ4nCU55G918kceYpvbbm7zhJWAu85GJgijTMeVwE8szsEUsZA1R6KzC9vxiuisyF4mYJdApfC4C5GrToHkSQE",
  "key12": "RdzKLmVXxtjnpteYa3f8n9owRFWFBNBXfspvP4vciA1xNhZegHPfz1gbpV9mQoGWbKFKRtG5Mzo6EvpAQoK6qrQ",
  "key13": "5FHGE4EwJwp6FXPwX5b69HH7LvtPjBDqDRhwgso1FnSXhqEeBbbm8GmjLs6RNajcynEhgtHo9rCqsaFZS2jeTYW6",
  "key14": "naKwZrsTQTpXyJAo4PrKuc831yuPB6RcoTs9fLNzeeX6qxNngGQkA8y2QqDCFu6q21cs5RtJnV7Wb6AofevZDwC",
  "key15": "3SsZVa1efZG6yQRrTM6DaaMfDHuTfJEZyJFhijzkFrpwNYnonjs6sRy3faAfigzKvjDhiE7q3P3Kd63ojpWY2E93",
  "key16": "gw4NLjRueQ2u5ABdUv5EJU8bDGNU2goZdU1yzUbHKgiCbsKTWYELnaWU8oZUFhcbDDDEXo4BjFuVtiMUJs5gzYw",
  "key17": "5KwA8L2GsksFgn7pbwKy9NsctJWVFwF7pYyrCh4zLC3jBahQ7rBS7SBfnzLKvLfmuTGjSZ4WmtFX9C4s8Fcfq2X5",
  "key18": "5tfm8CxsWjQwrxewTxm7kRBsr3KEgsZyP4LhABx5QtvgD6dzPqLFyn66rL3RUupzTWyB9QzTcDe8hw6inEELjT7R",
  "key19": "2Nf7VAtVz4eTRAkQRezXLwXXzxVMqZwr4yEbxQjEGbXm9h51zsgE6As8cCQSd1S5F9cSY2oPcbWeZp3P5HppF3JM",
  "key20": "2oW8NwPJtorNEyZVXXYV1x9YtshGvYgvETG9BUrpeQX5QkFoLTYebVBUuZmkpp5owKUESHxSE7T2kDG3ko8H4rw6",
  "key21": "4nvZ1Ea75XrSZK9FYHE6LSzbo9fXgsjbTCH1TMK9RgMjkDnVuh1M1ocaztwskLZ3tSmgReu3mmEvC2UfN6m4Spg5",
  "key22": "5eeQezuAn4w2Dm99eyf7dKqRTcscYKWNjPxGUk5iDq88C3mjnukys8ZWCME9kPjzQKH4PXduGYHZAZSD3RqEQGHA",
  "key23": "2J9TkgaFqr6jMCoAaf9qcVKConNDKzEj91suKcTm3XMy41u8vU1Eorz2e3uJbaps48npoUvhGrwmxkKFpykxLUQF",
  "key24": "49Pu9ZdPT2x9kPfwddtbeKTZNkVTkVuF3X7JerTyxHpaTJrG7FW1Bd4HDA61xmKy9ogGWjEbCYqLWHzmVnyurCYP",
  "key25": "4jyueS9FAieeGJFHN5e8uGPsFJcLEJnY9B1VguAhhaLHuY4wnn1aVXbSFpvn9bR5dJTyYEQEfSfnJHyWc6kZCZCX",
  "key26": "64UGutotgnms2WYPrmDWSohWhQVtxgr3DBCBr7Z2hkvrfGRy5iETeYg57Vt5GXcP1m5p1eY7o45Q5pNMRwRrifnm",
  "key27": "5ij5d5VmdreYaMBSHqXM4KzLmn8X4Qz4nHxHEWs1bBoZcFPYvWosyeMgp12VzLT54oQWwnLkqNEdrNwqMyoo8fAM",
  "key28": "5VeMQ5iBnjnQ5jtGvZTvx2bePWLRUqProSNKNmbHVHVShLZ66dHJXP52mGaK6FHsYPWCYDfm3zaZajfuuj55Pxw6",
  "key29": "4GWHZcxnkR2WprHao7hkyxj9fMReqPbM2ExqsBr2jGxuHDhdAuaXC2fZNCgJ9yYvLs7wENoTPHLhLaa6FeRRNBtG"
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
