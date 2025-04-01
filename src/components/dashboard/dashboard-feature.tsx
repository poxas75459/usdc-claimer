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
    "36FV5WagHYyouhobKfyAiyGG57GhFdht7FeU6bt9zmTkwKbq5ydSpYJ3R44gUsjqeCbUMRxEetzgxaZiJjqaKP9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p7F4hYN2N7JcxkwgmCmvTEmmtn3yMDQ9V4gGzdh2PvusfURyiZwQZquAoi1jNEu6jbftsTqawPDwgtBNC3yimWp",
  "key1": "5A2EvFatQivndL3pzdkZ1NHGT5mVkHtYqCodk7htdHxd2qGwegNKp2MMwMdacbX24t861VbVLJnnW9msNi7Pm6xb",
  "key2": "2zNciqEJ6o2LKM8YhLRRsZjtCcc7YD6HSvAwhoZSKzVjc5rLimSt3kuSNvHoaz7SUeQXBvpY8QfxDZ8spzN6SRHY",
  "key3": "2NVVgyXGqwfXLX48TYjsR3wR6yWQe889sfyj38gW9ZnQGStH2CYMcBvNNWrnNtGTvfSmp7qrFWYRZPFhuhEF1pjU",
  "key4": "2FcE7taMSh2yGBjtWhf98Fk49L36qR9wTEfJ2vqQgonjTsXg3cx8zjWji8NUCMZibToH7syqQtG2GWmKAHwfPjuY",
  "key5": "5afnoTpqtuuhL6eesCULzDX1TnRbSombAW8S9NGV2qaxvyxQjLubBnuHWeYpmYGpe5FrMW7cAchcfE1nB5DwAEZ3",
  "key6": "24VWLJ3zzsqnknyXYx5xsZi1AFtdwvDXfzZNY3mfZZbWSLNZvM1vo8W6wTpXwpBcLd4aHb5rsfWAhmPjmdfYqZZd",
  "key7": "xi1jb8WLDPkX9KvyTbyxAMmHVtcJBzTZg7dw5UzQYJPk3sr1LPZu9CYYL9jgbGiafZDzbWd23whjrkpgM9qfzi6",
  "key8": "2J839BgjBaC4UgpZCbdhSRg4RfSV8KSPd4hJG8Ta1yDrJUCK6hpkLfZsBoofUdD6acgmgYgNhi6cf2c4ns4h49FQ",
  "key9": "21dxseDLLb5JfvPCJwDu9R5umF9VzdbFCZhqpXdbtGED9jcgXTEZ3m637mw2DyY3mXYwx6QV7YoXmhq8DFCJoqkz",
  "key10": "4tjP9p2FwPeJ5JwRSYy2Bs4kYeuGeqKHoRaeuuuiz8sQ7mYGXvTW1BniEtvd8gaWyJ8E9FPzk7D6GSGNuxh2PShg",
  "key11": "3cqSxeDb3veKfLtXPZKb7JXc1QQfFbvyWP9ikNu45EwGbaM9SAmQ7XFuqpwgdLx4JSqTDDtQWnqJFi5RJaeuaj5E",
  "key12": "3b5DN12NQ5xTdteFo6ui6mtwuHWX9QQTtrX3sgtrHtQp7zkPGLgdDeQ5Qqwy3frFbsQCiSQWJyDkqyLXkVziVz4i",
  "key13": "4gbcrtHXdVrLWUCDMGHLhsyTUcjyyFinABBWCLaTtWKPkRX4HJEGdbydUgZvkptvFz1bVWPRXWBtowgGouyfnPws",
  "key14": "3Rif3ZBQ9TA9f812X5i4BDM2UMtsQN4eUKJwjohQueUr5uWZ9spausyToiND5hL84pdSbUsYRMsYeXk74q394taM",
  "key15": "4V1nmPkGtLXGoW1QT744jcaquE9p9PsAusn6pEYreE9766Agfpkcm7L8511HJ4j4wKR5osWyqMEVTd1CRMjHJsMB",
  "key16": "2zWuMDP91yGQ59AUTPcA9Zt4mJLinDz7jXJZrXmuvg6JeYy6xkLV1bS4AuryykHtzS6XrE8FKNt5rffJP3MSjAAN",
  "key17": "aXrYFsrEqXBHBCAR9z9EMGfV4HXQ4avPR4rnwBz6PPVVvJaPyWqqa9AZptVFhz3e4zvRtAgUz1N42m8fofTB2Uq",
  "key18": "2ggyhtmzfhX5crwUtyKGJMPTC4RjjAmsqxm9jakw3RA924AH8hxWfZaprGjcPBLZywjHkJsmUAQLri6v7Eq1QQvt",
  "key19": "44rbJqX8u98XBv6YEp5oykzY58dVuZ2nZ5boRDF3nTywtK1dG2dLkNVxz8qKH5ajaDSEGygv9kWk19En2XkG3mjF",
  "key20": "2gpsDvZtJfiz7tKdioXBamGuGDzioxc7LcP2SoC5id38A9fvAbB2NsuFaFWefo83E4XGf77sziesPcp3QYaXZUes",
  "key21": "vcHCDNn57hjb4k4oxqqmWudgPiKZnUnQbrCWmgK35W87ppFUVAcyRQz7wbsbU3hk1xDrCTMtM4j7JU2tnZky4ic",
  "key22": "52qLtoKsm4tvrnLMCMZ26PYAaSzaGiAHMxQNGt7MqrFnMMg4edq4HvpSfvDRzQzgh8DUqDcJKEhzU2AXqnSLtoat",
  "key23": "2MnZHu47ennugHZxfZ5mR5St9cRgcYTKVWxdd8ABnFQUnHhxjtUPYSXAFUSXk49JvvPJuFnJwd8TAgXdxUgK57BH",
  "key24": "5BvqLJq9stbrzGu6eEA81cy6TZduamHmqFhZ4VDWDrFssdpbF4VW94pjLnJBrEbot6PckDX4KjwaohaFiceNpFvY",
  "key25": "4pXHt8LU5KWQqcHxknSjJtGRUmpsdpp1KLecS3vCjSRaVhbzTgmMASehNrmfwiA26Y6VdKVASjqhJPUshmqNJdGx",
  "key26": "3RGhqoFsh5MnwxKY9N1grjPfKcpk9AA5Ukn8sWPPX4ExbiPm3qBCUxqSJMYwiYZZP4dZUM9KbfqWVqF8LX1q4Ckj",
  "key27": "7869afMJbpnjQettuivNTHSdq5r5u18YrDGnRKAvt9y2SVSgrgrC37ajS4PAczmoy1x6GQP4NCqxF3w84ebUKHg",
  "key28": "2xurtbjBVFM7zWZFexXG6DijZD8C3KbcLeiS3NBqq1gQMogkmQo5xihrxLxiK5z5GtqCyswSDhd2GxFjpi9eusJH"
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
