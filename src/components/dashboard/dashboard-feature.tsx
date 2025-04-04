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
    "wYpRmktDhYQfGtibU4p7k87KKAvzEQaUaG4cBE1d4i8w4LDwLBcLsZxTwdH59ZDxcJEhssqAURhgGZF6hpxTWpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zv36227rQFL7Gh4U4kr62oK4isMutzGPFMZUEcQxfkcBLNq5L2RRVVmmY4KtgC6bPTa34BdhapP4kQyRA6P3xDK",
  "key1": "5QVr4fzxjTyVTnCi3nbJTBRLL2VcPevqurFcsMTFo3RHB8ycckssoSLoT1NfeNstTATwRhqDGynpcGHUmefAZofZ",
  "key2": "2tzaUyyA2v6WG3rsYrncFiw2xoQgmf5XUN2g9kHXvxo8455W4V2QKcvi87xi6W2wMJYHVhENAfgcCsuB9z7LcbgC",
  "key3": "5jBN7b7t8UvddAVmUF3NgX2wF2Jp1To1KTBvMN3JTrZLfcQunJh246ybCq67rWTGRog8uXSCNbKdJe1Bv6EBYTHC",
  "key4": "2F49q6CkfRDFy1o3nAC1nqvjQNEFSdgbSK7FQBHB23i6bYivRwa1feCcRNYHkaRrUgybdZNSbT4ucdaxAHibXXyj",
  "key5": "5xUGp1No85N8YdMos2PuPNtgPE4XPwD5UCR9fzb1m6W1y9FKbofYaKo4RXhVZUtcYqujeCgTMDzBCLRFEV3X65i4",
  "key6": "2we6mPXDGUFeyBE93S5Tv29Y6NdCZSwuXpk6AjLmTfuzd69SMBhABDMXsbWyFbGtHS5kYMfyBWmrnVKNkbPypKDu",
  "key7": "4utpvZdwm2T3aZYjEkySDRAxy9rn4ydmTt5JgWKnv52dC7PUVSfGakPsbeHvJ9tBL58fuMPGm2kSddB7WbMT9XhU",
  "key8": "ZX5XSBA5qZzxLT49eEq2ogSYFDo6aA89LnL29jYQcxLmn2pH2qXT52insQk4f8QF3RrRNPDQBgecGb98L4tMUxa",
  "key9": "42P52Udmf36xDQeBP5iVxMaDvqvEgRsk7VtQvPi84ZAeRYYhXBcrTLuMg6cw1f8w3vhaekQCteWc7P1gjkcj9xU8",
  "key10": "2X7d6mQMEVR54EekTHHcD6hSHbSZSpL6rucVcoMy8WWq7UmD6xRuGTiXWZYDFgquYrMD1p1XKfmJD2dXS8CkRtZD",
  "key11": "QVUurq3gLDNCo1Gy74TwzbvpFQwV3FuGi5ko2NNvGVpked1fCPgQi5SnwwoXq1ezDZzkBnfov7dRz9gN3EXgceT",
  "key12": "49yqg14w7YjJeHPSQbQ9TgGxpzz3RqXMDmNCtXr3YV132NEJZsDamoxa7CCDu9AVoFCnRhZVKKEwBirZr12aFBNk",
  "key13": "4QW2T6RfCas4ZDHC5FsFt33ddfzKchimKt2qFAjvwXiPUh52aRHx3sBVr3ggXB1SZ9mLnz5E5CfjBikbGKT1tFXR",
  "key14": "2EEw2eYTXFToHTntjD8h28cYwjZ5p8KdcdZfs4Q7F29xRjnBoM8w5uGK9MZx45kMKcGszKFWGHJ6yHNzWjAqsC1M",
  "key15": "62NA9djsvkSBxNDeH3b9e6Z4CCsnSXRHWb19J7wYwEzUdPR5662v5xd7dugpZLZgaN6LpaBRu2EkzyJSjn8gQPYi",
  "key16": "6536peY4Fgac8kZp3twXyeEmH61qvTukf7y7SdwiqazhAPgX4s3Y1QfCjadcYmem6quZWueZYfFW8AZ5e3yBohN5",
  "key17": "1vcCsKySHYVWcnAzLENQxb5EASxSZ5ah3BbT8uhQg4K5eFKr5DG6H7WvJtDXLjsusGeW99ByLfdipgodLVvxfnJ",
  "key18": "4i5EPvYsjki8XipXc3nE2qsSTboXjhe1SNhBK17wBXDrSvaUktdAXRvbkD17sXeYDR6dRfWigtLcajwjPdbehBRS",
  "key19": "3um2vsBZFardfKacVU7meisD4DLUVUpaDKnCjK1S2ThuzU8hxcfHH7hzJgDvARMbGN58JheNqJH1xqLNm2KFGv24",
  "key20": "4JVT826Z6uTnGa49MASMdzKJWUYb2P4bxYa7Q3YyJ92JYbj5LhUwVYbxjZ7R4oWJwMWtwEU75mPjkQMMSera8vNn",
  "key21": "5UhwUd6TDGt5szCtwYBvgikg6SRi8KWWtxUHwb2caKphZw3rJQq59zDVkLg5e14gV4qYhC3rcQvTFLU7VeGhuJCg",
  "key22": "3J2EH6Ee2hfKdMQwKJ45gkpeJjFiYQLgAcTmKqgZn6bcpFQhadfDd2VhdfqXFwiZX4cP5fZ5vFdiUQ8GEndq2nfY",
  "key23": "4kRhpZKMQDQ5U4b2vtbRyaB8LqmznKFoNGqUHemjBZXBgD2PRd9UieKTTen4HJg5MTsXM4dPZfNosedtv9tcJu6U",
  "key24": "u9xYg4tFG34wmBohUWMjWBPMyckWtuW3HaHneGzkGnYYTVcjQBNNjEyNpBP2dGFJiGdMMg4sco4KrW8C9LtL87E",
  "key25": "3eXae2b6FJvfM5BAS7YwjcpKJoDJrn2gcorCkrXZjTbmCsovEV3nTZzANsKiHVj7FiS3gU9M6mdy2biYjiQ9bsf2",
  "key26": "4VdxZbPRiwVeF75tJjQjf9W7YZEsqcCPwZjkdGVv7SMsGVbJ7fyNdS1gNjG3UYVqakLqBnukf3aB2XAswEBGtTDG",
  "key27": "2o5VbYXLXhc1YXwT8GLoQ2ymqRsmSSRqLeiy5SbbDuQffezCn9jNNRkZcNp1Xxg1jvExCJDz25w6j8K84TC1zmKJ",
  "key28": "232cmjnZYdgmzRJRaPeYzDgQxm8zkLxfUmRDGbRrxWP98cWNm2kA43xuMmPf2cd8xTuFvAbakGCrtiFMuaj3BWQB",
  "key29": "5e2swPC4cgHAXb2gTV2eCdbrFFLbhhG1XGQECEhPpLHtfMkxMqjmdSeHU79wCKKmGJFmp2asd7QTKmwWQSMhi6Nv",
  "key30": "3NcY7PXbHjMZ3GKLGXEp15xacuR9CsSvnKpuM46bzoQXWUmDVJ9s6xhorKcFjitxDuQiCVq5X3M38Db8CG3Y3f7J",
  "key31": "2Yn3by82zpfLCXHMAG6RTGffVbzxgDQAdpC2rM9MhHc5m8JBSZ14ydRo1uMyQPppXk8pksWyx6o3D9HdrnDeMW4Q",
  "key32": "2Dub9Y7bVNdqEhHfQovh1HqpbJ9Z8wL4yk5GoFvx3eExkW1XhWsadfQRSMiJWq4GUe9gbcvtmUvm83MPNXsaaZ4v",
  "key33": "534aTpfqHMyJGK6pGyMC5y497foqpj1SugZ1BrLhxq9NYnTEMhF42nF6RXx1hBVBVWtS8HMEZgr2bkgH7cuX8Z6H",
  "key34": "3EzgmVtAKRQr59cTDimqUrcuZbiFy6XxjSK5bYAXCSPnXv49DzscrzxQc8my3DSKp12UZCjaFax3S82oYSbHPDa3",
  "key35": "42Z43ihNqjwGaCnLGJFgnXRyH4dKxWrYqzc84hFkAjyBAJzhV8GQ6xQWLBg4T5Bq4cmXZHBnea2MvC1KUUWDfgai",
  "key36": "426mEuS5zYRt2SsmNQzmuVYNqxn8SRtJRKpbjh4LXvpDnUndMA5TxU7g2HWJSGnt6G3nYwwnp8A8QWqq4LpJWrC8",
  "key37": "3KcTDsejvjcssoBwHyTvmhqHiwqsENGfkgyXy8tQChu1EPZ5ihaHfHrj3JcGNVUWEfPFJuTurg2Nf2W4zhBs52B7",
  "key38": "CzyAKg3AgsYQ5fQbmRkhDTncfX3KNX7LJynDzw6KseR7vqA51sqWYwPLcY6Atx6bwHAsnuamRchdVDxJkkf3Js1",
  "key39": "3z83cSb8DE9nFo4dUuS3tgAqXy9bZhEvWGxKVYi1Dzs3GMTSZCiBroQ1xiApySkS87Sax2cvLiCdxq2htQkADR4Z",
  "key40": "CNGDwZogV1wsU1p9vBib5P7HtQK7r1q3CMPW6XU14DjsQWc1sN18q7ikQBYbsuWvTjwiAFq5tMH275aNLswnGjU",
  "key41": "5FaoRLtJuDckfxZPfRgBY26oy5dTYfpdPQZBURtptLLVWGvoyVoBa8bnkVW2cejPKv1TTRb42MM3xU2fjhPdaCPd"
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
