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
    "5eVb68ZUzByYadxFkLMGhPkDbogyCvn3n6chgZEcEkUj3ii9UzJr3oNyTgYDd6dwhJ8Suib59229ZExajAJ2VVTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X3zPn9AnFqSiFVaF8jKMPqtfQSBqTqH7cSdq4EUVqDLb3iJQaFoKyixjedPQCWVmH1ehKq19yj4yS42S5PnNxbX",
  "key1": "43p7RqCKEKGAzLrLXYbv1rLatWwSXsRAJEVCp1rH99XUUxAgqWk56MPVZ3idB2F4h1YhrHS12oLegJkt15FgNDoG",
  "key2": "5mRRpVv6zzXDEzvT3dBLHvGkJoNM4LXHcoKAgtP8YXLGnph72TnBuCHxL3VmUqpy4opCMgc2boZL5A3A3Vpi4eoT",
  "key3": "GLy3c25HzfoX93RkgkNi9bKGtjXV3xzNGHuAorS4Lh8mZUsr2UagRBLBZqQMet85pZ9KFamvSE7bqLmCUiyX127",
  "key4": "2B89cqC5Sk9BxZ3CwMTsftGLvBnND29B5SpniVmuu4ATYtGnFZpKWnnJ85wQmcxbctuscUaaz8aMCpJruXRBbBaf",
  "key5": "26Dypm57cMMD5nMyx6vNH1WhTJqYWsqyz3NgNEMYLdAFzWYBYWyvQtGM2DT1gUfprChfbA39mEBWJxHmCd63Ku1P",
  "key6": "5vXUmXdok5Jz4MGVhGyq9825ZUgg4mT9Hs9fRpksZGhRrQxZNunPnCgzvcotsRg9Xh6NLu5SHaAdusy79vEcxK6g",
  "key7": "64uYPMqAY58bmmaKoiNRcnmzhK8CDyKk64MpSUhpFzAjRBE4ekBQyxWJw6BVYaCy7CbibNGfTCStSFuthaJaBE9E",
  "key8": "CJLma2QpmL2KeJ9NMefC1hkbnMn1cciBonpR1UtF9WDHcUb99joWmERSgMCr72StzhWJHCJw81qrohqBfarFXYy",
  "key9": "4jZ36eEDc5Kc25y2EAE4Qw8KwPQ7ooqMJDwiGWYSVCoogGULVxX9C13ytLtdwkDTgW6ZDuuWo634k7bQ414q7BAn",
  "key10": "2eijtNaoFn6s8heYScqz4WH3t7qoUtzQdNjoHRURLZiuTuWrGyFadJC5KfGDN3aNCWmoV2DhEK22TihwwjtAaX7V",
  "key11": "3RXQ6bv2HabCbt13LAHHTDXde9necLVTv2hCYa7zRWMyXzhkY6re4nqwZFdEnkKmDSACuMKvGJQbLLYybrn8uogW",
  "key12": "rzU8fJzkKSzFp8MFm7ejiWbPwA19AazCvh41XK3tiHijxBHPpJw2oXXy1vWk2PkhVH6dJt8Q89Y3J65kjwHDGsA",
  "key13": "2XruLyUii7Joj3gFT93RUzqaSwo7ZPC8CQnfbbi6yWKVkLwYBoN9cP6s6mJTjEXH4WeZgv43wptKUtEoMkjcXhWe",
  "key14": "3FivLVmcDC3zsaWaBLMKam65LMkrYo4KPuoRJEkrV5t56DPehd617XDzz7p6sY6H7JEZjpzMbKoL6JcVTz3ZRxNU",
  "key15": "UH6Zs1kWfxqRUeZFv4yQ6SEY4EfeRtBiDFC1M1vLoxd1fp7A3LMY2XsnyVBFgqPSAgNPU2B2zJ7ft9z3fbREy8B",
  "key16": "3EXnwVFmLhrS5mhKEK1d9hdd5nzBgfod2vM7K67Hz5f13KFJPqMUVUYGezUsBAAYc9BJ8Et587qr9S7XQeTEFCML",
  "key17": "4symAYiFgbKcJmCEUFBis326Vn1mfgbBGUPsgch9CxUYcWcwyXpR37kB2JUidP9BRx38oX3WSZwqZSCM8KVxQSSB",
  "key18": "57FCyoRUP1a4ZQFB9HXGcs59CRhJiZC4qEq5XDv7jdhx7TtkA91bzcfpcgvC2dmMbDHFaiYrHQbYA6u9PgqH4qGD",
  "key19": "3cVejcKV1Qrpi5QNmjPLYm23hVeAnu9fxZ9icAGEr6Vi5128kjP91vnMZEhLV95bwVvzeFdTH1yYDvsdMNsVyuAW",
  "key20": "yeCi66hurS5FQffxgFw3sLS9osWGdpVgdCdoPTNiPquwacEccVNXk2vD4T4MTFgGR5DJhxA6Ycd4ev3q1mVck5B",
  "key21": "2zpuB64Mk5QhWUFPeqY9TZdUZMgqUFYyJTFB3AsTC65dRPTA1L287xTKWA1Yk9g46mYr7dM59P9xcoe6DtPs4fK8",
  "key22": "4PdvjNpiDSp6NNBjrTpKz7rpKbehmspgx6Qtv6HaGnuRe9WY6YDJbEeYXt9J5yp7ejt6hUaawimQdELEECXxZayN",
  "key23": "4PJ3mdqkAcKNkVcbU2EKjAquJue6Vg5GrtNrVdYH2n42Tn6iYH4dcCUgTocFL5v3fatbT9uWTi1yuRpScL4eWQ23",
  "key24": "5eQorDQc17NG3hxS7cX57n9HqADrWV6566LYWHTmjSojbv7hcPmLvyGXY9gmjmo4grALqmRGXzPFizVbdW5kVNi5",
  "key25": "2sf3HjDpfHxnkaVyMYZ1ZvQq5eHMPrt2sq3hz5TYrfAx8LyWitqpfkUVYsNDUsT634ceufrf4362U7XwhcMFqxCU",
  "key26": "5RMwScdftMudkxZS4MLzKKGnEtpKbkDJwPDPhA5XVWzzuKPoH6B2TwqAupoh2zo3Z8uancR953DmBBZRPSB1t8HC",
  "key27": "3gefKHi8PK93oKrtENkJ1uBE6j5zZqyXGEJZ7ANXAPcGNnXaywjvH1NvU7ZTQcYLH4vWADic5z5fo5i35RbhuGcr",
  "key28": "v2ciiJNH6ABjBUN2xTqyi9YQfLRA8TVmjAuZBQ2rxikgBtVpHb3h5cjUyHoMdAUeGkxxa3woCFLQzdv1JrhJwJd",
  "key29": "5ZfdWc2yHU7EnU9ZrrNsfT22P1mmusVBRSpVheAd1L3SeR11zpF4u2h94HUsQ4R7GXdYtaE7A6A6wwYBE38g3bbr",
  "key30": "5dtfCJZLD3or5iX2izvW88FDRuFz67Z55VEz7BmYbj4Vgf2ftBnAbSkTD1c4dzDu9BEvB6GhghNno5qQhzs9TVey",
  "key31": "2BmwWXuias8R8BxQL96KA6UTg3QNSKKDuGrLGsAM62LDeFvJS9SQQoSJo3r8Xazw1AfLtkDmDHYumjYmPGcurs4u",
  "key32": "2jQUnXz5f2JufCGj5E1ZzzhokvkGEmVavZz1eVgybJ2ndYUhZqsy6F4atXuxq2VXXBchX3AdWqJpt8GT4W67atDJ",
  "key33": "5WaKFMgpuWc6e9d8nWYqDzy72cs7ckoT6HcUFwREhLDdsNg1tAgMPYGXEsfkHT6Hq3hzx9P8nkjjiMnxVUtLknjY",
  "key34": "4pW4NAcFMiH8i8ZvTDPQNcG8ESoX5UERqnZuxA27EDnhrgoMg7RBBEHcBEu1stE5XobKex7k3BgirReXMhS4v9yJ",
  "key35": "5mT4zuiU7NeYyf9B3Apyfp9q6aiJKocc2UTiL6pnb5VdWJeBRPErzQSUtxbv1gPpmeMiV7RwojefL7jCHEWddzaP",
  "key36": "2YijWmxbDd77JnHGfbSKyXGxafb3NwdrmKx8o6U35X1Mz5ypbShrrsfcWdun9UaLrEGTWkqBjxYZHF5BkPoh8rkU",
  "key37": "4xqLqKQ2GbZm2zwU4CzzWSxXJagE82VvwUpPCYk6FsKqaezAcWXh1PvvNeiHMFdQq2zkncL4HuJoUjMMywypoiYW",
  "key38": "tNn6JHFn1XQvphzC8t4fj7qtcHaZYJ2T5H2ejAAFLcdogYKfFqKRSoDe5rCsyLjDCFChUaFqPXVK3x3WSmbCD3X",
  "key39": "26wRHgxsTeibuq4G2faiXQ72G9h8GyA3LThysSK2r6L2HW8dqCLtysZ517YtsTisabws7zLBJsNxfXqvyiStnWhu",
  "key40": "3ZEDh21xBn3aHRKdGcHyhRfP7Vy6tkud3MuULnv7hBkoioUoJhTrxPy1QbsJmCvCGoffL4LD6R2nCPAcyfXgLp4e",
  "key41": "3MMNTvstZoh6LESmLNxxqbMjkxNVRQ6i2EJiXdHEP69trS2pWqJVaNEgaTp2PeBoHAXRig1vJtYA9abRQZwvtM3"
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
