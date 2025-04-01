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
    "RcqSw4DAGgaBpdAYgJbx1J7LMLvhkyGmrGC7aLVa3GyqWaAaF5rab8AU3HhrzPkk9kENn8GsdHidX8xnWma7nVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51J5bzs5SFCKedo59nzbkmhtC9j7wzibQ6oL9XqDoFx3JbHZLG3sMsYW1xwLP34Vr6KihgaH8gRDSYADvN5V3JLR",
  "key1": "3tiaWtPrSjz6hSJTg3hfPXwJmQtB6fgMMjn9bSxvSToUPHz5ypYwEgEcekcXghLFiHha5YZFNypy3yvugR4nFad4",
  "key2": "TdbXe8S1Nikf3Q3qXZEjYtuU7CBpiLNanVZDMoXA4A2peZ1MgXa6XvrQv9hMqHWAR4UJVxTPjQHw7QoMtnaJQQz",
  "key3": "3BEfrVh6jjrDew5VjcEYdUYuWraCBRzWycDTzeGKnX1J1v9bLBazWiPReyfzf8gLdzwyvGRCHM8t4k1iqm2ueSNu",
  "key4": "4mtnCM1hHDfevnKpprxpzejGbbmv9C8GKzYPVbYZyTV2Bo14e3ghdT3boe1C2LpB1Pwcb8FeQzTew7Ubhzt4xYwX",
  "key5": "jYJGMVXqseRfqmyCKdMdPVzpp3STWmXDFkBXH9FPm3UzLXmeS99HqciTYAvJTY1Zk7mAHHUyDPF3W66tvnn1S79",
  "key6": "5S3y16pf8HK2JdJQHJVuPgR53cDVLAA7Pzf4Yna3w4P86aiWdrx4cN2J7W5JBPBwfX7NnVbfMFpy9RyDjvdpcroX",
  "key7": "5kiS38ax2gfEh5XhKHbByhg9gLDoo1mMSkshqLaf111SsuZkbNQaqbNQ4aAtLcVkkCt1hc9yPB3uq5tKBxSDxv6L",
  "key8": "3spMzygaJQLas2yL4kW69Ki5XyHVeLQw1NHfRYYAthoQHHTbHzD4NvHGQoFpNcSwKpeXZXfcvrm8vSW6MPGbXDiz",
  "key9": "2SJPubWsxGgKj2zo8WxsWkiNXj8xSvgYtWqCmxkZTviQ1DGrPqYDx5LmfJQT8mCYBQUuUsSsuUz8qpzdCx2o9vQP",
  "key10": "5bCFhibdR4ukEHVkoq11oHLWGdecMT2b8oeQGMF2siD1rcPN35KHzSQ5Zm3akHwhLsUn8VHXB8corXA1w8zao6ke",
  "key11": "5z4dZ18PeTi12cXbUcjrSg2gfB3RfPCTvLoGHV3zMAwp95smdXF82uKGEwQeFmt1n2HtsNgJKdBZPHqyv28VQKXz",
  "key12": "3jaHnsuis94MK8ABdrxmEDamRi8Ba7vCsuqmA3d3696svw1b1T9LtyByKMdtLvhQDx8WHPScXvCGfXx8nAuMu3wS",
  "key13": "3CAN4FdbZVWkkJ9JWa6a1nA6dq4wRA9pqf5Kxt6hueyrEWdAef17drrQufx8mNN2o9kgiUv5jwHETwfqE1CzPfzt",
  "key14": "4gerAA6qoCSv8ywAjpNG2jd9RKZCV3Ajm1cDD42f585VNDfXHXUpTqgc1AaXccNyNsmvTHgMXfTDwnJyaAAfniBQ",
  "key15": "3C9G1X93qaCdnQEsUGVUeeRFaur5R6rbpnGWnpKdUoRvvUEubQH4rNyeb3tBKUEzyLuVAeSk9cSz92AZbdTg5Hp1",
  "key16": "QPsFknifGnR4QnbSFcuLUqR8RbqbG7AfoQiofTumNfmcMsnittMqhupca82cxRKdRRikH7wFcoxddy7zuHdyw6S",
  "key17": "ZCUcDcgbrg1LuRNAqCQdo5Q7ZFAq1Ct68BS1aqCKgMHqxCcdFuyLmwMaQL4hR6cWXjXpiP53ZpyyaQeo9rFhB8w",
  "key18": "39jHvN4FQNYrRDJ4R4yT1Gt3N2dAsGRepGPYBJQ9MxnpEbhzqMth9YQJ8K3Ma6faKzx7xyCFnVtJwZhwdPv9YEJa",
  "key19": "2pRfYqATJLgAyGtYP3Rhf6pPpjUP13hBebHGCAXqU1kvPd5vy2fLim7XqEWDypvN9jraYJm71TTTACpCmwMofF4p",
  "key20": "WgpdGJASC6s62ZDtroaKTLm9r3f1vVF31qiXHDSu4xiRKXRyjqSHzUfNSrzDDKYEeSd1PWdoUhq3GVmaowLVSbo",
  "key21": "2bxwAtN1UuyuNNKTcfG5mwFAze9mriiwMaQFm8X2kQJxpUUahZynYe12xVPNgcCNeMST2YFXATAUcKPybqmDUuSx",
  "key22": "3QeM12TJHYeZ1gY6YGz2rjWjS9yrA6as2juWEnqNF23s3TgXzus5YL56NjQHAnANKdJAZvN4Yp7QxqcoP1oNyeDZ",
  "key23": "5Hs4TFFHDZGS6jyeWqMF4yvDxyCU3yyukvM7qxhFVqVjnweuwosKuRhCu5tnjdqLPFzeZrt13KAFK649AvhXhPBh",
  "key24": "kCpzUuqunossjj6MBuYADjMmyuBpoKX9es3LitbB5VnywxVam1VdsW7BLtZX5kF3DLHQQCfvPQp9xyhRtZ81ux4",
  "key25": "4SnL7qn5wRfFKFRtJDWsPXSfHk7VEU4woWhM5jFQjibcQBFbxDTwa2zRMsyARtGAkqXhB19a6PuqV5iWXhiB9FTA",
  "key26": "2R7QKdCQ5TLXrME1XPLSxsE9YBDnX7yqMwVABizq1pEpJDBcL6vq9mPjWnXd8sSCqzYjQxwoMQYQAWwzEtPKqNNL",
  "key27": "4kSqHG8xptJPYqGnPpSNcyXAF7498dn5q2Y3Q6kCncjebJgkp9cAZYU6YHzipzZMVepF2i4Dig8bEXqHvJj8Aiko",
  "key28": "5SHdG44WX6LG9QQKKhYq6ncRGCW2JSjxtZhGzu6usjcGU4VLBQjUSsm5u5QqeN2hdMx7XxvNQQw2bXRvDkgW4AbE",
  "key29": "UoexAF3eUX8uradoxrmTiQSrxKrAgKuDrQ1CEzjRq4W6434UA66D77aWo49v9NMTPRrguw7Hg5hqbmjZWRwpTzu",
  "key30": "3LzJLCC2CRbhAti5cNJRzhEq8DFTWeArayChGPC5MNB13J5UHpNT9YSnEkiPuEmfaoaagGTBxo1aULB94z9QTM3F",
  "key31": "4JmmNsCjLr4syMtmi6UmwEtbo69j6DWerzjk2aSrQK3woHB7mT29PwXSZgpasTQaRX9SepBXQwcsPGipecdiiwjS",
  "key32": "tL3vsZbHwfZQtTzNuC5ExwnYAd1WVHysbKxozRut7hHRiXpX5PFt2ePVcBGNjNdDqgf7LLTWekWMxxppaUkeDfE",
  "key33": "4iQBKnz7iLJdGHhXJwRbs5cWcLWAq5UPMBECXM6ZqvC6Ymd7EgLMcgeUFRLNMYH51YzAFThc2PPKb43YxjgzFqmV",
  "key34": "4rwz3kJrCzbiLsqC7c8ZR6J3Hk3MH9ZjFvbPZRxKEVPsBhtcmkKr5xfBmiXumqgikjYqjBQeQoQymhRvZQokCMZJ",
  "key35": "M9L215GrBiEQDAT3zfhn8xcEHaNn8fGnGqcMgrRdHfubWYuAx1zrZGW6YkioxRizXT1dycTWkSc5xVA9r7Behvt",
  "key36": "5Lp8KU2ZQgoGzDFbfJrmWpbAHgHk4PWznTweWqsXXdRMdnCqeYAbngoMjBe8fs4TesgCoKs7s64AqgDoEk8PKcGK",
  "key37": "4Ur9Jzpy3Qiag9eAaXrAzkoS5DpXTC8ZAGL67QXmL1NTCT6qcLR7SNpPpTv5vpBqtKx3Fi6yx72CgRPYhv5AbVWh",
  "key38": "5U4KqcNC556bNoC5cQwSFi9UaTLi2AZXVFUK7jhvhmS1M32KZpE1LrFCazTv3a3PEN2fteeTVJUsgz2fCutKa6Ws",
  "key39": "39gChL4eCuj6iZC5WqTDzseb4XteQG3BCwtbp1fFrytCUajLTXKgrsM6iKW4a3zYQH7RojHZUvX2dkCrqM6b371K",
  "key40": "65JkJokSq53SWWpKxH6rBXWj73kG5fWZiWiRCJEFN1oQ31UGccSn8fxb9LmRYZkFmjBCRWkgJuSLEZuMDMh7gqfc",
  "key41": "1yGhgHSqnjstoWXSgNBXC5XnHdEMrRnXpm6SChoKw1UpYMxZZwYWeo1epu4bWGiMJrgiJrhYJNKLi2ie8GhCeQP",
  "key42": "GS1tYN1NrLmME8CCPtrCuvcLBhhPmde6Gbt5nomDnJHzAG6DKW9tm5ryVkSUQ5Q1PpkVN6d2sEfRAPjzY61yhvo",
  "key43": "61sfEsRiaRGzxTgzKR8QJNSeqoZUEBN9xoim8cSrzf8eMeJtMWzGgeUGim1S1Tzh4sDJqe4ubLeHkAAtXitW45vo",
  "key44": "4Pe3YF6cVLRv4rkRPjByvZ3umrWUW1Ki4QVnpa89U6JxFQ21UaRY4R59M3k7wX9Nbmadm5ruUuAYNFugKTrnAT2B",
  "key45": "q8fWMZX9Aezj7yGJYA28PgfeXa2ggBB8QTwhMpExHiDywTkEjjag6GY2gbs1XqKGzZxx6m3Uyxa96tqfqMH9iEc",
  "key46": "5E8NV24RLx34KUYfNfyyQpkcYtCV5zri4cPCXmVbin2Ktk3mh3ZZczbsEUgfZG5hFNhqYh7wQVYaDWmTHbJoBYGg"
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
