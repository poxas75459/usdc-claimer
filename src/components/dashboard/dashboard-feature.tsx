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
    "GUfc92V3RDNw9kTxAz84Z3NY2ETGfergx3SGofRtKa5sH2xzQ4YQ6oLC88STJpKbBmpwrbgc4TZ1pcSEsgZz94N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ZpCaFFR4dsXsaeCXEUXfSh7TTQzM2s7AETFBQs6hQpALbnQ4CXTzJaw5qbXvTwHE7j2FUcWyLnwKgE2szaQXx8",
  "key1": "2nUCKuoRjwyjBc7x2jQFvanJwQeheaL97rpEaYZD4rFDD6hcbonXtXjRy4KEnsMNrL1dvPD8qTaxphFqBp29AquJ",
  "key2": "4ToLu67NQwwAobWdMM3xRMUQ5KybeP8VT2vacZmY6o3VY1oBGbeJFK4nnmKGyVy8wjD326JtXRLPYRMT1FNsBe1q",
  "key3": "Z7peVwexdki4o99ED9XFi5AHsXGfiKmvJEqkar4gAMSBRmvgYfMR8LQF1e5yjihUNb8Vewvk48yC91wduVkudJo",
  "key4": "P1fh1JT8cdS7Dgi16jXkuQT1j7vwhuft2SteGTD5XDLwrqKAcB4y5GibzRGUfXmGeSVkdRCd52ZNLCjjaBisHnW",
  "key5": "xHSFhuHVhzVqTAQNnS6rdZM6eSrJc6bMy4NyJpDsDtvef6tGUxTonsT2y3bubhDc5AYE7N9gzYD9URvnnDuscMQ",
  "key6": "JwuBvvS6o7oGW2LiYVWYJoms9p4YPEcmfsycygAtzEQqUGqsghRhESNb8kxrhNSTHqxA4BvWZLJk5iAxn4YiuQr",
  "key7": "4Cfq6vzFuC5XiPJo7YX2qWmLJD5HEDodWCVeapPaAaDpTfttZK8FEnxgPb9quLfmKmKdaXwwARMS6Y6W2gvwBESD",
  "key8": "3WP4DgTNUhrANW1LoQ7WEkWujf8yE7FV46qB1Yei3oS15NnUgNUKhpSPBKMhRAjQ8u1huiiD9FzPjzeuXzzhwNKc",
  "key9": "21WZoGQQtyRrk7j16T3LuFNw5ccrGZX4jMKHSBhNhj2TuEmRfoCnGVSLpnTuSX2nXcrdMQjxvgAMNWdcfz4m2LGC",
  "key10": "3EoytnJv2jtF5eB4DkTvmj9nq2SU2RF1K9GpPkkvfYi7dp7au2Xn4KbPxCeGTKWCLEWMA7wyUyLQ48Qvx1MmQC7L",
  "key11": "4zDcviAA7aUsLY6rY1USpCtxsQFVphh86qvDsCYM7c3k8keNoErSZ5qte4xVE4evGi7sXCe4SzFKQqsLNiehr7kC",
  "key12": "41w4vJFabH8K1vBM4dTHRXxPZAWcURQRmzpoQD8qgYbzWusk2tN7GhHWwk9Lird2n2xeqDZ64gh4BuAsoP838pnP",
  "key13": "23R6i2rNqAq9dokeGm8XoMUXtxT1wP3RzFFam6yvoWs92972X9BFVB9f3qkHj5jBZVrPEek7KLtN5PTzwPPRThqp",
  "key14": "3nKxsAAGJ2PDhyTJAvKtabHfahoDtyMeeTXhkSj8RKY9L2pguNF8igJrBR1JViWLnvpVFTa4GeiCMmHHJ182ZMWS",
  "key15": "45UGbwYVWVUdshnr4gJDk1omWC6RsseNRKh14wUWJdC11Scs9akkG4mU3xUUQvaAu4tmpF8Vi8tEUMJff1G6tTUR",
  "key16": "4QLAmuFfH4GWc2f9qNKym3rvrAHYqNE3iPxLHnQLdMwMerLh4uQbXv82HncLoaXaw9FN9y2zMi4g8enCBCNVV5qn",
  "key17": "2V84RpqZHghA93jPyXdmMwY7pLNnE9iRcDR1ywp7pyYyD5boe6AoCUcVe8EKE1sUxyvJizS7jmkWKHtnWm9MS8es",
  "key18": "476vgHNhoUmjb6aB1Dz7HbBUx6auYfPiDcNFudxbpf5d1cS8iHV6wwxyqGbwuWEUCU9DEC7CPK9CbY5WLVEKmJ7d",
  "key19": "4XAMpSbx6WPSk5tf2C8sr5RLrafPryX8MtSwECo1xUeDHhWPxa1tud8ZpiSRCSvHNVTQDQVjY7KrwyA16dTneKEY",
  "key20": "5CgVfFKu1HZseRXzH3yR8hS4qtk13qFx7mGvhMogM2wkBeksHNCgbFQUgD6ahbfgTLc34Bpk8iL3zKpsjbMybjZL",
  "key21": "5Afv9dEgi8fs9V18twAdk3tL56J65HoXynGYq6gBu5jTmWvoqehxtGtqRZ2kSydek5hZF8J5VgKSQGBFhEGa4SUA",
  "key22": "5cyDeJXQgB9UkzeBfJPFynffcnncU8gX1UW7T5sHGj8W7pdk6CwLynK8kH7ZnWpnCeZJe7EUXgMXZ6ZS95Psif8R",
  "key23": "y6DFhDZo3tGMfGb83hbZ8ArgRVmUtrgJ4GX4H5rkWBrh9CBTzZzm8PvkkGDkT1QeKyX6Hz54DPx1HPbaVem4vvm",
  "key24": "46xtLcSNzVdubUGkr3ccynmWoPcduLuxgGjoCXxDx4WRTe9rB2th8u78CKaXxRaAdogR2vbjyBfVhzMi12xpDb5Z",
  "key25": "3nLB1xQFgvZ7uwvbtfKmCLsuDoMN536LpB1EeGA4SChgj5v8i38L8yFL78wnz3ehAJ8kXZw6fRCB4C2g8rG6UByn",
  "key26": "tQ3AnK4CFa4DVh8ReDoZGZ4fT4JWAfzYPqi74h6N28Ccm5XLaA5p45iNBkfaFHtBm5WXt5ewxsYeZYLt8zKAUZ2",
  "key27": "3CkbQZc79RkGFhK8KKynD7nwXnhLNe6aKXUr9aTBzJsVxrXz7sp6S7rSGmNg9aPcLqpvp29ekejpf9hTqHD84uGJ",
  "key28": "2VwY8cqekcbELrNSsrvLo2j9ZMQexUnR7tHS37TJZCX6dkXpquKZZM7EzzdSS4WMWoauS93WUa9ZN8A9M7j4Zzuw",
  "key29": "3cAD52v2Myyiwv37dUryvBxovvv76X15uXxAz3sWZd84uohKQXuSYjjdDeVY2adbQVcLk2GuvoGio5dDWxuTgpxL"
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
