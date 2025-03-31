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
    "zbgFQ3TLFWntCTLrZojkWL2j1ZVSEc6ahbBznipQNaM5R7ZonCUWvDwMwKePcHswHmh3nsMcyGvjoBvCghKeo9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UAvuKwD7eCgocP29FoqSkHKpx6gpFE7oBT8GxfPE7agZhLeLy34ZcBk6P3FqujWASnruAzLmbN5VWcuRk6u4STE",
  "key1": "67WorsWsKqsQWKNxjTWodMH3nVydWePavH61E36fAqf2VcHy2SaAuRLqzZdMxBmezWgUhaqrxDEd8iQtEfLi7GpH",
  "key2": "25EfdcjUTs51z8eo2YdKG8NPE5XZURcmuVXSyKsDPRfiS877WV1X5MDguxbDnSLiAv3KAGkkKvjuQdsE5dhdadBL",
  "key3": "26Wi85rPs9WkNjxHvQwYDotUjLL1trjTgmEkuiaQ5eZ2a2y6N4T7W1zLPhF7DF2xH6XycnXQwURoL2DYsD2GvNx3",
  "key4": "4SKZuj3frPkNnfhKiK9qq5cS1Ea1VLz8BiXEqC5RtQHm4JeNSbbYpQ5Kc5tZW9Fh4nZ15JDqJfdNTGUoE1Yu4kAF",
  "key5": "617otpHVCG3A9p5MEA1Zi6SfQPhzqyFY4Z3KnrWYbbSei8k5aUASS9AajEDeB3JPNEc97nWTDdNGWVjUzws2ZoTv",
  "key6": "5qSEc7uxQYG4DYP6CgN79D8LWL9kYUamuuv91V2RMpWLQS6uMgoQkZW7M89WzZtVXDCv1KZNbudLvfuBURWQZWp9",
  "key7": "2N8fPgvYMWxUabsHCZv5At3zKFs9QZdCbH8P1r6pjSGSnUSqxSXZFs7fw1f9p1YrNrnoV9E5ZCrM3o8rhazj3b9M",
  "key8": "3d4XqK7hCrpvateumWWpfaNw2kgB3YUKbyVh6WBcbzYv6zgrWzt2kqm6zogqtMdYyGcvTVLegL9LuoQVKru4HuXP",
  "key9": "2aSSxS7ksDqgCZ3QVNntZVJK4JW3qgErp6xbdoyJxvyQ6dPsQnWV8tmC6jf63f8eNaxaCJSbbkJLh6tzstqfB51P",
  "key10": "36HNeoaw9duHXRLWPWmWUGd938L3Gb2MWUGN1c9KgNudhedCdMuMWC678pNZ7cvqDPXBsWQvjKwRh2mASkGB1cy8",
  "key11": "4RVrNQsfe7zdh9gAaK1Zk8zDydvXCTrRXu21zKgfpDyzf6xNY1UzQYut3Rr2UBgmYdurV9qxSbPkvfYkQ273GXpi",
  "key12": "3qJ3j5oZXHrCxvz1Kr5rwmHVDDmZBKLukFGHgr4NckcKwrmyTbsH11fy1i2yC1wXLT1LcVUP8bpzHWNmZ77ajpPC",
  "key13": "34QztSrBgPJfKeyhR1PxKMSXVdPBFn5CBE4Ubiaw4pxz2LmPm13qJdSRJ8sKY1Yaf6Aju7R6AGSAcLGShUwNuX6h",
  "key14": "3CGfLo8foYsb8Wk5TKVmmgTSjf2vLx5ah4UtNUQWjtCnrBqzyXzpWqJATaDu2xvPrgmLEZQzHo73wniegbmXV47j",
  "key15": "7K9RPqLtgqoaAShohxbZfWCZDrHuqnRCwupRxKte6APvRcZQJRJoS6n7FELqi7RrUwX8xRzyiiwwKRhbNs18VAT",
  "key16": "2iS84V2rQccBfmYDrf64FzYti3Nvon3UJfPQ1L5BySzSXXEFTyHTCTxqQLB8TB2XF5ziSfNwUaoybs8VcLcQknLx",
  "key17": "5VT4UiNB3V9wspQqymy8GSv5TeUAcbmDufhkPtULTRjr6MqMv9T9XG5kT6oAxwohBvs6zPg5An6hWBxwa4jiY8kJ",
  "key18": "27XcXnDJWGHH5rdETvNns2m5VFi6Fq5r62HJRznpnrEMwaGKP2mndLPanPYGuycvo76YS6wsXFXMVHmogQcEMq9N",
  "key19": "3RCFhHnbQNeGSTc4gYsQWuECEFAE2X6wfV5YPfhXKSUwcTrgvh38TSFwHxFyMrnEX9s2jCNWYBru587kHgu4saZ4",
  "key20": "51N9eH3PYZ3ztJpqxS36cnett3nNwRtzsjvUnvoL2P5DK3YqVkZpUJutgynMiWUY67MMUgURQjYXNmGvpin7xG93",
  "key21": "2BFNmD3zrhwPrJFAitTgtABbtCzFgfapZni2yKn7Bf3qZeCtQHHjAAUk6tHxhxHBDDCUasQ6LyqE6rUsBDU7jbB8",
  "key22": "6hbo2eu1afjopWg9EduTPmgkKGF3qcMxrMupWm7PLkDpYtZuRWEu4PwGxFyDyubpjU1JwfDkjoFxeibGSMW3Scj",
  "key23": "5UTP6UnH24ehR9syHNkkbsvAzSDopXTpLpg84ddHzySsJGgp4EhLKcHZPanesSAXHhTkZF1zNsPvnY2mrnzCUVb",
  "key24": "2L338BhYKLYLgJub7QEEafgPs3tnwqchaeQdqvv48UCPGpRDdHr3Fa1PFiN74KPuqqadPgSKQo1npxeUn3LPorg4",
  "key25": "47mKmqyV4pMbUuqFR6kjttFfRRPGYdhtpv4VVqMAwTBEkwx9e9ZjregtP9rZTPVgk8ucTDSZa2wpCC5EAVhZ9hNS",
  "key26": "25yCPkbnPADc7SmYrZ5ospJEvGYE4KT36zjR5qsukb1HFKEs3hzuFo6GLWRLNvQ12BGXys7QcQs2j6gChEdckV1u",
  "key27": "65CAX9M7WdhrHuBy9QWRurT6YoCQsCTR8F6y6ihZV67ijBG3krQ2VEAoKWZmoVbvAm9byFT1LAhFu2WDPbaVENCm",
  "key28": "5EZfovW1wpxYmvzZqKzBNgFcdxNNCjfLiaCvGmhBsoKJZVxbkQBbviRjnv3YXJMxMy7jz74jAUcsciTzGECKacLT",
  "key29": "2h1VuRm8QNJRrMEw5URNvntyHYHpPhS2ovpcg63MHX6pCrErRdCTjBnQcb7sJL5gJxcviUkJAHUKbBwYQKkpdRt5",
  "key30": "55XGM43PBaaazgE4GpHybfykHwE63KgvUQkHDV45UULCtxQQYVHAxD1ZWPKefnDqQvXvABWHbCaiqkQ7XvpQ1dMa",
  "key31": "2giN7weeNserGsyV7iSkvifz5k7WN6VDGxpQgHxoDmGSAPHyPBhor1os79QtbduA4WvhfvxtR4h81g7wgZMKCoSC",
  "key32": "46BE5vAqoXZFKEr8RWgkBMxyL3sZddXSDQH7QmkueYcYBe6PfuCHc9xHAsCXuTCakWoxrSKACe5syzUSRttbr1L3",
  "key33": "4zrnxmb3xTZQM63xgN8fP15Tsrh9yrhzK244wepuo5HL34C38ogJL4o9RwRADQEeVmZDGT1ZMR2msBXGqvhLhezs",
  "key34": "2hSajXLuwARuFJdFQ61S3PsroLwGRmUtGUg9ta9vYz3Wb5TsKro3ADY7JpKUZX83hqCyKPFWBsZw3i8Qkzrnkxio",
  "key35": "44n5bNn5LSbsdF59JQMBhJmRh59wkXtdWNt2ZsqaG3XMFgpCLLMj5nv5Q3C5fZhC2TEh2gQJtPtSrHa9dDsYZDb2",
  "key36": "5tNhQTyFEgU4st9CNmo36uGE21Q5TkARtYrzBBsoqEDruA7BbYsjHg5cfFi92fykFm1dV3q7s9BR3uQuxqdeks1Y",
  "key37": "4XXnmERTqcSZkshfKJiD4B2fwbiyTUqrjzkqERNJpsfcMb5AZMpWa325oBWr8V4YiHowKGtH4n5BQiTpLCM1qdBM",
  "key38": "5kWhPDoZiRL9CcjuYT3hcctD33UgmRZktYo35TAsDUmrCDBFAQVdAghdSA9YJ6PQaB5Bviw2CwW8MtPPpu3A2t3i",
  "key39": "2aqY1xHLCECahQkpbUs6LSBYzxBwX4QZTUxZAnUXRWPwyvoDTy29JfDTDP6eTLbk12R8R8FvgEL1Pz12RkGvSSW8",
  "key40": "46VQdy2BnxTfWAXbCuQxAV4nNk1zoTQnVTnG3LaZLdViq4udZA4f619ozYTFr78CLmPqR5eDiewVMGsMMrkjqHE3",
  "key41": "5s4SUF2drfjB93UUhEVp2M3gh1gpQrzK41NGcDgygsfBG3uz1BMxthDeF2L8va35rQUs8FRHjP8Ls2jnbtFrswdw"
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
