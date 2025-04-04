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
    "5JryQ1maqMQh68LZgzAr2YSng1NP4o2FGjhahCRwTqZNoqpUreB7jmjb994izZDaZDeeLVsHA96mwKimNqNdLdLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qdFPK1de2bFt6cdJ3ep6WqpUppq4doJFT3cLGN3VnuggLpMjyybZaCiz21JVQFYbbXVxom4kgDM6GS5GXq7CbF9",
  "key1": "5qLFcBwQ7BSHBWHyQ5X1aaqxcHK5XdLoyTfeUTxb8ZQatAFG9XDYRqHQTiYGhetasojXCyoPoa5mfihdpqe48VXB",
  "key2": "4WyTxSckCLwpGcVHNzZKtmh2qxuEKvzyN8gRV4yehu7vFyFfWk6W5fcD6FX7m2C9hPepEzW2LKjDZCqaXtDp8egk",
  "key3": "5t61eJavVpGR1kCGVXkSMvzcV3HVyA3myF6eGZAxjtiKNgMmzZ8fPZCqGADffP3GnRvXMDfR7rUjtkCo9ajbNqdE",
  "key4": "jJckV45iTLsAbP8QQQVvRsLVYHuMTJvKBu17aAAqtSd2oM2cDmHfB9uymLzNrjQ4Qxbz4EvjJfNp7yKyBXq5Heg",
  "key5": "3K2ZLBuafFpRJZMWoqCAfUrJWHs7uhvSxyzmzd1ke73VSFWkbcou2pAEWJDhykgu8zyNR9EM2bUtxip5ewMJ7ug8",
  "key6": "4zhGzRV4j4BVGU8yscNjJzLR2oVBDhmDurhu3a1QMiZVHUJScxDCox4826r83dd1yu1yzFvKxN8LQcEdb5Q1LtsE",
  "key7": "3cq3fUQs4Fk2ESqDXa3fozscDT8ZrnRYnoxcic5n8AaXd73fT6dqarfd2shttdzhtKWZ33QqTvnRPjZwMRnCjkyF",
  "key8": "4FuWbWg2BujpmN4LJvhTPSTQe3CirXGQUokfoZMD5r4dMAZyPX6ZTS8SJJMseLtMDpqnxGtnrsMVXm4LARgqS6pw",
  "key9": "62zzYm1GzkyDNvxzksRJBi4XnxXt1z1PT4jH7j7RWiUg4id4qFd58ZzoFgJhUnPLtyDdPvqmMQqbVbjqCP4SRZnf",
  "key10": "4CGZQBXFXeU8VeiYKBiUt16zrBU2nbLDdBihkUXj5pPc3jXj33a9TdkTTznF29kUvRJW81LVtsGe9xGemDvMw2zZ",
  "key11": "3Tmb2WkYTpvURSZ4unfTamPpFJyeVfhprECYBAn2nQ7vTQBZSCfPAkKBa3Fti7sryAcX9RpRk55NaEsUckR6xsje",
  "key12": "3tbUUUZjqGMPZcjoq6vdpeV5NLmwvQd42q29JWKaykko5W1jAtJKNUUrr72Bi3W4ey3w54ChoE5GxQzwZj3zHvFs",
  "key13": "2oDkFVzVxXhRdAPVraMxw3nwKLAXVZvWxrZce5XZNV9d1zDPetpherXfdfKFPrbdhHA4qf9EiGnRZLUfoWKVVJc8",
  "key14": "3aLc23nuZULyYGcvZqBf9cSCEkK6puiHxXNjUujKYr3YkM3JxmByiAczUWAar9DA3H4ESHWZ7XAsc1HrHThF298Z",
  "key15": "4rsbsQCr3SqizAfNCxtqrJ9tP8UZnFYPkwg8SKP34mJZ19TrLBJ3hbNZmfH38fjgyfXuRJKVMFbM1nAHazFtkHxJ",
  "key16": "3WcsEkxhdaxNmDNxF9o5q9JNU1auPqm4ExkWmLYHQjcggHpF61n75bMyvjQNT46URxrSLo5PpqADi2Qh9fjkj7xu",
  "key17": "raZcNd95aiTaefMYH1xQBJkNbCE7UN8ywRBZg6JVarKWVwMZKzsireyfexyVQGGs2QUudd5Zus9dCJtmmcM6SjN",
  "key18": "Kp3qpuVP5hvNeq2LB4zngqjo4yx5qa9hp7QFTCNmm2no2V3iVLfNNJq48Z71H3G3mfMzT5C69Hn8KNVp67GgMmS",
  "key19": "4KSWzmXbHiSnPFn1Ke9QciT4BUBYd7xHkCD7ZRWx2dsaL87KEXZrpQ12ocohjtuRq1eCCmWrqcy5trPr3vFptSSa",
  "key20": "xGNjsb72HFLntsApejRchQwWR47vUQsaN8ZANejsKJE5FmYCyDwYVzHHabnBbsHoe7uoUybytASgbsQToo6JJgi",
  "key21": "2NySRRLdYKQiuZdCeKp7EFY7Xmv3SB281tC5anFLik4ReaDL9oU3TPTJQa8q7XbRSBnyk79dupTByf7Xc47rkhg8",
  "key22": "a83Ejx7mMN3W2K1qUY1ofowyyQ9XxvAm6AqWFSdB22mY4a3C2iWL7SjLDeqAkwqwTerrQein2L2DJbiSXWx3qp1",
  "key23": "4Ax5KLBJQS7fPHVhQB1LyvgxaGm1vLxi82tniGTkSZ9HtxPZH1L22Ne9QsWSQtvNfquthtE6qgPWZpZvPUh8BfpH",
  "key24": "5s6aRJga4qYhhCxMvd84eQjN7CkzB3pxaaJvcQcaK4eFnyqz8CdnFRzHk5Xdqua1Q4eWBZzKfio5YFiHwqHKfyjD",
  "key25": "LnMWQUXJo9KJP23KkkxKupFFGFX1hU7tvcUR6FWf3r8FasgUL9AeMNKnNHpn5p7p6skXfJ82pai6vgKjcBXHMMf",
  "key26": "3nWBd3ihVfeLCJX2DjKyU3qA15kNbWudBkNzNmXvrZQcquDfrbZ8kYQsFQgGnm9VYLu1mjgLjKgrBnLoSSxyopoE",
  "key27": "aWhJMwre65dZ54ebtRxH58Q63qRH44RiTNjN9bFaVzzUKQkhFufwa88Ky6xU5c9YwhNEvzA8ptPTrYt57bDfm2J",
  "key28": "2f7WQq8RAhdaXkXBR8JfAKoeZzyncRWSpMJXKp3X3G1LhenbCDK3mtZjgtAeDG6vkhTmsjbY2ryycr4yNjx4wGSG",
  "key29": "bEvCjC2U66UB2AU5fLCo46URzJx8KyuX2F7SJ7H7WU3JMnK5axN1dHFhx4Wr5BAUdJcApS5KZyjSjMDACcHztqU",
  "key30": "5Vh5RTBieGpT6nJE5zTVpdnKRXAoMebGkbUQnWus5a5TEZ1JtkoWibAWPu1QBwN3nMbWvvrDipY987n2jRM1awXm",
  "key31": "3uf73NNSwfvrzY18m5cHvWvS2VLo7BKUJiyupQDa9DUMivKAPhbTLuzwtGK7mcNZa2uRzAQkvrwwR8B8Kz3SFXpo",
  "key32": "2M4sbhk6R5ctjs4VyQcXihUoF5DcyUQHyHEA7T6R78d51gBTcmMxaVUy1JGC9YihZ3ppqRd3w1SUzafVw4tNmQrY",
  "key33": "4owDGhGLkQPy7SdJdxZfjnaHdwDwSTxqAtF5Sr1M19qZxznejAYEAh1GbaYZqRM6GdCEVCDqWqk5K4TDy7RdVMrT",
  "key34": "24mGFRHZT9kXB46AyyoZMVCi5cud8zT7sNahQvhQEqywd9md5MmSUvziWsx93mYdXztj95tgavCawkDQg3Y9GyUX",
  "key35": "5qALtGMu1TE6i44u98K6tjkXNiWQPT2BxS5NYSbtmAe3tPgcPkfZh238w6MsBCuoMDDg5nZ2rZt6QZ59LUWzVozB",
  "key36": "3mRJyUb9iEAB6iBXQX5ZdfawZUVWQkrSWordKYNPY1DiziKqzQZ9KDYV6cvyk9WmBix8NTVVTYo1QfpgBk5ZaVYB",
  "key37": "2BAroatv5xZwpPBgLjmo68xA2rAPgTvJfCUxr7Z55B2kj6u4C9ZVFwCDAJxwR4vCWvqiV6SWgMbT8Jvr38gp3gCZ"
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
