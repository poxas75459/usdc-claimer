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
    "2ugEqB6ZquiEPLnuqYMV8ysqQHtogDoxUcFJMFQmHLmRg85GvnR4h7S1rgtjjDoSbay6FZzdBXCiUUCgUuZsmzHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61DUnZektVfLsG3UYWXNDc6YfSYZtenzo742wZuuSUQxga9x2aPwwJmhrfdL3f7Pg45uYMBBU9g4vpmnahS8vUHT",
  "key1": "3WSxYEAfifowWyD6So7NKS9avvpnTsHoHqgf9vb1QM3Ggub4xboFKcdxmybGW2UKrswcgxhzUjy5bArbMLwLcary",
  "key2": "6hJJ38Kb18vXzrrFmMWRyRWhwtoxNCiujnWfjsZUvrZxhsF8TCcxR9NmBGQSfWfMDDR5DCxez64PTcfJ2qGpgkq",
  "key3": "5mUjxYrK9xajJRWAxqu8DextWp6Z8HbFf4hqmWMEPDcLYcLi6fb69qnhdVhTmE4BE2xAiqEsHPYFr3Q2XmTK3jFF",
  "key4": "2ZssRrhjdP3Lz1E3UnDV4xFrYrNkpGDp8DmC9SteeNaKXX81ZEVjuWR8tHEnhkYzHsRnCSsZHRVAdsfqqKUgkt4J",
  "key5": "5SjWrEZvssyvDMKbbi2fSC4asst3tisBbJZ5YhHjqx5GNyUe8kVJ7gGMvAw61Hubhc6TtXr5zfb2Yno1pgJWUuJs",
  "key6": "3yoaky8LzwMHce3zURYi3wu15jcbyy6FXztw8e7EW2sXrLFMaBcoviP3Na6MSRZaPg2MBuzF1SJTUowqJbNc2SRo",
  "key7": "2xpHRcH1TiU3NuepTcY2CkTP1Phzd1K5ELVgHzpATh1BHF2Y5DkcxwMd1BVb4q1AA3jFHgRbFr9AKRV6jfUr4eTh",
  "key8": "55JGd5msxNR6zQ1ciGynjGttKQqrfU5TW7b8fBrZUXj8NjkaXcZXqVx6RTVCenfBoWVvLyn51vuY3gGq6sR9d5MM",
  "key9": "5mJemJrn1MgxUFR4821XR4CrsdioCBtHhzgqYtfgave6sCEA2FKmAGS3TmSxgpPvAXsCVtLTZCXpKxYvrWjDuySz",
  "key10": "ZE58iNpVkuLrKLjiJU6T3bPBkKWnoHC4EbPJhkNen6KMPupVnz48j9Fd3i9966SF5tdfHKh9g6tHGL8zTpAEtuL",
  "key11": "3RLHrUWgKYbrA7cdud48DdfKfMUamegxf7qCS4KSa6sZ6rEQisfAgBkpwffbxweqZHzLiht9Fbxjt5yqPtggTCUL",
  "key12": "wg7Yk6eHyzDiRf9PgK4CTQvfvpGFmhaNU2GXtmioWvmFmbzu8p3kGvW9VuURv2Jj7YFyjWuZsw6XjFcSiNXdtoG",
  "key13": "2nJhLgLpF9bj3f8UE5nm4E1zgoPT5aDJnozB8psNZhWYdsESZvRhAEjn6w85vEf4kAWpoChmpaEK9n2usn5gdeHK",
  "key14": "4XzwJbaSWAhm6LDcLS7VoHkuudupwdwX6fjdQRnBNkFbHUPJeL9tT2FfpwBF5N99FyYrM6JMH9Quf6AJ5D4jUayW",
  "key15": "5Uv99aUBpFtfLKbBdYAqCZWTJoNz7zwo3WKq1uXFGVrjwbAqCkpNPDjkL84ros52peVKK4M15Y3gLtujxGr5SPZE",
  "key16": "5Ff7JjghqMMRN9rzkiuQJGcYMccdggvU83dv612tpT9mPQxN6iBafrQB7HTK49RgoHrjCjXF4vdre1K8RttvjSb1",
  "key17": "4wZSyRYudjmAN8VWbaHQP3VNASj4mYuXyHzK1jKfuiTXmXCPZp33n5eJEEPAsVWdfqFT5g7qQGiefKwsxAPTwHM2",
  "key18": "4x9D3ib4EJn9ut3Txk1rDEEmr2cACbdMBoxX2Jz8ExHX5wiS6zaoNdV9H41CeVAtpCWX21Th6x6TPq37o1qZDnvc",
  "key19": "LrKTqumcJ2zL9aHn6Yr1Av8SGrf92JG8ugTfaWe5NXs4HuaTixqqon4juUPgby78nkTmrLrfdjbunwSyZB8HFYB",
  "key20": "3nHL3Gpq4rMswJx7sZrsQvktSXkixMh1nvQyaDHCGxSLXzCwjBQghg2zSxxoKZM4b7Md4Qqad84L9F35fKEYwMpM",
  "key21": "5ZUyzgfBrYbLnFFiEDjKJyNSq6E7dAKLn3nbAHGLMX5g4WDUabNKkifWrHYDXgd7MMugwEdfDae6jARBANaHdQFP",
  "key22": "5tYontAJ1fR5dzf4c9yjvygocQh9wijjcdrmFrDZ4EBUjLWxRXbuQFfAiEU7txL9cp9DCbKb2KaF1EBtq8c9QW2X",
  "key23": "2X33khhdnskXqBbCuVmJBHYSSftVqdRfi3prP2nPZUq22TEGiKgR5VUUVB42RXWdcRgH6UcHf3fjkGkCWMU8D8TK",
  "key24": "YtyLaHbsf5AcnHwQnUsLLcf7HQsDbxNoPQRVXaopop4hy4yg2wj9Z4AMzexgD4Xqbc4NwqgxQqf6wRygg8AEfzM",
  "key25": "4RuGj2i2oeV87GqRUMgQKBYR3ChGSoMw9noQnXhzjxXvyLBdGpFuQg56naKa7kP6bLniEf6Y165EPdhqyceyxpVN",
  "key26": "4JR6QaaoxcxFBMokG9YL9rJQj4uafphiJNFe8wR2rTWmkghJ1eUSnabxQWDGF5VjPaf4CoWtzorndfxRJPMySGJV",
  "key27": "3QLWaNQiycaNRNLQpBvgMrjrF8r4cntnMNTYCRzeGPTwR57JyeRAkGHawNYaQvF3UoEWKWY9gZasJaZ2iFwTQvef",
  "key28": "2FZPbzT3hoxbqejsMAkenX6ETuqcAFJigAdhxm5L2vfiUR8UnbwSFosynWMvh73RYyKo9E2pfUArHqLx2BU8LMbo"
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
