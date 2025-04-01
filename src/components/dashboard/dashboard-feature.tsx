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
    "5qzvcQdNSrX4odwGSCK1jJJAupr3qxnqKfPoKeV1hPRMMSpEZ9Q4xMXft9i3iDd4UUQyeB1e2jxqNJoK59Ypcq4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W7Qx482f5TAKuvUvrgAKSBMCq73MnoMANebS7NLAWcns9pAnyd2hyTfMXFxXvMykqHauY4bzSRrUao36gF4wifb",
  "key1": "4k36UbL2KAAYBxAMr1qUj1caJPNaZHLEBnFv6vZrM4f6PEfaAcchJVa6j2LRmdquKZoFRiogLpTBSPUpXHb7Bgsx",
  "key2": "5fKJjFMEZMFJoEbZQ8uAAd5JkUQppwXfHC4kRboxaWFbQCTfQivvTkzUJCSAKSScdu3nrLRVumSjP5tarXaQmZcA",
  "key3": "AL21BFX5a11U2vEATyputL81uJ8q7iaPuM7Ckcvk8Nubeu5352angx7MGtBfjtQyJRcP8rMujMkgCEHJhVVvJmW",
  "key4": "47ua1yQ6KGGPcqTCw52ja1rdHD2T7NcLNepXSMP8NTTuLaifrwJ9keQZquDNgo9BHKH8ZZDKtdDCuYdHrqjEK18J",
  "key5": "DJaF9e337CmqnQTqgQjqEwwVU4mqLhwRYyGtprHNpJdmRbGYPt2GeUDEGt1PaKAnCwJDfygNAqvQ43kRJcPqg1u",
  "key6": "5pH1ZEN7QG8CXxTJYkGGqysBXRgbS61Fr2uz4FoJqeqTPVq49mJkoDswiaqayPwmwCryfExfZ8XeK7HxkZ7ixHPp",
  "key7": "2uaHGupQMpfRWgo6c6vizzMYQ8wLCWgXgfLwYmjpk9tT2AY6VY5FAYc6jvwmfEcHL1a9paqZAfG7ZbdxEhS6yj3L",
  "key8": "LzcvKmEBKEtSMidMZg6mWfiiKeQUb2PFgbadhqV4WW7Pkn7S31hv4S7h3rkHMyGb5AqmU8M3zRcCP3hFbrvoMgn",
  "key9": "5xxuWqx9jnDgrr3Mk5119gfyNFcyEVbbe8Q92pTJN2tvUH2qzdis1BVizYZb9r2rh3hBySiEVkCqv3kHKZhLVHB1",
  "key10": "3GkpRMhX2boQZpG16ZHapQjZh2PJ6jjJy7C8LN3Pp3SBJXbLdX5brKLbhMq8Ks8HBDbabMockuJu6RT34s3bKNd",
  "key11": "zH9SXYEp1TENV7WhCW4FUB5Z3h9Dfd3rEEt1Yg3Uy6u6nekGtcqBk8xcm3SfPNT1n5V7hsbts5VANrc6atEdkVS",
  "key12": "4EEpoNYkNBGo7twY41P167mCstdQpxYUxEexZZZhnT5csMfZCjsYTr5qoNpu2cVgx72KxK8o5saXSEdFekUNrH1s",
  "key13": "xuAiTZdRyMVRwfVm1tURv5KeKLT3MWsLn2h1K44mTxUMvwq4xETyocug3JdzQTcnya3CkUUT4XBsNC9cjipqMPJ",
  "key14": "5GjiN378rHEQTLTAibMhUm9mEkrLeeRyWrqqbhruZqJnzPZqArCe66amksbtYXzr39fqyjUGZVCDVrYZzHD9tevM",
  "key15": "2a2sDh5bAcH4F6vTwrAotNp34nCNW63UytHid3eQb41EQcWLzTkxgDT1wR89rijR81xNrf6srBL4MJGo5nh3GTzZ",
  "key16": "41NPsDE6H8bHi2XUEJaKNu9dyr2NUE6eaxukVvQz5qAu3kTp43RDD8VjVKGRisEGyCCfMNoH1U2hsRTCTR8wtHfg",
  "key17": "5RXpAWbnvdzdiuBuEraJAeUq1qv9Mbd9iXHfSavzbLQcLW7Qu1K1pKWPQKSoEfoDR34qrQa2rvXjbKF6NzA2Da8p",
  "key18": "5EFkNJTELJdh8UHZAvaaZ49JenbcezXJa32c61WSb5DXVtLa8Hx8BoHNuqPvdXfUTDjbz9RqZKScR2kBc3egmpmA",
  "key19": "2Y9PHxTP2P6pyCDPc7yq2hWqLPrc7tdarC8TC3HnAP4oKwrWF8j7rSJV4KLR3zrK5CjELY5hGRQtcroo9mU477Dd",
  "key20": "2fiptTRHtp5SGP2czcoeNV9zEBGscjwfGnQi7RP9iymd5XXEESTwoJhwTUEUb8gew3ds9Ce2mMujUMxaT8zhxiqr",
  "key21": "39C9nVAGPjbCRFenfCtJwaX5e3XNRVjEeCjCS1mNJ8G386oNyuwcYr2eWrm1EPXRJUXmvQiF8mh8tQCVLLSFRgKE",
  "key22": "3CzBwvB3ZjBux6QF87x1xujM7en6KEbi15Dvn6n8Qf5EKr7fiEkwjFaitx9nmbnPiTpyzP847G4wbVrd4XeBgvzr",
  "key23": "frahMdXBYFW1vbNSWXLNtNSUBCezZfa5uuizi4asxruY7Z9d64m1hAHMvNaGQPot9LqqhdCGwWoGFAYs2jypJPf",
  "key24": "4yXK4uJWumMphToo5cSJDbz1pd1HdNNBoc6goajTQW9WxJVVMwSJ35o5VZc2v2AcQQ1izppZUryuHN9oC1ftixDC",
  "key25": "2JUaHyLXRxpCLPps7xxaXHMhMiFyaByYzSYa7Bkz9o7a2bqXuWvVQ7u9kmZ9cAd8qGwRwQzHSS1UqkkUs7jSZwGn",
  "key26": "SPc39uhjZrNFD2xtDrjfn7smpmCusqRP4pA6QJMzrniCwk2AifiV9ACu5didCyqRdPEJne3Zs2sYknqm2BmuW7b",
  "key27": "VPjJ4qiMt51s2xzg47wVBsV4JWJ7ymL2nJfLzKeyrdiWwKdvTbYCQdR3QnADX8Pu3uQxBo5ZMseUmoRWEq7H1AV",
  "key28": "3sNp1CJPGkprXc5JPdERY6FQ1b4g6kgZZS3tjaRB93KwPvwecnJsDsQD7GbscbFwCxHtho21jvrDLtTxKzkj46Mk",
  "key29": "DDMb98yrWCQz3KcApMJZgEcTcRgZzcTGWsvRQpc4HAweCX3vdWEDoELj2UfvQks4HspWyJsZEtRbYfU8ZgFq7Jx",
  "key30": "4apwW8AC7t8tFWXxjGN2QdR7VP8A8noFfVwUFitY6ugZqpc8BZB3VwYrULVJ8bsZ7HDceDwYEZtNxCGUKD3L1j9J",
  "key31": "9fj8hk64mYhtQgzZVi9icDounczybaAUwkJjCEwHfKoWKwZNFgyJGRuuL8gzAcrwekFaAQNxT3o2vKZ2gLx5g5y",
  "key32": "2Nfe2omUXWQNvoPzAr9ALDMooVZ6h4h3sxj84fbBk6rz9a5PqW2erag6gug9dGYRZiW7U96D8TYxmmGrhB9qwZXK",
  "key33": "5Z92jb1ZH1mEWjxC8NhN6V5BrxAHvP5QZJ4LdsRiPmE5H17UwAjbWRT37hA8ChJ4tqEbHecVzJP3V2yUfsGpX1WT",
  "key34": "3G5veFF8AFFBy8R7cVGJGdsqv8w1f7jSRkCXfaPcKx3B2yyU9jGXwvX6n5o3w5tzPEd8gRzmsu4bDpbvAQZA5pfV",
  "key35": "3rN8ZME5AC38sN1fBR1kMUkmnfS1WPTemz2CgAN4WqqVyJiFTbAjCt7P6qDXqi1L42EV18xYMdfaBFbaF2fBkNn2",
  "key36": "5X5jFyTcSAK8mqMMjzisx1GuoHnckAJi31j6UDxFf2JQLgCKKzTshSVEa1seKuRbyc7DwjMFXExVeHf6DBJnHXLp"
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
