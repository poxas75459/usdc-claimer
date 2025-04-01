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
    "5mLdjKYueVRwirapiPj2RLUQSokd4fk8SiksUQVRn5qGcDhKNe9FRF5MZHCeJR1jv8Yf8EjdUCx4nnNBBdTjXZdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vtMhZMetejR3xXyGL7ir7cHZzhLqugVNfPzN2s6FuR6J2prADMaSXvm883DtDyQBHW54WttHTQ25CE3j1yGFFxW",
  "key1": "4w9iQ6gij2EefLszcZbDfFfeqWZuLE1N516GpiMN4BUNPpq38XqnuBcmMBmH7HJeD4bUdj6xhAo2tkCQo9iUBCkC",
  "key2": "2ZhN89ZXrmm7nF7PHZs8f662Pa7WmZw5Be1SrJFbwgByfDWNbyanqv7VHVLTxbv6dtjzRxe5yhVzW3eRfjtT883A",
  "key3": "4ujaJYqfdPqysDpvxpWAtAnFUa51dkVTzDnxfhYh28Xm69W7zEGDL73fD4AwHcVA8kdfkK5t69Z5C9WRB7bnsfUk",
  "key4": "3QvHTmigmFCQjbhhBjb1BvrUkUtLbLFcJPzHFstVDkDEdy9uRcjoh5khdhnemgvfFULeYDLBvrR8Lu8WSKSYsvLh",
  "key5": "3oTeCf6TMyxp3QMfwxYY3QrnDEPoABgkbdbVP83SbXRQJvMdVhEyX97XwFWPz5hqdYEsmKxeHubkiwJ77C16iTBj",
  "key6": "2QcCSBPBTQjWgfNkYR64SdPo8YHqbd8CbZieCnaddqVLoJz9GZaWQbsuu7te4uTQuB8bVXwTHKZigsHNuoqMLoF5",
  "key7": "4dcACcKvcJUe1axi2N2RYLyZ1k5jdeU8urjVgqnWcx3Mxf4TiRrjUzRwdsMQS6a7s6SiWsPWvh1K89VJZDvR5hYX",
  "key8": "3VvCLvqScp7ez3MAkCHPVre34vXGy25U3j7kfB6TFn4ANkejNzSSqAjU9L2s3MkP5LHNSWKKEib3WjxrVrTu8xF9",
  "key9": "59d4CpDExDjSnXoxSszAvKTbyQqhUs6NS6GxmsSec9XvejL2q37n6Fmx4gehXJzJt6Zt9amqq4q25EqisRfL5BJc",
  "key10": "5R1yczGVKx1huq2zoCuS9qXdku7q9Lqi3NtK3p1sUi4eyEadaVkx4DC5aZXJpGkBCgp18FL68jSRs9A4gjHAJeHG",
  "key11": "4zia1ueBSXRKcR7yzKp2vuPHHu7VWuZYBb7ntWwcsiKytTBnjPDnVHS7xAZE6eouCCocAiML1dJ9SRjntaRx5wR6",
  "key12": "5Q8Bdf4s2MDUFbeqyRBzaFAeDfkxzSGDVERDacdp7nCBQpvqTvAx6hPcq1mzEMpwCj85ym9SC7sKLpxtEJeEZBz7",
  "key13": "4RbhGLryHwxVEoAGhBgJztyAfpCDEUgGWWLMUFMnt7S1TL6iPBzF6qEKWoLq23B5H7ith42tXiBRr2Y7YqtNNYe1",
  "key14": "3kokXbQQMfBS7RgvZQjgaL3ZZejzMorPz3tEbiw1CnpSYZjHihy75ft9p4znfe8xicT3jMPeP44HSmmWUYMqGM4R",
  "key15": "2zsGswZPJkGfVESBGRxtKcnRFU6sWeEHQBh42qnwjS1bXu9jLG3BUYAJNk6RBqYYDnK7EdUXmnTGKEYY3c8E4vdG",
  "key16": "2RBDWQPXrJD7nG6yBLijRUpypf9oWzwjpVr3P7ACeKuqkp7si72GVFyFUw1WvTszQUFSnLRsSTNtM88tFUfLKFAa",
  "key17": "qajmX9Q6Po3VcFio5ttWgnDyiuiQvbUZRuWK2Rd6KjgJYhKD9zcBYfyTd5UHjFtgon12RiThe1aupLTsXqu1GZF",
  "key18": "2X4rQuWZKgmpwU8ndQRY9Ze7JutepKWa2VtFwm5Kpsj7BCKAjfm2xfyevN7dVMk4UjBPQ7LWz8tGrvacQvtC7msr",
  "key19": "4ZnLdfRiQWtHrLCnyggHk4tv5u2GQcNnAJtvfnjYDaw7ZuCR4Pi1YyTP9xSC63vr7sVXvRUMqjdxWew6HHwZ5F5L",
  "key20": "2h8WbuotDBHVrqSrKSE18h5AYUpe4ZxgZm7xJPtZha6gVDhUM71cZvbzgQCCqvzTmAv2EDEGKLp4nP9TdgB6ZxhP",
  "key21": "4P8AGR8CCeWGKBSsiPBp2TyV114HNxGtfVEDe6gyDRfKNJPJCEy73UFENBXEFHKeiN85Kb7oA9T5LnCA6SA6dPS5",
  "key22": "5JBVjRRPvq3Hhi3TBAwXUJ9Ky7qcgvS3sqEyvFjyoSGadbuvq4fSm4ZtydyKt569JvZdunyiLq9n255GWt9EApC6",
  "key23": "2cfZW2SHWWARGu1qSb4cmoZzFWvhYnnpakeM3smHNJskh69X3N35y1xorQRByY6RwHnpXMQSeoZBRD2GLC4ATQ2q",
  "key24": "46MKftPswpZKErU23zFmaaQ39EfDhk7AmFG7ptyLW6R96cE9MmfbJKMduzex74TQwtJCmvj7hEdxmQ2dDmkJyEg3",
  "key25": "5EhtJkRG9sUWnR8BSmDtzeemgCJBtYWUp7YwUhknp4Sj9tVnupaVSbr7YrGP1MYDpPLX68JqwFLgahhXTAcouYT9",
  "key26": "2vRvh4mSjgARgN6PoJ7UH7vHzporHcdJptxpMaKix2Chmb9piP425b9Zh8LVof1WZvqzeQyaPGnfUfGQNW3E9pRh",
  "key27": "4uQSgHG8MTPCmiAHaiZFTdSJZuJL2stxVmJrKNBg4F53gSFLYzsd4arFDbArVpGidUDAp2yrC3Y47oUmEv6q3Cye",
  "key28": "4nCgo5uzGdmvmpP2YQ4FeV7TkGnjR7dVSiHRTx9VPjwkBUZzuWdWoJU4DwtwvRxeBVU6589EWHG9uQvuyBXLfACk",
  "key29": "4zBmo2T5oY8Q63ajWNM2EtCroFycZ4tmVRh7uBBPYb7eN9EXAgESWhnFhPuJapjKmXm4vqTBxRsVLXMLh9RJTRH6",
  "key30": "5ZsDMpHCCdKmJwqMc3X6mdVMTABVSeyquA1Z9HPokquAQTKRKzTJfWFeYTi3AbZjRJgeVbPvjeX2YLBdH1u6Na1Y",
  "key31": "tTRMsnqQM9uwNVUnyC77WyEtQgy4yUuZuwVGqZV1W7fH36mcBwF2t63EJBZmkzYiWXjjMpSJwpknydgzv1yHij3",
  "key32": "2Knxe6D3x8r1RQ3NbEXCaozT9n3Nqs2aX6Q51kZPLiPLMhzHXP8CApRKRcuRQpEtinMKykAiTHgMGiheoQxj7LzJ",
  "key33": "4xEoDxDeEhz4GhUdAxvCyqeBb3M7myDmKzSfg1FB1NxQicppcTX3xaLA2oYQwfsgvrvx77rrvDnzk9NWs1jCCHjU",
  "key34": "495SXgCpsVyrRBMWh9XP5xBUqcwqjBgeYQ39DYn3i99haKPamzYxEPPEBdkKcvBhi6XAaiwdDTzmt5x2GokYadFM",
  "key35": "gVupHdRCRugECEKuP6FoQvmh3bY5WBUshthFPwEkHDD5g1oC3gzAZfoBhwSvms6i5JRPHKBd4jfqp8XmVpw18gB",
  "key36": "ipBUZtD4iNp27caJFyB5baNUsaz3vXyrFoR8doNjemyRqRyshXEBFWQpAZGmexAn251rjgKWSjoZ1rMVnSe61D9",
  "key37": "64Pag6o3DfMfrKJiwjiSDjMfbmtEukB3EK9YiRFAh7Dmp1Axoob3fAdZSDH5JfVzTagPKss21Hk9GmdRdaPZBiax",
  "key38": "4UVzxFDLv3hrbovYfQRaBDQTMpXT5EDRgzmzqjJbDeCiexixPLaAW28JzBAPYQVtVqYexYU3REpeKeiBD2nUnntS",
  "key39": "Cefo1rNRzmtr8rj7bT3CMC1KpEt85eRSiorhhryvK8P3QqavB1FKKdvL3xnyZyMg8ueGfJUM124RUV6MJbW72dg",
  "key40": "oLJth2HrMYMqW2QJwn71yoWWb4gi8y5kF6z2rXqU459FGnmMJCtgSicLhh26wWCRwtVLUKgRdcJKyRW8bBcfoaJ",
  "key41": "2vuriw8SdSZhzakQLrZxjrXQWJaFP3rEDBWeftxbVQYpcpH4L8Tpvyge8Sc5Tcwb9CVGzVNv5c5YuAaRzDz6jrpD",
  "key42": "kSjoG86Tfy8vatnjboXFHHAsarnRipWq266cytFyhJnWYNFLRDarKVTf5sFSZZfWmtpddbuJvEo6o3vtsjfNrcP"
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
