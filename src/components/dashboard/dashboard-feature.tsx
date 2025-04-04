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
    "3LMDpfWLE6J5TRpdg3ebVjvWdxgAL3o9yytWraRjPQ2uHXH9FykT8XReJVhaN58uZtY4JFTh4p4bZuGiiQLgzHPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fW6wpfxZawnBriMRUQAHnB5P4vnyH1STKb2me7znY1DpLqX8SSAjCYKtNnGEEyhie5d6ubiyRqVTgSMiMJxnQLo",
  "key1": "bsykUqmQ4Z7VnXJuK2nkeVqgQLtp3XHRdgi7F6dcPWHgjDTuWu2Lo1EpNRSxRHAr73x7Cbb9mq2wTCHbVGCyHPe",
  "key2": "2ooSqzphHYGkWwyrHfxkvyKQq4QNdwz6CfrmAzTeE4CQ7UvzKHnEzTt7wPdP697eMrHSMAT2NRFgepbeQQZF3BRr",
  "key3": "2zD6t8WYSUZJf1MACpKcXExwjUWf7VoZQ4pjCxyvJfKYRsFao5MPyX1VNjfz3DHeBttkigAJSwFDtLpNdrfFNabw",
  "key4": "4ETJE8Mwkor76P9UB15yV5mP3MKZ16GG76YDaSZ4uQoVHW2VqrFPHgWpBdeUpYPUyMFArQ1J3ALtbdFuLechfaQs",
  "key5": "5mM8wGjp1Ju71SPQaJWUKDuqJisnbiaSiKoRmNFFd2dtDGm7AZvPcyyXxULJZxsYJChPhFA14xHtNFKuvr3sytQt",
  "key6": "SeWARuMpWgjTnutf7dnAEaKePJSCRsW8ip9Ta2qJcVrCmKjXyvxMziwQrN4Mv1ou6Ws6J3vPdq9Jgvpo4Ci6eCV",
  "key7": "277usukbsDKm5hjHe6m6nU7SdpVmWWy7tpFvEoTdnTjAupqNaKXbUd9xsvtk1CNhTaTf5DptUiHgU8ZaLoL8ZYyL",
  "key8": "25mpK5JhMizAzv9mAtq3upum6QbEpSaTKw3cyaUP1uG8pGDTS5KktGZ1SmAqdU6MahvweUtXUkBFA9eusmyT35My",
  "key9": "8eFFdfU4y8bwooRsRoCaVRbKXrCULN5zKDBcMEv46LwvVeVd6UDbHHrW8bigLJKCnBWoWLVF3HGtuvfEk6Q3WH3",
  "key10": "4gzBx5cWxAndEVVsAFkSYSpDWSKaSR7o15B9sAqgkxiEkXZ8NuJ4wPPJMc6xxSpHuAUANZVeNCimwLYXzj6AstZX",
  "key11": "tsAQEFTPau1CuBvtJ58A71FYW44sNjDAS2ze7eZkZqzZcvVTypsafWgDMXwC27qJF3j7jDPZ9Kk6CbYvxPWKJ3H",
  "key12": "3bLFnn42uP3CsAKK7CfybTVx6APsXUdoUGqScUg5Kmdcmy3U9vWUkTw4rW6gSSfLfjSVtUPAGnGzcFMhwoe7y3mk",
  "key13": "4jozYDSEJu5sngkA329shiAa67x6EuvC553KaCDZEyXoMrF62LuNvNCETm8qANrs3fQa41JSmNWLQtkyUG2ZmYm1",
  "key14": "2FA7ugdV3AXaNGcqCqfChye1KxkQkuqEqAQ33qThzANZegRG6vKm7iJfft9bbB9FTCKgSDrTaq2D7QkZiFBtsi3b",
  "key15": "XCSAeFC2Hte7RpJqHHcWR5SqjBhQuf3FJny9KZXdGJzFvKMR8uWh8fTbS9TZE3QYYGwRy9tEqsN7vqrsLaZeiEp",
  "key16": "2EFNaqu6nasXeV4jWvWHcaF5oCXwMp2m3W8Gjz6BxHsgBBKbznuphvewkFwqQo9LHFnMvTTKR1zfjV4Vp3ivstX1",
  "key17": "MqkdT1WZJ62bwA8kJfqKawqVg4Su67PXzh5mRqwSF2dRvXagWwZkeEwzjERVpfcgLi3gMF6peSMBYMHWaq5HNwf",
  "key18": "4zpEh8kZttbePhD3uxrB2B5EDRvTwFyY9LevoFN4Jg8TnjKvLJamT7uTPP2NbVYpgXLSArQD5HWRcWW6wsnrb3wA",
  "key19": "3Quq4pR6k6suNmxjGUu8z4Gob1zARD4HwkBrAGVsKA9mkdoXPcgCt6A7xr4LtSGZjV6ScSVUj9i29SLjjmFi4mTZ",
  "key20": "3oVNfrFAHvx2g4pCcqxEiopZekaSnicK5LQ5Qv6cMUcUhzLSf2UoCTvKEyYxo54FdjwtY4CdhLir3nAixFMDrM6E",
  "key21": "2dgg4SDtHxyJ7ktfjWE6Y56v7Bj65eo9woYT7EooYU8d1ER1CYzs1Ms2iaz5hoq1Xt4heKHScodnZ2oFzKwoS3t7",
  "key22": "5qFAMWnB7DGdNJojELQJZtPSygY1a8z62zb7ErS2s55y2qP9uS9wp5Xqnhapy3DNW1JmcFfE8LQKfwxeXPwJakwx",
  "key23": "3K8ZCbEkmEYZS7aWjnUnYD6L5bA2QVn2wUUqhZEYGR6EbM7omudrDnnpLjjZVHvW6y5bZYk9tUrXkAW2R8ZfZTRF",
  "key24": "4DhXYX2VhChYDeQr1iwwkbmv5nbK1xRqmBYaxmB26j6XFYXBd4FK7Qn2jNJHbPsxtNpn51aWEjKWfniAoT8n4Z94",
  "key25": "37R2pdeAiNQqvvyeyB5bHJx9djmLrcp4gqqdp7Y3B4nMN9xpHAr4Y2ohQjbzZFyCsWKL6VRaBdhntDoY8MYFN55g",
  "key26": "2mjPMrcMUeW9d2MTbPifAeLy16qFaKFhMkcjfiWnC486SUN418Kkm7YpGRXEHyuqrWwGHMVbAzVoHkdPgWERWrPr",
  "key27": "2SMb3taxEjLajffWpZPfvQYWG7QFMLpmPneKjXua146FmR9eo3iW1d5Mq4Ksty7d2DuDVdgs5pRJn4utHAWsN7Cp",
  "key28": "a32q7BpEee9nqfTkV9vebUxmSKse6ZgJu7a9JFtpZ4tf4vqV8QZJKA7RuY9Mfm6yRV5tMyq3ofWvycVbw1YN8PP",
  "key29": "DtnGfscFnCZkAyMAGin4F1g1nWXgjiXyB2KUc9JPQAWA5bL8c1wFUcC8Wbbh928teTSqZHiy2nYAtN7Tvzr54Bo"
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
