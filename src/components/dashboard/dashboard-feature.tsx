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
    "nMQKEuB6A1PjgTV5cX561MZWfnBb2UdWfnHd4zmQKhuMzqbbzLirJbXAyAqF592VuF2UYLZsfyEFhD8YWBwxuaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54i4fxnSxn62W58uph4AV5k1Yd8oNJ2sAYDzHZyiXWzykZcVoYG71CCBHvGnohATNdAoFawK3WBwFneFNPd3knBx",
  "key1": "3XcgtfD57id2zZySeou9fQeEyph892om1SA9wEEeWgE7C9XG3yqQQYY8jef426m1ZNRQTsKkteykx8puc2UURmbM",
  "key2": "5LL2vZ9CT1ShRzqnaJ64NBnoisT2J9vnAJPjKNEu7ubmqxqNKmYMUHnj5BntGMt5B5a7Vi4LjgcaDGGJQqqyhXBF",
  "key3": "2Ts8kyBuL47ZkUPiCBCFkQy1wTUtYrWHfSBSZLwVSWYUCoQp2ueLBn6t4X9YUncc2gWJity1qWB5wghuv7j3jaWx",
  "key4": "5rbGQ756iSZQtYnqCqvsWT6NS1qyWmKWwGpGWxrmJqnMHtzVPj5WaZdLrPGPvyBLRCYDykWDNPfPPH2iqJqfntJM",
  "key5": "4B9zs7gcDcmMZUK4X5F3CL7fWCoEDcAJ7MxUrJRXw8UhXjJstiYXnX6p5VvoZusgg2HixmFyfgWUiKLsEnwUuvt",
  "key6": "5gYAZrXoVmssDPRLmRwQotfQw1iVHbF86Pvd5aBPKR8Cc2UtWrUJR78kma4YyEUjjXwy5o9BzzwbYqaYEk9Wcq9v",
  "key7": "MGEbEK4VbJcb5a91tFkU4wXoMX1bE9Mp992oPuiMk4FxVqQdaoQVJeYUXr3R9v2UUiNtzJY75pUEaPZte3Ytwyg",
  "key8": "yngqWjSuty8rfv6tsSjvBeJqcU26G7HjgMnG1JuzYGNieTB9uSgPw7nRjUWaj3c47YUX6TQV6UcXKnUKsgbLmR7",
  "key9": "5yC4tkxpLpJf5cNdd4CbUMajbnLzyRy6avt8h7NnW4GmXrycG8dDEVAFnsuL5Aub53dm7gve3LLcbykgReNYEb6C",
  "key10": "69A6L2G9yDdng4JbNeAyf2EyMTvEfiZGeJYMGUYfd8uPvmRuxtsTfpwS2jAU63JLXMPu1HpSDM5mynqDohNgUnL",
  "key11": "4R57vqzYqJMCJpUWTX1iU1hC5yM42ox5uf14fStzFaHQuPQxEJYzYj1cn1N5w3QYjzAqaj9RD6bEJ64tK8UG64ai",
  "key12": "4VGuGVgT9ykjXDAfmGu2QCzhMRH8oHP7aXYnXNKJAwb1xgtQi1UYyF8MFWsi1kehoMgbWtadX57Q5DUbDuS1tUYf",
  "key13": "3oPwYSgpEobZaauhdbRQK53Mv4n7rH7MYFzCoKYuRPGSEbw3q2QLL9VFbkHRKbJueFdEc4yqR4prk2PVLwTYTfn3",
  "key14": "2cEqJ4nrHf2rNRoApwDULSgRD9Aqsv5S9iPH3HGmPbrjt6mEvRvdzfxkJxQ22VWeF6HYBovKv1PYwfu4YuQvd8XE",
  "key15": "3pzWJ2usjMVrFbD4A8FrYDRVLzrt7HBGpv4AmsKFBqwiwC3kF8kEVHYXhGxDQ7mATiPqEJtWtnTVZDLxHsCQz2Be",
  "key16": "npuwM3HUPt3G7Pk9edSygDuzA96oo63reqPPD6dnHV8Fb9tRfrkMcs9ctvxPenuK45viHAsVTFHMZMajjGoJMQz",
  "key17": "4iTZve6hRrbYGz6R6NmZMsBV4W2139jioGsYHUqz8N5siujFWopMieB6ASKco6PiE9xbJtzvHDMLnFq8xNzk1Wof",
  "key18": "2FPJ9aU7A2cgqf5Ui2qTpc2aQkDEqDd7kS9kAAaPcH1ANf4eem4zKLZSreRMfvf45aqwXzEJ76NLP8SyjLWYQxJC",
  "key19": "D6EiXT2McEm37pd7MDVwLpU2MuArmY1qohiTVPhmxZSRQ6wcGRuKPFD7hVx9MeTwAYg8rNAPiCBhUohpbjdQhus",
  "key20": "h7Tmx9a2ZSC4vnBCFSjvw5JQL71ivUFdqoakyEZXMJJP9WDPcqQeWrMJBkuDZcfmFF7rcFjbDZcsjfUkx12hXQV",
  "key21": "2TWnXPuyRaf58bPYhGQPmiTcjWsthWhvfE5awDcZX6QFskxhDyVpPHCWk8aRUqQJRjGyRDtixuTW8bGNCAhTeQtq",
  "key22": "33hDbMWMrmBaRxUxeVqLKk71mFadbBgmqcqT1LTE3SpcEaN3UKf64zkz8XoJJWgq1nBMFHcCxL3W7uPnuGYX347x",
  "key23": "2QWcRjyAhtdR9w9fu1MaaDmJ9tT8BwxkE3D32jDMr6Qmuhp91mi6kZm5SM5fkNmDewPTvDUbhbZ3j7p9VU85QKUn",
  "key24": "3kX5S3AGhsdz2wx9jEtRK5YkLZfjbsEzHUMdqfwtisqdQAQn9goF9ZMYLdfjfRpMQxW6NEULn8qFPtzqVwteuMag",
  "key25": "5qFYkUaEEKaWqd7M5Dqrtn8sgivV4EfxSXp7jtZgG1YwYkzFueLtdGHsU7gxEnXraE5sU3KSyo7LUWmEZ732fixb",
  "key26": "53bk9gu48CxRcvEL3mJChgt8Aw3Y5ApepKvZhTfyV23B7iUHZubH35W3TzugJKjqW4zq3tSN1HdVwBVPA28xdW1i",
  "key27": "3gjbLmQLSordoPWN7YETswRpCrPtRwFGDe9k5qgnkVvzE29QBtRqi8WaSPJNCjdNesDCREzVQcs3vpmpbEsJ5oRh"
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
