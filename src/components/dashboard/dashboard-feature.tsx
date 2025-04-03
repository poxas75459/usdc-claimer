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
    "25fexzVgzwDtH46xm4LVNvaKust3mTTKJa6TUFfz3W94WFo7ZzJdhGfJsJyzThMPF163BcWeQBKVuQneypQoWzbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eujhqaogh7rQdFDTXrhGCpxYGfoyuK5n5VUPrijX1PkGHDm1PyZNCkpSNRAL6bMDQ7t8ThKzq5V1C9bi5ge7Rzh",
  "key1": "41wjBifqmrY4CXJP3WXdLdQGWM8PSjpzeWqT3TVeewWZF48n8UusGwc467on2G8M9bhbE3MxLvAouSMrXZ9EZ39S",
  "key2": "3GQku12dxVsTCEuUYqXKsgoPmV56VCheSzZgEeh1s6rRh5rEb1BwKNZuax8bNyH9ovjmaVvrTNMXRYwYSoqQLMaN",
  "key3": "3kyLLNFck2uzbddisHR5P1843TejH4hbN9uGtGRNrt1cBuW2CM5f74yWpHz3t8m27BKhHXSMux63TN9xHtKQ2NsS",
  "key4": "33sMDcnj8eHP5u8eN2dF55ActB52EsNeWzQ4xXAo5cmUspeoVLQJuumbbZTQHLzRkwtVfSy8ARxb7PjUETLriYQN",
  "key5": "yK5Ud82F2c92qYGSXiLFhUmyWctS6yBzHfCpjB3bx9QPW7SjvqaSo7x8RrVbxJNqGjQ59Wf86VGwCvCpRxm6MvM",
  "key6": "3mnHBzY4n18VTqbGr3kLeXNRfEYwZif72zF4npPMHPFSk5WiCF1sXRC3D5K7sKg2r6qhPkF8S4NnwTRxx83Yzn7x",
  "key7": "5m7THikg6jpjAbsEv7SGUjVjKGWsqr16nJcyKP3TG5XHEDMi8j5bo1pdwxsEzSMR5Tk99Aac8ax9eUkBg5EUHQjc",
  "key8": "5c5SFjCnE1zTSuGjYM4L7vyheLng1Rf2xueai5Zoe7qBQ9663qaf93cdTLeDcsVKcwjUSdPknQg2XBLXi2hSn4ev",
  "key9": "2c8orAPpLW7xGumZiQCCSwi3eikJHniHqQqri9p4BTD1jv5XNKQvKZiEUzrxCrioZpqj1efPsDXPCVmExzKcT8rz",
  "key10": "vbcme4SdnxiAfTEiY9pMjDXH5ak31CxD6bkrm1g2kYstbg34YVre61dME98HDvKVnk5tNZf4gXRS1y6fgyU5RiX",
  "key11": "3DgtWiYNHg4aQSXqsFK8kjNkh7pj2guSsXu13Xy5P78bLiRrwHCxGRqKVEwogQHgVzh8eWto7gvKkU2iBSaniWDi",
  "key12": "bT6iZHwx52vRuchcUTe9awK84zntGehoUYbm7kyeKc9tAUHMtMkvLnfbBczsM2AAweyhjyoYBegrcZEQEiHwEN8",
  "key13": "4qhtRUhqvoe21jYWWZhguyh7GGTMCNLwkAe4PZt7EAMVZ9CxSUximNsDjEdWugHZym96vPp7tEcw5tmqP8n7v4XZ",
  "key14": "36AfQqgtGapoFvFibGjzfR3Vdf2b5dTfnWXra83CEaeHBzWsscA5BnK9NckuJUgSaPstgpPVBq3W3ToeGgW3u9Mo",
  "key15": "4WWEofyCpTdKTFgXsK9wWnxD4zy5QntyabNjF8iz834upmy44DwBGyiAd5gn6iNYHCjGixHdraBuZJSBwHvzEeCA",
  "key16": "2UamtxR2iTv27LyX5nSzLL11TLsQDdu7x71VaxANXv13TNohfqavpqRHdECLzTYXpJzKoU4Rwg8Hr9VjcUveFmp",
  "key17": "5r37ZpuE3TdEy1qbJvqkwgNmdjHzoTdt83Vts7FPf8bUqzf2i9wL3zPMWAFzY2CXEegnU9RnaKnX2B5JrvdM4PvV",
  "key18": "2DLM1xuzMnEiPXKcQuZB3x6Y1JNmUf9Bq8KDB2S9C4iDLu1RGFh889LUHmgDtuFVqToG8jdxrGdSwFnomA4f8wwr",
  "key19": "2EH3XFAABhpkjGvJqJ8J5ZuvxwuE1kf87tTe347gKx1qQTtuxGkUXbGyav5bFLQELTWXfjjS5hgYGBCUvVkfESh8",
  "key20": "4BpgWEBBv1BBccWYbGJ1X9n8P3hgHZSZer6Hfp43c9hjZL2xwLA5LPU6jSf5tGgBzXxXAA1LE7FpU4NVBevzc9Hp",
  "key21": "BunQVdH5rhuQXrzvNPcDt1pFPbZYBXbTzN3TrfcZvxHyrd87zMhbBaVAoFMMGZAcW7YgMQweWANZHagPfEFCkeL",
  "key22": "2ECSurXsXVY52uPGeb5JSQhgVRVhiihY1QqYJnn63i95McSFsRRbExBj1LNUx7w8a3FGpZiWEkMKtYrursKEvett",
  "key23": "46XjtSWZe5pmhCp8bSy9vYmJRoiHbfzYwTsAJ6f7s2BtDg1q3RbL1mj5QJgC6Zp9Cf4bzgbPxNQcWrrSyLosZCdr",
  "key24": "21B1RKQ7bo7yZh9VWgQ6rz54DPXntqejyTo4Csc9yjhURSwMiguyffsZzDfq7JY8tqDiwLMGEEhnyr96NjrPs3hh",
  "key25": "i2NtH4agy9dHBvJCgwXzDxpMhAiDjkh6hMTwSRtsxApcMYdjM5kuBdamQt1zRCVgAdZRyKgCnk9jPfGcTtXRcxZ",
  "key26": "29UxUAcqUDo5ssWxQpHHCCXTtXt4fedgDrEpGKYTk3SvgSvhXWdsWpL4uMVGH9KkHqqDU4Mcgc8UX9fp4na16GXf",
  "key27": "22yHzhXgEVQ3ZBjidSTTNvTS9Am2FSaoYWeQGQB8P2fDnmYypC4YE8PEjWZvdKuMpzrBH9K59B2aKod3Yi5sCNvz",
  "key28": "2ZbmmmstoTgmoZD98RgTNwiszNnR7u838ALZw1YC8PJDYqquETG51iiYLuJgRL5WiEmn8y6mXK17YnRJPJoqKZvN",
  "key29": "LZaLW78UQtxA8MNEUwt3ojppQciZYafuCfkfnHzH5sbza1oM9iv9RMsXTCcWg5vr1QoFBGU7qeT2rFjDrhhDBdS",
  "key30": "5CicHGR1dVobZtnJDFutYxZnjeHvwhYc5jUa5mw5rZTNLuvFHDYof338cNk1zXXf4GVNiGVZEGoDM79d3DFfyzvF",
  "key31": "581RXZahUA9vnS6cGzDDf6xj4nXY6wtcRt6ZAjrubp6t4hqPrmCj8H1mKBtQ3Pvedbof8QpoWKa529szQtMU9SEy",
  "key32": "hNgkqQqTE6efzNH4gBLZrvSEwc2t9xBrh8WkmvBcC8f23Mfa54dnnuUsBqe8p8AXTar6x9xKKVBkwswn4CeMg2J",
  "key33": "5LsNzpDNJKiUdkckHyseMrxbzbzL9EfshvNLVLH8TtUZkyTEEfnQk2aWajQEE4DUbgsa4rY2S4usSmtTA1Jmpgmn",
  "key34": "VADFGRSxcUWE15WkKF9yXjYZSAQhxRmsCeaMw3nxyRb2YkNwHeirZuGujEra73htBj6ku5gTt7QAu7epZirsPjg",
  "key35": "2YuNhXJDDrCWb7YTM3jJV34TNfozQ6AUEHSA9ZV8FjXdNAkHCDjtusowe9anttGZm3PMF3U9z4yUW4c1xhEuimyK",
  "key36": "5trn1o4t3aSB8uDF4NwZbLwhtkJAWxKGYYzFYrcaPfXq9kCqVKBhNLLDtssAeeJCoPDjStGdHxU6mySE86RYN3ft",
  "key37": "4oX42inmfAFt6xgxJErR3Ee4GJvXT19xEi6jbs83AiNdoXhBbAv9iviPkLhLsaP7JPG9kvtMAh366Tqkmipwupnt",
  "key38": "44arNWYpqgKd8ws7L3SE2X6g6ULGh4BLrYBxxPcDc2FroCPPHtkqV925EvfWyy5n3jdVvoKfPTgLHJGEjhp2wnPt",
  "key39": "5YQ27fYv5P8kq14zntimD7K7Xj3ZcXD9bxUz5iKmyK1VUdMf24n9Ctopd8p14oqTPKBZdobnNhbVUxK3NwUJhN6B",
  "key40": "3sLi39Qg3ebtbM7cKKAS7ee7Q7bc4UGKvrka2SuWM2SG8CneTSqwidzA4qp5Xo5gcJJhz1nK2q68Ad1cu9NZu6oU",
  "key41": "3N3kQ3BLnYa9HLVqVyt6DcETjutpFsedyYFE2tea5GNCkjNs1BWi7hAYMNZ6m4cyA9pvvJi5Qj3rHKeB7dCMQszW",
  "key42": "5fupUQUnA2qyptQEGxcExByxopT1zHCFNhczDJg4hRGz5HBGHMEBw6txzQiQoqmJMZK1Dw6Q2sp1jzhpsCb7trxd",
  "key43": "5qizMtfJDoEt3n4uJwmHEV5pWbqH2vGFsSJ5gZiAb5VKf5qkHiw7dL8DF9Q78myyLbddU8djEJ5rgxmFGP8BLXH6"
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
