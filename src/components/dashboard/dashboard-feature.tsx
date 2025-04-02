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
    "5CLP22oy59G6yjaTcrZhcehD9ibqeqn19kYVnZat2qbo3xi4iryVRDGZaZcuNERCrWxubkKoF9gWtZDrD8g9iy3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BLgKiUzA8pwWQkaeDU7oxhU5F3KG9iq6rD4bDCouDp9MWzW8KEPkGtpJkZ6y5QEbXTRKSF2mUEKARKyvZdfRVvB",
  "key1": "n6ENgPwP1JNJ4YxBsFxFMeFPMWNheeYPMcwDuFnxUHy1uk3M7ELvaXYKBaLVei2cjA57tvVXxcCP1wMueCXJ36k",
  "key2": "22UbiMUr1mjUJsP8xcfc3hbmk3eJHLQbqk1nMgRMmCk6q7XXhFa4vBR3zMABBphYWR7V2YctfXFBHXB53NipG2Ny",
  "key3": "3ZBcAWj4zqLuhEUYhFqfu1STGqtULzu3CLMWXnLtr4n5dNPtf5CumorUMThMLsWNoBkNGK5ffwUwMiP3aTNuZdJw",
  "key4": "zgHLj6Z13ewNWd6A4cf44KpYyCAb7NFhVGah2k1oKVZJzpzaMGgkeroHHXxybs7uEdSa8AXdZQ9AHvAQCpCcemR",
  "key5": "5iXCiUk6BnJwG49ygH9zEBBhZaG62uth3ctdkktanfz4rPbszpuHSstJJonE3DxkUdU5KGMnNQCY2cS63bYpepcu",
  "key6": "4DWgohfeDR72YQVA6WxGpDt9ReSydvEAqgtF3QGXqvHJzFbhTvqEjSCd5pprEsue5C4db8xdRD3efgSvL4Uo1PB",
  "key7": "2eo3bBGn6GyKcftogQUBKjq5Ezioor9dZLmUd84SdiBcsuDw4bJgyWkVgBSFbTQXbQtjQCQstX7iQ2miFtri7E61",
  "key8": "4nUgzdhnqBGtJCx5preaT7fXuFsQBucKriMsB4G2HzmMJr66k5KpXrwGcynZt2hkcnDaPUGb846QfiwR7eEap9Bs",
  "key9": "mEkVsmB3Gk56wU78Zq74wmfuXPfv3RGeZ3KaNttzALf3EGkHKBbLY3wVrbFtWmJDCBHzdkAdb54XUwDUYmCdSDJ",
  "key10": "3rhxPbzz8NNfRPdvieGYwXhmc5hkpzkjNQytGdgU8ZPoYWEkedUUKnsJZjS7eXWiWy5LQCTV9FA8hDnLQeswRXGm",
  "key11": "SFxQHVWkFFMt11ojd5PaTKJhCtVvCSCoWpZhkJhmmC4an13Ty1ea9Z3rLyLKWWTbcrwGXyJkBEL36DjSm4mFfEU",
  "key12": "1ckMi8S1oFZMiZtw6rdiiUxeE54oyarbXRtWDUFuAvi3C4KEU3Ktyqiwt8BgjNj1F5mvPe2rAX68skb7swi9DRY",
  "key13": "EjiRadqcZ68f5STf8ZZZ8rSZ67okDi6h9rWZfkhjK3T1qoBNZHA4EAHkQaV1QNrkmFJz9xGJfSUXZGm2YRBKy4A",
  "key14": "91qY6uFpGRFRLGCnkQ8BaHxNBgpS7i7zqSDUyy2HSzyxgnAzSwAYar9VbM6HgntJaowdiXpufDGU3UpmBSGNNhX",
  "key15": "5CBR3dNcgFQMdXcPTYFBRs9xYGgfLH3kgGeZfAF4tDvDWBpJh4FGK7XY7WmY8xt3LAyEPB3gxEkaWLC8HtKpDaPg",
  "key16": "5YbHBrDydHnhW6KZiWbFjAH7wCA8F5hRrGYgpynMGhJJTEGtNhNtUMMxBeyjR5698HB7UWznQQgxMsHTePkkPyQV",
  "key17": "5BAU3zYeEvW7rScPPpZgvvk4ybLvwWD7rVp3t9SbFrS5fwqaz5j7kbxKSSkYK1xUJg7wLc7dwENEfsHaoMVwZD1f",
  "key18": "3PGSmq8QQAPWiUaDTi3QtmB3WGYm851Hpzbe5o2Ysr2TS7wAng2W2cBLkcBicDomaLkNzKQUb8x4E4fjqNfBNnh9",
  "key19": "3Cgh13De96ATp3DMyA7cP8ePNtVgYXNKKGy1mF1ZrQz1VDc28Xh1zhxkJDiN6ussquEzfJEQSD3GHt9WZLXDMu7Z",
  "key20": "etaRPoVaTD2cYjeFZ8ThaeKvHj9cD7aMM3crLmLTHQ9CUm5fvhZZqADV4oEankdGqhcPRaSjFNc1Ha4Ri8cNJk6",
  "key21": "3t1bSWkzuoshNBPCRgvonx5KdyTmWwbtTigpXDLXWL8t8m2W4dNxt2KNSPZuSrifQPCJV97SsYAWUzoVBhjmCqwW",
  "key22": "MRna368VpVLyHaJVBQgENuHrEXi1nkKsbu5wWKGmgumT4JabnBrdRdJyRohrcEhiivsY4WJqvmiy76GtpRyWzqT",
  "key23": "2fwfRUFLCnwsgC1TQry9SSQHM38zZRuCGZTu2bRMgHhqBTQ6DAY5jmapzsuqrYoLpzMr2xY9PGCTV2gKXd1UHQPk",
  "key24": "2e3UHjs5GNYU5YXag5saQUPeUycWNjRzu4Bp6xnS3jxBjCbL3KUpNycZR1HqW87ZKJhaC82sWXQV62QCNeZKoZ7f",
  "key25": "4eC6PJ3UANf7TPjqFgaUoZYZNJThWHNML65KGTVemTTUEiPkbLmpUfY1duCnK3z2rx6wFfK9WeeR2L6wtuioqjTh",
  "key26": "3AGtaLzGDt1gyHmkazxneTDL84p9B5eLo9wA8FAhEdBpKGpswBE1uFNTxdjm7ZRcsV84VQbQxSoy7bJPVfFGWUtb",
  "key27": "TYnJFKr9joRwjG2P8ie94fmbRC1moCdSKhoKkTih2dxSpwKjqSY8qzfZDNiVSdrsEmFokxhYA7noP5s9VpBnaAS",
  "key28": "9qbwgq5eYpJ8hkGku3EMKB1Yj35D32rSs7RrNqQW3sJYKtwAi8syhAgbmjHQekc2yVWMWz4cU2ADAUJdgqVehhv",
  "key29": "5ZAW72L9s55ob7DkG6Tgq4RxwvZVTb2YrDbrxRMm5asv72ytos6XAQ5qgZaoJuM6yCP7bBMobxQtYJwrSnSFEYA1",
  "key30": "2bjoUZtaee9zZjGrcVE6hvaudAKKASFowyEcMhCtsCTfQDTnXSfdbiWvJZBThGkKa7jUwdHb9hLrx6j7ZD5pT6tC",
  "key31": "4niVoar9QDhC3Xh1FSPi4YP2yZJAmUSWSuembLkdnWokJUwbUDxUJ9fzdSy543reaecuuDTQsmuEHwZex4xLWvxp"
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
