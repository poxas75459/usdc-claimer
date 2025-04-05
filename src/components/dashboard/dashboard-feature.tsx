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
    "4vMGxeAQZWqAtmv7dq5gRQNWeKfGH4ZhgvLUk6tuuzjMeJ8Xm4nRMWP6eadkgx34nNz4QSbcvR9F73wTbaFRA8wV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E3dMkteCQeM6xfmaQEMycTtw9XBE9wbC2ffJt2qnHmorRpRLUf2SVpJ39DV4ki8AU8dQNugbhtfhLMcZxHu3sGX",
  "key1": "5FqNRUXv4kuRM2YLAdt4vuLm4RNHUAQrLtRiFagtWwS866iizc3zKJ2kaUy4vn7rgNowKpBCG9MWr4umf47aFHxu",
  "key2": "3MXtGGTRc4m7n7L8tzgxQngvqMq91BxY2L4HLGN5SizuocH93QzxfBRmsgav4T2JfvvQ5dDWkH4UeAWKQkhiY4hG",
  "key3": "5a6Qcynu4FNGvd9G4VC8JnUzUo4aC64x5XY7WuTG5y2vc7iAE77xUubQXabFurd574Xk3BfDRo8nHsBjLFmdUQva",
  "key4": "2jsmbox3TwdHD2T6kTofiWzKD33BTVV8WDHLa6zVzjG6j3Zd94WAiqy5CNs5x7YMJ9NBF8CJgTDHjF6aUDc5sXMn",
  "key5": "2uZnY1EvFQEHDKjPRmfJWSZajMsU96D6pfUdqynT4aTrEyNg9rFoqWT9U6VU2qiJjRLQNGsVjX79UkRxowc2yyeZ",
  "key6": "3BakbWrACbHCFx9r96bDSRF8AHSLkaPR8LR9FuD6j9NgZrqL7XSHqHwXxijNQ8i7VT8afNregBtK94Yhso1iopqR",
  "key7": "4AVrHDSoUPrzHVeNcuRkfEtzZ1mpXoTWXffS22SLq33DJFuW5DdAKm5NqQCH3DmJuFRfAQjbgXceybB3unxmNm6Z",
  "key8": "3E8SHjBcAichyMij1EXMpAJvY73kimsRTWQzZJpfN8n9gkQQ7tMeoyE4r13SCEz85ay1xE5hg7cFmUcYWB7Uugxt",
  "key9": "4TWYETtcq3zBFGQNvj8Go6QVaCLjx1QUNFVrN5WUimgXskemg3ovXBXpdgDzPJv1cshR9maoAoJNcF1GCiUJpcbx",
  "key10": "5sEPCgLf2FvrL77iyyje3wnm7Yun9cvkSQDyzTruKi4RkKbowCtVPfmwmjoBoPgG38upfsorddEXHNrWDmBd1dB6",
  "key11": "qmwBvjPsQxmkB4HvX3og8V48dCTA5bA1LpmiSHQntGx6FVrx1fhVHDr5Du3JiPa2dJL8tsu8fzwX1naEtDfARzF",
  "key12": "24kux3u5xkvXRhLNnvkahMLc6nqJVFv7VvdA8TKSY1w4NRPWHwUWJvp3tcJVqJkw3jBitTr12G5d2rpDBsXMw4Y8",
  "key13": "xQCRrFJ52BYKyCZbdsCHPWFGSLcFKtBoDv7HCB5m2f9x1xY3wZ6ywJmxBmWyQrRLVrHmqS5ZXZgGuYX2ovQrqks",
  "key14": "55bpw4iYZVAWEkUsALN8kS1bHYjYpmeRHzP7mf4iyudh9a8yTkYTaLVXGa8YaY66eyVEhjLxGtYzM3CDqXnsjUHu",
  "key15": "3F3ZMK79t8kXXBnfG7zQ5s9PPtbQM7xL5XS7BVdk7zqeh4VGBm6yMTn1X8UEaZju7n8L5DJ1NG4NJ7NC4PcfMCeP",
  "key16": "3giebkE5SgPZTUNKAZhCi4ofEJs42kiquwPfwH3o7fnNBT92PVGdKvsY1AcptX6VWuGL7hjGk5C7czvyjowFgVii",
  "key17": "4TSNcd57ofrmTsGv5ETC7v8zTqP2yP25QRZf9KurP15ZahiKTogBbHSw7mifzshA9wtkZrfUsyKtkcZ73KdSEjcA",
  "key18": "4wALy8FoLCDacgbn7MeZDSmV36K33X1DsFzWFnGw9repwy4uqZaN7Ar7atrdMKXmLFiUjZoffCfJEUUZg94JngpH",
  "key19": "41z8c2xspzTW99M2urtu4vd42D3h8JgWa5VavnjNNMAF2BvH7RxraMCN9mUcxpSjizm7yaS3sZpRTh1Q6gVeyaU1",
  "key20": "4mwogyPgoGiCLZNoHBTyGxifXszfnku3SUsgft1FnzZwmpQgQ1rrEUJJ9U5JYjGufkFGHQVkJxbwcPak3xGzXDb8",
  "key21": "D9EMephZ9skVbEbqvZ45nnjw5crCmPd5RGgpZAyTtMNvTVLAvUYjtt8zFK1BDidStCawPBHi42wy5qUZCFzaKmy",
  "key22": "2eeCGnQxuti9Yrn9ko5yhAoprgrdj8kTyYakw2Z4UJ1WcdqyThwHw9nwEvKwzcvtyyn7XEYFwcvAPRoJHfnqDauz",
  "key23": "22NnPfv3Bpz99GhLM9nfWHsazTGK7bMPHq62Xfv347pfm4X2muhxBJTQx6yrdjNHuNz4Ebxu8Ho5oTFGdkzet3yG",
  "key24": "5Zi5JJaHp4Q18hrV9qgoXhfaZXi5wxhdvSLxjg6Pz1kkwiQjdnyxX1b79SAj89CdSL39PxGuoGuWEz5L3w1tsVXG",
  "key25": "57MpoDXaC5mzRYHwn9fE6jC55FKx9SXtx1eWxE3hAbY75y445A3HdrffQT2muZSr332cL4rWwjA9ExePkZNb15Di",
  "key26": "4aAiNMNsfo5QZjA1kWcKAmsjS4H6WahbwF3nU5NidnVJ9MLUyN9YfV6zvtrPNbzdD1qiocz7nRhSmmx7egKcUhhk",
  "key27": "45Ga4KHgcZZbXyVyDshf3xvxoQGRhAeBwit6YT76vcaLyBqCE23Z5tDYBwT3CCTibPdv2HH3EA8xxo2zkR1FZVUN",
  "key28": "eWbroY9fR7YVkvTcpiWs7TkLKiVkZCgVBqa7GUNJ4jE91vYgjwr29GEU5JCvVwk9dCs7W75YsatrBLySaqHDsqV",
  "key29": "VuVWb6TuSWsfbQr64sC4FhNnZhE41giGSrw4HffdXuLAEBzqK6QFPP2xH4weRx5bZJm4ERruPL5pxGLnwSUPMBG",
  "key30": "2AWU6w1hhHhpeQdKVq7HLgFnX4ynV7zGXYu79YdzKqmB4CVskDbuRq7C3apMzqZcFXg2Td2n79oDmsWyezzmy79A",
  "key31": "PTPZsoMKxN944AkSVhL9x9r5F86cdNZVBJG2h1C8T2NxHDUox29JmZomLmaZc1Rn9RR7HUVNQCdHjTLGW3w69kW",
  "key32": "66xEAoe1eD8TK3hAekUx2HzFKJJoM1Qty4bQnZdnEBrudkBATNzJBWRonUGbgZJjSkXDmTp9dHLrR9cBwwaFUUuK",
  "key33": "4e7LVWnaqa2A9U4c4NNHwRjdJPLzwHBvtx85aQoE6hAZVNZmQ1hLGDuLZvoc6YCmhzGuyTVN8T5Vg5tXZ7cdxYNX",
  "key34": "4Mpp1r6DHza2WNCMLZKuRE1QSikgBkWLUTSnvAFKmHnkZNdeJgfmq33CpSPSJCHJuopRaZS572SUt2LUTDLLV5iZ",
  "key35": "64ZH1F6PhqNq4EEnJXzBpmQxEwtu6QadcaBkm12Y5XiDG5LrNbHUpj5T5p5K8MF8vNtZXxXqjWKkqcrstK3ywy8Z",
  "key36": "5nAerhZrbYZsHyTGvMozog2XsSJpxaWJKEotiNqHVdMWkXfuZTxdqXtP6EqRrSFpq1N8e5UE4jAJrxbCGwhXavEW",
  "key37": "2dK9rR5HpcrxdLhUo3rfQpBJqrwp4h21M1siwNK1A77MFJrX7s7dDMPuwDA17CPwALTkEyyMLNFqL2EXBMokfo9G",
  "key38": "2b8ZrRSiVUq6gantNhmP3WjDaqD9k7xUibUJuZcHDRFXvPabxxRaKxcE4X18xiJ3xfiTt1zNQy31pVHCLQn3WAU1",
  "key39": "4EtZtJ5pgRx8xM1Ws2nAa1Czv3jWPwfdMEZM2gQriB7JqHcZGS7KQ3DFEeTr1rTix9VcQRhjCA2qK3FDLPuWA1FR",
  "key40": "2u1ifnLhmUY8pqiU1aNL7t75kZNCpvHATN8FisjVdFvBkwnphRUbqQbZyivsabBNbshXk4cMsayzdVTiXJhbMxdY",
  "key41": "2qdYQrsgCVJMx6LC9iVm4fNUYWScreZjUnty92RdmbjgwzUrbmNzjpZ1TXSijNYvBJgv37twQ6se6K4nP3FCpUXj",
  "key42": "5W4Nb8cjbvLefW6PLqTfct4VUxVBPQuJYDSvFo3sGUTxx4CSea6D1aE72F4oxYnuwi3Nb7p6HmZ2iFKN4MUeCghk",
  "key43": "39PhQbsgNAX5oWRadngBDigMkR1S7NAjxRcy6c8cRU3vJ4j9FULfafLJARxR2ca8go4TqSfHC3u7XHtpdWZFLQRp",
  "key44": "2f2AN9T7JFkRRFyebaA3gbZjccKeKGGRQRffBpCPXFsbXu6roYuC4z9VRPtZZZe11ip6YaejVyi8i8MPDerjrDpq",
  "key45": "28mfx9chwL2E98Q6RwKMmsHHEobsMW1KjHjV4ebktTEMycAaSy8derXs3htAM8HvdLrHZVL6gYjbbcUcrF1UHYVt"
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
