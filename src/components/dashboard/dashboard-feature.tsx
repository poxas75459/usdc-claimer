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
    "54b2qa8A9YkVLvmoXKQbN7KACzqQeRTmcrKR1cXovfmi1u5e4oV9Qm46YgYWNDeBQFSGkePJURuWxb7YGarCP92d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xGAgkSCXnnh9yBUJEw3w4swMUoaGgXKPzqJBw2SgTm7RpV5muLXYx4XKFVEXiYY8kEfSTkfdpoT2gtr48qWDs4z",
  "key1": "4hcfE2nF52giz7qEqV8g2d7jNw3v3ChUGr68kjkbXvaHyVQDiSVwoU6fA1xPjgzjXajQemT78CzKBED7hN1nS7jx",
  "key2": "VURoWgaN3XCpRfLwUoNaiQJi6tetVYtYasfXhDxBbDgBfn1xfHR5byyFNYbYH62fKn4hah3bzzgxbyBkH4Y7Pff",
  "key3": "YmV6mDe4j7om2WYa1ZsP5gQ2VcN1w9wyC3a86d9xSD5hTnN3WtEcEuCxDdQ3q2xArc1NtxT1C8jVvvyL7zjQZxx",
  "key4": "2uMrvmz4pZnjYfNTverApNo83zeyxtvoGbzneVXgZT6CNV8KZPAPU19Ay1D2GiqjEFRpEhpgnzxrwcgGynJMTGu5",
  "key5": "66fpKxv1jCTxpEDVtiM3Rieaq3ADQYKtAc56CJNiWK5aieVx6PYFZhUYRzNCGrnVgaCXvYREmsYKpBR953g2cCC2",
  "key6": "4XeupFBuu3nHAN8ymFgKfMnfMBPDyKb9U1efwgM2DMhQPHVEuUuFccLvgGXEaZRrDUGSqX6YCWwkdMFNdKm58MAV",
  "key7": "3VRRLHgySZg1wBjPaSdj3b6Vuki5S6nEuqM9ZDbZT8ZC5tm8C62cAYhW4yZ8Fa6ENmkmzLAsE1ydHzLr7kSExJJw",
  "key8": "657EgX1iGu4eEDe4cejPB3nj2hu77AibGjyaocNBMXmxJzQ1BSYUxZp1kqfwhBT5WraifHxjdmnGfoxi1KWJHfBv",
  "key9": "UvqQjC4bvgAWyrH2z7J5QXddAbqBYK5EDwBUnhoCwMyhWCR8kedFJ4BhFP3Jg2MrJcbER41KoJdxE7w34k58UL8",
  "key10": "5GNVoNdmfqCeEfM7bWDjLaCxVN7GnFuhyvXpdu4LBKTopGipDv7DDSr75zcHV8yHwbrFjXS7YJpQDbNqyYgieALy",
  "key11": "3AE6YbKBfoNL4zrC2GF3B7r8UFiWNuijsq98q71W194jGZsMF2B68yk5J44UPJbJuJVfeeUSUDwaNpDqLV6R96nV",
  "key12": "2W7amm4bbUhWNh8jubvcbSF1WFLY4TR5GmLmv12BdoN8TEx9okPcGe7QWx9Z7DXQjwFL4Aqc6zu713QJEdTaidrf",
  "key13": "3ekTQoAQjyngFVc8VtuxEzVwZrEsjG9BjNSFV8EUYXdT6EMfYuXmVu5TRsCMWdNLj3YRiThPTjq46TnTgieJJ8wo",
  "key14": "4q4wXJwa3kSw2Jy2Kfvtv7PFFLhjjFFLceUeJ6z91JswKXXK1nToPBUZnByvmewE2ifGH5mQAUX2TY1JYupYHsz",
  "key15": "2hPrfUyeTpT2URS3Hzn6V7ScvFX69u2X1XzixXb58iRSYB6KHfegDH4nSWikFpC49ziV5oYDjpZd2N52ZiSxTH6R",
  "key16": "2cKrvxT3HRHuLqcW6vhXdhmsxEdW5viduBGwbuzYqTNczCVWHWdZtnE3Z2mArf6pKH3fqs7oHzZmPurMd53zAUEH",
  "key17": "A85YFSfDBaqcKAebJzEUmeL3hcX3yvdyCkZPvukniFLhnMZu2Lkmm8J9bTd5DDVfbJQXwiC6iojQhtanKtBkZZP",
  "key18": "Mv6mk4gaXNNJU1MWdGM6XwyP9niXnXwKPTteBNE6wW9KVMLZH6wk2WVZV8GYmPLV5ynmCJMmmXCdnfJ4AVaMWKq",
  "key19": "KQpiGV6BqG9N1ZSEJm135Gv2RcjiPPFTh1e8Qpz5ARASvpxezo1GmqbEoRMZa8Sg567tKULEPpo9jh8HfB4XNGi",
  "key20": "3PnXeMhxAUEabnfKGUCWgQzUW6sCLNdyJTntiSUdTLJGVjmk8kqqw3u3qFs4PQzrEFDbk8H7yQJfLQ9EGZJMZTsd",
  "key21": "W77jiDJCFbnThYs77C5ZEZWf7ibrzQR7YQRmjRpFcbNsbYi6qoRvYHG6uPV6KGezHrLsSHym4YXEEVbn54CM32F",
  "key22": "55r7A9D4VpmfJbsUygijTm8Te4VC5o7kUqJoE9XM2E7tXcEniTaU9v3KQEmaumPTJZFYqgbfQdeGTXicfesjM1Eg",
  "key23": "5cBt5VCLEMboPxyGv1FdmiSpS7UkKT8RnyvzMMCow3YyUorKK9NAGNWPM6Rxt5qNzCm69Pd692FqSgWBLNJbbAWy",
  "key24": "385jAb1vGc1PkR4Mw25tWkSWjabVmAtiimeiqbv2Ji8CWF7iXcQHbYrjcBGdATR1VhMs9AfRvVPPFwZvZSZk3AkF",
  "key25": "FQs8BPZo2TbswKp3Yah9Y3oXBPUiNQmAGJH8E5uz9wvYNY6gFKsXWu14SZyA5feB6Czsb2w2MFZ7riQeQfuuC4U",
  "key26": "s21VLHde7Xoj7oM8YF4jhLw4dcVyRCeN168RUBMQercpjWiPWUJQ7scsEgYMQn6S4XQWtfeuZRHNRKqh3BRxMpR",
  "key27": "JwwmGcWiF4RJoeQdaphnephr8mFPkPrDZdtJVVmDNsgmvPrzdAJVRZtevfHnrUmEJnY8ssBmUVDGma3qRPdGZAA",
  "key28": "5njrabSZ37gURq97J4x7oxz8Lyiv3vVbXWE1z3cKc9Dz63y8KYoNNfXE1j6Fpm8jnrh2ZwhYCfGhJXsdHgwh2JPK",
  "key29": "3JanqwJjYfth3SrghKSDFdcYu3Rq6s8FCAmdqyStQLKqvLUrW8EL9sKbe8aaLZPJvmfT4Cmx8gYFt6GyYN4Mu27i"
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
