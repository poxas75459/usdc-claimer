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
    "3M8uWtSUAXVps3nkCS87yJZh8GjHiuS4xUrFzSnvgpsDnrXfh29pLWj678iWPeMNajRZSMVExCcsPFED6Cf4Yxs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cxmXF3Cqx1V6NopZ4t732QqKLcNx1sVd4z8N6ttVdwCQo3RR9jzDxUwjaCYLcFExG7PA38n8QUaDsL4kwhB8bQU",
  "key1": "hgo1Fj8JDbVhqPKTEXbUdHwkj7yCu3Grjfgwd8rW76Wh8Uk9frwFvQkAw8ZUkpNbWKiZEzBZ7nWRWJGh7cf6bB7",
  "key2": "4RUrBu31CTJkue7EoL6AoBf7uBr5uYFe7oRo8m3uPbctBAuTnu81V2LhzfF4xjDvcfxRyEzSmJ8pniK137n5yMGQ",
  "key3": "28zQGgRxEuiuCTvja2oFc77KksvgyhcbCqqznFb7p2XaRCWgvpt13h7Ynbt6aNj9AYDj78VdxFEz5anSypMjNGUK",
  "key4": "5PC3h2mjBz2rPcgdXu8Uz5s4MJW6N9NBVkFbQC7VtbU79QxaFQzNeUdodJBrx93tzryoHjAy7Yi1p6Pnsc7C5tp2",
  "key5": "1A2etqtdqpabuhuMtqmazz64wK4GMeTG9eTVVT4o9H3LkQ9R17jz1LUuKbeV7hVD3Fgkgu1SYsThbZwWnao2HbR",
  "key6": "32ug76F8fhR6gDitxgbQtjNytXzgqMQgZkcYvVrigmRtGYX5c6fTkt88q3T2cM9NQGXoBvKPQKpg5c5cYE93yQ1R",
  "key7": "3mHXF2Xbx8N4aDCDxcqGpMTw2t96YMa4BDhqsyg8jbnHvxwDxVX2jXhjkxk8pbyFuCeUzrvs8Upekay5MGUwVTGY",
  "key8": "5yuSKvRZsKfXcXQcUYEjw1n23cavkmfAF6EVHvNziLCd5Cu9A8o5T85brfcCkae7ngb1wo6SGsMmbpq2dgUfCrQq",
  "key9": "5AY9LV4QMVBA3bpk3zuB3oNvAorGbfLhCECmn999xytHSHZDVDEPXjhhGhgTrFkfeWRgXNnbC8ryvt2WmMh2gTyv",
  "key10": "hFqTg4mRsr5BdYY3QNNGSSUMcGMHathFMnypyGfjRV5W9GXUG5SBgRwrhYrEa96PuPifW5FbryGez5k5KN34xxi",
  "key11": "5pM3nUKmdXtLoZ6Y9z4WGYo8cbh226QaPif7uptbrZHa6rCUyc2SUCa6bKBbF3BKFi61qz6RyUAezKuhisawCXef",
  "key12": "31Psz1Q5U7NzekPthEnU3HZXKGjop6ioVMg2EomyXDhDh6TSDaXYKGujNtmKrZTjFMiJMacRRnV1qswySzb4nYqn",
  "key13": "57mfbBdJsVQd5P49hPtCRXAVUtE6QVAdgnUvJRjJs9PMKEnThEkJzgm2GKsyLBepGcLJAaf6nvqmW3wVKSADvTnN",
  "key14": "39UHA13KyZpREExp4nU6FqCAiFzRWpp4AKXTA8Hod2vyKCeDBbsBCRjH3jyymH73vwoBML9VgyNYP1UYYAmZteKE",
  "key15": "sqqwchUoo4rmCTDR8QQ7BaWFMaUTpMTbT5GKfMe6sFt3HGBeyGBdXx5F5sE5MU81xqmPAZEzRqTemzX9yfJVTrj",
  "key16": "5c9zE2s1Qadwd1kFxHMLhPvpYkRr1pDNNY3aY7YqeYBRw9cjuT29wNNNiDp1J6b8pPrQcVWcabmSAhjKGnMk7nrs",
  "key17": "624szL9ZvktWs69r23U6AhEm9k7mGqFBYBpxdkzKQgXeybs2qa63oLA6y51VWFxSUV7jNehmVi8JdD96oksud8ZG",
  "key18": "2tpkvPd5VJeSHw5UMuJFrmv7zRDqD4omg83godTrxS7CZDqajZJv6nRc2PCoofQxuwCKntaCpmDyctUaUv15s5aG",
  "key19": "3EwP5t2UcRXpzkXiQPVetsaVVdETuyajDUHjz832pc3okssBNB3U6hQsTC7coqwHdJhVgu6DuCNuYSvasb1nwTyY",
  "key20": "3JEVHAxurXnRvfYWZuefwSBnBQDJ7e8csTRNXDnQ4XZhfTUvyZSLcLLPBvfxRFHJAGhSenaRg6W4yk2GzSLaaswG",
  "key21": "4PaD46bjtjUYoHjPvXGRsrEAfo1LRwPhLGJy7bKQ6cDCrssFsaLazdX9ohUE9efwsmbMqrJSmEDjqpooQHccLTa7",
  "key22": "2ZkjYhsDcqRT6VsNBc1Kh9F4PZq3ftj9pQXsS98uA58Cd4KuuDECzaUBxc4nkeDvncbLYFzntmNanci6JV85WV4j",
  "key23": "4qzzZsZ9D4tv8huzv4k5TgfDE6hciAqZ5iWqBXijSCtrhKYfNmWDiNrPgdFn5TgZKdVogYZZP4T6EAJFsPeTd1nr",
  "key24": "5k1jCSQ5sHASiChGQNbvZxSomrRfPUFSPq4PULWvkPwMQEv4vbxtSni9K4yttTmVstUxWJjPqR5RABLKC8zdpvHM",
  "key25": "3pZ89xpEo9oVmMiDzub9pwyDWu3P7ZsiNxzgq4Y2UpANmTPD3aa7vjkqUBWjMQpDEuiYKDdP32Rdf88niyJ4tNnB",
  "key26": "4w4CmFYv6zHW2agKYisoZBEKs3J4wy4NtcyGm8HmTd2bGpGNMi7zBzMZ4Nqs5FSCWFXZ1s3sNQCHHgpHqKrdVLaq",
  "key27": "2MZsEX5icqtECia9F8XgzSWeE26rNeaR17t92VCyMEETHTAbR9M3irMt9ThPwXSkqGv86uXcQU5vuDAK5WJtRW5b",
  "key28": "5frxWWrVtZvgxcGhhrenmki6nMSjxkLFVSyUB7zxDYfhBEXiCgEf7UgJpaWEd3rTzB98VZ6JYXyCZUYiyyfSC6cJ",
  "key29": "32SPhWtXugWjXs6aWRJknFRHBSm2LNj6jKnuYgzjDrp7EYHTr8gXmviLYvuzZj1DXBSaYqrRmTfKYhQzCY3UDQAj",
  "key30": "3wWExbLGHYmMER1mjhPjFVuBe8MaEbzzGTHuyqbLvHK8hB5TgmNkoxkXbAHLdJHHAk56SVxLc1jtK4WL5vqMW9Vm",
  "key31": "nCFArWwXV9Q1iDSQ1dMiYeCKCUP73V5HeAKUHkeRUYEuvu94GL1PFYiFCjTbZ9BXmEpJErDELMXAoxhFoiTSZZ2",
  "key32": "3zR1PctPWAhM2UcFH2UGUkkogsDBLoQ8xuuELbzTuU7PwsBxPE2rXZJ3YpZyiGPB4o1iCLvZoWKMiZ7NgdSiKxaD",
  "key33": "27sn82xTd9xvxvnjjQXjEyEtkn7GcQe3V9tAk2KtPBWLeA86hGzNVuPVCAtavTG61RmQL3wZaxG5CUgbuhR2Pd6X",
  "key34": "pvAMDSfRY3mMK71oHpVL67xZNKPuHAtSD18jGRqCDQzMJiaJKzmhQtsqS2aUydC59AcuziUfb4n3NKGT56DTqUS",
  "key35": "3v22LqE6AJnTHmx1mwUPmgSusXVR97yFF9BnraPM6jWwgFKnRjd651uxz1kc1HAuvaz433SZ2T7DKrN1vWgiiiqi",
  "key36": "3rJmbY5docNRpcM5gMjnZqMqKDobNd2BDox7Lub4xptUBiWQFUXCUb9E4bm1BqhC6mVoDmhpcSn1SCub6K8YjWyY",
  "key37": "3MDBaYEQWDLqJLzDe5MmR9hBMG2Xsemorkr8rHrHJVbfbisUyNWxomoJxzqFH3FxAh11KhkKuaauJXpbpyTW36xS",
  "key38": "LcrHEzCxkirHd7t4exrpnDfgEpJLG8PpBrQhfe86d9AMhhtXJQR7qvQp5xxRsS1k15EcrLd3YUw7Fi7PK5pzs6N",
  "key39": "38JtFx7UZssw2ygsH8f9CqrtSQq7MQw2sqqdDAoK59UrexNs3rUzPfrNVe2kddfD1C8EmHmG3oNkgd2erYGd6yip",
  "key40": "5fq5GuvSEU5f7B1vpoUJTq32Zy64fBaEedrqSyuqu6cjfjiPczvQMZsQ98M8j5XAVLBTfVMQPkAmzTA7ZRE3nRkc",
  "key41": "t5Zn8tLKfPSCJNZBgpyNoaQq7AowVfAwYrek84ZiwoEeG6xUoFbR98z8i546yYZfrpJQTe2MqsDW9fVh8G5sktn",
  "key42": "67Wd7m7GtURcK1TJ8W8WhDF7TVD71L4dt6KwTtrZYQhmqDW9Mw4jKyNQie9fJm1iREHuzQj97e4FiAnBG7UfvgBL",
  "key43": "5GB1tc3uBFhn4njrPWmbbcgwyjXgL4EERqUZmZk1B5ZiNn67q95nfaD8t84Q5vicMAECw2BtHqrVDzbSbGo3VpG4",
  "key44": "4qkvTw9akNXNeBqriy1fpvzaS5GKWM9q9cuNNRxGEh9NFrVoEhYHKaTGEd8yvwAVPnaJLhU3nF2GQHB3KHDXRio8"
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
