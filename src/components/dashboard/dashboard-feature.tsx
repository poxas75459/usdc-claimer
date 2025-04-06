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
    "YkGrsZoVjK3hjTruBqyXMdpLyNacGdUbCuCkG17cZxGef1VYUHtrC2j32jBu32bogRLWNSvDPjwDzMk7C8KCjQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oBNQHVNJCwneppcY5KY69Rnk8CS8JLz1bk9HGe6TG3yiSagL5u9vRneBFdDTorUXZBBaazmUiQYTpquV6RSQAnH",
  "key1": "2nZf2UPQkQzq5CH8Ht3xkCTbWEZa3MhxxA1RyS3hFduF8bgo5WRGDaEt55QPrW3QbjyQjN58p9sQBoX4JaAhPFJe",
  "key2": "5Gey8kUySTduqLVGRnaV4YDnJ1nQRAf2Hs44AY7bk9QWN2ZiJ4dukAor84K6EbL926EzjDUGjVyDouNt3sBGpdhi",
  "key3": "53EGS4KLfSaUsPJPgqw1UQqM1u4sP9BAz6DqCanEHz4EbVs7fYjoFccJ7DxvWasMSN8KzHiPwbZghPViA8LGjwhL",
  "key4": "QGBQMASNSVwkASiXktcwxgkhC7qSQkmUMdJMvETtker7hawTSKEAfetNnC9nqCorQnEUDPy5MRLDFJpMXoYD2uZ",
  "key5": "2eRw8LiXZSWAaQHHCxLvAeQ1SbawydU8rHyuuXdJRqxJMQjdJEFrQxrLmyG5YGY5k4Ee4uDr8e9twp8Ciq9RcXRf",
  "key6": "4iymX9ABQFWdmhcKZzuQpZkpphA4wdxQckJQ8RL7c3iDXe69yCXuoPsjvyCu7NcoYg6t3ZnEPJuGhCES2pnfCXmN",
  "key7": "3Fwmp3najqAzvVGvswPNYfC8NCRMsiGFAWUP6ioitA7q5eKYewFN8ky4UJ9gXigqMDuiTRf59r23pYuGuR8SoTQC",
  "key8": "2rhfWnVrr7BSU1KTgMwB7oTaa4awLu4dxbqdGV5eEuDFHg3XVABJsMC3YokTJkAf4q56LSEo8PVg8DWB6zheXoLP",
  "key9": "3qjWSBzqC3xb1NHNXk9CF1W5S7Mj1sbebgurHbsiA6kgc954jcnhp8eaPmMnFcExFipf4iL6zaFcKUAmChRjNu1y",
  "key10": "182N4mHy66NwaXuHSDHTQZsjZMQTuYPrRrYz33AHbh1SCNJEqSDL4KTY9dvMEF32osrPsekuW44rR3wvHpA6YNE",
  "key11": "hx9RpfUyyTY8p8gtvmFStKAz8mGqSZ45pkVQ3v6u1b5knR37FNfg7ejg6CQdGK9F162i4Gs8KNLkBJyJ4GzJ7vY",
  "key12": "VyDQhdiStQ6CYzEczjzm8Kvo8B1Zh9XEX8SjymCkPQEDeRc3DbkHTtDJzKTewFoXX4jNYDQPg2UajVHYYGXauXb",
  "key13": "2VvFNKw9cc27cYggockCFYYwrLRe8gRsmFW7u6dDAsT8MNaw5bVRst5qRDQkuYs3c3brpYYQNrSAm2gDXcXiHo5y",
  "key14": "4p33nZRATr36Y82bbfY8MfkYnvgY3qV3oKnTE9erLYmQh3KVk5Jm6iX9rdGrdSWLC2R4Ro7TWeyMZb6rmYM6hK8o",
  "key15": "3vCrFHG41U1FybinGiwD841tcgNwDQ1Zz2tpCUfumug3cuUaHv5KawWWSUW1Hq5jDFLaMiswJd5WSB4AvV4tDHH7",
  "key16": "4GJsWFTQmR6FxzzPzwZvk7A8dz2UsBCa4e2u3pWtJ2vaTjSjQtjsS4VEmHCYagJT5RxNHAMSStf7Xm7btca4YkBN",
  "key17": "R7McdjWk4KZKCAF6f9uCtjdrsxebDQbWp5TYhJRn9wkZhuopub3uGBFRNnSZCbwKC8P9GwazWtjydimtciVUn2J",
  "key18": "3NuVqFUDDuq8nyXNmfSb2QUaLQSnNMFFcx1G1SfrgtyxGywC4iXiPtis6NiENNGqCe2cSH8dbHhgXnW8iqwsw1A3",
  "key19": "5oXsKygmrXtmvphTZmTGpxjPwFt1KM19qBCfUi1nmWbtfvbqLRMLtjfjVTgnrGx9G3fkKv1diP5xKorACJt5Fmdi",
  "key20": "3ZdPvUcW6ZPDvx9kPDSAMzJDMNoM1iRHGY1BSsUsGrWHA8FbacmBXbEBwe7kkTsyRaxZLS3XfnKqp9ica1f3ZcFv",
  "key21": "5ZVth6CKgmd7QUkbcWcnrEyi1Si249vScH8ZBiLMvyrZEdb6hEmL2YNvxGY4sCtWnB8KjDJzCxv3fBX1JaFuiWHH",
  "key22": "59nZxLjvM9eZPHbb9Zcv3q3vMnRScv5iGTLyC7ia3a2HfEBY4PmdkPtamSsa4LyACFrdfqBdqavq1sVmykSa5Pbm",
  "key23": "6997Hf26HbBCXQVQuUE5ne3U3WdKkU7dwzNpQNybWHaJP7EiHEPpitHsBBCa8kohyZVRpvWdC9aLkVG1ukkHN32",
  "key24": "2hSXhwVjBZtcdPH1qEgxevinogsHqvQt44K6BNwaK8WXVyLsPBFh3RDtemSAM3vdxAwk6AF7o3oiDXf8cY5Uv3pG",
  "key25": "3aq8Z15U8JDsPSaSPcHf2iPz9Y8iqG3N5HaN4DQsz4qtZB1c7vJnRBsDBkLMKSmY9uaNPY3TdiBSWJhPGqwRnPpr",
  "key26": "2u1wC3gRBV4gSMzbLfMoqRcuHwYLQhpoEU9d1jFPi2ztRTvmsuEgbT9jQuoLafQMZmHGfG9aASvVdUCXg4aZ51Xc",
  "key27": "35YXH3tzQ7wqSgmExdnPuGnmPofhRQuWFT2FZ5maUGFsQ8gisA4wKoxr8tNw8wdYgfArSL9yqqmFaatKyY3qafv6",
  "key28": "4xzBDZheSMWzvEaamYvwAbzoopsV7sno8A279xqswFPzshnMzhEDdKHz2CvNnFrUj7NfNAHUk7zXmWETn5CgkYRg",
  "key29": "2yyxRrgGXPFUTjJfFmT9Tz26QtgRXK8NohGCvQtyHXZ3eRBH6vzkmanv8d8gXuRvqBqRvHUPhFnyoXUQaZw9deHn",
  "key30": "48dHcBAjzRymHaK1PkmQfepuLwbatMZUgyggHiucxTLoFNfdFaSFcve1oDx91pDZQe5vGzFPHaScSuCuQ4FyHReA",
  "key31": "2dWU3EJYCX2gkJU4cSqxVUGCQjrN17EBKdG8yijSuiVMNTguMoVW2qaeEXwwvu1uqLdNHjqeo7oD9nEYNPV75Ejq",
  "key32": "bCsmhpS537kaJhrUWTepv6AANpaZn67apsWJ4aU6UuZRkyaerS8Arc4FydFc5kF2xvDeCL9TUErL1Vckk2m4ipo",
  "key33": "5iC4rFTYmGXQmL7EipGGeFf8tEtAzhZ3k6wZXJ6NYrgXLWGqmwgK46dTGfMjH27zZ4xxkj6bvUHfcV46zFXnyc36",
  "key34": "4XtspRt8Ku8vafbfcgALpCBAkSdSt6hyqkdvMbXdmEHErAqRF4YdBdaz6D3xzCHbz7fFpEQEciB3bqTYLEk73myh",
  "key35": "551nAHybioZ8pD9CBfXyypDrHUDVmqUQptfyncGe3YUAcfqxQ4pe8ghG4Tv8PY9KAEu8NUqxtSvWxZJmJkgBSaSz",
  "key36": "3Pje3SMq7m48jjpWrEUuhuT4hpFgCJBKvMhua9QZfLSFLJCyBUGFEYp6gouA6eNfEHeY7LtyJ92XtxW3PHZqgxsJ",
  "key37": "2vNLAJBcof4GyTh5zrVnmDAm5U6afFpJeE4K7JCWcW12m13Zzbv6dynyyML3Wwj8WUC8kTgaoxUSXWXiLpntxwM3",
  "key38": "4axP6v7ANVM7X9hEDuv37WWmW377qnHWPPLDV2pKtG9FxBuJznWqN1T3BTUTfTfZWBZH2APBJ1wWWuY9XUTT6QaA",
  "key39": "4fR6twKygzLgXWwJBUT1Xr4wNLasn2Cq7zJ86PYjjnPn7JaD49WFpR1ZBoxQzQ9rDunDKN4XWfUoRskGa11kLbpp",
  "key40": "5Apcti2L9MAZLdXxz7chVwfqDMURXMGezkHf2vt4Lq398qxHh12HLEnw8vqjZZJGqFQFahG4LBZcuvaeQk7Nj7HQ"
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
