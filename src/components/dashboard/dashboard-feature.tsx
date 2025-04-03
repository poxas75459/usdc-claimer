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
    "2Ttc8YM4h8Nb6uuTeFa9PBFud3DH4djVMScT2cw2DVSqW985rh1nLoHcLwsLgfxxsb6u1ZE2iBKnUx7ivUe4Ucsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ezMCjXqwNbzZatLSawJsE31iL4EcJ7EmmH6x9TPHX6zLE4tx7wWyDJ742ZWYNqz3ek4axzsft4XioUqLXn7A7XU",
  "key1": "2pXLGwcKAr3QoEKHj6HDBwGDr7nWtGrFzxvjgTJWWNXhUw3jy4H8WxF7bUoFJ81hPc9GvFjdmRuACa8RyGxZVKSJ",
  "key2": "2nBqMkCGpNg36XohA5tZkomsMmcAZp6Wbisb632Gq5wE5z8tRXBU4zjBQm499qWXaL6nohrcpFEturhSATP1gUi9",
  "key3": "5pMp8RjRdbaKXtgnMC8WqP2XcFctH7SEWvn22sJqX3jhDXoU5jtNVHwhrSByE4EPvswT5JY6vxsfpBwwR8CXMdqw",
  "key4": "5wVkXVqUzuwLM1d6R6Effb3VEyadccSkLycZRnvrcs7iQ6MKg17d4Q6A5Qkrerh5RGQYhbhiVTPosseKgRV9XcR",
  "key5": "LNpUmhEriWmu1cNXTrcZxPW6Zswrq4nb9eo7THJ67TJ4E6TDSFAJcJA6uduyAZLRSF9Cb7KU6PJYKiUZhsHa6LU",
  "key6": "2dtRk8uqA5RQiXRFTNJDHt7UzJ4m48MzFcLhtxDjPpaY4HYTMKvpvE6wHDdoA9aizDudy3TJXSaLUt9QgExoJiDS",
  "key7": "3V66db2QcVrsKRYTk9Trfc4KVt24M9XMMjkdgQKNkKb4exg9K2p5V1aeSqwHYYxVPARUZsGAwX7R3PUmA3hSbEW2",
  "key8": "xJR4aq6bydnS1ib8fxv6RqQKM58YZh7KbhXURGWtwK8B57hdNX3ApvHKmjNdLdY33UqJrcuJmiPdQXkpLBfq2Cs",
  "key9": "4dmxmxr6jcsctYkj7gEBuowt8gMQkdTm5G61GfSQBJNAgBRtbC2a6oKaBjogHzUddXgkYrcWbBsergdf7vhA6v5E",
  "key10": "4V95NWPUwVg4GQkZfArHwm748VE8Xqd4uJcR3jzpdx23umedB3maYiNSsK8Y9nNL1tWfcC9ghaW74HXUCnKmpyGU",
  "key11": "4c445YRP9mPWjSsavNKMbcDW6izNwbbhRf359xuwbHwd4xBh8vLXtKHm38XYtxyWQ4rd7kLzdFhQW6j1Cvu39Ecz",
  "key12": "H95XxHZLKvSASrRQsmzLYRjCHCfExuxnyRhXNCihDhUR7mLwzGK84sDHnXHb9V2q5HuG7zARdk1HTFhBtASspPf",
  "key13": "xsAjWXJfjsAYK31znSXutFgNFXoocKvJb7P7EK4B2R6KmH6sh4mphhnvLb4Siq7AESDtpy2F4aFUcSfrryjg9cK",
  "key14": "eMsuXUhVkcTAFuutv9YeXSfr2nZgSy4fuUvfGaHtRRxGJeHhJhNAPbiZD8BLw39Ds1DA8wZ7L8S98BTS84nZaCk",
  "key15": "CJt7sMYpmHeuLukGKnNfPNn2FZvttVt1oodFQV6LoDsg4SzV1fxuu9LN429NVRCjz5roZhiguXE3Pkr4Sr9ohZK",
  "key16": "4L1inPPasv8HL56YrVnXHpAew9MgzUAxSuSnyXqZew2zxcJHefreLqPncSucmcQZB1p3sXka25HMqDLf1eN3oqCD",
  "key17": "5xWLzujtYabcM4JGKqvBM1HCfLmR6DosWW66xitmUKaLHCncieqiP1rAKKLTi1RszsC8TsHfBvA5dyc3ipkSTQWy",
  "key18": "41UkxKRKiQryAr7ZYo1fzChJkgr7drsc8sQGVyygmQJDTX1woWsZ7Qd45VCTZWCuBkdwsGsiQZPkfNV4Aiib9zGE",
  "key19": "GUYaozbJuPXu5da8k6e6SF8gNKQ2ViqEWbzejcQYrtLPusTUa15u21bm1eurtEs1XvMFQgRCdracHJec3T4dYxH",
  "key20": "3QtPFBHsL2QYvs1BfcuTZEFWHTf7WGyqMWJENfERCsDjPhifWFSmQWEwEc5rpCiKqXjfpkyk3poHLHCoMDGVsd5E",
  "key21": "uREuPAEbWbyKeEywEtq1Yib8Z7moUoJeZmAzPsvKzv8gBTizz2DGDnV3VgwmW3AieXJPaZqR3EtY47VRe19pYxL",
  "key22": "58NQ9wUfLerc1dX4NxnsXJmkHAG6hH7YD1ULwGAwxXJq54bMWnVn18GTKB5vHVrDj4tELRi5Aq43WGvHsSGuf8QQ",
  "key23": "3ZNaDu8EC21qn9YsQVBvyf32HanhPoNeZovPFFmvxow36bLPWTudipmyGi3GAJoJLzFdpuGVV7mxPq35TajQWXmL",
  "key24": "cxPHgmbhG3cPq8jbC8kQfY1aUT3VvKEGB99P7U2EriyUK3Mugzr1x4cWELA4C7KEgXEPTbpZKq5S8vhFmhGZUFP",
  "key25": "3dSzfRExcKCiMerJWjw4Ld3fppHwswAdYHDgx7x8AB6x9RrireQELhX3Q68BKJRBjTYgcLTTVLwr6BuSaYmVtHGa",
  "key26": "5BVRwVjmnKsbxvJRB3h8MTHLwSVG4k7SCuTb6beG9iFE7qLoS8gNCtB6vhtWoxsND5JNghjGERhcGJQJnVQcSE8y",
  "key27": "473w7igzJt4bBJyNBK4reNpsiNHC7xSQB9qeh7Rtkg9iqUBYStaMShhb4gty979uHy2jDEj6npZGuAS2p6sJ58vY",
  "key28": "5akFUXcrQBYNCmXhEvPLaAqK949Pm6XvXYSMBNHQE52FW7YPgJnM67tkwmYYfS4iB6xqFfVzrb5M33M1PydoL7sh",
  "key29": "35RSDtWxJzrw7gqxod5afjjJMUDC4C9WzW81kVKxg6NWq2rXv2qFHd1j2mzNdTi5zJkyJLcnn1tmeW2K9nQhoMmB",
  "key30": "5fYfWVFFaz7EUAFEQ7ThMNLNWVD9WHVQNuHKtdfH5XKhH2VFUNxPEF1Ah4hwKCR4RYxM8GwAUYEnRf8VnaQ2fgms",
  "key31": "65WUymjq82omXcuRUrKuSjxAGaN4kmdwhQFiseGcXsTs1YFED4j9xLKzdGdXzJKX4PEGFvfmpiNePdgCGUMLpf5f",
  "key32": "kJC5a3JByXsufF1NbsJHvDysjGoRuDuV5fDPFLkhvjNQfb3AcRSGMypbSZC9RSaK4utrSKeXS5F94T1omXNbmjL"
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
