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
    "2HQedG5hZQJJVDZUr8z5DyynrwbgaX2FHrqJoZPCZEjrfGNmY6UAWZC9mp8SCSiP2o6ufdQyfSnz7bwwjCaHR9bV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3en74N8iJCKrW1tf6LPEdNYUNfpxa5BvvXDV6TivySMvScz3jrWTKn5PjoWzYcojJF6SDtHbftsw4TRnVv15q4x4",
  "key1": "5aP2x4xSdYtrCzRjTwxK8p1ExC4QQRcQMRbnht4RoKbDyW7x5iTeQjbgMh8uECNJoGy1VLAjzWb1F6ypuabqyTmQ",
  "key2": "3fCspr9tyXP5Egq1sHkA82j5jDKsYNuBDuY6Lg8tMx7FG8cmjcRSgEZdTd13ivfQPWxFyMWRqqRis6QYZbmoYce6",
  "key3": "5wF1ABk5Wg74tm9p8ZM3TgGQNu5mRwMGAMR6CaT5FaLUMNC9nMp4cYHR2HCSHLv3GyJy2nP7s8fasSi6zBFhPV3S",
  "key4": "4aqCXGP4Uv79QsESpv4UqsiiMRbcPzG7nB9EugDit3HtxsQF7aWUATDLtj9uPQzhrmVByp2inRdhVVyNbbNj8FRN",
  "key5": "xziarEtAEByWZQ53RFFy9gWJ9uncnmm5DZAEqGqajUGN83yazjrTezjq1HmYQ7CS3BCt59hjJJKTpNGQScQNUr8",
  "key6": "49eYLnYNiqKAanuUHimq7iJVyRJcSaYtXYUxNa1tyAeJMpybgiQmdTokYgQfoMy5Rrf7frHPLACo7hFkeA7R6F1z",
  "key7": "5HtRuRPVJTprJsB9Ksk8zafswDtPKXiMrtNNzmzfAzjueSvthC3LwuizsynSP8CkxvbZbNiDW29wJY6dpbW3E4xu",
  "key8": "2mZitJVKu77XuRVySgb8FtAYDgWA63SCkm6MVpw9VSiEDn75fdyTvcAzQ4sQHT1AKQV9vb9d45u7CTX5w7seBgBH",
  "key9": "4qVmC5jF28KHQnfuEa8E9scJZNf58sj3RV5gxLQfqm6T9C7VkMTJdgS6DifTb7u3Xw85goJ4HCwfLZE6yALwYh9y",
  "key10": "gHg6aZSBdBUziASsWLa724DyGYogNPtkt1DS8v1cCBYv7Xd8ch4KeXsp16YnzZ1rwni1qp8pTpJF5zY2WvNQZYg",
  "key11": "4QGEqKsaMfVt81Wxq7VXDPchMuMbHUqkcCkJvhui2GZvgde5DwSNLTdLWTW5WKbaRpcv4yu4Mh3BnHpMB59VP1WP",
  "key12": "2zYsnBar2GVrkbXrc7TJQrReFp5Ev2gSKa7L2VA4NrQZ8hXhFmXPkSQcnZRnYaKRgVXfPc8bWGFjNZ9nrEhSS9E8",
  "key13": "nPGBbaYWd6g3PZfxxufJCjry69J7cX8pUmHC9ckRYZ94h8FZ9EZ8vwnvQqs4puRTsuoySjbMAE7MZGkcmT2aAJ5",
  "key14": "fXiwfBGmMDM9Arpgbtbd6nANAntf1P3KSNBq5xbGxr4ZJ6aGYg8PjytPsZ8JnsFNRB2tRhenboBphXJhGnKwkYQ",
  "key15": "2dJuDAazpdiEeSgzoEKveNu79KHAkxUtQRpqtbXzm99N9xSv3i9RMnBCWoPV4iubA3mUHtrMVsW8ixFHBTWjnNjY",
  "key16": "5tCuYZMqVdsLYb6X1vDyJYTLLCSq6ccKJfqxoeW5bWQuwvGm17QhcAZ2eQ2nKT82nZdWQdaahNqGJ7QCkNFWzdrx",
  "key17": "3zDWjDWPTJLBLo8JE6EwoMkmbmdXhCRhdHkE7X9EeHjApAFqLWAGpivftcTyNCU8X2tLkaFHPvqyZUbsRn4yioN9",
  "key18": "5JuxzVPtcJW9QBfiPZDFGUwQ57uKA5ErwMyjwodgifrXtVPcm5xxdtaC3pbhEHDs2AWKQPwkcF48g4bFkWzT7Pds",
  "key19": "4xTxuB8idNXgMqjnJLjrvaJt2uE8Bc5yncxX8LPnLUYjsJeWXc3yPoj9Z9CKCgBtMSqMU9BiAvLifnSkVHN2aZV4",
  "key20": "5vU9KqFLrDG4X6MHxZrWBLMKsumcKjmAcNcJ1SM8Uc27kDF9LdU1wSh2NUp43pC1opZrxRP3pnX61bQWG1KBKAii",
  "key21": "4QX5VLKuv2N6AxTSExw3XiuwUjPJ2nFktyN2QT9WGfNQcRxyVozgsn87teAyPDAcSC3LH7WpKvRGBv65K5SNWa4B",
  "key22": "5rQEfft4Mt6zjTJVnVcJq8y71yT7dkNMRKgVpnxU8z7NQrb2LYZsVPGbME2os7qFUjRpRTo4kjMaKWJncgPRiXhs",
  "key23": "25Yt6JE1PQRhfDMxjd7dPbBy3ioZeyZnL1WnYVKfKx6v9BANLG6Nxsha1m7w6Bb5V4r2oZst2f4z2fXtnDB2fKyU",
  "key24": "49pDvGzC6YuKDygWtPArRb4NdupS3DZb27SiWwX5weVpAFS6qj6cYsPjvoieRHbo21B5vqciVFNRL9KkyGUfLgTV",
  "key25": "6HepKdY7H2UfFBhoMYsbADUFRJvCQAkjtZhzNY6N4VBynLmtSaFQ54Gsf1915rj2qnr6fZ91P8D3H85N8M9Tk2T",
  "key26": "4mKKayd5oC5yz4EUJYqqrctcw4RuTX7CofQcqGD73GyWted46qWjTqyJKVRLxFvvcV9Th44fwrYtB7V8zir9hdCY",
  "key27": "3j1oThZXP18jM7Kru9uwtSXUQ8FZnRTSe3M7KSrDbdzmAATZQZu6uFsftLyCAAhF6vMyqd92VKDvmcts84hoEh3V",
  "key28": "5uiYokvY7Ucbj7K3eLTz7sdwZ9KG7GoC18sfE37wQesBfLefwkPthbwyrbtnyYxhw9yt5PzNKQN9ZUoFqbms3mQq",
  "key29": "DVMt58FFMJEJHNMFvTWhK7GsjU32fvWrhMk9WezCPDudih6PhyVB4H32o5AZzvFNrfJnzrnPcjnbbcWtgfzncsA",
  "key30": "4JbdJHPDyYPvf74ou97kp1RCMikjHJ2uX8UBdZDsPLrA9LWY7he2fehpwnDNjYjgUAQ6fNyHPQTy5VYCzgBMhBwd",
  "key31": "4MeeeHmzaYU2c4ZpLLdNGtqWo3PLBm8pjwFkx8ZgVqBR2q4bFtTunaaadnzn7EeHpyDnzGiZ41YcLXv4Yud4TAgR",
  "key32": "44V284rPJLe2jRaeUGMJZaRvbDem6DkucCpEEQFQXSfMUqDncMrELwsN5wGaJEQndLsQW7ystvXXZXEq4P3ZoogN",
  "key33": "4mnFvnMe44jMBRA8BAFHw5hW9SYs5ok1GmU3g4CMdmdPi5M5AAra8nBje87HeDiwi1TDxEb8xz5ii74qCRv93tYU",
  "key34": "3g8pofPAsKn7aeDouHhhrCQQ5irMsDaF8jtz494oaPSsrMbsHbrwdDfXnYP3bDa8gKQT9zmBLyr9s3ULRwXWrmyR"
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
