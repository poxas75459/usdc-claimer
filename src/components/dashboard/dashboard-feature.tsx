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
    "3kiXD68RLjUNpmyoGC17DrojwcStECCzCv494WzHRh1ko8hDEXf4ynZ4BGXzGhiGqdq38ze2sCbbgV9MnAELgYVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UheUtPgAit8XJRYmivAynFqAabPSmrKFMY3LVhZjE8hTULX3ddQtY6KgdrkbM19sz8YeAEaLeZiRuC1wABp3LDf",
  "key1": "3cFK52ktyfDgXCENDu8TPJuLuU8cLUpuAYDQe35MQddFd7sZuBdx13D1BjHY6beFJyrsRFrHcCPiTGfKRF6HuxHu",
  "key2": "dmjWXNgSUSwhWeu2WPewLwncMEsZWQgrFyWWN9nbrPKPZ6LQhcRWwwGm7dLPstKH3ruzK2HTEnyJBuULyiqHs8x",
  "key3": "23Kvzf5c8XZzaZqHV8k4KUShmeaxWA1WR73R6sFrr9AJVjnzs5Qj5b3fec31TKAkkVPuhFzrNvQZXQepiAALhQks",
  "key4": "3xStDu5TFoCQQXbJL5PC5TyHoLeK26XGv2ayyGm5MKg3eyH468j8xr9qGtmWNigiq5gTgfNdq4FKqinj86Kp5Lze",
  "key5": "WawcWFYbfi1hJRzC7rnc6YeSBp42E9q6qBwz8iEpSvXw9yD6Jha21VEjqUYJBioZw6CXb2HfXTB8XKNc2vULgdn",
  "key6": "2wJC64zcqAfV6ti97z6C4eceikrJdQjuv5H7bcaPenCv25abmJmGmj2YyNuspsK9xVqpwsxsD6sx4TeSJXtMxF9z",
  "key7": "5eZXoxMaAuJCjThMf7NtZ3t2ArRYpYgmBdo7DuGq1zobkheP8eJnRRxddxhYyoeiqHX6Au2nV1CsiUug5qnNnzDy",
  "key8": "4UKcd7tkt1V32ZYKLYC4sEYKiF3gcgCCTZLwU2ZNFG3JBFntjnuKmuAmvkDjHNTQZzERA27BdNCTU8SAg2x2Hn5T",
  "key9": "gh1X7MQiYy2mhJf7qoaP5ckKFTaTbCh9JeW8cUGksWBQj5KT2cjUGaDN1uoncYBrgiQMqXnTwj89DZzFufd7Ub5",
  "key10": "3cefc3FqT69sjaKhjRkcNDzpxW1T9xxxL529o9yLN9MwGQRHrurd5AHNFPcHD7p5DbqGpaMC2BRRKEQSiiUiivCd",
  "key11": "2bPGgp4tRTMCnnzjBnn4b9B65Fja4ZDy9SdSxrnMEmuBixNZtYmurA3GrFPBr2DqzSLLD9p63icKBKGcNk1c3z8Q",
  "key12": "33AosYWW6inTTZCwEQnLh3VRxQby8YZdom9kLGwKZEU83kPfqyVDr217SsQwCQAYzFQpyq5KaGzSAoPtXqbNhfc3",
  "key13": "R2navcT2JLxWwjy8HQpHAfDvv89FEnSz387S7cHzYHZDC7y5HUDixt3xwyyCeMdfvJ23r4kNRhTNPcZ28YfL8uB",
  "key14": "48eYfcvvRSCuXzMHZRqk4kuo3pq53ChvCd2dqfNUDwekVEeFCz9sWzMN7wNo76HUvQ6Vn6ZbJrsS4L5trnSpkEeg",
  "key15": "45LCY3AW5t6c71reKYHD3uiSbXF4jamxvSCzmppZi2kn5nvhBQEXJ99fAM2uBi4vrktRrCebyrj2qqQ4mJa4Qc6y",
  "key16": "2hn4rrwJ6aPK4DHctLnCQVqobo5JNDB3ExCE2FwaqWo5PFFp4v2RuTP5PunCTA7f6wRVM79Q6rXd7Xwm2bAQhhNb",
  "key17": "3tayKwrcgCGvpGRbyMStLkURhYiECMohEXcvhQzcDqq8SJUpuFDXvGRNUWNCSm6HdyHjEC4kHeFoSumr391mZEUt",
  "key18": "5Lo27zSxTeYHfuKNVW9Unb6GNCy8pU7fNW4AFDqieF7RxPmaQcPMwFmZKng2W5s5mp2nYebcSfDYKtYXCyD2sBDB",
  "key19": "127MPSCyvFqcM1Q36sL7E76agdZmwtoMEDS1o7Tb6RZnDfsTj4qeweq7Usb3DRXZSc9qZtcMeRL92YYVB7UdfAVp",
  "key20": "5hSBis5JNq3T7XVxcQAwfqwnZPdmGLMss1gNiFC3mLBrmnP24nV887ARfNiDXp395J3ekE88wEGA7jE2AUfhVTGc",
  "key21": "55AgAqpFiozcMRZowX41TGd2c4p4gDmzkw54obw4t2bkdyJJyZPuLKWRMEF2hAmj7E1bsTsxUVzTrdW9rV4yVdUh",
  "key22": "45cF8gnBs7NVSDrzRGCLVJ8Wvu2gUcg4f8fQvTNGzZaNiy47m5YDQ3rjTjFjp9GUhaAhWrGFsnrZfQKjY5Tpnfet",
  "key23": "3MJAAc4XYHz91poBL942narpU7CLGMyCpniXVsqEg7ETtsm5r71aSbBvQRTDk2HLrqY6GWDry3Uswh4QbNdWAvnV",
  "key24": "2rwHokDEwZf9mT48jx6BM8Ybcmczna3D2dNGyqcXWF4Sr1ccLDwND2dkwtsrEBK8xDyRUbBKozVEX4PcntWnR2PV",
  "key25": "4UpMEKXXzJsumB21hTxH5QE28JvHH1KZ3RUZh7CH8vHV3kDnFgWZwaqVy84Vne8ctDwrFAzhR6Xh9rbrZwAN5xme",
  "key26": "uJPbdWS9gKrVazVbTmhEmyWncdVFiGnhG5aPz3otfrkjGis6aC3sZEdwufmHarravmnKsVmFxEMxtVvcP4KNw4b",
  "key27": "41oVXK1BvJSJ7e9rLt4d8C9xSyuN7pBPNnH9byzqDv7VMMnFn9uuV2LHMNfsaXveTzXaSGVV1TPiYmaq48LbFkQq",
  "key28": "3Dv5h7dkBJaypByeSVyn453Age2exZnFcwVArEbGtTKpCQUEmebUr8ANzvHSbuJueB4vrT66H1LR1akstHLsPTzk",
  "key29": "ebxa5sssU4sf1Va8tKSmoVKRTP3GtCgMWuqpvEZH52yknP1MvjfcrGTvZGWxGdwDDBSy6unE1CjkLPN57FhdbFj",
  "key30": "LmZdUWZ7R56W3gMLMaUXRSYZSH9kqxiDtW1GruSxCn1EYvQzdudAQZuEbByA7wiBP9AfhLa5fmeHyQGwe5CiDDr",
  "key31": "3LFyWZYM4YQ1cwZhS99tNgEvnnMQQAqFguYhzzg3V6SnUjA73hiULm23AvNit7PXUUUcgqfMdUPg6WKJMmQdXr5J",
  "key32": "3bdBdvhmzqV3sB66Qc4uEgzkmqyH34jegJjAMSAEvX5Q6XeGEDtVBWQeVUki2FQFHv3HwEVq8vEuXr1BjTUemJHg",
  "key33": "3p4rg5jtH8tRfLwg4xbX26LUoCRqYYfo3Md5nGG8pB3FMcYVegdYr7WCB2QCk5uJRgszB6WQ2MyaQrNNZS4gZU19",
  "key34": "4QLvGKwEbNTcHJwPVZ4vLFqCKnW9hC1NGmQxR5PHYHuXwbvue55FXCJtzHEtpWsd7iFcWfVMeLofJBo6CfnmX21L",
  "key35": "42o782gno8Fo2kapDQ2apVDYkbK3uYmDzB7CgyNmtzmyf7iE2YgvzvaDdwJCjbbZi7RVCcZnkthPhFLVt74qV2XD",
  "key36": "2q9jSwY9ryY1bMxhZzkyPvcQzfnXBD5NsnE3kVZKFkEsjUCz2sTfSijfJNxhCunDpRptpLUEW3wseVq5gaUTRGFy",
  "key37": "3qUaf8mYjq1HFm8hBedbXpoUxku5SpxFuhEsYuMivGEN22qr9Du1APt9ahAy5cjRtUDD4Fw9Ana4LYeXinCqPKEN",
  "key38": "2XdFgGXFpbBxoTuujELw97kkkjR5GpZtMuoyHByfMJsZ3LiAsHbHMJWj7g1iQT9KBsWtM1e6fygDfcpTWkc7fCuE",
  "key39": "sfZSECHSfSS9a2pRS7WRioVg5pUXLLsFkBZXHmxPgo8mxAcVNdHGtfcpt5mEEZkjB4ExLYC4jeSvCYNa9dDoGuL",
  "key40": "3PUcCQFiHBPs3mZ928foF5d2PnzSHJ2ouCjRLY8NfUWASJruNG9KF2CYXTVF3SwK96tjxki5NftNHcfWtGiK4V58",
  "key41": "53zTiUQhx3HN2rEh5uwoymk9rGo2NJVtNnRqQSeZPfU2sWHTzd4Rm17HHew36Kvphu5wwg7nDBms3sjeibYmAQgD",
  "key42": "2NGjAcsouCk9ixt9zNAaDUPGaj6CaAd9utzHjCfLjoGz31msyDsFHVKLukoJb6TwuJXHg5KYvXzhN4mWBG5yYEQv",
  "key43": "5mNrAs7YHQNgDmKYguAHsQJiwvGSRYaedwfYSexhd1LZQmb1vx26krwYeKqHdwD3V7cmheZYcALWh9VjgccMCn5E",
  "key44": "2JJQFVrMofMy3E9F7GpH8SXvkf5fUYszGFvzCEaLRGUbJQv1gW2RC8gAtwdsrs5yNz8KLiHimU8ASSsPRh9Gd7wn",
  "key45": "24hcNuu71pkn5rexgcCnkpB4eHY49qzL7jmzpDKfAPFE8BAFykn87D73GoAT5rS3KA4aVajsXgJqixwKadhnTvxE",
  "key46": "5dDGpSN5RDsXHghPBvQKYS9N6xexDkRukEh2gfWFPxP9LGngeJ32nhUhbJVYNe2yYuTQpyrpXamrFW16DjKdGmUZ"
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
