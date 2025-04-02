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
    "3HCV4jS9VwFYmYCd4MfyLapNrrqHXZXJpavPK4YLwgbusZqshgpBbpVh3XubiwXMvQPn6tDNnUWyFjoziYKsze6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gKmSu4ZRd3ajVGLHSd6z2hSHyFG6NNX5rLWCPRCBpJM9u2TDhCWqd9G3x9Dc1eCHLQjW9jPbdibDycTEL4JDBEF",
  "key1": "GTh6rRW5FUVMs3dP1iaGWXYncWSWKoKgQ2dvNxbqxDa1Sqcfs2UVYd4cMQp68TL8KJczdzUpiaMmbE8Y9iC3TJg",
  "key2": "LjCcnmN4KF6Pu9TGLRW2jmSCNxCBsj4Kc3xKsss6tyF4ezDoUkKqraBtYa3kNAMH1rjCWHVPE1v1CouvnaMAMhP",
  "key3": "2XFtwxKG51MAR7ChqahZYEwd22QJtuD3zeBy6HNPifVNVcKirPuEfsyZkeQWYKQnMFixoQNfYSrv79scZscYw9DY",
  "key4": "5dqiL2p4WsY696EAZznCwL2TYyi51zCk2mSQ89G2sropTLmaPpSFuhHWihfn8s5BegSRfnCZvQCax5419UZtGW8g",
  "key5": "TFG37YCmjdQva8wEgQWEhRQHp4sPCw1RpoKAaPZnQ6zGD4QLHf1fBnmJkxDXGjPvjpcDH1HKknoUYJhLCnBUyKC",
  "key6": "jsr1zPuuCVJWZ2yVGdtaq2DCJjBMDKacgCfrgyc1QdCFZB9bA8XP2Q3ADDeFMrfSQ4PtJpExWZxXegAYrKCdvRE",
  "key7": "3Gjk28b721z3eTHL6YbYUp3txajyMdnL4sjYSEz8V6AQ6PX6DGQjQkMVcWYdxKctV17PdXhDcfVXULD5hUmQyvtW",
  "key8": "5gRP9ZK2V1CR2DCdmFgmYpikLEBtZANAFvydq9ia26m4vsQmvfaKNMb8BrcVJxW9c9kseR46PfdvKH1Uwn2F59d2",
  "key9": "5nu5Tiamu2QgGXok3s2YfTgGp4yuckZf5pH2YMUGFTDbJjXiMuybGP18EFPukkbfek9uFgf5t7UtkQ4ncWogTya",
  "key10": "7b71fUGMMck66mXcxR7fMz8VqRNBZwM1Mnuisg7mxK8zF7z3K9Zb1P6U895c1eb6dXeT37wTYTdNgjBDtShASqM",
  "key11": "CM7huwvF6YGBDy3opjqsteHZArTxHGwDw4Qq4ejDaRhoGVuw7VvcWscXGm615CL2f1amnfERqsutmb4Ws42E52h",
  "key12": "FWredMuDadVKmPEqdNbbTutADtnUoJgYrdgUzw2nuRZ4PF4Bwzi4gszqfT1vCmJL6SLagHYfncQz5uGMkiAp3Q7",
  "key13": "5cTKSUrRgoYhYe3ppNhL2zYpuRE4j8F2x3PRx2uYKajKvxkYQbBQoVjTY1RyMpWhuzrDGFZJZRzh7DbWcjr2tEv9",
  "key14": "2c9karZV1TPCWHiAq4bBTXxWyXKcdMP6pz7sCpKcdmfHFFPWLDFWiTmx3wnjScusccg7H6woAQFr8fUZDb73kthr",
  "key15": "61qBH8GevdtD2hsnAitFWjzfTZugehvwHsdNfodvKiFEKXhPJCGNa4MKzYx5dzk4kh94mDnmNX3g1td78BJjancQ",
  "key16": "4gByRyqAnvGLLeHU5oLX9SMhbC54LXgtYy7qizU7XW6o2eQsaigqjSzbwMMdRuvTDVsZARzGCExdU7nVsCqRq7BK",
  "key17": "cc2x2AkocgGy5A75pbyiJAjnfC64BaibBqGi7i2xVo7wqSJZC91e3qxtftGdCpP9aKMANpyAuosahTPeknizCuM",
  "key18": "bSWSvjXQVLJPCBsQpLbXAhSHNYCo1r3xwxcTxpDMahZxiWqo3GFxQVtGECbAunGAvTKSFLRkrWKEhyufYojEAkC",
  "key19": "21KV5xa44299Vq9UafARqhiVU8vmoRPstZ57igETLpft4TDvdzVZgSJBKjK6QT3CshpTSmw8YDqFhX4EouB5cRYY",
  "key20": "5t8EWAGWuFrpvZDiA5jMgZvpbNiuhyT9PQuWehkkdX9NmHHWb3YwQy19Vr7V1P2TLzRMxACif6Kk5HFZz7y4V4Ti",
  "key21": "59oM9vXtsH6pogKwJmM3MniQjQ8fHHTSycSqUTeSckQ9H8BTRDFsP9tH7VspPkQEvxCCX2e3LiNeTGZoXyjQXyxB",
  "key22": "63kBbyC5E6cHWMMBsYfBPHR5k8g5oxPyrRzNYPXcdswefYdDX1gv5a3vCqEGDod3P7KVN9m4ZH61QLUef7SKa2t7",
  "key23": "2tcRvGYuZdNstS7PeGjQ54BC7oqJnrki6yagoo7ojKrqFmNZm3CgL6woW3TUxScwKhdDri6K8tw7LQQv77xjbR5T",
  "key24": "29NyBCH17i5mKFabYanrDMXbBfm3RSsD26i7ySEp5ekPrEznjW5w53M9FzL9fm2TpYp7viDueLY3ifohWDQmHBzQ",
  "key25": "4HohUUuRrQ2bnYBKBf5VUq5KBf9zmJEWs3vogTVAoypZwGE9dJtKDrDdxpTGEjatemvQDCym9JnXFU4spjiewucw",
  "key26": "gwQXLq1zavBA54khzuBUPkWRoeYDkcUmZFrQJF7q9biJJVXRRPu4nbCGpdwVuXGfUKzQLL7uMADH1BeKPFMQjFZ",
  "key27": "4kJb88Pigv1Z4DSveCZWbpTd7gfxzEL31v5QkCC7xk3RzhRGbeFRGvej1P5eaaYt6GsPPQdFj4M6178W37rti5JS",
  "key28": "5pnqL76BS3y2thThdRPRwCDK13AKjiCji5khwEqpfMKybrPYMy8DP3hLMkqJBbUV2szygeA4AdjVebc9NiiuHPQG"
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
