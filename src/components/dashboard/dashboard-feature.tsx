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
    "f6qYngzexAdqfsABYDBrYytHbcee57FHorNHVq8Y1J2CiWk7STeXiiDWTH8SMYyPQbMgdjioBPzvBxPhwjZEqYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SbvdvzbU6YZ2mDQ81k5cwiDaFmNgJuYt3bJgH8gGxzDSbGnKmsJfA9mKzmK3uNLBs7q1WYaRCVhs3nSsdUcnbUM",
  "key1": "5YCHsrpaizgHqmCJTWYJ8e61FEU5L8PXjndGt9awGhVJd8Fygy2cEPh1g8HyUGXmkaBKMz5SG2VAcQN81pSsAibk",
  "key2": "o2e4wqGHsDCgVqugXWGq7FZLMCwGRz8yGv9yyA7Y7bx7ZJMXAdYn67t8EpvDQr7ss8HLPuuRi8TB2RUJprvveE9",
  "key3": "3WdehLUuaXt4EQM84ecZKPUcgVjBq3Z9xFt8MHQKGgZFa5m3hQSjTzV6JMDj8U1UeBGRmr8i7jwKkVDkR1UGNQTg",
  "key4": "5cWakX9MYBX1focQMPEsBtt1JGZ8p2DNGZG1yRNDbueXnmESgLNQpqMtTKzsbXu4wusifX9Mgjx9JQrsMq8mK8DB",
  "key5": "59mGHcbTfaGt4cNRuzkYujTCQrPz3kR9f6vL1swbpt17KWiqQMoMRvw9BMEb6PF8mVcLE5dbkHDKnnT32vSFvyWH",
  "key6": "2h9ckBgorK7FRTiES5UepwBLLSTMsgn9HjEzeSx9rEYxnHYxbJFRjPybpas45tz4xg1H6YTZjN3cnHxCa6uB56Kq",
  "key7": "G7MCQWuDoee4i86EWTB1BNGD937DdgRVPX7sGeKMNtHcL9J5MgTCR8jJMkE7fVNa6d2ru8hxzewWQXDMu5kAXHM",
  "key8": "3s9nmy8Qw9YBzNhkWVEPRVZV8W8ntgeofRPKhjGZnXez9ZJQMcm2EUhDt3ff29GDGNLkekD998MnPgVqq84dxAaM",
  "key9": "3zHLH4JaEM5c7fkjvKXfkog7kByoe7YHjQfLPvdphmzC4WgdBavw5M4DyLPPNzH3Fs6AhwJfEP9uFJS59kQZJmPc",
  "key10": "5y4GjGxKQAqmfC95BNk6ZtUXaTYWHpmGTGTVYyvhXd6aCHLQKrhhj314iKQXd3KiiRuuB4awKiCe9cui3QvV8MVV",
  "key11": "6YarKHr9bnD9iq7wvu5jCLJs2n9ZsKu1MzJn4grz3YrCMsCXEDqZ8XbnhymzyCGVvpB9m2EiDUfJWKzN7oKti4D",
  "key12": "5t1Y2dyVPiUzfsKFuMbUyK9ZBZVCcse2bUZG84jBzxNNP4uYdmTkqNBcCuuckMEMihTk2x5Sph2xftZJKGC4yo6r",
  "key13": "2gv29MniPjnFBWPEBDVNpCY7dmzKsbiXhrabMRcXc78EJNGQsFzRHxBJ3geRvaD36zjmcEX3QMdZUztxi4BmWemL",
  "key14": "2yjEDiqk1hp8LvLXLJXoZEQfSRvJcLxUZm91BixqGyg4P3p5mU8GV3emk3ZQqTASixRMjseFmMNqzYf87sbWZuTA",
  "key15": "2ManPU1JZhLkN85QhP3dGwLeFVx9hSzadpASyb4bAhBeNS2Md4a48aBwSiS9x2bVbLqiaQ3Sa588boD3Yx4Dow9D",
  "key16": "5urNyDUGxpbG1Q56z31nVyGuHWGWEL2fUnF1wyaiWhi9dyLLojUdKN5t3FUMtLAzeG5bdNP3BeHEa4hQgWWgASXf",
  "key17": "54diq1EPYja4gYrccycbB38Jmn754zTJHvyhehnuEH8jLCcndUPu6pp5iSgwoPMShR8mMMALdQM36ZwDBRhZ5jPD",
  "key18": "3XCiLNhoG2P93NFr6ikFHvfLeD4nAZu2EFyh7Bz93TtLkhdFErdjC7z15fuEwmBaeakA4ug1ctxAkRUiLzth7n82",
  "key19": "3LcwFPrKYd9NSUw9T1ru1mLY9mwiEudsMATR4MjJGNcAnq1Gy8na95cuaHvdqzqi2SDKL4fwTFBQaahr8GMgYWY3",
  "key20": "2ThTf3vhq4fcrrRMLBZWzWEHEQEDWARJFBpiy41uGeoBdsiMR4Lu9GK3ZR8LRPXC85C6ErZxWeV3uPp7uuJip3DT",
  "key21": "4yG3KXkqVJ4YT8WftC8GMqEc5PmVwkoTctC6dvNPGTLWTroweKKbCUFEWFifWAmmDB9CJACN3FgpGnVEt8CSK5MK",
  "key22": "5JH5Si57PLiYoJwULHmBKkCjcdctYFi4rxcM6DHihd6Y2EzESzbnpXLLBnwjLaAFrNkDNJ2w881bSuthKNDkMhyv",
  "key23": "5o5sLuTfhAEkicYVJfrUCn3DFM5ZNrAqyr2GWQnvktxJEkpCZqZhMC1p3tXjaRzZaxs9HaAXzd9PRXhnhUW6LPx6",
  "key24": "5oLxvCJCpzXHpTJJVS88aPKCFCHQhrRzPd1WDoBTMaWC6gpdE9rMzLDnqdZKhDMbb5n6NocTcahVtntHmbEiqvYb",
  "key25": "qJcDC9mU9jKkBJ7bwD7HUnrG8D93HMzaX1hcxX2diGzGyn8dzWUzm4HMBhz68WtCRcoazkjATh2cn15w3ZuUdBb",
  "key26": "5JTdTeois1yofSYJRrCzBHjYHNMJeHuD1ZYbxsSr4g4HWc8dLbkXnuZit9LSwk8hZWwcB8RidFoidJvqMWEvLCAv",
  "key27": "257g7tYEsF9EqpagA2PhA7owwmpwFBDS8b2MiyUZ1MnK5QVSiNTtsz4edqyzWTsPcAh2Czbq72xCUHRuXtyYL7p2",
  "key28": "2snjYUqXpbe51QnSTN6tan1BMjy6KpLwxi46BwMENVqUQu65jMveRiTtzbqmgUCF7o2qf7tD5gg5gj3rEq7z3W8L",
  "key29": "3y7aSrJyLPCayJTe9uFP8VyAJNNw14ByzvVDLut5j5GZRFJy9XHjgBfnZuiLAGBw8CNTH8Fka1TybM47CsNoAkvX",
  "key30": "2rMMr8Aq7if61ZumsMswC6VvgBtMDKXJsgCqZsiGrxYURTQXcn2o43b7AHdQvtfHA3XaT6ky5N4Gw5qPTqXQf3Zc",
  "key31": "3gJJzuM62qcuMiLhpghgHN19rypQ33ABgPkTZKMF1Kkub58qHJ8yQ4aUwGSVdDBVdAp9td1T8adLiebPLb4bK1nJ"
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
