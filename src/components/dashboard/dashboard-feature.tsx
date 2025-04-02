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
    "4ejVQhkU3j1SBKZ8tFqez6pmtoriRCoy5vpCr7XXjzCVn81TnYriBf7L1hxR4zygxhX5iinMazZEsS5RDUY6MRKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yCFVfRpVBkRcbRhT9Gb7zP8ZV6zawpChHF7xy5FLcwoHkCyd7kJYRy5rmPJtrP42GrHoKumydhbovg2xq3zgHth",
  "key1": "7734CqfwyBKjjK6roiiw2oqafHqhusebkLAbLnDhD4wv8HFwmoznfcstDqpczFh8fANL3BbCUrLZdce9P9peXpB",
  "key2": "254n7HvZRgDevTYobK7ZkAGnyt1QNTVigYGG9wjrGcGhJQ1hJFaWQmBycBj9iDeL7LMDGgcqaX66kpKTT3Ps5ExS",
  "key3": "aeEWEAfVqjWV27EG2meixqfXSwFf5CkptMbfRbZZdbrQmEcQYRk8msM8fGTqyS7wpghRVAByPcnjG3URhGuaVPf",
  "key4": "5Jyx7GS9zHszyEppDJXtVef9zdkYaJHY37rTLzqqbS9Abm9XHizZrinmFKw2hFvQFVNYifcYnJkz49J2Jk1K4XU4",
  "key5": "5Sscsi9eP6zdMQN1xVYKKaUGSjcSrEDyMXkJtBkzKG2zJV4uTvrag5rqKyt1tdyN1G1yiPKfC6Rspc7H6dFdADs6",
  "key6": "3L1edmL8BfdpFSC63TEvUJ8sNwNABgUCpb3YasWeUBSoWidtFnDWqiBphUt8uE7d7v89u9bLvyx5P4psRhCDMoLE",
  "key7": "2b5HHCXnCPLzXbJY6BAQH4jDEhswvB5ssUHz3xmsNEXQzPHz2t1MYBcUkZfM2saUFBTxbVjMEqD6qU9F3xM7jqHm",
  "key8": "4ApAQDuJwiXsCiDSWyKsHXkmpccsrb2KDjUVCU7nFx3Z2dHousENuuU7TXz4AwKWHxvm1771yqh2EL1eUqaubhLG",
  "key9": "5k6CZomGGXjcqLNt4PD5qEH2J8kBFnsb7EN8H9qSP2n58HKqze95pM3Rx6XAcR3uuXgFWVS2zVFHiguVkhtZfarf",
  "key10": "mU6FXQWiYvo9NNnwTu8ycwH81VeRx3NvmeW7VmVYCxDxnRd8qxrwXL7GZEweg1EiB9J3NnUzEyv9Ba9Xbw6Gq3P",
  "key11": "Pn3r3H31EVCAPieQo7NBHPVt5gqzMZei9FgYWUzAQMdJiuSp9eHXhYEFPvvGzVxCy4VYzxc8yRVemRSKfJwmtPt",
  "key12": "3r8ARYVdwSaH2a4JCjMdbcrfMyvks1tLt5a2qoEWQYuD9hbxHeJDsLvKSpqNZJpR4UTdquRnbHBU8TCFtF2kxeEq",
  "key13": "55PmMbFagWbG3u7Fk3DLxQwVa62Sy9TYvStFDYwkk3pTtkxM5EdckSX5PLyz7A42PhgbdsbPvWodsk78BT2UdYz2",
  "key14": "2NoVQJZYHDFTQxcdSaUKE9mhNJbP7roqQcD1b4vCJ9tSgGtwike1UwewJStE8To3y19TJg7PgTjwBNgpdra9gQse",
  "key15": "5ivt6q9yGF5Sm2HmifSNn51WqCDrz9voUUoWH4pgKK8Pa4gBV64v1VrnBQtW4UrVoPxfdbCPesDYt9W7Juy97MRh",
  "key16": "3tYF9y2t9tt4TBHD6h4bz24Rym6Tonmvz8BjRbWWeBdV7Yhf7CWrHdDWDM2Tj8Ha8iQzvTTVrBruYugYaXMbP5ni",
  "key17": "2VzKACxUQ4Sa2tSqjYcnPxwAS6q3Dbzmt4ZP59ErqgskSFdoZnzyGLgY6Fu885m3Z9bdfJ3sBRr3npJPPKxSErgP",
  "key18": "38LtWGgCDCojnYViHePaKsrizenV2K1fVyi8o5u5z6s4KrsNMKUAoZyo2mD71cfW1NK3zhPYZPyJ2inRdsr65mLP",
  "key19": "2jkZHYCxBWiRQXMPzVw4JnPdiFTLpJANiRfC2C1hGBGVrQPYKfvTJZydmpBia9ML1WiMEdQstrz3m9ZaVyoqnDsi",
  "key20": "27PXdebvs9YUe5czddbXEGeaPAWvHzqeH3bK5a8b1oU3sba7yD5jEtmBQhJjRcam3RHwA9nmF21CMHhZianJqCvP",
  "key21": "4Gh42JmNDxmDQd1NeMsCqdKDD3CpXzgcrGrgoTjLSnujkGkHSHgYUsh75b6Q1PoerT9bHmyWeb2bCTND3YEJW1za",
  "key22": "29ThndtT1k9P9JWA2TN7HAjyBLvvSDm2VkTEMJHiZFL2qms2ogPpyUJsnXzjrZwCpHJGWUKzzzxnkqggi8Y7FfUi",
  "key23": "2GVFCWht6pgcFMop4F6GRMshfJMvH1ry67MoC3NuM7vqyYUno6Y4iDZJQe74d7dTFu8C2VCqGbmpKqeSA6fVrbA",
  "key24": "5pjScPpKETRotCjsNKxjbeSWEgf8K3PSa8CyNma6oabdJQnvTauagUyZ2vpWhzVnFrHdYzqzhtjHWKEzCkEc4ebA",
  "key25": "583NgjAuAnWigUNVxHztQjyqP3SsNMc3SV9hhvnfwwo1kceH4XkteCGRoAUUBDSkvtvW2SZEKxzXJobG8PGNv1tv",
  "key26": "2C98xvzXwdMCzJm5kUSRoQrbCkzRtadwkVgW7XJjeE2h89wFhEqSj49kSPAVwEXJoGCG9aNgoBf6ksyW6hbkE6qj",
  "key27": "3CYRbhJbPuiKnnJeuvbHN8aarPPpY9MYAviCs9S2TybwMH97y2B8KTHUjHFcfbHXU1W9zTiPeZJrpCrWtVa3YD4h",
  "key28": "2wVRociQzKNpPSS6jh7qYhDaXfYV4QdqLdA1TbULoqvgzB6pgcYY7HLRGodc4FAjb8gC7CYrF6Uym4acKHX9J1pt",
  "key29": "uCap9kTAcqDGvvpQTDimYjPGfJVzjVpeQM3Nmah9rtWtdvvgHXoFJzYqZ2qMTxqryBt3ZYPN4xqpryMyZonGGxF",
  "key30": "4SiNpmQMRRANHzhoucVmvcoQEqKXuUFAdG3VySpEpGh1H3NvW4zYs78QpNv7NKXpBeyhYJzXHSGVbSUGj8CYoB1d",
  "key31": "5YFM3QKGSysLsgVRbNsVfTGJYtAcp9wwQNk6YQwpEeERCD2FENowbJNh15iVS5uiv2Zc4LAa4AYYvcZ3xtVB3VD2",
  "key32": "556TCQS2jTevZGUv6cf5mqPVezvvgQfkAaPRh7S7RfAZNRojn36a2rRcZpeFMuX2iyiAEETKPKn4GWJg1Y9LWAyu",
  "key33": "3GeK6CVqD895DcroVbVBR5GNLTuWFqGrSXv4Wnr5JxcTUTiKaT6DaBhkXzxfvrgza7CzX8rWCinCAptgscmugyDQ",
  "key34": "H3QecvL7zGp8ELSABnUZCFSzHTibBcaFSJ65HvppUwQyZtkCGmb9nQMhZqXBM6QZQ92beqEWx3qEYDitUFK6foe",
  "key35": "4yW8NRJ1MdV4S1q7oQSBcqPAdTkqRRiYGugi55nRAxf9ZDJVUVrt6kmuaSAiWLUrVXE4Z7DqeVSbmpcmavV3NGRp",
  "key36": "5JzsVpEd2ybiFJsH1YEm5uqE7cBtAEAxpTsCGYFxGTCqk5BDTxZWqHDGSwfqhoNGs3dWaJShp94yn65KYx2RQbbG",
  "key37": "DTkhR9NgJg2mfhk74VFXHSwcSmGtSd638XZ6VUm8zpx8BcKRkGg9CSVAWpxZYhCiXimFhhcHGVjAvwLE2k2oAsN",
  "key38": "RXQyaR95QM1cvh4iB2CRBaAJxh7S4vutZNzTLPWeKgnhgxLBUEfdmkcVjYm8AWQjQafshrVQAK3s8QqTBN85eiL",
  "key39": "56TFV871Mac8f153LN42S9SAufTm4wWoSUGhsfET8bre45Kcng5ebn1Spwrw8bmSffBL62dBQuwaUKe5rYHQQK7W",
  "key40": "3Ke4KjvtV166dedAFYAdWoZWLbhN6xYxYurXoMfzqYxkRQwrTSCHqWk8tjwXoaSCk2NQwRANMxhY8p5rXQHj88Uy",
  "key41": "3qpTpbTPi3WUzfQ4bqQKSGMgP1euhzWSu6TcUeqkcjqBx3hZ7fbhAFkrMx2PyFjuoAbMfgESWMA2o9tpXR3ZXsnc",
  "key42": "2XSws6Znesv8ACCDeUeVU6XbXPJsiD2iCL12YM5foKJUrWKRYf6V1MSLMwASjCzrpioTnhGiCzETktaUgkhfBvSf",
  "key43": "4MBzY4MYdRWwNqfUBfos2UDHsKwMA9Z9Q2otDYC61bq5gbN6iPad22VxHUqxiXTpR5W9kGJBkfGwzY7uEsxocUpR",
  "key44": "4iTUDC3eVrENv9pCdtES2wGbMz3zuGWmaGSfEGDk7XnB5yMCqgUufWSG9t7ZX2UUSLVAhK6AqHTZLn2FKUN81BeK",
  "key45": "5awtZZPJDuoc7ViWhDM3P2mvZV74tmEk6jQcs8qYLnJaX6Wz11AfJ545zbVnSBS5z5nGkc8SejRAeTTaUmhupePJ"
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
