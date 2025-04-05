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
    "3EcXpn1Tr4PCXo3bytdog7n1j6YGdWoZFZojMQFjHkMSp8sLyA316EFug35QGANSFUyC58Ejs66tYScyuHRoysNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jAx54QaQbREf5Xmf8GnKPHd2ZSqh1RZykYQPEdgS3zpyPkHLdciiFWrpGMLrA2Y5VYch7RatcC56DrqTAoaQJKG",
  "key1": "f5FmkjfVqY7HpgjCzBLP3meffehNmyCqmpxfHAqsR2AqJoFxm48XC9nrF81gG2t6rUJNr4Ys6UZMc26E3A1cBoc",
  "key2": "4575EYe293tywnYZs95eWWkYBhJWzQG6nXqHFUb7A2HZhRXPExpubSvGjipLvHn572L3jbUYX61j4v4ZSNj2uQsZ",
  "key3": "4CeMR6GT4H32rLBdzTWVhjf2vDJ4F9GFHCebANPXy1fpf77cuYSGHa6yZQ2K4t48rL7Vi47TyD5nx7MwUDBvieCV",
  "key4": "3MxJErpwD4GuPDWYKYfdSNhJ25nKbw6T5KZ8DpiqYGmHWFy2WXRMAuui1yphJSCa7NAzvcn7HMqh4jDfQMfDuETF",
  "key5": "2kMNzrfnDMavieQAUe1KGec88TDM9B26Z9KThsrn3Wd7vRdDrPWTGztvG4Sv9dzjafGn6o1CRBotLEYKYKNqHHop",
  "key6": "2w8zezKi3gZZoNUu6i4y1goaEptoziYu4iuQh7DxuZhXsTVHyBmSvysJX714Gut5ka7pNZe7FyUtT4hY7hzyitLp",
  "key7": "3E598KsiatX2uv5ZvgVgBNh5bX5yX99Xebh872NDSiD11gbXzTPiwgZuMyXeL6mCjhG2AScFkzG4EaxChjof8GFg",
  "key8": "2aqqtCUKZWycxgyyVDErsqLyV2xUs7FbbTJ8LXSswN8YRitbkqVuoxpx6dcg1SwDLqNy58XPjZR22DXmeKxSh9HD",
  "key9": "2pRhycVJpcrUTgR1SqcdWxDyeW7Jc6t1nZd1Ux4SgxSfW4NuWE9pkP8VVDw2gP76ze55wkxZVu4JkePiWU5y5PEE",
  "key10": "4JwkAfsxkyr3DA1jXfmL5pXHgPMKwxDeTEMW7ryM99AyFnGojTbrDdwv28vNRiySD8b98fNXy2NLFu2ApJq9yH6L",
  "key11": "4kmRCukiXQ1pTe9FWrnksVFDWNKkMHJ1hVV95gHkm9mrBNbR36C1FHCnMBBjKSpZ1wW4s25vx9VofQi8qPkVVYoE",
  "key12": "43j7Z7QdNuR3wfyrkdskR1LmnovJgpjNEwvrakn2nsB46wSF3ca1nj3CWRzDe8cxjQoPLBN62Jy2oACjK5UACzxn",
  "key13": "369yhryvniAJsfKfU3BeUjZxfmoyYmyRQFFFjCS3RK2oqfTNZF9J8XCGVWuc5YXVpjAKeyXCboFtiMGBHZdHLjtc",
  "key14": "4dQEfcajDetL9xbAytoFaYGifT2WCA2pBS6F3KUaSggxXNDH5drBZq421L7wHMUk3Ki3mgkPSBX5N1bGKogQ6Gz",
  "key15": "59H1ApxavNqJpwhkRZsfeTCZ1Aex6c5aBgC9eoqtVjiK3W4iaHiVMo41ZmKPBK2VUb6A3K38PwUefC4Eg1wNbLk8",
  "key16": "5nnhNjjNfBRnTDMVmH239g2fPPrMxFNt1uPr4Y8hj6Hv2SZ2t3xLaDozLmknQ4Z7W8VikimMfBxP2ocSJ3CVBXn6",
  "key17": "4a7g7N1DmdT7Fbfmf35sYwUjvML9HNCCgw5QFwNhMi4aop1wii2VWf3Jm23s8QnK53gTi5HHiBjEtVTJg6WgoagC",
  "key18": "4u2NDVXQZ69pEwgPQiZcYP17q38NGWooykjqWcDLxx79HyQSrq9W2jiBg4taDoPfCAXwZf8v5y7emS4g745P27VW",
  "key19": "4tzPgQkT1Uk6uNeHh3giNxGiPoV3Tpqqxkjr7xCoZsRTbnCtjAVRtwh9oLs447kD4wMRf1ukoUbsT4EpYekh9CKM",
  "key20": "hpXDNitjZNXHF9BLRoBuq6cisoGud9UG1g5r6eWXo61Csui1mkjyhUEoMRY9i1JzihRcLHwF77RiZUMpTC9YE46",
  "key21": "2auPKwKrVurCUoAiWoCaczjHTtTGA6yZsGDXcFZmjh8RVbHHpooNiJ7fJ8g3vtaLxXQPnJCKG23HFqvwiGbNxjCT",
  "key22": "2NH8mS1BLMmQhwn9Rx7dJgiBU6HGf96syCKwcscWUcPaPnCSpp46ym5HVYQjFGx8BidujYzgUVtq2urZZeF8SaHZ",
  "key23": "2jm7ZHtdv5g9tD3ioDdYqL4GGGoiQGYn47XfGJnqkFFYZNCgPHMejMC8TgqGznNdZ7YezKnJiXmMdYHEXtwpGEAq",
  "key24": "2FCt1KBvenJfBJpK8gvaNUqyHxzXfqqxu8MqJj2Vx7m2dtvK3PxmWyFZUmdQegS8eswZaZp1NzMMwrSBawJgfemu",
  "key25": "2kETCoiVErnppHZDLzBXAnqDHbQhov4fLXoEYAySkPaC55r3y4YSHDsv9oYS32JbcYfLWVgLdvEZ92S37APjieXk",
  "key26": "5Qn9qqQD8Y6irA8QVYnzeoJEhvr5yx3dDi6DDTqexTqvSwCW8fzErgWgkTwfJbvjghX3TwMWS8ZhAuKUAvedPYYf",
  "key27": "54rvL5R5uncNe3yGKEH9249g6sVKruBX6X92VDXaVQCqDsrKh7A3pLc6FTaDMnCcwiL3XNdua5ExkCdDziX3cTJ2",
  "key28": "3v5g5dm2UR2fcNCmirEK1kW1ZMQfq5QW3kdCisiK6xGnb9Ag2f5qXVrzTbMdBv2HBaw4DLCZ1ueLAuXY4k5cq5DV",
  "key29": "49roowNrHdmiXysJDeDQ4AYqNuvHrMbBxoXTbCZ9xUpuD84pBE88bxrLhMdh84YGJPVfMsWm2fWgbUmZR6XYkY6r"
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
