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
    "4hKKq3ZsteMemi8gjxPFsmZMyo2HsBVqLEmWQxgMMAMJV17NR8xb6BnueJysJZD6UJKZZRNsuUQ3jLGbpVb3MMX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29jfTBWjttEkNBgMUh7UgRZmHVqp6K5txm324C1U7EGZJSpZUuaEZisk7dR5F5s69MfVZ7MqFozeAmLfQsM4aB5A",
  "key1": "4GmDpw7FLZHm7z2V5nY7UvgwrgFam22JkbeFBQam3iXA6KXG79QYs6LCXsN6UNzqezN1KNaCczcYzB3Pp3juf3AK",
  "key2": "3u48k7eQRfY58TrCesisKof1JfLKdWiRWhaoWr3ZhmGFnyMEDb7GhbTT1hRovC5L5Sckjxm2YDNtW2cMkodJTrB2",
  "key3": "3KbHamia8eQ2rNVUXWh3T8u1uAkqAupQRT6EHGH2ED996a5Ze9NwfcDQs6c2EaCcjz6fYKeVPsT4TdpGuD2miZuj",
  "key4": "e76EEfgQDgyXhQSSwdLdRKLd7aiH7CqDF8iC9LiKoiGYqaFksvqij4ZpF9iRW46Cxq2eL6Sz6g67B7YHsh9RCup",
  "key5": "4uVUjZuVR73LAYai1Yd7ZUkvXcFZhsoiL7BvA5mhHNd65vN8rLxqoU5nTabDZyS12e3Qpa5Gn2cu8uzQ4jqZmsvj",
  "key6": "2dizTaVcnCjumq9f1dxWBeZsE72xVAFk8AdhoJiB3kerpRoBM32VW3ZPFqh1wMoytHC8HTNGwjHmJkW22Z5KXTm9",
  "key7": "28WJL562G6veBZvZc5Mg15GzXoGYy3mdyxnL6PvnWZeNkTeTa8YXTyuB7MgiWD7iLyfFDcqqzsQoVrQoBikFc7jm",
  "key8": "2poYBn5EXmMhs2uRvUgR2tKc6G93g74NPEBQveTrUjXSB3wDShE9W4iNhnMP6wAvPCyX1Seb4tHEtxMKrmuAimLw",
  "key9": "4qV3jdAouVrmBJJa3q6WUY5A2rgou1vZP4cmd5yygNmCKnxNQXrRxS2eH4oVaWRWRjJZT5ifYBvAEnMw777oCVnr",
  "key10": "4aRNEAN7cPL4PjowGa59i2q9DRRDFTEQtT5VDRr2paK2T8Xi5FsEyTdbbrYJVfJ6J7ojgS4sKVVPE8MC5j7Cveuf",
  "key11": "2oFyi59yyefgh5n5Upc3gMRd4YoFhjbZXKMwv72sah6eAih1mimKGCD8roRMJ7iiUXNzAjGZH5zWz5CN6hChReGP",
  "key12": "4ED4SZhicAzechvURBM3rByfBXqT6dYMDGvwvh5L11iv4zgtXgJqfLJXjKr7QQJFFWWReXTU1zTAxinLaPm4X5hV",
  "key13": "enWRdxWaixuS2AEtC3zLd8Rev5QnzDkKcDPSpkxmcau6Q5yeiPqc7Yi6VhFC5bXDtZucs2WN3MvGoPGYRnX8Hbz",
  "key14": "2KjMqm34iTY8Wd5yYNqtM5DmmPYNXqumUZ5SznH1Fdwe5z1ZLWQwehttZ3sjrvvfCjRfFZXXT8EpqFHtZy1wm3JD",
  "key15": "3crxmvsDM1FiGQwL741YB19RKZhhG9X3JfzynN2g2kLdZZBvqJ56xBLRr946XcheUVpFfkLnr6NyXvKv3QvJ5BdC",
  "key16": "5KR3cz2NG6VmXnw8M9BLQssz3KcCrvsctxVHuQod5DJdAqa9YdUwvxF77wQGymaizfQhYTeUPLxrgWEi87kGrRr3",
  "key17": "38jvojArakVT7P5i6FvRy84UDqMkdz5fuXdQ7imfQgzC5oFzNKHtCdQbR9SVvk6DXhaZn3wj9FCuDiPcPKKyHds2",
  "key18": "4SMqWskLSRgNpJavi1JjURTG1zt2DATrVTsdmLFUCD3Vjf2dFt5WP8wmhNuz2LKkQTZQXfmC8MchK1SZtu8MaPDL",
  "key19": "5EvVjAnYYJzvifcz2ucCbTjkHNdX5eCBkGWTqnJrGuovz9M8Lv1dYGoWuKeGpEwaQ5tJeb7Doi9DvnB1rdvkiuBk",
  "key20": "sw8jB8d5GKki25DaXPyqQkpBpcewGy3t8MqDA9SxmDdDRnkW56BHxA9guvRPc3fHDitUjJfsHq6NmaSoqNUT4Dd",
  "key21": "64XPRAB3xUk6d14ddyqkwU2uW5Fj1Mc5S9BTt6qvsQy9eeDjixfKhagScuZ8wLmHK7e7Ymd4mMZhuAbfDfLFKgsF",
  "key22": "uVngkeNxT8iLwCiqdaK49XQnmeCFPAYEQ1T7DiSCwLXPmjmpJDaE84VpMPLidFS9kbPxuWaQNKeBGsvp9biyBZk",
  "key23": "3nCkLr2pHdmqomyzbwRxkauYHfvioEwjLMtvaNT5EwP7fWSBVrUX6Zi4xf1F3JbPzEbD1m7fRWZJ3YWR8JynbHuf",
  "key24": "2PTTnG783ivAzz46PDwKjQo6PmEi3spcdHg2F2MKu8rrjjbEEoVJcKoN6esBdnCVqa4CxidJsH5XKNQ1rksRaqtc"
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
