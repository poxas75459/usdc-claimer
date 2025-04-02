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
    "66B2d2NLh5CoEnXVJntbK1e1FL6pvb4fureBBZvT8XzJogtJ7ZKPcTcs3mhb9Z8ZULF4o5nkaCtDAK4HqeuP4fyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pRaqiivgfFH762n6XTRosex8HcRuPqdr4uiW5vZ35AdFsDuCKyqkKo9k6Lfzo98n1oC3LXSHUA6MTvhwKdSFa5g",
  "key1": "3qCCnEC6ou7bvELDCQw2fx6K9pxztrmHiuHFujPSYD22xaDYny9yPDGvJA9SSzndfqrJGYtWDoAbaAaR8uzA2Eaj",
  "key2": "5XjQSSnd5s5J2vYjZNYnLCVVRfTtUvRHEfziFN9pvcWUSGHw4vHDamRkch96F8DFST7vAuHHzDPNdHS4JK92aFP1",
  "key3": "5y7aPcEoBxg5qpMGDShu3H4UHGg7k84fMhgv9LMJRWrRUVpCFtjmZ2GQqPu79A13CmYZJMoCkhobec4WuG5At9jk",
  "key4": "4uTBae9DfkHTGL9bYPbsfopZz9nLe3V92M7wJBcDrG5PwCEt6RiyS3Z8Cnuu7vqibaqxMz67VUUKUbkHGsGASPK1",
  "key5": "t5u7PGNxSeRb9zYHkfZG5mzdKBqSqKvxBUm7x8W32N2yQwc1cE6SFwXUbavi5Y4atuL93axMYDMk8MKqdNdzyXu",
  "key6": "4Ekq2DL2wVavQgmGv9AW5UipMjLFo4kmt8CLAz9dC5JUJWXmCEbYmnSVoe1Z9KpazhQ2eVsmALjW7R8Hi6sgwp6X",
  "key7": "VwA6G6yJyhStZa2JF2uBMNy8Cwjy5SXaC5K1KbD89kGcXqKPbjYmKNcgYc881BmkGAPXze376kLv5JAS523GLWw",
  "key8": "5oxgXA9kAFCouZJvb4NfuPJdWvrBUmtN474YGJQZ4i258uSzBvTXmTZxn1QWDW9tLyLrvTiAx8f5o84v7UfvPq6n",
  "key9": "5UCVVhS7F2EDzSSUUj2ZU3ugYkKvnSnbnLCTk9RYTzmVxn4wjGmhmfj5wx9apVWuVBgyBJdBPd57jBpD9wu1cx2t",
  "key10": "3Vi2najDPpCt539zj6rMcKVt4GYM4YhpgKpX88MhZ5dKnC1aUTPJR7JJZwg5qhFp9HQtx47A88pPwsVJAuQ5JsGc",
  "key11": "4jd7THyg8YmwqXM33ZeaLxaucHxCk3VFUQAtVoSbHKR9zyTPxZAVEsCRLvdJTuedZq9vcCj9ATrCMDh1U5hb2ZtS",
  "key12": "4W9ERdExJbKbUHPwRVodzyMML6v6zhizupqU1WPPUHQMwimdKVZbMQ2Po2dmWyy2zrazEfxh9yNYBK21ZbicjEzZ",
  "key13": "5Cz38mJooQgnZLXFZdarYsikwXNmUiUPGH73Z6NCcLx9dLiQXUPagRZ6LwHNjDg9bNmCa8yY6irNvBAaRFKFifVH",
  "key14": "smVqLVfY9599ysPMhTHFEzK86Sho6avZoK8kPuhSf51xT93tuSV9RHPgg7PQ7buhpS4KxQQ2KXtKuHk2tX3E8zq",
  "key15": "2oEdfQhFE4u23zjDGVetsUDB4prtPLKbD1FF85TnkQY1bAL7J5p85rJEYm6VCq295cxBAuYwFu8yJFPXoqsEQmhB",
  "key16": "33ab8itME2L1dqrNhUwSQBaYJzjnMbgRRnEPV5PjSVpnD8DW8vtLJBbiMMofMRPUQdsW2tGUsWkk2XBZ5TJ5JHML",
  "key17": "2tXynEeqxAgKhXP4D9rJ6UJn8xbwtuQo8Lfa91qu7qE4RiFiHzMFNi4SvGnydBdGp5hcAcDQKkBe34mAreED2VKH",
  "key18": "2rM2zDtQ5Yn2LfpUcfEsPpdwTbBewpLJryydr8PNMqVZxj42Jtgq92dADN8MbHfmg8rw8b9Ff3tiDxtoev68hnXz",
  "key19": "34VJoJcNShgnc6b2LqRqzBZz9zDuGHHZPXe7uhc3xxHRD7fgo7h4WxT5AmcFu2Z9vxhcFvEL68KHY8aJBvnnJjwe",
  "key20": "5CYhhZbqwLyies5vxdVVtZ5g8QqtXL7dPtymTGa3922oNQr9cPKVqf4C1z8nxPic2i8gTQA5vE7AZH4qcf9smCFD",
  "key21": "3BsuaarvuA9pqejVGQxW94h7bJisQLwaacTtPAXMkFj16SApuxcrtePdT5K7mEM9sjhwdkn2hNT7HdJ5xgiEf9Vk",
  "key22": "3TPjdBAk58csV4TUEttNv8fa63jRSp8vJyEdUZt16t3BxGzoYtnsHaN8YQbmhDV6pWsQivJY9p23UXKvkVqRTjhT",
  "key23": "3C46agaSwMMtNaSboduPr3hqDRUsNSzX6uuSWVmFs3qSNQw9PpZHboAxWYxQTYRbNXxww96BKmeDDgbStjcpGjFt",
  "key24": "5ACxfXi4Yn69pqyvw2LJCta7LrVVNFWu2P3bwGSehNvjTnfRscN4bpv6S7p99jVLPN4145YkPqvzDsAFaPfx6bYv",
  "key25": "izzSgybScA6s2qaAS7zT9sFmia5sAXFZmNmGwusfRVEfjruiXSSAbnXPfR4rgzbaiqxiHqyyYPjAT4f2Lb2Kovk",
  "key26": "3eG3NP8nq7wS11QEPHmJyX9MKLxkCAt5TCcViAUN7k7BoKQfKkYn9uKo7Lg3GzzBzQven56jkSTQ2hUCpy6gwjhv",
  "key27": "5wf46tfbiGxrtWw4JGzpBLLygYLqVxHTxywWFvxbDPwAfxDsbRpkuEkmhHdbB5D9yWbxws78iTL1mj9HiPB9deF1",
  "key28": "3GQPt5vpkMDXnoPAEmC8gYyKjek9cyR6BohPun6UZG1m3krAdkrH1uuD9WuBJw2Ufhiu3m2yV4fAxYdqFMHDuoZt",
  "key29": "2vvibvGqjGiyWmGjGqq2uoerYtN8f9XZrsWULKby9ecGKxEpVzVxs1UkWNhuvHHm1hTURBT5TxndXCenTosGbf4D",
  "key30": "2Cbk5HF5ktVgpbdpzZjjipYa1EoBQKfvPo6vzjpgNvhShJ2KDi7DoexyB3KMLAsFtoLdVqxhZUyP42ragXTCkKtn",
  "key31": "zYW3A72zf48Bg7hRnb6pUVY7bxB21VjJZuAAFfeyCZrtaxRXDjTDhAtMzVXnvW5AxPJQS33QHpYL7rFUZPybqzT",
  "key32": "2vx6fZXobinB4UbvMcYEYb4D4vfAs33QdDKnL7F9HBhfzGLXM6GK15WsLKA4a5qN3QEmn9GvfYbuaXX4PQSqkcEV",
  "key33": "4hrM7G84zJsVDvkPmxC1uWVnMWMB2cvgfKAGBRkhsCeJrzKdjkkhKkfTY8omRCUzm3V5AEdmZr6QQNuV7mPVFRcL",
  "key34": "q8ejcpNaqK7mniMJatUCHncjmv5FwZszMCKN8oQ2Ufjq8P2xvxqpwALSUJ6RapNYQ4g76EdnvfMvSStTeyb6Gsk",
  "key35": "5ifVhg1aEGm9TsJry9tStVS5K5gi8fv2TK2zrUKw4mfW9rFkAt4QQW4SPHypEbaW5bjyiGFXFRi4upFw36VZpHVw",
  "key36": "thir27UYfV1nJGuCG8iiDWqRe1Fw3fk8TS39JiLKsh4BnmEgcYGg1yzdoRL4j9557nyFZoTzjj6t3YskjFBven7",
  "key37": "5nMXyictdPExrnGytCedW15Ebzr6zRPfqrswaG5ffyKckP9zHpRvL2EdNxk9Ne12EpQjL7KVK6p6QTjsgVX6qH9m",
  "key38": "3qGFkwHYdbGYYDHFqZnwLSf4rWqtPj9vZKvug4kQKCw2xZMrckx3HPmcaRZ5WPZcesoNFPg4EBJrak7pBGp1DYPq",
  "key39": "3HL2ydJSk73ZxeBGiF49P4fBkzo8JYMBe2gMEk8h6h7SmKZLhj1GfnxfNqgBK9yr1xRqXPwmWcKarDvzygmf33qe"
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
