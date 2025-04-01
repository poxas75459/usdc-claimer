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
    "394jpNkVrz1gR4gvGFtoXVD1p87tqccX6VGdY5KaynXoAgJU9ZS76ntPDA9MKwxx1oUMExsrdwT6e1nU3xY3S8MQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WkZxjLPKmq1sG3C3xyVUo31BvNVEPCSy3CLL5y1D7yQCow9d5rRVRAZcuYThdMTPoSHLmtetVNSN3aeqnzBgWc9",
  "key1": "42WAjK4wRxDnMb2Kvq19QErZKiXH8GRMFuFVDcrKkv6xNAWe1MJctuTXTdpoUL349aVJfqJjn7LK2BH3V4kHcJDL",
  "key2": "5F5dv6DHiDw4VK2MP1KisoEsyXjBFrkXvGJVteezJVwoZutfwza15e7ss8BFj6Vu4PEvHw6txJ5NRh3WxWnGpsAs",
  "key3": "2ZcrExcx7bCunx8nyP6g1wJY3Lz1WPiHxuwoA9NqkBK5ymwDPNaXdMHvPx73T59Y3DUJJFxRVjyjYEKr9eiojXj9",
  "key4": "4qd8TsaQDRrgvbhJieivFtH83ZxuNgjy9vqrdEDBuupYrmXcYDMr8aaxwD15eBvFGrSUL8W7RBgeom1VfTkPApAQ",
  "key5": "51BucMnutWKrzDfhFKurzT7c1tygPQvxVm5t4BGqJ1hzYPchaK9wHgSQGkM5TPQHPGcZkovMrdFDFnEUhVdqL2ps",
  "key6": "4QSEbE2CWFiok7Rn6P7NgZxr4bAs69wbexuovL9ATRyzXGC7e6ziJ7kSHj1MrpnDSjQgB1orQRsYUXyexuPdv2hM",
  "key7": "2ZhtmUvRwwDry3bCq9oXsdqeFNKwtDArUyUGzXpLmcC7CxSpqcKroiVegid3u4eM9zRW5LBJVU3MQBkGJXpUs4i7",
  "key8": "XawakZDjgJeA224G8kEmMVdxZqgZKLqU4UXtP5EMEEMLggFy4V2HCJ4YHq6zXyggpiM5nFkaLQoBWoNZMNrSy88",
  "key9": "2TdkC1wQBVpDKbj3RehRqJefucyEqazL1h7taJfFPhDF3EBPHtc7agrHt6FoW6rhChhB8hVkgoBQtRXxGTBp5Vxo",
  "key10": "55wX6otAU8KMQ2HNnqYhPFAtwzHwQ7w6KVypv8nrA7B4DPEnGzV54sqEVojpK7HzPenfHrRVXQtYDxr4j8twuFJ8",
  "key11": "5ekud7bhTzT1tVsJtthNaPkj6x9wEYCkUK6vihFB5c7bzMFEWqCYRd2yAvQ4trPUTSNo45Rd9wfwCbNub9XwmHZR",
  "key12": "4MDiHG13rM9pmbUpaHH1oq3nZar6iH5roctww2Lm5fivqs3SVRonVztRzS5MaThrsje6jdmCY5iNfRxZCDBbhiBf",
  "key13": "27kTneaSFCfWiCwFV4EVgqMBHXwP69LPE2mgshiK77phCVhKEb95jmQQ286zC3YzugHW1SWekoyd85RajsoTggbH",
  "key14": "2AwuoM3gNdKq13dmQQnTq3Lk2N5kmVVs3XHcBxPGs6Zcme6smz5GyFS13x6WRDzmvm7WikD5W2zBSC3tpGdWD7UZ",
  "key15": "4jKKnQPGPZCvVZBP9pAJC2iH9Lfk2JaZbYpFqfaTJJfkRHHuFdnyQe9B7bPStsdTEiQSDx1UMQUT9WspK9DHB385",
  "key16": "5RS2qGqpsZLLsHQmMsz8JZR9cqSfMaCSiH9pzjf2fh7QDDRCNrZaHk7n7VcpULSR4qUoN4D92ZEr9D9Ru1N7U3AS",
  "key17": "4PEX4WXSSCfiwjNmVmgeUey5bUeBKgK5Pfouj1GgkpyVQ31qQThxyDx6fhVCegWy6Hy6nYUnb84ikTc7dbgGTNM8",
  "key18": "2dxpoy4zVpJQJ8hEhBLRZh4UfwyUGXcopxCRmyuoyGkwy3RQZayrqAFuGcogug75TMf3FYEpqzwkU5LmdZCsdUCA",
  "key19": "5JuEDvGcxLjeemWERyMcVc5YN8G8tFgj6zLMJdsgcTPoezXxnYhP4y8DWo4meMdivRmH12wHFiA9JMyNJq8T7AfT",
  "key20": "2ki7W2JuGNeG4SyCoAdntKVrxvxfiresKAyMNwnHKQVK1M451muWpzxcY2uDkGmUPtbFRhT8U7dZf3vxPry3YsVg",
  "key21": "4sjC5vdXDxrpJwgVQfbfjTpUL5bSt2cH1u4T1kS4cHjgduvFikSiwKm9jp6ovdegqaR5FYkUYp3Cc7A1f4yt6Ro2",
  "key22": "296h9dfm7M2EBhcQvPdvFyqamitzhHkwMqzgGeDxwrgzttYrKoMMBySSkqEPCStPZArmD7E2BqJTWFS2bipTJnPu",
  "key23": "yhjan4Tt2wVQcQNSgmxpiDcg9GfAWPv9XxyhVGpXFNrRtdwcoUC3Sdbp4nxgmStfGpmktWqm837me6iaKLgQZAa",
  "key24": "25YPUgfqwYMXBfdBLLiRM3pENq6aJ3Z3MHNvXBcctKcV8zxnrYrA1NQderEWZuaBhKLNA3LZoDtdspMLu89Lqtcy",
  "key25": "etdSWJ1dAGiEB4rySc1GhXHAHVBVBPzvhVNkpnLH7qZZTcYtY2JgbSEWFUDNYtUjaLQssfyvmB5rMNbnbmCmqFk",
  "key26": "23QGzqPErMN9mAhxKPtVn85PKbQXhjXjgxbWmg2FUNqu95q2oZ9CDBa784oZLPBTHQwYXEndBtqrk33XmRpXiAHK",
  "key27": "31beeqzyrvNnj5cctE8BnJR9ZuarCdAFkXgkwiAmBhDdcAgQnCwXdsTjt6rsWVyEYNM7BG8VvCgKQ5Ub5qdvcCDi",
  "key28": "Guu7jgtJ18UVKnH1qf2mwMcZQProgQKMVCxuVyDYUDeUq11KwLGovpbghDim9YPfgx4pARECoVJpF4UiWXTACVm",
  "key29": "d56TMRigtD1UvqtYpwLsXwgcsPBH3EcSbPhHBvqxaRsYWFCLpUge6yTUDXdieqCTeuosN4FhEpYJyL8Kb6enNaq",
  "key30": "4rxFiFjDeb41RRYaE8QbojpEz7AJ87tY2Gyd9xAForrJjk763XXgg98g2p3p2Zk8dbUojEkGDjzq9bxzvRcRL36q",
  "key31": "4v79NMXsu4duFVpGrH8cMStqynnGQon1gJKSjvkfRb3QuCFGHSctPcTY2oASS92PYNtK4driTvBHYX9nbu4gp2cp",
  "key32": "5YQvbCZ5J1n6B2HLRAnBmxKUcoAVFjRBgszpHhYdscnfEPmsvDHhvUZmV4FtL7UgiCyKjQzbBnqgQ9K1nrC6TQ39",
  "key33": "64NAKDZSexYmCZHX5aoWfunyg96zGwAwyXoVHfRBxNnyYwRoDvRCxHxUaSdxH88PYRcnSss3AZjvqgfMXkQfdq11",
  "key34": "4gkhfgFncm9CXQHwVBmAUQDqdhZSsbMH8YiRdoBdTiYH4YezU4PJGsDiutajFUiCknXRtHNCnRp92H3KisujEP4G",
  "key35": "k7aaWseHTsRMNMDYsMn6FPVrqF3b5iNMk98PHqqFTREw8kzjzDCohCBicxu34HAiip6vnwRpPmyXbHJUm4ZQpQN",
  "key36": "5T5TGuPicJxkDX39Vd4vNHnLZgpzec6PfFy9X1ek6XFYKu49aYsfMwew9NdMg9viBWB35ayRXHhkxnkhnh9wLUK6",
  "key37": "fpJvcV6Huj2yea6jhhLw6Mpx1dikeEsjpwjufYU32JRyNTRZgMeE4idtboYvfTQ2mQkENhbZsgZjQtZxjfnxVur",
  "key38": "3eLksapSSs1TLo3i8dwE3DYT8H44aDPQaZC7qyqJSDmPk3gp9k3tnEaZEptAkC5JWYdHKa1JJsvhU6iBRG33gLqn",
  "key39": "4rSzNLjPYLo384qkdq7pGSCA31K3UdoZUbYenhsaK64oeC8mAK1XahXqTZq6ZPiTTaLuZj6zeFfnGgimkgVeBZsi",
  "key40": "3ZDBhCafT1s4zZZLaBwG8C5HWwz4eP763cBetVG5vm7SPs297Qk9rbU5NcreRqtxwybxA1rz7aqkQWa5fr9F28pK"
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
