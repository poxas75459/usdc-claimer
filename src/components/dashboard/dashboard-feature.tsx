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
    "3MF1h264XbSW3cP48CbJgQuH5UYESQnNpsnqoGyMcHm2KDnUFP5evhfHCMSycWEukkNwEzvC8SAsrQUW4umGfBfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33brDX8YZmC598SUFMVUQgixmebGthjHF99HCwcv5ux7ok6rsi3Cinzn3DbxadmD6VataTor2vKtcNkCZyp5JbGS",
  "key1": "4jWRNjMX3NrG44ipdku8h2xY4KSzqa1zZhUFRHH598wmJTmuvEdfvvAfYtXnUsQ4vYCA8gKaLjyTP2bCbA3gwh9z",
  "key2": "5vR3QTsTY9s5cmAQwp3Ae54KTCqpYM5Lwi9o1vmj8hybCSFU6KD14f3e2619J6bhn23TgzP6yKkEDkYzBwAGYNww",
  "key3": "nttEVb2enNBNRwc1RgjpWY4Nq2eN4u4ZnszDvbQf4USW2CUxyWZ67K39f1JtqoS3NBuNwC9Zrc4rdPf4x9gDtrs",
  "key4": "3c65B2F1LGvKzu5fExLiszamHfyhoK98UNn3g4MmNgKw463LzU4Z9Tu6Tzn24D7YfinywoFpHekADBkCX5icxP8d",
  "key5": "4Tr5Mxf7kY22y4PdkLzxPi5G3iPfn5Krq393eN1jJgappPwQ9jFQEknY2SWiPFRwAo3X8wAfeLeGk7jbR2WbBaar",
  "key6": "5KUV8acpFcWfxcdBLYvycYhM7NewkAaiSubEyptQnSqKa6UVvVWSSpbh5RBa9bpLMCPRGV88YUrzDvvf4nJQtqUc",
  "key7": "4Rgyyefjr5fudXdGg14VPJBH9rqsC79L6iYph41Zomh4ZHmWYovVnBnoX3nQZ2ZZY7y7TDvofW93moE5PW2tW7PR",
  "key8": "49G9FejA4EjEWiXB4S6A5ARgPLMw8QirE6fLoXwnxK1w87zg3hqBhmNXa6zakP2knVfUtqy4gTfYTovKtUwyTUj5",
  "key9": "5pY31t7A6PUKvaFjfTCwFhwG7xhY4JgzPC5e7oH1uFwTgq7fEoCLyQir9Ukj7w74uiqguCJ6bGk7c6EzMfAAJGqL",
  "key10": "4cqbDkQqwth6ZUv6hRNR2dMFPYLytaXh82eM1ZYy1LZjkJKPwSAaNGwV6MF6bKzRajUbPyR8bCbnndqoMwSTxnxf",
  "key11": "3GfQyM6gf4jT78dFhzbDp52T7sr3gGYRdbDP9CoLTwiW5iTeYCDejNivBQGiYMhSAxxJZApUK1vndzkBYMMAapHv",
  "key12": "5Mp69NTcLzbgYsFmDdztx2HRQktmbqpKxX68fP3dWAiY5Dv6khk3PfaxyaAhcFUaUjcovSSJ1eYkAhAQwjaq6HSP",
  "key13": "5m9DcRfJLqDWByCLqz5aHUkwkZUdTk6SiZzmc7oUVbQi8QL2wEqgNK3ncV9iQHevD2LDrCVtbkRp2fcqs7gbAJ23",
  "key14": "5avoF5rNNbXR6hbePobK26qgx9aCaSWVXLupfdSmYf729XbLwCwW83nkA9zZEi3DHPEQNdv2dNuHisEBwQndW2ah",
  "key15": "298nRmetRKf1WMwjEP1JYrPRJ1ZyaH3ZpFemAM2ZjfPB8zHDyhPCztRDgZqLadbXrGqqkw8mjt6Z27AKmWYkrpUj",
  "key16": "27Bx8KfsL3tiBSnfTx3M3mRsiWtHXudxbsvnNoTS6CPKxuBJEgovtnf7wZghrnws6hYxWt4ShDq18XZD8RbFTj7G",
  "key17": "33Y5XRStZnWZMtMCLHKxkwrTDdzgjJL2Us4PgHNAN8fvBEnCSzDeAMsJdPEvGTqxAWjvFJ1pV5ehqSZyqsPBsTpu",
  "key18": "WX5YSu4rgGGfSXF7J6PUGW2LZRkS7SKAD3TWwGQF6NGBGkU5w1TZqEi2LyrqJVQnEK3dBoEt5LSwjuT6R5txYSz",
  "key19": "4yWo4hySk2Ton7C99tzkHTqWaAzTgeEK94rDMd95EXyXBLZR4SC1Qa4F7cmG8PEMsG9xitXbhm9ieUvVtic1PhyP",
  "key20": "4iMSACiYahX2qRKunjup1LRUfRKk7vd56BmExPZV3p9gN4HCMTTBRf5CBDMv5rDfggwLX7i6fnV3hdypkfVkWcsu",
  "key21": "5xcfMvnJudy2P3NGZViymbgA9q3tgZRVrpM4wQAyoSWD9FvLwFAcJfrBrAYaVh725YREjqGgbsvJpopopkp3SnZp",
  "key22": "3xnGJ3UBwCb1JJ51VxnaL7BJrY142Ww1BjK8drwF4acydCj7eMbY3UPjSHBpg9soQ4pSj1hs97B8WWLk5XZFf3Yq",
  "key23": "2EbzsNZy6LswrQe5VndnH7SeiBNwzxxxPjiXiB4GoQby3jixUNz5KyFn8RR6uzMMTL5Rv7rhRTWpMXXY81eXikqn",
  "key24": "fvRr94HVsF6e2yG1u3fqnedHVYB9A5bvBRoksb6S4UBKAgkiTt8zjb2ZMYRf26YNoVRqEK555hUyxTddegAxd7L",
  "key25": "4FM3TNhfUeFheuUHHGSLfwUkHQWgVzi3aooJnvHH9nkrZENT1SVDCN92nbmiU7nfQSMLjZdJjrdcCRaBD9Tc2Bte",
  "key26": "PrKFLPokyZW5aeiZdz2vb6xtDWtvdadnyX596XwNuP1saby9cb1FcSASVyikqFxojLrTDq8C1fGC7s9BqnkdRE1",
  "key27": "4PrWs57czE1z5UMKRVkVmhqHDPuA8vNTwv5ut76w2XatQyNHDxmnCaBHLvgZrCj4MVEwCSYdVcsdoAKpkWKThhFk",
  "key28": "34wZ9SwG7KgMajJU1hnPc7puCeRy8J2UakA5hASaSW9rw4ottuGZcmUQYaQEbe6Gj987SA2FKwBZimbywUhWM2AC",
  "key29": "4LweoxzkeSRafqjznnmYpwR243SXMMZ4h2pkEFFFEyZPmeqVWEDZrHwbbXEqyj3cJAFQ3qNg9SGg8oPtd7Eyv7Gr",
  "key30": "3VJa9SK7MbudU7nAvn4h4YG7ejxtX8cwMsHJJGuEN8wZWzRcjbW8rUdnA6oGqFs99rb5qvoDEz9GNeoPApQFgvX9",
  "key31": "2fPZ8VbPCZYgpFvx9pAfbULw4LvsC65RGNReZ3dLNoyqkHomZ5MFTE9ixeKQB1arUJsvoLJcQCT1gcE9FFruerHa",
  "key32": "2pLcTaRoCggkAYzsGZNZCGhvmTStvs8eGDGcjhoqh1ZJPZ95JXFsFUe8kxTKfDTcAaMYjiVCLBfQdEtaVKmtTvth",
  "key33": "2YZGYT4nHkDYWMmbmHZVByNg4dPWXsJdwBw2TCTBXMgCbbjRF1x4hywtwwm8aL5r7sGHSgkrNTNyNyRcbRxXUwng",
  "key34": "KGtU72zrZeGm4MWeMxU7W8bSmsozQVaFkWvWjoHjmP2v1DyN53HG363E7ifNjooaA4AN4SswdHHtxNQe6FBUkFG",
  "key35": "2f4pG5MAkoDjJ2zgmjRPEehZsY6vihBS3oUZD6u8VYKmtbnM1D6XkiYVu6oMBBdw1ecRMXDGz2uuzua8HVVWvNzC",
  "key36": "sELBszpdc3xq3NVx63y4Yb3QJMAaYTtSTxVX9rXg1BW2JS1uYwhVhBG2jSR5U3SZrg8MrUvaZXbxfcpYoKJXQQy",
  "key37": "45t1bVYZZjgEawWsX7ZxHdH6A4vB9T46Dr6C3T9nCKTwZDXKsEs4KkBbdGEyXRg863KNbvHQ1eLh8sisQ7fe66Kw",
  "key38": "4nMyKtpTZ1yUFUzX7PDGNjeqVGmqCr2QbVMxpb4Vj2Fjauw6sqrpUjuFJRDGGAziFfwyqxFP8FBkmhVY9TcrkEKV",
  "key39": "4v2HEuPCDTfP4THYRno6aPeJxRPCzeGZziyfHqvwKL1bB2GLdvn7rqQEe9maaQrnSuAPKYh62QakSswBPsE6CDEk",
  "key40": "poct8t5JSRNHknkmn2Yu4mAYaeHYZrGD4CB2U3bh4hm1fGusB2NKw1cuUUXE3xmyDz7ra5YvdXw9ff37kkYjyJa",
  "key41": "f3ZTQyfubVnjroW7rrmyd3wCrwFkPuLCyb6qFbZAWBpwismEyXFD7vCFkx9iM2zQbirCL6mvE4UyoTxHzVrBw7a"
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
