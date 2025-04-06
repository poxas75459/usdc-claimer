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
    "5q6SRuHWh7k8FkBMmT4cWh9zBt8hs66tBecuwFpGoRUue53NMRPpcMowXHkmw6USypbXEbdGjt2nLVimEHJuoaBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j69zAz3EbB37aue8eKzB3KjF6hVKjfzvok4tiSTr32zTSmCcTzhG6zANazVws8BrvPwgb19T4aRdm9XLAPZenPL",
  "key1": "59LAGHsjedgRgDNYzN7kVJYLc43h8QddNEVtcW3XS2PJMRtJVM4oKMXqDzdFt1fJ7zM6KrA3XCFoMXLkVe1NBLg6",
  "key2": "2TPyoftBTWaaxB1pUaRwRxNUpByPfxvMug1MxjhEjpVDvteXYd1wFrBhMrssRtgnUhqZXMD6yVVgN6Lt6x2Lmeip",
  "key3": "5vuZU1THc9axRCNQbPzL9nanWkmfE2oKsgLgzzsGYYVrRHmoDLPejp6YFZ5Ka7dmujeTekicauveFftMiN4h1Tjr",
  "key4": "4T16A3jN5V1DvNYsVjYQHP8FZGVo3gUJyYUZhBJyrbfAyyronVXFZi8SHsvnjUh8CeuvyPiwCQ6muz1REKCKq2U9",
  "key5": "4LEettJFipqJ7WZQwbhXuyVyUNjSpceRBEeTsVECTJkNyWmbW8MZA5d6UBCgitoW9kWoGEcp9itGEvwNVVVuf1q7",
  "key6": "2jd8XfMTWQ6HPYSvbJemXR5t7mcNbjbPWLkzhrfocf18AJ8JDETyEL5JaGUKGycF7xtY2Q4zqeuuffp5dASZkWHa",
  "key7": "TyjmoJCFvDbuJ7LRQ11kycfQ5hMRNeLZFPpMZdhqvkJEHafvN9L3dsp4WDzC2hS3B523t5WC6jPBAmvtJG59g8b",
  "key8": "39tjHCJWVuxibg8yjsAFznG5GGynuNgnYqDaYbQf8ZFdu7SvpzWEA817KuU5EdMQ5JXaspTj1k3nx8RDnJnZ6MD1",
  "key9": "5PpfwRGMTLggnj964uoMwaZ1QwaEbjx27SJMX4hQEHaUqVuirXea3c2wjH8dFboWsHVjXi5vvjXEm2MxUULCBzn1",
  "key10": "5HdJ6yhKq1R2jd4QdEcMFsjwcKUJWg5iL2CptcCr42sEiYXySjHcTz3dSwbxrosCSmtXEApuoi5sbwABZCMv5eRk",
  "key11": "3dJfkf49yv7XZUGipgRY54ng3Hq7tzwj1fDLspE8oDFpHrhh8sy3qRZRJor88esAPQJ1rQV61Pmxozo3p4wbFvM7",
  "key12": "3yAR5U6QWd8YY9CQ4LkWiMi3UzYnR5Cb6SV6pyizvsc1ZbsQvoHbXScvHaEnRkfJCb8Pqh9g5QGHfSM4Q9Lvrqeb",
  "key13": "2ZFAGdZ45UyzgxxY5dhmMmWArT9hNdKwv4zKHgYBXdYvFtkhGczcbGcXwSkeJ7quqGg4dpiVaHRZUkftGMMAxcCe",
  "key14": "2XLSgy14gX5gCQtMWotup8EvFz46unznBNBHw7Ldb6pDVqjj34UagSMiBoVUdz5A34KSgy86WiaJ8S5ujAFhzAhD",
  "key15": "5fzddjrTN5NvGb1pT1DtyAZDoTCaVR8AFU6kJbWHbFC88br96AwVD4bSAmd1Wszo4CB99cpoUbGGgoU6AkfzARBy",
  "key16": "gj7D7mZpzTi3LGTUHPpKEsiVrVFvAhzDwfiLwN7PXPtcRHhZMe6nXChQ3uCT4Wx5jUx2dsY95XkYGqkbkFftq2U",
  "key17": "TJZ6a3GtQYEjapDuECu1pjrpLpqsjyuxCR9KmJND47KKR143xNzg6SVRkYPbaTpUkpiPp6inUcrSMjTMF5Xzpra",
  "key18": "2BNgE9qNSjRbJi24NUwErjrpH5n7WCTp52bSpYwhWFMRmNiUWB1vzxqHKuvs48PSsib9zF4hLbDh68ND31NpT8XR",
  "key19": "5kdTWnpcvw69L68VETXowo5Rgc1YgSDaM2qiSTVzqugHo9BHVJPm6cTLZqtNipwEXQFJNZBJvyVEUFQBFzP6cbJf",
  "key20": "w8Wb4GjjpWULsjCmGao7N4zN7oisxvXrZQcKJ531ybFq91YAWcUcpVWSoS3QdYZLkbrgtqESGzDw3ubo6GKdW12",
  "key21": "3Thiv13A8E3gRjAAPajfhGKozX2Ujxo2sRXZ2d7n5GEHPnVK7myhYTzVwi2vkpeaqojvhVQqcjjqJPLcN56ho8Pe",
  "key22": "azu2r3aVYNg7fbeaQi8ZjWH4o9R7BNjdQUpkdooUufadKSStpgoKtrQ6vcoojE2k2Yob7tYdJZva9MzA5F2knHE",
  "key23": "4kH5F7tWRHmtjEfXug9FuTFqxZczZaQY5a2p6WJfnzZk1pJduQyLAEC9FMTQ3t43viMw1XMVGpGeojx2bsaeJmoA",
  "key24": "5NVGyqmKzWbAKQy29YgMyzAafoAuWHe5sAYYUcNmXfXSshjg8dWEP8y7HwQDtwyjFe7fXdFh2QBhuXyQj56rcGca",
  "key25": "3MUdAzreEnia23dHhpHMG6CGi3nGhTXp4HRHs1p2LGPzd3ccdwSoCpKn9ZZXVfrR9RZEJkxMizG5K9PeJv1eSj51",
  "key26": "S63h9FhzbxKvhwzhwrcSdd2rxVn28z95VsLo1AtpdmouY5WSJYGEU7Cvb1MRR6saiRpcVWxbXoGpGFwGQnRpMLW",
  "key27": "kD7tYCiJdFRKhaVnbkCChxG3h1NTScbrbCRt1uvpgXQYiJJSXCT9eybFV5kEDsLGjJsnrcjgBG8gGoodaa5ZEfP",
  "key28": "2fRW91mutyr7CoxM6hhc1613HAFUcfq4FgBHgXD4UC8Wwo3eeG1bjiqrVkrV3YZkcWmMpFEYtAgZBkdTyiAavo8Y",
  "key29": "4MhaBByWXuGjeYVDcFzPeA2FBa8k9ThV7M4RiGFZK9HyXqyHy41FStosNsrGH6kR8JMtjJQg6R7R798ocMaKf9xG",
  "key30": "2wn7meoTahVhxtaTqWwW7pDomPcwdnhXaJZnS7Tou7Kxs4qHge8pezDdB1inJpiknPYcvMdLcNP47gJ39T3QHTV1",
  "key31": "t7vt8kB1F5y4qmsY5MVdfiVSY2bFqHJNec4M9PzaGJk1XYyEZRogKiT6NdPxcB33HifSooAUNDU3RjiVSy2HDeU",
  "key32": "67Qxcf8tC2JQaEXG1uzYrArGjgb7YiZQzqrREs3yBJFaiR44kx6qcLS7g1FkWn2FiJp5gK5nYAQ3AgE8S6BfjJrF",
  "key33": "2kHH1NnbBfQDvdksrwvaNaTQcEMs56r2dhMHxi8TcJvtXqyytpDU4GFiTZ6FMa45cnQ3nf7KJygTg6Z278SbTDe5",
  "key34": "5mjeot9mxeNJSmsyxQSmQD3J13koD5SBHVCMVbX4EFqmv6eoPNi6yrbBwzPJzrE6C1t3HWw1mUoL1sRratQbCpRQ",
  "key35": "3jFhSZJZPk7kTG6yGFxDTK2ec3ZjCWhskLX6e2EQWE6YrQuaHCkt2qccmh68hNoMTLtMcxF5VtxM8riPXDJJ8Biv",
  "key36": "5cZt8LzQrGwAAGRt4TZf1DyXMYwEWnWCw6z1uoyQCgTDGhtpe9qRkJKxyzVQMUYrDkUVcrQ8QnwrsXWbAuhE88Nh",
  "key37": "65diQSogQdf3hLkqSwdSmaFc3z6UQocvXT5gbwrP1mAFz2tmV7qxXkRrHnL9WvMzDZQTSqhvoDjpfiaJUSKgFvkC",
  "key38": "3D99iyeVL9DzpxYBkcpqKHR4NY5BvqhmRnijpmQhUXT7HEM9RhogTucCsHAJBWSvhRN6QwutjtunhmHWCu9R6hVA",
  "key39": "4nCDE6ijPKJsUQFiFZzVCFzN7GnqakKE2JJczz2gbs23cZ5PAkjr3jTiryj5v7bNvQiE5bTsuPMj5bR4CmQQK5CV",
  "key40": "NP2W3GXjmbJRHpFWuY63DhnQgSumoYY7PPsPTCZS6BmdJYDG2GRdSgTwweYGbJM2NbK6z1nePXxBba8qRRCYfex",
  "key41": "2HxfGcRUUtgAz7LcdTDsGd58UtgLNhLNHD2ooXK68HY696jfZgzvUZubFHbhD8jUzmMHT6d93fcTXfng81k3F468",
  "key42": "2WRSKj7YjT2LtDM6acGeALMrawCGn5k6Ehz8DkgdtsiyXRQQB5PheK9gx2JoFbfkdedw2gy1pYkG2wjiSU6xPj97",
  "key43": "5bB6jVdNAnj1mhKztiNyBysTXGPgxzT4nN7QpVyJW7wDMxobu67vL2ryK8sq3A1jzuYiWhmbcnA8vRCdaS7fWtAS",
  "key44": "5CzvrmzBDBGk9JdGMtBfhvC7zdrY3K5EwAbqD4emGN2rJX9XcS262z7wJ1rn3mdTddbDLPTfdrbb6mDfphQrVKvg",
  "key45": "z9DoXEgiWqWTrKJ2GWwmTBn8zkmbGFQaZKXS777pfxLUDiMgE5382UU6tWGbNtizGCFMxNvfns8dJFGbDUt8KWz",
  "key46": "5coQLYqytYardVi1RtUVzznL63HYZZVSeJsJDZqXi8BL79RjGAY5udzRwng4aMf8shheKZsRsSqCBUm3FzopJ6zu",
  "key47": "2qh1AQrfVbScXezj9Qa3mzJGvRQYF8VVPjivMac3xJ7gVRzgK8ZrmaG4wcAWkGrS8AqsqwHe9Vs4WcquTht9Au9d",
  "key48": "3HCkbPE9iJtwR7LS5a4BCzmLnpx39rwAZaZCr2zu6orWRRxqL59eGTbBRwdVKsQ3ojEcuDeGkK1F2mMYX8dE57hL"
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
