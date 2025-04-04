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
    "4ZMnaqBmEhzwQssFN35AjK7rvwjAWMGHtQz2Xbn3Wd2dJ4aWWHGAJ4VmjuNTmAmxpEr4vxR3QTuebiGHoAGj49Rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54wkEbuJ94bXyd3kjMg5W9X5VQDeJssC7Nqcfq8m4CZstzfZ83fNcA8dUTs2RJBk43f93xiTaErdnbvLN4Rfjs94",
  "key1": "uE77evgLUQKqMNeMLQ5xWySAUNLD11QFAStnbdKN3RDsED8RPz1uRkvMPAWSdE5Ri9ZWb9hSN8TQ7dGdnexsBzb",
  "key2": "3YJNrPXEBzQo97oRr5Zmk8SNEZQ7RqBLGGrFQ1aB5K5LA2oqVwsjeCiN2VYMqkHs2DaKtaCpcu6Qpves6vtoVMCE",
  "key3": "2ZiPHhXp8xWSFaHwVN5FEo66TqUZg3SPh9ejiFQTH6ACSfjvWP8hDQZnJay31TNjE8BMbiSR4AtZhbKnS3zwWUb",
  "key4": "5HeU6RKcPQ8MQqxhMLd9dypTum3QaGYsHPB5m5aTP2piSQ5UaiWFbko7oz57LbdWXMqa8WnYwYxLrGLQ7AfS3Jzy",
  "key5": "4sNSouefckrJZJsatjqn9s3dAvZkvWt16dSdKnDsVCYhnb7PJJoWeQ6gdJXbJuoDVgL6zWkHvj4NC3oC4cdyYgU9",
  "key6": "5ALwgKphuTufTP3iUmPcV96gg58SdhLBKun6obdYoryBjsYFcsj8mLa2W5PETR8enM3XyAeF4bPgTi38Xx9eRE8u",
  "key7": "4UvvbpGV3uok9xy415AdncnqgkAVaumqsZsxvnJTStWh8mv1cPDYGxMT8CZnuT2zPR5fK6AyNSX51Pu4JjXfKFJy",
  "key8": "66hV7uP32GrcRUGevKLLG3NYQFRAwtBfKpA9BUatwPLrtShu4FGqMfFqFwdncVzjZMCaqhXYYziCV3L7S6Df9B6F",
  "key9": "4s4yvjz5Qa2HBfreRis6aWS4Kmb4FLd7LjSoqLDbLp2NnDM6YJFxbw82C32HKRbdj18wjhTdp6FjgpSGkqn3WYpr",
  "key10": "3heSMNtDoNJNYc885X52cU2oGHSLUfkYBZXjFYk5dzxRaKciV3WYKa4STUPFLLpNHkJBtAgtuTATsbXd6Jmoa5qE",
  "key11": "3QDiaqcNSkmULegitdM274WMiz1uhQoLZnpdsJgoYHL2kNfktAA1uVikrCB2DWDBx8E1U2FNCb9iViQaBk9eWdSL",
  "key12": "611xPiYcCBKtWDdCgdyRKcMiXgRrSPLd34pWxXPjha528Sjk3TjmUEYwMF9x1qaTpfYtiwvWC78bjGzvWJd7oF2Q",
  "key13": "3dXEYt8hn7gqsvgu8LVZQr3zGvckaYEHzB3AUKtY8TvQnSaa6nTt5zT8eiH9SjvPkNnhCg3Lxt1CqcvdRjR94V3c",
  "key14": "4YUR5yQiUUdMShagXV29QqvVWYMaBvwLB5Gdb3wV1wTED8GM8Tt5vQvjLTWUr1MqnMA1Q2MZYkQSu68hgaxbzNAq",
  "key15": "3RCswoH2avf3McwWJS1WaoLyZ3G9UcVHZFCV4QEE1iCNf9LceVcRWP8y6a4hYWYgugnmjycwVGfGUYPbVAnoKN7X",
  "key16": "3VWmdQXxBampy769goDZf61y4v9idMbA4ASzjAnG6Wkad4PmgWLsMdX7BodhxpMpNQEnjdUeS2ef5Gzm3x5p6uy6",
  "key17": "31JrBUrfGCyXEVERanJxXRfBV1H1Q8XX9o29n7FRjbu9DwJ6KUnNbrw7hyktrW9aMy7ozFjZSVQZgL1FBWR35zWr",
  "key18": "4prB4gHwremoeh1YH6HbxzXu3beEzhj5DcnBpK1Dfh2KzijEJYtqsqaKP82NrvDSahxAyDNGLKd7873Z2TgqpAY8",
  "key19": "4yyQKArFqW2oHVckpu8e9pBHJrXUGZSMg1obc7zUrc8Gx3dKEPsJNL8NWAcrv649DvtYGkt8pizMgm5qF3owLatC",
  "key20": "NgZnRcUw8k6WeGkhkYy2qFp8Rso4BBxcBwJmTeSCqE4DED1i2pttdStpXpemFKZzqJLdYz1En7Kmf3ceHobg6ES",
  "key21": "fdUouKSjY3RiMU2BqQVknGhTVPTVagga11E65P5G6JLgW6Ht5DHGaL2So4KpkN9hQQJy45rkQxmrnFzLtyf35Uv",
  "key22": "xZ7AspETARdcyZCRr2pUsngRGhgvoDvVjU1dz14h1osruWoHiijhmXzZQ5ouNHpNtuQuKLsxZANrZWPZpcvzCx3",
  "key23": "3dSypCQoFxvPk94ZG4LziyFrU4vQjQmfht4Z8VC4xzqePzF6Rf6r5xunfnSNrqHK8PP6Didy86QZccd1hjbWg8C9",
  "key24": "59gjp5MAd1dYgCG4XCwMjA9N93nyaZG4kHgzPLjHhZz5ZkLit5MdUbtt5uWFzr8xtavWKVijh6C89QdD8noqfmJL",
  "key25": "5R8qEP39RYS6rTbxsBa9jEsiGMwt3iYFV8onsMo8LegSwwNCGCXPNGTrrUubgPvBCoaTw15Hukthu5T7hKzPaBMP",
  "key26": "26YRp9qQ9gGtHhPEDyWG6tH61XrjWbzL8UM3mq8LCb5SAMneA3sEanRLsYsMAatJRLr32ko5N67aCBUqXQmxyRds",
  "key27": "2LdU1fhq6zzLs3QEEknpfZZZG76zQBQRsLFm8hKLckjmVH8yX8D4dB87ssERsNN6cfv1d6ZWsYp7dVFgivaBVYRv",
  "key28": "5o9jvss1kKg557bUWiseVxBaJwZEGSW9TvrP2SCkMjfr7jjr7sCwHSEE8HmULXXEPvEppGFfntpcDJAaef7DuN77",
  "key29": "5WrmmGkpkq9YdvcXx49HxxhtkZVkfLXxQr8zonX9Ldkoyf7X4B5dZ7pB9HfS72V8rE7HAGsimwdq4zRZyfQmNYCq",
  "key30": "3RnPWJrp615k2yeFF3NSsvXbrMvvER2DdMQ3BkBrmVTzf6eJriznVxA1iDq6v1vbUUy8KqSK3Yg8cii74ZDU5WB2",
  "key31": "4u8yBAmHjoZih9g6mcSJ4QwBry6xfd44nbrsmBzASWev8PFWrEjXajwm5eUinVpcu3zn5YWZXSdNDUm8oN2pHaGr",
  "key32": "3dKHN2JtZrvtynAHJjMHT15FuQhSz1zfA8ccnjVgxmtcuR3dFdesPyDs7LHB6EaSjuvvX1WFLNFrJjbTe6ejJMDw",
  "key33": "B8n5nN2rJ1XEbP6V4MRvgkKw2k7DazVRKrUbB4rHRxcKw1TFybtwiMrLeaBoM1oU9ttytNPA1WHtRZdReF1H1Xi",
  "key34": "fncNEQqvRShMn6uFbsKU1Yy98RGmzvTMSA8KM85Bf9LftNVpCtJQJTE3euGw8kumZvpZ6safCdiGyPtJXkEPXJB",
  "key35": "4s2GbRt7CyTMQJCed2mmVF1nQFmp4m9KjUnPCrw8x3jQBvJKBTWsgWu47wnEDxkMUiAwCFKvD6HJv9HfPbN6NMkr",
  "key36": "4VeBw1QC6Uk2eH12vEPvHjJqAsobtKLYwCrQdhkxYnGWEAYz2fniZP5258aXQbNH1eLkrUJ8oxks7R7eYbNPbmeV",
  "key37": "3a4qiqL2eNhkhsF3nGuUButjVWAD5oZwizauyYHyGJs8BuZoWnbviZkJ4T9F9jLUwqKvaQU1uQ9THVS55KebwD2c",
  "key38": "4AY3CSSCJtUULdHSuJ2nJsEA4VjbSDW76bTJovhE5N6fn4HoGvWuqQWtDKd2JFFwB7TaqtjT3ezhEHSah4pmbmsS",
  "key39": "53ozzRZQwGnxsnkVC9m2eonNSyybk5zGF4nnJRMTDr3RFPum61xzGnVYSzBumybdnLkHnYAvpuZbFv2bhmrnxW5p",
  "key40": "41HpJH8RccQDrkEdtnx1rkYg5d5ujGDcLMDdFZfrGoQsD9wWtWFNje41rrgWmUPANN4v8TXBh5f734YvJ2j1R4mS",
  "key41": "4neSTxQ42fSdkdGzC8wd2vQMstv6yVpYiUj8pjFqxN4JRkrVCKSktuU3wu26UmHRNLaxB5PTarjeS1YZr8iXrGuq",
  "key42": "3JTourE7A6oEC2S88kfizcKtfiwAmnoYvC4VwSKCPQwst27mxyVDHoZK8Dr8f6Zo2X9UzA1YTeNrrJMyHw59fEVi"
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
