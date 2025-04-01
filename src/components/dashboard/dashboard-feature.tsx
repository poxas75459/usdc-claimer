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
    "27AZasJecW5dwYfZLKNHHxWwdFAydEhBSXCSMxmvYT3Fq6uRXGdGyDu1kSRoJxgz29V6WZVMqsf2ba8xzLFA7zvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PQ8qi9krLNfr2pVyYbEiWEMUeD5P8oT8PZeM1rNrHXVhukndj6iQE1zTjVVNtJ9w3uTZBsErnfqd4aR9mG7uySo",
  "key1": "2AVxmfNmaXrn69rKvNGtRRo6K3pbPxVVmi67RxZ8ZVAyZ7zSaRwnSy8AYbMHrnYcEDUA6G92pfLkQisDF9TiwoNu",
  "key2": "3WHrQgcXpBoMHuz3K1k8Fzv4YUuT4rt5VRUdzQdJ84zf9AqdL23ygBHWUsHLJPPX4VRKc8siPcGpeGy6FcqG9Up8",
  "key3": "4azULFCbn5v9CkwuHYS7zK69KEFxh4msCSMX6HGy3V1Rhi7j21wiXA9imxWuYttRaArbXXw1QVD3oPkTz3t6ZvnC",
  "key4": "4XBthDiHG2EAR4MNjC5wbizYPmSBqiPPKwy4XjXAjwjzyFKJgZ364p63sNqPhwZT3UcMW4qVFLzB3ZDD7amhKK8M",
  "key5": "5z9HNL81ywKZ15o91UZNbYdBRPFeyrhgxQbmTE6j5VCynTxpPU9Gn2HRZ7ZczY9D3j99FTZm8gSeVwJfLurUMgSR",
  "key6": "2oKFBLSR1MSTZVCtbfPUy72KfFnW3xUhZ4Tho9ND5PuxSFBX2V1VpPhqLe8Xev1EcD1FuTiRi6YbkXudWJ8H1vcn",
  "key7": "2A7bQioBDg9Kk9kyxtqrtxGYXs5c7rpU4KCfX3vNUjPytiwFYR5iMSd26E8XaQ8Y7ynBgK2L3kDHCjXXnU9qfuia",
  "key8": "5uBRuqVxdx4riAY7UnSK4qQmQX7eGjgvq83raoNFj9jQv9RhuAaGaa93ngnkAXKLnVCTxZwFeyBs2V4vPyMz3geN",
  "key9": "5CrZUz9AFD8gUJsEHbqDrhLh3rRLCp4MoawYFFdqDjX5BSbwR6S4fTyxc1gxCaLRGdra23UzV5GvjaAYfHhWZULj",
  "key10": "47c337591Z5WksGVVJuZbm5TuFcfkVu2tf9RnWukoom2UWRMYYiW2cqhz1scs2brGqYs7WVpW7QFRsEMhJm3WUsC",
  "key11": "5EbaYveRNseDDwdMdo42vtwxpb7kuYXR3ugpm2iBornYQZ3W6kPZHW2GyS68ZNiAvUpAaxcsiA6PBQ1sDrNLw3d7",
  "key12": "3fE7hexVqshf1oDjsQZp5VVb7AVKLMhxUrKUC5H6NrSuwYmDhYK4uPqqSWKRKqEtsm2Cs8mMpMgmktdL2epmX7j7",
  "key13": "PJ1Zp58MwvfwKUeRK5mWt4jdBfcb3voAJBcAPmcJURL6FmpU5psYPzD8MCxaPGZbXdtQYVCdPdQU8Zud8cPX5iH",
  "key14": "4HJr2PXuyAg583tt42k9hsP3B7R9UgAoQ1WdfAtdr8JpgU2fsesm8X7mhHTbmB7CeHXrbtHWC2oBJkxVp6j4speM",
  "key15": "5pRGpu1kU45fqx7WUNMWYFDhaWB4f5o9wejsADESa2LkRVZ2vi8pW6igrHSxqhuXrvB9eT1wGPkwHDEeFGa3Wmud",
  "key16": "W6F6ybMxh2HXSMW5NGsYQj4RN4wxZjWRJjNahjhS3ugvVpugyLFTk5gcRS2VRYhgsbMvkLLCWAxHHxUMeMBC91C",
  "key17": "3hPqn5VYHfuraE64TQYecUbwsL2hkY8WVpB2r18BMSGVnBHXQ7Jct4zReL9jhQndTrttQLvMQic63HLCbxAXXCeX",
  "key18": "21wQ8U2zoGjCkiNDF5Hm2LpJy4j3HYzggRYXK9vEcNYqZcCN4HK59CCVXMKVA4n1KXTHgWWTvF8nrTo1muFbEbys",
  "key19": "2bNKPTyJUtUBM2hEMHmCoYYvCDLej2JbTXHafcHuzRyAjN4mYHFWwjrjpAVJop9XZ7bfLbeV4UERgQzFyoGQLPEC",
  "key20": "5mDsTbQ5Dr76Rx9vtaaKrKSGvPqk3iqg7ajgqQEX8NtxGV4nAMZ1ttiimcWhmgv86UAXKrXBuVF5iGM3SKhg1rms",
  "key21": "4XPRfj9JQy3M9dxcNEjC5oQcgc6DpCGhweMFUDYAAoJzSWnb6Eq7WGmPs2nfSiCEH95nHwhPT1PgjSN6zCXN1G4X",
  "key22": "3hx9id7582cmLrKmEmqhiUS4drZpfoDFRJBxDJRuPDm7pyZ3XDPqxbmYYUCGxNVXzfGsqD2YRQCFom7hiRGKGvNC",
  "key23": "96tXcbSNi2btWbA8wakUTfhwCxEgrujpEBnwAmA9FeG3ivW6RL1uvNtgkJ6UpVAfsSH1oY5uNNZr79tWdxXiJzC",
  "key24": "Lkg71BZjCKcQ5ommdYszzcKqWjWF7L1vrJdcTWfU1YJcnqgZvAGt91c8dj8xsyRy3n7Myf6fJLs41D2GDarm8Yw",
  "key25": "5JXvgXAiWoEyHKpcz66v8dsoJ1VvCFF3aiShir6LbV5BjWAFsW7UjeMgpDRrdeUv9GCU8kZmbgoLQGsZ4wNRYiER",
  "key26": "49xvRpwU1hVxKh6wE79bMAQSGE8zj1JW3T9Pnio2bYitebGFvXc4Mbcjexfsr9Lahpx6hswEuYABZ28RN1QgQwbv",
  "key27": "2Bm6Ecbihv9spp4Bu3ZBUWXMrhjzvUP1Be3ZV1sjFgPhLLGvR68roFhZSAYF1HSzYugbKHqPqQqru9KYLT4gp8Tt",
  "key28": "3YwtQkcdwn9rTpkhtXJZCcrV7DMC91tNWo474FhmUXiUMLP6wNw4oXi4u71WCM951DLeUww3Rjt6uKUy3KWXaFBs",
  "key29": "2sU2SW6TAFrV9jGhZTRzj3KuSEdTxBVrBCBVddSppsrZhn2varSsvMhYDai2qpmWmydZkCyRq4cCbAmXTCyoGQtk",
  "key30": "4tfEZEaf9RmDtTT4FHWdtohhGvLjbEbNXPUZyk6HwJ4cjooMtPeRvEtArnFYRcJVqjDs7qBKc8kXbQkwGNxsWFdp",
  "key31": "4G2gVUjxVde9ETGTDZ7Pd2tumFod2rBffDHYAwNEAeNzVeohgKhyzLc2yvshFdYWbXWwZPbBXGqCMu6pETcQpxy7",
  "key32": "44EjUf6ji1bvA6NapRkbqT9i3vVQqQLSnJRyF9RPiXPrLRdLiuwkgA4AMqA96zGt4AEdwpTNJS6o5dz2bpe4phJs",
  "key33": "4h6hUVEp2ZggUjk8SvGy2U12uvFUY3eTsNzvyHCozL2U741QAMeaEaL59DYVxCetgecV31YuVHiV7D3XQ2J2ARmN",
  "key34": "yW2htj2jZk2bApNX49kSipgmDovBRAyZdY4rFeDTVmyr3t513ihuswFJkTfx1p1gXqAj1HNE5hpGCy1bW7oNBQK",
  "key35": "tpngp6D9Z6qXrNtHTaEa1H1QJfo2hmcdg1DP7L7eedD6La9Q4x2qhvmZzqMWAzfgSHbnTPa3PiDWKUWwccs3vZd",
  "key36": "2WBu3UyRUqFT4Tryy1orF1ZbauYBs9sA7t8mwoh76bq3XgE5FkKCwCNmUYZm1yv5JrRbsPtMbrrj7h1wqareu9bq",
  "key37": "2vn5ZKhSazeJYKn14L2o2JePudY3ZkTh37ToPXdGhEHXpRiz2UuRmG7kV5CDe1vHVQodYN1KCS6WL45McC3fRzkR",
  "key38": "4ACfBwshRNHZUzDZh6Fw5W9Wn9sGJXYCET3hnBAMyXxE2D9GaJ2UnyZwQ1gauAoJZp5Ywy5YbxKbRo33krvtRGa2",
  "key39": "4U9AfJoLoxoaaiTeETpSETJ3d9Gk9roErP4mseU2B8GUPG6ZSr9tMomaoQohRbDKDJQLCpqYDKQb9m6UhB5GGP2T",
  "key40": "4AA2wjk23TwT1TDGL1f4BQMUJGuR3UaFH2e8tQJhewmTygZJodR3KrnvnnLxkP64XWaho1Sjp8qq16Cn9mXxH9SD",
  "key41": "2nQutfNMRQEFkFN3d3qhFvfnNmhSUJv4c9QkGAbzeqz56TMXF1pZDnkWnaEjtWifCARbC3p2W2bUgYkHjLJgX14R",
  "key42": "5pg8JwNntgkrDuWDT1St4AvdK189dasuehFJDKgcULtXDAHkRo4q2Qqkf51wgzCVemVigGzWCEYzsuaeCyR9YNmH",
  "key43": "29eX24JsJSPTp3yp5QjPZaZuR1pcbdaYRtne48gcqkuGwivmLk5FU4kiUwDt1ggvZKLDTYSRHTg98dDwrcWRpx4o",
  "key44": "4ckUkzzR549obh6UCcTrsWJcyCD6x5bqqTgqZLveBWEbb1M1J9UJa7nEw4iu4qMB73c7bFZaSwjQCnj2EBqcz48U",
  "key45": "sX6t13TYkAiHLNgAgSy8RQbD4VXQ2xLQ9QChYxYxxnrYLkgbYnhS4a18TUNJXjTa8J8EtYrYnUUgSXyt3CL4eTo",
  "key46": "442q4qfZWNzuKVcaJ3cme9NWu4SQKBVaXTHiRwQSyv3GhHrWZDVB7Jc6RzEP4SqH1vWvfrybLDUN38zDFT8ff5MQ"
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
