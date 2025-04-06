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
    "Q6AmD9mCtEaCnkG3QqHoprrcvJt53dECjfUeCBo2ycqDzYgTcHAp6Rd6TtUqwHxXaVL8p6LSkwheQoaSH27r9AP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V9xV95NF6ApkkLKjCG3YbmB7JREpHEYjh1Mkze1VRNvPcCDBMfay4LG8MwJcvPsynL4Q38CQYB1Zk5fqtu8LU4X",
  "key1": "3vGTWhENbb21nLKpmsHcbkpG3S9FiaB7XS5GC5XjPWjvRxBKsCGAXc2YBVqczUiwNgc2jriYgcoLSrrU99qfa1yH",
  "key2": "2ztRhs7tGEdkEhSzggDXgAJCANTagSevRpdYanGfzCMHny3PaFG82ca6h4hjz9mrPZX1F1S6nZjnYnDLDjT9ygDN",
  "key3": "2Mf1FLxw5Ganfgjdtomt6Hx1GT4AnQdAJmFaCdeWrJkR1q7sryNADF5e4drCkcs2KRceVVH4bamqAoUZqcZxT6VD",
  "key4": "stjEdN49EYztaYjmkce8H4d52G9CVHYqtig3r2M9krRi3e1DYpg6vTTmGWSyvzvKCbYJZcQDixrJxyC2eK4BhxN",
  "key5": "5EqPWkJqo2UKsAdbmMtPJqY64gTB2vLoWZiBJygddZAXHXv1ST5Q4yD4KqwcNJtueGxdkTNHuwziRKZHj7Sw47dK",
  "key6": "63aqUsHahYDPPsP8nhz5uARJiVRM4yNFvq7urH9f548E6MhBGSybiXRU1sTdCCH4tRCda44nPuk1mA8cqYkje3KL",
  "key7": "3wRC68NojDM9B7smg9QmbHnw8HriHLBFMrR7bqaJ6ADBUEdhGKWtEy7tH6PLcFP21auHEfB2pU37LNNppnap7QuK",
  "key8": "63uFLy4we9MwxFiepK173FfYfvjDjPreru31xp3H6pCdzXPQ4C4EdybUPHCidmWzfNQFojErTB94SRsdkfCxePSJ",
  "key9": "qBPPasmTbZJ6zs1eAkEh5qNhMjPQWdDU8WHJvKmbhayC8UWf9TLHst78z43aTS9bbvBrRvwR2fzub712ihuZ6V4",
  "key10": "5P76rADj9hBrFFnhg4YzXPqK1td8bLZiYEk1b82nAWXuhcyYpfjFVWWsySN1L4bV2W5cdNRdSBgC6oqLDcaddpTf",
  "key11": "3AnLHcWFkUspsK3Lcf6puypEXcq22h1cQvRs9uCFTuXcWs7WCmo46BRfat5WCxAZUP1TMWSa14Hs5gECk25fJ79F",
  "key12": "4cLjBbb8LzzC8bgJ9UAzibe6EZqHP8uyP45SJL7LWWRjEFNed7nxsMc42df82yMnke3QZD8jCaA5hVAdjqUAYDQe",
  "key13": "3U7qojBZwJ7NUHAPhhU8zavmX28j2n8uuazsEKKCmoJM4WwDY4CHEXnKyx69oTn5cBNBQhZFqTzUpLdAtjuago4V",
  "key14": "3MDijYZyE1txmNTd8xkk7gShyQJEPsGZht4PbUzYmyDADCc8H2sckH8X9eJky9He9xb7FhsCim2WY4nbaUmbZ4zV",
  "key15": "y7hYpQetzjcd6yVwE4BGGvjTk7BBNNRxbkQLEL8PiAhdKUiXmm2E4caVHA7BjTrPSvgqTmZ7UhXxeAeyTGXxVU6",
  "key16": "2rY92Ym6Tkbyby31fbnaC6xQ5DABmSyqWRWJRZqVHtcM6DZg3xRnQ6VVh26vAdRxKr1VnET1WsAyWZCDcndmBTEv",
  "key17": "34s2VQwakF3awLiVH1D9MnugAcRZF3WoptrBGLpjAMHY5LZ9PKv3Q3CWJHrNmGe5fHV6PaG5VwryHQ5kg3xsoX7q",
  "key18": "2hYKmeivxxgvSFXVTd5NXBEALKkiUZN3CqgqnkV7PKzVfsY4qWP17xu7G1TzuUR72R1omLht4KmWrWrfW4Uuun4H",
  "key19": "5wijT5zmcyanNW5Cm2MtBCyJDu4FyKuBFq4KH4CKTkVXS6e3dejzF7Vw1J1fpiq492m1SLHNqVyH4z6DhzvQNiie",
  "key20": "3KS3mVABNuBCqbNHqqvPcbpPfMbW6oHtX8m9suTn74Ze2WjTrEUdpTetwAMtYATn9gPvZpsvk9eRho2tKod8wWyb",
  "key21": "3khe8rB1YshZVhFP37jdyXXENGZiAwhGyRXfM7VWMYiAGeNreh8GqkxVJrfEM4YuJHXDJbdukgjjLikQBQgcqrXd",
  "key22": "42ux5d2kNmq15wqXQhMhZGEdpvr7UpcYrKm9X8UT36k7QjSg76DsgWSgMG2djk36NUiSBUiQHV9HyvsduAvewShy",
  "key23": "5S7va4uyjYBMFB8xw1ppeMKqz77HMEy7JnKC4g8GeswJrgPAQJwZ8z4di7iDSGJb4jzFxy8RaEsuBY12UXWqPd6u",
  "key24": "39cWcXpGzRUiHd1Hxdi9fhwSdAKiTZQCZokqDib1C1AEctRR3QeAXQKSUviN1j7u8KA4jC2xYzUY4gGYq4cFVv7r",
  "key25": "GQ6qUdyJDhcnPDTocHuSZXGgDeDEDAXgQX2y7UpsHGChnFCY68TEMZBG4UNmJABpFwCRU6H5K3weECkZoLnhbvL",
  "key26": "3ESP49gFYH9v5ZMyR4AY9QEhphqjpZmaUjJrhPPnMgygeAxX89DiHaqxRZSQSduXJgJwW8jAsMAdHJwebdEnvWbn",
  "key27": "3w17eDpRZC1ywg7rUiSxXLjKft3Wmptv8MY8uy8rB1xFqK5MQMUHxUTXTv2RqK9uMzkdf6rgchfJHEfYG4rVNff2",
  "key28": "3vg4k49frZStR3yzmiH8p6Hoe93eH81ZtPKvmwNm7o3riZ376jPrKPFCLGYnM3terTgn91TqexigbQDh8jkdSPqC",
  "key29": "2sWMB26dJkHsCrtqGFk11YqiYDYQjB2eqD1UR5uAVtmUvYTcGgA6fMe9vLB5mTBXTCMNAmcjrKzwERgFNJLqi8JC",
  "key30": "4rrxst4WrXRsq2YXvQhit7KBZNhQayThcjchThYi2HFmuwWxRyWgx372xfuQRBHXukwT1Cmcr3RcJi7uy95abPxf",
  "key31": "2X1zZ1vQtEotYbcwFwn9gT2wAQBtf8YMJb2PxpmhJuokjRNEutVL1QNEQpzULAd8pUVU6N1zpTbY6EZLpv2XTyfg",
  "key32": "5P5XwDEjq1LWyvvD2pRCyKqz2XdiNQ8UW4cnzowS4K4e4pjR4YVe9g2to1H1DQMyNNtBC13VCf7ZASjuQwTJUDSc",
  "key33": "5hTSdvYPvkxdygKyinJJkawoAaDd4QM7WoUqg23hJvveUmg9U2mcgS9K6oYorYxzb9yMn7Jifgi4tqUj9qDzjNy7",
  "key34": "3Qp4bo24oXVhHjhjbFhs3KRxD4fAA7gXfiWNnx8Fy1SdjZetBbNHiYLRby26d6FKJZ5RWKQMs34984yf9UxCMpdQ",
  "key35": "vnYcMgsHndrUUQkHh2ozxkDyxHdZxmXn9iy2EqwoQdjwnCJ3wEz9dWbVzu4NGrFvt2uowyt7ziH6yapCbTkdXVM",
  "key36": "2r49rdRw5FU6ftzQZ1HfE5TyEddG3j1ifGpwXu9iDpZLGv54UhXCDtGrNkuTMuss513P9eKZy9HwKQjNRYxvgYb3"
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
