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
    "36BtV8KrGbSFMzTZhhs5C7bK8YhgUQX9HCaX9pWUMhhTymNzJcQt8Tpy41g2i6DhVntuiDkfUUaRKrCtnYZMt8L8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cgK82LpbPxdivGJakRiK4CrzSjtu6JX1QasBfyEtz8NNrtvgthXMCFAhT9Az4xhnrVrBY7unTw9DSsR1aZyzH5v",
  "key1": "5F9MYxEcMHx5Qomkyw6xDqcmAyiy8qzNw8NLG9iXWVnetmMnfoqury89YQGxVBQARc1t7hYSc9D2UJiR2dLYYfY8",
  "key2": "3iXSqQWMEgrT8pP6jsKJzzNv6eYjTBGfAPbxhqkRTrjmRQZBjye4U9yJoeddSfwdxebx8acmk9rDNhPHzdYfF7ea",
  "key3": "2ziya2ZU33Se1wr7mUCgbv9TCrbQLzpt4SXE5xGsG9U32wP3DUnbS8kNuyTApc33Trc7V4eUUiXmqE3CKQYYwfo4",
  "key4": "2N7e3fDcD1qocRfib2agSgogiXvP2ravv9mJAZVpsSYtAQrVpackjkuG1QyfUSkBshD4faiFxfcmFkPdujCppBLd",
  "key5": "2iEBvbtLQ9aeqT4Z7SfSaaMpDdMJUi1vdCiCq8FNZg2nnqAJCWXR3EAE7aG5F7F7z4UzJrVgzevH3mMKM4rA82sW",
  "key6": "4UntNPSC7tB48PY3xvjGmfyUefksdYmiN7zeBqRtfJn85QoJdpUFspnXX1S7KSgGnhHHHxSLikwhZGR6ab4YsBzr",
  "key7": "4ZgfxsH2fixdNTG1KQsRgU25V4TDc45jEuatqL3vs8tFVUAbD2hqLJTxLcL4pifv2hTB6mw7GngfSisd7ncw5nQ6",
  "key8": "35KZDwhjpGsPKvp752mSn9iHeMLrRg8j1wGVEE5nU2yvDNRPrwrtrjgzsjL6WmBU2cVsfqa7vV3Sxru8qQUJs7Hy",
  "key9": "52UbXzGcsCGFSbSgBFTeZhEeDLAMTY3e7RDDHeYDgg4yegX378Yhx6fLUWA3eu6LTt8SXDV795Fi9pF1iSiLtLAe",
  "key10": "3Gtvxw1GZ8mvbSgRi5D5ukxZJ88fCPyCpuvdJthaE3iK2NGhoS6mUSV8rYjtpNbHSAnqWoZ3qoqUsJkri4zaSGKk",
  "key11": "3SgSuMaUdXyBXNb6VtZBHgXvQSyPnAxnDb2vDW91A465Umg3EB4qgKiwkcXaiAuAq6wJFRpsDsovRrnm18inZKcA",
  "key12": "44oJf9xztdg6yRSBNq4Xj7D1RYuq8geByzrLVtuecJCaxte5dpL5Br9Vm6AxX98ei9qvaK32Uk6noULRTqcGr26F",
  "key13": "5xAsydtzQZ6aS2yGeYb2AzrhvPBkwn9E4dtkQBdRTfqYkPBty26swvKgbNXYxCEby9u9DenwkLpHaxxUEPK8syQa",
  "key14": "5HCkSpxpw5uDFw1jbPPcegtpkd5ajjzHWpDXYk2tEtwyWTte3ev9jWqiJDbDAcxoAC2mbdcrxa7HJFLoCPfruzdz",
  "key15": "5KCU9ihA6mc2QG51V49NM8RhvLskBT7vncgFizWBbyTaQeFtbxSUcE6DWzoJTTnc25PaSWW8uju5LRvXewij7Jti",
  "key16": "42sZVE7X4KKX2xvTK4Qj4VaPPrhECCsVrYDBq6K8aC7mHW31f1SsDZjeohsLZvCqbeqbdX84mpwnkc6sDgnaJoYL",
  "key17": "4pbDiew44g9LoaFKw6w4F7MnwHKVqcWQPhL77JnRYpbd3dePw31Tu8aryQtFMihJuPhEzHixKG8ZYP9xuq8MCLmx",
  "key18": "4EyNxhQ2RsX4xJiJgbc4L4tXojxec7HptLFxSuYZzNSKwgTXJYEoCXec9FNYYT4UYD6K5iQnPRJyGgx16uTph8fu",
  "key19": "3ChXRn314vkcSFLzG2ze7rKuFUCK6cpvys136cD5CLKu6tNVwj6K1s9t7zsMa2CwDh5EHGfP11yfq6jrhvXDhyGp",
  "key20": "2R93FKV8zUQccsrYjPwhBrJNpeWyvCgz6oADKjGmNf7CWDGdUDFsU5XzTuYFFmM16C289HgV5fhzqF3iQjwqvsdX",
  "key21": "2yf3ySJaqR8qaJC4dv6EsJG9S1MtMjEysuUhRUxWNvXcqxSJkXACLAaCRaAkAkhuiqW1HnCHf2RzsLX3pKBp2hB4",
  "key22": "3uSvCLZY1pyweMehVhELjDseETdE4G1pPXFtA91Nrh7xSGwssHS4jMVknuSTfq9Ey6WgkSvcQzgrn41nP1bfQBv7",
  "key23": "oXjXu61EgWeG6gsibXuXK2KuxT7i9KiUf9kJv9GnnLctDnT6674CYsybRvqSXnFasSVPhdozqpUE128MSCY6Qur",
  "key24": "29arczqDUdXaQ6qHY12PDyRUQpA3KnEHUn6cvvQ54JVMcSnNMQHAPeHdYX3sZJC1W2vXTU7BByfnS41d6uDcGefh",
  "key25": "26hsnyD9jxNVG6d71PRJG6wUSduS19Xj8sEcn3xCuQYinMst8HBam8GycnF5WL6rMpxJgSidyeUhVFvVP2WX7vfo",
  "key26": "5wJxDBptAMBtVafh8qq3z4tQoRd2qnMdmgCTfn9qew68fyteuEX2vefwjc894g48bj2JbkyHNFX8eLUaU7JRHUCA",
  "key27": "3GrdiELF78LR8qYqLX4iizPcgbYzc22bV37YknYaAa3DnayeMq957Ad4WBfTQddDxZvN829wx7o7RhZbqGqg4TzG",
  "key28": "4oM6UmmKAC5qdEG9FGhHYkvCr9AhAF37J8qsLiriShcLwqXZeMPPSLxAbPvKXJnJsJ6bRi4GbqBronUBYW8LTWon",
  "key29": "5CzdXbnPntKS489fgh7KTSKDTTSV3UuUNLwmi2Dr7JWK3AsWx1y4sPd76Jb1YLqUPzpTZGx1rt2TrKwKgjZr8NeU",
  "key30": "23Tt7AymDfy9fMsoN6uZGwnWz2eXtHUPyLuZ6Fh4naWz9TVfV2SLhPjLtdnxHBBJNe75h7E7wQ6cGxzP7Z4qQgyy",
  "key31": "4vdG7gUsKJjCTM2B7vkMrtpEr94XJHC5gHr8xHADTVQULrQfC2KTtvKgSnHdksBj9Y1TsPe8VJECVwADkGWW1obo",
  "key32": "pP6aEuTzQsEbhfaUtXbXngSyXxQTTDhWmSjFM3STm7ZmeFp5fWpKe52aG4eNfU7TqhCyRgciar1HJgeZ388hmKo",
  "key33": "5yd9Cfq72xXAPbTL4VyrCRLCga51kUWAvDJxwzAa16Td5DsUAgeKPEUBet3xPGSCfpMMMJ8fStxGtEyzS3pjdyF9",
  "key34": "LXv375TXNNGnBJnnNdC3e81acJviYZJVEfJZQLTkWHTskt6Cjfu3HPt77FEB9H3U8zYrrU6aq5E599sEpXiUsha",
  "key35": "31yS7Kgy9JxT6kgNxVKLdR4sMbbpyeSfy91NQCwLgt71cnHaYdYKACTTUXNf7ehowhTjPSTGNQPKZX9fE7aPaTMC",
  "key36": "3MJUJAoAgegBmLiqLAN9hB7e1UmiqoqoMrMM32SaR45srHKV4FxReYvi5gxsYbuRv8eV1a3B9JNwCghK7zKWbPDE",
  "key37": "13UsNqNfVXNrkTFQkfa1pnPt7qfvADmFFB9osrVb9waLW6MahhkLXxUvuJxEHWKAg9sbcHdbkdwKskBaHavBtQq",
  "key38": "2Y1d8gP7X6av36NHYnGgex82WLdPM3ehks739SDtebVjhcvcr1MrWNifixniGvWegBXe8qooFDdTZeVGBhT8PTTq",
  "key39": "5r22fkb1i9TL1fsQvJG3ihC5a3LPzkHvb5nQ77epDHkYCagM8rqiVQhkqXzmZF1k7qxBzGsjXgztixQ2VjPEE788",
  "key40": "5TVpJgzbBG9BCee6T5oo1t8Kzg7foemf6v6GCb3wanWp98aFjRR8GcXEL74tyA5v7dFTH6jXcL6dTQURLqgFvty4",
  "key41": "2mSkyLecnwZ5hnDDf8cBy4iY3rVCBJUfHUwjejUzajBsxuma1CW2ZrQX6QUZSvxDU3MJKrDJiCPQpqw18bVmdBu9",
  "key42": "TJwRsnCUyC572SNo6rRdyBiHHQWpvAbXEWbiuq9M1JCE4xMYx1FqdeUpimnMsuwDGpkgfxAGAg2zPERK94EVDU1",
  "key43": "58JFudZG7f32L5Q5wDKSgrK5FeLe8aAvtgGFb9g1naRGVsszP2xa2x1S4HF5aVAt5dW5Gajz99Q3hLgsVrJDXK7q",
  "key44": "bPx5FeSm1t8UWNxVJKbhmkQM9wnJvrd7N9TAh8VxTdYJqTMyuVek2AHCa4g216egrFf2uqhFJfxUFubRV5VHGxs",
  "key45": "RzMF6MmZaVAomzUoUx6EgRqfL6mjCFwL9M1LWAFBTL2siLXkfiayhv6KJXqAMnNfBc51H87Ti1XotEWPAcEfaBy",
  "key46": "2bErsGqjwnRdjwUPXRYCPzykJeqgcKQsoz2LziqiDEqi4iA5hzKBeXFmKbKwfygLWiXJ6kGuvUz6JRhu7gmbu3U4",
  "key47": "fWkVPydv1mHfMzaBHLu3B574ZVGmKLMkTmTDkqbLHempwhWFwb2GQjb4a7jBN2os4S5wan3tRLaxmJ4wzyM6VSd"
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
