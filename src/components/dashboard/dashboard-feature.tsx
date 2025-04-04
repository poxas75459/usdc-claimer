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
    "3NET6ahT8uWH5wAE9eNJjP5ggcFnxGq9mX7RMn1728gTJc43MKdHfb5mZnA14FYhzLhiaYzXuwwz6g1tJzvDVH3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LeF2wE7Rx9XrHqbXvzbcDJoHauNYkVdjYTvQpBdAy2oy6k9vUginQTY55EXFGDtHbaPNiMQjLzLg3Bu2ztzQVkC",
  "key1": "tEJ5HHJykbRUJYvboh3DkXANUUscMwBG4zGk9apNYzQVSNoG4pvR5BnAwc8hnAEgTf5iDa2RG53ti8HxBHDevni",
  "key2": "3RXyyhuR2qBUX33xHdWVJnEFVYkb7NKE1cmbsgVuFK1hsrmfugY8r6sUSqgZjaytvgqZnHmGrxe6sC6CjDD3pHEz",
  "key3": "3tYKksWL1EgaF1PmHGaX7jubSmUXv844xa74aHPH4BDpwDhe8Gigw73nKkLXq7u7eu4W5eo2ZRLipwt3mViiqa24",
  "key4": "9TnDEseU95vyybnZUG3WPndnZduTsdZjTRHKqhAKg2c2wHfXmE7QFL9uhE4jHPjdsUKazk6euz9UrpdUwEinNB1",
  "key5": "43aEtdP7K8rvP8Ranbcx18bzQDUWaKUoC7DpV1eGrtoUKCPbZhvDGzJ5nT45wYqDp45PGfk2gvjDQHdUYX6xVcmE",
  "key6": "yMSMAgwZrWovdC4zdWxtmuCfT16aFiEvKnWkghTkaEQL4S6TBUm1g9o9pM7BAn5YcgAuFwaDfY7hYmbfzpD88Vx",
  "key7": "4ARxrhxF4hLFnKY5zimFQ34yDw7gb1YF6KoELNJ3qoSEHVdyTpyHoSowvCxFVmXQFq8kWd7DDcWgCziyYHe5WP1Z",
  "key8": "5hbWZypMhaVzxXDD89TU7nk18qad7QcJSKReruk9qq5mi3AosJSwFhvRKVocdSZ92amYGTjBNFEMoqbodx5udZvQ",
  "key9": "5m8TWVf8Y7pi4JnyuZdBUGxW3m7TS6Y9scLYB894gMegKoCLHmRFt9pQajaLyrxthSiuhPf6L2DMDuB3hpAKdaU3",
  "key10": "4Jkz91Q77zgQikf11L4T9mGJAh7EdWWhFqYyRf7d8UqremYiiiahVMfpUc1Dqo1AB1iuXV4CWrVwDDQej24JK3qB",
  "key11": "M6E5bYG1AhZXsefdLCVineduQG1rmnPcs1QXviyPY6wA8wk4CHxPjqD1yrQ7uszkPuxZwj2Gq2sm6TxTYbDh29Y",
  "key12": "3oqvMUMDbrUz9VbQaPuyHRswddKPPn3z1yniAt8Ahgvd8ZRpKQ6TSgYFYRhi4rPu1FN4fJX9j4Hoaq1YuDYmsBTx",
  "key13": "425JrHPTmkfpk6aUbDQDrBkqjpuWBTYua6hfeUyenf344wLWxQn5Pb79FArqrX8dvuwYPN2Yt5WKgJsSJmpEDdJj",
  "key14": "UUiCTQq2dqz36k9Tjrak6Q8QWPG69J5mEVaRMcgE26Nmn4e2wSiTJS6sAitGpEyUqfaTAh6xGTygkYM9Juv3fKD",
  "key15": "i6zXHgpa5PaajjpCKpoZEC7SCzQ2EuSWr8u9HghZ4pv1Y2pkws9kgAgNhqMoeMKFwCiSYnMwAs6mMkKE8WbAJP5",
  "key16": "5yt91iisQXmVQqrh1b3m9xDPampNWHUV7o6k8bSAxzrWMPUN2Vz3nDBQgFb9TeGxLAoEL5XATw4U5e7tgjaFJBPP",
  "key17": "3o3LCKcEdmctjMjY6nG2WMHqP3i2RR52dRxX2MTJFikyGo2sohRe178zUjV1g2xugu7F3BwyJ1yYCDH3hQS3NF4R",
  "key18": "3F89AF7Ar1LCYUZWcosezxobUQRgb5BsSwaBHPCW9aEL72FJYJfxP5XwNYDhGoyYoLFMQHg5g82JgQdGCxXWKZTb",
  "key19": "9hNgmeYDTzSYDBym2f4bezQtDR3UUEx5RoDcWwEFKcJz228CxegfvdZoKUDeoUaBgaptZ5cQbRAEitAFVFypoN4",
  "key20": "33J9dEbFLk495EiDJmzYwX9Ub9rspZZThGmz66WWyu9pU6RpwbBKmKF8928T3NGCBuhrj26WX5Sz9pF7NHjk1tnx",
  "key21": "2teQsJu3B6VVkq79VATGKJRGimf32LVPNnmEq54Rt99oPT7a4dfaqxbA5gN2qoYAsXoovAQjSKmuCQWgARRKMN2z",
  "key22": "ksWbM6sFc7jpmLQz4EXxT2aLhS5QFetm6MyRgVRRSGsksxewwC9JWvzSs5Ee112UQ5hYoAEA1eV99UE7irG7NS3",
  "key23": "VCqKtijV5pA4v8pfey5QQY5TDbkZp48KmsumJA7ZnCz9DUXxJDqHMnUrzK6Ss7BcvBdfxTXZJxPbtrXZypZmL1r",
  "key24": "5AfaRN5UWoqgeTx1gVm7JXJA3MqfR2hDiskmbAP5CW5Auudoa98PsbKkZFoZsuZZX2eeNpgX9G9WpmqXScPVKcgK",
  "key25": "2ZWtM5k7YM17KrMbfxHKfYKif9dXoQGt1K1UyZEmJcJcaGjxBFkp7LrnfmEfJEduyysWSdWwQoywqm2A13VZRJaL",
  "key26": "5sH9UgRgGbrCfVrwnt8SwaKyyPJEkiaHwcSbiEF351bXcL3BDrCTYbeSrKLva9panNfRsvXTSoS51nTrbzLKGi5S",
  "key27": "3m72KFyW9m92tiyvMv5FoFpY4wtuLCG3qp7weQXZbMtSywMPhNMUfagSu3tKMV77nfNP2ykPBxpeqVTvowAJAjGK",
  "key28": "2ygmeH2e6xf48LDXhxedhdVj18a4mt5P7WfqwutL6MvTEvoQfDbSeJ4HqKViryKaJNCJmraoQRPHWXBoqTtd3A4w",
  "key29": "33cQJtFLDeBUw9Ckv7mWLxKNxwBA4gDxFBu78EMyNnDCLuBZtYGmvbkCss9k96ZQh2Pnvg6nJJo7FZMLU1vDSrhR",
  "key30": "3r9hLVHxSjvAp8dzaLygn9gnqLrcCoRTEGvgswAuNKzLNgKLwcfQHsfK6ZSN468PWd3a7anydTygjSt2akiHqJFj",
  "key31": "UrRB95jR5UddD2E8kynXAvRhHo66BEHTdtihtkSYHBnqVMzfvuS6sDdurahsmJCpXJFeUtEk5zgKZ3XPVFu2uMS",
  "key32": "3fUfb43RtWpQ5pe8pXJgLUkkjZ7R937pWvJcw26zFUVRV9tkAhXyhNmtzsQsp27BuKz8LNnJtEixavMki2Ki4pCX",
  "key33": "4dyaehGDG4pbHzxkX2L8EiLXVsCaU1LMnBzeom7kFshno2Hy34qFZ9kUxBxSV27oNGAws4PBNMXSrejyRJQ3YFPL",
  "key34": "cHEwjFNkjdFX13mjKAgwoqkPJxEfxDVSQVu2wXrHaQkievbTkKTV5fEJthW4NzHLNcBwLii9iB81UFrLXCn8KU5",
  "key35": "42vsoGWyna4y7tNXsz9gXUjV16i773WXgsibq8a4LGxws6ghS2Xc9sMdp2fenvQjocz8DN8h5DiVZ6qiCd7fXPui",
  "key36": "5g88Ehprp1BvGWRzkSa3nEvhQcV2TxJkdHe63duivkfpKVXkpJzpREUJtKGaiyx1THqHLQY6mkLW2XBR7adXNmtG",
  "key37": "2un31td9VH4XJTUYHoi3FH4t2EchonwJGdKMmg3SBZmPPdmNUuDSerHxXNJ1eUTWk1q4wBjKNryNoKPbwaA5ievv",
  "key38": "43kFV2ZDuXN9PSWBkMTdGwLuwguHT6QoDWh13my1ARKHY6k5gzcENtj84kvBwiQ1yLpNrZeD33YcZ6DjqpVBDHrC",
  "key39": "2JTXn9RijrE4vogjgftdexptpmw7VmrWJoWJGL6gQWK3SHavZpfpzqY2bxW4kqqC1c3hW8huybpA6WCSL4vJ7dPg",
  "key40": "2gHBLEB8RHuaokx3pZPJe1ek13MwcxEbanjr3LE8gCBYxXQfnT5ockqQonxYKAzAG8mcavvSTLtBqTz8aMHYibwX",
  "key41": "5mSEE1D4aVFmTRpbfAS5B1YgEE87PYYPUeHDC935MRgPw8SmayUvdtx8nJpJ25XqDTauNCirPpUv6K4ptyQHLWSH",
  "key42": "A2XTgfqG1SWaTikfGa9RQTVSnPL7HzcPMEsXFmSP6S9XFyizuYc8DQyqsLbDBv7yePcLuJGVcrm1yKAsgwu5b28",
  "key43": "2hm5azHYjHix5Fv83Z5tT1HGMMEYzdkChp8hWL99Ce1HBgNQZ9sRLgpqrccyEhkur9DUA6kQFJv6T3vCXLnJTRZY",
  "key44": "5GVRVfJgxxhg9PmpKWtyFvwnCpvjD62KzWgwcogAAA5qD5RAfS5q3wbYDPLyjbEig58eLHKShhpqTwNAyW13GJ9o",
  "key45": "5FwmtgpkDr3FzLb4y8JKmR21CLYPqQ88jUuXY6J6ija7EHV1YeFDf8X1qyCNZKiMNBhKJaYMpg5FV4DCV2gsrrxV",
  "key46": "MkBXRmo3dPq6v8KqbMhxJainfL3r4D9EGiCQAag9CBdzAbSBWziuMmZmfaty6v9XeHRWuHStfGXeMX3DctJ47gN",
  "key47": "fdefVRS8uQgMfJF13nuW213PQjehd2KkU74jnG6qT9oMcq9MDdJvhXNTNMjPQ3RBNUZbkwmCJBKHkGoJhMG8SYu",
  "key48": "3UwooC1eDCBcuxBSGkD2J6HRy4KbfNs2HAXkmwJWbuyhvbaFrKXjPnkFEbRGGRtBHDyznRPWADfUhKCaxKsA9b7e",
  "key49": "gYqJwDFKdXZrEm7vniELYTSkfQDpFvTANohkLW2zxg6UE7tK4sDnzwwLJSXFF1JJe9aNuwHm5QCvXHvdAzZrhtC"
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
