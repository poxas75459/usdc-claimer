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
    "21KqYNrvrrEbD1vT5ehaSpYSLV9pA4rqZcsXGq4TxKLWhwFvHcuGhFyMTCWSXhrYdSSJFab1zgnp8VkXnyBv68yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A8C8bCrsgv9mB5X78PinMbrXbDrnduXGMeC1dDKJ8SzSHYd5xBxKSt7o5AwJzPCvf4J8UHC9wUNax8e4PCQUcNH",
  "key1": "5oJeHjMvSLUZfTGpumUPmFPJo1a5BaFquyXgjh6whjqSeqykSuikdb8xUNJsJN2EWiSDaSwLFiegSJ8FaE6Appy7",
  "key2": "2MeuvZosETnFs838M7hko4tNw2jJJfUxwQTSwfyvXkbgJziY9xEnYzWfurwfi5xW6sE6XmcXmBctSTpGjHNq18Zs",
  "key3": "5c4hSh85rkWRpDGUk3eZoQP3di3YevMpwhnUnhB9Jf9SRiooewDmcDVzfytgTtuq315fCFspSRh5hdYoVYv7wZVb",
  "key4": "4NBripGdxSJtTbGP2Qj8WJYcwfPsofnYQx6g24BRustADg8nmBw6PN9BGtQexTptJEPyhU3Dv3R5EigmEPgVxwqV",
  "key5": "4STmRUmPJSjbGSYbGuxBW4BjSHhXrkDsZqD6Q96696dqJHs5ohaw6QcTvPFtHJTJDxZzXqco2hRoD8ggceBtNwpM",
  "key6": "2EseTMKmybJDnGxfmue8wd53h1xUm9yf645kmhZGAL97Mvjf7as9y98iW5YsiHfrr8ztb6bhq2Z2fFJmYWVxSU4",
  "key7": "5Q833U91AWbgWmdJk86inuEScAdowKPWrw4y4LCXdaHF17e6fSLX7U1cAUm2cd77KeyqL6wfGbALpPGF2zPLy4mY",
  "key8": "5psFWjZtCMmtUbGSPRALpaHx2FeVLWEaoEMVyxLQfaaNH1TU7HKgFa3RzBWmUFVoStaeo2Ja2wiLNAAdRqxN75AN",
  "key9": "1FTxbW4L1FRv2eX61hQy8UnmL34NENgoSJiYHkJ6b74YmE2eKvNE2DpMYAhHPfduyvf84cxSrpAR7FZadMMResB",
  "key10": "7Ny1vRjKeUqf7EiNb9xrc8SLUM28PCp5hC5nR9k6HkZRk7x2Mhg8JYuqA7V6UDEhtgdq2RUvbcXmmi5yXd5RN44",
  "key11": "gpsqYAqD7YhBpH417Jf37ksJ54ckbtcyk83rKGt6L4FkBiRwn1f4sED2o87nQ7Qvo8aJ7aVFoqKXE28HXAkxqaS",
  "key12": "9vTufdiBnBZrcA98FKatbEgKsdv23RWVGCLBoLFHjpk5nCmp8VBi6gtkey9ocGcnJLRGvEPdzWBQfN3fgzTk1mQ",
  "key13": "w28JWNz5HRgKyGEkPcBGBHMwzJxwoQ12prdgv8FooJZUuFhtELEEfR3cpHQQKkZrvJeXbkMKWWAbDdenrp87srw",
  "key14": "5AStuLjz9cPBpxBG6fiRbyxWChhXLUy1X6jH7nqrZ5SDfHyFL8Aw16aFXGNaNt2G72e2HKJY6znr32btrzjsqYTL",
  "key15": "B3pUvzriEF2SQhE9e4TfbtaHhfLuZovekwC6QykFftGfyJbYd6dhmMY4WCA4596gJ6ZE7dcPVy2pE3UgWtQggRn",
  "key16": "24m1XcTC1yEwLkGwzDUGx5MLJuPQGJaKk8jVLWkRzJTJbkAkpoPeJBZTEFQPb6KKCBrrPoAMEmhWniGzDHE2zvzZ",
  "key17": "VP19Qrg3jFkmFC9kiyWvfV7qWt9PPo99Hamdhb2ncSB4qFMPpPPYgakA8NanAELiQoxZATWPqfejL7veBdgQjDL",
  "key18": "2XFCZpd8ZXHBm9ZiinuZi5txXLg42entc2YbsvMzvmR8jAKYS17CzYqXCMu2GhGBeVmPwPZKuxXKtLobdrGCMo5i",
  "key19": "ATor2YPDnTjg9aQ31GpkDGyxTj5ggX4dvgwmzyBtuG7tskXtwCRPBNpVExXTXEUvVwbwjxM3RTRNdX2JwokoK6n",
  "key20": "5raCLDjxrBJR7HubUueQKdgXFRTcP6mLe7JjGb6QCxabKq78rqg558nXSeV8DK16V5mef64ivhZiZ1UhBhFmwHrN",
  "key21": "49tenpawG2YgrVcUTjimYx9CCfKDLRd85mk3xbstwdPQX98A9XdeTsBAtsSGpY5WVYh3W6g1fWvhpNKrsyrAZtaZ",
  "key22": "5U3tj421pSNY1QZ7NZX4Pyj3iAXZhHCr8nV2F3ae3p66JHwMEVUFHMTi8EeAmBmVrtqb8vFnntuR1cMkkWGt1EDU",
  "key23": "5s9BLb68pg46RXHP9Ftmsuc64N2SQVGnj8LeiHeTtJVdDcphzonNiR43zBATGX1NV4HqcVqDzDcV2wrYr2fyC1Ua",
  "key24": "2tkZcaeGzNxf4nbqhwBK4aSCXnw79EU8KpDKWqdC2cLFHqbUkYsomKEChvjXjikXpMCCsCzRJzRcCGvTHYkfo4Gp",
  "key25": "2EJtw7S7msivU7xMpF7WYdJ157o1WPwcsc5bdQFBKdwDYSsZAz3BMYHoVDqLAFCsaHtLArJkCA5G8bVPtaEJR7z2",
  "key26": "4XTBC6xfH9Fz68PyeFffmLdXPA9PuW5RuxmF6PD8U26xuDAm8hfYuPQrSRq3AgQHmpNRX5rRVcxxtqNav7CRF83d",
  "key27": "64WwJyjbXvd4an2L4NJ3iBWxLyjuTq2WLyRsZqtHu1hhJJjpW8wkhaLjoJ8AQHT2LCrwp56M1vve3vPhymPWJMxR",
  "key28": "dJjwFxJT6PbDc5NRPMcWuqEF3HhWEMTa7p7tDjYkQofV2kYpyS3BqW3DvthGgpC8KiwgNXf5kpjyRT2iZqwNxFE",
  "key29": "3ov2pdmv15bje8zNqvbLzHf2wTMz2WG3KPJQSitkaTBwuHEoHQENofwxrY2WkXPChRaGfWJXePGhWmjLZkxhBjQv",
  "key30": "3ZmN4yAUfMX8T9mw6KqFt64tSE3ik1eoX4aWisdGjo2y2KZcJZUU6Yn9kjhvHv3wwEkn87r9T5iucm11xSviuScC",
  "key31": "ECQAHpXUhqHk6uAmzKYGa3Rw5BhCBB4cR3DvfotQiZibXAHC4dhvTUBqtcpFyx2ki5JNG2rHJxmX9az74eBokFx",
  "key32": "4UA8s1eMwhoMR2k3SU7aU8DsLWhn7ihYDnSyQs5Lz8hGKLqePuNKo4DmdPTGxxHE3i8jD8fo9iGRopQc4NC4Nu8V",
  "key33": "4TkkyZJHfERaR4WER6vQJHT556Kd6qcYL6EjFa5bjpWR74f2MdqKfPHbi6QnifRqHW2w8yNTjg7i2vD96Mi2E2CP",
  "key34": "27MsTsxo3W7Y9edAe4V5X7NTBUCjPVMeXfRcsS5SeTgVtexSPvEMeP8fPMfawQ95UmNFscfvW6AEYNuHB7BxzDMs",
  "key35": "5qMdPGU9GnkkNseKKS5fpCBmFpqgJNbv3eD9ArFywJhWhNjvCDPyxgQ42gWuEaGxB6kcUqBq3icyLXdMAagm1yen",
  "key36": "5qrTbyjDwFumqdb7Vm6ucFpfvxkirMRFnJgAZgBkZU2Zw2Kd5JCeG8LjL7fLZJdaP2xjHntPFrfPPFswNnHc2nM4",
  "key37": "4MP2ve3rCE83musHBpBv4QTfWHP33RxBSA4qT9sW2gqFqiM5n79wtmeAHtJo28nwYbTPj8wwExur44JWSkNng78Q",
  "key38": "3R6iEtQaY6S1GH5xa813dBH87i8hWBjCKhWBfYTz93fKGhmg3x4SzsH2wwZvFjpfyCbXeDWaN638t6RqSrEKHphZ",
  "key39": "zQYiZYvf8pmuwo5bPuTja1A5QWgTdB5hgcVDJ7nAfbkdrnfvnCB3H7JEvw88ifZ8nbP31DcYdpdCptanYkoLAd8",
  "key40": "55L1qhUWCTLe3CMRdQLS7pUJdxK9Goju6bWysfk8gC5HHM38ao74kiM4NZtqQWkjfGd5fxzhNr3YbHTJzgqp1NET",
  "key41": "5X97R8Zxzrur48XdBvHNPUePTk5pgvdwMSCCTfvv5Gc1zstoPvSx4FJppAEMtRzFWG1Qbpyi1KpgZTbP9baLAqUT",
  "key42": "5SjXRNk8YpmUT87ve4kyN7XJksUJ4nVSiQ3PEX4hXxyC6VneHR6WjTN8eVi3zVgz9Lch9RpZsf2sVMZZ2dv28mp6",
  "key43": "2ZcrCgFDyr3Myub19wPKVEuLs8PQNYzxhypB6sqbhzmt6ES873mSrgcmyWR8YkCwVyJPe5ud4c15FMVubmPiSoQu",
  "key44": "3vYbH7q9jJZ15CbvL1JYaSLrkgk3oAKnRcjs5zmTM1Q1FmgDyyF4qQgfBMwPCroyYZztMZ9hh9ZUJSwN6W1C2szb",
  "key45": "4AGK63e4S84CCrce9BQn9msL2EV9nC1jhAvDogtnwqQkiHJPqCRXZdjMkxsjd7mwBYnNREZMR7RqoJbQ4afQ436j",
  "key46": "3zBvfVsGnZCr1bGrDHRQDUbCE82NFepHBHMKozBYcot6Lmj5e6nfBUSyZsrPusaJPCMmwdQatF5SYJw42E6xNyTx"
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
