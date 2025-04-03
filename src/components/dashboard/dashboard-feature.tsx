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
    "4muvhvsRhh3i9wPofmupVnnJv1WDHVFjwoLSRMAcwXc4zcgDXg9vf99TtR5TvfgqFhD4TZpk8TZxdT8GFvLZj8Br"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cizxZVmo47AWWSGTWvBCGQMuGsJSAnhy2vkCH1h2Yt6qC6KjLVDmCPAv9CL2Fz8oG3d4VA4BnUpX4kMmQXHmXzy",
  "key1": "4FN1gGKZriHHCKXSAMikBVxG7Uwv2rgmfacttMitotrAJn21i4x2Vh2v79VuJeLNPcACtSidEigv24knhSzSe6C3",
  "key2": "61CS9QmjtAySD2vSf5mDnCGfDncKtvTFWz7w9jMYtRjNjaHFrLRxpE9ekXc7NHwAYBYesqm2zJRJTE4uxdRgy4GQ",
  "key3": "3ftssWVJtvEKZvwLgebLfWW4AdpxrvWyqSbM9iUGAFTTjuESyhYULRBZPgadkzisnSwpX2Y2e8qLPhqqD2A2s59k",
  "key4": "5C2GiPenRy6UmRFPJ3bFfeR268R2KumQqqtSyfGsLpC7VP92T1a2kgnsPgMsAX1PuSetZp99R3n7PcRFdWvrtbUt",
  "key5": "3b7S9riESuDecUbEGnzM92KrpiTaWGGD91BM83tLAHAvdh7hs6UN4PEW4v2JNN4D9RxAWFJNMp2rbDGoU4FgU2PX",
  "key6": "2teecMCdT4UxfZj9pAviynubLLYwmRAY4gXsaGeySeEhjkJKB4QjtFS8BzD6Z5UE5K4t7pBeA8A1Q3c99RovVsx8",
  "key7": "gm2Kwzz7fi4REXY6CoAdcamNpszf22ntAVrAfazG9Dw1f6d2fKH3M8DHnSXNfaZSAKijG99RuQoaNJsMxQCxBnF",
  "key8": "2s6VKCGhcEtHZVCi2NrufffTsRTCaag4QyU2c9csHLEwK3AfjAiyLCqqQJMqKEQCZ36AUQ3Na18ZoGdaUr7XAimA",
  "key9": "5xN9NYNVKaHRqUZeLfMJekUki4TwxPNkoP5fzQ4Nm6WWJmwQyaDa9M1JnopYKxFfuw9qWkGhUDQCzXMC6hagXZhm",
  "key10": "5q1XQZnc69W9ZR8QzxWd5ov7jUFvrkmsmfdR7Ty7Kx755FuwbmdDWJQTapcGkM6Vp4Ve4fjXHEA13CVGqvhwbC6Y",
  "key11": "5ngt5zjRwWbcvwd59ddhQh41HhiVwp3TPgbLnm4KZ9tuzVA4GfBoLvbZh5RTMzgahyw2BdXdfyWjqUV2YRVn6aMW",
  "key12": "64Sd4vtPXEkn1jFUHAsLEe8T4kEyZviXgX8DdrDLcLXmgq4k9QKXfgq3yChgSzMayB8cHPKAmiFtuxTehT4D67Mh",
  "key13": "45srKfaPahbRgfoiJneWDZVsNWeoFn4FEKukif9mVLqogvXPrkWwM8ErpgyTfqra9tUBsM83mE9tLRBS7uJTVkK1",
  "key14": "YerffmP9WZUnxMGKz2hkbDQJLuT7WoUb8XFjboVT3RLkxVFR8UJCnc8Uaty36LEmEsiuxVGhaKQqmy9TW46Qngz",
  "key15": "4dXgcaieDC9KmoasK6jaeVGGFiwneTTHreVhvUWYhCioGvdHAxZeabAGrbJLYjwWfjCTSKybqhYNhXNFESGDnYZV",
  "key16": "4znfuNTcTGoiUb43FNfMAE6hpAYLu4gerpGpUQn3FbDmNUVZdPVnBBp1kMJQHXjovZC5NyfimvcCrvKaM4FJ6TVX",
  "key17": "4eMq5SGiLWccMRDT1ji2t8ifUakZmkHZGzS6EhhDXPPNzABVn4SxrJNQSctxoLv1ZBiv89hp5rnPS19qzBkib2Ue",
  "key18": "2utDGeAZz9DAGDU5fQC9Ue1zc3cWCcNsShVcf3gVhgK6efRc1R9XmGhCJ228RNBnhTYWwMhCEaxazPsD1qPomfg6",
  "key19": "YNJVP4MquAb91Vd39ebgXEtGdJKgSYpgbGsqCqBCzwvKMbWuuxLFc9gFTZdsCukGE19wA3p5ybbDhNWJ7XPqDWC",
  "key20": "3RGdKRgGmmaq39aP6uJMtcNRSSjJ7UKefy3utDkLADT3QWATQpyqfdV6bZxVz15x3cd84dWEaCHNv2iWFHo5nHss",
  "key21": "31RbKURyHVUKvUDF7V5AbfRRnQeAXDty73QiKhLR5VddbaXpLUVc34aqwR1Yp89x5u92ANqt4jm4L4466fbR8Xfc",
  "key22": "3o6b6ua9fPPtqYxrhLFc2mL4BrAaxsnwiz1KfM6mcD7Xuwj5sBbvnbkPR8DtLTcaJYqWhGhdvd2PhPeFLvXLCuUn",
  "key23": "3eRPx8AreqTiA63DP3sGxmTWgWbuEePVK6JoeW3amY3JMdV1nmfLyhcCXrEmJBvd2Wv2Bo8m4UQMu6HXer8TCoEu",
  "key24": "3YvXnJ5F58SG3sT2kDbG9wCf8feug9UipzBbSMUVtRXZoT83CauHRFYMV67tEFHFRkXYyt9AiRbiWori2ULUedD8",
  "key25": "2eebBqMFZsaXst8552Krm8K3fJ1tQu3im4fT5MfVnhp9wvJ6GZpaTTcJFLjZa1WzJcMdKqi7aRQ6PmcJ3RhTyRwq",
  "key26": "3Bo1iUTA84XYWYVyoiMs5bB1tAgo7D7LtKsaTJecLrevrGRmbuUL3uPqDVQVTf4DzbiNUPJ43guFn5ryhiLVLm2u",
  "key27": "37ZfKhMxyiZ8rq72LadZgH2mqtS4UViuCkFan4JUuoLwdqwF13QrFDUarpieNxCQ1w8PnYPnuGCY3TLdQ4huj3t7",
  "key28": "4jVXHL5Ymu6WvkpKzauRP6SVTphP6D4hv1gnuazhDfU5NxMLLr2oUTNoR9PHvXDrKuCshKKQTscqR5artYEK3nUp",
  "key29": "48vC82reA715czgQdcbCiwphce88CiuVe39zC5fhAJhsFh5iHfLT3yFxhkwtvgwu3pN8SJYqBfsJfGRyPdHa9aM",
  "key30": "2cUH1S9QYeA9o2Y8rzFv3w536DEiAKnzQ8TWC3quFGxyTtnSf8iurPzeWUp8k8qRCd1wGZZ9YzsVGNqEys19zV33",
  "key31": "2WZYX2wgcVGWyFPC1kjnKQK7e4Lc2VVafX9ZRVztED8BY1AREsH8WTWTaE2oUMsAiG963e4Q9YeLDAoEXyHzrgeF",
  "key32": "26SNUN5L5HbpAdMvFkCSDKhTy5ELC7nToc6PDZ6CMJvqSaGW4BDGSM2RrLtwebJjZAdGx4RVxd2szx3NiEp3WaCv",
  "key33": "2J2PszpaHnZzhdiw8P36T59HzZetZsrGiwSa7egneKgJaVVKrZWrxLwgCKkhQ9Ftuhd32DhYwJMrVxvYEbKUfbQ1",
  "key34": "3DfGpPBaw7M6j8xPskcfZCe6ZUBcN93BUMHzpeYtc8ADQGhxaL2CNufBFCZdmNj7Krq36Up2cyaFsv6AYwABNsA3",
  "key35": "4Xe5gbmiUsHq2XD4kym4KVnvHu3US4pXQVdGDGSikTvzF7NndtwgT9E5qhrn2K1zDQiL9sj477PdscwXr8nwG4WL"
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
