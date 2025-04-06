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
    "31XvNJefPVRZLj77CGGnMKM7GWFTSvymDhcYCy31zWLTWZZhujjvp3kaJy7G1gMmVqFMnVHzXd3s6LxPcxMxHYHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CdmRjWcAAt9DH9U4PcjdsEUhjrEbDQvfmBya1MuYsZCzZ9cXc1enn5dVDHZuzj2VyHuFaWjFDpgxqjUyB2MJLMh",
  "key1": "4gxfiNNRGwA6VBV7diBf76o8XKcMqVHVJR7528bhe6WVCXP8Jq4Z4J9pfWYpnstsEMmjAP2mu9Sh86DKZVw8eGq6",
  "key2": "2wC4ep6XAyGGQQikAhzkdSsjoRMFJELTXUw1DwEG2JsJkhUDQHakaxZGgp7uXKggu91baxvhsDBcwfrPeQmQu9gX",
  "key3": "JbaJNnUWqKoeZgXZz5HfkSjMiaR5NESLPNdzfLghkj33W75mpa25i88wMkFcUYzVdW5aMfj4fiyBRN77VXSg9eY",
  "key4": "gqyaX8gD2jMEWrfb3TrXG5aZv67zYJa9u4wFnfrgXuozxMbCZf6xiQL8oo8giCQEpDbTq5mNG7M48noYvRpeJTF",
  "key5": "4vvPYkPw7Hcnbbk7ftEEBu6yRHcW7aVMH8E2p9iTfoNcwcoWTH4uogiJkyDNJMmhMvkdBamppUWCEENAtK4YGs1q",
  "key6": "4BBb9PCv8cw8gCryw2YqUuNEH1xCQjWCbGVPLtXteuy3o4NH8nCyoTw7Xve9iKi2LupgkPACMkWJfahBg7F5HXNA",
  "key7": "3961WkfQmU4phpyZxZbjHJyYRzBWGTsVH89MwfB1BQeZVqSQ69bD4GZUxq18UA8jECmFepKFfNi1Ho1EKVKHYBQR",
  "key8": "EfQpSw83TL54y5AdfcF56F1WjzxgVTm3qYr8Grze4nmsvk9gmSoHgoeyd7R4DxYLJCNsPuWeWvQubRx8orjEN8u",
  "key9": "4N5vi7VoDgdK99SJYzSd8tWkYFnjWGyysbJ1HHmR9EVVt9L5ZhhqDtBj5FY4iYJVrhLYZSViDAAZ4nqaqJrTPTtq",
  "key10": "3XmASMmajFQMTkvvoFdihjgJ34jdLmbfVs3E31mtQ8GFTn348kJaPtCwVhyxYm2jLyy13fUL1YG6ziRHqD9sPtX9",
  "key11": "4LBMbCN8kTJNNyWyjJFrChPfquePA28r4UVjqem1rEDzkkyo6RZh4qUk5Dxj3ND3NAih3Q6hGt2Vk4a75B57my5",
  "key12": "34eMd95UEGrAszGTweSH1uDjQLh7n8VPLWoLEZwNSvgkDavZSr3KSRzm3kAm1BfPxiyo1j4D4SeFCfwyu6ZZK7FJ",
  "key13": "5ewCKDYNwMBue3Cx72FFoS4EiRa6p93fXUACB2jRiDCWrgE4MNZHPLBL1PZUimvGqWjE4vvBwzzde8bCengaS5oH",
  "key14": "2NhoFnFPxV8VGndu9cdT9PM2v8bCMzZhcGNaSmGchY8KonSSjF2wZTNRtATipumy79tc5Hqg2saRgZ7S8gvCR2Rc",
  "key15": "67JVQxqv2VQJy6fdEgU3TdnPtkYgMxNx4zwsDCHzwhAZgP1xg5eFQPh3QkVa8Qx8wVRHmUSGwiuvPjkz4Wa8x8JB",
  "key16": "3AgoZ2jP5G9Axfyj7JEKRhn2THkyQjStPtkfFiEBAcjZHxKzqYHUmuaAGoB7jRTBTErQTj4NrmScyYBj6TFFc4sf",
  "key17": "3oWqc4cyyNVrtx3inD4MBtdwRmd1jbiLLiah4dyFupe8YQZkiCjeQb3WKTrZyqv3Fz7oqef1BUNW4oG2AmRyWHGm",
  "key18": "zzSnbDZ3SDUuVGrfrLfisdZKz5hc4vuKWWRhPLvt4pMMb7oZ1r2SdRiDCPwLTgucUhsjdfjFUWGmUhmLSyKzGme",
  "key19": "93mN41bp1MuCrRxSpThgvC7hNfzLSVhkpbUUqyc36FjEB9TsMesEwYraxdmk2ehk6yyqkLe9w95emPGmdQrRPD7",
  "key20": "4icCfTkk2imPjA5QjaJawuYnqLLn64zN3yiYMjhS8NsvvrXVC7Za7mKFYei639PcbfvJkshCZT35ByKUviLNigDQ",
  "key21": "NiuVCCkwZWKVvNT9cSK9odpPJmyKFvDmA3e9NH4MFc47tCyZWfp7nnuwHFsrLritPm5WRBDztLQ8sSiHTU6FkTP",
  "key22": "58xiKTzHhFtSpQcRf75ge6FwiMspBcNqztZPVg9P5pMoHFipHFBJazabkbatLoWoPJ33iHHTnKWWmW4WVZBa4mo4",
  "key23": "3QbYK3PkNWjt9yg6oA4gT5QAi9MCbSQLSqdxtJkDCtoPdkqd12xSZ2FrAYFyoqtYCruyqP6LXYay78PZ16AtSwoL",
  "key24": "4oeATHKw9fMFDN3Yi6kk1N7QuQJoVBheSfqJbczJdHnGobEkv8ZVYMHRJ5AqrX7gozNuXHdeYfrjiJpKdC6WvzNw",
  "key25": "4cCQwtRErppiwHFZaMn4Acj5V1Z7fi8sx5VSNxsSp7JLw9sn6jXi59msHpPephw5Y3KFn5p8WKgHPyXQpfbeHdvU",
  "key26": "Cc2NgC5dCnwJhEkKhsJmdJ7tGvUEtYG9gFaqU83jznWUMyBYa9AUQNP4ofbmae9VsYzBW7wF3JrKxnPDQBg3d82",
  "key27": "3pWbskTuoCgzyEngaMgqQ6Cr2D4g8rDL2QvTbaJ11BB9QSXJm7jQemqtoEBUDPuSCiCH1msPKiwUsB8HzjPkifun",
  "key28": "28atzfvMt4vYaigJDKifYKourBznUB7NGShyxEUJeVBB5fD3z4723qoRS2JWwXpcFDJ2CGkqoxMU3PnppnUxcSRu",
  "key29": "4eftJZjXYxoahe3VPKgW7orHXtL3tQxspuSgzze5SpVfXf7ZtiQ2LZPszgbuc442pvzQfvod56kxhWK6X84oVXZa"
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
