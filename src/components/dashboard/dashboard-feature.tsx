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
    "5MkMNDW74oKNJ1JrRL9rGs78SqmCFrdSJCwxvgnJ78g3gQRYN7b3uSxM8NEEFrQoc4APekw7PsPm3TQqHU5oPRG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fKp1wvajdbfvCjXSEq8A1md7mUT8sLL6CD32CBNhjwMSzUnNgh2Vy94GQ4RG755o9Y6UD41d6GBfQXF3P3dCcZZ",
  "key1": "2vYkneiR2DG5ErLEyKddBRo1A8L9vQ3gPo2dh5WUcDyzEyHCyA6WEzZJgAseXh4mSufG6L9gp5i5coFe3V5miVNm",
  "key2": "2kukkGDPwvxNGH3nhgWyEZYWmt33wj75kSX4UCUhUGoHBUm9pGC1cAom2YtMx26KmLP7b7ZSRwqviWeoTCpUz2cC",
  "key3": "4BUzopRqavtqorZgX7b9WCuR6xDG9ao9DBVy4jsi5UAyZTCFqbs4n24FV4vRjGD2A8bQPw4fadm2soDezZ9pvT8h",
  "key4": "5xwrzEGNVmDTDpVTdYn6FXXGNw8MYegupTGbpxhBGX6VatZ3sL485FUYyXeReQL553EePW2RFs5phEF9f1wFuhfP",
  "key5": "4xJhDA9yMtGxA1oXgTZwtsD8rKd6snURdxL89HLdMSGv1BbvNJ6WNXc9dNRscrnM8oMKXumtRoqyLHQVa9A4axHh",
  "key6": "5e8vSEDw63gjSfc149e67TQjvmBHRgvNmqBqmMU89zfCwrirdSGE9gzE9HANARq8a4ujLxhQd4M2D7HmLDHpprH9",
  "key7": "249euQXG19Z2zfcRjAC58kEUd94iYvB4YWNRoxhaWYfZJqN8Wjtgv2rK2s9aRdoie6vgxA7jj9yJctCd74QmLcUU",
  "key8": "5vxqviTykSMrqEu3qmvDrcuuH1BLXVUpHMKa9JAsiqDFmNZsxKAWQmaEASuXZM48AogxscmCL3iWktUtfYXUb6ZC",
  "key9": "4eB9ikrzWdqbZM3epCRikmHTc7xwRbJEqeXe42buuZca376dx6cNienKsZCt1Ka415mcYPZ8UVfjg5MquCt2XkC",
  "key10": "2BWGq7XjVF9zzmi9R7UprXSvPQzWoedvvRXAF8JP76vg6ARiHbkb3wVUmKd6rNaKQ1yvWWgAWeB9VqCYakzZuvjK",
  "key11": "qJWscoqaXzZmwmr6rrrLeygVFXXbZEX23LfYbWFrfvFLbcPVUYwwTrZcURfurMT9bB6FoDGbubvjXnaCNEg7Nh2",
  "key12": "2QoLkX3QARzqoMBB5RCdz44MhqRdjMAKDwaP5tuobX99V7J4cazM1uPKsFLnHpxiwrDUeoUmiFw6AfgHxAtk1RZd",
  "key13": "3fRmbg3AgVPY7xn6HcXFKUZQpJgxQ4nirtb1ewwDmag3PMpK3qbUCSuPE8EQirq7PepZYEZFAvvFZywAdBW8PgCR",
  "key14": "4mP1uBChiYCQAnBoCK9v2MLy37w5fpgkzsnNzqAbXmKVUdhPdC2eTKDBknhkWQEHcifbbnkgY8T38W3QNZp2f9FC",
  "key15": "3qn68LbY1ojs3LXtm6iXQc8MHvtF9iYkmQGc6wQqp2sWJZqsjGwFhUawV8V2HznUWp6ZCntqU6pQQmdYHypJfcLz",
  "key16": "5xe8SeZzPy3Vwkno1N6VZHLvUyQPHbyZgTScL9yawnHohD6Vvqf5WHNWXiwqSaJh6SNZ6DTEPwVtQiNiTgFUFUr1",
  "key17": "22TmD1tWDJP1D4SCrVxhncZX8GoLDqdJoJmHY82Anh1RRpfuDu6NZJMFRgeZTmH7ZK3PHKtqfpS4DWzeUYsuvwgp",
  "key18": "HpUUMkrV4gQmNmam3p3J1Wmqf6dXwsSbNMsvhjfigVkUGvGtwV7Zpou4PWoRj76S6WtfVNLkYrPv62F1guPP4zR",
  "key19": "3HtsrLpGW1Wx316KDvw94vrdYSBTLz3qF63iNWVYTXQaPn5X6uK4q6ThV72ybEqB3mExJjduR3NXcAJBKAKGeBV9",
  "key20": "3ZmQqYCg6KPaJEBpdwxLnsjVJkNJwe4TZ38duiKfyChvbVcTV2ZZsuqx672ouCyDczS1xxJHiEVzbeBBBnBCGT5n",
  "key21": "3JZpLMz8DLmqGbDTQdftE4HCYqWhMdHrCJ5Mb6hcnBrPvDbXzx2ADPYFrukP3DoQCSUeY4V9wTdLMvMnhgRSkQ26",
  "key22": "fEsbrigcwEi3HayFwMqvhSKtrYQUJfkySnwg69qrbWw54pD5qFcZUreiJkDqauapRSKqcEEQJYsVyAuRZYvQwVW",
  "key23": "25Sw3hTjk1CVWWLxzBxqeUZ2y4FvzE9pMSBENNRsEuJg84Lr9tFKYTRzp6H4N35bK7m3agCS3PNKARr5AVJ5o33q",
  "key24": "R1RWPrg2VEmmffmfupXiYybhFk1z98GUSGS9Y6BUBL4HFaJGqpNNfXCATYrC3T9L1mZGore6CzanLJw2XA9m2WE",
  "key25": "3so2geYLhVgsmeW2V6nDnYdkuB8tzoEHh8uyHuM8nmTMdCXnE4Uy5RgGmtN6ppGP4EeRKLR1kCQ3V7P1TU7yfgSa",
  "key26": "3YmcvE3ykrt2WS8VCd3xCXDgjKUNBjfPwwEGaVwhzyMvWcLkFeqQMWUrEbQx7aqPgJVaKtiu9nv46NBYGYb1Fjzi",
  "key27": "3g1xHutZHxvwxdRKKm2pNff5tpBEg7MJuJGvwWtKgPR5Zch7EtPvrjqKghgH1BpfXsy417jZWovAmq6iqiLKDsZv",
  "key28": "2vgpTKw8NUXftDRPpfSPwivQZp3vnRxa4i71DtoEKX24iA2rCD7HCA3xvQvKdoHcMt5Jpi3S2ncjHjgLxoMZpzhS",
  "key29": "5t54EtK2crBqfJrR1rPJ3Z384wFZ8vRcpYwTDAZENt4tEXbep7JmCx6Q7u1o7ACzhYvRFtRetZriN5XgH1c4WC1j",
  "key30": "4579B6bb5xnL1RecDPECBo45Ep5NVSmAkdWkhnRNFoExE9vEzNAfdiXF1R5bMWUo6rqXvQ2yyytkUTUwZKVCTGiw",
  "key31": "44fgrAwgzNSbHCc383t6i6jvB4BiyYHdCALoEeyu3QLafPTSTa3P7WAxHFtitcsiKAXHMSNhZADskH3PLDTWnxGx",
  "key32": "3YA4XLQEkCGj6dpmqw28wGXMNJRg25me4iVU4x5zeV2EUuJDvdZiDmRa9MpuyBn1BfUxsV7A2SGWo956re5xk3aF",
  "key33": "NdGFmmezmvfKegTaS7qkKfXkHv6nnrvokDCkXNGjE7qaMjhWjkCi7norq1V5SGgrrx5MpCAtLyve3A1kCyHDkPh",
  "key34": "3R1D6BTQrKWxuxUbkiF9iN5HQ6nQEyo3PSLvFm8un6KHkYecMUqt5qKhsHFkiow1HgFRjWYQjsSxiLNstc1a3RCg",
  "key35": "5eyZ9M8xa1tatdVV6gsR35wfJd9GTHsX8xtEv8H2TZ92N9YE6SFsQRFLj2Jm6BWTBNpaLnjeGnByJbo3ufxHy5FD",
  "key36": "51bZunyUGEFfhhvkVhor7G2bj1mvjpE1Gfu1snSxgqrgAuVw2bHWsjFTVqu5Gah2kEWCsfgmPi57cFNcvtiNqEw",
  "key37": "LBXrJDDgsBiUWRwnTvuiP6TYqvuvewqSsZzJEkAGr6S4EVmeX32giWvgiAMq8Ayx5xW7A1RNirMoirWFa3Qo7bR",
  "key38": "4adMfo6bsvbcgu8H8Xr9MFaPP9wdiyJjiMzeax4YgmXKjaadCd5NUYHyrqEcgFux3oUAacC6QfQZto7A2PkepJ8Y",
  "key39": "3HwQnP4Z5ETz6MeMzoNCyFqHmtSDq2SeBubWropG5iNUQtv7NY3fuZv5Y5DJezx6SZD8NLtfVCbjTRuBeTEugf39",
  "key40": "4o1GUedmforUbdeCgEY1qyrsMuN43Wd2gu6qZWMWK3LCdTuSpjdQxCsnu2gd6uR762G3EVPkXPFEiH5GLJUEyopm",
  "key41": "2op4n2WGktAN58dTeiQFeffqhdjjMzAKssG43SfsUc5rjh3dbD2S59taGSHvBFQU5tjCcYJH5twAeN4WJYdrcwny"
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
