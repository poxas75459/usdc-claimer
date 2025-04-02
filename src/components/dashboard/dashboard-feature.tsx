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
    "5QYv5xb6rfsR5HzAdv3Q81EfVnhT44ioGNxcoYKLKte4JKeQT4Upq1tfXXP39N3hC959X6nFrN7scEQNtich3bDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ibzt4speNHJKH5oSJMKVuBcdAq3vmzmfgB4Puocg16QK5tfr2JxFqkyi4vxKqzSxh2MwF5UkFxxJ28B3kietDkD",
  "key1": "5bgsLojtmrVWfsPXxvL8K8YRdMD6arv1PMGVLRDWkHJYnSw1TyNsUYUKi6SQK9eSzMNKT8cbAiax5koUK3M29fvS",
  "key2": "4ZqiUSV8ZJgN5K5Bv8J1VAku5gy8H2ffaciaCRiGEuJBrt3sVBnvDzVaH1dKmF79ySVyQYVcT15f2c9C3PpfM7JR",
  "key3": "57c6aVmCm3aMwJ4NVuQKHCfatUK6uEGiSPjfZpoHYHhkTeqNXAW4kzHsSwwEZfuhm6Pe9q16gRTy7ajzwXyS5fpT",
  "key4": "2M7qZbWfbtatx8utUcyGWQE6BhGE4Verqi8z1mPeoMA6QQhbMmbfmACDBDszkq1du3ycBqdx1nBaywKkjHxmXrjS",
  "key5": "2LorVHuUmfSggJZ4bkwbGqbfnaPk6ibunBdSLFbZz37dDTKUYSDGxjpFTYQXoVmEoqF2ELdcthaztEBzYsfPp5LB",
  "key6": "5YbLNFKdBAaitJxVAL9DhZLEoa9ahPTJvGenZ7NdQ27T4WhfSWx4zAUuq97ePqid9PFmcT9Jo7o4nmoDHjixwyxq",
  "key7": "31LBVBucDuzXxR8NrgJj3xfYM6sNyXtg6ibHVY8J1nKJYTkbwHimDpcGi6y4PeDUtosHURuyChX35jV1x19NQdpN",
  "key8": "2wqmJUj1gE775tUgLFX5QdFZjGGmwxdVirGTcigr5shbd1x7H5gK5UZLiGYQ8YgJFgZHsCY7wHM9CNCVnywcUtRR",
  "key9": "3NUHMnRDcLEJpzmY54jKyvVTo5orpiHF83Y5CmQRAc7XKZ8iEoniuMxhZVT8Pf4pdNydFYSpxtwMDHiiwbTSQP3",
  "key10": "585oVfcphPatxgEDrpcqKr5xe9UwrM8wxgpmsXVexbu7MTSkv94hAfED8ifzyHMHquMRTH8tg5pwoAsu9eVZVpnv",
  "key11": "7v139u8urYdxEZrpVPnUDDUkmup8hPStnxYTvNUoK7E1ZLeKjum92FFoyUzUjT44a4S6QYqFrhdB7wJv41PpYkv",
  "key12": "5zD1sgrGaviyry12yTnhAaAzoE1BqaFBwrx6sEvieoxTbb8KP5whv7ENDQ8mkYgHcJ4SKEXR4gLNoMU9totpeEfA",
  "key13": "4SrA7QwK9DhrJV1XxfdTQGVGAd7gUndcYN2oVFj82DkePMXbTdjJgyA2DJrqYD36gZqCDiyruTdJL9BJo2tvrBcY",
  "key14": "5U9UxbPjYKLovXkZ64D86KpTuLceUCnejWnr6HQxTyrxxK3ci2hQ9eFJDuZ27fWsbADCPYfeK1U7jxxE5EGRy1hH",
  "key15": "2rQN4vxukRppej3o8qaJFph8xGUoHHoaT51qYvP5vHZPv3eTgsZaNyUQaJeRR4iJKcEgy9PwjXTFE2NY7U3w8hg8",
  "key16": "4gzyMJXuECbAoy7SLUp5KTLX3GCbm47HuGB483N9QGdkWWa1JkxtjmNMgRaRE8REPu2ee7vk1bpqHeYsumkc7Lpt",
  "key17": "2sqT69q99XKDKBnFcZcq1D7upt88e3pcjBofbGuKcQXVxELJ3CRcY8XNL8cMoue4MDP7Y6bbSR8nRu4UbLuhuRuW",
  "key18": "338hQvj4RGj6PvCJUrmjJnag7FxYPdRjMLsUoFJED1eSKagUZkxQ144sffkT3iYbdftVDBKpuvc1UaEvXtwPCQhf",
  "key19": "5gP2KEjqcGSpRqSpNmBeBDAEPNcERfkUveypd8A7WaXfuARCzCidWXBKFbpKp7HwYv2dstK22avaobkBxiveUpVx",
  "key20": "37kfTewRDQzUEtzWxu61TeQ8WfuQjwYYdRdAzzfscYMTLhKC4YKxqaPHFbxzFepjotx5DDoiopkKdRCRnp7rxLqW",
  "key21": "4woqo4oYWab4NhFNeUuJGorgFBBBpcyvje2cjv9VeHfch3atCbHqZCek56Qu2FtcYySqhJrnnomukykEm4ynH5M",
  "key22": "5AAoDHc19rytNwz13BtHpAiEzCT8XAUkkc2yHQ2L4CckVVe7zbFTAQfkHczb93dA7cUwY2kpH2RbTd5TzRg9UDAH",
  "key23": "2bGikHoVvgok3iXgsxMFeQ4Y5fAdheGsXkWHJgyY2LxvCvXmnm8dzHrKQ7MUj7RCzEraCWTZGCkhgacPFoymZJha",
  "key24": "5MPsDNpqschz7RmAT2pgRFuZpCrnZhihWpQtrQsW2V23tFffno7tCdpmjBg8ZJj3RntyCMvfAheSUdjEAbF8n55i",
  "key25": "44UAjkWRjRQr3Cu4aXLt5Akmk8LjHNXsz1VxoXtxWY6vMEGJTz47igqgz5hVJZFc1dgeVoCfRXHiJJVxvRa6ScCo",
  "key26": "2ZvKKUjpmjE7pXd88Qvr8zP1JDAsniGmLKkLYbBPkE49YufTJJLiNaE2ByAWzFy9SLKxbCgrb9GT9fWtyiAP5s84",
  "key27": "3f5FyfQppEZqVGQyJzCSiFrrs95JQVWMqiPzQvdqhnweXMWaQwKC8h8zeCJRkAMnYNw7q4CqnNcEsLdj94R6bDSe",
  "key28": "2FzyjZo2rn4QfPsqRyGL44g8oAsWt75qTonrpR8YjkEa4mgRAJ7ShGVjaBMfar4MrwgWDns7q7qqXNBoaZaRY3Jn",
  "key29": "3AFLXePHc3U9ytTVLRvChjEXfomqpuuZUDSPUjx4xPNgEht571VTesUxxJpbhe8xDtbx4Cnex6fLMi9EMExsmuHF",
  "key30": "2pPUN54AHm99FGXpcaTxo18n4F4P6rkNPtUJvPpwNdeHAA3beRizW1LaiMtcBDv422oGTfC3okVkae4d7BNuFPco",
  "key31": "2kp33jxEDp9Hs86w5a75hgsMCZtBQGfXEiU9cxMoEGXfujb8NDomdMp5A35sebWW3kwNhAAr9LKVeP511o8kwRyb",
  "key32": "2HrYyXKSNiTsckBpf7CGuczzBAF6J1WJQgeZGh1PmYANL4xFAwqqsXqCZVqMvYzCgUkh6NVUZKqfykcda4Ekgj78",
  "key33": "5zxE3B1e9Uzb2A616SzmJt2whdFfH1gNJQDRxhMu6SUfHe8y3mx8uUcs9xpuoddgmEGKTct94GjavWUD3iuhCmPh",
  "key34": "Leq3BeUnwpczCi4pZ1WEQPjbQPo1zzbXDPdJwXBCWoinApkmU99fNLTzDYmMBfFTPM6gBtLvTErEL3UnFLCK8j2",
  "key35": "5gjprvq2Ffb2AoEwyHuvaghmmXhG5H9YuBuAbdNCBKeqDBpmWNR252wSYdqU7vLgSyg3er3kRPvCbmJwh5no4yUA",
  "key36": "5XFZTAGkJPxGmuspqUDsVHEo3C9q2PKc1aWwMakS5P1j39GcPq3Pj5xrRoVRKoeMPkvHJeDkBp7RWsb1iz5XUynr",
  "key37": "yvqvRNsGVw33xpwmeUQ4vEMF9kkjz6iufLdMqtATjGYEBujhzxhsNunAmioRuhgSP9SNq2nrsxHfxwPE3CWkGVJ",
  "key38": "X1SuQ3G8aACwNR6temdR7iXy2jp144w6749R4GL2JKgoWN2sVZj3ocLVGue57wJth9AG8AoCEXKzC9VZQEPft9F"
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
