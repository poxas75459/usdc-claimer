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
    "ZFpHehfax7QQc93kqVRbWMKGJYubjUFwvAADGyqWNYC98AahK9xnVTh5gyeWy3MyDXYhA2k5hiJBMNjN63DnVtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fY57Kx7yQ3AXxcfTGJkSRXjA5wFqhAnFHvvDHsSNQSLAiNMByzJgkj8ksonkGXTKdE5r7mXPUmWWPXW43TEHwtH",
  "key1": "rnQ5voG8p1AEL8GmoW944rEo37sBpqXRbpWTq85aWG3QkFvfFpPzHcEnU984wrgcfzuGWZM4QMHTP2ehtGDQvzg",
  "key2": "3BPaTK4BWhHhXqGpdUYBFiXUFXETwjkw4nhCBZGMeWuYhb3Mh9rPzDRUuYmJ9kawNq35PPwokiuDBpSNdc4ZdwCs",
  "key3": "4ik5ACyBsBjHg4PC2TshWsSzgAVWMf1LU2iCAS11DzLmhTJvVCL6PZLZeHu8GJ33f5rhPLXBV44wNmQAhpeNuTjS",
  "key4": "4S6qC8W61xbQ2ceCj4FY629TqjHTWPU3SfteVRCMFsoJfcNpDNvYKTq5zF5JxGnMVGAUW3btGCV2maL5mPVkKrqx",
  "key5": "5T9MC4c37SZ9dGc6HB4sqzwQs3Z8kRjmHViLuV2gGRrQugKjEPZnQQuigGmCQEYraPK7oxAkZbemvbmYQPmvXPp7",
  "key6": "3Njr3u6tkmDmhQMrPhxiPeqots3Ca5Ep3Pts9QXFKcsbuPNDSm1V4xop9c1fqas98svEibam9vbbixBGN37vwMh3",
  "key7": "2HnncpvsoxjPkJ2pXn4ikxXXYLZgin3gYLevVN61chTomdvKQjwE6LKetv2X8ipC41yPiNafRFnDMrj1u21U6nKQ",
  "key8": "5aTVXZBLNexCVVJWMn8VvvqXsia43YGWjkAbqZgPkGz86agajTaYUkbBFQNoN3vgdhaDJo6JZ5J2xpyvS8kxdX6F",
  "key9": "4XsMgZGGCgQ8Yag7uATQW4H1gHmXmWVoe8prfSSauEwP2QagTdms2JFw8ExadeBYXM3QqL1KNfbNTjpi58mwFfo",
  "key10": "ipRFYwQRVPfvSgGzqP8EixtwGcYP9f9EjDf5GUZXPf3Ac2AUkiY1VkVHRkpWDL6hkPAx4P3FXNQ7ktqMWfkBKez",
  "key11": "RsXnAfLup1bnxUcdW7vA2DgUwx9PWbbjthWdjVoSUWv8rU7XznPyngtD97pAfik7kmHVUKyoc6NfzwgJmoLFsH6",
  "key12": "55Xa2zvsAJ1kkT2gyjjkQUjoevov8zEE2kV3ZkadJcmU7xP8fEdQWG21ec1CqBvxtVeBFTqAk8ur8kt8q8M3Roie",
  "key13": "sQ6N12Uj4sesEwACTQSzBtuqwSmQHZDTsttH5Zap1KpqGnsBqo9cLiW5j3dgSBewpzGZZD99oxMbGzbSQe6ygcE",
  "key14": "3sRCKmxJqeFB6YV3foKhSCWXTCG8AqMB9j7WGT8zmMAtU3CRrYszuq6APcTn4GkTKLDN5ziPmCRv3UjbtxNjbpBk",
  "key15": "4TLAA7Bb6FhWrAiLXGVZuUraHHEUSpe6f6UMQpgMo7LSjeUZK9oWEazrY1uWYYWjeTUktL4e1WYvo59WbhUSSXrJ",
  "key16": "3Qg1pJAN2SRKqsQ2gU3WrohDyh2uJv2iZokrjRjcpn1suEfez6wAHK8aySzk59cuZJjmTwe92dLYDdnCfKBR5CAv",
  "key17": "31DprQpPMMLKTCQjNgsXWEkEJYLfb5HizueKGc8kPj3HddeUGL3yM8PbbnCbvFYXcHWD5xivgNpQxGGN2GkzEPvw",
  "key18": "2JrRmSx13ZC6Hsgkcdcz1cDPjDNm8EATp6XhK14HaPxwm1QVjX25NzuqzcX462vE8uSE1WaPfRaWFtg7DsTibg13",
  "key19": "cwTGdMyuXUbbbsjGSnHBzswbCrxhES3kGnFvjEj7GHcS2piCsp934af2qudYQT1iEXFQLJv9Eoj2Wt66uTQ9eBM",
  "key20": "4ECSjyAMw49T3RBiT6CSmZN9b82FszeU1KF4Znvbx8mzCjb9KB6GXMCAyfik7h2o8Yiyc9LJYJyDHG816eq3MtAf",
  "key21": "2vJmDzV1rsEhpYDHijYwm81FCGCBhXjbgJ1eZmPDZVKiPSNNaViSFEitDigGfLNo4LvVCvXGFC8Gh5axwGhxh4dW",
  "key22": "UxeBVv3g1MertNsBFpTqPRHBoM5twABHrSbJvAZHcniDPQT76XNQtJ1cYYTzb5pZ5FhwuspYyfais92Yem4r2Au",
  "key23": "3aV9Tq2TP4wEUfrn87LhsgWekTvyLFm1fC2MZX5EfbhJEcEZDcwXoUD9zyvc2PLWWhmsUdMG8avLtLFHKV2FT8UU",
  "key24": "4Kp7mBXjTxdy1eG2gHZqUTnqZe2b7EGJ7QBhXLfmZsj384pXhtk6kXU9SiXYyzS5yENjM7AM3gSvYaYrpC2hZwuG",
  "key25": "3fDMW6jytMdXJ3suszviwmebghY71WXDVN3SBJLSHUMPTPrZmo8mdAJBTkZumkQoyrQ4g8vtkovxaLZvDPWWefv",
  "key26": "2M4Df3ruKRro3hXgg1sowoSA6oiYk8ern7AHoPNs8cxR3wfgqiUf4MS2nDs5rNsGuNmuBs9LLiyeqVJaRq5dt9UL",
  "key27": "7xtXSewQLKiPmzyFLtjPQxviy8fAAMdivpx8dfSZ3e4Ro1y8YBGv22ADRkNbvsh9zj1WrBNyH6HbnhWDBg7SVsv",
  "key28": "2c23wyywN6dBjiZyzCsx43MZPzq7c4oQojsd3jcF88GRdTsmAuNptbD6syGLjMLSftUJ35A7XcRG9DBenxwJDRTj",
  "key29": "3e2pkpH6uKm2yfeAs2n9r1E4Pu1X3ZaangZejqifnKxh8QTXu8HTftqiCU9RRUd6rfPeZpY352whZoUY2DTFZoZk",
  "key30": "425BzcieAEED5dxpXT84tYVCMXBh5M9Tv49ftgpptgnEvALRvBUrS3kNdLEny9uY39VDGSbhLgWuEqYHM6DFmiCb",
  "key31": "5cZn6CjXGoAQ5piBVu2DbNgpKDf8kKhxgpjiWkLuWxZnmdKZh7yk4ijLt8hHU3Lvb1sJRR7a7EeAFvmUWB31rkoL",
  "key32": "fENfkvQAizNjJoQzayUzFkYzZV2W19RFpW3gawjpNUaRfCe4JoaeCQDzbiGC9rFTetk6Z4DTJM2h9T8U5ELpPvc",
  "key33": "5ihjusRTvhWAzuGLoJuEqN7Kv9qT4dZrQHDXDWda2xLKPCgbzrJF7e9UuopQyvMcDUe1odt229U73FBuUxek41TV",
  "key34": "4z6s6EgthpVisfmwQBEhCcjg8VntQRXff5iez4agy5SWVGebnspeRPz65f2sLaA2uTh6C9t2NJt8HQjtvRQxPAJB",
  "key35": "yx3p5PtTfdHtncUCpFc9Go2eu4JzXEXg1x8xWLgds4aSTT6JHe6i7AJ98JL4pZSWEkpL4Z4sLEfS6j1C8sNZWfa",
  "key36": "5doB9RUrXUP7rtaRZ8YDLfJcTZSik34Ne1EbVJKiPjYoLzXcdMHGg4Q4Av5H8usdTErDwcsbGurA85wUvSADFDRd",
  "key37": "3bmTt2Yo1u4ZguHAmCgkGtRTGVXgawUFEt5C7Xr6fYn16eXx16kJgw35UjqwgB8yPxW4bBrjN9FcrfxdzsE8UncQ",
  "key38": "33YpdZJHVE1wPBrMdoK9xk5UkJuguXzGnJ8hXN4Ybh9XfmQYpc4FtK7izBw7CMuD3coi6THD9AeGpFBpjn8TJAeF",
  "key39": "4d95RNBrfbdV1wrugaveC6T1SbB4g4wDWkv3VUZRTdDE5kaACzk5FpYb3PQWfLzuV6uVfzrHhZYLACJSw4sKCHEz",
  "key40": "yrFqhSrdVLvKLy9FGQKqzvr49dWmf1F8aR1DeG16nEH1KVvXB1cGGFKpFf2C9m3r5v1utwvtUPc2kK2nx5D2usJ",
  "key41": "45q1zjai9pP5L5soF2RejXdx9BZzR7gM8kridjy3JgdYGJXfMDVPDjZrurdRxEqb2ypye5UGuQGc9p7vqCDq19mQ",
  "key42": "5j2rohVGFCR5XX9yCQiVUuigym4v4HX3wpyerAv4VJpUuodF9R5dAjYLF4dGfQ1Qx7teQsrB9KeEDRTV5Xd7kpg9",
  "key43": "4JFAAcPtut7FjC9x37jBmoGYHRHnjVadrFB3Eud7kGp2gYRqsX2DteTatcAzE3Rcpd8EBpPyP9R9fUKdaKEDuNnC",
  "key44": "E3gQXDqvfFHKHCMANTgwnDThuWcGkhpkEbU6YWWyHgLUnFxhKuPwKi7QqfYpnHQ4P2aQP1DB9kk5qNAjVh8KXxu",
  "key45": "4Z7iaYjHFNLpYTgPvkm7nxNgNFVLWvT8cyHuPGLmsQffpSUHdZ6CbjAtxJdqwwyVZwnt9VAbbgJa5Z5KQL52KLmi"
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
