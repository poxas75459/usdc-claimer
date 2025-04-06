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
    "5713GwZJ76kHfogkojaov8i3WgkoT3aj5tNrRMdExS2xRPJB7P2DMu4qqpCJAhHHKfh6fgLHTZLKYaRsPcSnZvim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3shEfY9f9q9eB145byqMQAEqZjcbuiy7Nx3hzkf5FzTFv5XvUY67V67bDU4zHDHdtMU5Lo6VSHNHaGXnaH2H5e5X",
  "key1": "nFbQ37zG6xPwkPqa2pHdfBxKXv5wkssW5PbpRGTqcyecRm5YR1eaFJspMm5qpbgfJzZ4fmcEwyRGZUedq6zwg1e",
  "key2": "3GRZKGCw7kqgBEhUnVRGANHNnNE72TJ8myHFagg151HpNKCeY4esRM7WvTte62dKeQ9xk6dJiD3u8ptuDeM788in",
  "key3": "5XWJLCkfhYWfAzBEhK81vmSDx6fo1KYbHMJjTtwajd1CB93JT4AcoCvArDhAGsHMRcD59HWmkMHhkwAcLMWSnoTf",
  "key4": "HgYdiGny1g77uPRVUpva7z6XdN2CCsgLo5jE925k5PVTpyd7iWhFQjCXAtL9GyoxRxT9sQwpc2WfExtvihxs3WS",
  "key5": "Y12wyF2MhrxxcXv7aEQvdzqaQ1otMizb51wPi624tcLEaCcscbvR9XzbwAQhb9d74fFapHdzeVRJbx8GMABfgYi",
  "key6": "2aW5wxYuEqAVXFCChwHmPvH66usyUKaw5z7DJXzZoYKJXfWiWQEiJ8aZfSToiyUd74X6kxdvDod17fZvea2jgkNT",
  "key7": "YourVF2ZdnJyFgAhyQNfxLWQmJtaQsZwyxUSy4SiViNS3At1t9dU1HcjoT9abCjGrpeJFhouV3CevfhuebHtrpf",
  "key8": "2gFsekUNQj7uWoxAvGHr66krkPqC4LpcCrgThTVMA6QjmYXJtWnYjJakqcxJ5MhCWnLwv6e2tKEVc2sBkKsxSCSm",
  "key9": "5YBGtHJppAGmeh3YQ2VkbRexWVuUZYpQpvbyfBETGSiq1ZGEocWqfJNPBTv1fx5LpBTVZTMYdZd9SFCiW8sRifJi",
  "key10": "4csit8YGo6Uhmdiue9Kj21duHn46Hzrk9sv1zrcpBxseow8DRST1YCK82LUgdM7x3SfLDN2udJyMn8N4tURVArjJ",
  "key11": "3GCQGg71qv7h8h1XcxQzSCe4yGEDMHwD8C5cxxRJTxnFoSuyQXw59cJDBaHPEhq9swfvKjfLrFmeozfSXAW6EyYE",
  "key12": "JBLLgMZyinDc6NN1QfDb1968BUKrY99dNXcrqFk6UPa3dJ36SHsWEPJgoMZ1bNvnaebyoknLk1jcnKg4fHWNgZy",
  "key13": "sj3pdA3aPwgDbk83Lbs1Q8oyKvvx2Dxf9jkPbFrxHVa1fW9MK9whDCjNEyF6dPpVLQS5r2PoAvh2ZKCsqJhMRUK",
  "key14": "2KiXD16xbbERUHFz19eiR1koK5VerAjzzWeGRVX4LhVQiUt9eAKPQCsJFA57RXMmG9jWRxf2mGaJ3fyAa9PaY5Nq",
  "key15": "5mQhTk3iAAsKriAvji7vnYoSw4gVTYHMdR9kp5tmWNBPB6xEPWWpHKp3uD8uJBWHXD4MxRG1G1KkbYJ2DNtbnt4n",
  "key16": "DgBRvt8y43upEq6zYPsXtMv5pJbYXde4tR6qUbu7Xp8oFZLEjnuyVFFDz5hcCtZQS2Hy1MnJKCGsokbdy7URjyG",
  "key17": "5eEtrXS89jP3bUfbEKhLXV1c6B3j8M8x1rAAV6exH5SZPRtJ3HSTXcLrxKw6FZYVF9KNPgt4mn6ceP65SJ5pbABb",
  "key18": "4DwvnTJPgiRUYcJupR2u4jc4gYHqvCdBKygQEvEbXven6DntKGML7QmWgsaEL3dLhvnjmUTHbTCmB9bjiEVWtEqp",
  "key19": "4PQDNNj4LTw6sKhq69C5AmeywsboPiMx9AvxfCQVtQ6bCXLevABS11s2xKxTWFumLGB1rEbP5jVSX1pEdAetgn8r",
  "key20": "4nrjwMWFe8LwUeuDoen578YbZBj7YQk4HiWNjEihfThfZdvirnodRC9fCjcZSxHpFrm7HVk6UHVhdjiHhFMqG4fo",
  "key21": "4wgQxW9EcK4RcbEGsH8yWmNqqbREjU3nw3jkKYej3BeUpFc5r6o5MutrQnJmQeV4LiSQhUzoqY2UJaMuqBgZPq7m",
  "key22": "5rSshzC8pgAm5yW19STAmj4fsYv9tuYbwUtSYwXne3EncK9gMe7EafvSBoStzcfRGBo8hJGzQJgt2jW2aJ8YVMxp",
  "key23": "4Rwoo1SgMRics9sYSCMZfCUBtX4nm3ALQo5Kh6in66tDoaeGkA71B9bKEkEkGSqWi2BmNDteTvT2JSTXoLTqmbiC",
  "key24": "5BtNfxg8t2Bc6rwffmCea2tzGURBekceXSNhAARaSqMCSxyTnq2prtzZFytSGSMyCUkRc4rHgqZ2rh6j61eCtnEZ",
  "key25": "3xPhjzM8ReUGihXuQZvo93uRtHgfzcYcsg2PzYDTqvDSC3m6zozXJGm6wP6HJnTUSoLuuotPHEVFEuTef4rQgMgo",
  "key26": "3NVr5JewrvFRvSfCzHYnC54mjikuv91wjdMYnFzzGTT9SKHyGCuzo6dY29qk6XhFDRWxwyCS5DYHJ1p2ueEaKu3T",
  "key27": "Cqipxsn1Zx7zDxQSm9QC6yfN2swMj838uZzsSJ8vzVVeF37AfRwP1wtQWbbDVtwKDNtki4ULSmUKGZYkiuZaraA",
  "key28": "VJ6vQMYEnaynrHaNw8MP3R761skL4usGfcwCTaGxmFnH19N7ZmHfcNK5Fu18Y3sp8WrxHLfziXHVeYKS5PioZti",
  "key29": "55xcdvMdRPWvt6KCe4BiAbRgWEdPmAXytrafUgxP77P4CXspidiRomT1FtYGU7riVuxikrYSoCXj7TCs364fXHHP",
  "key30": "4DAzTZ51Zc1oVvvCospfp8V1P1ZQ2E6NwwNia4ksAhNczAK9BnMCQqt9R9TKhCNddRtecWfNauPa1Ekr9SQqSVoU",
  "key31": "67capgbUuTFV9x55RCbiKLunHQNQU33qx49vmVCpk9a5ArJeheUUC4n8bMf4dy7voZGRwjqLzUVF4pR5KWezYgcb",
  "key32": "3Yx2CaTLLvZ6Mo9h39WehqxWVxypYVyjA79wCQG3jq3KBMqVLaVpDgfqxCBSTds5PzFnPFXY4Vu7qkKnUaujxSLD",
  "key33": "2kkC7KvLYYHtdFyMysnfHHBuFkchJQj6PYMMabpuHrPmd3AYY6utLQgLUynPiiu1ASCVQBpKnu6DWPJGXgLpv67N",
  "key34": "5m6WWU8ysjrQD21ypYqKRs7XoYHC3rMei8htYxotKNivshL7Ahd6otmPmhZpmeE4YPq5UJ8EsDk4D6z7ohnFZAQX"
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
