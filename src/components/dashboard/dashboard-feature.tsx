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
    "2m4Psd2nxCNpnRPLLhwwBqS84qLY4bU7SwTYYxcUbbwEVzP8LosuiSDbJxcXdxHEWdQsnTDy5vvFhuzZunMhMGSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iS1TioBvRDrkHg8UYBNQM1VbjttGRijFBfAXDEukLohU2Z4jPBaCbbbgUESTawTRoPsaH39tumjEANdHJE8jDQd",
  "key1": "4AnvqEivEG6DFmd7vRMn8SfQhc32kZAmydXsBDajScViEwyP4PBWhFBv2BJnhsAunXWdPV2gVbs38FBRtBcVapFJ",
  "key2": "2SqHrNzvV2m2yQvRrfUMUrP57RxGZ7ZjgASGytQzTjn1dN18HZu4QW2aiBRdzJizpgEkXmAa4xtBGetdFFop8XAK",
  "key3": "4LbGgjbSDtt1otm4rgzSkTx1NUxnBkU7oARARX5LNpM7jue4wUVNyDHDqFEeYoXRoHBtoDr7FBY1mRzN1jTB2KtJ",
  "key4": "2yDsgACA1LWFQkuB9qo8WpiAHgb7yfXczh2ocy4uRQYy8Gn2Z29cGWuimr4JivEwobGsF2r3rJvqdLnyEMuuYJL3",
  "key5": "35hBcjmyAi3wfmrX6pEen4cFnFfEGZnjYy6a94nh9LbEmVSeV9Fpjjz5BsdW2wak82WhksDypAAwDYivCTWidZrr",
  "key6": "5i6MJ7mkuAzM2CvYHeHamickvguPiw67pZVyGDzLYKVwaCZgf1v95ArgjrJaMfBfwMEh2yWNxPKnUgmhe9YjydsZ",
  "key7": "2YurWbiFpqgtyZ54atg7UmFw636cLJTrbrEXU8iA3TDg8S5Xh4nvmUpZxH7doDPY9u5SbrR1kVfYKhv7D7BFvEVk",
  "key8": "2HaWNs57paYvED5wnCVtUg1btZKK3FNkWru8wH6hyS8ffSeQwKRc846H6B3kDDXwkdAatq2i91j23UTkeGNcFkUQ",
  "key9": "5syNtffuzPz9qvXG51mziSpbuwikqdxtooMP9CgrkWuZBaMNfF3tqTdAgW9zb71dCgJEKavfJKKC48nRDKsdMEa",
  "key10": "5VTvXLg2nAJPUEhwoNj7tqEtsEzpsnFL4mJ511oNuvnn7Ee3Di9NHvgujP1JzEodF5ZHAy621rG5ckWEZEXujd5p",
  "key11": "4rJ2HhH8kMNsYX3scRBK3ELsfTJKadEr6utev8fy54q6Jd1388LhYNAAcWt11sEuRYNpX9x6WNhuZxRtEyCBgBBz",
  "key12": "4rpjKwC3S7DZHJ4yGTDf4TK5EewabkuugL61bRzzkX8V4EgQYtLdMNopSe6bCiGAes7kzcYc9WTqtGzrnyLcnpAC",
  "key13": "HZgdyB2znGbGsucr5Mav6mFfPXXk9ppm5SjJqKEXqGB2bAkboptthiqoeCb5kYqkb4pJdSC8JcDrCips7FytiLh",
  "key14": "4KscxufyW9xaPviuY1Sx5YXrTrpxBVBEvjVZfyFVUHrtUSrhLxJrH69NuWeK5GiKWuGfH9ZrnybcbeQzjDLUVqWQ",
  "key15": "2dzDVjg4RdG1B5if29M4VG1n9tPScbtziYaCjy1SEKEGVoPgAQ3SPgjSK4hbTZPmxN4jZMi3mfKojy9JLmf3jMPb",
  "key16": "4nGrx8ZnJd5trE8bWkd7gjSHaqW3V86hzVK9KRktSXM7DaNgn8b8jpMi5kiYyZ9zdqjXSGUWGbs8P7oQ9RNKJJru",
  "key17": "zDAcA1jgb6dzTzbL4wJdeu5k3omLe5NPhJXiXTP74AutniVVNd5AU9JEebE9HMisMTnimk9XZdfby4PsopYNMaK",
  "key18": "28ojjE4Dnwh3cosu8852urNeVGgVio9fDnxhJPfKNQSKaKCYDJLUnzfn3GfpnwGbXALHngt2HndVwLwjKfQnBM6w",
  "key19": "3hrXXXnLpm1uah2yPWZAuw1WrowrG3g9tXMGx6CBEiA9thfw8fwGktVQNvyu4bDMSUzHrBYGRasL74xo5xMQy1rJ",
  "key20": "3F3u7gavKyNXoQyKUKcX1tZV7zQCcr6btyk3tV85bypmYGVqqe9E6kvS9cwYn8fTCDbWGz5ZXaGDFXhYMQCtcFY4",
  "key21": "aTguWrFKE72j8cLYJmb19tpn9NeFZVqQ8kWh9HtSE6zYT6z5ZMLpgxsiQvw1RMp1Das4WkrxNUvP6FGQLFv4UvR",
  "key22": "2V229Qk8r7N6GYLY5evMZ8PdwPDqrtWRk7zS96dZMhykNAeupkVfUAa7u5uUrCC5vdujJ3evnmF9A3Uqsb4odb7T",
  "key23": "3CgBmDaFwbjFzVKDZoLD8epAyNQWX6rwaTztY2fPngU6NDtYDtqZCriewJUjURAPMh8TMDrBRKh5ri7FKFe6mkLu",
  "key24": "P281NrRA4TBrBzXHHfYHzABnS9TLzcRMnNbhzCiyQeJXQSWShCNzmWaWdDkWqi1i1VwZzmpS9Kf4ZyD5MFbGmLi",
  "key25": "2kiyyEUX6jDko7975geESDFu7RQWC4M3a9a6JHqdXKif9RSbaB6itignQb4acTXYYjE9R4S62WCkqzRvBGqBJMs4",
  "key26": "hH9BzhUuiRikK9z7c5jTfMSDbswNiys28XKxpHLcmaGszaJh5bRjpU3DM1G8KnecGG6sTvWFfuSXGSR4pYgwd2R",
  "key27": "5HNG8CPLYuCojPWEYnYP9BaWeWa8nHzdYaAQCdJqbHMC3VBSn9vQUgV4EGGokPZTd9Dj3BKRuZGJg7Mm228UnV8i",
  "key28": "3nSsXbKggyW7uGuWqVMVAA8QDz3ft39u9p7hxMvtxaeey5y8Bes3f3GPGn9vYY8cJJKhDHsZJuy9K6UQbvZFpKrh",
  "key29": "2G2tLdnSepymr9M7DAqm6usA9BiKU7EsGc9dA6SdfQT8NvaK183LrLebcCABicSQgbrbPAea2vSDXqBYZXXhoT1N",
  "key30": "ywCKPLaZ1dH8o7kM1a6vVMXyoHoVhJDVqbjm3qLoVi2ZqzPosR3TaESdkR1VtJQUnG61AfosHsaJ7xCHymbDKKL",
  "key31": "3w6sdb8VHtJ4hitdeLkZiVXkWPotTN6QizTQxpeho41727ffCaXyNLAUJLf9K8UeVV1ZJmw9qrA2QFLzbkAuSW4S",
  "key32": "5Z27YbUPMEEM4erKiU8bxgfwZN9aaQsM17HSGJu5uKwTcU4zMQmeiuMT2m71c1HVCqfcZshpTb549Gx6aMe3EUkF",
  "key33": "4aw13EqiqMdZ1MmXU8a3dUf8u3ACxCg496S21HJupjooXXy9mM3shjhwxz1LR9bhwAcDFkHDgnam4ERt5UEyeUz",
  "key34": "LvCXMkVLZ69Q7Migas4AYu3YwqK4GmmXjBwS2gEPYnAzyhozRLe3MkNdaoPEqgjtRqFtMKB6CF6p8iU995HbbT4",
  "key35": "4MVJtYgcMzWn5YsvijhzNareev3ZiHb4f9Uy3ugpnefVV3sPLS8RcnTHqGRwjUha7dbBEbBYqTGeN6UkQ8xVcFtE",
  "key36": "5YNHTKcY66fV8Z6ALZdtea9Qp4ySWKxUuPbx6aYSDXwpee67r7KV6vQS3fDXLPUjQLYsrsw4qPz3j4ViJwotgyBD",
  "key37": "5a4saWGtdvtHWT8vTX26C1PJS3KaY1uQPFtcdoBA15kiyA87kYmwZ9Cggo4EYNUUhyxockRivkPpMMzwe172LoiM",
  "key38": "4Ef22kpvFwzAZjxhGA4uQmag6ny8Wp14EnDUVopnkPttv529eEnU7ku7Nvjj9g1KDQzXx2wjS8FC26hiw4aWgF8F",
  "key39": "5TcNsgpS5pXzcSsDEWTZEiVaDGv1Pu7XMsfrDyy5T2B7uTub4Pc5pRiYfA8nkBUvhhUFvjSGPybKQ5W9rMvmPSb7"
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
