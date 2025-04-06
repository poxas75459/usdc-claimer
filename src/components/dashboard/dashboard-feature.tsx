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
    "2yxegDaVQRpYgammbPkCmtPWBa67gaWQbJ1uwjgjZm4umRRZrzvMytHef2MzjgqRLaGQc2rrBaAMXCuGG3zVPwKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46MWFNZYSmzbzSy6vDWdHdLvn3UcaQE84jBCWnqv47qHivUMw4zCsX7i3geFLNYCRSNXmfCAFMbroJJc9553Jk9Z",
  "key1": "3qQEtR7oXrD1yjUEJ43icMGEmS27NKT5QcKFRfX6b67FcdbxMfREaXpAeTSSWeuaUyLahooAEkZ2g8nNoaMASmhV",
  "key2": "4RQ3HSmAvaFwdD6S91TGEdb4kJtw5ez6GmzUZ7tcf3VVjdgV8WW23uAYn3bEA4sDEv3N676usYCLJYbM8aypZciR",
  "key3": "5NKnZSDoeMkaHQAU5VTjjMBXmP1PEqdcVAasUctyHRfEukCCFFb4JSg8DhsDM8xqhxg4fsoi7pLz7zT7WZPDSJGZ",
  "key4": "45e1NjMUC84JkRtPv8p8L5hZuE7a6aXL5w3WVre9C7aHFrX4pf3jRVvrJX9ex4obguMVkXYDgEagv7JpWz1v3Xrd",
  "key5": "6z8xUssM6EwMzRfS6Bx2KsientZL4AQLgF1DtXUetRNPsxEpkhNoj3w9ArEdagHgUhT92uiZjXZbTmD894GE2j5",
  "key6": "4Qp92S7jWDa61SqXojvqkwpyvcYkob8BkJ8qiGmVzwMFgXCvrgCCxCajd1GwEKo4wx25fP9HFWB2VKJhusBE4jtG",
  "key7": "4oP4jHQPXy1jZThcvyQh1NnXnCeorRjnPm1R6tKiQfEbDUHKqMzSSGdyR3A1u921pgXrYdNKbw69VoekZMKbF65C",
  "key8": "3icrwtydTef9uNjUtiVDb98Lx6vHp8xBkCDCeYACPT46qDAiDjeqdnrBbotL4KHg1e1PABrZ2aY8CiD21FkLp4Nt",
  "key9": "3nAvEp5vG4bYV4UCGJhw3YEvnZCBGkRdY6vonTuwiVZ7xr9YENuh3EAS7Qusy5amRii8QQ6E7iVoXCYNozsUqyBs",
  "key10": "5PgtKTXu8MgDCF4o1SE9fTgGQAyjkDAnrC4sXYSZXJS6wZ1VJUMWuWGyeKcYcsaLi9ueeHZBQVdCrqVmEpnioo8b",
  "key11": "3n3bvSqXd8J2khRLrrbUaU8iEVBgxVmkgqzeRBLxDnKG4f57tVQ2fEu9x1Nm51aZd1awnES3fuKsRGbvttdXonYa",
  "key12": "1PwbDqaZiiJERWCnAgYQfoN42pmCPgDKHA3eFEMDFh6Q6pZzSoECtSeTXRbYHoEPBHFmaup71rvo8bjCF74HPf1",
  "key13": "3Uihi3m26Qee2fsymY8rWvyBW5cUv4uTFAbAfPavM9iCgUcwB7aFJW8knGxBUzh5V1rXZM42Km96srDWUF1KzepR",
  "key14": "3ov7XcojR9rCL3wGCgTNQguxkAZgobMCDn4dvnSnXvQnsPssw31AxpoqmsXZ3G2WxwJoWMNLGJS3SAUiVc71XTUw",
  "key15": "5PxTi2Dm8jc79dV1g1ygEBZ7RkJvPdBydUqRZFUkJvJv11bkuPeFavn8Jvv5isTGRsJLprRNQ1pjkjwpF8EbtWJe",
  "key16": "2QzCPtSnC7ZAFk6jMo1C3mtSKJEi3PcYAwsN9jBtHMSSWLLDU5NYD6Wwzr7JDnQjfZw1L2HyXHbP5AkkvJVrzCsg",
  "key17": "46Pva1CE1xKCinKcdNoom8f2TgmJ3JkYPA53cZwNcLEdAdT6C12TQEZMjaxn5QfukUTSXhuwB4tX7maodhmC4KLF",
  "key18": "5j39nnSK8dDvqr8Qd7PeZ7R4CUYfEvEZZJSbBsa3fP38SDZYhDsu7yN6tHRttZPNrtMHmtVKQ1wJ5XkH9mdK5a6i",
  "key19": "3ooa1EVzMvUTiwhBkvmVk3Lx9n7kGYd6fqhTcUXx38zu1whXjBYZ7qcGFzEf9jF6ZVSexbDu8omabkXwCR8DueLg",
  "key20": "5FDqmwWPCtNjxyC9AqY4CUsh45YQXr4namYKeJJHkETey3WFMiZ3mNG9KMQrD4SYqtgMaa6FiTUSLBfFzETDSUJ7",
  "key21": "57aTqpgXBzHNedGKNCkgpVc2pfMCsZmqy2hfWsQ76u9NhfxFTZzRTAJ3RXcYAdQ6dikDLkC2miJY2THr67Mukn8X",
  "key22": "4K5UCHJfC8xpDZhnVRJURHsfhVsxYD4s8Ew3W4hq62YV5MYVhgWbBSrvDPLmiVgb5cZ5tHH1zeKPy7D1q6ea14et",
  "key23": "4PWaQn3XvgfR5SpXoxrNqcAEgfzxGnSE3cupLvAnxpS6j8wkujCzaxwm6hiKoCrwCih6M7Fq8SzTchcNsmGQMxwq",
  "key24": "4Sf7wuPSUrijGY2thEZnKbpnteXTqmDJ6R2JCqoe8CNtD3eSAr3yokonMcjfiswD4ogJBoBQKdNRSQAATNnQG5Mm",
  "key25": "2Hg3htywgqykXp7dfFNvfFxueo1QvRFoPRhdB7MyoNiDmYZs3GYX47TUd9ae2cajiitRzxAzbCVmHQKRivPTseb8",
  "key26": "FVQ7ZNywR5eXiWAg8o2atX51rrp17JvnLnJzd2oZurp2qw8tk3259FGJZDVvwv4U22EPwuzY6rDp6kCkZQCxY9h",
  "key27": "9xhyUJNBtXWGcMZkt49WVDCGh4y1cqcXbnkUJeByWjK8ebXfu9TbqoZUn87sMKTW1XtLPVXoRpNAUCLp3AafBaS",
  "key28": "XAqWExEwiYq8XbziZYQ8kk9HsvLi5mJVcpEW5mcSXR2UT4osGYCfYQCt4EeEhYi14hfLbVn3msuy3ZL2vdVYFcA",
  "key29": "3DJ5QCN9Xar4MYVcG7kg2S2k9joe6i4MBLF297dePik5C2YFMr5BihXYW2DMeqzimMc1KDs7KmYZbTY5wAndceVN",
  "key30": "iqFxSvuqDVTYQ481wLRTESbYDaz678v6HG4dZdKBHXmZeiALaa7AYwuNCjMpkRZfN5id3UUwBv2qGbaLBtN22b1",
  "key31": "48mmLTnWZzkoDexNsqn2v5FxveYEHS3D18dFXhqdWw5pmNvDmvbsTY3P2mMnLsQNK7xFdsmJX2aMUz8qsR1zhwM3",
  "key32": "8PCtHY9bUtyQBDrm8Gf2XDhc4rFynH4NjUQcJ7CBJQcDt3uPJrdUTxzR7N1u3ZT6g8zYr4yfsn9W1ek92qCHJFp",
  "key33": "5vMp7zyao7EBFtoeNXMCpM86L29y2oesKbsVExAW3zsAXLrc8vSowa1SPeVcvnhngD15PQumgnTvwJMAX6JaH3eY",
  "key34": "5yrG6LrsfKT15xJqvhh1sz66oG9Qkx2Eo8X2LMMiYGn1d9SwGnBBAtZwx5YDDpFWdeApaBoGHJYFqWUAZsvxxVJs",
  "key35": "4fEwG914umd2so9APHnDfY2Ny94djGW2jLHwCYfEEUBukg6awVZEn1eJ21FKFozwaxZUQo55eVAKATzfDWucXYEv",
  "key36": "3yaMVc9TasBmQYJudo3Ntb1Q1uw5hTGQ9xYRExJ4ZvVhLgZsSe2zHf9zxQwX9HJc6xcCBzkhjcbtTAvSGkLHhAkT",
  "key37": "vsYBaAjxQerjEi6wasD6SWg1vLiJ4uhr3AJy4PhwXKEbC19QjefGWo1JFAMYaBPN8ZXJXnThz1Ph2oCekgRJbaE",
  "key38": "dfXnvWtzYLJdHeiEqdfu2uqSagumNoWJzjGULuLXq82znQ1rbXLX4WKBSTrvw3TEP8kbh3rfxqZUhgdho8E1b1b",
  "key39": "QDVFQvHqz6NVupREZXq8sGwSy8J7twyrKMiBxavXryPQYt8E56dhUUS9rNkoDcWvc6FqbSsqE4RDCr3FfkSQbYU",
  "key40": "uG3K45UtqLYyuEKs6iNmsqMgvo7FPZeygB3rQbojgHmQeXQf4AZzj7Z7dqPuurdg5VFPmPcp9FDCMxaBKNKcsZG",
  "key41": "42P5XvQMtpMpjPmVkVoztugVCZvbZQYB1PDzQSKuLYsfXo3gVqr95KSAHG6bRn6j6fzTZpQPCct6wWnG5tP6wDay",
  "key42": "3yYz45XVfXPF2ZoYjGBSg3S76vK8hxGS1FMdY5HbBBScRcHxokMgWePoGPS4L7GD7CGnbamWCHpGcA28Qf1P5W3C"
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
