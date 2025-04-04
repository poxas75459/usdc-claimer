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
    "5QGpB9gtWW5FfaeMUYFhqKFE8QYXwomhsKy87i7B5ZcBJBUFEsuzmqUHYHWr2Ta6jAiSAQ63khJE4HtXgSuUq8nP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MCpNAxewZR7PbiZLM2FBZxm69EkfAPTSuyY9MnVKmeRHx1KaRJyDwvdp1uyZ87yc6N8FJAe4zr8vNDX6YYWcJTm",
  "key1": "5SDmq4en4PfT4ZWJZGtpHAqFkAD5dvaxfCj7zEbeaZw98dF2WbiemihJeiwEpHy5mmPgd7dACGcCx4xujZdaZH9E",
  "key2": "2vnhmVm851Mvh8MWsveMFCnfVNzwU8Ss1pSeRKo9N6u8iu43qMxLqX71xC1T9dthTi9ZrpXJXkLrkV8H9obx4fP7",
  "key3": "QVmrgFVwfaFMGZGwN8DrwcBSC2QTqtXo1z72x6RP2cjDTqQ3CKW7X4TMDANHJg63oAeMtoTsbhWUp1AZiupEvw3",
  "key4": "5CsLmLuW8zPoT677yiuYiBS3q1P3GuUYLkSYr4mzgww2BwsvW4SSxwYyQpLxqJ87kpVqAe27aAwm1DyAEJsLRx5k",
  "key5": "2aJi99UdHTFa8kZ1UFoPcF8Po7LW4oyRhcQxLS2iremwBSLBJfkQgaXUtf2S8QWwk7aHfEpyEm2WP6R5DCDZKVor",
  "key6": "2m2BF2yj79pXNWCPwpQBrMGB9nurvDU7QPxzzzqciuZnGSwwSnc5VPRLNSdJJQjrs5dzBstuFPUtXd6ofJgpMzQ1",
  "key7": "j5J1eJHprB2g36Qm6fSKngpuRtc6gnbWGqxwBqmGFFXQHW3gqzGFPQv8pxZg5txgoJJGsmqhijzfwVYz6pLSqeH",
  "key8": "32XmtZ6rSU42rAjv4Jq6c7SukFwMySMGELoNCNAJWRqEYeM6WZe4Cy1AACDSskF26P4uWpaYA1UDrqoSD2KqR3dS",
  "key9": "2S6zzyHCB8noYnbcwtWKw7DqnmjTey6Ph4H6Tzn2Hf1fDUoWnAr11Eoo2fuzXsZJrKDDxxHRjGfomVmPKJFM9tvV",
  "key10": "27JPX3nS4oMwGDFYChEkW8Wxibhnjac5sBfkJ9kya2wE1nspe9tfoNcMNcE4feGyHHoPh6nv3cd5VLLLC1uJSyua",
  "key11": "4pAHmUmLj5DZ5JfHWBQv71cUiYZKwWXdez4ecMYyeYcxbJwuGViGe1a7Xg3vLLZx7GLG84qGQqjJdYFVtspGBhDc",
  "key12": "4Z98gT75Ni9MaYh19x6SEnMgLCsfbDoDUBH4834y1PENDBNAKiTjxcBUd98UFrvjuPKzmJmZaqLUXVj4cKYP1UAG",
  "key13": "4YoJe5oRPDT21xraTikb4bUrDaMdNxJBWZSmnuZERs2YNicoYwzQH2YhMwpThUNP4ThDYMFF8VNykBGdsqpsvTfV",
  "key14": "5sJN7oRKPCn1HD5iwVNf5L2xqjfYvdw8SnQo3qyd2KDY7C3vPocrbPZnLUijjRRjr2u7vUdgLhLYM4DgHEiVx4My",
  "key15": "EFJsofKW7a3Y5Trmv9UTo8r2haXVsB3KxSg7tv3YYZiDg1ZXGbSv7EVP55Z1MoH2fgmVGmJuVrb1LVPLsSgtBd7",
  "key16": "4WT4anKtrrfzAYxZY34mv8HXpu2BJXGeSaVtUtLqN8Cp5n5omWh1HsHa5dpEciqSSxcwG6gxBumqPWh8y2TS8dFs",
  "key17": "qwj1ctY6CjNQtRuLWnpVHpqnuAkGbKexsaDJuEsVmX1t3XEjJNcTFkUhZNva9mDuUWBPZqTN6YzW9BngcZiR3vg",
  "key18": "qwvd4ZppE2JJR7BkfdAhnfGtEDJEyfY67e6tdamS3tHaJNSEyRMUXYXdxbewMExsNDK7mBXUsgEsWYyKojzds5b",
  "key19": "4bVV9XBXMdaW7kxpX7JxKSUWfEFKoXS8auVCjF4dHihBjEu87xJdMhSt1rinaSVuvP55hH2WkCPZvAyMKjUN57dH",
  "key20": "TfFvHp1st8Vazyz9ZxNfn3odUt5KUm1zyhE6cCdKzr5XvUgyhxQqvbxGs9MyMnpHY7YHGUzckpdboaSrLDGkSqh",
  "key21": "3ktomhtszUu6jJ9nrqvs41SYCm1gzJFFZYhebVtWphbsGXycU8tUcX6ySLfDZ85euQUAtkBSdZrvJycoNAcsSUj8",
  "key22": "45Fpwrcpo7VqPYwRpqtgTGuNJ5jcUSJWSKBGc7sCh8Q8V2Rw4rPxLqvF5EWDSg3cDeHZkpXh1wLRVJGyDnt4wPWR",
  "key23": "38p5617pmFVfM2J64h1gcz8BzZaboJFwA4KNErHfzDtr6v3L3YYSczdL4LKdhu593o2BupcdgjKRvWwxjWCRW8bj",
  "key24": "VWEWBZidvyLMwrzvi3ohMsJb98FfeCMshwjDgETSnpER4HgvkTpaJkgoSiMK3FR6Wt4tFMNE3cW2DbddUXtM1JY",
  "key25": "58a1xMzu3W4CksRzK14SLjdUj1J4dF5VNVwK5N18NwirKKdfHzbSc627s4GQV8BFEF7jz9MaRxkkRAZTpPPLwUNY",
  "key26": "5kEHsQeHvpdCxqPBCUFfU1dU8HZmvpdvesn5hzgrBB5Pbab4EQGHm3Nk5uPJBAHe6mWRNJyQY6rXRcMVA2QnXVTr",
  "key27": "2pembP2REYXMAcW3pndX4D3h27ptzjRb5RTSnQm2HNkC9sewo59sgqjRrsH6A3eYNyoNJU4fLnci9qLBzjAgHPdT",
  "key28": "3YqnT3KdZvV7KSsQmDuRt3fF1kkAsH2p1YDKcCjaMtL7NQkKRN1cT2ZSFG9y1Pkz8PqH1n1p7SrJVmtUMawyMhbL",
  "key29": "3iXxTZVtXDfLrpZX6G64BNcqqqYJtUqKqFMvtNdbg6kApqei9K27BRg6NrP3Ft2dy9qpRZ8YoZaGeiCQ48wrLYiy",
  "key30": "5FE2KsfksVQg3ofEgbBc9ZG9j5qmUNrTyX8xJmWMkddjUT7XPoW1ZFH5Y1uBmqMjqH7HZXTEtaT75EYLX54mF5eF",
  "key31": "3Ysq2RwKMtV65mU2MiUrdWhR6vLXo6jmSP9NXD1R5L4CSdFgC5AxDF1g1r126RrxsCBmWZ2GwBi2d2MwrHiC8otV",
  "key32": "4zusp82mAow2aAe9K5TmBMQF4vg2okXGTbudp4DEqpWz7esn3kzUuXCBCjmKEFzwuG63DF7xNMP7M2RfGZUDd6jc",
  "key33": "2rvvRiCC1owBDLPbiQxBsMeAkphz8RWUz5Rkoo27dH33r39EqUgrJ9xqvYbJLtimPbUD1WLX5cEan6nXxDuvywf2",
  "key34": "7yfcZ4nJtXN6ZLfyaJenaHRCbJ98YTKEHTEcqJf91yQyzHvPMgGFTr4xKyqQo6SwqemWvLi1nLBL6L7Nj4e3Ccg",
  "key35": "4bvPbvRXcdeh6VzVmuW7EMDJ9AvHbPqrF7BGenvDK5ipvMRK12sVWNgSv4wDA27wMtMdyWW94XQXxBE5yUQ8bLrR",
  "key36": "3bNXgPa4QNrd5dRNM7JEu48R89TXyzR157SiH1QzDTSyLkrHQJL28ALBgiGcQvCXmDvTbSFhZ7n3dws2aj4G5GvB",
  "key37": "5WnyZHap4zJJASxCp6yZFoAztVYi2pEfrcBjZtKJPKN9X6AqyrQE1t4q5C1adQgcMpP28gKQfwkuw82iwN7CG3ns",
  "key38": "KrT8MhDJaZ5XmdybAGCmbSpTCp88Jd3UsiRHMdihiPxVetZn95tfLWFnpgbNhguSgmxjQFiSFCGdQqpreAHmjZ1",
  "key39": "3u1qwVxMDoxhmPSbTZjYwJfUde8sYmdGJajUWGboZGbuo2ZR1VvUQWzbiqFuJS3YZ8KNXTT4YVMXrUeRvTzaMio8",
  "key40": "3kEp4T3PfDRXFrxUF3fyQGaW7FSheZSdGrQbbpyFbnUcb92Wj3AGmL5SsKTRrQjYSatReRpZLEQK8FeM5jGr3uBg",
  "key41": "3MvZhv1DZK3pX67H8X95TWLoEqc79andEbVMUqBt8AAzYWy2gUnVizg2wCKz2k2WXKuqkDghwzvWhNd9SG9oVVhR",
  "key42": "2MavhGNqJezRKoLURH4xchK2ncG8TqdUA43t7rBdKmHpWZa6vAwEAZ83pVm1wp8kigBZyMztS92xwsHqQdbFHxpd",
  "key43": "479qbwweez7fPhM4PWyogYgZmCtgWkF6Qr6oDrSud9HqvN7qiWXNy8SHLTr3K8Kwce4dQ55xUZMEm1VQs271PaqR"
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
