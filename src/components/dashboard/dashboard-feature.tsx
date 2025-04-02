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
    "4yt9R25LVTxsUUNUVxqjvxnoBSTB8u19fTZu6cz9ewqiseaDWSuPsWSJQJSMyqvMLJEYkYRnsddPNV2Zjot8ZTb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BFtiw231XUqRD6BZuVy2LQKFM3qkD9ef2NkKkUX278QkcF58AWpTjLuC9AWPZmio58fPpCnmjXxFc37gp9pVo4z",
  "key1": "5XhzqyuJGWbCtW46FiCBCVa2dV2tZeeheoPxFDWpMqGGSdCyMVpo624cSmKbuqfUwD4Kmg3bschkpDxLXeYQhiHV",
  "key2": "3NdZcLHqnWgHuDvMd4Q3ziKkbPAezTfEQfYYAf3HdiuSWy2U5uek1miVhtpoihnqCXKSYN5sZni4J8WAWCtDhAdg",
  "key3": "52iq6UKnWtkHJhQig3zXha7t3NsAKYWzA7oNt5wBUgmSFx9Xr149P7aE69EfGW2pWpN2qCiQvG9hNhZxQjg5ex5v",
  "key4": "2JedzCbNQ9rF9uaBsPKpEtnajhVp36uvvmJYHekjMpcpRyewyTGWi3hmStedsfFXWszv4EKF6Z7HRWoJCuE2isbs",
  "key5": "2AJzbCd5gPUQUaxw74nYFT6Q77oiahbs79Nit8wEwVVsZLNYfsQXUTWdSbYC8zCaUj7uXJnvvLvhA2ED8Nn9jrKM",
  "key6": "4XCbpcc6ETRygQgGDVupTzYuhBqRAxNNSuPZvvGSz388AdAreXje9E7QxJywYt4hp7VqiEyehRdQoMik4Y3676h7",
  "key7": "62GnCYJt2K1MXs7H1YQfJuMGbNC2pk9EDxUe3rYLNDXKdyvKAtZVxyKctGLrAgXaXvqrAGJXepaYJJmKDnUeQMq2",
  "key8": "VjbSFZXAZV8Ac7Z3ZoG36aU3gzDbEiSZpgbw6iV2XRcDJvBAungS3sNiDHQUENNTfrfdHkXF1MFSe3d3NSQfENk",
  "key9": "4hJAX5NWVepgcDVUdLuhgSkkkHvRcT7ZLoc3RBWFN3XGDhAJAJirS5dKMiNtsdALrWoR6UPAnPU9ShhLmN4B9Wmg",
  "key10": "4No15d85pUdabNQwh2A2iB9zjidaGnFzjK1r5P6xS2oFZeZxwpk74nPmZziDw2bZTiADAxJKsc6dnyhxuFsEYLDA",
  "key11": "4UG9NpCKfLBbHXt3H2CoKo7Z331BJzfgWsgfeSg7hgFWT4ahTnvnWJaQegpW4tuQBjuogp7Fp4aNae3sxPHLHv7M",
  "key12": "24oZFEH1SP2iMg9etoaQxrokysJ27DJSpT3WsXCAUo45pnJyPvdGVtpd8Qb9hLrmGf32xzz636FRg2F9UQdVDwpB",
  "key13": "58eBGxNGnMe1fcA4bygPfECh1epzJEZMtThi2ax3mEJU3wsa6vBCyPCjWb4wC1368fZxNqgEcDDc7pat72L93iUY",
  "key14": "g8gD1bpiZ6niLQFTAd25nCcLBYtTUaj3qLzU7iUqN1SNxunKt8xhsGJZDdy9jBGXDYhvMQAmuj74mYyHgW5nPUi",
  "key15": "58QHAoAcmJta1KzKcQYEYDviFFDws76u1DeiSaKiqEYAF3vw1zDg1gwFMGzZDDA1sTfX7YW5ChTAwiH7YoShzgwU",
  "key16": "4Pf1TYED3AzdjoAay1ZxPGTfCqhbeMENRs2GNKDCLE23eaYLah4KnST8CgexzA4Y2GvkDBhg2DgdwJjLXwtZ67ib",
  "key17": "5funsXPiHcAzj3vi5sjKUvRWmvLBxU3kVFNsYxQX99RvSsCVCqHAr7EHdZoPEUGVAL6At4U4pTzy4MNCHyRFKCRu",
  "key18": "5uqaSXeFrM3kUmCJxLy15GrxCTt5PNzhdvuE8a7idxoXYngW73tsAbBSFEwaELkV6HnVHHkJdtEa7V7xiMjTwe99",
  "key19": "26dpti7WDu9Q7WWehvWrfPXVqFLiz9VcTJuLV6pDoK6m3ie9rLij8JWScDcFtdhxUDZnEwfW1Lajz7pzi4rKVEfn",
  "key20": "3gPeGmcbxgh8JisSs5wL1dHJ8VqHx53FmQn5pRH1T8U8Ntni2dqES1VnGP8K6CooAhyHjN8iJ2oLXapkqDyhpJmP",
  "key21": "2N6D2doRwtCwdBvMh8g6cSRnJNg1XUHttf9ikVvZDu1tdEW3hhUkZDHVpNpkXhFs6dkxMEzUt9cGPrXtQdfWuxk9",
  "key22": "4ckA9moG5WVfzRe8ePH9tADE4UQZpYFCRo6oKxiZ4qBKuWnycJGcnL73BV87uNyeKfi3tZdx9MWkgMciW5jj97N",
  "key23": "35bCyM6QHp77whZPWgtV7WLBvyER51AL8azJhuFr2NMB2XWAAgWXFh2CHWvBjn4a2Qx2cokhZGRv1qaWWPbDo7q9",
  "key24": "2xsYb7dYZNQfo4aRkN9roaLwBHVDzdcse33DRqjArf2vAkyd3fZCMGtmhqNT7vvNsuqCzaRZ1sCFkebtCybjch4b",
  "key25": "3nqf6qiF1pofpbgKm7CRCRh4agEojtRb5FbEjYumbtvifwcRESTgrsQHgWwT31yUf8ZWAg2xGbbBb9RzLRXsMZ8M",
  "key26": "59i2ZrJ5d3zx2MYZfD719TcunUfjPQKGsjv99oAjmAVeThsQXidy3hstFoxqXNQtuTaYAPW9EJQFpGk9sPfGkHsA",
  "key27": "yjBJTejjwx9SRzsNZrc7d1U3aqZAaSAjqGfdRuhEYtYKdPiCJ9ZfGcqDeoWab1VbmDZykHdGFaH4TuQgtZBwR5r",
  "key28": "5d76cwB8G1g87h7b7UGuc17Rfb18hbxyySbctUzhKSEAe5XmmVqvpwnGGjMZhb38DgVupKRxPkx1qGrKWnFhPMs8",
  "key29": "614Z9fmBHxVRAKKB3XmqXJLdFAUfokSsfoig7u4mS4EjzAFz7X7rjg6Y4ijJvyR43cGBvrAKFpD5DbgchyhSbmU1"
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
