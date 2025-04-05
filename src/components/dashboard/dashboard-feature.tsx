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
    "sL6AqqxwQdJG4z3w5kvohbJ51LbiNzPnPGfrFtQ9HJ6anGQL4xjE3N5nuL2sgvSQHnc9URUD4YQNfv26ERm1chP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YAqEHQDbEgX2aGmpuBsbUmXkGiyWHaEn5fPWRg4UTgVRMA8VKzhf9SUVKSa3wd7mzTmg9RMuaeetReouXqSBGpJ",
  "key1": "34STcCjuH5RbDEL7W4XurTTrFL1AfJcbguUpNCGCP13xHjMEj7smefioAPJq2f3dhpE1bBPw26W3Zkypgi8RyUuM",
  "key2": "3SvKEcQoxTJkb4dTJUqckHjw3rAePGFbnnTjonEpGyTR6WpJo9DYGEjdr9KgW4RmnuMTpCaCuskhYk33iivfCpM3",
  "key3": "62Qpwoz1mMKxm3uQUxcEYr1iTppmfMaSsX4Q8WKK2nvQrN63mNpFjPsdxdvGTeoMMsmy3GztRHBdbXrnLvfRHxRZ",
  "key4": "4DphnRYY4HpHjCFN8s8JWipapJPCxcN8n8oR1ecm8GMfx4C6cY6HEWeyo11hZkD2brdHJaN9eLR2FTgkHuS1SDfr",
  "key5": "3hFnUocqPdwyHJ4w9tFnzFpngrBniyZyk54uhmNuSUsdXhmge1Vi6hFcCxXhmk34tfx1DT7xqNr6gxjGR2GRSPMr",
  "key6": "22QBN5Yjt8M7FVNpZpp1Rcpg2vJ4Bfry7CmBmUCTvQ1YQVW9MDAsYTPm6hhZ8ZwqxT9DDUVes2QAUqNoGvjdvEpa",
  "key7": "4nVwMefRG6YviW1wxY51k3cFgWPmh97sQrab1VSptxZ53xcs89gKzjzf8RDqHtWqfwknKcrn3geQmbn8kWQh6aKC",
  "key8": "31JXWbCCsYwrxrReBe9mVYy9ZV6dGyrGNy5neGt5y4YkaUTLVizMpLo7SHvtFtCCMcJmcJRvGPnC7AvMF3xDgkoQ",
  "key9": "KPTABU7xe4qhDRt3PTaUcttQLYHHjr1QNsLnofSRwMHyCDSfFbY5vWmBdm5L1QjC2AJygw6hiqr2bP5mZivkCFe",
  "key10": "4CcU1VstS71QSAnRYu4hpugwM8dkiVwj1RGRFEzccbfTMJ4o1BAVhLEdgzxqJ4ibDxFsevNEB3DtsnbVHsVLZLHD",
  "key11": "2fMWN4bDzWqdjdd63WN4x6r3J4jkWYVZSQiGYVFxFGEbsuja6tarFtBGa1WZFrQ9yKzJ19Yn4X27P7RcvNMMaP5D",
  "key12": "59kSsP5jJ4sKcMxzv3ve5R5HC8KcJnDvtW8RVW6vhWRro7g6gzDs4S6C4T8nyMmVqCpRXJYXYrCxWPbDtPmMVSxQ",
  "key13": "3dJEy4RKy9YGxmnzieGv9eF3FchnWN5W1vY4UFMUZfiy8KDWEvnDLvFMH3Gr8CFytBkGpG265RxdzpkyEUukWEuJ",
  "key14": "5ZLHtfa4Df7uYgr11o3LUcsr8NCwKobT1JPyHVKLD4KkwFuubce5BLLG34x7uQ19fyML181XaiwjBVrjtEoiBm6M",
  "key15": "5vEFQcBTFExDwVHuV2PwKPFmoiAqXaLjQ67mv8SXfjsT6FChwx7hY7eJ4XUX6co47YViUTJ68nE4h26d36GqsS8S",
  "key16": "3J72PeMpPPnpwMbmPUTFbVrwY4W6oCnmLzjYfQ2BRjiFfNY4UaWeC4bhFnBXdA5LS3DkMfhybi7UPdu9HR6i5mdJ",
  "key17": "5Gu1CXdt8aM9BUyfDm4wMbR9R4erociUXSCsUb5BYbWoFj1zwULC6BWqxHC5KJjrTUjzpPJanjERtGQ7HpinJZWs",
  "key18": "36zZv94p4hkVqzmM8YHi27ayETQegLVFHsCq6iqb1J9jvhtDHrZN9aC5zAg7qVNWdxFwfLKau8uXc3pTVSNSZxiC",
  "key19": "52iqJemDLD1xVTuRebzCjw8QRPR9HU1CJEPC34TzMtfQnGy6BD7qngVsMRhMNLpoPZwefv8UrD6jkFeJFS14XMbp",
  "key20": "5CKQeQ2HsJQkwMhP7V6ubsdFe1MqRGMbHLJtiTkkhDx1WkRTFHv3SbE9x5k18nP5fL55STz6k25F38hhtKQcn2fC",
  "key21": "3BtrM6UAkd8oGzVfVnGRLmqHQBcYCjKLmkHLw33w5ixCx1MXzZnTeoUTVytzKftFDjcsaGetEkv474HSzxkSduRo",
  "key22": "2X8M2gMM3PLfdtAxHKSAr2nSzip3eNyVs82EwLKdt4p6jtc6gUCoN18CdMzmPt6CXBZbKgCdUMDvv6QNpNDYxvEs",
  "key23": "NWjJ2zF8vf7kmtdk7itAnasad3kpREio7fe6X92ZYE7tGGcVfUub7UyvivsKwRgbSn8Gx6sixvXnLwgACjgWYnx",
  "key24": "4Gnno8eJKdiAbzQvh7afLsggKnPPXMjW5V5mgLvEeAuY5TMJJjQ1e6DuV4ZkneGvUz7L63GogDmNQNDvAx43haBA",
  "key25": "2EqJWrjmfJyRL4UVd4D2SBZg9CFtTzd3kQKi39ymiDLVJ4qoBmS2XvLs5pUf6pDgvdypZBs2PpF1GQkaVu2wZ8rP",
  "key26": "4V4tHb1boVjksCCk6ciRJaVrr8X8MCbHD6ZGEdcb9jAtHydswV9G3753rMtruW2tSDNcAwnsirtc8gJtWW1p4weq",
  "key27": "4qfHdJen2TMmgg6eQJDjZjBEPo4TedHngS2EhhEccjDNgLtkB4admZ5eRn4fTxQDvhhRDZJko4k8sFURh1FV4guq",
  "key28": "2hrnmwGENN5arVTFexFV2EUu9GLRsRx4yetcJhYf7qpx7ENQG67hDjjbZS68SDshtDCTEYDb3vJkVQgm2ZzGgtpt",
  "key29": "2J2Eh4igWENJDSViKJT5UvFXhtnJXPS9y8ey5owKGYznB4zPTgym42LWaBVzZK35EjjMWACJiGmMcoEMaKTJ5h9S",
  "key30": "2AM6NAzNNyq4DmqcDGK2UiqkYj1odPZdNXC9UVc2p1LJEJWceTSvdnVzFFxfDct7md2rXZNNHXW1QdwZxQeK77oQ"
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
