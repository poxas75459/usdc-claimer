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
    "z3ysq3aLjoecnRndkHkYUYKgYrq3eQenEBo3DoQcVogjesJMKSkECsKeLHppt7kW2KckWwJ8zuR3Em1RcBKTBjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Puw2X7pxptkTZcHEhna1BL153nwFqfoQsPw2mbWT9kizdJ8afBqdb3XHWjEoqVkzXJRU3r7j8XFsQ7todHvoXoq",
  "key1": "4Bh6EtSHTUGUN4kPgz7s43NdSFH8xf5GPSGQWzmMBwTRRWTsxuVbSxGsxxgLx9PNfqaUt9QaNjdAV7uokSGZvDfo",
  "key2": "5nckbfLbzDT6XPMeAiFxKvBy5gY5LbhPLPfMKyqsbKQQviwsUSMVzfTi1cBxBLqTHeCXym9k9t4aibVnaBfaG5vG",
  "key3": "n2LT9oS1cXGW6ofW7EjxV36CxX7ECkaxMtGizHo5wWhBXViiBK6DgFstLhC5NbyBznFksDLJgXYknNK1xni4z3T",
  "key4": "3hjgFdtCusr7JEg9ScUYA8Sp7Jmc6QwcDDzmBeoA9pmZ5wNBK3vpFihmhsYjgBNDzDcCM4aZsc8dsT5vvdFa3smX",
  "key5": "HJpAD3MFzGp5pWAHuy5HPDWyhhb5d4vSePXRv6C2SkRbCrvajp64umcCYWRoTYTRZWoqfanR7yKrfdTsfNS1Lkv",
  "key6": "434i5L7uuKYHaVcAsoPdKzV6pfc2Ra2eYiUL6BkbGKfhAv9deXQ1c9amkvy4FnhLUr7rsa4Qath5ujeXSjnE2eM",
  "key7": "Nx1QRPMJhmiyUYREuAQaBCjQcTYeEgkF7QyKs1ghBKQAZfnYDEjFHSh5LC5gwYdYYDnd4cbhsaH1kmtcgfRZvBq",
  "key8": "4KEmVqGTSaKR3qPXtwNA5TbT9gaPY5zbcYGRV6yBzVzQCWeWsiaQpjdYHmbkGPvYcVP35QPsfueAWunJyUhTg4MQ",
  "key9": "2jRZj5fS6x2VPfrccdg3RtzfoWhgLLZ71rRgfXaFuFVNE4Rg7srxMAYFgUEKK6ZAEfdKkmPfLnhPFcjNC7v7VuFQ",
  "key10": "nyT5gMxkMoqUMLPmX8GWVFzeAB1ECdSdq2gsbnLoAT21knXoCuS1ADLPV7Jd8KdPYpd6kYn5vEC2Z1CuY2sPgf7",
  "key11": "3M9ieVNeh2w92JZwwhBsuokzMB6YRovHMq2yqLWcpM7UfSmgNRFYpboSLXbwqCRod5acHqowmGLcrdJhQ47x2Wtz",
  "key12": "37yRPwH91TK114dFyQqnrqGJeuncdCkJHygJDBZaiRH8Rzn72JNfTo2c6AYW8E1q63ikncdLtBw2fHjdt6pMG39z",
  "key13": "cu9HFwhQLiEowGYDWQx69r7S7CAqU7q92no1pznNDa78RfeurEhyGzB114Wh2VWVaNmX5KM6q3qfUgWaCUSZ7KN",
  "key14": "5ysHd6z9mD96aFoPADEg9ks6DvmceLn7eK3Ymithn4qJx9ZivCD3PkPPQG5p951yTj3PkU169H96jMCJ6e6KpeE2",
  "key15": "43YoGB4TJKNBMnCmBLYUEFM7xJaAE9j7jnP1V9Rpo9PhwgbPzwiWTfm9iT8R5iaxJJjmHfrtLyGVqZqFSMdxv3XX",
  "key16": "biXDWLNVqtbAp5ZTQ7NRcxVgKSYbbvD8vG1vpriR945YiJkmEdTvVyNfwQnNpbsVK2c7tnhBLezWJ71qcLKBx6D",
  "key17": "48Jjf2kNmQoSharkBhoQc1CeidtQ6LbuiXsvJxjdPWrN2W4HDDJxNVPFzVA2GKA1DZckj2QKhcLojb3pjtWUC9jk",
  "key18": "4MUgDkeJSUvdHDv4K1aDhrcVShrTmCx2SzyJsRrg1qu6MzfiuCw27w93PtPJZpPMfprbqnKfDzTdHJfgvKK9uPup",
  "key19": "2sGx2jcrgKhYkJrq1sNMWMbFmH2xmJaFYy9DSDjtiaLxPZrt9ymNRyxU2BvVPixxWAZLvHQ41gbVkvWAvBLSL1J8",
  "key20": "2NJVXmJqXgtAi19zsioHgBk9hm5WzrfWY29wvYrpgXxGrzYL4i8xUL4crUeWUb7xQFUFyqRizQUBQDZyFpt5QvJ2",
  "key21": "KhH5Z2WhKbyoFxb6TPjiyfePENnZBG6QD7mCVioobeqVFAqz2AtPNvV81sLHYqdLdXK5UEQryj6wEYU3ujhCYco",
  "key22": "4dk3kerPYcisnAE9x9x8ycy1dKMNxiMhCDGaWwJJc4JtdnsHLoxLHzHJnGXKJjmREakaoJ5qjRCBzJkWtqZsLwYJ",
  "key23": "r3UqFysqouEEjEf7gZMKYGAhzc83n4D7aPhqq7AnJsV3kjSvBUCQKNFaqTC2XhzSFtBG4QgcPvqtTjFiJuzc5Gn",
  "key24": "qpBUdGSYta8y78hzwFsFsbA5ETQr55W5yMXA1uw2M4EVRX7uLSj91mxWqhaMznErK3KWUhGNvrQH3fNzzgQifsk",
  "key25": "57zrjswPTj337G2gxhwb7NCK8CNwkH1epxHMfuHskRWCi4VxBcPmzHh6XEk8CiWqHzTW7VY5rAFfvUebW5HqRMji",
  "key26": "5GC3Y64FKswpHoevaJp9oGRrvxcL3vSkrrYfZYcJLCcVcRCVHzg62CoU6VWaHUBovpkSd8rNnmn4pyZ9j4cJ7AQW",
  "key27": "86h1F1JVTi2fK6tR6wkcy6tebnSGRTyEF5wUhDCLhdhERXrXvzBWTnrQoMnyD4gLzWd78ZfVXxepFxk8WmuqTWu",
  "key28": "2PWmw9N4HJV41g5iXBP7AqHeyNXTH6daSMkKCkkxDoPnaUA74F7iY28n2iUjWaRUvnThdv9w4ox5fiAx7HbqcVjA",
  "key29": "5UKgyUicP2ZtnsLQV9n34ZoNWwEwLAE2gWUkuHnrqwvh3k7DfZgK44yh6E56AMpRJwAegTdVgLkYn321cyZEeRaB",
  "key30": "5CnTMTvTo5dSLkayXsgjpxwXJ9YaGak8PA3WmTiqYozSs41cfAwVeLfMvdBRa76cHdn1VibhYE6BPKjKXZJRVoJT",
  "key31": "nrbjnAmmzNBCMuUhRJV77GSvDG99JqKzMJx9zQ4JHkfYAQtycEFJ4C5AXwmF5te4xQG35etWRHrfH8TyH7WheLs",
  "key32": "5CiA5QBpywp92QVfnxCy2pdBAsEMvEqgzBCE1wJbTGafCECcR9sxb4ZDhDseBgP9NMDENhH9Vdc4C5DPrvBJeSud",
  "key33": "mVkxriSLjTptQp6xArDuE4KfKsGGMbHFy7DrA82Ehf2qUXr42r7Tu9sAcRDWyGtFsPD1UEoQhXs7jqrGAZQ4FHL",
  "key34": "2XW8buvXWTdpTyDrDnJigoyDv9NJqNtw5QM9ANwFwciczNbQ7jXsgVGAQmykYbetxUGxPhA5euRPizBfTvXf4QhH",
  "key35": "2GZZhUv7mV2ujMGHEsxp1y5iJmyyYwJPJvXg4eejXjPwLGyR7seYi4rfaYGmC3gCgWTEMP3sCvhL3hPbKYNUXBDm",
  "key36": "3PuSRjbn5hFHK3vj7smfTA3rra6zZ6KziS8B2hKuvgVfvcaWyQPd15X1ZS1n8njNLL4QgTynDYYJ87Eb6daWDoie",
  "key37": "4fbyw4vear9HRgx41s2vfsban8Tn7PTJY5npqTWQkVTeu6ofnVjEu7oTVNvzp56xjg2YvxcZQ7eS9xyucry463uK",
  "key38": "63ZwtczXxb35SRAqBakQXUajyVtnPxUMBZFRRmZX7wtcVcnesF85hRR1ZegvAxw6oQN8KS7BVFGHrpy9NEnWp7oF",
  "key39": "567cPuRMXvUuCzvB33QmEsBRhffkTn9qyTpvDEx2dgJQJvCYQwRQmZV3bmpPswpykToru74St7E8VQuVYpEPsJXd",
  "key40": "c3ANZL3WniuQYCNTgyJ1j1zqFiGttiGWDEEyJNL77G71oMTRyxS2ro7QJqbX9hVFpm1h9eYvSEk1Q6hskvNvwLB",
  "key41": "1X4RgSrmVaZCZRh5Ybsbn32xN7vsWyxVqkmaXqBSQaFNRzcz3jE2t6r6rGGGgHGi1gDh9QthjGzECN6R2vy6qP",
  "key42": "3VMfsZuofLz8uAkjwnv9JpjC5qhuJJtkX7wQsLDA3LbDWVvorDZKKe17DB9VE8tAweYwp8kCRi8AwDc6GVwYHK1u",
  "key43": "24ZbxXP5EcM31Zb2meSht5MdNGfmAvS5VN7PgzV6sFJEsjse6tDj3NqcpuUtdSUGBMa35Eit1x16QXUPJWj7cTKg",
  "key44": "4qFsCwZCxxuMgDQxwj3SzjgcRC6QEFE964Kd2nTHUBwCQWvaSZgtyDynqrErhryCGZzqz5Cc9VHHw8mko5cQXNQd",
  "key45": "2s3cThM24nYmJrvDRssy2iLrG9mkrY7qsxES8jcxHE87VjyMuxTDULzBe8xRKC1nJnDGs96XeSbViAE7b6sby5hM",
  "key46": "47SeMtSsnNktQBwzK69s3diZdQspruzaygAttcB7CDTbDEg8XuMcxAKjyDVfviHNt5XDdSzAHUH5poeWG7juWm61",
  "key47": "2wbSLi7b6UwWodQMxiPWHvKQQQKYsFUckuFujPiphnoGK7t1ZNrw2uvfBMSLi2d34WVF8AAZ4xXV9ZdC299L9ydK"
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
