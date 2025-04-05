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
    "2QhEb5ACugfRexB87YcnGQLn2b9v59KK7RZVjU4E4xJBY6CWHs6g5iogbQRz7BqpoJDznUEnxUKb4c9GjqTu7LBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ySm992ASqnoSKWBypdyn6Nv33AQ45oVQwVhzUrQry8CYuwXtCrzhhrzHe8cnocJHSA2xXuACQrhdCKA5TYU5oVm",
  "key1": "yDJpxtndZaWkWE2cfLQTJkfoLkb7Td3Ai6oCJLudhMLn9qRoCroWyu1nzxpXpsCbjKnaQE2rf6W1ReUNtuHeWKd",
  "key2": "3N4B4yQe62Z7KRAUHYSoP9Wf4ZY6Uk4JHqcqKGQZRzpv9yND1a54gFfH28GeyHQjnUDYatgVQuFhVjwmh6LdN7Zo",
  "key3": "2CjSXjM2GUgh3nB8mEE8tP4T4ovCTBg5TTXkUYHzUoGZoiMrbx4qUvSFzpYB4dsuN6i6h661rr1SwKKbeJ7Yvsbh",
  "key4": "5zmWuTShJWHWpiYniv57uwids3GqGzyLA7Lub7rD9Vhb25yhg3NtFqw43g2U3Ws6xGQuLj4QozNdgvpq85Rws5tk",
  "key5": "5NCjaSDSDRvvwGdGNfDKD9qGYLAQk2jmPjHBmc2NmognWLsQc68NG8mHAvvwvwdtkVohr99oqx6JXKmN8xzJVhBh",
  "key6": "5xNs3nkwdWc5dCjoPwGmZX6MSkjDpkusEFPaq6qucBadcCQumDiwtWeEKDdqv9tSK1fNFDuE5J32BFgXrYcYYVzx",
  "key7": "5TCrdLY99zddixi6kZ1reC2bN5BsAdKpw5JxNejXAMapEq9QXekPhMZESrRNAdajuyvyWoRfxvW5r6Rt2RQzUfQ4",
  "key8": "5v2TfG6vp54sNf2CijXmYzGFP58AWkHBPfD6NFGhTJMoi5rUYTkX3z7WNU6yTniAtgvCKCDRVoDb2GnZNek9vJNJ",
  "key9": "4Xyq1CPwtQZXMBaCCiVbjjJPes8EZ6qZN6hPTndSX2wsmwe9W8bTjTub8tazkzT5ZLHRYTtjsogvHeTB3TVhub9Y",
  "key10": "kZct64uCAbfn7uK7rq1fqhd3nQ7SXm8qJTuTt3V53uNWCSFDR94cHd3w7ULwLMzn84BjNvVxp7coh9eTXh8GHmG",
  "key11": "4rHeRYdsGD3VuwriTN8SrKSh5aCTJTzwQNnqeRXP84oFUABNY7PGdLdumPuayhvz5wBBkdRybkUSyCQuPXT6sHAS",
  "key12": "4Qg212zkg7CcDCdYncpnDYnYZtX7yhHGVWpPtyeh1o9wsn1ipg2kkdhqZLdbhRzG9zjPyjsJ9rNc8oKcvi7A1xh5",
  "key13": "35butQ3jMjk1LNCMLFEtDHaKhZ1M1fFbH9Dzdmg187CpAeUUCZuQJXPHvhSKbVxRU7aNtXw6MNRy5kdfcn4w8YPv",
  "key14": "2k4yhKMfThcW32WwzxVj3CUo7GC2sSwK4admzvtb725SYnxhCo6XJc7YwPGBrQhqdSqS2wN4TUfdTyJ6HuruB7gf",
  "key15": "2ph2ozhXAcjYXFQQztXTkjRJhKyYmVmoKEvYMSDtGZcJn72T2DUVt2XVW3f5avFeHqDD8tR5EXUBMfbdz5ScNY7s",
  "key16": "5d8eZ5qB5jzWZpR6Ctf1ZTLBUgjsDi7M9ueXRygPF5bVCBMnTLFhPAvetjN9BruDHyafa2UbZBSURwit17WZU1xS",
  "key17": "67FP4oMdF7t1ijiNdj1pAKdrLXXQpTS1Qef9GdA62vNyDeK3L1ZU6KGumtU16AfaQdQYuZdATWMPji625WMwUhmT",
  "key18": "5o5v6jwnDB1bRZ345qMNJwTAUQKEfzbLidtCKV4UmD9GAPWwAf85e3snmNbX9rvwk5b4CYkweeJ7ERsbc32RQ3ef",
  "key19": "3XbbHRXbEzVaDwz4KA6Z3d37E4HuswFaTZNTfoCLcZX76e8VCZg3c1xBPkn6TBCxkHN7YGnULcCt92159Sw4QV9J",
  "key20": "5vnWUnADQVZsaTCpnAsKerXNivWBEpSGFCV7aq11hjUaFTgo1AN4qnGbd5NypNaDjmEw1Fd1uKmArouhyiNzkmuY",
  "key21": "3CwUHvrTfDmLXSP9qvU8zWptrLcDxNTfvqDkhxRuXncLrtYsEeKeyZGdByLPvbip7G2ffPdokgbn5wafGwRLoqLH",
  "key22": "3FpEmqfMi8tq9rd7T7advg44huiPfgqrfrznypQ73GRaiiGgS6CMAsYy2AZLURtXkMbLU2Wb21LMC7PybMJ6XTzk",
  "key23": "3NARAznr8SZXyPkARkpZsbjEfv2PqrQZDEspxnNKbzuCunRqQBUDgh3kpH5P7HJmM9ygyT3KowoJcMrUgN1e93xe",
  "key24": "3p3WudEn11o3HX7wUV2TT9QKCooxD5GDzsDFH7rU8x7rD5Lmok68eRq73EiqKEXksg9eqfYGzLW6ExZ1xTkvHJvu",
  "key25": "2U7F7ivg4PZDbMy4sHB8Hy4ktL4VJLBXKD39eDJFS4CZEGtf2b514BhPhSCsW9qsK6KxkvDBRwjKVC7vpXQzb7vw",
  "key26": "2nXVg8cr8WvguUMdxfJTo6Qhe9HLpPGCKwku5cuwSXNAG77BvLR7JL9PJZVjqGLu2M8zyr6622ubRVqRbpQtqyCP",
  "key27": "5wCwXsLtSrN1oEnE89iGY2AoVakoaPyh8pp5fP7pDQQNeFK6dAotTGFmT7RmKRQxdZs4Qa9Br6Eda4hofiL6PLnW",
  "key28": "3fNjWVcjcnrrXu9mJf2sh4RoUM1suRRqUZDCJS8H2WW6TMLnsHLMK5vqbr9MzB516bphirZFHGEiEfLsde9E2Luq",
  "key29": "3h1R3yiQWnTkthaWTEevgZPJGSZtRz1uEGzjxtqNrsb4tZGAfq5ogxYwFXzeyKPYaQDp37cF6jAbUiggcAzyMNUT",
  "key30": "5DR5LjvavmxcLMr8VGiyYejfJuA1QftMwNGKBgtiAcjLoank3wu7hUbmjDEvU9F9Uym61W7gpQhGmG2kNSdxUK1g",
  "key31": "HYQVXxSh4rZqgQMtQ8e5THGBq6nPu7vwtEwRkCP53RnkYkb7bb4smNZULxYtmumiJCM6vFxfcidnX63XGiHeQsE",
  "key32": "2u1vBS4xfG1tnVG9XNTfUivZ9uJTMeSmo4dCRTR2bbrMCSnm23WGt5K9PbUzY6RqbtFYHZEf564HyUhgUbja4fRm"
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
