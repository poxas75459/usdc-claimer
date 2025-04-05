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
    "5eUZtUr6fGMYnDW7NESNwMdxgqumEpshw1muVLJsDzyf5mi7CPpWNhK7KhnMLkcXNw1yZRHznRR7gtM9wxMnJHYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fhgFMS4W6mLACWt2x7cbADMYMaLGX7vepVAip2sTygp7hagYLjGLRwaoWs6ZcLHH2Vmh7d31Bgh429s1zn9LejT",
  "key1": "5TBTu6duzVfQ921BYW5KhrLZpRXXDJ8VAJUgWt6YZuYcz7dnNmBDLQBXgyUM7DCdCbpQdtKdWMW6anehz6tDwthn",
  "key2": "2oR43ypDtHwADubPVhMN8ufxAA6yPZaTg8fAgKSQZJXWjUV231cp5SSYKJUgyjy6p1unNRRpFvdPeZPaBbb5fYkG",
  "key3": "qbcy7Nq1cMC21BxNdsNfaq42PUAMmF14Wnex5tihTNisFiDcHZAAX7oAG2RVoeCYYA5pbtzhQsKywVHyXCskycq",
  "key4": "2tUKXmcQNxnySNY8gnaC3wSR14WiJFDcfvKmxEK6cA7hyuuym1f6Tc5CAh77ZLEhfKjBFbbBMGLccz7C8aw3yY26",
  "key5": "2zgHoTKct7tZ2uCxJTRaq7yri5kCui5LbGTNVRixh9ddAWNkyvKhxr156Dy242ueEVWMwEjfaamue4hjdjUvvSaM",
  "key6": "3KTHfJLyQPGacih1WapL9bPbFVtyoq2THyrHmMBjumu6PtB4auXeMhF93sBZzJJwBsNeWL7GD9hX9fs6vQ8JVgWL",
  "key7": "4jR8ejQSxL5u2pwpvGXQGZFuQPGkNcQPon6kAd2UJ3A8fhoZrUVwTZyBFMwTsVD7YosE7L2zCJsAEA6AtsV9WAEV",
  "key8": "1zbkhXKQNmiXL6SiAFpXZSYJixQYjuprm9AYYH5hgRMyVZxS1uSLtFBdAjvWX2Xyxe6AvFWhHyiXKhcpSGK68TX",
  "key9": "3KhWQAAt19aCXnB4Esc9BepHJbWDWcVX6PYEFvtKXbqn3CmR3jWWNt6evzcSg4eJkaAyZWT9N1uAsjqTDd5sREQn",
  "key10": "5tUhrdBjH3sUoAyGb4o7JiqmQBG8iY1BBoTGPsPKMAWJxQJ9ZZXLn2UPQcZbtqFGd6uxHAr13FAopH5DsaFsf3vC",
  "key11": "2v9G57EbSbQHq2AgfQxXF7Zg6ZG2nsTtwDDfakBXwxt2imshimSKE5n2XjmMZLZFxrm9YaxeRwkmQvE46iuSynDP",
  "key12": "4mFpU4J7d4C3wzTz6E4gXXoHsR5jdwLSjd8EzTHpipoSPWgiSBDY4wuVdhSEUscxdm7nQrc6Kkhzge3MmD8Cs6Xb",
  "key13": "46oCG8Q7B2Z3cGka62PGdBYBZuyFvTEiCtwTXgdHZ8rVDr88n1yRx5UWbkVXmzYkhHrG6W48ndrA5Jr5QTE3uVrA",
  "key14": "5h6kpPn67nwEUvk9b1sgQM8Zqxb2iQQzZPabkzas9oa8buKZq3DmJHhX2jXrRnrtEWXRVsFWrxwA8RUf6Tp7u9Uk",
  "key15": "45cu1WAKF3E7WD9PhEzZESjbZXVVsEHUd1SY4wXbHwU5z1JBhDnHDuKyGig6D6uk4Cton1nrgVyCdhY3ZJ3KM47s",
  "key16": "4CBXs3kwTYbtdSn4wTPZbkgWXuYtwpsyqcj5Bp62fkb2VgdF84r6y1M9z665wyKXk4HSd2JJFjSrBLKzho3ofirb",
  "key17": "3i4Q6S3yrkviv1Cf1MzNuf8eYiaYb8J5Z3MxRHcuCZhCC5ar66GxLwLsFNR7VSrYPL6Z3DoR2veSmSSbqEyTNmUp",
  "key18": "3y6eShFHrSjr2Rfstp9L7ShvEz4wRFQnkfewK6Spze7cMie9yXpqGnr9HMuL5EqdPUQ1swrJWZuw4haff3s22q53",
  "key19": "DBq5tEPVUtd4XvJJCUvzddFrUeLWat35KiShKuVztnxu3rYnn1HrhszoTsfBtZBh1gGP9w1q1Lfkec8UapNUxiD",
  "key20": "46EFjbznHphwm9d7XPqR3AmMcSnKZVjkAMPXz9rAAPqDzarR7ekuAbwEopq7GaBXbUKZB3AMzDvu99AfXahDDHL6",
  "key21": "3VVpkKEZcjUYGZzZRNXr71wjkjmCuZFGAhmm1hxazGqyHSgJBtaFpSP1aWbULLUTyZvu3ynpNJkW3nWv9v6JJQkS",
  "key22": "2kS1WK1avhQ7oniqATySWnWqRbh5AcWT3fsr4DNndRsqWdRd2gudABzw7Ng91qDHWM8hLXM7QWkbDma3GNEoFKKR",
  "key23": "5hC85u3fXfxbHXBYEdQLJGp8jyGa1ByUfx78qTgQmRLhYz8aEuhhacZrNCJVd4zDKnQZDkpbpWoY3xkynMKfucCM",
  "key24": "3vCTBrUkVWQ4MxpPJRxPYCf3DmovhJn67PbrDHTZj7ZeC3VwQ3LUVpnz6dPViBxfkY5pdRYp3WY1ujGHg4yEh3Ju",
  "key25": "64TDMgNb6whTxsB27CNB7fkyfCsq6p5zHDJWAAB1kZjbmj3DMBu1bcwr9QSwkNsMEt3v8WQjXU6hcujTSWe1nESn",
  "key26": "3Z7K9nsqurdFhFsg64d7UXedpvr2KA6QCYL2b3Xgob6zYpZFNEHXnL4oiHxwZShBBdBJ8zTuY7z7jYeBqS5uueBW",
  "key27": "2cJgxrVQUcyfzy7Fy1B6qXdq6UQa47MNA7cg8GjjbTFUyJtRGSSbeHo9YoY8XmLxYAA3SXCs89ftDZT8MBf9AqBE",
  "key28": "3DHJsWTLnpL6MVfkBL1csd62Am8TBa7CpCxQpNvU6ghLuTH3CNxABxVNTVnGewDH9c4j4xJrTXrUunezw9dgHPUF",
  "key29": "4rsd8YBAEyxbLzraHsXofGFFjZEK7Gx9QA6T3fAc4UJFxQuHD7DASjY1ap9veuexNo6QYNwmGYzViUR6HDJSoues",
  "key30": "5rr98Y7gZWxxAV4T8NGQNpLADQnGQBTRKS5bkPnjtDXYGm8LdkbdbMkM9tyth6D9D8AhRAMYsvHoSnjPu7UR9Fsg",
  "key31": "4nYuX98myEo3zTsjYkKqkB9XjJhNBYYXSwTmEScHiSpuc52HtinwQZBCx7BuFoVaFhrTZdPcbiiyv1J8sRyjLESo",
  "key32": "28nBk39CWQrAG6MKxotujQyrGbWXmKf2YivGN7cG3pCyEHPGQoXkqVLPrz2nt8CyU9pP4Qzrv9QFsFvrnVJuqYE1",
  "key33": "4i3vmw5D6z6TkKsD1Q1xKgmnzh8ku7ZqHJeTvjEwmPcSRXWQqfYkcVnDSk5VAbgQYitD84Q6j59p6Rwuxim2Z2AV",
  "key34": "3jcxfdCVWBSTbFuPahLHYZUPLUkiuhwxotQUykb1hYGVB6ULpdMcAMwzgcQGXqrdMp92AC254UUsZiCTBQn3beNf",
  "key35": "3FMKBHqDSJkMvJj3PVCXepJ7Rgdb59yeyhP7zFKuft3S3gmPfeytML6W6o4cmkDXXgSLDDHkYhnqxKfiZ5vXkfmo",
  "key36": "4zRCL3xGZ8QCipnV4FsYULCQed19pB1QkGKAD4WifVft8QMtvh28wGqc3vudP6ZjQkxzGekXFKHxYmwwUuNM5JDN"
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
