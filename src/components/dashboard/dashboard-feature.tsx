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
    "2kJVzT5wK7p2YWCY5PQPT9y7pLm14pL7Cik4ZMTY1DT3NTzwS8ANYcNduHAVECA3NCsawzj1u2v7XqEbAekaJSnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yrMgF7tKcLk6WrpWJFAK1z6EYDW4r78hh5Qmk8FgYS15AQmJ48E7aHDUjxxv5XQFiYi5vydtYQHBpc8iKaAKRtP",
  "key1": "4vKvNS38b4q2kvBM1ezWSGTmz8fHUtzWGr6SEf4uJs3puMSVC1arHWR4JvWRbHa2QSJDVfAWS16eHs5cKSeTS1dy",
  "key2": "5E8H6YtYNBdaSdTtvCKX8U1fZDizMmCp12SnkLGzjhT75w4YPFL53UQALJgkzPLvA24rStAAirGRCV7gpiezFPHf",
  "key3": "5ZfQdBYoopAJkaS9XZthB4cJXzqdGQjpb85CfJMh88u84Qd6KzHWoRDzANPM3vXU6M5mSq1C5QJBdGPrS5WLh6Bc",
  "key4": "25BE9XatK2sSb4BFFTwAuRFkqz2gyFAxrTwZGRkqx8o9RMtFG4gvVtehDmtbKirqqH2iZYHV8CCzCWs53H2y8hMB",
  "key5": "3baGBYKkgtQ32hbZLDL5AYY2Rty9wUzWFvH4gitKATVtdYnL7xra4GD3JCwwQjYmUp9ZoPd3Rp69jYc4YDdunkcR",
  "key6": "3WizigFdSBWcvSaLeHsNAiiMEzgVEAaLBgMr2eK9GRdznEiaTh6KCWUQ63Gd2SD2n1UZVtFR5JrrxoNGuikcxAQE",
  "key7": "1xsavK5uvHNRDw6dygnvNmukjuUWj8sbc2FKCuBUvwZXXT7iQ1y7idsyRwAVkN92Ls4oV5mAvYT16qKPtUhv9qb",
  "key8": "8BPWtsB8qhC2vJQnLw7R6jZLLXov9FtxZxNRb2jrapLXhJGmpejmxFq75An3Nd7CtKm3tDXbAJXPZZWwjQ6Jk5V",
  "key9": "5V7yUQsiJweTw2u4Z69zgYaqhzC6hBCCisHaJKTJqmjQeJpqWV65VsNQgn67HT1p1eNPMX7N2d6EvjCfmKbvckRy",
  "key10": "4Rvri2DDcbKePby3LDiWnGLyacYrM9yQJUHcWTbJUSPcR4AeTmjr2EvyLFKvsdQ9RRGENEwSQg1r1XjWepeJuaLj",
  "key11": "58jBSnxXRDfBBtTsDFpHpzP4bVF9mWHCkvxPTrXKnW8aiEhWwKfmMHfM2THWkoBDhT4fYdHuSLnmjHTU1NRte5Z8",
  "key12": "477K72ahzPqmyuB8aVoZNwZAL4NkU2RKXY3bxqAkKNpfYYZSVkiJkWg4qqJz3sjnVnfCKBSoKLga92ovHfUtckV9",
  "key13": "5iVNwjvSbTgJ1wErNg8e92q3qtgHNhEAvoAWtGPiLD754fagkcNcqRuVF3Qpc8WimgCWMMnZ1SfbF33iVNdpQAm4",
  "key14": "45HJCBrrBJs7b4TUpADSCHX4HLjTA5q6YvYBKhgxxo759J2Ut5XHC7CCTi7wHJ77pkxjLqqVBZ7ayLFVYpWX3RSK",
  "key15": "49MymSkn9qjxUcLosqr95xXr1WmPmPn47cymfczBCdDL8bVk9nYDHqbzNZCGGGdqvQGTBnuFXrFZtTDwojMqi7jn",
  "key16": "yFKHJ4PEbGgiWHw7XsoLRw7et4tNVK2NWwoU3uXpBUuymPgCKWytzJSpYxt78FPqXwvWCjU4GsfAotphyv8nVog",
  "key17": "26ioRLof59ojRNQodEd54HhGbBK3e4Sio3L7ipdt3GMdjZXTMDN3tkphpwHZ8LdPeMHKBYLPbi8wJytM31QCoW2L",
  "key18": "3G32AiRG9WwexB6DrKWBDyys8zaoeBzaB2w7zhH5sLjTiAdKdxiF5qGGnZcn7kKrwKbkMGRvDehdG8NmXpcWSHpz",
  "key19": "5PA9Dib3eZsvG6ZWYUviGeeBDRMQZBrw661fcxPzLRXydKfYYc3YD2i13AFdx5pkT6Q5kEvsywnk11WkT8prnCh2",
  "key20": "3F3eUQ6G3kQNgbL4uWNKzn3fnZHDFGWTR4xt7tUXvSJ4UgGM4BQbL2TJzgQLwJrHgrSDHUApAskzAJ5rB6Yj9Tke",
  "key21": "fWoHNcbHSLkFQdn9sBWJfuhqqVGtMS5Jefn4LxyhNScDsWFNnG7GNYUwG8hwbaFG3Axh3z72cKFg65mKhHwYyni",
  "key22": "2EsubtxC5qjsJgS2ENggqH8EnqjqYNsSZoghd2TFMS4eKQUo8KjtBwnoknjZY5f4wKy7rBDb8JabQGzGnkNMhZa4",
  "key23": "4x7DUGPwAsTK9XXbMeuuLCxugvTB62xzUS2cgERQ9eJvS3qjmEhZM1SgzAikatYkRBhJkgbMX9AoZryb82zEtvRj",
  "key24": "4udozM1dRAojK9wEXYLYHWzvRtmFE8ZVmxsNE3eJ3azmu6xXDjGqzDvt6JhXrR59Pw7cBeepMUN3RnXyu2RZbnVW",
  "key25": "4uuo2xfCHW1YyxtjAuPhgMz8nJNrSkwpRBQkZvWiuC7FyBFByzgULQBUq35jtD9AresZyzmuqNFgWdA63Z7zPQU8",
  "key26": "4Yo8zrUeSBgPGy6pUb47XYuUeuoTcyK2g6yrpvZ8MfBjkKLo7SzENfbvGXfDxYn1fzPjgxrX6AcDoykPcaPLNx2Z",
  "key27": "31zwUtuVKHk2JAnNmKXCogK3FVNbJTLKv2Z8LtZ4c61qRYTo67fb8L6Nudux8bTcQjQgpT3qHTS7spj7w57hFZyo",
  "key28": "giYSY9CjMSZZjQEUpWTG2ccjC6MLzVkgLWpvY33VFFCWePLCSMfz3dBftHwZmpXF6MS1VMwa8nuy1USnLmh8seq",
  "key29": "3LXkogU2tnRVDiZAucr9dbAeDieYHoavxvoNEMgoUkyZCPPquMuXyZUogrBpZxVgcwnDuRL1LumVAqS3h4k3hXoE",
  "key30": "48tEvQ3H2cAcAWvduV32qGM9KAfuaPARqs5xA3EsUwmVzotvkeXBA2ycJePcaPLbRVePAYSBmuFzPPxVkxxzVtZ2",
  "key31": "3wh5Cv8HcjQEmNXiwANoRmiSsmh7kkVaeDqgsdDTuHi3uLTTmqJJcigmWiAr7MshnijfT6AETffP7KSy91k42u1e",
  "key32": "sqNAJrHnTE67DAJ592Aum6sqSNseQBgu8quF5LeuoHUZMxBsBMYYahtCfs8MNjJyheNCQ8L4AdyRmsuVaZUyhRY",
  "key33": "3pDQ3BS9zw1PtnoCToNAkc8hxmRSdFzDKjzRsMJhWo7JH5HvLJy2LKxuUtdwzGXSCHqTmfNg5cGdnGvceRd2RTE7",
  "key34": "266RcR6C4QryxYrox23p9JvXaNiW32JdhrfYgejuoMvYdj95S7s9NQx7N9STLYdeMi2ZWgAsMtF7BZm6JjDwagJ6",
  "key35": "2vQW4ds8gt4fJoNa3MKEcMu9rNxJ17b2ykQjVdNfYa5r57v6bwVvdkxsQKCMj6pLYma71ufwkNqLgFRnfU6d9ywn",
  "key36": "QZH56oHNJeW1c4wLPJ5gSTGs8FnLoyWbxwdwUzTb4dcuE46ucpKoXek3gZDSvHqDeWqUyNu6o9FKeX4hQ2iCJbY",
  "key37": "4n6YjMf2ZGH4uvriJS3dVAPHmPNG2GRjjUaJpg6jXCvuBPyg2E1Nqo9MQAjWzAFybF3QM3BtcTy6Hb1LMHHzkEAY",
  "key38": "WZYAPQCcBU258iPifiskfot6B1UidDghP6J3FoRm9b7AvdYPG7k3K4mW6ywsopVqqxBtpdvAv4oQqWYW4s92Dew",
  "key39": "w1ww9eYtnw7tp2NojfD1EEtAhLkydLquXqxoXqex8ajuLqvfiG2P4E9Ys3fHUW8z53yeA8ibzUicgwirbniD3h2",
  "key40": "5ZYXjxFn8zhnsu9aG5qYjHMrYgQu17MCpyTgEWPND2xoyrqxDJo71ZaLDbgwQPizAt7aMd4ZdG24UAPZ7kEruijw",
  "key41": "471ePuFKkTCQkiM46QMhbJ5VyTv1EVECZAmF92pXYMqBqnQaj57LMR8wPGwUJwoZEyPRtdJ8ey1JVu9XYGkgat7o"
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
