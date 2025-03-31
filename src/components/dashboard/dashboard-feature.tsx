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
    "253WRfwggZo2mi1YTA6qkn5n3GtZ94WhwwnbrxTuwTsGhUu5WJikt8upsbYjytjR2Nf6ixtojtt433tKFzp2x63f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5moSx9pf4fxAPQt6bBZ1jpT32C1fmZxESGq7NKXhuMJPR1cjDKqm1VNuzPiryQkCwgUJ19jrGroSxhwH5C65YpJi",
  "key1": "CSUwPtQRvry43JkTioT5os8swwLgLmEU2GbA3XrxRXsX74NHmAkiPndMxeMUGQyBKdwDN4YvcQ4vZApZZpJk3uZ",
  "key2": "ShjJjXF67ZmWjoKnYqdRKxYu2ETYghC7tPtirZFvooK1yQamwM5CuZM3rdv53Qu4Xf3LkYJWf4wFyhBX4cPCcHr",
  "key3": "3BrKG2wey312FsMqrcCZAinStNhjc94zYqK1MvzMFbhL2CMU9KED2w7DEJDr9KDqK5aetYxmeM4NMd3b17ZcAxpd",
  "key4": "2LezQXZkkY2txyqkuMNkUjRSYn82nMYJapexuJidiZogtQkdESTeDF2HoNMrbHY6z29dZpYsrxy5diVZfXypW2si",
  "key5": "5wmhJYf2i41gR6JHCdYy3RQmZpYpNxnaGcwJM1SGEsDyrNm437KACTMGxGL4GPz2VgXkDk8wagiUKDih9yGqBB3V",
  "key6": "3bvPKknaPSUe5UH1UNQGg6ydLpPxZ2Qtg17WyE9onhmCDivukZWabAVrP8ySkDkeQ8J5J7vntGvQS7M1U7dMpSRA",
  "key7": "2AJWzqdNoxnNRqKxEvduLXKprw3cqFRUZSoszskqANJ3YcSeALShQ1FjfDGuVxs2PnGBQHkuhTCQBKLdRa4DNX4N",
  "key8": "3VecKnDyJSoximrowiZEGUJpqVKJpNrx6mrVRKevViqyCvM6sskpgaGkcc63crT9vt5crfcDENcfKyV7LDZmQCaS",
  "key9": "tfkMUo8samXEBFQ1sktZ8YyCeJmQSkYDjUpbTgci3bEMaDpYBd2yK6uvbzxAZyriLsriwS1zGezMMwN92YqNG92",
  "key10": "5ybE7ABsjRSGTRZbrasPooLhrEDymtPi3QQ1jE16EP7r3yz7Bk6KzY3KPHnHRQbcxCMCEKtUpKKAgZiDmeTCksJe",
  "key11": "4XoPJ5qKxXwrdW2rdL3NewREHHnRfg468zszyv1rRxafkATE1b71qcsjHaM9g5pNSQptFyrfYPBsEHTgiYaiBKYR",
  "key12": "4BeKuP7V3L2mEc9sFTh7Pinq6WZ7ATXXuUEfH9Wm7ipXhMDPWL91z5324oYq69EsUtWTjaagNARToD7kyYYGH7PB",
  "key13": "634GTJHKk7c1C2DNc7p4oPuKQLdDM6FT6qgwnEUunzhgdWEnHeU3kffAyu1KEcTeNZxcFZr6ywKHBWQrho8TRgeZ",
  "key14": "uHMkoCfTXQ7E9528xbb4dCzb77Mmcz4PnGtbtdnks9vbgSPsBV5uzxobEvMYv7Yj1DjhehpAbqgiJGJtqv8chSd",
  "key15": "5SCSUXGHg8f8WBdt3YoKRa19xLTonoNUMRY87kdjuePvSMEbzDXrbgpbyvZ9CqjkmkUuxw2hjhAjphXRpQYi9y7y",
  "key16": "hta5QRwmLtLKBJNtdHjNRf2Q6cijFM1crzCH2wXNJnCHnjZ1V2vuHKwCP8ft5mYepEjjF7ATDR6mVSPmQ8sxuf3",
  "key17": "3BntLFv3eaX2ArpF6Y4vs1kXPqkjcMHACvxE7NPzzssAASUJphEd1rTfttubQN93brQfVX4Y8JB2MUF7z2cxhZSk",
  "key18": "4frEd4PMWuAewQisqCGCG4XFWRnTVFEDHYC49ET6yLjuKX8yQdpBQpTbcfiDtDGHitepmG7diCgNRiFX8JxHugq8",
  "key19": "5ewSDehZQTK3GyxVQnsPwv2YqL3LFiYjtwpSgQffo1E9rs8bCvhE42dF2YTiKvhmZXnPkmqkPjZKWCXy2JRQK5yC",
  "key20": "3kpDNHbnTaRGshHxWuDppcLFunMHExkbxRSVxgSJVLYMENwHAkpmGBf7QkB3HeLBy9akX1RYSoUgXxM8dxg7U6wA",
  "key21": "59ep5tpQp95jFDFVkp19nmMsZDsQ6Ris9TapE4sdmrRSn9nJ7X1juT7utTsV5v1tzYCrHCK6xZMFpM2M3z4mbv1X",
  "key22": "enxUR6VRuaCVcB9quGtGYb45s416QwiEtzYxaDGa3fumGwT9AHoq2bKyRboecS9UvzQUFzppWpKAQvbGmkDhjWM",
  "key23": "2Xddaf5Lx2Xj9vsaQPXtZCXX4GFdvJeHR7WVdwXEx25GqebouuQVDfqHQBYMogYnzwKCKNA4erBVsQVDqBQwc2sT",
  "key24": "63odsECNCUnntG8gVrwYHB5hTpX1ZBkCxyz9JAXFsezN1nqryf9N4TaCKdEAFoJK5Y8UjFJrcSPSZfwxWVPnVkWC",
  "key25": "489CxvF4EPk2TwNpGgke35NhG1akCQcDVDsTjpdbNEV24FAjdnBYhYbZs9gtNs2eHKJxwZATnYHQzL63RSPaJ4rU",
  "key26": "5jiJ2yZKNZQNCBba6Y5BZCYDJ7Aqf6qSnp8KHgHbKrzHk1PxsqCQpyTynJXy6H5i85XTiBpnVNmZZ9deZ5Kv91ju",
  "key27": "as3hyQDxdwvXeDQXKLSMpmSr5pgkUYWWEXsfnvwUdpw7FfusfqTK1RwYhWQW4xYgYfT7RgX6tTQy6WFNZaGHpi3",
  "key28": "4drj2bfyWvdNtd3rCQ63HqNdi6x9Zvm7sRowzCZ7eZ8rNUqWD7p9neHEYsBBuzvmooFPFU5Vc3VNAtXCYX11a3qY",
  "key29": "HZbB8Efu7W2rmmsTKVdff6Lu3KMp9L1jKw41kjaRMvBssqAfjPAy17Ktvdyv5FS36VEqqofFGJTZNcQBfKUhkiF",
  "key30": "3NSauf6VrRtMbynRdvSAVf5YedLyaMdqZ4kXvP92GTQreeKgqfyGNQwMAiHsrCJxyHsABDSLRVHGZB3KzGb8N4pj",
  "key31": "5tceh4yZnBNCHCK5S1FNjwzFfTUo2wSktduBmRst7974pRgX7yqfLN54wJgsiBSrF9ehLv938EkN5t9kncbfmpZR",
  "key32": "2iETKLCYm2MTGqKYrebRYUGt7N5d2A2zbY3PmbwbEdxZWDKWZDqsyC8n44xmMZSUr7DqPEDgk79KWjuf2uyiwjVu",
  "key33": "5FxHzHg1JhEnye6AVjK2tCmYjCCe3prwjxDjXSDWqs2eH1c94H98BxaC9cvyML29orpcTdduKvTGub4iLWbPaCYh",
  "key34": "4hbvcAcWo4ape2X8cee7XdYQPZD5U5GpUq2drBS6ofTWdT3ZD7GbZpoD8QxhuF81C8ExCKAMEpEa4bh8BPuZqPic",
  "key35": "5BmjDn4jhznze18BNzKDGmHPYBVNTmohUW7bFt8sPvPQ5JgGmXDcfcv6QEhR9TYqky9d7r6jymjy1MariHqPoZmL",
  "key36": "4ApNjsYThaugM4YnEgmMg7GTh52GnzT2gS6EWFUEfp39GtxvAomns7fCZFo3P9jfikczzCbVaaAvWSxirAok3e3Y",
  "key37": "5uZ6XXFu5D2KvPNEDVQtUNWSx2xR68xV74qVo6XmtnAEndoL3dsm4LfdCPswdHZhoYz8EcVP1imrcCxx1ygkVNP2",
  "key38": "4xzumcZLmkUVeS8J48rRBsD6DVFwvCAqN8yZD1qVVbMzhcg47CwmFzPbQ2wqo8MdvT9CGeQxruTC9TVKbtpyy68y",
  "key39": "54MfysT4GRJskQCedZr6x3NckJQHxAeGZULYGt33CU8QnZ7SfGVydYANCA5A2NsC6BbZgAFGMna3NE7YbXp6n37F",
  "key40": "5dwVWRu9BY51tbqAGxzPeYPzkfGQ2CLWPgpyZwPfu5LDWw1xhbQdU1yyFP1Y1ADLuV74L72JVw4wosTf97TQuhxy",
  "key41": "eUr7Me639JNiE14hrb4KezvMFEe1U2a2GMQSw4CDaXLDvgpHuhiDSESz5Zz65QFA2L6UToipWNUghYZ5bfTbUuu",
  "key42": "5pGFAEfh9wtLYoCjg2XmjpBXXZhncYsXty1fA8HGUzu1Ujj7qsXMJ3KfUhTdSkgFyXxNPk8YuVfNste6x6fG9KfT"
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
