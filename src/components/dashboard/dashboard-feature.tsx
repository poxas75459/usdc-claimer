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
    "3JUewJVEJZqNXxQNGJmZuzuExaDpgyrmZmbngA4FfoyZW3aLDexmrLoSTMhPrgL8SuWtVg18LpFMLskpDqbgqVvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56VANnwY21SJftjUUyRMTAKZLZQTbZXPESXnHSqCHnqCcGHsiGwz3hfq9boiLUWmj3L2s3pdAtSjVZscXy2KhS7o",
  "key1": "2MpDXoQZPo4fTkMe6oCxooS6K1XoF2NpTfBo8oxjdYtqUufx8jr1vAUFYyFimV4S8N5idAFiBawwoy4JpbznmkEo",
  "key2": "3uPPJNZoRVCg5tWBMd8fC8U7wQk8YsQFcZSfZzvo2dKqXX13wdKM39vzBLTFVEdxGNd7CWMEHKoR6P3DXKUgYbuQ",
  "key3": "2tVRPj28ju5Y5rci56dW9vBpoP6eGTRBkeoy19Koso863rW7BHfopppm8q6XfXC2be9dsSdXGmarqzpf5f5UFrxm",
  "key4": "5QyJPVwqK1qwVGMDF6rydjrww7Qfa14pfADsi1zx9D1g4kUw8VerjJHaywar4aTJ92w21g3oG7oj5MjCXQRdudvB",
  "key5": "CfrVZ47CBxP1UtufnbXQAPKCCNsCBczXBw2NskSdGjGfCsfDnFknQK97kCJQF7HdNmW9AYyXoVGS4MDN5iXwciV",
  "key6": "5PU66DaHEbrMNEvvc1rVzDC6XHcUwZo2C3z82hEbAwynMZDZmMjLnNRRtwVxwpqYhA2Wjg9izrtC2zkZTojvSBUP",
  "key7": "65kSRb7yXCUwS7PDizkvV6P3XwiaaAnWB57iZXiYXjLyzQETNMeUtUSSH2VkHyKsijHqMP6AuBTTucQXKNyQUW6b",
  "key8": "51zX7VopmQgy5P7MjbJup4HWw82PnBqPMDBBgUNGmneT2FHZPewGJ9sztuVrcrVSDR457yevFxYEyJJixyyyD17r",
  "key9": "5oqMPsPD6dDECxnUTNgazYqc7AGuPvCLrCq1Z2pdPDyEpJuyWfwGFBRSnC8X2vUzWrXm3TFjA4P4KAH6aEuWAtZg",
  "key10": "5ZvsKHyJKR9ELQoZpKhhgkNg62uQTPdpPcUGGK7kq6RfnSvYk6nFiHFCZeAkC1Y3ZAjhESw4U3vMX7SQJT8uku2v",
  "key11": "XAyXYiGkPDssXMBZz9ni57UtCgaQ7s19of8D1ixe19vUCT3TCWJRwwoxXxjV4AVdNwvUANrZ76Pt7rYV1c2FqAK",
  "key12": "5TVDTJXppKcCp2X1a4QZtLChsvN9Vo9fX23oFuMvoKb9k723MvDc8ie1cg8VLUjoxZk599hzPVxwdM3T7qhjmo2Y",
  "key13": "2N9hVFajKG6JeJnDRcLaTcsbVpgesdn25RszSJQMdf2NovjCq93A9mwG2VtV4hLdNMFfzfLC81re746cn8aXjwN6",
  "key14": "4TVWvaBiRZdTBihYED5AdhvGiSkYdGhpH8t6oJukcFojgamPztDUBiYRuP5UUEgMDM5CmphwoDpo6txhKcYiKDjB",
  "key15": "3ZvK3h62RdFE7QNNyiXgZp2QWkYkkw8MJdRMq4Q2GxWJN4iCoi6Ttdqhf7nARG7wdoPi3Pzdyh8yrTAMgiLbNG59",
  "key16": "2Vsp2k9H5kw9j84NfV5MebZ3g4xPFZqxKf5ybmc2uvp9K5ehmQaE6vtBzMHfPAeDcdqiiA5pt4t3DTr5458977cD",
  "key17": "49JGxW8H8MqqBExyrLwMN9CmMvophSDjYk5eCi5GiCQRjjcW23d8QngrzmBEtZR5tdvPzBVvHEnfbuzTjeVdLq7Z",
  "key18": "5psWtSQ7xTasWrL5PEENri4h5v2r6esCk9Rx3wPdFf1nGsMEikV1yZvUx2xLT1v5Zsrybgnn3LuQ2siGj2gobWFE",
  "key19": "67fhvtKNgJG5E7shVZcHC2SVpTJsfTnixctpL9GAiTS3YNXVEo1GsrRJmvTKvpeDKPqWhWRB57f1CVV5LP1NtX74",
  "key20": "2QftZ51eZer186z7RTxXbcN6gmkdoDgYV2DxLy2yJ7whe5wb1Zwh8GHJmpR6S3pUjSCu1VjkrrnzjMrbcoGo4jWQ",
  "key21": "5KsPQL4ScP9uMFLyCrXz7b7nK6xwezUUqGMBhC7V4mEHEEnuMcnTKtSWJfFBZNjgogvGi2jN2LSqRnjBvAsN9KTd",
  "key22": "6226REbf7pPzN89wiKDGfsASxkkaLLrZ2TZc6WAB8b39Cj13uQAupD5pAW1B5VqEVZDfhFwKUG9BfEuNDVoFYU7U",
  "key23": "4bZLThzkQFiUgiUwWpK1DKF2DXKpUY25THZaquyYbJDybrQASzGAibiSd3rJEVJ7PFQ1YdjbTQ3m26v2gSaMkMtW",
  "key24": "ojzJNhWN7P1mjR2wVH2MtL24n4rFXBvZ5giRSWGBycTqzuon7VnmM3Lft1kPLYkpmzRP3KYTvuopY2s72bpENSn",
  "key25": "3gmqBRmtVrgxzhLtwtiSCJXEHb9vnuJ17PDgYJ6guLSTth3pwN5Trt5pkhMd8nSymtRC5gCsEBkpcLiqc4QsjCUW"
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
