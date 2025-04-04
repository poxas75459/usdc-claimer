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
    "oBszC8wFPJ4a9skHt2n12FQWKmKakHGUzmQjgvry7MtT2roSgr8MZmowgziZaA9cmhyxLPSJp4SwvF6VGiXZbP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LvGxWVBmrbGkj3YEHJJhv1izttCkpkJ28DzBSyDF6sJfng4daU1xxtSSouVXTCQDuL4ruQgBbcmsqE7TZKwGLU3",
  "key1": "24mNSPQVJ8tPnHmVES8ifRxedh6R5Q7SM2CWDUhZCQSb1fTTnJggoK7nvWbvFFeLJvxGmwn4JAiZSKwjBQ8qG8KC",
  "key2": "2XMbSfvWbYg2veXDmAMn6Xt4gUGQgJCmKKA8VHY2eB6KqDjWMkxGcXJ9NgfMUrCi4ujnZ5jFtV4XKmax4hU4WMnR",
  "key3": "4X9Xun3nnaLnHHrFFrZ4Vj7v7NeCNhqaZU2aevGtCuYhZ4udPo5f5DSZLZpwP82mxSDfWpZGVPfgcLrqunbz6Ju3",
  "key4": "2ZCbHSdDeZFWpBgAT1Jhwzi7vQDmfjAQFHpecs4dcwgzbfx2ywwKGbaGecrJvA4aoaVZo5ZwLWnmYvSoEJwEwYKC",
  "key5": "2qyzo95x6rTpmMQCULNyYV5PyGP19CmVj5WAvrJsX2fBTVqdgL2HXvF6D6rCwsycFLpF3WbPj4q7H1DJQNLYHv5G",
  "key6": "5xJcSXL6XRD2GBqoiqugHJ2EGq3E8stRUkr2tCC8Fi9YaYmH3osqXK7J8FPDoBsvqxCx2vtNgwH4VdeQAbJPrBfb",
  "key7": "3nxcRP3BNS7v5ufpJjtMoDLwhQ9nHiNe1fWYE4NzmRL2HFWJra5D9sNTDNgop74TLDfkjrwead1kEoH9ZERvu4b2",
  "key8": "2zKMyj9xb4u9Kis4YRrhqpvdL9NFhycm66b7yUznavMcZ2B4KNLG2MUEkRMhp3TFvPu6fnKSrjxMuU74XcfRLf8b",
  "key9": "5kfCDiD5Ar4hPbutQpjLU6nLNjHcZZ39C4BVc9Q2NkMf2XWeWqCjpUYrgvkWaDTtvEAgWPmEJPVQbaZg5VzXqMVc",
  "key10": "5kGQ1zyAFnHNTosmY7MXSMAoG58G5vtx4gs7jbgr1p3FxpQ9yLc34vMJS6SK1gXMwJcYgeyzcDh4x7BjFBRASsPx",
  "key11": "2gxMerxFre7C3VFLLpLXunbTzKWzAG54GVWPbakPwmDWCoA94AaXFGdD6dg8rLCteCahc9V9LvBakpW4VHYFxza5",
  "key12": "4v5BaNUVmisMA4XozSLCDtgJ3zHbw7UKTPw7AYCbXnKoBdJg5FWisZN6psNae3cZjGpNJLNr1g7zmycKAHdnvVGZ",
  "key13": "2cLS1MrVUukZFsaNk6UBRNFrPGKH8iqdua7sV7pHwP1eJ9oY5g5L5EUSuUZ2fGYDfhN9PKhYdkDqBrXUixRqK6mV",
  "key14": "3iHdX2jyrMwdKGgALzCdv6AZV6WzPA3dUvj4kB7FKonkEvnsNRVL93VZ7nLTmgNj4yNNzbFihNMADd76HuFyf6qJ",
  "key15": "2PZfEDMM884ei2vfG57UcP8dnZrfNgLDs6Yx518CXUvubfagT6NGQkqVd3UW9eZRcJq46HDPUvdTeLVmKyfpeuyu",
  "key16": "3WBsz8XBiALjt77KX2m8KY5NXWTg6AS71wPQhQ9WATAqLXEuLyAMrbegsjW6wmf4orkEe3ttNBNwndusvMNyE3J3",
  "key17": "RT9LNkZuMyRarMLAPEXaYtusAT7TJCeVMe3adUUTp6smiMotCTTSnhWTDucB3FiNFszBF2oZfrrPb9eYwDh9vZp",
  "key18": "2TitBBbum4NKxs4UZ7B9S1o7ezRdtsC6VGCSXc35pAtD1zY7FjCMn4LYZEnyNc6ZBLQheSGQCqseRktyfUnTTENj",
  "key19": "5qwSBUWshk3Fiepz5ajSSadtNEYe8CQMJVgG2LbX7cjQ2aP65FurbNwHrBPTbzw3sfoxChptSLgoRfQR6JMXPSRA",
  "key20": "2LpCnEtxnxmguCpwD894CpM9t4brFzDmtGLyrwcWZDendqk83Rpras2j7vdr2VsPW8FwkvWLC6r8Y41Wz6vQ7o2u",
  "key21": "61LzvEvtcGgm8TEhoAFCb5NvLa68z41ibkzgEoZsgHTh6U9KUFX29iZPhX8oeNoNvC61L4CvtUThbAq3HJxg9WLx",
  "key22": "WkLq6Zk9mGE8YZWYj8VkuzvR6zMWXr2ZRvyV5WvfRAvpqWbChhJBLnEzCZG4hptpd41LieouA1TpEYtXmkQmvEs",
  "key23": "2cmBHtd5SABNiUHehziBNSu7MbCVE9Uaex5Dsoy1MbjXcHStJDVW9DSMZHAtvi2QXqcxsF6aZeb8X1ygGJZH5asy",
  "key24": "3RssWaY9imPpgJmdxQW6avsiEWNJBdLpRUjYLyJKAQSizyuf3gjN6NMVCXViYngnKRcfhX3EtPrrFPWqhQnT82ek",
  "key25": "5ABeT5LCJt2CEeK3uvwvpfxg1qcuajFs34ydLNFTxatpzWeJqnKQPWuktGp9J9zoP8avX661duKMQcziqHi8hiCJ",
  "key26": "5zopESmqvNszxCTdig8gDE5FXC9DDtTWnMyF7PRXQcaBfrz9yR2q3uche9F6tztTVNsMwLAQvSiCoBdAsNM61oCG",
  "key27": "65sfsVX114WRkrDxyQr3JkCajXknGBvi63KsPK2W3L7GnG5LeQ6N2ormTvzr3tfRbEXq5GVGWsKb7u2vvSer3pTA",
  "key28": "27eV1zVQCNZtqXPgKrPtKomiVWLtRo8cu67Jou5Efc5cqYUEcSN6yj9krUsUUZ7Cx9Xp44gmXAUnqQUHTqgre2dS",
  "key29": "7AtFnTvmVZLxPe1GtF1jUea3fwPgVzS18iFpKCp56yqVqa9wwrihECi4uNBoa9f9XsEWsN2fRNBpx3MJfDBv85S",
  "key30": "3mRJGcLmgizLHyQB8fZS3yq9SuZRm14n9457HiDespMf4XY4R8R9tv1tPUKuHxdQQsnoSkmZkchq4mxrATSfkeuf",
  "key31": "5DzjW9AEkJtCkdQiuBQ7SfTDP6tX1CbPTSo65bmJXeQp6t63K7er9pT2cMDedGHVVksB2gdDX6QnGaftG7iiYU88",
  "key32": "4rRC32tjmy21yDixe5zKF1Zk6kzPEiJwHJRVKKA2zhCnJEr67r7bgddhZ2uBUQy2DTQncVuFbDtqsxv43K2HrNnR"
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
