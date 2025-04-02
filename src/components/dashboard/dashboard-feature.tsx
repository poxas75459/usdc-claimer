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
    "5pPjkuNzjqMFJTgeFpEsJLcKqdxJAQYRrwcQvdSaZporSEtz3ZNQMHPaYWaEfvxzX68mbZqNDkgfoEWmTvuayPxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U1PpRPXHx4tFrhyax44TyhdURnS4cLfKH9b7trUiKbfeCNNZxdqbEBeiQPaAPKBpBxatJRPjqhP3UDoZEH8pyTk",
  "key1": "5aAFkT9aYumXRUqK7fyQmvNiU69dyWuoCCG7QAqe2Yu8L7whycMrqAMqzdw5G3QVWXwCNYYJHSGMTBje2xxPCrwj",
  "key2": "2bU6AtbwdfZu7kNGr7Cb9cfikMo9FBo6gbhdAWAy4nyYEpXeFjmiWXBJnQjF7pDBeewZwT66jobpq1phjqtwp8iE",
  "key3": "rj9jSZTowrbjti2jPzTnspBsPCMoz7BVXZNGhTgNhri6cH5JTABsVensNfjpA62wWRwNNSwPofiehombPXGT34P",
  "key4": "VmaEpjUEdNXZaFN9VLRhRKFL2jcgntsDokws86YqhXuPLjorArP9ndup8wFXPgib4kTAnoncNo7XYcHRXWa2wuw",
  "key5": "4HvqvvCHebvkQ9EeTB9DNu8ENHfWqSLn1vaKqAUWxniHhyQYAcUyk7GZWYgAagwnuiqhfWYXBPMi4Kx11ZUQCSFi",
  "key6": "V14nRBREsQTnV17EGTA1UJB5crFVhF6wjGVbYrr1jTXUg592w4U59Pw8HJM8ox5WjPDi27dZDVa9NymcqQg7ZPN",
  "key7": "3bBGw22J7Whfkds2r3JAmqa7SXUFotPZFXhahggLau8iP237wEFLfY83rWKSrz5mFafghhzZpoPm9od6fieX1Syo",
  "key8": "N5QUpQ64hjUKz9MwnUuTLMZMWQH6LwwrWVst2ejM3twVCFAQupMCnqfR1cqjtJPegMMH3s3Prn8PQUe4yH84iaX",
  "key9": "5FofbUKfC4dpT8tXvbag7tEgH6hhZLyF9HyrWrEqxmfJRt7WMNsgDnSG1s3nTM97jcGbjBJ8bUtWwv4xzQ69zdsj",
  "key10": "2BnfhYgtjikoBVEMAN2rZNCqSXtat9RYu7chqwcEpBdSzbqqnxYJwzyNNXT26QcqM19fMbBBkPEacdbSBsTCHHRR",
  "key11": "611vGfFWhkJqBXoXxKyNjo35w8XNp516KakpVytwccAGpmjKeRTtuvMimzzoZebcgmocG81zq3ngPf4mPt8Vo4T8",
  "key12": "1A6Mzbu6eerqovMkFgrfVJ71D4GFAVwz2Yq9bi4LgETrRcXX78nn5K51y9SqSHXSZLvuV48KhMYHS3FzKAAXcbw",
  "key13": "2odBMw1G6J6ReaokRYENizevdcU5mNCitV2GP7LQzugkjJj9d2EM18X3DwLoJVSFnjuTNZYFrR8AEEgJueD1mNyq",
  "key14": "5ozKB7eBFDYhx5S6WzsT3R7ovv44JB9c3PpHus8LimVZe3Jr44EyZ9HTX5HMXXAB72p1vuvCqX2vqNjUU5QLBTf",
  "key15": "3ak2LZ1HedoLk7rkJVHgXLoTSAMjPTMuT6THkCcjcaxCNjmgqJbC7fgiPVsn4AM8b8AFSn281MvMxV4SznQbJiy6",
  "key16": "4zjMvbb6tjmSKXdvemvqo7tRhiiuRJv1XTekF2Eq64gTJ7bcvfaUsCUCdvfxMEQRuty1rAEMWERK2UWnztsoytPe",
  "key17": "5DnFqFQCsDrhy6AaajcUue2UAYiNm1T4GFwcgnnjZXZY6B4nq2MxF5yhxiHvqaX5Q97Ld2mjVmhPey1espivarE6",
  "key18": "3AWSKCQ3Gj5KpB76rmHsXKEiHxE1ArgPWHyrr22PWrxdzbgbZ4hsTpFKLL4VsopvgTv3vT778A8D1xW4xY1FGvKp",
  "key19": "5e9gtjzaoiJWzsQZh2DUU8TDa4Y1LTSy5ykHBwsEbqEQemRJ55grUNfysjS5dur1b8Q4rExaYR9QbvXHkM6k9qgU",
  "key20": "3modi6dLKfd6TeBWcfPt5AHcYQFZvSjjsePFsX4mvYNN99C3z1q7MBQugyWzbqGNAdQdEywfvz2rXQoqH481zX2S",
  "key21": "2TDcvjC7Z9Q3u1MHf523bEmeix6yHJvJ1aGHJVocbmYdBk1s6r7amVJmKk2dMfrZBk2t4QuHBCHQu7Mh8W5EqdrX",
  "key22": "2BVwEQLcFrdCVpjwYvYqVsgEjnSwRc7UAis2JLrMVqJBuqKMfWnZgao6A5EoCdyV3ppXgLLaDNkSEabCzanXTy21",
  "key23": "5Gecj7EktRFjYPbdwtLBn3Xw9uhnS41JD2PvKGtJheHVs27Qv4tj13SXYwuWBQrjn3E583jMKgF7WFp7SzqPyaiv",
  "key24": "4nZXgvxuXLsc2rw6KnRXDQLUeScwUsoqxyJJxh2QiGzCkw71jLJN9zztNzbZbXSpfS9uWoHi5NnvjF1gr1fd7Q9h",
  "key25": "E9wsQYep7oCTR1rrR2mpeu2R5haaLv45LZgxhijpBttQx3ofGfN19FzRKzACxeK2Kz1p8CbaiJFWJpuwwSinYW2",
  "key26": "63U9T939BeVj7GjxethYihwHkz4Biy8EBMGiEiPxKDGJc7aqtBK6J41nPwdqsnVks2iAkKapV5M3HYyo5w8Db1eb",
  "key27": "cgG8ypJyT5HJhMAsa8KPE7JrXtzkWjh3SzeXuCPaAQ5jsd1KDKK7ZNiL13aezTuKnVjkxLfr4yvHKWx9dbgt9AY",
  "key28": "2c8mKFV7FHSeJtBs8iMq2yK1gUs4T54kQWHxtQ7p7QkgMRvJkpAYAZw4V2EuDMWjB3ZBqCRknrc3fJHbrokr9w4m",
  "key29": "4cSsBeDbYbYiBoSVvMF8d3DUHTGboZugB2DkYFqaHKUoS9Ke1dPeKzeQ1WHsKuYi8U4krCYENB8B3VN1FDHHVN1e",
  "key30": "3g3YXcze2uYnjuXMmKe4kCx5zLCuEiWxnFoVPUHM17ZaoSSBUuT4EivX6JJkc85kjDjgLKk2MeKfUjWjBs98ovVz",
  "key31": "2yjN7oeTGysnjBr85dM1KvbfFMYC2VPPP6Mmuyk1isYiLsUCaUpbYkR76y6q3NcAoSr489cYX2Yh6wuSzoqF1Wsn",
  "key32": "4ZjSi1R3u8uAQLXWpvh3oobbx48VVu1ktZcBwxcChTYB1GdRTuqkZ5AkGPojGM5xUaUyvtXWLjXFFaKZsUEQV4n9",
  "key33": "4KUJtXxXFqp2anCQL9nPbJCCyy9BpNnfYY8Q4dBDKgBfYN23i1ZmvAgjG81QEhLTpwyWorP8W8d2kMv136jzEWEK",
  "key34": "8sdTYpqjaBuhfANaz1usrwhtRL3YngNLbzwNvrLUobrMRgPQ8uqCHnpUrx4P9wXC2n9p8jatqRx6e6G3bwDZgHo",
  "key35": "5FxGzZqNpCTFWRFYVq9frPWwGkN4opptJb8hmGQKaQu1MtCgqVZjVaNriSLT2uvEwvT7mHMY9r1pxbv2pRrh6v6y",
  "key36": "2bbLzs1AMjjp3Xz6JDq8vCfstxWpe5XgRALEqZPkqhPFDM9qpVjoQeEUSMe1oomTGRnpSpm2tZWm5g4G3wK7F2xJ",
  "key37": "3pjQG4uqZvS3jt4rsyqMWHx5rDrtiPEvEMWrbQ4A7i5S3sQxp6BkxrJAJgm6ZpduRvVkJUJFuuoLxut4DGgje85E",
  "key38": "4ozQHudayCVhn9SYW8r4ctjmWPZxiENG6hwXMBKZMZZp44CuDqKQcb21mfFSooGzH38Dd3aqYhLa6Gns53x8YLP9",
  "key39": "4UNRZ9u6JXzHh3wX6HfBTcnM5owtRJMK3CsX9gefjoEM6qsTtC67pzfX6txpy7nju5NtDs6AjRoKPU7Y98n7fNM3",
  "key40": "3p2WPuHygp3NnsTpGxfG1SDcpwPjFw2nC4MbAp22jmQdzJ7kPzepYbn7Hv5jRjn9a18faBKutPbhKk9w2QpejsuS",
  "key41": "2avn5T4cg3LSLrM1bprpeogUkxhcKshf67VYbhF9to3krcuPEXmVkF2SgHzu9ceYQTYQCm8V9SmErBzACaT8Ne8v",
  "key42": "54mtqGFZdJftX5gETC3JGx7hdkncvTH97gazdCUgACK2p3a4NrCfQLrH4SuwaKSuds4bMxJ4wFoNkcHHrsabnEid",
  "key43": "3Bk1pKb2MqaiuVDZSCZbi8U8pnMsdQidecRy3yoHKwDBJwrJhasGsPgy22BGUe4nVWEFSk9Z6T6n7vqDjkXPojaF",
  "key44": "AXgh6MAaiA2tFgeVV68fiHch23gaNTuRFzU6tjFwBc1NXsCmcaHdBevbAyZmaEYT6AZ4z7J4tNArDebjwVdKMoH",
  "key45": "17mJDSihi29G9AHPxCBJJWWLg1TZCfDR3h1k3m6uvMqh4wBy9tU9MUQ7HxeE3VGtT86oG6Djv43EpNgESgovEad",
  "key46": "5YYSAon1M3pTDn4eRUwYTq1mzpfKbrTUAw3qdiELq6dPFnCZxo5iP5nmQ1zNpS5x9XxPBg3HLenq91AavPsENmF2"
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
