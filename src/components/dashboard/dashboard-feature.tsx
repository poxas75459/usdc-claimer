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
    "2ojbcx1pStqxjPKpbWgTDcAkQNHrPEUr6LUixLTgRKjZUWkYZAjgBLysWyP8qfAXDzu5mLjqFTM3d5vc3jsYj1N5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MnRm3BadBNNKffEzv8fbwcVPEem5SSGREewNm19D6GnoJiSkUyWzDb5FbMdxr7Q2NV3PjsxdoXQQrrPMq36DU1P",
  "key1": "43SqnMEWFP3eteVkieUAA7E1e4GXiQeh6E61odLYpqmnv9duuJK7ShntbTjbFUSJDrPz1JX8tg3HzPcQUuwCm7aK",
  "key2": "21vsy6e5GuCo7xPGQaH3Lq5U9DxLuwAgXK5KpqDGi29KvQcPfJ5ykCLwZEgWVSgMrv77seQjq4P2GjfRVTug5jNE",
  "key3": "jXXkgrSmnufPRSAi876eFut6SxQf8xWP2DxSHwcmtYAhTBk4LX3BKNNJ2GAJ4S45YjL53AYREkbDBpeAPsCrWJs",
  "key4": "7S1nMXe21BHo1sW7CbaNKdHus78o95S1L3EVM8m2UhtkXgX9sRm2Kx2tzgeToVD8QwwQjTq8vDxNcg1YGf3yTvL",
  "key5": "uw1W4Z4mRUkswSRZpLmTNqR66muPG7BstPwL4eixsd9h9QSf4s3Q3htwbrt2HZdacadr2xEuAzEAqCt82ZRcDdv",
  "key6": "4J7WwhuiMP7SRnypGXGmcev3GVAx8y5rFoBQhBB12ojmivY3fGDz26GioXmd8LVjW9V5EcUzHMJ3B5F9ZGNSJvza",
  "key7": "2F9qhDqFRmWCwHCTzfRSX6xn3N1o8gg5o2eV5FpfyPV6m55ej3fy781mNCCQkjsn7ZoDtda5uxxwqwrbwogExAof",
  "key8": "n9AYVARRYYXvXxGLyimnjFQHdyenstZP11WNEEbB2xfwGEj8STmPr7P7eUpezwBRNoh96Hzf6TmZ5S2hZk3Yi2V",
  "key9": "5JCzJeAe9BmMycXiZSbHoak7gNpTmSHNVrVd2T4oRMzkMgYuoSsXc9L8KmnvVs21yUGCmSbpPudZQKA35Ea3Ngfh",
  "key10": "3AnNSBrXiQJX1ApqPMb34rCqMY5JB9yTkJz3uxvPQk5WeDSCuam8jGGXw3qJi3HXSA7iRmP4LfQADVyinUe6jZXt",
  "key11": "2KUQSidjyzuQ6Mc2gmstAqXEQimRwrfwAUs938W9mMdE1iQUupmFd44a8fvZJfca11WtP7bBqgG1PUm4qrmEQz4a",
  "key12": "588kvJqGZvM4uXdFJAFh8syZ9wKTWSr4Jb1ER6AB7Lq5Ge8h3QTRtqdv1cGPGR2BMurAWgYTvWWaxQ8otjdpmUMx",
  "key13": "ioD7sc4GLwcqtWjsRFkNS1MzboeiZJZD6tWAiiXAqXaSS8fDBFPniKAhY236PQcZQp7hXxuYEAbFAeyjS7KK3kg",
  "key14": "4XdYZ84SmvpCqe1eEsAGTv6KN6uSqHBDEbR1pFgkjEXVzDu9fTD9HdTet8u4M742REPEDFGWkvQmicSLhCQU69VV",
  "key15": "9CZN4PzwP9YFUq8Y8asGAX8porVCbxueYyFRY6QPhpeL9TVVGTudXbUL56qHEX7T624zXVCPixQpQN67E7JBBK9",
  "key16": "3YMMUkRJpkike8DSL8HpPWQMKBWTJ5EwssaA4e3tXRkK9JrjbHgwmusn4foiozbcAf7cezBt3no499z9V5HUkErS",
  "key17": "3Rk8L49exubuj4mbPDUjHUdNf3LP8ojJAK7KEL3T9tpM22sDaHWK4DNiFKnQryi97vcriATdKMBymazGV1nMSgCv",
  "key18": "2bTyypbUzDYHnay8Bt8Xjf9rST93gWE6oAFAMAstNeK6uZgbNe1HkCWDBPjia3Xn5XNLmwoBvYFMSEydCFbAuPuM",
  "key19": "57EW4DQdPeo9ahJVKJhXo31cXN4h8DoraKT42QH4bdEh6ZAezE9uvj8ejPMb2KY22TVDDhoHsB2W1GMyFnx1vr5S",
  "key20": "3EG3QAdm9grAW96xM8xLjyMcZKB1zNPUNbwFf6j398dwQYib3BtQjXpx7UX4pyrJdazjoe1q1hHrQdrrPh5CUubF",
  "key21": "45AaCzgPU5dcebtB8GqmCJTm8d4B4f33oJVDj3M5QtDg2Bv2419foAnX1c1N4kBRLpTg2gp5di8W1cPxQEwrDF7f",
  "key22": "HyMj32cG438gPRsy5yVLZAyHXtkJxppbUFKPoGE5DAKNsDXXPTsPvCMK43bYqvoHedU9LcnMVLakrDQXkDcUY91",
  "key23": "ybRGQi3UZcjbS9zMDdEQ8jPwXcmv65iPybr1kah39tcwqJxYmr6yAUrDGFMKLTbXkDWMJNhgPAeKm9PvXLCXTBC",
  "key24": "3JTLRMdvpYnB2YrQRCLZu8mNWAVpFVw3m2dG51zgvxSxrCeMaG5CErnGkTzH3eaCvStn2SR9jiEt5BngGbnGj3RG",
  "key25": "ahqvACWr1GxGZGpud2MQiNCWnvbLxgUR2EZzpZy7HMZHWt3J8czryTq6pD3sRiqa3rbptdZAEUswJKKGMVfaAAd",
  "key26": "21x3McvcZVUB7VpN6JyK1jYLKEwm8rvgV4srkNBJGiLSCN97cQWvEa6f79TdHFGhhxoGYv6LPbakhZQEeUbuBEsi",
  "key27": "5ETCNAV9orUffYysM2CNkAFCo7mnRwUeXbxj9K7UcMseo5VEEecNDN1a4uJum2vbs5wQGtAtNMG44dePf1o66niD",
  "key28": "2wbcn4jotkpue11q9FxMZm6GmRgV5pQP3JnGnR2yyxyZoWs62L1Cev9kJWqPCq8XsDr3Srkw5GCZWDJb1MDjiQnS",
  "key29": "2oSHVZkrYXH9VSRT1KqHCrYUy7Rac2fQnWYLn9Qti216xs8FYjkvQo5U2f3bhDtNzpgzTrXgPCUADLJEA8ALpkiC",
  "key30": "21Mnr8V6GQ4un2xyP7LZaP2oRrdknxcRt4iBukjrBrWt8iV5XbPGp2LETwEHfBCemTHvvSYPXrweT3HCb9bNdjfb",
  "key31": "2axsRwPAGRRczjp2JsNmjDbbogbqEXe4uB1UoeU93LaTueHRB7EgWrxwv84NSej9FCTPU2wCGCiVrj56XEi9SP3s",
  "key32": "5Ap6NyZTom3Riy9TjZsQ7vUZBkySTSpvkoMTNHeEyryDgMQGHeT3cKEferdAngdXm93SbPriPFrytCe8EpdWVXbM",
  "key33": "5vrTcmTpDpkYEns6H1AMpN75uhMfT2apj7gJErvKJTDs6cFD7eSrS7pJCYaR1ZvB1bkhuzwR9eGzGVKHcSFdpAPb",
  "key34": "56GreJFskCu6AyCaQJdaqG1x3pDmE78A8Qjhyw5SVWXGDuuzRvuktQS5RDeqbQZMGVhmLZ3fE3yRWKJXB1YGou8Y",
  "key35": "aG3eMtQ9wQQHupquc9MNd2RcRKuss7YBKbMXXSayUdGbuZTkMyYUNH399rpbbwyUQCNNBxinvMPiT2qJGbPawsb",
  "key36": "5NynrZpqMxz8Ra25b3K1sgeFhL9BjmLKMFyBJQ5JWBf1rWrthy5DnWjPr7zeNSg1e1nE8aNeYvFzrb3tUj14uoYa",
  "key37": "mTb6KZSiQiXtnzgkitay8r66YUjs9AKmitBqQygvwrcKMvccdGhGWBUkx6mUyQAbKd9Ht7YSyz2wecqGAHdRnCY",
  "key38": "33tPuBhhWA31aEwbJDakFa9GmtHpvjKQW7cMLupPujSToz52Zs3CznwdEsGoGXS3c6N8bfEqHca9n4meaARuocHw",
  "key39": "33ezz7cYhCvHnW7mTtgm1uhMPN7EXESNzG7EZDzp58ouUU9RWdd9M7vDDZv1eeAByATf3vGAuJ5w9ESY7GuSJbWT",
  "key40": "5qrFhSjq5y5MyMohsGKQAEd6KQbL2gYXkmNgQWRiYxvfgA6E1YowEkPKezs6MKPN23VzmqySEiURGLS2RTEiW95u",
  "key41": "29hYULZsgAZ8H5TJTvgiqgegDtNmnyRfutnuJFpyUhMreCbitgHnKjafz6eCNeVKH8jmNTapDtALvdy64p35VvY4",
  "key42": "2DBQwfcHWHAVnRdsxWeYC7otdfmTjrvQtVVBDp4KRDKTotvxeSHM8DqxuZSRicc5agPriZUaZX93zSBjZw7k32sk",
  "key43": "5mPT2PSTqUPoTzTyucfmkQH4jgEFt9GGwQjx7mAaJ7iKezAEXnb8rVfYS7kWbsNGwBsAyVhp2UDtEksz2GXNXKj"
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
