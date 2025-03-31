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
    "3bcq8Zk7KF56ER9aK38PR1zn3GGr4Ydj8oHq3Z2QfahEdtqV9vYkWJQ3TrShHqtTwU5LPp5erSKddm9cpHeoQBKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RsWLZSN4ohJ76sbPeDrBwBbfVS4Rkm5rAVhaJ3yhKackrFPLMdH6cEvhq1DZy9YyngRfFaMcdgmtwczrsqbLvj5",
  "key1": "y3g3qXZKZiwT2kiaJSgozdCBfLkX6YUX3H3mYbgRkq6isn7pzCeKqMTkk12ph2pW76wffveTx27CTXGk6AcEPeq",
  "key2": "4QTAG4C4pntHw4RkNL1uLXj6zqaTco8hJzRQ5G7wMGyCQtMpjByHM9QuiiSSSxZCdiJFHDWd2u1PGfNqLyLLpc2W",
  "key3": "2nNC3QZbgo2PoxTRDMEdQnDMvQvNLwQz4CnP7XuKrrDbEA1GQbW6R2paytvp8xuu5wUV4WbwtjmGgyKE3qadE2zk",
  "key4": "2gxnM4pqx1NdsN72qCfSZiSXmjbPQorqNr7vtFCagaay3Acz5JpXxXrtWWM1ZeGLYU63y6cxXdsTZs7iiuWofXex",
  "key5": "MUv781wvvzvmx72XBNVGgTi5xNULqmX98DwAsZoEEBg3G6ahxHWydrD2nHXwsMtgfwtW9r7cwH1doq781PfA1Ps",
  "key6": "dcsUWdV4Apt42pPfQjez3BmYYhGF997UfCo7TfSq3QZJduf84n6UTrsc143zmzGZEaL8cnFegH4KnJsk7ZW45fT",
  "key7": "5ixJoRwwoRaSGB4QwwjZ4FkuaMswXyY4Kukvhn9KzyeLhNB7z3VFkXTDArtgRSmTYKic1bhASBRRQuWwU4hTKT99",
  "key8": "5uAe1vz1g5iNc39YzPLYc12SDh3dgA5p59Q5udjt2ZgjXuDAheCT39hn6eqTxwAAADzixpMCrMpVXNQ79YqqD4mU",
  "key9": "4RaHpKeqbYFALCLVtbbzSN4z8Z327krNrCWC7giuB3rbMfNWXQqeEX7e7TmeeCR1sVJaaFVTVbxURsf67T4pmB3p",
  "key10": "2tT2Ze1oQua5TmjWH3t48PgiyJ1vz6ZvRiFMov8gZ22cVruXkjhF8rxFDgq3tsQcjv94ttaNn1kZn3VE8cPzNRdS",
  "key11": "2CiwccrkvbQUsNRtQW41Hg8d8KYqXBNTUhvN5m93Bn1v4xzdEc2jYqodd1C8PWWiKULNTX8NZQGQJYaw55sUN66Z",
  "key12": "dHaYcx7Ko3Ei3SbMME66KXSTLz74eAJXogHAWtGywDMgXaLA7jLzZwk621q2vr2sFH6epkiop4nt6MiYMigncqB",
  "key13": "VHh2y3BnvTAvm1rKUEhgWWdtMVVnJRYcF66HTe36QUDYGmvGW45LXNmPjE2JPGNkTxfsb5uuZ5NNnaf3C86y5Kk",
  "key14": "ojWKXDfRHqoqqTAgRHFcYtgXYMiii86ZSCggTnV2eHAG8UPaMKzucHJ1qrf4Sy4NKESouXq2EKMBGbaid3EYpds",
  "key15": "25VC9128dhCW2oraCBRQVupEmrw5fNFTkifuC6NeZCixg9ojfbmKxpS9xp8eC7ZchLzXpQxnMzhuzT1W2YCXjEVm",
  "key16": "25tj3VFqjdkKrC1gNiLzGXsvEr7QKvDDQXyHQJ9UkcwTfo8YrUJpvh6rBU7hP5GrUWqNhdUh65DQSqrnK34mFqJN",
  "key17": "5rQMxKYtp5mwH2X1g3QAqaYZAt62cx8Va5z9wSHTrT5kmXmZrhunrPS1VgemaoGcnXGWoAZHKhM4z7pYgS8XkBb4",
  "key18": "4TEHD8wU3nTV3wda4cAHMUJHrDnEXEqVJ4YmvkrANvW4xkEsZTn55kGggWLpQUgZAujn1uzvzTrhgzHxLB1iyEQ9",
  "key19": "3UdH96mXi4xuzWuTBJeMqGkFpukskbzci9xyzQjsAE5m6WVmM6Npyqhzn1aF6cmvZ7cUsMgLZuGuE9eNDGBECZ1L",
  "key20": "DWGLyfVZax8o3zH6NzSD8xqD6QqHTPdAkwgy2a5TtkDU6x2kGFTrft1VnmX35GQZ5JrTcTAZvt445ktUTJmWGg8",
  "key21": "4FVjxb5kkJGVt2R9uafu86e7tmbp7cPP5hfBfwmo1rSbgsAbwnJGp3NYaAhGyxZMhQ43ybxWNescT3itsE2ka1o3",
  "key22": "4oYhhG8H33FDRPondYZFw7cfSCRSnB8drGbgEEdSH5agzuGiiuM9BNYmpKNA769htq25xtyewKfSEcCGqKLXtJfU",
  "key23": "3bvr3URCCXs27sx5xntFSaBDYyrwBr14K8PHiJbGfuw7MCyVFdAMxKVkp4GqzPQtikp1Q3cwgZTEn3nse36YHtfJ",
  "key24": "5HTLfFmLx6i82UraJogM5x6fqxrKe13kKXW6wFo2CLRhDXBASf43CJn3D676cexwBNnM9QyCCLz9HdqVmt3R93i7",
  "key25": "shcBk7arWHPtedSa8V3AeGqy5FiLaDiQwusDGPZBvF6pXeV5cb5CCTqetfBjSwthV53KKoSqjmU2H7r9W9cTUU8",
  "key26": "3W6YAEfa8aRZy6Vq5SUrd59BwRwPeyxZ2LFfdBeTSEx2MaftaXj2dQZ5yw1F99E9tT1he7gJ5U7Gy1ZzHU3r6Kc",
  "key27": "3WrHaP7YompkAxcsjeLdXCQxM45fY6oZVphxH8vZoE3SLgkdR7FVKp1M2JbtkhsZZSG1kW15avSk4tm8S9PtA3fW",
  "key28": "59xdptb1xCEpe2bxMWkBznFCit9e7RQtKctWiXdvDJaoip9u68jeDd85F5fX2Lh5hUz9BHNSN6Jhy29dSwEqvKz3",
  "key29": "4aWrffXgM1CjxM9UrMosc5p4ZWxkMAcJGHMWxcW37tXh3ZcFi2FdmGPYR7Zc9be94nAewtWMW64MT4BYNXSKJPeS",
  "key30": "3GvxekvX2FPSC14iptKTNqig1FYHHAQPQuKNF4JpbNcqnkTqUWQ81D7erG4HWTopREKn331mYgcXugP5dbD6Yeer",
  "key31": "3q8YAR1DhpkwEYJDzzjuwaLo5pEFiwTNpSXepzRUQu6KV5xoP2aaPCr5veou2Y3cppowUgnqiWkocVtMLWGKqfKW",
  "key32": "438yBdFYwVQMrvXZ6t5iDCdBYG5ZjG9MLAoyps3ad7ZmYkbe7f35Xecppe8g7zASW8XhSLMBCT4BwDHWizX8no2V",
  "key33": "3HjfJFRTioKmibyjQX3mhM6TSANLzRizrBuyj1yPyT1WfJedRSmwdEyXx1d1nxSwgfed7geGSo2AfCGN7MFVStbx",
  "key34": "5aqLARcaw7TnPd2jodtbHJBdzWRzAd5YukBe7FVE3tweFsnDCAsGREz7E632gKdU88KEBgms9tRaqYKPQ464JeXs",
  "key35": "2MVYGwK9NNXUMdg32MTWTfXvR7STVd5brunuGK6uog1RgcjoMzDTBTa4YN4XaXEWT5urba7J4kZiqwM7Kns5fbzT",
  "key36": "bqwKGyJM76YPTkercGKftfyWHk3CXbx3LvTjKtwnBv4nT3dtWSgztTZet24EgbfW6nujzR7meQWiztgnia6QVh8",
  "key37": "4WqnC1dsLJSxWG475RxUPDE3jdE7puGxnaLadQGMdV4zrvMwJxtAPggcm33sAR9uZnPH3TnbEFYzadVAnCuxgmBx"
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
