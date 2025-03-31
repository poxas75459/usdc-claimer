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
    "QrdzdyHS7AwRnaBGTepu8qAhpEvZzCCEn2hoQzfmkZPvsQBagBeZZcwUyUkzwbDT4U4RuJkw9ALAL8BodwuArAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dSJ77ee29s1KN2wCThDGKNLkjJP78kxPeEYsMdABBgja87AvbCQnNYqs4aUdfnVEAvkiLzQu9HR91WC5nECMRFS",
  "key1": "54sc9fBqtG5asSB5YnQyGg6S64tEeo3nNh5GAJMQEFgtx8xLng75DGgm5JReDK87qzvP6M6aZ5SSRQmNkFEix2ZU",
  "key2": "2VtqtxY62SMVhEYXAnZt6kJp1MrYp1BbVK8yFHk9z1vcBPo8WS8p6FDeVjeFYhZWkUpcGdsopd81fdAjFVSTWCGV",
  "key3": "4MHhgqZFHa1uuNgQKYZZ5161jvxrmJa7kX2jDBhiufgFJrziLUzAojof4izZGkFfHUv38pdFjFVWZpvqTVRtPq9S",
  "key4": "22wEv3gYR9g7SR8NrFpzcDUt9hgr1SBQMNsodrforoiZQYzunu35PL4WdMmSVwhLH1JY1VYY5baA9u8A5ESUhyZN",
  "key5": "5Emy73yANMAUnJPV8kuXmgcR6PXe7Sky2CKzLanafrpqQ4wikvcPfNDFyk6kG9sPommNJC3WRnqttLh8SxD2q4uZ",
  "key6": "3TQGevbVEJQSGy753oxeBeqkhv5xgMz8vmYQDiZUe9CDi4yWdCBPiS4wA3wrAAwDEM9oiFuvg6hqAG8chyz926we",
  "key7": "4Uidzm2y9kSAnQHeD2zZyg2nuyCqueFQeSzikKBUH5r1xwyX1xc5wDNjVqfLEGraRtgMgmYvQxkq7mpj6bcQJqTd",
  "key8": "3jgodRVvrNM7F8tCdoYjWbHfKR68enFXgnHyCPfe6niK3fwQ4MRZEUou2mESL4RhAXRYXuDYHB6UyJKrr3uwgNrg",
  "key9": "4agS94FoA8Vob4xNHSD1ku8aorsqvvvcg9NRUrDnAtankBjz9wfFJ4hqdKcqXG9KeNvHWjwU6xwau1PDDK3ZCTAc",
  "key10": "2tuYEUD1HJ67PhAUVZcuZSKJ9K39WV177KHbmhsr1imMbqeEmwzsmw8NZxwoh1WxxE7JjrjUCV3BmB2sE516R3GJ",
  "key11": "5cCtCZcPoG5fX82AhxodJ1GHYq7RmgPp2YgQtsMgZtTYA3MmcmvrsApBdBPM7FYdGHxhkjZ1Ys3cRJX2tA2fXByK",
  "key12": "gMyoPd3U5vjPDKyo8RciKw8vPKbnndADf8WB7fQjP9hiTSNAHDdQFwyAKkX7RgP6mVKCUNsrwBUJzZxS5CCDq1R",
  "key13": "4EKLfZRJsqmywK1otATs2hKFy2dSBP1taxvVKkoutdEVRYzQcuthiWDtcfDaSfWSyumWMjstsifCBdZLjjNqdxKU",
  "key14": "36sydHDQArKsUKfGrt7RYVtTooZxWbM1mJGjEFVBoA9x9wn35M9GerA7d73GdaAP8NeFbz1YTEvSyGdQBAopMGLU",
  "key15": "5Srv15qPWmPEpFHJcKKT1dwuxkFYDQP6TtCwkQ8iH5AcJtjYyRio3UujZVXdjC9nosTzGTPRMqFPXh7tLs6hK5Dd",
  "key16": "2qQqwF8HBPkchSodGFqtcokupV938pPc8AVkv32MKdssEk2vGVdZiMCi9FvQPRa2EBuNG1SWB5N5jsKVoBRvrZHw",
  "key17": "3uD8T5pp3Nat9wRY3mUfJp4e73wXe5zpbDUH4yXo4wXbSXwKdd6QAhSUK1xiL5fLXj2rAnfQ8nGErQNC2V5wuAVm",
  "key18": "5eMrq1B488zqLbnHeAZPfHPtFPDbthsCojHwkscYnaSWEnC2bSA9eQ1Fzik4Vqxt4km6mxjtCpfsJ4NHtv9dshAg",
  "key19": "Ng4D962EaQEammNT8k82GqwtfsMy9FpxEqHtM4Wi3dvX4iuPyi6FaRKDiZs76rzr4D53Q8iYQMZRWQJJdVH88oo",
  "key20": "3Kd5BgzaT6qEpwntqPk3qQhKDJcUr9oPjcb7AKpQQu3LU8qHTTvGWA2GKXw8id4QK8qn86uW9dgzsK835pUv3gYd",
  "key21": "3VYYu9S7QiSnu545nZ12DytM6SmGn4DiFBgeprdLpJ4qUkjk5h8WX5CAxXyYKwE6chhWXZWXhN8o7WAaANmwwKGg",
  "key22": "2B3WDUi8sHdf3DH2HhpufLjATjNd2kLw3SiRpcDAAsDDmngowEcEkdAfYhxMvvfPdNdZGJh3HbfTfg3ZUNctAMSW",
  "key23": "3Vhh6AJ9FURBwQGVQiyHFL5raaUtCZLkKs5hCPEJWNvUYeSsPUhFvejV3boRqZRUDBtab8wL9qW8hgLdcg3WEbu8",
  "key24": "4488v7TmhPXVvD1fpCyJVPuKtE2mCZBafRJU9BJ4UErJuRMzwLQEXZrxj36Feiiw1jEucmgB4tmB1DcFPzuquzbS",
  "key25": "3tnaHQ56eiLYyCQ5PE4mxSivFUEeZjWuvs6TQmmbr6MK86jj1gYmUZNMD3Ra6PenDE6wmPubSYV1HLPmxP4AwZLo",
  "key26": "4Gp5JAnwDzZkQaVnRB77YsANPNsrEgw3YQmFbxfZpTLirHBf7ZwnsoDAyvDt4KpYvQkrRhy7fg4ipbBoHQtgYb6B",
  "key27": "3Y5ovhLeB7CSYuGxRTUe3cSTh7j83RXzvQXfMwueTVFsR68uQeEGxLruvwXhWHn941rtNtL6ssVdq9ZY1idu1zFZ",
  "key28": "3PJyq7vYNzE5S37rJdFg3WcubQcXUbfPh4R9ST7i9FKrJ2XHr696XgLAoTtMVnHZZmqfCCUV7fd735zZHckUskTs",
  "key29": "2yUPhohKgQXvxAULPCSwX6x1c3CmMrKrRvxVmmRS6VBQWMtH8ayMrgiB9AvHtiG9JAHQATDTSD6mg6fRd7zh1ZeM",
  "key30": "5cJrXyhxaZgbQoSbPVBveiWT6q1GRJuT2qw3f84K1R72y4LXDNoLUFAQLdCpBP4EWkkZAg4EEUByjMJByx948QE",
  "key31": "2efceWXnauhwTvTi8K3VvhFDkkhjp3VxFfYmNtV7TryNStQQXyC1fYkNG3e4vRhmCBocFfn7o6qyB61HarMK2d3h",
  "key32": "5pJoNJDdHmjgCttX6KLrhPyrM5R9PiqF74pu9koMrBxHvqMqE4GG2GXg75R4eQQe5Xs8RAZSd4gLaKmeBrShJbvf",
  "key33": "je2cDSUcGra9Rv6vveV5xxuJzKZypJtAim29aP2VqASR3UEeQKwa7SFGuYvBJUcHcmG2w9aqArAT1DLBTeAELrd",
  "key34": "5c1NUqCdZte6GWbF3kLz4h1k4JtmdU5H35fssHqiwkkUUuav8BQdmnzPvXbYfuSNBZxJytRSJbkbF81UssdLJSF3",
  "key35": "2j7fNwk1guWoCCiCDDeeRiPbsS5iVukij5xJz4o5WoWgUGPUaQo65qdRWjMZPCmCXTLMnNdTVpvb3ZXaHGhi4x2S",
  "key36": "67aHWhDmfo6bZkoJtvbuBShrbqYWejfVjWoMSXCmb3Vs4Hs5jg59Nk8xEbLTSHbDFjNyXXtMkfV14qj38pQUsnqu",
  "key37": "5UfREH2h2kfkXB4ogjUQqf8sGqxyGkDWM1z8gnuafQJtYKp47iZMNEnt4G85BgguHgG8nbmqNAYLPNeVjVBL3Ynp",
  "key38": "4ddsHBo5CdQayJpyAGtPvrj4PBJAFgL1MkYtaWjs8XmTukH4GLhaMoi9PcX8dqQ2Au3Gos4xe1r31wgTkRwac2ii",
  "key39": "3H5eytuCEvzUR67fnDgxnecsiyamcchoUtwjRz61XsaLaYtrJDL8vKtRr29kBF4gQgaVARAtmL2S5ta2arN1hYpx",
  "key40": "3djJePW1faZKpkcYwtsk3wK45zpLng8tEGXUCdRjY2qc3s2NFVq799cMP4zxKeQdgyMrthazRbv5Ngwkp6cW93Lr",
  "key41": "2aV2n5nT17NEdnM25PB4mETpQUSAxuR5NS6UV86Xc2E8FJBEMpXeMR9ugYPgrdhPg3srGS3z6ShQYfpuVjSpWV4A",
  "key42": "5jBCkarCPSRHU5ks3mczvVJ3EPE6ppAGckE6BZZvmtwL3iSWWz7efsCN75gWNSK3SYPfwTsQ9VHxLCfKRzW6pi1x",
  "key43": "2d3v1A8mj6WgCwQbjTW97zGNaDLXXb3eiod2HvGXtCrPPBYuK1doY2BWh38XfLbpox86Y7b2bDX7J3GwPB2dSYVU",
  "key44": "6AtonPd8wsoAWwkMCsiqTpwMTgTrVsNUMbWYApwToJ9wf41Ebf6xHxR6ur81fVa2LYh6xD2DMg622tiHvCFvWL5",
  "key45": "2p2N3d4Z52jkc8U8nhH9MPCpH4khUGPAPBRwSVVo7dH19z5S9Rdp22zWjfcVdVgbUgvtsjCXgg266g9csz3vEurT",
  "key46": "29WXKmZiXczTAYmMVFR9acz13kQt699ktiD5UJoqaeEJ5QnE5ZaUrJZnDcGfquifLku18okSyypBSxtH5xQYdBSj",
  "key47": "4jQaXx1hmB1J3bZApu8Nw16y5vy7vi9CnLGJaJ4Hw2Dw5Qm7rRM9mRHh4wom6SjiWuLK72iriAzrm5mLWeJ4YSsC"
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
