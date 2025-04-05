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
    "21pn1jgS554ULRXK8HLSDued1obKJdNgRB7y2LKVsUUhz5CGnuXb69SVfJzUeDxrBUb6P81CoCtJs3sSVBVuw6F5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YFanyaguCLJxpQBXCqWiPLBcmdDq31oGnxYUZSZ9b9Gqvk7t6Jp7YkR4zQSiFDTPuuaky4ror31FnztvX1XE5qt",
  "key1": "55qniW6u6BdUYDS3j5voAWiuXpFDNC36QHmmxDecNUrn3B1jn8J355NS7ZNLd8zPHmW9Vdm9PPPeCvehFMwZQZhz",
  "key2": "2YWmdhkcE2oLA5WPbbAKRgZUBrdi7BWXtb2fyk2vc8viS7yA1xXXQqiL3fcLsKpBRb9ih8G7n3s51JSRcd8bN6UJ",
  "key3": "2BaXcfp7UoNm6F7HgJ8FCsUxSgNY6pqaCXFKFXTTM5xTvfJxsSdW7df57QA3ipAPZoshrPMqZK1tnzRrz3i1U8jg",
  "key4": "2g7DxXb6bb2zZZf4uGEKKeqL97TpNy8Bu9tcCVaWanPkvdCqykryBqAsDvkY3nmcgLHE6UszTwkUuydCdnk6CXLX",
  "key5": "32F5DL29oQMPeKfMvTax8V84PuP3v5jsppzjru37M81rQkw6Q6ecX3ck5fiTbYJniZYhfa6fGfn8ZsHajWhZBAPT",
  "key6": "efcFrCay5qCxkwpYGJWVeM88zDwjbbuhrNcszroPu67sm529hNLf5R9jDuRAhQfZhSLQexn3JcUdVxwuJJUGQjh",
  "key7": "4JRJ7QuyvVYR9vEeSg9ps6bEvGV6RamafqVK9gKwbpSKfChigzr2praN6zxvP64nu9e3GSXRXUUf5RRWSujjpyBg",
  "key8": "3VWxyAuCK93dBxStocNYLfqBFmcTTwWp3PwmTS1jBe57nW2sKiczngvue8JfTkDuA3PWyBZzgxmgwFkkzHeEPbJn",
  "key9": "PACvEeMUm6YVqXV8hSjuU7EcPyEPqrRmXViHoKozcLgKnpq28cqZUaXZrGxGncVmG5PmuL8fywHViECL83RVDrt",
  "key10": "3PdRZ6hAx1FjjfmuLFuhMi1zC2RRkXoTWgepL5bQuWrfh8fJRbw3qfEQzZ2SHUKC4jUkyjdBqkiBCBbsiXLGijXN",
  "key11": "4c8X5pXHcLZL7Th2Z192DHocfR7v2gHaxDNc3qn5bgXja3VMF5jQfrh2wdkQcJyuLjrZdrFaohn3BY6NtnBsKA6Y",
  "key12": "sKibTrx9C7pBQ3FLgwnYJFqjiF3N1CqNzoCoRVDNyGGStXtUSADMvnJYU8fxpABER5g47uyFELtWfAexcVqe8qQ",
  "key13": "NKvuGeBQDmMqCbRdyEDfhffbZfhEmcRopmrAkJ7phEZpWJDDzYQfYiXADK6gukrDz7Mhzk2YGhGvUwcSSHHifEy",
  "key14": "VqqqbKKiZQ25w1wRXKrkxyStnS4Bq7RzmyHgjCSjZwPArLwAHFV3ZT5PiCMudSaytrKC3MPoLgVgCuc4jFbW47b",
  "key15": "4mth7F4D1sDdMMZ8qy5WdjWkbqPojais6tbqEST71fpiUwSaDq8iiFUW6GpZ8Ho1MktPRPjgi5wyhCHxa9JAX1sH",
  "key16": "28ZATcZAmn83n8bnsx7BKAKtFbKGPFaKZJ8r7shhWGHfdigzLPUa2EkUrpi4Th9QHsfrdjy8puBod44sGaaYX6jv",
  "key17": "2AVoSnUtzVaTL1W77edq4HK8nRfrdqgdzAvQMccw8cqgk1oncLbaDL1fAnVeuZ1qQGDmKNmLMU98dbDNh2SmoCqs",
  "key18": "3bPXW3mg8sybv7txRDyxKdCUSCFMuK1oRUURuq8ZUwXY8eBLjo51Mo5dVt36M5W2nLVje48vndRGf2FWnjg75rHW",
  "key19": "1284L1UZvXpEYYYEvyjvw3Uu4ZnRFu7hfTYUbveKYjn57WE3LJCxQwzoCZqX5JNsy5BRetGeTpsoRF3iQWyRWXk7",
  "key20": "4Emn4EYUG6veQv9o8kASMWZ7SjUXyHhdZHrGwKdcsidGTSAnKdVMy4LrnY3dubseECQWQ6EkGadhxEh9XoTffKSQ",
  "key21": "5Pgg5ph3aExYziR4ob3ppZqLZ4fu3rhjgdSo47JrPTLg8iCco5W64FL8Y5c8fdePVw5GwhF1k3AabqJzteFrtGS4",
  "key22": "4eMF9KvgUkG7WAzJ3hb8Tsyq3Js25nvQZWHe4NGzdXMU7ju7mPQzCnJJNxAhkTYL4TXaEjCcpGM52P9zYdqrucFz",
  "key23": "9KKnqjkMzAUtmnppjbuwbqtT1Eh9YgvwZGvfgK5X6p2rsox3qZDRQqJQmaskoWLVBgfN4x4MiXTH7wR5ufy8tyg",
  "key24": "Ay1fhehGYLJ51qZeSnQ2btatfREcVRTGbvkhFWE6CxdwbpNzDX5fGaPKZUn2ZYTv9N9898BwumVwZt8oBGMATGy",
  "key25": "31MUJ1wfChxedthQrUvw5xoeWKUd7dBP9uJPuzgsn8bxtYoHotKZe3LN2tXcjJgNvVyysdATNVTup6aBH8HGgrrA",
  "key26": "2kBckd5wgam5MuHG4q2S3GaZoAq6VnbQdLSMZ6EMndRB4J6RpBAwfAKsH8joaBnnAcFTezNw2CLzXjASuhjVs9XM",
  "key27": "5f3uwKnraAaqg6mpmxaiM2ywVDq5awH8SrJfWeaH7QfXBfjDKPyZR9MCBDkLxVxvXxHc6DymoUUN6TfXzFJUVCKk",
  "key28": "41CjJL3VmHTVoMda1gJocLr5a3dPpmd6cKBe5yrNC6s7qfcPF6hYv5zfvu2kxto6M3Vnovx8c3KG49m5QRVUwGLp",
  "key29": "2x6ZPFSNFj5Src5pmnggTLPr9fwYsGgtUFSdrTAHQs7mdxS1Eq1d6zuJ17qbko8G25rHyVdd9EXYuSb2MA61wcYU",
  "key30": "4EexdMQg74LUtLhmsZAGTi8apk6RThx7Rwk5BtUseDMMPYDcTqAqBkNGwiFDK3z6KuzPu6nReoKNDMGPjXQkdeSy",
  "key31": "5tpktmAxMkkoAhg3RnKayXAiiiwQVXfyXtDSjhNb2hnf3sWderjP2Zqn44zS8Trj64qy8t5nCqFnZR52uKRzWyjq",
  "key32": "5weizGjxcBq6Ba4xCCwdZ1X4m9zwZt4Js3HyeAvJHriaNkvwc6TCNatzDHSXRcXxfLqRPK76Pi3cLjS8QEvsFHBH",
  "key33": "3dxkqhhLeUPwR3DoxaMuhYzNoiiyLDgoRSyf98tFan1QkQHy2cCnhWbq2mq1o9ctLm8gXokQe4NPRVMJqKsZ8Rv6",
  "key34": "2qZM7XS5ig8dXPQpc4nhuevsypAySrwMYkzytBQBssuDHHnwJt2r2ispYcagx2S9gHT973jj4vQFYpsv6jT3ranZ",
  "key35": "3fbYKHVu4mQinUNeYysrT76diqwLdd899mqG28ma9W5v1U7uGyAiMyzy7hAoUdiDpK6jYb7b5h4NKuRCWMT9pRUi",
  "key36": "4CG4Rt7wgbD5NkoPxYM8ZLNawYNeDzdAFwm4UrhEob1gpE6RnpxC1S3z5oAM5Bp4vBnurq5KWYpVoYWfWsr6pXTR",
  "key37": "28FULY1uM67YgB7KNqusVNyr9LGDifFtVtkVUSdhdRKVXn8LYGXgLcgjWKRtQJgN93qgmJChUPvs4nhv8baVEbF8",
  "key38": "5aYDggBBaxWGGB7MhYsPeUgNJF8dgoSYBPToq3LLfP6oSwrWrj2y7vt6sH6kG85un7wCVfGxZvhX5paPo9afXUjL",
  "key39": "5JugYHrre9utqgpZwJMAhjXKDJMNvVvjbZqWQAWMMoRZP15gmo1gi2L6k1ZzddpQQRt44DeGEkDFaoxHDdW26sz4",
  "key40": "5zedHqH3266ZafUrZkj5Yng2x7vBKwG5M33Mzg2xW2bzFtPcxKbwf7Ynh3aHJuQdaZBJLXRRdRojxR22DVHC8vC1",
  "key41": "2DR5yAgVikzj4QJxkeyzG6jpU7eq2q6JHvRhDtEJD4Kx58M8VSFZKpMf7XNqXmiBVJJ25cwRYjgVcyhUgQG4ZCyb",
  "key42": "2Kwby8jNBQMU6t66QdQUhSDbovTVsY48NabKgrdRDb6kFWf7kNNdUUxbTVrB4RZQgLVJytJ2QmGVKteH5um7rSko",
  "key43": "59d4N938F4GNYhsqgtV1HHJrAKYGE8aVi51XfYSwnYMrV84i9vofsHQRMGBNt2NvXUJcGDub1WBbV4gMBPqhtT9u",
  "key44": "5fppABzJTcLWAx5e2PxMYzJotTfM3iRMvHZaJjV74R93PH5iVnyPvYtRgXW3XK5seYoMEvKMpqiAgVtVS5habk18",
  "key45": "3Uk42npo7ddwxmZ2JEoKk7ccumHDmDW8k91rX6c8irtVd69qTe9oBsAvK1C6vLZjSzMDhJdDfmXQDVSKYxmVo7Wv",
  "key46": "5pxcbTGgrCTxjDs95BVJUof2fLLVqKJ2xQvRhGyPYDfEKVQ8mQvy4Jum6mY5ZEvM9ChX4XaMDzYTgLQqPckyNqzX",
  "key47": "3DcCr1a8Dws6DHCrALocUDasfsvwBJoLhWuhNPRF2PKV75D6KKKMKFBnaGUSPDTKRo9CYvtJiGGSLduNpugYY8rt"
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
