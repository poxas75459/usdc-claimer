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
    "52xkzeQtU6ZAe4Qd4JodvGX1D5icxwKYTyv7Rd7iY3a2Bqk4H6NWrYBSCEwyyTth3MbbChfwWSLk55e7SA2KVigY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xE9SWp5B2NLa2wqmMcHNMkJd8w9Qanb5dSayGsbmFr75DT236idWtqim8uiMbAFdvau1YZZ53F9LuLw88QHLDRr",
  "key1": "29nzo1LcuohZhJwB5beXyTEG6YEGbNW3dtjwBbY8J9JpTkAuQFH7n9CvztztGFCp4owA41UDbYAeFLPV5WLgpJhp",
  "key2": "2ub7td5K1DDi7mBw9MA5jxkRcJfiLHLHfjNLdmtt6DUMYrXVapjdDpBd36awuGByWDmLvLutdznRELKfbE6EWKC9",
  "key3": "3cfa4xYWEZaBt7Vqbu7i3wfEkj8LaWch5Gs6udq45EyeFonJFGYQcuCj4VTgAAwzGDa8zMaSA2FePEcs9BXwDM8x",
  "key4": "2dTBfVMfUVbSdGaMKrD7snmT6opqiXUgvcDvf14ApdKqLwUZsL375YDy7rjbiKA4McAAyk31shbsXzNHn1coRg3p",
  "key5": "5k47MzFGdUmkYCEAe8cGJEVYTv9TQy4rdz6K1PnJuxvLHVCTBoDjDgyFZyTywq2icyBJK6fFn8tdMnjzbjFb6aVh",
  "key6": "3ceu3FEhQ124tG7azZfsLUXpX3w5bLhVvS1pr8uva6jck4866FVbPvRY9BTNYGPMLfFzYChDJ4HByWhCUaUaYZ8y",
  "key7": "2UJYK8wseRfLPfkQ4RH4q5MXDGWf75VnifSEYrSsRxD7WPk5ntVnYNchGgUQ8rQhuvPxSY929qdM8bARQjhJE6dA",
  "key8": "2ihhShozfVQq6mz1mtc9ut3fpvNTyyRvmp8Cu2Rv59dovmCX2yuCzdv6sXv7dS95ajCUmA2ZmSou6MdXCZPcNPSx",
  "key9": "5YpyFErmJJ2d4tEgtD41mms9AshoXCXB8ynM2qewm1dac4c9KndyLYhzTqhsZGcfoTycE6Njuvm8NGJN2URvVmxb",
  "key10": "5r6gqjVcx9zeL1jokkdtReV6Yf4csdy63vXw8bfbpdKbMAPD24PzVFMNMEd1T4STpHg1JXHneVejQFk4pVWWNiPc",
  "key11": "46R6qKyovSZdbKS7heuntg9EBnutUSRvL2grwpP51UnznoXjdBPYqNVhmCptVzbWxPV18piMqDHERopqNs51HFkg",
  "key12": "3xEkJzBsRtq642PQ5fTitEMqRH7AAUdyQX1WLxXKkofcWkGK4sQMFXSufX2NQcuuHqRwBWogryCBSstxuP81NSxv",
  "key13": "5ruWhGkBnfztRdKGfjwYEvvz5pJBHD4FKPSL7N5qRvdn8m6hoP7MLPdZHPMgKz9Z6wVks8ZF4oxWKbJoVfo2mNbh",
  "key14": "4WNPsTeKA3UUkjd1bozp2Scc47HZnar2hguHUmfZSdXbQZmUhrddrBpNvD9pbd6skpTeyTjUUxACkryxpvkrBZmw",
  "key15": "4pNBjcmLGFiPjjnphQ1AcEU52zipjPkZURVA1zCcx5BMugWhHaADG9RnBSmMNLxrAr714tGhUbQtwETmxNp5anHW",
  "key16": "3f49C5iAi284DXwHuNq9h7r3QybfRmXHqby7cKeshXhNJkikotqEg25jTjhJWHc1qkmt4y5Ci7zWVoLfZzNA9C4Q",
  "key17": "23fDFL9GrVGGmeMxGs75Z7UGfCLFP4kE9D1JdB3FEi7MvxwajRuEu4s7ANksFdw3gbnxims15VvZnLN51fUAABWE",
  "key18": "tK3SNfNbGPy3tfs5tbQ3QkThKyHhSJHbcFZpq9qnZoUFUWw9dufyMN4XsShNCbQ5go2Uj2y4X1S1XEdYzfa2vhs",
  "key19": "5zPy7SfaDfcAswBtVxGDv9eU3Ji6cMvmpHPopERTMFXjjMBDSLiBL3Q3yt9kWEY2zxRjempXaadrXCrUoKw2724d",
  "key20": "xenkc5wpPpgNcvziD6SEV4Wj6nfaG9ZdPFNwBPMFGwtDnpC7ymVDxk9UuGrRbVj6AhzVtbBNjAkjyqDuLQvbM9j",
  "key21": "qfyL2CxxrfaXLCQ1CCrbqpgdnRSDLpe96MUZEyywqd2Ena34PGAEfgM7uegXDJZz3FVLBvzHZVJTEeCpEzUTjqF",
  "key22": "EJhbPNrVQEDPhze2kViq23RTt4ZBCTLz1ecdTmBjZv2pWLgocbvWot8cBGT5kvY92MkykeenjdXrMPo5RF6D8zQ",
  "key23": "3x1cfGAqEaJES8EyNiD4h9HVpoyutPEQZpnUvDLNG7VYAxkqW6meHyr9dAd3GMAdazC1NxBcLBNEyPnJW3K5PEWt",
  "key24": "4pAex6BrVQRF6undHP2yBSstopawG6tzpjrGDCUFoLAxf1uipJzTC3kfiQSc74xHbx1YRXE34uJcPB7HscPUbc48",
  "key25": "bQ3byECSg7uPwaWH3sRKuY8AFZHAo1MVCpALL5i8SFB9r6M5qXMcyfLQ3MfmC3wntzykAxNf5xDbQGSv9BY1Qfn",
  "key26": "5oZ8LtazGc5VtyKPgrq8etKhH9AbiepqqW9oycXpTx9baXF5n85gjVwXdzqYBDBarbYq1ojvcWyhZPv8uggf6sGC",
  "key27": "5LenizgWxG9tWNWxxY31iTEzWnzMr6Yn2GSBxPoXJXNaURBBAZxsMUhrbTQAUc2tap2EUVZB5d1Nz4DmCUaLi7qV",
  "key28": "4d22hPPxtdk29G7yoNZpZTYjwM6exSHUbrJj38S6YbDr3CcnPSoP5C5EHug2pSKfsr7dkZN2aFUMciyMF89CxvxT",
  "key29": "3pQdyJ2MpYXhfGVAta9Ub8Ch3XHsywKw3zN8xdNPKVx3fqMcqeR23Qqups8kQGJ53jQVu3vYid1AroQAQ283tXRN",
  "key30": "3CwUg3zLrwXRvAB1zALxKJyyPXUABn3Sa8qp3aGAydGAbqyfvUbttQEeRK6ZdyndGp2pkzFv8eapSLjDzbu4Hfjo",
  "key31": "4x7dH2WXm2BqXmCvCk1Jt4pDrNZRhpU7JSJVPqq4K6FsUks9fpRZuL5X4KS1gwQpfkv4n4yHsfjJiyjKi1FQvg5E",
  "key32": "t8a6qsSrkZ9ZsNr6HfiTF6pSQiwakN6QSpAwUYi9H5pWwERFAcirdp465rAHYoFepaNosn3G7mqez1LnAEuRrt3",
  "key33": "Q5YNkZuPcLXoD8wn5rSCWZLfAKjiihq6wiRtfNuuwFvC2BYGSwogMkv9owsxzS33ZLtPyt4irzwMnuVTDS4AmP4",
  "key34": "32h2CTH9MwabYewDU5JNPJw2WErbsMDnwwwTQycYjSJim9nDGwXzLa9W2jKmxkgfEEC2VpnALv5MoXfWdaMCk4Gi",
  "key35": "3191L3dg9e6w1w6prnYUvusmsDLUCdZSdz51ACoxtmPUvabZr12pbVpzcPy8t9mZKTbLniw8spsu8Mrec8CzL2cf",
  "key36": "2MzSBTBg7f8RxbB5u1RMC8Cj8UAiSviP1N5GcJrqdoW4X7M8AJbbx7ZXcnrCQ8wXgfC3axtsACZaFcLvnt4stMPu",
  "key37": "2SPs4W1aXmNYoQtDrKeJPPHcoXggHXQ7JeH9RVHC2LCNEQ1DRaKnWVcXFaDqi4SoBLwTCz64fKZ3FZDKWCtZgXiu"
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
