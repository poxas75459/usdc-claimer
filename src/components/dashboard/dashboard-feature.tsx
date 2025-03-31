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
    "3nQiAQ5CmUsiLVTEvSpSTKJHghpfH4jxRdNTU4Y24ucGwD9pwkPHEDsAkBverX8Xh9HyoiFNw9mZqgAo2xtokSFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p4gMtDCtnAx36Toj2dXRzPqt7pWirYZdSTd53oKYK9BddiExPs1v5WW1ZhneGBWWHz7YSA5pjFzdxHENxu1mPF5",
  "key1": "2hhL6HhhCiRdv4p5g51EPSKDb8htaFhQ3EYLb5cQ1g6XbTd5oES3wNbsG8YohmC8TKLJxZit3gCgCFDHfYyGrHub",
  "key2": "2dShwjrFdhJgZ7aJGhyWvww8kCJszLmXnmDo7Phb3t5WfnZgqWtaSsWaAhUPEAFfoAS11TAT4jQ8TATaUMABS4yq",
  "key3": "3hfKnph8dANFTReX3XUyuTAxeyjqqomm7n5NKWNP713Y9ytkBCLV1Aax1MiDgJoUiSpga9MQ3CZpYXFgRWfhkTA5",
  "key4": "648Y8npW1DgsLxkwhs2YvrLCsRXazop54TuUtfhNy5wQyEeJ2GUA2Yo4qkBkdBFLTxEo8qxJafbbNyrBpu6V2Pdd",
  "key5": "3Q9Waye9f8MA5MPKGnRdd85E1TRPzGEJRdtDmjBftWVfYM1dcsDcuNrXz7dcVevP8agznJnMWPyXNvTNwhsiCc4q",
  "key6": "26wHp8qBZHhFQxFu2TKjdxD9W8xryTbPiop6B2iZRTmFSssrhafriVcUJHHAhSZnxYK9RAEjX76SRU5Bhm2ZGqyW",
  "key7": "zRKPSf9exaGwJCFWHrJKGWsbZgbG6zS5kK3uUfmzAoxRchE1Y1P1RqAT2Yj781mLoQtdoYVaZJ3TFVknWPvXnFS",
  "key8": "vofjjUd69bWnuHK1AMFUUKcJoCp5fVzeouHh8kE2QBRpw21Y1cy57MvSxsVvee8EAL5BoxhbnZ1LyWEhvhrqX1U",
  "key9": "3UJHgY2hbjpTbttc9uXUBrKx1kCR1ZQWZWnED4bbJvTQxBthLi9MPAAWQibu72QN9YizwG9gPDY5ELUx6ckAD3hb",
  "key10": "25Qg6sR3sj6D6TJaxadUWowV8LJSEhwrBeQSRf2az9hjarPwwcu6FAfryTZ6QK4bwYDQUq7FmFKMHeyBKpcaqmMn",
  "key11": "cbhF1NuGbrHzVb1CNF3wt7ykRoXL1DVr55Pu6mmbK9sawRdFWYyx5snjjCj4gcyUHgiULijPxa7uvcEfkJfWnKs",
  "key12": "2bmFwYrhcvas8k7oLKh2mwnTHL2Gsrdcnisutk3SUJURDdg8CsXKoCoJVTeg2KvUuqQXaMFZDimF4ita194gewn2",
  "key13": "5g3PuMMpPemddH2W9a1TMygNUe9W9yKfcP6jXgo77yGdvGcbhGkpbi6uG9Nbj3sQz7D8oYEdrSozTByX6o73JeqP",
  "key14": "5q4RQ11UAnCByeTqmXYDBqV3CAyeaYFE9qNjyHEgMEHNT9s83oSGqVXNNXdXTNkP1E5JzgiP7d6uMP4T8HwaNYZT",
  "key15": "2r26UaKxbFVeBsbwue9QXsHmfRbuV86jWzsBPsiycVL4hbi8978BAJcqy4QuDYvZ18ciqnGQhyiSWLMpMuor9z5W",
  "key16": "5XUv5DovicyxjMH2KfjiXFraw8b5uSvfT7XNiSm7GuFaMMoDgbcBsFNhDog49WEVTDNQqtSEu6g4wjBSpqsFN6N1",
  "key17": "Nz8R5dRGR1RrDSX1M3mmhrZQ1GC2DEz64osYF7HjxpVsoDCfEne7oNL6xEunUUkYDKVRSD2GMmSUVpA83WsuU4W",
  "key18": "5NU128LP5FZoJpN7Wcg36sLrzBCNEfop4gsFb54NVoMBxAkV5jnDidqGV5YWEhrQ25iLAYhxbDcgW9MdnEnFd1V4",
  "key19": "4xWjHNUv8TvWyCayF2Xfy4Ue5kkFe8X6YMA9Y1bgUp5AJHMGQQccy52zTyjJv2jBRUe1xXhjZckJp4P5HnxU1xvR",
  "key20": "3ABZoTgAguNVAuE8uabZyXm5JRJpvyQbSWXPMGUAt6tvZo64KuS4ug8eK4eYVugCNhbrb4VVjYznLhTzd7dBnkdM",
  "key21": "EYxDzLmwiAnCB8SfWsRqEvHq3GPkVPmvsK2f3yNWCsP3trQPXzQHkJkzVYK7DwNSi4zg635JiRNnJkD9qA4ZFnQ",
  "key22": "5smAZHS7BiQ8JZAFoeh7SynTNUSr4B4isrF5TUu1sqnB4eGa3oEebvk3fQkoVhjaanhTKR5hAU7hhXcZQV3BTsGN",
  "key23": "5RdfUMR7g9oMAyUsHYvJXcHQD1Qacw9NQHuMvrvWjMtmzho7hDPA85XYnZ2F2dMHWojgHnnpbEPkuxyM1HTUWhi9",
  "key24": "4r8j3oBiGVZBCrCA1p6YC63VATpvaSyJhyvowVEwQcmdSg2PCtGsx35JKFQHQ4hTKbRTgqCSdFb17ca8wgJ6H6qE",
  "key25": "5dUTikhAycQQA2yFX1jCjrYiuBQmBDSHXXHUWps94add3CSW9SeBScJBaEzE9wyzWycCTtyun6eAcZEvVfjUUJLT",
  "key26": "2rFBmCA2bDRFHHfP8GzTLSWCPupBW9sqHf4YfG87Br8VnWXuuuwXed8xnvxeduWDSz3nxbVRJx9nXqSuZuNXXXzV",
  "key27": "61ga3HyDsVVFhaxfXK6LY81di8trc2etKTd9A3tb4bxAvZbPasGKQLe2cZZbPATY6dKm83xFPZgnteiCnwiaAuNA",
  "key28": "RtGvWXFtnTk7qYQr5omt4VM2jkS2Rvf72jWGcBAFQXgwYtzCAAJ7cyVEuj1sRjzU8ApFLgqnUxD2bvwEhGGYt4q",
  "key29": "AkqANuwvpncwKc2hhAHUP7dezPDceXjrGsX2KJZJBPVxe6sJ8wVkqCMkTm8uMh13uBQEjLKwLE5zSdrw8NS7wbS",
  "key30": "4LLHmySjsPEigxgPbmTDSEWBZFr3v6RUZ7pJeTN3vhvU26boq8ivJEj2rVDVxx6ZLSbqYk14hvQVKeYYfkTxKosw",
  "key31": "x8xZwPMkKpPHx4tEeosbf4GRAs3VpixdME3gWXBrpWKiTKmRNyAWt4e6knJDGJZRUhqHyJDCswyVv37TVigUidk",
  "key32": "4vQULGHPmRrdQpRsr9z1JJ3SgCfQp5a7wTY8rk6JYYPdj5F3tVbAzjsSu9EczHsqrypoeg4sCBAtRHm3YTQp6xmb",
  "key33": "65dcJ4cVoMsvwYanc8VhKoxmNAa1s7QEZVsecsBPaQgjso7tAr67kYMy2qyGaKekZwijnHiDn6gry8UmyMUs6bu4",
  "key34": "3pGxtJ4kem9yGpvmuRy7Psc63XnccMZsdZuP8SBfP6LFbnus3bq6NwGH2USyrbV1V6GNRcxBjNDCZfbtnXzv3jiH",
  "key35": "i3YPsiBjbHkjV6kn7F511ERL9o3v4Txdwf2SyhgMtFfSqgG6QgmZYtzrVevbdgsKMwU24RxfruEonz6Wss2JWoa",
  "key36": "57TqW6sMBAn4Af547pp6MwBwKaVDErz63nYMzei8CGcadZTrASnbT8H4B5Wf7ssLQRD8smG1LT2i77EriAzA9LUy",
  "key37": "yK8g6eiQRuGDZi1TE69eKuNZMeYwGKE8zYXYFThiN6yK9qNS5N3Kyv87xtc1z5wzDi4C81fTfmTStadaZWidZjk"
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
