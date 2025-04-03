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
    "3A8G9K5wpfYFA2wZ6sEfyzVWiJknw3y7rxoV8PB4YF8ZCDB7yS9UawQNFbD8PCzPjVXfUdPFwZSA7m65waHqo5Hf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PhVLFKHkLXjKB1RLjnLuGZNmJufpERQcmt3CKGTgts5MzpG2gp62H8KaiPEjz4eMEy2f6iVCE91gdCQqcN3b8SR",
  "key1": "Dfq1L5s8jX8g5q7UwDrSGjc432KbSfqCXQTS2JHqiMRktcsdcqmGDEG2rH9bVPeEAN7SUDQso2DnySEBSU2cSZh",
  "key2": "439pNC9cXGnARyJw2Ex4hiqJyQCuvsnidJiX12YHTqn5qK1Ldb3fG7Pij23QxgyMuYNnTvBWr1SbLS34o5QXoTiT",
  "key3": "37K9w2zVLgERUaa9TRBP2uKom8ET4qJ5ejeAxBeD6qEUmeFHGB3esBkMERNms3bmg8qteFnGFBKJn7uAbR5fhK6u",
  "key4": "4bfDrp1mH7mFKZGNF52voPLc9jE1PtDLRRnTvsVNM9aPs21uMSda5JiNsSuFtLo3DrHYmVMgA7qMw8Q97p44yLwq",
  "key5": "2jzPhm2p4XRYLhPuahkUxEhd8jXRYhXiNyXiJPSK1cLjZ4nW9LFk6WyKBpKNXLdoGyy4GgN3Y4mUFx99jVyMepns",
  "key6": "2X8n3vgBa26gnVjc1iYCTiF4QUbiMEdypdRp7NfazVJUtHLDwUz6CNLUVS2Gogue5zACv5V6o3iHEaTvqt5jg3A9",
  "key7": "5wz7Ht5714ZcrThJKyX9CesMMHmQDnwev8zrXrsnhxpiY8XKYSdAeiHBy7sosH2xoYKCj5qqwR45UQJyy8FzkBzJ",
  "key8": "3Q6ukFraxunUACDHMxfXtWjhqcaQP8MtpkVEWFnjxE8dVjcH4bmgsig9pPFQaKgADskQ5kxXEtYnX3i9NEWGDLtj",
  "key9": "4hkgxb1SH2FfWSSx7h8x441myvwerbfVU14ma4VkjkzrC9EcKPGDVsPWh6fZ9YB11QZtfw4wMDKD21TQqz6ucBnm",
  "key10": "kT1xEVFWv1zb47nAATN7JE5Tfa8XsapzTkDfgk98f58HkWejP7sRNsptngKqNDuma2N64DeyTSM5pHUqiAAAPDL",
  "key11": "26ACr4aNvvENPs1C6pvbRbv32Mo5h7CSFN5YEitfK5EMa2h3Rw6yktAAvZSC2p17R2Pw6EG9Cx1yNp8Aeygt7V5H",
  "key12": "5xYCLR3cc63ZWdqTPW6enNigjaP9kxmiw3eFdi4qLPbCktqTjE6uKKsZn9W8aAaE8kEgy6LLGR7jV4RHvuY4UAtA",
  "key13": "54b3V46giwyDjK5QnVrsLX8LhzzPSnBS3KSSgdo9jcCVjWeSSscmqPLvDzBbaTqgVYuxCcLYq96fokc7Pdy6VJ5c",
  "key14": "4to27f94RpgqEuxh46q9tdH28UCTvg8nom3oFwPs5F7ruY26mbdpXxma29Z8eoDQXT17D5z8B3UJNZZDoZr9XzYj",
  "key15": "5fkCEga2TE6gWyQHLqGz3robBhzD92i4aXNEmkG7ibD43eMyhMnmwXdRhWzPmCrpSEuuJcni1iG6gdifd7BLe6BJ",
  "key16": "2btqi8EgUYSnccyiuB2doTs1EyPMQxXHiXcnJSLMXyYXbgoeYyDKAt87cjAG9QeKnqoXSAuYesbbgXmNCc676Ksj",
  "key17": "36uJYADPNHximXfm6ejxfzMGcmnevvopJKUkaAHxEWu5VeKAhcdLMMfZbnBDvhkjKwc1kJ2kPC9HQeVfzUwRJe34",
  "key18": "4FjvAriFsnQvGcyuyUpeE2ca92H2Ha4dw6rTuEsHRim9WNgQeSShPfs5KNXaJozzipTBXHvG8p77CHexiDgsXTCf",
  "key19": "5eGeNwkv5uAQ5oYmsvhvjtz3nv4XwfFbE1Qb69QegUsSmfkSCAM4rWRKZCLiHtZCq9YZHNF2bQ5XKAJ5J7a3kLRx",
  "key20": "61FkafnGvix75vNb5HQY8FmQPYH7J4xgF7GKS1M13aKx6W265zUR9oE8SCRV5iASFG1iZuxKzUgU3KdZSm2sBoc9",
  "key21": "2imr9bPRx26hSg8MA6aBks2sDRuo9nx8f7KyQ822okc7MbtCpyX9FchQMCquHkUrR5sE69xBVsKAkr7LFVNUNrV",
  "key22": "FAPPGbqHjYxZRVqBT8yVaUrnxc5ak2dWomRF8y3hjFmsu8GT6J3aHqmPyEy3Gfg54qidgkXAQWFbxuVuEyf5ce4",
  "key23": "52EVPSa4S3aaPtbQ4hu7XB6YsKi49MF13NvkHkdi9hrXadnEcjDKoNzKAgxNqoG93LyFQ31X9w7PEHL11QcWHkoJ",
  "key24": "2M1gcR2dfk4ZKvsbDsuLZYWbCL936FCR9QGo9Khqffy5QVFR8MZZ8WQZmof7qcwQYLcXPzkgt8e7Tt88U7PkAwqQ",
  "key25": "2WLVXX39fnoSmBnDqsDgc99YMwpcagVPZTYocrBgMxu6SidGHXtWc6sjA7ddDewRVz2VEBETEVJprZxkDxi1PqN9",
  "key26": "3x19BzpBC78qW1yZRDyrxDMLVNiZvYgXAG92Hrok5BEKq1ytGeEi6eyjf9FzhqBVUF4nHb2Mn783VsX8Vhsd3grc",
  "key27": "3dVHmEdcq5TcEJiPYkc4CzQtbXBDHo9E23WgEjH8uKX8FfBCogngFAXJ9G2QWEs6AfBt6LjPGQ7cdzAXkDJRbs3y",
  "key28": "3xVwJCiwumZkYb1YqsL9KFapZSK6msUedAB5K7kxYbnv1T6Epg3dREbiTrv8R3o8XzeVVWfbaxtZvyxTtEPRhnfK",
  "key29": "56dfrdX2tmp6TEVkWyAHFBHpBFATfaELBgjUaNSQ8a5VQrbyWrfLpAa9Xx9ufdYT4o9HfvbdLkL5D9Ue15sk3PYm",
  "key30": "549BYcAVVpYGCa1ksxuqZuSNBK5D2wivWnZdT32KBpH5FUX8Xej7rrd4uXPDhGBoa9Qe5PizFmQcwaE7R5fLUQ4F",
  "key31": "46VijG8nh5bqZEQTQ9ouDRpNgDTLAaeFK3aRqVR7zwk3zL6F72ptn4jE79duM7Rbtm5WrwTqbtpm5ggfikBhatak",
  "key32": "4YT7EyvLnYw2TmiYjr7snWFXmGzg1WV1Juo8kSe1ZhLmcAYZn4fYwVgabbjJUYaWYKhLgZsQRCbiz6M2i6UzNwXu",
  "key33": "EH1Brt8i4vQ8usjWJwVFiQru6L98rFS6YxjWs8ZwDM72p2k45cmWAu62kw8eC1z15GzxP7U4F7UqMKSQSvu9XUF",
  "key34": "5LBE4Mg8bsjvL6o6EcoHvUARHTgdVG6Wo6LdF4C52WdXoymD6FhRpv3xKh6ga3W1MNjkH8sae1jfCGfA2XytTUAd",
  "key35": "K1SwwMEt18JgsL5iBNz15jNCrMdbYMbU4YEnTfSaJjt5irvjeh3feMJQ278ApqFToANu2pqRcLucuTuuSfbjave",
  "key36": "2ism36GgZcMdkw6zrt2TEkRqX2sd6girb1MeHovjPtxABTUMnwitR3Nmz8yhLB1hWVzDeLAZ5es1wefotvTP6CSe",
  "key37": "3MoPzbUjNNTQ4VUS6ZocJgJ2ZGrDsoiFRVbBdhYjrqvqGcbEqtSiCJqHxUiN9tTRYDN6BPwVgxr9inD3PMvQi7fh",
  "key38": "5iGEYocby67b7YPpbWQ593T2ma23fnp12naT88gSaDzZ9XvYccjApxVsChnPiAVrqiMWq7YL9En96Px7Sza1nxkA",
  "key39": "PwqpYUcY8ddNUK6WCn5VjuuL69no1jUx5m1Gb1VeGQEfcuYo6cxJ9LZ1vXw15YFA5F5fJGzxh7ngu2QurGjmzBr",
  "key40": "3hZR1F7ZLWQ6XB4DoXGkpM86ZqkX6mcZkyqRQJXnhB6vKZ7yNnERHeXvvPYWTSZqUBVwt9bwmsRDVidLY29VPuCo"
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
