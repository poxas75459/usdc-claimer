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
    "5aPyojkvQaHacMqFEgHJsCD2yQFeXDD6CtGmGEuTeBHvKUyW4eW2yEdFYuQq8UhZSY6EZdzgivfBhEGwHRAge2LE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2duQ38LHkf2gpFypnQwb5mowj2cpJsMdp1MdPtf6JyjWAcWTL23cWywiojZ153MBrPYFvSmUTDSpy5QgPXTR3Mg4",
  "key1": "22ZHahPgEuq8c4nzhhYTXuXEKYeACnrqpam9wC6dQcft2LrL49FAaSWbZLPj8peqoYqWUj3fPbitf5VWkcecJCUA",
  "key2": "34CW5ijMf1uZKV8YtXdxxVWGYb43AAA61Kk3WLvwhd5Hm8BjFwfZZcVhPTimvLk6xuLiPnRCLs6YRGNkBTPCm5LK",
  "key3": "HZZMGc5kVaTLyHsUfrqYtZQo11XPs8jph7w4FuJkBKTjj5DDLhXpkVxuUDtpG47EE6RCwvP7by3Qs2Kb3VUBcPg",
  "key4": "R96MQZTrshTv5zW61NJyvxoLbn6J41oCwULqWkr7CtJJWTjsSy64Ni5pBqLjSY9Y3yJb5dArKsUPcGKtTnhGpfB",
  "key5": "2G8GV62hRhwVqzwPerX45ZiRF6tL8D8hWJr2ED2MW1e1sRuZTj1DfmP6iuNMK11mYh1uC6zSmnDtnzL2Z9StktQk",
  "key6": "4ypax9HRkjGbazgnip7K3y56m9XfoPJxkHnszvvmenCStqfwgHzCM1KKkgsCy9AHFHYzB8nE7E3sMNP1NBbvffaw",
  "key7": "ekjLpVczgiL32mzGvHG4wBgTA6JH1gc7mC1yDuUnEmqQK8MbFRe1EWQXREoMUkhCNtLdTwTTnotKVuvPL2c7JGm",
  "key8": "2wBgDHD9zHWe9oGd5JsMrQwLDVjj4KA6b35Y8agY5Tbh9pprntAsSG1A6o4HLbnF9kakoxGADg8VSKjsUZRm8mRu",
  "key9": "4GuHtGYCFeMJMVN94r7TJrWyy7xLtozCN2ZRsDsJbAU8Liwz1ZvQeFxn2fKS7yZ8dzLombLmN3a95gQ7Zx7x7pcC",
  "key10": "XvuNZCuY1JyEMhZ6gDJhCb6bspKMJAg2bAq6ues2zwUX6pgQ8x6sYm4C2QnyXSX5bwGAjSqDynNquszwZsWfnAL",
  "key11": "BndRD3e84zKeoCe3Smb5qK2Kyyyb34VZwjY5j7rvNPbnL5LcWU1uaG1qUwBdhQ6SUYEsq99R5ztULRc7sKjUFi4",
  "key12": "33Ckro8cRBgA31HkPce2ek6USH7AEpxiBUkWkbcpJrdLPKmuKSyDEzs34M3xz3c2R8w13A74Za9y9B9fftMin5Zc",
  "key13": "2SMTj2qbtsgjHeHtR8NwjRENPJ67Sa4ZJsXCJMZafovVvttJDtN2fQcRbtg6N3idaFFxnQUxSPwhXwxvTHATmGpJ",
  "key14": "2Ghqx7WrND1ZaLBMJqkpL2MkfKVUdLpBp77VHYaaguAkKQpNMFtY4DrRUQy8WQ2Ndja2NarQMw4aFsKvk8DkXnAk",
  "key15": "2F8AaGcTjoZTFk9KXg9wypTrAzQCzdXJ4Q72zCA2eqRXYcTWyQis615Nwg6spxmY2AJaXnfPhcWaU2dGcyG8FrNz",
  "key16": "3vtudEWB7m76WXpr12ddWzRzS6YN5RDqCRQQUhaehmLEDUJvtbrTh1Ut7BbGACfqNPMnk4cqHQV6BLJN5dvfrsKg",
  "key17": "5qYrXqaLKHVnR6H6QNkDMGAZqk1RMQXYMb1jPyKrbEMao8usSA7oku3gxeRPDGi8KbDtA6bJemMQEJuM1rpJJSTy",
  "key18": "389vnACfgP87RAXf7ghcPkovgQw5FBTPo8ishQc6CbTbvF9fpss6ndohKqKvxh4EyBJVYFNZG4FBitvXMQVJoVLQ",
  "key19": "4mRjpRsA3MuScy5EU9kBXFPUeuaBajBXW1WCQt7dLsi8HCcgHXzgdk7a15xkiH5UsRqErbnHKbEGRQwjm7JcADeB",
  "key20": "54DPkMaJxg8QDZi4KVSffZDsmWUvr8ThZgaDnSfnwHKa43XSYNoBgxVa9e2ekaxifLLpP8HSmrumNMp2QJwwcx7J",
  "key21": "4C7vw4H6cRYR3g3zTTDiFiQGUrrf4k2cbiibqXjqygR9doaJ4NFfFdZHgg4NkkFicUj6m3SqPVYMQspnmWr5k36x",
  "key22": "LwV4L7wwFtGMHWjwpgjY4J21UaLVC1YnabFQzudyfDhykqJFGFUrpQKFcMcgXdgyZDzj61MQu28YTRTtW3PJRXX",
  "key23": "5VqzKpwZr1hMVqzRZVngc1ZommJCT6kCkR5i6C6da2hy9htHzS91bgzPHkRXHh9WAkYS2ceSZpUAbRBXuykCoZ3L",
  "key24": "4xMTDK5hiWyWmuZSMZz58seZzg1fBYTeJtZ9dYaUQXVZuuVR8SZP3uUBdYUbeTWMFti7QWEMyeYw9JfcqXxWndyR",
  "key25": "Q2s5mx2NUWtUUyBBtdN2HMdvoLAUey1dTHK56c4zEUfzdEXVSazgDx4MAbY6yY3owVb9fVDP5yuvshv8otvPg12",
  "key26": "2Xo1KRhWgFn1s8ZcMoZ6zsgjEkDsC4iDSr6EJGxxW13zyNg9LRdUKKWuU9TYDZ261UjvyMFULsABgaP3XUCy5hMp",
  "key27": "eQciZjVyVbA2GqGi7b2yckjvKUa1KderiEfDujBWvRkV6Fp7qL3hNcPYqndw11qNeAv5PwNSJNm6o4mAfZjT7is",
  "key28": "4mDECrWpyVq8Jym3hHPZCqDvZLh26Beg7PUVgfkfjBMuL9pLEaMPrWaWssNf1m7r9fVqAcLpikv68xrrMxVZdcdU",
  "key29": "YH9xWK6Z2hMm3XyFFKJXHxmTZcy6S99Edfj8Lt4VsAGjMW17ztsVRygkUGSE3a3igqfkDFpTxoFbKB5AuuevrmM",
  "key30": "3zB3vp8wyrjEFYtZu1wf7gPL7wpHas8gDDKjE6tp2ZdEeA8BVPDDKbF7tjYZRcx1nw4xT6d2cWWgdjUpMvQgQhMJ",
  "key31": "y2LLGG2PXMwQ54A62mdDf5JXzQE8ps7vViir7x9hWKFdY2dB2HivX1NJqQuBsZWAwzxpXouRUBAKi7CnkiNoRR6",
  "key32": "2nsW52x3ExEKKjgc3TCSV7Xuz5wNUXRiQwfWrwy4ZZvjzG3gKmS4D66UhBixWZPbcqiW1n8ybUYZzobRkPTT5k4K",
  "key33": "iLb5PxtLBMRd98q8hQUX5NdzFapAApA29YTDoUrEsatRhMpAFGeJazmPz3wAFYhZ5dUA3c6eTd1PChyY2JxGSSu",
  "key34": "5eg1wDriDbDQsrVFpBGc49doEkseGR6ZaRNYtKtFbqHj9hbf6pAypwxaiKEtapxmD8iETsTuN4pPK4GR7nNYAyBy",
  "key35": "22iQFUxtsciRqYs66XNJHfpxzGAnuv29KrnDEzuaXNitYPAyHr7ktQgfd75vJCxxEUNz1oLgtKVREmFqsuphqjx5",
  "key36": "3iudNLBggNFRpdSNN6Q3TKH4zeYik2PE3tZu32SLXe5mNaHhCkm3g4GwnfVBwXH2eQ5QEpXJpJrK33QS3cWw4tfT",
  "key37": "5DjZ34H8uhuSuF3ipGv5Cz38yPgkcinZw4yLjDhfXkaRFuhMRmB3hZXDZCDtFwCeaHmxwd5v16WifW1dzZHc69ro"
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
