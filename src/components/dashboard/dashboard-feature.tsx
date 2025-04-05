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
    "5DzezBv1pvso1TxHkhkvhZKWU9jSGWdwvxDADZZNL1wzPggMsVRHsGjRYf7aEs73SJtyHa9D3qUz61g9a4xDmTm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bAYZJgVvNbwByf8znzfPkZA2phUozGYQBeZ1Uqok4hJpUcJrWSeqEY51pfpFtcR4Uxf16yxqJPR5bad1wS2QjLY",
  "key1": "kDVioeXFiRySwJ6f76itWUXVxCrZy6FVnX9ut24VqEW5NteXkP28vTn5YBo8PRsF16DMk19yHm4kXqQmbSKcU41",
  "key2": "4hjsnoBjHRo68Ftm1RMEYXQ3HLTSo9kQFQmiy3U6nnQLyASDWbanS9wcTnqwm8i8Q6RV6mcmSwbjjxoYZgBaf2GA",
  "key3": "62nsQUofSvhK96vGepCxdm4gi85mzEGoyQPowD4vKZkqcjQufzJF7yF81GQ9Ht8MZX33kEMgPQFxQjpDjd1hpyKd",
  "key4": "3o9C71yvfLKeQH2rvJYULnzgHSvVKXcbCFEdBCNKHHkRe6TpERFCLtUPEnAqYKftzqv2aZG7Ao1LAoMGKDe7Kjh5",
  "key5": "4oAC6yGvaBck1TNeVeDR4EdzUqpduYcLcxVSx2DctfsERDNqQ2hjpzo9Az7Lz1xcHcKiZgBgVt2k63bJG3DF68q1",
  "key6": "2MKT7zA9fQn6ke3Pct1ForxFueYTqtHrVz5LuLormLdvf2xSqeyNpaZfBdBgoByF3A8ki724TSV33AriRo6TQpDz",
  "key7": "3KQMkZ4ZWgLccCdDfGnYNn2T1ocZizKNyWTzHKh5qTwjf9gNbVyShm2534S34eGFHSh6bxPC35Yry9jXUWvh1w3t",
  "key8": "3Y9cAB4BTxY5E9y4hxCXqBwCxWX5wTdN3jTrWykVYSRZE8fQDfn4zzcjmpsLpzKk6An7RDHfhYJ6tzREXvFNXQgQ",
  "key9": "2CuyYkUtkZzc9VVg1r4R3o7FYZJUZ586iPQKwJRSZE3L7oa6uHHdM7CMY4sWuWXgmeGKqR1SoKoKk2czGvb3vepF",
  "key10": "5dcTpDGAsmr1g2rZdC4CvjmHP22ETPyDZo6EJbcqEVXjxczbEgg61qk89W4HWYbeCjWWWbDxc9BfyKcPU5GM2Wnf",
  "key11": "491o8PM8qDzEzLnNhmSvE26RQiX9zYbCtBEx1H6KYUQcMzAhkdNX92sAMkG9poJQe3g5Roda9kHPUQWAm5kmwppy",
  "key12": "48y3z3RY3ygoXUyMzzgG1qrNLgzLNYmP4ojuT99WiG8cwcrUvu6tyhomu66bkBF2f8arz81kL114NPUS28oLQN2Y",
  "key13": "2Y38xUuorQsxunLBtvZoUTNfb1VxFGEQKbDhMgkmbk21rdXmC6T9A44n35Q9XYK4m8bbmUsm6uLiPezVb75wRqcK",
  "key14": "7vR5Q6a7UcwVsUY1XKdSbgjRcDChL4jejpuJLzDgKiv2TYQu1caxxmcxth88cGSoo8PumymG14fcxjprxtAmq5U",
  "key15": "9Yw1W8YHfqQx5vNRbxc9ZPvaJ3STTZGd6PJGeZ2Sqj3zczZBY4eUFqzApBSLr71cdkm61d8n6yxzygXf3hszzsu",
  "key16": "54ukoTXMiGBRwfuPSHeEW6gyu2n3m86GGApiQ8HFf87zb8j6dX4opykKE6auHqzGa49CuHQyHahN8eZJrAiEWQ9q",
  "key17": "5ojqg1LytaJjrXyYMw2mN1ATEuLxnXqkLxCqFKP37564qgx2az5TtPQNeaWR4NUFU8qT8EKJZAC9RjYy4gzkC4kZ",
  "key18": "2HeBF1hDjCCY894VKgpARh8PXyuAuezMoFoeAvAuGQ1ALVws1CcN6564GQ4nGawrDW91EuStgs9wjMeNeGunfVej",
  "key19": "sudNza94hGx97aWjpeDdZegoYtg8wpz5EZmuQzphMTbBPJ5Znmdz3duyH23T93nsMg6Vh281ihXcS1RfWwMYAN7",
  "key20": "5KSEQroQH8KwkcH3DVbkrwM8bJhU6dhiXEMeoX494vu8SMEzcCGhgZM1k64i6tPH8RsZrJoZEkoisUhGDTkYw4eE",
  "key21": "2P1irUiLu2RwR9GkaLFQANvVA9a3jGhgDN4EX5n6t7ThgdpK7ppCbKZq5RENafM8Af19tToRrFMSUypUHMtjqJkJ",
  "key22": "5bXPR4mkcZetUz4EwdwDgSY48TdrXnwaGtaPxpvjEyyKf9TXAPeicJLU7pQNKuymk7MviihKRRDtUrsifh4tGpAv",
  "key23": "5VUUEwBHfcvcqPjXhm1fUNRZHc631qybEAtAVPN3tKU2yYHhjvQFmSWQj99JBzjUCQFXHBn3V59pH12YCwkDEYZX",
  "key24": "3HEQdBgPkcjZvichhutVthDvxZB9SBVNAhgGhvPwZRwp2SRPx8aYozy9op1rcZDR93sqXijxoW1AuXGRrn5FjbUT",
  "key25": "rSyQHRuem8QyZWNHuvW9P2GrU5pD9kdXdtU4dYG2LfkXcA2ci3BGFD2AnY5dVWbAWzB8LMmv945Ph2Zp4xKzMTi",
  "key26": "5DWzkH5Bxzq9YGLwebCKcuRsrKRvTrjrdVssB9yEqXxbLHK7JW6ZHJEtuDUhrYZwp8PQfnzvt93E6CrW72gnNfGb",
  "key27": "2i6nDizjeDbj4pK9iWyFtC95YJckHbRvi3fXZk4Lsxz3WjyGQpCw6o2RW2wgJipnppFuMJPUf2vrhp5Bzm7oupdi",
  "key28": "5AFYemkmzuCyNNGvT8z3UfeLVas6it5JQ5wbMQsEzazqmDqskdNS3KuuH86rs64t2qVY1HpXEQMoFgxFq3zqGp1t",
  "key29": "SfBaxFsVyhrhFXgdc2713V2FMQuo2yEwAHYgkRWXffkmHudLcnGh1SDaJB7cL1JaZfiERHJ97KPXsmpedtJ1yCp",
  "key30": "yGEpHeSmNxpeoMxw82L53fMKqUEfsSSWjPtZWG2N4GovEY3fjcCUL6F4donpxNiE3QnAF9wcFPwEkAf2s2DWCSU",
  "key31": "2XbwQcDLC9Y7QQooidBXfe7FwKd81zdQ1eTSGUy59zsCrp19KEN7XuY3YpEU8zWkHY5cx2JcDxKC3tr1GjBJZJLv",
  "key32": "4aVPmGfA11FqbGX1cuS3BiVoAxbKkaYCGf7xCugPTxxbQMB6b4B92uCiYUDfd4GyE3egwF4suXg9UVyWSYBSoCkW",
  "key33": "65dsY1MDDDEDDQHXa6kNbjHMr78KBStUXhrdGZkydRvm6gMWRkkqDrCBJU4D35YuNo92adqeDhpRtpnL831dHXgq",
  "key34": "3itYJPCzf8UvvRB2pDSnuMvNcc7pdjbk4x1TjzPtd1En7Bw6MSRwfDhMuiWN3W2PUnwbQb3H1rDrd4jf1X9gFqaY",
  "key35": "5T2qbxrrtZ3QhTvg22CyH33bbd49ZLog8P8GWwWz4HJNZYsnYovCGnKADWEE8v8fTQUPsTjZBQJ1syQGgJk19ZCk",
  "key36": "57vNZpCeo2DHifMzv5tug6noh4K4bYZVwMESTpQzTTxpw9dk9tSH6gbBiStVKiz6HpuBW2GX8ApMVrUgi7ywsrhE",
  "key37": "2xWk9vfKtq9rsimzKWboHvQXaLJCNVsfpxPfqmRo8hubATa6sWrTYGnRXsuUPU4gC3hW3qM3FwiaxZNz4tauMFU",
  "key38": "UgJoa5Jyy22H2VF3dH4xqYw8f6jnzHc39tw3Vn4Q8SsyEcy1JfXaM3G3Two87YQk6u4gyy6HatPjsfub4d4dWw8"
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
