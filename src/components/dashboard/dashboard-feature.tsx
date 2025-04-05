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
    "62D5dPDu2H4EiSoQYBzN3XK628jt5wg2F2qmRZ71LjLY7UAPm6AwuouSEEsfgEjWPamWVyBNDfXUyK6fXVYHJDWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WJ1vvYSWcbu8SJRHxUgcLobHoRbzbmzbTQzpc9QWdpMpE6uGGLegeU2A9o9YMXPH2iPuS3ucBVBCiMzhki3GVuB",
  "key1": "2BKHfvUytR4xz5tUz9KmGgXJnt8xGVyiFB3tafvkvXYP8DauseLDxUWqDBvaVRGydjqMi7GpF9yGC28gaHLNQv7J",
  "key2": "3WM36PffpstcJi6ou3j6mD5sXL58PJbB7GSB6KzXcTVc4DFTzreJk9fDLhPiaDPHxXhba1WUrzxmy6pBEZaHauxa",
  "key3": "23UvoVpPwQyRCn22Bv1k15thD9xJ56YUAz9R7ovKi95B6YUhsSXCLZ1NnQkVUFbdRE2uGM8UCXUR9SdUrkAjhhiW",
  "key4": "2o6BEa58WVmapv2vyPc5di1k7UWyu4EpJdQY5oUGRA5VJE1WSrDRwamPj7t8bRR3KY7wLDUsLCrcdLvFCBmfrSvY",
  "key5": "3rUHz4FpYuGKEbVYDMp7XsLC2VDPyCm1LpGzhT8a57W1fVG3jiB9s9Hdc25W7Y9ony5TpssaLNs5e7gF7MGr4MDR",
  "key6": "2L3KDMCNvmWW1GBLqy1aPVjXvjjzdT5peNn4tbkA9Mt6TqeWRkGThuu7ddz9fcK48e1abkvzpfbQEb9Vx5DdL7uu",
  "key7": "5iweG32zg9iRF5C3xQxi4eqQRRL2Q4uagnuiYT4ejniaCNngSJGGDQGjvfRcUoMdqBvqkkqBz9ShSYyMVTGoEzfx",
  "key8": "2K7JqWCcXuVYsio8Avz6FLUCCCpWeo5mCR4Xruk7vf7DVG6ra9thndQRrcYX1fecQtNpPXGSwWJmirWZ81MsqhyM",
  "key9": "GCsZY8TBAbxGguxKFV3U3tGYfiffS9Jwao9tMFrSiginiFn49wm24Vo4v17JfDyS8DSmxYHsS8pkN9aR8hERUaN",
  "key10": "4RfmJT3rkxDFvb5aVV8oJLtB4K69sm6L4rLVgf7dx9hokkDNDDkpoJHBBccHeU7EoTzyTASvktxaTsxfPENuT9Jf",
  "key11": "2XkUEKCDyhRdiPqEyrGis8FypyChz9eVyvpL4Gds8SGBm5mX56v5asXG4ZVvoHzvEDom6beoQKRfVqAtrsaYDwTg",
  "key12": "GJYro6yoKNYWHhSEGemFSKuHY2anZ78YQ8jvkc8dYhu4vvmM6PVyJyWUGmFTi8u7UJZJcDofEAfB37AuLcFjq4W",
  "key13": "qcJxscnfmVycMQbyzpxPnvbP3qbX5gyB7THDoGW3uc7j6GJtez9PwWMYFRbRDwxo5AQjATvhCrorZdYoUmpVeXs",
  "key14": "QGi5nYwTtVGHmzQcabENVdRmsMJsqQy8CcVFex3pXN9eC7nfvSffrXx2Q5jToQ6qXmsR9vvnPJJdi4cG3UBbs53",
  "key15": "33ksZ7BXmTQGptJi6gRiRfmkHGkpbtGZsBwUqF5ji9wdx3kjG4pXYNWih7SH3PfCkcKD3JdM24VQvEAm1PEqYbxi",
  "key16": "obehBNjN4TiNLyYYkLuHPs3joosq9d11MvB1KWW21HVWLDcQ8EhewtfXcnXGbGg6v7CZgP4deqGBGibCN8bNNeV",
  "key17": "4dtp1p1REJw1BmZ4Fk78oMxKDNBzjK42JKPEBe6HvFNCB7csVFRqUqeXZqmBtsut8TJ9uthuhvuYcx2VjPxurDHo",
  "key18": "49zt8j39FRTzWapgP6rZTUteAtJJUnogQxBWMe4ZjTkD717tJYuN88tGnLNxobxT2NK5JeqzmyDB3AUrhkCJUnMM",
  "key19": "65rWH5j1EXbucjJi48eNyG7zmu7pUnf99JUQbPigmF1ahxn48BFym3LaU4LcTWLyHhoARiejfoTVxjbme5ZsGYEW",
  "key20": "Nq6VjQHCSjdWK5kWujewaNDoTnKWG1mWYpjrMz2F1sn4q5CpweXGx2gkRRdNhoqK8V7DvVFW6zARTvrscfC3wXK",
  "key21": "YF3VuhRfQ1DkdC5UEXkgTgdy2xv88o82TZi8eXUtDLsD9kBMVJDwRmp1tgCWUnECWuorZ39myqSwSCAEtTiWXVU",
  "key22": "4nFN558Lii41VM7oyYsQuo3XJUnyCHoKkXmXH9LobHHnfhGViZS4e2i4h31gDmSKQBrACgFC9rZuEHCS3VuW1Vc1",
  "key23": "3u6MTibJ4LSycSpvEEq5Ex8Eh9mosdkZdv8YmAurKgsyu98BXdeTfkLZrUPydPYfD5AWGngPVQuBHZkC93u79dK2",
  "key24": "ZaMtYdisfrpTDQBtPGdUEZYXgYnfkXq3CLpGbiRAUmhHGj8m53HsXXNf6cY8mforby25NDdZQyCcvS55bNeSAL8",
  "key25": "2PBzJEKFxxQTYGHJbzSWE11YQK8sedRD3RhrL1eB2JSAJndFjwg2ckiHFympBcikrGtJEDdbrUjNEXQtXH1esLQX",
  "key26": "413kvFsC79215BaivVXciDnUwu1k3GKuvMeJyBAXwHbu4j8TraamYyfVSJTUhTD2TC6THJVUy7mf4CaomezubAJR",
  "key27": "sGhquVfb7XTyL365R644PmSAoam68o2JAE1uwS4UDrfBZoEswiMPaMpFwYdiY1ZnQBAfBnV7XTeG6zkXknNu3mm",
  "key28": "7MpNDBQmKod5YT2mp7tCV87m4g2o19pxvbfuoEgdVJE4bUv3JbLSes1NAo1AYg94FHYQdZyfJAN3NzN4DCWPqUN",
  "key29": "X1kE5fbdpY2c25iB3sgGnCLbmADQjaezTUwh7GMK1y5Ni1bKmgTWCteWeCNy9QAdpEwF9pw44TFXCnCLrZxpMQf",
  "key30": "4RSdhoKVVKUcXNcfJpg2jhkbAPXGrJd6QxPG3nPd625kp4Ux3XsBukTSiXYMBUr5rm4dJRpTcN1YmiHRSrtbPZP4",
  "key31": "4pT3zKKwgP4C9RS6jEBGUASbZ2PJARJULsffvFEvXpwchC3VXYEkaNM1WZPRwhkw3JdEDz3Fcmiejw1Zbs9tmduY"
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
