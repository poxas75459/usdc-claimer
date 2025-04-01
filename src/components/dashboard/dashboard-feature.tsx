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
    "4upCHXYT2UvSDtJDRpPRjwYD2K4Zt3pUV8pwJmxguNeqhPv5xD8QVz6gLrTLEf4DXT6R2R6XSK71NS4LpgDUqoDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kypf5Y3DZ15TLqApXpu8v6fzuVEC7x3XmJzb2AkMGk1YYbQPkDdPw5RgvbtVqookB5JEjj1WVRyVBnZM2VSMt5u",
  "key1": "ZjVZ3mKyyUqqY2AuftbBXSifFE2LQvhe9q9bXcJgCKYKfow5cqgKrHz5wDckrRNM7qC23dzaqtLme47JHAZe831",
  "key2": "5VUGXk1StZhuZVRe56m5ZNrAsXTpR1gcjqCyUZ7JPXRiie951q621Absv1DNc2CEjWzJQaGjxazCjGRxsEhsSAgd",
  "key3": "2Uo355EkcBcqCxTnC6sTdFkrUnRJTrrzLHd1NAimJGzdmh8p4WBizvedgALq38S5b1rn2NNenidm3hnqGqn4QGTw",
  "key4": "3iA5MMjGU45NymwrTe7bEu1Xw7MQ9PwaGc6Kb2rtU1991dbMy7YNMBvcpCcJ44VjDfsJKPM7u5sKUFvCFD2oBaLT",
  "key5": "3b8v8DDknhPtfhjJECCbYrXQJX5xBPozJ1ZwUKZMGTUSv6W6S6mVHZSg2DhHp4bu26Ky2Y5K5rZHPhm4CDk1kJ9s",
  "key6": "3ghwz3fgSZ6jY1e9yJKXE9jBnRKUWghV98oj4UoEKm7ZGxFcqe5dZe4GXGE8wopwvsv2k8iM7SEYpoJM9Po7vsyh",
  "key7": "26FPpLvTSjkZAKLnf4TkjA8iTyuJfU2YwKCcDgeHvcJxi9bZ7ovvgyPBTvwLnwomMkkMEDAhaybu71DKToVBCuDW",
  "key8": "2Xwspi8okwCb9PSRaxAZvz52R8oej4z7gSZp6hezbT2YZ43bjp5J3KeEdyMLNHyV7hHwPE3SrBts8W8dTH7Pvc8",
  "key9": "3ciNpZp1cgnYoGFmhtvhn2MoUTNQjEXAXZT2U1gLXkhuFaeTcxwqhRcXwExgqmkTeo7QnFgb6MEXDAG1EwFfA6zF",
  "key10": "5JxDPNYP37SCXp81Z9eiH1nvGDWX4AduFw7TgTXaUGDAPekPP5ki5qXAgDq4RVVp3XAn5uFRoC9VzEGqSYXfAQxG",
  "key11": "4k9b77iVtsuKYxKz4x5dupEDJvqa32v1g6NGLocA3ZJwAyHYNZNTnWe51Df7pMZ9Afw52CKf9PGx1dCMXWx7AocM",
  "key12": "2eErMWoCcDsotH7gXeLbxEJjhpYQkr4Kr5PGkW1eb2U7x3iQV51i7axowjJqDLzVwhiGzXyXUa2AYSTw2u1TX6Ky",
  "key13": "2Srgtzpc3QcoPMvUKJQonZCALFUfwQvdNFkjvVGdWd6ZYjvdZcHuZ5yzytKWZTJ95JwEF5rfcFTymAqhBwoNJhQF",
  "key14": "55Jfv1JPwFucNVNyHQWXRj4dx97bihQ1jvqhgpm8WVzLpGJeNspQvEr3QTwwempgASARmSdT3odPr2yG9NsYNScE",
  "key15": "3EB7JkeMEG83J6PnY9yAAEg59qkfTKmQTYEdtBGCE2m4K4uqd4bQUZx1839AcQSxM6ZxiY8BHsF4gCgaCoNckTfM",
  "key16": "4rNF7MrvaYE8kapgUzdUmZKy1J8bXpc937fQCtcY2H3k95fGShQHX8aiXENoTKdKPfsCRfi9cAZj9d95wZdmGuQN",
  "key17": "4WMnn1Pn34XnpVTin6YgkyMgwcFiWcM9LCdUDchgw4fg66MJ3k4XpXCVNVJtHvdw9gSSKzM2Wiy7oJG9XCPtHr6N",
  "key18": "3dWt8Yd4Xdm2HYbZAGoh68VXjFSiE3qvRRwqhZR31oUDfsUCuRWzGtXWimxMp2Dr3NQSwFm8Kq9S9fLPEVQGz679",
  "key19": "5rWuvbVuy7bGSsukxwj42YD78x4QaeXbpNiJVP4obuC3Cu471a9jRj6a77PSY6KVk4ZcXTZs1T2aBgoQEGESEmBJ",
  "key20": "2jXfTKdmZTK7sFmj977GxMFjizwo8GiNmoY1G1QR9Z295iSXGH3rkxMKVNo5AiwSeRHMUMdnuvVnxiiR8uEbvtHB",
  "key21": "58V1aZFMA64vkFahmqh6QLUv1M13ziu5UynsKt6YkDPvp7EgnsMdafZyn34PdCG3XT1tsAFsh6LYuE5p45eR87Wg",
  "key22": "WxoRWrrAFfQz923mevjMvNWsA2DRuvnaVGHuKvCK1m5Mps2FpFLoV8v5gYYLidSnBdYWpBfQ2BsWvSar4Q2yGNw",
  "key23": "455ZZdYDz1AXwgeDmbAhMtBEy6T6VfhUKgGDCZGMQU8PMNK3r8CqyQaqPsE2qttsSLrYeaTUkFhSSXUZWma1y39U",
  "key24": "3AuM9j5FrhGFftsiCWoFooH2tGXWr8gFz8u7wtQJFbYndkYmB5TaW52wAP3CoVExtcNQNk6SG3ZrdtygEf2ohf9t",
  "key25": "4pVuNiqmVXrUpe6qvax8AaDXcviMEDfiZ3zCE8oGqSFevFisuSir5JMbQRs7cEYTT7urLmNUhyPmRF62QLQ7kUpb",
  "key26": "37TQXdXYkQzVyssgSv3f6EfNGTBFKeVkqX3TdSMqx5xRFVkwo7ysq5ZBXS5hDGxw3pVq85RQzFGQ9n2EnxmUjz6Q",
  "key27": "53Cd8NMmPVVSnKoBpHTFA9XaXC5Mu1n8fgbzvHwupEcBmi3Q1ztb3skbKfkVABN98NNE9S3EU8wt7qcp6qyaSz67",
  "key28": "3MoRnJUVTCAbupaLt8P5iXsHw4KBddNFdN7kH1uP3iAgiMWe4cLxj5ejLwLrMmk923CucvFS7VWfz58J7bCN9eLH",
  "key29": "54jUvQg1smLRggcAbHHCmocoDsYzRe92urtoLPRL2q8oTvSLggJGVRqENrKUPHqK41cWj51dKQgkJFWbSi8nWx1D",
  "key30": "4cvSpcDNqNEdu94BCE2emDmHgubmi57i2dpBtiUP8VTxh8PQooeTt5e9qj8faioyravRQzWGnpexs4UNZd6w569e",
  "key31": "2x7zPFNNft1zxQk86Znx9Z4fMhjxbHUWtpCKKECo1XydprCrpUpfLpCSMeXWpQmLS4b7pCVUR1bziFedccXxZR5G",
  "key32": "493GnXBvejW5eA9mXMstKB4vtRY2U7nuowCjKsA2DHSZRrvA3s2FZAsijf16V7YhMMTdzG4wmNh25Tdy85oahYa2",
  "key33": "4KaHeidNqzdt7EZuZxa2mYPV3hKfNn8wNRNWCcdinYByCbsBdCmN1fJYWza2QsBBM1f98qJYjgvLzYvwYDjFFfJj",
  "key34": "23cTzzM4uqCGPZDdxWSFGaa4ZXBtB7VqggomUGRknM7D9U63iBy9B3JnAXDcQBrx6eBWsk1HHgtLeVpbB72GCFGG",
  "key35": "4iC2i8z3xmhsrLuNEhdKgNPzjqv12Ch4DfmSmjafX3BqBN2TjP3UG9dkcEsRULFqREA44Dy8vgGF79y6C2E2VMhM",
  "key36": "2Whga6nqVgYHfhCazWnvCN3pAetQ9zXjtEEqmRFirMwjr1WUef3ax5ncs8p1rhfyPTR2TtxoJKAxajkKDnAeMskH",
  "key37": "4gYTE1FLViG4s8S1Jv4HzYf3ofKiB9oz1sEKyZRpREjDc7mZMwSqyT9RgxcGm33VYUt4LtpBjXy4JoEwZrgJHZHC",
  "key38": "37U3NUnwgqRtV4TB4JHpbDk8EnDrAnQ28LfVFuJyu8MHqfsfjLsc24BY7iEYqjwW2rCY3YH2Ho1HuHYNRCNXEMuz",
  "key39": "5TiVCLufncVxZGz2EgGBy4FYoAcDMAVz2xq4NKrsoaPtzD5KDbyTkgvCKhPnBq9eg234EqZxrM3ShMNw1YHcpMZe",
  "key40": "3oaY5SfRFdgpq5VUGXZMHKQP9WX9cNtdg3CCFDTVZiYrgqxmETpQT5hQtF7Jtrchk6DXTBqfbdv1oZ2bUL6LXDQZ",
  "key41": "33WfmAUFMQoXbhBjfm8XsyJq1XDBY9WcTwRmxtrRTPhrVmSfXQHcvVXqvRiVvbQD3NZuD33b6bh2myS2t8nu2qga"
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
