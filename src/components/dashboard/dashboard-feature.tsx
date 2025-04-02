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
    "31gYbuBAqSvFw4bDNxEnapBQotczzQjEaAFSpP5re8Tv5UNhHJ2zk6BAXafqgG6U9uVQiU7AhKxjmEK8v1mCoybc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gc7hYeaLMkRNxtgtqYY82G5FCgd48rauHgpHmut5wQ2pYLuACL8pbybXXZyovUD9Uw4ch66MpKhTU4GJ6ruvj8b",
  "key1": "4VcURD9iYzzL6Gc1KSGJ4Tu65VA2gPQhyjE594HixFvyTYV73X1tuxGEbX5k9AmeR8Qbhxp1n6NvpAaiSfgHGT7D",
  "key2": "h1VU4iUa16wkhiSgM5yrFPxQLmz1EU3Ej98QYwJEJTRJfA4CxwTeg9Rmm9wq9HSTtfFHkVr4xoo1nmshMFjMWWu",
  "key3": "36UnTiwgDzrRkZy5cpef3CML7hfuBsz6me2YNJKMw8mEA44KxaiiKsuvtMQJC1uA4xUZyUVXDha2SryvnX9MdAV",
  "key4": "4DJs2518T8Z1WR9fLPEn3z4xZfJhTZnAT3seoVjjnAQsbef8DefAcQtSZwfFkHyiJvf4J2NUT6xbQPyRaYMA5LHU",
  "key5": "3BS6XzaX843DPZ8y8F8h7FDhqNCGk58Sa79AHPZAxJZQ72LwfEgixhnhMowtApTZBgoYtJYhm663nGpyFcstWm3s",
  "key6": "57SpztmTmZwaCKGc3CSnzPSD83qKZbt1uzSp4LbKz8yD63uTiSuBkanwkcPxVQ4jgZ8CjjwgbWx6Va3CS2bhVrjt",
  "key7": "GUj3AVp47z31PdB5yjv9epANoaTAuHXhUjwTFibX8HjwDDJkRP47ZKRvRNZhXmtbyxzThgqPL9jq3tFEkCqzccx",
  "key8": "4m8YLLGtCGMEQ7TMSRW2aLE27KB9osDdB2bV1pgJs53PcdwMaWdRM7b5ZnrekK58rSe9C2NNxZ4SBPF2qBB55enE",
  "key9": "2Tng1kGacaa94fA1j9vQwULbMbTLuR4TEWSLHiCgzVcLLfFb4suSvRtwQ66oAQPzpa3uRrQ3xXj2w3sa5pToWxu4",
  "key10": "3jdJjbDZCNwv2yDBrq5JPhF8vMNo5sCsGq3vixddrPAGJ9ARVbxQn5cdNQJ3TtUH4RTYtFM3Z5zJWN63JKxgPRFS",
  "key11": "5Zr5FMMg1ozGDVPamjJFFgSCSeyCffsTkUMUnXquTHMwg2YmiMjbcTQjEURcJBbHpaKTAU3n98oJKnZmqhzCuNzz",
  "key12": "5CPX3vZq5EjxQkCxML9rwy3fxj2Jofaz5ZYDoH9CkJGacJCdFTWM6NFgZnRbpSH7Z7r9fg8VKNAdxZ4Aaf5ZmJSk",
  "key13": "gC2FMWVfSMRJZWQPyu4M7GdkmjwMBeq2Nv31687iSVhh57EoUYj1Kjc2KUdj2Q6DUuYdE9pryWBLHUenpx3QJu6",
  "key14": "5E7AoMfA7gpntioeKfck7GKKBQdnqPAD1bwPdWjbmjaw1Z3KxXFuSXhttnixnERHWMY4HK5SHVhm3bSeG1oa4RFu",
  "key15": "5HDQvJMcvDjqAf9ET89pp9SLjhKzDGL4ZzqfKTVQBc5ES6A5v6gz72w6JFQwmv8K3fqTVsdYT4e9ZpaHAbMNjaWX",
  "key16": "mEHqN3zTtAmyE97Cii3nasBhkPmewGPy7unJzzqS3L46g2XR223UYNPdGwJANWZfuCSHxYtYV8uzkm6CyqHvGSG",
  "key17": "3RJFvyw1hGoAFR3GhRTePYnQuvxms22AsBBHXGTU7mWtqWC6UJDoMfbtCts75sceT7NRy391hnraCBAnanTgiACT",
  "key18": "4Q7zT2rrkfoMojHLfheT9JPRcasKhoLbQ7x3cPEzroZ1TXZvrAyTLPR8xDQ4pXSC4HjTWj7CaseueHdGrfGpuAdJ",
  "key19": "y3FYq1BQEJXRPviGHid5Y9sgQmyNfkZJQ9g29Pz4KvDXF37ABwCfL91R53mXMW6TSpb5EMQ27xthmepoA89zzD6",
  "key20": "yCcsbZHdjMaYhsUfUcL18xmpVwTjx5sVPGpwa7nNd2hZ17wiaE2K5jWQK8eC63jip3c4ktWAUN4ehttypcXoDW2",
  "key21": "1gm4btfN83KWBWprsG3EGPdU4yUS5pb657YKK3o31JD5H96vcjaZVeZmjCmUhfmmiWjet7Che7X9s8cwetKJMjL",
  "key22": "eE1RVcHePHVPsKBNsrPsUUi75x4oF5D7KB7gMFTSFPBmjESiJjE6dk1XphSVpELxxe3Y6spBqrFvBE49226kZw8",
  "key23": "32cC32q1ZFdWrUcUfEUAfn7CWzE16KGUNAXF3wTJVJBcpgXzUTYSYZFniR1JEuHm26oh2z24mwY8LhBzXKUJjfb2",
  "key24": "tWC9pBEM5tSE2LczDnyccQcriLXtjGjxRgxH36r4RCNANkugEEZL3EhCVTTjXrDpgetnVGSLSBdLE27AzLjfheE",
  "key25": "3LgtE4zbogU8iVw8kuFATbrSHDLiSc3p4RfMne6gbwWjBrm4GqBDh6o3YERQyzFQBFgHiqwTi96JGvr5WDrL2xZS",
  "key26": "5qAmn6JY46VJmYUsR9Fk4zJkPukLKGm1qi4BGGYpp1BLiZEnKwGrHmvkhtyHrmYQ1g1pYdzxFTSc2kAKzhaXbfi1",
  "key27": "7LENn1NzmboZ3dfjXdmJbhmY3p1uCi4Dbjkh982FjfSWxyt1n7QFSZmxdzSzha2XDxqpK9oWAEwQEF8iSL15hi1",
  "key28": "4kR7c2JSkoDGKRzTbvM6VwNr5TrCtTxDkReU9dFH11xK61ATe38Pnga4RmkL8mEMPgyZJT7cQZESrxZPnc8ELoSc",
  "key29": "5kYaNRTQXe1LpdWT3nR36xGRsXykR3UCEPDcLHrMz9s2hRGy5BJGMbGLzz11AHa4jomB9iZjJz9w9ArdQzGsYWU8",
  "key30": "2uR8qEjDXX1GQS9LC7uscxRpqvY1b3Qz4SKcrvoBUfPvZcK4rXcNDhPuAmSym8zsXQrxXc9YdJ5ek5Zf2qMK3K1a",
  "key31": "4286J1ZKBUSTaNiasVVY3zpcqG6iEfAcis7a4pGDjP1pMDicoR8imK4VuJywNHw2FNAxPZZh3VP5R54PXmAWC3Fr",
  "key32": "2f9WNo2qha68Xc7ejGfYa1TAhixSnY3NiAACWvFW544FK8d9YPu93769R2T6nJg5EoRYvnRxvngSdWsBD5QDpkup",
  "key33": "FtfWjRVSaB2ntrqqKoVEAvQ5iNEKuBWPyQSNWjgk6Ns1SX1i3uSAuSgHcAkP9UMyzj57FB1aFpMNC1hJr6DVuuh",
  "key34": "2hk3RWEdwKZqsCe2bS8gr53V6471nNztbe8ZhU69vsK3J18eLYFPw1G2yFTSbkDv2CLjEo4hzCJLNQpzN9B97nJh",
  "key35": "5bMJ3EL1bHJhaBPbFyEN3jJ8KPBU4ydKUp64GdTnMCKiM4deeWuZdvV8iFHAfPriheyKskPxVvVP89xrABHWgnv3",
  "key36": "66n26Lgga3mQJUKGQ76ACgzrdpLK6FoKYyUmHU6ewZCQXc92CYkvKnnmD8fvuc1EnVMCKnXp122vDedddexcHU1y",
  "key37": "5N5kWrus4YVqwLfcaQFkVB8qCX2x1Nu8uBCjs1be2KqnjdKDa7WJJTtMq2tWkBN1FtHqKgVvwSduTXQ3rhktGz8C",
  "key38": "2eNWG8MWeWnooBmVk1y666R5feo1zw4VJrzW8KrBmB3s8Jx7PCoLz8326zdUj2ogHUr9VdsipgN1L8ucsJiNNDYm",
  "key39": "Hy6VxjS9gkoyH2i4eSFXzM2Jje4niahzUPP8sQYdY7JyLarjeTkn9nz5z6R4Y3BwU57vDR2oCS4Z1KXAPc8ERxQ",
  "key40": "4NQPpxwEndJo1HZCmD23yfeAnaJaTXyzSfZ4QPZAQgsRLwJDanGyNGXunSHPcBGyLT9Qrqaz5U11npzvBFm53DAn",
  "key41": "5kZM5m9wHPUquWbTxhyKq231nF6D2Xp57aNC9YV1dGoSETrzi2dFueEijQmiZjfRRazh8mTQQsAV8S8oVif1Dmh1"
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
