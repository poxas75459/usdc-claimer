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
    "46pD2516169sSRDx3LKQ31emm1DJuEnidpQPUdsXjnCRQM6pVXaU8DnZSWGYVi4nWzGqVfzuCzNpehqeKhPG6Qdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6RYZi78GoLZ4UukqYpXXfCtT8sooJpmzziyG3wnZuaN8hpVc3dCmvg2d49eoLrk95jiSFGzEhFdJjG94AZBxYKm",
  "key1": "2213hEbKufnmWz5UcF2jXsgATMaFyxWU8BjvygPaR3yBouLP8ZBBgyxd2SJx4WV62ZC153wGhgAof4puhDsf8Dyr",
  "key2": "4cx4CjjKD9md2voKJkPjjPFBhM7QpVRZn64FyesQ3JJS4FGmgP8PyrPNV45mRRmTSofbiAAfwUfyLM4dZkp4yuWA",
  "key3": "2jim42rAGFNB4YNHGMJckz6xeRPKwy9CwgCXAJPZCmSc9gAeT5cp454WZaFEY7tGCJ2iwnDLLDLb4kLp6q775jnz",
  "key4": "1Ja2KjSGR79Ns6BpvCizBBJCZ4bBub5wmTrQmRVBFfCYeTBZ3gCwVrpRjfkafV3ggWJEUQGBmaapdExAnk3x9MW",
  "key5": "2VZoqapgSQ5cvXNJrYkrFUgxuDxEbZMMMcTr5uu2GSpyxk9Rc5C2Wzt3bmpb6WvzEjMuPjgXtjoXRNinXUG1gXto",
  "key6": "4kLaMumkA8NwYPoy7M3ZxwH3wCtsBWNqZQFTDEqQwZ1QiBSydZCAGpXkxxVy5uSmDiyCgcVe5x26z57nefHccdrf",
  "key7": "3xqKqMndtamkQG1EYtCfPNbYtTpHuYAn8d4r17Y9hy7BxhWtHvFuunffA2ozh2vXQn7fx1zVe5RGBeyn7jpMgcWW",
  "key8": "61RTi5tiUzxVWGbK4ppidmiwHt5QdtjVinpk2un9ydWrRw8VKfd42UuxLUe7aJNGMABjZJizpfLRRwXicSbtpfgE",
  "key9": "TEHtoqy9WrBq2EpgD186eft2Rf7qYoghRRbVgzQAuUPFuTMXZEgJv6cTDD1omtWcyYRPoYRVGBQNsWGBktppzjs",
  "key10": "3FAfxxGbR4cB3z8wnZ7gBNcsYTwwQvBFc3a3GKoMkf4gNyvNz7WFotidGYZPTxEjAiY49Kisvo2Y5qLcpHs3ke3o",
  "key11": "2CiDuyEFaQndhnRnvQqvtnurQgVD62LKsJX1k31UuZNHesmKg6vkmpq2QmY78g9EJMXtPJ1TxdS1bFrKHyyZxekv",
  "key12": "3U9JNGKUE5jeikd8s5HpeLJzf6yjJGzT4butwQXEknUQf9x2dDrwuaRpciEDp9vz1TJMH5iyYVyTf1NrffaYK7PE",
  "key13": "3LQo8SCKPc5KKtrCn5VgfvbRyNYTFLhNwmMjPbWKj5ogBDsUTgUc2n8Rujnx7kKY2gvvSNfFJF2iVHH7wTh5sQMb",
  "key14": "5psBgW3G1qmW1zoCrHwh3qKoGZcgPgM2yC2Wf7WAyrgfUpPUzHUsq2yFmLsmuPkot8sMiaJTE2UE5CZGCiGPCK4K",
  "key15": "2ssJ7ZPyM1kxrbP2RBZbzW8w66qn6fhcjcRUsaCsDPcwhgGxyT8c2nD4kwUmTcTQNLpAboiQovfWwxQdrdogw6DY",
  "key16": "5Ht3fk4MWUrFB1C6jYJWoSy9HHHFzkkJpJR5iaepSZL8pXZY48f6KEYqwBfpNaEbrHL9Ei6f4gFnXNPHTMyQvJ7Q",
  "key17": "5mCWr2eJWGpdJ1nxvHYoKkbsYcYh2hJ9X6SywHSAPnHDVBkyxrQbWdoChLt2ftoXAxqCx9R86zw81RG3SPvKXsR5",
  "key18": "3uVkn8ekPyFksY5fDCiyReRads4eLmQ1HN23mE7BAxGH2jW5Lpke1VWBsifuMwwDKhLh53aYasyUPVbyArpxT4mv",
  "key19": "2Djuqwxso2j1RNt6A3s6BEVEcmskh5P9RLcmnJYc7HfUUZcxt58eHwwae6ormwtYw4zS6XqFXEVtXjF5twx5noEd",
  "key20": "5voPmmnT49WDpMpLjj2kmjQZG2LB7AQYCWKAx72ZL2JWqGVE5pZi2dwD3fX1Zwdva3kjbzKnSJA6xDZntnchBLn4",
  "key21": "5qbzrcux8TaofxdqMMvhR5gkkSkCJzEfFLYp4XVvCGZoCrpnKKsphKdyXSerzTniDy1BQEziqLWKY7p46BPSXJQi",
  "key22": "4NV88UvN1jkpD1iBV2XbzUrPVfpmhQB4rVgX8bYpS2TWaL8Lwqu7NTc8d11ddMDhe22XbgNRj4cQxRB4BoCqExKL",
  "key23": "d8cbDXr3swRkGtyYiRY9ZYCavaTb19Z78bupMGbR5bZyXRqUEJfFBSWiGi1Zo1izy2vfgu7VzUSqasxTByomZXV",
  "key24": "5Ra4h2tyEeXkzSDnZ9Ec8QmzCcbt7UrcuyzgMEwaYUFR55fCtQcCQcvvozjKjEo4TGXh3TLZQBpUDeZ7nNRd1Ha",
  "key25": "x98H2mTX55g78AkkmPXt4Pmt9tihWxPwoxFu9b52TdHByNaoXnrFXBGiRSJPRjrscQhy64yMJQPcJqz7nnDDnCg",
  "key26": "3PJF4X3kVuLmRjpctHxamkPQ9sfwFEU7LoNge8S7KgG34DPtcbnLZ65gvD2kvLP3L6ZYKwpgnuSxmS9a77Sw49sS",
  "key27": "3tdvEBCFY4K6R6YrA2LSKLx6yj2KeMbdzLoiNJ336dpP5bfYvn7Tq7fd61Bw2udcN7iDqhXTf2MC4kc4nkk8B5Pf",
  "key28": "4t4WQNckiopMWMdD7c3uKPrDMMzWGT3tpS7BPSPGnwh7jvK7CgiyzMZZP8GK1kjRutf3b5ErF2M5sZwkAVZ1y86E",
  "key29": "5mU3BdR4738KrJJ9i9ktVyuprSwRqEAvdPwdtHDYVNiWK5q3yFghHj583any5iuCzR3yQK9EUsAfWGVU1U2TWz8z",
  "key30": "4PBAZ7a2RgkPLoAHUdoNFWSdSAaSJb6L1FaEdYNMSywz8Xih9jqKBWJzdhnNU9NBJEimwyjsoxsFv4MMuxVaZtpv",
  "key31": "3AH4P7zueWeW6RZBP2pbCgtpxetVi7FYFqSNgivuZKWF7FMbKLymJZEXbxCd1pDNxiQTMSFn3xNiAdbRgTYSa6oq",
  "key32": "SZkPzushUfe66Sh1Hckh53JxM3V967CgMpuPW8uhsrusZF6LhbEZ8HJKVYm7HBuQT2ThTYx5NmwvAKkpUmJxDDN",
  "key33": "4ZN5NXrQDZ5B4aV56TDobwrapoEFZXsEKKmhLkMAKBC5ZmLg1WqLW6JW27jbbcM1wSsWgu5TJMpmL5fg7iWMEhHu",
  "key34": "sEtpp2Dvyfyb7sygRuTHqkX4ckJX25kJctsuoRjwiTPh5azbtMFsKJ2MEoWzjXnwNDAy9vgjksgyyRqQmEUs1YY",
  "key35": "3otZgUmVRy7QTSHgadqwiZ5Rom11W2x9uBNWbNS9c5ASBLUvo7VfgHcAynfxZbfXp7dVA1ijCHsDnvje3xDM6KrC",
  "key36": "9Br7nBbBkZpfwCRAMW1o1XGYCX2z6QgLtBViRyt1cmijYkJUcd2HNkretPEt93rXBqq3iNkryeXer37X7M465yn",
  "key37": "3w4SxnuqpohrXvzRiFWJYxM41g8PLsdhZZpPrBC3nb9iTCK2ppwLDJYdkEGazggjAUMAY4tz1Jg2SGkeRPwNwN32"
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
