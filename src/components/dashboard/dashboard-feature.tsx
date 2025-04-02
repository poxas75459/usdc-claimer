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
    "4TRtGsu5NEdbTStps1JW8ghod9sQ93FREYnSPASEJR3FTESwFAZHVUJi1zrsEc9PvXW9TYUnLqAP2HG7NYFV5nxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55KHR7jUuSvYkWESB3TLu2YBaWreK38AZC1SRJQ12btxPGCqEkPd8SKTbf5EVZXjD7sHZA2fpeny9EqzKQymHYQ2",
  "key1": "3ewefLiJigkXCwuZ5GvaDUUXqgjt3NTrWu4Q4DT62z7RQ1C6KjntcuDEV4EvZXetzi4MSbEKMikTEHZtiuF6snpw",
  "key2": "4VXi3eNLmUGRhkpkVykHHAR8zGm7GwDQHRxw8ggQUyxVBMbbNtJnga8qqQjU8rd61LeNpbcLg5Af9QMufRoGb28U",
  "key3": "5go6LEvJLDLrHhKhv8momKugDs28R8pKQBBhtHhB2T3vZJ7S2xGQ6NXnp2N3jbZknvmsbNbGxb43bfju24FKimK8",
  "key4": "4JuhM6SgbLE42nmMGbC8TfWNaCh3oBC6BJSVPVqxxmr3LuHTPkN5b1xeJEtvcHdEsFbyJd1LjxC36pcoiaDco4g",
  "key5": "4a8PLJgLUsu5x84EYEydDqV67ENc6ybDJ6NZyRkruXKX53oQZYCCkcdu9dmKvpmuC1xymqt34vxkJ3bu7Cu1fUp2",
  "key6": "4WoJaJe1Xn4egRFUsJJZZm8McuDnRe5JthMQ1yP2LrVY1HLMouPWcoNyVV1UAXHBp8hz7GFTzdcG9D6sknbKnpeA",
  "key7": "2Euy9M2pnNdjnqMoapLr8VqCzjQfmXrEriWGRzHAJoq6hKfs5yLoqH33UcbZgVhf4juBgBoTz3gaxrpkPsHF4E1n",
  "key8": "3SVozhjA2umyZj3wn1Aiw5zxtP3LFCKfe17YScdqZpA4THQUcVsnXkc3WTCNcJpz31W5QmaNAQSFfgDK3fJShMHx",
  "key9": "2iUnq24uYppuAMk8ondzmGgaWfK3Zr9LwQY4RGg2w9dEcWSNQVdiaHqk9Fz4WCHtsZ5rWtngEisDPEqzcUjiPk8E",
  "key10": "5Sz16RgLuAwvA24oC2uvsqNAsd3XhAykvSZrb6AYTST9ymqoUvRJsGiQGQpS4uFnn9xMTmQwnUaKraku6EbgJCCy",
  "key11": "3r3jCxxfQewVSjHAPJSffiaJEcwMpiB5aP6zx19rGnDFJo4gubqmLWFKXNxrAHpKNJ7zfmJHWA556Uc45fBMMerb",
  "key12": "bxoL4wwEcAeNmZBA6aFd1Ryrvfnk9Thc1WEPezvXSqsVHTK1672MdkSWkMfkJhTJxNsbL1mE2Tk7TWfhgkLEvNw",
  "key13": "2SJCBA5n8Jizh8m8k6R8dJjw8CuJref1fu2zUFBVaKgtD9kyFmQdWbS4ui8ZcBATayBzNkFH2m8zQCTBUJyBfBAV",
  "key14": "37qje9SYqhfWHVvX5Ri5mSKc1DEApN63L6FZ9QMeH3RcD8Y3hHxfkrGQ8C6xkk18Vkv53xyAj5fBS5oiQe4Kj7Sm",
  "key15": "2YEARTcc1tSaXtY1wjQnweKAdWpv23FPbmXw2wW1skmEZqWksxT5WDL2i9jrpiUmu5SPC54UNfWyPjGVCb6iSs4P",
  "key16": "ab8Z9n6AHsBNtBCbPXVGosX5vMiJ7YmX2EuyiVbfb8nxjUsP86U1MGV4Z1aztb8tvehXMi1AWCWB8Vtca7gyPWD",
  "key17": "3FGCWMLcTegQJkpGnoZgrFyAH9X8HX61jQiMePR3MdLoytP6x753jgSyEfPD6BW6rfgGZJLVbdY8J1ZUKzkcdnaP",
  "key18": "5HBaVbC6Vyddjec7oPzxURXtTMS8K6wUV7byMStswH75Bpv8voF9br4AcSsCQjtbkeGC4o3r6NdSgkMPukASyMRz",
  "key19": "4VNq7tdVFYnM8rU73a2phMJhk1PnrvQrC1DXF8k4CnZEaaRpxEvs1dmMxzL72bQW91UbPLwkezBgZeMRmzSPWTFz",
  "key20": "25ayorML2zvFSpMBTkVPLkG6NSaZubEEGYg6UWyqQN2hR3Dpx94E6XCxfUxfwWvwh9HFNMf4mLVCrcKpHMWyRTYr",
  "key21": "2VbuqTfULYcqWdbP7dQCjAnh2s4qitHs44xJHobHzpLYWPPKhx8wn5CxNdH3BdWb3fxerYmu85QeGVwt8F6nktpr",
  "key22": "4F2c5aZHRf3sbav3yh7CmFAjHVbJ6tnhD2Fvkry4NQ87vjaFxV6xeVzU8GgdrE6Y6ffaYJzddg1mHDjqVxPqT9BX",
  "key23": "4cQbaArb3tyoMLDDx4YVdPtbSWp7FpZTCafvYNQgUUFyZU8rkMwE3tuVnVQxvyu8VvQPRNNJibA1Bq1xcC7i38Hk",
  "key24": "4bUTUH7RyPvZ8RcX6wtG2KZ4yWyZmW5imi1R5Px7ZiZmHi9Rz51iPkAFVgEbH8jesStxFKBh1AvdcBuh3kmVNtFi"
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
