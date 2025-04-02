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
    "3xTMDYzco5G1bVqDyTuu1boZcRacHVJt6CzdbT6WPBBZkfxJUm81q84jWLRT6WnhZbRcPCHMBNyR2PfuV7enRbup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QfHJ5YJAXgt8GiYi7tnfeZfzcxVvMQW7nPRHMFkhYnRyDbqbSe7BwaKwPHMAVQhhp3wkTppUjBQadkNPZDjxGBY",
  "key1": "2EHmkSwFn3HttfraJ8snv7eDYk3pAXyb9injd3BT6PL3ND8Tc3D8xFu2PbzN9taDPonmNJKXgYsQhKokFd1d6QJu",
  "key2": "5PC5shNScJGr3R2KZWAaWcStEx7ZhgMmWd2cczEgaCMPGvAZJLxJ78A5WigqZdY7xxYJRF9BXRYfzhmd4E84TURY",
  "key3": "5MqArsc9wHutDZ1nyoQsdHRB9E2PECtTVYJi5F6a5KW7r3EU5kyh4NphJuXap79rKfpLsFwqz7Vt8MiS6EynmKxH",
  "key4": "WH4NnytzSdajWfAmyPmYTPwpeV9meJrLWu1mQco4J4D6ZtcqrNpGtjcsURtsAm5vd6v4mtNs5YxEgykT8KbLQ96",
  "key5": "44eG8CHXZnZE8bhMaJTzq9fRK6mCWYuc1gdvPZtT1t6nEmwkSpAKRL1Zuu24b29j5oWUCUx5D84w5W6rkD7VnPkc",
  "key6": "5eAz3NyzNBLhY4GEXLJCDvmRYAd5S9hnLDVRJ6EAWkC7op5cztiZqdLB1DooAQpjnakgvDS1Kx2VeMUuyJ6ACGsy",
  "key7": "4pfQHo3EH17dpDwpTqYHQ8TgR3PafmmBtjkysidChTYEeHrJSr4XUomoUVTHvhz9byB4EXLu3ASkuT1F1AUQ19Ru",
  "key8": "QJQhsBkAHorb16gZH8ovuS8NRFummDViRRPtAg9rsfskBtjctMSnf7xdxz1EaiiQ7FfpnAkkWwC838nEDkDmEdu",
  "key9": "jHABsbhsqTGu3FNFNeBTYFhdMnN8VD5qdovGjVg1GjHT4FxxwkjvhDmpwGBo534iYDRfznByaxZ3gBrULK5ZQKS",
  "key10": "5uC5LQHdV4hTE5VBfan4bQsiQ8nMFYYiBxNgu55oLGEf8Tv3S4ZPWEsK21TwzMUrUfr3F5WcepPg3YArUYLYzmh2",
  "key11": "3bxFUAGXLpnGnDVXUcXo3QcjEhnc5WMwaa3ZpWXVBMieYUpnjAsAx9gEmT216RF6xreiUMwcMoU9sRFTgQPKP7re",
  "key12": "3ciR4r6VHbNMY3mcEFUqgkBrZpzz2tU8BizZGBJPKz7x2cVMowAnkm5NyEJwytkxhzC5eKEGZbDSHgUFhbhTXHJu",
  "key13": "4KuYGvnoexPbEJ1xzXCXBXKeBFiiArEHGX1wyojm3HwAXUZgRDsLbAo7YybmhQtqcsL9Ae782567c99NfY3pDD8w",
  "key14": "3JiAzCqSPSNFw61WKwtzXjQPTwtDFzE6JXctPLNBFFkqHKcDyzMy6B2nVGkDcrWtikwFwiGa4K3PMPZ9d7vVrkXj",
  "key15": "2ihKGnxPUJEc4bE5Pphbn4DwieiXMPQzVjZkPgn7Wy8fAf7ZgxHS5hrpbz8at1gPaDRHDoaP1G5fch5FUk3ncvDq",
  "key16": "2K59jnA7pEgLV58YWYQr8D8Y6y6gzCjAS5tB69WXxHyBCjCzEZGrM5Yv2cigaLgtJYbAv81aY7ixDoEvKWHZL3b1",
  "key17": "3fJdBmd5xQvoks9WqWPjkot1U7m3Lg49nCxM4SUdANrzMpFp19C3797isEp22gkSeyJvWPeqUZFv63PZ6Qqu3ZJ1",
  "key18": "4RFjJ8sqTuv9BvneGHdT6k95u4G1tRTzpzkCaFtM4VFmnqJ2sbKaSrdRH8Rs35FnAgGkhXDVk2u8kGJnymCiRSgb",
  "key19": "K8DNHvTVAx4SBtd5HLXKSJWz9jLdX7884EEsPNHJtcxQdQMRcZArV3DtUNGgN5HdhiPKWyUaLPPGsHoy2uf2jgc",
  "key20": "2G9Mh1Bc9nUQLnjUwAxgvYXxYgRwz69Zja8iDRjq9zAq3ff36RJk2CRLpZnt7SPawMYGc3tyji78j3WCkfmQs8fy",
  "key21": "3TK1EQ2fzMoik8vCgMLMWfNgdtErTvtrhBgSWJvGiZUeo8b5JufqAVV6tB4voFg23V8HXu4rENsNXXo4qxyMouTH",
  "key22": "5GBkTPFWNrmHUcVnZr6ftZLvubzNCZRosWVUMuj3M4Y7sHeM85eQxmuqf3VoGY6L7WXbLXGSw8GZHAZDdxUD4zK1",
  "key23": "2bkwbSX2qshJvZ675mJDJdfYauCiPVK1eaQUkXzxjzBrdpnPyJns1WfeP9t9R4YqRKGgYUzkScde6Q1EXcKkeAYW",
  "key24": "33Wx95gyQYgH4vQV5maTGkNRNGozWeiDqdmEDUyZFp2j3qQQFTG7BRURqssYD7coAFtcQnkx2vN15yPmDgFvfffm"
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
