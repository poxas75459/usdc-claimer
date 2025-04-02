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
    "3L9h53HomUt3cohVrFviS2uHrK2V5rE9GzKqxCHJbrdHGsP19aoD3nrhztVQ1em3zx9zmz97BndzqttYr2An4iCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nRWHaKBp8JU1HbH7x3gsK9yrQHsSA4jnnaDU1nLS37e7ZBdu5gTGcYJusaeXMDXfhxyAUjaDtyS3NortpiP7mUa",
  "key1": "4Vht3u79rHbKx8QH9AWxN1tYbv9hoDKENv2h5hGqnZNnQJ2u5FZq7fM5fGUwMrBhRGDSqDbWTbGiD65gYqSrbTbF",
  "key2": "2krpXakdQEaz1sdUZXQRQVXojE3XXkahP1hsHkrjnV1HZh3sXoBJquHCB9tqc37p6NhB1XwmnX6saXQdU61yG9BK",
  "key3": "3htsKRAfC27M4KFzHgKJZaukHNYfoP6sqfzvPztGz8BsKFrsdqQxXpswpqweLMKrvUa3dhPTTjdddSKR4W1P1ERK",
  "key4": "4HpbyDaLgPqW67AEX7mx7a5C32nW9ztWq1WxxyrheMoXGDcC5nEBVf8yuT6KjEDvrTQxdXhgCBaiNBKdHGZ7wWhZ",
  "key5": "2qDJWt4zJYo6VePEdyfXYwzwdzrCw6aApVFzeL9cm6oczPkXvZ3oGfJwePG4r4CNT38nXFVASQi8TBmySQVog7zv",
  "key6": "4bvsmUGoxdrKuKSLFavv97bFwaWWnVLfyrb9qm8QTc5ryHYMf39pbFhFfGuskwMv1MpVjK3sbXaY2G4JeESBEE8d",
  "key7": "4YQpzn6Bi9aQecHFnhFVT38aDRMS7bykDDki4RDi1Q6u1rQdAPQSSg9uq8AEZCDgkiuCQL3AN2NE8zWNncCB3VSH",
  "key8": "62DfLGyTxzoG3BbdwJHKTmm389ULcCvKNi4LHNZ6TBNMMH75XZ4v7XLaySackbkvPccEVgh5xtJNkCRoHdRtJEop",
  "key9": "4gufTrb5CJVqWnXfG6yEGbn7kgtwjdKRi8ZzWNqfsevThG4En12nMUMyEEddiLirDjKQ6LEw5D4ZtM8GuBC2Lv9",
  "key10": "4uVriCygCyoRCRt1ddD9AjWt8ARGkjgGn6oA1MNMq7RzP2hdmmgmj8gSLrD2GUPDSjEhzbwPKdQJ8urK1dLUxNvw",
  "key11": "4k3p6sSJqa1PY4BcqMsNVrZUfhTGbThTNPC6L98VYriyrputLKqvAnK5ezoBNJVUwdMEuUA5TAYU41VaRTfipx5j",
  "key12": "5NXBFDSWdFBn6qNgC6J5ANZT37i9SFC2a77StndgVtZMLoAfgfviyzVXKxcNtnx32V5z2pBodGNRWiDjEEeF9gUv",
  "key13": "3yc4mX3VFBXjPWdQ4r34eDAnUTnjPRiQ4boHrBBJTcRAinVQbPhZyWEfUxbqwUguzVkTQp92o8L3j2cSTbJ5qQQf",
  "key14": "2YcBK7fT7MkVGvuF2xWqNMnJkvbnZjwUiVCaVGEbC6LbZfZiEsidhMb6WHg9PwjAS8j8xE3mpA3E5ruJEY3oskqM",
  "key15": "4HQoLVxGNu62RWz7xRifR8m3at4vZxJwNrkAgBtu1FLvbTUAGkrkQV9DAXswMMZnFtKYJ4Ki46yCCdFAe7HpFHda",
  "key16": "2RCzGexZ5q3wx6a6dvaWF9pwgzMwgTFrxZN7kxXgTNo7huSsQNu1V72N9HHni6RWzxrtZDgu4FLiyBovdYVbGEdQ",
  "key17": "2jonuqsPF1NfPhBC7chnNxgbKBFVv5dQ4Mj4eBmUajWBZJVfVXmFnuBdNJ5NqFwesPgzJ9nNeZdGksRe9BhPBMMB",
  "key18": "4F841bbEcDrppFqobbKvhsLPYfyuBVrma9xUHUBqYFfSLUzTfwDsTN5gcHEguujDVtbnHQt2zsHfvNQv21euUDjx",
  "key19": "47Hu5ucqC4P54vphWU5bhKj86BfQsbYX3MuUhdjfcihTJHmcxqYAyZxBHJnxQAfwaQMzLeijgRhJ5DNnxQFm5Rnf",
  "key20": "3ensfcJodJcarGRmuCMtEPsqAMKn7DLGCT8VckuK8VcfooPZL6feNrRqnbY8WGJom3Givr4sWfqRP7b2TQAh7R6j",
  "key21": "Wns4tJ5LC3NDCihzXuez9RyeYMRv6XuUBbppKwQ6G7QxaTNhnN9Q1dJihrzgrGe16YPDGW3g3GigfkaDXdxasCQ",
  "key22": "53KGAHkkNV8UDpiBxDE3S5PuQN9SHbGRf3wQ7NnXKBVM6KYZ2PePeCoitZLRFzPRoSpdVhSTD9AoMhDdxyqbnrbm",
  "key23": "37GcSLmLQX7ypGjFRehyFUe7hwkGnYjACWfLMXC56AJFHzrEKX5Br32Yo2YMv6F7ZQfSXoXpuuNckB4m2YRxt3QD",
  "key24": "3VGoUKiuEFtpJcZRTQZzEQN9r1dhAjRRasphrsYr5ZK2PPRHeSixqCpVL8FPTeheVXR4D9xg4uZBgEj41CXPrCju",
  "key25": "5uwUefxxavtnMzoB2MtbMeUWuVRmZ8xy4xNbFfSr3zUbxb8ZUbHFzVApvcZBBQRr6pz51XVmvyawj17JZnimvgvD",
  "key26": "61L9RyPb2CKQ5y3KE9zCp3Jv23kYKWiGvyM2bNNBxZABGfBjYYV4tNj4MQTrs1NVkPmJSWEqVCzBZPs4y2ffKPqk",
  "key27": "2EHMQe5UvrgVvnv9Jz9Net6McuWwQzfcYANX9aoXeypfFvbzsMUtE2Dgo3fAE95JkqfuZdi1J2yGmNT9dwxCwUPA",
  "key28": "28obcxL412DWoChyVYTmwCWmx6tKrYTESPE2KMNdZy3upaDs3pEyfGNxstSNXs3tJPJZHqx35yWEHTkRA5gYDzFc",
  "key29": "ZWvvcaMRgukKdFeKpYVribYY31WWKVuAG6SZwyneFXBUPirJnFU68T59hisS5MhjdcuaYZJeYLV61bUPbodzmvW"
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
