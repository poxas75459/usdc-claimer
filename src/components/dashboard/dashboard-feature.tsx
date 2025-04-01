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
    "332YSQ2BU2ee4NgcCw4iyfzZQ5gaYYyvgC2JasetYceDzGBzYCGVX8tWGmRa3HE5GET8qCDeLjcvaxL5vK419xQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eACcQDNRj93vBQzYBrzhyW3wtweijs6bsq33XWdvKDdkcxEtZr32H1oiauAagrXKf4Wrtr1686dNNwYpx9tkHke",
  "key1": "KkiBgPPYtT3zezG4pKNWqnN9voizX2DdserQw7Maxjk4QGrhrTwajzeAvNc1b5T5sxcyhj19ZDi7wDdC1MfUYoC",
  "key2": "4VfCgG8Uv64KGvcrz7KTLdYXX4WmwwputFFRSdQwcUvgvueBMEUgFbD93JGFXhvQtpe7rD2d7YAkLoZY5S9N6TBM",
  "key3": "2mJuCVLoonsH5hagtj1umCsmRwyJoF3J287o9JKgFJbCdr6q24W6jCiQ3kitBtLmeJAtJ15z9Q4UxWFG1NbV73LN",
  "key4": "DHMzfc7q7xSicq6KoVgQ3aUEzvsipBPMN5jFG37FD2mJrG63BYoSTtAF8fwbbZfzMBKyDDG1GRcm56oCgytmNVv",
  "key5": "PFt6VZ2yA1VFjVKzrRNQYcuDQiJkBDs61dUvHvyjzZcihxQ7PoDU6x9vJhZ1urcTsHyU5We4aycvUGybgTNU1aN",
  "key6": "5gzPzYNQWcPSD1gAgT4j5jCjPeTaQQEg3WbhGTbv2qLUf7M5uPGNNMPB5R2aHfpzTuUMiA8pjW5YZDPZLHHinVFr",
  "key7": "uk5aTTHtVaXVXTBoREgihugi6uEZKswpP2RGYcx5vZRxiMR3gSFmeoaCpKXML5mBZkTZUpBp22GVV7cYZb4jCAM",
  "key8": "3hkfnrJ5jXMWuruWzL4sAkFpqKHQM29RwpCUj4dY5FyvYoBAyT8hRPtfgpDNUgNeS8n9CRNbyFGq8nLbSJYh8hSN",
  "key9": "2N4kAz9TS7oqoFPrAB5XCiC4VNcDW9s92AjfzG7wpdD2NYSYWUP4WAsgXscu5W3HwWsjk1G3qKUPW7r4c2e6cWn4",
  "key10": "38t6RSEW9trfXCEPugBQYJW4ZQAFjsTK9f3kS5p2L52Snt5XNt134VHCQ1Bgy9PXVBt1p9QiNGRBzmZzi1mJib76",
  "key11": "5VuMTtJwRZ9rZSpLs8wCkf6jusEdPfwhPBiEbLa6zMCChHKEZZrqHwDeuBesEJaRVgMpCQDe4eWCQtUQdR7P8TaD",
  "key12": "2JoKQNqeT954HSpDYTJA2MigoSRtFDavpYJ2qbb7j2hXrkxqURWyfc7hYqzWjb2zmPQJhV7L2GAbhNKqhD2oEsZr",
  "key13": "214K9WCqFjDvbU5UqPjJ5YBchUNDR349XHtJzxkVcSYHdFvjBbShuAUbz8yuwpRp5FTcjaujAWuq5HG8yA4ib8MP",
  "key14": "4WHmVaLzbSuEWwadYVwKEzG8PWuGwTgFr9DTNXuoFZkVv7gn1PmGBixwWiNqdogqGFe6VBPsDeZk9sxZCm3VGzx9",
  "key15": "2cvqX6XFrhHR3wi6eBMARv6WmUXWB73w9BDUMvZgsAnm84Wx7jsojUFEnMeXxDazmuMKibqJAgA9MYnEjB8uwHJP",
  "key16": "3Nw3XVqyGKTQYXx5dmHPJF8ipueNUELvc3WXvt7cwUkUbewu98pbedYZC2nEKoxS38tHpZHhMa9BijhkCLaVvzZS",
  "key17": "46VokKekUMMeTRWQQptu24ENuGs3Eh4RroSoisvYADfN896BzjFi3nVEApUYZ5QZPqMeMeRTvTvvoCa97wKXCY4o",
  "key18": "511mA24NF7FUpZT3M9jTnK8oEDnEvsNz4vsCJQDTZkrrJgiVQA71ci8323LuXHi1c3JNh9aSokehQmKE5vuZmKs4",
  "key19": "3inNbQMRqneE3uzeXenyJWWMf2oSs3YnBrSb12pHUrgzNgdqY74xoYA9XrLWFxWAmmEcGvXJ5WLcHsvGCZoGk9Wu",
  "key20": "5uN6EgXAWJTmszoH89sHazhgdyvFRrxuDsCzxfM8oUYcXUb86Fqj4Mbm4EobCM9WEtkox4mCcuCEi23ypU5r3YDn",
  "key21": "52xBkeGTSzCXUEcG6TaACsSFafZ5KYAtD9WywYKxGq99HDVCTe4j8eTrAoDSAEKro5BeMop8JTANaPKir1ESw7QU",
  "key22": "3bVBHT2U5TU2WshhPCMrWxivCb63rj7itzrUnjre8BghVUymPRfWUk8GYZDo7KoPKCsGQ5UvkpzBUFXMhMV4Ufc5",
  "key23": "bcRjkXWhCETTRR3J8UsjMfirKg1D4y7pZWQN3qTp2ApB3VLD9tmyijVovooyUy5JYy65CXgc26Dcf6ddTxAd56R",
  "key24": "4uExP9Fd3vtrn81RufpZ8haAWgsEXmGneNdFJ3QgF6EtaupaVa66Mx7upvDq75tevK7YBVF3gP7kFsBuY83rkiAE",
  "key25": "5eTf1vzMhjBCr9no8CQcH65xi19vNeVKThzHVacjocFCHkvYXmtWWXU8Yn8mdQCV5NtLXWL7z693KskLUt5p9qWS",
  "key26": "2Ftz7dYs8YZbgFxTLgD96tmrR7McjACP6ec9qzuB3eb2JjjHqAYCZWfQ39zirkUjpCixFF2MCma1zDtmyyURqk1T",
  "key27": "qdf8aGE8heSbJD7nmLuJb2VDZmxvsTGPdNvcjarn72YHDKpQTKSaZed583oekQi4ywc19sa6nxvGZ3XfxReiSzC",
  "key28": "5NkLbg1t8ki7GvnLCUkfvF2hBt59aPe1G7avVDAtfqoig6PgLSBscYZmvADYnJCesyQ57ueA9BdMLYAyoHf8zbEa",
  "key29": "5evxeJz8K7UTKhYiVRzdc9KAcgHwcLMb3M1mHM8f5CLkDiuNViWtKnMTHZrRnhjDJ4UNLqopcEZZdm1pueAMMnxF",
  "key30": "8ZkwADoj3q7qSWe7Fc3QHRJNzZPqm3robtCyey5UjrcTEREdfeUSwBfvCaV49dYJtKtFTgt1ZLtChPzNJyGRyfX",
  "key31": "HuPMSeSB8Cpo5734GfjyWKVPUnXnz1HhtZJhikgyEKXErpL4Z17NmHM2yLTVKSQq14HJQX5Yse5TfyWN79BAR19",
  "key32": "296k4YkRoBQcr2x1UnjbUgy95wf7bqbfjgcX6xJ1ywWwuwCNXUa6FhcGGVNmTxW2fHGGvxr2gcePWb354wuK8kZR",
  "key33": "2GRV9ix3rfD8meNyVf5Vtu4SfRtaeq7Ctq4NHJGhqDjBVf2rniHNmcC52RdX7GauP5X16NS2pQuVVCrnWwfYzQHq",
  "key34": "5omQQF25nxzQtkm6Z77ncEtiH25JTGvcrmsjfYCrCHTPojsuewgfGSoiAFNq5WhTSiwDrHGez7CsLCLcXwF3fJ9N",
  "key35": "4pUemadp9nPRTgQhcK8T4SA4D191LcDV9na7FhyVnw67ib2Xvvzhumnw5xJZbB8v8peY1K9Amw8yB6C1GofkJ5oS",
  "key36": "5nCYM9qmC8e52g8eyvhezqWZW52wFzrhCnbNjQX5g5WKBcMRGCBGwL3Xab4jLncPZkRs84AomH1G8CDSxChH13mZ",
  "key37": "2f8dpv776aW7ZZPnNAcYs4zYHotN1pEr1arVL5RMspdrWDAeWPb6tDcnS8gW6MDsxigZ6tdasF1uNVKbfTuuGS3w",
  "key38": "jvzzGj25RfMm7HkfpDoUFys7A5834y9FFuUswFwnVWrgvS2fNFULnvpF93PmWTLs93dAfh7uJ3HhQbeUM3NE3ej",
  "key39": "3q8gPxV5LEYutVVgavxuAaXT8iVodXNDjh4Dtu2fwcFQAcYtjJJaeCs1Q5CvuLQZucMM3cy2zQhQfcCgeBHLscuX",
  "key40": "2AvqR2ZA684erFTu8eeo42DWdBj4iSSFqQeDnopwwuCKEA7m5EeQ7A7A6AtMFQTFc6AkHyWLQmDpzPqcaTFuUBEA"
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
