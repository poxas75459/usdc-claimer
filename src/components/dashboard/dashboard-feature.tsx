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
    "3SEF8bKugjoa1dNvgvMqghAFCbJAPTfjf5S11TFcGDHwJ9BYjhvkUjoYPrGNHsnWWkLzkXacqKR7dzu2MeQ8x5z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KFA11bS1ERVUFFSkbZP9PuGREmGpvLTSYR6XSFPH2ede3W8GVuPhYH6cU6rSsdJppyPZrLRjVMFC6S8NR1JJSLz",
  "key1": "XLWLU1wcbFTiBF25dSr5D2BYhAnpfsWVguex3SZJJkRhRLPWgdvo1vTAneZ2bHJVrmDNjJtvn2iiJGsc9VQWKoy",
  "key2": "3vwEoSyWfmHhiWNL1Rjbi7e1kWnS9tSSAV3rLigBK26uo4s1yAev28yA8Vkroym3jnUSBShMsg9fXX9bkxjhgPrt",
  "key3": "51u2FaheGqG8HqFfpuYUkZifmgZTRqKepci9MK3ueukes86t5tQVtP9xW1z3aGgPQgqYBvMBCRLJR7a6wqK4af9g",
  "key4": "ZTDC3EXZumwG3bgQcCiEApazRjVhkgNyCDFpuuCPmzUPR5XgngThzFHTHzRR617ZoHrh9rhQnnVdX8TFyvHkTzq",
  "key5": "3iwqCo9rYZswQ4z5t9Wc5WAoF5tTCThhXXZv2ZWMu5qQ6Micua5ySaCibV3B6L2KUZsaybAjwcDRPMxgMSFWHLw9",
  "key6": "3N5H1XQfHtjqWosEbW3bnLeAts8mPHbd3C8jECregy4bsQ1TkswTasNzS5JQZ4i9TZMa1fV27xyAJdBXSxALSKKN",
  "key7": "2jLdkEq9xnxaXQ4Q9XEDjRrKDUtuj9NTHyoHv3pKxVKVCkZc2Qtup1fJeeFJVhUm79AdhFmbXTNrdpbx37x5CTF8",
  "key8": "5Q7eTzgtfP5SEBF1JfezaJGWaEwdGGGP9WzoXcrmrDFQR8Ag5xrcptUM3QadJT8MWbERQWGmD9h2g13HWP4NSb3g",
  "key9": "2sn3xJssiC6faRmuMs4Ewhx3fqneuYXEMNFp3SPVvvyK6qTNY5Wcbzugmq47wdyR6dArb3cojbgEPrCEoEGVKxoS",
  "key10": "4cc1rf8neMWfEzWrobYVUfY9aX6V2bf3cQqmkbZQDWmkPWP7WSCzmdufxwnqUVr4fDV9aVJRJjbPbt4jy7Sc6Khg",
  "key11": "4ZPNQaUoRkaK3xgcvaYnQax2WmVDi5wFMbAsfMbfVBoAgcCE1jHY3oAb7ob5pw2H3XoFTqYEkbXQ4jB9YLDrQhHN",
  "key12": "3FNTRiqRmANgqA8ovGyZXjJWA7wU3g1opV6pKge2o12uJBiqSYRwik5YnzaB5f6rrUn6zPhG6smMETVBfEGct8fT",
  "key13": "5MnrB5Axb3Zr92KaXAtZJrpuVZQg1QY558EJeo5Y2t2TtjWJLhMFnn6eCpmAkJjmXYxjN7izZozJkxLugdmd7UPa",
  "key14": "46sHAvT8a6J6oCx2d27vGXRpzbMYqcG2VoZhs1Pp7Jrt7h5tuinux2SzMUB6NJmWY9Jm7Qrvg13ppzNKdiZFQam8",
  "key15": "78wbcUszLoQNSYvAPmKA73piyMsU89VWURe5JgVcqH2hjFHu1EdgfZJSQpTRji5QrUACmo6JNNVkeiBrWbaGjWj",
  "key16": "5MQ8vQzAWjyxUjCXrVeBXC6W1osVjdkvmeNko1g7TXW4NMA5gGkLtAqz3vdKUw37vM27iQSuxmeT6RUu3gN6AJjU",
  "key17": "4NJraTTFTVWZ2o3kENf8wXjP6WJJZrfSL7mBFhgbXrChqEBV9cDMLsR4XPbsNz8S4m1AUntcctCxyWBBT9p2pGTT",
  "key18": "24bShP84mgr7CGiyQ8dJd3PwDWUjQqf8FoxsGT2nQCNBaFvndJi8CokJkFsWbmkt6iNXVPgSbqevUtrCt1RYebpL",
  "key19": "3XFw8XRXTUjskhFaygn4V6vRPfyhKhXow4o5w9S4m1sXWCiaK6fehjiSGh2P2b1wpK8f8He2uzHwuDb3a2LuXWeU",
  "key20": "2vuvLD9Q4e2J7MY9ywJ1JtmzhT2n3iX837AJkvvmeddFoXBMzRShv4QX2uUGw1jsGkvwpQbGdAQDtStzsNCE9u4C",
  "key21": "57QVfSdR3sWzzvVMkL1SzVg23Z2NiHwDpvyLoHjEs6Pvso3aXktFCVVF5VksD2uJ6b7ijRm3tEPSWSRs6htsLLED",
  "key22": "32QRYWP7vCJ6ANnGtsCnLPePghfv7YnwAuHmrUbKvFcqR7bihDYLbnSdbmw9Xm9fneFCnhGBKQCaykyGZofwqYFE",
  "key23": "3DDp6jRHLAECdTwcfnKvhvwFeNvD2D8gQqKHFmjNEY59qihit6HjTQ12kw4wnmAooVLEZDKxeeBRQhSRcBgsR54J",
  "key24": "Qwo7FsYoBXaBWcSmCVTXwLS8VVZBwbVAvEbdbgkHDBdnFNfP12KNxqBhNkvW44nBmWBioRSqKhoEMBymhW9vEFh",
  "key25": "2FvUaCvdCYBN5TA2uk7eok4khhxZ3vfxL75ht4c3MEpX37EkTjmpaaiQHca48N2oVTTtzdpqs5brgNPSxNpL8FXs",
  "key26": "3aCmSRvEphy3Bnh9ogpYpY3PBdqLNzEn6hZSUzwfpiB4DUYTGRrpmWDQMjEYGRsqkCBME5jk7j6qqVjFV5TUyUfC"
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
