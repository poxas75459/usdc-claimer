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
    "u2R3R7sSjZWQsRi3pLzZ1ExpQ6zLJ1MtAAHhFNqfW6TespJkpTDdMyUVmzRWMGpPXwJ8QoKuGDQtjzsZADmMzHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ceEAm4see2ga6M9SnCsSuChCHqeXbBiVJx1sT9XYDmABxFAzgkM6gM24i22W3hYHYXaeNWUwNhR4h3mMF7MR8u",
  "key1": "2Vkv42NwuymADboK27LbpBWR3PeiQHEtJgUYnb3z5TYy9gZx4hEt8UAW8nXN2mqeg7RA2P2b49PXS5bknoqcUQKD",
  "key2": "5TvmixWReMpUGU2SVsqxwWHxGMWuHoDGDSaKak7nNFjUR9J9pbB9w4nfhbTdk8eAR4KCah7vHMWjVendewD9yfem",
  "key3": "4dLPn7atGnWA8BevcyrPEpb5rFHpkhe9wcgUgf95yJUn2acxmo78xcNM8VYDTCcTpWPJ1wtWpARapbqVyMTXEZqt",
  "key4": "3XYbLMhu7chDEfrLoFwcFiSvH34pqKoZsyyL8NSsV2VgNrcnqiM6w5TW4Xv7JBDjECTRmWyVnnxJJiyujifcppPK",
  "key5": "3twdjNFshunU5ri4YGoJoHUFu5LdLKHP2w7HDH8YgU2YpgYgkd4yo3U383PcCBhEgUKR5Zs2dBdBwwEjgy9kmntv",
  "key6": "35yhESycw8p24vU8WvgyD3DFW9QukivE6QM6AtobcUqoQPYVRftgbYXBc3pBx2AxivFtXBBiqsHtoZG5r2vefEEv",
  "key7": "2W5qWEEPmYNcjgVBGhxAVf7ws7x6SvKh26arP1GHtQ8b8nf8p2pQQwNstmiDiSxj5MYiHvQ8t197V1xa9wLwvCyH",
  "key8": "2rNDJtJmt5wUzEbWUCZmaTbziPEJvjj9XjHwQvMA6cAiAnCWWGm1652LCFrSUdZfkZB3P4KYJRgfmWVMchUpoRMF",
  "key9": "5Z8D7xmvoSw7NMZHXWznPBxA8NVxZq3ocdAUS4cn3HNMPieTYe1DVCRftMbYKAcJfJX4KfPW4dTgaRt8wEYTmhWh",
  "key10": "2EUj2Do2ZfWkcr7JsVQthDE2jQDgNFbmW4KBsR1uwjN7yahRqwrSy5wFM4UE6mYmTMDtsCWo8AYT1zKx8VeVGfSe",
  "key11": "5FZW8MKhUDJwdWE4YSK7C8S7hdu1T833PWHemD9Z1CqDeBCt4DAR4PaTkBdf23FjSJaPnDhsD9pP1qz1K2AnQizu",
  "key12": "5rvrUppZ3nHStWWhZjZwyreu9FCJ24wGXMrgk2L37LJeRSrUcwByUXwHEimybDrU5kTQYsUosHMMC6GNQkexFABw",
  "key13": "2cNJ8keCSKEm92bFx9FwebTtektMXb2owEV3nbS43V7b2qn9dzdMzQs12Vuia8r9c7aLCJv2LRatkKGiQqEc7HKW",
  "key14": "2ca2ZNGvqh3Ltz2FeBPovZ9Vz7SQdVUK6FYqyTAqQcSYaWtMY5ZK5yQ4CKC7UQSf3SXU1Pe669eNsbtPzn3auTxg",
  "key15": "51XxyYZi1xJdUQmYeyZNYiriGdPUevc3Rk6J49d6BkVyApFcrmgwtLfRFyvaiqTaGiHZyQ5ZZqs7LWaVRU4R3QSX",
  "key16": "hiTk9WtKDspqqEHrHXn37UUe8N3tbREwZGpW5M9QKijwdZbNZ49hfmiQmGHWiY2EstCEPz4GC15ftHEuwdjzF4r",
  "key17": "5mf5azBd8PGsQYy7choo1oumredWqZBtweQm5YxUyp3MaS24sP6upveKAz4695PCbMwTEKVBQhhXMLXD9AM2nmXD",
  "key18": "23y23vfpso2fR1cjYkCmUAdRZdDwDFh9wZGkietvBZC8nMTxEWTMLqd1F6SKBVD5SUA6b35Rk28MJNzqQRPWvz2B",
  "key19": "28MSyaXst8oNott1joDXaUqpqsnnL1BZQeovBdBtLAT5yxLtEcB2nRpFUmSr5V86ZSf4RTwGprQLL8GBvHgYaMvH",
  "key20": "47Z9NB8BzdXZSESzrZYZBEmfTsLweReKiEJsvTm4ieYAPioHSYn9LJKnkTH7oukvXe8rxAcFh8cSYqrCqtZfXP8X",
  "key21": "nRmfAwxmMK976SNfFG8oK6p8aw6CFHCGjhu3NntcC3VqAnude1MRqPgJGaAqsGLYqDzQSk28kLYm9DFguYeMztc",
  "key22": "38TrisQFoPtTNnqC3kT2yRrbxbdrkX1f7BFkFUD3rxxT6STeCipuw2q262EnkGszTQtvHorxiEravDmqYG34fbNo",
  "key23": "4nS7yspJCMp19ZZPa8JqNavUPmy3HRsV9ekSn5RVbjsMGvQUbfxuW3zxV91vMkHgWViTCezEVCjpTuqdChuHBugV",
  "key24": "39WfH8nmaWgKGwK57NP5dMS2kSFJve728FHiSQouDUNaKYeUJvUmnWAq8mHkZHYSTRkJCX6TXYgYD9Gv47QjwCN6",
  "key25": "3XEY8DjwzvLD51sYN6A2txzMBUkMmfnS7d6AG6jbE7jKNT8rmNZfNfSBfuLrAuscEpuTbKznEDejMkaUj9NbAMZF",
  "key26": "2UG2Ff63NQTd2tNo4yxx77wiT4GpPaUMxfxzmjGTdX5w1HhGcYTPXNP8NXEfSK1JXgSkHkQ3JMEvsnDZ8yckgLbx",
  "key27": "8iGS95iYjdRzfcrn1oGyz5WCtPfzD13w6itNN21oKrnXkPTqQQEuSpQLrj9jnQLo4J7oTDNsWqG4as3dDys5ZRc",
  "key28": "4oL1a1HA44MdykEHmXNASAWtW3dPNuM6vjgAY9t1RxP5RTQdTz97B1yuATHcMS3kQQQfp1ovfm4RfKBxP3LT1Qct",
  "key29": "63oVuoZ143NGhKLkpshCbhmtKa6Puc9HQgmZjRE9beCuj44qZQQqaFZDEEFdZ5WzZgCeu81UxNAHAVhLxKN1B8ci",
  "key30": "4wS4puPEGrqxfsvgQpc2rzyGQrMTp43Srd4efHBwLugVA2VuKGBRDF34tXpEgNeXdQ48x6ZHdzcwHN78WZWWLQd5",
  "key31": "3EsTGpEv4RrcCzuqxE3Kk1Hq8fRfkFjLxTAWqZrCZC8KUQ9JVF7q4S93VfFgdxpiuTw5bBBHPhw6xYL5K5ozPCMV",
  "key32": "3ucgLWt8bxogmEiebFW3icnmwwyfQRxqKQSkDio1ht2pnYU7vYdyKWKabw5EQZ9KBke9YqeH6YUVZ2zYivbiwj2f",
  "key33": "3XuiSLbP2gfCTgykamaC1cKm1XFSkhrspkKezArXZZbiqMb4pZjTVEyRXwPG9XmCNuQUQLwTk2hGtuYnEQoEciZ3",
  "key34": "qzxVoVNoC5kSAj9dp1FufJeKo1nF5GNhk1FVpKwBxuxpemmddyh5VGWM9kuZhMJ2z5pd8keycFtm38f2wS5Z3sj",
  "key35": "5jgP62vXcZjgjw9NMqCbH7inatnYn88myxBDx6kLXBWao8gR1XmSJpDJuvcuMYh7YrN3pk3a5mWW9P95bFsePJ2W",
  "key36": "HtTvjty74dNUwrnXKPwnSfZ2GdAGbXRgvJZwf81wGJFTpnzhw8bvy5xq5R66cxEpK9ABWcSbtTfHUV6dJ6wDxW1",
  "key37": "4Vsrxq179Pc89Y6mFmpZu49scnNtEKNXebMk4rL8B2FkRdAKn99RdhhpvkTfs4HviBRx9hWE2f41GsyCTv5e4D7r",
  "key38": "4bdzTQfknS4xPSGpJphx2EVsdKdf3AvcbFXsFvRNPkoBb1N4fAbhVH9D2D7K7gerwc9SxXoUTpEb3HtAipvYxN9T",
  "key39": "54uwpmdAyr1YishKYvAhZqp3qwwVSpSbw31casppZbT4Q96VzXvEAH1fUM94H6coxEqahZmiPnBu5rLQtypNdoCT",
  "key40": "4UwpyKyLm3Mes5zcHV4CML2tsJGyR1ocUQC2xNFVU3EZpwhssgpWv6CJ9LgTnfgAopnMLqz2gvKFh84foXmqTVJE",
  "key41": "53Ayw7GxkQVnHgFnjKKZuLq8WBPkpGXbNVzBUE1h83Futuq539woYQBDhyxzN6iKnRQmHCQcQgjJcfJacokzti42",
  "key42": "5joSj8ZeG7hHZC1JQwFWBvqgiPFB2qKbZpsDwATjDTwNXSBctQSpeixty1oAugiXfyp49bW7YS5cWK7AoHeeGjAH",
  "key43": "4ieRmJLv9TQH6rRUhGAr8juz2pCLGTfYsLb7KekG79kmVtc97oK8X9KdJsoFcMLy8FmYHpFaAYocFUkQS8GbSNtf",
  "key44": "BXD4vi9BDU3fMr4JbdczYRoNmtKpT5eqfw5Wc6nmuDm5xjJwR2AgtCk9RvZBDQoQv3dvA4PWPxedm7R4z7PspqT",
  "key45": "3XCVC7BtdN2YNUcnzeHomPhUQQY8fFn8dYwetrauMNGDKrTksNPtLxxnfNkwAyADCxWCq97wZuZmj9oZxRc8ZVWp",
  "key46": "34xNvU4nGzhqMH2XcuCQeG4k2VLAjeQ5HC8TUwVCdYnk3wAhXwamKAuiocnVMeZGfV2pFZ2CgWAcz8w68opGhrSo"
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
