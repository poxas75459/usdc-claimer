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
    "2xfk2t6omv74Hn9LYqGY3N9CgdE6xyq6QTJidHExrDeCaBjuCF2GtgkYMm9mPVZ4e65Wq9R3H2whukjJbbNy5Dq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pu3dRhEoAMDKPrn4sFUXDs8kGETChAaS48Kz8te2XQGF8aPvfC4Vksquzofmu1kBoBSRVtSi4ufo6K4a8PjjgC6",
  "key1": "FGbNYbS7WgzXE5HeD5tZbkbaUhYH1iq3jahUP8Lv5pYWu44Bjqh3okxLJvN7RDuW4GoGfPS9XWxs6Doi61dUxno",
  "key2": "2V3RKNPUkhVBqZT5ApxREtFhw7wWSwpw4mN95KqTwA1NrvBXzcEsV78nXF9QrEfABQtjkE8LEFEyhka5ZZkp3Wp5",
  "key3": "hfMas2qR6wX4xDYP3UW1s7Lmu8SVvtALPH7w5ki5ruXdamS1jwkSF6cd1fcpAzgGnw8B61RNJpUpxaY9iCT8hfu",
  "key4": "38MVxLGxqT2i2jXSaWdtFWdctri3qs5PW8uj6KEgipKswUw5hRJhTy42uqBPWaMeErnhGGggmdCncr3b5w4Qeg5B",
  "key5": "2WfaVtPbruuggK9XThhBf6FKnK4rTBzfgP6fVwRGxPyXqQhN62kPQ9X3bmtznYY5pLq8emFCFYCsZbB525h5mfJf",
  "key6": "5dbEXPqVjsz15c2ABMxywyzc67JgNo37hYejw6mNsGvYFegXJiQutbMzLxmxncvoh36XnPLFmHRbw2vypYKSFyTH",
  "key7": "4wNRBuTD2Y9gS8t1yoAr5zYZNSXmJeLupvpXtEHth4vgdNFWq7U5NMAWBCBF81SwimGyTnZgktsxg25NeNdGJnDw",
  "key8": "5PFCa6TToHmYuEZNRygjivsRwZssgsHr5uyf37RpDsmoEXooVjmh7AL23uL3PrHx987eLHXJfnPh3FhWoU2wafD8",
  "key9": "5p55NhQ3iXW4aTLPXC7UFsPadHbiuNXEUeqUrG3PsSJDQuPt4BMsJdVbuiJSdN4p7C7ADBvCAkDHttnb8vEkA2Wk",
  "key10": "yvnEskCZzoPwYg4cvbvMWrg4NHhq6zCfaYgW5zoH1LXhqeB6B7e56d2qfnJw5aNYfQo9KGZCE7zfMiCQtKYEbfU",
  "key11": "33qCDiD1Txvo8SkundJRkQuRtiAPKCseBRyRWCRSeoTSpxG682EcVf89X6hVrZnYV9gEzEhWx1SpAqyjY9awo2fm",
  "key12": "2Eq1511yXeQZ7XK8gZCDrBrUef3MjafUZACaN61pTnViuF6M96Eq5YjycPFRfX2yH5orfBBRGsTTi8Y9PRpVKgAS",
  "key13": "44gBGJbvgbU6WmCJbqB6VdzTsqg9Mi96uoM3r9oWMcPPvxqwLLB3dV1iGt7Wdx8iUqFatAa6Ge3HmEpp228qwfWo",
  "key14": "2LBXbULid573j9Ptm4YCDDeULJdS73EqTiTR6Ys9wKSRvJAq1PtP5ittnKxgQGrAPwUzNuL6KR1Zaq2dyUdWfBtG",
  "key15": "QbuWLqFU7jNbyHWGnhgYKxkgxwU59cEP2QKd1fXzq5NVedUR32pedaCVwjV37shSpUFBHgCxFMtih6rdrwdKhps",
  "key16": "Xu1CqQJECu1LLedGtr7rW698XwVqR2a1kKRKkVTN6XpVZEeYVn4pxk9KnnSX1chwjtU4gNrTCCLPx64D8MhTiRz",
  "key17": "XAoQmxo6TKMt1UynxYW7JxY2U4pePxJ198yRu6KZu1yZMXKuwTqUEAEPtvZ35tryNNSuXCS8FHCwH7mm3UpMb2Z",
  "key18": "33qsb4rXpSGyo5Mq1udAavAhCN1pVdwqxMCQRVSKZhLwgwYxU1HNwbvahF7BiV3UEDyke7SKynhFti26AUrqDL96",
  "key19": "4JtyhJyZAdsYX3WRqD6ddYbaUpM2LF8ooWSQj6dGB9pn9KxENfcCJ6qcFf1feGmj3PzGSQBq6ZdWQgdHm1FjyFYz",
  "key20": "63uQV6SXh1wfLYvoJqQfP4GcMurnK9frvznHdzx1z3hS9Tv2yZ3WxKJGFANSVXKM7uvu3F9wB4awjoBPhurdSnc5",
  "key21": "32LybVK3SSJ9EzZoP9wbfqvHmBeyn2qdnHiDGdJ3LXrCYHSxLkNV8YEHRkJrQfn9kKLrwFp6DZ7TRryxCABCsGd1",
  "key22": "5cSoQg8Bi9sEqUuB5PENdzx2CyMcnJzaYBNZhvq6NpcHfYX4xHP359oUg4UjecYgbBVLqdosdBNUMD3dag6RZEH9",
  "key23": "uHxB9YzWydUPV3Sj5RpnBz5ee8aChtJMumgNDbipLuqTTboSW4iNWFTAdEpRPJfHhvJ9JhRoTT5pKacXz1r2Ug8",
  "key24": "Qy4nD2a1rgv8c5gr3bHDuxHXp8PvMhooCVFWznZ2hPHBkVtgBBiKaxEh1fLVVq6dhT7KZfcyKaKKHGqCmsBni3f",
  "key25": "2QeBZvRM7zdWqYNVfAR4TkG6bHsRVo9B7pdA6eBxXtR8FxLiH7stGrEhuC3tyeS1UJnYfyAnteN51VYyEwGuYoqx",
  "key26": "2mdHaDTZwQtW9DiTqZ7dfd6EQjxgK3arvaycVSv526VsbjUPMucPEEGenD5giXumNs7zpbvpYz4MXznZ844mZXVh",
  "key27": "5XjaWHxPttfUxcY9ExUzavUinT3j3apvLPuvRrXEnbLsNaeYj2wZXbDphqaffWfgU4VzwTWNbvsKFPm8PmgrrpJ5",
  "key28": "514oPmG7beNbHognvzaGkznp9e4PBJuYs8P5Nq3bZDg74PyYCRj2QgzuDMGw9tnqhdemPfQMJVwptcYE8gSEN6Hn",
  "key29": "25Ey12xdFqw9QRe4K7nwi3jntpdssDTPRbQViPgpjUHw32wYxFboCwzV2q29EtbPeosxn2iCc6wXPkiaX8rTgUZn",
  "key30": "v29Hfa2Ayawaqw9whfPDF9shaWHB8ExNMkfca78JkNXG2yT2AMRHsvfmXgAKHDp8VCKeLFqzj2oxzmRifyTpzMW"
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
