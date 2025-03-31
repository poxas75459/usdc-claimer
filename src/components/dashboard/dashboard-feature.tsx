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
    "2MdfoyTtymTqpJJRMpNYu5wVwCQDj43J3qJbtZWeuRvHZkfWSGJweAiSATUC5yH2bmBRqAQYABQdby5FQvUSZ58m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QcZ8KcT8ZFmJpmx7uYKkRaXH8mdhkH3RkbewwfMcVJuqmLWJktVF9omyAcmkZmmGPePSUfnLDpGTtFzqFTZMCRJ",
  "key1": "41ktBXc5ViqtFT2QkxLPD3sm1y1jS7dgKESFtccmcdDVgWZ3kMsS9o8vJbqqNd5cCQ6QN4hiJUu11r18jSpuV7Ly",
  "key2": "26wT6kK27JArnUcEk8hC6zf6rZDaBRFPBLNNGZqCRRuiP5Ts9ynTFVZkPQGdEvEQ8hQG9r7Apvs2MNy7AMJRGU57",
  "key3": "bGp4JU5hRN2sNqiYHGHntpkBnBCN3Ddg5i2UxnCMPojUJtrx5VWenZCuwm9DfSFuZRqx1jEYdPgdNLwCiqVtb8R",
  "key4": "3XXQrxjR5G4RuSPfwcZu2Z43qBY2E2rbAiAzSU6BEoYDDpHYd6gpu8KAt71W8BDcpzsmVoD6mLfEyG5G1eCitH9o",
  "key5": "5fpK879MCRLwMJecCNqFA2ppUnVFLmD9FcMzxBRg6LeZ2SVKNnBjjb6XAEsj2UgUURy8yXyaWoL6AGveQBAXK1uj",
  "key6": "4s7z5Sgu12Hsq8r5piMnQaffZYWGy5rZ1azJGvm2CXMtBFrgChYW76iJgEn5ZAkpdWDnpkW2ZgFqRe39sG65Q8Ek",
  "key7": "5QZmjmmBUFErkhsnwbBcRk2dNugSTkG2KSoq8tGoKUEM3gyNoTinE7i88AXh4p4XuhonfhBrVSAQ4rxpc93iCF23",
  "key8": "3KPmXB9uf85qKbsYNttTGyvmbmfg8dQb9Jt87X9ZAiYmz9A4SbgofNVLJNH1JC3KRmfPhhFBhd9DhrNxwZBztcAp",
  "key9": "38myoMpSbFYk1cQRHtvSuaBYuTu4ni2b244snWiAzFS6zcWmJ7VahftQJsPFAHMbX88hv6UQaZ5cLHXvwUUrrNtK",
  "key10": "3qts2YZsnnsHw4gF9DAVoahJ8HqJRwdMVqsjzpgLpcbuiEUFjfwjgGExmn6EtZCkX3LsPk8NfYZsEPMRcbjig5JK",
  "key11": "5SnWDto6YtrQyuXthSjdfHbmgXDeJ7LgsZnrrP7ts3hrX7rctZR1fNeveAZ5HQ224PUYsLV8nbQoTFBd1FsYp12",
  "key12": "48TSMxyBNvqwrrUJRogaoMM86iUnXb7W75oEnefCUVAecCtw2vdpe742XGkWyNeLhywKiEukkjgMsPMixwxZjLBS",
  "key13": "4cRjWpBKUrXKruU6b5SdQMAuBf33Exx1DuMpVXf9VsMmQEc5aFSp8Wg1ma3dEenZw7JKZ3yTZBKiVnkvQsxcBUYg",
  "key14": "bS9RKSoPZjZE5eBxWzRXmhc3JKxvAZ7kpmsqA76AKZXWWdh79x5iMmBLqDS213N2bgGHsEJb58ZsmGdHGHK5KWe",
  "key15": "4zXGYumczGtYw5VrpPFpAjf59wkVb5KYtTSTEsXvKchK5neVhjPHTnDV8d7RVeJMhAhoVF55vE9qi6Z8i8mM1fzE",
  "key16": "S89xP8irxsYD8mRt8qzyoVGYAgwbECYsibPvCcGXWpuFx5wmAscjCGxpXzhEw271syX7bsLv6dk1TL145bN43aT",
  "key17": "32hxKqsYVAsouYDWt47TPXPc9ToeJ7NK2kZHyYKGWRtEt89mpH9b36AMwSLn6ibeZZuZLxnGwhxVAfScRNAZVsin",
  "key18": "2GZXV9dwfr71va3iFsNDP8or1ixqeTdJQjTP5mW1TRkjTnByuqk1UwSA9MfptVu5qYfQNNKkyi2o7eKCkMqHmJQe",
  "key19": "EJXfQrdxzW8TFqTkvW11oXZs7HZmt6hGsUsyi3bLCzNZKpuJjBkH69bbyCnrpuzx3pUD6u4edE52C3eoV1kTmS2",
  "key20": "5f2MevWppWVXRBC1xbVk2FVN8WqmWX1GHoWUvRT3uLD3UGeay7grsGXsAojMz1zhEWeQiRE9h1igvPDWFgDY3hnu",
  "key21": "6eXfnEarJWh1H8p7jgaKnQqDkrgZ6iMzU8yeKG2eW2Ers2o7v5cE5ESZzLyjiof1D7rEdihSvYLNPvdyH5ZsLko",
  "key22": "gtFAb6KDGDm1UE5632dC6CCWnmPGpZbuiWEMzycavhHe7VyCp5Q26uoPvopK5VCuQJiUKbBZ83f98owk4bEcmLd",
  "key23": "DEhA3VkydWe2a5zD32LxKEyqky6QLzAyeiRAF6wruVVHQ5XfvtnV5oBXgVbgZkuqQJAx3tyLUBThr58aXKPdRQY",
  "key24": "2wC1Dmu5KVEF8iLGR7S4bJpQnWCCktjoZaybmcud9oGcG4oADocazKh9dKpcWGAzVqAgteeRrws2AMJ8y2KXPEh9",
  "key25": "2oNdAyvw8tAsJvVaS38Rn7P3TjGa5V1R7sQKd9xE3psa4hL1igxSkkyGL3RkdztYDbqUk6TAoRAyZ2LKB9sYiF41",
  "key26": "2uYBuJYJt4AjuqqkYaJHf1MATYp57CUJ4vNqLbmmZiBrLtJP2waknKr27dh1CL3QzGdKhWYPPZzNusDjou5bDm6T",
  "key27": "5iajduPtGHnTShQyr44yr9CJnDV36iQSC2JjU3RVUniaCWGuzNWf7NhzQtgC1nispu7ThxUBHfEipazhWTNTexHW",
  "key28": "37o78k723WoTmhQKP6RmaU6ai899xXC57iGLtc25ePpGkzT7RwdmiqfmBGr6o2PDAqsyUUUoZpVEbZwUWgTYJd4Z",
  "key29": "3wFk6uLfd3tZKZR8fkSEQvdPuaVM2qCQ4DkQsYK3esyeH5kDB8XnXSVU1qre9VmVkZ9BHWJwQAeAwe3sFh8gNzGp",
  "key30": "2crJUwpV7bws8sYhD9CVBi8dzHRiudnUwCt5Tmmkje7p3cMSyu4GEN6Lvv1LWrBpPKdDSS9simHoFKW6jRLSNULb",
  "key31": "3xm9Z1tGV6nAxzVLyBGQMpZFGm9C2TQ656sZJ4zGqu2fQUbNsrfFXTWx2U7ug6kGM16cffTM7gRF27VR2xv1sYKV",
  "key32": "4JqPmsxXKPxAwBqo1iUYesCPaTMMj6aq9zrtHWdkeU6y3shQWfep5WDuDRbMtC82hfrEAhHYqefUuj9zKYRc6245",
  "key33": "4xW2JyMoQL4nbfzNtbJWC7k4jKnkY48yg3Vb4KdxZU3vQ8J3tC5JeuA8uCYNEiVHhDqHFsSsqUzMnnR4p14wT4vp",
  "key34": "21js4EqS8fpXp1NdoPPf2XGWiMa8fp5XEoVRZkCEN8Wvd8PBEHAsjv44urog2dVEoDKB9Se7LTqsjtxkf8EVMUTk",
  "key35": "5sDymSQUFhK93HjDCo4hvCix2ysfaTBGqZaemdTw4xDGKjzv4TRZW7rKJxhX9gupFud8LRQHZJSJj4DTFk5tXype",
  "key36": "4FYMWJJg6jYiEtYJcv3xQUrJeeBayntNJqU4LXyrqhJnFqqjTC8hA89NYPfzuNgRoLehDxkmCpWXECutT1hdr4xR",
  "key37": "2uC8zxWBFM3wQK7aUEquXcdY6YpLSqSMCtD41be5nmMUhKazzyKhiuk8okfE792kjrLcf1bknWrZZnomZqfg711b",
  "key38": "4m1Qhmh8jGPr1WiaxuVU3qrfBTiehNT7EMbuEzDfBuywent6TvrLTTasQxXHjEzgiZAFXuzcFGMY3MKcomZQQoPs",
  "key39": "3eJhRL3ZLASKGGA8tbhRd24LwJjwkqnsQZXXrnkLhJE7EbWwQvdTF6XVHdmi2jTEnRemiDgjMmYdiQCXtFEZFtjX",
  "key40": "2hrYp4fSmSxvmKXKP1r254NGgAHrZCuxaZRv6MyQnqV7LBq4vsrBPaMCTJ4nqrPjYY4C7LcakEDSeseQ1hJLRYfT",
  "key41": "4rjmRwdc1w9bcRN4TYNq1um7NX1HD6XdYvg58EYbZZFYm6u6EWfT8eWVoWrTPG1ukEXTmT9YLuJDdm3Acz5ZAknY"
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
