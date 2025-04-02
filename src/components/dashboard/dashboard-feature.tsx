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
    "xns1snecqKPqorwQUEru7Zpm1hsXJitdGMqRpNJpgfTzApfoQ9sei32iacQQQBxozURHxWncHtU1LjtyL1RReYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VzHQAHWgQz7WRLvwrbeCj3yrVqBT7vWLW6DTqerN1kXhBa4x15E8YKZSKykbXRmKn1Lf8yFkpytwVYuArazabrb",
  "key1": "rCEt5mbi3Qg9mjJci6oxLW4DHWiE5C6boju2LUyWEmTQ4ycFGFcX3nbpTYgcQe51o5ARsEkKiY5FivCJXULz5mU",
  "key2": "4o9ymKWfYa9EDZ2UQgWkKT7ecENkCMswn7pcoC6dSF4GmA49d8aQSdtL8WnMng1zRDrR7CQmBXAteaP9jY1g291e",
  "key3": "2vttP7Ch1gSUrkzGLTrENAYu1oQkhswkittMYp3ycW3RmSR5GUXcSu5W28Cj25hbEubF9uLVciQCVR51S7uAFBVJ",
  "key4": "t1uRaiqKyDte9ExtCAHUJ7diRZYAMQT1bASP8b7DPQuAk1cbUGm1fSfy54Fu6tk1zgVphZy4SrLqAjhuqqXZfUg",
  "key5": "2dZzpwHhj17oQes56LzVuGc91bVzeoikmmn4byVkzTf47gdYfFpSereWMLXxWZXvto2tVRcK361nVc7W5AG3Gtzr",
  "key6": "5pZCZxzAoCR1xKitATJREti2DuhCwk83bt8QVciAvCRuTe3cudU5UA12tM1QhVfS59UkfKrRAs7h69LeaAK24eeF",
  "key7": "3kS3pRV5yUnucer3ptipzbns5rPSjHw7qK5uLv9aejsMYGUjY82d5k15j3dGnvtZsQwTFAoMwoXExMnCVYCd5gNh",
  "key8": "22KTYjvAGQ1WrBU3WvUJiVSYMUBupSfDbuSw7nEHh5FtE6pwCc7WGY7hu2M2W5qtQdEa6mq1w8KxLWK1EwehZbuQ",
  "key9": "43iyevn79tBEZrEX9Ef1cfguk81a3a2keor8NkAX4gedoS6wduW3CrW18j7QDNktG7nViopBnRxNruT7BPnFUmz5",
  "key10": "363iZae8bXS3Ea2XWmcLrr7XLnfsQdZfXGA5iwqcvUvH8tXjMYpPRYtscQjqvTXpxnHM2KWoWC3JnX6pD9pjk8qZ",
  "key11": "514NnZbZve79Asckxv3z1HekGHHhRgi9LR4PyHfDeNKAPL9gKn1Srr4qPXgNwtwbxUdSzYZGrr2f5nxUnrifZmzP",
  "key12": "YZZENVwqUeGCfoRjg8xgspHneQjyCwGmqiWCo2Z4CRzsoBxXTSAzEjwxEMwFUucAku2ZuNeQEvEne6LCSacmGMN",
  "key13": "4j3WFy9dLUADrfJV7SLmd1cucfiWBNckxYTQxfUekQwM69utSabNuZauKjpaGxu7s2TP8snqLnVGJKwvuunJWFiC",
  "key14": "HhLFcuHmzv8pFjNSNQbMAZEjE9cwX9uAKVMz3DtHwmaUrNGj4STaRB2dK9Cbm8td2x5KgnBormnsEtHPviyP7gB",
  "key15": "4zwsKkFnGBkwCCZgoFGn7qBbwYF38NtZc74tkj9h4FBGyXYzi7zMmE22Lu3boAd9CWe76w1vWfFUnSPXuAhUumxM",
  "key16": "3mHnHavDjJ1GTeGziHmWiwUPr8DXWN2n9MGwgUks1UBhBrwqXqxDojMWRnByDK3ykj7QYbLUHTo3DTSQjJS7aoax",
  "key17": "3KFKKcaTDrb9ZzGucxm7rJZ3Us8b2K6BLfXmr2aW4AGd2pF1YteT4W5MxDryD4kcURZcvRHsJymwEun9tveneYnZ",
  "key18": "2KdnRc1DeRGZj9jQuo9Qu9mZvwaZJEzyF82d6vV9zeodvhDrscQSTRoQvjZUvS4fGQsm8bkxnNQ6RtPjdEU8g9Vs",
  "key19": "2cJV759HSQP1S9ZQB6ELvjE2u91ZSLde8LEBZS18J76h8mzu1micgi3BtKXVFWHgmpNgL8AxwjYTdEaMSHNmrwsy",
  "key20": "H3j5uLfZnUrJ9wPzrotgLRRpfGTdf9536dMLgtSQfeZxwqpDfjRcdvDMH8Y7mQAQ6tJcLiFZ4ferbjEufpkgJ6d",
  "key21": "2TbQjhydZSV3jcrd3DCtFtvrVpb6wbspAYbC2cDc3YLowjrUqmWkxS2VU5mZzNjYaTaPhdZ2Lr6GkrbwferKSu5e",
  "key22": "3MvRszJF8SRm5CR9B6PVRrLE4deajg9vVcvNLfq4aV3ECoqVyJnojzc4WZSxSjEPpjmmqBKXsPdgGJ8N8B4baozt",
  "key23": "3tCScewpCP5svwhTU6azJCiLFmXRkZFiCP8ByaMdYoSvnBDLnsuigYFPLMDnAw57w2kZ7nX5wdUyjq9b5JUDeRW1",
  "key24": "3TD6sZTrMcNjYx1bG4htQ4VG9LQVGjDRWuWZwQLFoqB5Vu2Kv8hyE2vDhFsQrtdZoSK43v9KZ1qko37xY5dyaTgB",
  "key25": "2n2TyUA3WSwwUHF1Tp9HBx6zafr3kTduonrYiMNYb7dH4LDkYx5xVt2aLrDDQNDDuUXsgJ8yY9BsUS876aAdeGuc",
  "key26": "5FvL77hUz45QaULHjDEBcqgA5Ug5qJC4K18TPTsGQ7fzVeg7WspjmFihDDTfhMSr3KAPRi3wzmq6EPDeYKCyZMEo",
  "key27": "EYAfY59TQU8BZZPEd5MLb5BZy5XBhxyxcT3NAnJ6Vs16QEZxKJQ7KFVqmsnq7GHrjkftVEJbtZRWU8pEr76hyty",
  "key28": "e4VFtwwyaL38iAeVeuwdfVPLERmstcQEvfPGWvzCXsjjJuVBK2fkFDezykSuudZTCqnEZEroLyEaX6D3L2JQ8wM",
  "key29": "3FQLggPmqxF4qmkYu14V5o5piAtMeUmWbNJihjnxxnhThj7n1g2kEACCkoCfHoqVzru9pU2E1i3PPHhe3ksiAir3",
  "key30": "5YwVb4ru9GdUe4CDF924uf6hrco7QhGhTEUfV8rBLMPwiX1sXguJoQjBH37mnUpyPdBixLdYQpXqSrWZ3zx9HRsg",
  "key31": "2wUhKRVYLyBHmn6uey7UF1zpPRh9jk5ZdYH1jyKgcxCoMREXi81wn3Y7XS5C6t6zhaCxCYnTkKKM59E2ERdbA8PP",
  "key32": "5ZN6NXeQpDqT6tUY6q3zw8iFNBG4PmuDdKE6CKdgjPDD5v1B3b6HZ7zSk1LWb2c2hwHzuLfm7vkXPJemP8yfM1KC",
  "key33": "yZJWDLjGoYQ7qsUSEq5hR4NxGRxcntbqrCrNNzPqgQg3tcG9VBR3MDxqqbbMBLmTrgEF7KofNKXBPX4m9KvjXUZ",
  "key34": "5CVS4pYMxZKtChyMsGzUwt4QLEL8NdXi8dWxCB6Q87aBKAudN1ajZs5YBV5FRx5yYgiaX9XYHGdCCcMCXvkbNezA",
  "key35": "jymCfMAzzn52FxEq1ZiYgWsbZPnNTZt8Poi8VMBt2dLgFqwU4BK2ZLBCgS7je39Jy4ahuAZ7rDunDDiqb3CEyX3"
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
