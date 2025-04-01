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
    "3c6G8P1hwZVeEWnXA43tAboXgdYsxddmbdh5n656CRoLtpx1Mf3HDCQe5ajeHmUv5pNZy7yZd3ZJ8R6Q8DCwgMfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GrLW84V7avSjY31jWFDAt8Znm3J1hhzVCu4tBpBxXoNZmNXbpvSHyYgSRrxqSQwcVN9YfQA6ThxwUr2KGnbDwYK",
  "key1": "2pwohiDnHxSATF5kcVFaEF7aMYfJKUCoENDtpLHdHuAzE4x29em7kT7uQe237i9rPcCrmmyAVcHSYKrpBJmUPeNd",
  "key2": "5RFxecvLGo36GE7th9wL6pfWRVjthaRhvQDtjn7abCQf1BJvpWsrF3WtHZmqQvS8MAG5BzDh3Wrv1FJwEGKhwdCC",
  "key3": "3qkhPg3qbiigvgzJkRhzkNhyqh2Xeg8bLpytsn5gNkMhSBiK1axbFKALYcZCbz5XjCVtERWPEmVJrQzhUDR4higB",
  "key4": "4x5jT9B6j2MeGaVyh9Vf9UBh7YWfbEdEnQpJxspH6pmfLE7HsuqshnwYmHX9Fru7EoqDh9vFzby9TWW4d2Qg9uZb",
  "key5": "2UwYo1S76WiNedvQNmPqH3kgJrgw18kYkKqjrptwWZLUNkPV19WgJCVicHq2RCDemKL1t8qupVkGSmdWPid4s2xE",
  "key6": "5EZajmRASgotp6jUrtVy5Hfn5nMhXF1P4tYqYBvn4efNRmphdP4FUAEcuPfrUNT9Sqpoi6STH25DDmBrbDuC8xqj",
  "key7": "2M9YzoMEsQbNWh9FwaMqJnMHKDmQdteusDmx8oURNvcuLLmiAX5gy67fiYQ1WHDnwZqi7BzQbbJortXjKxYrVnzf",
  "key8": "5tcEacvxV8LueDT9hhExiKt4VfHNh4jfNwEwZAnFdbvSjmxGJn58DSp9AUWKiLAi5ZfLgrpG5M3LTMQMB89qZkts",
  "key9": "51xCb6tR4WG6HnTCPeHHzvsZQqaVdc4ZYjWBwCXFhz5Y3H6Hc26sNiceEMjDt3Hy64JsHKTvMRG8BtR8C66LCwZV",
  "key10": "64UPRcxnvVaPJgiPNwrqiJEgQgoCKHvsaDmeAWrC2tFjDU6FTHnGeSkuCMLM6SwuMbggJ5ETbgFH1NMo3YoEMfBA",
  "key11": "5GqXZaqfhETQKsBKWgZ7FesfvfxvM2gxEiCA7esQL8AvCU7Wda41UqW4eoUepQuzpQ7YikPnte6myAgfaPkYnMWv",
  "key12": "2AJZwPibXZEh5XMnL5hPwfDJEYmW1HwRYzU5xbpCEa1vYwovUijCqFMd3B5jE9LmQXKM4WgpbD4JmiwuRHyMrvPj",
  "key13": "4EmNtMBCiohJc3C5beU279ZhLVvn14pyouBfRRBSAmRjn639M3F2UqZnzJdWeqozYP4QvrP69TH7DRWiL9XEuvrM",
  "key14": "3tiVispMcuo59HVM1zbo9enKR2sJUw1es4h77h6vEtamViei1snwwbAX5YQz5wCTzNcjNY13mLmPJmtTjv1MwvoH",
  "key15": "9Px6yhwTqRyacwyFSDHmF4Bff2YDvdYbeUhoen8cyt5NtsaojRp8SycCyryuBUFpyTrkWRke6snLBHSkdT4GUAV",
  "key16": "4tzyJ2LJkQbpYpdyV1ZYTSWwYqqZHaVjWpFyvRisxUYNyTNHZk7Vx4TVb3q9vrDvf3eB5zCzU1ZNQgfBBbmaazpx",
  "key17": "5hrijWkorFrqDyzdEKiZJAoz4WwhPX95nS6VF3EdgpSkBWhqsGPBH1ikFq8hhrGFV9YMctHgMgPQ74uaXcuHmAnA",
  "key18": "PZqfxg3zdVHZ3npfEipyMiVcA4VTiBMmANhE1jJb7LGZnetL1HkaKfFmbFSXfzF4JVBvkMx2k4fC8TdKoZqhQGa",
  "key19": "4X6mZ3gp7pdWcJzB32NJ8A1AP9RdSMiS9SmcXEtLSNvMGkXE4mJfgjapLFARed3oCFtHSsV7R56yAoCQMnnAU5L9",
  "key20": "5p71bsjGKjtVEdkBYkMEvWQepbY3X8v94SQqm99iMMghG4mEebQEneK1gqVHwYjkPWBMfyxtYxNYwEKpbUoK79KB",
  "key21": "3r2PmPLrPqKNLxyfsSS5uqzNdz4TzhBqy7uNQZcUTRcDrFpicGvY3WaDY9PzwKSK6oWD4qWE12GHW7bSEsa4nWY8",
  "key22": "PDEzhhPR2udcC23uUkN2acuAsywgg4miF4UCxXZexyrxmuikEro8ssT4HLP9L94JhGYQFbDYvtLXxdPAwcH6khZ",
  "key23": "GJgzUtL2wq15NwJUHUtJCXPqAu39KnYy1Jk36DixRTRbDKVFdEzxjAkqw41WpUbyXp4GyMZ4tX72YJXYGJBCQtW",
  "key24": "4DqWo8bjtcJYknuzHcuPcQWcBUVV4hiEreUV45KRpJDyqMcKpdueCNrGJB2hwPwdFygsegQTryNdEn2EyEFS48Da",
  "key25": "2i79pqoUNpUHGmrT5FvyqAcUP5fmiigjpndP1RxL1VonknHaqwNwXvNoykAx5k776NgFoKi7YudgURKrioFoKX4q",
  "key26": "5fZ6jqxmn6bnxEFPMrS3q5GrJ7bzkrA8SmsLJaZaA9HTkQHSziXU8PA5GXx5Jtm1UMZHAJPH3QnsiTX9CTnk1Wkf",
  "key27": "38ZKb2WpdirjESjGnzDM34BawmuHx1pAdBtDxujEZ4upzchdSZGq229sJPHbKSoYWGrpodubwaWhKSVRYC7E11LS",
  "key28": "4khH8KkoAXjqobqHtUC5wjaTW9FDEaNShk8qSLEW19dKuaFs5CQqREtn2rRTiVLXDcJgb2kqiKZu8Uk5mBJdB3t9",
  "key29": "kqZJK42poS18ceq8kP6mXfgY7wDk7Y4rFcoQEVvHkYZAfkZQohwcyYm8GwVxnH51tHnCrVCoYsQwetk4JgVWvFn",
  "key30": "2bMGBDcfCQ76MiFnyCKpk1geqHLZGwykEqrXctMxhiqVediEsCYNS7Phzx4eNeuyhjuoYpDZpKucdNq1heH53Qp9",
  "key31": "5GrmG1ghUwrjPbMxgYcJDsjrhmjw892WG1WpJQF9Qzdzaq7EqhyiUpbGjG2Fsio1jbfaGQSuLfTFkboFnCGF7WYX",
  "key32": "4iCpDqzETwaXsHP8f9g8eyhVLKbkQ4fVJYqfYRrhqtdfp1hGekCxRbCXWX78h2F3XdsWbxEXV9Gx2x9A7fWL7En2",
  "key33": "Bt66MYX9p6zDAGBJb9YBjEG81XC6LWkFtXLa74s4jWfpQtXxUioxrwkV6pn3UZpJMDXZyZAdxUqtX95bVPWaunu",
  "key34": "aknMGTPuuV39RTRt3Zy6CxY2ZZTxVyxxZunRGHyhMYwzMLxeR8DwEdcbqQ6DMa9UN8GYo2jKe3HjPDNCdQf7fQg",
  "key35": "5pWTRs5THf7EjrfSFUrndKt4Jj2V1CnU659om8sVoUPbDa6vRXsk1eFh2XrUTBb4HnckptXyC8xpTcnJdAAt5JLk",
  "key36": "3Tf593d9EkBbCpW2JaMQSX7Aw4mgdRruJjZvufmqLxFxLE8BvESXoGLSYkue3WpGV49nYG63AB7cfE1yYzye9doQ",
  "key37": "aC4ndnEkJ5ueqmseswVPppBFD9GDUUbaqN1jhHHAbyhNyPRiV8HpMimkarAod2pdA1HQ4w96m5Skyy9AEerseUt"
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
