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
    "2xJRcD9Ho7CqiymSbGmE1bRQda29nSpPeHkjmG2Cfho3XW3o2DPjUGmdDXokWWqK3BxYyKDxGny3qxSNpGrudaVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58qt6MCaXcY7f4WpRZR4nuczJ5znPgQXkJGbd3dMFncVqHgn34fn2RVUrsUMJDRPVpgfNhahpHRdCZxQJsxcYReq",
  "key1": "4hGWiSvomnumY5adkBYgYATgGQjRokRLvW1HagbKWRfkeXcEeZyhUvwPaRoLy4FWRise9ijELpNcDVqd4Ynq3w4o",
  "key2": "VGeF2TSGGyZpLvNQ9JrZk7RokPvKTYDUD5w52SLMbvhB2oZ1TB9UBGXYkUweeSzk1P83PonB2KMDNQnj1GyMEkH",
  "key3": "5j7M5pC89mqJWuVqNeBGRpRL5qJruErbV19rEBWCQkN1zb8cnsAg1qDdWfrzm5YrftRrHXrJo2Za5cMiHQXoYVeZ",
  "key4": "674VcZu8NdPFpiTBCFwS36Wp6EjU1kQ7c75RNTPihFHpeNGAHzvKT9ovnLoGkGiLCEKFSn6ycPhGdNTuheTJZjBP",
  "key5": "62RizcdqepfvHePDeBFWB8Hdhmu5jhGmCWHBsqjSbiJhXh1obThbrLRq1rfMxjyE74AEc4yEv4ch8Dhwb5CnDvrp",
  "key6": "59HTBiAEuRCpoEpqjQTjQHETni1J6xjDXHiTesnTLFohNf4tgDKUcAon7TVsxSxPPEWMDYrcfw2EsHazkUZuZHx",
  "key7": "4zVzry9zRbDwTWC5aJ6Bmpcqu3fUiGqB7iRrYVr5oUKhr9BX9oRzaPaazFdX795bKwUBxR68V4qTMjXP426qkhmR",
  "key8": "4ELZSFU5Zatg3P5ZwMhZqU7NhxwHbEVNsLwCwHDQLuCDUcUntYtP3mM7xdKdoT4noxPYR1Q7j71byeGZEWit2bd1",
  "key9": "TrYW7VHadyAjWZTBr8VybjvtZnQSZ1pk6SsrLphmpdvSDbCyKX7FCH5E3gdrr1CAM1hTjaRiAj7Vt6ucLBe4uka",
  "key10": "4QoUig3N8uB4aFsaF8qjVM3uUTVkgMBoxzJok1TRXSDnZ6LgRZFu32bzHdLT1QjKdX8gmgmBWqta46149e4mTKdW",
  "key11": "562eLZEX5HBg9tM2HMRgHBEhrdRUoAeXgsPxYQkQ7PZmT1Vf7jfacz1NW8k8KWF3xRfCvFuNDxRfSZgsWPGTevus",
  "key12": "4f4jrjyd1EkjjQqKFW5az4tbfaz5Bb7j4BstHcpg6dtGtPVJ6zKpQcDf7LJU6KhkgJRxcMaH5MdM1zhr3tecq7kd",
  "key13": "3Jqq1QL1wgrkZbWJ592nPgPeoMcqUQ29v7ByXQhJZuNMXEVhaQSWzDNU1Xr2BFT8Z4r6mzQvwxxtUHSdsFa5KLfg",
  "key14": "T572SQSmmuDV7F4mSBfTcuU9PygJweG1s8559RV6ma388GaVPv7z2RfmPz3tSGAswmpdioCjw8NCEuriYieUS77",
  "key15": "2XE5Bi2fYbNKWnDkct3w423tWtuzJnt4Xubkj9aXm38xrC2yHK9jdovTDrWTZ4FLhSoteEUdLmKXDJdVNAXHD5jd",
  "key16": "44MkjtxdTQVi4PJYWdBjJwHfqFNehYKcGjJqDZAWrXc1gt9s37PnZFqyVR3MF2qkyyhUNzzvqg17ioBye3dFWGvu",
  "key17": "553YX5vhsaeimLgrbwzF9GAyZggkmNqEPZsitgim3oHC1SSbjxGJnMd1d5wPuNHG3jaWuMm89mYuwDG4TDqN94nk",
  "key18": "2Yw72nGa2D9fV5z2ZQWkwt5qiSzgRS4T2nsd7BqPLsxpXd9vKrpfxHyaFddt5S4QEv6FZ5Nd9adxvRQPwgFWtZK4",
  "key19": "4WXDEicqJxS42RAsFoo6LuwyaFamgedeBfngHEzaEPgu1RLQFZv1VRGM8FGS7SeSWn9ztL6oVmqQAwm7nPjBXPzU",
  "key20": "5HabzDLdFGLsQPf1xyHMmocQPNLSqt7KGEE8rBibJWxwYaQRQUDHvNXCrRqBWr9mwJGXpzsyu7muJtcxgU1utQqw",
  "key21": "J1qaDYZEKJGpxFJSUy3TsZi4Fdxh1eDJfX24sd53AmURNi9Ls9c9965rZwSKBe1Haf3cyEvMEpfG1mFuAh2GsJv",
  "key22": "46yy676Ef1dM58Piqq9CZKneuYTfy3RbtT2mZnXwcvTEFenMRBdSFHBg5fWYo2dzgZU9TFJTxeUT8CMacWNcQ2CC",
  "key23": "3ofqfH7v7dVG3H1wpNnTX8moKTvkhvSMhEanXScRfBGPgzdDzRYueiCmeeYkvtxixtZUZrqrpABd51TUa31rMGCc",
  "key24": "3rU1o2m4zqYdB3csCpcAvqDQo3JVvu8DzgHGSqnhNKW5WMUB9VkxcH28Tjme2czVK5w6mVG5tJqEva243UzXkCPx",
  "key25": "4X1NPSxCfVcE5skQazj44bcsB4WtkxmpLLSmKwnqGHQuc2rruxroXnRwLxhRNNM8HjsKpULQtAfHPf3vwWS9e7Fr",
  "key26": "2M2UTDrZHne4LxxFLuFp6yaypHduC3N4rSdtfWQYANep7PYroASnzpqDYrikqz5ax2Y6zSFHPkUUdQZNSvVBfTZk",
  "key27": "3jygkqF324a5LSaCNm12rrciwUv8FNXrVmgMYCdwEoYHS77PATgobdKWXeNQAj7BfbSWKpvo1AqvzfDa68rVp12M",
  "key28": "EwyyftyZPYBj4WvtXRPBx3uHdEYJzNS8mxounm68xNjQb6c71PqPdUFJkVCh7FJKcdYiKmeaziwMbMWeP5NRDXa",
  "key29": "Jcb9sWR6eM9kfe2PPhBu5uBassr2LcPo7VVxwcHzUrFuc6EWw4h5m4qTRp9fcwcYrwegGz3qzv3F3r7ZnnrPHBa",
  "key30": "3UjS69LUhZxfjRgLKtPQc7d4jKhoV71i7nxe7q4WSxZV59yD33aK2Q6yg2H7einaiRfuQSCtGSyLKoNWbnypT2x2",
  "key31": "57g3m8jscuXFmG2W9fCrnoDrjuibtBBihw5LK1Sq4RuZzwCtXCXTUyXGLBCzivf1fVh5LEpWeDAPNib2BR2t5Zg3",
  "key32": "5giSa3NY8yb7bHyrdPMCNdHu6tM8bAoybWdwFAreKaf6zVreJfq51VbboTJUEpAxy6iDK4CdG7x96B8CeuQdsKWp",
  "key33": "4SJPUmzRz5B9g4kMWZSfRNM2oJBHor5vqcqTdAxhjGK7bRq56ZRawQxao2DZwJyGAowJMJ76FQTMV7kAXNW2CVwc"
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
