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
    "2YVyvKNVy1Ku1iXtPD4qKyZ2z3gMow96Z3SfxBHqs7e3ET5SHDgxzWvKYTjqxxBgstyPa3TxuTNSSgjDFZyfaAJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wDy8E6jSnFbcGT98Vq7s84zhTZ7g8BDVT6qENXKnaHwA9sFA1q6ABh2wvFakasbGSDvkJv9g2z3PjVhQrX123K9",
  "key1": "43mEuZ42P25bgyUdJxBarPkvT7dK5ZBbSn72u6Eyk8uojkVnnpnMTLkfyGXoo6ZR7HfNQiLLMQnjQrCbA7hqsN24",
  "key2": "2hfA84zkL2J9rrwnaVzBoYgJnFs2bJfexphXRmWfLS7kZbZr58B7xvv8hWF5jsJoTci9ARERA9A4vsYzyzXvqyUc",
  "key3": "2eH2FxZsE4Ea2qF2aMugcrmwzcfBc8xWd6WNsFC4SgkSKLbdVPdtuw4XbDqARgNb4gTuWABsHjEb4tHKtmy3oDy4",
  "key4": "34JWxAZs7DL3Di6DnYgV7bmMZsV7BajvoTuz17SqPM7gzmR2RYe4vAvrLH3U2eQvZT3QFVgYhYhkWUaDnnzFE3ZM",
  "key5": "4HRwLwwD6jMNMxuxz6xgXoJrz6svyf4Zqjft2SmN5junCdKZoXdZ8N2P2XLz6KpSgsz1N88N21WpZr4F4eq5sffA",
  "key6": "5jmbTJHwKfQxjJ8UYDQxK53LXJg3cqc84kebEmNfvE9TqtKmbY7T77A9cXAi3znX1Ff84svyKbJArQxM3D4eqUyh",
  "key7": "ZMw9rUTejqbCPv9iwcgiQbQR9fKEnfm5DoNP1b1K6kzMR3ZWet1ePuhmzmaX3UuTx1ou1cKCK3h5gRqrrSikgKh",
  "key8": "2uKpuT4RcBwB1N449y5vJDayneeCTSn5HRm8LXZubZVHJqLedHeAfHqLozKjPBBRZMb1JRwWG8GjP9Z1eNg95Bh9",
  "key9": "5nPCUVC9pUUwbrA7eNMo8DamcCgKaU5XZSxMHW42LoWTsFtCiunDrKkhFQ2KvP24vW52JxVJefDnzMhVcK8KE8kd",
  "key10": "4HZwTG1k1jstChjGpSutXatqd4VR7bHzCyfSUinngL5Ugx2Zk2Q6xyozssnG17etFZkzVwN21ZBtWzedu2DxtAu9",
  "key11": "3Z8V2DMVqMw49aR9zcv5UvB5keDFQP6e4sojV6ef1vFR5De1Dg6tTpWBCea7xjfPqvUkCn1foX8kmK1LMF8fPqWo",
  "key12": "43BgtiHe1MCTxrFkbrpKHqkx43zG91nqS81uKc5xM9fmTZfWX4Wk5VouWd54zaARuuJP3zPNkVqeKC2XnRmfbptY",
  "key13": "4DJsYKEad39ec1gcJ3RYArjDa4BFthq7Z2EUjtnV7TJSit4BM7Wt8tAqWirK6YnxkePetcenxr4j6FoyWS6Ai4uP",
  "key14": "3DN3cLNz9bZnuCV2EMUkDozRXGjXnQj4Qo1cJSKd3CuUzh8D6zAibjKy7zhcd1y5r5oMiLmfkSF4js48VEuZjsBE",
  "key15": "3dZZ4duKXXU9w2E8im6LBFUDmff2kcAgoN3wDogDPybqLdqdfStDJwUGxpGcimXZf8cqYM1v6Kcxuo4p9zFhbED9",
  "key16": "22udBbjqHfnRVxYVNshf2fC426xKGu6dSRdFDU5jh5GLvh85Jhodsr6bxPNuG5yutFUPdMdp3WrKzVufoC9j3uYP",
  "key17": "LJFgChQyvcGN9n3157MteaXnX6wSqhYQqrNzr2JycN42xJ7zJ4mZN25wQ5Ps6vGKczM9NtnQWLx4MiQNxLkc716",
  "key18": "5SfRRnYWifdufYtcPLHQiiUYiGRewoJ3cE5fNpaQ4Axn8KXfiqpRgnPz6Z3S6AamExWZgPTGePmbEYj7EVYxJQXd",
  "key19": "3HH4DnZV6Bpu4R8CuYVJBST4ATPngRBvqyGNHAV3Kbet2eqYnBCDRvpd84kzeR43QTnMMfvBAgeAGWLzMnFtYnbY",
  "key20": "TLxHPKgxSwSzAGTyyfkfwz2oRvSuGVjKo19tF4S5Z9yfAfyLnhRLoWSbX5DUfjudrwRCGXB3C8XjeK714gDsefG",
  "key21": "3KsPxpVdFBdgnZKc3kmGkzykpdPAmfP17Qm13f7HGmktcyZytxmW1XTL9k3rftAjtYozjsM14Jf6cFJvPLSbwY7",
  "key22": "2Y1J5ZQxvcABX3AsYHZPxe9ZBBu1jiB6w2MfubcxpcQxezhkFaaPPRxZYYXWKTnXdRidvRZW6dyWprF5k2FMRzzb",
  "key23": "3PfTPX4XZEqqHrNdV3b6YCfp9ULvqexKpEhQYmaSRjHNjGiLRC2V3w2jKiPcZ1NLLApmhc99CBs3WAteNXvSt7Ln",
  "key24": "FFtn89bVrLNsJFgqhK1RHVTiRdvu92c7GbqzQPFsoD7EjfyfJc5J76esuTNUx9DvcrZYzH2NRRqkG6dUhx6rAZg",
  "key25": "3y2bkkurvvTvzkFDpoj1SPFFdWEZJuUyay4m2kWB8tG3pEKqAnzZQwLBUhWfJaADyKpv2QbA1kLzsFiiNvMoAt5e",
  "key26": "4n1dBrLCMu8S6JHWdW55RvZjhsYWqiUDYBXZJofGYcC7DQvFNonNQSyaCVQhyZdCNSc4ZYZQTKGh8t1oDthsrgip",
  "key27": "BpZqhn3sBXJSUfjsepM2QsoM42nM4ZoQ9rAV9vamt8kmW5PtszR2vDiXspJFRoMSAFAKLNBNoXaY6eNNYnnu3sU",
  "key28": "4i1YtdFvUfAjFxXxTYdgmf2R1P2AQkUdaJkZaWeVU3dv7KVySJ65Dv96kyb4mfbw4nFunaPMnHa5uymvfV1WdVuW",
  "key29": "5fiQrxgFib8uZ2k26erKFcRDiHPtB8fJcTTbezjJbt9tVFRxFWTdRdK5qW48i6PZmXEEzqii9HGuxKHvurG1smWo",
  "key30": "5WZ2ViU3n8FMt5dqz3CynewXv2eGNLqTirjz88mGRYsWnJRwiyQmZxfCLm8hKP3PCfKmUCPwMgnv5cwXtSRCnhqD",
  "key31": "5wUtztJvZK4awfzzAq2VcDcpkz6NzHUQjCZ2BeqtjHgidsTaWd1VrMEv6dYXFacpn2g9WvBYfdWRvsdKtXbGXgFc",
  "key32": "3jVahE6egXeL6CYh5MLnvDddTc5wPQHDohvXP4vMB5wbVuDbCgjeRLVaWYL4Z3r1cG9Ck5ZqyaS51mopwnULwEfk",
  "key33": "5EPRbZB5wYE3ZG9TMytnRGWKfgfFE3zpGSGgrb4WUmrdou9wrCRMLQtyRbYMsukpZxrB4jRE7EAn9ryTaMQ5tDAg",
  "key34": "5GRSTNuEgvDi5BYGSRxju9ovZG1NkZWRt4BSY73DXgGFTpiUcyHoQnAA7XFLedb9ngyCFw4YE4gy8ufsZR38daG1",
  "key35": "23SacJp2xPkBFVyEu6bTa5RPQ6Bh74VPnNF3JXYV2kGzLvGnwTYaG1MuE8yfvtKh5UeoSecFnTLpE24X7JnM6MQp",
  "key36": "4CyyFQiiqy69E7MJeT76u1QCqJTbuqB54NH7pApQkKFtp6z4g7jGe2xfbPBDXk43spA5jPwC1rLvUtJ4WM8YZnbA",
  "key37": "7Xe9vFX4ZmRKURxgWGNTmPq9qvVd7jqrZ2Q1rPfE7yws3YsKYdMFYeyhfFn1LuHwK66sHAV452ZuZRMA8kbqGkW",
  "key38": "3rG2yaFqtc8qKiXHTbWpU4W8ajRDHKM3XguwMZS43y32pjBmtPR3yd1mZ5H3qynpn3qaN167R8F1wwFeXEDACo7Z",
  "key39": "hogmZ1TPtAfCvh62LC19qWSnYVCGA2t6gzpgBtDQk847NM5GyLPwBdET2TAQnuk5suMu1JPFGdcN76Lp13cYkP3",
  "key40": "37oEiyN3xEgY3af5Fhh6sieyAqKGdtSkPfdL5ESBmsBtHBvfg3vdQhKbXEAbHCGquteeBwPp4CXB59LCsDiPYayx",
  "key41": "47n44tHZr5MnmfChm9iYgkv56WZqrkBHVTdeSYMEesXfqvrGxsb2aEQ8uWcv9bfnt5evtFsdEdVY47hW28hT83YA",
  "key42": "466RyHfdGoaQV9mx1j15t8AG2MHzxmUZfh8hCkm3pGJ9eSNQLCV3pq5LxSTQecm5UVjkKsn1aEgHCukKLagAACbs",
  "key43": "id8HCFtX69Ffz2FLAcweZmj2ZfzXhQ7U4ayZtcaF3TRXzj4AegK1J8toGbD2Ef6vDeUEXcvkotDLgpuxZuXVEAQ",
  "key44": "4rbvab9Wizj5JMJCRa9ELdpwNvtmc27Tx7YAazRMRSaEYQcArij9FEttvs3MzGrcUXTHdHuozL3gKzi3TcLeq6xj"
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
