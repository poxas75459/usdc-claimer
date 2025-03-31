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
    "4gqtXpp1cB9Jm83sX2ry877ZWaTQswAYGd4yxdxszo4APmGzVBapchUpMEwKujm8nZFVopX5TwqpduWA6swyScRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bVWWR2Vcqkrt87tuNfpWTo1B6GEuw9PwPWDsyp9TuMv9b8GiKZvP8punPrbB6YAEJco9c1r4iSVnztyQhdo6e1n",
  "key1": "21zTh2hnkjqEzrUZxVXroqzQwFYc1ipYEgz29DwatFEwDv5kWY7HvKXWYTt7wVYprzwNM4WQHXKuYZybGstqygZX",
  "key2": "5NC6v9mGEHMsnEjVBsZ4prd8xDxFu1Zec181J3r2VykTUYRVH1J7Z4tgD382vt7QrmeV8EHy2tqV4kRD8y9H4cGz",
  "key3": "41GZ4Rd79EFb9cfpLKVNNdBLSPJ5YpAsqM3nvArmyoRzrpDanWs5ReaxfeeVoiH9AFj4bmNM4bUSN3dqLDSCpKid",
  "key4": "4BEr6MCAuy18xDUFBx9tjfhXx1hQiRus27Pz5CMXR4FLzYUNgXtdgveS4tkrdBFK2YCcZAtVN6hUQXXSJB9ySQJQ",
  "key5": "4L6eArPmYpF1N376xjUzQLk6ayiSyhdUmxWCjaUQX6G3tydEB3kR71XvoWktZ9UrxbZ7NZjwYdjHoQENkFcCDRqP",
  "key6": "44oSTnZhCncpg2JiUFiZgVSVwjge3ChUoeG5abLeoKe7pmch2KQUjtt5mwdxGnjeM1McQ67PX8kMtpc3zniJ16wF",
  "key7": "42pFVZj9bppJHfWBc3PDDgt1LxsrSmChbSoJeHfEug9q3mEA2gsZ1Pvnva5NjmqDVkagqjDoG7ZXgjF4PFtQfZEa",
  "key8": "2bpatigroUfUxhU9yZQcd7FQZWm3CwFnBEUT6qfdfJeBPpPxa378gNyvzGcawzKmhPxTwebTyv97owMtUayH38do",
  "key9": "46iuumbap6V13KNeZov3hBV9zKzfN9XYbG1kj32hKz1bUPnUPWHnMWpoML7yL1nc3FZSx1p2QnThu38hJjyD2E42",
  "key10": "34rKZn4dmZa1ArqPqUeBnCoa6YbCB9XuDuQ1Lj5kTGogBKDdGZQ92cDWeQkkiRKB7CZj8GkMwHaSg3u9Xz9QvfnN",
  "key11": "4wFgp9M5Vzf5t6piSpT9E2W2WMKBV8dd7xBkQWFXBTp7qL4pNed99VgT9MzkdhzR7JyB9eU4RynhXcq9Lo2mpLJZ",
  "key12": "2wWeC8tp5b2dCixqzgPjmd7V28iqkR5JBEXSxjyr76jqLjRiorDz9Ap8qte8uqAkHgyGeewypQfyZkzmhzSA5YDV",
  "key13": "58B2LJe6QMS1mBawuKRHsVd2Kj5cEq6y9gdy6GkVGbYiXn4dUWUMNN1HruQmUM9FEaRVvbKW8F4kUnfckFtWb14k",
  "key14": "2W9pfzcfWGk5cJ4vBB1UZGheJuVYdTkUNbm42Sd3XDrrr32X6VW4Sp3VJ5oGGAHKiZHfWbEpdWA2zESWHPkXuKtQ",
  "key15": "5hv2w1kGookNGe69fdcoqBxdUrfgwmpHZjWyzvvcCD98FJ5D8RMzvTJBDpiRdkVvBSftRPbQWtsQ4aJP7FCRead4",
  "key16": "3pj5QEW2Pj15LHkJV2f2oHovm5gwKbHK6GfqDdPhKTFTg4sZsNLSzx5x2D6mrYCY9zo12zJJhkePTSDgmNChZtCW",
  "key17": "ozb9dqFvn8kZj9RamwYSsgv6eJ2gtt72DvjPj5ArPLWMY7z5ABTT5zL97WT6yTVshP7FEGx3dHNK3p1no1TtnTT",
  "key18": "4aevnrebFrfANkdmMjJ5bEz1ZQ6m7y2FQKSA819BwL4HsCFPh7ej5iFByJPo4Pj1GhJDC8UbRYgWLwbSJXU2knRK",
  "key19": "4vzE5X7YFp3sbmWBAR1z9BHjRZCphaugwxnRP6UtVjAcX3W3Zt6m6QN4sD7m6Y3hTdcYCjtHJxAppVt5oseizYMV",
  "key20": "67PpwVhMYmKdy9YW9kBm6v1nYGF75d8gDAY8FeGET9g6U4QhZcXFqFrdGDCL67Y7jjpGW76EsiACaVB2TuiYFwpK",
  "key21": "21KBcmmRwE74YA5K1TmVwr6aEYbxKzQGmcMXkjEzRrKqWmJ9fAEau1r1SyYu77BWk6QXx8LCMJAEK6iZBcwn5JL5",
  "key22": "5MTuXEkDDBwDQhJ74pd1WEydTdbuFtgovfUBpZkgc5r9Ngu6mQeyvudJGLDgmTKWrtjR2Q2aBJ4ou2d7VCQNsw82",
  "key23": "3qJWkxdYY4TttQ2pumG72fsw5ma6LDLcYdGdKvQ276u1gWTw4At8bc8jpsya7wZTKbV5922iYa8vQ2DFhFGGjCkj",
  "key24": "5ZPV2HYpY2fk5hdRTtAtwnGihB7AYCyB7HaxPQg13asPHYFoyZmqGk5xqyGDbEEYWb9eW3RPDeHyXfHkEmv5u6wo",
  "key25": "2d6RQTG4ascmDt9NCLwzPxwYPkxZq1FGdcaSgy3irwv9Y7eR6ZLsB6YeWzwvUYXTbSzFdwv4PEaRrLyNnA96WoZ2",
  "key26": "pwuuTuSaxsC1eQNXdKuPFH2vT4HiPSBkZU5Vyrbm5fPJ22Uozq9jbjKzDfQfG9WQHWHjMYacbnMVfdWaUeoH1YN",
  "key27": "5rnpqUrF4c1LH1v6yFXTVAYCFEtPk2ovLP3RvVY9qk9KtN9z3xrZS2rHT5LKMwzPUkqQaCrewemfFKbG4BaTnEag",
  "key28": "5ZhawHkVgyZhBpERT4jiaLNxVbTxzNtE8bQGHMVPAhcLi7TnafFuHAvobamgCnZ4C7f9FWRoyVQZdN8zdEtiMzav",
  "key29": "4XEBvhRcXBFqY3tGcCipZbtx4PPimk79umKeAHTd1Fx2yzAjPAnzwU1yMRt6hZ5BDQaN9REZtK7WaamL8xrN5VKJ",
  "key30": "3PKNeVjp9FfprRTKpmWcXJNiUqTg4Lf4cSriAXLdV3TZHu21shNuRhR6VbCaBzcynyiMv49dCsxftHfQbPVUzfzY",
  "key31": "5zsdKXffiKLUSQ2f196LLj8kNpLpVSBNX2JyM2EFUau6ArccQMbYvQHPzLSrn7EySLyn6eAvekaq2uvgT8ebMJF2",
  "key32": "5ekxaj218naGddnHML4iP4Gn4joj2gF1nZVz5a9xAEyjRrbdUQWJxJrnhufBfVMf337u5UbWKEuJD22mP3YTYK94",
  "key33": "2fi4xpTVk1eSDDTETfJJm6kjC7VCxweoshpL2Nf9gWPqfWsYvAZkbFPh3YRiQoDYXreGQKQfZ1KjNSS4ppkbipF",
  "key34": "2rWYJYKBZDpQhEjFtfBTFNX97jSpP9vzhMQbCMbCh6GbVCsDhi6GPpcZcSQiou2jmCDimg4BuBf9k6SeoJNiYnB6",
  "key35": "we3NyzC765dTyRYY4ryvdUSspS17wQiCL8Si6KmrF351SzodvD8xeTrPS8Sj454RxJRWP7TGWhLXJCzyrbVoGqd",
  "key36": "4LHrNvAuHEuJ4J6W5dmThsPKPKYZYyMXQnA59U2XuVVjKTWBoBKVxNKm5PaeHLxYRT6vJZ2YCNJa1CZJExAayGJq",
  "key37": "4ZAtFthtFsBaLXws4XqKEEdgYGdFz9Qmv2mn2RgWnVr1kSoYuF4Mh8SNFFswmM3sVm1bo54sZekLE6Lyawxksyta",
  "key38": "5vNSuDhPM4sxyB7ANYr5eQE6z7yzvMVHNx6ZjNFJy3CYvQfVZ3q1kYua48WRjViEa9CphLa5shy6RuP2mPcamA2b",
  "key39": "2ASCJ3VCFpL1AQnw1xeQqjfk616FBAWmMfocZ1H2ZTuea89eagPPXwf74sNwfoP2nY9Xj7kfPmRLh5RPiMYKk3x5",
  "key40": "oD37yRcgBsN7nHiKkenY6vtLmV6KvY3xdpE95tcoZKz3CTcdFWN2CHkHTXojCdK8sqUffHb9wiPgCeU9mQ2Zzqg",
  "key41": "5WpjxVCtkHxZfBDnDYDog8GySumCiBvrMCcsCfWuQ2cPjYuQ7nVytbMGHkNd1FuvNzsiVH7YpaX2ZbzrQgpG5tHG",
  "key42": "2A4rkC6nLtojo3h4atnQTf7edoz9RmkDNDTcdhQJ85y2S8umSuUSD1Hny4EZEvuQ3UpUh8dmUbyB2aT3XvU1xQKw",
  "key43": "3eqvxW3RkDpms6ARbak6YQcmLDDY2o552wnvixwCg8Fa8JfkKGzTRfC5RX9sxTFtTpVnMBVPGjDV1Qy88n1DmjQN",
  "key44": "2jgqHZkBytDNZAYRwVUBFdMyH4LjvLpERvJhHMMXQonGKskptgxpA2wNVwYPV3ytqJ6sk1hkPEUdfofa9upjCp4j",
  "key45": "5Nry6RFm6pVxTQovXVXdKNGRypLVgyEad4KNi9PXdiqW5EKzn96Ssjb1HogcHAn21xvz91urQ6neHv3ojsZ6u5jq"
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
