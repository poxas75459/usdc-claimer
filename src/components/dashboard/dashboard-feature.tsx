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
    "5GTWh5xr3auuPaoURMJFo9wHHBWSTkKJpqw4kW2Z28m37mMrvXxCkkirLtPxWEoJd5vN2eyjMz3gNijp7nW2G8C5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U4eCBzu7JEwWywA4S53LprbbQMqcsv3pPf6QqLGBq1ktdxykNonAgb2B5jSJ4qoRuZV8uBgb9knMWadY3rcpbBz",
  "key1": "6EHZL1d55Wfd8LFPTiSmHaLs19PqQsmQjRY3FieQPLzZ8XmTyYSmNRT4TfDFebnitRsqyH1Mzo3GtzBpLRsgPEb",
  "key2": "XyyWDnCFFQEN8gqXNxnBsS4PjiCoHuMZKQdRMZiWJgpxquTHKxcuLHSZCLe3wqUZiZJgVQZm4TBSEpWz32KYvsT",
  "key3": "674JM9jMwdPKXsVvzjMTZuaYXcTgHmM1rDJscAjKDWDHgyJjGN4Lox84UrPB6uvHQujQfWCJVp9udFEPVY5Aeoan",
  "key4": "Jsjay54QqDdMkX4Sa643vAQYhw5mAQvg1Q6JpFnk9musZS3UxhaJc8PhwTSR4m9NM8sgCCyixGjfjrrP4Cj7x3F",
  "key5": "5cDmfUYFVt3d7nrZXto2QhbbzN4HSzeM9BWo7vmiUUzP3x5FiBW2hPMTZ9n8XTctTWCt64P5H59Ziogb7LLPRiJK",
  "key6": "2CZu3LD9txtdzs9onzWipnGpkW64DdYq4Bg7RVSfcFjJbyh51dwX1kRHxqM9ExqSJrUXeQTZNbbCF58hkgJrMtyP",
  "key7": "4FLKQZy5hZ9co2QtfsSiCk6F7ecQ2DKVNyjBiBXTkFRL6YJrMtMT7wTkM8vf9kzmGfAwTqSF7WxcNLbXuHpSFxTg",
  "key8": "4aF6zePkKTQfdMp1GcVL2Qw2RegmDC9oXMGQu61AjGSS7RgbTjRbTqW7SJVrUZrrbukUu4iSs2hyajYhzNViVH5",
  "key9": "4yEYv2ytYXkZoESkKEWJiD65KQ1jzJKoxJGoChK1GvUimsJdcqfAnDuNtU1zQccQaZJApEbFcBezrfmihxR7rkJ4",
  "key10": "2vCxo4acLibbNmz51XVE4G76ywM3HV721iNsAX5CsNeCcSMrhdc9TS2bdTbL4heEaNFwkNe2JnEDRVagaiZjueMc",
  "key11": "2YSp3UivutRbGJNvExddXF83xt6NJRnSB16xobu9K8qUgG9pL3DEj5PMLX75XtmyoMVckCZeAR19cHQGRxtkeARq",
  "key12": "4N8BajdKQp79gyo9rZti5Ww6iqexMMqHV5LRURLZiLudhPzHcEbsxY2LUpXUFuak6i7okFqSguEVrkTQXPAQj5f3",
  "key13": "3x2GrwegH472eQBdd4xYhwa6fZgK6Agzma7GxyQvPMxAKvMgb48Y4te8W33WwykdNYPUzqkjnQc2to6s5X9tCzsB",
  "key14": "2veCxooYC9NKtHgvuyuAAxxNNySEzW5uF8sdUz7k4D8fRkLBHPyza9ttcST9yjXMnZhGZa9homAcur5psaNVjMxw",
  "key15": "4kWdpYQ48ZJCGFBywK6FEgu617JJQXqiDa4tnhLhLHyMLU8KpzJsmYoARvtuPJ1TQRPBHRFZHGAWqwmuY2kmTBc9",
  "key16": "4eBmx1UPGnEpVutLtcbEHeBNWqGUoA2i422mxfcDuUGA6gKHyjm8cgspddZbmKdEaMVhywB9RVUn5ckURM5N4sBo",
  "key17": "McuhvwL5FEiJ8U55ygviaVHTpff3HteEwzXdJBUuNRuKQ9ihm1JDaXm6oDR4qa2CcQaP6tfqkzaeCvsPDcdLJV6",
  "key18": "yf4ucQJ7WLqb1QPbqH9i8k9vfLSYrqv8gL5SD6weWeSmEPgwviHCrTrdcP5Gb2ppF8eSkbUxX7zrN61oGevQzvu",
  "key19": "A6bXSjmKuPfx2r43whG7W51waD4NyRqVfexBuUJPcHJLxJps7HJX9SroXfoD6YzZhEs5Ft919PLwe1ss2t9GhcJ",
  "key20": "4omQGiNtdFBc2RwZD19VysyMoCmv6qFS86fM6axzU1aYmf62xsHodVLWGwC8oZA5eAxt2GNRaovea9YFF2eaZkxB",
  "key21": "2bHB9RCkbL6hUVYcaugPFHUfEdbMNFFovxufD82ZWsfW3ps2PpjRff4BK7JVLSrqcRE6SweGeK61ZSsqULsZn997",
  "key22": "4wBXqM9MtMetWGTf7SV4gKRX717P3njCABFtJwzAGPT6tvYBEQpS58RuPaUWk4YCrkZzACuWX9W1JVMoqKYCiqdC",
  "key23": "c5hbvrsAMXouXtk6sd3cZ1WG7H37hLdNujqVEsKoZ1wmPvoh7VyGwcs32UQiQsrQ1hNuq7Kbhzcja9LaUKouhv8",
  "key24": "36RGC9ExuusbuoucGfsovcW7maRLzdpvjQduKdnb2eyYnZE7v32wdhYtyk5hNvFgkgTi96yyT3ciVSTGNVuRwius",
  "key25": "YNA3ELB5nJu5GD5jCnxpXe5QCY7k1QXLfNm4oKGRAEDW1npQ5ScrkhTKFDh6ZB3SKeQagMvFvBrjY4QxHDAMgAY",
  "key26": "3k8w12H9AgnDXsz9brNiGzszCVJsvoH1UQMRKhBnBydcs1h977umGExMsDSKTE2nrgMo9xdpL2wKbrBazSnzBtPk",
  "key27": "454agexNNS7ignEqTTQjqauQBjENqev3fvuN91CsaocPF9Fcbv91kiiSQd54ziEnwuu1rcxZm1VHEoN8ssZSrZHX",
  "key28": "YpeScqSdBYm33uiRha51q5668b3KDgqBqK9xtLb4irbo8xZG6RgTH94h4LnRNy2nTpGnaMd3RZa1dHa4eJrkgjH",
  "key29": "YzfYAGH2FvJbd1PSoX6HzK7EwbinevXXH39mQkJbQ5qQVcjYYVbwFMPmRhWxQas9TXfQ7XeexDCvGtMkfvtMaPc",
  "key30": "3wMD6ARdJ3QawW9h1JqiRLcM5iHr7Se1Hznm1a15rwNe9pxmwb1suhNnBqXHCZASa9HHVWLm81eBM3h42mWR4E4T",
  "key31": "3akVFvsxHudSMW6qgeySFrWxHezNKRDfj6gWGJgbmkoCkhz1SWFzWJejc8FyeVmDc2hozPVVETiWNBv8hQan2Nzp",
  "key32": "sajkj8wWbUnKQt8K4fASyygWR2Dxo9bd7muxnAdaeE5eYDUfbUuxdXEkAZGQBZzvDCA9yHWyc8XA2noftZpDuDN",
  "key33": "BxFxyr5sKZjWM8Q3UUuMJSEWy7S7gabGyFQb167rxdUf8Lt37hhBvJu2gmSVXNCgxu9zov8fniKmAVy6k6gPQ7j",
  "key34": "5JpbG66J6jPMyxKwmj4cHQAZKK4qo1WajoJJXhxBD1naYncYq8UXcBWy5ieuu6yghaWYsjHxyh2D5jVjoegyS9t2",
  "key35": "ZvC4ViKp6ud5D756sYi4AW2UkcbFi5wK6G56Ad6VaeoEhB6MA8VQQg4AoAozXGoRDxzCvahVznaLSFNuFQuyCQ4",
  "key36": "xSRYHUMEJVUbvJyDeBmHrWSSYJBnUPShwWkK4zKfJ3pBbTjboY1TDm7uo4dbLVxS8iq8mGHtS1PDNa2aVBXs1DB",
  "key37": "5xnszKgRvt3ppnt3PdzNvQUp2CbtcFjnu4GaGUmVEFC3tkUiLK59W5kJmnHrm1pirLXr1nYEoGNWf6ybxkkWPsCv",
  "key38": "4LbSBnzHZ4hEsbd3WJQ8cVjAoxSqYYATVNQNMBDf2prSiAuoownFh3B3Dtym94WViX9Vwri7Dmgr2pLwLhcbqrTZ",
  "key39": "5yyBbN5LBEi3HqCjiks1F8wGfyLLPVir5KZv8BcjxiNGAxvrbJUW7J6Sq5fnzB5a1SCzRi3N1QsQQBE7CMABLDkg",
  "key40": "3C2kb5DVki1kTZ1ytno435Ue9RBhGePEwTVmcyhGUE4LcZ7WqewqDWYQAj5LHPrNY7vX1JJw8xKRSADX1hwSKpuG",
  "key41": "4ZL6dLKfjJXfWoe7dcZ6tTGrzq5FhCNRbLxPc7eS5YnoFDW7cEuNjRwMrdv9WDaSDskmsKbtutY8aaJZvZrFJj76",
  "key42": "5qyc54DWFrfGYNQEanJ1vg8hdizB7URXytDKBkktekaLwrHH39CDnfETuGS8GvvKV5MP1UZTPbxLZj2RoabqMVoE",
  "key43": "378SedKjUJSXL5v4uckyvau4kvBYnS3eCfJGvoj5CFJ2aogsdgqyg7HioyrM9CkbUvej59PwSdwPYnicUjnEHAwm",
  "key44": "TtpeGiEAXnEUSQjk4QsoPsHsCeCkzyYqLbGa9B28vhaKybvs73cm4yYshuA2VRbJLDqs163JmvBbVyWxPPVSYeL",
  "key45": "2wXdTGPoq1VhofujHkvJ6MPqE3VUxv5hxKv6pwWk1pAX8AJGaXutJFRDa8zKjW52M2dbRegvWBtbbCM6SRLKsr4a",
  "key46": "4q6j4j13MJcDJ884G4ede3zxoHvL1dwt7cgCh2F24r5MEx6XGgYNQBR9vVb9swUEzwTmpsEhiHMvWKi1E5Nv5dYt"
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
