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
    "42pJPbxWt3GDZYxUZE5nrnQVEfop8CPrG362g5d8TC5THEHevXwoiVUnsMm6qPYsJjfsBnbKz3NrFgxGuxN4bDRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SvN6yUAuS3LYYcsG2KUPEzUUnrHqZhQr9w1jMGvQrfqHH7qWFw9CtpYXHa7TazuJniCLw5qtpjs4mNbR1xBHRRZ",
  "key1": "51P9UDKB8MXCN6HSQbrc6g3DAsZG13cuhyJ6jmBDTmQNPDDt7kZAE3tB7HJxyqyVVJ8GYXHfgnEAZQ34vm7crCbr",
  "key2": "4YhmHzT6n6P36XuSfqQPxQwkMNCca6x7t4dMWHFqQ9E3HeUe9y9xjmoFtX4ecKNLAQu2koyTkTKnCRnoASPAp44T",
  "key3": "4QhR9Pvx4jABdNd1F6s54dp5JLKrpqTT77SpLyd5CbBQpQcbws76rWbMYsavwWS7zb2vrvbUj7NghrWsRT1Tbseb",
  "key4": "2eSEdpRysbxPZ47H9a1WCqTSXphQ9iJVWjZmMtoTgJA3XPHWMjcG7UyeZLsTC32Ze6xxYVD8JxQmmzwGqSz5XLG",
  "key5": "5hhCLLxTYYXeZHeZG38CqVzCKxspEHNsbMb3XhxBv1cmbfsg8Q3xhXhRnjqukY7CkFEkQ6HzLjxhQ2YGEv9nueLE",
  "key6": "7dk4UknURuZPbvBSzoa415a8HAR6XvGnU7FKqXULVAmzCfUpbYKj9A4ZbFGPoPNXLuc27L25ya7j6quT7nHBShb",
  "key7": "4PLTFNVBf74aDEHC5dMzcdGNVbpLHWUPXNmHvqAGGFcS8WXajv4L5WsTGRasteq1is6DdGF4DyK9XvuqdFFrqYXh",
  "key8": "PLGDUEAempk9q2fHQcVDNWNE1ya6uXFZfiwkcSv13XVeoivWACcQMmAbJy53SysBqUwMK6FzinSvevFvXFR8xvp",
  "key9": "4dhXBzVeyAUaiRniMBgSSuEi5hCEsGZ1w3GYCBzpuKfhavJW1iJ263gfEPX181aceAyncJJmCDVcHdbuZcZ2dXH",
  "key10": "4YvBkCGFPiekQXQYhdtwJKaxms4nwWye8aRN2ssDukup6wLYNXdP22kViCdNyHb2oGivMj2LT2kppFVU4UQ9kaqt",
  "key11": "3WUo2BkM2P9NiXXGCinJi1Gh7rAz2ydoyiL1ZNhG3jSCUqDgUzdWXTLpFLUqgo23VscCGyGGpQqKytFnkA4dK8aj",
  "key12": "4syhFPrBZcvBwzNnJ8aPQtVUzRtD3MAJnj62wzDVbe4xvytZ5eAameTqnL2MwrVyUmPv5QQ8kmKhbhKjxcVWnbVc",
  "key13": "DcA43NmSXPHsxpDPtJzd4AM5cjWBDcscFizEJHmToSBfnWuNrqxzLoucA51qWvgPhSH6MUGKnRo6AKeaQoCDDJh",
  "key14": "2iPpSDt9sPodaEqgozoXxtUHt6A3EHPr3XtaFikJvsE11yydVdVBD1FgD1eT8CuHyfhPWuzUfXR6oGrhbJsH8ano",
  "key15": "4Q8WqhtEokNgYYPeYPJeaEpf4viwyiyacKWQuTuixXqWdiSYHzo6mCYz48yrPNpLJKfiZfehDzf8CZ6kyL5N2MBK",
  "key16": "3WFUDikJVkfyCb8qkdfsjSG4wWSPHhRmXQPwVJ1u1K5RoLbWR3Z55Xnw8EXY4WXd7Az5tk8NnejsuxwXnN6Q7hYQ",
  "key17": "fyACd1cHJHP9ijV1JgvC4H7MKst6X7KZFM7J2wQcyWkPrdTSigwZZcMJ19SxdSNUHKpRTiQsMfC7PAZjqa8pKyu",
  "key18": "3vGwE8CgmkaLX6hjuTjy5fB8vxRMx947D7nfpywusydmQzbhUEnFNL4k3Kq2nUA25MSn4JiAa4gLfX7jK3dWYoau",
  "key19": "4hwPjwMULBVHGLFYfftXdfDPstDAMGCW3KrdQcBw1QAXh8iXxmjB2mU1HAym9THCnsqUUQSxeiL98dtBDAjB4q8s",
  "key20": "2BYf7Vi53xXyrezDpivWLHS4JE8UW5Uwu8pg1YPsLoYU3HmRUAfQLRAmZtk6UzmwTHvbfwXsnW84qHitvnBATSYf",
  "key21": "2ChzFN1cBCbpRCXcKRVTQ1CinA8tUbPED3qUy8C38uYp8pf59MYwnfTSVAVodHN37RYJuGk2opxMBofvarEtUCW6",
  "key22": "2SXX9MMbezV533mxSARBBKe6b3diZaoYRFAjoousG4GfxFgTVfjt13naGhUDSDqq6cf9Jcu5Gk4mgfAPiSaBdzP2",
  "key23": "428YjZTyHc6PXem9BviUfG5kNLrjKAYiq2DiLjgxsoijPRtXQRS6XbQW5mRGpwXfgjiLN8VhKTH8YR6rdyMe47zV",
  "key24": "L4xtWeHmAKBVQAYdWk5BWiFJ4Pasx1WoeEzqriwAQ8puH53ivNa9h4tevZGi2DSe1eodxV7aihswn9BU7LewwTx",
  "key25": "37qnBVSYPoNwTCicxJAS9sDUNtSRu5M4UYCkrK3xztX34TRzhgfm6tqUXcFbvsWGLgSEQB3wgzGyVYENHHDPCTgX",
  "key26": "vGgC8wh3Dv4DViZqimCRLd3JKKpTr6EPwds2CqtCvnKQaE2Khtoi7DTkLhuEK5yoCEb8i5BmHrZz6oXXA5RCgxm",
  "key27": "2wpD5drumG8vHPcAZBEd7cr1MWxi4JToNKDBNn1P1i52GA5xxFQCx9836aSiPvH2Lwb8BpHwqyMmdwEcd55MxnQq",
  "key28": "2ckZmZ2kVkmmUm6wwqaKNaV6wiSnpVXNbrFUQhDpVXPoyp6XLSHGqBpFQkzAMMo31JkoXWnqDySiWwLGEskyXzC8",
  "key29": "5buAgWkc3QbMTBJ4daEiWjnLB2N3mNfsCG54cnRjwPHp7GbhGdYqGFb3kkMMpmHUidzEEdhtkMTYLmpu77hGNtkn",
  "key30": "49GuS2ppZ4VCWM9aKGSi9i6A9aG8jPff8ivsoMvVDLJi8sJzkYMm546osdybFM7WRgT5fNSHWDJhp8L9ESgKj3Ji",
  "key31": "5Vq3dAzdfgJZLpbt1b9JnwvXLaqMuDdpfTgEzjf5CgYX7oGmkr97TEjpoyNQN1iwgwAACuZ3KWgahnvkchhiQNh2",
  "key32": "2WpCFd35tJmy7GFcDj5ubdQoMn84XkvgkKkFoiwYsAzCGNtwNe4bboSUTBLf1Pqrut9nAWzSJCo74nVdwo7HyGGW",
  "key33": "27dz7nVn9GDMWjy4WEFcYyH98cX5U9nVdgke76wJmAvnXo2dNGdU8fwaJYVquSxX4UTt4gE33D1hJ4NjGu3NLqNw",
  "key34": "4y26W9tBq5d1SNx4t8xfw8Y6TxzDYY3uoekcrf9B7jdBWWo9uFriUFCbsXG594mhEEutHALNBpufeRwLb7Z9P9hG",
  "key35": "5njEw7mGxyCHjBgM5zqkmGL3qaneJLNeQcAyLB5RiaM1kZBssFBs13pEN1PKPnHE9mHufvEQFB3BTHvKT4ug94oK",
  "key36": "5SKi4Ge53HTXhrsv4JHhCRKrydpBUu3XjckoYxGgUQucfb6u7ndRt9sCoL1QFGvfNLWG5DWAdCHhetSrF9PAHvHm"
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
