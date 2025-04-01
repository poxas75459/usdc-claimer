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
    "5M4r7EXvYiCmY9TtB9jQYvTv2UUddjwzqJSHc3631Vt8aMSkUVwFBqBn3nwfXXb7vRNc4WU3w7zzmn7DbBmVtLmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EZKVAptafYyKW5KSKVvZQoKiZ3sLxc38WKxVbssAZnvLYarpRhRgGCF4C4q7CdAQdgjbNJbv6YNxP1TComrD6YM",
  "key1": "bxbe3kztr85dVeKDYin2Yd1FtgDF5ksxc4nU8DnTdgNXyGmUSc5y3zhqnAkDjCZAUyfeH3r98hxx58VvVtN4uHQ",
  "key2": "2b6ouiyd6SoDZSmNC61b4oKnGidTQGZ5awcDVyidBsoNejRLaYG94NXbnqqzhcyxnv7B7dBgVuNo7YUH2fm2ZkSP",
  "key3": "5dhuBC43gPm8EXpHb32h5ohHracE4gHxTnnennQDBH9yqwhRM46VW1xq6ncQEXkbR6mPJ5NVj6g9u9GYHifuKdzJ",
  "key4": "3T5SN8Tuh8DYhDVjycCVm4CGJTMGGEVuosLC5WD19DsDJ4CukTHr9HprqsK4JYQNBn3NmkRmy1L6U7KyzeCEw6i7",
  "key5": "36dYj5KpRmVBrt19a5hZbKmdqytraNRxG9V1Gvd3WGt8W7dGhpT1DPwCotoi6qtMxx15Lvji3kc3DG8JKdREFSbd",
  "key6": "5tw5vZtBJqjP3ADr9zm42zSLjrvbRpiHnVhLiXfyo7AsK4kfEzequJN3oHqFp9Z7DFtW1vyWRCHNpXf7cwpzpx55",
  "key7": "3hgSzQFzQVk9RwfiNsKpqYdPKt8LEtLMowbYGv7NtWrkSfViHttxyomU1xgo3mpyYQSxXeW5yZQoKsXWKfikFcHv",
  "key8": "4q16gH2BNyk2X8vEPEer3gqfy9qavpPBc6Qpph4VXuT7bsx2ZBDUKYLb9XRUjuTEurVnw57wujsUoJ4cMWxry6ZE",
  "key9": "45rDjFnycqS6ygvgi1XDByzA49bsbjSDuTxBAoFoiY6vpEdUNsxsffQA9iGPuJUZTm8Qbwh2xRhHdZ81y2Lu15np",
  "key10": "2RxoeBRKM57RGn6sfs2SnwCzzDPMSxjcG17XnBd1sEiJvSGWWjz9BL4mG223HHLaRpJdvmyFo733XrPrg6FUdTYU",
  "key11": "62csjLTc9uquHNZ4eWf4SLm5j8UHwifPeQFKQWhvCEe7TkCcDZCmhVYgCaUvZG4hduzvPb2kamWUKwA4rt46CTdv",
  "key12": "2uB656QWcWori5yvhrrAHLC6Jibds6JwUjbgczk4Qs3eEM3rzsXiVFmV81CoNaDGXzeWw74XWHhVDnEYZ3TBiLip",
  "key13": "zeaSZWarQ38CcwjxJDVS2uV7Q9fugeHBUne2Ym9euRhyRtCCuEzT94HxuavTCF9JhA9h5Hg6aKz4KKhdi8D3Bjj",
  "key14": "5EyA9QyVHDExmEdYjxFhXBW5RutEDRA9k48rPkhBoxNp8oPmGAzy3AG1DEvGvuPBEE4Vy6AvoDyN9ptGTxr9wdB1",
  "key15": "8n4gHZGxBty6jp6TwoRw6VAMhVkwRadv8c5QLjNkPnSoitCypCjvPLEzFf69ZYNgN92yApjjoXDaV9kb7dRKeSn",
  "key16": "3Y8LgnBu2S6pkVHcoHyPoShwGTYKtLKJrQp9X5Eu7fsBAYFBhW7rWMzHmMRztz4AY7whQn7f4E5P1gL9FGnEBHhd",
  "key17": "356pKRgfzhDwqszzBUULGR8VDgi3LYM36scdqsMxJ9Xi3EUKRCWybKh4QfM9hZW7kqrjpKB9FomiqP1JmnrJ7QSL",
  "key18": "ntfQiTsbU7B9cqqr2BYsJin7Fs6p4vsWZaCk38q42QtDF6CqGF7feayYrzkHWXX49Jzuqu4qNo1BSf8LBgvdu3Y",
  "key19": "5Dx43orLfjymWZsfR51ASpMB1VbgwD4dVkPavzhCbRZf17efSnNR82eQj82kpv3f62NSKFzPxhYucr4Juy1sGaHR",
  "key20": "2VHdvBaT9nWmvdaWpY43eaBMuVxX9HhMJj2BY4cRxLTE14rC3VeBa4S3fptNQ3jodZ6aCrzzXXoRaGXaqyuZhT53",
  "key21": "4teW4tFBPqhRjsUMJnSrcipN9mGcf2vjNbUfVLR191CDsaQNyToupjTv8SKFLvaPZDHCxQMAdtP188yYoCxudkFy",
  "key22": "UHDRUFjVW1mngavPHmHjnnMwQTQpaZPbSvmW8Rh6dPB3j6YbdNAvF3wmHqrxTPk7dLLyTYoceY4yLoZG2M1p5uT",
  "key23": "5M8uaYJtxyD7RjbJRke9y8Z9LkCW1Jcn1vX9GssruBsWiChdgWy5BdnWzfa6s8b8wHyzho1Hpw2ZttRhh3yhXcFh",
  "key24": "f2DowxciwnbM1bBRi1Fp9XWq6FCvkgYiJRGjtnz7EjvmFSFnBP8r5w5fnwtXYujePftGxUxubM3AQiawjWWdncL",
  "key25": "3mdBSDpD3f8PXaz3u7vbEQxtTRhAqH6ewz8nZM87cKPUpDk88sUfXSJmom7CYQktwcZVTVHvac2nHZSdTc2t692k"
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
