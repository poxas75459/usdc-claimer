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
    "4gckPfLUyUNZ1JsyyHxK31NNmbiotxrrD5VeRaudwaP1PW7FtVrELz6qfP65g3vbd3zyPTsFzzXKKrxQorjyncEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n19LFcf73rprpb32fTta8RgzTpoCq5F28j3HHoV2ocgbuA4j6b4oYw3P3seCcUE3MTTTyRtBHAbfyBjasbpgchp",
  "key1": "y6m3DwRtubo8sYvbG1NuqNY7x9XTMCrUDWZ78K5DNd1KhREyC6QVXa2DhCpNMjs5jvVNUjhVsjjoTkjdTXJHjTv",
  "key2": "owxrW2WEdzHFLzK37qFT8vckuv6wukSbQ81dGK5MmShwmBbr5arYLiprDG1gBeStWuKnEz4KsLQeEcECp9ybUFi",
  "key3": "2EYrhBKNgFZhCLdAiqKrw962LX1c11ro8ne7qgeVD895BqiNo1waH1VpniiJL5szEYyAwjRacV9au1wQqDBrq7KZ",
  "key4": "5oVLrHwy32x8AdWnXLrBP635nZQkxGUsk97UKcrhWmzXDp7weuGS7BFjaw6rCucFPp6amMV6g9wZy8jTg265yYLe",
  "key5": "hMMVoW7gPi3EVRoW4wh8xwtujMqCyQ63xhyxaSSaMpqwH6d26hY2KnwsTm7o9bGjpQYR15AUFbxqDrkNvLp7Kso",
  "key6": "5rmNxTJBSrMj3pPATMmg19xzc5QJ5CMhsimXvQQiwozeksNjwJyC9qETyriHKZnLqPYpJ5XKqyHi57ypyAua49vw",
  "key7": "5wScD3c6o8JzswF1gqXgA79FT7cvb53NdcUdn3SJ95k15mxy7Dx7yMqmDmSweSWf4ZBcjJLycVE35a91zxnPTCKz",
  "key8": "45R1nV59c9hy7Pr9uTWjGgA3nRg98UPny4yuNrWk33m4HMumGCbekdJyTeJ9o68pkfMYaPG6fbVmpbGMXTHdU4tx",
  "key9": "223to7aCM5REJczXm6RkYkWdifnujSdiw943jsfUf3ZbgJ2z6q6Qg5bJA5WdRBL6Gurbh1TxDwAJRzqH6i7CaHaH",
  "key10": "Dkrr8AbpS6wKS3YQ92DXHj9CG1PEYuaHfLLabsZPtRa8LF1EM8vSa7YEFSngn3gQxsPp4nLg2RPWeyFQc5qPmNH",
  "key11": "5yzdrvbwGXCE94iLHUTs3tDJr536MtxHKsUsMaJPjE3R5VPg4RU2aE6ugpvmjiEuNhiF3HPBxwCX5Xu6TcjEdWZs",
  "key12": "4KQQN7PT5Yp7T38Vndp1bNTK6yySF3i1m5vkZ3sKwBQNDcP4nut6S2yKro2kbSZDLqoDt6dwAjbiKYwBqdLGfD9D",
  "key13": "3qCU4Av99xQRvXSseCU5sB3k4iprcVBMumayryRmhLjJ61BtgtJSA3gLkHMMo3S5Amp7W14pR9DfAfGu5mDAresT",
  "key14": "5CcdeLFsMjm26vfiH465HiooGiPT2tH9UWK5woRT7GysYrEAshN4LMygoBGj9SbDczWVrPK6QGxAYwNMpXKYZMJA",
  "key15": "2oaxKGxKA6y53cuh9BHRizFEaibzocSRYgmU6ZJeR6G6FDB1bV6MzwNUaLF338bZx4Ho6Um2Xf78QoQigijyfa6U",
  "key16": "5hBRhYEQVYFNsQ9THcPftDthUQpLwBaNcS9MZ9s2wXKJZKdj4ULA4oaU7bkG6fWKq4BfwfPFbhXYRQ7bWMuwYNjb",
  "key17": "5mdqfQ4jwXuwS1vpV6QtjYkNaoaJPogiSYi7GzesUykux8QuyUeNpRgffJRMyUTT5dj3kw3KJt5xSEt1ZeKStx9Z",
  "key18": "5kcNNii3ncbEMzMwypUPgmcitgXvKqvTaYbsmt3W6tbbHHvPdjDn4xYKKyBxFeSFqqjuoy89EyiL1tHf5R36Ejg",
  "key19": "Zfa3xQYw7XAbx21NvJBsxjXL7ufgd4t9L1RUTZ4RQM5trYm7tXrM3CGWAbqhFtgVbpC4o7uSjwUW14eABFr4WE6",
  "key20": "3Vv4XEMHGXCPbFhAQngJEz9d8Zb1HH3GRgyMzUGGQNRJeck5SS6YGb9CSA57qrBPHjUHzhFCutX3DVZUXmxXSch8",
  "key21": "4akC5TmpyPyRNk2kbyJ3dBMPmuP5wxdcyf6yY2d3PVkYCnSKnuc8xBDjUTLP2tRqfUxmjE2SenU9rwy2skaS8nyy",
  "key22": "XdToKPUWCoVvv7xquZV5DAp6qCFe5eJAg7fMj1gNERsp8QMpvsq6XRD1prKzQVubSCbbid23bFJzTG1GVVS6xri",
  "key23": "5WmdEKLth8ZokPaodnEXegHVsH3QJmcHr7DjE1vjKzrdWtzAgcv2si1SAnNTpFvj158eYLAQwADgX4rex2gxRY5U",
  "key24": "33ZgehrFPSBoP4MgcCkFsTq5EfmEL59K8rUfVp8ZE283vPAmUDgWzVeZD6w1Lscxxubb5YLBfgbrEhzv6Mi5wp1r",
  "key25": "4Tr9w7hD8EKN7PhnDuVtLncNWyDTRhUaykMpcm1ALjAFphhQ9HBM8uxxtQb6YCHh8FGz6kLbVN2PxjdaSajZfRnw",
  "key26": "3vvHkPwq73Udm6EnNXArBqbBQT44AWSYx3ErsJHp4hRJWJeekgc24m6nVKxdS47yvXBewsJPR6F8SeiHcy9SbGe3",
  "key27": "2Q22BpJEAGbSkLq5qDHFiTKptWsozTSmAyxWeqq5vA2HmDJY2Hdahsm1NkJfd25tKKWJXpGfae8cqimunWxS7CKU",
  "key28": "2sDHYHJ5FuzHbz3oZHp3yYaJvzMtFes2YMzPhVCVtcezKYa8CHYCx9AcPqQixwoZz6G9QeicZn8textKZMeZAC4z",
  "key29": "4tjoq4RzamBVWdZkDUTetrqrxzTQig9EsvtFgKHsMvMEfNXYQhHH1aVTDKEiZM1N8waKkzEHsJ5gSpS4exixXMgU",
  "key30": "644WC2LkLikH66qjmtDuEwj4taw5HbnRytn5aNVgNJ8ok5V52gL5NLTAAGZUvnJvGCUdFwf5EzYQwd9fpNtehDC3",
  "key31": "QhWYHq14Qep9kjPMFDFZ3PgVJc2Bq97Dez8b6hGk37NYCB6SpfUBKXhHSuivmGDaxrmKP6PQefiakZ8TwngBbFm",
  "key32": "51uxXcN79os16Bea98kgApqqqvk1udqPeyrd3TpiK96qW5wpMD3Pnxg1g3b7uXPaDLAbRmRH6ibWcB8cB57z4qtk",
  "key33": "9Cy3eM4E8jzBuGcf6axbw5MxPrKetPCceX6fWR98kpu5WRzm4LK1GVqk89fdrTqcj7VD5L9a7ktp8fRBRT8akaL",
  "key34": "2Z9Eh1EE5XVcJHqRQ6LKZSEFSNcjwq1Lmxeu7FTSu633BhYggw94c3fRmTotYrnMpykbUTUWz2QfuSAt5gdXq2Em",
  "key35": "4KtgmBCVyjaFvv2KY7fSXfAbz3BJrsbJyRFvX7CR9hEgFA1fZtNwrULuZBR3jxFf1reeFMRapcYYZSRFiCkNWAfm",
  "key36": "5bRVkqkXjmHntSUNaHjaXAmpabqpYef1E3jaPkLTJVdkUgNYToJAQuhHUCwaxdUnXFG3ELBEcUnDsvjdooRR3p79"
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
