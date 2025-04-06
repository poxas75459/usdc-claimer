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
    "3cvztsV7L2pCJ1wn72tWyV6GsBQY36cdNKUVT8aC7C5f4wdbRM1xLXhsQzXAcoSsxhRKsLtMf77SrUqi5gT9oUtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MKqVTEJzz6NZtCuRrnXS1gDkK8YyTUUtbMBcg8uV2AwLmbKqM7KLbqMhpaShkDnUMcpChLTBf5JsxT3mvLom5RU",
  "key1": "66RE833xCL8qGNXeWoEUGSTAKbNiaRm92ST3qFFLsAerUvH53YmsSwTw1cNGXkTp3nvpLm2m61qruRYaehsqp3m6",
  "key2": "3ZtN62F3dDYtvmnrzwHy4jCyzKBhwUBoXYdjHysExbcJJAkSbdQV3M5EcSnNzEWtqEmptUB4M6i76ker3qEPARe1",
  "key3": "f1aEbwxnZA8SZWhtkT7PUshWEhjoTQs4P1Kq3gBDAGYnwAmFvKgE6pB6bLhtGZw1zHe9uw5rMAsSmk8FCHrASbN",
  "key4": "3Rp9vjgXa1E6EPzEvCcdNdJyTAHo5dbJiWAesxqt6nC3rKReBTWruChWEm6koUsu2MdNK8h5YSCWr9r9EvNSprCe",
  "key5": "VHpKmiQWw1ZrC3iq8M4kWfeYvdYMHAJk5oq1DcHcG27WWTbLZpMqS2C64kDdxYuTMx1RaZKuBcYQHNSLE5qM8uy",
  "key6": "3bDUmt6jvtoEM5BRaVbBoKaq44gnCJJnY6oQoH9ymqpCBewDCWJfMadmG2d9CqyPmeaiaTn3M4RAcBPhTBG3g2eP",
  "key7": "87bFCQqyjjKdutniVAai3aJB9Cfr7WBpA317fwwyGC5FDMSKrCjZtEVrePUiYqv4ryzxPsDWZCtB4gNPSPJXbxx",
  "key8": "4MoMyaWqmNrGv81DvaCk7YMUXurHJWuSWeBJMwT5MjvTb9Pz5tUoiGmdDS6TjBdJKAcNjetjMETAGoECELS8ETXY",
  "key9": "4BnL9boXmUsdtCSttHUxFETfz6pV8W5kJnKNwcDMMyBdorUC8k7gadXPKka1pDS1DiGEHuEBFeXtUa7LufebE1on",
  "key10": "2mRx7izwvurA13nkAd7MAtBmjs34mtsK7nkgYw4z9WU3QkTANxrmvuDiaBwU4uFQbZKARFCDL1z9Xn5axBN9BNbk",
  "key11": "4epHaK4fX6DqduH6J9UoiTvJJ1xYtQaS2S1ndYmEVaQr1eXf6QdeyMQKYJo7CKcCxgcYbVqqsvpL3EV7xPRoqfx",
  "key12": "64fczv6wTndaRgWwZHEiFQEKTEEA6tY9opVUEqt5KLRAe2PrRCx7t7k7nhVZEtNE1ztcsQMgXH5ubTVNdETHHPjp",
  "key13": "2wMm1GG4bi1AsuwWHF6AaiptfkZQFtQFwhsFcfHxBuZH8xNXr97TFH2csB4tL8bV8uLBz2n8tE1mnTpXbi8F4vu3",
  "key14": "5KQNjwjFAFVVfmH6q5SAH2R9cFgAVgZXH7gyK6EVHBAxvYKRR8XF4FAWYiCs2GwELqAKDEKbKJTyyNq6MXujGjcb",
  "key15": "2JUqDo4iEaW6u2nyDGiozPMqChgWbsmbdNrNkX8pxVgAPFyYKK9JfbgsUqjiDSvz2cJHABhxHi9QPrvhL2AoviBj",
  "key16": "Agj6mkkC484wNeE2rbk1wUhusjauwbeyovuFnTtdu2CNDCmhssc6b5nc7HMbgQGV4z369zT27oRagNWWLCX9Zku",
  "key17": "c5XdHb8tqVWV3MSyP33hZGzejH2aQTvpCCvVcEBW45TWM4y2UYhLixriapkH1pJfBWpJs9yGoMjhBqxr8eENRds",
  "key18": "4qjeJbtPQvewRVF8t6n3EU1uXj3YdrdkNcSAfQ12xZ5VZFDvf98iB55fkgdcPJkZvcW9rtRhuT8XU6SgtKPFW9Cc",
  "key19": "yiHY3TzuScRmCZLVmxn23tgttKFkZYhpJvY7g5RNfM4eDyfC8xoukeLTbMHcjRUw4WvvwueC97qRpnkjouuDBwa",
  "key20": "3vcAjcRGDVnyW3cjc1gzpZFsu4Ua54YLPYWwv7sVpULudEyhEg6a2ZWnwZFHjpfKbyPSKXjWggXwEEGQ4irbZA3C",
  "key21": "6bgXiJty8oKp3xB3ugKsURftnP6Jvqe9pzmhhMwTbv5G8oAeotfNiyimwTwEvjjuL8pdMBUbiRh9nyX95R1tv8x",
  "key22": "4DAhYRxKicTXumiepYDqMAVvvcbDzSnmnfiG9Z1aYb9AsnSb8xjtv8M9qT34L1dVLpUs7Ejfpbwi8FuZN1Pi7Qfr",
  "key23": "2jm75UxAAyeYnW2PDLqe5Ag9CoYuQF1uw9zsTwTW5gkf1TLVyxzBLDzphJovaAqdxoFjWzCmDrgvCLA1ZyQuZrnx",
  "key24": "1pC6grWmP2UFt3Fu7JtNyXJStLGEvVaxtVy5knuwwavyRAE4mkk4KQBcGP5Kv489QyiQrAPoQZCRFogffHVqjHq",
  "key25": "rAHdEB94REPf2LSB55APxCT3ptcxGmbdELBBmj2X158uyujZGBXNaonSL5bMPX6raZ4RCzYaKKGuRSK3LMRtc1G",
  "key26": "129GMjrDUiAZwQwBXQiiVL19zWhm3JZ6Ck7NzRqwv6PRuXowoxAy19SRsyTvCvCgHFxzWBx2SaDE3kKVHoqUE97j",
  "key27": "2DzZSYQNpJJD5m16ua9qpGrwDncGqXEA1tsxGyQu4gdGdzzCiV5HXuVwvrEczZpY52X58WjpqKPV7LWsDNAzNbVB",
  "key28": "2c9p7w4b3Rzc1SzRypPysmbui7LP3cWZyyogKHJhgMNu4k4Z5b6733XsERisEH9SvXgn3ZpwQ2keiW7AAmGbwmyi",
  "key29": "2Q8JP5ydUU1uHyKThW1inkwE9ebaFwcFf5hJ3rFVvLpunKCgvdDddX1i6x4y858Et7ncR8kvKo3y2HkYmwNAdKmJ",
  "key30": "3awdyd8Em4sfSxGKPt9wbQENujom9QVmQCLEcCRXu8rWxeXfBacfn3Hhu7hefRnrvioT87vSHXni6kEWpvqcYRKr",
  "key31": "5zu3zjBon7GAALzRC23Dz5vK4gDxqaQnaWR3phjfqDixJKEUhrdqjF1QVZ93WjCA4q2Bc2JxpHfs4UYnaLHtA1wt",
  "key32": "4M6khbXjvDqVMqKjXTQ4SrLwSUN43sJX2VuAKJMmApMpinEKn4843UZcxPYibv9qqfjkLjxfG7ePBJEyTESgeW9a",
  "key33": "P3fjcw7o2RgWb8ALPuxgSYmaYnshKTSfVSroQqsWR9Pm3pAV87EpbpCTauHuXdq9fSr2JYdk1cYPokv1h1QehQB"
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
