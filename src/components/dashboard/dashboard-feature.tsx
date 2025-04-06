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
    "62dchGUQE6UU3SM4iyiExt7rG7xg5wSaakKkEEQstRybzDmoAJejyjBbmq2akQPENS6gq6SzeYCLgGjaU77Pj5gD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LDoFEXuNBrPWY2Eu3LrvfUDgq61AFNSqJwZSQSJoo6jPZEHfntRhKwb3d86QvHwUmHg41qUY4ngeXDRsAaZpPja",
  "key1": "2i5HPCYwtY3TSCVTcma1r9gvZAcQwsZrELuXh9oczJcZThuDcsscbZhUAi7RSgqP5WxywDJK9n4xSXDg4PNFB4Hb",
  "key2": "2pLk2ndLZN5AdmM9yq7GYxtwFsvV3voFP9CM2tCvfVQKWsaBu1c78zh7vmS29xv8inFBmHCHPjw9jwd3nQ5e6f4a",
  "key3": "2ffhor1gvvDXLkyydZkFzj6MJG3WEpsYYoyCNUexvJjo38Gh4YF6sTtviBSXdFuWZs2FonAt2o5XmGbBuhgRy2Ga",
  "key4": "4wnsGuLkCDCkGYAcoAXd9e2FypjHmQKzFDuBUMBP2ogUcceC9b99jBr99vUoVoDutGSrrFiLH93HyUwEgHWnyh8j",
  "key5": "5teg2QDU6tWH6FohHMryANStQVLubfU6FDLKFDVGyQA4y8vbHWDh4SevYaq8hx8Q8ChbZgwQyonw6cwehkXMkXgp",
  "key6": "4LKph34UkQ4YHS1sBDKubcxJbjzMjNDTe9vk7B1rTta8GtsNpBUhpcs353PcTu8FvEnDwUmMMT5eDkEA8gBghcuR",
  "key7": "3fdJTV1j7qLd7CbNgYGqU6jrBbW3GYhgtvg2bkAejkivgqmHWg4ScMmFLNdQSfF8vh7bMDw5W43iNeMJEmkeUVpf",
  "key8": "66zG1QQkQQu5YdwMUmteanjMfDFUHjoUJHjt3124jZCp2Vtf3fNqfL7VXVHJVjMC3d8zgYEZJqS5yj35KQdo5hZ3",
  "key9": "3mzM84uvf77Db8igEGCcoTNSj7fh3V5pTPd9X2gkwPxomk2G5qv49oE6ce3kYgauqoPXgpzsi1kGBgdYyAzjAacs",
  "key10": "4GLBDg86HkzhWLXy4vZ3Whf1ww5gTfVvyNcmvL1HvhxcTczHvczdC3bjg46Xf7SfuZWLrTVCDxgAxZZWCTj85fNq",
  "key11": "4d36MVkitrEKd9ELEYLXHxFaBdCDvQbnqDjknHMX3hBjCjaFz9VHuaWiAvtykMvZRXCq44jU68MKm5N8cDLziUzD",
  "key12": "QtAcQ8g8XmZcTB8HV2fat1Aq3frj15zkz9Jyh1RtenHtAZUm1o1NfDD69Jfu52TRaKyatGHLKtx3CAYcLRDPqGi",
  "key13": "5yzLmtqam3ku55vDypdRLei9tDRsuQ5gPvSap9jKtGvDcCxwgVfX6gSnEmYhan4qD5sBVkJkfCisycLuECF3xog8",
  "key14": "EtcswpyJabEP8pRzZQ8arh4tSRQwkLd2JgtRRdTneLSFkh6Qp3rAKhddtmQbjn2Atsrk3GytzmdnwJux1ut1u4r",
  "key15": "5ZnGQBxqdhLLi7Bq9TEb2HnB5jFbXzSppwbE3X6Y2yA6Wz3nDw6Aiw7MkVtH6iPKQkKoqYxKREZ2ftcskW3sBtb9",
  "key16": "PAQX9JD6Caq6iKwk4b1g16z4ZLzAtZf7nfwQWFu9eXyzMcm8aTTJiDYsSQaDtE2FPtqWmjbBU6vXiWSLiYMc51G",
  "key17": "2hKVESFvoH4BVwfZRgqC7fsV1bWBMpMBpqcLNZmBHwTKBnwqZszsnajH1D1U4iGnGb1JLHHn3wKXrHUE7PnSgqvf",
  "key18": "34oqGsNxCxVd2aN9gTyMqnpnLcAyvR5mHgbZRhuxe165rfNfsCS1rrTxoC1VpiuVYsNvNKFuVbFRRMy5KmQZkEdA",
  "key19": "38gMpqHyX4xsA8NuoQ6YXeWerTGMzMo9cu3bExgsf5CKVEhnCcNTkrGVbm7Couo7BvKaDnrL3LBmicuTHaQm2tGw",
  "key20": "duWPFrMX91jasuUTtDwSBR2uJeXmcdDX4ukxWUtTEmEzGN87DVV3FriJUa3kfy5BEhiWX8dKD2mP51k9Q6HV3qd",
  "key21": "3mvqE4Kbah5PxQJSFwkJdohir9XMTsJ3EkZyTEhwJUMuzbjcpti9FTAjoNG4DVFGCc32h5QJwsBvYG8NyDCcwaoa",
  "key22": "bBToyFySPSAZ7brh8ngwVD8Vta7QKnJnecbJ3XpxvMP8nzLe1q7cec2bBwYsPUeR6cSphwo8eU5fvm8kWN32eeo",
  "key23": "415J6HznHtSAtUaHn8NEsf7Sutj2myoPgcTXxsrG39XCijptbophmecwHeVZpdqowR2r1Nnc96EDRqPGn6EwRv7w",
  "key24": "5oadg7w5zMBVvLMNP8LXWrE1xTcm9kyyvQF3UTVGSeWkCESuC9CdsNSwqcP9YeFCFjy5CFFXWbNQYgn3hyBtECoR",
  "key25": "4ttMHHqGwSPmAZVrK8M3X9SuVsLhn8hecJ2gw3MwwjsG7pXXz64xiLS9gsUpH8m8tza12CmxrmVkCpts4c4JrJUA",
  "key26": "3qTDQp9UkYMFzBdTbUCei3jnVeZfWJqdWMZ46Kthx3ogEvB5USy2xnjUh628pRbaPjyZ4YPq7mchaZH5QArtanY3",
  "key27": "2dsP3kvVDG4XtdB1tQxDx4EaaCccDq3MBhrLMVitxFeGp4WDcTcN6HjS7LmhmMGsWhr5Am7T44k6SGomm1ah6gWA",
  "key28": "45HXRhF28JA8JKDTRw25ZqMF1sa1VYnMMHJAWYQequtoUHd8GuXQbF4vZjxM5Fti9q1g5UtgHxmGa91GmpVQvxVU",
  "key29": "3r8dZLC7Zi4PdVjTYGHSFeoTyTV4MLWkLkpgMrDqwsvvvRHQxrfbtZrMcoTGCuC8UnsVLwNr9SP1VshZbF5MJ9q8",
  "key30": "64Nj9EeUaQyomdqj7FTXJwJMpdfvJYqD6RF1gSdoT66gKD5WcSXUzsBexzeLJG27Zze4gNVppvMQB2bZyA3cnS8u",
  "key31": "2ohpe1uDhPSC2zmoB6QGhmJPs2kRB5QgZvTbnmZqw75Tf6E3Qv4CkFowLavWyazfsAEyZLiaGVPXi6XkyomroJj9",
  "key32": "2oyUWLN6K2eN7tHhy2kHW9xHCzNLfHtknKErQspyigvsXJb47FSBJfEvbL9ZeJqQohHpuccP3WiskoBdoxeaxafn",
  "key33": "rA8fmkpa7RbPhoEeFM8K4Am36MRWGyxLnrmZb8VtL6mcTmmZLdUUrWeBHV5iY1UTrhqZy4B1DgHVfis4kDKSDsy",
  "key34": "5mWENVSGtEPQ19YN7uJYtk1AZ2G1TVNDXqBH7wjsJim4vy75mHL5q5yspjaKAdVSXGrtziA2ZCGxkjrYYFeh6XHR",
  "key35": "URkG76iSYZb1PsMj351qi1fQho97nMDkCuHhYC7GVsYpAaBb6VUx6oXEEveTY6vTokRgp3fEb4NHT8E8xFv27A4"
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
