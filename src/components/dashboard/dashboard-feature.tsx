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
    "2ymaUEVRuen26risXJBTpjbZsmbsenN7a9iBX6DdZP58pDHWr7JFGve1GvDkmfAeYio2f4tN7Lj9czegrL2wpUbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f9d3kstSQn3VmfESSRwX9ABJbcskhc6axemrs4Sit5EvXgqEGxdbfHk5eytYRAomG922Ah3pnRS14TRQeRbG7Qq",
  "key1": "4Vybk7A351Tvpcei43AqpPgXfubAMqb8y1S2V9459baLk2VfZLYM64kGbgMSmcRp9TJbGp5oCCANfEhCYGDQrURE",
  "key2": "CEqKAckj2R7SqokA9YUCj9biyk54GNDQncDWPSkaiDbj8rFyWnL4yb2Su4YGnni5yc3gPD6BDzipGSTb8S1LXYC",
  "key3": "3ywmAViTPB8mBVCNfiXMJRuN4L6rz92mVet26N1uYQvGP4K3HWu9f1AGxML8Z8wSpDnysEfpGem3VrpcYWvSqfBk",
  "key4": "3KqGcZC5zwgryqKjJnzZR7TceaJp8E6CK9coE5MPC69MKchEVsyXhwpowGFP8pJwpu2cSbzoQ1w8DEqsUmu2QtY8",
  "key5": "23ZP2yAEnEJwV1tbXgh8V3SsFjjr5uhh1w29ZZNaQW6BewRcSZcAcqs2epVgMLvacFTVYFPKeDf7SDkRmaV8QuCg",
  "key6": "5zZaAVBygRqCVD7UpwfZ9sGvLbSbg6zdDYkaenwv1tfcDBhB8Nojo4njGxLWgQR4nm8hHoabGv561JaQo8FmD5yD",
  "key7": "42xvF77ckB5hNtbjGKtDz5HK2oo8oGLUVc9NU8TJM8AeR3TwQzDb5viagdPqcssuMKULSQH7F4fZcF9NnoWcYQB3",
  "key8": "5dwTHnrpHrFLoM5zmvt3wMwPBbNLHZf5yzRbmg5f9CUdtnJLrx118fPAGRgKgiwopoooFwN5JYtE1MM4QGUjHGSD",
  "key9": "44JgGZx32yxMgJz4iD9gsRELoD7cHvrNRpEw4ALziXSREieaeuT8qUgZftWrrjj9L77o7KiJDSCov4mDrwgU8DfL",
  "key10": "4kG8hMndoZdy9WcNFxhMesAukoFCcL6LTdRzbEAhU5nwhXUSocy5ah25Lxgr8Z6oB4393E6nEdqWexveFzkAtSFV",
  "key11": "48wJ3JjPmiSgx7PfpN3J6HiX3WM9qddN414xuxpwcW61tySkB5VYgaW9krr39ZaW5mMCAeKDTVKGQPqSHhNCzFwj",
  "key12": "5yJhUwrGeapU27QKero7w2QNdENXYg9cPsGHMiqqSE7RqBgtL9fNi8ym2ta4J1dsLygNswYyq9v6x85MzLbBAX7d",
  "key13": "3jJLfLfJ9UXT6TxpDBk4BpCp4JFs85XWBL6M3GvzMyWaKqsZN2F7y6HGLC3rpqxmPwhxAkLdrYoYfpDhwNAoGKCB",
  "key14": "3UA2r3xZaWEtGsf1s5dL2FbWoUYYV24fmPzUk8UydSSDVDnWbunQRG3jAbWPQYLDt5qPcKSxwADWHQZvnjv3JjCN",
  "key15": "2d9k5AiB3E3UGuu1KVpr1rff7AEFQQ544o7S67Eajj8nBo197iKYxRqFgvHVrhzB1FPaVPRySi3VGCpa6KaFQeBb",
  "key16": "3ZHZjHgL74kcVovkVGN3yryW3bCdtu5hmcQ9qpSNmMAKc1kHQhkB91Mjku4ux4hSgKt6wR4Woq7JyqyNN2ngXLJ7",
  "key17": "5uJQektVm7qv61B5zHPVhDeGBkKNGAuojp5CUsc4o957eahcpHtSteJEPi1KihrmY6m18QvhTnjdoZ1SNBfpW6bu",
  "key18": "2ZXwXRFV1s47wTcs6n9qAKfNQgtYvPQFAzg1cNsdCZxyCoMyAvHE6k53HP7Y6iuP9mwSojweV4TLB49f1KFxposC",
  "key19": "4yuCsrcnB3ws8fhwXShoRH4RFTztvKUGu161exEhzM2btUdDkanvjgq5vM5wh1Hodc2uAFUNkq6Kgra4RZccHqqS",
  "key20": "SczJYbFezwnq19RgYus2XtJet65iPsY5QC2sQ5HJkqRmNYGgKDKhaqwn699FYX1giEy177s5iUuqCssQQLmDNN7",
  "key21": "2a3tbeZievAcLdGt742twPPnvtYUuUjtW1QCbSkhexLw8oV4sVmmgGNbr5qYJ7coNGdLPCLeUEvLEc4oZkVStzpv",
  "key22": "4JrTCtECcmxiEzJregYMTTwHmDbijS4fr8tK5ehhMsYyJd45cfo56Nn7V1At6DvnYEP6z1DBiEnKUqrBihZ3RmkX",
  "key23": "bgy4F4sqXYdrCJ6BSXKEqBwtSD3gNVqyUUTDGGXnCpPkgQRCdaD2WQVmcpKiQDC9tPx1EQjvtL8wsde4TvyUNtf",
  "key24": "58kyYQ5W8s5AnzqemZKiidfoBu7ssnAr9dChRiwCAi5f4mf3kNy1q3jryBQwBEqNkN9X942h2WojHpHeDNgxmwWS",
  "key25": "4dzdUKgBjRBBM8GoETGykbGAWanL4oCAfuSMn7EREJgRbn8TieGKTrQGsSxGgePsP4xSaJU91MBQeUp5huEEFPyU",
  "key26": "4mG36EE2fFhZmHPweg5SQA2srgYG9amokpMs9NLAb2HwDTMMrBhpivZkm96End9nG5GXHaHSjE54YyKZY9Uwb1RH",
  "key27": "52QeVzGRGv1Gs42BVkZJF7zfmRxif6rPpmbF4htySeAnjPkQTyzE1VsWBWkbMmBjAQrwMPRaicZyRGQu8Ydu93iQ",
  "key28": "3XKLRhpW1amg1nvKKstLYzed1V2BWKuEGUorjsPa5VGEotBDLmbLs4NmKNqmBSHZgASidYixryNJmayB1rcwbegv",
  "key29": "5Bu8gk3ZcAPpm1ayyBpyMnzDbCd5x5mptyzmPqbZHyt9u4EveL51TCc1t5rTjMBeEDZz6umtUm5pEriGiA7bP2dK",
  "key30": "4Yk8ad7tLNWYmVC98xMzss42FCX3y9AsjjVzWJxKjUUkzGD11gTFC5rGNWqkPnubMUC3nMnNPZMSK6VbqwkcBGJH",
  "key31": "YuFeBpU8gnzgW8Buu2y8FLdiW8t3XGxcVPLWFxSo7bPXRjufYHmvaZUMUXvSSmPNMDFSHFjjBEm8Rn1rGEQL4Mn",
  "key32": "5WYUW9od5BTbtnwBLW4zS1YxjobysFG9gJGUWC7vVQQyzCyBCZ83u7N2CGCEVq5an5Xc9ZAsnYtNk42eupgMgowk"
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
