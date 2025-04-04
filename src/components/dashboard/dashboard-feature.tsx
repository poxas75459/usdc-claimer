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
    "2KmSY7gb6H5hfGWasdTuJsYjxKv3bVq29zDEg6y8aZXYrurMhLip6gzVPM8u4nHy3AgjxFcbPFhNguX9ztE6PSwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BCXg6zAbnBZANtkLxnn9bEXVwvJN5hTQiz1f8vnjbC46eUscHmKPU8eHSgz6uEwp529bLbuYAdeavG8zBzHBoDD",
  "key1": "3cxqYL1F2bNDYwSN269tKhH149Uwwd3bQhmMHVq1vV4bwFA8hVsafoWj5U1X8bTTPLhBPD3wmvh1E586z35SXUhj",
  "key2": "4aP7WDPwdLhB9j71ivwNVCCAEEPB6zsWX4cvb2eLEMLt8eFrgAFUd5gzKk9cDavVu3UGnA6rrhLtyExebGh4arWr",
  "key3": "VP7BxZHUd4Po4R4n6uAQwAaUJcGSLfrmLLfWW5c8kydVSogUFqwi3xMR2yCjbgWyw4GKtRLsrUEzqUCW292D99J",
  "key4": "2vahbp19CPUBRqAXQdGsYr1de6zcHp3rU4tSucc1i339ueSGqMwjx9aqxVHBm6Kmj3evQG11CAEDnwE7wyjru22X",
  "key5": "46QyJ9rrTQerHDReyPTKgBbw9NBD25PGiUXKfpAcdwbMrfmEuMQYZhe7GczLLnUNEVib4mJ9BwTiJRsHrT6mGb4e",
  "key6": "fdwpXgjgEBEFksVNT9erfE7ZaA9cubstt5kJ1Ck7hYZgEaeQrjhCvfRwhM5wnKwYxi5bnbtPHtDz1m7yM97CjrX",
  "key7": "46aBCTrJK1n2UCGbyPeqGURwNT7wwQYNVR6GhADSA8N6tGSszLfDpANcP5avRiSHS5yE5SVS1ch3WpR4bMi79LnN",
  "key8": "5qCkYspMzkdWReFByYi15TGEyc99dPz9xeazgco7LQGnYQhKLuin7FhB8ggHfgeyG2pkULFrvXA19DkGn4aU31Xj",
  "key9": "4YUGxos7sAVckLDdgRg7jFyicyUoR3KQAZLdiqw5QwZHtKE381bATA6zuA6bA7ftT1KRi1YGJModqSHUtBYd1ioW",
  "key10": "3UqL8mcbmqxRq7mLd48ue66YaDXc8xdFwEanibAMRZ8zDJ4jcXv4sDg8qtEVehMuWJSjTyic97ubMsStA7eTgFoy",
  "key11": "2LUC2UN2gnTL5oCRkwr4fJSVUHT9XXawEq6hH4hEjMCD6N9T7JKEVV6PXUUQbtqtFybot1pAZpXzT2d6SBHwUi6T",
  "key12": "2Qqe1DnjSo5C3exH21tu31xseMZtD4oW5Mixhbv7aKTv6g458zmrKwhNHCGvxaEbBSNakr6NyKHwTugvM7UdSdyV",
  "key13": "YC481KCaRG4psDAw7QxNHZbwuctX2MQSpXboqQawEp4osSJ4K8zqh5bPLBBvfMmyL1wJn6eW8kvDFuS32vAwEN2",
  "key14": "46vAURsQbgqGJhgsUNi1CDyAbNqV9fqqUXXBjmNU7vuyqfbLBRmbyowaaFM5rESUUxybZcvd5zf8VaT7Q1gx31sr",
  "key15": "3YVwNjXkhz4Q2RbLkKytd1xAeJz9utpMq8D46FR3PmDBKBruajnqVTDKoc6UVcUQ7uo6YWKpW7VgXze9ypts8igd",
  "key16": "39futrCTnzcLE3RHUSThuSjNfs2cDaCpyS7FPoQYZsY2njV1qcFqbsuYgAGaC2nU8QxEoCWQuLQXPsYjXTmvpZmm",
  "key17": "gQqVo7MwBy4XiY5tKvQ2ZuVRMhqs4K7Tva3byWzAx8RjeQD3FPx113tzH3sEavxVBFMvpX2hJDVqhap8D3y43nS",
  "key18": "3uCvBqRCCnkQBc37F62E5tauyPZdMp4fKxd7cBrsrbLpR3yB3tQ8e6qbXxbFtFQY4okSah2nX7u9GhYjKT6RMWGb",
  "key19": "3neEr94sem3ha2DYTdF3qLUkXCax6EPJi2iXC7M2LGE5EpwwDK5EWKjUhmewAd4MiGZFwSD4gAPcTX3adV5feMYT",
  "key20": "4ysPtAPnxuc8H7k6HgrTd5CX7nfX1NztNpYLB3D5Em9HiRdgcwivnWXfz48UdEnkGmymkDdgtKicfVSLabKXTJYG",
  "key21": "4ZSGkjXJbihBBTvx3RFF8T9nEXMNcJVbU7p73opWFrrBCqygRwuYUAfXQTRpAF4yLH86U6pZ2Dzv2yg6WwopEw2b",
  "key22": "2ghmg6H4BBbcdrgxVKfVCEsJL3YmNv8ABEjrDk5BaqR25hLeQSje35dLP6uPc1H4VYXW11HgmhR4rAXc4aFgzLo6",
  "key23": "2GBzB26mdHbjYu2cPepKL5jqyx5YgNqznc7Ancj9tMa53hX9FscT2aZurxuX76ekSCngLfXBhDFNPdivshWBuK9o",
  "key24": "2rhLvav9fwtpGwEKjeYob4EorKXpkWfmgdv1HpTqowdwKM19t1ctA2SVBjoEJxvDRW2c6CoW99ScqCqaiVBqHh1A",
  "key25": "4JbGpXahacL7Hap91PTurj74izxpGFueSQ51US7FsJAdsZq72bUcT4dJEto5UqSmMbTShtpp6y8CPUUGjQYauCma",
  "key26": "5RK15skLoN6shYQ2qEWzjcYow7n1R8dUJcSQeWzki6f1wEXZikfPH2UktJmrZn51iYidsX83Wb7KCiAUd2uHBsVJ",
  "key27": "uxdxr6PMWvJZK1gzujvXm1hN93kpyoSSKLCJPfTusPVHjNd3RoEBGoK4hVgTfJQuu3TbxU2rqL8UUDDmvRk4MFC",
  "key28": "3SiuVaQ6jmAL6XCNqS975Le1TtnrKbjDcP4rxHPjvwFLHubqBSoMr8eXU8iS6Avo5eUKW6ETnWVSBoFgJFrBwo1S",
  "key29": "2qnTqyBgAS36JqunvEzLnTGVMBHodEL6r7rmWwhmkyDvrGT8wX9hh2hwryofmRQhBc3vqomVW94EpaQFm95PQt9y",
  "key30": "4ZSo4CD7HiMRJpRj1RzeAZRZP4u3ro4XtDQVKDAyaTxv2PFP8WMFbyCeEjeMqo2oCKfm7hoAe2EE394frS2wuX9H"
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
