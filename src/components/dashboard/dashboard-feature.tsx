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
    "TFuRdNvaPvXNYcyfDuFVdBLvx2gCXkVLSWgLKnjqJJ4aw1CSMbrfe7N6HQXJc5aJ7AZJLFAaK7m2D6qFQvqK48k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tyNX6UxoiWKyiemGeXrTk2C33WZoHRVxe6dBDm8FH4dfQp2hwUvJPZmN1ukS8Snc1u6oBWxQicDgC7EHuzxE5iD",
  "key1": "2PtWQegU1Am2M2dXBR1eqU74tW4hKgCPzaHQdpP47yWbzimREA2hm3bJPqqAQid6cWn9b6Qf31EhyKJW3uB6jDkk",
  "key2": "2Mzsp21mzpAvHo3cS4vtfAXCFEHpimQW5nhLTo8w2dZCAeXumYirYbNhBCqeVt39s6DAW9wKLiyUaPWikZbzGSh8",
  "key3": "2rvQ3vuFanJpdfpE45bHdbGXsp4uhuZsxNuePEZZ8vuY8TJuosrUy1CB3eCUsnWSkY4zhac18vfAWrpADEHQix5M",
  "key4": "38xm2ht5fdVZ6Ks4zbvTiNMiv7x7eGwMmNMHhhrorGW81wDfzgDX8YrUFKCvcGPjhuAR1f2UKoK44qncjJW5BKhx",
  "key5": "5s5i3SXPwhCFjZ2RCgwvBnkej1zKJkN5Rtgk7HjGn3pswYAvdfbX2C4JM2Z24CyWq84JLWBdG3S4uD4XweXtXzcF",
  "key6": "2ht6UWa8hr14sBVJuoC7fshpPRnVPaAQorQnsRr2u5fdW4Cnhk79vvhkssGL68YHHoV8ELszkPyr7mKays1tsfax",
  "key7": "2qTMQmXFqNFjMam1G4X5vixAFHprFCgHxj8CikUuNdUjxT7G3oWCn6wJtB1Te7JVsFmKLV2iWdwHdQZszxUKpB7W",
  "key8": "W7jgFdTQ17rw2QPjHydUQTUAomoN2PFrZT4GLPKfRFyJmr4jWfPbykf45sWo7ujDHBcc75GS8Jtigf5U2MR8WEv",
  "key9": "5xdS9t6VoiztavmaVaF6PjyTcEgR1JButVtJfrTuoda3ymMxnG6cPbJ9Yp7UHYBWGBfnyUwPBNJqMtxCVTzjiEoW",
  "key10": "2cS8uwjmw5AWTcydYdr6upvtZJ7Bq9fKt8WTHTMMitvDH6PCzGAzFxrAB9tTdNqveYnYsT9FityMrp1xWsFRwT9n",
  "key11": "2d4LkRn9jurNiJbx9Fmfjv6D829fYiaWZs7Fo75NBvYD9vUPiKLmLEUFAaLqn4efYQE7EPxcQmhdevDhGemfUUrH",
  "key12": "5VCcLcVhfw8mDs3Z4SCbF85gFGhAYJBZL7Pz9cY2sFYpTWrY64NZMUdYKusEV36xZ5UxoCjaC3fu3qTmebW7zdgh",
  "key13": "PfAJ3yKrgtaf59sR626z4Qusad3LwnyDFU6Z1EbfH4QtyutwcNVSKxMqLG6Zuqd4oWRnxPUdFYz8dthNG8QLX4c",
  "key14": "rD5SCh3fDJ3URWhUfCWdQpfLAx7ru3qJhNx7cVjjqLYMqnbP2Nascndv1W3CgmA1ZwjWFjDALJTZTrdoUyibBYh",
  "key15": "2riMzFGDgfnurfJKybjCGm2LbEUwC819cewLBZE6nbzm7n721AdfsababenoUDyukvYT7QonUkFrZEJ3qjKJKrqJ",
  "key16": "45DpLUNHPVuWAxjoUPwbg69CCsdYsJzzkBBU7VKjYZVN5By1Lh7Ejr8sqTKvwvXQ4ip3F1b26nGp3fxDKapMdKSd",
  "key17": "5h4Q8uUCXfiKk3vEbHB4bYaNgqc6fnVxYbLYCLfWkhZeneWKaY1FTUvL3BQ6XWzLZdX9Nfsi2wH3HHgnhUNzhm6m",
  "key18": "nBjrQkwyVY67RU2S92qWFuXunntoDUzfAGgQWMM9UzEUQDRxrXStBtg9oXxFWRcQzWEyiMa7cDMwtWfLQD97HEP",
  "key19": "2hvGRHx5agStjV1ET4K8JWDBiHAbBHQQ39sSW9JMAb8hnz29B32oNavSiE9fodQ6L72arv2SL4vzCNhgEjuVavra",
  "key20": "3jBosBP3tZZ4eRNXKZJmU6HY5opNgoyeuEwm7PJdN66VknrAEchnBC7qmGDaz8R6KTUpVVwVekbozZZXVGwkkHNi",
  "key21": "4e7Rjaee5DL91FzCt3DAQ7CK1sqWHJWHE1Vuv3dG1xmn7Df4RXWeKXSUUgkJafLnJxkYfLqDnDnd7eDAKU7tGVMS",
  "key22": "4Fvo2G1aZ7EXehRWbwV6KGHiHGe81L7AU8i2RKJwAmzBnoZYrHpZQFXWyvDxn41B9BGTaAEvj5Uxe89Jd3AaqRnY",
  "key23": "zyQHujzXubNFppCbop8PbEukwSsN7DtJCKhGGR872ZzFyAH5sdJD89WihhFwjrMdUS7LtSG31ybsTyuYbb9PKwF",
  "key24": "4TMDQy7fRugb25ctzMmtMdePsdCYRWVjadDqzKcEY1QfnRddg44hMigCpakZCfnMoW6fMZtT1rucJ2soAiLduAhP",
  "key25": "3MHyLwkgjQcgHmnEJW3g3BJyKw6vc4U3uMNYbEYAoEfY3S55GbczSzXJNTYh2YcqwrxTjjoSahSBW5Pca3uUbeR",
  "key26": "5RYUy3evAXFxESbFHFTFVCCWtdrT8o2cxwLB3NrAVQjmPRqQxBTfaFJvaoVGRaKK6m7SgxLtC1BRzc7eoNqH311x",
  "key27": "5aA4zfp48KrxeHGzHWpiCWHYdB4Hz1dibnVLzhzt2Hw3A3XGsGsT9FadmhTZu22GBBoVCPVA3QVMot4TaVio5XFk",
  "key28": "2ZPH8xEeupXtALe1fTu6LuD559T4MJFnPj9mdeLwftX4NHau3nezUxpVBzCuLqRmiP4kj4Puhe2kKw7AYTgEKoK1",
  "key29": "5jFrG1Vu6ERJBXXXbSaQ96NehGh3zsHPRwzf3LNkS4Vmbe1zQmzZGq9v9ms3EtoV6Arde4rLzudpPMY7HsiTs4ju",
  "key30": "3vLbHY5WxfDgEwthKiMb4czBwS6cJuqa3dQrAQL13VQngcUsRKVNTZFHooo9niPGKUpVepLaXzEKXEpN6ayMop2u",
  "key31": "j6vzbhuGKeRiwmkDnh78HJea6zJvgnxHwvZiCv5Ps5ERzzHH4rv8q73pszss595hN4PbTT2V5chV48M9AzYmxRr",
  "key32": "3nzj5RJDUbPGiJEhbZgf4fhmtCdBSxgfnsjbshDvX5woGgGciG6NLNgdfVu1uVoXmDFAVeYtZxgjwTPn1L8hYz9f",
  "key33": "3wfaK7RGeVSxqcpg6QACjhCnuP7q1U6VvFjUgu7CkjvvTtKRPKhyyurUXQT4v9CoxRKRLyQwLB2UogE924KY6vdo",
  "key34": "2rj94mjR25es698xiVaJfymAr5C9Sq3sAiKQVvXC23y548ZczkgEBEX7ZBf44ymFgo27xoL6PjvvTNjaWLpZNP2Y",
  "key35": "46sQJ6osTMy2Nr35jzARY7WbHzqLxNBYpaXKYk56bgYLhNin1noDAS9ers43c2CRvuxVF1XQYwVfys4yTZamitCD",
  "key36": "3oU6KDi3hyzPED1kxi9fsx9BmuBZGXpUYL7mTfRpYuk1xDPfLsgkKXyYJvKj9A3FUPkp2R6bhBwS59gs3BNrGrkZ",
  "key37": "5wAfhDCQhX2SB45wvz4YXygZso6C4u22DLjzCmkJybQf827NqC1ir3qHFofyKbE17ND97JWbfsmd1uix92KJWiVh",
  "key38": "3kBbTReS9JgiUtYzi7honoN5E5psoSQ25BkU3XoVK8h8sRsbVuymh19UKcgNKAzBkvUGSYeQ5MUr3jHq9kPhMZCS",
  "key39": "3L6DFM2a9UUMbqAvsAodYQCU3DdbaesruWHTgbr9ASCLYzuBBuFxWtSox84M7DQiFEeucmXuHvxASxSUndg7vXPX",
  "key40": "PQ5TYWnzy4GHPxcgYXCTjFvMhPD5Ci1NpYukzTrWqRqhsAPaLgKie1w3na6r1DpDqL3smr4ZsEe8wVoFrMWLUG7",
  "key41": "5oGYraG5c4xqYUiCzV21UyFwpz3zRwFpmkxjLnniUaHUHUQ3z5UCkRuuDPwsJxvrmDSARTiLk3dUQPtAm8BDZfj1",
  "key42": "5k73PMSmF5xbM5xG5EvFATFwUkt17vbAimZLbXhNaRYbk6mDcpjRPpcgLqz6uEypsYZHfihnSV4ouRq7mHNemSae",
  "key43": "5zcLLuXhYsAn9tYBUz56M8JkB1gUBirwCobpAe8YJ2k99HLfjS6ttuXs6QfaofRvdGg2zP18ndHZfs194CEuqQ6V",
  "key44": "DDJCpYWg6C29tKvqfHEQKvqYYjdicxivTvR3cbwRe4F1uMdHTN85Sk1cx95BsTFfTGM64mLMCZDHFNRR6LZcbZ8"
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
