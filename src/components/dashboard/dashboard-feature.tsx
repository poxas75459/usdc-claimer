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
    "34cQC4Hg7Zn9UgMqP7kEuUL7KPKSy2hzPmKJCpP69JnqQQDy7QKASuokaPr7TYUaCG6en5PPYe7dPh5N6xLDT4hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zm7uvq2exH4NXqH6Mfgcjvc52m7ojLy56up4nSQJMQwwzfWTtAmZhGUJFcRj7w9bPRgqibRquffX3kLyPXw9CJX",
  "key1": "2EP7wK8EkVvWc9ChyGqHPvh53mGcY8RfZ5XggzHWUEjC8TeFfaUPGgp9f532ru6onpwjNfbraDYTseaP5XyywiPs",
  "key2": "3oNptHcp7vY74gEnzokaANSLkep7radVAWt6xj15X6LhSAQptsfhe1L4ahnYad3gMMMTumbAHLYk6JCfPfhyYbW5",
  "key3": "3iuYGGokj1YoWWRBeWD9LpsJuaX9BzBCL7caTtd24o5nBe3edmSsFUk6iBM8K68C5BT8cEvHiDRQQWjQcAUDv8YW",
  "key4": "5UvGxJVkALLvb3fRiqvoZ6oLawN5kAyyWf4arwtkkwX9po6nXZqVMLrrGuMLb3tCdBF1bsSf1ZGfD2LudVy8jECJ",
  "key5": "bhHfbnqY7FMakhH7MQfWYqHsrj2uZocqG8G7TeCpGqNeeUmTJDQM1cZtHkK732WuDjXpqXYsHCHs2Btiin833pj",
  "key6": "2rapzPKAAZNKwx8dEP9DPQBhP5WQNdiBEzr7zTww6Rig1sn1mtoEjBrTcA8eT1K8kCzGbCF1YQ2oBHJWzykwzTo1",
  "key7": "44LbzhskQBCaYUQf4ciaj9tEvrrMu8ZWwk2EghRrJFB1nPCH8Ua1CJ18E9qf1qo96XnhHPhasmQwGpEtvWwWYwog",
  "key8": "4tzvZL6q4p8Ah2t6u7tMhQW5xxznFjzyqqcR8MG4B5izXCwtwrEMBg1QTJvuG8pd25icfj4yDCcNTLzSxeowgA8G",
  "key9": "3EJwZp3N8PhDa15ykKMjm4S6zULmbMBnY3cwZbHR8om9ULUDN8iodphDMPcAuLbCzCUHnXDb71KuhaAsiUU2XPFm",
  "key10": "22ZzECYt5JCG4QAhzyfXe6sKxuQTAZ4wKkLWrZ8BcCwxhqBR7AziVbhmhym27Y6hGTn6E84YPzeQrtahCJC5Y9Rt",
  "key11": "4eqT5CeZSqCGJmXWgSvno4w174rQ9G1HR6KT3GBnyZoZyLXy2mreWgb1YXRKW5PVtk3whkzmko9q6Xw2gw3dNMMt",
  "key12": "4TW6MbqcMeGnZFA1ncR56QhLcpSgoBfgdNqwoY7hkX3zmb5e7Mt8x2C3WNNEsqXibHXFrzKMemQonezQJGjUFhM1",
  "key13": "dkwtfywXwnSMYcNuU9v1fvwcP2X8CU1c9q3rGgRZtT1HnaY2ZXaEZnkKC4x9YTr8YSxqmTbEB5FtQ3LQUHnDbKn",
  "key14": "3msnHdiNwfRm98M2oCuHZTJPvjjTj5CZCvs5LY9KaU5ejmJxyzUVc7VGN2EsU5NwgVNU3E9mSvRci8WH5F24Zx68",
  "key15": "2xwADYHDWrwn9tXzxb49CXshYt5T65wCUnCGgXHRjW2bAMPSVHX4ox6zmfBu7k4HXSDBXbzW4GPANCAZ96hmGTEA",
  "key16": "R7GdwcnHuPQboZwkfF2HLm9N7WRYT5PvUDZ1rAy5WR85ZJXCunzJfchqBD6B2oSkXwxyFhw48pittped6Tj4mDa",
  "key17": "WQidxY8FuDWPkwK7HQLwqW2dfqC5yA6iWcgVQ5Df2SNAwTJfbtdx1uqfSQ44ceXn4X25VGkQjcEMPMzCnuHZu4D",
  "key18": "4VMiwaZPNvtWaC6xKWg3Jn6D35BvecpxrDdFobzYUX6zpbV8hh2rdMDZuymnCBywq5PcfdtS4W4e6SuU8Ss2nBMw",
  "key19": "2vMNEHdCBPVZwKUoj4XzC47m9snDB4Wz1kGKEcW262Vzoh6GvpuYeogrYoLtVvXHxAMhTBfM3A8uGq1UTQmLNwmw",
  "key20": "5oMcDSLyQWzNEMSXSWS5DR7vYsrJisPtQcGXwdFTU5QLtBVEjBwrfGry6AyHnbndQ2wu2f5GA9VtJRJvYLcCbXQ6",
  "key21": "uNGbL26RV5iPWevbNqBFfp8rNzf1JjpVgzDBA6RKpDL2TTWmsCSjN52N8W5VLC4wTfaCuQotdnBztie1wQ56nQT",
  "key22": "4e6D4s1RGJJsFY4bAyiNbScUZ7iq2yXtGBmVLpL9eKocSKsShSREYJ4rMAKSek9Pc5K8MzGaa45zuuYUzZkGEAa3",
  "key23": "5Sej58xi1YbXwF8Mm5TEoPj5ezH3UkpRkBHJ3SQWc4mQ9TqmskmWxCsZ7cJ5q7z3ivcgEDTQnDrDr9oLDRguxgQy",
  "key24": "624Y8f5CpRdmWk2sat12jH9vrwF8BSvYsUkA1N6AZkPS6bBg2tU4tghAwjyukF5QEGn1bT7t9rwbi6LQgbe51mWV",
  "key25": "4CJdHgqMRfrfrYE7UrREzM9EvAHn7wDamFh8iBPxSeY3BeV2XwHZ2MdsQSCPKNihRQcvoxetDzuk6KpvLHnfnu1d",
  "key26": "42qcUWtDqwyytjodniqvLv8CTAuugK1pq317QEx22rTJiCRoFN8n2yuw9VqKnPVVN4P4D2AEybDtyXyC9X5gyjyP",
  "key27": "3NF65aZacRB1BhxwjyrfKbJokjZv2jbBuaekMSmTvUDAbEGqr2nz68ow69L7qesg1jxddtAXHu6R2oSUGfvSygGn",
  "key28": "36K3BrYMayKHTx239Uh4ZEPnFC8bVXg4a4QVNDYkhzwQHsTGYKbYcxagWMfFaASUYJMBsFJ4uixq7yTUd2GHpswv",
  "key29": "46BoTsJCswW4SDvnkTsfJ1NHFUL78Tx582P6yuHPrFWetJ1GjCzF1uhXHb7qWGyW45GfmiNEDk4FvspCjPjmw9fK"
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
