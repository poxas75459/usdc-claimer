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
    "i8BpJnbv2xkBtZW41fUqzcmhjGAL5onQmv82TTNCSoGc8MzxiELEP1EZBVwUmYAj4N2KqxBsebAKKhWV1r3UoSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZoSRQjDs4wQiF4ipQ4rhDpkuKBZw9kDz8bmXJGRBX6AQmtnBnroJjuCnRurDq3aSvQzeC9Cs8MTTFSmxgD4yyca",
  "key1": "4P9AnGtTiw3eiqSaBj4dNWUgKYweqWRmSE7K5X2TiRumLpJoC76kBZYUZErPFw4wDrfMkQF8X5VbHotRHtxMvDaT",
  "key2": "yCcabocYwhzW2mb3fTRdnv9H74FK1LV4cNXZx1UkLGoUNFQ2a6aQeNaG9yipK76sehVUg2ifyvykf7dh1sDGzyS",
  "key3": "3DoYo9CyS1sVEjVrU5RN7xE4CdaphnbmWhWxif2T5nJZAVNoa6x1965vNHyvUkycfVTY6iwiFqQ4PYdkmySauoFD",
  "key4": "4s9LkN7nADBDEBKS6y5Epe4Fw7aaViFwX2ytbhPs2AHxiKTr7764YDYBQtbrdQyoADWG8b9Pv4URyzWgY5vQAiAb",
  "key5": "53NH8794zt69ncikNWsn34nKGtA35KMeboggRbnKPXf58j2ZTDJjzZEnB3eXAoBDCdH5BeprEGSkAuXbAFF5RTgU",
  "key6": "5SjbLRHTAyNfKQ2FGsrdGwq1fVtHVrZDgXQK1zwRxDQ84EqU83eq3LmEaACmbYLk2WL61DEWLogU1SZCLUHeKVrN",
  "key7": "2Ce1EySrdaGEgmBKMb6AnmnPKkQXbAiDqn4FB8dJP3wAvbyE7rS9ZQp4s6xAN6iwELsHZaMo6a4amfr43gHkWmk1",
  "key8": "64jnimrZL8Ai8anscat5Sj5PREHi9L2ZpcRW8mKaEA4ydv5wQ1i2dGaJFw376ZyHpPeXYH9rXAhsupmFCdXGWuZB",
  "key9": "5ZMJqABpbRw7BLd5dGdNs3Zv7PjRBmQWjbinq7nTBUFPqodiEMzHMqSHScHj58TtxqKJzGFmMNi2DThVbV4XqDar",
  "key10": "cK88YemX3rKYNPG31Z1U5mPBXXv5pU6SvgpUAYwsQh534PaAdcEaAaA2QFUpx12EMJ8S5pjsYEFPLWfsVJKAo97",
  "key11": "u99ceLUsf5d8aJg8JH7U2fnAqX1MYHxsLQXnr5qxK7HLJskNjZBwFFPHSDm7m9fMXcZNurPePysezJEF1p6Mdip",
  "key12": "3fqxmMGUfazexAGYARTuRH9cJbJJsf2yJ5UgtDuZs36BFMvzsQAFxFTTfSc9dD6gUUVEnNaHdaa5QWBjcFr7ZHPT",
  "key13": "3YoyGhamgbzcBFqVPEuf9JwD69Pnj1ZyE7xUTL2pUrnhJm9PSA9xEgPkUhm8nWF2CdKiJCxxgLa6baZMVuY4Qz1x",
  "key14": "5t4rVKpyqDuKzTu6tVoZjPNxwLthCdHbCmBV8yjjxMVzwJMrCj9LrDSbbBni8CGBF2JwvTdUnYByrfzgmpak4Yh9",
  "key15": "2NzG4gWEcStbzq88zruXCu5cxz9Rqx7huW163mSfWhcG73YsQx4XDRwc1m8x3qK5uciR7649ZmSZRaEhWXmZ6YCe",
  "key16": "2yvkUXuMWmtfkJvn4NMwgnpTKbJ1yBRJkujbd81bpPefUsmnTzmNZinEJvcHELDjdF9RuCPKNgTL27aZqJ2ADouk",
  "key17": "5Jn26v7pegt8jRRdx8qjDYyAdjoqQB9UEjvdSJLKy5DtUaXvW9yhaFsgxUUaVUDwjxTS8AjRTdTJSp2r4GGvZbDc",
  "key18": "5GNwxN7A7z5552TnzB9mEfPat8X7f57NibXezujvNxFSjsaSYMCAjPDiKHeNgFzyhgiBit48HcdTWiYVy8RZ3yVG",
  "key19": "3VJwhAfr9ytrgHRKDEPrW7JgoapmnZkxVvxHuCkupKf357K499exGcbuNEv24qf11RuA1ruPzkvqof3X481MWuZo",
  "key20": "28YPpranG5YphMo9QoEWhR8N9UDX8QBWd6M2f9AQ3LXThKwfki4RBgM7pJt3yTFmfp5VNpfYkiEt1AJrYzoXkUbH",
  "key21": "4L7e1Mnb3rZ9SE6bAVKhP3rBbwwLvz5qr2rgomsRT51BjbAFLhE2eG2JRwPwe71X6uBsJL6GqRD4G4jdZ6ACP9da",
  "key22": "2v85LUZN2waMVinoVokQNx4purH4yfinZxWVFJH6Y1JpMxHgLmHSP6wCMM42yWkQL5fB4o4Yi5Y5xPp3VWo3w32M",
  "key23": "2cMpoPcwts66YVYfc9hDMzQeYCz7H5YW6ftQUKAp2XHiUCikMD7ofNuy6FpkzDaLDFFuGV3qja2N7R8jg18bqT3S",
  "key24": "Bs85jwbegXdfJWxp6DiwKsiD7drEgw26WniLXnBXLhFbX3hjkFp3YMC6Zf2PV6gjGiXm642TPy3VuwkHpGKCHjv",
  "key25": "3i7nTzaW6sNXhJft3DXcyyuat5JKh2GSMCxfp7KxHdbYRH7P1L3L6hF6mqAt4JThmHmFd4s6EsnUpDftPtvFRdZW",
  "key26": "3V18JQmoYq7r3DhXTDMxeqgvjnMGD6srQemr3yg3QocHwYzzpNC2QNQta74egaEGd6xY1C5cu8BMhvH16pLy39AS",
  "key27": "zwNDmuzksrCcYAp34ZcqtPeBAdD53t1MkEVcvGZAPvgxmYAwsfsfvuKPMTfVwTXe3XkUKKAfT8YkuerzLrQ3ViT",
  "key28": "5cRy7AGTo8qrTH7PnbTnZBc9Abj4NAN21koB78ZZo1w8XANkdm7pCvcSzA7v7kjjCxTgavHUKXqHM4oGixJtiTe7",
  "key29": "2HxKQvaii7kjBFs2oznQr4feKoGwkAdJdoy3FKkNsX3EPsAGUe9e547TmMpvinwUsSFCBhinpR9tdrTXMaEDSB7F",
  "key30": "2QzMh4zmEcHQsykMVjXRssYFLaXU2AXwPwQCMwkZFtRJ1j6JZGU1g5shXU49PintCnskgJaNZAAsCJZsRer4DruC",
  "key31": "4RBWp4thjrf1gBgpusoJA8VhXYmGTGLEn8aG2yS1JFGv5R2qrYGnYSTCUSrnw8M5Fsp3Uk7YDXrALaNpkmpdXKKn",
  "key32": "32nno8p4Pz5FD5eJAdM74CJ1GH7mHb1CHENDUigY1Ygf76FxbEdrz7bLi3EPdzgX1asbAPJF3vAwbiECrhbcUaxc",
  "key33": "qtxXWDEa42xVRpy2HXp2MH8pC12CS7MCvPVza7Spy6EyuigZderAr7Xjdtt9eeQPw3pjYRT3t6Ru8gAia5daEmF"
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
