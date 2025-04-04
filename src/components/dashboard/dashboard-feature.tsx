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
    "2GDJ1JdAg8w6CEtVWntc5zFQJYRJbYq9adygrWYrLCBBWcX1jRBXZeeRWf6ZzTwZSwrWnmBDkJowBmbGJxgnH1z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kCnZuUt64Uq8UsrvUH7mqUDR1RvEcw326gHsC4doaxP9FuU3K3tuE1P68pfdjnFLJQzDgkduhDvx2QF17eWUsh",
  "key1": "Zo99u9z8TNgTGfb2MRHQqBDumWBBtAiLsQVwJx9YqJ9L9ov4amGAD5YeNn2NYYkeFw5g59LUpYF9ShZBtSkFemE",
  "key2": "5dhBpoAGQah5wngU2HU2fw7yKypG1CW626BgCZjrYatVLM14ePzjiztNB6r2JT6Qkd4wRnN3N6Xfg3Q9rrz9z8S8",
  "key3": "5pNSe1ayWcj1mmvFAHNkxxxghuWBzbq8SqJEYaNHCmHAbeLsCj8Gzbff4pDpkqGZBJdnM1N3nVUKbzdHqQMmWwzq",
  "key4": "3XfMLepQG4awrDfz1JFExbLzpdp9StDC4viq6PoCxbBSyMPE8KvimQvDVsdXftvf33LL1DFdA1bUz1NjbvsNriyD",
  "key5": "34TnF3Qr313QrDAmKcr2rHopbggdEnHwwfbyf7RrSkVS46jg1QrnAJ4TUtp7AKY8QKGdf1pN1BfXaP2ybmRDqMNJ",
  "key6": "2eFn3HHnRqmUK8qfHB4NBSnRTeB8yC39s4sLaaTgHD6h2vJDxBzweAbTjoQfteSsQX4bhi8kwQJCedxNWSMnWcJm",
  "key7": "32VDdVcerwU9Ty4pZdTjJfRxUr7RDMEMmxDg1uiw7kHKyCoNAaoRa52THsJYDV3NygnGGQpzucJzCb2mtW8SwmNd",
  "key8": "2KhJ3tVynjii8D7h3qggo1mekNQHC8q6EzfHatBMWY3jQESydXx19uyUUox3EbVuuRzk1dcRjyhvsjRqVBnDMCUz",
  "key9": "5FVrjVC49iL3xCdPfjuYu3mwVhq3Usr4j2PgeSUeTngb1D581Afi1r5vk375qtjqgygrDUkt4sqKWST99AaLJv2e",
  "key10": "3eknL3iDpTHLNh12a57DsA8Z5RJLa6mPvTHkjKJh9g9QrJo4HnUXRTtPawLqZXZGih4N6oJedP9ZpuWi98p9rGTH",
  "key11": "3kZUfehXDwz311mZWjK1WXncsY3XipLvcZ8kY7uqCGEkJf6t9tLsR79LF3fKqPmf9hD5NX2FsdpgwNyqgfw3agSr",
  "key12": "39n7HjyGzQVJ98Z2K9iqv2HjzkHLKtXSrb4pSbunp8dv3eLu3UKTBXzQUqaQAfLsrv17xVCrCuVEob7j6iSzciwX",
  "key13": "4s8DvPgvZJYHgMJwVBZwksfcPnCuJcYJhWpGizKdgF3NcxfQ4mmRMSw9qPCG66cq5KpbWaYCVi15TqjbHWngiD8e",
  "key14": "4mZBWF3pHcBQqxtBQr72b6eB2KCM7epkqbd9n6ck2UcUa5EMSQWwWvwKgG3GbPyATEhPFFtgaE45XHmpkCES7hSc",
  "key15": "2aCGqDo4UW13EVUnf7F6jWwWuAaD2rCy7BkHD5e45uks8QXpZyQxbkZPwvxvnyq7DW3fznvtWazsuHyo3Q7fe3KM",
  "key16": "5wqX265Jh4BKcMuF4sSGVB3xG7Uzn9RjnpJ2W9LAXQUbVMjzyqDMn6wGQZU26z5eWfFFBBTdSGMBBymUY9rv1zM6",
  "key17": "jgLcJkcjgdyMo7QLW5Sof5PVVDjA442U39xDBHehs7n4sSmjrFarDEKum3aoZRUWkgsJpLPDQGj2xS9HJucBX3i",
  "key18": "KR5rN2Gj1Zhh6rQpYXxYSz9ByZrGqkMqq9cRMup45PjeKsR8hSDD8sUmTxzcWrYoCPwJtpBaboqwqVrpcdvQStV",
  "key19": "zJMAV89UKG2XRXaByH99xWCMUs1qr8sa2pXG3UKtqFjy9aMgQ7K9k35aRiVFF74sfjT5KBfPFnpDZ2jFpnx6fgW",
  "key20": "3i6HGZRzwYkm4kGdrUkz767RWHqrCA3XJFkTsiNLf9CmNXhukGyjvnEwKzoozffQrjE6nf8ak6HwjELK96kTpooo",
  "key21": "5k5MRcxnyQSXmLung7jj7Gyn3EZULVmnzu1xz4PipnSVpB8oxLkenKp1eKfU8J5vkb1L5MZ5gsSc6AqDaJJbGm91",
  "key22": "4jioWFXKsj3FDKdGJXkRrtTzJcnWz94bjv1bWet9yfUQiaFfA9yVpQwPUMifobjs7kjffUoiG4zBjWsnqposLnyV",
  "key23": "5ZgyCJhC6YdWYTomY4iCfiXNmi8pXD3idh8HAVwhS1fmy3SRwobiGiuxcrx4pyubhutyahc1L2JwMHAEdTcMQHvV",
  "key24": "2AQePUnY6j8ER6SdG1xAyxGeJEyRWPG39eM1p25LUd5zUDknsQ5ZJviwN8pxYENbwsGJcdxtLjPYR4det7edUoAZ",
  "key25": "4QM6Wd6Q6gCva8G8zEq4BB1i7KCUF7RyVymAnu6wmSLewBuqnoYqoyHa7Hm36t34FVkScjg5asnfXAk7tqArBZqj",
  "key26": "jgkYNiUGcEMfzubPaUxkRGBggYSFyvB54HSTcwv9kdc3nGsMiLpJPXpo9z9JpScsiZnGbyhTi9MroJRm1UbgVej",
  "key27": "5qcrRtyBykZpGZr8joXGJSgs8sndBykcufMQLaZxDa9KBPJdfxRfDroFpE7LjKBSwFNkDg9GYHbzr3GpmZ8pZFYk",
  "key28": "2uBXjA4GqNfnSESWVBrURcq7tQWebRhoSx2qMFYcXKaU1ZxWfr1SNhcSpSfXqvzFRVGBDFTZaC1g5VN2jREwhg5e",
  "key29": "dSB235dYmMNkGyzrYqqFsqDDCEtjQtoLxsGnN4gy3cZbWSqWgy1xm4zjXVynz8FYFEE5eRb4kceG7yYWWEPmuFZ",
  "key30": "2bBtjXPT9apQHzAFduX2hXbTvkqibgHHhvPguWEhkHtFBLwg7GTmHhH312ZbJy7TfWFAuJTwvWpw47idHdGrjE2r",
  "key31": "3D4pBjL3ZrrysknvEMvTUy4b4skLXr6DS6EhxjxiVjwPzR6YjzdtC9j5C1xA9cqbtsekm8LUgbo1EEN8boJXRGTc",
  "key32": "2aF6F75eW6zf1sTs1r44FVKfQ3djVFUHoLe4K8Auju31Gcbp7XDnxChbXoQjSdN1SnR7dBAFn8oC8z4pKRXDh6Lm",
  "key33": "5BPHmuA1AhAkJsFvP42TxTD4an3RHXW7QQ9z4reLRTdsiT3tEBpNHwTCDwWBM6fY2U5bKeSdEYFkVbXiQsAQS9n",
  "key34": "3KgRVZwKbaiU4tRJzKYxBgKYYeQaMZKN6FckGHSz2qLd52k6exWwkFM1FWvBKSS8MEhHhRX3nzibsTMLq5CR8LBH",
  "key35": "5BvjxCsm35gVg1ZmmCRn8JnQqGhTVVAPWTDL6XPizVt2Ey8M4g9YdSTUoS6EAzC3qGPN7STGquXm65EraL6U5tJg",
  "key36": "572FGdTa8W5YpwGh7nkCUwp5DUH44bdZKp83ZQpMWGnUfHmqiHQhWo2vCMs3naGSTYKmdAWKbC1LGPpM9nWJ8ADN",
  "key37": "2v2bvkRiFjgKxoAyAQxxzx1YKAMbdChY4CiHPfFDY3n6UMzx5kd19cfeAyfegJFC1eC5JzwoQYfANrP4LiHiSvkY",
  "key38": "2dVdUiNkFKxuorhKQbCHspbmaBVan5nEff5RZV9z3B344xxmTojZVgQdaSBYXzhP68zmhnxXYHoKmgBpKnNLgM3w",
  "key39": "4tgQX5dVkNKZmwyJZ1UaCbdxtShdFJJWbv2auN5hgHRpfHAgkbsDVWpwsFXvXGrTKcQxSVQGd29xt8PTpktkyock",
  "key40": "9Y82dC9Pv7Mb8L1nVmpX6BkZw7ye6cMSnGEbJ5sLw3HVhN625Pgcff7rKdonmCmZHuqdjo34caHhCjgn3j4PBGk",
  "key41": "4yN6A8ZrU8tqRLRhSMwFx3ZW3Ku9eDf1QA5v4TPUKUE4YyRegN4fJb1t4F4PXB4n5Aepao7bmvNYBjNtCPTWXDnW",
  "key42": "3N8Q4LmVAZUHewS9sAzb8r4HdBoGzumqCss2sqGYH5QqmaJkDPXmLLgDiehg5FdqZvUMkAAuyfktSh5SpMqZKPeY",
  "key43": "4ha1hXxdrj3R3kqY6eYeKNUCoqLgKHaCqXXhTLy8FY5cLTpvEgRjfA7k5EJiT1UdfYP9rAejPGFoP9nDyapCSUyE",
  "key44": "2E4McCVkThDfYRCPbSDJb5htzEDbqK7X1jjEDH5dGNW6JgkSToYUrGer9V3kE9jxYA3BqLtRssLoqSnFSdXU3Cca",
  "key45": "2LEPXtDNW3Yt1QaDfpR3UZxaeEzBKUnV6MgED5GXs2T9Li15RYbCbBG24rCNAu7E78dSmZZaVTeoPkg8iJzsqt1N",
  "key46": "4dM1FsqQ1GEQQpwfg1o7ktAvWpy5jzryczGAP5m21gzGiiRxD4j4hLyoaYDYBGUeNnKtiHC39cEXpAzQUuhAqP22",
  "key47": "WF8tbBNY3TJYVUcGamdXVPCqVXhfyBgkoQjhhZVopYek3kQAhAvULkmQHUrX9wnFoL81jPYprG2KvoL7H2opCK4",
  "key48": "2fkgAbjH6rYfPfjji1jkwRF6f4bHmeY8tkvAD9Y9z6g9kEe32UXZ4PeQZmETh76pBfUGFcruUSFduqMNBGzcomsN",
  "key49": "2dFK7HdhqGiFUVjXzUaEAKXZMupuTZaKejoHiiStxZ1aR8nMVfnrd6aBasPkwxe3guoKKCzjCUCnk4wFYqiSQRxX"
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
