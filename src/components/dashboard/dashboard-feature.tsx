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
    "2TToosKJsdn21AmCD9pdwhuNipf47SNMTKUL4tbVc3TbAyYY8995d8oLFuqVPXJRMGGi4WmqJkN2VYELfTvwBe9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T3GfGKJyXd74K9zq2SKsx6vYZ9RuTMZecNYTtNrPGMGPP3ycXwx8XDMN9U366k1R1Ze1griwTtVvwWoQMGZeYxH",
  "key1": "2iBDVoLJDb4LhiWb4CWCs79xGmsRuMcTh6cxixPmqvyYABXWQw8WhUPk8KgnCr1Q9r1EkyUmyXQNzc52oYA7JLdD",
  "key2": "5tuhmsxipvptg6aNH4EzEcckaffkWQtYwQZFE9oiKYyRHVqaQQzfzbSexDPDdFdcCgNQW3zCZVpqWzGRKtrsKdkE",
  "key3": "4H54mWCSSgTLRz8UKiGc1a3BJCLwt3AQwGm8pfCyu8hv8hiXyxvnENxoNma7ZAoDt5LAJpapT9NfNAshvGNcCMfR",
  "key4": "5jgjjsWckqPuPUNbiwUnuiywvPqNrTAQVTfADUpZ5pdRUMb3eTFoqhq8qJbgCVULHF1sbgxLr1w7fp6aZXEAfLkX",
  "key5": "4EPLMFogwkuJJiBHTsx1a9bE8Qwirp83cjPeieZusoHy5JgjvxLDzg2cTDG9ioNXyiTXVXSsciBvhBgaZRpJLKY1",
  "key6": "5LG6wJLsCfdHzABrACi2bKNhjQm1SFj5c9zyVNj5ExGWnrj1Rw6PhBftV9YtqGGke1nwNFKJhvL6W9SSHmmfJSdE",
  "key7": "4SWfsooQ4Pu6dVgyUqJWTed3ueUgY5eNBCKV1NSpDSqc6dkncaHZsiwyUiwHShqZRwp7oHErFHc1UhvQWMNNbT1t",
  "key8": "5qpbaHtT3iicMjcBfVRKmSS94P4NRDFsje6ojyphEDyZWhCpEV7bTGnyjnfR3yM8Ncr6hhCj3k42CNdsiJN58b2Q",
  "key9": "2toNA2GMZqSRqzsxpBvbJqFHDRVY5u3iorWkFRnca1edCPPq5gM8heKsRRLYMPdCGpELXFfCt6Ydw897iPmku8ei",
  "key10": "2GFaPGNs1XikrYPgdTmsRZhyzSuvp1JK63gE6cgyuqgKwtcKeTDk7i7J6yS7nFsuLemqgpp8mSTYgzUhvB7GRJTs",
  "key11": "4pjpJf9ejt88DkMicRumonwK5NMR4s7q4v3NDPqyt5BedbHgNssJzuyBMmhxZ6XyAKfaDqRchWfLv8xFVSFwPxpd",
  "key12": "5sjfvwdVk5ZWsFhou42wNcYD48mVsFgbvw7URmhmtSXC7aQe9wUppMFVhRmjnCAZeagKPgGFoLYWehdpDtKPWdZv",
  "key13": "3DAsD2rXxPNqVZWoFcL2DjGL98AjsoTHFiYo1vYdRqoZHKhdWEwewJ2EPy2gYoScUXj79FfayfPqCQSxougensDk",
  "key14": "3SxX8D5qMGAMJPrF2tqWYMjhaxgNNywgNhvgtrZ18vcHv78PaSC4fSG3TSUd7dQmfy4TXXsBx1ZLt11TT85r2L8t",
  "key15": "ntt91psCzDLagqN4ScA8kLsVFSJaBZj5hv2Q1Ns87524Kr5rSLfiBsbkwrQh9eCfGsNq9a6wAjFANNQWBmY9GJk",
  "key16": "v3edScyhaUriFSTTWYKxFfALd6HWJ4NPtMHcmDzBsoKMkYue9CtAYXubpqwyyPYs8HtZDKNR6o6gPeW6jQAhHK6",
  "key17": "2m4SXV3HWWM1aNdSB3Ugg6NWPKLgCq7qruZ68qTGVzHyW1JMGzeq8MNaiSLWDfkFo2XNfxJSzdN75VNN1nvbx3oH",
  "key18": "5epXm9p1NfuY1eN22wVWF9HTud8sksoFqjzSCqj6c15CU59422C6y4Yfi1X8shmE5z3Fmd3xehBbW2P5ueBrnVY4",
  "key19": "3ey45PWcetiGeJn3DdpyNhYSpHYRg2dYdififgUFVBkYAmtwiHsuc9EBm3exasqwnqTz5nNF62jpMo9hHnvfF9Hj",
  "key20": "4fZC2h9HVZ5wkUJe31QGqp34yXusriVqhDVh9yq9wGtyFUAYLPS3n4umnGUFJtpahhyYNMqxDgVrraVMCPmGcJjn",
  "key21": "2fnH3RRYF7raG8DJq2dQbLtEJvAZmDg5UGKXo8hDZi9KkTUsokhvh1uE2LDq9W6ZGYHwPfpJ8wKUdiyQdpp8kSYj",
  "key22": "1S4reEkEgRXgkTNpT3TWfVBBuz5PPuqvACE3A5sgW4KpAr98w3RVD7nNNa2d6cdyn7AH34duqq6un75awYPJEk4",
  "key23": "4Wf2GMNzSSCFf1jYDM4h6ALRNNd6cayvZsFwMUdYYho7ma749qQi2jFgEL5BhdprwBbZUoPqjrsCxsUc765SHQ1P",
  "key24": "jMXsjSE4GUA94Bd4Ra5nqQmLB3tAfZqTdtTjGUWg877X5ZqzGkFyfussRqMnoJSeNizrdnvVXdyh8zZUjny4Ekj",
  "key25": "4hN6VxvqgkZ4TKxwJZxMsUV8cy7WZ9HJEJ7Q2K4nnDjRBD3iKhkCpxtH4mhdLq71zHAfRNoM1Tdp2hWv1nvsiCKJ",
  "key26": "3niMMr5LRhhgHZP7hDAvtMZmK8JGg4ExcjiVLs5Qo2JbypTm3d4h6PqTPYpJHq9jWDATGDRzxXrk5UsDs8xMgCBK",
  "key27": "41mRQSDP7p3xZKRqePAGbmoj2QGmXdk9jmQaJhaAfmyBu12YoeRqdPzvd5S3MqYrHx7nNnQTKdiPLsgAuN2Qw79z",
  "key28": "X3yMbzYnEfKBDmyJG1YXmEUJPrSowPp7zYcRWu195WoLBGC8e54gZEVUHrnx5kyjDjSnzQjq4cGAmBps7Qt1FSY",
  "key29": "3Tq2xxfhwpRStpAyUv6EF3J4zqYWvKzJCufNRaxfxCLVpU6CoeuE2jBFrroYvzx8Hb4hZTfnHAbaqUj5fTT3n8JM",
  "key30": "4t5TNXTw54ftLCS56MVMUap7B4sB1VtjH4H5xQvNaVioiMAEzSCCcca8ueadHy5pCP8dmGkCxxP75WvA5hkMxXMB",
  "key31": "5u1fqF4f3haRMUVGWAjwp18dPQfkoMBTzCMkfiPZvRhkjRjCBJEmTzAyreUrRZR3rCZndYCCDrqGjfrUpY1RmWj7",
  "key32": "33Voqsiz8ZKkQHap44aM58iFzg3JDh78r1T5EwKFhKQP19og2k3fZLB6eAq1FN53q6KNAxMKU4fnHoEmVKL4d3xW"
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
