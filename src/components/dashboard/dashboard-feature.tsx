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
    "64dNUzBT24cQEdwsZTSCbMayJRNeygPN2u6ezEHmZuGkoLNTMudxTydZTy4gBvU7SBU4kbWkgAiXBiWiH1sABNFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Aq38i5s489rJdNUTPX4bQBLmNFWEcZVdbbbiEqRZfJ2tQ8qbKfRT8vMnbjnZR4kohkNiPz5emNExSQyzHYbfvD",
  "key1": "3JKmppcBozB9JGUuHW3986VNCEmuqPx12m3SmW8YMta8tih2pBHFWGzHZQjzJFBi45Wmu6o1LBoXrkowSdFB4qck",
  "key2": "LMkHvGGSt9LP6sm2bTfj9eMYpBFPSEg1idHmKrreDgVmKqfKWAckeKYGritxQPC5ifVkGJDZn1894QXSe7uqf37",
  "key3": "4tNkW2W2iTh7fiU4sKWVgVc1R2YmSZXqf3QLrqsgz5Yx8rrWBTYkrzPFNMW2fDHopc1igG4BY3Ek3hyvDTLtuUiF",
  "key4": "44mN7ZTQvaTCCV8eoNDdQMPLJxAPsCUBg4BfxqZBKtRq1BFNMLmQZJEnqQFJhX5EacE76jyLFNjXRH8sRruuUX95",
  "key5": "4QWeCuvEBb5CHG1ngTKiSAeEhfQJhRHk8UTAtXn17GFKjQKeo2jW2Xv17JozLvhZzT5K9AAYT4jQ2usMfC9qJbpw",
  "key6": "2sDaag4odA8M94p6V1mx2fdiKgCQ6NbruvSGESxtPgHRuqYq58xM3UiQ51L86mff9NZPNdsMGw4xfq5TukEUC6bp",
  "key7": "22d2keXxgVbQ7xsUaNCT2u2GEjmn1zAybCzV2KBLjhDjR1teMLyWYeLzpGrvopBrcfrK1aGtmcou1zwoAv9N7hXx",
  "key8": "4BJXAL6yeeo1jenxmjx5gV8cS5hoxoFhj7fAnxzwcVhoQ1hP7M1q1pKhctTjGpwNu57JaeDaUxyV2J9b5vvNGAnv",
  "key9": "3hKRY77gpWTVTQqJCtbx7NJhSCH8GHDxZxKT3defW81WiE7ZCe7XuVud4C1D3KTBw3zMbt6a5oDJtm5VMhs7VBfj",
  "key10": "47HDbLw7octTQT32UQwixjy1UJn65txrACEu9Bkck3Zm75JexnFA16db9GMJ1u5D2mTerA7QuqimxKh1qC5NdBZ",
  "key11": "5rx6yVKqg4G9LqPMHhHo93xRsrWRcFieYG4sdn4sD6hnHH7q34fpptEyz4jt4fJKndo6szbTYPwKm23WUBC853TZ",
  "key12": "Y7XLVyyd46YytJvA5mN2zhAiXKFgrKLjSQEL6RXoRsyeG6qGp8KeVVgj5rezRcAzDRiSG1C7HcNmaf1Sk9QDoA3",
  "key13": "2oYf2ksXZKSkeufovRYxumBdYLSY4fjnBx2XmhovK4onue8wMaMKJuRNisFsoUN95wAp3uJJMX51VhnhErXGKPVr",
  "key14": "5ZTFBP9YCmS93ZUgp9uZo6rhdydoavvpMM8bwcSj6RyRzHTQcxAZZVMaPsB8xiavR8HaHjWWJchF1f7iJgQ2HJ5X",
  "key15": "5HzCkCzbBAcLoCa3jVvGr5w2RptvMAGcwixoi9Dtc2tdKK4jF7HbK1yfvWpTSzVyGgtuQSvxBDK7bzcrQJ142Yt9",
  "key16": "3Zxu4d4kW7YPSD4yNfZE5vUhz8o9yDzKK3Mdcy5sFkR2A5fq1h1zkUHMSCUyn59Fv6i9eZLTbSbFRV8U7i1ZELV2",
  "key17": "2w82XAknh3Xb7mbT3g5nEjhqBAtXDNhUcL5Nvmv75j4MNEuHypUT7RZUcTcLQa1hAV2XEeh5ukPCWAydLBbTg4er",
  "key18": "4BWcErTBYvdE6QXBaxQhwexMrE86rDgVLuLtqJGAudPozELEXWSVgYrx8qLaJutjyKnAjX1QFW6Du3p6G4uYdQsv",
  "key19": "2SgdPRtEHCgbELLSiWpvLoD9xz3F6bVhpbiaAKtntHN1KJfeRuf6YBDfVsPy1UiPoiZgLBNH1yfdiLsy3mpzJacD",
  "key20": "yBurwzki6kqvmP1rxJreBnCNytScujGUARyNFkyctwTmgB9ifUxwguD2NyndNX3Scjmh9713wwRQYvhpV1pn4vh",
  "key21": "5ohaqSE7iRj5Dq5LQuiNTz8kVRoU1JSXv6qSoHpNPhF8GsuZrh3qEQCR7q5meM1VRshwy9XT2wFjDHcmAwRSH7qe",
  "key22": "2rhZemfinoYJkkQHwy1wfVZuDGBi9rHnoU7aJ5HSkTNgnEVha4nu8z3rkBwLj6zqMXgbV4rqbN2Kjv3qi8EdkHXm",
  "key23": "3oghsM5URbdVJsAGMBbxBQPFS1peejijahio3hXqinpn7TQLZDUfmUFHXqdbod4Ne4ChuzK3jdchTiGXcinLpz1a",
  "key24": "4k3iWpiaQD64FX6hBCnpU2vLHhYiVYeir1a4JErDFRna1EhCETuXDuRBtfPnLn6YxEE6QR1D8hJAk6ec15xVz5Hb",
  "key25": "38Ujj7cc46msCYzfAiisWDVNPjgqi6CfRKRCw3mGhyBxH3AJ6dQ22cmgsEBeUeSM9YT6Vrrqh8pEDySoevxnUJPT",
  "key26": "3NTrAfytzi2AAu1hbytSCN8fLpp33UUr6UVLufHGPh54o2fyTEVEepLZdXYE7whoGsx8iEYAD8tdNxeXbJkpvXdc",
  "key27": "3AiwswWJ9MAjZZcWkMAtpC8hMWy9E3UW3sthaaLFaigzicTxHBpfQZ577oJab7kE1Vv9VRt3P6QT92i3vthtn6Qn",
  "key28": "4rrGfE9hpa5XYFJXwTQGcPxjVUegTCoh3ASZ1Gbj3QLUMznwLKaYKfe5dauaYn9Ws8UKEh1UXaqzUZ2aXw2ERVzm",
  "key29": "snnVapuDWucG2g6fjYcy12ZrVCWTURenbFkMsDmxzsJcMwQ5hG1rwnF8t34HgxpwA8RrjXKJEXtXjYzXhReJz1R",
  "key30": "2JjzHi9iFskBrnViwP7A6vqJszFrtd3UCyV4GhpqozvnfQb1B7YnNhRwak9w1tgDANCT6tAvZ9TvN1GEyDM1QfPi",
  "key31": "4ReE7wTWdUBcQimpWJ12L3NqgofmLVFkMxj2A1VoQRBUEDNdUR137Rzycu8TrBsfEWf71eZ97LYNNu4TPXqSR4x5",
  "key32": "4JYvpfoG7DtuR5xweMj6pxxveqnXgv7xQrPMqJ5ccpXT6YmwBkTwEevPa4qmBspFWjrdh1yvBVzUwcaquZiCDX4f",
  "key33": "CYVhDksVSiRCfduni19dapTZQJ8cgsN88tyJ3kHWT6Yz78doAMkkXYP2ViMrwfpUPpaZSLxT9BmZfhf8jFyD4cn",
  "key34": "2mRYPAGjuCfz6sx972Q4kSVKDurejboK9t3XFAvZDs3A8m17HB6nTWbQFsysQuzGNoVdxvPiZuQcKiLNNG2tPJPE",
  "key35": "5oZzfD3CRhGM5jZY2Srwfei8u7w8rqGYREQfdkCMj2AE63W94guzFeo4UDD2FRt9HYspGLa4Tf6b7hnjvK6csKGn",
  "key36": "58dyGUgGsLTEvinijqsgDS3kpdua77GnsyhhWrTmD1MVJvH3oyeiAxjbMWv3BkyZJf9Cbxao5Ad8XcrDskSM4P3x",
  "key37": "37umyvboEYfmmXB9iLAatDWXfUELDW4dBgs4F3XiWhd4nL3oKHqmtqoX7KtedaVESyMYhL8k64WSdiQkfBGB2y7m",
  "key38": "2UDhQ2tCBZxoysDWeKay8qmVnzudZL59LJ7KtkBuYxVkjmkzxs28dngdPpHdupYrJKYA3uF8FTEn9Z8X5m7Lbgk7",
  "key39": "5UKsjLHhFJaF4Tb2d4bLEqwxte721z6sPgK8DiYMaS8AQBLBsQFPmSuA5FqyPkGycJrMyVd7rpEAZ4qBGyJUaosd",
  "key40": "3rkmPPE3cpbasZPidVhQHo8MQjJuebaXZAQqYfQYfLjBoAvvt8httxADYG9ekEFxmRKMDNK9PCb8RqXrh3vV4Rva",
  "key41": "242AJNJgTPJ8VW4wBc1hPrB9GUJNhggxqff4aRkZfmvUA1yW6Hw9Xw9REGYCrffJ4QJMpRi6h92Ye8MAuCJ5vhdP",
  "key42": "4ZxHKkhPTLHvdFDxQ8Z5sbGR3QPYAbot8FBN5episrxeQMvZdDoR7LrsEToBC1BUUAxF4QKFgTLUWnwQZKFV8eAc"
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
