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
    "5GzRaHsBxqB2DysyE5NynDctGqHdamyiQPKZLMtTghNzHb7qaoeZTqMygYqLwy9ToPum8aFLp5ajo2AycFThATJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Hs78jv6Gbq7pweq6DtT1nTrhe7GU6k3riiGVhAoBp4D41S5YLJ1bbCbogYVHQvciJGx6YivFTjE2Q727J61W69",
  "key1": "RaL8CG5aZQJ4hG7HEMtrGyo5v1YP7Xus2o9cRWZMfXNiM2Zr369qaNzpGmNaXss65F7X5TbjQ1yTXPmquEFxBZ9",
  "key2": "2znc69HTRLngPrhLbj4pdyXKmnDYZQabFATx43bxzvEH3X9vpYz2HiF3umePeVAZy2DkfTy8ZobA1sbDgh2UBz5g",
  "key3": "DMU7d2qjaS2CwyhonTvaBCyUtnCyRaBNutcXjyZmhxKGzDnshne7xiA6GNLWnLb9jCe2BnV69ewPRtg3wMRn2FF",
  "key4": "YMHBTYva1HUsYzmxhBvwknyFGByUb7PdaANqzDsedJto3krVbqA6GB3SzKn7n5hnX7B4z9UUKeYWLTAtXnFbTuJ",
  "key5": "3FH7kfeb1eYNZzdRGBNemNr21RWuVWSxBnCEPGGudbzuUywG7KjuJQ2n5Auq8Bmd3WJjnsVRzJcFswUoC1Zrorvb",
  "key6": "3hKAxYKxXJ9Wh6qE7yKcUiTJxYfJ9dDZ9Z4p321UFRPkSEEbhRZFnH4bSyfxq77SyXoQgbWdskVKpNpEhY65VEyg",
  "key7": "61xP7KGDP1PMoCfX3duidvr7kHApVbKgy1LrZG4oWBJjZvCyYfDjSofYGMqX9scqU92wpDTnr7974HTM8RUHzhoG",
  "key8": "4VFmkUMATe8oY5gcuKjDDYvuNLLbDWitJMwnNCNCAn1mN1Mv7PL7vdWBWQwq5tFpriZSYidaHMDPWETVgSTQpT84",
  "key9": "3NdDKQAk59uxjkxwYoK1X9u4z8W7NRwqqrDXxwhxiFfBiVNpYrMqMZgcDwSMwackSnDtAJ8uTLUA1PiUwekDqind",
  "key10": "588YeVtt6g6h9Nu7zmF4EihZeuotzss5Rw3gWLXxL548p1WEi5931ibKss65SyG9vAkW8DaFhMHid7hYb6TSPyb8",
  "key11": "4wo35JRN6HC1xsW3x4ukmM2QXz2CVs4gGbdPF8ezSQSVvzyEquDf52qFoDecW3zCWeNHvakEue8yvWG5BB9zqMDY",
  "key12": "iLCeEgPqx1Uc1PiAd5qb7xo8XC7cw6a8KzX4TfBCtysSdvdLTq678qUBLpMaxhAM26q8XxHusGUh1NDhmC6BkNk",
  "key13": "48nCm45LtPELRedvm2RM67tVc1EWYBCWrvxfnbUyfniczDhnB22tCnwSSsoT7rxmPL8MTruHBWq6awRKATXby6eh",
  "key14": "382v2kmBGTC9AtTJjrwU4FVS6F6MP74Lz2qMLxEsBDZG8QQMJkJjxTZv1hQVpJjfXn6vn3kGGyBTAsxXhHBdZWyk",
  "key15": "61jqZtpqjb2YuAc11AQgqNjEY8n4QZNKSS4cE5Nxi6poec7vwMxNmpk6iMb1badEYTwTU2wHWgu9fUzdXHE57sQW",
  "key16": "5k3PkDEeBUuiGBnnto5dZF8F8VQY5WTiySfNquwrsauuUnxXwgMEtZ2wfEJD3eaSYYQnn1zRuQ1EcEfM191bwc6h",
  "key17": "4bGFn3zuhReWELYzYgSqmZFTTqVm6yM1ymofeooDbUACTjWdbyXZBR5KfMiWEjHhis7xByonUTs5KDvU5Pd6qUbY",
  "key18": "4MVnHSoXnnX62FioRhXxtXYMrfWSgz2yxHuNg7Drnqiuwh6pJfebpVKYSKUwWD3hoUZLEvQ1F53gY1bfkGc1Eaq5",
  "key19": "2hxjVJZdBtMvvQsUoMdUyCUod4ufhFbDWr7Re1FmMXmYFr2JPmQ4d9hvwXjudynpJZ5fA2zKzUSk8ZumS3EM9h3s",
  "key20": "JZ5x6RMjx18NFnvbY5dZztwdeasSUNV6zaBSgmZfbFdg5PzEpVLvaJ4aFAnWicGojjrzmNx3AXQSTU5u1ARLSSn",
  "key21": "4jJPh2h27y1uhFV927mCxe6xk1hvkQVizXCQd5Xq1NrbcVoqHgUYREy7NHXZCLEbkB5KDbjnrG3cF8qWhetvKoQm",
  "key22": "3Z3Fgr6e9pwG7aSaH48pAjfMKPE6TUjJUM4zMmN7qryuhsy2xPDdaA9j6msY3t9A6erznx9RNeXgcJN5ft2238T9",
  "key23": "35Ez7wniMGB2Uafrh7fYcoFbGyo1Aqg5VBnX3H1AoufrQwxfYyazFn9Wshx9QLGWaKx4wWGp43Km63VDaY4RskLm",
  "key24": "2YYVBSmjmj35QJaMhjHbRdGJNopNP71TPeCY7yAX8VExKKKEtt31R3qYTGoWYV5eNokHxDSVgxKtHj2E651wWWwD",
  "key25": "nckq5ytH2bLBKfyZWH2n2BRDuTwp5GZxW6mSgjKh74tV8MTWNcoKNi4R94AeR7gyVtmvJx3knxnhXCweKdYkfWJ",
  "key26": "2sBssudfCwkzATF6nfJsNwiiu2Veaj1AUVhVTSkNemTAmsxMBszr5XeQaMP47Eo21Sfs4dVw3BUjRWemHUQe2GAT",
  "key27": "3aGWg6NTh5GCXsxujV5A9TQwF92mZCSMu1RW3qjae1kJh9PK2i2D5yYyQ9SSyfyWQ5VVT45sLorziPUx1GEfd4fH",
  "key28": "PEC6NfgPEZrb6GgTZprmcksxsU6SY6hMw5gcQUoaoLXrjkNL59nXfKoYm9giqWDjW8e71KKq5qR6TrWFkHdBQG2",
  "key29": "34NwXih6PmsFHJPJf8a2ajzdgfi87b7EaqkMgg8YUG144QQrASppt3HhoLatkSaXdLUVU62SHBRpe8NDkd32qU2C",
  "key30": "4JMyWyZLTWBbmW6HQYNfqBJrEarcZ5YPnXffU1HeR5DsWYPcdPKiujZ8CWNNfZfNt2dUYWCS2VDaVUkyBivdMfwz",
  "key31": "59vk3cVgwZdu8VxAFRnPmYE9iafniJSBx2x9PQqu5nSWWJoUGNmo8Zb3YbqwkbSPXMkvvohZ7msUzvoQnZQemM5b",
  "key32": "3aV3FSVp2xnS3qoCW6A48ciiq19TLLxMBpSvoRLc41LTih8HHd6ZJAYXxgtF2rnPMAn4Fc8ZPZSbcU8zD8q19tJP",
  "key33": "5dLfrTybvb7W3pLz67Li76M6yorZLGjwp7mygtQyaujACkvQ8L4C67VH1kCgSANZHFd7gyPhehx2zhvmAaDFSXPC",
  "key34": "5rr3xovZH55Kg8voCLLbuBM5WC3oED9KT7Fp5raHgJ6VqDrLGuxeMeg4eGWEJDAEXNWT98Gf16rxEnCmx2ebNq8j",
  "key35": "49vAe4XHMgriQCm7qkTP8UMyRvj792LjpG8BuJLqSLBokPpAKvpJRNuGCAjuWvQ9JV41dn1MeX36hfziUnMJwQF1",
  "key36": "5Mkt94AaSfDdP3NvB9ctBJWH2FoVLtQsotDZjWTdqYq2LRoP2iS37tCAcRDyu8d829ftHwQ1Rn2gYDH34ZNW8biy",
  "key37": "4f5MjQ1Ai5k9Jib9gqDM5iQwkXfLtuYeAP29y9hi1XFtHKm9PRQrVrMaMndmWya11MQ71CP7HFUVxDJwPBqKtgu5",
  "key38": "5CfubR4rfAKiG2ftRabRuqr9HPaWLR6Gv8JNd6vUjgrrKUaKZJR2qQLGAWGgDhBzCaFTwtmaarnAzAhAWNzskxYs",
  "key39": "Z58mFTdg5WcrJxuBDk68sN7k7CkHRETg5nSesD8KUtU6GMZfgBrf8osRRVYh16QYVQ4giZQ8F6b2TRsSGtCeCUW",
  "key40": "28Gan9EugHskgDskas8pNZwKWgNHTpSxnRSjVBJ6NHkfHNqRdLETxwUESbDAkBSn8Zv3Eudv1DqSLFUhYbTz5gs2",
  "key41": "5uy8xzZcx45SAxypbzvCmn2s1UrkGdTx73jZ1attQMKgUpZneUDZA7SwUNmhHz62Et5npdqc3BYNEQAJYt6jjJSH",
  "key42": "5wv4TmYFSTDbYhVJzzjFX51hxjUpa34Zp5kYb6NyYUMfTEAtV2BtM6xKoGQnQTFd3zcY1D1mfCtG5FyNZmBKixSF",
  "key43": "5Edo86jbZhM37gjxUQLoGMBk1Y9SfTQKJvWJrcwf1KgqqdzQH8vDdBPXkyFxSoZCs5fLp5zr2yQiRbpBfBjpaueu",
  "key44": "2Xj5oYcVcvssEbaMKhhDzYancXZiBhp2bNkBXiUeSGVLAdmu8ASf4bTCW5KxpgjeUFHjsGADMd2VznF46WHAt738",
  "key45": "VUgek5cFJxjuE2dPbmBBgaZq4fpRTNHY5MaPy1iXxeCZdcRmvLpXLdEhHqmArabrpsNWjaEP5CY6M7KLKHmfFTt",
  "key46": "cJoVDfAupfR5dyK9rjjZYG5zc5o1FAodaTb1vSZWg7E9T3YKuxFus3RSj88xAUdzHpQ8MqffM3gf6mD3LE2GaGe",
  "key47": "3vLsyoYe8wfDaS8cyJbXu2cLrviYz7xNzU7AmL3AwiGQDLapSmLBauwJuoQzthxm6DTLJjAMc4Q9gKVBPLFyqnfY"
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
