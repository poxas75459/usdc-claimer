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
    "4PCDEq9AaLCjvbkU4pRYw3gkSkymgJ2pvPbamFLFhRvmCmJMKJ66uLXpqNJeMMaqcxfLTf1qJ6Z6w9LiUnia6psT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y5cYbwgnhzqPLoucosbKff7dacpox1yaJCd8gq4wSeTGPqKyo8LJLjdZ9HP5jZGAiyfFFxBvVmSzECH7Rx1AEg2",
  "key1": "64JMPzaw3Z5LwsGg3FewuvYvvR3Q5HptfuEjHYmUmRk6FyxoLXh41bAo7FxUrqesk6nGVYdsbVyrVXZA1F9tzWKH",
  "key2": "4KPkbuy5v47CsxEmygotCx8gYfevSn3EDGag8xVjDmAifM5ncRdCALJDkdJCPGdkoUZMRWUG2gnuFptH1P7TGz8X",
  "key3": "5SzBLEDF3bRQg1kQkCNzvHNBbRkaFYFueoaoQYGSPUCAcxeLHtx9ZVMCwBRhnaLrMhRpc73TvnVBdHSJXfKwovPz",
  "key4": "JCSR4ugco9YBALMv4JqckZUcCWKZgKoU9axZKBzdoUFartZLorK12t6X8gYSQTvHgaNqFTrQoJvESbLJCkjM2s8",
  "key5": "599z73MRa81Q9PoV9ALKqVSUHLrEkBvp66nKjmz5ov6qLbE6Vf5Rv1CJurh3TaymWNpnCBUFTRVNWJbGVsRSRVmH",
  "key6": "3SsC3j4HMm25BfUQ1DU4P51pkwbMwZe8zfwv3Piw8mds4VUL7EwLxz9EEfDhZFKCgdkjFKw2NduNEV7uyc8ms23D",
  "key7": "5Q8ZMXbh7277mktwxtQaqc1oxBGWzJGpXiN1ioaGoJ2t1EPceoGJrKNGq9gmvbgi4PC6bWsHBdkDN8sarQMcy67h",
  "key8": "2Ta84octzCTJTW44ZBW3boymVBQQkZ6CrPvu9vLkH9sKh6aEJy3afzX8M5KWVJnck3KpHgrDuqskL4WcLJupAvw3",
  "key9": "4LtX1dktTs84EoHMSd2MmgtndW8uvpjSzH3PSHyJB3jtq5sDAYFqeAU3gH4DGbvZJQDZqTHmupmbv3tukNZpdftB",
  "key10": "4gsWQsX2zVHtTicB6jeb2hrg6btGt2n2jMCFvX4rkVbPwZFqbTRHNV5YhgaEzYeFVyeobFcDqnBzsbe4ruRg5JTm",
  "key11": "3cPnNmVmHGFPPCtFUgrpm2GTqV6Dqqpax1mk6aSFRJwKRru6SR1pkLMiRYnjZ4541L1Fcuw2XriSUyq5hNtk2zS3",
  "key12": "2KbSyCBe1BbEycD7BAUZgv4HUn6L92S4ZbxeNZogFGCWkjFYkXi1UXabPieWAW5WKg6Puy3MFUPR4GMKtioboRBw",
  "key13": "5f1L9cKHhc7ivt6EPSMFYgeK6sZDgBsfgEpekieSCoeGuiH4XRneZcbZMMMWpWFf7hvgyPbgFaYJ9Xvy6L1Jo2eY",
  "key14": "3Sw974A5B8B32cWiQbbKgbMbVM5NLc1T3WYciKK87jHLA1Q5t3k33uhYPZ1LpHw3KsxJyEnqxJQmYjcBk7Ztrip9",
  "key15": "2Jn1gPaQzVbDrALYTUHGErxhM8hZbRPRsYU9yPrkwAA5Q4z1DP8tbeVzjLkffW5n6bUNQXwkKXFxtKGLXKysRk9G",
  "key16": "38aFp2rB3dbPucfpTUeeXni6yAi1RoP7tBnc7kB4eMdH6fdhWPottDMasJXYd4wW26WssBcvCnJp8U4hrARFYW45",
  "key17": "4hKQv8CyECuZi3yEVNQvQLQRBMXdMQcFU3zQy78zM5x9rYpsetMiJg4NxWAxxkSPGHsTbunVDF19z9zkwCLYZ8Av",
  "key18": "4vEfEt5dt9qUBXnC83FA9Li814ccVeGf2cokCi3JCve9dyqiDqmWf5haCWaVSv64n1dHtG7Mxutc2nM8R2aqT1BP",
  "key19": "ivLxwVgQh2kMk6HF6MgHEH3AqrZN4C1fZcfUUKzgdkZkmQs1YqxW7H12C7NBHA321MWGgqZ2yrFGNBbYGGAimuA",
  "key20": "46KVD7EnyBcMgnC2UnvNyZRToUBZd1fNZydXuAUEDLWM8GT4KkzSkMtW653WkYdzccgzSLzXZ61mLDm2BTT6Vmsi",
  "key21": "5hYmtHvUhfySPwCAubLGAQLoCsjq7TnvF8upxKF4vS49wsntBbKeskzDHWcokzXVdkZSqV5zhh7PofrG4h2DYiJ3",
  "key22": "ppYBYR6JLpfRPYw261uj2W4BdbjUg9ayZAzkYDibDR8iXTLxQgFUH1pcHgDNpGxgGDPESMGFRZQumLNa546TCVQ",
  "key23": "3wh7JM5jVNHMTzMqpW9VWAPpRNa3NGDzowkp4LonCfhMjWBHhhGg2LH5nwnWCj9qqojXM1BsU2mbHgnf2oWk1BiB",
  "key24": "481SU5TpWRgmpQjsHAPGxnXgdDTDthUJRGjQU41owxrG9MmzqeQvEcpoVF4yZhfW8M4RjSxHsNTUzf4ukz1K2yfF",
  "key25": "31HUKdXp3gvuKcmmw25MnjQAjku4chjZcuYrj1prkx27j7wk3QhvxfpPRsPEpXeNtEtmTzZPCVXUZFxHyCUvVebB",
  "key26": "2NFgt5fieZtfVAZ4mnLreTEaexUJYYXoEpdKbF5rAuWBfFW8LAVLcfQTWDsAd9W9evuniVVYf7LFrs9BpZ8V7iKg",
  "key27": "5B2nogjy3rGewXiq6XPJxtjHD3jke4xXzQp5GT7XbzgH2Nj5i2NqJEoPKYK57yNNfqgEgBxaDgveTTLcPY83KPJ",
  "key28": "4fMrwi67ea5DxBYGD7ey4mYXiXmA2uLyHtBzeFmuuijdvx4rJG1qVrkkPys8u7ZAzq92ExU4VGsJNE6BQgFKexaL",
  "key29": "436FVep9qtHkWEYCpLNoRcS9DGnPxJZo9RWNUQA5wHJEkL1ntvf2vSDCKZYKCQkHQV5LfGG8j2zgGAo2bCy1dqg7"
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
