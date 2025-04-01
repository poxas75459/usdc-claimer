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
    "7tTfDumkb2Hq8Up3Ru91ACYDuuT7ozCMGywieHVwoKvyELrhuTC2zA6XGbK8rwEFxXkc2yuXipC2Xi2Le6Gp5a2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zzBcATEQzudHs558VTbr73Ty9F6zXA7DBhnJ8ai6Qf8AUzM8tNEVrH8Eu2RyfcqMh8jph7hL7AoaB7CTTemByDx",
  "key1": "46AnRMghcj5ufL4WdCmc7r8eQnjHHSLZMFZfd1KLcDfGGVssY12seoh774bHJqx4sAiLqWy3wBuRmYKfcd6NyZKE",
  "key2": "kLR92HD1beLTgv8Sx74Yva28upN6gxmVaHvpELZQEaCD5XoPK6AKw23HnRtFodSGmp95mExZP2aFhrDeioCwqRM",
  "key3": "4fYGP7Xxo3KWz6B7HiHT9Y6wBnEDFQxgS5atWGAG5hGVvvyHaNYYA17T9jfPDHtttKY8X4egSQBpEbM9yGsE4co8",
  "key4": "4PFGhabqr46ntiJfeEfsa9Fw3mAfZz9rtTzKRbotEoA9L1WZX3w7D7KkQU35qeHzJiqPMiy3PAdXJ9G22S2WYb1F",
  "key5": "2khgDa1Gu2zuuBSuxzvsmj4ssaD28TzrQDRoh1GK4h7YymTDcNrsk6SfwV9ofDShiHy1gfjECKVVLeqUUvQdMfPV",
  "key6": "iiubAyYSrU5AizUYrznAk1p4wxQErCgUoyR5tmukvpC3LwoVDbkEN3VV5Eg87X8aRS1KtPkaGd4WZMSHmtqKhSz",
  "key7": "4NxRWJKXLsczQVhbN7FwKvRFDaDcRLuWmcF1K6hhsr7w9FmZSTSDSuVD8JSQ9dTq2GTzKhsk7datJq8ToRFEMKaE",
  "key8": "mbeGTNfo43ouYMhykirVPR8DJyprTDRhgyoK2aykWa3hbJjtDJ68SHYnteNFg9dqyUDPLBwtBho88e7rQEA4vMc",
  "key9": "2bPtKZepPKVJAU6GSVH1b65TnWQmCPjuns3G8toSF92Eg9RPhJ2M5FdaxMis5nYkq1br8XrthwGLkuRPf7n9FqmZ",
  "key10": "3h6pVfAF4gthwstU8jRziF4UpkFQuLcGyFFX6n5FUgBPHUvt8TCDEjZGcJ99eHM274bafLAz6BZDwfXLMt3KqP3M",
  "key11": "TtD6KSQrCSt3ZvuYUAYeZCm66yVmCo8keuoganErdhLS2BRUVckQxa7xL9M5rdeUvJnoUQWHwFkZ4hrLFzct3Yp",
  "key12": "4er9URFjHUJ8eow8R5cQ1Hu36MifAhNfJG7joW1WkTgNzGy61egb7TrqDEvhGY7ygGUs5v2ZT4sh8C7oKYifETAi",
  "key13": "5f8G4sxX5xQ42Sa5Mjp9Lie9uAPBmnRvXKTc3fSfJsuFGVof3UaH6GfasqrJzMU4ssi575MG4Q3id2sxhVQT8D4m",
  "key14": "4Pi9u34TXX3J7MkaETStYgRVHxjWzi7zkDZzDAvgodDvw5bvZXhjVv1ZHuF84AwXU51msPkbSvdk2oH75M7kaRFw",
  "key15": "3urwoaJzSbfrV8QtgkjJ2AnpTyHBTw8ZC83mw67NfyccR5atphYRupSJG6U6118Q2rBqjNCdVshtD9CJRin9SL1D",
  "key16": "5yFs3HNkDnxb8kom8BeRd76yLZgDPo7pSJ36nArkAzjd1bfoEjEPCbVrcRoKQp3AyHa5DvzkP2rL3jBdwTZUN45o",
  "key17": "nCLpdx98qQAMHmdPFvgwdnrZuiic8fvVJ1C13yQWHgChCnQezM1THGmzdFSmjrWV4aXmSRV273LBfryQEJQSAeZ",
  "key18": "27pLFq96Ts3NdBtHFzR1xV2CsoAnoakpgvaD9hPrCiQ6uSqxXhvtsWj7QT1kQKjEKaZY737fKMpuxuGEGAQ6LhQg",
  "key19": "2Yi2H2ebFwPuue5yimFHr3WWmywEJvJmEArHQtMFcV5gGt97LQuZQhA21hHG25gEzNwFuLQ8LijknSFD2qrdjDRC",
  "key20": "3npe4FCShBnCAQyiA9EvR6TwY9Bh4Zd1QNYJT8obgcFLxPTqzobs371HENvGYqmDc7vH5hHZDrPc6k4JHau4GjZG",
  "key21": "3G5yomcuUfR9Gs3bwVhnmUtKM4zpK2xesoYve3ji7zgQ8o1V1Y49YQDH3J3XRtwFhGKmi5xWroSkwmwWg8sbXcB9",
  "key22": "c9GU7nkcHrLLVt2HBXxEMFmSbiDTg3amWfyvQgeDEXwvGN76saQcne4uyWEEvbU7rp3JfDcv2amGUbRPrUDHq7P",
  "key23": "5jPvk9moD9K9LRbNSxMm2UmajD2SAr4MBtLx8dJdVt7CuApeN7UcuC3iXNVFVSd8u7ivKcgKgyFU3iYKA1iKJxR2",
  "key24": "jomQuYLZzg14BmMT4zgVDgDM2drXeRCmaz6xbyM3SfMLx3CuP1ywF9yCFuBFfULd3fNKmyJdmMrVrkfGMRYWc9f",
  "key25": "BojsAjQGH5Ddp7icrNcFQb9QeFpkYzhEEa1eAeYzchK4RjThh531WETvFc9efJG7pNdhnsqcUEX4F6JVtLptyYK",
  "key26": "3p6YYhMRuR4KvBeBaUihgQfTsN8LsNVaGti6GiRqDyqhbZWeRwBRgpekhnL2i7XTJ5mX6fFaNprCNt4e56be5CGL",
  "key27": "2PVt7yWKL2x5CfjFW3xQYNBd7jv5vHHzuw2kpFpkH6qtP2RpzpzBXhthSRqvpGUFYDB76WYJqZ3jVGzDeVWm7ZXy",
  "key28": "3iN5t1xLw6H2JqYiCinTC7Bz6VTzcwVYveLigjdmXFeSTFR6fbhfLrvmum3CFrQQfwgkdpxzyPze9K4vryUweZao",
  "key29": "uWCCpaQNaLUSCnNV8J1Lc4bb6KkKXd27fDdAqwmLXHJUX6gSHzSkpFERMCbECBBYnmZWg89bWuoXNDn8RfeFD5n",
  "key30": "5vgjPdrjRrUCCRsU1cWukgALMirpeYXwomzXE67NBb5CuLsTcRckbNX9zNdn9GXH9XekNUj4pvWZtXL1cCQvsS5c",
  "key31": "2ZkNkZXw6TEChbS7aVf2suBCqeqwBEasTzGgNYjRTDLKmzrtNvyc1yxBXyLCtRaHhKtG3HwKhhpKZNcViHF8GyEK",
  "key32": "2G4xUostNzD9AHrvUGEon4BCsuBRDvS23A1gMNJvGmVxAJ2TeQCSU6egePsU9Buqfg3W5UaM3bz6rTZ7KbTZ6CNq",
  "key33": "n5RKnMufJHwE9qbxdZpRzgjLVSC9D2msRPi7zX3Sym1oMozY2QdUCBiqrT7qo4TfvaUoRjjCe3dNtJwf7V4bXoh",
  "key34": "5BN4x7GfMwmsvQdYJ6mddHCbeie7NBVsxZfWCbQTn1pXi4ufEymnYa324ZhM871WDKnBQmTAp483BGw9BZ3exKTA",
  "key35": "AJkemNCthkGRGNFPtiUeK17e8w5Gc8WUvbxpKyNT2Hez3NeSYxf5DKNKCiJ71VxJyUp8MqjeQSMDZ6q6wfLQXsz",
  "key36": "29Ay6ZztdpNNnb9ULoUemHgaCmPG2Wy4te6mDmtHYwT7SUfbBE3v8JHMT3zBUB7PuLQ8iyGL9JkBmaZ2j2Q9fdHL",
  "key37": "tKZxijkD19m2QBgmmu8iDYoyAT1kuyDdy1Q47Ge75P3BiCvwv9V2P8AvoKAqqpJDJ4i7WZYJ1Dbg434pepZSw8q",
  "key38": "3Kkpg2kXczd9yUgCoWT72QkNFXvQYkichXGVLgsSJutW68Mep1U2FQvubap71FXBC4rQQyhY3k8fBQmRnya7VJcx",
  "key39": "yCjBzfgjJt1DfjEV29FwpsGRwgyFwGFSk5BYAXw3Jr8aw2SkREPeTeGbGkC8duoMhBcVcRqL4r1yC2kJ6oNpQQa",
  "key40": "246GYvKsrQj4hj2Bz7kp6Et7ZYZf6dasdjsFYfXbNBGpSm1qafPLseFMkwAJ9fZXA691fi5WTQCXUsGSdA7ynUAU",
  "key41": "2D8neDjPtoqFVUqQYcPsFW1S1iwMEdhcbJkTiQyFhotcWgn6wrdHmDvQDMwLJXPdY8BE19T2RrP5vmij5tiRTHFW",
  "key42": "5EC7SEgibxNiFd7rb6osX9URUBL1U5W2WkGVeW7qFVbL1NWQUnHMogrsXVzEnJxdLUExxzG6JXQfvA8naRZR5kR6",
  "key43": "3aggUibA1CgsLJXkpNsWXBvXFbzf6r3A45Bcv6pxvqNs5XxntTrqiVCcgnNAGWm8Th9jh5L5m6tNnvbhiLZtGE5s",
  "key44": "3E45tS4rWfMS3NMt2Ek8MYjKDo2YLzCrtLmSbHbsrpZBzhuCvzCSjmPL8ndgpyBs6KSaozmiJrDNyLmXUZrz31i",
  "key45": "45HJWhaPFyKqXaDMyFVJ1ztjyVyToeLVZ52dkSzbbZvTH9wmvhrhYY2wCc1WqyfsTxEpviScghSLizt8Wt5PobYy",
  "key46": "35GX77HFtgDs8ggKXK4UVnn5JXeL9jg49buqyaLR494JsE1w2RPgmEiFmGqjVqgr264N5b7haBqbN9AHhK6tsoqw",
  "key47": "5uSempL1wqVH88nb9vvpveZHCZnuwP7BJXLjyoZC2zm6wqQdN8fvz7GsS1dLWDTNUeP4mRcEzRjPk5QnQAWkCfrX"
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
