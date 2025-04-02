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
    "3WjbcQK8NJZqkNeqp5qva7VkbmqjRzHzAUP2fWktwWUPZGvHH3EJmuoSEUMtX6iJ8hSHanPppQy2px9Fxc3pk2ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y6maNeaigFLwcS9Wb4vxdm2v3vBChEgymhQ1feSFJ5cyCtTug9gtD1w6kLRc4Uah32sKJpQMUipzVhRCzpigguL",
  "key1": "4voxZxk2nQmCruF7xGV8M4LQ4ANPbFacgNaYH8nzz4eDCEF7BW4EL22cK3S4U6hyA9x1eVA525fvLmxQsnsqUtGh",
  "key2": "4hPJpvW3XUWi5xRNbkFonNnHK1pYo2SMJxy6gs81gyaKW4LZZsUdhtzf2RNbu4mj2Ne1RtjBc7UWcywR9LnUBouP",
  "key3": "3XeCiusE843XTnpgidQjxErMbzVhcDLAgvkbnVu4cebpY76yqouUgfBHreLZi7nQ3SAJoxCKdSkqRcNPDBQ1MTAs",
  "key4": "4aXh4x1exNzfgJPeoYAQzgf7DjomnqNnaGf3oaT9CbwDKLJCUowQhj6ZuQCFDq5GKg2caQSPdqKD77xiQAAVPiLB",
  "key5": "N1P7NbvaaaaDrxakDUzjhbCGpT7wm87ejE3MBLbwpkCqvgYjvVW4HWxmbi5boCqgrfFoh4bUWgzoWK7vWa328jo",
  "key6": "2NRaU3T95i8H7so9z9TgwLns68WPC4MM6kixUGehRqnCBF89kmxwcESPWtqmHx1JQq4NhyetADBn7bRi6LTfmyG9",
  "key7": "RwqgMQG1mw27PKFQxXpqetvQpZk9iK23keWAHTqApbctZnM3QTZRBjXtuR2BHUxhz269TfTMjjT4Fr77n67eRok",
  "key8": "3Vy9iubwZq3UKd41VjgDFuRqZ5RvjuSNL4YtoKCjwFZdbgPVXJ14M9VYvEA4zvq55n11i1CzcBdMXxghCVcVjPTU",
  "key9": "BQhdspSMKuwwQDfsw8q19YdYFHQhrnZFybsgqormEXAen1CB9KgsofcAoWxcFGFmTGQhWYj6J2gwUR8Ky3mAyQg",
  "key10": "2KtzPsrxhWchfHXRBhV6TSL4Dri1Gx8WGvUDvf1YDAE7sMPRizSRC3BVbtANVXbesVgRjK9wSzMf3oQQp8ARonTh",
  "key11": "5JgKzo1Si7aUby9qJuQKGMLXt4riYpDENP2XWL3pvJ83tXfe6gJSzztC39qdqoXo2QRjinfShVu4LvknDGPyXtXr",
  "key12": "4PwZuyR8RpRV2N7LME6JUeGYtR8cQZWNaMRtzSr5WmC7TevVFutjsQtJ2Z6hHMT5KDm2CHrLaDfNCMPsusjUsnVA",
  "key13": "47KC7GKwrr7tKvjBLDG9rbRPcaERo9ToZGAqcLFwABz5mPj39hVMez2fpaymdLsGMAcZD1fNaYvRzSWp7b3tUhJZ",
  "key14": "5WS7jXNQQBtEaZLjLVm1AadCiuQBa91Y9ZznD5YJCtzf6LkbcHFrT67gHPKfpnzpkAS1ooLJo1S1sD5nrNE4gH3f",
  "key15": "PHSeZ1w9WXBUCEANrx9QsBsybH3fExktiQrXuX4FwDU88ceorSYvfAusGSnNYiYC4wayq6XjRwqPSC2t8huzZGz",
  "key16": "7saRo5DukYRvqxJHsxvd9cy2CNGcSxvY9cihkAqEBKvXJfNEwVyZZ7XtgN2cG6MU1BaC8vkTvhVwPgJCrmHw6Za",
  "key17": "21fwAEmnpR46vVmeBSir5pPavDSfwUwQEAaFPEWfatDwvJGh2fx1HqQTQvKB7gAboRjjjF2XkCBry5Zx6zT1z6JP",
  "key18": "5XyyGKYzDKXVhyGm8NnaRYxwFkdRfaPj3fvPP1qm12mdvZL7PjRU7sosKsN8TqdsRZoKJXpCvMv1KKhnBBuAqqfL",
  "key19": "5BnaAxvN1dBDHqAycDAcDbL4PAuEXJZph6mdueTEBmvrjnz7KSXBW2EMPyykodxfQ1K9WHdMp5T7McQaXrNoeqvp",
  "key20": "2oqzBAVuwLWUMfZy6VeiwEpZFzn6VM6yAs9ntaMTN4ucWKfSSJKwZARjuw4YKgTFcwudmTbVZKCzK7ptBpehCnLp",
  "key21": "3UFvbKi5Q1Y1fWuz78gHqar8sHm1P47U3d8aA5jeuEytVC8m4HQwhfC94jRRg1bpUSaxdNo98wAp3NLo4cmvFfp3",
  "key22": "3EJy6Au2EN2nj6zAdsLJB55BcZd9ExARDnzcuWUQy2G8gYw5kvz9fKUAz2b51q22ufrLZZnTyN2oQFHSJrqtoKYk",
  "key23": "2EgJhcYEsw8Y4yA1gCaohVFau8Hh7xFGfnvhavWgVsAaszFXndGvDpHy78N8TyBYtdeEWerhSnTyAVa2gKEQnsjk",
  "key24": "5ZhwgmJCDigzyi49XkLi45HaEApZSyKdeF8N5R54j6r3zt4ei78uVv3rCkz8efdZQedjGGF3LUnS37mm1FqfFYkn",
  "key25": "yQuJNa643zKptdYAdB9UDBpVCji2VrdnVKUd4CDsL8VYGxgivJTRMsbt1boXwcRrbcf5LqWEw4NDN4xfQ3um3MJ",
  "key26": "4wgmhDp1Eo29d8NTvamE4J4RYzW2RRTVJzho47BVKNTF1MUYBh7Nzd3j57jkZduWsdCowsXtGjn5WYC8SDD7Ennv",
  "key27": "5xRzG7ho8FtvU142xebXpPTDo6jHDeoAT8jUAiXgkSzzywRafMSo9GrZPTNpygAqhSDfcRPhvnDdDZBiGnGGnLjs",
  "key28": "4z2LeGe12uafWVY7PZNnyKRhRJpNbD9kHEwaXSszw5KHhCjNkD2AaTJojUFpSCd2r7BTRUhANekCLZ2h8GF6jZxq",
  "key29": "3PycK3ZF2Fh9EjwFt3AZP1Ak2yqcDJvxkM2cEeHJNZkBJ1HkgbyeCMHe7gJgcBsgGGvesZjPcxJR62qSC42cG75y",
  "key30": "5bBPHbDkLSpfif5eo8bC3yqu2eSMBGEZdfb2C5raueGmNJJXSFLxbfmRqxd19E26cMYkEKkxG89sdvxpBBmcWVFo",
  "key31": "ryUM49yXwLaW4yckoY9BPCPgiRzLrX9AeRKwc9YtEecjYB8bUBpSiiGFDXNs5iNvdTyh1LdQAY7xPACtVPCuuTJ",
  "key32": "p93YQH33wZwEn27N6ASYw5racy1DEDnLcqw4bsEAZReoPZjs77hArvdTWcwR9yQBMWjf8KrjgTfesqsYofpRvWf",
  "key33": "5TmCHRn3QbuzuxBDaE8rHkDv6xx6mtPkeKMN4eXuXuJvfZBdpkU3NLybxhpXDY33S43p7915NmAFEvDesJFoQfHZ",
  "key34": "Vm7XZM53X1mHbzUGW1EpgM1HDSStZRVETCAWTnBoHUFshH4pX32XgdKqWj5d8RkmVwJ3SZCzZto9JCKGjHZD987",
  "key35": "3u7B4Vc6ugasdWwxnk8jXHZAx8sjyRXLNkyVtojHq9ebTEc53fsSC3hBymKfs44yz3PTRfN1eNqsQr9QGAQH6dCV",
  "key36": "2QCFMkQh55odza2ohsVYDR9Tfh57uQMYqD4K5YZqZZPpqUh3M1mskmyKPMoBXh9dh1K799q62w5qQLKsF2TQeYCY",
  "key37": "4V3UgcZfDKNyf14pAnXEqK1rSCctEeqzng3RVxDVzVmyJeBtZUhsuTBpwE2p3KpY98CPUjy3f86Ses8wgbRa2MXW",
  "key38": "3Leiz7YvfYAup5QzRaWTtjSf9fViLc39As9k3g7yysM5ECd8Nf1QojxJqvDEcbf8qJ8rVtWfMhD2Lkcndi3QAU7k",
  "key39": "2HuXyeUULdXjLPCguGUDJmXeUZb54HwTJp3SSJweZfPng2CAvHpCybG2KYz36GYDA3X7eYA5DAY7TE44niRV2dy",
  "key40": "mYi7aqXcE5fe9sZS6MMpm9S3mVZPWAttB3uPHPomnc6tktdprgffgf1FnmtRFT6vWcFD4VjBQSDrK5Yyt9xgQf1"
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
