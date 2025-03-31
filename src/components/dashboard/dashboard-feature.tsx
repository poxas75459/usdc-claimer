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
    "562CJobb6FfcHvN3Q9tiFXfUnFsQ9tmKdN7kYws5PYeHzKTthcn6Q6wUnFHrk5boSwXDCPDMtggVrJqKGEiDuiF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kSjMydtio8RxP3yC9Lqun8ZZCKUYfERweTsYUzqvBoxENdBCHZJitmyhkthHPkywJFaNGcWXQUF5ACXGMfErXxZ",
  "key1": "5gpsVJ4uV8rSoizZn4v3m4wVvs1DrP2c46R2EnnZCsQwcLbbXa7xrB2j7wtMarPBgcz31vLJgTQMMbcHe9wutHzD",
  "key2": "2iejLa5gM9PG5v52gwEJYRzmXm32FgcQZ5KieXR44wjxutajJhjErihTuQhjC5ovAuxLE4221g6n5irKNZKyQYtq",
  "key3": "2rmQPtpEQWExS9Y9cHCa3Tp1Sur52xZycMZiQw2rLTp5MeuhyDKrSGH9u6XP6jAtmPyADFC4756LcWppxDpdMM5S",
  "key4": "24wu2wB1QHakNBBiGHvqWfDT79bvXzoBp1yt8HAKPLkXMon7jyCpL2rD8Z6T2N7XT5SvzczkZE33fykmQdyuyEae",
  "key5": "J9z8zpi7Rs3wYUvzSdaZ6brUQ31ranfpxgthNHkvUCuHtvEqKuKRtWfPiY9nTUMfNSBboacFnbW4WZhvxUzz8Dj",
  "key6": "2AraUcueV7ugLLUDuzrr2rvg4T43wqKxHAoPvC2Sxdq2EQzxTvwNcCzyyHG34xqdAdBiVuoHdf6hzNXp74RMTZfK",
  "key7": "41gGit9MsN7LcHmV8Mt7WKvJX21ga9WoytsfduHZaoFxEHqF6wBdeLikLUA7cCBJrStkTgbYYGr5AdNWBsaajHhs",
  "key8": "4QUu4zkS47VTRNnC9TTu4ZnKZwDa7hEHT9xFBxBLwo1W45AvPEhnfptdEv6vZkDzyRBNjpsy93MfmfCni5qLn8ib",
  "key9": "3uxXbKwCEDxYMXLdU5gYFckgMDdwWNAEXwBH1vCMUP8EGNhvrxyQ51nEuV623oGdx1AwhAvNnnKHZsmKnk3Dq81R",
  "key10": "5hfFmJyQ2GkvaRazWhXLPADoYe1JetJLjyaz1XpjJ1neZZYoW2N7xGKjRgaJ65Vwz8PwCW1cgUFXLPtU3V7Lviib",
  "key11": "jN1y2PZKhH8YyJzYX2i9YhGnYqfDUwmSy4go8gLdSptPJisigHDmMGGcqMrdYDVUpkAMWnoUU5txHf9ooc4Ac2r",
  "key12": "4pxzh5WreetbgPPp7WZzoJRRxrpW49PqnWVCxdBcdZ2aB9ApxQjRBDpVyRsZkLYK91GtqsasN6yKv549rgL8ycub",
  "key13": "2bHhZiy35aSLWuoQrkVPd6w6qB6CTkYWs27zVuakvX7VtTXCWmjpruWdthbwQ6Rn1HZdnHefpyNdQxhR6Q3dDACy",
  "key14": "2uS6ivS9MWex9kXqL4zkoB1Lb7Jbrsyu9y3zJYfNZaiw2xPRnefs2oNeNgHJByUYhafCJqdNMYG5GErxyNf95zNV",
  "key15": "2Bf1fmp1PXjbzUz2YxuXSMfz19exsGhEeHJc4U8yfFerUPqP8QPkas7fYj9MUeo38j9HB4Sa4vceE1qSHwBYgYPZ",
  "key16": "aftzAhGPHMLEvE3XsM98tfw9s9aB44YcDrLqNXhxMR3yRLDk518fJaWaRsGFgH3BcPD6nk19ATTQ8BRBaaUW6hA",
  "key17": "4AVM9FRR5SJxSNpg7dBipjAgdwWPktg13XPfTFj27rU4dXXSDNwnN47WSHNyxcZixQnohKKWsYKaA8pAgdCaFbK2",
  "key18": "46X9qo6YWoH9G1fwcuwWXCurheUmgJDzWmweLHZQo9EDc2GtLGcQ2nXmhvjwPeKRYU9rWVtBy3stP55GYRp6MnyV",
  "key19": "2dCDpQr9ycDRGZbGPAcaDgK1JGF7ZvBdXXqBQkySvSYb5zb8ZhB3FCuoFFQYCW2LRBK9e8LGBSEzWUnNruvicgs4",
  "key20": "4wD3XXnXwLr3QNvpiH9T3XWawe992e6GVD3YnqTrVQkfbS4LhZxA9TnaZfy7BGrDHvcgZj3NxGx6xUTAMdMyEVsk",
  "key21": "23A6asiCs6mpdpMdX8En96dginvjg8acDJqZm2Wn8Rxuwb6UzM7J94xFEFepd4EyFgSqi5PqRTw37E8nJPftWzSu",
  "key22": "5b4ozMXbbLbvCoGsHXhh6R7VTiTJTtYfwEGE123EVJwuTGZuM7Bk7U33gXgZwJ823SgwPUJsRWCNZSoLYzG4HK4h",
  "key23": "4qVtkMKSWyRKoaUiafgFVAP9KKK8w28Xt5FQRBHyKE3dVCocXm8PCQVUWFXwmNso6dbfNgvHqFTwSdBhi4ssunRy",
  "key24": "3E6n2EtEmKevHns1vvYrqPxvKPKfemKocFkEYPoW8r9QSspeaxPpVxemEYEeb5coQRBksfeca5hVzkaBMNsMs3de",
  "key25": "2R69Q8Auxxc1C1BqsWy7PSQRzzqnFhbGgsqXeePHXxRhZmyXpBeXoTscZsrXor3aCMjw12mZSoKLHD2KRn8vqLK4",
  "key26": "29SNNKtgz5Z1BDxPi69V4sLFyuLuY4sjfw8Ky8f59uw2ETdWY2u4gTZn8LNAsguZYVtu2arKexD5Li4364pGk54r",
  "key27": "23ubvmBa5Pi87Hj62kPmxTXWXGSHK8e7fJSsSTq6JZsKFDzvUSD2bvr1hinrySPuUC8Dhfxvh39mdSTA9dTuhKK9",
  "key28": "4N4S489jTZvWMw2xEQQXBPVusxzG4fUtUUyrUYtZkztVxehrKydVw8zdxQdLyezNdVH7q3BrF1jgNiSZxJot6Rk2",
  "key29": "2xXoUWnUbkrrE4kPshpmzvgv24Hv6B2mzBzJt8d81FgQMcJcnF79RLKrPbWavPe7vhDtCNSRcTGFQoikpKMP7N3h",
  "key30": "qsf86viPFxxLEhdNAPXpUjihWuU341cTbeKwiW73ed1bL9BNEcQ71G4VhauY2jQXDCUFAKyzooxb3fPRfFqJFtU",
  "key31": "3ERGxeiVq8w5Nr3LoZhgZSDmsmbJLcPub1wshGUEBZLydxkifob89FU7Gr7j5HwAakzkfRqiCaWZd43PuPSKyq6e",
  "key32": "3rHmBFaG2m4Dim59RMiByGUKHT9jJWNahHyeReU9GdgWkrfnbnFgKSeNKyQzGWCcByZnVkj1HXi694GsKMGJYXUp",
  "key33": "47Kb89DTHjyrrFJgbauGYkq9kcKZnb2o9SFmAcNdN5DnK2BmAeGJa7fdhjVuyfKsLD2vBoyMfYPJncQZxzxSugKw",
  "key34": "2WJaH8aeos5o6zaF4fXmEqdg6qknJUcy9iabEHYH4qvbgn2cr9XSPnfmLFNzmdd7vrNRAm2LLMK5M2bbXN7kzgfC",
  "key35": "31U5iemCcegUT6RgRYqW4W72N4aUmqcNRoaf2RgnKZygZUJj3vL8Z36zwMsoCPeAVmH8broc2unYCXorTKnnuJNK",
  "key36": "2wGh9d2nNmRe88QqdQrK1bqxrYJiAYSgLtQBsq4b5VEHSC6F8DFcy3V8bdEvR8vxy9vFCiq9qb1Yd9q7XySmwUxb"
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
