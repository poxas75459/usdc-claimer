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
    "VkA8jEWFWumbB7hmaPAJE9LCvATvMMGxnHixwBCMgLYJD8UXCqLzZwhy8nYRaeVMCLHLBJT3seNPhDKeTi4M4As"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61zHhPzMXRo8hmHB8FyGNZgNRfLPue8Q1VhcwM4pSquejjiiaLZpP5Jki6FXSLMz82NVfhDv13Nch1x3rD2EUQJK",
  "key1": "4BJs8wV86YN9hjzrt7gT8frnsTSdk7pEbGBHCnsxLcHoLtWotijeWYZy8F9tqvJuNiWiD339QnGCKLfqfxi7B5iX",
  "key2": "43b2a4Ui5z6Dkgfzak2VAZBbTXNyejFWXbyYx3iyZF957kgKWSp1houZdy77tLRu8B55JwKTKW7J1SMp6M3AeEwt",
  "key3": "3iHtHkgsfXLE48XWrCWHuvxaWjfVr7ZDU3npEjNsWgo7vup36uADthyo4ZBFQRY3momAWKhE2Kv9eL19EWa8ph6W",
  "key4": "2eh9mdG8bNqMksfgK3Dhb37MWZw95TgVBLaw9PgL1SK5aRkEeBhQScVjuGnGE9K9RcxgFmUgvyatYZh2U1btjstp",
  "key5": "3WKAmAGjtsxq2n6xBUc8jiCmqdwBgpSPhEv6jKWwHLpjJAsR59naAome2RGRLRZNobhN96KAtQftuiRHxgyzEXVm",
  "key6": "4hKs7sAKHbCTx6pxA2JxFDJT7mS9GSYj3vjhwENWKGHT9vFxUSK9G2JWJE7HNbvvUV8VBuuM8xFxJZevYL2tiYTp",
  "key7": "3RfBNrqWXLU6Takrfcy3bWWCBsLUBqNa8bV7HdkzjSGCpNFdFLzHFnvVkUjZ36grwUMwCaqk8biXn7M8qnGK6Max",
  "key8": "UK2YN6udHCmmTJnymdtNnpFWcRSboM97pE5zwQijBcy9GTivVD1WwfQHJzUJK2X87HDyvn2FWQzLo7JvCJC2FQU",
  "key9": "5cGLcwp6Xu8YcXc6KgaeaqJ65WtJ1hok4R3hRGDCFy8ogL5TatKW6L97MvKDHGo3FEEYRkGvEzFqjvZabKXsSkRz",
  "key10": "t3oHxDaHFivi9hsy3pT4fEQcGDtAroPnAEXNDiHKEAjyA1AytPBJX5vD6T6AQjivQBTVcraKhuhvuPnDqj6U4A7",
  "key11": "3fzjAtwWP3VK4DMCWSJmw9Y4zYMRQSvqU6oqw98y21zWRZacp39AiKwWGF7i4JJ1GiULhzJG8thiaA2yd2SqyQ3P",
  "key12": "zSdMZDffc3swxFdTjyJPQvC4d2jECQJ3tAsZxbgXsfdX29e9MxyQJCfLavSaq6P6cJadNQNJLQJF5LizFm3iYAX",
  "key13": "3HGNaFBaJxTCibqeYmY8NYk4rUzRgusTvQNMzDSLsf9XV6dDDhqfN1wry12VfL6oJKK2Vgg8RnB5xBcXdBpH9GPt",
  "key14": "65hpUpwuc5jWBuSEvTNbykUHhajJQj5szLYR7xR6y5t8BcqCjw8bWYR2zrKtQsUtgAxQbWTqZDmXoGxdSvdtCbMH",
  "key15": "4yCDnDXkTCw2ps32KWA85Go2PtWaaPT6QJgZhCUEBngDD6n4Vhyy5D4HvFMhC837qW1PVx1v6yYXNAxQv1S6j8Hc",
  "key16": "2WXdxtmwoPJn3dbAjqgQuxpeL8xkjnMgsM8UkdsirFXw9cNTu7Nbih5FTQ2W22GRYv8W6UrBsvP5dVV3HJhtcX9s",
  "key17": "nk1BFHrWvzrx7EJW1n571DfZ2eYxE1ymjEo6ChTUD2enm2HQVCJ6DHKZc2NTDUYV6JSfpwHYw9Pb59p4KoqGRwC",
  "key18": "qNPo1XY2NgYyfiq8qcE8npRZhMjwM8PE2M5MPC1Z7ZhGLfsUnctTNajaytLpqsX2TJUVtWCSMM9DEAjDwVwHocH",
  "key19": "5ZkCf8SVXvypKvN3xqZRHPqqLwAEAX2kisdkoYJ8E6w9DYprTzmGQpaXic2oN5gfPUDneybDJHc7NxH8Pbp5FwyK",
  "key20": "9wZzmczwWX1LMK6o5q87B6Bs61smNcWipACux7jWNw2H8hjrGJFBhWyUNHPbnkgrEMfoVC4CLN2TTovqJSeCAqY",
  "key21": "5NeJsoiZuegVjsv2vrqdowQNn4G8AgS55QmADA1dG26DrtWksQSnv99LqT7h2LtK38YQz1nBSMmmMTPhKtGnygWd",
  "key22": "4aXkN4AHedj5wU515tQY1crHZwcsi1xZNoaU1VSDjC3LU34UiQm6hd3BmDgyM4QUWhWL5Sk89GUc6d4ac1eL9PLa",
  "key23": "6WB1foY8L3karuB52fvSZP7DLY5jXAJFVCp1jE5AVSu8N3x8Ux2YURHKtDC1PQikotL3e1hJi34939RsVdaRbfw",
  "key24": "5PmfZDeZ56onfoUgDV4ei4jAgWBXJ4vcaxXNWCjTy1aHHnNJiR54qLVcunKHeBpuAAjKW9SafMmYqCnbLom3dWQM",
  "key25": "4HusTX8AaycKfseLpdtg4p5Nzbxx8E5f7hD8j9JQQAq2Qu3sxHSuYyv1cKTjuescdSPGn4DpM1TvXhaA1NLirAPW",
  "key26": "5sBHDzwwy9NQaAm6Qs8VaR3NF6s9kVpb7jAmMp5sjnVsDTMHTGGCFwwVd3K2EcDun2mwHTsq2HwafhLkT7pm5cER",
  "key27": "2HVHjFAB1iwE6YxS9WCyTr4CBwSMaPE7hduQbrwjtSdz4P6R8ZjB42JsjLpn4T4wfxSBMGRtGfVYPA1gSvzARsD",
  "key28": "3uoSPP7XP7m5TB83R1XVEebCVf8egGo3peRpJ8SGvtL6rsTuHsu2EvTRAu9aLmXeHeuSbE8WVwFvx25hRJ5he7V6",
  "key29": "3foTcAZgvaLkZ1WfiGFpt8pAKkLSJZEKFp7tByLrazqHyfEGim2juYijKjoGa4eaVqYoyisMnGFv7CnwETa6m1oL",
  "key30": "4saLHWNu7vz1CZkmLDKda722Q693DHPVGbiy916YRqWA4asTEDLmpvm7Siq7YaUufja2t5nhUL9SNpuKtkiLQwQg"
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
