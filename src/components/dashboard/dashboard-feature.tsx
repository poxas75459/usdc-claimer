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
    "4qFdGcLGuNTbHfbPVTHB7boKJ1JDF8rHsd52rg9RQEsfbKGYYY5oQyqTGAhhP1viAFdKVEYz8GXfhSyHGuxmgBSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ab861NptrnAudtqCea4U5qtpH5jd3xgzarf8vq63z5NnooCoUxJe2BdvgZu6doth2gfKBReVxoQDBMySRxhpMnY",
  "key1": "2HNCW6cXmHZ8pmHoL53EG1qvdUe6pWEoABSmu48UoeseCDpaZPKgWaTRwukVmr6vBN97zuZ9stZG5dCynBacq7KL",
  "key2": "2yijxB65FYHQE1HaiH89QNNz6TPmzega7szq29Qgr2JjmN1iopuXAgAgHS5JnWeYwmup8kNQLy332wG4Dhs9RSxP",
  "key3": "5nH1bCZ5BC6FCxRpLZoK9nBDL6KzpQQ4ET7atWi2M33wQetj43a5i3th8Yr3k4C2HBSFqEbFZ6ShnJkeDuAX33HE",
  "key4": "2oFTxEFqvHQ7com7ikXSAEbo23wEnyfdgqn3dnqAkS3oF1JNzZFrM7rQdUSnyg4rRjkYeTRgm9fSSeq7eSfdikrc",
  "key5": "dXHxRP4VTUEuDwhkVWCi2jhfvAQx15WfzZwJuQpqxicZpVrVzHRp7qpykfFTHNPhbkeDdRAqkuCuFi7qzmqnZrc",
  "key6": "48Db2fc1z2bafVJUjhsBXXrkg4htk2LSecHG923RqpxyEkTVtBZ29uYQRE1M9ojsDKDfcWtAo3x9m1EwgVznLvWP",
  "key7": "5BxhA8AwisSgFrz86du6yEzQtYcLnmoUEZ7iWBTbXZuESLzeMkUQtJ4UHc7wnubfwBiKwnWGSkSQf9qKcbkx8UWk",
  "key8": "4nTxqHaswxznaGVhBNeAGdwvPpAKkrbBi8xBE9C6ZpwaKUiMeiGNK1xDJt71gEKE7dZhyvg6bTA4j7RubZN5Uvsk",
  "key9": "2sUUQ8SouFnN9dc8gHXKGiRh9LyMNbREgPNEEpXdkactycQByGRaiJ6Xekunzmowzj5VeJ64q2QvTRau9LkWzMvm",
  "key10": "4q5vZmNDmN6kDQBtRxJ85LcsTSUcDGJJnkComMZ76zP3Rhdg9ZzG2LehxjEjcu5Zoa5Af81Ci11y2z1f7Eb7MEPs",
  "key11": "48y7cm9pntNSKaqD9BVJBdCTQm3U8ELMHdY4d5nrcVVesNpJsALBJwrJMNyTVpTarTZ4S5xNQYuyqvXWZYyp4ALG",
  "key12": "mJeimPLU5QoQAnEwpQn6grk7VBpHm4aXGRuifLnfmU3yeHEAAPF9J2WeMQgVCE3PdWakw4Si17SiCEMihM6in9t",
  "key13": "4pcMpJLWiE6SMkZNVM48Q3PiJmJbYho7YiD3b5ap4chojuatpkwBqeeaWsDWLpFxcrUPxLNCNAiRheHVA2W46ARL",
  "key14": "2zzQZqWVFayDnRRAMNkN4MzkKVr6ZKENwHqhANiEzBdTt1M7Gp8cMV3Lz9khuMvcqS85HpDStpNt1fdFmv7xxhQU",
  "key15": "3rmPSwAafmWffL5LmtNgr4NFjhQ7oZgjQmt64UPS6cvLNxyye9HjH3WfJeNCqBYcZJRzpMcosE4ESMVBoVgYXLrD",
  "key16": "5XcSf81sF53UwNH8yPVca3yqKw2PRthVnWEiMHPa4GtrPFjhcSoDGEvvM4icNS9g2e1hN8Dj6JcF7PaqsS6cvttf",
  "key17": "4wGrExo149u3tKwyoJUB1eRJ4fb8NvyPwXscYEzqoYgULboEBpmf4imjb6WVZg65e62EfmTropmi2vW3QJ1BT1ec",
  "key18": "4joWP3JmP9A6HYDrT9J4BxausK9rJzUq2CFFuequ1xkE8hJAGZ3hds2GMK6y8Mq2nbRfqv8dBNekbDdThUKZVSi5",
  "key19": "2xBnPLwKKABS5RyakPZTBfeXTkaNkeaMYt5WboreR8eAWo2sasBzA4Qi975Uwiv81QSgXWmyyC77xXMARQJdjPLp",
  "key20": "2aMCUtRXqYU2LvoEZX7usYnqoLjj7biAh8MhssUoFJ2yFNseBZNx58JTBQ5e9PcoiUFH5iT5jAMh6XC5KSA2oBNX",
  "key21": "fsbdqyZ2UWtUWWTo7oSeHBoTHfvLp7qiE46tqpYKqFvzMWBvPzdXT49SHmxsf6L3mv9EfST3oLRahtxZXnu339p",
  "key22": "4FcrJ9RbPRqDKfcHJQm8KcVKRKYiNuaYsq7VQ3kAwap55fAr5C5b8SJN2qrVWXoU8v5C1xDFjQc7SPe5Xf1AivVz",
  "key23": "57g7hzUpNquqUWe4KyNgEsEjqFkFbfxkpWTLywPJqvo24fRffddzryENGAr5Hb6EbN2rCTuHty86Kkshyh1pv7gH",
  "key24": "3xqj98pVxjMRYH821ZBs8jyoTPyoUJMUB5xnEBWWuKqYQFndiZeLBxXGF7nZX2F26E5ndUT4A1Kyhw2umvz9uLN5",
  "key25": "y8V3UMxoZq2tZpZGHArfASchUcKbooY8j6YgZB3v1fjFvQFHdGLM6pUDSCwM6A6R1EdTEhVLdpdQVTFJF66rVWz",
  "key26": "rEQ1HL7rTxbyc1uefbcb8Z9JLCj3Wg7oCKJ2F5KZ2Dx79dG6yyKuGKkPt1yBmfV9myEa5knw8tsXmp7F4cD6jEY",
  "key27": "4DGopzzBP4fNgGxGgw6vnZjZQNxNATgQ4ztkUpSjsukLfcfYMS9AzLaWUFT2Uj9WCuKddWY7MpUQBnas7VX6iDBn",
  "key28": "22hQoBhA6h3n6Q6isSrL54D1KJuFyvx6YTwyyEPxkFPvKFw8pMZ35MBQow15t3eYrAA5tm95kfjfMjgfGFaXKS14",
  "key29": "Rq7EMaic5h8wriAApNqMgy3i9JPPeNq76jZKYMMX7yWdgnKaPDGSSMxnzt2bgiDoiGmfmNF95Nioci1DuQewEzp",
  "key30": "AJQs4qTY4k2MZSeH3bhSWc1u3by3pmkQs43YxtmVc4Xe4BorT5JeneVfKqjBitxx6roSpb3xydJKX9aaHyAJGnU",
  "key31": "5H8sK72JjkRMe3bcViiXe9MucFpVhPBqUHq5B3hiVEPdTy9pYWfz49ky2J18MeP88EaJ23RuU47NBJpKHZ8d14G8",
  "key32": "5sjLBHDvp3R2Dy9eEJRhZPPh4hf7UvEu265fUYg7rDKmY1m8fwfKFwawrUvNJCdmtjZSSF1aEtzQf2yWC64F87HT",
  "key33": "5GoaK33Nb7ggDTPga9BSUyF2qWtDoY9b1odc66g19vi53TqVscjFJk4YWpaWw5qhTYcAwLToWCQHaJzpksqZocnH",
  "key34": "3zVjofgMqmkwueo3toV9uxu7ZRXB2aVrepNakP7QNYDoK7HRHhxp7Mng1W9EBZa5kEwb5ofS38Y3kJfNn8yD6KTN",
  "key35": "4YnFqZ3wMdVLov89WqHArANjx3AqhqDScLz7pxSKppvQuDmpxCa5SyTMBwNXG28a57rQDCFeJwk5Q7BDbeUmM93T",
  "key36": "3QcLBUVNUSxsxc4kPJP9k3PzQSDTo7qwAUMQjq5Td7rnxpesz41PiArAEzcEBUWPzaSTviKoQxFd36rbAoUKJanT",
  "key37": "2Jt8J7B5HfZmTDvUTCZkxHJrmjEXyFEBdqo4Qj1B6rCNjeHyoz5irQdWBSJrK7698amxRATnNZZXMEw7FPT1LV3h",
  "key38": "3mgY6LfLzFUNDR2569q1187wRTZBHHRYr8VEK6SJJEWhMUnnq1qvvA9S1nTErQBpeHcA84DFvAAsbfpbBWeqCymb",
  "key39": "4G5JKsC2qqVHyWnXqpFQf6jjDqjdkg4biKvHtgMxtMXpkHp7v8nnLDzpCdtEVEvGj5kfUodytQNabmHNy4g5R2oU",
  "key40": "1uoW1CtgHZYTrsu2KwKnSH43kmBTk3ubmkRgZXbwWkGGk1ngRjSJxBWcP8ZEx3XTM9tw1UKSFtQ9m6oytZLFBt7",
  "key41": "3sFLDPLtJM2KU7baCH3jqDB1A2AQnmHcaoLdn27ZaKs1PcCkJCuZUFvWhGLaD9oF3rdqzE2XkzCgwz8gFCpJrQHp",
  "key42": "5tPGdZ7MfiA1EerVZzAcwu4qBPBcdB66BsMsn9FKgPJiveuBYMgbQ5M9j5rCgxiGZh2tPBoKWYZiWxvHzdvjs5tD"
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
