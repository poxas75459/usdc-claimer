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
    "4HTob2KnZ28vV8YYm7qh7h96U1vqLh4ptybQELysCfbxHFZSXifwz87azg5vLJbQrQUXKfEpFTGLvAhqFVmcs8cd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wK69LMepdreDNTTVWze31sc3psvePscKBLU3awRD7ZPkt728Jegm66bH84f5A6t2qWLznS34ytH9HAKaqaw5qV3",
  "key1": "3UGSETRErbuzSXX2oMxMSPwWr5SeWgnQQeutjBK6o2cmuzFVhdeGFr4embFdF2dTHxvaYF2wWdhH5miedCEbUbeU",
  "key2": "4ZN49p75nisS57sp7bMGnrKMt9afnB19knugNvgHByFTB2beMuio2o7y17uZnM7zAMtYEvpivnhzA19kZJMrrKoZ",
  "key3": "5HsxQ6iPdVQzX6L3FSEwDHLkx3z7dq4gDkdZH8UEgRfsXqyyS4xY11pqi3dm7JLY2aHZaYQUHCob7nSM39MhvcmE",
  "key4": "5bbmqVw6gF1w25DHHHcQhiVwGbdUZjFGZFgzr2KnmWN1HKR9SxSDn4QfE3hbMxSjM23P9WFmNDUNmRgGGNKNnpWH",
  "key5": "4fLepNeAxUtptjbdKpiL1hoEezYjF2wTTok6sfwR98VAfkRd9cg6WpFw4EjN3Lzj19d2keYQpt4mBJ6UG6TdZuy8",
  "key6": "4xWF4NH3Mqw8TjQfuLmaCtUPVr3WG4JzLRCpDKTdXeDjZRUtjnvHjVzaEdcb1onr36pv7EtdaEtWtgNCXbCWPvcV",
  "key7": "epkNgpXTvCzSjB2upq7Z79GUbUsfYA2JAAvm28cXLXUQeKavvkqP3d2eytugv2Z6dcAfpfH98gBLsbcN893hSwx",
  "key8": "5KPf1NKrSe4SZMV9mxnafheFkwqGCz94oGNMJcz4rpoyJX4grNrZaD2qDF3gdXHJn2wETEFA9aR8FM4Si5gJQKnc",
  "key9": "61bJ1fchbTGVMtEf7ymwC9kzi8kSa4C9WdQjQasfWbqQKVUcK3RGUuhYkTZysfZZCLjstmEyK4VkCdwWjzRYADdc",
  "key10": "1gzSuy3u7nKsN7USfijUDK7Be8HB6Sc7eb3cNoEst94QKLEnWsBGzU8dTdJUSDmDFckRp64GB3Uj2GGKaaGMwot",
  "key11": "LFDaT37PG8s3VAmdQBZZzjYxUAWQsugxgExDrbeM13jz5EnZBt91Q3JQU2qRs8r7FzNw3DWx8UQgAY4nmRTPwxh",
  "key12": "57N6CbiNiSSaPPC7uWBdyNBwdZDkC4wckmw1AGmWitsLf4hsa55KRAAMHpcaq38VWz9Bc98STeeRX8Sw5ZLNi85G",
  "key13": "TLdB8uQAP9UucqEFfy8DUDsMLaGoMQ6Ue22g8r9UiqkfD7KMmRyXnLvp9w4dzr1eTR8iLSQW62CKXSjynCGPnTF",
  "key14": "S15aCPVmad4LSRAjbTy5BpP6oZMKq1tegJgRfxT2ySxTb4RtcrToDz5idb2BkARFLcqa6zqJRdZzFagUtc7q2iM",
  "key15": "MEqQXbVSpfVQzGq3MwiwazR6aDPrpBWsL1m13XLDbvSL2RYDbRWqLtvQFzjaGo6S2ugkBbPjvbHRH9GzqhUo2TB",
  "key16": "4ZU3YNkPhc1qq6EvZhHeReVb9QEbuZEdygWVsPvfddKVFxnHkShSjnZ1XEnMZmeP4VJApDw37HgeQWcGabCaHbBK",
  "key17": "9YCR2NJwcphB5smVwSdGaCgf2X6oo8xJYpyFLmMZYVGEVaHBagqqyJsDRqTkJoFPrbnFjHDGH9xDmDMEZ3gtq8q",
  "key18": "2ZfgMUqHdCxdgBwnrTNxXmDZ8WJCQsNzfSTbXZeHiRzbxV31tKSeLYWKMGDNA2gziX7fvS5G2dcqerYuETT7GhM2",
  "key19": "4wFq3J6rxRvxq2GbNi2NGBJaFiiu5FTm3EejxrGQ9xyYerGTuNXoNgn4ErG2kcXEyG8whhjB8PvojTpWVYypcYxd",
  "key20": "3WLCT3MToAYY4meobpBkCXfRc7pDieD4JSLF4NKq59fU2H1HuEfESu58zfRWrgJ1ons49HVsWiEzXXZnATFDFHVr",
  "key21": "43zb4ekS4AqggqTXcvqot7xrqT4C2pJKmKKYXpRdBFKHkHaFReGzMAE1MxJQGyEidMoAVUdpT5kv6gzjk1uVH2gJ",
  "key22": "2wRYNsovLhEya6A59hCvGwYa5SxJ5LrAzn7GYVmPRL6Wda5L74j47Yz8p1UUyPdUMZC6KfTLjDE1YiDDdHkpRHf4",
  "key23": "63cUDKWTBjs4oFAT6cmkn2T3CGiZuNzJhW5CPfZMtT6sYKuLJbPTGDboB6oNyY3k3dZZwGkV6KLEK3QofJ1QAjyk",
  "key24": "22CntDkWpTVMc4G5dhmJJFperJCVEyiMW2oDVWdoht3vFAjcGWiJtYHRKjWW9FSbahz5CqdNJUu5wWJzkdeVxP36",
  "key25": "471KiFz9pqNXnCPN3jxYeksWxgh8rFZYcGogyYCXt8Fw3cBEGdqKPWvU6L6sxkdeA4d5iD5BCq1fbqALDue9ERgj",
  "key26": "PrF2Swyv5sffvZVXhZ2vstrF4nZ47YqrkxPfz4ZmoRFLmzAcBB3bkvho6eaqa994hRaMBMVNk6xPU9pUvHbYzGR",
  "key27": "52Tg6uQfJmG1rShu9NWizzoHASRURVCDe64jYU1ZJVbmsYC8pBHjRJePzFJX3k9VAF3GaqdKXE6P3wF6b9FhrRsv",
  "key28": "55NErWUKHNNAyfSZwhn1kXL7EmMer2bghApkZNzPKtThBRkj7MyXgxG2ZUfwn7wocxrvz1KTYS9RgqjRmf9LNT7T"
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
