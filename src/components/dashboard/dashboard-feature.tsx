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
    "3yyN5a5ZYcpQ6dY3DqEpvxUiQStaCKYeXULDzS33KjPkhJB1JKyTFw8xL2xizKJ3QhHPcA37yqNgNYyCD6faFgE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CyoZsJc52vZr1UNgntwK8sAMHi1tEY4sy68FAfVbizuACNpnJaRDnt6bnFw7MWGttta2Unvh9yBe4YUr63i15MJ",
  "key1": "2Vqih38zKj54BvqSwhyZJdrQENYwjxVy1vf8xe2wF4pD9gB9aJc7P4zQM8jjLBKiSNARrRTpuwtA32xGDJnd5m9M",
  "key2": "PqAwGndA98aJvcHuNidcxJu5UrRMvyDB1AWKSiikf7KuUXb32ZhUd8rr96s5qysU9PUGu7FNUuPMMcbj3VWu3ht",
  "key3": "5qUYJQddwoy8f2yChXsgpjVnPdRT6A7j5snmTYwKhbW7VbB1w2c26Nmhi6Kevoiv33huRYNEnmQghzs5i1Z6LmN3",
  "key4": "3MUajKXXCSmTsV6icWMUcCCdFUyTWpYgnWiD95AxBB6MPyTK2g6x993E8vQ7n3Vj5Y5FRpj3Yk49735S6t5bEgj8",
  "key5": "2U5fxZiKSsu5Z7XaPgdwTGpiSi4FyKC1HpF7zsAWS1Z1fquH5g1bqerg5sH521MU5pqqpswjiLyuWEcwxAxUiBay",
  "key6": "2uHxigVYRnrr33cTmebq9sYjALajafG9RXQiG8SXFEoDaEgv8QrrmKwu6KwZVxx6anAxx8w3q4doGyYyc4ueLeUU",
  "key7": "4g2uW6vBA5jsm4qHZ2cVbpemwJZcmcB1fhaLBGNBe5wuPvHiVx4wUsWYZkXrEUTVQz8miePCMYjfjUYR5YuVrrbY",
  "key8": "42SEJKsgX6x6nBMPEYhU5MdLFPUokfH3Mcv5MZutvHkCTUUR6PNLvEeXqvzPvGNR2vQXPYD5HYbT3MMgMRjzpmaG",
  "key9": "F7VAz2C2MQ9j3CgrapBkbdGJVyaV5mUCuQGp2oJz5vUuLK2e7kMqNiX6tTXW8yXzg9MQAhJeqTdzGFihZXZrQF5",
  "key10": "3KqHZ1CGEceHoKmHpZ8LCL7KB5oRMMpP43dc9fVswC3s6WDUXG4XhHqhfbShiQxQ7mo4vud5U8ZTuuebAR1rVJKv",
  "key11": "4QjimoFiec6htwn4QUjsN4d1p3Ktd2TvLSLQaFhqnV3EcXS99tuAnfxc2WaSAj9vPAxSr4UPcJEVdpPTgSd7LL4P",
  "key12": "2EzrsY5YaQLbPBWdkjkgsaM6VdPtsEXZakdDJCRC63PVtyxLkdiLVtuan7GzkMKMSSqcvLc5JHcojj3myquEpYCo",
  "key13": "3Kueon69k7pYcMyEo94zYe4Q1sbyhZJMR583G8ECrzdxZD5DNzkrZ9NJfLErYz8CqhCNqBJWY8KMh21rMpB4ftVK",
  "key14": "5L6FPcqTUrJaqZgGBa2fHfsA4pyUy43Wro76yN6pvz8fWnRZPYhTYhseRGGuZWfKxhTGdWXb9PQ3E9PseZJBTHye",
  "key15": "5G6VYfbCogxwJiHJDHUmv3WcoU8A3oFLuLiC2LACdFtTQY1epfqiFJmMsEtKouDvim9MsN2NLqDKD4urT77R7WFD",
  "key16": "4XzYNxf8CjQ9jffQnG2cKBXcPvtDTQse24riusCDnA98rfz1UxHLR8TKi9aV9HjzUzdBpo8F3mCo2AvUZpNKmFsg",
  "key17": "3L8QAzaZuuRsDdWA8jr25qGuUs2XMSrtJyu2h67hG1eZNBMUFgcvVNWEazBHF7LjdVFyCJgeG1WkWF9Py6XJdbjv",
  "key18": "542CYekMqWh2W2TvQRaW7sEyZLoBdtCPvx5enNmhq4fVqZ1jnS27n76yUYVY9TXGMNT5V5vyeMdAUMJiM3GTvE5B",
  "key19": "4R4nk9QCg6mKCgT3B1Bh3jMcKNm8KR6EA2JetHZCipqum3fBpG7Hrta1vgZ5CWH5vE57ReBKCLH1AJpBJapQ3Qoo",
  "key20": "5ubrennw8M5SXqppwSC2PgTYAjnCS6Te9kwePvjqPc9oA1Cv4bJdbxZ1pW4DP9PopcZVPwNPFrmqjAzM5kzLYvmx",
  "key21": "2JhokLKFRhXNNNqYqaRqM9fW4jr2GpNQifvU9xWaH3p2xzVPDv4Qmb4aPJJhEy1vfK9RX1JnzzeYVmRBJLRBad7j",
  "key22": "2kc66iRLW7b4HuKmkiJNhxufP5K4jX3uyu1SviNK7wWAR3r1be2FLWJYakjZMe2ibuY7x8vsiWrCKr6QAcPvrSPw",
  "key23": "BxyEnNTbZutsH3uJudUACKTceCTYhNWW2NNoPSQk8JtC32brMfKbbrCzyd7sGPfDj3sCcmv2tqV1qn3AvagdQF3",
  "key24": "PU9Xh7CtNNB9s3Dnr6nrCfH8ka2DKwbPJRSUmHATfMySv989naMXiNjjsSsq4T9ycStyWr6mST4bCYiy3UfPtSZ",
  "key25": "GFDX8gB5JNjErTxvknfCKjbRTHFV9uCGxMjVitQosGFQtSHhRKTqXa2771MwYYyirnYKDiJanvHyfVgPX6wbFfa",
  "key26": "41VpZpz7oyHjyKPQ82GidBxFbCwypQ1jweLWdzb2FVfTrd6uojdN3ax9ZFpMwuPeu6d3jnFJgwDkRBNiw9RtcrFm",
  "key27": "3mafyJDimMENzcJqdpPvmZNewZnu59y7RZBAq6vbuFeQfFbGfv4ZZjSkvjzKcYTM1sNv8qpDLAJNJDyE6ETup3hW",
  "key28": "5bEWWGWe85zDujieL93JDdq2wfefw9MpwuR4179kExFKyk91N3Twz3eXYFrjKF4es9n9anbvuBbifh7Dqjee9X4c",
  "key29": "mZaw1qfANd4VkvybSwhVn2hUXMEqxT5N4T5CAaR5Jh3sqkPY3gSyfdaLLquyAuLkxxFtmnwpDLVChutsENxxJT9",
  "key30": "oXaaDddFMs9umb7FELCZ2PeLB1HjvCzEnNaZohkHesDroEtUUGgxZhFhEuXoTp7BPFgpFWhHDjELHNSbdyGpyqy"
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
