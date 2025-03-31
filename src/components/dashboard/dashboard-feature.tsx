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
    "5efpMA6DeoeXFva9QjLyfoXFKHu8NaeSiyN2qijTmjAoxYJsFDa5uYJTNvuPXH8xhqqk3kAAmJerHCWtMEGUpWMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gtA7S8eK1jsBo4SWtiNXCkmAHcQUs8pCNFdivSiB4m9PtbD2chDqjQkfaz5HBerjCBCqo5FX3aX7dZ8JwgpkGVn",
  "key1": "5YWRgkHvGeJTFHY8DkkCGq9sjfx34xCAkrM22m52oesSTSmS4fT3dP9EfSPhTTF35NcvkcQFKcbHp96BrzhWDYy",
  "key2": "5PsSVBDLZRkYanVnTfLeLpRh4k3o8g5E2keZgz9aU8JjizzMVGUyap1oZHbQ95KVpmUnzmEq4y5KWi9tiUSS5v3j",
  "key3": "5jubsxZRst9W6sfRtRo4XLz8gULxuK3ECpibmJULf4uNjQofyhqBKdW3vWNwLccuF5hCJdkGjereExWQygS1rdwk",
  "key4": "5wTVBnHumnyuREFmkSXYgdtiU56gp3hZFbRaXPofGkZs6Cr62yJsvBFwWzaW3vxNfedU9Cq2ZerJ1bkHNUziCP4j",
  "key5": "chcBqseBDGiPj4vn2U7iGQN39LokdwoztZFxXMq2umYmkFSTS1offtjr6LWHcxMgYQajvVWz7MSMzL35nQAK2BA",
  "key6": "5MMq8PUr41aWyqbYZPockERbmTnXWj1YXEB4cGEVnoznQAUkVhvkucz2cwnJEQE9HDPA6xYWoep1pKKbM4Pdut54",
  "key7": "2ocjpfjDk8xHxLPpbYXo1kP7yRayFqKcCaDFgZ4njTP2Zm43uM1x8YQmFuJRdeM4FSqYmsMr2uNfmogY7QeNoTks",
  "key8": "4SQc9EXnG8ABSqBz43hbTRa3aHiiqKiPdKPeZAY7XmdNS1h7uZqeZHdVgnyMNTEivfBfWvu9SXkD2BipXLDcnKfb",
  "key9": "5CEaH8mRsdCgchhKLo6mWaSSiEPh1LfaqK8cf1KjqjGdDTekgNTjCtbreXBx7pMBpxgCU3u9kZVFN6B8hPnPBmqq",
  "key10": "3uRqAKQ7RnoLWAiPFBJnGGFKTBSSfDko2Zw2BD8rybcpW5UGZsNdrDAdeofqXZioGtxdidM7pvDZ9FQ2QUvxkWb1",
  "key11": "kh8F7bkgzxhspVoj2jRU8jdWrc4VdLPW5koxudbFHbCHjCq64pGw9vgAvbRCsVSH1jqAQCrtgW5N6MuUHkzErjC",
  "key12": "3AmAVXK3D8ZHpfYE2VJqy9TSNSwD7TKHGVUCs7Wp4DDx3ZXap62jVGbkMhPkH28hEc4AARiNFywdA2CVquPozg4H",
  "key13": "5RnNMtfzmyAZgrSS8h98tGhgUUNuKE1tUKzw6jfxXtxx6kSAfYaKcpKoFJFa1HnbRnzuBkyYtdRujV1mxEAQhRKk",
  "key14": "BqQSJhPAUiPx7xdqySaP7X7scBUTJeUNq8achZmciQUkWdJfEKVQMWGrNguq2BFsxWJuVXVK1x71zux1azrc42J",
  "key15": "4gT5morLMQ7yZEATYMAA59nxUcv8LoBaTWudn87q46WPJzZhWxZKSHVD3fLhw6syMJ5p5zEyK3zLKMy2qjbVp355",
  "key16": "xweWqv2YR72RirknbrnVsNiaGZYo9MniRGbMkuiMAso7r3fF8eVYTzbk5rWu1pF5eJJ9AkH5Riq5LVwVBjjZwcS",
  "key17": "678eF9mXNucN9c9dWjiKF4JQpJbg7EMNrwKhn2E5MEwM3VNp9bZ4BHBHHNd9xc1qRGidAKxJNs72bUDemC3CtmKH",
  "key18": "4TevPvUukSSyDgbywuud8EEQKY6g5MWTvDBAwFmYM31eo1MjGw3mTxRtY36K7GwTUWwHiBNXB27SCY4iX7Rmsoum",
  "key19": "4LJEiL2Q1DKho2Katfr9ys7K1q3hiwU8mksgKVpi9mudN6q7oWruQcKLQTjcZa7Jf3T9ME4QPRj8cY9zuNRq86DV",
  "key20": "4utyQfX3jiZi1SvtJCK7agXyqRkMkSHDfgyDbC73hBDz2KHKH4yjE3w96bDNmcXM75h7SkmbysBTAcnFsBotMzh9",
  "key21": "4MXUzCj1AVoeWv37t5DfyLC3uT9qfmCrTdgA7aitt6N1z9kBrtxCmHYvxvfsW7HNM9WXtSoF5DhWsGW1QqyW8Yi7",
  "key22": "2vf2Da4gQYqZXUSsR4LGbse9oqFRvqgnYj9WzP5cpW9xUaPmtPV1gzbNoCcjqAiPz1mcZDxcWSGxkqCakgWBNFLE",
  "key23": "5GsxkRx33sSCxSJAuvFMd6faUNRxUavs2wBfKMaNzfyaq7HSmXkM4bsEQcxWZafSTq5TBAdgLBErYKPmJ6EG65vt",
  "key24": "4azMRp9tFdmRaGK84KaJ9kNvyGCFVnxthLGpth1ZYUY1ZegRGtMZAYM6bNw57yBgmsBHAbzKA1awR3JhxyR6Mj9a",
  "key25": "5au4nuXUzwKNfMSqd9ana1Q8h2admZnd2CnA8wwjCiaBY8XTHS3MfkRFm8KrQG8aNrLHTsnUFnBmFUgE2ZMvkj3j",
  "key26": "669jHYJeP5NsnQkKtqEtWLKDMRpaJTezzPF9L1atNxESa1zwRwwzpX3wwgKCgQEHUHZm9kPm5tY4iVziYAejDUjx",
  "key27": "5r2v7eGkefeSWo95c9XS1YKEKaMvr61Mjc8V1Nfr2ptodj7PMhjERyAC2G3YWrFobU2q9GqcipZUA613A6J5uLG7",
  "key28": "4dBWbpJ1CFHNdoY8J74NhSgxshuV8RRtZVZfL6QhK33pZmpAMMV7Eiemo7jPUHkbqWhaKAYyKtFGLfpRTjhsBbuH",
  "key29": "4RwrX6vdasL26j9EqhThtdRqEehSRsHSPrTnKidssokFWTqMXBkPcsJxibHfKH8dXQvtTCdC7SdojKt8LTFfveSN",
  "key30": "5rXRy388hfBwWnkH1CbvQ4FnxqK7UJu26vTcrAKcVf4phV5qdBvKhpFVmzvC56hpnP5rXmbUuKv2f5ohr5mLhkJe",
  "key31": "3EeJKPEy9wAXp64W9G6CQpPbXvcokj1SMwJGj4c6FQ2Bd5HmvL4qdA5zrmniefdZ6s7uKXQ8uY6WxVm37Vnn7FGA",
  "key32": "UfjcdWFQWeJcEGk7xn1ZSezPah2uyM3N1uTmsB5wCEuTCp5PwCkgXs27GsXb96zkiTySwEew1mx2MshfMYZLLZt",
  "key33": "2H1u5jzwcNMVMxYHhVa183bMkyxbgPHExznaqiveevHBi6uXFEChE9AmC1nKFodH6mydX8pAvjgxEudex6iz6pSp",
  "key34": "5d2VF1i5nfppXsKaVDzqj8Up3DcKy9yPbJUBvRZ7v5diYHbvWue2FF9PDpbTi52uEFH93GQUq7tvnJPrpEzAgMbg",
  "key35": "63isWGJ4jqy9SyTEQT8rVUPgyuQpqojectfM5wTLGNKMSd6ngtGeE41rXH4beJcDjHrwGXiNVoKFjLtH4S2Gegbe",
  "key36": "DrRGWjLvVGcX1xYj8vSk7PDH8gTzvcNiTaUkraHeCtHfzroWXMfxFocNU73TCJ7f8zLG1N31YmSuJwSkDN24ggJ",
  "key37": "35oCR7y7NYTL6EYUS1rppMyiZGfQhzCwTJ5VzA7GaXJJYLZNPThdPCzKT1FqVq9ieg8VhCy2osiyDeLfVqwDmKis",
  "key38": "5GDJ1BYVUAF8kmkzmPc9xywhyKxTeLv8FSAxZuCTHxrZWZVAVuNdeB8qZgyaNaGJ3XgBMXr5aAVhmGwqDEU7Tsgg",
  "key39": "2uufRky6uagkzob6Mp54Xm4azeRwiBs3tdjCR9uNSJhF9PueBM1R8KoctFRUecEHH5LzrrbYPwhELReWEq73XLzU"
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
