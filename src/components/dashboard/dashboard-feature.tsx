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
    "5AHGyHJMP8fyuKk1rEzB6UyBy4vt9r1u2W1Hc6Vd6V2eDZmiJqvUWxse8BGFAf5vXszKQSMHuMqtdAojfE2H5NZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mfWmPykgZwGkmtvXq8PoAZEa43DbHJ9sxz6y1WnZEZJhsFNExGynX3MpFUz4T8AChMmY7wMGdAnJmi1wC6u71qV",
  "key1": "4bWyQHo5j2tuma5YKZb778YucXQ4qhxAj3ehNq1qtUSxGevBSHiK3UMAQgfb1TMZkcnptPg7xP8vSnf3kGLJHejr",
  "key2": "5Yvm9TNNku4iuZzAiFNCbd3wm5HjYBBgAD7ziwQWKNCjrp42bVsF6h8q9ZMRKLabLWyaRuLBk3FRr65Ehr2GZAv5",
  "key3": "3RavqRnyUtNiTjU2mDy8NZFD55VXnhcGaqU8diMXU9e8Krpz5VakQz1QsxRj5DY2cTXbQZGQojWekiLZBbLQUTMV",
  "key4": "3bni3wzMpvp5ojxvgXm3MihDDYybMEGFJtHirVjEVEx59pHYzZduQ7miqAAYYZrBo6d2NTADipr5D9mGW6DBYXkX",
  "key5": "4pZEAaM2F1f7ZZJDErjjgYa3FDFv2UXQr8HqfajZ6qeAstn4wgMpGJBDsvSiYApNsJdZy8UbiRD5U3Q6SPSGy6ZJ",
  "key6": "2Jo5zBLLtrKfkp3GRu6PajitCMs8R2WpNrUTTbs9oLyub8BS6SpF4fsaa42hFy7HeQCJssL2rHznGc3DAu4ZuAyn",
  "key7": "3YJaoX8mdiuTc84yJd55n29bQXf4iHtW4LA7dhaBMZVs6rjjVEFZb3Go3RC7L1SrCZ3EKAh2Vndnx2LvKCYp2smZ",
  "key8": "3emCeappndFc3inrnucj1ypWRUFpnD6zNUdBkXkHhwwNx3cgLGgPE3ZgfNZMPXiLZ4TMW7N9VoSKCZZcR9FvX6k7",
  "key9": "4Kwg1jH3F8D8agP1E4iHiS7gqMV52fygVaPMQ2CxAyxqn54wVTm9HJ5gGPfMEEYYmAYFs3TiRXU3K5pDDjDLv4KR",
  "key10": "4wdThvQ1fhkFKYqs6zcf5zWKJAQrHm9181FeHBRrHZkXUQ2iLM7uogPh86d5jePidyr5gUWT1AR3HZxJtDcjLuj5",
  "key11": "4H4xku4BUdjnakuVymTk2xwfhH9T5kyaEYCCr949dfUCWwFbdTtLfnDRg4z5QyY8x9QxwCWMtihwg2VA4D8vWn2v",
  "key12": "4ifpCEwzcdYDCHdXFUgPPwsubLqLvPELvW3TyhzNQ6sVpTGDY5mmNhG5EdiwQ2XqBH3y3zYyyCS7bsmy8Y9zk95e",
  "key13": "2GKn9n5gvuQsEwFT7xDw6ZMQUCDNUXwXU1LQKCNYbFycdrpoFGrUfqfeXhFUALqkzJ5VSRnFoUEzT3ASmkH2XyxA",
  "key14": "4Do44BXC3G8M6bkyTc9VSK971TArxGLYcQhDNJ6F8TaPJFHRkdmrPzixJWN3qDaJLUj6Xds7kxqpHRsB8gUj4sQg",
  "key15": "43oPSRNsM9mUrwmJivR9K1kxM3uEzsFBS12yWjejzn3rtKfSr7yDhqoo6HRBd92Pcy5Z4fYmFR9PVi5jhDLyYnyB",
  "key16": "5BgKByEZBxopVLbucHJfG3YMgXjJLFpaJ2HKDacTv6jCVT5EAiHpVnsU3KJaCxqmeLgRuL9FrQMLbbqnirNVUSUK",
  "key17": "wKN1RmMNa48abUrQqKY4Kn77DMxizF6pXpPgjQGLtCu8JX6js8HyKZsHxpWbVHQfzYWvLDDKWzQVHwLLmcsmtm9",
  "key18": "2cQP6A9tcfwQASy7k6ZzceY989RTMQ4kjEJ7r7bQtZRMFhCfaFrqsEcjNQp5KYm7Gobyr7zbQ4sxEVntktyFdupA",
  "key19": "3g7R8otqeNn65hotKNHZeydAPVWneSB75yxa2bBjnFHqk2D8ogRoP9CXMGJGWUrCBAx94ypcDtEm6XuaDb3wLkHc",
  "key20": "4w3EqYfFGVWB9YhTSvYALpHBeyH7SjiJTPrmqnG5voQpqrV5PruSt3WnV1x33uo3W38ebhsxHXSDouKjXGj1vG3U",
  "key21": "4UXC9EauaMUev637spjmfzSR23X7auXQQZ4xedjKaQoZ4HnEifSE1V7iN84kzeuP9gVmtaAkXy4ZZ8uwo9r5mbPb",
  "key22": "57HZLWpUkDnufsCoLJsfnuqLkvv4oZ9cqXhyKzRTBVFF1A4UbwXXg6omo6y58csZpp8WubPtRgCimRg8mERcKWEk",
  "key23": "4ZQzsVxwjkGsYhFi3k8sdNc796SvUUGrTxdehSa5wxe2arJ87GfDVUvfkbogpPjDFA9jfpU3rGTDhQ6mN6qAjrm9",
  "key24": "5SveXoocbruaPUoZVwPEevYdmpx8D1ZeLt7kCV5D1PcCCXQSGtBdZTzByq42Hrvz7tQ8aD7K9XrQqcPaxheWBQfT",
  "key25": "4EWL1pkZrX91pZnCFeJ5sGeguZtr1GPqBxPsBj2C7DJVykYsT1YuL3Krf3LDtuUmwqjZPCC1bWdfErErvvgm4vbH",
  "key26": "5ALq8yNBA88rqPD3bvFvqWEEx2Vy6nqLW9xXBckN9c63CqYGBSvBC7cLPsNzx86pqA4zSWSKL3ipBFXy2hV2AZed",
  "key27": "5TeLtArx8ui7MuPEztNJ1oYEfzNRyYmqJCUjZCHhzLVdnVjAYBYACyVoF8n3ZjNZ2jQ8A37PoPTJ9xiHmL4jb5DZ",
  "key28": "2rZxu9C6gNRUt3Vs6uDCDBg3inh5VvJbHHeK1rsvtawJpPrsVjW39C22ZQeRSsLaxAwAhe4uvThi1juzSBzLkUCn",
  "key29": "2UGSJStvV9e4MF9LGEyYAzZJLg7ApmGBNHBvYdUQMLyqgxU7mi5RVoN6gWjM21NDDbBLcEm79zt4Z41xDe3VXF3L",
  "key30": "21dXC5f6exURdF6ha8ufoi9xQ5CyN7v1CMMcawQGtTWNFy4WZ6NMQwP15h55VFyuJT58icL9c1tn4v4Fa5234uus",
  "key31": "ZywqNUrQXXcYueah6ZGvntCbJh13JUbunmyJnvAkomW4WuUXhJz2e9dDhzHiXKNwm17uCAPwD9EsAqjaVDGHsh9",
  "key32": "4cmTTXxbRvTacXwuRFi6ujUpHg3nDRVF2A3YcpuSP3HcEUV9DjzXF6C6oNYpGQXZhFVZ8SsvEC5SoLp7k42XyMmy",
  "key33": "3sDscTpuYMBk4AkTX3DEmdDuMHDded5UK33KMJDP1Vf2GwNA73mNxznDXj7XNirzuWnzJJULUzX8ofq37s9JoLtp",
  "key34": "5mhp9msw26qLu8EmgxxMp6daLZjFXvmUWKfggUKBMrsgfAxkFZwutSupperimC5C2pYZTt4JpWjcnra444fx1nuU",
  "key35": "2MPj9RGWAttpAFgBMRUvahogLUxQZmGnJiCYYjFXGnV2gsQBAns6XCZHD9wdWoP4d4Bcqw2Tb1QA3XBz2B9812Cc",
  "key36": "5ew6HGPK3v6Am1jjbnZ8uECSneEtS1z6LKYG7rXGjKQA68YEXwvC8UJDavBD94CxcFdxd7XL5WSyrhHwcfVGYFwv",
  "key37": "2A8ZozVK8pUFDJN8uYJVA57Nwd4X6sMnn2MP2CGTrTRMoobG94GPPFwQxCPGxiHXJen74U6yTTxF35pKKUPJuAV2",
  "key38": "3MdvkZWQjjhnd7Jx5u6c3xsHfejLYKH8rb5TW25CBApHJcgTgUmd69N2V3yN68pUDo7RSRLSHCCgh2vxZLUeXetB",
  "key39": "4dLou1wzFDU16iQwRmpVnGRoSc42oakeGttF5XMUT6wJQpb4NVd5tC2FoYB7Fy4guzCtLGbX6YMNeFfJWjAYr8Ne",
  "key40": "4XhpkT3p9HYeYydqkHXszzbxcxhkFXs9FNiPwrV2Sxh36FPaduHDfTcKRTrZDPVvFTi8Gg7zVq8Ao9UTn5n3cstq",
  "key41": "5taMZjX4JNsVNnuJsoTnCXDiBaH8c1ApKKWQGiRpvFnRD74CYjae9WYd5irM6XSvmuVuQPa4QLUqeTqXsVmemGoz",
  "key42": "5oSZuYSWHyLDNPsTTquSPWD38e4ZsSYQsakWhof684p2CmKtgXtfZoT8zjDrAaj5JGWjduwn4ghPYktc6r4qZshh",
  "key43": "62ao8qzXvxAQWFrYoDeY2pj5ZtN7uVjuodPATgjZsMLe2yB7sYjRLWEJZu5fz2XjBzCkqjZfbcUfns7MB2AJrx3m",
  "key44": "GrvfSJ5G3rpSAFLeq7aVHW74AeVCcaHqrUe1LHK7nVXXDqcnA3GJZac7gphDqXvwK5M22rMMMwJ1ii7DpgrJEyt",
  "key45": "2CS4qJKVUmD56dggRmuRNbJ8cUjAY6ovpXHiUoodRdnuzWrdC6vB5q1DJAr1xShRBmBT5voHGZzDuy8SZzNMnSL2"
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
