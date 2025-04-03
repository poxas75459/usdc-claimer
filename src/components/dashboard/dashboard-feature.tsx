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
    "4EhzBM5kkEWyKxeS4H2otdSGJJQn1UMF314hRVWkkHbGaaoAf2sWRwc64ckcMd7uP2vXhm4nkDx5Mvr5hpAFG7KD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bjN5Gy7CdLWuCSDjjyGKytfHcqhx4Dn2yFZQg3HN5yN1wMZrGUbmX41ELr7raERQuuZQ7xKm7Q1VtqE4aRPc2t7",
  "key1": "3kSqsUacgQ7izf8JwXPqrhXPP7AUEjQpd3MyCX7oGVcPxuUfwVtjjrPJzJw2Bs2zRNVbgESqNTAf8BKKdLRuoYfJ",
  "key2": "31NqXyVQWtgSF4R1PtUJ83ddzJLpa4xsaQ4eGrQQZ7pcXE2RG7jNcFyEVenbeVjUnBBbLJemyn2xGzbcgyXhvK2o",
  "key3": "Y8JpUrMTcJrDvkxWKLfY1tpCU7UgJGQqazt5eJSe6g9s8se2oEYjNjtiqmYkHtpWKJPjhU5SKF687TK3bDBQztR",
  "key4": "3fzpMd8ya3qQrYChxhjm9wJ1zLcf3vgcdpMEpsP8oWamVAdayr1HScRK6erztdde5D8mPDUT5xb7owfuPHAqNKzs",
  "key5": "5U5evyAvWeH54npJ3HGrSLWTGvtGmKMPGqtobemg38JzQepkKhqMhWruerqm9y5w14HqDtxfd13eHEpT8GLBTMha",
  "key6": "4vuat2GaS8epaktsEKfoQ9ZwfQLKTtxXgrx2h8opc78bWdPexZQRJikU7md58rqZ1BrjPZ1jqVXWj2UmT5amW1AU",
  "key7": "xTmfEeMSLjaZo4CPfgxWv1ghLMetmo9GXu937Z2baizWNDqD2MMomv2kjEjZQ2F3HBXCVZv8kT8wmtsk1L4WKdq",
  "key8": "4fauXVeWFjUMQqcMbfMTToJPnXWpqn8pFrbJyftTvRGvUvR4aJqBEZNhjFguNF9EhdZYXPhUdNJqLFkfd6GKvJ4z",
  "key9": "2bUPBVGWoYaCcjfFEQ23mm6m2R7xMTHa7gKfFQn9UsP5Y7dZDtgF7MrqAqQF68xT4Q4iDcrTGQEBizLca4sTFTiM",
  "key10": "5eAbeyhtZ3SgzCmzFfMbWZFqq1Q1qE4pqTvhPHkhNzCu6p6eL7iiRTkc4JLKkUPhUGzZ6mJu37ata8ABVLbHZ7fg",
  "key11": "4dxHEe6AXArzk1Bo9BbnVVEHp38n2wwEbyTNV5hxQEdNefQPVvZhbAvkThg2daYe4rsvHSsBVZqBpTG3MEnECYh3",
  "key12": "5rueqyEvDE3hXZQNrWNwMPWCh8vFmnkoEStxmdjuvY4MEPKrmariBEzz7d1bZW9VqCeEB8oXBHnoXKE6kkrw8PQJ",
  "key13": "3X2jTNCst9RELZAc25CZtUKmBwRMAFkqtgcR19vetTL5HUu2zuvx5oBSMiaxVggxYTuuyr9TgpFErvCeMqFUaqei",
  "key14": "49gQnizu5frGfeVY6BZHADwT7KbgpnUzbUvK5HrXzPL6T3qKzP73ounbEAav8AiSTaYEXthiU9kCeBgJXkWyF2TB",
  "key15": "4PxoCVhm8MJgGfPZQbkxRxACaBPrCPVTGpUEAdvAGe9mbqWRw8e29xzT9uUyvGq88EsGeyCAjixfgq7yvnKKXdtP",
  "key16": "5Tnre4Fqd53JJaPwohqu2VoV68YEpBkhgU4PWL3Ys8hKMWCWoRddumZqnjYGbu7ewdxUqcnjYDMsmR2meXMk8HgK",
  "key17": "wpA493Nub4cTHpzmQ62QTuwad4n6x6rDnaMUBTDSuytbVUunpEFNpdnSk39osXoCiHzyYomGRDfYUt1M3W9jHss",
  "key18": "o42RehMf43F6tPA1m1SX735YbvFBeyK752gvfHhSjAh79ruWVBrHZNJXpGvXGQEiLTBPwstvc47ebixShnoXnzJ",
  "key19": "45Mjs8c3GskhPUM6ZNWZ7FZwpo34qV1EKt5vk2NGF3N3vJ2fGkJ1KdWKyH72ZpqMnZksqDoJLTEqvVehv9iiqYFr",
  "key20": "wWxF9xiX1KBGWRAusKgWsNtBqou6iqwmPqYgZdjSCHPriyYg9Xm8z4fy47xW1M2t56WNBKdLnQo7w9T87faXmyQ",
  "key21": "44gkVcrYYtZHoXujQaShkW43XpKZM6EttZAPForN7XRDAxjJWbxkBTbgHTNGXo7NN3NUPYhZYG7t4vyW7zXPqo4i",
  "key22": "EEoGP9BCtKxxQVc53BZH3bkKU42L83wiVXFFYNsAHzPHS5vXFVK3iNvneLebe1S1KRQcUQW9tUvFoP7kWsE7AYn",
  "key23": "ddcTUvKu1M5mfQL6gQpvbcMh3GiTj3nCqv3TTJUYScFiQSX3ENF8jQ2wLw73v4zuJzyecak8xQFFpm9x3rdK8zR",
  "key24": "PYZqAj57K6XUoDg6NXXQ5oN89BEekmcPodSBjLFaJaUNZCb4qD4Pmr4gJGchFvd4XhNMoATH2BkA3HCZPCRUb52",
  "key25": "48aYokKahYJQkKn3TZR7ECzYJVSYyU9Lf2tZK1aazDfSYkAnMBAuyhAKKjovaWJVCxvpeXqZarSydULi2QJyw5am"
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
