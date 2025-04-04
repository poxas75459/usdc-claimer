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
    "UNTD2eAHQpvdtXmL5CK6dYZzFwdJJBvzr75wzcHcYJHdrQDjRKGH3CMURk533x7FNvd7NGvx386voke51mmLbUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28eCaKvygduf8Tv7M1sdURW8Ye8ZZKrpa38A3rDRGkJcp2nQUr19e7JFCNoaSmgWnA94q1dvN3D9BU8Y3aBJHR8z",
  "key1": "45d3PfgsfqCDPiiVnJpgPR8EWXwpShragGDahToJcZz1kNBPEojhgaphzRssNSa9uccsjaWDarxBKQe4NQrXNH6H",
  "key2": "2qFa6wrgYKZ2Ldu9SZYeE3N8Ksr5GE1739QmTo3WX1eixPS5bSEAcNZw6hxD9pE46hjGZcxMv3FtJpiBjsxXovDE",
  "key3": "3WGWFbTkQgXGGuoEw7eY66LA2yTBdDtdsEwm7FNZv6mg8o66ft1fZr1HrBrVmMUMKrsnzs56CseH2n5iiSSv7MBT",
  "key4": "ZVrw1YggnB77kpL91uhbXT1sFQcjXGP99eXfkvJBP8jzAWcQSHa5MaCTadSm3VxGF4HCZWFAX87p1i2FeDW9TKu",
  "key5": "3HWNML1JmQd9SfTzqWxEtG8oxQuWCVQvGri4s6zrKnMbCAC6s7SDpXmKz7S6hYQN66M8Lr2cmVDefXvrCU2dkXU",
  "key6": "2oueF2888wTgKoEDDCBkigM5vjhk8qRV2655vvaALfrh6NNigcbXbqDcm9FZMPB9Km52N8KvAhGeHoL712jEvLz9",
  "key7": "4YMdwhPrMzW7Y5DGne3gGja1Mo5ccWR9fmgneXH3jdcHbXxDXLuLgr1etarcEBDEo5DhffrBQykiu4HNJMiAoSxp",
  "key8": "3b92fR9yYGF91yucJj3RiAKEbNN9zUaAbYUhpm8LUKjD1YeprLXWKPhMgrycGsjUfZ2TAUjP9jH9SqebSm839Yg5",
  "key9": "fzsruM4KKeNXGNbXJDbX9wczyfkBVSHehhW6iojSDevYuiTNZDFaZSfcDcvjrx32xqhbYa1p1XNUhxQfN5rVF3F",
  "key10": "2EjKtKcKuN57bTbaNBuqHUynSMUKZHRWSzc1u7TAYcPewCiu17kdLmzfmNX9vcGZah9s6dzEQB71KwXnFsLjJui2",
  "key11": "49Z1Kx3epD2oYJ3vmKXBWZ6pkMpz316aF5MyZiN1FwMrXLuHTbfMKobDhhQFy14R6RUzbyJnSo1dgn4emupvuQpK",
  "key12": "4BuzPkN2eFFvJZ7KB9Eh74LzPYXTh3uY6Aya2vqAH6G8eLR9KUXgCFYA2WdYGtxGB2fmGWnuJhdboxf2YYmRQpRM",
  "key13": "31taVtr5Wa4utFzkzZfsuGaRJLWaYFgYrz3kTgq3dp63cgg1EwDMHjYeCmuF3Ur1bsHFoUfEgrxPo45DdiP5anu6",
  "key14": "5W6F3no5go1jAJMLUWYJtQMmqWkzeN9gMCyakts9ebv7Ji3cSxJV4crsYnnZKezhGgNXpTXFm7fw9G8pYQLnRJEg",
  "key15": "4zY9dBkGAHCCGp8YKmAxx74bZAjuRTtKpmmgyoBZmwrMtRMUVE848VKvLmg2o1xnQNYZQALLGRfVhu1j2vqF2stc",
  "key16": "2vzYsu4CRA9njAHsYAaV9Jt1KcSmG1JN3RifBzeinf8j55ei4cUPmh1jX1kCHwCdvyERdFu3jHQ5cLv6YNAs5Ffa",
  "key17": "5DMHikcyVmapkVnoJr1XQm3VgmTv57BAqEvUSJNwtWh3SuhSeSUQ9MSbE7cSsHWPb6xmL5P7yZLbGrvLa3h77Pru",
  "key18": "4EqkhNomdmeB9S9kTfa8DX8fSLnbW3THyAZtks1NbazM9DggVrAJTBfKjrqV5NWbbS1K9t3xt5UaCMxCgh2JXZqy",
  "key19": "3yQGAgx97yo7QMPPKtXsGHji5ZgHeiWk8cRWtuMzzpN4QTYbtihro1zWeJVQhfsqF7yaBgtu6xdecaV3JKwf9pCZ",
  "key20": "FjbYpSXQyNTPaPmPYVKRLKuFE3KLf6FwG9jJXf8JMn4mrUpWcWRXRPdDBh3q5B1rwhd4cpk9BozPDTDDx65PxQW",
  "key21": "5NBsx2E83rBXsJ2fMZxmxSAR5HnR1isNDVszRi7Y1Tc8wq271HqBfQnqoAYA33kPjKC36dmPVEJz3cyMLMpMRAZX",
  "key22": "4STrn8eXKZvTCYCBjXhjEonzxEsSqKyAkkCYEyLMCgwUh38tAr6w7oxXsrLNc7gPB1uqL9ZEZTqyj56jKPTyCn8k",
  "key23": "3my9LU37vH8B9tWLGivpsrJDVF2ueVR8xJoA4W8N1NbBszCAj2Efzn9GawWcecGqR6Xao2UBr6cXnvq6bCHGyMFE",
  "key24": "4foBwnywtc2yaQSiMQRGCvE8bhEuSMcwKdVmpMX42SJdDifWJe7aWc6KpgYt63FCsBtLC9ipRwHvbFWYWZ61eHMN",
  "key25": "2bCwzDqUjG8kwsFghyTG8nFRFRdwFApRxhVD7dTeMrVRxJ7NJSbByrkpWxTJnzBuvGynWf3uEAnCvAYpeDtdk37W",
  "key26": "4TENMGnjH8fjHjZm9A8MiUWW77dYuTEaS5MKgf9QYbYb2hPTHEep93wUczgQR4FVXz6Xu7oR1Xz82jKonDn9kNZy",
  "key27": "2ScxkhwYF2w4fTxHhbDCXWTLuJZXrsjxZbL7CgisoZWVVJiGEKDvKKPET5GDNRc8PMNcCFKcyfeVLf9Pp6vz1YNo",
  "key28": "2CsA3sCkeEPDxaGUKtyD489VqMmpMoAybuFpY7yhGxcX1KpiJAkhf8qhKRHVJpjJzzCvXASmpMoc5ZvrqDEmB8F9",
  "key29": "4DNn7gA7PZoTHScH69KdFPh3VREXdKBBrJyLQLTNKWZbvAhSg9oZ2J6jegmujSKo8NJfTDMnYTBbf9yRtHV8qRRE",
  "key30": "e7aHa1ojkxdLvv9bePAGmikwjJaWwKWWBMEZSmTH6ZAG4gPkUzeNi989xf2YKjx4qEBoSmLCxZZPwkZEc8CyBe5",
  "key31": "1Xy6jWxo1VefXhJcT6pDj5MeDoD1ovjEQz7XaUuW6NkzMc9dZdq8bTKgRBq7173TezdSJYUCuE8QvMQd7CY7Pc6",
  "key32": "41x4G1Gd1V9AW7wUyUdk5N4fhZZ11E6ctwykV4D6AmTrJVEuCokpiYda1jYRZhAyk9hmS9A99HUbQdog8QmiMZWn",
  "key33": "3QrdthjZ46EaZT1keeWktrxjrLHCe3LLHYvoU2XfpMUqZkEFPYtx4PDiWn4BGx6SEnxT7VWymqgd5tRomeD5zDvk",
  "key34": "ACsaFGtZa1wEfHzf7fXTRovXR6BRqGPKjQQf9KL57FdzijvR385go9nH1pYdh2Z3UuUAU1dsp2S33jr9HEcpQie",
  "key35": "2WNJJWZSqwg5aKe1cSv5soE4U1ayyq7rcZQGawWoUxLSvWDsCRhuV8S89Bte1LdhQhxNqr635Y3jyHBvaLAw5Ka6",
  "key36": "5jF6CESoeut4Ekor4tWYyYYJXDpjH8B6pWgoGLGiU9XR4Jm7dzLdNyKxFTHb4y6kDwq1ekptqwvRxs9gMQnscf8U",
  "key37": "34hqRyenBa3j25M3c3UQsFoJ7xDnoACAo3KY4ASN8erko9Zkia2ZmEPdbURBEGcxMeLa616eR1YnM7RH1W1EyWc8",
  "key38": "271kEu5obpCoGLmWLZU8Hk33B8XAJwHZ5rHdCXQmjddAkLAXpT4trKted4UigkzkpG9xK4PjMsDMjB65qGvgaDea",
  "key39": "5Zox8HEMaHn1PBbmYM6L7wyzjGCmCKwS2VyRgnqHRTCXzwYcjMADStQcHJscmoSwZRNDicEbMNFSsAkt8LhBNWxz"
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
