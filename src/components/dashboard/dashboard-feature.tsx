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
    "2CiRxfPRtumNG4tmAXqmXQrVTff8PgMBjiR9yJLfaYirmJanutgpR6ywLhpANqHmddPZQsgokGbjs1NW5zBahxu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42jyB6gXtoVtEFXVfwLew4BUVo3hM9P5cr2BidW9KYrWi9X3nAwZtLbqHjneCG8CY5McrUchRZGeKpS4JzdLhmYR",
  "key1": "G7zjKnkTRsSapX6tRFtNKWKzR2AnG87iBWsFau3XoaCc9gqTMcDu2daXfbbebrBXLvW8fQWb1krmKdZYbwzYWyR",
  "key2": "3N6RpaXghNdGJFN49mo5dQgxzVV3kRcNb7EoC48nnERRv1kocVCXXNaCMySb9WLLpLEi6biGoKrXYt1wQ7u2XzER",
  "key3": "31eVfCfJKpEtZZk4utgZtdTK3SgwcYgAnvAqpseUycR8vm6yGasCUjRpBCPDCx5n8J1trn1gDw5XH6NQnRLAamSy",
  "key4": "kjxbvdmxoUd7ZYda27Wbyg5tGvfmndZwpWDynhiQzzM5FX5SYQ2W2kKTMPqUjwHPkoziDHPgHdon2Kbb6imMgDB",
  "key5": "5nMJN2fMYJ1YSXfNiQe4g6MEhA3ZLXkf2pEiY2isjBNzYAgg3WJtmD77Rkf9Vt1ziU8DdU6dRRtSoEZegUJQ87z9",
  "key6": "4AD5rZEebsvgxDaPMfwgQkqMKih5EuuFJ3pcVMQuTbuAdYk9XrRUEBv1iRM48iFC5mtFP6BuGpc4L6FATGMFQvPo",
  "key7": "32t5iT7svXPXKQL2dqM5JQXL7fevC9rofkKc2igjVedRjfLu7YhmrXeass7gmRQsR8NsSTiz14iQFV5KcsBkdn3C",
  "key8": "3bYgShfHNRvV4qY1raVLM1mu2wgScU8h23ssfkGVNkSaCXTWNaCbb7PeAUAG2Tc9n97xoL8nzoXvkyVXS56v694k",
  "key9": "59Tmqxfxsg79i1eftBUhCnw7hYAtUNFiFYK8TAjrtKQLiBHppa8GHiqafuDdTwWNsFrWoNi97u2VwLqCM8Ugp4aY",
  "key10": "2B4bNRa6KFiVv8Y2kVQpdayvcXW91ZRi962irN9yRpycMwEjMeBqvpu6uZQVHAxtYqnSqLXAt62b9V6YBmYr2sgW",
  "key11": "5tHsd1aZkoZoBxUSAFSkGSqMZuQDZUYo8YYGZh2s9c461tF49GSdXiP1fePpw3bBjaddWy4MegWTqwYEakt2icz9",
  "key12": "29KyQ7Es9bHj5praCtKSm9n7VmdNXKAF4fNj9pfjAjyRT4jB153C2WvYfrHYdPgw5VwEnn4T5c9WPBkaMKFq7ctA",
  "key13": "ZDyCi7M7sFKvYJjwe4cNCzDm1gytZt18yStHAoJuckQS121Frd2cNMESc2YXXAkw29tXrK7Pc3YhvLeXFdy7fKF",
  "key14": "8fKXQJmk7FubZGqdnwFSucYdbZyHDn9jsdvChnoknGbDQJRsCuSmhnSosMpVe3KZSa5vE2xdfWSuhcPEhbzHZ4u",
  "key15": "3HoKEtxGx1D3pGCSVZzeAAsiTezjeZv94iFLz4fxNGt1Zkfdkmv3LGg7gXPwEdHLEvrtmfwd6DuJbtMX28BGtEd9",
  "key16": "UeR1PvzTE46yUVrKn3FSeHTm3GKV9dtyB6sP2KYnnzYbVCmo4UQ7dA611Z8tnyUpA7R4dxBYvMQEbBE5mycVhoR",
  "key17": "4M55cp2LncCfGMe32fFvNqjB7Ji1aHQpQ4eyhDC4HTwbz9h2E57dEfcnPpM5NVwAEhYMzy11mvTd9kSajZUuCBU",
  "key18": "FZcfhyxChFgHTNzFShCVd5ziJ7je7QLJ7NocbMVieVRfsfkSv7VoVPpVSCAhwQAStc69jPxfz7Ktp3W3RT8DhDB",
  "key19": "2BKzLfy4R7ZKtzdp5PMJuXE5MrSQhzKrp5Pek1WQx8wXmzBzbZMqrEsP44bm5ABX9cbhqnFsqjoTiCJLmACZcWn1",
  "key20": "3174aBF29ib2dXDRSJCjHcnAgu68ECGpGavwCM1uf7biUJA4qj3o7U333L3CVYoxFaxNzqbVSscbVnJ6sVoAzVxz",
  "key21": "2hZhd2AfGzCxXKbjZ8Hvvkw4LG3eUxY1gDsH8dDLcC1vgcEPxqeSpmZW3CMUUe9Ni3ap6NeQN4qKXatxwoWuLscU",
  "key22": "4m5S1RFToQsNRNN6Kv4q6vQ3kDpi6Tfm1YQoVSmgBqWJPYy1351kF4APNrgdq3hU1AtDfLYE5A9YXxFUpLwZMcYo",
  "key23": "4Atx3si9zUvJrmst1ZgxhhsTEtMNfYCCCYaaRqXqx5ZUgiRGQMvGsUNWyDWzXfwhmGSngLUz19g1aie8Py7U9Rgb",
  "key24": "2Ak5BLgQTkhikPiEkKTddz7SJ3UXDcHRTPLKXwrbVBBzqrLpQKvhQScQJ2ZxrMXPtvbx1eYcsYucddd1XjVZWFCB"
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
