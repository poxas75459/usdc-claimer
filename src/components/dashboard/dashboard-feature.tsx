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
    "4fLCZQoNgesexjgGwSgKbQpADi31a5UgV29d24HkHjfKWmpfdHtcx1Ayv6jREbv8wRW25Un4QEFnQP7UdV5w4W7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65z6nsjPbuRSuRKQqs583yUwFZqUhXwEGqGoNteYFsYzwx4ZTZZLKHBuBvtiYBr1hLbxKxbTVE61F5VqrChTq3wK",
  "key1": "Vdq7y2HEkTTfd818xVeAKntw7xXDWbFDs6FZedxkpuJ1KNgPVHe8PpLJHwJ5P5x8RUq37bUABYzhDHn2fkGeMQy",
  "key2": "493WRuqaj72ozuGohkumPNMLHBbwmwavX6npVBSYk7qbNG5GQ8ij5w3J9NqebCpS1JDsHvcZ3Ln6A9tdLX6dwUCB",
  "key3": "313c2KzRWosTxd8YXrn4N1sUEsWCie79SVWWzPKsrsx1QaRhLRezepUadoJ1A8ZMvGA3QpcJ3Mhgq7dhsk9dU6rp",
  "key4": "2srLGP9CqsCcAkqKUm2uuQzu7H6iXCZbepZyur9oXLd5JBGd9dLv3zDfuvrHMmf5KmGdaeQETEyiyjAFhaP8L3Kj",
  "key5": "3PeXTywRJgbsqA8tiLHGTk3zFJAzWUVGos6kDcmUkkZKewxDgaAQmW4UofW1meyUbumK1mFhfXV4bB435qobUmVt",
  "key6": "ftcqEpi3yASBoXPjHpAKL9kPHZRRzXckJExQ7d52i7hg4SHQmp5R4Xp7hZqE9W6RU57hiKrNn7AVAUbepMYpPNQ",
  "key7": "5DvLMZ9um8idyBWi4TzZwKRW9m38BFQJnWQk14jFbxbbbG7FYMUphA9VD7L1SPbV4hJaKRFvCqtZJ7SW3ENxaRRh",
  "key8": "44CuYpUsCApEbowY95nbXSu3RGrYgsrdKXPf9hUmkgMHCR4oPCeRaGAN8NZ7BFwBhMH5cxcPxfZ3zgZ1sd33TWEb",
  "key9": "hRiJ3MDHqA9YXsDfM9D4keBgYR8qY5vxLGkK8L22sxGkA8aU8HxEGudRnTRRH9NepPpzGm7rpte4xeQoE8Dy7j1",
  "key10": "gKR4KAq9SezZxuivoykSLPDheH2agNSYdaY54StJy72FuCfyzifDnnhTaPzHeeT7AeMsbFjykAgwzLL6ZAd2qj8",
  "key11": "3ZSgPuXCYsv543uSqCXTfZzUJuWxKgpMSqryjoqBer3DCztJUCchya1p8yeFwytXfu2cXr3m8W9h8rhZgheeyGmH",
  "key12": "TjszcvtNSVGNvLvkLuDZUL1jg3zaKiouigNwjvcqocaJyzmxvMpav3fNTpRGrBBbhrPuLPxXggQxRdfbFfXHa3G",
  "key13": "2d84zAHwnH3CrWYjkXFFHUsBrkkKCFPsLxSApePTW9upRzkutTMKhEwnZiw5NutX6APvbTzLwZPaS8rf4HLFyr2m",
  "key14": "FxYAE9KMyQjTo6Q5msn3i4CgrFhe5c4nVuqR1fuvMRukMGf3wW3h8bm2pykcqwkfiA3e49vx96Va3L82mmFuzfB",
  "key15": "bjV15zEs2ytLdu2S3GUfMR5ozUYMtVnt2VcYqfUjkx3SVnjWLjXBJweZn4nGezi5PEA1buNkEgHwesB317a8BkH",
  "key16": "2deteVZXRmSVYCWVh7LstmtaraHqTZWhrSoR65KSDjUjjoykkqq7NqG8uCXmxoghjukVcfi7DCqH3NKtqk5w8r2S",
  "key17": "2byeUsCntycYnTCLGZKS87SEncYBA1fF3qKmb8kXgs4ykXuzJFqrSUGdNVcphzXgKUWH3JPg5j8Zw6wZbYQyJLyp",
  "key18": "5h292Yt9uXSL3yPqfxSMY4JiM2jKRwSzxEPLxEXA3JQGtAReB4Varm3H5MQoXDvp93t9gvDVTDmH5RjBoSvokxT5",
  "key19": "4yh1Ghk4KzfdkWDamD83eefqn6cFs1rN3woDqQHCKKJffcCXXLJQPuUJt266fZFdGRzb184wZWHfNRrujbNQMywJ",
  "key20": "2NarCVbUbTANVNxGkMQ3awUdAoWfyYxSEacDYPmCTf3PRYvpfv4nMrYJ6SE1Nwce1XoUoAxgRw3FFBU5neRwiPbZ",
  "key21": "471EBN8FfMFXVrGvDo6LGKLBjWUEpyWK7vKCYccmk5WuScwjPVeD2psDr7aLzxdPJPyuVw8uzcZhk5epKm7dXY4W",
  "key22": "5h3mGCY78x8Uy3JHD9smNbtnEFs3PFpvHyBzULazGTawziPUuwH4A9W1nzoQNsUFeZLoT1gtDmQpgoyjNH5DVVqz",
  "key23": "3EaZRfeTEPi643RWx7KRzWu6uznnnuJCGgbNriXzUTXf1HaKXxgRWvLXtuGJZE1CzNoDuQfcSY9iBHFzKXyk8qkq",
  "key24": "3zNudCFe6gkju5UHRVYRhZzyYhyYgrL1FGjfUw4KZFrhQsc68LJmQQdjbJmhpJz7mWde86g5QnA4GZ5jkL8BXey2",
  "key25": "5yME1cBycs3hA9qsKm9xWV8dYREXFDwRCegrYKEdCV4hAams5PVf5EUmxv8QLgieGj1SVdhuW3Xj3tdNvsVLoio9",
  "key26": "5pXBS1fCPGR5raDzzS68Z5D437h35Yxeo2YW1vcivDZWa7nUaerCYYRawfQpSRSPbkseByMdcNeMF8xq1o1eugUc",
  "key27": "38nvgyJRFt6qWjp2XzrNhCG64w55uFaT4VhjPZeZLCdxouHEx74AD2Vm1W6fYfeQKsokxtJZpmk8kZmMuTdbmLVS",
  "key28": "3tzGkw9pkBkGigLZ93mZMWSkfpsgRmrsgELpuJDUcne8vfCBF6S8VMzrFtuYm7tGuMjK7bfoekjnJBQVQ6HG5LJh",
  "key29": "2seYZfiieRDCsZZzix1hevGhXtknw8vu14GyGYin1LqMGfEkVy4eC4uvDo9HzwVDeZLsoZUGLGAEaRhi88HTzQk3",
  "key30": "4BojUBMDocQrd9R45TgTkczCxKvYV7upR7DJRupbkV2eiKuYqsCnA1xzYwFZkNWHubaeQvyQYiHVEZ45cT6qZAPa",
  "key31": "4tdgCkLKj95acCaKQawYM1WXZMDtAutx8mHvDHQGK69LyWHv14eQ5LYKRhC9H98i7GphpTJiHkWzrHpoRSehyKd1",
  "key32": "3aP13HXCoHsUoE7mEdY1nwTh8B5ZbDTbwqkNHgf5BHeVz3BN8sBhioLh7NjtNce8Jfoftgu4mxGpENsUgSKxCBkU",
  "key33": "49JtyGLnyhdg6yj6gxpj6WvwaFVcQBvY7rHUjZVa37vAZAwJvQBgAdXD7wURr5ccdoZdkkuKaRimZAqjoRvepKAS",
  "key34": "4umTaMCz6mQb5uxJzFYUTYbnjWjSTF8VLHNckZhGnQyJskEZErdHW1qcmxejFyXhz1uTVZowpNPkE3KnZeZnzRjc",
  "key35": "4NYsnEh1d7iZVK8KNNhX7E9WJDcJU9RGJe353RtSQVHzejuMSCcgc6CCcNMDFizo6YveVDM33iHM4HiVaz498cf1",
  "key36": "VAswTam3zVAKWgUSpm42ggPVZvt6Dcj9Y2Md3DXqHfssBxZ1ruXaQY5qxBGbq1atBayg1AauVPxrZ5iZwLCxECF"
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
