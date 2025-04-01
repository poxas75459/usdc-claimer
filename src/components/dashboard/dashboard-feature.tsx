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
    "4UzUx4xvdVbmnmBR3L5ahUNe4sK2Ff9qzBENqwvW8i48fisi9mNJrbkkB76SpP59JhJiyWFViEaRAmrG2o8KtWBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pTrLPEChZRPLrw27U7idfjd9A4YpPatqX4VeVZxtYj6nr2915jYsNVXnqCLZLt3UsjXtLv7Ymu4FFAUZ6kfpSyv",
  "key1": "58BK3gdJGwauaHWmnZ59juUryXutAAngx95xw9kfKnKxCmhpmihxfvStGpXsB1kCht8G6QhAVNpaETKWRdwUnAHc",
  "key2": "67SLt3EPwZ6XXnkR3xELBscSV5CYjcw346HZVZGftdRaQev7gyU8AyBZFJR4i4jJnBVhbATZ9hgHu831SdGPJvW9",
  "key3": "59zx8f6iG3GFuUWeGCpqSGZ4YJaTdMJpXzoJbYUjYZDPi6bjv8XzmkJBdvP8FYq3zivirXZ2s5Zkeur8CX34ShGD",
  "key4": "3cK42ak1X7eCiaHgWgG6mUKrCyMuvm8TDMRTTvBL7kw8Jzdi9XdcNzKTRqu4QvJWVy1XSeQH3A9zUyX1BEW56obW",
  "key5": "45imDUdwMEqdtpUfAjL6yhNiwbfNHmKwBPR6gAdA4DY8T2GxgFzx8ARye4t2Ti8yDJ4yU6twxxy6a1sQeqhSENoW",
  "key6": "o8SppxZt7GutGEATJXd5PapYzU1WyhT8uUnnawi2UVAzT3gXnLXBcQsKC853ctNBtUDkDP3GCmCoHR6KutLkQ9t",
  "key7": "3pUzx1su4pPVXEnZyt2dduGGHbSVQU8tcae1q7fg9RykFYJpBP9UxDJbnFrq3RHRDwfKSEf3ZWvzHokjGEHUiF68",
  "key8": "h8ceLrQHTmjSVkMhS93wH3t8eVuMTvw7y2DyVrL6sk8R3K7Hjk6q7JfHf9AncVRnn4tj7eNauQZt7mxbvKuPQrf",
  "key9": "45N6WqYaHNrJAmbzgesWKV1VMdgE3shyeJ5R6YGSPR2GW7Rx55DL9dnkmkrGDv8sjXzNt98vykJuVWf2kiP8tG2L",
  "key10": "32VGDeeTtKpLnv4TqLrKWfW8j7dU7sx4mZnBSwkMNVWsjPkkYHaUQL8csZWwyvSYHL1MYwF4yn2rhFAm28opaVVV",
  "key11": "5vikQS8CwMzoXSo2w5HhHJ2hfSVArvx8d6vuvftXNQebVUrwJWaoxTPjLmQKFWwE4BHw3KNmnePz58EpAuaWGBmU",
  "key12": "3wk2qgDpww2ULhmxy9CgQ3Hk1LSULuUQ6hNfPQLhLpzyzEbMWWftK2CFKuopkjRFRXsSkJAukgWwbWDhHb9y6s9B",
  "key13": "qadLR9VS1VwcaTzpXyQdRjuYCHur6836fgjRrE4eteRyWpr2Zka8cxykvpVALEuAFeAzBUSCwiu3RqjRt5oXcEq",
  "key14": "3PkP8mESPEk2cdMKZcwvZ24TGx2NnFKMQKzYL1vrviPZADvMDbi9fbu8Crk2KEDCFmMJwBzSFMx2RTEdEQ2hDfDq",
  "key15": "HAsTtvFL6WwxLarVDBRPkSWK4fDMhDes4pfLXny1r5fRucC7VcY13chsYUqUpshgks2TpbD3Fpqbjie7ZyByQwY",
  "key16": "32nkXRBxkE99ejsFDcEZ2zFtxTKkkHzXSGcwbmBg9m4L4Zi9oqQwgnMHRJ2JtscWyQa4rVeoDYES7Q37PSQCbsCW",
  "key17": "4yrSrpYNrGJGjA3hrr4u4DqbLtoT2x6sZBMpgtc2QTLWKs6gJ87yaHNS8nNppDYjC18JbQpoXMtSYo3wDJDYB6Rd",
  "key18": "2x4n6y97poyFafpcwEsv4Hcxd3tGymVmJV5tuXuRYi32j9VStyZbABFj2DSfZ5ySyPC6dUxeE8QK2FC8CTE7irD2",
  "key19": "26Uc4KbK39oDhoSTF23NV3vFbx5LpXoFnAakYqdZYV2FRMUixqdWeXQ4Y6fSqab8o5EYnAfxy2ESofVdMDhhyB3d",
  "key20": "8HpDuGysVooWeegcrwz4TNoiU4ECxWHZfmmw3WDipWsv5TVx7tQppxS9PgyBtgTdf4Viku8112CgXBPCtvESEm4",
  "key21": "4YDs4ougRH4y8d8ykE9aNGVdQ83UrrYgBpQb8wva4MgSHN69Ewf2oWdKvRnj2MbkY1mtueSgyhyHnR2aTo2iafRH",
  "key22": "4gdoo9oXqkUMMFyCjDSAcuya2ts7BhK1JHE91xappCwQsnQRXjKaUHxfwYqpSjHhfYQ8hjyLbmVAd96b4iPtJSjb",
  "key23": "5yR7UkpgigxqagSiiC8F71KjrdtLsBM9V5m9qjpTFa6LoYDpBojsqwTC53rdRzgZN2rrcYjmUzsUYwK3vjgotyGt",
  "key24": "6gBKaYpmUMpGpX4JBERBVpdH6zubzXX4JhbZP17g29xLXa9XDv6gimKq2QqgRkFaS5FLCjeAh5Yx5Lcycf4r4DD",
  "key25": "3iMvzshhUHvqbbuT5niQqda6KtYNBQpyKAu8ZCyu7fMJcvVSHSmj9cGpQta6XH8G6T82wyjDDcxStTK5mAdSXhCC",
  "key26": "36KDGZ7NBDdmkST2akPwpP7rozpecqrdTf375tV7M4JHX55XDyw6QHxazhDyWY4fauTbhR6LkGXv48VrodJ3yRpC",
  "key27": "2GL3nQSPbEGncGzehewhswEox5NCC3xwh2648x72aewmHhsTDbLv1SKKCJiXqPUnR27PHxWqGAVecveC4tHw5Dr9",
  "key28": "2Cj9dytuir8XP8CJrBf7Q13JeH5pou9ALXrE85WzMB8LhnrEseeDnDxrBEvP1YS9pxhDJhycoecr4Xzy6oWbbHz",
  "key29": "3KRtf6VhpUhCTcDydZzHFxkuJ4e8yBtgmd5xmimQDtHJGmu7CeGiSZUVgkC3BceBG6kE4hqQqQRj8m3DuvmSPmbx",
  "key30": "2dnawPVyN6ARUKqHmsGZwaRe2e6TtaojaG74XNm6KCciERZJu59uDFShfg6mDe1NrH2717GT5vodtSsG7Fe1E491",
  "key31": "5MsZFb7FyjAWz3htHWNxTQww3JXeYT96ndtT79ew7XAVvvZq2FYUpbmruwgVqc9ub7JM9gN7DVJAzgFkUQD84go5",
  "key32": "2KHBahG6sp5nh3FJdpy1zATgd3n54cS5JVZz2jCFBrtgs3kTNbJUriEUyLAjjakcyDWgX43UuhoKdbqMBLkzF5wJ",
  "key33": "352XvLtZQkDp8MDUTgJqeQ9YSwVqH5oRDCALJeAR95jpgUs4Aj1R3bvBmLZbVee3GndmwLBgq6L5GDKdhMaNqc7",
  "key34": "4J69nuzwgQgQrmSbfJkVGDhWyQtV63FJFDdL1rFpCbgR3W7bSVB5oAzNNnbpvACq4PfrC3o6i8UeSHHqzxB5nVpG",
  "key35": "5D1AinAcJp1qnGZ8oChvP7VJgKNbxGDs83xXvdAfvjTDTs2bosbWmz4mKp9PUzeY7zPxxWDHkNrdZnPBiXs8N9Dg",
  "key36": "5FBBHC9nf7ockekVmgcuNHagimMGoQLJsaCnFhTLPytNzcwwDEybgMaq5uPVknqgNqJ7Lm9HDCuxnNDsFDvDeug8",
  "key37": "4FPCYd5c4U3xUfmCX66wp7sNxe5ibsH6UG9ii9Aut37MBTitGM4pjq4SiL7ro74Gzkpdsz5qND45p53D7QdmKGnN",
  "key38": "4oQRutNDkN9MoSfyNdUfBFmtWWXtHW2rj7fhDBmCG5ArsQku652BdfaAVBzURtopAqkAXt8V8LoFfRuDfcq73b2b",
  "key39": "5SyfgQRZuCjhq17tn2qg9BZ7bcR7VqCz8Xfn6SJdp8BnVgU4MqLUkFN9eturvpBgaE1G9Ct8YsfyRPtdhJnUj4MH",
  "key40": "NKbVAdxx58yGQ3RBq8pGqCRDmqnKDyKFbkUEiRttb3dPFknaKUyac32gcftwhKUw7CuUSyb7hPfeq2Avw5dMnY4",
  "key41": "2hDSyr2qMpzfyZzQM9ADiECRRqQVhM6FM2CZwPsPGNQyUpTbSzJmqXVCJGtpAY5CReh1dTsSvuJo7vGCARogpHif",
  "key42": "iSXb9onwk8Nb9hDFqybZ6XSxRWPZByWwTDEheMNDV8ELPFdM8Mry4ypzBUYjo9T3d2g9X7YWhbY7CNaHZJxba4T"
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
