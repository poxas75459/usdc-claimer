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
    "Y1f5JD44ZrMWrCQrhDNridUD1TMZr5JWsfvCHrMBoLHbuqSjkmEd7Lej3KTznLzG4ypB8BFz3dJX3dtbCPt1ZRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CH7QePWKsohoSdjuiY37QERPBVhEGu4yBYYd5S9fkNmEYgeK2USmFC1hZUiws5qqteSjTL85DmpDUQuX3nXRrNZ",
  "key1": "3462ULkBnLyZqg3LCa5yq8KH1Z2dWhe7yidZJDf9fGgmi3BDLbEzuFt2VyK6WiBVKNY24h6h6TjsFiA5ddP8XYio",
  "key2": "WPK19YeWXrWtu5Tvgu3r3ifS9easJJHWa2vvGLKW7dgJiab15xsGtnd13tE4bJdRJtMpB7jvA2SmgSJfCanFpfx",
  "key3": "Y9XR1XeWT3uWKayge8VifX4pBzCtYFRw9vAzKWmZTB3j3Z4GgGeMGjf4BHHPbkiD7LfhqKzNz1S45tpDwFz9HGS",
  "key4": "nm9KkLXKVDkSbopR4m1NCNrn7z6f3smZwcNqzsWgEmhqTEHNKfsL5aMo8ubgmaQLDLQqVK3jfHbxKedq5e3eNzJ",
  "key5": "GUnUzm7vSSp1V7Ts5zaJk5hv8a8arBzLSwoGgSmswT35LuNvGLEF3uvhjwqpo99W6QXaYUmZ8NjoLwF6rtqfkXo",
  "key6": "2fAC2mgTAjXDhmNiLTBHrqsmWhijb4nErJFevqcNBsWaXn3j1DDNnSwqJtNQWF48YU7eQVWTzExBCY5bt17vi5AE",
  "key7": "27k8BCgPTLZLUP87zVXUCw9AjHo1o9MV9td2Ru9P5KeQf9mB812R3dPnzG87QTARQcWtvSS5hecuRruDgACA98KQ",
  "key8": "bn1od92ZK3mNT3z1CHu9peW7Qnnc2NpniWypCUgqpwYLEpKYo4FWmP5Vr5QSMQRxXMdE7hQzfSULrTDFo8x17h8",
  "key9": "5TVVE4dL7iAFJiyBEGxqAYmNWMM9P2DqZvKfkBLdYgaGLLBc7eFjvoqANa9vfHtm1xkfXB8GHXtz1SM49h1mpUGz",
  "key10": "4fVCcWdjZi1Rj44aa7on9heGfUQzP63ZAxDA6bmCjzQo7PLTT3QFcnVhj3brZz7NQyuPfqxQ4bVyKa5zYfdq2N6n",
  "key11": "4sso3xRDMfMprwWEGnhFUJR318tNcY1YuSiergHNGbEHYxWtAbanzMhbNSXUod1CzvcVJbGaNmP3kbebLHd27oWU",
  "key12": "4nBwBnt86MheC16WtKzJkAP9mgacHy7BLdnUuQBuFeNf146NMrfxUWoS8jeTHo5UPAYqyq1Gna5foywNmCthFLZA",
  "key13": "sHUid6ZdyRyTXcq9WfKSSGpiLbVXgxJRTvpSEDAyS86VaAHSVdjhdf3hMnshYifED2GTeVomvfwKgzi47uGgtYB",
  "key14": "4vHUoR65CmDk8PypjMKNJ8TEkgEBp8tp4MdeYWcXah6DUBgcjtGmAGdgcNKc21w198zbpEj4K37baWYV6R2AKkYm",
  "key15": "FQQYf8VmNvQTMjcv5QaCz8ewQAHHdUJ45upZrvYebCMaZTKUuiJuWWAPJ9wi4MhJXZdc6zmoWocBjmqoYKaZhQc",
  "key16": "4wZHFyCnBgU82frmXbhkHaAj9D4o6BYG1JxXCB9drdT2J9Dr66mBDfGmK2AQwcq3B7nBZkPLwUJqVztboyFT8We9",
  "key17": "3UCT2XTzTvL3FvkGRFsFLcX4hzyyBryj2zPBRYcxq7nj8RhtvZSYswJPBuciKoTbAT7qFj5yuwRdfYXNeJU3Ys3j",
  "key18": "4eFyu99mN9Cca2qa4AFLiTmkBPZtuFDu1zkcWyoDenZdJn1fGmajv6jVuHxH1Tg1u3q2xZvomFkDhZZDF2swPyLL",
  "key19": "3v9CyTtPay6MAms2nQ9vPWo6kzvFW43Eq4yhGnbVfgyeXhrKNUHrpz3uzSWtG98eWdLjAUUBqPD73RHrxBVLCZeE",
  "key20": "YLjuinhynYY5bhBAXp2JRLNUChT5qQFxED9naMbhPTL3z1avveHwJsWLEEXvCtUcB663Sz1cszLGnnq4YnxJEFt",
  "key21": "wzfFgYWtfUegjB1q5QR4sLnp3vAV3BU9gXZxM9yC6bUmunkK9zFuJRhrQMkvgbhsH4h8u8quo4HT2cC1pa93PYp",
  "key22": "46o7TxRtRmfnQD21w7oNGB7UhmZwxzhkadiDkZnYjKXyA3gwo4LUg2XJrsaTXMW6M2pYoz3H9GFv9GEKt9ZcFNa",
  "key23": "3ae6jheUTvcS4yuSZfL6vi3xQ9Vt8iS76kURXobLbjbVw4Btg9DPXdudCPPU5GgTpSK48vcEvwr8xsWRawYT11x2",
  "key24": "3La1Y1MXpvwytk8vjvrXH3WbuiJbmMJtyWAajsekY2GDAPt2vQwBjhxGAZ4wJrSory3hBLqT6snRsVf95jmzzufo",
  "key25": "ZhA8T2MAC2PEni5LUemf9dTcNcHqUEp7fJCSGmAWxiPvZYphp7baXEFr1pkegAzdZf7oCMerxK2jCnUUdjWWUd4",
  "key26": "66GMqAfKgEkpA6sbM7jXxSHDtF815DiSYhWNe3zYBQ6qoSwegRLyCdyyksKgh9pA1oY2PkhTJQApeeo2RvCmFLvv",
  "key27": "5DifWmHHNLnLSETkQHxZp9pPSDjJdtP5BJtvSFy53YXP5oLwbJqRSciVXm3XRtcjPx4pwg2wxftV5aMxsdu34zjS",
  "key28": "3MeYmUyDZ9iKGG9cehbB48fM8AiqovEzHcGRrSGjkqJvNzdWbsAmJrU9W17iqsjGbE6ndQxpUFV1dax5sddRW7xz",
  "key29": "4yMsvsV7dp993aoq5TDFKrGFzHrPVjq9L4TSwpnR9sBQ2zZxJJmDbcLXgApmAD8vXbanUhXXghb75id8H8jZneN7",
  "key30": "4pcCbYWEGerALfT26isTuU2Wvo95FLGP3m5ucJNPQdu4WrvaD4foi9hNHhsh5R57NUhof6jZrY1LmqVMNQD3bffB",
  "key31": "REchnqEyAnA5jnxivwDVjL1SgLqpVFqfEXqFnS2PiCr5hXHwf6Jk5bjSMbD8otTg5w727aDXt3zWCgtCdE4KMPT",
  "key32": "2EebZdJdgQeExaYxgtCLJyRF9tGtUwR3WHafWmwVEiM5MAJaVRih5V24VEZxVj8Nu53e8cs1EfpRPFMm7LvS4EUf",
  "key33": "2EbJbvMQfndFc6ftNKzhuXq2BkDwz4nbPfpHxWKNFKR2g6F4pp4jb6mDNfa17i9kHds2bprKjNDfUQPteR4nNt2m",
  "key34": "4JVEmzKjNh74hCe9Y1yGM7YAq4Vu5PnnAtBeYXf91xYABw1zUSgFLJCk4Mp9GRDe3rfuV9onk7LfYrs277g7EKDD",
  "key35": "3sjtjUWdcTyyiaTPi9uRgx9v36iPBwr9kWRy6SJAiaKtKjQrgfewejiiHWEH8iS3JPLGeNhPi2AjBovJg6WEmZ18",
  "key36": "1rnkGf51iKgYmdA4GXMoXSLg9VUYsd1We9Vn2qN87uKaRe465PsjQGEs3dKto9zLGX7wUmWyyCQ5kacpLdpeGaP",
  "key37": "5xggCds4e9USvsAJ5nYvvhCEzFveS1T59gj2yNpE5NqeQphn4ZatUVPQWbV5Jfh7pXkNu3yguE6aGVuX7WpgVEAN"
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
