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
    "64XF6LmPoxKgEzbhfy3xuDPWiqirXHbcCTMQ2RifCJQEqsuaQgLFf5cy8nJ7ZX2iZexWyCAeqSvnMD2VNbBfRRML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35NU37RbD92ZBt8VdZUjbmSAhNQoyP7JBq7PgLr82TD7MAy9mHvuiHBXv4Cu8Uw5WRyHFV7GeaDC59oGnTRbL1cX",
  "key1": "5GAF7rpb9yXPF3cGFd1FrxdzVb2SAV8NNxwNtNnaAsdTDJ2RRjWAfeppV6os5UTVeNaRLvKDv2ybae6DELTFwz9G",
  "key2": "66JAoN7kKZLL1bxiM5bbF4JHY4v6RD663heJ1RLsbutJG9QWnUWq676JyyfwWFdnP5oQRXJfvbzRtrjP1kzchfDR",
  "key3": "2jrDJmeQiWLACg68uNnZMvx487uetvtLRrGhHbEpQCqT1YCuszGRYRCnG9ENCahp6DJfFaRAu745gHNjzjyvm4fA",
  "key4": "3LMh4UcVQJ6Gew93kGzTjYigkq7r72QFZepemmJbV7pGAmovcsZvbKiydXQt6fq6dKnKV2t4FnEpEghxD3RgWjzD",
  "key5": "48YVJYnLF1fB9ZyriNXGMFnrdu1kvm6XkcctcHWmbftTnpM9TtkNq9AAkjTZxcur6Ndu8BBotSmvhSxU9KvY3Mya",
  "key6": "3B3erCtanazGSojNe1t6NvAjQdgTKoov9m7U5PWd6MnFKTnYFSMVhfoW4CGs6jHYvXLXE8asHdYw4JLWGBRXtAEy",
  "key7": "4zVWtP5JZ7FkmNavhbKcJoHU1gTqP6zBaQtngeWczWC7DLJtC2CzL6P4vU7mgnKsMKr6FJz6MkGVWNjxMdnmJv6N",
  "key8": "2mB1AfjWrM3ydxjAgLPkAA96xBZD46DHJh61mN7d4TY1K6BhmvnBBRbtMQi4mAyK7CdXCMLEtAmM6tdtk158RsD8",
  "key9": "8c6jZcQPxumAhe2Uq6Zzg19boexqJnkn8nfXpM94gGgF6k5JvZfzVWkBeJKsbKNZbvN5rxcYZYGqd74pqZ9Z2DM",
  "key10": "462PMq8C46VdRG4R1rKCMmugs53YpkJVujUKBkrYpPcYEZVn7YitqGcDpwv575regjZV6xAJtwU3VZwzZy94cYnM",
  "key11": "2K1iqxzuza4zu1JtQLrXuoZsT5xXdttMy1wbTcJJRQYAYHrJvfworwkYvJG2NkiGRRTeq7Wp26ToNU1kw1Bu8WU8",
  "key12": "HFYFk1uYLTeC1mLvZ34cYrXgrBwyfAKX7PZPoHRjDPLpjALeSgerXMJHsrpb3mftsK9Ec7JxGokAv7fpePL5jYB",
  "key13": "4HERrsbSbiDgpt79Y5X16heCLq821fY623Jk26Xxe36BhpQakwmU1dSeUuAiBTjkJzyBb6XygzxM5X56smkmmT1K",
  "key14": "4CTboSscZKPRpmqK6ZDS1eEENZ1ociCwMNWqafs6xLFBEt1VnRrmsJKVMCozrCEMExbRTnfCjM3jkuivhfAq6eNG",
  "key15": "28k5kn2pa4Zhi7KiZrAXBPsFPSoVhLiJFXW7C279MCvKiPP952P4nUm98NF57v3gomgzKdtQ9dZtFD9Rk8nxXTRG",
  "key16": "4RqCZ5GYWntwp8J5DYqWMxrRZWXo59mGphyxZ1tY5iGWGxc588xc4qzw7vZK8MffQzHYdB81Wicq4Pd6BjBB5WDe",
  "key17": "3H5cQoT7xXYi8sxY1bLsKxeLEweGziDniNDrErZr12t3BfN9XghN3zqEH7un8iNtgjR8oiNKYFM2mV4w9Xqz9pF1",
  "key18": "5hEdFcTAbH5ztzwitfLH85srBHwXVSxHdDf7rYVS9orVbY2C4RHQexcJaht5UmrB95JRXFioz5SVVdUMNsSY56yA",
  "key19": "4yfRnHmrMU8FLJ19xj7pbwmemf47X9RW77vqavmS4X3m9r8PAWpwxP6CURV5oAiPuKDz72hbqu8Y6DCPky1V87Ko",
  "key20": "4coQVp8JS2rTkY4CfwiYZ49RVzteMrN847UFYeRZd7xQ7H1N5xiSgwJSyrtohyp7t2uCtY7oEJzTY4CLXpLQ39nw",
  "key21": "2ugohmMEwmfAoR21ypXb41DcX9UZnWaMPzR1TDTkoMdd9CqjQCMq7BmevNzK9Bucwu11vgmcfjoYydy2tascZbqn",
  "key22": "S44iD4KqhSpsUEF2vch3vgmn8P7KrkjUWs9GAkEG3LKx5HVNLgGKyjHWF8e7JfWmcHq9bm9EqM39wP4U7qn4aAG",
  "key23": "4BLHGutBQqKF5UzXCCajwkHwPTCxLyoPnhEqSN6UFKVKgKJQ7cs5QXxWSWr4USkH82ECpsV1Hyi5GDsGWNnM6eFh",
  "key24": "3n4KfFAq9oaUiDBRSPskTYbAViHBvddU2VaGYQhPVwschmR79EnAk8guxT8AVTemCSWL8Q4qg3zECC85bx5VYmku",
  "key25": "4kv8iGotcZ18jUjTQgT6dqeyojsLpdmMdSQTHi313Y5JG5goiotTySe8SNgqRQkDZJkbeimmXRk7WsgLhs9Jcm6u"
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
