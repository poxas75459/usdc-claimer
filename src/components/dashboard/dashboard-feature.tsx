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
    "5Dc7wQ6phMGVo8qo9uHrs4BjfstGgbn8k9zqh16AevErEy4JxctR69RboFMFWSd6YukYiAPjjjiVArQy3bLJ9RUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y34K6f2RVKBxP9q38WU3wFxwLMAp1eHU39bJr8YrV5qieau2ZTUtwxMSk1xnor4e7ShVKQcMU1M1s2Y2kJeTxGh",
  "key1": "4pVvPNy4EMzbkjTqsyAfQ8xscyicuCtmHwHrYacE8AQDWNUxV9YHx4B32LN3xNjmPQnexsuWaJKk8Xux6fkiKkgh",
  "key2": "4sxbnyGTVkCctWtq8FzpaFpT5VLVzT8YsWHBkgSoswv21D5JgHPMBGYgNKHYrz6XJyWZ84BVABtfJAbqCVi3YDBV",
  "key3": "3Buswz3XkN6n3w9BMfwQ1TN1RsntZWdJbG5hqzr9pHx2oJrxd9xPmZeJ19mzJapJeiSmB3UTKXW75tQrxosbQfTG",
  "key4": "4Rr6SDjrDCeuTX3DSzeSBTMuexWiptrZfpuuRns49inDVdQLMm7B1RpZXFRPQZ5NYgpekWcwgEjRnvnRN1a3XkYY",
  "key5": "THWXZgHTLPoAt2KA7mSyCaDvz5pkn9bnUaLMUDiuHjHHHJL4AAha4j42FZH7qgtzLQ4uNTABUrAbh6YhxAG3Pvm",
  "key6": "3TPiFkq964hxEGoA73MRWvWMPYEbosWhrnJ7EPxPF1SoucJzPYeCh2C4DRJZceUDFv1gQoCvdKBmqBw6cxXBo1m3",
  "key7": "3tTw4HkuPbr9gc1MxtCNydUWgon9NyvMiqHTJQYqzmLBnfSXfgePSdqQzCqUrRNMSahX8LkTv3s7Gi1RJsdjp1yZ",
  "key8": "4uK65gsaoCAyum8GAmj6u6LU6wX6mBDKfT8nH5NreimyywBsV4pZZhkCt3p2jRwufXFUEpKfjgzhMXc1J63nNb5U",
  "key9": "dGBsmFViXj5Si7ecw9mAz2G2eyqGrFspK1KM9YreNG7wVba3Y5HTLgmQpuH2WdmDYT8owJZLAVGLnZ6r61YC1Gj",
  "key10": "2t5vpiDgkinj3LGU1FK6FMnJtVbs6JZNFx34VtVt5qyg5bAnbDn7pZeqs1tFngB5ZADN6osxyKaSGtohascu7Dkr",
  "key11": "5u2eKyc541eCH4HR3dcsm54SnESzoHoAe5TXUn7yP2fTbZpxtiTBQ5wuFTDeEZiDqbDgghaVN9z9y6HcjyDaEQMH",
  "key12": "5SkeuSQ4VVXD7sfHpEZ914ts9vgBwBEoC1SLEDWsn7TdPm1x4pA4zWY9Bs3Togyqh5QXVST5FxZeyP6dHy4dbDp6",
  "key13": "U8XT8LPxBUYSMFD43UYkqmXeJdxvF6b9gJjeXLdPS3c3RJJyK8SDWoojTq5j6m184bVx2yS4RhZzQ3kWxJJcEG6",
  "key14": "fHVHA6MXa4vWnpHb79Nh9Dn2grvePW59mWqofSw8pAkP5LXVhWhNeidjkcpseE7fUnjebiZb5V8YeaV38CNcfRt",
  "key15": "42WtEWNqXmwWMsSdLoiTxspbc3wRE7waMZmXvXyHNR32C6zafmVAWUvykwAhpWCnCc2HX4LPcuRGMn3mDmmGHXN2",
  "key16": "5acaj8fGmFVjUxqe56vxktnPMptnce4RDSCghq6RBXgqwyTRipzhThaPnxqSEBW8Zozs7SsKYnNqKppeZhPdjVNC",
  "key17": "5AzHBHmRu5zLiWLV7hTZjg7RYaspF5VioNDDNARRLiNrT3fn5zD1M97pYKugbFr7E6XhaNsFqhLCANP1tgC7HGua",
  "key18": "3f3789EF5k7kRrPVn7WoY6GMWTEVDPCkWXKkzERAMW7xeqjh3YdTq2cpo8qRWrrtTsW5iaFJh8Hc3ehpeKVfuJ8t",
  "key19": "E57pvikS78Kt9nw9aahCTxgTuohxcYJxsipLuzSxaVB4XgynPGiJyZ8tuoxaaKZkoq48GFQ8hAbcS8CYEhF8VJJ",
  "key20": "Liepz2fHeRQw37dThzBrLu5oeFzNvt5VPqhJxmGR7VwK18ukAfiKhKH3eDPBg1u1qe1oLEKzK2NNTYSJxtV8YSa",
  "key21": "57dPK3Q1SCQYRbfgowZ17knahBMGU7Swqy5awuiE9bZNM9UMKvjfDct3fcodYNQsvGkhywabJR4LcPo1gYpuXzcQ",
  "key22": "62X7V3LWeVdfXvzmJxrJ5cyxbHxAvPYKXajf6FLEjeAhfPwQQCPraSGkUBE1AxnHvGoqce9fngpGFofmJSQfponM",
  "key23": "4gaoASkihZjJS97p4KN48G56uYdnU9e7zUzKs7P26KFQacaN9AipY2ba1SVvZgvKPeodAkRXMVHWFWTtwDMqRAz6",
  "key24": "m7LC2MfSWAsmChHhj3SZppBcgvVNWNccY9fj6ueGaDz7bGztxP1fevEffAGnekbJ67kEyE8SjwVZnXsssX7kRvQ",
  "key25": "2psSBFw9aXb7uU3jHjmpUL41JfwnwC38WwTn23FSxjfa3e9tHSbq29gafjNVJ4pcZnkTJ4BD17AMBbcSbnRYJqvE",
  "key26": "5ikePQtJWBBqqiytSehpoAsnJ8SZw9qKvHzL4MnvLPD8wZ9esgGgPxmjLAASX2aWKpLsmnGwCrs2rmaEG9f98PAx",
  "key27": "37HjQo4newvVdLr9xff3wxXPikuvRxEVRcJntjmZv9NzDqbevahjNJtCh9grQhnnBucD4TTD7fgKw5naLgo8BMbB",
  "key28": "2LXWxN3Tibk3SE52Zz1TbDqUDzECSyjhMLM7fx1r36VSFhDLHBs9mv4Lo5uD3tKVz4RdcSonjaAKFjNjHT6CdyQo",
  "key29": "5d7g9k1BphWyR4R4EpPWK28AELFJ71MQMVF399k4SSdFxjQt7VjFoFDnRPQk7useVAVt5SwtKkZYQTmerkHcpoMP",
  "key30": "21cFTYTPx4M3ZLci4Nxiq4JXJ2MNi9XEfXaw3ZbGLVK1aF5Jv6HvmMTktJSbwNS9oyJ1dDxp6CiGenuUxr3KSh5T",
  "key31": "38uNsdaP7d7VwrjiksN5sLeXUYnzM6L7Vd3nSzKuLty3Sa6ZPGxCe7hiw2yvHQGbnTnsRmLk7MnjzVKAnNVACpU4",
  "key32": "3rapkCQV5T1PTqq3wJUqgc4RUE1RJ7KaX4hCQw8Zg1wdWtPGB7ri7uGBurr7h7JpmKRi3Rkupq1s6FLmyEimPKWJ",
  "key33": "476kunhaLT2NWPQKY4mu3iaCiQm8QX8NPGaeucRTArEgYtZJpJiDjLdDxd1VnpxMRPmJLU1P2yWdZaasLznFdyry",
  "key34": "3DQMF4erMHL2arKL3d2mYZQkv39MwoVpUEtsLqUD5L261uKeyfotr6Z6UoLBvSvr6et2pekb5rz7kqEYMLLp3eLW",
  "key35": "5VcTCtB64WTapwU7wDvHFUffcYv8m7J1keiSPgSzpKvvaAzxrBwbLYZgeMBFvNkrMKK9LwLdT3esZkPtBdiTwmW",
  "key36": "5QinJ7DC3kozHBE3Syg822p6842FdM9oWvmih5DdbtXihDKkwtHVXsY3nvacsqmsbgLj8U36sBkUzQD4gZc3Gnfh",
  "key37": "2HX687ESG23nYdsCPCBYpwndHz4ycZbfWbnLq4Jr2hRuN1m27VkMQEJuvAbvy8VDWK8UYWQJEVpS1r8CHSe74vbz",
  "key38": "2Hyx4usvGkxLRBFtQSYDR19qMJY8SsqsjRVuss1G1bHsX9s2ZqhJSQFibLbV8J81m7osMGMpz8fHFwYHwULGBbrF",
  "key39": "51iwAFLzbwLgpnTRRkfGLGsUyARv2gi7Xfo6cwRjYiQ8ehpdtdeA5LCimPTUDHXFWntLojd6FFA58Rtp7q8xmpht",
  "key40": "2sgggv852mSGHoMvpUMHDk9pFZcF8CwQz99PfDEcGHMed4ENR9uQ7RTDMytLBgd4qCUxoxGqE3CAZurDgz1eRDfP",
  "key41": "567VATiCEgdrbdRYkceaZFw3riEC6FrfYLd88fC4u7L7ieWDrA5fU3pBdX3gWCo1W23ps25JQisnpJ1Q1URMKUxh",
  "key42": "3iwbKHqTfLoYKNM6BBFMG9oXG2Dceoq28j6FG1su4EjSYihb8S18dx3cNGQSkFbV66HbxxKh4W5CDxRrWRAT25MC",
  "key43": "4ZP32iDdZvYVMHZnmmpYcRz57o6q1HtJWf8Cg9qJow2m2PsYsgukpgJmfPFvoZPKG1YU8kiUVjiSaTTff9vx7TNc",
  "key44": "4mRoxxL6TfGAJCZY3WcF9eVXu8FTzXXaxYaugTNSdJB2if1md1F672j1g8Vsbnh3ao481uMXd6q7Q65nm76viHZV",
  "key45": "5AV9ZP1sy6iPciEUtzFw9mzZULx9eLR3eQREm51qeDy6uTmf1roN5fReb3qVWnMW5myaCh9ret7jD3bn3M1uWd8B",
  "key46": "3iiWZVGUWdE4weJA7XMXSmn6U2E3dykY1hx8FgduRLi7btrMXRxTQz5PW8XzTFajoUxyqvdD9gUouj4t3bNwMvED"
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
