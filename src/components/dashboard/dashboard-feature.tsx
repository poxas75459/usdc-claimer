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
    "2HJH9oVohMPWTwEUunMyEBJwdBBRep38YaLvpAMFvrRtREJ7e5DcD8ZyXEpd7KuArGjNjuXCoJVSyR8LuuKQuQdH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f4zQPhixAvRdENAGWFXo2UfvAUeYYXxD9yRmydgeaou82BdYvwbcKmXNBSjQXhBG1968UYFWeQEawH19Ye3uoCn",
  "key1": "4qRQNZH118jb49Y7CRFhX7GXFsdJhfD58eUY8YNz31Tn9K4sP7ntzevkpFbSDbm6DuuFaSdesRzo2ND5wYwhi36u",
  "key2": "3wW2aKf8FyMzsxhueFaYfPZNaCnYJQgLqwDyA9UxXvtuZuf7kyXxzCEFBWkuQe7Xc28sTXQxWcgjrMUqX4XrbznN",
  "key3": "2J4Tm1cNkhzb3uhem1JCAUirHz9fRR6ABAS1dqrmJPgxV7ZsDv8x1RnTfT1AVeKXgt3VK5PBmNipdt31VAsRwtKh",
  "key4": "37KVFLy86RRBaMMxg3ieBfPvotWM9SzfQB2BuV1jpFt5nQsKvyY4cr9YzgjQbtCpoa2nmm6HDeuYwLPBKJTEWgcj",
  "key5": "kEuHuzAfjWADEUtMw8DFJ1jDTv7FHncfYy8MdcnDEggJfUz41SxuaL6bdakH1m5bCLKNFD7MqWGDK8NqkQst7x4",
  "key6": "5ewFWHVPGr3rnUb6KxDzBRSvtRTMU5iSafW2YqJz25v8Lk7vghevWYdiDhaQ6eQKDXvcRvEjuzeS9SL2hvWd8dNm",
  "key7": "3PXUzWaCSngdgzjNAHjshfkVPknDrkVCGyNE7ZeU6ML8UHuZtN2wjBkusvtggN5eqzq1qCXn2BJPgL28MSLdWYpC",
  "key8": "xsXJq5tTkxWRHxwx3iPWcPBjZr1yzk3No6uET5zWoZqe4hs53CvXtrS6ik4TD83RwCSEY1tWiu8QxwP84gNsixy",
  "key9": "5vfCJYGvKSN8pU9YrHB8uUJU69PU5Zf7etnqiFHsBTiXYxqAmKUisYDUCPfyyBoQWGwvd4VNnz8oevwcpxvZw2M1",
  "key10": "2ayDopcFtKGFwSQs6zQwbLZmvnwjS7rJNqYfkg2yEEQcMtXPnA4yyz9yje7r7qJFsoLt7v4WGC6CoZGY3Gk9vKh4",
  "key11": "3NJcW61xREtf9YXkJK1yURdruXKuZaAsAGNfPXNsTJEChH9dP4W1rsqUZTGQYa1k46BScRnEoynD2vhaAwkeJ4y7",
  "key12": "6Tx5t5of1RqY2PR59R6WEtVgu6Xd3B7PUgQEDziDaTE79g4g1Lby9pG1qYqeyKQH9iKMdreU4uYxFvMYk9NajJ9",
  "key13": "2db9un3iVpCHKF6v16ULVGroh8APULPWshatjqWjbzVQ4Gk2iHwKLGD9XhVqTpQaffob77Rzd7zhszS57vig9KDe",
  "key14": "3chmkxCWJjZUgrZexoCx1zhP44vQRFciCWDbEAstQLVx9h2BCi6EZqX2dPhn5Yyiq1MYjjpStf9e9eaYnpgsWBh2",
  "key15": "48c1TQd6SWBAKc3xcC5HYPRV3TZtEfnujxM34nppuMYrHmFFim3Jxy45cEyMh8Cajzsfd9Zq5dyr46XGgEduN5BT",
  "key16": "5KHxakjFujG9uxfjFLhyzBn9Tbv6LDfgR5g6YYbFVzYnchaxUGnMYHVNronudETdzTnS1epRtRg9HCsotsysVaAg",
  "key17": "3Gkx7fPDJdpE77o9Xw5T5u2LPfVF4sx8vPYRoLfpbZxZW23k2bYv7UE6ZXpxKroZ8ezBUMZe6g343zKtdZcREfPZ",
  "key18": "3SZeDNBea4wqbmWaxmBgmbM7J4BkSWmaRvvYK48untBQCP1HVQZZaX1NdAnaniDwSa2RJ1Y9Za8SYVrjTB32fTrN",
  "key19": "4vTmtecWWvwL1WspQ27PRXbTcpDFfM6tYuGEMAX8YwpxRQAvJtV4f6QsFVX2ZCvgy9x9hKULjXWYucfqiVvkQcXt",
  "key20": "4qR8vuaaZR1wAaC1qhardY9SmntCTVgWJuntCCURA8A4MvMekzx1JVviwrrGAZUx56tQ4w9qgGTBgGQBgjwYscWp",
  "key21": "4kzYb1MCc3oF7oKB8rCRDWWc9WCMWh8x5JxuF7ioZhggc3YzVpq1HshpRRdvNLrb3WEcRTR7TSeAdFGTZ9wR9wVt",
  "key22": "4M7QUQUcz3hEwCqT8EhnxhDr3GtsS7eGL3WuHvyqsJBfqb8Z9TMBUzcSL3EF7oy2wnVLWxvvaomsbgbmhVEEC8k8",
  "key23": "65iL3U4gLjkZjvRKw2e8JYKsqrtcFBYmuJW9aCj6Pj9JoZrZhDjVu4cMMi3Ng1iYf3meqcBvyGcQocwtiUuoAqZD",
  "key24": "2dFKFtX2styVAEy5HNsQFbShzHLgyRm6fHZPyyZ1bjm7juCdXbnkG17Zsx7LgSoFvDmTNdFD9JjJeygyes98ETxc",
  "key25": "2oPWoJVgbXZeU2kB3EpLQhg2LfX8aMRXCtHtqbzncGCVQCiFJ31aAStrdnERgf1bPW3L6YbEPRbtFBB1NvikUjiZ"
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
