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
    "57uE3y8BxN7sXbuH6QTbDrEXbDa4es1tqgN9iq8LPeYq6WBaY9MbXG5FJMHxbYmAsSS8wTJ7ESD2kZoZRwk4Qmv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h67GAZi9occUXpQS9FeWuJX46T623j29udmRXSdeFTiLVi441ytGsXDV1eLbYcpwZVqbrkYab9a7fVi8ZvxcHUQ",
  "key1": "3K46nKwoX1KL7zheto9ZboiCW9kwsssoDBTSq2XNE5ZNFt6DUzpVEVsmwnTzjg7bTTRiiimtduwe8rwdsauo4wxa",
  "key2": "2mrsXvKzxsnAfgL7YyRQV3sosrXZrUVd8BRnfBvYQ9tnaSVQWc7FKfHzkSzuMEAr85TzCimZR2zZoHmYo8Z269rD",
  "key3": "24mfhLy2iUvhtXNRRrQawTxEsQ6BCwiNvC4sM1b6WNvPgc1SYNo8PLPRgPUZ176Am1NBa85Md6rqxvSDf5xSXDkf",
  "key4": "37bxrZYMA48nL6mNgSV3HQLM5ECHSJidr891ie6i6eYjjXvzTYbvKNm4G6ECpKcdZcWosPoEHhQUMqoDTQGSenSB",
  "key5": "QzMM5xFzdS1drdt5CmMVbG4tGn4PHtdFAeLEu5WEoPyp6fuGbLTEzBwXMfkUqiJa2PA2fzF7gKqabawciHAHbaY",
  "key6": "3rz373BUMUZawcMC8ff7RVw3HBxMRq7yR4xEYuJS3tMwCefof8GYfJiFbM4c6BCY3kdSXCV1Z86sv8rLUA5TjpPd",
  "key7": "4LhhidrzfadWSXq2mJhfaVvzjyiaC48dAk46dQXQcXMggLvikSzxtvSSeZatyeX7HKvmkj67i9nVdwc8R33Pu9EQ",
  "key8": "5K7pyo3MMtjV86HB96FykzjwtoWejS2ZZ6GYCmv7bw4rvJybkEEbEEJSRyvi5cvbmpj5qTWN8ZJvKznuhvS6y4LF",
  "key9": "2QoE89q6ydnWuhW7tgPz1gpb4XSjEjEy9ZGQzBcu99b7HCkbFU5X2aDSuUSrU1hnhW2TYsCKcoMEHbaRqs3gfPmF",
  "key10": "5DWtPWa6RKQX3uNpbCf8YYqfZ4Pe5DCVa41SRXSSuCsHbZ7gqjB7vduisCLz7tnaxp2zCqUcbnQdVkdwvuPRKrny",
  "key11": "22h8BqjaQ1wjUM3b921cMUwjQqmG5QP5aQzkt4Eb9jxZXPSF4Q9LpMJqKcYX317uitxyQUC6FyMq9QV1Gqny3faz",
  "key12": "48LiYVgqW7qeB29SVztzmNSaDZMegUuW9jiYXz6Xr6JwohLBDPcm1BYfcXG2cPerfs8EWErLCQ9XqcUK67Yq1qZg",
  "key13": "38gW2E6aGfskM3H7hVSPLjUr4pREpvpu3xWA1VwpFf6RV7CWt6VAmtovCJt6xmB8yetZ8sikjeuY6XMYRpccudE3",
  "key14": "34d4TNF53Fzddur14orEg7fCGnTSg3fPtHLLZ68VbmhZrJrnQyAKBGPxVq2oNhLwRjPEe43erViotTt3unE2LTQe",
  "key15": "5oPe1vKQKcZ9NBTsuX127N2TEs6X3dHJBzhBo62L5QpehsJ7S9yQPDFjF4huD3TjJgcM7rbpjij37uReqUXfX1Au",
  "key16": "3zSgXZY3ijHjN74Sw6Qt8CqihSom4FKhq38UxNqySWoq6CTUNmgegFbeM3DE9Uu85APdiDjq29SBMkV1SQmEg6vE",
  "key17": "4JL8pHHGGbNRY6mxxk41ELgBmY9e138Gd7ouBeS6RmAW4NsXTaji8QLrvTx9ZhtdvnhCGNEwoiuKA7u7hud6tHED",
  "key18": "54yH3fgVwuL5JaeY2H8qE719sazxn94rL9M2H8Bp2yVdYZoBvcAThYJeNNQo2xWxiruoTcbtBvxGeXJL4ZJyKGej",
  "key19": "BT2abqqs9zCTMM9KW1yKSUj6XyMeErtCtXbK5YtjUdr8vYyKwT9BH1fsggFHKw4jpiT6g2duaWnvb2BHzaMVyih",
  "key20": "2MKND7XwxacBUx75pHeXrLy5DWx2J5egkntSfzTM1SLf1K3PAEythK7KMHsb37dQHSdmKnXXsrY4DCMEJPDZqyP9",
  "key21": "3nYW2VBHTDu7BebAULHoqYwZDAxyk1QRDeF1cEi5FLEEwu8cGKbu3p4Qvk122vJZDnf1WttdcUMp7GgoP3zVdTtH",
  "key22": "2274wNTNy345uV7Xhm8ZQiWHxdjxFSSPXfPv9uu739g5KE8chLqNqZMRHppJuk1jx3KxtJnmVSiVXGeVUF796oMj",
  "key23": "aiSraerxYe9LNu5LHgsa5jMuqxwUwrJrwV9RuKCppccTZwR2iSTpX36i8jwQaKwdBx4TsDbWMszY5VMWRsmio2Z",
  "key24": "3Kg9KpQPrq9WNYLc8FV76GXEAFCVr8fFfegvMWE2HQcekLsnabpQwuKnpTuydQmkuXSxtAykdxXaePZxQd3VLXnx",
  "key25": "TDTGhjLQ7vGHJ6ep78wB8ffckVsZeXVhW8HEqdWsGTEwhMoLdPEB1hxcbJbLkiMNto41KsyuDTjJwzicyoQK1f8",
  "key26": "2JsvAhCfi66od8CMPDpgixhTkYpwt7MscuuaUd1jY2KofDJWLk3ypHGJ713hvi5FxKXajzthojj7MGid7JUqvnAg",
  "key27": "3HxpZPYka12NuMGmevBzT2WXygJn1NS8Ag1LEhNRS8cyxHVqyyuAYxN2ThKDeDpZ8i7wy3NGfKHRuM8UT8qN5p11",
  "key28": "WXXbbsHwfyvaQxwL4kHSuZ4WkosNMPjpE6DcGgmQ2UbsFFDUNBq85GG93BNeXY95vqavhodwDY4fDtbE4CoxBHA",
  "key29": "xhruRsZhuYimBRhhAkNGtQLfgjaPZwX9Qg8rJpvBPBMbwEPZfLeSXwtieN2psT4h47vMiHosoTqeRxADR9yKiav",
  "key30": "2XTWUQ1QCtYJGi7WopJ4vExg8omEoefyF8ZdUZzT4Bk4uyQeA9EB5CXV4Lu58KfJZQfBe1ShnqtbxNVQ6PbnxSrQ",
  "key31": "4Levfn8N6gCEvgwsWTScdmu1jp2YkmybqLevPdZ7of2jqyRLGuaFKj88YgHxG48XG9G1xkJhoFmi88yYo3cZQ1Ud",
  "key32": "3ZfYWXSKuKnc9fT6nUe3LLvbUFGTznsmE7AxReuDQHrkfRbXnfHP27iR7epyk7MkNaNvx21QAVYmqSBstw7NJcbo",
  "key33": "62fchBnj6gVMwHQ3eHNh9dS8NPbB88qA43guFvAHDFmuBHN7bZKvt6SCj8FzPQcPYXYBENmYdGau3bTstk3bXnrj",
  "key34": "2qRrPGkfwiYJMMMme77yesULfCQJhvyc3DgzKer639TPsH2eNqQDKKym9ppe48e1tNxwPFmrZSpRSw5JBnZNgiQ8",
  "key35": "tE56FgScCd3w172w7cyT5pVRvgSydp16ZqC3zWY8yBsPR3VUbk3K7sEm5szJ2K9JywrKLHGaSFW2GhozkBuFMmW",
  "key36": "JyHNzKYw4KCfDatMMfwjNjnTkJVtEKW8PRrKuRK53uN134YYuBhnZJAjhwBWVrx9HrYVGbEFFXeTKaiJg34vVUo",
  "key37": "2xJ1i23kYzLNNZhKDKRHNiNeQMfNRznL25qxB5WEkN5qbjhSaUoGnbNF4qzdUAknwH8SU8YnXrbQvLHPaMPz6X3R",
  "key38": "5yNRWNhJrTU4637E8rfq7Hc2AYJZqz9eWparDF3ZvwdYTcYzsMX82JXLmpPRsy37Kmw4GgEM9zyeWfbBYUzVfiqr",
  "key39": "28EMvsT9xioQ3BZYLfbyBgZzsPcTGfQzKZBsCQwT33CfapVu4mEjsybAChCYaKs3yGu88kDC7PMgrg6Hgno5UfsJ"
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
