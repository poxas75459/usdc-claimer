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
    "2ZhXUhhZMmUH4xPtehUoGH6u6qGyqR7u92CXpnFTkX1f8G8Nzf3B8hm8BB49MYpgXFc2axURW8Xpu2PBctyDKCFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3meDnz7msqfVkoCtNZiJ4Tz4boPLD76robetuXkYmGbo2MNte8obTRAURyHRvuJM3U1vXjFYNmZUpthHhcmbzB4T",
  "key1": "NU3C3nsHxxWfNygoorjAwBFrCbJjyUVoHiSpWaWmHe5gaKyPP69mQdYJLkbtxFDDxuTi7zs9gWyDpY1sLZFCtX5",
  "key2": "4dPNeXhnNLmyhWdSb2qSdrDWpvES1i1TMQUZgubpeceWdfH3FomrHxHReacpL1MjHV14WmM2sGGkZzQX17xUtuYG",
  "key3": "2xWC8zk5bidfHhYLNds85UWjeRdAT9M7Pku2RuLgJpvbVA8juUSYwskJ99ASUaKfnQD2D492n8h1AwDN7LWgpXf1",
  "key4": "ivADJSL4too8mipwaCgytnhnfEzeUiaQRgLFzZdnKjrC5gEs3ZiP7VoSx4PojzyUB5rj9H6Zbkntqwzkx5ScpR9",
  "key5": "4MgN3bCoW3GEywrQqRi8pSQ5kmdMCCQmgxgGwsJqbvddsxMSdxDqYUct4pb9YubT5YnkHtuMgEXFhKvxSc9g9Qzx",
  "key6": "4N6rRR1dh6ncWyf32TsqGaif7ZMiBYxPNVJFLyjjnxt6ryu3t71REWNsRAchvrWi1LixMeB3jofVC9T6CpYMrpan",
  "key7": "3xB4fLRonVBpvJbzzoaakyGY2i97ZUayMz1gWmiTaEVsQLf9RdQHmppUBwmCqnb5H9wrvmTaPAR1e5UrYwxRURFS",
  "key8": "2sFygQY244wqPBC1h6uRpYVTjLM6n5iecaUrq64ccJC8yxRcfbrGRzNydPv1PBuqGgr3HK2wK7sdixvm9DEmB2pK",
  "key9": "4Hzd4MqYfNFhT1KNtfW5vkQS8h4yr9NVdkpZpPd6DBHKLgLsJwYJZZxRCVHVgmEcg23UwvunfoMBadkgjG44VH9L",
  "key10": "3DHrv1FiAG5dobY2TWLLhn4xoi6BKWLscq1123iCrwvBMvT6dS49YdH8aZwLpoS6CndU6TkoXivmkYfQ5im6nwjy",
  "key11": "3pvqXMN1ST9akes3NHTrg6ZN75MbXXEtTPwLbSUgE4367NcUSzCH5Mwr4RHJtENP4Qdw5DGwZ2nGxszMSR1wpmpu",
  "key12": "3GG7YfLgn8fMZPWqJXCz3nw2uqkwh7C1oBirxVLgVjqVCJLTjVe9exyqJaKJHxeJcjx7y3tXuDLDw7QnTVF1Er9F",
  "key13": "5pckCffm3CCdbAzUuqiJMBkFkZ8JRYp9UYp3cW25J4MT8DHUrhd9L3bMqtceCvj3fyn6nhkJiWT91ZUoQ2843xA6",
  "key14": "p82Uo8Q96MX2CoLpRNqeTVJsbnLuozD7GnKaxAFiEVEa8CfkVdUxzTVHRwH4Td86N28ooH7M1skvP9jYV6bVcBq",
  "key15": "4He3HyxNSbKri4XY3k67fS54XckeM3qkJ84GoBGQV4FQA4G81UBkBguTTvx8R9NiUKmB5XA4vS8ExCNkhN71mnFh",
  "key16": "4BReaASN17jfoknvXkiisW8TcfP1MhySK18KvxmQ5gxYKddSbHzeH7gFUBca1KmsnautbtwnqujDUmiL8GGQrsd5",
  "key17": "VaEscNcFrUv4xY7KFcRYFHiS7uZyYbuFC2jCfUsN6gYo7wT8M2XyQtF1KVHkN1MhYoeismnni5SieC1isy4tvvM",
  "key18": "5AFjqv6rPxbiuiLNAr5jxbrE6Ku2XEYWnsaq5WjaGcZEMzmPr4fZcJVbVsbVFmfgEVrP2jFWfmXXpLKLZYeG3Wiq",
  "key19": "5k21McCax9GVHWk3hkbf3WZzE9xEzGgp8cqWZECz8MksYZLYWQorTs5uBKM9vNAaFPGqTnQ4p6BV8wfnDGodhWLL",
  "key20": "23E7DyBjnVatwGLJZ5U9LpPg26ab2gmySdmwPxrBpjBbp2sa6Bb495b1fnaLj4bcGqg6LVtiH6PFwNKuu2ZpRPQ5",
  "key21": "4rCbifjcSNQmoJoBgdEW16QtqnYN1Txqx897hu2NVCjctocMxGXDewhKn7DY8AzeTJsbSCqnUDAX2YuCcnHRk723",
  "key22": "eH1dL3KH5VAqN9afDkQhp6FWF7knb7NGE91MC8CNXRoJairmhjXGMtX4yxatXRJacBEqiVWna6r79S9UookZHKC",
  "key23": "3rNCrvVVJuj3oUPRqkHEoAGrWsdajQDeHEj2NLCdFSkgt3fdsawLpjDBZ5DiVpoY74iztUUsj82t3YGo79grHY2",
  "key24": "2n8zcW2RLQNeckLsxgyNoyuTuMfq4DSsi84h32LetAVuS5AVswdCX6DkC7fGinkMTKHKKbg4yNWqogwFpvD3oGo5",
  "key25": "2rCEntDZZ729D2eRFH9agLUD3R6g386WDUpxa8iwNr3VwtQ5mPEMnQQLNPj7JprGcL5q6dT2wQT9rJbwtgzG853o",
  "key26": "2K3baBQnkkAmTfxgdtHKecdheikDr7XLAW4VNdTZoeTwvGnRMSDKVSreiXC4CY9Ykbgfw4DiC7emPQDvAgAJr6Gv",
  "key27": "5BeKJTcWPkirwaGQN2yhrYeUWjHYZJmZ4J7P7FCWDNsWZ9Q3L6c1JHfg2GUTMPZXWkFdBcshSueHWmvMUUCb2Mqd",
  "key28": "3r5etNUbzjAswKytyua1AscGfkhzQrrbhXoKzmaTCJipyF4R9eET8fp5QYqwh9zrjzEZUj72Qweh66Q5kDtTQEdv",
  "key29": "3kfrXfNt9ccEEJF2GgQwYvnkwn5UHLWQJFyv6sWCycmH7ygLoDXhY1p9jdeAvTwiNbBPMmKY6wMgfrWNpZF2ppfj",
  "key30": "3bhuoj2YSsrNh4Sg3uGWHZtfjYSZckFTGvMNf2BKKq6JvZdDJzVg6T8md8EDsKdqg8e6qjh7UyJaM7YBzKVmDAML",
  "key31": "46bb5pjgJJsxZcQPA2Uaszgf5evmfUKTv5Vdafdpw71EZgtaU4kESSvTB5f6rw1BvgFCfjBvXF9tiykLpLiVEh54",
  "key32": "3Y5jGHDz9wJDhkYSP22EonSYca587aTLC6vvAEmZg9edw3Br6wWYwpXqnNN3N3zUdGyEeajuciFd96daZ8ptWP9C",
  "key33": "3oaaD4TFmSXBdjPyuk4jhfYnkciGTby3iLrsym4Hif9aLrKj6YK5hCrUQAX9VVGUPkwbKGANX7AFKL2LTgEtEUT2",
  "key34": "4kPnMxeD815c8oZsGd2QqC2jQtipiFUbRzjfknjjCWgPuJNvY4MuHzTykn3KFECwY2ePa4L6Eon16E6MBYL2FnvV",
  "key35": "4bGALAnzFjyqWfu5SMdXPRwjuLZ2YZoZunnCSnELVKhyZRTzzv55G9E4oNy3n9o17Vej1cYhEnFd9vM6AbcLQ55A",
  "key36": "3xwAsLymwunuETfRuQJHQJcceDeB7uD8iGKjVzWrUvQ36vatQ5kzvLZGjHokVDqchkJuo4X4JpsF9gYsR1Wkkuev",
  "key37": "3myTvY8afe1XaYA79LGjYGzwpq8ZtLCdGGasssATBNvWFKDKvxhcXsubuYediWWWHyp48kLLmf4QGW1D4mvK7wcA",
  "key38": "swjVys3Zkni1Qvf3SSkWXtbKtsQjdDKGVxWetLo6Bdf2jGCodmWrqoN7Eef7Cr7MXLxNUgmLJPrJvtEaGxVhwrh"
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
