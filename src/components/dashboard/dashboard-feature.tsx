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
    "f1dMAJAiqeTMJzNE8u1rkBBzKLd9T5aF9j3eh2rEenBW1GYRqoe91csHCmNiMC6vcnBXDUFj5BBwMYqge91qowV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iNi2cdeYdVEvXRUqWGVSc9oa9bV516XezH8mmtMMTTdaY99GWKdPYuoDfTz3Sbh3maMEQnBWcJUyNXZXrqwucRc",
  "key1": "5x1mUKF9VwEbD8z9DXZwzEGw3b4o2GgtxQi5NqyULHnZVF5q76vV31uoLuKntUSLVMyeAzWeRJPcqCPPkPUTfNYz",
  "key2": "2xqjCCvwCsGAmCqbzxSj5tdDKjAPBmHqcMJ6J4Xb3TiYgGhBz7qCkmarDGYQmcPTcXS6VqBvyA6tmQG229vuxKWd",
  "key3": "5aqrfYXaZ6mUcn9LvJybn2niykngzQ43gxSUUsktuKjosWMJpKk6aKhnaebp1pqxRLwA8XacteMpStCDg9DtWDSE",
  "key4": "FDHZd59FRFhjTwcMRqkEfS34xUfeHy7EJyCGZtMFavNdeMejtA9723znbvKbQq2o5QpXHGMsCPUkNwNi5Vz3gez",
  "key5": "4AbiL2skTjHWgfiX8m8AuiJjqdJDLm8yGLZqVegAAS5uJDwwUmRrTwN3uZAJDy3pP64WBXDzXs1Cb9yuKgyquMuz",
  "key6": "Nso2HxLzqUdyQ4s3YxRLPazswHK4cSZLTvZ8guWVoeegY9Lc3Kd5oFVBSsvze8FPS1y82G2gKZJv8FsuZc2a84Y",
  "key7": "4LUswf79cD1dsuzQKFgr1khUkYe95qifPWScLcD8a5WaMKZbrLRrqtZF4m8EbJioHwi5ArXz3aCXW8D2aYqJ6VsQ",
  "key8": "hbsJLJ4i2jjmaRQvS94ddf6VF6NjRkinHEi2RQ6yY7ZC2AF7AfkXqfXSUqsmtJtAELaKzCJg54nNG8FddQPa1cL",
  "key9": "3RvLSMiSb87UnJhPuvATTBHQivatkwnGQxhSL3rZB38kyL3PmnHoZfigqM4sQF1H2HR6ViWPqx26p3xN7EQ3ru23",
  "key10": "9UJXDhnM1Jy5mxXSGfZ412iZeuAb8m3qN78RH5oPMXwmYUFpHjT6oYJ6DBSsfjRHo4Ya1sfC3w2qoj1EfAmngEm",
  "key11": "36qwxDcxSUUdnnx4dHeViT5MtLET8pLXh4vdHxRJM4RUMtMvue1FwDzhLCpMUJnAcwZuFPTiW4T4uAbcXDVsC1NF",
  "key12": "5isJ11Le9bu3hpMMF9jGhs7JV7NMMKRE3N3zpPcqHaq6ajhJvrMN7eKb6ebfq3furo7AKL4tMDz6wWVG6sXtyBz7",
  "key13": "tXNkiSAzJhCDjWA1YgHxX3DMQjVCNMZnCht1YYQjU6H1d9muRuq4fv3dQkREJwZC7bjrh6644V173twzU2fJNhB",
  "key14": "2Wn6crmLBBpodfH1sXBQic9qUaoMXuD3CC7XaHHg8WpZ2DqoNUmgBCrWbDPK7r7rcaAPhmAVVrWKEdHjT9baHkES",
  "key15": "XM6FLE1Sr6LVUshEt4tV5u95SUTnX5B5wPziC4fVQTsfvRESpYUhuGm6vQdRz3GWCCBACX7aAsuzzg9mTm7Xrmj",
  "key16": "4BXy2mWwPBbEWWsESCGh7WXc7rcnPD6QtRyrhLuEGtwTXtSifPTcMsoLotVgo9pyUW6Evsjh7DdLJCpAptQmqmmY",
  "key17": "38ajevJ92DE2stTGiqwDTMXnFir7HRq2jJTPCYvSTyPgWhtHuQd67RnAtuRaV46T5zs7wjRTpa9g1vhixHhPhgzZ",
  "key18": "4t2H7ETKEkM5RKv6rsqe7Go7sp4UuHcjjmnVhPj34ymMnxyBg4bLSqfdpEgC5W5bqTEMdfEHvaDkxE4QX9qNNUMq",
  "key19": "w4Fqh73vRSgcyDz6po4Fx1Fzq5ZMvK7KmpF7Ku1bEF3Fs5RfjxYfNnvXruenu8Bm7YFKUwBu9SD4v6bLaQLMqZU",
  "key20": "33zBT29ZMfwBxYJPeyBqfXbRyjAHV6UYFANk9d97rTgxdQygdzS9W7gHRPkhWZ1bgQF4RA1d4GjCPcfMNKGojUYc",
  "key21": "67KhdFGY5J5XLSqNcDd5hpoq9vAdQvKczP7Eod4fn9VgnDmpDRRwz5uBqnbAkXVvQQxR4TEZmK7PqA6Ej8nTtVxR",
  "key22": "2CjMrCbkXiCjZ91BpXGFRTeiVSnswZvjN1sEHpMZwzewJRyTWeiyoBrEkoGCkSVJod55xwp8G1YSe8Y7WeVTRgMe",
  "key23": "3BxVx5YaqkoCntBEAnrW2gAYQ3YvFPxARv7Po1Qh8N3ZHVWETj1V71ML7qGS35Lr4pxGvSz3t7kVr9sQ2RdddWaV",
  "key24": "4GGimGrnbtKcs1AYqxnzCDgT5AEDqaMkk5WPwdjxvkSVTKmjiMXR3N98J8r2tDYA4vrcZAGor4k9D6RvYDarLW9v",
  "key25": "2cEutiNVhUQFWgrzLRpna7A9KHaMQXaL4hJW4XnBdpCuBEGLJoRMt32QQYipzEwov2uQrNFPXDHzGZuh43oMc9bK"
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
