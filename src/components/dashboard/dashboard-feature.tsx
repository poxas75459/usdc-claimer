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
    "3SkfdN1QKgRydbvNkmafz8XUnh59Ar8ULNYSrmTMapTPygUCZ6jVRCFR7gWVQKeRMh8PVrsThUxebqdU24aQUfKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uY7kW3t7D81n7Xy4c3bmNZDb8CELQmaf1NR1nSbLQApNAF4EG5uhKr8YHqQTMxwDBMh6QMU4W8d9UDeAzuxreGi",
  "key1": "4Lrjp6V31bRyuyqMcxrMymWy9nLTWcMVjAbKGCy6hmHWyk6brkyjpzxQn3JES4JiRS7G5cDMxgyFsfqFfDtc9p1R",
  "key2": "Dhk1h2y4qmVJp99NV3n5gaqo6ypDWWX1XYwDEHRwyZQ1UC8XibpDGwoNfWHGsnHWXS3821d3hpcgyGHjiCYcvip",
  "key3": "2iBucktZJPQUv5WRbYfAbPzro7ntaaTTjjq1yNC43Fq5cYg5SJZzhbYm8c8n8EDMcdTDd7wtx4KFpBx6xgUE1xpA",
  "key4": "EgZHieUyp4YWETaeauJY4o4dvNv3FRWqYDjAnsmRhesMyHu4df3jeZSR3FAcR713jDeNfav6bJ6SCuc6NfjwzLB",
  "key5": "3zxgFsTQweAkLSEoa3Gxjks9ySsZutrhcwr8Q4sZEBAJvZhL6uakKW22VQ2ChhkQDipuDHVJpM46BTfeAd5y4yJx",
  "key6": "5TQFrLukPKsLMi7EJkgRS8fL3SNeeS28e4UxuxqMELHSwoxkMgWS9brCssTb4j8tZHwGar7YbBqMeWVW3TVFtEZW",
  "key7": "3xTwB8fKwUCHbaT9omFLv91iZg7PSh8JpCBb4uz4Tx2bbdPCEHS4KVLi4kCfsrfYkrmxVvjx1HLSWLWkJ1pSgRra",
  "key8": "3LMGaioy68CzKz4P1QisS9NKFQ48JdtTsbXSc32tXjLZW7CD4LCJthe6MAEqvQagAp65PR79ATkn81EDjQR13mRN",
  "key9": "61fAy2e6dNrBdFCA7zfs3uYkCJv7RbNgCJxcRem18ESH3ZQVhWWxx42dXxLiWvNW6CuV3igguyjwXL9dPX9wkJfV",
  "key10": "2TsFZgpbg3W7HjNyz86Zqk35cmQvjY7HEQxuYstKj2CRENSFLhjp8FptxiUmJxpn54sUZ6c3fxsEdQuMvwCd3VpT",
  "key11": "32ZGjefwjs2wJp87HqEmAP65R5zmaYa689AoAxYUk3DgRHv9bFHU1VjSxPBQ1PSK81Ec9ixdyg868RzaxyncjiMp",
  "key12": "5Twkep3kMinTDMr1sXNZCdnp7GXpFGM766QJm38nSKBJsM9tVQ2QTxakxyNaf3Ux28hrh8oY6Z6wB8WPSnN9Jvii",
  "key13": "3Xi4BjEoXAPvVgWUjonigEzrBUgsHAuammXE4VUa7J5XdwV5himUbVhBU2rRwjfaPXwYy7URxCYfS8aFM7xLwFAr",
  "key14": "4n6ouNy7e261EMG9N581oZEf6jK8LGWA8gT1UdcuPwgxiFdNjEUfzffyNCwndJQiutXVwB23yJGPfr1WTec2Qzpf",
  "key15": "5vvy9o8pY62QEke7Vt1cVoTN2iuJk7p5DWEtceW47wPcTcSqBskR5WVny8xngj7CguqrVFNHJzJzd7ExCysCs6UZ",
  "key16": "nDaTN19eAYcUTtz3L1NJrWg6vtYiiipwQPf2KSDD4pdt8ZJ8zNEFozSGFSyUVgvAJsWSnTUxxfVsEzsbr4dAPUw",
  "key17": "45ny7GmsCL8WK5nswBhU8V4DwfWHwXiM5UZfkyRVktNAaGzFsqiEWQ66ZqHTecs4RA7jHHUkPYJ7jM2wXgGec7Gk",
  "key18": "2ZzVoyZij9FDvm3STadnmWtghhtdnej3M8M3yoUt9npGtSPUpSdkoQXX7PbWBSfnuu5CuEv39EiRLn9dZoQ1A8ro",
  "key19": "3GEpxehR81waAu9GVLoPiU6Qi9S85K3FtgFknYX4Fy1K66mjsMxjpZWGvPgQoTLDpC5ww5gK2w4sicRCt54gCHX8",
  "key20": "53qgqWCS77gygC6UPifHdaPz7iag6iDDi9Pv92jhRuM27hm23fK3oiSPjT79Msm6SwARPsMKV6unNeLreeUS3GA9",
  "key21": "4YZ1XyEwJ36NzWEgrCjeBRHK8RcaYzA5Wc3H2uWrCFDYag32Ngq845UwxC1ETrmMUNhMyunCg3FUaxGdkc6pTYsy",
  "key22": "64zVSVU3o9ECiAxTfUGSAvcGbg32cGgJLnZhEsuGXRs3FER6KZkagjjjutebJtavqVUuLjGpQo1WtzCktUNuUV2x",
  "key23": "2nDEsgW8j2ToxL6Xqfz5CYy45SuzTkcXv9Kh6dzctkHpZKCy21irhdmGt1fmQH3Ww8yuBkmf9dqEeJta3Uw8qUQa",
  "key24": "47qANqnf5Qe6nUp1CLifWR3ZSwcTpe8CqnKEUSCxHicrCBJtEos7tp6m1U4qp9eMomgw4j4pJhZpLLvoNXDL8pUx",
  "key25": "4DWycZk37VhiDAMoLxfrUiHsELtXaWdADvMDmVVCWH35GBD8PE8vLhVwXMSwFueeZa2muCvRPSwqMNNjpEiqZu68",
  "key26": "2c8smJmtCkiLA52giWkSkKhk3Kx1QCecSbBxgqNNqcYtwV8t6vLYYMcTKUHbXJ4qAQXG3dx69GFZht9sn41sjg8s",
  "key27": "E4czuvJRE1cnMxgZDiNK6yaP9QRib5yUoiXYfR5Wopz4sP5fn4NnU3hoj5omxUzLcrrxP9fHRYvMD8t1rDApHkz"
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
