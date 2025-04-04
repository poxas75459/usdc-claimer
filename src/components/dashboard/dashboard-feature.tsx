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
    "4CiBRp2yF8N8bTd1dNpZTUWfxfpnEFiRWCwbLeLyxWD6THhRBMp3eeRNmBbWZzahNUhAYQWRLV2jbF6Vz4C8o1G3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kpyp5ovBKkFbV9SWXBrPfNBMLgcdoF1C9kVkhm2MXqT4zN18719zVYqAKLWFqwJg8nZgUcaBnefKzRPcTUtryXA",
  "key1": "3q12MvxjMqTk6ZBCpsPaMcH2fveG6yuTYPmgKn2bY9V4gc5AXNN6Fauc6f8yspqQ2SBYSDQDYu4xC5pfzfWokWnm",
  "key2": "9Ns9TvHyCB3s97gS6UofdPt3AuVsxPYK8AAKaRF8UjK9RmZTAURxa7ASsqZeZA463E4FDo37A56Ljwy2u54xeZo",
  "key3": "2Nwat5p5oRZFvJmrcDQ2Jj1ztPbA6QnsFeuAd1f5FZFXaDYAncBpAqM24JPegX2TmiJme7w177Cmvba5sHZEjeWh",
  "key4": "Cx2imEa4UTubLrqgFKPCamfRdNQvKyacJLh7gsB63FJqAASF9B2HhBnFfxyy545EBQLhjurZmGozHcC8U5TNdK8",
  "key5": "5a6UgteikviUnry6Semubvt6xF2Pncc8kDTmw1BUdhhpXCUcCXCmec9HXV8ooeKX4Eiyb6feHHouLP46XJiXgfGm",
  "key6": "2QvwaWihbPWtATSEFourasoVK8TvHjy8StCs8x37xxWPkVtqWiWm8c5kmxXFR89LQuTY9KALJkvyRY5YJryhpHqW",
  "key7": "34Y8opPogdZfb6ityVSkm1KeXPmr7RmhJvcX4RKX91FBU8csW3s5XCWSywZexxgNT6pE3SwbD2xWd5h1ubt8xfCv",
  "key8": "4tZBas47niTu5bVVRzWbVmCHAKAngjdmAbKb5hsNvF25b5BJYs7SE6nhq6KP1XCB48GgsWUHzy6p32xaC4VSfdRs",
  "key9": "3PhHvJ1KhmXDW4vd8KyARssG7szQE2nTJoJV9j2Q1x78rs6LPxssfm4PNLxT2oyx3RUqzUkwNRXvbcxSaibt8BQ7",
  "key10": "5wHjdrUoNmJ5ZfpnaRkzUjAgnF1c8kyWztocy5RydMGDAqAmFkuQ428TRdKj3q8sgZP1hkPHrCsWvnLeJjRpa4Vv",
  "key11": "4vcVThrDRNqTkaW5wwTywzNZz3jAHGVVSekWAPTRDnb9JDzpsfEZYt1rLdYQG4AZt6rqN38vNfqYP5VKzHdc56b5",
  "key12": "4ZqM47XzABYFS3bEnoUbQpYSrjGxgQobKPFfbuABkaLsELAHPqfXcHny5pC6QZJzVjzrZP5Lz7vKJfWNX2qsmVnC",
  "key13": "4ksnHfNMeVRP7djN5HA4BbhCArYNvixiFCuHcZxjvk8sc6NVHqXFLCmwLf3botCAb5KVuPH3fAfK6hd4Rjxj8y7C",
  "key14": "2AUnrd9vurd1zBeq599WPG2xsWydJjJZ6cMt9utVZgWaN7H6qVqULu7UP6oVQ7ULMs3ap2anYqjqksYjomnfbpyR",
  "key15": "2M32mcpEyves4RDdKs3GfLSjCTZ1ycEXLQJefas8KwYf15G7oA2B5MJhqVXV4yPf4aDEUiVPboFcmkQBfFLnjheQ",
  "key16": "3j7XoTCsMdXwyyvUALUokNixw5tUL3rHJsf7r7yLscT3r7G8JfH7tVhkRQuGGvCmfvJgL2ywvYv9QCRiZEWyioqu",
  "key17": "4ug47spGb2w151V7W7nH8LdnHkrrq7QqvwcdgVoc4DUhcZgVSyu9LK2APqse6m9WXJSsAoL4GYmvdHkFsGm7s7E9",
  "key18": "CYeN1tv88dAxx4iLziNySDwkscG87peY14x9VqA9Xf4xtQU7arc4WvW7mHUkXLoaHmeenDzPqoXMjkLdkKhFYnD",
  "key19": "2vfFfr1UEwBxsqdcnRoWggRwFj8E5uMe8HzshFthWvhAJULqLRFmMv37pbE6Zxojg2Lgg69q9ybmkWWX6g8rkMhJ",
  "key20": "2jR35rgLWaFeHJBfnuChuo45vd5AbW9VAX7jZxHnjnWHCeqmL73AxBWT5eYbhNpNTherbNHJi9tXgvbUHZoBmBf5",
  "key21": "4Pxpt2KQLref4EyrtV9rS1Q13cUJuvY1MZNLf2DwWjoCJaibna4PXGFKvJuq3jrtAyCK9BpMGor9QajrKTh67HmX",
  "key22": "sLbmrgsjvxEB95DNL5rhWgqc1fwCD2KTRkfZRPDbX1BoUVL3C7Ay6a1LWLmRsFPEpZX7ZaefPsT2uyqSMG76vzD",
  "key23": "2pPgKQfvyfFG4JwDVoCTGgzUyAQFxzJKYpm1cw11byP9qrZNM8ajPqwtU4EBAcuN2Ck8Knrenu1f29xi3YE3yyj7",
  "key24": "2RcS9UxPhorNPt6TPqNmUpsfQcAmxHh4E5KxfkF4ELXjMDe6XamN9gFHQ1RfJf3jtw8MqjZCm6XUJBbaiMphUNn4",
  "key25": "5dUfafoWH8zm8B4v7vWXUqGmwJeTJ6Uqtv8bp7aacpyCbLKiAVNFq5kCxbUGZPb4qL9zJ1b2KuE276uWRCMr7jZB",
  "key26": "2tvd2SdL9VPyN1YGoEJcptB9MfnnAAtXZbyftkHkPcoS52jeMaGURisj1yZ7pBfgBS9W37Q6RRkY2Ne6fScmRRdR",
  "key27": "5L2DGLgLoriDyB1EY4GdBrVeEMBHj1ae3WWrugTXDXQcttme3F2aCWJMbu7LWcVJdGSMuDKWfHJ3brCkeMUCT5aY",
  "key28": "3NR7hizMq7wwvHS7TxUaitdyhR32BaknehzMKEPGWkpSnkJy76jDcXhUWEtnRxLNwFRxA21Khtamdk6UMK1D7pW2",
  "key29": "kdURYEbfTdq9FZefGSoUXDyypJ1uoJeuGsqVbF9cy7svG7dmHaPdeJ1LmN1KNEdmPHcZHgk84vWm69BV1ymqkMt",
  "key30": "Ba1iHBoQoY2t26siCYR65V9R25d2sb2V4oELxHnf1Tp3zdK6f564L1yBQ4NHUCgteQir7UAUCGG7vue6DdxJZix",
  "key31": "2eTcJiiSTDRsgS7NZEk79GHtP2DU9GyQRtZiX8Em3ba3w6bms9rirD49x51392To33zwDGX4nxSWNEcP99HrehgY"
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
