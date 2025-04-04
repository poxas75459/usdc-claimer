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
    "2YZnPfreCEVASmPyRAe7ghePnFbnS8MVi51i9h2yURTM32Kfx3kY1v157rZNf7GAdZPTF2QGpSRaYvf3HadcqJo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58nekZyvM9CTDzpYjESrRNyX6kQaQjSAFnGpSCTCasj7vXhQvyXbQV19WgtLzLzaaaPSXmgiVUfKA16xrmkhNQux",
  "key1": "ms59sm1dAhH1XcEGomTVtm8Lst9afdojynmrMya1Wn55inZsNEKAHJGTQG8Bw5qMA9prd4po3mmNZGZRQRjj5Do",
  "key2": "64ZnLckDsxXKh5oM3mfz7kWkrT6V2HLdRMfPu3XYAY571uownm4i1j9qf52EJ8nxsrmrHkE68kfPXhKbiMe76kcG",
  "key3": "4ZCeqHkFK5UxaSr5WUm8DcqGoFqd1cjPkGY4oKBtetoC2Rj6gcsTc5yp3okwqiSFdKwZg8n74tpdrzKhQZvb3ixf",
  "key4": "2d3SaaAe9joXYXNMsBqv9RfsFj81ezTxYoZBmBHt8ThrHFEB5VtKPUcttimePnS5UywqbGaVbRH3XiADHbXpy8wY",
  "key5": "n1reWqMebRmRVPzLcJ849rpfrdx1dBPMUnxjtCigYHnHvSxEg8mhr2fNY49AHmxn3NH2nxjSvM8ja67yNUToaHn",
  "key6": "3D7KcXJAfoPythdmPiLhrAiKjrPHoNUbjqZJ99Sgq5Bz3Xgk3nU7siVWT6e4rnVYhtCoNLQKj9hGykcK4WawF7hH",
  "key7": "55fxmBT5B5ZNStUkXaTzvYNhU6dQEHpEN4i3c4U9NiUAWYwAGSmXu24fysUAqtdQD2KYGTyLuWdDCqHGeyu2Mm6F",
  "key8": "3Y1MPc62Fk3mFG2jNWSab49ejD3efd4S3rQqHZA7WQ19ikwofcCHJC4payRoXcEyuPE5T2LnyHWLRVQ9mUrkrEJw",
  "key9": "4yVQE8ybAw97Qfh9oPXo3GhmKYHcN2mLj7eqU8DKCmTPT24YbXdNZVP1V895SZgAzrgrz9R39FxUJL1EWMmKD7uk",
  "key10": "8u9sxB2m8neD5JmXKquWpv7dRTZzqX5JDdm3sUtWe29Gn4C3YWHDUVWoax4KwgVismuZwK7bCHBEnbJuya2TRuK",
  "key11": "5qVNY6aGPfNKMFAfbHPpZEy3Tvcd8mWg3o1oi6GH1PfRhmVNLN9gU7SRDqSbxbXwEL29KB1nRt4nMUPAsoWQkD1b",
  "key12": "2D4QDirUUtSQsKSj1rxHQfgaPM6mRbQax894kYyPFX6hMTiopLQcTGGdctDeKkuyBLkFcergeJJiu7ZHhemZNqX2",
  "key13": "5eAkzUY6vN11TqsxoemmErhr2et1aPtf28pedMKhQnRQfwTkjSVHRPpFSnwZRTy3uzKSMkCJuPLibSKCvgKDSC8p",
  "key14": "5bFr5xyUL8dabGFWj7XsYEBgxmXMCaWy4fj9eSa2vTNGDvcdCm1KNGvZe6yc11nWuxb763NJ1spUZRMyvpBqZAnv",
  "key15": "5cw68rZNe4VHqWHQp4FeAxLYc9imQdgQzstMN7CmVrNQi8vdASa9dWC5kmZV457WHMasj8uXNGxyd5cn9o7APFiY",
  "key16": "DNpWrgaL9sD6NQHZC9SCE7JTize7zKpEnR6tf4Za1tzfJ1jGDS5dyeS5cMVbf6rFvNAVByHvwU7admHxJuf3pcM",
  "key17": "nfs2tKRqdQt8stmz6k6zdunF7NQWWVzuP5ng4kBxpVrtU8q89UVKNAAvUptjYLtbN6ZCK7E4X8fnEQ48xTHmk7Z",
  "key18": "4PWEmAyKUP4QuThWuQ6JZmPbRKxpai5RunKMAcfjnwZmEJ962BbjuYpKf2JpCyiTrXQBoNKXLAQ45AnBvDd9ozai",
  "key19": "2xcin3fiqm8e8uZFqYSw7Q27n5zu3Le2rZATEjdiCFsMvLcx6F6u2A65aMKbFnTqsH9bwTSqkUQdR466DoQHQzRX",
  "key20": "53yi5P9MsfCweiXP5DAJHx6PRUxuR9DfqoydW5mNiJxKeYmhmfeh1M9AVuAq2YNgjL3BM2kXCwBvY6QVxeH8DzoE",
  "key21": "3ErbEfxCThSDDbTz7ghxrcLGRr6cWCwbDpTxqjXBHeQxTsf74cGK6oETRSKPnoJk4yJGRBFTEYhUMVpoCRsSyAi6",
  "key22": "44pbbMFUkap6yZ8z3Uf2QskPLE51BmEgwhnCaJZBaWed173VpVPeHibMhN8vpWfk3iUDEwFqYg6LUhfTH17J5aBT",
  "key23": "4LT6qbmX49hX4XgS91qgJk8UvaLJK4yJv2z8RviX1daDyGEhVsDX5X8tkVayu88kpuwwHfT5txy6JMtgr9Q83UvZ",
  "key24": "4rC64PZ1VMxvg5YQtGJSzxiFbHRkDh7mRFFjq7q4VKvw48ChzpUSZPU6K8DvXeDV9PC9YTK4GeF1a8fLX4Fu2D9P",
  "key25": "5TemrrQVZSeR7uhPFacqVkQCemuFthcDEEVrXzMfXbPtZP536HYfrcZ6hDsqXbBdqzZvNsLAuwSzdDE6JqmvFAqg",
  "key26": "3kKrwrCMVP2AVQ48qg341FVtquXP1NC1g7nKFd5BFThewUTrY3GWmcTEGnujtz1osFnQJ49fPprGmGGERBCsVbDw",
  "key27": "45NDWphyebUFNw6TGZZP9xsMDne3KDP5B68QGPeaEz9bWQ45AqJCQUx5Tp1nyG3fdXC3j7Jdn5z95nKtuxQ9aPwS",
  "key28": "2hm62x52gxiwpR8kpNBocXTBz2Yu3jf2DFucmisYZRbCaebs2ypxoPJFeWpTuxiZWGGCxgrUhWErKMchyHrNQMrq",
  "key29": "3mbpMry5AUtrdriXn3GDRv3mpC7XXmXfmKgFBNfzNShigu8QvhALSfv3CCRVX2zttVBKHARatDj5TWmxZmsRTLLM",
  "key30": "3EUQr23yck8W9LzZVcJ2P9BTEompLQT2hetL9kht8bfbLRmdtc2sPLPqqTpe4bWvXG2b2nQqrpzBDYrcdzNvU5hq"
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
