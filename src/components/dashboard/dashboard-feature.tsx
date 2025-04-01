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
    "xBPZLp7phxLLWWarfBRPCsGhUhwS97KuHAJimFFdTZtfRYfjCJ9Ftdq8r2NZmA8rVFgxrnYkUQWPGH2r4iuMEAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45UbVdJ3LSaH59xx4K5HkeMee2Y58T7fupu3s6mfLDxuSK1n38CuermKsko2XsCqPpcq9aaWhzE29SzP2oXKmiko",
  "key1": "3e48LDDT5zS41UjUz2C7P4Zv9QoTNyzqJkZwXG7jHFdmZ7q57SiTdFWhZXGQB9wHwXNkD6PbqRPkaSszyCAcgERh",
  "key2": "4kUXBJyYuHsJ3RM6bZJKxW3gH7jv7Tp8Z8a3R34kyR7VLjwT67FU9QfZWNH1rErnWobJaTBMCqCJ41Jv69kJmeJN",
  "key3": "4hCKai3Ehpw2hZZPc3nE6We4uvUykN7YVQNB9C3pqnt7RUecioNhMMau9uCbmF3AbPLVGJMVVUynnqE6JrWS8CRr",
  "key4": "5i2QVbP2oMtoovXPqHdzpGYzw8pcgzPhQd3wFmmLVuidZ2ndEaCCgJZZrBEiRe8gLKzva8y4v84SZZzQNWNB2dL",
  "key5": "4jkquumegPb1ijneA1FaCyinKvkrd9J4grzpkTU2ih5L21MMJ8WS5wkiHaHziuT58PFpyjsfrvahw789YsUBqicU",
  "key6": "3nW6TwEdLRPjPdkqJQoLyYZUvbnSaprrc1e8udYD3xUyG8KV8s59qyAmA96wt5JSQ8Ls3zn8oYFrtJSJpfy7EPEv",
  "key7": "3Arkwmzkew3Yj6LxsPg5amuFjYJyzQSf7B7datLKVHMGyDkkQdwZwdW1NMSA8Ry6CTBPViyky1CvMEbQ8xZLByRQ",
  "key8": "4sM6T41RDmVMfHKjKNe7zdjUxK5bSGvzE3VfBqz18uKjtcR7KT4j4hqPeEXs4b1gBdBuWN4a5jitdnajwPUaHQyV",
  "key9": "39UoLmxcfyDiHWopRchDKTrnr3QgkBXkgVX5mSUAibPAJVmRdEeSco1s9tcs3Z85RH4FB7v1r9JmTqU2XqmW5ufM",
  "key10": "FQeK9wMpLeUaTucMZXR4wPNqygDm4B3WBXHgr39zjHLZb1v3bLE3P3UNGngi448Eh6og1cCRSEwTtuPbogkWQsK",
  "key11": "42MqNHapdpCvHUWx9D7dwTr4zSsfDDfC1PPh7ANLVBM15f2rYnWNcQ8DBgmCNMhn7sTfoccjwQVfaFmD447ep5nu",
  "key12": "i9X1PdX63iHwvxft4GABrDe8iQnVkpbFidqEecmUYk55jMfAVizsJXEkAn4jw9XuFHXR5TTJGWTMRYvz7o8zKE1",
  "key13": "5WrkL4HDRjhaWJnrfqjr6LLbbU7YdGuNamcisyYmxEUWy6aMsdGdwUoCqn7nwLvPyW6qTECjMnE3CDdyKf1UVKCK",
  "key14": "4zyEYLNDBw8xRUndXszr7Sn51BwWFaa95dWoZTSxCUaLNwXb4sCCxd4hpqoqXWMQGoX2uJMG58ZfZjkBc5yEfkDX",
  "key15": "4RfDfjmGrMRcXYMdo83PaoC5VCoPxBSPLZF5nJwNjoRGNXZWW7xQ3F3nDSBejxHqCoWnP3Cc8BBZ6VQfogwK4Y12",
  "key16": "3dM9rdGt7hrFdwisAkPfYx8sDLdPDQqjW1PDKUbKBBjc6RvaTaG5cZ3hvDpSj9q5PHxdWKZaMcWEMUZMqeaEL2kZ",
  "key17": "2fjLCR2uTxXhSEV8GGR1cJ8JMzz2AHSC2E8GzLeMwYoMLdNCxgDSfB48hEvNUoFwKVQXAwQpWfkHa1SuZ5Lu6Aj4",
  "key18": "4LZQPFsNvuoCDiLeGA1dAkQ4R8auSRW3rG3qrXx1fEYf8Q5QyK2dSP2193DinvCw8NA1tM27s6X7454v5Mxn1fs5",
  "key19": "s48JL6HmM16wo3rMEnMZzGJ8qgh8fTCeReAXsLY7hAa5mUpusHyReE7GBW5PxCxpidsPZY4SNvhZWU4NqkwaRAC",
  "key20": "3D4gsv88b7rNgGLoDx3ePPRVCToumyzDHusNcwdyBZxaZPyiwr6D1Rmeb3DPYaLJm5C4p97rMipM5AbFo2jwNkBM",
  "key21": "XAEyS2m1FfYgmn4DT2ZvdvbDBhP83jsRorVLRGhhyJDoHGfFoowJcN3i1xzb1ZnFBuCKhuFhgeffFav6FgTtH4u",
  "key22": "3Q2W4Riw5gRd6QsaH8bL4zMwdm2E5Yf36U6TwuLD8z6FY4UDjerKKSjfnDjzwbdWq2abv5e15DVsa1wMebsFUjV1",
  "key23": "ttvDhtwQ7AxcysWECHJ4b9AMirPLNqaV8ouUwRRqZPDXFPAbG92cesTsxvbDxotnEvRvipAWKJWuV8QEJeVasZt",
  "key24": "66djRgufqVcC8GNGqEw4T8uw2UGf32ukTAFecCZVpXjkJWQqis82aECKNSbR7o685YhCPsQjqb2PEpQqKAchotZ3",
  "key25": "2xkjCCQofxP1b1VPFGkytznYYnyNH4W6txuseaAaiPQscczWtPAu3rsKGZzgW1km2vZ7RYJCBJ91R9MJAVoqruxj",
  "key26": "5KqUXaJbBudARKsaGjBTW632oL6gnvxQK2KpLAFu3RgtctfZPYrFQQbgL9Tv5vDQGR6izYaZ6hLWn1mDtpHQvdfd",
  "key27": "4gwK47rBN8YPaoYD4d9CQDaM9uzH8o4JdHmx5n7ssD18WesuMrdgN2aw2azXm4oegaGsXWTswvz9QLtfo64T2e4x",
  "key28": "5eQZEu9Pnkgk5XfqJxo7qvL3RE4MwSQK4Ja7M4bsEoD5uX3kwyy5PeJmBpZPEuMSh1CxBKq8zY3aJajpbJ6v3KkN",
  "key29": "3RQY1GMujCQZC78osaCVYMWudqyoPYQQXU3Xs8UK2xHxh8N2DUAarib1Xug5km8KQWANEDbK9R4CdPUQXFHJ3CnM",
  "key30": "5rpwpFx1ZUXRQGn3moByyz7syMvwhemRVwomzwWE2MjQnqjRJvmPqnqAPTHo5JCnDHJHnKVTZAGsidjS8gKbdqST",
  "key31": "5oLUGDXGdw6KkiUucjxuSt8ZSxc71vpbUvabLmzK9iWssWS7SdfGVoigd158S5vPSuy9vkjT2wvAVE1opxjvGoYJ",
  "key32": "YL19hyh5Sp1aYB1fDEwJFemyNActbZJDMgk7SVho44QPCMvo4r93fq3DUH8HZbs9wzYSrdRWAHq9ywqtzuXPxGT",
  "key33": "Ch2EyvsgY71VUnRnQorr2276TrsTVtTyEu9oNULKSmxdFeeKKuXDU9Litv8HvGavNhNMyS1FgPvapsvDNeJ9Mop",
  "key34": "2AvD2WTibS8zGHSE71awUJXYgU3TbYQki2rRocGgYCqRgSr2BDLHtYyhyiuCdiW24hPs2BdcUHsu4gtPXVgFSGtV",
  "key35": "43BujZK2SzGAEs8931xmUQK33gVzfKFTpE5bJ8bWmdwaLFsgRc5veoXyDgttiHS5xnmVaEPxBQbt2NXbFJMbrPrU",
  "key36": "4XaCf9LdLPV6tJJMxgn4KuykY4d6WeYEDjuMrpzvanvHAvcfZjEfqT6xuprPCzb6GAgXsjRn7hgmQwnjPX2MM2p",
  "key37": "5qWCxaxs3g68GZjFSBuyKuEkNkuNv5NsQGUgz4XoEvCJ21Zy5AW8FdXN8ksdCEL74yUR3yrv73DDS1VMGgXFQEV4",
  "key38": "21gzXzKZzrtP2akdaPPnRkuiaFKaESv7XUxfouzKRmBmPGsiaToviAZoUjHtyejRQwxKiCBPLRVZZAdREd56owb1",
  "key39": "27PL59bqn2zCUD9u82TeYVi4ADd1aL4fQq7Rw5WJSHheMJH1D88UYyD5VWF38PexquvvPZ8KxCvDrpd1M3UNsVqX",
  "key40": "5BZ2kR77RVDNoEpXWH2L7gscKqqfKsbRWJfqZGZ7naaQXL4n2D1cQFbDDk2ZiAesAgfLhPqe5sLY5TrsdWnYk55w",
  "key41": "tUmKBvqXbZB3J46iDdfAsEGkXx1iZKuzaXZdxWjoYvXWkgDMtMPxr1evg7FHi9rUJaQpRpXVADGBvgezbz7m67J",
  "key42": "2NEVsPJmr2mntYFQBnHqpEuhqLBf5g2HUp6ojZpAHfpK5Bt5ERAXJTQMDszYZ5qD5USvbUdQqBuFDisAQSdU31S7",
  "key43": "3vSaSi573SRZuDW4cNmhrQxuj58fyHNA4hrHdAc51Ht5pZcPRLhohHp4Jn2XPT9MPgPUbor7sGPmVpxf21HHB4a3",
  "key44": "5REnKX4Mp5x61JvhJSDBqk2Y4JxyQRvJMUYMc2fpfzvFXMQfZsXkcPVSksrjWSPx1SdgKaUzpXRyBuMTM3i4rP5C",
  "key45": "4cNkMZbyBpcSPxktMKLvLvuRjTxaxcWbxPX8mupcLeeXFafrKuS6GXC8ENNGWKy7VvNkhfohmJcjsCjf6PAAPvCS",
  "key46": "38ry9jxR43se9XNPRwawjmWK4L4zFNC4mznLpb9rZv5AjzWz6bMZEv9FQ91vtPUj3vwmLTVBmbPiS5tSQZr2epUS",
  "key47": "5kNAt4tgTkBQgBrdM1z4QF6rujBcuXYTanCgdXcgVwHQeHPeHX9UBh8NbMZaQogqhxb2KHziFabsrKd32nr88nQp",
  "key48": "61Tx6E9iVMxfCCze1GN1guPb4gG1E1bZtYUPFgWStaKpocRqF6y6v3jgFvnBNrMJUdzMrfP4Jowvr3Rbpf7TYVHX"
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
