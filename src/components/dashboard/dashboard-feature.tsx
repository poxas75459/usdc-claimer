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
    "3jamgGhSaoyTV6GkMj9LsHzGwnCadmEbTudvBcGQYSmG4waUXqKyXh64cuqW2ypbs7Wy1tcQRvbmEgA4XMf3WtYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jsxRymUFhg8PVycmRPzGsFRHuT2m79WJCgZqeDeMNewWFh94s6koGviKPvDMmqZZe3PtXQXkgQcvfaDtj6fnUaw",
  "key1": "mfEgZzcnwG7MM8LtwGkcibuvhUc5MathqKcd15cstwZmQnbAvhgwd19Veyhkxe5vnBhFu3eQZUHAgRKwmHNqbvL",
  "key2": "5gg7NLdZ5ET1Gjp9a9hAzgDR7AqfkTrPiNoCu7qXJTPybgijo1TdGkvX9aCNcpvjSaPNuJP12Z5Mr9pB4dGYkdpL",
  "key3": "57b7zrApuXKw25BHp3W7gNmmhbSuVPZR45D6oBtYbmjxoYsp41TuhuyJJAVHhyzXBVXdjeqbYgpojF6BDKXNZBuY",
  "key4": "52g4S3Jq1WQJUA5hQ99agLuA6pjRCfEXEiPmNiwg6YmHjPYRrvnLbRXiRCCFTfmbcsdDvohr7met8kfohSqLWuxF",
  "key5": "4UvgC8SWTVynd5L6JLpNQQLHsMfcLw96Ujr9jrNopGeXGrcs6GjQCL6Ht4RtdE6pWKzE7BoCrdgk2nHFUsU311aw",
  "key6": "kYBupunEHuxi5rtYNrwvcGydeuieLaHE8V4QSHriL7H5yhBD8HhzDtYj1wXoimnCkg2BvH3Hubzs4N9iwJeUz91",
  "key7": "5JfvaYKxLU1euC8aVFDGuD9FGdmLXhrcb4DsUHW91jn9igeL7urHaLQk17Np1ziSERG5YeqFy4ydWFeWJ1PoRzBH",
  "key8": "3CwfDrHap2RKEc3EZEPp7na3TifwoZZPQmhDjn4UFjY2YA3Vfz7kEuF93RNCukc59fhL48xucF2FhcnpH58GNb9u",
  "key9": "4BzwYMLbJBzMHcmY3DSVaHjLweFzPSwGFzqStR4MFmAqDdTygFbK1TA4Y4xSwWicX9ruHCSWHcbTGKPfiMLaz9vo",
  "key10": "3xYCy37Y5BpYhMVnoTRqLrxSTtCVMqcveQsKLGJCUKmZu942kvz8URjgVbV3tEVt7DMVGA4VReei5kT4991nY6gC",
  "key11": "2oeEv4d4PaytQGZNrMuiMmc9hy624vG9diMBNvksZjZTwYxPQNEeCuM9UPDGAh3xH6tw4HFwuzkAczjfyPA9ySFm",
  "key12": "3QdDcjxnrrLeSiuA37eFJajWVPE8uF2sjHctn5164ifUFDk6weZSb323PNmWQq52yrWhFrfvfpMHHBjh8tM3pBX1",
  "key13": "3iZpV2oVnkcXZcztfkqh4o1yh5yrcXhTMoRwgNxCo6WG7ytmLyWEk22DoEBWSxX46XqJNLABEtdZiW4fm4StfRKp",
  "key14": "48ys4xHTdcBVHKkBxaAYK8ePojABfSx2n5YHc37k56kYGmUJ3Ry7NhMCJtXsPaaiuv2CGt2XeRvhaGt9hVDbGebF",
  "key15": "5B52AbuWqfJhs6DwKVGE7s99Mv8vmqgoicVbino1C6fiBTFAjgkhpQj5gCPxep1j3jWsDzAwDKe6iH3fTCVK5scj",
  "key16": "4ktSAkXWXX4JgXFvnkEa288fUqQeAcrFYLqY1GPA57Q7dJwBL1u8hnhkcz1vshBg9CdSP9ssr5PRfAjqWq3yCtzy",
  "key17": "H4iZBTQ83zAkfcAEN3zVSssPp3Vt3fYM1EZjZgt7AS27mHvUb5bxHu5GFHT9ggbGyqzcVWUWNw3Dk3Ays9EPQp8",
  "key18": "62axKi3JdMiRq9HSrQinSbUGDsapcRkJ3uRj9fV5hZBoQjCASrpU8hujHkm9CVMfiEyBdknw6TQdZ13iCGUCYJrK",
  "key19": "45TVojKK2GuLEed4sbovT8qc1EDLfT6C3sBHdPU7guuJwJMuPH7BU9FAFF8R8FiotMYNDFikjmLDag3VNoa1f2vZ",
  "key20": "jkq2w1m5DMVTmgVfnDPzXZWXR3C8WkmtrxbxW8fQsasXJvx2CXSto9YhY1rB34pJZD9HX9JzTM8L89wCWfRtvfc",
  "key21": "3FPyvavamiZHBFRoQsJiESkkEomux5ZCd6aCLxbSrkLE3As1fGW1uPz4YbkmW8AK4hTSQxDufrpvpK9tKWpjNn1i",
  "key22": "3gy1V8CkBfVRfTP1yMCe2udBcpv15LvGo7TAnfqEVyufnnui8e9HDVEU17hXJcTaWssSicPPrZ2evMMUBhxKkLAY",
  "key23": "qtKWTaWreutMuSpufwLaVngDtFSPvL6kByjZs3jXVTmk7P4o1e5oRzh2hn8JqZ9NRtGuBTzBvsVNjhDLswyWz1U",
  "key24": "5S1qapDHJTDV12C13Mu4yuW3KFyUsqWmhj6TKU6nJAedHoNomeDyTYorRLBqYjE9DhqZHWp7Q3YwxSnUDwjBfCri",
  "key25": "5kDNYoML3XSo1t6JhBf9oGg4mhMUKZNfXTnxmRs4R4vgRJf2nMjNdjJHjDm5FXosVESabvkiw77TCyYDXsXNqqjY",
  "key26": "5cCpZHDgqNQgLGbusjBZpb7CLi1opDV8wWKM6rdKCv14G5GX8se1Wnef1DsVAsumrPioAeHmtFAfCqVy5SG7DfgX",
  "key27": "2kDjuesYF2JizJRbkrzHWE4krAoQiui38aTqZMPyTT2UQdXPQ6fhi3hvkrYnqCghyd22gWJXwvgAjrAus9wwPLAT",
  "key28": "2rgzrhmcNxyazTzPFAp5vUrGHTK9nfehsdRpvQSjStYAByg4cDv1gyZqDouYBSGxXy8wFc5jUBmyW1Lf8TPgLziu",
  "key29": "37tx5cubemxX1bS2aGoxMaMkAMQpFLfY8oeeaGNq7WwyRPNdweQRzKJgqAHtTbCzqN1TmfeQmMJPwcwKeqUHciJM",
  "key30": "3TThTmkiUJon4LDJTrGjWur4M8GJtheMvjFBXgCXyU6Q9YHWtmNzLqb4k6WLduWbLxcDxBW6aGEWUJo5c319oSRx",
  "key31": "2DASAxm5WtTbCUYsfXwNCK4AU6NRjEJWiEZV6BLXgAwXW2QTFwMcbbqz4b74U1gDazsTPnS7rkCPwNLE1WFiCAD7",
  "key32": "4c4a79D26fBBXT2YmJJ6XY7BrL1dDakTN4tjrssXQsrhwuWAETNBCyXoAr9G41Mz2zzdQfMQ1NYnjDjEfjSLKvZH",
  "key33": "4LeeoNCp4Z9fkPEAY2xqDfdVDK5r7xCC7E7wQV2xjD1vFq3Usa7iQCp2QiUfCJArsspeFp6p3REWLQJkCsaYCokU",
  "key34": "zxUDJe5x2ojeeh3hdvSRK123gZTBkyCde9Qg88eH2g8TcHqLpV7DrJQoghcb4CZ76RzD6RqLrZbdPWMhkHbC1L3",
  "key35": "2w2ryg5zPmJWmjhjCiMTCqGZCMPrXkQee7xuKEjEvD1ZDJnugi1gpfZTsjHtwwGtNNvkYcGxPHAm6ZH2RvXvojcM",
  "key36": "9iBKCVxPdnLAduoRVG67hJX4aPW1dNv7VeNo9dbwDqSnbpFf3R5dpBwcjqQRtQYDi1sx4hnXFoZFTFw8ADwTkBR",
  "key37": "5FFdJDzDicw3PD2yKZA1j2gAPVU8qDtANSSxup73Jv6RMQRjTjzTLt8bVxYnnXX1as7RKxBBGwUssQtJdchgq5K3",
  "key38": "3XB8rzqPvYsAmNvPMAWJZzVqWdNJPawia4VoPTNg6Mos3mvooThA7Cdv9eyTCR7VJmk7YjqpiZFtHV78LCwZCe6V",
  "key39": "3KkB7N4CxaUu1a3QhGuPxTqFLr3KPzPwydBRVGz45Pekbz8mwwMUzobEaRgPBGiEcaoWRQ6ESDHi4sK2brw7qprW",
  "key40": "5FK8NK5fZtrNLTP71uCpSf7ypgGrCLFFCD62zyDsCEVWC7Qhk2bwtZsWur4Pm8DDMkB9wro3NrUwQbcZsahN3XZT",
  "key41": "4BEmNCAUhh5GWKxdms3RV2DFtVJdwPiGYFkZ7w2vfqcmohNnnuVzv3nQMgw3AZfSv8qrMV13CjarknJ6DBnPWNW",
  "key42": "4preg3n3o7rTqNcgZ4vp4atxDfA6icqgcUamDKQYwc6N7dhyz3aBkS1LuYx2kdsB9wYdooZtth8NVZGfJD1tThmD",
  "key43": "3AWoxyNRn9SKokgvNyQDp7W92z2nZGuceY6GyGuhz9raDmDt2nA7TFjXR4a89KdpHpVSyWRReQ81mKkKc6myZmtr",
  "key44": "5kpJPGqwJLLLqF2ccwN1fykgE33dTmEzAZHVLbvVQPcjqMNC5fmcWJyFLKmWA3FzbhtTAp5kYanC1DX1MjS8EWqN",
  "key45": "2u5pN1UnoDEJyQetjGKze1kTUuSBsswp92DsEpYwtLLNMy6cRJHFApR1KfELnT9Xy9adNnwmVKFaxk7RosGhvKsA",
  "key46": "4P4B8phsDRNBoBvtStYQ6utUYnqzBGFCEA6pHV2U8mcNnHCudNF8qa6jv33D43FsEWcLRdyhZoiQAJDKcoKsej1t",
  "key47": "4UqYuD7EADF8zBxo3BCtrwemHJtmGkfxzyRVdDEQNfwvrXWZ9nLDEyCWofoYUcxFcUfAN6zZ74zJJaCtNTEAKqWc",
  "key48": "27WWdHQJEqCp19wYrPqdsB23ua9hWk1cmRPcaaii3v8PAADKXt89ggB8ADRZqM141G3xyR4KJ2yS21VhJEJUACCf"
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
