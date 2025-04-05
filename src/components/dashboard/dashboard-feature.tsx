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
    "bKHLRA5EPifNKvbinmEuKJhcrW4CccwX6BRT9nxG9QE8Wi9MeHnTshznKovTNMBSz8hHoYboQiyTSNMsjgxt4k9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dm8HvUNJELotxe9aucWFm6xFDY64fzcHvoKHEjvLWVVubE6Hs2Yk5jWjTRbCWyE5W6w5avkkca1FPmv3YCNnJEK",
  "key1": "5EMRtFwc2ZjqhMuTq4GofnfNPtKek4xb1J5sNwXoL3fJxTFwtkr6Bs9rDc7t1PJeqdGPDohB82uNHY2hbQprN67J",
  "key2": "2PrrwvjiKRnMJq7aPjokcULRkoEkJdNSL36GykRUKcrsx8egDkigYK8J7iznNDxDBW89oWWqxYKS1NDkDNWL2zBz",
  "key3": "2w6o27qNc8mL2Mmbkj61ddaZDsWCUmDmgEb1H2b5xtGKhBtcgb2s3jHB4PGHpZXt6K5t7CPAxjD4gbAEizr71sU4",
  "key4": "4vsWack7Tguwf1CSfKJqrrNEug3RKwmHj3QA5Z1SG1rPGTuHv3qA2tTHMkj8tuFByfMnhPDrzPq1vBobxuexE1sX",
  "key5": "4sB9tCfsZNtRAXKJ2hcgyQbmuxaG5ckwyTEG8KUA3SUToZScdh7D12KshZgRXAE3MhmCc4esGCFT5wk4VWoavT9w",
  "key6": "4HfK2XKE2ZL81KYk74VVwNuVcgW97t9MAEm143iAe1GTcd6Z4mQdbJMiApayA8zgmDxX656F9k1D1Ztc4pxn1wvr",
  "key7": "4kH6GuWYLjR1Z19f6pqjWGhQ4eTTq7Co9LERKXHPtRQf8fcDFSudSu3o6B2wfg46hWz3c3FfDZsviVd8k375P1Ko",
  "key8": "5X6bN2955Mq8vSusqewxx2Q8smHrqVZM5rQjCkQWFNgp6Ax4DkjaTv9Fxxvmoh8cJtDjN7TfXm9JSZ3ckxW4fcxf",
  "key9": "5Hin3G7m7LikenP91HZSfuRKjs9XDXkPgJ2qinKrLZLkTkT1mr1ukkoR9kSDzgWNNbdcQ6UU1f78oyM8bs7Gqqhv",
  "key10": "2gG3aWYx8bnNDqjpEtESpr5w789QyvAVYGuCzbeX4BxyDjpJhnkCw3Jg3j5CbnKFgrPs7aKBpFHhGj2GwavgA5iG",
  "key11": "3kJLzt2pbapcmDvwpNDS4q3kyhFMhYhFY7axYGopozsTkJiPtCzLbD4N4P6KW4QafKXDLpGTt8PJAYLzyfhNRMzG",
  "key12": "4kypLvwb19UQeJvVMVG5764wh6pybB1XASqZ2xytrGK92zh1Lcp5uVdiWiWv2SQsTwyVbhRm7GBz16x2BVFGbDcA",
  "key13": "4iLTaMHMtttMDJ1ysh4THLBsAc7qz7XAGFnpK148E7ppfWmGb77VN8yWxvhF2u9t136VSCpzGZaFDN3EE2pwCd11",
  "key14": "jbeFtGrQF44wsxaMJi1v5JzDSa4nrWEP1TC1pcAFm7tjLrexdwWcYWhLNDBsnuRjZSZrjeEwW8Wvs1TaoVg7KKR",
  "key15": "59j9H9oVUQWwYUd5iEKtvJGHvtyLKdN51r3cBZEmYEcfYqeKu4mLibUAn4zZxWoJAuRSq8yVfQVYuswbgyMkhYU7",
  "key16": "5AwVAXQ3J9qfwXvNvNtcJuZTHkFKhcWGmLZe862uk6JBUvVu77UV7jJqfNAHkU25cJi1wjFWHEjyBLWY7K2xhqTR",
  "key17": "4iKidg5AonZx3Yfjw7t3SR7ALXbMXnaFoRKCzh67sfuzLPxoxnhEDbYLkMy6uh9D9QrpujLfaTCK8iYv4fPz9Nhj",
  "key18": "3B41y5UkipHSmq3t84p2CCgrfrprUCadYefZmcVz2g4tdsRTnmxRjppzthxjQPG7Zq3tnDWyRbYoL1XeSm5ApAxi",
  "key19": "Q8M4nVeZYfHgS7bFdR5d6hZBwuE3FSQvTHxJJnTuXfq7MiQoNFeH8a5KMwWWkvVUotjms1KXetik21nEtLnSGbh",
  "key20": "545TvaDoem5Ms2pBRXtpgcD7CFW2oQ8MCi8n4gcS3FU25JGi2oLqYa5tZUqGUEkT9jcM4m7MbCaLtvfrxRjHVuto",
  "key21": "3CpqkZhDsThvtDgzjbnfP8TgA4qoBhzQgKAFvVU33iSL2qWCjY86nt11XSDmAjeXnvz9JcqGCmPhJVCp4Um6M1nC",
  "key22": "2iGzzgrioyBdWmipgMBtmtd67o8CEudT66nLt1gMdWCztxU8pZNw3f6jFgtsivAr8LevtFtLTBMWoFSdRQ9WL5xM",
  "key23": "7RE2HVEThpMNP2s3dr5iSyoXVwg3Hdx882QtDzoX554jbeedmZWQjW7aqgxFXzWzFbF6ZfcuVZJh8u75qJs2WVJ",
  "key24": "5DTpioHjZ4QCfPFgjoEDM8Xt2sefiSN5VzB5X1hubCvKEegMKufbrHhpFQStdjjCmrUGQsYqChg9ZXMJf7uhXv2w",
  "key25": "236H8puFy7xmGsb6MSmbAABb5uKJaFPMHBwsgicedphYVsNHRUGgunMuA1r8yFhiB3qtN4mvZeWfGdSQ6PSEyzL2",
  "key26": "5KbgRcG2rtf1CdyhSs8kzkMJdjyriKs6SEcfbrJhivxMm7m43qeL7fRKeYWSonTZAQYpfjbun6eJTz1WKq6yzSsg",
  "key27": "5kFeVnRLr4NNtRP9bKe5KGnmPL7yGzmAPyxF2Xv8bbUp2ybybf67CycHwC7bUA5ijfW85tL8g7aGau3fceUCVBp1",
  "key28": "4HPETEtJPBNkQ16de5noBgLuJX3VcbB8kUT7P3hiGWTdLUNJpeNz5qRVhV8VLaV3ZSdqQqUAeCmvi22syvg3PgVC",
  "key29": "4XzKVcvmptKyj6GzYUgLVNL3f5KD9mS1ZpfWM9biLAWMBuXZAGnJvvKCKhgxjoLaW4MpR95H3u6MYALZm6etoHsY",
  "key30": "5HM5CLcAZXANvNmaXdNdTzgH6WX4b1dvSZD11qrqDaWpsSxpPAqZx4cSXkrcyyqgrfv2n8iqrkZGcdF1q2pR7oai",
  "key31": "YmbwD84gHJYZtssKDm6A7JMAKLFUZQKhU5mGToL7snuTpfqFUeiZQnMTLdCtWxM4LwLHjE5pJQY22KnV7Kudtgp",
  "key32": "21xLdrKNhNVaVVeoke9NmyFTuxrDcWm7nHfV9cEsHspjQjFhLqaywcoQmi6PZG7ZSb6WqHtUL2XEaEuDpzMEEtQz",
  "key33": "2dijQVmGZKCw8Uy3iPQtKddLXKKNp3GXJrwFJsu5oWuSSfXjmUn9sxQPLdtioH8qCfQqdB4DKCvYrzefD833gwDe",
  "key34": "5Am5Cg2j3eKoctSeDo9ToFT2JRx1BgxqRn427d6ZdjcUytf6PTRJbanXa4SdbKnF71ZDdJ3B7hPy8hxW3NQnghhA"
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
