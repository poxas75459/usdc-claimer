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
    "4FFtew88uEzvNHkakDL7CjKyX11X7DBf1Wq8fvRsbFRtDQnVBmn3KFKZvDSGZ8ZANxZ48Wb3A3hVKNNL6QAUrmrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KUyAouyuYVBopXBGfkkMJNs6K4VhHufBi4fLsgaBXGobQxP39iKRDJH62WsYHoF6WARei1CDCg4o92ixPwQJ2B4",
  "key1": "4eMNFkXFPB5TKCXrqtecYENEsE5T8HrhY3i6xT3AwXMumyyuZnsT7nzj9gaeprEj9rpjDn3vfxctQ8maRBo2bQ76",
  "key2": "zPBPPSAZiQBGKsFhafjFpwjMta658pNuiqzShLGQVwR9LwvsXwJWwjrs8K5BDcAhVNYWW3MuxtMp2AM9cUFWSeP",
  "key3": "5a5MU2xnYnBe4nDYT9MLyTHKessJDkg5ecYHvZZNPuuzPV2FxP5oAQkFFNPUHfHraaE3FKKMGaefwty9KtBcuL3c",
  "key4": "2CCsV2X2ZDoNmoEYjgWNWebznHv8rsNBqwT2fN6qtufxSFhhnWpognBpQhuh64kccMFvjhGivd2DbBqAPYB5ksdY",
  "key5": "5oV2o7SxoP6uLSWsPHXS5hAzbpLfkGoT6oGZmWezje6DCzYzb71UPToLjELRr8F3W7BnkGzZr2SoWTooj5aojMZp",
  "key6": "2zuXbCDUt5oDhAZ3VmzG28vLJoTAR1m9e4HpGDLafrh1FFfPDeUapijgkicWMP4uKEQsTZUjHbmC84DbV9csKyqY",
  "key7": "3DNuuLk3XsTKpXiXAm8eme5mFSpfQhp8FwXK7LrLWEJG5NQQEeTsdZVTbhVvZNDGX7Xm6gzuvHMZG8r3ej5MX7h1",
  "key8": "2riutRbKnko7G8ChpUrLfkiVaawaqdFGBfvmTuZsBAVrnGrjLinCibqPyF9U7FxHwgTWmgS9jorZggts9RnvaU2i",
  "key9": "3bAMzYvgbYTtdLes4uPJyjxpmiEDnRjUEvZC4d8p8LHQ4JqZcsLW8QKgN1RdTN6X4AiAVEJsv9aECShfXrsFgNTe",
  "key10": "4T1FasoNJDcacdUqYtZG6Cc79YiegEm43tS4YQ12E9BWUQh1WuGGZLxrhPxYp2XgbcUwjUrLaFHJLZR2BZqiCCoQ",
  "key11": "21Fh7DgYcj7D3ymrtEvHFXTeas4TJF67u3pibnPAiPsTAqqnnoQeTLWKWEZh6TaBNCjTTsrpFQiSXh6e8EHXcg2i",
  "key12": "NsqJCNqfPdcMKCz4XuLAJ2f9dZtaqffj7cDmSaMiQQwdqgwLbFVpnGdHbEpQCApruyttuepHF2wkW8xa8ziEk2e",
  "key13": "4yjsyY67Lpxx3b8L2HA2CEcftd6szKn7BeGwzDgEqqwM5UnTaWQJHdr7mmwmSxHDJDR7TcEyjoXrHB8dFM6ZAyGT",
  "key14": "4bUJkKfprmaFUDVJPYNrnGYZrEbHdDhnLzXqGZcHw3JCRHdRm4jgQTg5eEattpq9wgP1uupFJiYn8LMbzHqA4T1p",
  "key15": "6eGxcftiCVpjxdXxEQ9yFmaYYYgcujiMCMV5cWiCdWKAgo7YAg1hCsr7j4UhP3VB8PE1n3AdGQPML7a1vcKPzQm",
  "key16": "3vd9kreNaCUYnAQpZe4L1vGLDvxebxNKyAAwEtCMp5keN3PTjwBb2RaTsivhqQtsTBBn8VvmBzX4t4qAyBaEfomF",
  "key17": "WeFWsGer7ikym3UmRYg7FX8QtRXZvSB4friJ8BsMj5bvuQCkbtPGKvS8NnHRF2dgzmibTFfgiLmTUi7GXomfsA7",
  "key18": "5BQYkoChay3ShKPHYfLMjVhzG9AWDy1auDkaHi7B69MGHqXrRjm7Cgum4ZBChXxEwePpUh75dAxW4sU3bJADamtn",
  "key19": "3Zt5MmLSH4FveL565wNvLKNBToZznxdVn8PVBzcv9BdfhXU3d4YZwrFPSb5wQKP2rRf6Uc6z8rPqmrkLx6Sk826L",
  "key20": "2yjmNpVjW3vbpVZjKibny1EupGxG7fuZhFEyxyLxPoo3YgMPznhG4ARTV1qNT7VFogczvhB7QKjaBUkBpjEZVggh",
  "key21": "2i9as2dnvPGC43AqtgtF4xJETFLoFukt8psaxWgzexozuMDnyoQqyUSyu4JfccDC1Xv9uXUrDTcQzTn6Jqyv4dbY",
  "key22": "2fHx82nEJ7Nhzy34jKJhinFPZBdVPRavhLGFnUbqzCUSVNcHzQXJVfvzuQR6CHDYebyj2dtjXNpJYZ1p2xYPUX6W",
  "key23": "4nQvMcyfTBLx6Tct6czwkcZDZ1M3frWbSeonB6ztJUwoKbw7tjB7KyWLLZNAFDKkabTv2Ck4z4UqyJbfop2d4V4G",
  "key24": "2ZqkrVPELdmEbV3YenZ4N6UpE8pUY5wktGLTszYmxVd7jG1xAcbTZnn2UucpvW3Wjpv7nczgcMQp1JyQLJvzTGDV",
  "key25": "2oRKhFYpxps9mV8qE1qGNEh18ha14meYfaAjizLTVadL42utSRXyQWgEP1RGGpZABjurLCzZCoTddj3KLxi8qjpy",
  "key26": "3LUKR4F3vhPxZcyU4gSxzbB1E9XDDD61C4Kh2Qfq6GccAZL5cduKEgCnjc9aZCmrGGTXWrNkswMSAZfa4Z3sLsSG",
  "key27": "gyyARJsgKJZYnatb5SjK73cJ2MvQTTSgkdBM8Ptjo3rgEZK93K37oFQaE7Y6uJUBJboJykhnuu82z8qMwauvLiq",
  "key28": "FzJ5EjRfUUEoDZh9mD7Rmz4DGuTLcg81pobcUzsUpxnimJNxY3wFefDVPThdyZbZETYuFp4y7qg3ATqSdwnFk4C",
  "key29": "5gTEnpKTWhKh5P8CcjQiJEeJaqZZ6YARvKdAVuiJUQbzEYcuKbJgJQP3mrPrNQeZi9BvGkj6NLTLXSWLu5D1U6FG",
  "key30": "sRaRutie9unNpuFpUfYN7YZVmf9yrC1FYFN9wrVVM5HpTeHf6tKDwFMTEPZdEBiEq7DJZXj2kuUARMdMHztnTfv",
  "key31": "2zSRSEMQxFrztqezKWMkinXrfhAycEJYNoRxDRgCHckK5FMoryEuswpcLPprrw3c6smvbbKhR9qZLGCuieYfySTY",
  "key32": "3CKAzyzyy9ZmsEpKc8mqLAVohoGGqPhJ3afdaWFoPChjHRcReUJKqRvzzTvYwAyXZ3wYyaytYcU5QTL66brRECgX",
  "key33": "2t4foHQbuj66x42uYmnt5cqVazbmtdm4kQTDYksfwc5YqFvSY6ErHhZ6icVq54TPehmZiBovhvDyEwqu8AAwYN8c",
  "key34": "owF9ZzRU9xcbohKq2uNqeg2XCnsGRBQeYtBsgE5KbGj4KVS1zosKUQ54cWxnLtxuQMXPsHn1tjLmL1VwhXK5GdM",
  "key35": "L1LXVGvfFYT5HLM8ddmrDLYWNiXBHJM6djaSTjpbXPHzckjcaVxxmBuqxhpScCGBir6uHU1SbvkYLWwmsfMKNtu",
  "key36": "2QXk94PqhufEBQqXJNrjUioHhYk4Fcau92BmSt2swHTzYgPuJC35MyHofjisppqijiPLHfa5qznfDRCLC8qE2VKx",
  "key37": "42XiVBjQ9mszqd8hL58o8DYSEzera3PiNnQip55wX9cJnDo1FoEmpA3DHFGuzwgcwWzzifzmLjyD5rK9DjkBDzNZ",
  "key38": "3afTb8yas52e1Dz3SNCP6psnUDvmG3sQxkscVmTVud2cBLXDjtWbLg8Pn7Y5eEFg63BTMEUZsvh5B3BVEfre5bkQ",
  "key39": "4Vbr3hj3mZjt9xFPvkFxiXzojjYYTLVftqRtxGr82GNm3Rofwrx5F3CARNJaChNJtzSvp5KRRa2yCsdwNzZkZ5UR",
  "key40": "2nUt8wb8CvzK8KRZj4b3UKmpia3zfbXNZtVnoTu1uHAm2ka5zmMoZWqscMFNdtZCwhod7fcbMx7nvGDB9t3XdPZZ",
  "key41": "ydM5C8R7zX8asEMu9oMX27ZvqNe1AcsaVHuMpEt26tWV3u3AFpad6MtCuHvSK7xZAP6zty8CqsrffgWQzYHZPPd",
  "key42": "5NWsvBt9XN7yww2a2rffSBLLdTrpawLJfhgFCQYLPhaC6gXETAdhHa1PhcuWvtfMf6RiDrXCmbsHXojV1g83vmaL",
  "key43": "3hWW5KKEtJ8UfRQPHxgzUEzToi7ATtjUuh2oVPZnVkR3KMaQVV1vWsPigWzGDAqrSLTrh2kBFQnsH9bnyDeDdC7q",
  "key44": "2hfQRexw5eX3MzYjKXDQ4XjipJiLbKyyWpHT2mLP9pFEcMMiDvMCN3XFbf6kgrfddEnyVmw7aKH4q9KofwULLDvB",
  "key45": "5YwxbZepJy7kfotBpyzqTR1uKiQ9Xh1tBqzz7AfVyiLUxsoEmDRnJ6ggSW9EWGRAr2p9n5w78XqSxdQ2BAstN2LS"
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
