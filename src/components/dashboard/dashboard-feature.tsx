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
    "UwzztFPJjd1M8KGE9NvfiEDeCfgiu7ddPcjf52iVN27mbmdtKdi439ryMZjsY6hnV9Ym8d8NfQiTeRiLT8n4GsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LcRgjxCx3q1avLqv179ojcERfw9SN33eiKpVhQ95ZAXQqCCPwqTjUsjeh73uLMKYiFd8M7cUTDuvhkBmjZFiQ77",
  "key1": "4gvmGeoovVzbxWv7PzZQDu2DBRwVG4HgXZpoTgNy9Twgh8LbP38YFpRqVut14uM7joQczn3gBA1SnXGX92ZCtwg8",
  "key2": "2FWi9hW9RyFT3wkhvLRgEHak946b2eaJoeYoneuqZ7dwWiRD8dZwDJnNj8Ku6mfSinBLWEjmhDBi7uSB9mJFYTf1",
  "key3": "pkfMGyZbhcMo1yWpNh8g75D7NQj3aKTNW6TJaPo9o7xZaFvJWX9jQARXiEwwGetFmoNsBU3iEEFPwYL56xBYKcZ",
  "key4": "2ddn2bjqcW617HKo9KyrLxfSxXURefdJGx7tfqtiAVaj3CkJoVg3AxQKKxfY5TkvUDsEAPUyF9ECugmHm4kiF3Cu",
  "key5": "675Tdr3EZJMN6Pd2FpS35wnB6fvYKFmUwJZkmQY4EXkvcCf2LtyHDXCpiMRv2cURpGb8QEGUguxUNjddWra6foQw",
  "key6": "37B2nXmrAMyDmExhNEvKfQ16XZoQV3vnEjgsRkGvVNDoTHkZLDpHR4N2nx8vZeMrCGB3CL4SDMrKuvspJGjLTRjE",
  "key7": "4ERXsDRRTXbgMhfyXAvZECREcdmCEsFVghafxPVszVPFudFEg2zcjm3N3ZzvrtqjMAzKFdkBDshPQbKMaJWFZ8Ra",
  "key8": "32CLz2YY9vqoUmeu2unWks6kCyLHbc1HHaSwNFBdveU8dWkGFrobdR6zh5pf9LXHNFEsQVZrFQMegmP3DdLUNKHg",
  "key9": "AZMVjqmHSVdAWgBfbH9WXNDik4jzr3ai213GohzhmeKoPyQDA4eyGzTkR5Uf6v1t1GQiazF5KCenihyhTXijBhv",
  "key10": "YBeUMsedqbqSJvDQu1K6H8Y6aqySucPCdZpGyLVgBx628yvAn3ip6uVfbgAjLrqC7iCduVLBk5fXnznUnP3HBCb",
  "key11": "6hainpg52aoaRAQoLuBRw5XjRpqv5psGgJ4RcRnQFqzs5HmkMx8pTEww5YV9nDbwUqeGe9yK3VfbPadeNQ49zbz",
  "key12": "4ruSC2YVE18JrZ9PVXHyL6JFB78wJdieCzyvgomr91KdVUytuC5nUZPyDQ8s6uet61cNzrpdtAFypu2FpP2Fm7SD",
  "key13": "64aYqvvWgKZAPaPNgnMyDuwZh3UvstJxG86CnKtYd1dUfgdpRSZELzEULwM7MatyKDNXwxXs5q7nSYWLKD8caGg1",
  "key14": "3Jg8qFBGqS8Jt3o28AnNWtwq8L7dY9acpRncCvwhCDjYNKobNv1jpEiZRJiGpN7wkX1fKgKTSRh4chtVwK9PNzWd",
  "key15": "28W6YNv2UNVRV1WR3X3rpNMSG1qcg43XPTpgpcS5wau8hhQTKetnwEKBFooPxCQhdwbLYLFWoSzqnH6BWKDoutKJ",
  "key16": "4T4dNJvSzevHP13BQE8nP1taQWiZhSUahnKVKCcFEtnVmDBoJV5GCdPdibSwwmc3ahZPMTU8UdSbbHqNBKzTnMdp",
  "key17": "aEBLzNxe98D8bJMvMy56PExj9VFkm3zxg2FVDYG334AuYvjCKnPW6edHJxUJdxLU4oYdK9Vn5a6wjshJxEw9GAR",
  "key18": "3RQL4oyzS1TgHCGw2StAGXjeZd4ir5sK38iFBVesoeY7MQvMFfAwHK2L5TYBQH6ZUYwg749khob8R1WutypMPZQS",
  "key19": "62PGjebt16f9s9oMaRMCJ3HoPDmERoTHSXmbvzQDrEq543Q4Q4QHgkzVHcWzfPjP6g1J4x5dKYTA2zpqDxnFEbW2",
  "key20": "3tfYVuPyDFaJpnGuGUDh7CDmTAMUChx4qkjL75WWPDsEv5ibX8bFKXieWsRXuxq92zKvCM37ZztpSFeT1ofi5DkG",
  "key21": "w2fgVa8pEzdErqnY4gcrYSMPyRdFF2otBuwf9z5touZM7Wbz4qUeVRRfBpjFAJDcBoeJMwJP5MsnExvLRkpUjZx",
  "key22": "2SeZdYw1GYaFc6dwYgj9iCJBzeBPvxVxf2vJwJRarDdjRoQXjnp1tyHQ7zHyqcSu9LVb2ssDijBAexXTFxbvtkho",
  "key23": "38GHNAS7oAdhZAop5dCcDmXByTbFC6NuwNPEpwUHuda8XA9z6zK9KkwsHkuSy872mqVgYVSEU1W1UhRjNS8Z1Dua",
  "key24": "59gUcg45PfWsT6AffPPhFsETNfhixEtXMz9cz4RXxgbRDFsMq7eKeZCyx1oig1ESNB6QPfL3VXRgFRyjAmEpQE24",
  "key25": "3QPue9fzKCsWhezbdFmtuLfsWVxwabyXSaz58PsbUEKhD2Mkh5KhyBsoUwYTXWmT3LzM9YvSHmJct6sDz7Tw5WAE",
  "key26": "UL7NbFRz86WnjQequKsjHMo3ux4w4QRptxg9Em9D4o7NdP8FJ5v95DSkzRPDpn51wp9rx4YUW6xYxsdudV2nyPz",
  "key27": "2Lgg7pWewZeThETjBdrq6SwJoNxmGqWVmF5zYoCJ8x2KgaJfeJ6w3xnGNBZYEPiELX3CXVWVdAcviEdXcM3sTqSh",
  "key28": "HWE7iuLhp1b9zL7wY8jR6Svfja3n1ty2gEYuyDMHPRrhYXXmgkouZRKAr88bCqZ9RZ65ag7KGct7smBHTA9wpTc",
  "key29": "2awPWiji4pUofUoryEvSgUPNv21KHnJGgcCxyZfnUMJbXdY8bPuDmJzdfmYMex1Ept2edJKz3BBAbDxHEouKo468",
  "key30": "4uiQzhcuVA7Xpo8hQ4pws9XWvvM8xgbnuUvbzXR4B1L7NgZ7Tik7CN1mEdyN1bTx24Lrg5uxMFXpsknS88LaZVCK",
  "key31": "2mSHNeEXQNRXZWpjanqeD1Wi3Mt4g6zasR6nxonP2rPH1UEeSZYD2u6kDnj5UasE1SRgUjmHjmyMM65M78JxjWWu",
  "key32": "sRZU1SoUVgHShUpCpz4huXUPyTytKszRPJQNkcnTtw9dj99FdeK8mx2RqYbYzSKrbZByJcKHvGk6ay49w6KAJaP",
  "key33": "2YP1uWoZPr711qpLdHtmU6xp8Hx3tiywM8oxYwLifoYpz3Z7tPqs25ucwnhVN9PpzediVT9Aa6wMs2Q7XBbEaQNe",
  "key34": "63jfGVuPYCFLcphFVsTyRCA3ivZrzPMtKJmiCYJEyufR1qmA5RvfsFzsTmqBGN7WZhXMH47dfSHyBJSgWWzD9WWi",
  "key35": "5jQCxLf94DozU9sQmH42B2UnzA2b6JwyJrynJ3TsivoEEMPiETXze1p7YYfLQJajGifsbvNUKcArXbX5VPervEjk",
  "key36": "4RzPCwf4qjymAA4xt2mHC8aintxePmwTtCuedco4YzvzaiqbZSLJvMEPQRDc3yFWLdDbaJcJSEWuQR7pDQSFqac8",
  "key37": "vn2nrxnNaAkpUK5QVa13uQf5BPaKn6XQk6ywWieq5ncuUejQu2Mzrt6QKTJSmVvjCjq6YL8mnNqNvDWr1Y5tLpS",
  "key38": "2q4wMAVydrt8jtWX5Yt9vYA2GfgXNGTFCa4qhqHx6YvMSS16yNgfiZHD21DKZAX8Ac3vtC6EJWnBcYfUVSPGKeMX",
  "key39": "5qskABiVvYC2d48gPEWzhHxQMffv1Fvu9MDvWr2b13HhthBK3trx1qR1WFVokHw1VujVmu3UXosZR2P5rEorPtat",
  "key40": "24XjZxnJx8yacdwo26FJ8zrx1cHtcHTmHjP9byzYJ1L4RZ1mVhwborDBsQeafr2vAjzNiRNjmYATXgEQJrA8xYKk",
  "key41": "2qBi8oQprgv6cSmFWjMG7GzmjdmcxLX1jwSHzjoGo5jkxhBh2GhEMjwGxJodNRj96KB5YNRcCHzrwWw8pcaeiuzQ"
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
