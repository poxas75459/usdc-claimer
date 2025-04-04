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
    "3Z3w5yWJri6735bbqYsabSb9QH3ZhDHh7UKLovHHvXAN5DGcdAynFiCDZaPmqnbznzxenxngVmmsYKKDU4RDAATV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qZY1kebvzimtqUD8k891e57jtvcD4PYiS81kCD75yJW1TpWtyJZbxBdSRhXb91KYDZCDhiJPVURh7rvXVZqvHrV",
  "key1": "46KDtiLiWo1VLsg6izhTg5JLDsFxj1DZ7WyAd1fGZkbYimPFbZwJE1EpfSSiJ4D8WAcbvfaCA6cL5RvbSkrXYxFz",
  "key2": "2RUZiAZuNUa6TsXLiSk66JJM4BcfQ79oyxpFcnrh9P2jN54roZnPDHe5ZdAM297qkS6bzDD7HfRQ6PL7zt3Vk2PU",
  "key3": "4GTbMrh1CvwiBLLGjb1fqwJWN1CHUcny7e7ZAKoZkbpBntifFV6wQGDem2ADsTS3iPit8ggD7KyvMYMR5gBKfEsq",
  "key4": "TDgndPoEU8ukWVj4HsL6t8jZsddpRYSUt17x1JRnftwqd7dbkwW4g4VmVRRn4wo89yonJRAQMLNSFbsrjyxwboK",
  "key5": "4qnj3YuMBK5Sys5sS12Jzryvk6d9syx89zZ14Brzn5ujKaqHqCgRAJyG9w5QACBYAfCAX5mwW9kejXqC1Q5YuUiX",
  "key6": "3TqGqAFKZyTeixfb5PsvirtyckMtLsPbYNVfSU7BrrwH71GMtwtyBzU5bQKHwkowPRiFUU8B7T6DhiLu5CcFqXLQ",
  "key7": "zyqnxGUqYNRivo8QRUMEZt2qa1vNEBmMjDpPyeS5qJcNzRReF8SVHhZYqehcVSsetDj8w7EEZYVVCpokxmw7pqX",
  "key8": "4kcjToKGkF4VPJYryA4HEcg8uUJFCq22KEsyyHoV4ACxm17M5me71xoWSyLj5sKiTnNmpjttwVUueEb3NGgAzVKd",
  "key9": "32dmVGaiBTUJKrHfpbK3ZJe9pkTvGmV3mSjEWLkoN5iCWbKQSDTXfx5zY346wqyCistAEUeGv3qcnydtkSexgJH5",
  "key10": "4pdfUPEdj1E3fSHEBNGhUUXbxw7Hgk2GVTQaoDqTXPGWEqsXSq5z7dEuXQWwkwkgRWWg2YRtJSRd9BGVsABnY5S2",
  "key11": "2QDFJ2LpRwanDjAAv7Fvc6oAnugFpWmfDTSnJuxGAVKQ8AgzMtthA27VdfxXpjGJdXP4f7NLgabUMWWCCp5e9aWS",
  "key12": "5qqBLg3T7bdW23LTj1jp7uW8Ls6v5XJRWnh5NywFm7QADWT7pYxYmUXxrWZX3ygbHCQ7UJ5ivfXJCqzmCGmrpLGj",
  "key13": "3GKpvsWCsj4Z2mkzHtW3uNBrVBJhHwKk64zpm8kBaDbacBPYDRmj2pJTFyiNgLZPauw4qcV9mMmKRBm1u7boco2L",
  "key14": "rCM3L2TiqdTwQkMpSvS4fnGLFSJMV4GDNePErv4EEWa6b3hRrY24LJKejtnNQtevJkVRTPXqAVE97mVZNjBWn8Y",
  "key15": "2XbppkB2wHU8JQeKrjnv3VJqpLf1qbpUEaJzGXV6XsYGWX8hBv8bftLBUqKEcn3f1faB7TBztvbmxpfjPZaJvNxW",
  "key16": "4U3NAmBZeiw4Ur5s6774qD9HDrpUmyVFWCzfdbpja6u7jrd9qkUz59FiexwaX6dukBV1JtZePUNT6f3aLaEGtuBS",
  "key17": "5bJ9cSX3PDxFps4rWmDj6e4qAK2gFxS5gi9EGR6PQrEDkAetqg8X6tSbxBHrJ6npQ3RDQj2TDJFMwMqesAH1MJkz",
  "key18": "2vALP9Vs29upbhgpPYKSraGdvnYnY4Zdes2vAGmnBrUbruwCc2akjAQ6ygk9mnXVxtRm4ksPTbotSk6vPLySTRYZ",
  "key19": "53jgivJyFGN11TqSW4rzJ4f7p1vGFtTt3vfUAYdS2gGNk7FRcKYMM2gynV1YAyNWgw9TuTUs8z9enGL8wYnELJd4",
  "key20": "5xnvZ6jyQAufbgnRDcsj44Xt2Etw23RptLJt4drRjkzzwmT6H959yxV7pGDieYwHJTBQEUxRdtUGCCBBrW4nNUk7",
  "key21": "2k3cvSntBJkbGChbthCmnmsoJX2JsJUXsTJbsAsX7gKwhGdYQ1LHRJYxc5aR1ABYss9pKpjikLj75dBSDzGSRn3J",
  "key22": "5A3oxRKVwm1FeG4vepSMgGaabzGx83VUQBrTSfv4rBTdLWMnLNZ8TRUzd3mdkLnxu7wLqiohHE5VJ2oXbP5ura2e",
  "key23": "3Sg3kQ17Jw9KsucUo45Aif75KyDJqKNe2Sat8RBkTE2YsxhtbvE9iwuzC5N6mTUo3U2RJDDomW6z76C6ZzvjY5f4",
  "key24": "329iVSZiGHzVczNA13P2AGnvxqPS5MWABg1ZPWJovQDSUoyQVi1Y6RnDyCAVY8YjzqcH2KxsYDjaqHa2b3q7EKo7",
  "key25": "49RrNfxR5WHCZw7bptTq6gmmaHLkjtNiUgczJYzZehKYnrTegaUSCQgnDGFmrYyBiqa8XA65mBbj14Jio32ZVvVP",
  "key26": "4RfoWQiLuR4FZdNmhrBphCHrTukYDq1o7R4qx6EfBeCfRGiJ6gC3SkDRfDd8boaMuf6CoHsbN8bFjLoR9k5ULAcj",
  "key27": "62q96y88QRofpigksdekK4rC1nH8NckK2DfobVBAuEisi6mW3WdzBiZiND7Nzzd2gkbaBbiG18jMfekHx5ef7CN4",
  "key28": "5R64HjSGd1xWpqxvhGHoAdSt63PnFPdyhfnVHFxDhYgj4AUBQfKRXu7rZXmWJ65LoeW3gK3DuGczEDtNWwP4ZHWz",
  "key29": "2uVzzBbF35LHpK1iWDsF2aipuqE7cUAuDKvQiukrqxbz7h85pPPY5AGCfV9ZT3w335MtbEARoGUAbhu1AqRU2RhS",
  "key30": "zDRR3boxQUUhzRPHDHX7iAPtihCbH9SE7CPV3NDVXSXQfKq3NASB5bXKwC7wjAeehFhACbKivPrP2dDaCJSn34q",
  "key31": "2JnTz3SdqYWX2n8zR7heun6PN8amuCqfPDrpMU93mNXaszp4hMMpVxAsUsdTPXY4bpkpeHk4p9nwHEq8tC9vPdbR",
  "key32": "677hyneb1enfRkvrpDwwhMHNAMNWLXsFD9F4qwrx8qC2LrSGqJEcQKKUmw5MaTk4fGbmx2p9JwRFsgWU2huW6Xmy",
  "key33": "2dH2Czcg1E7em2EmCsQExiVYY2q8Pa3wtXADYZqkp4nUshLeRgWV7P5px5JhtRdYDpikPtfeKcKTHQJKT5DUKg2M",
  "key34": "5bMcu9u1HN9CwAu4zA33XCgNfKFPR3cs963PoJnbForCVSbLuo1DP2gYRGkn6YKVPx6tY51SYfgZjckHgL426UcF",
  "key35": "2waAEMT2ixczMaHaMBzY5VYzk1GnwNAQP5fCr2XgDMZEBvPUo3jSxuNHnuiSU8fpwXtgoa8X4XAQbmfFdJScu22P",
  "key36": "n4ihxRQPSSEUETUkAt4jTg9TKK3wxg1WiUmXdVJA7YrYyTq5xSbjXrvH1HXKrkTFHytSU2eD5yTAeyYoKkmoztd",
  "key37": "3qn8DzdZM6xLzMNuVmgnS59jUadWahy14szUpqJqvTPBaqt5TGvwoPGv5c1SQkhSHgRTgVnRirKpmyMPiwRpU8Q"
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
