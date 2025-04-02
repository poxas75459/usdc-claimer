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
    "3EvSy7Zvh2NKATtwBbRxWCP6kG36TVAVvoMsH5UrqjBtyJasb6ARHrJizDUUvb6P25yUwkZr4NpSEqBcXovxx3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d4xhXXdj9QWMPob3e2i1X1W5wAi63E2DYn8uJXMCuxL98z8duoyZYP2auwhtaSpwjN4cmHZ1oRBJjdsrqPqqvEv",
  "key1": "4mMcr6hbRn1EiWi2oA5yAH8HEKpeZfcgJfMk8ZVaMdrF1Ft1SEeKzGitNE8PSFvGewtHV6jztqz6QKMGs1iiN6ac",
  "key2": "4GWUMyELRHnRwGoqg3FfxyoQkuK4LBqDEdBLmYc5eorXJzBAxkJrAzjnzhYNnzJBGU62Lq6pqeVj8KLFxzpG8CeL",
  "key3": "5bg2UjVwhi4tb2HNMKuhDDA3VZtBbUcyBXDBfCaDUEpAKrisQjUCc4DydFYVb1skspJGJuSoSxix72RQ46ks71V9",
  "key4": "26vtMLKhwv8DQmqLugsDVCdWocMbeC9Jyz63Quv6KNWrZGUiJPQAXxpjRzRZveU2LJNya32mW4xVBobvkJArwN1M",
  "key5": "4TD1ewrFoxcKC1nufmfWxwenuaHPE5MvazurmCppFc7wEBaXen69a8HXVfHwKbR4F2zz1QSwgEL6TshrwSPSPcGC",
  "key6": "DY6JsEtRuGtk9Rrr5pLKoYhGREixST5dRqi4cRf4oc3SukiyPoKVioiS7HGroKxuYbLBrxnyruTokWypdoTAWSu",
  "key7": "dQs4MC42zWRaGVoZAoYdd1cp64xQ2xzRY1rpZfBF3a3X7PY3FnmJY6S5n2GY7ivY8DZPJjuA1xvy3rfcprLF5BN",
  "key8": "5X6HqmJq9JjVnhL9ffsKpPR8k6UBZJE7MC95WUkJ62qUYLgegPzo4mgsxmELqRudCzE1aE9tmP4V9DpnNpqUqvGk",
  "key9": "5Vq2BabwU3qB4YRpfpBTkwn1KizXdabYioHLwCiGxrHx7B16S4wJbeSfp7meL9xZcH8W5MKS1YWoLZzo8b132Php",
  "key10": "4ouEYrjopvTCcyGUSdjCPMmMbJqaKGuYuLGrvHvr73QoJtmGGUGfsQrGSjyTzyxFpJmsG4Fp4DCR4u7WsNow6wUu",
  "key11": "2BSPGcsxkqhf2yWuaet9rKJ288zs4Wte8euGxnxKrMThus5he9eziWJp8N6dSYFXjkTSw5aGHYfKbGF3WoHHF9M2",
  "key12": "2RsRyCRhJhF42GLZUJyNe5UCtbjY9ZB7jBTwjGPRkGST7skerdiNZGzTcnaX96x35aV3xTKSAaa1shy2NkcSQKj4",
  "key13": "5h4MdKN9dUef5SPA7r2nzmxgbUAxd9CW4jRiUH3cKPbMqivaYnizrBcGnxsLTC3w4xnoaGfZDAY2LjP2uQcwf6WL",
  "key14": "3JGfdGg4Zam4MxvicLdmqqCBvmi9xSm3MohnVoLAbWB4aWZZns6CFdnpx7GRJVJ4nuZeJ7uqs99VgKv4v8K6HQvf",
  "key15": "3thHKXLwD3pFnLh3cbdXC9q4dMjWsDV5gsFeHAZAdE5Q8vEtLWzN3HZUmu46iRwodF9AxsajkwE7dW3WkySh2NgQ",
  "key16": "3qNLNL5Cg78CQVrZB7nUsF64HW939bTPtEv3CWtxrKagg3VoaBzp2nxTFY4Qd9tBamF6qpCwMn5HuCsnfEDMYkLh",
  "key17": "5eVGPwevsTvTSZ3sQD2dgzLbM4HTGBkJuM18S6ens2ynbUpe2kcC39uXTa3N8iV3qyTCV579tCWEhMjfVYVfnbBc",
  "key18": "csrJHjV8BCXq89GvjTa2JJskHr1gfvYrdLTpF5aqq6SNL5PAL7D93TXnf8LKaGpzmasM6d1gKzDcR1sfi7sT4g2",
  "key19": "63eXHWon86FjvhtNfgir35EQuGvXKBoUmHhNQRVKJGtTyywKvLQ3f44TZKCFnMLXscMz1cKJ2xHmQMRSSJ5PrFcx",
  "key20": "3kpPfnxnqF5rw4vJDY649W7WdV5o556z52uyGVWM5AMjGT1vjLbYbnM8K8bWGGXFNhQTWUuWymEN64tz9EtMkN6U",
  "key21": "2BBxiA4a8ZF54GyuBZALuRNhrnAfM1iT8WBfsQ2ea46FvWgXU1gCYw99zCWBbFj31gbr8LB6WrCX38UXQAiXQKyb",
  "key22": "3jFBxXqp8eJHvPMfk8YEhs4qevYWs4ZVXY4M3iSmWJppDQg8cM1T6aU5ZdiHGkVu1B8Sni4C2b524ekexVDfXCz2",
  "key23": "3CXY8Jp5tvcEGMhAC4HNXqv1zV3mbDVio7EPjm9MagzGCckoZAt2Q7UJJVUdmYgRTfQYErCHJMC6EXu3bAT58WYf",
  "key24": "3ns63wqoJsP5jWa2p6ic3N9orLJaM2gPoAJmdVf1o3vow2egJkXX3uNphENMoMcm3EdxZAiRNcSHYuBAwsHNjce4",
  "key25": "UvK6Qz1S1vNw5FUQYYu4TQmojgvEt7hZe7hXr6Lmbzpot8fdMtaYZxWvT4sYnh8LsaDTU6Q3XihWneo9CyX1Hbv",
  "key26": "2YLvN6fixLArmuSh8VLhbiG7hVtvXzKQ6WMuiKdii2t4fGancnkuN5rJAvVr4VE5VvEsUdQmnZQEEaBoD9eGdVYp",
  "key27": "4mAMuEGF3aKC1e4SdrGUd5AJWfnfYeSVDqrCScycSjdY5d4TWZYDK276MvcpnhzC3Sg95WgpaCBgrszGk8oBsKqP",
  "key28": "3LwJub59FiJwc3f94wReBVANAorMLj9ptrfM8kvQFRrWc4hRu55GXtQ6zAfAEpma3Nr3wNpLD8g1TQPP1AtMQEC8",
  "key29": "4k9xDMEAJG65kgWxyP8MnkapRJWP2qRyn1Z2BJWrYGARQPceybVAKa6Upx44nN4Q5NYs4oa8t34w7PWLsfxKWjhh",
  "key30": "3iH3fcrdYy2Z1s1A4e9SBKNpvjxEepBy6GSGPEE7AJpTTeguATdmtJpGoZMVVnimXeu2qhcUhhxkV7PWrFdaugFu",
  "key31": "3WqLmHF1UmyyHwzDdPCDHxjVooHaMpRDWQgR8nMdpqoLtktFZe4gbJSAWAebfb29cSMPuAH1nftejbgT5vKsfh8X",
  "key32": "3m9ufiwdGgSSdyqFzpMBfAGDXMdL5s9AhBS9VnY8XWfRPz7JBw8ip7jLuC5khWRnG3gXABCN2kw7q9YWBejswqfq"
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
