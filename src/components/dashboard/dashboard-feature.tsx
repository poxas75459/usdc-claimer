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
    "6hF1d2urviHvcNT6pmoDmtz8xUPwHHTSiXmU1vwhvqzxMXQSkonmbjTq7D7N5yBDXGNn4UyWbM2gwFaBTSVSs7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ELqr75zQNZFFHQZYodu5vTfQeMm1gDxoCGRy5THbvvXVEhLtdDu11pFLdP9drVzMQaAD4Z12tA7Y17d1hXe6yth",
  "key1": "5BqDAqhNrbk3SNtXh6BAUYU3T1vB7yZg8jeGu8io1tXQoMaMRjpULiM65s3BDhZ3k8DASUCPpgqq6SgKoTULNtMn",
  "key2": "39mD2NF7cqkT8zroxkaySdqdqiDxbPYiuJ2eoJKY3WXcgytZGJrdHHcVJACu2jjvay91HGwPgsvcrSH4r768Vgs3",
  "key3": "61u6s4jAjQWvzkSZjMiCHUd7Bg8FWD7v8a23ApXjVGcxJ4c1op9RPxSF562Qtdqb4WjVeQK5vN5rsfVMSKLGvN4b",
  "key4": "3pyT6mJMSnTE9qwnmwVpND3JbYJAxQ26M8PxuoQHafskomyugVYdwDMtgPN7tm9Hi87dw7pgmGHnEZVjLgV9gAmb",
  "key5": "3XdAVe652cEdzaqCVtkuw8LbKyNSLfH38MEXwBAMpc5CzMSkSa9WRD8kyB94M4dZzameDMb5AmPPiqmgu3kEmC3L",
  "key6": "63vwSULwg4S49NXVFRfkdvcNv2pGyeyRi47S4XysgfgQ4J6uWov4ti51ZJD7zUwcx1BAk1dD68G4FPrUtzvB2De6",
  "key7": "33YhQi8aVoRnY7qh6RMxzk9pkstnnbJ3t3ApLfRUg4vjXKPsixG1DGPp4uV4zNNdeoE2CRzyUEeWUqMX9srxeo7g",
  "key8": "2j7zJBakHt1JVy96dLcRYpL7heHzvwKBCsfUZv1h2Nsa6fT5xxDvXFJFPfWT63Ds5kHNctoJKnQPdvPkAQuobdQT",
  "key9": "3C6h6hTXwHsExtHiyn1djUCDn48HUXTtV7nZ98kh8QKR1ToriEKEduE5ChDFjzZmZutjZzHQZ71akSbkWHAnRgCU",
  "key10": "vxz1JoCVi5ab373TcU3uD37AfBkTrHgM6s6Va4eMnWXaM3z4L5aFYv9qZUg2yC3w8HCzo1MN9tqmV8mSvVGQoJN",
  "key11": "5oi1XvnMQe1LvCDnLUt8PPF9mZAxmZ6dqFwi9aLyLQzdaEmqpuoR7iAzk6yDtCA9NMF4SE8B2hfHsv7MH73NCjyF",
  "key12": "2d63nkcS9EGAtWYA1Z6Totn4Y1HmuL1Aan7XhgiAeVaU5JdWzYpuWMA5mN5SUk9gYndCPwW6LkV4SecwhSsUwrpK",
  "key13": "2sDJqKPMk3kK8KrXX4eCSV4EBvQSNSzkr9BPQ2B6YvzKSWthof5oUPGbhU2bmpBoiSR1x2M2Y3cTMgsdPhqVk3TW",
  "key14": "4HGmoTZm5oMV85gspLDeBXMANsoV9RjZyoBFzoNiQxHdXTG9mVD8KedkpS7iXz7jKxxjS93uCJfMtDHa2K1iLNM8",
  "key15": "2VydovUZfYunSwJB6w6dghxjLJnM7k7LFr21t9VfzaaG6PeRUsa1jCKzH5TnBeEwcpmSP7dLQDDdBC2e2hVNdLJW",
  "key16": "4ec5KTyLuvt11EWofvemCANTcxTMo9omAeFkswcsQSganjChHhYrsydmeijM9yHtuYg7xqP3rut8g1s3P34PTRmt",
  "key17": "QF2MnHiAATXUnRpZjTSjXXtBduaAJBCZzb6oPEBGjHoVAP9w8KxBXawsCPhvVswxdr189qb9nqY8udXn2Pm6rNd",
  "key18": "5mvYnXYWsWBRUv3pRaDJ1pkLQewJmQwzheTnG3MvPvhxezQ3sZkd6E22io3iypER9gQ1CfxQrxj2tUTFbXFZv22A",
  "key19": "27jLChxj6NCRAbMPL7BF4BRbKXbUa61TYDtaGiLiWda9VW9y6CYf2BMM3wN668jrPZQYZWiVkqKmu3pXtLS7HqKT",
  "key20": "5LwD2uQdFHPUyBpUnME3QR4LMdHEtGQFDqfYF5rqcqDSN5hLQLvhcAunWmU5NsNJE8Y8gNwFVuG1XVBMmZKA43fv",
  "key21": "3b5VtQH8YcnkgJqxsAiYKV6DBzkPNkvLQY23uSm8Az9KBycaP2kuwRAMo5twsUbEg5NvTdzvzpDUBhHGtiCHHPfu",
  "key22": "4erjKDTRKJCuWgz7TqXXzwTfHF62DMftzHMb1XAAQYMZCgcZTZbfU6f4AxAqaxj4gC5SE9xQVeD8FXSpBfzFLdwo",
  "key23": "4Y5AKB9sGUX59rbsvrHWBzCbP2x8HnRffGsfHSSnuaVJ5kMqGfz8EuY5ikiQV5W5Zi6RqgizeWiXQByqY5ZjkHeN",
  "key24": "2R3Jb6rfKftGAugUw4KHPcJTimEE3m2JD1S2UradAvDn9kb8qh8UHcGTF5y5jYkUnwMQRr76ug1JrjuTbKBq6mbE",
  "key25": "3JnNuE4YVtEoF2fJfb1UVFLB9XSkv8tRs9ykBDzwkZcu7Lgw2YhziLLeeQmJgq3ZLiTVVxqSQbdtkGAPL7xM8ZdG",
  "key26": "2kdwTydMth4eWZKMCAmhXma98Hxhxw8VnJ63zmDHVdnxKWprLjiHN4zeY7adSjNAcn9qzEjexsQfF1SxEPaeHd9c",
  "key27": "3JZNAnu5FrqnVJycuCgL5hLtURhj7DT99wYABgEEu1gCMBEaU4RmD2Ed8D9toZTdt4X4EUGcA5xT73g4Ydh9H5Bw",
  "key28": "4aFnivLYa34uTVgapkUef81eviDTokpXrTgDbzUrJ7nrwsv2cLUH3h81hJYqh4PPfFWSkffn8wfsqcm5fs7kRa8q",
  "key29": "5yPLZ6XFmRHA3SeNW8D3sPrdXf5qHgQ13RErs6PGfCu1BxjZgPWV97hVNBQFgdnUVMNe85HbboB7jVdJB7hAQvUb",
  "key30": "46Thpv2RuZ7ucbinhxVnGDsEgPHBxYLDakbhWaDvEdMFFuV2yS2odbbNS7KGDanJe3HRp5MA1ujL3kRFCDqEWy2q",
  "key31": "Kzykj9WSX3sqVAnUDhLGJNBC9ym1pxYgwXZMVFAXdA6AJZXnyhxjp179hP4davHguA4zGDYadxLZtg7Le5sXG9n",
  "key32": "4CHXazK7iUdpySwdDuVBTKMdW8dHdRnBjeYCgSWkU2cu2mr97pqaizJAbJVh57YEqPZPr8uoi97fntBaP53nqskC"
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
