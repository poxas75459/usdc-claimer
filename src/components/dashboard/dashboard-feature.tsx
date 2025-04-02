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
    "53Ze4okQ8YbBVgFS5zR2Bzku6hW1ErxxKFgtTNKmVD2AhdeK6JWbDBbnJXGgPHCsbx6nnLwBbPU8gotzy5HWKZei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BJXoYC9AA69t1j1rsMx7iwXQrSVVoXfksYKGHx158bFTZaXfsqAU9XXtLsAHhFxZjf8p5vSovqbuZfrJQovfup3",
  "key1": "4xx3BNdLq2XkNawMpcCmogRx14kkLyWB98qhe75o53Jo2YJZ5TJBWV4pQVVsuswLd94rvzxinAhut6A7sBGAksA9",
  "key2": "45eP6Pb4QTUhXe2v1joWrPGf8k1ww9w7WeYqp9mGSHWJmihxEiE7KfYBQ1tBXF8Bj3ZBDqCzCSHgbEXJRp4UfLEd",
  "key3": "2cqUWLSBUnQTYPJTTqifogBjMJUUor2zz7B9mz3skrPk5TzbjxqKSByZsoX9DKo9kU8kCLV34YGKK7v93fHLv7a7",
  "key4": "5JuiTot5iN6Gop3jLunqy7vznv78yQabwDY7soFRQgp1TbcyvJkDoGybAB7CPjob8EfPjSJ4hagdiu78ZzaLLJUf",
  "key5": "4jCNhLj6R5Hfxqx5Riuyxe3DV3MduL6JNWNaKRqL5eyauNUWQafEgA3gGr6p1hbpZrqp1Zanrk95WCQQq1wp7sBZ",
  "key6": "2L7nhVqaXxNVYCtnBLu6cgKLGT9GHEjpVFnFSZ1KTRyTBaaquajsjf93tUCCGPxsp7b43ZRBrMLWwGBw6BpJhvmT",
  "key7": "2Z9mfAc9s2wFudtagps4RhXJcaTMCPAQwAPxkrbjXZkVYi9RxnYrckUjNj6TJTAmGBkKx6v5wgKBYHP45gK5HwmT",
  "key8": "Qv6vNC5BkakqdfnUGJekLLrvxJSfs2CNLzFfvtWbhVcVPL7J5fk758HSJPVsLcH6cMFeRAo1DYo9vT6yX2dVUoL",
  "key9": "5y32rSVDmu8mhDho1ct2UD72tYME9v31MFfw58Vj5JTvmg2BuaAPAPYy2ww9K6mRdvJXVjT9S3GkiqQ9Qi5MguD1",
  "key10": "4Y6s1btBvp4vPTteQaSK7kixm6d71xpwDsjRJkFgo5qsUkFc86faqjUP8rFXouKNcYgXGKSRuENKJQhdsBsXPT9J",
  "key11": "5GKEAZEVai8pVa6axsB5CYQc5EL4uxbv4s6hpvoi35Hb8JWMpNpJTLH8PBeGtpu4dBBTuafZ3uiVPGzxhq2Yx4Gh",
  "key12": "3vDcuTg43SqHtr9cHrJDYaJAkmFZgadawQRh6U9szjXXcKhk8F3hLaT5xkgJLyMyGQvAjv29fz3sYQxhzhReGJeV",
  "key13": "ykNgDsXrEm5ofd1oNkzVM2tjbSoDUtLbpBDgzTyiwDnhxhvxkyBLftymKCofhkKh1XYwPeRvPW1UhGe813CRDqp",
  "key14": "2urGJNMyAmGgxdXZnkuTn1NkWLE12eXHV2c7vbF8QjTUX5vVErm14r8Y5wKHqXiXdey5iYr2aBYq4GcRVpiE2aML",
  "key15": "3DqrPcU93cmPNh3ezCMTm5SzCKpAGgfA2HT8dQ8VjUoaAZjbPC1REziN6Gk4dvBqB6mVziUMGSgKZpAMsWXYRCRU",
  "key16": "4Yfxxhoco7NtMBKnB6RXz4FfLQ2psSgZbUWEP8DicTEX3fYsqfR5sE1j7FrAz9GKSMqncB6159XNgi3XQQ6LiEd5",
  "key17": "4nL5a5XLM6NQpPBu3mbgQ5f7bnyrMs24GCVbszefD4ktSrt4jk7zgQXQZVDEFzsSsdUBfjkbzXXD8uoaFV27A2nj",
  "key18": "3cf4adNeszFAJFZ2trFrrjFXeJP5n5j9b5vKgBSfXbU8z7rM4HGqA8ydKZZCiaEfEgZRbHweHs7YhG82kbaU1U99",
  "key19": "63yT2ugizF23QQwdgUJ2id6HwBVwdDeXzoWQHvz5wU1rWUnJBtZPxW4aJ9z7GNsDVsrXK74veog2UJRJAEDR4B8u",
  "key20": "2A6vTavcwS9M6BgKjkcuKwjgeeHXnu1vrnPTjyFcW8Pnc6MUHzSskfe952mPW2opntSNtVgk1LWoWi6B9XVbuTa9",
  "key21": "2eWe2MiMZYGL3kNgRfvAMcTeyPKRyjZWiBKb3FkLfLmAYLR6woykXooN9StMxyraykyvDT9NP7ZQq7LSWCY14rNu",
  "key22": "4qeRebcVqf2TqCqdRFvu5ZaXLabXf1iKZGChutgTpXhWf1xX4cMPwQBcWxYW2fEnNLkexMJirKzSjcZpubL6ef1T",
  "key23": "2rZAiRpr72f2XfR6RFpAZLFz6qsfLxa76RXNHGfw1GezM5WPbE3N355qgvkizX2bgV5Rkvqg3GiDiq1npnfbubbv",
  "key24": "4MBNEuVuQSnnQytSGP9wywiZE3qaqSw9CeiTfL79hxUEFyy27w195zwRqqBVu7mwYbcTRdNpfcNwcVEHesm7zWbj",
  "key25": "mMJCGVqdSzz3rUqQTzaRbnqs5AcgmRBUuLZfuYohPcoPfiKBpZXWkvtj2nZBYpjGtUNLMr1X4dtSy6S53C4yNiy",
  "key26": "56S9CTL8rSQ2oCacLwga92YKh6RXT8r8Bwhxb9CmgT3iZXeE1CVHxwjDVeRBWXTf6AAHjSuTLsHqApjPkDhums2E",
  "key27": "3unjcj5G4ZhjzvVCJ9BkRJcW4NczMihKtRTv2kdP7rXay8b1P6dosZQUXST4LhHqwwuq4w3hWHCMaQUTTqMg1pRL",
  "key28": "54sw7FE1qWPeAFqCpXCw9VFNs7NJBW3NYQ38F53QMvwiLDnX4ydgrZ8Y8gKz5KNxHA9o8gqkzctyRAXrGSakNxdd",
  "key29": "3j7j86WqTArga4THQLuqSnseq9ZdvLo9BcpcXhRbSZVEJELWrKsf2MYzfD7DafE1AdHhjAAZdhWNCHFLmra3zQSM",
  "key30": "65XCTD9YXW4rwrZNpJ3jw72Q14EsKsCwf1R2fTJ8kiUL7PutEhwKTPdRo2SKwb3B6x28NoVCgkomhy8XiAk7eND",
  "key31": "25zBcxzdq7geRD4KhSXgQY6Thqq3gBKE4PTPasFZ1vhYdbSNwY4E5Qx2YTfkka8ZTmiNyF6YcE9ciiedpP2ajWm9",
  "key32": "52pSWsV5FLPReYSzJHsmGFCkjCtr1fKfPXgEtj1rdZoCiS8PXeynHzDk9hz3fVu9pqbdDkrtarmNFuXS1ij7utpW",
  "key33": "o5qpMADEe3V3JvxcSQZrQibFCSwjYHbaQWXG2XA2iPBC2CnwZ3q72yFo83cARf3zcRuGkxQLc9uUipPbMFzaPH1",
  "key34": "2onzHYEkxrfPDhPD8s4NqFSY1eofKc9K9nhZm3ysaQm1e5YAoDedsnnLb8hNP8fyodXTf3NRkX6sFyyWBz5NaWHQ",
  "key35": "3Hc42uv5Nv9rmyvqm4D144uxadCAxbbfE9BZfKLpLGMHdrTPNHrvCp1GVC5NKNmZuQKWacQuNJJsrFMk7pkD5hQr",
  "key36": "2pbWVPUw2HYtxV47dmBi9DhgQC9ANkNGGEmWJ6dtDEmZeRaeYgbJEoLseknGunr4Bz7NTWXmGDhnWRcSvzYNgraK",
  "key37": "5vqTiaARSH6sJcrg3voTUi39X6Xcgh7ziV4PzX31bFYzBTX8cJjpRsXtRHeVewGgPbcPiApoisi4Uz2bKu3aEPkK"
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
