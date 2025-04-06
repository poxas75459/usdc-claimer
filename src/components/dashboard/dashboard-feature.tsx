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
    "2vtNozQ4YsLHEtZX9CbjJ2i3hhf6ff2wFASV1HqtE13ssknAMNRBbYk3RHvgsEod8uYnwsz4HpFJUMTujDDKXdmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CHifUTPNXc8jBqY5xL3VHbX27c9F3edL3iNsYWT3sWrEeBAqJmQYsz43YNJoLh3rgtaXZNpyF8kE4QxE9JHqisJ",
  "key1": "4pPVHcYobXbQ9o2GysUSsmdMq62FawDnNPMpSTfFhXH3AZwqovnS8324L8CocSznuy8N1CcZg4uwZnerfR5b6DvN",
  "key2": "3FbAXsQAqipFMLMWZpHu2ayUTFWve7oVPtV2iMP8QuT3P1b1DUxkhrQHPQx1f41G7jsJGSFa4EzFvYYpYi2KKaBX",
  "key3": "2NYTto8knz5ZXvy3SLYqmsE3kqW7CposiHEiQTwFjw3tyCe3wgY7xyWFrXG7r4NJmh5E73nNic13f5xBUs3oDB3Z",
  "key4": "3nrcnbEHnVn8pCp2xgEodkiSscAEqwB9T3FbvRXrkbx23KeE267MiA85cBfcdcbYyFspfweNYgNB3SG6AiJe6zvP",
  "key5": "5HCam7zYrKErJRxjQbKm2NoCU5vomZZMGXebf5amxUvEmexBa2RTaM9fo7WHGHfdzcicJB25vKq4kMJuP4rN8vum",
  "key6": "YT4t2DzcNdficnBCSyCrbNLEPomY83b5pABHcpC5aCHs9k6wsDTjLszwqgymTbBUMwAGcJxknvkUU5seCaTkZmH",
  "key7": "2KwmFWXNcDr1TX23ManScs1YERMiLRLk2MrUKh8HDSR4sHgMgjRwp5V3SKcB7ZHSYgGFMAdA45nRMD1bzEJDvRfU",
  "key8": "447Jp5GfstbpfcrUn1zb6psSpCuvAHAnPHEApY1nSx5RSyXFLgyrMagDEJrd7zFtKJgc6tWK8SJZtfxJ6i9A9MJx",
  "key9": "3qdt4UaEK5eBVe8pS32oLyCjr9F8VQaNN5jBVtzvSpwhKD6TPMcBrKBnT6iSE4BoV8Rzma8FSTYv7ijzgTwszJD9",
  "key10": "5FFA4fNufmSk1BDd2Ky167T96JsS8h7i2t4YERnhqVVsekwcB9pMjjMENwywro5aizZ3Y7RSRsJHDQeAFhjd2Msp",
  "key11": "5YpT4C93fVGWvcUM5tXu1rCBph1DJvxuhc36KRsmfPzSN6wBd8rpJc79iFhQvCeMWYLHQbsANdNwPDJ5ShqYdNrh",
  "key12": "4fnHyB1wW5Ek1fi6ux8ecndwvXTZdf6ScrhaMqapwpaCB5jysXmh1WbGENQcidekf4h7rB9fVRQjJrN89v61bgX1",
  "key13": "3wP1e2bfL91jM5FJR5PXJyHvczz2aZ19EmBQUDVSszoMAkNk1uj4Fx3oEnWyLzGRKFdLSiDhaCcqpPTSHGaf8PMQ",
  "key14": "2Vwmn2soTkW9o1HivfKVtS63Hc78FM5GPM5u4JZb4MZJaDrPCtQJAAkLjRe2VLtrHwKNBonYp9tu9sMHKc5wEvRf",
  "key15": "3euRUaoSWfFC1dzWcTU1EdYrLyL4ShmFaRK4t3iwNTZ45vcKH26VA3AWxhwUv5hswsvewega122NL9bV6BBwBQpy",
  "key16": "2F49ULeQXSAmonEyncHn5Jtc265WEBdjVTGWTUWHDCGhnh7NwwdjQS2r4yNt1DfRBWsbP1BUDmVtgkkgTZzVfuRb",
  "key17": "xg3CXBxrfecoEyiCkMC7967wCJkkpZqGgCfsK6uTQbvi4zEARmxG2AV5csChw9CxsFi94HskPu6gwvMPAAQxcaw",
  "key18": "4PbE2xVBdiyKK28EcWUMoyJXHo8hJeS9fRrw96D1zD8ZQo6e1iWUr8VXX9UkgXRGYVVE75zK9H67jz9Nz39nsoNS",
  "key19": "3L2daciEUCTc3E73VwVEN7qBinUfN1khF4Nc2yMpwhNKAKG4tEe87sCKPrqvw3y7BYTn7UAkunHAD66FdBhixMjn",
  "key20": "4cPLhDX82mZmZ9o3X9GM8wGjNmYVHuU2mRXRqydmj3pbvdNzGzSw3PMfLga6rypwBxB4kr8UuekNFKz6cx7uMSa1",
  "key21": "2APuLFxZ3KixwBKsmjieyuCrcU3NkaVUYarn8KQEAuH7n5o18ZC7ZSd1p3yGjGatBpxSKvTKFiQTPBdyHWNNPd2M",
  "key22": "63CP6ecY8v223wBeyaZxhZ6AMhwnrMdXVT5JdDm24cMB86VkiSLPbWCoYeZRYoeN7Cb2vPxB3W5fm2MtuHpjwr4k",
  "key23": "3dUP2pZSHReMmKApuWc1MYmvN39B9Pc66wFhjGx1Po1Dxx6dkjfHg4eDfymAdK16o3QV1jeY2dpjffA1CtHh691g",
  "key24": "5KVDvx3rvbLC3a2iqQPzXSgtx27mRCiZyqckXJf7LEaD98WDpfP16b5chzu2r1WbUUdMqUzDRfQ79a7qkUrLK4di",
  "key25": "2mZros5DTn4cJxJYUjpr717UgAYdmoGqmx3YAz9VH9D7S81CuqV97Sx3mEps3rHexWbTQkWdSe2ZZdaAVPQeWUKN",
  "key26": "27GkppnzRmzVGFHeUGhard8pMBUBePSG7HgXKULDvut24LFVpRrHAwfEkGZcrky6ttjpba6HPBG6P2oY3p5jTib8",
  "key27": "4CQGxs7FR6rTPKKe8VgcXHC18JUQzegfwnKk7uXud8zGwy1RXLX7dRnkJg6hAv8y5fr2ZU75Q6Vvmy3dUNq5KrKd",
  "key28": "4mk9pAWD7qL22ifpeFqo5U5EUpJ35hxDdp1J846r18SHZ2RqUA3MxLR51Y4hA4BhLuc5myVvAngE7rB5bUqNa9RD",
  "key29": "RBtQgHStcsUXsdw2gyt4VymkQsWPuu7Tke8j1E2m2z1r4pbA5mFKhFHzfiTc8BCRsgjbkiVVxcgdu6yRBGkcPr9",
  "key30": "3un2UgcSWc9Nwd52iGPxxSipFduUC6nMXj3uHkEVY4QPXMTD4y16SuEK5LSURHKXzvMPikXFdLXWUqt8cYQqrPNS",
  "key31": "3PCUofbsUGj2KwsFLksZqB3GAu7jC8tBiNRXYC5Fr4gTZXKJBpY3vmeddEiES6WUaS5av5TebPsXP85Tqi4tzHJq",
  "key32": "ExfNMjziDRESfMDEqcAcRP4d9JweefTre6dhN9RsePy6ZC3SDLqizu1rpQG72rK7Sia5Y1HteDrg9SMRoU12DX7",
  "key33": "4AbBBP9KGnmacx4RnXaZYLZuFDFgipGQ84HveHtivryjYJXGHkWQV2ccZxprGUu5m72fSVwBaLrq91E5onvQeDxv",
  "key34": "3KezYPDtVsQd9RZLGGu45322DBQvmm7suwLp4BBEEN1za2VTsVAqPrqGqUgBvaeMuEGG4y37UkhV58xKfcYsUnP2",
  "key35": "4gA6W8WLumGjD9j5FDRXJ7iHyok54DwLaFaLTTEw8qu4mgEQsYeHgfgR9W5fq7TK6cwVFR4znLfYdQ7X9s2N1K8o",
  "key36": "5MeHErJoTMTakJ8wcCQxiTyJF88FWjya17ps6GvKpUqbzTBbg7irDcU2Zvkw4zPvd3zKe8q2eE1b14uKijRkUxNq",
  "key37": "Jz7p1LZjZBL2mKvEfpicTNgw5YHpwjmGUP8J1VU5QTd1Q9gh89SEU5DKXniodPQ5Z6rk1ryw1488ECMF8HYprhZ",
  "key38": "45eFfPunD48cWVXH6rBtakmBXgUscLNWgABzXnf9Qv7qsHpxrqkNWd7W6VxgjqXAkPRyW459Z5sA1UtgyGMsAW4A",
  "key39": "5VuShfze9giGyGCNXMB3LTKiaDZw2ZKkowuhU5xXj5WWQ5guxEszmtgANBL6kzw9QRPunvQvExxwStzLccHKpFx6",
  "key40": "yX8JEq3n3canSfW6BNzTfn6Rj8V8MBicWoRzEcybJ3Jg1TFJhSACzdiw1fASaAkVwEdMdKUM3DB1auXyGpBEiLi",
  "key41": "W1dPWab7ZPLJSXv4zLcVtpYzBnTWxHHV5Qq4fJDixEAacENqTUoJXSyupKB5otdmt5MtScwmkeWsJHemBDTrtgu",
  "key42": "2Nsokqi7iGvtxq9m55DCXWDxAK6pzAkfYEjYKxFxQuDiHxcaDZbC2swvxsUVmLc21DmiqUpSdgMddTyKSi8k4iYE",
  "key43": "2qkuQ1FoSpS3skJC4TmmoxLh9hcQAE2pXWC3vCYKFLiXDRFuJ5kuG6RmhLgjLv8DrdJDHYnZFPTBqAfVHxXJc1pU",
  "key44": "R8nV8FEpATu3sTdxzZAbpfTVW1NgmRm1mKEs37o3LcEfFNWGyUNYjtLpwLrP6MjmAAKu78FhZZEjn14qobzQHNj",
  "key45": "2xXiMiAw7s8nS5RkPKpna8hMuZbQkhks6QbJ39twgC86a2CYGdQ3eqDt2KtYV2VomsAe1bdZPJTuXdsZAJaVJ9v3",
  "key46": "2CTKY7jPM4U4oaZXVpBAQ5p81epYj9mXPm4uKGJeNUu42drKPSE2s9pAmSkjpUp8xBq5TAs7JpspeDmk3DAeEsD6",
  "key47": "2nTCcyyW5es2iguxpTdbDiFRfDeX1xpRDMSr3s2utSm8K13CmXxX8RBYXMczmbaJMXmeZ2yazCVPrSJe8MbcmRFW",
  "key48": "gPwyL5QCtaMvkQ473i4BDCTCq8T3eFD99Go9r98Z1b8Qfc42dHjcfJkrDKqfZEUYeWJoq42338F7V6ihpS9QyaN"
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
