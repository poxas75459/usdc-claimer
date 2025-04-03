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
    "5soJvrTUPEZKnjtVxxpin4Bo9JBC4JnsHw1jP4cdsyCEt3fhi47uxRgXzHHqemRKJWPaiD13zh8ob4tXLftzwJ7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S6FyVXzLZfBE8ukUmC4vv5uncWEE8vBfzuGoiGSFcKpqJsCxBbLPime2oXGcgacsAzFA2bK9zgbMKBxesj7Cvrs",
  "key1": "2T9hA8soJpvMddeXRna3mDPbw1bCiyj5gbL3vZZH44hrMU1KTSBkaCFoUjrVGSJXjA1LrCVPwKVLjxqKM5JaSb1o",
  "key2": "5DPoQF8ArJdEG7FQL2Q5LFWbNpLEWaMzCUD4Kq4XuGYjKtGKF33syA4ZH8Q6bQHUhmLFnYJFHS8SdJsDTtCxo4cD",
  "key3": "2yetFteNvywp7HaK8NBXvTYsB6B1dxP8wvA7u4Wua3XGHK8EPTNUSUR9ifMPhYMzBnLG3G5sMJJpoWkDCdgnUHUZ",
  "key4": "4BzriGHE8zGMs8S7BsEz8oXfDMRPagK4tr3LXWPZM1NAa84q4Y3YmFEj1YySvTVABSsTLmQ9YVyuAPNFofQpxrQM",
  "key5": "3eTsGmnKkxYGk4KyQY5ZF2rUzU9GkMM2VXbS1UoAnuWpEVqVKXQhEpNUspZV6wD3naUzRfHHoLX5Y554pfFHDLaJ",
  "key6": "4ZxJBkUJDMyQ1HZWwW8y3RRjruY3GoXrzi3aJYubvDzS4HkMC7rBRU3N7Cc53aSqabSuNE4RzR8q1A9nHWghyCN9",
  "key7": "TX8sc6bbzr46YwMY7e9xvvcwR54ofZqET5rk8EQ6RYFgQ7qQd4QHfit7uPAmqsmdy6BTMhWenGjcgbyF8r7osZF",
  "key8": "5xx5zkFGnNBDzfovojo8uDmG75ZpYELApBxA7f4WKCe7QhHQcxFGcbza86wWMoFNK1A6bHg1VcBVMdn9SdzMh5Ka",
  "key9": "5hoexaeDaHhHza1jUPqJtoBUn8rocFWoSRQG1q5MoAcDQaqHcLUpVPhTkBYaaMCtp16wx6rdHxPgJkT6sTtTUTi",
  "key10": "5TUeZgc4BSXQbk8Y1kNjYpWppVy4CaZ1KYegrimzC7cKhjEnXEJCB3hvPzEYTxqjHc3zKhjoR8yHEtijCs1KvBYT",
  "key11": "jwWZ9ZxtZfwwp7zfRGFoKrYwoYRYWkvgCaZtpbihWX3z7y39s9TD8JPBHoNqWdWizA13iyA28Wh3rcAF3faK66i",
  "key12": "4qnvCdtB1uKqbQNxhEaV6Bem6Mc5D7zVonbeAFjLuic5fWpJtQEbXRkKb2Utn71LK7WgEciRH4C4jf3ADnYFFqei",
  "key13": "hH7AyyHM5pEVsXMUnNYxNH69SowmsSoFdEypgLRUeDdH1FE1JSXa77NNPMzKSq2TrYc6QYJV5xRKoE4sSVYrqSp",
  "key14": "ogBJem1QBxSrRKThti5c8bb1ToMzXgSAvwJLMYxbXZ4jNHNUc5CrPtTPF5xXZWErEXnoYkQVMbCLqjvZDa2vUyQ",
  "key15": "5F7FuwSEj1RKzTQUBtj4WBEEu62XNWVbgS9zzA11EJ9LisJe9URG5aQs15q5Z8P7ErAmsa4wjN3oYNG89ugh9gcE",
  "key16": "3yvZSqb6s4T8PRZViUo9DCbQtorAmgQ7P4S4zqrhCzfnuUzqaDUfNcyCWS4Ra72kNwks4qm56kW1rb2hoiqGaMYD",
  "key17": "5SScNnZmxyUbkMv3ENTrYwgn6hXwgPgmcDAai56zx5DQbUjXBWvou3joyYQhi74iLqN5cCzyQ5tWkv33W6wXzLkk",
  "key18": "3MDJzhaxrqfUEVvREGLhRxSK6tP4TWxe4znPFs9VioAHXnbM7W5wf88UdZVvJcP8TKsDSC9i7bjGXJC1euQavT3b",
  "key19": "Z1F8iJgxJprCZD17TnMRb41mbYPSxkKvs7jGUG12KqYVpbZi17HuUwYvvPmDWkGVYM11iSS7b5kqtf6QhXexoxH",
  "key20": "2g7UmTiqg1YPky3yoZ8CPJZDtbVHRW62W8cLoute3MMbE56pLgXdZtnsHFBQHRr69r75D1jE1fZnKMWQQBf4V4Ra",
  "key21": "5DK9uxHcvTXv4df6sPbtt25kvsESt1XJm9WixEw63xqBMeSS3zCr2xYywbKf1QnnmMFj8U4gPbTmnAR1dWUVuAos",
  "key22": "4A7v7tz5TZvaMdveR3UBPrgN9jwxXYBV6uDqGpbSs67DpWJAkMvq7VAWD3bJD2xyemsn4Zmd4aSh4P67p5gjM5B9",
  "key23": "63XCZwowsqPcp5T9FDroKkQN3T4u5c6e7DVA1E54ecjvDzEau4hZJCzRYF4pyvQKZkoKHYTEnwAVfQcRfaW67sah",
  "key24": "3jrm7v6KqzSw2VuLWePYsw99QGENAGdr6J2Lw69U7Qpt2TP3udbXkceC5LJzbnPN1ctdfDs1eP3dQG54rtvCPKeb",
  "key25": "2EXEZrRxkTqgm8mcuxBxJoBGXHbhtDkzoNk3dBFhyMuoV1FiGdQMvjbaziNzjZM6hnVc2TczGSo5J82x82FwRqdT",
  "key26": "rrdQjjmc1rnf5VypHncE8TF146QqsbGg8f8E8KsL7wqR2VXeTGjpoD2NMVek9cffC2zPq31onqoXW3hUSDikwzg",
  "key27": "4bdxS99uMvRriprE5PjM8Kzod1iV7Bx1hBdCrCse6FUqD7UmrF1SJD6pVg8Y93vXC8E8WJDuADtcmev2rKmpG5WA",
  "key28": "4LgGZDNry8w8NrMJtfBczt5bWuVVTZsufWNXzJuGH2amXVLrqgqydpMawvUSEXtZHn6rc8wVZhW3R7rE7P7DoYwt",
  "key29": "4KU9j5nUS3mh2xZ2d5NEb4XuwxFKb3myXfvFixbfkZmutVaLW7oY62xVEneviPUxfeinjKRVjSL2U4do81ELX96y",
  "key30": "5HbkJnsjrM5tu6x6KuZzhm3hEGRnZsoqawgxfonNoe3QEm1YG3acZ8nDgGz65UtmXDWpLkRe4HCfzJkcmcQ3c7Fu",
  "key31": "3WP7cN1QGZ3eRKeRPNWkk4fRgEpWaCZfNqpr42EfrJYFf4UFyrwpe5dmnHN8ry9Fg6aEXtukc6R8hC7Z55xb9uN3",
  "key32": "4SMk8dFgmqP9E5ovXiDHHSem153fUuqXEeWi3ng3yzeqwJkrqeZ4LFrfUQPs1eX47pTRqEkSLh8FqQTJ9wGtZiTs",
  "key33": "2Bg4xQQtbsTZ9KgcVZgUCpzw5KS7wmZVdUb8ccMqDiNL17DaE5JjnLtEyud6YLVr7ZFaZci57YkSZNVskxVazKqB",
  "key34": "29UMgeM773R8h9sKM5KSuUXunm8JSMBvfjvUp42JRJkdr7vF7MN3VdjNy7Mr8Vm6theBTMyj441wzWP3f1nELM3z",
  "key35": "636eaTXLsFU9wNcmFV1imhzhHHjQsxaP9LrWxEM7USr6MuY2J7c5cRdSrL4waWkJuqRu5snvSUucp57z8wJPeZV1",
  "key36": "2xAsHoUakv6pQy1NDobn7KKSeLKQPrEzL318YFnwTbvUSuDQvYznppBWs3qVusnq3DaBsMDHvsq1L9j28Xczxgdh",
  "key37": "4xi5TJLAfawQtxjrT8c9JZPyNFzDvE85Ynj6wAfWbVuWEhyzGbn21jRJfwiohvDE1P8hNdVVzUtyhsTc6db6W32r",
  "key38": "3UknU84yJue1r2cBdAc1vzHG3R2j64X7GoqJpdy5VQfdGf7kCPBPFKB6TNicy1DZKUQc5uNgU4pHeGsaNiAMriqK",
  "key39": "32FUWPj6rpovF9MdqfcVFq6rHZvu1fBqL5U9ECkmFD12jKQjQpY8KP6171JZgdC27RdpXXBNBtheknjVZFNbhx8D",
  "key40": "BLaE6E7mYoTzTNxgHYaXDyJNmXjXMYKSCyFxr2mjWEuTkbyCT4abNaGKXKHSUV1yoJS8hWNDpiXk5siGzbKrRP8",
  "key41": "5T1MZ9pMAnMzyy58kEVMA8GNoDjnge4PRMaYUoZhZWxujwL7cqjdUDpNyZ9twjfH4byESUN1YKPa639CrCS1fxqU"
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
