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
    "5RYgR5gkKc9u4fukiQK1WejSeX6moAe5sCAtoN2tuPTQtJULeWUQwJ4G6Tx7CXNY1p1ta7Ce9Qp8rQnesCRHwmq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ct61ZPPv1aui6ookxkAZkzn1edp4Z31xoPZq3DEwZGoTR8tTS5tMrNfVDEsW2B3xBJjPtY3xVsMr27sPoGywHNA",
  "key1": "4634DUQiAGhLAUJ5Mr6Nceq1YXrAwUrQMKW6Fwew9nvWcAxGgJKevEhC4rRS1NitCfju26eFxAXntHL9mNW8rtHv",
  "key2": "5dX5xTuB9ycrnG229pAptC2Zmz7VZY33LuNUUUkRTfvmbyncuPKoxaWByWZ7zQVhWEJALHxBkxjVtE2ZLuToi8fC",
  "key3": "658omCSyYkmNLXgd64ELtGvpY5GSGEL7P3kqVTXjDBixMd9UEzsvSX2M5YEaN9XTDfzhPtW3SL8sgePFqScp1aGB",
  "key4": "5qSWGm4ffAjpgfJH3gzR3Kmp1j6x2DfQctABVfgsvrysdpMEyAwRYvQv6WNXFFWUoanA62iBJKXGHjFF2V24weXb",
  "key5": "25omL88EpQf4xyyKyt9eF9fQ9x8m6V57ENWGBTYU5fxUzZEuzr5S8cSYSH9dRhLpheus2H413ThjJKs2aGFE2Wqa",
  "key6": "4onhbbFoF1CSPE1RqPNbyWdJowPVt48Nh2As5DNNmgh9exgcqPKTaq73rKD6GDmnR92ce3MyzmqR1HB1uJGyS4Li",
  "key7": "4qteQcFpYTCKup41mQoMHjjqKrDEWU6a4UFeQwnhPnqADfpi9wYx2N6C5ngv6yNYezNt8rYG8DUJX5pyAReih3VV",
  "key8": "4fGTuMh2ye68ZrcdHpRSZwWhgprBF5zdreMr6CwKZtXBprYbQCaD6p1VG4sDSZ5fxzm44rFYSgMW1JgmcY7uqU5V",
  "key9": "bamkEpMu3r5RhLbUoPrNSPwypqpyEvmuLTFcX7EvEKyHig5ez7DcWJNKiUSYswbeuLCiptcEpZPXKQpCH58QSyJ",
  "key10": "214j3k7QKumqK8irPWjQtfCpELBX6FpxpxriDYAkMpPUUrhnGe2xuQAuFpBQFUcm9qiYyavSUoWhsUGiPNQ2i4cQ",
  "key11": "2PL4QV3nn9wrY9qoh9ojswC776vfsXWr3W7u68APyUBSdj8Hr1vJkEHVy9tfxBdp4XMSaXNmEEacnDaFj8KRRvfv",
  "key12": "33NKenbmFxjE4LtfsJkG81kbVm83sE7aiiMVWNFT1ach18pnfhR9pZYXc744dJiwKAWEKekvTb8aFS9SMXzQcaM4",
  "key13": "7dq1DSdQDXfP69pyL5apgZUwfWNrDH55icjbdGQ6A1uR7TzyNJpHeEo9CniHUaiVXfibj3PMp8bCrahHxocmwMG",
  "key14": "22NmttmetW6T5KgUyKv4apPrnaZcPYrmq1UHRXRsYRz3B494hM2Uov33PKbrHZ7pFC16zKMirA5PdCnqJyFibiNP",
  "key15": "2j6Uc8z36tS2a9TrQ4DAujyfiNVkuwRmXMHKyrUVr6yegdP1UCXHuoeCdSy8Mb4BGvUX1N37QCqgGfhdSnzLx3a2",
  "key16": "3HmZqDvvTHnj9SXfWzWFYwDpaTZKTrNHt4e7ZmunUBTPsebPZZkJpQntr3bNC85vW1YmeshgYLQjZUeK726d1S2u",
  "key17": "449qRox3RgE7Lt2GkzJTzmt6PX3yYtZYfA8qzid1jY2VGZqi8hPbW7vG3nfGJXktmXpTKsdAytZDvpT6X23gypHx",
  "key18": "eZ8sEquWJeFZFnocvx9JZi3rMBFLMWnwxwPsi7hT2pPmT9VA4WGgXczLP3PCPVq5XrDXfesDtfv4N6oNGTX2Uwt",
  "key19": "2tazRfH8utwRaKVmDpBDi2J7eWqtmgshNu1PMZJNzJYGK1VvRyvAHuwxftmPkV7NGxPs43rjjoK5iMuzoKPjB4KY",
  "key20": "2yjJG8g5YyjSwKrmzRDLjPZPPWvTzXGSEQk58K2W2mycezwUWTkR579BpK8hVXGLZELtiAd81bLxy6YK8HdDJBa7",
  "key21": "26MstE81ppjJebG6ziJerDqcSaXiwbe6YxeTgF7ecwJ5BCivXffHDAM39oDJwrrdjqpheTqcRLGLugAUUSBJ1PxA",
  "key22": "x7DXuxkfjcH6jcktFY1LS8tiihuRNUvigKrnMnb2yRzEDECmQBVXQCTBaLWBn2LEsrmsZoxy96XW97kvgmHV1Rx",
  "key23": "2HLAAQmJd61Y7fwsfoC7o7W2iUmF16i7GkEMnZXZHwwtNKHQ69urFVQdSDLiv29bEZTTgniPdx337uNh2RQzYWR",
  "key24": "4b7LUrmYqhcL1HZyDVbwSBCnAL8JaMPmhyed8rN41jWYD7e5pKNKizjmUSXMvnRr7WmNikNsRsoBP1q6CQcJbzwn",
  "key25": "EBCsWfKd2zFsAu1SbaxwPohkKkPEbd7NnCaYXL5wkgbeoHzTN7nHLWos59e6sewMMWaNHuiHNrd3R2v9NDD8TZv",
  "key26": "2m8x8t4PkYAJd9x3QzsXUXcTGq5SnwGsfrMgE8b9HG5tR54Vnqp7dRgUidpsnoKPNtgkNbmFj6EGnqcDDkYTMKBJ",
  "key27": "3AsdiJULCfAY8tszNbvcZbRjzgdGcsLR9VJ15txKf8zJjAK97RagN28CrQeU4gDyLmXqMtyaAzLQS4EDah9zoa9E",
  "key28": "4QR7qFr6pKiVLRNfoPzJGEya89oFSUUyt3ac5dCYnECUz2va1Tu5cxq2o6RMbixNVPoW3mswgd2FEUcoHVBeqCY8",
  "key29": "2tbQu31mcD1WmpJYApPP5rfWpwq4TqSJzkxJxWCwQe3RHWxWkmBYFcVTZ5GdTdqdjv6rZn962ATuRAPmTF3PpgaR",
  "key30": "BCDEHwVPseR4BpsiQyytJA5rU21fThkCNBL48CXSTmfGZZmo6uaQdqUiZV19SsqfJtaWGU3oqt4bgYwR3zBFNpW",
  "key31": "2bQVfwXGpsgQZ9PbvpkN4XWWDHqeFFbpekAmadpYDwVR4tpHXkTd4H7XeZudAS999dn8wUEvi98sgiMj3E18P7Eg",
  "key32": "4b3KZx5v2fa7NSzN8gvi1cXaRGZDntWwfrMKdyezV7CkU6LdDBJsXjHgtD5P6ZPY7cSiK9eikjJH6NfU1Q9ncwZH",
  "key33": "5rhq27i8whstBNM2zbCEciUd7Hw71yDMNV28RZt7z8XQn2xpEgBir9ViYXdexqZaUWJLTbX9RaEnfRtbSTnUV8Ny",
  "key34": "4hueMo6svR3jyiHt42WPcuC8nWSHm4wQhL4NqLQLnMcRLa2XmZhHS93c1t8F2RHXA86Bj6MgDaFi1EmTmAEtNom7",
  "key35": "5cFpunVDF9o49U4wF58Pv9Dv2fsny5hCVJVwPhC5EFZ5apFdfchGBtiScNccYhNPmodUVyFp9zv5EN5jPvQbEvz2"
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
