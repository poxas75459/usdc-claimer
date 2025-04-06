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
    "2rj3mZZRVFbaTYf23zD7R4QLpn4Kx7DTXYYuL3hfNxjPNs3FiPparyBfkY1Eyi36qf2BFApB7UebUyiDwe8ygDbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44BD5Pm2EEhiKjUMxkLCjvPYb9QM36JNonZ14ghTSVuEYfZsQUJLjwMrLhwWosCr8KPCXBoxa1MfKximAmJcuLzh",
  "key1": "5XUkzhbqGh1AiQaVzxNitzU2hrwtpq9YLwSVUwii39gTQ4N3XR3JZwLdUs9EAbASarBgkmMoccKzayfG7537y1mx",
  "key2": "5Pn1arWnRHPPwNnYfFjkLe1QhFS5mig2pB6WGtzwqiG5Sa5jp2o1kSQ4Jm2QvVtufekpMVG8uYjZ9Giw53LMWYbN",
  "key3": "pZxZyHbECsN9tyuKtPqsgCMUeNLtLQNsMNuGxmV39xo71jLqXQzb5greay9eeJcy7HP9FKce9uZZUUZadB9cDLS",
  "key4": "5UNkn4CsPwvxspYm3nVRKTD4qdb6VNE8aAZhQ2jjk4vQSR84FXEtSz8GM3feMXNHETdNKqoEjLUkYNqD8xbU7iYP",
  "key5": "y7Kv8sR9PQggmfSaaThGeNKq3qUwUwhQtBM8k6C1NBVXFXr2E4JYfDzWHQPj9ugUCGPE1LFKJsGuiDbjiao2bb6",
  "key6": "5qoHGNgm5btWnU6VwgBqqtfWSfe385yhkgwVERko914HQUCx1Lh7ov6hsm6oesqZoq5Xru4pvW24St5JJA694ZFq",
  "key7": "2NTJHxYGXVLX1gY9Qa98KjuWo8WnDSd4inbrB1YTg2XsFKbMs8z3ZN5w3ayVerow9nGWNMhKYDUWwzYyMqLzUFaJ",
  "key8": "2HivhyhyEUN7R3hYYgP27tJneVLdMrUDHbBeExD9wL9tqdhNgjYcv5VHGcHLDrLXpn8tNsmJ8R61hLbDN7FdDSem",
  "key9": "yYL7Ljc1tJYxZkQ4RnRKxVKgqdFoKNCtjAqjmf48fdevMqoTFuce1Amx9d1sZbuth64X6qsGWXgg3juYbt3w3Pp",
  "key10": "2jqdBMMJa7u1hWgFsdwR9zWUnSypmU8Q9bKFaRD6E6kMVZC7kaU88ob954kw6GSiWcwMrSf6xcMDy6MTEWfkdkuG",
  "key11": "4jMDhcQPheW67Ezd3xQDS7113Z42jUDePTdWoZtfpgLvh74fKpghzR9kZjyktywAMiQnNwLT4fVziERfLn2sFp4z",
  "key12": "2BEQTFFq4EcuYb9sgUrqPYw8cHDkza2BXJyBhjtN9Q9uuFDjGE5mT1E8Uvb59oiU27W6aNW5YHz1h1iZ7kLLinPH",
  "key13": "5PypXmotEcBMuj3UPc2fXjEfzv3XHTmitiqVnaxiUkbqyZigWCqVKnnT3tCDQ1ypaK3cfxHpPLf55qf9WRVz2eqG",
  "key14": "dNEh3GiQkva7P1va3Z4agEoCijSHNmkUyxVYymYsSCsa6sy2GLaxGby4v7g18pGGii44iZ4gPo7QHbAwRQEjKA6",
  "key15": "5dqvXPi8scBTdL4dh7XiaecdAyP3j2bXjGLXE3cbCViRDx5MxqoUaAE5uRCZ3HQ1spoBoyVcj9Ac4bdjhNkYrtUN",
  "key16": "2eUtekXxRV3hg8Ua1RW9WJS3Kd5YuT5LP6W7uDcEcryU6vsvPppRXtkxBXGkfkhqSLb4an8UwDZEk4Yn8t4wtWW3",
  "key17": "2Vy5kWsWZMfkApwLEr6GV8xaKkFf8J6jcBir5AZmvHCuFDbfh9gVstRueuVPUjtmT9F3yoWc9bdEJ9f79d4ThTSU",
  "key18": "55Wv1kEwjQCdjAaURBQgYFaQEzeiZczyDAVX3WW9M6pMwcVoMnPevqwrLXwtDwvZPPXooCWeiJMccBbbNtJ9tMY7",
  "key19": "5B8W1kRmkHbgmepxVsoSjsLVbDRaVM9U75FXZZdFMqnGvxGzC4smSthQRwHaVHGgDZH7XSfsuhjnCK6iNL3PP2BZ",
  "key20": "3UiZxsUVK56LUXPRhnJNkKVqW4PkWVafwUd3Pk8vmmn2xmmcVWMqfxRnukSULjjpzS2yYM49K5nc286mzLPQzfd",
  "key21": "4qNkQEim9q3Wk4ExF5eWeHYLjt2a67eafEhHeCFsXgtQvKgWh4ETiwJBudPo97i7wFWcZy21vTCcixSPdPfWXB1d",
  "key22": "56SjTBHdKtwYEgcwvaTKostcDK3m3rGrDwkmXewiXqVBoWNkgFDCEVw766KqViZJbwCU939Y4VFuvDwrHt4RFXEv",
  "key23": "2FL6QyihWP3WyHFyrkidWFvTjNf9FJeUousrcdRveEBfMuLemPAfUAqKaGUtJKc3xyKXsJx4Azr5HiuxtAYrSvvJ",
  "key24": "6545iv2Dcn5XsQqdMZcS8Qk7Y4Ab3FxkSQTUQSCREWG3qkJQRPkAZaskSD7AjiMk9XoYfpiddCoBahD2vj7Hq8yh",
  "key25": "25w9KA9oc8WT1ciHw3Rc73quSwiLAXr79TsFCkC8H7JbieczJA3t9pvsLGfGd9bf2NQPzBqgCq6bWi44sKqSBob4",
  "key26": "3fs4vPnGTrnY47UKrCcSLtM9LJLQ8bjx4weGzR7FWkhUyYHdHUAzT9UjhS9TCwPFmV1mx8id9mEgQQ33PuC4LV56",
  "key27": "4aUDbn6pnaau7FeXjgHobZcmFJQJ6LX88xxn5pbn4aQ7rR2YpKKMkAuMijH59vZn1kYAdngdGMb5XstbUfDevYPo",
  "key28": "2G1TFbjWzMiFLsqS6VZ54V7SDzrQPqtMsN3sx3bfCMKV9F65ZXAzatkfQ9SRpxwPwjzNSW1fYbKMeupFTmEHfmYa",
  "key29": "62DNC8mBDdSE6iWHgbrqbEqkwBPeRBXiHoUzvBhbbzdmB4FACG44BHijUaK4ccqHgxAi9PY11MnnFW1Sfw52Awfe",
  "key30": "36RtAVqueGQ2rY7Q9J2t1YSZUQToePScmCgqJDNBdWR1TA34cf22WSFrZJ3UuypsFyLzFK4L6z9Xx7VFbiemY66f",
  "key31": "5LDiBVJsiZhGV8nbbyvhPQhzdWvhHQAQ9nqpFrnGxXPsBSjjVYXzT9TcY1VxNRHu828PCv3YMFpDf58dpH5HJaBp",
  "key32": "jcaWdV6xXPxbKS9NDB49iopasJvXVnRnHywRTXvN3272W9exVooZN4GiBmV1XmYVasvcFiMgJdXTkiMigDWFJUY",
  "key33": "HXHeZCiZwEw5ocugQNpzXttTJxjufDCn1EuqHPoi6uDapynz5PFQYPN7WrpwEBrntPgqJkJZQuK6uRiJK6NntPB",
  "key34": "4HwyWrtYiFGLjwkpjoswUt8hxEEX1CPLiAkqVtQATDUkRfCGbWttVdyKFS51PnQM8gvtLVBgmoCxzyPcUT3kRZ6Y"
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
