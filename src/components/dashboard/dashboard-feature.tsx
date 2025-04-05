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
    "285j4obsBLw9bABFjmrYfFQKxHGAYbZSHwNhWEM27bzi1Xx6UsiHvMB6GqYBDbqdefrV5vdKLPJJjR7fgfRkmN9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XwiioYEktJpvZtBpgPJwcAyNfjgFbwhr1w8NvBi7JgwLLmPp4Ed3hufDmiWm2DFqV5QAhTNVNRr9DpeKxSrVbR7",
  "key1": "TVFLQ35W47Gmo6z7LqWhK1qAa1EeYG2DuvtZQqajnqbEF4xJAk4dpjntF8oJeJmq3NLyBRvswRHSvaYdUEwrfqj",
  "key2": "4ZGJnj7W4yy8b4LkLmzmqpyfGcRq2eC11DNCnKVFZckG3Zp3kUFMhXX5KFxyjBpQDFsJiADUgsUsyL7DJBiBVivF",
  "key3": "5W4hJThBonwd9KqkRuXY5cdCsZgn4nqUsUmAVJAxVBgG1hp1m6PYZ4c7siqfRGeng5n5oJ5YfnZXNCJyotcBdYMJ",
  "key4": "3x68u9KjGFpGTxMsDrSrm3xfRcrcwkj1gXhrJPFzmwqnXu3kddthpvzLpm6AYEPLezP1bVgiS9wtKa3xoBwDJMsE",
  "key5": "5rJ9ADtJHZTwuHzWX8reQje7aui8LJnmH4TRBFmXmDfCTHDpvbcQubWHucdqhxU6ZREZc1mnnrtmQrHVvk5xRfqe",
  "key6": "58yZGjuAmbc411dzRQgLDX9WZ1EcFM76wtgDrJ5atsMFrt74jSSmGXhxunroPQ83wp6LeN3tN18ZkLsdhkFtGXFT",
  "key7": "4MBcZsG9pCcXViYrSTmHUvU5Ajd2PawdEBqPZRDvWT8B7g2Dtk76FiKMvCqv6nicXUGBVaV63TFityohbKmwzqSz",
  "key8": "4jwtHFx1T1LjxoBbVZBgTvPv4TKW36tiocYFLhMsHQmA8nvfrdRhyNUJfBC9krqdbf4bC6rahnvVtBht1nrcYqdB",
  "key9": "3cminuP9pPxEqXVf5r8fWrbkqYaVNH268dAX2ouD4FG16gJeUtUqzASFHF5RJbikKQrXUPWb6QDNtpqtJeVVB8ps",
  "key10": "4spiNS2jLzim7xSzrrEjsBnP4mm92iEhrQWWBFJdwKodEuyVEGUxcSjgCuj7jj7SWshQXniu2s5hZnPNjmC9GsCM",
  "key11": "2is1iPXc27pwhoamxxuKXv2ePswxBiviBv4jW6gU6Yk9oJcJwKWxjjDFerbRLQm5sgr3N83V1rD1stJDvp2mmMXe",
  "key12": "5Fh44DaJ51TCgP9xYMgXxbUdHXcZTEdmPyn7rAwAwPZuVfyjTuFgBNzopSjwuzt6MstLyP4RCGz8QKGHrCFAMBRV",
  "key13": "3LXnzDbiCcyFFtRdHVwqJSxgwqh4e6kXqJCrXic4ajPvCTpt2xr68eM3TVnCchCA78kECbrK9ytCFaQvFHgseJrz",
  "key14": "3dJMUfATdwzgbijrr4NkgbwJCScPrJaWQVxcSw2wDVdkXXUrvZTgvytDMF5PQg4Yiy4DMGmakWd1NSScvdeC78DA",
  "key15": "5CZTwfT5iXzJCJUVBBWjr7Sg6woCnPDDvhw4oUTWUeJ8D7xFPWwDfgjgzN5PsQ7Q6upSRkBs2cshmnwKKdb9EzJX",
  "key16": "3XqME8aJy2BNZN7FGjTjWWy1U35Ja8jZv9HvPjfUdGUCiHJGmQwaGgqmUhm6dbVkjNDo4saREfi6xde6Q7EXH2wf",
  "key17": "3AEoro4mLePPGjrqSg4pCD53ZEJDLxu8Lep7N4QS6JNb5DUDv8HERo2ZW9YNvYR6UZjyMJDo3t4DLnPM9DVvU2Go",
  "key18": "43YFduzaiNXqjdg3kPCen24VvzvHD3GJW1F4ZNiZBWD2ViEzyDYu9x3MLtVV5hztHS7PrUZu9xUGdR5Y1x3rT8Go",
  "key19": "UWgUQaZN4VYS1Mh14RFznTTcgyzST6VuWUcLn2dipFYq6Sm7UyTbDPvYUncVNDJ8boL1bwb6K5FzzXfnGTay965",
  "key20": "4mLdLmXaCYRG3BLk3mTzpv6hGp6TQ6qQs9afmXy3hKBwSdQdJSqcgbcBiQEfPB68nuubjYLZoxV6zUYFqeAjFEWN",
  "key21": "5UsJq1nBcNqPNe4g6ZNdKBF558knz4M465FQtU6TMZQkq5KXMzDCZd2GDaWZSrjirGnTxJdEDqGD1X4sW4htLAuF",
  "key22": "1TgbrjyEVFvwwYoXHcKbyZM6RrWbQCsgDP7meuWctdXtVWyyAeESDHZw8iD7NtZcd3RuYhhXz3xUhrWZSA73spd",
  "key23": "4jqHSxLRSBaXbKywpEHLxhMBNXJw68MhqErEzhUUNgi89iFBAZ5SGeZEZSTqW8KxC8FD8b1Naj3VUR5ZbD7gWvEo",
  "key24": "3o1AECUMfD9iCS7TJSkPwDq8Vk8DTi9fTtaUeiA9FsaMXm5VAVoRbDnt9JaYm7ir76cBSgJXpy2SwcseqLGYdUA4",
  "key25": "57deExvy9FhP8NVoACHRWaJYBhZjpBYptbHXq9D8ynafcVwFpsYrv4b6jx4TARmjsvUPu81ddZM6KijNC3QCbRhC",
  "key26": "5yiAhHJCvivUmrRRxbJJBVAHR75K5xMZYyJdoMMjxPX3hBHocCu63mrnHmnzYzxY8vFCVG1V5Jf2wbrKAeedo85",
  "key27": "2pNBJ7haVcJRzH9U4XrHioF3ghVaBDwa53T44XJ3R1tJqveGjoyxS53AqcE8VSoYm9XR4t9Uk8ibeTcYPyQ7rNRF",
  "key28": "5aya8yRJ6XjphEFebuAqhiBcSNMeLaqDFoUuKcBGoRtS68mpgU3UKyErr9TYSXn4PPDxAMFEKWQuh5723c9VHnAw",
  "key29": "5X3RMf1Y5HUmHpx3h367ttbppXyMziQKUxRdL38jrEbRyHNi77gY3C5Pg8fBPWR2JQ9Tt71XxTkiJkG4CFRQZc2a",
  "key30": "PEjUPLaYb1jaqE51ywZ9ZRSX77BqVE7RDXH4mu3LPWMAZQdgeffJtyz8hJ3A3vugyCHTfY42EGfonnDXM5yyUrD",
  "key31": "3dbdVcULb3oeb4HPBRo4rRUAuGBfejiNbuchhTXjqx3o5a2kWj7kvmf3w4kzYhUNvTLrN8gYqBiJoAukS5T2npPW",
  "key32": "4DprN99amFo7jJJuTBH31XGPm5iaPwYPxb4iHWYhpo5tc93X2DF2nVrXz8hwet23ekhfLfUzExxyzg8V8xfDMgJv",
  "key33": "51VuM4bZGzccb6ham5hYqQuxhrpSLfygMeLV1wHemocfQKkwud7kTibAcpgXsrCqXBGUjvvWxmskT5sg3aT1AZay",
  "key34": "7oSuWFdVsy1gssYX4MRZSjUrL2m71K9GBPXwLPBBipm78oFNnKpTJp5VEroSBejv6q8THgMkmZ7BW1625Dz7Kmk",
  "key35": "tfhjm5vDHnnRBh4gAWTW4ch3whyLnSaeLbnYH2t3YZh7EhEJVHCeEfmTYcaFEndRHBbyhG5YWtpbfByiBGskX3u",
  "key36": "4RwxbtVm9QXSyES3h7DCqqzZnT4pLeg7P6w1Nuja2MgyWLGM4pYSzCTinUjD69dMNfMdh2Sh2Axjcnc7RLyUz5jx",
  "key37": "rLWcySzTMZ17eibtBgNiN7Upua6ZtqYHXc1U2mCrBKAf1AaMWMid3eZdhrLVEC7MJ3WBwGTWHjyT3tukxPBUyTD",
  "key38": "2NG7w7B7ZgsJpVujsmRP4CRY1uL7HKKtsi1NQf9BpoNpTL6rYwAg74DEFNwJNqPLCWadsUvvHC3BgW6iyenLaB2j",
  "key39": "4TBJenf9S5eQxmFYAVWAmk6UHjjRRmVdmUtoG2Lcina2K6V5oCBLXos9JeiJX5bqYJuNo341ELNpzPxKeDa1rJLY",
  "key40": "3jxoEdvPdbuUVgaFjJAqkYmzrKGyXuK91YteBVwEF4Msb82Y8a6nD5PkaEbLxpWPKsfmWb5oAaoG9Vtd75if5JTe"
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
