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
    "5Gpd8KfjLUHRAyZMgswV4rSHVryHwhH51Rn7W1heb7oDFNXWzj4ycr2QwUwPqL8ATk2KmPE9Yht58nWQMe4ibWTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65nUU7ovnJpUZDXDC7hZoAEyjev1p32g73ENnvW6Tz9GRiPHEYmrm3N7ab5xFELJjVs8UotoGBBamxotnyEb5sHZ",
  "key1": "49v9NXXJYQkecx1UiywtPvcx1nBrXzjeYnPukaUCP9dg4srQHtoGmQJvcpKNbPZMJXxzfJqh1biJy4QhWu1frECi",
  "key2": "25bBS4UrryTqymvVZT3Z9bKhr1F2M25rgyrKCfXRzvhMgxPvhbJB7PXtqfLvwwsuT6GjM9dDNRJqx7W8BejxkmgF",
  "key3": "3Y2dJWYHSKuiTBK9AvYh3YwRqm9H6R5h1vraTunij9eHSeW1xfSV5BwK3XrSAZXdXzES6myxLk5W1JrZQzk7Qpfp",
  "key4": "5Qui5hmLMatfuWexiFEy4cF3VBPAthS6n1s2yFb9ugLUoDLQcvn2e9TdiNfm8jNpDnAWUfcm9JL4f3FbLYoZJDZM",
  "key5": "51BZkNz7pLTxnHVDQmXbwiuRHBS5ALzJg3ntFSLwgMzjZeVm9VQ1ytHxsA837pe4Z2YXYkPzBXUAAzMNoqMwcESY",
  "key6": "2cCEMRQXgZddJLtaNojd37hXZQ6YsYafZ99zhBMa4V6raima7zrgtt6McrcE1cTGkeuz3JqnhDswLPcRHWFxuFcQ",
  "key7": "4k2QF9GjpDVAXqZ79QobEhoyGhsjyGoy3n3a9N59ubmvGfGNCMLht98WV7qYovUYfsqe1gL21mDLUFJ5QosAujhS",
  "key8": "12264n2GYgD3xed9yorPXB65LLPnDoe7MZiz1U7w376QWiechNkBRQKBEWbMgVJHxmhLPLNo7SbpitSjeNt5EPAm",
  "key9": "3319dLUnMT7Hjganyo7Dgc9EFU5ZkwoKNiT4ZgFZuKjnvVzx8BzG3p1t2BDWTYHS97BRHt9w6aYFeYH9Zh9Svyur",
  "key10": "4NHFPAgEjSvZFC5V5xdKGuWLpzSKNLY6oaNpNLG3u1azRnUigaYFLCT5HrRU1asqhLyxkgzkJsaXTd3n1c5GGLVN",
  "key11": "3BX9t9cShrAxtSPHcy4hr3X25CPNAYTT3xew63rgaKHeCpAr1Vqq1VuhYS9HsWkGm3d3qafWHjsL7AzrYN4TqjrN",
  "key12": "qziFuqXs7SwmrEZBJx19u2RE61vjpHvA5vL1ps9m6QGxkPUXFZH4k7NpBAymPu7TognBp1rgtCULEVvYF1QKExE",
  "key13": "2DeGwJqhSeCdctogUCwFs2ZoDqbjr9tYEiw8mEQWp1Yi3vwV4DbAKu99rHXWYNYdG8VTdX57xULJ9rpAQZY4HVxX",
  "key14": "59PXaMDYKkqD6tNM8XUCPKjbvHtysoDjtErvL2znT93hG2MUdCnr2ZXkHUNGPkcj6vyXhwZNM1BpBFkJBZFSK8oX",
  "key15": "53Lkbof9jTeAutqV371jLGRd2YkKqkiKCpdhh47ZyMdF5SkXUQb2LGbewPNbyd3aWxaJjiAqqVPuDNHznCHeSuxC",
  "key16": "2CBJ5RsXQG8EVvdiohgZ5mgXw23ZMkqUdVkLfHoRA6ZsQWYJf358JQiPfnXEoaXHY3wPokqofa1rjzgtvVErnFSE",
  "key17": "5NomELWzHUbHEPrYq427VNn4C6oGe9NNByi8PwefUpe4nhyVXVsVwZZbH5tjDqkZtSNtHtUJT5xuERo6NETcRQz3",
  "key18": "4gvFtwYfvWzMzfYJ7q5qsUcqmeHCgZwn6HuJWKZdjsZiEP2ywRmccAiUfbDhoUSe87i1kfqxLeBy1VLQWZyDpeE1",
  "key19": "2njccxSBSjHRjfM3zYaJkzTFpLsBziaZMzKyUVMDVYiTXrecYmQfAQaEeVnc3mCVzvtm62P23FfmeUVy6njiNsaD",
  "key20": "2t4TqVVF1ji8phDR1yQsjLYQ3HJmsFpjENTXPcXtgjRmDo2jMTy72TbYLvdRbtb2JmhG4MCbeUNroRc32mtkeesF",
  "key21": "2VvJiLHZmYHWsu2bmfAZuKtz29LTdN7FQbjWkUGnm3ZAv2eCTLYsjfSopLRW17DuTuVckhHz5eUzRzviPxZvBRrt",
  "key22": "4g6tHbmWnZKvuVwCTmHS1aVXZQFc4kp8DLndb4rJvc96sLYt3qHAviQiixVRFp4sXF4daB77sKxomtGGA51pBdZD",
  "key23": "49dgJ5GkqgfX62X29CWysoJscMKS8RTtzWJ5jssDFja47GEsTaUt6sbX6RSERdsWv5sYetGjE28FUhabjQvfGeRe",
  "key24": "58XkC5a59hR1ZU7zvVrrPZi2BdQvjGHSS7S8NUvxbiuJ61HSqHeAkvFrmsBdvTJusGGZ8obj71AuPaEMYJjgQyti",
  "key25": "J3rVBJAxpbBRS5u3qf5hA4eXGWh8Nsa2tUnznHX7MaUj3dQ7dqCD6dA2MCyaGs4G6ZLHNtavd43RKXTgxshrJ6E",
  "key26": "4LxUfwqyqCjF8mRt5GPgd6Pqro98547LCzSKHnk6B2zvLBmuQeji7FxfsXHSmdFh9NHx3L1VUM1yBqzkmrLHLtXj",
  "key27": "yVs9QBjYotXkuqMUt8TsVi4VqQ4jgrNPC5ZqrqsscYJHLo8ndeRyufYUbEw41WvmTye184xenU5GhhvjGmbaPSn",
  "key28": "c5i4ccsQ4KA2dCxAirZoaj19jB51n533Cf15c9h7tQuV8AQhfHdod6SkL7ynkc7z5s2UqMonrArKt8jpGfu6f3r",
  "key29": "3WBZ2pqidSQtcCrDQYBswX3dUab3NN4uLohCp9FYWUq8rzWj6UDvmgiktv9WYN97Droo7ATjXhP31nrJT1YQq2yh",
  "key30": "2Sqkh9fx1ycUn2oGNgfr5SJ3aPhrS5qn1aG7nLLd7qVtj3S8byaPaDXVb2y8TNjziXp88G4tqmrExP8VivYYP68N",
  "key31": "Ks1DLfm7dzPiEr9fA8MijTv74nqW9pGXRVZy5mt2GNhNBV4Z4nun7mw5na52ENLtzdEx66nFoZTrJtfhLY6tkB9",
  "key32": "3pT8aZ7AbQz2UoRuBkmCjTafBPotqVkkxcYnT94qXYYr8EYp3CymuUPnSwBp8jKgV8D2ZosToccCDUZYSoY2JXVh",
  "key33": "2JQkuQPZyHCik5m6v8gWykvmUnJnTHvvaCcy5ugBAxCN2MbZ7Kgn5H2ugKwgZgscfdrMCpfiADrqTvarVKzd7B4E",
  "key34": "3k8R8nYcYLj8JJwnfMht3WWheaZKZPMpdPeEUkwwkAFysRiJFpNp1hKWFdQcTy1K9KAP6hbboA6ThgFXdU7YkNQT",
  "key35": "4erQ34VPWetRJs6EJhRd5BMfnsVjVGt8J5juZH8Sg7r6aJqFTrfQKQxfVSRwbCu9pn61cTty4GVGTZWpS2AbPxFa",
  "key36": "3KaKjCwAjgVf7GYYwmj7Fz4mo4LqFB4xXvawxYeeWJe4sjRgZMViVtSdxFkuJQwJT5YRdcN2UE3zRSGqog16Yi8y",
  "key37": "3wqo93898dNtqcT2qQGHksJRVPW4QdDbj4rte5WBqHxVpRSYZ2yKFL8xD6NfTjQ3cmEqLT5DhGTa5oxfNz2w31nk"
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
