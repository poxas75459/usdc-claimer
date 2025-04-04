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
    "w91As6jY1nf1LpRM4VyytzasJqdapEd2z8VERQ7Mo2gJUFWWy7wqNTxk7abBFEExgYbgjufghvhrnzM6ZX55SKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yCrcdR7qHTfTvnW1EjsQRon9XeeELLLW6v2eYiG6UsfjdtpLCUN528DSTLzWpRqsPdYL9VQWt3HPHfVSNVjdZqk",
  "key1": "5h4HjfTBJNwj8QJBdu6TS8it6WN6sf1exeNMsEDQ4kWvqKGPmQShJ9pTR5ebcuC5Y1SGmHezBaGgrUpbbyop9tbB",
  "key2": "3BYjN72kuSne9yu5QYnKUrB5tf7zrQ76fkx3E6EHhS8xbr66kz1Q4gnCSqHkGMynBaAiyUa3q4muMvLgeFMi7ARg",
  "key3": "ZGR6FJvGW8M4vDcLZjMhE8xcBGhp9R9X4bTbc1K2iUfKMM4LoWSQwuHGeFgntc3mWbUSDpZX5YxR9dwVph14yaB",
  "key4": "hvFjmGeFiz8fX3d2vW4ece6pyWMhSEEdpuCVn13JNFSo7GCVV9ESaPtEsbm81StmeiwfWgVD7zq58k8hmCNF7zf",
  "key5": "4fxN2dDP785TbFHAE7KF2ySnHc5vB3vjF7U4PQcKFRWTsidSQXCiEb4UT1YvEG8e8b1g4vojtUpGGv4FDXemk5x1",
  "key6": "poHSkNsGdmtBcHSh2pQNCGZ9giU8dcqnzfwocK2DL2qGJQfi4N2takN5HvWKL4sdUwCH5zGgexH6pu58wVnXNEq",
  "key7": "2bdmsgGxPhXN3RaFnUH7JCr6JC5rPXKUTjMuikHtoqjWHLDnDV6xPFPxyc95B4tKZo4oQvqv92uMRGd8W2824fGv",
  "key8": "h1agVj7G6vxCHZ9TspWybFEiGpXjPqp9tKzh9JNsDh61nJ2MccQnb7BUtB86b6Ae8qGTnvx9L4wa5SnJWspDyGp",
  "key9": "5aZtVF6gNDoyQFG6FxnwLQKxJfphc2mdrT755vnrVu5d5SjemgSDB3HqJicDMrtof7GedznXnhhRhnWEpKGN2jpR",
  "key10": "5VVYregNsimWGHqws9WbpNQgmqAEALGfsbynRcZvZ8nbszjc6cwvtQFEVe22CLE6eL6ESQaU6mHQzqExoQTifFUt",
  "key11": "4PsCwFved7q5B58G4xMBZWeqV41WFjd6z5DT9zfV39snryrVJFZ7CvqFkM5sPvW7VATw8E8eoi2UJZwpfunWDgRS",
  "key12": "3T3qUgXLbLyipkZFQ2kN5evfB3HpuZDVwydx9vEYApvVFnMfc6E3ujCu7XYjZ33gZkcXFoZJTi6aiD7Pun1kAekC",
  "key13": "4QMpCK7yWjn2yiy61cPQYLa22pEqVQvhBJoDvVCD6BTYDMy5iizms6N2YWDeK1k7TqQqpDtJfTHXzi1g7qXGYXTU",
  "key14": "4pyMwp8eHACJRboWVA2d5pZdEwkJNgoyHSP3C2MupjJiFndGwhu2FLqDhHTAi2zUT7CjmWtRnf6HQe3UxrKuJvr5",
  "key15": "2un3WS3dkc4TXPPGk1oHqva98D8xMXKgGsjksm6qsmusRKhFtYVzcigbVAN8bnR5ssGZYfweFhW9cxFJFwRisN3x",
  "key16": "49UJFrSftn5CbFJ3CFrwfR3GM7oR3ypWk16y7neKVnVPWwuqpLfZtswTv9dLQHJ7PJ4MpLDErNUtjPqCh4DPDnwM",
  "key17": "FcTT8LajWkYkowjo8E3FAVgSjNYdBwioqDJNd7xTR8CLRTHgxw2Rr5QEwtk4p7ve6Sgx8oE8krALqnEGwyDiz4N",
  "key18": "4CKu2m5sVthT4Lxe7kf9ZjCqdVkjqigEqHbioL7Pzf3BBe7YZxh2LAVsN3SFzfM5pLLX2gPq1JvhVhztY784NLAd",
  "key19": "3Sp7JeGs9yihJGb8iVfmaQ7fc5XkSf4FWZjy15smw4t5gQridxmJ8YFBKT6D5CB7eD5bScyN5CWEMJpugmPycdNu",
  "key20": "J63fF6UjEiJqavSgwcLCA41yzNk8xUjvkv1yNzNPo66XrW3ocHHibQRfXr4fv7GyaGLFAXtGSGDyn59VhWDBW52",
  "key21": "4PmJhDEKY6NduVNxR1SgHsuhwvQMr3H1Ep2hjo6tUzdYFpcDLLtBBg5YpK5XYhhAW2SwBqeMVPwJLPNJvdaFiYiY",
  "key22": "2d7e1RGAUih3xseYFjCQuQpmeJZdhWz3FEBXWEzChstsqeoUHZbZ1x1umXWKg6xLh9bJcFPL6XrrJxomgeSx5j8B",
  "key23": "2UXmSPxVU4NQYdWeZdKxJNdYL5wip9vsnsdfxkTkzKUr2kWzAKF34inpGxCVeHeozSu8DM5FixabfNdDrsvA6Bme",
  "key24": "jyTsirFD7V3hUSHaXu3DdDgJZPjzpcDEvwtFyoqpeAGpho9HT5AYY6LnwK3AKy2GwNuVdecAGpsniM7ZvGbssrf",
  "key25": "3D8B3evEmSzURyeBKNYd7GF5GGVk3KirJBpppsj4WnSuXtRArgkj25XExeBF9NaZnfT9q3DQNmaCYJH1rFYyGyMS",
  "key26": "56Sp5vfJREBDaXVvwdVdxp5v9TLLSjWgAtwUheeFmgSbCLQEeSN5biVMuiTvMJEAocEnnxkYddJeU1E3Z7daz2U9",
  "key27": "5Kr4jxKQ5weoMksrqGgvHiAEPXqkuPSpoxsyCa6jvAzQMcKv7qt3KiUSHaxshkjhgi3tDkrGPyPEhUbTejLCevze",
  "key28": "qCh8KeZKpSocvyvVEg534w1QhMQGi9rEZg2SLzaJDcESNRjTPDMsfFkuBdeK8gjV7TN43DWZqn3axnjipXHescm",
  "key29": "3xTHTpvJtY3bxDD3sCNdaZgSYEce3HTVnCSKW3apS3mUvg1XYn53D5BH9g8W1XkHNfnM8pryxmTtsF3K3xMgVuv2",
  "key30": "5Jcod1wQnA8PurE2XSxMCJrz6fT8dUcm9DSH5ExcUepgDvniLjximQ7KLaGfDxEjDuiDTZApRMRxqQYNF5SgzCwt",
  "key31": "2ZK9GRLBMQULY8A2D8MJNGjKYaUFS6TCcsyDZNjXVGi9RG9e5nF4eGxT5hKjWb79QbkN1jqMNV57grVBJETHmJRJ",
  "key32": "54gURXViGL4sGbX4qyKTqdc7ZKe5aWGUQsAEXJKupMajThuWs2VV8gCesquhVfrGJUWBMkGkCJS6nLAyTbHCqwPW",
  "key33": "4P7ApHdhWxYFR2xj4fHQdXJRDxoHXuTWmpigXTUKHB1hsQ5c8gG1SsHdvZ9mbsZtGajmeQSbF1aTCgqDWcbERfEE",
  "key34": "71vkKgFxSR1heFkche8PveG5rtQqLw5kXqqTPQWM9LputBpB2KVybzmLDaESaMGPqgnKcahgyykL6DP4nJchjb9",
  "key35": "SNGp71kjHtJxC8uyCrHYiNFpAQjdcDpjAFx2hzezXfJidAkXNpEYAN3F2HD4wNiUuZXH8LqWmoCPuYSjSrzYhXd",
  "key36": "ofwpMzzPnB9rzifD19k8sh82MeKyqMJkuYyPEtqkgRZbYZoajdsFkaHbrqoj7r7rRxTN9KEdYSsDApYCxE1KaUz",
  "key37": "22QwVo6dkcP8ura8NgA5ZmUf5UdLFGJy3Q9wsxEnTZLpXghNsiPyTrJgpSvtVXKdEBqfVudGHBPs55dQYfSM4xQt",
  "key38": "3xeMmLgFo7kn2HcRNP72D8vXFo5pux5QdCph7daWbE9jicXbE6NkqZm8fogzJHMZ7xXPj8RkPkRKiqsmg2bpdW8t",
  "key39": "2xiHgQipzxtrK484oVaqSGUp29gpzEKXa4q7nnH7NyBgrUbcvpwhTgM67eTvjcVBz3qJnzbGZ2PLLCsWxa3VSkyk",
  "key40": "2bvwjHVjjGrzxpm6U3W4uvM9LhSzypfKEiNKC85UvTjgX9qHNxVEDuqkoKygJ5ttWPXvotYb72ZMuRKXLqaB9m6i",
  "key41": "4qJCVzPdUQoyFtEXzrNxvH15WUqeoZhW15PdsKUxSRHfK4Z4TepBNn8UqHXdwyktQ1QuiY3xacT1JxE8zPruUSoh",
  "key42": "37RkPPXrxWWCWTKxMUx4DAVUNLbSVGK7v5MxHrK2ZtA5HLq5mjLnWPgKm5YoKzPt2JZoyUo8cMDVJ95kRtZWEnLZ",
  "key43": "4vy4jwHn5mpu3amL2wuWapw1xoFiZVL3FbAxWLo7iw6hiTqYGskMjoCeQshnoEtFmjCUrQtKcAQHUCQcUv3rn9V8"
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
