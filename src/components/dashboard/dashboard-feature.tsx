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
    "5oAQA6ScNwyjPnc3rcgcyJT6P4N1dXcnGvk5upm9ArWreWJWq96RgwxUkLFaLjuYxPtDTy8LbEiJz3idPByXAkn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AXkDCYSs5tDM1EAwU1cfgb4tDV7hspSFUJkqDDcYPCHMVhN7Qk2pWH2LyEkzwMZUt2aqwvzi5LGxcSBTYfcMHQC",
  "key1": "GHTQfLArzYN8SzdDpQxCRXBqTSwyzfzsshfTpCm7TJJtj5oGJd8Qs9jYijFhift4Xe2F5XKEBmMsiFnZBBFpawj",
  "key2": "2UEhpuErdPwtNaqXXiyDJHxLdvnypxQmYCYxkuddk94xqK6iFa1TEJpk4DUepa6Y3xkL9URVYFjVh8L6o6V8o4QE",
  "key3": "3Zvgjnzr32DzgeRTgxTS2cywxxdpAYhb1dR55Sk7LNaB2zcLULJxwDMeCj5dsV4UYbyyrGX4ESb9sRQPhmMwDqCW",
  "key4": "2psAbcTcGRXoRAvDFj2xwqiouSwS6jvy6Mt1mvy1xnqE3PigXV6S7N2WWzt4VKu5cKMidYR59YRmU5QddTewpxoY",
  "key5": "5dApdFqcMep1wAMC6sTAAboyqPgERzirvt7Ghf6ibrX71sMMnMjMqrVzgfghK4CDS3gPaACkXPhx3Gt387Xxks8b",
  "key6": "uzyELt2kZuEfKbpxNPktjhwprVFMWWLbSYYr6kNzTPLPQzo2wpLdb2jrSaFgQgEg7t3ENp6SxXxn9tCRRx8NmFX",
  "key7": "4p8dqu91u5eLekf4mk9wC8Zzn2VVtXXPJNzh4ubHYNrWFB8r7sbLF143KCNDityNnamonp8mkcHq56gJxHvDkMnb",
  "key8": "2e551yKiGwS2DSftZxMfsxCbTsVbiX6LG5SWNw9Pa8qWAiDujia8bvB5t5qht4Enso82iDWNBtjtvqioqC3BJw6W",
  "key9": "5HZdek3JUca6xLXuGUa3FGAWPUT6RTi4ZgEnCZLkJa8WubdNnMVypLJUhegzQjK7GB722J13MxBYn8wBCCyYZreK",
  "key10": "4yeGTvrRfMfaqs9LNCi8pRfhEpsX4dfxxyFkEKKeR6i6PbxTpfQgQzc32jw6u9DWc3FJoLenapkSnpJuMVYTbmGU",
  "key11": "61XKLebdyd6Xxnehvc94sSZV86SiDPJLRqNKQyEdGXBQ18nZLfmiGmkb3Pdd6xUTb6TD9bVydSDLT2M2dDWsJJVw",
  "key12": "4goSMTo7FTTBNzVAnfv1f8mgF4HXfCiVmvphhLjJtsBWrH44S2v586sFZUuGD2Nb6DB2ngdhvEDDo18KT3VDwJEz",
  "key13": "2DEUTkxNmqjXwQieor4X5ozKLmmUadREhNBZvs9dYgqqrWbkgybgdw43g9gaRyyq4qiwdrxo4runXtQtcq7wtYPx",
  "key14": "3mopmgNZbMWGmxAkaGXapV2Tqm6vchn15yi3v5EFXXDpeoWWYvSS4aW9ukhLfb5iRqjc3hDxYC6JRypuKh5ptHQ",
  "key15": "45EBpX115tzUdWS69pgwyc6XRrpqfTXV8D1fUzs3PyKMtBUbdrUG2NYVXriBgDZcAngWCGRF7GZdADBLcmTPaszq",
  "key16": "3eHaVgCa9ZCc3E9ZDm953z6D76M4q9bLJJovRXyHitrJyeGbR9st2YxX21PNbgPTM58CzhBUcHo12z7mRqjQWcN3",
  "key17": "3qAUsrd4jnM7tmDafhxxUYALdHQRMduqX2fLhLoDXNK5FSC6VLrLTCGGXnLFCxia8wyunnanhL4bNymmgfxpEEXf",
  "key18": "5Pro13pw2xvcyA3p1AGzH2Sh42e6fDt9LHV8TR8nyDotKPqa9xZawomFF5hrAhAnuWV4qpSAEBGFeGLAyUoqa6hq",
  "key19": "5WxM3453wwDqqQABboTuTH7RCwQobdStRtnSpXKYnvxFFzhjDK6a26dNy6Vb2kyB6u2JhPtNbJqkNRwP8ymFaoFW",
  "key20": "3tnAee4T84z1JbAowe3abwMouVyLTe4mMm9fw4GkRHhEW7EFB1at2ysnTb73TbbdaNj4DztMGBFwQzAft44Qbvr4",
  "key21": "3nDRFuEtSKpzEtrkcaYs1YTPCPLaJEZFkP1WwkrxxUrQ9UECEn329vv45bdb41oXX7uE6szLPyYMDuZXdasMSQpQ",
  "key22": "54wPPmsW2KMRHRy618t363gmp9HnYrA6xAiqhvnU75iqBQctoT6mjN6ABL6WWrx4aVLQ8Trw7kKiPE2LPg3RA7zc",
  "key23": "5bsxEUwgJmn5ukkoQunT5M8Zvkr8HvKXU5BVoPh6nAZ5CXpAotvHSoMbTvSr3ztoFcjADjZUHKhLkUu1dBHViw29",
  "key24": "5DJx6HKESdu6avG3JXuzertyoxyX6KnyFJgjKstjn4JVNCapbgYbmAH3A98rct2fFFBVy7DKke9vCRsrd2RMc6vC",
  "key25": "3r41wjerwXyBfzFuXC7SP448ZqxMdAPnAxwLMBFVMoFeEbwxjcHUxqR9sTdayUGm8CpSdzhuPPNh1pcv2ufZDHNi",
  "key26": "4x6hTEWiGjLsKhvFYJEvok25w1reSRZ7rU8oN2a1n4zEzBKGgmCd375QbcBXpP3NQRd1JpAq2zG9xTQ8HPxqHvhT",
  "key27": "2Eqpg2pHeUKUshvt2bCjQ6LFi1a5ph9E9fYK8qVW4exRF8a7m7EdWYd44k6DuvyiUsjd5TmPjHRJZ7JskweX65up",
  "key28": "2EAv5pfmymhYBVpnxBm695kPHByzUwuFgnHgFcc5vNvVzT2Qjqb4GB4DJvknd1oVtMMKVjW2AuQJphkvJeX3fRci",
  "key29": "2aKc91WuXvUcJ5ZftbEB7Gg5A2NKQsGXhgMPVWLq7eGmUSYfpSjGvaXmhRjtQmDX9cbdUKn7tYAgTLrz1bnobqw9",
  "key30": "4WSBD1anxkveLMq5wVW64Xq1fwBvG6Hbkq61XNCC5faRNK2m2tBJvrf7D6S711qGny2pSMe2fQZYrY4VpqyuNMgg",
  "key31": "5cQRj9N5W3DE2psCEvE9kpkUGRaHPsV3AAnUitjCSj4oDFHHPmPoWBSAyiNWgWN1bbJ3v2XGqf3RuR4KVtNrVGxT",
  "key32": "u59xw7peeCiQqk7L2jDmYiRhfbErt9FpXXiXEYZcvjWmbRzesYvSq6PMfvZ34UkL4G6CaJKwrtx3K1Zx655orJ7",
  "key33": "5rT9x6q1uZ2uvPQ3knixbopuABVuEBSTmK7nUABTQyNNyXz3dmjgnSKdApeq3u9KLeug2pwGgGBzfBLK6oTBDLMK",
  "key34": "5hKZLbagJEc5Quj1KeVBqNDFw5uECtrnY1eedRhsxs4SjJKgQDF2wshPTGd8XAUwTdz8VEaT3kjPWytpnwUJr5Y4",
  "key35": "2xLD5nKgCYvpMtqtLEoCx98D97n268ZrWLjCmukjUpmmH5R5HqiWtuEM5zBc1v4UYQL4YJazcn5bXDtcre27Ur2u",
  "key36": "Vxz6i4dF7Di6QSmX7vdBVS7PJHaJvSnGPRDazYiHbFCJ6wtAzWv3mvTJAtXQEdhSoK5ksdsuqvA37nQQWjJYcJM",
  "key37": "5NuuGxZGfUxNKAXRumuqojinAqNUGzebPL8cJXaxzkBgUYtGpXxAUgRw5T5Z4Jap86LcaKtAgXTxZzKoaJZGZqii",
  "key38": "333orhHxMcXSNyoYtBEpTmjj4suK7GnGAY7CNYD1CSgoQbYbCvwuCjGAhjvEqsuxSrsf4YnMhSEcfTxx9pGM4vmq"
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
