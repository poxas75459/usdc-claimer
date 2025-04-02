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
    "2SUHxs3ugv1k5B8SsLjNnY3tgVEu8Yhed6uvpbzzPZYLjqcbvs2rHwNp5DrviTX6mmY1wB66LUyB8RKDJ8DkTBCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uRCkax4Bwxpud7XjHJc27yFRL9Z58ZeDjKFNnmVprcjv1cK72A5fWeJHwegZy5u6zbxYtm5vHVDPjPPELr2RbAu",
  "key1": "4zvNytafk8s4wUL78Ey8HSVoTHYPqomnyiCa86pkHf4sSsxSHsbucaeNBFGiH1VDUqu9VoS1cmiQAEVxkAAP2pjh",
  "key2": "3dL7tDhBndRDe5mNrY33VsV1eLeLL6Y8DHCA5HWk2UL95FjVxrGJSJt8ESwKWRzKXkkCDDZGG9XB5if9S4NBeuLX",
  "key3": "3Lb9WBrNTo5foN1DLv6CbXfWcaBGHDFMsJj3pBhzKNBrJvgzsVAmQVQUSj3ncCzjQeUcQtu6X9oSMm71GADSbHks",
  "key4": "4dTdfjt9miDMgRuvVtCaFvV8zB18C3JDH8j63dkEGCuun5G9Fa1wyTyMvcpdskBLY5xLhW5XyhixJMHcTH5mxhRo",
  "key5": "fUupU9xixkaWzyd7WJDdEKYBHcK7hTn71DDMBUwRYJ3jyjsnu2fFCkKEkR2WmfMkwwmjZRG4xBV3Wo7nJJrxPV3",
  "key6": "32GcGkJvJnw3kb89zcawDVryRPcWohtEhRjZ5c8FQ3rK6AB9i3sxpCrdYoZqaXQoSnZGysosf8vBLqZDCLRyJuP6",
  "key7": "5YdkERCxzTRxfFAqVDN4qfQgmZmPpqRANyYiieBiTmSseNAS1DsqSTsWo9ambtpJmoUZK5euWvMDAzw8yFkRX2NX",
  "key8": "4PsENSDuSBFHaF7mobma6XDEiAko7i3Ch2NiMNrqoYwFtrufqs11uaaTyLxJTynmf3KyWSNvwUd6LPmrkNX8S9f7",
  "key9": "36ULzQB3BhtWW2LfVfcVcNn5aT8NZ5hEpjFHALEBKAPtLBJYKUFzkojFxGCfzYJdCgon5gCPcSQ1dq9WZt3eJesP",
  "key10": "x8iBsXBvXhLufChpEw5rAEKAG8QK7qHztACXFTBBB7MsMj77GmmjFpB3EVApwCTkpwhinbs57muEBGSicEErafs",
  "key11": "49CWFFVNJioTxEfE2nGTXKvyR2KQKb8SLdKU6DhSLrU8yiuaHJGWkTpDdKAyn2TKKoeuaRHpbGncPcWqu7xM98ch",
  "key12": "M9gtcHHbWFtax7g7CB7gg4b3LZgyYbJ9jZAKiU4oYKiRaN7PFawehqBsFPwMvG31ydNNTXEspSaHf6dsqf1EZex",
  "key13": "2hJvXMVaNSeHZ11nT2tHwaS76q4QjQ8gR4fH6SYJZya5ggm7rMfrMgG3DSKTbodADdTXLpbTHq3eDqsmtn72zsqo",
  "key14": "k7GKcJ2CVv7pQMcujzwWrusmVaYn52Kmx9CkZW2VFhuqi7k8aAMwyKeVM21dGSc13ByVzpcqi77RGeiwDUh4yk2",
  "key15": "w6ymVZVxkw1TtP7xBeb2FNPHu2WzwcYsTQQNDSotYQ5aUEiA9RYuzH1mxvHFUmhwH1eGaVP1HJ71hsGtZQCgafn",
  "key16": "AyrCrPgWx8NeX1ckBmgbMMgFnvyeUE4pYkzqTkUrjCUWPuXKhsx82vgV1aWbCfsToPrdFc72fX2H7daQfExFKTk",
  "key17": "2jdBaYj5opHwnYUhcFa8SJevPnyncL3VSCwvBvDwbG1CvoaaQBSF5r7B8y2Zwyv4b7s268pZ9gHBKaU1LCB75ZvJ",
  "key18": "4c86eDS1ta8d5ELyQbi3kNmeCaqMpdp1F8Vf6YJD6vZ6CtCQwSz8Z3Jm33rV4BnfUT8XRoAruRzFNdk5y4DPMnzu",
  "key19": "5sus1pCyHi9QEr8kZicdeJWxZdW4FNQVKdaHtBuuEpRvJ9dm5bG3BsdJD4eHxhVFH5sbZe3nCFVzvcDJpJg6f5an",
  "key20": "p7QKMqqNdxW2uzLu3u8seZQfq1ZEiHVqgTf6aCZ6raYBefjx4WL5VjVxVum87byT13a1UEdH6DajLju18brBWDv",
  "key21": "WnRimeBKSwywDH9YzJzmHhKTnV2DojZPJxTn6Jm2Z2wyNLocxhsYHHLHeygXhwcEorfu11Lh8MXU3gMnpYyxnV9",
  "key22": "2nMjkVKaXMiLFjptUZkVbEs9JbVHghgUzNRfEArWc3fwwdZ8QmD95M82if3YvApYUpsgQyNEDVwr3FFRm8ApF1ie",
  "key23": "44aTpTKCVupbD2KW9NEenrEQ7TBhtFKHPjMY4rJ87ZmmMCjvD5X7kmqTWhs7f9HCCpny6HK5efvLtXzDrs6b7Z1D",
  "key24": "2nWpKmsFozmQtQM3zhyzR2DwsJfXhZe3ScGL8W4yEnwucTBesKsPMdWiXyKZvpiAkCPseYHqCfHnccegrreoM9YM",
  "key25": "M8Cz9k7CQrmPbnkMUk1dmmKkbQ7f3ezWVmLgrcbGpqpEicKwhErrS1nYuoLmifejMT2c1HfxeQF9hfCG3GwpBzG",
  "key26": "a63nAStuwYG5gRwVPtW1ECMdi5uZaqEu3jUMvJPDVBrSYpC957gm8AZGJz9HmMwSrkHieFxEuCwFuToLYeyLsNc"
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
