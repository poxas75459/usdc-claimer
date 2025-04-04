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
    "4NrKYXHvTHGBwWXo8gcAFeW3q74WBV9zhj9bSRt8oKXY1o5YddZBBDN5xoCKrPRAgda8oWXUThfp6kLxmYwL6mfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HJtUqb7gf6Bh9k2iyCkHGZozsnxMEN82TV5YZMyv4TgwFRGQ9ByFqoYn9UiSH89nWpTBsFCvkX458fBuiLCWVsm",
  "key1": "4ro1Ac6pnerq993KgwezTApKyLScS8jtTsUtH2Fyt55Da9apfpiaGd2D2zrQctgFg7K4NisS8YkmKs7MKrF2PDxT",
  "key2": "5F6bGpAwMBpPjMvQYLB5Ukm8U6yHnJhSwnRnUga7iswCvYq4WccHqF9FqkzBPPxUMoJzPsbFQxaLq7oXCvmw3cfN",
  "key3": "3Lj7pByC5bKzxxDVvqAzM5CwTcU5vdAa6RfvHhZ5uKgKApbj6xRuq9NXWWfCg1yq9kCT5V2BwSGf58byEW8fxBqx",
  "key4": "3yH682X1igJVmhTx1ugjW1A2ShMiTa6ofR8Mt9BJBihhRxLkwYqdrhrkvNw1cyDQjvcpzFvjN4YxxRhti9TE7btb",
  "key5": "4CRMChFbR1rHR1jb2jjXKuMe5DGegrL73btKtban9PTuagwgVXohZ5naxpPUyNMC3RZye6LzMnmDAbZFmvitGcou",
  "key6": "PstnFHWuxKAMrsqVN2musyx2j4bKJmgKHenAzKWeh35rZqurWtGk32GYJmS9wBrMrp7wrQmrJn3CafTQZUj6Ccp",
  "key7": "bzsJE26YDzfnPTGouCFainFTce9L8cj7qc2LiRiH4R2Riz5W5MDwBwcR2Yrp9heytHDu3XGPVBNZ3rCk6irhU7Y",
  "key8": "hRM9D1XviWdKiMU5n89p5oSiv7pawpQ9HSUi7d4uVsQe2Grgamdm3FnWKh8oaGvbUMCXfBTzribgk3Ftg1gxCve",
  "key9": "3xhB26G4Jytqb2ZSR1ADo39cpwxhsobZtM6mbS7kkSvjVny3LximEUHkjJNcbvojwFiQSKa9GwB5JRu2ACGuC1sJ",
  "key10": "2rsDfgLnkjxBmWmjdN3VDUfCDKpWvzknSr9RgYAT1SYWRMXBDfwu2zSSqpNorNXG7CpKaTxhQoA9SY26TriGJWHw",
  "key11": "53dmYDqhwGJh4kLPng7RXoojsfM1CAXEdAuq3wKwU7YP6WLn8Y68ockAWUWxT7KhzmaN9tzLqh9h5KdMsv82WeDr",
  "key12": "2GAobBBTN3npN84DdP3EaRN9peRdUbpb5npQnm3E2KqqYzW8LrH7D2GmHnzHkxnUYGGbaZKjC5DpHLKQoXKaoqvx",
  "key13": "4QT4XtfPUE6L2q8vuQE5pLKAfKjXrU4egsh4fLc79H3FLdHGzNAddPfTRWuWnZYtVydMtBpeNYfkqfjEkCKWTEXA",
  "key14": "FywdewbsJ9uVCY9UAk3zHbBC9RgebtSgSmUnqT8H6RjCmHEZAQnS2eBFMo5YuZrN1TqMFTrGeESexiB2td3tUDd",
  "key15": "4WFsPb25ES8F6q9BQwqx8nGHYcN7XbU47gL9kZwxN86VQRuAHV4C13SoQA14tpwLG9VachuGzLoUFgCQqihBMr6a",
  "key16": "3vGCoe8DjmeWLbXNMqPdgdU4kz21mrBE1nqXAENZpof3jjPoTnR64Swox7xdmCukU64gErdCyMWmoQzyP8tdjzXT",
  "key17": "vMDWsjxTbiAvsHNZjwCpYiqADYZc4KjnJ8KtA5eP5TTWJkt35jHdCDvh2aS6LCPWXW1XnLKWyqdyVYRu3wtDUcg",
  "key18": "WJGfzx5P8VmzBQjfQqEpjHqJNtvPDNk1HiRbEdV3ThqAQJrndDAjgyzFbhNy7QBFZPhaJjx9eDhoHWmta4dQsTN",
  "key19": "3diE4q1gTBpqDtNUJRg7dgzejyoWUSu4qBEvAXHY5vnuSSAs9jpYNFH79c6h4BGwVFk8j3twHPq4EhTK8iagJzUu",
  "key20": "WGrdPircSyJCy1LeMYFbDyhwyHRSbwHwrqGKmHyWX8Preso1n6ejVRykryZvfhWxLdkyq5eFGwb2AukR78JygRE",
  "key21": "5wRwkhDgCWQDHvERrNseAP4ubAvPyXNNqUPaFkzTXEeGvWyFi81caam6BQzEhiEmkF66CGkkbxE3rrEyn4NU71Hc",
  "key22": "5pkvYuu46GBdHwoWhNAgocEhe7JcyUcBeffwwmkhZGqF5TUH7uVnG6ytcztdDSAH91DofRKuMPvumCk6PaXWcSF4",
  "key23": "22q5xxkFYj53ttUSQWJa7wjdEehRdXhD4okAYT3yuxSkS82tsQsYCzZQR6htEffW5UCB5edti5E6zK4SFQZwVEki",
  "key24": "396nPNcsvi5Q6JMK9kFMWEsRp79Jgphq8KjWATCDKCc1gsJ9pSkrPx7ZVpLFHHDk46xJ8wkJtfZiYrhozKbQRXVg",
  "key25": "2M5Z8KMtCittQtEgm7FMypeCrdQv9er8hDAvFqkiAZsKiP7JxJ8eZb8PxvXqy7C1nvbnptzUFj1QEYAa8A1Qgreb",
  "key26": "337twsYLSdeG16Mzo8EJz8DjcCvJt4mJhzxNhT1axLawBZD4fHnyap4fPRfEeGhMwWghiEBqe84dHASDLBSk8qLq",
  "key27": "35GDzC8UoTM15a5vDywhscfg8RS7xL4z4Mq8KYmKq7tLq8D4LuNrQCn7cGXcwHpkUayA3PE2BGY6cQsiGpaXfuoY",
  "key28": "3joSK2fmTWm3d9avTnCxP1jedEwFaUAirzyVMNGBUQrpgsuSzRXaeSSf9543BVhMt2RJPWTTMAsFBBQZygBNpzU9",
  "key29": "4DYXjQwDzgUX4kELpQaBAS9dyh5wTNYpGNZfupsJ5zGriTZZqA4hFbUvCgK4Hb4wY3kTMXu99SuKfaG3MzuKJgww",
  "key30": "623h314zhV63bHXeSHF6KHvTeP4HAusbtLcTopDD3qUmYKW1eqvwPaWYLG76v7XgpEjoDBdcLQvz9ZqhWXDj3cNz",
  "key31": "31sYQFZByUFLmNnBqsmStaW7Bitybfs7VbKMNGv1KSxmnQy2JWvEB55hbXsUM7zQ2LQLhy1tNWmChG3ZDMP9M8K5",
  "key32": "5rsFs28WsQgkPZ6H5wjF8cACdc64JLLJqaYS2zxw9FY5MS76R2dkhMyAKzFWw9qdJ8k7wxw9CD5v1WvgDt5hkh5P",
  "key33": "9G324DkHfjfVFzQksfFBZPnHcNqRpyzR3J3nxjrRr881ti44NTEd42G5TcnLvg1wtkRAJJgxDmPXv1nZhcA4eKP",
  "key34": "4d9uXyi28uzxn4KXFc6gdeTDw7CEMnWHDESP1TRdPNoe15LyPHEWwPC8XTZbAXpBMBSWdrBCpErT5GC2GS9FpquP",
  "key35": "4hMgpMBokSz9XskWnGZLvH3XZsALhDDHAp8wC1WDPE4cLhTbw3HRfVBNLQPrZNXswCsgyEcp9a6p1aAgbMhGKXyp",
  "key36": "3n5hprfa8bvRci8r8KQDHh9qGR3RxmQVALERM6nNygayjVHGpeTsM2QhRCGtQYenPd1fBjTx8YTfv3mPjH2jfDHL",
  "key37": "25TQs5nVBkbhKRGUW1E9VPXQJKK7PSyPZYYSVtAnMd3boPSZRVVEBtt7E6bWifPicGhqD5v7PMwMyetbmYaRZo2d",
  "key38": "5NgWbC58md6Yr6ekJqLTyAwEpCt4zhpmvzckdbmrZ8LRpWD8nCdj6uNX5ieAnsDaxE5M5oa93CLsHoDhsZTjBYt1",
  "key39": "5K8TxptEJeR8vvF22E2VahFdLaCzgFPpTEk6bxwMUfYPqaBtFM5CCob3UcuhEfigkDHkXyUUKuXP8f3ZiAsWGwdD",
  "key40": "4LoHaPZGGfSEXj4g3ZemEzuFA53Xrns9aX91jBYsFaT6m3AqYZTfxRGDCz6STe9Pkhd4dF4JdGHGuSoRsS2A5BNz"
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
