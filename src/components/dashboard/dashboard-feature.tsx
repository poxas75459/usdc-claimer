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
    "4k8dyqfEYWEMKapCVxnCRTMxut6AX3xRW1vyNZmYRvbyc6P8hokWQiqhX2Zh2D1bNY8cHwg2uREViDqd7M116xfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r5cPdW1wCGiCBxEMonCYLgMQHKnENAJRuXh6WoLyBcvwkAQ2ijFFWNUP5iQL9SeD5ahVkagqryJGnn1LJ2Zzcrk",
  "key1": "3vZeSVEukjwyYiE453Y7M6ytCUqBuqJQybHtckPiCoADrJTPy84jQhnB3oJ7ZCqJuKziaXw3LV6d3f8F2awnSUGk",
  "key2": "3DL1pLDpTAenNRUD7z6Bj5n5sviR28XEtnVFZiHh6bArPbzELkewhkb8RiBPRMhX7MtsM7Tj24crmoK3YfmkgqyP",
  "key3": "64mKpNFAYELpDtybgFgoPA4KGm2ER965vsYrLfiwNxWhWgKQRWp5ePttPoLcSWffjVz8jBL2heCnqgRbrBf9QTBr",
  "key4": "67bqju1i5r3BVsnUyg7QuocJiH9ua7zUP5itMRDtE6nChhASe8asy2hJjGejpKvgFUHCmSpZ68QdWX1S5fNejr6P",
  "key5": "2nTEKTrJK65A2H58cVbrhbZphaCz7qoqVVS86hh3EkLXy2DNBQVbodn6NcQ849AemPP3jHMPhF8S6XDqsw1c1zJh",
  "key6": "wq9CJHzHELcmhprBnKKamRx7DYQEfvSoaT3HXj1zsAh9MiAGpk3Xit7x6scNgh3Cg31RL3oidRJMU5dHPwJPVf3",
  "key7": "5K2PDenSNori3bEgwojPZXPma1wAdfAUsneTzmKbShfSr5r8iFdsg6UpFkoiDECjVNpgnH9vXwcCRRPvhocpBDT6",
  "key8": "4CPMsFqZ4VUhuTmjNemjyWgzn7Hn4Ph7vJAoSE9ifzbMGnAurfUosVibL6aByhjLDSMLpuKz51VmsokP9i4eFsUi",
  "key9": "3pJxbnsDb4xXcWQMgyT6Fkvfe3XHBkFpDxHFwpNu1S2SbkvzD33eEsmwFpT8HBsTdGPy8uciMHu8t2mznLysUoBK",
  "key10": "4s6Rwdhn9X82mWJrD2uekTdKyvymXXWkXWBNSMdWz2Aw2kFD6SifWk1bNsd8uEJb388rptMaMDxqmXxuxhNPGyJ4",
  "key11": "55vLutQAtb8Cg9c5pZ79p8T6aZnuPjE7b9GSQfAw5e9vD7obsdPsRATWqZYHq3LDxDTdTjXKhbhzNd8GWjq71HKa",
  "key12": "5fHwvbZrv3Fk8vSfEfMZX8bpfiYs18bUZ5ZQbVTDCFhcXwQ4kbX3ePHKvvP8EPGDjmnu39dmAuE1mdzdKyYx7C4W",
  "key13": "37PZwXZTRPzra9rmstrzf3xPCCzotPm9uz3AKNHZTGw3taA4PLnkdH8F3JdEUepChWEudGaAfWEjVz47nE6fxPvW",
  "key14": "2sUeM9Bh1TBVTHgxno9fjtXzByPbDVNk9G7JWGL4DML32euM3i8oamAioj28u8pniaiRS917LrdVSjpsecoMGScE",
  "key15": "38EV3XdRwfsfeeMaQBf945zMN182ByWKM9eyTzW8BgBqXqAKj6zZMu7Vg9AJXSs312hGVCJVBCCUDpQX98M6cJ9W",
  "key16": "2N3ZTq1E3xGTuHge3WCX9nydxMGEgJWXJkRHhc5NZHboghYzB8ATZSTf6LB1qdYNsi2aLeEmMPnzXUFdEex5Q7XE",
  "key17": "5h7YDLpc6tikkii5KJQUoaaK8YePyZSVJMZ14T1Gi3yAtjcr6wiQhDaPT43VLUPwSFLMk9xvfcNcafdmwPEdFusL",
  "key18": "3mrF2wjUexJweE7JoHgXjzTdFyzaHssreLxydEApnM7bSYZvagMLaUQp4ukMbxCVv2wr5of6y68bmxyxMDyUwY1a",
  "key19": "6gPSqzNeY5YWVyzYU4mRVF438vhVSTbR211BZBUDeVP6KqpmpUN3G8GfmLEGRp79guLiEaDS5Xmk74gKedbSSkv",
  "key20": "2q51xERx24i1TNDqVWixDzWM8KUfXmLE4xfoi787xA1Aq2FfF9YQbDx82yABRF7BJvwEahyUrtgVKJto5xdpPJF6",
  "key21": "fmwFnPaQ6X4dskEbUgGagJj2B6ZJ3ESSJ8R2Xdge3wkXtWtzfrL6eNUdeJ1GxKScfeLn8257EqvE8zNRs4EioJ4",
  "key22": "FCzisUAs2xiE8u2PBEDN3HY25Vgko5A9NBXhuQVpZ1EWs9NwfiZMRi1P3CKxMUJEUZ7TqUmdYFAND6M6wzBR2rg",
  "key23": "2PVXNfugkhTdTwahxuX55g36yHmTeWy5YrzLFeMmaEGskxJkxSRyQgGVbCZgGbDHYuX3EbQ9HRigdPe9r2PN2M7B",
  "key24": "4FBu6FwmsphhLeW7MXBeb5xnRTdkwYBkgKsFiMv8wGhjXy2UvXoaTcQvDFUZrF2qhxPgu4tPrnwMEvk5VtEai5gh",
  "key25": "43zZon3RVEyE6WEGDkYsvKMLYencPT3KJa3ijpMo1b4QobGP76yL3f6URjXwhYfHjLVojHY2tqxBMa1G7ADg8UDh",
  "key26": "2kMAYqhtkyAmWL7VDm3EkYxSRcDHZhu9b33wHs3nnr6dTMScNLwniGb3PzkLkcryw2pWcJke9w3KoRkpEH23fCS1",
  "key27": "4Uzz7fwmwHSUJfJkWCkpuXei1oijaap24dwFQPTp8prHnUX3qxUUDiLZqGHpcbuih5fXDvp5fodLThzE1nsFJva7",
  "key28": "3mqtu8BEAZmAk686DXKRhZWDiCRh4khXca3JQ7o8T5nMxLNaz9hVGo2NZBMcNh8jZgAojvwvyh8ifvHewFdPChLy",
  "key29": "5VfCKPk1pQ2gCgaLrPyzqDZ9NsZBbmqk2GhbHkQdqir1rbbfwSGcRgRG8VzcUU6wW34Px8LTntG8i9PZw3W354d6",
  "key30": "66vjXhcwUXPgRWQVyNm6a8dkbSpUSPnaBeAbqf414ji5fcianrj7cLNQyHPzw8mHtwjKjRKUwmJwEKtChGpYiyqH",
  "key31": "4cxKZyjAAg4bRYPHK5emQabh8YuGP6yxDWFjSAM6hwtzT5wUgmWYNTiPVBcTjUZm9aMkabRhJccwAD3ZTmXzJ5zg",
  "key32": "5aKRK15Kur6yD7UtaGBw3D4VsymX7MPdeBtd9Zf5GN4UfkddNv5ZdHM958WBUTxhuWYU27zbBzpagLhVZmuCFroJ",
  "key33": "3Nw5BYKGfocGn2i6RscY8oKUb7Pk5pFmUtDEjd8UYGAfKsrkGX3odd8gkyBodVpTQ1DG46DwQmZQLGDXb64kyp5w",
  "key34": "4smjLrsoT2su1bvJYda5FgN5KxQ79zSqMYsN6jbdzzYrwwjQMejCoKX2YCsapvRkaabeU34K7xYjTUDmfA6FigAr",
  "key35": "4NpzvT1TwvFkN9oXDDnPjFnU2XVNzEoTMgKwwf4U5xjAGyshBQDaJL8JjcixF7z9na53wM87QkxcNUZkwUbMLEWL",
  "key36": "5Q1wGRD9r5FFCunXDmyr4SoTFPuC4tQkMyxTATXohcaikqEDVoiE28to4MECeCX3dYudaQb13C6ePc8MxxXKPcE1",
  "key37": "58z8ppYdWDwLaMX7F1RxFaGkbnCbAHR5VnAJgekk2cdQxeiTBWi5mPAHQgNripP7ckgj923PXMEND53Zxkz8G4o6",
  "key38": "3BvhCDg7W2E6vMLfVHgrQp4Sc7TRVnzwmrrwoFt9c2AHd8WdgRa15XKs3LEC5RgxGjKYj4DS8aovoCfTPLgtp9m5",
  "key39": "4mXvTHDskdRP2otw9ti3rvytpxzRW7Tjf8SP9KixMKhgwbVnVQhXTEQLiUnXJXz7Dq7PJPmSiRnHPUh52KKuXw5w"
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
