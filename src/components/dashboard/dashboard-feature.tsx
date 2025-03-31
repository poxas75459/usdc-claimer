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
    "5ksjaPDunN3V2zo3qhZsY36yRkUUHToAtjkq5PZJmcXpCGMok9eSWx9KrMNsxbdCVqyfQXre4R6Scor1WDGc7uJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "opCKceYruDX6nSPZStCwwY3EWitAr4DJiYB26VLBKBfiNG4Fm7hzEe57f2AMnuJqkoRfj8BEQGRUZTGXfe9RHGc",
  "key1": "4TARSLtmn8mygF87w6mouyFCMsipBqjCB8mCSgBB1ABF8LFbGok8NjcPgGyP5DLgQX7QSEuKQq4VtH1hnUPhy5uY",
  "key2": "2HmyvjxH3t5tNFFkFni1ALeMhgLgDXTpuauYMXxLPBKUQhGpA93knhDnxD7b6regPdQgJnfjvDp4BurAZWRYSZxb",
  "key3": "PkqtYKyR6FVetQkeYCTZdgCHBwg9vkaqPV9tJswHMcUReME55DW9hQESbbjfEeT1qVipKtQ15u5ncVmL1A1i3KM",
  "key4": "4WDiSvxgEJ5mKGSDN9zXMZRdh7Z2VsgZ9LAHeVeekXJmoJ3trq5qdp3RTgxxP9tZaG4DFq8omDZKXc8ZFxWaiKZa",
  "key5": "HzmGdwuaM3gKp1Ge7HDisYaZ6HxYk7oQv3gkvR259iACaqYLZE5bJscL3GkN8gJjHZ3kuyzrsdL55irf8kAV8YG",
  "key6": "3T39VaDjHjJMY7rNVcu7vZXKDk1KSJXjuxt8dq3uhqrYR7jW3T4jwo9EgdsnyrV6QyqRsiwHKoJFAPxoV9CmYogx",
  "key7": "29E9aLSWAj2jWkumvZaw3ES54evpPMfwBqTKT3MjBZ2BgFzeqLh6xaWRXQCLoM8JsJwvKTwtxWZN82oECPtdDtTD",
  "key8": "39BsDMWRPATYMETGwck8kEfcEeyGNP5gQBXt2tfpo5pwBXfqbBjWMgFn1Av79gzeP6VLaXk596Gdq2RrgBks515D",
  "key9": "4bX1pRF1d9eAx8iE5KJWXeokiH4yb2QghLQcR2VRWjvy33qPYE3U7hb5H1RMkkHndhFzw2ErXg67KxbNPk4q5rx8",
  "key10": "4serMj7jggBAb6dXRoFhzFWsJggVtVxCyR7npeoaY14DAu2Y7kQfPkTL87MvoHqhV14QTPK3Ze53kDXem4JBcjDs",
  "key11": "4yD8qxkn7PEvAWNVcta2L2G4pYYs8tAxbYvMgT88VCJUXk59qF8CZWiiTpd116AFTm4Z63PdSLpDaeZdALUEQQ25",
  "key12": "3N3rNmrAyenqTp3Ri6KJH6tGG57ida9qCJ7SecMJqr2Cxig3Wfwm2cTQAeJTXjAApngbEG4huL6Hb3DvAXEd57g5",
  "key13": "2fGkiahoXwkNJScLrJMY366MVfHk7ysntwH1uEhbhHpg9CrMAXZSbrzwkp2WHpak6xVU2wggRvm7YTtuxYmDsGVd",
  "key14": "rxpDWtEZf6QnCD5A9JCQ7qFJeNQDe4ciCTt1qGX5HC3wi9WhfpDh6o3GN9bezp2JGbSXFaayzkxGaJZ5VBbZq2J",
  "key15": "4KbQQTjUyE6wu2zVp191feRCiV1H6Ynk8qjVkc2gVC7FfG3RzkFdGcQpz4bhLo4roKDiWYnEw9DfmhL8u8s7Q3qh",
  "key16": "2n9BcnawtrNqTP3qs7y3Qd3hpdVefHK2uwwUzc4WqswrMFHyFBWgSAse8YZW4tNEjxNiC2jxSYTWRVUE6FX44umc",
  "key17": "5eCuDDMqQ9UdP2d3Ro6UFDc5AQM4hamjNAbWdoPwUQu5rHCBR4s7BF9hMLmBbwP5MjftWvgEuU19yaZ7M6fDggSf",
  "key18": "2ogcBDQ3BJPd3W7qATDkHT2FopTC43MBFGzxYue2NF4w5u9RGnpDdr6XPScLbsD6YbZTe1cvFPwa56G9otf3x4yF",
  "key19": "4dVuLymNRPiV5EkHd7BTLtumCH9Cf7ErWnJhjM4eAPdp9nhrPutPaKYGMP6rWLt6957zy3yfTZSZdMmDXpmhLR6H",
  "key20": "67j1ZKH7BXioQ8mRZCFZteYE6cZ3R3HEt14TRUUnr5LeYYEJaJPVRETP2eSnb4Jjf99E8kHpYtp43nbxY38Q5Q2W",
  "key21": "4SLqQirRmEKWZQfCuZ4BfohgJgRFNiojmHFg99EqcpKqendqWNn4eGePkPvX5x82WSat9ezzdhLgzexTWqBimiGa",
  "key22": "3M1uc2e3LsKDJi7L8y4Mmd6sVqgt52AQ8D9oCQEHvoiXueVgLgUs6La74YNx6nbHzLBssqzNqPDSpL16oT9Ck9rG",
  "key23": "65MWSKhi85wLvpjxvvNRLQv79uBPbxoiPFnCQYmYAxNLexVXqEXzc3Uq9H8Bymm7tAyzJe1MRyyBCpVptV2T6taT",
  "key24": "4pES8A1yhAgsnrSkWZqTxF5khoTV3nX6wP1A4BZEBXPVAxMbMrZXuoLTk9PrRnFaaz8NLa5VVEEVqiJqhTXGNCz3",
  "key25": "2STCDXJE5pqBfa6zgJc39TCzyE6EUaUVkoTapEoHqUYTxJexpJ3r56ic27pXDwbMuNFydraRUKUBJpzsRQSb3ag1",
  "key26": "3cFZbZYZGyjeY3gCh68UoUckweXouCa25hooXircJewqr1o6jmQBfzjbe39c6nFxEWjaThSfaonLhuRthXYRmvDG",
  "key27": "48oXW49ZvxMYFYVjgrAnVTfLJHcuBzqQpgWADabDA5vk99L45bHwoSaYAfCoFD4ERSCiwu1Up2ioK2TRGsVkzDc2",
  "key28": "27JQYUocKkRdK7WkBcHiYr8KnDrcEv5j5UNEjuEgSDFMrLjyn8RCRKapvE76R88sYtU4oQunTWWY2vTVDVgdnf6t",
  "key29": "2GoM7hqPZFh8xKEzKnZa1bvN9714G6Ww5unc9bscsA8RvyG5E9KWtFGK9qSsYK4DsciwYCafKgp7TQNiudCe6ccQ",
  "key30": "2txzRyL9oMUgsMoDQ1je4URgK9QBy82bYRKfHKVTYtP8DA2oWzYARqNK5iNdiL2n2mP3E4WZSsjqEBCEEGbgectv",
  "key31": "4jew5qcJ1m97KbAZXCKAPuvz5fL1GRG9SejmMq29hZMzo4TuwBuicriQLxmqgwjLtzJLBAz6nzsbaAbxo7gT86Qm",
  "key32": "eAN6f1D9ERpXo3888x6umfjcXN3SQP6mCxWdc2zcjnnrPMaX5xiLyNKTJsWNV1PSxKXDpvywqWAq77b7kSBAfVN",
  "key33": "4wNR1w244HaqZ2iAYt43mgqvsz4qFJdWNyB9CnLVEXEgGrDinNRTWWcGs5SPPkLJvjvW3HhdKcEpfApoqC9Uc1yv",
  "key34": "cRELPTqdXCHKs2fiAo17ddZFRV6jph4AHcp8aZRwPMLjJbEib81XA2VCUQFG7YVDMC2zHySk99LWEpqkQAXo9ts",
  "key35": "t6FQL4qLsfZQkZooJECN446mN8mdgj2UVq4LrDyrDzDBf7z32NDFEnJ2UEtTYFUUuZRoW3MWix4TgwsYNWDUuwQ",
  "key36": "5rPJjkpbaJ9WgLQC9a2GwsBu22VWay6Nj6K8rXrR4MBharBAA42Pof3e9d5dyS2fsegomLdh5f4QsV8bt96t3M7o",
  "key37": "4dfRS4WENErqJJYXPQuRPzy4M47RRwPhvPZFWUdEsPBhVTRWsgruJTK4FrYR1rRGENUczztc3mEA228WbA7n941c",
  "key38": "5YoJvjuGYTFaHppnXYsMHzcmu7i2m5izbMLN62aaimYeVaRBimVdy8c1dH83STSRmVUrYHYdNezdAXP5CZ8TqU5C",
  "key39": "3f5MgXgwu9awPywdi2hcFKkHiKNV29KLgM33Sf6XqgLrQErqP7AHLo1Qa5JyoiktNVPmbDt2UbGFzY3M58RbuMAT",
  "key40": "4GP8mgtyApGKoj5dh6jUXA247EXdBsP1DrgvBobPDipDuUTvMjequ4N8zkyZr1CuSKLjpDeBjpQfyct5Fs2ubN7B",
  "key41": "2pQzAjdePTwcY72Q13bymF4eTRqX27XV6896kMfHQdaFxFZe5bfdbhUnWNmruVAzj32mh7rfVGHBCUrS5CzFr3DR",
  "key42": "4NjB5y1pnjnXsbj6crBW4nuvvW9hxRdvgvC7WuEpj6k9vToTmroEhF6SJaanqkK5KUB1qbx8fQ6ftjZue5ypn99N",
  "key43": "2wVScGjhVqsaa6FvquDXifMZWGKBYfhdmENJFWH877LpEAJuLjVGwHfykEwsVsMMa51iEwKyUeKAfkWs9H7iJnM9"
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
