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
    "34wvDUz3PXZBnbszDrwAEYEDNebdyPWVCcovjWSqkPi11NBmcSfmZtAwnFyjBTtBaXUEVXmcSLJsrKTCPEMEaBSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ciJapEdLuzM4LkrixuLUCEPgrK6KS4cbqpvRWSzK5KZ3B9qxXHzWGpXtb8uqBvR8L1PRieRpXPUKT1YKkCQCMC7",
  "key1": "5oJnqpuEXMKJqfqDirjNT95UpTu7Wp8aQdfrxLJbGwzRLymYYv1S9wAZn9PxZcurohpLP7LYDEzuHJcdkgdb75b5",
  "key2": "3mShiptZehoyJcedawfcAbhhZtVuughYr4Ua7mMqNx5tPoYL4AW16prNHVeAM5suxzmrS4tQsMksbCFRPHCxtjMJ",
  "key3": "4nupwrMu7sBtSGtYA3yW5iWeetwceLwUPHUzNXAtXBToPqdWYMqgE8g8yM6TenmVNn9afBUEzrUzmdBrzfpGJfvm",
  "key4": "4XugnCe2t2QE4SrGbukRFE3QLVFUyUoc5ybAVZ6F2ZkmtCCofybfipGGmzrnegJzYQc6YFdBz9hZw9LFAdUXWjMQ",
  "key5": "4FazjPrU9VrTHGhdfZX8GJXzooPnw3B5tXZGkfDNGRwgu2sU28EbWLntj5dqGHwTD6Sc6PK3M26E3bzdYVqo8mGu",
  "key6": "5TkrEmtSBsCp88Jzh41b6ojWWapBUFbA9M3qyB28oHDq8DjQ46SnXH7YDhumWE4cZfGteLw3q99sdBpDN1j3zu9o",
  "key7": "2qFmVwnAKZ3rPqUw2MSA7LFeau373AVEutEJgcoHhHAtaKjGhcWzfTsARJ4ntyzZVetKpbX7oWXHxjSVJe69FGw1",
  "key8": "2WMcGJnc9mA2NSfCbi1brC6X8mmRL3vnXS9hRPJ7A2m3eB3yxAAVj2hL7wFiMeiat6RFvfaZ4NfR9CpmpeBFyqVG",
  "key9": "yTDm37NkJQ5DtXQ6j3NZGfAsioLngW2byFj5EgKMN8Ncz7HX6om6pBK5XL6Hjn5JjSXYJ51T2PRKuF1wgfj1Z5M",
  "key10": "4jWc2SBEgsn3k9k56mH8UH9f5tFPuDNmPMYUf6TkU1KDp62KGspaUdT3NkVBW5wyf7XGVthTNiPF7SaW4rcaNibY",
  "key11": "4PDv9dUhdoVRdjxWb68oyRwoBTVvssemhP9mTmoLu2axW3itAR5t4fkxgCexFEg6QT2tZrgW6yZGYmWKs7CrCfyK",
  "key12": "4GSbqWZU19kbrBvsTS6rFAD3htMmVto6iw9An7WSrVtkKbg7E4tRm3W7D6an2PGcceaGqFLhZb83SufsErXdTVd5",
  "key13": "5CvhphCmjsWcmxhU7iYSqGhcWddGi719TBDsfwB8ox2EKrrYmccaqc5675sBbPS9j3VpEqNn5bnRdTaikFb7iBFh",
  "key14": "5oepJYD2FL7TVrW3spR1VMyjHxK7nQVg2aYe3twUPRsAypho96cKfzg1d1xhfe1a7EtKXQn1EYMBz4Lxq27F6SzC",
  "key15": "gGpmKFLwQt7VaxrqbuEcYpFGgXDLDtJDAa3PUvBY8QWZcmXQyUBt8Ei34Hpr2WCJHSX8DJYRWAj2xhEQpgWbaFu",
  "key16": "3EB4oYc6LWkG1kPL91Wu1853nmxvnkxkD6rYBnn1DasQSRhi2L1CYUc5XtiPtkA31XJ81J7JLmvBRDzxjyuPCyir",
  "key17": "3evzDMYT5C3mr8EwCV8PHk6cBiKqvAKMe2WFYjVehiPhpQQxjMnJ1VbxxRhN295q34vfFAMrwf5waeuuYFCdxk7V",
  "key18": "58rGi9TfUwZgYRTtg9sCGibXasqkXLgo7FJumm279jN2uE7uia4XreJ8zTrULCYemisqzpk8WSDFmBCgaFFboBB4",
  "key19": "4dJ6bstTiFuRSUDCwW33BriJupZAX8E12Si7TEQguDUFQdzSRaAYM9B5m53wUsCTBneMRS8tXqHr4cxDYT6urY6k",
  "key20": "5rGnkoFoG3gg8hRMXhvLQJ6sNEfC9eNrB5pVnPvi37cvstzcS4xqSyvpwBwquCJFLRff3bZ65L62T4oAcX7BqCoW",
  "key21": "2xXAbNfLFuVnWeR7snYfLmqatkNEWtYBbUpKwZtG5SbeCVdmH3RodzDJxMA6gimkUrS5VxvhxaGwKEibxZYg4G7q",
  "key22": "2npm3tYJLbj9oGe7M7NvTcuWbT2V6twxPD9mkHy4Ktu5hp2pi7tq6McMBuyhAE2JgRHZ5ETb5GPT6i9Fu1fUZ1Km",
  "key23": "3npzkW1n6fVRsjRfZp1RdChsLzvYwJQhrdWddyEQmWJiiF8pacUp7HxZGZmC3KSPMqt2yYuLhJ7WMuN2Ak2kWo75",
  "key24": "33bz7VwFqdwtp1D8nQFKp4MAhpDAyY6SnbTsiKz29rwzvapd9CVoL4FsZTmsbjHvEJ6t2jxQ9vH9m7KAuaLhWztr",
  "key25": "5sLq2EaEfbYJAn4oFono5Lr9NuqNxstoewAR2PDxwvzTJcs4CnGT1z1J92PiYBvjcU1btTTb1xs4MTU2ba14mLzr",
  "key26": "2xk6rrCZ7c6MZ2Dvaw8p9YvfQdcnKLKVcjNYHfd9JXRRTvYGoob7ZTo8X8iYD1kEY9BGj6om9zTMPn6SEGrSk7oe",
  "key27": "VnGfVfenqSsoW6gLaMNqwGooDA1SUdz7hQjSWZ2Bm55pMxg1vtE2akqirdyMCVBnQZNgQi4e8e8KjvxNvwD7QJb",
  "key28": "5aNmKxmvWcL6GhGPFHMTqRY6sQuacwNt8PzVpLdh9DuKSg2oEtKKi4KTBv77oXbmc5BFtTiqm7rLoqGxns8tLrKT",
  "key29": "GunmPN1Ku7KoNFGEnjHFoUpqJvSZXwCZreS4dHSJ9MMxnv42jzz4tEbcSKSzWqxBzb34EKRMAMFL3dyvWay7D5h",
  "key30": "2T8MjFsbztwzifxLuXaeLSoxfVtDim6J2Ug8BBARRfiTid2x57rYLMvKBFKZmsJys9NDjfqMx4jZ5hKPYBQ7bKYH",
  "key31": "5tXCUru8ZTY4TpoaNo1kHrhtumMNkfwPsJJaLJh2G7Gr1cfGmPECpyNdPLhsR2JEFLGeqbwmBRad3WeBS8hkFAQz",
  "key32": "36JUuZ9V8rFnzad1erHyW6K2igTCv2mVUYpvGLSMRtnF7J6fWfyqus7xx5irXjf6PR1u2Ay4Rs4xsDGGMucUTFwa",
  "key33": "3An4gw7fuUz6Qypb9CGJDaVtX639V1ZHdB4WKYEWJzNcaysDMKqehBt5GkXyu6xPzm7uzNeNQrgkrARs9Y9QJaut",
  "key34": "4UgX4uzjbAtdkw3iiaEsAebZ6Nop2PhXHsMutikH4gVMxPTL5QAecyETG7zFuQ6UEWwNGuQpKfn12ueiismAYoBw",
  "key35": "5zrzb4rCC68RUVu1Sx2CMjNavaJNENt1ttxDyJuxhNRpz8jUE6twarJMvz9DVqa8DYCicCSuvnsLzbXYKtyYt2Ao",
  "key36": "31inhnKCidfwgZdQpgUMQCiKBfqBrwKzUPCxpuRb9jcB4aGiQxbeBUBTBxfAM5DdNEsgBMYc6QVST2E9cUDYLVYY",
  "key37": "542QD1bjpKTLQP2cP89hp1TQurrubMPHMYUmm8wvGj2pSNU2Xzx975Ex2vmzTDKzHnaQUWw8zfifgj7nD8ztQG2b",
  "key38": "4GsoDNtgB32uCPwEfRUhW43rnKnBJshqtELu523WuoBpf5PZB5c3fysVRsyMUNcxQ2vkFEWpTRBUJXqcbk242FxG",
  "key39": "4HR5g24AFpoPMwC5RXgMt5xbUvJSUuBCSowXhkUyNVp5T5PAgGaaneE9oBouRLCzmg1yexdtHmfeDEUN1bByKhJ5",
  "key40": "27LzmqTUnmj73bLMbZJotiZ5k6ZQkfnVEcRtreptaeFCRk2pQs5Tx6xD4apeKB2pxXgLg5xPYJJF6nWrGBAg772z",
  "key41": "5LtkTrCbhksVfGPR6TRtGuSgDDLzk9Sa5JMhpbBV4jCNzhvp1NWVmr9PeUjpS6xyAYJANewPxV6mdpNosgAnBPv1",
  "key42": "oZKy1qxcQ9QPgWirWqPWENrxK2f6wzje3TpvpmDuyzeLR5TGEbKQqXpCYWumYHnqvevFwbik1ZxtpL7fbpMzmBN",
  "key43": "aWPygXnLcy2ULUYbKgR4tNMveVzusbu3Y563346UidAqXvKCrBbngA2LgYuFQiKUpzuNRA3hkCiQk4XJVJYAdzK",
  "key44": "2xX9RzFxEtUX4MgaCEM45toGWAeLqLGg6Q2EQhxe91kaETXPzawbhhHg66NaFjXkHRPxeinWuKkK2SbmrP91XPuR",
  "key45": "hhoi3Yhe9gjupYQ5vhZv3knhwyuZnaCTy8hAiKMC23jToSJra7JEq1Ds1G9LZmUYWYKFxyXGnr27sG9aUHLH49S",
  "key46": "2tPVyw8apdwiN7jWHjLD4xn21PAhALfjmJF22EWeWUdJN9Ua6ddwRcrUM3fANNSnFVJZe9NLLGZjZ4gorAQdjaNx",
  "key47": "5xHuvbxrNJQQRg8Lb9ycyFXvHF5bpLzt7tVhLJadSrAxXuundbUp7ppkousdMa7EXiGjJvrxq93uTMmqzoDqnwW"
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
