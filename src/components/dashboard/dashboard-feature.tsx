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
    "5M7296iEooHbAXi2wmSF2aeEv2wSAAUkhwCgmh2QebmSW48v6ydxfdq5YjU8PJ9k1wwmnbyFAVmU2X8zi4r73BZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JMVGz2n23tKgXN6pD9gtbDNJz449MDBcQ1WXnzg86X194vEKatN8sFBEKykqfvBnPAHQDv1VhTp5AurZ5o1kdoN",
  "key1": "4MWE6vvQRDvnRrCUGshNugZS2Myjd2njTgM8HperjjZPB7rzw2Zwhe7gFMkWVtuXb6sHoUHysGkuyRA3VzWHGius",
  "key2": "2SZDk1fQURfeevVbpvDccXyuAxfqiZqJ4ihR2DKbqWaoGZXrH4cTx2rRkV7cF6fhr5aXfFRzeANBq48Jxj1uPdkA",
  "key3": "43zu47xKvpCcJUWKFrz9oRovvJqsiNoBc413kVjMqNDF12BRHB7pG56P6gSaFhRsPwfBBfQx41Y7Viv3E5w2D3Ye",
  "key4": "4ihVG6bzwGQwf6bMQBkKKi5bJiws4Uuytuy26cRDgNr8dRRzCja2QKU7NJzdi232u4J4swqePTbCzkuviWjMeW4K",
  "key5": "2rbh6ipnFYtu5YBpUrmiYcrMkpJ86Y3cELP9e41YszJHpSHQNHBcAqNMUu3aNAkf3CMYeQ27dn8WA1mvkmhXW7bX",
  "key6": "5Lb4AJdFY3z6twBnCwLUkiy1vGtLRhZuj8VsBGVmtxYTeNXhDrJjsGBgXT6wxHkh4vECaGp7A5r6hEWsVKEK5HwL",
  "key7": "46rDQN92UnCU5iBfR8YuLtW1zMJFuyqZxzEFKi2gXo931RUjz5fqjEuwBQWFvEMSc1R7CjZ5W2qz5KDAxtiWPuLu",
  "key8": "54oHGtTHDLkAt7QUZvSJk23fv4Yoe66wwJdk4jaNNPjVVFnX4dw5VSs5HVrtdGbBWFT8vqHgibkq9naJnCxnTWvY",
  "key9": "2azjXXEv9EsHw6aGbns2aa5Tj9SL2WJ3sK7ewRckFwywXDkHWa1BqgW6ifhB3Kwci4D98EjSmHJY5oJpwEav1V8S",
  "key10": "3zTauDLD1U1YTp3rtrffGhi6VsDMQMsS9emaiPdYrT9nfN8zUWuGzDSoZeEib3hLEcjctDMhCyYKgHdDDoFTuHdz",
  "key11": "2AsTGXeg521cpeeHa91o6e7VQnDWsGuXnzCZmM4mPHEkucoKFehWnHA7ezLTsJEuTNzG1ptZz59PUehK85qTdcvi",
  "key12": "28hkP8uUzbVUZhyi19TKnEcq8o5REMSVWVFStddfX1WvGbcCLmJZvsa5t19vZhBwKiofizr45pA2tFrZ1iGCiKLs",
  "key13": "2gP6zUwEzjJRw8e8z7FWiaKXreQmpSW2vteMWg4yGiw4JphWzusRRi8KnpDVGsASMbQuEfyJsV8eBxUr6NfeG3ZX",
  "key14": "KXSZzLaYMYNNZUC8WKa3jEopVqanYgipK3KEbWHDs9dYBXXTK62CujjyBfePTL4AcZFthhywv6o4kw2TLiZ4nT7",
  "key15": "2f3hTeYirNGGxqR3c5xoKfxGxqWn6j7uH8CG1JFNU73BNDH3N9babHgrViWCNaMb8XEVYfoUdVv212DiXUWfktiV",
  "key16": "4rR1GLhaYDNSJymKhgDPhfby1vJ7brsg7iS4KJDTDG2dVEGjiNiDgoqZrBx3cVZgG8A4byNwSTg6mh3nhUJCeHAC",
  "key17": "3omkD3kuQdyCPRa4AgTfGzBfERkw1BqNospEHPyMZp61J1R9J6vgU53ndJPrMFHGaX1v9hQgVDzyKwVcKRDfWs2z",
  "key18": "3Y3mXv3JJnTJvzeXZDmNTRnMPgVPTD2AeCPFhuMKqbH2Ha73GiGvtNLUSdRRLjrL9JwmCBJ69suYGWByKbBJUCAk",
  "key19": "4CN1r36tdZwNrysatdA7BC8hUoAG4A5CCp8Bxz4PZ1rRPSQA2URcSyGnWcckJ6V9M6xVJW5zZQnrywnSkHg1MHJV",
  "key20": "3K4oEke2AjeB9CS9F72AV11kfEFwp3wgXgJWXd6KydypDYYWJTnNK9c4TqnzVimEkUojqcDWVvdfGuBb9gHPqZuW",
  "key21": "27BsgfwULmHpGJhfVNtjGes8Wzp7S8WNS1y4yeAZXBpX1QqrZMBjiK8kN2RLKtN5zBb1KUDH63maGcvjmWx9F3kd",
  "key22": "hwwSGcTNNXBdft4mG4BFwAjGQRZCHnSRDYZGbwrjU6qJMSWEqsHT6kQHbBojUTDoxBC1T1XA5nwPAt1pueuhLfr",
  "key23": "5UNMHDee95b6jPVaLRpN2DRTbru6ffYD8XAtBAT8cunFRbomJJFB9VKJbNRRMgFrKv1H85tdFRes4QJCiQr1Kz2b",
  "key24": "8xQifdtUUc7KUnnyGciG2hX1hXPSZGqSpuFke1gLr6MGEVdLLQCwrj5cfRsScx5Cjowpqh6KXe8m8SAX3UXq3Hh",
  "key25": "4d9QuCNqmiEqcWDw1D6HS5idHjC3DqN2jAeboUHPuEk5Ve2xtJbwdTCH5nHGPHHUUqtfB4YM1prkTZf3BvEfx3TZ",
  "key26": "5tWkArKzEs1rokwR1vZeU5PUn7pVYhngLoPJqcqCc9GdrCs5zp4gSTjBDZUi6hxFJHvjFGmAYhEGwcthTHybWR95",
  "key27": "3XHnZJKPCb4JxgrrqtUYimsj5oavDjR5f2g5dMwBRuFoEDF5DDaryWzM1wbZ8eBCoYFaM1rXJ8UePtayvsyM1PM9",
  "key28": "3D3ACHZcTajJsSacmtb45YrkhmtAW4kNCwDKBQiBmRiBoVwtfTFFE2QhULpqc5fgxjT1UDXtNBNgb4Bsuoed8L9",
  "key29": "5wQdHNxhNtcf5Y9TRnqinuXPfLPZ5DmehYAvntSxro5GJLq4w1Pr2VtJSQSn8q1kva3tXoMQMssx5r9YrStnR4Z1",
  "key30": "33rayTM16KQZ5yqpbcT9rH34wPPBUnLqt1p4kRckeSAEGCbVqkHcn6C4G9CbRfaHde5RB6Z9gbGo8Z6gKyRL6NAE",
  "key31": "3JYQXoTjtJfxxA7zNummxJVHPFswUmNK4WAtk1eis4yurXyXa7ZKnq779wADBmV3q9XZvxFiLdudzjQXoYcr2ayd",
  "key32": "DAMzVdo2EzqziRtm6vWfNyi1Crj53SNMDXKLshTGfJiQkwWU3SLW85wwFZv1t38eizia7yCW1vgkFgzkyDZyWtu",
  "key33": "4xSkKyKFV55qsrbRcyEGJ2zdRb7cCierVHrKHdJjvhvdfCP4QuwJbVYNiDzXyjaXrcnH1tTpHesCSp8e6ifZLRTc",
  "key34": "4Lj6g5WRjRnwYjmhHsZXWFDZF2yMrJYLFH9to6N6kGTVfSMWbQB6kLuFDv6rEzoM75PmiHsRqR77Hg1mGv7TnK9P",
  "key35": "2uf9eUJNQzSzDtfzta1LTBL3PiReYfPRtVByqU1oQ6UJkYPUVvXjQgv3UiDrMV132pMwJFi4EcDktFNHLiMv86t6",
  "key36": "3KcVWFZttoWKasfdiSsVAWSXXu69cUVWvzRgAYwkAdW3H4hHLrfJapyp3eyKVZTTqoyxTRzpjJ4zQppwFFXzzcPM",
  "key37": "3WSUtQksKmVeYAkGMeYCYf23wr6f24KVs2KrWLCrKCmeWWFVSNERQPL9szX6CUwx9ko8d2mzaNroovN2vjKRMWkS",
  "key38": "4bJBczhF4w9MYVkFrhfdf5xFfUk4uRxvepwG5F9hyZxuLrZPYpEzMcJyp7MDB5TrZykrE9Xj8x76csdhohzUYhYG",
  "key39": "mb2JAdZM5pk2RL5bwyZTom2gco1ZMR7HJEToGK18afo1u1jc2qFBAbzVuJcu2TdkgXdKtXkrCr3EkZJSBjegCdR",
  "key40": "2yEzRCNCJB62bqUBn3cSivbrv7PngVJwS28PAE6T1Zz8X3H8C5bU4TB8NV9vDDtiYV1NqrR2MWjfEkUsEJPkjG6i",
  "key41": "3xxMd8XmEojoF9tBzmTNW1G9DTNjtdX3igUyBRQYVDmWaphPiQQ4GXgD6NiwGFhzeXiqFwHeUzxo1rFc7nQAV8SS",
  "key42": "3cX9iczGxQPEtMNaKgd9YV8ZyRJdVdgGRQuXrYX6T7jtGVgiyxZ7u9zcaAbebHHfgiNSBZjTtLvbUGFyv8V4JGfU",
  "key43": "2D6Ed7NFYvyzgM7qUnb3iiNw5zo1unfvvK7HdxxEDjt9gCniqj9yTcZtitQquX1EuhvpgJpFGD3FGym2qq1tt5XE",
  "key44": "5Apq6hqJKfJunuibbzHJofZ9KdCcqwkjanJNq8mfsdSKa1LVkv5dJip8v6UwP6j57CgrHcrkENNnAuULSXgVY8GW",
  "key45": "43wTKqQde11Kax6ih2e2zbwTh74qYyEbvPGQi5JU5ibAeq3PMJDcJfBbJDidvUmFesQepaKkWPuN7SRNhr1VBrh4",
  "key46": "2XEA8Z4dMCkdF8VxJ5c1FXdvsZ6aTBhTfGykus78vsi4zCJiRTd4bjo1WhuRyEfngEdz3N4aoW62rCTAefyAdLPV"
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
