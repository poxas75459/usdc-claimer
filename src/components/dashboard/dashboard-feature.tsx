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
    "2myHNtqTDDtzAhVYH6wA8MFKWrNFjJFDZ82NGEqXBLuhMAaDMFDkpwehRgGV8oEuWh4S3y9WKwgbCPZrho6CYpBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MBsEKVN4pwjZ6s7AbP5jPXK6MaBtYqZGxXBcrwrLYX4Jj5EAb4WDAjyApe2PLJQN2xJiR1Q6ookJeDe7NDS8zxs",
  "key1": "FjMJ6gZR1vrpLX6D9BCTaK7deTXLwGahi4u5DjdQQ9G9ZtcY7SyxNxny5rJ3kjbRSRxVrh4cbtM8eH8roUcHKJB",
  "key2": "38f5wAHqsjHdg7cqazuzbdNNnuP4duBL53w6RmXwpEX7Zf4i479Yy2SwQBeL7jVEYKuGHab532Eqv9vx9eNgZZqq",
  "key3": "2TpFDVoRUunfnSwVSaeZdVSRvL99oPRNsKqQTGHKMqecKUoo3LSxyJunKPBTH9U8raZmi4obb2aXA5XUmD3y5CCe",
  "key4": "5SvuEbAMgdTppgSC3ZnZZPBw7CQjiKG9xGBYiKLkdFdvxRsvJDrVhsyX4PeXRcNXaMNkMAafzwLbRtJTPoEFe9vx",
  "key5": "4pQjmrsbeS1wd1vGUo76Cy63Ms8TMCh4yi2eEg7r651HcVyJNLUtrWR879kw3woYu1HorE52zqPw3hcFsuecHV2K",
  "key6": "4RqT7JvM6JWhZJeB3dGzXZ9HQ5rtQyNn5iFSqyRCJNAHa4e1Dz5xkhcqssBLTcbSeg6tseXkEt9sSKrWC7GSJwgp",
  "key7": "3rG8h4FBNsgnGQVAwqMxfKRF1tee3ycKLVaZomEJr51Lg58czPhyvNuv2mBQ7hQcKiVivQmEkyv64sZ3cXQVqMac",
  "key8": "4VRyATxRRBhK5ZCPyfaF99TPmNvtgFzNYDQWsVgKWZA3Bwd5EX1oYapev3fyM15AmiS46b9rDvLvaaCRLZpLK1Hh",
  "key9": "3NiEX1D5zcBRTJ2dUmPa6QU9R86nsaqmwnHLr3ALwB5YGfXgAj8Druk1zVpWZCj9yzdYCiHa5NvXumxY1HADn1yB",
  "key10": "2zARMaVs1TVFYA9BXdzD2zPT24iEsmAAsoAr7J57Q24odYxN4Pr5C6LV8t4xK9fKAqkc5pqM5cDHcT3hhoYk6RDT",
  "key11": "35spAsz6RSGZWhmarK8XbksQ2WSx5uZib3CRVapAVZdY8PQj8u89QFgopGuU29kUg5rzZq6KcQPaRYKeAMi7daij",
  "key12": "5Vf7zwjkD3U25KWcGXrLMkvKadUzUi7wTYntmbWTYn3SJgSarpJ6ZTWWhAyw8R2QYK7z4XjNWkzCUsDiqARRbN6t",
  "key13": "Sf9qsVp344GKcgDnBkyv3CRsfpwVTvjJA8VeD6MCrYZs9pUtJuk3XztEcz1TrxyyC8kKtXkmh2DKXw9bdN6QvwB",
  "key14": "4HxzJPtQ3Nt3R3ozxVXUDuM2wPAGdcTR9pwzZJUj5Dkji41tHpGfa8BoeFmo1V5uQbPyzop31oqEQwaSXVCsftyG",
  "key15": "4tixDLKu3bVs5Rqqf7GCNGwUR3NAY5qq4htMiZSCBuR9BiGM7hBhYdsGo9CSgv85LnoTRjcdo1uUiZpxzuDE9NKx",
  "key16": "4te24vfbnrw7g9DPRNxF7W7W6PExTgBbH3uErgoDbPdzJTou3jbSkHWLsM4M2kx7UaoCpr1uYEk4kiMuSjkEdiBQ",
  "key17": "3ZGrGRGqUf1JN1VBkBoiTLcqz2v3QGABVa8sYngfzEkWj3KevLXyJZStKBTvQvEzzsLJq552mp8Hbup7KQiNUNnY",
  "key18": "4je2hY57yrR2FNvv2bgcXvzCuDsrPgxyJhUgkKTWpgdnSQB7XDFCYzmqc4xqpugKbiMGrKzuYgx93sCbie7xah9B",
  "key19": "5BKHWyewtfsjWzzguSz5daQPkAT6fwf5bHfmibXMvGpuDm2qJz3WY5ZDFguMYXhFwWPHVJjBsYgTqbsWDBiKeUhn",
  "key20": "2iWwwSaiy8mUMejE3LiuNN8SQ9su6RvHawdw8ddzE79zSt757Sw43mSJPYjJqbfpm3VpiLGGaJu63d7ZNHC5aRu6",
  "key21": "2FWfWcT2ndZB3jrW2HXhmjPCxViYTeMnR5yoep7n2pJAosjhkuTsznBALpxN5rkMBWwYu1Z8XMhMn8uj8DyNJc1D",
  "key22": "GP5nvf5hkH7qRApMFJSQgtkDsobV8hQCwxUFt5qbCf6RqgPfJ4Qnu6PhyYMpgZM3LxhMfv6D9GGcoABLmjb4t44",
  "key23": "dJo5vebdQMoRUEjsoM62pTY5CzcwTtjvJ2ywMX4ojqG7Pvi8uK42Y3BH1RkzRrRdpU44MjykoNfpE7D4TMZCWDm",
  "key24": "54Bry1MEvWnvuDWBcgwDXsMKTnabKY6dNtrh2nPJtVBRmUPJpSi4XbcCw9wRTDNj536nk2bfDYFdiweVgL4pMnbS",
  "key25": "5eTDf7q3AwxruHQUaUbsk5UorF5sbTYKsU8nvgJXvwCNu1RBHHnqTk5yZA5SA1zBb9KJNxtgZVi2Fpbo4u6jJtti",
  "key26": "hYmZcNAMT66CWnBCi5nhUuMEbwrFjfe14rQBqzC51tNYUrbam4BrNnma9Uc3GeUN5TSaga9jgKTGEJQhYFL4JQP",
  "key27": "2wcHEVh7PXidERJFwbnnJsmo9j3FykUW5hVZeViwKULr2CeeX5TbCvAtfSLrNaVQizcnnATwBWrakLszygSS2zf9",
  "key28": "5ZphwjUdZ8ZrChEEjWyHvMWqjkCeUNuHTKybTS39sR8sJg4nbDLmCXcnfgxHpusWYywL6mToF3hYrHU9yFTg9sDE",
  "key29": "4brR5UKL6aYFEmXG1hL8v8XeJgJv79yWeRScqtZY52E6TbLqTheqmmhw4a5pJuAwTC86ZTYbBgiSMmRcwi2KqbUC",
  "key30": "39vYQwxCjFM2F8LMq7eafoR8CoyGSD6B1f9vFgWttugyGsAtZ9JooeQHhwg4txQ69sxipgLEMu4d4yAA55BvGNKP",
  "key31": "3zgxF9vbYTXBcUqZnowy7hZANzQKpot6kQY8iGJ4tvxH6BvWyd4Zu8BvCHNqD7c1QBfu9SiN7M3wV6q2c39GGTw4",
  "key32": "3Nwa6XsxkXawcTGEGxnipBeJmYbZnFk3uwZDfrJb7Fza9GzxosKB8GnpV92owm1FMjdMy3obryxrXSjB6KgHfvKR",
  "key33": "5kdry1qNuPC5BS5KwDmwNCHiGn3Ai1E7SEPoaLc1azMGevcJswCakg3gjS3DQ8Q9aVs2Yp3FoLVCoWn8gCUbRJ8x",
  "key34": "3KxPUkyyroo9r43mRBf9UQTQceR7JWgLY4HBtD8Y2U6H4skyaEgvwa7Q23xcKLzXn41F55QXdLxwpS75QTahUcGd",
  "key35": "3dL4Tfr3WksprA1XKm62j4bcLsd79A21dGPuhAEVv8oo6gxNkUZeis62hx7WHgq92Ti4JdiWX7hq3Vii3yTVgjgC",
  "key36": "2YdSvKLJJVDwqYQCdf3LSPToYEQSgCGqDKwXVhpW8YEfj31sJGACMDVaCRz6WkZ6626ZA5hoywxV8EcocctbiY3y",
  "key37": "2QnmWfg4p32e1mXeaNcpcqRHq7HiASUNVabCrjhtx7jm3CwK5Tb1uoM1Yr2tACYc88y1eXQfkghkKrmp7qPMYMYT",
  "key38": "2YEPXebVX7a9rnZqnXk8V42CTeWhZUWwtk3PSAYB859BvyrhcwS7hMnCaR7GG5NXxHvpMtbieY9aCD5U7tviKfPv",
  "key39": "2mAySd8dov9KU3oMMH5eLyRidsn3LotddspDtSJhYfRQ9qxFeoMuCDNifYEKcZVwugzGv6dto8BRzYsZwy1qn94F",
  "key40": "3TcNj2QSqByVqATVtUHWG4Hm9VLiXPv5NZTpvM9nXtYJJ9KSZGxkQoSQwKHN4n7hL1ciKM6bzkSCsBGEcWpB8r6S",
  "key41": "4eSifBrWApBrWhmzjiz2kreKRnHsUEwM8Z2pPWZSCeiQtT2bqMYgmxHECULFSbn3W3TCmL7eeuhPFKF9YiP6ZGjM",
  "key42": "2a5jjbUYZqv5zyVBqW3bcQChAcJDddui4eFEcYqtTY84wcRMsNCR5NCtPKWaBF1bRqzeZA1z6uZmfuGMmRhE39fm",
  "key43": "5sgYojDJ42uGPT7JXEXbEUC2Qs2Y7R5BoQEWr99thjEoaGXMr43Usi5WmskrtRc9YTGt54KHkPK4U59NYrEQ9d6p",
  "key44": "PkDSo252gcq57v9Hcnu2m47ZAubKRgfaLZnNQro5Q6ZBAQKc2zfppSPVTBVU7mb1s7HmxhZqwyLjjPzqrVY9voa"
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
