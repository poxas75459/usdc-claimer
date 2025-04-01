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
    "4L1enXVC5XzGKfoCFW48yBZ27YfaJsT9SauKGUEHgnY626x3sLRmhhSrVyB6p8zak6MJaERVzBc3d9rFhJr9LooD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3La7mhFYuMVjuyUFy8nyS4jD2FB4cWkLRkcFvnsYpgXadeM5hk12VYhCUA6GV4GL1PvVL1PM87T6h5kjufpiscnz",
  "key1": "EXVqpUo7JzDnnxGjzL2akievBftyA5PUUFSnSVXsdoEcLDazz4nfSgJa8AAke9wxM6ipxo4z4NCqxZo3DADHSMe",
  "key2": "3QUFveMeaQFAaSLVFcSf9qYBBEGHMHhVzfg6U3oTqbvLgchjtEzMfKU1rhZD3xNA1vhL5ynYqEygWzBjNpYfGno4",
  "key3": "4PJDufrPy6htGL4ViUT2LnpfTmBFzPKEYcdCHJEhEn7cC8xWHV8TgQCVvTvLEHkuhjCUx5jVznMi65iA52uP5vsv",
  "key4": "44sL34auSLtor6AzyM188M9oj3cW135q3M6fJgarLnUbfYq7nvL87NzaHK81ciLhXXCwyKKej4PcQUyCAdjPaozJ",
  "key5": "5rrqYLDUiv6b8nHrZCTErRdgzJ8g6GUyRT52Sj5smmhhpmTDkArXC14ZwfW6yR7J9E1Cx59MxozRASc1e9bFi8En",
  "key6": "4PkPkHi8RNhaV1HE6umo3ussRBw7qWKFe5KrQ9gvMyyfJjhJ4uqwUzCEefyqCWSPDAcrGZkFB5q6c4gybNmtnieh",
  "key7": "52oeadiMJT1ahCVva9pjwZkXvyKdVJtbVRBeDKUb3JgXsQFtQA6oTQf9i168MmdSsTG12ugiptrfQWqVqfVqMXhh",
  "key8": "3d2oFbL2YJRBRgCPKuZhN85QnTLzRVpmLRcJLiyiJXqgR3RRgFvXH6niSsQ4zrFXArcbwEYG23Fv3uMHpmnK9oZX",
  "key9": "3eKYd37S7DGqjhcU3LWaf1Q8oRfc4wPKNCzKC1b8TGQzfgfqjrhfZbDPEA3Fc2i2bvB3ivXs7tA62emKYiFFzS6Q",
  "key10": "4FcpKrodfZ12hD8MJ2gxUPUfCoJM13bZPTHJ7HMCmmEgEBzL7JsZSiW9CjfgB52qk6L1JQ5XGLPMHZDZWABHasp4",
  "key11": "3o6fk3SSUXDEPaSUaZTHMwqnbsWRwgH7teWVdyH9E6RRJnxGer2XbiimDJDhpuxA49VT7hTyDBAQcKT5qcaAhoNf",
  "key12": "35Fyhbod7KNQkBemF15CA81z4sriVwc2YUNVeXtqaik77Eb3jC4UobyA8cK8noxrvULwhkMPHMjoNBtVQyuVGfE5",
  "key13": "325VCphWdFpdpp3yAWgWTUkvGa7gUeDr46uHroe7P615RnUSAj4AHxQyTNY2YCuy9cWxKaqJcC4AsB9sGZ4TsTaB",
  "key14": "2XZUD5NNJd9GPvrX987hFTnK1ZfFTd6wtaKLstKvLRweagT6QLmh5nA5fw7LMP5jQHBL2WGwXXcAQyzwnsopPoeJ",
  "key15": "5JWYFN23XRJRq4JsXqFKK7r71y99VrYW1L3dcq4VaXMUcaJQRyQZBnPW17ziREvsLYcSb2crerErZeWKaAJARdTE",
  "key16": "4j5PzETcLFTiZ95c1XgQozebbTC2yEqof8YEpWZz2noULmWgWyP9K4Yq3XDnxwgLSoZpde3NtETzZZftWHicMMvZ",
  "key17": "247aGWUgcYkaWQ9zY6ApRsH3CuugS4dVYEKLeSJuhHtB7oLi7EqUnjwKtDgoMpSf2FotENpYppq47pwWS8VzcTrv",
  "key18": "5hS1eU3wsRqB3yhti4JNzBxCDNbDjA6NggheCJBMx8stvX7XL91u2kFvy8at6tv4KJTPvsrXu3zLBVizVDNxjyzL",
  "key19": "5BqSsAaoEwuHkrWcw258ZmuJaJRib1wV1vx8Jnu5YWYuYdB5XFjEVNnFojDHmxPXmwHMgnbDAbBGFDpH8shcQzEK",
  "key20": "5TkwskgfutnXnrer8j4X9cyQNXVgM4mLDAPfGoFoauvxdHuJzFFLMXdz7CtJzEhmiRWdj1cHAurdEqxB4pWDQgU5",
  "key21": "neUj8UyygJK8GJEErXJsRrY4u1R7GQ36Vjy3V8TtFEHe1kz8zDq4DPyzsFEsRo4XYwkdoA5ehKDhENQv942gf1F",
  "key22": "5YtHyp9zhPjbSTis9LtPHDQHJa2aZ9rboJmyjtNqg6H3hnLBXSjy62uAowMCd96Uu4LCamqMich85SzgPiH5N9s9",
  "key23": "461UFJMxGz75fdSaaMzdCeVMCptEPBNYTK6aU39ZKNMdLDCgcbs8ChUaSZ17TaeddsP9JEkXrAiJZQSTxki5mpSy",
  "key24": "5oJ6iV1Zj3UgqkS2uGkkXLg4Z7NjU7DeDfDJfCwvAQMxg6hWxxcaKZnUwbhZFA2owB7Qscr4hVxKUcnmwyFSabH2",
  "key25": "2VYvzKpYAB1mA37AADTVsinhw8VKgCuvfR2VeaMnSKaNNAUv6T7ZsUAtzCpqhemi1pMx98vS4WAfP5Wc3A25JiN8",
  "key26": "9PC4JRWYnhTcaXtdxuz9jcokwbPvTPJ7kn4ThbyE1EuCVFc1sKuDGhDGBx5MyRBJu1KascQEoSwJTYhFwftLqT4",
  "key27": "36wMYj5trfS8ijoWeAJgeywQY5nj8mBxvy1SDn23kPv1vdMgfUwSyZsg8PeNRYD6xZdhQEPVh6zDQEeQz7tyJVrY",
  "key28": "4TEWAQkLBPiTuFL42TwiqSThQQkjWRfavyH5tzjP8VTB46Aez993hbQ2YBP6cKupsDRLUyqStpn4v3ZMdNqWL3mq",
  "key29": "2ixtbm5SBAnyyLGt2rwd9HiHcE4rP2TxSqNfdg4UfRWknWEaczKnqAUxDgzsaZwKuCJxEuV19yFwspSXK3EekDVi",
  "key30": "39Q82FPJFBrXeWESxLeZdXx5xpnRdbG7hZv1wNNu3TnZTt81gkKZe1HsYjPxbThvSqUeiDtaxXxPb694zPqLD25Y",
  "key31": "3zpd41nmttL8nC9ugLkt48YcXLVGhfWF2zHXcVP2JPYUMaAVvw4cog2UXgdVU1oVNPL2WfAAK4f2Qi7U2mENXxap",
  "key32": "NcrZ7h3tFtfohS83JLsHC4dbQv7gSy7PCqW36wXh1TTKosVyHv8p9cvU9JEX7GC2iY8GiZsa7L2UUJ8fXwqkx81",
  "key33": "4j3HDNDuyq6NiisfRzJGS21nPJjPNmD8acETHjr2VmQQ98Bp1bCUK7bSUqJ6TPw8TpmSCvPnpAQvD9FfaJsjMRjY",
  "key34": "23Xzf4pzGCfia8B4e1fru3umGXwRuv12KZ7ey87phKqXEuKm8gR4iwCxdNCNsKL7n22pu1xdeHtYtci6Fq5K4e7L",
  "key35": "4BtWJP36apad73Guojhc7nqBhweCnBzZGTYoXXUEAqHXCJokRwpL5KgYXJEYH1shHkBtA3GSypd1GA8YrE9Hz8Eg"
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
