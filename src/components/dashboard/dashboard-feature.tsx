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
    "2cVEtHV5VRoBiP53T6dQ587ytBHLNdRVNaXbtZa51qf2tYeB2hhJR7sC9M711zPoP7sW3fp34j4kxGyYBMAX4zoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eac3uqaFh4TuTazrWC3FRefbabEJuj9HyogFqB8Pkv889VxdYdJH97vFjsygQrJgxzyU9QTwjxur8YqWCC57Fcd",
  "key1": "5gffkSWpB4HkgWLze8bSaQ61icZLVAo72EAyc4nDo9i3XcVhgLKRzKtN4CfBCVE5EexU1rtYkEcf1S9aBaHA6mty",
  "key2": "4SZTuSKS7p8yZfBpjkKWg4bVwbx7w3HwBFLkfS46VVYbHC6RqfiaY6NDVuThYYaWVqCK9zz2ZqPKdoGxxoYooXmN",
  "key3": "3he7McPcoFC6pPCi9H1Ywwq5BdkoU1KhMJtuFJGGFEVvDaUigSiewm8euZxUApxpQSDgm1ypbkSE4ghMvEtpfm1V",
  "key4": "2xyNqbgvsAcMsG5XQBg5ja4gD1tmorP8G7tKPS2jTLy2Hf6ENP5yYwoWsoDHufWu1oKwpqkEQPK2SWYG9NkHNDiy",
  "key5": "BaP8WtthU31hjBZtzWghYUUa8gbDC5Yt7Q9NVA4Pc3Pv6FtBh8Q4tUKQ6aHZsyQNB1d35kJS3rfLgjNCv5dmdsp",
  "key6": "58W9gFnauWRwBg4Rv5xc5tTDrGixoCkw7zVicfdnof6UPzxLYRmm2VmwyCUQ9AgfxSWjyb5ekkZabCV8ra6DSz4X",
  "key7": "2SAFwSKbpGY2de4rMyQgpxBLerrNwjeE3ifzdj5GxZ2TzGC6WgQHe32XANHum6WJ6wXg6eTDwue8rgPP6BCJ8iu3",
  "key8": "5t9DDNo7reroXctz67ksH5xsH68Rqw9PVcRjBNe3CxKH7u4DEd8zw3tgxwzyWivUbCbUob8KC6mVrMs5UCit4omF",
  "key9": "4DyJ7kUUek5qKpH8fSvhi9y16M1xxUH2AY3Rpupb4M2vZucsQGKER6n3CoWUA7vNqzxJBaYUQvQLTqaWevHdPTDr",
  "key10": "2mBgmcXUktjVJbqn2c87VDyyF1HP2XJJYjXjij5swygvGL2ZFtu9A84VRmsF9X2nrqsrJk12UFWzTwpSo5HYZrxt",
  "key11": "2Sfs7PfqsZeMeq4d6Vr3gSnUnuD4ms26LmbLAukAUTwtpMg7zWvbiCibCkVmcZAYa6Xox1bdyXQuMSYxMSMXDg2m",
  "key12": "2WkUMgFA4CwNrTNuCzetDi87JfNAaeWDojrQDUbfKGUQJVP2WHMqkSTb1aJ69NJGn6tB5Lhcq3tkGergp1NQ5g7Z",
  "key13": "5dScbYGESWeb8HaA6gcNwXFj2LedZTMZ5QbC3zjFgxQpfpUxi2kEo4k1sfGEq7wZGazmJJLLpjpdu7hDCmzW5W7z",
  "key14": "3NBT95Le9R7VsYuq1tVrwtMVrFZSxeXm4NJoiyzTczqoHHtJ7Lb3oaBGzA2o1m8T93Q1C2vux5kEwcw2CSkKA4oF",
  "key15": "3vWwW3ayT4HBmqmWC1BG7UqTABmZSd1vqjRC3exCTqvmw3Bp6DkJu6G5htR5mXpWdu1NFhVwb7YERb9AanQWEJvq",
  "key16": "42ssR3961WQvZJ6fbGLsVpzNLLmqpJLxZ5eNinG8bxrQptv4kiAR54xxwdqtfANwDKftEtgjRD5p2yyDyRttDQoV",
  "key17": "5QucDkL1FNwejWhVP2DktRsVW1WBJ2sHLCg7Nct3HhnYpwmj7dcPgk19rvgsu68hH8eWsWZEitP4E4n93YjBQQrb",
  "key18": "ntzVBZ7xrU6GmRBZnjNbjke88ye4m2aWRgM2GuDN3AChJajqsTHjaQD12zb41MUgaYzTQEYBqLt3Z1wRc1DAJ8X",
  "key19": "hvMCFjLTNojaUQ4jacGTQPV9X26avyVJe5BKokUGg5BZZRJkRi3WBx6kGQXZvriADBDcMQXwYLtr3gdQ8dbd55Z",
  "key20": "5hm9R6XTkgZNLg8bgZKsgsvjueStdmW4eNuU3EY9exUr1quu2ir6x9TGK6uP658ov9UXDo2K97ucZdFEjhbqgPdo",
  "key21": "5tPkphU3dDZsWmoqJvL2tGGSQpYBMg2rhQJ9kMkPsNyzM7pi7zkrH9iiBusvgYXjY1FtAw8FjAX6KGc3xS1utB7Y",
  "key22": "5dzXkHUrqsJEShvebafCwTuujmVgWhQB7igFJAoRjgYA9LHxkWQY8JUxX1eDMM1jrRcBkndu4muTPaeLJ47y6TBR",
  "key23": "3n7jGZeCtrHs6hTvBm4pMHZwxXHfFSeujYFuKncneVh7CSAbimPg6bp3Ay9StGRN74UvKMBVyRJQCG7nDUyB47n4",
  "key24": "5nURiiKKesLZT71VEFoAN8yspqwKhWQ1rYZVdVyxvPqVPj2hUQM2La9fWEznWvUjorQWLrs22Sr6nKwYT55LVVX",
  "key25": "3VVzoQXZscRQWe5f4hj2tcwms8GDAc1aTemtmJLq6WgDyK6KfQaDnVk5v3aF7TUo1gw5gStwcp8kxoZdAKRQcnVd",
  "key26": "4WzpFqPCuqkuWDTgBVBfJaKgDW69ZiopLjEDBSsCTCrKZbAgkFCkYUPkpUVG8FEQhNGDvuRHQBJn21nA281cy21L",
  "key27": "62uUvKGHQWWe6mPCzLVLC15QHptfPMb8vhoAAtw7KAuVfhTo3styYSvrdZRdvDG1JeewDV3JSHdh4pVcZQez6w2Y"
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
