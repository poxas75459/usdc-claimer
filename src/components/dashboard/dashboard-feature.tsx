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
    "2wnh7czipg3ij5xEMdUFCqVtWbyiByU1zKS5H4gWrNDtVKfscC6bDBQTd66resHKCv5wPvRemSiKFGTA62JLicco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AbJSKWf7S4jQTXj443ekryAzcjVfqWuhYRZL7qQs3Lr2PH75ffMTi5Z2jzE9wip7rLTqbTzNxgmY8aA2KzjxUrf",
  "key1": "3mgDQw7vQpaWykoLGNpYTGuDvM6ttFksEeYHcr6WyT8ukZLdHt8819SEGKQ3D8nhQQzNHooPNfe12P7bVFJtxF6Q",
  "key2": "4VLxe7G2Zdi6g4r1BPBZCwsH3cueiTNcdWVzzZstz5DiBpj9sKaMhrHa745pd9c92WJo2VuAGdd6k5a5wq6yBoeW",
  "key3": "5EpDJgRZq9Ado1CV8Yk7cWE6jBpbtCYtuhWpUqu8769HHDZANC71tqFswH2gx3W73p94WVnoKMcqwLSv72XL3Taj",
  "key4": "452gHQNnxBxjnmT1hrcqGqfBNM8ZB69oHwKjip4T2u9Hh6cdNM6j4pc3VFFK5t9HSjmrqj2vZfexsKqMwM12EmdZ",
  "key5": "42AaZzjujWYCK8Wjk2nDU4DjXb3Qy1LPwU8CXses3eP93JvYidQN5LrVQsxMom6gurmA11u1QFHZF8M5CAJqKPa3",
  "key6": "5Jag85rtmjpeUUArPSZMuu76rAURcVJmiv4Kr2YnjgRYBWG4uFaMPa6vfv6rkfaeYveYZtR4owPnREZSJ1TUtAsV",
  "key7": "5sLcGxB4FUHbsbv4vk4CFgrUPHQpaz8bKiX14U7uDfYEaVpbwnFFCBqBhoTTTY1vFGycnYr6FDyD6MCkqE7qGZzJ",
  "key8": "32EsPyspV5ADM39xPSuyDVbWcAF1QjF2ok3CpVzApXsvxU6eofHvPzVU3YQLHazzzo9RT7cpV4HauVcHf88LTLN1",
  "key9": "2TiAKK2Jm7Wsgc6nZBJsZvtMfVkrhNSXhKzrJudSDumBSZC5DdU9uYQnsBXbVtpd1CtP9aBmQNTK1yozSwVQ914e",
  "key10": "45aCMKnNjnWqznJknwtcXbkH6ZTHSzgf7UGTPpNWfse5xL8f6xh3Wd4z8zfXaR8m2pPLRxrwe1dcQdnyNXap4r44",
  "key11": "gjpGzLHzSSAsB4oiHftc9uDgie7vGEiHrWNxCpHtcUutbNcKVQiwVy7rZJhf7c4U9VyPyPs9sxL3rT8M9RNixiA",
  "key12": "5vuG3RzuKz66uUHsxN5Aa2whSMpLY2nXtKi2VRPbUnk7aheFUBNKiB3F5wmgKWnt69kuZ4Tqhs7TsGpAMdcCQ511",
  "key13": "3Tup8vnSPkbGJwm5ZLKiRetgXCXXfNoT3XYr1FXheoLxm9qLJDraPitSVt6CRrsdHRNUvTHsK1F5ye9fBc4Tv6mA",
  "key14": "4NoCCjsZvW6HrghPhAtYufpPemEmBHCnjRW8w936pzmAysoZRXXNw93HLabtTTS7rJsjmiCFJFn85iX4wsVpDN9V",
  "key15": "2sz5GMhMYcZXCgoh6QY7syHXujmWsAgu66mseRkNGaAQUo59qUWBs8ygayiqFEVpkaETR1tLEGJy8WRRVcQp2Gn6",
  "key16": "5rcXP6ixW29a7ckFBj7mRSAovSv4mhHUWtiVM6BzxMXzMSqu15SR21EorqViCcXwbFxvjacPAtdxrFG1zi3TJJ1o",
  "key17": "5Kwfo8f5uFR5QAEdd2ARmuNHiEWmjQqZJEaoMTrm4RmqDVr8s5zjk44VxTpR4yFc3xiN1gWa6EUwBmtnJYh2953P",
  "key18": "63AhF5svzRu8EnWvDMUKtn1YsC1crBH8zyqMu9wVcraGTwQgUKo8yomP3ctyh4DBsaV9TM7zgdgbmerni2ypo9zm",
  "key19": "441JDQz1zN2xEyTNyHbsPfrEJhmeEM7vpBhHKenrfkyxN8AtaVUJHUVXMNrCJNjmqAyNdxAs2rr3Agabgn3DtbBU",
  "key20": "63zD28bL6Bw2hnD9oJNyCZ9D5T8NFBpeWiiEfHHJEyaz7z86yBvXw4kaaggKwc433nqoh6WgKZzrEV3MLnn3gXcb",
  "key21": "4JTWitkCncSGFtCNBFwuFYuXQYyzjdLjAgHyrXZgoCuwhvr9AW1B2A5p18GCu1rFtYtuUTxEdUgvCjNCHEiDpdn1",
  "key22": "2kdssjsV3KWbj5NG8eQ5X7cV68KSxcod3K2Yrf6vDEmbq62eqwbtWXbbJuwLWRGxTg3NPeRLNxCCrAJgQuCdNknY",
  "key23": "54b3mWR4jHjziinmNa9SkJuhTgB29eo6HCK2GLgQgRR4zGz9GoTEJ5znFKY9V3dSqx56jPw6wuKSEXKh8WfBP6mx",
  "key24": "4oUpDBLznxvc34MVikWMadhuWXT33YBf7dEVRUK2QtrrENVeEyFosFKpd9Kx8AepuG6FB1p7UF1qCD6tatVXaCtc",
  "key25": "3kmr5AxoAaB1vdKTqZs52vDJCVcS28hbGq9G2QGYQ9HUi42ykiBLhbms72H9R3rCaxjnBHheaMmxEp4RZ6h6fDTG",
  "key26": "4CbJvjc1rnf9s1h3ejkVTvBMHVjjRMywLkXrqTrmPsVcTorsGP8YnSvnke3BV5nEjAf1FaLpKPT6NAegLFJYFxxv",
  "key27": "2G2Ccs6NmQTRwHodLHZxw84FP2cwpMVUdmcXJknyHui9rPwFgA4b7CQv4nyBrmQvgcr58qxtU4kWonAoDpk9bSgp"
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
