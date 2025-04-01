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
    "26CUdNTiWq7X6P8GnDZGUL4ym5TtZ1XcrFHSGUFEHsmNPeSrJKMdwX9BkTwvHBM8RDux9sML4QQdRCafMqoSdx8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jkLYr8PDsqpdfi3x85XFyaVxJNssZXrdEUDJNt12ydYnFV6N6BcBCqfULaTPGdU2bZM5CGQ2yXdy1Jr9J4Do3Pb",
  "key1": "2PptuigrYUiDhYU1u8VXripsbY8rAJKg7C93zjxZ3JSx1MhyaoP4uQphJGmLbyeW7sxyskuJRuJukYNb63AgvdbP",
  "key2": "p4AA4Chgkv2aHQ5dMf1Ri8m2HXpW9LaMT96RNXaCZyBbQCz7QYnBsvzBzBUKaLDos8osrdJrkLRFx6a3dc4hxyN",
  "key3": "WvEUFpkq3T9RcCxtgPv3Gqg81CiWPwDEhZ4pfJ8Dkk6Zw86d2gePJjti1P4Mg6KG6JVn9HKJM6EUwjmU216DFaQ",
  "key4": "4KUKLm5XS4HmR3c4hiy9wPtGUVrS3RCUADBtN4ejHGmUfC3su9Fp7XTd6mn7D8EGfHa6pBYF1pMAgY2hgMNv3VNC",
  "key5": "4SLgYX6hFhQT4xszw256aZWHyBBV8rzEPUGr55eQK4Av61BS7JVnsyxaxh6qQScBy2NtNMrWLzg8veZX57MWCqCS",
  "key6": "syZ8p4eqhaeT893kCP4Uj1TtArkiiw2et5YfzamNQE453QUSGq5TTgV6aiWKj27gQ4KQpBHKymudRkZQcDtDRDJ",
  "key7": "3WAa2TNq2SiNjUmaricCoaGGhDJpz2JHWdqbXF2pr57YbZRycW5cgYqmxLhMgeNSbYPzsiLLxsLWH4Ldt2XJdRZ5",
  "key8": "32wNtyHS6ubzVLmLyhiqNHXndYNqnpmZcvM7Sswgs2vRchgRkQHovn5oMDYcJ99fRf8h85W3hjyKtk4zP64ZxajV",
  "key9": "4VgYiasEFnZ3X66mEc8oE3MPA7cBQnvCm2tGPmdVXXNYY4tkAgn56m8H5baxPm3WJKh3PjdcHtjzxhBfsU2m1v91",
  "key10": "4yBtx5Rar9C9FcPzqmj3n3RXTf368UGRtHrtYPM8XBcUm2odAjoTvUfbBkuvsx65srdyF9AA4yEP8gqVXjjf4RsA",
  "key11": "44EitJ3EZNXqV7ZqC6HQTE143GTwSYSwGGHM91vMRxJC65M2gP2Pr3WaZqFvebJ75RZJgLKZL8zTmtJVK6GFf6M",
  "key12": "3KqjqstYkF91hXWTjwzCRJoZX7Zk7MqLs2maA8quaDQLvLrdNKgMxRx77ARSG5xSfAEXVkiPHLqANbPbaTJm4qKy",
  "key13": "5RjSvHmdACZ2esqjY1vxT1L2S4YRHmNofryCZSwV4rG3u4oa4kwjN48K4EMBp5y8Yy6U7vdgLBpVGLe4nbEHM6Db",
  "key14": "64mEne6eVHAiphzDk9NUQKbiE7uXtr1tuxo6TLUfgYEjhPcHGmDR9PG3NBymJ7EqSRoiZNiRGWe7sXKTj1DFtLYj",
  "key15": "4L31D3HpbGj3DkC4GngVz1meRjCw6ZFA64YsNJYQebew2tHpmzoXqYBwrNnGyMa2C73GY9x2QkK2dYoqD7w34gPx",
  "key16": "3v3Wn5z16YWQfizGs8cVJa6mvV7FpLJmrPFKztnhv96CtEEnkeUZ4EaqFtrEqCDkoztKbRp7JpCVWxgQy7WEfHq2",
  "key17": "2GPGgKKS2i8gGzrYYTjoGGkLWfc35pxXawX16cWQmrxuYQTWVN3BCEkunmKLrJsVn35zrRY8CJ7wLiAHtfpkwrHa",
  "key18": "5sAJUCYkTqeXZHuZZAZr7uFPMyD4jncQaCtLb7LaDyUZfi1QXgJ16xFYT2j43oGKtEi1zadpzgGU2tL7ypuoTKkz",
  "key19": "cqJiAFQHkWuRKgH1VLw2hMRfcT1RXukaoT2Nq6hs4UfMmPwCtxUo5BKzCWFaAfk8oAPfc32HsHXoNsoRatPqdCT",
  "key20": "3YWWkKY3cx5TtfjYQ8U9tzyffDWH2wfHNYKYhnmLoczPi4acF7EkiCmTj8ZJXySRuUTdXDEXwDmc1qUwCFhwwdMF",
  "key21": "4351N6XjxPJraGN3kKJdYWCDMWc8GsW9AxemEKp9DfJ4LPg152iMErN1dKCW8uRojpG2qgtERGt5q5MFd8Ka3jKu",
  "key22": "2iEk8TE5NsMxDcvsN5jxNNzBUNGcXiysXwTXn9ckARtUqd1XtKq21hB6kDkPXzcicSC7NVRLPTCj5W14gdGhCcP7",
  "key23": "Y99MvKDqkEZswpbnWtLsuQnu6aS7qFKwaVDB1b2teEz2MEv98hZBn42tkYS7w9k2aSES869CFeZ9nf3G3QcNHVh",
  "key24": "3q945qWeQNN65M4tDAXozREUxXJPcgswwknSG2ZStdLpqjLQopCP4UzcEvx5K9wGahLUGyvAEh7B5SoTek6Qybx5",
  "key25": "5WWLo3spSw8gLWtj2cktPVso93okfYUKSNaDhS82NDm3cwADK1vHNUqwSktMyjrLxx3fpQ5KSzE2CZtCgZYzMH9",
  "key26": "5YxM6HG57YEGVx4HRbbGLDMCJPL4iaQyF7ntgHtuQXi1dmvGPabpVYTbV2iwVgpNrSd1dGLNrAxYEworkJ4ewoX8",
  "key27": "24cvETingGUA66Ey5FCfGq7km5bw6EjLj2p42efhDDFbHfzJcRXzehwnyf881nycfK1ZnrbJF7ysHBhzoutwcJRt"
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
