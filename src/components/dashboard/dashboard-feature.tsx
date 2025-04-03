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
    "2znCvVEJRADqVoHydH6TGkBksJLhdwtxf9uuy5ExM9YnAiqBRvrwg94sKWcQzxjAEubNm9DmKxL5fdgHkFmFayUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "465N16PYxdK7JRrwxbkN4vhhqKhRnHR41e3QzGd4NAgzegrdQe9eBmMd5W8TcacJj9XP6xbv9VtdMog4FHo75vVd",
  "key1": "4qQHmCdceFnvaUEzt84oi5qBoWkAYZJHRbD8dMhLsV5nHFavHy4AcKUKjKx4xrwUfWfh7qazkC1DphwkVtogz5ZY",
  "key2": "5ZR7XoBPi8YTcV7ejUi3yTCrNxwV6c21m4uT1uJbFPnW4QZA4QQqi6QPM5gBYs4aNMWAsokTonhtnXhnStGkZ274",
  "key3": "5MXGcrkZvg7YM72dnv7uEpKrmrHsKbQxARFeDx2xqiQhwmXXfQz6zf4M18LBxBinSAKWduWPaWh9fePYXKzxF2nf",
  "key4": "5Jb3G7FmfWL8iTVFD6H2VZyYCq1DsdjZZCnKoRJyXr5S6Gbh1n2E9QwNERs93gSLxQ3fDVwy3PbsT1fmx6CBZhDH",
  "key5": "cHU8DcPwWgYPTXNyNA9PCJsexC99pZ8CaeFLxZmwznhMQZVD2WyTyMhaP83UFCFbN9f3gdKiDXY3VQbL5p1d7bF",
  "key6": "4fGSf9rvEKwDaU9FFAqB3uRzWrgxDFTutJWPBhureHmrN53sEcRA9x4q4SZpRWWS1YbEz4HP9Vrj3AVnRuRMpRZt",
  "key7": "5BLw2u9BBHtKiwdPQNWBhxoNhEUip8FE2cYC47PGUTxj5a9GwvqmUsM8mfnjwyGMNXDcN1eSJbh8aKMSdQjA7GMS",
  "key8": "2xZy96Loi1aYVmM72jDw75P2oTyXbaSiHM1zzM6DoMr2FwiUbw5ZwbJTCutSYyNB44x7SHJw3Rp5zfwY1zsSqHUh",
  "key9": "4QcqHFCaQRfb2bmVY2ZmmuvBZuXFbATX6RS5Db14uV9gUedRDYwHGiqBSYqSqU7mnwpYxTmS4srVBhUruUkyWdyV",
  "key10": "3okxf4MTbMoq3jhpte5eeUTWxfXCimQ5K4MH4925N3XhoNK1iqz9M1DNvmzAvto8vqTdF2zd7qip5p3hNgZCXWdQ",
  "key11": "4n7Gh7UGgbVmvAv5EN6x2JcbikG2WatNBKoWBsDiJ9z3FwcErBgM7Km7qjv8ppnc924bLhw6iZCiShZi1aocp4ZF",
  "key12": "4P2UA4zmUdawmAtpgBcfWSPkvd2i6FrTikUwrjUdpknCwukS3bte9Mx9vgL13aSw7ff7yfs6hxnEtwmBmufKKTFP",
  "key13": "5MiVaNb3hMYi1kEqSuduUwo6sUiB3N2jb37tD8FUSxBfCHNNkUbep4yX76S58wSx5t5N2JuJNChhLYm1GiYe6GWu",
  "key14": "5YBGe3EbaxPCRWMTP36ojrPtffyTbWuvGBVrPXH15N6NNH9o4Lmx6MKsjEMzsLYmp1GnqeJjBVi5m1vQmuKrJGxN",
  "key15": "4oMEB3tYKwEv32pLKyzBR7PKGq8H7tmPSbLDyfTLhTnzUDbQ6G8J4vXd8QZLJYsYc84bUGFdoNkyNKSVV8p81yVr",
  "key16": "KJqmzt8D8xx7zkZ3LtFyGEFa6yyryXRgn3TTtCbkNp97ucC6tmvBXmnJKQzGcEtuNHFuEGPZJ2iZvBDAXd3RUJx",
  "key17": "6RdNRFbbLozRgLrbdtM8WTFpposWzd4Ng4cxG3L7R8jfPiRGmTBZAAVut7Lupuuexwq1xCJLqYepQyKCTzxEQxK",
  "key18": "58BxQAv16npgori8yVJppqPjcmuPADFuPTW1SRqPeemMpvz9SnccLQaRfQhvtnU2gf7g68WxpNdJQxbnU1B3REB1",
  "key19": "5scqMZ6MUzH5Re3UHyNbDqMaw7Lr4FAsPQggt96YxdVL8J9WbrTBcqzrDrSBJEq4wrZJJwqqtm12JEvVaqeJUgTZ",
  "key20": "4X71kxs5uWSSZynQRuBTmQEvF55pVdP9VLjrSmXM5jAeLj3af4gnYij8H33kQdx5ZTuFFLRyRH66seXqGQGyQAnM",
  "key21": "4eZFSprrw12mVeciYoadUGimKDzuX3ZEPc9QFTnE43fFGQXMjNj9WrzBZ5wS7rZkpmCbaSE9E5tz2h4xv8FhJ9ar",
  "key22": "3wrSJ8mjmH9oG1b7ybCj6NJQEudLowe4hJgFEm9QM9NcJH1SxChsPBPhDKdptRpLR5UvuAF8J9SUfw5ejXyUv4nv",
  "key23": "3qtPDuwQviuoPq49Jm9nHS6cM34pmCrRG1gQWRa5F8WQfEqw4anoP7khCZiW8HzA8oz9XvPTW9LSoZ72CgQwwjfb",
  "key24": "3mU3fLiqddj5oLEgz7ab2RMswmTRfvBRyw6jhptTCcgrjucohUdZooFbAqtvHBPvdZP8bxXx197a6vb1RaVFPoRF",
  "key25": "58dacCcmkvnrRyCXddha7Rc1TLbunAdTME2icVgcC9NBw5sQ3VoGFxuSEzPoARFRazKMrLcJfyJQJfg1a3p99dft",
  "key26": "3y5riMzr92STDbC6TZYiLtV8UQ4WafSKYeNJoAu33w1s8g5pp9GxySxnqZ9BACPUJYeWapbc6vX5No11y7ypaP2L",
  "key27": "3wuB5yw7N5CtU838dvbfsCsf7dHsXjWCQjageWchu1nqiSWm1z8ig7zE2Dq2HucC5RAMoi8apDbsHrEh9GfFfabY",
  "key28": "9BPAr92o6iuneasf8ZJwum9vnX8LDtKWj29eeXEtGrThMxkNBFy4Njn9AY5NdvNDfiEAjihtiUdR3y2P3yvbPTS",
  "key29": "3PKKdh33XnAtFBqzv8cj3u2CzZU4SgCoqomfdba7tZue7zSy8kQ5QMCZbKGN6kegk2v282YBckubgUmyyBAyneGt",
  "key30": "48xAEZoYVsoBMSNfEiK9VvsiMepREYYRZiv9gPwePVV2NADagGe5qfPu8LA1uzggHfjJ5uuXYZKD74SGJsBVsaBm",
  "key31": "2JCvv84Uxd1SMiEmXn1pADwYFKopZfg4RXtqCNzLpxoFr3o7JGecKMd6DbuT4WutaC9pRRWj567z7vQg2BidV5Sf",
  "key32": "3WMJuodx2BdmCcTffoo1D8JY5R5TsZFXNBkwfibjz9fjU5985soahK4zAvUzbfs23EbvjGLbT5gEba8t4kJv7vEN",
  "key33": "5MYm2VB1o5nvwLUo4cLzE9W6E9NzcVWTgQqjWpQmxRHrsVxbN7xgR4rvY1RjkJKaaWrHMksiZVjryzPrbiSsCf9F",
  "key34": "2Q8jQHzWhQHzenTM549rmvTZWqgGvUJx5Gdkx6YZYancSndmCACEDfUSVKs2UdFQdEsZfqDmR12qej5QmKEsYBty",
  "key35": "36rKV5Z2vocBq5vMTaqREVf2cKppXd5vFmF6ExwJm6p1WN5h6WZ5XnP9RF4oJ3PdsjJqZY43RcZzyhNSqTv2vKc9",
  "key36": "5JSNjvLbHn1hGoYZpAyRgZz6NjvmHspXsJx4HY5LnwzyytSfUMoPwYRhk1th8JTgS825Ah1xVr8GrVM2sk1NMhFp",
  "key37": "qG372ngemX3jPAyVz5iYR9nJQb9AG9qce3v1E6sCdN1LuXrM5xR5RY7qUL43iyiFGFniLFM6zL7HjYgyVDi65o5",
  "key38": "4NM1qEoHTCQcw59NRf6R49DNZZvCHtDtwU4BA6n85VDLWWvrTKA9h3PLKznfhsoSS2DNitKFbmUGZY6SpojT2pmD",
  "key39": "46eogcURBwvWkE2MRhSYMnDMcmuzXb9TVct1XGK5M8X7PMsiZm9vY8W5DSHzqRzVckYxMyZzdTMKSv48nvG3Pyda",
  "key40": "4rw3aMttBasyuv9eyFuFZ6hXad7EdmmRygBMTvVeWYYBuHKBF4zXJ5JDGE3XCXNFie8oz2sAfZy7fmZ2dxsPENH5",
  "key41": "2kyJ6iEzrhF7rgRPezMLWnYx7itpzfNmFbNhKL5xrzWjHk6LgPyGqWM5TxkHUeQ3Sok2vELb1NND6p4yToys23q5",
  "key42": "2BqvfgiPQAsChdezszZU6Bq1HSM33F7mtjqtGaUhKu2DnTEJkABNsU3Q2CyycobVPMXn8RawZZC24ozCjKXFdGGy"
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
