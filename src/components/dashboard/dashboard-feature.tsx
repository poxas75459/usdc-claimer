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
    "GyhySwk5LzybjV1VABDcWvW3QUa3fy1xAoFYgqFUQwKZmAGGLEAFJfj1VBB6mgundtieLyif6a6qhrnHKsMKp63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56NfiEUA6Cc7BTkfWHa4zgnpqVyAY8joy1xg948GtShMvDf2BsGLhUhcVycsEpmhhoeR8CotUbkHPsBNygX9cV13",
  "key1": "5ywca5aC4Gumpc2BpPiMrYtcdxQ2pQ3YkpnencFdcsWYauh3c4Y5mYLtBJeRQZAoc1WcaArUAZ4RuU6TnjzRuTbQ",
  "key2": "3uvfwSnHEZiRwKV8ugg2e7k5vq6NXgEPDepTurtvbMPFoP6NC1H4HyGXp9B5HsQEim9TAxjoUz2HBks9KvSzVaBQ",
  "key3": "FmksB8QBdaeUjUnbWnw9oZJcYcy23tH5FzSWSQDkEUZa3nP5cwYKzUwyzsQXJ5qfEckgHpwXvDaxKn4rd5sFW5h",
  "key4": "4dBNtgSer98i5cHWEjXS1smRsG23UX6ARaCnQcCGtdg7Nt25DZcaN2k3RGWqDHfRiGVo2wj1cRFAshHf1EPT4DTe",
  "key5": "QbhrKYzEr97bbDjrUeaaaomvTnh9i4GsSGnE3dK1B67P5WM58XJGgF63vRECF8PqJTTjaF714imMD3CXcpthKVy",
  "key6": "3cYkp4a67owAZ5uW5Q3cjsWBvtAeH7UzFSZWmrNfbahACpWpAkwTEVjsex7qm5VTW9jyXmcEBzrBzAUEm8Wtpppf",
  "key7": "N9CgGRuvPtyGaU5spvnYiHBDo5uv2UCGV1brS9cZxxgerEYLXcf75x4iuFTN8u6oCuvyCa2snHgjE7h3Swekcbd",
  "key8": "cD9GnC4qDuw6DNYVfm3AaSJuE1ocewYCPL3SPnUg7ksig7aSuXhQeNYDKouS31cGDuBoB6DyNMvBTQRRmWteaNd",
  "key9": "3QbhjEncEbA2pt6rcJhpbgMhTwHEW6RdPEc88SkNuq1PPoAC4oBv2tAP4M2NmfWQaRZA3Evkm9X32pnhUbqvX7QX",
  "key10": "2DGQV1Kv6JvP77BNs4h1AXy3yFhXZ98D388UfciRp9frk7ALSUYDA3tdsvksnmkyjtzMZwACRCmk3xyER5gVPwHY",
  "key11": "3bC5aFKuNwycVbCGpwANnbWShdALhjAtdpARFc1YoGtSykyTNndvsi7AGmadz2ZaS3C5zVvmvBzGWTRmYgA2aHR",
  "key12": "i6ugefxaUZytT2Bp7CEA9NPXFE2dDaKQVBjkVBEfTNSF4kCmYfZGW4KzN1Co8tTuREJztanuWwMLVfMFNys5MYR",
  "key13": "3KSFDJMdepAQzJYZsgbibGbCMCtqfEz9Cig52T4o5dnwdMYKryBMTZCDtfDZCrzBT9oze9Eh4XWFUQGnqMVCu4Gr",
  "key14": "5ZKCF9fRrUqVbUz5p1HCQspbrYcPEiiMtsgLrtCFaCdmieviTSLC99qfDNEFPrieQqzzaYAyi6WKDVEUMWx49UMc",
  "key15": "5px9FaJL7BUoF88Cveh9vAvhXR9hVkMnTBELyPUBBbvpesyBAHVBJxM53GeXdfm8wLM49jFTeqDmr58WAH2rzVoj",
  "key16": "3yqGHsB1gjhxxmuBeP5uWAfKQcL9ahMsZ7XjT7vY6DMp2Gt6Ha2p3AwB9fbVjqkF9wBRRKCnxWMPNNebfH7UdHiV",
  "key17": "4XR5t75S1113Wf2zsLDW4KAn3U3MprE3E3Qx9G3pa4W2pgvRV4C8MRhYCV5FgKwnJB8dzyKcpmiQELfz8EouCzBV",
  "key18": "SESzBEzjjHhPapketuCCaGE7PTRtbrnrYJ73kHFuTvS9EDwHDGCbwFvYy5NcgrMQnFfRyStSKv4cNsAB73teyzV",
  "key19": "2F7zzvRbSsh1kPu3q1PwfeLL2ucXBfHEgRTcbG5Yb5Zu6VE4QvdQGWZz1sBhMazsyoBTx7XVSZj7vThUrVhqPjge",
  "key20": "2V2hB71c6wKwSLo15MLBTZET7gpPo6LGqTnxeMoTT7fpUGtT2kNx1pYobczrjeAfUhU3RcTWUZJAxgk567ZRBb2T",
  "key21": "d8umuDh9FKASrsD1Wrq9sZt7kswtTJVcYBwfstUyTgUT5DnuUTPviP8YnxTnUDRAzDnZmjCNHeUgag8hnC4Duqq",
  "key22": "2FUuS9ifxGvm94kxDpWL6CqWqmcH7ZT1FsiZyig1Cd5AGQRpYghGqnhxDUEbKbuxYebE12griv9N7e98x2kyEfWW",
  "key23": "3qqLLGZcTyUgkSyURC9Tj5vTbvTv4VB1NgxiCMD4wPMP5K9zTeoYhd8JKSF1VbaQYD5uovM67fMZDQaeXwdJpPZa",
  "key24": "2u2SyTfxVeHYH7TVFZmdztsvisAJHAwXpxXyDXbqTncaKefSwbkKDRqgCMzDpBAohGTA6G4TydogmqTHxZXdBAGu",
  "key25": "2AXwsgrEDhTTzhVqUPWKB1fWCcFgvuVYmvR7MHkPDjF4MZXPAPFh59tPvs3nBXxrPkQeBQFdWf2ND6jBc9Lfrmre",
  "key26": "3UPcqNkyfkrW8fc8cGH9iC5NzU1bV9kqkY96VgD9DtV6a4w2W8jaxyrXre6RwCPyy8R7z6bhJgd81fbDDvn5Tv42",
  "key27": "494STNoFeVn79osMP4y39WpPv3qyVMNVcpPWz8LzbfkypmcaKqrCDNgUqkiDpZytFCzqrz5ZWaQgs3QM12DJdxxy",
  "key28": "pp9AkMrg2GzFdTRkTEkQ5j84eJj3PYKhLE2S4NgayBXa8knaPZPnEadwH5dGT3QsTi823ErGCpsGv9W2LC6E577",
  "key29": "3ejriV6rvQ49GVLw7sayo7mbP8UShYfWWh9trvNynLd3rXNWfU2b1HzYVMQ1iFe1iBytirjJ6c8FJ4cxubhwBC41",
  "key30": "5m4Htb8eiwCmrDLeyYNnMtwjerrJQzfRzeUd2c5exBGFgUy4KoySb1HdK6jbCNV1S6tDSnxbfrJFPq1ruUUq8y8e",
  "key31": "4DVyBeM6WvFq1XhGzuKBx1CedGBXzprJ9m5RmaYetpdriap7RwuVPuZdn8hwEzDPEJxYCXk5F13DKBDeY93qGib1",
  "key32": "5N8RwmNuLxpDhsFrksk58GCkN2Sh2FZmbZsVh3WJEghiGmdSD7s4FwtwYDxhQBTRvbcYnGZDgY8E7AHMpdnn6tko",
  "key33": "MVtRbLbMgM9c6f4bKHoMmywnH9DURdFRvkzUTwLnY2FyhSDtudBS1ebTtKADMdFv8KFYzeYmNrhtZ9Lr57HmMDn",
  "key34": "mFGBd1YM2w1DqjQFyimC3MRFFTg4ZpgFLf1Hzgdm2LQU9XKwoa4mtixsDEeGYgK3uCUps198yV28burP4YLYLwM",
  "key35": "FteNi735uwWQ1WhA1nt4YB3LJdGuwzDrsxPSjpfAgrSN1U9cgn8KJgR4y7C1YB6mFxWXRK4LV2rqLaVgWZ45FqQ",
  "key36": "3uZrbT8NiL6jqZwfzVv57PnXq1CLTk6Yegq7Uhko8eXd1jwbQpV5HAKxkUxW3GeTesPiYcn8efeY1qAfY4izNP1y"
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
