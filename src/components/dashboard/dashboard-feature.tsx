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
    "Jc5KQ1rYej6hjsSxUcvmZBQF9jKHU2fzkLM9ccUAF4CERLQiFcTF5HsGh3DaDXW1cEJaqwESm8kjvupevG647r4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gesAimrsCYhqRFbaDZGX55pXPhNjmXib3RfMULq1LgV6SLSQ4mthY5H2kzmBfphLuW8aMsZui7YnQ3Doouag1Gx",
  "key1": "5HRQddN1RBMjYcFwPmqk8ZrPjWVQRQAEq8CocQgK2RV5NyKozBcAJbZXwpPivCm9TBWSyQnSPUbecEXRrTXuLTuz",
  "key2": "6pxhwLUDad1ioWjrr5BrTGQtgcHLD8YZJsgecAwTmz1xy6XovTuJSKNR71Jx5UzU4PM1VtZRAYivqRh5qedyTQo",
  "key3": "5eVRNLmByYAQn1EyyR29PX9omRqzcqXVo9pRkAUJpSRhAHEWJozrBK8o6YZNVU6cwg42LhV46HqvJN5WNPsdmZac",
  "key4": "3NY3b8KfHzQ5G1bLCaKbcKpKNu9bE76UNuJQMc5EuyCLdgmkcp1PgY2yhAdr5ASUTvudRRDCuzEg293gyKiXpUY9",
  "key5": "4z3mcLmH54p4NHS8ZAVrjoqGAF7qo4wFaFxPQMYGcHDUkAeFXFzfQq5fMFNfSnALwWyQwzgbRcCfBxMk76Xdf8dp",
  "key6": "fAFMJeRtuhiaZo5iWqY7YBYLLACWFYW4EdMSJDg35pcV26uQXmYNTe6VqPiaaDv47odeeYtzjNKu6fQSwSeg8oG",
  "key7": "3MCidixhiAQNEGDopXUKkL5m7gyrLz5yoFQNjFjVKuHPBijcQqAvJk8pfVsKX4WfjF8EV3ZdShdQEUtfSz6XmzAZ",
  "key8": "62wxADzGhv3PQUeNxwabxSVinoyqUpiW7nhfvNn2ppZ7XjeGNNq5SDMkftt13RFZBcEFNf7nDUxoVs4VmqoC14VF",
  "key9": "4Y9ZHy9Ez9wUy2dR91QRRvNqHPzgtmMqh6Zh4RvD5kCFDGzQrcVRH8cEvyHTDbju1NBwE6BFHwpUAnLsPQVMd82G",
  "key10": "3CpzmXXrQVTKq3tX4MxghBTViCr6YNS8RG48fiZpwX3cNQynsEEVGfQGTjFVSmebtqYT4tcMjddCESgXWA7c8er7",
  "key11": "5G2hgoJEWZXV7eyr88f1YZq1nXoJfsiPwmazKETiSiSoE4LJ3KhMFJR5ZBBXctYe1PUuVJZMhJJfnxaWiNfKZ8jW",
  "key12": "3jAkmKVCsGAwsWE47dgGhs6FH4pGpFZQyGezED4CrUp2mek2jMpwLp6n6Q7yAXHvCig49w47kkPi24t4mcLszVax",
  "key13": "3eS6VVX2XFbJqJbbKAbi2fNuSRDUMQMGFY5sSN8XTw9doh6Y8EzfYXu2m2vuHUU5fAMso5ynbsSPEy5nnTv4Wmje",
  "key14": "3gZB2DLVxik68TZyGNSseXbanBeYL9JUvXqGGKBzBLpRWfg1sBPjeCHRtQfWMr7A5Jn1v17GHDfphRK9AcW6FYUQ",
  "key15": "45mJdQJRZ2X9ZiWW5ToFYATEncJF21yNvNHsJbp9cNCnxFnQak99F8dcnhQNK554oRumYpnuvT4PnWqKfKaUqxX5",
  "key16": "3SjwZMNjpHsptJe8J3hN5v48komSYS5ehYUzxZqL3bCmovPUs8V6MDgVumCcUDUDSYUMQvSgmEKdBwhJEEhNbvFw",
  "key17": "26jFjDXdUYixhiakSCLJwHgxF2t2en4EACvAWzaEvbawQN1QW7PZPe62z7wx6Q12PuUyqQFkuZsdQqpkCQsGAH4G",
  "key18": "4jEcKLAuU2CSS3hsQHhkq97mybT6kxjp8g1umPKpTFzdQvoot29UqtfVpRcYHwSj3HZY3azRx4Q4doGELCUGixBM",
  "key19": "4DU2uKbWknzAqD4pZRkVDzUm6gL7A7fUZwWh3bXrmtyvDV8X1xjMUGXJVco5NaVrcMzuLjDo831czcTvErUDs4dT",
  "key20": "4dRqWKUTcrQwDvHANhAg4C8mkLWSmPHDXW7G7BwgUY3oT8wGS2FunPYPWaKNMYL8iAbSTYyYRMhB4jcsZzN6mJZ4",
  "key21": "565eZc77yQ9jH7psDcjYfCkhdcB2HYZBpvSeMrKSwEGmcpVaDDPYGDhJEi3ha9YecYsus51BrYRp3xUYgZyuVfEN",
  "key22": "MSmrwMFWt5Np6uJnsa22yHefBtEQKGW4yxPTAREnCxTvYE9eTVFvAiNsL3RjVfoY5sgPNBCM8xuPA1sS2Z7mzrK",
  "key23": "3ybpjUPrWWASNmnNVp2RAbFLKkJbqWY1HCjp3ts9VdEc8kEfmXmSCL4XjFRBDUXnxwdqVSZBk6eNd8LoDAX4SWk1",
  "key24": "4QGne3gEDZtqsee1W8fpxwHf3ETf84U8cuN1XuUpHsnopBZ7jkvgYyvUt3Dh6E2DFyX3WAPrzwB6NHYWdJ12o3Sw",
  "key25": "2d1VCK1jbiXhwyV8cxAsxiXFcq1FvBVNnxKBX3Zfv3q4JvyWQZJhqhFSbw2x8xpA3zSvnFGYDCyRBm9cjvSfiRbG",
  "key26": "5setwNNEfj9omwCDZ1Y43GTYhijkg8vwpoUiLUbbG3piVdGgXWnKFHVZHqijigu4ZMnWpqLtDK3tBdnw5h17mAku",
  "key27": "aMAEZmdukXFWDtFEbBUZyMXF7HZXY6xMkfH9qAYW8ZwRDUe6ySxtgJKVC4S81d3k4hyy9ToVZJo2gTaMAR3txP2",
  "key28": "45e8qncrgHPo7C3rAWqNVKqsJQzv8qjRNZKYRAqtSVonHsExDRpxyPHdWLsrSZegQfYQcD1xk4VMDPoJPRruXVup",
  "key29": "pZXq6sCVnhtVASayfSBtvVgvtn4ijWKamd3RhCjc95V8wJXMab7FJHtXEFYrJsFM7c8FPJsvRqfrQMK4JDvuHrD",
  "key30": "23TAkMFp5SCPmVgy1YrbM82mL8kyF4fHb5dGFtboF4nM4pxSEAK6zTfLVmnPPbBkHHozJAdo4YVAFNgj5EwWoxSR",
  "key31": "N1Vmmjdasn54PU6XsVmjqpKBx3zTmRqNVXs7jAfCqnBcE7E3CshRtipGJykGfX3EPTzmbkvYkEvovXvqDtHkyeT",
  "key32": "3C3qsosez4K8Ych1EcujbFzAdaJDQsjkCycuwVNvbZnUMEVM9fXiWFK3L8ESeFefo7rrojMHreFMNE676fwDBf6f",
  "key33": "4Pq9ep4wZUsgoc6mspY9SaTDTgk6mETfsM91fTJmEqAidepgAHMz3FbxGEts6PHLfJaQC79qFgt8TXiZeWpEFaR1",
  "key34": "4DqefoUDp59YvWjr2r5Xu5vniYU1ikV6bgsj6z7puEiMsLatbnsM8TA6LuER2qAPADkjva1AGs5F2bLM5QqYjkby",
  "key35": "43smp6PLy3MuEHh6QhHsi93ohgqdFLRMhkfxEtxBCctmNWfWVqRKSjitMe7JzL4A43fsXjCP6JqvsyjhUybU7xmP",
  "key36": "5D1EvB796SNfYuArfNs1ZTV4f1bg24ES96g1m25qY8StRqoxENQeEkVehe3UyUtiF84Jfv3yDhqWj4VSJE1vG6aW",
  "key37": "23kQkoobQBVN51tKV6VcswvmiU1xd4tzVUdnyqX2SSNgkegNZ5qm15fSKJPuQQZuQiGNXpGF46ePf6fYkfTvpFbu",
  "key38": "3Qxif3aF5u4nkURwVizjcer1RyXu4mixnp7StnwSJSs8m2knRyn2csihkAUFKyqJ9VsnRNnDxN6csuUB5H8Ux5rk",
  "key39": "54stsfQfezX2Q39M9isxLzzUoGNVa7WeRe49HZVQz4UoRAtC1mEPjrcvkdRaw1SXzLxqJkCtmeCpCnbho2pLUj3S",
  "key40": "5FCC1CQHMY4SmtutKC4zz5iZcQqYRyPrJvwSwuGcmDAuRmBiDe8h8rdEpYvWE6CmoMHGa5tuGkX3pxGofXPAn5Ev",
  "key41": "34h2suhiEMwmp5girNDR9GHVK81irjtGxngBHj1G6h7ipbUW8VUCDtqvo8fprQ93v4AGvjf5r9iUoryRum7BfQcw",
  "key42": "rXEtKymb9Vj4J9vpmc4GX3kBgVzX4zyuVm4ZLpVEDntsPFaXWG4Eq66ridx9h6kTX94pz9BPCb6KuGuN52ZZfRK"
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
