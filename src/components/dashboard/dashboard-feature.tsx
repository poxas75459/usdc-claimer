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
    "kS5WJ7WSm8pp5Dhmz3FZ22TQH7kifHF4JZ6n3yemHW7C4ipVh1tLLiEUqKaJBKnxpQVHgq7UNDaFw2kR7UP8fUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33EqSMoXVUDqaXmxnoRuAYZEEfCPckhFrovZJ3GKsrRKhxN1eTTuqVHTRTZDqPBcz2AKoaxk5aymDD33BiZ3Txpb",
  "key1": "2v5tQSdcBcjwBXcjEeejuxd8YMXJHFPDHMhrLjQ98GEUZAtZEKU5Qz1WRvAcbf5qmRFbo3sicm8NyMqnHVQELJPR",
  "key2": "gtPYXY7kxQHzTu7qzMLHTXFB1MuBGYayLjf3SknTrg6Kp2BxZrFGQET1WW6miaBKyadF5fTz5Pk2vRLdXaLBssi",
  "key3": "21vrx4JFfbNxGPojaWfjGVzgG4btFpu83fGxSbGnXa8khRszRb1V1T3NYNbcBoAJAP9F29mXDTXg3Duw4WhiGqzj",
  "key4": "61sx3gjKcocmpisdvRrLzAyGXNDyChh5bNyjM3JbroXHcBMGhZVdRK1vbizjUzXFHfoZmGpJGd7exsJRQKgE4nbA",
  "key5": "2TsdYHuv71YuCdGmxQ3bDoJkyoUiJ9uHXy56A5PNEaQsAQS2REkavxXVmvnBuggKESjfrxTs2rFgb5upJrG3kTd4",
  "key6": "sLXuNbQYDoo1YrQENJrMYpfGHa63kw4spjc21SxjtHesBYK3MH54GrFzub3T5FicMf2uUKJ1PyFA1Q7N4Mzzhun",
  "key7": "2deCdm2qaBNyvZYiXrFDXhDeVHJSvDJjQyeDnUmh3hb2u4prJj5D1TVJFBH6m43RqtfppEqNsHQ2YX7gkZMCRBiX",
  "key8": "5Wpze6HZtDjH4H4VmmyQpufPHfTg1VbBChxp6HLwFZq8BNpvioDbF31PYbECWiqyJ14Q2CwuC6xxAQYFp4j21RRN",
  "key9": "2p2w4nEy54ZHqPFpiVBSgobETgenHKr9461MXQP88T7Q2WszCVPxtYydKN4Wdmi56wE1Qd3L5vnRLxchUtFTFEVf",
  "key10": "3jfo8KwNbqVNRpa8vBBTtkKK1fvZVHzHpABVrhbSTeZ8K2ya3buUJNyMHasg2UkyTqiKtFTKuGtJuyMMWhv4GcmS",
  "key11": "rM8ZdaJdpfYqp8ZXfUmixaULHK4c2yTF6qqCQYwNVU9Di7KzsCULyAfXs2kqE33tA469dzoRx6e4pV4XrSTo92h",
  "key12": "4Ld877UVdmFQBL5rGP25DwMVTaLZxu9yaiR5mXUWYfCcnXHtYtMuVYDjbnKpxUWSvez99DCNnv79Tpn9Q7qW6qbh",
  "key13": "C8R3MJ559grF3T7NH7E2y1W8zAwCcQ3dK3KvboDD6tCpaCur26TXXMuGt4f9mf3vTwohpZ5diN9ghpuFutu3u2k",
  "key14": "3dwXmB5sRAVZXcxcAup5t6mBvmtDBWixfGbHew1HuFctDE6T8ERPVExehLzAb7ZidiAeAQaDAD4h199ieXfagAta",
  "key15": "5ZEkfWvHFNibaL5MePABYCkG1hnSrJP3HfNjcgUZbWtVHAXmm1NR4pTraAo4ANEEqCuhcDNeAvJMKssRCxHN7LrJ",
  "key16": "32zaa8UAiLwKjq5BbURG9qAeJrqAXuqBMLrZBSFUbfPRdvaDsG9ZhWeZncY8oWa3qa8uYWiUig8PwnD9f1eQdp75",
  "key17": "23CqoWSLYZPkPz8xPYVj54dv1bUbsJS7gNkya2Chg4aaGczjHwh3XGzy4d9eVtwA5GFP1uSWBQKMJEbay54fELxY",
  "key18": "2gtNVK2K8BThp9ZRhSQstKdhV2TNZstj3hM8RLrhRoZf9CWodceQG8sTRmZ9nn5GQS3BmDUBgwbmcc8mEijXAv7P",
  "key19": "4rMCuDFDkqbMUXDALWEbk6891TBQmXouzDg1N9FyXjrUB42KjhEEEzCe13rB4PiacV8SuBty7XPyKU8tkKNZ12UT",
  "key20": "2u5aNj9Gu5hRF1vggXJWvtzk3whzk4YNiyXH3wrpeSuWfT7e6PMgQHZy9pxsjMhWenJUgmT8E8SgvYMYZWMXP1w4",
  "key21": "tqHRtL4KXmErhDs2iJ8t4vE7PytFnTwTzm1nTZJbqBgkDZozvSqbz2HX1hQtkqA3ZBXn24xaPQtXiTaDPG2jwyy",
  "key22": "4CM3mesfNL1FkE89E8t49uFWf2ekTurZrDknGCUB7BZcB3H1kLZ87nHV4U8UcmCB2HscRkx64Zi8bvw3qMGprCfn",
  "key23": "2tXSXx1hBqLwfWyzGBLWZdutzN7pRtRQ62kiAqEQHajGNheULDn4jSMqZUgMUdZz4pY17HXbfQFXx5hwzPAEy3mh",
  "key24": "411KfH1PSCsrJZBj7PvSmpbHg2nXxzLaYyQQubiLoj2TBQX9r6yH1SgDgaZJeJhN1YGRRqkQNjXg4xnmtr9CcXfY",
  "key25": "1Gv3n7h7gW2qBUPSmVvN63T4S6CsvemLdnudV9Bp1QyjABeRd4dHKZNQvR7eDicgwqzK3L8M7EJ5kMWYmVm7Cvs",
  "key26": "35kJtsvdmQRRhwEmZeiJEjbxcFNauPEWbAfsVW8BkqdovKEGbGmoGd3ek8bqwJqvzT2dX9WaUqVmziVY45w593H8",
  "key27": "ed2YtM2CcCJKMYvENAufWuu57ZzPfRY8REgUG5YxqqCoztPFoQHG7CknvJVuWrcipodQHAmkH7FuNARzVVPfYWA",
  "key28": "4jDxuev4ch74HTTZwJ9pigMc7zzekjJSAf3o1LTGTGDXoXbhA7Aae8RpeXrVBdEGUKaTqJ9iFgKGMm69RmCcB3XS",
  "key29": "3ihmrReCcCpihcDyk7ZNtREdVdNJaxnuYyj9vMfEnyX1txft1fQkc4qkxp3yb89iN4a8fCgcuy4tGJxMonGDhWRA",
  "key30": "d73NsZYUAnZBkPhzcQAVr8CnBtQKZhM1k6igt2ZXZCCHEdzmF9X1VfoGGqypbLMK3YUso9W8JFC5yaGiG3xnhQJ",
  "key31": "4UQA9YaDJXbgjKQq8S851qHKVqeMrmEQj9uo3Ufc3M9URXo9R8qj7XeTrZTgxUcKimztWdi5HfhcRiY98JLHAzAc",
  "key32": "3PbTNCN6TMknaRYZYQPcpmi3MtnXEZo4eCwaaRbvH1xRiPakNE2WPrdnzwF9haqcWeysicV2FpTJA64V9UCoFoy6",
  "key33": "4GLMe3kVcLUnDUWixEQ9k3RX1wzK9Sszvbp3gU8Z4gieyNvvLjkSPyqZ5NdhvD7ShS2UKoc6qrR3PSqDA3rVh16U",
  "key34": "HzifK5kvrHPB42TKYXT2ALtv4gRQCyydAsEHCwZBwkVZFx1Ms7CKxRkXeKohQLpdDNX3zM22YL4hW69fixN25Pv",
  "key35": "5xdgyMzVNh8seimxPrKQaPbmg99zKK5sMTk5cBXfHRY626nABtxGJpTwAyzWbzchkkpbjZK2PD8rLdbEgK5LBjRW",
  "key36": "5kYsCHNtfQzvDwNMvU45cFcdMHHpDJ7BfgJT9yAUPLZYvX9MAD6RxihTTup9RUBk4Ywkhs65duTMXiHj5yaQKuoX",
  "key37": "3WnE32eu4AY6b24X5HADknNj9mFyeWPsX5bb6TcKkd3Vp6E9xwdHgPjmDLL2H95mFmJ4gVVVBJRMefFHPRqTUASE",
  "key38": "4zAYvkcZzvhPKmLDc3tCYRJ1oR3SkEJq2XRGf5cWBW9SnTuBmki9Gg3ACxxH3LVQKau23GwayPuth2Pvv9mGKbbr",
  "key39": "66QcbyTEZkWbWwCQ8sHkCcVRsKZxxjuYBHidnsLg6iXja34XQcK7oJH654guqHN4VLqKDanf6qk8wDby7SvdvJnK",
  "key40": "44rbWGZRbne86pegtQ7LJkYqFNWGRUATgs44J2rRyS9p5BuPCxMLkthNNqG3q9hftfVaztgAjRvk3KXgwNeYMraW",
  "key41": "4vU1qhFBmP5W1Gbn4g5HCisFC59D5NycdWpCNiVRkKEMrhio9W1PxKKoUr8Q8DRfv67KbTweCbCMsE7m5HKPMDwF"
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
