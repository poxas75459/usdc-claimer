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
    "ma7nxvM8ysHRmTTiD8MXNLKtKg9cfahUUhj7YLrZ9WC62Rm9Q4o7pBF5bh6EcuS62qym4Skbm789TSjD6ei23rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AckfkNyYhJX4PDfEkNmqis7hVwCbaq3VmhUqxcQy1wZ6R4s6ugXiGsqpoL56QkTm9LJRXdsEFgtwAmdf7uPLgNF",
  "key1": "2YmkCm5qjNrrduoWgtZTYLRsJANyAAsw85if83huSC3mX1YMweJHzhCoZdp291Z1M8vTp2xiF17acXrbaiN5dB2J",
  "key2": "5riDYG7c88k9FqXVWz7GhUisjCWK3yZ4swp5qtP8HjqbwogHTti2tFGUoG3BnoD6kt1DtzE7z5JfbYZqSgEm6pf8",
  "key3": "5t6inyVoLzjb3beWePqcFJv2bUyKuWWzzW5nnGsVqHUfstQrhVbxKfFZmZ4jnHvhWBtVyvtvNgkb8zTBS2TmbAFH",
  "key4": "3reSGfFJyvhR6zjfgoagveFhx13YXEhkAKyamx9YkedN6VwLvEdMsp1FTff35KQsVwPwJ3Qex7vaqfZX9fSz7kZM",
  "key5": "MuVCAmZKx9431QicQUcu4BTzJgmkNmo3SZGZLVugH1K1CiR4TS5YGoj2y8ttexeoeqBG9t43fM1MoJZr8xsWst6",
  "key6": "5PEqaoukctJ87PRQkz4JWzM5HUsyTREmhGcEauXQ6yMdAvMYTVDRT6p1L2ZegxMLicSdxQ7V19p7GoDPsYvQJFzN",
  "key7": "4An4cox9nZmDySaLWFY8zAga3ckZaUxC37M2TpX2A1TDoMnS2ZzVsWqQEBdRDT6LVRfR6Gw3G2qY196YLrK23MgY",
  "key8": "2sMihnG4mhksDRshxCGbarpYHym4MnTy8isxP7MyksqC8BMr6schxCiNYyH63eyiuzjfr4r3h7icDV4RtsjtkdFY",
  "key9": "38CxjLedpWjh4vxiSkXDRRcA6EKTSE7dXBSu7X8sWbk3mZyzmNaS3u5HSAfBHFBACkmTu9oNcLXSinQhsVL4YbTL",
  "key10": "5JAbtiMv2uWUUr796oDM5oaCiZmCUtngC2gJjgkXr7YzoUatoRwGQh9nCgXjKpeR4CzBgDDZgycfLMWNGkwAwJD",
  "key11": "SA1CsWSY963X1j9B3zWEzYbd8a5Yp9tqmJXerDcSxVMh1A44xxmwkWTn1kSNxywtgEHUSxjJSq9XF1sVjNbXP9L",
  "key12": "4vMCQ4pcwwNr1sMD5eDLcaCjBm4dZbo9XbdLBALccqq9SZwf1ZMUSDaZXNAzXVcargAWmNDZQ8tCGqJ9oMjREY91",
  "key13": "5TzgKnsxyARSbSFGC3Gs4abBWGVn4zdyLbkCu5krGvPbQc7gHDHDLCHU33LRaSejufEsrBXWsHynBgMVejLqBmoS",
  "key14": "5KvgCkk5bn7jH4mGZYkkUKbWn4h385ye2ewkyVtC8Wievq7B79hoKU6UJBvjM4Kw4WweyWaXQxY5gGU835puYunq",
  "key15": "23Fg2Dqn7phYoSiRgFZb44XqNKHWfb6diLSmx8aiTPhA7Tdmt4mJrUEu2VmxhGHShtZyKnsDiAc89iiGJfmsgsDy",
  "key16": "9u88sZVJKfXp3TwzssYYrvEMhUBaSiC9mofKvPNByA8nhrJY4K7697m6GnB6HKQEkeTaDr7mesd2WgNgYrGuW1p",
  "key17": "2jFXZqEwG9HP8WTALfT4ThwGGDyqJsS5CnWvYzwYXAevEZzuU338AbikctsLfsh8mh4U7RuB9gMFzCCdwqSLrnH",
  "key18": "4B5AGH7S1tpm6xqEAAtkyo5LGy4YxpL7Q7nP2MW25hZLfJRSi1qizb8yumJXfbAbS7QRL14dMGaMyEVWeXwjZzBi",
  "key19": "3RqBXGgsVD6vF5CBEMbEX4o16qpgrae82C9VRM9MVWCY5HgvHfXb1SGWkGC1YA39P5osDukgkpvEt3RNx2SHEr19",
  "key20": "4N5487CNdjfy51RnZW4US9BC4Stz9zB5WFNvvmQCT59ZMg7SRPKwKsd7RKiEcJF5BaXToWyE8xPEKxqAkegiSn8M",
  "key21": "5vgiGnhWbhdenia7ghwkLCJHVmZaP8tt9Rxiv8fMz4xjgBYrxTWgD2q1G4Kr9waLse1nZo1Kf4xwM4xJb6Kw6W5r",
  "key22": "Td7TmGeBiXVSJ4qfFegmXMsC7YL3DBPtHSVnjnZe3V1DjaJYkPEv88CTW8zTmWhfd7ivd3sP14DbYVSkNkeuFTk",
  "key23": "4F4hSUNDHMursC5ho2g72o6aksMprafMDKJxgxRyUtaqaPjgW4rJF5MSNsDgoFMfMfxX227sQbPdiao5mxjh9qPM",
  "key24": "EVsVFHUKMxVCEJPJWdZ4eF4Dg5dkk46ddosfsvWjdgMEfvW39sW2qhHN7kkBEhxwmixx6ogqHoxgKFkdTUZi31x",
  "key25": "2VCbWr3ps9vi6GismeP58SMUkAvQy7bM67keypSzJdQLB7vw2bPAeYFur5VYxxXYsYfpZvm8sf6hH6sqfCeStY9R",
  "key26": "228ZY6RocHbvW1KBdjsgCvLFFci9Ya8Bg7MncbL9SaAhXpBkTUoRJLSukyPJuvJoCRBzZoTLHToWSzRGSGaqTdfC",
  "key27": "5xMotPBhp6v2KxRz5NXPVAjtnDqH8g6C9yk99zDyTSiPBQ8VqELtEnckdFjtZubR8yLWhTLxxxnimwwsB1PfwWDH",
  "key28": "2oKAMSEFz1m52VadugsH9kFAPH2BaQhjqysPy2KXQAYJEyg55scLDcX1rsmsJwu8eFHjYj6XAgbq1APT6F9tn9WS",
  "key29": "3SqZ3sQF7ytN1oVQaUKHxXYg9NyUhdiKfzGMryPE9AFNtkxt4eJZAfufFwTiXoevAodaymapfQ6BVUZebRJiSbFp",
  "key30": "2CBhg3Ny5DcUAKvVtDASYFphjJahf6VbmPbh4UbsER46vuCUWBg4oYhNRAKFFs8BwrG2s6DM7nKr3NrwE1jmvjF4",
  "key31": "4Lv2RsH4KeucJjXba8rsVLcUwXCCfe4Jz1fTreVnjHn5scXXu2RrquCtMQS6A5D9eX1B7JTXy2zhHSrbLnGCwRE6",
  "key32": "5AVNcy8QFrHypwUq9LpRsX6iCNkDNWJ8EbdedWS1H6DawGodumMg1Ntdphx6c27R4vYKQVSRSuvmWEdj7wVjFeFm",
  "key33": "4rckGqF6U4mn16iSxQMwsGj6kFP2BRQ6oJJNMvHcXSatToY7HmeyDzQY16atzEJf6Bk8HNigoPqaMYTQcavdRe7f",
  "key34": "4xeWg33DpQjvCkZAbimrssCYHmGwEWGjNAfe8Zs129L37VLJr88dyrAH2Ltve4or4UmAX9oYqMbJSLEiSaPU35dh",
  "key35": "3VU3TJL3F4Nh6rqsnjJQ7dRC7zD7nnk2R3JUDckbxf9pdb6BLZYZbgYNUVhQcyXP8wbcyzkWcpPmogeq2hRAe7vB",
  "key36": "4KDXtpZBGf5ggRVxn2e6qV1xYZ9sM4zC3SmLh3W1fporo3UV1XbFxoCAWYhPtYo4sAUiC2ADyFY7e2x13L8HiPrB",
  "key37": "65CtYEGauVnsVpgCbKKuCUVjsZCuyjeJWiEZW59UxBLPUJxzMRDTY5E6ABC9tfjKixRzH641CNTvzLhmpYjdZ2XD",
  "key38": "4VuzndXZ8jmoVxzxoreF6N4zamuYRjt6M4Ntt5VrLhVLH9VtBjmUDkSGsjnj1DCTaoso5X8KzG4xBqkfMTwAn2vJ"
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
