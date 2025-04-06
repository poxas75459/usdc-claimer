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
    "Etbo2pMzrzY8cf4rDFX6P3sPr5d2J67gEU6Lw3eEkhAvk5rh2D8VwMy9b5E4MYah4Lkfph32ZcUujD9qTmozAiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ew3pRz8BTGn7hSfRKdzzAqzc97zbpLwooeef6HSxW8PJDv2Z4iuiufJSESaoZw1bYdFMFjdyVKciaNAPuVbypyd",
  "key1": "6UKqgTd9qoxXEBMnFYzcG2Sx4TWirKLNJLbEWReFKTEpod7FSphEKy12qHEJRUWMvezsoSKTL9FYAtuwzo9fRfU",
  "key2": "4eebrn7a2vResNaYSYXftMo8Fp34bG14tyQeuvBj67F2xuDQpYYsrbEajRgJkeQMvBq93KfVF5UizHB2NzUbDZ93",
  "key3": "Aj2i5RfZpozu6mpWKtRq5Y6sdPRFKsbU2HnPBDZZxUdzcnQ9jX4q4kNsTDv1ivTUGU1RwpFokUsVyzWAJnMhGGq",
  "key4": "5hzwmRLkRQS4ZbNTem9MqsPtZVzpJubGtCwLrigfoaw52RoLxXs56ivUUgS1QCUp7UxQ6QY5Q6BJugpZ3jaMwVTJ",
  "key5": "3n4DMZrBNcCKSyXjaUyjngpG4AGRvk4Ym2SKieteAYPxd33qDRJXpXaor2a2DrzTezgtkwZAxPnDnRubd6wfgRe6",
  "key6": "36iAdSFESJ2HSUhrg6tUqu7Ws5ikiZzsdWFe2rhR1qy8RNEGkVqhHNrNmhCcr6Bs8xW9bFxrVMBMoQdBxBbKrfBW",
  "key7": "Yim6Lj1Renar7jP1UZS1pHJGpR9hSdEXG8ztVed4UGDFzbBQ3cgz4icQs7hk2zfBpyNSddC4hmYqvNos6S6p33M",
  "key8": "3uXG2AKZStzDzCXrLvY3gmBMY3cmFwHbuekdrWuMyB2DiLDDwcsRVZ3P63L5h86eHmTppDVjdmwHqGG6VKwrLYD2",
  "key9": "67Eafjm6EAiq7Tec6qMTAWFTjQnr98fLTTn1n5R1nRaU66P7N5eY4Rnjq1V9DkfJanr9mpzGCSzNgyKTKh7RFy5o",
  "key10": "235ksUpxx4QgAua5cTGSz5MdQgFDr3H2fUFQJn6RS5MDxtSZz5Rgbn9HhzJzX2uiTuSv6A7TsEetSSXDw7F7HitM",
  "key11": "SSY4Hb9RkNV9yQsYEjbDgx3BVx8seHQARGDmBQyEgG5pnjBdcYbsUYhUd6Hku4Ke2ehLzCdx3pyvbdGb3cM9Fuy",
  "key12": "4McAYSbGDmvEKZET3m23YVpoR4uyEBcG6vYZVLT29oe3S2z2G6jcecRECMw3okwjHortfU22E3E53Zte4zHpKBdw",
  "key13": "67gXV2UKsdJKnjfJscQqb5uPyRfpqu2xSahcndJfMBWQi1NXREUNMeiWvFGi5ntAD2cKbzhJhYXSDnJRExsJ1VvJ",
  "key14": "2crbq5CLRoEdhuDz1HfCZUdj8Kp8EVPLHV1CYS3d4VBEkcPon2XipGQap3Ac7nPTopHhapmo9QoWCMAPh6Rz2zNx",
  "key15": "5D5xHjdQ477L83NRDV6u8fL81Ew6nPPzdGXq1dt9ekwN97ci1Fuf1aREPxFMkRML7pA8726eMX1wZjrihdqWY6eL",
  "key16": "4mknmwxEh8WnZjWL4SScBTZAD4REy5wPc7K9ND3dwQgq1QHL3tB8ziv3k1m4nd5HpRvoiZe3x29URrULoYxivoQZ",
  "key17": "y4p2J7KfCCjYvcxJrd4tcbXfm4aYjmvCTrmJ1sWLXfu9nsjjKGeTq4P1gC2UBHqLLKCjV84NoDhQ9CPoLPxgS1M",
  "key18": "57xD9Qt9DJDLb6HMMqTd7Eap7na35Lokhro5FA2RpmrSw21GpwohZsSZAVwDUvecY5b26kcxSyS1Z323VZVbGzpr",
  "key19": "64LWdrTLrc2w2k2QALFWgTA3zfCfTGGhnwnnP1uxAfSrFPgepdvi7AbaJXCz8eJw42vCP6rkM1M216UAVVuHEWsG",
  "key20": "4RW1nuiMSe8MZkHmFZkfpy2onNDT1ABooKePpTZn6MsSmcAKYA9cgSJp4UJrenCwikA5rTBPovHeQzFgkbnb6dX9",
  "key21": "2B16Lc7sGy9ZVtCZCBgDu5g9zAsbWEgQjzJW4J6nPftP6cNgKCEk9MWYmNfjxq72K3BzAAxJifTe2yDW25hNwaae",
  "key22": "5aLeTKgfbALuT9nDdNPaQ4nKAfCe415tGZBAx5qo8ac7KDn7TK5EAXVeBWVxahMpJqgw3m5SPRLJu1yKEbKVWaQz",
  "key23": "4JU4cb2wm9HEEmoYtXs85wzZgos7tmBGiBY9Smf3gPNKCiPRyocEjhd16EUDwhMxQCyeUSWRopVBfj27Roaoj9nv",
  "key24": "5brvzWQon6fkK1xeUt86rtLzTgvsiAuGPu4HxT5McJj4pmETQimN8A95Rmxe3n98TFrf6UoVWyK2KidLkcCMqFfi",
  "key25": "4sen5uW93QhisX3iHy2f3YXWDZ7rnnQwTAqBTRwTJupqYTCFxnYgU5jiTmWcSnfeKgRfxh9vV2oCDJQvEdnSLa11",
  "key26": "4bmKBJ3n89Wy6twGpEUwxB3Aos9rUTCKgGW89wJQbsdhUvgx72DG62B3UcLdQtDP21mnDYkLyHLCcTtHErcfpFZY",
  "key27": "2Etb9zEaQ8AG9MErhmZBL1ddsgdV2y9KCmH2xJsAd6zVFk3q8mgRTvmBeZYdNTaMmVQh3AzFQsgkTn1gZ6S9fLdL",
  "key28": "4KX1pWQnKQnzUnuvW2FBQBdqRLBKFZChQV33ErCDVYsEQE2hS9R357UFNZVSFaLp8MozTby6ZW5zgDZUb7VDr8q8",
  "key29": "4WhiGjDSfH4BKkBJz9FYreqEDsPTvKFcvAMBKZuZhRbbbKxpNG6AWsofme39zC7LV6rQSLLBKwz8dik1KaXGct16",
  "key30": "28Jc63iUygNbc3KBeHcmANmr397pbnJfksxbFFUMn72RiHBtfwW7kRGKEG6CAChZLXkri5SseobWHhaqmFkwmsBR",
  "key31": "2dBkQfiydQkTyiVqqAywHEXw2SqB7LitqSZnGv316pNR3dBFTww892BxD5T93oXt2ZnAtsGFDHi8fsCcE6Wxexfg",
  "key32": "4jeXV1NUoodz2FWuZHbUYouq7fekcvqdXw8Uvv2BFGvu52XfD7xrvZqQzL7q71VZwHdWzjd5mExK1aN2qvPuhWy",
  "key33": "T4tTXrnCbCLqCWG13nzjcQBDRQKes93AMTbrtqdzDFQksUzqqi63nKT9EdXD9MQcdVFfqE6buvnsG5qyLZpVess",
  "key34": "4z9SzkpiNadL9dgbwkoDsbtFiKBTKoFoFX58L8iM5V9tqQVxcJcPSzdwDqRjnGwcQgS8PdQuwCyK8J9zkKxC84MY",
  "key35": "2DucxBisab5ZoD6LqHy2MoWWqoVQAjZ72gemVrfYHbmbqmFTAc5ig4EBpwox6YU41QVYckH2AHPq9eF893NZ4d6i",
  "key36": "33A6EEtKQNj1nHZfyLV6SEZ6LtZ1nCB9D4yyCL8iRBJyVydLeMgYKUPDDyktBzdpes57351PkxsYrrV5ihDfuPzx",
  "key37": "5QuryfSkzGrK3HbW2gWiyp242MoxEzaH3cZeQU4U6b1hwYy2zDXhBdmdkn6pKQKWxqgVF2q5uWHV1KMEevx5m1Eb",
  "key38": "4B9wgacryB1Q97iYppxc6SCirQNM2boiwpiquNiFWaw3YwFSKF3A5bdBztSeMyqwncCCoswXTZ7LdSNQS4imxRoo",
  "key39": "59JT5yXD1VpLrZkoRj8vWwA6GUZtdNd9HTzME2a7gF8Gr3W7vcaJLH9AH58BtZ7yLDwaTLQG1RrH9prWvaDfKxTx",
  "key40": "4sT3FcNyL3d8b39vCzyaUx5hVRvfRCsKKADXC2kVpJuwaNaGZ7CtvkMjLeu2zQdSwXf2K3Jnmr6DprGdXjM66Bt4"
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
