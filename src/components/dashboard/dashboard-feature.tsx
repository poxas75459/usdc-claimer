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
    "UZhBP688qbYoZtEGZKm3RjyNKp96S2z7uV4cdsdgKTffcwvjFeFmvaWZEKMiyyAqdq6QKXRCDQWDDFZRNoTUbwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4951mUkb9MH2CwqrNXFihUfH6AYVkdMCc7kub218mgsztP3NsSSQq6gHGtXw9tWFXfRPATZkc2N1eVxnuYuVgAaN",
  "key1": "84hD5DTp85oGxbajmLxsubb1PdTSxoY1HaS5BxSv5oofsNMW9RdSwzeB75uNcAcEJtJUSiQGdANk2Qop9T1aYEW",
  "key2": "5opfHHBjMnqJnZUYWhRdyWnD1DRbnaWxjXTH3xavtELzQ57GNHVzggiMAyBV95oBLVxGgPc9xnWtXb6eHh1nanTP",
  "key3": "3k5YXR4SjWv7DZSKmDuwKyf3ErvBLp7whiSzcPjRzhp1H1hrbreURpWsAkRb5WMMn8xKx3aNKYTSBjHdKMvDURRf",
  "key4": "41F2iTVr2Hw28pPBBkptWYWKH5EBsGfcFqzYFyxip5xL2EEkHKtfCdv4fnp4Wcppia9wqBKwTZGbucr7za9Tyfoe",
  "key5": "2KsvpbhWbDsZovn8A6v9U3sbcE9SmSHCD8gHgtzNEKmDJRLQLVKW4f4r54xKHUXYbYkbvzmdLpMax4bqo7DCw5jG",
  "key6": "2oQcRBM9mPsdzBjvWGVG5PFjnwtmQWh2dzmLBZ5sYJtr3ufy7kXkrb2wz61P81cKYEPzseJUNSBSgss2H31yag3i",
  "key7": "UTcZpX3yaXe5mGy1HrByAKFYSb2qRXCGvKLVsGV2fEnBdeEUezD5PKc3sVzKs49LKU2z3gF3fuLwjgqV2d2HnQo",
  "key8": "3PoRhPqBNJA2cRcVS5iCXAHrAw14VTtzyusxJ4NgcLi2vigV2JSmeyUjJoSdwd2ZQ3WVReUaWao581hqnRw11GHd",
  "key9": "5Ek1Y4zP18XPWYXJtcE88mBvXrUYuGf467VTooSfSqRq2SRrYF2XJ3Z3CmPdKSxRcGdGH1WGaRPo9RXxvBTbpofN",
  "key10": "4rH5kNqeAoiEM1LVoeYX9dBFSc1rmkqQU5FcBbbYRMcMUTWmiErr36HkD9UMKczGWRcSZc8CJCw8DDDnUgh32Ktb",
  "key11": "4hiGY4GELxkkecNmYXrXLbPJP3CFH7L8Qg6F2ggxEPrQdjT47ra344H9r8dNZsCYnZ5eLBaTcakgTDzRiPaeQuXW",
  "key12": "2mmtzrpjyKCtjiHD5LrUi7K9icNJgCfNzXuoCDLY3i3N8HgEtnbJ7fRisvcHWdoan8bjoBomhGoAWpE1uJbgvvz2",
  "key13": "47H5SRQ6NbbTeBYsvoRj3SVJmtVJ4FY9kfuK9X8ukMvbFZLWmUPp7UHTRtDEnanHh5Gpkg7dNt9sssrdZgKeysye",
  "key14": "jyux4tzWwakThK88xbQeQWzvF2kAd2e3LtepjCecCWFsjyyw1sQ2ZdGapWfE5k8tW7y9Z4TJXRWQBBAY8ra9jQq",
  "key15": "4MMhNzQKGbc5r7tG7V3QiihhK5BQDezpDvhcuLByWSQPN1eAQn91bKeZti5UxLHSqc9m5aWUdwTSbhWnSZuVxvb9",
  "key16": "3jPSZYri5QR2ffWtVrFs8pjA6adMZoXw1a1ksWyCHdKHmcGV6y1V2XnNeDwBC1ZxWWwyqvjySY38aWy7eWadM1h6",
  "key17": "3aN8DQ4tsE2VzW4t1ZXCwAK2GoeY1qzDdMN2ZinLM8mexaRj8Roo6s8uMiXtrzmsdYVNW52Woq1S6Hu61rJZLWK",
  "key18": "4b9f84ct9miV7TAnfP5efBq9YBx9v4CUcrsrk4z2MkKK4s6Kg2NG7ZGc3LtFNJgadj5Rm2CASVe1Zx3qdk7ExEDH",
  "key19": "rb3TtwPqPAGiyuQ5FGADZYq4vWjKBU7Ev18mpiTN62K3Zw4YrRboj7864pAYzcN5noRjVYKxwoh5XhHEzYd5iNk",
  "key20": "4t55NN3zf5vnmQNbfk7HPqj4qbN3aj7qgmm3GWVXWH24SWzgNkfdQHgyJaiA1DZCCr2Bk5AjEYyg3NGBoQjNCuDi",
  "key21": "5gDLxkWPx5SqUjnJJvVkrTapgbqFuzPigySEYGZPMLh4JXJVNEAjkRuXLoew95yZJQrkJ6o8jxjLgEQmYgphmSBT",
  "key22": "AAKvT7PkDqcyz1mQTcWArEs6nUGUJzKhcrdw5wtKavGhcW66bX3HtsdX4MDEgrfpw9hj1vQMzKc8nTQXvNMvrpY",
  "key23": "2H27oTfvinUaXtL3rPNcKbtpXkox3eb5B12vRNsZzQ9QpZGLycGCvMsyvUpYrbgMLFSX3cHJNcqNMcWnH3Dar4fD",
  "key24": "4gPeHE7YZqk6dXqfWA5pP68puVJ4H1C2E3LvLqTfAti91fS4YXUMPDPQ8S8mXELY9PzrFpUkMByhfr921vxRT4D3",
  "key25": "4TaAUSqp2E2ja2316UbJz44tiM4jNHqkfZoUS66L14EgK6roAZ6ahrYJWd4NNEg4se86dRVVsgrAwiCb4xfqPAo9",
  "key26": "2QpfyCTdo96pVmFhxxs9FVkpR5Vr8Uk4kwJPjNGBtVAbFj6MsZ2Ess8XPHCC4eu27SZJX78oF4vzEwXyzhWaUDqU"
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
