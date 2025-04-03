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
    "21rUHxEUGWYs7ZmWigoqDKPpgReLRgEdS3G8QsDayGHkHskBiquQ8K2oQQjczPNW1Z751uorSGYH6ry6RYSY1hm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zusWSfSzGiCQ7D2ZywcCjEneWzDG6AFU5nRrWVFjLFSbhibkKMns1noVmN32mfRbaEJpBcRAXwbroGQT67i4nHZ",
  "key1": "5U8TThRAwGNvAh2v5nGjn4Ng2E49fssKXF27oZgTtqHUMjPszeFdtpqVqP2u1o8AEKvL5frMMueVcN1M88EB5ow1",
  "key2": "33eky3AUTaoGZfJ1u9KvH2HvJvsirx7BSeSGABybcofWEaLDsundoiR21EaEM2rPCu723Njf1GJ7TT6v7EtuL4KY",
  "key3": "2crstvpEHz94q4WFe7BRQjtXAScoadWs8pW2anCvBCERYd7HLCSQsWzjbUm4Gr1hbbpohDUXtMzAWNGKGUCXt13h",
  "key4": "3CRmu5VYfkpwzDqo6n5QNsr5VL6hDdheAo8LFHY9Q9jpGs5VpYiYMDtzjVDChTRUyEV8XaLKkRsSv5HqejnFwM8q",
  "key5": "2aXWvRUqVR7N71iZkUMFdEAfnXGeB2epwngP2AYdxCpNPPS6b94hJUZhqZZGBU4zL4QSVVayXJxCSjqRdAueRVfq",
  "key6": "2xKJqZiiTqys7FrAtLx7wh6Fma35bLM1GCx22js5cZVSKQxFhr8Duqfm53VG1XAAWdrXsVUJX8ceVEAfoazoSVGB",
  "key7": "4LJCpTFwPVJyEYi1VgLh9xXkBtcUoydGDVFPV8jKx2voQE7BMvH7HJ3mk6cm3s1bQToMThgTvbtxaZemjJyX9UUf",
  "key8": "5e7QPQo39jcUgL2nt3V4VrfbQY82tL1mynmbYrCBeohazaWRGLS38pKHKfXtqHmvi8DuNTETYKUnd22mQf4AixrP",
  "key9": "r7HeTiaYzXJ8ykmfwo9qSpMxP1gy42AygMHy9eQYwWJSqA2hANBLy9yrHbQ8DC9aHwY6v23r4jyZ1VPiKyHiaG3",
  "key10": "5FnAVBN5M8cU7bsq6TK1wfi7zaiZNjwm2mrnSiRVfGssb33jHBNUfvqbE4pQqr1WuaYJp43dNkZAbDaQiw1zmBvy",
  "key11": "3XtzCt6snPv3iNJtttdMPgtAidnFt5JxfBqE94AwSEMradgsj1qAmrLYLrHSKG6gyQYSATUXAwip1xSCecyTVMwh",
  "key12": "4comBSDRb4azoP1y4kwy3rDZZuATbNmCkxskTMASYncTPPmnFdHLuxri45VjYuBy4EMy2FMm1DqnVTPKpzn1WWKN",
  "key13": "3YmemkJYfeG4PvYTeUg83vKG5cnMVBryB9mz9sTQjfv1uszU73x4VDZtHBN4ZvN7TeuMwpTTzLgo7PH5iH6479WW",
  "key14": "3TTKhxDBoYGTKD7kUuR2dfBFDkjzLF6mBuzaCniHpXMUmrc18nHfLN38i3YuSAWqyiJYfyCaHPfdVQtYn1gmuThQ",
  "key15": "4JwzUE6b2KMEzpdLzAdyPRiQdGB8ATqd7VuWgKmCKh6K7hyP6Kt3jz2GVvS5eeLgXYQ1vftUtzTu1nTmyJgkFpFk",
  "key16": "5YhzfiVT4ets3EXWKLqPffNJvVXyxEY2d3a1USkPGabydCuqBh1TP56JskXoyGHGVQyWXi4kaFzWVJPcd7HiEbr9",
  "key17": "2QBHiy1Usv4QqpQNGczi4Lk5aSWU7DtoVq6fwq7jn7u4NXrRqDm67GELQojwFRm5RJ3P68wCX3wjVotypoNxRw4B",
  "key18": "4waVqBfu5LaVN5af4a4HbrDmCPMVJ8srUZgh5kf4rEMDdjG4hNJmmrvRCAdnLJF6KrAT3P7g2roLphs9t7JywMY9",
  "key19": "66Kmdu2wsNwoTrDNUtgerahocFDXSLup7H5iGPYutpZWFJWKC66gqyNNJQasq7HyovxpKQmaxmPb8NzmbeTssapF",
  "key20": "4fRcQHGhYysaPkzZ9drhuFHMF6rzhW5pV6dCzF7zhFhqvrWQ37UAYH7xyt6FGtwpHjUvYuCCjPRdk93XV3AyWDSZ",
  "key21": "2Lk69zMsmhMJuyDbT2WCbRw7VdKY9ex3VbambzcYpETU87ugGQff54NW2fybc1UwMVLyLJXEbB9KSfD9gd4NRdPp",
  "key22": "za5j2kp47TNKXx5XaLE3VRdDEEd7UtzDxpzCUbQN2EY43LRjdsHRwhQJxpttkfLp7wQQFJP915dcsecmmHKq14e",
  "key23": "srRmcUgXpS8RG92mpgmwh49RjA8XHDuANCEifvxevd492TtcaUu595jWuhT98j4QuUZ3SjwdCQsELZj7SFGthaB",
  "key24": "3GgRPvsNKVW6XWWFc1cWnS32p3K6pYFqXkZfhgZk4PZvVFVnsRejxQ6U4VQE4jdREcxdwVCbiaCT2dD1BYijJGw8",
  "key25": "UH73JpKPYTy43zixNzcq6VNFpFJr9umi7ownEf6C6aAVdYjga4nCU7PE2EQhQLLAbUaJV7Euyfk1E1jwiDJZS67",
  "key26": "3wsrczMTNsZKugKisApGxphA8UvJvXq6TuQFQQUJtMLtQCaTWVXoCgKDcZRsNVWNLEuKe1xDPn1yhoZ61qo29QNi",
  "key27": "5KBV1vnSWkg3AsEsCBCXRfWHHJWoFzim87mS8KUfDv86ATvQvNhCCVjkHPdzMXj4Qyu3g6WEL6CTzP47mW65wKS6",
  "key28": "38cJ28aZDvdg5KREbJ6Nez23DubfsC5TkUqPShbt46QA71qBuSaZ3pt8mzt2881F8e3kT4qjXiGAKBM1VWv5YWJa",
  "key29": "UsUCfhuomuwmvAFpVqMguRskz62MXYDy5zMcybQiyi41ZnnppHsRJqpcydGt3j3LwynQ69j9nfWL7fuoU4gHx1D",
  "key30": "24S39Kdpwf2vYL8FKH9m14GjG4iixCSLyqYVTsFjdhwaLnkAPaKBU6eLDpMJvHFbUdq7Hg9pxKZMUAUzSYJ2X2F1",
  "key31": "4QpEjj5ctukhSwowriQKWjY3wWRh4uhnrt616QDKLaoRGhotqZi6FWVNHJrRxLmyQXZNJ7sqJNW49yFUn7vwUfu5",
  "key32": "4YuB7svgFRwmQWVKUCno4Pn9VSRaFC6xSPqWUUqkLDsF78unKofuxnF98sTRn9AbGhBkxRczFPX4CbGm1JZrMGDv",
  "key33": "3zEfbB2HKKJ8n94t1yGTX75ZdYrEJxutAQGqPqCBXAEbYbRGkXA1MK27jRJWPCgc4oTp9s2AAgzNfRgyWKVEvQA7",
  "key34": "2gp3qgp4cWF85u4tDChhzrvCkwoVL8qRonEFdUcT1JV9Pywv6UHZ9dw6zmhKj3oXZrU6xJbzMubLgugciXT52joH",
  "key35": "66vQzxpbpPS4NDEigT3s6YFBnCGRcvmRtx9V6WXK3vWU4MYFnEo95qsGncqNBprMqwMHvPWX84f8U82KQVwV6ahK",
  "key36": "28z9V3pm4EnpJDytzc6RcczHh1PcWTcLGaiKzUb7EuyP99tLGvuw3uTVQbaLTfkjcv7cNEYBYHSU4wbqiB7CeYbs",
  "key37": "2oJogVztRr5VMMVCVc5PmWFMioEnp7qGnYvYvVP4h6Pr8diHZLeHdpET6XPo4x4W8aZdKAbRvCiZ1fqv9i3fauCX",
  "key38": "QtuEB8aU2SnzxWZ7pKcwatxHv1fTHnivkWcffymLzYVrBT2y6KrBe5LWDnyUPSneveZSVsYMNmY2itJWc2CtxLL",
  "key39": "48WQpNbZzfsWfkfKstD49YMG9r4CR8vUc9w36KnZhEYjPqLiPQERNdhqqZDBy14ML3vwjve22bERd1SCrYUnogQi",
  "key40": "2XgDrrwq8XSyf2FMJaBVHgdsJaBJhKihy7NWnjVHWW8kUyKh2io3o8ZzHgXqPdFMsEYmMREuVmBHoePqi4kVzZPF",
  "key41": "h3H1rWaZnA3J5RFxfhjPdYP5D6VXuS53FUTJGqWjcRjbH28wBCYdKbaEH1PKbBSiA3fvDynuRvTJNTt6nCM9qT6",
  "key42": "3xw8QL19RZpDD1SthEzih6qgNu3MLpTEb9WxmA1RVDF5MDazFsaXxpAy7CZLUSP2eM6J4g6GVm5VdJwqPviXeTyd"
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
