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
    "3XuotFNw8cSGHQ24S9y3HZjPNaTixQcVWGDjySgcz24cYnoxWrU83jrLYYa8AvdZdRXq5EvFYz2ALRiphPaymVU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z89yApFbFywNVp537SJho7hZXm399u2GRNKV58vrGTZYetZRXnUQKFy8fZFEY2bW6urcUpwQ5Dpy89z4qxyw6YJ",
  "key1": "2NWRqAxa4fXLzHoVE9bMsV4w9MUT5AToSBTEVLjigbGYDKsSojtDasgah1A8efpMgZqRCXzDaybKLDZjq93SLoWw",
  "key2": "oJgd89vPLhnVRRyFVzwkCGuUcwhmHFxWqojUFXTXNATte7JJp6QCo9LLiNaKbDikSdRTiGnfR5XcDyjaDCcoX6C",
  "key3": "62ZxgQAgzDbVBvijCrUZ2qASfLYU24omX756m8ujWRe88xVZW2Qp12D8kQEFDGnGmpd21pGynj276CYhWyuJxvS4",
  "key4": "52QqFCUyn9Exg1yUDnjFTFMotXzq5U6WuRDUuKQ6RtbNGB7q2JtAb8a2eMsszonmA5PxwRspkNnNJjKLPz177JrR",
  "key5": "4SAnVDms6LgZ4J1n7EA8NSTX8Upd8gUuN9LYgCAvQFguJj6fxgyn4fyZT5SQhu8kpK5FZDJkvhPzUV6Pn1qocKVE",
  "key6": "3tXEDairafzRfTMMVh94bUTrdvCPmepJ5vpYfWWzJxt4bMqLW5ifRBFD67Z2dYbmg7cnSfShmQknXqksEfxUXC4t",
  "key7": "2fYiJK8SH9oU8J8QpHgixkXAqKGMJagUHUB92uHHVs5faAingnmKC8zEs7VS8cnecWXPcfBtYFJvbUt2DUEkjmKN",
  "key8": "5V415dzGyaVkgmxQiMwumwzeRm4QLbiJuLXGP8LFEq7YK9VPrjQdSNXixgAJmoneYiLzpYJskYN78yGUiRBFSBNS",
  "key9": "66qJnqKYvpSFVn4CtxEWjWLwP9CG4mH743QC3w3rEuXBAPu7zgYqn2jwgCd1yjMRPWo6exT4aUv2RdgmPj7Mk69L",
  "key10": "4GiRr4KK9mMmYUM1zKGpg98B38ob7anyLbSwnKiK1ct5gAkrQmQWPDijyxnPMbLDfcFvNSbn59iFB2QRU1otWaY7",
  "key11": "4ALQBZVUB9Xrc4p1XBRCvLWmSkjbwte26yGqnWqKb3Y7Z9Xysyrht9evEmusoLaNEmtzuHED5qkZsUn6ftY4ydMy",
  "key12": "5ugbdaVnrSF6iUaHYisabkF68tjfAnUCtawhyQqvnpEi35JTsyTic67YpmCfHwaVoLEqbAYh2qvNBfT1XNnyjzbY",
  "key13": "53drehf3UD1bbw6ekra1bSpKmazGyYJ7LK2nozH6M3ydNRcLpPeej4FcBbuD2SbwdUe7HGERp8e1hgis6AvbjwJQ",
  "key14": "4qRZRLv2FAtDnE95o7vkBNGSNrdSTmqGkD4Eoj5abBQJdDvSZtFRhwkxeViFUKLXY9LS52rnT549MXDbgS3mHLNX",
  "key15": "4xBRxabM8HTY3RxT8gVKu1m1mphpKRe8is3toLK1v6zhML5Rs33ePkcRjH5pd7gpheQ12me21YRCDBWuyjd4Uwec",
  "key16": "21VvPf4xCsu37Gut9Bm9tG3p8ao58SosqiVS4rdr9Yroa7MwsrJd9cefmMroSk7cca24SSq7rPDfsB9i9agUYj8t",
  "key17": "2bkozaFBg5mQ4ff1V1c3VpgHYTfdg5stVc7nypfztfSfXr44MKpqXxJ3VoUK29Eefv3oRxXnYs5AkQdKx9P6XAsh",
  "key18": "3stQzzPkrfuMo2KqTnDds7YKtaEQhNec5b77HEJmvFq8TWG51gr9ivhT9etcBczzDKSZHCkSER8X657x5Df4XXwS",
  "key19": "2bvudjRFM3N6Ehemed5cRa4DaGUX1DoJeoMJ3cekCGS7rS1DUCyXYecH3EChuVhFStBve69U9jWvgNKuGf73HcJj",
  "key20": "2b1Y6wC6a3xnLvGtxdVX9CzTgGABZ15BZhCzRpTShpq7Ycff5YvMZrcRMrZru5TzDcttKCg8HmztnroE9oAyQ6kP",
  "key21": "5onX8j4hAdGnxFHozqgoujufQTbgHKqyyEGcUxXD5xarUbRq7Qh5tK8BWH22XN9J18tuSNGi5rB5ryTrwGw7v4zP",
  "key22": "26gHFED7wBdmsYCekMfHfktfGPH5ee3H1ix2u3pn1YecezUNp6dsDiwSdKJ2RKxjiBSipzvFkoMRrGcat1wMTtkR",
  "key23": "4htictqYz4jtkofZtvTcZmzmVDDitYVgdqhoJhCUE8br1YDraRBgBGdHf1yEut6u4CvSXavWEeVEp44CGP1g6vWN",
  "key24": "4M2LbbyaTHj33tnQAQkUoCiuksVwdDCF3SWKy7LQ4urT9BUtJdg25FK324qaM8ZhSWk7BjY23hEgFEL853JdqcMb",
  "key25": "2p2eEczDWhx6qjMXMPeaLJnJUvgGmY4Mj1wY1SyVhDkHhvTE4CYAtGXK4FRb4SbuMb7Mhdw7TeYYvnLNREqYjjza",
  "key26": "3J113GW1NNGQMPSKMrEXNRFo3atgEyop1h3ZMfnNhrFTxLTULjcpgqNvoqfnas1zBMvKjN7uStLf4CHYqbTYPoeb",
  "key27": "2ekuDznKVvXF65heP9zxP452f4M9zj13EE6sYvRvJejsZGtTWTEzNzaSvJ28CEcXgNhreJEbMCDGRb59KLzeagLo",
  "key28": "4ZzR2Wt4LHNut1ShWZpKkqzhtgubCcyvJpNGbWhwayHKWtbQkHE9WpdGErAvUr3Tgn9Me7g4Mm78PGV49abqMtqi",
  "key29": "24rdDUqoieiY7HgoLCtrk52smgpU1MVCgobFJif96PAj3nv1LJnY1RG45JD6SWcDzX7HvHbUe8iasEuTRZjotdy7",
  "key30": "4WX2abxpMyfLCBnhGbKN8KGTLQczTj1YqNFLD1Gh3anuy11Qzia5GbarXmqDNTKtebA6SXsaYw2tBQqjSz9yHTwv",
  "key31": "2Li9VFNKXxh58aTkhPCZzdBTt5hAXQ2bfrfXkks1YjTt6exxuQqKWEabbWLcpsikmTfVhrHz6CPBnw6iaCQ3YpkU",
  "key32": "2dbNHMKHodkrYG6ck9pjQYBhwJZ3LFgnieKkg2vPRbozdBqd3rvD3qYjxnRQ4W21zadjLehdsFSATUtgsyZMxXwQ",
  "key33": "4GvSn9eoZe6FpJLPAeKLFnDHCZKRcvwYVDyWNVKudcAokJhpWJBAPrPFBCXcXB6A9NiMkSvonnQBCQDUCEVd2XBY",
  "key34": "67hmJv4pz46FDKMWY1jHFkGEhjKnN3hyaNEhfbFBZp4qEx2145QAPZZ7JEZ2mjgHAUVYVzsna5Lytq8xyd7JfkB5",
  "key35": "41VH7u2W1FMkpVsV7hAYh2eu13iuMwcD6vjfSbWqLPFgLqomzjpmrBGjnTN2ZkywERw2BLXw4qeEgTdJj3C3DpUt",
  "key36": "La9nwGP5AX8hyEC3a8YmucwDxhf5zkhQimb8fjLCSNmnQ4nS6yQrHaRkH9PAnCTCRW2HxQQs1Aq9H4L1XpFSPaY",
  "key37": "4uFfh4psEZonwTGT3ocsHFgW8zg1LRnEdPTFjhJBv9m2BTsJMmzBDe7qYmjCPuusLn4UNt2Tsj7k7PNwGLRST5VZ",
  "key38": "azzMonJfhUYgpmgrTsFN3j6Qz5gmiRgGm5WPeXM33GmMeAkwiQ7MN4S3cuAZNV85JTCnFP6cuzvieYTbHDUitXQ",
  "key39": "5Lg9iqqnTuKcDjam1DY1GfNyM99yXsHPnxUE8XmiSQYDvW4ceJ1iCpyczCFjhmgp8eAeEe4q99XAszAyPmy1piJ1",
  "key40": "4GQSb453oyaATj1FFjEu38i58yWogRUgcPF5aU4KdnC4R7urHJ7Cp5Eup2eGzVrJxRBJzfkvQiGknUS8VJcS4iMQ",
  "key41": "5uRfUWAdsj8KSWcFLMpiCqtfHjynQwaD3kWdVQgdr4wXfhWfuKX2NyihR5wyXK21sqY6x9PtKcmvzuonS2jCNZ31",
  "key42": "2HJA8xr5XhPJk7kbt4cW6TewahXnhHhyvoivQRkLACg55G2LaUjbTn9wGKJ2Nj5am56AKYF8cfc3rj78GLVCdZ2j",
  "key43": "2UFki34FqYjnPoksMF89buvWEhYtou791xenJs3t455Eoy7givqkydxSAFusYic3WcBi4gHh1TGb6mKQMzDRk8sb",
  "key44": "5efzhVtyaTJSgnKWMvxpaZDF19dTKp7FZ4AbGDC1SJLNv95s7oN4sw6Kagv2JV25uaCCRxV1PvkH6MCrCxoCA1GA",
  "key45": "4KBtEZPkGYDpQqiJFvnnhZDWpV3WL4LeZB4T2FvrT6En6AwkVaPJR5L9CURFh4nvZfKPqRzUpRCPXMajSKL5qXbG",
  "key46": "55ECUNVEkn1WKuX9NP2Te147uCg2effH1tMDe3jhkTYgBB8C9cUDaMFHSfdrSrMCxp4NZG9mxDbbcY1JnEy4y6bB",
  "key47": "PyDLFJ3C5WUuN9KxzDu5zazFSLNAdarcgGsnFhxebmr7kmbRdUV1LEGhtSAZ9jUAZD6iCfq9xcCNwKEubEPeKoT",
  "key48": "vSneKJqJtjbSASxeyKptb6o6MHHviC1aUWWbqxZiVGt8x6XkSEpJzDcxED7JivKrL4pxNjnruaT5X8rKNcVNuHd",
  "key49": "2asAZFSEGaR46KdDiSmfo3XpESQ7VQjjcRmUHsZPTcR2H9FmpK1ip4wuk1EmWb7kHrxZ4wtnE3e8svkacGA9xDHm"
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
