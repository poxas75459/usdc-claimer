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
    "2upZecbXYjF8HzYUL7nsnkW9thDGKQGDk7SKS6rBXwr6wMQxX9hzHz7JfYqwRTeuM8dx7XGows8MLYXxbLoMqJTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42rMqDuYF5euJZ5NobAGqngti6J8pQwcaWuHWaciyLrMqZTQ8gK5CzmZdZRuDgxNL4t6PZeszzTHmhvHZKEfWq15",
  "key1": "4WCFp9jZaWVh2pLNULmMZegetXHBwEG9yozSpcw2v7Na54pjcz3uaxsB7228nqkujGRpbnCgHPQJ4mdwGPwPTics",
  "key2": "46fef46f7RQbALjW4d4hTj8cVmLmJupdGt94PhN8erqshfypQaiC8A9JGKq7TMwZFWTmaQaHQj6ohygXBPj9G2Uq",
  "key3": "5skF8g1SxNLQYT6UqRap431uv25tNqqYrAyp5pGJ1qQuTiPX3wLc7nFGmu9HJ7VM59MdbyLaCvJSRNaEaoyPw2b2",
  "key4": "2heR8DoTzFs1aheNHNXBkfNBGDxVdc7tJEYfAde1nULFFjv3wFFD6jznv1D2s2RWHXRcGYszE7sLYR9itazsuKfV",
  "key5": "44eQqHQQxb2kgnLfmexS7ifM189FXi3MtpxtSQ8JfMW6PgqmNMV5pQYmpSRk9K3UFjjzcycNxQp8YyB2RQN4mXH3",
  "key6": "3rav15EJZMdvJMqndxGPe5zhKKAWRXMEnwiNQXNH3du9jd7JkKNe1zReT5oriPfgaj6NMfxrwKzD1o8NLj6crG6i",
  "key7": "CgcmnQoNgxUd9t6fyU8vKiCjEwkHzvWpuKJ7csJqJ5r7PrnPc2TDS6CXbCAMiAJ99eHNGCdqYEGDuosmkJxiW6i",
  "key8": "5jgukaXehTpQQNaXoVPYKHGEQ87wLQRP2LEr1KTkaoY7SCYcgvzDGmua2ad7q61RJan9C2fDc5Gx3kqi8rfmMY6b",
  "key9": "LGuoTKccGUqWPvJ4i2itpzS6Ud3bvzKqwC6RXNaoRTAPFsU7vjJLSoVy4wtbcDUrmzX2HiuSCpXCtQcyHnKJvou",
  "key10": "6ZrPJwN63X5bPUAyQvQ9355dL54h9GscGQ1yL7Tm2zJdURc6pDdde4SqtrmCnFrSsuPcQ4s13vxCWr5TxwCgpQT",
  "key11": "5dkj28GgGokNPMKHmQg3aPonWzzrNeRvEAA5iDe2A8ejmGSau9obzdGd7hYMNQQ1wLFvJbRcCKELZcvQmjd98RuV",
  "key12": "4SiD3STa4RBEk6nfzbq4PtJUJnbcPFzZSu7iJiHM8yHcgueHp2EYgmr6bnbp3yshiTo81jiCoZ81tbWeQrsnMZS3",
  "key13": "DMdGTRx8ej8qDePYiyBq89gY6PkvGHDoJuuxEy9MoYGEb8agypGnMHrxCn6YTo11STSkyY9zS4ghM7tK7iXYjwr",
  "key14": "24qvKBvQq9tN8asDX3Sb3PinMXmmkX1EtvyKcWmoTQsBVCbhBdJzLyLKPcFs3zvxB9pYZQ8w1YGFrvf2FCKDwCsZ",
  "key15": "5f1owiSDEwAd4887LxaG3p8ufLsVuAjZX9Prt6iSt4NhFoTP1yBoKGbmjFUQ1f6kzmWXRwkiR7YvvhZD7mK1d6jH",
  "key16": "3viXxMETvfbVR7PbgmQfj6GQBdm2Y4juruKqacQoc4bCcrJ3U4cyqqNmbKnLiwwWLmBtsLD2576zUeG5AfzjwFtf",
  "key17": "5dNmxDv8wSZhFxQUaPfkFPumoi5Jx7daNYg4nHY8sP3B6bb8c2hEsJ5ExVKT1gSeycDxpb5Ugb1GG9x9o5NVk3dV",
  "key18": "4SA1d3DareuFrA5cuqx3suEhaKPxwUZbZgWxLxMU6wV5n2Tf9c6tzUsaJdU1nPn7MxnrVWE2xcaGn2VsPAcAwFPv",
  "key19": "3LXU5DsBV5nTtD6CQ5h9RT4jTvituwVqZAv2Wq9RMwqM5vd3FVPnipfPVASPBsRYYhZCb6LWE1fzNjhAMhEFWPvw",
  "key20": "aQpAeGP2eFTVHg3MXV7uauJAjMt15uWNiikSq5Bx3ML8kPR8DzNcNqHNC9gMtUbAsPMdfQQmXMd4sLY28FLTLEy",
  "key21": "YzXsYvp88Frry9WXzxjS48dGn3FoK2JqSit4xWbEvG5GMQKj31Dd5F7jsDKyp9j1xX56Cee1hXaawHV5DkRcr4r",
  "key22": "3w48yWzWyGPF1bxYakTtB433MehwY9QnbXJ5cKEGWWuLpQuG25svgwVWFdTUfe7wiKrW36ff6HcSXfwjrvs2T34g",
  "key23": "2r9jMT8gWaiUcyCyjQU1fN5HgSUG2SMaeLEKmUmv7b1bb9D4aTXm2zf9mPfBCDQ5hR7gkCCAHRFixf6HYkxpfFmz",
  "key24": "31JZQUiziAaQRikKF6PwGfd41MUDC3bAuik3XoDG9DY5pi4PfdyLN9uCeh8XaXkT4bqGEzA1ZE65p3Zzzc6KqE36",
  "key25": "5HDuaiPTf9s5y1S7P25nyZZqvC1uTTQ3LT8YaQiyCByj9DZi6p89t2DS2weExfqkiG1nCPRf9pKUcZhvbsoqBYX9",
  "key26": "edynUcu7uWNRCpYny9puUxE18Xc8zKP8aBT3NHtyCQXumFEea1u2tkq9sjMMDEFnki7KLp6vPaqrcTYwr4HFELe",
  "key27": "5YwvYFPtuu2zkJUesn8ZP7Fiy6WyztFcvf2f6yT4fqScNZ2zNf4BHxU69vUTXrDTAHB3PSyMcLVV2WJy8Uogsiig",
  "key28": "5yDfHEQ198vG6u2egEyZza9U5pu6Tz3GHRneNyTFyair7rETetEajRKp9HTmnFf4uZHKMqqykNhZquvmFFpqiwhb",
  "key29": "44e9pAe934cgbg4bYvEqS7UZwgTcnAapyJ5nGURvdGy78nH6YroNBsENUEwHpzMyVBSbJWepaha1eRYGj5gF6d6s",
  "key30": "4pUpsmdtSSgZSXSmGViYaj62S9Z3G3F8kUa3nUCuXHUhF7N7dPoK2SA4J5fxhyis2v8auJkEnHG9czmYEDswxdq5",
  "key31": "5ZqvKbuP2ycX19twfPMPVCVa7sGsA862ehnYX9okEi5NzK1dcoKhMBpNM3RrAcURTXzwXsHWrStgvtWRZZJS3aGz",
  "key32": "3PZJQjXujffcJwmhaNML4Vx1d7pfyYL1QFvRBtjjmSKmB5FVPf5t8BQwuqB32jWmP84GFjUxu65sh11Zxwn1RyvB",
  "key33": "518T6N31pkXzrqUsJu7qWeZxRC6syFLPcPyjVLqhtv7AwV8Gv3jWbAypSVNQHcXjABgeXqjDsLT6c3QePoAs8yHT",
  "key34": "5qjHPoKf5gT9cmiN6XC8RR69vbMwNmeSwazbBBLKjzASb9ujVc9Kpi3V1CgtGUEtDy7k4Hj5KKbh6LgbGqsHxNCc",
  "key35": "Y1pApYgUw4mYKYXewoQxWFA4z5RGFJ4GqwFMyt8V2PaMF4BZwCC3C5jxYtfhkMwWG6pfU8qpgdgScaD4VMTZBhh",
  "key36": "2JadKgVoaJ3UyveG6TvKQMEcgtKKAvYSm6JSPxYVQPg4jPB5USCUaQV8sDAmdXsw7iiU8mHQ2nZVpLB2kijSB8iz",
  "key37": "4iF1cfDgEULjEoqZNTmSe5qbm5aQtjY6YJsKDxQYRt7Tij9oZNmssdjSUeLbTJDSf617xPYWTcXLBM6bceyEfCM9",
  "key38": "5deo92XubZtraDkasqKpYQyTjPSP7MKRRKcquE2HadABBtTi4BBxAsGPFQ2D2dYYsxp3NU3ar19MzMS85iPLi3rG",
  "key39": "H5tzNtZ7McJGicb8nb2bA6iMbevLPMUdUa4cHCumFU9noWwU9q684SH3cvXrcrBko8GDg1TH7zqzSNFvQWHJfQV",
  "key40": "3xH3CTNzi2sJE8SuEQv1RiKZdbQGuPpYhvZNnQmZH5zuf6tAuhBjFBv5L7fGjmGsfPA3LQVm5mPvbD1xQTkALKKc"
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
