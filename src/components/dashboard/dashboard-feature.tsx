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
    "4G5hUyQGKpcLxqL3u6w1n1wN18GFwETJQF2edvvLKTQ3W5TyiXbyJdFeQwihNQXjPJPbpbZuVeKvLzGeGCLSxMyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q1Bo2YKeQ1EH7SpWa3erHXtEtqQEqV318pbQ3iygfvbESeVoqLmPN72xEAhjytkdq5P6WJZmqyJBWGRNU3o7jnD",
  "key1": "4fnxKPN93xazpJVf4BpLk3XiahJTQSuph6VvFm8Zd82Z5pbvTRp18V99yZj42TpAerMi6tYDLpDj7ZxkAkT7KqZu",
  "key2": "5ZDC5ofNV3mz5Uf4PTSWxaReDcV7TQaNTusnU1DrKv3nfBDNZCXZqN8JEQE5KWSUy2uwRGsiGTepvyVQ2z3G58wc",
  "key3": "26YsxnGwu5YLbJRQ9P83izwq8VwCDVksVTtARgnezFRFWww7Yok7TmmiRf1cAKMozWAABqTGnkDFBTZv6tRaGtPE",
  "key4": "WGJ59Nm2rjjBdtg7W8RVYxkez2CLHkrAAYgwiTMhDo1QKbiFX9obuqQJ3QzoJNSo51kvXxcCQSkeKCvxCMPvKaM",
  "key5": "3ZPxmVwokXwGmLz5STuJ7Fnno4TMh5GuPKEDXxU5myhwN68f1Vu9heKyBgsnT7GbwWdRrkVRHRNWVfvCDkQ9KdR8",
  "key6": "57hL9k1BXknjJvk86oCoZy25dH8yvyExND9dTk6h8ZnCo3HiMj9tAY4eSTZvYCsPMrUvATFv9fc2UGNHowQGTbYx",
  "key7": "2xeuWCSUzFcNoUnHpYT2BvwwHWnt48QoGAp65Ef26xFrchMekptyz1Zn9j5j9PtWQZRVwtSfwMhnguGrv34fXEpd",
  "key8": "3x4of2ppJQ6ygjhgBf7YJ3Fzm6aCcwsakkdhVk5QamKJEZT94qXDPJJcEnWNBJz4auoKkRBcJ7husKdFbmBRfZ3v",
  "key9": "45JeJNJmr7MGrPc71MBkc26i8RxvgnoVhZW3N1iEMv3vt4gBx9W4kQsxuowxf3V4w4XMmAf7BjCzv4X5ScdC5oRf",
  "key10": "3BQ1z8LkXh7w1zuGkwu2Zvqce2QyFBwL8aU7zPcRqepRvF6W96dBpeMbQQKsg8XTAEpmyyWW2DpBsLhdeNATGDGU",
  "key11": "5UnujSYfdJGtxBg2JzP4qZdJNMrtorULYp356itft1j5QJgmYFTJVDjZKYmzpjXYBFy2jpmAwNfDYCWTtdarZVwD",
  "key12": "4suNcoVwJ5QfGhsXoP2KpQhC5fDyFx5ULoDVQUbr374AWA7pvpBX8VRy2X8Z1XLR5x9goqj1jNcnTzh9v6KM6MTj",
  "key13": "4gRcF4mFVSX1xCEoPApYxmHaEbGZ8ARp7x3x39jVrTqRaN7sR97W7aaDQxjcB22NZAuVR3HrpDVQwmivSASpS8LJ",
  "key14": "2bVEe3WQ2hJQBMYgMMzyH2uA4R799E2sP1CoY26WFD8SGeUw3rQWHZNcf4mbx6bZxL3vvE3EztJCv4E74HEmt18g",
  "key15": "48ZGvTooXGZFCxAYDvrUmohXDwp6YtFWSwcA8i6yNXDkzRzTDXaz5UCtL3KQJbVc5egUvHEf7FzF7LhbNnBmb4eT",
  "key16": "52v6bXFyZZpdgG5n6Gtha96crjrsxahizVrea93az6vvjc1D6Q6EE99cTo1QEWTq5HG9itZnT5LvBBuE2BE8aP2w",
  "key17": "4R7VuzgifLJjSbUpd2wazQYajDYMT6uZetjjrvNuZV1feHXwfp4ioY7K6Gug3r3YBiZ8ZQyQ49ziHXGmMf82sgxt",
  "key18": "4CuYVTeSNvxdFuTyqYHh7g4FKcRGtQLUQSCj9erDedvLrF4mn2AAisbyz3qu4eoRbmvKhwJW7EDyqo3zPxFqpVme",
  "key19": "4pneCpKE19iGNxo88LZU13JwtneEhWcvokk8Su9fLe8f1sxVQTWoRzac2eNxKaec2of63ydKiirRsFzJsD7TUT9a",
  "key20": "4HvUjN3wbQkYKVUbNAwU8eQAYsepdXSLNRZf3Sb8GyJ29LDRemG2Qric5yXPQqiKq35xRu4KAzggoVhML7w9upTv",
  "key21": "5iWpCgQTUEmAfeB21qSDp2UWJXdaKdLxh9rUXnTBgFLMxodGyGoZUYtmB3rYZ5BGULefkynFS9TPdzN128xTz3hB",
  "key22": "4BKh4WqL2L4LcaPuCrYrcgdDhgj4GW46zqNnv8zToBC7JJraddbjwAEmbffeD6NAhFMUTHs2CVpRNJ6FWCdZT7dK",
  "key23": "gv1FV1LYoSGC9roCKFbBxzjWNu2LBNsr7FGujnu3d2qNc6xht3H6Vf2sxiUUbWVarJdSjXDerXRTdgyxnh7bDVf",
  "key24": "hf35bfYWtphYFyGLHEHJZ5LNUPs46fTHsgHS9X8bnxXodtfdczzCUn2wiFc2o2JyHSicWDuiiMuUYwcg279yuf6",
  "key25": "5u49do59ekxqWNz51bYPt3VK3F19W7uj8Vkv8tmi8kmi8K17iqkrXi5RB8Zr6ZmuULx4KAqAEVBXNdZnfkx6cnYX",
  "key26": "4x22HahH8DW9QorbW8njs78AHmRDxEET7EjHKqTEiWDSBSKzRgPV3eFHcGiiASVbf2uo69KWQ3sFWVZMjcXsL6iW",
  "key27": "3aEgz1S23AEP7b31hbQgHZP9QgiyEWArTLgKeHwpuXATKaSnytREhNuL34v9LNLQxiT1GPFkugLYcENB7Mhcmnss",
  "key28": "669LcHunbQwvZbK1rePJK9oCtr9Hgg7XW46RSh6c1E4bSRw5eJiRuunC56oFys8Zoor1nmyNjhQSLdUXx3ZT56w6",
  "key29": "RMt4znjfJ19meDcw9F9vaV2fCuvAJ4cnXTR2nCsb1VRu4RmDy4MFRtnnXCgm64LbEKR8meF2PZkjqaQaoJJ2NHV",
  "key30": "26TySHKyHue3mC9W8gqsd9a1q5QdY21SJq2Uux5BMcjuV6bNCZGRduVnVUZdqau6CvYNwjf9V3CPiHozEUFRceyX",
  "key31": "4juZQfjoptCSJTep8egbwS7JsJ6eDC76WJcnZgzKJH5pjsSC1WhdmPS8CYSts6kSdGk2kEWaLrVQifWNSt1oEmRC",
  "key32": "5UbNe23PjDL9Gh8j2a5ggNmkwLnrVqifJJY2bS1hqXgYqZTq1QSikMYrXFSXbGPx6TQHoXcf8uQDPvTewYGacopZ",
  "key33": "61W9exfMUhVQ1BLqyXqu4XrbzoGFvUMP7eP14PTi161YcmtqDdDp9kiw87xeRUdKafpmkVujSWcF5p8jSaJnyMrC",
  "key34": "5hv9YdDeRMsLDkyvY47QavoHEotdScGa4cFDwMicoDqpT9RGACq9mPdyaDamyrSYrNutDpq1zXhscGTfXJa1AUVE",
  "key35": "5LUP4A1mAR5pgHiRjk1KFmC6dLkXj1wXCQebqPCXJhL7J4dwi3m1b1eYMAMuRNSvABS2uR2xz5QPHssnyKWxKdbj",
  "key36": "3mDmR6ymJc3n65QDWFfHJPwZU2e5DoMsJHkhMtFGD4FXVFe2MFzAt9c6pSzPu94UfqspqC8mz7jknMZwh9XgP383",
  "key37": "4Pg7XKR6D7HMGbY3MaABN2deJxjJRy7Q63mKodFdaGZvB5AtvcRW77pBQ1crQBxtRrpp8KatyinBmPhk7LeiwDhH",
  "key38": "57YwCQ5CtX3wXoF9aRoP6ZDUHy55uNYEXGfVsWzBaHYRdx4pV3RZkBXp95T6BMkEo5R1CAhvEozTQwqZP8q2u5Zm",
  "key39": "5RPhsj8P7JGUjsYhs9k6vFyiRJWNco557zxLxz4tk8186ZAhsJz5FJV8uxTdodQZ3GVRrnVPS6vhQmdmkhw6o2dS",
  "key40": "3Qq5Vi52RB3Y52RBN81E7wAjbxVbTx2GioXpLqK5cVanMA3q8dTP2FC7kY4wDmMxHUAjqwBsxkkTuF6ozMdN4c49",
  "key41": "2wB7StMDtjgd5GLzAqaWuMBbVoJ7T8ZkwDsrFXtXBYnPE2K78TA8PtZ52PEDEzERrG5f824AK4uVvX5ZhVVDjt2n",
  "key42": "4rv9mXQzuqp6Khue7kw6cGDWMAhjF6wnL32mYSW2SQiEeBsh2JQpz5aWr4zp7Lhk7BFoJrX48seBHsTn8tNaGiRS",
  "key43": "JdnhSDEoyBFxXwnmRq79yMndcFD8z89SXEg7UKKdHavHYnUsP6SoXvV2vGzT6GGqWey3vmPvByphLnTEhuCn2Uy",
  "key44": "3ziEz2hR1YArctxQzPHy2NQHaJu1T8xqrXHuoGZRjHrbtynWv1ueykHRBAhWJsCj15fZaDAsbQt99C9PWn1zsakM",
  "key45": "51BgwDuSP9L2VjeTyhD3MbcmaVV6iGgNxvHs2EM7ArmzEgqsvKFaf8cBpXAcv6PZcogRVjcB7DAMUi9ED7Rvy3Ld",
  "key46": "2ukRG2urAQ4VaiAeGYbNv9Q2eDcBq5QaJWAwp4YjRcYBf7ww2JSnAArcbpwvKWpUAosjrbPB2kyQGj9mCD4T8YDu",
  "key47": "5ksjQZfxgeeHUMWrmf8FzM5FaduUU3DVPAL7YMivUDviRdoHxRnGJdg3B2M2KtagqamBuDtrHmnYpwExbjiiSsTR",
  "key48": "3STzxW7Mt561LdT3nvEsvR538YMrbYrWaHPRCDAyQbmfBq9TzJnJKdq72tkfSw5x1TvWTFkrBVPcNydGbdU8Mhc9"
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
