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
    "3f2YVReSyZKm3QT9Rcr9E3Z2CoNNQMwLNwTiFD8xHWcXLo7uUzzZXrAhA36ktNT4qgmvfyHSCTJzvP7JdtBTvan1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gfxHSSxzMvQrUSUNtE6JxMGkmT4CUUqid16RVra3k99EcqWBbJVg7g99KJA7PM5EMK6V446HLMeFPaTyd9wFSvN",
  "key1": "KrCZNExQNTHaMD6WQmna9k1kMzf6or9s3aRLuEzUTTHwASeDAUFgnTrrktuj1LYtJknJMXQe21herE3YNufM2mK",
  "key2": "338f1Rgr235LQQWD2JQqnWz8NHbsafSeTot4X4DVYJAxLZud58PPJCPjYWBuYGuKfpC7pMvgyGwM3KKJExsZr3v8",
  "key3": "3zMqLtw7QAwfYDXWhPS4obJy7RioVRzDuEBC6HLZBsWAX9We9ydJ2VauAdP1UUHotF4z8n7D9rYeZTuwrGUs3gFF",
  "key4": "3pVb9rEVqvUGWH6Zmr8e51uZKfh1X3wGn6Qkr4xB6CfS83gCKngwg2rGgJiCDYY2PgZN54RL58RRHHVxStJxV7hg",
  "key5": "3aFEJmS7yKcz7ZKRVj4kdTczaEd7k9KTNdkmzvnDCWaGSDeYmp86y7Vwy9oewznYmkEsoKJi3LK85Wp8pe7wBV7b",
  "key6": "3AagwkV825Wb5ufMKoBkfqMT6wn2NmG2iDiZJai3EjGRxKQC8iygvT7GymGA6L4jyTyzegWWrZuuxSoY6UzEAtgh",
  "key7": "RiJ7hEfowfVACTEWzu3BDb59oPrpKqLiJNNvh6Xfyh3t7EuTmnyzQEwY7tbdQnrjW27BbKB4xUPoP6HWCfdBVqm",
  "key8": "2Hh5Zcp6eg6zDL4hFAad33GN1CiknG1HLEysy9otEjUHT6BkoPcfR7qzhitWVkvPGgqke9jpX1WhntYb7TgVgyte",
  "key9": "2k9cP6mewUi6rbXeRvYHWLRyMqtJeP9FMYakyHL8HYHcZX7WmDtH2V5wxoQEk61n4UJAteZgKGMVVjnm5dsuDRxw",
  "key10": "5qLfj9DwxfUwotFAnSdg2eaQYwLf7eDrofhpbVPKQrY6cnT6b7bpDrtkxiX4YuYxTa7YWM7w4R9LCg63BnBaof4V",
  "key11": "66xMCyvFJ4Qzbj4AmXx8hNEEx7eXumAZU52x4Fb5bZNWjXfZceDvjFdfmQqYqe2dyHBU9P1kuoNzeArT9FiQ1Ls4",
  "key12": "67Siwu4E9hJm3hXPDkqve3CDVdTqC2GhFwXDXAfkQtE6BEjPDfP4o386d81eKU2jmK8qj8ffgfYaokw8QVPCZPMe",
  "key13": "562VWNmTKxBPpXSoyacYhDpAnFVFYsXr2daYzzJ193NxgS4evr8h3K3eAk7tkMRK6DrgWhx2RBEeAXz1PURuvBZc",
  "key14": "2PWRYQD9E4ps1XSGK5nJUn7FBRGUmFZdLwR2fTKPjqeQXC7sEvaRJA4AohdKEgELSTG8zgPPDoh5rGJtbq8ENdp6",
  "key15": "3jtFaZfN3yXDDh8V6j7y1nQ8B2gX96WYe9Riwz6JtopJWKnYQtFYRjSoVtFDyBMtc1pNwkcjkAUTo9i9JhYsHUGq",
  "key16": "2hnhnHB4QWk9CP7iv4BSbkmtDxfMvG3hnDLaqqoGZZUWt7hND1znUJYG3osrJUZ5qrDoFRYWzKAw6jbRXREfE8HF",
  "key17": "5UFQr1vNaa6mtp3Xjuw5SovJ7iA8gNT28udn9rQSJW6pDECWcNMJDzLPgNkeQQqasH6vc35jTdq8Si99Wmpg7U1n",
  "key18": "3uBCQAwtMAnqzA3PUZH2sKDLA4UZxTCpdWJ78TeUAx7szH4tcb6iFDBLjKXQACBepmveXCJiKVZfbWUPg96BiBva",
  "key19": "33J52wEuK49JCtHvTpAomiKNx9BuPVeKAMBtXsPudkxQpJHGQd4QPa9d6SZdFWr3Ffm2ecLsdFf87ccGdwoRgh78",
  "key20": "HBZdHJKfY7XeGK6a45bBbAjgzdidFNH2VLRdXPDpD4rQmSSj8VKdZNBQ5PDJnCeqKV1TVZN3g4xxHjhibNLukC4",
  "key21": "62cnEa7hZWS9ZFv2cfJEgDR2HQqyEsx2GBfBx4S82nYS81pYJrMowh4kU2t4yHaii4zkh4RHKsWL1ip4HH7JBR5E",
  "key22": "4qyu5eT7Rb95DUK9DBpXhCsAzGPUtYeRnBb7Hk462TXsyDsyNEBHJpHw4c7oo1oBNCnY6KGjMcQmnE2WNWmPgHow",
  "key23": "5FhSrWbT4YpMgfG5SyJR4iLg8FR29ceDb5XxA6q6ER2LamXhfZZ9BqimvaAnxT2T4popSzhvwLd3HoYWQ2obiqj",
  "key24": "4HpKqTXYGobpwZtPNBPsL587WjHwV6LyF23BLvQAnWHHkMrrwrUavhGDsnPfGhNsUjKBiQDiYUsdEyGMEo3Np9E",
  "key25": "RMv9ReaQLJfJp1Cs29zGtuKSUvB2T6B3KxU4vTAXXJobBrfwdHpvX7Pp8M9BJu7wTztqzTYcoVGQGoEBLEXoA8k",
  "key26": "37gZy9NT5htQDHcKXQdG5rk8PsSyqVuDfvYjjzZ4nyeehQLk5WDtRXgsd2ZSj6h9HTxRdDL28Lotd3qzvYVVLkSq",
  "key27": "462fAFfUnS8mvwpFND4CECYkoZJuMgpXr6qFPXhydjYQdnL9nHGhBv9ysPf6TusCzoYt4xR4JCsZFEkCUHmvePSu",
  "key28": "2vTTYU8hQ3XM2NAjuVFc29i6Mnp6n9WkHDY6hHwc9kgQZvMZxCDhjV2822r9mNZ8rpTPR6HfdEBvxA3MgZVN49JD",
  "key29": "4Qf9parvaoVfC33zhhmP5hXjEgxMcnCio1VLTtPLZ23vRUcq85W8Y3NCGXKLinHon56LQgupBs3P5UeqU3C5XyBE",
  "key30": "2mbM55iH9RKb1uv4dhwepyVkSPzK74LwHGS3Nqq1NeojHUS6w8RVTbVkzehtaEjENZTguKJNAHSsAy5YQdUCrvtC",
  "key31": "4fgXUhPGaPn9p3C7WAiwwjrAFum2iFbtP6KoedRncs1A98yNcFvcFXfd7watfYN3PFkZbL1Eq9mDfq6vGG1VAGdH",
  "key32": "4d2r8KPekxDZokYmDk8wASLLLFAUbuWXs9zvEStdE5Hyu6ADr5ZbmUDQbVr5anT8j4K34LQcVChmZy9FDrkXWpSq",
  "key33": "2UzSBJZaRJyc31zRbcmLUBS3RKWshhLHg5EsC6m9dnWpH6Aougwc6XSnm4ovHKVkLQSLYnn9JXTgWWuqKpDqj1Ap",
  "key34": "66dePjfsbW1pmXgpKuayBmJbW7ePmRnCcx39MumQH98Mhma6M7tzjM8r9xGZxsqY86mGxchZChqk7J4RZMgT6M3w",
  "key35": "66iwmQdyajbh9HqyXxtpLzQ973db3XnK9g2oBYTDgQkcarZaXDsQ5NYhQEoiE5ZpAbVMXsBfuEYoWNxumDzYMSXC",
  "key36": "4J52HVJG49aTjWyQosZsmnVQKUKmcYTzc6MknHZ7G6MXkgJmBjBsaKAvUSpa693HHZ61oMoJZLUECrG45DhgHnsi",
  "key37": "5xCbPtLSprBrpcDCCzKS64qcr9WmodUDcZr9ortEke6v6nhtb5rDSyH6CDj3Z5iqXRX4p4CcjA7WTKLJK1s9ma8S",
  "key38": "5dzX1iu4yQr8H4gwdpMkx2E7ZRXCs7NpNDyy6jGU6QGr2DDYshMkLZKYwYSxLVvxyTL2H9C6GxfzHLCamQoRAJoN",
  "key39": "6RvW9v4v4nnAiMbbPYcHY5mwcA3NYDhjWysMX64DJfttoG6sLZMuZhFuo7jWM3DosRr8poXBJTUvAFR5Mg46wce",
  "key40": "4gB9hqDvcUHnawUrCBo855vqHRG6UDUAF2VeGjZ4MT77j91yVcHLaqi6ptfporABRLYFBxUqgBfaW8Pt3jrGgdAj",
  "key41": "ciDsCYHDACDbnDRVM9ESbN55WjLxRRbTfffmuYevpffNcN8YNZMcsHNJWfEUzzDm7yvPPAJM2c7sQjrxttkhyvS",
  "key42": "ATEQFGLdjwrXwNcm7JY1VtBwQ1Chbdhr4fWHjaqXKDgxfi3Sgy2kscM2Qh73ymhGQL3nYe6VHNE5euLqX3xSkNj",
  "key43": "316FAeGg3a4pH73YkDNa7nWAJrhb2KaE7uzEwYSZfuzbTEQ6cf2EJZZgSybNeyJ782wUYEABcibwKKFQq7U6EsHa",
  "key44": "tDTMuDoxbg8foDFgyRbQTPxgiMEhQSgWyiHwsFAQ1qD8JT9AyYNbxNLjhc3dYdpsmkvzArhy1f2dJ8tK14RnMon",
  "key45": "38YcsfEbp2c6jdo6YZ8akwuoL5pMV6Hc965aiws6yE7KURJxSa35QWKZXR6xtmRTGMk1hiodKZCmWaQzjgRguRkH",
  "key46": "bZnSXTQSZt6es4Cr5y6Sj3qf9AEjvpcB7Rpxz8fyQHr9YUgm9Bfogk3eWRUfw2L25vrKKAxBn5dhYFoVwTGwPzW",
  "key47": "ymCi83BJ2B7hJm5652gX8VVWgNKydtkfonr7cpPNXLZNdugPhTyqtLSvBGPcofMGvQQ4MBxZuYjYu3trKufegot",
  "key48": "2QJiuHMMJB5LVeUxybenvSyZdR9pwMaWoRuA1fu6t4kRHarZsGAmrASFqMKPoJWN4G8U2JYLPnN6Kdeazj53JEKT"
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
