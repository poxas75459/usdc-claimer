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
    "548CR7P4VjU4Jy7sWvyjqNmydg6QCHfEzVmX4H6rTypnUN4ZEehwEsi2N2wSGZuTMDWMuzWiJVeSraBRHhdzXpFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LDbxzeCaywz9FDj85XXJAvXF8TraukmGhkNy1pwwCLFtJ6ekuAjDt9H4FiW5MuCEiWPXscRJQDQZgUEkPX8gEBy",
  "key1": "kBt5nGMGoFs31DLAneTwC9M82BWGVYA6hd92PLfvCtv5henFPsgLiNKFQhu1S3GxZCWkCwwfGNaxftKjJ4jHJDh",
  "key2": "5W9Daxs1h45ivaatUF38vvPX8AM5n6e9QQjPgV1N95UiAPzbba6F1KQR3DPXeQ5eSGqxSqY6EmDwDoq6d8vdHdJW",
  "key3": "5SQXwhGQUgqAgpwEqwAX2uhsRqmUipYZEL4o5XdoM15XNdojEbR8PYcmo98pWrpTs3urhwvq6cCjgNBZm9XLqBus",
  "key4": "ZBSpDwCjeJ3mCgBGax44Yzb2Xb65FYd4sLycfk4AUHN4KCWjQcds6SxXHS3EGUxw8Pyrsj4kbybTJsC85zKhRYr",
  "key5": "KKsovxFo11LuKGopBSvHzNK5RL5FgSmdP5UmHi2q4zcGJxEBkxi8kSV2fenXr2yNEPTwogrdUUrwjQqQWrMPvTn",
  "key6": "2HNYt9WPr9zwtEWrHgdEqSvHug3ZLxPrQfWCE3EKZfBf46xi1on3BCbCSQ8tpMhtrbFCZJw535Ezf5f9YpwwSGCt",
  "key7": "M4s86X3GNhjngWSNWP3kuLRDsEmf6vEHH2DQVjuUuciAbfB1p8cjL8kUfhLWzNvaXTYraePsD3uLUSkBNkHwe5c",
  "key8": "5VrPVfsy9JihA8EwJ38ot63n9YR4uXbZN4jBTpCQYcmGDpYBu6ckZNQAsEw2MidjyB1sy35u89YrcBkMrrj2LfJm",
  "key9": "3eR4wf2t7fX9fosEArKA5qDeuiHAi7opmTHh7t63AWESnNuCH4JnPLrqm2UtraitDQ4yDBjrjLCRFHQrHEHwUMEL",
  "key10": "3n4r6rymSpPraT4yViuoU97f7ANSZURSxLKnMuhtYoM5o9ULC2PdS31Fa1BJn9dW9XQhNjb5rqQ5J4GmeCVX51g1",
  "key11": "GL3h7kBq1gahp8L5JpRH1mGWZWNu4KZoconbXpsw8eBN6sfi92iKiqxjfhu1kZ2F6KCZoU9FsQN1kG9DMEenZnZ",
  "key12": "i2KadgQ8HhvcURcCmsjnGnU61cifZvURKJtmxWjXeNQNEMdHA7mJdXY5HNJP6YvxauxjW4w2yZVz7HffCBkxW3i",
  "key13": "hnhyhTueRJm1ahkdMJWfqba6TUXcMUQCXG5rJHHQXtRFVghQaMNXZ1wgDmTyLBtJnLvj97y6MbWoLVo9i9ZDkCT",
  "key14": "kNsYLVRZsHpjxJhhVqqudUBASTFoqtNwBjGka9Xk7yD1nzDEeGetpg5vrLQhZF9tHUj5nnQjq6m8UodbpSJnkCp",
  "key15": "5RtWLxuBmGuibhFTuZYQYKdrKj2Dh7V4HL5WDSGSz3bV4RAzTqsrhxD71BjL8W8TSst4S1Lfsd9qbRAC3HzVA6aL",
  "key16": "FrqobWGcciM55v8W8wNWwJaxwm8TTrdXTeU85CjgCjeaEHMmC4mCuPNxnJDQfYbM88etKha9Tpa88B41upeb6hH",
  "key17": "edWCpREnC1nx1AxjibLpPc6kgwaGuUNtb6MpU9EfpAToF2YGCY82ZBYSxWiRGgurPsi8VfJMdTftfXzE4ZLZuzX",
  "key18": "FRJtawTqhZXNRFTaGF8hATXYLnrg9728EfV5JqpXhGQKmJY98M4SKYgNdWYBts1YbbAd1osTYp7mGF2P8v34C3H",
  "key19": "4rQvNfi2mYg1qn98qzbLhua9Hmwh3TomfpJ2UJjF5rExJnM5B9Tf7U6WmJvfBdcbqHcTaUxAe4hXGfgiVNHU7s9i",
  "key20": "3xT4wvFPjpsCW8pYJtej3ZPCoRPadFJ8MBa8jSd2WjXT24JKw6zh5daHpc43jGRo8zbJMXtdBbjtA3x9RSaMeH2G",
  "key21": "4cbpbn3aAepo5N6mNGcKKW2QufTpUxnawCQDfTEhFWCBgbV5jenwKhXjFortCzrhbaArAtGE97mzAL1ApXrzJbve",
  "key22": "4v5AWA7oCWbEpBnqJXYj4mCMf742nEqAfiwyr9wmzLehkiLHRb1YRL9pSQ3fDmfhkUAYo4qJ5CSNipsFxPLAfHXk",
  "key23": "65cGPxEVfjPvdpj4j6mTXLQFju2AaxwBq3c11WxWtkN1aidd1fr3KCv67suogLso6KodUuDH3ej4gTNKBK1qLmhG",
  "key24": "25SXoQ6dguGygJy2ezRLdqDufFmiEYsXvCAahRkbRXg4qGkznNdtMtL18tApMU37cj2PbnXQZNxUhFUbsiNE5Kzm",
  "key25": "5pWA1GWz1n6x1t1MK1eHimy1zm4rybWdcpgGcqDftxE3BcQBhi8d9DA27UFVeFVcps3awBWnx55WSeumXWahhU2Q",
  "key26": "4ucqfWTRvcHhwKTu67y31ES6vxBjtBLdKRhrbzRdJpHnRk8DqKRtCMgphnmKbMZpUp8Qja1BNkaoZ14x9dHngZee",
  "key27": "2iB79Hx6j2r4pwu6yPvyvKMQzYZk1dZRR26QoRdhgMEcw2WmTfgtXWvUpNXLiE4CnBpufnxddPWFaZBUpSDA38j9",
  "key28": "4YpBKrsrV4MGEQzGpqft6HPsEFgiYLyLVppKBKGNpjQbmKn61WgiQBeo27zuuBmggMPJUr1xcFQwF8GFNsHKWTog",
  "key29": "2KwZy2Erf4LMqaxvsF8SQ6ABZ6Xv3EgMsBSpRzWZSy9grGrPNJXipdyR61tRxLtKUBXEdAWB5TPuUGXBfFqBEcob",
  "key30": "5Gbby8VGNeLvy1JyUbZp7pZF2AnqHQx63L91vto62ojaRoE4HfST8mRRtrnvyACoVpKsqAG4Eku2vFV1p1mMTEcp",
  "key31": "21K5ML9taA2CXW3QvqQiZ3kygqeq9YcqsbL6LnSBRqBL3gEk8Fk14upaYYfG1RSbdtutaTxmy828QWtXQG7GgZU3",
  "key32": "2fZvo1tGudW5PrhrMoKTiDm7o5enAZMSshvSCiu88age6iYFTndkuqnsE6GfvgwUN3muQ1mJfRYRfuWfwErLfjgF"
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
