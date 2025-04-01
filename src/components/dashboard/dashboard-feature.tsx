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
    "Ev3fwJ639WZCfVab7XX6k41S9HrhP65k6tggJhBTHCxjTQkRBMNWRGqvmB5vvRMKbrLC5Y3n2bjZDWsNebCBr4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qZh8DyZBPufEVQg6T8PYkDqF4Y7tKSKFytzorri1FfRY9aes6nE9aCUpSV1pkXKBbK4DdxvDNL6zkfQNywHw5FR",
  "key1": "2K6NDgNAyf1YY6pHYoyTK7QEaRVRdwMc12sX8s9dMrTW3rMjuaHotsnYQdVm2cd7w9Rtwt4pGysJGoXrK89pchWg",
  "key2": "ZjnLw4RcCsqAhJs5st5CHqtNHoyhnpMXeNCyt2g3hC7eRF8ruw3vJqQWGyfKCZrtnXzgWMz5cRmfdCCiX5QGAmg",
  "key3": "5UAKVDTUzxWR7q5277d1K76hgJ5H3Wj5KUJoWNVZ9ayn7pXbfnB4gSdVbKHGssBLPSoaEz9vkf1wuh6uzD1d4HZs",
  "key4": "4AXWRn1fFtc9Bc5QveKnjGk6vNYJJNmspUM3QdVNP1EwVx8wca8dsoUfvjZdJZxxWwhZBe4rtztaQTRKBVNuWJ16",
  "key5": "2bREjGmCXZ8e4pUoKbpvNp92keNQzs7HpidxGxwVW6jFCvxPiUw6EAZLNxVcczLHzy9qSFcYTboXmB3exU5uFpcQ",
  "key6": "2h4AvZv8XVtQFMJCCvpZyx1avteJH2GaY3ESRPmX2PFcmhi6RXsph3sqKJn98bAqaM875iAYyx4EjiYLKS6WS3kv",
  "key7": "3CDoWC5XVywNQ3fVeTzFUchA6GEyCKV9WBpcVfVLHphPjoTU7odztMv9YQEPbbLCbkDGyNa7zggRjAFkfgXprBev",
  "key8": "4mBTejMyUhkjkJkietp687kbHsTZPVgN94Yhffxy23zuxJkRuXAgsUGTmC4A85ipBvupCUVT8j7iVM33YuthNQMD",
  "key9": "5Dmmq1j9HLnqhMSaPoqzxN25fd5CXPWvViBkcVNBGsWn4yDDsL3NvrHX2okkNEGpevb47CETbZJTUPcBKSfuYbCG",
  "key10": "M8qvrGQiF64BqbkG7123rcn78oWBZ1sRPSDkXSPczDwDJTXCTaJqzGrVDTD9eCXnk7mNPPnPTzzcJeoS3df4qPG",
  "key11": "51LdjNKWLvMstoqoK54zkU2rkzN65YiHmoHtfSJpnEdqKrHtpKUTxVGgaL1N2NNePTkb7zvTYRhnMTZa7cRm8Lgi",
  "key12": "qAbKf7ztHiei2ZsLoXDJRYQsSFu4XStcZa5nv4qBLUxVGtmhdGruexcnidtGzgTxF3EbErkjfZTdd5xKMkJYyYc",
  "key13": "47VTDMy2LYKotmp4VHCicytaqLTnRxVCQEWT2UWu16oEbGMBVsxk18RvUPucrSS8EVRaGAw3FchYcMY4F7ZGgDL1",
  "key14": "3JaEFZY39evBAiMVVD7AXFKZFU6UVNXwpBdanj5dwqWPHLDW1fFMCpLwiKY1o19bypDC5qCH53ttXDsRLMxSKcb4",
  "key15": "8xtWfttPhimfX9oSE2NCvs1YznrqQSNhof6A7mEYqLxfvSx2UxkLWBaondFNqhBSKxQUjmEHvXLUa2RZm9HSm5k",
  "key16": "cnRuhp4YjvDmmU38n4eEDobdjXqyytFcgGJGobL4ySWFjv4viqHpfDmpyazzKwQidcvHtXQs7HPtXfbDYtx9wjk",
  "key17": "56uXYYqwq9ZSPkZVXRYm4fCdFhZHHjY2rfNmvgKoSeomam4PFTnxtHAveKmRcmVcwSZN7JGXrdLk5bXSysJ18TeU",
  "key18": "4d5pCKCis7bDfhKMhnR8KZfCYnPewe9HntwEyuasujLhgbn2j4vgWnWqHZZrR7X9dMaRKszYbhGATnxNmTNRJvd6",
  "key19": "5b9Uu7jwHHyb4mn3GX4hT4oedfQuKKqxfhpc5A9zKBVAzuXdF9HFCmk5keoWuHDQCfKdNEXCqUtyhhCQTYFJ9pWm",
  "key20": "4CMm2fFN7WxTcpfb4axjFpRLPoTzXk3vKu7d9q4RrMSuNJ1CFp6eLbyKBuZZNzeWVYUhaN5qVoyWejz9ZaAhDf7a",
  "key21": "2EpMJcFfNzsmWE5STxTsWWtpzStwNUXMWKK6dMigxzEsKz554JSBKkeyCyKYmRiyp9hkmvAazj7raEQ7nTfZv7uj",
  "key22": "4k6podWRrn5hmdbCjPLnBA4fE9LTJ9FDd4iJJhYiJG9Lar3Wn6cb8FPGRfvbWXaxzvLiAPLpiiBvchER8DrTEXWV",
  "key23": "2Uy9AL3jF25ig8s5JMAu4ELPYWcE92MrzDBrEoCBVGM2o6YqPxXfdw6jFWLPVuwAV7eBAb5UN8vN51gMe6Mor2x7",
  "key24": "2NDw1jJNBe8EMq5y5rLL5bDMwHNbtitd1WwYTqSE3nKMv71WiRafztza6464d44RiBnzGscmWxmb62rRyUTUxXJe"
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
