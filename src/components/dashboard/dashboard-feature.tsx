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
    "bnV6F4H7vqYrihEtXUNXPogwe8LzQzofU8mtakJFwPTgZn7jA85BsoFwvQczptYtbR2mc2CqNK7JNPfjpShJ4Nv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2baYAbLMTXat9PMFXa4FqtT2fYz4wJrmNkB9BMrETSs4b4F1LbvMrS38jtCnCfTdLiif2kcyjVmZo6Bpnccw5FrE",
  "key1": "3bRMSTU7A5bGTnLgfFH4F9mRUnBwdFgTyH9L8BEpcXXbMYKyabd5ZGwcLUhLKSCtCYskcGS5S5pV6u8XLwHPDgmW",
  "key2": "2UL8Pd9aLRQ2WiFhcF8Tp7k8vo3ct3YJj7thecXTPaornjHeFqkQ9qzrEokcekY8L4cKnV4f2izC3KD7c8sTZDRq",
  "key3": "2u3Nhi57kwuqvxPwrf3iU96YYGpU7detbwK4TypXhHRTG9vwj86FpqVsPUMNc7etsh1Cg8m1iBkwBTf6xF7YLDYK",
  "key4": "5Xi2nzLfLHNSb12a8iYXC72YAF4YsBk8abNXHsnug26ppHPkCGDHmVQKk6SZSzhDuFd7ngSs2fJc6RRLsMxtxENg",
  "key5": "4mnMDYfjXvzsDB2EhZWeh91QEgz2MPFbNELaRQA5VVaLkwDoyZZqGR9JuW3LAWX8Cz8xCBtifER649Ws5ojeQiVD",
  "key6": "5LF6hwXS6sfuQdC4Hyedhvg9zCcH7SApkBbi1FPsddcQwfHbi3tZaht9VewoQ4obPA69VEDiwJ6AbEDq1xb9aJhR",
  "key7": "5mCDuKDzb6ZEvwZQYTrg9jeKVDzdanq9C34kZ2qt7RQHimNbPhkmJCZG6FJ486zAk6vYThDKV8mzoZoGda64KBEg",
  "key8": "26GVPW8ReZ1k7xXWfoUTn6nmbkt32XAvbY83wKugSzSLZ3hs8pXRWCQ9XP3gWG7WVVy8U6WvBq7v3CEzPXf2C5LF",
  "key9": "VQizLK338HYsgWBe8s41PynpDzzsWCzKyLuE2efPV3AmfrJHW1rqxv6H4jyf5XHp75eXHqeWtrsNyBudigXzafE",
  "key10": "4tGwdYZYpM3jiuEDDwtpNij1D97Z8zDRJB6wY7446nX8dxKeRqQtvuFfeooxviNDFGgAyzWif5JmrWNiFtHeAoF2",
  "key11": "5aQZpcZnRqVnNhpENNbYqMkNrTKdF9jt4BYEJDpDbvaERoivqqmfL61S6xjdSQHZW6Rbk4YGYLgRQyGR44UKq2zY",
  "key12": "5bwpqiocf35NHutR4HC84jDtaoicchEHjv7e2T5x5zhw5cRT2oxznFCWJb8E1oJo5XCLq3XSYSCrzsCPH37BtUqP",
  "key13": "3EQdj92qiHuEGKgjsD8xW37pUYD6EtP5EScQaxm1V95jR24srQsWbxxgFSgWscBsmnH4iak1Yh5Mygw6DGePwkaG",
  "key14": "66pxvHA45VHeUYb5Qvzntsyc3K6uASZUx67irJusHw789o9aMRRDZduHVQowdQnFCGzyRpN7xpztGnTwEw8b3k2N",
  "key15": "3hTE7R2z3XrZDz6HzFeK9BWaHnKbjgjeUTB1di9r3m5m9VXfneSzPCr6gvzdzm7ipd24XHro6tiPx5pzdFsgHNJn",
  "key16": "yvBTiMC54P67869pLxh88dMPDiYvfjkd5Lg4xt6pNJs3benZkbsFi7TZUJWSaKozRa1sJzRDQuYRt2PZS1NoT9w",
  "key17": "5fAMr2HMDSbWcRNmxSAKX75pBhyndTVbVaPmWiq94yLRPHa5TVGML9ihkT4weBzeNHQ1UXRWLTc63MBikGM8F66X",
  "key18": "rKznc3k6f6MNYZa5goppfu7MmLqbnjcaGkpd2n114kxtHTdFYZp1EDvb71QKLDfspPAhj52qUNLvaZxSj8HmYrE",
  "key19": "5uStLr7QnRhpgRovGCrSgN9WSuoczVdKj8hgARfQy1oKbxf4QwcHGtNgv6daCsZtJBGuq41xnpCd7QQ4QXXCKVNu",
  "key20": "pfSy3FXMxJtjsgr5aemHGVzivD1QNRxRHuKTqCtyTaVwfjTPTRRfUUkeFzhZkAKRgyEZdiaxXP4W5stVR1d2Dua",
  "key21": "2tq2EdmS6wciGsQhG2CqCVyoerezhazacNDDA9uRCEnyHjME2E1aP4i1RqB1UBbNBuP5YMJrrGscHExkCbArWxgK",
  "key22": "3poXBR7tT2SyVqTeyUzS7aUkUvkLTRgjRnhn3oRogaCGTbzmFBqWrhG4pfpQNdTA36AprLVRGyoHmHtXG3Ub8ke4",
  "key23": "638Pc361DyE8VsPugEJX3Z8RzgHHYJfo3hK2gAJM2TJiQEKDpk9F6yvud9JzGzETKHYPCXALYUP5Tnkjgd3bYLpn",
  "key24": "gnZvoAzYaTSWyEddA6qy2CezZddP7HYUy6ZNhLHFUZMX21FYfZFRGAzT82nptoNBBGiWG7EBeHBZXRcJwVtyZGo",
  "key25": "3t7TyvptMnwaVoh4Vf3PpQdkXHhYf4r3WjL7vkZe4TRHzxCe2zTkFThoccqg4P9mgLHehiKdQVEVGMThsYk24mtm",
  "key26": "i1fvFpu9HqgfaMUnd9UAytiSAiPt3EqwbKzyjoHro3zzHwoq1eQr2xuAwznAg6BhCR7osYLAk7vahMK6mq59UeA",
  "key27": "eS2CK5EuCZuQKLR1HDB1ygYCrFMJZrLnzCgQWMYH4Z5w8w7LLjcm4AafupoWFfdmYDmDqHQHMmhibq86jBozRU8",
  "key28": "44hodMaM4h42Gref7e7N5UgEmdh2WrPpssU1QZGPyVn8dVnR6URJ7qVknVoAztFvX5dMbwtr3vBFBQ5w948LMnFi",
  "key29": "28m3pd9MEqwkat36ugqgJbtgBbKWFtiZbGdscXJmH7WxEHiNC3AsLRkxUGk5MmeMvQGvNVSnbSq3tjQXNoTpuqc2",
  "key30": "5BJQ2T9cSLnHAKZAQ2d3X1PAhrBN7b28JJWx7nDJ3wKU4girQfre1QMeRUrssxTVS7ie69WNvNNybM4YEcrACC3Z",
  "key31": "3eadQQpdBZJmy27ktJypNmtQAHvNwYyj6DqWo17wTDjExe6HRi42KSV54q3NX8DueufUMLMzeQ62aqmfHBUFS3Pi",
  "key32": "5NbTUamfYRTqjgzBgb7qQ1fsSLYQxBrM3zfeGVyzMmauhm4YF7gXbGGvhivs5Uypo6KRCqa2cefZfJZWEZLUfJAz",
  "key33": "56pMRhwFyVGzp7MCdohRwHC16iS9ZfyrNwaQFJfT2N4vUn9UNnDqKNynL6FL9xypis1vVAD2fKqE4vkrr8Qyzwq6",
  "key34": "5Rn5RnExar1KqdgR25n85kmi6cHdAzGyyfsGBxZmxb6fNQnNDTAYq1eLxSqLxYAN5H56Vsqmcpc9w7LFopRwrwV2",
  "key35": "hnEXP94BKJJXpgF1gSS4GFa1Zzdn8G58A8u5Bb7Vfj4LafR4iLQ6nwM9ZytNF5x8MZwwf3tJ6S4XzxdZ7Aohacf"
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
