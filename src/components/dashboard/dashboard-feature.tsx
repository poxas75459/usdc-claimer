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
    "38fMieHv1imJeFwuJxbJbQTLAbVHzqJgdT5uxizJTC1RkfxHTTmCTkjQt5FagqEU7PLzoMZKXWUvkGvoi5m1uBTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GkqZaoqdnLWxxq2Lf2EKBFbC4YXRusHsQZDoA9rSfjHTgwv7kMca4LDtZH7U87CvyKxjzMEJezhPPtvD3nRZRmK",
  "key1": "3z3CedLE4d3vu2LEBZq8a3qyKj4eNtZMBVDqPYJ4AYPV8zmhNvuFg1mwgjS74BaSk2Va7TW9gLhNrwRJqpSRVetS",
  "key2": "48UnypCzjEvSJhpX5eM1pno6h2qAHJ7pveug9H978XQci5zUfuCv9EkEB72y2z5FtyAN56imB2pwbMXR6U6KxDsB",
  "key3": "5AcaGAo4HSqMGAekrcmmtm4JpPk5EC1bFgJYFJA8PwaEwSiCVUTEZZZV5rZfn8oacY5HfkS2NuAL4Cq17t84NRgc",
  "key4": "2p5qRjdp1V7XUyJm1wbPKyWaSbtbpnGPCvHLWfUYENRo9QDFJsMZjP2M5ZQWA1hbVesBJ4b5rTUs97AY6xD1JBgW",
  "key5": "2yiyAounxwENa4Ldr9GeHf1EzZv2tesniFfCy6BLZV7p8EUMugHieHxpkU4BCsU8s8yaAzqm5NAaTCZELWHjNdKw",
  "key6": "3BPJtrGtoZfEAKrpBkiQF5opXZ9tFyV32BjQ5SzeeLXJhXoGgteEFRfr7Y3er2YBVGKGWuTNWMAWVW9WM3vPtiRz",
  "key7": "3apCVpuG8ysZ4P3PZ794p8LsrGfUCTdg5XwUbw1VrhW91gonuSgtA6wkgFKWMXZQ9hkBbLaBUwmZ9qkbr1ifUW8o",
  "key8": "4Rymz6zUrjfhomemo2snfM2YBebG31cMdSDjkfvzjmgQFW9rzjGiQM6EBvKLtjr2Zo1Y9KM3qWbRiEipdSqtJQ1D",
  "key9": "5pFWGguS3mCLWV8YBQwBNzYbFBcmVticFQxLCyCZehtCChwzxmYXCbQ9zJAbxFpnnjxAY2D4vZoVb42ghc1bR9cg",
  "key10": "5enaYNjN63WYbAkoYjmTzirihjMRqGe7VoMvFSjRSecmX4jcS6bPgs45czrUJzmG8zM3XfJWxVk9Nf8MnQQsw4Nh",
  "key11": "tgSGqsQU5c7P9GbDyTiUb1e4GxdRiEaCBUqRKuhUUP2NU2ZwGPkzNp8d1id6GmCj1A2W8w2xZRUPqrBMUWo9rw8",
  "key12": "3UKTJ1Q5FhURMMhaPRDbqkWfuxKDvgKuj6Jr9Fqfzvx51yms5RMq4XayEpZhjELCva14a2Vigevm9j7VZ2WatFYE",
  "key13": "3Mfmsv6YwHXtDdkojiy4vxb3pdHtLs8u64bzneFN5ybAMF9VwdSUvchDe1GhTEZiAEBFRxGbv4YL8woRHuCVtdo3",
  "key14": "4XLYZG19Z8XXuqJNcbxaxe26VS6NoccezjrPJvMqDdttx5b4jnvr6YcuFoCVz7KV4nDZYyMcbPRPptH9Rp5w9gK3",
  "key15": "2NEu2YXToYLUQRwHZLeVUCqv59HKWpwtCpWRFe7NKhLSqfHcN6kVSY5QnTAFyDjJnBW4doTS8DbFm7bjfBUoVDdW",
  "key16": "iCPGoG4jzDp9dWKKRVWDhaMp7qrG6KN4pja78w9PzqWtvGFE485pFQvJnxh66HQUyAGCkyQJtx8MqFK5RrJEM3s",
  "key17": "4gnY13aot6RLskY1vPZFY35ZMC2q8QkeefFT4bLd6mrkcG593caHQKfmc48VhpQCNHP1BSjeiAy659LB7Le39Hbg",
  "key18": "QLztB3mvJAQT7akcmtmoQVzSGVVjwLnWLPBiCYamgMEz9FV1wc8NBu9ifDYq9NNMe3Fn1zi5GX8xEBthrPyYara",
  "key19": "4wmQQ5e44bY75fYWoCnbZdXNwPFSLQvey4C8sXkny2LM7C6yQuPQ5FmYidxK6cC4Po2N9FiPxqjPyvfW1PaPBvMd",
  "key20": "33mDkVnNSvN4FhaHEYVm62SaAxbEXcipYbKtMPcaRfuzVnvGA7NFayu3AGz8DaKyacJ8DHxAc3vKZqrBJHGBmWEw",
  "key21": "fYaVKaCwF3wisN6cKnuZxtKKVHKBMeiyoPpEGJWaBuK9WGQqFDYzWbmoBvFZj1RtzMmp5MwWXHmFohUJbiv499c",
  "key22": "5116Z9bUThZEkmWCZPCJTNK9KXTtcgHNhA4T5qf7VWKqFajz9UivNr43bBmXFe6FyjJkK1totaP3fGaoZi7V5Ygs",
  "key23": "4EBcM1w8KtSpobMw3ydzpaFYXwk1Fm49iy4CE8yd2copXWC9VytgY1ARg2S3xwiwA1hQGdL3awjrHTXjQYRmXeF2",
  "key24": "2s7jKskJ2VcZVZctj6cfKhdAp4a7PDyRDFjFpvwii52J382MfS695ujFGLQQjGijxgw5WaiwSMJ5TjGF6L5YPVka",
  "key25": "65QdjgXsgAS4kipopcMqaK5JmHhfb8bHYav4n2Y3aosi5FyYK3YpCa2btGVtMKWWDxkR28phmMTqs4AGhq6sdLgG",
  "key26": "5UvZWHSjcW1MYSh8bfzbytUumfqWCQwbKyHKU7wescxCafhchRxN5QixftfUufxWJC8hV1hNR4wuRse9WGJ7ShAt",
  "key27": "5NHePtE3Bn6SSht4iMuvn7CgnvKGpMsMeUZGdNVyHYUo7hTmwRLN5Vzz9vkYTbsGxH5VE3ppqLKHo2h4enhSCdd",
  "key28": "3uXaCCNjrtmfA6Q4NUexhUpEWX1sXUCUrs77vDMgUPFPVGo6QFy81mqHDnZMGHtYTh7YSCZ8bVCskGAiFV9vRLxN",
  "key29": "3Rnbc7qKC3XDt4QoNZwMURkBbNkUziopznwgDpGwM5RzB1t8aKwRwmqEpEM4nPoSsUsRfJMvXcn6TDXzH1gWAysj",
  "key30": "3MGiBg1Qf2UV7HkMWXECgCVEkDF5kJWouc3RGGtTJZqJdsoo91VcoPSZLFsntNXy9PFanN1wf9EY5ctCTYSVw5j",
  "key31": "5EHZWajvM5t1xRLVUW3HVDcSWeAgCdYMVzDvKokTe12Y3cKQ6AebeVfagpg2La21PVu7QQYpimGSfDh7v4q3rWWZ",
  "key32": "4gymvANBAbw9hzQSHQbqkgsH7BXBjmtvV7r8VN9gNkc9k29SmBRaBcXne5jvEt2ZBDzxNuKxAU1zwJhpuK6Lwfe6",
  "key33": "2kFt8EFzYFBw8mYcGL3ArbaDxM7PwgiGayeweB5SQjkcVSQLgfiw9M7bHkF2KuiPZ58iUhTCMFfyG1DCi1Bifrfo",
  "key34": "5obUbiqN4EnqUJaePMY8o1EtQ7LSAVhwBWwBpVp9qrhbhibpXSdm1uwKTigeiqAD5RWUcvRMDnJmr74683sHDtFK",
  "key35": "41iiJz7Buc15JJJnA7At3LtHDAwURKKxxouDy89JtCuVumXxfP57XFML3mGrPVS1dGu5gAejm38GRmb99nx8rbz9",
  "key36": "4R5yrnUg5MhFna8WHL5W9PvpGAkyqosLYV1TfTtqN5ja6o48JYogLPpK9SbBRsEKjR5x3jPjrKAuoX3XLcqGhipJ",
  "key37": "wE3QZToewjXptTk1FHbe1oeGc352rvW8VR3pEvwAFHQosZ9W99RkHqpnMbQ8pUy4PN8LaCMbrsaMQc2qPTMQRCi",
  "key38": "2bNy5n66Z2yi13xsu5SGCT29AiJpehgGtSmMqhVyjhyNtTp14x6uNwcvtNX5X7T7oh5phxHPYZuaFAxdHvqnmpA2",
  "key39": "4BBAZQ9gcuNBrkj4v9oakSDDQjsYub1Uzy2yLMCNUv4wYiNkoXo53xrkTBLMotVUeo3kMiBuK2zfmzLvFcCVsWUt",
  "key40": "3mDMxDPbrmzCAH6da9tNXZ9o7mn9qYcP51ki1fdPsAiXuWSU4t42w9mdxeXtRUFzPKVy5H1b7QFJoDRhSQrMsAeH",
  "key41": "4eqSqY3Ft6QZFu9KxmZFh3ApjV65Jy6rQ6zZ24ipw2Z3GN6h8JoMkxg9pdeQLwPdFhKS3Yh4RYfV37No3vvt4TvA"
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
