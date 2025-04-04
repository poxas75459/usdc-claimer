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
    "2vaoZkSJc8PLZs7HgM7bDhqKCZiPaZCHj3zjcHaF4ZnnBYDmXEQW1YU1bQy2nU96FsSav6K3CFm9h7vAzKtQwMEL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XoPtVLfK1hLWfFPZvxUii8TKmAUxPZRNrv81bnsR33qd5H7f87d1U2YSB8yv9a2avuhgcoBqyaSGvR8XBXQgrvW",
  "key1": "3X8XXkjwfAMGoM3seq3QMFRB1zQaBsvkSq3hgftHic7F3hJrL6qZT2d9aj2KejVauBvMwfSV48bAMuDAbiRWKzer",
  "key2": "2m2HjEyGZMkxR2TXfjBbhjheRg4EkXLqCin4xDge62aZ29UDbpoaKvtP7Dk9aPQKug9j81nnptBTwJuVUacdMBNB",
  "key3": "3awq9fzTcWbZGtDdyvJHCQTofSkK3wJ27uqwFddNkoEyVWjUwBAo1DvB9WWsPYaDsXgMJTRVRJy1eUAaCraZdkMC",
  "key4": "31EwcXTSKZkL3eam1NRdBUHxq71n5PYseY78k1tgjh6KwsDdpVTouqZdQvLdA9z23LmFpcpLVzkRVQbZaM1w9Rg5",
  "key5": "45A2FCgm8hyxZqxgVmeZdxiaAzt6j5zhM26qnARErrdgcdWEkJJcRMgWXxHUiHsFHmh8maPnBCXbnbQP61DtY4EC",
  "key6": "5B1tALwFHXiJWF2Yvkob5jQV5bQinade68CUK9LmnQG8vjtpyG467vWoAg9vgyeULAHLDi3modzZ74kqPW1Ps8P2",
  "key7": "4yPbdsB8Y9vkmYz218PpQYmCREhPFe4dHxCVGKkyS99B4b8hYomJeP2oMV1gtvznakDkeKArkSe9pUUhp6sYAkNi",
  "key8": "3K1WLUVpT1U32ZLyQdfdra5htiSrrVY1yEBB8fK1esQjcSujJNzaHsrAjMTfT94hB8L7V7nxnnZwypQVwWXGvaqp",
  "key9": "2ayzuUuCZ4LGPw1WoRkhTUGer4k7Bg7MP3QgSqaHwSoNZQaYEiYTokt2Sbr7hkDuYUoELU27FW7wMeS6qKAhGANd",
  "key10": "5RbVquXq3KFKFvRxvG6WSJ1kZfyM4QWEwSdfaL3jRi21oPKhFDbbKG39CBStCuAkVgTKprLvRC7g6qP7UFoUsXhC",
  "key11": "zsBZd1T12DRRHR6o6CpZHHMtuT1kZECDaiCijDGhXHsfCzvoS3fGXSFbVx5YvJNnsPhatzP5672xwb33y2QrA4U",
  "key12": "2vYEZHezrBUhEmRNc1HQrDGHGYt36xaWu8Gd68wozPCqvKkWXhze1e2ZMvGKors4nD61nrrkGXxPNGKu8hWvo8BB",
  "key13": "57sNwb2XtJ8MEwifcJz36YmTQpMwSyorziBeL4pnNSwubChjDs3gRxdgKRQ4QrfKGEpy8nXYR5vZkqB7Eb92pLhR",
  "key14": "ZqYSZPqew4juEkFynQymMa91ZFdLVtDnEVp9p6DdYbvXyVGjaBTFGkevWZTcJukuU78rpZpnnmdyyitmJd92Y99",
  "key15": "vp4pwnppEZRfHQf8TSHB7MGMtwtDjYPoXdTWdhMKt66qSWpXYCq8anvxpZCMFYPegqmt1cntxoZfoTxTBmp62VS",
  "key16": "TS6sZiTLwrQ3np5jcK2wf8f3bfviSQ48jZahiWBtTJfKhroMPJHHPj1egkXMzpkSZ5ELtfJdUGe37jsy9sK6rzB",
  "key17": "4TNijpZkEQQEbhdvxUFMsqSogLuykD5XmwPxxfENDKrKhG9vSu7bor14Xeuti9M4oBG2idXVHkoJXYgfSf2wikRX",
  "key18": "W1hZ9BXfeaZNPzReBJExFLSy59yhD9q2tCEKJPbuPxFEjNQK8NrFrcdKk3R8DP5csCBTpQDTTZSqzizBJTJjGeL",
  "key19": "3wVXhSz1Ci9afaWNRL6hrbMBk53qKJFnPM5MYHDBsdhnEiTMot1AHAD8AxNUSM3khZdnPdrpH3s5B8hbG8LyMHbd",
  "key20": "33NBX9nTcSnU2s9wPibgDopMKepw6AF1j32oxj4SrdNP3qV92RiRbKWBfwgXHJLDGjKRTEQu3zikxNGEmSR8Ejz7",
  "key21": "LDZDkqBtgFZW22Nzy4uMQUPm5xwAnpv9NabvaAT6rUtcZxBBDkHQFk7dkCFn1Yho7e92stH8aCxVAESNh9Q1wnK",
  "key22": "5C9J9tzrnw3zVVFiehYS1tHrcGG94AYn5GDw5SXHhjQrfD4ExtX5Gcnt3vJ9jCtKv9FD1hRHyHsFcaCUnNdx1d2f",
  "key23": "afxHTeEgyvG5TiGG5voepaVVci7Yr7vZaajssYSSdtJBrMfeKUy9pSRrT8DLtJi5A9keoQcSabEmmFjfWuP3rdU",
  "key24": "5zTi7Vb6to7LcPNrnPtUuczn4CLWZNaL5xCcVcEPrAp9DmCkjpW2L2qUcg1UXpD9hQmcQdJKf2cUdEux1UP9iWvh",
  "key25": "2AzCLxnrRpXnxaSBfdHPV58Y5PhAKL5ddh4opNJ1wm642Nt6JuP9XXWK5cAPvpKkVP4dybjxQ4Csdox6aYCZNDoX",
  "key26": "2tqhYEnRF7kpZAdqfaitzEyMjJmN8E8rEWVrQGij91bBqwiDcbP7avJf8Fuj5p6LxUNiVZkf15SNeE1ub33qacwo",
  "key27": "5wJF8KjP6PY2yRhgdZqDRXVFRtCtUTfc5ZBFkZpYitdu5HzGZSUg2waiUTFydfiT6vd14nRsoG4LpLHup7XtpMVD",
  "key28": "4ZZug1D7cpjULf2Fba6FA6PJiZeCD7oFjCdJ9wERkJXkoNbaCDRBvUHVnm4NtoG2Y7dB6QdW7JE6fMQmWDAQ2wba",
  "key29": "4qtqPoM77hDeA7GSguf74W3dwwkHe2aPDs27p9fYb3ff1nbgJPXeG1ZeRAMeHRBzWRKRwm9tZr6AWoG6s4Z5hGqA",
  "key30": "4cSj2rRJnuJStT1EGoJ62yAETZeLdyyTpBPqvr6t941ioku5UJX3P5C4pVNpTeNJ5agm2MyqqeR656VNnsQ8i1bg",
  "key31": "3EpG7J54YtziGS1gmA1XWB93XNZuvnsD9HaC8i6RyghxfjUW3sVZspEbLo3tSoW5v6oxTuT59TazjNCHoGAnxTyK",
  "key32": "uWf9TEM3H6eGnWKYKw6Yy8yiiZfbSpzbLq1PSUrxRfzPVXV3o5HFuRWZuZHQqrzZ38GWvphrGPUwN2KJQ1SffRR",
  "key33": "2pB3jCQ5Brt9tGKcCvTDx7GFfUY1CBBBSVkM6B8LEcJmsH2dnRpLD5dux4B6BiNYgqrVyrZer1aeqmMbkxExePxN",
  "key34": "21oFwA3GYiUDqSCYTEcsABCzY3CQcKUq42XTgPmyPNDSSSTnXLbKV4r9ZPtd4gDuFWruDumQnEHE26woZ5RY9Lej",
  "key35": "5BMC5MNAea8exy5if4iQsd3Hwk7F1GT9EeLC3LoHq7ntCWrNzUM9D465WYnTUF1EqdFpJekAoeDacnm2CkLZhGkJ",
  "key36": "2NoJy9uKe7zybWrnSKVnyMsqghrz5hzTLkpFeswtGNxpQnxejXce1rtYR9yDAMCQciADAefMj8qRNi9RpXuuH564",
  "key37": "Bx3gb2rWbdF3V1XVtFUZFPE2teGjVYPALVD9H2gqBa69XBqNFNGpQU76bDWevGZTexHg7PAZkKNHYc5vyEzMNun",
  "key38": "2zSpyPKmA78KG35BEBBhEWyRvr1txrpc19kJJ8RwynkXzecaMvVnNqvyYcMEwSEgZFYxgKoGdn78MAgUHnqRLLGE"
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
