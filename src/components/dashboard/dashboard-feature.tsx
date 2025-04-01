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
    "4ppH5hqAGiRRdRe4SWviggX5DqQdUPMvKsEGQUc1rAeDSfENCKvFDew8W1xkfhV1Tfysf2UqFNxhUYVwvAt8BsjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56LkErLNgh8zZhspNtDg3EVRbYKQ6wtBPjEvuzWLpnsjbWaTuYf1i7Xoi9ds3CzGr6ran1CiBUvaehomXxUyzoQQ",
  "key1": "4diTVUrFhbSkzonbykjQsxYm7Pemz62LEvyuXMgP7rbHFV2pZKedtGj9qQJVUyb4SxQSLRY3igYLdfF3bGNuPHtV",
  "key2": "KAkKZp42frTvpikWLbDfLqqXki9SRWnhj4N4mTBKXA1wyosYs1FcMZ9wcQsLD7eoLM7feCd682pErJxsrcH7CSd",
  "key3": "Q85aCD4adt6D4YK5Vd4BAJTNLJo2J9AE3M5oaf68DeKmkHaNgSGFcP6ufPQvEh98qngifGi4SSkbNcRB2Lb3NPD",
  "key4": "TL8C6cv6xZm5tbBCfdtjPYus9zC1fKMDSEJnBSmKxiSiaS6QgjRigSZmPXi3zT9VW5ywgTrqVDhMr5pse29C1vZ",
  "key5": "jYZEQrHLKT1RFDcvSdhn1xzjHFB6C4XKtra8XKdV3ADfyMzLqTmswnG4tquWTqM4qkrwswKGjt6UUqYXgGtXjES",
  "key6": "55wUNpuriTgDLKaWGpvuPAZya3k5o6yAj1nACDDGErC7QNGbvA6Z2bBaxRZcxActnJp7hktVrG3Hkd4s2SuTisCd",
  "key7": "5wAQzZb6tuRKUADyXThP2vRAKrnyDvS8s1sZbpWqiiWtRW5Jpq4DmkCaCzi3Mb8VJBrnWQu5VLWLxamtn5fdfnxN",
  "key8": "4wUsddKPu17dYejYYyWfAHar4Vz2nLbVQ7g5fGJ3hRfz1LSgt9skC49e562Y4L4F4NSwrP15dbx331X2ihKLqyNx",
  "key9": "3aPyyXQeFog5YrwzfmM8cnEYLmzHu4QuFNjgDAqSJcwNDrnG7eV1ZDa181kNmMdsRch4TrMYxip9RvMEtqvhBxWV",
  "key10": "4h8mC8n4Tqz9KA5WQrqZ5CK6SgbRiupiaN4r2nojxBkLjK5n6YJpeeGkGoWb5rAaFh3euE3R59ig25garJK462uW",
  "key11": "4etLkQrr6ABETzZeGtpZeU3mMcBKYi9zshBct5PyTaWUThbzjXAx7LCczZcQrdzucPy6S8MVfDJ4xdDxkzAXayTR",
  "key12": "2H6JgHkb4PWGVn8zXGtMYngYJDyjWzS7jzM5QFmy3xkosXcoTCUV1EKsBpDfSfCwJsXEjpmjya2cjV5qEwznYn9A",
  "key13": "322iWqxF3YfnWhnomsFa1V6wVRUyZ1oRX3rGk9WEPEehdo9YVpwH9Z52behnq3Vk4JdGRWVEDknSVXZJgoedJVDr",
  "key14": "3pi4L6vZ1pwiq2i2p9rW6BABm577LxACdtbu6sNAUg5CfJFEkoK68PkcmnrpGcEPEhVEVEYS52G11S5sgqJPzrgQ",
  "key15": "5FJBjr9utyrN1vv6eY7Bfvw95Qd2h51RhfQXJRjXVyxcazHqo9yQfyAFFUuhJMYAtzbGWsdZ1feQfKUXFs2fBj1z",
  "key16": "4gbh58YTk96hWiLJnpMQwpscaaUEuRLe64TaqUvyTz5zs6dftJp3X2t1iGUKSX4USbKn8Z523GV87F2opjdgoh1C",
  "key17": "2ditHQD1rGPzgHct8kHhNhoy6FCFnCNunMnCtqRQAGVqs4ZCvo2muB1EFWk2av6KiM7LpfSFvzjGQJHwHJHgeTaH",
  "key18": "41sUxE1kpLxm6YX7nSYGyZniks5XwZaGvdoiiqyKUc3KNhP3kRUhJ3FSikCkU5dtzjjfEGEVf5FtzEDkgRQo8VXL",
  "key19": "67i28Yv9DpVVNKFLMaDAtDEqGfPzhiwhNZMsqvtdB92c2KA4oJeZ2kQ1qiyGMKWZcsNdH8U7nULdBN6pgu97LZ5d",
  "key20": "2z94ZpDiSv5q2TdAWyWe16vYdmvUCdXofVGcfxmfmCbujynLn4oBs8tZjmEvEMH84X27qdHWKGDZC3ECNLqwr3gK",
  "key21": "29EyNPS1yH41NKnCo5EKWYfG9KNegYiqQkTNvfuWYeHFm1hAZdQd14QL11wGKvfSJqYPDLn4A1FuYwm78pvNVeBh",
  "key22": "pkfWoFL7ExPhCPMP2hMGb79xW9beJckFsY9apYwcxnb4he16XHvuY8siDKLzSiY3MC7wGex4W7X1fUj9UHxAZ8k",
  "key23": "5hpn1BBiSnSmZZm9FNgA62CMfR3rqfJG6HCHFMjjPk6kAKjA2JUb53UNWZqP6PqRDoxhH3vy4nPiLYriga82ECos",
  "key24": "4RpbyzXrt3Rr2p4xxWCG21pN1qrfbb8NAf9Myry9WkvFzwyzUqWV6Pv92DTRydQE1eA4bAFznftCqSHNRJgqs51c",
  "key25": "3HMrSMRR5fPFzdDf1X8rFidcJQi7U3ggFsCyLefkjPChsHwMZ7qpKYsJvWZ2fZvj8mqwtifWrp6NdhrrX985MrEX",
  "key26": "3oVndN4vJQUUZsYL79oif3g4AqkSNNcT6s9fZux5jUyXGZKTvF95e9vYZxp4oqo8EmQ7peSknZjpbkKbsBqMgo5e",
  "key27": "dT1XMjyPe31TsLnZyD3cpSqGwiFAYwo2Gd6rUe8dqvB6jSDcQdwR7qgakJEMvJjKqvT25EvkjhP49NmjAb8Sido",
  "key28": "2VgH2gDBxHVTn8gNfatPtaSGUdq4Sd7mnMwDskdRbbJsGubk25QhnzWhpz3RQYneVSNoWa9uMvRHpBtiW8mwjH6u",
  "key29": "2fJk3eBCfUzSQQxFcykYP6mseXxB6a7P8vYuZUCC7M3EyjTvdA9UWr1rTUw2Ufjk2ycCUpjSb1LMoUU6nJxsfdVQ",
  "key30": "5oy8kVjKUUNpwdfqVMrsgCd9FDRsBiiBZXTXme816E53Jrd9Ybgpusz4RQvckYnbzsdigxCa4JxACeS3esVPsDy9",
  "key31": "4J71K55p2oM83XF832WehNBbkUyA7PhpUP5BNSxXjBJibDBrVXVop8FFLFaKXn6xxHhoS18KdDDWbt6G4ReZKPvM",
  "key32": "3iv3dtVYHbCxwbuKdRXfiYjDmpTDxWp7xPPEd8V3X3f2F7tZfJ6X3WTiuNNkEkmhMVjfQGzPbn6UppBUn2byMggc",
  "key33": "rYPv1mKNn7y1WZELmnpyoCUyFfXFbCjAA68Ta5EyKqLZTYF8DneRavPuaNPTXT6VF54sGnGosnRzXbVNVqc3CzU",
  "key34": "67aqL1858t6NafQSvgvrm8kLFSXY8hQeNSCMjy1q4rChJeK4hMEzA7zAKnYr4pxZYKbjZnCzbMwDHyungAGoTpfy",
  "key35": "5KAuEJk4kvWgW5KwLNkZqZtkBu26jr8mDv52sQZbB7jRjF62nfpQJQL4Xqck3ruA1anocc8qD7x1NaLzVG1emX8h",
  "key36": "3zALWNs73uHt7by3Dz5fQcisREg6QWVnhyFM4gPif5gV5a1QKW23R5EjM4uq3EA2bWUjtjJdzY77JAG2Xy4zZBZ1",
  "key37": "3TaB84sLVEDWxsbdfgkMU5BmaBpM7i1Wctrn7iSTUSoJ2Eje5fN9wgcuDXFq7LMepa3fuaASJc6riLr8a6489PNn",
  "key38": "2BduzzKEQELrCu89zz7mM1oQpWVfYio56hC8sHzduzMLr384YRLCEK2Nf6dc4NmemL4f3vzAzppM95tYQpopQ9xi",
  "key39": "MKC4bSFPwirBfJh39mM2FVp8dPpCd7i94Y7owTCpT2xNmrxDR4ntBZFUvkRjaaumBzuGasUP4ybcxsrMcNxqMvK",
  "key40": "4rGVBeeSaRcGd6LDNzeVRQQBepxe4awBLUkNys8VUNJ8fRxrdq5VEtykRe9CNiUyB7hdW9pMjqc6YPCFD2eNyrar",
  "key41": "5FicS3UN6Dgxk4TtjuXdST9KkqBetVyfpWCqNnjf4cAaYnzwpABYPGopbAVBhhHtPPr3X6JmJh294VB6STGsb6LA",
  "key42": "4qC5SjaeCudgLFu3RGQUHhUkQtCkbjYsxuKgW4GdkcdPpA5Y3dxUvSKQoK3FyCQaJxGZmYoYxtXjtyzfnBjkZdEN",
  "key43": "4tF6iUm67zMnrWw9kSLQhnvq3Sx6qXyqBiipY5b7SRXacphDYmAYReSFP2iFLhRs6V1aGUtbxRZsDhTa546ivxtE",
  "key44": "4XqAVuo2Ujvw6QSivkwuzmVeE1RJqhvAg84gbvne2MRS41c7tksjjQPdrCxbPacvxx7PVD24qjTXVz3MUZNoNMru",
  "key45": "67nKo5BFPGccE7FgtaBohNPFsEFxwBNXLBfeCfh8vZTF2KKer8oGKVgchFxCWAZEexh2JKGkhZ87i2DGYVYky4dU",
  "key46": "2XnEKrGVYUuMhWzYBbfHCSpTCuAUZ54nt4Nu33LYGYT5B3VJ76WsLRVqRmainSgvWXuCMy7xGpXwr3ACrZzmJK7B"
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
