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
    "u4Kej4MDzFHTqrCzL4qzZx1CH4TdYKw2431iftjPvLxrivRsmVfQd657DPSmP7XnFjRnD9BD5fVndgXZ3mXf8zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YM3Zs7vYAizH1xGSSho4skFuhWZqJA43uAJruZbf291vbBju2xUsa6JzmLacTQhDXJjERfdm3ASLeDHhy38a47j",
  "key1": "5ALty8QSD4V3Lp52Xij2MJQmm3ut8F29XoydZexsGpD3XSWXsWkvd7GvSVCYqgQi4GRCwt99kQfd9sdQU6q3dz9x",
  "key2": "3p91b6Mkn5oL3317A9pFqLvQsq9Uy4zwoCJHg69Gy6oo8v7MNxHaznGZYxDsPk5ere67gRLuD53qCJioaLdoKNyo",
  "key3": "3aYCWDFgLJYvzxGPx2y5zxBBqoVAYw54DE1inWwoUdfWkkjZ8N1dvt4rMrwcMCTR5QZjWehvgVGuRN4NEFRKKQsU",
  "key4": "46Q3YqXvcsP9kkGF7LfgJxqMKaEHwQGnd8BuFQ9F3jMDrybJuzhukwjG85UtkvH3ccwCo7SMKHAt5ogfKPt2VA4V",
  "key5": "1x4MUAYvkgAaZjEBRBc4U63y4AqN5B1tQHJBZkDEiwwmdgiX8gjsWiSsriZKi3cz4nQ3o4LwtJnFnbgs6SEE3r4",
  "key6": "2FmPrhNGj7nU48hqtVUDmcsCn2p9MvC8xnmXgb3jovXUywnGnNRi6LeW9YjX7nniKVAWhhbx5rAhQn6pDTFg9hbS",
  "key7": "5iQt1MDv2oo5dF79xeyEh8N1coVKEGbWgtSCpqzU7bbEDBg4BZtxuCf2GcPjQJQ51rTameDRFQAUm21RwzMppGVj",
  "key8": "26AQhNJcCk9gb1P2GnSeBWtfX1kNdxAAaSYbgzfvnefwJ5eJryCFXaTDauaYEm4cW63t7EjRMW2EbUWarLEC1yo5",
  "key9": "4WngJnBq6X49xztyBNPqS99hjDR5ycJqrVCRA397ovPGy8C79BNwTKS53nVkFosbsLdtbnN5n4o4bLrJb2oxaa6V",
  "key10": "2ksZainAtyxgNpSz1vZysTbQn6icwWSka1gBE7QFctcgGVwvKSVtmBVnWwY21GWqDLt7zQM9pi1npzkxjUnPVxZn",
  "key11": "LtEGj3ozCH3wiqAq5VsDdEzW3kAHmVrfiVLeZkeKCF2DbCy7uBLX3oBjWqcrEVeVwmtXjnT1v5sq2346ghALPut",
  "key12": "58EKVTmP5qBNbR4jAqgZius1KYRTghpYQgKHpdd6bkVE6fkjdaT2Xf69odjJRzzXJ77vd1KHt64CXWqVZVYDK6q8",
  "key13": "3gSsnSRMDY6HgozfLTCY5jdaz5w1bSZ9D3kBncjRTPjAhzs6Chg99eUZ6PDwEZGGRLHKegXhN4D1oyBBetSsRPNN",
  "key14": "onDi598RvuceopSQvdK7LAQ3LcybMxtcoWTcKMKKLgXx4YDASiNshD76wS3cpu5YkSokjhTe2KsR4fig7hJc8Rt",
  "key15": "QYnozPSePvuGeBo21Li2cqzeKrWJYKx6VTsD8UQM2zNMA3u4xWxeeQXuzoVsiTDwPN6UoMZPjWtM5W1W7QiF9k5",
  "key16": "PhdKi99TEX6eMrKeh6wKQ9nEd4jHc9743MBaieD4MQkbJySaPNzrWoaSzRgHPGqcJ6H1C4LE6dvc2CBshXMeN4F",
  "key17": "2FbJFTX3BUa79XvBWzE8R7w2YYQRG9mL5gNknaQPfEAdEnELxGjFVo7bo9BcE4LX4s76MLri9as7zTNnLSpFuMbt",
  "key18": "yrBWuAL27ubudmv9zXySxdL8qVh7J2JrsZPSMWwdaATXEiGpXZZHEzDii415WQ2V4HMVWDM93R4BdV82VMzoGMa",
  "key19": "3o7MaxrUBEXpXQJdh8cd3dfo6qcrPBRCYpDcqD2hovchVYh24FJ7hjGRXHtxWF4QCaGyXVTWDhmR8iFhUvSjCFvo",
  "key20": "2qee3LYjdj2k2WEeXNCps1rC8BQh54YsZuFC5WrQPkTgqZpYbwJnU5WhQTVJuYHscLu93FsBXcTvjE42Ps6Jbn8F",
  "key21": "4SziceSUWkjCjgz9kMDznz3bVQRi9sfan4Nknt1Fy4JALsynepPTR8HPCaS21eL7NVLiJ8TZNXu84KgJqywcL85Z",
  "key22": "3xMWwPaXm1j4MAwhrUzKbQ3LHQuxKJNQ31jzNaixaxgdiW78D4tRjNtqNecHckKHpGXxNwCih5rP6gVnC6533mSB",
  "key23": "KrUUpMxn6w1sTmQFCbPvLhMo4yPMmtiPoKYMqHv2k9SkssWh8oa1NgGuo6KZGNsPynkSATswUrFTEYEWc65iHzG",
  "key24": "cvVM9GVnMKDrqkNRS1XhNJrrAH6MdneMGNAvAuWYB9bUsSsmQ2rA48V7L2T5eLHMXeDBNcHNcBjHt1DcJhfgcrD",
  "key25": "2Zt2zztwfwc5AdPwfeYvati4hAAmHCqg2sYDogK1Rcy1jGLj81WokQv6yS8iUCVBnb23ivCVFhT1YLjRDP7mNCno",
  "key26": "2txojx4Gh8jL15RoKMEePA7BgG2kZvuFDStbqEjhL5WQKPPK61SpLwcY7NA6pkgbidis9QzJykhh6kJiw7G3SseG",
  "key27": "3qo33sMQrFEUqDhkPVHjf9YL8f1syoFEyFob44RZU6y4jrfgMeoF8bNriNRm9scYJen2Tii3mSN6TEyJSbP1Pby2",
  "key28": "4b1yy428SR5UFCe3NXRJpiLSFUAcZCV3Ed5byfTLbrd15BfG9uzvo8c9dwacp8A4iCLJ3xMGRjAuEdA7aUHPzXxV",
  "key29": "2Wm5pBiYan4T5A9tpsYfYGv3x6e47wcWdDsmmYoMnAxf5jhVXeSo4q5LCaG8eLB9W4pbBrmHnTWYHJeqzzSnHFf7",
  "key30": "3p987opqBvBxp9t36zkwiDw1Q2izKFj1fKK3oj445hoWTyxycKLFsH57fB71Hrrx3gQpVsFWzqSwoNAuvUjhHozH",
  "key31": "bQGxfKVCw2UpxNncutxX5LVRm2mNNe7iZwTCwa7Mpv6491QHjnMSoMHSEYec5h8YczWbwsnUBwuvHojbV6yWvsq",
  "key32": "32mdio81TVhuLUG4gF5KR9rWLZPdMeCcPHrZZybNSrx7RkbxghZBag171s3tY9hN8VCA3PJ7BSNCxd24iq19dKCd",
  "key33": "3qHXRRJRRpWRp4PogaE9wDABgoNVUwt5F2TvQpzCLdgtS67f5b8u5QvjgLwTwD2cUo5mvmwu9mxYu6mBJvHNsKh1"
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
