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
    "335DQADfv3h4mmUEmo15pbHiZRqVdNyi8gSEbZDPK44V6fFT43hxomv4UG6segEQ8wDJqxuZi9BkQX4ESUHhFa68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tgk5qW9XcPpMRzbpHoJ5g7EgY1CLbjwwqT5Dj2Dh494VAzA55JYaufZ2PHheSdSxgqPsDXxVLhfSdnFTSDmsMfy",
  "key1": "4JXvwZhodFBuMQCEq8kJfz9FmxsqLTMCCqVXChdbEw5kgNKuYC2yCo3EhHwJhA4MywLShV9VyUEQva5qSwNWVRZw",
  "key2": "5Q3tAMRVJHHaCdwxEUKcQVKDBUjiJyBZq9ufi7ZgbpyZi8E2hFb46qx376uX5SfMay5uEGS2Xpr62MtR1YshEVyr",
  "key3": "5aBy5nXGZcVyFvcZukpRhGCSiaVYRWCWZUgVEs8gzszupKyWazvmJheoxWS5durjuTQ3N8GumzwhjSVz94tw2oLQ",
  "key4": "26mJ21ekSuAoE2BgFuo3KPK3KgtkxNYyoHRxnDnnAEUyfSPz6apjgPr4WuywEqdo6VA81pGJ9cu3tibGReZEVVHp",
  "key5": "ZwNW7fbEoKbSBe9aKpxqL8QmPEYdzXVzPuEWz6RqzkibYYxktMKsqk5bx27hco6R2ULZgJKheWSnyGjTv8NSJj7",
  "key6": "2r6y9YvF25uhNKGMenFB7RgEzUNU2uBaBCKsRHcxnjSyfEdYQKX8KQL9jpP9881ut7YHZmGHZbRuS2bVoK63SGQp",
  "key7": "5aZ4pdSyrM1evExjrFiEAbxfv3S5qos2cJJBRhTuyk3ypokan59UcSJmCDMQHdKVSYBTFKH6YPiLu24JidZRk2XX",
  "key8": "5AnJQi7L3AvB6NW9axLHHxBM8AHiNuaqcJcKRLSvSXfM6atf4Lyqz5TsBG9u7jfV6YrebLvbb5JucZN3TThB29sY",
  "key9": "36k9ZtvgcVwvptHS89ZiK49FaJcpfFqECXb873ArhF61Y4ikb5Z2JfVb3zBvunSN2JvFP39A3yhfGfR6UDipKFhe",
  "key10": "3f1w3CzW8628vRWAPpa2SK9r4H9UMmB8FKe2ucqDSWkBNskZJS6guLguH5cupjohyqvdkj9f561GiG5gWrRtNMax",
  "key11": "3pUTWNyriwPf3RN7e8EBpZEQVvfSX1oz6Lu5ZUCVp9T7BXPvYTmLpiyEpdtyZo4xX2zNwtz3RnK23VQa1XZBR5Lw",
  "key12": "fYdhH8SYK1LCQroTrxW6PRrziFPeAdGDkJL7DniJFHmaX2PM53S3r1p7xHkPxnYMtGuzwdWJGhTmSbTk9Rv4cs2",
  "key13": "4CpXD7fN6pXqmbcyLftp4JFtzbMK9G9xsegnTQx1ThnmTsUy6AbrE4yKnQhDNccZZYbNE2uip6VgPibZc744P5LF",
  "key14": "2hGjDmS7gMnSy8mbxrLvJarExQzQ7stXoSSwT4tvsQ7ERZKiG6T5tLwc1jjE4rJCZrvbJ5o8vXBwMfMy38ir9X5V",
  "key15": "5JhKXGx9JNTWhptQmVM8xPuxEbpmZB7A5jjWEQrR18c7vVEqbV3KoKmsZdnAFRS5nDyPGJrxYn7vWBbGMCZXc84D",
  "key16": "9sumxtTGQ2UM3BZ1yDGYesSYDwPoVHeV9RCk68eWhti7dXDAFKs2Mf2s5Ueww62dna1Td8b4aewwmxPybshrKTi",
  "key17": "5pjeV3VzRahhi2Q2tAnsKx5ogtfuq6YQHpX3BgVJXDcSZFkowJatvHh978BYSEMC1LF2G7HYKr2UcWop1rHypmde",
  "key18": "5dguo3Kg7bA5o69jbLoHvohXj7wCtA2kLFy9DnpVNd6Ye9XXhrTN8fxNErLAQecfC12U8azADe764E1WwdDx9SVZ",
  "key19": "3su66DM46jArZgsmcjp9b3SMzdn9E7kVjoFH1w5V9iKanSuwgiD2rTPUxUaTABe9izNa54PmdhrNngMKc173wm3a",
  "key20": "4wDMGdSSouEvb5oAfLYB5Uay3MGikApsjW5Z9eHSXrEHANydG4dKZ8PGhYybqVSHkC6PxswXdm5F1euHPATnCFFe",
  "key21": "2MwZt1JHha4u5QQA286azHvyTPJBLVGXtbhKQZK3221HyDm5sERTto4JmvrsPcZWbrwRFKuyNbH5vmWU6Qejm5Ym",
  "key22": "47bcZjLzgcYjbhpKM7fA2HJowY4Rcz3gXcXarXyxXT9RvjZBhG9oJjZG8N5d4C7sRtFXt2jWxdKYK8wT8LGt2yyX",
  "key23": "4NbZwM1kxZ13y5LCbVRBZur2pgJAPuWnfrXipicBNjJ7pS55WDjf5tQFgjXk4v2cUjwd1jGhrTRrTAStPzMNZG7V",
  "key24": "4AfQpdnBHiPdzxydwmJtexyGejAx5eHaPGuFaygSZjz5ZxHoDLRQM5r698ueCwMcBgeJXc1aBycyYpCRbEdHgv2s",
  "key25": "evB1mB7zG2p2KHKFTxUZmqJG1L9qXdsKqjaW9s8LqQzAbb9q8i3y3uAhbjp4Y9E9m3bVEtpQmoF8PuQdtTqT9PE",
  "key26": "4NksmbBmiF3rfDvz6jivgmBhfPfMgD9L7wrmwhWpFAjhUzqSCvWyGtVdY2QvWMguU8i3bYxhMC4Y3pbC6921wYG",
  "key27": "JQFZocFvH94SuozhHqHgaCeETAdfjmzRarQYB6pdNQDMYrngMnmE2PX83jJGfK76VMuPnywAdBazRWVwJ9zT5Gf",
  "key28": "RkeHxJp4VuMJYWygGiu6F3zJPufJssTZ8k2R3ib8vPpP4s7YpsjdXCoFNATyKNHbfCgcpM6bYNAqoMGKgUZR6rU"
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
