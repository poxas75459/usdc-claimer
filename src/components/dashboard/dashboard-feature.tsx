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
    "55RFybuJprP1ycMAzePQ4tuk6bzxdLUnKF1nWSs7i7aBjYg2zSNHTLq3btSFT9ptsBMantj5ZjQnY7eDrW91v71W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gFtcTd1KtLxXe9wUTSnWd5xsCEGNeXoRuRL8YewQFdA59TjnMe1H5qe59S4o4kkYkfXbtDdoT5e119kHFDLZ7Gs",
  "key1": "3HZMTYB1Z4pqtpvBFgAwAapkyqk8w8cQ25yQebbgnNCGSFeSsuDvwf5yEs8NJGLhKG94QvPJmCjNC9w6WR6HXzPN",
  "key2": "5UtqMvK2sxtFUwhTsAuc96L2LSQBpembNerXym3Wnu3We1buyXkN85nCrMnreTgJymQEiLFCNFP7owKvGLiNMyUW",
  "key3": "31pRGJQepXG4WRBPG8TmFhuuknCy6hqjsiuP2ZrNwqENU3petPrqNU7UeZaZqqa32TNKtJu6EzRdEbgFLcxCNJ89",
  "key4": "UwazE1QKvA6GoXUGE9S2anHckMNcsCxJEEtQth6vyss61f1Ta3A1gBj2hTK493wjWmuvRoQgFxYoVxU22TkQsjD",
  "key5": "63nmvXzvQCusM2zn3WuqEU2SxtmGa1Dm6JtAMERuzFG5aiZZb8HQXXk7CdMhb9XBJ5SbjhbgN1CAiwSTZGghXCCL",
  "key6": "VmqcFXjiwSWNXiTtNyCPZFbxWKBCRyEtnQCs1TDLz32NhCB97t48tUyLaVvxoD2W8PMP6xJkF8YovPVw14aGavD",
  "key7": "2T5sQ6skV6yhENv8Wh6CxV7FH3knSfa2eJBwPeBAZM1fBNteza7gRksr48fj2ZEj5mb4s5Pvrzui6vGFjQgye9xM",
  "key8": "Mau3tiNypHPFSrgGDE6CmnNWyGCxgLfEBhFLw9zJWQba6PZoHRPvzb3mfRTxTkxqSGQrk9JfYvqSvBPwgcyQczK",
  "key9": "2UofJTaeYY7eXGmMuziq4Fpso1UEHM65P9gKuK82RUrPAoc9q62TPFmxoz75DCwdZZXDG5KwNbXD9BjW34jFQVEY",
  "key10": "45AumuYkJzUUrW15gH9vg1W195bew72trjAobUve6VniWvyZ3z544kjRF3xTkJb1fTk2BdD8j9GvQtrNr6a8jzHS",
  "key11": "4LDA9AHjLPvxYfbLpsJ1LxkRXcWQsNCHGWkEqGwVZpLHddYsVmThF5nDjZXFsEVeu75WSQTnK4f1Nk5mug61yuYf",
  "key12": "cLmYRXxBRYn7f3Vje58Y9kSiU7D3Uer56Gc7qYuS4fuWhgZ8w2RQMbRS1rhggCefkTpUB9QbWCoWPmJYCu1xk9s",
  "key13": "DidpmjyLWukrb5x3wJaWQDCnX26DVMkMoWsop7sa4ajXZoUgBfR6fdHgEmuWyzRm9qJRR9mJR2N7owSEynrVi41",
  "key14": "2JqtbcoyRB2NsPWTz2hzX5VtmXCbMbZF9CyMFveg3v2A9LJpgMM1DpxxZFX2nFfiUBcBnGCGeN7FVVAC4znjBSXH",
  "key15": "2hcoRVCpyWHUCFsqoJ5RJy5AjtRdtWdoancU21iS2zZVtccdfFViK8Q1bze7Yvx85PjRLRH68gr1TTCg9TJTmAmo",
  "key16": "3KqdZYu1KzKbHQBNH4pBLhSsEkV5VT4W3YeNkeFCPxN56kBZVDvHtXkXFBcy46NBjazGLju2Qo4GTS57XmiGVkik",
  "key17": "3YmeA78n683YsjocFK5GWjMGdePb8p2ctJFzXAPW5MYVw2MeoPKZuk1ryrfs7WcfMCAJCv9eC8KqbGXK1CAx17x1",
  "key18": "4VLH77oQrB6rDKw6R8eBiafdfMqmtoHbsTAHYedDEqHzaxuGafq8niVwLacJbtBV8gZkpziKCQAr5ZhrvE5sXWKP",
  "key19": "5hS3czw2DDYE345ewFpjVFEW9sCgkCq7BSdRYZ3LPwR3w8tnLcqenBfKxSNxevyMiUjaBNQWqrh5D3cfDkhZZop",
  "key20": "5zbHha4gUvjWfTu5NVQUZ4LXr6cP8wGZmawHEmqM9yemAKnAQadwxQjCNdiRMLdWKGKGeetdwWEPrzgrWDxhpiSm",
  "key21": "569S7BoWNxMqama6K8axuhg9oPwFqf3xfvz4gUsjMFsnH746CGBeXkb8K5Gr682iJiEma8fFY9pzcB6ZoqqCv3XC",
  "key22": "4wWq8uv9u1xTPodUmh33AyMqFxdffkS61uTRWcJ6L32aZCsrVHBk3LvwXnmSMzUDo3zm4g6U89bmGsdSnaMhtfM2",
  "key23": "BG6BVNeer7zchTxVZ1MD6VDKGyGh38oaxqbhKWmeJVfWE69QmdewCVZn8wYtULZg4nSZw1j8ck4vxgNDAJgFMRh",
  "key24": "2CH6hsMdjJzk9uaB7RWvg7v6zGQcKJcCccoVtyhBy3ajCs6nVt5CgA3FojpyFXQoVgLTtTxrxSnvdEheA1LSCzUi",
  "key25": "4BPdyzfnTytCAA4sdTxnwQk5y6WuwPcpY3HZDuGvrtTxtfKsN2QAw8AfDyENsnEMbsxpEXZz4m4CQJSyKoCq6ZoG",
  "key26": "3NAoNRaj9tudPL3cA9xAgMgXeX5K6yp6hG9oFTApaN3cYyf1AvFVmPhrCzgJbKmdg6VL4CYdhYbajiN8ttyWNyhk",
  "key27": "gNgh3XuWF9FRXxyrXPTEPxDPiprbZcYoGxVMAg7sjq58WRzoJUvmc9A7CcTXFMeHqAwSrfu9jGzsXw8e1jtKGFR",
  "key28": "BeF83KsMrsv2ioTFQcbhXhMawMWeHtvJkbHHtqpPCME3ZXByjQ3NcuP3KPv7jXhf35BZ5pNao3KauSSQNmZuACr",
  "key29": "Y3jQ2QzjoM82HndE5EkSmKCytCgYW3HhLCin65QKWzpP2c1uj3BYqDuMmZCvfbCsQ678kyqzYXzhnkP5SHic49n",
  "key30": "5KkxQ99ERhb47raqqpEwd36YFx6LGQPWTMzo9N3ywCWQdxsBmEg6T5PkQnrtVfkNdEa8SXZvirkfzyxeqA81gN4a",
  "key31": "36Jn9cA2k3GWAbXmANZhBdetvNXKMZfPmfXHN2bqNqXXvThcooZxt9brzia6G3vV8gsZrnk58Hx6Aiy1DWLEaGd9",
  "key32": "4qq1a7wHLRVsfSvAtFy4FoqV1uAsLxAfSJwmwP4ZqiZiJdTvRaDb2kaEh4mNV6YGrZhtKCLgoZPPCvvYZZjVu1XL",
  "key33": "5R9sD4stiTJc8Gi8YCwX15r5jm4JtfqGhGNJWbSpf1i1Fy7TbLQc15LZn9Hcn6owvRPoFDJrq85jC5cP6UJNfMJp",
  "key34": "5F9DoL8DFD3ErD3ZAeZPRL6MxWK4LDYw4BYFcuSB838NLsMzT84S4e29jvB5ubKWaSr2pWnBWYhMVpr3RGY6nUEa",
  "key35": "2ETwBh8JfhUAwbgp2LEsrjVbdVAgb8V6bGNkd3xpwaW23wWuh23YLLYrPnFZUTqqTqwXMJqCkMXU79mhD71vqFoK",
  "key36": "5f3vZGHSvb67NVYcncF4EY3atZerLkSYgqgWRQjZVs9Ty2VEg2JWSmxu1A61Gmomp2H5R3zBQKTySnSAEXSAu4g5",
  "key37": "41qnMew3BhRgDfem8dB9ieX9ehdSFg5aioFguqqE5jPiKW5pgfnBu1mKNV56bDuEfeS5SSrkGmSqZoJUoCvUQ4UQ",
  "key38": "3bkceYCFM5RwFCNBVVWuadxoL6QVeWYX8gpJToXeQm2MDY6wycRBbVBnQ9TS7dzDBcb6rvtKeVCNDiHHbaUrw5a3",
  "key39": "vrTfTXzgTJudEpcg3U5iGRWvhx5LhffyxKHs2FK497mFoBcWrGeS2MRtrd21fGGwL66X6MxVN7Toaa344YNpGL8",
  "key40": "2SEGnvgZZ4RaSGWJsnMYMuvNVGsYsdyRb9oyGfuCbWbTx9zEgngwdwHPk5tDqXSscUL1DiqUf3ddAXrDVACHpbhT",
  "key41": "4jb9djwDaqJyAugqYjM3jejNBohsmg8Rxk3EevUJkMpUhgVXFsptqiDHUtcDXWUM1XFTyvgiihL6Jr65j9JaPNXA",
  "key42": "4HvPU9CggbDBAyHsYBk9RaWT2MLG9kVdTNouJXGgPYaSxvbSp3gRebTTnAduBUSiED5D857sK3NnsF2w752H5SDQ",
  "key43": "5djdmm3hbg4WKiCCwfJDVC2emNeAawuBUneaEzC32WdjnUPuFRv4kvwFxtRrpAFaV212jwXmaWZ6DT76XntsCLQF",
  "key44": "jnPbTh1xjNW2JBxvnXWu9o317pLyFp7yWrxqSNtQ1eKGUufTnUTFzfCPRcEWqodiTuSHnX9mBCyVyK9f5gNxu7h",
  "key45": "2gnG2tgkXMzHBuJxSqYP4k2M8cmkX9HcaWRDxZ5eNotFLWQexWNgcv4PjFCFvkXo7mfJXks2bdHYXQaxn489dBBs",
  "key46": "4DTzmuUqajto3ZPi7QQt8qCyR3BCFrFSF7QfyWSA3FEh3Py44QsQ97q1HDdSpvuGMVjEJNP6tqwQLotBdZs1wur",
  "key47": "3FMuehF5xJwihyuuAuFi8YppPxz4yNPfAConhrZyEvudNRsJJMB6GTQf3L1JrNJ5GN8ifxHpJggHQbytjr85JyMu"
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
