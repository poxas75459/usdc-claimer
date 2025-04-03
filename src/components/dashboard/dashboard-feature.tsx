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
    "FbMRteBLZogAtWzjNs3Xi2EntfJwYUovQLyhngvj3WBttuaFkjw8SKcdAT29BWSAQtVL2EDrEj92hsxZgRVfh5N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dx22oeWZN2Vs8GhGu3WQgj26JuLbtj4YYZK2JywuNdbYdbsbVsZKxMzuMjY5VhuonapJTnKdLVAE9AyfyLCfWCo",
  "key1": "417KsHmgAiafFPxQvq6yXtB9ZXD5SNv3AsTRz1dsNmUiy8ixr9e1MfBw2RNAt5NkFor9t89CJHvBRjcku3zQmsYE",
  "key2": "4iUcnZRsmXwuu1potyDaRv4LqX8Ae2sWm3N8iy7TEDSNPwTTZWHUgBEzA8nErMMV7MRpssjZU2dPnvnSKjtTSxcS",
  "key3": "3BaidQSqFeo4tSrAyzVPi9X6TdZtQmHDsqYbPKdB4CYc8nvnfMy3NNr4RVZo3qSMDyTRz2vvt4diJNJr1mLJY9wH",
  "key4": "5wgYZK9S5icfk1951PejqnzEJGS5GPK5DbsYtcEjTyRgHuvgX95YhKFCvDXE8os3DSxAHrWjCSoZT9ah673WM4ZV",
  "key5": "5nDtr5j7vBXqHoCJ1EGmx5kKTSZheM5UWmENL4q673yR5VVBfg5RQu58NRGi5yrXpFs8oYHnk494WQp8vZN6SgZr",
  "key6": "5vm3jk7jxqfbcmDyQyc3gDmu7tq9x2LL9dW2rb32NpGsZqvTSuhsafqXm5LAMTqRnTL8QuDFxsVuLS812L2UaRu6",
  "key7": "4VJwshrFYQGWrk5cM6CyijP5igbzocqhCXwoBUfNpzXQxPDBLW5xmt6HNniU1a8sZZZZ3Npo74SBYfxMDamLQtTw",
  "key8": "4cdTQaqThhRSurkod149jN8chyjywf1ozNehsicpxAJ6KEL7YYNTYuEtr2LR3cXMfwWDHE9LAPcg4cyfpLj1Tmso",
  "key9": "5NsZ4Qw5bacgkSxcBpnDZK1psUGFmFpr7xLehM5vdjxheTfZty6YozyitNAbqv768Ju8N3rnGQbT1aknxcHPGesX",
  "key10": "35bYUbZJSqYS3KtmiaZwX483rJuG6ZFmDg14taWaCBYjHXu8AvEpBdU7nc8SydUuKBd6PKCwtGYgLuUMMg3AS6Vj",
  "key11": "5vpGyoXLdZGMSQWX4pVQze7PW8qyVjCwUgQ7X3VJKoUtLkWxgqRXTkoiMwsU9KarGF8PnfheXZq6jJXDSS47XWS5",
  "key12": "5iTkM5GgFuHLMcbb4YB2zG9ZKqKWSkCoMbC3dPHJbD99PEArvYwJpxWtggJPr1CaZ6SNsbZsWW1R9BGSjGdnzmnZ",
  "key13": "5jGE6FwzfoHzUhytX1XedfqSAqdfqiqqLPDE4rbDZ9fjuQAq4fvPbUCcTn6z3ZkaC5eXQTTNmc36hEVdxuLsNqpJ",
  "key14": "Toj67pGyB2cpwrC14G7jKjHNZZv6Sa11BbqkEMAVxaEWeZvcMNanBz6ycFVtRhvCuQytgVsSsCZfJDoBwg6zba2",
  "key15": "4Y3EAtqKauAyWJfnzJHiF4dmJZts53Pbh47cohXPC4Q1r5MURzUZcjjJZZGLVjR18NhU4cpFwbuaFXf3NkQ6hSbq",
  "key16": "p9nPCvgjbDdxA9m9k9GFAoHbNsXnFHDswXJauLCNitpZLuibcYaq8HBYojjKPu7h6R3jtLvb88etnhhMAFvZZGA",
  "key17": "3CoE6h5CWyzeidM7TbDyHhBmmjxqRkqmGKYYHoN7A27XodJd71rkwbsKVGywFmrHpKDWDEhSoABvWjqNu3J8Htur",
  "key18": "5Fzi8cuERtCspzrn463miVzkgeuL8m52ka1zRX2kR4eR2or4NhmtLmTihL2f9KFGZfAgbpFCfnNe7un3UjMxNmCc",
  "key19": "4gFP36qjDJTVfnqxwjiEpKavMk6V6pWjveXv5CS55BLrQLBo5xVxhoL6uDi9WVrmY8m5Lq9gHSQq7kca8kuTZcek",
  "key20": "4LT4J73CwtB6SeEZ1e7ys9TjAw6pG2R4CgJu8RFm8ZWsSZBWSXxxgZYDd1iknUdiwnPEgmEThE5KiCLWKfEqfEQe",
  "key21": "3vLMuAuS7HusmXcCCSNwWvAaH1ue6hrmDdfN4CZEtJ8CFM3CZiA6RUnGyFFoypPuhoCCUGm53TUCUJfunt3Adrcx",
  "key22": "4JrCYpEZKs9Ht6WNsbWnBUQAwSccSkqwKzNHfoGXJvNbMoeGy2Z3kfSGUrUwGCMLhTC9rUzQ47cgSPRb4783oQZ4",
  "key23": "V6nikCH6CPo42cec3TrSyswHMZFdrbWEXEcVnuBfCPC1DHShUUcYF9jNonDzSjPm5gE7YPbHjCepF54QUTxu511",
  "key24": "5143idpN1N9TqDtrX3AqWim1gyiEXhet5GXAMY1JJdju1icunXsLei33f46ysnvH6nyZaau3H3LBWC9Tt8F96UDd",
  "key25": "2Yebph6uPPVAFBu1PS99xuuTpiUvZLHBEtKEHVGyPgj1J2gTCAwV375TBUaafdW2mVQUMtQNKxGGYk7BaghfHJnP",
  "key26": "5FxadH9bHQ1ybQ2GzDmobpJcdXdAm25rpYV9hP1KqecKWiuHaHyHEBSTKvqKwfjDxTuvsHpigux8UuViwxK8jSYo",
  "key27": "2yySBk2Dd2fCKCPZHSdYYmHBFtdSTLEK2E5zv6MqwtxeRPYNMy9h89rzNfDVLHmew1mya2RtHKN51C49XjJNBveS",
  "key28": "6qSfTgQjD9GTd6Jbxy9hfQexCTuQCjWhvi8FWboQuUQLzugBNy3eWVXuGsaDdEpCRBWZ3g7msGCkVU2CNgjfkBw",
  "key29": "4Ttf3eXvtLpsn7qrbpvMsiWv7UEJWRMCqRtYR5y86uZiPUxaAQh2CJudoxQjCvHQHrZyk2VqCmWh9BHndkYgZXat",
  "key30": "2BRPSmwkF4q9thSB8E1kU6BKmnxuMQb1P77LW71a4XS2W19QkPnmX5i4FoB3F5P27M867uJSAD4TTPGB7jGUYPFB",
  "key31": "2ji1bAg8MzUyv1crVCUYRUrC2Kqwi337ACa3rcHEzwzCF2HMiPrtRkrUN1ck1AW5bwmmZbScPXJHNVRYVPBgnpiJ",
  "key32": "i9HTqWd8rPcPeq1p1MdXfT4KEAUD6sNwyFMrvZP4NYPUpeMUaA847sY6fUtu6Fbk3RJfPCaS172i5MjEzFZ1g41",
  "key33": "3nF26XtnuCF53Soe83WNtgjwMgLHZpkgbPLzXjKeNeJoxewXhPA7qJngtzByCc4NMduDKt1Fbju6nbXfjPJLTaKn",
  "key34": "4T3NHetd8qEYy8fGryZGd8Ny2ZspH8BN1vdTKM6tkqCgHJLfYoWvsQYcAdDLdNwLEwFdKa2HQm3oYGJ3QZGariUP",
  "key35": "42bzQdQazFRKoBQm5PQrg1Tx6671H6jH53nNXXzgyohd7uCuXjz9Qw6SY1hrzLL8Fbphknt4vKbaF1T9ixC9M89U",
  "key36": "3FQ4eAMytpMT6oaf81dW7gkXHug4n6UEA29R2eysFBb2kHbQBZKPWYJmn4SwHNNmJX2CbKgo3jKrxEmm57Qmo2d8",
  "key37": "4DbULPnQPAj9Qt4jsS3JWzrq68n8ExLF5XZCZZs99ujJXzhUBeUsVw5zAAztzb37yFwjpET4k3Haju32wmRERGgs",
  "key38": "v52A7z1TEDRW1SsXxpsu1JzJREAk8WontdFFwnDbEkamMqFZQmWWZKb7Z4yvwqdNtA6jva3xNwHHXiRVjRso42z",
  "key39": "5cw8Si9KbTHGgWuwidBNJxGErdArV3us2fnL1xK9r8uFEMS9pX7ic6eJbfQ5qUADXLasLrj2wGA6XQJGWEuSHxwY",
  "key40": "LtJxPLLVa8jaxo4tUMj5wrZgLYFroS3Am5SXPhacXqybcivb6q98g5hAuTa2ktBdVoez3J36RQNTHyTLm1KjMBW"
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
