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
    "2ywPw1NCnBskVYgFC1ZbggsMz1NJXidmt1KyYp1gyjkXY9QWW2skboGBME1Pvzw5rb9zyM3E6txrEpkX72Y6EhD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TbusHeD6soGTGiJwtcsmZrDK14545hYEn9dRDneJ1aPua3xa6vwRu6L7odQDJ7vgEiYKHjFbUVZ7BrQd8T1mqLU",
  "key1": "3mhPfpBPGemiRagv3zCcAavoRwCnfXFSoorH5obijguEDyKtZQXeX2bCHyRQEj6yELFANQ5kxbtgryhDJq67ckxh",
  "key2": "5HbvH3FTxBetR5khY1DJVESUbub9MMgrmLUemxhukiJTzWda2XqqwckAhXAXduUhd4gAoaV2sfDQkxgrL2wS7qFs",
  "key3": "2mnthPbZMZ8eCGrxUj34NxHJCP9s66JbaJmg4Q4obXroHFaXcLgSVDfXUF78BntVrMHjVhsRD45V9Qd9YpoQpARA",
  "key4": "c5RNJTZ5w7DJppxGXExr383Vxx6BN9dAdiyFDsKoapLr3KSDY1W3CbQquuSNqebKB1p8kZpWjnWhYh18Pw77VXE",
  "key5": "53Dqf3f1FtknTrAquJderA1Lfh9otUEq772A9e4TkgAp4Y12a5swmAXeEEJ6HQN9e1DKc1nAfjgL581ahJcsvPpn",
  "key6": "2ry6zgVaeA6nqsRLwKv6gvdh5NiqHYfMVTRTp3tZTVWYFrLkgXKCaSD9qp69dnGeeUHjZ3aHyM2icxE8ZWfnGqD2",
  "key7": "2hTkkMUYQiBU6o6HExSgAzB93htSSeTXJmJ9eu5d5jHY6boGd4zEnBa2KbJQPhPWM2VNEbKWBVoqrPUUzKnuYFqX",
  "key8": "43SsczEJciHXgdRmMopXnowQZu53MvQELaPj8NSiZ4FTqjgbUmB78ofk2D2VZ5Tsnpe3GE7hCTuV1eUuZ2jvFfmH",
  "key9": "2FRcQBNacDBwDhUyuVqxkuRU3CZYMf4edPuMSmxJQSmzFB5TTnqHnBTKHTU7xpzuDoAPuLdyqe9UFJu7vghC6mSp",
  "key10": "eG3D5Z4e6e9gkkfD2J8enXQzD4LmSgpQYAZ3PRQBQrhQe2vnxbnTCgZQEUGpEezjF2fU8HnPR1pz28MQ12FZXwf",
  "key11": "4MEPbYZpUJwWxbenDwz6ikG35GhhLQgCPme78jvtEFhqLKbPBiFTTkVJu8qXF9AKMnmN8JiszLYtr5KdvUuzDZSh",
  "key12": "62y2HhN9Qdy5xdU4rg5g37Z8h79ruoaBkyp3R255w8W4oHU2y876Ah11MBBA8eeUDJbtezufMhQaHSb1PF1mJvd4",
  "key13": "2dKYkPbzyjDuzgeebGpLiaVQFYDnX2otUvcTcPE779jEK7tW5iM17kBnHHBrxiAHPvmwe6P9PySB6kCRmPgknHgN",
  "key14": "54XZq1oY2JbZQdKEf9qt2HEvf9XAHpJzrzbd1DQ5wENNUrFmV54cbdtA2t39nL8RDW2BkoLe6r4s3k5E5TU6Uvzo",
  "key15": "5BJehapVYK5HpRSa3omR3SiVLsaU92aN96EXi9UYEE2nTcyDjE98quKNXf4JdykiMujBFLP4SpqkhL8aWnyas3qy",
  "key16": "4aU1Yh3Kvefk358pAYvnyixHe5mW94D9RyzUN6ybxpndaimtt9Myis4w1eGyLGJ3CKywuiq26bSckD8qJXH4pgkB",
  "key17": "27ojRFZGrM68WNVw6XD6rEQe8yv9y8jxr98MBP3Zc8id62uQmUta1EA4oK3VcRmTD2uh9CJMAhKzYFdbwsUue1Ak",
  "key18": "4F5pAGpgF9Wy8xj94Rzjdpd4H9NcuzhuePfpvx7sVwtdafsXpGXZaiGkVP8otPdrx4XtPUP5skQEtLMjdAQcZ5i4",
  "key19": "54T7zgDkkfrsEP5kjsMjxLftchvfBh3Eb5Yxc9vF79b1VWbGBaBX9dP6UHdjM5NBppq76Ld3RmwiPcS7zrdt93Du",
  "key20": "8Zq675dtqtL7fT6xkjiwuigexBeH7Q9gqzvLcv8oDbxvCBFf4Q4UsAheQKti5gC5xxsWZCHJv5nq4zi3uGkAeL7",
  "key21": "3vY4rJPNvierNhrMwAUbToV5HVUPs8RsZdbm2x7NKd5bZyjx6a4JmPjtNPMrcBmghGpswc1stwtitJnAunbHwxmE",
  "key22": "4FBFAdz9n3aeHyx1h6LQtx88x9x9wYUTntt3eB6aCoeTZaipZ4LTcuFvgZu6Frt7mwPjfmUBbXxx6Hw5fQBq5ush",
  "key23": "C5YqnLWqhsNEJbmW4Uu3WLKvhXWhVA1pbXxH9cZXzh2kEQjHQxcZm5yUMEo1676ThfLCwEtkLTCxFhVKCo9GtNo",
  "key24": "xeML2yNjZ7VqtyorkzHrYVDXCTgFtvtMrkXbwQuywDi59QQwJ4Bo3Wj8snZWPRYPMvw4SebHbyKjdbFb2istLnm",
  "key25": "3W23tbE4oJNqZz23VqG5j5FAVKcKezKxufBwA5YQzFpraUr6awoZp5HGPcfkUNbNpAx2eHF5MCy2jyCQw1MJJYjp",
  "key26": "3BFUP9VVrfV3EriTEJBjRXikmxTtY3QTLZftUMYSLf4v4JtoN2sUP6qkeBxEQgj94CFQrgbiz13JuBuSUDEBzMW8",
  "key27": "2fcM9DZKh3re1HgK1CcDwYy7RWbQ1TZhAowsiLLrtYHJeWNJyQ8oaZw3AAT6QAPNXEnucmzyTiLAvi4uqcksrQhn",
  "key28": "4josMmU7ZVTihhrLoM1ZEMkEKAuw6mmtpWeBFszBeXo9owPijhewpXbUVuJ2BYzJEWEL3fZ3sxfP8y68fVbQfahA",
  "key29": "4mjpprpoxoW8Tvhedr9upBYZ87kCSSBPJZqi88oXykSFtrW6GgGUJGEofvdc335h8NxTQ3wFBamoEWQdAmSuDYCW",
  "key30": "5aHpXpCXBDXrghAH3a8WQwb6u7L7FZZDszm58f2QsBCq4q1kMbvpbsL5R2j1KTAASwzvqnDjCG6AaswbZau7M7cq",
  "key31": "5p1f2ZTJPiWxQhLg9xTGbaaE2McoQa7HRE7CkQA77X3YCmWi7c8VWoBPe7854YMAb8pMXo5J9pmhRARSF9N3j5rG",
  "key32": "553qzszmdgULSLbDa2sm8LHyiMi7WHT4t5xL2JAMsaxY5MFunpfdp3Jtrdku6QCR8By6EU9LSxbLwjzTypefi8fG",
  "key33": "4Z8cfYDG44E9Z8KRgeVG4k6XHb2sqbBv4ckATEzf4DcuK6fuSXstRYboaYrS7u6srX4pj9UmwEzEM7h8Hwgm24F6"
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
