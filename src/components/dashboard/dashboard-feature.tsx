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
    "3ggsXQZLuDH6BbjAENyNTLP5miRQpsRqrDpfSgq9irBaHAFzs7cbfntD4HYvHab4CaXsyHrZYiANpksuRssNZnbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Se8eFHZpZ67iAVhCUESMPvtaBHp2b5XyUkrCKhdnoUWF4zBJjsqJ3z662XNBpPDjk1Dm1P3Gnnopbj85vriisQ",
  "key1": "57djWYmhQAKoenfQYhrwnMZXQxeFmbo364ztg9dvtPYvoVs8zp4xBBp96gfDmgM4azeTt2wGeTzk4pYEy576QwpH",
  "key2": "4UDAwBtogZpsCiyoj1FaWe3NK1YFytARThL7JDbiBa6tceaRY9CVCzjWaHPYaVYuF9rUA9rqJbAxapF6xGuxh9Jw",
  "key3": "4WgR9uqmfJNGcpKSNGgohfMoqPEJ9NGbaryvvhy1fgen7wC6VMpxSB7bKGXDyofpS69My6Dfqyuvzad2pG3qMpVz",
  "key4": "4VLggJt6HSvhcbwUxXcFUPSbvDLgyvsMAkJhVdn2npSUKPujQJ35txs27vrDpt3abPQCQi4fbafLaLjhTymTYcNU",
  "key5": "4akzJnPQz7CwAxiGF1QorfHKjrKfzC3H65y86vzaDhMgV3AwB46413GjaUMRhUGEu8BFsvAJYFsoa7csGgfqDVhf",
  "key6": "5eDiLJb9BoFDzaYPKL6SXm8dgvVrdSR5FCRrJw1kwqnjdKaBo6mDRgXVgxTv74hbwoPr9omprvYawwueW6BffBHQ",
  "key7": "63FofWjXPhnJrXkZfcy1r6wepGG247YUWgTRS4nR7Afd3KyDv1TvGdCML4udi7fdjtpyp35QEA8cGWhFVeknKA7L",
  "key8": "3Zgj9yv7SD595aqcKzx3h4u9gnCAhwhA5jDWCH3BBG8BsUgYnYCHASwD6rDCZyukC6LNNXRsY9aR8j8u2QtRJ6Gj",
  "key9": "ZkckTwhBydQUVL7VXUp738qa3WjKMq9ME5N7CpwqnWW9pqrTrnSUZkfEpdtCgyZP2pT4VHDvtfa9ZjnqoxbKi6T",
  "key10": "W3i9Kc1dTFKhonvF73oSo4MVTR4EyPKSHxCgE8i4rKTCcYocQvwd8kVy3mHXFtteDHaF2mXHh1fbbbWYrjbdu33",
  "key11": "22B72MZ3JevW3odG5Jxj5LjwBY4W3nXR5cXawSNRe3nRs4SPPsHWggBsqa9ciuD6pg1D8oPhNytyzKi9qJ6vJC48",
  "key12": "fjZchxPbFyJoSiq9mFqAJt4PQ5DvWYJ118vj19x5dxbw5eB4KudxFHYspa1WWRy85z5yhRhAzuHRfifaGnGBCWu",
  "key13": "4KfUPBTyCfpFQYPzXjsod4z7YXFHr6irtoz4dj2CoaZCFoQNo6NmBpqqgwiRCmJ3mf6FcjV536zDcRKfk6jz5rNV",
  "key14": "4QbwrHsiBY7m7myvprowQA8WXenHmPhqQU73B8bs5iL3FzQKB1CFEkzA2448szPzqVQ1HsdEML1WkeWXQ3zaotTN",
  "key15": "2a8huLthnqN2t8z8HJ4CJMUHezfZoc9A35kCrAKX3UEk48B4FuV93RuHmxkC2xBQ8na3mMpqXz13EdRMK9HQ4kkj",
  "key16": "3Ce6aCbAbRRKWmohTZyZsPEBUbRmuynvWaKbipx4AiDnWbpmKZswxUAc5NCXPWgeUAUH8VcQHhZqcGijPwSmVPG8",
  "key17": "2a6PzPG1yauexqhMYpkKAuLtwPkumk4ksqAEZiphoUzubbJkpu6K14Ne2iCWa2FRZdsqhvFbgkwhAYJCWiNtbgkH",
  "key18": "4We6i7UPfvtsNuT5oSUNnLDHx7oeTVZZjjafpwK8WTX2yM9RrettkxerXXep6A4JWCHBJ9YRcx1Dw3T2bF2YpuoM",
  "key19": "2SkzUApHWSKJqR733LLyFkagi3Xyf3t7bmqvv3prkzk2haTqo8XW9ffZipQ7TFLsg9QDksjy95hSQvrwoMT1cCSa",
  "key20": "4hZstxC6XyKkZA333M1F1Ht4hSqwRDPo71yn6p9b39HrhArbjFeu5HgF6o3TE1QBnrW5HeG2DYhdZGHpg2TZDkee",
  "key21": "3Ga36oB4xE82xW4XEGmnqPLTpdsD2geTCcgpcKjahzWPy4qG657rn9o3HSNG58SUTSwCjpm55es8P3Ftcv56BTd4",
  "key22": "5imSLMyyDq76G1D7NA1V8LpkdbYjMG3GbB5muFAZqKuKpSpg9Zv1pMUKWXCqWUdDo7EqkNnVKdGaF1DECCyhzsTz",
  "key23": "4TJHnmPLjRFN2J4KwqxWKcaRyQ2iBYWYFPgHkW8DgKnyicvTP5JbRUjkFTBTuX3yPnNgXiyyyESyEehGEoMa9s3S",
  "key24": "2E6Jd63u2mq6sKugtpWEF2eKMEtHUfgdLyoH8yAvUnnozyqCu43KhxU8ecepN2ZaxoY6zTLfXGZrukijtdtyfeAe",
  "key25": "5YJtnLCmTbf2Bya5b36dsdhLnsNnRDoFHFbbwqqmSfEm4di4L2GJBRSMTmknwvNE9mwJ6PU45P11BJgeZmNtzakT",
  "key26": "hsN99fuZbnTzWyFiHBtLM17DdMW3bHRwUZXqVYXKVDhjFVfXTgTBJdwWZ9Us2DYGjFvqsDJWqGSPqD7DezBXoBE",
  "key27": "2gCMyfxVmhyKUFovgeGHGvJ7HJadmwcNJGMCUEdZ7ezkHs2CYkDVTXQpCMg4L2hEq57J3tyz1haSLy13XfJZJKoc",
  "key28": "z8TXhqyNqq8cF1VbvJCuCmbeTQHBCjAgehXZA2LUXzkMSGEMt1AdSCnjubbfRdR81kYhPSNrShkV7EQqgCRmS6h",
  "key29": "4ib1rij8tvAfLu1sq3jLXbmxnhj2AtW5EU5uaB1AdGVwxnFCF86Uxe4jEWnMx8wmVSZ1cReA78DyDCnMzKQQYs8T",
  "key30": "XN4iMf3E15ouYS1tdd7TdVLwF4XXeH8E2CWnKJF21ViLEjb3p4AMmjcohteknBU4GmsyARrVLU1194RemFNvUFa",
  "key31": "3HmquxkP8JFcNhFbgrmejMCA52qwFx1iPQhhhkZdjRVemMCuxhM2DjtACmC4DDHXtBwr12DX79wB8cHfEB9fuP9k",
  "key32": "3TbGvBB5kkX3RdvP8cMdgf3o77MzqdPZPriqXefqxpRoUid99YkwjzG8qpmvJDLmNKp6HebHErb97LdqxkLu4yTV",
  "key33": "2ei5DpTbrWvRYxVbKx464REy61m5VWtXxh9ZnQiJotXzs66KSsaK1r97A5Xd2bCoXEyGeKpKzdxjBo9bESJS6HXV",
  "key34": "2FuCK9jYLww2FsjDeCwHGcfunP9zXkJGVYbF97CtFhhJW6HCZXFBA9echbFKuysdU5rU6F6vuWX1MHx3LdMHk4aV",
  "key35": "27oxKFXjz8V7esu9yctLudDckKS7gRtmP3JybZ9rANBYz7ipXcyxg9cpQzXCTem5ZLnZ5b5aNCNiEZxLbw3vRPE9",
  "key36": "2frYDmZDr6JgimddZA3JqJauivdDrCgG8cE2uT9Uk2iXBzAHTf1TWs8qKTrMazXTsGwrmxmM5623x4oWCW7uV7uB",
  "key37": "4juEExYp7ibVj7Qi8KbBYbNjEMd5ND9FY3FBqd7Q7hwdHZJKMTkxWjWgRp5ZwuysgzvAbkVCZeo5iWAoS6usA6jX",
  "key38": "3dsKDtecFUyLNL8gF3LgHjRoS25qLbxoJbdjs9CEScGDgG9zeNR71qpzDG5RkZokAS5jAu46FHsyxqj8kfz9wwNo",
  "key39": "292S57WCJzWyCPtHsUYCiGW8m8QxZhHA1Y543DHo7PXMH3vwwyh3aLmZFreB67kzmrHDExMjECP8z9ocYvrvnZFj",
  "key40": "57jJeXhh8TD9iP4SVCsYXGG5vEz8Vg1Lmi1yTGmBrXBJ5yErR8JkCWNzzcsVVBVsT8Rr6GNLJPL7YfWLnjoujcZ8",
  "key41": "3GBhF932MBPk2Ju3WGdGyeWza3gfr5VpfEFTXQ9dXk4UQv55LjhFLxQ1D4r9GLbws5D9cVVZx1MTWM6dqHXh3AcD",
  "key42": "3WEr2Y2wPZXyVH4aW4P1SiAPvet9J7ooqHJj4Agb9CdvKwQYcGtpghwUsBcv3qqQkbRvb6asu5BeU7tUZGKzEp55",
  "key43": "2UwCivC1Ge16ZRowAQo2NGTkHDgLjVsMKPjjKCV6Ndw8jqxjmhGx91SCd3td1rX5C9PEWJopzRrR4orra9dtpqB6",
  "key44": "2QHeoH6TT6EPzdMD2Bc1EJ6wb1XT35eUyGKyH9pKrtM6sEhxxEUE2taMDH3Cd7GXbWxu6crXHn2yVFHoHkSDn5Zx",
  "key45": "2NvSCDiEhxFH4hZYPzTAiW9L9narTp4NUYzce9aVjRNBL6QxwENcs5RpkSQtM4cBBKP5rV3MiMQTQkjmBHPjnG44",
  "key46": "2EnfSAXTFAg5g2hvSGKr9GBTfVf5b3vndB89SD2LJFtyLVxdKbpXkhfU6KrAAwJUKvyY25ESicPTmcCjUr6ZK9Gh"
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
