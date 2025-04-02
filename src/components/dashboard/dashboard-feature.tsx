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
    "5JMks4GGZJzoYyGvFbfCyBX7ZMBJbc5BLyXhygbM1sJCKhRsv22Uwee8UEbhDqd39BqKNwYn41yJ2swjrPTLZcLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YVsPdBtftmrhkDgk4RcwgNqB6WhkZUCuJ1EpwGheSp12zMH8ybimK8Ra4X3QTtkH3dJ2SqqAkqfFPm8hFBhNTaL",
  "key1": "3ijZGSz4swajZzv58NAswe5UBzsCkgTBGnH4XA4pExstN9cQaXFxvePmR8C9WxphUdtsN5bfL3WxtF4Edrvmo2qp",
  "key2": "5hrbQZwD77U74H4Z7NBkm6f3LLqVEKPqe1dGDosqxFLGSy55i2NtR6odE1cmMRy1vAgKSi5YTF6MbfWagHGQjRoF",
  "key3": "3FKVa1rS8g3E9gnMBJNTjToAdphienkTSuQcmAHby1T1tJhjcsPewgeHvzwHioGuPmRcMfvAcMzXLfLPCtNjyR3d",
  "key4": "2qtPdpUixnjYrCpqJeTu5oUBkvqrBiJveiUMAsyxNSkGy12UdnuYyYK6rkhKFBNMBmE3ZtACoW8emvobMoqKnFww",
  "key5": "267YwPVbewwVgT7Nst7LFWC9zDqEMboB6hD1GDus4teSmFDFXKqKPx4rBf8tPhaJt6SEwAfMieANCpVy6wtwhoEh",
  "key6": "4RwcbmWxAN2McRXX8FeHWGjQscQgfmJkkRmMshwRSdt9z2Y2XWh2mU4tDqg7HdWeY9tK4nYDs9MZm8WhcRyjrw9F",
  "key7": "5jPvmogo5tbHbRrc4Hd6YMbGSsWQUQe7sxksezizEyYm51XyanwXsiTfZwkdVSkRTDuEFAHGMcYVS37F1tHmQLkd",
  "key8": "5TKAN8Grfs75jkkruXoyeo1zE5KFP61fStJ6JyWMqHizraYRs5KoiGuNaJBfL8zc9CH4ij7jGGSVrxA833Jfnv79",
  "key9": "5UeuSTHau5rR1Acj7sJGMoraGF2FS9GQKknUwPtv7iKr6y6TpcQob2mSyZfNHdVc9B194hJ37hngGFJ3dTF6yxdh",
  "key10": "5y7LyMNmnCXR4fRvxrY7UWg7pKFDT6WcKomvjWazj3emmCyehpN1ZDmfFLdgEwiPtSR3Y2NDCiaRKxoYsQxxqrir",
  "key11": "64GunREBizmtqAygTu9WReG4VkEsYbNq8kBmRv61sDTHRwtN2SQUteURMZjpcXfYNqkToCNPqDrVudV6jGka5UvU",
  "key12": "2NhkW2ibjxTEHVvt5kYvVf9R3WUcp8GRUKWgzNBSz385qHM4fmCX2Vx3MjUrAh764KDxA1VAYZYFi1AvXg7eoX7M",
  "key13": "4L1tDYBQDhArL8UvS6hfgwhEYn9amHmeL2YcmeXQUE3AKZCSqzUstRwqAku4U4qsGEY7rSYrSwQ6CFmYk4nGuA1j",
  "key14": "4tF5UBZ24wH4Y8H9GP1mofVJf4uY13to83PwnUNCV1i6CJziuU7y5yR8AsfiUA7VJpv1MrvKDpTSE8gR1Fd5Ffrb",
  "key15": "5k5nv3uc8RpGoNYfGf5gQf1rosRDJ4wpbNy6hKZ35FmyyMqEdmLt8V7JXhqe8T9QN4LMcJMzmfmnZbEDkYdpPjPW",
  "key16": "5M3mAf3bGvkLfAd6rfgDP8FphLML1PF14gtZXChytRbQc2oLeE5BHzeyQ3xyBHrP45CveG2wfZLdVMPtCEdjKup8",
  "key17": "3ddoJmyxqivTQv4Fzjk5a54QCcJZ43EGZdYf9xfnDCWKFCmoGndf7QW1xBC6xjN5C5AKQodPzG9Wh8jkbbESifeR",
  "key18": "4pufjceJd938v9RN5yBmZYhfq9C2umemnsJvjcSf1fYBx5PD9pfN4eNj1Xi7V4hJ7DzzbGQwGkxbADzFsPfsmWRL",
  "key19": "4pj6Vovgxt3etgy9DcaFasEtm29c7c6JV3SmQ4WyWoFzuswfmmvYT8vRg63GxZsWxyVfswBXMHyeyKQ7GrfLiCfn",
  "key20": "onmZfkQmCKYBVTVMnBREXZh7XZ6moycKeRgdTnqrVBLUJZ1XjHNSDymYb3bJwVaxynrcdgpb2NxSXQJSP23f9rw",
  "key21": "4nUaYkGQgoQisnWLhWmmPpnWWsYoZGGjfxKxrALiSkWh4itiQn46bnk8JdxNghCvL4BQEfYtYC8L92WCofakYwRu",
  "key22": "He2jXPv7evc9xx1NVia7LSB71PFX3bXyGNveo2Kt7NtEhxhLEqzFbaZmL9MJ9czzga69p9Sa98i3CJNAbTYF583",
  "key23": "5oT2gwRd2RzzrZ5EQopNA2eCisjxP62tC2AoJKi5jRLuHGupkjhaGHpsFuLvSkS68G6FPUHe2FMvtsN2iocBtbbg",
  "key24": "3S6DVj1UV7AC1NBbCMAzv34WDnWyqHFVCDWsrg7TEg1Xcz3QJLeVVmcPTqMWPyDEUat7Ajb7myPvkoPvqKf64FR",
  "key25": "53EKYPS8twbNotk3QkykdWGRiq3wBFVYgMzRzgqhY5S9oEJnRJ582LnjJxfgkoyThKqAuCqaPUsvXAdxkNy5ZQj4",
  "key26": "j8st893E26mWkwsrF8btpVnhrhus6xojLVUuvm2HjFrJEWKnBjmJjSYfFmCLdPUJrYcw3DRoXvjbNCbjHk1kamV",
  "key27": "5wfJs9VKwmN992ksrRfDgQT9jS1TMtyCYtQKQJPsfqVN5Uw6LbDK642sF3MTrAzAeVL52C2H9XS71xZzTrVYps4u",
  "key28": "kRQ98KH8Jc5chj5TTLCZNeH3cSQv8W7QrJpVnZWReHxerD5i9fUGekELoNe2YGj7FqEPPz1sxnvhLeynQ8ap1qf",
  "key29": "3TYi1Gx1n8tFWgVC1cjFj9ccfXUur4Jdr8UYjkgYuQUizVZFi864PtwUMCGSiA7EYSqnhxmEGwPDMWkLY8L6yQ2S",
  "key30": "66GeoHxcmzhYAz1GWQ3inGEYRFiJC5CPfHiGDGnCAeuE6U7985evoVk8FHegDZ9dbUBa5gZWXbJen2aNQyi1nfAK",
  "key31": "2LUjD6mMTBmFgKDaW6LgsHshNufCYxbcShJrEZDpTDDkH5UdqJC2zHE1ioZ9iHrJo5Ynk3M3zeor2MYLmLGpbdSh",
  "key32": "36cMmcgykQzFJF2afx5UtiYhridMNykv6nK653y6wykZPFAsyhtNJLUorKLWEddV6EYhR6bkxs8Senh3QMStZPCG",
  "key33": "2vSjvTgvN9t5cbtWDS4i3CRwmAtMFZmgS9ukR1UMro6HCehuTAWomcK77RVAGgPmUnnZTzttMDUWQHqGZ3XmcmN3",
  "key34": "5WBzdEsqdNHR3mNUTPEHVTRrXEyvBvCQuBZFRoBRQH2ntNsyHxHWk3ZD6tsTGsH9vmiY6ZxBuvpLaYFYaK7DJKUf",
  "key35": "2r6J1SbMmafxKGyzG6AGKVz5fFKVkSeRFMDrP8Pns8P9L3YQUGrpJ6xrXwBKKCSE5mtKKPXqeoz2Jd6TAyXoKzcf",
  "key36": "2UovrS2ELLUBnzC4gcmiuALu8LdFsKuW5r4B6TVJAhDED9aDe5JEF62MMdeajP1yLLu9Fw57GU8euN1res4X1hE4",
  "key37": "5VcyqKqgHZSCgeuNXac6tyWVMRVWVRGYLmkfidDz3gXLfAFqGsfFuQkhkndBsFEouqyuk92MfRabk76tWYHZ6ioH",
  "key38": "2oGyYFSVv86p3EgAoCDuu9GReGSrHa3JCeCjia85JmGdhbv4CocnmS1Nd83aiews6T7KakUJJZXpwY3WnU6uoqN8",
  "key39": "T5G9pQvTeTrkC2zZ365HEfHLbYB3Ld4hFvEQEpEncaDrMCY47LpoC6hzis91cGKCBFscaUez7R6miuXHv9tJrzS",
  "key40": "4Crr2NAwZ6aGJtyyiLiLrT874AMbZqpxk1hWCcScYmW8mZog3P75GK1uAAFRSK61bRUBzDhkGTaZNZ362EDehaB4",
  "key41": "61xsZCDumR41YMKzCfksyrsk6SdLAhQ94EUBL7TJ6i9ffWJ91PgHsZDZUf3KxyC8Y4pJFKhthN1pQ6GbkjoVkjRX",
  "key42": "4KNfV5PYQwihQfgoHoBXNRPCAUNpCFXRaUBC9rQYjooTVyGDeK2pBiVPk13fjsSANmu8rB7jMYJaYNS9aHqNE2J3",
  "key43": "3HgrYQkzrPYQg2G9fmij6k21DtQ4VVTNzE52sNoZZbGW8qGMXgaX6SkbiAk7TuiMsj8NhuAnaatfkvPvPv6A7Ej3",
  "key44": "27qiW3kED2k9Lxejiw44N57YK5De1YAFYa8miJMaHstXcKZ5hXCe5UZuoKh9945K9PP72Dkvok18HemtNkzoUBmx"
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
