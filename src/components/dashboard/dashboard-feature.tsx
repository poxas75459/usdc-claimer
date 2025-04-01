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
    "35nbxDAqWzHZSzcXTy1qzYfxn1bo4SMCvELrsUfhgtX3ud8uwLKg1uujHrEsm8PzkC7GC5xYc3CZz593KXfDdWHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iY6V7So1SHton9BVMnP5w9z4vhbTY82yz6LfrtmrKNzgXA7FcUVGvsZzYJapGS2YrSBBkzRs6suK7y5zDPem24Z",
  "key1": "5JrUg6iWe2S13jt9iu1yJFS23ma1Cae8YM4ddrZEjFKCY3L8GppnUQ7a1XnkyZ4FDZ3gRrLz22R5BL24zK4u54jt",
  "key2": "rU9dR6xjEdDsJNY3yEwEVRikotxhK4Rx2wy31B9odQkcpHzpybYLYG5BEi35m9gkXvraKMWjNtSY8MqVBjhzHaN",
  "key3": "5Nf1SmRvA8FcUQYcrSDcdGnxtdzVV69wzKMtfYVHsozLAhZZU6qkNFVJAyGR76MEeRZqRvSvLpAgH9Xo2wmhCkSZ",
  "key4": "J7gizJFpJPNUnkeYqYj3x75sGpUkoRnN5TGx3i3oquoTG1KnCfiSJ4cnJZzuCMNApikx2U9nSa3Ldaa2j4RpWfb",
  "key5": "VBswnxeXuAcxKmHbWL3DWxnTBmdQz4g2hasaiYbQ3p15FFhRmD9bBuw5vie3dxaKL4Lx4mTpLLzhKE9DSsBcGRr",
  "key6": "3kE1a7wNbi2DogXWE9RWZmygH14VMb5SV4P5neKeEFTaxkjJpZLTdfBMfSUU1YAUhdtqdgRiXrottbWMJpHB2V12",
  "key7": "4oMvkRy37p1UEtbmKNgDt83VbHmx8sJzQGQ5YBAjXuqkwKv3pccGCtFBeHqgTRKVgQT7znphA4c5nHNVWEkSLEMZ",
  "key8": "5x88AsEXC8iYs6FWbex5JqpZULpJLszEsUoiWVuZuJ2PHzXArVWnHREdvfkWpZbcAbX8uM72hKQAXNZ48rr9ar7u",
  "key9": "mqixoX9jEMZ82JufeassTVZrBfHxTrp6tiv9bHDd4Hf1jh2BYGgz69of9bw2o7QWx9didsCBX5WFdZErGumADfj",
  "key10": "45drSayV2PSinxduGF7ZCPnqVzfsEExKyqTV3Kp4e7MRBpEYPUdpjruP1LY28wGiKBiaR6961Cy65T5XcJ4Vu2Do",
  "key11": "5BhvmPgTDrgW87TxWvs48QeNs4Y2WTM3n8R5jDjouB7srsanhkJdEFs1fHKcL7btzf2LJ1H9r9ru6VgjvUfwNEVF",
  "key12": "4FyRdCDkT4LgjbC4M4c7HwYAc1jUfXYtCqZ7AAoPi1ZR7uDi4fRkhRGn2JopQs2PzxJEHD89pMMuMkBzqcC9HY6u",
  "key13": "4yPnA21GnUi7nzotPv4wr7uiM4WxXxCFAAr9WEVyrzDKVuFfTr3zHH7DbkrDA6EPkBvwGywCr7TPyNrpekbJAj1K",
  "key14": "DtgMKH9BfRXWDJbE35iKSTGkbtTck6YREjhEdEeFtHtC3RiQLqQGxwagwc3wy4KRtXyvfcFygMunCJWG4ruvNXE",
  "key15": "CFCgx9WCYiqDezCBzr3ebte2cB7km4cMKZh8buRdPq73mQyt88JERukoifEND49zgnt4wAa1YRg92LrvS2X7LDw",
  "key16": "5X1uVmtpfsUFdydjTuwPB82F7wMk7YwBUYcvsVoQ2zcTdsiWThejBsf56mEcxJzS1tD7LSDQSm95zspbXXmAVsEW",
  "key17": "8scJazUyhW5BEyAExmHUxyzNdtgMzbbbhRwMUKiyzoeGQGHMcH2Cby3QD7t3ZeSp3hRj7SzRRMF1u5SYV4P7L6P",
  "key18": "5wt5USZqoGpitZohtPym2mBaKob2gV8eofUiMW2jpsgHktersYEHP88ShoMyM1zugLMP44FWVHXe6Xiq63o1w2qX",
  "key19": "3yzkL8ismf7RJ5cpqnijVFF9CUkhcZYFz1CCT4PzXgWsiAKPZtQaWS26kNLu1USMHMBebC3hWFTrU3n6NRvcz97X",
  "key20": "2YnL3mj8TsHFuEvDu6GuB57dFkNuMfXzuxU4mJS4GU8LPesZQzm1t3UwvKeBB7nXtaKhTycvqdDxDoDdbL9bEYqu",
  "key21": "4jnccAAvkzFWQmKcegggHpmawSFwx2UyiFmqfga1ysNRbZ1ekEDhEZcqztexYYJm1n21WkEuhFrWhqtmhmxTrPzA",
  "key22": "3NDLCJVpGwXu4RTMeFLEEkmVJbutyKR5zJUCPq96Kw1pNd3JdEquDvfigfP4D2F5KSEQyHLmSWdR7uuf92Bz8V76",
  "key23": "deZWeQfE9yp82exu4S77yt3Jyk3vwGizVQGM3GpZ93QMQV5JpMvHkokxbXYhM5pCgb9V3NfCdjRzEt3Jw5W7ggt",
  "key24": "3UrsCCFeGAWYXtBGEHYUeMLETbmogqNqJ2PW6zxcgGDvbNESUzC1TaDzLbosBKpHNaEA61gf5cDu4vpHyWGPrn7t",
  "key25": "4QuiQmhnsg3ahLKF5wzdjjF8Shuo2AVpLYLa5ZMJAmBF99vLdm58v5Fhp5gd9j1Jx4vRjrMvKG7RqVFgoMTUWvCT",
  "key26": "U4Rwm1qyNkvL6wNJyH53qfEjzfUT2gT7yA4MX5qRZ5cjTu5ynRBKBwXDhB2CTurBCxiLxTXqyjDLXMTXQghmQKA",
  "key27": "9t53B84wd1VkptinKNV676ZqPGqfRSyjU2rwiNAwniVzSvLKU2WSwjWFhFyWC9RAe7RsNQyxC8vFRPmShXAr5f4",
  "key28": "22jTtkQ4Xi49RbkPBYvN67nzjM7EcKtTMwXWdKnPt93QhtHouN4B1975ZJ4MLRsrptAJ1yjQgCFHdqWC4zxbmosC",
  "key29": "h6vVshr7HMWgAakBcDSb7UeenkY3v691xXyLdPrd9EbvY1VBwmdgqBv9k4A3x7wonRGpGZCkKhzcRisNfx4Auwv",
  "key30": "MCzWTD7i7Ef4k8U1PnZBTUdnRtvhrhf957eSCwWTKTchLSsA2WrMWymsPghLV9YPvzGPS35BVFSb7QC78zUTGMW",
  "key31": "TygwwdTuzLrbzg2XrmvXHfGjrXuzzo9yLCrAd79zjFqh51kFTKts458ozCn2Qntf9eMFf5HNNXuFL5oJWB34NNC"
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
