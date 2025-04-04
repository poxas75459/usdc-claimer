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
    "266EeejBsrZgfpDGRQCwyyJ6tRrBkf63t94hurcSggFo4phkJ9jc6sJWWmTgpDHNg7LqrrUFtcjbHvkPxMyNbE83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42182v5R1vYk3jo9EXLqhg4voGxyexshT1T5xXW7LAUitVzhm1MK4BvAMKychw6pXYaGXXkpdmM7t54qq433g3on",
  "key1": "3vaR6gLBzF3b6tsN7FYf4dPQ19YUnLEgYFxXbLiW7bVnVbT8Dw56nKB4YU8zF8dhLhdp6YCvauoF3AFr3rAt6uvP",
  "key2": "2FrdCoH1nCXhH5gfKxtbTrzPzga3XjR4zH2xCq8DPZkMERLDfKi6SihotcnBo1Uo9wPz4NacuEuMhsR7M8UBuS93",
  "key3": "579eshNDsgSeB4UV7nZNtmjY38Y4gS9eKgcby3j6ddn9Zti8rXj4tThLoMn3eyWNr86XwRRBvPG553RbYL5Y4jAY",
  "key4": "2EPWbo7yf6oFaKhTriVFiPm5PQo3BM4E9vdpufsEzbn5smNmo7FqQMaytemsDTqWMusFneqxRKxTnXcRzZQ4dTUS",
  "key5": "2dNmj3MH1CfCPMXp8FgKkgZJkhMtiUREV9iDFvrtRGHKkHmGcYxwf5gqFFQEdRFdViHotdH1oFH31QBUE8wxFgEz",
  "key6": "4zPU1DsDRCTm8TdgRp2oNxhzjdRGbT4tme8aa4jLSpUsRnsibcbiHAHfjdqQPmPMB4e11wuUk3o63TCgHfG9FGr6",
  "key7": "6AGELzGaSiNoFFP3bscShUV34nUP7LeSfZwcQZv9Ysknc5jcgMuQ4ywdkcQZH3ByiDePrnzKjQnBhFzkjny5y6N",
  "key8": "5GcnPEEuw5Be8KamG13x59dCUxi8qEKG7efEf62tGGQRBzqPnGFxvdeC7jj1BZ9fm7DRGX8TVEZHhngANztDKPfx",
  "key9": "3m58KqQ53NkdEStfspAEt3qpDBbVrm9eDC7pbmyqAddZCmJoTP6cS2q63KrvxVJ4FzeGMa2WBnhu66ckbNy4XBBR",
  "key10": "NUQ4J1ufXaLhfUnWtMLS3KeqiemDyaoeJo37sJ8UsyPosi9gkfFkMUXwJo4X9fjPmZ2Sam27vxGbXpApWsodyjG",
  "key11": "5GHuM4QpHJbnB5XTvVboozKdGh3h6YLSSKui6Tvbv78gU7bBWp3f8Rce4CiCt8QxyVi6zvEq9Kog2PaBFVm4GCdU",
  "key12": "2F1K5SQBLocMGWKP8sM21dUimvpaZYckuKkY2cJx1tbQvQ4NrJofWssuGwHtEuh1PJZyW8iK2uhM1MTje3XaLbh",
  "key13": "57QsCkyE4VRzcAK3Pv3QPHcVeqYCTtjep9tuAmTFMLx8ugoEgqnzzp9jsYXpJDmRW8Z7NWeVkLvF37Mv8R2LgLCK",
  "key14": "3HFmrunMRqpq3XMNGrxQUiAKuhDfh1eZmBeHLtptPq6c9h2HKE6SHKW1nxsc6NVCwU6JkbGY8oTisefzmpnx22EY",
  "key15": "2diQ3BrCaqedAbkJTQSJZDFYcf5o5WwRSxqr5E52R3otTraSVG7nwp2fGdwypjvWT1Twgu7tHSrYMsXjYJUCkAUd",
  "key16": "4HfmUAXf4koNxcQL9fb71UMv7zHNUb5LqvDTA2Vd2fLe1ARwQPuEFo8m9vy5pEJGyvbFxS1KoJBXdoyYUqj2TmNC",
  "key17": "59Gvd4imd2xA8Q4yLM8Kqef381m8q69jrtM21A7B73nx5R3nkFCwe5W7buhbrAPcnr7xvVkuVkJn9MXph3Mh2p8J",
  "key18": "1WU46m2ews6wVn4zTTvBZVX3eo7tTcgQT9F6sM4qzD1q4zVPSYo8552kq3GnMTH9pR12x8ik8rELxnjtANBinMm",
  "key19": "5qjyzTzkyNbgWBrdCwLVah6DUCKxRaL6GpdSbxDJVFAr46DvBmcXVwKvJYAQs2FSipzLakQfnZXFVnpHZam5BVvb",
  "key20": "2sd7kE9UqyrVTJTLTxjjdw8fkxrZS5cF4miMTk8BFPBY2Uy6eSVodV8jqyCbrbmvNg4E58QYkt2goVGtdDUdpGWt",
  "key21": "4fPu4JFpaj3nhLtVJR6nBarFfypjRtTT6JWozGaGxNAKC39WpswmGrNdz2nC4xdXqkbcSKgqXmwMdjuwv8caE2Bv",
  "key22": "2CUVSgpJYW6NwKwB56TXJ2tuzGQ1SjM1C2WP5b1tDrrumNUExL14xr2KKL1XTEVUgRur67McHfRLtP65PmWWJFi5",
  "key23": "G7ngmoCEt5PrEzsPQC3Mf4ocaWLJbANkhiWdYgJ4T3FnkaZPwX5M3UHhL4JdDyeDw6rpdptfFUW5tAZS3sk9uxz",
  "key24": "65Ei8CdyNNHUhXXtHWzGHusb6tg5P5fgtPFDsmnP9LvSnC12RevNDuyPHH9hqSh2YgokdvbXnh8oAiLtAyHtegLn",
  "key25": "3fFfQZYFywzs68rsioCbFpus9B6vfb24RP8Pm8askSxQ6sAEcnV3puu8F6t8kc5GM6USm2HGtQrTyGYv4nctx3Rj",
  "key26": "5DGky2dBqzksLwfaqUcBUauNG3XfudTxBLrBv35ie919nnvGmJoQ8LHyUKmY8yobTmueRQYEauGFciQbmFXkkB2K",
  "key27": "3oBk1H4UyCN2QjgCxWL3D39mHkUADyjAAYfyYKN7EoVcggaVanfRagrWC2aRGdYzX9XZRoDQZqDnpL3tJNU7uZUp",
  "key28": "2uEYjnMwr9PTsxQKi3SdK3yYb1unyb6n2gDL7xNgwVD8tPeM1dCmvbCQkeG4UGbhhhUuAHKpLuqphWqKwL8mcMVq",
  "key29": "QFrEd9Ghi3wdfhvESycTUqatzzeHrZVWePwufaza2QpSj591R2viQ2Pg99RWyBLRTvJYf5Ajp15KjoVteymFPEf",
  "key30": "34qpDxzRTEmuLXJQTfX5Mohi47DsViZ1UHVeqtFnLNqvH5WmCfkjSD5iqekiwN5qiYDKCUbuYaf4hg8D1Eckzb7d",
  "key31": "2JE6PpfzUakbrFK7x3iubjZvJQDBF46CHH3jdpVYzD5irF9SbM3QZAE78Mpw8u14dFm9VH3JajrKzenf3pQH3wQB",
  "key32": "3LfqqHp7R6KVheVPasaNjnfq7yen7rNZe4Hhhibf78W7KsFgdbfXfqHxewqAVi6fH5V7WuzhE9Ha7Wh2ZcgvQKLW",
  "key33": "S44Kv2JaFXjTLiQTtJ4DqL1oxbg457aDv2tG6C9nXMSNCASvBrL7HfvZGW3um1QZe9deX2a6xkAPvSvoDcVhXSV"
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
