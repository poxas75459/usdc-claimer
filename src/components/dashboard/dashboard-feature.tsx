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
    "eo2wAwqqb4FJYRcWajtJSEgxpo5U28s6en8arkjRrcGPS4m1fC9JTY8dm8eqVjKRv9DRbdayecZUpNe9iuyUWB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JATwxbH3bDghwNk7kF6nnDHGqKByexpYa7D94Qv8Y2YquTmCqznC87XvMNoJihJBVuRiRJnbri92SWgn2pt3oBi",
  "key1": "5Pjpo9JvR4zFqe1Adqkikr2F7NnVNtYvzmi2c4iK565XuMtMGhT28DGbqpzyjyXxyxmHcHHKF2YSSA8MsaWqkB7y",
  "key2": "5HU3Qz4kyMyKN99YAMzPJL6pZAxMwDrNatFM9aWcmXbKwG3SBfVh6YtDTGCL454PK4MTV7Djdg94XfpTMTpwbfoa",
  "key3": "f1AxtxTcCJUh9hstX6QL8Gz5VTu5yx88tKVaGv7zSFKMVP2wLdV5tC4srtczfpCNm1jFNaYsHgqnD8u3Fb9CwS1",
  "key4": "2n6pyy8KCamZBTKpqHVi9nnwdnzM1dXvuWLwgUzw1UhqLa1Wj9JNg4wVZRuMeXeXFqBpZ9gG8PDFq7PnL6VqqvTY",
  "key5": "4Tq2SA61CscKy8UY7Sc7JNmWub1dvgk4oqrFU2HKZd1FLgvdbmu2FeBxg7mjgUxmtpn8cyFikooW1QEV9nwK41t7",
  "key6": "kq4UadVTWHERSgzp6xt1AAjNXTZ2mBm55JCV3MQZny9DqLnNMXd3ZoQWeD6MK59EiZeA3gEn9CXDdYmekX76KUn",
  "key7": "5ixS4MBo5BS6AqytTR4iBKoPrkdVvWEzKyPqmdEEZLCqqPnST36DoQN4QCmpR7ESMnxN69J5huJcvyA9hxRUvhVT",
  "key8": "2aeAuut4L11Ny4649s9GSww2W6X6cGcrNefuuSBU1LfX2UfbZm8h3N6nsrwGgYG4djmHAjH7eWYt91k8FXHpJ1us",
  "key9": "3R4a3zEAVMbqiBFWSbgbsSLwqpJr7zdmM19mfdG7ffvZt2WQkfv3PKghe2rYYEJVU6HmYtg5S2NsnDongxQXamE5",
  "key10": "21pAiHvhyNe7W7HAWYt9r8Mu5Gfp9yWasTFe1StVJRp11mCGbb8rPN5yZUgSrNEN4VmRE2c9mWEHTonR8wHdA9es",
  "key11": "5YkHCSAf9aGDQCRFNeKjonZQwEsB6w4xQdnrqRyHFg54ye1Hn48UVTz2XzpAcZecuEddUQapDMD7q2dPp8v2jeE8",
  "key12": "3bDjGxebBR3kwL6FMmkXhor5yRR9xp7CoJsyc1FKu9mqZWP4WoXBWmxNcTKEnTNa6Hh4TnvjmN3yom7qR2B19Jyj",
  "key13": "3RwqxBmE7oEh8FSzdWTJSiNXn6bWzaaGDcNAUeQvaYU8cANV3Db9ThMhDc2BJ2GyN8gq9r7gUFMnNecy4qhuCoqG",
  "key14": "3eV2JurEa5SrDDGPbdZjDYMyrxwCrJGj1iQnWSMEA1u5MqJYh3Lv9s95Ff9U1sXMh9i5P3qvoTWCPmo1u5dpCAD8",
  "key15": "4keTDbTvf72JmdgGskp8fzyCBnECTYFfXANauMxYszfk4LXwDjWCsGGrf39gPstaEzBdWKRR9U5j6SRAjP3gNCuV",
  "key16": "2LC4EoYPvAthiwFvtUDUhUA1XfnXmtMRPMnXtT7cNwG1yQ3zC9ixjRC7KMTjSJGzCJZiB9x7Yq6aTQYkAzrgSEXj",
  "key17": "5HjCCee8YwoEWwHQPLwykNXoGbxboNoSeLoCnr2GbeDkEiz2ufxQUzhuvccyASdsdYrA7gZdcavFU7obxWsRjk2x",
  "key18": "38x4CbMQAHK36fTfUbsyEbNvWtMutsWvQDsR8w2W1epT8zfegN3G7EupPBejs3gsDUxbQXwoFKHkny7HRBVy3P8j",
  "key19": "2Che5RUcabX1wGf5CAACACn4fMN7BGngHRrusujEx59avd7NpFSLy8vKC7dGw3C9emduZ68UGNY3wNyraYyvYRz3",
  "key20": "5T8jcXaBercfRUu3hTKeLm6T3Bf8MD3qhqQ29mdEHdsBiKKUNcMmcLJ9TFXsX9tEG4idvF5crUS1n8qQjRHqpxQj",
  "key21": "M5RdJwVbwggZB3iHb3QZc8QAgviM8jxVH7uv2u1n7R2GWqiHa9ceer7ozyKV2J6MXDEij6uG1GirR27KSz2udci",
  "key22": "3X5EM21Lu5Cs7JxR5MtAzZBTj8C4DSbZ8xUGvGRm71N4mF3gpTtjZKoxRYNwtsRALtAxyraLy6MxTD5RY6FQLoAV",
  "key23": "5rXUarcJZj9R4RwYtFpW8vCPhDoXaBgFNeHkc5Y7LirDtmWjZRiwJm1kk6djv8MMdtPZKeYKZ6jNWM5n6zRRCqy4",
  "key24": "26sSBCTGARUCk54u48Y4PJWY4w8T8G2aYF9536gG6KYTFfFUjJBGEDuuGFVe1bW5H4FBnGjPmD1SC25hjR2Naky6"
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
