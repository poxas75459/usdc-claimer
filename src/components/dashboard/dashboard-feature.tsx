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
    "2iiwe7WMMC3jZpGkhe1EDCcQmCJDjZa97KYMqwUGw89Bi8knrhudoVne1sMZnr4M4PWobhR8VmnCUUy9ZoksExHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fQnZ2BxzwV3QaeDmehJ2m5yBwbbdQCCVEkc2aBbM2R5tuWc1V1fHJJWd6KaaMT7t7C37ap7Smnhrew4uhN9tvf8",
  "key1": "3pRroo3FyUAaHSKQJfGgvjyUJ37koz9MvYpegkS1y13zXNDJoEpiahaTuY9DxuKcWRN4G2BzCDGcppWvYwatzYVT",
  "key2": "2nkovMHtULEYHYtqni8EhXgEWtPhh94t76AfuSXZVQh4WZxnD7owz2MBLVCkp3xQDRv4M29nRadj4aMbv2qMSRbG",
  "key3": "5HESfFvgfLsAm6G2GAF97zg53EW4kCTQFVv3ehe52qEQZRbVJwu1jevLMZSojBuo6D2Z5hiG9vqT6BgEwQwKoG7M",
  "key4": "4yHiEWc7gxzezng7EPhFLmm7yyU8jd4rkTPLvek5zRoYL2rcikNRLyN7kucKgrXJHKa3mDZVMM7KeKpjVgBz7LSE",
  "key5": "2Kq4bYDYbEVRYgiyXS5TcpT5Co5XqAwJvZrBdiWpqXLPdJcDWduXcspt3A56LDAe2qgoTs3a1wm2p4JKX51Rep5N",
  "key6": "3Gy9MjvMLLVMgfycyjf7X5NacWi2jL9quqn38y4wnhoAwAYkUvifnipLNWJnGW3swLQdaqGPiRmtRr33gAL8etLU",
  "key7": "78TyPSzThG9dnKWHD9dAkfbCup1cYKnYpv3VfkiE92KVgGhMM4Dtrdvz6A9MesfhyGNFgibRHAZkLxQBnNxz9aL",
  "key8": "2eYz6dJHnXgATcjgvi6ozde7hq5ZyMS91EBy9GsmVzRDNn4SCm2a5ZK5bzPgspKLXM946va1L4ahvXUFPY45nrN7",
  "key9": "66QSDPdePw7xLsPi27Rccn1Y6G1qDt2UztpxR6dcX1UGqFJZbtqF4mrLAdnft27y3DahgjkDecAeQ3RupM17Dtiw",
  "key10": "39frYmqCnFR5g7XcgAXBStQcRgKLSempmpnopv62vmqCKbZGhTQ9rt2FCwYad8n7Mkq3nHE1sEp51gBumzQtor3T",
  "key11": "44emovgnN88SUYQzaTN15EUhYmwVRm4ErK5ynZ668NurLNpSzXfm5A3CoyjB8ED8nq7hRr8ktoLv1dDMdY44fXsM",
  "key12": "4tN3yKDdLZBuqeUeAw3BY797SM4nqxuGhtBVghB8eJPPHb5YcRhrN6t8SU7eBBkC7hveraZrdLP1dDJQx164cJfE",
  "key13": "TekQ5EvyqQFzmJLs2PU4gwAMpPfHYzeTw1DPVycU8G1bcAgmh2HvjuDpCN18mGYKj22ywuKa2JNUpQPF8zTayvG",
  "key14": "3g2NpUdHYXtqBywE2CGKFcPf6aLkQNwvM5VzAJEhnkYZNhrfsxMyP4bHvVCEGFek4QJrNJsM4i5pvt4wagcpxESk",
  "key15": "P2WnyrJUVv9vBhency943p4pKLh2a4d1coC5VtYXMRFmNR5KaT6ES3qrM14gXBdZ9RtQdUMMwri73eNjRdU7RSj",
  "key16": "2zkQD2AxWqTseKSrM2VpreoL6VCaWq7C7C5XTBTa4XecMzKD4QyheWs3zP6ygKz16HUd6JhPPBe6ozEFYKBAwsb2",
  "key17": "56jjRCFn77yFYvjoCCXDSCtt83DXW5iYKkbeQzrjYsTQGAwPKYnJegvT1pYX4UiDndosCk7ujyvFvqDuiywAyPp6",
  "key18": "4Yj3AEwqxhtE5Bo8mfA7odyjQgdfFnzpJLoC4GRJGhALZzLcqBugaWWfxUxjAbsrMjJKm9zdS8nyRCdeubBDRr9P",
  "key19": "56cU1dzrSaE4ortfFu5MBZTSwpTgJSyxNRYbkH5L3dD3FoVJww99haUraYSNxCiBM2FE7oJtSoum8UcAxfjDvdjy",
  "key20": "4uvYx5smUH1JDMvAk7XhBJFUZD3svko6c4YwLcvBHub4mqbS1nv2f38sMpSNfPMnzCSgzVfD1496ZNUopnSqRmiv",
  "key21": "KCtXzLhFDJpkVNTCMZU3k7Ccie3J8kSXRVkgBqyV3sYTPayz3y9xyBbPVs1xPArJLMHpU9sCYmAzbaYaH7Y7EUP",
  "key22": "2tsiZaCJkKRVebHjFdQ8xxbfxsBMNxzk5BEcKSYBfDpMqcurniLyw3VhcruV4y72QXam772TMKaL8By1BGXQZqYr",
  "key23": "1frTpM6PwLR1vQNpisKwaKqBuzYwC5omQudvaPhikBYQANH2yLk19TgGigWp32qprL5SC4cXHgLmi52kv7JhGPe",
  "key24": "3FtPTEjWDjPUhdd6yb5iEQhsLi2NLfSNrbjetqLHih8ATEa2e9wtboKArgok5xemdTjSWtMGm9DJ5dde2BZhY2ZJ"
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
