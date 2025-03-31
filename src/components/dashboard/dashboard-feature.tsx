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
    "3TdjbAjPYDXa9LhE1EPo7kWunUapi41xyZL5UgzbR7ABdhskKCg3Qf5X99Lk2qRDx5tFqSgtoTvZ3E5KNgbQp691"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c46K7NYHFCRPahSPmn2kEorD9HvPUagNZDGwAzmkxJ5cyKDif89RCCZRCE7A771TPTacbFhafhtdti7AyLh5Bqc",
  "key1": "5fPWePbntCXeZq3KKA9nogPLmGMFUBTMq1kJ5pNy1aDsjDbTUg3Lkc7xTpLshvNqXtw6Jm317qdfyruwfuK9QwUx",
  "key2": "5ytcfLfXtBrq6ihvDcfA76G2G1eJdqQQK1sBYA5uD9KZPwund8fwsMwTsCTmSdrafwm1gckbfQsaGRS6X5xcvM9k",
  "key3": "85QR2srDxu19nWB5zNiEuyG3i7rJ6BNhL7aYXDJkfvEnfNDEYeeRao8iPywrWZ8sir2xh4j8RhsqZchGjPtA2xy",
  "key4": "4vjgi9RNgHY2frYGdV7XqdPykjAb9s9vBU8Au7CSDNEuJBjVWjwRE9Cj74fuQZqa71DZhh1cpGsmSZSzvVSnmQ3v",
  "key5": "2D1oTmmriWQNRGdEpJ3Saggc4eKGvFfkjQkFL8Tp8RdqQHUjG2qBVcg4UL4VVJNfEKJKwH2uUeiPDmm7AV6XGfDv",
  "key6": "4Dw2x36xMgAJ47GMEBZjxSpieAgibpifcL8DTTr7T8cYBmCNUw2ZC9kXPonzAXZsZpEi5eV4mTowwn4uzXTDvrC",
  "key7": "yKCVGUSZRXNNcDRi2yKoLces2he6wtoVEYCAnrbbH2rkWZpAfQKzjtcQhGt7jPcDFdKVFuDXzHk3y5Wx7y6JJnu",
  "key8": "3FGtRMVo1DA743eSFMbcH5pvX3xfMatDpBFDK6pH2LBHHZUpVJxk5AWwQGNWacwzBFBTzRFLfhcdDvGaQGibEuiQ",
  "key9": "5r9HiacDf1CScJDoANvRx1PQdUtiWAuqk8mWzVqgmPA51Hc1VfbwKUGG9AZbG85rNpT6xx34LPGFzzwNZ53e3U4b",
  "key10": "4ssUjMAhzKPyxkL6whpGAyjwMa9CQQZbpN1g9QCGzVmUJ1TV45pHXTRuDmeXYBi9cJhjPfoFfw2vUNEws69zeFFo",
  "key11": "4cGosvYcjc4Fu9t22w3rB4jpGL2VFoudC8L8mLXPZUjb1NeGgDeaWbqFgQahywmwRJZYdTHYyWpXrEuxH2LQTEGJ",
  "key12": "5HM6ahZVqVcRkUhG8YDVuAxZaVGea758DaayfMihAotUYeoJAuzP4X7ezs6CznvxkgVbLLzg8y4uei9UBgz35w3i",
  "key13": "4YDfLXeeXBf8CnFDpJ8DketiVvkNmYKXya5Gt88Xg3bc7qdtPLkHFsSbPR85r4de6LeykHSPHQbBRgtdUgMYEL95",
  "key14": "2gXzvUys5dvDyCHdNhpzWzSrKy6PUG1dQPYEvUGsNcJMNcPg7rFFyQuw58GNTRDXnLs5AmftN1yEchwxgzsCxtZc",
  "key15": "5jjXsDXZFNQXSUotoqsAt38kikeFhn4WWWVRk3ui6TVkFKoPB9Xi3oWNRNfSiQCcbhymMhF1b9rHz8su6xESjsrb",
  "key16": "3WiRZGkfUxnMuWnnVcwSkamQm5maYfo8rTKSPv9tHZ3rfVLCRpe2ZK7Fbp9QT1J7dLmJSuYNRZa4GdsEn6xFJigd",
  "key17": "5gU7AykNpkVVxQ4WtydXnEFECVU4vBnGxsQpWM7b2z7XjGwEPpxPnoqqbHdEKBTGxZiqMKBk1hVBWvLai5kGeufY",
  "key18": "48KSTFYXrUyvF6QZk8kaio5oey1aqKf8sQbzov8irG5feBp64Pgipc5GBRyLGdJxDN9QKwNY6zv53zG2KFSG1Nmc",
  "key19": "2uvi2rkb8azhqnuVYPL3DwfME1c5M8sBNBmnn6kbzAzcwbVpPxHkLmUixtsvakPCPvfAstAGoVKrXtxLDAzvHJPT",
  "key20": "65nTnQWfKrfQ7MyATWVynmegSPA9s2C9wtULrGLf6kUY4SLbjnoxTFJkLfb4McuX85US9DYpDeacdn2KFdck9Jj1",
  "key21": "JQSDgDZviigqED9u9MfxZ9QoZvzo6qAP9cgRjLKqkZM7Lovd46vjH3WbaBUxa3fj9zUXChY34pBhKyesL6TFtKu",
  "key22": "3HU8ngrnRd8yNRqDDeFR22YAh4v4PH3TFnpF8gm8crdiyWnLU8YZwnjoSacaXkprzPwMrX8VV7zopfD9rJ1LpmxN",
  "key23": "3zrcp7aAac6qqHaTa1p968fibr3siudohUu3GXhhX2d9ed5WU8u6suvSxbKbhsXfm9Y9Gq6tM1nsQjYhKBs1AppT",
  "key24": "5nVAkd2XEeiJKotvKZz6fKv3SUThTZvE2HqfFcZCSk6Lu7BXCF1hX9kHEX4G3z4f5pjLCt48qWgWBz461XPYwAJG",
  "key25": "35hj35XxCQVNrd7sifRDXnT51o2dsJz3xehqkUSTf3pegzVdHgyhDmcHV1jJ9MgHA556gKWYqLsZ47UqhtBeDgg7",
  "key26": "5vKxPPQkgMx2pwFnDTGhrk7x5zFoBEc8LCJWJ5JjQh4v9oDLSLj9MRCYZLzH2ihX6uTsB3sTA8aNpX6HXwsTCgUe",
  "key27": "2UPxe6zvhugh2mu3gzgmExurZ5TTNDZaEmyfpkuS7n3fmztf41Xm9BikcrBN8R45abX4Xq52LvvwwVx2Zb5sm5x",
  "key28": "426gewZvYJuxKK1Qs22LLSX2y27GB6b7SqtZXxbdVKt79JnUSvWGp9ogjzVWsRTdWwr9Sy5n7KhuZRZSDgmQEPbT",
  "key29": "WYWq5PdgvayKHDu7nd5cTRYf8KWZFGPFW82BXmnG3EAZ8AEP8Ye8bbDfaG5Rj2eAtENbzHDF67jFXFhPbz1SR3Z",
  "key30": "41bwYSUX7HPkWB756tPhV8wLTKB3fLTuyns2ciTodHftQwywP9nsVHgqbXN1EQwutXBRaBUMvzdB6DPZUdEjqku8",
  "key31": "5cD91WwaAoHWxa3GAq9YzPPH4UVk7ymKZDaiug6RxX3kAn89n3L5BtcBkXvxhgsKre6BYuW5SnRhbn9tjscqPHEu",
  "key32": "393VMPgzrcWfAE9UDrxt2mTuD2faJYJhnfSP6QSXKJADZ4ergxWHcfsZYNcp4B54EdJD13quiK4sfMZ1c9bYSFqA",
  "key33": "2f5vXf5poWWupYxvYqeJGsWnYtzg5S7nG1mXNGRAyJRBndmJp26FJ6kkFH5zxy4Y8PrkjFMd6gio31e9cCgGRT7e",
  "key34": "3Tnm9QCd964B68bmHcxm7fpYDc6jthqjacrahof5SfFMhEm7ZURYjyQAgihkEsBFUj3V8r8xD5surdELREKd7Eq7",
  "key35": "3zsmEsVFmALR94Vo5S7w6Piob7QmE9dfJMqhshx5ThteABBTrbE7sdy3M5r9Mp7kzhDCQSsyC2USv3bbwrDzptC",
  "key36": "MMJDhMAedZg9DHzvNZopDB3jbUoo4R5eqZbRfyJAhFixUbdVoWvmGyreb9xnLHtqWeX2YG33bYS5mWtNeCtPDua",
  "key37": "EkYbX26CxXcCYuVjRDcHWM18PpBR2xiiNG8YwJF7XN2kN3ne1t6Hn7xuRtVFDdgHnF6AzdfhJDR7AGHsYLDVHHk",
  "key38": "nDpssXnCw19UELazmHt5tCbzuZ83rWVUyJ7Lrk2xkEwVcenGDaWQPDCCePWaauFiiXHBQG3LSjtex5K98DKexf1",
  "key39": "5CWa9FNmcJWR5ATLzj2kbk1d1S3aruHRaW7BMDRfMybwYLCHZYha8uks1RprRz1oSrckfjuWuzemr4FwX1tnXXK3",
  "key40": "2mhFcgUZT9LbNNryYgNnFHzCRuoBxPd2JjQm5zud5TFQutJtwdnzHquB1Z7qqa82SVtGCET8jJBaPM7fJZFtHez2",
  "key41": "ZdbrXfQh5e9a4tdrbSu2TUpC7FjN72PCQNiyNB67fa1BX5kd8Vw8rMKRFre5BN4SrzkfqP7w6YdFzCoAo2JQ8kN",
  "key42": "4b7HWtrMYdum8i3ph4kZwrQb1JZEfnmkWbk5B7hvDXX1BJcagtewby7rY5HqXkTDbDim93V7j9S2zaxRUMbKiXPu",
  "key43": "3LmriD6n8XKdcP5xx8yvzTE6wXKwsnGUyQcyU2rD8aXHGtbA2LhyWCdQ8SKZ4UMDQNNRm4vox4o31wRenPcfrF3R",
  "key44": "67PS62KJBcuBs6Tsk9tQWfBLLU63gPoW6sYHKSiJANQcUUuEaRCraeoHP5d1MrGjmCHCc5UpwuSZQdSyDthUwJrh",
  "key45": "2nR6E2yortvd5E4EUUrsZPESBpr6yBn27DK7xDkx5kCHCtWAxsfKAQ5MnhYUPNZuERbPob9wieKVxNiSpZSEFuwm",
  "key46": "b4Q3D2X3E24Q5izFfy4x6MMH3uXuE62Rhy9DcXBp2KJUXdmzy1iAGUDTSLqXv7b8hGVNayPi59tQPFcggWe6hKQ",
  "key47": "4Xc5nDuf9aRZ9T6jqABDNcZX4VJAdkA1JWCMFKBs7Eugq4WehXv7t9xQmHMqmuEjXzMVCS8w3etzrFbjNuJAJ5cT",
  "key48": "4GdUBZKpM3W4ggrqEE14UVyXRCqqwwU33kdMaovS3YpWWqRMQ8JQU9kPYny4A18vbbpovwS4L8wBwCt4AHSHxfFn"
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
