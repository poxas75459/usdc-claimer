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
    "5RWp2gWQJVghaR53GPAiJixgv7DAyct12cwP1m1Zhk4bqkam433NjgUyAiqEP6wVSeexkEYpPQ4fR318kLhS689A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qxmrd9knruypLhdcmmMA7ohUmz57HZ9s1eDMdfwK3yXtmPPh44GzuqvQP8NReTn4BpNSVuSxFFoqskYS9R27DHC",
  "key1": "ZxhdLbqGLo3mGUYTnKce1AB9L7gmFzb3TMk3CkhBf2wvE43eRNQRLhqMmScxBcq3p5q95BWGkDKctTXW4B5ohhz",
  "key2": "2UaMv6r4XN9Y42RnCVzTFjtf7J1EVcRyR6coNZTYYET2DiqhwfaEwicMDYcBe3zyChNyhJyrBNFshg6T8kznmkfA",
  "key3": "3YLD2NqT1asSGN7TydSs7L1KaYLjHsAVobFeWorxojoosX3pYHjthdtAq1nz2KBeWUw3CCpWmk1sjikwRf2y7xKQ",
  "key4": "3yiaYuV5VXvnze59Gu76MhxWJ6RWDd1cMzctQ14CEgYr7ZLoCKTRga63558RoUQyMgpF3iyLwf1CRkrZUxH5PdWs",
  "key5": "67qAYeKJDpUFbE1CRfv8hGDdtw1imaXqQf4AYETQnESyV7PZbiV3oeUVZHzRyArU4uZQyumF6pTdsjgmgq8gHaY9",
  "key6": "2Wd5t5MpmRUPGxtwiyF6Yzny4MofVkYUd1FHmjYmsxHpMshe38i2H7HfBzxNUh1wJ81uge5DTYyQ5M4Eo4LpvzXc",
  "key7": "3qAsxZTHdgamXvYBADFEZQP74iCEjZLSBF3ePuz9e5oLC6tFAMbLJbktuXRBDMbyXZKAXms2mHoDpqPAhXWmWBPW",
  "key8": "Jm2b37QGzC2FzmjaBqUVifF5EMS71i96qF3te8fyWu1dSSFsu9fr8L61LeNrBcKgX4DpQmiyizDyTiZKUAg6q5o",
  "key9": "3JiYGWtdzABkWg2Et3sd7fRu9khr8sjiJW5xRWvrJ4Qt1U6jpXLuVxomPqVmGaAGiAHyTwSAqSDrsxxJLezPa6rF",
  "key10": "2tEsQ2G8gg9i9awWLnS3hPP2D8QXC4zQ73r4ksfgoy7mMkccytnSkY3DS9GiGaqvcHDpDd9EzjeuWEWX42eMGBmx",
  "key11": "3crQEePjusc9fyBaJr58tQwPx33DPM2NL3TkmEjJaNDU7zmwi3aWoDNkDUsbaR86s9caCwokymx3rDRbxz4pPEE5",
  "key12": "2gmwWbQZK3Ru1k4vZhartjtWZtK23U68sqGnee3x5X9vLzhZXfsJcN2Yj7G4Sb4JdwxxsxcmCth3gmyA4ziEt7Fp",
  "key13": "SjumuBCQUhMPPYtRzb17k1xP3LaY6UMNZmsgiCcDqnmnzffeKw7hJb5cW76fh4zdWAYJgGtM4jXXVBucGvUJD4B",
  "key14": "2gddycVfXmg4eprDzGwbkkvA9SBSqB2pcnujcEFtNVyfEHwpz96iAcC7qbAChvQ2tpp1jBozV2U3RfgKg54zEgHP",
  "key15": "4AyZ6V4uMYC1nbHQx6L7hwGzAGyTyyJM7yHsQ6iEYE64a2hvK1Czv928r5eK9eajGKgv9WUv2QexPukChUhvbsNG",
  "key16": "2dq8Xp9G7g2P3U291G2uGX4b8xTvDgSttTZ1iHr2PogUZcqvuWguQ3sJDJNaCbAvGwU4uzETB11SscHb8848GEVT",
  "key17": "rxdnYTxvLQaPqA8teRveZgXcKKZHWJ3bxw1DW2AXc5TUouy57LNCx1HGebcbT2BucYpGRPwEeu3urCZzEZxx7Gb",
  "key18": "46HJsjtLCDNpicgHhBHYAdQjK6JSyMBowK7MNAJ7DN4Rvf5aMjAapZHZdvZ4DSvx4kDRJeP4TwxSVy1j1ALySSXp",
  "key19": "3d9Bs2vpJpFidVkNZiFY4T9jeKcBPRfYTx1ifoQE1TAuWJ9Kmnxz1f9a6sTkWaLQmg3oQJCqi4PPrbfrWh1n3JYc",
  "key20": "UpjwPsHw9eXZT7M1XBoqPzFFFWqnkfMoHWsvw8frBUSUqY8fVcBt7w7UdyNC3ckXzHvffSCdNE5ejtW8sSE4QFg",
  "key21": "5wzNkX6pXvnXA6a7ASJHQJk5QvrYsRYJbXLkiDtKSZn5WJF6QvX2RgHVTFdAoYhb46bgZyG2hJwL1QpnTejtvRag",
  "key22": "5qRPdgpXoRQZgQ1o9QwKTE3bbr5ZVDEovbS2SJ2B4Rv8JetkP4UbnrdjVm6PLjUqxx2DfLhyVThZwVr38kV1XKwu",
  "key23": "2YjMx6f2PtmUQt3bv1umMLp8mTWbJxRcq3tgDVvCNzsHgBVbpXN1YxeJRJWvAnceLrCnKqbE8ejfnCbsXQmo8fFG",
  "key24": "5GQ3RRGg4qXVG5jLrJZ4m5JfyT39yFJxCKsQbUaTYiBurBwZav1aFfEWztDzaW7hKmCzf4Bx5SKpD6sA39YkeH31",
  "key25": "2J7KJrzvikfLVcdosx5S5ug3ssfMxwRQ17dox8ESCvg82vgpeLwRLbf9v9ndWWCEW57dJHL9uQbySdcZ2g3LGgep",
  "key26": "3qzHZfCw6AF4xSfzZQ4anHNFrUM7mNg4G9dWtYec3isx2YQZDA8KPZAaWtS9T6v8jQcQn6RH7txVRjtegNNY2EPB",
  "key27": "3fPNi84zTBjoe5oRmu8h4umaKZdogyxxaNfNEeL94jBykUmdYp92UfhqJdzJBKvBJdbMTmxtFkDPdgCqHC3XHJsT",
  "key28": "59RjFpYcDVqCBhBmxn7NaLj1Sj4Mgr7wKphCBJiidQfjCopNDNRTU3jGpZaksYycwiDpmgHof9D4hyD1GvrexMwU"
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
