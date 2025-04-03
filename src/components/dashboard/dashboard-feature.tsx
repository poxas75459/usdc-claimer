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
    "24N7Zor19hatg3kCUdSWrU7TDVFuWDaAvyoyRUpcEvzbm8ckUuARpnYDZ8GckzxPhTGL4gi1ssDofDN6TUErQFa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sKgy8zs1vFsGyfuZ9k1Xj8xgvD7Yi8kmYrfYthpZqhKy9WG5bSXsA4JBKWoYM2zD7HUwixpNHAsTpmgXYW9chZe",
  "key1": "5647tCuPhtRavsYMywehtWXNmbcz1T8cz4pHn5deUFqX6zKQyPKpcYU4RuzNWKtuEKKTkmo9AVpdnQW4yYajdEKP",
  "key2": "5hg9xYrAfWvvN7BtRsnbXdVZiqS7sfxQgYVnbFDp4aqqDB78g4mZBWsH5u8xpBfR1YnZdBi8yhhB2CuATnkJZhWj",
  "key3": "4UCPeU7t3NT77tWQNESqtcKaYyXwYyscwe5JWGG2F6HonuwM8GLe1xYabB67A4zGA7ZSRqpihQ8namGzsUgJv4D4",
  "key4": "37qheodpAdqvjFoQpgbP1tFW1a2XdXzqymcCeLXGxmnkQdceAdN8YoHNLpUNjy1SDYQv3NE2sK2FpujKeS3Y6AQs",
  "key5": "3WYbeNfrNfSBzMVzh6LAtuvXzCTZeKioLjkodVV3To4KUrvQR8euDALyHT6jaXBqHY469LqehH7mqEj9vVGZcZ4H",
  "key6": "5yWRrsvyHRFzxQZDwV17YSs7Jb3XSfRekAeryBk2eRUWUEvTwKP3tePef9Yh8eP6scs9q5usXxV712ad76RYB8We",
  "key7": "41EiXgBxKbqUb58xBS4AccAHXxrtXk5mg8Lmceq32Uunt9sngARffX5AeSQNPaWwPdvD7ApFdMgPVX1E7Xn26mkn",
  "key8": "XaxjXcfWjd4aCjcBStQpxS2xSFmeQtiQwgVD7Gqk84FyR4cx7hUmpuAjVKN2uZordadK4MWMQEd7jXELBscubse",
  "key9": "ns8ZDB2nVPF3QAJq2zTkZHNc7zNxEypX4Q415x5HP8havs1HzXETSTHqSh5tfsBJWpA5twzvqpac3dHWucsDSKj",
  "key10": "428igL5f8on2STXCRmqZJtMHaYQn31QqRjmambfDhPWMQnLmejjF5y9DMfqoNvhH5Bc1PgLhycp61LP8GECcDR5o",
  "key11": "3BKkSEn9p1jNW4vMKn54iwLzEm1pLYrUpq8DkH8rprtc3kYZQFGU4C7xVc4CNxEXMeqma5wrwE8Fiyz8BtGruqVN",
  "key12": "4pWQuwQUG3n3LXyPoXgX83e1V6Szb7jndoe7fa1Gwx5qkYfryLF362PLgrcG3cyGbKPvB1ghMe9XrNoBUu5hTk5r",
  "key13": "SfyqcNiQDk5yK7qSNGX59ZR83YbZ5kQPyDc6cvLqk34iw1au7PodeYpW3CUhV5RR2MARxN2ea7givVvMvXXFeYr",
  "key14": "2Le5PFzsbmDSDA6CAksNrmTWCUYgkeoDEz81CjaKU9Pch2ooPaYoFPHhyEFRkV6fk9pD3Gzy9gPyNoQDVU7eatbj",
  "key15": "mUP8ppeC65u5WJ848JGzX5KvAZ3yDhjzmp6ubAee89UC8d2TMsfF772G4TwkZRADD1sKnHPEPMAeetntjKFwHq1",
  "key16": "4V7Nyp6YfENEA63N8QKk95eBZ2U2KLRqj1ci6qWBtLLtYEHVTK53pGnrAzPzpYfKzHYf3bs8BE537njCh6fSVTmh",
  "key17": "3YabtPE5AMRiv3acj4RGz5uaY5tFu9sETMbbxuFUN8zLUCzeiFURYPMm5GJzvAMuwWy6zD3y13hGK4sS5Ykhf1J6",
  "key18": "2bfzDSuBPNKiW6FonHMd7Hbex6ePuQLmCvuT696zSpfFJV8hhcfjB77rXK7AQYPcvVqBeeNxaaiNbbKwzGRNqggx",
  "key19": "4i43yT1P91Tn1xnkHQabzbaWMtH2ahvVkx1LH2p9uC8xGaom4QnbnG5qm9GbuPA4rVxHEkPBnbKSLGeaBveLfWc1",
  "key20": "3xMFzeitHSsMze9LBkFZnW3uVrjybc88SntdjAdk1rXwmb2tfmtioueekzkFGGKmjHUojLtm2xSERmJawv8nfTS7",
  "key21": "3aTdQJaojcTTxyep7BAyJSfEfv5mZyNYP2BfmzDX6v6r4xTKB5FMQfdizW5PxHyLADitoytTdxBUMcG7CttuVq98",
  "key22": "3pgVhHr8cMDmsHBsVbsPiv8yXzwD8iH3Vo8vit2F8NLwbzieMX7CZdg4oYHeTUD7BXV8tneL4JHmkUiybu3M9Z8W",
  "key23": "4zsCJN6t9782kHLUfPAz1w2WeqFu6KmpQDrwEEjZpE6UJ6HHmFeET4yQFXFeYaUg44FiyUHC5KCWFukmi8wnuJrn",
  "key24": "aJTNbLpsrqP2wGSrpCMGi17q5VzC8cX7HUtrN6hRWdwyKrxQjn1T7v1LYQrmDwR4pTJ67FAcpb5N6iDvKJ6CoCY",
  "key25": "5ahXz4SubweQnMk5FXH4g5yUoXLmnsMRy5BFpTRRD4y9QFvTJQMVfqi8hu3rqM3wZHT6oCw1bdShz1mwPAhS1ASq",
  "key26": "5saLDJsyvXCmVMdodzTUCz6TpCJ5pZ5D5hEMoRf8dzwfdcW1T7MgA1sNQTaxUYPFcmHHoSsULsGvxKnjGBJTCwHn",
  "key27": "uRFt9kd8tccJp8UJbxkDJPRSF6x6Cbx3txYRu1Ah1QPF32xJSe2EASsy5PkbZASrYHoDmdMWTgVAnL5wMybhbG7",
  "key28": "2Kj1Db2NyW2kdTxUwicuGKzVGuGR9PuVr9LqJFhAtgmUSvjag97MeVNGJoSN624AeN7RXfzVpUPdeWLdnxE8X2xj",
  "key29": "5DXfWQtCJPfrEqDobZ6iGkG2LiRiw8tE9fwg8JgJCqq4fPyLCnFQVqWoWKoPdzJVxPaSLFEfqcxFWh5qD2MPatcH",
  "key30": "3xiMPZVGWRZzrWqWZqrB53eHsZySCpSiahPTUVqAMiL8YTiNxQJ1y7jL78Z8autNY1Y8AMXLfWj1X632LN8LwT6f"
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
