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
    "5gWNyDSokk2bwBZyKrtssxqfFzeNNzXScTVhqT8zLjPe2Vr9YAA3uNPx6azyRB71X6ySoTUMf3igkJkEJ4wTBjQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kMPcz784mKeEDGbVj9Ko2WcUuAjkXUtrbsY2crR56Dd6ehcKngUexiQCjqBwqHdcPVAu8bgWhWaAEyDchaXASNM",
  "key1": "4HLT5yiuS67tx66XPqc1bNzSXcA8fEncwi56qeR1Ne9VWwgvyk3MLJFhRNBTQ8zgJuX6p7Z2khKgkz2GvniktzGj",
  "key2": "moR22pfWxBZjofRajmAnzBJoeHb5dPbKLxuQLD7NbEYak5Phxb4sXsM78VfFdvaQsmcqUhC9ffZsnx93GUvH6DT",
  "key3": "5KreUWVmQ4kazfCg8oyem1Ury7K6yFhp7i15bbQ4EHdvYjvFwwMVLk3mYRfRsvaWeRsLU651VbEAo1StDj2h9YRm",
  "key4": "2QZmJbhCNqsB5rNM5kMWLkmH2eQyrzXwsJcMLNwe9sMndRMYW5DjjvprkSs2fSEj9qoQ8dVVoCkh5kaVThHwepdd",
  "key5": "3YXibzrJaby7c3m3QUSvNk7gRFM1d5XvQJXsCnpBEhw6Vc76yXz2QwbrAmqXQxbzEkvMq3CoFjQ7afB9yvusTSRj",
  "key6": "aLNjVTLtsQHohXUQzgZrEf7iDERw7cPZuhmBmjrG7KCgZP9iypgxZK73jeMToLrYYV3EdCFKdiakpaEk3jFCgxv",
  "key7": "5G2iddprXoeuaSB1jiLRdptkhjDr9R8gbEKzefoiucXMVKQaLQS3gNLUkv7WHgk3228bsWNg6sgpQKiSV4WGZDAQ",
  "key8": "3bKgfUaJxqEfqtZaPw7nxvXrjCzgV2HYDNP4trWb4L7GyQHDREypf2kBqmEUiUjfwfaxzn6di5ucZNB1u9NzNjvN",
  "key9": "4MhimTAGzK8GW6fTcBmvKXLhMHrVy8K1GwpyBar5qdLqf5CKsbE5Pjc3UphudwEgXRvttP6K4jciPUU6ZfnJmr3k",
  "key10": "5fK6n6izqXgrRXRBfxAUWorBqVAeLAJM2ebPq3mLhRMNMMV6KR3SjZmyZpCc1A5tFzvWH6isbX6fcYmdScrLpV9D",
  "key11": "2ApewNPcythiFEBEezkBz1smD1bfCK9agczjzeYkuKpXdhJpCZyLNWshrh6FuCwvg2UVdYTpadzCh56D4TapuCR1",
  "key12": "5C8prUUvpsTrjLHsG5MLPzzbdUbACcFm8XAN1wAGu4XAEtjE7WKA9adMULiXoanQTJ3VeMYT7NLj5aDAgpRCfZJt",
  "key13": "4SH8fedJb4hSo8tnKeqXY7PpFS18GaiwdQjXgd1f9ScxDhfmUKkSij8k33trFkieZQ7RV8WgPnhjPLXb7uA22obm",
  "key14": "2pjqTtpwDCnyWQweEcNQqS6iD2ucobySfoLi37SpmgUzVjBc75FET7bhhZ1Em657Sdbwt2gDhdP7D3KnmsdatkE8",
  "key15": "3U2BoWUH91t4edGB4b9VA1ZCTBjUsLcDysfdaX2fL5K28oSCXoyG97qDiAAniargax8LGBzjjxMSzUpW71sbEDWe",
  "key16": "33n838oNq1VMe8gPoZRwTab8w4ag6oWhTmJBsv9ry6Pq6a2fQ2UrifQCNc7qZJdZTL6fasoMFdU4Z3eCbh5zPnWT",
  "key17": "3LkpXK4wPWcmYoPDMBPP7NyNE4VcVGwMMywAKPWaYneAf5ixQGzfo5NnYcHGK69wAETbR2yFmqJbByX681gapSS6",
  "key18": "GWy364FcZozDaDWHi8vBBkiTkGtyAu9MWhGLtZV5NKvZ5xHbdd6Q1DyvWq6Fgy4GmyHXWN98bLcVxKmGedWVZyd",
  "key19": "42BJtKYVSjGHSYkk6iAWwPPhUJZ4ZsrPE6aN4yQJ66LPyEBwnrSZyLUMV5SSfTXRKUEHLoR5ZXRp74ZHeeNcZi5K",
  "key20": "5YPnP6R65MaLrANtEFTQZu86Dpydf9VyASsqA6bBCfWLiim4qHd8SYjhVhRQ98zRuxEBJqUwbDFjbkX9vUi2CZa3",
  "key21": "2WJvVo9PMeJZzTckJVyrDPHoiVC1gapq85FkzUTjtC2GdDu4bhgfnfHPGH1KQ9bmEDh3XJRFQCFCu2xHxPYvsTyX",
  "key22": "3mLuDPqsrw9kKGtoDehsbDans1KhQZDndwP77kBq8rfuXqHYUL4JjbsPukKF6fz9dYaZ8Xgh2BkjAe8EzTFCwm2n",
  "key23": "4SbjqwR9tAKbzm6eyjevUBBZpYZKHeb97BPaKnxZMWBdzVRBcjWDRHbgRBHJNHBqVBgPr6sxdpqzdWKDJ4HYgKMB",
  "key24": "2Lh11miaHimeZQZFfuoYKhbs7mbfhRax5r1yYPM5TgWZwoPSHCYiCDBCSSBfLER6fPU474dzL4HvrGFEhkYxukaE",
  "key25": "4kzWYfdRe4Pm5YRWnwuU5W46WpSzjVxqCQ5U3E3iXNqc3P7o1TAC4VwHrbw4wpSQ74tXvG9y5MKqy76g9TFPPoHk"
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
