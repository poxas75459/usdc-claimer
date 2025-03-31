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
    "4Y2CAVWRenNGcZ1Mid7aEMhR3sDRAb4vsmWAfikHGDmZasZz7asSn5JPD9uF83MbT84p1rJgnrRPEJdmzvTn9cDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gPy2c4v67N1hnoeHCk3ekaUXnTMEUwqck8trQYbUN2J23JwgDFGo1rrjR4Tra3wvXYPHwM6R1Yar4mnhFpjW7Gu",
  "key1": "22HeURtbwCre4W8j9ZQk3tw7X1QBLRPswUY9AogPuqk2u7yupuHRMrPYNWyS5fw6kahSJM52U4EHnRiiHk7et6zp",
  "key2": "3Nv4etoqhZS1jvCdQPJFdT4MmXzdiHugRzoPTdRUSa6mVhbpM51UZwx9Njev6wRAqppugSp5A1o22iJNS6xc9LhT",
  "key3": "26bUpuzmW9J9RDreTepMfPzgdN7nyr4LWqpcxQCpYDdT8zZJiiBcbEAjVBLX5bxk39GPGgTrwKxHnXe4Edun7dc3",
  "key4": "3DM7sEnAPvxnsZrkYLx1oQ6FH6pYmFcdBQbGmTNEj2G5D9bzEGmQaBhbS5WMr5GnSAbtVjU31AViSoD8AhvVkPdB",
  "key5": "5AwPrFT5tXfa1eZ1PLWqBnzvnHXgw6gR6RThkSKEeJDXS7nnGZxzzQT7dCfTsdgWJ7y1N1wWfcdinmENC4pQFJzv",
  "key6": "5gj93spvt2vKr62FtY4mp4BVjoHVyLLQSQKGHt39QesNJ4AxaNXZagCBcnCD5LSxKMMXmBpjPLmSZFpi4VMemDfh",
  "key7": "5cM19SqJWrKLVB6NthRmoqb1wh7xV3Kcrrrh5Y1YEMmBzZXhTXiojYAbuYDFuTDwFeeXgQ8Vn9Y3dQms41oBKg5m",
  "key8": "3zTTwVaxeSyzqdcHbJZwceBManbPEDPWSfAkuaZmNUcMckbwRwxFvoT6dvsGqSRtZEScQQMJTvqfjDVv82TSihn6",
  "key9": "2BTX4RVmXe1GvXgFW4iK7TQR24TjchYJDsW6r13nKB5qfLYBDJ8KabiUbVErX5E8zMyC47fuQmP44XWizKpU2oN4",
  "key10": "3YSzFsPYwjCUktqYGmEekmDHNXKZt8mAuTgjXFVAUDzurwLvMuyyCLX27zYGFcJtkHTpdBwiP26rqbAtavBkTxPe",
  "key11": "yXUHzMhq4gjxk4iaTnsQvpjEY4s2VnC7mJr5geBxVZSLrxyD1bbTrmf3thWyeV7z4m3fGe3RLuQZ71oDLyemNpE",
  "key12": "56Y6unGxKeNJ79GMNrP9rCpK5tP3py99ugk4AqGiTKZR6dZEgCiP5E51PCLMCc2GoYaeuKgb7hVC2uoUazv89ZAR",
  "key13": "4rsdyQtcL6Yn5XngJMwMBJpLHgHpqoZLPFZ8B4ZYjBCPTEVvMdN81oSV4TSrNA92MaftpjrFuVYU7w4FZMLVZ1DT",
  "key14": "NDKB5wKLbiEfUehckXyg5vExNM15jTmsxFYupScom7CnKus2J1Vvk3QsHfQ6iepTgwHLfN1UxL2LSGdT3anCLTm",
  "key15": "4BDcEonRtLvktJjKvpjT1T3ENWx95cTaHFHe4rVgXYDkhN9rrPREi8TdypvqrdAoh76ZfryzvFzwzjkJV2XWGzU3",
  "key16": "45siS6Dxdnx9ja4JsdJ18sUj6A4LMG3fcM9xGYnBoqsxFQEWXzypUxyBgcShqHLGikrzAqDRkpquXmpVNWJ4sEp7",
  "key17": "2z4tooem3YUBD8xAc3rmWAccyuBrQ3yeyN1vFSZVq3wHpjCLEiw33KaUYMqHThy9gni6D4AFv7cYeeyyqspWhgU8",
  "key18": "3rpR4MwDM5vo2C3rTG2fAFGkj3hD7oWDas4p9NWpXUWyPYmoTr8EDgMz7Z6fHmbi5aR5rrPxggHctsEzQ2jRuGP2",
  "key19": "2s23TWbkvpT5iCH37jQATzQpr6rhEodoPUQrA7icDe3j3MMWUn8YcKwKJ4FY8aWCPLsZEojPdgWoxazEQxwnSPFe",
  "key20": "24JstvkXemcHHwkWg2MzJoKc2LuJzKXEppm26eihu6Rd8xHZKMNwmnMuPekv5kjo5KRF7Pncr1ut36ZQXBWvs8tz",
  "key21": "2Jd4dBGjih8bXDKdeCfUCEQs2wUrb8CmRgLvZiajsAqivHjSexUytkzt11x1NqGnhFgkaKCbhik9cEeEGAH2FEL7",
  "key22": "5fK3siwBRjU8hBV3fCX5c8Z8219matUgw9MjmpE13Mmx3FBYoiZczKmZvFcvE8Y9SHun3ftZXy9fHoeBEd1GyMP4",
  "key23": "7NmtsP9rfgi8tktepWWfJyBNAPehFcFgWbKHkXZ4LzaxRrz6e3N3x6bCpGh4CUbpKTxJ1dTDHEbAV6HahozAzD1",
  "key24": "3nR7eEaadAxvckRfwmXvihnkEpTc9nD4fUFMkjCezbrYXFpdfzKPL3m1iXc1TRoaQQn2mDStSPA4iUmPZURQaXz8",
  "key25": "2M2cVvkHJSn9iomy47aVmErmq3r2gJttJ8x9iSfNwc658DzocMJmcDBGPxsGGtBn9BEyoFdMyV2U7Cvp1c4tt3Zk",
  "key26": "2nXZ6dyN6FgWzn9ZTzq2HYcjU1iZvBuGXgcLp9Fj7b3JTaukMUFrbx1LUsCA3zdxAcSSDmcMp5ymorWf9N1X2uGw",
  "key27": "5LoSPryPFQ1E27GczGpDciXKdy8boH8wqKG4FAj5gvXJevwoirW7uXso37ZnMWxJFSA2XpLDCDsYgXsE3YuKbLj",
  "key28": "5jZdW8sUGfQgsrS24oX9HRBATtSaHEMWatb1YQsrTiivqUw82JyZjDcxZnMNwSACmpK1QMa3XcremH6PhaiLrD7z",
  "key29": "39MSP1jbn81fw1XdNYK77rXR9vJ53KNscSMjYkwYMimJxWGeJCFFbKjzCHECkKvuSWnzxWCbFioJvxiKwooeCAs2",
  "key30": "5basmBkmLZhWPTuhuVUNKLmQBX54EWFKrNdxQ5BMm4PbiHe3PLBz8ZpNTqi1vaP5pVZ9MLUooPpCF2sigEz8V2TD",
  "key31": "4t98Btk7JGtGMZpWEJNuRiWVLNdzGBsgqYxgXsR7fniNWHvFhFvVPquPgf5ai8ajRE5ZFj5dCKexYzp85oXn6UVU",
  "key32": "5MAJFaKHd9x5NUpMQqJHzmcPia34vmE5F4mVqWXg9sDVBGRHykrb4tZzWdS3VSur5qxP5ZKkpJcUdTc5nQEpZyyE",
  "key33": "2T5PzqEzu8N42EtncLFaAYjamJZQpSrrvd3j6UusvjdR48ag7C2FBT838kjbBvnKVZJ3CePhGzYwcta1rRiUr679",
  "key34": "5qojidHT5YpyPVqnjSmwhbeS9GWE6AijVA3gFZDWDkDdNWLABipb775R5jJ1SDQHARC12vg9FdhsRKbmjgNNQxQh",
  "key35": "4KApgRaE4TEkeHbAdSC7HiFykWHhBSBVRTW6JbughLQzgBkUyaGSwBFXdXKsCwEbnio7gQEq9W8gjYbgXhV1g3eF",
  "key36": "3AVRa4e36vgebSRb2LLHUsHaC83N2sZi6HXjLzpXNwscCDfta4dVooQ43ZudGjj7ws7sqp6xVhdA2TwrFdA4tii1"
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
