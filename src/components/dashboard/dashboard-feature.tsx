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
    "5JJhwH649tDW4tPBRS7XVcyT7WXyQMN81L63DFFVb3oFo4c2Au3Mygkj3Fdx9j9ksizHTVvPB6NwvEAFLPbsrGzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RCQ3bKjeWteUAPVuJbYZ4cab8f2GgGnWvNAvrbikoMhEaD6MA3ig8qUD6GTsL77z6ZoKdiQFu1pGNRrvPzRTgQf",
  "key1": "4CD9ESrogf3EN48UhRaCmDNcMv5wM8osDuj3F3vB87DpVzqdjN6rc6BZUfb6osk2kY3v8ibDjPs9UnDxxkESNyfc",
  "key2": "AvVJPfCu6Ct45Req84vH8PMNNVXUxbBATsHo86qwy4GSJHgc9uxV5881sAemo9QH23AGEzHZG8DQzwUVdYNkxbu",
  "key3": "y1szhiyxjTNg7LgFnF11tKKswfapnvZDjTFzmXpBM5otxY4ZAL4rtUEMQqxsXJKkDYnt6R9ASDV1HcAgyk3psvd",
  "key4": "3ED1C7UYVFQ5gxTQjGkhouyW7o7eRoDwGcyp6a98q2VoHLuN17GGn6xNQZDoHZkKWdoPodd8Pk9iGDfBDr1WPUhL",
  "key5": "3d8sYPc4QNtxHDUNQXTETP8YLEwe4H4nG791rmbxUSznEdzr6sFBMiFTbVCJ7coSEMZv6q4vR13ACrafp65KP5ZF",
  "key6": "4XKvYeLBjevXNRCp3sGyraA5WSBVrDM3BcGzwuEAbX3ZtPxayzBy3mCTM8G2vXk3LfF8YjWaT4wiRqZB1NUkkUyL",
  "key7": "2jJmaCH3wAxEx5tqpQ8u3867wYDCmqXErDG1Qfs6fSdzTGj6Hf88GMWMsNXJuS5Wm5Kce98YgAMDsnu8bHNc4ev3",
  "key8": "3zpqgfKTRwqypbHG3VnJ5mQ4Z3TywfbFwVKVdVoysPCPzGQ2bceRYEwEjwENZpTbnEyzR75K3SD7iJXDP9dKwJ5n",
  "key9": "3ipSxQCfNqzrG73VQ3yPpQemSDPw69u3mQtV351iMRkMdhqAmkG3XnJXutgG8BX4YmZamQN9UqYjLn2N7WJuusxR",
  "key10": "5fkW1nHtNFGcwaJuNHyFSmu35Mhomcviak5CxpsaPkBYgM5igZ3mhSvZzotJVwa3vqaPoxN5F4jhW7smHUW1X98c",
  "key11": "e1VdBysgpQ6PrZwH9spxLjUsGwrude1kZ116wLqqv6Hx3MYhinTwKur5WFZoVQndZS19qkoCxPBuUi9zDWTvmTo",
  "key12": "3NwoPehXdETHJtMtACcbnejuWG4FqzFKaCoX9avrm4DoeHJqJ2PnnQDgQN49P3VvxYvFfEmueJaxxe5R1UnqWo5H",
  "key13": "2GW58ThGuYtHvnSmA5bBhhkrsxNhYA9my869vGcNASigErFVDgwEf24cJxh6M29aPXYEvYb5b7HubEi8qqFwqnAi",
  "key14": "5jdocNYoLDtLJuNzAuqfoKm6EhKVoGkwgEneeQFhb67fUTic8NuY5KF9UwTSXQNXpQCPxj1U2s4WCwZcRyMgLmyK",
  "key15": "47fP8rZcBQma74ggZZtk9DCzGPzdMzPTuRv8qSgC1ZedXtb35TLihTAE7t7kQPaxaRq4178c958ET4nAuorGxY4u",
  "key16": "xv12yyPreAmWrYMkq4oJLTPKtV2D5KwBM34QoxtmLRQGSePSpLbcjzppjHB4NwLkUJMT7YwTDAh3edWJEv7DbNj",
  "key17": "5uaFnfoTTkZ6chrkVXpsMsJCzvukjzqFDyUsYeNkaYusqUdP3hAqRMS93DsgXWyT47pzko7gZ78WeyHgzzJcuFN5",
  "key18": "2TZcWHr9kbUrUHf4G3fJUbfTQWDDcP6vGwWfzo5XBNNmQqQi1Cn3E2ajvBovJxF3jDU4h6BMLwHeM3Hz88yAXtCv",
  "key19": "5Na2QAK7TAwh5yAXWApq8t3RvgmBDE7p2nFHoPJJSWEGnoGXacNkooVihby8T6em9CmgimMpvoASyWXn3VUWSDNS",
  "key20": "2zGdCDiyec6G3xJVR2DMP8jgjMF8ALAj4XXSuQCfNHaKzMLgAjJpE61WL3Ppm6ffaUdzsJ77dJ4CEGkHiVbRne7T",
  "key21": "57NFkPo2YCcPEYWtTmka2D4YRh9HUCg87vapF2iCzbe2NPEwwPNycDHLfwY47xesVC1S7w8ML5LHTwTWGD4TNyXq",
  "key22": "3KTxvuMkdkDNEoaah6fJSePqU2QTHZWnpAx7GJaRw1m6moZ3ExayRY72sZuASjg4ByDwBxDi8stkRmuN8stqRriY",
  "key23": "4ip68G8pieuCXQNyz78jyGzqMuA46Xcz6SHiFSjCcFvCPdbj2XDxF6Xx86WNcdVT9zTCuYnsnECftFjNfHzUCCSK",
  "key24": "5PXM5rHaQThDtpJzW9DDgfDUoXwwHHDoiVv2P9Zqno9wrvQw5tPN2QqnYPbDHzMvGPhEyR6A3a9mAdtgiLm5S7AE",
  "key25": "2GbiypzhXPg24oW7vSuZy4zY7roKXVDacDpDexpA76gdig3Kw2Lrm6zZ6v1xc3ugQXq8JgEnaUyTkrwCaWhb9rjA",
  "key26": "5VNQFwVs9sc1Zut6e4riReTT1Ce6LfgXuxpG1UNRLMpG1FJWSq1p81eDc4BvTHgyG37qu65HaCLHRFdBcC5F1ZMx",
  "key27": "4GX47rMp9dSrddiUQ9xYfpPhjqE4pFxFPjUskm9xCqcThJi863jwFwPrmoneeYBFQGCVohNasPYmC9kVLWNKW97",
  "key28": "3YDZ5z546Q3B4rCp5pSqJzq3P5oERPeqVLrW1yvQbecqAYB4kVTSobdG6BhqkxSdApdHAkBHJLxxzcSfcF2vrahQ",
  "key29": "2kLrP54Fg4XhDbAoCv1rXByEvrtRTEfHJT3zsNKHZVGaTSASAUffshzE8YjjoZEpQ5cgHudr1ct19cJH8ktTZR9y",
  "key30": "2XxnyhjmS5JtjTovXYBGCMVNutKhRKDaz6V1CMcZPmAFnR7JJWKYdPmQAkPjnJTeAZQJytErJWmTzmhcr1K6sCJv",
  "key31": "26JHdg274Qw93SadUST4wxNrK5pTv8u9BKuQWPB56B5AssDKcW6myeDMfGmwjB9CRbFKzMbLnk2iCxJ6GZL34Mg8",
  "key32": "5NrCsSfZ3bbey9aAsSKAijByM3GsrjoHv48xhZ6ao5Gzo7z1zK1d27jWpFg4gRS7q8oJvFS9jKvvojPnscF1hcm9",
  "key33": "qbyMQ3en9oDB9ZiH6UNLzZ7YKpWXXAew2KqiYfBiSaWmLZND1P2XrMk5PkspAJg6LnKCjHKhivvwbfx1ZGK1nXr",
  "key34": "3qZ5imiQVmchG6ntHd9vYrUeKvgcHhUJnACMxkrw85mo93AJh14UhZisgo45FZeQYVALCFd6NHoNxrh8LGi5J7xZ",
  "key35": "3J5Ky2BGfjNt4SBCPFXLjRTJkEacPJKB1FdB8B5UNsxUTW2ca7Bcck7gPQD4FqR891z2jhHS1h1hr5c7n321edB4",
  "key36": "5C16QGMtUBD16ALBwVFPeZjMsFFX9JpZhFM5CqC1mkL3wT8Me6X81cT7uDDq3Z366fFaxbSmzJPg8QLXwGztCvp9",
  "key37": "52RYczLDG6wGPo7RotkM7b9K8t8ANaNqLpH3uGuMHZZhfYToGpF2Dfk6gLPsCsmvq2xnYguwZRoKzVSJwbsH9CDu",
  "key38": "5T62KsLJKzSjGUucaqHgQSacxrC2pAG3ofMQfg6uJ7Ye8pwW7jzV11aX6a8hKoGLcTiKRTJWi88DeYT9XwXq95RZ",
  "key39": "H6QKBtVz4RRKpEmQJFbcDGDsrSqviBn2AY7eWQAyFQ3LLV9gJryV7h1HsBMFNa81aFejgmqV5ounrGFUkBi3JNw",
  "key40": "2Bg7DqJCx6zb2yNirJmy4tVUzGzpxLW8wzqS8GtmrhWWqak2PcxRnDSG2YJzxQmT13Exnmdo4YRbzZhLtdSyTfwV",
  "key41": "2Ss66JXDT2YiwMd2Ki73PAodbiW718gMKGpCN5subA6h8tJyNPeBojs5Etru9LAF6tGaKDGQSLmyGCC7rhvacghk",
  "key42": "4gLjRbRP2apuYYSDZ6xBADUUyEcvgWUafpLK9zs43XcUpTHQMHK7Xece9rhDQ9rfXTz9qNm46mBaaYtKwje9XcT2",
  "key43": "2EAM28VTAiiAmfk8jnXfEJGMAC7dwusHX91oQMUtZdGrr78ohJQU22k1qDWD4ADVKAvQaV3e3MFAijainyc2FmaC",
  "key44": "3VB1Ld2WtTQj1shgo1bzstFFVs5UANipoWNjq3yrDrqgdejEpMvkftME99u55Asz4NBmFJUAhnX5He2bw3AqrP86",
  "key45": "5iTqLJwXSrow6JoDirZX7iZvyQ2ShRY9CXicgogcqYCEH8cqnhCceHbS3mzjDtPjp83e1FnUW6P4dF7xzCSG5dWA",
  "key46": "4kSkKu8CcxsNVBeU12wqGgt29bSm1seDqmtrUVdF3jnSiXFw2WBXw2ugBGuZSJfrAsuG7jngV8EKV1V9pBNgSbMv",
  "key47": "3fxkAgsaNJUt87L2YAs4dRgcv9mNzefApEnH3o2EtGqVQ2zy5rRHF9BbM8Z4ACiKTvSdmgiQwYUDZwcQK8NJfeGH"
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
