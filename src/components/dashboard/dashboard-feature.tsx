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
    "2J4jRhFM9xUCyyjDsR6fpJTKmV6NhTJgDTh5SdimHCBnW1xpEStMmPftkHM81wZd5Yz2sWT5Y9u5T6mkgUhpD988"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VTtPwQVTnDuqXKHnXimnN8L96d1kitpELFwsQcCRga6FdnidW4HDRyxtsvtJLQk1NkausWd31kPH6uiQtQmtcWA",
  "key1": "2HZgfc1xWc1Fsmib9oeThfQpBWUyMvCyhx7VGXemvv6nRhkp3ALueHvB2i5BhUh1n4xfugb9aXh53w5n79TLBHSf",
  "key2": "65URcB13YYq6rnppQtUBKbonct3UJ5PJ93TqgwhhMszLGHUd5KJy8FjUdNiigtQYTV2j3TaCB8Qs3rwMjqHwnfwu",
  "key3": "zpHshnRy3uMYR2vTgZUaPbkYh6SWZuY1XuTnQkugzMNQeRUhBww5QhWX6qvuEBAeQWpj2RSy5vUoWDZNc2X6iXt",
  "key4": "35Vx3BdVdULQGnzhGyVVqESPsnkMXVVeBy2ZfSpkoGJLRAQuUw8WLwABzFoArZwooAm9SSZwkVqYF271mBvrADBx",
  "key5": "4rQqDWjdFqM78mpYW5e1NMWamZcFXhe6BfwZzppU5JpaaXtrWVaMtekCWg1sbNbNWHxtBU6Fj3SVevUBHAe3EM3g",
  "key6": "3ZPtX7VJXb2Svj1Yqz3zV3ac355qmsJeiWEyfGPH8qkcqLhr7xHFJwejTtXEgtqv9fLRYpHsWMHDfVSTMtSNz46",
  "key7": "4xToZEouWmwR1UZGnGJTQCbs7ayKRWp5tSWno14PSeLxMhxdZ9VpN7je78WFjJRF3pXKCp22AT4Kk1VMAWT3WRFK",
  "key8": "3B97vRvCRoL5d1iQNnmNHnZ9cokxikeEsgxKtB1MQwm9hYM7nRZuj4CVyhQPVkdTeDZmX1NN15PiXfWM7rC5GD64",
  "key9": "2nBWZYrYDwzSAtFMdC2FRuNBRQsXfKs7fvPGJPEGqxK6buTVJKxMpMgfcATRtPi54GQFMMEc8EKK6GwPJWzdzTUY",
  "key10": "AN2D6Fu7CZA1giQXn5YXiENB2SP4DJ4XjGbYCz4546sbms4yfCbpQEhmekac8L9ogFCYFXTrDwA3XRUGtZMwmZx",
  "key11": "3PxpbxVvqVyT6KdYKhbi3DwEPsZBDMCnTE3RrGYsY2eyi434ApcosAGG2nq2h71HiMeeU8f2MV2FPaCqm5mxEXfM",
  "key12": "7muLoFP8RoSbPh6VkQS1jcks8NxTvEEyDe7WUHsEmVbkwhVcB2X1VGaxQXDH6YHDWM718A7ZTkqat3ncsLqbmyx",
  "key13": "5vHbgDQbvsVn7UAmKNUPezXU81smjQYjqNqmngRp6hmvhm7PkushL2Mv7JqUNhbgP3z8SGi9o8BcGpqse9fLfbGQ",
  "key14": "2kvaWeGWwecsSckPHzth8DSJ38E8b6PcGHU67JkxuXoXnECPK8RqTs87YHnyVXovjHZbUfhr1HGkjGhTEF7kt8GU",
  "key15": "35ZZ2J7g4qgzZsTAYF6T2wMxWMw631vd9fe4UNrGKejx4nb7MGq117XA5NdxS6ZjV7xMKwqsYNneZDwpKCmBRePX",
  "key16": "5U26bZuTgmRDnrfDrosZMPL7JTPzJoHNCoRgdWVxQWSqc1umoHkqxWFtMJRfF37azSYxnVM6bLZoJ9hkKgbMwpyn",
  "key17": "65dP4SJJRZTKbPLS8f3fA6xGUZ4YLW3e3pD9ZbD8RFVc33af2dhaMXrRfkj9nN4TbyHvA6bfFgEappHyVNRQYPQ9",
  "key18": "oPiULG1WncuXDHRbRoNKqczQ6wH2h4RYTGYUwcWdAKSgGBK2rHgDF3KEqqiW4rLCKBerbSQUh2hmCbH527B3kZ2",
  "key19": "1VSan7DSGL55KDNoJAJ8YvWR1HjBspLwZCPrHfzc6q37G8xEbFFBwuAM86ywB3AiDehG3UTJGGbPge9kbeU2KLB",
  "key20": "TfJZvA4WgTqf9Vkf1ojUnPXEVDhfztcnmyjTRMUfwsW1zQsVaTLGdG2YB47WC92D5trqkt5pwcLcuqgb4AdLZW8",
  "key21": "2ewwVvzVSfm8GEcmoRiJF9LG1A2LgEJgDKLVdMod5PLRLBXk4SGGzufcY37THDMK5Vc3RJ9og92DqKfqRri3wHP5",
  "key22": "zU2z1RsDKbnxvZT7S9CBhRhjaDkJqCpA3v9Rs3NKr9hrRdBe2Hdn9YfUDh8Ryb89YujgRhQWKR9AhtzWuqDUdiy",
  "key23": "52Pg6g6pGA7Kd93pVw3r5tM3MhX9RRGmNkYraf3kwn2FHaCvCrjsoc6hzkX7BeQfGtQfu99Q3bDocszi8DssazhG",
  "key24": "5DpRKSR1UmybkZ8Tg89WVYK2oQ2BTiGQLRaVSvux25JAFDt87NSYpcnaTETHzKXHKeKuCpN7W2tA9XhbJnQQno7x",
  "key25": "YMLVMzRJAesmfNFVg7hk6U3pc7J3uDabvPq5MQXpcBXsCynByeofASCqQdiBi5ZQ4apwgtJdisQc31ehnFqhd5N",
  "key26": "3mKGxBLGaBFKYNUszimqLM48aX2iGeKDMrY1KWQ9U9fWm8XXj3mLGWzVnAdqpCDQ49t2hAr5Xd1Cz6G3S3RHFS1x",
  "key27": "25sytoTRrMn5Lv7GZqPvWgh7DMvLHR9JTCPpZ3CYEGuAjqrnUKYfXWUPoDj57J9fLPX4Rwwj2rKLewNRLknJEPzv",
  "key28": "5psHxPovk6n3ih6huNAaEa47XqrdEf1JDBUTAZ4EskBJU4AJNwJgTDrwp9yuNXX8pwgvA5yELskVow7L9su1xLyq",
  "key29": "oKLXecfNriUzBDxEiyKxBd65F81GjvHhGiPMA7wD14iPMtjbuXhxXvi4USmGcT9Bh78R8WvRcPmg1itQc2RtF8J",
  "key30": "3NPpQZnUKfbPf6NTka3N3K7JDx1FRPE8ajaARgh1RmV5LE6AAzBKs8CG8uhCuV4Rbd473nPjFfWYn8WMvd9hMJvn",
  "key31": "43gn4tPQsBSB1HeyeAPS4NVK3B6UKsYtzvV5HC76UUZk1ieMLcXFxM8Zy8A9nN5mXxv5q4Z7jCFKuAcgx4XCqsYR",
  "key32": "5FGvS9ccRmBow34XXRH5KxfYXe9abpum9azqxRtbU4xcTx4m7NzygUp5nc3P3hHS99N4THWAXhHcSMEHiS3m61LM",
  "key33": "225sM8UwqSN2oCHiLYZHbexUUXEoxfyVFjugquN4gEthv3YW1i8iEnrhr5hjS1fy99eYHdY4wiws5c9yrUu8YRf1",
  "key34": "5ffPnhKLAJSB8SRoW9VUUksePjkywZP7669yR4rxv1rygNYHggDrqj1HhUag39s3MVqKXG56BQ1QubUNFXnN8LRy",
  "key35": "5YRb9rMTohycN9WNmGbAfxkFVsv8VoVMgeYRrYQASqgN7rZUYvonkuBCcJTZtBHxrsiUdnmdu1r2JxPKzGW7YPnu"
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
