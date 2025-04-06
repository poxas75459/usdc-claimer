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
    "5AJBHC3nzTNntGxNybufzf9GSCuAbpNvSwAfq8sGPvNScdmZMjbNpTHFjfmSB1ZHof919zUGaFPpAiXUe9UNdssa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57XAyFpCaF52AcB3S2ioS3GougWvdJ1FGaaxyTY2uSvyN35ZnbqGABLVngsNL7bNiRGL7KURDvdrZNCTPujXrLzv",
  "key1": "32de4UNDe6LpLbtRVdzatkBKrcAn6SBSSygZjPN9Fgx5aeo5hPjCuNLNJvy74gEGtcEDaFgcmTsmSR1VLf58mJkk",
  "key2": "4kjJaN7WXFoGwK5FPb3Bpge1pzMgQePNqrZ4ZQm6rYkwDaE1SQZYNc9a6jxxgUoD5fnNmEpahjzHntTf6EPn9rLt",
  "key3": "4UnXcD6hVbEm3XqUnWDN46BZUCHx8XbkhJBxDyhMNzNSwrqu9apXqn36Xk2aLDBX5U2yLBQTFip19Q4VzSpZR4oQ",
  "key4": "49e6sfUbbnxDJN95GHc8PB4YEBsNWxuJ8LoyZ1VKDrQBEF8VnSZpAUXe5mBhTtuDDcbCL9MKt2iG9g6JKZ9nMn4R",
  "key5": "2x3QNd5TzcMnZXrqYSpAvshFmFEzeUgQQqvVPA2HYLzkNAC73Da3JydTg3aWkBre1DhDNtYXYHnn6iAf4iMt5or",
  "key6": "22Fqp2VnwCuZuE3PH4LtU2SBktVqsv6A4czDGvp6DvgEXQDKcfeWsyNALZsaftUH94xKCfuwMdQA1tS2pRWxZB2k",
  "key7": "2wqTbpMLjVWApjQYWg15RVrptH3U1b5m29CrLjr96q5WQBDSsnKF2RZqd3s9MdwTAZD7PGLXbsqBe4i1TFSDZQd3",
  "key8": "5Xi6994udXGPML6DGdZUdsAZZMarzK9vcWHgq48F2uLnss7gri5QQircK6he3WWoMAwyL1c73LTuauJq55SPXWL",
  "key9": "259PEkiiR9czCJXJt48y4am5Nqq3q6z2b5YhVgqjcriJytRJzFMSmVWz8eyx814CKUmdTqDN4KUgJX1rETMzSCto",
  "key10": "34pGGD873estAz2cLj1KraYxx5n3PzAFE2caW3wpuNLUPqcsR6JLqoQuG4LhyRNJ5LJjFEvrpzM7a8yw4qZ4e1nf",
  "key11": "3cB2YTxsNhJYNxvXqaovVvXvECuCA7DVChnCsWTcCxaFDJY6YTyAjDUUxGAqH8oajLsbAbmuZq8KPzys72PhpKFA",
  "key12": "5CBnrFnfgiQbwWqt5nbmTt7EJaZpSnMX4xYT9nrxcdR1ru5BrW3TGbRUR5dTANVtQD9SkSGDtfQxdVb7L6u7NdcW",
  "key13": "4zAwkEb6xkaQbwwtCmDjfbLL2mRLZeeGDs7aGJT89pSUJgGgvo5DqQUj6vimjTEL2AwELrfzCvrzR64pPwezQt8J",
  "key14": "3w8BMUGqcp28Ax57hBXv49geG3DWy3byW8x2u4Z4ZiygC6Fp4qJd6mnQGYj2Z3QZEdfX8Pvkqgr58EokYD9Xnt1j",
  "key15": "3C5QngXxT4dpMMSNRWSedqung3JkVyjvQaSn3Jw8TPfYrcx1NZ4da9DLR33efTjtKbyoBiKrg2NhNMZ3rrqT7xve",
  "key16": "7TUCnrBHfXxkihnnJQGsoGYZgRzXi1u2hEpTb9mVEhAoVXumvqyiDTv7Ck6HyDRLfSDJaqKvzLdkDJT6x25Lpjm",
  "key17": "2aJnSHS1Kj4LrG29xi6gZnHJbXx5gnUEeVaf2tFETG3Uc4L48b98mMrsWUgHFDmCbC9kNyrGxhAqbeYbSzV9Ue6",
  "key18": "3LtTATjvebyjhLNA5aEa3bDtYxzC79bdq5D5Rw4KWaZEJAycmWrzuR73ULbZaY7cUfWg4cmYpvDEFFFNpV1f3W6o",
  "key19": "ChBpLK5pPecfTSt23QXTsfcprHgeBGYLTBJCwXzUdwRBpSgF2SGsSuXtDeJj3nt8bGRKrr52TJkqYobLQLAvV3C",
  "key20": "byFNSwVHq8fHHHmH2u5rttAfkjamFyZmnHejyc6zXxwNt9VSgKeE8rnm5Zz94MjwUDP536gbHRb3h93cM7B8xgH",
  "key21": "2ovDbeu47f25NEi4NDXWpeJ9nT3d1xjcruZEaGAC4aL9UkQnHFLhvA8XHhvbrcmemiZ1Zsvd7J1kudHcgD1SHy18",
  "key22": "5kMFEozvtuG4dGB4CUsK7SULbhsAwRjW1mRuwdK7xzG5ame8KeakMBYVZaYKkEzk4a1hrToH6raZd47yg1Sim9sD",
  "key23": "t8qffftFiWkvKqKr6rj9ok9Uc4fDJC5gkruvddbDERfiizJzLjo3zLRu9NsfuW8tyhSfTj5zePKDg5QkDvydUPy",
  "key24": "45Fi2iGL6C3b6hqbKcPJxyerbKveGRHvGYk1eptcQzpzMUXBNFM9RzqhW42VrTKSwvfmhtH55i3CYx3qAyeP1JJA",
  "key25": "5UyM5CX2TJHX7cYfgv7X7xLVWvEr3g1P2633hbdi61Gs3kQeBESuSMSAEfuRUyHgERJHck9sGcpSVjUS9Sc1qKnR",
  "key26": "4thrPwSwdhFHkaX2qAZFmzicU6ReLJvwqwPwXt4Li3eqVPNPgbkuqL2jtRb4ZUmN7PZgmvkHH7V4mGAxcy8Vx7Fe",
  "key27": "3hdPLFCaxDcFBygdMp77UwqonLpSASpaxCYkucyRF8Gb4T8Ws8AWfpg93urA28JNuSEfzGdvt73YxVB58RFXBVtw",
  "key28": "XPw3dtJLJnLpSTYyHxHFFS32HQkAa2ef7QrsBnxUBV8MKCWdPesuVapjC3HmMTevXbnEdHuj8hFBoWZJ98kUZBD",
  "key29": "5j29uZPhAXGKFZ7P6761HKDRisAgwTkpRurBqkUroqsipmixsrN7MctDnjhprytKwQFuHmVn85RhUDrEj4wbHQgi",
  "key30": "3576HdhLYBYTict1BD2aMHPm437cXjVGNTsfh5HuNTYZPw5jGUWLTh8fyvHoQdNt7p8n2dw61osBH1kanGW3kdfB",
  "key31": "4KP6mXTWGLq158b4Be4A49PqCmH1kNbWsKQXgBTR5VMYz6pdnRk13gXYJK2uoNE7dMDo9uVLStbmE6KYMdwzGgrA",
  "key32": "3bAXEpQJp6HVW2Qx6jwNej5kMxknTHC4AfwATbPs38VDRY4GqQRea7kjRSEKMgUA4FJDvahcKZRjoGiB9DuDLHAs",
  "key33": "33W3WGrHGN9myASCQ5ymPJM7FuoZbzUdUANp4znHH6tX8nLqEvGo8Emu1rafDVkU2NSiemw7H4MCphkF4yopUUC7",
  "key34": "37BnanLdU4UbJLLe1Bq8Pd785DZH3vsjy5n1w71mvchWbg1aVm6wW1LwQM91cdqFskQpx1pzrJJzVEDz9jV1h12J",
  "key35": "4qNv79jz2GqbcCKrQUHJ7XYNAJWEqSpJwz8GeZGFJomMMY8UbJue4weTgcJ2QpiyiGXcYtzZsdZz1yySjyVp8n2x",
  "key36": "4REGGCy3xTLkVmkJaQYZjTGiJ6Q2fHnd8DKBbyqSZQSxBdz3f3dHXT5PmKE6zPE3QxLDNAgU6cuD17HWdNWBqoe",
  "key37": "4PoREpq4eAWNWGJ7z69gM6AkZok1B6yhw7h93aMFTqQUzQzpohUdWLNLHAgjYXSAw938uuHrKd71VyJy5VijPjga",
  "key38": "2SavNsLZb7RFzs6tCCD9aYybjqgSJ7MssCHZL1UzmnprxenDsVMAuk2jqaf53nZu95wHSCDzFztSUDzMH5KkF4Az",
  "key39": "zc7rjyMfyqvVRMQs8La4G8MpWTfmaqbT1zEp9uDejyMvfXsTLi4VYcBB8cPwuKwmKv2xHYQQU8e8jgAbwyVtmeQ",
  "key40": "2S2JFNzWa7GT9Wt7EHcsTfBjsSZhTUnLJdJUBJZzSn58aotqryR1S1fNJvz5MVusrkiuUARUPwtmq7YPv5wmBHcD",
  "key41": "3iHmStvgg8RCRypi42qkn4hQiQCYDDY9wQe2AGzH2wFG8a321KRfLcrndgP4Dk9az45fZDsamgZSzyrVFqZNhRk7",
  "key42": "5YhLBysuFAiZSMoX9Ui4WXc5x7DakAmeyrwWotoQ3NXizmaRiZMf3fqZV5XuYEk24BvY1UG6xLvXqYwMx8LKCGHy"
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
