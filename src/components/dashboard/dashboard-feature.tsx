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
    "2kz7oJMoTz96gNfUpCAQJGbiZorZgjfMM2hcTQ331Sadi1jmWEUPzh3fQeop4Xce6H7GZKcA9UTuvosPgRjCWesJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hknwWFFMmVLwTvnntkHCkP2HVHNpMfMuvp9Y61NiZt4sNg27QG2WsFtxETqN2EKHetb8SVmvrgTYHKEJRDgYJYf",
  "key1": "58noAUzEAdpHxBZP2AAvAZm8k589DqdjgJYz2hzNDEtsfPz67M8VGj2CFSAVwUtYhcahpcTkFQGwhhdqBo1cMHBV",
  "key2": "2ZC9q2LqUJPvxrBRgEDpwgpN7MG9t22t4LBsBpuxDBnGc1Nwp9xhkrLpxqtB71zVY6QFYa1xcfpYz16odG92cQcg",
  "key3": "32B5R6QJmW84Wk6zoQBZia5bCj6C4vq6B1ym1Agf1Qn5Q3euvrGXjkbUFxDQ8ua9v3RbVbBSkjm91Sxt3QKpk1on",
  "key4": "5A9bvPi6WWG2PabaL3efzZD6CTCRpsinD3qjyqXHLXkrorEo8cTbsEWJdo9ajhCF3uar3wwrbLpHvqHPDQiHRUdN",
  "key5": "4jRKFYy9Qcbjdwki57QMdEyJqCk6j8LyTuMgvXgnscmdo73Ttg4nib68XriH5hGxaH8TL167vG3ftqQH39fjuHwD",
  "key6": "4EiQNEuUmx8dpH8vowPLXTaqBMsxVRHcvbgKPJPNBbS9hiakiHyCqPaUUEfLqWUg6Ukg3doe48YthY7qA8Tx6XPe",
  "key7": "4TP1wkdyUyLpVe7wBnZXyoT3QrPwx5AYmPBd42drrtb8eJx58toWw6L5qUNXCKT18pSFdfkzeUgy1qS5BDst1hVb",
  "key8": "2GKKpzH2QgFE1J9mQwv8j9teUCR3fZys8ND8NYKPKnPKLgLj7NLXohApaYxo2m4Hxgzznk6id9EX3uLqtDixMMJG",
  "key9": "3RwxfbYh4G78JTLswywnYLeUuULFC4NozcHSoZmpVC96NtYURHQNZcu7RxAvMruUkhb8HPCkudhv8L8rbhccjkhU",
  "key10": "4jyze759XGJeE3cC543Mty73sLmhZXVxQAYTohcGQ2KjA4F4neFap6XmsDbFHwaky7vXGfoAdBqfqB63b7jjtdQG",
  "key11": "47N9MUwuangimZRYgESJLsWXcP42VP63parzV2n5DtdBQpJmT9tDFfEXfq9N9aJrJ3BbihqYLQaEbUm44e6eSaZn",
  "key12": "3vTRQ2kkdhXj7G2vTPVkrb4MARqk1TymwsoYomNieGWdZTVBrKDsrA8SmyCgxp3UYVpJtpTzLzLKAeKBBqiUSzkE",
  "key13": "5FZxnHdifQ4zfL4xLhz8z3tjuUXdb73vtQN5uAW84PCxQLDKhf1sAHZJdHSrjy8CmGTitCKdAnn2r4K7crfMUfKy",
  "key14": "MkVTf54TuJQYNJPrLd8ujiQFwxaPPV2Ng4P2oWP2DfZ8mttgDgBqzjn5nBRR641dNBHzxEgqczBwaZXTocxxb1W",
  "key15": "dyQXm5duCwXFj3hC3HJiZ85FVaDjRdZRNJrkRiFd1EJPVUALTYwQMiLHgfN727j6FK4vDkyPic9YwrVomtgb8fs",
  "key16": "gh51iYtwWjyeZLxqAn8AEkqEknAf4fiJ92LPqnyGrWsrwXaPsQ3sHqmeCRWhGcq9WzkTZrH5eLpDdV2fwK9cfAW",
  "key17": "2CBrFYMqSDTYTNajB7GWs9yzMmqSKpeauNFkyfi4ELBq9Ze9JCW3DTijAzvUeHQVGj53ywDhVVMpvC9kBeRb17Pi",
  "key18": "2inE7A1k8bsVyPPu3JghC7g5TY3fV93xXSx75iaDaGtxL6bSrrLAn88pMMdzPZ7Y8RwUxet5nzxJDMwTk3qZDALY",
  "key19": "2rZCctJU6idm98Qc3SvqWRFqj7T7HYT2NQGXG3NZpLXHJYVEL2QvWdSJyRJssEaoa49xaLxB7UWnGoj8coi6deHV",
  "key20": "2f8D382obTRFMgAG1LHYvbbWSSHSzGJJf8gYgCgiuxmqkDr78eCpj6zUQ25jC8JnToRcfTe7S63AHsCxvwzwkBSw",
  "key21": "4FCKKwM6GQFpBLvAZDVs7eeYJCDLLKX5Z9Wfxk1nVMVeb7bjq6YBpg55KFLqnpwFG7JNmjhsRmcMJZz4SFhzXEFW",
  "key22": "5XMuPQVa21vcsdRb6UbbS6vMkvGzxUYdV3gKyvGw8N3ynaYPsLDsJiSUsyu8NkDnDBzQ5Nh9aGqrHdx3kvk9SkDk",
  "key23": "3MNVDNHS5Bq8VVemTPcafp4VG8KdPQB31ikroUCBtzKB9pSz2ZaRg79z61GwYpmJxLNPoph23b9p4E5MMGHkGUbG",
  "key24": "2BCYCtRPQZLBYPTgXYYSGwq4CU7y6yF3zmqtjYDKLbSjTqLyQk1Xr2kEThbkU4ZNQK2HaARLWAuGiHBUWBqd3KCm",
  "key25": "3oSY9u11Fb2dGvLDgdcuXTuFDGtKN82LShSe4RjqHRrgXvPExDneZjkS4AWw4EKG3yK3YzhNAUGZVxk8H7L9yxf1",
  "key26": "3ZdNcfbJ8Fy4UsGSR1nrFQWtDSWSY5qdckH6kAZ6zZSj77VGjkmZDYPJTET6dg1cAFnqAJCSfyiTB6gFhxBebiGT",
  "key27": "2Nhcc9rWThnWNoLtF7BhmD8mEXBWqeHobeTfnuLmQhA6vM6DrLgNWpBS1TLouvMAoEvb49AcFhySmwK6jWJzrNjv",
  "key28": "xzWgaMgzT3hJwKBHvnFEEuXSvEWpe2tAMktXdzNGEedDF7TeKN21fv4gUwcMYnccvfUxKaoGeaXEWVqVhB5bUcS",
  "key29": "5eWgBWEk5yVs9CnDBrqaJ6hCpgb5i89oefqsbKC114T3r2UPkUfR26TPJPcCPLZH7ssJ7Y8HYatf6kH4DstKnafn",
  "key30": "4YsPVK2csChwwRjrKZGyKBmNVMhcAdjWZ8pXMHGv8wwYVxwDQoNytrubc2ggvTd5yfXpf2amuToXjn4TkLvDE8Gu"
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
