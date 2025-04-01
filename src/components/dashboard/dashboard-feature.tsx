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
    "3CrJzrJYV8dGN4KHzYBKsqK9iAhMjQmbkxrRPEQ8BtC5Jo8NTFsa1TFvAjBYDYdgS24FciCruD2xqYgJvGUVQXra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iBZvx9ME8q49Cinz71TqR2xuQXPYErqk3az3v2hSwVoaWfn4hpia1WBgdMqMDfFJqt7dcaVghhQsYxQQsNUpJCG",
  "key1": "3avGjPA4vF512QnvRGHtZjwg3eUcXhnvnuy8UUF1MRrSwLvYGC3aLjNYVbvG6Fv1rqH3NP6ek8z4VUrkMVhuBggz",
  "key2": "4eyF73Xn7FQZYGJfRydRzfgAnpKnixbbQqsQ4ae5sXsx1AxzdheP12SZ43PfxieVA6KSYCNeBh63tFimGiA6EwGG",
  "key3": "dTaV2QwHwSLPgWUATtmydXuA1P1TUGnj1reL4Z1GvFofHRdGpedD75Q4a1oBUFxP7R3tLVaQ2jKLNpAsbcRf88C",
  "key4": "2Woba99ujwYfPbBbwV4NwdA2haSGZNSwXhj7pX1nsUnzokpbYKAtTft2FPT1JQSYKURt3373rVHUm28VefbTp37E",
  "key5": "r8dURpWUWnX6jj6pX59RkLeEbn28SYPK1WL5ddAHze3xM6enXLJDuda7fJsG8pw5Lgkah5Hrh4eah8Qhb1i4wiz",
  "key6": "2c5JFKm4MzHZWa1ZbJGGCkndK6bzZ3LAAkR7Wj245aA31saDL89YdXikV3kkXEWei4rifp87eMc9k3VTPwXsdmfL",
  "key7": "4ymUTnDgP1BH2PRaKXSooRkNdH3vTXJCuABMtrYxhVQEqLePv5niG1RWr2buJoNVBXD12d6iPYBTbmgX8x3eUBzv",
  "key8": "4cbrQ8AgPzJwc4i2mSxNNRmASYKNRLLsgTn5JpHotQZn1zMAYJ8uFHczVsvxpebB1Ws8is32pNKJWHohhTF5ByuE",
  "key9": "rwAoAxEeBbNEJhWH3g52uu772YjMBxsTYeTchbbGsAsjaQYtsku4teqtSj6zvsCN1AesWDhZRt8bJr9SHhfvfK4",
  "key10": "21PHbKaEJmikYZoFVND7QqR3X4nnmRPV6NEcA8LSkyCP7dt2fJYu9uXEAoEcjz5Hj9G8VJ9RYjbM9K9vhYrdi1NW",
  "key11": "5xorP5YcVzDXKGgXYYXogoRsabC7FXiYAyzbr1HFdRHWHnvC8XBpxzvZU4atz6FLSr2ej5M5xo6FCnjbF2FG75DP",
  "key12": "v9FjeABXvcbmd3a3yxSr4sUuVv6zWsGzswkFenBVmn2R6VkivUMjBhu33jc23AhKXqQwomyD5JpwVDjUmNsACWo",
  "key13": "2U6TSmQmvMYbbab9GBWwxYf3RAg5VF8LNUqwZMQhujuUNhDbXpz2sUg54q4Ri9rgw5LwXm3H2Xw3UMgerQj5oz4e",
  "key14": "2D2pwDtbgM2W3iDafwLXaeF1PAcPL66HNGP42MUCZ5QpkAq56Cjb38FxiahFJhSeWpbTJCmnShhrbMGg17LJQPYE",
  "key15": "XBt2i3WmnVuLg1DxNbmkCN18GxuV8DHZMDXamaLiSbRw7xNhM9KAptyrPZS4TeQtrdurAkuXKYTMw66bWwbXH8Z",
  "key16": "2hJgicETvKdwCLDqLj8tGCqmy7VfZCAMTm8Y1KraoZ1R4HgTRzZ4QwmkVhEG9pEx9N4mXoponsku7aDVUkpFkZP7",
  "key17": "4KL1vigjPdiV3FFUL3WDQhJjjGPVGpETzEG74G5uqQEBY5yvb6ymBiMW15U856TgsUhyLqVUJPgD4cFWMh1pWonr",
  "key18": "2av9LHGEuPJ18W9AJMy2L9JRUQUGGyrQhFkaQMqYYEwjcV77P8a5XtQxksLgdUtLNNVUCGzkpZHDrovswcpDC5KE",
  "key19": "44gjUzeThE5WMR6Gaey9icUp4gzq28TU1tJdiQAnQz9Uk7bp3Nois4xdBBSC6gR73M3XckTgS5xP8K1D54X4UtT7",
  "key20": "5sQgBXGiXgBBKJFpeGnE19cvFNgoR8mbrAwB1EpM2fHi683i9x7gaes77qdVESnM6ogXB3SF7ZoEcbzSFNZJ4EyF",
  "key21": "27Jk4pcMQSBUCdaT1HQkv9DCuF3TwXv9TncuzV1qwJx3tBAURooj8CBccZ6tUKH974mYhertRq89EA59DdKaCGgB",
  "key22": "2qLsXWZrHSaaw9ZbuaYpSCzQiwWk83tqSXfKPhkh6LetmU89mumejVSZnmF4QHUsYEd5e38GR4xr7ogWMJkENC1S",
  "key23": "2Vg3oucTVXzMzScgUxDifoqK5q6XRjx5QJof7SsMoGUAnP1cYdrTo7risqyciNU2pdsEqEnsMqUCgd7br9dEafda",
  "key24": "5vQBg46nzmJ4ueWXwJDkj6M7WRVzcpZ9VejBtQaX4xywNpzVT5m6ojrLwisdch7dAZrm6APneBaShdNCHPXAEdVb",
  "key25": "x1r8v5id8zpLcLvqQ4vJSsd8ih7qRCXhuPAkPBtoh4MzbXHY1Z3PPt4nZpMAtHPpwY2hnW9xjnbQb8pUfkMhVXJ",
  "key26": "FAiNQk7mevhRgZwahugj8Cm7esAcQSrAVd3n1EGKpj9FLo6Kx7Rns5W3pBUYkJUZz5gTMhTWRfsY3KhCximUXbi",
  "key27": "4qKz5LhJVFmar43ss9qFCZSKRbCMypvy8Vcf3ajjWGn9iGd6j4hTr6Jtk5PZHid5vWs4BziRJx4dovBHUMWaaYYQ",
  "key28": "3M8ESBJyXVe8A7TcvumjeEbuUUxkNjbq2bUHfc8uiFx4WGXBZehAFtsZDAm7HuJ8gHfnuWH9nX6GTTQY3chqbn6f",
  "key29": "rA2qgwQrzBj43gAB867M2BLJDuemBnvW5YVvjaHnFegKkcxg98HMhHdxAg6T1LW8XNBwZgHLbQFBzznF2omEFon",
  "key30": "TN6QsAutdMs8fBoKXuAixBT8H1z8DXPStuV6bpM1gNxErsWnx1Dezfid65bk3zDi5EV9HmkgczHjkuMb2obdKnJ",
  "key31": "5m7H9cRjnCTorJGqqs15VmTmdrEB3EiZcqwqVPJqsvs5n7JUFAxyBgRqMCSrs2qujUj5P24DWR4R2oJt8e1itCsQ",
  "key32": "5CjGDQFMq2WbKpzV4wvcAvu86MujAvnFZj3oKgcr1TfEr8AoBnkqA2qdsSbJadA93DczfPjmZnvybb71jyTKSH6D",
  "key33": "5EGbN7wEPFjVpDaLfcwmxuEHreVNY6wfNKX2Gj8EW1iE3jWppY5Scf9yg5CMvKF8bZxicWJmyYEkG7TqhUPZPsLT",
  "key34": "44fTTvRaGbpj4eWVwoarbEWgWp6nosHbzZbstcenZaF439YLgQt5G6Czzh3zBM2rShf5SKnuZkZQtFJRbCZUrTm7",
  "key35": "4c932fCpDeEz6fwGtxQJusKQN24AVmWA5pjZJe9FYPcpMTkNB37GJiUGuZscFQa1yZad4bH4mKgBJcK1ER76owy2",
  "key36": "5gHADnjceHu2dFiWDAD548pVQ4vRSXxuMo3NMhDfAY1PBUAkEbQ43AKda28oLoYvj15i4iAhPB5sRKNanzz36CEr",
  "key37": "c24ppJBT8Lkdi49sgYEvG5fEghT7GiB9rLSTqKSHjtMKqbYzvDamX9zCptPVuRCaQsE1i8EhQ3WGkWF4ubGxBe1",
  "key38": "5Du2pAViEHRxXnY4xupcMv4GHFrj3Q1Tc8wzhc4HKJzYG8YeTXHTmFQcgY3k56kviei4VQfn6pAVJRmX2mkR94bp",
  "key39": "2Fg6YXgHxyV897WuM9ZR6EzrL9EnYt2FySDcwQeR3wPn61TxfbTKb37aPqzT2rBtFbxCTKhMU3tcJXPniEV6HX5J",
  "key40": "3rRkJV8WUGcN3575TuvAvFac67qdzMjqceyzXgf5VEX6JGhCrfc8jxbDn76DZCZQV9TgkukYmRKHL5j8Aha9y5V3",
  "key41": "2PvbEu7GAJeijKUWt4bSUjS8DiZE4pRd6nw2tafBx9b6JkkGQd9PxL5ZfznCcAZxxfY9ii1wUtKcC28akzucU51W",
  "key42": "3QHvV4dRK5Pg2QAnUszwvJWCqwsbKmi8tC8G7dnUDzRYeNBMxTjQXsXR1T6zErrcuJY52RXb7HD8T4xXQ6VmuMpo",
  "key43": "5LPSLiDj9sZoJYGZjJw9XWtntAGy6x7qSETLcKqEBLzStGaYkL9dSZTgCzChVNJg2AQyJX7VoiKaKKrAFQKs31qK",
  "key44": "VYSQqJXgVMtiPuykCqyRdr12f5inPqTFwJhDMTWRHBcn8NacHmiHpqKEjpMaCAm3xKLMo6r4nd5znoCUtvUcA2D"
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
