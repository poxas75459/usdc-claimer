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
    "2GFna9xFnEv7wZmaXoBfwUiNFP57FjRDMLkJLsd118j7K7PBzkY6BkMShe1bALjwUbftNGopLGVLQjU4ZpbHGrhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fTkK145vwea1qHQKBujiV7cobHox38tnWw8jz5cZJFMdiNzDhtpynnm9iK91SmKf3PgdGRX9fv1nSiGg2hXtVFk",
  "key1": "3HHYg1BrCLNQKU5iP84XvhhN8ZApg6eLZE6BxTmjagussLAQP9TKu29f1eXGeZa8e95yvrWLBqZvh8PJR4mMZZhd",
  "key2": "nHMA9LH4ojrA7KTbdZVwwXajgA5jw3Tp91MsidMHDcGd9g8htCjziBSyoLM4nrH49Q7cLMjwxM7VtZL1b2hcRSU",
  "key3": "2A23fm7E7WtjX5CXmZUG4UjnK2oSjafhJHqsXNjdmrimtAowK8n1FehdzJZBX56seippZWLtivaaFMqtrz8f3AbE",
  "key4": "UjcWnQgC2e6T1RByokotNiVsqrFurt33fMBnSzbBh9ZAGbJg2Xh3dCW9tNA1HdsFhzVXA5JpRWEDDiBqzeLwYhg",
  "key5": "3SaUc3pHcG41TRNzhJXw1GGxzX8jgpsSVsT9No9VGbMZKfQGT8qaUgvaX5najxWgyPQRkmjkL99XkGePNuKBqyLF",
  "key6": "5GhqW9x82YeRJDUWVa26kiCsaNhRWb3HMqkMXqLe7j883uiHrSipUJ1fXUfkS2wUCmKpjviEoZtSkYArdCS6U7sS",
  "key7": "4aLAMaRqwHJ488x57UjNCVk4iJdWYMFRpPmwDQ74x5ku7apkwoeEHpvjhfMn34B7KHmaB7eTSBapxZfq1TXL7627",
  "key8": "4WAvZS9AoHYDgAu25v9i5qyYYeXiGbJNbuCmZLzqxNMnReTHxsysqcLLox6yNiSYavBYL3dM3oiQ9nPwsG3t3Dgn",
  "key9": "2zwTJmokyWeU9i4KVdQUKb9CsrFxMLukZX1BokobQACf8jWhjkamEPJVp56mwZndP8bgGQ9P76NXRXGDxkkquem9",
  "key10": "EnMm5adVrb8go77rJ7sqwzLAdzNRnDYTtkHsHjmUsWzPMUQAWbV6k7Dwjv1XHkokCmcJT4hvtnvfb6F1hgK2z2P",
  "key11": "4yUq3ZhK77KGaEN2CL7emAngCAT2x3HhgT7pHbtsTwiuqp8vx5YQXjLwf7fn8aSE1hvPgM8khkSQtDQeXGjSHeGt",
  "key12": "2guP1gdvBXk3j1MdLWN5LL6aMWWwDvbo28j9fqxQBLCs6bHZzu7VPa3cEUukYeuwmQnmRhYmSsg75X1vhUz74KKH",
  "key13": "3ScnwdZNVZRDUtBX9dj1T7zPMY7xv22bBncCuTT6yduDzFCVhq4axAtoFDNLtsi196QYdLraeoQs5qk4oDLXPxdH",
  "key14": "EYGFU2bDsvp5Q7MKs6hXgCBRkM1z6bs5PqCDVD1WVw677Bu1urgwSTJDYRGvSz1Mbhc7tDnYA61HnzBGMR2HoJE",
  "key15": "4pqGNn3qUw9dYNArWgrTMCYhofHxUa9b4W2kH83v4tArdsFpvKu6rUcGh2jkqrqBPWB4UaPqt3jEzx3QJs1pBHRE",
  "key16": "4vjVCxHEX3HGpxjUx1f4G9jpBuZ7GZmnJ12kvFDFbRB5v89g3Wb8DD18HdfnLn7ypUnGrcBUp8V3AySbdAJe4VrC",
  "key17": "55vKgGsYezvY4W7hemcvGrFV3bNbkZhexNwnaSZGSJCo2n5G7GXP9EAPCdA3sodb5xQEzTjxH9cD4hhFmnYDuibb",
  "key18": "3begqmaaxB7xkyYhp76uvnyRpktyMQwpcwapBzhSgf8VsZyxC3WU5WqxPQesUXLwb7nLVNcb1JqWpxb1GRVDcrJE",
  "key19": "34n3FHuRmJVcUsSrrqMuS8mur2tavGMKNwRkEfytXwXbRDNT7kvU9iDWMrg3mSCDFvvp6QaCgQ9XRdVBAPXDrY9s",
  "key20": "46uXrieFmXNzgsyQg3o3bFkgHbTee5tQNVNvfaDA2NsouY6QwYetx7gR2h2VAeRAbo8Fq6JqEFnsXmgtVdMh2Vw8",
  "key21": "515y6eKnA9kgKdj9cEALMP6y6jgYscq3mAZ4g3v8szztVXgVSXsCxmisBYSVa5WLUaUSpMNfzGZqah3rwWB29EpH",
  "key22": "54Beu8SYV4Wyv2Jo5wiqJgsGMWDF3hJdEwg1ePR8etyUQvVadyyHLyDNq6rNMjCfU3uYnhHqQV97jCd8AxKBEgW9",
  "key23": "4o2posd39hP2FcY7uTHWCgrSXkF7eiyqt5HwAGGJXeDeKxFfDHUXyhzNQix8K53gSY7XzVKvfAC88t8iRb6P7Fuu",
  "key24": "PjRTUi1xALZp5mZRUE8ZQqQx3ETPjnTFNEA4tzSDZEzLWwec1G8NN6gexdsdMxR97Sr6VSRjSKAbsPU43yoU8qG",
  "key25": "3vhwJDJ1JWSGr1JgLo6RiMGWHjBAWPFUHHcqeYTojnBKmRWAV7eDuFLrBqjyFLhb29MxiaHfraqJqGx9ZsFa44ac",
  "key26": "2R1RLXEdJFvPt5ZsPwEMAHWCtZJLcQmSP6CQpyKPL56q3sf94h52UVrm2iXh6dqawmkWM2uvAwYPKVjYEvaju3fV",
  "key27": "5TSssr8zRnJP1tVvTYbN9rNEB4UMvYbz6mKk4Xcj85SvBtxCoc6UuQrTRpSBYSGNscGuCwq3AgK2PRM4J2TjRmNo",
  "key28": "imaM2YYEzaM1eMwagu9iVMhQv1bVH4ug85Hduz6khdSSpErkAkRXeKdfMGS4D8Y8yH7f95FJYaHrTkk6Q7znwB4",
  "key29": "5Pst7CsQvaS8Z2MquN1rnXt62UcuXiXdvCK4Y4akoSXidS6X5Ror7QvmzQ37WHEmc3NLUvCNgH7sCgms6vPzPJYp",
  "key30": "duF3k7hXfYKLVfB3hxNwaJj8o5i16TxfegkEGZnnYcVExoT9KgfF5o9aK24upA7boe36WgdtUrbHLKHu4GYgoiu",
  "key31": "57VkW746BAPxnecEKZftj46eprkZYVWUaugZ2Afkis3WhdEjuUWwXy2AzT8BuCXynsPehGnwWFifwAToNbAH4UEp",
  "key32": "61wr2U6r5mAhEXCGNHj3ZRNrg9rqjAG1Gn2LGWnwasCDd16TFzjPNJv8UJauPnWArPMjRGfFX912p8djCBk3pP7s",
  "key33": "4SnUvJUz7vecLXGybv4uLwkhnzF6B6eZ4fvsS1vwwC2mrvwKeTyDfGsSt7Zj5a1WMDoTYYcqGeswPBrq9NkupGdd",
  "key34": "4KaCUtsi3AhmtqCA1ypWgGJh5j5d53m7GmC5wHFLWXCEkXbDRYtNXmoNLZF5bnbxgAuVmrHao8hp1feddmmATQ6S"
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
