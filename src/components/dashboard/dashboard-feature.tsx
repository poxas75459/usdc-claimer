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
    "YjprB6pZeuiRECkbFFqp1JfmeCGhkc2CmQkJKgqg2B28Uf3MPp66NPdwYnUvo4Now5JZcGucWZU2tEtjsudQLNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49WrNZ6LhTnVj8YdEgyVBejoxrZ4JYXmJLg9Ho3CDznvGZeAtAi6RqNqw7NpZithi4aXfNKL5eicEKrrPZiV6E9N",
  "key1": "4wJVc3dyBNoKzDjnXi3CzcTBzm49FYic4Fd1MgnfxUFscNSFKFQ9ahErbhCSQWNSNu5oXhXmQLs3j9pUzb8YcVZv",
  "key2": "3a9PjAUkfFB1gBKSRGY4eaFR8grC8PaiqeUr5yh72fHi72MwodTXcoJDKM1MD9qtMAVrf5Q5ncCHgzYmoSV9Maoq",
  "key3": "3prMaQSzC3y3U4yyN2bUxVvbdaqDP3Yks6sxvGKwvoqeKZ4cvMQ6xjjTPhMuzuE4Yc8HK2TSekNjDYCnJ5ru5XbV",
  "key4": "Q5uZVVXuHBvsCP19Bhp5cQ4FFcyNNPnWyupdbPcwkdCQHcszQ5kUye3PpsiFEWTxwELe6NeueFWTuAxnxNp6hKc",
  "key5": "2Swj1Bn7YzoKUURdTExXtDVkAiuuJ2mP3kuGEdqwtTHTc9ZiN7Lkdt9wNLymxEq2RA8DzRPbGgayyaoXJdRT96dm",
  "key6": "4jgwJJEZhs73ZJtYEC5FdHj5Mfg3Rq42ZrwrkxmzhMGn5RE8tjJNrfSRKiuEmTvK5fGZ5BpeW8k22mNPKoskmNS3",
  "key7": "2E2V3EQsHdLuzPL6BvvRV6s8cmRvpgMRAHFDNLooWH6H3epLY4GFWZLrZn3vmNBt9NCwh9B7jJH5D1g6utpsiUDQ",
  "key8": "65WBphTBU7TTV94NgnHNuHP2dr5kyhuCAQ8CQQfXykiU7wxx4SEDvNSkHdo4Lr7bmWmnGQynWk4jG6yKS8Qxuz4Q",
  "key9": "2Ddf9W6AX9AsTyTrWvxARwSKgcNSycYSg3Ut5pSf6snbuSAuYdbuzaGFkrm61Sr9Sip7bY3CD8qb2RuVigF1nvZi",
  "key10": "3LUnaybbGcN8RgbhrEk25fWQhV3rrmfZG3PVawhHDewwyZntfJixbFHkZbyf7kM2k5fYz1mDxo8e9RxcfHQR6oY8",
  "key11": "64grXBU5cHi1yPYFDAAByu1zLASfpfULZfBFKLf2mPcpyHo4ChvsJ9LEBHYASq2ZszaxZjwEjPnXWRC3bByiq7WV",
  "key12": "2kv4RGGkPYcX3v4ZGdpKoZQBJ8yc4yfExtCHPDNGDdrNJJS9vPVAAhrwta21gQ8aKJomi7MSiAU5z9xtYyZJSjtq",
  "key13": "4aHWJqwV5WKZiHCTTF1MGsjGzuzezKHnFrz3HdSCZF3paVECDoa1feE32rTxvpTwunxZKFc6pvX3JXnpsADsZ2id",
  "key14": "3LDFKPT7zmskcVNJ9Yo8GB5KoqMUiXLZ1M7xsSmiCiHcaLEB387zTXAbL28dpcyDXiRAmop4u9HBukiqGMyF2A3s",
  "key15": "61WRJXL4LzJPdifQK5ubxi4tPsWSs6bkHvYE4sLbiCZAkYUCwBJxZevQ7xq7ww6GMwnDWL9S2cvhFNy6kCuPabyZ",
  "key16": "42nShr2TiFMKNzm8uRxP8hXPtFwUfr4YzmnkAkK7uW5fSpoNUzUbckgdMc1Fzk8K5kGZ4Uu232BFFEk7VcK7JboG",
  "key17": "3gSri2pAvncC8MQfwSptT87SEz8qZsGPSJFSeExCMBCw2vCejKM8vXpEZ8YXcuVpJFooEobV6qUqyi6ALew85Lk4",
  "key18": "64KjNhp27kRvPRxJEoj1AvpNMkfdgXNxXH8DChY6hJxgs3NkYvgmZ7q9HZg7BFWp3mw1YKkUnnW2PUzdiTf1sari",
  "key19": "41Ps9EiDNBR3Qpug1vpwhMK5YoJiRTjXR2npyT1omueRF5uaBCsVyJCjUsFhhWHqL2TtdLCmBAssCKhd7aUkwSC8",
  "key20": "4qfZ8w86MVbbjt34CiPRwJzBZ5gjyUSpeMSNrtz5bNLQpScu97vmWFCLJmTxDevtmReo4BZvUbUwdYHTzAHMPDbY",
  "key21": "26rq9D7znKMGEZRV9EGYp2pS6WgnAsECLHEeGsWW7c3pd5DBuh3ScDa4aez7uu6xkyDHze8FujfoJdJpdw7Ck6JF",
  "key22": "2YKNEizTZT6YKo9hjUx2Nvr4xzfdfzjm31odSBDS5eBNW4mDQTSiaVbgptYyJgziKZhZfaN47NokVknxs93YNBzh",
  "key23": "5AcLQv91r4CqAjHttAxzmGosoQJiDQWPejrJidZ9SsMyJ11XLQj5VT6nhkWD4vUhAMAzgeiQQydx1hmY2gr6t9EM",
  "key24": "FTTbL4fuvbWhSALs6D6Beq9dSsvvFvUJU2Qxpp67tPuTNgVPGnAXD6yJRJVNYkBSXjAEAcssztTJQ3tp792PYax",
  "key25": "4XTN6vkPKBnA1FFb3yzYuERZzPrzzCb2oudUzfr7fNNXnZWfBdBDhZf2sNkYUpNWgJpK9HCRu28YShuy5fNa4M6B",
  "key26": "4RujPrmFKwWLukvzbyJmAL6P5b4EVyfTUFu8va1U19Eqh6LD2Y4b8EFMbsuXziGjCf4dqS4A8pMw11G1gpWY15n2",
  "key27": "2MWU6BgvBXc7BYyjWpBKgijEX1TQT5T7nXZL7Epn1xFwiKtgb2RxVtai9VupxAW7KMQE6LjWcnXHaQAE7xfZYBn3",
  "key28": "56tvVQZZjxNkAzCrHbA9fNSgSyJ6tCztwKAW2x4krWxY9KW8K5vwFXrDPvzeXZsRuLnWRxEf2t6WBebfBx2oja75",
  "key29": "2VytgT2gsmy12DwKMgQiLDkrpAHmkqCM9LftNr7hZCyFcgKqwoYpp8k2S6LhrM7PL6kQXi9MH3MAx3CM8HBETUJj",
  "key30": "22NNz9Pim5wNnuL2cMsRnkcvsF9af5xT6DizPJg1eD1dBzZ7zoHctXcXPZduJQfMhT7N821okB5TzK8gbknmetnB",
  "key31": "3xpTQMa6qbGqNa7aciydMp2J6JafvqDYboAVaT8dBpmQpado5FWTSNs2sFQ7sXfzDU75tchgx33xom28BoRg9c4t",
  "key32": "4xofv7TrnKACC3iBQtUoyfxx44itQR6ZBz8RSqXGAshNQFukG45tLgqjhhysQgxyn97LWN19hSFbJxdmMj9bZqjX",
  "key33": "4qEmKcLushWrBGGg85qBuN1EXD3qd4px2EPccgtM76eLQcRB8ES1DcUAXr7RQ8aZ91DmRMx9aVuoUZAKNce9npy9"
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
