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
    "m31tCy8b157Bf6fq9kJfoDKK2Xm7dQRDkvzs3y4jYvVYVdNuHx75v9DiuYywn3caE4T1uoGaDfjQPPan66mrhxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JhsL15ydHUhJPs5yEoSK1a23FrYaNpD6hesnzhKb6q4M3xdGEK2tXdCsMmXyxRR7kgDqsXtMttRaAdvJjhCn44o",
  "key1": "3xTMkjvhuALH64fPZGCzBD4YGbCCi85zNQ7QY3JcZLR2wWAPULGCrGbhzeH6GGKJiy3VjphFre4ZvojEVEArKMPy",
  "key2": "3uuM8Yz1UL4edZkfFi7SebirmWVcGSRYwz3tt8WrpWV2zB1aKBALFrH9tGXYfPPmC7AGYqvWHhtVkKBb4Cmc2Rf9",
  "key3": "5iG6xSuBJyWQSDmELpearvrCENJj7Pj451WFPeswmG3kuCvtjfRMSmyjEtXqZdnT2JikVAjRVLe5dqMtYpwCkbLP",
  "key4": "4KWgEvRNWhfj455rSFup2T4wRFog8i5FdMwTaNTfa87vre5kjrGdoHiPXP4EfENky3csJMo8CYKMZcaxaSMZsFnn",
  "key5": "5ceQSLqw6WvdxKVFbsKESfJmbhWCqbuwhiyXZHUa6BYii9kMSYBM8VEgjytSQ2MZF1bM1ASvjXasM2ZaLeXGe1JQ",
  "key6": "4KuM5T4S9SisXFfbwzvcUR7x21wQLXGTeuuTbR8kbLTYUFMeXm9qf7taJwf55NNUmVeKBRNwmPVQQcPysh3izfAn",
  "key7": "39MMuVokoSwZM7gMwPyRHDs32Du3w4XX1N6v7r5XwJ4GtzaczGrQ7gwbp3YiBzdBN816Kvxo5u965Z4J1BSyquG9",
  "key8": "2FQ6SDTra4q9GSb8521Vzx8q2oHYRiopVTYj9PzCJKYmGKmn9ZwRHHpYSPwNVdcjL2DoBa2yipBoy9dSBXNtFfhV",
  "key9": "nEiZboKay7a2eYM9pR5ZFhGii29yFdkkAn4RiV7WHsX4b289sspFei4odBLyhqiVbqApiBPE4VHRD6JHkznyV1g",
  "key10": "3o8bMs83g1RmGWgS8cj1WUcJKrP6Lkr4PmSRmnG9Q7mCEcRBTpZEBTaxxS8tP1CJ8nGx44BsWKwfvYTEUAHEQCAx",
  "key11": "3XVD3wNMxB9dzLqMYrTUx27zUYkr53uEunL6SoZjT3fid8GbpTyu47uQwvw5wegjXZwjpchMG3f6VtjqM5zWZj8G",
  "key12": "5yJsLAa6ABB4Rbsn6x98gtTjErQNZofjuYZTW91tjkTGs1J7dYNKmbQCt444hgwgxXYGzF2nSD58L9djvxCR6SMC",
  "key13": "5C9Yu5T6JrVV5B5bNHrARj5oTsPn9UWAwc9yMcTRzRV755Z8wSQLKZc2oPhUQbe5gRE8yHSggNH4TvxpMqTUUDVD",
  "key14": "2i5ozBJjEk25e1F7TtYFwqWL28QAq1m1wrZo3fM86WUmj445MNNR4nYfPHkUbvXD3csiqCuCx7sfKaFqzsFPjsai",
  "key15": "5N3QeTPoGdJMFuqDLqXwsveAdbv1nMbJkTJSoU5okaVERmExycPDPpujJ9HWppcqmBxAJCZhd5iiSxmvEZxv4Czg",
  "key16": "4uksg9LqQSnjFc8orbvrANYtAFEbqSk6WvMucXZpUapMkfWx6YhqUDjQTksv8iyRKxZ57zyZczRLQ4TbtfUqbzjP",
  "key17": "ndDx392tTw9hCw4QdaiXv7yRquWf1fLheg3SFGZwrpsTVmuEdBCdKVJzzipxNr27NZJaJexXLrKBaALgmqs9n97",
  "key18": "45QEBMT3h4hkmWCibi6o3xrjzRzxPpJUa7wBqVZMaF1qnt8uzqzN1raUWJtKoLCq8TXoExVdRBB9khxTChorCjwE",
  "key19": "22HEdUVVLjNUbchvipcec9sirvUBTxPpqvXoHH4U8zjAqoKbvBEyUJsCMEtBAa3fPAFEVDNDyLzNqXKXKFja1DRc",
  "key20": "4NMjYWfEn1PxDyXvys2EuQXqahtifKUqr51uEFkqZU4NVV6pX6vvP7U4sGoPbL84FJ9gKd93FJwF85njh5V5r4K4",
  "key21": "4HUQXLZTsjzpAXaSZmELqCWA5f8HxhvBkG6i4hoQRUNh9t4Y8BwT71UNxLfZFqAv1Y1swuXPoWqNEJ9kJMNeP2Hi",
  "key22": "4atJuu3Uju5otM8eRStWfo9kKd7gMttb6SzuCmmpNbxTDENQhsjwEK8c32yZjhqV33BdLSdtBqMBsdKmB2seRRYG",
  "key23": "5UtU6Xa8xJwoZKeQ8HKjPGke9RQMevn9bifoUwtbAzTwKzJ87uLbi31NYu4qzZM81swhSjHbqoNUR66Cn2PrQ5bq",
  "key24": "5s1jFnGx4Vte88BNq3HwaWFiHZNmQ6LQA3bEMrFXD2cwTcYv2Z62QDYWaaEdfD67839MyyFy8cGxoN5KaiQdBLhp",
  "key25": "2szthDAdEjQeE96CLiPp8bPpvkW9bHqeNaKiYqzR8tRXHEorrQafzpGcDjbXsibfNDRAkYVv85uh753d2rF9Qcz6",
  "key26": "3STU7TnwBiAL3c7YHCWQvkrFW6hvN3y3A4vF8vr7A2eGfHmsVkbjirDf6kPR1fSdnjuAzXshfzRvia2GdRWP3tK4",
  "key27": "3LUnxLhisKbFd7pJMDYdHeKtE5LvLRWMrDeXEnTTZ45MaxgkJTLwKCo4TQ1K2AwbFC21U3PsqHekKYwovV2w483N",
  "key28": "4srd1FhMPsqXXkV7n3y9cfsTfu43HdGNvgMYkmrGTcG5Wc7a86pctd5p1ks1vDWBruXqtiFSvyNP5SxVinU4T8zN",
  "key29": "ZwBjnQ234Mo5JR7FxbjY2kFgQYsFrUAgE9uBgcpvWvPWRmQDMzK7TGasVt2nLALQSzFjfT2ax9QRmhCSL4gPCxJ",
  "key30": "5WjhVKcnARpb7CrVn71zZVtzztJQQwckCkoADWx5hPzDPmq1PKJRdXYBm64q25YFbAAA9S1fLgCAwbgyH3LBqDjK",
  "key31": "3NQPxk1JQ1eNsDXEsmWwhoFMU1SaSgqqtRiKzFhqffiacjTXUaLE7i4uCyzQq5SG4JF6eSRV3NGB7Auiaez9SUjq",
  "key32": "3uxHBmPRbUgVHwfJnJDAk642LX9BdHU9CsLH8CgFt8J3edr38gReFNa7AZCqERDxtJfNwdJmZKRijTfN3iaLPJxb",
  "key33": "5caiwxBubuj28mJXLWhFZxYHdzBP6jEYuMzpS5HafYuhmXpA2eMsNmXV362SzeC1941RnDysGEQLc9CRoqUrmZHp",
  "key34": "57K9qSh9yyCbwwDfzFTKFbcLKhGNF4guBmYYKyvDqczPuUiFnNkn4hhjJZ8k9EA6EK8eg3MJ1tjSPCTaoucixtMb",
  "key35": "5e9gpghDyxXwzMBegNKwAnecqUKUqzjfUn34qPxqbR5YPQAXR3aYAiuVF7wsmwh77bP3BYeMgomiTKezKLUqFH2d"
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
