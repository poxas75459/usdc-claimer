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
    "4HynYjh5qxHvN3Teej3rPLQ2JeezxUE54uMf2Rwgi8HNa5kLZcTVSsDM4Abcwzvje8DZYz9gMEUGpnhwfMvkLWYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GZ9ToMcjrnestSFg3QdHx2DnqRZiHZdxkB6cy5MEp7LoM9y7eUauW2ivACHKAiBTXpuDq7CBgrZCHWagZ8z6soX",
  "key1": "3CL9Mh4BHingAwH5BXAgh6CWMfCiqt9aDxeFarsRJh7LoUEGYVRdV5EPGWRBLXbKFvWcF9XCh6AAocFHyXLFSkiH",
  "key2": "5P3JvceamrHKHpEUmTcHPB3RH6SADYojFocdC1jHgmTbQjS6VVo23vxDFS2q7DSa5dBzkCPUCgesJzAfG1QsZH6Q",
  "key3": "2SatcmAWikPA5332wo5ePSKGFrhyCtRFNhSQ2HZmRMtcxqZaTjE1oNoascJgJFEVqePN7vnqYeWoEcfrzwWzP89e",
  "key4": "2tKix4zXMrBDE5vq75EEpgi4y3ebz7y86JrHePXpdiEqqUYHZST2aRXJFRPTz9kJBMTZE4HHSTLKobWkUXjpoh4c",
  "key5": "3JUrEJ875iZb7iLM9ScSuLqP1rbhDrGUtWQnnHn3cydQTRK4x3MvyYDRvrEg8W6nHJbtErF51LLHXeJCLw2gKfZk",
  "key6": "2bmZV9EVPjG4Jmxmiw9g564AYLhTAUE1ivdV4TKwARiN45JKEiwGvn8VkWzhamB9sQmq8aSx6JHKGbTLhkzghmJ7",
  "key7": "3eeVqTokZF4FtJAh7dQoF1znSUN3EEbVW6B785yMNVVuQvsm5DS96cRFSFFprUEE4ZfpuC3bUBGdpjBVdLHooCwF",
  "key8": "cYD9Z64CXq2JRQBhtEm51JQFiPPRhB1bPeFaLmkrs9bmuUes2ZDxmoDBpFjaqbfTtTCB7uBCiFDbFkNZKdGzh9f",
  "key9": "4jSB4M5SYLJeTXxGxa3Dha4DoVySTXxTDWRcnHxTGEdVvzrtMcMRtHjRxrA3Hz5gxPebNv2Z1ACCb4Ur3qfbdSNx",
  "key10": "RMZ4dacX1qenuZ1yjBktCFe3iyqv25WEXTKQGt1GRcbHQdJLbif46Bbp6TXZcVkgqwckisM7RaLdqvpQYiJbuhv",
  "key11": "4LhqdERWBvPKbFCg22SvZY3MmG4GVENQyaBKp4LZxU6jEVPLS5woksM2BytEQPxm1CCytE5khawbr55VcT9nS3ZD",
  "key12": "29opsCuk1Fb6JbxrdzpDNCyjTgWF49meoWJKqLfZjTYJKDhmky5zJJEhcatBNx3y1515r47cvRaVPLoeFwaSaGDC",
  "key13": "5VHn6b6iiuZZMyHjrBHvVj2ssG97xBp6A8KmSvnFoqovHr7X1bh3ewCyyXbsJXstqYo6FysiaMN6Xe9zfHHUePAZ",
  "key14": "4Uni3Np8gmLSx3im5FAgekdAxenVSuHcBwZ85HETmFspTAPMWzxkjJoqxUTHtHDa2YeHZfNanx9TSRwDFFviUHQS",
  "key15": "3jQcukXEPuqB9bzCJCPGARxEDzktGjLEuDbbfRSvkgXucuX2zzdrmFbFfPmiS7CHKJkwkqtctGkPb71ezAM6RzxH",
  "key16": "3Pm8qKMjk9Ru2TcJ8t6pMMv376j1MyrZ7V24rdFX7Z52vxcYxj9km3vZdNCREnU2hjgJPWfNUQ4dhVbfNidPoecb",
  "key17": "2Q5ZawyVE6dJF3rkL459k1nB2ybgN4nu45ZsetYeNQzkz99asTjpFCQ8vHQgCUyqUN3GUzXGBactA4iBwHG6oCqM",
  "key18": "4HjGq189YBcY8vpp59CEy8oxm2E9Nsg9kkveNRpHJaYdVAVxTg6ZhfpBqiD69R5a5wS5gGXyMZU35NWaXjh4HGRn",
  "key19": "ZQqzXfhUnh5J3ZXxzRT3ngP1531X6gQaDyD1txCgMFZ5kYRaLcLF3AbiyHM4pScL1D4MN3Fzs2tEmrFEMGs3aSz",
  "key20": "5YHt4xjt4iqM95uL5yk9XqH3F1oaFS1ENn3ABBRNxV1US2vp2oUKxTmTzgxNVzpzUy9ocbzRmg8ux1m9PX6cqKCZ",
  "key21": "527MfPqDfyp6mXTh6snqGrrhn7CYUy7mGDatoELA7ptW9W2SgTi9gwFTg9YS6MuAYtvhjytykKdJTuExL47Y3Cz",
  "key22": "5mw6EkaVru5iorJdAJVrvha8q6wfToU3HaUKNWYG4JUZwAf4hqhyRKSMzjzzCnJZkcPnkJMZ5gUNQnG5BkADJTPn",
  "key23": "62dyn8GAUeSPinRkMJh65a41pkSW4Nik7WSb2MGUHpsyt2b16YQ8Frec6FSNBf9wFvpZyw9SWpxK6kStpqwbspW9",
  "key24": "TgAfkNL2diX7CrDeiuFASYjdcooiA4YRt69RnLAnhJrDTtbdLbqCT5LzU1wPvj2kQXxyioxFEjCF43sYMEgwvTj",
  "key25": "js3Xc1xoyHzZmFk2o49PnG6we1MaxYaEaAYw6Su2ArYNqAK9V6n9F2Y6vmyRs1ejPC9ztirSHjmo3MpETfyvcfN",
  "key26": "3f9YcS83ffKecx9YtFpeRy5WCmMeudx8bCnShDosMaoUPknKwJUskZie5sgCa9zay3qgFFWJ9JYeakVSek7VmV4r",
  "key27": "5teRDxGq8wPGNz3pTaw5Ntq7VfNgJsBWi4aLRdW7QGKueLHkb2M4FTMfsbDmVf6Hz5421JPnsWV7vtVSnQTqwJoL",
  "key28": "tJvbJXUGMHBX4fKmmQiGfw2n4bNdvtRH6bm4VdXoSGY73vfHZzpgVVnSaqwHqm68uCYet4MgpUkWUhY8th7oJQP",
  "key29": "2gpnEg1PiVqyT3YyyWZNrrnfPaFCnn7Hf4UYPxjmP69XKz15Cdk4fb5DemGhekhMxezyC6cpRv3eqLCah8fZPS7a"
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
