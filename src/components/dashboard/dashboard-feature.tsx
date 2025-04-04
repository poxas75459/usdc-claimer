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
    "36Q3zWG5eJ9nkMei4pDvgcX4wmGUXRrMxEiw8xVUuzG97nhP3zvo2TebGb238FBQtM865kABB24DmDYs8cYHEcgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45nBCziPwLWoExy4iiTUydYrpcJyfvBKZgvchfLtmaehbf4G9LvfCcJ6i8qdhT5GnASEaKgpnik5XJtfqR2KoF3",
  "key1": "3dcak9KeX6JYRP2p5e7mzLz5ytNSk4ZWHdLwYWzC2eXqp9xrcUrRVUCV3EycfLHoBEg3TShmxU5cgn9wfMesX8HB",
  "key2": "5GuSD6C9jYSoz9ufrjoZHXSeasBVJu8K9oPaUv4j34NXH1EmrZJ6T25RXVgV6qd5vYk63MBs2EhkoUpP1JgcQh6w",
  "key3": "Dn64CD7DAXVt3sEZ1mfDsgQLExpNboMTu8cAs7gPRgSaCb1JESjKQRBNqS8TSRrP6mMEKcwnTipsH2vtRrGGPcH",
  "key4": "3Kyck7QR2ZqdDsbv86892LiZW5vbV2AGbUsbfpCj7HPckyCm4L9QxUFiyNFiGs4D5MkyWSak9zEfrKCAxupjiePJ",
  "key5": "5UjW8nMer3XUzU6xpQ8XPLV4DhRHe6qCcAMDvSw9DMYpERBUc8z3WZqvjXQX99HnYy2Sm1EXqjq3GHax9jNHimTv",
  "key6": "2ouBQhH6LMhf3VXG3HNPehHnQBxHtsh3Lh5SZEToUKawgWM2J9oNbicPLZxeoqfWoeLr7sDzM5z2oixYv4fFDWrc",
  "key7": "3sPZpeak62vRPAnqxc4V8DfCM1h1rSQdhcnnvyGdi6rGTvejA5nmqpJoBGK9SkvsNqYtCLYFnprZ28CgaqKGePGY",
  "key8": "csstqQX2mposA42iK5fEY25otcR9BuEXhzcXBuJopYtwRV2arhrRnGHkbCV5AjMjANXL1ffHQyxR6vAY51nShr1",
  "key9": "35QyegowgJD9oNs6y9hDxmH6WZXcp6N8pQvzjAn6vVVMVSd22ubfqursQSGbqKVrS6Uo8Sd2hM2mZbf1xaPugUjz",
  "key10": "5N6mKWcoJFAgEZFyxvmLrqSJ5ncbwbSVYPwFgbZJKJsN9LpAAWHQNwasT4dPGH1enfpDLcepnZwM9qo8JxhDRjBd",
  "key11": "1g4BVtG1MCz6VGMT8CPLUyXqRqFypqgnEScYEKnUAuFokMzkjtA3HffAkhak79SCxMZWeiKh49UF2Dz24wLhFsm",
  "key12": "3XBzjyBMNRUqJFoj3vvSGPc7zEHUstKAarxm7QnXvZ9JtT6MbGJGDNHZ7AW16bEGhp529T3nSyVgfz1wG1CHkoMb",
  "key13": "5gsVHHDZZ5kMVD8xrmzfPzxtsJzA8DqMjy9e6CMiyaGZXV1T91H16kqmwuRFcaioQf1WPNJP9mv7c5ExvDSi9XgB",
  "key14": "5NR2XdCpoajCum4ELoYr3PPkJJTeFrfCewUFCjV2GWh5DTrfuXL4EuUNvuEWt7CHJhdVUtbscBhVYU1LHb7UVS6s",
  "key15": "5xSnpBh1PfuiyLUXpjc6W6Chs24CD93NDsLTiUDzP6y2LcofnGp3vWLaaKoscrn6hMdKpy5smVvtqLvGPS63BdD5",
  "key16": "2yD8sVvYidtYRBhJQz6p89E8zmRLwrEtkPTtXsRTVFkv2zLVGrUYHqaPu61GcwJCikmYvnMPmijmtmHxidpQCZr3",
  "key17": "5rcHQ35cstjeU3RnMMCXMiTyBxV6GC3o2KSzhiYZ1vz8dZNngsYxWUwh9TyZ8BievAJLmod12DFrKAQbW5Y9hrY1",
  "key18": "2LmtXgqoYbbQ7kbzoRX8UaRxMDubLrJy4HfGGPniLtNefwvnxxMAXdSE4Briczub1yUC368nstiitJnjTRq5LBZm",
  "key19": "MX6Gaak4iUrEgxhNjFxCQocozBFwoxnN3FCMJ5Z9AYUgJhJPEr2Wj8Q9WWRcjX9FZz5tvqJz3g5rvxAZGDhhNJz",
  "key20": "29FYhoDfyQB47niknMqYb5SbVJoW3yhxZtb3GufBrSQV8KWiHthkh2dTEXUaKHmFRiprekYmtoE9jLoLvkeh7xbc",
  "key21": "3ikQRpmVuNi57ht5dXMUcqfbi9pnyqmbM6zV6KX7SszsuGrmzqpE9qZBZKbbhgLxq8VqBw4ZDQpFLTUmDZxH8srY",
  "key22": "51aWj8yNuGSFFEgzw85JHRJzRMftuUVag6Bvvxeo51Xc1WHpSjXRjWUWsUv5AnYGXAxdnuVkXxiUyRcacZger8oh",
  "key23": "3meLuuo81wVyjAesyEgCnseZJgFa2sgptiEAenANUbZjBMmYmTF5S8yXxyM2gFzcyezCfokyeaUrfqBcVc5P2Kiz",
  "key24": "3o2E87oZuNQMba3dva35HejXgbXTfWUSMms4uu96jSNzNJ4TgGaG1Bb8JMYL5sWToPFQxNq6eRg2GvCmETuFHx8c",
  "key25": "3BRreWUcRht53eLYdX8fL3ZKz167nrrHw1mXyB4osy8jyBNfGVm7jQYbqtfTJFCfjHYMye4HetCaL96RdJPh4bKZ",
  "key26": "3X2MwBjP73reFfk9XdSCig6FAof38Zd7wCFje27iAmqVYvKZj5dzxU9nsrpGN9KMxFNDT5pnnaf1T1q5Qu46osKM",
  "key27": "3Cmprkc8951EVEntoTARChcrr3qtMjRh7t4csm6hVjTkTDSgorDDE9Wg3Hjs7RHX581H3rTpYNb77pcwTvx1ztG1",
  "key28": "5k4UUVuK2gWCzf1WSzubR7kUvfHovAZho9wC2oh5TUze22PLwhpVXznkmj18mQkmASy1gR4C4XCAowcpqrnmF8cy",
  "key29": "3TfhLSUoN7Yey6qnkiGZUwpMfCb5Dfvh9CPfEqE5BSR7ELmp8MQaU12uz3nXYkDcDJtEySeU4vbrPCk4dAouy8Td",
  "key30": "4dUfuBQ2a5UgdG3mNaJJRwdXgDp35kNtEpCmaTdJhDM5DwQiHU7hjcDPLqukQVhdqfCbtDRuQngvzDg594wDjTon",
  "key31": "2p5yJZD5KqsEtwPdbWqoCNzmhhnJZd3nPC38Y3oyiUtqEK6kWDLsAhduLMkA4NcJKUtgYJPXc77meEpjKMhWweAc"
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
