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
    "5Sf8Se52GmXaagNnb5DtRfEd3sFfrz54GuQXJPhx2WKAdkm7XcyNRxMBCf791fJqedcTrTXW46YBL8wU1zair3sz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XCxVZdGrNtkJPMkQaE2jQCK2xwDMWTR1uwRCQ2rWsK9TRUY5ZVoGQfynfdLhFQSFxHLJE5H88kALnE5tnazX74T",
  "key1": "5wSDxahtrsyRJ47jL2syENeM1RpsNTa2ApPpcg6zXvodFfnvxV2GME7d26YCzMAfJNkTi6fA4VDzUh3KbUKP85pP",
  "key2": "5QLd88MeFewdRxH22CQ5qbzBQx4yjiNJcDNDC7f2GBVsSahUqy1v9tHbNg7qjbo7NuLCtqUbmk4f2Y8YSS46eh5m",
  "key3": "CT7g3bKaA1FH28qrinRs5jTtCiikWzYAsRm7zejH6JyHo4PxhBmNk44gagWNN3JUgjG1yXCBuwQZyZToHYsxUrD",
  "key4": "3MFMSSKdbXQYwW9MYV5jx8zrsF9nA2qoYWSGU6Fzt5KJHCCWbXAyie9dVXhtcPatK7XGsaeTGoV3jmQ49x1D3cug",
  "key5": "5NkXx83LyMH3wodMNaaMsNAJL5ekHoJajobdmo1ayzMaqxXVsBDoNWzjhAB8LakXfNAEJZDh7bPW2qrTiFaQu6WA",
  "key6": "3eKsYJEKpaEYB2HziGPtGYZtQdKGvkdXuJPg1s2gnWew4YXbBeKUBz9TSyu2Envz31XsuhuQum1V9MBUd1tU6TJc",
  "key7": "2JgLNPP5NqagU7QNVrbBomksVntf9XhtcvKqbvo4GLfLZYzNGAEhRqvgCMMUZNLQq6rbf18MFci5wTdovTZHXv7e",
  "key8": "2QSRtvg5GKKYCBYJYvBFv9bT9B53vBkcp49gkGqorz5J9fojAfEYGwGrzAnYb6UZBibYq4ydBjuwZLyAdpUAv7Ay",
  "key9": "2PhyokKq3dHURJ8x2f6cybrGyRRax4h1VHGdWKrm9NmsnDUrupqkoHN2ZKgc1KXuTSyuHtZ7gAmk31WQViibBj9s",
  "key10": "3AEptaAuvc6GazWFoks3J8B2xoi9VXRGmC4nkRENfHVRHojTBg1VfrrtU2fyoSykyqW6QAfvu9UjUEdvBCibRuXo",
  "key11": "nLLfD3yunKfL2dRB9qAmX5iW1kN7hXoQaqQVZ8D1CEfgyQ4BZ4Z9sL5nr9DxzqinYehyHQrKTTtHUnK1HF698jB",
  "key12": "oVvmGvPwS3ep4YdYTmTSPg6AdXWCsY6TqysaM7YdMZsc82Kwoshh8ML6eZcLhUztxYVA66oPABzZ1Yafpy59XrE",
  "key13": "4RGVHcnbjHFBZkmkUBgWvsrM894U7KpDCPzMwZTGn2mKRMXoaR2aySgDkrwo85ApWzAhTGrhXr5zQua6hfoAfA15",
  "key14": "2W6ZovG15sT2axKLjFDvn8hYNzTXvMq37NbruxBwuv5Zzn9RwXLbyQ6FXAJrrpsrREX1gtEcqUm4p11wm3Lb1D9y",
  "key15": "2GFrhttiSB9UZgLLwQ1Gq1BSsTdncAvtpycyN2jo3XTroKVaPE8kdzeHBYs6tjH3HUfwcHrDnRWBvSc1amG2N1Ta",
  "key16": "51Gb2r8pEB4oAuzrSb3xRrfi9Z9px64nNurmbtib5DWmDQ2rW4FYLhGwBDaNfntPFHzQx7fUS1PC3tFwor9VyiZu",
  "key17": "3N8ce9G2n88F62mZeRBJK9bytNRGTDqeX2pLwYqQdcD7mqnVaRKzofDGEGeK6fpxbRriTWbrfBfFvQApNwHLYNWm",
  "key18": "2wM1XBH4L3vb9QLcBxbUU8EseiL2M2wWVokiBk9NA1yvr74d6k9U7bcro9ZNQTVAWgxCLYvWtruwU9ifafKDkNAV",
  "key19": "2keQbaJJSihSrhPgLCeqqsg6iYosixFGe86KjX1oqbNXxHFUzWrZLVXfwievYKidjx7DgE6qHGWKqXh7dPFN5NKM",
  "key20": "5dw6R6h2WwkCMKTN8pmtm9rxopmW613WLeq3xnSdHPiQZ1cqJEihvGF8pny1yANbuUJdsy9Csnv1CZu17nkozTqP",
  "key21": "GNUx79ybZuXGpmwMaBo91r6jBhXEi4DM2FTTdF9PYoLrC9uqET7nRhdXodig6HXtsSZLYNUjYm2XWdeX8zEw4Yu",
  "key22": "NjGzCuwdef3Gikd63miE2LW5qpAwTCyAPJayocb1r5tD7GpoWBX3BsqDYD5eDSY8C9Dbpc7PMYSQKJDHJB5iwTZ",
  "key23": "3o95hBpVhXyZZfjgpZSrjHtTp6zVRxDY6CtKdkXRuUE1sj7pD2Fuk8bz8PTjdprKZ1M2tTjbAZCnJKPDUDMDroYy",
  "key24": "4a7VzRSYCuBfR2ntswEsfXtpo5zTu9GXEMvqm7Kqn2dG8qcSnAH4gUpM96ko6MFz4fTRZZrBJdepxbMomo8mFNgu",
  "key25": "2zyLdjaFamaCCr5pw8KGGgjHBWrata8HCfp1FFLZ1k3e38Bqz3XNdQWXmpxq8rGMbpsGz1Eogp3r1dBRP7Mca1J6",
  "key26": "2K4vxW9aprtJofFFCaY263oxyy34EeHR1UJW8v1dNVv9q3bNAJSN9oQujRj1CbqRimEd7VwuTxMwvatZQH2bFbm",
  "key27": "3G8oN8ceew9EgYoh1FYia36n8v6yb8VvnGfE3rDBqg8dgEJgnVY9EyAKkPdS4bN8hNWWKcLLrx5sKdpZfSz7ArYE",
  "key28": "3jG4Ba4ZqmA1RgZdeVEaXcUFMceAUoeKqVUnt2oKcnaSw8bYP8umMKzY1C44KG4s7tWEgCXbVxKiPjkRbqPVGiZ7",
  "key29": "2ZEft9XcnRX5KCnhZnPpYmNJrcav9pWpEwjzg4vJ8oxtmdUqJ7Ebn7T1TbAiqLykqYZRSXiQon65mk7pumAvs9CR",
  "key30": "2fM8ophkBarnHu2sRmPkjFmWLUUp53cQoxVMLMMzdY8SS6C43o3uqr3ThT9TwPe248QoDRosiuBd8hEyaPYxrTGv",
  "key31": "422kb3KxDWRDzeoG1RRFtxK6v4uHFC6qsZ36aV2edbdokb11TxqKiKi5aBLpr9rg1pPSrHcZPHrzEgpYbNmbcxk9",
  "key32": "3nSr1gPBnAA4RYrWrZGRnfVuHrwk1JBmaqqbak55TmMNK5J9kHXdsbYtqM16wFEpW4R85mVgNcP4fsRqVaeKtTHf",
  "key33": "x2TP163bt7Xc8YsvZPGzjNpgpF4eyNDaEDtrACqkkdxN85nrswxTMo7mNgWxqMCUySkkrFz6L8Tzd2UwJW5yUz1",
  "key34": "3zKSxZbbbdUH2DzJqhS1ie1ecbexn2pK8T28yv9xtN2ttBRDP4czb9V5cyoGKQZavCa3MFqLQuPK1GGj6LT93U8X",
  "key35": "5g7tMUDQBARAJFaBKJ14oWKyTE85ZHWxo9cF8aVRWUR2oAjTrp8HCSGS95jcqt7zM1Lan3FPxLeGfJEVn5o4TyLH",
  "key36": "4JPomkiaZ43Z3kxTXbvU8PZuhJANAnzZ4pMVhCPkgedukTotgvm865PfaGCHVU1ZUt9JeXb3f49dQxZYPVUeFckC",
  "key37": "kzHe9pKhmxJRJshX68A7CxwhGVdx3odR3S8g1ss7aLfU7NYf8QNzwvttyvD44UecKbjnbAnUNtVwGK8ZrFr1xnM"
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
