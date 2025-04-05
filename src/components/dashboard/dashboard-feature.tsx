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
    "2SX3k7nupikogZdcizrWT6Xc2m6G4ES7W2aio137UnPeZHws2RW5bkDWThjzWMaqEWSqYokUmSjB2AqepWPox47h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kXmMBfmMDoHQSC8iUQa39qFNo1oCLrDXudnBQuLRxuh9dSeKhicq49mSPsfgjkwpeCPawhY56UeE5BPZsiWWKsh",
  "key1": "4RBKAvmgRroycHhcQrf5JNbGCmto169xRhw3jLpFcKKFD8eytTjfSR8A9txNW1ejiVNYdtczGQmScz5XNLiknU29",
  "key2": "3gz8k9rQY7x1HvnJmusEj15A9gEMwLTThDRhbCdpjkFBFk7MdxaZA6RDifskUjbsEK7rR61zQ8Hm8XGiq49BypZs",
  "key3": "58jz5FACjBXLAR6GebDdJ6VBfv9jqYRDUmRF9ZjD7q8K8XThzXWzCkMaQVhXauenuPTxFkFzsCRTYqgidEJGB4eh",
  "key4": "6376w1YdKyXKTgT1jr8qYUPEfA3qYe5LeYtzXQHaSvaQhFgiuibd1jkSqs6HkM4airtRtg39kZrooYd4ZBsxQHGv",
  "key5": "5n7ve1wZh1qZv22nE6NDVQf7TaPAPShat9D425YXwzJVdVhpgrnLyybXQAdmQtLTe17DhXgnusSEoeqWTDi9yQUc",
  "key6": "2ZuNZGVyRnRz7AkfJVzS3bApmeJBi9UGPL8SwHfChJHmKxeKcgKty9uGo61tngUvwmLvdHHwE4UiTzZ8vHwEFqVZ",
  "key7": "3UVHESHVs4e8T8iXSqXEZALEn7CpW6TPE9eqLb5KQqAmbeeui6Hv1jZdMbM6jz4amkTJHUropVDikcbRvVwQbddJ",
  "key8": "6634q2MWEBQnf9niM6bqjFtNuKcf6aqJuCsMQQJg4qw6EP9jaTaagqP5iP4gjsgA4EgQnT9sRQPnRTnFDxirtMX8",
  "key9": "599MK3gLS2gh6bfAggXg4vCJp8eYeMnBkUm5SssqQsyt2hwn8QHv2NvZaCWiTnfPAm3N9b2MP1BcHxwxxXPdNsLv",
  "key10": "2EYidhfCsnwowNDogcUbmANyywX7Gg5STcSaJ4immUtTdiqJzpwXnA6eDScB85URWq8ZLuWq8E9JczCRHafmh8u3",
  "key11": "35hZoHrZpwQ1csVq4FUjjBHNqAbbvx4fKsLAQsA9evhaEDUjn7KUFCyA4hsM5a7UGXTwf1FVfA6wu9kR248WcFd1",
  "key12": "52oDrLxXHWBnqUYEcbVEiKPZaaddukDbMgy3kV8uzHDmDnVEWjMXHr81e34FyifFGsKvTvR8FRmqGH2bc6TXQSoi",
  "key13": "iQQKhWMfqnkeCUmfiNdCuTJn3GLAhUmRW7GKGmghxpu62b979BYp65cP2uRhRzzuqR31m7ypfKhPSXf6CLtf4bj",
  "key14": "2TtxTzP3Z6Ew8moF6hpUrk5soM1AsqYTkaW7KqhCke8sa6UvwQcB1jQuN1fLmyAsppbKEJdYdKAzZjmwzzdroc2x",
  "key15": "2bofFiDEpESt8qDWydr3AWWkED9BV1zX6zNKaUaRki9u6dfe8PDYuF8JWBKrp6SwvncGyWztqCYqyacsTRyhLxfC",
  "key16": "36gMQpnesGMYiXy63U1JpSRmvD5thkRNY2t1qeUyrDF4LEBkpRmmzcLqE7J3FpVLT5UdFRCw3jCLUGHGKyj3HCXH",
  "key17": "YLASCu2uxNnqNqSaPR35QQvWLgHNtJeKu3Bd2ig2w6nURwHvvY3FGKHaSu33sTyTDDaSn9Jo7DhQ94bcNsH8pmw",
  "key18": "4ixh2TwnF29uFScqXvrZkKLnF1QaH3ZZBYUmUCBPEb27ifpHkmrjcTeFj5qzyjhSZYuLQTDEoubdj6CBfF95tdZa",
  "key19": "3ejFzFXEywQrj2aFaGwuNwQYfydCw95tqf4HhK1uxkvuVYuuUTgbgWnevLVdfxaAJhhfeERQkyFiNVqaZo5TrDUi",
  "key20": "4MeCqegV9qiMN23NBC8ipF5EUBo81GxBVkiKKVmW4jz4PQ3e6RFFWBpP5hPQUrU4NtjapiAaW9vU4qocnG5fwVsR",
  "key21": "5CdDsWxSDo1LKZnxMRHaKMbGknFUdSy3cvEGSnZYST7f5UzekBZEEcyYMR7x5wVPHLyPdp76He6EDTu2oMoLVj7",
  "key22": "2sPR5BXF6yi5mmnYX6CWtGLqMPZoNPSExk7KVmLJFVyEqStg9H8MZuaNcAyoaUBw25Ku2LSNJNd9p7uYSR5oLmhY",
  "key23": "4hAiBvf28p4jFs943Ngrjq7L428nMX69isWHW2RJZpPiqBARx7WdNCez8fKwpZokNVNAwtV4NsRPxhzxBinR8hYm",
  "key24": "3DuHDUNMQcu5ENrL5oAsNy3rg4AZrs5G11Hg6zsorGTAfQYiET4s4rYWaX7Ts2Qch56sAC6djt33HkK78hfk74Ru",
  "key25": "4pgcfzdQmJKZiC1uyA39y7AnuGH4EeMFtJDYTye5XqpgKkdxsvQQRARpHfsSzxmierZX95yP99mJkSYnA7d9tuM8",
  "key26": "5DJJCh6RAhsim4YsvL91RVVQaMxzw9ZRwdoPKuS4ipE328WPNw53xDaNWzw85md4BfUPetAobzz51SMWg6YDDnxg",
  "key27": "dJbYwqNKjCQsiptd2rKjf5wsc8RbQvNHgQcR6eiUGcC54bC3qTJMtJovg118JzcAZoJmwV1MMgcTXePEpBdpFDh",
  "key28": "5MoxCA7KgDyp7rywDMLJebnWy2rQwkn2qFMzUE62svmNvXje1XE3RBwTCzkktxyxyHCNzLZbvNpDXU3xrfD6ioC8",
  "key29": "2bdt2oExqXKkbU7Ezx5dUd6V8dpgXX16quFngKZpZdgnATfVQN6f3n9QSo1rfrkApRYFVK9r1Y9soFD6CDYy5mLV",
  "key30": "3TjqfyS1yJVq9Jwb6WYSqsvsGYbgGALAzTnzy9PFDULVQ5gf4Wi8huoyGEcMzeSsX6SQ4fAyZkTLaWeqei2bxMx6",
  "key31": "4nCoxJ4p8kTM8iTuFEDDY6yyvfoprAxPjP9ZFL9T2puiTbBbfKubAKtSRxcbEwxtB5kQAvVbt42svdruV9kUU2Si",
  "key32": "2UhCCLxDcwvRjE563g8KZWBhDVAPncZT2e6eq6K6ixUYUHkows4X9SR4w9M8f97sEJhGgj4RWNm6eUgD124ArQPK",
  "key33": "2sqwg4Br7Tk1EiPhFmRPtXjQWdL5DtVW5XCV9gDWiovfyRC8z2eF79rL1NwFybDLKXS3NnGsmjXqfeFy11DegzqA",
  "key34": "39bpY8NGHy8DAuLTVuFwdjZjDeTLrBTyiyQvkKUqwXeiiBaeTdVp4jw6Uygrok6oiEQNUwQDTtUoHP2hdaGcgEM8",
  "key35": "5KPu6cC4sRNpusPx9sPjeAsUqVRW4dyXXPnboNuRpbjhEv7vPTLGLzzCuoyjWYjTeqEwSHrFBvXxcjU374fYoDxD",
  "key36": "5o4DhFF8R5saw7kDg2QJgWSfPo668aBZXTVKFTMrfr9iTLxtdxpcemoDt8QZBHpS9oHypeZvESexMP4eMWibzqFK"
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
