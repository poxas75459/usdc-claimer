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
    "46eWwEpos5RRjZXuBi7e3BSE1BcXwX4G6zbiQNASyKgTBKExWGWtsgq4zbNVFCLDt8VCJVqPKWiZJBszBFdHZHwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J8HGYsuvMDfVcs3TBrej6nA9hBKvWTcoX8W15DKWq4rTzLyeEoDYy7PLPRbctcx4gXArdHCEYrhqsiRDXhGYe2P",
  "key1": "2dVKvoocxt3Sj7b74pywyAZm5vPW3w6vJHrSgwQ5og3ZcRAhgwELw7BKKLBBrdS8Tk5G6G5c8PJ8HtLbSuPciMnC",
  "key2": "62fLUWubjGop1sM9ryC1wmqVFfdMvybEPHAtquiJqU79gZuEisb7hkGF89FZdngz6FosgY2JkFbaNBjociu6KGxq",
  "key3": "CKUaFLGgocqzpo1vc8vhiqAMQ5UtSmSRHEU4veXDr1mMQfHo14HqsQeoR2S8ZKaSEQ1JEMrQzrr983EhhQuhfek",
  "key4": "j8aturs8opoj4D1y4evgLiFWYPc2EfVq5rt9kpaHVxUHTMbtQ2AxS62cKH1z8eXvvkX8ifR9fftMH7FQ5QoURFB",
  "key5": "8hQpQWtNFcLPNocVgTaBacgqNQUrFUtsDFNH16yNWUx3oetCJzNydcM3bFa4178QAh7LA77iQobKqgrn54rtPmG",
  "key6": "4cgVH4X1HHTQhYYL8uDz4TvHC7LnjSeTbqnM8g1qWqXBNMkiCPEjhKNRHAtYrAJ8YdVrWtnEfGK35JFDYqPj54rF",
  "key7": "ZQRYaZxKKHWUGFbVdyhUKfsmGys9JkWGwU7HZdycmPCiHK43ZTDaeV98Jpvktmj8mzHpQYSrE1Pjv3gGRRMddae",
  "key8": "4kUyTUsYXAbeuoQ8auvdot17B5m7aWuK2GQYghNt33ckf9zjkPydzv4RgCaStnP21FdyHxPU4SpysVbDbG1gJokw",
  "key9": "mR8BGgBWDLN5mUv22YX1Egcw7cdjE5P7tc4aXWaDK1Da22ynLHWbivanb868bdNPnYXiRpn4hnj8iF3taMqhWPg",
  "key10": "5EaN18RKbQfS62KqtYXW9jKorMNgY6mVAdKaPAJBv3nwdX9rX8DNvUtwMJDaHanmNoxjqhF1VW8xVRSmmFd7tQoB",
  "key11": "j8zBjFtJKA1KfZmuCkdoS2dMxpLCLD7tbBZio12tZk3jc4t6odZnX1bfNGuCNLtvYTkE3MBAXMTzWAjo1tutt6x",
  "key12": "5LNHCXSyKEoxotQU8vhQ8FJYXGotuvoSMgoMGvD49aYQ1gob48tQqpbzwefABxw4pfecRxNFqzgQUG5mmLdNwD6v",
  "key13": "3RniiVSnugWRkndBf1KTrcroYe9KgNo3uRniqkD53hqtwJuNgc27hDTocSczK1hhDdsxkPcmjc5B99hekLLkpz12",
  "key14": "wk2SB43RQRhmqby49LMd1UD3yEr161hbB4hXUJcvY9EEo83Nenx6AhvNMfzA7xqC3i9mFzhFqyFGJLn5AXNWpp5",
  "key15": "32VWrDjpTdw75hqricFTUikb392QtPotNSVd8mQnM8P3ynuYq82buQH9XKxc2UsuNc2iMFqwtAWxx5STozYiAiQq",
  "key16": "BAYEZcLYPpwQiua4xwf2J45E7SxUXyQkWcSQwSy5Qo57pgV1LaHpYZiPVkqGKDQFA53rw6dbSTu7mAJ7r7WspR8",
  "key17": "aorWi1xouEcNRRv1FQ6wUgLNjrbnXSWRsvsrXHQe1pGV1AqLrpYpaLJuNeYZRLp7QYuxAdWzg75g9LKjQqBMATv",
  "key18": "4WNbRnzfsaV9hybkWXF4ocB1xqsSi8xajpqDYALv9huuUZdjXBzQejEo3DZ3b6d3uCSYrYmsrHnAW4dEigCYJtUr",
  "key19": "21rnztbm7mSmmR3r1MzfKSnEnFSqt3j4VYdRhAZyN7frJdW5cXW83BgZU91tvuYzKXGTXR8MHmCLXo7giWpppuS1",
  "key20": "2JHspXZq5mRGZZeJJHyu4dAmxtD2XJytWC3LQhHKPuEZZMsCkGU8iwSTUXTSyGU5j1K9S8t8ep26qn7BWiv4xnTW",
  "key21": "3s3dXY5yAQTXmfQocByv3LbX3tdzfBUSbcUSH1FawqRJ7K4FLUVqAsVywjVByieiK1KVrnom4wTCbsZVJhb4uMe",
  "key22": "5eYtBht7Ui2VV8adyBvWUBjrweUjcfoBspsKovDFpr3mpt3ZfFL52PT8LZFJ6L1wSJeZehbSrkj9QGgH6KsVxsw8",
  "key23": "4cLspzVX6kxFgT4P8P5jVwVXFNrZ61VSiQ6FdBSw5npweWA6PpDx34VnsSYmRKoa9ewp5V5eGjga1JhS8M7N4obw",
  "key24": "5i7jaCfbqV2zFCMDCvJnBSsM2EKq25ksrnEpyUXpqMR3SKupegtnE5fNrF87gbty2NBDrm99APGQak3KFdJGSccm",
  "key25": "L2VqezTJbEwqTNrsX8B9yMJUnuLMymdgwcLnZn8gph1Pw5ukB8BgDGMa3c4LsG69hrELX3SrVwwpTQViabbNiif",
  "key26": "kWEVsvYiEXV4R54phh3kEvPMRE3ukNGHwAJtE95qsbfGNuR7AX2MKg7PhcAsFvUTtb8TejVpepnYC1UTbkBiZ7t",
  "key27": "4w8FUBgFcfjhdw3HbqF36Zyd8dFTfcj35LfhtcS73AgbjXtE5tSC8UfPEYSr5Rj1v66PJpwFC7GjQV48BYYVJCsw",
  "key28": "2mZofUxoGYQVh275NCAo8onedaYcsqpUCuuFNrjx7c6RkzpFaf9xa1TukFYKZQtV4hcYf3C4gm6eQtL6bdkkYYYb",
  "key29": "3HBuAuKBUhVobgHTPoydwL1Pu8ogGBZZSwvqjkgKMgU6npMwvcF4BAJnNhDdYXxpigFZVvLNQFwfGvHSdFpS5Nqi",
  "key30": "cr9WtkPvHKGf6Kh127jEE3guS8pFvoEmunZvX4wZ4WWWGiNBfmHT76XihzFiaHsGBupsqxgQxV9FChRJiqErSzR",
  "key31": "5pXZdaRJPoW3c2baAV2ACX1VdD7URppCwH3XpSxfSDFXtNbaNszD1rGT6FSAYF2ybaFnzNHJfmjs27tRURkshzaK",
  "key32": "3Yg1BV2VGuk6mD42mAvFJ7PzoMvogrmdBFzEZGLV7vzwFbuMouKf5X17owJ82M3kZRUCwL59NHhn4xBSTk27iKiF",
  "key33": "5QRy4tdBJt3XCmQV3zYNYgc3BRpgiFgeJGjrstNzZejxU3Dt16JJXfTwHE8jfwqm1Rr9kHyxcogD69EhE1WJkEYm",
  "key34": "qvxigcykQXgvYEhGCkaGPPwpPRaAb3y7coont81KgDqEJn5XszSGqrmSHUumfSCUSMf3e5B4So1dPCbeGhMAZXG",
  "key35": "CD9EajL8QW9LqoX3XkNtFuRYYJ8MgHkWCSNwM5Q23jfnUYq6Svadov7UCm8fWcD2x5z2nPeFzPnBJP96wJJ2nKH",
  "key36": "51rjcTkaKAYCrkcUHNLKpLp6a6tL9cofxyffD5qtNVd1jiBGRygcwBQhfkzX9SyE5Xgr13yxuh71Bo9E1QS7jmFZ",
  "key37": "4GHEX9VywHDbf7kpCT4Mzu8jF9XsMtPKCJ7dtYjGcBryrRRFBjwLLA7ERZhcKYMjnS5uRJrgZBieuepECgqAFodw",
  "key38": "616Y5V6jmCWsemvdDV7NC66p5pJntREz67XMXQiqbGkYwRwGtpxbisucMTrnYEpj3CYMRnKeocoKDzZHJbb8Ytkg",
  "key39": "3CRnHkaAbGEqXtVQWbRKWxT5YA9v3uS3KrUW6qxdDav2PueUabBmFVkdFLZ98JTpSdf4ZGRM9pkfPGKVBBbdVF1n",
  "key40": "4gNiE44beKA3TBuRZQqrarTQsRzhd7UAFDaVASzHVi4LLgzpN6HGR6kKxQyoz6C5EiKvhiWx4azRSUeWmeoK2ENN",
  "key41": "4jWGwZPv2zBAiReLMgLLgCtBs6jXfjqVvh9dAjZBr7yTvpFXRVCUCvCvr24oCEaQiSYpCXbMv1ro85ano2qtgX1k",
  "key42": "2Qx6JUP9rP9BNxWvma5U5YpPsq83jmmizgHpYPZTZS4oHA5XAh8N8oJGAcSXMfAMNu9KpwkibJZ9FcmRBGHgA8qv"
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
