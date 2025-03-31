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
    "4H6dRK9aGsEg5Kij24jLTqP8ZpX5oFi12VStcXARV1op9JixP7NzCvLQo712mdGW4Ggy3tpud5mQ7phB6kMWqVQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wDHmXXvN4vQaVbSk5jApbQizC9bMTFGtnQgtJYxv9jsGCKEfn94C1fwmAviCbd5BhDW3sFc2trgCVxdtJsQtGVg",
  "key1": "4xxmioTHW1r7huVYy16W5DUi4YuvyCPqRaUjzvYMGpSCEGJSH4TBcmBLnVdwsgdnZ7aJj9TNyxs3y7NuE6SGQK1y",
  "key2": "5z2vRLV2pvmFEwNAS7WxGgeT2xwnmJf2zjxepHUTuubdwbEuJF6Fi6n2Ki5iVfdLNtGDowDK6YkW3nVZnKQkqTum",
  "key3": "wAFGagrC5L27eaos4oY693yxz4pWKTHeuTkYoJST9gvaF1m3Uvoy1x3esWKb3c9qih4rjQz5fvA4M1g2VKgpYh5",
  "key4": "yQSZEvesAvixebLHhiVRdxkrhZ5XSdJTgFx7mjB8Wrk8xxyJX3cPuYWGPWzig9nSMscXPHcuzXgqiXGEj7kQQ9W",
  "key5": "Ndi8PJ2FDwm7XeRLeRco44e95wHnJD3fCokaHXhZRofFHVzW57yBXVWQjRu4FLrHp5QLjDxdZQBVSeEjQjGmMgj",
  "key6": "5WwKtTvUZBEMyM268w8oUSfz2eVouRkHrkWNiwKkfgCQxXrHy496DzZeaUrEq4LoS4JaDAhu5H43CLfVoj5Yr3X4",
  "key7": "5qPnitviCT7CgvyVcdoq98ffcjSPMgJirRwNgLQjaddy3aZXqW8D5RSXMSRyfvDVmxqPW4kFp2m1RUEBy2Wmuzkq",
  "key8": "b2jXfTERaQdkpVSczFqJiQyhdkVGuTbBBYq6YVjBa5AjUBbFhpnmGNFyid19w4aHN6d1fSFJ1vCW3LZ87h2oBnq",
  "key9": "4BsUe9sxpHbn4XNny7CqdzH6naqTfAxw2nTJQHNKvuqTH8g7LVapgRajdRs2eRunQGJEeFzocTsfaj6R8ecnAujz",
  "key10": "qhTC8kdk1ZsAj88ED52DZaTyfdrsmhBymYiqP6E8meiHcAVEAnoQQp6i2UghY8iGVeEbofuT57FdxdKYMeHkFj8",
  "key11": "2wJ6dC5bpoXKgAmxgZcv1xXCGqToqabVbheX6S3LW6DhorN7sBwJgF6WkbC5ZAZso6g1t9dHTFCdVYYbkfUn2Wmq",
  "key12": "4zzhunkwpfY2yWdfx15KrHmKKd4eG5fySYcs6HquG3EJhJWCJc5V8afCCVUKYxiiPjeefvaKhTMcqdTZ1oebbA1R",
  "key13": "oHaxkbyQ3p3kYNhLmJR1GtUTNYeyXfd8vJoxa1RKmVBB3pEsEMKoXM7S2P5SuB567VuDdjcELhqbE9aXRrWF7DG",
  "key14": "3Q1YFvRpyykDrdZLz6qemrmNRRcPnad5gRxrRwDRLS253VfrHMSRSXEWL29dwybhvzMVbK5Gr7VD5A44FXQA5rML",
  "key15": "5cMYhB18YNby6p7qMXJ4bNMHETpkNwcaR1nnv58PRjzfrdqfQQNRkJdbecSicv8r3QLtXAcVjBc5ypibR6LRFpGv",
  "key16": "58JbTiYAWZfBmEFZU1Re1Uhh8esrkB5pDNunq9ivqaQnpsBKknr1ZCkRNV8dyYz5PnzjWYJNFBA5AMNKxYG8aUjQ",
  "key17": "5GXrxnenxxpRxbbV6GkfMzDfLSQsRRM7icoXzqxxu7GRGviJ23tkaFvoxUAFMZ4zZnnfdmeNLPu2Qysf1X6V8msW",
  "key18": "hytY7q42nF2yFrt3Lev7Yo7WH1gBWfhDpREyhKLzaS69VTXSV1R1TVBuNACA3pqcYUwq3YP4wH2KAS1nvAb7vR3",
  "key19": "66vAM7sYEkBKvvtsoAUJaJD6rP4T6ZPYXmWKoy4zaKRJUrBD5FoH4FuEag3kUQQQhekoFeSaQU8XtzU8Jo15hECS",
  "key20": "4W1zwCNXqDZhVJbGF2axFun1HGXShnTXda1RTCXpFBXpPUBULBEU1TvaXFZxMejvEz2GyZgLVp8hXZ91GfeDFtAx",
  "key21": "2PwAevuuk9RTebECqfcGC919VPte8SXcF56YnREFGVkS724BX5f1SxK57b922gh2ZCKMmXKYMgANWJ9Xm3dxdFyP",
  "key22": "4mekWJT8dsyn2Crxo518zFgNtu5fmUDuPfyHMosfdG93P6WR6DgV4zBAfWpmDYECcr8CitUWkAv5HbDBS3c1MU82",
  "key23": "3NCezMcFuaziantrEv2TmuoQnZw2aTom19xuaEm68vK8g4bzy8YKoqvAQ8icU3KHKaYQJknQnx8RuVKQp2cPmh5R",
  "key24": "3ufqtwrEfK9Jiw1AKpbcv1KucY8ZmF9iQ7BFL3zT84iX1WjfYJ9aymFNt6oPdc7KGSrBx7kLcgHzHvygCBdnTPXt",
  "key25": "3YmwKQUy2QdxLsj2iXSbjWzDmppiR9sGxRt2o6FNNZkfNm8gocnu2DKkCKzmGmxPAj9HHP2u6VD43k5J9LkwWPpQ",
  "key26": "3zCM6eWMvuSdJKg5k1Qaq8Ey7d2kLCr8juXTJfQG7g4Ghv29ww96aSEcWADjQNRomdV4AhAxYyuiQqDVV1LTn7Cz",
  "key27": "2xhRoArhmrcYdfAcY1Mqpq2Ntd1qKEsbHWjBNKtyy9vrRWA2BugMu9EiQsYW3QS1G8twLGWXRMebiFcfzAGaHrWS",
  "key28": "n4Fimay2SVnvKrRRNqYgzjF1qpivmmtnkYuKjhGjhZeWSFtyTqvJuALa2SXXD7Hj2NTPV8AySArp4Kv2133Prnq",
  "key29": "4jWw8ewGCHqk7oyx99Hjzs4LMTuMhkx18qWd6GAMrfZRNVye83FaDqsDrJCBKnfnuVYPZzbVBm7FNsvFeSvsfAbV",
  "key30": "53Kn1Fbvp1sfeUBDiqhVeUaPo31r9m35oQ4zDdMuPwNXcG7SC2bLnY77p9scnwfpHz8UPYrwzJ2h3mUgcDg54DhP",
  "key31": "4jxDR9z8hVAoc2g232ZwfqJcVYa9VXVkWDaogfMqhRgHwhj8bGg5tTLjhS7N4JinagDxyaGMcMgyzJQ3YQkdaV4k",
  "key32": "64nXr74iaXtxaS57aN3XvbsS11EjymPJrM8yXDio5NQXM9hgkDGsLX1xJK4J1vK6oGVatqnssYuybpC6L5pBoDEG",
  "key33": "4zQY34WTu2eJZxkSRBBgJezTsDSrnaJvr2ma86auuZJ35XdkfTmW7a3hNfqKtfVNzExshahrhJtEeSbCAJTHNGsu",
  "key34": "2NpAz61XDbc5ZS9wDEuVZUvueexDQd8jaSuU7Ndqr1yXnCbnjwitQtaknmrH64yakMc5RS3AwtcbtR4cB3fNW1o6",
  "key35": "5tq2mffVrFKdgEDs9QWiPx2FmNd8AJrErVfy5c5FVe6BEQeTjDTSFyz8ZuEAv1uynpc4kzrKWwyiznGha6CwbDVR",
  "key36": "2HWHaD3JjAPHKDMuy7RUGcMZG9Jga2gcV5DLZWb9RK9V8VpFcaAucd2Uah4QgqKArqaAtLeuhPjL9LHjGDmkYWP",
  "key37": "5mGTd2d72DNZ9xjnQsshRWPjFEJy8rE3MHgxvTLgpxJAf2toEbGvE1bVzvaHK1MEwtAnnyGTbheWdhKYQxVquJT6",
  "key38": "4PDRFzqurajUBCoPfAaHkFuCzB3ceXVCicmfn3BfZ9K9ywTC8Yhjs7bSdCjZsEzfT47vaRs34Bsb5hcA8r7asWfh",
  "key39": "4YsTAZSUZXVCSNExSWpNphBi1QtHAovXBYCKAmTWTcB8q1FiuuyCgTaHBreKeNg9vCjW6mTZPTDWSdXvk9H9E5Qd",
  "key40": "51TRZF8GzfAkdWSgGQ1X2bM5KebnT2GVWR3faqB7Ea123tJSdMKWrWpExNc8FTLpkCLKgG8jnVFzqVdFGSFwB41B",
  "key41": "3YqPbm3JV1PBVcaEWX6u2rFLpsLniqWbPZwdzW4MAGD7ZE5BRN5SivhMrjXP8P2fX5QxVpzYhJwJmVtNRRgNQZ2E",
  "key42": "4z3524XcnhLA1x4kX4Y276QgLjyBRZ5rf65nUPypsKk7b1v9MQgC52rSAkv8Dhvavj8PkRnwdzdGWpbFEpyFny2s",
  "key43": "2NGSyFAgXaBgoBporqH1fuDmHEX2vvbjCav5TfDzDSUCzq9EdPTPQfcWEru4wFATXepX2o32T3xZv2Uebt2YsZLR",
  "key44": "4rwgeU2pyZmdinAA3WpYr2St7CnAnZuPM33vPxywHq7MjjxnTMZdEXLH2GXG2EmehAb41zeE7GMhfA4aj4VhfwD7",
  "key45": "5kwUhXG9kk3zyvJqHvc4FsewdcPcMZFX94PWf2AFnwzpVfg2de6XcDJgqRj5J727HeA44xTxq2vYNBK4e1yNt3n1",
  "key46": "5XcpL9Gpw3S943CVw6L3aUrv3J7ehLUDa4AESSQzR4VZFC6ZotFDxciGtJLyomL3CZPXV41eRoVJCsdmH8yx1WcZ",
  "key47": "45ARDB5ERfEULhbxWGNyXsSUyJEBwZe1zPepeKKdGwi56D6kUA6BSgBcyNjcZF42Cy1X7n346eMg1xmc6MqGRimQ",
  "key48": "2JxEXN6i5Z9S49tpq7cYwued77zrzMxg73FzMGFXvcTVPYWXwnvabSQKWCpsrzHhf23j6qm5FU7Dfh8RYnh6Yu6F",
  "key49": "QvUwKPgk4eswLWLB9P454UpxgaJe5QTyfuHLeYFMGGcGM8FVid3QWVQME2diguNuWj9UrNdPJKQ7zigupcyiQiU"
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
