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
    "5g7L8jXA9ayEo6ZBFoXizGj9vhhfux1hAohmiZugJhwi49puo2QUq4WCswvcBM3iRLNECjKvPLgxvF71TdnkV3dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M6Rs8BTNNds9SdiVzQ7K3TNVXYBsYyNc2s3dvKRcGouRguUqu43gZwjFEdJpzraUJcHYooFrcgztqVpH6pZbRfB",
  "key1": "2wozdDq3Xb3FodW9LntevgQdZT6suXY8EnH7AqAgRJifFcYTuUHVedbV8JPgSjC3GbGBsYVFKzBvQLmARhnaHLgp",
  "key2": "4HSSXhopAVUuX3ZmMzY38d4W1wPqgAVQwbShZA9m5QAq6EPVtRq2dGWT7fV24UTwEXiZAcAapLoN8JeYbgT2GxL",
  "key3": "21Jhj5NDvXKqBzvWgcxTDmZYtBn9ESeLM6DP2wReSVPpTcmrKqi5ewaPmad4TvoNdpdwbhhzJuGxUP41NYyvNUVV",
  "key4": "4fyem7ZdZGH9dXRR924fpeAHZVC7K6Sv7amWXLhem1sfUVo5EDkWxVUpFJP4rqfknCUb4nm5mgaHgfaA1YtPBZU9",
  "key5": "2zKtBEuu78xdKKCjrYLRJaTuFCwGe79uimr2mtvTAdDawKkutr3VwGktGCxjPc4w8cGW1bDqumHDC6qYxRTw4gK",
  "key6": "5ZSdJaxvCp4cCbBw1RAHkMeYReYgGBEGCFNyBMFgbLMca51nry8g2F4BYrgm4z9Fa9LjQ25DJsFxqSRYAVXx1men",
  "key7": "4Zk2ipJfNwjUyYZZCrt7GbzxHtxf9XNUbznnQE4Hg2StkHGxPvN3zmpZmRHKCEjyCTkEcCHgDoe7hiRRGg4DcovR",
  "key8": "2HVwdVrzePCU9BppCTtGGcAECH1aFNvvjCYa8vpecSd9rtLW7esr7bjyr17RFf9MasCEJJxL9uNwNShLGQA3QdkQ",
  "key9": "3PBvjwkZ6JG4oHfgEJDDgPKR7cfV8rAp2L2qnhuxh9UfDSZdcfKSkkfMtmrBeSZsfpGphH6XukCQEYCK2HTKPy9R",
  "key10": "KLEqLYPayCLKDMuuJV3FEKv9gq56PjLWd4i8224ZkEH8uQUyAxFguwyECeDyxm4YBXscPAq5ePb79x9X5MNx46L",
  "key11": "3uwQ6rVUsTbpxGETX8kf3m2PAVkWcozsyZY2iZMDqRdG3VeybDKfMEEyxSJqfWNpUMhWvM4bkDAd9e7mK4XaiN3Y",
  "key12": "cJA9ofDQJzunJWvKAiBuYzFHkJuCQwcahSNAaPty5dgNC659GyWyD1bv2pnAhKwE3Z72WgX9vTQr594YKwhdmF4",
  "key13": "5SUi3ywUFG7LLJ9tcsnUwjUdmBFZ39piJh6Bdwm8UtMRNVyTZWgZ26fLMADMURcgMyqbqTkocoRkC4m52CDrQPZJ",
  "key14": "2C6yQs2nUAS1cqSTs2KLE3EbpQM1aromG2Mt2RHJcdTDBfRC6YtK9YyScwseejHQtzTPgQ1aLjgmGYpJsS4ARKGp",
  "key15": "3A6pwnq8KcVBmhrAvNb3cqvzJTrm5aKrigxe8SJmHvTbfswwTUeyioTVTHXDdpErMRqrW3TUA5dJTdyBgzyrWGpU",
  "key16": "3GLrkdr4Awr1CPEg26gPEESMvMRU8aGDtDkjmyz9eUmwoqAfonjNqm6YVUWCPKLFw643j1Wt7yK2tGhEUVRgdj7b",
  "key17": "LQr7L1osBoADwnKKkK57UBPx1YyDRRTFFyT1BKix6jYw7BVityZkJJYk3Eeoj7tFoNuShjmebAyYfLpcJDd1ASS",
  "key18": "3aXDN83s6unLxWVEkAf4rco1t6v7DKymnZgibanNmkuuS9E4jTdVeFDP9RSfg6xdizHmaLN3Crr4SRibp8LEnhoQ",
  "key19": "2MhuVwUtkENVqPfASE5WffYnuzf3iSDakdnKsqq4An3vmHzTYaU2qb6FSbXtQiyGiBqSj2CYoBrHak46L2M3KSQP",
  "key20": "3zYWB27n8onzrBwks56zmDRtb2BkzpyYK9ABRFevodETWzBPZWL581ZqSnPdUPYWEamKhG5JHc5h1bwtSkEniRQ2",
  "key21": "2rrE6TNsroTdjWwxTPY5berP8EoWd9GvwNASPq13x6toJCjhpLQjQWJHNHMNUpwRDVCchDp3h1QEFaFmLvCy85q5",
  "key22": "544wqpgQDzdP39Q4ZobR4G3wELmZGXV8xJjg26Cv9vhbF6x4dTNgY7ddTmTWci3UsWtJkxX6vfX9L6yzs1YNH1H3",
  "key23": "5btq9gAS1VboFsDHedb8b3k2RKSAwFgd74PdFoqc72NhjGS9b7h8t13ZhoqP5prCFdALmFsbJHAyQGEE9sXR1VaX",
  "key24": "32GGH1udjJK2we7jMLoSF2e1AFxqvdaJyqfcnnWFMyVSUQ36b1xsU6NohVfFSdGriR81sWn7mC7uiMAV1wRBhWB8",
  "key25": "4LJ1HCcazpg8MHFauopnPaUyMAcFAGsvE6BcGqh9yn1c5FF9nQHs8LWQcJujASsaKFxgnu7JnB9uwnmxUe8h9TKT",
  "key26": "cZ8TpJoAD28ofjUm2UwKK7fWcVidrmtuNqw3M9vU6kbTgULhjRtNVn3Sk591P7XX8rJdbEPBvWUU1W5Dt2BxNjN",
  "key27": "kkzU5CsjeY7LC9ohFXaHtnbuhLguixqUVQqKiyfsbGwNqv9dSXX9xN67hfSrAbGLEhYaFknytLWz1GPHukfTP1W",
  "key28": "3amM7dtYjemPhmXFhxdSNJK152WR8y388ZYm5iELgTCtTHGAduBgSeq9KmRq7gcNsaKanktY4kftCzqAJf3PEdaZ",
  "key29": "2P3JDHFX729nKynqwTBoS3jjv9GwayzkVsEaBXHYVtSvN2rTnuukrYcd16YpnhDuw5csXALG1WVDd3XL4vimjNZ8",
  "key30": "aQ5yhGuCjbLuidTdxvaLV73iJXfEecpaFPuywfSaq5Tdptwx4JmaxYmFbKrshtxNUJMk9qnk8iP4otC81Cr9YmN",
  "key31": "2yTgibJWhPdnDrUtSp6dXeWnDC2Fo6noSmfXsmsfkfzWqUCJKSUUdVvBwyKBA139ii9e8Q2PEQ1aLPQCQnRnb7ah",
  "key32": "3a8vpFcVBhssw6NqXL6k9W9aczkpDZffSKwnz44cpgjMbRA3v18FkfKCGxSZsHBYeG7hkhD3t9opwzpg22Bqo3GZ",
  "key33": "33ppTiKxiGsn6oUXUTEsD5CUpUcY6pNC13bXcuU667DXvRyzDM3494455Lptg3nLLD5uUB41RzpVmcDNcaMg4wU9",
  "key34": "qYyvR23roWej3cmRbxWAT5G2Q9z6RvSZyYPgC4oXDJJpVLEvVX7uQEwCQK7pRv6A7uQw7SRzX2D3v5dG5hGUVQu",
  "key35": "4MXFKXPtEgTPhN4ZwGKn4FTaxufyTVMbsoSh4zTqcEJKuPpgGkDxn5PUrFgVdZo22CH5CQVaW4Ae3jvryfF1ULmk",
  "key36": "4h8HW3oo9nq8SkD8Pcbse6MyTpYw74vqRo9nRZhM8yHgqBvsdbBAyJ1YobexDGAeUd4MsYQCDzHZy4ezxyx4Eewa",
  "key37": "2pQ89C36YBDWVTBz9SxUPAVnzULqUNCZivrNKKULHNR6pBEjp983vZLwSfCuD3XDryzi4uw3vja2vifwe6BBULJ2",
  "key38": "2gSrUFD5tZyPZNx1R2fsEfW39UJqeriBxJbaHNfPxdkYk36M4Gih91REXaopTPbjHaE4ZFkzkPz1J5BvWY2AqwXt",
  "key39": "5tjZpofYC8GPjzguRPJU3ZWG5WM9LsuWAzEhhc6VhBoxim9piksK9aoKqksQoNu937KM5N4cex37dSSaHgaeFGc9",
  "key40": "3jXfkU3GD3EuYGTDEHo5gkbmDepdHiwdXNqYcWEdNpeJZSxUqpV855VttggdPu19h8515qJWLn55TYRRjPZWVVPY",
  "key41": "2mXcjMfoMGqDMTDy1JhK34TjSBQ7iokja1fAAdmH4rhgrnrqNrcqVpaiFshvKUx9KSLTVieVp8n5E8S8jAoAw3XS",
  "key42": "5XS9nCLnTmcSCiHdWyXBDooP75aV2tehULXmzfgTyeHzEErvJhWYA1XcHLWebKRx9PYtPjkeBPnn4ZYENwSfi7E7",
  "key43": "hWC7DtKxYRqRfuY6WXQunRc95E93tJC4mr2bunZys5P9tpMYjTFpP2HVir2gbttBD3GNTB2BDe5EE5tf8NeYTNq",
  "key44": "5tWVJkvdkNgfvkHg3DSAStPC2CXW2vdU6K669PiVsJVdudJUkA2QCneBRxW6v7rBCFkqEx9tztjQ2BrU74niFtqg",
  "key45": "3Q1daLE9DBUmkehzbUuHR5TcVWThBr6FPfuT1rj7LepiunCepraQB9EW9QbcCXTmAkttC1PD1bdrJVwX1wqUvcNZ",
  "key46": "2XSiFCG3LAHh3tuikndaNJF5U7PtafMWAW6CazHGKPtSo5VwbWwgW7w3BUMVWPG7v2CPBD456JjAcLZPpJw7xE7D"
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
