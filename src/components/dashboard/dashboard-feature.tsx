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
    "4fxWdc1e41WX8JghfWPHxQvBn66ds6ridkhUDZSCHRvCtQc29ncQ8RMqkmkbHc2UWP1kNLfSQ9oeXfQU3tko5cve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "359MrRtAgNWgwE8jqdQiiHxKbnXeE1cPHyjBxV7NtnNM3ThzPdBg9iF5XD88BBDaizBf5o5EGkvNMK669DooZxMq",
  "key1": "3JFdujnooCQ4VbBxQEmHSjNG7W6jDr9Vi5L37CaqVbHVQ6pQLSHmR6QjyazgZEUbSQ5mRGbttCoKmMTPGxAiZXK3",
  "key2": "4hnUmc3aLSBRi7g5aMt8Y49QrFuUxgEhvHCPaeyYDz91FuAsbeeTuFWKhyyUhik6ZV6LvwUhEgHVx1aYUV6hKcGo",
  "key3": "3f8uw77CFEuc47E3hNQvxREfDB2euZZGpc3MVEtFAGb6Fz7WDQZzHc8nnnaZaSTnv8o95hZmMWm8cCZpQBtAPWDm",
  "key4": "4UZqn5Kj4oeYxWsLVcg1CqQYjycCifBqDAVjZU8NUyxtW3Rwu48vMRtHwGZ446MWGPkUiAWd9Z2xeT2fLeHZLrag",
  "key5": "2hYtvyHGFjfpvbwmxWyoXjdLg2vDaiFaxFFR7DJFadWwE14GR1FpYrP3AYoBXWPseFUvwURNCzccJWwrfZaPLPJV",
  "key6": "3iwYTQsxCyT6soanzemtBanurFLrWJqpvcizB2ip3gsebxHdLQNBuJkMK5ni1N7bgEZe9D8w1Gzjo6Y1241LDXwn",
  "key7": "5EZrRvsysKJ1kUDCgPzXDynWW5hrv5dDBdb9MJ1AYvsxp4WH3AC8fUWaKqCwuZ2ZYGzEdL1w6M4YhVFw9q2JzRrU",
  "key8": "5kiTeg3NL2tDg6ZpDFtNtrfbHyYWkPEmS5HN9HxezGsqjKgesM4LBQjb8jMeSkZtcP4LyzQ2t7SMyyTBQ2b7JBZ5",
  "key9": "3TiWRMaajpiKrmqYaywTDZZnnMBz7ppks5JsfzRBEWU6adiWhDDfpDd9TNvH9TU3rvQipeBBsb1e2NBNvdUqLSLt",
  "key10": "3xCCoWNC2Kx5jDVojbEvxtkF2DnHVYCXJwfuyjAzBPAYbSwwfwmpRb9mWz6dSwDUYRfVpad2LiY2KAowjaCAamZK",
  "key11": "4YuFWCo6kUuDwH8J9QUbxMJX5ACXxwk52MaFVzUgfDfXs6cSnkvNPSyqvDSyLK6kPccUrMZZU3bbmmaQWgJqXLu2",
  "key12": "m6gfpyFrFY6fM1cntMYGs8WXNnRVNM7EfY4LmMa8WL7yQJBvujKu3n9nZpA8jr3xKL3fvPeFvsyyYMCtNpm5Mgj",
  "key13": "Qf9BrtBhWvHPsVdEknMRXqoqpgF1EtLBkKC3QHMWPETEBxVkQ6cGM4Cajhdg6uQsKCeqTappqkfxQSZUehUsRRB",
  "key14": "2oXvZ8eAbLAxueh7bd2TJ3EMm1AM9fT5aJH16VuQy2CuFCELDB5d3cToxwL6KdozdyUpoSxbd3YGWah7EBzoTt28",
  "key15": "4RtSAY1XEZfaqq8zYfpDz51tzg9meeoUHoyZM8xHyUtNEWrKvQABnWY63ioQcHwHc4PnmGoekqkRTXCc47tQeFtp",
  "key16": "2wkvjKoAKQC8NESNBAe1KcWekaTssAKkMzrSYaUiGKxuHBeX9c2CHVAgw9ZNpdTbTyL6QCavBQzUzeKbTLgZ4xRc",
  "key17": "g1d9KLH8NGrSv1WwTDG9ZufK43LpHaCZLnboDtv4D8MpJg55QHgGPbvjLuQhALiBFwyMWLz5ukwCzFfDfC6wq77",
  "key18": "fBEiQvRr7N3ChrwX7kUizEHz2hahYXMi43ox8VMWKebrMfjGtW5tffu6PbZHXtgr7XuYcZcH5VE5PcKr9kNoQUK",
  "key19": "5tJjiSBd1FRmnsmZXPKALB1DCzLuSbpQ1caAHkYf3XKfFWiCYtTFUJ6FQxcwa4dgE61riby29jJj4PG8NTYSwq75",
  "key20": "4AhMQp4asgvVfzwxXUKbyS1QM95BGpdd8hfuvTMCd8nqYWmT8JHkk7NmUWdN6C656LirJcbAomixTQCQHsyUahtR",
  "key21": "38fd6XPdCbA5JsRyhKkFfhBne2sVKygCBkM4efzUNFzAUWGKn8Z8sMNJhbz1UFBwk5vXb4F4YcdGHJQPADt1EFDF",
  "key22": "4bgg9hZKt7QfuJqD8sEYuwhS7b9bBJUHPwjX2brEpRg9XENnHFwXD5XkKTUzUYPKtGc6ZHerUfZv6oDJiG4iwZeZ",
  "key23": "488bvwH1sen6f1PTnqVv7DpQWrxhqZ4huT1WdMtu5G5LmCcihM1iL9URQC1HkVa72M5WuAzLkTMMmQc5pi1xMdTx",
  "key24": "iDc33DyuV196nHxrgZ7FtKyVRez9PcDLVe2xowfNGxD8w7uLJka1ykoABW372NUkdQ1EmHABXQFTzBRmko39NC4",
  "key25": "55bf874mPvTWy6dKD2rQdsn4n2UFnS4imxVUSgJCLBbWSW8FEMwMo41NrcxLQcXXy7QNUKDfMscDjU4Jqj31zAC7",
  "key26": "2sMXT98PWrQ3BRu7y3DqzLgrzJcYLPxXzTBcSwY6XSTv1nzjevsNLxz2BZ3dj3dvphNDjYd37o5b8M3hvukb9Cx6",
  "key27": "5GLveGmaGdHxjMrwTkRhwgR2aWurV7GZ5Xp8g16s5hjMGD533WnWk4Amnf2cwEqwYqNcWN2GMuGMuhmK62vYsjrj",
  "key28": "2Nw4843nqhv6Zxqj7LQ1eGL5hC3ocXE9aGAAfBDkYsuQJCbZR3QmG7JV1sHWfetLSgtaJUBNcEw7msbGWCEyhDbw",
  "key29": "2CMe1iMPTFRKz2nQ5i4ySRTqUEgxuW9ogk4M2spnGygswBzLmR2w6VJhq2NdjT6EZ7BEysMM4RwwragZQMd47C9K",
  "key30": "3zrzFRcpBwFftSKZT1pTuR8GsieNxixwBDRfJ4JtHD7n4nBqH2knY5u8y1eKxjo9fcSVwrUuX45hv9RCVcSrEcFB"
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
