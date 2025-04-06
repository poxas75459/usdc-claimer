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
    "4gAmC3uhg1xfXAfaryCNyB9j39dJkWgjA6ahXxR5aCjvzqUiDTzKh4bnfyCUgemKC48FBJ9k6idZtjqRhDxJnUkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sFzRNcpDWja6tMft5u6wmVRgnneYTjQSa8rHcKqU2T9smsQivZp34ZTxXLEksXnjQnYrqcxeZ2fzPw5vCt1nKVc",
  "key1": "5ehCCVUSzja4dBwgkSSwZzyD8wEk528XssDu3m1a7c4Q4KC18VgrNKCP2jLJUjAeyXLG3KZQekX1A3YDJKQNDZH2",
  "key2": "2PjeWsx4Xs6q6XzzMSpciPhDtSgsDJaN9nXedv5UTCwgNa9rNhD5qdA9o5kJr6acpgdM5dm16urcfEHjRZUw1g3F",
  "key3": "2Vm7n9bDEsaw8q2rCKZzKK5PDiiqrkrrDWdSDLuvgkNsmevDSRNUkstPc24hXDw2WU9nFV4HoycPqY8bgdzfwqwz",
  "key4": "4KLpAQjGToEmdYkF5CwFDsU2RtdxXGuCCRDJc9pL5XWjzVUX4fMkJmRbgVKiAUE7Z4pZJsscjGpRZ5gQYhTdDQKS",
  "key5": "2WFra7gea2ZSZsEMaASkP5j6BAWGXkiUvhMDYDWrgYruUQHQqMJdXKYhyurWNLC1Zbj7Uw2h4HexUMpyrSSKrLs1",
  "key6": "4FrSWz4Eitswdw1pJZoJ5JoukF4YB8GnyEuLM95g1xagJExqWUXpobCPDcaQ17xtvsv2jRQJQXF2Jcrr2JdZHyv4",
  "key7": "5pGsEmm1FktSVv5kkQkRqyjtsE9ESYWvnW5s7X5PJmjRcR1xh5xcTPmDBbCfnarfhS9dus2copNQSLb47ATJ1HMz",
  "key8": "4gDT2eKZpy7cvwMx1muow6C8BENThS1BzpVA9pzK1chRwqtv7Q3J94PfQuvvArpkK73phMS247416JRhCKHUHDfn",
  "key9": "4vSi4BusHZnzKQ5GBTXm2FgStX2phDZxuWHT4D7kwYE22zSRiZGcXfUMCq45EkjUyzTXUEM2XeCyxtAL9xPEkthj",
  "key10": "2ZwHwWU6rrvJLU8y15iYF78DmJRu39yXwGFYNxncWr1x43qiidcDoMjW5Phjki2qjzHc7atirDF7we6u2AVPRwBf",
  "key11": "5KnnkBtA2Y1rquMuNqxmtPnEisDddS16TnCYRYHKWNZndeyJXWEVyuaM42aUJPSkBRBHuGVxPeiJrqh3MK2xRX1d",
  "key12": "2E1N9SHNkktoeR3yb9XxrtNvizyHMUcFSsoUtRjuj5gUoS5HFBGzh2bJUudNK9XdQViqhYQzFyLP3oJ3w4eWJUbv",
  "key13": "67jx7AX3JtFQVNkp5U45v4NJDEhPKLDDFzUy3KeEiyMoGY4PLRw4rovstuL499LEq4RwiWdYraHnakrpK2uSyQDP",
  "key14": "2C79tN6BRSLc8x3Nopbp96hqNRA3qd4cVjQCgLWeEvB8UFeNyvsSUVvmeYHnuRvCQABMNCM61f3Y8qdLuFETpiEb",
  "key15": "5wdMjU1rvUaebkRKCor2z4Laek3yrmU1akLywb7GGv75MghzNTJqWzxaFvGMG2Bxd173jHCrXr5hFnZN718qzhTK",
  "key16": "3sMKCTVnqi4S5VYnN7bKpJiSiQAR9whwZV6185c6dTMpbjhDsvo8teXG2ZVTAS73mdbcdy6SzCB85vToe3zr6Xj8",
  "key17": "nJU2DytPRs6iLVLd2DBtYsi52JtBQdWwDWew3Nmik7qyesPNx3WS7pRnYnrCvGWiEvESUQJm7Z5En1hrvSRsJ3S",
  "key18": "o6N49jFaLg1UnQFKtX3hSup7JhKf4A62kdTMvM24YFStFabTcnRAx4tZfrsRw4Kka4GueDYappVzw6ermT7b5Fe",
  "key19": "5PVGXyWzM3zag1rLhNCaVABPdRGPCsCxruaRawm2CFJDS2vH9aR1YtcvkUhJnjAgE9NZuXPWYeXNxUypLZZAv49R",
  "key20": "4dcYpphKGFosgySR1PTHHJpySvkkgq7HwcAHsmXdE25booiMbDpXfm8LxBSMusG9F1s7KoccQtst9BQ5H8Vg9fc1",
  "key21": "5yChmHEsz3Qa9s14cSpcpqVNGb4kjPe6Ged3UZcGKuSJzdAqnczfaMwz1iz8paTvbnzDkRq8Sr9qA1RoDTFDkysQ",
  "key22": "38GfzXbrUB9Yr6RX1UGv8jY65CxfLxfyt5yJakYcesmc6C9ct8TXZ9hFjhUXDdDipDfwkVfHgJpP4hUqyJqyDZHT",
  "key23": "2RcJJZoQGFu4gHmD4RN6nqdPex7kKKNc7YSCqDzQoSBE9XZ7MVB5A4VrJCAJkzpsxwYufpkXwGzzh82cxNxHFfYs",
  "key24": "5ecsRMorUDpj2oGxiSzxtCXsQ7s4rccTUWcXtWvCdWS2ZFfCcjDaVoMDesfXQLQMv9EysNfGP3EDSAEsPo7WEgfN",
  "key25": "5dEYGjGWE5zA6EmfgnH4jwdrhbSLNZMkgEULDboBQYEjiVoj45voyyvAi5FHL53pXRdmhcV2zXkgj7eRpk7RUZWF",
  "key26": "2QNu5YVH1DFiRGngsTozv8JdE8AMYo1SZDPoDcpu9kcFqeLZv81SXHCo7RoUi3VMotFJ4KcJTifVRWW5S2gFd9Nt",
  "key27": "2HQTPyQkgVvEycFucuNyXSzVFmuYdtML3Bzb6T7VjK1uypBBnS82rfcmjWQofy3WYgVAeGvuLCaDzwhiDC949PmU",
  "key28": "5vNEuWw6WXA6EZDeoHpzpSufyoHTCHjyTheUUSnax6xDuDbN2Aqr1AnAwyEjqxv2s3fWXN44vrQTeodYZ4LTWhUq",
  "key29": "5b1PGk3qzd8G1Y5UdrEfFf6yLxrCuWV3vLQKDxHpfGXsPPCKz2cyYhx7CdbsLHAxAmKFboVNMoAMgfY1eHK55tdc",
  "key30": "3ca2tYDpVyDWPG8ZQwzAjKV51Q6FqkV491d8s6df39FbDGPRCuyZvwTqthLwktWbyKYJiZx8mzYjUK12dVspZoYv",
  "key31": "295dyWtTCJZiCGpDCpG6Pzxi3uqVkMFmisosjusqaVDwgZk1eq2GhxQQrcde1dQBUahQ4k88p2SoVCgzsqVPxgRB",
  "key32": "3EH6Z5Mcx495J7zemdehRBfGYdBRJxmnM4xSggXiY7CYoocHhn5xYFwSz1NfY1h6JKUdQYkXh5ya2VqKHeQPDL9N",
  "key33": "53ug6nVvY896AtUehL4KuRZwxuF3F8CJbyTZc1CdWQKzdg331PxDCyz2CefrBYpTBx7uEKfAX5w2szxtN2bqnGkn",
  "key34": "5suUVxY1V9A4YV74xEACms89Qo1gwRtZqBgdFvbrVXcLyxZY4HKRcYz6fshCVBNtegp4hMHT5fhbgEFeFJBUi1kD",
  "key35": "5KKwGw5yuBVXXbzok9EprZZsRwktYYm6KpXpUFMFuYv2S55CyTMN4JFS6mcaiAVBpUV2Qph8vuuXPE7KRD3JXqwo",
  "key36": "4UQ182qzcw6Hzrmcq6Cc2pxakbAYqk6vD6AVRuuMNu6GRBUgJuypTzLpN8MqAZXHtYua8udTBuGkaFtDTSbLtgR5",
  "key37": "4i8nPK9uBqxMYg5agtuQZ2vrAacgVoLTiysvCieh6NtTPNaT5HrvSBcCKt9j5MtgioDsbM5Vjom9DbbfWwXiNV1k",
  "key38": "pMgmtG2CuWb5Z5q9V5oqWufxArNgFha4oEjrRCkAi5ExfdJovBjp5xMjPbgPMGQGgrjN4Js28GtqGgEgd9J2MCf",
  "key39": "4KywBoL6hmqVoZ2FNPhoyWkQtHPvQb8N9Qo9FfNh5w757sXJn4Hv7DPFP2j7dGtFAj9ZUgRpvMtvtJWen8787zSZ",
  "key40": "4TTC8H3TitXzDwoVE4BK3MtGKu6UGhLZRLY2A7X4eDxzzTMZWQhtRViegkJRyetbiZ3GkmnEUhmneH3b3ztKWxAi",
  "key41": "4mgfpimAmbdspKrZNtRnEfne86zBD95cV6GjdZvUVXUrqXjd9ndLpdrXgWPr1gtDiJ7ggL5u2tkqCAfKMCBCqdLF",
  "key42": "2LiYCpXkoaTmCqQArJFfqteZxMQVTvMuNryfvtSzutd2AMAueArYA93orXRyNGddZwBFnRDWzEbD7QSnyCr6cp9N",
  "key43": "2yPVMxUHC45eTRjdd3sRtUZTSRHPMvWAjTRWgoyGiydMHPZZJ3HFic4hR5s3uTA7qTUg4ZjiH3Pzj8ttp5nJfSVA",
  "key44": "AUhgNARM8LKTr4yjsxbnQ34mQ7DGNnvSbjD9kCaFaqWskBsdBD33uMkmPHbfKmjvuBnP9sSfDXtu3m22eMoTyYQ",
  "key45": "2AHQb22DvvWAZU3xcSdJz48TtuAh4Vt4ByJrRnFuGkGYBKqnQwdpyDYeV88NovPm7kcvcaMFrSw51jNwpgggyf9",
  "key46": "95gS1YZQWn564zCc5gfUp3YVzLBrzrXdH954XmqhAHmMqDLYK9XDmjpaNMcxU8ZbLN5F5U9Hs2TmtUHcuk23s8k",
  "key47": "5F5kPYFsg2ga9RoRbd97BB6mHs366WFXHd3BBpgyxNb5f293c1tCpEBBzMTJ85XwzNmh1u5Zk69i1HrCAuZaMLsG",
  "key48": "5j2NVgNHnRpxJFK1BxqfHq5ZrDWoD8Ka5kXfUsKdHrUmj7JcZiLa5UKmAKLqBfHga8dxAhp7mRCBBNUt1hRCDgJu",
  "key49": "Czfq1uBVjPjRhPR1RXPPGEoA5CdF1BXNDUEX6dT5ZUceo9czVkn7CNMeTbL3cLFsCdxSqWe9xpyqfpx3Rt2QUwF"
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
