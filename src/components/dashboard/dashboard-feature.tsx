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
    "5GeVyLJVSyYwxYxoSKrQ3nyFPFemFuSvbd6qBWAu1Ec6DvFnn9uvf3wfnggLfAEKodgSxMALQDpe94Z8u5foNngA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rwoSRqnywE7GqEPnoZRUWbc9yCk5N9YdxtxUMAF1oDWqtQy4f5YGCokdKnV21nDdNMHhhJuK43VShzGQyFBmezt",
  "key1": "yBwfmYtufA3CT1SiydmCwMLJYtr6pyMhnsoQf4igJq4BR7Ai9fE8tDjfs1uANGMPsMXTvLjYYZQw1ro6EBhtmZ5",
  "key2": "2C4bEhgstsQz5YAvB4S9vmVkZcjfnzNnjy3e5r1oXUtTqaEpd42J72DfTFMm7kqhXFpyUQar3UxmKTmZjaSVJyDL",
  "key3": "5UXZsRuyHFwTXi8BYSbjRozpgfRH5oWRP3zbPKS9tGAm5V4bp8hvtRd67x8ZGDBTUNGMnmmW6bvcrjL9k9KufZUX",
  "key4": "UyUHSQqWxAsERy9p5JCVjnt9yaqcP6mCoGKndJ6YfpuMg6bjjrZeTqDXmkdssM9HvsgrQWHiG3WYZL2cabgxVUR",
  "key5": "4QpC7TNuz47u4xeCA49jWATeQZpshrfBnbZivUkkyHAChPo7RPkCSLerKTdYVt4SR4PgHtQL3aY6rZuzXf25LBRw",
  "key6": "3SCww3z9BHrSbnpnysfzLy428yR7QjhpBVidoMh8nJMC8ptJeyLkFKBBKuJqLDECDXd3aMHmD9X9hAzfMYtZzfHB",
  "key7": "4rjcV1DKafJKrDkf5EismLv1W7EZ4EZ9bF8txbEXR6X8eNQVJV2QoM9uQthq1QT2BMAo7r1kvnMuseUfdaiaLsVH",
  "key8": "2eNXo6nzftusY68M547noqTcUvtyETRBG7C2hujntPSqks2joBLSWpyBk7xd4AqfKRB4WiuguXmyXzXyQVfcZNP6",
  "key9": "5WxLqoLGBckAq25AQT8zgtLhAkcPY3HYPJXNsrEGBADhdXuozN6PyKow4NBDDRPK87qfGeMaCrvVP8y2esBTcwA6",
  "key10": "2ox4RRrKbLykgYTDaj1BmD3UdQbDgmkdW4Va47iRcB6NFNpPiGh2J41rgfSfzQoRGA8PHLmb1VTGJQZviBVWixqY",
  "key11": "5L6Ns1z2UXA4FvpuZFG3mrK8ZG7kUZPtKbqbvgkyXvUs84R93iepPfkseDwz2Z9YQ4agDmg1crCad4iKj9AX8gn3",
  "key12": "nY6WcWHcbEqPprCeuJGmYw4hidhaJqZTT5cUxpYet8W3CzqdMBtTY2hV5MPrtr35hKdfsen3Tzff59HCYwjRp3b",
  "key13": "CAiDyMHBdMmjy8xaDWDeScNTRCKshXPRqfgbVDgWJT9YoTPX4pH3aXWzSwev4G5GVUDPqyx5omH4bQDxgYEqDTv",
  "key14": "4dpSmWFSYYHuY7WzKihhQ4Tn9n8GkvvuMP5cnQQbanP38G6Z66ngQC7cMJoAbps8EsaemtR9Km5784bkAUa9ywWv",
  "key15": "2QJ5ecvPsSUv4zPMLc1cBGYz7tnqKhEEYCD5y287P1aaD5Gegw74qWrAK9s2KQH3zH78ryoPGsaDMhQPS6UGm7jD",
  "key16": "AFU9WsiEAh1tpcMv7AL9BgvkA63HRdrCLyRp7HsL5yzAYynJzMdzVPMvQDXZjmzMTNaHrHtMfGbrgTVNgX3iBKj",
  "key17": "z3rBUQ5ZCVoKVFD57dmAPWUqmaHCjCSUcwMrGA9ggsr9ZTuTcZowFuNogDWXCoQcqQQD19XzdJk4hspKWrBsDR3",
  "key18": "SKFpvzMHwP4WJ3Tx1EQo7E3V7qgaZMBKNW1wyp17WjyV6swjxijSgnHVmKH1ssSYbMYZX46uG3RuqYMq6kWPQd9",
  "key19": "3AXLjck2TK5ASfFJzTLZQNNnquhWZ8r5n1ZGQt2j7XPKqDKELU37GeujHBAi7zQ6BquT7TEemkYL74mDAf1R7EpX",
  "key20": "4DZRXA9p5UXc7XpveEd5ujwvt611hHRsUo4wNPqeqiYQZKQ7H3gnqsb59KK3uvWbzgppnfqwpWbrTAgfNTHig5mv",
  "key21": "DZeqoPSJsSYms2LV7LSwiFF4CBBFZwXFDBoAwfRkGrsNPfK5M8bqz97GdYcxQ2rg8hq2s81jrTnVascJULATrkt",
  "key22": "58Qu4Lm7wL6mG6NbRSnFwJDxKLAVn38StFW73ezdZhrJMT3ZhP8nqhydmoegTHFLPDMjujYrhN5xicuuPyhtmbea",
  "key23": "KvH124rzFDnsNoDNW2xRenVWwP6a6smKeKDGpq43Jvc8ojxzDX22om2XMvb2p1ShQgkENQzdCmEdq2vhJsrjPc1",
  "key24": "5npm8uSj5Hmz1zD1g8tdhT6bcqNSDgtZdUQMcXGjMZh18J48tSXEYnn3ziiJ2bbL14amydeabKjSJfUCW96kG7Rg",
  "key25": "2qyDPUBDHxkmSc6fhosa989y31JGMmTUto45aSF37zxnhCR1BYxdJnnvQZnwBv2MGSSauKtbbuBqvUndLMNynKN6",
  "key26": "4PcHR39t3FojgibbYjN4axwMomYcweBz7dJep3ujYjpWxXsJjXSbSYJ4dXKX87jC9CUnisz2ZH8K6FvYVBkuxnYA",
  "key27": "3kyNNJDZGNQFbDdPdsvLtemeie3gDpoYoEMvTJnQMRhvYYFYd3eShAAbotgTRm1LxkkbFEi15z6HHirYRSr5wvqR",
  "key28": "2ZePdbnm3D4fYLB93e1hvUnsc4cM9mSd1LmfrdHSTq99DYCH4ZDrzmbrq1E2gkr5XAEU3kkZT2jR1Vj775YyDrxr",
  "key29": "2j1u17ZecrvQxbzBoWKEJV1ZMhVzEpgK6covg73L1ndLbqGDh1w6aYVdnc57nwAWphrq6c7s2grnDobjCMwvSCmd",
  "key30": "JMe4wunwYdczaVKHqRuA73mNYief69yCrq2UUrik2yMcNgMV6HfKSPsocbYS6nXgTTvHPtYa793zgQeDbQAcbmS",
  "key31": "66t7ybxpahGY7La49HVNke2U9EKEYDcX7ehjpy5oucBrq62js9NMi4ZXYt857vCtCvdvYmpww5eETWjvg5SNSa9Z",
  "key32": "43PA9iHAPDvXLNqkYqcoDRkKbo11tRx3KsRKr5tm383aYKfwg12skYm7cgezGuBVPHmqBmfh4mtzrSFvymbZ3VFS",
  "key33": "623zstoyjWnokYGJr4MT1e7ayhv68XU3puAMeiT8KULYrXmpQaJzjPVdfiYgZr49Tgt9kDVVoVXHoL82EYme3RWg",
  "key34": "5LSu8ewvnvYP5UjHQQHSkZT4zPorp78gojLQ5ZUbhSL5HQUvSdKhvHwcnehA6WB2JhYb2guJjNWCg46ALZLuptrP",
  "key35": "NqKPu7gRhSpeefHuJDuQ4JCeQTaan9DU6HPFQj68aJ7y4HXAWidZo6VVufAKgcjvdXk9nUTmmGZuAVs1TT8PNcU",
  "key36": "3BAoUX47SjJPcSpLRTf7RMjTSdLxdi9vskuJyUw65NLpK4csYgMS3uo46HopiAuerAkW2CSusK7235YGZE1NoqXH",
  "key37": "p6RR2dZArUuYeWrMNqymT3UHNV5fR2rxwRVHHGhXJRHcANsYkeMwwjq8qsJcpBygZZdWszxLCABWqYexYFBnnaL",
  "key38": "2TGpgVuSuJBCKqMSd1bgFBtaUkg7rvKKbQ3YG1Giaufwq9drBdJzwCDJTD2hRndMYBC7jb9zZqzntDmXTpjyJcQA",
  "key39": "5UkRSHSoPaKsZjYFyXShtWoybonbzMJfYMFVuWtPWsRa6c7uqny6knFUey1owoiPff68KKWz51QBUE8G5hWExhdP",
  "key40": "4R5gQoekHyTBnpPi6xAeKeBrFVaqUD1kubEJ84rq5Smyt6JL4PmzbmRy8skqKJB6aX99w1tZUKauETppP1dU2acg",
  "key41": "46KLaM31jZ7y8SFyyfVUx8E975sWFqRnrqPRrfTrDgX1LsUMtwpR6ynGiknuqa2Phi9Js9U5jWYPRXBpEZBzHHZJ",
  "key42": "48qT5NvF8p4iLt6BdE2woByqKCmP6sWD9FZeNWB7CgYFMPTZNGbs3C3WChH9RBjyPJX5yvvmzCbD832ZtC6C7Yg",
  "key43": "KWVztVa5rgeNRuoNhGRvaaCYHQMVe7w8GKhqK2t2rzUR6FQGjz4nATDz8NSGJLPvvyfmAinEyD4Z8uEYVkAunAD",
  "key44": "5uhZ4D6cHSp79f8tvNUAx5s5DYUfrUqC2wUno9KeT4eaLPkzDXwFSUQoG3X4wTExQViXzB9KYPB3K5CG1mDnhMsT",
  "key45": "6G7QUKxz6C3DxUF7uinaPyRNPRxdNqmSNdnk8r3KLRUG5ckr7VyK1oaCZepCZ6PfF9Us6BXeEAEMbfZDWsb9Jz6",
  "key46": "23CNJTxwuPYVQd9MxzM2RSWmXzS6hBXyQjsrmViZcNvzSFPGwK95xfEdLdwT8Mz1K6NyMyWUmjgj1WNtrZjLykCg",
  "key47": "5rdCBvspGQWNCTuRCS1KMcTiiBj8pfcQEGmbMkTJ8BvXRkDqvijLwwakTvfHNs7z8ccHJwdUfZSy4GBxAUgXkxw8",
  "key48": "3Kgp9TXyJcNRDWPzm7ttQqLZRKXe21DJZ8njLCuqjdeznxAqdshFys4oFEHNNcbDgegcRVosWFwaR48j9mdd9x46"
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
