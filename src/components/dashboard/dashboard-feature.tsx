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
    "42seVy21FpPmT6tVjYySsvFuqJGQyjeDiiJGCLjBBUJrc2nQ3i3r6hT4thFJm6j3oRr68dnWAnEnoVvRLcwfcZro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L26X74pJ9ybx8ZUvm3NiV4ZDam6r2zz66qww32sWQb4hNHx7Ur5nKCMzuNxq29Jiwayh3Ry7rxiQtYkHA2YAcJ5",
  "key1": "3uJM9CddnR4yA7WncHQYqWbdquK9q8xX73JrxVNNN7eJfKuRJY2qyweVfgXwps3w3wMJQinBEF26buTN14g3u1Lz",
  "key2": "4k5FFb4F26fwSxp9B7KkWDG7NDRFbu4NQAU9RxkSzgc1reBzRVWVJdKfL5TYUeGjL4EZ7WYmyKNQdEttd8LTC31G",
  "key3": "3HXXAajyNWHrqUj6ZpeoU574X159Ur7CkNnN6pihGttV7KWPU9s8j3WonGLYXE1U1jL2Z4E58hx28svv126kfPSC",
  "key4": "212zpbmRf6ChoQKRSeWeaaejDQahmLT1ixCquGmBtq7N4gBjqbDXWp3qB3Kh2X1igXW8Dtb8uzcuUpoLS5E2MHJh",
  "key5": "t4pXycUaiFJaK73Pp3M9iyEzyS2Tsj7DtuuvxFE8rQEp1FgxvzBNthwDZgvmaufHJRnLxu2F9wohsj7CHbeVMqP",
  "key6": "4TiCq97Abz5BoLAfEyHCUepAuTjoXD7fJUWD4YjTxRNQgtaospPX5oq26ZpcQxewxY8fS4xRtPJsYmNn1bDhhwLU",
  "key7": "4MRBd7bK3UeuSXrxbpdQ4FRMaQpPDuTA66s3EczUEHYtswyCQL46idimRBQhhrvqgX2ztPx1LrTk9wZz9nPdrvK9",
  "key8": "3pQmvhQzk4UiqPAPPHHSZeHywNdSNBpUQn62uHGXBUMimsmddJRL4DbVsZDXGmGHNTepwyCdSVXEh2NeLPRJe8xy",
  "key9": "4EX36mat5SENBkqv2znBgKH1N181sZJfYiLk989uRdR9YKP768d5RwMuq9aEUffrQMwSFjBryfz8PhcrudeNEc9C",
  "key10": "49VBFCC1a3dxqbWQgLTPHkpBLe4fHNbN5u8eDNi4NCh9w68rGvCoPGj8SgkjZz8EWqdpvn2WEGPM8MmdbDrWaGdw",
  "key11": "4sj3uDp2QK8BshnVEDNrC1kvqdHktGxjvEDJ8BmhbAY8ACR5HH3kmcJtiTfjQtSBYaX1RqU2aaJsjQ4SqRmSUFMM",
  "key12": "4kwKum1FYP7QrVYk13xH9QsyypVYgZhke6v8dFNRSXMPz168nsefFvdJc9NnBo7cnvnAQXFjvoui2meT3eHvSRFo",
  "key13": "cXmWDxiRTqgRBLSF3ZVgxeymrDjj59oAMNyDVrZg7GcDipNweoGSeL6bKXbWQgdRtoySbsoNm5DoJq8ebgRK3LK",
  "key14": "4BTQDSR9m89Y5Jm1EqqHGZeLZdqpt3oNpfcYs1V7am4pYTDmskWBD3CzTGrHmExphbbyV7gshmLcVSgkfhTRBnk8",
  "key15": "3ZTam7tCRp4u6TopqHxwVv8a3m4ZGm4Uu6hZaVParLJsy3sxc1XQd9oui5fkUCVG9Npb3GTqqr5LJ4vbwiQho6Nz",
  "key16": "5WEVWWp1AjZCMirW7r6Mjj7GCBf82toAENAGX9UUjAKX3d4M29kZPdpTEm3wNCSRXprJgHEcV5SpLscHo9z88hMA",
  "key17": "4haAyEkF4tdQ4wEtYyA3qBJ2pwfNdRCmxibtcSNMG9HQy3hGo9wVAyEGUnygv8MaBu5LQwcUg6bvFR1fqpQtFxVx",
  "key18": "2JazM4ZiYzB2C3XsfN1w7iYKdWwCyJoMSjWnoW2wpgLijACqxN2inYGcTgjNMNn59VQWpr9hHJaTg1553PjxCmW5",
  "key19": "5zpugpTP9pFE1E75N4CwjgZspfyLqPWp3rhpzuLEai39fj3QrvXMWpv5iTW78E9KXzV8XYs8WLqNQABuASYXrNTa",
  "key20": "Rw7B1tDt22SWRHtUUVgyKejBufiAVarHeWG1Ryw37Z2JgQCy3SjR5dFsn3NZvv87Wx4KLx5U8p5nvPHi2QzLjJp",
  "key21": "4nWyRmhYQU6SgFZhDaMywqSsVaTUB8oKZVeN1obaxYsfmnHya9MCBw9wcJswspTAnrYFALEwaVUmaXrbRfSEtetJ",
  "key22": "2u1hEbPb95WgriDM7fjF5jyzS8v8F8w1CE6ei7bz72RbXNZGdZBzW3rNsEnmmAFFdCHVQK38Uhbr8Bisd44JUq1F",
  "key23": "4f6ZZq8YZNRk2YCa7vTdTjEKavn5a7vVsXbBTsGwm8p7cfa93igJnMiLtMgcetNtyz2NCHwo7iQ5METmRrPVVky9",
  "key24": "4midCeF2bJjCSk9yZYwMG8jqBpny5Mf2sP5iPxdhZYmSANXmQZPu4oo2Y8XzL5YeWX69R4MTWv7T18Ctm7HQ9s9T",
  "key25": "AwoEJchpXTmo7t9R2mcTpRzYR48wv4EK61myWRZErajPRcUMjee4vqF68ZqmWmj1dxXBmj1dPT4NcypVkUCXhDD",
  "key26": "BUcpC1CULwoM3kutvhsiocfbKZemaRuPQ7j1vWT1AAbfVBiCooynFkpNB94TDcS5xsynZ97PNFYMmVfWU1WsbeS",
  "key27": "5Dbr4ARC3HZw9SJ5bMWaknaUZafb6PzQp5mds5hhbscAqJYJaAWm9At6DtRwSJATVZ4A6CM56cHhXipPx3ABdyho",
  "key28": "2LucB9drP3kBEL4iCgcrA4if1c9ouwwz42yiYdt85CW1WoMW3kaFs6xcZ8KcGXtRYrdpNNLUVrouP8t4jwtQDgF1",
  "key29": "C494nHh5EMW5ijDd7DTTG495ddEY5iUDvSeQ6Me98shw2sXkyoVUen2n8imvxvrcXYkq7QxX51xvU3KhbPtvpwx",
  "key30": "4XZsw57yXJy8mQS4xc2UfQQtZj16GGJUvnjviqFnQjAPEexfoQrgVh8QKBxoPNwUM2RqQwdKDMQ5g3tTmTZwaJ5a",
  "key31": "oThEXhbZPzWi3YEjZvtVqWhQ4k9gfke1vCSxb1M18LuJupZgng3pZa6xixZ6eUWb5eVn5aXJkdPDN2tuv24XBob",
  "key32": "5XRgag8iyKcyvJ59gdcUELDZtmgYQynb1JPzcyNHqVny8qrsggwpc1KGXrWFoSBsSDfQiNZ1PUCoA6yZy9wn1qEg",
  "key33": "5zTF1ZuKhJKeqmLS9GQ5Ppu3TPZdwYhPFsQxhaKc1w4K5Vsjomu2ugVGy1YyT3ZTo5Yjh8YWM88pHRfs8EhmZm6W",
  "key34": "5NskjXkaSJ6we8NuXzdoscSojriyjhL7bo5KKBLa75acUofa9TLzthzSeabzv6VBEi1Aes3rAxQ8BuR5XLaFqLm1",
  "key35": "5yoRcc8Z9GPGGNYyKSU4s1Eb19maoYxWbs9sBcNdY3FBtnJodJC49tBFmBDtkfRrz5PZHPJiQh72K6z8ccJ8WU9s",
  "key36": "5hW4M7ZqsqaiyERMAe9MuLPx4Bg1bVSkM5TV4wMgxF7t6qCzbh4dRFAGEui2KrWvmdocNCR6htC1G6zisQE4C9BG",
  "key37": "4yTrMNEDNnci13Ki1vsK8zT79UhMBziTA7MaNj46EHrnTnTesfN2sEi3M6xeuKiVa3Bp6vTGcLGmp8wSNqU2ZDa1",
  "key38": "2FHqqsNJ1t7KZnKzbWrBJsMGfxdY1Bbeboo2ENjEVLgGz4tDnmxiUM8fwNiBp26eDrZMawQ6w4KYDEM3eGxoLCwu"
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
