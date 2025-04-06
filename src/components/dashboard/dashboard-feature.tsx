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
    "2mKuZtvT11gQcLxDJXGA5GUTS8LYakcZn11DBWsaSCCB9hv46hfFmcVjMgSzWXZ6XvNvsCSJSziUHSyzFrhTr1mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vt3t8QQcus31wpnvJ8Q1WNeSzCsppq9uGT6xjWrzXG3i9AzCbGFUPkxJtwRQe8dYoJmKGSC7ECAPRfwKb5bJGPz",
  "key1": "3tmvRpKLRESUuZPtibPpPyW2LTnfmnjDqw93ewhuC4jQo1aMKD43a6frLD27BM6LmFxwC6SpM12DKeVop1mT416h",
  "key2": "4dbVnJJ9BTPCxF5dAUanZkVAdswvc37qokAHagzQ28kaLqXF48x5Qh4KXickrcHobdktuC8c2APPKqCCM63Baxqs",
  "key3": "5ZVetotxH6rPJ5YuifiaH2XWdgNkFZUWXAuUvg3Fm218o9oTQvj5pvD8Gf8Pc2qZGh2rr3NWaJyCRp1wpVzGMHu6",
  "key4": "4xFAZMjyxzEHuYyW7zBJrsH576PgT8bPLGbT1PXcgBjRPrPQ7UFEhqHSc9Q32461GPPuPpeyqrhVhrYHFbV1ShdA",
  "key5": "3Ux3W9UrFRDyWXT8xHF3vvcMFzanWBSh12UdxrUFUrkKXJrArJGYSV6SCWxNF1zbykoimWwSV4Su3ZqTAEak5Ghm",
  "key6": "3CPe5UxxoVrYWu6jH8JAi9zsLM3qwfYvXiL28cd3ET6eSBPvjisTZNre3HGZwnSzZwodKi32Js8UQRb5wpeG5Tpm",
  "key7": "yN7y94y21TVuiqWvp4ShjBiQhixTCFesHbDhqAzARHAP3yGWqXkCeuA25KyMV7Af3R6fsMjfjWeyuQHgo8aAkFv",
  "key8": "PJMdRLmoFL3Vw8xKZGuS5UiiRWqTymTNg1MdemZz8GDd2ecpTZDZsN5jkxW2Dnez6H11qXR7RhTAncchhB9mtNU",
  "key9": "5ppcqn4adhmwviwgLHzQdUSN3x4694n5ACWqnfLYPUPN9TUR5ftn2BqHdQyPrJbpFrQdS4b9t3NLAUnKsiXQuj3h",
  "key10": "3ywNZasGoR7wwxLo3sVvfN4cthJFKgfLATLFtGbW9GBHeHKNWSpPTN7FhoBRcEVaBtXN1MkVNhHZKGynPvf438TN",
  "key11": "2XrCLRC3DoYHVC3P6gw5JtAPFe4PS5G7Fg5tEa7yTbCdcsHufCnu3ipdk5iTwXhn4hXVLgE1oxfZ9rf1jkT3fZob",
  "key12": "2YUcYsyGrGtuWDvs5ZwFVoWSWnsW1oZG8A56GQoYuFoLZJTLRPUru1EMAW4d5uX9tfHW9rSEYFpYzt3qeLLNuFGe",
  "key13": "5mfR1XE5e9mMXHBekybYGo2gGQnuYRH2fL2ehvTR5BuXkMqC9RC16v1V1JgWVT6UohEHYzzz9LdBLTCjkNt469uf",
  "key14": "5WcMc8iD6y34WdpvvDig8AX1gnrHtmV7HRKWRLYvieuy4THqYvGbJsySsGMcycRtEQsjRiNGxUvWXtaMFKQ85Qgs",
  "key15": "4hF8e5r9YYygbkabzES8ZdqYiqoWjRkpDhjXP2D2AQUBi84Wskrq3dMcSnrch2nAiHuacY7CbNEVmu9qhBGNQdNa",
  "key16": "3huhTcFzmtsRYQvBULymyH9i3Mf5MvQy1859VrZehedY2eJRNtwCqRbeVqzYeZTTrmt3acaa5HPLtwKcKmH7xTbv",
  "key17": "3NhjzoxY6ez6X9Sed4fL1ZVGtNZy6bDUVJFPKWD9pZdmH9o3WxQdB8kgQU9TqrzRp4SVmAed7oMdbP8zt2WTjnnJ",
  "key18": "63fzhLNxYSK7VnXYSLuJ6AruU1enifHUQ2ULsuKE3EruJkykWE3Rzq9BgQaj32fY4gqkcBK4nEtfZptaucRyKpxW",
  "key19": "53dFFBJNx1wQcLzYvtB5M6adGNATwW8Xe5qpwwb2aPLD5Npa6FoncoJjnJPPpQsZttfsDVuVYy9TPnQJgf9cfNRF",
  "key20": "5J5QdHAERCHHwp7uEYn1KegyaaHVNs9suGazCyMtqZatpozgAvSeipu5p2TqnSAqcRPtKiaZzHkDMWCyGmeuQ1C2",
  "key21": "577Xc1VfXZJ51qj9PUt3AD33dGXZHz1MkpDEucHaqqejPPuHzXe124hCDah7gDF6PQHmu18rUw5pXiaGNPPrxBtx",
  "key22": "4JiF9L8rRgvM5QefnnHJPR9Crjk7aLzhgeNd2xkt9NnBfLVr8ReoXrYCRoSDhTRjixacNxe9oeAjNMPsPXrCJVQn",
  "key23": "3yfjBeAonJXspYH4SzU9v9LCssaRHWsG4sF6rC5BCjyPABuvHC6LSjQx23pavFVxENVW7XQKpjo1PHbfo7J1yPqQ",
  "key24": "3a2Rku4w46c4GUGN9fPQ6TG9VA3L4B2PTDjfYKWJeAY46ajsQLLnRXMtdSCQ1ZWUb3YQDCzLHj5RKNXbNgReHvmt",
  "key25": "54Rst7vWRB3uHXFTQ86fdBQrFGwxfRFcnGYfFVw8NaVH38d5YZQoDhzV8W7k4qE2x5E8QgtvYRPMZyHnkgx4Ggj9",
  "key26": "3UVgd2zm4JYkDs4cujbDNbfvtEf4S1Y4opaTcdgFsH5CmyM48joM3mVpVeLdHcuH5EvJNXmWenEhRzxCEaMBX5wg",
  "key27": "5NWXYnKSgWpHxf2994GBcUMqk5d5MfqzTXWZgqqZb2NqAL6jDoimUnzo5CXPJ6kVMsxEAgCTpTUMDn76sbkYjgRg",
  "key28": "5cs7uTCrTfLtDHyCJzsn554tAEsgvsHMJdkP7fNb21XCYSAzzPphRuSAjjSZ9rsjtbRsnMLxTigRg5JZkJageH4c",
  "key29": "W8t4z1HbtjdwJQbAtCVhPSoxgj7VuiczhYVgZdYaNiVjc9xkCZaWGXiZxd58pjAwYYscvF6NtFXw3yMcLn3UEb9",
  "key30": "3YDDDi3v4sLBEYzZpG1pyD53G5kbfMVBoqcQ6NtuJLWxsHRF1fNqgv47mpALTC37tRE6N1pKo1eY4WGeiKCA9kTu",
  "key31": "8pRNJcvYGxtS1fAVKNr1FnRuFquWxXcaaY8CtWRHq1ePuHshSR7DwLQXF67DGEUqoe6yWKsfHXEqjvF7rxwPywZ",
  "key32": "2SADjX87zttmaKU1Qxp4dHij7aoM3M5AbmsKUhU9ebL2cQfPcFss5qZYsvG6BeTwjYfPcBm1AqFwbCz9JT5VW2zo",
  "key33": "66dSKcAea6B8WqVcdWuNuJdpgjcDZx58QHUqcYLptGaNoXtHEx3vXYDkAx6MCxPB1g5TBMEUqxSM7Wdy1kH8bTp6",
  "key34": "8jEa6xtDFnzUr2dSurHQE6XqrwuWCA8nTbE46oTDaiaWwsJYs1ABxSRE1Q4JgomfTWTqAJ7nMESgqhoXcdXFuzm",
  "key35": "5pKYSJo4PyqMHEGRuvCFPdimfqrLTWJAn2MvF9AqCmWS1KF5ApzNNC9jXCNuabnaHdAs1BDhCJANRLZcM91QLH4H",
  "key36": "q8NsZD99k5wDG6qswT3zuG66X6c41XGP7EGwFV4L78PKBxM8g7sGg44aYBacRE13YSfeU8ZYCZj65r51RnADSw8",
  "key37": "5wbAXo7qHExMhiaAENUH7vEWw4B7jiz7qcgLdmp2VD9dC7vtVoVfW88rccjiJpb3rCtGTMkHuzMaymRyefaLR8uY",
  "key38": "26kwtNDoXyqrB6Gwnkkzu1NnrhVg3dpKQQCbfo5FgNddEg6psLTorbJPZRJ8rptxtAwZqXDvfvCeE3AHBqxqyNfW",
  "key39": "3dYDR2pemgfgSUbjUTwWrnqXB1DzNRhesDqwha7bBzeQDhuybU5xK1apLFUdJrPYqYcgSzvC1Sio23qx3Ci2guew",
  "key40": "4WtMsPa579VChpAkn7z78jzZmJBWHzpYm9iv8sN7xpc3D17wNm7p8AfkwCb8sqaWRzeryk5MtiXS6hACrQDsbQCo",
  "key41": "122i2vFsM2En55FgLsLkAzaG5j8rDMD7QfL6HfuPWf2cwtK3Lx6GL1wtE3RrW3sWoHrfrrbzv27NorAgo6M5oig7",
  "key42": "3d7xVWJ9n2n6FmRNwgnqW85TKbsCkkZuEV8vvz4jeXHoXdN5JoEkzUYdYrQZdx27sF1CmZzyF7efd73qE7ETzMka",
  "key43": "4jCzVb54SaPmzxw9KzpWRRt4BtZTpgpQHyGieNjTsLtp4kvriJb7yTGi92AnJVqKqq4jgP4ZeiHh5hkWMDQuKS9P",
  "key44": "4Vinj5GkZ3QgXDRHXoecH2Vr1axtDwdTdqJFq4xfcWCtcDDJrZGLFgdRLmjdpenhpyeDsauP8bX7eeaRwywVHHjC",
  "key45": "V7oELmtTiHHTMrwmhLYGobfxn2KxBEBz8BJfUpMUQVSqWPHaBV1bW2fL7qN8SebZwt28t4wZv2bh4ty1hmnbWeW",
  "key46": "3uZ6csbAjTKdBRzXotC4FvdTc8ArTPPdfHAoYETh5yy7F9o3CDpX6x1F3EW4Xhi2e1W6TrF3fe5Mgumkqk7HsDwp",
  "key47": "3ErDHCQPSzpCiUry3BqwouPMj49xfybMoSd3f4LAzLopFWQvu2iEyf77U5BRdf6RZXhh9kjgftkEBKh3ye6oCnwa",
  "key48": "2kWqzwRAFWVzQtH9Qq7GdeUgHd4qzqD8AcxeZr1TsfmuubgjP71K1CxESEcFNrmY5FrmFrCCYqHyTsKVf8RUW5Rw"
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
