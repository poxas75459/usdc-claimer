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
    "23wSFpdtu9ztzzYfVDzMdheYLsZdWvJzrcx6871sNxJ9nLkLXNKFUwSD3jzpHYTDBtZPzWTFT4PiYfpoz8qwSEhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rsm8gDZUxe9gD1GFXMJawCL3wxW2BvFFJ81MvRfvHeXoTpyJW9GFiu8UYBAF6bhaLkAnWEKYT8bbPsww3DvFwzi",
  "key1": "3h8cJJBJFJJieCadH4JLYW4moasbtPcu4nwHbNBJQd7T4PCgC45hCsoPkdzG8U2MmhraZmQ55raqGGwtuuzbb6eZ",
  "key2": "37bGQjNqoC9EzAyuKz721MsC3Y1yN3DRUTVmcQNwgJbLV4hytweKYyHAeXmvVTtRugiWuNLgmx1aqqaCgaMgrPT6",
  "key3": "5oCuQ7wRWREGVPunE195XWHUXJfSHcaJkduBBtNQk5dFkK7LCiaC7mHWthQrt8xmJk8sicd5MiVhi9TdnsutEzjn",
  "key4": "39RUzTxKzH98V3Gq6h7SQeK1uYToSrB4889PqaGWCRyg3phwouU4NxHBExFDBuEghvxUSb4yxTBMYXMgm4STEprk",
  "key5": "5bFxBM3zwjCKDyASFX1t3cT9Hpf85hLGLKsiVPfL9rimeLsETyw1M4uMTXZKKXqPrGV8rbRdLZMbt2wpnyqCoyn5",
  "key6": "4TDCEshSsV92JsZ6mKMLCk31DT18tfqVdyw1jPWzFhf4sPnrfDcRM3JuPA5wDJLKuN5XTADKrmeAb3UknSDtzzE8",
  "key7": "5Jv3hgQV1MYgExdgu5isJuaERACnBrsmraw16WWPhzobcrZBMXqriK8QV8iU841ZV5vCGb46xKLxLsGHdAWNPyRu",
  "key8": "58Sqbikf2rV6mNeC4yaJn93TVqU85xYoAaodq6VGtsKGWoM3KczZr8F6ckeQzvSHeWAqr8z7Y9ZRra8txs7sSUCG",
  "key9": "nRSBnAsttec5uja5vmZo3tjGVCqKGEA7ZygSpJErPjBccu3ErwXRzWsJJgcSxQNaLumrxN3xmLmmbp1dSaa4bTb",
  "key10": "2b62G3kn4fyPPZucYyrm5v9uxmxGw59UnSpkFBx4oS7r26d858jhXnLwtwSh6UpsD1Stpj5Vdskw75PN6QfzgkLW",
  "key11": "4K9gv5pVkWeovRpDcJUE3kaLrJZbUNAWzyM569w1RWWPxjGz9fKW1qtC7A4zLcP41GeeNRGmAGvrHrwnNK5c34MQ",
  "key12": "UsWtZNnbUr8hgNtBBgpQYVQ2e7L2GHQ76mKHWpu7EESZxnSntHgqXwg9deyxCtxUid78UYfvjhNyqaveVf5aHnj",
  "key13": "4QHMHpLPEFKvwhzXTbNvc4jtQ1aheACTiBVLJk3EjSGC6FbdG7kGTycSFtbgXaAMbvFzHBguQj7oczKsADmo7o7r",
  "key14": "2shifyyLBR6kL1aH3kHAHo49Aa547hC5Jjd2Y3NdB3RoL2zmpp6mbTEhQ5BZ9StSPXLirnaAYesDzJiLma3TYeut",
  "key15": "4tX4hrsHfW4vqGXQjDD1cy7S7onGpNiXrz7eD6hL5MaxDnRKCezzSHZSiumKXNXVc2pHYffVrG6qhPsjGPHewMje",
  "key16": "rfVgdxwu1YZvNfif9gRgpbWMzC3JjbVZPRbtptiHxLXmycQwJZnNsBvmvXHdRUCsVsWUfjfQf4uGk6QVPt5nWHg",
  "key17": "5XDZVnFv5hhtti2mRsu1iUCKgeKGDEgR8dkbhYrPKqjPfx5XLwvp2jbrm5Wd1WhduQyHuQCazMghDaZC1KmZNmeu",
  "key18": "W6D4FuFrtWzM9RF8vuFa9LpScDXXivaNbdJTtpEx5bQXo8cXZwhnagiZQ8RsWKto12aJp9keXHrWfMb1z7nuoRV",
  "key19": "44TiN5W6bE6SnfueTm7RRuZ1ZNcfyT4vdwFPYTjHakzs4Zj1QcBXzokrGWCgsue9zWi5rJQA5szvHR1n6sgNX22r",
  "key20": "4U2i8aBDByWHSEK2i9EbUkoWSKDNjPEToqhAGiAtQ2ZqrwMQD83eYH8d16NmHEVSBfntdBG2FA25AXmoXxTrxM36",
  "key21": "2FnZ3j9PQnoLEnfb7Hf18U2dXpqcWQA521zNciMPZDmYo8yEAmuxBfqM47QXp1xwhz94CAgYj1SfRJC6iw6LnMth",
  "key22": "5PhhbVMDttJvfDGKH698mUWMptbm56EsGgnTrJ5VGhV2CPsXQ6uD2xmeK7jAuTEjo78QnrNiZDaVdZ8Ygfz3GXvr",
  "key23": "66WkEvyjvP9viks1JpN9X5SeBJNqUie998dHcMuvhDobCeTyG8R7yCeXGo3wRPanp8XLadTbYUCuFoka3QcqheNk",
  "key24": "zEn3LJ1TfaDqSC8WEZraeQRiS7Z8XNk2pTXXF6poBwhq87by1Wzfyx11uzguuBtnYVzZLhPGtMCJVNZWFe97oFu",
  "key25": "5DAVbWtFu3UfgWGW8DGYhrxzqLwAZuC4fJd72nYoN1wuYWuGGwE1CTnztEhPTCHBpZLaaKvWxdPpTYaA63nHZrdd",
  "key26": "2sY3hBQNoitJBpnuMaDvt82MxCQTaEg3ADvBuVSnTXghJSE52yYHtMV1Fjnvs8nFkFau1VwumR7MFpUaNHHkZoWb",
  "key27": "59Akwmn4B8YPNdXx7MaKTSBRk9BoYdP1LYnzWJuNhqKvuKid6PpYbkQK129EGdJrgETii1bvH9AVnmBLJATxyfoM",
  "key28": "62AMY5Qggs1FbGnSQpHLKveamXmuM97FQkmCV3998XUTjUuFxvfLb8ANbSQtWTbf3o3XSmXV6p8X4sNZhbdhwfB6",
  "key29": "3yPr9R7KXwFKSc6eoQbLFD6secnFk7PJWyDAvtuJGroZRskqHCECzp6qb99xejkwDmcRCPHXQnqtUTwBo2Xuv5vA",
  "key30": "ebDBTjiTH4k1HnPYHRg6YPDsppEgSRqM1Fx2GY4icRwy2zNWpm477uJxVmt5ANsEUGipA56KsqcRqkfqPgT6ThJ",
  "key31": "48y5v1VhiuqdsqAMtQChrGGUDCHBXR5CCmfpEwqjPPWmaTiKF2JdSFD1GNyXsFtjPRqc5Ca41An3AXT3dQYtxy2",
  "key32": "22fmEvkjXkGVUVPCSxDFD1CxXFHzdRqHxwu4F7TSLf4YZLPyroakuT3bTNUm9PWgvff9cxY1h5BWCD5qmbfV6iSJ",
  "key33": "3FFe1J7nTz2RfDHfzuEkGnf8PNaft3VQ6rV6QdzoxSeSCYVh3chT57CV5cGDvMbVMuRUkRs24F2X23NdpzoqhULY",
  "key34": "8JkrShcoZDs5QXRKwuQuN6NuBwjNqCjLExynUxJD4qofUJa7iVGeEuGbXMsWFZgP7g7ckLGG7mTThsYMQRJ2ycU",
  "key35": "4A8qGSvXKuyqtU6PCyYyfW5v5AMrm6fqxv6YX5GrA2gWu4P7ZEC76WowNbmGQdYgsisVJUMEDHrHGwTmVz97ewL6"
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
