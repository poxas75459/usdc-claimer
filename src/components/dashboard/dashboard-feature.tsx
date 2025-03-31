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
    "4fe63n9AQuKXcYPj6XcLwwvysoUM9UdQedRdV9DXsyijzHMHSB8BpXhJXSoRnXFHqJ2MeszxQQxEub29GYP7LTEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GRqgfZpdt9WQQm6kBKBwi5tmA9fXLSxFxMsKLVEnBTvNzrEtXFJ9D2QdHUbVoguKGqcGXgQ3B1xCcrYB5Sbk3Ux",
  "key1": "2FQbPnQuq1VoLfJXG7sxTWRJFNr9iny5ykYq1Qum4xaBbMDVWo9Ws7DV9jMJdiUMVbKrEiuN3tto6EGAzN1CR1N1",
  "key2": "5PZvkJ6kciN1YiVyJnsmp5GsBg8ZRjEc8Kmpx5GYpYdqR7SwNSUJ642opNv5HWybTXDhANPfRQfFhnkWjJxZ6cqb",
  "key3": "5nFP8SnQdYx2bJmShyeMv3vupqxHP8DnwYo8g6GFBnz494LZANKVUgi2UShtRgzPxudbW6wC83Afw4dizbF69tVQ",
  "key4": "2v7newq5eckerma2Xw4Njua4tbfbmhvyp1QvDE2Y4XrRC8MZFwSbUgwiLBPtQYHT1DkZELsZseURV2SbE89SNe1D",
  "key5": "2J6eodoQvH5smASVZmRmpjwqcgwNRg2Wx6NaBgkkip13H6NFcej1PWRcZzoYkDjQgfHu2kKWakEKz2Y6RHgLPCpK",
  "key6": "2h8HXQkyUSfoui4srUUWo3mJDcYwt1RxzHTcMesMTj4uDdE8T7x47WRPfiq93v5UHe38DzUaju7vz6Wk5Mtxj6AZ",
  "key7": "5xc9ntpYFjZFhLNKPDGAZNQco21E8FeLnenFh5tvsydE1ywD1Tziou7DxyW4DMX5nLgAdC7p2ZUnzycQjnQSLtKa",
  "key8": "3kJj1GebhF5EQHnNGNtfxnViPzLPCnvkJ2yKeAAyAPBZwbNssWTMXmTE4hq3JWGdCYyFfPuDJj47RPvCc7Zekn7Z",
  "key9": "43aEtM72W6ipu2eWrXzRrJrb4vsGDcyBVPREeVoBpwR4neguuKS8FHuwpDKeGXjnJdQrprQ1RT5ok2jpJGGYGqFe",
  "key10": "5vEwJT5ovN8aa7TYCatZ4FKg1YczWY4e53XBqAiAx3MmAR78NSTMjB1hmGGbnFbFZovpDauVq1KTqNEFL5oByLw4",
  "key11": "h6z6oMQ1fFAtfRFZ8eD1JiqhYMoz62nr1t9cR1wiuWp2iG3KZKMfzz5hLGSFuftYfu8yKxUrba5tzZLi9g6Y4Wm",
  "key12": "3ZRMNBvEPDZcupohF3V4x2whV6e286NV1jZ9ZDqANFpTAyyqdabrYegUW6JxsWHnGyV4t7hnyDU16aVkYrfBGhAd",
  "key13": "3196w9o9yABAq3Uqu4DRDajUcJLGkofiNNYVUUj9toDEUo4J4mjJe1T8i1DubQEGPMo3aXRVRCgLsJLD34R6T4VG",
  "key14": "24WD93c5xYHxMRQhvMTuLPKpfL4QEhEV9CbGb21dZ6xY531aavdXD9to2edX31f9e2a6h798eK1ByRs2t7FhBn9v",
  "key15": "2zXRQXHUaqZa2FHjfuGUR8WHZHGTxzmR9HeyXdbeJgKLYmuFvewAhND23hCNct3RCDTqAR1YnBQz6eELRMD27CBB",
  "key16": "55mNsbrXZa3fCWZsvoQAQXm6J9VL7n3ANk1mGNFpJmpSU7Rw6jehyRUTxGFKfckHJ4ACnJjU36cyDWzgwWe55TqH",
  "key17": "2ZabHrPPxPiVo9MZYFFFZeMr5ymjYKE4tiyjgFnH1A3V4N2PeyZaDnJr5avk2HgNPUppgjrjr9a9CbUjWzGAZbd3",
  "key18": "5K4Uai6UBzxx7jAoiQXPhfPEbjJuxswhtpWAD9PU3eD5yh3HW8sAQq6tpZZgUqafHNZZi7Vp9yBNFRGVBpurx1EW",
  "key19": "66zQFtGdJ7Qk4i8zRVosm4m4pcrDTMQiWyU8hmZ6jewwTM1vYRN9Q2ePcArzAhDuaKCJEbYyrN3bd8P58SRaWR7H",
  "key20": "4gzNiykGUP963hJJcJBNS9F7pvnY2L21S3vkmDDrrnK6Yhy5CneHMUGxrrLGRBUMpPBixwdBoZAyDWivF4eCwcfp",
  "key21": "457mNYFE7NfETdVCNgZPm3vDcq1eC9MnjSu8owAfPiopuMUfF9Dmd6PMsuzzSS47ahTDkfehNDfGTAymy91L9JP",
  "key22": "4UyxZ9Q8TKfhWE6CY7Vym7UtDLGpDuyD62dXopLgnaEsRvySWceHLjx7aLoeceeAmMemK4uZzsij39zDTgtdC3B2",
  "key23": "5ZBhC3Tpa8EJqHctWEkkuj928BCRuJ2gEmuFDSSkUvR9nHoivKMBvwxHkKea9LXXtS7ywbS2ES3kj4gSsk8FDsgy",
  "key24": "3g6TSH87NxkzYZwS48wJvHbAvzF7mW8qu4RYJj7tPuachrUEui4ty4CW1Ssy6XE4Yko1hWoAkrBoaqh2FB7csGom",
  "key25": "5t1yaydPJqNhobodVWmrtwRrLB8TdpwP2UK5opTAwh7AGjz9FA5AR7NA9D3whTqV5iwLU8mUCDpJTL21Yw18aV7P",
  "key26": "4XMQQyPcpNGNPCB3TyNyB5yDeihxD4kW1ufqYVwNLeVM977voaTyXNUtu1YDb3mQXDhLCfsKzjHQFJ752hPKPuuE",
  "key27": "4uqWVkBzSjoSh7i9RGcxvPyAMvxExyTGm2w4yPGvED6qQDjhkJ2CCS5FizvYV3UJ7WuNPBt5169L9zo2qEwjMSJD",
  "key28": "4u1ghG7qsaKbPzwfYvdrzvDSauMjh9JZXgtaNLJ4LS7bk6VTkV1bYtURUYnV9ukM7zFBBs3fZMQYQ9QJbsnzdPP2",
  "key29": "3Kan6anjR7uaHcRjtPksKMHSaUYQ7DMbinvv3dGc8gDLiFYwLuCndR1BkY5MLS1w9iHajYKXueavAx61n5gWsWyR",
  "key30": "3srZPWwEykS1GHzj4RgzKzJWR1nQWPWwyr5aRgdzQceMaKT6BJ8ZcqfNbDB2NP4eE1Ds966Z2sDo6FeGSMEYhwee",
  "key31": "41xJ42SuPkkXGJuisc52GNuvXWm1L1JZdF7ECDGWg29MhANegvc7ntmdfM8eHnEjLXF8Qi8bcvDiCiXRXiK1xdaT",
  "key32": "29YQ9zUKq4jNuVajcyYM6wXLSsETYFDNLxJ6dLfa1qP9p7uwp25TTsYp7UVf5oRV2ptXYXRwZ7CgPrnGX8zCsvXA",
  "key33": "4CFmqwg5k4b9pMHYJ8N9MLsAz33mtwNduHBxaPHkskkTBgVt1E8bMuUwXZP2wq3UrJ7YhfHiDrZJaHBv2uqp8cYc",
  "key34": "2sRcHawGDFmAAgP2uMEHmTwt2fZ5sBW1jJFdouAsaEyPYrDR7pnuBTPZC7SJJiMxFJ8smEtc5GRHuu2gg3CrBU8u",
  "key35": "2McjfF8z7kpoXvvAK4Tn76RK38HHfwH4kaDNXNHYjbmAJWzwVpgSHQ4kvpHFYjnnMMGzsTrLgtYdR8j22bNqn3M1",
  "key36": "3pgzan55Z18SVMPjZUhTD9MFSxDhE2d4fPfS7Jg2YLkTPMawPk53VzS87vT49Bb5cun1AfSmmDjb96vsNyiZFLD2",
  "key37": "awW8MU1eyqASYiJEGtULfbBtSuh1A5wsLb3BkztHGQSWQsbhbNbZSFXV87xPvtRTLQJjLEPabyzEnaNehbP5A9u",
  "key38": "35pv86bF2zLJLe35Mse3f3Tqm4Fy2oJ4bjqbwv78vaSmoYfEs3j7pr9hpM6Lny5voH82EBXJF54UjqtsGDxoYoBk",
  "key39": "4aXo9Q9d2KpVtgmWP4mg2nSVY38hKHatA5KPVvHT8C2jwFNnEqRHxSJspb4EFVQgH1cgeDPu85LVgZdqNMSG94Mj",
  "key40": "4uKziHmWuPmiXH2aaJFWLaJu9APmhcExDd5Gy6dGfJ1sqk7TqVzykwC4VQo4YyaA17GSXNPC3tVVgPRjc6Vz8ULV",
  "key41": "5BxKoSznpmXTW4UQdDMeLKUxj4ESVPQhKYrXrUPCpVJH1burBrVxxP3FogY52Bh6g6zN8umZrTPeKozSUcw7UzsN",
  "key42": "63ayNrNQWH8XkZq92rd7TRtXAoL8SrtJL5vujUgWRoHZzCJCNaaxwZYjPV1e2GPygWBBpw4Wyjit4JTMs67EbbeF",
  "key43": "3uDTppTGQxJzgCwz7MxwmDbh4YwGvHCWACaYuy76HP4TUfRYRBx9mBb7ZKKANaqixxdo3SaJ36Vx5pyEJQZstFaK",
  "key44": "jQEShpjRdE5xYMiZ1SPN32qCZp4ZdnuL8kq5CLXPvK534kMCnAFPQkF66WJH4Ch3dcCdwT1GhLord4HUEv7NDrB"
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
