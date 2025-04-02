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
    "2g59Hv9pDW2BSsvXfxRmKtChGNAxXBRSoVc6hm29WQQATag4Q8RinFcvQ9omXChjjHaqkSQ51D9kS3NW5EYoHbvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g1aUbSTzwnPm7mjaE1iewMTaEqcUAaiNvQ2iGt6nmrT441dNhNC4RyssRjNfDbXhyA7bmYgZ1fBk2BTzGdXirY3",
  "key1": "3AFp1gZd4eiNqxfqirg8cgv9LyoGvcE8BW4EnS9AmiB8WpxvutfFQQhGX97wmRmE6VjDjoFnP9psAbhGNuznw79k",
  "key2": "3DiJ4D5JXh8PwSwhpF5qHmsu3s4n884368ahatT8NYuHUrKux1Zavt6xQZ9suzZMiqhWMRmAQrFccidoa6E9BLPU",
  "key3": "9zzXhqLmcRH79WVmuwohHUhSTMdDcRYYnkedXY26nMtfv5qynDF9JZQsjJvvcqJovJr1aRnJu3Qv6V4ofoNc4fd",
  "key4": "55Dv8B7i1TsrXgegRWTP8knadjgyA5X1zZyJN8nYVU7LVZjZaQDr9WsttfpTpjDs43NdzSiCqbHJnfna2A1X1AAj",
  "key5": "5a3mBVPa9UNT5YmasL6pQpQ7YPhKd2XgXmF8satDcA7qLe53LpzbcLP1tZN8tezJa7FBSM4r97WNCGPWQGLcvWWs",
  "key6": "2mxH9i3X7DcPxLQKp22M4svkpsEZ7AxcMVbP5sWDb6dj9SxwFvEi9LbJGSTsv6Tk6AozLBDTFd1KqW251Eb6pEVW",
  "key7": "4smEihCuJCwtNnpvJwaG8LDSUrj1f8RiHUSjbxs7qnz2QJke2CpnW6UMTuHS592Kt7bCJgMh5HE5LwZAV4J8HCBg",
  "key8": "PR5Z4VQYYwDSgGGC7rKT6n4XAtkHoupvN8VWih54N6VE8N64AZ5EUXJG1msgdZbKGhHJbEBfZvMyKddNCVu8a8q",
  "key9": "gwFYbpKu57sshXczwJagPZF6isBjTFmxp7TECcLttFoY5BeafFXLZyNQfMzakeGwDJ2KpBc3iCeR31jkxqTuAzt",
  "key10": "4nQnCQZLTZs8qDm6edfeRfp71PpWRXyhqM5LkaiZrNr4Jr1CzrBjC1hN6qZbZP8euiFfnmkJeWJzkdfrc2x7RiaZ",
  "key11": "3v4oUzkfTR5u3jLEN5WzAyyB1wh435XXgVhqbhDDpQs73ecQVXtM4dKUSNfSg2DzQemwjax2Vx77FNamPwPRgKcY",
  "key12": "2YvDm7pgKrfcSNsRfZeihuBLf4qRN8tAXhxVNbW5CnGAZAnLMhz2XZrihYEWXoWNz9Cy7p4aJMVcW6nVHRjywav5",
  "key13": "2GXpWndtRNum84GAVp7tmn1mfPkaKzFFJ1YfbNPfuPEqtpGQtBMas5d7AXL31DFsvGDHkRxfjdJpUDKM7R3HfFrg",
  "key14": "5ichJk1CafzcZRsq4p8dw2NLNsSD67yFAdHbwz53Gi2qan5hN86chuFnCU1jduoxEyvxVybRy3qhxCbcg22cSj5N",
  "key15": "5Wc2WgxN6btaRwFxFH8Mc4vbtooHtwYPyHvRKHayBUVQtBQBEqYYq7Zy9SLgJ23Gu4g9tyJUCyk2H7sAGmeSzeCN",
  "key16": "59Xqq3VmQe6S8bkrnCv2o7obLZjswA1wUfFMbP8SHuhYSgbHV6h3X7hkMLjugPp4ou99bcFkUrqw3QmQF7tQtMGo",
  "key17": "5yHBeFrTppZcbEvPzt4uXFUbuXKtSkT5oGUzuyEjBm4cUdTp3khHAJXQCDwE6Yrx4LK2QGueQ1k6WNabptdBE413",
  "key18": "5R8wcDDD4svrnfHsuK9bvj2yN3nW6J2BFsaA1ZiGKSMyCnB39XuZnLCpeEbBvoRAew3VSUr1zVBPeANt1iaAqFvo",
  "key19": "R62UvXb3bFgDvdqo6ot982nZxY4PAKcgZPSeVweXEWrDW48XinfKXdAjkKTLbCuKtfSgXSje1PSdNSPqhMiYjEY",
  "key20": "3MVGpNfJ77M3ofbSvsA8XuwqdGdc2PhmT3aECr1wz4BbsovQ9DhuDnsUV59aCNoqL2kfoXmmb8vb9AR4FkBr3Nuc",
  "key21": "4a2stQtQh1QSN8iNTPG1nzEyJerCN1oFNcgqHUQCHanYxHKsn3PsDQJYb6d9xs3xXS3ntUb8nTB74Ls96YQm625r",
  "key22": "2ANX7hUafDhLGu8hrPGeTxYg5xHoRbakU2gQq1r8n5J2thrRkGCZeEozZ57RDJL4m4Cja7jMPrApRv2iXMkzbUn4",
  "key23": "5ZsTtnWYjcBAa52REeor8KiqovhXDhFw1QRsd3jX9AWxywmCMLsS52R7barr15Z9rk4GnAQBVy7kpFpqTMf5nkip",
  "key24": "4cBHN1BukQmhiVEc9BNwrqwqRL3R2JF5wBDA1tvg2mThcYyAjoM7cf2DRndSjZ3yYeytk5UUqGk79a58KfRHqHTT",
  "key25": "5HRrfAohwRj9kN1NvcT8aWr1epwPq54V22nD5TFbCabeXcq3kt85BxoWmFWdQMJtCrArUiVDwbKjtEXvnbWKbyuJ",
  "key26": "Kv4ve1N6HygaDHL7uzS2wqTAdsgNnCMTRFhG8tcwSfPTQNdXXYBCwZZA8QJ1yrUp243hUY7UtCgfxhZ3spVbSfQ",
  "key27": "daMdKeyPK9XxNVesE7qscH5KDLTV95jwVudgY49fnNPSzsSpDuuiDxeLiqycrM8H973m4i5Feh96Ev9SJeksj7K",
  "key28": "3DrkGPcvMuQsYtQ26knMf4ki9uSYX7C6wxD2V7m3Q2XCjvrUhuTAesGZCXsqjYfh7vmA3t8QHMFCCspnC7b1F8S8",
  "key29": "zeJy3sp6pVP2XdfQJyQG7tHNMYupUMdCYdqCNJBUNjm3DZuXhj4mmY4aj6ZRb2gJMFM17VhEutvGzrmNQDrwabC",
  "key30": "4M2E1TRmd362Up8EH4ufErW1xGF8Wb5WG8b9CT9DcDkuHHRphPLCDCqcMc6HoBhL6qzmnJt1zvDuytKPn8Ct7Q2a",
  "key31": "2ThzJFCQug8VV5JMhRJBsznrodXqMtGmm33sWLEHxmpkoG9pZp3ivadG5VEWMMsRDu8DWHs36S9XzaCeFm6mHJvG"
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
