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
    "5YxZSEgPLGodzjKL1KEYpk7g9dLaEb4ZqQhpPQ74qwaqCeDx8Rjc17T1pgkR7eUXksfb8pcGyiSnyRrZqZi2c2yr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61n5LWXQSjAEuvjgxGjjCZnuY7j9iFKARnQczAiKGpu2UNrJhorLsdSmSXG6tkE4LXywVMXPMkShcaBWQoXjDh2j",
  "key1": "3vKEnFP8MPDhYbxTwbL2r8WP2919n4HkrvR8zaJ73ravTB4hr23FfX7MiW69gWrdEHqax7QvjkSemeRefx1PKoBs",
  "key2": "5MKE1HmZMqTWZcFCnsUr8bZw2tTeXur4N6gWrjNzbxj3eckzRcE6whd3Ri8vj597ky1NB7wn89jqseRNWaHn2DvY",
  "key3": "5rfLgpLwMraptw2unyzXnw7RtJVDr3uw35FSfEKXJQgXwxrkkLJENanSqQUTrGJ5toL3AvFHtoJdMzJoccUfo4YP",
  "key4": "3Qpa5cpuJ9kV5FpG7KWpLyGHzye5XqSwfMPQCsVXtf69ayirrw698Bvr16zdTKTrtuKADRmSdd4bep2nr3J4sH2e",
  "key5": "2yG2fNPiFxgtAjaeVGsBt6UWH5CUZEAbfnWyYDWVwyKgYGFYiMjM9XphEMNYVtTh1qjECwcTX2Zzym4itGkc4yYQ",
  "key6": "23aRmNUxo2UhykA7FgGGZASP5HCTstxS13badPepzczvRv1zn4yXgQNAzpf9gWMUPBYJJQnHHAFteVWYkJ2TiY2D",
  "key7": "rYhb5rPK4gjUkMmnhj9L4SDYCQiPEvCsxkvrcR9Kmwwfqa7UAtYx2s8c9V2Fq3SJyzQNaDYHayiQERwHYiXKiB6",
  "key8": "ZFXvnQ489o4QDHM1J9TXascyNFsYbZAxY8a6iin1V35MsKarxBcpDo77f6KEpm8cw8v64uwrsmq72fHdG8qpQfS",
  "key9": "2eEhixPBu1Hm3wX8Ck54MHEvoNTJMUNUsNGPM9tUUvxLtXHUv1FjnTXaL2Rd9Aadyb4c7T1cRAvHaHQ15ajZEDUD",
  "key10": "2fVKw19V7r1XpgqYgLNuhR2qsULm82SRpo31j58ZbvWDiEND2ByvLbTbfCLUiEZwBbDmWA5Jv1HYPN5odTB43nQJ",
  "key11": "4ze1U1HNXiW8hE4UV7DWxrm1SbdMupcmh6DDWNuaezT5kjUEmFYytu243vDjUvhecsCigMCMGGRYEXAbcj7Eg71",
  "key12": "4ggVAPyzW3sefwsQEtcg1YQq8K5RtKMGCw1ixodxB34N76Qn2kQwFnYvef6fR99bYoiJfqkXSRfKd6qtB6h88KXR",
  "key13": "44ibhookPVWuwqLoJZnxvXDcHiXratELi5ET67pLZkMX7WV85mT2QVumKxwe8WWv9Ry3GuCxSiXzHU74hzgAJh4Y",
  "key14": "2L5S9sSpXEhSoriqN3cf7QE5heHgqPVcK6mvxBSWRcZ9LbPhTCw5zUikCV5UiBR2VWjuXv9K7q6ic9cJuEATDc2N",
  "key15": "4pSRPgQgX6c7qFUgyzWByyLocMeTzJzJYkz3TTziJhoAdGUG1oRKVFH15xb5G1UEGqQx3KrhcCdnh1P7H5CsTcDH",
  "key16": "3YTF4mdxNU1kzfM9QmpfYHVLNkjCM7dDAi8JBE1xYYNrJTm8x9FVEqphtqjw2tjFKu12QyEDpMShSsean1jctH4f",
  "key17": "5MHR7f6XG9gyGHH1nK6Jyn9mYc3F4aHLA8ZEswBZQ6HoTYvsB8psMyRD9R1JwCxXWCAgJdyoLK7Wyqk3NFAXoYwH",
  "key18": "K5UnpxU9faX77MhW2ZCexWLKk62pnTRdasT1QCe4EzEXF1ZberdeVWi6GrRToX7fBMwToY64EhXZ844eyySKSrN",
  "key19": "36FEoKyFFTvWZMchPy7T7Vbt2nAZ9Cq26FLEZLDr9X6LTjnFfCTbLt1CNoTsuHHox91XW1g8MiV3p2BvCu6uqw1Y",
  "key20": "2Uca6BCByoTD222JVRhXmpyZr8AyzSMjdHdMXQZnbY4vtCmBdb5xhBkA9QHe8m3UCgN18qxozVqwCAo5tVkVf3d6",
  "key21": "5BwBZALJyr9NfZoHP3KuKNTCxLX9G73Hxpa9KTgSZoYBYu4YcGfa8H9ACLEWXGrF8XVQRj8w3tfu9Ci5oKrmAQrJ",
  "key22": "5g2iqNFRhGtpYam76mvxRudZd7T3GibMxa9ZwEDZt2pRjJgjN7Fc3tpR3mnwFpUpLcLm2QLecyJ6QLMjXpbqAzAo",
  "key23": "3ABuB2KoWbwDZ8z5u4cnNDBxyibKZDSd7LUfqKmqHcdRvpYmaheodz8FNwY5NwSz9n6e4aShQXgNArxri6v1bU3o",
  "key24": "3iL7wGWp3S5FYY4bmy9fkoTMjhouhQYWfULAcM83xLFr1av7wastgiuumRH69N9FibMQ2aMcXs3ZoDuUNKwsQJmG",
  "key25": "4BAjPsCnkETGbXwvw8Rbk6WAu88jxQdfJC8Vg4H5jVceEtsL13HRXAUV4NSuWLNRwdRKb3ABPtaZqrhqoB2WL4Cw",
  "key26": "555KHExmj5dnCRe85sNS4brNLa785o7nGDFBECv6FCKeXaKx3SEh3ZDbau3ckftBDkidaZToa3SdPgUXqwveqwQA",
  "key27": "2JVFbRgib68KDhmkm2v5Drj3mzK9FLmA6f6UX4JZfdis5sBB9HwDj1KGBoDtgKwb5vpEMCKZ4Yhh2sPPVWHHafir",
  "key28": "DVkJiSo82rUhUVwLzCACzdWWFaTHrCTwP8Qx38PG25VXMM38nKKdp8fGoVCXuvWivd1w9oXvbf5DZs5fPQMYhnb",
  "key29": "3JhRnZPwFc1yRGNT4Vppsos3kz2SqFgDzX2jhvd3gnjYr3hCCx9bWux2S57TG5YY8j3GPf9qbYDFCC7sxxo4Y88r",
  "key30": "3UoooFCqev7H72JFtAfnfbSEVuKAPQf6qYBWSRiRRi1uCxj2ptngn6ysNdDtYxMt4RYSVzK3LGG1b9D9rGpny9gr",
  "key31": "3UVDx796hvnLFaxgcPu8Pw1Sxw9uhw9qPCErjodMUYbQ3Ui98SS7gbMtCXxTCspxJprwwk2Bz6kcmxAntkdjGvRv",
  "key32": "3mMEAsM2FmVn91WXMy2pEvRa9mvHAbTtsmw2od9vHG5g9tng4HR4Rt1d7s44AKfmZ4h9RW8fnua7qJDW28z1mh7x",
  "key33": "2Y3knXNdN86nKat3WWtFGpJuzG76Z4gFcokGRagfkYe2umJdxJivGcy1S3Q3QudRXHs27S3n4MUgvEvf5frf3BjH",
  "key34": "vbJ6MQhrCvbwVStdWcMGX5ZiNBh133daPzQ1fikgJBs1L1XfsogqvroeSF51We5VW1d7tMVMFJDPyywjifG28oj",
  "key35": "4NnRdFE6KEPEJPBNiVBRC5MNHu8X1YkmHmi3QtAgm144Dpp41uh8eVdN3zXjWt1HKEBsiWYCERSaVh9URhoVsmbc"
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
