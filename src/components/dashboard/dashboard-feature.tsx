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
    "61nz7bjiAGnP3BdoHJoqk5qJo1bwFFDNxgt9e9uSTKM27uppQjtJknyKzQ5e67HfMQyCenVz56hbw8s7ak3u3b52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MBaSKxe6dDc6JJcJwMDQkDZeboABGrcP2Vee8ektP1iqtUrcthzLtYpSwgbJBVPg3Jdu5ygsJqfXiSWgRXXLxR1",
  "key1": "3D8hPJGLr7s27HHjjMjiUWfEpQNrLkQdf7k6DGD3E8giHEypgdgA3M7jWSjrViG7Y4m5HXNtQK3uMsdKWYyTEGJg",
  "key2": "4wzbXY9F4Y6F9usAu6vKDF3EmbpG8n8gLSRdZuYJty7wWnv4ph6gwnN8Encm7WjCscPz985CuRUUFkSAaMPgPfez",
  "key3": "5PZ1RtXZpwZ49FDZJ9djQgckRhsF666Tj7ojXChB9JE6oZ9xTV5bmErdG3qEsWDnSJFiHcESBQG8fdi6AryCGAxn",
  "key4": "5FKd7CegLfUgoj1og9sxeRvkPg7yeU4ajofSeKpjAzbjuQE67wL1skEsACH7e6FGyYDPT7iCzHAqF86op1SCgC78",
  "key5": "5xGzd652oq5agPEcjZTbCvGN7YQ6GdQeHACGLu1QFCxV44CDcwWssgVeJ7bQWsMeHp66UKozZkhh8BfXCtRduHFc",
  "key6": "3KGmdBjJBWKVcgAG3g9VucpV6fAWByeGrquzj96dvmbeZL5BHsrP4aucdnTCrLL4NjmtM5bcQSXHjEfMy93HpeWK",
  "key7": "5NWZtQy2eobCs1cFbiR9vX6gnaN64HaoV4Q4hiwQWsSKzAuCCeCjxdWyrY7KZYcuMQHFggHHiyTANuXfnRn9Qcki",
  "key8": "3wU5AWyMqXcFep1j8yAAJRgiiTfRfRqxgAsFPuoQJbec4CF4GZVjLH4ZTyaSH121JN3gbyugjjH2NC2rfxNQxG7Q",
  "key9": "4SbBXzALwUYNiGmGbopudPTkRCZ754AEQ7yzg6NGYmoR9KFPxs9MDrU5GMpcaLU2PFQs7Wzm4RFgSuHky3F1n3DK",
  "key10": "5VH5jUhu69ZvQtQ54yKpR3Trg7p1eUzbiDVkttmBTaMXuZEu86Pw3J81PmUpkhJrod4RiJJR66mnnPbPwoEUQ2F4",
  "key11": "4DtK8cH9ZHfcWaDwYQFzA7ifZSYktAF1Tk1xceThPBhrR51p7GcXzzv3JA7jXneyNCun1GQuPA5b6Z6Y3J4sbuuf",
  "key12": "3FgHsod4N6V6H9qn36cy8SZ5HdT1JRiRaQ2NBm8UKMg9MC3x8LaeaUawKyrovkQxutALJs5Mrn5gGbUj5fA6Xukn",
  "key13": "4k8K9DnwD8AGopB3U6bExanphY5MhkxGocCdfF56vHXhA9o3ZXQCQhjLSEsoC9EhWfbZ8aTHGSjR6NcDJ4oTidnW",
  "key14": "pewRqV2AFJYZFbKJ915HFmL4MvvcjU2U8eCm1KcQ1X1yysPPYHtd1EZw4KGWHjKZeXM8SA72dTnmn1TYJcE9S6S",
  "key15": "3fQAHbBVq12KkZQubS9W31SCvqXEnihBrNX2d3WEjBJedns1A8xyuhvzqkkg6jSsduM1ta8ACvvPMq1xQ1zGWQem",
  "key16": "4woJkS7WB6gGaaQrsTcxJaUAK8JQiJCoJ3v8rZMuAmTfmrRavNwuxuhEN6D4zdGzmTNb9NW3EG6yaD4Ftj1MRMpn",
  "key17": "5ztB7EcKuri1zivozmXZ7YM2Vxv9HaZdY4y6914GnwfU7LMTEZjAdURLkeLeWUthvTdKniVskjmkCKfSkKfE2ow7",
  "key18": "ntxZRtDkPnsL52UkxFBj2AvNyMkyaE3G8dhc1R1QJcN2WibiC3NvqzGW4xCFGFFW5HuZh2itjewCUymTcSx3joY",
  "key19": "2F69is3zRW2S8ChHaDjzKH7YsoiJx1WFAZLQ3MqJQLf5DgDVyogYznEX5Jyhy8wW8TM2kSwLdt54gL2itPen79g9",
  "key20": "SLrUVLNATWTGqZ2MPB5RXS5mBAYYjSjLXWUbr9fLbFiB5rGmdvv2azAaNB8DjGUfWQUi7xnLmPuxNtFePxQwnTx",
  "key21": "31oWSAMjS3vnpoj3XNtcCVGVZ3AKKmXwPUZVjUoQ21YjEwoMPYc4iGDJWUQHsQ32agzwswiM4PQoYR8HbBr2y4ir",
  "key22": "2vcY7Cjdm9Cpuff1mVFonXobb2g7W7ac36h4NKkqyet5a6kixQyzPXpeQsSpxo9RW3bYnU3wDFfbjExbrePcpJ3D",
  "key23": "aBBwpqHP4Skw5Tn8BtHYVD9npGbGnGJ3D1EjKKo2B7eLdLsfRTmCYmB5cznxwVsfQSmEc5Zb8dUZ4dy2jG3SM8x",
  "key24": "5sdA5ivn4SgV8XiGEWUhig55t5WQ4BWMJopYRrKqVwkU4RjvjVverz4VHWuB8s3Qaoi9hk2hpkN3Mg7Pzoo2ihZ4",
  "key25": "3Lfb1WnF7DUS1D29ynVcE24usyPRfqjVAf78FhsTKGev6ABLdMmvX8QfgKgczGUEuBBJbgC9Mjy4ydEdPKw7UTHG",
  "key26": "4wQm81ybWKGwZB3MWFhWyeYHUcsFpYqTfbEA3vKckbaXk1zNRSw1eiT9ZTzUFRR4G6CVbUjLUDTDz8oHMvRYMbpS",
  "key27": "4FPS6FhJTg5mGhk2LUgj9S1ZKrcbBgX7peFw6TAt5FeFNeh5cLEumZJaUJ4eVcepBtEiHdtTEvmGFANPSjffimAh",
  "key28": "3gefgjqeGpiRkPyETKvu8RrNgUR1ytpvqWKwK4X6AQDNoAettsb8LgSM3by62QWFn1j234oomz5oGy6bTmdXUkiB",
  "key29": "347pgfccKWoa2eETEBGzxTGN6vLKuKm53qyKDjjxsuWPm56GAmmRLiqh9GEdDy3D3yLBSHmgzffh1UvUQJhnRdqd",
  "key30": "3HsbJwtjYLoSUJeEnyot3WdbCEGphvThy4fV9vhgL6nECkHv1qxC4yLC7skKuNVVcTDBQ8q2jdGFwAskwExb3DWY",
  "key31": "5QeaxBgMgzzt6WTuU5o4Btpw47xtYj7XPwLPGT3YfNdEeUFyGAYpLqGdNSuzKWMhEqT9Vf1hKR3jtPctv6NQXA83",
  "key32": "3jA2Hp1bws9CBfMrAg2YguWd66LFR4vj1a8PtxgTr6gbZpN8itbdiS7t4GEXVZCwwcn4aefEyQK1wQTWW4YYKzHz",
  "key33": "5QoiDKEDYmX1VuKFJJRMAzmFUBHwiXNxFwk72DEo7Kxg9StbcY2DrZhQx35VPhAjTHM8kfFd7SkQC5J6ouhJrSQT",
  "key34": "2jmWsyV8TGRB6vrLyQJ7DCx32PNB9PpQyW19MXzEurb8MPwhrLtwBT91oXc47XH5QaYRTN3MrS1cwjjEzMn3W5Js",
  "key35": "2DQi2vtfkSxnjCikSeYHzbttoKFkApfbwkcinqsmCw7JoSESUq5bWB78orUMkrkj8URRCUzFHW6kRtHZQnDXJYry",
  "key36": "4ytkFV1whXPzVz2qnV4cwwM3fKGSztoh97KgmA1z4BbDB5JcXX4nFkQV5cNxJHCLhjNxmGZfAyQQRrdXojmS6M3s",
  "key37": "5f3egfKi8vVUuA3KTLtC1S2z4NfoyUQr9ncxGicTAdQQMmJSNwaHVhPkSq4uoT2HxZ4VqYHUj6zxEbkmm2UN1y5j",
  "key38": "3uvxsxCqnQB4LUHh2WawZR4WfrmEm7oJmffoW661kjSnh4WirWnaZ5hLoUofiFofUws2dugqxLoULvBWhSXJD5XR",
  "key39": "5h3dhigEQPyybknZbMy5HH9VFQ8baqypy542VWpDrz6HtLzvuB4V5CsKkFtyDxNYDJZBCAzifpUCkokr6xetrgME",
  "key40": "2iwmnzUBNksxc9tknCekCtpW1TscDDYM1VGk6V4nwgL22FWLy3n6Bc8Wv45fjz86VZqrdi6tAHW3dBjUSdiq42TY",
  "key41": "JYN9Qrzvvc6QmrUufG8XvTFDBRDU6oEpZxtUkBBz7hEksaDX14v1bBNqAaWFizcosQJYVA6gsdwKL1QV8Ph12Ei",
  "key42": "3fwbXXQNvTLqwiHZQNWUwd5Nzjsgf1Nz5A2QtyFFGBsDWTR2TXD3myJH5AgxXppPU4z3GLSZWCzBxraRR2brAU26",
  "key43": "2ruwjkTrjXna51DGuxqLZba4frfehzZ5gds55CNrCEqXdA4A7gFdzDFe8MDXBAFGUv48ABpr5P8Ua56y9RXZq9eB"
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
