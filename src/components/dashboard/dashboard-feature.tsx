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
    "2CFE1j5uxv9F2wWYF44YfZBWFP9vBKeQ4deE131kxRgu1d7FHcnkBH8vLWiu64gXuSKCPsmzBNN9g8wpVb6uX5Y3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aCzNzixSCAMV74ve2HUQmeyyZKJVjcTTUKNz8zaaNbQoocK8tmHt4fhuNJtLFfUSTvrnNEm8mEsdYEn4ADqAB8J",
  "key1": "yVqD1Feqe69UcqVCBSbECkahEM5WNHLB3WbfbnuQQ3eQTmD2PKct7pftR17XtnQKoYE88yjhanwbvvmhE7UW2bx",
  "key2": "4TNhgNqQTtDkgKWPkBAb2nAV8hqXDmrkhEJNaWBTJR6mxthgQQz9V9ttsRas1geq5WZi2etyyqpkPA3VEW4LhCuU",
  "key3": "5Ktg1dhRGK9xQo739htxdpqdsXsB4YBspj5Mhj3J1jExScbAfjcs9dcwWau7BSGsqR89iSoecEJYAVx8TpE9cY6p",
  "key4": "5EjfS7dQZUAfFKo9KfKT41X3dqrfh7eDsJioaq9aP8ad4vbbzkBybrwuMsNQwRTKW57MoSKe2CRaEDULj3JRrWAi",
  "key5": "4Eiaxz2qkYT9RhYGvBMGcgVJfDBtz3PJXTQKaNLUEVCttGJxbm8Z2CXmwuuNNcRYKgeouE8QDAtYj4s3PTghimAN",
  "key6": "58EQ7HtqUSfhuMLZprW93sy5ZVbSSFAXkQSYi4uffFxjJdsDtRB4PL4ZSkz77Sj8RKuzKfe32vY2pgHGZVrrecY",
  "key7": "3nDuFH7nbvjr2JCVtkqKhJJx2xnsjBtrGAk5w6TVFkwoYMkHNmjBkKAr9y2N5neJQGBB1UHyer1hKNAxw4weHuUZ",
  "key8": "4m77AoXJGNtwYHjy6NPZCfNpvDJaGTauCiDmWmbag8dQpH1YsZrwYkYjea1ARSZJnnMPG4zDRaaaTbsZo2V68ZVC",
  "key9": "5oK6UqUjRqpY3sSaHiGBREJUhYS1Y4JGTMnhhVhuBFmw8oYVmXA3hCDT9s6C9XH6DsPSUySjEBZ7y9CW89o1sEVv",
  "key10": "AdDVqMS7MajV1XQy1sKn8eZxevGHD3XWdGm7kDeTCgJ72vR5iuo5H5i5haQZLK4d4Zuw1R2HwNWYuBo97tSuMtD",
  "key11": "3SU4PfsWACJuHyKDoskr3WwtUwxEKfK7cuJkBdEF9FFQJ8hDzztQxyjjmLe1MGtYDK3tayykejfVRCsd6KTKo4uj",
  "key12": "4Y8MQbi47LL8wgab15ESViXkvSFgzyRarHF7eMJMJv8X7fx8oJW2R1qJKVHmmvni4f7kitLCxAG46UD8feCdfSjJ",
  "key13": "5Hj7rueEgCZFDqzHuJEt68ZZxyDx6LLLM5iTAVYUnCmeRRhFAmx2MjVQxJg8oc7RvJfqWFxVP8KfDos7XMUZ2uuM",
  "key14": "CxspYXNYHyvTzJydreD8w5uRoLhNxP8q8TgX4tp2FESay3TQeaLsVsvAajbJm5HyYBJdeJpiKbMfCcJT2VH2uqP",
  "key15": "2CEgYzrPzMkdjbNGFxvoFdSgBTm89D7W76PrjzmAA7PYViPzwqfxxdtTz9S1motxamEEHapRNzamR7XcKxEsu81S",
  "key16": "2HZQztpYE7NXprft8btCmbgx6vA1SKLLq52v7oJoGbTEeodRZPk72Q1re7NzaPgetCMD3Apg3urQ7cWH7Bo9vff5",
  "key17": "2fMBEixhYNtCxWWdyjuAQsrfKBA1ncCkXZBF1dGzfPMyuoBKzMJtAQpYExnSYRWCStBBRUfvemCiYPds7PKvrWhd",
  "key18": "NuiLb7V7GrmXkvVV1YoFePkwWf5h4HNJzybziuUranBFVYEA7PKgnpVvffyvLwC8SK9trG2CRfZ9LmVSwKfTiZQ",
  "key19": "2bxeaCwyt4Kw5fkDs2qACHASBtdBfRh2FKM58eJqPRxG6ZdABSJVHFBGk4J65XdGGy6Yf1h4tUSpb4hGvL6gwmtz",
  "key20": "7jk7xHMiipa176qJctC8L4i3ZoUUqPAoXGG2bugSZdmRwxC6Hk1GZH8wyVjCJpBEWGnBnvFW5UWatsGYwHfT5vN",
  "key21": "3WqfM1MSXuwVQdDRgqEydfj1YsEHwbPupGhfzeXTQz57gpXwJWRQT869EiM2nXvPUaoPdjn3xJegrSJxxYAJ8Cjf",
  "key22": "4ER5qEMBjWFvfRpBg43Yp39YnAe7Ysd8fG96VA87UxAhXWHwN6T5bCWBqeMCMLDBBA2j8bvkENPW99MKg9uRTQg7",
  "key23": "MzxLeyd8zoBRduzKbhBVQJpziZtEmJAfr28my5aqdLh8uBXf54q54Yzvam8jiohNwyAyt9MARV77VmYkSBL1ZPj",
  "key24": "2CFt7pBigyXzohJgPjBcbYWxUWnXYhoUnd3R4VzdP9Eh83LRE1C2J3Av7nTCAQrZfAGmsyv5HBWZie16Rs7tjPke",
  "key25": "4HmAtmeaqgK1Cu3CzzkFk5GHGrUMhQJxWSs1ZzLMGJAKwUs3H5mY2fD1FXsDoeiCChBwU2j9cSBUXUwTLtV6sacu",
  "key26": "5nXcVzR31ankB89KvCdHmNhU5R6Qzt6Vt9VoEmP8Q7BewPeNnTARaejsNwdcpXgKMuaDjwZbPwAcQKo5NyaAPgfD",
  "key27": "tJEgFfj2tr6ixPBdeMXQvq3q4W4Cwurz47gSraXtgjbfRXeigTDR6QojcCnCs5RuoYXLRen7rjEYD7BoDUoei77",
  "key28": "5PSQpNuEPwXUdGmdp1EMyf2asiHWfq8s1TACJsqc4iRriAT6kkDLeRWktjuE3pVjyR6akBKT85Bmgdx8QJakknaS",
  "key29": "5ZBtSKZW1hfzypuKngbA6piPBnT8FSAFR7nSc1uw7GtpQKSB92HXZmNFh76spYUXGwxXdk92eREKAqMZyAsBn9TK",
  "key30": "2u7ckiM7HVvBmJ6r299DSXA75rGU2szYFjwaajDmhKfw2hTNBRMjS5SWLSdZ67pkiphzB8G9Ef671rwJ8GE4SBfZ",
  "key31": "2cAjKS3HftcgTRx744ajW6ntjzh9j6Yt5HZm4nbiQmEYcSSXQYufpPMtFr2xnnz93Fgjp7jn9monyEUc3GTBMFsp",
  "key32": "2SejZEgKkJF4QALfKYJuzhHEyZ6TyXtQHQ9Ds3My3XTPjQWrvqQkzygy99BimR9mjv3L5QbGPXxFqb1YvQyA8sp8",
  "key33": "2zCiXBjJ2xHFx5GThmp7ASDhP5u8JtQyZHrgSD4Y2R9WPdFtuTaLa4onkZBxfjuSFf6BL6996LpL1NEZNcYDRMYy",
  "key34": "2ufW8KoPVggpbC1qPD9qvM2e1nJTj5dvXN9ZcakXGetidgnfRvHxKDgU2xm3VjDtjv9txVBQuN3WQUi5cbVM7NcP",
  "key35": "585YM3WwLPgT1SbvJZNnr6WBF936dJXdMAjgSunQRSrMJZ2GmyfNgx3qfcC1HoZQV6KuDkkt9SCZNzi4hRYSgQoS",
  "key36": "jf2hG15nXKpBR3M7qotvF97HTA82i28vR6iozJRDfLwrNq3g5h2CuQfhRtvEnqZwY3Yydfca1D2h2k3icA7gJQG",
  "key37": "65av77YeSruEA15V7oSfYi1MPopg6u3hS8C1josgkq5ixz1EgRyh8rSNZHQ1myj39mwm8kVYFSsVq9JjThEumpue",
  "key38": "4NfJ2Hqnb7PJWdCaHs8REww2wWFAnUzkcPio7r6FCMmx9Lfvd112641FSNBsdX1mXqMK3Y81sGR3vFJTxgQmT1Uw"
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
