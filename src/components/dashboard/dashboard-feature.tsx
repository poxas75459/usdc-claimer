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
    "5N7YKQswGEePzxSwdptxYUT3XaWWguKqyFXRgXKXmHpaTRLmWJDks487XzBei9WsB3U79qpdt2vRhro6mC6oKSrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49m1D7qNk45jPBf1njiWZc7UCouN5R3oS8pC1TS31zuLTdEk7a6Err6P27SmPEAvW41u13sDM9F2anT53HEtMpPx",
  "key1": "356a8usbpgV8wCc3JKDoDRPaLTBMHj7yLbYw5JGyrZpCzfV43NpR72mFnosdZ5Cv9bqUKjR4gtAEXC1sHgp5y3EN",
  "key2": "49TYP7trdYaC7s82CtfwcKBL6Wipz23QvfvEXDxMSJj3B7sPA2cCrpZf8GYkaPXA19DUgJ7BAXp42xgUEjLJUqL9",
  "key3": "24WtKSeEcVBka7YmUWEFCQ7irVx2WxYAetiXkGX9FAgjyYkEXrN14EhQ7ZPNBasSePvEDov3gJgUEhXig25MQGV8",
  "key4": "64z9rBvCiQCyQdDTxsTbcYRWCeoXWyrzMdkU9U7cc6kTeKuiaQbx46VorNUCF4uRNBLsa3W81PdpigHQg4evDMGU",
  "key5": "oNcnHHP5cxuikv7cFGMPMpoJtjxDqkqBDqKbUMoaQGv1S5SEj4mFQ2XfZJULKgKamj575tdB5pJCyUsuWUAz1CW",
  "key6": "3Jowpcfv2ocw243e9CQAki5N3qJu8FioDcYGHQg4ck5USYAAtQ2ZcRt31jJyu9zaZRTqVr1yFFpyjUBM3tXmJHhh",
  "key7": "LaE8bLLt7v7XsRAn9mUTPVRRENDxxPrf8yhseN7Trc3Twi4VLs5FUPyRvQBfWLwveKJdMViEoVtJZL21MBCmgaV",
  "key8": "yahZuy9jcVgZB6VsyXxxKnY5dWqvcbGDXk4viadjvPFWwDL4k8Bx7bDYeXjFwMTye7uxUEMc8rMHfjZ92hY7pZj",
  "key9": "3nCzGQWYb5edwx5gGxBE9admvaRaSKfipxjGVpWPB4KmQ5Wv4HHpmmHbLgqQncJyTLaTS18XtkBwF2aRqHMxrtiH",
  "key10": "3aeLPdF1EDe2b59SXuNAbWuhQYo9WWdvhjDrw4p2Hcd1Fhp1PRRyVE8KSe9dssUyFcEYPJ8Vb1DEpahJ4ugA3myv",
  "key11": "x1mnrPHTt49XkRmsVw4Sjeggn775Qtc3oXQGsp7CFq1ce23m72aCHoEY9zk8GKno9JBTbuuWPZi8Hv8bRhPaVJt",
  "key12": "87Bzza8XVJpatuJSQMGviwK33A3PF4gkmt1DxFguUD2VnTSwz38nGYkfEFdFnkuBHwjuFaZxS3mixE4EphPKKSf",
  "key13": "3Y91fm14pWKzjPpdERtAt9KotCaaAza8m22khcSbkFy7d22GQRx5AxsjQMPdJjqUYcvChwJovvSzqZXaKWnLXS2b",
  "key14": "4Z3Ndy16KNysZrdtLmS7eBJraKBSNUF9xG1YxNXuVFJMQUEAVfmonUwPyM9drjp9hE7JVVJazsAMyfnLRjvyi4CJ",
  "key15": "29poHeuWMm41DEWGFCdcuFhHMC2nu72gUBK8663roSJf22ZhEbRVyR4mkgLYKXMXwZp9Jj3quyeNEMENXTQQAAN6",
  "key16": "5ewWZD9dm7BkDhr6wujRyCGm9N3zhBWvi2MkmpeEmJbrk1WkhhQrtYHLxSBs7pQQ59qFvZSoc66v6WHQW91r6kPk",
  "key17": "4cPwoZKW6CryG47foE7XDL8897hAHeUWNV7Dfi4xvc1DAn5vF1TWZsShaSJUswWvhw4FtFAwzt5AYgPE8GzSiP3i",
  "key18": "5mQJuuFHeAqcyK2pkHZjk7ThJ3VWFsKxm73QbAVd78RMkPcJjegKiq6vtZQEWAHCBZYwowava92KevTAxatFYWmF",
  "key19": "4gFgEWxt47KoWsZzrfAgWmXFnWy9BrP9nhbxTrdKb3hwWNTkVmqsTeVfZGa6AYThVd1tpT4X2VXtCWVEhZa4am3s",
  "key20": "47WpcWq34KGnmyeJvHVEATHzn5Fi7VwcX8VQSpHETPBqGGCYUiVsAKZK6CFiSofYDqR4KXwkf8KyM5wDwx3oaeu",
  "key21": "518iDQvDR78iCGPpenjMUs5KSTyTydPt7VGgszD69w39uEuygF3HrhbFgwynGtRnzngZjq68kwZbhL6kWgK3TUyX",
  "key22": "4bB5nMRs16heyVXNS5SyU1gy9CVFkKCS9ZQArkqBZCwx3tB7PyxCtHUase4jwb2vGj92eYuaXgjFksCoh4JZ8wsR",
  "key23": "5PFNEkgHto2cXNZ9kfbUUSh9Sodtf8DH1H1diY98VjkWyT2R5qgCjwqhPxx37LksGfQuTayFJEuJzd4AtnbfhdPf",
  "key24": "4ZMnMz2EQvarKJFFB2YRyKLLL4ueWYRhV6jojaHo6HVYwPKwsL3x1xXtGMxKNwQYJ2LXCTm988JTfsm8RitR6ACU",
  "key25": "385L8uCMaq8SXPuvNmoDoXQ8Pc4LLWc5ZvCbJwu5jHfWLaZSarSY65Xg2HoW3Pwihq9LxXTfz8SRnXhDoUrXr2Dz",
  "key26": "4XNx12o9TWC7Fb7EiUdjP6dSPugWMgK88tJ8MzZutofqyiDBBEabZuv1PQH6L49SJep7qJC1Wzi6CufVZJ5cML6D",
  "key27": "5YdqPqnPnqdg3eigitgfVc3o4Zr2g9UxuzFJ4UtgHAZHGB3ER984GXje3gUSumDY5HgpahsUdHHmRiBmPokMLoYG",
  "key28": "61HRcgemckZefVuvvs7v63U5h7C8wQhKDPgS6EBCLN9Wb8NQVr5uCKsi834T296fq6FD4eYraVSF2n7gEXsWRetR",
  "key29": "5U47X7trWqziBjh7QsAnKX4Mxn3Efae24tNtL4Q17nxFeiWS4qKHVfjkrvZB3LH7bTJYDSzvGmG5ECNmHmSi6P3L",
  "key30": "4t9ycjjq13WjavF5gVpj4LaJm2spQHctnA8gLh8G6Yr4ELHabVFnAwSfQzMfiuX7F8EM5ZfZKtCWQYFAYKcbkqEB",
  "key31": "ahieF68pFpcsJdqxdqZZZRDCoNkHceHgAMG2QEdsgfLWxwtLfRQevAYzYGEaqc59EC4pfcbA9wVUefzE8pp7mn3",
  "key32": "4CGQufL5uU61H1FD7Z6wYZqRGj4Qwe5tQFUS16VApZQgbW8GHgeTin9opFacVkBssRdWC1cq1ZZ4ZjiXvTdLb6ku",
  "key33": "c5RrJtCEBCC95vNAz7gC3iWv2xB9j5PyRiLri3zQoVwr7FgbKHVBsRDJU8z3jthBRWXNwrVHRFgHhGdZRajf7uf",
  "key34": "22x4jyd7CPyAnDSGLUFTW3ZtpDvDFBxwX5GyEXCn7jSn6U3kxLzZtx3EBeqW18HEjtoHKFdCtAcFGoEbee1UQDat",
  "key35": "5CWopLxGFHjPahFb6jVviZRPtcpC7GaahroEZXoPLvZRpxNpSqd6LtAjQ1TrGQX9uT3Z2ce9pxzJeYGFZWPP5QJ2",
  "key36": "58xmAR3xkGC7hZmKcfcGmHiqsfRTURcZd4oq6Pe8ee3MHT76HigQZqK4tP55oknTyk2LA5kwkVfz9Z3K2upiWNsu",
  "key37": "2od3AnKc6FZGqqXKp8VJs7swJ1B3koWN4NViBiUBB9c8haV1guk6TAP5YJiZBCBr3dvDZfcQsoncXHpVnE4RpnY2",
  "key38": "3GzPd1Q16VHaWP1Mqg2MrB25u4MMXCd7NyztGiEH7YnWdTgB9aRwdTp1D2KHtPNj2aikuRTHFt5oJNij25VidiyB",
  "key39": "yapgKZaWfGMS2NEjA3Ws13qVvALN7VYPkoMxDNNmwzJLbHTxRAChYCD8ZiDu9NcBhCbodkAKU4DykCpFS8EBSYa",
  "key40": "58c6Kr2xiqdHRZmSh3o1Vesc8SnfnLKqJ9okSX6aDqLrqMRsnnSbSDEQbcbVhwMoP4k9fevQHVVDuhV3h1LnbpcP",
  "key41": "voX7YNjbTbd59NHynvuSZMHb7UficS2fryWjZvtY2g3nKNy7JeHgqtBsicjvLKUiHfiJWd1PsmLn4zoNQoPL1MF"
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
