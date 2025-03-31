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
    "3cfnp3Yv8gNBVAk1oHHNV3mSWZ7na5HjqYCYqR8BjuTH5f5VTD5LEe7puogjhCsBkmw6oY5W6XEmgLRSWkamw3Qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aU6qgcPw84e3VNEqUf8CFy32hJNpzPFsmmk3h45FuqijEPetcvnaSrmVGsK1X1nnaCV3wFGo6ofACod8EfAxLtV",
  "key1": "2Auk62ncPCGfP7vNrNWJyiighJ4aUTEWE3KydYSXTE7mSoASQqQmynpjkLDTcKGZreFW5Nzv5RcQMqAeDLBTBskY",
  "key2": "2dTydwwqDrKSYLUN9iqjhenQiCWZCBigqxMWy5nnws7oLQ1g7tkJJH5JmNKijMtQLcERBskUQDYV84wGWFTD5qxB",
  "key3": "5oCPwicNkoppY4UjQa1J65SgaE9VtuMxyMAyTtuwVmob6Xi4A5rQmjC8ZPHjtCHGdbQsGqcYBMVCDScRRU7AJesz",
  "key4": "5MwWeno3Efzww7JLE6VNwyzyWP8djAi2wkkBte21ncR4vmFH2C72kpT11K8Z76q9dDcay6SH5nPBLdVJcvT79R12",
  "key5": "53YXhAmnD9xVDC3p3LMrLMMwkTf3DGthjdw3rTxU4oBRMZDsW7eb3fCr1RdifW8YJzdPHKSUaqHhHcUkaxKe3UXc",
  "key6": "3khM9Y3RVrMMMU87RTtARwEyjoiAYEmxKYtgU2dWEaHqeTvHQXXNi6tXkG1dHKP3SqPhfdNyWaR7352P7JUYyoi1",
  "key7": "5rcbPJh6vowB6daWQnpVqdsCgn9tVdCECsmXykWX7TDvZ36katWEEjn54RuwYEkZUuDb7knrCb2NFqgSDTr8k6GF",
  "key8": "3KKvFpq875gKsLWnmxTaEunCXoWhiS1XhcdzXXQHSp8cAViW6UXbeRib81ZedWeWStggGrzGmQfsLFyEEb9WbApg",
  "key9": "62iw3tQxkLWdKxhAd8hE3AoAsh6yPQUB2htaW95MhEfNJc53mu24NnZjsvnNJ9uq8Nj3iPVsHyUsWHZYXkJVXpZB",
  "key10": "4tQEThJJcbHZCsZgZr4SkRLoRrPm92CobVrYAR4kqVJePkueQ2uYmccF1DxheShbKjy5PSsbGnygfUMvxEAjTkmT",
  "key11": "3S6MGMbSsb5WNK5mKns6onkscXvXznHBVXB2ZX3E5eEA3dWqivqvh218eqVk5Vp2Nm1daaeR6CKgvQqWBrevBjUK",
  "key12": "RBM1kGc5u2b4td3Zi6aXBpKq5eWHLdfbPhKU1FMTUMfZt64ujDWAmEV1tNJwkE3rEkCYx8pGcHTK6XB3qAv8vyt",
  "key13": "53F77Zgq3dzB4biDQ5hmqRTxQgixhNR1WQFQpDiVdWAKrn7F8ARc37ZnKPuwc6RTshQyC8fr5mGgEg2w2h8c5nuR",
  "key14": "RRabz3peupK56eHqoafBiGg5Xb3zsLnWqxcghwnV8WjXro2b4rFZdGSHj5qJGkPwX9qBLkWhrwFzQXeYShY9Hci",
  "key15": "WAWDzGMk4z7Ru5Fu4nw2PK2C4W1kLWYFyx1sEvvoWNts7Hac2d9BxQVWAy3pAZxtJyjFp9a4u3hZfxZyyidPntW",
  "key16": "rL3ZAukf2qGgHqtivgK6PjdrzRUaL7cExegKj8yzJPETVEiw5YyPRpoEREwVsA5sMrLxnZyjhpWetDZZmnVayn4",
  "key17": "bndcDFMPLngjAMgSMtQ19L8YNarnmre9DNRgvwceDj6c8qJMMS1FPrpNxW7QSxrnTjLPEHmCivsaePZPhgKczFb",
  "key18": "5bRiPztYFnLynbx7yGwSUSurhxh3sj2i5B53hQqWVqW7x5BrxRS2J7RJpXWyTgvVMDxbYACJyh18MoBGZ7TtsBHW",
  "key19": "2acUV7sUpWSaKF2ZV2vzXwgqZD7ndgLWk7xn6EwGNCfSGAvYfUK9eMesgBb4GRd7YgZYQ3pY9SBPQEQMr4B99bpD",
  "key20": "615HKvSKh3dRHzZpcB2ZhAsarPDBQjfFJTi5KNqh7wtZDQpe5nyrcucaS3qNT2pNp3QaPdpLeeZpjq2RtJ5vZUh8",
  "key21": "3UwzSRH693yXhNJ4Nwh26uzpWesGKzSPmwYn3avD14TwS69cv5eYpqfqfUC62wv9vFfz5vYuCar2p6x8ZYE6kXGE",
  "key22": "3SgGwqFa9R2Y4YEsWLREUmzFgMhTwp1ZPjzEKjei9e9NfLMDAmPGRBf9ZabRABFcU7s5cyDGKFUTgr6rEoQ3w4FQ",
  "key23": "bJPyVMfyrspXP4rVkbtKNHfaYMvwxathg5MBiLiqUJBqnai39dV8M9Uuv8f13E2C3rbXp5ekKpZvWJy6KZz2nxR",
  "key24": "yWkrJdbsmMJj6DYjEzUyWt7fG5M88NZ9fvSa6H28QZBa6qAWA2RsFafdAjYbM6jjz3vBT5H7kE1MXH5d4Fmpvx1",
  "key25": "3He3j8UqoAX1rCf4HDcWB33pxxPXn3kd7gcrCCsnTp6KkUum7TXLkxb2LD7cmrHN4AMDDhfWHy7243JuuBKqtUYi",
  "key26": "487i1tVBLqziqzDb1wRnV6525yieNeC3snYCtAo4xnSexqStxL9F1RDhrXoBoA8pnZhiZ6HZQyZKHpkZeFZT5Bg2",
  "key27": "4u17ybz3DG2rcXEj5RfVmrEHf1FMSi9k8TnAqJmhc77MmynX2KkADoWEsYyKtDj8TzkN6o28rf9oABn7zuyHE488",
  "key28": "3Xesqa9whWEiBxpRg5xvK88r4iqx9PjVQJHcF7cLTEsxdeDsCBxwu1PbNvYN4YEXEVgNkANZa2wKHrx2r1cxovbA",
  "key29": "5Thrbq7NVFo1CgVwP1ZVnyBRasUmcR1kAf2UkPtXjMbMsEsYXP4D5fZEE2BA9CSEg7wzMqTsgfRntjfHBXKryrvd",
  "key30": "5nPhJgx6bGshm76HWmsoaL76xne8psatxqqaw1pxyEmWKp87P1jUaH3xTBeU4iNdJggXnqmMHWovNyYR9EnsQtUX",
  "key31": "2bmR8enVQ5848F2Xnb5UtD2i9bai32QQPeeR3hyXU1Z5Q46GddzCCg9Kjr7WKnq7YXmGjnuSLsdFXHDxy1tVW1gq",
  "key32": "4LyP6QgJwmKaReA18nqVdquA8298VS3Rn4bf2AAZUDWF3JPo4SQ24nKnjQKLyT9W5a8HhZNs56MzRgut9YwzNC8R",
  "key33": "5mosyzKYG3R6WUD2TRkifynZgpZGbA1u8SGcaURipzvjHRq28YRygqJecFDPQozw68CV4dpkHdTLH913hSyJ8vgM",
  "key34": "5iCEWWfTfaxm7Webb3faPcvrRqDxgCuMfTcinW5XLNfGLnm16Mmn81AxUJpMaoY8jUtdC76kVnM4ByDcyiH9MdC7",
  "key35": "4E7iLPxvrqcRy96WYwhsD2R7mxVqCy2Fi6nWgD9kSYgQtb18sMnGPnr4NkGmoQ3xW1eAQ67FC2QFLPTrJQHuCQ2c",
  "key36": "46qdMPBae7qWuhXFtUr9QMvXkLR7Qc2CPqQ8fhHzbZq3W2SmqD8p5NB7RfsBACJuzpSKpfvQPyTbDbWkNtt9Xvj8",
  "key37": "3ca2C9Cz373ZiVmqMC5U2VtB2F99z7b63pM7wtR7m5jeoWqcUfAqbboHLNHLW8SPuYPNG5eAbJuUfF9wxVeCKKzE",
  "key38": "34v1qV7tCScxnz1SXquyoStpupPsYEjJxMnhvzuijSeGD4gtdDcNH8ux5TqeKextoA8HQYZXCyYvZDmztefpQZ5x",
  "key39": "3tTPYyb9MkUrtkSWYmDXs3LSeMsgRKGMq1EmoXk2ZCNNN6DP6mD7cQhXMW8jMVHGEZXNNCx8YVgbWMfwHEEbBCq1",
  "key40": "3DfhEWkVht58noZzatHr9GikWtMQFf9eZHe9X5vQJqq7hjo1AzjnTSmtQbh7FNXSb9DaH8MEUjzoWQ29itTBM9cd"
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
