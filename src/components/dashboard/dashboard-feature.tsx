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
    "4vNKFDoWtVNrZfmuy2sqYqwvRBtqj5XWDEk3zNYRFfpgmDHy8q5piY3vhLfMj9ggd2N8Qk6MbG7fKZArb6aMSN7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BiMA5FD9zP4ugmRuSmEiP8o3TP8sV4Vbp2dVwgPFuC4qaizVvgx86egDSLJw3RjjD3c8sfaqomvCMdnYaotfFPF",
  "key1": "55YH7SjW7S3jTSvYJbe5ELArAT6s4N18Ma6sMoFNcsgioGpTHkjQtWNSGryRYeDiyvts1XpH6Y3Ay316oP4XzWuC",
  "key2": "wJnQABJaZA9Hbsgk29g2Uw2jXgBH92i9SGoXnro8Tnma9X5XE7f2wFy2khyhUpYWNaYsFX8L3fEPYVEMbw1Jy1j",
  "key3": "4Mnj5pMaijn7eQeEUsG5S72EGCbRepjyDzr2UJNsJioRwBQ7yXCEveN4ndQ7TPo1RRFn24g1PU9A9NeMvL8c7LJL",
  "key4": "3vBnBc3AfHkyTxfb2wYGju2DMecabg2P9JEirV65yED7n7igENVRNo87x8aaZAqSoYB2XgkgJtGVwtcVAtTvPkot",
  "key5": "m13MrtT1wVumDXbpeRXGvEZr9frwPt1mshebri2VcQytvwbvkBgrX74ZQMNPWkwJivZLgeLnSNmNosBoQeLwBJa",
  "key6": "4h6f54SJyuojPmFtPE3BX3dz65iRP2ka2gSUm4k5SLSYduumoayZYiN8RXjZmtaC34XsrEd1RSEeeYqGv2M2VsHt",
  "key7": "2GbLounv9JFh9YfJSZ67SxPLhSYbmv6YLFkEppeEcVaKbx2kG1q3c7rDmy75ZJh7xXE5BRXpu5ASD9vFGtjW3Btq",
  "key8": "ZcbqNG5vmkJBCRMuUt3USynR42nwgi4MTh6Gf4ovPLq7vLq85TS1sShS7CpcZspsvHKNcRHdQDbTgxx4azzCWLc",
  "key9": "5az1naXv7CnSyea1wmJkzXgTWyMp2eyUEmGNf5ChY1HyrnNeK1J634UdVy6nid2FYjN2LhvPWTMRAm2uVQDmMBdW",
  "key10": "5Td39P6rrXNSfTZ2wTyU1mjNPANESVhHTk5e4zA1QNwY7WdkyAHAK9s8jR1KgET8bGKxxLXkbWnhUdHjpd48VtYt",
  "key11": "4Qp6dnELyNxLzF18jjdtUYSHMEXGNTYRSM1CBQfeugY5NeTB69kw41XmYXXyhGiuLrWtCv7r6QUPtb65x8TB8BRV",
  "key12": "4zxVnwYtdXfTko4XyVRA2xHtmPuw9sffNmUyJvmqmUk9BLeyEYFb7V7zjR3VB2GonoqRysYepqkiXM8VstNgDRPB",
  "key13": "66WZZHc7qgjGAk8FomCLLqwD7aJ8URK4tezx55F3kUSj2SFsrs3eKR3qe2NZZDzPx2sTM8e2UKd3ftsJkwEufhmZ",
  "key14": "5XtZ46uAYvaJnoBY883eJ19fp7RHnxLWL5zhm3xQTjainqyKacZ29mypBL2vGt4s1HBXn41NxQrjt4tjpgD3icjc",
  "key15": "59F2AhmEL1EF1YAK6vKyDUFbWN5QaMhY6pfPEbW7PB67HBrDt5hYtKZ7o5qAMHa4XMmmoCp5CvE7J3uX4d5XcQYi",
  "key16": "3Kt2zZWgyPPr4hvE2PZhU6mKVTxGNVqGXrApSjZFwDfWffTRNbcFscZuv5wPdPUXt3z11Y7uBXaitF7dojwDyRMw",
  "key17": "5Z1H3uRDtDE6dU9McQiAgrVj4jGzpnK2EwADSVdTzmP63gVzmadgEJmrPLW8esQAuCt5BXBS9Smd297yCvKeSbDN",
  "key18": "5ncbQpshS3UL8NgkmyqXBRXLtiGRrViNEjCR5S7JAGJqUyzb8pEmXLjaKTgEXEB8Bi4pmvREtKJAGaiTX7yLFZs5",
  "key19": "MDxfmLMK1rxKJ2asz9gLDF7jhzHKRYmhggK4Po4c844bJkdmwdnZQ3gKrXN1ikbbiD5q4N9wzEhzMHMRgvMuEHc",
  "key20": "zWShv1w8Rbv78aAMoV3Db1WErv3KhXLE7EwZecVkL4b3cZ2poBBmMe6EUYtbiS2wxHJ59cgFXb5uyPLmCCaincG",
  "key21": "2Gwnwq99UY1zWbfFuE18SVGsp1eWUWQvizWdDcRCoQzHLChX6mLDr56sM5tC9kNzVbx1BKM4Kd6b7j85nycf8eD6",
  "key22": "4a3TmX7w5k5Uvv5rowSpubRqLwzEFNBYpYUYe9vBTG2ZfVhhwNZy3USzkH8W8iZTdz5W9aY5jVgjDkLxNa3xcAVX",
  "key23": "54wRY6W2d6bU5dkgYiVhHBN6vDBaUmT8p6bBvUHEuT6DMBFM9KAwQ19spJC5ehBS3WXtMvWqFhF3KwRhncQ1gJQt",
  "key24": "2zMM6uQuf8ybx6HzaDYkp2FTr8q7zDHFahXdYvZrTMJtP5JfqNNz8nFEGtRzX5mtDqeziKRQAakD2bHariGjaW8U",
  "key25": "4FoerRLt4BRL3ebMKAyJEhWSPpqfudNwymMPEfxE8MZn2ZDqeUsdp7v6k9b494eQDWAAaJVb9R94ucNrn2EDN44H",
  "key26": "4Kyhkycyw2RQwWQ5knVHz2BWznmE6LxVmM8paqh4RY7XekcYxVRzwsYuoR2L5fpVfUDNaaudH7MZiwCn9ppJPBXb",
  "key27": "2MrP7Kzyy9aDroYxdHwbgiL9LHTbXZKKzEDTnuNDfiFnftmzdfYebDZf1g4itmxAXDJsVwi6Jn9Sd8Yv7zF5XMQP",
  "key28": "4hV5CjQ8wEQv5hdgMF11BmQfKTJCB8LzfGBWagRiHnrTQ2EAUDs6LUiVZxi9qYAZw5vXqjiy2z9qipduJuT61FaX",
  "key29": "5Jrni4Y4B6ZSPDareDVb4wGjGKtS4Jfn1pP1KuctQFe4ndu1PQMX3ZX88JLnaGssjCHtXVYCHC535ooRGWPp4dBB"
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
