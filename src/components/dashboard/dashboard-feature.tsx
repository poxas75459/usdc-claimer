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
    "2HX9GM9vMTFcZ9cTBDZRwtZorPyorZ8mztiXn3UNCE2HJsxvWoJxLf3mHDUvkNj8ZoSt4yGxdVuf5ACfsFRKBXeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6oJYQ9SWS13TcdbThUWUVYv9WWSFkk4mUE2GKnD2H4waFwra1kK9DXbvRoJovvR7H6KEvFKDhwtMRsTY5EonkbM",
  "key1": "5wWpQnEqZC5C1r8q9TCUNFCYJerLGssC8aMuS1CDWrCqQb7yjFWgFhntaVKuote4gmY3pc14k9tB27mwGxDQgpmq",
  "key2": "2BbaXbMQGxUWuABBqxDwAEp4VCLA5VhyrPHWRfS85cXNPkLYSnPCZJ3XgmKvzZ8Lj3u3d1DxPMH3Akh4H1sx2Y8t",
  "key3": "3kt5G2ENFTkde58tyiSLhWWtcCeaiA2S6D3KKNHP3jEjhcmSspd5j9U4m71XfG1E19KTQMbqT7thfaNTfpHEUyGU",
  "key4": "MeHHd3fVw2a1ohmxdpWk3KszZXiY6nHev7xcNdACTGt5HUNQpu6RDoubjt13dmXX7cMMV3q4k85PK4YLHMftKnA",
  "key5": "4VF3ncZd13r4CrfVGwPDqzvJDk3tqWfSvWHTooFhLb1ix2Uyu8GwakH98PMVNWGwaxi8Dat3jRNitmkq5UrGxwVG",
  "key6": "p81FP6DLFn91Embwos9vg8jMTFjvXHRZ8mPH9FeqYSFQXBpPEwBeidg2LaAArFhGBUhtemtmSMjUWSfwuPBeJi3",
  "key7": "3Jqa1gHhEuKny3wPQbfPufWCwWoRGnN8Jb15r7tWsLNXwEGp4T8Y7NxqivdxYjPCanr3Q1KTfBo5g6QPxfNcuNq6",
  "key8": "4g1Bv2tuTFnsvST3LhJcupVKJ9XDQ3Z9En9X8Rxgu58w8fpEiJbx5na3JYxh4g6K5BG3M3K34NJZULKSBtECKFf4",
  "key9": "54Q2tRCpHFgzZRYtwCKhePL9i5eYjd5cz8xFiSZ48CRkj5y6AUbgivpNwofE3yxQkTnHMEAxiB43LUreV5UadQbw",
  "key10": "2PZ6xYPrheni57MoMaWzcN3bd9AVBh9LysMDZ8VP3fnzqKASXKPynQTK4YQ2VLpG13Gr6WGtX3tJsoJMkqrdK3LL",
  "key11": "5dp1r6YPV8wvGj48YWuYrBpHrjfpuUpLzj8GZUFzxoQLJDu1Ro95kzRoMGkAAvr9tMk9FD8ywJxPnKsWgqHDaaoh",
  "key12": "4DtM1MCypSAxoBzbTap8StmxMsUytJPi5XoNfnxbbAk4HJ9bTSiDW5yVsecpy5RjQAiFicsWCFPGngLCqtDBmkHD",
  "key13": "4obHrhXrsfSiR5aWDAuygLhh7pTQiq9P6fj652BbRJ4UFAUBAkpphfEzqRr3AQw9CWQntVnJQVE3zKf4fTDV9w1k",
  "key14": "4ARwiuvnNzMw6x39FDCoZymFEz4VFB4G97Zmvzquz9MBdYATjXaJpoS7jZZ3ymWCDSYKeU4ZaQkknz28ESiVYRrc",
  "key15": "2PqXJWanP57erkZa9qcQg4sUtZgwyK3FfkXLUiKNbcdh46caprJ5NYBNUSGffQB4VAo42kCVZnVSBV1wDX5ihfnt",
  "key16": "4ebNm4m5qLTwp7P9GFUDppMXpXNNsuQftZYQv85jjADoiamLUj89NggHhy6bWrMKH3CeP5vuqPbvuuMYxjGv6pUX",
  "key17": "2a9t7URgQ5msQacrJNaKP9XA1jUXYcghY8tVg7LfhKVAwAiDjQTPUxkGSCcZbKEbgXSV5BJUBtTqVMQVVw9YddCP",
  "key18": "5dhb9zT5dEcyJ8LksHxoQHA3hfJ6aPDD7i5g29NttV17sRyePErFnMZcoxxnhaVKMAab6QGMdzfqX9SEX98D2qyz",
  "key19": "3CjCArUSumA3Beph29Ne8QGbgnPKUBpdeqgfuHEptkUx14gu49TEzRAfFeDQu78Lf6njcmCanWrgbtgMBApoHQAD",
  "key20": "2PYtUZcJ5g6XGbZc5VKQ19qv1QNy7pc7SEefLSkNvJX8aPGhsT1PWmvoKzzJ9UTdkgu7QtRHwAvh2EYFQ2P8jXP2",
  "key21": "46VqnC6YX9gzcvqR933qRd6ZK16pPrNvrFQSyGUE7nsf9jZ13tcpNcNxB7XaYQpHv6iL1CDW4LLAA3hVnyoSjRvR",
  "key22": "2mTVUWCCsVKwH5Jg86sbMAwEQ4PezRw1szxe5b9y6JDZFvzjDHWWofqmZpkLXVAmjCtx53DdrYKwk78eyJzZLD2k",
  "key23": "3d62hkjbzN7ZpAaxTMmmBKkyMZJUn5VMBtBs1fuVg12fNnpApLxCjGm3MxMF67a52neazEjx1bNbMAzokbBtvUss",
  "key24": "2F9whzdkeBvuYVTn3tCkZLFydfmxHWn5z26NY8HK8csqhbh7mKFW7w55WUoxMQqknZqajAmKFWpdyZrEWpxSNr2y",
  "key25": "5FCmBw2EQm6nsVYF8TjVue4nX7xhKbUf48rk3XQ28CcpVqSeURPEjWia378W5wiQxKBZsStKp6jLsmmf8WVkpmQq",
  "key26": "39QmBTbU6subfdeWdw2L64Lv7ajPAAASgbfpDzHRNZS5c8hD1Y1Mdyyp9vS57CUXZ5suh9AjvnafPFfH8Ps8iPsK"
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
