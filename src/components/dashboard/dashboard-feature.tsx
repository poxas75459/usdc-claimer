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
    "5qhYiCJ9q3EPW9f5YNfVqcto4ZEQTE81C1kQjsc9VukLwHCS36VmBTrc7aZDgnxzPBAf6rRm4NPiJg3m1KxvqWSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K3GjRifJFuuHPRsKwsMr9tDD7iDem5v6vPMT5wtNPb8anKaBY5UBafUVGsEaLyg5WXCZLVz7mubNaofXvt1q6Xy",
  "key1": "4FsHNuvc49RdA5xRC9h8DnsqhSM8gYrDR2opFh2pLng225HyTKRYfY4xwXPLX7dR3BpsucLdyi25nc2pqwpyHqYW",
  "key2": "4tdReEueqFq8iBbXijtHCjKpdbw7kfC7GrkjgBs6oXnKAsMe9iKoVxUVVyaitPfiXpAVhfAMaZCsP8xRE69DWDRW",
  "key3": "5s66ADrh7GgKZ42NiMe1abgdpv1qNqmc49gmoGgnBX4ScTevDFpcYq6KbcHwo1Qn3XH2o37TkGPSLWwkS51w6Pom",
  "key4": "5YBYzvabCpXNMukcEJhmiEu2TVHbbsdkk8XcjybtCK7izdDdUsJ4irmHH8tcBChBpKLKTGbm7m6CotxvQmhQtT5e",
  "key5": "XVLD6DJxZFUuCcwSbtoFnEbKSzNeka4zwBgKhbmjp7HToe6F66nH11h2WAkmJj69z2betWnaqvGpqeoic3WJESV",
  "key6": "55tcxwtKwNFwEwYVUyde2MgB6kfF8pL1RRtPyg5WnUi13XYmJH5nXCmG2t3xrRjExJ4cmVdFQciMzXHByAFJxRK6",
  "key7": "2ku3DRvG2TJeE5iboLgN87YG6niXeu4hDPojyBRRb4TToTGri6Nh7bxL7ZmKX9qCbKhUGkB9umHAwYTyLna77TDK",
  "key8": "2Jm2GUi7Wjc5BYkdrQCdBMmpR9QbVt6xcqrWMwjzptRUHQBfS9bAx6FmAb8831VE4Apjqzfx71GRyKrvLZoHRqET",
  "key9": "2RWrc9t3TdDcBuaXLJaAAZropeMyBdUt7ZKA9bp4p8M7LAZgE4vi1E4nLew8U5Qd65ak1EphY8dKqGDnRDaUd9i2",
  "key10": "4nTVDSBYLSdgb22pYn7PCknPccRtrUSawdR2MC8uVCTEFCcnVZyeHg6MzyQJa7s4KMQmBJiQpNJm4othzyqjFyjE",
  "key11": "27gRMbUfGt6HrkCuq21VR1NKdwFAA5DDa2C7wUeryEnbSM6tRPTpw4bauAWdD7xeqBgVD69HY5rw6FL3yDGMX7Li",
  "key12": "2heibJr4z2PcwCVBoBoCyagNGgnxG6AqQyDeKTLtuZVQ1sL3C6dzfycRzNNgTkex8KWdSZRL8pbhKRN9WcDKif8k",
  "key13": "536E4LxugkMh2WkHB45E6VFJXWGCem2Cx3CAPGhcWEoQeWnWxcGXS6P9WLKNx5FPLEk4y4ryKkkWntJspoFLdxrK",
  "key14": "4RabGbVw6TSePrUvP7HYMGypr6Hm3zNQjQgjUJ63oP4s5vqPHNX178JWfqumf2kkbnrhiWPC2wbYeQ6i3YE4P8JT",
  "key15": "4uQDTfq2RpHBRhU63z3hyHbCp689Zu4nKALAoBvxX8uK2ncxbHNT3errZ46wqanKSZ5fYsnuBbTbRNZwSTHh38qQ",
  "key16": "L3JJ8p8uDC5dwazyXYN4WUFtF5vh7NhybEU6ZpoiRqW62LQrtXrAg9ewGc187z5KtBn1Ms5MvUtCWjfcYa7bMnp",
  "key17": "5gV6XtNJx3oDf7sdfc3axm51E76oC9xvF9nRCZRDUY4CanfkQ9fFM8cmduserLEtUhet3tcZe8Bg4ccQetzabG9M",
  "key18": "3xdt2kTbKs2ED8RjiEe9ZAjDgTxNSnEb79gtnQfhPq9JRC6aXbnqHPHez9xzXeX2G2TLWXFcSptTtueYdDhFyaGe",
  "key19": "5dtEHivqSd89JsKw2kVeUWnXuY6YZzr5das7tv7RFvExQsWxHbf8s7aJDhrgT9tLiAhq6i5ZwPg7rfMURBzo5hW2",
  "key20": "3jdwhSd2v4onU8XWpBLrXJCbkHhzSyzAhWiUmCBrDSj2ixRWbtETN5cj7DoESCxUDwC4GFjUkhaoDtdtEaD35HZZ",
  "key21": "5JBKg4mEhBTsnR1ttBYZFSSZrHoTZXdTM1ciRj7sJjjzuTnn8p5GXHx2EuzDxL3VAqku3CknXwUuQeDd8d5HNfdQ",
  "key22": "4Z9zyEzqiT87LcrTfmipkmEoNcES543CmPcb6BLPjEPNXyoQe7yPthaVcBhY58PXDW3ugYSqKUW1Rk9iCUTuRxbd",
  "key23": "32GzfrPb212MXZQroBtXTP4mpZwvBVH7L3sEtmr4475Dwu19MXnJFyX8RzjbC4DHSoJKkWXFGUf8u4YuHk8JmEsV",
  "key24": "2F9AxFRsmHoDvbEoZx64K7q3eLEZS6dmqNRSZ65KiUnv7CmYhTujQKAxV82A9nYwAV33UfPjFDiPCy46XXQXw6E7",
  "key25": "3MSQN4zKh4W3zHWYmekQsTFvqEBjLhnab4dXGXbgj2vsdNmYjZDcMvJZsfYGF5cK31beYPEiBkL3zPjYQ9ZfMHrC",
  "key26": "FbzvEXRpxtJpnE3D3L4GVL4eXkxAbqCeGntdkLQsUKkQ5diCS37gmaqD4CvowS6h2ZsKZtD5yx22UVahbcByYNP",
  "key27": "5qSB3n8evbc6hYkn526XA8gUNDpTzuPUNnwsagtPuyn8Eoth8nBMBsBYAzAybxjxW8y3aUAWUs76PfKWGoDTcEeH",
  "key28": "5L4JDxckMh9xKJGoktCtmtb3F76r7BT4PRaV5qkeoN8MjN4JuxsZnE2QRJSnieS3EPtvuBpMAnc1eFLCCiDwMKEJ",
  "key29": "5Afp3LJnqMpmyLcsX6q4qLubexUMuav2jTLYJwf1hX1pM95qKm7L4c5hg7ZuaJhAtsfJtwqbNnpoYgv96no8mNaG",
  "key30": "PDfRN9DeAQ7kyK1KPyxHeYr1X9k9BewT5JS342G5yvJiavNmwQsKtPKv4gRsRcyxGTTZKKLZ2YaMuWCzkBpP79G",
  "key31": "3Uguehr2BXwyweyVerdLPqDiZekL2xs9aT6nGaz1nE859jye7CLwZPSt5zJEg5gfcX88hAGEF3mQE4ZiRm4SBkes",
  "key32": "UJ8A9J4GeDfahAK522iQ9BwmoptoyxpPjtiYtv1LLBR388kjTWc8ZRURcCgKosn2ppkQrvBvRKHTkTqQBtLn38N",
  "key33": "2omSGZE99YYus2o6yma83863RgUqbHoXvL2qejSKZTMekZY9CSy54iyb4Gg5QNbHmseCXCz9QGeTyFbuAY6ww7yx",
  "key34": "5UK1k16MRR6V5LkTtn5gdAv6frzQuWPYRw4QnF24WuEi7gVPx3J2W173TNUnfEtSrWjm26GYNUNbJ3q83PXV3kzd"
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
