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
    "2gMKtnZoDHwJEDY4Pr4qew744TtHchCNFK2hPquuDUMBNdN9fCo8BLU6XAdRe45whipBYRiAYpKByUJKKxpPgXQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ahoPhrP1u18kHGEpABCSa7ZaeWLgb2tL8YZnXooBu8PXvVs6q3pqf1Z25pMnCEHyN7mornEE2fKTNEV9i1gqtWL",
  "key1": "4aEnjYxb9d9EUr3wS12VKbKP3WHdRurkpzQiy1t7n31Xkapn3Xngdn8QoNPtVg7ew6XeKJnkcohmeb9oAcBcyPV4",
  "key2": "5cSFWZf3Ya2y6yfrpfEBiuGxrMPQHzS3YRt8Z39vZ5azG68tHifnptpwkUkjV3aQFZFQE7KfUJxiMv92NY9n8G9g",
  "key3": "2JDXHvrZDcrM6NxitVumiMMLH133qBAijWw3U8LCYQchq178SCXcpUqU1dDzCp69Rig5kEukLVRJXKCAXKJxHdxx",
  "key4": "bd3v5asn1YVRKDBbvvXgmofbBsHcZ6vhBzmGoBWtxzjut6YjKEeXhKQ7wqHZw6Q9vbBY5tSJpXz784wyPNAgJmX",
  "key5": "3qwtQNbGK5EJMRggRSBB151Qry8JX9P7tq1MbHe9aFucYjoCScTDKg4CnMTarYaGvwugQabpwRopsNLRQ3ZDonv8",
  "key6": "2BfLiqwUZkXqHcsSJhGmPiqErQ4Hph3kXAn9nqokuJtp4TnHatos6wFdVCR1Fq1RTDZsx4TEAaTVRyMapBcF8SwA",
  "key7": "5VuJ5Xmm38DzXRvoeQsszDUGEB9kUtGnKDV3D8Lf5yGA4vzy5fq4FSV1oEkv5BCb7RGCYHi9betsy8gmnS8caccY",
  "key8": "M9VsZnZHiMWGiGdsm9mda6AaMGeeciAtzsjrYmQ2KPPd1HHZovZLgFPovvGDA6a8JQKro3foYB3o8VNZUM35BTM",
  "key9": "N35nE1hdbmtVJvhN1CA6YxUag4iHc4ShsXVRsMEzV9emCuLojBUSr7bBYJaT8aRRndF3nM7MLCVqLSACyVe3YBE",
  "key10": "5kNSDcFkRWx1HFUvWCucoFHrs8pNX8mNbvaPwYRQAkBXCtPyXcthG9YAurYiHrR5qwjGcqJHwEWwr4MW2fBJX9P4",
  "key11": "4hTAqiuTZECXN48acdZm5f6WKFz6U68CwhvkmBNqZeubvv7P4FMC5M7xoXxhECEvEyAxZB5uZ5TfDGaPp3N4rd8r",
  "key12": "2KapZCq3ijZw6hebQcHpY9yFeLUBMjYupLsUtBq41fjeCuUfBpDpTbu2jwD5gvvL8woZosaXCjVqQxxRHuRkVeEv",
  "key13": "5in6Tw5dQecdbLTRyj8KUH22CTbSnAEhCBkDqz4EPWJmsJYJ7q6ZeJCnvv9tA7JxokVnm4oPdXgzfkGX9dyXa4h5",
  "key14": "5pDMEZBskKzRGpnToC5YH5sWkaqZA63m28s3MizMNs2A1M8rfq9n597RMudmoDSYz29iKus3aS8WJ4sKycAFhGcY",
  "key15": "5vsVqiKypkF1khnqtsGhZZmWQGFfw4tZQjxFUbSvdcZ4HNZjTy95Qidq7XY6hY7nr34ssSXb9ZMR5MronFXxJSQA",
  "key16": "54NKPk9vWvsHpcozBRy2rJHAnjDW2Tj5u1RC9UYCTQSFgRxfgPYzcQjf4uJRuoNkw5P2sy4YXvQbcmVnMUMrvYmr",
  "key17": "46zULYb1Xj6rh7wTkigmPkBz9dwy2fj2ApLJDHzT2CRKxzybMT9uQDf2D5ASH7rj1CRhMqWBxgbFKUNUeMiN8fbV",
  "key18": "2YBUtivNjdUYvMgaVCs4Q5MUpLxrtfj682u35xtpksMMmqZcqY9KcWEvPGPRngTa4c2yEHGRNiWE4KRNMRep9Pfi",
  "key19": "v4TtYJa93L2H5MdKLqg3naFhtnqn3nFPGHnuibzStdFRxD4rbrg6YpRqskMv8qn3sb7191CWVWUDKpRJqkLqY5G",
  "key20": "4VDy7auTGBn4zoJBfG8fT9tBB33yRVxKG5FQdu66rHyqmCtkv9VhYrjTEZgqnvJRZLUYU9jgMxtkXohZZ9LnZLm1",
  "key21": "3GaKLQ59AYTokquKYNgDhbPYnzSWnYvUhm8W3f9WTpZue2mqYtZQZ9bKJoaWhKZX6kaRhoT7MUZS5xDy93ghe5fb",
  "key22": "3XavxruDhQ2Qj3jVMKtLkTeu7Qhf9Km9gmEFSYhbvEtJjLbES7tuWZddLasqY9dHNn8eue444mLf83R54pAB1Zro",
  "key23": "4xLJTNDsrXwP6X5nQzdjpHmddpCPoSVGpVdgKnsWxKTvJ2K54eMH6VTe1pnvgjncVPMedd2K6fh7E5czkko6DkPc",
  "key24": "3gNGbGukvf58i5sVzuPvQSgLJKEeTBUuNg4yUjvKTiw2nXH9wCbYEYwbBBEiuvAebeZMSE1wqbqAiKfPWiLw4eTq",
  "key25": "6512R1PVujwVnHiDJteNKoXPJyXvQfofFQ41LJieJY92D1YMLfAC2menLUrWQzwWKfRL8JydiDvTz3UHP1kdivBJ",
  "key26": "2Q5d1XURqTP6HBvEMEtKxEbgVETbugiFTim3qUh6YzNc21sfopiRAvfUsLjcDgBgRyCZMM8ueJuW7dZqqF4PGpyK",
  "key27": "3at6CuZdER8gWr56ghVakWBF56k3HaL9FF5dmxRcUS9iHkaAaUt3BPBJVzEDGa2oQX6ZoMVfR3eUnkNmU87h2Gin",
  "key28": "3M5rkhZk7qhooaSPQR8WYLq3zA7uwC2BuPrqw6jGLrb3CeCZbAyFkqq2dAVcexrboT3a2a9beg4bs14gzNpzj8Jt",
  "key29": "4i4mEnYkjWPhXXxD4ArFhWsFJzPaPPvUjTt8xj1zHgUAeR5bfFogf82fSXqxL5okZztoP8daJEgoWpJyPUM2UDMY",
  "key30": "2CdMkDq6zqiRdjMpp5muFpekZV9h4z76g58hqJhHVGf1aroaSf4y4Ga5Z4HEwFaEr9Ym6gyEjn3wfYZ8QegxoVww",
  "key31": "33JD4VT2Z96hrpxkEv9L1Rde1RmhzEsZKmWgkZvfyCE2oQP8fnfZPrgbzrb1iF2xCXYwouRKs1GAzhVAzjhMLJRX",
  "key32": "2RcwLPQPEXEc5nGuQUFbybGL7uFc46pf43ggB8p2HmrqtLcj3BcQjvxUDheTjEW1tBEQzuwf6ofgQzrYZMgQVxf1",
  "key33": "3Wjxxz5tZs3sMGeVA2kbHgMyvGwpetyRr1rcG6oJue5VKLEQ1V394W5cuEYbNs2vAuDnpq6Q1ucYjXVrzvc4dX1h",
  "key34": "22ZoQAKSg1GGa8R1bXKjoiB9LqHzemMf4ZR1AK2J7KCtVpadqWLB4dBZeGqXfSEKo29PwVJFNREnQnsVy3BiDBYP",
  "key35": "4LgZ1T59UQRgWENmtkbNUbXzHGS2NRpeftdqf7hHbsSt2U1GRWdyidXAFPVLZo9p8ESdVJSDT2tXTFeagHdpXcGm",
  "key36": "31RNMdnHXRZzeAnDhVf244TUijFQwLbstfNBo7pcUghpFBt8uhbLQaFn1TX1zwt2KS4aBpRLXGGw4Sr5uG9qLJZr",
  "key37": "4cUUAT4RoYtMzUmHrMjFM1Kyg6L823sTmuTdhw8Y4cdorqSTyMnD4KcqSpF9AajsVNJseraM4bXGcC8aAMaMnKru",
  "key38": "4vF66WUNwnXK3KKwHBFpuK1K4dSGG5T11qQLtTy5uaebrw4KQv3D2oEQAMtMZkahL9mHP8MckSJHPxETu1DJTmpj",
  "key39": "4XabPqZjLr7B3ySg59WLbSnwajKrLZmwUwM4HyirxwoSf7CWZtmeL3pEbxQiYGdSgq69B2odfGXadkxNrF48xXGo",
  "key40": "4Cwm6wjExvBzsra2u2YcHivqSrnEifKLLbkAz85RCK1P8PanjqTggjJorHUJmEcJvMbRgHvAn78hhDrA8y4r9Cxi",
  "key41": "5hwxTPfp44HPbVhWXqSP5NHpUisf6p941dFnHNm1vqRDef88owjaQ7tgyA7NdDBqpnW9f3sXynPJNGPAqDmx7xYb",
  "key42": "5CkoMKzLYpWQbPaKCM7vGQeR5oXVjeKQipsXP8qtVFepoEuZ7SrsHDUPBCkJ6fgkqp5AG9WnvXjv4T5x1C6txcAM",
  "key43": "5mak6fWbWio3XVTysLKq8HFDCk3KNKJCrAQdM9PUE18ga19CtXbiHX4pC1rxGeN7eXVBYPJuCyzh2y4CgiegnAFR",
  "key44": "dsqitWFpyEUADYURsdao9f7E1JH1DfisihfuH7W48PfaLiyi3HxWvppMHuRNj5yL1kB1oewCRJiGkaZGrYjDkAP",
  "key45": "4Rmc545eUUCbZe8VQtJFHpPT4bn7XLMVNef8pAjq7WFUmtrFRsUXrYpEYs1ySchCksRX812em5M8iwFLdtjio78U",
  "key46": "2mQmLLnq2wEEp5RE3xdAg7Ja3c6Pa8kWs4gw4UXovfkCS5Vj4xZZqqYGL93y7WUQyWrxSifto7nKwj8Ffik6g93F",
  "key47": "44X5rt6r1z1yx4i3f8nQk7RTUvfYFkXdYz3gGA2Y3rSc5JxHR2QuRsDsCNxLtqYy2NkTFPPBVW8hKfWGBHnJgtSz",
  "key48": "3sTtvDRvEcxweqAmu8sUrJv9ss7g2GJUiqDRt3oydpntG1soJpg6AEQrELX8LwXHf5CcYnTWX5PGPZFEV3dcLtj8"
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
