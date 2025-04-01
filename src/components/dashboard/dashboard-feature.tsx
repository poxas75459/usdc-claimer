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
    "4cEa1676h4nNRAEwDzzii8nhvvTTspUrqQS6Znu3nGUh7B72wvRLLD7fh18h5HcvwZ2VzvF8CLQWY86FkotmZG1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yzXcfNTNC5wWPMF5Qffbm3JGMadciuDRdG7VUnLMQrEVPBphWJFyPeaVKm6hSPccjubkFmrP1LL5iGhQPsDDkaG",
  "key1": "4AmpKaFVHu13F9aam6vr5SkoNpntiCr1vkKq2CLZr23RTpxXDmfbeRqHYYR1t44m2GhP4bG1aeqJRHKYjh2sF9rJ",
  "key2": "4EYBT54xU43yCpjkjY8GMyWLxLfMcE1h1gxrTc41tMKyCiafdDKJSFpw2mXPeF8eRSbxKgxdXTN3r9MzoeJgkeRC",
  "key3": "2MxBgAPsY6Um5hYnyp4oKv5NJ4kYPvAUgyP1CoRgBbn1RJonvrv3NE5rYmXtCyv76kMqAqHZ7Ck3qyNL7f6aZ95j",
  "key4": "i1JwJCNKJDYuZYiPBfqrB6v4NLyP5sP5EgCoiPMhjjJjGHB4aTkkVL1you2yz4KkL95a1bc5AggMg5Sdn4HgrKo",
  "key5": "4cUwjv3gffLMvg1CJ1g2CKJFh9nNorfvKp3yo3NRCevMxDJGLFM6bNspArt2EFZyHjZJBodWjS1HVNo2fxhAQyHY",
  "key6": "UokefC3Qf2Ew2pGJjnBoLBbQZNSXctmEbuqcBk2be5Qt5rYJNpTqyLQCn4aFfChARgDqB1rsLyvwqDhXDR2nLYD",
  "key7": "j3G5sxvJvexuPj6QWCYGwUL3cgv3NbzmLKT3xQdFEgzGzH66syAGvsv85yKt8FEDGXvNfypU2aUnVqpQBJ4qnX1",
  "key8": "3LF6m416DW9MyaSoTA3ki216p1cqHtgsJZCGY16WBSJCFyCMJf81zL3R8AhgZkKFR3aKgUEtGZhxHbRs5t4kFCPM",
  "key9": "3AawzBKWbKog6j8Edj4KrfwwXzGrHyJ4yAQtJGqvcYpkqit2jkHFjox9WJj9ugqwEk3ZDsCV2smDyyqGRm911wui",
  "key10": "2iUjASo6J7cqUnvkAVsRSZfauqDQ2HV4MQvdpGgMgJgRyv13y7Z26W4fsFA9pmeEkyQNXWu7CExJi3Eh4DJQRBKD",
  "key11": "3tFbPdvoo8DQsCPUDDVKgxcj789RrmRQ6JXrAn4FAALC2ckeaLcWk6tJp126hmtrCbwz62RturHu951PLuW5qVJX",
  "key12": "3XrUVUKKCZwYXzeLAQnyN8PFq4iUwnxBD8HwoJ1Rsz8dtSQJ8Kp4r7nUCG8VLjDQTTLtTgiWPBpRPNa1b58FMt4s",
  "key13": "3wY63MV6mSjDaTCLRMhBVepQ67297hZx2Z5nJVpznzXNHBAwQy4HioaFPQUqmZX4tyYTujsC32hRD4J9y2ZqgyMX",
  "key14": "2Se9JMDJvJiETsk8ZUR3Pzb89VFxQpq5m7QAAUk5qcceoRzbaSYyhLAmepNcqSccowMY6qAKjvwh5MGs9oXbEuLz",
  "key15": "R2ZYpwA3wSJ8HZJasAPsp9ZEtFvSVs6vhQDyKVL5kau3DLVyrPQnfiVrnup5beQxyTyrRRm4zg2vQAZzX1Dfo6j",
  "key16": "3EmZW9deoEimMzhtX97EJykYPgwrVeSSK89TFGu17Y917qph8LY3jHjutmvcZkRnuuK2A9meiioNQ8tpLBBqaFiE",
  "key17": "3abZuJfh3975UGnv7e9GSFARPqH5erhf65q2jK6P91ZEtCPNRorB7Xp1rSvAbuarekB6gzfz5MavrV7TRLmY6UGe",
  "key18": "28PTFB2bxjYChE2vGSyRrkKG5QKv3Ew8FVzkzxxFCHaoFNM2YSNxXYzD3XKnzd3p2NePcs4bpfafuagvrFmSZhHH",
  "key19": "3gjeN3dRwrudi9ChK2fLinWNYfTPmTtjJXfZitE4qerLyQfHvsWMt7b4auYq78C1HY9beB9t7kkLPVWmr56ZGWVM",
  "key20": "4zmyGAKEKPDqqgccnpTDuNzRL6PW2J7sn3A4P14X4MJwYCGfLddrDQyUTwerdDA9LoL37TRnwo8aDSLKNyGpDi3b",
  "key21": "5ac7Hd6XSsymAi4iPq6mRRZGy9Yr7Rw6LeD1yMkosSEnyhDY5cJQ5PAh1unyoLtr2SGMqH5hC2JrH9fQx8HX3Ubh",
  "key22": "5WKniHd8hXADQ9irvDmQqJQHvRmZrwJZh5p1qprV34g6xwyfuGc39F67icZujk6sTSax8zWqqCGPQ42X8CvjRpSQ",
  "key23": "4XPT5Zi1D7UREPDUA4rM5eTix9zyRZwD2EmQ1z7pX7X8c1KxymH4QqBtqSw7rxL9cmYazgrKUpAZP65T9B9RjscT",
  "key24": "5STiQ76ANJ4Qc56mAvr3v318BCRPqzg6KxwsBznrf2nnmNtL8CTdaJbJXf7mT9j46AoW1BKj3qKaB4VbszXG21A9",
  "key25": "YMkVK18kf3CPrSUySSCafF82org98NN7NB78SeqUTFAJGtRjtR4AEDLdhdqDABT1kPVNeerR3XDAnTdnpWRc5Ce",
  "key26": "36JeSzhoMuyBxhYZLZb7SjiYQB9PTJiXHAc3f5sA3jTQ5Txgo5gwqpLNSx5FuBDEdqNPdfyLdZhRTtedwrQkyV3G",
  "key27": "MVtqB3sgRRE1iCFtc4nYEomx3vh7xUvowXXWeycfZanFufqWtMomSVPryUrQUQz5pbx8PhDq5cuzpXPw8BHGVNj",
  "key28": "4tK5fcMiotdoMELoQKsKbvMGTvbZ9qqvEUwcpoUmn8zkxU4PSj1fZd86eyJMAJ9epKwSDJeoUGBkYW29ftDhTuek",
  "key29": "4SpogyeMvsU7WFnX5QdYZrY7Y687pV8QBeanGH6BLSccf7DiRCNAySoaXoFaa7FcuoeXRZNCw8SKzkrbZSeAbnLp",
  "key30": "rRhkLLKyvK33CXXbX4LvjqTnL4w6dWFfkEpk7TUQREVkcMYqQguQQBumgJr5DDcEdbYT8Sb4NMQA8wJfScyUXe2",
  "key31": "An6QQ2dw5twV2ciRJwY2xk2z4GXCXGd3xkLF6cmX4bjvuEZYEGXSbBts4rqAVc6fHd7MfWD9VzskFPGqpdT9T7z",
  "key32": "5YNJo9rHKcy1EwRpx2hgjch7TPfXMWjJKpcMnFeP3TJ1n5JCXxeSTvuVJF3b1fznyBdam8mVVr4xmRyayJmvatnx",
  "key33": "3c5vif66S1NNR7u4wPg3zM8QAohjh4yaDzsYQArmtXFs3UsBQ9uS8ZXSqL6iaBhdU9ByMHScFuhqLyuCsdvzvWKR",
  "key34": "3mPbAD3cnEFEbtqD5c6TGT6Ggwngzjg67kWqnBqq4S7xcZb4JnD5yQ3ifQGjCBH3AqNHJmYXeWeQfEe7x3yaZmtY",
  "key35": "5H5XKQVkWfGCuuFf3bd7aMwTo3NdCJTgMnYtDqDB6UU3LCyRvvJqhhVbQdjFfatSXNqHopJc4pmwMhgqETotAfEx",
  "key36": "5unorckMUKdLoz56uSE4V2edXiKx5rfqGDPARKrZeUziKNjAM6fZz5BrQMyjqyLUY2Vp6J9o1rt4Dr86aK3ZEesC",
  "key37": "zs1zztWPqscdT1ur3n3VhoAvGGFbnyeZRtzGSymavbKoZMnqGDsoJ1fv6YAVZ8s4JDUYbNVwd3itc9faKjToF7D",
  "key38": "4YXPhCAznezHZ1kuzYFCC46PqkiC2rfEU9A634R5G5dXZYkynSJ5ySE3G6fGF8JoazgYzZTEhfsEygDsKR954Cu4",
  "key39": "4SDJe6P7weiaNqPk2Qzcx8QaYCh16S61HxEBVEGk3PcSbfMm2GnPjkcRzihVHggZx8rj4adWyMThHYVjhSr3nKNy",
  "key40": "3sNoFk1mZHn657oW68BW5RMESKNMUGkRbUNEdUwGW3kghxQXebyoZvqoMJ7JJtmcnGTrNuapg7woAHJxjqziArys",
  "key41": "3W5fx2gVEPEJua5uQsJqTnU7PCx6e6db6epVNSq5xbwZU6BeZavTsDhDyb76tc3narFCeFpPXjVDoVab8eSQAahn",
  "key42": "z5PT8RYtAerRhThGxKJukjNTPBw89PCoBe1RRRhsbp6okSpF3B9hAHgxDarTN5J4PUnBT4KsMVadiSNEmQZAsao",
  "key43": "5vWPsvSaNEHs8sNGycw2cZsvsT4RHTJLUcrMejowyGxyLaJKdYriiEBBfL3CLzRbjANAdJ86aaxovdoqhHoLBUjy"
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
