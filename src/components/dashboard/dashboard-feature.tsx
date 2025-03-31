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
    "4HNR4NzGm45Xe1kRn7GWNaVxXxHf4ymVU38WFdGZFELYXzHNp9jJVdiY8s6n2oSJCJitYUQa8gM3ftgCxmjC1Ww5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j2sctDep2uETeM9rPVSMMTCx6kAkmntMqxG8uUdKPf2TFSTfMM1HsULLV9tFhvM2Cx2Cd3znCw3N1LKfE3ruxek",
  "key1": "5mVWqrbV8AHDstcCNePwPK1gkozJSc9zF3dSZ2KKPosE3QFfTDmj2c3SU1GBZxLoSBJH3VXUoxpjJviBxHvMGQJG",
  "key2": "5cFwzND6ZWPfkixQHQaPsJ7pNsfL3yE5Btze8QnYiaVBTL6KHerJN2dn1nc1RJL28zeqLndQwFXH6WmESLfVcNc",
  "key3": "5zJ2Wrv9VpzyXjRLavpKznRxEB4dXkPyq62KXZQmpX6Bg8ndWFkq6mdoHY2qoLA4uD82JRCKaxqQtF1FgyWC2X4Y",
  "key4": "ZYH74AtYD7vFbuzNVNTFFUDjCgMesfVbNKSwaPL7cz12EkF56u5S27iC8sgKeK5LQG5STN9Has3Ju5MNMvtMh3A",
  "key5": "2KPzVjv9Tttzd1DPRu8qUG6f3N3HPLymGTXfyR56ycnZHwFTtTXZGoLvdsgr3wJnhK2wkXR4h4166wKikUJaKaCA",
  "key6": "3rzz1aCBRupMa2JtM7WgXDz3whHJF19b1PnvguBiDfLwoNcM76k3CnwTh7y5ToDe6GWh4NardyVA4XNh1b4nepxh",
  "key7": "3q36vNWwFHesoi8wATn2F3mLcUcr8P7MbeNEKZNAfbiz4bozvZSo4GXywZtfB1xgcaAhfkhnu4x4tG94K7P5jH1X",
  "key8": "2qhEWwi72bVAezKnFhs7V2tccnqyRmM4wMweWFY9ojKMTga17tkj2mPiDKCJAaHK2z7DVS7MML7frKNyUEeYqLVU",
  "key9": "3nGripxqmRBt93jgnLHpJqX8CyMQKfnVpbiGNVkZR1D6R7Swz6xMrEsoFSAQtyEDaZZWuZLb28rtN3XKbnJ7siNj",
  "key10": "xjVfQDCK53GjvLyUsPschX9Txcnw6V9G5n1s9zB3XjxefazDRLdgisLs21AkpMiA9efR8bZkUdF2f5WpLXaT7kP",
  "key11": "2a2okcqTwBDM6iSkwXKQA9ict8iSY6GGuAe1PwjUBuq1gg1eJGZ7VUyKACRbyf53Tbm4mvT29RUQmaSjMseQExf1",
  "key12": "7qjVZq3LQsYy2DEBQsx9e9L6pYRdiGAjkfJQMGmhZVcU6WSCm4e27fJ6o2WSyJ2sNBsCGRe3D3n7FJTXcFAtNZm",
  "key13": "2kQ3W2MbWp6wEdMwgDjkEu4pVXUjCWUg6aRn1GfUhabkFCMWbp71ukVnk2mi3vYsncF4z6ugpTo8XzPeUEv3qbau",
  "key14": "3WjEMxXJ2S9cnAU88nQ2CU4asCQXK2pGN7bjFjCk5ykmDisMJWTTQHskZBAtnRmBW8qK9CrzRN3Yaqyy9E5TbRrR",
  "key15": "2UhR4dRH2KHmKzhfndiRF9Po1N2GWCqdKaVbgJceqY9kAm9EAGVrD1jB1a1N1oZhsUBJ1Rrku1KT5eaG3p6Lu19W",
  "key16": "2pzjxn1yyrbJgNf8NwmkNCYfm5tvHT2tm2b8gCrpV6WBzbieyeQMc6op6H4EAcHmsUVULdK2QPqu5aSW9JXcYkV3",
  "key17": "5Env7TXbg9vVu1sUkSgiQftACp3hLuKe4DUk65K1vdtc8H9N1FudPCfY3nguw9Jp7Q3EbS1geBmeSrLX1XjyLkfT",
  "key18": "548cpv98G3NacBRNP8in9RjDFi8QzA4QzAvVyfEdZUFZubNskkYraVgaB5gZ1JH2afHh7153rjyarfuAuPYCsEwk",
  "key19": "4sa32v1s98HFnVbiAs7oQoUvVHhgG4rUkyu6GRPo6ZZAdqCC5mobH3yfzb4sVHDtKm5cTjjNDnYAawKUhfNDM7sY",
  "key20": "4aXJqhvh6GnsH46BNatCHtpZr8EkBjiJanQHg5q3Q8jVkCLNdmr4ergD3LkgHD7u85Liwrf5WGBrVS5yW5kjUiqF",
  "key21": "2KCJhLipuCr8jRkT3o27SzvjLsqhpX3RKmA8temsr7S4pq5c2QnZw85dxEGxiUZKVxNWxSFUqxEQ2AgRufeSsrrx",
  "key22": "SckaHu9tZoMTdLJNyaEz9KcpRUuzyTchvmwVQMHMUFJzutmDWMfBJRqJg2jTeteBsmmEbALVWUQRYXHk2tP6Hg2",
  "key23": "xAxYJeQkuwaP2FhqkEzGuiVaQiDiiN1ZjGzS5QqKsxd5otCyEj6JZMPDWm8P8eYtEXdbDgQEo3iABgAybuMixW3",
  "key24": "4eh18yJ3UDBNK9J2ju3casLSLPwHRri5EEwU3WQEJgFd6FK7PJS1vNLpyBPutqrkATwRkX9CZi5XTmnbP2YxsAif",
  "key25": "5XMX67j22KfCK5b78VYP2tAVcvGWBzJtjLv7iG7VRFWKFScUVbGjnULutBvVWaiebkibXpWD4ADBeEnRN6JPctcb",
  "key26": "63qjx9HZ52Bo24VCL5ujZLGxfdBpePJvmnBiZ2scvwF1t8Yeo6dth27YqskZXv9gfdQAr1ipVrdtGeyYbpRSTgUz",
  "key27": "2jNpzbG7wsbSjSXN7GqPV6RFqNLR4uXnRZgXggD3UeqmhysM6rcMnm8SWuh2pC342L2nyX5XTjp1NUjsqB1qb6r4",
  "key28": "2Rb8Q3HPRdeB39uyQ2Yvkrq8xY3cKQd3XSSANkGY3K3fN6rGHvEWgs2F1qbR92XQnQAoco1Fj4qQdaX4wcLBy8gp",
  "key29": "JoArKuJibV78AemEgydMFMNnTNCpbWLHWCTw2f19en4abPVj5v6gKBgeif2NnF8v7tM2cMRUce7KiajNLSrCwhf",
  "key30": "286hyqqwUZReZ6KBezQryGZAFvp4bYQZUxtNH4oxpZaJtx8eYZ3zRYTtir2E7CvMxdRjt4r7EtxSynEkQJ1PYjWo",
  "key31": "5N9RG7cCFPc8j5c4pFcyH8vPzDG87ztfZgBSeiqFcWK4vzhAX1W81q9hqaiM3jMtHWHEdxwtZG6gsyPzRZF9r1yM",
  "key32": "4b375FNpMw62QNeKSS2m6HqiUmpViSQdbnbE95mp2Y9Pfgg8g4YTdZfAxkgQVCXwdw2VDHpbHiDoS4wZ5XMmxddc",
  "key33": "66sAgSixDMCao13DKaqKNGXuyPfqMttRuxbKSKoWYHpS9NrKdakLSNxn87mQvDFkrrEJFFp1zTyqV2JGZrc8nX9s",
  "key34": "2FQiBU28afhD6qKRdGhmP3MHd2Sw8wwqsT7iWy9YERvYaMUPQQ46FDXUJqMQUJFPzjscvPUxrcNC9vPz5F8HjpVi",
  "key35": "2p9oUWKc924YBoXgpxb5z43Ppo7mDbqLyb6ARWRnQYgn2BB6pT9uRzfR3bWZ8LXbJkqgosNiRHCKeYAaxT57zMof",
  "key36": "2dW64PPqFA9hYytXTL16V8rgmYkFMQ1NUd5dQ7bp4gVnXG3WyBvnsPKBUmVsgbijVw6xdh6S1U1KNXgkDAbQAUDx",
  "key37": "2FwMbGa1mTHNkrzcwSbMLgf6d1RM2U3ckcWfssGrJcSwcVkWtZhprA2KPguLxTwasm1q8PztvR7uGKTVePpwbzT9",
  "key38": "5iiHb8V5Kt7xaEAjCmJnh4o3M4Pp7Bk7AL3Nwzxwn4gLUFojQQx5hMsDypkv2yrBVXJParM9cV5jkd26ch9maNL6"
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
