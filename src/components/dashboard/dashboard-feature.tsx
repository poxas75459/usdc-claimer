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
    "FSYRCXsQPtzEtnACBtWrpJcGs6GVjTVf8FVDNWWUogmJwE8b8YUANSsfrVzpbN2RAQarssoK2swyH9o47Hifg58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21qXPURCN7jEg2dYUtw6VKnt5qp6R3CXFiL5Sy1E7no5t3FgGq6NdpYeWZYYmVwL5SxMt9LcF4yAEwo3KrVGDbGd",
  "key1": "4T9pXHQMRfCjemPorSeipQZRKdaARkAs9sFWM2JrLUnnS4MaBXasC2t4rLBj4hM2yqFK5zfLiNV9dHBuFRMRvST9",
  "key2": "41WEunnhRfit2NT477W9TMK8b8XziEYeo9v3R3tf1MpHj7cqtg26hAxLVcyvQz1XCHA4n7ZmHbWCHaid8pPygLPX",
  "key3": "4orocUYzMU6VohWuyh57PkqK8hdABVvLADYj8TgxZfYec3KPhh6q1BmSPEWetJ8ipUq2W8Xi52n4AR7MhgCg2gUk",
  "key4": "escusSNCmDk7EXRRp6nmsEnMqftPSreAX3V8e8ynvy3Jo3EgJT5NUFMWWvMcBn6nk7si9snPCiFtwiLn3ERhju5",
  "key5": "eArhqZgDqgMdmr27wHzkyZJY8KbjwWXiaULSgb6sgd1rBn8Vy1GSvuP9p6SnQqgqjUqMyqxSPUuiKAAyBgnTckv",
  "key6": "66Tch4CEeznrCRnjKns3r11ytUuQaHANKbatYvL4zSQ52EFvQcrJ7grwib9ekCdCRzrh5TkiEDa56SZJAVMdN6Je",
  "key7": "5pKs7g6tsATYUGEL2nxRu8QToWCC6MoZwG9S2jfnZc3KnhSDA6cSGfGP6PLmsdvsJEeto1N7tDLW6mcrAU1Ps5Zw",
  "key8": "5UFrMXBxQUCFNt3SJAhjFMsTv29makjTpmnqrxR4ugeSWMxTDUxanWji2ifA23pyf4xvD7ced5aq1Tug8Sg1WzSK",
  "key9": "4ZX2kRy2hT6kmtDcciGjuyPAPt8aaTreV2tKjjckdfoW1s7aEmpRSjfQaUWLR93dxKaXFQzv17zsViSrSbLEeps4",
  "key10": "3dfbXp1XkpTVe8BRtxLyZ5FvALuBxukQ1a3yJZfqaHGi1QU12Y8exph1HmRntaQTNNDqQ7U6GDTNMnwizqdnmJCW",
  "key11": "5bVqRrFHyNLFUri3JHdhRmT9V8uv3SuupQFHVSbTPo9A9ZFugyU9REBs7hzCbeGZ5ENzSWHtXR1xPr45WUuW8ndY",
  "key12": "26ojw9zzmkQAK4oKzb9mXTbY7SZ53pHRNGtm1ZbWimFevn7QksRBAMYaHK8UU186sniEaoKHs1gLbaghRs6An5rr",
  "key13": "pEC3vWeuSA6afFAb4LwVZNpSdJEHaJjbrba96XT5hX3nYkpTq2Q6xSLnXoatJZXvM4D5CxBoGp76LDcKNGxhaTF",
  "key14": "61VCUNWWtCwpCDopFCVxcCNrgxiQj4SAVhSmMnExKbs2Z7agQDR6yqZ4W7FYog6BxSq3B19QLV1MSHdSFPBjSDGo",
  "key15": "5BdQkPoLBbkjmpCQsJ9aBWEFN33HYqBw5jSRoWq8TtxVWa3smRWvtWjjyEsqEzMK3C2BFUvCRxENNGtTFfRi7T6i",
  "key16": "2hpCctotrGP9TXQmW9FisJ9fuVTMzRmWCxpk1xoGJDPhUJv3tssEX2WZMMBQrZpRjwoEzedEmr5AxSKKV6qm3JnR",
  "key17": "5q7hdZSM8b2oUV1PKcYU7Q64E7nU8JxVUQyFqDVs7DgBE8iwWtqLJzefh1ybKcBxfVX4uoB7sC2FCC1mCpKCkzpL",
  "key18": "4ehVHsqkLmCWTKZsNYj3Bu9YPnSuPbYExyFpPhSrRekX2QeNkqcqyWHgNtFQEppwM2QNygCf289bkSCudT5KDhq7",
  "key19": "5jnufo3tfqnQhr6nFrsZiQu2gYJiXxaGrKqqh9Xbu3MXGtGaSTYQgSkBsN5qEbXFjGbdZhUrp5nkyt5E9ikSfWfj",
  "key20": "4HMii2rz5sggGvSHzWX84xDLvzXRj1SUcR1prHPtzWVhBhRnHYePsfHErcZaJs9JoW8StaL5EqaKst6LKSo8JFEU",
  "key21": "16Bwra1bUELK5f5JUjSeG6RddvLCs4SDRY2m8hzhH4rh8BsdfyhwEE3jnFn5FNTGiKbHeDuE3fduW9W7H4Qbfyp",
  "key22": "o3nkW2xrA2eSuqRareJFZGT4PjaiHpndWBTQgzja9WDxsfMwFW1e6F9NhytQBVsKR3xkzsSyRcJjSPwzmNjqfK6",
  "key23": "3TPQQXgEyPWS9D4MZn84hna22AHyUuAmUf9UygU7Jgv2SkhpYwnWWKTTVYeLVdQmqxb23RPFh5qRppGsL8b3JV1m",
  "key24": "siyYeU1Ho5K3Yq6W9n2RqPXEr3degbdGzTQJwKERv2f5xa8R1v4eCRphYFwAiZ5yqUKbaEu3iTDweoLEwJdjbvX"
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
