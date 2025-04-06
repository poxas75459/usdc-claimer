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
    "5Sp1e9E53Ez6KZbqyr5mjxc9Lqv1W99ha8K4yxdq9CLJRaFHnCbQZAauikWaNHvwzRZU9bdT78CqPz21oX6ky7Jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZgT2wwqZbLLaPg7H9SGFTpfHZL9khSbxTDetMSYEUWdenVbeAPdrmm5Ji1ck39FFgheNWvHNS3ZvsV4H2J7LdVv",
  "key1": "39f73Fw3DQs2dcR5fkEw9LPJnsvY3WgWxuEUpUNpbXykgxNY2YBjxZ7CwsWkE4RSXmNjjuH6ZqF5Hww5A82FHXbz",
  "key2": "538E2GrmRGdZ9rT7WURVFENCNGQejGARruqx15TpewZxux2DNUAa6vnF6mb895ek8Wkyi9twfsHKEEAVY5dXwsaR",
  "key3": "wJc9eKPH8gyoamaf7yKfuG7e5k2YPcxA8zbLmJoPd1e3rHqvbGU61BCPMqsHmka32NsnLQ11KyW4KBmvQmFr4rj",
  "key4": "35D9Rn9WMju7PwjS2haMiaCM5K9NYyrqgZx9eK5ksTUKTtGSGXNjCk5dXtAN7A3HKVMqQKNykqhw5vRvq9oGWQtR",
  "key5": "3Z7zVwrqA9wAxC6iG4CrEuRakBraP3yEwLYqEFDZbmLFWowdydYtRnqUdKi6x8L8hpAPmMeAjs58tyJ68sz8t8F8",
  "key6": "4LS7eEqMcEgz5UNCrUDbm7A9UztrmuUwVJGZJRjWNmXitr8MuqsZ6DijJPhx3ce2GuYCbYaZRVRc92wobmHLuJsm",
  "key7": "4thDhgoxJ3gbHr5ZRcquqs649kdxAQBb7AzF7VUuUvFifPsuAqxawQP1wPkFTF3Ee9N7dBB6mAhhiFBcDRbZn1Mj",
  "key8": "5h6FxNHyTpiaxFRPvR1dSV529RJogJD8EbrSpui3xHMtmwyAvPgF6ojGxjWy3szcKnCTJy6dFnESS3PEfrN9X9GX",
  "key9": "2fRoRHM5bHEp53vH6PJ9ZYm7vdv3fssApNouwb89uHgQisZNv4Pv9yPp1S61JSxrPWtXeWsxYkWSsWcp7Pk6bBHx",
  "key10": "2Zfhe9UGF4F9NRtZM2esxSKMSdkiLCaVzLmScyhEa4kEBZCh56Dnh1HGgUfm4jmooXbRnLjYRvZJETnujf5viYVL",
  "key11": "URJEcQHxEoZ7MkaeH6tsqMSMLVfgmqiUce1oVP91HkJBM6y5w7ye7HsPGDnRXdCBUWzEEaFrGqDYom1vPRNr6EE",
  "key12": "2i8PiCz9FS1u1M3U4f8DbGfKrM34CKb6RLKiJTtvrDykmgPJcr1FzHTarYLxkXUzeX3UC72kzUDY94iTzDkkrJZ3",
  "key13": "2FLaLKPnVR88a8NdqXRkRumutbgCQsYXYWN43MqDZ4Y7x6Vtqb8ht5GF6ntyweVjztQ54E5TPYLep2SyW658a6aS",
  "key14": "kHkZaM84a73y8nX4nrdFdyFVi6o7pN7e8YHvxXaQdCXYVagXz6ZbbumzyhVi5a2quwSGN7K3xViV1LatXLamqYp",
  "key15": "4ZiBgUjJj5ZChAc99iHri114EoJ9ujjo2gvsmaxqky8eNpzuC1p5quMbcRxbtGyRtNoYfNhaWiQ4hKnLYHHLFQem",
  "key16": "5hY58AmQ8hmHTb1JdQobAQSgZZkRbMWAbVqz4iZGbxqRycLY8wrRxNgKUiZ7wTvNzdr6zJc57DjrZNVd2yU8X1ue",
  "key17": "2GyZMmETSLFYAYbWn3PtgjJEtfABKq7goRuG6NmUSGVLrWx17yQRgfehFKoibXTLBbG1joKzyJyUqRUinDLsiekB",
  "key18": "5nX222r4Wavbq3kb3KDiKn6rVZG7Yy3fitK8TzCuBMxEorR2iBWwyBUBrP6zNwCgLK7AMDXQ2DRJFc3wAwUBU4EB",
  "key19": "2AHbCcYUoK6FJfkdSu9nRgwTfs7Tert2M9NaTfTSF67wk1ByjjqzHRHKnqHFJnCsS53eeUFmzhMvVkMA1Keyp9XB",
  "key20": "62KXrGMRcQikMvnvd7YsN36sNGyacBC8We7XWq8srBzn1FCZzp8rPDr9Sy254V9zj7KRoTYDe4chLwuf6huaJxqN",
  "key21": "4ufTtYQHc25aqBvB7VveWSShuBXGxGUTRqXWbnyqdeNwmABn7pAPrpNuTAnDdeP5FuUXBqog13Ap7sB2cecuucYr",
  "key22": "HML8GexMAoaWV8kSb4YYcJXQ3Ppi7N3qGPxnGLF6VJaDFujkwdG4uhwWcnvmkGvmexop9VW3WobPsAqZmHftV4N",
  "key23": "5jvm69vs7tc5Mm8Xxk12oDXfzdgNtwVTY2yRDum2LoNsahpBQjvXZhcfUjS4Ph67u5qf8dhdLQ95tD1VCNrqvwKf",
  "key24": "3fBYJmfKnPxWAWUNv7NDx5Spy3ZcHgXd1ssU3wa61MQkDMLwtBRpARA62mPkyC3VKAVePcgnVgiwANyfJ6PjHQTn",
  "key25": "4gAnF2SD2mmUigPBXZXueNGAf8Na5RSr5HxFvEUs4bxBzQmQndipZRC9mKYGb9e8qYMc1CQxwMtuHPUNW1748iUT",
  "key26": "2DVZUKkXmG6vV8yJTUAABrXoCsvRnAfZNcwYergKjoTT7pQ8ChDRs5z2LeQAMuiNCHpVPtvy16MBzSqF97nCE18n",
  "key27": "3uNp7c1JLVBp2EqSRvyQP1PqL7BZbkDdXS24tc5KmEkW6abisb1cQLKR7CYLai7w3e5r5wTC5fJaWyzesev4i6x8",
  "key28": "2qax1LRNBikbFQGHPKSFSPqRji4SgXw3czkNq59x3sugtFhnxJGk2zzhCisJT5q9LjBZfhzcXURsQhhPxjyHNZnG",
  "key29": "3RzuEYhWBQuY98xmPubDuHiaNnVk8NgbyV6aiJMiTZGMJBMtf8HBunZEY79RubgZBnZ4jkfD7bcBLCS5Vowj5qAK",
  "key30": "2bTpon9gGXNNoBGW7hafkeZERmRqFyLeuaaWT26XBN7UNDZVeuaKatKYGbBC79LxzLKBeJMrbktFbwDh91Sob6TD",
  "key31": "2CHKxSQibh8x1dkrd4uVY8ksg5JAAAnhCBFKmtx5n6w4Qw1kEa7oicznHA1QzSXReYCraXNECubPK9qQuWmUvsAE",
  "key32": "3RQebvAhZ25gh91Th7zKihdey3WKgE6hjjcFghJ2C8kToqNUy2V3Hqjsbk2h35wudbMEB2fN5uZyEhyNV6kW4TEM",
  "key33": "41xAbrx63Szn8Etw7Xsh1zDmDz81ozuDwnmp3M7yqqrSSuMBwW8qswFMKPKcDAgATVdQhXmgr7HXJs3wJpJg2jP3",
  "key34": "5w7npk8xc5qFT3XbSSxzKAXeNYT7ahvprMXMy8HqDbwP1bukibXZZadBYciACg6JQ9EiFUWoiWW3X7n8XeiXKcCE",
  "key35": "5wXjqzpS9LbqyHRqgNnG7Bog8DsC1DYFZrwMNjy8FhYrY3zA6HZhRy5sQLWceL9Rk5tAQavL7TrNGb1UHCqYVg7c"
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
