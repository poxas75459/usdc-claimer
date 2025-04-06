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
    "2N7Q3PzwSptZZESCx77h8tuD5ofNBUNKoWpz8jU7smXg9medsJYf9FQB2MYPGnR3TCPA4mytSDo5GqDwA4PuGMLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ScQaF8TTGYJjsHv99fS5YMK58La2w19Upm2K8VVBU47eZ5ibWXVuoFcLZ2GbKgveGGpqQTpNhZQzNvc7C3nwBrj",
  "key1": "735nDmpGmM1zE6GSAs4QBB4cgD8Nyhpd7yiua75quGFjw3epcfcq7P6NENWVYUwTxmQqSMfiEuNb6sVJaFTTG7v",
  "key2": "UfGXQnbYC1kq6rSVT34wWCAyCbEPenzBtojJpVQpiKK3RceZNi4hCWCodVDitRVTggaLMx1vVQYBzYuijnvRGqN",
  "key3": "3LNPXuzvEfYghJe6L8mcjzYhcpLKEh5iSvcRD9QthCL2sdokXmxzMWjonUs8pYLYy1avLMzqhgQfHL6UzmWosCZD",
  "key4": "2XyjMMejaGWpck73xWMeLuetcUxQTssATegbobh3HxCwodge136bEPjQthHDXXZbFv1QV8KWL4ZFgRiTRgSYwG2E",
  "key5": "5NfhnZFBQWyWajrgKqSJNZJjGwWPrUR5jQLPixUrc1dyPUPqY44jRqTjP82AC92mQvjM9E3PzcLJ1zTekzGQfBco",
  "key6": "T3mosdhdYCN7HeaMTqsxpLDSXjM6mtTm8TUkczXbo32GtdFQutRwA636WsndXKz6RRohwf5TEq5s4S1u8tXmMDw",
  "key7": "3vUrZFwWxauMJ67tabSGPWP1bK1LxVm4Q6PJX8x8gbevFmXxnqMkBxjHmAgBQTZLZknPuNBG7fY31FYyaNAW6X4V",
  "key8": "spVDekrMfyN5U796cSKNzrmq4ph4rL9fExgQ4bu8Wm1g8FDALUwAUvEESbrf5Hbod4najpK7QGSKshZXjijPDuL",
  "key9": "PoCcF2WGENQfh7AZ84X2mH6PSARYvnwyCW8J3AA5qxa2NvGQpoLAsvGwfwhPHSBX2bcbzGf7NdvWmyPXzFM7Pub",
  "key10": "2pFhaRCTXY6Ve2rKNebkKexmpEKmvRPJptJFByVZBywxm4y1eZKpJzoFPCeBj1qTkwvWEox5643ifvSmxauFA15E",
  "key11": "3toSVfyhEQpefA83YFaUJwfYqb9bAi669Njtk6VZ6VGkCGQAzqTbELxztsy5LdTpREaNrwpfRf5HczZS9SFRLrgb",
  "key12": "3SqPwYrNJieag7bxeFEfVJhxce28eQsHQRxSitWLaGo2nww1fvEzJG7kJwDV6WF2ejf2fybA9YMuwVSvkbju1vFi",
  "key13": "2P3k7hGnAXPrew5eTK6JubjBDTg2LHUxXwMqGsfqWkJbs7j5aLUAAfLgoRhNzGwfo3TqG7fgSee8UrVzzZcwMZY",
  "key14": "S8hChhX2yxWJoJNPHHmtnq6uffECVR3hBqAA2PiXb2Au7wGtAyCTKY4egKbUQZ7ccoUH9tuTaPwaPVD7Pszb1QD",
  "key15": "2s2u9V2bvbYAWX66zcdbHvMrKS81L5UQWuGXoBN89dkkZ6b3yDVV1UZ51rp6B7x7sNJFspxvFXTJaU51zX468jEB",
  "key16": "KiegQrKmpptZkwaucrydUrTnEiqWAajo9wY6ckftV87WhvDW32tGAVtu4iEiHN7fk5dde1PniukpWnRn86r84Rb",
  "key17": "2fqNehjVLp2F33owzqReyAjm5hRQGhoWgR5Qv5Acc5V6EtCkTimCoENCZk7W9EBPBBLTr4PV4wR4NEKcZescMAQ3",
  "key18": "2AzMshrVxVdwP2EZHzsgT7uhyQJKoeg7KrXjdepkuo34sLMg5JzX9KU1Q4snMwu1R5zntaBqnuuMhz7cYxo8EmSE",
  "key19": "tVWPoTVKX7nHBM2L7MvtdANmfYuuWrxHGMDr6bvZ2mN5n1LPQTZpsisgg5Rs35TojLP935Pqv3WWMkEsYyKbNe3",
  "key20": "2GMHrC7WbJdFa5iVowbsfwAZuKo1U4JZUXaTzTXkVExjJXJ6p9ENoDhNhm7SKBvbC246on6nY5AjzzSt7H2n4qJi",
  "key21": "24JnCxtFLCHRWeD4W91a1MZs7K2h3DUSAX4CaXMFe51qtNAZxJvoj2bb41aE2q6b2KacK722bWH3CGpC69nnRAPF",
  "key22": "3w2isnWC8Xe6DXAyoXcFtLYRiWj1Y7Ukim9JFUPGc6W2U16JngSne1rNMNSea9syqQSQ6pdCn8aK7cEdghFNccv4",
  "key23": "2oBuBaMEwJaQoiwMq8LSsTyqzBse1194XUejCHS4y8xHouxr5teMJT8JJvEdN9RxbZV43ABeNtgo19V22uQimLiL",
  "key24": "2wQWqeKsJaq4pK8g9PGyWpc8SxKv7D44XPZp3HeUWZF3qtWkm1K5bkzw7mWe5JM9xq9sTZPnYfKvhYjkzkiDz5Ts",
  "key25": "4SngmLpCLkAGN1xmcsqgHgFyabaGa6pkmkKamgvSE6LGJXbKFVtbxL2avigM87NMTube693L7LeRY1i5Sr39fk5S",
  "key26": "5wq5qpcHzR77vo8sVdL5dEvBRdaWjrKh3MyqapNpdyyBqWioBdktH6fChcMbkgPwrXqYhaPB3BuwtKF5MZ6CpZfS",
  "key27": "3Xw9gSc22ARyix6tHZLD3aEX38ffUZfDfV8kFLHxa1Uds6CEUV83kMsm8tuBWVSw4zPotBWVmi74JU3zxBj4LWCp",
  "key28": "5Mk9Hoz2urK9gRgigytEwmJJzwHquvJygigmKrBKNkDn42V38mXHiHTxz36PC4vDVhJH3nSMPdq8TdRJT7QMdDQ5",
  "key29": "42MYD7EAuQdVvMNncfAtoGT2ecgDQQATzkUD2MQnmwDBo5T3abGudErNe1nYFqgkt4WdpecyQQpDy4mzs1AQGiwP"
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
