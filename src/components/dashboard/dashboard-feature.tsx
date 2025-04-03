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
    "2So9unCn1m9dbXgxyg5VQgXNMTQdwRRg4omwS8xjwMT7aRfecAJk95ZbPUQGK8dfbLiJ628JyNZHc2tQ4taAcJBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nRogu2B2EyZvyKWJKjS7DCDkEB4HeBbByke1rPa7YfyTwnCpfjCzYon62bFY9y1DppZiKzPkK9T5L1NJV1Gu6G1",
  "key1": "4fu1haWFYR5xJmLNqfhvjnBpCAK17cdQNg8RdAMLQHXo7SxqFzZWuDVfDcvygeYvmjUNn3CNwMCxXm6CnSjZbqM9",
  "key2": "4A1Yn3XcSdjBy3JsXUPLfb2ZcD6Yi84h56hGj6wGigJ9g73wxuznLfNdtFG63iuTvNP74yYf1aQemUpHtxmxNMgC",
  "key3": "2Fu3Y1VnYsZCTMVLTMGq7hcdvPehykVq43JFQjoZwS4okjDhP9CYF2zWnTtqE3PZJ6R5SRP3JTqa6D8HTn3ofVyf",
  "key4": "fMLnECabnsB4sNjM83s2Twi86eimCAXtKBkAHovankcg2a2H7oV9GBE7nCZATALj9aFudHNYBJ4PiJUpyEqDkA7",
  "key5": "27tAfN3C9PBNaJKoSzKfPQZvgHbRfDivjH2e3qDdK2vRAo1KwcTkKoaeitF1deLdQP5ikq7vW3ULZFQmCKeBwkHg",
  "key6": "rPqpd2QiqRnuBPE9vkL5hav9AhuSpjNLPE1BgkaJzZSMGvXveraBVSfTvuxBjvDURHK5gnKEaQeWqVq6MyBcnj9",
  "key7": "91zuYAEr5mUS3pZ31LbpcA3XpsnHcMmp1hMdrTyZVxZ8oiCQoc6jJ7CqMKPX8XXgZsMHosp4ZnzTNhweUGKwvEb",
  "key8": "2uwE8SXvu68xCkbPeracfsQqyVBGLiiE1GgzaSPVfSj1pkPhKioEu2h9Vtmbo8zag8EZvPZ7uMXH4cbhNBDHsC2A",
  "key9": "4QuyyCXMMG5NRbaNs2y9XeHnpgr6GAu6hZoqKaVjzVUwqvoE8mEjEVByq2Amwox6pjGRaabs9RRFqAnY9Ut75Ewm",
  "key10": "4P3qFASh45siNtjDFAjXoPnu5rCjdv12KKbBuBDQpoYPW4DSaamQocaW7tEGfnZsFYDcBaC1znpsC3EKAx3C9w8A",
  "key11": "5RJFKYuWSPr6Y7Vd8dMEL44mFnYvokLxXhbGT9PzCqMqZMSwzDxLwR4dFnRt36ooirphUJinKywzUz7tCEvU2x9p",
  "key12": "NtDB5Fa1zYdxwPf9WiMM3CPSXdrQUCXKEfokxmRqrZ4885q38Now4qHUgHTh5gWCCDZV9ywbwgwSUKddPR8DPd5",
  "key13": "HNqE2GCxYXSzBvj5CKUbRAegBzFj4eaho6ZsMNT3zyYPSau869C7mfs2GYCNhvUt1CwY63xeg3sN1ThqFbHeqUz",
  "key14": "2M6WgFFyhfhpoxFbdo6nj7YK5SWb313VuWKDFzezyNqPWt7BW61Vu3kZvCwRaWKj5Wao7Yi71vWEsGPeG41o2SDD",
  "key15": "4QSVTp6wfRr8wdfX4aFNueiqqvjvmEaAAhNfriko4MLRTbdXMeJG2zetbfvZYGJW7YevUxvqLfNimiJsP5dQ35dy",
  "key16": "ZGj9qDhwKWcdTYMravRmfuu5HQNpCaKiSEC2kLNQAUbr6KyjQgtvSqE2MZDWs9EBdTYzUVwhEBS2bbm5zra8PBW",
  "key17": "1Q5gbUUXamQ8u8DTxqLqTDahYw2VhVVuNXhrSh6fyzqJ9gZiF32hDV1ZEzfQVVTcLP8THtmbAEtyA8ZjBMxX6XF",
  "key18": "3bfH4uRKQZdsV1Cx2t5gSrnmQupRf4MBCgW3UiiPYFhLvLmXY3AUU3XR7985fderVutGwAWfDUyQnpEQJAGXn458",
  "key19": "ex7kgGeJpnG4nFo58JjzkYCufYJzQzbx24dzHCNFkJA5SzdkX1URi7Spo6K7cPqKCecxwVRkoP86FJ9wyQAd7Hs",
  "key20": "1GKPeUQZgutJ7w8cwFjcjaY8W7Z4DfVyEkk8a34ACPrytUBBhLPqqou28h9SZvTrNP7DKNHwAkmE57HxzkN8ikh",
  "key21": "o8VRUVH3VMGtSYZzUq7JZs9kCSWeENgShYKBHm6JtTmSJhX8Y5jreuTWecZeHT9AS9ZziKNMKw9yscMAitptpnw",
  "key22": "XgqbbSHCX4D9iHwQXsuz15ja44pCcuMmi6zHBd1qDQVUtoa2graAkzA4FFDxqm9gCndUtbKq7wZDaz8BviNQsKx",
  "key23": "4tsQzqHJi6GqwKM65rPmRomV3NSgZ98cpBmQX5xNL2NiBAf55k7UQr2CWTRsmuLBjKXTR4QCTAGBjY1oqAXXFyN8",
  "key24": "2Q2oACZCpqTjKRWr3Xgyqdm7PdoAxduk197zeonv6Z7B39mV1AaPXEw98oaGiF861gpcCkMEQ81M2pHqXiB4dwkt",
  "key25": "4nhttyvPUPEEwsTwZdUA612MFthozSprko5jVbNnCU3qRBn2rHW8QqD5d1ZZsPgTSvnbNdsSqKukwL6d3PVGRZSe"
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
