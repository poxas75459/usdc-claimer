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
    "4JeuX3svUF9ciYchYBF11Dx5mDXaWeogXPAN8qk6g2i3JBoSZTGEyC2MbXdp67Co5rPf6Lcf26CUrKCbVmeDw8mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oaXTpbiQFwekXezT9bDT4k3Boq4LkZ5vRxbLmrqJCFcncCgG7BZJ2qHzjwHUyguFFaQHUg6gcw21vQqWdMwimQy",
  "key1": "4KEyUdBMLUYW9tysAnc1BexQSWpLE5dFLQnRCi5gRAr6guY5wbzDHYJkiajWv8nAdtFRLiohoKEb5Kz7zHF8Bmuj",
  "key2": "35kXW1qAtFtU6LSLWmWr446kagZP2ddewz1VnBuSWDzRkwiJt2N1GPYQUwYqQL6pduoUtUXfAEp5G9GBKAngLdLc",
  "key3": "3KzjZrXLQcbSY4QsKUNa2ZwvPk1fXYnUe6o1mnuh63XeUHgB8vM7QqcfuocevFYhB9KF1HPBqPFCUnoBRaqhFQHt",
  "key4": "3tLRWporNonFqgFjucfyKZV8MDbazCcouZD9NbXtAZhavsQcdADzkgAWWp33auEYLYD4EogmTTMY9p6WGodRZ5Wt",
  "key5": "3SrbVQkLegTcSXrGfyWwDSsY3HejtjYq7pcHp6S6k9yt3Yra8zgzhZcWwuFDJfBRNt4EWG8dqJRoawZDRStSGkrY",
  "key6": "5wG9rrCeeP7r2u129evHGcvRLvN9ntp6W3ve6E1hqgjMfmjq9zpUsXU8zYJsPZhCe2yoDPwMsBvyPskhEQuxNTz5",
  "key7": "3GqYfksBuDU1BTT5QutURD8XWPaG9ZSNar54zsE3yhLfFwvh5We12wVpRYMUisarw61yRHb9e4FoDQ6Ad84xoGAy",
  "key8": "4aRdvpnR9DjPMmztzhq7ydPiQS1xypQt41Zmuek143Xc5yvEv3GiDNJFCmeyzTNqK4RvQ2s7TWkAWaGrbcKfz45Y",
  "key9": "25TdufxnN8npdDYNQE7coFQFUD9DMyye5mes7AyFCEmcrhrGes1YemYj8PP34buqBKaLnmfmhjpJUt7Kzm3XWu3k",
  "key10": "MVcyWz6DNKEonYp4B7uqF6w5Rrou6UVZh36CQ5sZNvdVjvHuKEZjHmadQgpE7GJpUHLfRMvrJ1VLSDBo6PFwKD9",
  "key11": "pVxPwywnDYPdxFAieCxJ1kkcAyBShLM9QForJhb4SEVUYMxi22e7ifR7rRava995SyvfUa5iVx1ZdhtDa92jxhf",
  "key12": "4WSjiYPpXwzQ4w7zxG4K3R5ZkkXXNbh4cB1UG85ePUACTB74rooLvUJybw64fYTuMYv7nx9CSquuQSWMK9AaBsHN",
  "key13": "HP9aYoRWEj3qKa48NqRza6QtwwZLTBw6tLus84JdRSViKJMvVjqKxYzEPxHAXdtYoBGaaXwZtewPWwbhS72i18F",
  "key14": "27YwLmGg8zs4mqQxfgZ2o3fgv768odrgER4ALJv1b2WDBQra9K9t5LoZwrspZVxebvmHShsRzCCbDJr33AqYbLSU",
  "key15": "661Nf4WXtzqZkpgTENx5hJcYNLpVpehWczzUbVXMskKoHAagdv7J5jverMhLTdFK5FhTExmJQf1uAS6pTdv1UnJf",
  "key16": "4Sm7UB6aDH8hikGeGXz4SikAfqoPrRHpS3zNXPqbMPWGkt8WVziTyqUDxZEqCgeJgF8jPyRFRHvw37MnpEkZipbs",
  "key17": "4ry9p7nrb7VmRxo7tSau478NJ336LiMwP2UisNAFbu5m2BJyt46qGPcrtyoJrzgCMAC34ZGSkterkir3MQpqdwZ5",
  "key18": "3B2kxjSWVEg3Lprj7jxnPje4skqghuUXCQ3NxHMmFDbP21srezrtakH3WCEBUcfdxu4JP659yw4x8nk8j9v6J3fY",
  "key19": "2GzpfFpYip4XkvtMzKgnVjbG3GmhN5m1PQtvSyZKfAYfhZ4xVkxU8B5xDJQifmFQ6ZnhDrXCzXKLBpa9yyHdFZSk",
  "key20": "axVmf4EqRJGqZYDWpuLAcdiaPmccyB5GWbA8kmyoJNbAQv9Zzn9n7JAjkQDpCiBeQYwMo3MbDSNzaPDctEa18Fo",
  "key21": "5jX77LaCUWaxhWbs8B1cjpkMezurCkQP2ySZcUnpvinf2gZEkWFrhVbLkJdFHL2KY6yn7qVx2TufAEdKLH4viCHt",
  "key22": "4BCX2f5DdS5X6ZYw7PQJtmGzTmbaiv9AZj9r6zTm4yHNngdud9ZaRHuq4xN2FWp2Dckb64HuqQUqFykqVQHSjYok",
  "key23": "2J32a2Q18jmGr31A9pLAqTNQxxu9KeUSTByznwKLwKc9r1hy426MBESfEm1mFDGyCNoJZjBccb84JMf2ma7LX7Md",
  "key24": "53N1eCPc8m1jLCbhSTpp4sx9fGCPu2CvWaKqNUDz1Y9m4GhZUZgRQqNcFYdzcE8n8riUa1bwbYdnHjgJJ3E68Mhr",
  "key25": "569SMSwgoRBX6E5oaV1NQTEiYLs7tQm7K1qPQYkSoBf45sbaABAVeyGjbRozoGnBvnE5vUFuZ18gXfgc6aZGZbgk",
  "key26": "3qt7i4GAfg1hYPDt4kSSHUwteSXWytmbfVYzE7tYHibqZPDav1JfK2FbtHEz8UWFWStUvW5RqwCQt8p97uYHaCbk",
  "key27": "22HEskqNUeEDraxgUjUPeF5VgKHzLLJE339aSGoKRB7C99Zi1yBdnEdaqJJK4s7wZb9f7r7pLZJBv5oJZVxnRG9w"
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
