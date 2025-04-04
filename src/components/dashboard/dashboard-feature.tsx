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
    "2z8yW6q75gzksERQoxLHSweaCfxk8r256GxZ5x562sj4q6Zf4yaf3XYn55cfjLdzciLAMiDoN8E9jFQFRiwB23Ls"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ttcGPgaxD6vtVtGAfzhgpugFdDpPSzon8fTYXZ24GrPoi4AsZ2jGF6ZBTKiYXHVLZaynSFnUDvkZHgsEDHygnBQ",
  "key1": "4FUbqZ4L9mFJc6oG8PekzZPKaV7kWBGumXdRtjPmfT2J5YeXW4cZxJYdkrDLRunVnjfz1TbryGKsQPWbcUbvzDbS",
  "key2": "o1tDAXTxT1Sdmv4dMbrYmuBcncUUUAVotPGLaHYN26kFPUUSBUoY7r7nbezbFyVu45hMGgARe42soxYArpVjGdh",
  "key3": "Bu2VEY8McKafwhH4LxA2Fb1e46edP3dnWwuN4N99Wum9hk7YCDTUKPD3H3R4QQUqUiNFbYJ3fVvvsiNmxBFJUSX",
  "key4": "32YyqS3YydmvmTE5NVDHEu5hErn5QA3inHP85MRea2LE2bM3UtaEZPmR1cS268xhbQmW1bypCzjCRjDFEa29V3UH",
  "key5": "2M5jaUT4v7b4jGwjYLQNzS85hKi4LZeyk9HhFZPeQK2Bq5jrm7tyatFxbjX3e1BQnFnJayUyeEiJ6M8d1A8uTAV6",
  "key6": "2T6zsg92d8mHVDiaUuvA3UoXPnYcj4eXt7ec6mKFb6Us9Zr348qRHGKbu9cjhx4t41c1vansq8dAp1xSxyszz9ty",
  "key7": "5AWAzvbf4m2qt2a8MLSjft8KQMHicCvuGWBT4ipGukgKKhvkbo73mYf68cgaC67dvdtAcjQk3dnQXyXzV1Y2HAMh",
  "key8": "3HLsKsfe5qSvhoEc5cdaSgTEq5QsgoWnVSgqRpaEBqha8cBMvnYEbAxdvhy8JEBuSQaNWpVma6oNh5TPNCVvin3a",
  "key9": "kvT2YJ3nnNqBH4QDzLMg1dZt9hHAaiEgDAnRnWPke2ruGtT74fw565xeBBB4pZDV26A5bwHw3U4TVtLD48Mw3w2",
  "key10": "FJi54zw5KrerW6JC4qNfjpVv3EST5qNWdN831ek87qsvg6bquVc5TTw93udJAo9TA1msQrMk3io1AV5FCirmnzM",
  "key11": "4GAWaU6Hr7yYPpKWciJVgZfTBPMKvEbJttwGcDGSBj5aK6GchTK7autd2joY6v2n6ecX6DyPVn1aFbSYDcGNpfe3",
  "key12": "4xiDeBK1otEZSfuVHd4rK8vv3hzha1QsAnesrB4TV85aru1CZpbL9niyZFbWTGLNBFC84besJio3hunntjAYf8WM",
  "key13": "2mkJUPZG2Z54ESsj9toDW7T9mz1tcNXDwdFv9HXBdkHnt6LR6qyhEpsSJdyPQM9vEKAECavogM2gF73YBYnyHSe2",
  "key14": "35q7Mb6y4ZvYb3ws1r3GQP4DBjhGH7aWh86L1rgStQtQgKkDf9XyBwBjK74Hxahq7L8Zhdg492V8HJyjwc1RC2EL",
  "key15": "481hWJyuczubtDnQZMV9uvyFC3pxwiG6UcXb2bZscwDa9i9iHrtCU7D4D9QTFmEhbzyD8psDpBQP45L6UYXbErc8",
  "key16": "2yXXRhYAZaUi3iBdVLWS4wtUMKTjQhzj5rWKTpc8qP7Ja1J2XqGuNDG3XdD3PVVK8s2E7PaScZCPhkfgaTPz4zMr",
  "key17": "M5kyTGD8T1eexMd7aNWitdDSVFWsSWrjKhjqu7xtEX8hcvfiZgBvzFaUvBPvbdYpCe5C4cit7yrfyj55SnCy4mt",
  "key18": "rCB4Vn4S9bCNxaxcnJgiVVKSovzg6217ejMTaC4JcHmUhJoGizX6HUfmjLxgtggpVTuv71jCJbHB8GEeDGHkbYE",
  "key19": "5X4VpsFS1u7yNpmDyuDJg9egAqqiUhPVg8r6RNp4QEDCbtfAAY31M9MaraMWCeQo7aMMHivsWxPuSvj34o5r5f89",
  "key20": "4bR2PxwhvpTk64DrPJJ75iLVwbUDNR7sx1sMgJfbUykzxvVbKJQFuBbNmBwBU1TLv1vHb9RHVjTXkKJ4f6rRRf91",
  "key21": "21gMTJzFFcUgmUV7fcEvrDG8KLE1ycvZmT54NKS6UKSutRD4F1ccCUhCauj2mdf3Zh4ggJsGRP38M2CsMCi7gDhV",
  "key22": "7EhmrBbp5kqTgx5D6xP7PiVVhdMvdFJD3EYpXDFvvDXfF4X2GqqS4sULB2zqY2DgZRNhv8BSeERwHg2JG1JnkRd",
  "key23": "3nrKJsbheYMg6fHDGgNJ9ygd7exoRUhbQefkPmWSFYgrUGwmCpuXWEwRv8S6YaTWe699L7eKhfk195FFPhtiaTKt",
  "key24": "5vPBR3aeAzJmH1vjU2UY9QncKasAqp5QYVZ4gZx3chFw3Qa8geeHproQQixUoSgST4D8RLeFnTh1pmpvMGv11L93",
  "key25": "5mFGkXVm1Es7N5XSKQYmTn81Z6LyStYLFXRRJ8F4zEsH3T2b6nD17qF98MJBZ8WKMdZZiCACfM6e772diGdTyYrZ",
  "key26": "3axt2Qti4GTAbp7R7wvEsZwsZGxQ4yf9fzhLPx7erVR8bKH4ZTVvuuDZ9G6UVWeL5QVDCNTtSsRRNLuFUiLu4zcg",
  "key27": "2GDFgWsDP6Sfj5wSJ4Mmy3Cx4UsLUKSs3Dejnh4GFZDJMLSK6GQEk4gWZgDx2gR74c2GmXYXFB4R2QqB4rxDV3tA",
  "key28": "gg6fXerN9KcMtBfa3oVKekX7JBRTfz1qg3KpBV1zxAWoeZPGQY98zXcUtFwTbGhHxcXmAmfSLUAyTR5S22ECr4T",
  "key29": "4tpU94brTrJh3MHYb8Q7wiPDNJTJBu9S5WeitJH9AqHe8T8Z4E5h64QfrMfh17AipoYTvtZ6R7fPunsBoTTAY7TV",
  "key30": "3UoCedPcE87VQkWs4pwpEiVnJf276VtLrG76hBEe239Ym4GjKMwV6vLHnk5WNFQ3siUuceg23f4EMSAVY5JbT37j",
  "key31": "661wDt8pXkbkrZy8Ywtk9rYByZ3yfXZCvMkRdMdmijQdMGR4MrkyebK6k3iwPScV9xnNhKCxoywxiVbx9UQrdQQ8",
  "key32": "ieXKSRNtGvaXKc8ZgbdgW99eXaetooE1PhALFFc43DPinL9YMjJ4X1Jq88vg3QfACfjAJ6KLUYUeLDM9Vasapic",
  "key33": "3Sf4Y6nEpmEcHUWF3HBDakLuyvT6SP8CQ93UhDozPCrydELVbhMjKpGyCHFGgEC7ZgoQGivQrQ7ngASsoNAv7Qc6",
  "key34": "3nQUUrQpQ2yk1Mfo6oyQ6ohmaNRyuEdCa4dKLafuFmg2K3ym1kg4dm19wbG79dmunukHtdpHkJrKGBqQaGYHipgX",
  "key35": "5qWrpTYwE1f9vFVUzjFLrRdykM8s3BLUaA5fyZMkPS5SyrxQEppcVbYjxQteNF3sasoTP5fWV3M5m8CxKqeSpHNb",
  "key36": "61bB3Lw6QgJt88zpbbyfu3jSfvvC5gVtQQQDmHdW65uqJahMThEeqxjuAc22NAjWtWrKnCbq8ZnDsCnSuqpeYUED",
  "key37": "2xSbKcXJJe3Jgfv7abwhL9JTJLdSe5dVnZUf8Au65EvAUvkuLETybtx8VaoRWQdY8XBbZtc7yAc7jBmzPwpsKvod",
  "key38": "5DnzgUqh8pDdLsHwhGxg9uBsM1QKHV8jxhTnRPHsEtSUwMz9Xpdi6cpThV4futam8toYUQabyzoVq7dd1FeUzFkf",
  "key39": "jEBCs4nCFpQL494SbfGHnHe1E3bqr3ZqSbUBgV9SzCABLn3NhcHpwzWN63hZCVqjgDd6mbQVVfzAkcFfxSSezT4",
  "key40": "3K3bzYis5uBhHZefwe44HVnYjotu6mpwXfFxCuWs4dg7BaNfuByw5ToLPSEpzZfZTx9fkXQ3cMT7QMrnKRXMChQL",
  "key41": "ACocf3ZHcU6dGGRcbuRncxLoY2WwWsRKonJWrYM1aSp9yN1QyD7uctA744g6sYU2zEbiZHSsofyyBukmhxBfzFj",
  "key42": "5VGbNiKJixHiByrvtJJCSKRjD3ZBGrHj9fzibFckGYPjY4e3MBXjSQ4kj9m8cviQf6TbK9vHuE2AhQ331yaVjUZr",
  "key43": "3we6BFcjgrcnGpDU3KEdnGHx1fdPK88WwLJc664sbRRNwDsDwsvWwaDZNK3SHfRGr3kyxFzEik2fgvkCR5jn8zWB",
  "key44": "6YZGTHvWXANrc3e2L2Q3La3yNT82szXya1dBVTzte9fg1YDAGrGqjzqBGb1sEQK7pquvg8h8GBhiyWJ7UqQBn4Y",
  "key45": "3Y5xMDPEjAeELhc4xAzANDSKNB3EeLQWPjBT6gCFGjc83igHUSwRvyUNeH6jrq5w1dBWgsUL9qWBfhJuGpCYXf8s",
  "key46": "667J4UtyWpporymXgwrcVT6Jz2WhyCW96L6NXa7BkU31MgrHDQhhsAmkSVRn1BMLPhQBy777veTZnczmXAVLA3yZ",
  "key47": "4peRF5q6Mzs8QmoXBfZ5omiYw1xwZov3XCruZg63Sdn6kkL66zDCkB7rQhcmzwgDMS4WQ9CSRrAxxiPtBwUK8gUm",
  "key48": "3LWwdvNqtMdU9FChyRMHVX5ueyUyWJBFbStzTUikArX3CMZCzMgAfQRf4x8xVnznvv2hUTuWPsU7JWem6cNobLa3",
  "key49": "2dN4QMG5Vbr6t1zFyzoixVCoH4Ff1NgxY9h5pfHmuJFCYwVWFLsV2gXtsLRYSUB2hvB3f6UnjXRRsjkjhmbqHDyW"
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
