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
    "2hnPJo6EMjhU1wUVCEww14jhJvusiTi7VYwrjDePvnoBtHXmKcnQZiA7zt6dDPnBQ35zyzGqAcY4bFqLWXXGxzn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38RxFYR6qrZRnE1WxiqUqy3qjSLwe5UqitHuPfC4zHuaFVWZjh7Y4yKZRJ463PAmtgxcoNPZLhrx4vAS7dA3hzyZ",
  "key1": "4SqDWPPZFbawDSLsg8TYtBwpwdtv75YxYmjm89jDRsBnWZGqMSS4eVi4Q8Qx3CDbEmdZ3H7cEAdQAmynHJnu3SoP",
  "key2": "5QD4A1Qp9zr7nSB25b7CBsBviLtiioLbct9bVgB1B6CHCreu1PWDM4BWjcQXTbvqe3J1MwQ2c6LrReDa3SWMixa9",
  "key3": "4bFv2F88vevo4MDzq7C7QhKVch1HGMGZGEwmZS9KpMSqcDw8XVrw8HCWNGLX6cBv57wLgyeWxDEMR1mKPp5AsacS",
  "key4": "2mDrf6WgHstbtTuumtyyCDtLmAEUbNNFTri5tC86BoBPLb8iLibZKNEkwYir54wTT25ohxbhR6FYYq5xxiGvG7S8",
  "key5": "2STuYksgGzmUVa5qTpq99TpSW1J7FopwkpqqFdZUa9tvYLTTrNfsmUm9Ua2PB4SGBYnKQgXexpdeH7s7RocwFhhS",
  "key6": "4bTW58cT7RNkzu3y798JKjrgYuYnGf3tkd6VXT5MZzHj3YUxzBzisz3Y4Bjgfen3PfVoJEsfmwRC752zj4dWfRd5",
  "key7": "25r8NrTKe6W6tTGX4xUXsmjhpDkwqeFcXDPVM1kVEVxdTHGn97JdGMnzjayJPkhVmAhgkETh5vhRaQGg5B8cSQjB",
  "key8": "3aZGPqgn7Vw78ELdQyNFeni4RNKCnypjC1KjnutV5tHu4f3AJWfV3Rmia7mr8Au5ZdrPwbC4kWk27UfcJwswRynz",
  "key9": "7omqNkrUTqzy7oCMZq63SenazuuwAriXqDJd2H98BPpWtDmBTsHaQNbhT2EGXxpyJB4y2Vm9BuJednN7bJxjFn7",
  "key10": "2WXp2j198aGU6xRHuEfu1PfDe5vgkUC7ZDf2cJnVu1prRNpf7jgRpv9zLaopnbAiZL4sPofr7TnRBRzEP6qjiYmM",
  "key11": "b7GyfphwoRKTSUmwSntZP5A2AG8ULMg3hJZA7RatABR3H2SoZKU1UPLEPkF2jHHxNVK7x5JN7GvkQxN37LLhCG6",
  "key12": "31FqaWYTKdJw1CZNJT1f8sjHvnr7bjAyFCXyv4wGgtKsMZcZ8QbC31r5RfnEFVXSgYwvN259NwgD5FJzMYJVqnmM",
  "key13": "3qFDqGUZfBRVmovGWCeGsbsxnyQt5wVthXxYj4HSZ42wt2CDc4LpzeFxxzwT9vZKtkxLB4wdY6WMwnsgpb7W22Kr",
  "key14": "38aoSyKZJ8txjvwQbzWnamzesybYNBXDNTT92Bo37hDGKrYRssER77M9R6rWXXJXghdhXRjRPQbz4w6gdf2GsTYd",
  "key15": "5TQTqKgaNy9g6rZBaSeNhKo5LF5BznWAiAJsAWWXSbFbD7Q9YiGFoMwXD2tfhz487ft3HLmPE3znhJFmLxkfowKV",
  "key16": "61NjxhEYpMrrN2XyYDDTw4x9C4Tgw44bB5V7jyNr4yzFu4sHqNrsfD38N68dqPBR5iCk1HPmzADGjCwuaV1AZYrd",
  "key17": "3Uhcgdfbe6PaebzQenTxTQzt1ttQoTtVrYffLK62uCLMSXpfPjTJrtwjMZHrM8xqrhvxiv8ZoWFuBB3mtSJjweid",
  "key18": "5u41A7LgCEb5at6srVQWDKHYmLGycjzaUkv2a3Hyc2ostx15Fe3QQxsv6Q725LTULdBp8WycGF5cM7qsPkitq1f8",
  "key19": "2X8PG7QJic5HrbcReA8JGzCGxdFQXJDLoZVGZCsW3psJrYjFWMpCVfq8pyCRtdBSF7LbjXrkpxeyxAxykutiVY1T",
  "key20": "4EotbXhwr3Q8Y7T8nhhHHCLA9qBcnybq1gMJPf5tNhgNNDPTmd8qcV8KxkvhnwQUy7zJtB1229ewPgBZ7VA59Uou",
  "key21": "4en6fJ4X1vvqhCXkZUU2ak16j2XqhdBaA98v6EC9PyhuYp4w9uHu8cDGrzXomXfog2HUBc5DSQEWLgatwiC4tdEc",
  "key22": "21xyCt7oHT5ysjLeHQxfruSDvEx4AvqiDWuvwFHoRbNDHgpKrpgMpUScbhd4kpcnE8iG8YojjkL2cKNEnJHWa2Au",
  "key23": "32bpGtHQmLAbbZRpWDkEuYeApKUuAmZfH5JHMAXZdx1VcBXddb5NRtTX2PA1tYiSQwrTnGFcgPNMjaj6o8M8kPEx",
  "key24": "d8pnBuoWirHpFwmuwUDe7spn8qHXEfrP2PztFXhASKsSMGmjupCogm5YMEdjiFjGjWndvPyoewtbxHiH4TTqaG6",
  "key25": "4HeYA2umXHWswErTRhr9wGAHUPjVNkfZ8m7Wsrrd1E6SANewMq24ErBNrKFwez5XMbPcjZDNqvnVJ6fprF6uYz8o",
  "key26": "3CHVATMhrbpAVFET3V8iMf9q6E3EKCjw4sLQdUxURFaULLkzww2FRQ8H8C8LF2V2Pyfc5jEkuqVNgMwQX7Lejbv5",
  "key27": "3FUf4QBnaSqDZ2R2zPbgemggep1DpfmURVzRj6nerjGgRqszieqVvZLpnDJRBVD4eawAMJvDfCaS9je8baLbdwqQ",
  "key28": "4kKt6SGgRgvsT45itcK4GncZnX2tGEnoEGKgPmsZewnHxFk7EEkrPY4fR4H4qiwbbZW9EtdoDMzZUaGRctuMQe3y",
  "key29": "hPFFqZHjjJx5x4TogtXsNkCertnGzcb5SJBguJNZfuWgbnSQpCPMUcYCMAy69ew2sHG7zRg7EP47UiKUa515rUf",
  "key30": "2EXSUrDSYAzGXhYzAYPzqCzBJ9FJaLim3HPeZA5L8tPwTeBambbrGvqKCNPfcy459zg2aguNFmx5hQJoVF4BtC2J",
  "key31": "TkXAZQMfS5DU5ces4uo5xpTP3vBoRQFNa3FaRUUGYAhVb6aH9jqMANvkk2yzmZPYv8Jp3H1dWn8tzAHMGAzMdD5",
  "key32": "3faQMwrbzmSkbmQWgEQVnZahWaAAab3VSC5RtTxVjC5GUV4ge1SjTachtFWsvVyuq6BU7GAidgM1VXTKaatY2Air",
  "key33": "5FpfNcrjeSN2cMCWidJgxnsH9h7mF6rtZeSxZp5KPbqzyzJWnEA7xmMCU9fQS4JDCxga9gu32XGE5mGCmmTt9516",
  "key34": "af2D2DpFvmfHtS5wpDL6zWt8v6mVPy3wvd2HShpRyscPjALsnZv1RuJPZmSVkFuuzfLa5uFgfWA3F1XnsQKiv28",
  "key35": "2tSg8K114aLd5Wv5M7C3UJ6e3fPxgXsQcovwYfCDu5vK9TzcZKNVtdozNTK8iqZoWMRXrFncuVgHr3zb8JoZWxP",
  "key36": "4R94LvpNpgomX6GPZyHNS6bj89aLZXsHEum5d6M4xejCx93eCKvHxsfwqeakDpSPGWQdSfgVif3Ehc85yqvki5ij",
  "key37": "2jcMqUR4udmxP8HYk4FvwtSfR6yzk2L7H9rYauvP7HRu6mRSHxmbo9LFSeVCWKertwux3THoqG61vANxmXmi3CHf"
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
