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
    "62PEmVSQ7qttRT76odTC4jcCxBrkKKKbaAdcQsb998cCbM9rAPQefcJU96m385cxhQj6gRZ5XhTjHaUmav2wZTV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s5nZsuYwmYpcTJDK5tmPL9rh8Gxcgs9RToz9ggB7nigY4jyiRujKuf77tiy9t9gZTupXSi5AaqYCWeEF2gLkHQT",
  "key1": "5CgmiDHnpcqEnpQAEUUGmMJgVgvQbFyPvmmHMzNcb9pK6W4pZFHjiAT3mk14bM3ugp3D7uY8W2mgzuftx9oqMJLV",
  "key2": "cjXgAfb3XjBHMoixu1iB7Z6S9mb675tagd4TyRDDFNfz6a6BtMTWYGPsukUF4SrhbiZr7TxVBFE3ykmaKLTxA9f",
  "key3": "5HtAAqzKiuWmWQ8vgN9TssSZRmN9UghGLpzcEnaXYpPURwUxCyQ1SP4sX7xz66XedT68FA9oSTw8r5kVUKocuGY7",
  "key4": "3KQtNJ8S9iw6BS6axeFAoA7ieGUYN2XJkTM2vBbJpVB3FZq35uv992qiDKRZx6dNh5bffCRjzqNe4DG1adC24jPN",
  "key5": "PBi2bacGA67CGVqEZ3Epe1hkEbNEPPRDyhBSGHjgivn1xCdq4yU84HA67LPAnAhUUx8Pz4HV2ijsPNjqrRyC8zn",
  "key6": "4X4MeSwxPWd4J1cYy17jFBLE3zCQBRqv8CovEa371sgfj6pDoTiWosX6p31wstgPArgYwCf6xoYwrr6cA13Aw2d1",
  "key7": "59YNijBFhW8NduTs8Wmdd5gaQM7YnSQKLsdtQuRuThYNvrV771hz5CejZtCiLUpywwSJYMShUgVS1RDFtUkbQZL1",
  "key8": "5sc4hDgDym1LXccp7zUNJpGQnzNhXXKRfAMvDLdiGfyvasGBAfv6WGeL75aKMeLmUFJG7RWSwVdH6XaM3o5bWHpk",
  "key9": "4T9JtkgeqGZDMnj8hAZFWFdBCKAFmcssdGBAhvuVJ9wc1JrMj1WyCvkabY3hniAsfxPAZ9ZYJdY9F4bM4wUJc7nb",
  "key10": "4p7Gk1yNpF7e1dWYhhBenfbkUDj9NJhkBcyeyDTJxscngixeMK4QNfvXM7W8WWAst62pRpw8Qjo2L86WxDQB7dED",
  "key11": "5c21wcRqZm49PJFYqoJmuYb3jxRoamANHSJyiu3ZH4pLVpdi2p6Hxy2cW3ZZih38cXfgZtyqNa99kYxaYKNNEA8h",
  "key12": "rCy76rrjgzKj1MmMKQsDDYGAxwvAth9PTdvRxux9pPA4TkaxqEgQDvhdXnU2BxdXtDafR3GZSbpz78wrY1zSfyU",
  "key13": "3aSvXTTtaVBs6exZpoEtm1orEYom3kJkQmTGJ3bzA7fRRzNhV3UFHLmfukeSoRW2Pp6sxKSknSfKDyKHubMktpWf",
  "key14": "2LpGWDpxbjJHHgwmZxrYQKUDZCaG6SYz4qViTnYmdsKAo44ZJQQ8LiPkQXuVXYwRqVbPy3LdChS8doPMSYwMkRwH",
  "key15": "vTTygBiDAsoyEUQgvDqthj4SjRDoHBnBkBtWkX1Bk891fVveSriWSdbngp5MWLoaruPS757bVw8Uy6UhMXdtzpV",
  "key16": "459XvN1eLqAPkUHTGxMpLNDxSC9jm5nQeKw47WwDp2RS1emQWcRLWVNgVHJykp7RdsiqDy9Y23N2XXrdU3Va9fv1",
  "key17": "5WEqjQh1se43ToJbm4E7mN1ryxGDdjWi59gRabh4aydPesboHFhYTUrBaG22AUnBuG4rMhDxFJu6J2u7vpFum3jv",
  "key18": "2yc1Fy8ymh9HSjPC9N12bPpb2bpCT9kWjknesKow7fWYiiZh5aKhnQEiUyopVZYu2SsdYA1cKqcwbrYQ8fk4dtem",
  "key19": "3ikFnyNLUERREKAip6FaaWeyrpzFTei6ZrWiE9Dxsv6VGv32rw4dxB9as7yFKBJJTnBPWYPum8ycTgUcaUBMam7K",
  "key20": "BT694FJkUjXM9uPnDuZshqhi3CfnAMzXx7wFgJMMamhCgT7pSZLUoyh2WW836wndHyHhRuficKZgHtA1KD3cA6J",
  "key21": "3XZGgmfmnBnafm36PnABvmdtozC5pvyJXpkAWXH475D4REyzFEeYGBGxBEtqALeT8MBdJcvpxmNnYxWAcWYPnHm7",
  "key22": "3VP7avkK1mDszEKKLYhFjBkLKd1hn4fbMRNFq8J2KbWfWE1gmPuxF4M4SPP2rt7tbn3ajfgjNCFM7ihPFuAjDRFP",
  "key23": "2g32GHZUECekgbUk8RSoZZZ6JjHESX9zbuSPhbaSoxRn3sJSRQsr5uSb5iT8ha7HgcY37LiXtLNicrktcPowxX9H",
  "key24": "feqZNRThkviHhk3XUHFLzaF4cBZpYSzrb2LU8KGapnTmghnyoC3YKK6A1K5GzjUtjsAyjb1ozg85yzV2LVUMSng",
  "key25": "rrdFZ7kVResGfBPyu7JJpkiedppCyGdXJ58mczUnzkhq9vamyQ9nNK6jTDV5CBpo5mZvGjn7LaUfrqjK1RnkXMe",
  "key26": "3aed2uovvtAsL8z4Fues6bauAhTsXSCwHtyoqnTAjGvZa8yp4eKejEAJX76FXWZee4DMNiy6nwc4iot82jfz9jV9",
  "key27": "KxPhNzRfYH3pJsDCXtKmkPMiBfXkZm6tFyxfPHACQTKEdP7zHfqdSEDxYphH3HJax923kBjKqzRHduAjhP2Dtb6",
  "key28": "44gfmT1J65QXCahm9PSpNb5MpCZhxtYHdxXoWhCpDZYQjs7y4LyM48FxoZ7r82eYMqnoBZZRnsqbz1bECD21AaYD",
  "key29": "4hXFFkArcv1W8c4w2RApQW4rKvgUuxDebkhsKx187tEK5yGVSmXdhKEQtAZMTVM3tbqczv81Uuikc9KMYM3V71ko",
  "key30": "LrUHaMDb5LxZHSmDCjYeByFux78YRU8MS8kjZVNvobYDNo2QkyQZixgersdNVNR6Puq6DUYytf1oxFhDKhXombd",
  "key31": "3hQxLtFeEgQdqofhGHwHnjj9AjFfY74PW2BPZJu6YhLTpF3VjRPywNm8AZ46yRTxcgcFsFSpvxqYh8AvmASazayL",
  "key32": "48e1AkNCQWQk1BXWyYM55kkDFgj4DPsqrfCoCkd6zmbprJhdCF5f7DSvHTTMcnE6HQVuQSrHwbiV6Mode87n1KVg",
  "key33": "4HLy2PiVkoPEQqx8hSimPAhRTV3mAAvx2Y39V6qeVooD8GJz2r62Lbw2jvAedknxnk1VMGZgne1i8nfpE9DrgQH2"
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
