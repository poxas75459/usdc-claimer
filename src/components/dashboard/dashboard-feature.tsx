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
    "42E3nX2LRJx6nFXSBN9eQjNwyVxmZf2rYeDt9sFa6cR2rJ2UpC4TqoVGZDznfVgbfNbfwQbZVYrrb6caRH2Z3F8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46vN4qA5rmNgThfjM2zzS4V6ncLGh1dEaLiErT8zs8UWj6Y4iKkxFvo9EfVDFXYhyPFdZTxntw6AkQMknyUE7qXy",
  "key1": "4JeTBuV2YuhJpLJvPV99sKe2FZzNtjG18UBe6WvDxgcacAjycsiscQYkvcAvoDUktzhW1CckC32GtJSFeLCM8TDH",
  "key2": "2gbiLcfcpQdWrFeHfX92vPcrbXtrDPrJ44BYQNpqoPiK7sVbntcbZroAPH1RhiG1jGowBGHsEozaafC7NPP68FEJ",
  "key3": "s8CyHjoB9as6zjss5LEcBoonH9C62KoeDL4zDCYEeE57wTMCr1pizAP8B7wG5oB7jqqJ5cQmAPcuMRN99mkEQj6",
  "key4": "2kmTq72V9Jjyp3eiPwseP6pXNXFsYjAV6ZxZgc6LFyqUjK9DAvkisPLWtiSz19vS7Ca3RfWyWJ46UCcXykFJyox3",
  "key5": "5PGzr5Tg5nNHFd43yP4e3xcsPfpDvJZVHhjZzZrAvX9buoYzXuk79H8pReb5ttXzFpR8KiybV1uQtdCRT86SDx4n",
  "key6": "5MYJcQDeRiKuGTLWBHRM5erxhooDt6ghZJZZUMUPPogKfPvCpE4hv2K2SaUzDw3HMfdSff8XUCUjAtGH2j5eFFHW",
  "key7": "5UULaZjbm5CRNFbMTqsrDmC7RNThouy6YUUVL7UrMUNvBUwLnVjUdNgdL3sCxYc7phe7t8SZzCkjRJteVffgDNvE",
  "key8": "236cAqqveyipj2FBdUEGhujNjbmqKSErJr9UpJMTGH6UToyo4cqa3Qi2J3dXRKD1GeYsdwwTkKnP4VJoBqchUnWK",
  "key9": "5YexVdpGEjV1quXM9DYHgu3E6ibbCsvZUf4NxczRJCWfMsoMrmUCeCGxCA7VQtQxrY4MSx7ZtS6LXTWM1bWMLq9W",
  "key10": "5isMPiKBnkQQLYVAp4tQajbn6ycizaRRVZnXL2gM4a34eoNNMuVnTem2xMggnt8EhyeHnvp5bTjemX64xhrKX5aP",
  "key11": "4UsvK4iBv51tsqzsx7FqsJV5bwapdFz3aKXMtZKriRJ4Ba4cUPHyFC1iXScU931rXDqcaWa4HybcyXfu2ee5HuwE",
  "key12": "3mQGDECY6FipVzqoEBXRKJT6dM3bFNk38Jdy2Yz9q19gwYCa1GKYMQfU5VAhT8Yz4YLSkLBnrUdkegiFik4dpUFP",
  "key13": "3GMn1gMybMkujEjskPTHFcV34KDRoLoeg4n2Nw1EepkdTkjNxiG3HcHeeDJmnaXpuSbHBGCRtJBcRKij9kyBmn8A",
  "key14": "38yvakzpjneHDeBk4kMDnH7QCckCJxuPa3sqEkMyy1Zp4GyxH38WMVbGFL49ndFYs4RtEeJQy1F85ubMHi1WXHfZ",
  "key15": "2XzSVzuhJ2iX1YSMuH757M4f2NYQtgnveb94WK4ME13WLfCXFJgerq2zyj5GKyAg2fcv4k2SQsYWMv7gNkXnUnP9",
  "key16": "9KRaemqARTezfPw4c8PZnzgXQKq9jsqQ9MR7NLNziwv4e6eyzUXyeD8LpRnDjxr4CrK2qmRC3kjB59q8EtT3jHC",
  "key17": "5stcBPrrBrwTGezv2M2jGzzgGpd42q9yi72DAmEgnvaJZZZBGUYwCAwjTuzv8PS4bvuHSeoGuCqv1rEt3xwH2MCB",
  "key18": "2xXtQRvcHMgGJJGvPsx1QAbWVusFrKmuYCds3241hG1baVpmYvB5fo5X4JVHy8bsrS4jMYVGgNzbayJt4SiGGWLj",
  "key19": "3vxj87WaYk4f5xfvnxa84aqj8RXqDYmEsPvpyouSSfkSu2kET6X1cTaeBmWMSdBCbeegPsK21BZkCs2XdHfqov9g",
  "key20": "3KrMCRBnkJsqHt5JUJcDL5qpzJr8XvCUN1J8S9APEogRb9aTHVw1fEX6TaGofTKNF5jDJLGx7dq72sKxMKGy7gpn",
  "key21": "4wRFThj3qXw4LqySZyDA6ayNUZuxdAREcr5om2YnqdJLhC627fRHanjiwWo36QzWc6oy956yaVsTNozLCe4GboVa",
  "key22": "36qW6gDiHbj3ywhx1apk6KMFiVFz1T7kA3PLfxdnAvtHgS2wd8KWwzwHpFtwN8wXaAgL1uNNy5TqaKHwGw9oemhe",
  "key23": "F1MkiQQJwhKDQkvLhf6A1ztixehZ7qRMmXGqQVQQYhnUUYmLvx7HPhPxdCUoTfSy3oSFnzgsGtnE5vt37FqefP9",
  "key24": "3isfzYT1h31ZbWXFEKa1cZWKM7djUZdrj51otK7KxDBNq7kx888RMSEUy2Pz6Xp8HzPuMTCCyfBsRzkdnHi1aWh",
  "key25": "5qnKBiaS1r6akYjCxBWv2WehuPjWXkHr9DXEKrxEuvwYpneukVUJHJX3m692WHDUcrb4K6PZMj98w8firNLzLUUz",
  "key26": "4zNbZKzg4cavCN6WKQrWzpcYidspcR4kSXrze82VG9QKLyVtnjRzoAbkpdPUGMMwdzjX9fy9Sr9LYFyDQvsPNxwz",
  "key27": "o7r8t44jtCUsnAG9wkDYYRRWYJ77jGTK67vdKksie6DkAcDf6gc38nYaDCN3FXQfWYFDQvA9uv9SSSgy4LpmWXb",
  "key28": "2Muz5DAfVynaaQs6mH2VAnbwhXGSVBbJn6wgGjY2FDAKmMAq3qF6zK1YSt8VAkpMmsHLcZQr8m1DbtqeeUrc96qH",
  "key29": "3jh9KwnBKANEmecxhkVQSpHr3BBZ9BZJCcE8GTk4VXoy7BbB6t7pSMXXHW9AfJj9JhbB9KjGkVYf4e66wj14vYBw",
  "key30": "33b7rRguaqgTHTY93Xvu855zYCV8vixQafgqnW34m69kKhXeBWoxL8pe1jqWTdk1eZxxB1XtQidEHetLSd6BA5D6",
  "key31": "67qYCst6xct5AuQyHohpN7qi3hvi35WMva5UHuFChnbPPwRhk3X9XKrhnq6dCpf5V1URp5M2T41Wd48kM8VA2jw5",
  "key32": "qxFfdMy5q7tJfouSwoKsog8E3tVsm3LvRHr9yi6UPqofhCqrgyiGPN2NjBBgJMN4F7K9omm1FX71gDExL6VHwWE",
  "key33": "yq2Joc4dnbZQgTDwJRAMbnHufRcFDTUaxHejQhNVcjPXERv51HodcawZJv12yqzRH3qyNe6KwgWBHDoqeavjFcZ",
  "key34": "4vVwboCKHTA5RZDp7rixMWz6Z1BKawKmLVpPUrWY5ZfBrBbKz6PpQ4nus3LBYGDA1EKCF3cpsVD7iX7haKNkar52",
  "key35": "2ehjUuknjgk6V4dWicL3XTpdVV9g6mrqqNQy2vcRcxzyEw6NEpDMuuTG4c5UNbVzi56yHDqbeePwxyQdp9BSV5jC",
  "key36": "2YLUqqn2Ne4PuUjuwEc2DmGXgiwoDkErAJXeQZThnRdg9uTCgUhegqg65sFp7jRMFpJSBffM88QJ4AbvdfdsMCFs",
  "key37": "TwnGGrAUqWXbkRJywyxJDAkmNxzT19FFfLiNivBy5ZNFqHVT2TKxDwpMosvtyQAh8W9sKnoBJnphJKpHmrEJLig",
  "key38": "3ibq4ds3M6YqV19KcSoyZebGKRoR2youmGZ5e6kz9CYmXnBfuZ1AMm8bx8ssnk75EbKgarbGJKuPm9MdvTKLSJ7S",
  "key39": "Y2nXLukvNArqA9bs5uSNX6N7S9VHC6YQ5nJTJyDwNNrjD9VLhv21BpYTiUfkjz85bPJGfxiWHjYtcC6BBkv66Pj",
  "key40": "2pkDfWCoroKvQgiGdciCiKRDyjxYLFoiiQPFu8cyBVXFW4T8KZgagfV5rvMj7R22H997SVwTaPsjnB8YwV5CFVcD",
  "key41": "2vyPj7cUitoGm3xoGM9bZfyEmWHXULJPpS7aQWzZRaFpWeoJ4US1wqmdDpRiyReys7qvJm9rmvLUey3k4AniZCZv",
  "key42": "5knNgwiCoLt8JWjZw8y8bSAxGoAgnBdkXSDnTLD1cLPEQXvfu5gUUsa3Na99S7i5928vpYwesb553dJF64oMGwng",
  "key43": "4dPdzqjyDNGd4F6pspG1bRTXm9ngpd2sesTVZ2QLfmncEE5X1qzP22pU2X5x9eN7W1GEC2oPEYjCUuEAVwqZvJCG",
  "key44": "3zdtyxuL1Z9QGJeWTzkU28C6qcfeAvm47rXjAFC4cHSARfnb33pB7BZvSQwN41c6GJVBBqiv36iBV3T86dwz7g1U"
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
