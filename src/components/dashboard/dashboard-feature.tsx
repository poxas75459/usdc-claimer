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
    "5eyq8Tg78kBgb2qdihWSAVmUnhTxxXYkmPZaoJWPWMR5cdBGXFQ2sGEWxJU9z6xTVQF41GnjcKxME2CYX7srymAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YZCfqGBnmPBX7DMRZB2mUG1sKc3SynACfHJ4XjZb7bL3SG82dPazCQMmaNAwzuAYvV3iTad2NDDjShfgd93wez5",
  "key1": "5RJmPFMA2JGQdvt8ebbZQ1JrAJD2kT5ETdr3k43kSXtnNfytbh9rsQtduwckJveEEgdqemFgF78J6jMy3UJNWs92",
  "key2": "saKLEQkcz8FeJWycQGbxtZNKHyfHxmbYhKgXNZuLEjPkHW1GEFRwy4Yxx5JpjAsyoMFceUiVgkr7kNr1kBVo99G",
  "key3": "nuEFRTWurto8n7TxdK2aMRFTQf2FnkXSPaenHCSQyzwhe7v1pJ63m2oTwKbhXDsQcaZUGc1HYsbg9gWTerpUoTa",
  "key4": "VyjyVg55BnmdSqZD6D5f2BNfiMVSNq9ZLXZSJoQFCvgLC1R33zuSzi386mXU5Z7Cbck66JqdzDa9r8bKUoMkiNi",
  "key5": "3eoJQf8U72r2A3QqQKN8neTkYWnFJi7XRYDSoW2po4iXTC8FFCPFov6qg2DTje7HYnuoeouZbv9GHc4EvsWkMnjB",
  "key6": "22TFddbrNfkseC3PbjKngf8wadRZa3nNqo4BPuneBwmzz3yXhQHpAL3xzUe94WfpCFkAumJUTWwgK4LFzoGRKUPP",
  "key7": "4kr3KfUXT9L1HuF6ng4rVEeg8WHduhEpNem8CgsnCaKxDsw4LjzaKbbVp5gDy1yAietm277juzi1QWbETKipsiDu",
  "key8": "5cQNpBDjRoK2Jhu9xyEGdjsXHxAoXPjB5LugXZ1MGWLTpxPZbczJxqws1zQVF7Tap1qGqGduzBCzJsuDB13g691b",
  "key9": "uKXXjitBFV8Q9PBKMuy5YaqDQJoKAMLE2e6ZEy5ME6b3yeCnf1wCmWojdyYesukvZTEpfCAsZ4Mt6TMkNLLH4FT",
  "key10": "5rPiKVUzLUGUFykVeMBu3aswRcJ3CGtHpZ6v7o4HLvzNKB341g8XCvowhzpcYgaW42pxKTTGg2JpR2mf4dDFYg28",
  "key11": "4ZaBJfmUed4wEDmje6uvDzV2XrYDvDLD1AK89C1bLadPNvSwETYv87f1YvjFMKL3LV64kkyi14FX8wBJYE686oPr",
  "key12": "2Hfans1vYJkpZ5JrKxS5T7Eyfzi7uRGqZTeB5AAtspWnD88ydCskXZ7G9FKUXisGEBQrwEXeXsC9QVjUdDrjRcYg",
  "key13": "9vYyQzKcZ4QDjHnVM4rDT4HtmKmaBqwcPBwCwVpFV5XhiEJPLYdnD8FuoLeksEfmq8bJRDZVd9NrchzBwa1oC3T",
  "key14": "41ByxRh5edU7b152ZueMzaFsLBrSBoKRzMGy6SCEnkxnKYiKnSXgQoijYwCqyyHfZzqFMFy33UrBkGrM5i2r8DvR",
  "key15": "51i4qUqVnadM2JPbj7co3HvuQLFYSRFALj8A8ATaCqcGnbwuSPeMyJKkEUjpUBpVDJEUF1H2cJ2Befx6UKRNydKz",
  "key16": "467Jp3QwEEvJ1Sxo4hRu5SDmhMK98sJz6xRQx7JrsS5dwyshKu9VFHr1RkwRBoCoukJkWBGKQuYjJdMkhCfjwmzC",
  "key17": "3vT22oMuTHbET3PK7cPtyGMJeiLBQkp3RNb11gAw1dYG6nq1AYs4ZUd6JoDgGnowSjKpzJhBtakiaviCUwwtHXVk",
  "key18": "212g1HW61jnMWJUV1X7t2uSHjHNkhpYzJdk4zgJgoD9DMnNepTKdCSjsFpfSAQanFESpJGdVNtH5gjYjUnoQF6QB",
  "key19": "2WDyxnGnNHXcv8qr4awyLhSTHNF3huqmYcqgQuLtTWxRYqWZeGNRvfkKGeNPxzYCDED66nN7T86NxXB2VavhW6xg",
  "key20": "V8jdMCMJWBn9PWMhSvDoiXAMwYHA3CxHdtqhwYaRyCZahDpSnoWiRaXsBGhPrZEbmFjr7cQfD9UsmLkJ1aCCdXN",
  "key21": "5BXnbUGPHWDezWrK7ev6vLkfejZ7FixyB5FEjB9vwYhZmuoUxENLrRYw76LVHMGcbF7uVaW667GdziWtPFZuWYtK",
  "key22": "2NSTzzb6VVSwUmGvnRYQaqdAkPAvLWoKHobyVJ7JGN8GKWDNr6zqpsF6TomQHfwtarY6hShqgFgDHZqHmCsqhwE2",
  "key23": "7DzcHoJLZBKxCFmiCxyRpgy1PxzH6Th3XmLbNK4cMcrHYb64uVuLRwmdx9B8yb2mBPievCPrwbdRDcgsm8K2YuU",
  "key24": "5XC3LkcHZqY12z7oW94eXckCT7E6J9vhsXRb4qSFzj3A9sXNxdQpwE1CfwaM8PW2mJjhwwxAuvNDpoYnprcAMPs2",
  "key25": "27uVHFzfdCtPi1GmJoDBHJGhrmE6n2dggudSRyt2dP74dEyRxicv1KrNTK39uT3bkNKNgXKRde1bXkMxL2sci9PA",
  "key26": "5NtFiCMcMScHkhjpGcbrUptNFpfE19UApBz2qLmttBxUiBUoPeR8gdrSRurKZyGewqgA8r88jhW31HGGWzoRmxbD",
  "key27": "etAkAw2HB4KE6TqD9L65Fe8FZ178XE5aib7tsTJNL7Zdpp6YW8zQ9ZgDPtwxM2e3BNyzSqVdXbS6tkoTgcS9Nm8",
  "key28": "A8mVYV1FXMc4NESv1g4oos1PHo7jF8rFiHCQFZBUMfuLNty29faRKPuMutRz8VJh85Lw5YKznfKMZReUJPyR4BQ",
  "key29": "tCXoybmHaiiaJjv2KR2NqZrFPb8eGq5DU5PS1QKdfJqgmhVsFEwrXuneA8sfsbBxRFGckM2ty2AMH14z5Uz4Lyt"
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
