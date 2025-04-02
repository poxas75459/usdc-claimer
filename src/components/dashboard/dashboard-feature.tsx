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
    "SN46fVtdXsP7YJpfLFs4ppDG9VgWLNB64DRsnvUrUxpAD5guNxV5ZeVQSnHijjLacr5jkBieXJrswBdzEssbXbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SfLXAhWzQFAVSUASiRaXnHnRbjv6AXpJ4zcLd41sNf731PcYzbqEf5qUXwKoCRvHVr1BQTJbQ8KqAyTWNtFPHmG",
  "key1": "47UjE1JzLZTcguPF9cCjArXHKSBXUFjS6mHmnfVYwSxrSHXptS2JaHhCgSWjFvrZVSrsJfoyszn5f4HeRWNqWqb2",
  "key2": "57iUzNKmpG6HBCjjeZqayLNTGow5hndgfssShWrNBoRVTdn696L4PgaGa3N9fegNBNfz7tGkcVeWCzF5XfGx514T",
  "key3": "2P5rzuK7brEoUF6cm2vpkjvxjbaiaHaB3cXkEhUiDSV3hNXMaAJivDJjSogUNkrSijFxeNrCRzcQMMWYA32ciPRL",
  "key4": "5BqMdrwek4gDbyF69hA1HtdK7FELRi9AT5dFhuQDLnR78XDtd9R8i6d3koQqYkG6u7a17h81wtQ1xG34t54AKR9c",
  "key5": "3G1e74tcttkVZxTWUz6dLYo3WD4KXbSGdr3PvEP95JftX3psDcc9Seo8M2g8FzS4XWTKwRvTh25dgycFaJLvXU5c",
  "key6": "pAU8aJr32x68mWP69bksgdyGZEPYZmNSG2ZvuyWuVVyWVRY8rH9H6kutMYGjphJKxJQbc6BXoD8qKpjtdxWSbGX",
  "key7": "i52cXwgDWAo5fd6pEViQ3WcEAwVh1AHCsvBo2zhkzYbPhMn1tVYN2ZKVaFLuLRhW39fY5A17E34TZJyeSncksrw",
  "key8": "3extLd9SQBXHC3xPM4xYGH2MbZz9K8cgYKJbggQh99tVNukp8Uj5W3y8YG1mZCju1QKszaoasYvFrm4LGysYojzA",
  "key9": "65a8CdHETuGo6JHR5Df18x2YP65rNRLCrVvMN1BPdmhtUPDhfoNU59KqSU8jxEiM24w2Dq3BoxjmhrijE7UXDThR",
  "key10": "azU2ZMAJfhRcdHqEjv7GwTRwF4phTg49A1bRwPdqjgAFhYVK2TiKV6mm3NFxw5wmyHytaLpNFw2Cw2LMbAKKNf4",
  "key11": "2Xy3B1fNzAioE42PMoA5vQ8p9mVafGUXoNGaCfaeMqhFU9ZsbWG9bqP9DzZxBS7Yg2m9xDRX8yZyLW9xRN3ojrL8",
  "key12": "5EmfukYZUHjkddi5Zwt1Cvrm7K8MXEpHTreK8Cbm4mxhqShtsz6Kke5he1cN7nervyPpTHcCqaQhV94Y8CN7ZuHf",
  "key13": "2ATUyuAAxWPYHyWcoSUhaXRPQDfEjW4dMrHZKM7C6wLKAZeUmffvhebToMyYr8ZYGMbRCCGUcbvN9BJRo6AUu5qc",
  "key14": "3qXNgi1wJh2br3EAfhgBtq5cq1y7eBGiq2rfx3GPBfrBStL1HLTr1QBXUZkhDE7uE3nPWoiA9kuXE4K6vLaJeNh5",
  "key15": "5GzeWD5Nv8mXQNvAEng7GHnhun7FPFvpD37M1wxeWUXiF6pkPXv3pK9hQDeLPFkgYcqffyeQWdAyynd9ZsxUBidf",
  "key16": "2bzxropPbY1mSP8W4NpE3aTLUS91v8FwqcPhGQVAMXk43gBzXo3dsM8NMn3NVfG2taCDYAbVRqQwPyWAcT2NJDdP",
  "key17": "4cbpqX1Kgxc8WkhB8RVceqHdXEd1oYc53ttPBT4DoFP5JD9JznKmb57cnbNJ7PDi6jHt7bu3wj4hrXDwCRcSFLaR",
  "key18": "66CdKzx8TX397gEPK37q9DY91egLcvfrij31J6A8r8pJKzHGVWxLr7RSoQmApWxFwo6HVYUAGnnP3J6KXgrRYEbg",
  "key19": "2JNoMp69YA8cJs8ttEUf9XyngvwsDKGvpvoGJHtxNbAzjeHfHeXEDcesedQXJqZaGVdWskVkfBjUrh99e3XgQX8j",
  "key20": "5BCFmFJ1NSwhKiqWkEKieM3ToAxjL2jHZXYjifc7W711E9Sryo5T9ieBnXuutkYo66j1i13qrxoqx5KUbCgY916i",
  "key21": "3p9nQn4XwBBmi54KKPbNXXt8Ftw4miG8GfNQ74nTftjAR4muC7sPFjUAUsshnZB5DazYuEiLjDpE4pYYavCXKK8G",
  "key22": "y4i7hzMoPRW414syvizURJaZJuY6xypzNDQJFSjKEFNB2U5foaBaEHyf25rDhCQ97MGug5Kcs51VE7qJkzgxChu",
  "key23": "2Md7bDEAFuZ8CgKr7BSsm6JpJeZQ69PWnAppdQYL7i1ngdUHe3bvaJ77WgdQz1HGBTefWrWk262K44reCYmSS7F5",
  "key24": "2e9PobcvWSkWoncWHXVkMwpQzKwmTsNQvECVJdRKBHGu2xgrYyo867dBAphw3x4J8G88vVVfBiRpRh98jVGfnJE1",
  "key25": "5ZEXHBkKcXKrRqr9dhEhnX9QNTNqBfzbAfJDaRCgcHJi34NkGFTQD8EM7aGJHB8FKP89sRWPrVMjT3M8S4ZztFrp",
  "key26": "5m71yaiBCwGPE8ojTJzSjD6L1VmC3ALzVXmGHrGVx5SrbitPjJbLn9nB1DRsZwW2EDXE32mKQX7sUDuT6iKEza7H",
  "key27": "3SL9aZQDGPSUyaHCzj2zVxpA2afFchv4tn6CPXCuToPdjmmrHoAHnJhjMK6v461xs6WZaUQsUESSgGN4ahyPEuau",
  "key28": "vfsjbV6Bd61ANwqdGN9AEm82NxM7BegVpbJVs7DcqD8KJ2eoLPRozbY847JAmMRQn4gyWQA76hoTXkyQyMC64Gh",
  "key29": "5ZwtDFtjJ4xkNe43UjsK3vUomtuokcomCNH3vNZJKLwD9vQM7XKMUMEEuiYGtzTryGurfanL6bxrU2Ap2betjrYw",
  "key30": "rmgED4MxC6EfUdxsBjFoFGVCNHLyM8rU6DEe9G7dPaE6qnqvUCuC578zsrREDkCSrGdY9Uz299XdHDf9vYAg2xL",
  "key31": "4YGjwkgz38NcUTw3sTgUzVsnVoHB5GPtjp2rnWZgJxgJnVeGJGQ4qpbUtzQTvGAfzd8wYGuYSWeQwra3heSjHJqC",
  "key32": "3Srfk91LMt94Hq48FbwFJVQJwKcWMnYpjMj5LMvj2jiZteERMw8iMihTw8CYfr9TVS29WuVT8GtKWdeYTVPGRQaa",
  "key33": "Xw91EQq1LTouZ392cTCHUeqTWjGLvFEGMurcYLrWcXueH8y1NNtPyYkTuBJHwt5Wj65rdhy74B2oGLeN5iyunuC",
  "key34": "4rYSdzcFQbGbrFUHDVrC7ugVbWUGRrT3VUjDBHbJxuAjTtf97LHuhfSze37RDn9paYihNBEi2xcBahCAJBDhGrWh",
  "key35": "615pobvqyX4USmRHvTvEvJd4DhKsCuZhzKQQXyamKXG3hrL9x58YndKNUTvgE6PDqTfNgSZUCKVF8XHwrkLhFZ1f",
  "key36": "Ft8qgX9d1qVWhZ9JyF9RVkLWUbdNrKhsxadkrGmCLAyR9fEnts4ZLV9e6fRqy572M6GjD1FSVTaujVKVe5GtX4g",
  "key37": "FpWQ1n9HWu9FRdKmw7mkcz2GJzK5kdaou3HAFxuRAsjosZUyHm4PxiTUeRrpZFvUZTveQHCnGFFPFASkfT6YX6o"
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
