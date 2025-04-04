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
    "47XDyKkTVAqELpE76G1bN4hFQuojyjUhZrP8bzRuVo8du3kyyVyoSfsm1ht3dEpmytS8UbrdZeftEYZYyyMLBmo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48asXjSWyMupJg6d8ukb6Jcf2P3TNa5DtWXmZbY3bv8QR7nZmPGifwGGZpC89fF6FAxPnDiK8rRtF9txKcpB6zss",
  "key1": "49eEzAnqghm1D6pxxDAjHjM3PVANgGPV7gPuv6kafDqWBQnWX5HQBxi5sCkxDeNTETpXLytW36AgSDouVh5rZjMt",
  "key2": "2U4knhdcXyBAKUVGwqKJqgNfYrc6rERhvfiBWnQaUBepeujie9nGW3mRm6xazDhXV2saY2vT45rU7R7JMBUx5JFa",
  "key3": "53rGVipJmzmZwdtaxdBK6WEQ3BdfcuLnePy7JYjnawFXHJ4jnj2tZ2EFo2fjVstP9x1ktLnSFigM5fXjPoXr6U2c",
  "key4": "4EXXkapSMHDmUHZypcjMH62jV1vyDqvr7jibZyp8quDq1UmFaHBVpS4Lvr8G4K2KSbiK2dys8PVKfMLGVaMguBh8",
  "key5": "5WrbDmgek2XftErGJCnKgkhzqLN2KFqQv3kjJoHkCiBARyBsSx1gE1thnkFxCc3evM4wmwmd6u9BWsySNeYQGBdb",
  "key6": "2aJY6N2woSE9KKWebfXEmgbpMNmy5ZQyXXsu4rRtgZnwdwehAsPbuNGhfssCYpRckRJvzvDF9hSU1r52EachSRJQ",
  "key7": "35G3j8s7xrnkaxEDSYUDVFmdW7eMqoowSjrvMxRvLVRCayYKgJfzpTviJD5ArgEakHicyWfykgtai94G7MAQCXXy",
  "key8": "88R2GAoKjYVvsDMJqTpwm6Hovh63ivDwk4Qb4divUKLCbezAUbCQi87eWezqmR4K6TAxY7kSEciPPLQtU7WjPiZ",
  "key9": "35ToexEWWfb9WGFf7L6TvX9oovF2F1Qc4tG5yzunrb4WWWAyQGfPNcBmYSxjYm1ttpHPL5vPKz8hjKQriEiFKewg",
  "key10": "28MNdU4jmuu1wLrVTMAmxkHrYsmXTc5Vs4MxWFNkZuvizJi1uVur19ZwpHnTchx5VA9fxMsFnLLhTyn3Xqpo79Yt",
  "key11": "4YNWjKJa8p5AL9qF42Zb7enQtDhK2utV8HqijHGWeXmXwspxC91hbWhJaE1tAY7uMFww65yJuT6ssYr2ouzgWBaA",
  "key12": "5z5fgCTevXvcctnAW7XgqvKg5SGEXA4vNbrq92ydnyYuY5YYX2C7631TYZtwHQ7QkYsNFKfinKcYqaVcWgCYnrjo",
  "key13": "2jzmJ4qRKQz5ZnCRrtuxS6ghNsxWRZeUfzDgWWoH8hSUr56afqjqfZ4ApHRa2EogXuRSnz3Sz4g2qDg5dfBVwp7P",
  "key14": "3PnGu5xXJV3uSZwKgt4jGbfXzn3mP1bDkPoSLUaiuPgimZtrUQhuqxxfGamPJh6vXNoDaVVHkhLuT38ZyS2WiAfV",
  "key15": "5QotpqL2CJheYiteCbQQfsYVQMJ8ipr5PY5KKQDM8LWPZvW2xxkCLHZBbv1iejfo5VG8UM2UNTtQh5Xxxp7WKdDe",
  "key16": "N4nbvfivxHgpmoZCzoUcKQHE7HeDX9JUEN7VjwSLYSKZz5bySuC6Cg2T8WVLQYZBqy2wjnzWbsN9t2gJzFVMrx7",
  "key17": "4L3ahksBSBDspddNC8z9U9BmpwRa16TfJU7oRTSpX46GV9pKunm8m7C28Xcfdbs68cYYCzv9LtushPZVgkE5fCVR",
  "key18": "2ncad5Ujj9TCpFVSziXR6Jrnn22UE2WNnfF1pGSfByL1eQRPunL38T6hErQr7HubxtJ8xeX8iF9Kg5i1hFmzNbLm",
  "key19": "4fHWBBDB7zoX8SqVbVdDgTLUXxQh5ABs26j2hAAQutshahEcahVT6AaPNp4VXPmdgoSqm7egwqkR6gmfLVQg1B7P",
  "key20": "4zpVnzFmk3NhyzmscpRxgkHKg1cworq4SP7Tsviq8RH1mJWcntrdrtyQiP8Cwyh6UVon8MgTCQaKAXfE8eApcZx1",
  "key21": "m3qRdH5Pftfngz1vCNgUBH1biPJDUcsfefauSBd7dnQZaDWpwTiHymBHAPLFTjk77MrAKfpRDSSSvTKNFMBnEA2",
  "key22": "kAmmtaxy5GAEbXaxnXKTcREq281dokqc53sRjJqmiHxmy64AVktiuQQhMZfkJiyd8gBJ1uu2kdSRgJPheuHbBRC",
  "key23": "38tFqyfcDKcvBiKfXFvB6zkY8CvWXbpY3xuhnH7BvsYg4fjY7Eo1Z6MYKJxiMeKQrbbgeTUUPBZ65Y55jbBV9pTr",
  "key24": "3sgzMsZsNkHmhbhAyQ3Nx7zVFKNR6CykcLi3PdUCZojxcwNomKxWTDYjgQMPEZ45WfRwGsXLJ5veGaKxuYQGNeVX",
  "key25": "mPoKnpuCMGkRjo27DDMaAdRemh2cPh7kFNjmVQF7F11jyB5F7F9rVSVuGDJctCQ1D1bxyt2TBoCfrejzYVcqmJz",
  "key26": "5XsXH2UdGHDwD5AGj6Sgd9ixhjVShPyYE76NGGE5r2y7ocSsPMrEtkahu7SJxnVKJRdGzsgU51773HLcT1tFnEPd",
  "key27": "MLkSwMbTdTWvcxznzAFqgZ3Vxutyd9R8ARzDuf45uADk1QbPQk5rbM7dXbJY7VBx2iangpYDRAptB6CmoCNpi4Z",
  "key28": "3RcfzdLUPz2nTyspnfUVUF9bMaeHRsePZDsUYZAfMi4HxoeAsZZ78bZAwewbGoVre54tSkHdgW28Qcb55Lq6a9hG",
  "key29": "4x1WAJtaYpuVZfvJ3SzEgokmE7Ns8Ehe87qogBT6es9x7Wkq1bLAEAkwNnZCWmuYc3ioLapmEBRFhqk2odCvQp8s",
  "key30": "2xXHBrsuo9d1U2qDeeunYaQ1JoDEFGZ3tzTSKL6T5BzmbG9D8eoJdTcyAvdU4wZtNfAwhsRcYpmzaaMZsR6LHkXW",
  "key31": "65Eyock37X5kiGeypXURMSJ3gpx26iJzyrdPdoFojGijUhJ9DudUNLjRcPA1GdsPHv5Pp1eFpG7c2STkDDzbiofi",
  "key32": "33KySi57r2cq2hePpTv1BMpAxTG5jk3DTKP9tDqZdQZcGXiYuCvrVLZ9vJ7CbmgJaatxpGNrB4dpawhrJ5ngfMBi",
  "key33": "XrgmSGqKonXS1vxL73CTgJPRv81r5q7f9oYS6zsb3oz9kvsX9yVKBt95C5m45HiW7asF3k228jsqQEhMC84faqW",
  "key34": "2G21EqotdxMv8pQ4ovVsp1BVJZiWhUQRh8PHf1wGYfs7wws16tJHcpa88gP6Y5MygUJcvtWveWdVDwXNBT3TQEcy",
  "key35": "WfQbyWDRvKaPcJ13oh5fk5yEdgvU4hs1pvNX12u8Fbj6qwtW3vuZrSrdSc32DTYpEE7fmFzK4FU2j2VoeyN3DUe",
  "key36": "53uRdCkkZwL6oimTKxh6TuWMCkCzkALwW2bjh1wdE3NCdnvJunb5tUkAzoCZuemiEGiEzN2X726FfcEbnSmSvntC",
  "key37": "43naBXAVX7mDfWNiYp56Hwb3uRN9ENH8GKsEEaRXXjmQtm9uAYMYUbBJJioj8BvnNC8Yet3GkiyLF6rxeCXV6E9c",
  "key38": "2hMqQRpLRBH8Gd7eiTToM3s7EtYiqCq1GMetMhku1j1rPZpBPHd3FLbPQnkdGbkdgNGTtFT3PpTb9gypAoeV7tBB",
  "key39": "2MfSaT2QwfVqrGBZMkVjZnDzLEzsTFMYEAW8FHQvZSuWKWzGHgvP83rKDaDqguRzsaPeU4VZZDWyWbiAJVueukSM",
  "key40": "4qJdknF9g75cvcqHCK6Ro6jSodtVakLYzqYA6wtoyCJs91WLF2TPSL5o856gxzDMFRbucVakUpQGE7FkKz1x3b24",
  "key41": "62QXAV7uGVy2vaX5fMB1zhWo6axH3T9grkmsnoVKcyNA7pNDXpGEyuLSoj7x85dC3kD3rchyt6sh994rFtxUporD"
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
