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
    "3QSSRdxVaMpwmqWPgoeMwErAKUtGJMs5ZBBdAZHmSLeX3ANe9NuNAbPPWgVSvxZbfmMNt2o4fjhzaq7fzZyGAfo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B1kDmTgnW7pMsG1JnLZevoHSYV8nVGWcTH4XEw4spPd1dYiVrAJDgCqR8C2z3V6oQwTNAE8YdcTbe8EfBnNcEob",
  "key1": "3vQd8wCwLeQFYbehgwTMmZHHhJMCV5dCeWXHMQurujwHkiPFU4zEBTbvuWfhz693xsYJA3ixtdtn8n6oPJWAHHpq",
  "key2": "2hQQAR4UVoEBHExwwTaDKkVxoWXbN1mHrgB2CMcLrCh3Gc4Uncy11XkfQZCDymGjw9DRQCZoTuwTXw8zevAbQTwf",
  "key3": "5DRJKSQ4NZ3fQbeL47Afdgaw2dZWCLJc1EZufTEy2sM1vdVSZSiQ6EhoTYNgujgwjS9UnKtz2mY45GvjKuVcd8ue",
  "key4": "3w9h6dwXfEU7qwFUy6eeZ3XTVodvQ33q3hKqmCFE3i5cL1CXkjspkhz7MdD4h4Ns7KDBBUtq4P6g4D7TSxnoqfuy",
  "key5": "gfX5umZyP2mXd2Q7195VWkiv8w8mfg3g5D89zm1vBL9DrfkCBircQ25eUSSWMYntGjx8DKMsg2iKddZetZC1LoX",
  "key6": "3LwZu23xPqw9GSSvfh9g3LU2ECPSjDJr91R62nusuFmMvNj142uHDtvV5LRG6mx5f29PwqrAApqcjKinG82RxGxe",
  "key7": "4gMeQdgWgTxbz1fBiZnDkAYShQfpKgZSpr7ke1S35xxVXGXJu2bHXv5Qn68nAtzBvPgVL6agLs6rWJnjzFBuKLu9",
  "key8": "4EX53MJsDVE2k3oh59EhFpoiAkGWHETnEcCtsM684t5ohEQQEee534ka7ciBwN9d5Qtgd6ooxa2SNj9dEUx6z9uv",
  "key9": "2KtXLTBtJXDRAj11Yqb9siJzd7Vut77TwSLxAYq4mU1fjkECXvDQEcz6B4TUfZbWYa9Rj8Ep4vw4dgnuqMoCYeVb",
  "key10": "5gpQGAgP3J7mXz7e2wGcKuDRUArMi1C8VSdx4QGGiYEroSJUArnHTcUffwiwzDNCo6GfQoTKu9LW6tbE5tbaFJQP",
  "key11": "42NcwKQCtuPeNkWWxqTMhqp4jRwkcA9TBHXSmcYKL2PfzosdaykmxsveAx7JkDSsC3uMocv9VFkan7sMyDShJjkC",
  "key12": "2DWrRBdwePmkU1fE2SyJd8wkNioGcGD8GYFvuQxgm5CzUrHfTcCxwLYervKpps9ZiQ1YSLH7oCRFiJgWf2RMaQcR",
  "key13": "4P88Y59wHpKR3RY7SPQFAq5R8VyrCpDSJH17QLJq4RE8RjjJD3R7AhAPurM7JLH6q8knjvp5Mfk1oc6xuVc9hbzn",
  "key14": "ZCxQmtYjZN3hM7wuNpbkzxbNpEZKyA2sbFadv9FLELQGYvGgRBvx5VY7xs5MyyueGkag2xSYECaxXrjrF6oe3HE",
  "key15": "ef5tGZ7k83WMhKHcJh6TXqGy86Bq4H48icA7nH4KdMEHCAC1xnPtkj8GyDSyEose6Did4LzDuBkn4skH4kPy77L",
  "key16": "5YSe6aWVtfkGCC3Z7k5Do1EsX2DL5dpzq888qYKQYia8SmiFYiDhKAHxydWemHvCcF6vGAJLtBw56oxvpbxVDavB",
  "key17": "YoDTSEQ7AGipVWfmFkhZjAVJmcbwL33vkzJyXeK2ucrpW8L2qswXNKA4tAoPzKapvM7yKvpFCLjWeQWh42Nc8Je",
  "key18": "5fXa2j5b8TvUqm7t8W1SdjNAoE5Y4Hsigjfkq8SPzNRVGvfKB6RtzGu9aRRpAjFYhb7pSEvT5ftnoumbK9syW4aa",
  "key19": "4YYKSANNKfbjhcXnQHfvnGXJ88Jgq1CE887ezffS7BPRSW5fpwEhQB47zbHAk89gY5aKcr2upBizmNhKihKNyuuv",
  "key20": "5KS1tdX3qctmxm8zcfja5CTvsFj2uCRhXZ2WmM1ohGhYx9cPKM77FiX3ttSPsiV3LfdSi8osiato3TVpK8GkYBi1",
  "key21": "55LxFiQmXNvFSMMAa7qkrDEMue645DmxbXvsgGU6SoYc25L5gEMqDuUh8vRBLWGwXLyjPNjzNXAqSqyif6yGVuHY",
  "key22": "22UYqj2je8sSBHB6eatakccNKT7pp8eyzfZB3MfZ8BJtHFQRs1FNAVpS8WNxzTyXgdXfvCPZGQeJrbreJbsYkYAv",
  "key23": "2RoBKNDY2bRwC23kAbXEDUER2SHFpHeeBpzvYCWRHufT1d3LeDhXz48rXGBLjPZBeMVoVF9Nf9KrEfauj4LMWfHG",
  "key24": "vLWgpXX7rCMbNnPS6CboD36ucMuXNCuPksv9ftaUtSUzz87tCSER972gMog12ySKUyrbCz8ALSS1z7QuzmmWCzJ",
  "key25": "5S8zc9TECRPbUKPT9YXhmu53aepWXmpXgNzN5kZoNdpNRppA7BGbyb6nkhMZdej9XKvfQi8e74Bc4rRRMUu4xFcZ",
  "key26": "kNYbFj16pxbV9WtbLTPhCNDRvKG1e7C14MsH7JuGZw6hoDNLDUUJvDEbwm6My55BegpjfvcBrPVTwQAQYso81LY",
  "key27": "4snmDuTCYGDffyRHgjrozTU2SuXNAeypxUWBbqis1teFZnzy3whP5t2yswfg5NgGqhUvFD5RDCJnYBE41ruKsGSD",
  "key28": "57cLyLqm8MD3gSa2ftgwNgQvGvNRXvhMFfjyZMCyR5bryyxPVKA8NRbzC3bJ1g8bhk5Z55bJBjNYNUiWkFKCNDDE",
  "key29": "DoPbFbpBxTjuooUjsucN4ekiEB8J1q94oGoui7R8uuubHKBrosQAZncZXUe7Nn3WSn8QQPtvs5PZNHzGEgkxvvc",
  "key30": "2WR2D7F1wSh8xB36ixLDkz6wR4TzmPUw1EuoAqY851rfSwoak3icpCiHE6eJsEbuob9tpwXbe2wKtRbC14kAsQEr",
  "key31": "2t12FVhjzfyejRzCXwVY2ejxzfH2TW2SsiwBjfqX8cxCvoe4HrPN6XnknV3nVuXGDPuW37RqGXsESisU6rzd2sb5",
  "key32": "jJsWNhRYZgRGgUAcnLBqDb1D6jJbSNy6AS26nKKpyuPGZNQZfGZf5QNLp5ZZdQ1JY3gyzFB9goJvThWexgAnBwK",
  "key33": "2uGuYsk4kN43jsZu13yxe8TkRGBudqsYK71Vxzy6LVGvvYzfcZA6dAwfbPeAbUTaUEFNZUWjgPswu2fFx6vKQaEy"
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
