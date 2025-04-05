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
    "58TT9DobXF5wX3CtXB7VmZSnqqR2zZKNRsBQBNiZ4w3fWRpUWinDnWeRRYbV6yVcNijN3bpFtQpZwzQhAfYt6Czp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8qBf7En2ScWQ1jvaoGUiCFVB23U7RcV1zzBrsLmFkz84yjRou34FMo7KUmt15eNSbG1Rc8EdnvwKuRQdLfLgNKp",
  "key1": "62HsyJmciWzs8QFEeUqiMiT5UTgEaapJKzPBKvWpDxnxGCD4kyhACTXgqxidk6fo3dLpysQaU7ihRUA8yNAW3tMU",
  "key2": "4nzcd15KJ8B2zDeLqSR9ku6PF4T3JnHfACho3EkgjqiJQ99Fkg447FSQY9jVs3pUr3tT3Tu6ZPczRSLcjtu9MgLk",
  "key3": "5EhiVm3hyA427Pq9QoxZBLj2J5q5J1zra8Bc5PXrYRPUMcc2By81NQ4LTF4soChAtVTtwfZ25ZwTwY7wmpdbnKAE",
  "key4": "4CHDVfNj8AE4PiMQs8HMWDU9vfn5vQuaPy8jRuUmHRRAtqCj9XNtDVoA3Sh5ajZpU4hpYgQpxY1pg7hzJpBGi64i",
  "key5": "2Y9qQxG4XbubQeTVy3LHaZ5nY3xTkKpqQUYUYnKVs9rdpuWrkiH5Atjb8cH39NBB4rHhnMJrWQPe34bAZh47qVff",
  "key6": "2TY8we7Lf8sBTH3PBotXp1znaTA8i9nS2aEe1Wntm44nbxWbA3NHpWvm16pFEr1VUdvets4fW7deUoRmjwsg6nb4",
  "key7": "3G1fjFWUGQkCTKgTJSXh9TjUnorit2keL8SZzfnPrqVmNhUaRguqWxMmmHacgnEQf9gwtX7iJWXu2MxKvNT5Ujvr",
  "key8": "3PbKFif5yRkAEmx42JBnYNxwhHuLipzQ8oiweL1MrkrQxG97bcp7rpGvNyRP3GrheKWq3zDFZmEMk8T5xPhNmRwa",
  "key9": "XEv2ebjYRsHQyTCoy4bVPy9VUhgiSzAWz6UB8dnmtZVyx9UdrVFudp5DGY7dSN5X8mPNsWr8efNSdjChh9eexM2",
  "key10": "2wYKk4edzyDfXhvvh6HT8qk7oHMT9PKe2ZJqte7Nm2H5heGajd6sKVk6hjkDm8HG1QStxqGTQa3N9Me4TKsDq86c",
  "key11": "3WaqtpqsNb7mFz2mVhr8TZdNAcPmR2kdFov48B9EWEHFat8ADQDaradmENqgdp7W4xnC2sTFZvdEHcAoiQcvXmPm",
  "key12": "4hjsWU4xSTQJZj4ioBTb2noE8SCGCHtzojosQG24ga4QJNK6ENya1L2kMQCiwoz77ZwNsTGqS6VkVb7rhJvSB82",
  "key13": "2FBYJs3h3YpRTQHWDfw19V7zP32gyt5PpwAtngMLvRWgsagp26YhyPcuueX2vEHQaTUM2mHXiMh7nexgyXVqFQqg",
  "key14": "2rnLhQsPH5kBvr6nfhmWQa9TwMjrTyPZum9kMUZpv2QDxkm9CirGQ4ZkLogkLUApZ7a4XqNDPvXZH4PgJFGxQfGn",
  "key15": "38ggX253rDaTybdXPW6nGUuR3s4Uj5Z8vsxw6b4ZJhPDY1Z1KLgmrYtcJC7wm4r8499owEB7UmB7Z6ZJP3w8qXyT",
  "key16": "meko5F5v4sLZHsfVmaCgbtNok5AagecuGkkaKguyesy9CbQTDauURpgx9oQmjd3Xt5EUngVTjFkAmxDmaHWpVdA",
  "key17": "4VxSt41HPWrvS1HBUwgLeSNBMri2koPSXdRz7LXB346PwDbFXFhE4JQLb6JquHngFcxCDaXMDRCq6g4LckpzsbLc",
  "key18": "5sJ5CE2C4Xq5X5hARhHjqJq1yBxe2AyNcorzRk7rJ13HyE8j4rryY1vM8iGPiZkQpTt5tmYNj3u7wSrqzACqNu3N",
  "key19": "avVamML8aUzh1vd2br8tR9Sp51n1ZzCr1jFZAn38g2gag17i81nWboHQVnCJXvEWPjQtAdVFuiatSN8JDuBPNFJ",
  "key20": "31APu4gsrH7A7pygaw9sCcDxVkM5uZL9Z5LNdtL31Nf2pFkxVYHJhnWCR7LXbYPLGhmBHAUzRvwEK5vVAiebrCp3",
  "key21": "62D3u4nQPz5U1ySZ5n4knmwpQPSbkQ8uWfc6oWg5V8vmeQ6xJNCHbxLhXGqXnmmcf2bX2vKLoc8FykDPgwsWSRAe",
  "key22": "MaPoVMuPbuCKK7t5Zeyqfh6iaokR4WNK22pjFrjzHrAVh23pdVKguXi4VkFMeLRwx1j9h4Cv1DN4XqW5YmwQukH",
  "key23": "2DNqVdRPrpqcZgyJ8DVVRjw74MmTk7dqmjFgrrKMi88u2MAq9VZdhSM7Kvdj73KrfPiqaHYeqcy767AN9TEdhkfv",
  "key24": "3hyKhEhxWK2rjQC92dMQ1YQiJi13Kjydx4hk4YhM35zsw7erHEs1QtR9zFomDjL1LdifusgmJaikkDi63dUup2E3",
  "key25": "2JovGamZqCnhkjJktPVVAk56LB712t7b9WCGcQ8DCw5UjbbJufCpEYgUkgUkDg5EciuFsoA2PzGquNjTcQzTdHkY",
  "key26": "3uAcJ3jhN1mCQ5RGudEQSW569R4E7mkWocvRf9TRjnmZ7AQ1H8tHqAp3Kc38SeW4nPkcfR1j98wtLRbCt8mveouT",
  "key27": "2o7JvoJZFqseLBQp3XkbMepTGihsVmLQSryo2MsK5osEYxYpLxkbLeYy7dPpBPXnRBijJDbC2GPES4JD6m8FUASq",
  "key28": "5XyzWJvh8S7SgM3apTp7HrSwwNyfXWYzsr7pVU91tC9Rx3jpHQfXAcVtfbjYHJVRjQnrgcupoKg5AJPqRgHNzynY",
  "key29": "4KFsyya5cTk4KcrWouFcAX1x4i3vrz5qm6bRK1cYj9NCfutfNTve1QMxG9pANKThnguwBsnA3vwovwa31fp9Zt7U",
  "key30": "2gCB3R8XN7iuR2Y55Fte7uW2QjFTrcDCC97EkMzS7ovK59fRPnr96dkLuaR6XsScB22ZBSkWD2qWh8GfVQERsD95",
  "key31": "2xF4T3J5e52i1HVFzqdzmaStGpgATi7jyr12xPmTwkdsV6CGQKtj51M65twqVuQkpv44EiPo6nPoKathfMLwQKDZ"
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
