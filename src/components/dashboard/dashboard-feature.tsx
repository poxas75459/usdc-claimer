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
    "3y4TuDqAnSqSBZfypFwbeH7p6tAGZBt18gmVYSymiea3gTVuEXwcEigLK6BaAwBR1pARTJkx8N1Yq7My9NbhPyXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uAfx8eYFF3V9YbTvdGCeg9XpCQKhUnWTK2xGutjcCkqfKfx66x4yNYnFDoquXwUJSZoNsRSapP3nesvnEpCoSRR",
  "key1": "4jcPf3cwvwegqVyCuxWKfrbZq4aARFf824pQEqSFfdY3ivrxGibM9gfUFy5Gcp62d2KFL8rCWbDmkD2oDU13msMs",
  "key2": "5dQ6iSmGUDLMZd4hktoTuJEFZRWSpNJSt2MXx2u9CcKcXvDJGmadiVHy1LoUWiphiE4JnAmuPqDPywqi4qx9wD3q",
  "key3": "3whFEuBw8mGdUCW3ZVdFnQNfNV1KF7nviZWeVMHSMDZcnKukyNefaWGXLP9JnKBiq7mbbHDApjbBjQTDyP6bCbxM",
  "key4": "3BUhbcz9PN88WrqWutF6kbWyUWXa7pbQesCepGRxeG78LqVT8aXixZ8dcjhABEMhS3iq7U8fumqk2uP7Mtt17nrC",
  "key5": "bcbzWcQu7voK6Cybmfo9aeuK1pfZeTg2x2bMcB6DCeqxBRfX7xWX1DvV12YFWNKL1FsfU3Z8PNL2rUtSp3XytcU",
  "key6": "2LrjHzEwsqSBsbVT3vNPmHn85CE1LgBngb7h2QVXo4yHFYEsQaLEN5dfM1S8XkwY9V7YVH7FmYpXvyJGcvJtcn4r",
  "key7": "5mAATeRACssYkdJnTYFSdi3ryAUqEve8FytCbB1WvFbo4c7AmwBvwYyqkP1iYj3yP9Q77R3TCtf8LF3YV1rXseVP",
  "key8": "3iJ2ggtYosHtx26agTPf77BTxmPH1YmM9XrQpUa9FJxwQ5bnJ7uu9g8iv4tj6vXaby5Z5HsdEXPd9M5rw7byVhx6",
  "key9": "2GYCE5awd79UoEiXjqczAjku6Cq8veQhmWEQPchXwiMk7YoNYh8W6xz9H6EAhuycio6Y4NucPsXjFkhqGMFfYny1",
  "key10": "3ymAFcGVJx861WDycsTmJMcHYDk2U35tepYGhZSPPAZnG96bjU6G73Xo4CPT9SYkDfkpFS5LCyhzv4cA4Nys3WmV",
  "key11": "34XjRoF1LeqodftY2jYY7rhFHrpcUrBz9q7NKEZkTgZ1gtR84GS8WrdL2bsdwCYg7TBdN6gzCsqHCrUCHfkYHgqh",
  "key12": "4C5shuExy1Nujv3inq8zyuJK3xdDAcVcHk8Lrq4cQX1hH7ZP1aS7exKrxz19jUoeAFP2vkDkR5DyMp41XQc9Yudp",
  "key13": "2QYEQorK7qR2j814rxf7xdXvXRQaciSkZbmarpRngvSfztR2TmpzWunjz6rrr7LK5egg2H2iRnSSWRC9VLg96AxE",
  "key14": "ZE3nuJzpEGv1HMF4Wynx93QottGdsvHyQjS237Urd9EFUy1GvrMY7ZCp3oZSdUS69kiLhd7MAvC1gaSh1YkhZCX",
  "key15": "2RgBvCf366vNSXMYz34cq8fUyu79aJbZj4w62qA26WAdaZjaQeswJcKs7zVAbamtZcaXLF5HRrJHRRZttG9ntEkE",
  "key16": "2eMqrUG5aMnwpyVEE2NvQr9xpzS13GZ7QgCQJYbYorTcXRAY8guJfj793RBZUoG8tD6YiADrqWmvVoqZ5wGMy7Zk",
  "key17": "5ZndMNf6UGQpvd6CQYAesvd8zy2q3EmZ78N2tdHyAYwt5MVegRJpNH5pWrb6Z7RWCtRgFuyTuMzkuGuj4sBv3bp5",
  "key18": "5qF5h7qxGneCFkhWzi8qN1JM5o89N2ic9QreXni9x4JeYydaJ4myrk5FQYuhmFfApwoVrPncmmtc2FWaae4s9ia6",
  "key19": "2Wrs3mJE1ySVxkAfKKyN5nhBX7ujvGvyZS21ZXwfVHQRn9ACY5mdaHdH4Ey3ZmGmpUPh8ZYVc5gh8GzbdZmAHmv9",
  "key20": "5zVW6eDKKeAVNxLmAtHrw2WRNBaC5n7iFUyko48ShSCy78jKpy5KEq7itCUceTG4UpfBbmxstpV7Sj1PpPGYHhem",
  "key21": "3w7qBXdkPKy8tatd5DHk1Aju16Wjr1MELfFXEsU3LwBkFsmwqf7pMHpiEAQvQx1PBawEKW9tApvGEgKHcADLaWm7",
  "key22": "2jws5xNJuNYE5eQ36h8yrdRSdsWqy6rxhvtvrdANByVoPwmc2Tuz3Zy35SDJDWfbaJJfTGnxUr58H5vFWR4EdKt6",
  "key23": "h4YbHeDqKeYyaTRwbW318irw89YEpKAWxQjpFuumkM6Yu8eCYAnrSVHAB89fnwvXjgx2vKzhniqEqsvfX1jNWe5",
  "key24": "796HLG98CXPsnLsNnUomsHbBHyvejXbNFPT122eiGpi2AYELxg99UXY3JTnW9zoKQX8eH6zTVHD6VtHWRdnFACa",
  "key25": "5bcaXn6zu8mu7P9k5nRSjVW733NTZr39xFMxH3tBULd9uz6gbbqhWZqGa3HiyJyW4FqUFqfak5vxhMZLNx8oqD3Q",
  "key26": "35s58re19JDsMhPzeZ5x8o45U6eKgXwt6kgywhfN7nLk85tvCEG5mvpCRmfsXo8cWC7xipdv2btCnk1nNnDjzKgU",
  "key27": "51h4L6feeoEwD5Ls3x562nMx96gJ3CMN2WESHP73WnyzHCtNwGjp5HQ2YGTGUuEty6v3rQQ4LwAdfaPWuVPBChcQ",
  "key28": "2avpQUafoMAN3oEzHE684XGuWopTbNjehcdeoZSZyUm79JEJyYRJZVW7bUrzZbePDgArvdJsxJpPrShZZeT3fkG",
  "key29": "4r1rM8kEFq9fKLvbggwfBCGfvQe16ABmafowFkA1knNGkTvr1KFNHR9T3Q8R8JEnWjgnjGqhMP8kgbru1Xe9HpCH",
  "key30": "2QNn8Qi6H32Z3E4KuPEYhAND7mjmLKXCAMB6Eze7p9wdAHQFuAdQfaLTDjTLmTPWoNNQeiPGK3wZbGrf7bkYxdQc",
  "key31": "44dHVmiBvqKoJDiez4wy4nd5581J5HEsYCPJUwpjYqAJeaqBuAACN4evNt25NuYUZvJeuLrZercjapDSM7AnsTy3",
  "key32": "2VqFqpKWUDpiLqcm4UpD5jN31zyiimD5R2wg52tCyk8XR46GmVEVUuWHqx5ndod2Bk9w4q5yPWX4jYFZREMiSUug",
  "key33": "QaQdxyKuHN3AKoZNjRv7CnHvLmPcVZVSuG6ot1tHg5u8EmUdaDYw9SdJnDnXb5Jug18J1x4FRXwWtEZQ8KN1Bvk",
  "key34": "4qF2hMzLmcWavPN1WFizqtLaiezgWcS7S1nvU4qYgyyU1KWDnhLruQGXRvoz2vGe9QvxrfJz6XWqu9jZNWJVb9KW",
  "key35": "4jVmUpzF7tTvqHGJp5qpCETRCH8hBYmuFi7XJEFPqbwkmT4vV5hCsFAFP8bdVCcoeE5dBQNkdWAviDZytHviCtKH",
  "key36": "2TcFNPqyXHqENAYiEzVTbaxp2wWDb1RrADbmmgMrQrnbxrJin9Z11DV74ZbKJkaeTaa586ftYHy6HjJ8dyGsX9HS",
  "key37": "2CtpaXFCmAYBCbP6DiSyMtFQspYfXLYzTskuDdGKUQc2H4RqrkRBctyAZatMu79EjNTYETXHBM5gDd3b9ZEZZcmk",
  "key38": "5A4H9bJpmJdAGoe35qUDbRRrCh2C37toQ16EsNQSwyprnEknd6KtS5jznPJHwfv2hpYsUaBX9RENM6W51jLuaSMb",
  "key39": "7Mjbzhx7MswuQNchCSfCRrSVKbFsiumAXuFwSmw6mi7F7Eu3HKPZME3qt2KEbDbvvcgZeRXUR2JJqMdHHbNDA1E",
  "key40": "4Dv9y158pD1R4pUNqpcncNKCjdunJsVUuki5DWEBtxDHPqjR2MHETMrZMaPxmB7hRqhMARF6woRutwPJev4Zhgnu"
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
