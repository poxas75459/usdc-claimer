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
    "5KXjCJY3jfCnhAQY8qgyDUgYLJeLtGbcGjArQUwwKh1H8388Zyx5vkgEwi9emdXFsX7xSR7emrLTBkopb1tbLkCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zeKJS9iZgKknZiNb45BvbtRQx4EUGg5asHe2v4woDtzX3rGEBuzCchM8acn52s2YPeFDUeEbmcjFi3Q4ns8spRt",
  "key1": "5xrkxZJYAH8aCs3zW26oCFdubLmmFe6wGeT6CdLCVXeyCNnDAyDwVFxL3SCRusB569jS7jLDhZhpHDnXUK3AQ1z5",
  "key2": "szBQ4AvxCZG91RGhUJwaQ4GEBwLogASYWrBVs5Kt3sUP78TnEMuM6YKJqgJ1i496CSfqqQgtWHuRDW4YMGXgiDy",
  "key3": "51THe4BMCUHBmSQp4JGkyE85eqVwxZDLBQpEshigFM7j6qAR1AVeHcHYa7WFd4U1kHJaGnsibeaYT5YDV49xzpYD",
  "key4": "621W8U21QadTergJcVwTYWrsHwrepKoWH7K82ueg8eeg2nFX6qiE35SdktavS6eFWRhkT1sBkuQM1KbLZZXKw92E",
  "key5": "3ws81ByQxtsAAKp7V2N2Q5DpL4w7Lf7rRy4S5tiZdm2PAwiqEevD9BGZ88f3is7PZGkHksqWEacTn3cinKjGKsob",
  "key6": "5WR6BZ9RXPJFHN6mPAV987MWXWDHqJ17HuH94pBgXTrR3BZ17Qy5WyV71Q9ehTv45qNf2ZdyAqowW71SB3QSYA68",
  "key7": "3TvCR2AbNgUgAJMAeT2dAmA86rNrS9NLNZroSEqXRNExfdATvYvTkswdhrmHWrC1PGWyNfzT5wTQFGDQtF8HuyD",
  "key8": "W3AsbyRDxSWA1fMZ617QFbUDChLppi2XMTaXVkAWpyXbrfqrLJCHSSUjKAio7MpYt4ckjEZo8FCQZbEZs86rcVP",
  "key9": "5wACDfE4kWEc2GjHoq61cMf3fNJ76k2VQjLBES8tVm5ksMHjD6gWZJyCiwMxjTB7eUFuNyxpAooG5z4Y6pnrscsK",
  "key10": "f9YojKXX1giRDW8oNyGpRg1aes23QwAnY2j2UTccmRC5KdEeyDi7biaq3roexyyVPUd26oYAvoR4R9xzjeFtzDh",
  "key11": "rvFFDZYjSDHX7ighreJYJzi7VgHKLxFQf13J9U8SWm4C8KXd9AqTkVn9ccu3WFQkt3KArguJg3yE4U9PzZTgjnY",
  "key12": "38xMeQP9TU3CWALXgP4QFdW6Y2yzLeNCbQ5Wij4dqWSHQ71wekCU9qCqkemkLrTx5XfK7Z512tvTHfG4uzYwG7Pk",
  "key13": "3unJK6ULBzSbE2NKUqFDNZuPmtQmkvoiz4ELb3TSiqb3nvvWwoSs6BbuxxYfWadCsTbtom64S3xCvvHsFQZfFr6d",
  "key14": "pQNvHieN3DCvpVvAK36NXPQeKG3GC3hNuJmjX9BhXDiJ3uuQBC6WHzR2hq2HYwJCXTGCGtYPw7dEV6FqADWvFXc",
  "key15": "2eJdZsAJR6HysWpDJ15BL7Uv3PE37GXjQEPwWrsSDRg1DiSPEpGJCWzzJb2Mk2JyftwyXaERUevT6tEzrmUHNc58",
  "key16": "DAmo9Kumc74JbvnkuBm1knw5DN2FmW9F62MihQJH5k9XbnkfhDrAT9BJxdkiaPCk5WMhz5oVreTbFBykhcmPJc8",
  "key17": "41G9BWqPesQh4gFRjaaJgAQUETBtNUf9UhWNMRLa2DDTsqGncL7QurUWzNWzaDDrPncYvGB1F1mHZSU8aWafsHEn",
  "key18": "4XgN9dpo9vMixauwthHCmbtteuf3zwMZuCar5mMFLbWuWJtohg8mqMogC5jTNFqN74sMaYUWoDdBLFBfd3AqQhpw",
  "key19": "52DdKMgL5A581XskkwYNRu1zRFmZdJanznY6dRusenZJuDRjZySM3EC68P6C9r3iWzxFebDwCh9tNeW61S9MfTY",
  "key20": "5guv7mJ8kSQbm9zp3cmxt1XABuHi8Rp7qkyjmqvfkcMPzMwawLe7n1mEDT9ocYQgwzedwU7q8u7GZ85djbWwwBVm",
  "key21": "XJkUSNmKkB5tmzXpm4maWgStQZWvFjsLkp5pMzmSvb1gQVoYxQ6GH3sUU3Smefux6YFMSPfBRRxpLo4BH3FBbZ4",
  "key22": "3nr51rqnmvroNaHRKoEBWHqNGcARS7GF9APtcQeB8FTfEomW8Knq2KHUqHJ8LTaZbRQSjmB4ppYWzgGpNuYwezN2",
  "key23": "5Y6AVE9qkkvewWyPSsWFqYoC79kTt7GpL3FWPwW4HcCcHSEcpo92wswNsGQ4L6w5LDkz3FiYHUfyqduxMgN89Pww",
  "key24": "28M2Cjb5v2NdgRJ1Ukg1QMEPY44Ct18Lgs8vby81cwHZRgcRDs3tsLtv4oahZWSo479eTLVBddWmcFYtscr1z152",
  "key25": "41HNa39Tx4VsDcBepUyz5qZvWXwoxsCYLAgtkqhbMRBrazSRUfqyoKNrf7Q7ZHQCvLMuZirTXLPtaRdbvuV5GC8M"
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
