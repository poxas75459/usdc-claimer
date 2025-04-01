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
    "4LzQcF4qYT7utgvwpbkSjvTHbr3qRj3ofxJN2wD11LQCErAdRadhG21dntRQ9dgbpVXVAZEddhhRi5r4hBnnybEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uDZte5NwL5n6PTptmXY3BKXaNjKbKynW8GgKfqa5QdwEinJzh3YLyH5AxedjN3M5EnMRM3zsVQV917vbMofLupU",
  "key1": "3buZWYAcWPD9DQfYYW1HAvjPwYvDg6oVcdaja3t7cEDwZ6MJDW2S6vXBvUJuTst25wBxG7DPFrwV14aeuUGZA9jk",
  "key2": "zDwfEgzjtFkmccUPQodV2BHkVZjnKu4dkcygCZ1BdVcKRKf2dwUXvCmUoY986V5SuWJzijdnhrZzHTKyZJMFCKP",
  "key3": "W5CXG95jCMAdhxZByGxbyeaGTcbP4MJ46pmPLvnmEzoFkoAvHk9NnKT1QshrR2QwMDVvLv7hQv9Tz2FxKnyWuRm",
  "key4": "3au92SpA1qzW5vykXjPNfQMw1Lq54BxFM2WG5q54Ng7ohCHgPG1zQ5HBtfNihfojzZi3eQazE1FDCFq4yQ8z5K5f",
  "key5": "42MZ3vSbhMx8EinfCN6XqsRuX44MjyahAh5K2cqUjiyjg2sTzsCb3axhEN5R4M5ULFQaJgkutfxouncd5wwaFXeS",
  "key6": "4NevniaZ9oqhHprSVBCLVeN21p9j6Y5A1KKDGJYXzZmX1QjHFizqUYfThasA3nuisnXWBTQqTGxHrcCXRkSrW2bT",
  "key7": "oFidWt8G5jzPDgDi8JCEJxoJUh5ZSA1UBuaf5taSytrLceoyjZ259wAF4Gifo3erVjUsUFA2BTzEpXWBjcpfrkK",
  "key8": "cy1eN3gCCvUXXHvaNfhhyLYkrp9C9FA4TCL6YKwnZp4YJ2ia1YYujPSKjLpRK7TMLveUktvxXh6teNVmeja9sX8",
  "key9": "3ZzHyN6UsbTuywdor1mjKG8yKybCjdh8xH2Bofa1K34vz2zVW7BEBSFsKi9qrsheJ3MDkBougVJNxLkiu2iasp8v",
  "key10": "4S5Se8o2d4iCu7Taw1hLmW8848mVEbEz6YazDaqRgALnH4j9A2HS3vtCUhLKHKZsRQUL9HyXDTd21GcAc8DpLcjB",
  "key11": "2bjf9AFKAn7vjjRvup9PHijCHzCoAxwteTxwTMkvgppzpPjcqbNeKaa6cyfvCaDUnYnfGDrpJVAdPrwKWYvyDLmw",
  "key12": "3b3gQKcAVVUPXBmfLveGzy75GNXmn3yMJwnQDQJKqmLVL1zQqggCQWzxPzNQfTrsKnM9ettwTNpiT9sSQfoTXca6",
  "key13": "4S483Q2f7G7YFXmviAZqcx6AHBzzwDpAQjuAuKFQdptfmGxLeLYUjLqMKPhQhRNow6JVEUdYtdNqmrpbsrPWnCqT",
  "key14": "3EnEWYhWBSuXzSApDEWqTn9nZXt3EHsfjYVKkoQvuW7gxxFKSMY2TFtYiv35Ua8H9io7xyed3j272U1a28fZCwK",
  "key15": "3Dh3bT1ZrHt3kcHdVuQMDNpig18qSEuq4y4v4Uzz44VoJd2evAvd7pD5zdDjVMc9HzyZuYk3Hp1qf5GdF2sPCT6T",
  "key16": "3b1xj4JhYozDLzrkEVzirh5o8XPmh1kg3JmzbqE6BpEayC3NYpSu2EzzfdFYQ9Ej7FUQT9YVNwgzstZbWiNpEkiD",
  "key17": "4Kgvgm4hJPg99Ncan6j8yHzxptNBx2WroTLN3FgNpDvpceW8Ysi1PoRp5MsPbqLX2y7wnKvDPXtAjqjsrB3hnERr",
  "key18": "32aDn2ySRNFBhNzLCW4DsVT8i5p3JCsszEAhzXRzRQjcbyPkxw15Ka78CSUULPbM1f3k9yT93DmYPcVMnqhmEPDy",
  "key19": "3aEnoCmP7THvgxPgBTUhP1gMqsrNFv3c2wpjhTDUwP7LNZ6ryxHwfkvr7DnkRBgyXKbpqP34JaYbu6S49XZu6wai",
  "key20": "5UbQTHeKQtr8zqff6Dv8xC3rWPZYXjjLAtJ1feH8uQ8e9QbwuJErE9QKMLjEB3sjboPNqe56iFWjAHdqknVge335",
  "key21": "4TR56Hj8if1PvJheQDReEPwM8DvjfjYQu27tCzRLgqUnL5aAniLEJL4JZaAJKjXBjxrZYZFtBr7v2qab7ywXXuuk",
  "key22": "4GK12Ca45xNkMLrbDEGEFuT9KBJwWaYKP3LRTLoJuhcSLUWh6P2a7xJQXzqtwgKvz6r4UhFASvEUGLWyT7PhywqW",
  "key23": "571rrYwekkmX5tGWcGxxXpuCJC8Y7UaBHNcmPJnLNu4qDnzLuHoGf8SF3m8hnjCWtwZedX4hA543M9SEHhPJA4c5",
  "key24": "3z1QRXsifa3tX1XQwgab5aSdGXe3inVaKYXePcj2g1DaGgCJKtrpQjzyqWyvFWS6y76TNL6JAdEwbGPhPQDGyBtu",
  "key25": "4Nxs5DeQNGZyR17vnk7McTgPzhQkzwzVGZhWXgwjoEHuEppcTqpjjZASSKEK5ywuu9M77LCwwMT5RGKb3micjpdn",
  "key26": "4wRscdBFKfLyiWFKC5jHntspAx3e2kMiAYWFiXgu5RGi2kg3ScCrvrEurgZnk1xHDBNURTUpdCtxiSPDmyq2YisB",
  "key27": "5AwTfa45X2tb9eZNKRMS3TMR1XguA3eHmzEeFHB4cHFVFV3miw7S9W7APrYUmAA2vcwFPb1VcErV4ny9uBXWzVRd",
  "key28": "uhsDLsuiVhdu5Nn4JSuU1imF5KytXbLPBoqLTwH7D4d6ahkK3ZgY2VvUYRBTs12YCS3gNiasefr9vUp3qBMbe8i",
  "key29": "vnQ9wEQvDUGPCuLTwJwGrwhGnBctpH6DVA2GjUrFTqJTn487idRsHcktd3TgXoUTSNKv23sRyngPZw2icTSi1G3",
  "key30": "2fbiF4ZJVEEXawdWTzYtJyZaSsf5AYnL5G5QyRepzrjeBxg5t85QSdRoXXizTwEPqzK8pXbSYo1hZTGPGsLskh3j",
  "key31": "5wjRAYEzXmbchxMp5u7QTLbnXmrm2tUohCXaYTkCyk3sgdY8qH3WsZnoKY3vEzFH524RpSBEYpVFqDyCnmmxG8b4",
  "key32": "3B36DfoMvYUPtzoGpiEWC5s6jF8K1rLhL3Y6f4rbq1NgBejxgpzDXSXKxq82MbgTbSMofZLvQBFswZkbz9EsVs2U",
  "key33": "3dFPdu5T5WbqAxjZY739SZ2uAzdkxHjWvdGM7TCvcCevGt9vykWoyXq7xcAu1KM4HZeDqwPsvREJqMAMuoQQkqQk"
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
