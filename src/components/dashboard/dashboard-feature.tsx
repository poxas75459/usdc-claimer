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
    "24CFu3VQdM1pp6eQyAgkMXvgBWrFono4XUXECs4ppWhhWYfKWaSWaXZBCLdQUb7rqvtPgyLLvDvg3mchQ6BcG1bP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64KZYmx8FLoG3Mh9cevjBdFKdgKdCG9bk3WNvogNHVHyLyPAxux9vtYxkL9BwWdKjweRLchYeHrhueb6MyAFUnbV",
  "key1": "43Hhov9Da1CuwDh8GP1YGsXdSvFq5mL3MBP9oPaGfSfxYLaMBjDSPWeTEWBJLh1QeCyzPhPnYw5zFBJ4FNvdu8Ru",
  "key2": "43CnuYprvDvFQFA8y2pdArbZpspp5DMYPwWo3qqLWzyF63AoT9cPERbo3C5sXJJXN2PEg3RbCZaaYu1ucq8LTmG5",
  "key3": "MTKbJrdwYmLq7jGHiQUw3G7ZW8wp3pKhUgqbudNqw4GZgA1yAFVZHiQnK5Cdic5y9StwTTut4z3VsQQYNb9AKSu",
  "key4": "4JH3XjDDmdudEUEUdwQb9cdpTFucCqzq32ggiRFcimziwezkgHXDqWY53yS2StouYPMAysBJRVXve6zyvoriD8nV",
  "key5": "4CMv2mTKxCGuSKcqpP76NFRc7W4c328u4fG2fq1ig7kgSskBVfMy6ZANp9x27JzXjquBfEZaAYpejyEeaipe4eJj",
  "key6": "4CrpctXiUM6J6e45G9zNbDdHWBUkiFXRyAcD5ErDoPn7z4GYBG7PwoEnHhJQYGegNmUGE6wJqDEEAZexARD6rmdP",
  "key7": "2xRQsSNLoddJvoX5HdWF8jafPemNRkCzDiCE4ya4HuPGYeBfZNNuLqZgPhPn2q3b4TNNCCwSF1Eb5fCpYwhkYQuQ",
  "key8": "4aVMHo3PbYsV7tHaXszXkPNw9w6haQhXEdzAJtjTmDa9YvmMwYjTuExZhg1o37nb8xDEbN54hL3K7pwh8wRAUJtd",
  "key9": "2vmbojocWu3AE3z2UBdLNX53mctjrfAjQvqQsYnNaoobv7ZasC4wrcdf8NjyEABQfBgMF8HE3Zx4EvBywd9Tg1cL",
  "key10": "4E2XcenkgpCjTN6YpdDJ9Vx77cuq9i2No1DJ8GTifjoMVdWr1fubHUbeSESc5y3Uem6L5BCw2fveFETTELGPKDv7",
  "key11": "2EFKaDPBmwhJMjSzeDVKJ9YkodE7QNhJeQFsXjNczDSbfE983xop7GBfDkGocJ6jKtp8hDMeb4mskni1DtBVaMJB",
  "key12": "2VS5JcoJvSvdvjuAgSjFfhXMerMpXq1y6T3SJSnuGNYQTt4tMKmWMxbvXESw3izDeyDxPb2DT48tpW5Gj7YJe4ew",
  "key13": "44z7otqBCr4ANBaMiUGDWtFrnHAQoup1o4CwsqbzupaBPrMdkNVLAjExmxVsKimDfyh3wu4zSvxLh92MUdyT7L3w",
  "key14": "36kP98PiddCWzdqBtDSjyQbRw386vBnZCw15R7rfLzbxGGrnsSCcLeGW6rvKMbEWyZNDvEYibTzSAjXb8wDm6R8s",
  "key15": "3YrQ1u8Sds9YGQx4z3qzUZgmmsffgWpwCZeY5XRuSnewSnNbm4GUu5EqsA1mbg7LB8iK2468MKMQRiCTZMeJSmzt",
  "key16": "5pbrtEGGUVNTjPXbnBQySMf2aZKE6sbNam5wecnWhNTXXdMCTnkF1RoDoQwn1yX4oLzvzTTgsqx7vPp7jPq24XDE",
  "key17": "2LHjBqQsUqNVToyr5fnzF5qzPeNMN9MvUKyntxN1JHnRWTH8tQmSY4Z6NeLzPUmQr4JecvXtsB5qWCxPpvB5B6vX",
  "key18": "5p15hBxgnUAGboYisVCdp2TRE2qq6YndbF1jirEkZV7cSMomTiiHSQBzVSGsNRjavKDjkfEeNyriteqrz4C69AWb",
  "key19": "3Gujp3c4KuGvSx4AckCwLiZRdPWgHW4DsPk59Vw14upXuMGfjjouoxivjhfH8U2n8vEWZw8okSDUcvC2YQRCrSMX",
  "key20": "37vQv56pNaNPR5qNjzFcg2ZuYVwjAMeMWb4mmus1n5YKaCrtHfxrW8CnWbT2DrDPc8xApvoJ463cAeTPCuvR7Xb4",
  "key21": "3Ptsq3ZXbGqoedhPAyX4ArpHQPBqz6UtC8ru8j5JDkS1J8iJNWijV6HGJLsKdtGxdxhLhGkFFr8nVGAxzfaTYKZ4",
  "key22": "t5mfVnwGqtozpumAdrmTxicBL3SsXk7aMotX1mHPoMSoYhrZcEifJkzYggw2qUoFbDfYFVjbRAcBo7hiz84ZhWi",
  "key23": "26myD9y7tSe6VhzSaJo1bqyuzbMXBnzbCu4jjFWHcEZGhAhG9pY7MNMkg114aDggsiFqszy28tKjg5AMTo7BV1do",
  "key24": "wVgH6wecNH4oDmBBFBQV4h1aLEfzYCxvmL6Gw8BjcjGQb6dtTaUwmdLvgx6CLnuAQpY2mKsG5XteMzSb7eGCBw5",
  "key25": "p4UMk3EcJ65TTxjrGB645WSSJiUBGkMro1GZrGXxNMChdpD8eK9HHzhkpzvgLWaGuE1vmyRiARxQXktfjBWgvia",
  "key26": "2e577nPBPWMQSUKU7cSyassmnsY1oMDGpD2u1F7cZH7PCTCHPXVyZciL7wqqfxaAdaLS6Jn2ZExn8hN4vRhczpF4",
  "key27": "5dpnsNQT77adeLA8vveseZdyV4txsBbXxiKPfCEfjER1YThJfFP3R3AAtHutNELUKed3qaQWgzJv4rHBgVbMkNE7",
  "key28": "3LcUaTrZrFtvqdTsEtkLZEkYrqJUYQDuBmtC4BBWx955S34oF4mkrD7N1WTUdccdwVngt5PjGTdwuQ7zvSq2GnKL",
  "key29": "4cqNARxMmeDVjfiwEwGsTJ1Ltdb8fuLvhzGSqKDzcY6CrzPQCn1UjMVKXsQkPP1pZA6AtuPt7qChuchf5uXK6dZB",
  "key30": "2kzHghn7suHwRAZYtDVZsfCSuaXs4X9PjsBm7Xbm4kz7brdu16FY82x3esyKKTzWEhdMReDuu8d7CwrjAtBudDYk",
  "key31": "22MVxmjnK4w8XX3rAM9BcDBXiBEhoFqsZFALLECuSDiWVYaMsHHrHsrmxWGiag1hFF9Cjj4xqHZxcwYaAnkB3kDG",
  "key32": "5zTNtHR1yEpSmYuVE4W7vbqhFd98EMeWSBJaSJbpoU7MqTVFUPUAvrfKpd3eDDxsqLgLVgWC9MTRhGo84KLSJSEg",
  "key33": "2qjs2d2XTg1zqABaxygUDrK8msALw1w5TcF43LZ4KtKgwnVrKEeehnr4rZq3SKYLgjXRQ4qCF7ZdFkyQGXfTqnfN",
  "key34": "oDwRszHDXFckyhAyPZs6x1ctQxtPk8MFHoZWfwPYHKSV3u7dAA18h9TJ2doDbMD2pH3cmn6ZT7L5PGB6TLwiCqS",
  "key35": "4nEqU4QBXwDtRYoR8v5fPY8LYg6ud314RKGFBM6PkE1HETgYkiJtQKyMMvcLFugKXcoBgCdLYvkyZQRx9N79nqpE",
  "key36": "4M1GGrsn9nUBNPxSiM2RucCu4sqaGd6wiXvrHmq8TeqrhqWCQntq6keaJbpaYU9i4x8uPVLcQ9BYUm7bK9HVFZJM",
  "key37": "3ePKTLW7K6nKn6wyzRvt5NNrqmWkZQU6sVxdJKZDoCGJrN1BhwaDu1V8ASCUwpc2uHxoyU7qCcu5GCLCFmrhjbup",
  "key38": "26cPcJWbgWKWnBg39g6cfpe865582U3fPxw7DjXwg74Tg6qQcChuM8bMpEfPpvU6EPatzdJbdxji76LY8oap4W48",
  "key39": "2Rgfey863EDWyKhXu2mwQgLyn47jvueoStPB75CjHoCk5iPCp7XzkXxHhCD93xodpX9VMJ9rwdvmYVmDLe9wnVrK",
  "key40": "4hT714RumBpS3efnQ1Y3oEJraCaHD6CSbZTRZY2hz1DV84DttnrF8Pa4WBbbte5VgwTcHuNrM8dVbCKMEmnDcnJt",
  "key41": "448ToSVDuCdC88NErXidFj5aZnFRDcNQGBZsvkH2A5MMfH5K1kCz2EMq3gEp459f4inJbbTkCTY43Xs9zBUmAUo1",
  "key42": "3DyzjS4VbBnVhRg3v2SBJ4smdJKoYSakFJNWx1jC2MR9LdRYVJVwujjze9aYhx642cNeQEaAGt3FTNA1r5WcTKkf",
  "key43": "49NiHszvAgwtWXzL5BcVK3XaiDH88Pt6P3ftvhsSzH3L39wXFkuQRhyf6io8WKG85FUkADRnoKnqaMwdc7Zvv4T6"
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
