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
    "5Us1ZhsdD1cjSpNJHYPcUmQXNjJfD5tJg4KKBNom2kcNqkUzJ2NB8jvNJbWnvsoQ7QJQQwjpmA2xpRFgpyJzYVRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24uXJyqueDgkfHDfeu7rSUKUnzCzr5f63gpPjE5GBruvJ8T5rL16oA9yvYcZ2opH4U6dAR3KXyX24GZSNhMqPYpG",
  "key1": "43DmfDiqaDUX36GGbCALqD4gcu3cstYpi16wzfQ2dzoquVXZG9PRhFK7ivNV2Yi7cmCm1WUw3PMH5QwipyqV6Uvr",
  "key2": "2uftjcXDbGghE8cdvJdxi4h8NfFbzrF3tLPeBz8usRLHb7nVTVX3c1SsEsWVegTHyhSYPJUHDvTVrNEYkboGvKjV",
  "key3": "271iGG3tdYGU35VgEnR7vuspWNRYfBhADDMFqrB89EHA4yM1saHJSBHbBD8mH4BAJEhkDZ289JjkqCxCcnywtsNi",
  "key4": "2S5NEYXADMLMKU4TK62LJZvCA1oS4y4hWfXX3NQEyQZ63Nepo1aa9VBNrqoqRxrWVMikTMTPoUghZxXQEq59BSDj",
  "key5": "NCH6FGaqRaK5wjjnV9jVdch4dhKjoQ2e6RLSidSo8VSYmjP8Na5jxYSieX1drJ3TzUxbHy6PjUm9RD1yExjnNmy",
  "key6": "QqXJiDB2PNZiGp89ooAXFGSzSEKupFk2MUuuDsDFUkLVueU8Y7GrPpsaMjxiK1WoLAV7M2tXZYtoqptUDorkrNL",
  "key7": "2byoEYfgGSCs8cCmBNs8uDPjynr7zhWBrF7hWBXKVgpYQHM3Kex76xhzDX3iUKBMdYuDisCXishSP2F4MHrz5J7b",
  "key8": "EwxmvfDAnwLkJMfQWcZpd7MwmZXJEZLnjbrSvsRLFgeYt2Ec4gS7SLtWN8xLHDa3wjGmCjGBoaGtn12gQKejzAi",
  "key9": "haiS1Ag3mWdSFw97gKpJZ36V1H2UtAD5H8FVDkBLg9WpQfQ8r75tAjojnwhxQBh9oDye7JXNazeA61m5xLnopLw",
  "key10": "2LiF6DsQzu3rYurcGcDnLHtAgEmXV5iBKqSxvgYSvvwczF7eGycwZmTMyPT1ASQWWfaPhM5dvYcYft9t6YKJyB8E",
  "key11": "5J6iyMcuQvGqzDBBHtt2M3mjTHV86sFQNkgZ6bkFuAmHaWaH7FANjbXAt5725TetQZDZcfSgVs6YqdPuXmcY842g",
  "key12": "32wxGamHCVUmRstiuVWR1tjy8THnGqsA4BmA84zkTfYwziAfj1oD4zkQTaEtodLkGJV9kdgt1QDAu62jBZqXw4f5",
  "key13": "63smfiEYrAaJRWoX1uPhq7sS7cPhZuoMNYLKYY6zsncJ6a5QQP9HVQp531d7bRzhsZ9ByKJyTi2NwJnxPbcG1wWz",
  "key14": "2KKqu63g8HRNqeoRY8jp7JhrM4fVNyo8sftmqBKTCMChx76wHZQCEfb23r8kn5rXqGfGEPbBe3u9peizdYQCLmed",
  "key15": "55wCC68r2Bw9dBbWJ3AWgJeHvrfY5XfwFoA2iZb9CCpY1LA5rYWr5DEoUcAr47gAZ4NAa8f4ZVVDxATRdjZM4nXn",
  "key16": "5iFhiLkadeHZzLH8upLPR7nshHjGK4YNsGJW1Q2BgasxvrJKDBkqKtwwJKfi2M6nQS2g2Qw7Tk8XDnn67JdXNAf1",
  "key17": "Wtyiay2bMkjJnQRUsUJmDay111kqS6oqMMqxHvc845wW9GSJFmNPnoSeVRrrppxqBYCpGtxQBatpH555iiQrkoa",
  "key18": "21N7A3PnLumrYb7hLaihKrKxKBXqWfc3rSQir9rGXJJwF8xfHpMP6u5QhSD6j4Fd4xBgxmGwNvQKpMWiC5A5JRKh",
  "key19": "5uRmkZNJmfDQ34RiEvEmwdD1LdrcvYkWQngs3DYLZFjoq8wtczNdggPKWsoYyvQKzT1hN4yxTvhvCWoPURTVWyh",
  "key20": "2bVWP6d4Xe6LJtFzv2C3v9d6hknsS5ec7ajBWDMn4wZZUdvUzgusuHFqAeVVzLVuYXk4xijY4swVLBPuS5ApnPpS",
  "key21": "5fsSTMKXCaYrtGDR2nY2n1RywBooxrWEhQF4uq6d2nTddkpwQTTTcfBQxPEJGdC3UrHkWHYJDfB1zvc5iUjngq2f",
  "key22": "2UvbUAsqT3DDvgXfseu7FK5NuxXzqsdxAhcVUxPSBSYhfFHXQodxSnXAehVDyp4cYJjVNd3LitfbqvRPjThkidf6",
  "key23": "3Ug4VNKjBS5GaH7HG2WkuRVvRVWjfBU1Zsu4jLFkcbxytwbevKJRtPEpi7EC45TcuWwf46YTUtaS8cxd2kMcwgj3",
  "key24": "27dmrwxiXp9z4aJpEYD6RSmZRBVGVjADeknHyaUBpL5o7mH7QZZANLTfvMXUW4kASnSdC6GzG2Ht95a7MvXUY3P5",
  "key25": "vmHhLFraJUQMCY4m2qhzLbAdFT6Ly6BBbj84Lic1S86JsTzA2qzomLMyqmEjF5it29EKLAkUNg8zf4j9vABCmeT",
  "key26": "4riyfSttaL8cKvDx3dUatnM3pevGYzKNYRfLRgFi3W4cpzNfEjT82kThepRazkorajyuchuyWuU15KFzxbPag98k",
  "key27": "4zQCmqa9cGj7LJvm7jcSNsKv63wyxnGqZetJYDoRCB2SgaPzvPkJT7FkA4kAwXJmQwcrocy6Krs3a9neyXFS9yJP"
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
