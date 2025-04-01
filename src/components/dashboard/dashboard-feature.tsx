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
    "3vAmJhHAokJHFJXeozVKZjkxRHQY7GLkb5TAHX6v2zMCyxb2kG1sjP1Y9754xY1zWrAmNnXCRSewU878PLW96qd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hEX2DedHDNAHyHcFyZwtd6PRreeRteHAtGgFbAkxAeDxNGmC5He12Eoas2SJzMYZGZoiuDPdxbg43g3YZCCwgL7",
  "key1": "4odnJEGKAJu2FtWF6oxtvw4vKahYGuatGdUqCDg9HjTit1tK2Zaz9tgWpiHPE9GNisbK9Szx7TRvdAVLA8c8BpBQ",
  "key2": "P5VwEc8EaiQu71AjZj3j7ccPSAiDgrSVaWmDwgazWR8mgah4MuJAR4WRA4WH7pYM1zkZggsZc3Zt3az2BwXUfBE",
  "key3": "6Jz3hysgMQwxL2wtBuNCrznrCsfTuRX3z5AA8MJGqYDdyVrM45WhcAzDe3mYU15AqhNWbso2VjDv9yS7kCeN9yn",
  "key4": "4PgvGi69k1usX9Bb1sVNrmtXEveXxfB7Dj3yafRv3EiwNJZ7mNn6Nm8gL6k7drPr4ydSzRhsRn2VQbAaCygcEZAW",
  "key5": "5EzQrA5Dqxw8AdgDmAmBmVTd9LNBoufeBBJmrjuyQVfLRfNLXSp3SrUX8L3DFw3nwgFE3huRbTMqY2doH5Qtinig",
  "key6": "4Wn1ATA7tHb4UtX2J7WDoYgNoawYewUzuHndiMEkyBWdN1HjiuU7ciwsuJGneRxvY2XfyZ542MEebQi6jmtSx8gX",
  "key7": "5xyKcPmJQtQJPowr6Wd2cJtHKXo6F6WG6GhyWs898RvWAvUC5eabV1Ay7pCzkPqtYKKHgPFUcTF2p2VzktYD5VHv",
  "key8": "55RhpRA5cSFEzy1WtvKJte8P3ydggxDTeY8YdFpT2ucPrX1MnJ4v8htX6XimjBVr3KEDwwwb8T4Em4BLbia8jm2m",
  "key9": "4F3yffScp5bpnXnyHs4j8et4ZxVNjLpG73zpmmMCiygdxsMaUzE2Y5Z6Ed81L5pgDuziMzkp8tgTmVoz9yHNSyZk",
  "key10": "5P4Mby3F4hTA9ccRVLEhhvdLNUsHkCPsdTFxK3hU92qq3UR3nHacVrdsxwBVhRUKz8zwPj35aTDHN7CCuLoY85Sr",
  "key11": "5oQM8igjY1tfS2qSVfE2gBjkRVBKAfQJQ14YQ1owkVpxt3Jz9rviDDb6nzN1cyxLw2wMQ6tQmx9pXmMmSTWsjoS7",
  "key12": "5bZKvgH11wPxA1Ub1tzTZzpWD4aSGacBxwcVMnW8kSn6AHBRsqpNmzGsx1jNjTxKv2AtS6eJJ8HZnQLuvpzkUNrN",
  "key13": "37QEZnexMWBuV1vRZeL1DKLTCA45wLcgXznHqdZ2WsnEfmeuZGy2CF8kRHiKdTPMY3hzEVcCo6GeV5J9RGKzwxYz",
  "key14": "649U6FZySf2nPMJrmBGYCZcJyH8xaWzSUfG2GzKySpK1NNxpxPu2zFiyvgdAB4fq9wCmjp3Zb7nN2HdMeJNi2xGt",
  "key15": "7AbUYmmuWvup6qBVkeFVaNrDz1AHwQcV81msHL2S4oXHZNivuvh7X5ZvojmKevK51rQ9pbwJ84CbwNtestTjsGr",
  "key16": "59hr2ijWFGxnWtTdeqfwwMzaArEpjFWKA3vFpd8YMZfn2LFHUP7YQzZakLSuBNsWEwAtTkjnNDBv79h9UE5fRnAJ",
  "key17": "LPF5A5UEExFBeV9mpATSarNK8k7mmVCJJ7hLvdSMmFdN7bFpSmLRpRsjD6kKZXBGpA5hXkQpFq4bCzmW9mh8hDK",
  "key18": "YQyJqyBxwc4wnf9idFXyZBDv71s9ui3BCsPZqmuDaMfGuWhBYe4KKbB2UvQ3z48KbnZjRrL2J8n7hWrai8F3yo4",
  "key19": "22v1yQRDKunFFdD9nHV6M38qSJfLXmxLeZkRgaWQuvEwo37gmPp95WiYja94oXB2URarX7Wg33PV8HWxyPiKTGq1",
  "key20": "34VxY4GHdmmBmYhfzNbikKmh1AornnEWw67pHxjCYAtTs9KLiygrrNvwd4JKmmNWBC9A9CqG44kiQZVD65c2J3kL",
  "key21": "3SRMMt5gqzdCT5eXzwt6qfWhFBcagRD2sxLqWDCp4EB1UVCZRQU7iR9ptm3QwSNEHJ83heroXGr5Y6YqnGS3upek",
  "key22": "2oXsJH94JANdz3hpyBUXPhRSdXbKStwDqQXhgSRVapUtV3GKDT97U6xLibb7qektnvbqhF8H3FeSNZVUe9q1CGM4",
  "key23": "3cEphDPVTouQ6pVa3tFDew9GaKZY7M47vAhHJfPtY1BpnxeGVkbtpGdcPu12NtGPfVuSoNj1scwir8q7AzJip9of",
  "key24": "4qF13CyTbRwm1fA9kXEXzkRJxFZ6WDzUMXWB9UPy53eMuUrNXdiMH1CEbYUYwdkk12i2cv8rPUrGFM9R7u7R2g85",
  "key25": "41zmj8ZVRpL2FP4bGrAS2CmGU9fXW32KJbTcG126DiUcY2Kw2evNnQW4kjbFVLuVpyxUPxNNSuLHXAw49cMFcAXx",
  "key26": "ptSotYZrcMVdTbQ98C18UKJZip75A1JVumkurhGx2Bvs7i5AqDwMhRsADMJ1BFp3ki6HsRqaGQxUZmvVdYWzigw",
  "key27": "5g9THrTDJnT2UgdGanuseze5pjxw3bZossBTBFQZvjYSwYv9xDrEW1xxyv5m3aF7ZCVwFGw8BmLgF9WpnDHo79Tc",
  "key28": "4tGXoAKegq3AR7KQ5x7kPxwEq6dmTy9DD2wgeGg88eD4rbWma3okbEbTyovM5sutVZaXCXuPUFj1nY8dTMhJL72J",
  "key29": "2beXD8SgFJUJnfwfjHNrc7RKanZBoPQrkyqYcDkcNKSTxpzMhW8EYhLjihGXkG1CQyDonrMnzJm51wJgkqRxL9fg",
  "key30": "5V2WeUotjpNiYcj8fdTS4eVAoYgzRQNc4ArNDVUyQW72pVpSYP6Q77jjQQA6GXkvVWULpyKbyX49puQx6dchAs22",
  "key31": "2ndckoNavdSmwtMZQtENX8vhRYhzPrAm8somtnrUtTNcH6hxzShGhtVu2xZpgwf1dEDBfQPN2sneSyxVyQmZjxnp",
  "key32": "2qMzA6NGaSYgSLeYcQeJGJ5tDJnYNBAeCkUtiff1bYq9MUFkN3wo4RupyvY2hgFQ8TJYYvCjZFnQsEBYr1zMYDSK",
  "key33": "3HG79aos31eoHdmrePwzrdxt4RZoCR9ez8ZYoaG5C9D8FTjAE9GVLX7uw4ovP24xkEDTpkuXzLrWgcVwWsdMRAR",
  "key34": "d3inuj6kVvfB8FqojouiTmnS58PfPnxbb1R3Xz4T3iyHTHZeJ1bhj5bN3bHEXJyWR39hZt5d5QEBhaTJ3irLX6e",
  "key35": "ph3enk3zRn1WdhmqKc4sZfoPDi4bFQV82SFSUf9BSMH9B9PqcLKS3MeikD6SfsH3RxuWWU3TeVQybXCiFWpZfRz",
  "key36": "2J66ip7U2Pstwjkz4GET9ZCmJYu4HjGnWym1488bm498xoKbZeQUSEwfaewyqtHYdaM6hxFedwydUmLHTuYJhFru",
  "key37": "21Lc8rJnNkTxeA4hPixjEWmzypVWEmoXovCBZ8fS9HVoRRbZKfzXo5QVszQNbnz4jujLA7VdjQApShaSkdeM6SqX",
  "key38": "5nqFWCTs27SMC5B17rx6yXid3fw9VWqb515DTX3i8GbQFQWS2qQbKMVuYKgCfgQb9UQ5ScZX4hLSnz8AoyLsNZdt",
  "key39": "2iWRvc9ZWEYhwMASUqn6DXSN4yHeanH5C1AJvanEWnDhfbVSoAmyLarbyAUsow2nKDKuPz6se7D7mfYWNyGtKnMd"
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
