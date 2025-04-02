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
    "5CKzsjEeFPHaVhhVz9LSjJ9URZWbg9UVRm2U1ztkGbWtxbErcfyNvh6Yc7Kv1zMFz5MZA6ZdmTCtFpHBqVCVJz37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w6m52LUSoZhroSYhmfiSmugAEwE2ehk2D9RoUy8cNbzBnLrTqpmGQrxWHM1ZnFwgLnJVEzVSAkPit1ZR9wSRmGL",
  "key1": "53iJfDunEF48odCsWQVRtvJE7yxafvSazCE2n4Jo8wLt3T9rq2P9zMCtkW8bA64FgcE99UKMUrBGJ4kpPfMBHiyn",
  "key2": "4DDehLNfYibAPGHgriLpWKpaHttRihaDZYTW6AvhUU4BAGH5XtTYxi9NkVJXo6qtjMy2Dy2ttJcuUpqw1pYFdieD",
  "key3": "4gDDFk3u6UzuSZui391a4qKAG6GTeKjSwWDrtBP2MumoNjY8rmJUhXj3nV8QMh2XjjmtUZFTUfDzGDujYt6CBxeN",
  "key4": "UmGBb8TW5kbtGaEj8hANUauKHQZqWby6NNwZtG77uapDwnWmGbr2YTxZwiQTPjop6rNCd414q8r74WsbVSoGWud",
  "key5": "5uWsbFHGZsKDnAHgnstTbjPBbhmq9Js7Gukts9qa6YU4dqg9A4ByvA1N6Trk1pZKAmmT2mbFqQ8GAHytXQhLbePa",
  "key6": "2DZjNK1XNjXqHP33JmrVVUz9rzkc1Ss4rQFXym1jtxmtFk2c8rJDVLY7WwpGgprUxGQHATaW9oTRDxqnq1nSTHJf",
  "key7": "4qsVtCP6Sz24eWQQZZAJZ87QYQQQkWYgqXPmsFPvBxuRF7ob2D95UuwymQr17rCLFyUSJX5grSmAMf4pGhVpEpGq",
  "key8": "2x3nn9czZuaQWLzRPmaAzWGmZwLmfKYg1AZ5d5LTFgk2ActxqXytSoks4iKacxK3tCs98tDSyn5Szc5YRRST4r3N",
  "key9": "4khnexb5bn8UAgq31dkV2tahPZJSvMBJqXVxM6cQ1hpqyi3ePsTKFttEWxsbduEikvDmgUeUBSyrN1U7PowAbemF",
  "key10": "zi8bahAbTQ2fYvTycNYheMx5WZ9HsuCpCKJSTeHVpfaTFW7W5m6bDLazR4ai8Cg17Zzf2bWnJWpSqQ12hRV656s",
  "key11": "5MF1WfRqMfzk7i88k1cqG42N3wi8zSmZMQgHQbWwmNCzztdtNtj5qz1VKFM5gvRejSehDfXR5MmXhcjjFRwQ3BCZ",
  "key12": "WU4CzBY2Fa6h2DW2UucKpGzxnQ268wRF8ENkSqtunS5Sc2GieNrqPU4ffxGgXw7cyyafjU6dcHGP2f3hPYVARNW",
  "key13": "245sZaaLHxCfHtvDEbeMvKpyHAe2in9jGEY7PabWwWomJN7dB344CfGYgB9A59HvhDf2x1EtquzGtekr8XvypdBe",
  "key14": "3xFmuQZm3tVBBnZBRvtxpfUCVDK7AwaFtutUmpGywcFo5iLbeoNqwnkjA46DD1xmT7GijV2GxRAjbSwdtZQwJXco",
  "key15": "4n976uqEU9kjhSCzy1UdkjeXcxZ8ithjSCmGGzKHWJrv1HYsSZCwfP7SVF5eqaTcC3uVxFZMSZi9Hh7wKwHMXrSG",
  "key16": "58hzM4chiWQFcicPp6zpLCT7iwhdLHGaYX2YLC4MxNULJxDsRHo7g6FzojfnmWpQdjrY2iWE25yRCJunCWgqq3Dj",
  "key17": "JsBykwH9PVdiksnmy4yCgHnUEdax5k8v8tX8VY27jfQZLJw9qiR6YhCyo3GiBSbY4dz7P5UXbZAY39xwBq1VbmG",
  "key18": "3rKpL9jicNNLUtbrZvXnGnXSYM7QmvCMyK5b1dCAxbLKueeovRkWqQza3ZkYztvhcRbmX2SgEuxzsuYALfZxnGZ",
  "key19": "62vrQFPbsDFXjZ2PmrL15FNgPiFPepEvuj569zPxLPK3j4zxNQp89qgeT3xz7DHc9NwSyyBvbxrBGvqxZsjkCuMp",
  "key20": "5TcpxU3zmjEM4Leb2SQNNGivHfcXtJvrtc7RV2DkETB9y9WZkd5UpqEwxwjTnhypBapR3agpBSqFDzfiX9HH4G1F",
  "key21": "2Er7GJiGro4V3TPWCjiL7YSjNJK9N8bVxu7ENm7gLxqn8NcnRHUVek2T1MXyMoGWZKif1mD6rwdEXfD6AGxvbxQL",
  "key22": "5vohQte5oej82s4Mnuid5YAmHyWWgSv6o42jQAWxuJTpVZJaYxzQ2o2Qo1G26e3NmRKw86yLCJ2cs2QGugUhX8Ur",
  "key23": "iZxkku4TFKwYGZSKNWkGzMiGiNw15yMxDnoikanaMiYNoyknZdXaiAbSMU4oVxetcMzN4FNbmmqmTAFKbVAd1fn",
  "key24": "2iHkiM4SNuEZ6sCYEXq7hGmU6bcijagPM7qSU2vLqxF8DZfcgoyt81yUhBTJ8XSCmMFYP1Ta8Hg8yACoyktzTcE7",
  "key25": "DEKp28oJEXzcGBNVethTZtkamK5qP7LCLiKgFxu5ZAY4Caq2EEw974SadgpcnURtWv9CFCrcQaVM3njUqT4exSX",
  "key26": "3chqLEWQyUXrBNUvvPGWqW2JYXCBCNgrsZbWEbNNTA7iaEZWHC8VMhoogHxyCpVQTpKDzuX4HmdnjhusNbWxtqZb",
  "key27": "5fVhZyrmTvRG5VT65mCD9KNia6FeZRtQumexgiZ8KPXLZpfwKNa99f85KXao4LGrjiSFfjbnyKe2L3LVNkDfamEc",
  "key28": "5diGzAkPwxEv3gtE6Ev3tU8xuwpxdLXv5GncwyW8XtPbnQXBkGx8KTdz3F2E5Pbm3mDGyGYFu3BJHBHPyUBs9Ny5",
  "key29": "4WrAgZDYHRhPBKFBUXvqMFDBmRU4GxcRwGedGEGpqxqUuTFKEbNdhpUfi3UGNGmozBcbvJ66YQxdtgJiPfotYCdw",
  "key30": "2je53tqiX67qhUf82z5xVeEDsZ2vpL9TsY78sduU3ZFpa2KzPYe3VebFA2ERpmEXULb5BaD2RgR9MVjVAycpKo35",
  "key31": "5sJHAo5n7CzNnj2hnUC3vRi2E7rzWS7tmC8DEFanUkYtBYgv4NFG3rPESG94NHcDLAARScyAbQFS6C9aH2YD6wDC",
  "key32": "66dB6B9dCmkCVzAeqaVya4PMUWtgwCdo4pMNAX4xyNgcv3GQkmuKeW3Gu7kPSoQnLyjHAeodnKL8gms7c13e3wwC",
  "key33": "595PsNeiZDWsBUNMzykBsps2x6zoq21mgcyVGPRHHGwFzdRXEwWXvXQAFaH9EPWDLRc7nu43qFJ2bMR4uT98hFkB",
  "key34": "3y5XgUgMzy7DsaHh16XqfemSiEYzBesRGfrzvXBGABdzvJWYZZ3zFJoTt4uf4qT1XkWFB9YKNwFu5ZtXjr3DBKD2",
  "key35": "4gavBSsT1AcgURnDczSAWBiNCDWWUBr1qi4B1zeeUrEm94UH4G9S8HXa5BfTExWu756PTdASyNtfu2RL3fYWSNzv",
  "key36": "55bAHpAqZrt53DGdUMfCqsiHz6AAaaT1FjXi5qdQ7P11JwYjuyENCjrv5b4VPrVtP143uQiUxC3bgYV7S754ELKU",
  "key37": "WYvZ6YmFgfBu2BMnwUNz8fLSLqTsccE5mGxVHxQ4ydX5ANdmm177uN72N3gZWvQn8a8ZT1BUEPZp28pTt62t6ux",
  "key38": "rVf35M1yfuHkAY8ESKLmzLZe24BjxBLPVPNJ13Yp9jnCaYTJyoF4LknQGX6sdMktAUgnei4qwUoJcH5FXupCw2U",
  "key39": "2uL3uAhWSRcCdTzV8pKYcThzTqAv3zjb1FHSE3EQPPgX1tBeEVqRNJ4psmcQziVfU4H8cH2x89fshYcyTHvnsWYA",
  "key40": "qPUfeJQH89rU8mN4Y9L754dqbyB7BamGPiWw2WaPKpXprcL8afz5CNj2C7QQC2tHLxjtGBurcH313uJ5zhJFAH6",
  "key41": "3Jrcq1ij7psqNpGBCwUJsY7uJ7JsKWLaa3WCAfpTzetAByFDQ6uWSLiec5EMGDkDavyux3t4Ct7ihsD1Teo4affC",
  "key42": "RVLGvm96qjgb9QZLC4iGjnFZJywvpKQ7uuD3jRrfbf3Jv1J3jvUEXgQexCAiqU4fGdcd85E3rrReopdYmMo8U8m"
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
