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
    "HeYzP2krz1gQyh41cgEq1U22tBrmdUBLpUZGt9CazZbjpyxqzPU9GAzKYn5iLPDNRFdrMfmRJq7Z7zCEBY6zW8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gfGkR3hmcNeF82eQuYJBNDJMgUk9xmHuepcjD3urP4nW2Z5t1hpfhZ5BTGyL8dHsuqydVocjnPyNPsUetQy7Teo",
  "key1": "3RMkrhd5b8f3kzXuFuN7dNumbLg9sW4nX8BNhU93mZUH5xZrzWXCGEpJ8cgG2jNPKkv8aHZzZe4MeYUXNWFrBh8Z",
  "key2": "qaSbTahuYrtEDEyZMNCweADnunxZ7J7K1jNzwRi4UFKow2ZPg3K3kJEGXDfZju3NmsJQzpW6vMmyenJs9BvtiqT",
  "key3": "hkpBv4uSzddnvVWfr8EJo6dUsD7G4xaq4i7QigFP3PyujiKiHQMEece1Lgi6ZhiJpnc9MRe1QMr6V2RHMGx6Rir",
  "key4": "2DAymDmRS9cyT7G7C4XKawKLsyi2xyTbAH4QVepXFRQjNQSZj1epCT17s4vxFyy4AknaUNbco1wH8feYVDTonswZ",
  "key5": "5wMS7oV4eqGewurjLhHbq7eyHweRixg72k9qqsvKQmogWrzJJnTjLjSsnQcKhZ1TxnshEs93ZtaikZSpStF4FWwv",
  "key6": "5Nui8aKsmx7YoH4RBk63hJTe8WL1L164FpHAkyBxvSyAdziwbRHsMzPWZDf2P8hJAbNsXrAnTXzehkwdrHzbjPg7",
  "key7": "2PJETLAWDzD49pTPWUH836uyj16hYbCvqDABK5i71x21eekjjuy4JP16ZQrUQr1FZYovfYi4S5DqRzkuvTy9PfVX",
  "key8": "63f1cW4jWNyj1gDSoV27qimmJ4A7Kqg7uaG5kqLDeYLX1o7n2Qqgjfwfb6DRVxSWkMxEsULWiQBxvkiKn48K2qpo",
  "key9": "5XUjtVwPAQTGthYPNqGzRF2juotoPon6KRxHjXWhQskw56y3bkpiyBw8ESjyvKWbQK148NGA59x85MWUpunJg6SH",
  "key10": "3eZGUYx9d1Qahpcj12hUkXJkGXtehHKNWqQecRGm1bLV3RbBXre2URxxrnyv3BXWV5YrmJBs5aTeumMz962htqhx",
  "key11": "snExDKbqRSrYW7R4oa3ggGDPtaf8AS56ehpdexVzXrYZGY6bum6CbZNXtuk374xTWfqCNdVXto7VXr7X5R3afmS",
  "key12": "2cZWieME3oKnqkdmykTAuc5CcTuVSg5p7xrHwfQ1aMrma96ak88YEYPv78qX1aYRNYtmnkWVToxXMSQG4rz5zVma",
  "key13": "4i9EN97nNVHebSz1GBRjmVnCgnwkLsxnjzuQPKvjV1sx1F7Wz2kjFrxt57A2mpQXStjc9a9BegQzp2WPBUiY2o4J",
  "key14": "4sGP1LVVCqKs2uTirHQSSpYTge7DK7JbMsyJZYFkB2WghKokoPag2iWGAXBVsyFahA4NgPVNqdi95QpwMq189aY5",
  "key15": "a3ktghMG7v8AjeLX8Nwqgt93qvGpw7gxhy2oef2h9Kvui3GarrY3q8j4gVXtK3JDpHiVTtEA1mv1vZBaqsvVAXd",
  "key16": "4y1sNYV9ryV82Xa6i9Hy86Tro36csFopCmNqu1TT69jmhC51cSPMrWvJTtiS8uhBMt6WbcAzYeG9H845afRmLNDC",
  "key17": "2puoUuekPHhEziPPKDt8ao9USSX13FUVY9HPozaoj21mYe4TayrhXwjciPeP6SpgAn9n9jg5EqJeNap2sqx5HLCc",
  "key18": "2s6cjWXWC5j6NBXvzaZqtciqaf42S1u4PeJtEYGKa5os9rSCyb8vbvYTKb64DF3GybYpNQ61up9TGXDWGoJg31Wb",
  "key19": "3hzFTFfRZSVMRR525yRcJpZBnWCQnTZhgwMnnuVZTy45MMYo2k4tUYqwMWkYqeeRiUH73LpjY98VTAmyp1sV4qaQ",
  "key20": "3a2TXJdnVJXVcv8gHQ6W8HbDAUwm5mzn4q3fJKXL31BWUFadt9pWz594t8iExAPBmQDWAqoRYgLwkYt7whLpYFP3",
  "key21": "CLQw7R1uKn6mgiJtxAC3ED7MPqnEkA9Cf2qjVpPmYvNgNdX2p3s9HKL8SeC2waXSwRjYNhcpsqbrhK4tZY9rW6N",
  "key22": "4kZMejqdjfdQxsY7yDZdzVefvT1RDjXW8542fgWNjtYzhDAaCZ6BB2HZtFa1ZVi49h4D9o9uMU9X2Ci3XKoZ2TH4",
  "key23": "JZpNqgdzzFVkCyCwtP1USiDWdy9pAJ7hE7mh4XxgReheAhqtzcvCXCYEAyQEvVdLaqibjj4UB2GAeDdMb8ukEkV",
  "key24": "3zeb8BaaJj3cdvpTNQQ1DcGcRZAxkEYWcFsbVzungoLxd6fToVt43JcQZGDMRMLVHKkrMMaJbFP5mRv8nD5xtLak",
  "key25": "3EkoawjMF7a52XjhJCtLbCLBGWsGTRvkx5d67kVRPA3J8K393pTHibWepr3x8Wc8RHMWamvkQ1wwue3Gom4QFbzu",
  "key26": "2QYeTFMszNUL6qyDwTYpz7HmfFJZyf4LJjr1ibfDzCj689Kt5iMc2D1xugJFn5reUCYhpx1qaYf5q4M4aA7vZ3ms",
  "key27": "3h8G7G3tWx7fqRTpfxSdkunMX8SfnmBSX1sCCp3h9zfV3GQSK4dHAenCcJFnSrZC59GUXkNZVFYv7t3ZmnFTEFGt",
  "key28": "Q1xExt17GDBbB8vjdsaMcnXn3fSWLXbtY7CHDAMYbwPk4FMvGCLco4sCcWrxC2dTpZkM264EB55PyL83EZCFY5K",
  "key29": "48XPPugU5ytJd6mKq35v8wXTbSQw77Gg9FpnXMUq59T4juChu1Q3wxbC7NtxBW7AbMRHQmDH1RnePE3XQbGMqF4v",
  "key30": "4C8c3LWzXFpRoZUbs8w1wwm9Y3DsfYTNYj9HayNdxwrfLydw4MakqKZ5pA61hxyN2ZtgV9fBM97ryZL4FPdDpFKT",
  "key31": "2xJ98c8QhdbDy3UisCtPgdn9pZoD2o8FCY4JhcxrtCcvycjhDLHDnHpgE67hSegHXKBzWkBaDv2T5LBA5iCK5tw9",
  "key32": "3yudshoSi64w7kQ6CJZPnZJX4PKegvXUtSps3xb9HoST2XMDiR6hLxvYXdpMYyBUWuXaZ3a3G3DXAZDnwih8CDzH",
  "key33": "2KnwhGhHsycNoozCD8zzHFRsYX6tTSjoDsoujn4nARFavXmsc3heWm3E1b8dNLCv5eMiffW89dzqKfG8jcC8SMhP",
  "key34": "3Xkn1fJ6zQrwuqgazs7LdirGpmaeU5KBqEVSGXNRsHduB8XKkEqhXbpKNaRSBopKU32BXXUTYg1bnAtJdaEr6gQT",
  "key35": "3mtuKdpFQhtN8MKxiEGDi331eiDq4HB11dPSriSLA6hcbq1bPrgd5uHLu481L5vEiBTt29L56LGp1pv5QCgvLW1F",
  "key36": "3i4yt3eZd145nJ64JivdgfS7R5L4UwHSUtUe5k4iHA5FCGJshwqxx6unWQFKeoo8uTuc1pdG5d5HwseLEZaNd75x",
  "key37": "3xFUTuqSJ48xETaWJonAQT341E9Xz1VcdxGmZzJaDcgYXbAVnowfUASjwMiSg76396Xwf7ap6D4dtKfASo9byjQw"
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
