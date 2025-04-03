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
    "4oykQJjT5WhUTpuezmQgg85MLd5Fy2Z7F7TrQ3ZGbPFCyBWq9C9eFD8J7PjWZ7j99T4fnkJXEp9qS18SE9SXqhRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "353inyraX5g7UkmGf77Q2sbs4jEJMvQoZpmVcU63yW7VJskMtz6L2bdsZXnRYBQ1mnT575wa1dHrFA3UUXsL5EKC",
  "key1": "2sKhYn3xUC9ebXjAw5PxDrqGeG5XKVFzuWkt4pzXBpF9Hj67t2DFNmHP4iiAkdgvLinjGBY2nPA7FaLcJbNLNMBa",
  "key2": "1isiByLChHpvythFwN2ATWDERVBV6nsgn2aX3rPvTufm2ad8bZEhCfPKfGoNMEdKfB35Am8tY7rF3pi8cFgR6aK",
  "key3": "4Sx4k2m2NZ25575gRbvrLAczyrAEpsgBH461Tugk7kRWkCwMucPjNZgjSCJ96QmdLZ62YmAtjprScENBme3QukCb",
  "key4": "5AHRU92RGpR4v83DydjkBxdZaPDM2DC5f9MuypU1H1eYpVKN6ezHVv8zAJyRc9V3j5t4H5Qu4niHt3q89gvGAzNt",
  "key5": "2uDuncNaAWns7ez5CafWa6TaCUUaWQ18AjY8YeDcmJAEuiMVPKA8t4rNW2H9RSJFXXtvKXEKwBnsVrMBqeHYxQU8",
  "key6": "3T5m4U9WvvC33LPUyREay2St5N3h66K22obDvV18yg8aDCxbTVdxYSR693dom5teEEfyshPBSuyF8iaQA8puRBVD",
  "key7": "2bmEcFCz4A9XS1BJtUeQ75kJn3P2e6VAp1HBvWUaBfTBt99Lu7i49aatVht8aHGo3g43bZcmt3eenm9YQ42SpDQr",
  "key8": "5k79tXPn8GDBNMFtWLwQB7HCDm3QhqdAgxRQBixAu51rtVYnKt3ekusxhJdJhhce7VV2eBJtXWYt3Xi8uPXy9GbX",
  "key9": "PSUieYMisruqryfnsVYoZKFhNk4crXeaEbK7YiJYC4m2HbBzg7s1Ap2Rp2FwPV23LSDDxpFdHBW7KD2LH9FFm6Z",
  "key10": "x4FaJktQYGnezneCXCAWGvgCUwSpoMkrw5PYHaGqzxZpghdu3tH88jGAKVSkvQj7CFShHYb3ht1fMdU8E7AGigp",
  "key11": "4EsWNrM3Z1Q57fCLfSmrqGEJDfC8Uet3E7Kji5TVYeyGBds5bdG9zvpVAEnfQTSDDwAviWZbsqwin9hwT68keaJo",
  "key12": "2XSnGv6zdoYgyXHZ8jQYVXQ3KKPzWRwVYkDW585JeFdHXbasX6bkSuHYFyvcx6sSZgPsZ4bwZGjHoR4VwiphrYvq",
  "key13": "5BaEiQkiagiwWyNHXinvVu3sZ97RdopLeXaMDKW4mu3K83gfWYQxteezdDxAeV3H1jX9rWzYVrqpdQsHfD4oFsc9",
  "key14": "2WFz1EhRmPnbJBrd9cB6viaRcmWYp6HmzRwW41S7h1rQgFh8RYfzJCv23yhE2fd6mPgmsqeCE2Hti3GemeFzCbk5",
  "key15": "QNNbmuVLg6hj8cM1y5htzWo8vRCscX11keGU9WoN3bCnQVAu8gDE8Wf5Gur8rED6iAyNNgZyY2HGFdtdUE9SgQz",
  "key16": "3cXq9xfmdMgKDbyLx3yNwF2dCvYbSV8zBxcYrimNxkuTbLEVzxqckZaRtuuaj4PbbVLMsfxnahFRb3Z4GfHAUXhD",
  "key17": "3WMbRS5YDN8qik9oR34DS9pRCR1bugmSzMmaF3ZtR88ZaND7sYgrZWRkb3nJAyAY2Apqfh6EG6XgMtf9kUQdeRw7",
  "key18": "3ffkwr7DbxB2cZm4DgBw8WS78bqcL8chkJncACZNLtvcFz6u6MEtjHc2L7oWa3kcgTQS3SGUdduVQALnaQQa3bM7",
  "key19": "5dUWE8XqBWZe2id9PZA5hZ63Zfkq61kzuRguu6eWjPXKhkE2Nui2E7u4kPb6uxRNfx7JmFTxzGMBupLRsvXMppEW",
  "key20": "3hrAqYdUrUiyvrLu4jbNQq5pSimViMji2bZAoC5EqFiLX3XQERdGyhFQS3s3gXvp8sJTd8FR85U7xbXXqMFcUe9J",
  "key21": "2B2C3QZkLAHeZi1RKQKL3SYYb5oG26i61eWCGL8VrBHpYnqgzC2EgUk5hq16zwEZk1biS9BRLCZkWP97my5vicaJ",
  "key22": "45fujmW7xcin7B4shxGvigaWaBPDyAQnxBZsUq2B6jaZmL6UE6FtwXU5ZfBVpUxSf4UzUDefbEhfwtsmu3Jv8sz3",
  "key23": "5xFrSYPsCuK8PUDAPeSXE3UD95V1c5WueWnSjEerx2fmNiiYVZdNw2P5u17VmXvWMCF1K33zjFVD8xZxAnudJ8JU",
  "key24": "2cPa1toYM7sZnQcsGeEo1czC7Yps83w2ihGacDRtLYoYRmBXQY8cxXw66NNwQg8x6xmk1j7dhPNc7V4oFGx9FmiQ",
  "key25": "8b28D9ALGhUBmeTVMF3qcidUfWjXTkv4gijajodzksyWqaeMmJuR3EkPKPJX7wwx36w2BnBCPY42RBDKDqMwtzf",
  "key26": "yDzgf8DSXwX3DmbdbD3bAk32kH9uSCbWQ2DAQmPgN88EEUM92uoMtDGGWuk9LQRp4fMNAAiTkf48RhUakKircQQ",
  "key27": "2xF9Sq9VkfwdxZhhBNnupu2dKdtY2uozKWPdvc4aoFoG3uSVJtRkR2vcqvwa2K4utKqYcCDCKvw4CMRnzow7s2im",
  "key28": "3AmPkT8VvXQgdEM6W8vJG1tfuojh38CiXy1j9vFCPckWTkLy8Rtsi7ThYKNJT4g2VLYzS2yx17zcXSrUJGjrtGis",
  "key29": "4c6TLXhYiF5svR5a43PftmpFZmrnNBCucqB7aix7NGGB9adsLDihxfyX9e86s1j99HFsUkcMhhtjZpBygrXJ3FVR",
  "key30": "K5z63vmdtmG23GWrSi2Zw7t2pKs7AaxVeGTZZUuKTmaGysV6RyNCqkJwgbHmjpYUpFuDQ8D2mL5CTuetrqv9Pp7",
  "key31": "25fyRCcspq6Qbawvv6NzmqAfYhdxD2uYa6kFzEkxGxX3FGYkA5E4YDaqdt4Djop6WHNpJPV2fJtgdNJiVnQBJ65v",
  "key32": "5j9ajzasr36xVTiqFPb8fbBL2Y4vLfV4GpeWvNZPBo9MY9GJB9LLFqfY1DGWqnR9pCai8YMum2yDHnV3rwag6SEz",
  "key33": "1rCDHojWQR8MXUSamyNPPyVXNoM4AtriZurg6deazsH1DFgbPTDtVc9oCV9eaWkaFsPKBAaxKpvyCqqhfMgV9Td",
  "key34": "3cccJddXBeaagarJ9j1e4UEZi7WvHyFLyhr1fLAq7K3N6FrLwcrFKEq1MagtzXutESkZQhfiWmL3b6ur5veFZpzd",
  "key35": "3H9zpZRCTZzJsRDtg2yJJa7WiymbFZnNdDpLBsHNjtCGRRd6tvHCcsiKwa5faNJRqP61dRVFWYenLdq2iiz6bAig",
  "key36": "21jyKYZehy8tpUpVQnEAMY9Zr1x1CUXN5WRPXzjJod9o87t14BvGpe2zrBNQEFZDaqwWoRmuMvzixJdNuXenDyDY",
  "key37": "cV6CGQPbCQFm3qe1HsAQVU5rkaryZSYQjiwasWH8AsfNb2by2Ni8Htsd7ez7HjpEAU6tFNmQj3K4NrjTVeaKQSw",
  "key38": "4TCskLBGmbxhidWLtTUC6U124A63zFYDz9mcaZ8H2faaoZn1x2LLMhFwXJtuujL1VxCzGHf2bmr5hzC4z1PrFDDE",
  "key39": "5JisKVxnyJsXVE8HswqcneKjiYsKac4EpDeL8AaUgsxiMvaykG6HqY8CshgcXKjvdezprnycd3Ezuwy7tiqM8A44",
  "key40": "4ozaaWSGTSZ7hAJtjGnurEjfxiA2qVwSygip7KmgCtj3ctDxssMWG3SwWWziipz8kYNWqGsWPH9aFznEjrEc9Sit"
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
