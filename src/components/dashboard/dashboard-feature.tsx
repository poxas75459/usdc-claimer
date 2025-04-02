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
    "j7SVYPoUFWREYZ7ksaZzDHYuFkEpJKWz29XMiRp9JJ28AVyYbNjAGJD8mfxix6SVwHWLvGiibS348iRNtCEDK5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vgz4TmSRMUd7SimuXEy3TjwmMwdbRUcE1jT7Q1xm41PNwo9PzrnUt5nbxMVgb7PKHN7g17RJsAsU8bmU2UXs8Yb",
  "key1": "2SMx8ZTxSCWg4tZmSzfztyLww5NYSq5kqyBb8Uq6wLyo7oVKFqKgAtHuZMPkTrxLQGLgZztvckN8WVuEV47aRZf1",
  "key2": "4LQpkCWpfQiZDpzgmvEGmteiWANjTcFTXRwT86Jbd3xDDo7U3nTGaEUftzCevTjfdhhxGDF5jHXwvb5F1skm91ze",
  "key3": "5aLgAdSXouBVdSATUfEna6HLEKM3m9mJwyas7bUMpxxFexK139eV5PsY1KydHt7tvFtcDbJ9ptjWkN35dLWtHAHh",
  "key4": "5dAGvyiiFL4TQMDbMJhZW1cL2wK3z9VDyoLXzLFgLx2mTxE93d3vqaxiDgAUgfHAG27yE7JjGuMNhAMgZaobfdKw",
  "key5": "5nZNCmxS96H9LEk6MCi33CjoX2bgL6aZitjdaBHvp71X1bXoK6yCNLLvow452CbUpGVQT3kCfsBj3nDBdcWdy8fr",
  "key6": "5DgrW9N2CR6uGRhGvDbDQ6mkTzX9Fiwh2Bj9LPze9Pr6bmSfJeQStaYhWvC4FEMbu3Mr3K7kb5ygyQDpkgRgGK78",
  "key7": "3UjAATpuPJKfJk8q89sysQ8H8jrhgAPZBPdy9FnTtutVAhAtk4Z1w7UCvicqLD5RXaCEMtLZ2qsAcWTzcx3DCetc",
  "key8": "5L98gim5PPEPoDWChqZaBacVgnkmgnqb3FzKmtC9CCAhiLvQ5yU27BAVqasfYNo4hwAjxvYQEirTvbQ8pV4vGn3y",
  "key9": "cGMyts1wfM62LfU4JLohdcrhKp4d5TBVas8DZLeVBRCz8ofJbC85YiAsxMecJmrhnwTThyUBi3Uf1Jp79qvXDAi",
  "key10": "3VTGC6Z85kb5rQejeRF4NhHSTKfmejokcw31BvqKkVapqj8m6ab7jSCn2TKx24E124e5xh2SDNApi47bd3E1EUth",
  "key11": "3HeTZvtyXo4AgPYhS2eJcMnBtVrZ5EnS45oeX1E3PjebSQpaizFFtHeDgf7ZQoXMU1CaPtHys8bKpePmfFMTzJCj",
  "key12": "xpzdqUPmjec1mrX6c68XgjrAsSZ7vzwUXEzDb4f7yd32P1e5zkpCnUGRfSawWppx5RUgA4NXfHghKaVasUsAUib",
  "key13": "5YhhVFrEZu6sPeGcEVzVgE3QSyifc5iwSk7CuSSURE1RifL2rHToodxFqA6r5yXksqo9BoUxrpKUs8CDogR3SpKf",
  "key14": "588AdssN5zAJWMFDURHTbRfmSum74XxQHCUChWUMmNDbS71vtPxshWWXw3npn2ryKdp3tXJ2tKXmifvTddvjHWMQ",
  "key15": "5SGqmEGPN4jf4CVSpi6kRHeo1vxR149Zz3v8FpV8VZ36gN3KNfxq9w9uDfd932D5jLZS1FU9jBwNfESgZLifsbwQ",
  "key16": "3oBqUgKDEn7G5ffZCDJ6TDSAPc6ogEmVLcwCS5sjqqN61UfHSEtzJCgAHDd5NjGtVzYyasSixtRqRHwYEkK9NApx",
  "key17": "4R73f3fZs6DbcYAwbJwMQhQRt8z4Da8buVDQjPg51tieDPR2bZsZvy5DN8547vAMkwcoSFXphgvCKzswtDKQg5Au",
  "key18": "4XjfFxD6RbxetpWcUtRExobNSj4xnEMpDmD4cVT5r58oSFxuZ2DLjSn9VYpRKYmu8FtR8N2E9EzK75Y9E7B8CAai",
  "key19": "4mm62ryieBnj4cQ6XBxDRStne2tsqjYk4vYouAKojWT14wi5ECEtZL7bx3KJLfrK6Sbwk1BusGtPmiXVitx8Q3R2",
  "key20": "2xTdFywUVaiUyTzwFcNWzC9uXt1EaerW4TwCM47oomcfmVSbZ8Zw5GJPSxoQo4qUXY5M8GiWNXXYMkCHBpK46giN",
  "key21": "5nbwNSGHkLjLr8rfoSt2Tij3Mk3KKph6dBehfXZhixqbhKwvqMXQQhE1dfPtT1xsc2gLJyByA4EpvHpWerYQ2AUe",
  "key22": "5HU2cppwkmRAmXmEKyi4hxTazQwZ9pzm1MkPf4JQaKs461ESM9Wki2rJhuy1ynvDTXiZ4b2dSVqS64rK4PPgqggB",
  "key23": "4QF2MUHQFmnXBNGZoeKvAqbPtn7MYP4GDBGg7bsYmwXHawvW2viTvJ9Gz3s7Z1HV1mRnGa5rnS2Nd7RxX9avYZoz",
  "key24": "4rKvBXPPKxrYhuC9PQct8LjfR6V37u9x1fBdxhubCUechjfEKcf9aBJRkBN3HHyrVbm3G2dBraRvZ7QHGaFzwjPN",
  "key25": "58uoAi1QSNatgzsEpcZKMt6LGseiUcvzG39WqrCNngTLBcFVayRUXuZA1CcbuNwFm3QzEaEsmqD8WVw14WPMW5nw",
  "key26": "TRXgU3wP7vTubB9oFjc8tbWNSiLeLnNTZfzBHZT3YxHkT412ve6z3R2jaHeXCE4fVQu4aP2WXzBoUMKwnCN9giJ",
  "key27": "3pbWbwLRX54ohCHV5hVHyMeNS2YVjRC8vmaZDjV75vARkb2xdUXGhxM3mKATkp2r3eTprjT55SZzwgpGH1SZoEkQ",
  "key28": "425Ko7NdfQ6Wr8MLJJtEhnncdFLxXXE26Vg4Hzj3gY9H1BEVpmJdVK2aMRddwZZS7PtBR1qptRpBp1Gr7XFuRmvn",
  "key29": "GE5tU1fH7qyvvHvN6CKAch8HqL6LpJdNEaT4UWppDiNg5dvbfCfdwgcp78W7ZqnAV8DNsyWrekKLcef8sLwRKTT",
  "key30": "2jZ47Lq7K8yGm35B6zFkGAMud1AKnn7TrP9ivms7beLkHy2dKuPKMAxyarsMc19ekAACP7YqUW1wFLdiKSGNhy7z",
  "key31": "tUCiHx7r3rbGE5V6N4wpCGZk2bWCpmVfsDLAxC455c91GkWhAiguA6aSBrFooyDA1d45h6PvisWgeMetuu8Bk3B",
  "key32": "53sN4udiEgmjXwBczUUKePuYg6EXKkCzscaSY4FiPLkEkKn7kA8vdb6r1v6omZDqr6F5uLNH8tzfQSmdCAtKrCuB",
  "key33": "2MqYpQ8ak6M7bZvpg9NhVdWeVbXVApYv9UKmtCqdTji7P7dwZGhQVfzwbmHvVBmsb1a6wmdT4hRUtadKwikAgFZ5"
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
