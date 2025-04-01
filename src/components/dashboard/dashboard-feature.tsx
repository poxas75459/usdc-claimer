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
    "4izJKH5DCkJURapBW8qgJ2HeD4Nk42SESRKX43a4JbrpwJLpibMNxtWY5A2DpHoFbnRZGps8jWkif5MuPsKdbBub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dD5jVkSHxg3NScmw3EAvzEySc8m8t8t8MVecZK8vDUQQN4gxAC1oNyiQuNAkQrf2TbagFcQT3S8UVB1VtjLjDDe",
  "key1": "5d2tX6uFCKhx5CM7ZjoKsmu4bdqBJUAPfaoPsczjEHLr7EuwDMYVzGwxYtqm9W7qXuvz7TxWkbkGYV8Bpqb9QkcN",
  "key2": "3jUbL2JZG3WmLmvHHz4RQX8gdrqGCctsvXuP1SxEN9aGnMKB5v2cMZVLLmC9XRi22b2Efvt4SC3rDBz2oAsHrZ9a",
  "key3": "DWXDL7QqP4WbLuuvJiUPw1dBqygvXegvNkai7w3YTunQ5PfcHv3WxbikivtxQ4AtCZ7oyHUzd6bnYs24mtcLVHK",
  "key4": "GMzCPqPYpYAZbyacakVnAJReBN5ooTu22UGJFzs3pojpZ2ez7xTV2HKRW1MkLSvVnwwTgp63kkL3wTZ5QEQcpnc",
  "key5": "2D7ijhYD97GUGpDJc4pB9MyoimfLxcETqWZMPNrDiZi1vXDD6ci5MDdKw2qZWTrXniHucEvJ75Ci2QWypSz2Zavn",
  "key6": "35SawwPuZxRhttHTJHHMgNvZVR6os89QuvToPL3RMyDFxpVdURgxnnxZAALgsAfc4Pnzj5HriUBwc2APAdnmZ9gb",
  "key7": "FnZFYCEAap2dLVHiWtHHwgWUWDca4gfG3Yiz9i8GCbBiv8D4rSFj5e6c6GLDh95najLQiYTeDnBpcQKveby2xgC",
  "key8": "4uxrJ3JA3qJBPSCASe7aTjURwTR8z95Ey6GCFA2cVK7hgZ3u4eY9bQ46wy3B194WWJp851pKEmCxHVCWMPoY5JSK",
  "key9": "5dWG6nhhxwZVwE6ZCGKaKFrYTaKB3AhtesopCwXqWveqBcCoit74YZLmHVDxG59S1wBvqCp6tgXXennG84cPVWPm",
  "key10": "2xVJgGCbCFaivFnXrmxm1sFzswpdN4wxDnwgiuc8Ac7fr2QymJwcUU4MGARwwXmzTzCApZtHLinxCbdqRMuLCv1q",
  "key11": "61RZDRuuU9jZZ2ob7e13fQqseRT6cTmLZCzbExVPCpJgigYCZLSDCGtVvd1SnVqwavPJSAZVGvxLP7RwtxaUkVtU",
  "key12": "yWpDSJ8SPmEL4NTVAAv5Shym5LJc4MkL766uc1bCCDFQGS4oKQvfaxkLgYPYMGjFTp2UQNqxwnyZC3Bt2X5y6Cp",
  "key13": "4mdk9EGUoKrrF8yK3KqW12Qxf7gZtxgoAHJKhV4B1wy2Ap1HaFbDEFvZ6obSxuhN6Q8iSVrC1zooVsrLqFRJzJNc",
  "key14": "H4NwQxtKQxREPa8UTahpKUbskwosPx8nQBUhHs7t2aANRYdBTXajsmQHaiwUo1XR1NiNCnnX8331ajr9vupRSMv",
  "key15": "2sUoVZMf4cY9yp24uo1wMivDJWXLZUVrgyGJtEeTLc4MJZP6Pu5iUEGEuhCeze8j7MkUcj3UNzEVY2qM1dr2yamY",
  "key16": "dw9AVAV2NATnwcxQWtR3ySxtwtZDmidckHTxWL1iJYgs6xgSyTsmf3veRqbhBevUznZmMZe8ZBiw9RxYWbC2E4f",
  "key17": "2JwR2jfu42oqC1pvhpVrEUTKfQYeVem2yvTDK6nHqjKnAv3Z9749LkF4o5QFwA9jfTQouQSGcQqcP1NdaKAsQQ6b",
  "key18": "2PegVBgpmx93BD2F66TC8ZNtw4QzqxHWjeo7znzgFoQ1g7VpL9NzRMNLmmGRsyEcbqxUhtgoySbxdzyHw2Y5V16A",
  "key19": "255Mj98szDyNZSrMNxpMJQcLckvEHG8bu9fzGbJfiU71KJpuJY4dfhcMgeCnTjudYveCNw4okyNzBk2LP6r9bZnf",
  "key20": "5BJJRAN4b9w1BuT1YUgR3xSLDSamfE2rCkcZpiirRhuHaQ3tc733W3xgJXrFQ4z4h97qXpWzoVvrQTDt1p192erZ",
  "key21": "3G4ML9vGaUxkR635pV837t72jVERDWbgYunsujscXF8aFenaApB9Ctykaisos1wYvdZm6UKq8aMGqQW62KKn8i9d",
  "key22": "2MAMDT3BnxckTxCN2M1rVo15AK5yCCAxCDTRM4RbiFwbELb6v3F1gXN3qp1kwq77v8PDb7bodtc92B5ppk325r4Y",
  "key23": "2VUmjbZBp4rAQeKt653J92XRQjyB2yeD44ij9n9XR8avNEnwgLewbw3hEzfQY5yxhJtxoBoKD71iwSxRXzQ7YsRj",
  "key24": "4TGKEn974y2xtGhwr2EKm6Fg4pBk1n1kdPR9Maa9RGZgsNUM8dKbqY5jspZTvvbUnVshLersxiMu9dNiV8pPASG3",
  "key25": "2NAPjZTjRKzcWHZDkcD6UPnniXU7YK2zeWFYph2on4ajUHVtcjnBvXfhfoxmEwu8SSMwtxeXy1rSNSfo3bbNFHvF"
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
