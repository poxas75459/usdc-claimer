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
    "5SH1ahm5iEbNoNDd537UnHDioHuAEG63tU62hDQ4iAJsroDRY2Drv37GcqhAj4oYMghZdftaEynqb2QvRdLKwwX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XiNTykHkL47uxSUq5qDFCBBq8zE2oPMTQFpBygfP87hmokmwZKMFABNnLrnN9PdGEU5CAGB6fhDBW4yADLqNpSA",
  "key1": "4TV5Nf8VJqTDoa2qwzCB4MPQymRjNTNzSkjWNV5mmSVfmZVSdK8PP5y4pHXE6yPsUaN1tTVJAUCAVnBddqvPSTBB",
  "key2": "7fStwjPmH8qgYQWYc4LaB9DEkvomUDLW7uZcudvpU13e5VRMW3RFg56fcbir2aD4YYuMmykEB8wMz3pVLr6gMbq",
  "key3": "3fDohhiu7R1fpM6ggtuQGACjE6U6Z1hV1kKu64QNnPSppEN5iVKqRFQWwtssiRmw7zXxt47ivhKxCsBGB9uAiBNy",
  "key4": "7YFWM7sUGKhMdWGsn6ei6euh9LQJMLeVaPKXhTAYya2ifRHTpUzLaoa3HSCG7sDFEBhTbFc8uWT3sT3RsNTzhwL",
  "key5": "2sQNwy55DtsxwLXat2abqWjkVu1DTNNXFyPapwXYQPf74ReLN72CihCzvAk3U8XZBpKk41svR96VVDCgUoQj1KXU",
  "key6": "2WkC7wuzTwaeSkcMNSMEyVoheDvQ86CRLbRjaLjj8UxYTR1L6b8FbD1J7D6r5maJVH9gpLCQ6zZCYq2TcLjYEPUq",
  "key7": "3ZMLZKrcaW7sFATjJrRWDKsyr1nyMVyQENreGug6EDqYJm4DQWUTWy5KwZiaWTXNFgE75ADShyFviJULH4BuGNi1",
  "key8": "4x2ZssDNpaGaaRiePxJ2a97rrK6vi1mZ2bos76gsq9BmG3Fi8tZkhHJpt9K9QM8dqFFw4qE3975WZuAXG1pLjkT8",
  "key9": "ZmfacdquePEVVVZxmyGzox9rWUFLABLX16TLfaZssK7N4nnRbBGgXKaoDppueybvRjotuzaPupf74hkLMbRscxZ",
  "key10": "3S5n5odwPRozGRzMvKzp2ShnxS3ZYFQjPmJ1SnCVSvxPeUbC6etEmohPi7mLGEaCgm4A8DLyM5aVZpzBZG19QF2e",
  "key11": "42ZM6Pa286uRBUnKu48EAEGZbc4GJwdDHEx79CLzS28gatqRvVtS6wZjK8nSSAcsJpTdPxNjkDKebpsuSZnKBe4R",
  "key12": "4hmCnBzXB2B8FyRDVJAsdVPYYQaJBvwWsRqZXH654VaPbPbNEoYjfMQaC8CvNuJ6FF3kfazavrh4QJZ8kcCPQHic",
  "key13": "sHXLVQAffrwxy1JK9EfLvf5o8tJv5LCCWorHXUyX1cNwMQ51VTNBAvzCmahkh3x6KhWorRqN5GHPhDP9WSjsaek",
  "key14": "2kgyuH6iNhAC45z9pgNfDvPhgVwjmNt9BgNRjkXqK6odsE5F9SzLU9krjxfAi1bPb6wSZhnu7w4ZnFWQEG36JRMG",
  "key15": "3Wh9CCXn3ybsoF2ozFnxmMJo9ybuKvFwT8hjFdRdbbxKZGEr6YK9yfoF2dF3imyFVKFCkeUNxZ5KdqBgQsdqmAVL",
  "key16": "ZX3RczMfHGL3BkTAtjzVAZugvzMuDaGErys9zKpAowkSDFYg5BeQQShYo2WW2zKWKWnDTGk1mhB18zZwXjc9fuV",
  "key17": "xiSMhADcPh2ufVxFNKxXQ7zjuuyL7KhCMThjvmPu6wWKNWnqcrWA1cLCb7H42buYnwKc2KteyLKz5Pbox4iKiDW",
  "key18": "43hJeUs8EtUkWbh3zkB3P5Ve2G9XMsnxvYFqrmyYBdPv9GWTyXG7JtfsvMaj3QGQGnprq5naDevxntFDogvipiRJ",
  "key19": "3WcgNeHdekXERd8tZfMpaAMLzgzsiQ9xWT4ke21jSemYxYXWuyjW4Er6J32fEi9SSMQErrDDQtvJ9R9qTDRQnYqg",
  "key20": "2vaozDGE7qpma51EvZNX18wpSHUAZvRpJqi5yMnWv3J8fPFGnVimXVtDk2ptExF9BwGQXTKdqGdhpR3teBouZcX8",
  "key21": "uG3RH3WMkgmAXekjp5tVwugQ4MfXvNDYGDc2TdDC2LTtoR9sn2NJFYrpwN9RhyqwmfwEiMHVV11dd5WEdBrkkxe",
  "key22": "3qqp8XjNNDWUc72SXupHEkKuWXP2isuEPXw1u4iKoZH66Ec2ENMxSYPFc2WRwMLnjsHsUw3CQi8mDicM9yEVMmAV",
  "key23": "2vr6YRHNuXZUYYH7EU1e9j6UxjaH63rgFJRxEGqtnZGSs8sUdcXHPS3L2mCkBxmDpkVEawKceVe9dPUuuSBCStxt",
  "key24": "3rYJVJRgCGjKzsQX8zbrYVyNfqffJZKe8cKbbYMrVW69zmmfXDmq6UYgywHMG8kk9c6mMt5JCSHK9XDS4Ycgu571",
  "key25": "5Uj46LZnM3BSFLztNwTcnMGNxUEkBVKJYMYiYTKnp165xrLRRCznJmWZzTaRACBz624VgLxWHfJfHasTneTMxUSy",
  "key26": "2TvSSNmuewsLoGKUr2nb2okdxdQEV8etcwi6md7utRwEgycirC2i6DQWA26D3UgPnVkmF7Bs4c5R54XUkhzzT342",
  "key27": "WtThmFvdBoHvf7cRbf76SBt52WjCHRfo2xTeTCbfRXftAQ1g6JpyErdyLw5nuWhmxKrQ8Nrz6kgPBnu1YrFpJvP",
  "key28": "4JexZb5G3i4BiiazmSL1HtZk7uoZUe1nnLfRYSdroYzcxms1xDhwUUddQG7jE5qzEgdhGP68yGLnwXxgJfzMwoBx",
  "key29": "48rZnsWzNCWiBjoKgaB2dRrGtShN5iR54xYcYVZuK8c3Pd4Sh7otCoUE4xgD1sSVFHZ8HbhztzgFgiBcUrv8qJVr",
  "key30": "27tpR5JAzQSB9tPZMog51SSJNTpghG1SP8iH7iYCWUJKTdKWBYBhSQKpAGCdFnM3N57Fp8oTzTpneUrYSw98Afoc",
  "key31": "37axqzzoypf3wwJZXGtXGuUf5swikWskzCgseMQTg3ab46LgsVFmkqfXfL4TyxoKmQ25ahueM5ukgZfMUoFetET9",
  "key32": "5KTwCKBsx3ey1FigwtiYDL7LQV5h6RwScgLW9nHGAUCfVfK982kxMHfGtqUUtfueXjuSjZK1ZH7UQFN6ncZNBtw1",
  "key33": "NbVDMFuZ7JNu3c3FK4PJK8YKVjwd7JFnU7htkm9F7pA5cCnzRS3AQgVcxwoELRFVG5KPL2hVoVPaoupHTxJoa8R",
  "key34": "2gUYtU5d3DT2wsbbqxwUNEXmxks3VUWAACouLniAtQH3ziLdavm8whCtNAScnkPY3fUFAbraSMeZ2yD2QRb6SgKu",
  "key35": "3uvahaWAqA67ac9bRTGkU5BP8mJjMLLztVxL5FTReXeGUAEUTs1YgB5Wg1hoqckoLf7SsA8VcqH1w8ugHVdd4N9c",
  "key36": "3rX5sriR4zLUvSvdHBhaZbSzgAUkwxQiM2QYHtcbotuc45xUHBNSBC1rXJAsfxnh1nbvWUvTU2yPsgk12kXjAtXs",
  "key37": "2wjhr67v5cuDcR1f4uE24pjufiYP3ccVnD9Dyy8uWgPumETHbDLTaFrdH34NX4kAvyxdzM9rXbtZgawYur8Nsn2E",
  "key38": "5QarJf7iwYdynTizpVh5vLRkHn7yFtKTnaP4V1enU6qW8oJcSqkxDEyKgTGuGw2QdHv2dwRuELtd1quLyiBoAgo7",
  "key39": "ddqbYVxbyiWofp67nhASce82mmmT5djG1vajr5RTQC2b5CQeZQnL34mbNqEi6jjRDW6chcc2J3P5JDzd29ELakk",
  "key40": "WJnutvKsowj4nRYGR1PULKrSqZoU5e1qWcf4SnNQqTe4Eg48wavACujzfjprLyerMBYYSdkhL2h3SS89xjb4VsT",
  "key41": "67RFyvAdFUmdgz1NAQFY3gpYmhhTqLHsS1E7ZadmCfDNaftDtniy3o3saMtfHzxMSQ3zhWnacXZMRTpzxSTKDR7K",
  "key42": "soG4Vg8zLDfvzsxAqi1QVGRiKWmfKVQDHre2SYk6dWDs4eS7Trs63PxmN3oGpjwMiwsNu1wD3GZqWsmxRCghHgj",
  "key43": "j51apPemom8mbLcxt2NonZpHVt4KWUB6bz7jPGbs4iUVuAVijYDbDQTZfscmAmT7WA4xfBjsYgnwFwpH3hHqbG5",
  "key44": "3Y6bH1ZBJhpPFXymTkaHzR8ypggyGMoD1TVuDDAX684Dn739EXFiGExEFFd4t7AvLRHGYZkToNMUu1RwYjPYgd6y",
  "key45": "64RQBXUgEWskRn6ERRD6jsAJTQoGHyrSxJu1GeGgkZeo9zXaUYNrUH5VtCTvmyeKejGTbM1sYZFjYAzYAteVVfGQ",
  "key46": "2EGHr3UXoxWdaydJRo3pA63oZCzLf588CCJeUnfy4JPkxBwqhtyU3HuuhwhNGFzmfqCwxqmGyuSqFwzgBQb8dFvX"
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
