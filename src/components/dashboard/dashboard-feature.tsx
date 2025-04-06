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
    "4uVQAT4F5SS85wd1AL4zTes5gug89wtr5CuJVsiAvHkHvkEgVZxxdhkAJZuDi8wG3QnTS43knSxzCaYnpJVaq5bo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "654t37MFViRtjmqbQE5WqdQv3Qa6o14e8XZmbrf2HHcNK5RpFiNndXPcTLLLeq9v3n2a6kEiC7jLfuFEKAzTuYwu",
  "key1": "4bAhDJRvLmdBttiErSf8rg9kCH4D7omBAGawauyTuHXAU6UtgoU31NUus7UE3cXT7q6E7Mn1AwnWiafuaNiLNUuH",
  "key2": "VUp84B7N1LUhPiVKrLEbx3PppoLMT2dbZDh4f9mzf5adYxvz7VY92tJ63zxMy9tQEsA9vJYp8Z95PWzgSuprnka",
  "key3": "FM9rXMBUNBi2pVfbvEFXdzSpTg896sYcB6AvRhkBTe86aTei7YhrCA8DRjHdxzjrCrtSTqPzdgfxPRHaFRyhP6w",
  "key4": "EeEMYWCgnsDadUJ8kLn9tP3Afw7D72aokYxxC5ZxgcTUeS9665YhZtwvDDQc4V9cockuizZmCFXgfLnuRxedtGQ",
  "key5": "2npidX8MgVw73d5EUFVucaci9xMaUkyZL86VsiZQKJijt7eJoJozqc4V64W9n27iqUVzgUgiqUMMw85qAas4Euir",
  "key6": "r7VvRCGAYjoWJpp9VVUotKzmLbFYSpPpAW2fX8feqcbDBoANiZ14DTvHDsntjcmnMcdp35Zava3cDPfhygHGA3C",
  "key7": "QWWL8h89QNfzsxwor8XaQjohubritN4SxSYgr5vFraRBmoccB8xNGzhu7arkn23B1Mc8rmYR6bNGAKp2inEgSzL",
  "key8": "5UHboHkREZMunTRQQejKPtAeVSJdA1FhHkmx6FHNCVo18Cqfyba1WgEdcwKiwEuwpNg4GZ7nKHSDVKF7L1hqrQqC",
  "key9": "5E4oMAr67PxbRpN37WHfH2N3H1kXcPJvBkz4PU4NUWg2zZrvvdSiE4U8TJSc98UknyueJVpMwKHzCQbtMfEkuzuv",
  "key10": "4soimypTSTeTHpBDKh8zJtLCCqGRt2st1dyiygFBvo772cYKtiS6NmAWerACx3sB1BgF4Xod3rKAjnGKzoWEkHBE",
  "key11": "25s2fbyeWs7QrMnF1XkCstdPZiYFNkaD1gXAYhCw1cpzgRLPnq3ixrxzwnjHtFjtUdiV8xRoq6NkvWaK2sfxybBR",
  "key12": "3KNxn9rHcn1SWC5Md8Wm9rH3Y6fTG7fcATM5vounRDnH3nineM3yKcXgMx2NLVDvAfQSX4tR35hWvLf4iy4R8sUt",
  "key13": "4UXpJDN7GTqKJXR7SUYFXEjv5WZQUsVH6h92EqkBtaQDhwwxSGxCMPJAFw1JqZAGbbjyRZLibtNhcjkozEq59eSs",
  "key14": "4WZU6daV66b1bfrJYxy4oFU2BkfvU1bL7DNzcZApfYXjBHpx8S9vW5VBgdyeCoGUMhJyfHDXGqxMEhyoVWnsMZD1",
  "key15": "5qJsyXh2Gm82ZNvWHKQ2i7hcijn88WPftpqEgeV1nYRoET77Kqqf1n4L2V39RN2q7dbx7ZoM6j1RdEshqnQw2GDs",
  "key16": "2M8BrJLR76p6EaBheK6pHN5vTtSr1wR2ND8T99XAVjRLjPJZNGa3thpGzaxLfrCo6NiZ14PfKv6NYybbFUFKpuja",
  "key17": "5cYN85X99Hw9n9B2UUjsYLvKiespS9eiBUCDEvi5By2ivAiAo6TuSybsf6vDQp9CEif6ygPf5XAxVVr9Q53tBnjx",
  "key18": "4UGgkrbjU25iuGhDjQ3fUghJZNj3MNPppypsejW3AN3uMssfdc6dGeboXE8MXtx4rSHWFx2Tkcbi1sk8hBtSbriM",
  "key19": "2YCdGaKuU3oRfNAv7CUtwcv46gVVAwFdENadDst4RoWaLrE9oTuHZyTqDR7F7DUgaF5QwfMLMFCBtkc941W2eFrp",
  "key20": "2htmz63fzfrdVpqFUB4YywW32vjf5hFtwoaFWjZDhKcYBiRrPgroEnhJA1knEkFcoKqeMKm8Retwja1kgMemjyUF",
  "key21": "4CJ8ADiGrvbjzdnLfYtJf16QMWGxBHfoGGmrRh3PNq8PwgibvqTXSChHDDjwSTSQWzq2PAtJQTxkPieYBnuRo8mc",
  "key22": "5vBNGEzozGxa7RaW6Lod2CTRj18vYWc1F933zqnwzhu2FaEdeuqsqtpvyfBH37rbRdmiymdt7CdABHsRW4ZaTgfW",
  "key23": "2Nzi3j1oDRAZUUvDHE53x8Cs9J56tvfNtttLMsk12gEmZBCMG1pv8FRgLA7Bg69jY5YHNKGiUjndqDNqJpaetnpw",
  "key24": "3FV9L6PrXsPY1s4PuDTvztCbKDkW9Rhmyr9hMTuwBSko6hqHGSXA1w2S9KeTRvG9xHFisTHm8fBYVzuqrW7AJjGc",
  "key25": "X3vK91NfytMPpDMQKrv2R74RJ2kcvZrwkY387EC6wAExmz4xHofgzwVSNARYZDT2x9Qg3JiAvGcMhi6EbrrfSc8",
  "key26": "47XpRb34UQiZnADgyX8D1nQdK7Lgd5NguB75E984v7v9uhf73Z2oykDX7qA8cXBSNySTBkWhYwvcfNi8688RKZQH",
  "key27": "5jsUpR4FNJyaRc31KvHh6wPWssyibGP4RnyiTwinLwCHTdXRkowasVV7VF8npLeisfk7fD8qpXp79dtXs9Kj5wQY",
  "key28": "4biUmG43urK2BgnPrZouQfSTCUGMUQvbDo8Gk7eQ25UJhsTcMN6tnGedDHBPjAocuN77VoDeLQ6vnyZUYCwvHkhm",
  "key29": "5B9WGH9AKwoaNJmx1oS8zaaiN8mzeL55UfUMiWTSRXHbBBXD2UaHQntepmT8NA7nooZytVxFZrChX8yr7kHavVA9",
  "key30": "5CPatTBfVp2rVD3S7Y3hExKCKmnqs2izWEsYB63wNXCaetxrvbvnQe5TaDR4KayyNWnHgkQoHJcBZVq6tM6xeUoU",
  "key31": "3LUAYEC6ZPJ4sZ2rLvsyygdhhpdLoFFqxo78BFeTVBamauoQ7nZ7y2VvEm3kWpmvQAdFuydf7egVcUgJiHiPPmmv",
  "key32": "4yiWPiteSkWLE6niGYYQanhuL8G1jvFwyby7FgkjF8qm1hmniTBKZT8pekUDeCv5pwoRE99kEVtwcJinUDFipFHR",
  "key33": "4NQLGQbTEwg2Xwf23HyjUAB48iTS7swc89hhsDiBBQkWdRCRoupYNGJn7qaNuiWb8XhVwGUp1Ni6SkVp9Hyy7UYo",
  "key34": "66wM7cEDfSwBVqgoGZmX58jWQodZWjHeW3tyAKLLvFnMS21EHwLfBz9WHMeFrzg9GzRXprpByHSQhBtqWo7CqkMD",
  "key35": "iviwAqsR3ABXyvXhZkdBFv82hiNgqCm99hR18ZH4whC46vmQrhSCF2SSCaMa7mhUBXkT8qQFh5cnxybApoXseqW",
  "key36": "4UPpEdrjbWMoSZAtPFdcxTdFNE8QWSScjSoywGYgdaqBKTn2cjD8mCwX91P4TKv7rWrXsmnLZeEPHm6KtV9na267",
  "key37": "2nb8gkt9DYWMBX2eJcPj2SZhZ3WRRia9TL1bkBiZLdVhEcYFLqHJbHdfhsRnwWRoZefvvvch1RtJxVtnBXrzJiuQ",
  "key38": "3uGAND3ECpj6tBjcoo6K5yabHBMgURqz3p5G9fnTjNop9cRzCKxYjiUsW85YyEB8YatzZB69KeoTshJzzdCYt2yq",
  "key39": "wDMG4pWQ7Z7wj8UpqjwLdSp8RJ7fDy9KGyGnLF9v43HCR5thPTHHnuce1fRrrkt5y3iSXNxyqYzuoFrvJUoJyfG",
  "key40": "yWuGx89RcBHUePK7j1R8ZMUMfsoHR1cDQQGnVf43zy578DmzD6ZPC24xGuL6Wxm2hF73DQN3ShFHTePDDoXmHkC",
  "key41": "j7Lh8ik1yqMvN5Xgxqqh3qjr9kXkhvfFz675GZbwS5g6a6BP6boEndEhyhcSxHgk9GNLz9i86n3ZtFJMz79oDQX",
  "key42": "2mqg8gbg7evdLy8sHitDw6wNbrrPYsGc7Rsjor1LYoniqngghFzBMyFRnBzyeZ5vWuRUpwveLzS6AT7FWME9JAJ9",
  "key43": "5kuWQQ9n51UWaz8C3xRLsKjpF3LVg4jSA9c9YPJmmpGynyZkq6ZPptX4KbmKTCZNUbmSGpSimJKLN11ED6cGtwVf",
  "key44": "rwqPRungeZ3JDyysyfm1hLq1xwwfnhZvLa7UKCLwELo6NZdBP5AtrmgFU38Go6crs9QJ2yQZevakWDSfsAaGfXA",
  "key45": "3jomwmvUJXT41qNmeZUbuBiAbHjbLx9YpcD4h5bctoCv5FSE6vWxmEBuNdyV6AEzxtM7yxs9xc8NExxc4LHvqobB"
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
