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
    "3XNcSSGCvhcztJBATcmqShYKXo9PMeKrU2FW737u3CdPT93cDuckKAvC56PVCr75YXAZZzg1zv3g4BchDUxbiDam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rVaPHZp9tJ1Mgo6N919t3vBzDurJ5sKeb5BmbmrZEWXGeCN2QHVNw8onvL8Yx2icXYgBktg8e1a16q7suXLo91c",
  "key1": "311s8rdXVgwbmoWycPZkZ3VCwXZgs2T3buobbcjrkuwmY7sEheCe4ExvHnyFUNf16bvEScswuQ71BXYtHUaN8nDG",
  "key2": "2ExUt3WHtvKeCmNFdBpUBeQAepdPeh1qYzUSGornp6W328ixvVkGBnLfDutk7UBH1PZof8AVTCq29FpoNngfk3ST",
  "key3": "M5PaaH7GEowgEp8uEjZxZThezvqmrexhEi3yF5cQVo6gJDKgdUDQsKi1KUXQMdUJ744aMbZjedDrxNP1U1YMVQk",
  "key4": "FdrWw8YfWWXtGkNySVcy3eYTJyJGH6h8bMNjEqP1Srjjxuad68D17JZJLjhyt9T2RPSe98bemvnchCzecyU5pHX",
  "key5": "2UtiEU6DFuFcVvUtWATToUJyzNGJPbvmJyTG6mWko2p68n84PV5o2qU2HbQBpkukUiwxg2zKLFoVP4Ynv2YmRc7Z",
  "key6": "3MZTLdsuGYAau1SdoUadfmkiEDw3eLsMKoCJB7skp2HFhdfvKxexsuU8uRZwYbvrokuDytmEsyDPcfHezgQPdqJG",
  "key7": "3Nzthrz5Cin78MCEac7SNA43wVTRr3gKX41UxY7y7Jvsy6K6wRr5VhKj2sHAJW2Ktvc2sCkXpgHnECp1vtanFFvz",
  "key8": "2LdDi7KmpkhiHk2UxvJpSam3K44cuM9Vxt6wURNrEVRHpVzi25auBZyLL61LiZEYz8pbpADqptSbf3w8XLSyyWQK",
  "key9": "3iHuzCzr3Fprx48jBPx7fGYZEU42QM9NFj5akGvuCbUXdMKkGgZNweobXvjZWvfsFv2rUXn3fyXiLqr4MJ1LAf7x",
  "key10": "3FpBSEPTGAbsMhaB4Jz14UG3ExSBjxb1AZxvwM124PohLRt9n69fhogeTjdWFtkhvB9myYwCGFWSvodWLZvsTxDk",
  "key11": "uZ15E1Wky4zsGxEtUgpAFpX7AVgbzGUnnn8EkLgKS48ueK7SoD2sz8SxDcDjSkyfZmNf44q9SWJyFRaaCPf12iR",
  "key12": "4zzeEjfxuBjWADfphVrNDNzYb78t3nE9RzTtRYD4JaA6ptkjZAf19hEbtCp7ttxT2eA1DrxnkMxNGsd4n8FaQi5C",
  "key13": "5LLdcXfaXdH94tipZUzf2fhEg7eqiH36YBM4RPEAh37e88hQTFiDoNjA9uTvzoH87kCf7amr1ozyC1o8QZ2g9S13",
  "key14": "5N7132XdGYjUbfpEZweakVHWm7aT86anMuP3PvA3NBqPJi8VrBjwC19TEbdRmqAtMb2GbaNR3vUkgvxdKAYkdNwQ",
  "key15": "2b6LNs4o4qxmYLEg4GMdqmWG9sj1zKJGXABzMYUgub8yUnDQ4pBdfEBs6aaHavcok5yJ7iAWRbBuoVFk1UaMC6nd",
  "key16": "5z6EY9CFykuzXiJGYG9RQcHzbGGrBLDei6HYvhbP4GRENNhX9ire5SEXsqCoyNJv3BwVxJWK6ZAs1wEw66junUcX",
  "key17": "2VZkAyfYZ5omcyW9TsqMz9ZivFm9xnXFZzgz1FnhAFSCCg87ki3M8aCftN8NUwhAWqQSdbJAmrF58D1PdUpGXmaM",
  "key18": "3qDpstC7ETnhiG8YEQ3hk5Jf2TYNPFWrT8ULvg2JXHr8rgPVcj4uqgeytgWTY5uXwi2jJUdFhpyPLvriozm2RsmQ",
  "key19": "42WTREQ6XkvRmezVqXLFP76YAwK98g84DTgPz6nE1iS6KN7pFbPXkQwEoih52DhACmf85Lzu4qmZabReCfuedFJi",
  "key20": "3TssmZ28gGiuSdneWTeMsQQw8mZxWYQHBGMDSKuC9o7H7LSvhGRxfudn4T3GWfEuJtW7poS6znURx2DNRfyf5R56",
  "key21": "5p4jcqotShwMFLQKvy8dXGrMehWpqJoWXEaoDB9ThQ28UEFEbYAaPqdQrvWRZjjQd1ys9h6ybBLhaPGoZh9J9McS",
  "key22": "aiWLw79eDbUAa8UkxoMUnBV13tarMnMQUREZT5Ujr6dCw5fusw8dfRjcMc9SCtaXzZS4WYhxJpaFD8DHbYNz865",
  "key23": "3TjRsQN5YMfMzGufwYFdVu3zrg9fpUQW95Ugo6EjNok8hNaZ2WqTsvzeeTZqS4Swd2GLMXzZcHXj9Cjkkh4TpMyW",
  "key24": "2qSC95WuuATXkKe5FKmMJp3QzgnSy2j51d9ifUgCU3zwpFPUkGP4mWmNHnnwVoXdtLJ9bqDTDnTwJvQZxWWBPg3X",
  "key25": "4ZvJJmiNMzJWKxvyuV9aUqBaccXsM3c6BvyEtZxSDKWdY79zW381YpJHd4BTAHehYoG7dzFzeN198iR2pxysb37Y",
  "key26": "umgKVbNHbqKqqRvLPfW4qAWU7ZhZP6nMRGh35PBoeuRbhQPtVMeC8Neai1kFYggXbTENBrg32z7Z2YazKQbFfbm",
  "key27": "U2ThEAJLJxAmDktLef94zh1yf6x9cHHXLFHrD9zcFTD6y3ZxxHuRDKjyLPVBpLGgUCZtEEoNJXXQxCJ6Mw3GWCG",
  "key28": "2who6AGtujfjiroVx8raQEuuRJdptHX5EtxFmzuXtjHBuxk6tMhV1aCRf6fV5zJYTppKzujiW2LQYp1jkE1z22VB",
  "key29": "4HXGpGCU5foFDqtJEkevAnRitVUtMDToYGWebcQ1SBKdiXLXvuf48DTMyTsFXbJaELBhrteeVyNyrkog2nrVkAj",
  "key30": "3mkSh42cabDFs9qHoGqwF4Sw3hZS8ufzjU9K9sd2VsCr5nfQF3oPrSxz2V1fSbYY7qQQk7m1hqX9K2DkK1Rqpu7k",
  "key31": "5n7zzDCDTVHhi6XkebSm9c6aYg4X82Bja9KpeX3tMhMUPPvy3ZvGKXa4iXNeXJn7QKBYERdc8cqnPUpkfij8u8zN",
  "key32": "28vLBfvJNjTjXShbTZBpsZHQD7QRAzuqPqphvX9A7qXsze7rDJQpQae1FnM1p4HRUrVQBV3Yp4jopCokRkZqbyTH",
  "key33": "4WKj7Nqc9xhNuKUMQEBZ1Ltv4KfZ6wpCzhrs673yXZiahXmgYGsuvPY8h1ADqFb5Z7aYSwUEB17nKmVsDqMrgtmP",
  "key34": "5rXcLUpcJ3Mqic3vzVGsgopmzkNfxefixjU6bPLMxDLbhBSeWL6bz2Fmqyfi4wWTHS4X9rXqVEYeR4UUeTLBJBh4",
  "key35": "5zAhCg7zGWzHDWWxcpSdBo1QgDztrrriJ9zTEZdSpLqA2fSZRb6i1fz3QUQNv7NBpsKDpeBmCNDuGy5JCpd7vGxj",
  "key36": "kZvF1UJFQvSGWC6LeRA5TYjLdDJ6MLFKNyWzTfsanLjdi2cCMNovBEFqHp6ZCodrPqaALwaEFQEzJHyS5YgL7EG",
  "key37": "fWBPkA1QUAKkstXV6VXHMyLMiGfSoaJB2s6FWgASxJLDAdJ4YqXqezp6sYvdBW5scZADrsxLnA8z3XPosP2kAJX",
  "key38": "3FkgFjaN95pHVBt3YLrqVdLKfccAZqQXxSfdTGMLDD3jGn9HgafvCDvavMRySfTTZs3FZXNtYeUjwSrtmCR38Xg3",
  "key39": "3Q44YjrMRFnRzFpBwDXjVaSoNmtq2qiX4i5GhzZASUkYpLcPhzLj1mLzz7Z8xieKC9GkNaus6dgCpJ4PE28Pqme4",
  "key40": "5XcvaopfF2YLyTUuoPoU8hniJFSahPhAWemYus5BBXFJu2QN5ecEqzHNPU41sPjnsmcKoDuCs8gd8N3v5mP3GJhf",
  "key41": "2e9nC7ZewhRPHdrDq6sZTviSi1SpzDXz4hjCfFCi49NCLT6sU1bAguNjfxPwi7JCWqJSgMS2MvviCyTckA94Auyd",
  "key42": "JbZtWSwv1nTwDPgFkAAfJYsu81YYMs15YdAJHsSWwH15sLgQZAnzpDw2wdeEfCb65zwnhH68YqdENcBpr9cgY7P",
  "key43": "2FELumdj7vHuknAyV9U5CHFJPoKf2bWH5113zXNdjxxXk8doLp6qjxp6muX5bxcNnTqYuvDifY6FzbSwB1PZxESQ",
  "key44": "5sYWiZMzd4ntomev2UPkVhwwJR3kxHFTmcmujHwjsiQzzYcjn5aX5WrzVNNc7odbDopic4R7ExeMz8s4uXYfJbr8"
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
