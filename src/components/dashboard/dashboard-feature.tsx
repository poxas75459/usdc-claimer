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
    "3zbGmyiV7kae71FF1rhLos4HFjYWs6whvn9XkcvjakkM34GtvxCxBhyJ22MuYxjdYtcxiRp6PD1PYzSQjohLU6R6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xG727xHL35p7yjrrWhzRtc1mSyxMCUoJTkwh99tDB2dYzboifLq2bJJoXgquqQztMS1kLybj3i9iXniw5vPrF5P",
  "key1": "6aCBMxz5yfZY84Ubpe7ZBm5vX35LLuFX3btB7BeaS7JYoLUBDx5xwsZJrda47WumpvwV33SYRX82dxiYphjwVsB",
  "key2": "5UETAM6LTJpwZLFVcxK1ZaZNwKHMr3o98t4pCbVNhn5uo4JuhMqxPXyizFjZfajkQkEkE8fBJ7iZJ3JCBJvWXtNS",
  "key3": "4vG8UsGdVHyHmFPgeeARdeKFbpgLBX6cfV5DMWDwpCXd2fwX6CGcVtEw96KeBorP6JeLWtXXG7gs1Ny5t5pam7Gk",
  "key4": "5xfn7XT7MU9m2WvJPPey2zvSgJXMmBWxUcov1N69meveEwbPWWyypLSCK9R2d45zU7ihcoroxm68ZXr39BeQwhxu",
  "key5": "4B795qRN5n3tDsQss16AyfDyofs8vFaZ2dWXmkXYLpEtRRbA1Uo5G5UAqwH8BphEtMdezZxDkaAzZQkGKtR4aXiV",
  "key6": "4xC2LVBqpCfHkwDJzBFc5RtsUEsSb9QacB5NpGQsX7KhQo1aFzhJC6ZtWTyXdB5HsvMCbF75ESR9wMtbenRbhWaM",
  "key7": "3mNGuVCEnSu5JU9fHQhZzBUWmWLmPWDiLxgsj8tuPt18RSeAb4YwqdX6ocL5Dy874YgMeCL87W2U8y71zt5k8Enn",
  "key8": "2kYXd6T2yHZUErmSadHH97gk82W4ayoRfvNUw3d6mcJg5gktzDjvmXcsmRaTiH28v7SDNcBkJ8SEpwCc6sAjECw8",
  "key9": "CpjwdGm8m2qeN1voj7E35CoF9KcrNrGYnbiKYvhk8fPtBA6tcaQJh8Dy7f7NEbkb1PzdGqBncz5Yw9E5fWiNve1",
  "key10": "MqQ2DYzQ1QpTbGqsdpWZPWFE7H72wf3sPwYD9qkV1g4vp5jRA12g96P69dsxVbHj2Whaie5kcoe6UmmFhtVnJyH",
  "key11": "5iPtc74Z5Pj8MWB8fQrhsThYv8PmD2XhRD7Bcjg3N4oWhyhvxqJirqvo7ex9AyH7nK79nxZg4Tw8gTxWozkAfe4i",
  "key12": "489yJUDRZtxkqgBg8X2m57bf7C1AxpK8zCx2482NZscfczouXfsoVuHgLp2syNvXgvxm36YGYk9PguKrwFf5eXxp",
  "key13": "3Px58BEpL2co56NBdTJEJhaT6ZYgzLZuTL2t2b9KVM3UsWt5qQzjvhC7GFeWkv7umQTpmwofjg7T1h3AjQAUAnB1",
  "key14": "5L7rBuM3eoU4FkSuNnqFYcseyEZMC3JqoMW5L7kR9JVw6GFGiUry2QhNCXyPDNpykEGP7ZkWNjpiKZ1SmLqLbcQY",
  "key15": "6ieZW4YbAjVpje6wLkJ1U3K4QejiNoUmiaBGiWuxiqwayzaA1gSC6THTnAnBNP4ok3jfWbRkYNH1RzAat82VixA",
  "key16": "2aar1xfsFTu6NiTPsW6PLSuMDwBam1WvK8vKC6DgDFJXgmq8mEVuSqkWYuFo89JL8AfYoNRBr8Xr9dHCaV3QwTwE",
  "key17": "4sQw8PQ9BuhS81L7ByWe133jh7Fo7xFvfSZetVyf3K1bd8NR9Mq36MuKT8ds2JMxNx32CJH8C2WiP8rKMECavKY1",
  "key18": "3S7fG45G2QFHJKmcgZQyRYBXscMa9dsDtQvzZL42Sz7BKyvV6996dtpmwjc7rRKCPRWeEWc9jRyH4yZ7ZLu7xdPR",
  "key19": "3Y1V6fDiUpfqwxHi948obppW9Q6F1TqGi7YSDtgtqnKVSrhJHsUXYG6NqH9sDYtAquesFR5dcuk2eW3r48Qt1UKM",
  "key20": "WCe9qWEczYM5Pxp1cb6F3qNAGPBh4Km9YzdADphWtMxma8TJoDbCoAUUcG7H15uY9yUTwNWwP1VbVnBAiXshTwP",
  "key21": "2xU5bGrpCD5uv3uVWBKTYN7o7T6Ktno81MhHAUr7UFKkLtkJxf8VUfXXZq2fzcb5fJegXUqtqqRqtK14ZDKeMMy9",
  "key22": "2Srf1CP5EHreNjNwSPgNiG93X74yh3ttMrx8SnyaCq5twy7XmC9pRwDrbDf4n4dQ2n3kyXwHCtduCDVN5a45dGwL",
  "key23": "2TktwDn4Dm7kL4srPXnSCVwGbe7oQXNdxQJ3ajphmrYP4CK6Wxwi4qGb3gmsKBkvjgy4vGXh2Td3ru7ww7MK5hRy",
  "key24": "5ZujxPG7cZnTAVj4kWJsc4q3LfbNUVyEjxJNvExLtSzc2QFrjdDhMWJsrS2yE6epeA8hS35mpMGX9SSnoYPn9gvZ",
  "key25": "5wJLXNLfg74tH4pmMskSDwGs7sgpAvQ5EfeE1LAwH7yrKdqYq5mGAo2uPumuFNHv44gXePTaQusq1CHyitPPL6NP",
  "key26": "rm2tJriE3o9zU7QyemH5mwDdAbNHNupLkvERN3aePiSd3jC58KpRK6nc9ynyHP4WorwypWt8m1KLdq8fNsM57xW",
  "key27": "5ZHqmvki9SFjHfE29k4Kp7QMKxjvUNa6951jeAXejjzYVpBmUiPVNGTH26cm5Q2W7AXz1unhRZygZicPGgpEzBRM",
  "key28": "4m7sxLdQTTUjMkMV932jHiV7yk7HvqCnGCBAwrDQfhwtccq53wq2AyeYMba1GEGxhdqWUFS7NG5XmhQXFSqaPQR",
  "key29": "5QM55W9wyhJK1sERcNLozdaidFGcpyzAa6tEJG5cZPS5xN1oRrGDHcbqpgkwoii6Hbpjci9zgyrj9RFCiECDRnA2",
  "key30": "3wbWS4U1dBbsvffq1b6DJ3JSw8fhbUr4ezrxZyqwpjHfnFG8FKvJq5PY7iMp1eZ64Fy6U77FnxjNQ4he6tcy6yAc",
  "key31": "2mfRMPTT8doi1seP9hYrNyNR3SoEtx82EWfYTkE1izCqd1u1Xx2tCfErjjGg5kqVEPiqtFMur3nHpxfXEc7iDDqV",
  "key32": "3A51SNgLnZXP3DZ2MWGfZGco2NNzUijoKS7eVNaMmwVG3xkAyuc7Pryv4TE7EZrKuasuzhqZCUp1Qc4cP2DNMRjs",
  "key33": "3voedMiMfs5iHiJdqrEwciEJG53ox7o2gQewJTnRq3T5eLMMeVTdiLhxCaHk8mR1kjB1RUG9ZnDftSHfer1SetAz",
  "key34": "5prbjBY75QfgnGWrvDpoz26zi7LDpKL7AksgdJFt7rZfrD8vMX2TqPqwA9YgbS8ndRtMDJrMNe9hBrXYFe1LHgd3"
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
