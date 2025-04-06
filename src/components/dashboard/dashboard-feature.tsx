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
    "3FkW91Wga14cshoApxirUonGnaUKFhgo1ohgkjZkZvi5iRdV9yWcYwP5voiUrYZyBNp5FruQaYSSU5cmc474G78k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uSvG9w2NcBa4JVL6ksqh6bqhheVepEAk1QoHgYgErfgbx6k1ry2acEBNWjU1rG5MBvoBV9yTcxnh29tqyPudWZ1",
  "key1": "4hpnKTm2kxEuK8adkhyDh7zJmCULypKYGwwXXRnHGFibH6ybwHPSWrNW5Df5LBCSg65bn4Abw1dGYV4HKaCLYFYM",
  "key2": "3g4EstQ3VNnJWUWoHU5DiWWwgTPm7CMiBa2PCDffSCcWCMUn4LHeEoJGLv34fwbc5jgAaEyWFK8t5Px28iwCBwfb",
  "key3": "5Nd43RqDWFceJc7z3nn7Pi8TzuR3VndHG9tdtbNLWNz3wZLcseyBhW6qnyHTFri9PgjuaikULiVE7ADjdXmDqVDU",
  "key4": "5CiyL4jHF1145jJhvwtNqChrMG7NDcHp62rZvagg8pQRMAj2V8HuM38D9KtB9S95qaoN5jBw6UBeKPi4KSGQjWTL",
  "key5": "4rphrGgpDRAD2D3CeZ41QRcK2H1WVA9RpHCxMUQokkSjHdLjs9qgDCJz9TpQkgb5U9pXSAb6vT5ARFzC64q3QbWt",
  "key6": "3WdDudEXXkHSbZEmgtA6J2gDqMEs3dyWjHWhvRyDkBwqzREbvY9tRXXsXm1Ls6cA65WbZibVRqzUVjc6zA7BBEVm",
  "key7": "4VHKNQ2x8xSfNZFp5jj9M7nwVNtVu4gFERAe3m798BqkCzVGKtmKDVv8LpXPEuf4CBAC7ZwUXAukWJ1a81DvGUUF",
  "key8": "3nXxmNADKFBmQm8XgkwfZGrMvgYP7YmXvNmXeEn8Ku6VC8NYwjE69jDLs9ZtpEMrJRQKvRkAs5otYXCeAHEtvX2Y",
  "key9": "5dFaVUvLXxWwHBi51sLvL9gV3zNfDadt15fKwpBF3D7LJZmEk6bEHSUoskBT2QXLLiEmGBCsvDyA8n1yMGfDhopY",
  "key10": "4wd2TFPkoZqxSUusBUE61xdnhqiY3PW24HodHBu7ycdRgk8Ko42aVzqL267qtBwoCc1UPvs8KApjoaeGzT2MB8Ee",
  "key11": "6Dz88KHeb6J12K3G3vMnWj3VkHPpk5Q5oxAoNHjbywf2UpCXmGK9wfZ71bVXQHKp4T7ngRnvPAnnwg7XLSwq9Bu",
  "key12": "5LMBnKX1GM6g68DyibtqhzbmiysjUnNfozecVAhZ3aSYpJibY8Y6KEBz1afV3gqJSjE1b4EbfhTYz8FeEtuiUbVS",
  "key13": "3HmgmajYhemkD9dw4E693xAPoRUghPET32XCczhnycEh6dtAzVemJC2dteFE9EMbGutBEjUY48qKSTZUpMH2oAtj",
  "key14": "5ZV8RrJmHQMa5uahSEXwsTfE6eT6UkMWtZruF5YCcQue5y621n9LU2QsnsBjJPDLfoNmm249f8DAxosKfvsUnRSk",
  "key15": "2YQup1DyYWgrYsHGM6gQ8oSZGYDcnNrzXJ4HnEK7dKdwV4yhpBfxcXzz9NkRAv8ubPG4wfAKWAi3ZRjJvojyXtVD",
  "key16": "2KrhL5X2rnG3S9w9qrri8v2pkyHwjwguPxRLTrc7mPGfvyUnTKCqFPeW6NAzsZeFg4cftHQJSLFqbGgeQdRdcqCA",
  "key17": "3fsBvb5AEyydAh2BeR9FVXwe37YhtNkBZtnzFisa6UatjaZMyd5nDqNAcDwVuKA84HWbyHrotxBk7fSJuLSHkftN",
  "key18": "5pkG4he16m2kdrSxy2uYE6UpS41wKAiDYjqvfpGQTBNoZJjvP3PFH2G93kXJuUU4sUMYVmqTqrozGu8MHAYxWPGj",
  "key19": "j3gKcjrx8H1x9igaYvT9J8KMiD3tk2QvNCSiHCreacsuz7e8MEcjarEqqG72VJLMbUUCjZgje661he8cUMsXony",
  "key20": "5sqEpHxNQFjze64LBioFRsUYSf6icCcq8rvrAmEEQVLQxpYsvcM4x3WiN8PxDnSvV12Pk8rVqVEw61jRASjpYVjX",
  "key21": "4DtxxpUhJy2orRiaTgTna3gqcitYebxb1w751Fr6FCAA8RoDC6HgGmKRJJQd2Agn5dYLxRd64qjYh9LFTK6SiTMr",
  "key22": "5sdh3Demh5buc5UbS4gB6dn6BhJfRiB9eAesssLcV8LWhwumpdW3uXoADJeFRDp23KzvBqqrWUA4Sg5uripkWCxf",
  "key23": "Wqbz2JVXacETLKhRbQD3pqCzGJTqQTXsofKfx312jyBF87WcVWtyFDZDNd2vCFH8mJWHKVEpKv2ZDPn591LRVa7",
  "key24": "5U7QUoZazzL7xkNLA7dY42qMaSJTt28oZKZgVuQfpCTbgpLf9ehwLQ7oFh75PFiJ9sWVE4MyF7gt4RTqmRLyAuhu",
  "key25": "4PBAh3b7P5EBi6siQtsRmDeeTyaFPH7NRoRSVkP29oQdvGiyRQ9hyPg3DW3UbWpabkUxzFfECA5i3NkuP8GF6jh3",
  "key26": "2uDBomx5cZ6atjt872PRUw1ihzcLYr67igQkSBYnr8aL148ALJpB5cNRtBcYHDPsH4yu2TMx4DNeEzxP64h8muXS",
  "key27": "4wQSCGwatJWWqFVVdjPmqGZQAdxRLEDr5EATfpWBbsJ2Jdi2dqM3S4hGYsCc8fLRzMJQTS4fwHuVqFqQsYF56Nci",
  "key28": "3p6JKPae4dVhEUubLW6gRnovS8VMd6zvLmBwwxZqK9Rs4bkwrrQBDvQqfsThVyQsyuCnuuGDg3mcVz8GMp2FWnSv",
  "key29": "3yiFPQw8mttaJiXeXdb8XQSyUcCaqYLfdsPwgntitMXbmQ82BsTbKhtNYTuwiRuscNm7j1ud4zDkYofKDfiPouty",
  "key30": "3wmXPRaphTjc1mbruBpW68sGrATmnWkUW31b2gQpxEWDebKejLLJhCqaqGrXmMDkLM8xaKjpVWBxrzbuYvaCFtwW",
  "key31": "4EKCfXDzFqfbmFS3u9hYCSeLgb1uWwGWYBQQczcrZ5NbA7vjVcaDTV6g2PinJveen2aggumeGXNwoffpbNByVTmr",
  "key32": "5Eqv4gCBVzSuNXHRjy3dKikSvW6PVpt5fX1j4NWKz1xXmfTXSK7KyTDeU75L5xuS6p7wVyq6FZ8Byaw8jA5Mj84U",
  "key33": "47HejQZT5u9hpgu2GFyUnm7yedBVgZYUmWTy4uRSorvABT5ttSSwGuibmMpxo8Tw6dD2ndvhTaXkkac5tcJXMTiM",
  "key34": "4xfHPDaLSR73xp3tSLDPjSLrXy5AGyoArohYoBUjXfhvN722jNunmKTHRb82e7c3Md69gMgN5CXUhMC3LpNT3m2T",
  "key35": "2zv3w7ZKfxHASxBytW374WV5R9vkXu7bHKs4J7rnndSYZ2dkrtbax3gSZAxLrSfdSBDdJqWx9D88Y3KQvvCfNZ9B",
  "key36": "2Lv5gyNkE2vx3rMsA8fv41oQdJ4tf8rwVErVnPspsjrPfFgSn4tLGkycGePCnT99pehji7HV1x18k7xAk4KiCxVY",
  "key37": "3yUrLkxyq2HnePuxPDZXscxT4jGNKxt5t4sTd9kY1X3WRMhiV1JggoBWtL5YL3ji9uyq87DdAY8B8jPUaxibtQBW",
  "key38": "3wRjjXXnX7FDYZX5o9TSE7RJb7UPRHTTP7s6DGmxewu7Ja1A4VCN8Mjch7a15GNkBmjd4oiG2nBcbSdHnkQ55oy8",
  "key39": "3etfZ3G3q7V9qddJxzXZ7DwVcTLKRRZy8rd8FLfyDvFUhriNpzpZvSVEhFBPdpHUmJBmFfFHmqTSvckhbwE9qerx"
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
