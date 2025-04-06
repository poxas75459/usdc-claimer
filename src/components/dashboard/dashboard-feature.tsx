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
    "5CqntrbGb52kYbcTzNSaymWoBF7bo1f7Nt4Jjc5rohBCeVp1n5RDWB61gyyqFGZgbpBDeXkTEqjmXB1NKZcizPyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZQ8rWKHDLyRz3vCH22GBJiknDo3uK13Vf1QbqLsa6NPoEtBpfNXtEpL8NhaDzwNCo3CRMRixKqeDzsWrypVXYn1",
  "key1": "5ayjevRP4wm8Dz4Yih1PuvNuVmw2S7nQ78zdfmasFqjmb2L5ux3MXZhvTvBBhhBKWBTQFE95a9w8wF9djcHVH4of",
  "key2": "3d6cgRGhxqDmCNP2XibCHru82s3AhdEtRx9vGrvuNYhd1Wna26YCVd46ne3ZUxNY5iadrU18QJ9zcYiXCYCyNyV9",
  "key3": "2fzD7WJWdF3iTtig2FqKzt3i36ekHujyCw7YgQ4T8koN1VoMuHq3JdueNLHM6Srth25iAQwwLYtcnWRpbBvRWa9g",
  "key4": "ZUq7Nta4a7kWfRNB6Xg2GhL3MNgG4F81yKSsKNiTbqxMMktszkXJZmSJBNZ8oSW5xsbWHPHNhA8bXGDQ5HCtFzc",
  "key5": "5c8p3mw5yTDUrnrG8FeoFxMaV6qYUnwu4AgJ2cKXJnW5jcFk49YD4f59E8PCfbVtGDoELJon1NZeFwq9cZyxP27Z",
  "key6": "2JH2XVF21fGu64dFT5hyz9X96y9KRecyocVn4GPj5LFpejk2qEYjb1x3ec3PW59fv1s2D5njjUoPqEyniof7d1K7",
  "key7": "5Z7My8RebQGjDQDGmELoKpaYETGeT1WuzmmMcphNLbHpPfNPedvJQNxML3Pp9TRnwnQuLkx3X1zvqSsdVucgADJe",
  "key8": "2qvK93nzoTd117L9VHy5ULbp8stEQGAFQusTVQaYmtrqvsR1NZRcbgVkwrdpbEMfX1DTpcJMG5vJbhjZN35xX9LY",
  "key9": "5pm6AXTDqA11NwT35UQM3vaz2Fh3AtHC2S1Nni1jT4gHMwm6gh7AoVh5ZS6W62sbxZFA3tCGDbCspLNPPn7eLbFA",
  "key10": "2Yhj6eDUPwSWT9r8i5ccjZgXjkA7B4h9PakQZqEJpDC3fYYPJ2HPTsizv9vfPpEvBLypjHsvKfer5EaParabPhH3",
  "key11": "4Md2S99Q3qWvp3AHR97UctqxC1QkmDpdBfHMa3BEmZQ4H7EuEg5DgEEGxVs7aLX6CWb2gzAniqMxF4TcftpdZFVb",
  "key12": "7cfR7cQWJ9R194xNrt1qJ1us5QUnYUg2oBHJ4creztifUCdq9PWyvxnnRtp7tzn5c3fSTZH2FzuFkwv7RnRQv68",
  "key13": "3rb58jYKNVi5AJLU5R5znQ81XegqPWyRDyA366HrQH55LurRPhr4yZaA1a7rp4TGHoEM9cB4fv4PYkNW723QQT39",
  "key14": "3D92mdxbhA5BQsk3X8XrKgw5t3fhEyiSFWut3261LeteJ2zE7uCHt952tva9JDKC97NnmJSUDhYmsmoNwPZWftUK",
  "key15": "4EBzrXVLMtDtiEKquCJxqUksHyRNwCUKNEeAyqXYKrQWbTHnWVVmnPLZQ39QP1Jrq7YkANKfWtknKxuYapQmMxy",
  "key16": "5GHsk4Rur1wgKoMsrCC68h5vdpCaWBctibnGbMaCrtYJ2CNgQiY6vpks9CcrBEaBxJZAnGkQbAjGfvJVWToGGZZk",
  "key17": "3VTsrgq6LcJCAw3hXg75oAzHc571R76y5nyjMPdYNsBQt8Q2F57zoQ1T5HvaXA58CvfQ7JyHewDyy7937Fx3bePF",
  "key18": "jow7y3QLoARNFSEmHuRZvY5pWbh8YRqtAjhHyowjJTdZCy2xdFhcGyvExtHxzGH7QVRtvKCCXiGGzgeQ7thMJFx",
  "key19": "52dvtzkXEpnJL7EsVW5mjbM1DhuXrrYhhqUUYucaUroLMLFB2tyZnUX5jhS9U7uemWf8YBJczy6DZ8g4kSB3rhma",
  "key20": "45yt3FsMHB8KtpMccqsDUYnrYBmWhzh6VXSJb8SHeHRN69M9geYgu8Zj7cn6BQEtrZVNDo9AsTzouHzt4gfmbEWb",
  "key21": "23veSbmrtC7GxnGPed8sndqhyqQHFUNjJSgUyUTc3GCGdnkWwvzBoR2oC2saXmydweX4WzKDtNUR83Ernfu85RKC",
  "key22": "5bsVSqdLh9E6NYg7BiqKpyQjvmmjQTbPi1YK6Qq34xz7cUJXZp7afSRL3T4t2v9gDUQFGDhFGRyondW6LcSgRvHJ",
  "key23": "2KyGe814oRaZsBWQGpFNor3BZASe4R2pkxdxLyNcqUj2ZzbFmckFM11J3A9uT9sy6rJEWCvx1mQZuDrZHtsKQ5zb",
  "key24": "4hoNg3YrBz1DSEYZpU44vwv62eT555ycXEDzu2aV1ZaKNJYAmBz4gfHsxie7ui9WvuEC7c7RNvKrukqEPDWFiNBr",
  "key25": "o6apfx1kNJNbh1wXSQPzY6TukysvP9kJ5xgyt5SoYUEmEu2BRjHnPErQT996yn3SbKGsCEc38UiR79Ls5mvgLR3",
  "key26": "5EHffhYc1geCAwDVWPHscfxv5MwmkJVTvFfQ5DVEBVxmaMDUqhULC4rzRk9M29apPhc7PnUzm2jGroaUjWn1uxCf",
  "key27": "3f68pSRTefAPHbHTTb2MHJjJCMpntE26ahzoG7JGR9KbvFDanyG2tsRL7YPPN7QNr8ch6gqxaQcMXtyAfTLs6jWd",
  "key28": "4d4crGKjanjVytwet7t4WLzRFfnBAQ2cEzQ42JCmUnmoJvoXGUs1AiDssE9FQvNCfxyYFrYUtsbmxxYyjTFRnU2a",
  "key29": "33XdFmkBFTYAgpMF7Xvvjpa6JF4ChYvzo7pmwtUNLJWEb24JqtiPSzhGzgarJBva6kYVZJ3fWHwZWSMUzF6xjjR4",
  "key30": "64WY1fUAMtkvuH8XCmEV6u1NCP8iwpKMdec7GLfMBvfqd8mJ7pBGvCciZ9QdabUc343rGj89W8eSUxYEMrtFDfpk",
  "key31": "3t7oL5oLYE3XAtRb5QZJmt7SzhCyLvAaNboRqvfnWKt66zAehjg1ceJSL9UL57sYe1vUMkpSQqb7XbZwcPq3KQEw",
  "key32": "5VaVSyvAJtvpVxGG3asqeugvWNLR8hJHf2KMatXhjF1bjaKUwMtFTJ8gKt1RDTULKeE7pnHzKY8m29wkFb2Twh3Q",
  "key33": "XfPeJCwKdzo37f3bA68CTbdwD9vm9nb7ZB6eexcqTFE8MFNj1rDuRkDGFNquxFRNNeoLu8J6jrWZPbbvhgzui2N",
  "key34": "4DriNRC9HcPtcz9QrpMiLrVcfx3nazrMsz5kTZ3roscraDMmjzkPxfoqcp9JxrGNSvXppYajJqGqGKXH6FQjLe6o",
  "key35": "3J8e4dUNXpwbg6KThDWJnyqHWo3BM4yk1dJqw7THMNiiYc3gB3DjF77LA95ap4QUhE24GxWmR54YSpLEz5LqygJh",
  "key36": "4aAYMrDe2EHr3zMdTCvrxtZ26NkfXyEfjTRgPxg2AMiHtDGVAkhAuhKExUTPs5PVcLED6jtAp7Yi3tDggG99kXx5",
  "key37": "4HN5mwvM4WnNAgid6rgV4HvMvFkBdkS7HBHHAtvJReDbWAD2opbA8ECM1VWzKACED4eY3XxVwMcPFCFZxfT5H9Eo",
  "key38": "5WRMAu6zTd4U9gMzNii7bSgD3EK2ccgcnfFGuvzFzx2AeDQvVC9yXK9pY3peoUhHJPQWw74CknedpMAj5quSgfTk",
  "key39": "46A7Y8JC4CvdPKh5sY6acp5VJp5FtcFmHxZoPTQFwy6EGtiaaFNrXaRWnrijhmh5cByAzcVDP3oF8Mq9fVQchyaW"
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
