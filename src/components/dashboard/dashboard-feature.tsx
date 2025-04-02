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
    "3hdE43NBHeAX5G7UugJXvNxbRZG9hALRU8N5aS754UiMyD5fDVhpXqCcXk8KKWWw41BWKZvgLzWcdaCY3saP5DbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yo2YFivJhDXwedD5AzpDN3VL9jXEmR213AgC9Cwt8J1RzBvjhBbafsG5hZsQs5NKSem4mj13zoRaknzLDPDaokY",
  "key1": "gFzYsCb5AiU4itYyZBDSmWVZUNJr2uVmnckJxm7atxNRQwJhBVoeQ1oeHPD1pKBQxpY334bkK1AEivvkXAdojRu",
  "key2": "HeupM2x6ixDf8V816C793xXTwm7CZgt7wt1paHgqnwo4cEJQ7MVpRnKwJGjvPM4jFK19K32qgJ7rMj77UoMTPv7",
  "key3": "5EJ86m3VP6UXYvrRCLLfRY2HaXJ2BNz89SMdSY1daEXjSXrREXBfjq1GNPW3WFeBncWLnrx7fCrPm6xCVbxCLN2J",
  "key4": "35mhLyGsmUirRF1Lv2KWivKoUtJb3xBnzsSmewmMtLP3n4TJZrg3ic64uiBMjH7n95B4Pqg3WNBMKVAs7otzEyk4",
  "key5": "4R7JYaF29KY2ZEx66MfLS4ScPKRM59LBxANRpEyQSgpm6XwuT2rew863S3Qt2Eh5efbiSQys4UTzRufqJiW86Rcw",
  "key6": "5AFxdNS8C3BkGzURrs6sVSxJ9d8E624Has2xWUYc28kz6Qy5hnuTjuinSJAetS44r7v6X4yJE5VesDLaXBAc9V5u",
  "key7": "5ppUmT4na1xVvtkgK9AMXcRjZVU1fuwrsDjDfhjASmAAN9u1XLkr5eWppDbYxfGtqV7a1k1jiVskXasCvRL8FVfT",
  "key8": "3L3twzzPnMMr3VKLFP5qat1rtMoECydsaWK1Msp4uCHqZtpCZYjxk4b7imaxQ8XFuiefX44RLPSxLU3dyNvYnsE5",
  "key9": "3HnaEzJiPJD7TPrCEY3oZpB9ByoruCFfZ9TV6MQxGkmjy71rZEYnw4E8DE5SfPiU56Qy463peiRBTjAEHxTz4WYw",
  "key10": "3RrSYH3fvRXrez6VYmc8NN7dBaBa67MQDdwhScpzzK6YHJjai5ZPgqe35Yx54KSJwzc2RddEeTuFixnxC8c5WUKi",
  "key11": "2YhQ6ebhmFQyv8Y7rPJPdBw4ScJDmARsBmYVUKC6E2sZswjwMZhM1kRPqzrhKqbpAoNRmPGVWWny4Sf9L36A7qkx",
  "key12": "3gHkbYpLTAqLnq1JqTDzFUv2PyJwJQH5NBRafEdEmB3jegLspVJkX8ervhMzDUUDfYXmLyUL97XapH5f3gZzr5Pa",
  "key13": "LV9t2EKnk7YDE5vuJ1CybW7RiN51QrK2LMwi5AQ2XVLeJt1jr3VQ5K2HokWbVpGNfxfPDrC1M2JqWeLrNDmYoL1",
  "key14": "5muugGMJp7KD12A6YsmAx91dsHzjZZGpZfVQFTTdSSZGXTqKTaJSL44pKdARqJfyESd6EwRbo772KEc6xx2cMqFf",
  "key15": "4p2xYnvy8ijs1qUYktw49Sr7MdxkVD7sdkcd9Ea1Dd4dhtH6FFVTgktiuSkrAXDdWQ1J835VY9HqPFgNmiEiKA7P",
  "key16": "4igKvTmuvG6ui959Q8P2NjJbqF5N3pBF87DtvGKG36ENseYoUL4uEYsDFNJQ973CsoUcH1BKTwa5bL7CYsPniQUs",
  "key17": "5ZAWFU5Zknpfoq4JiSdTGav4BpfrxBVtxhonut2oo5k36wxt96AZT8th6NmscSaBMUYPz8qmLB29XSe25yCm21LL",
  "key18": "eP56DnrjFEJKTjMdT8PWWmGNPU6ySPGG9PwvuH1uk16SqZVejSgMRJVrivhsSEEPodRFUJu1S1EhACBoFc5VqzX",
  "key19": "2gHEgFE6BQ2domeo4K2tmLXQho9GGSPNYfxntqcbimbCrSGCmM8NzGBKVpMjwMH2FPbSvzBmM9edULcyqDrgG8X4",
  "key20": "2MVF2Pf66WkdBfHbKa3wpv4XCp42fx1ovcoZHXf7dwJUJ2TJzkQzJPoGq24FEmgULZJbmdiTgh2LYPBAafSv96dD",
  "key21": "35tR43T2ymfVieHTnjZG3MnCtdy3bbLdEBRhwJvATJKqg61mRBDdgQgPZKygoddaurYL8SQD3Phukx4FjU2ff7Kk",
  "key22": "2Z7VxWyUApe4iEdcDzcZuR5GAUFyWDyymtQWNWpV3VtXQq5uG7azZi6jmBouMzRh5afWEfX4quQQQLG8dPLaoB27",
  "key23": "5938ET9dbEb9cbhXPc2pJRNXoFSF1At3vDVAHbipvywW7PoHzumaVDHGCoH3jaDPrad5yPAnqdmB8PPFzYfAXwP",
  "key24": "goj9wVsXTp9RDAMVCyUSW2ZrnwychSbuW3CXJBhCrYWykyhBSZ8GGsiorEGwdNrHuhEjXoUzUjcPTuA1h9rFVuB",
  "key25": "5gvTuznAc9k56hPMeRNVsGtmtgE5jhimQhdQ8akocXL7U97RmPCgjdngK86JAffTCyCAWbbGJD5wtdGn4feTXdz9",
  "key26": "4ExXqMvcBZ1XqcVwLtKzU1GtNaLggUxeiuUBNnNs6AkCqkHeG1NpBW3C4k45bTLRjAHAm4L5gqNZq9vNPRPxyskN",
  "key27": "hbs83124qHwCE11ZYyNsu2sHTP7KUNi5WGc8QwixtGEsDPFfx9ef8Yc4T95JmUdGPe8U3WHXHRpQ8dqo4vVzfsF",
  "key28": "2pgyyfLEXhtKb8EwBKbqpkLBoHnwaK5JojoMf2r2rYXwTtu6ZnwNCRQiwXK66MymkvGS9VE6yLof2SGayebY8nLN",
  "key29": "59Bj1NbWJzwxTmhgjKZ3a8H1MuhzEqqz2ddExVRenrATbHqdBwZUZgT9KTKQnFbLLdJKQXpTciyoD4dgfUUNME8V",
  "key30": "3chapR41UoxNVyoHYGEaJ3gUUzZPfo4Po2Q2dChwL164dzVUG9TgwMrHpmEzDFAX7Z2q9s1fEU5hsF5ETJtSgiWU",
  "key31": "478HCjkwGKTPnRhWtKsqGah4Q5pQ2xFMrJc2h6iFF6buZzSPgAJvJ5cjVAEvHK5gb6CZMndX7oEAFz2Eg6w6VzAA",
  "key32": "22xiUh6yBtyrLMXJVb1radYmXtQk4wmG6XxLBs7a6AnbM63wsZU4r6wJgsFK8tYZLUYeNCcrmsVLHb2J4wx1r5wW",
  "key33": "5fWFmGRugAiozyvprqv2sZifhvF9LhQv3XRRnyXwk64pVqPJmsCMoUfH2YMqS4SyrCNqWxsmuHqWiJWBx8yNoECc",
  "key34": "3izecqvzLjZpZAifDoGYmu5LaoPod2WcRrBFzgzjTduyzw38JgxRiPtt6P2wNAN71AWuXHKTbDze6sep6g6fGnfv"
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
