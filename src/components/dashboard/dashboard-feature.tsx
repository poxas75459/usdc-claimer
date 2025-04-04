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
    "3q37ehtMRrRuS4ABo7YbrHwFbAXFhGSpsEnkPHws5qJqtMXnvPmmiycVor91K6cTLqArgZX4QbCdvSDn4QbCmmos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iRaMtQgp9vpnq9yAMv8mnnn6PewtoS8TciCmDTmEneiNYpKBqVGCNMxwmBdDCZYwu3vSoNigNjpTwv8FcGDGGVC",
  "key1": "4jPzZrQDZkH6mAUiZEWQCsWZg3wsEZCrzkh4wGsxBftwN7TsujwMVkYj481v9XuYy4dJjEtF6SceokCH1iASTpsx",
  "key2": "3DicDvT9VDEWhg3qX9ZHXPoqPGeTDG7Rf6xyoLswcW5uXirxgbs7mbfMF5mKJbmfoGECCA6Ejf5ZWbEodgu3SpAo",
  "key3": "2RLYT5V3zw4Qx3B5ewT62mcNUee9pxc1z3fZgoRUGufQ2AwjsSV8aM65CGVbHNfcQj2nsQgV2sd2ac7M1sEzgBEd",
  "key4": "227BZuUBMePSpCvuu7wLtgw7FieKaBTBYS4a8KM5QbuTTrTJSVBujKMC1GYW5txxfota9qNcrFNEcQ2sa8a4JTKj",
  "key5": "5w1Gx32yaReBp5TDTk9ueatGBHRi434W2mHDKwZzitjGwTKG1K24jaY2q4bPh8SKx5p1ic3sgbvHoKszDhP6KStj",
  "key6": "YwkjW6PRb73kZjs11osVdGTkEFr23JdrHmsAbTxj8xNo5uGo4Pnb2n8bnxuNaC4ZLHVEmzPfSzs2zfcr2VLudbe",
  "key7": "5b3FLs5D2HgH31XMrYBMLCQ5hKRjUmW7EFzo5vpUox4gmuFZgWgfPhMYL8f2oYbeopH4FG9EexD4ZJEG9A5H8XpZ",
  "key8": "3RTb6wtLRqMxKpCN3QQsZg5pSk98HZ86EjCvsyptw1zK8oSUX357trSkf2VLuwLsjoK6Sb4YS9QMbkCTfhX8KJqd",
  "key9": "5ZpZNY3yHacKvMbDmc6z5bZ9c482Fn5ysNBGd2evjqp5psPeT7emoouGa2aYrhFTp83aiBBvneLPAy3Z25yYgjQb",
  "key10": "5MwDGNGBM9hTQfvz8tFAgFS2fk4taxoRhEHvD3HGGTTNLn9JT4ytkqgBB7P8smzHjhKJiwzoaiSyeypFuggEbdWa",
  "key11": "4ELVMcxrt26TPXhrVU44jn1sBqbxwkw1oZgC5MvJDczoa4vhuNQfzSpPg47LHZHbAiUA7abxBH3vRcMXWnZYd1CB",
  "key12": "41CWFrAQNoEnQEau4yMjS1PJQCF9KnKw9pTW2Yz3iPQgiPU2APTMA418g6V7qKGy1hr5vysCEgR1ghBnCHps8f5p",
  "key13": "SsSwq6oKZRHRbBycA5yPiom5WyuzXur9hK3HocrS3bSnW27Z7s3p6ryau9efunfHo4NKCnc6JuU9KGQjGxuP48M",
  "key14": "2TrRCoQdLSFCLcMnztpD2NmXHfxiEREKSGpCunVWgMo6cNnBbhH8FeGEF3Kb5q8gs7mnC8sSuM53bow8VzwEf5fp",
  "key15": "2DD7B4ndcqqbxjHYNWVYduCqJjBbbfomUG5cZ8CJhRw5vY13KvBNKFMpV88JapQtMmUpi9e6bL3LrtYgzk3WFjUs",
  "key16": "4wQAoA9EuKTURrrcw96vAArmXmg27SQuRbTPDoEppwLC3Hu64W79W1eMDpWJo7rMT6eeenCicGcNQ4X16sU7tpoF",
  "key17": "2jCGfcjAHRbEx7geCPWVta9m6Mv7MpG74dnauKtorwC1AQSt8wLpvPJTho3ZWQrvR4aFq1hhDHzib46bAzc4ooU6",
  "key18": "5Q9GX4FJhpi3JZ2CQrguhNmKi8GXnmViVn1ZV5eC6WKYqUNGjX9wHZdvU52L61MN6ELbYfVACsmNYgg5SG7mwn3o",
  "key19": "4MaDyE72RsyWTM46RgGUtGDKfLpLyCgvPajMejfW8M2gDtnMzCTHDpfkYta11oxmzL3iLKzDcwPtjc3bSt6CdAEJ",
  "key20": "3nRXjFffQCSgndGaNf8nQUHB6tYGTWmUWftZqZ7Y2u8ozJyPH881D6pSRcYqVYeZKWuDGGYhqcekzipEDpgnTteV",
  "key21": "4wyscp79dFqxHMB1vWyAPS8VKkgLRFQGo548saeC3ChRe9XjNxL3gnoYdfQnjbzWNaXM3AXw72v2NtozgdznsbWM",
  "key22": "2DW2RCXPpSN8EXiMC1ExYoPhSDdqzUhJ8xyRhTHTcpLhd9SnqqcLhAUdQ9ceWtcM9eA1oh9FCuAFhjqu4MX4SqMH",
  "key23": "5FCwZ3RWoBv32KM6FeHKRSp1kiYjWd7DGbhm5MrmjKhuQ1Zo2wzTXXQkPKQiQNLZx1JdJ9zPgyjmFUVriZEsR9cm",
  "key24": "5rh2ZHhPtmiLgqW7H6FfitkLQBDBR7M2pfPhXAa39u1J7S9eKZWAzCpv9AVQAAV9mPyVyqzXfEv9xtcitmYU6WHY",
  "key25": "5zcRgzm5EKQpsCvTnzWWhiqq5vcgfLrJqJwAA7boNcstCFmWFsD8Sjpq4x7ot4B2ZNuqteVcFsBLZxqKEDAvJCV3",
  "key26": "4feGnBvxVQFmtJQL1xqXJEainBYY1Y7Y4pZnqTBh3vuHaPNRnDj25uj7PWASGEDqCQBgXKiXvhGpaNbZAhryKEDb",
  "key27": "44SHRyTeYv8XsjNuULvtcqkfnhmNtrmcda8DTDQmWaJarLESh2dLnrY7WzD2jJboHhPMSsYS1Jepki84YYE4yQwC",
  "key28": "3xwwn8VMVFWcGNtYGn37KHPX7oKuEuVSss6LX8ToM2r1eDdoUUSAA643ennXdSFjcgKCYveXRKBC3veix1EPhLqP",
  "key29": "2eeaF8La6pRAvSjEBjUQcwtJ5BeeNM1xoGmXS9B7cb6gzbFtXa9khe1seTzhMgbNCqqg1yzuaDoFyCB7UBCDjn4R",
  "key30": "3EbTmVHQowKPkXWowoGTA8k9j6nubny4zJeCW7mtzkdC1TFkKzi1KXsGdbeTKwf2X2FExbuWoazPeLbddGzhsygK",
  "key31": "3whG2HRyKnJ16hMDq1xe8UxAwXhVA2A8epHm2k74nByMBEh5ZGbxRtVhJaZK6VmAt2n7TFfyK4Wse2BvW5UTArog",
  "key32": "5X4aaRd28rDmJZHQY5RhvgjLSvi479sR21iNBB3Gv7sNb3pxcG5eswwzPw6Qs9McZvhm3UmZ8YnwbW9P76hf5Z7F",
  "key33": "Wtfju63bfifinyNABRN57SnFJdwCQySmgrkrzmnvgQELotz9A9G5g4qcR3PxbraNbSLUqBd9ydGt39LQwrUhLmJ",
  "key34": "2p3WcwLE1pv8ebY2sCbDD6sZFcss8vtizi1LnBSGhX2CsUHX29NVPHS8HkEQ3sAPjWG72c1G21PTbBAXawbWerVH",
  "key35": "5BFsAyHxYW7sEoSoKtDmahpeSQUvaSGuTYxsa1afp5nNCmT4cKUsAb4tCcQngwWGJ9hm6EuhaGBVCUt2aik6cexR",
  "key36": "59hUwq9gN4EvnfY6ZSUJF9A5yKgU9AyzPBthwfwFVY966Dk1ngieEHX2k7wqSrXonBNBaE9Nbk9mRNiBuKiyoC9m",
  "key37": "5HYsLbizGQqB1H2fBCXZxp6FKqUjoQ6e7qYsXqoEvtSXTP3qsdeTxaf9eRxnGM97q758BD8RSiWhnEs3P4JpR5kL",
  "key38": "4kvcJQukdx1jJCtUXdceGvyd44r96WPu5byTmLf9zhefuTgvAnFjjYha5TJ6HPvFtHnN5cBfAMd1cgjq65VBr8nW",
  "key39": "2WW7QPh5KML7ipxeJSeNbX794iaEJTS5jV3qGJ1WhZhZaez7V5W5XpuCovjSc6DDLgbBLZB9HCFdVQBV8ERQHjq6",
  "key40": "3wJfZxirCNxyqMUUFwpDjekWkkLBvzQQ5YBskb8TXfTtRM9rpYwN6vFFTTwxp1yR3f5ye9MhLFQRrdQYE6mZmaSD",
  "key41": "4YUBEacNFQ8vzEjERJWZcz75qM5cTEgnsLD2yGC1nsDwuZnYR8ryPRKQ8rJhjpk67yCW2q1inFYvzvRmEqTPiZQf",
  "key42": "3e2tizwZxtD1rNbbf7DZoMpnAmsSeLRDkh21YQkwK5BAAg5wCkvLymcJxT4f5jdLUP8AUEg6LqTX6wDtuuWPxrqP",
  "key43": "2cx2GbKRszVQr32ccwtH5q44BHE1iLGzYfCTxXfxE4GiqiVq5jyCdTAeYhiuBCisXDgFPpQ8bSrhkS6M965S5cBz"
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
