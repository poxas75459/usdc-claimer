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
    "33j9CgSQb9JXBrPXRsB9QF6HAzFJWCzePpRHf7AdyGV5iUY5jCdKcZRyexrwJQqdT9qzMZa3FbA5Y77iu3CbE4Dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q2VcZTbrqtEcn6xYWELzirr4gP8D7DcDSQBVAwrV4koY8ZipPhtxf2bPmQgA9np9ZXiGM6Kb9kwWTFVQBud6M1N",
  "key1": "2Bm9Tt8FR18YmodRepvcG8krTvZdWhCcfoCjQBQD8cSnsdvPYP6NQX7MjZB1CgQiLCRBPZ5kEvDsmAMc2shTtzhk",
  "key2": "5H57QNEjKbe1KFTPrGntVaNG8txV7fgS94emAyaQDTWGkY1RoznShEN1XFyk3bAxCmf8mSfaKJoxzbDxb6a5JAxF",
  "key3": "26gUTjjhcHwhuUuhNxg9a6SsEXKt5A6apceyT5QGFWQAxn1kVe9ws58sVCC7W6EDghED737usGYDLFgKczcVKTLV",
  "key4": "2VnCu81wcHgENncX9Py4ayxJBMGJornnxisfH2Z8VWPkv6FKKYWkAjVpTGWWRXdmxz8mCZagE6VVJbL95aqU8hAV",
  "key5": "5kDwxbRP8i2jWxS5wfytrenNANLpDFnrhYNG5FqUdAqwNgX5WvNdu89tsoW6oNetYc7VyXXo8X65mBzp7SbsZmCB",
  "key6": "5KzLaPFJja1qaEhGSx2xWk7u2Ec6hxhFFX8iDLUAfAWx7eAEGRqpjSdcxkBrpKCEV1FTCnJ9Vk3jmGoWqFZm3Tj8",
  "key7": "34Y2TrurkYt6vL6QBRtJcR5bTXoAWUu3ujZwiK3Hzpq8DeMQM5Lvqj1Pu5wrsZVypfATj14CqSdGeh65j8TSA2qa",
  "key8": "3hhBLyrqikFLMKKAjxhCEtuFSp4D5oc9EvN5c7c6mc53XuhQe4FJYnZeSTmVs67v8sK7whabD3s1zM8WUpitJCn8",
  "key9": "48sJsEDX38RV7vF9WXgmPpxPHybvFAFAcbNE3S1ACn7JB9MBVcfGCDS1dDeK2zKKkurGFbgPZa6W5dJEY6gQxmMa",
  "key10": "8J5kF6NvauNvPWuJWEtk9CNJ7zghuPeLhahjwa7eNAqyXyEcmffX4FXjzqyAUL65xWmt9FtnGtSuRqNa6z265Hc",
  "key11": "2ctFvY2iCTCbEygvBhcaZMhQGw3bNF747Hm3o7gRi1eGLXnxyaAYFpAkSGkMJBWw3mcroT9xXsvd1TeqEyYnnorM",
  "key12": "6685bdDVzsJ4cYXZM1i2FhR95omo34S8pAhMKDYWEH4YentmmNuMiKMAQD4TtXBU3bWs1pQK8FFWkmWiEKmPWMsM",
  "key13": "442vGNy5YErx3apXJJf5q4dkjWxLeACHZaXK4SDu5S7DbDAEwgnKEEiT9mgw3db6LQPbSKow58Dxcyet39UAQtXc",
  "key14": "3hGiRdDiyohMHVZ9MJj7Ngv9bdQoZFsVZvgKjgDNxnUUctmfUVe4Zxhb994usd23SYGykRzt2DhR15KAE9wEEDuE",
  "key15": "5jb1jRLR3eA5ufvKN5YVn42gCt4ZvvewhU1RCFB4suugpCf4MyeMYJ2843fE1xnApDTxZD2JiwcSbyAVJFfP3qVp",
  "key16": "4bSD18VmdRjh5Se5y4nRvVPgWoeV8GkYj2C3qnfuj54aef18gTAFowoFGgPqSMNENXtvWAti7ARtC7SZWVvCrFyo",
  "key17": "5qEnMmCxCXXCTQLeMdZYTFx3Je74u7LGLqJXbGqNDZzpiKs9LFEkckTxomSFvSEyg9UvYE9qBwmvbMjn6wyaA6FN",
  "key18": "eFsAUREqeD7xLHP532szPJ4GFw425tRBxSBTyZwTH3znzfnD8fim5qhP2XkY7GxCT7c9XDxj53qRewkfEGwh4y8",
  "key19": "ZLXMFCWvCji4tbEawP57LPVxtNNN2ojizRVsGRdisyrpAkUgJNeoJJLXMN1iEcrDnCm2z3b6mN3mJEWzvTbbzfY",
  "key20": "22jDjXxavgSGcyHpnXMKsHdC77RxKXp2wmUJwm67Q9nhw1GSo2JUjMb6mrXu85eZVjDGgD45xMZhDEYJSQbi3e17",
  "key21": "54T53yBQuPqnunYnhqsUnGm4VLrGxiv3pYzRsKgvSLatpB2S3fGuNyuNWtmsw4U9oGrYv3vfTs9No7ogXAsKWmJR",
  "key22": "2tHx3668iGVQ8G3kArwZHsJCUrMoNbNp2CmKcbLkFSoFVt6Kh2eHxb9MCQsZgx6E8GfajBKK1kQugAGARZGQwFUj",
  "key23": "5P7BJA1mCiapXoP3H6q1xRJPqoVC3PRAoRBeeXahf8v7DqiH7fE91dByyS2zNowog4ps7oRbiyU32KbsB7m9x5u4",
  "key24": "EM6Sywm3L6Zj43r73VC6D3ydECL5qtCqFFKuszWiRzCbpxGw1WheJo3mNN7BBbRJmmYEm1P5oidVvpixXpAfpJ3",
  "key25": "3RZGToAu5gV6wuirWKXFMjqXFvbxAsZAcNjsmhxXKL9CAdPGYqnUhbCamitPuse6gy1iPgAv1jc7gTkwgMREftxi"
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
