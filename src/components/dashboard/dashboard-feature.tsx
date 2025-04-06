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
    "5tbMBZjD8HvynNDra1WjU2Yxxy5LsNeBcztjpnorptvMJq85WptVBaY44CG9bo7UgjNVudf49YuM391py28PGaEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oHC9r4KBbWqY78qAw74sHC3UY1ELBCwe1YVKf8kUbxPAasSmw8WyFgae5ZHVtLc1D9nSgXrnxu56gEGUoZsXkPq",
  "key1": "44cBfFyihtjyDeTdqHF3aTLaQTLt7L8rU52krPzHXJsD929vKpv18ffvgAdKFH8y3GfMUk6rFa3cg4wFAGLrwGuY",
  "key2": "2PM6AsW9o3m8mijvem1Kov7bs4KV6nbNZDA1VG9cLbEgrxcTFbSD1hgErPYR5Ng2oVzqceRgExnYCdLYcEA44GQL",
  "key3": "5HrycHfdaLiYDPze7HECW5QFcC95ZPJpq8bs3nTPEpRK1jhZGpLKTBfTHHMyvUZ2zCvetiTcwW3pArvY3Di37Tjn",
  "key4": "2wvRBsxZgBVneWSZSHgF6scEdgDC6px94AzxVZUcJcWtPCVhgFkGAKHzv3z1fUswyNJygd1Bh1L88aL9VnHuJALV",
  "key5": "5YcmEEBUztJdUpvrq9j5ycj27vPeiJy4nNjRRwDw5viNHFjPTFRCjSG1RrTC1x42fj9kKDjAy74av3dM9aFqGmEJ",
  "key6": "3AJJb26TppDNKTx7XSPBRfDVzzoW7sNfgfiuhq6YNL6K3ic4bmPBonRdFRWydZbwwxHNhZCuwHeKhK7U1rum48TW",
  "key7": "5pGUroWbGGuuo2NZSX8DWzQwAR465RgJinUXdKd82d8fhkvA59HNHLAZrdbdZvMmJA2f8pwf2mDDKHvphC5oVPUs",
  "key8": "57GbAvRNXmUX3yTkyztzr5isqmmM3GKEiNyxV4sNcyifL8ew6rTi1qy51Dm4WaAtN2XGuYhtFCfm17GcoYgorUDf",
  "key9": "24yWUk5ZVKo2v4HrueGwrh7b5tiCAE5ixEMQi36keuTJ4astNxA4tgVFwGL9s8gymp6GAYvcyuFkPgPi4QfabGHT",
  "key10": "3aMi2oxTu2sh6Gp8tCp2DFULcYMp6mVySibHPEmUDwKHJ2FEGmxMVWKtXEVYE7cM4t8VW6GEiNuv3DUgpxd5Bmew",
  "key11": "4djxh3iFDY2kJT8gXe1UHvz1Ka8bcCWCveFvtzE56xvsY2KS95fBQReLF1tndZiBMmbEtGeYuV2KXDGGVvKhmQtJ",
  "key12": "1yJb37UBpvmgZqpfbjhD37gfjVMN27tweNmMt1k4KSy3Kp2Ns8BFFBwBG2XVFPp8vxKFtEF4hs85acXZniAEGox",
  "key13": "65UbkiZg5cFBYayUehceDHM5SV5N3zZ379vVu9ErJr6gLBD63sGeQ3pWRsBbHpSCgdAyb8QfQ6DHbuxxmFmq4fXy",
  "key14": "4PFsAsCtt6UfPX2PTrF2n7PMGFNGwmdcBPW1wkFHcsdM3V241u7Q36B1sEDuC5DVTMCXAAQBEAGTo5pRr1nyrtCq",
  "key15": "3HzVL4Lg3QBWHYWNJL6Jr5do9TUKYkAsPP6esdMosfp1TnWgyWTfJgqugvGcC72z1jN6z3STaNbeJM9wzHZeGLHG",
  "key16": "2XeBWL5giquvmGj2BVYjfVMtmxXneJzodow4ePb92N6n6qAESrU2gDLXiMtL6Hc7rHM3dzJmCzab9gXBKnftdqMU",
  "key17": "3GcFo1K5961AEgG9w1xW4NKeTVP26jfcLnY3FvL67vs7hCatqLBeTgC4ZxhMvxn87xHvcsh6D1kGaB1bdJWHhoSh",
  "key18": "46T3JpPaaJuEou4FyatZuC3cfZX6MUGpDkraR1z6mPR1gKq6gcPBwzwg981bKMNFEUbxa1UAgMoVmcmoqvnHd54w",
  "key19": "3gN3gcCPeK8wcExWXSSmbsq1auhk21DtBth4vw1F1xzw9AiEPD9XKdWJC9a5UKHLCL2oTJMeRcZAW4dJTW6cQ3kC",
  "key20": "ocaQwHeosxHHE1tZbYyuKktBQurobn2ARVXbSEi4VNmWMmtGs1FDSbN5caaQ18KaprUBdvcKHstpVsavd3SEKLu",
  "key21": "5qTYvUuH2j4wTMSi38DbmH1PdLR6wL7gJXVPF9bFS14CMdbRMm3beDgZXQ835nuHSkvB1cztpGKs6RiVM7MKEgPB",
  "key22": "m3xaM7FG8tyzH4oTtsoQ58Qzo1b6wf5VrF19odR73U5AomzpsuTCLJHWtzuv9QHV9Pb859fp2fb8Mjcm5kpptHC",
  "key23": "r3EHzZdkZ5dYoTeYEpbhsmAmzCDhLZJ2XBqZbbVr3ySzjuS3HU9Q8mxwSDLX9LU3vARRLqB8PVtPG5HCdFcPzwc",
  "key24": "2zk7gjr9gx3DSWWBZxcLrcmtYB4m8xoUaVuRGAbnBywSVzqRUF6YXfYDpZe72sWfJPGYYNUszd5VeupoY5vNynXn",
  "key25": "57X5UT4y14STSTig2Rgzbs6WoRTKzLqM82UzZtXBWtUaVvnT97p8fG6wyap1d9nqAft6LiZycjpYcUYLAFWypXXw",
  "key26": "5xBXZQf9UzGxpL4YDA3GT18sQboB5Z1V9aQi9SopxBCsyznUG6iUhC6h2J9BKRQjUaPqyzr3sVUu7vRpdVGkePLj",
  "key27": "2iu2bDbwbsQ8mQPRCqFBRxXMx7YiFyCCkAreMjFKUhQ6YNMLjP3FGPSCinLzASsdPn2jiDkZCPVUddksSV2Yp2UQ",
  "key28": "2rxqtCJZMY4xqgS7CRkEUWqz3YsFwdsezBKiqm6Ahdc5jXttRrBzPVtqVVQmDvUmBMtsPstNNBExAufY1o8AWLeQ",
  "key29": "EThDC2yChYtk1CWUKeXBqLM2YsJDssMKzA8MdbGZjNB5gZK9Aiis3SiQRa1mv2VkwQGPujJ1wXGMR9my1WH7Zxc",
  "key30": "3ZmELs9cYrbw3awrCipXCM9nSkhKBSpgUyxXTfVeZ6rEJvjTFA8iteh1XpgsMexhBZoqZZhGBBSrM6hGD3BHjCck",
  "key31": "2fL1oYSiH6qwZtgv7HUyWvJvjp6PM5dpDUtfFH7cWp1fyQ5AqVVTKCi9fGMh98wohoyJpvJcBS71J8nfWAUSawiz",
  "key32": "4oDTKHT6dZZqFvhR3EK3fwhkkwryPvwpot9Pt47UqznKTSwtm52Ysfw4oXHHjpgJoiCJtwJhgUhgFYQyt8bmqt4H",
  "key33": "2B1nhJE1texQhhzkT85Vau1bDv3qk25EHS5HVroZwNk2Eq4BQjR4cDrr5R7r9CoA61vXfk3r3oUQeSXRvC8Rg9Mh",
  "key34": "3ZV5KnpZNK6ZUKJVB2FZ8TEbP6bm5GcU8Qrv7P4fHzst6fnVphSktq1P3N5CD85vZc5Ht6XAeEVBSZpoNkoN53ae",
  "key35": "2H8eyf9u7bmHLDdsEzcJD25hgJH9vqtFLL8hAEysfUtezfUf1wQP8m3K4YDkQDqEXh5HV5ERzkAVPUrzfh9JnUM5"
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
