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
    "wr1EomQhsoPJawD1WdzrFMotUu4Nd1AwmECbCq4kwwVrbvtzDiop52AgyD9Vr9Yf1cqDaRrjWMnLSwF19b2GWyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49R2VbUEP8EqTkryknfTXTE3tsPbdLpxE7jz6wxT6HcP14PpTpJ17Poo47YibYutYpnFNmRj8FbirJ4nbrhisFgy",
  "key1": "3TG66ewWqaK5gUe9ACYtiMTvoBvfoFvGP1DLikwby4bHRds1hr9QFCPnx1rCRZneWrNP83qXAqqwii7sUQPWEo4k",
  "key2": "2a7ReSVzpRBdQ5yhuNPtULvHLcBF4D5VBzRXzCHTfiEfUgfpQ5d5Wa6cCc46QEWC2PQ1SWvwBo3UvjtkiJA2FMF3",
  "key3": "5MArmufei6sBdC63G2AkRtj79E525okcJ5ufDdhp1DgBBVHcWwjeZk8ys6D4s3z9WG6KtN1p4HXimD61v6Js3Wy2",
  "key4": "4NMgZaPzBqCpTqxT6XTzNS4bisB5b5cSJaps3x5V6MT59xUVYTApbXaapbAcjsAeg2VSV2SW24VvLcpK9jY9Bive",
  "key5": "3ftmH7zEB9NcvkY6Vg6SYAJP691FDjvVhdcqTFrZmC6QJvRaQ9o829fccFf6uwTtgBEHwDJiTvuFtz6mmazKWPov",
  "key6": "5ZLdQiWcEWkB5rhke8KHnh8afYWopmsjt53KcZ6SvW2tMmGXbJQeduwK3yThGZCLoXpSwF1MYLXuHafJBXNqRFvh",
  "key7": "3ir2MFa5wcqiEpxPAbiJ7eyn1Wh2VhJenLGGoAcdpAMDGLWUkPfab2jTNX2UzwhhbTA2PwJ1XobNw1qAHzts83Dd",
  "key8": "2zTX9N4qJs8jPe5o4mUzNR6DwjfVDNdfdYRz5Nk7RiNwK4qpJFRXXi1BdrHdFpWoqj9oStDQAqHf5NhcLcVRbwH2",
  "key9": "3KsQDFtmD5cy733jhGL89oWJ7KaXEpzRhS8DuD88kE2GN1cBKyFjSHx1RaDguXAxpvbpRBWSk7SjHkMZSUCx9PY9",
  "key10": "3R4S7AN2S8abhfcLfW95EFVDSZqJZgLNxARExEn9Y7uNUWoJGuK9LGBUwtiXoarM4pRpGwxsvYv5pr2Ms9xvkXjb",
  "key11": "43gXTuodHyyd5aGkW5mcj7BPw7AWGxWHYW5ktJDnwwAPEjMzrGoBreby5vzo8kQ9xAGWteZvVkbEepxAn5xN6rVb",
  "key12": "3uzr67GHmwQyJMvFNqVwhv1keTfUo9TauvtcTq3sy7F9oaUWFZRRDyDrDmqN6ia82eF6zzCMqaak5yzjrnUejxJW",
  "key13": "3VNmhZD138dBu7nqPxL89pJPdB9HLuZzaJpu8cH2zV11CSdDDpLoKxxLm7gUZcfqPhmh7JtYaw2baxX6uNvfcRDJ",
  "key14": "3byoQXYEJEhDihVPW5Zr6cWJVqYLzGLwp7M4tjtZ8CiPmjnt3AirKYJUnkyqciFTWkEAJUZmgpRFgvNhgbqwHwAm",
  "key15": "22bL6LviXki72EcEqnvdX63YpifNHHhghwgCE6ApqhK48er4wdtnCWr8CZUjwtZHtWCmtK2yjsVCr7gWK5M23W9J",
  "key16": "39suqd27AGMck49GdGo7py3hUpdT6YgxmSPoVB6xPovTMrn7sFQWExpfQu3Y6gjaBG9KqsvvoUEVb6huZSBx4gm4",
  "key17": "3qNGpvWJw6kpzvJ9SHBXywL8NdRwmmSvaHRbtkRAYq74ABhWME8AWJyWxHRzResm6nwcGL4GJXDPheo7PREKGWQE",
  "key18": "4KxHjVKVsNf1z7w9uw6TYGu8t3W3RZ3AJyLHCTTWXmWdcx4A6SDB1G9dVhn4oacs8UraFjiCE1ppBLFLNBch6y1i",
  "key19": "AvUJxVyVfVVoxrj18xdnCRxMUsp7k92DMMfTusPGUuvdJA9G9V53zbiokzKfBRDwqaXFbvqb2P1txdg2eT2yTMd",
  "key20": "48Pr6U5BDY7GNhEHPWYbydQqQeynxLmWCfyw58mnZQ5xFcqcpcSK6TqDFCP4j1KyYQjYw6zfLJuBBLuhvVusUhHJ",
  "key21": "3JLUznyyYDD5YK6SZx9ZnMrR327uoGvt4VkiX1t1pPj9SPghKx2UYoLobsDbuYPDTXv824jWk8o1JnCb1UMfLhN9",
  "key22": "5joRVjbKsBu4sWj8EgjFk2qENWTQznYAkDKKJ3z7gt6mAPr9M4Y6D1CQxPUG7KA5xcmxySvP8PjtrfJVMYvuwUqJ",
  "key23": "6ses5APu2MQe6ZjFqYqfcQDUSjHiHAHUdJWMsV4uz7vYnLiXv3w7GKdjztCWYCxYtBqdzQxJBGddBasoHZxZEKt",
  "key24": "3sNW2dFEmTDkrFnLsUP8ZDnkWwAFCeH1VLH35zWk1QCrP7uXkphGLzd9TSStH3GqriYXDKWZRh4wiAXTFF3r7n3",
  "key25": "39s8JjwgvMtfPqureRZKv8cHMpaqTmg2rhT1SQeRXXbo9ibVuapm3ugtVZBxsdCt94qxzBSw9zXDLZDyGcKCrsfK",
  "key26": "jLYU3cQLgUvA8WLDHQ4D4KuYVpbJp2yVhDcpFP5Rpp8ctrfassjDqPfYfBmxRpASTMRKWvG6wA7znVxcwfXheJj",
  "key27": "4Zfasf5qWqo8oiQkfR7SoFnYLMRYvr8FkqKXMFWeKo9U831niRLdrF8VXkx5cRkEQDPrNw69V5rYpnEKfRkmQRzo",
  "key28": "3Gb27iLA8SPBP3oLJwMPnHg6ukhNA81kAUhTi8HCE4uVn5udzmbiQWvv6XTfSQtnnsVH4vW1zh33zmBycpQNhEFq",
  "key29": "32BkbKMKKZVYcF7DNLm66zMtYFEBzzyttAHNXwZ7v7UwngnT6WvgqfLtjMc8MXKQJuQ2HqYhFmdV7tLKQpFDvSFm",
  "key30": "DvZwhCoqvMHju73uZgMbYHeA84L6WhpJo1hMvZEHLrWPm6qHi4THPtRVLNEbriEuvjVQC8JQNg2WQvpv7uutDei",
  "key31": "27sAgfsvgytWjJZm124e5d5rwtBr8m4BpwCULH8Jir5QAFnwRgKG8DMoF5NWHv4U6ekbDJNjVSxiVTvgbBP9CFmi",
  "key32": "3VwKqtxKCuiSpQVuJbb9eVbVJtEAVn36CVgvwHfZCPvE5LiVdssjEHH5TmhkGtPXe4YViBhgwMj7Qc8amcN6HMfZ",
  "key33": "3yqDQQ6tv9vQYqrydB6ZjdPgAQdLmcXa1hKqu3duEb3uLWudAwkgueGeXJbbqAksP4HmDxkzi2vjs1yx3DzcHpdE"
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
