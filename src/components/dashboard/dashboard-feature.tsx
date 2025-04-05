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
    "5653C2BB6xxdRmfs1WQS7ZcAmgrhWGdZ2vJxUbGKbBTtTpJZjrcaiXj83ML7KZo6vw8KLKsQ5JXHjQ9p7zzW9vyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eHSgnyeuNyR61tRDvDckNNUqL3wZXMZmBmnXzcqfGFwbeaKruBiMEPR5PafARE5DTqVFJ2AyJLzjBnZJjAVQ1zc",
  "key1": "1wodLCxVxHT4bR2Ayzk9hwqCZJwpzSfNX5TVLmpzsVNDypWjsFgBHfzq1nWizJwkAJ1KZtofq6N94qi6vozJwbY",
  "key2": "5siWCXtR82kF1SzPVp4nGhdVC6CJwndrZEWFRSrf2zn6fHwWqHjDqEnxY4tufLmDqG3kBZDiToX9ER7uPy8vVq1h",
  "key3": "P6LuYky8qxwXVDtPwrLm1vBPtt7VZeUJgov951WexXVjUap1v8PBdtKTPmNDsjoeDKr1rCJfuFh22p7EwNggy3V",
  "key4": "2NNHyGqayexRknNfwBgTsqDzKuGhSwDwkidNJtVd1CCrQvZyoZD56EJbA3hQqySjL5vcPgPRhso1tL4c6ZLjJYyB",
  "key5": "PZYeNqv7JYbdmuzL6xpAo5wicvpN9rNcZHioYn9p7pgXd7vfpDPvrQjZNDxjx6ivjQETGeptpAbsid8NoCU4sdM",
  "key6": "3su5E2WMHDqQBMaATGjGjtwA38TVtGL1nQrN45yb9ajqBxqtaBYzMVNCAANNT27FftZCnk6d7jyXkv1yMj7Wua6q",
  "key7": "3YKDUjbeKU3SEbh74f8c5AcRiAarX87ofUETg1u38tMLrd1QNbKhq4zHr1S4r5opYsZaxbupWcUPsCjPi9JJZqri",
  "key8": "jyNFVvfNaPzXc4q5M1PTYGNba2FpJcP1UzvE4ZK3UHaPNHrC1xyRnNhPYGHj8tfZhkawGKFJdevuJnbafWBvzTD",
  "key9": "y66GRhW1vEP8R2Mjbp7TQu5WcKhsGNWY1CZA1vCJ7se5rURTnrKFDbnHLz1EDm6uvCVKMGuWT2BZ4yKnfJ97CDB",
  "key10": "2KyJtNXs3oYQJxWMC9DfvRTVTfAypeAPQauCvjiaPMJmpDJwrGspPuL6P7ebumCNQa5RsbRnZ6fAgAR6ap4aSaDS",
  "key11": "5CRrSrBvU1D9VwmKi7N9aqswmkWupWGLTmFWt8H1v2xjLD1yL5BzrypfeaTq8vX2eEiAvk87YrnjBne95y4VVGUa",
  "key12": "3po9SaPniGWvFjw6sTRbmD4jVQTkcdV3ebNThyGibn1kuxyoBvS2ykL89hkFTWf9sXAqHdDD7y3VqnkdsHgENfXy",
  "key13": "2QowUc3371Ht21BBUujfuWKVq5DgEskXsgvTvBxFoUv7H3FLDaJZx2jk3ZaaEKqtfTCyVehJsxuEj9L4g2EqE773",
  "key14": "4Dz3DkFhB5isAqZCD1XryRdUyRrnfai5xQogQZ4jhTGmJohWKGQtxxKKR9KRnoWHRXyAmcejhCkRBbtrzRU6YFCx",
  "key15": "4DkSNsgfDVSUjJeJgMApSkAuVwDt7fGcadrcNCbyYRew5xQ3KLgVnr2MW6oM6BjJuAKsDU2T8Qzj7SE2dF5k2PW7",
  "key16": "2AdQTV7yPtFHfGseXbJju3WNhgFjrbuzi9qKKhoY4g5HTgr92n8imNXA7D9KUKftshSpVN7hVbwFf7uoMuwr6qDB",
  "key17": "wQVQr6Epvqrmti5iyVfqYivcN6oC2aX6rRp9cFz7R1KJ3qbTKLBLQU8sqGJ4aCteQnoJQEoQbV8j54WQAi9jBt7",
  "key18": "3hcZUex8fkXMqSxSZrDy9GYua8QS87D8yLeMsUJYqE3aJL7XvJqVLNGzJHN2ySHdJDa32cAqpV4wAjuQggW39j1e",
  "key19": "5ywrcX5TaYnNej1iSpMrwQCGxW2rSjotz2y17GtpUNuyY5RQNKFkX5PMiGnEN9gRNyiSShij1p9d7xEFhrcVSxsH",
  "key20": "4MAUsHGHzba2YTvNodUcfy7PNZLXGeDXC1r2cGT4W5JCxEFD92tpPfb3Hqbc9us3EfsRRXekVhnrFVoKmM2gfN8i",
  "key21": "4KLbXtJK4Wxmof3qs9D8gxcLYX8ChHWEeGEk8okq58CAi5jJfWDSdS2FXPFqPVrmmwb6Fxew8rHHe7iLA8Rh6Zb8",
  "key22": "NLAQ7SmuUNWhqVp9XQCpzeEKeQKLezEdq7MUhgt1vqDAUGpt5fr7aAHQscNaSk23C7c1cw5mN3MhZPius7DHckA",
  "key23": "2NPoBM94tcoybu84d6fHXnRzRaGKwq2ohm4R85BxDTaKWuFz4cqziLhpvtf2p1uCnc1y34GLFGmyaFgVFKZXsyLH",
  "key24": "2hr3SUNdcwBTCvRTmEffXBMAHCSLeQL7wSYtas7tgDA2N1BGVoyCyTS57kBSseS7aoHpu6dnhFs3GtZJzuaUgVhH",
  "key25": "5oACCTNZ21y6fpGoiDtHGBCws17LuewhnALEumWCUdajmy7Z5wSVX8ykBb5vGP1sZTvUZ7qEP2EmUtijvYmBxwvt",
  "key26": "4Dup5rGvP5in4eteTtwsvFrnUFRaMtakqTCvKx1CKnamJNphKNjVPLqYQiUYz3hisiS7AaLyP3FtXnh2ib7SfvGr",
  "key27": "3Bya8VvrMq4XQZE1dXEMsXNUNpSZU11fbR2wVRnWogmn2CyoWtBEqeWk2zvzDYE9yRSH6g5b2zQ8AVsZ6YRVTyRC",
  "key28": "4FiHiBRZTwkCEWLJDAB8yDWxe8Z6tEuuYwxKsNxPp1RYX76iL4dXvYJWEXJRwTHzXn3vBH4U1hrk5U2CQG4GudoV",
  "key29": "3KCKqkCm9hXZz6QB9ofY3Gh3F13h1RJrWRNoHrGM5hmrowJHAy3SZiR7NNrsEa4VWdvrmRpbE9T71empMT1rZTcd",
  "key30": "39bt5tQB16qJgivgB5zWvtW3akbaAXvFgiSkVjJt3JJ7FVEYmcG82CzAbgMUrTKjUKvHgwJpvkVdpKuNSbw2yRq2",
  "key31": "SDkdm6JKkUKwKzNWFdui5ztVwjTJJzRN3cP4ZD8D2APUq5uVEUmJqsV6wLD8GMe9ZnWcMiNxhhPgQfFfpeb7P3A",
  "key32": "QBUpMsE82yffsxaKp6xo2mM1QCsddCzcS9RWaHmRop7qRNqrAFFcJVaxN5zD8XKg3BAWDys8TVzoKWkuh9zFN3y",
  "key33": "3bez29dpUFBYYZom84Tia74UtWD7DWFPa8CApv9nNdAMx79rD5YSY8gnV1cd352dz865oaaxSt7RyCG4szkf2JSL",
  "key34": "2quHrwoZAVSxNphkyTP7U6bzj9QWyKwg86KoD8Thwg5H8xoZCRwPYzVbGijBZNDdv8XQgsgPAXXvmj9ixGXWP3yA",
  "key35": "4NLVCfUrBfczeftwtp6GenfciENmomFLAtgxvWcvbwfZpsbEmwcMzPR9x4uUFL5JLF12HXkCArXPKA57ihAPioxD",
  "key36": "2HzZiX4gchMrd7UauWpaB8nYwzsfAiCLWUHxc4kXRtD8tcUS5WGBuNReiKtGtFPanrihXoXS4mZiMd1jcNEoGyBt",
  "key37": "3pLa22UcUHTx22tqvFPoNokKQRiLxiPasw8bajVo9z8iV6wqsMSWcDL64H1ZYE2RotmCG7CGhtshZ42nT89J8Pom",
  "key38": "2EEc5fXCVYHqdJ9ptGJ1T9owzyyx7YaAsYKpaEth6cyBiWnvxC5bqcUMpizeGS59MVNvaxEWBCs5EP5t4cLa9ESc",
  "key39": "2iW5ZxAkVvTHmhkGTaZhsEuALjYRTD9dtJMww7KpjkYzcZQsUUyJ3mxgcBLoFjYUFbq23Dr1SnNXUyP8ozXYgv8V",
  "key40": "31eViELm4wKnnjDtbd3QWHVYd84xhoUdcoMEx36ETLTa9gcWT5RDgkxgNmbUuJ7GP3YgEvxWfvmX86Pf4cqzF9sm"
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
