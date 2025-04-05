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
    "65rL7Z5gnaEAMGmzn5fDp36mEduUZhXneqAG4kfH4gphmVmNDWLSnVf3tFXBqLNwbzXLcx8EjgbDD9Hq7f6TqSQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ckEgZTwszQPrYPMy5wo1SHpFL2NGL2B1Z9UKaPjhixxMRCLsnZDZY6C561fQ1nFCWSdgQ4fTDRs8xwvEx2vDqgB",
  "key1": "3CkadX2wUgpvqeSoM7EY5uAjRAP9K2guPE68t84aiACpGBqWM4qfjvMvh6APTjARDkSfYsH7q8w45CisHFj99QGx",
  "key2": "44faWtTNRqpnH9SJC9c7nwfVrJiwYixPm9uk9T1tcEqFddoKKj5vv26A4dfQANr7M7NTGsPiDEUuE3A6mXxmo5Va",
  "key3": "3fGBCa2SAWhc87Gwv7K68NX5joWw4BtHD3z3h1rChMVe3FsR73s4y6ReqRkNSKNYcWjcWzUotkrjZ1UkWPXRqz5d",
  "key4": "5PiJenupqcFtwvZyTGvgMvbEoQThaRwuQs29AjdLcVj3FKkyX9Yy7QEFP6UC88zdN4QLXVyJuXDb162NrjriFvAL",
  "key5": "jLkRDHfo8Jb6JJSUPEwUKNBjJsmUbih4fNFtacSbKYn3pMFQJ2zeMhRxEQL1Wd1zzyHXpFLRQjrNR14iP5n3ebp",
  "key6": "kGdZKCtkuDYdaBvR1v4uZDEpfHZCWdJ2YuiAfiCAdFjWsTG61jdXiG7NLPiwNPAryUTLzCkYszSR1VWp2q9P1Yj",
  "key7": "5Ywc1SxMqGMParFHPbYyVW2YA3hZaCdw3ngo5YkBqBNtvpi1qaveAG6bvMjrcxWabcpAN4xRgxAyEDnZzFtToAAP",
  "key8": "3SUjnqYxxtLhd9VNNrZViWruhrwfEuvKNLcDmMTyF8ZYNFFfhWAr3qWrW9oVFWFcXrzUGsGSFQUrYuPWNnG5kzzk",
  "key9": "4z7AoGQXJCGviBAsoTS6ma6V6oDgSTiFvtdERngkD4DqNuJosMB5SZgT47g5FUMbTFmJBX4gUbuDMQzJxBLGjUJX",
  "key10": "457Nf3rmxmG22vSCivzyp2GcwFfnEuBqHTPwWo96ZrK7Ht9W8F52LfknyYVxQtXaz8mJXUqNwpZzR5FJ2X9AuR7d",
  "key11": "K1VdpEXKdfiEV8RZqg4SzL5pXEFkQpDfzPVePwUq9VipdgafdTuJzjJgz7FG6ewsnp5jRc38B3WvjJxyaMMT7ji",
  "key12": "3UoBNDfX3eHyEHqtk9V3S7EdnasSDpLysAs2bVpNEdwoRPh3q4SW8WCTuW4CUsRfiVFuyrHxFofiNKkwDogpcJwJ",
  "key13": "3CPLqUQiKXK6s8KoTdoUrHGBEkyyEN4of2sCQsAhWPzQt4WdyeSBo1yUanTBxFxgkuHD7admYPS9ejKS2HzKp4py",
  "key14": "2qWCiZujWLUXcTw1eLkfuDtELbWgc4DNRq92tmRbGQgf2sgEMeKwfUYcsNc3L32mjnRDs9UogwWEE9P5tWf1hVW9",
  "key15": "ewXAkx2DDFTZuZ35KMv6MpuywGpLRnxozxiNEvHdt4e9u1m95YwwmcuyZE96FBGtGExr9u4KeSWk4h32ydUWUjE",
  "key16": "5yfrZGSKYBsCwkua1komns7mT6K2TXARbwUPxzkgxA4CJLKWaDp86ez2m2gMigZGENrgxBGJefY1wQyjECgGPgsz",
  "key17": "4y6KCKFBmEsky5FWkrXmHXtJCvgt7jRn7uCFgbqu9Fo4GuLJbn4opS1HX2MotJyL5DF4mkbAY2PjWKb4DbcMHCay",
  "key18": "212hduS6sqXPxXaY9Vm48tmuADdgNnR4o4sv6BMuu4CStuehF27Kzof4862WE94qFD8nXcqJuAr15eRZhrGp9a8v",
  "key19": "5FCL7aqUZLAmmgArGuPxGdFaMDUiKG2VCegXk9sJ3WfftJcPTiLkFPUHT8m9FCJNEZysMJyhUYVKAhv5wmXuKYfy",
  "key20": "4uNPRNJtuzVWaT7itajPRxbw4RDv82VqFAk8HceLic419Swbyo6vcYRzFEMVzKRs9szY41T1BsFgtquZ2q3DHaEW",
  "key21": "5nhZ6hMNLoawejkxVHtRVkhBFBCy4qbv13iBUx5637c12bfA71Ci5VNFhtoi8rh7NbiPXW7bg5ZxEfhLYmrHUPa8",
  "key22": "38z2vpRUHsKMEFBLeYG8nKWSczEhG7ibfQQEm82p9ptjJ7uw4UDuTFUSMDYRGRe3YDw73hxEB4HP7xbgcuCZ8X5g",
  "key23": "3vPBWpPewvCtV1nCAa6TWmZg3uRfw3H5ji9JP5WGqnvWVSV75ZiwCLU9wbJdPte518mKcEcmz88wiffGkLWCfBq8",
  "key24": "3SyiRu8YShbu18dRRDT4zT65zXueW9HYBs9cSZ78fhvUuuoXVwdDzVxy3iC2eyg17drvA4x966esxU3Q2YhwUMzX"
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
