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
    "2CHE7zfCQmRek8uyasTA1oEJYGZcgWEgSCD4jxXNBQwdZLTMiKHWnKmj72rkZnxX2PdKL3QBgZAiYV9Cc4ceVmM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z4no9p8isoZAfLAZdY39SittsCfLtxoHcHVq8wWBZ45r5H6bw55i638EHMGHhniztNrhghTAEGUZxkVhtYoJsR1",
  "key1": "24txq9pyiLwhquKyvBMtzvT3rzrDU3fotEPHHzcgZTWyM4DdpmM28hbaCEVn6bpphCpnnHvZT24W6rgBgZHkqWTp",
  "key2": "2EDKYTyQSYjsyVGZwnPKy2w3Qv5yBwzXaZrTQXjAuTwrHTMS9yFefbqQoPwtSwJiv3YUWfJnCxrT7FUJpjC76328",
  "key3": "5V7dcFzsCHcP1RLkJePsRaMr1imWwHXQz7ca9F6Y3XX3wRpPCMjsHr1fXndUrnXiQTcCYhs3CoNh37NujiF5DsHu",
  "key4": "4r8zzHSWATDh6rarwEGab2UtcKZWEoYh982om5yyW52NJsN23QqrTQzszQshpc8N6PqJ8LnZpdLtEwiT3aWqPjU",
  "key5": "4YYdV3PhKrvtX2VUFyV5xNCHEopbCfX9JvQbbQ8qcr4sRPu38dtZ7Q9aCiRHWMjAZzTNCSrM19WLtXhHtALBrPTa",
  "key6": "3v8qzF65VWMWho77jk7FVRfrcgEM7aJJan5tn4LjLHafR2QsufqdLMzh2FFBWqZNFLucnexgTxbL1CQNXV1ixssY",
  "key7": "5VN4En6xpfiZiLHejZNkfWKZECYD4wRTYDwGdGeryuJob82g4h7z87T1QsijV26xU3Gm5sMFKG4tAVRSqFT8HwLJ",
  "key8": "3GzXvq8Z8ARtCeHkLKJRr6vs387QHBVBzscea9uJkpgPRRpWqVqeBFmuD9nABkRqKbKMntbMBmtvVBzeoaUoAT9V",
  "key9": "57LZPjGxDFFbkjT61tJvHYMypwUREge4mqqjE7Gv37RkkjWeiGDXzXYEUJSdJbnDRJBq8J3ngcALfHYeeWdgbCjT",
  "key10": "owvkzFyvurLxhGhwNJXPp6zmvGUa4KZGozC6wJeg5Jg75HBJvG5CBkKtW8R2SoDijvfqKCNunXAB5sqEppxwKpL",
  "key11": "4nAqgQtRUN9f19bqPMRCy5Mn1bsYfKxb12gp7pCM3PKQ2qJe3qKScXW53sKPLiKNxsUSQhCX574KSa6htcGPu87c",
  "key12": "3ZvQVc71EnfwDfvqBNUgpG4aXZWbAGKCht2h6BZbVUVGmVFHUxhX6QhZmkYAXTREFsadBxgaeBbXRuJo76oTwFjs",
  "key13": "4L5vKbFuefDQF6d9recdgBQENf1qEupBAuUThwyA3xVDzkWDsMJTxLGiVnKnvHYt83yqXJCLbtvyWuFakehP8mjy",
  "key14": "3D1UuHhj9ALqNJsoG1NA9WeWdMjGLHhBD6cUZk3CCwkRPmUNPC96RQuF5nZjFudUp7rnacUd4t1h4mdeitk8QDTc",
  "key15": "4FcZd4oCjuHe7ncqcJuCQigpWMSd8JTgvEzaeuN9S7MBc6sPtbodadqjwtpZnJugTNLsSqjkX8XSc1Ew3jMyVpCA",
  "key16": "22eyrp237v53TPeHg5FP9xmCp1BX31y4sZ41shJRZzsQJR9pKeR4fDyU7bFXZ7WzowdBm8TjVa1hLs178yr7VGVp",
  "key17": "4ykrc7rCHW3oS9TGbvtST65uJzVeeqmNcURX3krRg1XaAmfk46JWsZD4j4qNuX4oheczswB59zKB9Cir1gqPFKKW",
  "key18": "2abTKMiEwvFsyXoMHRKo25kxDF26MJqhKyZSmWGc6c4mrDGfkETwUdWiEhoUvgVA7FPz17k6Wkb6hEFj2VvzV29n",
  "key19": "4R3TzJFnJ1KT3uEJTVSLyd4Lxd1dEnmkcEZUZTWUZhXfrjTCwP5SCTHn5dGrtnhhooQA9vqqM5jGv1M387xqVood",
  "key20": "XgtG7TwUpgY1wzhdpS8bW4M5LPJQW7k8f3SsuRcXM8j1Ph1TrKqu7hetgv8ZGVGLcTJJELEm1sQBkRYYq5KbNuJ",
  "key21": "39Dom4cAPrUNDWvKR8pTMiRAQDtXfGyHhcEduXrR7yey5PMisZBox8sbe7WwB4uNSi1ie2aDThffLyHtbdim7xk2",
  "key22": "39Cynhj5JwzKYEj2ECQc1eWhjSrFHMueayTQmj3NbD4MbeM6uMce1DowhUMQvuEvqzChGjxS8AtHDKBqk3ix6EGS",
  "key23": "4QQD6vPk2LxJfKPsDVC8Ac7D5MTdQ2dwNdRxC4Njtx11o3kcTXbSWKW6rp7GW3F9WeFEsw6xdJXa9HKKwk6qPtte",
  "key24": "4wNT3vxwBfApN6nNQpwGGoESiH9Zi7YbRSyXE4quP5W1HbDx7CHfutyzqAUj1SGnJEpMjZmFfNM9B846RPy6hPwN",
  "key25": "5XUHrDywVxWT6XzuampgAbGjphUmaTyJKU9YQcyxFDTSBFsL5LdmdPWBEXPcBCGem5eESFhLCKNYHWsixgNLypuM",
  "key26": "4sMLSX1CxnHVicQaE53JpjpBGjgHtygCUodXYwdAB3cErDbCb8u4g8mwpQe3Mb6cZqFREQkkB2Zm7ooY1DApzNLf",
  "key27": "3Ekux1B89vXaxQVPXVSCjGrtpAuBWCABx4kMqzXV3TspbFNZGThKB4NCspdtoZXG4inH96Wz5VwjhYgDygFrWB4P",
  "key28": "4z9LyKXNVqG3VUFvCWGxXigREq8frpKCtvCorHJpGTFZ5sjTnLZrBQGiquKz5CMRTsVKQ6ktCZjYsMfhMiTeEswf"
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
