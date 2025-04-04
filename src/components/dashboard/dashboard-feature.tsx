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
    "3ScXsBEwZUfsvc7bbCpzdW7Jb1S69EYL2SGni9zWwQzAd5BpuKZZAV24i77yrKMuuTkoLRc9P1TBT1ztex7KTb4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YhQHuH42jGy12JMnfSR77FtYdsxrwqb9xLbEQK9ZyLqEbgxVeYeUoh28xPT9ut2ALbp8Pr12pYUkU8GK6FEioWM",
  "key1": "3GBfhewNL3j9ADSFhnxwRw6bY83AksFFfuWxs9rNSKB9dpcf5kd6VupLky2gG4jbf38U5EMeM3JBwSLv2GVBWeGf",
  "key2": "3tYPUTXhSX7V7cn8k4XXMBzfbcESkZdXxpEUStufSiXgn9XhQpW6B5ic7SLx8s3Gnd6Fib4oKg5o828h1mzQBU9Q",
  "key3": "Xwiv8bgNJHBj2bADnjMvXtfxdqRVAYkV86pBGJ6fqoQNvhsP7aVshJSVGnHYtrLYk66iisBa4atxBnoKsKo4p5J",
  "key4": "27vfdjmaLrJi5cN5nNtS3jek3nwcPidJFvRmbaSGtzpw1GiPNofKGVeQicqbqKR4nnTMy2jzNxszkJMX7SuRYTe8",
  "key5": "4N9mR3yH7zhVmS2okCq2tArGGotoUwqKFAAuAL4sEvBAjEjwmTdZEU29Ft8eSGAu6LCTVMNgjWkeV3FzUQ8Bud1P",
  "key6": "2phtfpP99X6gPZyKAiBDwXyLikC7KK543J9p8YsEmDqV8pebqVV8UHisEEey42HZfYoKvTXbViqBfp2BFWDL4wsQ",
  "key7": "66KRDKykfzk9hCX1kX5hWWdUXCj6F1aGbn2tkTZ67krFr2LEbRbTeguTU1MkXufLpzqE5rxdks5VDgsSKKS8GCxh",
  "key8": "5JRhcptGKKM5xnAzCRR3ajsKhmDSGsXX1KDsrqsVm6tcG2Xu5bih1jTade38d3YBBNkyveT2rjNeVukq5ugZAvft",
  "key9": "rYrz2dbZuzq7E2jAJQqSpbNUzAGBMqDcsFBgSMpL6uPkbkicSm9y5SpGXqur8zJSEyTwnVms63TZ77w382NqrU2",
  "key10": "2TfmzPqqg1m2hqbkKm4yU1zwNjRUZconrW9M2gGm7swejTJgasyizugnJiZRLVXaMsiJWBUWYtk8mDsaWbDcev7v",
  "key11": "Gx8Rh2jQNwEiFMP9ptPvRGoJ5QBGHn17zxkFEGfmpbH6Nh5bWz3fqpcqnjCQ2vfcdU5vBfXw6XGwJ6T2uayKvho",
  "key12": "65i3kC7X94h498wtLjnFS4DsrMpZyyqiFQAebcRwrd7W3g6uXRfAaXpCQMhkYBYqzFY7JMHHEvjVTddmnkZweCMs",
  "key13": "42Eu7SPU8fngmgHrGL6r11KW7MCyr6b5AxuFgAsvwBibv72uFAmnCFgzi8hoZnG4u8yibzFEWcQ23YhNPzofZ7PR",
  "key14": "5jPgcdUqrfmZCEwRn7neZ6gTuCArtidhqXB8BpBNWVnoSNTzirULWBHCfoaZG4u786sKu3vA2N6PHW6gcmyrt54L",
  "key15": "3MH6KTjhFMZadC3FebGf68owqgdEyCHi6stbScdkfpxNnV5yKFwPMPG29sGkWn9PRjX1H1rBwYY1vyHEBbGoox4H",
  "key16": "4KxksNfZupq5BHQaxytUSp6YTwPPewoZDseuMZLXgFxE1Xq6Xgmc37TTi7tG2LceedTPA2W9QzaHDdFcreaLbKhG",
  "key17": "3mk6Lm9PaoeuLRC3x4qK2PWMtoU6LbLMp2iP5MEc2S4qZDWiM8iHyRYFBj5LCKSfPQmzv8iuchA9NX8ivVRJC7Rx",
  "key18": "coSLoCZpBLPyuimcQnUqScg7h9AmwSKLGMbMJg7hVTeTUWnRhio3YLe5eawABBM99t3v1evnQhSZv1i86ZJZxMV",
  "key19": "5KcSUvtLfP2BdqMKAXvtf4kdJ6K1nzBJG9KmVGNc2wciiprRK17sUv6c9DHmrXU1aiQKTLw5W1nbCRP4z75opGDA",
  "key20": "4XT6PA45gmZRxxZm2evZTwx7732AGonfFN1Qy1wbBux84xPmsigFexW9S6RRQBTQ9VzFv1EDDJGDCaEhQLs48HG7",
  "key21": "43cJGWbuUD1RQasH8BhvsnbW63kZBBiEg5YzaaoGp6bEV7rs7CTLW6RjH4XgejHXXSpH18AVVjm4TWx9D4qNjK3d",
  "key22": "52D75pDw3cw33agyKMrafqCY1vGgNJpiiaBumZeW5BrXZTh7bfApvHVgA6qQ1nyEgWpK79ZEwX1NZPTt1QjkVdX1",
  "key23": "62iA5HdVNw8Bxr8nnD7EPEUC8dinQ3Ljw7m7Y58wJyKk64mouDiBPWQRwogVgL6jqYX35gfFoYF466i5yjdhW9qi",
  "key24": "3jXeEuNoZAnRzPxnnZVTgHRwgMA7dXheHNyHowstx4XuqDaFzW1ZEt4r7t3hZfCxJzmf11VmcJCiAudsbKUNxBWy",
  "key25": "2ENsi4KhrEDUWEX3BofoSVMAcHweerTS3M4JdcWLaqbpTHqzLBAJt2r4VS8eoyaDEpaiFC2Sv4ste3um9xXburB8",
  "key26": "3ZfWzyuh2VjMJG3x6fjjmcHVcSYxQS9YKr5bFEeLT4wfSWkaqoqmADvmBi4Ks1h7zes9mDGUhgWrywHVf4rWrdAU",
  "key27": "V4EZWC7L7naDsGYFuXjAYZtSjVXtnqKsd9AxsjgXcZ93uAAokX6RiPHgyPTtnMErHR8YVUdLFZe7Giq2c8CaEnK"
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
