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
    "56mMihxzc2fk6qQ1291rV1yPBJ6kDcRjMPnQsYUzK2K1z4u1wSk4AoWC7UPcXA7ytX8zeThpV5tSYkoQN6m6DCMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uz2NL5pN8mABwf7fdoDMJSWm55kcMHRuF5YXa6H87qA7Ne9LMgXfWarNfNEqfGKxd4r1B7mKCtiuQ6QxV1eFRBK",
  "key1": "4AgggpdKrvVp2HJyAwBUDL15ga6zvLzmupPDcL3wjHi5R3GDf2K5JcXVdr2aSi82MVnDVB2UyXRdYoik2GC3ta5S",
  "key2": "EYKjtPUprNwBMySR8jZ949Z53xGUceCUgX2tRxmjEqxwn4BZ2vxiD2p3RiTT5psAkhRnYguCvhWget7onqkrpJP",
  "key3": "3gcNL9a75bJ1jST3iwgDPasWV3hsf21hgNdUesRcDEiLYJndd39uaCs8R4aUskgby2Da6a35Qm1QVyykgmw5aTuq",
  "key4": "2LUCEVVyS9E5W3J3S1xS6gKG17zynmNA8iLG3PApuAX3Ym2xqSAScBTz6ygww8rurKLbq32V4H7o9SzwS228aWJW",
  "key5": "3ueGUYoA25Uf3VtM3fkMJXEnHrQJedjM7wHRem6e92sjNWt7jWqUsEBkb7Y6dXmoNrf1jDDWs7hWxZzzVDNy6FGY",
  "key6": "1et1RSYnrB2EDnHLUFFfbt19pKnLnZqjuqpCgeTFh82V8VFrM7Tg7XS7Y5MXq55HJKr5LVCrm7sUxFG52ttiC19",
  "key7": "GryypcRa8UHikGnE7c7noS5KpZZ5knwPTeUhGu5ji5tM7Jpu39a7hP5C8888ThpHMQ7EbQWGyaJa7GTu5Y6LHYM",
  "key8": "36GUbdZm8LALQfJbmqKMiRExcE3743MRBNM1WoiHVeZEEomWStNVuqSMonzK7g3CaJSEGDYL4XjQKC8EuxuRCSEa",
  "key9": "54WU3NRChYZ8XdkCLwvW836Hiz5nrzcoGmBA7FTACbmMsz1KL8GEziiHxUzKUfb5eDhwBzhs4mcPwBS3mQxob3sH",
  "key10": "3y3Njtu1XGqLkDZr7u5mckJV1dHC9UWAVmPb1xxvpFNoPhSn9fAuBSKWsaeJo6axmijzv9LB2jZBPe93tj8GW3J1",
  "key11": "tZNcLCHzCySjyeDN38afZqczDXnr2ktbk53xKgxLsn45FV3RYNetjxcuWsGzGLjR8JgCrTsRjfi8vUMpBAfvbzg",
  "key12": "4RZ6eyrzgRVTSKNTdLeM3KXQHxsBNC9eJQVZpiTggwMLDYUauiveX3okKqqh5fG5FpL8Pf9Yf5TxVWDhovcWExtu",
  "key13": "e1orBMudfEByAhz6VgA7KFdT8uWr8xfbHiuuZt6N8psh57rC6KHodjBCk5dMSiLsBUBaK8HogFEhDVgarj66ZQq",
  "key14": "5P1dVBjatzdnVQCShf81vbmkLNKeD1rnJSGR5L77WKgWrFj7KLUtxeef41qewo4sRK8nT7TEK8iiLGkvJvaetqEg",
  "key15": "65A5gMh5PdRt92JXHTUHZmWczAabDwoQWma7QdxSqVNmZaS5dhn7qf5o7aFco65U8U5GJ1jwoagskDyKeBhi1ywR",
  "key16": "2AVqY4JMSnKZUhoLtmrLhgQyEgCUiq36nGzfYX9vi8daVogFz1yb5V8DtK3qNFxqf4drRKSpR5EUog8mz6JEWmrV",
  "key17": "4pmZ4MgEioYLc5c2SG9uxNEbSSHWqr7Y4N884qtvo4Q66k1E4VnfeHdK7Dzv1XZoBHGsg47mN59Q85t54fwxwN7W",
  "key18": "jFP4HxzhMLDiA7YtJa1TwDgB5ncdHNsDr6wsF7bZDvzAYEVWrMBgu9MyUNyCyUpn1qsUz8GX8p2hwP4CmSxYuXK",
  "key19": "4yjTLGYJMwstEF6SJwt3vav2a1Mtok4dDNtMTRzNA1ofLBgHYS44v16KSYXtQFJSRrstzYsTt2bf7vkBxTuuxbji",
  "key20": "2BphARZCkdZurxfdRq4YYgdbPpQZbPezCKL4BgaRz99dJFRRQHQzXKF53o9GdhZxQEbtpswyJtYSSmgsJaPaAgvd",
  "key21": "66S16KNxqkAXt4kn5C3y6s6CKgSXiWotRRcqoivkxSYMRs7uzyNis9QfeigYcNLzvphz2cRPnSvi9cmxZSUrNdSJ",
  "key22": "5hyH5wBbDJ4BcwpeTpGyxbk3Y9Q4HcZM77ccfPCvAsLBXJX3VFgT3h5K1vUPHCmaA63xgx9EQMePfe8sMt1rqF1p",
  "key23": "4RuuCtrvWvHQP7oWLghaWHZUwV71t51QqH1b8VeKd7raSMewRZ8XTAPtPTcN3ubFvp9AEXhDB5RtRFNXVNjj5jsq",
  "key24": "sR53nczNPwowGDGpePA9QLnCGYEFtJ3ymYvPxh6gJy83BzTyB3xyu333DuvXw9FcbwMDkX6mc4dXCWS6zdn7DLm",
  "key25": "5FRNvzwZjTg1MDAEZUUBCgPz2iAdVBaBjTox5hF5q1B4aLx4ksYNkp8pCr5359ebfWetU9BwwRobhwY5tq2PmVMN",
  "key26": "4yTXuRg2AMLmzMdfxG4ByAFegXEbMC9Yzw7c2PHGaAHbPZz5GSHyMnaLEhnBS1LCemoPRGKFwEnpAfcQqA4ie6Az",
  "key27": "332gHPJf7o6QktVsPqtnMT5nvARXSGw8w2CG1MaN6jeT6E6wVbeKcng6GZF6Nj17eVqBNew78D2ZCgYdHWreNiw1",
  "key28": "5pgqhYZ3nxbhr6czNq9GFoSKmP47dARQNGutBokCy14hLwc24yvE5pD21bdGHphTmrbFuGxwNYRCE8MpcjefS8Ti",
  "key29": "6kSdGg9mny4s77c8xEN7Fy46mBfFRTmG7JoUNe4YUKc6GHFZ8QJtT9bG3wAwvWQNAGxETj5xAQmwQGz68XVyKwV",
  "key30": "2GTHQVPNjR1jbvR9pacmu6wJgyHJuwS27FFTHkszVkAhpSE7b71EQvfPSGRX2DZueBQFqv3RgsjXLLw2Ce3BWfcZ",
  "key31": "3f1s2S72TwB9WvBRk7sq634uMmsfrChAwsVHqt4w6bcgxau1Rt5TLgcZx51c3smHjHNSQzEYGTStiUhrV9MiPdiY"
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
