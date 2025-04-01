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
    "5WKVLbqbgupDhA2rLSzmANZDQxFVNuaxVMWmgi11AUK2t6De92cnjWj8u3QV5H4WVPvvmyyoKS98XJu1iwnZVev6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oJhT3oVtvf8Q5zqFCFc4oNhDnGpbH4fYLi21zf6vpwx1gTKBENVPMLe3wZNNHwVRoEEKure18buadAwjNQ7gGi2",
  "key1": "49uAXuQeM244bbAKNxFhLLEJSP7KwiFtGoEtr8aGGsRmzPpQuKB4GSki1C123i2ZvbToSAszGHXkLY3VfWCK8DKV",
  "key2": "3z7THmpjYGJfuxQ36RJwvLFDpQKYtGDEjrGQVGckbzPY6sJJbv46BQXgD7Vq4hCi5nf59CYgYF8hNUpVrCQHTDSf",
  "key3": "4VdxJ8yZZA9SXxd7iKHKMaFFgjvHYJijGXcosSQyAg2LSyM1V8oxrDah4JjVz9W8WkKyNNnAKRcMbfRoajyhpBxh",
  "key4": "5xdoUi6KMYyJaoWmneyACPJ2wNjVbW9BBz37pkHEc5aDrsEBKW9egyRdWW69tr1QjiwmupepuzaVjQyF4TWt6hDU",
  "key5": "5kPCoLzEfKtKsQqV25qDHSmoobz98FfYkXCtwTrXTBTjn2Wbiwt21b6ZrAF4dCcW9A9nXMdUqouVFzf3nX9oc4vD",
  "key6": "552ZutTtFsVHgB6NxGxmXrEFbUTXfHfNPPE45QWVfTLoSw84HsUmFUnqYhoB9X3mGqg4fRyidUzFoHLv9yANEe8N",
  "key7": "42zhpx3zLZC1c8oGyu3XWT73sAPawBh5vsj3vpsPw4ovc288NtjSTuRBL3yeuTvh61TYxcEn8J9jdU1B5wVnXcmF",
  "key8": "C4fL4Cgk5QiSNh4STAX58vtxXcrrNRXd4r3FKJvh6kHZX9W6J8sqgT7eh1jeJ3BgEYdr5W3rXDqvHthTLnGVJ3W",
  "key9": "46vrNnsXLQHk8XUS3aYUQywvfyVGk5ik6KVqiob6fQGBRZUxT7US5Bq4CDmLXSpjBEUDqyHVvWtk9GzGgkvdLui2",
  "key10": "3VSkT5ntdzrgErZnSwcbmqPPVPTYeQGDU6vsgsqkZpLbksywxpfXKfv8DVxomCdZNU6kzmJuiqsdU3qhWuDt9XWq",
  "key11": "2n7tRo27F7e7oCgCnsTs3xX1GyEQbjBY2i4tVz3LnVs2ahsSoA8Xfq6Mzqfsxn8Hfx68PbkCAA7z14dGhMvFCcTT",
  "key12": "5TJPetyeDXNg6PoXivJdJUzHw6JJYoBdsHAJPJdvTi6B9dd4Je848PveUKrhQySDxFWzB7Vw2ztiJjfTicSQZG58",
  "key13": "5m8i3f7JD1WykBmU7ysS73kYjLe36LwUyjNphnrKXSYA8biMLhLQPpxSJCBdZ612yb2yKHNxRQD7CEqs1fxcaC5G",
  "key14": "464AaUVHrpd8eHUTwzNHEH5qJgvFYLpTsZpWUuHKAEYESepxpMGoPJzKtAz9SmSfd7zLZwtHhYnCeJs6rovRqWBf",
  "key15": "5WmLPRFvhcNGjD3uae2jCfrsMrNaWvQ1MBaks4q5enHLZovvkdMMR5BBoyrTxTAqidhvLkR2Lfd4ft5D1DdAWUBc",
  "key16": "2DZk3ybwEiuZQjRjxzXjKmCb2jyvyUPvH5Xk2r6gTUsYZTifY2aSNU6VnW7uYhd2QRZe7QZ4ZZfoCJTDGH5dmgzp",
  "key17": "4TAxT2io84D4uGSUfVLY3J8mstXkCrcbSosR4Lv57TzbMk2qHjFazHvdGEZ1NL2zSnSMGkBWYVUzy9RsgKsacFmm",
  "key18": "3FYFMjTkCYieky5Qzwo4yFBmNze49QLPAf6Lptt7ZxE3EaThRWos6M6BSq6PdLyXdkdf3dURtBrmYEyTKfnKFynR",
  "key19": "4WFBynHi7Hab9usLM3F213XuXs7VvSbvzynDEFaJEhEN3vZExm4EK6RTjjanVCD7FDk9iBUHHrxwt32dGEfEGWPP",
  "key20": "4C8PNFn81Uw5L5fcmmZxu7TaE69B5zecW2UH1hdpXUodthPCijXTp4C7g9V2zQTsUL1jPyP1ehqLzEaBmDcTETBh",
  "key21": "2FNr43w4FktaPTAMxuc6GfpZffHiUKYkw8HnJvxGubepDt2Ls8YB8mGyaECdUBbHuvARQh6fahsudVk5s7CE9aYT",
  "key22": "29nih9XmanEqBqNkKpyYTLuqy3ZGMwPpWsjoFRDSq1UpRiHfrzny2rYA7FprjbLJmZnJnynfA8DycsVbEBYKSoL3",
  "key23": "gY4HpcwuBJGa9q48JEFTvkX1cDngJA8DWWCck9czwwX8ZXNUcVY1zNUqFRPiUbF2df3XCafcUT3uR2NX6CmUoPM",
  "key24": "2uT4q4X1suPosMrLJ6Xhs3Bas8NgA632Ac7s4jnJn7ubznkcMNjAdQFnDdviK4dZJmNpr6eMtCTbznuJPBkeB3RF",
  "key25": "4hHkQcMZGawEGgNPQTH35K5E9uMqfGQFPBUTThWL3N3yoBepZ4KwvEEu1SBeAgY8ZrkEdGSr21iNYUQwwnj134Yv",
  "key26": "3ESrEgdC5AoDEAN2sRhfxTWejnTsZpyTUfRLFDxF2o7CmTCA9ExvFCJtjs6Vqr2cxkpEx5DY4w4FrbHREt6eG4z4",
  "key27": "4e51HmjNb49Y9Em6RdAApSHKzVKdQuf6DvWx8bMZuaWHdaZdeRavETvWXZ1GbaJNMz11MJECzDDFTcPfgtUEZKF5",
  "key28": "2nYR9y6neq2zdw8w7z9m1rKK8enrLmsVMVUdLfBJbVKS1i5SV363qGmBaYn6hMmXQE3GCXjigoigUcgKRi4dietR",
  "key29": "thi7cnBsDoxy5CAVhbkuH9EmikaGioYNGUN6cqHYx81DLesAi1VsjVVQj9HtxUEV699QKcMrNm7MHWvWgBiCCwR",
  "key30": "jHArb7mpEEnebvXoXS89FDV7QiFWotFbCP6daz5yCiV64H6CgYhUYjkSJb3BtfN4EG8kRYKX81ooaJYaXnnNJhz",
  "key31": "3NBKRz1EFWY5TQnBsSVtmUDChwsMeHAxaJi1kaXFcqEnpgczvDf4vDak59YRb2TL5Ldncd1ier7pmt9xVyg1PaCJ",
  "key32": "2N2VgjfCj45q9kDQovtvUrDV12d4CPCq1nEz3yseNcNQdRjqDAb732UU74FAfAqsxrnh6WaLVTVJEXYaKS7ZAQDj",
  "key33": "5HfNkMtGmqtEonqWv9Sk4tmYD9dADDTt1Sf4MaQEjVRdg7FjCZLhJsd6MhaTZrBxUbAMFMH2SAHs33tTpFRiEnKF",
  "key34": "4as998FQ8qPBDsSVcAGjVJWUr89t19owUbQkLEpDicS6Ju7mxy5uqMbZb9fZX2CsVae1SdsoYtm7XZLnp1fkvn6g",
  "key35": "3fcnKZA3uRmXYBBVRzE1nohSJHeAuCWzFmEqpFxsjwL6XqPHFMR4LYqcdp3x64TeDgcZQofkYDRa9LPKpCcpTezD",
  "key36": "3tMGJY8dDvSaB8ask9LgjqnwhaHeWnr5UeQLuYPEdDo6uNPrRKYUm7MbdYkEfszM27G1xgu6Yu8GKhn2UMuGptBb",
  "key37": "p2Zo5AkZkNVxu8znn9VnXG2sErFugMncAebMjiaRfHDBdnWamUfC2qfAFty7auxxJ72roq9uVacoNKNmVHMBcB9",
  "key38": "2vJbyM2tshEm3rusJ1uCscrkPHmQMdUtnyNLc8YzEMY4UQM3aGCatyKmJBC1uG2ERjQdWv8AEZpVpCoDYfYEorsd",
  "key39": "55avjoWKpYpZ9VDAczi9EBT3qBAgYe3rNyr844BwQrnU2H3qZME84QGR5RKjeZ2F2qrtLmC5R59nTAQbDfqQfcXc",
  "key40": "b4KfuTwwv1Xy2j7qC7zRb6UV4WeHTwVHj84tyUQ6b9gQ3BrNUsH3Z5VXc9BnLCYijHtZfy4EmLQHZkvpmUCtMVj",
  "key41": "4XFfxS4eUkKR7XJFzCcxBh5inR3NSDMNVwCfQCxcbpk2qiCPDMKDezsCktjpfHeA44HwA1Wgve3syJqunF6mNacs"
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
