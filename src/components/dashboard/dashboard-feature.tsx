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
    "SiQ7qEzK1gwXAt1oBG4idA5RbHqJXAqHVQ3LU3t5XJCFJAvcHN5s1gCXAatsxdmsX5mMBdhb2aqdrPwqsrUCSdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zbzLnsijtdt2ZmCX82Z6UVxh8yCY46SeiwSQNEL6SKLrAj4mG3Cxi39XoLqBFeVesnLQCFkksRoujGuyWAPbMvr",
  "key1": "4fZYwJkspKkpSjv1nVRKcDD8hLpXKC7Yuq528MyiTn9k8YZ9LeS6iFCnbBBEhwfTLHamvWxJSMop3GL5DEEqfFD6",
  "key2": "4sNYEEFoD1PG3CvKKrf1NcJwhNntmLVSKTzKiG4VB1bjcdceUKdARSQYJ59Zw6BLdGW4NpFqe3z2TmxCXLLce4Er",
  "key3": "5y5NpJzBRqEDDCdc8rnhEYBrooRnj9ghLxkXce9MMXbveL6aEKDW2GCYZaK73iSfswQHbfc7XATP6cmn1sXpaVg",
  "key4": "4dogDfBfnwNmLKKzWDFMRQTRJUZYNpTJDSAYsu9BQSXKcum1STDwAWdEnGxFgH5QGVrYcR1Dd8dYF5g6n3kzg98o",
  "key5": "6gFjiiRCoU8TaCjdHdarCKoHe8AEXxNV54ubd6bjwvownN2u12jrvYuDceoKa8jEVN2iZtTBXwFRJ8v6aASXBse",
  "key6": "5NHLcgxCeCriLTf3TBfmLpUKdj7FaZw1S3cmTC8kvb59esJugr1GoLVn8Lv5911VUeY4Kpj3PeGRaP84S37kdDNk",
  "key7": "4kkbT5gkgTCM6YcTB5soEdEZbKvVrG3uQTyYLaQsq3Ub1noXd8gmyCUKKwADZDBg7r8xEkNuQqSSPZQfTdJCE3bs",
  "key8": "9nP2ZZVbboKM5fphjKKKu7kSMYkGGdCnc8S2JyttZky9zzHEuQoq7jy8npocE2rG2XucezzPvcVnZZTFmeTSCPE",
  "key9": "5xPkVyMQrGX3CHPiW1Wwx5Cv58RNCqwRAGRXAPcZpa7vy4x5rYf5SyiWELq1EyyyyEBkTXhhUkYnDZtSFgcLyL5G",
  "key10": "5pQBrFQ8krpow3SqeDxDCxaNpwTTgvcXPMPvju8UwCFf2sgjGyVy52umiiX64Wj1DkZwHB7oESWdT2m6Peim1mbS",
  "key11": "4j1XdZ44FLtomiFPHWmohJhfJ3Ehff5EcafCX36Qr4w92DKjg6QiWsvDoGdxxbBsMoPLDi2vy5f5WbhYFqLQvUV2",
  "key12": "4WtBMk7NA7GJ5fuMSJYq13gJacgHJ3YeLwp9aB31op7mad9TukQYMUWjrssrSoofrDSLp3i9syVTGiCkyLuDtBd4",
  "key13": "4dS7GxJEaFuzgF77NiDRVvmks2f3XFd7gXri3UfVJHJhHBXbykcpvT7PyhaKhicZetYgu88Xfit1rFG5w6sNkUqJ",
  "key14": "3XDppzdixJpGFyjTUEHejbntCT8mNrHG8E9WHtXPguV9VR7n2FNmxTEnMi5em9wdLy2Aa1B6Lkeaeam8Z5uRZi8V",
  "key15": "37PxzHmAe3QsP78ErqvQZkfdQQoVVzZHvw3EHLBq7oiNtGioFH8qffi9aznRndUbhfDXQgCzUPYcoYHyaVtmsCSh",
  "key16": "6js4L5bAT5qU7EuDPpq1h2r7gR3JDfZTm7BrEtccoNsyq5znwRrZLfBTn84BLUaxEZM9SD6WXvo45xZEeSptvuL",
  "key17": "56G3ki4CY4LgFUv6XFU3EHSsYMsxo7bHsSuBgqQgnBNCvCbHZrLb2bvKbUkWXEsx2jWBHaWYHk9D4x89CV59ExyN",
  "key18": "4rkjdMZQER5ZjP2VFnNkp8UmGeXbyGm49YrkSK31W3gG2soTuWV18GTM7GtRrPGUki9URsbw3rTG1TZKbRuiHHW2",
  "key19": "4o9ecoJgLgFb58BgJDVgvrBYTqZM27fTD4KZg8B7CXwRs9tN28gTHUvSWDvji3B4AftVuhv348ALmx5cRU23BhwQ",
  "key20": "2Snu3L9Kk1R2LxHCYUduQCoNpVEZbYaL4S7sh1n51GGTSWNXXdmspK6QBgPd5ZpxL2biKmiN35yp3PaLUR9g55vy",
  "key21": "q8pXFH4EYUZPtHicjeqXpu6JCKeZs3oh57YYvRabT1XYxgXyhkaK1E5wVU7D7jZiUM71AHgoyGKCmqeypuoehtv",
  "key22": "2uCXjpPGhkeQDS9H6jYHy1KcbdTuvKn6GgDNNJH6JQRHokP7QbARp2Tc5MwWuinHmb2pmUqNDDhybi5MhmxGJLkt",
  "key23": "2NjiCxtGSZT2jTo7Xmb2HyjWf1PZXqBT7CL6z6afQtRYJ45w53jc6ZPy9XyajSXUMUYLzEuGq9FxjLQUeqy6PsRg",
  "key24": "36WbKY2cMec3K64B4F3XsxX6HUrSka4JhAwRz5xS6aiLr73QVatE8ouNWmZDoLVBZ9y7xmHtFrAqDs4oAiLqe6Vh",
  "key25": "39ftcXAcXPNsdLb3jESVcDuB9faKFZd5nvChTZXXwM4A7TeAE9ftLyMvjPmYwydSxW7R1fXfvujJ4w29mnaNeZYk",
  "key26": "HfA3waQTckyTRsrPGjMm1LW3yRN2td3CAPekfEGN18zqxvPLiRnETGWRZXJYmcUebojJ7yN8LUv6YViz33jDRpT",
  "key27": "2PrL4pgZ4b1KFYXNUjK8FcaWMhenkjYB9iHsGbGDZ6jvAaswMpxxDETCTcqTXMNb4JneKeGd6DSKMKXp8EEVUXpH",
  "key28": "4EMi2D2ymjoAMQxsDGjmZa8LyVktqZGFPiQ2hxwiHjm11FrAEKtB5nfpyhVxMNvbh9YHbDNytd811G6tN6dgQT5t",
  "key29": "2mSSDMgwNP3gg56VTko74uKxjZrD8gc822rFDiccwDfHKGAwGdNDXt6tyuJK1nMuivZauihG9TFupRhQoJDBzQV2",
  "key30": "2SaL4qjrj4NdgzUiERHcn9TF7w2fZN43GbsQYcfWrSmgML5LM37ZpfG1aw4mVF2VhkgvbhFBi6VtMPWCBcdLpmeq",
  "key31": "dttshuvXJBrcPELvKsFD1Jmf7Yw65Be7uXWBaGzuFzEdZKd7e6tVQEappKx6pHiEFZTsNrcsznyH1bSRgwewaQg",
  "key32": "4zA8qCrTv39cV7Pw2HKNS4CDWPHwfLYrKY24XmZz596jVD2mX8tyDY3kHXyvHUzj7sidsVWGiBM17gTMswMfgyed"
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
