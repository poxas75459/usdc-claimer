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
    "54R5tciSrrhCZjibSTdghwxZFuNfe7SX8ty9MfjxSoHQpAu3piAXkp2UtpaLd4Mgtw9HsBptkB2v7eJ22gMKFm4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "agZ1r16jNTBS4CSPaAGgWRGBrDku9mc8dBo9m78ahp1A7csnYw1Xs3AT9adQuH4hunBUJz9ZHrYfxFxpoed7fCN",
  "key1": "2dUfhKCNLTTfq96U87dFtYkQUGYzMhxGX3nqhM2fgnijNnAZB5usdQ6CqVCrMZS3vPGMefaKjGXZAxvQS8tGGmTv",
  "key2": "2qGrACJ4hB9ZYpwTTwDHVssdDSwpLY4z8RoYRMNG4FcRVJy1zmMmsNTv6kgGKVL6X8FaMJua7hkda3qH5PrHJuC3",
  "key3": "56cruWCXwjUbjG6HpAUTkroHYSDKgwEGNWHpYa6UPoXZNayFtz2EYLE3tcLr1BaqpT7sSWsXtkJsHwguu679emZ2",
  "key4": "3cNxgz35SC9fJTujQKTM48oi5N3Rx2hdf1pfqR3p7YcqiruwN12v2ZpxDdbv375yNLf3mcWitQsrLfuwsgULYTD6",
  "key5": "34cCcTAsxzd4uuSwR7yLN9bS14PTLtLrZjS4zSXtBM7mfhiMMmaj94ZhH3kCTi6WPrUWvZPUhGfkAi2gnrWsKp4E",
  "key6": "4eEZB8U3aXJyh3sRaWd9Hvhqj91Kso23LCciugtDhtUtLCJgcuvaEvUfYQG6ECf3qvUFTBNmKATyNUkpbJRKXcyk",
  "key7": "5NCiUGJuMejraM4584eytQuvzmn5AxXvCrUfMpZv4wYURtwBwh2Qhzw6gQjKuCtNPtfEQZ3gJ7ZnwRURBvGRwWVh",
  "key8": "2gmZSmJ4xqffeLu2Wqc3XduQ49qTvwpKBEjkW7w8a5hMt5ETQGXFK7zhci92vhJ4nZ3xNRYAhSYERY9RxP9yyXbd",
  "key9": "3UBJQHyRx22DqcqX9E1hUAsDEhxXYRHgZcuRyiPFk7ahpEyoxxGg14ssK2ECKfN1Ap4Rs6kGWvJYkZtwLePuvHXD",
  "key10": "5ugSSJVcMSkAZuQgZ2KuQ59nXuUoNi7krd5oeTFu5225LRS1hNkFMfttjGqHQR7QNqXcXRzbT3zwKrL2WM1iHCur",
  "key11": "3oNfwJxRwfPWQPbzrThmQKp7FMCWcR93UMoxwkHnMWBRLBvViDsLT2WUTvuNUQmysGHyR3yT1UeqoxsB1DpSGq3Q",
  "key12": "3HMgWWWgo6kAym8MbGKF7F2k7cD9uCWXQ1Muk5uPxAC7T3vSSGeGUAEumimghV4ZGsVNEqm7a36yLiCQCknuX74E",
  "key13": "3X1vK6XHvQZ3QsDzPERy3HysWxDxAKzwcM24D3d6BPFZYoMmqQ8YTXtRQtRi4do9yGsp4pwxf8cXPDm2Bf9P38Lo",
  "key14": "3iNyMQ35pMNKRnTGH9SBtWZ9LaRUrsJAnwSVdywYQnvL52EXzXyc7ocfRYJ4ajLRNhyYeJ7LBMU9pAptDgVHTPm7",
  "key15": "2gPytXZLQV4tT9D3P9FjeE6jkuZVAz9r9b5gK7TxQb7A2WSmGZ4KA3YvMnxV5ipNEJxdy4JdddKvqKT4yTTGt1VQ",
  "key16": "4jd2runHXMbQBa367zoRz436aoiTyWHsUBLcN3txKYk7C5M6wd3xCorDfox9LRxr5DF5MFbc2Ks1gvMqfzhLrdfo",
  "key17": "gMuQqQ5axsArVzz3rogJGgGXQpmo8Moyq51r5wgcXbJUzA1oWmzTcrBLYoqaZSJAH3NV7k9cqGRswGQwYQsgbsm",
  "key18": "2NvgcbDmxXrkkWxDpQr2GyeqH7nsQPQBYLZDSfbTf1c3Bj4j3qczjbGKGmqFinjsxmYQytzmA9kPUNMMwrfGpAnj",
  "key19": "4DJKujQG7sduXdpii445jCBqMqN8WNmEjj6Y23HBooEU3BaCqstMLiS4rQRdA2UW5mRGDw4QcQEmv37J35dYs66E",
  "key20": "37N1eiNS9y2W8H3df1WMjb1Q8KvnMzzayEMWKuQa9EnjtT58DAF5LoDQAfsHLPwpVEZV6eJ7QevtArsBcS3irq4S",
  "key21": "4B3SD7ePUMhrixgypk5Zmu4CE9NoMEgX4WUEk3zkePXvtAMvakgGwxYujEWNAU32Qyji97LVS8kqH9pMFbvVQzJ7",
  "key22": "48KSHPcfvD5AzSxeBrDpFxSvzAvuxLDuidbDXXknrqtCSSde5HgBfL3a51yXXaaurCE8ZwNgyCjtZUVQwsejqGM4",
  "key23": "3pRngj5zYnm6B535PpBpU5HJkec1nTes35qEm7AQFn2n1oDCqx46ngibwFqBFmZioPuxiKesKYNqoE6hf6J6oABy",
  "key24": "37AbjRQkqEwb6cN6PnvZ97HxctCEBvoHCoBm5mHJY7S3kTxm6wFTMNYCGzBGyKVAjZD6PPJgqaqkfnjhTL5GTY1M",
  "key25": "37tD2YnMyggQmqxa7WCXYEdwkKfcq7pvpuEYT7y8BASJJKrYGbjaDLPD944yGhEDWJvTDxXHwSYJqSYsa64ZkQVN",
  "key26": "R9SLp7Y5eFANo3zFsDqAqFftvCnY9xb1gWYc7VTvxSzSKATJissPjNLuSnFnwr8UVNRA5vhGYVY9RDM2DcfVuLs",
  "key27": "1QyyNfZHApsj7oEjBM8nTdGQBfsxHZJtrR71p1DZ1ninrWEKNkqp6qeMEysjHsCAWForF1W3HeaSe8DCPpRw8BM",
  "key28": "39J5JDh7hCEakeePP227BCiiachj8dxDbnVedgLrQQ159FmK7gL65bWR3D7LLPrMUrS93bu8qG1NGf8zHswYtfxb",
  "key29": "3gnRGCK75syec2KK36Rkg3NpXY3tcsqctkJq1oe2NaDQEq3mZUdk3A42JxjBC1MijRkdC4czMv91q2gACytYdiW5",
  "key30": "jkccE6FascVXzjCPyEpu3MRvBFVm5yHGoZYc3VkWVw73RbqYPbffTmgUf4U6bfxxAGPRSegGDbanQ1nAyiUD7oY",
  "key31": "2e19Lt1X6To5WnyWy4RAj7Dm4uZLPJYtVHer7JDEgo1kMavXhzfBaZfmnVXhGKXcHQpFy8JrzJ8xF4vYQBshHWCG",
  "key32": "2bZjJJhEDAtAu6dDe5ykFbhVX1Jsxo2eWGGUhZjU8pE76yQHmzpMMb8rNneEaN5bwBoBQhxiH9t5tFcDFqrEGtVh",
  "key33": "2i9s1xDDfRjnYqhLvAZX5mH7tQ9E2r99SUMKLrJbVafUZoikwcLbdpNA8pXvM3BV3hYUw4KjtTDAUHpJrF1kf2yf",
  "key34": "3f2pKSH3Xbh5VRbQjZUTnuadXo1RSyHKAYJArgxJsuhUnW3ZWUauduSVhfE27c1Nkiqr2DQVJggUrkhEpiLYKgmb",
  "key35": "3Xaa7jubV2Xtt9CxSQD2YsCHGxkrpCKxXURc3NLUKop9mdZExmnTQyaJnfG9DmKsm1UE1Mhrpx7M3uXJJzFXx3g2",
  "key36": "2VNAkGy3E9pkWmaWDZBYZWrqaHBsKeSYDWu23Xp5sYvKRTApJQq6gjA6XjPCfkzH4soiZoQ1sLSJzunQbGfqHSCM",
  "key37": "2GP5Krckix7nwYHb1Z69XA85side4LPMABySmkK77aUhGw9viCUddgagjs5SbV7g88ocQwLjf14SgN2oqH8APU1L",
  "key38": "4azYyfetqV48XGWt6Qe8T3HEuKbkNu7wczdyXNwxZCEPJLbuZvmwD6rvgHF7DmaamrcrmijwgXfPtzEvLpCCZPEA",
  "key39": "4gHvozz3jVF5pYr45TEmqduAzE8fKykCjNN7KGvTvngGfGyzKwiN7WsL9N2TA2VXnqFSqZCS3YwfbdqqTEgYsFRk",
  "key40": "5HNvuZhDnk6nmKcvVDLPeAX5NNHJxchKdiw8ZRs2uTKjLpFXrkJjiuXoqnpa3kXATFVyuacfF4yzMcmHFRpnQtC6",
  "key41": "29hQEeLdRM4LmrZ9XcWPNoV88fN5fHeSoVatrS8NmxPmmqxdQotADdQ1aMuin9QqbSUTEf5KAc9ehqNF3yW89kCf",
  "key42": "2pZyb9Jq1b1uxp9ixi89RkrzGiEiqXqezhwPczT9Y34po5LkJRLATGR9bpWBCyjpbSFmwsYuXZcpKQYAGy9oNJLP",
  "key43": "4QLKmqKRCpgTXZFUXbQVSjJGd1NUrFyLKkBvUGPMWREBCCnuSApjAeF6AhYc2nXr4bsqgQiVuszNaANLQFeFsBEk",
  "key44": "2wyABZZWKD8FeXzvsNK4MdAFJTy2TUHPP6ZMPEmCLgeU4Jn8xJS3KB4RmecRCG73Yy1L3JD6StejoAVyAjJR9784",
  "key45": "4yEHX89pYdrUKNWFX6yajSXnH4pMr9V8Smm7rTbwWaBYZviQ5XyP8kqYAten5gewEuWNnkBRbFo8y2aRxfmJ6MUP",
  "key46": "5F4D6etbMpjMBGrV6y9A5DoJRs6vgVhdyEFmukEzp8YB6e6ZYwqX2UiTzXpzNsGpFtqfsMM2Lk3wu2yA9QVHjami"
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
