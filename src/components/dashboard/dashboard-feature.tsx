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
    "3JCVFD1VFfWnGWEfKSFpYKDJxLzggjbqwvK5vC57MifHU6gsVo3zXKQsGHcZBdb1Pnp1CLruqZv9N9Vcbz5k57nT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yGoX9P8Jm2AbZtPLKo4hbsi7qC8mi7x2Cq7Tf83FesTb9yN8jc1XwGodKhLMmtbaEGku5pytVShfifurPoKtAZA",
  "key1": "3BQuEjYrNd82zVg7xSJeWQT5p9GxCk9kYXwmjSC3rnEsttYQqA3GeNi1biBGr4g3pwrSwBgYaW2h77eVRQu8NaW1",
  "key2": "5Q8cjiqJerhW9jtuJWNKtkGLoBQNMuuAisfZLN2pUh1oPbCDiKzyp96gwWzQZNhhrBd4emKoeDndTEuDrAfF7B7r",
  "key3": "5dLC1z5T4GQPAyUtXKXn9c8s7ZzUtCY9mDTgJe5gfLJkd4jRfRNEruEFLk5bC5ZNnJdZX7pba5Xxta7WUJy6fZYX",
  "key4": "5i1Kk4WQPgkU2N1LbqQpXg4dNMh34z7A6whnqmA7FmraRSYCBHmeXxjcsBxKeNwZA1H3rQegNbTuqpWiJbTg1U1",
  "key5": "4RHvq6YytvqvAUnWfhNKW1hJoBzhNGME74RUCEit2zy1wxyWvVZEEegmGHWLX9VpFGKZCY9NBkLGpLkci6su5WhY",
  "key6": "4SyxamKPQYtZDPz63QcDNKpGCeYQRTuWDPssaWopujErcVBqCF3QCezzuGuyjEV8dwGYuR11a3UxCWWKThi5p3Jj",
  "key7": "rfD4ZEQaUC8c5AECEb9MDodNiunGa5wgwNcR7nLgWe4deGyY2LCuNsxVAhEFs97H9KSLQPxyXBYgu2sVz6bXHzM",
  "key8": "2g8LBZTsujDduS7ny6q2wVJggfg4eJim87MKGp2MuTDNsWEaBeuDo6T2indRCmVkNNb9Pj3oR9exBP9Fgh2ixcC7",
  "key9": "4sytnhLfuvHyCjTuDdTp2Nhh2or5BUVmx6Li4kpGrixoisz2YNSsXsMHUKM7GE597YdcLwy5gZFzLqL9tuujnSR3",
  "key10": "Bkz4Nxq97GbPfH6aQuLktyVQN2qCn8SxdpSHEoGB5EfXND8sFESwEEF67JiHRqnS2aq8rcnac4McWZWHtABEaT4",
  "key11": "4y66WidyvzYtwpiDuwjmxFezr9UBC25WbPmSpxnVD825W6AracwDcsirbiFSQuYqcyXTU8MDRuYx2N5sdhFVxd8e",
  "key12": "5Xj28SEt3XfbvvoxVgEGdbn9zHy8oLP7S6qPq5qXBk21uwYA48uBVjFmUCe2jLs8FEmpArb88cpQDwxLLVc8qbph",
  "key13": "4TxuR2mhhx2P2F36bqd3v3YiUMdrtUc6vdVYHbDLbWrmLokSeXG2xyNb2CL9GMQi5zUJEmZLxpJAxpLtcZ8ocn91",
  "key14": "2fipBv8q524t3LdsSsaCVDPvcmEZN6RkDPucYeMTsVJMqmb3akzfi2PLrLhXDnEESn4BL5sVmhh2skPoTu16Hih4",
  "key15": "4nJuL7jvUPYQsBkGocQWM2yHA5SCJxQZekEFpBWKM4GiT3BF9ZvLX26JTLyAcfjBNJH8adTMUQaBrq3QiGVyeYsw",
  "key16": "5dTdrwvonczLx5WEuf4rmjW7AVf8K9aBbBYHdGvk2gWtFPo7SwVLHnGupjR6qNJ4kShSixDtMe8o9z5spgWF8SYe",
  "key17": "rwtr6sweuEc3DBd2EJBsgnaJFJghK4swd1QrAHkG7E4GANnzFkGfmFW4RhfVsn678iBUd3JAPPeJBD65yGcqCBW",
  "key18": "4xwunDLtbp55Rh8aP7EiRUPiQZBbmrRmQT8uGsU1rd5SGnEG9SsFYuRSwFmfWcogGXZJSGPiEKSoggUKVZKrLr5L",
  "key19": "4r5jtgaY3q7s1DhRSpoaRVveGXDW69m6oCJpBoNB8J1YaXoEHyM4gURizm4J15nmHWGBv7GE5j7DXpMM3KHmPG5u",
  "key20": "35MFLThKcScKsm3mwwDagTUmgLjERuHaFdwCCBniCmfZYjE3hZ3gaNL6Wxv87zNxU5ZMAkoygzgVURPjsN3UmRm5",
  "key21": "5xfweWVAt8zGggWGh1bsAXsHJANHcxnRYTjGUHty5Vs2osaihG45gEk5rWpiefeum2M5ZHU6SuQMC6EaCzZyrqmY",
  "key22": "3insEs8zZoWwyEL2j5bhbVwvkVjZHVTJcKBCCmmwfeQhJLsMXxBcTycs6AQpYHo95iPTdz51xtrEHtWBw9Zfa8jE",
  "key23": "334JWwvXDqosRjP6gwS4tz1PwBQGpd89sbMUCHEbJ1DLVukCBGbiUjmiEdnvpLuzEE2YuLpQC4aJk5UBj13bqdh4",
  "key24": "2gw6wJhWE3byrmthDAqd1m1fijUjWYiPn2r474fd1Z2yAHKrJkxXjFC5EjVVysq5bE98678JvGkoci19xwbEnBNK",
  "key25": "28P8t3178B1UCtRrtNei4SKW6ixMMaZxAxeJSkD7yRjKDdhataVDMRC7Zk9wQQvYdPUv23LhzwA5VGWHEmf6cSbG",
  "key26": "W42pAxBsaDgi6hSHdfChvLAZLY7LK7VVbkoGYho3MVpMTRetdj6DDrumstRHx6jtNgAHhbqxoc85q1gmG9eJ81n",
  "key27": "2WrxipmH8Fo27jJsrBqyfg4nZUbZsLpwMo4VS32d7QrnyEwFJTy9ErzdNwwRro2xJyg5gLNNfKKGwcWErQmoZsdN"
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
