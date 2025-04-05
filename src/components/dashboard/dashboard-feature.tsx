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
    "2a933U2ePypyf7w4hJB4Hk7NNyF6UAJ6HF66BrbuGZw3vqAgGvA3bXYA82i6j7emmJFJKhboj6QP6emZX5pxJZZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52bKUyuRKaPWbj7qkLAg1NjL5Rj28ye4H1ewmPYp3GaYqJGtQ5J4zLhxgUK4WnVQoc7ZEBNgWBMbsuf5eTypkRv5",
  "key1": "5zF6bujmWDmysUdetJ5aSvUseSfRCX7HHXo7zAKqVigKbFPuYd9KJLHpuyv9cU8DFc5HqX97HTe7B9txHpiEs3cf",
  "key2": "2vCKENUngFKLGM1SN8rKaUsQKgApttHHUwVhwVwygjrGmT5up4CmiCmXind4NhLbXX3EJHKs1hD5wNpGsU1CSMUP",
  "key3": "427SuuSUA9hmXb6Bd3AAzKoEZhsQ9oYsfUQnB97R5stCGu8c53fnLh1oUEa9mcmU99n3RN6AiyT3iEozAeDNNDCY",
  "key4": "3U3SHeFiTcj4HBHuEtXrMeQSXuKCNtavAPcBoRDXjYBHpghbF7hb5Tuj7fEzXt6tHSJWEYHNK7suCqr2uK8oecYu",
  "key5": "65ha21dBABmdSELjuHLL1sGjxDvHxhQgigcb9iEFUBTBbB8BiRiF43XZ1o3nz9qYRDtssvfXahTZZFHAtxwAfZeA",
  "key6": "2JyvtXyoSCwgHTEqEXYyXbt5VniSgC1bVzgdt73wYECyri5AXE7hm9d2AoCdHaGCLR8zLk1tpkUnodbdUQoeTB6",
  "key7": "5p31CEXaHJfkgg7dr4aFayhT7gcwDVCJQAJwv9cabBr8QjnpMKGkSMbHoXE1QjwsSK4FBRESKyaAG9xoUnHkjfSz",
  "key8": "95UiY8uwJvEoK13mhkzD7qLbA1ZXb2ZVEFSXikrPY5iMzb36pLk7PJn55bxdufCBEcXXCpR1CUEABwjQkZxDZR6",
  "key9": "2yv5cZx22uLN1DZLrecn5yxFtbopLaABZJQ9tuMYo7DAVGHBaWRrLTScS8smAoBB8ry6ARC6HLSdW6CnMGY3zpKr",
  "key10": "2hNyTcpvT85ung9cW2APPGvqTkoYG1Lxf4j2pzro6X1nt9ZhiRzgwaF5ovmg7f2w8hmA1b66Copt7DHMMWcRJajH",
  "key11": "2XXKjogEmvgE8Wb6gc1xYdrRuvgP5m6DMFqmtNRVHehth3aiDoALMP31BXEv1N1tVY3QFdGDWLGK1fZZo4xkL6nw",
  "key12": "3SnCJ5x8CYcb6pb6eAL4KPrvHXf6eZK3rjg6xDvkr1drn7m3cQhoy5puU4TmotDYfgzVoR5iZ4rDBR1wFCPTTgV8",
  "key13": "2idfaxHJDJVALtMrLRNGyFkWjwqvQ4MdD8pyr8DxvQiffwb56ij7ieiFKMQVvgHPRaS2UPb9DuK4DAJUrWrArR9J",
  "key14": "3TVLM6KJWF4KGcJjFdLAvV4UxnTgFkeDWH63QfU6snWRVgdrZRkJAPP3tJ15QPGt4nEMHcdz1rc1dBXT2gJuPN7E",
  "key15": "3mcjuXf8iq611rSndmdvGimPLrN2LRaaYwkA28DBLeT7sQYW3s5uZCbpEh3g6rLqAhSyAk1r1Rzg7NwwTMYWeZWJ",
  "key16": "3K83Sb9WfKFyZwAW8LuF4zt6egBPUULwxi9KFN4sf2nBUTdCYR5tvo2S4UjcPvrHXyvfGiN3keWjtwd112myKhYR",
  "key17": "jnSEkBjn8z96QBPZLSMLxSc8rfki3d3qSkK2pFkcGU5wYdSTJSujsfkGaCUhN6nHtPrEbK9qvfdZwDqxHYigqHm",
  "key18": "27ifkyrAbFUCP8jYFJ4LEkiYAtiFx7DxqhhwRtFuL3LeDoRV2foW971ak7EcLtbgq1EkNJiS2cYv4CoXbJyyvJ5T",
  "key19": "2V5WjhXHnYieoBH2v8eKvfYAg13ZsBYTruGKKbQHYnwei7YHurZLhDSp2AACqCKBpivg4khQm61zi6yWeqGfu1UR",
  "key20": "2wmvdCnoqJpRkBKuCCehWCosbLiY439oXAnBSdu46mbELeHGGpAwaWYQCzmv7rRT7Q2bPQKGVCM8EMSoD3umPDb3",
  "key21": "3kmAMhYWuRcXEEbWg7y3QF5m3i6aRgrmDjbCHUWKxPYU6HRNtuKjZDatGxko5gxtidbByU66KZ8H8wBm5JMFY34g",
  "key22": "5XpmVKS1unHfU57UFTYrfXqgVLg3YmvApefi2x9voFstkTP7tYNtV9Gopct9sKsHRg6zbXuXuWcD5eAwVFfw5Q8N",
  "key23": "bDoHgJ2vGui2spyV9BJyL1UX3AksfBP1A6CZ2ye44qbGicUyNhWzQgtCy7C5d5YjoRc4HSWbCymE1Po5ysSrtT6",
  "key24": "4zW47hrgdRAs9nEXcDN9yMrYTvwmMDhty6UZvgSe3W1yyWD2GUVZ1EwiTy6P3d7T2LMbKFfMDr66QQWKa1N46yQr",
  "key25": "2n3gbGPKymbJPJJZxehz3XGGc5ZeJ4q755wjGA9KSgEb2afwK4dkq24S9kL65PqDrWNnREptwAdynqSXgM6BRsWP",
  "key26": "LBDD5gTny5W7GEQU62QmHg4nwHoTzsz3D6e1BKZpWuASgsRu1jyDmvW8xn4H6nC79vBPYkXtkcHLzjrWuRcdCJ2",
  "key27": "aFozdyoijYRFmpofP1Scrh8CgrZxFtV9D4Wzd14uLDcRwcmKhgCL5QvSHuE9acF9eV1Sw2FaU4hWeyZ3nLGnZ39",
  "key28": "3Up3So9ofigic5W8B9cBpf9Kgsw2d2tvkFDRCVtdDDB5BbVmR3JhcnTM72a1rFpxK5nfBgDmVbht66P1SuhmScNT",
  "key29": "2L4dHg19ppxtjMcFZdNqamAHdJqh9NRHMDWuJD9MQSLD9BgPkHSdvuSS1sGYQAwGpPhXNv1s1k12Jn6gLXDsspC6",
  "key30": "2cxaJo8upzzQCY6DiueNBx8v9zZMhdXze2MdfVN3cNsqRXyR7NSRrd7KDPeuUR5m6iXNuKv8TfRhXDvtMrnAQ3ax",
  "key31": "5JFdKUJ1TJvoPWyPkzqbbd1HBGUxA9dxPg5JVe6jdz6uHQeuueBRqoo58eTNGXTrzN81jmZP4AGmbsUnRUohJqJp",
  "key32": "5tk7Q3Mky7Exphhjgo7D91URMFePGhPktjM1LnbxH5qYHLWLbMA1t99yugS2VpoCv1B3RBtcMXoZWzPP5i5qrDuH",
  "key33": "5Lqq24yKoC9CJDggzzccHkYFryX9aWxAwZnD7tUHRf8vDnhNdpQPZQ7ZA4YTqQfGaAv7FFS4vy271JvGdQ5Xfttk",
  "key34": "4wo8jjqyp8WFi4PRwTA7rRLRPPH1ZTENJP24ng8addPP5NwBpGU8EVPepyvX192BoYg8GxGpA4a8gfwGwdLPLhMj",
  "key35": "2foi5pbCvYjnK8mLeFmyAH9f3puvxE7EE1qCb8gWZUSFjvmhj4yCCFm91tGrtB2m8h1WSHw5FHfnyhkbAd2C71Xz",
  "key36": "43fPn1f9HGNzBPEYvGx48WQjyWM6Bjf2JdoBmAX9x9Z8ChYP9odbo7VwR6WPEuvBvVQJMUXJBzN7djCWHwg4Xb7h",
  "key37": "3UYwdFsrcSZ79nMm91CQuxzkcGfCNep1iajj1CmGg9rnoikx9HsGmSC6JMHi9bUSCZt3Un1ewv8T7MX2LVVqbmQ7",
  "key38": "384pWkUbRYpvxGJJWrpdJzQAsMgcW5UgaA5duwJGf5rbvowNfqZmpBCwXAigzK9mBR6Zqf8n7rg2uUeNZ2dAovYt",
  "key39": "2mCPhsYdp73ZN223TM8oM5gBa4mhf6tw5caeFyqvcvZcNXbX4tkpfvfY1E4QmB9nYWKczpDswthxpVJcnsy3F7mg",
  "key40": "5hFRE7ZbxnDxgGdj9rLKX6L5sm9brWs1eonqozNwzEtzXDz3UVwzPE8fRE1e5NtFccuQc9t91A7VorPGkKNXvE31",
  "key41": "Bne19fgXnkNE2qNj7JRnSZHjq5ttxwbL4FyDhqCnT9dJk126kwxpfxe4WJnbTRcuHa8nsfe6kz4PxMsjxpc1g6X",
  "key42": "65nBVZV6o1pwFDDSHUe87PjXhXu5Rc4Hvxv8sdKhw27Nvf6VYUxjFdnzcHTPwDBrSr8rCLZeJSkeTsywXHRoYUyP",
  "key43": "eZp7namrTxGBsBRmq9SEDf1eu9wNdDVbG1R4wWBiKQjJJ9QBD7Lq2b6QdYYF5SRwrGQN4ZWQcq35skDWFfk88T5",
  "key44": "apH1dgz1FMkxu8LNbPc6y4XoF8a2oD2t7tHoeJRnAtiF3fd6kCrEgyg6bYy7VABkJHF1HaH6iAW1X3mSeWz6dsC",
  "key45": "3rT1DUC44dzeDWbHAKW2Xov1sSxqgAG1HJys1F72gny2cnxeV1BMTPz3tHbchgD44trtW8PumCsbs5ErriTaK4JU",
  "key46": "3vYoqBLBBrLELw4z63V3Y1zkDcfnq9QYNQoTGiTQnh8iQxNxnuMTpZwyEsqSGkZcA2mE9nJLRzSDJvaSSxC7fFWz",
  "key47": "43ywRGqRc5D55y3nUZMk2vkA64EJH3HR1He7iAtYw7GQcSEgDmjB6Aa8gsxFpb39BC1mM3NtvXYg17aWZqoXQfPH",
  "key48": "2oxZ4CS8yTsNaeeLY1wNGqZjVwdorVC4m5N38PryWHQ3oVLgYkAfowMLekaf3Yh4oJjh1e5z8M33EU1nCDAEbnnc"
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
