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
    "41orhTFj9jqvoY9CbiuP191WtqtcmqQ6XtkYEnYCMABnh1nkgR6fq2Q2gN8QWUEyvcgBjKA4d3EkcXi87A7GL7sU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oZoLFFdM4yKUk31LcY1FJ63A4Rvxo1BGUhCJ35eU9qz742Tv5y7yycMgWfRVYc4wvY9i49rgE1UNjCyYA4Y3SEp",
  "key1": "3dDiqMXiNavjtM5Tf4vs41hCBohTKq9J8jQFMtJ7Pka2bBwp9RXU7GPtuwYdGjwFBQkVywZi5uzMBU2jQSJy2Kyz",
  "key2": "3UVwV8QrqvKAGh8KUEHNx968SQfENun6cTikk1uxgfPoihKA3RFz5hbEWxMdwWJ7Ws89M6Y2tkaqBnfjHRAHJYQc",
  "key3": "5uiEfckQeiMva21N46wHH9RTGnMbM3Km34fRczaBdncagymfjPx8FMqN8Z2kxvy4pTWTbRNrRm5bWezC6FUF2hax",
  "key4": "3KjxSkXZg7bYoQMeEe2t58ZL8kMr9nQy8QkVrfDeD5qtnRNzenxVSvqjseWZCtCVe2DFpjZaxzwXjb69c2ph7Abn",
  "key5": "52C4sLvi5Wu6wxGRx6aPiZfKENC7LRnCbF79Etb459b7YumLoc4sdXra3pTYMGqTHNZNmVXQMK4Uzn5Jq3Lhnvas",
  "key6": "57qc8FuseYjjciTwgMecZfUrt9jbPAk9Wduu4RSbTaGTaQCyqSr2wgTWK8yTAUKj92Rvkk7v7mxSNHcfSKqKpSzR",
  "key7": "2xhpW5XsmoZbbSfdfWggTe1NCtQfDAaU5XgE3PfLo2ujh3mBfou4JToTTFfN48bEHQMzRRrFNi2koywo57yeMrp8",
  "key8": "4x8McNcNGcaqNSCSDU4ktpesZjPh9vH3eMd1J3aVL6ZURC2sEXEpw86eQ1qtnqA2mhBMCi5KCQ8x6j8NdiT5grp3",
  "key9": "QYQZgmp1G8UBYX3AJAjJhVnM4hzZ77CPvP4wXGUWbZs9h1aDz9xddLyHE4Lp3iUTmLrohBxwrZrqV88uah8M3k7",
  "key10": "3LjfHSducGL3axLp7Cp6pD8KMd4Cjvim6pKJdS5RbNPxuBNXo7mFLYw4StG6AGJKnDvpQaNGeGyERY5bGzc6wJA6",
  "key11": "3ZvBqVZrvayGAqh8GSVJT6fEVxGYytP21mNYhoJSopVhZwx8CacB6vAFhEq7DTxLR9hGLir3tQuQGPaYfTcqiAXn",
  "key12": "5FonGwLCfmHZZAWzrLAb6inEkn2kq6LPtMyzX9pJYsFRCZaR8aSeRA4hGrPw217ocwXLbVqxTHFxWbdWGJqVN2uo",
  "key13": "5hsMHLvtqXTrLxSLbNjfEqk7ALwToeWu4rPiezcqwTGdnMJ3M17V74TY4fgTXw8FD6FNfAqx3KuHxgZLqNC8v7Gj",
  "key14": "4oJb8VAczocoRB4zqsCSU6ug5r6a2JKtYKCfPRKbME53izVnLFLw7NEq1BcT7BVqxSy43yry4hMPkvcVutysry2D",
  "key15": "2Q88DKGUSG4oLAkXU6t14U2J1By6u8TFu4sPR1HArhgekTtpZSYMoi5NVXUdiwMuoNvCi2gaNdt1CduYJcURV7tJ",
  "key16": "5BKE2VTj3mV9vg93oGAhCygHqNZ3Q3M94tHW2V5DJi9YMwg5oWFRBhF39StGqHSme5GZXHWSxjnkSmNjhYUU4CnD",
  "key17": "2GPEd9r9XqYBXnBfq7aX5KsywaqX5JfaHJdgwSrRtwxFqBtNMxkTfxjebDfLjxvNEPUV6mfC27txREZeBdzHAdze",
  "key18": "4TxbWL53fdnkCkvSeaD8ZDqpbGn1BoouCBjLdaj1awS1fsaYGf1fR3gSk8MDtC5zSUFEBmEESXFiUyGJfiyMtb1G",
  "key19": "4iHPNeKsTXcgcHbeJpxSmgdBrTBpbEk8hhK25C4H7B5jUPnbzvAaseq6v6N3aGWuijBiCrvJnSsf3a639tZoxjBd",
  "key20": "E99oeaiEL7XKVZmWRR87Lbti6p4r4dh3sgLr6UKqjsUw7imHrKARzvQtyYKx2SNUyCNb4uArdhM7CFwBS46w1Ed",
  "key21": "2G9m3rGGus5pMqJf5XCCEzxxVMRQ6rfBX8NNYhUJHGpkdeCCLuD1gUfGWjxvmPmwbwghT1EgwxoExJL3Mz3NrAep",
  "key22": "588VuSTXTveu9THNaDRASCfv6YVJbkuu8a9ZZamrPo4G9v5uoZJVPC2PczQL1UEfBUvcqVu6BCVVbi1PCUUQYyiJ",
  "key23": "5i2wS1ohYhz8StozdB1Ei8bwWM6nK4h3nCvsPhxcuNrjQBrNdF7oqPceppuSaBsjVpXGR8XmWC1GWzbdgzpvuxsJ",
  "key24": "5aeAzPv7raVJdSf5a7WYzD79M73VesYTeXBX6ooqPqEYzdtHrJ6nihzcjhfCiKM69zPCVUMSU6cKgTiK4YpH1cDL",
  "key25": "26PNXaoXHt4RW1ZgWzsrBHHM2vuTkcGumREoRK7iJJL8RhBZiqWZjJsM8DWMDNhcFDVLEEww4p2B3kS5SusirRza",
  "key26": "4SxekDouHEhJ6Me5fzQ6ekucyzKXVGTWMpQk71wiobeLF69X6Wx46qUFvUK8Em9hmWghvW4TzCUsEsoNMHTgFZtu",
  "key27": "5M2368BK4yPAp7qptEaXC6xdi5c5yhwfXaNF1zXq1h3UEkP4GFEBwVCGPnZ1ivZjLMyW9bDWjhTwvciQVHxHPgoh",
  "key28": "5qNYcWP8XGDqiV9ep4XGNL3ixpbbuP4jxxU5Jw4JpZd3vbu8AezvHd1wcLjL7ytVqsAL2E7xpUyYaqtM5khYrw5D",
  "key29": "LeoxfX1Gqn8C85a9ojU7VtVA7EoDeVp11jAjkjo6GdWt4oKkpmwDxkihJ5NPQTchkKtEFdZKSUdu6dCYu7ywHPz",
  "key30": "5kXrHW2HnRojNJMGjZEBRw5xGXwkWux66xyHwfRusob3H4gKjPYBcEUN81yccBazx4GLo6F5fonkFoHaospoNYMb",
  "key31": "3keFRCydDxtxbwpCAH81VFQC1U2uVgcMU63rqky6UbBBrptyikUVkbJH49AzQ6TARm5RN6PioBv5TpDJbAvBXnqC",
  "key32": "2Ryi6Z2y5teZF6MY87REJUUdxuDMLgbqJcDMdXH4E1NEHXvopv4PUqh5VD6duq67AjnY3sLwfxCEc8HMjt8T2jWm",
  "key33": "5zFZMLLzMKbAoKmdE8sgLd2ePU5nbj8XoYzUUXgbpHjFzpkUPkQGCw67enwm4fFkXskJLsi4uDHnjDbtokszMpbZ",
  "key34": "2tkUDxYZD5eTeK83PAP5YwwkLstfDsspDTLuExFVMhLEe4e4LSTAbaFjnetDeMnwZsxJCnzP9iGByQ8g9a8xGJ5P",
  "key35": "5rY7KMCUhzdp8JLff7RbnLFJM1X7W1ek9GMwEiDnLSztQQUBaDPt38MHMGrvBLFosGfaPhRcrmxLJYsz7ctnWm2D",
  "key36": "5DKtj4qLKgTZdBx5wfcMhmtJ2tY8LkSucVxa9Uk6F3oNQgy2erT67eRKh7LrpUstMSdbGT5WucGwj19WvxNjRBuu",
  "key37": "5qhEBRLxH7w3vMcAKkkxzd7RVvTpv5b3pn5KpakhfYU6jRT8WD6fXMVKrUXnvqqpjqKoAxXoFyHFBE63mZPaP7uJ",
  "key38": "5e1KxP8HU21MFZ4hYLdU4oRokH5i2hZk9E1j3uopLaa9sfMnxwRL2n9KuqbHT1cwzu4Ku8bQQNG3XmtUsLf9bZMw",
  "key39": "vGAEV7W737KvSz9WYCYrPGq28C8GsUH6qSDs4LWQXPAbKtzf8qwgeqEwvxbC4VnFs3VNVFNpRzUu9zsKJJG7seE",
  "key40": "CkuvBwmhzySGFaKFMW6hkuhY9SmcBygTPVy4eRAtMfxyqe6gZX7aYQrGyQ5NypEMPRrMdz32JCQDdyxTty7TxnY",
  "key41": "61Fy6aRSB892Bj1ABekWaHjveoQt4FXPbZyJTrxNotb2WoGi7KLwG4WME6C8BGSpjsAcc4v6qvbTPDreF9x8RN3Z",
  "key42": "4ciMJgxtojd9UCUL9aD4SFYi9qAmMemumxjAryx2ztC6mXUv7uVpC697Eb3abPU6HdQQkfejonQKsqCwZtBfcRY9",
  "key43": "59TafocVTYsdTGM6WXAKUp6kGuc7H7r4tWGHFX8Taxt5AageeXoEkKDPPHJmLrocMFso4sGuVayLs8Bgtki7VjCz",
  "key44": "kEdYPN5nD27Np1EcpXtAZF75qpZibDwW9majiofKf3cC3nV4mvF9vHiQqcwBB2ULyRfdmCrJRvAZNAVondmQq1L"
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
