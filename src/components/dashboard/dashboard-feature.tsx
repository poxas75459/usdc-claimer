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
    "2AC2vz4qhz3EFcuMrHSSUe6e8UUmGjDQbsjt8ikoZDS4uJRCv4xP6wsveTdGSAEr8ZRVXAJ9GgGyrq9Sp7FoTh3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uxhWwjQJZjeLDSCJUZQtqwzDkezfYChzfFFx4r6d1pwntUH5iaw4eDTYBBevvMKGUhFw3PCvBynnEtaJ2j9EkKd",
  "key1": "qWz5kePzidp1jDW12Gn42V1aeUttekqk9WR5phBuGeAycwvXhG36TAGj9N6gBPrpoi9RRZ3fpye67yRWpGayvhj",
  "key2": "Mm4s1ei5GZx5Rc9iZC8csrQy43gKkN9UHSLaVFGzbQyCrqM6kvJs2DN9smtUjabMhBzG11gUbtDt2kRdorMdNeN",
  "key3": "2MMwdYUS562MXugs74ogpY8WoSmi9fd2SQ6Sv7bkQ6jWAmu3n56RX921Yxs5DAQt3dtir7TdoLo1PDvEomtx6mG4",
  "key4": "3osFb25bMuN7zDb6qNWwxCwaaSYWXFDBc6JkmNCkjNkxL5WMWAJz5PeBzdyeXWjAAMRk5Pr7zgFRaQAJxYDx4eEN",
  "key5": "4QkzMYxJ2wk9JFVz1cCZJo7Lbkdpchwgosw4dVeovEcN4cUqnhhAfis6i89nKDUqgWNrHiV3tJ8jqiDsGpsRCcAR",
  "key6": "4Y8TyxwcJ4vGHvaPtiYmGQE6p2xsrRqn6Wrq4Lu7icjJQosnNVBLuvyAwtYr1UAcY73oVFWv8XWMDK2RmpNZduJa",
  "key7": "5TuAuVf46t8FtDR16ScKg42Fs7ffGkyRbMUCavvsMPYmE2a4w7Nsqx3YVtSHBu3YWiQSfHSjNdB7ixfG1cUDsSCs",
  "key8": "NwYb63tmnnncwX9A4W8oLgMHMJzcmDoh6pUqduSaTzSwTebKZZLDzeVxX5umjAvGmRd9SDH1ZDebgu8hBxyELXn",
  "key9": "YVf9M3V4vwbvmJebvJ2pJqCk7UPzLUe9crWtUCScLVKMPxMgayzrgQVq4DLp8udxwzt9GAJYSAvyF73Yie7H7GL",
  "key10": "5iVcUEJFsv2X1ZXYkwZMSbg8jF5b3nuoMnMw8TTVp4Cue64NQRCpgtUCo4z4P4dguRh2hNYhwsTTNCEBfGRZhbeH",
  "key11": "4rCXCPaMaVaBoiSKyDb8SNg4xzXrmozR5s6uG4TVLQj4tkzA571537Npo4zaff1RtbZhHC7VZ6YkLyytXKbPuqgA",
  "key12": "LUU8dEm7zWEZihVa7vg7xibw9caCDEdX6xFMh9Tewv3hpxpM32xuooobY9eBhJdetSDAPezKLxPKkabcBnyHFzT",
  "key13": "miY8Vut5WwL7Ks1NnBk1AGNRJQ8aE8vogdq1mA8wDetKXgsJPxyX5vFVfDxjSZqEqFsHbNnEg8fuuKF5L9uf7Lh",
  "key14": "2bMoXn6ZWVk7j6XfQ1e5LHQorDhzQzsrpcKPDtTza7Mukqa12a4DBrymWykKbvHchDJsgwuh8StPcHCnfsf9oeSZ",
  "key15": "4J5kvHECG6CwsE5SXhLH3RSNeGbae561tJg1xVEMGqCGtKuxs3nu1v1BBHZ5B94CRMtjSxkevsRxQH6YzzXcf7Y4",
  "key16": "2e5TS66Dn6B3FHqTPmjjNvfzHRjxm8B4Bc4h4EyAt3H8uRB2FyAN1tKmCnUcyZYdW1b7VSVmgwhC5DkkU736VJ1r",
  "key17": "65duYnxiB2z26mEqWZSU2XWEYyFNCm6y1DbjAWjoiN2nfzCPVA9PShMQUeD8UT7BZn8Wdvgf9ewLDuz2sMvgUX76",
  "key18": "3wkjQ8MSJ8zpfeE5dURUwNRsbP1NRCuYLtfNJ1rriCcsmeZyyBM3XK7NkzdiKvdAzkTWpsxnw9bt62KPnfJWTFde",
  "key19": "QJB8XPmHfwPS7QgkALJPtN62r2sUkEwTgRUifJbRD4b2xzP5PVQuRfk33iEw245bHDdsq5TzQUgQCQz6rCJJHQM",
  "key20": "55YwrFg2gfZSpgNjEdgm1NGEGUJSGQYyBZjRRHqbNpEwFQTfzvCf7Zmh1bbQLFRiy2D6Sc5QYNV7rC5SnxuxEWhG",
  "key21": "448F6LeYtBhcfRmyharoaUyfdxVG6VsUG8FNKjcGVeqo2E1UnJ677sQe8GEcc6yXexQami4ACdKWRnVkDe5n4ctt",
  "key22": "5UjkqGbMkURdipRriy6rR2Y8QPb56iJBFb1Nzhw696qbkWn6JHeGCtF3KGrdqyCsdkfupyx8cmYgLP4gCz7GgBRd",
  "key23": "3HCzUEEiVncgDr1wqqiV8Rv5z8JvgotY3pSiqtYjY8YXn1LFVjgb6z97w3aReeLM4M31nzrQ6Cf9rfU7n2bsn54b",
  "key24": "4V638gavzkDRXgmKPiYRiZHkAd4guM4R3XyWz3uUTp7ia6AZGgTgYv2WJk5ARpAiU8w2k9Ef1zBgkcJg9PXagJB2",
  "key25": "54RKD3TJPGkobCQ9yPk8ghxhr1v2SM4wwQLNLFYi28NaMXccF61NATWpRyF1KTMSp9jo8Za57zLhYancYcu1Xihx",
  "key26": "4YfhnjpEQLqEBqGLqrDWKQ5B8QRy7zk4yKqcX1SbqMaAESg8jbWDgUXrdYG16JqH4uNaWmufLK5KdYukbx85VsGV",
  "key27": "4rdvvPhJoC5Z7wodthaTD5WGCThSdArY9h9yFeCG1ZWfpoeck7et5ocKwT3GAnvTrHifenTU16f2sMW8EzNz5DSB",
  "key28": "4Vrc4VZSSa9cscc4Z8GXD33YZWSjVSr3vTsZqGjTHMLkVogoUAaWAy5BFEQWhhFu4fveBs8MngDinYLTpGBEquRU",
  "key29": "5PcvcXbx71b2xrdSqx7dCcLdNHoyCGrYv9DhDd6vhq2gUfuxJni4nHBiELXp6hUWiaTeTA7CUy68dnHLooqVdX9a",
  "key30": "38LneF3DRdy9VvHsxCQ7MuFNCUiVMVDP2S9ERHtyRuBThyVWaaUDhX5EiAtVEkHDKjwCxBBoYLQQ25BvhX1YgV4Q",
  "key31": "3xg9935bVLU2Ew4cmvR3DnAzMSNsUSoUsAr1YTY2vSf9zX95MpwVVH8ndNaqng7x379Mi1bgvrpTPgTEaAaqYQRX",
  "key32": "3RjJgyv3UAEviLWFxaSHnRJkDk1r5pd3wediSFmAbiS5VPTBXndBpGWWC3MmMRAhQABu75gwe9U1SDHhYFkeWtmw",
  "key33": "4PwMg1wHaWHuEmnM7qwTerDX8sZYwyZyeojp9R8GEj8kM3kVcVsfzWkNJPKNfS2rXDJhxuPYEnVqv6NecED3vPDC",
  "key34": "952bqiUhXxHijnzhGnnYXk78DwbzAhWy9ZYdw41YfbXW6jnFResc3g9yerSUm7M1c3ZERLc74WJZSi95hwqbhHC",
  "key35": "58j1eBKdF9JHneUMqv6mdFonf9M4eE7BUYuNB7b4ok25qoPgD2ksm7vdRiFxxMYzeNeto2mFoPocLaKm3eVS4NAn",
  "key36": "245Dqni2X7v8Yxj5F3vHWdorLtYJPrhBrn93fFRuCK4j6EMJC6ySgHu8hHWKizan9DMdv7aiQHX5tnbbwxmCD3uQ",
  "key37": "j7pdtWmLhEqMPmmauUEsarGUENB5NhP3hG5PceSweqFrgizDVH9oNuC9GifthqoUpjm1LsakXr16zDgzneHAXSk",
  "key38": "5znYzBu6ViMekSPe8jdUHvMgL1T61XWgUz9YKEJmr85fotfixSMHr9xA4M274wmhxJYDZ8Pkc8pnGSCzs4gxjF26",
  "key39": "2iE9vnvijzC4y46vhH4HEPaN7gkdQKJ5LoyQ5xw7sobDh7qRGJSWRcwmKapF6wopD3Q63QDd5kKa5NkYrTk7d83o",
  "key40": "5gQLMuLdBhiQE4xsnsQRDFjGpJqZwcckzZFcNof3BLUsSczJLFn2mSci46wt4599qcg9xPD9GCsNaUCJeYBbPs3F",
  "key41": "3uEERe5RDUmKSKZ9M2kuGC5DfdE79nbtbHMsR2xd7QJhPLtDYvZuPPoYL2gKTGqXdejUiWG4WhcB6mqTjxxawAyZ",
  "key42": "4NNoaQ2g2PGWkFgujuGwPXFqbaRKUdZsqDdcshcXDKyyyuGipVPPVoZRYya7C318nMLCrbiHYaXYiMNBDB5nGq9T",
  "key43": "22zRNKf8mPj6BmFioNJX6Zf7QgGiSvYyQzEve9rzQYTx9jyKef8EjYMgYyts5JiG19guahPVhkVbp8bp8JKpAMMf",
  "key44": "SZ6skKerWmxRexcpYR7UYtvgqoifv26T7VsTJACZGkcaSZw9D2A6fn3NbhNe8ypWd9UFTZRsuG5ysXBmwZArKQK"
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
