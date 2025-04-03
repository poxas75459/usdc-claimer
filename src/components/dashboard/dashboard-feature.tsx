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
    "5R1EE2rgdc8pwAvFcQHtpjDZ8NWEYQkJRm1weze2ZGFJaK1AE1RXdaYuqFCSwXU6BmXguNANycXCyNN699kY2Ko6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yWnB1n3Wvkz1v4JSudQrHin2WfAej3adHRgsQFxXcLuZKvcPTgho4dyxkLBJ4wMwTgtLptHgjAK6n8DkZigEGdi",
  "key1": "5iYeLLCD9SfG6iPypEd48fnGeax5UYZqfo4cg8zGBnVPmMChWbGXUvF58UXsCELryXT4UxsDQspxxCbZECtqqp6T",
  "key2": "3tceujp8SkFVkvwzJ1mmZxetUvf181kRn9cPmNejFrHejEsWAQp8u9JtmgVFzPbvpyeg8fArGa83tFNC65kxcQ14",
  "key3": "22qKWVkijJpfGgBCsEZzftCd2KhEygwmUrvMXqnGaioXbMGJ9wwVb6LjRzxY2xjUgJcrPy7bwudVfvQWTkJgv3qt",
  "key4": "49Wo58Z9nqMyNkSLPZasV91chEqUXwUi9W2WhNnwNoqYoFxJBGz5rHtZpQoujdLquLdbD1osqS1TpToF67W3WDfB",
  "key5": "4wwpZWL1aeuMM5RGoRy9meW5RGMTzdBEYA7BW3TMLgBFz9q3WxL7edUDS7Dvmzr9F9Tpgpnjd3mq5LxuWX7jU4Fs",
  "key6": "2fXREwWtdCUqo3g1MY5f7JHqCZP3i4H8p7FGYm3MPPRkiUbFSYzNLDmub3GaUJH2JhGSgYYMvqoXa5GW94nWVt8V",
  "key7": "31D9VCRKi4JmKW3w1zq6vxkLNM5qquYSCeVh37fQs6gTwv7YupsVXCZJtroH2w4iYDSiqHpKcHajzFdwgN9sVqep",
  "key8": "48MDZLJuNqUhKhB9udsq7BxLV2iptP4uYjjKwWbjg2ztbpaZwm3ReeekagU9n6cSs3p4682ge8qYfK31oTBM9xph",
  "key9": "5aMda6m46r8BN3nPcMVHmkNE7E4p3p8ZbsYbVukUzdnWEiBRT724uqGqDbvK1Y3nqdZa59nKW3MwryVMeppTiYVj",
  "key10": "Vaco1ydhkt7DwcDHcgKL4zQGh8X3SvgxnhXNV4D82G7yqT3H9ACrcHJfku5zRjNbfH5r3CtyE3TsNnvxyRFYAdo",
  "key11": "535zA6GeTBGByXLE9tSd6fjPsPu5VbozW3wuNMQSWV39mgfQ9bbYZcfbsC6pq7Ypxp3hySbd9oLr85h5SSt8YZrP",
  "key12": "HVmUtKZKcwCfBBw3kJpaQbJ5cY5q3HUFrUDVFdbPUhJ3bKz4z5XJX2DmrYj9EExz9D9agmnD8af1F4dkX8xb4Lu",
  "key13": "5LoSoBmKW69w5Sn97kfL4QcVnCa2tYT894spzUP3P1oGqGdKNUjGco2mibQMh7JXkGrVurByDGC3GnPfhh3weCXv",
  "key14": "3x6Z9pPaTi9UVXUFmsfhn7tVLA26vAPGC3cRysaF6QK6BD7AXcp5mGYDvN7jK1WS6aiLpxLiNCXdnUekxDzAKqm5",
  "key15": "2hyhuPDqxNmLJcwLWShDJ8JX6ASsaTyJ9T6h1RLDJ5q3Kq8zFrejzsF59wiztJdndh5Y119snvcaMNPRLYBm4iqG",
  "key16": "gAMPbs9bHbQvbQG8va6TfqjEpsC45prGZyR9jtGyphphNkdggFa7ycKHre4JGGUFhbsGpUpKAunQkiKHzozBk62",
  "key17": "4HxvDkoKFGgbSyyDqV1hMXHf11xLgDdu3EcZdaS7r1uLWkTf5aheNGnGqTJozvsUGoDxWhH7XqPDy5o2aY5wN5CU",
  "key18": "5ZRuWuUPrhaKEtDdCkED7maptrrB3hwuaREfgJAgEyvf3e7tNXMxxM3cKFE2VV5HEezWTCuE6RtzPxEnUUvRqTAc",
  "key19": "5B9oBTywq6ga2eHJUrvPazHDRrX2FNHQx65FsM3PgZhaaP1z5HfwkSzTgTT2rwR1Wst9JsGdzUqTKdkBLsBnBsQQ",
  "key20": "3DeBfugJeRCpHHBhYFDR1k9z1eVUGBabtBMKamE1RYqZpvWPZwQYm17CUmns1S3NYnvQ3RXLbpS9cKcNfntsht8e",
  "key21": "2MUZek8niL6ahT4dRNMJn2bz8xRsusW8bGa7fPNfy2yCpk1TEwawjdwR7MWgmxUuKg8vRZKXb4G65UQo99jqoHEG",
  "key22": "2c37tGK5icbFVFPSr4FvQMmjeCs7peSSiudQiz6csq8qMkc4GBv1mWvjqoMzJyfbH5MfpC8cTgFpBTd5Wu6VatRF",
  "key23": "29zDgaRjovYpaYsfhEPqonGkPfcW9265yNyRYcP2YwB5k6nTy14bovFbazMnHRrHvwSKQrVvF84Qf9sw4Md59EXz",
  "key24": "3f2hzMZ91HUDK6eiRQEXirB3AW5bDU1cUVLS9wVXG2sR2idGPkDcTNnNZh8dD8ydg5nq9AvbDBSKLdX3rGQkYdN2",
  "key25": "5ZDkhFh5cJJhAKoFe44GaWNGEb4cfyEpBjc5yFQAZ6h5oLDMQTXimMc76Tp9G4hHrm9HRYS4n1uJDhbB6CC6aa6",
  "key26": "45w9ZpRkrYtxivpth1hvCrWAyWLrRmbUpUQjohEm8efjBSPNoAMpRaXuR6B7N7iNTF19pSR2t6YoyGkLcc44xsxb",
  "key27": "NTfSxxpnrTJ6xkVpXBVM2b1Vtr7Pys1o7Euyjc9jhaK3YxjkgMw7qXYDdD8YpTbGDrbUZNwDdNtHJiN1GQPHk7p",
  "key28": "3qRJP3uGzDFyPiakgiG7pMGtnbSt5BRnFmADooZ661X1Sp9xSFWCVfLLT4Dq5bBS9Ww1M266Pu2WcAa3wRBEoFtK",
  "key29": "4UMfL94HgqVLTuNB3kTpcB81TvVR1vZbRETzmYun8D5cLmNxcyqRLtcCm8PfuLH3HwgCe1nw95sSjcr8n2vDYQ4Z",
  "key30": "5kL41PsUQDadMkxUKHAQVNU2WpnZidVmdwHuons7e8deDLr3Ys8WcW3NkqcQkhqR3op6QUMzuB3jDw1w96hakvzj"
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
