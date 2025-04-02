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
    "2ZTtkrHR8KALtJSA6U8qqDFL1JfDzukowkXdAeLP3WHHitw86Af1Nfo7yTtyeDwKvFKGHWihAmSPX1iDu4JZD947"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Gxnjq2TobWMQmPv61CZ5Vmmj4mdRNe82tPCP2sgi3uMRG2XVt2Afs7dhF5qPkHGQw4x6VDb6AB3yMNV71jedd9",
  "key1": "3NiNF4763SuDSDwGYCR7VTVoWoXnonDtF74YZexxNN1afwvyJzHs44HyvJXdWEwaS42UHfXveGhR5Q5yivDUBqYy",
  "key2": "3MAh8Yxtgybu2c7VpYQXXYdc94TNtp55ukRmxTdUE1GL91hBBaf5mXx8ASvVnBZRiUfKKuQAu85LJSyZSadaFSCD",
  "key3": "4pKbfNyRTSLXiieVMdkpx9FgB2AcCHpa2wDN1LApNsGV1eQWe1gafq2oz73rY8hxufoY5Ck96xfRyEjj94AeXX2z",
  "key4": "5QDN1A6Fcmsx6DuJFDN76W6J9nsXwsPidfDxQxP3pto1N4m7Dto6WDFRDvTGKuQcz4YCzQWstmWknK8oXvzENFEb",
  "key5": "5P5xtNQJKEKcyZ33AVXCV1H5BkTwXcniKcTqZ4mxRNTgJog4cq8U5zg944BfMLFMVyZB718pXg8iJS58aLb8U8mK",
  "key6": "5mHfLCAhd9vcrsqLytugTUCxD6pQH7RdcTLhpgX4yXnHwp8vSP1bCwuUai8iawBR5MrXkDhj5cp4LFwExA1Z8nG4",
  "key7": "2r36WnZ3Md4wkkiGGZGb4h72EGdrhNGd2Fcia78XK5XfY9FFWMRoneSRtZhR8v3R28NUBL6CW6KvpQxyyRGWdVhy",
  "key8": "syi9airWAfLk7oMaFQBidsXfqo6oeLRm97L2hqsLT6vqfXGo9Annsq3HTevU9SxFtMwWKdCpsCqpJSkm5Wznfha",
  "key9": "5NSGxRPwwkXwypUNZFULUxWTgKUJfMrxjdQ9cGBtYo6wwmsr9Ehh7BZ7TMhMpg27JM6xgRR7wZad7ppayRJgVa2P",
  "key10": "484YVU513ziXTpPP3KPkSXbhc5cCggKt79EEgDS7iDFRKvXbpwX61UUTE2XgzteYC3EpB6um6Vf2udvw2YH2ugRf",
  "key11": "5EyetcA8BFrNoMroJ5gKp7YDZzYPw3t27NYKBpCUN2zT9CYBCQ89W6GAe5V6YZkBmCnbozZKNWrJrCG9KXu6Vqq5",
  "key12": "4wi2NVCd5atF3wsmbfT9GhTAZaRLz8dDJNhSWzvs46CCB4YCevoBzKwUXimWkkpJTqKxsA61SU3E3haRdtAggPoN",
  "key13": "3QB8m8whhZSmyK6HV7xpyDYBPpy9P8o6JkKoUtbdZjFmj1RskqZ5LVQVr67DyCnU8RYWiWfKpjzMp6j8HnCrfE16",
  "key14": "2XXkEGKteob2hXvtkSybuLpmuctiQpVvffzDZT6SivcWkp4uX5UFKqNtVSmYrdXNc2dc8hgvCJGu8p6tKFpg7ft7",
  "key15": "odBGXYFWF5pUERZsEiExmXW1Ja2prkofMQrviuvNy4AEVRTu3C9oFqgcC2kVGSrdRCGmmRdgC6Ao9DdBcJ4b2ty",
  "key16": "2F7mijuA34neShvMz8ajd5aAKEznLLo4QQL58pq554rceJRpbURXmKhet3Tnmq1qd3xq69qMitMwRjYxae2VeL1Y",
  "key17": "mrz3foXr5FdspiMLMer76hVeUW6s27yFZi8JodMEySu9SRvoe4G7XkpjeWCFBU7f1xHqPETiBe2yong3nhPRpN4",
  "key18": "5YDYg9qHiqVSgYwJWT8QGrEdTjCKJwxA9Mb69jb6bUCc9RJeWt9Q9P8veLf2R2zidvXBj2mKARewhY8KaatTnA5z",
  "key19": "37468HoVq7MFHSWN7NFr9GjugQQVPkpNwVvMPXgVe7vqKZPWLSfKFRySRq8MMi1sRVQLuWkL4nnMj7gnnZFTt5gD",
  "key20": "5wWn85L5ovWTrHcNq5RiAp29JfprhVFjohpQzKSAbC5gGfnQ5pTpFLPGcQmx8VUzBjbGp7w5gUPnBYm8Yk3ehTxk",
  "key21": "2MRodAJrby1cdCGLTJSh3UzeA3JzXs5CVziJPSMEgiWKWzY3CZ5nWq39eMFdoY5xqMPvLYsbGxjSNFQNqcdu4rjo",
  "key22": "25i9p15qxKDWeL4zUF1YjiNdZPE3RBaLyUf18sGpg2oKrHrWsySToGZ8BXCuKjfACGxHArEEpLumcZ6G8ZRGvbTr",
  "key23": "3GzFyDoLNZQhN5kkfbAvbpz5Etf8rmYfnxi8Q2UsRk4dvtvUWAZfchaSnHPD6ZPx21cza7aApV3VH2XTg4wiygi2",
  "key24": "Ypfc3K8iHWjRwiVRya6QB8fRG89m6siUkXRTngiQa281RS9cNJcruq86X7V8nVSU9WTvEjtbQEULNM32KBSKmsv",
  "key25": "2ZMTE1RFUfwevBjDKUYcQqESyAVuRrsz2jeECQdSErvQ2tUvRaVsCRfNX3bv17ApvvGbr4kVdCUVeDAuv3QLmMLV",
  "key26": "3LSBcjwc53eWvqPdY57APuLvrowcLLXwjXwCgrC6Xqv3cAc9uMfBC88kVwT76gjX8TCth1EnqCvGU9AJevHiwBkX",
  "key27": "4kst3TJm2RRd6L8ECxzAw2DDDzvnagXJocJsqQzd5ARWCifnT2CeCRSCK5pHj64LpjkW2z9tMxf3og92TGp42t4B",
  "key28": "4MosvWniGtW8DszYmPz395RkgQCUztdqQratfn8vTepsJAEfRJrUteWBpWswYkdyhfvuyvz7V1QqwQnwvcVTbgBn",
  "key29": "2G7GYnNiinFCMpxyYFPrp6e654aTUyQX9fwSpjfEdbPp934zFnFdXyi3Y6FDjKZgnFEWcgDaGe1nusBVKR3Q6yLg",
  "key30": "4H8SHkSbJPhngPsAY1cUa53L9PNt7PThYBbdLZSnLERFsBGMwdoAHyZPRh4VG2ixJ2zY5PewyBM4wxa9m1qqzJY1",
  "key31": "waU4KLv6MMFVzLYPc4AC7sUW2HmFYzxjNLzg7557sJESEAnUkyvNM8a9i67BRVc6LgSHxgqd1K3X4R3XZsSKJCx",
  "key32": "MpwZNaBPiGtUeLWwSbzUPdVVQeskMrGhwZHvLyw6fgZPkzpg62ba4Ku935gXFj664sMSD6WBWphn1umvEMTsxCE",
  "key33": "4tAD8AARrg5KSiikcp7p59RMasX2Ai6CDKPaEVkm7y42xL1Mnw8sAFGeJxqMbguewFEu6o9ZtaMWPoB9VHnzcEFC"
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
