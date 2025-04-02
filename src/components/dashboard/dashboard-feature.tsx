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
    "4Up85891C6XLzzA2WAXX15gFRUWY17G7JAuTj8ruuYHMeBAMihesP4xuw9GTkyafUF6VyQ27pMtZXbbxqg42RBKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39oLaKS9oEbdcm2QmHBjE2niBahfDZZgTDkerXUKWerwXk6f2HYEpsUiZZfkw4uvEEFSBoXHCpXEj9gL5MqgnBk",
  "key1": "27wmzJ523LMsVFQuv9ntR3BFi8ZEdhyQkGfNKiPswfqXCvgaxH7ovKBGfz8p3GJ471VRzRivsGvs3SgqPXbB5h7E",
  "key2": "41WybWaN9kzwJT2BJ4gWFYRKm2ruw98nE729uAKczeukHjSxj5cRrih7GNH6cgnsbgrM8uS9FZkCpTmdSjUaNdSP",
  "key3": "PqpTFHhjQPxBJXFiQa18c539cxB874DpBsaBTfEenNuF5reDzYqiF8fcWVRuqr2mkw7U4CQD1YZD65U7iaZWJKG",
  "key4": "3rHQzbA7G6xtS6SiHnRrQrBJmDgWYGzaBRy5R8ussrWHkSZ9WRZfMjNr1PgYumAeUfQXV8rCXhZbwKbV8ZVpCycJ",
  "key5": "5ZRNAnkygGwN13Xk96CvXPYkDSC2Hg4zEig38zdaj1B3QEevRiw5oiHWxMBiUkq8EwAE3BWEgZ53UpjK8ZYK4pXb",
  "key6": "4P3m27WnjiWJEhicDMDox8f6AMfhc7ZWoKJn1KX3yhusRomqTGaViWTeoyhpZPDiA9nkxXNMGmKcv2MwjBrWS8Ca",
  "key7": "62bWnphyjWkmkKqn9hqygzCdMSqnicVbjL9Rg5PJJ2ERtc38PJZowohQCAVx9oHEZFbXxxu9sraBSrzmqx2dpPGC",
  "key8": "3TGNQfpBopEDKbv6GMJNHTncgAZcLn6xgBg6BTEUfwzeJPvStjgxrrqYW9XPBhHFzfJY91NpHz1Yt4dhFENLegnZ",
  "key9": "3sySypPph5LpC8kECpPJiUSbw12mqVCf2acHkxqvy86u3evwa3VzxgccLpAqfidRMTkgVYG1oM8jHuh1YL1oWyzM",
  "key10": "5q2CbwRkynxH2QhMiKJo5Q7sXuiS3SfS3HTgMASXpMJmrVZ2NMrxoQwPsm4cGX41h13EUGv3s4F5n6j4SjfJ2ZKf",
  "key11": "BrCC9NpP5qf8gepWHW5ci1urnLJkkZpNtXG7kFrRHYQ2pzUEXy6cu2vfBEHcSLccrr1aqBsAnKdGGJeHHG2Ze5n",
  "key12": "2nshGR6EVDkuz4g8MMMRLfjwW72EXhuAGTtuBm9QhjDzrCj2KC2diMW8hnJwrM6V2ZutvjjBNnTxYjzyMa8z87yQ",
  "key13": "5oT6uypgf2FPzQ1PSikawB65z8UTq9jjY9MhkmNVX5DGi67j2pqqFgfkbH6PditDMswVEtQDbKfFeWcqWxG7NDTE",
  "key14": "CowUKZoub7KPeKt96xCgqwiLkoyg9HWQiaDsA9f9E2Ls3pR7m2FNd2s2jfXvJRSLwWzUSRpvghVVQiXhUU8bY3e",
  "key15": "5z7NeYyeNkg4E8BBoTo3KbU7kzjcstWAx9goRqw6uRBZoHhQHzUwoB87oaFCHHieT8xnvRQbQb4nHwR2WVWND6nw",
  "key16": "keseq8GGN1JzXToHzR8edoAuF8Djtdi1p27AtJZxXaz6hCpVSowYJJdfN1s8x2xkZLLNknGedx2KNrkDqpGWPXe",
  "key17": "367rVHe9WDzuVKGxeR5xWBUxDM8dqvBbcZBP3vgbrDr5U9qQcFpsvcdgRKh5xyktt4K25h8yjERX1ypQdZ7VdBWe",
  "key18": "4A6Cq1fz1CZbe2ueovRsgNuxQAavuMJBC48ppWAFkgycKGGHWhtAY1LGMCx4ajNdKRfHob9LrSZJRLvsxct9DjB9",
  "key19": "5cebhT1N6YJnUMv7dNRWBPLCaEWoUfLYmEqNmifogYpFhN1XFJJM6HCX2ehJeWEGh32sWART57wJA5teFzEcU4Ut",
  "key20": "5nyQSDHonkuWeosEEuvn3Pyw8tM8Qsk1KwddGrrvxBksY5hYXGNpXRErmQYHXuVr8yQcsehsJwLNQ4zWrquK37NB",
  "key21": "2uN2BDA7rnfLSDpKoq47ijoM3pfvbh2n1cdXdQWzRrAPPjUshqPJTmCXM5WRL8SfkuTCyAwuQkXXnZwKUdUDoqnk",
  "key22": "LmdxQ474J9RN4QSeJgMUQfJ3i57TajQpo1Bq6zP8y14Gasx6ctWg145N9PfbLvzN7bmbgcMyQ6h2CmiYfj7XPB2",
  "key23": "5ys9ue2cQ41PWbGveeAgZmPmHRaPPuwmZA8JG5vR1WZFf9bhMR5FBXAoaeZr2V6saR5zJ1E1TSGT4mTBeCYznToC",
  "key24": "5NuoCPdhSQR4exYSddJX8HoFrFVkME359SwJvMuuAzk5ieWecLzGWmXaaELZZ9po3YLcEtgpDAHXWuREfoGP2jpq",
  "key25": "55PzxSBAw8PDviwndsGpvsTfVRuH5LeEVWYj9Vwsav58y8hBC7wqWmtGHPjm3VSmvgiVxdPweF9fadDSzRnb2ruH",
  "key26": "5hiqYdwz7PqMD4S8xo5yq9uHShUsDNDZn2hTeiUTB1DgBNceQcYs181sA2kfHaWg3mGjW28nEE7Z6QFdZee7stG9",
  "key27": "2r71VnwtALj2VzatoTzETK3r6Ui6MibT1Ahm8sWpeTN3skxE3Eqt4MJdh5E711B3qZ95wC8BXt2JovvjryfXPrmN",
  "key28": "2ay7jRXYYgJXVARDEj4BBuQjYjqg7XzwxzDsTnEs2sebhzMnxJKrUZ984b9qQXM2tDXhL8c6A2GLSfNWb3kKUQPw",
  "key29": "4U7zhLtG75Ch3VFGA3Kpa7Sr6r9YTyV8hedWpovmYe2n4TLadAjBJVc6ajmnrfvyaYJeAv7Pdnp8gRR9uVmMuySq",
  "key30": "4zpcLpyBqGt5Z6CG1FJn6M7TAor8sYGakRNaXEYKbWwZtMY2oBrCbpNiUDt3KUjmycjsB9L2z7t94JF3RYBDHx2B",
  "key31": "317c9cHcHbsR8kmyUSck1bBrMB33Yk9oY9RqizPU6UeGMxSLzZ8m8fKHJANNnTEKN6rq6yMnjaLs5eYU3EyDTtxa",
  "key32": "5wA2x2RdWXKSQNM7VAj1yvtVP6T7j8CGrZXq4gyhSt3s9b9jtfatAZr5UcUBewiyWTpRD6Qb29dAoRG2jGpFgta8",
  "key33": "3QoLc2PZDcmkkjNSDaiNj6LjHKtEjQ6TtxJFiUhdgVa7LgQPvKyBDSpiBXnEvdHrrDvhp2jFWzNZd93cYk2fFiRB",
  "key34": "2P5dqiAA8Ewc5n7CFgmE7sC4Vwr8EgBFTxfmNLxTZD1rdx2Nar6hXDpENCBMgH1edh9MkHDSMkZBvmkkLmyPKDBQ",
  "key35": "4opckqJPPkYNMPQXCiHkQGCkaD5nFfcchW4YwnJ7d4foyL9BxCkmRtMeLCSGckLHK2eSwqrBtNnJSEkSjhyGwwB8",
  "key36": "3vPkbqRwe4o56GChFQP3uTWkm89yC9U3pFCaHgnbL7qYVSbgwL2VGWRzLPGkGX8c8NAm2DUtehMDZi2654DQNVS5",
  "key37": "43RjF8SGDZu2AXX8FqhzzL8DvYpAEdeczYc8c4Ap5NjapYXL6JvUNsfXeQyES8FquEfbpiF64V5ZtWXoYaRXmaXV",
  "key38": "25gMYy8A5xXSULG9TrcUdAQf6UCmA14N576UhnVfw4u9Tz2BcLTn94p1r2P6UgsgF4Df8LwMa3cdHPXVhpbvJWqY",
  "key39": "uggBoirau9HJ4uA2Trkm7y7ifcvz1y4qZwfstj4xXZUSar5pKJf8qCPZJp58TdeNYgBCEWDTB8VEt89ger5UTRu",
  "key40": "RxDU2jQ1eCxJes3SuX1GynGoBv4qydwC3CxhnCxeUKfgTYB75JtnwQJne41xX1ftyC8vPYu624KxZUQd567Cro9",
  "key41": "4M7zYKXvS8p9gfQqdHQi7mEou8jjaoQTKKPdX5DCP2rMyCxjDw7i2YkWXkrhWSE68pAhReW22RC8EiTJtfaQj4Fv",
  "key42": "4JhKRTHYFFQcYkf9CzKG34ar7xv6xtZRKUWkPMVkvu8hvXx6cyS1uEGkL2CDufX2HUZFGkMb7uSPFkFCzcbaR5Qg"
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
