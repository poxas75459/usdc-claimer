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
    "4iAWK5cB2QdLZQENdvcQjsPAFqMycnR4wg7uYE3kFGvjJsV6Hix9qQgJxpfuQohYseoPd9CiZpNKFKefXcCcoHdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iMtaa4s4R3WZYPcUAZtSBdUL3w96aDxtrDdFFEyrZAm9rSxNHhnx8B6bqtyPFVSouuTtdQ2UTM8nM6ELXwCVgDA",
  "key1": "rYCpnQj8kcFTEQbKC9wgjwwrKAV19wzNnQcHuYtpHG6oguFGA1drFXgrzQ8XsD4odMcdL6acnBwVCEHt79gVmxY",
  "key2": "4e2bGpUnEh1HfZTU9HBQs5ASbpQGPrWDLGxqN8qJLNdn4Zu7bfXX7Wic8mRHEwwTXbUW83GERUWoKwEcvmqyCTTR",
  "key3": "4GkqSrpt8YB3B994JxMfLmZ8dPXbenFeYuCSkv4eAfMNNhsW8Wqv5gVJA9ixSqwdFJ5qe36G5oQvrkqTNppyiSiT",
  "key4": "3Z22i5RhcC1FFu2r5aS8iRZEBfAAotx26YTHB3dHNkLtg84cWCwYDiiCFabBNNNL5mAicDkwhWvFpR5JBGxxoTnN",
  "key5": "4rMA5DJ6neZYEqc48axNwTgYbb8un6nsAzPFW46ZvEi74U5VRmTci7h2F7Yq6tzv2USPkht7SUVuPGsgD8J9qCTr",
  "key6": "Qf4prN5L8eYaqPru3XSToNhapBh6RPYt5K847Ww6hAZhScavcsHAdDFgXBRcKSNqfbfqDb6r5aB3sHs698as741",
  "key7": "2bXsarHNFwxEF4eNVotgafEWWzj8LYsuXwBT1Ukyk6q9tXLdMMnLcZc1H1325PKJNZDLxefXFmtnBbmxbuT1hcbJ",
  "key8": "3WDCQdo8C3LBPoVyiTvfjrw73aCNTSxZwto4UNzZiJZR8HT2uCnK99heobjS86XJ8w6Qq7Gh3XEzKdxb4YuCvJfq",
  "key9": "4RUqMNqTH1QuPnFmVhePGn3ncXYCJkb6mzLhH1XRAZQPNB314HrCZmvdoznWrrhL8EwgmDKhQsuVUhpeuxWp5WNH",
  "key10": "qsCtnQcyh2839Er4p36P3538i5oT3sEje6vcQNAMfNWFj2YtVBT9aqM377vAnxguCLJczV2hdGMQKYcy4vD7r9n",
  "key11": "2GVUPbMYgwoJYbDh3pYVFuaY442muGkGCAWd6dfRVcMiNDHUjLDNqSPMSWyFNxxJSeJE35aTa7vfHWrewCJB8z3q",
  "key12": "4XnVkscPXTC7cVpBLx8Djf7kT8VKrzCLx17z24A23Xr84KLgmmtUJWvguRdzKbLThVALpXi1Lzpr6RNobUV1eTjs",
  "key13": "5K7ktTYfrixFY6GkHKpqVc6oCRcovHpzjmeKirEehfs1CnRNbaKoALdrtaimscT1MNJkDgvZpMkhs1rAkXeKh1Ni",
  "key14": "61dFncRAZnBjA1vxYHS1jiGuxfJxU96YNA4cXHL9ewWjRnaou8JmHf6m5HLR9dGLRBDK9W965CiVnhGmUfwbtmFW",
  "key15": "3kaEdQe6M6tLwkpn6gjwqpPn5Pc3Jb6qyf3SSjrDuvs79GVj1M2vnrSLRxb4upVqysEe1DZySHpeMNvPLB1GWqZt",
  "key16": "58Q7qcZcFpGjtpwTjXrWEj7YbKxZedP4LupMnjD5niVE5hvK7sX43ad4qXG1JBQk96F9cqLXRzC8uA4t2U5cm4Gh",
  "key17": "21XTfJpcMQbrN2KmpqWFWQFkwghDC5vB3NAb8rrBvJt141vpv6aqeg9cynQvVvW3SQFKh2wuDkBDqc3kXjvhSLQr",
  "key18": "Q69hc17Afeb8L4kzzHfojo9XvRMDGpUXh5u7P5gCh1ESXXaFxsuSPWt92toUJUydZ9FKS4X9TeMPZRFXWaAUsiA",
  "key19": "2uSVuZGFFz8FZUoC2NJgtiHtw6cVw86UW2NZWpbS8CBhNvZrjPCdaAFmAhLBUGzPLpofzeJNX2Gw1rAJ6Vy5GHHc",
  "key20": "44WyjhY71Dvb81VhjuvPYTDdRr17jnyP7rzKidnFVDShLhRZc8FnGkmT8YPK5NFdm1SAAD3NeWAoLTBCB9fKF16i",
  "key21": "3VeqhaMEyivtQ43GTyMkFV34UpBButokXmEaxoEhJNVPEgvwFy8MR9n1oPp9VEUEjJTG61n1VZBrTo5gCBrv3EH9",
  "key22": "4dLhZWue9RmBeRjwiYv4HwBS6HhthC1XHHnvcGpZUtvyVYWAiQJDmfR3GZFRuEXn9wi2bbkTQt2U321X5q4NcyLy",
  "key23": "BdNxPbS7s4dwTLJ9i99Qr9nWrfR5REnbiZNvbDagqTdddsksZpEmQBStZYgF1Q67X6bn7iHSFhiB1pwwD6nUV7m",
  "key24": "65U3i5Kd1JyPTNbdGzhp7AGUbSuvQN96xadqQt85UHD65PTSzx2EcWBoorGe45K1p44NHYNnd767e7zMoeApRCjm",
  "key25": "2UZRnTPz8pTd7upnJCqrVqwrcn5cYmadh8bpmYivcNEwi2WhUTB75tygma8YFJuuCyLr6MCHaLDdyzE9brjwRJ9d",
  "key26": "5JcD3197nQqoMrFyGcC9QFCvoDSwpbPtexbQSHGFNnUxGCP6NeL3wdnBTcTFf3N51P7qVYPtfJBLWd8iX7nQUpYC",
  "key27": "4eFYfR6MkYX6vtkhBGR9Hf4SVCnrzKMNe1bZun7CTi3xeGpedaUb1KCpTsE7psT3TE6qVR9M4uj5wsEbbsHHXbBm",
  "key28": "5zaSHDTnYsg9KbyN1HgfjSbzPab1rDXZTJK8cviUy9niqXDduqF84kVyQKR4FCcSALpsJR6zHUkdV64HG2xrb8nA",
  "key29": "2LEKQGya2YMPMbHLkBLF1TmCFE5JAVsiffWf7xYaijUQkhXPXQ19rmAbTAV4cecCkmTYsDSNGmad7xWcXNGc5vBQ"
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
