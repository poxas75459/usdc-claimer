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
    "54TFKSj6mJvVLJFgHjhnLwjrfJvF6FRZSpAryDSDDA58UfxYYAsQAqh4LFhFy3n7swxh4Ew9ipAvekNTmhgGypzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BcHwRtSHEVUc8opgNNTfTkt4pboBevnG5pgfxQmVxLFCF4CR4vgegh77rw87Y1QWbDMHKwcEXocvYDYXsQUp28S",
  "key1": "4HXRYWHjn1pLJT2r3TWxtqE9FsKpXM65kTuNwbjvKsSFBQ482QYzoypTMT67i1H8NWT1mre1to4BKkS4836k79fF",
  "key2": "3SLpAU16LHBeHNSYRuoCVhjmfZRvr6PEAZJu3qsoTJWvyHx2wqk9aSNHyuy7uPGfAXvadVBZw95SX2CNA6xaoGWB",
  "key3": "3JSUoiH5UNqeNYHVXkXffgZzXcVuMebWwuD1UzoFJ7M22tYZ7YSn4DDTduuDxsYb27a4q7VTim1HGQr9vJ1x9tbk",
  "key4": "4jdAB88Z4SErb6hZ7sP6ATGchN8m36WeeSpZorAfP4umBatxjYddgS81qTm1vpJq8UAGkbfatZKAdgRGzqsxXHyM",
  "key5": "4KLGfgfcGJBr56uKg5fidBERo5DX97TkurSFpZQr39Mmte5yhTs1Q714CVXX2b9KKF6XjETS7bzhoRwvgoABKdsP",
  "key6": "543fFUwQn4BwZq8vXtgsBtgEmxZKijVqmkEUcyqwUUcXqnJ2hMNKnKdAmgkCNjKBousL52tTEvpjvRGmUgs9qUpQ",
  "key7": "5HEJSALMhRQYeWcsnf5f8Yk5vXgYSAG5enYt22ZGfwBgFXMBd5JA3YH1qi3Yobs9N6XXXNi3D3jMTRsZedNvFbe",
  "key8": "2S6rm1WonqQ4VPqYswiLNQHjBKnJxzZjpUL48rk5V8JEirfRmFnSmHV1VgNkCy81uPnmuN4XajArA18uqdSJuGLn",
  "key9": "2AMtryWf27BBxBNAnP3ftRjfe3DBBD7S9HuaMvbDPV8LFMK7B9ct1P6feMqyQBwtNm6pkkQoQ3s4oyRYBj6nWa6H",
  "key10": "4MCwL6SNoe9j4P53Fu177X6w3nQspS682JVRUKieqdxcWsvKQoe7z2WASSjbtFtx8dKqK2JjSjZAXEHkwEmV7HQ7",
  "key11": "5XRaXuDe9gwxkndM8tNVdgjaEz5gPTPh9Hm4hmZ4FQ9GYSTfjbLi1DWUYoGbp1Je9FmbRHHGeCNBRPczaH6Q8LJP",
  "key12": "5EL6X9RQ8xqUzaydeznXutUurqYiRuYCjCKCEfBpgd7F7hoFXKa7yDkLiM1ZDxfcnhxYVTzxPh436DpaA4LtZMrS",
  "key13": "48KXftenAnSuSWmjNVy8jtq89ujUpJeDF1bG7AF7RRGNS7d6x5Gg5oUou3zP6RKbDznPmUXmGbKiGeDS4qnkdhPC",
  "key14": "2CCYpe67m1uFvcUQpDsyQYvXWMpHb4gaqrHRWxVwemVqe965fd9oJrt3T7UaemvxSGpd1bLqggnWrGwNay7Lrndh",
  "key15": "445Yry5TWFJBzPP35TvGsxei2cc8ixezju19t4F39HDxy4LqwCKjba1yyg22ybwF2czynmpAequGHER6kBqsLvS5",
  "key16": "2gFrd2HkUGu8PUznZnkQtEwk67RgT8J1nh1jfxuuLuF3DJafQGwbJejKt97RPLWtLsXdqN9ViPPMTh4sHfH8XBdY",
  "key17": "4Ey9BuJr4eYZ2UX7vAEKLhfvg9bnnc7pGom31ZjNJSGQzyTyTmayKZzeVF94DernVXuqocx4kSuK7hSo7dJVg5hu",
  "key18": "npiRFywAfJkHTnY1g2pHhz6A2jmBwL9xr1Rp9YqA9KqZQzu2MGpokKxsrKTi7GFjDXMRSBZPsENmaQBV7tc7LSs",
  "key19": "2VEceordi7jXMd5N6HzRGEwoJvhPB9dmDEVhMM3uVVvVF37a33FDT1wcnqCKoJmeXdP4MgSyagjETzqG8RzRhVX1",
  "key20": "5mD7LyvNfuJrc6arCZjm2ftkcf7CpfFMYuGugBQRrv3xv39zc381KQHJ52gVwyyHVxjzJFnsUHm9e74rnC7VzmGu",
  "key21": "5B6UooJvGf274LSJ6sCksbkZrN5smtGx7FcUMQ98NtAJeQcyr3YTv9KSQbNFm56th6xXNXaBBG1avnFRCWFyQKaF",
  "key22": "5yqnafxAthwpK9SkQGRXjV3AnQ3XitUZW97uAJ2vci889AR8jzZhC37GnwNAjncPohTuk7TMXfBQRsvram7WyWFM",
  "key23": "5VfnvgcdYQYtVGAnYu9LAuzexksRtEHHohptzd6iPVFRf5o7JQ6g9h165e8UoSyVb9PEBV7UJn27fvY1WnQZmSf2",
  "key24": "65vVKdox8scgsTbGfZhXMcV4GQ2FqxvRYkJyiJWVvuNWvPco1oqAjZJYN1fDHS3AGz3YJQezUYkHduM3HoVrZ7SU",
  "key25": "5XFi5mF1mAqVqAxsxLy9mumuVwrmTPKAjxQppeGgL62T3jGqawF8XeuJmDtgeoXhhtY2Nkh5YLdX6WB4XB8gAP35",
  "key26": "4UFbEzTcYGutWQ75yFo8ycoCcy2PTpnawM1gFgFJrZ3wStQAafdaB7EBzuW7NgN6SNhVsMsodij4bvL2JvpmJ2Qe",
  "key27": "4vJzjGRQeD5eQw7yLGU4o94MPUoQuoevLRb6uCw8wKcRT1aTZaYUe8MGwRneaCSFFGG2Uw9YNsjqWCpePi89GeiQ",
  "key28": "45e3wDMMATtiVCMBdePw5hPzxNuwzCYJqQngsq1G7yEYAQB497xkwdh8xTSsTa61arFPXVGHZh4xvE69gPHXWZgj",
  "key29": "5A7NJBCcKE2Ve5hvW4bpUo44vLW9UVysswXkkrVxCsdvyzLp3vLGc6XS9pC297fYoPqnbG28MwzG9SmE6pTaqtak",
  "key30": "54iQx4mPhY85cpVhynwh5zh5ZimCkPy2Ag18QrAhGEm5HcZ72xT9916N4UNdJ1t93Ynp1P4YGBSwWMdrn7RQwHdo",
  "key31": "5zGS3zbyL9qPeYQFoQo4d2JT8Z9wbxpbay5VbwZbVy6ncZFkcJXp2wohNavKBqW7wHx4qRoGZ71U1dQkpH3wPXNQ",
  "key32": "4MHy5UpqdGyatEp4tNwMCtfzZgH2reHLJUXQiKmaK6HysbdsSVFyaZxWTRyRffxsvb93RXGPZrZcu1ajhZNe8x1i",
  "key33": "4nhkNeLM4v7g5TAecFDJjvjHQqkmK8xLQHQHyCCDRazfhvHVj8bXLt8up1wVr9PT6drXfaYHAhSnkqxeFKz5ktjN",
  "key34": "4V7Qi1gEzpyNVXxru4nXqrkbnABLU5hxemRkkFu868fYcZe1G5bNd23JrBHvUH1y1LbXSoGChDav2rpj9kJUu6Kw",
  "key35": "26EpB72ygoXuc2iGD4zQLXzc5vaEnT9NRvbAKg8qDLnHe3X5P3RsDmd4ytdyd4LK1FBrAVNmej9VMMRApLsXrqSQ",
  "key36": "5SJh6YEZ74J22se8CbLuXC4eSsQpC662gBhwrXzQxppMPbVwozbSwog8Q1mc8a35ZBo6vNs6bFcaiE6SBJqwo99T",
  "key37": "4wWptLYQXcxwoXchimKBLRTrRtCvJuC5Fqn1czTS7TkRt6ZJEEB589Gr7soyG68KBUhcQd9tWALHKpkFgQjuqNJA",
  "key38": "4s4R5QTLwwTojdAee2VcFz3SskcE7tozrxcFYam967ffo689JQkRNzX41ezxdK4P28xJWH4JkKrnM97KHmudY567",
  "key39": "4DbgRCy1nHGCWUgZjy31aYGZeQE1wuS266tJj86dfGxcxbKBLsjDCP2eHF91ScMC5oreUSZvqPfAVneXF8iwFdCQ",
  "key40": "2PYm6X9g3PTmeApqavtV8eWTSZzaQFsrmcC7UkxVVMpc2QwHDKyWubBasbcd5KJKwrwrhR6Fa4ZTnJyiYwYNj1GD",
  "key41": "2t8BhqGCDu2XWvLUWQkNkmVvNKFMdBdqiwdXrpMm7qQTsderXkiEGeuxfsa1Pap8LkorCex7sRVHdsFwJYiqK9Rr",
  "key42": "K4x4t9nsYVHQ5ProvpGnYXxnySLa4BGZ8oaTPevVHqZzUWyStdozEBBAk93hLy4YxuacCp5HL37RYgs2r2DCJZM",
  "key43": "8pWpo8rDTAWjSV8uPDSoEYZrfAmCTph9EVTL85DQ8conZqWqMtMWFKfLzbocR4bCSCuda3rsHqugb7PV5fgEpzM",
  "key44": "5ahgf45PChDgUTAvZDArzw9D3PHyPTrpeHEEhYfUaUmeUpZFnwqfXhHSvAc4xE7B9ToaQQHh5JYdKs7Mmu9ybt4T",
  "key45": "3sJDprwyhEpegHLq2oUQnaoFXHPLUweF1iAZYmhumLMc1VBNbkfjZLywtAf7nofdNyoB1xmwDrTp43A2u2h8L1pJ"
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
