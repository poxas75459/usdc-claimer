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
    "5h2XRqV9Wq7fLg7SXVnjQhCv772UUittDYBHBdYJ78VXCjQ23FTkd84ShvWEXFbJ4yQgA6hhkbXz1mkDM6FWt9ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63AmNLJ1bMzJoUeAhKkrWeXqK7KrhUkrGntCzZDJACwDVqgX8f3SPXexQsdhKeSnxPEMTAqMuao2BLwugXgags1o",
  "key1": "5R3CxXvqjKD1YYagD2pv98mW3zMz6HfhJkUMbDdFcAf6A2jumbkxy8FSk5Sm1ozmo5CTyCvmRwBXRz7hNsKUpsuY",
  "key2": "iiV6Q1xQo3dpcNNnq5cNG1gEgnxNsmAznh7H1yVtctspqkGqEXU2AFo9DrbQXiFbqA3ntmW4gDKdXjH7ePfRJeu",
  "key3": "4tpxRkR8serMYrzL6sZztXuaZrcTgUSJtNm3kJNi7hsHTVi2WDneB7g4BwtK1PozNHXuX97hUbKDZghKGLxHXsH5",
  "key4": "5bT9NQ151F5tmpWnbNfRj669BoGzcpqiYqxLPYyt81f7rWdVb8M5ChsczbMSq9mb6e7eCdPxhorWkYsNNuecwY5P",
  "key5": "vYRBn58ksvmvMsiZUViAGCzdKWaud5TZbTzwHEGneVLp7zSQoCRKErPNq3HTdx93Akj9ofZVQDeSdSd16FqBxN5",
  "key6": "2wSG9zjZaw2E8fKdZTPvw9aEqbL5ToUXfbxXVd5eRBCETjw5CoAHwjWKNgN1cEUyc3uwLcSUC8wgk64FUJWPQgXP",
  "key7": "4frSyjTjB1Fv5DdXecBYRQ4tV8a4hEm74fKsxtqwsgUeRZgJiJn6FPudWZsRF38XGuuoDSDVYEBr5SDoFgghNQHY",
  "key8": "3TUn7PfabrQZazfxaq1uCxa1cJ5zodxuGVikGmQ8UBmbQFXZ13q2ktutUKaKJJeK1nHWtEZc4RMQrgtw173mE4BA",
  "key9": "4otbycWqX8DsvMFRp9Rsm6XDLawgnZrJqyuY9k9KRMmiwc3rAjSVKLiyHhXpMCmtziiBDFwP9hn3yQQsPRdNWVeb",
  "key10": "6eEnV6z5hWJnw8e7FKsy4gvV5KQHGKYBM3ud7xvULQm7JJtpASdezuq6LoJxr6w7A5U4gzcmHJZGfJRBua5vuLv",
  "key11": "3GTbtyvc197iRtm3Gi4Ro2RoKmE75CuSrisA4sp2Psxzv8dXq7t1yfNqW9UMzHH2TLyn5Eid8CM9dMGU2VYvgPE7",
  "key12": "3ad8ip9PmLDEzFX2rawu64VnndZC1LNVVdwHxeTZs9X8UgmnAghMfmGbvY8iEB87oskAyDKJrpWo3aip6N6xX1mb",
  "key13": "64q7LKFRHDfq5DFDKN1nwNNtAcGnAKkMcwUSBp4bXKvsVDMPSoXN1BeW65kf2RbwH1ZMGCyWbHxJFg85AV6NHPpb",
  "key14": "49cBLKcAzS782BeXuPkWcLBuWrW1kbVktqSsnWFujozRgUPrUfDunokddtUqYhuYQeGqQ2Mvcavf3JLrwPnRFUM5",
  "key15": "5qHQuJs31ERCCxsjPE5FJjkotN55oo6afUXtAy7dSXsSrkAw56ojB2NS2cJvZKQeSoGeaCW7Jnw3XzP41oSmcQvv",
  "key16": "3fJNPHx5egozh4nQ8e4uaDpzC3FqTduEjZbL8zyUajWThfmXe5dJ4mANGVMoy417fA4AwZMYY9ezcQ4fgLnuM2Sr",
  "key17": "F5W8ARNwaYWWSuKAMwta5jtHueGXRbrDb1tViHqL9GxFU8ipcjVxvyvWhimMrnVMzSFjbnZtEd4a3J2MbFU89ge",
  "key18": "2dUeyy1EKPV7NcqxEkHdwyj1ZDhjDU2QUkemHZgPNtA7askJyQ5tynkjoB38NqHxEtCqEi1MgekZVFd3G2KsiNzb",
  "key19": "4mfe46SRpikwVG5hprtqFVGq9iQ6pJE98Us4bk14SjC4QehjKrPzjBEbyPbbCHYt5fNQB15VqpBZeSWiNzoqS7Ro",
  "key20": "f1GEhgPAE6recvxzrpFGsouREhfdfimBXmKH7b2Cpwqbkb16gsaWuYz6pLsdV9y5GCLMpp5gxRKL3e6mZzQaj2C",
  "key21": "2X2AjstrxaZtSFLWXejR2kB3BZUkMMsmnYsmJxpbZHZN46dy5wTeisL3WGyPCtJmhBdGFzTSPXYMHn7LY6fvLBai",
  "key22": "GeXqTfLFACd6VBQJnRMKvfDxxgGWFZ4Cw1pdmPWvjmHNmGGjG9MznxFbJmtH9EfyVtRepE4weEuM9Fk17gB3bEm",
  "key23": "H3m8HR2uiLayorQBwqHyCunsbBKFdTqyfyGfFxND5TMaamj8s1vDZyoLwrGzxAW7esjwewgvHkwUVfFL2GgQEju",
  "key24": "362XxTme9N58etzXrLpe8j6kusAo3dzdQuUEPefUjFkKMFyjPrrsw6q8PXHNihgvjKiS8EULJ3PziQA9yBkFi4UF",
  "key25": "nJMAHrS4YGcaJUmrNEL6Dqf2k34vJpBJwG4tXBJL73QuByqC9A8qpxURQnnuHzw1tqr9dkA4GEN82pXbsucDAjz",
  "key26": "foUsTAbpjA6EsnWB29dyHGQtFP1aviL8aCWkkgdq4RSWRxudZFzTBXgmeVXZqvXKMupveaK87j72iuZmWJQUwdq",
  "key27": "4EhvicxRguakgNWvYryuByo3i7r5rrheeL31XLShjmW8UKwqXnWEoAzPf8vxm5owSCG1BuUb5AByJFSGTRGypS8D",
  "key28": "bChTHYsc5ugxg7HvJGUy6ULfd9yHUwvNrjvywcqz2jY2HfuQhHAEXq3tSmr42CaG5VgiJ5sebSTegkRd1AX8wzc",
  "key29": "652efzokx7BL9wrKVY89AizrGog3rvWX1hVLYBJVZeQRp1V1Y8vXkcrgjXYhuYQoU7kXbtVddR4mof9kKurRmkG6",
  "key30": "3k1jLHYchJ6ZjimbtN7kQ5YdUvbCp9ZCnK94n63MPCPMSsE7GXzNJmPCgihGR46hadCKw6en2shqaR1irMQTqVwu",
  "key31": "5UrWU5WNuXQh9Wv4nP8rn77EoTHkMSXASeM2grVBqYecJXgL2aTgKiXGNLPoXqEeLYXMGsFWVCtTiqz77y9dm9a6",
  "key32": "3747e8RWoK5HdQs9kYwsc3XVvBdz6eUKWjZWqJPgrHZrKnuJ4RA8UvbBPfKiagZCyT5ePv81j5kVXraGeMCGb7V3",
  "key33": "4YRy6achzmKKMqkV9BF36GEbkym9rvK4XDxmRLdGtzRhb5AWGQCk1zNnTfbdcsrjAwiFy5bcfhy4ZgdLsHa8Q6LJ",
  "key34": "2fiPuV1HKpRfbM86cHqYRwJepriNDD1SL4Dp2zdkPyEyEEzsyotfWP7y8dMa9MZUpUmPKddqGenhEcvxeSiZXPMt",
  "key35": "4wV1PRTJSYvkARRgrzBTvGKyjKEg8Rxx2ZVsHLopaYmPUFxL9389cizyk5Qb4NSJK6LMkVaQyKJ3fgxYp2dkPk3Q",
  "key36": "4kwsQZCHmjMnYvDUxCwE8icgp6M6eEnEHnnwA4jzi5XYdyMz1vkcmR2PCQKTN5M3VBSBkMnW6VAiZHAXQ3vFfXiK",
  "key37": "61Myhcs8F8mDKoRRgjLQk4ZjDJquT8cDb2iHmxaGM3wKagE76TnMy1qqnZT2JNQZD3HByFYF8Tm5JbjMBF9WkULs",
  "key38": "2KvyENzzDTjcMTJq4XiB8QYp7sXMPnrJoXxjyASwhERCW4w2VuQTLX6UADtuJedNW4yUJsQ6m6VNPChFXA5jqkAa",
  "key39": "3tTmhELLm3qtUyx2qAm5ybTgVupqUbTWpGoQUEU9UL8KGEpqkQqm6pyoatNn7DRqVVezJNnDCCYBzp4mjBayJev6",
  "key40": "2LCi6kuf2ZZgDK1e7cbtPACcV49Q79YJ9dkWCLvGjbnKjitsKVX57xPkUSHk5b6tRk9NN2q6n7GA7wsvQYCgPnR4",
  "key41": "5LWibQrEaZffZhEpnnGpoWzVs7fpxbw1STbsDwYNnfrGPSjah29kyykb8dVfNDoCC3EZNFiU83p9oxYF92NPDAYA",
  "key42": "5db73NWr6YWydehZG9KtQoA6amXnfj89QkGSbXQYtgVLaAhKp2pF2Hg4NYTuHi6daSozp7GJfasaiPVa81RQtxSw",
  "key43": "3A9Vg3j6dMGC4wynsb2vxKy44KP4pjet6YsMyVsQ7avQfhvFy8aFrAVYJTkjMytSu4BgzZ2EmPaFBNbtxyNAJ23N",
  "key44": "2VQwoyCptney5e8ezUmVdcA3krawFNNFP6DnunFy9pG69B6mKruAqPLH9f53Yqnq8QujhVm3r9n2jCjCMTUSkny9",
  "key45": "2Hj4wsSWk1Qf6uVvjqQUwk3Q5irHKbd34uY2bimwJ7mgJXUhZRpG2QQnzHVYeqF5rbk5bMthA5Ab3Rb22jXjDK2Z"
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
