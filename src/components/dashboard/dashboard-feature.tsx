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
    "qDkgAEVsa5PmYPKcTuDGsJPLv4XWmYb7YjuL9grHFwN1keABaT4f5yeToRsDHfk4SwC7QhP9Bdx4mQzwM73BqVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wJRgovoysj76oH5QBNbqvFyDRnifGCSYWLNZy5hDrDZshnmnxuEgHYnEoEZpKyFc2Bddz9RfnzXffPfmDEKGpM2",
  "key1": "4oscP83mv1RWDnTysjPgF52NEn1mJXLk2R52RxNfTdjbEduf7vzff5kfEFspk9YK9bLS5Q7VnyP7kX2tLLvrV5QT",
  "key2": "4Rx9YSWcEqSh5MFAUfznEEJMvUpyH91MEHhzrhyP8txS3YpXPixgHXdexsN7sK5NdSRErLywxcGqdtGBUa7CLXtE",
  "key3": "AeJ3dwL3qGAuc2QyVBfiLUFdrdpMZVHdSWkj4agQ1qWHeNEw3drbVjWY554iUMxoBfC2pN3fxf4EaSaAa3Y39uU",
  "key4": "4jD1nC5HRYWLwusHEWZt6gCT8PagBB5BtmtKsCwkK94M5KraGCnaVjSuBt2o2fiXDCLJqxi2PHZTypyQc4AfXYqF",
  "key5": "2aD9MnAmMYuK66thZMnsLdhhzgXx28osSGsE5EZFBJbr8qvkuwZMfMuKgqn6yDJnqDByzJDWsSR7G3nkYgZP53To",
  "key6": "mTXe4ah56ocMBzv7iNDRbBab2b3f3ydPjzVfg7fHmdDLhRPnbnXq9CUiF9FrCkN3VcqncfvZY8BonC8jfTTuH6d",
  "key7": "KEVF1zrkZyz9tpfF8MZRwj73B9ZvmqxsKufprFo2jJNWhxALyVz4YZ1admqhd2M8b8R8EmyP8YdjrBXvnLk6bhr",
  "key8": "2STeC178DhJR6VC4Perd1B3JFo5MGbbotu7yxc2zPfHDPazpKpZVyi3TMJX4rk3dd45EFMpPLx7hE7yCpydqJx6p",
  "key9": "4wswUdyHSnK7BjcCwFZM1dJCXmqWpEpW5bDEiunj5DpYdJmszU5SmmcjPFA97KvansupSi2N5fz4uBGw1iB4i4n",
  "key10": "arvytgC1kvCfZ5gLgHDdw7jHX7acJbK1Ghv36drwTFMTipSivBR7znAep6ur8nYqKfsRXfNMQr44pcQNLNSeMyv",
  "key11": "5h53zeFautsv2ewLcNG65hiNcLt5czWsma2U3GrcxkyLPiPH9C1idbymR8jZ4GmVPD8UtiKxcu5cDePmr7sjbBRP",
  "key12": "mRtmL7xxSYrptnBHfctDr4mSgFsKHtoSGdEzemdNvF8wjTeKNQYjJvc9b5ENEGoUWMXLsSZ5twzD34M8iuP7BUg",
  "key13": "ijbtXCmZhQC381i2FYJrMtfjofkusmk8yMagUXybZFcwdcqvTtPAvTa8rAS1VtmuuXVCTZzBwhJrFGdgxwTYRRJ",
  "key14": "3TPax956o3uVJ1VBoMgKsuEjQPbTdWn3W6EMEQxAAuVFVkQ3yvAjeqWtQ8GsQwQGLR4PUMgJJGSiaPm3fM84CSAV",
  "key15": "2cUY7uLwaHvxC7Sgi3Z6Qw1mLXrmaD8J1Np79ERLVrVsoTVcuSv9epdEM3vqWPZc5nXvnNbnVK8nBK8KHEktUU1E",
  "key16": "25rjrWKqcBAGvVXs9zP3YGEqfDXxYMrGPvQZ7BTV2RyGVoKEP7Fk4jQwT16keTRqTxkwxGTivuGtMw7GryA21CY5",
  "key17": "ZqaG9iWminYFKL9A9TUxjX5ovhqDGt3tWpFt4dKthhpPgBhSdVL63dGMwaoBqhfsit4Waz8kmpdZj4gVWwMJ81L",
  "key18": "3KRKpezm3WjS5F7gcB63Uc7t8kCvYfx8rffuhGnqwqZsRZZMdoKp1Cu4HUQHMuzPtLZ66VmK7cvpRLNBxFQn3S2z",
  "key19": "3P6n68Jgn8xUHQKBVGzs7GD8xrChqBLmHNhbPPALEk3VpdZK45gnqjKTcrNmsfqx3kV884k3gDv9bZ9KohaMEN1K",
  "key20": "4cAym8gzbEZgHKZfCJyrL87wydpRnqmDpe8P3SioWvXSQYszoqRgpshTpqqXUKNErAJvoQthSjzbqUh1AhJAqfVB",
  "key21": "3uQqf2LWjNr6ZsVK3sMUd3FLfeBFwwcvnLAGUkXYhD3Wa32nnqfJcUV2bfqejRaex6MjR2CZh4p9MTWLT82cW3uS",
  "key22": "3AHEAK1RNPcpeX16bso4474iWJrTSYDQ23fkSJxr7AroGwHEVjTKEWNW4mZZZWgb5DLCEbM3QVLjnCzDDCsLSGgH",
  "key23": "3bmvfzXt7zEi1pfT1StJqRFg1B2ht3heqDGUzijE6HPRv3fvFNidTmkMoiD1Xqy1bCnrGhpmTegqDar6J5qpA79g",
  "key24": "5TzopusfTsx2LtcGEDLarqqaJuBZrmT9sxSea84UrPR4NKrrq5qD9u28QSi3YCzrMeEk8LaQkuqARFVT7ZZrqovK",
  "key25": "5nMeWtR7Zb1333jyqX9qXK7vpL426rUeotT3ZPzaGAxxbDc5cTAnJS3dhHk99h2DSC4W8YisAAAH2yZNhFtpWUV1",
  "key26": "2YtJyye3nv5GTtdNR7Nv4zKH97Epj8wCP6sX75pvCFHFFZ1wtYt6qk26T61w2KFpifyY9aQPrLNn7q8q4MefKDLy",
  "key27": "4KXoeM1uREZFsywsgdrC8mEaX24ZmJEUpfTiz9vcCWX58CuEYRShqYnGQPTqCe3L1qNcJYNKvRpvMfyHA5yoBh7n",
  "key28": "22i85nXctE8PsMgDM5RV6aXWeaQo4dZYZ3CNg3Fa7yf48dqyCumtrCFgo9W6QjRGQ5JF6XXoU9SAmNfTXsqApFUQ",
  "key29": "5PzLhj4RXrmCwei74d2w52huWxg34quKAvcEhbac4a71qeVNjGyvm4d4HyJrKVdouaQRVQznCHkT9UM4ij1Cy2FW",
  "key30": "34MtQHrFPdFma47EQvW2Q7qTsV1DDYz5dRD6HoJfryE8RGJ5hqBdHQ9gcPuqQF6nNyHkVTqtYrmx3jSWEFufxbnJ",
  "key31": "k6CJJ5BT7onAaBMdmsTfdhPGqZntVRKhRi1CQD2s91QWtfjkbizEuhdHUgqYDzMkqSUeKDdCVxndX1UiFFoxD5o",
  "key32": "5ZK5FksqzB4TJfneoiw7fBaCQYm2JqYBqcsJh53XXYHhLyLehRbHo31LnvDDFny1dfBTkJgC6nK27UscLuSvWm76",
  "key33": "4DHNPSdeZPmE9oKdiTBmLQaJZk6H7avBr6WnBxUEjqxLhBY6USCYmffRFkRzQNVxJ4dhe541KNREMHAHT7vrjS8V",
  "key34": "22YYAd3ybP844EQFsi2cbBvcA4FQHoHtkdEJbWH1G7xCfgCiJVJbwptp76AouqFs3phZFmCLNbn9uDrVrkR3FEki"
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
