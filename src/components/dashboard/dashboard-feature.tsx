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
    "4rwf3J976Pxf6Z8bZVBVEwZuD9x8vUZbS86Jgg8dEwmhVdKhKyDGGPkQZ4XfpWN33s7wDJ9YoWHGgWrmRyHXp9kK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kpDn78trmQ14xkLnrMmatGeBBZVwQAB1UUuuxK7jece1uJwBtJroDev4PcjRhrWtxnnyR8aewrYa5PAuVqdMwTe",
  "key1": "4zsXm6sW9Re9KcpnACMPtfYSCZCGDmgReYRJzELzC4jKwU41aYvVh4akbq56zr8GeLdanMnUxGFDxZRxEmMY5A8y",
  "key2": "4qmBonxer6L7PCJ8dtXZNYWwMQZMtXf9YKkM7asxSYiKz1qLHmZm3ThJBuFXUDSH4SZ1UCVCAEBMcvrpixFNXP9n",
  "key3": "5ZsN9xVFb9A3T7kRc2vjRhVvuRQGzVkkvKeFQGLpirGryrP4tc8bhbwZN3AvkgQVqqQhieXeMbarc3WtetTPXNd4",
  "key4": "2eHKChamTjimGGaBicgdGUB6pzSXVbJaVXkZaEs2ax1ECvZhXdQsWBgbU6Wd6wk3jBQz5XYvZ9xC1UfuxgAsR3Jc",
  "key5": "7u7zeupWfH115r6i7KxeSdRvSkFredcb7fJfNKHdGTgUxPQ848iJu2yEuBLdekWZWWLtPfUoXdBsot21Rzq63QR",
  "key6": "2mFNLb32gjMreutfHnvTXCqeVLYxpqds39EVeNq9Qsse2EKB5zUVj9Fcm7ZcP1yFx5aoweRKQEqt9fLQhXSCMKkd",
  "key7": "4mxiddxynk4SYqLKP62B5Dao3G4H5SEEemejVifSV9PEXEFimUXBQ826SeC6V7J9xjU7dssv3sgM2y2Hf7DDu8T1",
  "key8": "21QutSCY1ivq1uAtBudt47PiecuE71D57xNSTVuppzhZe6MkJScZFfiXUcxB6wooYrUUK3BZWsAMBya4KEWHRqgP",
  "key9": "5xC6WYSF5CfatdsSoPPY3hPRWdHJoQmdYxQVhHDjGFUiAMipSDch5f7ibbdTgK5bYotyyXVNGEyUnLfjiCLdj8VF",
  "key10": "5qWevPiRLJqeUbKgspVvkqMJA4zZpPgCJT79umCjYHHVJPmaWgB3CDVM6teXt8b8TyZHU7sshgf4J9mBeRtY1GBx",
  "key11": "4aNvu2JkNNFBpVoLvH5FQ4dsvK79woPGfcfmV9b2W4UdTRoCUQUUt9LiNWhQ8UiWsL4R2ZsbDWY3bvf4MuNhQoLh",
  "key12": "44MtxpTUNuUW8bDyg1Lec1uaki9iAGYutLgpPwLnNjJBxBM3m6eQrHPSNnb8JSKmWDBZSJQrR8b25VGa2YYXKuAM",
  "key13": "4JfojtWz8Hy7KgoU1xDtPAJSwXAxZn41LcVP7viE4ufDcmLngGduEVViVsfEQD1EZj7ygKmNdh4snAN86cwjiqUg",
  "key14": "2aDP7La7SWyxiEmjfcU7ErM7foKQ9cNwpC7iaodo5SagpGxhQuFoatDCrE3fSc2zQm8PJRhb7f9BfqvEp9soYJqu",
  "key15": "59uGZ5KZNafbpWvKNmkUn7L9ef5FaysejDVZTBEZjmW5L5Wh5fXXi9WAgurNXm7eRzMvB1YyRFPZPy3ag8Si7Bd3",
  "key16": "JWiM4wf5inFqeaNEYb94Bp87CW5ZGpzzfhAtXrhGuU76dK6iQ59nxECS8mGE6Wv9P3K6cU3x4AZe292m2uLuS8W",
  "key17": "4QMSRcRP6DGC1QkJZ85j2nRDhgRnQv1smDLtCW87wn3uFQfWZM984ZBTtSqUqYEUNqicSQo3U6R3krTnTuyEfhC1",
  "key18": "x7cU6yc5ehNt7XZAXn8p6EaSHur8JBQyBzPVWaqC82Z2QKoF6q7X55ULtUL1Ts5VnCeXKrnQNcamQtS7UJ7KTan",
  "key19": "4P2FkHWCkz3EigtrbH2cLj9gvMZjzjjsuwQnZY7Fms2sZKLBMnwtsat2wsoedc3uKT6XMRMK5Z1jakJHPDfBB8XH",
  "key20": "523Vdspe3GQc2spNBkyQrvcaHknoR5a2JYKJvNkqSv3i4GfVXJBo5DEEGDYvDPPyAx72r9xTo5qUi5Yu6RELiJaf",
  "key21": "3oKweFqfvLh9LwvK1ub9wv1vFSynRLYCzN9EChUej2o9XL1raEjhxtGmYaR9BvQLzzpQu4NALswzLy8ZyQvgFJW8",
  "key22": "M8f8tVsQtkRNJwPfvCdPWpZeCvVFfkqnRFTWzJBcA3cPYC8ES5MtBhspAD682jibYqLc8SkcpVrXknK7MJeg3VX",
  "key23": "2iNJ5qCsCH65UVu1R2XE6C5E1qBMR68Pt4mvHn8LcAiNrcwuTqKBhj95K9bm3MVvbskXiJieqV9X7X13UKgdY4zQ",
  "key24": "2zdU5MTbRW3d5cCtRxgyyo8WBLF1dLcdB2WFSfm2CVkjo4Rih6C8EAzQC57HmgmWffTN8NqKvPMtXr2LLitnQ5jL",
  "key25": "2dHvZKLkCBSNp6PhXuwQQRgCZjQfoz271puWDFxMQ8zKRp9L3ZZjWQv9h8FHEgarJsr1f8rzjc9CdappS7y8ZKzV",
  "key26": "3yhakUqyEDp3a2G6aMu7zvLYw7KtLbWyWpRi16A7K8q9kHGGvYTvPH7GDsY4omdD6zz8ZqSRkeY4gPLzHHxUwrUz",
  "key27": "59jjigprL3r2ZhUnRqLif412MAsSYMdCALZ1WJ5VJvEhFCajo64GiVuJkY3LSTHRe7ZFTBRwnG9y6qcrqaLyE1P4"
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
