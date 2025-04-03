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
    "5MRGgKE2Qqxv9yL3UnnXmQ1xpmdUgQpSAtMtqU19gk3SR87RLi4LB3oSyQsPgxMbvMTjhHfYinR5KBLusVbUeh8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eEpXz2GcJw7ofZbm2pNnKahXJvdj4mZwUpFHkMKeTqRZq1zcRibeHbSpiTSFSvCew6H4MM9QjjLeTFbXApV7nfg",
  "key1": "57cENyYmwN6xTGM4VsSD2apy41GaPcHS5ZVczi4fZsGu1WQJkKdUks9FCbtbmQuBYqRNHJTd9XZrj7uSb6P2Zm6w",
  "key2": "5PHXS6zbNwQXwCPEYZrtQMS2tmnB44CYYijCUtzZiqidMyjntFPyNW4ofVd8QtNBGPt9Q3eKQJj1qsejrWN7MQWv",
  "key3": "4bZmJF87NVdkvHJiYeEfpPWapGP1EYCVUGwH3G22kvw6ixmcC1zJcLesWL7vZPRLReG6UdRdFe3KWx29w2aCB2PB",
  "key4": "4AnQ1cL6URCvuznrQUukqfaCCqm744d23j6mVvLLcovapGS69PKn2ds4YPfFkaj3ijuoQFMZWPE21TTCLDRpoJYQ",
  "key5": "qrewJRPREZFvrn7dbANPMEUtTHQUkgXe5G2sq6XEvU15m84ouR9aF4wgpYfkpcA3kTod9jbsjmsZ6UWFtEb5QeV",
  "key6": "ehdCzrA9NPXBvCc7o6nhMVyg2D5EsH5Wxmjz14NynKdGx6mBrT6XwB9VQ6ejGMJESYEyz14tXQWPBoTYCXJXKjT",
  "key7": "2HLBeNCS3ELZKRR7RDGhzepDsB5F2ZwP7gzCSNdpqhLfiwKd4P11jA7yHKoWwe9hpmWHvqDLZt9SygJK71YYRxcN",
  "key8": "5f2wPCVw5jdovpz4WNe31GumnEBP8h5MD9ugskDPgzT3duie3X4hbjZ8NLyfwb4PzMeGbUkvEmTQ7b3h9PyBWjJd",
  "key9": "5q2gHt694juE1Sv2W4mqTDfedmwnYPoPB5W8Wy54aC6HaMKt7UV4kZWBxp3bY62fXKQo7asH57HYDA9ukcc6fAoa",
  "key10": "57YkCv1e3oocchGUweiHmj7KaeZt5ekn4dxNg1oYivzoyEhxC9CAvc6A92QV9xUvK4GHvVbvzcoWN49j7XAWtwhW",
  "key11": "4MiNnTR87L2Bz3UsjdiYXK2GYMwi3Vb5xmr6ZR1Ek3MgW3P9U3G1nzK4FCMprKKVKogTwc7gRusUoe45Yhjt47mX",
  "key12": "dQq3JgE4xtPUVYdUZBYewh5VACKZaKWWrPsMBisf4CyuhgtmxjbcasL7xihDNPj6Zi4iJ1x9hDNcg25dafehMwn",
  "key13": "24pY9jhQVwbffcLBkatEbqTW3PVoM9c9JT9NoGvznU8aqQ7KmdAERZtkjsGNHg2bTvwHSQc4Foa85nEPT9mnrpr1",
  "key14": "4L4pfW7mMgtg95M3ePmpB8YLTr2zPm9jJD8jsYE5kPkXwCeFMSrHXFwzLuTYBYT4qe1Lnn6EHB4GQYMVKeCwECKr",
  "key15": "pTz4u1vReyikyBDT5aYgrkPtkFxi4NVMuEM4XL7pueqexSeeoU9twDUNeognDj4imsYR5QA8YM19UUQizK2uvvn",
  "key16": "D4AjCB6sjoBoki7zMUYUqEVjHrutaXx6qDuPNqD4gS6L4TycdpqxYhMqYuQNd3wbcDmpq5Y4ovBqJ4ERQTzxdki",
  "key17": "4z8JUHQg5ACkZFwz9q78Kh37uS2KA1FdpeMecxxHacJCz6oSMK5ti1KNdxbGUs1Q2Fvh7frKPAeYn4LEDrZVq6Qz",
  "key18": "64qkcdhjQNRwQehsEEWW7zFX92zbfJxEJfCipTEmPfNUZpQqgNi5iY6t6Zv7uV2Pgrdcwt9A8dHhMGdZq4tWpi4s",
  "key19": "4uQSF1MfsXe6e6PgjXsccyZsetZkQByRMski7qtH2NmWeK37Kd3Tg57ZCskdf7Sj2Bpu4hQEFbVZMXXF2s7SZ7C7",
  "key20": "65eFfVuCCTi925vQ882dF5aFkhv3VqcVT66RVPKqyDckCnbPTzJsyb5SvDDQLefJUUtetW4TGvY2RkhanaAcrEMQ",
  "key21": "X1wqWMzE1LtmYJAixJYh6n23ABVLNcxPxz6PSQmWLgaRwbaXSEfxevvR42BUq6FqLq8GjY8WU9fWktbFpHhCbJ1",
  "key22": "3z342ArTSAaeHg2RjnTtrQFXGmJQMQBQhsFWHxRyuEAg9tCMKN4FJYnyEttPn8LcExYTsng4ySTkqYc285u9er8W",
  "key23": "2khRctLC4qLVLrKXbU57KufUM9JzHGC4wzDwZ3UquwD4NiQMW3FfrrET1cG2ec2AMKx6mTSbvBJr5QTwV8qANG7H",
  "key24": "seCAdXSYL6EkWMo9wBmkLx31VYSLqk9QVCi9HXvQ8VaqHBRVMcD8yi61dTgaPkQXf5a5mDrkp7gMiDH54NAJv1h",
  "key25": "24xwkvapotLYqFYpm54M2NwcaF8Aq7fhrgPSNjeYL17Uboy75bLNCaukyT2hzVmxcQzaZmMV74n3Bexqtjftq29k",
  "key26": "3uCDmauMPtUFdEcgJCrZ6EyDKcRvzz1GKnzrSqhx7X25MthEUx1bKrjPV3uuhUyM1GmBVpswkyFLmwYNRhCNayCS",
  "key27": "5k4rDsJuUJ3ZPfKumpa8mS6aX64ojsH9iTVdyWcoXz1uwxpL1Yto673gcYM8Z6i23X3gpPDNsb9qMnAHEwTVBNMm",
  "key28": "nCULABxTpcGEkGu1ebeZsZgmYfSyKJWYdEaTE6X1sP45jAbh2gqQbBcHbN7RmNtN6NMNYEF3j57h9w8vbTK46zs",
  "key29": "3k5HpFrsihVYsC2FfpxPLnTw9BxF6c93hY6X9sMGGw8XBZpHk3qSt79AUotmFAoU2jTvqQRq35t1tzerRAWiYbaL",
  "key30": "3NyiVAGrydvi167A9tainctG583KScMpam1SP5tiguWyvPcGC9WDyiQp8cMRXFpfE3XCCrYqTzZVbAXYwX6Y6Wst",
  "key31": "3gEpy9TUyURKU5nxVNzzJhvCu4RgJW2TQbaavqm6h2gNnSwn1hhrw6V3Pr31hQd8AEcpXVoWhUniLakdUUwQ5UPc",
  "key32": "2Vygwu4tXWg7KGB1ZmRMCz9BkxFFBdbLGmbAV7ydbQFK84XsJVtyoVBn8sYz68TTJ8zyv36g2W65aEJASiRvSaGH",
  "key33": "3DDMB1AGRtgGCfBKe9zDabfLMEy1ykUozgqCkwgcSkfVagGS2cNcy5Sb2PoaTgQZmwM2XxQ5bRS9UyeEb6fhkJqb",
  "key34": "2ggGiy81cdXNQ2cDocPM5piLTMryzFZcxFa3WmgUGoNNvZWizcFZfMVVLJTD97vThetvKxXj5xbUSAdeoSBh4Lm9",
  "key35": "2jD8r5RingMX3jtUbJqTi76F76qzKcsCm2zqXk2pTi5qiczPDfMWsfSkp7b3bq3skRzqwHYDi5z7vh7HwiD1fFZG",
  "key36": "4sjwRhxMwytsHgbqDah8Zihp2L9Z3XKjs96WXzJ5DF4mgc8jhnkv2DErpMU7RPrroLyEJW1w3m432aGEwf7dkgGj",
  "key37": "3mh5JNEGHZQfUsHmju92TrkoG8GKmFdEzWet9CrHjyPEfAQB4kb67A7w2L4PgW5WGmNs26yohr6XceYJgyeXrFah",
  "key38": "2mtSEWEKd4x8MXvddWAmiMHCSRZyqbJ61ij1Kfb7NBFK9NVgEyYxvMm8kAmcTDJvLQkEuss1iTKbxJeWr9kGZsoj",
  "key39": "4RQBGkDYSqPivjFXJxXcABJvvJYwGDFj6WaT8dANpZcGyHiXbQ2v2U94vtRScK65pdTP3w1SEuFBGC2yo4UVyqWk",
  "key40": "5B51Dj5W4aoM6e3RJEL5MmC2AqNLzbduDAyRfWPJL2Fk3NzVN4WCH2gMWtdcjbxgsswb11ojZtfaXEVWzqPnYbBG",
  "key41": "5aiDwJDwyD8z613ta24noP1EibY1U4aabjCBY23yYZ2LkPNWAbDaKW378t26tFjnmb3YN2kYTKSzA52s5x8BxZA8",
  "key42": "3b7SeJjKQ5umfHqEZSue74rZodSH4DhTiZnRe3BxBdV7PxBduzb6TxpGaz3wgzPiaqEPydh4CLSDy6ced88tFMcr",
  "key43": "5wKm5ZsSYmW16Js6PaV1Vi2TmogqWCSjxKyLHoenLMCsqVSh8dFmavu67UzY73hhwxoastyBLHQiEiAzyzkWq6bv"
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
