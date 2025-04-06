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
    "4PQcTxN1m34VfLgTJV9erkGHNi6iQW49UsQLZ8q3U9NprVdztkZi3r1NF8HN1m428edzKxzKWBT7Jv3rbhUhE5Fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZK7djPBaFBm2GdJ2M4uPzHWDEdmZhtxsHSTMWsunYpWC7Le4jjGwJJmRckydszuatx3pHKGUEFdccVn6UeZjF6E",
  "key1": "BPU1ZUx8cGLo8Nsuzh5SzRYkVqrYNzMdMs1fBghF96e8bQS1u2zETyYCurvPGbLvqC7XYLSnPHPKCcyADKLRRxT",
  "key2": "2XUDprth3kNxdjQPnVuS79t2jaayFZ3CBVzY3sK2FA9NYGXFTSyxmF3ANy5itHZLM6f8yQPReYPBwxn8dezifKwY",
  "key3": "5MesZgB1e3tHoQiQPnKgNUURPhi5HxuH18g41A5z4eBd4AGjvfWipMdumqUTvyesBF2eAxD9Lw3Vac7UfDn1gZLr",
  "key4": "2yDsTW2EsbSLgjCmH4ZBk4mmibo5oyqzA4FN8yyCbFn8snbnPf8fmAqssduJRwQXoN9DzuxKT1yrS4JjCNNRsh85",
  "key5": "3xryczC7N8FC5ecYCjbsdmcGWLUMhzeq9oC8N8chHjCGxJahLVM9phVnmZQL9jMH2ApZ9xHYkFmawtsPYvvYoCt",
  "key6": "4GYV4AFuqFHNndN3f9mctKLugX5JebigM7Y1X9Q5iw1pd2FFC3wbhLnSFc7K4sQ4ocp3WPMPzU2QDX7uoLGAypf9",
  "key7": "2eH9CjKxPYPoCNFmY55r11pbUH8DNBjoBtJjXMWw6ch8HEZwRQVHFJSLNbJqrKBHzc58UfpZb2fFRvwcN8petVsa",
  "key8": "4CbfkjDDrNaRXAGsar8bdMSqge5f92dNe4hcpg96UhhKGap1tRa8qVyhmbJ6fsgDNQB2KKAB9effHsRYZkgkn3dK",
  "key9": "3BVh4NdmMrRzGNqpzzpwpZduuvFRCLmfjEp2gYKgVYVwZSoNk5VFsuJYqaxgDkzQwPqqsovHnVirCauEMSe8RL3G",
  "key10": "Sb1g4EvyPYLVdvZGNVcNdW3dAMjZpropq43DrV3ZxdF93fkHx5UVNy8E6q6YY1BP38Zicpxfy41uT8Ct4ySirLS",
  "key11": "2F3LtJKmZvr5aJ7XfgpyXH5WnEo4DPctr9T4cX7Kifwe5yw3USxrQb8QuZuGbzCJpayaUxvuJ7d4gdEcfYs9s3sq",
  "key12": "3FHfVhC5Hx5Ek9g2zmsDnMLvqN2MyeJq4AunJww3pGuj789jChb8G19AWEH45c9HzqWfQpaJJ5eVPMcYuxFftyZe",
  "key13": "5qct6gWBMVnSMH46Uf24dUJ47xyhXUWKbEdcLV5k4AuR2s2uFeu4YgofFvRnhMLBnvkdwgugifpW517ft3p5szQa",
  "key14": "3EksE2CiBKNcxjNR2FKVisKexub6Lypea6QWtnqyGFhzVTvyK8vaNnoQkSsJvXtzvhNESPRA3WHs8knQ32yLpZ6f",
  "key15": "5gBUZh6hWBUFCFynHPZe6U4CNLwJKUVXPGdE8xNgymuwnapi4TbGdtGehUxBFpFfRoynpcuria2SCbSMDTEVAzNj",
  "key16": "tzficsMtDmxNFsV8z62rMhxeXH1j8gGCqWQiGWVEeJiAv5a3BxFHEuohTFfW6c7MvdYYaRVyLyrKArf2yhGCz9X",
  "key17": "R2heS4VZv5cLTBRrkY8MRrPSdLvAikseuLGx5j9rxkoTDtxgKVT3GkNsvaVvFeYnp5eFFPsjiQzq8vxMHmzRa9C",
  "key18": "6189NycpvRrzuAVRKURtv8FpcZpWmgFL5oCJePKJur8ubqv4ynW6ujfjYRWto7BhWUBgP1V74ULDoSZMxtNJNdYV",
  "key19": "53ckMduj9HnTSBBaRrjv6ZMgUkju7w69nwtdxASmSnSJc1NHzCwU7CFq6KSuwEfZ3birMjRMLMcDv95YVprgLDFp",
  "key20": "47jQjvEr3a11evapNh53Pxk9DnhG26a18eLugB9Xd7rd3ihzDiHY38t6GSmbmXuQPnRPBpHFGRi4JE3JyhCR3o8E",
  "key21": "3tHdGiQ9VW1hecNQPgLuEBBzezqwBTxa4LeuQs1dfK4XXsNJQXBzzFa2rf3q4hwaJMorC3BQUCSF126sVVtdLP7u",
  "key22": "5gnc5b9VF5XeMCFF3qwkFebjUteW6i77GtGxMKYUAtGAakMx3kdyWCcPZkDpBZiBR4rFthP5FqxsfVMkX1GPZvXv",
  "key23": "U1t8zWU1Datzff2HLuBmjAV4GDqGDvgbdsUUo5ujRNPAfny9zkB5AZoG2sDnRh6kjFGEDXumnXY79tqv3bPJQ4o",
  "key24": "gpAXhKkYz8mHVJ7VewGR3EfqHdH7qhY3hsYjNiPBi6xXY7Tj7GZDgb4ugiaLGfLPZSmUFi5vFg77GmeQXVXVyhg",
  "key25": "4ZpwtSqR4CpU2JzDMSdg3VojNKQfxDWDSkG3eA3U1WQpp6R3SuMPng52U1JfRfqBaE6NzgnUSsAP1aQoDqQcgaNi",
  "key26": "3T4BkhuQZvScSy8UAtofHwm8BcvCkSGKmgG77xdP1jrmLudpBm6thcX8ZxCN4fRHiFrJAXHtg5sr37CzVB35qEXa",
  "key27": "kzgdD3VVqMb2N4xFTuvjPLJZVWv5nydnVMYP6PxiCdX4eUcXLmQFiEzMzhCcbY25tkhw1YZ2uxU9RkgWxr9LQKw",
  "key28": "5JubkE2zJFtWZSAmKvyASAWbcQNC18ppQRM8X6eh1RrGyU4jmkafgDanGs5gM41y4fh1oBMphi1ozYMNoisU8jSx",
  "key29": "3mXzyiQNNbMR4TqMSGjvkjxbJEUAGithFwbmDVyjuw8V7JwyUVf7Tyd7BjGVaHUGxnHC2KvwFQ8pD5Bzson6nL4x",
  "key30": "3Lmswh1HeqwpMtKDtEvin6ap1uo9U7xwNDnBYnNfX4ffghpTo7F4NS7z9WU7afwFfxVne5hffCvGZVa1M2k2WFTp",
  "key31": "5zuDdhazNwSY9P9FdQxpxaGsFLgbL6qCSjtZZT3mrL3fPQus3K2nqSAtKrr3sdWp99xupFE3qHQ6Te1vvpMydho1",
  "key32": "2tiJCZ5XrdEkQjRPkh5EniuvsPj71HRRzSbBvUv3oH6oaUtSpwkCRgpTdquYaPFsdLDqcG2KvSgeNntSXifzYfMR",
  "key33": "4V55dv115hKh7DNSuDzUdUH6iy64xa3m59UAGM58QKh44v6nmpUiTFSgffBScxGSUbMrv7baZTRhewWQinL6v64Q",
  "key34": "2k7uffRH7wDyCybGzC2nY2vNXvKqDTRWRFhsThbndjLbUrKR3gkdJdw1AQK8cwFz58aDY77PtYS5BEquuGmZ62G8",
  "key35": "3Dsp2HsA4GeybM34jozMUNqVRQPaNp8LXop8VVzH4LjyxKWRFxUaDAW9i45mzWsKpad6r5CY1YBHAGUZL7sexpSJ",
  "key36": "4dJJf5uszNqTLzCsF7DG5EYpimx7GcGJvPULrmj4atAgwoJpzNVGUGbyTQ6dKtPWZxXgFeDTSWZSvRcmLz793Ruq",
  "key37": "45YhFFSk9yL1NYk8K2M1CdZJNPvShPMuv46heofoEJMgDXfZYHbqhf1kNnZKCNcWDR2hh4idAcKBQMWLsvtx4WLz",
  "key38": "2ChzUYQQULPjcnXzD6ainiBDKvWWpo6gpTB7FukQbTwuUSUdHpkNmaWvCsexbkYRjvdqxv36qQ1RghPWMkBtXC17",
  "key39": "XoU59p9rDDCjXACmnkiUksrQHz9UsdwoyUP6qyK9FQA4pVWnyBBKYF98qzyUqu61kn2FGABuN9vzADy2d1BxG7q",
  "key40": "5peMpLc3nMHMWcjn3d27RNvDEzwXmcE7jd6BcNEzgcZrzkXVALXR8hFQr1qFsDfXeTy1UX5NJxznhDJS6t1SudST"
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
