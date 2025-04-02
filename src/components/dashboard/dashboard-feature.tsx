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
    "4aTiaex4oE72dGQqFWWfdcfHY92bAa2LCucJmmpG6MvqjAKTyujDgmdGFn5C2DW5jR35H1PEZuFjNXEQPwob4J3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35kG1Sm59cfWkmuDhNg18nG7rxRjiiMqciBwJLEFofhq7CyJqE1zRicqkjidqKdUzuKBhUDMfSSigBS98HSH5y2u",
  "key1": "cFBeVaCoQJfmFvrFHdb4swvi91RWAZiFKmPs4BQ3qB3ZTCGhtiZw2s6HRCVHvgjmWcpR4NAJYiwPjpZNyWsP9nD",
  "key2": "3okMwA9yrQwmDGvCBMDw1BnRzzrbhQT7HqbQXiyMVKJNCmW4bfHNeo6Cpc5NekvyZjD6LuZRuBGz3UcHxa8Sotwa",
  "key3": "5Yrwd33C6xYqFMXCZ8PLMYSMj5J2KsvNxqTtxz8Z3ZDMa6ntjAdXbdAbb9sHL6XEeXQ9rqZxf3jvz2LN1nsiWESo",
  "key4": "2kiTLQTk1whYgh26rHcDV4rPopVMmWv8ghBz3ypRP8e6EwcYr2zYmUBoewfcN9CVLWJqXBXnhDxFS5rv3VteenPT",
  "key5": "1Whrdr9f73rw5kraK9icdbv3PBqnZ4U1hjCGUFrrB7LFbdv4nymjzDTDV3z9tZCpav61DgXjBgWur8zdRo6sQsv",
  "key6": "2fmNWdMzHfWhMWmPGKpG5gYyJeGWxj8bLWdPnciLqLZ1hqgP26nqPJw5XgK85YyjHrvJQPdkVswEK1Kjn7aKkYu1",
  "key7": "44Fj93EeoQJrYs2WBTFcDUJqNgpnRfrQD8iztvK9zi1iAU3y5cyMtyjBnYAPuSbiEkAJR4zXimbMP3PUJMaoFDrS",
  "key8": "4P8c9S9m8Pe4esUeLPxbfYKfHbQqgNKbEE1em9zWHWUdPjNdhuJWtKi2LNPSZCfXb6peSNuSDLdKYQeZSKzuoDee",
  "key9": "4QDn8nTV7nVQVGUB1mmBkNE6pCmWvQpPMnx5eRdB8C3vQyuAXrig8onLJnUEqaUpFgx3XkTW7e8Q3rbUznG3KvDM",
  "key10": "2E7jJ7xevDXitT7FFwrQnG3kE17mBBYgd1jPes1eDDEZYxBdRmJ47tnuzngbanF7X1MCNue69v6cxyN9ewKcssxr",
  "key11": "3he3Cps2djFgBvpLjyTFn3XgsKg1qU2qApsxRWXJ1K14ytyr3fse4ZUMZPp4JEcNjTiVT2p5UoJkmWE7RsXT8QNM",
  "key12": "3ajDU3jV2s973DfzXbhDmqaBSFZ9cbHZaNnAJm4jKNeMV8pRhnfHZKzbxgk51D5PAf5za3CA5dT3ti99Vqq3VgTT",
  "key13": "2eq8NjS8Fx8DkeJu5qLvm5dkQ7qUK68AgHubGmQyWPdk3vXNRMs9pMfL62wP6uGT4LobW4dSru535CWvDsxmMDCR",
  "key14": "UR4rzdZdG58XNqdoj6z7tpfkFa7vzMUFrw6yfEdv4k17qpe1jmgnS2VzZbYn22faxmujnGJvE2UMEJwpxV97Tpa",
  "key15": "5PLG1Q48J7YYin7znkLhop1DyB5FThgKZdkXTUHTM2gc3ejdWiMssx8x5HwYzpNdiBp3bAprqyniRV9q5FzYmwh5",
  "key16": "3zpvRpNtA7xoe9fobT9epkWaa36g8aBy9Ksdn5BcCyDUHtwD9BhFEy3QxrjuHp9QZhqzYUH9PpeAAGeLx39Nqacr",
  "key17": "ftm9yDsdAxQDthBmyN9pSd2tkwhFE3abREqa73XG4icDmjSGdghSfB7PhDiwyjmcPvgpeCucWMVw7p2KmtxMegw",
  "key18": "41UHEJvyJ4vLwdpbmtFU93qKZXNHC8D21f4QRuqZUkN2sntzyeB94DBDH346uKo5K6QvXtgdCWEaPnwNkWo5pEmE",
  "key19": "2cEiUGgiBajCsHdk18tAyae7H5jgan67AvXzega4mTWTJ9SL7wBZLc9Qp4NFxL4nHGKWMphAEb8tNr7gfcQxB7uQ",
  "key20": "2XBMsoaQTtFmHVFQBWxGQ6D2SEsxmehtJ2SP8JfrerdJ5Svae3e9JYCzna4imMiriXuGjvTL6rUfa8PhQoATR968",
  "key21": "5RBFYRcyswnA6qFX77BLR3iKLCxm1SCETWPSsycoJ9g5de1nRAocHHMB2wbaNQc6RCmcL5B96XpjEeT69TLRCCXc",
  "key22": "JrPf4bGfz9RnAC8Lwkn4YcHh7dj6HX6bn8AdRM5ZE6vKV5Z4Ucc1t7yPordZWbbUyBi6mCsvTyz2Zmoyh4FxFyv",
  "key23": "2Fai3Uu6ivE6bkBvP3NU86wKx2miAdnZges3qP82Km61C84gGXUxmRWa29JMxnojeAapLV2srWpTWvET3Bw4dDrx",
  "key24": "21W91d6BSuYp8gsPDnxoLkg1PxUM7RhLw9SP84jMAxtnXxiEt9693sjtS9je8kv77omE6koZHmdDFgNk97jpLktp",
  "key25": "55oCGSWUSH9yjUrA1vF2u5UAnFnGrC3LNMJk9dtQHtvonrsw1niYLaFWWWpSdSNKrh9RX9jwgCAE1SffoFeJJMz1",
  "key26": "62ZvKJRKVKq5fng6QiK5TaZx4pYdzjdqvhzLXj24q7ARFWGWqZpgSjRRCTsjhVQ9MZqRg128AuZ79zW9wkMnxdp8",
  "key27": "4bGfrc5KzDPoZkqrqjio7oevDJ1BaDgEEAYEYH2EmdPJDTxkDjVjHbWzoFnMiYyJRiAkExh9cKR74FWogGUsMEoi",
  "key28": "5YZ3kBzUMdFX25KcBSLiec1Lv3adaBXUanTbSigAzKuPzqLnD6N2Nj8PoJwNWFuZ5BqxmVjPZCbUr1B8gFobPdjv",
  "key29": "5tpt5URN8qdf1PQNbish1o3FGW6YhvJ1t9N5fz3fmr9f21bu8BjxLcAd9WL5cJSQwpGmP3u9k3fdsR2DZB5yMQc5",
  "key30": "48Fa3FnjCihxwQ39WWLuqddM1Sx15ubjWbFU7dPKcrmQWZbkefqTDmUPotJNUnqCsmPmGU9NqnLEvKK28KeeqUTh",
  "key31": "5XsoYqpiRZYQ7LoyX5dx6wajPE1WVdoLaNQt9W3PS5DrzvrS6uhPJ2f1jLFcGBFyVeCE8qVX5ddWzqYhnMQ3WD7p"
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
