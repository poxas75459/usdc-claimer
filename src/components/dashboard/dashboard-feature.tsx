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
    "4sEvGcFHtdx79yAem9fMq3Sv9Mg4v5pj4LcEv6pcBc2EA6i7BJ6hJ3anUYZTvMw56umWL27H2oygfKSTSVxxLKmc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ebv3NMPkry3i6RTUYZtoHfiFzMXdTuHUcrqpWbBtPk9L3u4DQT2WDTtQgcbvjF7hyq5XZgMJWDG4y3mT5ZRQ18S",
  "key1": "5TUXByNbfmYne3D4968SMKLujMEpHbbaXCYWi5cDSEEF8WoP5i2ZsP3JycXCN9NEkWcFGUZpX6bFG5B2SdCT8rx9",
  "key2": "5e8dRvQySquZBDUKPowvxHjnCYYE7U4EnAAdQpwRFHeoEmoCKNmdHrDbshDAMKY6S8rtp3RXdep9RJbMdotLT2sD",
  "key3": "xStggV1fMQBFogfD5a4qJgpEsb9guNPmG1rRccnSUytgiFCJhUwSvX9HXKpRcpJk28KBNdCbushksHeK55jhTjG",
  "key4": "2gFWwuZqXG74rCixQst27k7UgEDQWLznFY5NdA3VyWEL7WQitRdmG1dcrHeEaMQM1R8H6d9446umydnDNy13ign1",
  "key5": "3diF7gWWodZ57zkT5xHWAVEzYrqAJnN2yAaXmbLWBnQNR2to5tjdfwgtdAV5CN4WLua2vURmAYupZXuA7Q83RPQ9",
  "key6": "5LYpoNw7gjuKuUhDQ7MvqictsK5zCQdd5nASJzAVh9efuHZxMbzvZAFQiB1o3kEdCJ1d8aucxupJBxf7v51qb7pz",
  "key7": "2YDRxkjkMxhhaHFVHRzDMBrh1LUB3i6HKghjwptMfYQBwfdHTKH9jhhkMVcpDDQzXDkPNuTjDcKrkmN1xHXAsas2",
  "key8": "5d8GK2tsRQUfztbtyBrysXpkEJsfdUgW7XtYRmHsvVT2ahmu2vm6j56ZnTxWSvDfRya7mN5GQKPQsSZ53Np1Nubp",
  "key9": "5VtfCtJoUstJg1mgoH9pKR4aFHv8Nfiy4TY4yU1siD4EZWosNhGxjhUHqx6Zk78UdGWGnr2XiY19ktA5m3XxSfuU",
  "key10": "CXj592g5Wm9MzCsfmYRjcec9NfubgbWPBmkdGTsMhoPv2ZQWYtHYY1R2VjLK9mF7s8X9GFGxMXDm6h87kJCJTnS",
  "key11": "uwsnLv7LNMytw418f4hG2tpUiRP716VDQzxawHrUUePKJKVhrAa7npLpWLmdfY5R8Nnasvt9WTDFhNvjvuG7yct",
  "key12": "tAD2oWxP1WP3Q8GHcqjAPcPMfjnEtcXyRC8DPDay8mpHKo9offw8VLCvSurHEMSth9KPorJ46bQAXDwYYssFuJf",
  "key13": "4psbzJtZU3jw1w6hQDtJQJ4PFstT1B6wnQEBhzkEjh3M6KvrZN4Sg9CSdCB3nsB5nygXcoc7dVXP9EVKzZLDqPjL",
  "key14": "55wu42S3UiNuNMgs4pWxhhA8Qsy52oMEe4nH4GGtRqBJXqVuHgmAzU7bRqeudCiZCVsnRt67srp6zbj39tsB4vqm",
  "key15": "2Q3YdLkYgzEkxeBo3C282AzAbUY252tu18NDD3CQxg5NcUdaKTjmZqgqgvM5ByNA8c8YVTzEkkynQEUZCMNV8HoU",
  "key16": "5zguYovsRkWhFpjvDPB8k7E47pVZhEaKfpP8UfT898K7D52nwYwghniXei5FgXGLZ2nnq5mR3stnTsPsWMMR27dj",
  "key17": "5rz2p2Huy6m7dJMD9cRepmegMSWVBr3VFGw6xKNRLnDJaBi4ennyZPKXZUuLdyyiHcoRNAzABPjQUFB7nrUisqPp",
  "key18": "iXokjFEdyavYRKzLYgDxnuTzzKouGdceYkNFMf9ihwD9hYjv4YFxoGzz24vaZTXPHEAtRiERP6a6DHyjhjnfzyg",
  "key19": "2qUSB9a1HfmA7n6LJNEwroPyGC1cb3REF3DBzBBTaSJ11ccVShbdjp86WjyAEsCxhGqGpXsi8fLTEyg2MoPSCK1t",
  "key20": "qRssk66SCS8t8ZutR8N2kL7peTXM4ktXyZaJGQ9kjdyqj8RE7knH1MFf3GNQpNb2wY7ZJpTFKyPRS9fUG4Ruf7p",
  "key21": "n99Ngt7aH5AAoPG2vVqt9YvDHnLnnZReNrs7G7nz4BSRF9jPhBBiTDrgjNGVS325L3zUXByS7fw3wkk5AazFKkm",
  "key22": "fNAA4JErggB3HCKgvVA7rKmGCbLDfjiRx9iwpyV9rmgexz3qAsakBSVDRkT3TwcYF7tqpLSaYBNygNGmpqyExMe",
  "key23": "HLt91ZnbqxCtgjiE9ejNokmEETfp33y6mpAvN1g93fyo34Ux7V5iCspDejh6WPTanf3eCZyGQ1ocSb8yStQ7h5W",
  "key24": "66rXabS1Q8EPcT1bDWvRYM4vwGTS7kCyrdDaz6BhvWFUdoFNvdyJxbctApEuZHJVcGuVkTYFKMFxFZJDwa6v7YfE",
  "key25": "2fe1w9cwec6EpEe8vEtzH6irhyxBjtWjHM1iB49uRYyaCxR2Ccomynj8jKwqg2WJuR1fPH3oH45zTB3NvcQk7Jiv",
  "key26": "3cttD2ycq4rC1df5RE9iJuEVddxqkuM7Dp4SqneNVqQwyrWffXqBfWvRhw224LhbLLZQfAFYLaxTsxdzyH7b4CNT",
  "key27": "65B2dWu16DPvcme6FyqHmJpG6DWmGi4ppTKXsAzxTQgNAxKRY3a6oyr6WHkXLsSiZpB2tQYmSxwbefqHuVhYdBQ8",
  "key28": "mk5Z1SGF4oznxDRPTzSFodQmEA6dyhVgngdzEbkRkaKdPudBAMjZSvoc1HAStpKi7ygHeyWciT8PmwD2AKyZNP6",
  "key29": "5tF9kNNqdkKcoM1QZCvVGu4fq3pJhEh8mYBDfU13LvAreqtimqQBKmG67M7hMgcMaxoxiHRaJWRr2T97Zg7BsguC",
  "key30": "xRRkQX71fFhz6UD75hWs7zUKBBta6pDqXm2rCK5cixnZpZsWQxvc98sjF6KZbEYUV7XNDivgYnmcNDbC4j66HRz",
  "key31": "5f5Zz93qjRERU4fSvGxc2Zmhgvm5hBToGjQ1NVB2cRo8Jp6wFvWZpHSD2jSFRMTzkxPwz96mgTMavq3Msi1oUrX7"
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
