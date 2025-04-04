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
    "4RYQ7ek9qd71MRLFEiPufxTuTY8Zyofghaecva3e21aB8RCcL9TGskzp6xRPoMz2BfzSgAt8uiXwAFc3DGE4VdSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cDZQDGnB9GTYBPrsxSmzJYUxDMcZRXCmYsYaS6jXmz7dGdxSFvNrzj3x7pRqKbxg4fUMmuhK4Dc1sk87eZmh8ww",
  "key1": "5x6KpGPpy2uDDpqHHHCSrHj8n3sn55LimMmbrHiQbsa8ze7f6KcW7GaaN9Hwxa72qSeSMPEWNVKpXGFjsvUMiSzY",
  "key2": "5GAfeoFEdHz1M8MdnrCkURzo42KJukPq8YwZnMhSY3EZXcySdHitDpi21Z7qjXNbsrvAaeXftdaryWLtANWXnGQt",
  "key3": "5La23H7BWFNHPX3fTrcWCq1C7pFTne2YSHoai3ejVGkYGwEDYw9g4eZ2bqQoWq9dTNdHs9XV3xqbY8gRxEY11B5T",
  "key4": "3EXoh1VtXWGp7S19e5hWERMbTQE7m9pz216tS31xjU1FmzZYtCz7tssLZZA77XnntmjPwRXh8gAnJAgtSQ8vM7ya",
  "key5": "WEiRWgXMRoHrgbENLzqDXECnDCsS52wHZD8hi9cdsuQvEcEFJKxAYdp7QnG1fz9Vv1HrMSpoXxCxxGGNjR4Xd6b",
  "key6": "3LGQCLCp6k8mBxMknMy1SmtqxNL6NcfqBcVRJWRyYzGpcNXey262W7boKnUyWeq1K9NP9MQqHmLJaKc56CL9x3iS",
  "key7": "CCq9apSYztq7TGuXTVscwjoTqFYuMp2Rv1r4SoxsTW8YtpJBy4RNwFsMhcdpoQt9eVkYNVz3DEgHJB3zbsPimrj",
  "key8": "PvW1MZw89ebSxoCYHjfwrqyzW7xZv25ASEgbWLJ8wuNoSMFa4Pk9wPndsZ5iDwAuoU4pipN4RJoKjBmS1EdayFF",
  "key9": "4pcT8UKf4Z1ae6uZM1171MV1rGTwpXX5oc2hEAHPTvBEqiUzT964bqF4EK5Mq3N4m8HMdAQ45xMRgFKh9g1HzgMQ",
  "key10": "2hEoi4GaA62SSHYgkyForeCXr4KyY2xZmqWtAifjdagX3k8nrYUD4fTWDKP2784z9nUXSoQZVDe4b53C24Sgwk4G",
  "key11": "4Sfbg5supaKSDahLYnP45qm4Xk8MeHhzFo2oNNv9FjfJTUEW9xTdgJ4mkJiW2Gv9DnURe95K7X2i2so16YAM3Qhp",
  "key12": "51mzA77szvnCZLyN7ZTSCHpsh3caq3YfQmTdcc2StWUW2MQopnvbkTrTdyDVsKpL7oRJ6JVh1m5AEMqqsrLVZZqo",
  "key13": "2RvRCRAmDyJHWpFfEZ55fmmsfpPkAT9961Dau4dEeiNzbRPmNAfLKm9jTNPasjknbe9C4SXzaJwsWXJyi3nAahr6",
  "key14": "5Epc76CZNi2W14BX8BBWctxqeopD4C7fBWoY97kFgv8z2y17MTckZRrSTbi1dM7vcVJe5e6vTkGZkXeooFsry36r",
  "key15": "5FaBPYB3yK2PFyR9krfpKajrq8fxmnuFyecF4rR3ZPwHp97scLDXhqYDvd7vvB6iU85cFEsB12eiszyPkxUM6dB",
  "key16": "MeeNcR7mLJkcHGsTJSRntDmbw2tY6Vh6bxppb7btwp7UxJhPXajfP5gRoGohucvuWk4YcZWQimkogG6dPjh7r3o",
  "key17": "4DBoyM56hMK9GEnusH7vBRnPtSxRSh3dcbBSoYMepiauPXF8sdSqSTgTt5BtpXwgeSro8muQwG7WMXA7ikuK7GuK",
  "key18": "2efDKC63LaXbyQ33TVxbqqbYV15TMwtUTFoWXv8ZWQnewd4xudWgH2xDtUiKjCsJeK2x2VbwcNcmMMGmYWQRfbJG",
  "key19": "4ei3gq2re1ZVf7m7yAa95QB456nJzNnHsuTLLuGJeiVLFnGSMzd52Ry2i8G7e2PysfiaJjwmThqr9QyoT2xeEd3s",
  "key20": "4ruJZaTHt2RrwzRXVs8VnTkhsvmC7CSabSRh2msEc6miATWRozfWFWjgms364LkMz1oXsmLyyroxy9NJU1ynR9Uq",
  "key21": "TgthhzQ2LDu1NTdtxQMwh2Ty3cJpnrggNJAz65RGWnix7HsZrgBSQuf3zqxbzhzM5VmBK9Zs5SdNmZF4Theoj5s",
  "key22": "2GTbqpFaJFnkMeSksacCxxkApoufY45NkNQmjRF5cEQ3pZXvfVsiTSJc2gck98s9puYx5YNoiKHiQX8SC18uxYzx",
  "key23": "5Zj4RqYCoxB7S4ukNQT8CDC8qzgSexAkMwvo5cFjYNYpLgUcubTM9cZc85whKcfVao83BinHWkNjfVpVkBEBXKNW",
  "key24": "3jrCccTcwSZm4awyP7BpqxRJsEKovKQDKeHazu3jjdDiCXZQR5xaMYMNw4Eddjgau7cx1oAQManCpWzQenfodYsh",
  "key25": "4xnhzLTYUNSzgdLnxCF1dG4VfkivZpxFzm3AZSpmpYqxnkWjhhmcUjwBgt1YckKSfYGTPgFzUivBgp5wUyqv5ssR",
  "key26": "63eAJwvMB1Pu51icfwU5Kps1uBtfAbYMZrFt88PRc1Qceic9PNRP1zg15UWu95E2jmcbYdu8zszkGsQZWH7BZ6He",
  "key27": "5dQVurJL5EtLLtgHdVGydNvqDQaUSWikrp91JUywe3jwZi4qB3PUggkBddS8tGQ93KhyZQN4BGChVVNwxJaYozLB",
  "key28": "51WwRHUw5De3E3fx7SSLa2WNLTMUyCpUcY9jKcgwaSKy93Ud7ngjKCkMV8L1vJoPJgn6xb9xCTyJJ9Feio4Hae2N",
  "key29": "5winxic9wkfgYQ2cmxKniBYobPrinFgRreZJCFGm7XVYi1FBUceiJfHLAvXfc1LygvWeHKaCSvzA5iCQu9Taikkr",
  "key30": "K6YzVUqZMXyfEVAMuYgqNRrF2bC2tfHLVvF6DBquDYvXDpXbiTCqoagxZtEDLiA4WPUD19ZW7PV8XMC9gyUg7gx",
  "key31": "27HZ5MBdA4Fu6hapC5QKZ69W1PWDGyBYmvUjanqpk3tTiNnWG9Akm1ML8aadL2zHrTr3fRGssoUS5zE1jFgNxwRE",
  "key32": "4JUHVvjZTJxiwXBtLAi2jqodGQNaE1uLJGcMfZQCx2ceNeJBA6GTrWxY3yjpDtP1VkfeSdLc7jfByeJau6Sb5noL",
  "key33": "4qG3QSZAhVkyvtKaCrqwoP6c7JpfmKcZfPmDPn7UYpmC3WmwgE72EeXSToS2yX3W3LAUkzw6c4Giud6qAJHLyRw5",
  "key34": "5G1rs9hEsFknWfFkMPQJwhnGWWMF4AvKZRzvR4zQXueXtyZKsamDymgqwHMGNq5NFyYoHQ1QH2MiF3CWDQSiq2q9",
  "key35": "3c8nNYK1K1qgoiYLJvvcegkK5VTbFVRV8FchJbs89WP5NzLHgEPG7Ko5cvhQ2eC3MrwenqjRJd3arDZVyKUWak5x",
  "key36": "3hHtD7F71v98PWh4N8FQBeTMpBZUhqyNDdZSNaaP3YG1HWCwwbMfrZPPRS7ejZH3mPkiG7LmWDGL2yQ58BwfrptH",
  "key37": "4zR23UhtHPcPRzdeYM75judffsAhnd9mxdxD3QPKne8J9coaq7aFdFJfye84RfDNQ6VhGhjHLY6kk5WmHADCqYT7",
  "key38": "3zApXb6cWoPaB4Uv3iRokD2A3R33t2RHFk6mkFcq8c3yqaY3dB3LFtYPdHLMaBt5AUan7gT29AYLj8SQkRA8LCqd",
  "key39": "29MY1G2VAQpJyzL4J3ZWEbk5XQBXZrstwud59y8XaCS622RPGuy9basKPaqmMmvyxhfgDs9tGkZ7YwPYTHXhcDsJ",
  "key40": "4KQTr6sLjGTm12LHvymqq2HwSptw9aLytXpZJQUamgyW6koqmmEuWBTXskVKG6xxaNAhhWLxNm4auUgRwgy1d9S7",
  "key41": "iP6rAQWUgC46tj4peHCL2dmdexHMU4Jgi1s1iBMYqfTbMLhwyZ8swid2UYZFdGd3k3TjeSDRnfNeaF42V6eXBJe",
  "key42": "5LcWzUnNhMTJNYD6Xt7C9xZaYnVKJE6wNqVBpao2dtZ2uRTMbDCWdFpmHiktGFmwZLwx6VVPjwEaeENLWMTEYbvj",
  "key43": "3Pm3bPXPHJMJHjhMmrcS2Kbd6RnBqECTk5fbKfqQ3MVWrWq2FAASm7dXrxokdaZgXSMhf4sMnMaBRYvX5oDHm9c2",
  "key44": "27g2bGQYuMmRDCgnDeugG84oacd3UzitBJJmCzPw5MPmFE6HpQdHk2EqCo2AXqagqNkMTLdS3fiE8ATs5w8Ukigo",
  "key45": "2CiAyj7kNavnWZUqfJnoTNmFtg3Q1quAUfbzkXcSQVGeR7hMNGFzKAubtqiv9hq7tCHL2sSCQhRkiNmhoErgFW1M",
  "key46": "62ajZjgg3gXkWn7EarKoEiRcacm8GHQ1yqA26kJuayYnFgVDJEbvccwPf5rS9hEsKvCBz3Wx5GBxRcVURTHkCFkD",
  "key47": "5YARogwdcgJjUUAX1bGQ4NNb7QV9dXWUZt6Fv3E8CHkRJXt2iiob5ytxe9RgXPm1pV7vcLRgV2rSjDBwdL1DowdP",
  "key48": "aSvwKc7hrkovPcuDvgnk1gymwdjA44VNTxf19rkNpSMXVwqrvykGbMzbmUexZhVQRAioAKjfHena66UCuWocwph"
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
