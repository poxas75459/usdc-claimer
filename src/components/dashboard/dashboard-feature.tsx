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
    "3qG6pusgAYHfR6S3HxAfatYzuWkVA5UXiF8sj7cge36eXoSqC2574d49o7YUH9NATCfmsZghww5DdrP7PNRdN1e5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xje64yaBG9pjoCidmDowptvuhAWku4q6WNHQ4vwnd1nEnP9SeRBxc8VeJUAafHyoP3SjSkVoAYyzZ1UMipWokjA",
  "key1": "2JPKSH8gSPzUNfSxaVFBdKd1QeXBvkmw5feR2V1SP2fCeCBvfSNrVbsodtyCh5uzae6LR9TCGq225CRe38mUmFax",
  "key2": "5vd2v3tWiq9uhXToGcamL687dGyqHmQfqgHSLNBp95TiEm2u6Tta4vHaqHupuvebRvwdttLW7jDRZ8vQVrCfz3k4",
  "key3": "2xr8GzdbbP9FUWcZea9CYfk4wNwKjqV3XpBqQDeWg9CvbgDaVDCbLz5x2Ycea3F3Kt3t9CFN8zxyCVcYrPtLYvAb",
  "key4": "46ap16dt1EpKQNGnpTTEVykrqPgNKK1cRvt9c2pqj8NiLX5qiRkZ1SPqzVAonS19uj5mNwCYGXd7h6BZGz17epSJ",
  "key5": "2EcUQJyyGRmGefk8JW7oMR8gxvWVKiW3sPJEJ7qkCJWefBgBemgBCfiWi27vSkiAXjcjqLRVbhN3aZ56y72JVnrv",
  "key6": "4KfdGKayfBi6PDZdjHXxCPDeZ81Hg1N4VKM5EQYPg7qkMo5TLkXmF8fHkX9vw5wf2Lmr3V7tYqNn6Yizvtmmo98z",
  "key7": "bR1XRvKTACsTMLbQQKi9Pua1G5YKcozYUXETSYEn2Szf4oHHaKdf6AJSww1wUF6K2GozsQbsyno1jeAh1g2fEV9",
  "key8": "USy59Xff3fW4geEGd8UVhZELRCGSCzrB7b6TNQ8ghKjdqfDpw3nLkCTDTFD2CFv9jFQDwcGuiyLiJftrrSHdvXb",
  "key9": "BWwLoy73okzYmTE3iAPqBYYVB3z6rpF2SiMaPgCxgqJBGVcg8627oFG1jqQNfUC2Haf2fc6Ej5L8eQFBysx8mGY",
  "key10": "2GoqZjsgDtpJF9dYqqnvJQx22JHH4DeH77xQKcqajh1bswpAxqnPuBGb9TdkdEfMSxJRMv9FEcPniE32FGLR3eZy",
  "key11": "XbK4T4xufnwsKVEqySxvDEtXDFckW1mpTgU5hZDFL5UgkQaSonHM9PeSK8TryChytMFDyZYm5ixjemT2i9grTCr",
  "key12": "49yE55ikkFqwk15qv19K6VhdvfsJdELP9haxArYjRvJPHhmdKAjDf3S7CcGfp1Bua1qpdpJ9X6ertJRbypMUjF7c",
  "key13": "245GBvyz8HpXHdVhL8hmKNxCQsGGUYSWEtsYZK8dvMc1HVv5L9Qa6nA8SJJ23JPdHfoW5uLqse3v2hfj2x6HbvvV",
  "key14": "4ogbJ1bddA8n2r2zjNE1V9s7kro77V89NXBtzbdvB3Q6agCPrFduRFS1xy2N2o19RM13o1aT91iGQovxr3x94bNn",
  "key15": "2qMH6eGfmGvjUxVvX6qxqY2RSWFvQBrnMRXzqkEnoMyKuPZbxA2WghEQsHXSJuR12EGAvkoDpJuFZBErhrt5hzjR",
  "key16": "5qMZDzCSfkYqmPRJEkpsBmuSftuXEvQNc1hYA9kJbrrkpcfmuB4o1p8yEYPo9pGEfDfDa53L5qy3GPUiiqpvfBvG",
  "key17": "2w72VKVv9UNvGeWrvxyUjsrdoB5eQYLujMHyv4jHKQrrPVn2Zwj5pKFnwuYyB7v8uwMgeza41btnTDkSqeUe7uNJ",
  "key18": "5mVzbRSnfaJr2cjS8aGR1Qb1FZL96bYVzyx4FtBiEKhnXsQcFx5nH7NamFm1P7f6bk8epQ7WvQF8NAYjWQCVctV2",
  "key19": "3ftoYRfts5GzpMpBAvU6vTFz457LnvSUeqNNmvRM3G9CYifrcH8prWY9VQBUF8Fp4c7sTRgPiYCKLZKEnGgikJpS",
  "key20": "3uwVSqH71DbGGWVuZ2Mmmhz8jD4JUnU9jyY8rKggykWT9DqCxeBjDgJprhpD3KLXHckx4dTLpQfKxPkDQdagJEjh",
  "key21": "5wGorX3gyRKbA1FZhFGmvqMzEXT7stNbbEJoAYKUW1BjpZmbGkGW1TgrFY8q1KiiAPGToi6LhMZtT9TcHzn9vfQi",
  "key22": "4zMtTcrTEp7gzrdbt7tHfrLhfDmpFcwC2o5n4Fwd2qK9eChTMx1wyP85sXr9d1nn6dnB29Kc7h6iCURzKauM5wSr",
  "key23": "A2vmPaDczv9jQB3Jk5RKz4MQL7VqBd59UkTzfxXRuJCiDECy6Y7dmzzyWrEyX8bdHiZpbgJWePT1BmEWJhm8hTd",
  "key24": "5KFV3R2upWqVE7ocWzGL9fC9hLxZCSZLf99GXCyocBNXNxbqx6LmAVBgRjwcTz2jz4m14YptDWGhJMQrfnwzREQg",
  "key25": "2jmDz1mJV8Yag1SXBt2gbMAaihc2BkjR4Py3J3JMcd8kNFv29wDx93FuPifhqfqp7R5ohMBMxuVXHk1vYpjciJ3Y",
  "key26": "YoaEpeEWmvXxWWcQcgFzABsgXGaopNTQFo8PvXuSQBGAaP31gzPe8TV1oPi4UdZjbERQ3daMTynNyn6RktNS8ex",
  "key27": "2wnq3PqLVtc3H6b1z6gWBsNdTTY18htruTe6Ggkq6ZzsmE1djBNksJmCukSH2vcZ8uep6qyoGWk5H4pAxy3fQsHr",
  "key28": "5LvZpbcaUaVpaRaEUqz5LYWxcUPfr5AbdMKRL6Quf57UHXsn1dgNjYwWa3HzALsftzfn5H5c2nGsSFBwVEtaNrQS",
  "key29": "4D6o1NK4Y7XPZsz5JkouG21eQNrQiZdyXKwnKDY3ei3zTWfTcBuvPHbWxT8PARax4H4wDR9LhECbzYPe57WxFAYt",
  "key30": "24wE7GHTThj4fpqo3ki7Q6BaB3pBADJALefBxGwSH9SKz5yNndPcRLd2HLq2vYNVVuyvj54afgV6q5UEndj351dc",
  "key31": "3LCXf8rHsVFByJZ3yh14Wr6ecxiKFyhbE3Uhs1WBdqnKs4Sx6hzugTcLaKKkbuWJ4fbmDqwtfxEQWRATKV3GvEbg",
  "key32": "2eV6ojEmGWe3aW5yvTVqK3hQq5rJCy54TwHjEKCi3BpTHm1uQaM9HeVdAcMLqLCqFjtdMdW9DYfEWjCgHDjdTgnk",
  "key33": "2qrhYv5BbDxb6KdCSkco7SBZKRaLesc8XbmZtdAb4W7oqPP2FjCuqMopUEhWV7vZrrgpS3tRZ3KxuUH7f949jXib",
  "key34": "3bqvR5x25tPrQPVY2xVk6eYN8Hm5vkNop2dUiyZFZRWc8G7ckkPQpoxk4geVZrQgXBGFxqXsCda2AKTxma1yKE8E",
  "key35": "5fwD7TW5C83YEecVNZxc91qbhY8qncAEfzgrMonZyzMXoxC4A73RLUdJQpt92gTW9jNcSyiZsfQVqnhFnA23pTk9",
  "key36": "2e84EySbz91NqQPRoBjv9ER2NRNESi9TDBHqHGMzJ36Kmt5vMsQGbaKFmJKyuth2ckkYFL6NGVpEPjrsr4R4vWtS",
  "key37": "2tNfifQwekvGAWNxwubaxGzjEYvemSwmXZDJM8tDzzAGpmp2AWXR9o1dLiPZ75P8fzB1wq8SdFoMjwFBBFwaN8HM"
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
