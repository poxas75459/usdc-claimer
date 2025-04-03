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
    "5wTCKQ425oUz5niRYQWR8MMJ2q3QbiaxLxSf4YD5wVsZNvvtyozhb23C1J1omypu2orjJuaAW6CthSfwu4iUrcNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e1LJUiY1xrfzMAcpBHaUGT6QAf2DVTRLGn74s8Js4RUpmbvGm4fUHeQ69xLGFYv7LrK3ugLxgxSfYwAZ43Tg1F",
  "key1": "3YYX8DdcVDs8GypqY4z3EwpB5GMeUVPZGWHrf8s74qDPb1mmUKdodXoYdKUMgDG9bAnEsRKYMiJzVJ3vXgE1DTjR",
  "key2": "jdJ8UMU3h7Espoa1Zjd8smRxqGWgXcQeMikkbM48DLKWwAkyDPNCp8pRQmbVpiU17d7foX5m2rPENLkkPTPHBcd",
  "key3": "uqyB53aH8UjtsrBpzEsTsZW1XtCYPngbApfFF2knSQfCfzLMDFKXJdce84PmtURcTVHMiXfjLucjq4Rc6bkNobZ",
  "key4": "5euU1ota4ZHDfUy9X23VeJckFadAojJFZ16mQUsTYqk4yPpKCBNMvg2DGA61ZWEywwxeTZARkeimq3miAWsuWHP4",
  "key5": "4Ve8J2SZvXeVMc4uhk63nBZq2nchXUFjU5DRNjrpfC6ovnYsx43MmBa5dNpb7FyKqfnqLhXBLgr3dyuAQtPXxZgE",
  "key6": "63XVvf1cRKoLmAP7v75RNoZGxzLVGpRXheZqaSSB7kW3GezZU3tAdAgwTz3956HUeAvQoXGYyZ7JsN3WaFW9pKNB",
  "key7": "5ZJgpTxn4ub7qUcsxictnLNk1m8uXKkLSWjVFHX2HSvRtaKRi2DCHoEGJiQ9xkVuzMVrhtPtG8VEFjnMh9JW9MFv",
  "key8": "3dFjkd1EhawRg7RJhR6Y7g3sEpW4EbczNcU77V6tBtZZfC35khHXRnHRR5MMSw11NkaPgFif2kuj2X7esznFS8dg",
  "key9": "H581aAE79tPWs7emRwVSnh59aLE9LkvUmHjxrJRG4Qy8dezWpkDNYZG6ZhyNeHvE6Vd6QSD5XosCx7A1A4czwmp",
  "key10": "5AjPuhREfvnXrvKbSEpviYzMJWRPhRetwWAcS8xGkrGEFVmy9hwdTZaXXn1RQZdVuRcGr89owMUaV9FiYq3qTjQz",
  "key11": "66s4zHsN26Rw7y9WCPYSEef8sbdWjr7bwu4EwfYwT3jQyaFpPtJkidTayYwoCcRLPJAtLHsyDcUqtSC6S1p6C4ZT",
  "key12": "5kVUCXPj3UCKmxuHRMLMKHukjzxKEBb2z3MEk5YNDUMbvBEZY6a781bdPctHeVKWEmJAjhLsExCWryFKiDnwSiLu",
  "key13": "2NVa2mhwQLBVn5GSsWHT7sgaZJYyYaUMByZ4w9FCw8UQwVF71Qfx8nc9vEXhhGPMeGW3oQcEpuQ282x77nRkSMpM",
  "key14": "4Yn6Y29DevVajvaG1kWF6j4jqt2n5fR34FfvNzhPdWYEN2esLYxdF544vCewJaXzd8kaT39YXVBzY862mVKHq58h",
  "key15": "2u9XYhY3WMgKAzFfWHYYyPQvJPxJs97ketaaF1e2NWcASXENh2nE81QNEHw4G3MCEYg2LX71fJhuXijEk5AJxYcS",
  "key16": "5V1xuYenUkLW2G19UZFNxfNqGfy6BfDGXMP6b5WYcKm4Nj2L9DJaNB18KGdzYt7GnWGtZZnVrr8wbjxYDcCMW4AE",
  "key17": "4mFCuSCHG1B3B5EYsULcPCFVMRaVVxhxB8o7U3QCeAmW6xrQEysVGWu2Q85b3fg5A4QSncStvyxdex63NkMAd5YK",
  "key18": "4d1TSkAYwu22NePUwAkAhkuCBLqqn8awKZWwVnMgVLPZydGNWf3caLic2EhjWHNTR171xTJqggMyubDoYGFNJBo3",
  "key19": "4JWqmGf5EiE9W7RBPRwxPWBeV5eiLqBerBe1kWBbxsn3NAwnAYsaaKdt4EGbLMRevYuW6vuhgrEoYpjDEVMwEUKt",
  "key20": "3w2DsakzEjYycTKAJnhTFVJmuQvqs8xgMWvJg1cpciSN89sWidRXRPwqV9YBmeQdXBytBgYktotDhkbGGhMgsCdU",
  "key21": "45ANiDWxjUA5GQ7Jrrv5Ln1LYLV4ocibsDsqqNJTBUB1GBxCwSvsXSzvFGt5PoU3u6GJKncyh7VfFiDCaBm9ME8r",
  "key22": "ASmuxjfpPKdTxqWaWWzhEWG3qaGK1Adb5vW5Y81EUKG4LfQvcs6JhKJrXQerDYPh5UzTqbiMGwYbuFjZh8ZM5zH",
  "key23": "2kWSgXGcYSHsmcHQM4L8q7nC1akUB5XTrxxRGyc7jAm8vKU8d73PWzvwh5Rtw64vyLdezKQLt1wi2iumTojAoUGE",
  "key24": "4covkJAnV6rd2ToFMXatJ4ySTFwt1Ho4frPpLvBifyFx6bPKJEVDr6EHocpcx8dRfZ9tVnhcKnbT4JDi1dHrBRpg",
  "key25": "4jdjfoF9HoBKpNEQwzZ248nhMoBeuKGzpKBzmQzBxLtnvGPYr5cMw76n2c9UfLZ5C2p7JSdeaPKTrJZvHbCzFRxN",
  "key26": "4Dbdxi37FCAG8KsjP6Qg4s3yMVtyH8Ec1G6SzBAbdTF7h8kuRs9j7wNe1bHMNMGPKTLmVbnREpC1EBopqi5XCp2z",
  "key27": "KBjJZfCXD1zSpb7zpYj9PqDWeCNF1C8EsV9rc2kteyYdpPuU4Lmvb1u25EHKELXwtfF1d8gBqx7gMdDqFAy7sw1",
  "key28": "4FL7fBaPGBKhF9my5NiwmbESdqx7BzdCHWDYLhXDoTJMCdxDA3M7HjxZXzqfYDvoQ62RTBJBJdc7V8Tey25Sd2yG",
  "key29": "29D65kiQFfCQGyUct46GJu4pQRteRTpQrueMVZ8geMVMBQvfVe3H2ASvP41LTXvDVdNaunpuCPqeaFLVUDgbpWbd",
  "key30": "3tvRnLqv6FWr5eJZNrxkDH7GBibo3rnToEYKsnnQ76bZhPn66wDarUrNcsxJSsCjRXSoSVNcZHWjwdvNfr6BoULm",
  "key31": "xy9614ESrcNJQXU45ax73HQVHRruDdu6bi39K3yhkeB9GtWNw1hXdQn8HBvQi374FwVE8v5fi6ZEbr5Q3z19cYh",
  "key32": "4KaeP6VvbgYedKLEjJKqZwKVGXMhPscANkNvwPHGKp3J4QuRTUKvP2A6KqD51LwLfvBh2Yn48qkVaxPcoxNjmtnk",
  "key33": "2w8LqmLiEUsGXc4f31oy8ksxz5SFWdY2QY4ZChPySwdsiJWSkHQDPpp9ziqRRbDXyFCTazbnJpwzRGi9ivbSnHVD",
  "key34": "25nCSmHKzg18dff5Qh49y1wm1V5aVwjn4XYTC5rrHP7vSviosk26eTo6sZeHJvt7HHPW2EJr2KakxfTczSX1GLvp",
  "key35": "3k19q1hW7kCryJyFttFLNbma5LzJNnxg1ysQgTnbPjURV1Hq57XFsaBy3EFEyvrAEDcwtjncKvt6Z39p9VTUFNPa",
  "key36": "5jhq21jSRNP1a8ZMD2E7UYnmCgDJpjQYg7fy4PuWuUkEb1nQovzsMVtqQYjsUnsiZZstWLDf6TvhMvsEHSDiG1ps",
  "key37": "5TC3d39JeEJkByynbZE4BWSDfFePKxFp9YhYBuNCjW8Eb5YDZpGvdnLTNkQBHhiBpX27opwNYfX14rFhHv1XkBgg",
  "key38": "5ktMK4PpBftbzbpwzTQF8a6ii5FDSfnG3ovcDY637fWQtWFYc7A3RgFgNJ4mbVTpgV9KBuDzqw5WT4g4efwjd698",
  "key39": "4Z62aRNK9AHNnX2edx8tv66DnvUb5K14mCw5a6xGkYSwZQesKmR55tkcyjDPTvb23RhWPbSbpdXyJcRud6aiA3c8",
  "key40": "o18zjM9uabdLn9Pko5MoHtQWKZHiBjnT4N6JoomN4YgLYhXchDNLwQhfZDtqyF8PZ2576E91Kw1Q1vwmAo2jcvj",
  "key41": "5t722DeAGx63RLodszZsqs1ekkmaYeY6AEHreayWnfH1g7w9X8Bf4U4yRaRCdDBzgij8qnFn5GGxwAQw496a7UZ",
  "key42": "4NLUp36LSqke258KVTvh7aaGtQdguGD8fpa7zUAKDEnKz1bnvv33Eiy9ihPtbA7922rDiazDwFhHXUtrk2GuwQkd",
  "key43": "3E8LnagJ6QZzqQyXC9GYeYvtLtLN5orqVQexYQ7PJjJGKhLr3Yhf3QEpAxz26kLrgfpLpaoDk2rFvZr1NyKwdALT",
  "key44": "8fagyZdP3z2u9Qf82JEm9eVvoG8BirPFCLC1e7aYFq7cNP5vEaTSGXJVtQrjGviyM45NUyACTvYFJp5AdmrpDb3",
  "key45": "3L4LJag7wo4zxuAkenW5PGgpsryTAUTo2gkjqqJMpLyNgFVM61FiCNzEfCg2ZYEXhWKyt7AHzkb3p8Jy98wUY8TL",
  "key46": "4gwEBpGuEPZWEA1KsnJ6FB6NtWo6yc3w5Zb8Ytoq5fTNyjvQ9m7b19b6xWgRCHv5JsEWTyQNNr1cEV2cah9jyamx",
  "key47": "RN2tyRqYY2KZmkW8rqecLuEeKHaw2frH2F8u6fEr3f8SCUYBPz5LnZ3rXtRyD6GT6GpK6TrPCQq4QQ35B3RgeHn",
  "key48": "zEaFCZ86eQZjt811nFHjZh3x3av94vrQA82c3bpryGS5HCxr2A9jeGxkgwETn9FWvKkwWLFXhWh2rFqnqRvR2uS",
  "key49": "23TsKYyvcWwjMgm5RLcabqXAtuMC2ampwKHxc3Sk4gaQc32oJ4L2qr1WrBkNto5pqGVJJKJYYVLkV3fqKw1Lb82Q"
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
