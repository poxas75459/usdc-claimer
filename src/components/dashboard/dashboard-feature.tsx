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
    "4A7KF9k2vwzZ4A7KFx7BkBLHF2vULwXmEAVBDSd1ZFSQ1quYGc5N9wpoRBJc99PBv2MZTTKx1uvyKVhwoUHMtMWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XHeiY3Bb6UwaD5EizkseRmeTNvmASiczE5NTx8A5yevx87eDCwS8qv7YjXUXJd7WpNej8zFKrMbn5747H39bcK3",
  "key1": "4Mxjkp2opeUTQHnmLoHUn1WPXEbn37xLczykLPbuBhXfN4uLYkeKradNSJqmUk6KjyEmmP42q7Sg5ZfRLXJyCyYh",
  "key2": "2mGZyhDGbacXcayzSmFv2sCXiwCZpR7CK2ydVcfuYKzTnECjDJCWHN76MebF4oJAPWXXmRaunjs6zqj3yQhP3N1Q",
  "key3": "2d1c6UEoi1cKLJcRSa9PN4XS4qvJ54RiEhPQ4SX8q1ryfdXea5AjXNburBJMkKJtVyv223GonKu5rwT9rWLAsjNQ",
  "key4": "2hyujawEodaEqgeZveM1trsGAgAup4rTY4f9Le4oDDy7ccL4kUyKdhiiyhekFpSCNhq4xYLDfL9kP5gnoGEL7uMP",
  "key5": "2scyY3zQWT5SLRUqMq7b8bNfQyECUYp6zJ5kHYPyTviK6GZdV3vYJEVmSHkhDnx5E8CPzYTW3fYzDLApPcDMyphp",
  "key6": "4yZ6K5uUcSK83LEqWaVsmEYzXwAsYaNNCi6DpL68kF3PC9Tqmo8Z3Wixs2wbnYAbwNJztUsB493QTdWVPdQ8YPXj",
  "key7": "5KHzXqUxAaKYK2nCqKNbBTUC1oyGDEcH4kNF3KUkBWvbX1x7uNbN5XjdD9y9P4GBrz5bgSXoXzNd5op8Enc1QKNV",
  "key8": "22UvnNMzcLWhmvA1eAHq6SyT32StVT5bdmsTEnus1v9Yc9CxLbVncHCJjj7itBtcxzha8DTYC976Qw9zZrc5vZB3",
  "key9": "5ShsBjDNLvXhTy1XQ4fVfXp8skwBGWBkfbzjyu9cEUPLForkp6H54vDpcphkNeaFFQ3x3zahmbSNCLCRDBDDNfat",
  "key10": "3C5ajkdZSDCnL1AUVj2izhUgBY6TmF28uJSkQGwTTeCxbEboDeTaaUi1WJcXMf4xPaBPMPT7VxniXa8SsvdXazBr",
  "key11": "5pHR1o2XYPJTnDSeMAR3Y5cyFwaSYcYzr9x4GJRHNS7XQS53B3RUJ8YUXP4SxEqdCEdnsLWDNhYk4tBPaic1tdwS",
  "key12": "3iMayLJ4sj1DVtTcDHVdMJFuGtNxtyeNghcP8t81aS97VZnwiWvgEQzNoGYn4WW2Er9zfApcqz1NfWkHjZqvgkev",
  "key13": "4Bcy8BMzwofS7NtMWpbLsT7opyZLUSLHrG1budMx7hGPHx8jRPfaEE9GwVTUXTT8iyotxPYzqnnUwJAamA2SqNk6",
  "key14": "3H1DcatNAemQy1kZRoG5iTYghV6GwhwWPXtNtw6qJEot8h5Bx5RCvS1NtStbmxhi2JKxk7GwSQFY7frVimfnxC5g",
  "key15": "5kFdjCN3QVfxhBnp1NtkBx1nptg7SLqVRxerHicRNoXxm3wRsrSFoiGBit18oBq4481QJW1aZ3Fh8cgzfpgXX1W7",
  "key16": "5G24im4WnhmvUtAgyxoH9tXAXTZ6swZtLHjhxTPwYHwVpgpVtHRLGA2MMPzXz63U6S95nVP7C5HiW9VacACT6Uai",
  "key17": "995oK9WovGG2QYRXpRV1c65pna73qjmJYpmr8T9YogCRgrEzgEvDiBmpKethpwHee6Tv5igs9dnmsskNowT7yLU",
  "key18": "2FBojRaeLxL49t74tNsz4zxNCQ5nu7TtEQdPWMwxn7uh58QqhkuRszTdZ5vnh5acwLkuxujMo6sG5HeH2e9UFkXr",
  "key19": "5avih34DNKjCGis1rk2bJyJzaqyZJomXNNx6e2ZS7PMw9qsenWKbyPzJioMBFSri5wbJFY4hjdAdPqp669qX88Z3",
  "key20": "2rv5YmjKCG6RiQJeCqTdd5vtXkqiULCnoz4v2RwaAt9kizmudVZoXd7uLQNrDZt8C7V67tixBsYYRP8eBYTd3psT",
  "key21": "2HsvqGCufZQsEBaAS3BTbLjaQkgnfqYGwYfo1NaEtgKLeEYMT5JQ4jDdfeAufq6bSR3pSEwS6hvPaZZBJwoA3r2e",
  "key22": "2qUg4mCQoWseDRbwNHiKXeNEDmoneLL3RzzmKzPDGygokdgVqt5CBys5DfUQytzTZeXV4FEye2ZVyVQsqE7RoJzf",
  "key23": "enzhy56yrjRCm756j42iYhGapKfQZW3Ngr4FTkRmoMX4SRJpVtyRsbuU9kEoHQDBKbUoi2KsgGcQmp5nXfVrsgF",
  "key24": "38Q42bMpcibLspfGoCK9GiYLJkZJF94dzVkKM6CLwZVznYSbNTGyG18ZgK53BWBYzVP33AcQ9THt65T4dtFpNEc3",
  "key25": "4cGtoTRmCiu2XFXBAdUM57Bs4fv9pww8s8Y54v21sT4q1QxtFUMHHJpjfgPAGRbZPy6kUQwU6oo9bdVTQJ9uR4Td",
  "key26": "d9vhavMzjWJDM2vio4fmpKfxvRVCB6BF6cSx6CNG8PFmzWknWxBkx99xQoXjCQcX5nF3TLDVNFXcsxGS7jS96Ym",
  "key27": "5PxjkpnMDT9JdcnvmYcNpgy9Zm2eVFjAQ3kmyopvusLjE87wmN8vYeaZenHFFmgc3pj4MKNTTPFgzd5dAbznA74t",
  "key28": "2q6nnqahZcjJvEf58GuYH1qPgn1kJBtHRkR6iua8MZu9uryD8eE8DsepNRaEz3aY15WjLnduC6poj9bL5LfRRLus",
  "key29": "24BmqgygeAvNAPdE18Us2vKgNLgwcKMZhLRMmosm3HADyZqAUc2wgRRGmNRs5gFYjVW4Y8uBvGFDwQQUNyFd5H5B",
  "key30": "5BZHeRAqwvkGPSLN2iV7QPNWzTEaJrBSFUcJDiXxJV9FApCjBkAAqjgZUPsaVgFqCKYuNv8DvgTV4inqK8VHFx3y",
  "key31": "5mDYd4CUvUscmEkyo7oKxoFhrugkuCrRJhFGzWtHT9VoxKYZwegQRuEPwZw6Bvmg9MVr7PK16pnXLhPTRSjX712p",
  "key32": "59q8CdLRmKs1w4vGMDeCq3MePK1v3NybYwL5LgpCNmtBzbKaFpubDyR4e1rgBjyRPZKGKDprKtier1jMdBdXXX27",
  "key33": "2DsZ4VCFwGzithunLcpt4B8mSKLheBa6QT3nXG5ucGxf7J2HbyRVhCV6HaZ9HMv8ahiZj5BFatQrEQAsDkdqc3fE",
  "key34": "AoMFGr6Ko7qa3bkxhpJzQZ4b4PYKwkq7nQk73LwtM117HN7FNNy6nj29E2vKZnH19a3yJBRfJzkmzJhQgEyztD8",
  "key35": "3GZhgf6qLbToRyEFFPBYr4qdoAf6G7eZTjoUH69BMURgrLASVPu26ieSAwNCJ9t5jiCFYxMDNYU3HxZyRRP65tGV",
  "key36": "4FWsw99QJVsDxxkLsU7BsDMudn5zvJMk3UTzaZLPTnzq5YAnkWRLKHSFoXcVt4Di3EG8Xb9GsbSJ7s2CUBDZMZgV",
  "key37": "37HkQjb8q3zH9GqzFRSYCLxh5PJ4t3dY1wC432xH4o95DA7swFNdH56wBfTdcwzSJLDeRYkM6Nr1aU3yvWpMT7v6",
  "key38": "2sPmT8MqvxEwojAzywF33B6FyBor4sEcupVzSFvqei5Xtwv86Hq3nhzrcwy9L2xJQqdUpV2Z5ktzPtEQVdqBYx6n",
  "key39": "2vVBrSKQR1cyRGetxLQq294GLbkCCU3uxT7fEs7uyLsZZYTRdSA6PxVpfPSR8s4GewF2dMXXVikP3Pge6jQs2wYD"
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
