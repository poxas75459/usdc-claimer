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
    "4KV89Px95Krw7RgK15HsxQv2GSkeAXWHpkMjv1hAz4wuJi3oW3Tfb63hpxfhXGNxPot6GqguNh47nyjJ3v5zFD9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DXHtj1mrs6bMW4VSoMiYh6EyE9zBgrK1kzdJ5aareNmn2ShgSs9VJJVj6gqHN4W66CYrQLws9tw4iqafnPMBaYj",
  "key1": "59HVYLYbAGvjuAARECJ4J9zZpPsB3eWjG31Fr8GXpqbuXNmgircTkDdqzsGPDYWEJ8WNvy6UhW2YqAuUGdkeVkKD",
  "key2": "2aDqETmUnrJDrSE4aNH8NVJR2dQW4WD4Kk6tC1ev8naKeRVVfa2dRTHBaffBxwbWqFMgThns3QGRC1zgKS9F59o5",
  "key3": "39mVR1pVHUTPdvFqY3KKEr89nCS8X9aVQMyF7a2Lh2p4asybDW3u29ZxPPQW5CmVaK6k1CqEHRFQQ1VffuiSSYL5",
  "key4": "2K4QTRGP9bMBjroKAHLmjPXLV8YPFd7JbUtYasnkYqwaU1GMpfxEkXQrkgATs3nxJKkfBnoJe4Z71viaDwSqoA9H",
  "key5": "4KF4WVqSk6AvsdSmix428BzaPXZZJC31nbnrYz2RBmFNWFTnokycCuY3WgTv1f92Nu8xR6Y97uzdomAUzSMrbLta",
  "key6": "2BKyzsbemyF7AmbHhfNcr5a7886T2mRFFxvXXV2G2T4pKyvqkdYKgSmFRRHCqMa3tJZPFopqi3EedoxxGawhWM4z",
  "key7": "67Wahf4wzFAwQAEFr3um4WA8T6jMaKVACuvx2WkjjjuKYcWtMpm7zoMEaSZwZSS6nJUL2g52R4Zhkx8XRp5sMA9U",
  "key8": "4fKp9CDnqMkqLPzWmkDZW8ELdVGSnWsFrJ3ZrjHh8uAefsG8zqhyGnVoeVYwacVc5DNdwF7g2eGSgJwgXUz3WSAy",
  "key9": "2C5Lt1zg86S5E6jPo19ZjKiHnBdtYbiqmhZ2weWFxaiivkc5CRJYSABKo89zzBXX6gRUhsbdYxxJtoC9BUrG2YLp",
  "key10": "5BwSN924hYGtsbNkGkhwustWhnvxzR7s6deKp6VHKhGZuBcLjvuKBtQNK2Li9vSMa6gdtwiBjqxL4v8CdG5CQunu",
  "key11": "5fYs3ZuVK7YPocmhG184buas6S5PGKE5cgYLaPwxxHthF8mjuFif2CKWcTBZ3xox9JbBNWNYB5Uuanos5Q8JPmqk",
  "key12": "48R9ZY1ax53zES6kxmN9XNEudxok8LmE4CKHHFxa22cM2sxhCTwfWnwscNgfFp9DVDgxGL127WS8oQeTFJLZcU4w",
  "key13": "3gZD1iXm62zCoXzzw8GjYRzYVwQHBQUssPjDcXMDYGpprHf7Yb6hFQFckU9h9sg22p5Tx658HisTjxntuJ322Yr7",
  "key14": "LefLUKzi2oCcqY3gN2riRYScRpddc2rnnk29MNyWJNrL6BDzCP8HTERptm5nXXoLUn1YYowvNYWka8JELT1GSzA",
  "key15": "5umuWkL5q9wCrSRPAn1x4oojZ2UCmbBX3FPPFqx2g36LbkFSzd48HDcPULUyFsQzQ9H1Fc1YhGw6M2m8e4upau56",
  "key16": "27GajE2ZZ6ag48kjUqjVQv2TFoNHbfqFbFDYSkZraRJX9X9wvgxeC7WLMXYPGN3v7xnBN4JJbvzep6gR7a2VyqeD",
  "key17": "5CW4edgBRWpXy9r179WSBzzYpNBx8ncapist2UZYSyFzQAcLXca982Htk7y19vQ9jXqmh5M3MNLGfN5JgMQ7mBeZ",
  "key18": "5CozEdm7TeMUcraVV4SgxYvgyySxkYVNcdNzFn74TZbL6S2szX6yCXwCn9ThTipAWZW619aQLoomACwbRxwFyYZw",
  "key19": "5njkU1fEwSuts5SV9rsUmgGX6ETSS6Uh3jEeAzpcfqDa83LWftP3CGHihmEbv2XQCm7ivPkvDxukZGF2nrJyxTuE",
  "key20": "5cV1jvxDq3ftkD2xxWd754Bsgmh6SS83idh4tP4sQ7qQzzRrpieY3oWRnfmDZu4PX23UUoNo1cb31FRieFkXqgBG",
  "key21": "5yaW4rtqAS8KaKStM9yGYn5DQBzUFc5YdHkHi1CeibdZQ1a3YnHSZaoK2ExAfhbRMURbXqspZ9X7nVSsjpc36ibj",
  "key22": "2zEZKDpdHzhjoVKpaH12W3cBJNoeaLRd9ucdtdgPrF2uQPPNDUb8GjJay62Dxq23KiuBwFy3nExU681waVM3Z4fv",
  "key23": "4JKy3gjYEBaJBSVVf9NpWdeccMYAsh6fAS3bXvBRDQoCVX6W8ywJQGUiaH4DvcMr5o4LAZtXVQtR5B162cgtJJ1G",
  "key24": "3cSKx6N2mkKKzCs6zQYcmJoWhBWBHb8f2T6ZevXLsCicfCrzygP8N5q4yCPsQ5o8FTb8DrWJdFHuMyp4kEekkDzh",
  "key25": "3KDk3Dpu1vb3wF3SMDAhmZDaNmuyLrC1bpp9p2B9FDnbYDeTZeXq7JALTuaEai99uY1vx7avF5FmvRjjA2zT34t5",
  "key26": "qP7BnnYAzaSWwKTTDJhZQq13pnkVGWg5BAcQBS7dAw4DhrpkDSTfP7auYxrdaUSJQgksee5tWgpyUXibx2CJqHP",
  "key27": "2K2UjuWLvkQQkpTEKgUY1Z9wSJiSKNpVmViUKqMaqnLMk9Eg89geC6APaYsvaiSTrHagF82mmkkum1szFZVJunPW",
  "key28": "331zgLmzjKq8kU7Bcv2crcRwuvPzeJWbgz1imjYYS6r3DmovuRWMuUsmURaa8RRQjTsoV6o9vwh1kDaXwzeQd3WQ",
  "key29": "2kVpiqY3py3PgKgM3fR33s3M7ntuEQnm8A3ZLfHUaqneqjxoX2BRUMbAxtzJzX6dCTKca2Tgt1rbAaMfRSRhr1gZ",
  "key30": "ey8AuhbFcBeeR6Q8MpLUsd6mhh72yetiXgAXKPMZVx8JHCr7cxacvfLdBsQ84Ma8UpfwUV8m8j7B9HQ6J3vnRMH",
  "key31": "DqsBMkq1nPixM6WFUcrE9JdjYqYfNtwQ6CPGC9N3tmxjs1DMBPB7YyZa78V5tTfB9cfDZnCnWG1wBeV4A5Na2uC",
  "key32": "5B9VDFDaWhHbMLTj1xHShAuvuAwGC4M4gUzPRYBSyaJmrxFoKfmgYeyyPdiScQDLeCQTrXvMP718f6nEmNM6ByPL",
  "key33": "55TfPnXa7nhrG2g1T57h22zttHdPK1Wet9oU5UhGXKc8JCuHytP32uqEssH9DaGFrKaDmGuJHxuzxiLP9jzBcGKN",
  "key34": "272xcJPpobeicwdixqGSBKPvE25KahwWmGxqm2nTgTTmqKmicVJetnxsHTy3TUJS8wzoovuEJ7Cv9YaA86HUcv3M",
  "key35": "4Ezw2YqGcx7xbHk2pRD1FmDWEMJ99CZgJJyCdpU3rPpop4ow9QsS76CyvqgHSNsoLex7MPnfYNbf3YtEZFCY5s7E",
  "key36": "3uq994cmNY1P9Wg1xzsHWfrGcnC4WxSwWJ7eqeRwQkzAci9UpvE8ofijSa6YRKSTCzpNZ8XqMhuKU4msgdBXqr5Y",
  "key37": "tXHKYWD12rjDigV5Fn9nHFZTpzV4GdFz9GwMnmq5hRPFyf5Z3nY7xToFoa5HPEZaM8jQsJ1BU4ctb2rdeBWR5Z2",
  "key38": "2GZmboW9G2XMg9n1TKEsr5sNRgCVadRzndyfYrb9LuqCcFEKRbMz4uUSrYFkuuMhQZ3q3dTX1WdB9LmPB7k2DzWN",
  "key39": "4VUUbTbaJK8gyDcjBjGad5nq2oQJhp7LnMcdUrwsNBXUGEjuHdfRcTxyrA7K87vohJGaFwhwnfFo7uG7Qqaor1XA",
  "key40": "3NS7u7qiTzXkiS3EVxzJ8AzRApu2TsU7GbFXdocE5kvmiaf4fVFEtHYf1k1eBMLTSrmyrHNew7kmo1qtZJUWWiJn",
  "key41": "5hYk2g221cZB2vdCqTeKBNMBut3xwqyFpref9rnDRSK21Cv1JrJh6zE58fkMLYQxa3cpbqosUQhCYaHJwAep4PKG",
  "key42": "53NPmRRoK7R77m7SH9hrUoRx65YnjprQctc6c6WkNDJfj5sbayBYjvVjciLaekFvtb8QnpEBnNbwijFKREtPamL8",
  "key43": "2rAnp6mDSubEMeU87EpQdx1fi1nW84tpi7nsfTZKRU1zb28ZESuzPT5qMU7XsaGra5EKvTbmvxRBbzEPvSDr5foD",
  "key44": "35QxsuHPikK1kfb9LFBDzxLU1tvzAkdDYCMNUGJY9mJyQxa4J5TBLwXhjXBaKq477Asiapx8EU9UAT4b9FMjbsSr",
  "key45": "57Ap4SFydAxECeZy3fiJsffBteBNDSBLregDBQxgDErzM9TrdhNrdGLNF6PUsVCWGahkCsJs3VJJyC3ETPv2JiyP"
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
