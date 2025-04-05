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
    "4FwSVKQEGTC5ykFiCemkX3U7QKQyYsJtdtMib1DA2MmsrLzHMjAWvrUx8LLwfFCqr89jWN5oNZt4VsTztuZAvPuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dNRVDFcjopHVA24ZrZcpkwdh4zw5WBc7MWd35RWEcKQH56SNYiPmWRkuLuSKSBtNswEy4WG6jno42NjXmmhAcyP",
  "key1": "2DyFc3MN9ma3xZ14Ht2UaQdVCuVCk3KRcWgcn74BJpWmW6HMgbLdrbt3sgzw3GNUjvM3Kr86ypD855MevBU9nppY",
  "key2": "3dm3Wm8EPBhyrMm4sFnGyt8Be8a3ohkpHDrw4dF6d3EB8d7FKFgaiR9LdQqNayTTzNRFMtECBVE39byzgViZnZjf",
  "key3": "476huha7qMa1SMQZR1jymmz347Mymg1gNMeWpk4CozFQq2s119KRHdDrjcrFENAiQG8NyCJdVTufXDPdWvydrTKW",
  "key4": "BtjJcwp1W8jUSCkmbXSUufUUKwTmJJBZmqSLXXLNRSLTHHWRwBh2h9nChKFKqVj31tYM5LCg6jqu2AQCsRoKMrC",
  "key5": "3WrFi3LhGzrJhsKKMu13nwEt7NzBZpb7sXfyo1wXL71cGexZgAFaM72bANb21ANPC62pp6DHoZhybe1kfA5PYPMx",
  "key6": "3zWkMmGUc6JeDSSEcpUwruBcELhs6gyyzH6xQdxzzzRNKHopiu7wPMf9AiKR9VdydtqY3bhvopBchwGPhcrWFJRK",
  "key7": "5soH8MqwNqGe2SfszUAjRn7tqdaEmHRFLvCzjAhxgNv6mCpg6Tm2sVABg5F3G2RTHvib1iB6NnFQjMiEL1bhjPpK",
  "key8": "4JSAPDPSfg4kaKQiBuYHCt7rRTUukpudDpi2Yea1oDiwdhGBmoMYVjCygGqR7AsJo8cMpoZ8q3gaTz6NCZxoeDeo",
  "key9": "3d5CCcsXf6Kqqi8SV2yhtzRjwancrnVSL81qYsaRooTzVFDVVf7rcgC2ZDpFXzcyT36bxk4BiP4aFxbBPq1S9gHR",
  "key10": "Dh1H8K52HWu1irSPBNyFBeuT5vSGL3czatb7o99HhWgtq6ChxBboLR7YKSF9r8gAkSVhru4LZaoeTjkHDG4ozy5",
  "key11": "jHd9fgbah3Jdxy3THwUefPHr7xLKFZAokeLqHesvBm25dR8B8CW2L8FLrpeRmCtz2kZv5jTnGCKRjqYh5UvLK4L",
  "key12": "2gnfy3oMyZM6Q1WYK2SVa24s12W2YdRMrw4wcs9tFNTNLom3DUyqW5EuZdUqwf41rN4nKw9sBEFTgWgpN8cew8fR",
  "key13": "2HMmeVhGm4uXC3WMuyQquLUkBvawJApmMn27pagmJkbvw4jUZAZ2tTzxoV55JNatSRzHaJdoSkQmKGn3ViPTyheD",
  "key14": "2zefidAFFaeS9uXxbaxzR5UK2oXVXCywH1xqYSzwQ6ZkoJNyzKEVsByVPX1CA36Dt5sWmveyBLGq3j6uNNfE8unx",
  "key15": "5i4XRhRWzJPCcs7xASXfFyiW8kS2YCt3dRKd6yJaekbgZAkBA7u1U9AbfCno1Y8HkadoB43wxisGrA4NpPSyvBDy",
  "key16": "3v7Rk2LFwm4YjTBJp6szEHqED6XwhKBEkr9Y7nUNWzkH2V9ds2C3dHm2iFDLieRBpSHx7mBHtSRuJAxfuCQheHbM",
  "key17": "2pte7WwgzQY2Whqavn9twgZ4Fa4V7mZuCy9sew7zpvk4AYm1xMzEJNqJhGnojELGaTmA7YZvNKPWRBzthLnwt1xN",
  "key18": "4smwLQCYrW7u6mWQhqL13Q7huSCVm6uRaWyJSYwFvsxdFqjVCKzZFFvsoBfJ8X88iSXZpNdVHp9ejqiNHH2eSE4a",
  "key19": "bYf1ofKbH3xFQhretrq9C4rLVyFe1gCB3SAyehW6Evb52UAAWXhmpVTJt7M6wCgEZp6Tm8RDbg6jP5znoKA6m2K",
  "key20": "5v1H4zm5aSDP1sN7PwTfzGGNcTCTCd7JcTBJXWCrbVAihqsqXGJtLfndncxUdLku85uj12TB51ZMmEs72qGXYYHR",
  "key21": "3G59R5Pqtrn4RPUMZ9oRmfGXC4v6b2hnzJZxoqA3PBZQjNRXGp1z2LRWpDRWmPZuJkUQDCuZEGy9pU98iGxsbHn6",
  "key22": "23QjEKREsSFubUcczeLULxTswFeP7Yfmhd1QXLYbNWNC7Cz4qw9GmRutmuoV3d9V5pkJXUtSgXJ9thJTqVnuSLbp",
  "key23": "3ZAyWUnrYYUVHXvJynfQCZX384QED9BN6H7aq2Q5rFVbrwnGRSKZGGJ18hdbsnuHDGkELwptfP3nWzVXELokpWJM",
  "key24": "4vecgjrbJv7r6nLzQcTZyxez1aBB9bgxDKTiDsXh2GaStVZ72jugBdotPcd6Qoy6KtaqrZ2ZZSchzayuj4xju6zt",
  "key25": "59k2mRuSqg4V3spnQide5ogxZR8ECbPH71thXmkLKHtnkCyAsVKE4UmWa4rm6XKzcvjs3MU74mZQDCmcW2tkbzXJ",
  "key26": "3R5g9LMN2DtegH8qEsY2es3gAsqaTvyQy4D2ks1DsEJqSWXam6NWXVZrhdEd8hiEEiYEeSYfCv47Acn2dY19cKhU",
  "key27": "3XjsWw7DCrk2ZBYAACXxa4cDg9mHVFPu8YgC4EjWwXD24qEdXg15haoXsWmdKhVooxafX8eETKj4f2N2KuDXUjRC",
  "key28": "3A1Qk2t5eRqVQWDmHZawC4wVNLT7DdSgwA1rvo94SbZjbUphYkM1d3v1WPNbAbs92qppP8FGXyxgXThAy2rFoPkT",
  "key29": "2S2oZn9BztQvf1KkCxqDJ6L9dY8TuRALbLBn38fpxuRLSi3pJACoJHRrUvtjsJPk62YgC52quYLursUspubfYpe6",
  "key30": "4DPodQ5i5dYoNLX6ZrmaPrCXHJp67zAR5H9fZew7PFwszS83HPUe8PkJ5W76apDNGK181N7BDmYmesJ7T6ZWNSMd",
  "key31": "49cPbt4S8z4aWcEMdnFbTksGsB2RUfUvLwNtU9hLsZ4yiSGSztT4vxJyXt4EgzRsqc4HjdfjVB5RKKD9wFUWZ7cF",
  "key32": "bKkego4fnBLqn6Ufu4vDkWxFt6fbV5osPTGSmUoWVpTK3mqrmXjFrAJBCTADWzBoQ3L9EVRoERmF4BLheASzvoA",
  "key33": "5DEhRXeE29q1hYJ5SZYEuCtJuK882QDt1LcHgwUar3EW3T118Jvbi9C9hvAQRAX4is1Hdaji3k1YhxHqGe6fYEEv",
  "key34": "5DqpKizSs7y574cjkPFNZA7z3SDQFT4AaBTuNwCUJXFfwQer4Aja4s5swfGMp42NhUWZAeuGQkVWB4jRJUaJnq8E",
  "key35": "3PRhTyPwrfoxCgEGDzDbVgNGv4YvTSrJYyNcxRf5xQ9jAxsZ8hcTYaAe61ABcA677iuw5h7mqDShBcmouHs5RMtB",
  "key36": "5nGdE1ETLVxgFgdAGuRJVaFETciro5H1x1Ccri4W3BsoPjJRPgiKLycg4BQ2yJUaVqfz6m3GWb3j43j2cSejkRzP",
  "key37": "43ScaFFvDrf1GuZ1rsNjdSzfLZeEwk9h32U4MTrKAWnbV43CVz3Vx6q7bB56BhavamAsizxUq5WebZhgk6rHeqZe",
  "key38": "5cwuitvJyUaFGTc2wZePdV7HmQaPM2pJcHkRnvoxCZ4mhH8rUinzWyXD7XMDvRN77cjgrn8P15gQn4QSLTSY8wBZ",
  "key39": "481JDo5eGcirMwiLJ1RC8LoA6gUM4Viu7UkJRssQBVVcdG8cgtedAaM9qg7JMTQ6DxwXhFVfKJsC1DcwLTeVwYjV",
  "key40": "Y5ukuoGvhyhRjqW2ceZpSVmCFwizzR4T2QpNU653MEAXQpFVRsrKutsQYYaHZuiGEfbYZLUPwhmFBrmHkTQ7mJQ",
  "key41": "3rfE47WcmxgJ79cgkoaT2ACbnYaUYmC9wPgkdTozbxTAhjB3vEA3CfotPTTbiaHnqC6C7pXnG7TDK7rdTTcapG51",
  "key42": "Bh3cjQtrfDZQbnGkMxUY9QnbWDEC6wfkAGJBzQJaUT168x2HPsepp1emqAro7YVFzXybAeb8dKFtS9fNePPYF1P",
  "key43": "3iNwmnPDqKLHZXpGpTuavr88grMWxPNDmQnghKRVobyRSeTHg3qSxXb3bHkZcRU5WU1NqZk4DtwCTv86TvmnQn5H",
  "key44": "5nRG4hQdY8jxTzKRtUNeJuP37jkcpHvA31ysRRsxSwHDQNKNFhootPbpamu1o7f8ofArfHqtQ1MPZKu2CxPCb2nY"
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
