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
    "66kPSyKGdUUR6MRJ12P4LNZTNKK7iYuX4EwJvVSgN5XStYWZkNoPukpiXptuHWH3kiqks7j8GG8NtVahBALJzyii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aPAWKY1Za7VeWsFJ1b3tKundmXwFRg1tjNVyQ6tcovmw5V4bTkssJVs8AhKFy1hneiNN65ZGGLVxLADHXinesav",
  "key1": "57TWyrbyiBZvA9XvfPScuXJw5iZmBVxzaErUfZSRDq921S4B4M2tAwZTAbRTbhw4ShirTvxb5rg7oKxpD8pv6qVP",
  "key2": "4mLkiXLFKtMZs5fKak9bi2rpY9Touh1aCTYzhq9DbbLwxaVF4i1cgdCsQjEtbAM3X7bVsGp2GFxJUyTALLByP1qR",
  "key3": "2yfDYYPgH8owazJmqiXhv5Qrxpt22tnkgi3GfixAdH2wdCpP1BynHa5amDGvQ9MCfdBkT28g244x7hBuvTUUYjrP",
  "key4": "3NJCqaisKVXdcpqVweDswyp4WrpcrDFNWL5SVvvio6vdGEwx6xhyKKUAbKX1fSGYGfDMT6hu77kPiSRHYzGK7uye",
  "key5": "4FGWWZTLgBG9YiYarwGHCqtwmZXPPhhLmEnzL5ansAMroA9djS3Bvvk9WaqBsz7b3ZUUaym1iaL35FuSYtuNL7Gh",
  "key6": "3NmNgQcS9TJpCJg5Kqg5oHdu9xbu6u5k7fiw1Qta8fs52TJNpbzRW362Zd8MWeDyMYxj6RrZm4jwJgyK5Usceom9",
  "key7": "5yjC71Zp4bkCvh2su83DkLoPxW7Hsfjh5FWkQWFotHa6GmHcbbsP7P6vd8jj59zPGeQ7pALxrTXbj4RbMz4Xm2pf",
  "key8": "2ynqfS7rGgia49V6z2vY98835672ASMABgPg29N4RGHW3gRqbmLrQePrxWDhXcoSPg3tpVrJn2KQZLsZXUjNQLz3",
  "key9": "5rtN9PPRxvcgMGeySL392DY4Xr1JcdgdZGoAaYrzneq1PVtfXnvDcnz4gSmky9HagXBmWzoJ2F6H8uH6jPAzdeX9",
  "key10": "HymZg7TU6eWcwCSP8fJ8ddPzcc6EE4AWk4uCqTkR9TYDgGYJiJS1nmsXpiEwFoCzWdei2mT6tJH21d2vfhcs5jg",
  "key11": "3n5iAUhSAtqhjv7zVH5Fqq8rGZgkzjnvkQmji5owJ96Vvi3ZppgDABGtdbsB1DnH8NcnCdye19PgBSBDpUPGb7yj",
  "key12": "c9iYJckvq4irm9JWTGTJZ419Q1zg18tBHCTaz1anN9t9KExbpQk4qVX7YXUkzrjUyA1zephUv4pMFLe6WCS2Udg",
  "key13": "56Doe5subH1N45ERVzj4aDzNaSNJQdiPyWe4thiE5EYVAipZ1sEpKDyk9mNhM9wPU9a7Xd4mmNZ7GuUtgxuKYKVV",
  "key14": "H66kvnBCYyZRkiu9pge9EnnDVmAm3yrUMAg7Krbk5oxDVtpap2M1n5MUeNFKhQUsLVqQhPvSPW6ue7CNmizdz69",
  "key15": "XTDkTmwQ2N4MZcyknpxYuvTGiY37kViuUmjCxSZCq6LsUdFujk6G1pqNw4vupcxBHMtkQgAeLc59DdAFWngLqTx",
  "key16": "pHh6a1ao7sb8jgPmSrU44uLQUbaAM7CtL5Z7WsKXcZqYB5Ldi11VYHRtAmPhfXcrvknwcr3gRpSvwaUsCPVr2K8",
  "key17": "3k4fpvK6qn8LqM9s7nXoDbYBWdKVVGom9bv9a4rBGt5GDNAAy8F7NNtjAzD3qo843GYNH8jDnoWP51x1k5DjjzGd",
  "key18": "fFJQCLzNhXoj9ww9UHSxNgvvrJMB82CPgXCUTjbVnUCeJ2Jq7afhs49ivzbZUbqjtQvFKTN87L6WUWejcKH8KUq",
  "key19": "3MhAzgyxwTZA68hG2x6Vhm5V1kKxKwRRBujQR1AzWDhe1epnXRKFfcJ1x9cQHPifkPEMKTXjZA7JXS2TvnzhyATB",
  "key20": "3St4THruzprn3GfBobYZbN2bZ9WmkiBvsABNtDDGTTjzxeyY1FJH5hPAWHoqJiKEbKQss6jtjBiD6FA9DwZHDq1Q",
  "key21": "3xhbwcg7Uk2AU9L1A8sMnnJzTNwHGyqHgNFF8RbWENNhEQNnYJwzJEn92t7E1rfH9gAxu14g6aLETPpNJ7wjVHjM",
  "key22": "5F5faLuRo8MgbtrLNkf7WoFdY6CBMCgQ4dMNNmQLpQpszPQCqyhdqijur8GRyyrLLwYw9kKiMPrFGcxGxS6TAn5M",
  "key23": "37vD19uLX3n9DSMDz95PswQzAQZdnXrXFrgvN3qx13QHM5JMrZd6asKvqPJy77qetf2sFZCchbibwW4uGcA71XBd",
  "key24": "5kVroDJQxspvCJVBW5pagB1Rhh9UhYq6imB25fjNymKf9c6wivu8s48CVvaKTAXw1aFxkBcCRtNtcAJWnVwoMQGS",
  "key25": "2mKd6Hky4KJEU4WEXgTBbhjBfW3dsJytxpGBCSwTCXeK65pXk9USAAH52VKXPaCG5Hrv1Z2JLsTs2whnCnWeV3Dh",
  "key26": "41mNXX977CiJ5HQxgspE4pKfNXJS2DKV3pfVok4j5QnbCjP2rFaeCz5bgKDBBhqNJGYGYW2wYRvadmkXS6RJrYLn",
  "key27": "3K2XCRdtWV6TMCvjJ6YLLJqCKd16Ymhh3WoQ2usng1am2qVrTdNa437yfvkRgUxSPHMYo9o67ZDMmYphAq1juFGy"
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
