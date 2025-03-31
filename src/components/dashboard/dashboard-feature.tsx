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
    "3E8yvHtkyyasJ2pLs87nk6j6yvPz2cM3xMoRQqUBUZEFVkpaLnn9NxfGzPsDr2XeW5Qwxrf8XTRBxHh4C4PSDs8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xH8jy8tLxyEV1gACkkmKYHfA9XnRBepwKwPNapbDiFDd2nRoDaAmipMBmFbw5QqdUYTXju5ajPJY1k3hoavYUKF",
  "key1": "54S1KQk9TUTRgr9VACmrNLurgF1gfqHGy8WKZJucXjCbi5MG7KajmtZCJLzyxDYykkRWxxG6gdxgtGHpQP5hD7YA",
  "key2": "2wgbZURxg69hfjLQgN3EMcXpNNvFNpDsX4ieShTsHXUbPafPwvthQEH6ftm2YAUgH8SFS2sWAEj95Aor6k9UUocQ",
  "key3": "54dbZFwejmRwX8RivJTPJn89vms9wmZAAkW2cvAPSXh5HiQvRiTwBRUEw23irjpSWpZcvyWtUirbzaMho3dn9daT",
  "key4": "3sctmk8fGEaGGH7hPpCrGvHvdoMnaT65VkXWvekju71LWCnTWaw2hhuNdL6D9wxKrT9agMZh5D6YhnLnYunzmw7F",
  "key5": "5ejCRcnWcBbXxo4jTtVsUaqVZLvsPD6mUiRBz71dws8us8PGqyH1Et8unneZMh5FqVcDxggJLGDv8jj5iXv7fchp",
  "key6": "5dyrE8Hvi9oebhJ3rYxQbbBrdQhJbjZL79UQwSMKz9EqzBgy4Nf5uzdYm5tt9KFDfusrBkYSMDWteStaJwuvBxEk",
  "key7": "3uPbkrMLoEtSrFAsbL8CpYoRhqEGAwmZMohKhzxoukzKYFCnBbaG6UwuuYqg8WePUwzsh5Py5i791xFUDPD5XJ3s",
  "key8": "2UpYdXFGCg44Frz8vm4Q6ZLyVW9NnmjqT9U9ctjf1EXaP9YQbCF16v36b4JArthN6RejfoTirhzTYevNgcoKXJ46",
  "key9": "3PkjQXxBLyPLT4Am216A6QLjT8VnckiPpzJd3ceuHe8ymeHWjqky3hggy8b8FfCqUWHh64vzm3FtqNU6T3cofQxC",
  "key10": "518ajwJGfvBSiRVTFz4tWB6yeenyfaxN4c2E2BpykvyeK1dNNAYkUzfkjeWuqsssvdQit2BBiAeagefkac2Q5zFw",
  "key11": "jNj98MHuoQtE71UjNGHM1jNm58vpc2r8HPXN36VL8T3qTpga4p62bwhDmW8PcuwvgUCjwS2w5cfoePUSyiaRi9F",
  "key12": "NbuaLpWTQCWLxz8o75WvdNjRaBxwr7SpZRvD9veoq5Rp8qJ1U6jH7gEYCHB3HcKwXMc2KPWGU7kpbKMbYJSaQYo",
  "key13": "5cNHcjr7HgQGHNUQqSuDaxY79wcL3GugH9vmQZukAwkGxqpFNTFrNAEWaTQyyHcK5KCes7RuaLXJ2buSKxmF5wp3",
  "key14": "4BeHTVfCcnvuwA5r4CTudQRe2iQv8fprPG5MRmfj8nRPCZUeNdxmxmJyRuWKHQph1WriPxugK8aZxjXWUddapPQC",
  "key15": "2ZBUR9cZeGayURMaLHeeATdHeC7oRceTAEG5Pd3R5xGTUormJjDC8rJKwLu1riP9FyX8KUiVx7SCFfmNfj2wj7VC",
  "key16": "45sxg2kHnj33N1zFWwyQ2qUXkZzqCVRvzEGGVT4vYRHVGNhMTVAwKdMGzAEtohBpkx3dJhwv7PAdLLENdMmMtLxh",
  "key17": "5SmKkd51i2mSPDLSebEMGGyxCPN6uUaXAN6LaTeij5UKXMK1xdGJDpTE44JXYLrPNUkVVWzotvcT7HcwdQxcdLBv",
  "key18": "5Ke44JkGnMSmT6frpsnwTdUXu7ddJjYfnnP3nWr5AufEEcNhJL28wygotmMewu3MEDXqR3JWdtWvYuWidoBgnoyt",
  "key19": "2Ya8w2afXVULWRJoiXMKQJtKSNcbNZA6GYQVeaFzJkhYse2kPReaeqxHzgSuqpkDd9r1JikxG44oihrqq3sUJLNC",
  "key20": "38uidfKjmXatRaYxsbufjmpgNtmkhBARsmoKRXs4yZ7nPkTtmLqZqd6YzXEREV9hJrhW5AbvUPVUyFyHBMz2Jfex",
  "key21": "4YbGAq4puMcgsTGCUJQzG6iMZYxu4tZcyJtWjA8SDYTQQiyyNyvGpn2zJSFKGK4gis99mx9C3gaaih4fyzrBB1Pq",
  "key22": "5cpytXP6snj64hDD6azEmJW9JSGkEb5dgxNLniFmqmrb12FXLSVS3BUszix1SbHD1BXUtaYqCBoL4yBfJHVrw6E1",
  "key23": "61gUTiokwZ3DCmdY5udckJxKWxX5DHeBovNqQ7mccK7n5xp7Qxbz7BEwcmBdXzAKFnJdSjyCMzCE1SHtJmN7YftS",
  "key24": "2KgRPbvm27Wv4mtPVCxP88jFGrjaPSqoTWx5WFMrBeKUn2ZrbHRYicNitRs8QCosbmmPGFZpnY4mta7dyXUwLimv",
  "key25": "2YXZfug3pD3NBwHHQr3EByvkgsi4VFiDhVWZ65nUG5tNkxWMcsMeKSLswdmSCGLw4Uq2U3CTWBJSj32dwWrXWiPF",
  "key26": "5suqeL689sg5fvx57rdmzExbEk8kRovGYdAQvZvwDTTeK2aMjy2tDtGW7J5oZbirKc4HmupAafwpnKFeLgdNjSe2",
  "key27": "5PjLAjc3kuHD5ExMZswy8JPmAAeZD1NiTVHo5AqWU8umCCC6oN5eVpy4vk7kYxSmNFPzaoQoHJuEbT2wMBHXNy1q",
  "key28": "eW3TNhev2UWZa9eYKxUA2eDbD6oH11prRuNCiQPruh4gBpPikRW6S6wbvwrwPvxZwudWLSLUuJGhVd7co2DH18e",
  "key29": "42Un9exvDWZD1UMQqyUm8MtYFvrrYjvpa73WdG2ju73W1uP7b1qoDerzWhC7X5oeYdNnZxoErDPMkp2AxxEt22zC",
  "key30": "4yNSPzV5rxopthUMcVGpkbWi4RE91urgVqCw2foiL1FW55YG5c4m3B8m4aJSQvgcw36hQmfhXwWKipNk2TgsryYT",
  "key31": "2owu4CTcYbXD9K4ZSsNXVgw3pRgPrTy1TJ6fQNjmXjcwVQPVKFXR6pddMNGXiLjJaz5rRo5AbTiPWYxKvuFWVTvN",
  "key32": "35eqinJo8FCx4F9sgTZnxy7ZH918E4yAm99yFGHbcfKFczn7v7nZLMPmw98iaarT7f5kkPrye4Vz3tmpKi35xxD5",
  "key33": "2txvZZ5CZtkWzc2iK8XnBd1TFdGohtiWedynX2e1NnmG5vdJ1rwJdUM4t1RsCm7bEpusQE1bnBjuqvFJSS6uqMu2",
  "key34": "4XuWr7uCqPzAfm6wmc64zswJFH3F1xL61uPa41bycBWadQEWQhzeGoGDqrQrMEZDXZzq4nfKSLmYXs5SULZRRSgo",
  "key35": "2tAd7VwcGo2adhiTyHysHu5L4ytVojvW1C9duSxNx9s2bt87BUuWbpPiSRYo2eRxBjBejhWjjNVWsewv8wuucH6"
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
