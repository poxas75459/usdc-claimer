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
    "3PF5YgVoPxQjtQ15A6hmtyhHQXAHgBT5uGVKFBCszt3BGHYUPXLuehiubVTqzANBTyMwnc46ogjz9hYudeTspiNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XQXjjuSuEgRDeAQDvazbFdM2vbGh41ZALx9LeeFAFGCR9vMmPVnhyY74AdnnRjRckC8mQhvMSbfck4FmAcUAf55",
  "key1": "2qBiVuzwMVKfN9sHoBYZFHpQ48XKt7YxNfCK4o2e1T55zeeoBap6wETyRpvqG4MMDsKAEiwjFMK8oDJPrfkje7dm",
  "key2": "3as44yz6FpjhcYrM9Gqcv8auu4TBmtCxgLWM7fqGTDqk8L5UEvy2Uy8usrNkj3tNss8srrc1AxCjHY6vWEyEbHFt",
  "key3": "3TXbJjJTNiX3WhbRoAXZb8jVdBeGUfE11omyPDCMu7DNJ4wZy1jCHbvGm5yJyQuApBvZsxU3i1mudE1ac3cMDMvm",
  "key4": "yrLEx9sgLvQo5QD8fBDVrhjJcDHg7w4inw5UpbosUZaiRcS7tNnLRgJ8e2zfBmb7LWdoEdaSnn5W3fum7Bw231C",
  "key5": "2zpGx8fGU2tVqRTYdT7mkYRfGv2rrCygqsfndjfcE5AYHtzzsiXCkZ5EskuBVzwDYVK61Pgxj1eFXTvqkNr68B8J",
  "key6": "3xLn2aovS8q2gBWLN7LrNswHzndS6WZngCyNgyeYsdYTewPDazwkSPh7saoXeyBp99xVb4gcAjYJaH4K4Py8ofTr",
  "key7": "2dzx82AT3UrSifLWKkhanKygQ3EQtreo7U8zpz9HXNdNYKfe5KSKaEJPuTy7bbqz2xS7W2AxuFgjEfjSwJnJ2ce2",
  "key8": "3hGUMMjtjhDVY3SYe7ex2tbRdzHnTjCvQ4pXNz9Vs4auiePnu3kj31vsLApv5KNjAs1jGa5hEdBDGFi4mo2b9VmE",
  "key9": "3tYHsKMiCh2WjVnY5gHi8FHLRMKFsS1W2NiePHKdZQWmSK6ETmaj8J3HCXQKpQK2wYmW72EpmowxbWao5gsroVYu",
  "key10": "5w5MEZDhnaL7aCQgFiGZjmBKqChjQcuESXeta8uCFQirLoiF8esJxHBjYUiaBHv62V2A2ch6JogG5Gop7DxRDzFy",
  "key11": "1u9JLL7X7ZaEKZWcbXmWM83pKqprNnjxGcjQSqkDdKwwPMsdXAiqTf6Tkc9xj8QJo44iV2rwdr34JNBW9LcNNBh",
  "key12": "5omMbGBSwaS88k5upB14gALr757UoMg1eswGX6XGa6peFoQ6cSw1XkXF2Y8nsWkovXY8wVWRGNwFYgqjjSpJJBiy",
  "key13": "4iDDsmgxZNSRnMMu8k6ix8ph1D9pWk5SqpNhJjc8VzbTSCrLZnv8YRwpZvXEMHdCyfigTndH87xbE6jWeLdqQpcK",
  "key14": "2fZSr7UQRfVaPXyzHhreydyudNeHeYDBECsx7gv6To3Vjd77HSv8c4Yo4v6PXXA1mVuamzhiFRLYBkVvcnUhNhx3",
  "key15": "5LyEjSabJRgCGbDCJrxxPV7XGe4fVH2m1JUgLe5XNaYttUQtq6qoHVG1VC3owj8gmea5VUtyaB289BuSN6svPUX5",
  "key16": "4PdmDiPTK5HX5jeKtuehaQ1s3efj97oqQMjhRCaEAccTyWxS7syZNcqhNHstXJmYifq3dC66SxdtLJpz2G1o2Bi9",
  "key17": "4Cy4nXfzFy4nRvYWyYc7T5umULbGdQqZ3xFknmGqPEdzccQWRd3P33pRaoSkGvbkERae34t5WuK6jdPR4Y1BSp51",
  "key18": "3PpfokDREumdqSTzLi2nnQRK4Y1ws1YTt4h3Rvnq5a9U1KARiKER6XpFSZFJV5iHbp54BEAafn87nsYajxmFJddV",
  "key19": "2yABXQdAvtSpZJ1hKFyKZepVyFpfKUjmgrLPiQS1Qrx2xEP9i6GunfGwrWuGSJwHjyL1UYXYpTcqiMETgBQxMcWq",
  "key20": "2KHJFncfSiwj39vVakUQJ8GjKdYzwGUFLNC9hBakHZ4hZ1XywqQAFLqbmmZhFYsZxzWFLCMUJLFQgtjAdPw2p3ap",
  "key21": "51cicUsto1CJjRGQu4pRRUuLRZy8k4ioiHfhF4sRz2Ynw66WNVHrrLWAQwvWMCeynacpH1J1QeZrAa33m3eZKPpn",
  "key22": "3PseDMevNidgbjwLgpAt3KKTaPi83nKCT1g1RZ4Ew6ZrYMUGfd1rrzF6aaoC6fm3xWAGMrenCFrG86uRi1kUFkit",
  "key23": "SRDqDB9x9jh73DFP39xx8xp4a9U5Rom1QoxN3zds8si2T5YsZUPJs1XwPNfDb8d9jTcMf5LGSVhEdqnuDwBFm7n",
  "key24": "3VcuoBzdixYiV7NeWSxZ4AVKRZHpWDtREsannQszNgRBrXzw68PUicXYXexzAVhqjm4PFN2axvnEvbGC9kZzdHQE",
  "key25": "3kT2kR4Xxktt61H4jvfCLbakb5VhYnfrYgeS2GibSZothkyJ1RCZNC4vLuW49TDw3tZFTovYcvppAoxPguvyNCG2",
  "key26": "2UTh2V2E7BwK6qDmAAKCD7kk16c6Mxvpz6hmXsHGaBF3sb4AANe3bAcsaYPR65jBpXXqw1PrZdUAJZqN5eYBYhTd",
  "key27": "53WRtHa3aLVdeydy5bmCh1UgiuttVzYZJUuTrSXokm13hZg2CyS8iE34M3p33bqAoUuNazpA4qD98q3cWvgg8ZUr",
  "key28": "4jwoqi2Vz9FjFtptxqvSTgarUZSNZh5ubonUUGZiADSSVe48ckwf5qDtRjfEEnmKbkugenWvFa8nGqqJQwpCTd5N",
  "key29": "26YK8sfd7BMbzHxsm4fDpGRKPjiN5qgC5V6ZmufKzWpE1UsLAJmLfhGSyrpvggXnk5GND3uMAZi9mP8iuLps3zd6",
  "key30": "5aV4JoNymvQ7mkcsebtgBoR7jMXfEGJcWJWs88qCBBHbXYS2RXeoTEVWRwqk7G3JTa7hPwv2Wviw6r2e4ufw8t81",
  "key31": "3MSoMEnxL8UB5acW2zgCbpjbG8Z8cLF2KaaAcPoLbHfF3yWG5v1u4QPB6UmYHMCF8ytiMi7F8RxewFWUKukp2ncx",
  "key32": "5zEBAarkjvLVCbQE2QBeTRMbaRi4wrsNUYHYRBmbPvBAYsFVkLtnu6j7sg8EJ81C487An3Y7DuzYfeeRP5hhTtjy",
  "key33": "5Ytm9fBEjApsekeUwJKnUPQS881TEkz7mvbQ7RFoFhPMiv9gLMpiQtBaJFTDDKU4bdtwqcziQwu41Qs73TaRMGKQ",
  "key34": "f8mEkPWFey1gp65i65jA5FMjqmRNenPcuzzxoMyFv136De4rUH22NnCQ9goTphYTBwgZTwijQQFdoZbxzjqzQQz",
  "key35": "5airs9xvY8vhqsQN2DtdRxCMAybnuVc783hdDpSu5fAuYcyTJWnAQQZpaSsqG8yeMRHrjs69E2w8czBZFY1Jj1Vp",
  "key36": "5jvir3UEPrigP7ZnEJVjrHwd5i5ssUSAU2vpYDZpaw7ESVatj5Y1xUD9PAF2ycNSPZTc6qFFSN6Sj6tzkuymjKd3",
  "key37": "4zCAFFbezGHAQkkTwnzZ3L6U5NVBPYp6QbSdZsCNeuJmiPgTDVVqVVyeoMoJ4wcjGUN1dKz9ZgvG5cKFZbRjRBwY",
  "key38": "5eqd7Q4NmWKumrAYcqxbG5KBaSwUnzVpjrsQ6tXLFQW2vPi5ZYJQEAiduwTAHFAQXGJjnZUqiyvrD9EHomvjtvea",
  "key39": "4x51SdWkZEXuMRwAUgBXUGny3hsjmaYqC8SF3HDqTWgr7vByyn85BN12Fk4jswNvJkd97v7x3XiFyyfmvvXMSKnq",
  "key40": "4qbptyGaCKrwCvghLWpWb6PxjsF2brVr6jqe3Jyte6n1NYfi6MajiomNqHvh9mK6w7Vca1g9so4xBderMHVjpGPG"
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
