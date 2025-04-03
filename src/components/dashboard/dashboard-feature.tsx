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
    "5z6CN98PQJqibQyCUZyyKXviGxnMcsVwakBAQAqzWRkWtdcEeho4dbQFiiVS8H7FHrWhXDyud8VE4tF1ZWynkzhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GK2xFxx6MfBKE7MHjmWEiM8HSf9LP8ArzXZ2UoPLDEtWBNEYQ7gMCjvMV3XTV6ByGHvYQEy2cSBpF7yxbSSkBzX",
  "key1": "J5ZgxLmYUSEnh2PCGiYjAH63KsSjnpwkq9EVkiPKTCwehcJqGaCAVpDkgdrjRcu22gSCiEzxzxJfTWgeNBmVSqj",
  "key2": "v9KA7uFPxXvxz1zzSYyuqaTZmnLGcEfp3QsoHjyBmj5zS6ypfisq2zNjvrZ4xVPpSoQ2TsTBuJvwBzhn6JMe6Fm",
  "key3": "BEZsKsbRMuQHAGDDKgRyKCLjyqU3J4kz3u7B3FXivZ928JwynvgbZao1tWELc7w5x33KSNgA69gnDMuQiKjT6RY",
  "key4": "3yP9DXxTciWbjneDDNtKutCPcQAVMghR6NebHH6dnsyJQGXjnU4AuTM98Aa1mxCatXxB1HXzeqY3Gm6m2NVANJ6v",
  "key5": "2gZrkQxiPVVuvoJAhfN7Zn9y6cf8g748NXFDVa1FZJLLkj3MTCbQ8DhJs2jY2jov6RBMgKA2yywCQTuXkWeETedY",
  "key6": "2ePpa9Kci5JgevRHtNaJeqahDYsDsoW1iMnowSAtyvxscPBUHaJ1THTi3gbtqcfPYj5iE9jgek9C8b827TLbWHT9",
  "key7": "4hs6y8mDRgzVbzcdv18NPFRkUwqLsLmcGXh2eGSSqqgRXoL9uKNK9JvuTFntwF69f4ooWzs3Px76aMa1hmSG1FcA",
  "key8": "5ExsimQGEXYgSzfH2BND4KZvpi8w1FadxGLKLnSudgAAhnuQCZxZH99pRZoH72evnLAe7TVAWtnX6mhce6DT698",
  "key9": "Hd1sBbbJL7QnFWrY6wRJ5pKmaFU2iXGT7hPN65iHpeQ9CkNhNRWc5aK4dz8mxzkhCVf7AwYprLGyXCn5UzMhPST",
  "key10": "2PDWcHmdWKyo17z3h6ykvGMPzwPicBSi3Vip3vaj1WDFJpuifhk2syrfykvYj5N1W2eY2mb8Y6sWKrmsBirvPfRQ",
  "key11": "56gKZ5xfsYagNJQXhMHGnvKqkDrDszrG1JpjRL3zEUt7NJvfzX7iuDPT9dxcHAyLPoaZTTYwUy38bWV9sD2JQqky",
  "key12": "54pQ7myLPi5EzsyMHGqVZEeGD76RgpsNhawvWrcCtef1AURAUUP2JT7NjHBFSdDe4CisY6RMpr5jjsA2UwY7gjxb",
  "key13": "62rGkM2CWePTsMDizyStJXt6HMavVTWjHxEqZzimvfQoEcnyudZwAaKjTuQhpoqbko1qZcooMSQobovWseJv7zeW",
  "key14": "5AFCKdLTdiA9jDVGZvvZNVzFkbT7q8QxjYeb3doo7vKsjDxKFimcrqDc5ZhWWs4qiv8ezt61c8Md3QPmqKE9SwDu",
  "key15": "NiSoeQLxZNBYdUbK5tC9MqxfcNcnf246xqifCidG3nccGXjBRD9w1ugrHvwiio2AVpWcDvPS6cztNDZ5xDMNhDB",
  "key16": "47bHwKZ6Pkxc92KYw1XV1K3FYqL1NFyXzjLACjeNv6WDw7wUbVjd4wd25SoH2KrarqNGR221RE5YS6GWuTDaNs1h",
  "key17": "24HrXf1vH7SDsb3qMwFwLkPLHbXMRK52uyUy1RR4Y9B5bp5RBW4NBosMpjKpX6CPiDk17NdRa8ciHvy5tHTvQji8",
  "key18": "3AxWrBdvMz1i3DdG71nyKC4xYVWrAtWTAJisv7oajZBAhKVkWufVduugaqvaVqAjQHkq8v93bs2bmSUnuTmwCoMW",
  "key19": "2YVt8f8YUjHeXw2NS4VtkrHQsy3wHEKmu2acQRm9cm2BdZ9DBRZViLsQopUdux1EfxhbWJvrsA84PLb4ZhgX4Z3f",
  "key20": "2GCYrtrVtmquhi871rF7P628QGE6cjAYCN84dAVhBZ5bZzdVddQNVhhmXaDniYss28JDoXMgAGd9EbxKDbgHmHaR",
  "key21": "2F3KubXpen8kkNZXmPeirsG7fScBUekKtS2TJ8epW8jXGsz9X4vSXhk4yzWpnnty85bESpkHNSXYpUtzQA1w1fXr",
  "key22": "2smBCbHSnumqVzgBL114LtTrhALc9nTaQ2E7zzh2xNoBuhDhanEYkZAtKex2p4V1GJhpXM9JF3fXKBCz7xEdVKp",
  "key23": "4jXqMc1gjJryG7WkPKMRKfgJgXjmWqe7iCNuPU47axc7UBBhhW8kxHSMgwJHGzJ6MyxMwcX8h9QXfEoHtRbFk5ud",
  "key24": "2cPr2e9Pm6W87b49FhDdxjxn4WeaJAEn4AYjVWh3DR3qPH7uS4fYkNQFLM9EYeQ36tJVdTggndr5TtiQ6Pm36avd",
  "key25": "4pGtHDiHDLj9v6yfFrzabouoYHVqM8tHwPLBVdKqeeB3ogR8ZHbGU64Y6fGiZfFQtDvkBRQKDZYi54WyCZ94CgXf",
  "key26": "5rjJ7wMwiMDx8qyEPmEKHYe6Wz8uYG2Ju5zBYRiV1qbFKr4JX9thsAqwQSib5hWbB3nXyNHDBSCQM2JQbc2PLn4A",
  "key27": "54uGkErZRnS1edHjtnNdg4JwaxjyYAWY2VASifLTYPH4ppReCsCQgeGjc61GeXMyKDunhy68z3QDmuNsx7qghuMe",
  "key28": "3Bdb9GVv5cAZesy12veKb4TZW39RwHA5QzsQU2ega4ymTdmZcukZLzLDnpPJW1pYoPjMPYf6vDxFgzEx5ge15foh",
  "key29": "zQXPMaYpyyRUHhwU2Lh1VHDddSyzhVfQrSJGhEcJkigUpQ3jscLjURH7KRWZ67CkEXQYdLaVYYCS8boCUTJTDtS",
  "key30": "S3bd9NuBWQPpYKLweEVUuH64Sw9XMEczEHv8SxdxzrBFvWNRgNmjAvsnHyayjWu4RuhCgpAhS274piZnaauUzzx",
  "key31": "5xxwtAHow2tVnx6Yki25dBgJeo3ebpJHWzbS3Tj8xfZRZ6kAu8xgUA3GbMDqLyu12bBs7HsPVbhDu75fSY9R7WEs",
  "key32": "4Yh1kgE3e47wd7ZWUy7jsp3p6gJsUVRRE2hYL4QCrWstkakAP5sPpK2iSSXfjVSg3betoitsqM6FNtyU58ak57hA",
  "key33": "5qp9QFDRv41q9GqUDSH36bhDJVTVgh54GCC1FphNjfH4MyEovZkDnWWB2N9P3Y5UcM7pGtU3cKSDuYLH5Ybzk2m1",
  "key34": "4Z1YLqunXyQrn5LQqQNBke8fDfbjVFmrcPAmj9rQTF3JN19E75tFCymcPuAJSn3wijJHi6UR2Dmhm3fAAehFepzj",
  "key35": "31jF2cgYzEmf7heGpQdWFKUF5pF5NcQYzmsQ1VznEF9eptXtTyoPNkqy4eNQM8pZ4c9HkcnKFEdBiwGA79Fr9xWr",
  "key36": "qi1VsbSK8BWdNowJxn56CLc4TRN5jBCVb3GfdpVCAyFsCg1XbGSbF6B2iiYqQnuQ5zX7ig592EXMuxzjfzzqLZZ",
  "key37": "SxfMJhTUQr4mYAXcmzVFx3pwsi9HqApgg2ibzMWNLUfwyk5TzhugzNYLKGB62gtSDyKvJtudB2pWq8o6rNUcRia",
  "key38": "mZfzXyvmBzLagtqmLohBPFW7agoesQUM2qXSiBT6RCQEA3JaEq1VdciktszmAFZVwcg97aY4b3ba2A2UgHUYpey",
  "key39": "5i9MddFRhQ4UieufDcvNZBEwHAYFvKuUGuC3b2mHEKitEPxRQtdH26qMiJxSSkP7oUNvtRHiSTXGhs1DdiNCSUB6",
  "key40": "37mCCCDPeUtAB1S9ifPj29PmvauSGMZdymQNVghon4RDevf1cZyb94BwiWdNwwCYn6S7RS2kdJLzqLBC3zVTqRde",
  "key41": "3L4gEApkmRW5mCd3Pm9wmQS4k2eKCh5MrbohTVW5st8bMA81naA1qhi9Kr5iaARqqGSkF5r5k5Rd7F5F86kBHGRg",
  "key42": "3RtFSyEB88Gv5cushs7cKA2Y84umJJ1bqw31SCYufXk9ghtqcf6Np129j31DqohPkr9pyJhBtzTpAvhHjdRGimxP",
  "key43": "4V7RvscUKKmtaaQbHecanwRd3Y766jsQLH7fyYtaSoev1oerK3U1oNp3TDwFGzjvzHg1gKwBgDRz8mT95zbTE1of",
  "key44": "TbRtrCfS7fjjbJ8YzdAZhYE15kuMtYnL9zm2ZRV7f3Zqh1vcV7kAnszyjBCyPhFtkvSaQ3SZWAdj7u7DX7TYtgq",
  "key45": "22eeRbjUgnct8s5z7mwbJekLopKrRfPqct6QNbi6yc4x7DWH4GCFBBYrtuKWruQ38PUJuct7qdogqmFFibawXJ5g"
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
