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
    "UckdNSBJa1qRMj7rRZPSqgADPj35nStAbFzN2JQMUUgXz5tVZGdUAHBUyW1auDiJAMUQoYxmCFA7xQn1gfxnBmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6F1NRcPdUViUXkQ2iuPc8SSHsEa1EUCRMwqVETXW5EMFTCjpXfkNXsuWGdKSd4iBoxUofN3M8B8dDdwZh2hpHnR",
  "key1": "2bboCTAaPqT8C495WhtPda5zhv8wbjVawwgyYABuVqp2SBe2xVMP5MNH6zvXNwFFhLa8aKc9NrFNz4kAUxrVEdV5",
  "key2": "aSN4smByaUgPVJzqqXLwzPRE61gh5rgw68DbV5GCHsFLgRJgpzHsuFh3QTsfSSDTMt8JFsCzTYhnAw2cvMJFT8G",
  "key3": "54y1gbae5UqExi9YecL2HFnbfqdqxtQYRzex6BKiGbjxMAk8UeD665TufSd34Q8VefHnSQL4Q3tM12j4fVzvBu9J",
  "key4": "5Ky7FgTjVZb4wQ7pTKuoEJr7Gxx8nSCugdEcEct15hcaZGxK6Q8XJHAunzwrQsNYZPBPxAefdqUwigfuh5oiRYBo",
  "key5": "5ZuudJtpc5bKVDr79ZxUtDYF6c5QekXijUghkPRa2D4eqzSfaK1yzEpqfimeL4HmF1EBK68Ju74h2op4ZpPyP87f",
  "key6": "yM5D44jdHL2BgGdDFNQyrH6TJiUhDYbgVMuASDujuqenpFfcyD6Bkz7jD1zLsmc2CCZvNtiWCnSs9aknETA2UeM",
  "key7": "4V1HFGQbBNWMGWgfaboB5pDYNXykG9z1CEg4YN553PGnwBUsMNGR8niHHQJ2HpDRYkZNbBg2twhHvnBnWLRjxgD5",
  "key8": "71P2iMecBWTcerpPUy2ZNJ2AurGoRugo9GQBWn1HpbbYDvW84cwDDZPe1PssWLXURriB4CWjSSLNoB9M1E9LgeN",
  "key9": "45rA1gSRyDpEa726ZYFu9Wi27h9BASZXmtEU9khU5H3GhhbkRJisiuRRfPvyfEVqf9znP47BLSZWoHEa7HZFjGZu",
  "key10": "4GRRatunVtDwMRP6VjcdBFKr2hkZeyUa2ew8eD6koLTtVbUtofSxTay8vD9MPcHAtFbLzqnk7Pu8Uhx4LzZUCSpB",
  "key11": "2AhWnyV7zxm9JFg8s4p3XyKhFXJitgeHYJgsV8WWUrdJzWWRZzUcw3okZ2t4wZUkUvxk51AvmFzWrd3gfsNXS2rp",
  "key12": "3yz3cvRQuRhCTwMh8jVnjvpVMNRsJbE49GykjQkqbzUGHk8XitcgNK3kzBwXhatZtivmVvz1Z3MjG7hkWryAnjvy",
  "key13": "3PRXuiXnm4dd3YRWA9TR8xSmC3cEKJXHhbghSXAL4BLCEnvEjDEWLdD4hdqYw2hDfFbDv5TS7SysonegCFUt7dVW",
  "key14": "22xWJiZnZDoFTVsuG13e3NHY6TSdV6wjrFeb8TdnjmRm348VEJ2QPvR5moL7gocYWxKwtcNwGH7DJiLnREiD4ucm",
  "key15": "29GBpsyQRZR16hcCq3c1peUwu52vykrbz6aXVVYx8umYmGAQR5WqccyZMvXEhQxvwZ6oQDD51oyJPGuSU2uMq6py",
  "key16": "28AUSHquxWEzw5WPeyrFnXUJP173xicoTd9ccHo221MaktBKsoWgfhZCBoZVbBVjAya646jN3ahn4SiCmsh4dot9",
  "key17": "3Dm7gX5qyJF8PJrtGq5XshuMwqRfPyUmM6K5nJgZj7PLuEjvbMFk8qzjyonMeXXzYuQC315zx3XoxVbNNo6cXV67",
  "key18": "2jyn8C7CAUTWqzAjCzr7oNMn3TekxxEcZRgTBRSnYSLprPNoTUYcfQn77qFDFu5kUx4kQ3d7Ai92znniwirchUWw",
  "key19": "JvjrXTeq57qhqrNfPCUJkPew8BqJodYXNjqfBCLUAKSLRFZmpyiEn129HzrLTmkH2oTiHupkRDkPfkQJ1qAQgmZ",
  "key20": "59omaPXsLgTpHFS5Y3gmpEWwM5Sf9JTzjg3yQfnxi6CHFp4LQjakScRsvSECo4tTbkomhLTMw89VRwTVBnZUgr1K",
  "key21": "5qr2viUK8rCSELHbAeAJ5RSsiy72aASoEgCJiMfcZVZtbWfrd3idwky3a9xQhJawUvKfRv6CXK28gdQrevSGEp5F",
  "key22": "5PvD7cF8g1NeSzW1tHYkQwkhvt5fTdKsTMWi6CUjBZvNsZP9nVy5ech1Qo9ZdcMJ5oXjMAs5pnRuYeLv9JV4M1R8",
  "key23": "ncdAcyyhAqYQ5N8pWSZ694Bqw8sMQgtHEGCph2q5wJ9zf7279akCQaPMx5hnjZc5sgKGf84KjXXPYsNcYNkhdUT",
  "key24": "R9qv7hUAT9hUjaGEDbRGPsWyrUZxfA8P7sn33nNYcXQg8MsL4E6SkS5RjWw8Bm2ixXhTr9BTfTpphHaaG6gK4RT",
  "key25": "3aV7Ub9M3LSgA343CCg4Re8UNeLybSr36YceyddKexrs89ooGw417AS2sCQNbCaAhrQfbFevyiyfvGMR6wVgxcP7",
  "key26": "4QBhrQCBmLo517QbzkmswY497cdUoNzpYk8i8favVVzVsWvCEviqYyDJJ1P1ggNF6fd2EcP1vXSxbf3jxWv9MfqC",
  "key27": "3B3QPSkgyqBVv4UYhis8cRKikPGXUH1YwNy2i5yeqqVvPm9i5BxFf1v9zP3KFQMSGxWoky136WZob7bJYcdBuLe9",
  "key28": "4k7Kq3cHGBuUWiVroftYdtokBYdvaoNZJsYspYVMB3LH7FeX6cDhwi4yoQEUtrNcMYvaBCn3fPSiCcW2FcmHG2uu",
  "key29": "22kSnrKRjhV58pN1coyN2idabn4fbR7wJa9efdyP69HBkcw6guTN2ssbKHHDv3daW6weTrWH6DWAWQRrYFeSxDGY",
  "key30": "3FtrwHDDM3tXm3cnUvHTm9ofQMm6NYVgqWLJ6qTAKgEdv1JmcmDyxD7EL5N2DHFkgMKHrq2FjDRgNFbEZbHiwGUV",
  "key31": "BeAUsnfHuZaBNKkRboYpB2NS59RLGVTtrjgnXWjEigGiiVK8mkMJXSeqkLN9fMHypWW6Ho9gZL7j5tdy5mQmxEY",
  "key32": "EUbXV7PFGm23uzTnFs94kNydJQuAx2pnxHAw6UWztXzkc5KSEhKNLDLABoVaCfoCf48XGCLTaVVxHwd5qKgmMf3",
  "key33": "5ZZMYYGaQ56iCVvZjHUEkc1PQckAXLtgg5PATfHuVYdX5SPjL59VnuwDuNH8dydiPbTd5E2jEo2Wy5mXBYv744gK",
  "key34": "XQt7A654wDJrwTbJz2dPvDayZTuXGgYg4ZnrvTrW3B2F3Nbm6iSuU6U5ED72eQum56tZysSpbfQBgTjr4TgshQC",
  "key35": "54kA9mmFpHMd7ckPUm2DNLcENr69aXN4ZWXDcHQjyu1x4HidPB13ce66QUqYk6B9kiGURW1ybbsxRPfdEGWm9C2C",
  "key36": "2nja4YymjPadQYkCe4zCgurmFzjqYWuJFaPPmYD5NsEkYaT5fFRqrouPfk12v4u2YCuR6yBzJDE2CEhps7uVrsPg",
  "key37": "5TGqicio5XggfsbZsujhqt1VBpnhzwci2mfgdUsCPwRNYZvKcjxE9fEk25Zvt26KeKbfYDv46TTTFnRqt1s94su3",
  "key38": "53Y23fB6UNZgB1Y5HtWtNqZJCLHjdw3ro5ae9eKnSDM7ZExwrFkYLTQ4iMv6RZgfeC4UNqNGTQqeaRtgyykYpomC",
  "key39": "59WWu34iCcK5VoVxuoY9t2R7MFFE8xYdHaA9jVVigcVewnh2SYSxp9TR7Wy7hp6hu5Jt294DTweKADEoL5BvPtxg",
  "key40": "4r7Ed3AjqWEHRPrAaQANjkT8oMG6pnCqBPhcGJbF29Bj1S1B1sRwDaFwCXU2WnPjTXR4vLDFfMACm5VrHyeWKC2R"
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
