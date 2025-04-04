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
    "5Trd6XLbEF8o4L4mDEM68WkjWstegaJ1SQj8kL17HigzvyR69mrnd6QNMLSz49U9UnzUMeVhV8BRCTc7m5HMHHTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vr6RrP1Qi3MXg3tc9gcwnLxiQbDBB3twpGuYYDZvBsHSNUAjPEWFcR6XDpxg4AqTvmwm9HUq8EvRN6k3W3SMjFU",
  "key1": "5VfD2WR4df37bs34q31ocvz1Kjdox6phyZoNFvJghH542Vdc9FjsWuT9f3P1C41hzVMMtWLjNCDQUdj9XJdjKb8x",
  "key2": "3rDrXS8koVE7ZALDFCMb3UEq9FUtHfYVRQaJ6LYrTLa5nmAqciJANRH4ZiZ2oMFf3yPLQpbdAQ8up8rMnLtFhyzU",
  "key3": "3KeYZjTEueA6XZiZAmdAb1rHyRUwQBRtXGszw9tPbMueRf943haNeBrwyhaqzbd4dFR82cwaTXJozMo9WCYQ7Zfp",
  "key4": "3jQBULv5h6tEUmf3QEU65NXvfyGWwbQ3U4T9QdyhiinLTyPMhyKdVUAWP6yx6PbQpbBDRuFTqso7LW83aNwVQGiG",
  "key5": "2LSSHaC7dH7ZPdjdD8ANQajmW2jQfSPHd9Djpk8FGs2TrCryxtPZUMmm9C5MUXnUCtXCXiXpD52E8g62wjx3d8FU",
  "key6": "2sBEjajFHWb3Qvj8MSTidezjjdzeMcfZASrpuXy3yR9VGNhSFPz69vj3JH5aZKBRWbaY1NT2gAfH2xa3aDxJynij",
  "key7": "64ZFfLcxYwbZQR2ksv9HJj6iDUt4C6KkGoo6rvw3DtPLZqZzKssWm95SCFMt49GijSkW4WtfqLpe2TdRgWgv8i91",
  "key8": "ZwgqQ6CFKyfqyjaeQfUqHBHP7hSpLmMVYsP1vYpkbL36gatKmGzhLzpY8prpmm1qKVZ98AFyDngfhgqNp7WDDE3",
  "key9": "mLTrT3YjMWtjP3XPyfq5UbtQYaZ7PYbKDGp2gSvyqCmUsv82549U8NhGeifevsCxJHsLbts2pg6ENW9EQWWZiS4",
  "key10": "3SJCWz7tCNPDemUefTM7QqtJv3GBKiyhHQjEF5icUSXByx1vV2htsV92nar95cwXeF6enXuwLL66PsWd3xaWEpAd",
  "key11": "YMHWr8umYQtRH675sHcJZxeo6X11NNthmxuir26DKgKPzrdXJrJY91gVa3GjFBb8WQvEfbHT8CXTaYcDUeSiGyj",
  "key12": "61mqbKC6F9nZBHaoxQexyYsMdMTqSvfkSSkqxGMFetZjxgexbx3zj8mWFP9c3xwNCqv8EdapaCDBqK8fBhjQpnk9",
  "key13": "2G7ao8GkpW4R4R2nYZ1Jd6Um2sUtCruvUEZ9tcJNk8tJx9VSBDsaskGc86rjzjyAeU4zgM8JsCP4wEehR261Re8j",
  "key14": "3qPaB8HGKz27TdgrfyVMMqP7MKQdd1UpopHm1nzzkrmSi1wEt7LknPLixHo4qqRWEGg5v9RsSbWc9Pw4mwq1hA9u",
  "key15": "4DUM3d4VVLtDCsQBN3TmnHQwaCuJn593iykb3rAJt9kudKnCrfqRVzbdm8S4Z6RpX3AJk2RuA9pR5vddA2yrrDvC",
  "key16": "2qJAaqWA2f9AptTTkqiWK3hGc9SvTSkmrfFm1tho1hqQeYZN88zqCvwtYm8uNcCncdDNJQLHxEJwYmDPMSJd5erT",
  "key17": "4UqqLPJG6sYFB3MCBmCJ6EJuUkN1db952nH7XbqV3x31U6PeQxyfyshgdWfdQGRWQj1PFGmnL8t3nzJGxCfb3Eay",
  "key18": "owP935sC9FMFxd9H68DzN4Fiuq7VDToC4F7y5qS9pwMgtvuVCQE7zGJhyeHeEf9zeB1oqQk9dehHJ3V9KyMYghB",
  "key19": "3ewRCCSaRBM7gxgwyT3RYnwFr4V3qXLZhvHE6noMGbi6b7YtqhoYmMVY1zxx6znjw3YNd2v8ctBy3MW5oaJD8rXj",
  "key20": "NQ5iSJBsZZVgSuFetr1nVDWsiSZRsfxCFZhw4GntXjn3HVQDk2aj2aEuaHS2spZ4k7P8ud7q6x4xurgzt8h6A2h",
  "key21": "4AD9Sy2r9VeFBJVigJ6G4wfTSKgjxLxL1axFUob4Jh7dwL4esa9TcTqSFSYFnoEuBXYGsiXswhNjperMS1x2ZpSA",
  "key22": "4SkDSksHKanfEodiLMhpL2pbJBmjD73C6DfF95bf2rsEJCZdsHiGauToB5dC1a3Sc7oooomWz7kb66J69f3j7tBx",
  "key23": "5xaqpecMcUwvm995pCYQALdgxYNFm8emM36xKzFUQ3PtYcSZVn6hyEX48588B3Qt7HnGkpZVzSux7qq9ANaR4LnF",
  "key24": "2gYRXniYQDvkPQbCjxpLToCZ5Gs5Ru4R4voABJ7e98GESDg4SPVsNG6aGphN8VqMxdLshn1DNysrn6TDQNXMGpj1",
  "key25": "5r58gchTpnMccZmP37e97TXZcPTFVMUhRiFLyuLtteq75N3eEeZtH13QArdcpJ8oz6B6C8iAuwDULoWR9DHhbjcG",
  "key26": "32WX5WmYJf2RXM2NtU8e5xmGjk61pK5D5ChkCjoy4D5CQvqk8EmZfrnuvEfFtHNUeKvPYZcPWx85ndszKYP1hr83",
  "key27": "4qtKAs6opAqCFFkprJFmP4BhdsSUZox5LoLdyWkbmmKtFziuearogqFDtZRFVLcrmoFkrTxV24DCTx6DcDkXLQHy",
  "key28": "4RLZT9qGegSQcfoAyAMffqFmXRc6nhkgwn9EAn1cv4HGnaAdHEciM1ZzG2sPf4MTGhDonHu9LN3PaUVxN6YQcEQw",
  "key29": "4jwvUeQmTNkHng4fNSCiw2W1XETu3yxhu1UCQavnQt2WUsGu1956Lc6zdkrYLLUL51XpZDDMa6cJfYdn7RL8dbqr",
  "key30": "5yLMw7BLZvNqMKSW8tbr7AhCRnKLH3QFWMNe2fzuM35g9QzqAxFzCUEBqS1s5Rh3qRrtcfF5PWBmP21iSHs258tH",
  "key31": "5hcWtGbMgQAdivzgpmRRh6eUgfHUrxpKhpp8DdiENYN1WyfErLXegb5irHu32iTH5BW1UpzhFYQNHZKSUMvxM6tA",
  "key32": "2iaSD9pGdgYy4W3EuJwinfeYMKikWSbn9pKmr8gZuHic9Ludae6eMKZwfdiijLBF1aBpGgc9mqD4twnK3EsXzSh4",
  "key33": "58J9NHHzUS7qgYtLxabLs8U9cRRorF77edVcSJsuYeQSN64zJ26seXMHt1Bu2Z33g9r87HxxkDXGVJzteWTBKU3z",
  "key34": "46heZm9hkLoHfZ6K11B1DNTK4CHMKygwXkfXbjny4ihBCXZscFEdzvAhxtWcNNUtupK9btvU4FhdTNYjHgaAKE7W",
  "key35": "3RtKtB6UC8wy9GuVh4VAdVHarn6fVgVZW2Rw6mTEBbNLn78LymcZ7jNS5Q4U85dtoRytK824GQnFvgYsuJUVvGUJ",
  "key36": "jyYkXb5yFZNh6PonFbwBjWFZi9d1wEUkeAiUTvJcc17QfPBAasj4qVdke3UwJseNE4i38wJPGdAsvccTojMCu9G",
  "key37": "maCAdD9Whk3w8MiDaXtemzJwL7ZBSejgWxoe8Ek49gU39x81iC6KPbrjnaQgMhKNBxpNhrb1x18CdR4gskYu9i3",
  "key38": "5zbTr1yAeVYRHy5EyvM28oJtZWi7nU5u2qbJSdjRPfp9uq6EJqcdNfAKL7i2Gqn4KkxsRJ6GezwMzzDaHQSUuBxq",
  "key39": "2WpiPbq4AHQM2pkKoNtj1ryZe8WDXaEhVGoUAgjejkzwRomd2td9n4eMvXgiBCXZnLUKbwPKSV7W4hnZdZ23KH69",
  "key40": "4YEtnWL7RxDfa6xkTxLoSX4JcpxkqgdHqxCuWV1wg6xNMbj6psbGaoSeSza5wB2HRGshZvfk7VBbwtZJp9Z3mqSb",
  "key41": "4dtH1f6USYC2u5yXtEipdcxydEMUSYNQ4nq85qVNL1YYjUGi1BDVRuP9kuksbh3kEf5EJRfhbL7BQA4tDF1LSjMc",
  "key42": "5Dh4N7X5teph4RJ53S4cdGdzKifMYxwXLjCf9nr6kWn4rPY4FPPFgqTfACdathdichb38FZRrhgCK1xg5QEYuKf",
  "key43": "4hb1wncvo2eRDLYRxV2zt9YQpjdnsQfDtKVEuCeapDdLLseMDmSDMy3gadmEp5uRJ9Fqo84JxZS1jeu13LwFuJPC"
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
