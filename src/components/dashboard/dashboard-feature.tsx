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
    "4jCJX6nNJ8doyMGRAjKNtNC6N1WuKji2QnxuogMFpAeMQMbHZS8rx44UD14dTwgzCNkFXcgUHE39mQDcZ3fXUGxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LXruZCBC7ZdThoXhjQn11za6bnZXsP9nmaTMvqPFFZA6fGjEQk1hR6zF6ETonKPw4wN2VVtJ27HFSygFXhhftK",
  "key1": "4M1Fi8A6nBAMjEbbStPBx8zijymYfam9xYLZeSYzRGFhrTqm3ZwuTww2AnHcp1eymjHxcjJfRJ52Bj1cpBC963xH",
  "key2": "4QpU3T43WVpGA5vSVANFz7uZDWEqP72E5huiCFBoXWTAxDKQRdn6TwkbrUCLQAw3vvCc6e4iAjjyLcVwEtBJecvQ",
  "key3": "4K2MgrKsjzPzKyw75oncFQ1xH9bgHUna9sYoubKmQx3Yn4y7JH81D1wrsqHJPhv43LQQNSB5MGYtxcrpgqEANn1K",
  "key4": "5XTSUQcbMV56LvEFsk2ZvAJf972QhsAbeKYtpttD6dqYQ7XZemLW5aT62pk8zLrYAPchrhXBJjHs91QQiYd7syZb",
  "key5": "63nSr7aSNzN9Yz764dufvyWAsEzWdEHbtpCmC5GMu6uBpKAot8ijpSG9GGDGM4EBYcBkY6RsbdCRmnDrBQ9oXqzP",
  "key6": "qskRRbzR6QScKrSs9k1UCg2sq5fEtJ8G92j2jTF7CpHboWbBUFemjLem3gMU3Ad4LM1H6dkvaLbjg75qZi55CWk",
  "key7": "8EUceLeaWhvWjgqVevkxovJsXzdCCVzYsEV6xxFawcifLqJNCVURUwDat1BJFNtNqzCVhUPtyWjzd4ZzkmpiWWL",
  "key8": "2zo3brY3GsQmLfNDqFiU671VArQYsqGpyMRHfbPbZ49b6bumKkqwGfdMVtmnWYoZtAfpVwuZNEebeQymv1R9F6iY",
  "key9": "2j5y6D7GX8QsChkkWGDhRzyeVEVicUjKG8C4cqbLawtH357ejmKvFZvSJMkvV5Tcomg8eTFbfhm2VLDMzUTEs4LZ",
  "key10": "5Tu5CUhdcZLEq4Rp9v6fPeYHY8D3pmhjSPZu7LYfbaatKCQYbyjE6rpoeX5ZRnoug7xzhmAb1VvwXTf7Fh73swhM",
  "key11": "VyJSzDdV85rNSvSLowntxRTjKckdqLaDprzM3a3vsipxyjCjubxDY1q9BezMnBNpR7cbKq3HZWf9AZqw8BCRZyV",
  "key12": "5Cv4xnxLKzJzALY9HGXvX7ieEtYAgJTyL1oDWznu4T28Scj6R5dkDqSp61jG2uUKkWn1RnQtPkBsrHtcefCPARig",
  "key13": "oQRieS3Fq1LqaNYuUGk3nbwtZ9oFfSBDjgT9ftJPhWrYPGCadVjfRmq5C59SajLf7pFgiAGAMj7RKHFhh5fXnDf",
  "key14": "5RdVkVEwGcvG8mtF1EwzzSzgMtnC4AjwaUATyM1gAvMS589yPWsZWounDrRKrGU8tiozbuP5DHtbQXA4dJwR7538",
  "key15": "3iWYb1v6y1APGRDaMYqVA8hJ1a7dHpjMMr9U2SBBqHeYy6jUzb2uVQu9xCSvRkqbLmZ4iNjAiDfMSE4a7EFK4EYg",
  "key16": "4v2Z3beJcnjpjF9EEApvucP3ADhswzGb4ZBW35nF3SF7TLTj5mtFJ7noKQzG4KNx9dQpAJ1HcH9mSZs378SR3GoB",
  "key17": "32koHhDPyHFfx3RMneEc84q8u4GhpV7Pbt8DBaoDyu7VrBFqhrLQQ275iNQEGtxvKHYNZcJYZzbNJzdNwpVQaUNj",
  "key18": "5DpB9SCHxNHSFt4TYYJrHN16RjT9qCwhEXJENPUNaxgnEPR9hMgJVCTRUo5qB4dsRzRGAuDcii5sJJkB51TgdpTq",
  "key19": "2aAWP9KammhFdnrzZizJqcTm8SWXpk5mgrEdhhCsuSWtJCAL47pcfCPMitVcE9CfUqDczvXvYidX3wuJBeAf8iAS",
  "key20": "2Hiqf4QJLHywEihp4Aea2TkCJB6EpnxAjg4ky1QDdxXNvPhDhMCTWUw15PncXVzGgCN7o1SWkghEXkTpXUAWVSNH",
  "key21": "NLocufyAE9FZT76afie1bt1YKRuzuBuooJyBr5DPerS1dMa742gmSWBtBvM8XPXNUcwKJX9YNzfJbsDPLRsVMZm",
  "key22": "VbHtXQcCYWeYbiTyfLGUDvx7tC5BzZL3fB3aBrVwxEuFjWc5nEmxUNb8Jb9zR3QPYmkCMHZdobTYo2DWr2GkDSx",
  "key23": "2sEFxPfJV6VksBXQ46of3D7o5B5NUGThWJscoGiUuzgsntoBmzTzZVB3qq8eDETcfMMHKpmrh8BKPt1rWyzgBU88",
  "key24": "3ZEqgQkeC1T3d1T1ex6eZ8g5oZdzkAZBHnZHE72z62PsHmhoMyX84ibJe3LZYjjCRU4x36TUMzf8ZtN6e4Y8bX7Y",
  "key25": "2gX5TQVt2RVA16GjgzaXdbtMKC9qaSVxuiHmaQQMyn7VQFkCDLyCS8oPJkVGALw3XNRdG5dF7ppe12wx59HqoZJB",
  "key26": "4fGpGDRsSzydN96of4eCPhDYU71SZkc6NXsAitptvAF22TxEBrMfg11drBohUnvpcqsBPdVNg1KNyJ3qtCwknbyz",
  "key27": "2RyeZuTMczNjSyWb5YqZutv17tS5sP4FwGm6nRg9kDLe5jWWpeZU6ACbFkxsDdmXbjwEQtv38VxoxPEzcpNU3hcS",
  "key28": "4FBszMZbfEsfg6YzxHWjLBZMm3wUKCsirQL4Y2qXS8yruDnFEjonsuTTn7X2CKfEfNGbmvWZdDZpLXpFgNCxSxQK",
  "key29": "2aYuez8Ar9jM2CJPdPVE8w8MdzSEZEKT9VV7psaXdnCN2q9GPFgQevaD35zVuLaSyJaWL7mR96siwSWKWf7wRp4v",
  "key30": "HFthVTKndWu9x5EbfVpLS4iiWRpNeXa8LxeipxModt9i788kYgVKL5Tv8SazBoEcn9GPsypogwc8Uc9335srBRL",
  "key31": "5Eji4mAeuNjHrkVpHbiauhuFX9G8E2s7D5BKnDPwFk1gVoR4iuVF19xevNj6JrcVPEYC6KgwcZdLfnQtgV52ciGo",
  "key32": "2neVyDbUGPjxeypmzLoXXYTkNyKE99uq6BM8yLnJKM7sF6nLxqNWFrA2q6UV1D5oGXXUuZfqdZSmiAriNrUCB9CJ",
  "key33": "onC5w1YWdJB7n5VtiaqsW4Xomr1P32CEA5Tj5YwCupzWLmyJbmXr2u9pkR7CMdRr3brmUK7CNUk8QaeKRUJ9UsX",
  "key34": "4jWm4bN2BfcgfhvHqyZyDgeATYV8WcauZxJDtZfihL2A7fByzcZFQetBU4UdSjZ6ueVyukhDdTriM6AoSQdGBRwi",
  "key35": "3RwSzAaq3uvB4J1GFF2mvnEkEkb9afHrbwrwd5K3MgNhfw6c3W1fzegt5qwaDLCYRVNtumiSSZkEcr113yG41YC5",
  "key36": "4aKmGbZsXYyBdTdGiyfdu3k65QXhdmjLYTLuUG7iTyuhDBuLMw3VuAzh5Q2YAc7bb2VBKVq5jgMRjRvHKLU8FLuN",
  "key37": "4pdXch9fktan4EMPkF2o3rk2ZR34xVFa98oaiz4cwHVrQth6SX2mFtcJ2mcNG8Vtnf5L7ZK62VafNHikkhL3e52G",
  "key38": "VrDo5WLMvYVcX5hryPc8wUWnbLav9W7z57VvqGKz7NF4jr6PZFJW1tmDpBsRPrCJ7DkRGqZ6GQZLQ8oVRGiMFqE",
  "key39": "26YgWvsNJ8uXft1rmnaEjJkyPUPpgxLPjqtW4HhMP4D1Xi8s1xqgoCwg3he8rhtYN53bCsq6rjhmyWXfbCDZsQjP",
  "key40": "uTEr9iw172UhUwjEJNgQBbBu1JRqs1TaC8FtA8vK4C9nwS6KVabE6iUCGA75r6KagcCqawFygBRBgVP6sK1zZRt",
  "key41": "2YCA5GLLDwQ3kZjMQ3VCeFsDWJwdPi3ibfNcwTQJ8qL5F6smTfqHkFjGbfxif6DaL6j8gCXjUyUEBHfCK5zpaMQW",
  "key42": "4T6QYjL1vKC3b6ysU55EfTJ3dACQqdtNBJa3UQK6D5SvEiuuo4ZBvZncfFqXpc2xq4jzxFLKF3KXfQArxdzP1H3W"
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
