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
    "CirxcKmRm7tQyaEZTHThYWdkAaNUtS9x1eZbeePj8HvGSQA1QQU3dYte7PDVpCKsJUguKCW1JmRcuoBd9YLeJ5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66DkoeRqaaT49waCZ8YseMhguedMMrBDJhfz7D15uQQLDsYdGwKfnJV6bDxxcc9xsfULwL8VxTs4UDQbdvRJfXpw",
  "key1": "eyZmiFVF4tJZgiKtNmkYtuHvrbN55ikpgJkCGQmxpSbNbqGWK9nXVmiQyvbsXG3aJHHTBhdX7W6T31MoKNnfpAh",
  "key2": "5Tq9VZB3JKsk8ojJQtMU8MLume9BFhjyXewxFyPTBtYF7Zbh6Jxpr6fcqZqtShSpEW6aVXryoqti5nByq8G8VxY7",
  "key3": "2nzZBG1fUi5pfLnU4hUPHTcM1UQQ61evQB2EPyPiazkJdf25LgZEGyZRFkSju8miix9frGwh2aEfpYEAabDGuinM",
  "key4": "5WMeXkdfJTroCd9PWZ66Wut2vEWJGnsHex92iBPm8a7YE8K1p85EggfztivtaLhwSEGAB4wLexLtzEw3RC6XsNbp",
  "key5": "ZFzcNL3MUkuTwPCkdUT7r137GcLebdyGih89qfUnuH9KW2FjW25VQjSu7U4hnBDgFoJHE8MQhGTpz8oACQbdAa7",
  "key6": "2SqV21wTzM6Cm2uqxFUMkU5RL59d5JMjPThsq3iRqCoaooeLqzvvwX2eLpnXdpvYN2q1G4CVT8UQAq1RoobuL46N",
  "key7": "3e5HLqhBdSBNyFuMS7fR2Gkv6r63zQ9qxWY2dgrrqpaWE6ZEHWadyqAAnMLusJMYVmcjt6hnhYozTgggNE7KvrmL",
  "key8": "5rtfXdv5RHpgH2nXjPy4XvWxSkVfSyY5WewtvDCi2rHW1EE59vPaAcGvtRv4E181Nw82bs5gCX6KcQHnPM53goir",
  "key9": "PM7RYqB2kgb5DmnJZF1aQ2eYmidd7W7gXSCvYdWQBjv1jAgSXYphGuigBFE9yA12vq2w7yvU1JMfWVGtMMnfihQ",
  "key10": "4XGXxYEKvTZ43zRvJJfJkAGDk4BsjXce3KnoXEwWVsW3Ztig3r5TaFE4HWPJyZLPzjgFnH5mNWBjBXJZpH9fFVhs",
  "key11": "z8AZW1q3zdVuWmvTAMjPqb6NTc1GLEkYDcscSfY6VHJGfDhPn8E1S6ZiHu4HmY85Jg9NSaTutga7LbmHTXdEbhU",
  "key12": "2mKVqRuQSFmcMWit7h3qMLGxG6yfZPy7R1guK8n6EkhjND8URhmUnSTgH7yoLmWbGR6QSZSxXJPN9A78zqGFNfZY",
  "key13": "2Vamj2Gjox4c7EJLmAUzgdPfBjTX8j6n4sK2sioEKgJPNYvbawY8gUX1i5EyokWKs1CLvv8HDqqjUDPqiJUfjRMM",
  "key14": "453PSqoPnMkPmeA77xf35jS1jn9tdJhJPNkTaYWhNHw7eFFuMvEtU2bH5PmLy7tui7r7y3MohD9gnW2toTbxpAbG",
  "key15": "4xzn7sDEyqaUmZKi69EP7UZtm7md8jL1DLSG9jvf5xZ56tXvcaWDrtrLXNTNFKM4qkRQ5fHGKsNNhaUNAqFfWhCc",
  "key16": "2gMviuKApTNuiyY9qWgUzLnVq3EaScuVRi5EX5Gtxtxvra3QrjAm212xk8CXsj6d5CHYRpqF79yZ7x87W6Qjhats",
  "key17": "8RMhu1wpGNqqxHNKkx6QmhBbuWp5HRdUbVrfd1Y9enEsnaABJUvNJBUTUow8ezUbW9kCDcA1CAu2CwV6B94dTBQ",
  "key18": "2MquMNrmzKx1E3TA17QNcp2hDReK5z37HEJLiGSRoHC5fks8evzXUkwDVNLHFjtGoQfiRUYKN7YLHxZoE8kx71E4",
  "key19": "3PR1TBp7nqjAJ6UB5BQRi1FXBaczLJc16QB81FaXGYvaUSbYuVmcvJsoLKoDJMudvgvTYkzSBJkZgmMWV2tPc8uh",
  "key20": "3rx7RoeAvuEUbCAkeFDg4yNgM9WpyMLoVZzojAFZe8Zcts1FhJCbRMeS5RV481fZxeRvyRHjAVULmLEDi5ikVQWx",
  "key21": "4exgRpq79FCcByYyWzSpXZZ8o8i5NxoLthHmVttFWy1LuCuJrwYAYq7JT5oYX8hAywDv7ctt7ggF3v2uCt4LSB7Q",
  "key22": "5HtNjNB5TG1abgeX3Nz27SoC3aEPowvDNGH6zr8PqLZkzKDgpgRwkPNY58KuJyRPvGo976KaKvpWKbLBcuordiM5",
  "key23": "3Z7d5QREfSzx4TULzVwFS34D9HZgXfb3iWgh77sKwQ6pXQyMq5ejVhmC2UjAfZoWrgtnWNBhLn9U49WaHA8uK72G",
  "key24": "2ogjoYZ7YvDTFxtehT8a7AuM8ZV8KGs8LG97DxoBUEzFEzChhSTbZfamjQTeA7mcn3gxRi44EXim6ZLMZBh8QjUq",
  "key25": "38L3YjHzx9Yr7D5MRgowQgGUUSAmpMJMfMCfTkMonC3dAbBgowzyymVkLm9o2aFLN9AXr6EJxebUyhkHAANK3ouq",
  "key26": "5gBRpntjvWSvHUQgEPrh1b8UtGrRke6Xka83Wv33i9vK8VmNW6DkJoxt1G8ZepbMqe46oPBu4F3zVVJkwmU54mpJ",
  "key27": "2G1B8b9VV1ienChmK7uA3H3wJ1T9oxEYDZU6ajToiV3azgQBkuYuvN9kaccJbRXvwE7ggpXWKmK1hSBs8aZivSLv",
  "key28": "52PdNewZmf5Z6iiDRv8H6qRhsWh47qJA2MxZbgz3qPz2husjkhaCv5vTVC4RNPLQurmYtyqrdycc1ZDzrfVD194p",
  "key29": "67kEMGTtQS6FPBGgp74dbRhJNC1yMqahm8JaCkV8cfMzG7TMngUW6nFEYUxwVNP3jqCQSKY6Qpz5iKz6AxJCMrpu",
  "key30": "5PJG1121BY3hKK3cA55p1apCqaX2gaV7A2dgEf1TP3bpHFkpRt4Zuu5AYtKeAPeCKkpMY5Yxu9a2HSRoJ2RzN4nF",
  "key31": "2hBxYCw9RNmjqoSvMEMz6huCTdV3bQMYAYA83zFKirGKTaPYRjoG5MX9Nw8gVJEWfeLuMhucvJHKjkax2QxV1ab1",
  "key32": "3ZidrZioGGoQEj7Ga5tTQ7AT1ZegDPBLbqSHoGvGGAjh4DnY6kyJ12PbrVTsGkdEYvCYjm9LFmwT4WQFttPfxYz1",
  "key33": "45GkNfDGzH28YZRU6A5WcZt79ahdkmM17FhcP1Y7KpWoiFn5TyYUtdHtPUyXxWqPZCKwD1vPWgtU69SQ5qKspXj4",
  "key34": "2yJTBPxMkEBvbaX9gqo94zCGiyNfqud5vdLqJeRzgBDUrwKS2HsyG1w7k6dYock7hQoEd1BJhCVX21FYkvCntr8w",
  "key35": "5WFXqirPL4haWnK223mpLgde2ZHW4jcwBb4iforsE55nQGeTNWtZN1MEJHKPGdF9KttjTQywxdBBC7i798LrCvrH"
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
