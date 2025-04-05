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
    "32zneHT8FK2C4a8g4yiK9JiNu8CzrFpeERcqn5hh61TqsfFt7D5N347v6EUT5cfJcSpP4h5oEDJUR8wCv5jmdWFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qKJFhPi4N3r5zASk9PsCzxgny8uYr4BmSXYqFS8t9TSeNKuhE52JAdUsUsYFdcBbLUkhTTRGCkDGQwj2iwG6VQ9",
  "key1": "3WQ4xNNj7yZU2k92tyJLyT3FmiBmD2QJHyffeM7YPrinbvjbVQHcMxX1zRpBEebKW4Mx3PWJPhfyLtGsZ9vjSGMu",
  "key2": "HK1og28T23ZHnbZLDPvEhmpxaWjETzwUkgC8gYXTCc13nJ7fvwVQxbRZ1z29ZtbB6LfPftBGh6GVNdi6XeCPwFr",
  "key3": "1PEfewm74DEbWnmM3DVxTPPmBagpLtkTdaK9gGc5oKVf5193RD3cU3vZAL4SC6Vnaxav9nhynTbghng4ENBFQmr",
  "key4": "3URvBBu8HVwFSfvkwbGCRxUkwGfy9HLfyauifNPma9Y7v5oNoZWSqC7RegmtaNw8DjuCjzmMsaZJBUBTcHozDQX1",
  "key5": "5gpNU2bQJS9aRD9S9f6mtDAyyyfQQcs5qmnDXXMLqvFdDuSnuizggRQNQAbmq3xQi1FyMkCfeetEY8m7NpCqnTpx",
  "key6": "4ZvwKRVAYG8iTc54rASejK6SyBXtw4sCnKrWDme9UvEidSAWmy66P2Aq7UYYdVKbTdP6oAzwVjTazLZ8Y1Cq314s",
  "key7": "4A9fMvAdnFEyLXsehmuaeVmJc398BmHpCNpvV1et8C45tkiRenHbwWYrkFr9zvuKn2uGV9EMmLgCYorRcWZyobUx",
  "key8": "5Bi1TkWjLoDuLsVBwq8Wn7NGpz5s7FijAiyAhUy3FBFJxLGE7NUQGMyR5bfk7yDp5PGu3HUkUoUmTnwZoQt5fsSV",
  "key9": "gKcQTcbcZ81mdeKbSt3EpwWnv3cPrdTE2uCBdL1nSo6FjytYPsWDPc25d2xsHW2Mj7FMdvSzvFrok7vNUgppJTB",
  "key10": "4zhT8jfHULBeUH6VFU75wCZR9xfmgrRyZoXLD6hXYUwvwDa9ZJDzUrVfhTay72yL6snjAc3cywN2ihucMgX7TxKe",
  "key11": "3weqSnbZ6uRAFQMcDgvPaYnEjgENZe4KDsqLbgaQqkJEMyKfezcm2YHK1X4YfKR3UNfJuNdmrtSuiUJGuUQFXr5P",
  "key12": "4FDsMR3pfocWZbovLBveCkpMskDLxkzsWLUxbYUko7EjAUXnKbnjMDc7dK3LJ8MoLjiTPWtUzMXCN3xPPp3QgtXY",
  "key13": "3cC1CWbdKM2NbFKGXBCB2eqgELY6Xe1H22o8pNSdm3iBZ9Lx2FXbcmV4kfFhEHJHp7q7uz2aZYFF32DzDyeL2j4B",
  "key14": "3TcdcpHvassavfUZ9GS7fEL3FoUEAEkieJtL3oZv61B2nNXUhtccG3LFyxFHMxYqfrzGLMwFNpqGJnTGPEFuGrhp",
  "key15": "5qhPECW9fy4qZqPt6L5ebgD5b3hjiAYQUez5pUbiGPtD4XCsyuhnJiuB7cVFniUCBsBLYomHz55M8EAAkdBYK86U",
  "key16": "61sqjpdfUTamtDJ3sea17KW5oQowYrWJ23yp5xrMALKd7T6fA7kQAXhtWUKDTt8LsgmdCHBnNgJYnbpWn4ugUHLP",
  "key17": "2gnzTkdQGeZxVzqvPxbx99VJN2KH1auiutpH1AxedGWm6Kqeo6Uf9JW11KaKTogsyGitNQr21DZVgtF7mD9QT6H7",
  "key18": "MUaEwDPQLmu7TMKziLDzaZZq2gkNdZShhc5ncrNKFF4WfQ79pcBj4m7AHUK8XNoDFkkzNzNBzDN1CqLTGQB1BgV",
  "key19": "34MduvZ3Diaca5FXqkHQYCAhbKtD9CzShnY2YW3qaGiLV8NP3ZjftazF5VSKV1ANcRdDgBFs25yZiqixNTQ25zvZ",
  "key20": "2Zx5STgQBCoBmSCrMxMRNyMHXVfhtu2D3xHDtRx85hDCC5FTeBar7rztpsS761QVZ12zvYJM2v6yHndD7hmB6Sc4",
  "key21": "3y58LQNWggqNNbM1MqRKjDRhGLrsfsZSjbM5WLgVbtpWeQgU2gaS8apc2gL2SbTZHLfuewjEhtzFx1x9J6GXCNwM",
  "key22": "uLETe9HJLYVe6eC4fejcDDDmY9Q1dgmermimYZrUJoHdzfDTAus1Myj2JWBxFAeGKi2LEjS2EHL9CZSbxhbYmcq",
  "key23": "2gnNmxdVBJMDENAdE54guy9haKX4iqAd8Tjft6cc9oU8rM6gK8qBkvVem7SM4aLf6LSHXGMYLHsVtb9113o9VCxc",
  "key24": "3Zup4FC5yrGiYypwZmsDujVcVCnu1etQXU9eZF6TZ9oq35P6XTtYPG5ewWcQKVHXNdsWwAJU36MEj9ikQYhtTqVH",
  "key25": "4mrprXH3Lmvh7Ap44dQpy5BAsUAsjvUzGGNnkvacR4Uy3nWUQ3VxTErhYaZg6naFjzJBVdpxLsKWYQZbP5vhwbAe",
  "key26": "2KGjNoSYJkdQHyXDKHWQTo3uG2bF4JJ1PoW2ZabcyWBWSSmbgGdMPRM2a2YD8ZHkSLbHMdn1LuSs8A6y3iJE1WUe",
  "key27": "42kuguF1Yjq2ESmTtEHqDxQfe3eVESrKfzDv9wsfnT8ifU5GoSTcxqtZ5GWLAbBFskgUUjQ7UFJrGEHYptPnywZD",
  "key28": "4xGQVUWUv93atH4QFtC4k2JAR4tUMDuAbPayTR2mquoKvtdeupTu3mLdX8FCwV1kcpB5pHtbooRRSEj2FnNjoQKi",
  "key29": "34wPrvtnD5NZpCJ2vpPvMWeWLBCtEB1ttxRkcai46U5ggiuikoLJqmpvHyyELC9KEFyA3Kjtm5Efh3sYbdV7Dywe",
  "key30": "49CaEQ7ZsA5cYfEBsB7Q4senZPnMk67ERmK9FhELLZNFqJgTP5SovWxLqwGSqDqERDzrQn9LCYvkuqkT7dGaY32F",
  "key31": "5VHNwLgMr66MsFpyPYAmJvYkP9Jg9FJbY4rMbdv7trRWYagkMCH1c8wMGcdknLLgvZvHGzVtyfgzvCVg5v2rUaWS",
  "key32": "J5SiGwwMJaPG13cqAUmUobTpXRfXBxyDox2Ha4upCv9GLCUTkEMCfseKSCimftHRfPgsziXvhxqEj2BbtYS8NCn",
  "key33": "2UBqygnuUr8uhmoaBf7A1GzxvwGdtymcpu9wu6LURdDa9qn5MZ4PWJ8kida2QE6WV6fTpga5NkYn4oScddA9H7zU",
  "key34": "5y5otX94w3pVoTdtvAhnodQmWwrwVhYqaRWQjdy2eXJ4vCsNnPMkD4UP2KW5gajN5r232PDichSyWc1VPJ3PakeA",
  "key35": "SLpBP6SovdDoWJgZskJ86p1Bo5AHmh8ukMZLPRKEjb1pueSH4bpbt5WNTCNrzHJu2R1RVQzsQusi1RsvbrPKznT",
  "key36": "3mh6p2FGfmBLVYgeX5aoeenaVabGqkzwFKLSzanGKkn34hHDCUE38gr6twFK5uRnbtxhMWeuB7AoREgQhBe5KGV7",
  "key37": "3TmKTa1Q2yWk7dbxYHFhYLoSMndoQTSHsk2LzaVZzVsTUaMMRbdXaqCU4vBJ7mA4PSnT8wJ49Ahz6EYBLceVHiwe",
  "key38": "4Bftawh9DM1MmMirvBayWz4UJ8oQap9NJe84fHMk9MX6DGD2cxLA4LB6H7eKp4QiaDuKVxnEZxGEUAV75DiUrnch",
  "key39": "2xSF6S9Q7VKGqxMTLxWtCoUm7g4kjkjcpZi3DWYJTvck2EzWYnRm7RrxcQ9JpWfKNiCxWWWrkc8heSme5dYxMGPQ",
  "key40": "3sgYC3zk5cCxHw2xJuRVrZaLJPWXX5taKVKD6BX7UksPWPLz7nw131idP2anoCFsn6qdupDZajr7rBKtz3VMVi8G",
  "key41": "3mKW7a8PEa36T7dYyhc4aop8H8okYXhb8upC32mLA1exM2nTkDgSPv42yQfoVhg7svcqZGw6Koq6bT6UrxoZKstU",
  "key42": "3Ja6yKQvBDsCw5VoxT12Co4tqWiRbrp47RtUDysMjCMzwp98P1NSWD6TN8tMG66rTdxvjAyNokzL1vdxhi38dwjc",
  "key43": "3HgtbA7xQk5AAtKLBP3wyvohkM7MtCtSV65QPJ7TfQ36bonDQXMBBTZEAzBwnsjF8osEU8215ZG43wSzrrfL3H9U",
  "key44": "62YbUdNhKjogjZckqBA1Z6SZapJ2nGd76og1aiWqo7X8XqW2tBN8KpmiJqqMYmWTrjCJVWCJng88bvfXjJrGHiSH",
  "key45": "3M7TwLNRDeUepRSiYYGKAVyfx1hDNQEnc8XcmrrWajzHQWmm7XFxMXEzUpw2pFyfTzWYS5ENhzHn3Np3vVWpde4i",
  "key46": "5dknTQW6pqxfMZdMCugMJz1cg2o6Ly1GNBXfWcxJSx8564eZwnfKW1WstviE3Vg1FKoGkVPb3rrWtz7jXfqDWnoH",
  "key47": "2ATP5GEzbWFTmvzzEGmpStL4TMtaG5kMZJxtBmpEKkwz6DtCveBuStcWiohHGvP3uRwMPvgf1ca3gQdFvtZqMNwB",
  "key48": "5t7TeZcFGkqNThDRZR7LTJxgbsx8eVDUqBX9zto8aYEebypSmrMCSrhSsmcfRdaaxJEggUEn3h58WczjW6uGjjNy",
  "key49": "5QfqK29yECMxb5a3ZSumJTTS79aqJkHq7s6sfiQcymhx5YNSkwYDVg4tHT7RDuo8PBUSPByje8jec6U6qDBwMKn"
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
