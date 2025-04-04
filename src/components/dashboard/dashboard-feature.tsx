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
    "3o4FqAUD8KE5NGZqKWEsNcEiW5JLRfDwYbCaj29RgGqREfetzFkmrzRkHRdd8Xwpkhofzda5QfiJZpuBqre8KJJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GEmftR6JYMQyjFhxw7xZBQAyAXrntxuyqwFVtnBNTG3YYbgWTiefAUNJyTJz8LYJJexBN12ibnV4uWJfFjG52LE",
  "key1": "2MTL69nNJasj7GFujGn3XSpz5SUfLoUR5E7i6pyVCaLvC4ZGGqHGF7y2PM3Pgq6LUWH44wkotdsXjFnkNbPRY9qv",
  "key2": "5LzZXRgvyE9rh2Ujq3Hmd7dEDwSu2TCQKjCHG2wH3sNTVtfn9sCFhqH3xBFnfHyJVo4L69HoLx7za1pgpsmFcwpb",
  "key3": "3WiZpC4RM2PUR26pjTDYkBskiXpCN8bUor1bJmweEqLKYMzTSq6Uge4aswK15DFHKWmRdoGSnCrXJ7nMWPhLgCmx",
  "key4": "oBSVWFBJ1aVLdU3ice7G53raSZ8f7QJZwytaHDjc2dcazU6sfKnZB4Uj8e2HDBRH34CfELvrC7dGFTYXXUmoHjY",
  "key5": "2y6yU5oYAS7HfBAdET8k8LiinB2TAR5wW2uH7tH3xfEdQcxkNXXRFnRChvhLL1Ai9UmJ2n6mN1pdRxSnsuKzazq5",
  "key6": "2w1rRXF8sikzV8bYytAb3Qacj5xXrXytA3TGe2576KPCk42cW7sbzNU55aeW1q7Cyh9rZXSRxeCnWs5bWLpWnEWm",
  "key7": "4EygmhEC1A3YavrwJVNY6WU5tJJnKFD1mGVsiWzE32rJVcpLj1ARZkJHZxMX9E5NbnefnvPMat4ngzHHdJaB8GrW",
  "key8": "xVHbxiGBhXFervHgrqb6p4NiLxH9U15EJPYwCz9wGxNHgCQEMuspdh3SkgzFvazcriB328ueAS9KnoZp6oSTSz6",
  "key9": "3hAMyoCXK7TZ8rr8KhxdMwRavDDCqbJrVALcCCkkdnsZVw8pmdXh2Dkpp4k2o6KUVUrovUYdDv2cwLL2XA7kqAPM",
  "key10": "4csnXsnemGfQnXyyDLzvzcNYVgwsKfHkGH5ndTtYA7hKCaMpfsirdPhHEyndWzfoxSkJcWTy8p8Gq55LVRNSBNi",
  "key11": "5UKj2yKms3GsrquNVfYaXovsrmucKBePuQxSU3jJYBuPWfQ3CUP8t1BUvRbfjHPeRFHxYYuBsBL7AZMDD2euiYLo",
  "key12": "3GqNqpdrLtoYk9vCXM2HmwVmFExL4KDq6dsicqHdnS4XPRY6Co8wfrajiaej98zornmNzcRwqvnWS9E61LRRjLTh",
  "key13": "2BgJLxTTfAhViTYbgKbHgXJHEQ8UZL8mx5B9KhJrDMQKXv1jpdZUcLE5HRKyDXVd2LkrYjurq7Gs2agdTvrRxHFN",
  "key14": "2fQGV6z7tvAFAs1QvdmcrMKxHytBZKQQQdwpU1wo6dADh2ixfWexMVqYZiPcV7YdatZjmCDYeDPRmmrqTCcN3gPV",
  "key15": "3UPbWBgK7FLfmpcan5P6xCqCY9yxiWaoa1z8U2ASXSHtPv4iWaNveDpdEyEFTRysFrYbicnug7ZLxGgyTbpVUt8d",
  "key16": "3y9K2AdUpshi5fj5JRTENtzSt9KZdLM4GhqsbR9F6urrPNNtM2KsMX9ERvdh8vhK95ovo8DnvkT7dtKq2cY7BLfv",
  "key17": "4kF1jBq8hsbR3nni4NRnh7N2YnQtwn5SCiWeGNqUrBLZsKuab4iNXbU9fwbZoLNZ6EyYVEyELDiNGsfezSXZHiRM",
  "key18": "4FhmjDUE1f8iyxZ3AoPWbb2fhReNh1DyjKxi8DVK5VEtAh2najZDb4LDKySbg8xmxanx4iyMtATqjPuydzGnPdwG",
  "key19": "2GV2orMVEKSF7RUXPruWnBTe6VkH9owQC54EzN7Vx8anY3P2ADRJGfEBmcQdV9mBJZeDjbBqyezqo9Sn91saEjVJ",
  "key20": "67G6RmMQYp8CAHr8osn54qGEeoo6yCvF7P59mbqCj6Tqv4kvovDRWoPzVa5pbqWgAPHADjJMbMoFtUQShFDi5YuL",
  "key21": "66p2r6h79TF1kexPq5E1MYGhhB52LbmUEztRt3mJodtQzYZhAW3SGb4v6hNuQkvvsPL6yni5MCbzjDGSoe2sraAr",
  "key22": "F29stHUs8ELDLU2J1hwyxrBrSMHtvU8vntSUMCpD5yKbRfnJQJs3XxeCDX3y1bDy2Wz6BLw9gp4d5TF4qFKa6HQ",
  "key23": "3fJbJ4RGTTH56k7iDPCpPnFY4wcHd47JHx8x9i1yvYvPZazVKoBmBH8VZbzYoVqXuMVtCuBYC3aqJ3MVga93cg7b",
  "key24": "33joJb6YKzEVDsV1oAL6EDByzKasnUbfGYKCx1v7jPnzV59foHAa2CroiPjXyPmaRwv8X6BiwDzGRkaYzvxkM8MC",
  "key25": "THckZxU5SxCAUxXyE5bWqdLsHwE9M1oku4TK2nc4UNkm52TsqP1nd13MtfCJM3GfVQpbpdWg9bsxLNvZh2Ch4D6",
  "key26": "4xFdLWvGKezA7r4iZoQX2fcJyQssYVMqv4buu2vAfsALmPUe6cmUd1iQyYTtvQ5LVjC1o9tYYWvxRKSMAboQjjNr",
  "key27": "5YqmAY5QoAiVSiW63TknppCbwpUf9ZfKTbUJLqbh7jwZf51L6aWrfi3E8yhKRtLPUKKNxgicAP8Vs1sBrzCKyeKA",
  "key28": "ydUt5rKHz9EAiv7LbGc1TxKdZrputbttXq9pZHjBhX1zctRgviQTyPvCwVWn9Xvp5vkxdPFhzn5hQfEizzwpUU6",
  "key29": "EMMqnSYF9Rhj9KA37X3bFTgaSjHeEJk13ZN4noWFmKshqDcGxFccGN1KFA6J6Ft6EtMNKLjV4oBev7p1eZ9BAMJ",
  "key30": "4KwHctJo3QAHAimXLwmTp1a5cj2PAuGX5NZwtcetrMh8vQ6ywwST3TyGhDVV2mkMEqMX61TYeSnEJzYFAd61cH55",
  "key31": "3vBiCdK2DaZuPzasLxEEYiJBZ597JsA2xG8aFdeuwan87AYJ8D4U6JDW3xCkN8hRZ8UVLkprNnerquUhxL2K73XR",
  "key32": "2ymrHK9c7GsVKyQuksCYpJ5NNHUWvunG2ea2Bwt1cLyipwrnbhdTd6PnZDX1XrVRwU4jmKWnUG6WkcRKcFKczFsh",
  "key33": "R2NHttaQRdLVqT75mCaNKjyA8H7ZdvgvQBSxSBzT6GhMRt9Cr8KCMe2KnJSRLG2e9WYYiWFoaF2jVz6nvm3hXB7",
  "key34": "3DzpaGwtqNm3RXfid1QoVQZaSVmp5Yy9pXpSz4RVr486zMJnNjScyXfUTCG2mBSt1wUBwQV7wttESpqfV8moDxYM",
  "key35": "4nDzkAR3aBBXKfF1t47xgpcwZz4PecnC8f39XFf1M27h2d3ygjM3z4rtrN6qd8tLc8NoMC5APWvAwdTyw5X3Lw6m",
  "key36": "5jJBiRPze71HzxkUgthd564bkHa5fRZAUEaSBg7avwL2yu95GdSzpqVXhAi9352QLvurX5EssRuXbepXx5iXhN2L",
  "key37": "428zWxEjYgogKncohe91nJNLszGDjqwZ3YqS99Bhpve9GTC8qsAjLJoiMWzA8Uh58QYCC7tKpjKdxGq3riwtan7u",
  "key38": "3JQeHzg824gTEEuuu4xN9f8R1UvRckg7Nu61X2bKCUqNstJpTNtW6bba3m4P4w2P1SD1QpwJF3muNvEcESZTo6cp",
  "key39": "4hhShjEDiLAx3mKMicifykek2WzA8ccmHE86h69xQo89yC4GsNB1h6zDy7jwXfA6TMZZkLhNx27oDEnpFHZUr74K",
  "key40": "4oRbddgdqGkNXvnh6mmVTf7XNVQmgW5u9dGj7EDdJ6r7DXV9wXCzzp7Gm1Be7Rsen9iESBjpjzZFXycgpEGwEcDr",
  "key41": "3x4ci1eumHyV3kCXUS3LeJnJVKP1bSqd6VNEeHe4riBhEioQ6KfLXPpe3y7afXd3ZdywhRVxSfQ8ULpFJC4yazNX",
  "key42": "r9oQVZ1p6LM6PZ2uHzYS1Akp9c52wo9Xhq42vCXR778dcd9TETtQ4sc4QocSGCsukRZ1YpoD8fX84bAHFrhvYTn",
  "key43": "4Fhx6o6bkARhRbTjFceZUsXoUKYir21jsiYqSqYGKYxoevvPbqyEy39mzSohAysWkLpYmYweJdx7P5AEkJwmsWBc",
  "key44": "5YPD1X4wtRt4nWLywwcwmHNAes2Z1sM4vP57FgfBF6oNHbkLv3EXS92EWgMEhu3Ncf4f1Gy8oKUWbRjMxzu5EYkV",
  "key45": "hRdoTdDE5zvBFp5xpEGbp1A5dHhEhzFD9cNyx8wHgfQNw2o5w1sjG9yF7L76fMoLJVnJvQsPa5aGuC5aFCwiXzH",
  "key46": "33anjJ9hRq4WqYomtVoT387YKoaEnPHVxVuYisGmbJFEvno5C87C9KyQQJcW8L7Zdgk1jqDSTs9Gcx36ogNvL8MW"
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
