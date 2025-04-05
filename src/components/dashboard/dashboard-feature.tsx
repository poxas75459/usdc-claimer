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
    "2nuFpWugR2xyrqQBKWXXzKNYT7LLbB7Gd8MxZEd9AQyC4u1iDZ7xCkvagM3pBX77Xp6imtYUgtJD2YnzH7DTVqVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v7tPv6h4v54GRKgdJWc6dHKmdws6d4MUgkyzg2HJPbPnuTpb1K5ijUh1iHX8EmWJTq7nDcihm1DWrqSsnsBxngf",
  "key1": "2Ka5AihErajCo9GhLmghndGk9JWXiKKf7JKG2bqWD56W3jnzFP8VP76C8pbXJTqKLD7YYSgREx7M8b41cq4piStK",
  "key2": "3LqmNJHbz8dNVojx7pSy6qPFckzwS4uSB5WRoM2Wa8oraZb9qadZomR2vh3VcHdPA4q6Sa5admor6bhRieVy24fh",
  "key3": "3xwXKWdHsjh1bDqB5GaEJWucZG595L5rSsqw5koySwLYRpnAsKRwK8RBEC1b1ruueF2RAfS6ex2LdAaxJtGL3Pzy",
  "key4": "oLSrfmBAbTu2DCLNP6rB44FosK7h6j3fBgh1xwgJvynHErarNVDoG9PnuLSr4a2m9jWePMm9MpsGNW1AJMjq6ji",
  "key5": "67HepXcrNstGoEhW8omG9uWMzoMbDmy8cktFoh63SZCsiKVszMnZFu6nGzkCPkfLQwr675aSS1nKdXpQzvUyt2Z1",
  "key6": "5qdFEGHqnp4JmooCXx5oJCysioMiGgzFh9MnZ9dFgMZPwbY2kJybK1xbWEHVbcySNHkLNRUiChCML4UZFjCQAX27",
  "key7": "5R5w32wsKBHJZ7AydF5G2B952rZmgVpKzjNyezDw11NcFGJzJPz9aoifrEtffcXsobKRH4UEs1c8fbY7FCR1Nw9S",
  "key8": "5wryGGBiMAsEy93uMy2qqGcFiqoNvAMrpv5xwPUCi1UjiRUa4xpsdFSpq7Ti31gr1wR6chMBFXswjmFwJtLSqs2u",
  "key9": "YJP9KC6piucoAACPZ6AkvFv8WQLRRQzSsSf4KKQ617rFcEJfCrsXUF7DDjrDi42TutNFXTfYwYKdez9ajYQiHak",
  "key10": "mnGbM4W6cqgj79xo5DRQokHQJWTz3gNPDQyt9MbbdzQnTWpibD4VYGkpBSGZS57nxWRxyARgSV3FVWaPsJa2BYs",
  "key11": "3PxWYtbWMXKY7TpJTfFsv1S8Kv5roWu5TiRvLRRabgQERqskfYVafeLVhYvmDtnyHzS3DY3oLnrqFVxJkYiuSwvu",
  "key12": "xFEp4senBKmwU1Q8QWCCYAknmUJ2RikGKCLiiNBtVVCLkgBVVhnSsPc5LtCfHK6gwGZBR3PnkRNAktpVvp3Pdjx",
  "key13": "5YppqG9XhZBnnVtVSsD61W7pKHMcHHGuv4uqKuGid4wSwMiWxwuDGGUPfCKVbjKttrsTXKU1Kd1Zc58fdtw4Lgr5",
  "key14": "4wJ4BrZjD5cGQdzswfjLEx5tWdNujouzTe3M36SAf6yzVHnc2JC4xqHy6agHbCt9SeWYoCCJV7fzkzDeYvrbCSZ2",
  "key15": "2CpJ52WvSUdWddX5TJeBdDF3eCDzoyY3cKChRzhBkgZXkfybpLZheXtZHXLCRhVF7FrS3UHWoZRnkAvDobLYJrXz",
  "key16": "3kHFSjA7y1Tce6NGm9RwrasZmXg3jcQ7T83pu9YXfHR5NTV9veXqT1KWvqTLFSPrY1x54jfkPmNjb6Pf2sxbaaiA",
  "key17": "6y5eeF1sgRZGkqCzW3cuj6tcbAyKxVDq34cBpS5sebFtZFv4AsgMa2BScRiFp6MmYQ4ZCDsAYVoDLdCWdDqyHWc",
  "key18": "4DnbtFrmmiPnfX9oMu3wUGWG4xa54gNswvsx5sF9AJEuF6ceL4cPs1GUVxzKPsWNvQBpUBeTZFm41xtKKhpiGcNx",
  "key19": "3VzYdsi4orfzY8bRSEQk9dgo6GYyx4LFtourbJrToRRATgSFvvMFbrEPn1frCQnHWZydmALhJzdts7Tc6Q9LMGW6",
  "key20": "4fr6iJ7ztHKDPTcXfANmB6PUXUBzZPpcF3TY9G25RnN7voWRQU5XzwZLGLih8AexT93gW64aqdTjKo5BNMdpVBXT",
  "key21": "4k2ZYyT98CBrP8wSS5Qj5vynJCSY8aaPUvtWBJLfm8wuAxmgTKzmmkUsAdwYQXpPwr9X8vZ4EQ1ABPqVoNNkzyfK",
  "key22": "229i1HnNBKYvxuWjkcWCXAFxctJnbdYTjeVgSDktrjSXAKhq5PVHftAkqBv6AUEEuEUq2nyiu9Cb88psyRLExDkh",
  "key23": "4UAp5M84KXUz1ByadEYYEeYY8aXtRy5Du3kavZcPCNtXZHpRjUopXA4C9sD1mBCWQ7KzgSAu4Jb4yBGg7ABFtjXt",
  "key24": "39cqPPyS1LrRxTDyky1ZLU6NuJdAtZB45WMToC3psjkkaVtK6GDkL8cyCdfkXhh33wmRjHZ9d3DLAeeh3QS47aS3"
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
