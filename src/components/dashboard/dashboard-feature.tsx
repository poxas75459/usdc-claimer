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
    "4fmUCvoe3q4PzjMYVAYZ6e85PwPWwTY8Q7t4w1FstNZt3HQDxYbfZPcJpWmkvwgx4n2KvTXLQhb6Yg7RYY4F8ipT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WGUdN649SxXnuHKvbMuh5rYNQiFtNQyo3Ct5ByEponkUCrG25FaXNEy2tQVb28rpg1U4sRWQBAEZc7zfBt9YjoL",
  "key1": "4cXjhDuAMhs5666kMZvS2nfSsTVCiMKRn86QyxdkxYiZ4GDNkxHPbQBwh4uW3AebH3C52w2f2MrLiGBYNu3GWP72",
  "key2": "54xeQtDYeQVof66bGkRAW8N7cKTEuKz9sqvqMCnfAmSLeo4pSoKM4MuTyGxqXCbVqs2gr9CMYAtR1UmQ5a2KAACS",
  "key3": "HMhMtuNNMG6LYDnJyrtYbqAfU3ZtzkFxRyGwsQ9o5fGKA7m6Nr367JTrKk4S7f9HpDrH3gwEJbsk4Z9jzs81jP3",
  "key4": "UF86CZ7unygEapcGP43fDJYJXLKLzx7bQLmhD3e3Ddn8HboCVykccsUpkaEiEHCqwhKZYWrho9gfekopCb2GBhx",
  "key5": "3DujvGHq8FveqXJSSGNF7nia21hUX1YLs4jKy3TN1fcgsgqtQXXfs2opjVyn2oZuyX4ke76qdeeKzn9b4f37LFz1",
  "key6": "3rw2mWX1pwCRLhEWP8mwcLGoWgpusJNqbHx4SCztZdWyx6REvPKb4TTtMMeWCYifizXgeA8irdWvtAGW1ioBHqha",
  "key7": "3mrzoCJ9tYGsHMrAx8NkEtB163qj2GbJ8CFnXdyDz7pcfj7MYiyCuogwtq2szhqEgNjif2w72njMVxkRAGVXYeWm",
  "key8": "4Mpyd4LmApFZLGHSHMwzPdKFjVaXWMoub7bwTU57aywba8wm5swFLAxhx5QvzAwLKGLo9spXTbBBMBQWVny4FCxU",
  "key9": "5h18LzPT8vQ8YnEkgsVLb79wKJh5oew6LFPmKZbVjVcoUNUP1j7Y47unY9yDq73Eq2wxJ7Zw5KMQck6vbXsHhPaU",
  "key10": "2VQtWzqAhEhGGzpweFKwXwgLeTB6ybnQwvz1cXqgtKw8FMChXTFJt2FnP7Ezk7qZKgitam7T6n62vPUhsE3LhoKm",
  "key11": "3BYxqgjpypMxbvPvbQjwHeeRWnQYVE6jz6D1LmxjomDKYEEa6WSRMYtECS6iu7wLSdekpfdy9MrRWAgTvzRVFE7Q",
  "key12": "399mn58B8WuqpjBAvnALoHviYNvjFCyRoJtk4yz5rcfEawhEN9puWF1yMvH2yjFGJgWqpo4dUdXmFKd3AwZAsYrB",
  "key13": "5nUVErx8XDjx72BvBUegAUcnDrFGHy949zaA6K75h797mh36VK518t1H4UMWCxWe28QhLKXuZTWDdr5XEQPRVbvZ",
  "key14": "2nkn847GJA6w5BzJP3jNPhnXFPjBsL9svLyEfbbtmUm1A7QGHsEc9H43JEYMND9TXbewFiMCT4rMgrXBgZu7NgQy",
  "key15": "4dBpZwwjAjxpdTeEP89PaMbsgyd3u358Y7PiN1Nkzak8C7iXV59uyAcbyXZJVYSFFv8XRhczm8otBhx5q9GrZRXT",
  "key16": "2p1fwAoexiHqt947vyx8K7fLqky717HB6U6ipRceDSZmWtJQQjChVQxpEqnzKPRB5VABecAYFuCqibDGzMYYwQm7",
  "key17": "5MigRSSncmPd8WDUAG2rrW8HiN1s3uyT3rgx66NCYgzwGYC2sqxFBtHYbhADkuvFy1pxXPx1xw4a3A7UySnwV9eX",
  "key18": "4zj1ujVWa1hPG4SwwE4F1oy679MtuaLdRgsVicigU8LoDBU58JPtuCHtvxpwjpXBVmcu99B6sjcYRtKYfGn7dHBc",
  "key19": "28LH9KEgaJrccMFQUq8cCnZ4skg92Ekw3pXvV74MFKRPAFfEENATj56QdvdU9tq5TaiamewDDiByXPrQ4hmhzvYz",
  "key20": "2ct1S5hL7coDjG3EVVGZ2jowmsunWasYUufURZUgBkwRhon32FMJrVJdgQFqMbLzZKacdAHs9vABQD21zY3nB6Fd",
  "key21": "26Detwxqn26PzZEaZs62y2nEBFjvma9NZApGYAZLgR4ctMgTLWSpTxeqXPydYSdpqfdfVSq4NVrjRjYkYjypRjq9",
  "key22": "2hAo8towgHvMnhpcKoerrH1h1cqBRvQJHrQK96c5j5onr7zCm8ZJnkmPDnu8y2BLUaAM8z2c5WQ3L8KpnbKMyrss",
  "key23": "ijcrLHnwTucMoMGNc8Kgb3HuVWRyCdpENV74cJAooRiRpaB8hy8PeTfriY6UjCZBgS7pRSy2fa7H59X3D6mU7MT",
  "key24": "k3AGYXgZXEJdepTWFTDo8km2gMncmqyVq8mLZD5K1MyTAxz6MsJrCKjkKcKi2sdxuXXv1163mgWDYhvZLBkP2TE",
  "key25": "5EurDpJEpaDyAd6gTp3qz22NArmYS4X62PEV1uA1iTcqyQ3i2775XVetonCQ2VrKWARodu67Ck8rQcabTqk6TeA4",
  "key26": "3NDpAYk9njgoxVBJy7jd5U9u3cReJjm4sbsS6Nkbi9wsTjGBdSs1zEsXPvtskMR9XPzakeDid73dpAQ94Abku8sg",
  "key27": "5YFjKuXMKLLnQziSrASYtPKHbt6femh3mRo7LB2tp9zjA5e1kiCcK6kdjLHEMDSUpE6dPCe71Zx9ZNqCiAF83gpC",
  "key28": "GKkxc9ENtZtvWRnJAAUkqcRV3xEj4Snz8tTN7D51zz1jw1Ei4dkJLnQSC5z5bMCT8eGw2GAsFUZ6mkfLxVwaYL4",
  "key29": "2qRo3euRb2rWY2kWgkNoB4SGgowZucKcmWRbdqPemreD61ioETNrfFTwaA4L22eszXMh4iNvZjPEkjdiENGWckhe",
  "key30": "3WretBtsMxozcdi7YUXYUvV66zSN5MhDSo1aUF5VF4wWK7Hdz8c6i7JVJnCWpykrB3UC6TcMSASskhV1hC7NkauF",
  "key31": "ajV9wYkKhPenogvWpFUYaCr4VALtLz8iCsDguJD9VJY9pSi9F4AZqdobXJccWtidh8YhZHcmtefUP34NsZCnC7J",
  "key32": "2mUsHyrE6rjg4dkTRxifL2ydga26g1SQ8Vw3PSCoBLDXzLjjWRRBs3vX7StvzanT3ggzy3zghGd3m9MStt5s3Uaj",
  "key33": "5V4DTnQrm9H2tY9oz6JjR74vhjxu1fAEYheYDNe1ahyEE9i4Uf6nhjRT1psUz8XJW1GrWCn8VD7q3opxmWqTzdX5",
  "key34": "4WhZEEq8jQvcksYdrnvZVpV2H4seD4EcmpVhNeqRHGQabZRiwrxLx6AH56ZtZLzgH6eJ5SG3BWuhcRymqjh5srPf"
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
