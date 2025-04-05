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
    "4zUjCpDSdZ8j7USapTf6aNfxkn81tvwddA5E9FV3auVEGYoKQpn5efgQ4QCydGcreiE8xcsN7bhotECQSZPdTYdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oj6mkt353XVF858UANfadS172ZYj9LQpDASTWLvYYxqup64r4MMWuMAzoenyLwgTbwpTxRNXS8ExJWzLVPekJ2G",
  "key1": "3WKhbS5z3vGTWCpdvbVbNwTzC1uJcopmT3fkzyZemrnDYDgFHhjpp4rpksXUDfWpnghv3ar6H3Cng2F6DoFXJrGQ",
  "key2": "2wPWDcV95fg9jekwmrV7oZZY9w3nvdejVhQAbwrUNvgzjb4T3airFoycYAwH8pKGx2Lo2tsqLJgQ2wJdnShtS2KH",
  "key3": "2qCQrip3rffxeGXJwNRzZcHzNNepVQky6A2bpTjUPC5uyAU4qmyfdKZA3ZjZWiUb3Bbc1SRknY6D5hLth1PgesRR",
  "key4": "Gmr8MNvAEenzqAEYQaapuTAp7yUNB4cL1ap4ixaUpfhuPSCfK4KczZkCKkzKnsPEJ9xLzZsrvCAQ1wMGVUrt572",
  "key5": "3F9QuKyQcULeLe1b93zNCKmpQr5d1ki7NYM2Bd51AXujHud4gsjmhnXVPuosjgPH9qxQ4W7tNzbi6JnFuLTWHmyQ",
  "key6": "4ofM6mcdEiCQxUzNacjmHT8sdnVP7VAeQcqDY8XnE6akVgbNszjAxTnthztQC8tqbNncMmrX8egTkq1mxsXNDVpZ",
  "key7": "3tkWiJCgK6zPH2j7Hxhhmn2DPYcPFZ3CW7RLhfpPbS1Z22JsmiuCYXFMQet7xMhUbYaBUdgasu5wwoJpJ55nFcaq",
  "key8": "233fGitFavk6Pgw368mH73AYhzeKnwtjG2EcH7nCdyx5YZ41eB1e6paRjKSzRKzoihke318EabQMqYsExPdTZPvj",
  "key9": "6ZWgLPCYdPpgxiQrwRmPmMAzGJARnZrF8kof46g8Yw7HmM6xDtu7cusr9kpxHpTKtcAAGddg6LqfRa3avsA62m8",
  "key10": "5Yso1zvCxy6ehnFytg72o4oDN7RsWvsdiEFnTpiCfD2eXATwmLqwcZfPk9jc3XsaVDxyrYTtoWTJ67Z7u1nWvkc3",
  "key11": "3YeKhffXKS78eB5r8rwkRyRLsELMqa23AuVWqa4inHYBicGTDZdpDcSUthoY3t7dc4wgw48Nm7qampZiWuDkXeLP",
  "key12": "4cKFWV4W9EH744SJ5csWuwdGgiaCLMg9YUhWDYrMqoXd4FECFeXrGzsZEL9gANcRHjeseeQh6HFUMn9dsQm2uu4j",
  "key13": "3h9iTo5pj7LLnnL19ySwotB5kfTfqScLzhN4SkoBHydvbHSvABDuf8VxF6KjDvSXoybF9bh1axNfSiJoGTPi4uWk",
  "key14": "3dkbZgGe8rpe7T94dhcR8vpmo8GLj1S84SB7viUweVBAzCUKFyV9mVbAYg4a28WrA9pufVHkDuxfVUNXXo2tpCTd",
  "key15": "FtqmiePJXmFUMx7p3J38jkYeEm4u8xTPgNnzGdC7XUbAbk9S8WLKMD2r5QroxwikghiQLFHZgA9hmGN496EZmfz",
  "key16": "55BfkvSGofnNm8q1uuoYx5m6edmoBSpXqod8Z93CuWzTdMoZdtkdEmN72XJGBomg7VqfM5aqfwVME8DZQHXUjvJ6",
  "key17": "5zXjYtMB6kTYwgKMr2iTFZenpJee9AnW5EaLYsdsnsr1A1Bo3FWU86peqf5QbyEMuTWtkfCogDo6wnrT8hbD5mhZ",
  "key18": "63z47FCyw4o4Es51Lf5gGHYh4bpDyJbXcsN6QBcz4KALa4mYUaBMUhu7LJoZkwrpkCN8Ee2QepShbe4sqdEqhK4U",
  "key19": "4xvgk4qRj9FjttAbge9ULdxxK1wx6kAq2kUGXocEUWv9icp9KvirfozL1KZ1NTvTn18mvrSEqTXp8Hrq1da6FFTV",
  "key20": "34m7stztaJmYiwyDRd5ZfU9ZcTrSzTDKj4ZrSSMtYaN1Q6tPv45R7HUshZeePVuodFkxHyZai14uxU7ogtvGMQSf",
  "key21": "4YagiJ66v86MM8JGRCquJMWmLQHYS9Xjin36GMiZ2PpjmVyiZBzzmkTYcBTUmamLf24GpTQQvDfyyRhXjLrXUHtm",
  "key22": "2MHFQZWoMUtpEbARFo4tC3vYYQjjET7QXEg8ZvVhGft1ZPamXASjjexSz7DUZF7KDAxXWHMAvHXGq7SaPG1QvHZK",
  "key23": "4AC9Y2kKo97xdDQpQvjqCYG7FaqRY8yVUtLttERPKVLmpsuU5fMWSk5YzgmZ5LezvR54PdJRNK6vQSjxYEy5QTvA",
  "key24": "42wdwE5JCXnUSHcWUmxcjcPep1FBjxX2AQS4jhrhbQXefn7rpxeggtJkw3stHHagPcLEpdLcUd7EYrQEpFWQfziD",
  "key25": "4W4hYSgaL5WMQrZPz9TpgtPKYA5HDRA2aX33cbi2RR9SwJ44WTFQhKW6PyjpfHPcBgaUJ67gvnMDoAdiA4AcD4RZ",
  "key26": "3XUoKSHaGG3XaJY3LwMFLgWkeMdPyEQyRk1KdF1PdUJXC4xsdjwcCKA8YVkiqrBG4ojdLzGVq9GnkmZRgwTWPnCS",
  "key27": "3CHAxxHUPm9bCFAhH4CJJUbXWtVaGLWVFFndbsynL1TAd8yqKaYWvCXY2hYcz7hqDxPTTLTcZL1DyLVEv4feFKPV",
  "key28": "69KHR9EG5oaj2ANmTYU6pGuWyopHZd1vP9dz3PTJYSZxGLLa6i5U14hTWcSNqWGeuviZxsGaWRcKTaHPZZYuw38"
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
