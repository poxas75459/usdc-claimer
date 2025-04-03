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
    "3nh5VAFKtSy8aCCCck23PRxs7yJRgSnQhGeXyateTZuya5gqNWqLhH5HvT9zqx81HAzaiMJwy5EZrFafxhu4D33P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VeHphvXpHXqG2gSwWNAN3CJNcgCHCogaSkfAn2nzaNZQEhBkpif6uN5fzVWX9Bzi7Q1WGoH3o9e7xSzk4LpX5zf",
  "key1": "4JEM5RaFbXrtQnRvB1rL9mFE72jdRxbv9jYbXTPeeF4z6NHm6ZWA6eUDkvQ6osERNcg8xYN1nDcxmi7AeM5mexZm",
  "key2": "2sEkGKfiYugHBVMqoiuxS9Gxp97Duh23EVZTWfmEffSEGTmsDxKeJdu6vYo2fCaPbjohuM3V9UBcGamooQjPhL4c",
  "key3": "2GLbeDKPJFuxJ2VdMgBf1Uy8MCge8824AthtP5SnR9Sy1yFT4bs2hKRRRJYN5iwvW2Jj78t866TaSRJ5MXtASwUF",
  "key4": "ATAqxCyKVmbyUjFFKFA3AQ1Ma1Aa1Grj9hJkr96yp2hYKvyX35rt8n1WvWY5H5iXN2UTNhcDUr9dmwc5VtKnWt7",
  "key5": "F2Z64CKLHfiT9SpiAyaDH8T8WNwaLvWZqYySZD8xyJMPSyQiXr7wCQxeAsrsp9fwXobhisNZ98jd9ea8MZV9gNi",
  "key6": "67LHM91KApNQpyFJzoAdgo8zhTMMTaSCwzW5FrGBUj75gRggnApbMiv5AFe1i3noAZ2jBRWvQLpFZtbKjMkrkoCY",
  "key7": "4XDcKTDPaRmxsD5TqY1QaGvYfsZdhJtRQVMBmeoJREJLc5zsvkxXHJY3D632HPggHVw2bcCY6zuwefAMKxYJDEQX",
  "key8": "Ai5HdJsGGYeQ1WxnV8oQK6jDw5MU831uPkzMyBqwGpc1nxLUeDFjYGAJ8V3MyhbPDwFYV5EGuYvEV9cpXGcqY6K",
  "key9": "5ivu4gv8Czs2W68X7ye6kMCjJfJGi6NQmmki4KQ3KELQyV6ZFTaX4DmhDZTQohifFTh67yGrUsyQx1DGYhLPjBvR",
  "key10": "2QehVfaRxv1itVDtitefczUsSzM82k2xwkZjk4CSa5iGkrxJBpg4PUGkaAc9MZ4cNu5HeBjyY34dv4UDWXWZ3uGp",
  "key11": "2r2BkQWhVfigVUPjTmVV2HTiHamMCTVqJEDc43c3ukiLWD9U8xxfqnh3Y22LyBq175cNigtv4df4tnhcMvXqnRgd",
  "key12": "5gGKYAxznMSuTLbhfUcMAFMHKMsqzN8LUtZMDpuQtX2nw2hgNLzKqx7i878MmEN6djb28pdPfoc7Ad2bG9q5GaEy",
  "key13": "1e3GaUc9VLc58aUYPEPvyujLX537NeZisRzL6TpWSah7eP9eR74prGDAvKTTJ6uoAWatioPrD3aLxtxxmd7fMx",
  "key14": "sUXtYRRkjYPWqWzEUNCnCUhKzjpEPE24cppBkqYJfEBDtrr7juChTTGKPw4KQRzSP5SmC6nfZc81DxjAmVizUD4",
  "key15": "4dpHLX4h8hd2vnAy3fvWbWnDPzLY6WUmKMQy3pnrnZFR5gveE6xh3UfZ9R419Y5a3rzXxdMrprX8aqVBsH2BsApa",
  "key16": "43uX6BYJuzNeHKEMFzTY7baBMdgR4M9ABNwx14wTPiPyASbTYDeR5R4zkU3p47VC1oe3UgAYNJEf4kJfXVj5ZuC6",
  "key17": "5NemYDzioUdqc12FEHxwubEnePcL9SsoBFT2dt5a8sV9crhM58nmQuoQFxrWNzqxEHHywaGA4JroLZZzjXYFrxSd",
  "key18": "558JEH8Q9Jhk545mH531ThCTf1UeFGPbMNyhPDN52ysACbrJqDkPbEEFP6wXiHVsD8pCv9jqCj7iU9TbBuuWAGJT",
  "key19": "4mimqVjcygrL46JgsSA4px6BtiE1tsUp7thbWzA1yFqBes3JJM8iXV7nZ4ijJunggUQ5DzmHRVHt842YgD1ueCTx",
  "key20": "UygrqYp6YaSbaqz8yB47A1e6ytPqxoNxDx9SvvpZkMeqZosABbiGhQCH37u6ZTxsfVwWqCqaQR8g9qSkTt31Rxx",
  "key21": "4Dp8fgRNe3ugVGAt9oKN6u7KSpAcJpGLJ8rnnvcwwmGfjitLU1CEyJguYMhCFh3fEBLJvpXxhZhRdG16AWyj8kLE",
  "key22": "3R6efwftMud56WWcUZhUtTwtT36sKuRirU47CqYwBRdCK8e5GDnUR6SkuifT4GosdgHJy5ferfremPVpA5SNRYPT",
  "key23": "D9WNr5pNG4T4rxxpDFt9eAZHCkCgtbYqxoEAtnaDNVKtAKsmtKQHw6RWcAxFHQYGFDnQHmNhjzySxAChZLpA17f",
  "key24": "5ZwNyRz4ZJVqb4hyS7qn5zNgjWbwx2cJEYwoEVDz4SiGGUKX5xKRwnvfxZ6CcVe2EYsFBHT5V2BySg88UbtJnD2v",
  "key25": "4YxAVTd26kZp9cbkFRoQkvpyatRtE7VHb9fgVX3R2dgTBTDAKiYsfrsccSi51PZwfAPMbiiCWHk3mU9yNNmZjkiw",
  "key26": "5YwBmMc1hLhErm69upWXvX8VHAvsfdhJd1oL6YX34E3WfTpDbmkNPsUUFSrBAmVeWJsgAhP5nsuuzeCXkpWNkicM"
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
