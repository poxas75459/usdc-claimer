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
    "4apDgJyqXxKBtmCutWQeWJx7kXZkwkcBRqUmw1ZdN2KRGm267hjBxeL8oYJXeAiVjENvRq7qJEhCesiXWGNPTdVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qUoaWDg35KLjnz1fnTCugzDQM5VfKKJQoZJscFBhhmKhGX8A36v2DV8GAhkCqmJs2eJyt4oURScpo55mHMhFjEr",
  "key1": "4tWfZWs2yr9T2SEEe36hFKkQsrTorkf7a19ZiTqcnQoQHj4uzoPrCcaKHuYwMeRvDKjacm6Biv9PdZWhKJKWEMgm",
  "key2": "2kWdo4iXt5sZ76boJxbmqxUmqmdR1jdfDo7wtSXQwCXd74PWtRV2zLgnEEGpCha7cZoDE9iLL1Q9rwKSmVgKC3sz",
  "key3": "Gj2RPucRxnZ5QbcQicTsBEM23RbMhQJf8pAwSfZDNd9yCibg8sZkM68pUndPqXx1FWySZwRmBwyUrLFfEetem6g",
  "key4": "2qqAupETKHH3bTZtgQFzuGunGJRAcHG6sVayZa1nDzfrezsX2iHm7v6X1gRjXoRN8AfKhCZHY3fUNTCSuj1Wwv7S",
  "key5": "3kqhpKqMgynfqzY3g4RMz1pHcZvZqt8uzeCPfGQeRHbZc9onmjD1BTdTTQbo63JygR9NeNBxy4s1qw5W6Zk6HYrB",
  "key6": "54zmxQznCq8eYqqVZfs3xUgDwLCbQaMXVuDFkwJEkKfvFBTi1nYsFM1a6DvSCyDYC4sB7CcgAa2cr7bTUpCh1x77",
  "key7": "4V5Qcq9hmJPsb8TW13j4irsKA6tvj9aE6ErBRCcbw2ha5XRYbBxzRYyYVcvVkwf6Dy89xJk9wf7WxPztJyytQ4KF",
  "key8": "4u4VgcW3TEqvMUtgycB2ywJPtBQqhY7vmJhm5SEuHCYKhS3ETuQcoNbar19c4ySmgqAmFystpzarqCJxrVt51J5i",
  "key9": "yCGZ3eAvp5rXuS9HzN72HbFHwDxG3wwCuDdh6kzdqEDarDWnDmcSWQj7dXx69xxZ9Q9U5iqHuhYnP7dMPwKku69",
  "key10": "5zXs5ayehvhpG3K9grHoCx389hGTVWyM2nGUhaHqXqLHHTSTjvDiSr9SHyb8U8EG5Ew1uNHT9DgGMSLDAPw6q81Q",
  "key11": "3X12GucpuV8QnKvVKpdUnwSRMHyZS4s6VwguCkNtKSn4WcTSKLicjCQq6FaWFrR5T5fRc9yJNoAQh2XGaYgzP8yU",
  "key12": "2zgRV3Bdue5Vzk63A7jxDYEJ6hiHt9HqGB4v6db228DnG3VAeKcYdsnPG6n8zJJPqjEn3JQrhFGmS2q9Ed6ayNFV",
  "key13": "2NeYPkxPeui3tSsosKNrcGJs6YsVzNCtU3iyMsz3iDj4E7sevucqcjPbCNrJXK6XqoGrwisjQcbYonAwAoAhJ2u6",
  "key14": "2SPXn1ScVZMMbMqMgdHtzEknFzY7UVdBLzG842joVKj5xBGn9eR3RPDKy75FW1rsinikXXsbqssGFJLkMphSE7Zj",
  "key15": "3amzeWPUzqF9jJgLW7CMWSjK1y94BEzNu34G6aLtzKgem3Yt3qJRmtTnpo5SA3q8UycPutJSKdLm71Yyu2vb6abE",
  "key16": "4bsBHCW9irA6C1NQUe3AGgu4JN1VnMCdXWiW3EAuHJPSodoMebngAmcE2qjAtAyMMzidTYVpyyi2vK8CAjhFPbmb",
  "key17": "46RWPq5akG42RdDSo2zmbRgF1srrQnWRYvWxfKj8BJeFtaGJnth1pZs8EX67C8fvChS51avMiPf1wxLdtGUh6oVp",
  "key18": "SFUrs7NUbjMfzWmiomTmko1WWZg2wff3SozXZ4Cg7Wjj7HHqak7XkVbZegSP8tzD2fdBnCHqMMaFvEDXyp6kHps",
  "key19": "5Aff8aKz8pJzHMPeAMaSteEQ3sASuTJ1vhdKrrbTK5317PszyEavgrChph4mxTDPcmRb4hKPheH5Nkn9YrCDvSGG",
  "key20": "m8VAEH2dorhNABrPbqJWV9ZS3aR1MXWPQN4X6wtxmQeeBWaerBKvp3pnbUYrXE1FkjMKfbMHTEJKkztw1hQmiEY",
  "key21": "2eLcoy6XAEN11Cbur8ni8qCtGipMevU5cyeVzd4rXc7pDfczjsZooWkSecvnUeAbnjSNzxMDXGjknMWTkbCLGF9K",
  "key22": "4kM6QHmHJepCJ5szAhLYa2HBFZx7L9iTjpkULAW4bL76intCwAD9xBoMNmKb1ge6D33TcHR1PoSWKWJfwwMtUPnE",
  "key23": "3JM4VWQH7vnozh8SdVKKZM4sD5F8aYQ9sZwAvzSCntiFtd8ckgdsn3apAKCThw6RrMJDqJXDMj6aWvvbJDYkiHAF",
  "key24": "s9JXUa1LBc48mRzJLBZVDtUzF6YS7eGfau1BgjMSLuiidNSRY3SpPm9xE65cmVMYKm2UbJygLoz5UFvyK1wcQ5j",
  "key25": "5w1KTYjsHuDYWPpNoXRzZnqoEMf5JrmTccaDNcDqomsnorgExQsCyjJeydf1syAcPXo3d9vpqqYbSDHNAbHnBNzq",
  "key26": "5yAg9R7ZJK5uoVmifNcGgnYYRtnCWHdjWb6Hn2gTukeHUKoDojgcgSCBpwUpfXcC8qcfjNiLE9BN1QBY9fWRbDQu",
  "key27": "5K6LjQLbuVSWWri71yTpTxuBo1nrSuMvosJ4U26ugVNJT2uBwSb7fmhnbWCLRJMfzo8AVFcmfhQio8fAQqWTEgbp",
  "key28": "2QLkNJN6fFynSqc7a3h4HUjMJwgawBmGKcBELNcCyUQtNQTKL72gfQxnv4YZQfAHRHHtz1ZarK17yEQ7EAVDG8P2",
  "key29": "3Eg5nwXSni573fgj2wy2CypPTrszXgdVaf5oQqPxVeo4MqANgbZpzXxabguPUjDbrdnsoqfByBP3nmKkRaCdoGMH",
  "key30": "DYTc4jpvuzQKobgRjvUjFtEfiAn4K1AFVsX7ZY47VdSvdwggsXatveLrdMFBZ1M1NGGwm69FSkS7Gnye2tyJfxm"
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
