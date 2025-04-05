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
    "4Y2xCEKXdXwEdhYyXKvgbaG5cwcpSyB85T5yDxJ9CTGkx8dACBiWuqeagHBFDBfBn1AYkgM8aLDEa4zamUEp6dFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cRSVN5rVLbsDhmc7gAgp9RiTGGYGNkWrAg2TvjRK1ZLU1jGHfu8wR4qCGPU6WVqz9toZcxySAQJBjJCjMFjAWte",
  "key1": "55P1uXeS7WaLEsGnaE8ppttPA6CJQYgTuoDLds1cgZhNDJBktdU3GZTjPVCZxEQwYNsYtTHjakBL9r2ZPaYR5kbq",
  "key2": "3h9kep8PszdZ3T53UoTcFdDxEnt9EvdToAZLDJnSGhJh75frB6pmjADj66bnm4ZuGpMZYgmpFEtwdT1iqnuDLWiN",
  "key3": "P2KkQDPmra2Tmqxwp7MzFaeE1kjJ8qWRbDy2HKxGDQ8mXoJ7Yio6JjERZLs4LRT6G9psefMef99XVrahdaZ88YN",
  "key4": "5h22YrwpU7jACkhfdb1rgxUQrFk5qYnB5YPWtR2iGGtxCWphwNpTcT427UzHJaHyVtp3osJxixc2W3J2fzEjqzGN",
  "key5": "h5NrCCkbCpdH3X8cuYhbm2Kv3e7SkWMp5aJnWZvuRhVdAGbcbUN5QYiqv21RUMLH3aTFahzmeSYw1pRMW2axLpQ",
  "key6": "4a1C7tKzhj8NQjniXoMXqY9XH19gHSHidW7kpsycXMFskcuTkpxXKkP26fh3ToDF18jAD3pRnxhHHS5zFwW8QjMk",
  "key7": "3nNkGaKcHZCha3PARH3KuSg9fJ6kMd9q86iayrATRnkPh8qGH3gX6mtV16HcDZzB7CqiPzBLH3NbBRQaG3vVRKMB",
  "key8": "Dj5D2an37fPMcS4xs2WDUz9rTh1Wgo1EdFBNDU4eq3fwLYWi18nK68WY1ortWW6nVC4ByVc3t1Qh8wNreE6JdY3",
  "key9": "5g65CKXg8a2VvisU7QdPRE1pdcNMyyQSfREYeSx7gzziQ7U99SgXmWNuNcEJRcBVyw7bG9dP1V2k3nTgManKuuMF",
  "key10": "631KqFryMUkbAcHKDNLty48saQVCMsen5iXffanEeMYuQF7zRGc6vzLPJmZ4Ewa7sRsvABQ6aZW14yqKYP2K7zEp",
  "key11": "vG8bu4Xy38v752NUqbKHqM6kTCx2uPQz8CrCDL55QxEV4Zm78uDQr4F2miWTNQcK3xEVEkajXVmPd1MK9TfMUs7",
  "key12": "Y57ci8brAoNZuTyyKGtPpQXEsG8iK3cJjsmiZUwX1deD9dsvHC2cw3Rmret7yoe3fgkR7yu7MJr8WZ4pZqqxGbs",
  "key13": "GFwVMkRbzX1emmagux9Rk1tkXLZQvjPB4WcnxwfessDnUJ4u3o3wvzjRMMCdejbzRdqtYW5DNz9KjGxp3haqhEW",
  "key14": "22KrkAgV2bRRJELSjkCZ175k4Q8YG1foN1WiBzX2qV7x38pmN8XgqAJFVthdoqUYCTYqa9YMDoWcoAhnFbC7Rix9",
  "key15": "5zqTvE2FaGoutvH8aFTn9Dy7WtBjcPi49GF1qRXm7hZiHQgyxgihs5nMc3t1WfCuV2XupwvXeeBgcENZBquWgTac",
  "key16": "4dqBh7Poshx99vinuj7RdHcHw1x3Z9Z3ezpR7dmqLGoghPQiAt2Z5AtxDpsuRDs7BAbXa1MiPgiCaq1nPiQ9pPgU",
  "key17": "2mFH7Jq2AmtyWHsnX2BcP1KJjNCn39AXZKFYkRAvfNkTyCwk3ApjAUemzB5xmNKF319ukV3mKiiWhvFHvoPxFa7H",
  "key18": "2imDrhrMEGBw47sbxdsZZQaTqDkGNnc8Da2mDCYqGgFnQ3VcKP8aFdoqkZ4gziUscr3hQW9zupSvT5AuLi3mi7yu",
  "key19": "21wunQwQFp4E9Q4mJzM1oxbNaKWND4pFd63CxkmM9iFQS1jUghoQo8CQ8mmvEAPYZuwDLmpNfn5gVSVeDRJ6Qsr8",
  "key20": "2kvwqKHooLiTwDz757vkR27SfQY2A215EfBCqx9ujgGde8j2ys33tJ9DQTrQmgUq4Ek2pZYNh3owhN1nLSAqYZbu",
  "key21": "3XgUMnd2nsTTU4zJAjD9FMaSMwXYwYEemVifzjnnxgiKmnFAyrJq1VyyjgY7myWCfg3avKMnmCTPW1THgTwbQ22h",
  "key22": "2VuEkPuW6aCDnh1jkzNTSERtXWtyG9Ybafdp6VFUZgrot5egSa8EkgZeB3fduVMhwMSH22whNBsdscQuiu7j4fpC",
  "key23": "3HRMB4WA4eTzL2mLx6ayP2r46eQwTC2LdLFrUX5qbnpnd29zqcTZPzu8KJZQ5qz4qXwRcW1P7CHjhrHdkAp2AoWs",
  "key24": "2qiEwwBeMiT6ek7JWFowecR5Ly2Up4yAdsvUzv6oSBBdFxSa5JrtS6QTWD62PysiL1dij946fDvevRAWPYeemRs3",
  "key25": "5W4woDX9y2btaWNyh67nkD9ZCQNEAo8d22AtRcPk7WqmPRqW3QiwkBrgX61gcRPNVwom4PAmiFyhs6RXoyofCt6V",
  "key26": "3GKe8gTw1MRBD9d6afzgZHvXwaMiwJNH3sSYk58yUktzx27E369Z2BgTfadkAKa2bKRwuHkqVYw7z6HeKouxGAJu",
  "key27": "4A2jZAiwkDCMi3V72QyiQn4yRKjbWpc9RHNKmn6e7QqunztZVi5qD3ipGuQXm9jssitasZQzStZbvMpWeMbFnpva",
  "key28": "64RkAYryTtRXrqyf3vwCEeQdvwvtjtz5LBpPNUr7hk4cGW5wJEoHmTycubZm2KT6hPaMz8mUT4W9AdgAejSxztQX",
  "key29": "fA3cCGwxFw6GRXrFnCDnsjvj41cg8mRpCAc9SQnt7KK3s64q3cARPeXy9LdkjDfzar1AKNs2m1Hehqooy7nx1fd",
  "key30": "2oLjnejtgPbEhvsao16ogMQ9k8xrrqv8vGFKbxbdo8xStTfiKKn5Qz3Xq7ZNGDB4sXCH94LrRspzyBX5UguAmyMV",
  "key31": "sNn7fyrtHfdE9xVhgFsG2pucEdPshtSY8Y898eP5scA5cWhLCB7HJJJdhGiDRXH57mpx61V9wCeGK1SFfeMdmN3"
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
