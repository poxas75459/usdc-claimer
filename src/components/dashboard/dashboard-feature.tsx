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
    "MKZ6wvix4upWyV4iHa6n4THdwQb9KwsDpjM2HcE9T1yWroUqXLnjPmsc16biQdRndSyeH54pd7QbmVJDJZCxZuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HYp2hRFrjAfNuQVLYLrKi9qMe1uEDuNxfgA3Kj1BMtqAD859iiy6znFJHTj9VHNq6Uf1m9MUBMnY2MZ2bAv6nvV",
  "key1": "4aR288chFzu2y8E5drQA7GvEiMtHxPvEDbCqcNJmetV9PsyytDiEiypx6zhan34PH81CXTAKUwDdHpm1eDBxxHxX",
  "key2": "YxkpN89VhhfZVUE6KyG72gVzHzpsN8WhKgDQLkRPaBSgX7MpL8YNJ2cS81PvYrzsh11jHuf2WPZQFPokpXGgFoX",
  "key3": "3X3r1kHANVxs17n8PjBKdboaMJZw5J7hYzS8zM9fH4xeZpM7RsXq7c7PaxDb53Eh8C1T4gCYWfiUNnn9JRuEHPEi",
  "key4": "JwcNfscWjYygJiT2ppLndMhWrCM9hfi7pmUKUSeqdMyqJDjWaQ9WV9Lx4cnmmYmSioRU4zvvAuGGK2txiXwrcYH",
  "key5": "vz7EPonWdrAyUR351H7Lx3j611qKMHGe3KfXkwrMdGGLXdBJaRq4fpiLBKJMrLhKpH27dGGdL8QXizYe4pHzYwC",
  "key6": "56MkRmP4ogWRL1TgpGgstvpxrMmj3RTJRacLUyVQeJEkk12mFCyPDRERXSH9NkrajWQ4uKTuuk7jtefYjxC5vd9k",
  "key7": "Pz2ExEsbmLrdPTnnBC1ydPz55L1poYBMP93mPMu1DfWqrK9iGPMQEkHi31T5CqAg1sypioAVYzws3ZshAAP9PGx",
  "key8": "28Bvro1zfP5EbxYrru32gcEQsDkxAUSpP9THtQ1wdRbf1XtHRKosvwAo6vQkmM7BBEX9ecfyU2e8qtVAR3bxM1E1",
  "key9": "4331MZs2EwwzuwDdSApmjLeengVq3Qph16tWmp3bTz7hyjVhUbpp7RLtzWHAjBK8ci5AEzXUaMPu3djA5STjrBmx",
  "key10": "53kZK7jWEBbrX7SHBKqceFPkU9LqnKJPbEozA26bZK4Jp2wTLsuA1iWsmeNB64Hc25tjernYvcGBRY12bF943S8a",
  "key11": "3TvXXaJg73wcnjaswYS5VZ1hxk7r9gctJ2Es7VvAT4k76oCyK3T79422PT8sEMynyWJYnQvwQicNhxMFwwfZxtNX",
  "key12": "5p1AUxHpST7We48U7KVJkS4ktymY8jAwta2ws783mFdLP1nqYqZxYJdyKg3Tz5FxFZSH1RJLEUDGSLuY37eqZfUv",
  "key13": "FejLi7pHMbQY3Szi3y9EM6LMEJvydeNHiTDZrmLAGFfedyWbjVWzcRPoSAFig6ZZGqeiMpSZ16yBAgQFQUv2si3",
  "key14": "3ChEYR5BYEgqeEdTqPrKp2xJGBQqJVSHAtUogV2rYmLexHxk9zPXUgPwWYZqqfy8c5Aw24hWVXb25ss2vcaJYSMk",
  "key15": "5GzCG9oQWtW4GNSdx23z9Fk94Dx6ayjmK56mbYxjFkuqzkbYcKz7Ek5HC5veKb4iXMSYxPyjd5V14buLKuj6uBwi",
  "key16": "2uCewmYK6GV6RGwZRJamzqxpKnFXTtTUkVr1inRK7sucWsT9xcokSAP3TkPm33y327ccZ7FjQb2By4SsUAHGB7NR",
  "key17": "4NyGSwvs6J8Eg4EuXT8f9oAN5Vtbz4VUYkwEURwfosYAUcVpaNMq1E42Wn5SHHDWVo4hcUKJqQNMnups91dUgP1F",
  "key18": "2QNVZwpwX4FEQJP6ra6457MbwnHrJwe2kimfnthucSAMVVZujAzsoA5nff5tc8juEvChzwK38FbHdCgWCKKs6TjW",
  "key19": "55JQLCTPq65xM8MJLWKp37wPswNe6VfEc3wkQ8rCgzLdevWzihU2VjHJr411DQCYAVmTouQgXLzhaGem8JiV53ZY",
  "key20": "4HNhfVY4FqGqHYCGA4kbVLEBegZnh1EKyyBeKRLFQrTpzWzgWfsHEJ2xThXv74nr7oPUrwz9ZLnzdGPjJiWxfRGZ",
  "key21": "46cn8NfZnfRZgwNgvdps7G327ispRmA1DMHQqSm5Fp9X8GLoFhyJbYiszVGFzhFWKyU6kXB1pYuxsSzRRJZGmoA8",
  "key22": "koDhx16CJdU1fBVaELczek8ZcoRmsuAFyzjJD1efas3wNUZTPzpUtw932V4KLA4y6jsUbb8q88zaRsvNHzhg38f",
  "key23": "2vTqWuBrYznE4VwpkqhivAcqkVqiTb9ZuJmx4gGR31A4r6QVRc8eSMRLzzmrHmEAwUpdrDc9JmMtdidTXQYsrhmT",
  "key24": "5s81Re8r7r8rtdQo1PsxGb83hEzLzAqovzJW91xtoESgAm38khioo89Jj5cVxQycEUx2ZvEpjWmjjWizHHrNmdRK",
  "key25": "5dvQWANw5HT7HJq7hVr5y9s2tQNAY7VkqkYz3KYk7TKpwpYYJffdMQmHfyK7UE84NePVGD6s9aqWwCPyexGMh98e",
  "key26": "3d2rx1wFrh9rtAbejKe863ExkvbRyei6KyrN2KMvjSiF1DVXyJ1ffoFikmdA6iBazu4xJccPLzj1gunMchX7qdfy",
  "key27": "Yz4ZvDkGAQZBiyygZvwHeoe9ejCq8xxH3yo9TDRieMpvL4pamJkVRuXVkySjRfmqJ3EU5u7VwsSJqZnYR8nLwn9",
  "key28": "2wRJq1rodaPN832Ukw9BE7BjcYVnWGRMUPdwXFECpLiTg4QXyhjyvY9t96WBNzvjMH7pz3rxD1VwXjB9tHpfQry3",
  "key29": "yZKRYuCsPx7R1MyK7rJgoPS7NHHqh3ToWDMfhzmsQFD5LXC94C1x2XtiHKZvgGofLhXNHiEoC1cfSWuwep3bgQz",
  "key30": "3VyLc5UxFhLa9RfeaxW5jWPrLCb1f3dBHhhMQteDSTgrHctyDASngv7pQdZ99B8FaYykRnoQvKLG5jorXdJ6qems",
  "key31": "3VyDdDj6Te74LhSWjXdoHUVFzp7h1LwEr7rSvSDqHSzCTed4bAPzzBF26bR1YQUcxGBbWzwpDZ26VjrtUaFvUm1m",
  "key32": "2mK481a84rEFXfkDdbaDCtwqwp7TEGFwrEoDtuQ8Ds3ZCLSp2jer8p7wZJRvBga4czjuCXQCnvdCsJsqEoJPaBBY"
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
