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
    "UaXktASctMpd3E6UWWZQLbgKn8VjZMfVVEFj5aRzubp2mXEBthhm21YDCB2wt7441kwht1sfzJ4BGqmJfq7ZNMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "keGts9gHKafNHr64B4EKMTtHM8xsqfaXYaN6pjAN9c2bVhCr8AfWHimG1KRkF3UKszPhvoagnxsg2VrE6tj2yEo",
  "key1": "3JL9sTbm9DnZiy6Hh8dDuwZ1DT7Apus6HWtpYBsVj79RTHgWoiL2eMn69RrcB9cCh7xatVJimdqzd5Y9Q1pEDVdy",
  "key2": "YdgyRQFWnU3Bamu5W4UDdtMG7sXuurv59YLp18ZNhY69C34fgSd9QRKf9KTzr38zh9uMWc2LfnX5n1GE9QX9dB7",
  "key3": "5vbXsWgi8yWdycmVMLAagxgZUMch1ntqoFTLMvaQ12hHRkDLMiss7shLRZ7AaFJpz3hor96vwgxP1gq2dKZkRBvU",
  "key4": "qviovXPjHimeXEm6AfA3qGLVLpKVPTAowP2hvTLyiycQJW1Mb62g66aTa9tSmebQid1AtF6EWnG4783hEkDGxBF",
  "key5": "7giJWbhu48YF2DnJtLuJ5h9wZ99fcqAsPTVVpYwuwWMEq9LMwpMiBfMFUivJcpLbAMVd2zdcDzfQrXdFhmauCun",
  "key6": "4ftYbjJrhmbsJUmD2iTx4uK2uxyUyp3Uh1yHfhu9JyLdhhNAY1gAkN6WtovfSEEvo44UsDR27AcYWiiYK5yG8AUV",
  "key7": "5h6MvyRq547Kds29dMKYw6GPrbGvnZ8to1qBcKdGyvSz2swrSZeaPWRvKgDaqAF788yrvpgihMpTLi7hXV3rXMdv",
  "key8": "4bG6W1ZqsmA48wyYza5WeEmDj8JbZTZtSLxoyyPjz6vS8q23gEVjpQfjDz1Zi2kRUk2zAWJE46CnRUojfpJh2St5",
  "key9": "2hEgQDzh8exwiMm7mWqt2p57ajLWVfiTxCfso96cqSpjPWWnHRNd5Gn32vWdUPaZjfVhvCbSMSjz1piSwysjSRyo",
  "key10": "3H9QJfr8or3xRTkcFWnthPebukoFsMmWJuqLVBq9bY41XQCvEGpy83jAhPZSPn42aoEjfWN7NVDc17xsEbMr7Fjh",
  "key11": "5pzT6YbPEj3LDMm9jxuaTgn2aBHfZhCiUUZxJMN9HkrAU4cSpVpvnGDpJL63Dm7uddEBMt77npfXrbcJF7TvCQwg",
  "key12": "5RS8wUkT92wzSSt2xMf1vZ1bcKFrmSQo7QiSpdd3c2sLD2TdzepkCkmoP5eTiygkKg2E48ASBNEvuo91G55mzDCp",
  "key13": "5e4b7zvK16v2cGntgCokVpVmKKzVyyE2w1FQTKxaqd2fcz6ChhcgfGHR1DTbh2kk8CqtSczGJNjiCAzjUmowApVE",
  "key14": "ypcRSCkGzjrLR3w1DhypdQqZfdswD6PU1xroVgswhNVKKQeGpVV5ypXQ9tTBXy8xdHQ56GxeNNKZGxRQ6LV7YVs",
  "key15": "24okYynwyWdkQi4F1HAcKgRRJ47RDpg3iQtSMJY77qzah23VByB1jUQmgFL9KaEut9hQX5EdShDB4uVkojmdQFwE",
  "key16": "3gxM8DFU5vYf6yqExYnyiFmQaVAdcPP14VsAwYUzbuqY6n78vW5Psj4GiX9tAttMiTchzzZ1a4tgaLYgQrnDwx7Q",
  "key17": "36dz1oBn39cCiwJ7585Q2c9aj5JhuJHrmj61L8bdTt6vy1gTJKWA2Bo16VZNPzLb2iU74hjVRiuqrEqLjiuHrEB9",
  "key18": "5w4v9u2fWvhL8WfpiTt9LiApngSEd5Y2fjgN3SDxzeY3VFRDtqFZJu3rHQGBKyG4TnY9gZVmgmiZE41AKss7qpdC",
  "key19": "2T8UsiFZP5mjM3qD14AHWzE77rcEp5va2hye11PVK5Vs8cokUMQq5vEKmPgdi1m8BB8cfF9QrzL1XiY1aLHQ4z16",
  "key20": "4diR1ktxZsBLgGdazZ2ksgv3i7mdHtDFLFGiLhHsSvQR9UNk8YFsiHhhKb9rJmrJTv9jHcmyBYcrghNZnt6mCBaJ",
  "key21": "38qPe4b5zBX11k11HfwET2wWkGyjj28YC7VHxYtUncJwCF8nxC1jVjc1AV4WHiu4kuGbmBPartQNyNXCFfQ9Mc8A",
  "key22": "Ph6ByexBbEuq7KqsdhfhsuGw9WdhYkArwnZ9MREk9SFkJHTe6RX6Dx4NR4uknkqMMdMCepwmkdVDjeLT8zpTzh6",
  "key23": "613ZhNvGGCPJD64QmuXJidT3TDgybYKrwdXiMuZJYDzwYcmfSZbUuvgnM94YyxaiBT21SSr6QRxeU8tdtENbT5WV",
  "key24": "5ieEXkBE9aM8GS5WhqFEizqzaiBZoRfjQbcYYUDEHUkAaZxsYt4LdziAV94knn5t2eNgyJhE451p5mZuWjScWTuf",
  "key25": "61vMM3QLVQd7SokqCKE8hrSZUjAiDJXoer5xpxvmjZ1hCptNU3Zg5SMGr9yC27HWUQYmHamVYeuVoJhwprzF3eS4",
  "key26": "4M3B5YZRi3mHQnNsv6JPyRFmnN4U74cruZFHWM1HzKxWV7mUnDDREsNtV8v2xCdMRtpNiM3P4BViUTT4uK46Z6gX"
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
