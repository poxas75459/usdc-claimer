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
    "3ZAKz1zzhYKTQRXozBNvtzHRp9zGnbsydVMDh6bjfY2kSHV1ArXuhfEocLppRXMGcpBDCxaqcpmfi8mZTq7QBQkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32hKzUTBq11tJzVqvRSxhwP9LyjBJFYFUphtaMUnKzDmbqakUacpV7SwBuX2PkWsEsA29F5zRVVY3PDktdtfrUY2",
  "key1": "mqQUi9Vf8GQXWxULTnSEV9XdfGzSKnkVQSLVxmKyPAyeGoq2V6zs5xApMRm7fdjMni48hP5eYP423NAKmgUFoh9",
  "key2": "2ANtBeiPoiqGkaKhw7Go3o9agLpDRKkHnk9wHLpqG4BmgJMCk7M35VufywmVCC3e3grMsyLhunLuLYqoo8V4CnHJ",
  "key3": "24ysoX3jW3in5CuvtNrhJCLLUjh7B2fwGy69TVoKx3htwt1W5F3udhQj1PVgZtjo8HXuh3PzbU2BC9efH3S8qVNU",
  "key4": "3u3FyjK1xs7cZvfyeVnCzxCdYhcvjedG6qV1poML2XesAGaBjFPW2ex8NWusi9fUiHQWzFerMQvU5ZTB2FcHLAy1",
  "key5": "5jNm9gUDX14TDopXa7vuXKRUZw6cCzFWrAkpeXrPGxgH6YwrowCLvRYAKmSn8BtBPdVMwQYrjvCRqa6XJqHFTejF",
  "key6": "4AwqTyDymQTti4gG7KdYQjYxY1nXqfQSuPX6nQLZ7oWG3owtmdiaSfUn5XgLHcg5nDP58kNUNEX8DKrssygB9Ebt",
  "key7": "2nWvGjQKBuhvLipqpXjYXNKMgrL3JJfrerR5novLmhVL54gFWY6LYUdoLWxMEKLbffR8sJ6w4nSLQB1jXLta2Dkk",
  "key8": "XCUUwykbkEMSJrtUJwVi5Du78qd1EvfvbFzP7WakNdpq3oJWBtTrXM1GZ5NdKv17x5hNNLo5nuT3J3gL8RqoGb9",
  "key9": "4zV9efoV5N6MhKLMvNANWMWJk2W4yTk5roJujU9KUNSPvLUnB4c9FHagb49e4aot5JjYn5TNWwQaQtms5J2E2Aah",
  "key10": "3jAYo1NPv4pKSJyj2VBswM8vNZdpAaEyvJuEYmfM9Ztnz57tyZmxy5skeXe3sk7wtGQ9FTY8xQKMYUAfHjEnTon1",
  "key11": "5NsKZvS7D7cJMetLyX8wdda55V9qvqkPztYYAdwpYH6i5HTsCuZi44NZ7fviZ1STZKWGdZxbydqMH6Ek1n7xc3md",
  "key12": "5UgjJ7LNYkUzsWPPaYUEA7hYR5pLE8S3H3dMYYxN3bfLTxxfdjnS1sz2JBSPaKAfwMsfhv47rW4vqFxJRQYCaNW5",
  "key13": "exgAgceFwKsyAhKd8NHSAhdU8z4Wgp6aJLJqHQdpSNTsi26EXA6e4MWEdUZmGL2UVJMebzcftK5MoYaDCi9hYYz",
  "key14": "4CRtyxMvD6ANokbpFZX9RicmkbVbcQ2jx9AwrRz1L5jC648rTpawkQs89dXK5WsQxSGACuea4Y5oLYRkuwvcA3an",
  "key15": "fE9q7DFnkwaQnijAK2tG8WpnvUA24wFMcqvtLExn7EubET6kLWi3CEBXP1kvyMFz1hYfhHUHMx8mTFS4RmUtEnr",
  "key16": "4Y4met3dHFf92QEFMZ1ncM7Aggk2bhdWqA1gdSxmSjrWm9sLZF7xAa5CbfMjY8QzVjzEW9hZcaVVFJNzG5RNaQcf",
  "key17": "xzGLQNCJdbYM7tge9NPUEk6zjLxWr9wm5KgroBa8zJmbUVWTMrYAXoDiXUDZn4STa8TMeKUCSVB9GCWwZwuFKd3",
  "key18": "55R6HhBshnTgS7p4S666D5sJkX3G1kNVWNWzF23bAYmfcHQEr2PmwMeVja4f6uGepVYCwZpPbAaUjQQ3z78wzjMz",
  "key19": "2Z2nHVHgcCti9G1L7ank1r3iVXuNp61EbTY2hpoj4MF59zosNNWFjSrQ3eD58WwfgBC75nCpxG4dymR8RPfGGg3Y",
  "key20": "Jtq7Ep5j8PX6zhVUDncUCQ2vUMNFbM8iKuzMkNEyN3G1jfrAcrSCUggS44FmjkYPBoRRcLv3sxKV9YvnuRL2fWT",
  "key21": "2hoceD5jMCpjjrkXh3uT3C2vUBHgHZEiv95n2Jjp4wAo4GYNmVj6QpHCE2Q66PLMyJPisL5Jb64PYLpp8N2oonJc",
  "key22": "5LoA5nh8aBJ4beWgtpwed4krR2NJc5ySFUGDEioRh9PNZ8LdNjobwHjs6JXNaijjqj7zRjWh9pXfWysTHjk9CQZ1",
  "key23": "5hdefE9uUWDmujshckEuyjP8m7ypDv1wZ5LJgwofkmeQZzTNCaxPGGbvp7NaYAQwdtUH1cFbe42TAyfqdHQHKPQG",
  "key24": "62H8fVsEJxjUFt5ec9nBT4L4CkVoYusv3LisgwRFhYHjzkKRPWhdXa4S6px5Gy6svYG4ZjnbqS9eanLfMMDY2FPq",
  "key25": "4pVm5JAaaTDKnGQw5o6iRQWq96764J3BoCZBoddWDmf2aCC2orSkjy6gV69qqGYxCdCrqTc5pfxMciBatKBTLpdu",
  "key26": "3fXFrTPpFf88Bw7KA92624B4ER8CnXu8hPhY3ZVMhm1CgqphADDezjCB9WGiucUnNjxjQW1ZzQHBGnLTMp5r1XDR",
  "key27": "5G6oWHER1ZJMvFZQJjF9Hxy8v91JPjCwMWcQTEocMD6c9ncfrf6Gtcu3yaFRPKBY7BtR2GaemqaWKo95T1PqTm7u",
  "key28": "5vvPxYRRdAEVSR6CStohwP6rNf8DFB6hzBYLxWz2MD8QYY21f3xQvT5wEnehsJ4d6md86SUkEN9Wfu3J4JTL189K",
  "key29": "ZJhWcZndJkymtA6Kneb2E2b9WqHeFm9koSBdSqZbKNuEuywNMAQ4ArDFpVhdqUPbeEbjYMzJoB9wr7CAQnFn1Q1",
  "key30": "5JxQaLnFrvs1xZKRcS8XK8q1ddP9tGHq7751vMpg38JWWmLkRm2ZaMLCP1rBwBnCu6Xn9XwAhg73NSxbzorvrzPC",
  "key31": "2T2SeBewqPZEcFkid6nawTX4ZwJGoEpLcMYpSr39grug3Kknf5uyEzTKbsu2dApY3QDXN9ArWtUHEiw92SVweVJc",
  "key32": "3EvR5TfkseuE6Wq87SCnRDMHaDmQqb5uutn7hk21J3hNyyg2ybUKJqbiZ3JLSTfxzazgZfhCXs84Sa38ag3UVpjT",
  "key33": "2k89Xorx4ueqv2PSYKymhPh75waKeR4KK3xHhnc9Fv8bwyeYqvjAXcdFLSv2jKAF4peRfkDiNV4onLGEVaUS2gXr",
  "key34": "3Z5CNH77KciDhn8EvnvD6DCiqKXEcao9ksS9KffXzABYpvYYsCQx11qBBJFGcc7mtkgxqryXXikSahGPzWv7p9mb",
  "key35": "3UMHEDvSGvLQvFnrdFRP4P4ma9LqkDG7HMRRHjKLRBd85v1GxKoDT51qcMtgsgCpa4NsEro4NxPCDraWcsWgaJzD"
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
