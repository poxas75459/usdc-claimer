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
    "5T2EgsV3i7wwucKQQv7crEj3XwfTTCY8NTBi4sNV8NvVw4XV7q8T1vQD6RdJXbvMSV4ZotDuHndHt4Euy8nJf1PW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QwB4tCwonjdMnkG3Y3fQJh7e2W94XPFM4q7dWxHgkhN9TwH9bqKEQkZii2eQSKh8YWT23E8yZtZ7WFPxzN6heG5",
  "key1": "5kceemnJvTxGd5xGuUGqdEDSWT6FDQ8a2aDBaom33sLAabgq9dvH69m4sGP7EdbPGvEnJx81bxoG9S4okP3ceHJR",
  "key2": "4BK3uJjQEXw8aoKWx9NHfQu9RKc8A8rhFXAueNY9BKyGY3WgNFG3YtRKTXMgFicatnuhpbmBVcRQdbaubfzzRhSE",
  "key3": "4kX1ae3M1aks6wkHL3yc3EP4v4RwogkoVPFcat6NBHmMC66ra75AcFo8XQdR1MxyhSHQF5avs7BfqyruQAK5Pr8C",
  "key4": "4JwLui9zFxb1HA7Zszi2HWbLMVoVq6LaBBWGAgo6JaCWQ1K3m1e2PM2bmm5ifM7s3boKBE98oqqG16AB2Wn5ymWX",
  "key5": "4UidGr8i6X4NUxY4npqDxEDtMGVsxQnWzjZq7v3WdGEvNgg8HfNjQVFPSkwyRzy6imGXQNjGXs2LUD7ExcwiJBTo",
  "key6": "4pYtSHXYBjRkKVjErStTtpWmCAKxKJ5Ui63tJmNRmDe7VjNE2B29afSrVgb2MhiVYiqC6zoJDrkFpPfazpBVxcXH",
  "key7": "4pijDVXUipM5jV9Tna7FAMjcDWD2UYixSJASHtFnPw5Bupt6Pj8goA6V3yhzkof2jaZA4WjFAH2J1Ye3mtBj9Htm",
  "key8": "21J2DVQFasGf9qf6VKwaPmEJG3xLF3psoVztsZqzJjt2xHT3qXma94McZJGykHZZvzEpaNUY3RPjoyW59KSC6UXo",
  "key9": "3ztXs1XRAe3DBmTDpQsgHCLaPFThcD95dshon7XFFGbX9WRtf96hvsPRFVqD6YKS4a7PgrHbN8XA6pLapFHckdo7",
  "key10": "2JzS17CL5uSMy8ZESJH4mkQVqB7CehuPo3LEwodiARMBJ8wm3by5h7uAvtzdMzJfyfEPTNZSwupPL5vFgPETnQKf",
  "key11": "27v8wxtL2KCgdfzQwQxQ6Aprkpv1LQRJwuZa8esKQm9BMzLTAJznweCF3eChzaXAdtoUtRY5YooHsEwyrk1qWTwH",
  "key12": "2oXTwnmGUz3q9hXsozaS9iGZ7haPjqp6LCK6DqC87b4gGrTUZDuy9x8bFc1jMaZAqYo51eXiiffgTqUdVAgiz9fW",
  "key13": "26p2SdkAf6G2ytz6bkdrUmW5piy9pHP51rgRgJsfR8DqewBqtcMarBkxsqSoxesDC9LjW3UtsTzn8V9akDuPCy4e",
  "key14": "5jZhmxjbF1hBfEniHeyjEqJH2YisneZ8mQPd3fDg9hUUcxFsD3XbpxAsViw3cCYJPoruYMu1ooLGc7FKF4AcRufm",
  "key15": "2DXH3by7csBMez4SBVgomBNoXTdmPtTazzLkpxhy6oWMqUDC37n9MLRRiYvZWhH6dUV5sP4QmfvYeb3DjkVwyHiT",
  "key16": "5Rgwq2zhS3tZRzTnoDtiy74ZGHhkcBGLVS4iPWPTYZnuCozkN2zo57ftxLrNQYNjojWkmJGM9FYTpJRWVH3S3LGB",
  "key17": "4oWkn9xRdZzcvU22M1XvPVo1NNTLnFMLHJHNdqmBsGDhKPY4VA59MDQHuvup4ia2rmbzKMUmCUBGJ46aPc6JSNXe",
  "key18": "2QqDXaVhcCJ144zGYRqz4HcyNbkvLuvQgvUfeZR69u8n3W4yvcLEtQSBYKR12PURGmpe5DVzwaCdpJd1hVMPkd3s",
  "key19": "5i6fEug7QZtx8EMpgHJfja24N121CBwMqH5f4DjZxLT2A6yovogwuqSanR8BczJdJn2GbEkhgUaCjg7MpD7av9sE",
  "key20": "gVfmetq6ASqKHc98usJwy5Z7FTgwGyyBVnmRA5eoa6ccHtR4go68EWd3W8BPw5LiLs2UZMHqHjhM7wVAZGKkQSW",
  "key21": "3t7gMbj3e4VXbnTuduivg8UBUyZ6XyoyoqD9L6VPHcvZss1d7idCmZssNg3556rt4zA9fLYRfrznDvt5CrRVPpum",
  "key22": "4HBaHHKvGjsTBSf5RzRiLFWAUuHhT7wDrb6NHiHEtg8sRCh3x9EaLaWEqeyoWtBxLQU8MHTn14MesGBJ9g3XScap",
  "key23": "3R9eqJwTzYXKULAqrUhfbmfty98MyC46UbKY9GyUYvRu5835r2M3P1sVEwMwnu2TLfs2rxrwRg1whqgi3whcmnnS",
  "key24": "3zSGqC7RyXeU8VnTQfxp7xefbT7dsM1okxpS6Giqkjtihi9swhjuZ7tiK7HEJnMHmu4QT53MazJgPZDxTUxgcifh",
  "key25": "FWiCJdszde8vKQg3VNA9MaXkdz2yGchHgTPfgfw8R1pCxZn7jZ4BrQTmxLXtrqpnigTRhVfvEYuRaYataH4tL1N",
  "key26": "37PMw24Eqw1ivhuzjr8NjsU1zdWKmyvCad9FeEiaNbnYnkyuurewojFBaDCkMTkV4doUffVpw4KDFMMT8rXWegjE",
  "key27": "3WLBbWmM8BdrEdad5k3LCAnMsEyZvykXFSM8apScGRTHp79QZ5sUdTEHFiPwpU95XwwUeXkdnEFZGnEy2G9yG2Z2",
  "key28": "3EiqSVZAN3ji8ZDPk83Eo37ytEJiYQBaTuEfcrNsMaEZvos6QqHui4kud2ZL5VERNWaY127J6DVfUUSAfp9wG4vR",
  "key29": "4LQt7j3Brto3FQ93kLeMpyc5fQBENWDoUs7Bp3ZY2VkWf2YBbpt7cd4fXmpp7xx1GcrBrzmCH2813oS6x9nPHh2y",
  "key30": "2GZbki9XJcgk1HLTmm3dqb7XJmzuo7bAdTTxS6BsrVnH6hNwUverxNqcPWjwLQzMjCxdGUxhgy3NXVroTT1ok1Nd",
  "key31": "2FxPRW9ZfXHba31B4U64pGV8zTcV8nA5fw4typ9dXbJn8nCZMi6H7HbQpoyfb7461ovPK9K6H77HacTqQ2G2cD3x",
  "key32": "4ZHk9x1xXi6y6njziVdXksMeSugFSULvxftJGNmK5tWuWr1Nto3AFyhGpRKgiGqd49x2mKv9FvZ7fudfr1d7SwQL",
  "key33": "4MLyPskE6aZ1fqKXH3yJ1GFcQJbMghQuPsR8vnqFZnPAtDkXcVVWQLFuCGfErGT2w89mEyU6iYr9vaAiR8osTE4Q",
  "key34": "2foiajYb9CC3XJFJmN9X3J7Y9KVLXgGzkJqWnHzcQ1KkryJEZ6WUntniJchQV9LaPoVNp2bbnhSUbwfYkhFGwaHN",
  "key35": "4axVBCqYqaeRoab3aC5DVtCXTch6CEYfHUMZXgeupWY9bZhRdCuTPq1HKmoWW8vLU5nQmeupVBkidi74umz7GtfW",
  "key36": "2hzs5kusaTSXzGXEP4N343dsVkSmpvhMf2mz8ywcmt7WbA85LRc6QvWvG7dMT4t2j4dbPN81zLJFu9s8XATY5Xn1",
  "key37": "5zZMBPL6yzBz3N1agcHm9dBtAJg1rPK7TjZhtT8xEoYBrwYcMwv1FBr8nn6WAUfmN7wnn2K81kBMabq6w5p3tbqF"
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
