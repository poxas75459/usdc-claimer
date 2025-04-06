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
    "VQMQdRnogAkJzTrmtkqDuK7NzkbN3zH5meYMFhVMJL8SkJV8mBFqYduF8wuVMiQ4tSPdNzzLschxUZUkxHqA7zJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZBZVWxCjWBjSi1o5PhZmreShgGDPzeCdzEV8FKjAc4cAKp72o17eQgtBsmmTZDUciUVRVPSqzfnwbtYxUFWgjbq",
  "key1": "4t9mEb7DvADajPQXmmZuee4aJ66mpS82bTUmX2Kf9TdhyDCqwENgfR1CDW8SRbawBdVFXFL2vtFQgFwRytFVXe7",
  "key2": "4Yna1nBpNFZuF7BHtQycps1NGZEumrEaqV5E1EhEpQVDtFUjdwQZiwRHBP9sMXSQS7RnuxbkTM3YFtnuNTDNYW1o",
  "key3": "3rTbvAaGBtkyfVK4XpHRToMxfxEnCMVMz8LckrvraSNBhHRNcjLAsfNCEtL7JtprdstwK6t1AR2J8y5z1L2AgBnX",
  "key4": "4NC6XFanLuV3AtcW493wdK4UzzdysvU6JFwm66N5Ku4zRvLAHqFEe1eQG9bqXoeygKxKNizcDyZKXPGzA2FB9f4R",
  "key5": "2LzTkSZa2jKrack35YTzWKEc9jKKMFnJ3bzHZ6YvhdtmhrK2sMtxjaLjwcdMBt5m41e4R4XmqY5pgRduydzgvGME",
  "key6": "415Ca72XGQLTA7ZGS4kPW41mLjhpwTKMNDSMbCY872pSnUJrymV4A5d3DPajrGyzFcvPFtZpce32C9sJSFGitdoB",
  "key7": "4fvBis4x8oM6St3CbR5iBt5shPZDFYV1JyN4ghPi2pUgYzMJKvdmynzVbbUNb8NbwB1zxpcuo4c6rnp8a7P6H7rB",
  "key8": "3Jtff81udfrCRCUgde3peLHbsJPL1FpgCzgQtTaQJbx3b9cxZnngCR22kTbjignBvg9Vgt4raeAh1r7SaDMwEwjP",
  "key9": "YtpMFxkCTrkCmyvstQ55apTGeF7b7ZuJfXDiZLgQ8EC2JTFqJRPNNFKLsJXo7A7W9W2Ua8LELbX7DRwer99JqrM",
  "key10": "53xGP9N1scWqS9yfkysfuH1ApTRQeWE61ZkXi5EtgdWS79zwRyZkrcejKGmsr21zZ6n1daJ27NTeY7WRBRiModjr",
  "key11": "5X1nbxoq8YLjKnAH1hL1BVrANucmP76xAaZS8YJnVuKzexWMGpz6TuFnGTCbYzXozU6bxopXgEpaLm7aPbCfUzUQ",
  "key12": "2rwYfBzSzv1TDmJrzHeUdV3KYVbJs4cCZb7TGqWmcibkxC1C3SPgxmQGRfmdP49HHF3JKoKQZhhs6yWAnU2sGEvR",
  "key13": "2j79hHcLabGr8aJMVpVk6LLMrtfQNCbc9GbNHZqZpofFcLJ8Kt8E2XTPkRRE9NkCJorUuNaPzqWfsQFeYgTLif7y",
  "key14": "3Jmb9AyC5vsGQXmc3oXpMs6kxxZgrkuDA9RWzSoUJaSrLP7HVd3h1922Ngj1u8EEKHHjDiDFr3R9gBVs5P5vPsoo",
  "key15": "4hA9YDH5ggELmGjut1otCNDkdLQ2afgPNLUS7cxfo3PdBvYXwQC4nVrhc2PyApkTLmqbthSnihD9RmeCGXqk1VzY",
  "key16": "22aDsPPduhzrMFnEWgFnPu5v8HEQcfn8KkN8eprdFtKU1JGdncMAW4Kn2rWea7XeLgrUMvLjJLw4sRHwR44eZrXc",
  "key17": "2gWomSNkdoZvFiQn7tgFsUZ6wenhy2EdEZP3wthW9EFBFVoFPKBS75ZEVJLLzCte167LZpaCGDfDhaCMGWJ2BrUF",
  "key18": "3PQAL5TxMaNqXrz7TxSiZzP6upj2kyFivjcfmKK42GX73sgtjuXa7rwbEKTryWLMceQ1j5ffMZgQrZcsMB4GTwUy",
  "key19": "MVQCwzZrBL3yzX5Y4JZEA5cJaFL8sbyhA6ppzkCSPsxSBgwto2ZuxCcRm3VKqui8FrGSsmi4GZTuB9apsPRP949",
  "key20": "cGLmPMAJapU2XKuKfCnAb5FcEvdd9UW9JXGVQtTstgCkpzkVrJ7VN23UfnwYQ64As52CpJMjLhARuuadfnrDetX",
  "key21": "42c5MQY3cYzvotkQqbLTaJiE6yiaqAkcEzqk3T3pTaEjL9tfQyxRM1ypV5benx3sbaLjUkbUsgdzMNDpmZvS6k6t",
  "key22": "4ZyyeddCLBG2rm2ABpLcZbkxMnZaUD1oQs6sHRh52dFWGBLpXXRxDYNqAigs7wxaWJFbSCjeEYvtcUPHrBH3A1FY",
  "key23": "5qBRLTaKyqZEURNjVCTVQpZGRZ9aonX8sYW2oJY4ycbRcHMoks3o9qwPcHonVq61hHMYoxqvNb5kuA53Hz6vahM6",
  "key24": "7JjPbaWpHqKXUdkZnv8kJbcAGiRnrwuiAYQTpWYpLpMtySrQuSveaZssthETrHbLBcPop7Dkv7c7mmf4hba4QXH",
  "key25": "4uNwMkacM82GY6mUxy4D8zfaB1U5ufwhmSBRtXKGPryLStTep6kJyV9NTdZ5xAN5q6SQV7EkNFQ4MsC44NgTq5J4",
  "key26": "44QfZUHJTwyVpekyBAoE1N3GEmiXGA1k1i2UagFNgmSaS6NHxwDTLwoZgzVW16kTa6xBNQ27mVswe41HNpcLVDFV",
  "key27": "3AtwK1s5jii2WodwnBMgJkABx8D9KaxbXYqDxq8SxBxReNGoAEjx2uS5eEAFvac1gpUVkswUzSb9WZFA48RkdsLx",
  "key28": "64keU6m1crYAvnMgMsHLs1XjGjvYMMZFqnQz85FH7CoTxhnoxxBmUSXnVMAzxvE7dmVcQp4nGhTykJQndqWe9CXU",
  "key29": "2fA3gCgGcCRTYDYV1Tu6hxGkFAAEa1WLMpBtTxRYPasZ5pSPmEnZH7Hh5ymeiSVprkiMtGGCyyPDB9aBVib5QrEV",
  "key30": "gYB9MD7ggpbUgB7hxeK4RMX9Gsgz86XVyj5m7jvHX3Wt1WnxDpfrxr19SYkn2ZxhQCYnjQeQNKPZYcTW1TR29DR",
  "key31": "5bt4C6Wx7eF8C9SfN2TzfLgdxNMciCHMDHJXbDSApP49r88VM81xx5RcsCW6Bhf7P8rgoxRfAchZgPpieQUDT6vL"
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
