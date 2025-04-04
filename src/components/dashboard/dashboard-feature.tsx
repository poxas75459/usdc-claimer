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
    "4KHjZUvRXqnnThRaepNGdrEEVHNNfB1pCK3TPYV9vwehU7RB4CjM8NMoqQuSH8PN5bzndrRrbfR4Xoqj2Ecu2PiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K75kQRfQzvfpdcqr1agVHARepLXsP5uryETWFqAM53rVcDjJ1n5TiGZ7ezBgX4gqfVSos4Z7HF3cLQS8QZpAKzd",
  "key1": "3dUPDWobyjiTKFehaQd9Bmorb8KSFxra7MPDtPTW1LD8iuNegmAsvuqcwfH4p5BaKvFzY5zdSxnsofzNLvyPENqU",
  "key2": "2WrkFnCmvFNZgYg9Qhwusrd9DCCTnsrsKNKc9t81cYCQgmJqFUa6xdxkB1j6CPQjTQY3mHvR5xAxJ4oDn9ttxoMC",
  "key3": "3mbZ7hA9E22LyuPByiUP548bHEd48bFwF8KHKFhgWWTbQDyLjHM2FUh2bwPQeWLB5Uey24oqB96aDQQGTv1UxJi",
  "key4": "4ydANDPFpoS9d3c4KMujf8e2NiDMo3hKaU3jkEqkrAXCPJM7fdCcwVaHgSrnM4XbZsxTii2dfLduYyRt2hkxQ5tD",
  "key5": "FfAp49hSoiCv1PDRCgAiHhNwQuiKMzzUNR8TW5GRpU5fJyXvUTAapMhiAdhmYdoyUFyQKuMdzmRamDa4BXCFCfW",
  "key6": "2kpTpQN4UvNUgBDoujYx6ZsPZLDRMhy2TQNrcuimgSw219T55hpAVT3e8LnmoXWQej5QXM9Be5wLnnTk2HQYASJX",
  "key7": "631Bogjrnb8afv21uQYynpBzFhjecetsGro4muB8pfeda3p4GjwDFxTGSM7VM3Bsyr9khAqvRo95LukhQ1yB5rKx",
  "key8": "2pDtCJrMfqADSpN7YseztwnNk2hHixenAbdrMFWdDmGKPdjSniiBhDsJ2VvNFW7VRCtUzw1q69KyRB1AUq8burdk",
  "key9": "5BfHwYBVoMFPjUnTPVcPZQcJhZvp3GuBvDqa8guC9VjgFjBzbfzuyXcpDsP6fb8q4FaJeBstiHier5NMEmkgwKNv",
  "key10": "5N6uygZm4wdMQe9xv48BqohqqzagMboTtVzeWBcjhukY3mC9verT9wfj1dkg1QvvThtTR3yJNfivpqg8YdTQpoka",
  "key11": "2mZ7jhhFTrJQBdpHF49X4HhvcgUCYWe4FiojY2GtBbqYrzTMRmCgxuf3uLTM8mpQtjDFgpaCoZiKt85ihcuWsURY",
  "key12": "4WbrVdGt8Pnt7cmYwyTbtKKcsW8uMvac6WmmMpzdCED4GPFDxTJZYEtvQyTrfKVCvUMpxyoXn7sU4kKNK2XCPkT9",
  "key13": "5majyTYSZgoYHVQ68G2jDf2JQJuAboiKZjViVQT8LqSXiQy2DQo91x5TG6eNwY6aCKBVnY4TAT9zHczSqLpKPJaW",
  "key14": "652N3JKNPCCgPB58U4mNJ96sGRbibNUC3jHhxXhtM3yS1rbD8H3WT1GiKtHMqcFQRLXrK2phtCPzWDcJDQUy6bVT",
  "key15": "2ogr38W26oHPkrb2hxv5APnvqJ43XNNkkHwG8aNzrbQD5ZJiHaArMTAteFSccJiLRJpHKaRCDN72BkczT12fovyr",
  "key16": "KFYYGmPsYYNa7GJXogpSPCqhATutgt1Nu93XiwwgxxvCrMDNRDKAPZSWaeoyjRkkjyA2boPWcY299v6ePdRJUMa",
  "key17": "3qb6LJ5GRokJTr2bAgW1WbgX5yoWzPLXkB9wB2H8KY19t5hSC1FmDsRwHuH9SKtrG8YcXxMCXpUTx4pLvpn9EJh5",
  "key18": "vxBDZh9xZUtgBpHcXpAUwjFjZRGNQNMdBhQN2PR92VupRLpfykac6c66Vdk4TxWbcUAdNkRMczXgQXKbh2dAXL5",
  "key19": "mS5TJamZox1NUscTDXJCFSxbHhwoz9hdMUZCm79eQy7HiLbsHwQ2bQJdfrsngWgofVG3NrQ6g6oaQWP1MR2xfGH",
  "key20": "nBexhL5FJMSJtjhs6ZwQek7wPQCfDixMNwXUd6wj99fXK3pFVXkaenmoUsSD5Rwu2PdLHjzJSMyUAC6EhNo18kw",
  "key21": "2qqm5CxRtm5gFNMj5oc7Ng3YRgqUQYVA6zhMTYtJh5a7CnKTHFaoTmgapHbzRGnCTbLPdAsV4WC857PwZPbmXxFj",
  "key22": "5DcvFKpqWjZFcG9dQVsQmYVakUL8rboccRk9Q4MN9ZCiNjfq5MhJqmrYvVG9RFNYe6aTtL7ahHUeAskgiuo9hxLE",
  "key23": "miiWqZb2k65RK8yCREy3w6CiqRa6haCe3enkmqnLQ8fjFfP5uUia9iERuZvfJDBcoscUxPW6QMUD82bvw7q6pkg",
  "key24": "uiEtPmhi79XrxJrMrPPpfCbYy2YyhozsyxGkGEroBjzB6AsMvAkvXs4hT54kYJiMN3WgyBW6ksKiwxCWy75u797",
  "key25": "j8yZc1sV6mGVRqqwy5z8ZB7rhe1XF3KoYB9XKZXqgvUCrJt4SCroUWD3sBQFQDf9uM7SsiRJFJ6UoA81mYP7Fg6",
  "key26": "43axMCwD83vkGR8LxFmgzCHR71ukUGvZ7aBxJW12s26Sga3VbK4XugUZ5RFj2zgpw63aT7VwXBwjrMi8N1uMkxJv",
  "key27": "4XnnEzZLgG7y3BXRwXd2a2oHHUGRMsnLEBdiwSZGvyqGjEdysYj24fngJJAEgbPWqSjugf26XKxcF2t2fwKPyVgR",
  "key28": "KhieCmuqTRsLpsCCqZgLUmkzFEJHZpT3RnP5RBo6X2gq1Us3vZ4bZ2pZwSmAC6L8DUJfsV4Kibe3kpzvmugGKrA",
  "key29": "2ktc47bPZkmHYt1TvsQHtRVRyWr3Uo6kTApxqTfY7PDGa9zuSmrgcDSBvDeNxTDULgCEaVYjjSswAagu656aj7bb",
  "key30": "3ag3aVKxjjfMo4DVdZvuGzVUrvgq5xuRExPaXy3PpxcY2nPHYT2rqySPMbWwqzAQKiZkeJamixnVnwVViz9u8Cws",
  "key31": "3Y7ziSoYzKMt5EZ742EQAg25ru3A1U7sMdvrAXJAdMuQq8x5YqkUcaa3brtibLLHyHfqvfeWqTvkLskAtDQJQ974",
  "key32": "2VNHMKUyDs4KTco5yCbYS6gG1kMfqbph2wdkwrBTYqb6X6z5NyTsN7c4S1HwYPrXHJk2W7adpPsFDj8eU4VJsRcD"
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
