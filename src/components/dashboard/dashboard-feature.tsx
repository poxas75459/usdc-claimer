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
    "2Ya3AYjNUnUR9Lpdu8V2vjn292UthqdbVMPvnFgrC1HGPfaEqhubssWm9ZgnPSCKpDeyGqXWb89wuSjAYg7b35zv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ezZkCvyBSLq1R9qPmvebAze1eK9FGvyxQJvB5h2btZGqQbm3HghUKR2fv2iWdQGy1cc86Pj4azhB5tSWqFTNbcc",
  "key1": "iMjzhGmS3T84CrzrpAhZXbz3VT3vuBRpJ4gAG1ouJasDtPVkoiufPAvVEjKjg2WbyTNbwTWGdFwzGUnVfTx46eq",
  "key2": "5BoJ57GpsCi68W7YmFEDSzta6vxy8aVPfdZ27swb3aeM8Z4KjzqPmFGTatrdQw8LtVmMdEfuBWdi4FFjnhDAmkay",
  "key3": "MvNR35vTwpEvSg39LjSpFQjf4YvR2gHKap2C996fbWivmazPwXDmeSwXgqY1Fxys1rdeptzLgq4SFD5fa8ANo7y",
  "key4": "23yxpCFVr1kv4p89aBipE2TzB71mAhc6KGBxGeR18BCzbahgoFJ3CSLd2nRFaBWC7MFecBZkL49pgnUmAVixFWc3",
  "key5": "2Fc6RGNN62mhmXNpB4Tg4MF9aDKM85xgVJ7Ytgj7nYGiZkNBUhM8Cc8aigu8YqHt1wZA7u4y9APY55jGbSzQcAe6",
  "key6": "3RATaz6BYA3p7eW3T8THb3UfARf5Kd644UWaL7Mkq9SnH9c42eRQ36a2wknL5hHhTDZ49xwKfqCGnNiRrsgnpc9V",
  "key7": "3Xid1ERL3LzuYEP6rKMHdKhvjEu4RemkLwYUV1sAE9YLWrQGKGAe1nHuo4b6ckox5hPJGbzWEnh3jLz3P2a3Jq7x",
  "key8": "5XLL44ACY5bUrtv918JfAyZ8gcziPGa2fwHknShrCLotz2YJk8CcmN4Aeav8yRfuutCGXmcVZEzfCnbnSQazzr7T",
  "key9": "5Rb7KQf1vwTBsg68bZGqnCAwFNYmYJQhPPYSDdGmFSFZgbYSiGKRUxJuGUHeNC2XMXzGNdbonDYArExP9B6kzHrz",
  "key10": "2wFVUp7dHkYV8mXTPfAvMGRbvEtrUEbdAh4YFf2ooyQQnCuLsJJW1Pjr3xb5SRoecMqudfGFn85S1JJtJLJrr4bN",
  "key11": "5W4gGoa4MCuKUi5AvRsEycdjSc9XG4TaPj9UbP9YEETETHkZrRgX1DsPweqimj13mZpJA7bsSpddhsnYLFhHafxH",
  "key12": "MyFfBNYMUgqdfzYudoNbk2ZUCAJvoL32GVAMUzZUwfV7GjdSFwUNLXFwX3YSB3eKa2Ehh93MfaCHMtcaaRf1g2H",
  "key13": "3PYZ7tLqhJvCCvntMtpmVBeSXbLbrYkVB8e4ZBP4b4jDoeBfhm1iCzQGAHvALbs2yWzXpDA1VPru5Gh85zonVBqb",
  "key14": "3Z4ZyQ4oLJ6xNTUEsykqfgqtTekMEZeV9qYifjTjVXyV4zeU3z7jEp4LTdpnKTNvyR64DvNHCmaoZL6ng7r6ZFSg",
  "key15": "3b99pUbyFsfMobDDaNwrwcJCJ88Nfo274d5c16Yusvui4GrmwCwaT3Rc2JZAKzcgiuawLMbvyHsXFJVRWLcz3L9n",
  "key16": "5ZpWEprEFbMsyW7JYLbPkdkxZkMm4ZcyYaRuJFjhnrmXkKff3GUcvDzEmMkkRtQ3ptm2DYsyQBj5YCeAjPoZ8nZ",
  "key17": "3L6eCAzM7f9AdPrT5FRooVcQxScF7ip43W2JXSeG9AADYa7ycBXY1gMfdvd1Tvozzo5apTiEwef8ZLhNg5iKz9ym",
  "key18": "EL5UQ5Bau3S25Bnr13kMKeDWtBmNqjvejhZVnVS3rwPJtQ3o5X9YC9nd7rdMF4CY6YyWwouJP5w8MZzUtuQH3MF",
  "key19": "42rJeJudRUUJhhu6dybxcTLsooM8S3VeZRZ7JQpc6aZ9aGyiBNeGz8Yis1DfSLqi7LZx6zUW9ifi7xtAsGukjUnf",
  "key20": "36MoyFdti4FT7FaaRhXGQmo7A3GvsekywhjeqpcDVbm6kpsUMkTM6XWzEuSSFBDxsvnZxGGw2Kxtn6DzgTA1jAKE",
  "key21": "4PwwdWutvFcgmDv3vHtTFoJVq1a8Zg3ZhVpnQFd81jZEFPgC2Sqg1ZcjmYhxp5uyy8ftmWaMU5NLSKfg59YuKXfe",
  "key22": "2DsqfrWQvuhQnWPz3bzJeHbrRtyQjTq3MDo42nVdAxdLqJ8ehPMAnKpnpfGNc6mGYZfmf2g43BTxBdJ74ChEuda7",
  "key23": "2zgfqdSLYkhDy3WDC3tj8sV44JqPbp1o9C6fy5RGr4RjSG9GrJmPMM5hTCeKeUEGroXoQpRS4qzBaizBXCDT7Mmo",
  "key24": "5cL4oHveMP3eXhU4jmF8kpLTVV4QLe6hjuCQGWHVYSVo42abtWSu8gwMLQQEVjv1q54bJYsF6pd8AcNHGsu5VfRo",
  "key25": "3ie18axLyVDGBE31mhjV8pzynitnGo7EZRgeimERXSHVZZ4mkvuiB6LCAYC5PTVhe9W9KBbQP5CCEJFstERcsgCH",
  "key26": "tWbgsXZ7yRm1a1tFYdsG75gzUR3sXuJmzgCnkNipNr5kLVY9eFv1bm7hLrH3PjPFZvK38jKeCi5bnXLnY6KUxvX",
  "key27": "4Sr2F99ncaNnqhmtDt161k5gpWri4osyYu8mNuwFYMULSKCtZ1dgRP2Ush1UuowrwA7UkaCp44KZ1FpGgLYZcTmg",
  "key28": "gDBXmPuoRcDQoWArJ8xVqAhzeFMwLW4ThXTEnCSLWZYdBvXP8ghjjgDM4KmMGKtXkVFfiMJyu735XYY3XmUe1pY",
  "key29": "22Eqo6NuT7Au8Z1bAcPoari66dTrzYNFrQB4qtTL9QsFkqsbshT3kBexRVBJKrmCh1JXoWmA2MbmjxEgP4hqfBLe",
  "key30": "3qz7eyhAqUAQ9dWtdxo2u5Ug49uFQDVQnTmzUHwbRRbUHiS9Hgut39fcKVJ1icCvEYN5B6MsnNnG1Qpk8V8byUj5",
  "key31": "3sUteUW9V3c6TZDFzUR1ZekMJBQrnCszriMcJYc2pNP1qkgBByrM2z1sidwS4j4SmQa5WGSe4iszKxyG1PmS4gFU",
  "key32": "5nSHGsgP7GNX7zsxPaQxXos3zCR68CGcLADpa5D3JafDfVfyb8RB49kZRtfq2tW5b8DLmy9ror2AgH39rhWVaBBx",
  "key33": "4vcivt4wBdG1LHNgTBUF16Jp2H9g3XpEPYTfbBMYJajgKJQ4kr9qMqRYXZETeddPUgTtES3brXs7zesZ4xj2wXwq",
  "key34": "2ANDGthUwqaaLaqajdXBUeRkRTMt77EBgjPjg9eHaNGzGAUnavJCGRqrkSqzseAX1nnaWRbTSFYrJ9HYsBm1LV31"
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
