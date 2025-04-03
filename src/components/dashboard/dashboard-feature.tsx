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
    "3koMsc4wSis6uXmLCq1CFdHB3ZzVYPrUUrJ3FgUQWC5iRqjrWBhZvB9fCmQXmREcYYgjgfiGfmCeg7xNiHimmSCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o9RtBwnJyuDEHSNiuKzkNGZkNDXAEwP92nQ1He1qSwh4Ko2WB41zdMHg3sxvTprzL74C8pEAZXQeXUfpqX8Chcw",
  "key1": "fjNmujAiwTsukGLwxUU9WjgqBkvKE6jj5ebYQE99ZkJ4GPrerVtVAYPdrp3oGDPAKCbXqa16HSoWkvfGRLXLV4e",
  "key2": "4nMV5tkgevNRXz9bpGc8sy16hDabkkZjMfKbUMT2hnYbycfrrbMMHUMw3kTkvBcmsFqYupEeC1aeSHi6kfVLxKw7",
  "key3": "zZ7uE7c9Y6a79ASxx7d4k4vCsmLzBhf6fYH4bUw13jVZHZvKgffeg9pihT9apno6jU3Lg9MMoUojyqzjccyyhQg",
  "key4": "35GzoK24J4h26LjiC25Wctr679uSUEtoj4JHMphMobGMbpg5LXqQKseTwnHz2HD1ZgQio3vHgebqsSbCan2Uirii",
  "key5": "JM342YhSot2W5YaYzHCzXFfqGvu58HghVwvkkuKGDFfaKEbZPMMK9SRoXh39Rdkri2y1cuoPVFH97oJZcCengZH",
  "key6": "3kMV3Vo55b67DmEM53HYoogXsPm4dAXZmVULgSEkjZyEQ1Qusbc44BaQ2oMF19SG4jJNjb2MDV6AL3dBS9uRcq9g",
  "key7": "5PeabvLzr4k1bFdzJomyRfyzvRc2gcLsMVbZjD7gCrZDtJF3CuweWMDDVvVJy95CefrRgUisSiaUPu3oDBUx5KeB",
  "key8": "4bzJjt9MLsBVUWdEPsv39dutQYDyXpWkBZYbzakUxvGGTcrr7q2E2F36PFmqjzkPCVLhvAq6f4yxf15vE64rVT3e",
  "key9": "44p9icva6chS5evS82nwsMdtyaVQz8b5skgndHzpsUNtKXdsbNvHgzSwkU3C2Xd38YNP188Nb1GgcojvGBAzPgdt",
  "key10": "246SkymJrVFKe6LcN4h7XqbXYPgdHAMtauZ6s5dhn2rABUp8ZxBTLWSWiVpH42qNoCz7GbezJY6U8gEijLNN5res",
  "key11": "4VSeSXwdGdZjjvi2HYkAnXfATiVB76BqAUZeogkeoZA1V8HUMn74CNrWuVAdAgqj2RAcjAuBH9YTjLq2iZ3hqia7",
  "key12": "3ZZ2NQ99iWoY4jxiRPyAh7CjArmef5DPpx5SYCdVTnwh48hnve7ZiN5scT5oc3ffTJfyh1bVwQWcVuK2FZhefoaR",
  "key13": "65Jjb6WHekhuBXy8wbdVtq4gmcBAkQRhu3nCpyPQRMk3f3QczJLSVeQZxdu35G6yetBGtSvT2ck4sVXkgwZw4L51",
  "key14": "4NKLTXynmnHoSmS23afo4VmnDXVQKP2k228TJpLXbdecRDrPUHtVJXYutocFsuhMruauBz9z1NKz1ZqVYUPxMwn5",
  "key15": "iXZgC4Vg4kXAqDKaoKE6JJZ64w5cT7F7BuJgjv3ovK43Ds3r1jMJAfYfbW8pRbmeCiXa21k7L44Z5ro13QWwexb",
  "key16": "35dQL16eZFTufQEaSRsRAoyjXaXqWAJTfDKFkHnrWLjnQY44DxuGFrztCQbsjbUM23CL2Lnvs4sv8cE5wZe6ftHZ",
  "key17": "2REebQFvQmZf28MpUxKxyVu1NaUzAei7w63gf8G798fZtT5riAxZkHaGS2x72ijF6Lg2vPY9TQGZ7ug5sVJU5D2n",
  "key18": "3AfbjjMyuidVffk5RLPQXte6SYWSvnwEZATf7H4QywMdNuwwuHFoa8oXPNh9qxY2AJui134smQsByVArKmPu9hEQ",
  "key19": "4MEyYbrPspsFFgAXuCvddj2HKnsaYEp2fNpmSJtXoDEjt1DLQCpgnzgXNd2VFEt3QKfn4kZ7WeicpRtQNMXXKkWh",
  "key20": "4R7Mig3ZtyJnwLoDed9hBDm5CGB7nScfCaknxgGmWJp9xSuYAYRQeqi5xdyqtxjLMBLeFkMcss5sEpfJtr7ZWum1",
  "key21": "5b5CHszDUC3CKGFQhHpJNB3dEyc3GWCdr9QiTJXgEmyJt3YomgrxMc7LMdqtVGQXPATBnmVHNMsKebFAAKxMRsyP",
  "key22": "uTYzddzKUY7xZqhA34b76eKxZBxFRu5pK7VZA9o5KyGprLtGqys2oUGNTosuFu3GK6CbWefgCjJL53bBaJ6LTyC",
  "key23": "3fbJurVVZF4o1sK7ztLutEp3igazjSqYxay8JnNaN2uKJ7EjHiuKHv9xip6fvwxnqShWD3KeDb445kwPXYNRDcw",
  "key24": "4JkH4Z8mChZBZHdtvyqwr3ZotHeNk3jW72Y5bDiKjNQGhhKqD2DbwGuPLLAHKjJrVW3y79dWZaquexJRYkV8f9oz",
  "key25": "61UzawW9u4E2RrK9wqW44bjbMLJuE3Yp772fatkCB18ddEU8VwLghTzdMAanKE2tgztqtzuGGumaGpWEztQx1Wbz",
  "key26": "4BPsfcJEqgaHZDwn48VVn4U67WCgEcrAXhknLqfEYZBJTghkcXf815UDhCnWskE1QTzmqJnL4eBYG8VTbC6v9RBE",
  "key27": "5aFStRePMMaLNL2CrfNThZ3Q56iCUAZsSJqa6NBdMskwT4PPvSoT1t7eoqR3AtbyR98XrWcwk47y12Yyvdp1yu8K",
  "key28": "3QxF7wfAHRxZ2QcVwp9UJd1i8Kp5mLnJZoSBbUYB3xAB9RxLyx5wF3aajAKgoWUaR2moUfnWgsshDsmQ71uFo4qe",
  "key29": "53u69vuS56NH3LYJTaiuABEz4xTbGzEUnfRT2rvopSczFovoN2eGRLhqANxd21RQ8TPTrxhdnTgRYjUFE6HYeFQr",
  "key30": "1s2QAnFUF9wN8HrqqPga55uCyKr67ZBKE1BPLHv3u9pGTncCauiZUm5v1QrCezMGa8TKskVHBPaGHUFQD7QmKm4",
  "key31": "4UMddLHWfXC9ML6xJLiBnrFbUfHz9tP6t4XQU9XbhdPjkmtTAtJFzyMUgXoyifBhYshWHrYYgeTr3gwTrnYLhwgB",
  "key32": "4seoJmWgCwDqi8LEt77xrV2m9zHXH8YrB5csvBiC84XmJWK4KBD4KKCuS7pcrE69Khs7tNwQPzHgAsyJNp8rajxi",
  "key33": "3wwvdodZqE9AP79bzWixEZazwbnc9UMEAsXR2g8qwaQUGevStMUfY36nqaGKSLjKatwBK9tSNQBcVy1bXjK4eHju"
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
