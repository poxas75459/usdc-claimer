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
    "GkS1nqHveoxppDMZL9LnFi76qfyizeAE8tNcCDv3j1D4jiUAfwAExraiTvoSPr1YmxJLvdK8uLHAdfwJ47abpF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PT31aT4xzJaqYCopxbqN4nxZLsVhhkXJL8dVjWqkHbStb5pLFXDQ1mLYtjqV4Sa1PLoBYxLC37expYP6D9tLPwA",
  "key1": "2Ai8WM4reu6JNCquUda96rc8Y1ShHHKq5Tte9a4FYbHdVzwb1WTgx9p36nzprFSvmrGpnWMftESc1axaTz9HkDzE",
  "key2": "5L8Fe7reeALHpHfk1pFaMBvQH7vGErGLjPgaN1MwSXNC7YxbBwaUzbudsXyKowuf5Yk4JP2NhTZfFLrTSCWUnxqJ",
  "key3": "2NzH9WoaNgpAw4w6x7FtMswz6HzpsbrG9ahADs3dCreTFqEGJeyKdx5zp1nP8NaEVBoEkhDM5UHzVggiHiKHRtEK",
  "key4": "5pxDpfNqKrQ674GuEPajPgYfytEi4HNjB5L5kdHZgSwmG2dLZP6SEQKY27KhLtMeduGfxfx8xQy9jXUWixKuqreE",
  "key5": "VCVCDmGxjm68FxkqiorK4CwEVFdpKCYTjCPBPnnb7ghAbsFXwGMkac9CnhPnoWSyMhjWXgU2onMG1TX5Htgbu66",
  "key6": "2RUMmBSHYt2hgqUtDaxY78HuUKwfgDsMLwqGv2brYQajoceYvu5N8K26hq3zycUn8Mv2ykSDK2kwk8aKGUeUEZCg",
  "key7": "VZRSrZKmSgXC1Wiar2WVTezv7qXai7nfA1DJ5V3HPy9cEuhTCCB2qBcJ7VvbFDPrCfQNGtwaNyzH61EtnCZWYS9",
  "key8": "4UFoyVfutLyKb4A97mLmidTvYt6oYcxFw2vZDz86Sf3Z6VRc7mWBHueUbkfQiaRPMPSq7vM8815eKALTkcVmir65",
  "key9": "nhgsvmE95U2Jd9JEEPXttDqZRRFKNTqbBBZjPPKyX9CRiG5rdruMyi6qppt3E5iy1cchxcrx8Ls7fWGxv1rnpBb",
  "key10": "3jH7dTNePQLbnaAqg5jxkCWaUvoHAiSX6p4KaerVSMoyuAVqWpcAk3kHaWCL9shyUSXkhE7GTHeWX2UgXHUAzWnw",
  "key11": "54Cv2eb3kAL6jPxZD3tYdZGbu56UvqpyQnvhi2oRubUGajYNwpTqFFRj6CZdhPdUztNedvX4NUDfKYoAQ9YpAct6",
  "key12": "2hxxfvErZdsnez9FJfCWZF3hX7VCtBKeX6XCT5oAN8VFyJJcLUGH9j49Dz8qJEC28HzSaLJ9r9dfNakpTtndVJ7D",
  "key13": "2bvUn6tF1pcRxynrNjMvESk1q4Rv1bNcSRU51U3CbS3Exb5dAd4DfKiH2ueLhqgVJf4GLSHrJs2m6V7dVKC2h6PK",
  "key14": "HiDaPc8qoznGXm5uVVxNx2ZRGLYHZdbyfdgSwup9WBDhvrvMoPvjf72ZonGpt5th8ks4vHMC4cPF8BhYir69Cq8",
  "key15": "4SHAYNFv5JhagyAN7zkinq4N7mKdhx9KewdVc5sBFXGz3VyTUp1Ru13oJ6LUbqbmsYeckyQdWKMEYrRb9LSjhUMw",
  "key16": "5QHQZawjXP1X7zMaTHbQw2Yj6QWrJuqbxWfSzhGxy7p9BBti2YddjDyajSBaJDxyCziY8uD8PSMstUVMvKGB16Zc",
  "key17": "4JuRXC4Tm3tViCXJ8E7pXfuw1QoyW2zbjiULK6ktyxvHJxgmeHEFhUXNNL1mPp9HpcnVxjt1t3HcfpF575hDGhZx",
  "key18": "D2HkeRWttGPijorwuhBijZbE4J9PJdYfH5zNjiZJs2pWuvfe1oEhLWM8gCfNbgYWe1iNbY1LSAowm4hd67LqiJG",
  "key19": "5D2pj5UDyYSbfbGhtGg8qhR8CMeSaMXsms1KR2quAM4YS3KeJYEmUes3iqvERLVSZqWrJGmCyjRWRSWgLATznuxh",
  "key20": "4Wm9533KtsyoHp144Cbwd9Lsc4tbpFBhrY9RZvoMUJWXNpAmPSryJVrzwW1aqscepC79o5gBWk7tHTAuLhE32DoA",
  "key21": "47ZcjLAKnW8LR9KJNRWGFbFdVDHNMnTtvNsRb57iEmeshqKXG9zt8mh19bPhRihCKigon1Qvk9ojZUCVmnoCMVDx",
  "key22": "3UoUsU87BThm7WzP9TRaMrrUpfnCwD4FjKGHzoRfYMBoquAy95x9a6vWnhFAT2xMmQj6W3hfPtRMobHza3hU6rnu",
  "key23": "4UdEUhNsZqnPpJup8jQr1mdLZeZxRYL31Wr2Ch1dNZ3SsMNADz8SQMjBFyeHHizLSjFJRjSgjQEXHA6i3acYUPfz",
  "key24": "32hwErdNQZQkChwES7p8A22YaUdCzXUKpUxh6W11H4qP5WoLyuU3r5CCgJYzyGLBhAB2fQKsN8vwpEpw6kWbqnep",
  "key25": "2S42PN5jTdVVApwJFxZ68BEWf8xuoHWhknqT6883w8t9WCuqcbqVjgU9fyGpVpJeEXbfqH4BYNbuVhtPscsvSgpe",
  "key26": "63JVsorBhg6oS6L7AZp5m4ERFB8FMKWF1o1uAaGfMtRJA2Kp8Ry9dLCWu3cUSvDxfU7xTzZU5eiXHKuDQQAzZFpF",
  "key27": "32T4QuQEUv8sBo4CKsH2mPzNTXvakS26MgPGqY9qGkw2S4XwU6Rjnbfb3beSDzZHayNdoHKHtNtoyUr2DnxmLr5D",
  "key28": "5321v4MA573t7t5krA7fxZzPNaYRBiBKr6cVtFpXRqe7y2XqtNufxhfekmf29QqFkgg5ihRitwhL4hVvqL4R9JJA",
  "key29": "2aXQhs6wnSZdpybXKCtn95Y4r86eDQkvzkrE48jaqmXXAeiqr735erN1AFo3HSUJRyvHHYjXU1hsnBoew8avyAfK",
  "key30": "5UnShdeZsXeFDBUxxqwvaCaP1QFGWBcNivrXrcN8ZdtuPzTpdTnfJ26Xx6PCThMxbQzWK8GHXLqkXbVhnD5KGDaA",
  "key31": "3rT4iR3EASGHb8Mj21vC3R5YZkixggLrR8od6YJuRGeyXkJZ9J6cZL8TgGA7c8Nr3Qq5JDF1qV35HmoyKrC94Ju5",
  "key32": "5PMXj3LW2PqfSiAuxAsh3DwsTEK5zT4vtzNmMCMHTwqv9VCWxuqiPDVyuKadkbdhtij5SsujKJJBVBt4VMXFXSYN",
  "key33": "66LwNBc6rk5CS8chngpEgQszihGZzZqNN33EYyqm2QzNtCdNLBpV8s3VxwXiPZMBgYfZ8cUvRajgdgCzjFF87Yag",
  "key34": "2Gocd2kGYGWbXXzEJjQVpUWsKAvgMnfxb9oHgdi7X7KgeyN3KvJGg37FzNJtZeBXEmTwJeoAJBVJqZ34R9ZyJUwM",
  "key35": "PknjdHNcMyAUUKv7M3Hx7qwBJyD2MQvQYM9XFbYsfh23uUZfui4YH1AW9MvYTFVfcy18m5DASvTLicPYNhaA1FY",
  "key36": "u14aSeBiXGX5K2puwdYdi1WptJXTkfwiaHfKzh5NKfNWaFhuECCkiWJHipWsy9pJ9XrMnjoUD2QG4FjY2RvTdya",
  "key37": "pM8mKbFjnMRLW3wh1Y7dPSTFjTUATqKpLSEHhe7iGKWZLPxuiEz76ddhkeZTazNZVshuwKMzPC5iP1NJhnYVuh9",
  "key38": "5aBTEc1t6ekPo5LFsHWtTJv2C9Y7rBT1K5vPEdQMSSgGbNoQSc6LCLzC3TSvYKbKLBSbkw7hnqB1qXnRPmYXDCz8",
  "key39": "5JPUZHuqJ2hCUMme8w1kNtaNSZYqVmqBHqRbZWzozvUTmEpat934cVMrBu4CuJ5UUEAzc2fGfer2CTLEJwwRRnpq",
  "key40": "2Q6UrMf5t1jtQ26BtVSGgpyTZ7jHWyL5xDQTNpe3KdoXvtUjnM6YtbYkqqtMSuQyio9anzFbnzGtFRs67DNQTgSG",
  "key41": "53NWW5oqy9CRyiBWZF32GFrMKAMZbqhWCqG6ZpqyBWME1AYp7Go8s6hwRnumWHjyarCYenyFwiFPzCeUhHiqnhhF",
  "key42": "NH5UgNiVUMfQPVR85ufaHb5ePdcB9C1pwgHN6H52Py7rZgL26rAy4DVr59a3LhwrNxNFanZFQT9DbKemynZQmRK",
  "key43": "4ho9UVE9qrMdRG5NgrfYW4wVXcek23h7GxGzY6K4vbRRVNkvuBz7frJSoKp39MVe4yuVfyQPyzZ2hWoGvXwkD9KC",
  "key44": "4hmtZvBG1eppYSSv4RrVni1pTezZdyQAE36rECNsDYLUy3zRhykakPHxoJw1C49EuaSSmrFmb5XGtdQQjKR8ghcd",
  "key45": "m4WjebmVD7ph1JxdUU5CN7n7WHpCTvz1m3x4kedgbvxbPTAyEpH15oMMgaBnBCPLuzyqP92dkpLtobn6KmqcSjx",
  "key46": "qc4q6DF6nLYUVqsvLvuz8pwXm3BsF2hLnkdAQWDdmC3K5z89AwyTu7LnmF2Vi8MWPw5p6Avn5EQ6R2dWVVv2eqB"
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
