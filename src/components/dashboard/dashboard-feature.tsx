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
    "4e1ZjpNuEZutYVZ3xQHcEZ787fRdudjfJE6zRYrEcFoQuomocU35FgsjtwnNRGxJaYz1dJLf562QTt497ngEifDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VcDU9KuCcSMRzXRSYnJKhm6izUBYAG6LFgRSxGds65AQ1DPPmwgWWX8wPtgMHbxsDoLpqkJYxih6PyrD3Ferq3t",
  "key1": "3AEicTYVr5hnR9y9t3GWcU8bio7PZAyjWcYN1qkbSek1y2CaVSzJni9iyXAebeRddcUaXpRSNAQhyF6cBfhzvYst",
  "key2": "5tAHAt4MK8JWq8N7aXrDpWpAZVdTtVeF7vTcNsRsnMVxEN8XMJJEuYmFAecLuovyLcdkT1Lg5NG4vSS2EdrZdTjJ",
  "key3": "2py2Ka3Cq79gerSst7VSdM73YNokdEt7ADxa5aWnimh4SqspeKH5Rq8GkK26uqfrtoftQJs3kUfpbiwv4hNh7T1D",
  "key4": "5WH8aYSH7tmyzDNhJHuqPoLeKBLxFggRCWSSNNhH73Uc2pSwTVQDAZ95bkjBgtffyCrhwngTKh1dz5FyR7YjrAuf",
  "key5": "2XJyCad1yTgbwo4orRp55uHSxvrhWQX97MyJtre2zAXpYTqFaJf63gJoktuUHobaecQ4GUjzBnjVhm9DGTa3wre9",
  "key6": "4dWtu4d4zSmJ8W99mnDZSkEP3ruCB2iSL39B5DZrocGvtj5BaHhi854e6ACnnrPYw5B7oXifZkj3tM9pbg6Bd6uX",
  "key7": "5tb1uoLsJbcrUJxrAFH62m496syWwn4p14H4rQrkATDT2cc9Sw4c3Hk1KZ91WDtV5SVQfLPJQJWNhzKEhAEKv9zL",
  "key8": "xF8Ktv93vxLUsFnwqFD3bALAWimwasPyxPpkPQubCtbrA8sAiswoho9QBkHpSYtjr2kksHPw5w5kr8KrN1arVmu",
  "key9": "4fynVwTHNmbBUQnysVniowtLTraHT77JrzF29Q6CYZgfhhu8LtP7qbVSC3qT4rZ7hDUXfm8ZNcytyLtySGh36tjo",
  "key10": "4WvH2USaeTzyjzUB8G3xMBC62RMY6jUqQUcTMSuooBTwf7Qxap2ghE26rJdMHsCHQqcZobpGQDzr5ZbWFo2b9bpR",
  "key11": "21erPGhf4SFtBpgxKG9ax5zfbpUvnLycN3YsD521uw7hRduf8b7iwoq2uLngndGPBJN4TtTdKaAbkDzPWL3fFXm9",
  "key12": "QbeG5dwtKyunPpVzoERgmZffpHuWLZoXeoUwy2T2xwToUBswWZcC8748hMnjCvsvAvSuQMzMd9dKYwdBS7DNeE8",
  "key13": "pJaqrbsjrSyC5D9XPgwp85v2t93YA4HRREcdcHsA3Y7WTCLJV6UvukEGfyZWjH3hMbeuQf4CRqk9MWYSjeXR2PG",
  "key14": "5x7fMRer18WZE3fBxCgRmA8ueNyQ9bG2Z8mKAMrvXVyArkWuHLrmhubyJi1nNXscnen4PdaRxdaLQRKYwq9cfjJV",
  "key15": "2vM9NT8zYpED4d7rSQp4wWUg4fvfzC2T6nyhaevEbWQDftLGjC36GqD2pxRc2AkDEFRDL8ZTVQjwBXe3j253DkJG",
  "key16": "3f7Ww2qyCF5YPkQJMXgqdzcpYXqDdKT7T3zPiJmprG6vshYLJmkT1U1qMBFZCJ3rRyi36i9ydQbBrVeSEDHnNgvR",
  "key17": "EEGvKrcx4XQ38X781UsdG3Cc5xtudnvQvmar7wk6w5CMDiLVusyfGrRtx1WjzupM3v4T5QzpSfbHR8VtiFzU98j",
  "key18": "Di9MrV3n3GMNVaaqWGJ87Sqad2Tr9eRH13XN75HXkRb7vgqmEdKqhqxp71SbopyAe14Ba4ePXW1oVCYFL1fgWyk",
  "key19": "3YRMHwM7S5ZNx9sBkVFz348mQkPiJbfw3Qa9ujm1eAFxviPkLEMxh48xuiHKZy91R1Zw76qWNSHXFPNiRXmEAy8B",
  "key20": "5xRSQ8mpRfhP6EtyJiEC4ngQmDAdR3hs2FM6HmGmvecXgUQwxgAFubiLcpaMBatnEQqKjNgqRDpZo4j1yLMXs7TE",
  "key21": "4nHbAq6ywe5J6A16SpKcYLvYcEBfcpqK18iwYAbTgbAss6FFfq1GL2eJ8JXUiLg3tXwR67U1Axdr82JVUnDqvM1y",
  "key22": "51Q2igEuV986wvLmBK7SpDNh6PiqZAeN9Eb3uiaagat5WbPqzY7k5fts6evVqp5dX9qVUpRb4wswNcC91F1nETVg",
  "key23": "2Ji5o8H4rCvQfSPcfHCJuRzQE3SnkjVSUcSXGqm8ebgb2zxeraGw7yG6LFYZK6Lm3rBVJzNenE38i3moKUmiwhhd",
  "key24": "2YbgMhtr7Va6mAndivbocPPdz5zjRmrxW5zjLjZQ6jyUbQm35sVtyPjTKrZ6QFxUFSi61TehvGc9HGqMNn4BXD5m",
  "key25": "4r1JYnCKuJKB5ua5RCFmAPBmHyw5mR7e2cc9VpapfkFCUpfLdayzZ5GeXAZxK22WjBqe6v73GPzBEbaMRTTL93XH",
  "key26": "2RRVpasUP7RZ6HRantc1SgWQaFbwAXJyTbkiWdjg9VW9Z8QwcDocbCsNMxJE63rjFrb4bS1jzwhbrcZWfVtqyhXe",
  "key27": "5iP1DkAEZoiggAuxEmQmr3KnGTCFg8eDKUpccCBPRWFxwW6r3yXmcuRK7htuRS4bptQEEjifUvAswJdhB5Ksg5YQ",
  "key28": "44uLBNe9LA3ewpzFqDds1d9HxoCwd6Xc1rEcV4WsQNE25kqvaJBtQ2oafvTKg9vimscfhbdVVK8oBMC24rtN971A",
  "key29": "4uBxwACFUiw3XWXNZucytCzTbjs6Mwp19SdAhX4Adt3Zn3S1xQM3pBi5gLnwnAJYELbokpajJ8eZqgkr7MJvaNtp",
  "key30": "2EJAdGq1tNavvBz1oMGcihGYsi88qafuoQYjN9Q1Px29bz5XgyjX4QXBv8F1nckhtC8ZQysm4V4NsSQeiQoKH7Po",
  "key31": "4qm6J4EL6wsJ22qXc3Bur5NLMZCZhKDXqELEFMcRUTZeJMvGg8FYcMetLcSKTE6FHy6DgwLJ2mA8ny69L51wpCti",
  "key32": "4NfnRsHPWW7yEbiXKTj1h6WMSF5PzRXtRe3NaNZmSJSkXSfxue5Ecm6FLT6ruFRzQ2dhhbLp4XZttcgNTF9e57Yg",
  "key33": "JMCc1Zts4qhXJDNUn64v5Tf1i1bJT429XnNTNSbwxwfLF65xspzgzFXte4wHnwzE1tvW19eNbHpgW16uh9kUZE8",
  "key34": "xWHNVHmeKnq2tRNR4ERjmr1kZNGyxoey2BLUsKfzsD5x711pUEirN3a8N9qoiNghyBKmtrsxXX7GizXPTRbkxNN",
  "key35": "2pQSq8mVTxULw69oqWtzBTsm8Bf48RkVsuQaWj45nyQD5HsmBQrchKfsvNYJP3utDQkMgXU5CJa9Epyo6YaQcwLG",
  "key36": "3MA2Ru2XnHjYWDqbUKMZfA3u568n3riYNw3aZAA1Ns1iZkesWbSZV11W42NRs2HjeRhhwCuqyzwmWkEAjUeMMqqr",
  "key37": "4Q1TDksVuxra66kF61NgHwGs1ordqXDFnDtayCSsEXMe6ZbMAAKawiDH2acT2nw1V6dWrUSbYMWRJ8BcwwcD9BB4",
  "key38": "23DRAFgQzCq3xsP3WezsmNFEmw1gJFZooYHN1tBPLKesAUwUaYgjD2NZMemiGFDHjX1DkN746zEYdwHasyummHFR",
  "key39": "4o8FZmrZeFp4NSJD7oYwwsvMBAGWZUcRuKty9D9qGF4FNfnCwJFXuMRyxh1TnkC1WyrrmRq4niF3c3SiYCrRRk1R",
  "key40": "3K9KjpEyPj1ypeXSi98BA3Rd5vkY2rHrw45Dat6sjxu9uZD5MsLToKguyH3UfuHxna6DhLKCMx28Zspe1nM3u8DF",
  "key41": "2AMewgxeDbMYNNAY8bFsUPkteiZcNSR1NaKwwQDq8bfZquSeVLU5tPCRKpPYwgM1eDhqGxTSs2XvwwSKf55aJzTh",
  "key42": "5CDG2vnyBUEBeT1iQEHQGZWPDp2YeQw7pjosBXuoVwMg9i9wSmFVnYswENEpU6voy5cAe2ddUY8XTGHnfM6ttdvh",
  "key43": "5SUMSnkcEcUbRR2mmhYkFqTgzTZ2jofB1Nh6KeMMdFmWpj716pRSfRGjEFvmyt4A3SYDKo637A6bUjqYvb26VDZ7",
  "key44": "4YmjLqWrotfqR2Eto3hZJzUVv3xBNwoCjXSqgnMKkwEtv5Zws8xBb8xzW4hcA3Rg4sNUxF1rohRUfvFSmrgYyHBq"
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
