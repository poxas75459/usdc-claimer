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
    "1pLhqgFccMs8ykAqjqoRxCGRee88NpnANves3LrotspR9jFB7VrKPxyVCKUB26eTCTJZcAF8RecLiGgaG9ML3ry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Y8neGJx521ufWRRatvEBJ45peM7hT9EPagYczUQ8U3WUQ89QuB3A7RLxsfj98kNg1MKurp2abocxZcp4Q1JPde",
  "key1": "2gdJ5AZeJNr3JdCXVY3V5gJoGiWt4su7K8krS6WURavREdxry1LsDk3tzLfMF7L2rqTbym89yBDQ6exLXFpCLHBD",
  "key2": "2wX5c2FACfVLG1HDCBNjyEBqPXhT2f67xe6xRNYLMq4dB1qtp4nmwq5bun4e6HAVZh36FLFy9LDimxxh2WA67MbZ",
  "key3": "2wXHcd9U4SoNpt6AFk175LfVZLFgmxEZjTZ2stAJpzYnBwcWDYKWiBrZdLx8aWW2PmSNDdfGbR11B49gQmbV5Xg2",
  "key4": "2N4LwFdHNQipvZCjXpKG2tpxq5qDtRRLDwCNXCAe8Q92RZoRXJHMKrA5SpQGuTGKLKJpzhgMwKgybbhHptxrDEGY",
  "key5": "3haaM6aeRGE4tN8un63ghWtWzfYDyDEtLq9FTg7CJgPejRXwRXJVK7mXweDX25B1AZnKu9T6kaK8S3f5H6wCPRVo",
  "key6": "2ghSNvBPF2LBAeVKKNBypkJRtauAeVWMmfHSxoFtuZYAxP8yNYFDx3yZcQawnqsNiMrPtzoZ74axLZAsn826NNuD",
  "key7": "3988zgMmVfx7cY5tJv3vtNzxZxjYucWESZ7naPz4d3yLXpGtEe4UJMFZ2y93pjKpZE37oLdrwUsEm88wouHMd2DD",
  "key8": "5VsoLXR5b69VJkdJLt3mi78BbhF9fgk795hSfyspYYfZdaMP6ZUPwzWPE8yx9W6Hx5dt2QB5evnj72DyGz3tx7sm",
  "key9": "3SKUts1iBdpqLZwbGCPiWQCRREGnmCS2jSJE4hhi4WpoUh6VMxGxNBvfM4b7VD6iCGTAJm1vxaGoGziJWkipGNhF",
  "key10": "5iVw42JstN83ihwgTRiiVHmuZoWgmjBzGhkaKJWUFhCymPqFvoiQYWQJqGbjPLeAGRHBHHCK2gxkzpWiYKN21nfe",
  "key11": "519qw5x5gUDsfi581z85DZVkkdqKDNvdp1FUJj3vfcHwYgryRHWUmZM9Gw7wHCWDNuZfKmX7NNfnQ9S4zFspmUqq",
  "key12": "3WH88ckdeT7bvqv8jB4hMvcpGCcDu9p2eyQe9RVxbrB6cZLrNBnGL9beQ6wh5MitvvwMbgfpRkU4BCsiuk4FNBFH",
  "key13": "2R5LtB1r7bmJy8JFq6Z5ET89uqtesN1fR3HCDmdo5wXF2vk56YMUii3Ku9YZskqJGkx8Emq6dk6FcN7XCGAEggZL",
  "key14": "5MDBsCLeExE82PVNV23ACcALyGWHZxupAMbPQcDYGF7Q2KpZPj8j98KgRPiAFczCcQtYLQkbPSy59TsZfE2XSxQ8",
  "key15": "5Np6GDcoZ5Sdz1YJexDpiYagvBewRFwcrxCaMo3HLQ1ajYUhsdWxaDLN7qQCpSvBwn3gj2fJRt2dcnjmg7RTBaC4",
  "key16": "tBXWKZYG2W9YBF2GX74DXpC26ixto1WnrYHLnYsG19FvPJ7p2DLd3SDFmKNZ32ugiKNV7oA7LsSong8ajaWyyDk",
  "key17": "i5G3t9NgBw7VNEd2kPpifT3BgHroY9enhqH2FVz3uUu1o9vtezu3m1oa4wCFGhexfUovSap8AACyvC3VVnMvD8Q",
  "key18": "wZKqgECMPxaZYNMDx8YNM9B6KRvjb48SsVnwgG1sZWeYaT6erQ31BXcz3RBs3V5yKvYAcoMxT9QKDFDK384sWtu",
  "key19": "4tvVBempWA3rWokBphbuTpgE1V11qiZsTbbrzpn9S7ifmiEp1a1nq97QQycgPTXkryUyAYY6p3szpV6Xa1aYkRAq",
  "key20": "36wpXGqVHLB9ATSn6SfNUVHXBzCkTaaRVPmRrHJc8pGsKSbAVYfFpXF5ozPG6aUJ3uV34mCvGEy6nhFHcmcS5V6D",
  "key21": "44dbMBkEBH2Hmj28GoWmELbATsfN1LkqHi63M4Nw2uiEpqTG3VMDuVrcrxYJ3YAk3QoxFUG8ThUzQ3cBV8bUw4q2",
  "key22": "4KuCK4W4FjP9fx5sSAbthve1B5p1F4y521GJTcpgejJA8Dczh3TD3rRZDvh8a4LKkRM21fhFXVdpBnACdnA4KxvK",
  "key23": "4XaMvkbaYekmM5ygoUkjj8X7rRmM8pafMdDdMxCMdnC4UrtoWLYTUH8VqzqAYDZ4d9Kt1kqf5GqM8Sbdx2coMuwV",
  "key24": "2WpHtf8PFk3uQy6W4iFqzBsNzEbd8LVrGKZJRcn78iemfsBCaN4PWNtHKpVuvHUUjK2qdYf4RWF9qFH3zLCm9t77",
  "key25": "1WVJmvZiVEfmHUnK5MrSMEhaRYK7nETMU7sJTCJDB4Penfeea4ts5cajMAkbxqDtGWRVr2T54YBwEepWH9Hdgvt",
  "key26": "38Rfj5A2KEGZ169JGat1Nimoa2LrqsCi9SKidSP39XypNbQ9HnHd3mDyPsytGBFpnY4JCD6g2ScW3WdnG4H9BMLp",
  "key27": "55uLD559xR7rZWyPMTFdCtq48UuNhy2oy247Y18gqv8NBeR1t6nu8oyZDQ17Jwpj6HwneJz6GsG4SfqN8Ux4sBxR",
  "key28": "3uNbDEY8wCDVi93o8pNRb8D8VDg718BRAnfh9M5fGNiMDaLFuajt6qCzFBwmfCCzJsdskCG1HvY12iWBBtuy2aTd",
  "key29": "5yVq1wWqE6VqakfNHoaa75m8uCZxpyqqDDfLYa4BRZymUF1vtWNqoa4vgG3GE9L3zXoJc8vsTVH6BuiZBCKFBpwM",
  "key30": "48xRHTdkTagSK9ojoRuA2e3HLx6W1uSuAPa36vxJHV5h354cN9yzn8Uwm4f9voZu6wEkQtN4TzpSpcmEWQ3HNbkt",
  "key31": "35QdKoesH22zM2v37X3aMPgxN2hnSwNDmAX4FPdvjjp84NV1TPAC3LivqmpJ1BtkfcBihUsc6HRQFV13yxeYi7gC",
  "key32": "5moVqnK3Ra9vJpF8DuUEdf9YhEtazdivRUZRdnrXoWc3WXPX5iRYhMLZWbeRaUFK4nmxx2UPKDjyYpAASYNDxAAC",
  "key33": "ZgUWfQ57Zo69r1w5VU13eBADqmUr4A6k6LpRrDwgi3VAoXZqeCMPDFymkQksvoFKeCjLwFrdAmDTXfxudvDcL7v",
  "key34": "P3iPMXundBEmzZUmM9Lt43JksESeCsZfGxJ2jDMATkEGwU22sc5C3CfRgM1A6PppfeUkptiegPtUjiV2FHDpARf",
  "key35": "2wk9pnGwSbeYgNqXF4Fzco6hGuejpstP8zU7vsXuK6kAzu7Nup9H7ckbhCUCG8zzPUopWiQu2CwfZJja2oxatJur",
  "key36": "dpYK1WKEutwJHUabLNBhGsBmdEriqPncr4T1wMTz8SugCC6NaqwFzwVJbsCiHE6eHJid1t28m2XGsDJWfSqDPUj",
  "key37": "Ky4TRxuveg4SkN8cZJdxWZZYjk5E9wHrkBs7nYMC5WDNP5622aitVFkFXRcxpP59SjAxgxtZuabJNXxCS4Qe1Fd",
  "key38": "puxJWz5eJd54VvbpFUdhRtYe8CnuB6i3wfsRKAVBrGzqgfMdovjQ5zwRyT5ZveEX6LXKx86couf3jvJwVhjGzHZ",
  "key39": "9CyEcCPL5AkMrLrp7ZV95yUcf61XtjdNU6ivQHM9HhFo5vPzDJP1HvynDpWJQwALGcmmRdSqfqAa5ApGUoBVXTV",
  "key40": "3LAGoMr6XhWXjw8QBJq6ajKhrK7z9dtGj3GCp6nFmLkRb2gQwKJFwCFdjxQKAoSVBta8bX15rtXwibMq4qsHQfmk"
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
