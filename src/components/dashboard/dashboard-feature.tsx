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
    "3Ro7eCf7uNYN1N7m1526jmDFCmJcwTsy3Qk8eZX3ywiE8yx8svyPndfUxW74Apb2mdQCfaPXJERZ5uq5p8M1hJBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZMQAzSymp47vDs3Db65gG5ajakPViRo9231JKWvUbhFz3f2oc8boY4wrMz769NnLFWj2LEoomWa6k9fYNTeJ6sJ",
  "key1": "71ZwpBn3xFbrdY6pbYgiGFMtqACzsahM4xsdrGNgR54Ax5tWJvA356xEv1uhipkFWt2S3jM9heqCjMmtvYiMSnd",
  "key2": "5UfrFGDFAfWFuj8Udgyc76e9NsPU7ArKJVYZ6JjoaKaT6UYfnGpYX4kZkZn83aR35ia7W9AoiHRnA785JievjrrX",
  "key3": "4ohAH9P6HsNUxbhQFDi6rmRMDJSZuYLQHkRLFuA1f3wughS9x6oxEMq1AzzxEqv9t83XbihyHzwG4gNW38ByKhLZ",
  "key4": "3DcRefyAr8Xgk6ptWGS1nR55HsAR3SWaoKARPXZ6Cw8yfiqhc3R3f2JdLinrQFLToJNweesZxPYDsfSKx6tcMtVz",
  "key5": "3XzyfeWgXuneq2nXAVGkzWnbkrt2k4NUxpBqSFTzvaFujEVQJigLks62tym6sn4DRwmXesnrNLdtdtKu4cdopm5T",
  "key6": "4skKEMUiR6pEZvyYjoZ13aZjB3MoztU9K6V9to73s7xcWiVVYnkDsZtCB7D8sGaGmpetQmDjVy2tQ7azH3ujtn1t",
  "key7": "YX6GsB2ZGEMW6LjhheXUnsbv6awC3izY6aW19pbrMFLsEWweXrjGiwZL7pbCpwzXWnqDxqXfBea75rHu57FjAum",
  "key8": "2nzGLGpV2LviPHJJ6yumYveev7t2VHwNdWenku81M8Q5i6oKs3xQF8M2qg5xgjaytA1mdfW83hANA9xEb7RCyDg5",
  "key9": "Pf2jgii4yDLQgMtTxvQhMx6BK2FUQA3tzPF4CMDeWtuBFdJdG2gt3okviPhKMctPbPXkPm4Hf5LEHG3zD3bSuWp",
  "key10": "KnKZWR1Ndm9q9w7seeoWhQFTA9UzdX8EDiGUzQCwNjJEddjGQTSZj5vnQ9MWB1KwNHRfnopRH5M2JSZCWcfGtdC",
  "key11": "5b3YZfAsrezSfWDt5YnUAyKbshME3rwTtf3cFBxPZUnwDVSKD2Khhar8F7SL1bSCXu34H67C2rF9V7kf8drduU48",
  "key12": "XM337XdWVm9K5ZRD3K9CAQsRzX27pdpZjowV8g442PgjzQLGD1UpqeAbfbCUJW3hfvMTXs7ifMcdnWSRgq8Z3cp",
  "key13": "21tXFsm9pAkuVxin7H3rMYCsKww9u11fjBDQ9hnQaF69bSBsP5p3dfPvTfrFkMJVktQtm9pkMUQYddU6yYvMcuHj",
  "key14": "QNieGVGhjak6HRkDTyZyC68pFUn38ioQJJkAEi11dCrVKDjVnk1PnxBjAfmpLrVTCphowEzvMhaAQVbxXrQg74W",
  "key15": "pw3zCmcBqwJCRGDAfBE6m9cWixmHrtuyCTkamDvxMffmPQqdAwfk7ieMkN4BRbKKg8t2TjQB9PpDCH2VbNp2KQL",
  "key16": "4fKPZUrNiBzGDnP9v1qFsb3Ro4Jpz2uu6fKWtnEZtWhtGb7aq5N4inpqMbvvkGNLpSjnYUUkK4jcpmWL2fx6yzrw",
  "key17": "4Rq2h4tz3VF7p4JwuuFqP5MW2cDfNUNY9xfh78m31RHZPrKD7dqDad5A4PAHsFwEAZbHcyBe2MK5jKRHTKsBP7YP",
  "key18": "5972c9oJFiStJsCScDbVqCkgbm4Mg1vHRm6mG9matsjnSgWyymoiawRnB4i53WBWiv2qzJXSvt7UrokzE6ta6Qy3",
  "key19": "3aedES4CPDHW9jedAJ1mvFh8vodXAyGbE93iS2YzWwjZaDWfSNWiU5HmnozcULe2HKrmBqfhbW3awmuEzhpjnYN7",
  "key20": "5oVsPw9j5MSRAayrBG35uPWX5xgQ7UdMY5Pwsvpsm7shmHYB8BS8LCib2EVMPcB1WzTTHoSzDwQGgWhGFrKhcjAL",
  "key21": "2jNDjSV88v1jW4xsxyqgmw61bM8HR67Hm12hZ9NyVoWcrbqdorrmop7d91brZzXShgzGp7XvUndfMqiR2ctYXLtX",
  "key22": "GJHrsWZjd3bvgUkRc13VZkpdcXoMWPjgZAKRvwLhkh8Yd42rEFxR44STXSKPcExDkPNqBgw9iNubDzivgS7W5ac",
  "key23": "b5ch1LFGXJQ71abPiHpEVgemCyyRVa5DYH8dDkVoLubwSHBHupAngy9wNUngyNBF6TJaTr6u1oQw4yNsSsJ4kua",
  "key24": "RcdNE8mXGqX52dRbYVAWgfEQE7PgbmGScuUqUWP5WiWchhgcgG6MyZNkxiEMbGEdxT32anEYULiQYjQda9NY5eh",
  "key25": "2ijnippLxoMrTseXWsQVCnWEpAUFVB1cNvBay62JxKRjMD1uBEaJCYQPVqkkaitjAWiBjaM4PAVzPEQBwvdkUTEN",
  "key26": "5Dh5xGgb758xAhmvnmqd5dY2WpaLZ6x7QpHwUEQ6HAZ7zpsF9DVxQp9ivzCUbigjo9EvNRDAk1WVmBiw5NwXTws4",
  "key27": "2TUpYWWGoYH5umaHLD23LXtieWrba6D4Sz42ZfUfLk8MxAhE5jpr2hADZ9YHy8wiy6zsLgi5J4wUXHW3H65124Rx",
  "key28": "566xhFo7jdie2P9eHkQ54woaKPeUSazLgLXvYAdo1fytsiYR7YQfV4EHY9Z9DkFX14xXBRETvxpRcRx5wQ29Ei8j",
  "key29": "27nRiJpBrrNBDKYHwXoKQqTe7amgue6bWvHeSFVX5zU2Zco2j2qJDJZ2jmxfM5vq9rBAbyjcTo345CUAFceK4SR4"
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
