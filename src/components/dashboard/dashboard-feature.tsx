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
    "rcntewcxcU4UHfhRCTgXf4WfRX1YyBHECA1pTjmP4gHZNBN4HWv6yvjEeDLiSJiSxJsTEpwMim5rEonxBzavvpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c56fFwi5Ye4ekv44QukRzJwcbef9RD2z68ximZPQ4brKW87VWheEbQmUzyemrXpSsvc1oJRHy2S8qNMfhmRwPLg",
  "key1": "4CgYVdFuvnqCUW4bKc7AijfCXF1Cuj4VsFe642Q39UmWXirpcX1rj5sXKcHNq9sT39mAH7DxFjZDcaNCTbAiVQbX",
  "key2": "23ovbwSUrt7q64H8oS3ZHoAxeADwPcQmZk64n9shqmbQwevWWfBBhMkWqjKZsFw3wPqFP6T3rvi9QGkpnb6HZC1T",
  "key3": "4uL54D85br5wTUZiVwnXpPgeLtUD3S5wfceb8b2YL225ZXge2VZN6ydfnGiWsnvorSpy3n86LwyD7RY6hcNn6wg4",
  "key4": "3FBSExKEPgzYiHMomPYPdZmF81NzzjP7cJLHmTD17RcCujZnXpVjEyqKDWyJTHEWaNsCBaNhNMdgyZZPg8Y2jQvE",
  "key5": "5VrmzgmbBBQfH2pGF7sGdeEmydJYuy4MHWDS2gA3xubAgfgpo9ft5DzVucnsTrjvBGymu6EGBdxTXqNogv3ovGJd",
  "key6": "xbqYcZYomeYfip2Yfyy47KoQR2D86TBRDKxZYePkUrKAGSiw1rhKgnfBF8AjhtjvbaGJL7gGXkvS3UfNETKH4Sz",
  "key7": "4NKG3AMyK8F8B7cixexWoNpjCiJPi3UxUsGeMCbwDeu1EenKpMV7vjKxpBS6eQG94aYGSwdcdAb6VY79w3NC4pYQ",
  "key8": "Ht3k55iuT6mrXqSSVY3Z9yL27t1XbLJDDr6gEzQhKw979TVKJYfvwHzhW5Fi71fD17YCaQ3CWHuTZ9MwHhKHT6e",
  "key9": "3VHfXmSCagqgzLdQFZDdpEXjJT8bLk7ZzdwtNsjmFHb82ok3MJz1XmLaTpUrrTTGTxRjqj5XanCyTCNDQpxt3Mw2",
  "key10": "2sD1WLr4oNhmCJSQLJyYoGTea3suADm3s4Mnb4p3LrZTM1cMQGdG8g2eyL9Mi8qyPajg4nYqnmAvvjCL71HTspET",
  "key11": "46XEe2r3rA4HbppBhvPiHMLUf4BtFTdSMicDB9c5y2EfBq5xnMZGwXmrxnyjb7JLcRvCWtVes9qx96sh4x8eyGAx",
  "key12": "2ULAa8mTEPfD3MjsGFzCW7detK99Fy9N618hmk1oDyg9ybfVuAVecMkTdiMxN558zhD6uUtjgzVNNcGnJNACQpaU",
  "key13": "ZkKxtUMLKV677fciTqQcYSNmoPUfxscdRD2unGen8evFvi1jnaUccQjZeVSyBUxxMvkoCRndAGrafGsoqKxGLBG",
  "key14": "h7iQsfNuiXFfXqU6dtYGZdZA1BA6PDjUybAKbRKy21y6XEAuL61jGU3dDh5wGDh8YRRandcXbpaxB6VGdufxQ5w",
  "key15": "nWiAN56EwFT82XgaPaEHPLLL627ySDsejRq4U2Br2zgj9ujc4YegitzLhf4gCtvjZGNYCEZikkbQ5uTa67TQmaH",
  "key16": "3pyt8vxrpS7Y4Lt3kWrDsXfyMur6mAmbCM2de8u3pfRW8fCTQVTkuWeCY6928FTuDFS845kBYHhhhxaAhnhqeN25",
  "key17": "3BWmr8bTefUEnDzS2bBFX26XV9fZuFyqueLoDMERqCHJ356DgaDHgrnQqhahX8V1E16yoRLseU8qcGsPzFbeZmcM",
  "key18": "21ftjGMzMQGgUjqZvnZMBv45MLJ2xRhkt5XHSeFkpp2iNAnzYjJda4ra1L5UiCTyaR7dGXN31FS37f7nAHFTri4Q",
  "key19": "5F4tgcNaWKvAcWNejFmjwvk6DcobiAZxNynccB43hdbAJvdsVCQwkfEZJJN414ZPvybbfBJb28m1SkVUdYKFJhXY",
  "key20": "fbinr9wuScwMijSTsDYgDaM1B8xsRTBP9t7mAz5pB6Qw1vhrzzu3hg5yic958jW6AmBm9MR6RyPiqXYT835Kzdg",
  "key21": "5kwsQCAVWbQk6ctqLsFKefDfWVmRJVSAhBxL1ZMF3731RbonHNDaVQbGtro9WhuofhmbMyHHJ3hjXYG9dWYR3QAd",
  "key22": "2sRBMUWs1631yWyG677YacMgSaNsysbNiamr3TL9xaihyXATNCTBG9NAr1dvjcYjokCKbPjq95XiUiph2waPqBDi",
  "key23": "2tc6CZvJ5SbM3spTYAHvrurPcMs5sSCJJXbmRcvVDY5H3JHK9WXBumuZAPqf1D8G9D9ho1zYUntb7siYb4JNj1Kj",
  "key24": "5v8DNqunRrdCG9o9dv8Dr1SBKaWVq9Jp4vEzo9iz1Knq2uAxQhVRhRPSeeF6fKuL1UQU39H2j1yXCKxsWdMZantj",
  "key25": "5hC48m6qCia82zNzqu27MVQPn88hWijEbyMpBfCY7azZAA6GV9imbt9yDMzeqer17vf28gUo4FrZQGJ6Rxh8Kwue",
  "key26": "5AB9t22hN1zwJeom7RM9f35UfoEBFZiUshozfEjxViLfG2NKAbHfeRjqHvjBstHkovUxdmTNz6LahBe3WoiM1B9r",
  "key27": "2rbVZFVpGBExSjNuKappsuQ23TiDwxZZEarDktjYYKH4ifiJindRhPFDq6kytdfbsWppH2ocg1jY3dRauzk5a21z",
  "key28": "3XTs64HwdWocxo4oEVUbBskGFozruAaNHGuvuN1A52EXNzah3DWKfRdEkFKgaoHej76oqjhQY4EWKVuNRWqFL3rG",
  "key29": "2Ci1ACohozH9GA14GUEj7oebuH4UmwNBvK7KrJy1eskR3LhwKsrqjWKLodgHCmuFvfUwRJtHWC6TnhCXvCjsrza5",
  "key30": "3zVqaDmGJrwua2CXzt6z4xPYVVKWbKG7JBqvf2TzhnK5NXxZSTTwSZh6BGdHXfYk4HpF2epqAp942uEuwWVUNCHo",
  "key31": "45qR4H3DBojcSzECt25AQhXRyRraRVtQwopBwDACvo8CpmR5H4PrVcaeL1E36PgDz8k6q1izs3ewFVm4VdNkabKC",
  "key32": "FFYcU7Uo2MUbeQjJCzVUNzj8jEkFiaKvLXEdixyUL5Qq4xQPnTnWLR2RYxNyP1WnqyFvMKyJDzQ8zbzwcZUH9Zm",
  "key33": "2CxWCdSFoG2nRD42CbNELzwBdnV4P6d23b2XaxaKdT2XcfNtpzxdF9Uaez9qsgEUD3woLYJ2yJeTZ5H85wMmQnU2",
  "key34": "2hPFASFuZm3VqEC2qHLsvYn7bUhNBnFNbHKR8z8ugcyYDTTk8HVKm3NUpK4oDynZvPeascp6NtNP7coPgDrxLFYd",
  "key35": "35N1rmisGDXsEziyxAGKtV8X4tP6aW32rjonwPEffrS577TReAdPaGfgxGE5QtUMhWNGGHV2nA1d6Xtmv2F8HoUU",
  "key36": "4XQSQTJP8Xwz55euczs3KACiMFq9SSUi7bw1ZNisGcuVkSGetiZamRW7AkdHUJcL582rXJWuTxAbKHeYW9xVHJca",
  "key37": "3HiT5ZdWMRsjreMJP7oi6t1zbjzENBmYigopwbEFoC86bDiL2imaTxeEhJ4TfFYtu7nQj7AX9hQ1EWms5kor8Gka"
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
