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
    "4fSCmyWhB6p9ZYSjvZFp3B3b2cqE8VWyKJefxp1TaJSXCQzzFDrdeLPZhnn5KCLuT5gYdRdJBcVaWbypLYoDKy3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qd2zqwQqz2srtAvaoXNhejzz6BZefbiuJT5XdiqSRgGmaw1cs3YWjUpkGzrnebwztnonQzFR7Z7aiU53SXaxFEo",
  "key1": "5ZjykfS5kZX5m8UdeGKrT3X8oQwLhnQCNTWcgxnWSpEgu5nt9msyzDLbpd3XGCcbcPJozM7jgJ7mS1yxqjY8GRzL",
  "key2": "4WL1ZmvWHmjvdiXHSyjRMFnnWcwuyjo1mEdVUjJQzVYPNYc2LY2LVuJSdNr1fAF6y9fYTgNLxtPqH36W9w6SaiqM",
  "key3": "2AA1hd7zysyA6HcaqPeY54MCekpj3GXu8qAEBvEg93KZEnYSUEgkW1Bio4xf2kjmBYLXKwacZZqNRhR8kyFUH9KJ",
  "key4": "Xn4qmrtrLhf4FAVLE2rKbPtrkxSkuUXWBuvVnmHZ4VjzHx3AKk16ja1m16rWYvUEKHhPWiFKVcf47TDt4SV6Sm1",
  "key5": "3sNtgV3ADfMQUrxudmTEti2EoV8cJjHNGxFXZbRE7ws74LF1X6sZ8v6YsMeZXacPeVkMHcak5xnWbKzQF6Z728YM",
  "key6": "4g4bugkoS4R7Na1GbzryYxa3zbefa1QdnAv25npwqM5rUXqsLgpVoPrzA5ZSfrgcg3RAuWMPidnhpAaMrJ7NnQYx",
  "key7": "4DQEC2sQphAppGTJcij2gHanUoKFq85DnAyc1k223TD1ffMhMqnxAvEavTiDZTwD47Y6tDuefJNzmGeNswafdTio",
  "key8": "5usfegULRhX78LG4zgvdLV1NGSzWoixF5t33wBQMHnUZmEv4dwzj7XSz73xNQ2ufpikiFW9SuxrwgcibtGUnj7WR",
  "key9": "2aUE5ndTxmJwZr9ddBwk8sfcgjEk3dgUa95zNimEUe8o25R6KaaJs6zUSKpWGm1jgLKh7QpFiKM7Y94Te1Udvocu",
  "key10": "4pjTGekTEYiNdGbaQ6sR6yXAFabQhNcoHeCZP4ufhg1YwMAsYLwz7to4D8xp2cPr4V5teYWvgELB5KKScSuQbJpV",
  "key11": "3FQnyuDbqFb3LiV7YTX6YtMywyF26SRNCskC42VGhqBB51HvERoe273ciq8Sv9FXZVJCsVLY2TkATLJ39sZDT5H1",
  "key12": "jTcmzfvEevJsHq7jSaD7i9Wn7r327yX3Z7D13UBKcZYJEW7Nuygz6HL4tVpK4PRF7jQmDkoX5mxMySUBAojEiJY",
  "key13": "Y1o8yTntgNwuG8Mm1ZVkUfLCtdc7d3fMhSCXR4oEFadzDwwZjp5q3GWNnwm2BRjaiL4X4bcj7iA3PkEKDSY6UzX",
  "key14": "3NnZAgsHHackv9CAbcnmb6yJsg4jkjaUUXJJAgqVRFyrWrLLFV5mw1iM84zZVRF9TVn48ocWBgDB2xSctwKCiPi6",
  "key15": "5bsSoUb4EVaiFoS5YS7rYLtjWUiYCkz5Gn9dtu5qkZpxsb9WAKKcp9uqHY8SJEmEWpLhZVJhwkxfqEjFqkTYGLNL",
  "key16": "SuC7VuyjcGHBZHACQSSzTtB3mrs2zcM14tPBiVvfxfPWgshN81xmA6LaPyncqCTEN48gLgByfZ55EMfNdkAxsMm",
  "key17": "nWasvtFdXBjhQozvfbhdLN8VyR1dWRAzBg2c5ecdkw66NWyn6Ehp181dEc6GBq9Qt3PAuVBzePvZywBcBG1Msq1",
  "key18": "34E8RDCFFPRNneNuVTB1jtUg7DtX1XaS8gUckeMK63AT5r6yrDqVSveqv6AtqpWJuoXsAoPHGTYYvqe7wZnucktm",
  "key19": "3QCo36ABJPyFvszCJV3DsVVFSBm5YhANNcCYVriwKpAF345dEinWQt2fQWFChFPN52hMuzypCWbacwseTUWXbaj9",
  "key20": "5Cb9WxwawAVxqqbXJnbh6SFezCU59bchgg582dghPJW89BdJ2XcaHU1Bv8hiFDriXtLPzDWibLUmPHUC2nLzULGD",
  "key21": "5iakzVVq9HPhm27fzCRyRo5MXvHyzfdmszLS8xiy9d4Rj4nRq4ehbMLHSitnqDVWcgwCqJexWP638HiCc8WxrYbP",
  "key22": "3BqkHw8pjPjL86Erj94AxTEfJpaPRv7isb2ysKuTyH8FRUWuC8xLBgTtpDC658xvRZLHKUVQvZjUg4TRdWL4Cmmf",
  "key23": "3VPcJwdRzSRvN9Kt1m2Bm8Ly4CC5svMhAdVa8x4EZCcnUU39Kx7SNz3Phg1dk3uZ4jSz9DC11Au255giXURBhY56",
  "key24": "4SRMSr4WeTssnUcRNc98mZ5WDxREakpyo31qs2gb5Qh6TbezRs4k9r4DcxLJVht9tSVRs9Cxbce4dXdJPgQ9wRDP",
  "key25": "mFZi9jBmJHWsmZrezReDUbA8j5RrXiJ4Aw19pZWY88EXkTvjeUTHj2KzSvyGYUZ764RtWEfvfgJAiMPdxYpfBco",
  "key26": "2smEhkFsYM9JjGA9TfqE7kcuMfyN5cqex8g3uHPMBDR4YnvExPsnhQKx2skD6aBqTGN1Wg7siJmDn5ziXmLhD1c1",
  "key27": "mMCdqKBB8JbmAfTTxfda3inygi6V1CTsRPTwbJ872WCecxQ4thghjhgG3xmuoN7ZwtveHbUcW3TbTca5g3Rc514",
  "key28": "5FRDYURgv5KQHLN4Vz4gHAd8gnFbjZXZ9uRpJZhLALCq99AR5Qs9nEDCq2A17NW1DGHYXAxD8wJHp7v6GFyMPLYK",
  "key29": "SSkBBcxf6hTTGRBnheBYw7CnNh8auh7yCY6RXdhhvs46XHZDhTYGj3JCHtmdUKZrs9ae4Bcu2RE9w72cHnZwCLo",
  "key30": "332WU3D6z673E4tmE1amqzof9Zp9p1u3bZ8ToxSjfkZY1JRkb5bMkfiBKHZSA2gUKt9v651sCD6zWPJmA2Sz5kwc",
  "key31": "o6NWgbthYu3savYroPP47unvtwY4GVTnAgik5jqZAodVweAkau7j1r3nsUEni8Mb9XWkpJVikb1s6ZirM7xpAg2",
  "key32": "51Yv5xcTuejvwgA82oKHoQsYEKvxNCmuTWqLFNjRYsVux9uZGpoybSoAGyGUYjny2ibtCwFad7AEGt5YppevZauD",
  "key33": "32BgQFJBsnwMLph7tLQSSX3swCsy9pb6FcTUaZWcCakeXqxkCcw8EwgPQQytKJpVdVVbZRzG2bTYAh3gBiZLcT3o",
  "key34": "37tcP8yeMXEaMQ87DZVLoJuiLi4WjWUmoz7Ukom9M3UE33wQH5J438bmHu4excMy8KL2GmTjKLX4P9eqCRZrgttd",
  "key35": "sYGtm9YVuspERoiwdkKVeHn6GP2rmVbvKajGiTGjQGSxjAxr3eZUT7UpwQSQSzuiqCyEDivRkhSTUiv2LLu3jkG",
  "key36": "3sQs4EWVTDpLoH6qtkuDjY2taejxchb9LSVBjKYvLHsx72x2DMerBCiTKN2k4iSoVZ9yJitRSz2B5K98M1XqYek5",
  "key37": "3FUJjpqQoKcoTUWtWPeDtEWFaveqFH6ND2LJS4YkCDddmxGHSNE94zJWhyojohStNdgyTuPEYwNkFJ71VHTVZeG1",
  "key38": "3pSFJ3swkH5ZqYfgYhjaifpGKUvr89bGeRuRxKbrDL4ud2vy2bnBRpzcKd4kqnaEdFnrupnUQG9v24e9oBAScBby",
  "key39": "2GaYw9QJamaMuML3dmjrTv8xwPcfHmq98WHYm4C2fJpjWvQh7sDjjzwwZH9PxMTLQqYTx64A33ZsyPGMoWfkCTNL",
  "key40": "2T4FwMZN2KLsQLUfdExZwXWNwsxaksKyY2Xb5E15dkpXEX7qrLmdinqoDouAGsu56s4FAd1teKPfUk52QkM4bCXQ",
  "key41": "44Hc7GF1nnB2BcqqWsENWtGPfJHbo6NCdXKs1cFCocCLG4ozkEUxAJYBzSp1Vs8HL2D5tZhg2RAYwf3AvwEQqTXi",
  "key42": "3vSnRjmbGkNWx4GV3hkj2Eokpj2dhB2RmQGHLi3JDxwGxaeBsZKW5FWnaw5v8sF6gDneaWYuoqQaNJRJJiuP7mmX",
  "key43": "59L29nmFhx5xw8G8vtZbhZym26Cw5Fz4NuFecZiEVAoo48qXmW8fquCphPs6pxXnvNAcwXNJqD88Br6fLE5rdBUx",
  "key44": "5KpGQgRgiqHoQoKGYgRJPzoqLybgsLN7fgW3JNBSfTLngd1it4SYJF6GH7xKfjhutA2kH1zMj1sjGgBzrnCgvyRQ"
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
