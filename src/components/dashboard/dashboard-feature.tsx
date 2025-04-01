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
    "byCKinLoPJYKWo7jquytEB3kW69A3C3wiUqgLbs37WBtPbmyZ8nMYCzAJA4tsVPD9iZCGLdKECe48CvjtdEtJeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66WDaqbAT2SPKf6eLubWALpbyiL33MH8CrcvarHqQm1eSecFkX8f2CwuSWhtvZm44jDavdCpb21GwGbVqpjCC5EH",
  "key1": "3U9KWUx7VAnTMscMV22HA98rCZuddXsFnLgci1PmVG1hqNLx5QkXpuWo8Wc8WiNnqSGLn64JXMJPaQD937A5VKxJ",
  "key2": "5B6aSjjo3RLNb8wzMkHkCzwdWunKLu47xyZAadftKNiwGA7CtvYzrRt55vuECC9CSvmJiQSngFyFrgE6H6qrVBok",
  "key3": "iYv3facWAn9TV5TsCJByW6ZcxipWynsmvGGNjD1FwqcYQWP91EE5FT9cJFK7oXuWpnoiFJ6NpbrbqqvURtungsF",
  "key4": "3er4uqg8Pv8jr8TtR9GYHRVFER3DPaRwBWf74o3AnQVbi5hwCrih31w68CFZn5XNUwateooAMiYpDZ38FyccM8h2",
  "key5": "3vk5JpDQY6NJkjTiD9kcG366CX1AHwMrHT3xQFDn8CUbfvCpyWN25qGkrpUCdshFR5NVcJRAWzfxkXxdGyL7irvV",
  "key6": "42pzkbPQLCEYYGdK41UMWnsChPqoW618D2N32Rimwk4Tn3cqwGAp9izCe1ikmgGCgLmChDfdmu5415812ishHh6N",
  "key7": "4RgJWRKj1veaJJVjRnjg3tu7AHKr7c6p3c8CJh5cqciqTdr44ZJETrXxaJEXd4gYwczGY53oP18shmekWzzoA9x8",
  "key8": "SAMuQXxn9xxDxi29H9yfgGwQv4TtE4EzD8HiyrtftmEGqw3nNa5VCiUnfyH9Vx5XJ5yPRBTrQQ1mjAxXkUsGwKJ",
  "key9": "3wnGeMVWXXiYZsD2TgxhsZjRMCpBYQ8oG91FF7prL6o6LnYJPyva7VcvNoUMzuNim7Zusk6en9V9vUaHwjziQkzo",
  "key10": "5rkQ5ngXyRZQ2WYWkW9rBbNYd67qAjvTdmsVQaKn1W89deT5NfmjJ63Y344JX9eRZEd84FXmTuwbdGF6CrpjDPPg",
  "key11": "3mW9BpVPYYYMw1BzLKcV62fAch19USZ1B2bNSrLFKkbU4doCYs9NX9Pa6TKGX8p9L1iXC9dLAWNd9NVzDvfgzAW7",
  "key12": "3bYgnYDRE5wJbTZEDc641u4xpdmtSkqKVhXuZKkQPuTq3HDeAfwZQdZYeEmdQpomFGvYGJZGutFfythNf2WqyXwR",
  "key13": "5sJgkhVwpToy8PBDjayXCBRZuRvE5PgqtpnJ36gmMsc9eA76HdpWRHpHHpzWSfoHVuLgeZX4WoJbMjhBQDwp9Pot",
  "key14": "3o15yeRgQoPhnvdLpx7hdP3a4Yvwa9sa3DiYvJrkJHZGmzW2PKFRgYqfKmjjC9e9dGAq7MnHCbgZdsw1hojk7hht",
  "key15": "5XtYUyFruQ3LYNvPTFfwtG88k5zHvinvHNrKvVjoMGDteGNgqm9KMMjqXQEHY9fs46YzgZ3apcbH6hLdGbDUWKnL",
  "key16": "4B2RycYXJeZ39rPaafrwZcZGvWh8XCF473mGpqkesLfbbgAFWeZf8hCqkch7BYLYcAy1TMFpjf3yxn9xC77zR5Bz",
  "key17": "4jq5A6VUbADMw4SJJiWcekKzhsaedRsiXKTJkmXJCZBEwv7CmJbXMqw2um68Jaf57tfZuzJs5ptHJz1CLeeZB21K",
  "key18": "67Wp5vNzPErB6E6WLy62QUpSW2CKCCGB5QwYVhLFid7TH7rTQECC5KYYtNqAy34T1A8futUFLWu9SrQarTnQkPDJ",
  "key19": "3mKqw4KDjNEKATBBSr6eAJGSBomqQht53KSuLTwXU1tzXd74MxFdEHVRwHiZtyg5PsKiZAvBHMe4im5R22HdE3hg",
  "key20": "2BHCa4muxZF2RKjFPUwZFzbvWaKepAfdiB7oSZEycMY1WM4mLb8CYULc7FsjXyMFqPy7rdf4nxq3K2mTy5q6tXTa",
  "key21": "1AFBNMijjUmYw2QBhmKJnGArHUTQFB6nRUKRn9cXVhqWczvXwL4gmEgcQ4h5YeMxEE2XTFsHnJMgpm5FL4RUG14",
  "key22": "2NJVnq4w5jahtg7NW53rJmyi6yTC5qywte4DnDbP8amDSn7hpXj2jTNtwPzHLbijG5uiTU1yD8zN3ZRwJxMKJe9X",
  "key23": "DfDKSiyk3iNTPH1QEc3k4HykGLnrEy4JWtcp83UWDWh87PaucGvvFwrkk7EFWsXHgeKK3QyqffMX7g2cPMwZS56",
  "key24": "5H1KyrbDzLoGsMrwokYRKBKh2DKQoJomjrz4R2mXMVsw5cHbdD9BnqTh4wnJQjEtMh63YJQa6ZinMr6p5HuQXcWA",
  "key25": "3L4KrVottA2BJWXVGZoGk3LBcTax4qqu11x6fCihkVndfZhfc4r4wEgseb5FZLdEdFzJmS4js9DA9n87qfFAhSig",
  "key26": "4LzpXhHTXyj6bZ7hZ1EXQxd17JfA3PaA9Qo44KvtLbbg48pWakvSMfBXtatyM6HJFvygHJYkf4rCo6rYt3k8Zywp",
  "key27": "31gtZQUFXirP2SnFbSxnU522Bfb38gkhczeNtPaQynjPXMmukbF3QvLmLGStxJW7yG4y28q18ZZH8CtEESSSAY4r",
  "key28": "2QwY3VtYo5vFb3YMvvC7Zp1me83eckozZV8YeytehaDZT9Szym1L1QtJKuw3oTdjfGReJX8A8PErXrBtm7qwWEcf",
  "key29": "64afjGeDZKysRZ5sc3vuEsSktL6aqm13ob5x2HCDSWHfitGu9zRFvbdP949JuuwF4gUKHcxUs3o8aQLvmzgQCprF",
  "key30": "2ETP7otvPuu4JN9M8Q8BzPUC6sDZp6NiAtJaSKnKmEb4hbJofi3UpwPAP3tgu6QLuavJ6uTHWbnVDavbLCxPq1yB",
  "key31": "2PrPNPMU4zCW48mxFoxciigG7wQKTvLtvJQc9P72PpQ6eXY4Qs6XCK4sERxRFzHQdMpE2H26pjDTiy4hmedWAyL3",
  "key32": "4JagegFY6321GAEjGbFBVfSYTU58Z8hBT473YW5ieSERcjAyzVGppqA3maKNCpTp2xtM11uoDttjwUnQjqSHtxr2",
  "key33": "yXLkoVGxj2paF8AguYGtY7QfggjaFhyHYh5RvqbRPoRaNDisGaeJQpRU2YVzWpimX5No7LgT1obxdYMM9RMR6gy",
  "key34": "65nz4TN7bsGwxULSMTSvYKyHb3xi1R6J8ca2eJ6YdgBiXPyeU9dm61ppxeX254VvF6CBGs3tzswHSznTic5vQ5Su",
  "key35": "25xxZdL4AhRiaSasasJcBrcEL7s36TCDFTx7dww5xfLPYhLSkhHcN3D4eNSERJAD5W8XNryZ5gyCN1DsvHyKAdSe",
  "key36": "4qy4ikmPNKc7PDo9Yvqz3jwQydA4hkVaSEaXkBSbvQEgt1bDix1NqMvt1VjcBFyDTW4FSHkoYfKMo6FEFUEYBsyS",
  "key37": "ypc8bdCPSo6oqqE6WVgcF1skj1ECJBJYpBJYEQeDuWf3xKMKn4c5vCp5d9AaA8T6mkhNYFddhgmixEv1zhoGubj",
  "key38": "4VR1xEAXE4nxBUtgbKiGnHRXkZxCfgLbWG6BqZ9Za9bsofRVDJGoa1qTgQnwBGpxTSoJktrkTTnwos5Kycqkg5GV",
  "key39": "5v6pj1fSuVUBPN9jN76ATd7TfBXQNgapg2kXFwmyz6kUxAABs5sKR985dFGTKeytj33ZK9CfgUmMSKwn7XeNAGFe",
  "key40": "55xGbgXMEucHCV1P4aGHpJqrzh4SunzngtdVktn9fCPqBVk5YV84dJD1NNVJmLupfp7JSmPvTpnQ1XdzWRZoStYB",
  "key41": "2PhCXbsPqg4xrjcdu5qTtkEBU8HVsfrnAEtJHBtspRBeMLoEyUa5fVvSFxVgajayA4KCm6QQ2mYpHuwpoznDEk21",
  "key42": "5fQZbHXquN6Gz5yo8vcGuefAc2vpoAfWkfoPbosw98k4jgvHuonAoT2xVYrayrpVVmpbPws1ft8d8YgGNXaDcbee",
  "key43": "X13rhJm6KCSPdnrxcoFiwHMz2k3ThficRSgcM7xDCappisWFK1iyvEgeNLWBsnDfHnBZU58pHyC2s8UfAqQv29R",
  "key44": "3cF3xypCmdbhykNsZSKjfKrn7B6vTphxPfvgZkjE7oLA3tUCpZP1vVtQ2T6W522KnY37H7ASqfWNwLd5NK4RSPqK",
  "key45": "2M6fSAffWbvKeTjKkyy9LNnsmTrn5UQiVsaKZnGWB5y7e4hB8Z2c3T9PFAzbFpXB3AEzqNmpsrP4ZriBU8RpRdnw"
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
