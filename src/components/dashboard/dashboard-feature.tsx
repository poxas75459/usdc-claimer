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
    "3PFGzvyjJvsckfktVSQemwBjiEJGX7SoSSBTvwBMsr9CCaFBJUmwGJAqYwEV1hVczBooKK59bDwsjnb9LciW1V4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gp94As5AUAbKLXT74UUtDRqysN6KJy2sonreWmi5X19gdDkrxZGrE8EPVEuRpCM2erguFikWBjSvVe5Z8CoCF3D",
  "key1": "5r8TceKnS9Puaxo6cosgtBsoxGE6xtcYNTJi9jSWB1ySpqe6Ya7dAcYpH4xBBVoZ2yMKBfRp2fK93gwqk3VGBCyx",
  "key2": "5dt5DPBfRMMXWY4ydK7YxD7seY4JpA3sk1qkkoELrDb1cXFzrDAsLKW1X2VMUQGsaWYhstN56S96jzr1MqWA7QKP",
  "key3": "2itNSWtvsAAne9hsnh8xRHuaddK9cXY9AgU3tpEwTdyzp8qx4AjHR1Z8FpY3J95rQs1pxwbqBLUanifJ3n4Z99WG",
  "key4": "3CScP65Vyu9N6He4MUWNeedAjq9L3KhhCDE7P7NdMbazEVJs4ZApRL6UqDHxSwUWZc3rcjuwMhN22UH6ZkdgWKWN",
  "key5": "4AZkBufkMYyn7fJMmy3ANHxZhrFSwiLW9KuhR7Eecw9qq34WkGBAVDS5d61bcY8TU9JPvWgth3Bs1Nhh2GkvhzKN",
  "key6": "4ptKEzAMdDfGy9dNVqw61S1eLMuVqKELc7mx61h2AfkT9BizT5e6LXPK1ynspkFeZsdVxtEEwdpVJ1c6djtLo6t3",
  "key7": "JHEXqzk8VYde6e6Yn4h6JzhRJLpXdo6Ykjh7Rtmsk8xWVFZjfZgb77mm82A1NFzzf95CHkCErZqhnfVNM5CQbUs",
  "key8": "5tyJvZ9NKp8qJt4JJco2xqrcNdKNQ1iNXNFsCJQdMs26YX3k3YM6B929YihPJHteeqyv3m7ZSLgbcbYzmphfgLPw",
  "key9": "2NoLXdEWxtNgX6PhhJB5xw7R6eLrSoh41JP8puHV9XDZvJUvzwocGQKn3B5viBBggxqNQur9wZPTSNnAAFtaUCEv",
  "key10": "5tbUtcnuRUwgxfpNcPjfxaNk1T7eRyDu5gVMkpFoiRqbRbvmD5MDAaFEH9w3EJLFJsZwu1vqrNuM9vU6suQQveJn",
  "key11": "3voYScQzrxRWknUqQ712KyMoTg2qGQwLDCmWsHj7SuXC3bXwYKAyNapAo1jG8EBZhgAbJZm2LNijciTnh5KtfGQ5",
  "key12": "5JM3thJuagpUGKD5wtk72R2sY8tGMRynL7tNZTgPggo7JysrM4EyZApZCEHhnDeVZNE3ZCHvHMEQfymRrW5LCxo3",
  "key13": "3gGwp9peUvRaK6CoWtYYPZNhVnvBfHCceAuWnPjLdozvkiXG49qC1sXU46Ck7T2HkKdQAGvaiUNPEVLrZgPUJVd5",
  "key14": "r3kuzo79r6cxe4MywPUfTDJP4VqBZLNYqUg6XVwumR9hGfScYA1RrMu6Rgg34Yzpo8JVjcFDPxYgyJPj8c4p9aF",
  "key15": "5fWwqqtMJ6rH7PrfStMjJ9BqJt9gJ5866EbkLvASQMnCSHJJSLgH2HyZcWuN4dFhivumFgpBoGGC7EudJiFf4gYL",
  "key16": "5ZrJgBhi6vXNnUoHEQkvosgLjBGBnoSmkz4j1inTYdm7Vo1emG3U8aMVNaSXWyQobs33oWDGt6G9k8XFgKD5kLkG",
  "key17": "4eUfKnRiyGE2xrXSgJJqrYPGxgHPFZ3bnVVzS5YUjeeY1TDw7VjFbE3yNY78DTvR2hKhYWm8u6GJz1jGEQ1FLWXA",
  "key18": "35MsVF8YhELxffTy1VbFsUTsh1TFNMhPRgAne7KmkyqdJA5PtUMMBL1EuvmRC328w3WGqbysh3XWiqSWQjrmYKNr",
  "key19": "3cVErSPVT7HMRBh46L6buWedPRwKkvWJBw5yuiJERo34sJxFvr4ZQb8ebVL9iWkEJCdksHUSYK6x4KpzrVrqwgEP",
  "key20": "22EE35StXPh75EAXGo6sKWQPz9jDch1dpEZwseMjXHv3zmhqTx8MSp85zU7jFvt7N2zMr2ahqTGiekzcf7GzpZYd",
  "key21": "4BMfnfdAwoajuHuDWKWYwWwYd82fLLo7PgbBCQdWh7XqX1c3qVxuPg52hZQta6Hd2WHYyi34NiRgpAdYYcUW9rQb",
  "key22": "6gjmuoF5BbfMAiHp9Ui2mhRfkNHjiZBJJ6grXH78jfKnSKYmNESZbq3444jChfQhwH3HfC4FHo9ZXaVvyyR6Gu5",
  "key23": "DHVMHQNdKaTazkyZe1Wxhm19V6ZnSW3ti6a3ucUwrE2cE1dshGBPxkFvPgRXbeRgVibNGZUZhMuPvYivJPNSF7u",
  "key24": "49CGt5LkbRDY9z27XvYPGAhwcCkNd1zUougx8LCdsx1yFcq9VbeTjLDh3kGQr5NEtWuC68Ga1dok2ds8YY3d5Xrb",
  "key25": "5jWdPuEFy6ALHLmeWhWJ22jr6rSXeaydGZFZGEpdVh8EiiC75xsvMCKh1jMEZirBZsMkzNsWiS5xparLChMeWNX3",
  "key26": "2P36x2PW89ftHwDPFkbCFY1wteyHrRvv1uZqCQe4esChFzmSdW1sN9cCbMqpHTdiZaM7aosRQzZ9ECgiuawbQTV2",
  "key27": "4yf2aXJpgAXVi6eWmstwkcderRpZvb6juDPGwJaDUrvPBaWWPLUau2ST4BRhRZrLjnU2virEqbyP1BhHtjGDFoPv",
  "key28": "qNmsKbTGAHtZLM7PviJxT8jGfbkNYHnrschS8Cnzh4gPnLUsLxeTnMKfwEVcRLERnbjwuUgmJYSh3rAaBKF6xii",
  "key29": "2ppTRtngBqxHqGJTPCJQkzitr94ZyKZFVmhQRsBbWyr2qwzZYx4HRU6q6ytF53fPKvzdLGV4udXHuygNrn88CUrm",
  "key30": "5wtzH5MqsnboDym9xvV9e1TXDXcWfrsCLxLaGwoz5b4fwqADzHUn4t95VQQ4vCEDxPoc4dRxuPXqWc4iQE42W4M2",
  "key31": "3oDfCCaWKvEiSnvP8cBm6XzM5xc6hZVfDvA5dxMFD7nx3tqT77L9UUEpyegcu7QsUQeZSMN1HYfgBEPEXBLBSZPE",
  "key32": "2aW1rg51y7ZbwDqExu69NZKTNR1j1xhnvg1s3kkdYW4ToayxzuVbxyfZ7WqGjSfChPmiw28V4qyTDvzsmxd9WxJZ"
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
