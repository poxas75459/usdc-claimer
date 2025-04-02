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
    "5iSibkb4YRpxXpuF5HAovjcEnU5nJ7aMWwRJ9KDZuhQs7ggQ7EHpB9wnX21k7QDTkPGZN5LvEj4RJaBczszm1B3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22nDeZPhYHkj8zQqA5BpXVXa8f2Jyyug2ejLH1QoKNhFV9kyWFSooCkei1L7KMBQMPTSm5A5beSgnAmquaXaMesx",
  "key1": "5fJvArRCZRozqxstp71uyVNcnimohXgxkefWY3aJpxUJ54GQWmexjG1xqbxjKHKsorPRrKFV1qTcVd748fYn6gP2",
  "key2": "RUtDUWce2wGE2eNjcCMNfqcYaPAvT8SeJZxku56rDBu9DdPoQCqDqA4NGPNUwa6xW96qE6AGH92h39skHviBwkX",
  "key3": "3Z2WfrXZjcc8YZHDzKDWqRMvVADsM5CXvRZjnUsc44Efqb75RrcaSiZ8bkyJXr8Xo6a19vDXemCpARo4583kztQ1",
  "key4": "5XMxES7giVizkVaT9jkkUrc5n6AVMiMZ84BhHUPiQZp5q7f17mKTLjmGDJaGTu8MUpeH9LE6HRrJfpFvZLe1w4jj",
  "key5": "4P7j2fU2dWw2FSsEP3F12sJ8agvkirb1HDGovSrgqYcpqGQ23JsQoNGPPbiTuJSaALMYS7gZeoBsPPXJMQiwE1iu",
  "key6": "3JkH6YpvaZGFfYxoKMQzfAtvoRqgtNhUKTAUP9kLXXpDqVwLzCunn75XuYhB5MwKvqVXC4vTb6UMvLQjfLovSNiK",
  "key7": "2Q2E2t6iwkighu5fSy2fsGn2QVPfovqYnm95JCd8HxHv9yqn4GJVshPwwm5Mfy3ZgRrLWTqMGydjsZGRtHXJoUL4",
  "key8": "27PjxDVZsnrp7n456yr8r1LBNmKs8xpfZsQSWfRj5LcoHKnHBRHDaCZF7pwegQMdzVSAEL9SfgLgeY7p5xumc2BD",
  "key9": "5w6wBkS4TnRG58TMtACdcy6gmjnkPvbDZam7bFuaoXeNEcHKJbR3Szp7LQykqzpP5go5ZAcTVdbUNkRGPsF27otF",
  "key10": "Kv9eGg8CDFs4VdyrRo2H7WnTGexY6aqN2sDzMLoqQoVFKYyoC1PC6UHnL2EUWxBo7MSwNsoNEZF7XY1Sa6QXJJR",
  "key11": "3wJhKDrGwAFYrRbnzFnj1wBf5Mk6BxEUjK7mSXyZWrcjzGXkr6Fgnkb4iZWhp3NhpTECfAZ7YFkh28K8aHXMq21G",
  "key12": "4Gcyjp1z5MJKBwUxrSc93obBQyGevH27RmzX1NL1E2Nj4oqQf2jLXZj2LbWCNXiEePeB4DSRKqjwqXHyererMMEW",
  "key13": "4UTwLx3ntWW915qksiVEeer7KFwYFPf21r8Dcm1wtE2xrzeKzQ8YJgVvdzvVextJNe8yQNttuUb6zaRUqvr2iyxz",
  "key14": "3NDFAd5qAjxDrgEqsNdWZDY7AAUgsaNWCTngYbBUg4nspNJuSLJFYP441X3i8axdGQYZC2ooCQTUqb8vPqdvNanp",
  "key15": "4Ng32wgXNFhkZey5hXczmdQt2ca5TXwm22uqgMSrDPfKJDAbX8b6criQNAYcKX7RKUv3828zQbRyEUicrmz4NNE6",
  "key16": "mB7yjw8u1muSZ4nRPrX6VxMp7VpfzKV6NTFzxRsqKRg1WnsmgNLitcvtPRT99EdDA948RVUra3wcZvqSVyaRr4F",
  "key17": "2onLqaZRUFQkyv8EcuTLZ1VoisKxbb9adzFg92tSrBXxCHg21mKGsVAVJ6xzW5DLgTrbKZBiFNhR5rAWSNGJqYSZ",
  "key18": "2WQ1ZivXYP1e8FUAsFTocUgxwB6guw47BPv2cTb44nQdWbWM1Do5z2e4U4xhXjGRoEE4JE73vhvrM8khtRcnaMVf",
  "key19": "2BiR4Zc28A6akUvnaVi1qZKqs8p6NHNtH3Cq4Pi3JX4ay5SdcwSfMW7AiGGCs3gXo1kMH8kAcdbqmJvseEBt6LtA",
  "key20": "2jCMVnzSa9TMsFhQLTxxqmG2kvR2TGGLPDxj3t7mBShtX5vHqu7ayXxyqVbUFzZNYT4QwKJn6H9YCkVW1aV273xK",
  "key21": "FzMQ1bBtaVKHE8qZNZfhwaKCVJeCc6S48mceYq4MtAUc8prKUsjVrFSKpXBmUvkK589SYByP6na4MCJ9zyVW1vJ",
  "key22": "4rqcVHQwoLVrVj8pRz8uAHSd9qqRAbNZGMmvzT27nJMW9Mw9WwA2eeNDNovRzLB3ZMGCefreQSYUSP6FQr9D1cCH",
  "key23": "XKEqS1n8fM5xkWg2DRV2F9jUy9s4eBL5YBJXWHMJqMzWGqfyjK6xsAYorjkGto9bp9Vi33XwfXReBx8uQ22gxrV",
  "key24": "58wruqCiEJBXyoYz8Nv1chXNAuB46RgLyfwgUDg568PxqmeZSncVRR7RPNdAzq2cynuFMQK2jssg94QXkpD97sbs",
  "key25": "3XrFHoSSbFrgtWESLmzkjR2tZkfinqBhdGzAkwasNobp6CCXEnpBqLaCBboByrtqz7pWgW3QJ5MTmfupzMkgft2d",
  "key26": "4MhcrsbGMHgMitdDhoQ1Zj8ZpN6Qjdmt8LgJ4Atvgxq1FZgXmkSXXCQSmTaqF6JTxPjNzrLqxbFMZFs5qrzUsLZr",
  "key27": "4b6nDgpq7cM8ynrpXRoZeeD1Q7UUjV48M6WVMcfvK7MLww7pdhJB6tZfSCmeP6dq7TkXsuM5JsY1JcgtSQgHRPNQ"
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
