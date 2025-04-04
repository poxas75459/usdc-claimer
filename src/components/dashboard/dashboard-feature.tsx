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
    "3nAxyg5hdxaEgdc9XZ22HwjUQhECUqMKy9jvEtbV9Up1wCMgbtjwQRyFLdKcPe7uWGhyj1btkdQsBH3nYJMY3mAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n8D1P2fCpEEELAbbwe3iSfRCCGjw1RtAvUGmMTrLvAqj5ybGMptNJdijZR2hatseCLQY8VqN9KrNer9NiDVAzjT",
  "key1": "dVR8zZTSU7U9oYf7ZuZ9UMFHqdmzu7AsK51HVDrGBbhS6zdkiK97WGZfGph1RAYTUQvoUFAdmg2474RvjEUxe7b",
  "key2": "4uwMMPEGKdEjFPcoSZhS5KRKoZ3MbLWEYtba7ppxdTvLcFnoLWuxokYghGAuGWssSngi2WpkzGBrqC7Dv1CmRMEq",
  "key3": "5qFp5mJVt6E5HUEv5qAowGwKXfyKhFJC1qAkee63KMc3vWF6AwNyRnNwAzidEoY3b57ZEY8Ybz1k2UB5o6hnfvaN",
  "key4": "3V3uoZ4R2kAT5CBMLa8AwsdUypmueGTw452d9vteyPRDRBd425WkvqqWBQ1eP27fui9tkYG8voXLADj8xaBJWbLG",
  "key5": "RS97KG36YoY8hVkZLpMmxFMrU2DupLY1EmMwnaUghEYAhnutBWCU7yi69RaNVqLCWwLoNmmxpgLz1gs5tzJ2qD7",
  "key6": "yyP3bpmzm53rey6BgnytjSRcLrgG7LokX9YMfBpxzjjVDHvfPT6Zf5cAXhhdfPnVVWbK3ajcsD7AHNDaUDyHB1j",
  "key7": "4xxokAdQ66m226p41EEppHWbZs3HMKC58CCSNBmGb7c6PXskubJdZX3zRrvv4f187b24CujCp9vXdNYgdC6Emifi",
  "key8": "tmtMtCCVcogRPgbXcV2dc6cWYunv6Gf6ZPcUujbg9mF59ukMB6f2YD77vaHmkFtxDjhPjECvFuPhjxqaPLMR98p",
  "key9": "sPee3HpX7Vtuj5BHuNKQ5c5CcPEw6M1DW9qL3VVJekdrvitBhoK97xGyqSRVXWwmYSJmdpFX7781PYmEBYHyFVu",
  "key10": "fmZELn34EJ6p5FNPxGberPeBCNMTxWtjemGmhYWpUBBNzG81NXWWqzLBf62y22RDV4ivExeJQPttSgmpX9WYprd",
  "key11": "4JcKn41JcpQvdzNSs4tPJS2MURN378e8KTDQud97LwuUSvJKzpDGsiUjgg2UG7wjcmRjWFCaMk9A3YgSVhXVoVzc",
  "key12": "5em8xiTbDFrqVAt5AiuewyNUGL8TCYWSjcLq2T2wpwmgSgMKFRJfXd3iskFJKvpHKLcNymEadZUvDMuVBvPuUynD",
  "key13": "3uhMb5Yy5BxBgSzEuhHXNg8TCLX8BhqWiBGQWKz6YDz92uNCTdTML8WhX3N82V54mTXV97H8kLoAduWogCdMRpdA",
  "key14": "jrKioU7vUuFyJBfufaSGpQs96yzXm4gCMPDtLxxS1EZNCgzDQwC7uP12QR7LaRhHRk4pPQnpkJYrqCvrRkoRjzb",
  "key15": "61MqW3WL68veFuXcsztG3gBi48tapEBZfy7NJj289wiXtfFsFiWt42X2sQaAgwMCs5pjAbFStfjngdmFA9wErzH4",
  "key16": "5TZ37jDkWDJbRrjTshmXww89utHP1xpeMfZBn6bp5PCivz7fNXdYHng6Lp3tMPMuvJ4n8EzyTrEjZenQTHcBynBF",
  "key17": "5LSkLt9GouzP6RXattBt49iMScWqUT1mq35mvugr3DkijGScvC76gemMqLZ7kgnYeRw8qQhNFXWaq2QTZ48PRQra",
  "key18": "42NpzuW1L28ZrbQGYg1xab6vwRL56cJfA9m5KVvaGf7SfQaM4swKGt6HUaYoLhsqdXDnDLypKU7XyHGcqxDWAzPi",
  "key19": "2nxzjCgezF6p9t3rkjohTEu41FQid7B9voGEFBrd38gQFjRdo1Kjbg6rhyxbtozopdCquVPN9b3pbEemWKF1ZuKr",
  "key20": "2qvWAr4WpUJGGcrdTdJFRuPcNEZhwYnfRvUt8uWmawqpwJgpETFzrpzjEmMwuokn5gGfcEW1ffLC4K1nrMTBvqr6",
  "key21": "2zDRw1YbeDTU2qgWtkRUwHm9WMfxrQdpHDf2PCu9nUSNhz8YPwggozYgvBsQ1Mkwk8LnZG6XF6fRFRiSLpUcECdN",
  "key22": "7fGy9Gc7HyPgTjh645itufutcyukbP4Tp6TVuda24QEtKc5Q2AggrqQ48u3WEcPvRiXoRSYTq8Uec2sQmRgX2S8",
  "key23": "3HPQcAvCbXptNyCyyFGrBc7wFLW1SaxUUFAeqDgDn72bfjXRMJGob5cgEnB6xdQTxpfQLmZehi46BH3TALeAfgYR",
  "key24": "7fbgnezTxp9mSoLzPZ8agD42veKRX7fJvuXqJzepuy95XWHTiYxJtySEBKBKc2WDKjHMwBp4H7yktZLEMBgwAQd",
  "key25": "r6YXQGrabQLZ8csFYA6qXd9rkdemyAWt9eAHgLnAYorxSabKGmEmEE8cWQCu2TzqkN76qVLrx64sGq76mHyhfGA",
  "key26": "3bxbBz9kfvt8boXGHCChv219mws3s1fqw76g7Gooaq9fGunWYW33Xc7zLz7Wp3sqYieWfL1aGcanvGKrA4irsQft",
  "key27": "2KTuwyAQ7aT3doz7tXvcm9U1aZyuMME7i4oG9Bkcni8NQUMYx6Zozbm6MbxUpQAEsPi4zcTRSVWGduiRn3F9v3om",
  "key28": "5xhqxUwB1Pby4yxbaP92zWGQifUx7EJUy3rptZzoYYix7dXnCoTAq47sbVRbSFe6UqVkv5NQgXJnzq8WyEEaYm1o",
  "key29": "rGZ4gWpJqnJHZtbS4Eu7UA7HGFwNYKPoL2cNJ7UdD4F5cx9SafAfYxqg79UzuErHZVBSgh7ciDD4a677qQbEeyh"
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
