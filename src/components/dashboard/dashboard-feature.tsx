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
    "3ebpPjhGMCUSb2ovAf8kRHkeQsLcGz1oxuoQZRJbk71uTDodrtgopfxx1sjTN1M4zremk47XGCvP115f8jvK9Tyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZGnyw9qz8qLLWezEoEneU4Czupqg792neR5UmW3PzTJriK689BRrXES89TjWFBaeJf6L6uHnP5qRjH4nyMKVJFV",
  "key1": "2oFNvBwMTawHtTwppzL8yDoyxATMDTQCigpResTxJG3539LQduwZqZ7ueEF7usaeXXHg4FfPT57LcVESE7he7izP",
  "key2": "2AeKvMRJBPP2VYzdYmuHa9H9nDvmBrqA1vkBUfSih9TmXztyUrHgR15g6cM8V1PQc4NCzYkayipvSq3Z4yZ268eE",
  "key3": "6yK6DpfQLgdgNpSAvfCFmYjr2emFuJUQifXvnuqEc3xavrFtCLGBCSUJL3MKdt6qhjhsVSvXQwfyLY54TeSM5BY",
  "key4": "5JVSrTwUtndqXvqEqU54UezRDsw5mdhGasXWZmx2c8AsbufnVwK7zyuHexKhLX6FeBd1hygmwEHFqo3r6UHiPxui",
  "key5": "Pfu7eBtf8TQKyvheWDsVaBSgXSuPC9FvEuExRmR7irV1f87Vk58rLbD3AGXSVATcx7dNCqAJFhoFwaZwSnHwM49",
  "key6": "2xGy7nst1vV6NebJNeYR5K3dTUbRq9oo19Bc7eYnYmQEbL4t9o3H2xRDjCY6hrax1kSuH6mxEJ8cenXneMXKqoxB",
  "key7": "27GQVKGKsHZ9kuA3idu4KGqYsEcMbH9iHAFv32RBs9c1t2qGZotHXHMrDajGBLBUgEaNWJjq8T2aNMKcJFFxDaDZ",
  "key8": "2f6367x9Zi7RU6BRyN1AJSPhPkXBSa6D1Gxg2mhYuuCvej8vGXyAFummmkakzH4bRhRTYoRv5A4UPKe8mFgBbPt1",
  "key9": "5hdeUQ6LNfT8vsXTgEoU3dW3CizbYWSruH7UeuVsvHzRLFv8B9zNB2Lsdf1ND8c7JPU6coXW1GPUFoRySnLaVnEq",
  "key10": "eavr1giR4mrLbJ7eCKCRUwXZ2q7opAn4MXXfkVREtGasg5U3d5nF2rsZeb1FEsP6y4kZpKvZNAYGeX8bUhwwDFw",
  "key11": "4tWsGFyK4rmfx2F5BFPXyzQhyhQAXLvQBfVv5Dz6MXXRqbKMyux7N4Wqo3EvMaZEnqAT58MmLyWo8NfsHoTzsByJ",
  "key12": "3pcjkFfpZ2VLEVWs442MUpPdFMyMeFnFuSpuDpXKQXEbfBLrBoLFRSkYCdfTpZ2z3zSWRbokbtiEJAdhK2GHC9gf",
  "key13": "2JwQ6E7TjeB6JBCiPiv3WHi2RLT6Ke9y9isUZWvbcaX2L2HziYWRmMB3wNfeJEMRaWauFeRUrWmZ4NuUmhkKNdPZ",
  "key14": "5RK3khF96LoLT6pAeb4UvXXUTB1P8poLvv9jYhZ5kKoTJiCVVeByw8tHChwgGKpe4mF9U8BEDvUiLy9FjguXWVYP",
  "key15": "4KWGZckpVD6aozdGWiTmkyAMn6dTSj3MSwpNWoJ9ZjyprziqhZQmHgk1ug6Cpi2vwh1iJBoLT3qseG1DAb74AvLE",
  "key16": "1RBaYeuNFT982Dby3NNZ12AUc7QTisSEaAmnxBipFZLvP4ZjkqD2or6a1irL58PiNZaQMn97nd2ppyrAUaMt79d",
  "key17": "3QwHBm1mB5wyEieTo3n8J8ZinzN7uwoH8HqSFadcZdnX2tPnKCspz8WgC1rbaGZ6Uc1oWVwxW4LxEoZ6P23B7zzs",
  "key18": "HFoP6bgGezijmhtc8XF7MfwpcHmZfsAf9NpL8qJk5dPRULVPC8kerz9ZiX9eDBNuh7CTRHKpy7yREG3mFy9Jqzb",
  "key19": "5TCbJBw8kVrCvFcwpYSSDgMtVVSXEA2CCRXfNcNzsKB5KizjyiLco5LGbN4rNuuLPoU4DtEZSSmihatGwhEPQAWt",
  "key20": "ZAuTdRfbVodFDKcCNjPpMawxvf7QiixvcJVbzCcjUpn7wzuXYiLbJQgoGMyr7Ui2kmhggjAUd4L8qFKrUGN9x17",
  "key21": "dPMffVQGBRBojsxinxTaUWKFiShWEZ2QwCWXyVV4ZiSqWWThZAkZfWFEazGhJq8txKFA9qk5HHaLwSR9JoyDgJC",
  "key22": "3bSn4ewpLxDAne1mYoBWMxhZ3VzNpP3SeEehtftvNQweBkmfZMayVWx6U5z5W878mTVhERgC1ex9pVU8AYnTBpUa",
  "key23": "4tXaD9D1u4MGRYAvS7rQAu7znc4av94GYiRLhkR6MtN327cmQ4d4h1p1sf6ghxA6Mpgid1fXVwaQNihs8vHrsxdU",
  "key24": "4e4k7xF51EehLdXALW5PkSi8dgqmEfWkzZDPRntYg2uT9aopxkuhjvnmRWQeCMHQGsiQ4bvaq9gLPdnYjyKGV6m7",
  "key25": "uXNJtcCJHuG9nNCmshffPF7TZeBG2MSEr3Lok4MeRsEHA6dPKiY5LUxtpUBrW3QPPN6nq2zrFZhAAozjUhRK8sk",
  "key26": "Hjo6Vbj6ruSPD7e5rPJXYr1pxFCyNay4jbjwzt89TAPimmJZXqXaWnSXun6xvyeG5zEw8p8JVzAPKzpQ9aWvbd9",
  "key27": "3aYmd6cgtKGbER1thJV8J4miTZuWMTi5rNKdo9KUvdoafEQrn87NWAxQnkftnufSdwoRPE8KiZc28ePhSE9zv93H",
  "key28": "57bhWJCN7Gvx6BtjPbxoakSrMSro4WM8XfGDkxFEPa7K9ibiq5vsTUqLzRfiZ2bTFRm2n8cHrR4UTLbEg8oyUiUP",
  "key29": "5m4iEuXzeNKzZ44RSbL1TYEmuVwes77yw3wqPBbZiFQ5CNHc5o2KdMkne7BaH6qSVXXB2dHdpQWkxxiBDj5PKxmi",
  "key30": "2JQ9K7sQ9R84W9RmEnfmCETBksvNXGqGxEsUqzHdW39CEMghQvKT3S3gBD95AqtkZLxbT6xizQJRBbW7fr1SArZd",
  "key31": "2dAt1er89yx6f2ZocXSs4mQCsbDrJMhsBi8griNHqvtbpPiXMVq3Dq52okvRRDzzXk36yTHKFh4FbQNw9ZuA3wGy",
  "key32": "YJ7L6xZ2EUnVtY2At6gfDJwqfr2BteRrQ4pdopJfxJHU3BVbBoDkpiSNYAQKgBNTbFkyXisWytsb3fjBBMaZgm2",
  "key33": "cVVfDd9EJShd5XL8pR2tbCdgap5mp5BCP1wdA8xSG3fBEfsnPU2Ctz61cGomS2hRhVQyXUpC2U2uSfXKVKdW8si",
  "key34": "54xJpU3MfX1QtiYv5Jw969LzemnWZhqEZ9XGTf2FN8CCqrjhfFjCnc1h2KhbqR9FAwWVULvUgZKmJFQrNCpzqxfp",
  "key35": "RqRxLsJGGqNokh7ybWLUtZ3s645bQvxBPUYMUenRs8UooWqJJ9UjD7VwcAim736rCyA8AvDKnnqea97VcrWn4h2",
  "key36": "cexeRi7gBRWLRKQiJhrCVwtEBVgQyjxvwmPShsL5y32x3QSQ36qi3PpqvoJP5o7idLMKTnX8tkj4tQBerDcwYvk",
  "key37": "29V1bZ8a9TipGiSF8VPSaB3kqMwUj6sHXL3kgHxefYqwWu38haVoSHYRYyz9BGdWRQ8A6RYzVgioKuqMRR4eEzac",
  "key38": "43kvTne8X8htYP7t1qqqvB84T1kdXNjRyWtkgv884koDpFSwkpJTcAh9SwV9ULZgtysEnJzPz5h44jP6EeepK1ih",
  "key39": "JoTi5Rd7hxGeMRWKM52P3ak5gZh6NvKAksTgZF8rGuqJv4ir7qJTYDHXgndCahUo8qeiDjdHgrZynV4X1FP1F2n"
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
