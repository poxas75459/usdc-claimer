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
    "4XWX9AThdVRvWUTJqzLF3kGrM27ghK72Lq41LiuqUWto5vnPFg43KUyEH8chvrg7Z5m3pe9rbS2t77urMzgnPMn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hzG8XGj6pzKvua8aQUyLueSZ8pMQBV4Jx9uujPSCznaWa3YqPvhhnqm4DikKER6TuiXM6cCwFXrwoXRxTibHinB",
  "key1": "5H4jjmiSha3YWNTtmUrQnoQs5gpUYRG5RhieeYL7rrFzo3xt7iFEaF6QE1yKUpQuP2pdPVcbPU85Wn4CsVCssmVD",
  "key2": "333SWm8LmeV2tVUB9sAkvDyZCudnRjzWyaCjvSP6Wbaf2eHMZ5daTmM5TkydZV8F6FGhUX8nFq4yw6FoYxqB7WD7",
  "key3": "5eKXs4KBp6jPgPAewV3XFj7oAmpLSc8jVtmQkQGaJefRr13pmfDB1AjrVw5qh4yp6GvMsUo5q7wTv7oGggrcQZZe",
  "key4": "2kCCoeGX4FnGciVpxgD5v5ALg6y254UAaWNNZbJXNuk6ZaQS6xJZhvgAFNpx7b9DDHaXaaYs5y5kXy8R3GkDnXq9",
  "key5": "4tfXUVksDnBv44Yh9XLex4cDVaZebYHQrVSfBBvpaeqNj4DfmyXCax7pphro71W3GPUz1BeTXNn4jPedVjjU1SRM",
  "key6": "2ziYsombKszVr7BmaWDoqkZnH4MAWnVpqLCcLPwaUHd1giyNevmrVf5HimhKqwsG1t6PZas1AB1BvhpCGLp1eoaB",
  "key7": "2zQQuqmbL1YrTsXNj1AazdX4FnoHu3RgWwiKMEWXeAFGetXW63kBKWfcSBveuUmTY68V43ruUyA58uVqoE7isuqb",
  "key8": "5VA9dJiwnSu1DNyDfbfu1Vs1JCPZhuBCyE3nW14aejpEpmSKbfZLR9M73Ube3Rfa45N4ReG37ZH4Sxwp6ZNdgQ9F",
  "key9": "2mk9ijqRFLaLVfjLoSi1xDcP6RRpvMnm29uMq2yr5wmGsRX4xmn3ooYB422qXeW2o4eqWoTUH1uewd2ZqFkKXQHg",
  "key10": "2ti4VY5kW1hDCDw5xEKFLK6k46M9mS7Pr6GVp5b4Yhu5xpi4GQEpQ9Cj5QKuB9AbBiQQcBJBiLcARw8DCZtKQBP8",
  "key11": "45XDJUFdGTNFe6ym5re7H16B965K1aTWm454q5Nnt1xVcgSe87JxNoVTsZBiazuy9qXHD1FpF4FwReUwHD6Jmuot",
  "key12": "5W894tez8ZMGT4BDr9EZVwKeoWkggLyjyqCemC6NZG5gepeX5af3jiRrLUFsNAmGhNK1pssEYnQBoZyFRAoAg4ke",
  "key13": "5CUWdv6XfLRdCrynFgcvb2UtfK5Qgw48vZGTHo23DyA6P5ER13ewuPNqKQdKYT9rrFU4aWgqbjWSMdeQa72ozdtv",
  "key14": "4Gge3MSxtJdKmURAvkkTceH7Sa5z4Dws3mvijHwNmzcvq3fVYY6ueMrMHXasLtzhcfmRvTqQy622CTsoE6vj4bBd",
  "key15": "3okVVd2Z44tTNjRvzadZtE1qhWms1jzpAP1kZW7wo8mkxXw1NvGhFSHVTk6yQktb5g9CfBVkcHfydNjoA5HA79n",
  "key16": "61QpAbtsG83uukmsMdiaNHdyBsZsFymxz5EiXd12YuWdKwwhEkYKAv3qA3H9nLTWiHVyHhajFumb4gbBTuS1yYJc",
  "key17": "4HkrbPtmUge41wPLZjpFYTwxVfCMZ5vpafoACD9LrESiBSFSMWxBcrisiYa2LNBXA5V7CXJfKW8PxN861RHcUviV",
  "key18": "3srn6Qz5WP7tkBaF1bDcE3o2vPEh65AZz3Ef7Dp57Lz2d2mx3qMNHBGRT5g9hMG6zYvAF2Uu3KAWGB4BGNU9PfAi",
  "key19": "4o6WiVGyhxYjXfdsJdRh8F6LCoRRdAhS377sxawAnPLfD6Y4shVuFRZy5Nq1EhQoXANBZNcTNgT6fR9rH46nAitf",
  "key20": "4yEny4SkCKQkLUw9WrM7p1Qi5JovDmAtV25zvWLK5ZXDPZhLEx9yU27DJdndfDhT417K5JCTmj23mARQ8UuskixA",
  "key21": "3LSP6TU1xbZhkLojxtAfQu7U3zrdE4ziTXqSwemRkjc3npsG5BBcQ2yXMPn4NxaZeCbv7qgVrxKbHNxBBfN8kk7i",
  "key22": "5czNQr5D1xghi5TJmJiJ1nQyjVSTmyND1ercbQKsKPNJntHvcycgBeVpeNub3mvWYEbD6MZaHUem57CQQxCM31oo",
  "key23": "5rQJ4uuJRbeGDvLDqSSLAHVK9XamRvwvtstp8uAn6uVFGy7BUWJiB7FTshFgjKLKzan7EErJV2DLTYntDYRPE5yn",
  "key24": "h2EyiACsy9LvUwZJiR8z5fKyGpCd7LvyBaTjQjLpDswsphPPvS1FX6s66wrrQUEEc2ga1aC1FURxi4jrxmyhKXh",
  "key25": "mDnkLJPV8BJn91nTNeXaViYgQF3d8x1fUTb45mgxN8KfnsNVLShErwhdMVeRxT5sEpv1vTdGzLCJBtseaTQh7j9",
  "key26": "7Rn2YQKx8LEav2v8fR2sK7PzNghdsLibQojDWLabeREZTQaC1yMednxWcXhV15mAgwB6kaTU2Q5siBbA5tH99NS",
  "key27": "5iGQRi9mGFT3w2FgQNJtDj9iqhRMxvfVxjL6WbV3GNf1CGrWvH5w8evzo7SLne1DFaXvjd5fMCjttn62xwRb7LcG",
  "key28": "CvjEbEZ8gPoDAn3bhggWctac6am7DBH3hWgitPuahsbDgM1vKjQ22ga6M3U8B8P5Umwi6MDEHarmxtWUZ7zSyFS",
  "key29": "5NtrujQYZrVxPbiWTyoDiDNFQAGqKyDswJy1KqfuE8hvBxyXi2MV61uFpxR5k2HJYBhBr9P5i4AEFDpUvnjtyfy3"
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
