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
    "54PhqtxxqspPfeo6rvvAcMSKM8ZsfRc3VfTp55vYw22r7w9SvUHK7uJjSuYQTQHQ6aGUz72tUCwCdhS22htQhTAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KGP6omtaqs96qd1Wh58eHQwBN7L56pqzbhsBWEWZjSZSo4o2pJi6KTAcfJzGs3xfJScGfcNnqf4k8GVUend7xuC",
  "key1": "2gnkQhATC3fKh7bLFGHRY6Z9S1Qdc1EB9pYpDorYz7qQKC5PTZZVzDjjJ9JaQpJ2kSXFQy6onb3rs2oTwmkbxfdc",
  "key2": "4Rgffx55TToPVvgda6B2ogqC6kFRv6SRjQD55dr6Ados3sR4AcBhp5PSs6Vq8qLe63vs4BRC6qGbJ9WKPaKMdvd",
  "key3": "3dz4z63pkYSdxD95jDvUnL5m8Fg8RcJ75iBihCuDSXcqp7YvACTNknBArjwj6B4LNebKxUyAn8t7bhq3duwJzHD3",
  "key4": "fXTdWYvRWBrQFFhDgrinmqXSru3mFK2y6doVRZjWNRZZJMyFPXTsGkgQ2ywrm8JMMXtDAu7ZjxSoS7qjapB6rko",
  "key5": "4k1ZMqADwmVMWzwoiZye5qroQ8LmgtjR6yrHgeV4mqTETifFvXCyZUdYForu4ucJTdmRF176ab8NcV9UkiVZNWW2",
  "key6": "67e4J7HbtWEzPLx4ngdDPGvaG6xxo88shhonhM6Zn466UiBFRgW9DTFngwMJc3W3v8EDBARffvHS8bTixB7G7qcT",
  "key7": "49yZGS93RxTmAsQjMzmyksootwvBnN9iJxKhLaFoNAFk6YvKXs6H2TyiCpjNrWxgVLGfCrQ8yQwc1GUPBJhJZ58R",
  "key8": "577C1uSs2wANMh9yUi8TZVuEvoSLqUxgyKWLn29KVfQ22dYBdqU7KnJzff1maVgP7f1iYfcowXhw4ZNDUyhDYEie",
  "key9": "4eeCVxZM9Xpm9tyhFehTG4xeovNY3EoehXJQY8NXCDZkGFEoY6BowDZ5qa6cjm9uriXEKtxU4QFhniBK7FuR3wvV",
  "key10": "3jh1ts9Sfinkk6TnzWWDTp5RqJDQggkWnTWmGj2HWxzq4TkMdhify4tshK4PgpAVBoEbHz2QWv3e1ysJHBcDC28G",
  "key11": "4K5PqQqnExeDLiqQ5hrCoQ4mkunyJHE9ksgxggVVkfP6PM8R52EU5euP4vLfkcBkaPjuAofP8Nhofismnzj5DV6T",
  "key12": "BhCZh82jg2uBdKAuWQB1R4ta5P18z4Wj2zSFPzBt5gQcSh9rZkG2XMZVZM6nEHYQVLG1zAVKLdmYEwoLpxMw9CY",
  "key13": "41G4SMBeL6z2J393uHps3jQTJwAtyjS1cLKJmHP8pSS8tP6ns8VRDepZKXo2LHKJqhuD4aLhBHbTLBLCzuSGSwop",
  "key14": "4xdW4QenXo3SMqhpMMn8CdBKx7uWj3XxZuz7mLKFLSLxffL6198QpUF2bJTgm87KYxPuYQBfjkaWiQPHjEK1uXcC",
  "key15": "3P8EcSNDM58uVsiTU6vLatY72FZ8codMCKCB9EBc4p2B8HNaahbDYe1FrgyDZz9gdaFTkjwuDjrg9HMyhEeH5ydW",
  "key16": "5PBbTDp36bugxaQ63opzZh7QYFZ7gZsx3zYJHuBkLkf5mvUQXkj7hFmAxovDbMnGYzcPEPVbhhgXodkuwEek25hg",
  "key17": "qCG78S5wPQ7K9YFPwtmLmdDhnZmxEWRQdmWts7zKx1VJuWXfzcUE2e4beoFeCetkRdtd3FRoekRF8MgUARrf1ba",
  "key18": "4XLCqzhowvZ98Nfzh8kmwZTWc2h7KezjXnGpE8TvPrPqiw5vQ8jcb2oKym7cHv3LbJYuU9DaeT5jxGrKmrN1TZ9",
  "key19": "g954E1ehMXkF3RNxpnwQTXoo4kGSr9G1pwej2fW4WFaeCdu5d9kXBsdSNwSYbm7FcAL8AdGDu4qC6fBQLAjM85j",
  "key20": "3BnYb7n3KmG7pXoDXqGvZTXQfkfxeLqCqHRM522twSQQ4hM2aDrUUzEfckeZjkMxBk1ushKLJpZFhadk9jGfLCSF",
  "key21": "5UAurk5Uv9HXXhzXSFE3SFuqHoQRnEArUbb1cipJwMVzSQQY8nLuYqDkhHAEkBXp9azwx7Rbn31dZW6VFx2Djp3F",
  "key22": "5JQ9TEUS2eVzLdRaAR57hTjqHo8VWZ2LPp7CRmSH16waknenZxyHzBAgDpXBGrdAV4r95u3wQqXMNT4Q4njBm7oR",
  "key23": "2QnDkfPSuTeBWyXRGhewguKLE1Pj5XYpZkrGrXUv1uPQ6GHWL4FHvjGJA1JnuCyeH4XNCwi4j36KRE7PsDRPxXVp",
  "key24": "3Kp9ZxB38Ms8HtWeZDus9oALbx5F2yWg4m9YvqfwjucibGj1nT8kpvcsvMdJn2GznubYTe1McN35au7m3f4iXmWf",
  "key25": "mkuA3qzoaphq8ToFXvbMaoNKJgvPMm65GpSnpzH4DLAUL3h1ptk3Cy1TZyZRvxg7x9Mz5dLZAkTaEL2J6hfmUMe",
  "key26": "41vA1J5UdGtsToBwXLuH5iGePjZ9j46By1tufytmue5nKShLe76Bopw6yC5Wi4p7FUMyY1bzgtu1Zcs9JRYeVyjc",
  "key27": "2WAGV1qNNuCUNF2zvkH8tYC26kMbjK3s8vAd81yNbo1Y1nv4717iTECmZGRJvfgoV3bhoNVJqJAEDyheZetZf1PG",
  "key28": "3bxX6S5zgTaSJLK7i4oc8w9rSivJrYW2FmCFG9XYoExR7Z545wHQ6AJ4DHdGfaEfV5VRShEn9gVfFECHNCuaagBK",
  "key29": "46xmbLyooZ7GVdmKMCFdx8JaCawq7PJ5mEUxScC4LZmjzVPrYGTRYiqJGGyVFZ73XtQqbFXor13objd2ZviLiXE1",
  "key30": "5sGNqsQZhrCMEfRbbJ4nCZ3DczdtEo6dU8pH4S5LfRhyyqdohQvPGg6gfUmTwxXBYxC3JZE4iAdgNhnNNcXtAS5b",
  "key31": "493K3xcopRkDu2TypocXuxDPXzhiUF3vJVrYH8k5C7ZLPhUmVPfRNWYHsBxU3HSkwi5Ve42aa92n4Ap2D2bhfZ2x",
  "key32": "53a2Hh14FFWFdu4xEXKrm2XpRb8qzs7dWNq7Xy7AkExuxsm1qz7JRC7jfa2n6mYVGrbnkZmFMSFKcLmqx1DrnUHJ",
  "key33": "2qfLvWQnUobgStUvy7D8BKZaZd1yuhaKK5F7FJUAYvC1iTRJWwwrsocJY5U4ZozenX115vvFNVhhY73pBkNz1XUb"
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
