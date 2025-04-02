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
    "4Xcn9oKH71HpRrFn48iPkdDmgnarPkCXQ5FYgey6TH4zsoLpj6WovT4H9BNcje3QZPzbmuLCos2VZLkKBjsdChhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lg4GYVEw78W4rqp9DVgF6n51esNNbw5gwfkPoLfdcDBvnLzGByJc2cD3FnG1DH1vPYtWiKmtd1dWK24AcJyY2QA",
  "key1": "47TSLzXygvLTvy3odjynjw7vC3RysCJ5AK8fzu2fgTFKdigs4x5Dz7YvwaXvTeksiMNUi2z9AG53kgKTSHX5sEE1",
  "key2": "4r9ms1dfFk1SGd6qR2sgwmh1Ea286Yq4RDLexWNDXQTRnvMqUnigyEPKaBiZNwDBHdz1JrayumMABEbm5K9Cnm8y",
  "key3": "3NARBayAqLK9FA32Pjk1ze4tGvwi1meAEoRqDsM3vatjmPuyqhpt4BaAHbvmKicFS91SmZDuffgKQ9h2bR5iYgzf",
  "key4": "FPn2vMMWbU1WgGxyG7aAfUDwmHjSrQgwmFtSKiYisZwHKTUVCSYULpFTmC6MbQv7UEU2xPqjykLTFAxjDghNRSe",
  "key5": "3ZYJ3LJ85idq31vR4uoG7YJ5XjGGetskACpdiig43CKCZ7aPpUXKT4jeshkXetkQvwNwPwWxaYyAa74rdKyD5yUD",
  "key6": "4WTQ79nWL5u8cbWD96C9SoUzp2FwbPWhsTfby4kqaFnx3ZQT63tYdikq7veZKHDc3huQDkCKtfsnqFUNKsdAzqqX",
  "key7": "4ywt4KeMiRePZrXZzudDmbGfF4SwQWxGi3mPVoZmsssxZYVJKyJABJjLCo85mnPvbGMv1VSuvDSwkqA8asQDr4Pc",
  "key8": "3C6kfeYXGb9mTMvNku28r5T1BjLjHxzTs5A1jfG1FU7GzpdJ3ERJK55kEVcqjdHPnFjvKkWGaPmDseyHUYgUaGbZ",
  "key9": "XHLBwemfBxXtqR5nDbzSFGc6j6AJzZsFNTRVZjijmqaGYGQtdwCeBsQgmRtD7z8eHJgJsjoEwMYjCf7LFHMEqoq",
  "key10": "2AaYjSaLG28D2npUqNm5YSQQ1EFK5hDiVNCwgHwbStxUWs3WxaBR8f6YGTij3MHLbSeRQqVRmCTUhNfx2j4LR1W4",
  "key11": "5LMAsxvvumXsiSed1PZhZAoy2Dn57rN81Hj3xRDRNxVt4Mi2j8gUUfL9De2FvHJoEdyZredG4YMELEZejN1b1vBz",
  "key12": "2cbUAw2ya9gtG4rrrUEmbFyhZeifEftDrQoF11GkqTa4XZ78WAvqocFjHfmSyqsYbLwu4SbTkCbfWUkrBzxkzecp",
  "key13": "4yE2G4JpVyVuUozByTo99ghuNsS17AMUh5iQjA2rDPJtRk46PPoJ2SVQDNjntNwWaUvsETigHqR9poFuiq338RTJ",
  "key14": "2Skxxf7SwVUZbDHnVcBZL7UdSPXTCrDinXWfhX3DjWZLDcxcntFvWDzMouP6RQHNZ6eVRM1QxktioxCpuB4YDjNR",
  "key15": "66qwKzqnDj6MADzR4e4m1nwGk18hnakB2CPuorMFndAksUVowyrWTcsGeoakv1WPdsN6ren1H9WDrHpHCRLRq9XK",
  "key16": "639f7Ami3Gx73Zj9UvqHmKpo32ftN3EbSNbQ51YvnLLnLGZgQhva5EweA22hVdoZDnudCHJczaVEcy95JAB8Yrfe",
  "key17": "53bMcYjZycYMhCZXEuxYj7iUrZV9BR8esG1LLkux699oct12phRgRqgjHeubRp8ma817XC5g9iJXWs9vHqxUocYb",
  "key18": "4iGGnNMoFQbqXivwAVV2ZJshbMUd65DERPqvMhGSdv3QwhTEvaPbXgYog478azqMr9hSm1fG4FrZcv3K9RrCqjJz",
  "key19": "4rRSxUgMLQtoQunLctb2JoUV7xQeNDqGFL6i9Ths7XzEngHeayjzSiFyMNTXWm36RLuaVisqq2MuWkusNTdcA1zf",
  "key20": "yH3K1Xitpu1CT9YGPeCyzgZ4Adi2RdQcaY4VCrXJh1GPP9EYTiRAhfekqi132J8zBJu6ohFjFR76NjVn4k3CVVt",
  "key21": "3dj8KQAukP7hk6KZia7jMDgM7XTQZHtypg1EFhHee6JqobrjjtP5PtzAQZdg33os9zDgYXrf8JE9dcecVDywj6iR",
  "key22": "314Eb1Z7Qzi4Pyip3da6nn1HMYqtVkMhkDzti4E1JWyEar9pefBTXsAZguDGB8L2KpeaSALoSxefPYo67zwMMCYG",
  "key23": "2z3ZWn1Kq871Hps6UiKYDb25ftYncU4i3J6fxddWCfrnjtikb2QHG3C1sRStXpsZgV7nEF3Ft6xhPDcsBqnHT4Va",
  "key24": "4ifLGxwum4FhVS8cDCtFxoC7VZo7D64bLrV6rcvXV6cBGb81ub8knE2F3FKZf3USxAehLY3yFXo4jZk93MnHh5eP",
  "key25": "3NvUMoVNvZ6iZ8Z9ixJuHUAgGXtX9pugSetHB9UkciNg3hxsYsyWjn3t8X36vQEGmKVRUUsrVJbxcD7hS22wt83h",
  "key26": "5kdwbUkN7SRNkZLHqbiv933VJ88P3icvH86eM76ZbonVwvyZPPv85WX7qgHiiUHRHjHLen4LsePSxmEsqYF9efhz",
  "key27": "29kZ9vjfsVtawWoam4MHTFm3bSkB6yZdtUb1ExoPMFHGmk4amqwdXsmsuoyUQvpnnsBZTTNUg3MDQbNWPHtLusXN",
  "key28": "2s43g8SPQMxttyRDZFd9KdKpSZ5UbPz1SLQRAmvmvo2PQHmtyfHTcFiKcLwQ26e1p2s2tKaaSsiXYsYnrLLBc475",
  "key29": "3uijx7Nk5G62P8Q5zfhyVN9SBihGYMwR3inpzbYVUDzeCWhknEGMbfquy86qTm2Dnw1nrSDjMDbiG3GCoovvbrDj",
  "key30": "3xDmutTa8kBL5crvVVLtmkTSAjtGPEM93A4w4qYNXkLqwCz6hMevYohpghc2pyt8LZrjeSjnUrFTAkW9KgNy8crG",
  "key31": "3DmJL2iYUudDafhYh4rBHf8rMfgXuU4nM5v8CQVcxkyRio3pCbfgDnNiwG8ZJumH3Hpvy9ip276BJ5H5p8UBhGaJ",
  "key32": "2wPiZoLD2krg2y4zja5ee91dtAR8mp3wFigSXU7B5WPbRc7cjvmU8hELnWdWCuGTKrq9khaBC37PZb1gSogV1hH8",
  "key33": "2eRaXgU3NFB2e7i5omW45ezPfgBRNKe7UkdtQH9WGnT1rGue1GPfm6jVB9dTojt9Ccpp99aCvNcKw3tVtbWDxAdo",
  "key34": "2Zq2XcGcCVhokSd87Q223tuex9YvKCoRAchKjxVeA71hbe3bcKEq4zCMBrpJG7ofYFJyHSS1yyGszhyFxdJxBay8",
  "key35": "5MXP9X4L2WuuhGfUjRtmWjyT2i4z5Z6E8fZ8Q7je1i9mb4EdSWUenMNVxfHTuZDPpKNQLxoXQrTyRbPpTnhRiYbm",
  "key36": "2exDyWsDke4zRvgxtzFWfcszHYrPqXd53cMpLgHQgBp8hDfYh5vYnJAjQJJ7HqckGMF3xgQs8kVoyqimdCbYQLjs",
  "key37": "qvhS7vmswMQNjCpw2Gf2Mnd5bkadGRxGEZFqR5vWMrdszHkTsrkJKjsQUVkJPDXCgDkG1ZDpsb4mWHTgGv6HUxu",
  "key38": "4qoZPPVpZwKA8Hd5gixJUKGsapPdYqFwiN1EbF5NopbtktWwEL8xaw4n4f4iLJHyqUpeFc6bA6GTqS5N5yknTGdM",
  "key39": "52kTR2g9qcJ6DGJFRVxZETUkCuDReXMK6U6Z1w5PU8D2Z2ttiyRVtXiNDTVrH75WN2VTDo4GofVXXKU2A5TDChAh",
  "key40": "3M4dYbL7SEJtWHnezocLSxRDd6ew77q16mBBkkwQoyuJ8RKzpHDTFXpmqGVncAuqHRrL3WVQNXA3Ep7qfP7VzuvY",
  "key41": "4m7B8fqxuhfwirKGo8uGsdLVJPxPbnpyQPv32jdcwVFDAxj9j16BahLb4Yv5xMDyfRmD6LG5HuMpxiRhNCcrBPCC",
  "key42": "3an9v7gproitGhRyXEwFGL4PXy1WcTp9gJPdFkmyJxJnDwD89WexbS3Wy5HT3eT8CCyyKKiszPZLHEWY68mnXf44",
  "key43": "5mXiwmGy6VFAzwBuJySCajbipetvGchEPvpJiJ1rrCViUnsFmZxYPqVN5n54CL88uCKj7o3R3evtwztAhXzjfwuA"
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
