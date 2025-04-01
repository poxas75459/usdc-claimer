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
    "2xvwB17J5EBHSUQAesMrEZiTjm7r9EjPnPL9dG5pqJfS6aaGq2KeJWFWv3uZT3W8rvGLXCK8p6SxAmBHKLFkZ2e7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GzfTpMb9SqdePch2tVgT97qYrUjtqQ7r63ymQE1ZNSuJ5GKfH7bf37R6w8SvVPod4zGxzKCPGdEvkHvGvaZ95r9",
  "key1": "2v2sE5maEvdrpxUWC4exJH7qkfDjui6uo3ZpjJj1VnEefiX6zWgc5N6w7BuNyMLeKFJCq9gdZD4Sv3v1WxT6FCFh",
  "key2": "3N7dRYLdfSATbfqYSu2PrdZ9H7wFCFDPkT9Z21rC23wb1hF7nXTbyBtude1eYNoFVNej674ttAVa9oUqFURwqgNY",
  "key3": "3Wkhet5MytTUYwpCzaLmNs2tfnsotY68ugxPz8xGuiohrTHqzk1MLhdJyULgzdZaKYU9rHXooAExFW9y97HhBTVn",
  "key4": "2EJqCJMCXiJDewGRQsaC7Wfn2NHPnw6WzvsGYKLBoxNvxx3RDtFxv3B84GTUZQBKoXyzXCEpa3CAwNrP8JmPamrz",
  "key5": "4UYZmoy4CopymY4NG9f5Xznpnxy8YnGjEiLbDUswU5eqkqgjVWC3rAJtquYFV8KawcstCTEaURymBWm1AXjchV5S",
  "key6": "2cXgTjwBHgFFbJWXT9BpjLV5umnAPepYxk39o92NUrHRPzenFptje7QTCdkDvzDu9yzNozrGfPRKhs2U721h3eoh",
  "key7": "5dNgGymHQKsxQGuRciLWAFdgyaxSsip7nq9eb7B9M6H1DC53xF1N313LAvZcuVbkrDNsthr6XQxgYZNX5f58sATB",
  "key8": "x1G8L64kBAHnxFVHYKXeugfVJZWwBo5biotCeJ2a6cU7CmcpnF3akjmZ5tTrHPjSWuNdEHaJdpnPBv7tCgahoGw",
  "key9": "kT1VUpe74eVt6Ff6R2SLZiuskivAWhKqKJMyZ4GJsjtHVayDUh7KCwJfDUFNmtoeGyqAomPe774acqEXzbEiEK1",
  "key10": "TPHLJkYNKHyHzWgpe4oA5uMgRUsL9tmeA8hTAdSTKnDwTQ1wPcaW9wenFn4AcymDCHCQ7tSroscTbHT54N4jLNt",
  "key11": "BUGPceTEeRScze3vPs7mdUKYnNU2ARVv5iY77pUwJozGB6Q1vWh67SqmvKywephTh3M1Swuf17vKxESEWh2nnZX",
  "key12": "3kE5D4Vp5bXKPeZSwMXpT4B9AGAcHi7MCJyRqPscmwrHwBDiiaEc1VK6JtBpgiGsnS4EC4iZDebRSDn72KBiguv2",
  "key13": "3qn8BKbQhqtyX1yRpjBpkvrXuprF9aJoCaBK3njDvVcZ7E3xR6DwCgJuEjekijQSho72us83sqC8sqbnsJVC7rNW",
  "key14": "3DhNp26EAQTxx7uRHDBTv6wkVCvcQMx6vaqnNLr4JkyJK7UJ1etyR6d3V2GcTgwEmjQFPmHLhE2WbxxAKtHrapmK",
  "key15": "5jhUstMGKYKmpE36NKxZYvAAbWiKV6YtYFaKKxATVvfxK7FfgbSF7MjXhnnV71XfEkDZHnjAqAhpXDTZpVahYiCd",
  "key16": "5g8vchYpPD8XAjH2eWoMXBc4oDdHB63j4Gb9FuN4dvzQjLMDFr1szoVwgCUJ8BcPsZa4SF2ZdU2LCJE7qdDXgf5W",
  "key17": "KXp3kXFwzs4xpng1ifZ4K1dF5ToA46mRTmSxGutMgq1k8hDVR9df1ywUiS8yxwSAPXrV7ebtPW7Avsb5hEQnAdV",
  "key18": "3EqaymnMxctT9RGMz77VuRvK34vQcxiSE4L5o6AZZeKpe6NxNNbAipWRCimwzE4u9BLtgrDQQdoZFYJ3NrXCzGCN",
  "key19": "64ShymEeDA2ZNCAqZYVpA74Gc4pCF4iVcTTBsCdJwdp6Fkidnb6mwJSa5NrMwBGM36Dz94fzzZRoTBy2bpm77e7r",
  "key20": "4cSD57Wzui9BgRZwwLDiEum7HcQ6uLQb6VyZThCVAjYwXF7Csy6ZMgTry2TyzEdhEKTJTMHfoLhDgfPa9rnnBvUu",
  "key21": "58T5cNqo8fkcHnBkrD8SK8sf7EBHwMQpQSMp4sVTS5FrZ5w98tnxRVLUten1YbhYZpbetspfzy67XNzJoqkAfFv9",
  "key22": "46geSeyfG25FKrTDKL53PbCkNUoos2HBpD5tXabcz8hs3mdD7f88orPqTGCF1ysiu8SHxzP2t8xAFfJzEgNnnXwj",
  "key23": "vSKMfoHhPjaM2D8tXjZFrFfwwKEqGcPDcqW3qBVPv86ceGwv7XbNPy3oRedH2Mv6KcHmXceF7PjzeHFjAZe8hd7",
  "key24": "2etBAtxswFjuqA4SH5NGZwnn8H2cxhZuc2ho3F2cCMGDztXJC1Dwt6NSUhMu7u7ZcLvfCVqhv7uXx4PfDrad5g6h",
  "key25": "3oxha6kaktWUnhAUD5WAdcYQBJSDyMHh6USgEreuuFHsWtqk28dfnXzNAYiuJjPDTq6PQJbdQeRZjBKNyCbsdgBo",
  "key26": "5QTyQ7sf4RnJmaahe9uyon7uLwuiATJ9XCuPqF7j7uS2qNpw8W3fuTYzf3kaf4vARTvLJeuuEJfjJeG7YLbbYEjS",
  "key27": "4HcfLh3yMcXn8csrajz85QVWBTKipnJyCrgxxmHHYB6WbGEkRbxBbuQRT5SxUKrfK5JFMmMoensJRLBTTEvkzg4v",
  "key28": "2FLdtTgx956bwzJY87VUNZ54AFrK8X78NCPsFsc5ZRDQ1XaYjXfjpDZuA7akmxGnbcSQ6j756pbvpoZKrAeztKtL",
  "key29": "4dcoYCuJGiJW78qqM6Hey18RBm5qZXyFTfmRMQ21nmc2qNbGAXakuj4pGAtTF7vG5aqCzHtU4oRBFLiv2YqbvLm9",
  "key30": "2Gk2hnKXocYohJcz4v41eRTQsDr3eWuek1CP7cAM5aTD5LGJawsbGpbmLVsy82gWd4VB8THp6MdYNKxGFfG53KmQ",
  "key31": "34Ntkov3MfxJABspWepm6JT8qYqyTJ4uFeEfHLzwQNQKKRxvzoGRKeV8BnEv3Ydz5DBWzthpSGpp1PhvFyr1gPce",
  "key32": "5NshrC6Up55TLmhCPumWQXqU6Nq1zYt5xmJx3SqVapzZ8pQBmDRHQp6wizkapnpraWMvTXqVYoUeg9C4JyGqzMWS",
  "key33": "4PJ2xtX2eKvDe1UeqDSMtjK7txzgZ5Z6Gr4q7HJckipTVq7hQPh83nQcKHuHRhx7VXGEzTonmb9SEkdC6ZBhfMcQ",
  "key34": "eecmtPksuBjYc9TL66BaR2SEgytvq5o59DCbi1nLJmND5L7XbFPnSxiFAwuK3TCGuWZpJuMaCcJ24zYN7T29WVL",
  "key35": "5F69DFdPgHhouzgd8zfd9BaKAQvcNtzLEan5g1e1MTtcDuf3dyPzHpRUBrYRg5Gsucr1obUAgD9jbJQ8otGmLU62",
  "key36": "4iLxmgtJ6GqC46g3yzQt2nJVdjyfSnKHAmXQ6dxeg4FSyCJwfUbLPTrBqbfDba6HByLYBHyZq1jQp84CPucmQrfG",
  "key37": "UcG91AtNFxHr9GLpjgHmNMMxCHaiR8qReFcKu6oZGdjkigU5RB5Vxgj6H2Fm8XBmYtqPAGv8eXALQXigbZtg3bA",
  "key38": "2veGtZM32zwmVYXP2tYPkxRvmofMbY26bVxYM3wcgriCASbwn12uuGMXCGS5VxB2F9vy9GyZVvSotcLVXNZunGJa"
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
