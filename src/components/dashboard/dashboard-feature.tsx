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
    "5KQF8NAkYMQYUJJV6ZSSJMQWfsaio9vgxujiuSeoKNaMYaMNcTTnmgjnUpddrZ2Mzv874Ys9DeAitbCn8HB3mUeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FfrLFd31bvozvAjkJx5dw7MH2epb8fWDQoWfYJrnbwAp9opUpN4tygaA5pDhzKED6xA4uj765xzWZMELmWn8VKe",
  "key1": "5XNs4U2FYD7mmx49xqfTRktLYwGfrtqfX38kiXWDTj4u5qvQ1HBKouJEYB18BtLy7s6XZgtw1FnjMU1CAn9kJURM",
  "key2": "4GH4pWABSqZdmzTLgoXLutPPDiYwPgCs86w2TJP31koqTewzakaPFQLjf1PPVRkUpkmNe7kKBMLwy1yoXREQV7Fg",
  "key3": "5rb4PQDivDSccXyfSj8yNKrzTa87BNsR3wfJbmZ2yj3JVrwxSgCt8dwAcFo7HcWiYTJyG6dpw3Ccu1ZjphCgubq6",
  "key4": "2sx6NFaHr8qNrBe6foYQ3s38YhqHKFFCQVtVyWWT9ywGPfxK8hF4Cgqs4aSFbtsaUT3R8XXCLpfDvp6kKF7Rbxxp",
  "key5": "5hqFh6pfegMRuFvrLYiNjDTJW6DPRPeXua8YwuD3GM1gC7yGEsH99pJ8fYdVHdq2XMzdcapCpArvHRWNVf8WpWCK",
  "key6": "593PfKFNSdVJ7Fndyvph5oZfi5ushG4MwFmQjM9hRj3731E1uhdkA7X3Y2ViRHbH1dQqNFSrvUFsxYwUQpdEVRhL",
  "key7": "5K8Ga2Csx8Li7REa3s9L6ebRRpS5sUpBefqVA9FPrduczTC8vSz75aCxfkBdkeYX9YAzQWZ4xduu323FyJe12RRG",
  "key8": "3ahUeSHr6VZ79La5GRk9meUTztU4wTHRvusVuiJ3wJrpuE48zhmdhZWe7Vzo8AEb86GXkS7HBvVqoah2MnPkiBhu",
  "key9": "5UhQtNayTz44FaKCCE1e4DvwBW3dL7H8bf2dqZGoqnh2hjGcikzTZNwAM6mX8arAhcvybCN1b34VUh9y6Wdy9V9b",
  "key10": "5FDqSWepps4cASLeVoVRf3REg15ME5ozjpAfwKHcw4XSbW7JDEkKG9SDr2mf9M5oM9gJRTkfFuLtqEDHeq7pWXW2",
  "key11": "2mSgMFHTd1Xqhk5JqXqNShxbfvxdTP9N1HoQNSjnr9u3ZzEpdDzVLK95xZdSrEcvgTVw6Z69Vb5iMpntezwWuS5F",
  "key12": "51LNZH5gkkUHm2WBDVRY6mPxnF3k5G1EQJKSYaeb3YyRLsQNqDTBsdXNG2nXj4NxnKCipgoaB2EX1ziKtv5ZF2kB",
  "key13": "53CKX1QfctFYGM2tnPHi6whGC9iN5Q8ZKjKLBd9cMUz1SAz7z5p4ZHPMx21nobgztgbBvJji3vu4NSkKJ67uBgU6",
  "key14": "5Z46r9jHN53PW3LmnzqwwxRdzBSarWPFNsW1SFe9u9izKxBsvxfGSfWSRTwNe1WjBWJez8p1NEkqJaANbaK6VeVH",
  "key15": "3t8jwJz7JXnG8dTjy8UiJZR63PUukqoNHuJRg2cGas4KKd6N7RLPrYXJnYZsSZYmr2aZZw6m9s2BgwAJVyyjdWbS",
  "key16": "37HAgowjuSRKbS69btVU71jhUyBZoDGeZm9nYi5jpsbz9aw6hrzSdxaGZC1RCgzdfcAcAr6JQqDMSc5mkSQMWWTB",
  "key17": "Veh1gd5d4bUsKY1jbMWYBDv7VLL7HQYQbUgEqtERrZdy7caFqF2hJ9N2Y59StJu9TfCxJH48ZSpSMbWQV2sQUXG",
  "key18": "3B7n7DzX9GPVx6c4A6ESNKPE8W85fpAvePASdF2c5gr4bkMLJtx4ojbNuAX3nSA713NRqmAZp6NJFGfiHe4QebVD",
  "key19": "4EiAsaZbMhyqAKadNVWRnQ8G2aE577jeVdr94oWwW5piVDdcnSuinBCLRp5QbGfQBTey5WAwpdSW8MDW7V1hh9HL",
  "key20": "zASywm9VGKnVibeQhteq9P1XzZ825efKtD9JMXq2xgmGVQ8rihXwHwPerCp3ejzNp5FwX66hU8WFwAG5JNJ9Hzu",
  "key21": "25BG9KnWwaWDbdgdkKxBb32fDdvrsMFQjLXz7R1mk378Hq6bWGGwDjXeemo8zD3xB5JwHsy1V9FHEwKMuqc1Xs8h",
  "key22": "3EtPgrTA8qZcqA5JjGYqhhQQ1t64BFHZZKLgbKNtjFoFGp9qLY5CQRpcqYKZU4zUMRoMiZKUZpB8ENF8Xm3x1UBg",
  "key23": "3fcQC9uGS9LrtbxVXCzrEZYz66Dy4BXfSesm9YKz8gaXdXnyBoAU5MQTStgpHBgHZxJniyutuNwGE1f1ABFHfC9Q",
  "key24": "gAXM81oWU3Qr6c7Aam2E6SGDykLAGdf7zXVNBz9kuSrRxxzpboyTkhB8zSzZJKX5sDjNA8YyivSHy6aqR4JTd7c",
  "key25": "2dxDHuYt1KV6f6Ac8EGLNDNb6jQKZMEZD1hVm9kBjJJm5x6h6acayALRte9ZgQtD587NQe6eukWHMG8SQp4ESftj",
  "key26": "5NnTy6bDn7Ag92FRXxAE5X3DBz49ciTBp82bsciqzBesGoEsj4UuzmB7YwZiRcSS1QmvmRtsHFhUaswHZCo5sj4f",
  "key27": "5zNo45txpNUkFsTfo1mEb5en9rvx2M3xSAKmp5CaFWrtqhyCFfEbosSXNFE9eBBycvudcGPrPQBSYTMTcN4bZDxZ",
  "key28": "4KfRoC4DThRM29uBst95m59wxESbCktfBBbpKTBPxjFzXduLnFuXyADmRUbu3L7dqBKhWuCuDL4zoVmaoHnFVY6A",
  "key29": "2mhiR4ykrR2Qj6WavTtuCPrqnYV5PdJu8kVpTSTx8ddt9GgakzRArx8uD667Q447uFejomEe5QQEkfr8ZAaaiRPS",
  "key30": "4dqroD9bx5s5JzhB2EK9vyZg7fxPKf3fhKzfFEq9RTez8KRyhWS1p4rzg6kcxTHeXrMurHAC6wsRY9H8aJ4HYzn2",
  "key31": "2drZjob7TTxU3qSVWsRL16vBY4NjFhkAPiQojA4m5v4Q9Kq6Asb2yWwqHCFWCD21UTZyGi4Fjxns6hY5SE1T1MCv",
  "key32": "4QZjZHLMZL3okLcYpY9G8z8whtej6EXYiE6aWNPnBSmBj4qZzy4qHFXbLSnQd7Nwaq6uMhNEn3zNq7ib7ecb6Apq",
  "key33": "28KEMAizDRiiBtTBLaTzLPWEwWydChhZ8b6fdYDWGbquorC9iEcYVR8WWSzzzdBofAs8M1RVZqjSFbsZSx1qAqLv",
  "key34": "4YBPNWSEzJtD8VjWWAMAPbhbhRDtL6BLLbXv6DukmeBsLajgKtGxq27mBbwrhJKZmjjy2wBTrrmVTn7DwRNfxt7v",
  "key35": "2wBak1WRiqntnHqkyAYfC8316SDhCwFMsJuPPLLZxiusz6EJmcenY7VGpqUxFxtypkqh6qBSFsesf9FhNaoXhhBh",
  "key36": "3vU2N4WgHccSHGWWsEWt7XsYrmAHNVJrLsoyqraXyJQGszHzJRbhyf3e4tQQfQQYQcRtaQqgEEEUoBDeKJ1HsPTt",
  "key37": "2UZQTrXQNJry5Jki2XT7TRKYtJ43hReYEKApTM1NpctmvvrBbU3P6xMZR29gGwe1fwCFwpP7Vdv6RiqQz6i9FxKv",
  "key38": "gquP2VnSghrKGLTwvjSPoLuwfF3kELpmjqie6ZVb7brKSEjAsXL15M4dJpLy42r22MfmphLzABzpCczguE1hz6V"
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
