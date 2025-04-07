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
    "27DaFsbFAQyBBtVWzV44j2VN9FKjeDp2Qn59L1rnutYEghS2wUJJBkdkfhmzmmkUZ7MNatRrZBYTdS91mWwH4CtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UkYzSQQp1AvSwzBpLgxwfb8jjLtq5su2472mJk2csFQFx99UhPV4hfP2gPWd3ma4WaVWQi95AYD1R6myU2THuKk",
  "key1": "4LQYg5d7eK3ikyd8ioLptY6kMbtMithkdGYCp1pz4XXwfcLEStGN6J6cutMrRoj6xJZmw9L8uw2xw7AqVULJNFWY",
  "key2": "4KRidFmfhsTQY93vWMgnhFQ89TFCjHwvXwwujzFNanFBjkuMFhaLik1xWovoJCDTKYCA67Zp2THLW3jo3zG8bLEV",
  "key3": "5w1QQuWmWb3zfr5QfBYQQ69P9bCx92ZTtdJA3StvfZzncWLCMMb3FANnorXjo2dqQJRN4KdBss19iKZxmtzE7LLo",
  "key4": "5eJRL3HJ4rxRHTFfrDFE4R8NAZBkYxht1p4Z6LHPBbo6Rxs9D2QY79DhB45zUHJBGfejuMwfsPUDDFLkq7Zh99MD",
  "key5": "4h4zgmXnTHVj8paBP1dV9Uu6Eu1e97vFKXkfvZXGD6tGEiuwZ2GdWbvcGbo4zoXGij5uSmGAmxcf73UtrWtNoZtX",
  "key6": "5fFw51uYXkxqEbuggtjTro2VXJPVixvHUTKTYYQaoUfvPVcsVfwBKGj4LStqe7Upyy6rVbNUH4MKASHuBZYcUiAq",
  "key7": "5WuJF6k9Qz7A8MAfRVXYG6LDzEnRob8xUEKht4Z7Y2gXVjTb6ysea8VKsiW3UTwcEX5gkajxye6NwYzx1dyaF3bW",
  "key8": "ea7uccPjXnnTfPaz8N4goWJEG8cETF9QTst8aauVhHEqbSnev6dz3gruK9UEicjFBJdNx5nucB2QUfxrxTNNdDX",
  "key9": "2XGviobCXLGN4tFZ4AUGCrtVD2kbjQbSzQz5oQJx2hdswy85a7FJUvPiYgWnXd6bzLamwkPPgK1BKicbdXWFPwtg",
  "key10": "3kz2Xsc4MxKg2cMe7ZtCWyyqGMghtAr3wZwsto7HB2dRJRxmxPgaw5Ck75e4P8rjPLwtfMiDabJ3nWaMN5zMBAUC",
  "key11": "4byb5JgAenzJ87hnxGtXCqCKkT9UmDBP3jKZHcWfWoFLh5xPMXrRREwrt171TM8sR54CDD3yexRc4heRoFprNwzA",
  "key12": "KTbMjqeiQKqPmwEQZNWEdJvP4nuqV5tEQUWXhALCHU5UyUfcVVp7b5pxYL7BCWRfAtPxKS2a2FKLozzqMLbcMxD",
  "key13": "3u9HeTESywbr7cHoVgZ37LUGaCFNzMhkgr98x6sHaPB81GerxMUMUfq33MherAQsQwdJVVVJspszZKiLYRrLXBPx",
  "key14": "4Tn4ixeAMrQLz38kvAgnGR1Lmx6SixNf3JK3zRRxTYnmu1yaB4qf2EKEzkGx1Kopu9Rw946seFbZQWMSi9nkQBPZ",
  "key15": "2p9UxtaL4AUae4hLtGiCr5uP52aNWkx5iKcwTg7AMZUaAaX3GFpNsZRjQD7mwV44YTscHGnPt9VZQrZc8q2f1C75",
  "key16": "CCUg4kynNKJ1rmfwoHFsp6VLL3nvn16915uwPSuCR4oS2V576PunSrJWMNMTmV4AcNzuqD8xXCuEk1HtqbpCxB1",
  "key17": "4MdE7vrDknoLZ1GWPnfgQkcTaoNHBGhj1JirbYi1bZJ7YJYoGW9FpU92YERJcKSwi6GvvLLiAVkhSAmmq84oXkCM",
  "key18": "44p7Bfvh2v8Be16B3VqHqVG1nVjuUNqmKYBnAt9Q8trqx9S8ZCEpzH18mXSwmHRW46wVgQRNzz7vwc2Zuv3VWgCL",
  "key19": "3XWJHpoXWgDvUSXJae4kvh3dpLjcXnibsJ6EeAF4hLdiCvNQS6B2FQG4DS5f4mmPU1kMAY58aS1G9yWppsZzPFzo",
  "key20": "2gpRV7n5Tc2pg3pjHYWRWgPrVMqQBWfhXotJAyv5ktJGVfYoXXsTkR2yFNohCwvmxm8S3dSJwvFRjS7ub4SFX6PN",
  "key21": "4hoZTcHGYLWqT6AWdAWW9eSP2tGPWjTDjreupiszyLGDDeJgfGarGK44GZAM19Xq7UhZ9wWBvE13oTis1EEiN9re",
  "key22": "2MYqaKspAoC8VdcenUGWB5ZiyYZZk3v1E1jckpPRHA7CooFKD2oPx8zXVfZgWBjnvQXkaJKNSbqJEka5GWM3sbAF",
  "key23": "4XUwBBa8g1wtjFhpxizoq4kAiLPAJDmRhrfBkGgM679GVwcpMTD8jMnFLnFfUgVmZSNX5swHqyTt6GwYH7SzKqTo",
  "key24": "4HSuazxPmegLzeKKhgdWerkJ9c1TEE63gGUVjNgeq1RHkbKDSRAxrYS7SEUHXBPdMWsA3uaXXE7JgDHuUQVxsLeP"
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
