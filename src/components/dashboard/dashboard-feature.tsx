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
    "SxSSpzyo2yjPPT6T76n9BjKk7gzWhCZT3BFGvUgcFwfYYB3KiUa4ikCUyiiktdGdjZmquLDrikon2NNr5xgnxcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABBZV19PZSUSQta4E3bneHarjWkcd6sp8kX4z51z3NbuZEeNKSUjeCU8gcLyuR56wcz1dZBaPWYnei4QGkY71Bi",
  "key1": "3xbpHxhuYAJJfHFMymQcrz1TSUC3RbG8kWjw7LAMsDanorMyC91Ck1kEoCfwnKeWdqbtuEfuw9veaq6DasqeBxXu",
  "key2": "22cLan3u1M5PhxVE16LWB3F66Lh1mqNGj3tUXvmdwU5ALn7T7D2ohnFNHeTCF96kXnYqSwRe65H7ASGJH8NFZAhn",
  "key3": "4fu5FkYYPcYXko12oZ6NcHZDB3MoAqEexRExmmM88ipujnUWKQEGSpUJ6eHRWviqM5SfjDpHLgCy5hrga1rjk8wP",
  "key4": "2waxo8jZcvW1of16sNdwkik6VeosHFomGUe5joZi1tk1RpguNnyGZZXB1ZuCxhwfFNfzPQt7ZmCJ55C1R1djPVkp",
  "key5": "4qf4ZM6GyeYaEpjkcB5LtqGxcqam8UH7iTdm16YL28kRHyBbPSFWu55faZWWGYxczGE7tQ36ZUhcGVkaWjsXaCuo",
  "key6": "v3K4PS6g6BkFbfA7HTg9SE7sJJkpcGm6PY6jgUAU7bgJdTBUvF32FNpUjALuNLktmvqFuzD4Fz34WxyaVkVaus2",
  "key7": "gzdQgA755P723gdTwDdVWD7msqCQBoABuBGkmeAXUbxhGHT3oN81RJFkyXDD3CqwHZk6Ly7xZapMx7SazarC8vR",
  "key8": "66pFGWZLYPB5Tsf2bf8vtMsuj6C3tgcC2p3ssvsGgZsQ58PRaf6kD1XLusTU7JqPRKxkFauvb7SX5FH3AS2VQiJv",
  "key9": "xcavEkfPYNrexpAB4v1vZEmRX4CW7puFxFEXkLMV4e8HUu7V8Far39VCFcJbFRy3db29gjKUrWmNx2Hh8kVQRSV",
  "key10": "5LFtBzcj9dFZxk7YRwJQ5VUngQRpJHrwCFK1fYpQRxXXbZZRL4L3UNkkp14RDt3hcoBqoARhwwGEnC8YRAgYLFHN",
  "key11": "3aBZg9DQpQX1Bj6j9d9RVpoVhsVP4pTW1iMBTNJa3PTmxeJUwN3gUMNidXNVHhBVZyaJ8QXP78rpzQuRxFARiq9r",
  "key12": "5XSk6H8zA9qxbvstY2zEAxn9PVUQ2HzyWSRYSEaKGD9zDcpLJgPxYUp3DwEhmg6J9DAchwvYFipAvfdVjGS7EB2B",
  "key13": "4Vw3uSPWoDKyj5xQyrERBFBWJ2MnFEZWoYH1bRAzkqJMD8J8N52rLtxGd3w97r5LHkeHiXeBbfw5X9V64pkmoUaB",
  "key14": "4rychw3ooSbAWPan9irQQ3UpM1mkTsiAoYzdxxdtupihpzSPBUnuLPodFzBHo2pkngSbteNq8h399KrEHFqiTTWN",
  "key15": "4FURiMCPYu6hr1q5sf1bDVXzMByGqzVRsF4e53TZX9srTndypGuV2ZwdXZDt57M7Vb3yfFshs1vzWB5dvpA2dHuH",
  "key16": "4gyC8JBXGM7NKVDKXYNq8T8NRT1k3LQoZLVgvsPkcD6hfnvvd8MKbGznbtx1XhKiY4jcRTdTCzuCB8Z5eAGrhYoM",
  "key17": "3NXjz3FeAhySpSZHJB2Mnp3gAenj9SV4ybq7WdHn3nSoPdixcrXvyEdihw8FVaBH6D6Q9kVAsP9FAo6HQWsxCCCW",
  "key18": "3ZHFkZ7ZeBF2ZxSJHH9yiPGrY2xfPf4Ky3ux3MsQpPZ9H6q6FafxhQEQkbWonZyQAZQH1vhWgduW8ACgGZFhZgdc",
  "key19": "YR2Fj6ELqNy2My6Eo1LX9Qk3H3YHcJ1mAk5bBs47ycA6kM1wWCnsufz6ccXr5H3Xfmw1RKUZhiLA2dyikf8CH2V",
  "key20": "3j3iPv3QmGdBvwkKemnCZxafvYRAV7EMvjx7kJSAz9Y9cDgkZ6MPi59zMJT7tQ5s9Ko2ajVncEY1kAQ5NJ6U8tuc",
  "key21": "34Vrg8KwNQhp6f9jKz81cYiZXpZYYFJqvqxzz54iKrnm6tZ5cNQeN84KrcRzifBHjBqKVxtgzQLDhdj9q85Q4jAF",
  "key22": "3oTeqrZDK4VZkTCZwQKktHdQrJdYU8E7sBS8v5SvuecNtY7aBdg2K65nDmFJBVggjVxvD1Z8phJ4WPhEsVbRPHL3",
  "key23": "4AtZQqVWQg1ZtifnLRDphT6xv7fTNAAC2urBW4rmEeT7ESgKvPBNvnPuNfH1kXgTALHyGkvtkAHqjhKzAvze5zc3",
  "key24": "5cygGsu8AV9hXXLfabQ8zJSvLq6RLXyfx7KVcn33YBqFaoGG2yrxsfts7fHwe177DzXVZkKAeA1s1GEBSejFxzyB",
  "key25": "5CJQXNbGy9k6L9mML2SZfjY4ZkZ2i4k4XpDjjBt5z7RFZWSLNd49fUzVMoHz4E2ypGNHwXezCTNPL3BF9LT9JoLz",
  "key26": "RAkhNaZ1xeE3HE4XYFQkjkiTwFCnsVAhpwtjaumUKkqsoMhttBL3Wazdud5f55LaudJezi9djbwjtEuocU6tAvZ",
  "key27": "sbUCgGhhMJr8MkjoWmfFVCcQbf9hsSsYa8oQbqVNoKaRrQLaQCAQ6qfhrhtsGFaRpyzeXSGUjJZNHM9YtPrdWQr",
  "key28": "vsLKn28vfMpkCPUsJG2D1MHWJzGc1yiT69AGUPhZQpxTofb3xZ38ZwsKZhmmLNtYc8BgQ8eZtJeGtZ8tTevzNWQ",
  "key29": "3CmdFd9vECQLi4gNBrWTwjaKu7nj8n2u1QwpHvHTjXYtMiXj7cQcDcKJYZWLizfKNxNwJVJ5GMNRkmkRcfmJVEpj",
  "key30": "jQEJxb1G4NbcD7a54TJ7JgssQKAFWt3aQLZ3ewCs3sJ3Z2qfd7AsHmvC1VqtH9oweU6xz9zMLL8E18wtm1DLEJA",
  "key31": "4u515vS5Jb6fLbKL3Kap5n8NuN8VTqroTABCUF38GAAkDv26ae3KDLrNAoREvuupEfvqf71Wwem536zGhTZQxsE1",
  "key32": "43K2EfuQ8UUGcvenARD2hfHGWeKphKmHbsoJ5tpUvpcD6sywjPFT2E1U4yVhCV2poem9Jik4bFAtW4iGVkToSkPm",
  "key33": "Wk2raU1JKx8AFkwAUhM3DeXoFweWJGhByefnM734iYB8ULBPk8LtPF9DY5Dy9J5pBy1NnqLVKR51bjmaeCPYc4E"
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
