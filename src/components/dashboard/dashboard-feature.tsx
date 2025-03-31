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
    "5EvtzCic6FU222H99exjECB8PmFTDg2VJfzFgcwfq8UC5b4vxKF7RSjHKAQimp926SMHCuekZ3CbpiWJ7XkWHsZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fMZKSCnoqeccEhwY1abzdtyhq7fgwps4fkaotHo7B7W6a1WoFKNWGvwZzztMEsrJUybHSuwW7524b4o7SYS9RZr",
  "key1": "4qj7oZtxvMQ1dP5Awby519nvTS4pGF8aLtfg4J96jCDu2Csrg4wC56dQqC9o9MzdQgBzhyv1RAS3DmsNbkVpidzH",
  "key2": "huvy5cgFYLghyKW1DoStcVDrivEiH7mtcGwk9Fme5CwKpatf6BS6VqVhk3ZeohgN2fazoigMVw58SqM2PdXhBQj",
  "key3": "54cc66t7p4gkRr2FuPXC7WpVtZB6HNojKhxAq3rd6kdFcTsMc2EZp6E6wQmxK7mUp43cGWYU6FZHyjGyAEqPBbq1",
  "key4": "5KWXKoDE54Y7ancVLC8xiHXe2sq6jxrkH5QHW6oLxwAngWYe3urrMjMCjuN8cqWHkVEkiS1boH3v7B97SdJHsoWL",
  "key5": "5SuS3bvhpc8GcbqVJXEaWjy52eGFDV8d4u5wCHsVuwRHaB71ru1FT46LKPBeNNRVkMbcEMQZPejLe5weFQqrQYYo",
  "key6": "SS5wJPXDsXZwKQEUqGhb8SczEYkQ9v27z8N19rWPA1hHPL3FzQVvk9t9C47pv1KWvGE5Luk8aYDxsESpYmG7Ukp",
  "key7": "3hVwooFhz93NFP4rh6t5Azc1hWtquv7FUWApvTmYAqE9d4F2NP4vHHiZ1oUNfuB7RgAdfRbe8aE67ZB5uR73XY8v",
  "key8": "4zypmVcuJUE9JkWThMX6VupvZNTGqZrcyrLSFivBUcEkq4eE2NWmrn54GgGMd2QK9CKJFhkWmnFAz17zKBZoE61H",
  "key9": "3FTi97eJAR2WWco5CSdvxt587KV4CdceRvNXFvsHB8PhzKz8rQ3UWAhmPrvQrC5shzWt64ucxEbMVYuQbGfrKRaA",
  "key10": "4DyighE9pjXd9qaC1cwVvMGpDwX4tSzF7y8mtqxtQXXch4teghrsXsnfcEcjLDZHsHZ4dUCM6QP2XTRM3T3ghKVz",
  "key11": "4aiQJzWFZtep4qe8oD8S8xHq4VinLg9thzqUd5QnBZtjKrrKz9qcBmVs8YxFspJcjjZ9vtDo9tSFe176cQY3hwS1",
  "key12": "BnYUF1ZTecm6V73si4akdXkrmgv9VJ2xpUZz1MVp4seS8JFaDwvh4DMSejTJXWcV1n9bcQ9qV68n5urZwtjebDj",
  "key13": "2bbwen3VZyuezXziDtGMcp2A3ToeSwQqCzzPYwwQCVLL1TUndQgzUoeeG9facGeymSxh8X1PaVP8274rB6abZmro",
  "key14": "3oPNU7D6vKnUwwYx7z7gDQDCntbFd9HBCK88bdA3hzcoLe8wxjwdqFNURQNFAgoUzZ1MVjuX872hBzAprtYZfH1p",
  "key15": "B3DvviWNnVp31bNRBQjZCqcnz4zG1xtLKK4vc2eBJGkh4g8e6AFsQnF5ici7wm6eBXuP985TsQHNrE7Ygr2ATUc",
  "key16": "5NgJg4YbK3uNBszk3Q21Pzcut7L5haVFHjvgLsNtbBdAPrSx4nmjRAzENn69M1CntVVwvdBgTYFw43bKw8xPFuLw",
  "key17": "5vrePgHkksyjFNAzoPgCp1pcoBdjAX6gvrCf3541Q5Pb7gfxC17e3E3fFNWE1mNikrUkXfX5yWr8SAkkqXwZSo14",
  "key18": "2QmLSJ6wwdbTnCNMhSHfFdyNCHUmAskfDyAvyYQZzhKSzRx2eoQ4ztZmudWzKMeBrwMuxWuL2DwHonFPkvHigfDW",
  "key19": "rsrkdy1xSJRcnzqKJ66ZZh2b6SteCaXowc6YVs4WEUiqf1339iUX3BmmSCQFDfJUnoKw8Kx9Up8feFKpyatmkXV",
  "key20": "354QcpD16Rsd1fKMSHxvzzP3Twwkp1JyrKkupACcAr3VJNT8ik9oqAj8Fozq8XfekNLNecQiMQftc8nmykRY8Lc6",
  "key21": "599idohebyU8mMe4hCXrzBTpHKQ8yNSpH71wpzrcMFK4tAhBUiDtv3MfztQbr3hefUSqXgkx7964SaevU2XxxrSu",
  "key22": "5ub5piYXfm5ihytHbMcb3piPtD9P4dntE7Zixaa8NXJKWfVTY1rYCUDAUERy8cSPW1bt2CokwCRBfPeGzHLZZNYH",
  "key23": "2k6Txuwo9Suwok9ixZzRPnvkvm9c9kvSs4XdE5ZYqkQWPabxff7fqNfUiqPWK9ywK9LyKdQKNvV7LxSMR6QRtXiB",
  "key24": "5mc3wFwPpGV8JRbc7778eFECbSCnfKaTxXTkGyjxooS6bbjipq5bgtqjJ6ZMsfbTUaDBcioTgHefC8zqfXYvaKTT",
  "key25": "2r6puMdmUvCpxSCkUi3565cHA3Lu6gDtS3b4fDhJ4TNHpiAcikq3DFyoVJGsv4QYMz9dVJah35cqCSJBMbwiAAKb",
  "key26": "3rYypwgVX9J5Hh6GhjmFrB7pk3toMxJMxXjim41BXEAZc5SVp1t13AiVdzZPPvztfCQ8oC57Noyf8pj6vDxFgwwM",
  "key27": "4nGqifzWjpQuHQw76dA4ewovsAwQByKHYutMJnK8UEfgJmhxRNCasai7K8RGgNWoPSbGrWw1yWf3djCpyQWFn44d",
  "key28": "3Fve6vxaRWiYkyMpDwVuCcrfvFYopLfA571YBitBAvPTsoijcu8d4ddEqdMDDKUT2B9xpj1ka6TjAUTxrCFoCQJc",
  "key29": "2uR52yE7ykBmfG8QUHcQ2sbCs24BLjVcYbxmphLnMRfTeX9ABEFScigqysychEJ6hK6GJXH8gkh8eC7FbBV5NjG4",
  "key30": "2d8GTDpE9QVBFfcz4Haj5TrsGLxXFjowothFEvfYFaFUAE9omwVgzasemBg4KiVZk1YtD7RSvudnbkCark1xQbfE",
  "key31": "5qyVDHKfQhqehGg2Cj491NyLUKfvQwcULbee9Ri3msrkQf9AVZHu5Myk27qzKKbiSut7ubDwc7iMxt28RniK6dhR",
  "key32": "2jEcxZCnmKYnisDnmpDHvjCbPtPFxDYwWgfWtfBD8LEyv6fQr3oaJcn5M8GkjiqkDRmC4WTgSacpjkRMyUcs1x4Y",
  "key33": "4K1bAAerZCHygNCAga8ixJ1cUhXTWmmeP2QPk1N2dWAJ2waaWVV1KMXhtdGgUJBpBq4w5nGVuR2Xt53o2Zy1YHZB",
  "key34": "3ZjEqJsNfLrxyZiCEkiEg6dvWRdcCcqr3tmtBoYErHTeLGzLsbdCtC3UPSgt8sHH5E8DTA3Ke4oY4j3eCY69FENU",
  "key35": "jtkszxi1qp8xka3xAB6EYwsei3KFAosv5J4vzPqmgEC9BHcR5MATqyqMBujVT8yo5Gj311qom8nhvsUK5Jb1J1S",
  "key36": "2BoGj6Kt3eJZnbAeeEMioCnFG4dsTqU81GCnsw9KnCEWCbLvbAqG8oibjEp9aHyR3a2aVLyABYSqpRMXYoyr3mHY",
  "key37": "3tiU8qajhSbPQQwRZer2x9ATFn7hhPyAyXKRXjDs8mSoRHEiRpiHGLuqyWAGKog6MtPgu1ZwV1xSB2dwWfQj1D46",
  "key38": "2qWZiR1DHVfYYfLbVHmjwaZ6nayVoYc86BktwU21hj3mE2kQZhG931Gu9exSmoHDvUuc97AupWtBz11EJqWgqrnY"
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
