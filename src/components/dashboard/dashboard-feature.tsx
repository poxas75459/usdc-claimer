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
    "mReJ4j2QmzZT8Cwwg37Ff28PUmpAzNCzLGWhkM3fH9eN9ACn7PqBAfSEAWzYSMg7A6uQ8VRJC5c25U2F1Jyc3d2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vXDwGrQRh67ujENwapWAFNSzyS2Reus9DxRK6mkQn6oUgsq7snbCuYWnySMgjj35Hqao7YaFaSaodA9LRMSHnG6",
  "key1": "5UD99guAEMsUgdHGPv16A6csqWAmxivhuUPZshtvKnohFuDTdqhrvzg9KMq38R81a9Rt9uyJvbxte898yUAbPBv1",
  "key2": "4uCKPBhzQqBEmJKQmqiFUga9xjyTs4s7eGcD5vxmmR8CMJLukAzsivzythRuUWLvZ9Dpi6LfsKVZMK47xPus1qaP",
  "key3": "4D5jjRSLC4HvyffTBwt3QiJsh3sEGfzFvNVvM9mhJsXmfkLvSgXJhqVZ2jkS79ngP28QLvsbBjd2SiznB5k31AzX",
  "key4": "2HvcppMX1J3uLG7i6QBMwz2npcA89LVqxygBP4dk9Ybd3BTvmiPPbxo8gA5ia4YtEvp3qg3tWgXeX79DeAcJWpcu",
  "key5": "2kp4sRR2GaP3yFNMPxoqVfe43yG6muirZ4dCQPrFLsPFojL1vPS4GT34c7fngzNLCQ8NY8jvN1SrbUpmHjZJGDf5",
  "key6": "zkKL7m9RAqFhid8FbF7pc86KworCoW2pFFUDKy6XrGZ4LJ1bL1gnMrbzxp1fnxv9oBFncf26EMN19Ftxvg4Mjuq",
  "key7": "6Npfd7FF8wsRBqGqaoxGtiEoCrmFWPzo73diSDtpHMFsmboeE77ZyxUA6c9FXxo4bZo6GVXB1gnrNpjc2nVEsuc",
  "key8": "5HU14ChHUKci6mue3y32WbdqmMozYPTeZ3zJLvUGMzfbbwXPTAeVa716vGUdSYybF5yzikn12P2npABU2M4mVDAe",
  "key9": "2ed9afKbViV3LptzwvksGh8ovHbHdk5YCyxwnxAjWhqgXw3Qj59ad6sbbMW42BKVMK4GJTHhEkqHyrmBrvx3vGxd",
  "key10": "2MDcY7uoeiNwKUr2Mhvcr2UEw3PTsteVnkYjtr6b252NyJkHeeChaY9HGDZ7Vq4mDHjtmKMWtG965oxXro455xTW",
  "key11": "2Dm8jXYHsF2pmuSqBPpAH2Qn3yywisrg2NH5kzAUip3eEtKah9ykh1Lc8TJaATzHH1quppkSBTjKASBgaYSeEDpe",
  "key12": "ZjgiP3zF3wvaZfupUZLpzWYv461t5LQY8AasTvxAHNr6svxM6qPtnqtVukbSWQC1diZkED3fU1cPEF48pgWYXuK",
  "key13": "5Zqvptt5xh2pKfKaznH1QggkEzfKk6rU2q3JvdpyiHs7JZuoNPWL6hnwZJBXqKdWe6pRm86oYN5xMXQ9hXFi4fBA",
  "key14": "ZKNTqGgz2DP527iaw8Sx5g3Eu7M1Bca8opM7gkmGRWACr9AYyv41XCeKP4XdzLbNvRJ49epA5ynSFsUMp4wMAJh",
  "key15": "iGpY14Bi4hsQAi3DGUXHHf7tvYkMhWG7mhz3Nwebybs2LW6Pzj5a9mV841fX3P8gq9vvcaLWCh5EeT7w6gvW6Uq",
  "key16": "2oZ3GsV12T7dtmxcAuwuK7FNhAQCi66Fs2F5vVRqFaWD6H5hQqc3dMTVcNsGnPevj9nHmVspYzcAH5PrbnW8EoSd",
  "key17": "4KQvhKyT5qDkvCyZz6g97Uh7AjUXypFspVQLXajJFKsqjyDp5tiPbnR4RFtgfsnP5nYBLCmfjw8A8ZJS4MR2LiFR",
  "key18": "4Eu22tK9hEq9yDzz7PxLNt8c93B6Qs2ZU2ChZabjzmqtwmtkEThHBAg9aRxwdUjrMhauVpe6irbTekRyZ6CbC3mA",
  "key19": "26V3aWPYE8SBxn6J7ZAEjXh6EDHU2XajM5vRzCoMapYWjQnxTkLvGDiFKRemvJeMBdfbH9iczvewfrUScETfUPwR",
  "key20": "57Kdd6TQHYSnKm2JJ3bDyCFNV7Sz8gyMTL9hVYnSGzyZcU4FhnZrxFnCEA2v5sprn31YRYDxLtTQh7q5Za72w7cZ",
  "key21": "8dxPspZdAHcUDiQS9qybUQ7ykEmxaqbfFaPJ1TAck47H2fkUM61SzZBS8Qx8ucFUwswxtcKVUpbw9kxb5CPsA1d",
  "key22": "5vdLdKsWmSTEviVMRGBhQYbH7ZzsmYftB8RJy7ww7VWsUhYE9ZFudxtFRVJewgErcQ7u47h92GpBzUAtdaxmxizu",
  "key23": "4k3wdePjTwnZ83tapEEF2C4MPY8gHRN5hjbVRYXPfDaSDsashbGApLECKAEtvJeMrgqxCKRVzrNrfBW4UVg8i2Ta",
  "key24": "5CkSNkRVDJeeR5J8C82CsQszYn2uXLeGLWdVGmTqX6TdYJ7UuUkwg2c8y1YcD4r66NNmwtfFcFbPy5sbTdW6rrFs",
  "key25": "5EsDK6F7CvhEUJdm9TcHqm2sLc6MUd9sTKPL94jd8ipaC8cpVRCUL4B1CTkqPC8Z1zpr3YtDPmGUF8mnwTJGYCmb",
  "key26": "5oRgVbnPGWiZyBhsq5ERKFaG2PGK9arEffH3m645Wd9NkiRQScUkmF7hfSXU1EnFQxfe9HpsaKQoHTa1n7GMM1oi",
  "key27": "3PLfKCsaMJJUrw9BUfDuSMWVtg6DkYW8oq7i4D6pRpXxt6KkNCziCaGxadwZs9E4ARkFHrspNSifbCE5F1GruuoW",
  "key28": "3EVxypuD8DUgdEKJ6qDfKmGhxDnPBxTp4pPoRpjH6epYwWyNyAijjJM4Q7NDX1zkzYkYqQUpTuLxxZw5zuDtf8ZK",
  "key29": "4Kvbowc1bvjM6KHhFpaYJaVM2vXebMvZxJNtBUG532SRCGkyHFYcjYQ4YyojRQmByC13Q2fJwKbqdYU9rS9xTy2p",
  "key30": "uRw8KeqmK74NMVRbSc5CDYUXAJNryVQkUjcMQqcYkLdPP1jtYNSkwUhgsdmRX5cFsyRd4ctqyyRbSpoRzEwDs5z",
  "key31": "5bifScYjr2SxHcaVaWTuy5jUYwPZy3qVxZp7omsKvB9nR3ZXbRZg449cxAA917G6PDVpmaqd4bH7mxvFsPq3ZZkL",
  "key32": "4BHHvhteE219Qt3a4j1ZLWBtAtoHczFmgbFSUsRkW7YZkwmZaP3iU8b7jcAvBi49oRd8EcqAUC5Kmf2ha9rbUMcG",
  "key33": "JoivhgY4KZzLoTR9CdG9xD69pTVGjam9wVQxeDDPAWLgbrj6FaXxx2gXKVTpgWLiuZNDH66T3cnAHBeuow7AhKV",
  "key34": "2efWFpGS61avrQuE7J29FUGgjYtJZTRjJi2ZPNTeQigYgdxCFLBpqgMCU94S4moymgxTjUYzgpWeUBitLbf6CJyu",
  "key35": "Z1WH1cWwVNAcv6zZkcpewVJsNWKq7J7rogtybB8U5o6Tkp6Zg2qsNvKkek7174t4XefKzB8FcAbwzqzuHcqRsqr",
  "key36": "QRJUZXs7cW3ZaSi7RWHsirapARUnf7WSBpFP2B4fHKBaPvENihqtQUvWJcQN9FER87KXcZrNGicyvfguBWQnMu8",
  "key37": "5GU9Ci1kdYL9aK1mhcizjyukbg5CQYQn5SB92RNuPWe6nCqShad8A5hSbEGAUSxkdR29dJ7hz7eytSFeDbA6WGqe",
  "key38": "5WhDayhBmjrSUgBoGUEUDLxsDTamXSjR3XNzyxbSb7ZcFSBxN272b2pjPLkDrw2cdPhUk4HJTF435WvEdPSa2F8J",
  "key39": "2ZtgaJp7ep4zqARF7qtxGvGxGHbQ1ZY3LVBuR9webHZ8GLNEpspwa6ySxt9kB4Zev6jcRBgGXMoFXKmaxMUv5RAX",
  "key40": "4LpaSHL1uDoWJTgjMWPLkyffHSjScvdFvfosQ77HsDnYF7JkgHqahv91EGnoMJ5F44XHwtg3HSRV61bpYUC5Frjk",
  "key41": "4qkq5aGJx7QpoJyWuLB4MaRgYJMZ4wducfVkhRzWa4LS5uookj1FHoaNWMeJwLMHsMGKxfnGCE4jCKQ2wEWjbzGP",
  "key42": "3UtbEAg5TwJbZnMQEdZ4CD8roZE3K7oTWeT8fzniutL7hD4pPVD9ZkAG7t73M6FZ2uQqGWCLdsJmw5vbNfgZY7qA",
  "key43": "3uwDrhAdqXztwPsaweeZn9DtDVGwMZ9BcQq1dWq1ZjtFRJKZRt8niDeekNQq8PHAp9TygJRJWvYJiGg3qFcaphH3"
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
