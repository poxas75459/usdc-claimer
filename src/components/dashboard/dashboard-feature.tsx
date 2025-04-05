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
    "3XEchzb9f3DkXHFxn95T7WgjUqdSiZMKMjp6osJVbSRUGjN2o5DdFyLdd2bctkYxUenA7Ge8QBE9UWnrWm37wU2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DbKGNQaxhkWcwvWJFx7pj2oV36C9GE84QiZ8ZFCJY6YwkfEpzHtgidUPoeRBog5udcfyDfAGH9gwmkoNxtJ6eiW",
  "key1": "4JBTJa3vwdgGXuhSwY4evfMXNyefgapYo272YiB2ttEGVsixnaKZNkAX8FHMYenHoZBP5b4mwFbqeZYruMm9DSgv",
  "key2": "G2mXhpofDiFzzFBWiYC2FQQ8FtDDfoyq4EebQttWXP2BHDdsQToUeTJdFjwy5pDpy215eX7f9rtY15u4K19J3Vf",
  "key3": "21pH3a9WrBtKbL7EhK6cDKc9Dk5XtmUZgLtrffHkgFmmGKyZHZuC7xj8o6zThqpWE43QGTpNCMfJmrqxSy5EtXtV",
  "key4": "5xyVAZsfLmjQwPyfvAdsfb9dLgjvwPdGgLStNhqmXdpEbCKThSB8Ja3p8dHSqhskadk5BS1g3ZrPiBHMjLWiv2vm",
  "key5": "61eJxBqyfG3x89XqS6RSPJNvDCi1uJ5qLE3GmSZBpXFtF2dRBUuahDkYKLxeCnyCiF1piTVaygg2Z8T7sBhqF8u5",
  "key6": "24ku2dGTeyuKELp34c1SW2EFR8C9wME7E53FfFMuxYDNiBNWpKgMW69shg6goWivdhTEp4oXxoUpRfSzHj1ESz4t",
  "key7": "NpkZXEHUoaCPT87kj4G6HWKgMKHGXWsQ7ScheYPPjoR6AGdcBXRhZwNmKdfzJKU1pbXz4X3oyVbLqXfgufegpCY",
  "key8": "5G6Gc8WasatvyNQPoNo3dgkiuCoNTwkBMZnDTAYMjBpmj3kNdRJPmqzrMZAkGmkMJxdQ7yoWdmptbVfqgjMery49",
  "key9": "3PZ5L7q3MVG2iWdLTUrieQ59r8Cv4NosBUowyEU6JhSNBQ3TA9wC9YeqKkkvj7HvLdUDMteVerodLPJxi6wFniQ4",
  "key10": "QdLFBXf176GbZywnsFusbGp3F9WLiDrhNyq69TPiQt4XJ9NAQAZ2RktNLJ31wkKwQULrexwdeVRwAWKntuBphZV",
  "key11": "w3oCTaJHV6pEvLWysZNnqatw7q95XBfgX2V1EyxUsjB1G7CsK2USsyEC2qr5TDeBzu5okhjyxpiHCUXPEmZzCjR",
  "key12": "5e2JmhB3Ry5uQ8vMnKjFroxLDLbzyw4rFr8JZzDUDktf7U81kASoFhYB6eVVt5FWtB8sX8JgFQgbrnNkbjEb5SKB",
  "key13": "2gsC1kUULNqHG3fzrCtHNai2wkNyBFwXkmnrxHYuxSfRzWWe4AbjEaQxVEEqFAbYaiwZagXkemoFFHTUv5EoWfR7",
  "key14": "Af6Zcw497ZLkGpotSWG8jMMLCsYthD9vaRfy71wpFi5QFeNWGHqKjfDstt94R2Z9suDXingFbZiJPUc7uW3JesJ",
  "key15": "3rtFvnaKRgBEUqiaRmi9GHZbazWGz897LYHv996TYSEPyW5BHqHhXnDJ87w7SQnF7HV5HVHVVHuCXj1LukUza847",
  "key16": "pt5oc8j6kmBLsNGiWvn4ifTj6PYF7LG3EcHVzA6CqcyRAgYpwggYBpmsiNXbuAmgxGuvxiz3ZYLC4a8hCY1mDZb",
  "key17": "5pxTujo1DytX4Wwbi8oV5kgnhKJz8B5iV2TPGCSDRZurQ9VBC6UX5XXxZGjhzs8kK6f7tRGQBzjmjaUanFGcBKpd",
  "key18": "2r5Bt5Y8C7dZDXZ9CeNCJXYUQLGxdMpCQ9nU3YmMrVwdApm4JhQYRnadZimK2zAhLczkzMaZHrca1ZPuRaF3egsZ",
  "key19": "qgB5LwLfH4aRCVE2JWp8YAUNzDcSrzGjRcqueJwnnJMsYUnWZgaLmyUMErcvgxSyiu1zUj4st8DkpdnhgU3z77q",
  "key20": "36PBFjcL8EZnzcFLQv2wEQuH7SvEz3rqNU1GzSLDwYVUuWThk62WShgu5L5fXzs7ssxxAVXmYfP8KVHUN5uZmVaZ",
  "key21": "5tVrVfiqC2gCbwHvmgaK1kFJJk3wQGpnCYuxBUFHbiG6V8uHJ1yp5TirAV2CaHXFqvu2k9G21REvoXHtoWNmMHo4",
  "key22": "4WCirtVw1Sxgc1m7niditWCFZiJZoZrN2vqamGdE9HWgymCpr8655fPntEaWbPMV9NiewUM9DitdyRzESdLtfop2",
  "key23": "S9oPLT8oXMfcqD83PknTP4quqZAvr2hQoYH1cUFnNd1nA7NUAibP4t23McBChbtKJhxBYiwyPZUfQwFhSjQ95TV",
  "key24": "izcafrG3QH7FiWeCkQUcMJ33PMxNRa1YMqHBM6vbnFEpk6tWVjfJUxweAoJD5CAm8awziyXTeXXTmKQgUEdULZc",
  "key25": "Yj7sMejNr8djakWgHc6eprbNtuNPK8HafRTajGGxssGntuKcPxEQpqVBinnhXyZ1mJ45tmmBbAXsCQFyvcqNdzZ",
  "key26": "em7ZhvwSWvAQjhS7GnD1KZNPBRmTBwxpBhZFcec4D3r5YuXnn6QvtyL1GrFKTtkHk3pYq4ijHWX5oU5XiafoQKC",
  "key27": "sXMvxYGfWXiKrGrM1qsuZm2MW2LHjqjg2sGczdQVfEXHWCDocrJxMMtPKh8zQhouLe3d91JaA7dv4Zswx62do7y",
  "key28": "5ME5FDmnzPcW2jm4RE7HdF3EUs9J4DRZxK9acGPunaWLKqiDjSqBDV45YtLdiwdWHUexHGvTpAiK6wdZTannsgMJ",
  "key29": "5nsTYZhNoTAz57eTbpN8TpAtZRnJdbqhGKQpTCDDaVvetEo2FrYE9p2QMvMe54GUvABo5tdbmNykF3S5fhN24SK9",
  "key30": "2U1wmGBPLJHVPZWvMJ3no69PGdzJxKojMdBVXweRdqp18Y4BzyzxZfPeDjpk9fDzAWFGrCZ5z576GLERUNpSURA8",
  "key31": "2hKNHzbPC2yfYFXgtVaLwCiPEHca6aT7s2G3c1wBjc7gjsVZetQ3cScQWTEWYpbQUBq1EugndoJAasokq2G4RsyD",
  "key32": "49wf2f9zJpDejmgu14kmrzJ8CkxztGXiMq7qV9usdsxXvP8MfSeZqa7j5w2iwwHD2hvnt2UjMAzAc5cDCcJTXnrK",
  "key33": "2XCByYkBTbWHg3WHFvwrEcvxxuxcwUb4vhqgRanttvmM7yi9QXDbpNi9gWPUWEorzGd8L1kyBs148Xqf8ytwNFmq",
  "key34": "5ZSzARZF4a1Jzte2N4iZ2DWFefbxkaq9CJPC9YHQnmqib7Q9uMajYeZZXqHM4a4cin8TATQjv8q62ALVPNRiUhRW",
  "key35": "4CR1CxaMK59BWwBso8AEpFpBmq2tGm9YedJnAiZ4LAjBBmUP5HjHvSvK2sMnYHPNQPfxVZ4uACh5pXjFVbPcrtWj",
  "key36": "3aCzvXjDVPdow1tVyo214ijn6mBCHLXWtrpzy76EmwutchGBJVk2MRrHkwY4w17tiTmxYve4w92UBCSkzp5KYdsx",
  "key37": "5SufExGN1otoxm6LbarWcjuMNfH6BQU4Q6uq3LDvjAkz2aEjJggeqYVUMV2pz1HoHfU5gLutAzVyTDuhxEiEraur",
  "key38": "4v4EdCdqg8y76px177xfqvpW9LHMRQSPmMs5ndPbuUspC2H9aaj4uzDauBTeC4w9qHpUS6oPYbDhAv9qnTFdjbi3",
  "key39": "2LKZSSAXxsLgjRW3KgDDYLbZbNM6WefcjFWTNRZvXw43DtYzTVBw7HJmkceTQD8LtCSgyNNBJYfufvt6RPEnimmi",
  "key40": "5pPQD6BMT8KWREffgZEphFBr35Pea1gFnnKR1DMqBkT7ycmymw7xGCZPQ2rmuuhN7SqZcVefgEBaBEJpgUd7TUun"
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
