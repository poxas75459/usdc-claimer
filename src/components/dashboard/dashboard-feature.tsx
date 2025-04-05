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
    "nWq6HsmtFxNiHCHjvtoCB9dVSx3BHsJEJWrKCDpGaSirdAMZ5xyiyonxgHpwNuqJwmiioQNNB1iTNhHqUFFs5Dm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R7uuHAiuHbyJ8dAUhLSvBi82Kvva5bNy3MhzLAwvyXb8dRMSXgJbEXcqVeUYSnxmEAeuXCndjKN5mka3Msh7YJQ",
  "key1": "2Pj1h2WrD6NEPnJdfZ8NL1urVmjEjXEx8euw3aU29xk5RJwWAXhe2BJVPHtZyYsPTzbM21AWJAXy8DcMJSizfD77",
  "key2": "5r6nQ4mT24XTLJZsTQDThynrSwhVipoLoQDrDW2mckrHpGt2BXbk9SN9uq8mDzEPKNAAnZrw1ku8Cn2ViupuMiPQ",
  "key3": "272oyEC46NZoit6ZaGAU8WP1XTWXbZ5cZssRvPVnxGfwPEkngCVUL7G8dAYicj67rsKk6Vza54g7wfvYfX5PFgYe",
  "key4": "NRy7PtnCdY89VMiwMRQUgjKRDJxzLEuMhAgxcWaJ2BKsanLZQBgeW3a8VJVd9iUCvRE1fevN9Ysjes6jaLNzskG",
  "key5": "iZZZttSH8WF6aD6mm5f8qEo1gi5TGzwp8LgwZYNHJJqo68vrZ8NyHdGmKGicfPvWfze3tgwDvvkYxtKRVtcttLN",
  "key6": "35StUKNy1wQkpqqCfsGN9echuwZKKZG3bWCinDGPgvDKKvXF27oqnqPxp674ZHyMxwiAwkPHhw3FAVZSbuygwwju",
  "key7": "4J5vzvvdU9SUjfyevbkEwgJuJEru3eeuivtJfRAfA83jHoV5YvK3FviAfcjFY6SMxdmzCCPhg8mgi8VXSsLRUUsh",
  "key8": "z1tKQiQgjf8ThZ3q8L1GjdhM4sSaKC6Qz854Ky5NJVcpftRjt7hWHfQgW8zTaUjvpSAMeNdc7yeRL3DbvsQL88W",
  "key9": "3k4nJiC8xLf2WWmHszYeahyGc8vFF7ZEHF88NyV41C1vC98kqSUW63saXdMTd911TfHrG3gNaB9XY3E4dPH5EKgp",
  "key10": "2Whc6WTr4DqVnQpkne2VUixJvtLW315xJKX4hYUhqigGmPDXp56BomwFf61Hw98aC4ryprpLKp7T41PEKd1poP6v",
  "key11": "372kMWKqJVSneLJV3ZWWTV2a66Ua8e2dMpBAKTMgbevKAy69tjLWic3ohu1cgECt7tSDboRSJXd68EWLkRoTB6L8",
  "key12": "3wXwP9HvGeVMoC15vMfMiCaKXrAtCVkBaGXSdo8Dij2koiex8Td436jsKdqBfBu3tfZi9NCdrqyq6kSph548NVAf",
  "key13": "6VSUbuLLznJAUoEP6pwmBcZCynmgQPYaMZmKcZxBQcyUtTmZHQSf7eeNRk5PXH29CVT8UjA58McVNFwpu4ybWjM",
  "key14": "34wXJYJYsmXRKcCTgoYf5UdiuP7BTisVM1yPS3d7pxxicLK5ecPdgmyaxJyErBiNVJpzypYoUxnAiBmaT34ov2mB",
  "key15": "sTNpGPsZ8X6u3wM445WDFU8p5MttqJq1z2WbPinHPMNgouaJNhDLZLEvSDSdvwj8Y5h8PP4F4tfvsFRomrcSzNZ",
  "key16": "52ciLYGFwkaH9CGxeqKTfVJt4U6223o81hbBJVWCyhA5ixhRw7PGg1wN4f2cwzCCwf6th2XHYAcJbgU9K27Zco3J",
  "key17": "4zfCJwZdZm91YN8yVHS4apq2PDd8EwHy78PusLFWv7o8e9zt1Ztp5GDtLX42neSkrRvDomMRtRVKUeQAA94qUvsm",
  "key18": "4hgMUfo1gHxX6H5pHAjtqQCi9ZqmDhqAkTRe2dZ4PRDVK8KGePxcqrKKxSTTZZ7sTBGyxcj9M5Q1Te1QjLivdrt1",
  "key19": "3MHhU7C1qhAY9p5fD6qjJ3tYeEbhSkVsLXXkdzhiAJm8VT2GoP27qAcNPctMy3bqJ8rz2AhmzpgxrbgLALCWsXnf",
  "key20": "2K8Ey534a8KffTmKRkMvmTPQgaRU9HUgMYXzXeGYX8Va3tih6rCuumtHHsKsaN8H7Lgvxt7WPA9c1zcyNRhKkDRb",
  "key21": "5ikmRf9jXBys6hdL8gRcVomgHpVQyF8awTfg7TCbLWxsdvL5kSKNxRG2aDoWEKHLkLcaQuKwFMAd7utuWDrdUdtT",
  "key22": "2ZUKaHoGVmD9r5dtgDpwW25nL1cqni6frdP5fkbhoePstAZg8FXzq6XdwfEDez8Z2UmQVbjdbBFMDBPJtDeKTjRp",
  "key23": "2EBynH6d76uqw4jNnMGYbS1CehKnLi7A5ZSNPBbX2yMFT5EhqfYXShggpnchgXMQCUX9hX8hzpU3hGHQ36RcHwqW",
  "key24": "6NNZAN9NEqtiK2mpmBoCMNkjTNfjGC1dcGTyEx87gmJHvTu6LPTRGsTHrD4DMyBAF7gr734UtcFAYZDwF6FyBWs",
  "key25": "4t8bwdrWbgJGYf9V9XzCc2R1oakAMMiSvt8Uskb9WcWVVe6camo4WPNKngiaEFyXyNeEN5PdUugDRsPgeinJixLd",
  "key26": "31REwSMrJX8mQvW2oFuxqdcPU52YBDp6y1ADveRon5Z9H7LUn99Q4jwUAito4ZDLo4m4SpLn9mDYxKqJHq5wMtky",
  "key27": "2Qxq6gf1TdcszNU5amm74NdAYnMqtkaW4jdPTut1Qmrsyuc49mxgDZMvDcEY3vjqVwH1n48Jat1GfTQKeVFBbiSp",
  "key28": "2MPRM6jvm171n4umGWRuyeU79CSL7NNdMWeNhZwVGDMT7eYwYKw8cbr1iWnMqRrWe4UgwtXxQgHvsVX2F6LziBWo",
  "key29": "4uNGHBFjcVLqedYC3VHwYenTSdpa1yL2b9iKfbKWg6ddFfDhZiFqFRjwYwbxezLdNnVD49ZMGSKnR12aW2TWDzyY",
  "key30": "XjC8vdi8rANqdYUDdbzNAyQDXrQimh8RpA8fQikRyGXge6Etdq11noR1BNvT9NgWF8d5E3wRTbQa5193s3FRJqc",
  "key31": "2yb2TshapS4BCtAGGCvXSRtRZBWAJiS7rKRv4QaFBDJf4N7m8pJmNU9zUG8cwSREKmVoPwNFM7AVQiYvVhdha4kd",
  "key32": "2MR71eKToRaKipQuJ9JeoEnDivuT62xDhtDApRkahPt1hHEn1tZSkqKfwgWT9Hf4wX7RtSD9aBTWyKFUnWZDRw8G",
  "key33": "4hsQrEcyLso5A2mNetQHaQ5KxFUBRCn8GecKJEUpv4R5snAFUCp4dRWHoekrzSnBQj1LAp1NW7S3iNqD5pu2GPRc",
  "key34": "2i1twsYGByRzbssFwLondmu5A18b6DbDhVeJdf6vxYL6S9XM9MC5CWvQs5mfagZ9KtmMfUV8JTBiVwGCMRnAZaCK",
  "key35": "nwrSf5wwDANz9Y1uV87iXPXyDs3eANwUVkZCKgKvabpP9LiHQe4u6ee8gujMcwHxcEkv6oi5EpUDoWE1umL2cnv",
  "key36": "5kVBz5mGjc5nmpd9iHXvzBVDWKV8KGGL4jbGGXXsmng1BeXBDMzsYJAyQBzmC1hdrKQdLHCdHwCCRc9jQsAYGYDF",
  "key37": "3gThPvYZmZhrpHwBYg7babJJz5mg4wMJZ23Ldu2QiDcbAEka8vbPN6oApaGxJReVbKEssvahQY1zzmAonQArrvRh",
  "key38": "4awh8zdjToUNrj7f72HJFCjGUVR7eZARvuUMVo7y7uvL9x6k7KHUpFJYkJeeV43oVCZuZ4f7Y2aV2ZuvFovoE11h",
  "key39": "2G8Cpur5vTZaEzRJeeyeyEotkV4848c5Ttvdof4Boi9LPnxgrkJrAxvQt1EL7Nc96idrkSsSTRhLySgBeKRX47sM",
  "key40": "5H25R9aDhpX5RpegUw24X9aLTPJ1d8bYkyV3UVB8DdkRjrbg2HndW3XY7qBTb2Gvv5JVzuJRLEMEJvDjZ5mdUTnU",
  "key41": "3tNfAqjx1RijUh9x6PYXvWRkSHxSYUAbccKo5nZbLqGAUHy1zs95WEv7b8kaEZu7KJcwH6k9T8FcxDX8hvwgWn59",
  "key42": "3TueDDuWazZJQaLykU81TtEMyUV2Bbo9YpGdgAZvj3fCZGieP4J8TVx6pzVDKH6ZCzAEgJwsXwPJNG5eZkLDNzxG",
  "key43": "2XGGNSCTtSMqFucfhNHYcVVhb1JcmJbu9bVpHH9rZ5V9UfxDWMw8pV3FJXkAj2pjx6bXbEjJVzPLAfbLJ2xrmYmi",
  "key44": "4sPsLk9gvuZQ3M7hzXfgBGofjDB1X6xPvQt5k4M3prV4xXr7iaxfxoeCUU7mnCjvwPxhJFRck7PD4FxvurugfkLu",
  "key45": "3TzzMshM6yEpu5qAYCaYTXvCGfUxjWNCbygvfbgL9Uu7B1YTxn38WHXDmSZkkLdpGnikNi2Th4Preu8MYzgpYawQ"
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
