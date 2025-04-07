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
    "5bTZwTyd1bwoyU3xNacTAE9VxXqQ8emq6bVdpi7Eb5fZYv283diJq7Jarx8BTc14fk2aeQZ9ar5qkes4D7ZCgwCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GvRtVLGY6oRS3caQUX7QD3zix9iRrGbH679UsvtsMAVHNQkooBe5K5Des84zoU86eYJbkCqP1kEt4P4F4doysH6",
  "key1": "5wt3tnkF16kKgV4JwQKSB52qKDWwWmqNt2oQryJKzTrnJ8Q5kc9ffUL9YVwxFVUuUecKrbvvUkqHzz7Q8rQn4m7g",
  "key2": "S2DqWkZHkv98qwTcomER4zZa7cK8yN4JcW6JzfFnJFpkVvz9WQ2J3H7oBE1U2JsZ9MiYYFYdL9uJJCwU4jUo4vs",
  "key3": "cA1KKZZWjuEtFdGh9GGqDH4D9tLszTzJMNay6n1EAy56aPH7rNqp2yn7n4BFkmCtpexyCvvieuTGtUnUrrmHR7s",
  "key4": "2UyF9LvoFnXsZEDocqZz4qW9zDPpL3vawp1Ec6qXvxEaftVkkZx92vvQrQwZmFrxK61HeR9CJLtr63FoGHyaKQXy",
  "key5": "5uQvMNh4m7TtYCykt1K1K5cdPmbNDhHj5JKyaBZpY6Gd4q8K8p9Kqup6s2Z86wUrDFQJVjRNBZgFpnkYFcb1wVuq",
  "key6": "TtDjU2y7MRZM21QWMyFgBfbVv7NB7BS1ndez85cbjQwX4sPXxvQKHXb3bG8XWX1Bbs7rsb26mHrdW89nSb8dXFg",
  "key7": "3fdqckkHNnzs46rE8K58pKG4qGqopsr7fkjCkpQFhBETUQ1vtz3CaQEVpRRi14LyVMHvnY745SDBmpVvyD38xTk1",
  "key8": "2g3YVGzMjNTZ3fhxwQWZCf4j5EiNGRvmG6JUu1U1trWPVuGaNziGJsWz4V8nMA4rqZFoEUtZmBabz7QiD5yQNKj3",
  "key9": "2cijqknCrxZ2yT4YX1zbP9STRTH39SnACyLXkxtqrpsbmZAGEgNXVecrsr6pwo5RrFHijJamyHawuNQd9nWVZymF",
  "key10": "3fi8goJZEzuU7FuKRsZMw5k1BVKnhkccDafv2sJU7szF1ZYCiVzDcZY8TBTVDLNXSm5CA7US5E7UWXoRpKpGgosR",
  "key11": "5mq6xYJaAgLxkwGsrAGdbZKABj6oXYZca1kGLQvcTxYRQWF6ojZ9Fgupqw9HKKMJXk5bX1QBuTzuMeUZhzHswztg",
  "key12": "3UVdf3bcF5votMYa3ZHKou4RAKUwxPGatUT4AeXgMfniW4XoyZwb2Z3hJQhJdpQra2kipkTqhkvKKV7e7Rt9B6wX",
  "key13": "X7T8xJXB8F6fjadorekbcmixgcaiSNzLVZTi3hXpBXcKpKSvFRbC4b5duAnpn25rCv7NBfCbNnSuMjqggJasbQ1",
  "key14": "2SGMWZ7qPkpdnFv2VXE7SFUjwGdRdvpprBhDGaG7EZNnFBcuYQBknw6RMUr1zaADGy5oyfSjF74AHhbQaWjFtzVA",
  "key15": "5g7GbvmJe9U56zjxLcenCpz7yPo18b9AzsKdyw7R4EaoybGePJYUt5DpCCHfdCViT49ZsfWPZPKC2W3dd1Ct17D6",
  "key16": "4Z1WKh1zUrToRGLorWzxshKHCBLtBPPyv85zDHGtzZqhd665fnHgeeCjxYnvC7vetWZJHBzdHvAekyzPjq28LRWR",
  "key17": "2p4JhqrrMo7QvuZQo7aputaYAooUYMUb21heiVH2ZiJ5GPFCYwuGLKgjVSXNT6Ho5dpJyagD8NkYcgdSH9rGjsZo",
  "key18": "4un5F8dnLdmoNeQg1g8pKrd7EDHVcKgNUqqMqkXuLquTJDRGCuJ3kGqg54JaUke8orUAqiSSRtwaoF5f2BEaoRBC",
  "key19": "5LVNbz3wE6rNWPCjt8CsAWztnxSREwJBDJe3fYdzAZFEhjPRZokgAvTWVvX3yNR7oLpCSokV5J8Z6Xw3VVy3AFDL",
  "key20": "43K629JCtqTCJvLNvzcJz3vhT1SPoeY5onmWKLXgesYK6R1MqdXPG74zSFheK3DCYt2y1nScSgaVajYCXqjHF9nT",
  "key21": "3aPTVQo14YvS7KG8cWNfFKx8qzWw1CZ1qb4yUiuVAR8uAco1cdznZhFHRufoHDyEqKiPrV5SaLy1xHBK8ZUx2wPL",
  "key22": "wrBA7XioLHpwf5v51piGHzTqtezS7eDSZBrMyLYVeRTWpzmcnG9B5dSP1EMZdhHVnvpWdBg6by3dUqYTNQEni4N",
  "key23": "59kaiUuGHijeuTLcqDW6Jatha2tsVwrdLDmQAvm6h5PQ7ACwmykC1jWxASVN7yUHhZTgXRq8uL1RBPMrSUP6jgXz",
  "key24": "5StDzGwq7L6LrKsGb3e8CmYyWpBuYCY87ipTx2QRPgFCDUFKsV2wbUzspPyUFZsVZB2kDn6dyXR3TVdVbD8jJehd",
  "key25": "4vfiqfnpoSFwSMDd4JqSrYcSpuAcX6deVzWFP59dNQ5mzCZe4v9JByK7o3DUeJhtKQ8FbnfwGm8MEwE7M8nmWWDz",
  "key26": "4H2TUg689Ebvx6F8KpaNvAqqaH7RU4Rp8MgzS4oA1tx88QfmuRQCowo8XXNuq7gL4pTPDLNGV1qsTkhXDtp2PB7i",
  "key27": "5yfCrrZQhmpVc5cNmnfqHZhCns5htHae11pJfkWCTyANW9ufbjCaKQXyvN424mtsU7SRG31Rk5GoAubegGAij9Gc",
  "key28": "4GeA85uZGa9dQ5D2f2ANTCFKp7nJ6UNj56CzAsH1bo5We26iPKYx135cd6ynqRnne9BgzukfTibdULYvRfMrEoMc",
  "key29": "4CGu4gQ7nJ8mTtc6BJFsBo4qp8wg54YU2TVc1qp1D11Yb671cC1RLoM1pKMigFHuCwcMTR7tbJJe5z14JUHhp1TC",
  "key30": "55MmcbNyxAmHTxTbFP79DXPF4wRRRMvVv1j9bUQNpdogRxFpShJpZMrZGjp6vrVQA1iWpJQeEEeK2TuxAxfQq4c4",
  "key31": "5c4ShaFE2eQKFaVSTAGkvipq5mWmf1RvRdECnvzctMKtA5KcP92RKFHckWau6J2jxt1kUkfG3VyB6xqniojDW8mw",
  "key32": "4AJjSPVjHgq2DBb2j5PkM6zY5zNteQCNPuVYXXixctzQaxy1ZyzAzZ5hcAiE4Fe8djZum5F68jDJTMheF9FVihhn",
  "key33": "2JLnDH3RYS59ifJ6vmAL2tny4yAg9NCPSzS4fQ4NF1t9xgyRGwsUYoVpmk9BjNVmUp3ZgZD17G8gAYm7zrD8RrCy",
  "key34": "2HdCUHLJcn7s82yxbsiJRKQRag3pNtRqDD7H7fZ2eEt38B71mGk9SvyNw8Yn1mmVCYgwstDDA3RNqgpCjReECqnf",
  "key35": "45xxyhht9mTwKEAMgxwGr8uYRpFCjT2auJukKow5o8ZC4zGk1k7bT4MexMfbApEpSmCU9k9QiQYChn7a12W4LevC",
  "key36": "5McaqU57chzXzQwfLa3xLAYcKDxHXhocsY6GqHrxwXCiJ8y1t1SQ8o3WPvRqQwkFyMioA1pyAhjjeV8ffp76feht",
  "key37": "6SV4YL95mgBPvN5TgnTfWuS9bxQCWCzD63gVuh1otVQKgGCEDxMVQjbny66zcMPtGGSzYrBJRZc26RSCDcAwrJs",
  "key38": "3zLaiteepLK9bdeGCWWBgoiMZWjzgfHQMqvVgDVz3FaYnomBrKkx87s5GC57w6aoWnrpckFsyHKXFShkiDvvnXpw",
  "key39": "2mYVKffbnmZNun3iNrpYiyNeK5HxqqhV4uMGuGgeqfPWuQ1xnZ3q3ZnVjS4eSe6TzhvL3m1uFXGdexfEtRMptqLx",
  "key40": "3tJFod5FLhnQpQX9UR3RerAt8FsMRNrbC11AAgRz3TK1tdFWS1ufP8y6TCc44kNX2SXtxAC32VPRvrEbWGct2qYx",
  "key41": "66sLUiJanTxXzSdHygeUUjWXVEXprxXXm3oPwjY2fvMGuS8vdpbDPktLJnYcmnDvQ5wBriET4eYghwjUDoZe7XvJ",
  "key42": "21DF1tF9eSiHoK1YUhc7gHBa83ujW83dEtiok3vGdDSzaJttdXpMVLWtp91HdfyLdibBuxMCvECWQ3qtz9LuWnYu",
  "key43": "3VnMLtS7ThF7ns7HMjqkCK9Vrkf8757sYfw4G1GeZ46TLA2WH7bEUeq5yZCXh45pKK4FAr4uM7pVZDTvaZ25HfZo",
  "key44": "4ZEfbSVz7gkXFv1mFLRhf3BHatgixkStpD457HZYuHmgfkCg8YRMuMTAD8oK6JXYMTEve6hiZ1LBLStwr3Xkw8L8"
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
