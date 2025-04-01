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
    "5CArHcVZTxFiVU45KECcspPgh5SSQTeofVBcjnX8C1J7PotdcZzPpR3oLZZL8Y7ASDxZXjsfinDj9nezm7hEAyVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MPpsuyPPyZ6jwpXSUpdFJ8KCEd42sccvjKw3dARs9WJrTz6XLcYWn7tZS3qiwjqrNn5rqjYP3vYR7KURcJv6smj",
  "key1": "4DpJR53ztgGGpWx2reYiz9xDYcVpDkyyv7hPgH6ZxbLDkhRSxqbSAEwUbvgUiZCpWvJAiyHFtaHHnMrEvKsJgatL",
  "key2": "48WMdxRTixrQBBXDEzeU8wUrKXFpHAieEdcJDaT7Uei8PxnS9PZ2XTKrL6kamMKRgBkJYdBMNGfZiaUZ5N5R8RK7",
  "key3": "3P6bugxVieb5oV9QvXkUbEuJsmyTa4iWhHwMEpy6sJEoaHvfNkKtoDJP8QZDdDMQvWayN6NdfgKgfWcRc4Lnz8aq",
  "key4": "5TZUXwLUB36qups88utDnV2rjZiUksjkjzxXUVDEqXAq2SJQPRt2iWz8TwG5L7mkVxVYgdqmHqsE8eHn2Ba1RsiW",
  "key5": "3BF1DFZgdDn8RHb9skNahGfw6StZijB9wYyVgbkoheC1PrBLuwCsq4NmjgJ2LacnDPgsC1C3Xj9APsYt1b74Uq3f",
  "key6": "2qRSZPFxKb3tz2cTPf85ZnzReuTMiDuBTq1XtRyP7gcWCPafma8B533sc21yJ7kaJ7QjFwNdoKL8kDQjC5TkVLWK",
  "key7": "Z4sWwBUCfyBMHdVjDv56DnLMRTNFLzzCFWPHdGWqE3BAJtnXazi5UUzpmGXTgtUxwK7JCB8m3k4iMqG5ueNZMmC",
  "key8": "4ztc4XsyUahzqqCn2JiSZBiiCtHui2p74HmVoG6a5XvGTLcwJN37AzocNGRRuk876faxopKPYxKNy6vwCvhM4RML",
  "key9": "FkqrGNaBAgexDWVoAQ73Hvunm2UwjRmKqoJyoUhrVEiVo13VyudVCvxRurFnckcPYzrHgZZdCVFQbzwQbhFNWHp",
  "key10": "rBasY4aBeSTrCjoYe12kZXtHUtCDHVmmj6EGrCLSLbZtwQypJXmYDh9i2vtDxkKTjeFmuaAFzJ5sCBZERnckjEB",
  "key11": "3icbkjbksvmLRs15dN57st8WHLM5fbqV6c6YTq1EeQRfD4iZcKD2ikz7VgJWHbW4iny9jWKtXoPmSxzYQsLEXuCr",
  "key12": "5HCgU1MjKbvCjeYfiVKM5amNdAYZaXqQQYiKEs8bRrmVnBAUidWtKi1R7xnXUFk3c4o3NaWW87s9yadk1dNNghfv",
  "key13": "t3UzvdcdCCxXDDMnXJj8jbcdrqz3GXj3icq8XwAPmGsVZVFCawchveu2b6NQSudo5TgVUgxZzmA79n9eGk1k7jj",
  "key14": "4awAHAvPoGHBqRMoriyWX6dMpaAD39iB4k5b6Z23eNpgPagLBQTNNMBUnzUDovs89AbdEP97PWtjEwkxrqcuofag",
  "key15": "Vw1wAKtFW6JqNiJDxScwLDPSMNeXZb2LgKBnGRYMByvY7nXrnhqm4mJX5Stt4hkioJKa6ZneP7oGFh4HKrN7H1X",
  "key16": "2ZKk4y4WWeP1tRnCvWrSKne2Jajfv6ihkGmWiJBaLFxmfkeeFoWP2SXGNHpuuEa1bUXfaYpFQZ2dDsYWTkTatdeP",
  "key17": "hg64ZjekoCasVHAKfxsp9i3dPBQtMuf34iAGCLf6Wvngm2Y3jRBbRmey8aPm9FaCnFDjcpGcoSeNxKhbt7tzBUq",
  "key18": "63KkyZ9PwTM8fiPNdLPbL8j1oFYK3ma7FVP5GbpEpZhRnPoQvhzzKdSpMSdZxm3zd5m1fh3XVMqsmWooJegGHYy6",
  "key19": "3rUbm7QiPNHLHs1KBz6ioR63YJe6wN1QNbmU7SHRvhnCh2uoE7Gyio6eSZwMn1ywR2Vj5vj2xDbdBypyXHdHG5W7",
  "key20": "KCmKVGf19FYBJxqG5fnobxV9tfUiqbX2yvLTutZJ5CgQQLGhZsk9G8EEtBiq5KVwR1THaenbosDQe9u723spjXe",
  "key21": "Rb1imr4ahX2XQRpKg7PRaRgn1PZQYRHfvvuKHZuJp9AyzMgEe6gNAJqLgEVztMGu6Ecbhh1ZatrxnoFJfQPrzrQ",
  "key22": "ryymcpHD2tMPAN8TA7hgV3KUFDkAqRex9GQWmHkhyPtVbgaEJ7D5AD65fSZ1w92gtsZa2G6SfVoRJ82bh8gSQD4",
  "key23": "2vxiqkF3YUgn88AsAu3zcwL1c8wTyxqHU3RN3CpLY4kpygqhSHM9A7WDsrdcFcQTQVVpjVmQMq35o3T9qNXmZdtg",
  "key24": "jwY6cdwq5Ez32CG8BB5gP3QZXu1R43hf3k2xzxrumsAhTWro5jrwBtU2eXt9TjAg4u27vjdUJuPQV6i7Z5hYfpB",
  "key25": "c3ipZh7xqR6ND7KQaAQ11qfMCzL4oY4PfnCEhGjvTnsrs4auRzux1HPVFziVp7zbgA7vnhWugkD8d5eajXMe9yt",
  "key26": "31iVWVsEuTkWqz3tUfkbGHzhgZ2ANYrD394TXf9wvPkJYuquhv8eWFkq2syeMdjcqNXZf7vPyEBKyUJ67WZJPZU",
  "key27": "5BCXg6Th1sSdug29QCzXXF58wi1krEmAyKCy5XhumN2hBSwD6ciKrp7QnbPCKjCC92NDNRrtFRD6WZubHfReEhbr",
  "key28": "5vFbeMUYcyMRCiJDEgR6hft38YYnjenZbu9SaHUTcYm9DGXUgdm8kaMEvCKtwxRwbz5j3E16ABm3goyTCYLp9FMK",
  "key29": "4DyJ32K91w7AYQzJJ7TPeLKKkGRxufD5J7Zj47FXkdtzwq1tzyLbrm3r5g3fVrcQVERwuwvSs6mbN18iLk5HtUGK",
  "key30": "5cspJmy3Ay5vn5cpaLMUQW7LzpybcJk1AxEzvuNRb2tCwT58z6xGsfCfXx4ELVBzG3m98ziXn21yKnGyq1zVjWma",
  "key31": "31qAapxHG72vaUwFvWtbYhy6LzbfRWBTZ3Zon27vwWutNQAtnaagk8a9WNNXLqwmN1czP2Km5rnBnZhNyfaGJkM",
  "key32": "kmBKVCUBcDxTxcpPhtQmnCsDEJhdZ6uLx8ESF7Mbt2NiJB8FdNwCLpeADYxEzgBirGCQuWag4My6TRpEQFXnVhM",
  "key33": "3wpvuKdVyZTraXWvooEGjbvuL11ict8ZvCBgoB2qiiy8Gqhwa4LREEbL8GkeS56xaXyTh8LF8z7Cqsi8ZbZN1PPX",
  "key34": "479M5mUr5tF5xAnFE8grtrqRVvdgax739KCKDD4NPpJpj1K6Hayjy6YpTpYfAYPwdXoYDWYTej7cMpkK9Y7KVV5L",
  "key35": "51QFMuwjPZxB125aMfTeix2LM2tp8DHhTg5bKZD7euXqfNso2LXbfDQNarmNr4HD54NepmNTJehpHsLxPffdW3t5",
  "key36": "NNwtnpFFBJ538ncvJurY9mB9XteGpKP2HR7nSvxe8nmXfQcPrcabiFX3g6Nzn6rbpGWEgmwy5o49Q2Jhd1ZSHUa",
  "key37": "kyG5WFWuKFvfDKjxJhAqeACaDzCAgYZ1fKwTx8xoQTJVysC3Ge5DSYEaQiKNVNo1n4vqZ8xtwgDTdzExA1EEqMh",
  "key38": "5yAvkQMXDhSz7XooADXrwEq2gvi4SB1BYjYY8tBLmDAfiPNeinKrrAo3iNESH8e6x1sYTp1SQ2FFjmiDvX52fc7W",
  "key39": "4pSvjxQiwcpepNuyq1LS6G2iHJstf7ewW7jTi92UWPykdoGiyjq6BM2NyPN6ZMupHuiSJgMhJL1a2uqHVbGxMqh",
  "key40": "4fwz7RutiPVbdEgeKmoVzsBxDbTewWGSk9DQ1ESvkK8hg2J21X2txax9MtZmrQ1GB31RtmVkrFunc6K1MB6ajLDP"
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
