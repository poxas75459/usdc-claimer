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
    "2xwpFbtJMeJ7p3JRsn6VT949tgL8ejyspXigVkD35dLnZc2dNKsUQ14afvJrYJenwfcfS3GhQvSQ9MxSQCEkwKCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ER9mQDVbCzN9KswkD3sLQtomEpcDqmL9527zP8NtkkQ7BJHnkTKn717g1trnL5cpxLuBVdQA9jWCqhT7hFRQ84",
  "key1": "4AibMz8SMRy8xao3WLufCLyJuoZhHD23o6zQTGy5LLr183qAAQSh1p35Hj5Z4WpabDz6N6YQBQnsyKdmYuMQq5m",
  "key2": "Q3pkRLZioep9RWsQQe2Ht6Lkq3xMYgkhXPEx7A6xR3sSuyahbNvsFjfrgg18okPPdCqsBcbnmWR5XXF5CUwzNkJ",
  "key3": "4d9VTF6QXobSKJRX3KnY4BaoMUJKU5sRjUEaqn8nkxmGYM46UVjrVgddAUQqDW7pGz717Cqyi2D9KoG6b86Lo7hH",
  "key4": "58yX41W7k6TP8eASwZUcs3AtdsCqob6552jsWtTn1NGMbfzanKgawppfuyCF3SL9ysG51iQw7BURgWLEtVMub4v",
  "key5": "3JDHJ8J2Sz2jHB5DP8NrNWy46J4akzVY7wuZSxsQTLwnx1YYybCatjmkfvX929yxJ4XzLdE5vhLy13SaDW74WCmD",
  "key6": "3UTHPZ9MqCH6hqBuW4ZKodX4dn4DqXk897M6M2Cq2qEx2kkdezAFqv7jDER2cg8F7i8Msq9mA2YJsc2mNMkBKdL4",
  "key7": "3cMQ25ZRKyHpxNnaUdfGrfD1U5iWnRe6ZmHWfkPaGbCgtaHb6MQJW47KQcyRnSPoeekiXkAXbCBFgtqSBXzDhaqw",
  "key8": "MH8PxHjY5MMowrKtdnUdatgE1eA3W8r6C3SPEFoqN47L1XPv3q92zCHMLkBXtXjjvEW2YfHycJJHfPp6o9BNJK5",
  "key9": "4MkCYCQCgE3hG6sdUDhgmfvGCxggWr8yJsPKyPi3MVPhNEEN3dyRorqbRErqEX4vk9XCHP583ApjBkk7aK5gsu1v",
  "key10": "3BAW7n3UV2hAY7LYnZBUqvGtG1gXRFXGA3tRvFSEbnWktrZgUPgfSHRuytifbP3myoNLVsqN8y9tEFq3FnysXVMt",
  "key11": "5m8oEyaSTfXsbQJb5FoxTya7ihnvYLS8Rn86cSnuqAvSXG8YDQZzUXbTMabgLjuSM4ungdJx4QintwebdtW91JPh",
  "key12": "3dt28FvteTmm7Wr1AaWUKUXNV8wd3Js31LfHVwUcaR9xey49pAKyZhH1FwGgXzKo8jVecYx4unN8U1s9cp2fmHQW",
  "key13": "MfymnPB6gshbKnimPTyCegNXe7yxjZChBm8wZnu9F7ciRM1pf47Sbb9WHvU3s4d825Sevfvwyc5RWyjVCMECpSR",
  "key14": "2Frqid89NZBXkCsV9JT41y7Pawu17sZiuB6wMR1zxTtepqdRDHvWf3swcHr97Eiih8zRmwwPTtVn9JffM45gJLm2",
  "key15": "5ZPGkygmVXiTWmTWbJKeV5wrCheHRXujhvQ3DL3MHXPUfsfeVPhJ1pu5UKrowzavkKtZdHpzUk3nNvW3DvcPz4kV",
  "key16": "5vSNn81odvpPJqovsHd6TV7Amh11mkywzfujWKqxiL8ZaKa7pzTYiLJBC3VbGJoYukH2ayaAERdnqD6mR1L4e5Q8",
  "key17": "2ce6p8oZaR3vuHyr5PC7QrZ46e5GhoX2EK3E1o6w5GJA2x1RQrMcXmUVBcw9DthZ1G9u29MqT8TNTeynfnzMufDF",
  "key18": "625xNPxfQWL9pEkXEnKmnaWjF9MGFWcY3RrWwPnGip1xTLxmjUMsY8teHXmg76szzYD6Me1deZHBy4AkPBoR9teb",
  "key19": "3xfd6EXnQiquyY2YPsb9Padj4E12Z9G3kkeKHHfmjBAv4LGxLUhfByDyocBY3ZcQ7wpcRjr4DLKkvBn5M7pSAHHL",
  "key20": "3YB39FG1WpPUXkUKXUChuAhQ4ZXwqDmRByMxSgKNAnDhf9NDmmXqR52Np8aXmhVooXDPavviomQuZ6juV1jRR78q",
  "key21": "64U9zbcbv9K9MD1AGj3XSUVrU9V8CKRzAG5BFj3Kb7iZzWPBm4PDZeomx3khM6egLeVbjDzx3w1oFZuWUX6PYj8M",
  "key22": "4GbwovcrP8TTp8i8tqf1ZYLq1yqoE92FDmAt1Hks4cfadjagJ5nvMcnHg9mhC8w4uy1gZNE28JnP2h79hUyW6TSY",
  "key23": "4XKjxitb4LMm9GBd3paXUbsgaD2YcPmEzjDTmZWsvMYakKZVcnkqj5ih3jye4By66p4avxEZwRWLcq7xEcUVt8x9",
  "key24": "29xoBRDEzWJZJdn7bNzE23uuZ2WjA5BDGwTDqQhcJq9mJzSYwKdxtXi53MLVP5kojh4RkjqhXxiCxZCBCzc3T6bn",
  "key25": "8kU9AcjFQrtdsRJYxxE4crYdGHohH3SuVs98W6t4o7Hh9yD5NLxopymGo2H6UHWS8PYeYm3GWzRY4vS7TVhNQg5",
  "key26": "r8mZKLXRBnGf6ikBgpLueBs8H8hgNNU82YkkMMkm2ZGuZXAa5EVuT1BXboX1BKZ4sy4S48tnF86qqvoqY6iLuum",
  "key27": "5J55xaY9uf4FQsDAQmW3GRgt3tzo1dJQf8NPUpsMhKGsbCGnr89J4Xrv6tqeoVGVx1FJNKwzPojethyLkBkxpE6Q",
  "key28": "552eeNoxRZTYP7jdCBm5rUwMfsoGhCUZm8iVHvRZebjUDJrhctzrNwHstChWPGYBjUAWqRTYw6aViYqjnB2HdCtT",
  "key29": "3G7A7Zjf6jonB7SPhijue6PveBdvShhiT6QEtennLEuoM69PCkUngs3D2ZhnFn9qHmW28EpBDf8KeNdPqaFFmfWM",
  "key30": "65HzQKv11sNa8P5PqSwj9PyLrHPenYVjDNXW7vV4kJpg6B3qQVDfYrWLkCwyCskXWmQ1RcaTcWRHiyF3u4sjhDHf",
  "key31": "5Qi71duBntJ4RqWk3UDLzwsYftrHbeRv8wm6rregLgGCwRtNwdiqkdY8sx4JnqWGSG7V6Xzqi28bonNz1QP4xoF4",
  "key32": "3jcFAn9B4NZPX78pBR9wpTV1hFq4r1K6quddtSemMHi1oCNNVFWvcVLP5a6htqKJhgP1u1SgZXtV7x9EVD53aScf",
  "key33": "4uvy6jighgVUK1zSNktLiLh22abrv5Q4WPSDSXDg5eTR5jYPb2keEwFaJGewRKHKhJu7B6xUrS8CU57JSGKdjo8g",
  "key34": "BGCu1uHk2eWgi4WG77wPJM9ZXMwZckFJLv8y96FScX1nUUn5d6NP1Sh3uFau3K5mhpc68wEK8W4ApRw7tgPUaLi",
  "key35": "4jmJrXAikFBu5JGTqrenRc1ca5La9fTwBzAFFAvRFkGBzM6maTeHv6TWKm3Fb5kx7y4coEHLMkAurq2XrNFMfxER",
  "key36": "TDXz8Xwrzk7hXk2BNXSWqYX9XAQAp9DdDxsju3FRKboufcvXJ4ZRzdVejcAEjfQDwwkud4dQsyKBut8spKDxiNk",
  "key37": "59jBTuJFjSMeCEYY5ndgdZyKgJ1KpudKLqN7n1Ykzg33gxe8MLnaWguhcx2rv6GgW4Rgfc2pbDYK5KV8uuuRmuu6",
  "key38": "58QMJXuQATWmv37C1zeWmAR1rGTAUy22iv8WWfngdpqTu4bmxCaCTf7NjmqnhzHmRWi9jLnDDdVFKhe9d94ByjFz",
  "key39": "5YuDdnUZx8HEeLB8qhWdiD86qtJkjMgoysQYdeh6SeNLPnwt6UXyh9AYe4XNaQwhtmUREhZaHpoeQVt9fRqurDPK",
  "key40": "4SVXFPfZTsCK6Bq1LR8TunsvAvkMz4KQuEuLUMgjcxSUuKRM1i632w6cjRZLvbNtYoa65RVnR2rfPKNWbZcAW5Uw",
  "key41": "4hKAKWp1tcKoJ9oWiosLtsX4WysfLuqX6y69SPv6zCHkRFaF2PHjqrVR6Tn84YVuhVmw4nbR3qU5ijyonvkPG7rs",
  "key42": "67HVgW5AF2N9jDvU2jLm5DgbjxSuxevH8AB6eSVLQxCQSpm77xcEAQ6DnRn8HJ9Mzw1WGqh5fKkgArYHZqPazNS9",
  "key43": "4FYDk8AtaAPhDykNo17BtQ3mgU1MRxL7TabzzjRNrEB7m5AzTGn2kexHEos3iA2A8vpSwctew13vf5t5jdVzucE4",
  "key44": "5dKzpi8arW72qvPMhVV8USTq6rWSPwx6zs1gnCW3ibTUuRyBkSdNp7uKiRriuiHTydQfkBJjsoZMnevPMgJzwJfA",
  "key45": "3BZST7VVV6d638CJGqp4zBbboKY1dV8p8jQnHDzeksjbH6oTwB4w6QncRcFoh9C1mr7Fu7MsZnpSqFFJLmH8yqcL",
  "key46": "5WCgj9oCSXVv11QKgSdkPDP96XJHz99pXCx8dxDnYqfPuULEjWcu2yyGwJzrochGEDVZSh9XJn4srjpPe8opR6pc",
  "key47": "5LbrdRNLgVMb2HJDFkBT6DHDWTgS4AZAJe1KGpjxriDYsqZXqFsaJLNfreAZsmD2Zd9TLCpTdf7PMUWHGyMumyf3",
  "key48": "2aS3chsdkGCAezUmXU77uhU4fMn64jVBdPGueaEuBebofagJbvT1DJGGKY6HYWremwp1D8satEeABENhrTdoZE2d",
  "key49": "rYPX8EPFAsLi73JGDKZ7FjXDBDuNuH39SqqNFzSFVvUYSeTNxSipq8Vyy5EavD34c97CJfpWCSxC6yBcSM9vJoN"
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
