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
    "w141VQgCR1JBmiwDbPBZb7nGCiWSwzs7wtE8UEYycyTCHArEEASxSx5wocq3hvE8pD7a8hLV3BxnVpxsNLpgjj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QaxVny9Bi9nuiJpjKACZQkGGMMfVPjstdNbQKa9NCiiDmDX8bj5UQMoZ1CXtBp5SPX9L6wGxVhVraywxYeHLPfJ",
  "key1": "5BP9TDy7FcLmdB4jSk2kspi83cuvUv1bcjAiaDtzHBoTzR1XKvWR7B1WACi755QoTBrHTMyySSigvndGechAAvJn",
  "key2": "3RWNmu4iVunbPkCN5byygAN65NPWbgLGcDGCrJRzo3MnjxhLQFY1x4GvqUqtkJ4SmoaW7ACGTYGgaXs4Xvgqv7f4",
  "key3": "3Ln4in3ksYCeLBbhRuUm1AtcNvcKxDUwurZYBpaGyVGXADrsnMzmUMyKgb18Mtc6cFjsgSNgY9HHnz4sFn6xKSKa",
  "key4": "2DSefNHAyLjJxoxH4aFBKDHbyyyEYVyyx9fiV2Lcaf6LP7R28tANC48sixrb5AmrA5JPHXNrUrYEFksckiJjFvGv",
  "key5": "4YXtjdxQ5Tb9EKFMxYnijiwdGp2iGyBVXhYW37Vg8DnSnXff9uXhsr6GFecXR1zS1pvMaWKofoUw7tvNBqNjfTvM",
  "key6": "5v932wKUiMQ1BdgJ4DuwvERtdRBzN3sdJrja3t1wYWYfrTqLmCVsnsSnsDfPS2RnhG8ZCiumTFxZJg8ASbyuZpfL",
  "key7": "53AspYBsNxtFyZYudSo1PiyqAjoVL5bhbusLPzeKj7bU9KprMDgNStAk1QX3uHX1ZWJZD32CkUaM318NLn7SsyzH",
  "key8": "sMnQ3qUTTfV2ajtgo9BARavodTBEdBhukRewSuvLMeF4YjDWkkApRV1XCuGFw2FitNV5P87KnunprQ7sC2VygtK",
  "key9": "UGLG3KDefgr6dwrV4oA9iPDHqs5EcEkRiBFCdp9hFvqgnDShWSUQcv8qYsju3Db2Ym4wKvQkooUn6APwKfmqcur",
  "key10": "5xVMcGQR2EmRQXro8CwHjZUGSy6EiRymB1cETXd4kBYJJQKPVpuX3474LkXYn2PmterfqcWX1Dpwi2yA8QLZbK7J",
  "key11": "3ovVEY8wmTXEcT8zjck2hzexqkJfMcWpQ9MPkK9FCJGicbbCDsP6sNS7wxBaP3YvqDo1Xcm3dZys2rQEwn7x8j3g",
  "key12": "2rDyqTLG8U9Dt4NB82tJ4Bi3iwBC5bC66gphpxKfAZb5z9puE9VFF95uWz9JrFVP6KXAAhVw16fuGcMSRCV7HNti",
  "key13": "zpQp2hSmY2gm1rzwugUbGawPmTXGwFMkoZKwPWoBkLCrnBmBjguseGgMi1kA9n8LAwXyLhSbuauMW3AqwAinv1d",
  "key14": "4wjYGZsoerwc5rQ7J4Rv8UGGwtnL7Mc6PBnYdw84GrEW8rY2qnSUxPbLHRz3eT6VvQuKZPs3VLckr89Xar5vDmoB",
  "key15": "21y2Zjtkn5zQApABVPpCWwL3Pi7CifF4wP3pFw5iA4TkqpBDsrbkg9jaYngv17dov7cvmDoUeEwR8CWhCGZvCzSd",
  "key16": "J2FeePJ7QSNyWazPcWm9TBLANb7ko5aLE7QFJxriKUMN7jsxaoVyxox1xg2t5jQypmrgfaWoUfZSEHzzxhHoftP",
  "key17": "5pTDTA4o1gQPVGUunxB7bpFcDfCbojHTQvfxe12Gjp8pAQW4kTuAm1xTtx9ZvvHJT7rMjtrFj4KLH8HWvkpegDBM",
  "key18": "2ip3VH7Erx14ozoQwcanN48ynzJhYB7CCufhBes8Fgu1MQge7QBg9vk5B2iptkU6eBzxHzS3NsYPbVtKVfuzGs14",
  "key19": "4VkxNjNStCCgvD7bXexjyW3AAeH6W8yCURsJREAK3QMuvoSM6oWT3XmcUF8uiEpEhQuKVGnpPvfTaRMWaXd2MqYV",
  "key20": "5DXkfhRJsbwZSWVzYecx2WaXnQ2FYm2vF6435yvgyg4rgxKqFwZHu6M7hZttupGNAWQ3QR2fUq1NUaPyBEad2yeE",
  "key21": "4YwfeUmC1e1X5UaNcAcqUZ5Xn7eQXNobTWHkobinPfN7hmddVVMhSYK8h7oeeuMWf7bX1oGDN9Nz7N3nc5kXfbmn",
  "key22": "4Rxsp4upaiBfyGiZtE6BfLYxgpfuHoozPT6VGMoQYDHWVFAcbUpQaszUDjJ3oCQDAGjapdh1BVBdWypDW3jcJ6W8",
  "key23": "3obC6KxxiE8qXEdjR2Q2YemmkYVKCWJzKmYtT5A8Dv3DZHfEYWD33ZwTnrLfpZgVcL7NK543DKb6X2YqJSmuC7Xu",
  "key24": "4zWy96VX5Eex9Tuoctoj4M66pBn1NqKVP4921rGscJxMjMXfF5VPLfLKqsR9p1qHD6PjxTx76Msmem1eWXZ1Cj5d",
  "key25": "MULWSJbvtsW7F8dvj5XBXbPTW1RoZrMtDK6dCajL9TJHVnuhdLB2kPfZa47MRiG7iptuPNB2nrvoosVebauuQ3C",
  "key26": "4S1Xou2YRoHFhj6TgiKpsYtQeZ2dCheznppX2NSuEhSVSTKvHaXqDQ2n6qokRmbAYy4g67zbGpHfnn379h32DaoQ",
  "key27": "3qD8gLYWGFzwBAGmw85p9CZsvkLkRBXM5HBds4dGiEv3dZV6nbafWRwPB71ZFXy2pGnp8V4ARzAodfCrHWKhLfvx",
  "key28": "2LVGmjoghb7912QE1ZpEE8myvng5DRqRQ9pQCVFbVsNEbjGSmfL6qCZ8Juo6zjCBsNb4PnuCggjuKMXXwLgj9fQB"
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
