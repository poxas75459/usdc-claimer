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
    "3aFKE64uSU4cwvPCwfrifup6pCwtXxukWaBxnH9moEczGai8qQQ6U2p4VSB7TV4uV42YYynKQyMjQ8ccmSxbCXvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pjbi4Psk42c6Lxs41gujqHEXK7Ukjeo5Z26qRTbLQ4YBrrgot7wDcNeBgVNJ2vQGuUCKV8yK7wgsYiVv3nt617c",
  "key1": "4LcAB2ZyNwbc5azjdSs1KSzVjBJJde3KNzanaUBZ68VSjVF8w8YMbkZrHHukioW2TUMfeZ7FiGK9EKHPiLuL2JAf",
  "key2": "sXLbQJhbiL8uFkHZ6UV88g1Yn2YnzW5joNfMCkFXYiDbf5Pw4SMXhvTs2zgi1TQtp9YuBtpiYvsfYVb1iq9QHbT",
  "key3": "2BNemFNnkLQbmoKQQG17TFfgLdBUoa3fJSMRGRQL7R925saywbqduCLQntratZYua66UJbbJErR21sWRJ3zKYjXd",
  "key4": "5zZLnAptMJZWPkaF1WUcP1mgjv2LWzmtqWL4GPPR6JnWNnXtoYRuX1RbJC4aajS2oGFDxAkYweU9zT7rB3rqMQn4",
  "key5": "2q3nxvuagzSxzv1kDWUbDeeVZ7JaGEjG6A68LeJrbxf8BreiS6yaYzWus7w2NnirAwUyjkjtsZNpR7cJjvH8skUa",
  "key6": "3e2mNQZjBgXzgPHmWXfPF2dSWcMNajanWTUveXbN3gynAwefYDj4Ab6YmNnj3JCFgLcyZ63oLCPavQcUA5Hv24ng",
  "key7": "53DznR2YLRBoxKDfVntqWdADRsfwGgcdHZNaW3XATVEy4jK2J7JBUa6H51PkQi4tcBNod4wmwfzy6UAy6bVuGTJH",
  "key8": "5nbLwezW2Vuvy8siB8kSmWsHDXzHLgXvyNZffJ95MXfG1UMtkZN7tNGcoLnWix1EWQkvZ3giQdnM2HoFnbG6NUNP",
  "key9": "3tQ2reHD5mTpxtCCgd4uga8M7jaDS7gDAuxEEvVCs9br3AvBqyA5XqShwMecmhvZWQ8RR3e9ZsGDVeD6Y8JMJhMy",
  "key10": "vbe5wdjBZNqVUPDX3fK3nepHEUjqDDHowd8prSKV3CZfQJvkhEpdT5sGPcC3EwBQU7edSEjaDgaFXtDJ24Es8Ri",
  "key11": "65Hgej6c1NWbi359tG1z6Yk9vvPJPuVAzaiCuf5nDTY8SY3TayqK2cjSPyApa2rnDNSA2pALEv1PCx12bnyJCP4E",
  "key12": "4NivJYeHQoEMhHPLnG6vpiQ2JznnRKUMpQRihRbdUwgCb3MumcB8LpHhZXCiunc2MwYYz9vBiAD1rQrEhRx3dPfx",
  "key13": "K2LJGJiq3krJmtt1gXozzDnQWfPVEe7h7VFLeUiBk6xXGAiR2AJ9GpEr2RR19ovWEjismR4YPdPJauVhkpUhL3k",
  "key14": "24AxEraDF9W41J53ZV5sfEDB34kg768qMXyEksJ4m9kvhiMgwtvmLPWva4BzYzRE3iBPccEeyLjHPogD83miun1W",
  "key15": "dWdzU4Btkt864LBRRPbXCs3KYFP4zAvsGTdpgrBskQtR1A3rGfk7xWTAQFL56fKxAFvvpQySvfRztZtFK1zVa2R",
  "key16": "5Vf5Nh4pwMf4Wkh3wkWgSg2wcT8Di61esFtNmnjvu5QgwKKkXRHMZYofWEx4LTtUdjnoTVbvTvwCe7Rx2pWUsKJS",
  "key17": "3HaoHc1ndzLd89QMUFUndQyVA5FyDszKQZA3ewxJf2sy6hQhTPo6bM9vGXDRXhDgfSs1KZeaZWc8k6y2TiWkj815",
  "key18": "4rVYirEZRzXETViT4ABaciDnWoycrhjGG4jUiYX54gALL36tNpX8j8EXKHSuziQwhvcTz7kTMqMSUSmeFZzjmiRQ",
  "key19": "2ByoMncrXbd1qFVx3moiMvE5DmW2j3iNsqQCyYztuD6YE4TFLam3pcdhesfpWq71k6Y1Meyxe7g2g4qFsjKxFM2G",
  "key20": "2Cp98Dga3meHKqa4LEFmSU3WUzZ4psfpfDMJCf2NPWpXbsLSUjhUGT7PeK88rdw7VkacGFrR6AXok3TAS2mCASwQ",
  "key21": "JmhYokjgHYpfN1xM7zyLuhAZFZNbcZ7zTHe591d7SkQcVkKwm6UfwJRLz4aC6wrhHHiai7mnqWGZpWRtXsybhj3",
  "key22": "3cEdcs4SuFgc4ntVMcAbZFMKQ522zN5DoFpYZiyx5sfUUFbC6pRbaYUufA2LSa4uBswbw9WYe8dQMmxNkUNMeW2n",
  "key23": "Eq9irfp8QPjRuyGvhJu8ZzKSqBaXhGBr8TVByGWp2rgPJRcoPtSsGSPNA7zGcV1tudrcJgbHjcQnDrp2FNERapX",
  "key24": "3nLFNZcn2hefqEhomVf5is4ZeSSbP32aYVuvXN4hfG4RBn2bB1x4tnFCiSaQvqousDD1Fa87RqVFgax7vkYBmctw",
  "key25": "2hXrcUWUYAtjJqX6brawEzvxVCny6ZoZR17rcmPb3KigwGrR6tJk9xG1jzJwHSLgUH5apAuZq4V6je4Vyw7BLFba",
  "key26": "3oG1aBgiaCJkb7rUB3mFrxzd7gzTtwbTP5UXPHQt5ZTae6NpKrd2bc1Ay8KQ1jWnpeC1fPNoToCkpkVjDk8uKLvV",
  "key27": "27qZBsVMhNhpzjaw3tVhY2zRVu5zupbu2fYQyizHvfYeqc9hZ4xZo35QmWjwkw9QS2SqYsHHFkmHiJ7rpn5nxVKk",
  "key28": "j2gWFR834zNV5Tb64bq7JZyHjBXHy8HytekjJJTGPnTEdcEea4SRknUVTHHbdFXhHPQahq2zZSohGCZbFiovhWQ",
  "key29": "nQJRN9xmd1XdRZn18NbehoJVs2h6Tg6SXafJxVctCojgC49BSwcMH3ygk8ZD9FydkcNzAXh8TK53G7jgRnzkfnX",
  "key30": "47bnqCH2LTZ4XuVwbLrcTodcJt6sfsfUJTSZNVJjG7jXMSfi21tsXL8w3oDRyxM6cqVHVsym76jmFwLn51FXsmLh",
  "key31": "3faocoxk12ACQznGvjvihNgizZR2NABziFsDaWka6VMJhK1YrNaUmAKrkK3S72Xx3dcBzS8XDaNe7bDz5KJBDHzc",
  "key32": "2bPuXFzb7QpkzjiNMN27uDWbAK91qcUBaHfM9pJAYhWXtco2TEbpzVd2raJS91vLXkP5VLXkTaSKnSWR4AFxhKAM",
  "key33": "4UZ67y7hASWvgMJ5A2HeQwmvEyV5us4J4xrQDarDMX99EfUeMh4KGPG4zmFax2teeF9Uop3i9zbZXZtiDGHnD8T7",
  "key34": "iEuXrY3xf3NBJhCvVRarUHmQCFmB8eeYMjNh5kD2GUABybPYJq6bBhoNY17upVizSn6DcRKv8UXQUpWGZKCToD2",
  "key35": "4u9i2yVym2GjyJEydnGMgC6bzUf5AU6CT9yyRKGcAwhMRfs7oD4b6UbVcLPY3cLujUbCtyvkiNp3sQ2udc9yzTbw",
  "key36": "3higwuayQaMX6ygZSvPggv9iBKKsAGLzkaVUQnAHPFNbBtD3Y6zm4nFetkkhVPaoN6AAeW4MZVdJ2BEoBzRWQRRJ",
  "key37": "3wjUDiXJ2A3dHjByFNUZ3U8ZasJbNH1rRfBAjn8MVzYA2dkRb2s2xkXwahFbxgdCrncdtEyH2N3b9rc5B8vvbWbL",
  "key38": "2LzKecsGkqiyGFTiwGzXdmKDVrTww1ydWnZMtjagz8SXDbBZYcXRaHg8ML13h273Fcg6oryMebyU4REMx6mif99y",
  "key39": "54eGFGE6Fp9VS9koXYYpRPwSdj5ceyb9mtpCWQ3W7vu3hkvXNyPesg8VvYeUDiEtqhCFC7udNXJdUNJdMFa2WhLb",
  "key40": "4tU71SyKe6WLfvjjCSqy7CJNiraxzfujF4QwPo8dx1pczPGfLgyvRxQoTmwRzRprPgqhAS1ksgCDCFht7G51LqA",
  "key41": "43QU2RZJugyLkegrF9Fgi58sdgNpqMod287VWTkUnbaGoSWogrmqdcGS5NauHr6BkBJZdDUfz6emNiVxoHhnSRaE",
  "key42": "4U2Bsg8ijAZnLKwZQeVuLEcxUUHSGeJn15xc27bDF2wBnrEaK6JBUTGnHdmsJULaDZLEiuTc3ojxuPxPi5FjxwW1",
  "key43": "4PniemErUrdHhjxYCj7hdMGb25QgyzpYQf2SjdBAfAe42ytGGkhm4nSsLx1L3VesmLkBjPKNRSXdHP9TJ9FGbziA",
  "key44": "2aa5SRWoNtx93uoGrc8m9LDYaaNLScCwrPunb6fMFYAKRJpAgdWGPnUy5h5NogQSPGKUbFyNL9LzeuHStGJ9Cyu4",
  "key45": "4DFSR2jNLW6fxkKC844pvU8ehab9HbcGsYPh2ynfd8nN6HvB3znLUP6qNBC1osp5TubRjTVktoSriX5JY2Zw2GY2"
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
