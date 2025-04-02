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
    "J5tycbKDuF2cDYiMz4moLSkQzHXckcjkobHyW7CfEJjqjxfXrbxESEEwo4hkjWFaMSJcdsYkXSVtjLmmQ7SZu2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UnbuMNwjbRmYoWCRP7w3VAimpYCP7DSmQuCfr8EznzwN74zh3Abg1qMrVVTHQYVa4sEeuoiRQdYy7mTqy5j4tAs",
  "key1": "f1wginpTEESKmapMNd7KK7jSTLHd3A9gZ662KhP48KnTkoZzNdSvypZCMdYbDPS4ZFvbjTz4GZDjrqKTLXm9chG",
  "key2": "SBSrpnNe1hik1wz79251xHRVtSVFKUXuAronML99SiDaPcZCRa75SHobuvm6tCrpHn6PKbqqCtLGYc7C1b3UwE2",
  "key3": "5YMoYEsUkfdctCuoBNdTPQty5HzjXiyNuwfhSPNo9qdhfiL358gBD2tHRQr5g7TQ2Hz4H4FLXwhhYSv5aogNT4kr",
  "key4": "49wjdW2NNfzXZweh2k8oqDv5aKtnPFbV1pX2dQSAssvBUX3LGbPTthjicxVYpFw9yxbt7KdWQ24JiWmDxNXvik9x",
  "key5": "h4oEYmvXD6So6vHTXpKph7hMmfYPoGGJmm3eD6dv5TNMxej1XGg4PLou1bvfk8oV67TfnFHv6thv7X2GVyKRXZN",
  "key6": "2tkHnCvAAsdmosTRss8p3qaz2BfkBdHf134TKj2Tj6cv8tmuzhQwwK5qj2dhvbwGBg3VEwwE5wbzKDdQzo6ihxTK",
  "key7": "39KQU9n9yr1oBS3bu4SyCnWnk7bXGsgwoTtjR7GAVAAtkd9Yt61ojw3w9Qjk1QvHc7eNF7CQXXXZvN7AkctBm4AB",
  "key8": "3kSh88vxaVZ42AbrzNGEdLSqTZyx3Dw3MnBEb3u7dieXAU3hcQhi483rTnBnEq5HgaT8NTj2yvbZxuzi5NMmpBxy",
  "key9": "tTY7xrdT6zedFFojUSR1MJhc42q7JjnyBHik5W88G6nAFnWYwj3w8UB4HLXuAbrTbXdFEuWxVe8pSTMn4fRjXQf",
  "key10": "4sd3zQA942yGiEXfX6UMjYUQQYue15NR28TRawJ7L4FNxR7NJwGra4khXewvjScfnzjwmKqzxAsVaXpmWFdWTYgf",
  "key11": "ekG9a2wNHG3JpqqbAr7hsdoaiSiFuYSoxjjXZW7hdCK1wa2VHgtZr2GGZtiZ1qHQsStJPWEubyrnRtBdn94eMLJ",
  "key12": "5vDzgFni8nJYwXirYTYTj8wbvLwpj98SNpHuUSoNrCMeTZARkUnheZjAgw5s9a5LTwFVNu1ghiZuuEY192pSAXV",
  "key13": "whmwh9Y9hUXoAyvMyFYZuQn62m6ppMYDH72nzKpKz2ivTAe4Bcf34dVM35ZCv7Ruv81kRcPBKi5ycFqrQpZ3MfD",
  "key14": "GMihTLAQ4wvDknmKSjymKAbqD1RhHsUUv6yjnF6Bp9m9sxGUoqhVjtmw6EAawLmcUZFN9hW24aCaiJZCB11qqtN",
  "key15": "h3uPnMiSHwGMmFrA2wTFfvdjACE5JeFGxSX2Kf5uW1WFkhUNezmrTNSYwUbHym4xFwKcroFh663n3mxDNouBQtT",
  "key16": "53uFziigbcNsthhVim7zk3Sep89F5G7Hovd8TnuzbinJGGNmuNiGnyTmtBvU7n3TYU3JghSKuT4JZHU3vb9LLcpA",
  "key17": "X2QVNkn9x7THhjEdUZmPrHUijiUpF8qb9sT557F6hBbhX18x6hudEVk3TJecqMvmiVnh2pLocNvQyHFK7mRUTGm",
  "key18": "5YYRstRjbCUEiRcbHqebpfvLF5Tjc44yY4QB78ZFEoiCkP9VoEsijTC7Qitpq9rT2krCkD6C4aFofmJSTtkqBGx9",
  "key19": "3LP3t9HmEQ71LpSb8cPnHbxCVVWzi2KQZA972ydyortfU73XPFmPVHppz3q1wu76wrh5ovFt6aFpdQQWaWB5SPyN",
  "key20": "M4bzSHo9Ny3qsbGbzfrzXb5UuvGeT5MynMVVBQVJq9LGXQFxtipFNh1xyGioUAncc4qgsME5axv2pyovvZH6S3K",
  "key21": "5dYynqxrwQaXLi8VXxwMGWiJvwugNLHEFw2HxCSVz8gZX4f9d9EJtdGxJM9vZg2Jg2LN48qR9c2mHQviZzhBHJz4",
  "key22": "4tNLiPkAS1Tgk3o2Vx2CYWBMoWDCzsPWdstiHkNC5VLrtEuGoKSjQcHmwuCvhwvHzhE94qqfRtDSdEWWAEEtHBv6",
  "key23": "3FMAB1Tdkyy2Y1AS34mB7pxg93iPWrxpzBgrNtvnHJ2t7GFAzQ7NoZATLfB3xPCpHoHb5rRdyL5HMuWRqkzCMvpp",
  "key24": "6HRGmgqomTiD4KwffcYKUit9JUvsctMxnCqW1bUFK1V8bqJ3CQNyEwqzLfLUeC1JnLFzkXfHyZQKZkm5oibnwCf",
  "key25": "3iRhr3Bw7dLkpND5roPhw74dvB3SqCgqUi2RJdiUUdKh4XPXa2Le8gQhcABeu9roRKvzQRMvbJ6eygTDBj2AV6Sw",
  "key26": "26wZeDQ4SqDsAdgQDSBeYFMxYsSSZ5gsMx8gN1qf6e8xnp4wNdYJ3ubXRmUUMSBFXhBuAQYCv7aecYoWrGxAoZ7d",
  "key27": "5vAft8radY7GEkL5FmDzwQcwEWkwUhpLmqsYfkbZzTuXL9Uvgmyo5BofqyJpdF6TqcNQCt2G791Z9pAhJK5h4ij3"
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
