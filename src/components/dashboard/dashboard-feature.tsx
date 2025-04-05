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
    "iEvKkefcdFyoe6DVbAY5EXBJUnSQMNwdq4JsJi6pyTr3tRnJhgp56LYd8f2UZpHdvi7MbQsDZk2S6jSFcAULNH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YTDLj8vs57izfJmg713U7oxZB8Dt4WKNkYXmxjkAp9szWSDTh87RddE7zsA8tEziFiLQWrK7ZAKSfhF62bqV5eR",
  "key1": "pNHQxTCXX8gGoUSYEMw8PVbZgFoz56x8MjjZ7MYez3fBAMYh2VKAdt2BvrxkHKgthQLDKXih4u2LBBoD27DzbT1",
  "key2": "547wSHJmH3XMBZyCnAQKz2XZ6oJ1DaZEjUF2Y3Y74bZZ2n2D3TMhi2XMo2pSL9PKmjjzkCZ6BzdA2jPHaWkbLJJ5",
  "key3": "5oGqKtZ1onhpKkqHYCN9CKqbMur2q61st42tPwtMjxLxho8SG38sfNieDecAHNnSFNVKnFT2ZE7D4Lqv7RpWZjQ2",
  "key4": "4VdCJj3sX6Kyw4s2r6EFLLcvLiXXiUmuAH7dMeHMjLdj66tDBQMg99sE3Hio4rABJo6SEDEDpwYWCsxZ2L7sfVTG",
  "key5": "24svKsGBqBXMJHRjpufCjx4eQsC93UmBdFHzC2GahDrYWuY9o6YFteeQHRXijf65mTGkCEGRERvURiEk87GEUwtu",
  "key6": "398GhaPZSfD2bRjh9j1RefNCsBEMg7cv8DSyKxCXdXMmNb5oskripYr23BnEGkwhFqFFTnpCQKmR2b65UkHhac8E",
  "key7": "2uS5sb7gMNrZcCxZU15kp3dwr97u644uGkevLk2mJVXP89XCSLx3J2h4ozjhddknusqfhjycCa6mDdgRsv4qVufy",
  "key8": "5AmwHpdfqsHi683HADX39jRxWtBNBPioxMEbj5mxaAZPhfW6r7hRXmgL9zPiWfMHRScodiCEo8DdEYRzWLp4qkdJ",
  "key9": "4zJA3LMoS7CvdYNKhcsRxwZmrReZxfdnn2s5jqPGqSyvsc7mJi9d6Vc5qU7NYUuSki51xVf2MrvnJrheTe1sYxmU",
  "key10": "5Ap6CmKfsXKDjMtQPVud1y1xpz5pwJcWkavxLJ6r6J2yhssqKCgVNpF3PX4A8TmqTw1kPx16yVx2bSD1RWniQz5N",
  "key11": "6SZBDf4z9Q1xcmFEYUH7h4f19osuk94g5fzbozEuq9rnZDPfw8q2yJqCxP3Q4U1RdmGLN3SLaPs36GM8BPoAKWf",
  "key12": "Dyi2NkgwSAs7unDM4X3ZXxRmU9p3gCowApyyF3tm9jMAKyC9xRgoBEP8SkoF5D2bR4Jg9RSRT22FRTEdQ6uNfy8",
  "key13": "5eLoigDYoHYSapqonKntW4zqBDaFHiZuUgEpn4MLLWEEz1dM7ib4MGamj4eUk284ftC1VuvGWomNATXb49xJEtiD",
  "key14": "2NnqaNb2XD4xu1JFLheoLZxXZgpe9HquzvLfaKfHLFKGiVD5QcjUYVAnoaDBvJ4oPS3rNQzQ2LC2Z1vDPk1BEzQh",
  "key15": "552ojtirApxq2uGSjwnAhz8KdCyR3Z5VgbEkcWRXd48FN75FheJzdWUhXM2Wmp1u3tqpkTjiY4yk6SHKydLGp7GN",
  "key16": "2a5t6wZns4QmX6skvPD6eDzGoDuUS3uP1n9TqqK4o5gZAwr3pwq4vFD98ERwqarVFTe5uN6tkEJ2znTMBpu2qunQ",
  "key17": "37fSoxned7q4b31uzDkcmfcbZ1pxDTprJHgiCTguhCE6T3BYr5RdTVfVwuv3DibZYA9dLX8yLKAaUaJht4x62cfR",
  "key18": "35vntJX8cSqeUz33zArNMKG62vVdPKsvJqsC6AUm443qW2UavvJ14WQirPUB8b3pZW6hykDuGbkQKaRYK4EtxcPy",
  "key19": "4pUv6xqd77JvFdth2ncL1tih2J1yYso4F3nqUrFBNxUXVftJvVp1MGcy1mvcaoW9a5kpVbzKZpjTpmzXoh5HpK2C",
  "key20": "1DdPSPxkQi95Eiv6LxeGpeX8UJr3QTEz1pwpnjtjgULZDQ229tTxjmCoxshDdoRzpR57KKZg56tHTVWTeCGDu7N",
  "key21": "HsV3KyeoEBrKgL5afvMDG8wFHXTLQvSNa8p1EDBcLDaE8yWxzynZLenXKvCirCiVGzs6GxGhjuPEh3aHVCLM3AT",
  "key22": "4qAAGogYawWvQ974Vk7rJgY9zCubcpGqKGNWtMEWYJrEhrQL6zs92YzVjirXMnaCxfeSe6z8LaxeQ3jtgkk1GtzZ",
  "key23": "4Sazh3npyDEDKD6xmjjJHtoVDQSVoEFZfW2EXe3iZKWHpwZ8u5xiRGHLybFdLAF57c9TZzDTWfaxU4NcQNRWJADF",
  "key24": "BjWY2E2HHaXkMWtXgGRi6V98syD7n6PvBiYsdHswQ1WuyxsjDHsL9qn77ieHuzutGzLugsn4VnLtgxMH6qytVxL",
  "key25": "2RBD8keepMAtZ1i4tis8EAQtMxGfMAkzyXEiN5cVevs3deTS12vmZmPzYKLowi4rMyq4w9Rhkbe7oL1s6BT5mdWX",
  "key26": "4VVr94h4aNravNkwqJNX7wNfLWKCYFt3VVEfBqk3nFc9exrt8ubK3Bzyz1LKwUZbLabnqWgbE5cfLePt6sSL31cP",
  "key27": "3mX8MYYUKeabdcRfvHxEQhRWNga17y84QzdQPTToXbsAyY2rNR8rr5b8JEPPysXAQT9KkYEMroCMdKZDhyCCkA6x",
  "key28": "AdDCi3qn5feSp1WrRMKd53VQzGz45PRheo7dh5znwZm8XE4Jk5e35hGrDvZKtXGksoLdokxg6wFmpq9bqNMTgps",
  "key29": "2xVS4MJ2aERhNwPjA1FerTyKBBB1iYr1PkASzYKs3HVBkw62DiQZEmSwfwCbnTiR1SwYZZNxkFA5e8xvujomj3nE",
  "key30": "2mDUeeozmqokZQHxpWpcu2N8MSvaw4tFAkQnNzBNP4SerCSJw5w6mJjasibTW9DWmjDQm7iehTBYUbvKujbuMmdW",
  "key31": "4gWZXX86xZDWAKbgPEy4V9ABapq6W2fvyjowKpxV62NoEziU5qoJ8PTzd33c2JmFeTGcnhBEzibtrke8EUhVum66",
  "key32": "2yn1GMXNqt716SAWZdHL31h4eWsthZmj4p85AqsF91pb4ucWCvwhw1Y57GyDNdEcqoENaVi5D8FpKRBQ61qpUS4v",
  "key33": "4gQLsVYPrfBsHFYh7KWbUpQxE7FgQyC9DkRKCByeNypWvTPGcxG1p1HD1M49YzRz13hAdygXhXe8u167pHSFkiwK",
  "key34": "67EH3FWRpK1H11dtpjRqmmAEqVdJVhozaAsSDiKwWfpgfA6gcDFYVqPzaznBZSVp6VnZHVjvRdPSWNUoRj58RTF4",
  "key35": "3eh2scwKLiK9dVVVBpowYCnBXqA2etRguAWoqgc6TLFJQDcNvFzP6411Cb2S5pDXEVAFwXcnsuPdjUDYboiqzXyV",
  "key36": "SBc3reWMo82VwRGJpTYGr9bjRzy1XbT8RtDXfHkxxPAb9BGj9U3VEGBZRnefTrYHke3vNZdhNgrq8fHeiRsGTeM",
  "key37": "2ccrWBGSCMRd3C7qJNhWMq1T6rrpmT4LMf2CkwnLBRecNC7DhCif6Ap3h1pZL1oHUyVZuXCABsPehfAi63huBspG",
  "key38": "3e6rWTWsoV57CuiHbYbwRmSSqNECvZJoz7omKEj29nkQX3FhRDtqHgdfVcJtcF4dMMn2T9DxGpCiA1ujEpoLijXY",
  "key39": "3zL2rmvjE5ba5qHTEnBjRuQymx95NAc1LUTDeoLHkX37aKFVdMhDciwL3CPRkpstZ741YoM94pgCa66Ho8UWF74K",
  "key40": "5R7QttbikcctgJy46s47S47ME8Z3F5VKKGcJEGDZCniBQqoRH6jdGomMwzKC2gbpDxsdPizW49E987jf5yk4m2pB",
  "key41": "4EExY54EyCSy7bTi4CnhRhAa9XAwemuxwJTAF3dd7xLH8NZZhkfMXRvZa1gHmg2g7HENFy2SgzuSC2qaBctZEYCU",
  "key42": "3tgLRnxegH4EUJWTpjvtiLD2QxT8T6YtjUiafuxGJj79athiJqGxD6B7LZ1b1wykk3EdWEVXC1dHhqfvtjSF3Pj6",
  "key43": "USM2J4mfddqZf6bJsz6mv72JcQf9K7U1ajWXtaF1Ssw1Qe4PWUqYua49AYk3evQWjoaP4cZb6C8qbnpvNNRs5WX",
  "key44": "5ypxMBnNxBqSDVvWFMcVsB5U9NS8im9mkTA9b75B9Th8VnGd8Un2Vy15LadqoVCSFXZbPnCCQWAqimimhL35qtL6"
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
