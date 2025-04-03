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
    "2zPeGeoaQ9mgPZZzHCJTru9GfXj3BrZmrsbB3VasFTo5nuasg6CYX2uswXJSfqQ45vtcZ5yF4fLXzprLgySrvprH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ze6xTdVpN5BbbXtNYJcbFS1EpRzwkT9MXYuZuEdw84DPJri4TAyWx6J9mT4iTkAd8zD88TCgfs1api42ZCG2d1N",
  "key1": "2zA6xx2RWQociAaX9Zqqh9DLVtpTbypG3686oUDfcwExddi4SsHdHHweoCzzTBUcxc64MdAqA41U8McW6TcvG2zo",
  "key2": "3GapUSEe3USmPX8MtHmmcwiFuvCqPxGXLPmm3UtCwPtgBed6woTmABL8rZtLhjt83FMDGg9VMGyE5EbcdLVLQxnP",
  "key3": "3xaZDQx53zDU1eHEGV6xw29x499DJCtdYBcLvuKqL2jh1V58HA4h15pgPYhdirTWiaoMLhrGQzoc2XwSYGJyAypw",
  "key4": "2txmkuxxJ7dU5KXRQUjRRKLqhN6KdKAETWGL9napCDXege4gcmW9eJdtRpQtG6ZzrbTpddd2y2tNWSvP5sWdk2dn",
  "key5": "3rGB2r34zc6T2FGCBUCNTMRW52W1bqJRNAYMmn4hJsnGvBHKGjr1xrkoZyz87C4hjnyyyYiMMrRa3g1jVuUdEXXj",
  "key6": "5qbrWak8cJrsSmwUx2VP8WL92QewULq5YDYtTUeBAQ27ovAE558UvvpzyQHoBo1oNAQMm5ffg5jqatD2sddGCcE5",
  "key7": "3vg34r93U8kmcszrukYp6ZL8mjoN5h8DmvrQQRKVKrRisu5fz3xGCnkZDLAgPPLDcA8EKDJmAKrxkQqfnzqzM7Gx",
  "key8": "5XeVuhYN8pJ271LzGKYL2S1pE4tyxS21ZvufjtykB5XqKyvCS19MB5QwaNWcLqN8Rza3fxmq21u29mDM4FSDURGZ",
  "key9": "2mT1US45YMzNMTRwm1zVWH5wCy3hFkP2Zs26kcr51zhg8BwipN9zkPFqrZGuvC5pcWeUKFvadMfaavaFyNDqAZDR",
  "key10": "4EoLcqkNzm5W5ZqpBhK53mQiw2iwNGXMxuj4VTV8qPvXcKTJ2maonSNc48wH1uWUp2bWeg5vr6npRtAEyKs3Rr4b",
  "key11": "3C1V4xisWahD2cRZucEX4ikivPEXU6RT46WpE1NcjSGXVCcXVWmUnd1y7EEr2xHpp5kSqSnRTYoN3Vq255FML2c5",
  "key12": "3avUDbfkSz7fqS7NhFaPWW89y8wSN6e5Y81w4N8AXkHfdfzSjJUecVVqzyArKyRPgPyMZfKkJjXTcJQsUpe9q8yx",
  "key13": "5mQASNCuu2z6iUc81D8tipyMm3ZMwkCcvjkmmRMhss9DQ8K5YFV1Lru1sEXsbbfPHinJ4ZTuCNr1HrdwXzq56mxf",
  "key14": "2629eEc9rUzH3AuM7gfTg1oSbPtvpMpPb4c5LJX4tbocHfhLDzudo8yVX6VUW2j3ZywukpxbeTjsh1SxfbTvF4vN",
  "key15": "5EK1NVCVnVZ7bCa3k3twrRBo2AR4VBe3kVrKnx1epoCm8HaHfwjxDR8cHzMmEvkx8Vd1tsSMXvFdcFE7PinJjfKk",
  "key16": "RwTvTCP3nGgQVfgdLZ8b8MJbfQgmv97g1NA6UUZ3E3Ps9sQ4DpM3WuZV4q2hhN3dNdKeeQs6XRgwGMRusn9FU3Q",
  "key17": "3pvTEVU6KLxfAc2nq94TSaSoHrCWbpqvqsSHUnxXJQh3sxfSTZGQGYyPGCLqm9qAGKiwyNk374Y3VcMfx1b2NQbS",
  "key18": "5pJ5CxgwiqdivuJQWrp38E4fGsbBbBHjxjFFF4ZtRdnC5HQP5Z5SJeYVmgMNvC8x8MQouUNsRY4CzcQw8oz1CoNx",
  "key19": "3zpuzZ21Y4Fu9GSxLTtWPjYAN1oxB3PrCmawRbBoJpMpCgzeZYVvAMzpRzxpkK2e5JcgE4gF9BHcLXBTU2EpYVVW",
  "key20": "3NqVeH8LyPvQQduhcqjH5AgeoYzaxWA8fX39dg5VSRCeS1V7vTTj3e3YdnHh4i8NjYgFWuPYyHSbA3whFyF5s15r",
  "key21": "4NjJLsdos37BaNxNhfUr4PNjWuS68Grp6DKPBcruPg7NWsshFEiKkMFMbasp6FUSgBYqQAsYtgSuiGNy889h2yFJ",
  "key22": "61AjbozztjcDYDqVNSYN9tszrTeNo1C8FzMz9iFddyfuo7j2q1oohr79SQXPYsKnzgvascqosichK923PGkeY5r7",
  "key23": "3eCGmwQQg479hLZmRPM3FCRF4xeoXWmqartPMjdxgDQNKfKWmpG8nsTqp5baeD2gPGzynhkji5UGh6S4MPefwoCs",
  "key24": "4aDeTCzxmAHAAanePo7aSq41BDbLn4ef4oDSqP2VBx3V28bYgAKaU6anyrzM5ssbuT4CpZQipYdYHgnzGWfeMDDy",
  "key25": "27YiMz7unWBr11k96uXdAGetKNCpTx2xs5MA5vEjfeZqJvD2n2LzPfLAGJSuk6ivJmiE2gHfLdh8AmYEiW1xPdcF",
  "key26": "YvyprndYe1joGztta6JhMzZarkkXdBELqq1k8GCXYSuCMioDHc9Lyi1DyD5TwhswnGo1wayfEiBjNfmYvoLopDH",
  "key27": "4V4d72x9r81aL6GSAnWYWzqgvwgiP936hfSugJhXS9xSr3xnode417b9MgpPr9bo261EByAFaM6brKb92dQw3UUy",
  "key28": "2a1FdgDZ3coCAeCtQvjiNvr1PoqnS2dLUDkXxP27reFAvL3AyFVnZ4JsYLk7RasT75rHRrkZMLs6fCp4ayRwu8f2",
  "key29": "52PwRHAvKV5zk5AxvTEx8AXf9XH2tgHfK8UhUDCTF3JNpyQaW9xb8Zu8f7J4RKGaJ8mvWAqWddDrT8WRs7k1aEDt",
  "key30": "3ckDyqPwphWWcRyYPV9sYuqG9fGav18gsJMpLobC2GokdubFPfWS3e1MMTXHVJvYMRAgkQdrypiaMJr2sqpA7XJF",
  "key31": "5Hdm5cG1DknDXWf3jx9LaUp3VsEkJyErnCyeVSXwnF5sicdVAHNGevKS2J6h35q24gcmg7mtEB7ZuauLWVEvigyr",
  "key32": "TX6seUpts6aTidx6A6o9zAKwPSxyzduedsPWiTddBw1vdetHfjdEe6t9vGonhUwPtHcKnfcN3FUbt79U1c5oWpu",
  "key33": "3afSce4uAeUF5YAiBrpU2MNY1RfACESivEtpB8Y3A12Sc4nuKBXdQK9fZC3Eigid6sWr6ww2iNZGt3bXG4pyGEfz",
  "key34": "3EJUVRxiioVeF3XzvMFCB7MHhqg4S28sxBw8kwdvsBqvS6y4q13LqvQ6NiD7fdLLKAk9f4hmzSvVXFLaCAS4BnwJ",
  "key35": "MAYfQiT54od9KWQkWr71kbyhcEMqjPTEYA23wsAaNRDWstphaadYpVCv6Eg1MgPp4Pv8Xa6Twf9qwUydGKxZrEN",
  "key36": "2DdbY4zB3y6YAhWGhRjpARYLh6md2cDKUusSbRTbKnnJi23G1TFjoWiHic9pZLWUjxLYtx3ix14krTanWXRSgTZc"
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
