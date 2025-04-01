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
    "3qriyDhv6Dw3wTBy9CGM53VBX3H9rf7ZdxWy13N8RpTXVQFs5XbCTKCe45rK21Wmt9kkkA9GtDs2vABAmXpvZMFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iX7rWRZUxTTbYPMHu24Ws447UJv8dcPdoctkgxVoyyncwFg8nqz8akCn1mFy4Wd7EFiKNQfbkFFvqBtmG5En7iP",
  "key1": "2LAdPttsXvMkKsPrK2qGeNS1GhRXzvKxkX9PydetYktJtTXfXaXaS7g1KDDomnXChBwmfuf6KRjgMmubP7nBGssS",
  "key2": "3zibvAJei7nvoCkHhHyVGEVjWgbrCfARTGHsQ83D5Ber4Vbv4Q5pMByTPTcAqPZQBBxxBnqK3vArrAjbMn99ZckN",
  "key3": "4QBw7LGPfUs6CzibE3xfh3HMbAGFnRriZnRjZpZD6PfkmEGdNvSdEac8HZZogu1vV2yDDK8u2HCebWyy4uQTjrtw",
  "key4": "5mxryzJVENFNSKgTyVP3UYX88CRFYvqBgAmqXmFz2FzVjzn2tPwtDJacFqNvufHQUaVDBBXpS4oEurRPNci9BsVJ",
  "key5": "3AU2vaSs5PgpxQoweU1V5PT4hbmWmoP6L65fyVHHeq2VtakDmaG9x9u469fDpM9nPmNKQpe1R4VNboUCMuntCCGk",
  "key6": "5HVkKnMP6sroKq6LmeMRZQ9QevSXyQcBPaKKHe2mQkypjAtThUYWQXNsg2c4WBBaixkiYgUKnAokqFchZJ7LsoV8",
  "key7": "65SzMoG1pQd6drqAXFWEkc6EYS49zEz3FT6jJ32fkTfhXorzYbPvhuvrRAiUqXqYeK42dt5TjTFdb9jUoRGksddJ",
  "key8": "2mWCthMV54y9MqhNBAJzSpY71fpTio16Y4zL8LyVfECLKvmAGciU7EXtoGidcNJg2bwqm69bPZdCU9H8Mb3Kwcch",
  "key9": "2j8CZrV1jckLzHTL5Z9gJEhfqHqn9Eepja3dSCEFtQWDLBbsjrtkeMFiMMhmBXQPP1CvqVNE1MSxnvVBjGgJXMAy",
  "key10": "5oYB5FpVh5PE9BrL1ygCkBo7cN7iPHpsBRNWYEr6z8JdrTwrehSYaALEt3o8RhBwhEoapMaKVcECm4SnxcXcP8bw",
  "key11": "2X6gCtAVJQ2ogqSdakGeq4WvUQFULV1fAV5Be2p4j5z8sBSzLc1UgA5Dr7Pw7MxcnesuUiiPPe9HZNf12BcCKHLZ",
  "key12": "mEJpz7NZ7hyasQ3v6veFtTC24Cb4Q8kf9oV5YXzpdP1aRwyVLxa1qhfjxBrP2Err7YNKSsBLcexFy1FNcp5G73N",
  "key13": "67FB5FbaoeBxur4GD6BuPeiFF9GdzGoUdgTMEii2g8D47tiPZwk41824qsY1Q5RWbwQTYKMQUSikw67YhcvfL2S8",
  "key14": "3vqjZ8TG3fD5QyP9RSgiSvYn5wTLZ9DRUED18RBVLB5tF7Tet7FMykwFCx6UNsVEcRBVxf39sRk5Q9VjFZG2yb47",
  "key15": "61poXpv88m2mEMjgBBwDsfp36o3r3FVmUbALQ4ekK729McUMYcWRacBppzKsD4ywPsVpo3EbHLzUNzMGEsrP9kTR",
  "key16": "3xS2EKqDvk82bWFkjexxtRATjcGM3s1eQMJK4h8KPU5Ed9KZ1qzy7zuasx9JMcXurmSvtTdDfXHTcMevYWLgeU1p",
  "key17": "5s6ZmSJZF3deWnXd3YM4P94esRFYMqvdN7NJkUgPmsMgaa4JEvzLXbwovi82xcybTpY3QiSsMMLK2tDUjCmaqMgj",
  "key18": "5uyuZAy6NJWJ39PmAUTFwyZmaZEHjo3wKYrLobrLTk3pJVhDMYmo7DewgrrYvpJ5HMBwsy9rsFojpPF5Fdy8MSRV",
  "key19": "3dD4Tjx6GfQ9ijwtTDnMZYwMh5P8v11VPX8SJmPoFvxzwF9XpMmjJo3iVjxCsA99cD9nPYMgK5fxyAk3nv7h1YoB",
  "key20": "sKg9GHisg3Zb2pvXidMMi4ii6AXm5EcyzCon48PS8SztU36vGge4er8WEjzKTE8Pz1f8N2SDyWYHN6tFcofchZf",
  "key21": "2bJWtP3N1Q8p2C2jY6WUwPJugAXuptHtSPbbjSYec4bWhebLMaPJgydQSsEF2EJvk4hv8a36ZV4gJgAVWuYMMatN",
  "key22": "5s27kwUjMBSNX4cNn1ejdqvSSgjxezgYDEmt7qhQYky6iu9TVm2CA94oEC9FM1j99vD9AeL6QfMGYrh5ovc1wfnz",
  "key23": "2FxzamauZGPcVNNsPVrDmiU6js4MvVPycXQB9iyrP7SAuakQbZMpGoMPAfBWEiT4Syik5zkMi9z7XzUWJmPFmjXx",
  "key24": "3WeqisZcFMUp1RJWswKryYvt2iKHkDPm6uFnwWByNw1Jx98Mv6iA8zdf6U4mU935Js1WM8wUdqzG8PaTLK9uLvka",
  "key25": "21dEfQEZ2ArAGP2FNgyJSSuE2p97FnTiY6jiTiCZEEV6H8rF7XdsKzJ88UE7Xg3SSG6eAesVSssbJb9U3sykBLEW",
  "key26": "3WBDy6yfwwY8jaeXh5MzSJXnyqaBx9QEtKpWGUJ1nJ6tb4FiQwQfNihXSuQuodXsJhAVYsnfUCnRrM8DfQBAwdCk",
  "key27": "2aFjjn7jZfYuK4CPGCiDyWWdgrx6u5u3cZ3fMkdq3gTFe5G7tLoLDFncHyZbRcGWD6YuKDgP8vWmw8mQNLGYjEMe",
  "key28": "5n4KtZUR34HECHMGHxkronKpzwwy7zrhTQonKW58vG3yvnTmo7Ebh1j7kLJPsbUzd3y4aayQB4tPhWFdBBScfkPe",
  "key29": "eUKSej6BY28EPQ5HRi3cbHABkQcEvzBeC4N31CFeZojeUVxmPGT9ZnyUZjRVrzLkBRTdgscRQGfJcEexx5b6CtW"
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
