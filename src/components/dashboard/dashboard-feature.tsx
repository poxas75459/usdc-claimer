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
    "4xutgwmPW6cKuX4D2UebVAptVwhh7bkUuMQ8LvonfyZwUPbJc3nMPYvkGSXB7pWgTrVMYwWr4v8TxiJUuwkjPvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uhxCDBwSHxyeHbTjgiswrzZKFcGfnkiNibkop6yS2qY4Z7aY5noTff3aV9up1UckQaWai2o3UuKjstEKY6Z59TN",
  "key1": "4WrgrenUxBHpbKoCmAG251K8KLAS67hbmqdm79SwyvRvjh9XdV8MzDNNihsyQB2ZAGHLrabkF2nT2hRFHsVV3Hi9",
  "key2": "4BkAX3djbSxxi95yucW2i83GTg5gq7iRU9reUMu6tFPoUcPnUCQDWrPp6nGe4B2nvV8t9uu4zePFq8gdR5aw9Wnb",
  "key3": "2xSGQi99p3cLG38Xes4E6Qxj9NaUDySpXfXLyidWgkdtp9y4HzfUgCGkmsTcBPzjPjSD8G1JdFTLRe4SsDkcqsNL",
  "key4": "AK2MoKMtGU9nh9xpPtdM5f7xhEzwZDD5fUzkiQnh5QDvjFv46kGGtVbiCmdYJschHUKD3az68d1gjaQK5J7teqV",
  "key5": "3ZxJvNejr8EqjB5CuCk1PPq5MZGZmkGybJcakSPu33fvnRo9D4FATSPapY7s3zYpRbcwfoPydf19Jjr4vYBWVCvD",
  "key6": "5DkXKDawX6QdYYqb8CAJVctWF9qCtGzXWcYd3fPNqNPZ1NngMgXqFWf8D8wwTK4y2yXGZpwZEeWL16GsXSunLGwW",
  "key7": "4zQ6Jsn7rvPqXTFgCMNqVWdfYL2WnAZRpRtPyoueTxNZp8mtnx2LGADKLqPdRrH11WtubiKtmVEraCV36FWfbtkR",
  "key8": "Poe8EwdF3mt39TFH8VdBqMUA1YBj4etWwr2UjSmbMpKQpMFAUBQL8Z9nJehWfHHQKT8Z2UWZCY42NxhHnJDHcHd",
  "key9": "3t3E2m7oJAcnc1y7fPFUk9moUen8C4XqiBa5P6hA7Fm1Lg9yPdM2b9qgQWQ3mJqb2SXKF5nzyEnazqzrc7WKQCeS",
  "key10": "5EL33EYDNSapLpmyxJGjPxczmWj6mfPUpCbGneZKw21VhQpcLAYTPpuaiABE7DFYpGsjX1E6SiApGqST8sAtHawx",
  "key11": "5QNg94AtXNeePbHnYWUeScrA28SuMbZHrmFn6Jt7yC4Mu1NziqAo17KXXSFv3LZcnXrTXKd4CCu3QBnTPE2DTbSN",
  "key12": "57ta7UtDR76bEC9YNgrfNDkYkGr1GrP8iBTpAyF9uf9os5ya9JEP2FK6fSSSawm6uLjw8YS1qx9UY2XW72Zs5QsU",
  "key13": "5bVx8n3sRNs4uQKUa6w84kKZJbgcBsEmer7GnR4mzdyTAAEbXVVUwZyqXMt3158Xjj9JKquNdSrWCN511Stmv2gN",
  "key14": "3KfYt5g9PhjgkouehcFuVNwmNikSGm28NHAXksKnqtqekUEAsnhzLZLN8nrwTGxQfAd8YCGD1CHQGEbnL1WnfKF5",
  "key15": "aVkLW6TwLZA4i1JvFiyc1T6G8E9zGjN2Zt47e2B4xH7didHjq2nitctZtreEkF11vSxjRhJV9aeJv8of3xLAb3n",
  "key16": "3dhJHGcqvoUMxfU1aqa4qEPreCwgpmBtGXukNjrRDuksDbFFVmvZFSioii9HMDJTdc72PgBupyRvSvva3ozwWShc",
  "key17": "25GokwFVeBC4wU5AWbGdFZA5s3ooshztezYjpRg7zhEg6jY1Tt8PJWn53d3RcBYiLrfHwG5wogQJULVBGtTG31Ee",
  "key18": "4beJS9GTddpBQsgaDeBzWJVQb4Z9LVWbbThyUqtmZ9gxmkMtEHASDWNwuFpKjXGSs2PpgLyxPdPzFPxByr71Yxeq",
  "key19": "259LtkufzenVCEpyDQczNX9sVP7Zq7821X9wPKnVkX43U1oCYiyqCQNV8e2j8AEQ3dAYy73optTU4QqyFvcUUf6Z",
  "key20": "fdcUqeHY3S6dh674aw5TxW1eGTtKj8dQYkKC4gWVLRG1Pmo5WEuS9Kf1DwyVk5ANyWSEX7DXYfPveqwPbtgmYcJ",
  "key21": "3BrEH1AsJFyzpR7ZAacaNbfp1NCCbaSofavbXz5KEnx2xFXjgYi6q1tjJKdGvxtvtEpyUX3yLnek4mVutCoARJgW",
  "key22": "2zd1ocP6BkNbisQZFtGKcRFMYjr228jJqkZ2Uwb5dMfa2QK2p5Dpj9PRvmS7DDgfmeawpuasbfNbXusa37izX1jE",
  "key23": "38m2Eg7CPjacU58cpikgsxc2t4FVYcRVWj6qtQ5BCBbJbEFakeXwYZDzTcCXPysb4v85Pbs9offYHAvb43v77i6x",
  "key24": "avgWxW2NwtYyZ29wdHqMaVHiVh8zACnSeM9heMPQQ9ZZENwcANZ1NXRXLFREhMbZRsQsS6Zxhqp9zyEzZAPwq8F",
  "key25": "4LQdTLB13tRnYnXsAQUgusbf57VwhLnc2BZaBrRCbdFj6DGJN4kFAEBbuAD5p6Ybuj8mUJreDJrbhdfnDrQcL4yd",
  "key26": "1CNAAKeYK1YpkrcWyM9enuA1G38T3QN1qL1oMqYYKFRkTcnnCbCs1wyjmpJBXXeZDLWqbB4b19z3sdXu9cLmnRq",
  "key27": "38r1dEGHmrwyQYFWLc8z1AMiywrPEYte4K4yfmjKKfLxCf3r4RxyQfGXdiJx46yVnepiQhipqgggxhSRdfEo37ca",
  "key28": "8UFCmv664vQyxxhx7uPnEq3rpJe9yEme4VojZ1P2sC7p8DE8kSaPaftPxXWDxzRTcW4pJ2W34NHTX7m2nBY7GHJ",
  "key29": "D3JtyPW2KPFBwnL24iwqjv6pSuAwSq2Mvu8s3s5dmjbC2MSNLL3npF3Ky9uB3e6EVF2dBZvhUXShALGdbwnMLb3",
  "key30": "38fpgEk7xApxzUQUekQPH1cjPtSmm3ouVe6BTDNs5vePSrB1CMfKn76x8ViYQUAHnXLie2A4fmYwfjSAYhvG2C36",
  "key31": "5N4gv26ugKThHfJe4BBdX32fWXq17nAek8NRbE5XnJMiKiAiBgK7ZeiY9nhiLQ5bZtbXWuWJdQUtw2UpxF6qbS65",
  "key32": "rU3aKyZyL6ZWcuT2zM8fgUuFmVmkE1gkiKHJE1M3K6w8r684GSWD5mhqfKmmr6A5C6KLrqXs7rEM1DCsuFVisJU"
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
