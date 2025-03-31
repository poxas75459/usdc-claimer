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
    "2UvT6vZ64JWg6RobjnqaKNxojJybM6j7vtunQygik5cTWp4eJwGBxqzEYNs72YvNVqPqU9ajty5rvS1Dg2boyvhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RtckB54jJ27vnXe7MWoZJGiFTJvTA51oHdLgsJDuWQxX38U9Qtd7b77TBTC1pRjuYWqAWLwGScJ7BeCdbhz3gaD",
  "key1": "66RvAHqLPiZBnKNjgTU69nTEDriXvk7nfzHUxHSU1KSvXXpTzkjS21Lcjo3oBv3Cjaaf53xYbCeGSx2x7gAMfP8z",
  "key2": "2Mw2vwT4k2j1aWjJqA1hDzxgUHw4huLo6mCCxXJhgJPCyUBQbVg4r2cc5eCn4bo6i8fT7UK2pz8PVf7EsxB6wbTJ",
  "key3": "2nB2fZ1SjL1YpwxJ6TCCkRLeKtPzejEJvDSLURQAn7K5U6qfgJwi1US9uESYftzRUdfrZ4MhzEdJax3Jw4SxLk3W",
  "key4": "3qap6yMJnme2UzJ1ZmRGWagRjVpxNmK7Wg8nLTMEpqDs7zZFoY4jeSYpA67i3D88nVtJyXYAJ46ZEUA8gHAMomTE",
  "key5": "3rhepSfxzTa3ZXLftm12xSYSgqLBt8DMkJVZo3ZnyEmT3jsYoBH1BE8NzUJofXMdLSCabDf71SQmkLA3nmTGDLxN",
  "key6": "2pEMvyHCyrjspuZ3aAwG6y85UkoK186G3Fa5Xq6tRD6vLYzS4sDhnSTxWenQGYiVaxGPiHHGR4wULnudRdUbTvPp",
  "key7": "3CWn9qRay6yEzQ7ERwmZGRGuJYXgpYZCfu6TEzpxvhYPtvoVUXWiB3WQ1X2uE8TBP959KMZqMBf74pFbjjMtgWio",
  "key8": "4f5YQ1ckq78NzjRq1CvucHSJVCP1aRbiBQGFL7uJVFnk5JNdnS8JopAVpE8uQoeWwXtcGVcTCfBPwWMM3ckBUJUw",
  "key9": "LAaFAM3mF3zvWT9ho9gnug6zzte41b6gW7PMrhuretnUHmbmcdFJeTt8F9hm41BzNdYrJQxhCgwLowdN1Pa3bR9",
  "key10": "3DMmVNMuWXiM7WVkYVP2VcaevrTbJGwoMhsab9hKosSsGCoU76dwh7BiD2VaeoVNrTB9fjweDigu6BCv4ijSH86x",
  "key11": "jy8Ta7tjeFr82QmgEEbLmtafw7C5RagFLiW2nkujfyhH7mcas89oVigRJiwhCyyg2eGUPTdVoy4gUKyCJeuyXXy",
  "key12": "5riBTEb99qwuJd8LfMGdfMbcNQ9JGN5bW5HFeANRAsKRHdEiQETmz7cpSQC3jtLiTtoERH722ghm13JupTHTvQqZ",
  "key13": "5LHmGjGoU28XwKXskBNrrUe7CYr4dMeyLUiam33mbz7LhU4szpx8DS3oo79Tzyy8iSDaXq8vTzqcATN6dx1pGJXx",
  "key14": "5PXByrT43WsVTF3EBtvEHMMe9C9v9uSL4cH8TdypqYyz6K8SXjwq9BRZYbm8eMtG6mHQ8vpAr96HrRGgHp3JbQMy",
  "key15": "5mDaL3RP2ccSoKURS7rBpBpBrqKSrab8mm7dY8hiBc17CyULVybYegCtHWpfSzmKGkQs12T5D9QprLx9sYRVizjM",
  "key16": "PVBh5utL9mWeytMhYg6f49d8g2ukSNn3Q9vboNFbBDVbM7imSnNRk4fTGC5uXm3mYFpHnD1qgMH6mZ7nFsN9dQN",
  "key17": "4VejjAG262Ux5Dzf2tcwGkaEfEwxAMF6DA9K8foetZzQBGxdXojBSxddTRxZoavjNzsrL3JQs5VcNH7TkMn6GVKM",
  "key18": "RN8UX9K1Bbhm7dTyoF4Sgv8SS5QdbqiGF9YqHATmVghpts1hStyTQos78EhjfQUQDTLV57QUwUJ13myWmvkQbZT",
  "key19": "4grwKvwRWkzwR4dB4uMx8g77yRmgyFndF4KSuPaCiBpYM1g4utnFKKt64KD9ruAeeSuUMo24bbyYeKysNcY4sPDi",
  "key20": "3bFUSmeC8jFBWcCYiksAWFhKF2urs16u69LmkmR7GwJSU1xxPb7PrdCFhGHPTXn5SLdLAmh4QzACKK7hFX27KMgR",
  "key21": "2KbUfiJN8Tksngj8rqK9haRvyFjHAY8wYFhR4gqVGkLDvNxCoCMH77VpfFAByHzNRKPPrNNvs1VenpmXg9B83ky5",
  "key22": "5YEvMvv1zt6QgQg3GtKx9T6Gc3g2iSUX1onmJ7TLmUZAfGobCEyHXxL17349a1zdi6tQgqtCxMsgAqm5JQx1Xmd",
  "key23": "2tZ2T2nUfTHihh5HMurZE4tr2XaPCaWxD7gjnzhaqLhLgdShN4NGHZu8svg9YJ7FE5VMmiSvbwAtADvD4YnpeErd",
  "key24": "26cKJAy99g5R3i5CxfZQFDhHmPJ4yRKaJWNXdUZDDBgkshTETLfbgCnFhK75pZGGQLdHpJrnCtc7o5jpph84rjs6",
  "key25": "63pjqNPV8mHL7bzWv57Ht6JzWZpqy7q1JFsRoJMfChyN1RaPonK9KaJbrc4hLH1Ax4hsQVDLYH5yd1uJsD32CpPg",
  "key26": "4GQDnCvCDq1wkfmfYCbtsQRoQRETtN9gXVuPKAAZ92xqDyFEyqSNpmsmNFoaYKhhHM9veH3K1ZRGCy9AFfLzsGNa",
  "key27": "5tawTD6VK55gcUUzcFXqx5hX8ZY2tF1w833BRaAwJoAGPAKd2BnaMbtFurG7YojfJ37qVVquTcGKRvUn2CcmHVjj",
  "key28": "21TvKDAyQ1Yt8SABWLRpfyTSCjL4PQXcSLiqPgGFMADGmp8FkXah1zEgRdjVJnZnimtRvvzWYQtbcgyhvftkR5FT",
  "key29": "2ZWkpNbRHNxg9dkD33wvZgrXoue1E1GND8JLNKwCuam5U4vP9yEq5QiViQ5LGLPL3Z7AjfpmZotGte1KgQRBSMU1",
  "key30": "26QkmJFPMmRyxeiqNRouLtJMJBBgU8bPqNByNVkaiYcSxHvFBT3iCrdwc8zWzaHD3s12rNZKSYRoGKBvxhp3xniU",
  "key31": "2GGwrNgYfSDHNMRrvXQsgUE5dk7SwtmniogQE7AGEzfGn3zLHTdeytSZxj9LKjy4ZhzZMLEb1VbPnxSv7sgp7pWo",
  "key32": "25ZwhGrZcvyNkzm69CeoojzwffojFroX8vaDB7LeDEJD1nfG1G7Fx2ELidWGpjL47M42fvdYyE3ZAqnNnUefZfwZ",
  "key33": "4YGUN9dFikFK6Rppwyt7MCbKtJyWrb6b15mN3ifk5kybFSGTDDN1YRRqukXE8ftyY5iUe3BaoLBV8gELbAunXc7p",
  "key34": "23GvjS1QbAtW8jx3eAwEBhJZYDDwHoc7gFwZ11dLXJyHmFWvEKrJrVKaTUFhAYNd2jZC2jQH3hNksWdtYoCM7GHy",
  "key35": "YzPL6ES42PMfuWK7z93u6igYCQWxGtz7ZdkZw2gJJavb57YQwF8wsZjSFpHPXBrqyrMiEE93hBmczccrDXFY6ca",
  "key36": "5GMfqDroethYzY5gXHRnYHXVQLqF2TERjmHbHREfjoZSuHy3wMpwrkAu7TvTZi6TwajUzATk6cjECGSJ9idkpQRH",
  "key37": "5FpAnXTiCsvBAwuqYkKQVsWcKCJUbEreVa6cTWKJ6Vb9u8SL2oY7huwYVitH58xia1rAn7q4q7pULWpxDUjmGLxh",
  "key38": "4RnSceWHiN5kguWJMWhNYCX139ttBM2oif5zzv2yBTtUZNot9DkpbzfQBH58Na5a8cozC47Y6JJCvA9TzVd34Eog",
  "key39": "5XPV9p3W6EWQ7cPR947Z9oVPoFBe2TesLyxSXDE7EjPSLPAkgZQ9RzjWXYQKebwd4189MDbrJHj6pHh5GFvGYbWB",
  "key40": "22fh5JPghJSKb4xhMCuDwhCTvgcGRS9Evtr9MKnpvAN4D1wbadFQ6tg6VUasfEabmLyQFjZBo1SEifiotZqhHtet",
  "key41": "3K9U2ovWr24dbwQMsHW16onBRqRd2XY2mD8SRVHifVD6BnykrEVcQDLCL42LpcgjqbRFhrQ11R4W7SwTjSwuxUY6",
  "key42": "5zCYZ7ewCKDZWS94AamN1U1gxW2JUkAAi46vxp3CSwXWwfUxwFfyxyW86Y7E2FuZbp7z7TRvrb3wAe1aPMSZe5PL",
  "key43": "5a7dRvouySb4tRneCuhcoYeP1nYmFcWycHMmf2j8vHJ5BJSZny3dNWQ759dSuKfp1WiiQFdnQen7PzijqPgz2tci"
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
