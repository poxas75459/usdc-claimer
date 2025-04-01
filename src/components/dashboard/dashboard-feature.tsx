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
    "KXXSQzPiXLpZLjbGrv8sKpVxeRTj5VnQU8Gka8hDsGHU2Q7qF6H12wBfRT8QzTFaohx4Lmzh72YKrw8RJDGa27K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TvrxsokSWWmb6iXuMhFwqY8BkVLQbPFhBvHuQbbxxnMwwiHpvdzPgAMXP4rQjpxs7W3hbUrs2UgsXyimFtmqBmV",
  "key1": "4gG7kkAgwo9pRfaXj9EEPEMr3m1HFAzuszMcWstsvypW8CryfxouKet1VBhuSsB5KVXdyJmpYHLA5PzJYY5mCg97",
  "key2": "RRxAJRtHoEpmDrgXSB7w6kCdMwAsStvMnWsyoGsphW3yacBQFp1cTxi74xBdhakUdMc8R2QNoPaTVFD2xYDtkAS",
  "key3": "255ug5xAy3zzcFJUrdVkeCAUNG5CsR7Wcj6jv8MSTALwFFASTNngjb6Ex5CHLt7RgvAZ9aEV48dmpVtsJWQU2dYN",
  "key4": "5xDZGMejUN2XvHexHZLNbvm6m8RUYYLp7KviMVsVjNgciZAUBEaTbsqZQcZyzFNJENFoAbbAp2dyCTU12uZB6Y9A",
  "key5": "3wpH38gnYD6rk3CZtoyK48Q3pHCMZAroZH19ZDa7YWT8yikHuX5qBEMdq5daKCizG5ScuhfgVNyE9HECF9ScGLxP",
  "key6": "4UssvNzkd1u3JJ1WhbHGq5ttYtmkRtuZVEYXGSwhUiE6orq1BMAnpYN7WpiTSzMfUHYgE7oMeTio5PEXJwa9o6hX",
  "key7": "5GaE8fC4BavdsxMEQ6MzJggHTaQ6WbZU8YbzabfLAFKNAfpSxudrWA9GaAuojH7qWMjuzytifQd7Sw7ZS3nuECtw",
  "key8": "z4m98JHbdYFDAsN2tPP2HTSDKqFL7ibFAa1jNC9LvdN5YrtV7J1gwRiqQZVg8gwU5vAMXKvtNaw1YDRVs4eytP9",
  "key9": "2HjKiVwAZPyZiPSrH357jrcuCwKRcn8xZYu6w1DV18Ji5JxShcHcamNTPr47mhS3NBFcWhGTnCcL3XtpLQskuQQy",
  "key10": "EL86uJZf1h6vj7XxmUXWFSFBJkdH7rFoz2SfeJRbV5NiZe2pY1tQaHQEHx3n6TFQUMhkkQWF1fBgvS6gCtJ54MA",
  "key11": "4YurXFDKgdeVLuCNRQCXfm9zt8cz43qA9WBYsxUEQRpqhY1RRWybZYDciEg4vdWWYWrgw2C7VPqaK4U9CmXJDwiZ",
  "key12": "3scvdN5EqPGSKyjX96os97w8bSauTNU4sNToP3RyiSuTMU8GPspBnrNxkg51PE7oBkVyzFSwZ4cFgFtLpyPasSdL",
  "key13": "2Ss1jFiWk34VfzhTTUs1AXVHMfcveWJ7ryMf1AHQsCGMDsqdFWDGcgDi5Nnhw1qNPodJnoyLEphsPNZ1vvyoHUEZ",
  "key14": "2NVGHxuBpnoy6dNcvxHV2xL2Pzwtk4wuVmQhHf4eUNHB3Qkhv8cQmYwp4P8eM2yjSQqQVk9UEAFnTxi4bhscyqW6",
  "key15": "5KrQaoTiQssHkNrcQ46Vc5uDfGsznyuebVq4FGt3sCi3dZtyZUkqcHrbXFWHftajNtjcBSRn3ruRHt6GYvrWf2Ry",
  "key16": "3uR6nswkCPCc9rFHA8q5DjwYYNBwtBAWEAr2TbdBYiosxRBDWPzxBShFNLZnfDUPMehsKSpGwFUcMAEo61UCgbxi",
  "key17": "5uWfTGdZH7fyEeMrKN3M1XTNPokhjLcizdqUrNHvf2iT8sbwGpZzfBRagnrdmnTu2QSVY53mmmFbUVdp4Co12q4",
  "key18": "5gnRTCxesncQ1PwVbQ1YthrUitGqPc8xP5bubf5YqJJzYNKctxJ2Tvr9ciTM5FGGJjWCFCurLCcgtX4bfDJ2YqqT",
  "key19": "5k4JMFEQFV7XMz8wfLKC3si1vDYe1BnnwsArDvQqR1nPnESyBbAC2URd1Yw251bH2WpkkFjPVP6Mnoy63eTJnxrD",
  "key20": "upvXWrfQ9SsmMPLWeMEttyhenGxPkkCdKMpHiLKMGQVHogqEQAjxfUmr3DTLFS3zm4nbJRkVuZArbHJ5MV4DHgW",
  "key21": "3LEnsSs4jmpCdodGK8fvzdDZAcGtE5js46RonUzmoWivxQLy9kFfUrypkAuzERSzXxzZTVDCVhudioSokWV8SDTt",
  "key22": "2neLX6TjoNG8NRUZgXqBFbLrY7GZkU1fiw2KVEupVjaETH3Z3BmfQvZdYqdTipLySiyZbefK7TQFbT6x9A3R6GSD",
  "key23": "2p6qLYWMdb4S6t58qE7ATtciK7SdoU3SvoQPyR8DDYdqZxVLzF9j25xH2swypK44v8fzRpb4HWJPRN3FVxdsAHN6",
  "key24": "64oXjhRHLFAZTEqYNsFERESvmZCUxLWycUMRhaUBAFMXYV9Xm3Z2Usjg8EV1cPGctT3iRZPV9BxN4M8iDMcLAHHH",
  "key25": "5mzmmWfpa6tAaRv8jDJX4HRGSbgkkBk8RMvmWLQ5T5kvF2Wsfpit8Hdmpf12iAuJLiW48Zq5TAqjY2Nu8vb6CrCw",
  "key26": "k18YgZwHCZErMJ3X1FuwSegTd7LGqiH6ozs9MkywhEoQfjKYKyDfBgN2Msjq37DvWPQ5N6DB7tWXxAnsFT5VxZc",
  "key27": "5RYdixqtAwRDQm6zECHLkvKgqQKkB7euNDb5yE1DeCNDZqQCwnEMnz4BrUqpjqipRsV2Cn7qKRXn7qHtA31gP4TE",
  "key28": "3XrqcJ3fCjWQ3Z7gN5vEF2Y4XqpqcEBUrcJn1MpjrwysLWgcQnzBUXKfxcJ1LCeR2Ud4pBgkEgJv81h4U7KiZDGr",
  "key29": "5RnBzcBmBe4JptrtxmZ6fTs1iTrK9o5jv36v1MWPmHn627scuYEsD6BqdByvA6sep6YumiTG4kvPH6pUPDjTvo1j",
  "key30": "dEj1GBUKCen1MKkuMHEgjzKfVFvQyrto79oBhEJC1KV9jag7mnKkhpAZZLadUrGwUf9Rn3xH8tc4HVwLZjnXVpT",
  "key31": "2HzRohCjJdJcq1LX6QeB4XTJwEX8R3x1J2x5jFVrxKQytPuBjNbt65523yV6S3iwebjhxT6fqjfPEK3jY3UEveFh",
  "key32": "XnaguAEFdpz4zdgTo9bdCUBbCensDb9UwcCZAkftU1hczfpt5RnLM1tusrhQtmXpQhZgGiqHnYC2FKNmU3LWNVK",
  "key33": "5xhNW9oZqMGFjc3iEpfQt5eYHANp8FZiDyHAbXmxN8KSN6dx5Ef91PhcNj7VxdtuQGJ3HtBmXpYHcTAkRdtM8fFv",
  "key34": "5Lpmq9ZpsmrMadZfCvAPACnAwLd3qBxdmdMszBGXVuYPwaP2FmfpVPxww9coKZWfT1Yjf3tNdBa3aHfjH4Grtprx",
  "key35": "3YARQGjLcm4R9wT3u3hjE85LV2tMoekPoMoPSECBEdCZciFfW21Ze7i4GoUSjRwDxF42fS57WGnWWckETVfYufTB",
  "key36": "2mQ2ATwq9yuMccxouxame1En5TjvvAPb52UiZu7wX8xjvGrvDBbB34HjeuE6wqfP6RBEerYnwiJpopwtp2En1FCe",
  "key37": "49orxFn4UKjAsvB3kHDfxaqLEXnUEjHZ7TXXXxtvo2fwzF6BjHrV2mqurNgVM9NiKXrBUjW118EtnUcmdjTQNDps",
  "key38": "2hKn8XiWnBCZrYFgjJWRzVRqsB6wtNBGo65Jq8weeDaAAPcRTeK96eT6gYgEkMzGXkPZFuF28tCnWXopSFNNmaw4",
  "key39": "42okFqJPippmTcDtnhDSw2Ye3uo2hxF4rASHqGg1iYhMoZmoTpmveYpe1y2AHwS5RSc1xeG5WkHfAuiwyC4jqykT",
  "key40": "4sdNg4gtGnDc8JmJGXCR8tM3svpZD42Cyz6cWxbvh8thtitsyREm8MEzt4VmkQhJpCZb6TxQBoRxTwQ3pEcQCMSf",
  "key41": "5h8cvmq83oTADRo5pAM2pGuSpN8gJvroeBB4fzjbxFkELwChYHQ8Ua6AKz9rSsjQ2MKnt6RAbFfp8DAXQsGxxdLZ",
  "key42": "4Xjrdokfixp1rEmyBb7HAoM7m6jSxXqmcNZDZtNHpGaPUbf7ksorAsjatXs7YSpRd49zmhzg3yhZKHn6qHn1fVGT",
  "key43": "mSP8pu2a99K1hxS5VfDjgih8NSyAtby1DiXKVaTBR4hEvUT7XsLAQKN6Td5tFuCFjs5gM88CBurzvPkMyG83YHH",
  "key44": "3GJe1ex73sHovvjs4iP6MH5t7DAXpJUE8YqcuNbsb1D5N4qxzjWtqLe1Wav3uKjBzgC19VoEA34mk6c6SM3JXpwQ",
  "key45": "5vZKatwAYmNnyoVAeFUVEcb5exEYR2VyrNB4hasXka1yVtq6uo8EvURDUUcvX6gPW5zeaAtifn7HHnnwsYtf8U9u",
  "key46": "5FKyW2bq4YtYCi1jd1j8n19yoAzEtY3oCRSrraHAboBwBaYsixx1XZhJSBJjq4zL6zdLHbo5LcBA6XFMLowbyodQ",
  "key47": "yLyP5XtmsWAEgu9vsA9pGsxate9WkuusjARUEAyfkwTabvh6qz79oLPdCWBk4JvSgA3YETsb3a71pp5eH8cmttr",
  "key48": "2Cw3nAc2BEZJB7juMhhKvHEqEae6y8Po4XVFvKhGKXKN9haaHEX4zKeVT1yeUnvx9KKeArNjNNhD2Go1dY76n3kN"
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
