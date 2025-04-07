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
    "57SdxRt5gsfjEUhSadwKKxYGxrHW6s64YFGxdM52fUt4AbhR4JwyYFvoSrCRSLTJJMVmkU5gBHsz7aeKcDLuzpvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39QrNAdHu2SBoWhmiZ4jFEaF5ogUyMVGyZXn5vAoe6umkrY7Dck2jzLBihDCLhqV8vPhd7y9GotzhBSc1dJfkGBw",
  "key1": "3V3oxTZVabTKFn6whgM8nFSZRG3obe9wQVUioPo1CPCRVrYGvpieQBfJNrcBWYccZkJuD1AsyaL6EgcSBzezRLnD",
  "key2": "5UW79LViG1SR6FszJ7QNbsVVezf9871XhKNco1qM8xuV7XmAZh1yz4zz4PhUDpJ4CjsKdXArkCFq8xE8nKuibLdR",
  "key3": "5WeDoPrsWyJSJc8cnenkaPBHdFJsRR1bnP1KVdkeanmFdd532qAu5wUamoMNmznyUd1uNJQyVSRK9vwVeFGTKzUF",
  "key4": "4b9qLMY9mN83k3UccWctwNCNv2jhHYpSiqoa22FGTa2TNp4uX3QoFR6j4xiqSPznLLcxjuxfspXyLj9EVMKV4AWE",
  "key5": "5dg9fo15JEcuXNDAUdLBQnx2vCc25wHo1h1RexjzRrqcqGQK8ZLcvqsocV3kMUeggJXRUC33FAiBUX8XL39ifpiQ",
  "key6": "4EwZuaRDcuHJUziWLufM5EfMu13GrqD3gq5V5ybi4hqmC6eAF737ZaMVzCJ2rb4kt2qNCP63mN3kWT7QmwgYbw9p",
  "key7": "4zaqqP4KNehZa3PvGvf9iURMt5PhFL7eWVhhWtwyCD4c3ausBPfwhQ9q78mxNHGdMdy3rt8m71nBQoQS2PpkEGhm",
  "key8": "2AoFKuWEWfXBfW24cVhAnZc1rTHtTJTdJPzE7qTMqcbVeXXuTEjPKxBvm67geDJucccyNC4jRiVVYeZgv88C5z8z",
  "key9": "5nS54Uctd7rNnNYVid7h66wEwwfUeC97Ho4ZMa5B1eRDktRLRKXrdkeD5oBW1Ti6u2pd5L32CfUtxZTE8CUKGZ6Y",
  "key10": "5YHFRMVVszQ7qReNEoQtsB8ANAXyWojmd9k4jQSxZwWnxrZHQJnBRNHgvq7jm95Gq1eradf9kEKzB84NsLYDx8K6",
  "key11": "2QQhLBLuSjdEjEFVvSmiab4ZvXrjg5FWgEZZ2nxoHTxn1AB1mcXXKKbkwVBErufsvmeKcaMLm7jnDx4ow61vJJc5",
  "key12": "4xmhMFxd5exnW2F3vEkEjB2jm9Cf61RwHFWMHE8yWPcAeiVCzXgNyd8ybXgCXq8wqt4p2NpcHnA3H6pxSPaMoRzj",
  "key13": "4Z3Ce9AitxPbupUhBTcfP3EZXY8j2LVRqHFLktCLj2Pio46atDhHFZctDQqM7BGVeSuBSNSMM9z4V5DmExYgFgCG",
  "key14": "2gToseJP4UQsvACfBupZoTGi3KugDSxiHAdungBbVyBSbtTpswGCw9ngRUo2h4cVB8JkTWdi2dFgqRY6BYWWn2w1",
  "key15": "2eZ8VZP4haxrVj75SusbWaPhikiKGuXAw1RnVQN1DgewdcuJTRSQeXGobDD7Lz53Tj3UBgxebAv75HD32673dUhX",
  "key16": "3jVYk2GbQqgDZY6qUjT8tft34kcWQj9WoyKNxSsdhQyT6WZ2a4vKun7eGvadGQJhGLSmr24omyCh4LXTXUuPR4GM",
  "key17": "2WsG4u216HPB81C8rzVLrxQL29yFtAWjKU5rK6MkPdoWKjJTWeQbuMzWZvkmQQoBBo7PfYA754dgQ2R2bcWq4Hht",
  "key18": "4Viv9rHc15PDvUcYJMvedCPXjzF2EsiYcYQyfDR3zpPJJRk7M8YmdAuqXHnm2XLbG6GWZUBSpnAHPTonNhntWSw3",
  "key19": "2CZDiNx6dCu88bFofaAKZfXimqfsYHDd6tnruscdYj1PcqByeRofpccLAXs6z17hKEtPGajGue3NnY73716jTLjS",
  "key20": "4cSGp26u3Urf69am1UzwiotutJdt41dwLfF1zAU6o1DeuTwqnZq6nA7SCex6EMCKN5G2UDnREUtaNbZAwGDtyZij",
  "key21": "2y4T7ZAoExoiY5Bwtin5Sh4iVy8qrHzt7hmK1ZkHz4Kc8P1uw9Na8FvnMrC7mpn39PYcZBqfoEQy7JsnPX56WZMX",
  "key22": "4Z8V3DSDnmVE9tfZwAph3W5mUQugSJR8YPVA23ZaByDSeaqvTntnuzhv9wc7MAF7rqbo1UMWVskUUYyfNcxj3kZi",
  "key23": "4xAkBQy5pLLDRvpxa7yvo6ZKiSs2XAPLciLvSvGjiWB4mxt5EsZLGxg9GWbhHNE9j2nuJEyfT4EMjdSsQ6qoQdyc",
  "key24": "2UsrNeoeSq7VfxhZ3o7gYrCi6RzwtPRMFHaUUet5p6hfgBk3xaXorNaa63GhxYziMKaMbDYSWfDrmV38ycAjjrUh",
  "key25": "48Qbhv7cUFQ4d3fzyDphC3hJ4ko6bZSxBeoSran5cCMTqUecu9q4RgGqoyMqaKxAcKg1RoKmXrTWPExa1RhBFmGf",
  "key26": "AA6V9FgwBADDSVsG9BqMukiQasusq13VonPiEgY6V3xh5R4K8Esxvik8EtENDF7DZdsFHd5kMPbFTa67Jd8DZ37",
  "key27": "3oSjk8nbdN9TyeUoSRmm3K3R1ppL4cA1ZVudDCD8N3VeNK9L5RvYYq6oGbR87pVpsNYuqf8kDGhCGr8NFBb2UVs",
  "key28": "LKxwiTfT2XSbPvQ1cJhR9Cr2TePnSXuXx6VkAi4M25QuE6LGrmWewhqpjhFdEXEMkNMHnoaVZiBsjoK7dN98sWt",
  "key29": "NvmMSMfUNWPnpW1cgzpdiybZnoEY3TruUkHxqmJBJ6zsD7Sg4xBnR8hz6McnJo4P9LXouDXwXGs3PZ6YMZuTTMH",
  "key30": "44gkKnqdBFnX7Km4ZHQZxuoFUgqGJfKsHUPXLM9dGRsuWpvA4bU5KsXfLFsxfcAZkWp8ZgEpgfAsh4Kec6ZW8dyU"
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
