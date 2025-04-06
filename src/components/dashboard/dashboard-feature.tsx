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
    "5tHMnN1UsG8S3PYy5SkrG5oKSF7R3oMJVVF4o4F3Azcm2zoAhRFcrzBfurjrYuMbNVTRUbP6ZzZXXjhDfwVvgX9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GxZnCxjsN1d2ysFH8AB8E8LNQ5c3gHoAmFdo3bgCxTcduG5fkmHWF6ekfEqoMpc665Yqm6dQKvLV2gzGhphxEvS",
  "key1": "xXYUoprW6uXczQ5BcMGf3YFcHPToXBcd5TNkiBxcBMZN6tbqH4ddXu5iW56sTLeq9WQb1Gz3aBnfpEPj2xewLEj",
  "key2": "28GVWEne8jUEej1T61pCLZrybvdnDbyPzibKVSEuqPyeVzAzEjFq1NBBDjJ1b4ZR2o5V3tNvQmkcnbgYv7X7pzob",
  "key3": "4jw846ebvdVEikACV4G6BTMjvZBidNHUwm6oHzJjkABfFFh9fZBdEdBNvEucQmNHsKvNFHwrebWZTgdxPgP77VCe",
  "key4": "3HWdH4u9oR4PGzgSaqMUwWsoiHc5tq4Gfe9oXuP5zBspR6tJefr5Km88bwdsoZxhTc42piV42Gab6pjWcWzoNPs1",
  "key5": "SzEQmLXZ9M8YuEj7d72WDK35rqsYuFsQjnSZAcxbGjugunc8LdWsMtmMBgAsPnfc8o77LMiiWQAVnNBEnxSRrKz",
  "key6": "4Zbeoe6r9vdmHX7kDg8pimWKrgtd58diHmXe7KvPzNHAtDmwBTxQt5resBp26758rJ4fwzksU3cLUruh4eSfB19r",
  "key7": "5XvEJpCzhRRPkvhFJfUau7MjKrwUsnZcUmjtYwBmeUHY11Hqsc7EA9MkNzRoiReV19iCQ6VvhLAYtHv4i3jFywky",
  "key8": "5nmZwwDm884DTyZxjAzcDbdZuVmSJiYF9kd9v9FDu7SocZo3HFyMbuqP4xqmh9tYXB7aTRLXpWJfqg3jztxBXpun",
  "key9": "cjng2jMu1pb5UsxwQHgws4aGBWC8PMLiH9nkWBbkyQkZRZ4Vj3eyMJVxfZEBQ475LWswKyzxFTifJVxZWbnxMEj",
  "key10": "4cD23MfZ6yGiHoEtvFQiQEax7YcAGTVD8ZiyfhPtzGBCfaokDxVGeYpjhbMFkHhywvDkkLYdGT9N6pPp6c7LJAQJ",
  "key11": "2uAPRT8gsQi7Cm5rssvgvYKtigEdjuQq17CEDjTiH8Q7LUiVpSsPfm2Gc2XbT4VztXUfCdvDkMWiQVyruD9HkzqG",
  "key12": "3fGtjBMX3PucP7dzTsgPkYvg68PXryLVidiUuKk4hdnUSNtwzcaEwedYNoQcx25NLBtaMaWRzfK69NZhv8RCGYCj",
  "key13": "2QCcpmwRF5magmT5SJFZWu86SKKoXEtSJGHEqsjHv3EqAFp8832tXHCvSP6rWZ94YZiBD1T2ZgV219WB2NDWJB4s",
  "key14": "XnFpUxquiH2D6h4bpMbT31B7wpjvX6NEgSpZKniEnZW88tsouVRVyQpAbLnab3UMSRiRhe82Sjur5irYHGfhweG",
  "key15": "25FXWuAYBiLJFt3v59p8Szx6DaFXGWs3nmXxB1EHLVr7iGqZ1xdJhvfhXogV9a1Zx6qeqFPziFRCQLgTDsvHCanR",
  "key16": "5piF1g31NeHYxDZYgPEp2D1DtGvUiECFKRQ2zz8G5YtRUPED64dCMzSztzEc86LZvvw4TvQfBKkaJyxSELTARQMm",
  "key17": "3LvYgNh9Bav7D3apjfZqxSnjVKLWQfMLj6D4tDcDmZa8t8uQmxmZHT89CVQfqjR34kP7rKydrNgpSYcDejUiGAEF",
  "key18": "4JhbbVqZztKJCHk8RSt1E5F15gRDXzMNu5ELrxiFkW2gBPmFv2zsH5vqGtU2HjNBh7LwPxd4f9Tp3ZwRUvZrwufJ",
  "key19": "3gc1EBS9Lqh3sPd8798sWk4VJjfthVmTqC45GJxvnwoFVi7Vrnsq8bNjaQ4vFQUwksBU7qxXWE77K4FFaWwf2r1B",
  "key20": "4cUXKr9uwiDz2H33nrUHmxGararvWAYedSk9gDnapeXnjFCbw6FuM6n1rZJojnstxJHirFG4WNXcZnqfEffod476",
  "key21": "2NRzXBKBNtfeKc4MkAufFVRTCAAubTV2T4f2uMg5XzzRSQ6UVSMpvbcYoHsCGTYfTU44jSAqtCgfgvPcfFuKxcYv",
  "key22": "jJSCkjjd4bq6tbRVdPpz9Af3Tp3J71E2144n8oqDQ67L3avi4KzHry63a4hvfBumfPGqXGNSRwBN7pd65uEmqqw",
  "key23": "39NfVv8TmAhR5HkAFq4uBFBxZeJuohZbPgrDCcNvEjkqcPheQiPFK9QY8pRjoZJm2i2DyGo9vZi8yxHxte8EDLqU",
  "key24": "4uVf5nwFtK6TwMPeTtsLCQSwMmipQUuGccpTTdREQeZaDpj3CNGjZfN2YXRvFftB1sTfRo3nePwuyDyREqTNfXKx",
  "key25": "4q8DfTX837eyeYyjB6JtVzo8So8NwZKXA5subCoSY9ZC5e6VidcZsiVHu1tvh7x6jLZdCwGebewFjMomxUBX4ejw",
  "key26": "5WPBhRqTszBn7rxNYrUgAg4jD4ygpMy48RhrfdxEmnaGzp8izKrLprxRFLkngXRAqrkrUdH84ZJDz99KoqsDdw6i",
  "key27": "2ejtmTtSJSUFw7YWHsvArMAd8d6CH9Jb9FPn6u6uKGc52NkcZeET1eHqFaMm5YZ7os7y4PvswnvUyPSPPHDGGtM4",
  "key28": "3AveaYEyUTWejt2pXqxz2Vyc5doddadB5UfPPPKSAqCwBJ348rM52huAnszowxRwXGNYeUL9fPhhHP354JbnirdX",
  "key29": "3ZfRJ2CSMdVfuWD4KzgCMurhpU7t7fFXfzRCKiTb8wtNJF9SMJBnVCzngKWVUDAmJgSk1rSwdLy3eMsQBvCoZGJD",
  "key30": "4EMQziDwqJkRiN8Kpj8BCc25hd65z86o1rUi9ugyNjijzgypWqPoDZapxkqq3UhrjvBjErZM7HzaS81Zgt4L7xu3",
  "key31": "sgTxJx9PwnFj7PXBuPECLNSgrBq6YZTbB1oiYuSFYeoCLrSvQjUzFmvpF8Lbqv6g6deRQqsvGym3fy3xmXCd3kQ",
  "key32": "sbUug5NUUerXxCpLxzXHoNkTLAqyiSCQJ9x8a9oUFWhXGPvc1RmiZqW42m68pftX41usgaXN2pzdmkShEaqrH5h",
  "key33": "SWs3Yqc4QxMFGFLisk4HSXRrQwN9VMnyZFjZ2YB5rSGBXAKsoFEEMPYgLmLV3XZEmpH9qa1Cj7KztjQaNKddSmD",
  "key34": "vK3xk8XoazT28x92DGoYBi78SMNVfxupn4Hq8di9JkmRXviS6BW7sBpm1zap26ovCJfrK73noxTry1ygNSyi7bB",
  "key35": "36n34ZR3XU7ASs4fcPSfFgTGjYxhpg5dSfsDF8HXVuY6xXmahnEibxdQak78EmgCUTHKwq2K2gbzBeN6WfbT2mz4",
  "key36": "os9wzP3LhPFCMaCnw8AGJSAkCidGCsqwfMRBrX4m6BY67yFSGLFKu2TbpgSCGVqQWB7mGbwGF6u8ie91TP42Kwu",
  "key37": "65KfttvMUzHWLyrBQPGjk5yfqYL8JLokmfMbCJ3MAdpxkLa3TEYsMEXe3NjjdiGDQHEhrDdaFnXmQ46ARsqSKh1X"
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
