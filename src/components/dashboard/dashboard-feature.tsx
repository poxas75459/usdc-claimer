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
    "4GoB7VU6ryZ9MSAa4UtfTR5G4q2SPceYCURnuaTviLdV8ym4ra4fqWFZjC9M1YYHLkSaTmxwpDp36GJURQUo1YJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M15o3TKeAj8wVn9vpf8xgfNj8tYcxgiqPHPABxXKvdNBJeFnjMcQ8hpJs7XTBGSYafb88qwEgNntNVNZWpkoy8k",
  "key1": "2RLymE2eZXfE1QsJ4CSoEFYxPuyrwBGP5KAYL1yL1Ee1w1JCaW3XKXFaR2WcbghzLJSZR7u1AKHTr69U72jcy7Nz",
  "key2": "2v3As1n5gkyDZFkTFXQjSgmXGsEgvGarXHMicP86PHkyNfE2Sf4jEHEVyAvGuNqSjxdTgD1F7ttpj4Upm88u29MV",
  "key3": "4d3c2BiwYDuPQg3uDv4XSjRfzAvsMAtXRNyPQE4B38eFQkLdNh6AMNmdgpRfv3S6JcpxKnT5eVFLVzhLbg3rzuTh",
  "key4": "2xuGAXr81AU7wxHTYkBt9M6FpFRRrgmJLrExrEWX4zUbtF2W7qqTTrzydj65YvPFodfzpCpWMqCiUzzB7wTpg5mG",
  "key5": "5VLikaso4QCVPHV2UtNVWNU7dy5JrQfwFzRR5mPLnUjbVbWTyTe5pwHZVifHWBz8NFcVCKpNjDr7MkxhPKqCxYm7",
  "key6": "53YHhpGxKQsA4QPWCHu72X4vEY4cXh8xAqkZaSKF2DRLcGUeevXAfgj9YTqySxUWXXwXgiA7E2XeXAZmD3uFSERz",
  "key7": "2sodaLiwa51BvB26RftCuHkfUDf7DkmeXz1vLK9Q4J59YdHotyqEF5K5HcFp9H8VkzEyu17r5d6pN8pWuWg3LHz8",
  "key8": "KDKA91bCUaiakjsCX3Ug3uSVWmkDcB9hTDtSu3anzfVaxe33zHWpqkZVFidys5934RyhqTcCUM4SqW8Tyay5Aqi",
  "key9": "gmykb9Rtspgs8CyYMQBv8FyswUSKYCu4mU1y7UDuVyhWZXUrkquqTzPirpXdgNV8uk5cnYcSu4TkWv6kQHFNJk1",
  "key10": "4Eww2t54ADxLfWd8Z2aNBAq4Q2bPcWBYSeEf1Gm7j83xBQXtbTH4Z3tggQmM2tzxE32uu9mNWYVAxE35zbyhSbUH",
  "key11": "4zrGagBT1HEjQgTwH66TC8vmyeCVCdWmbdycSEZLofvb6ytxrKfLVwRwt3VB94BhtXBuK4FdQrK23cPBuXmuz8vp",
  "key12": "26mXd3mTmWvQYRXYeuTGcq2e4pkaJW1BTqGd4E3swfEs67XvzR8JZHQgT8mt1PR6ATthJcCraYdxbADgpAyyqj8C",
  "key13": "jDe8FwZbtL3cE5agU7otqF5m3x8UaXYPFnYtFGV1ygJKd9yXdMquCm6h4gcYxK9x4HeAY3dsSEMWjXx834EMYpa",
  "key14": "49qV6sV62BgG3PeBU5tsvPND5io3oa5z29HdgkynCqoGvxs3ZqHq5DTQXkywMEf1nkAJktdi2Y11mDLhPhUtJG3B",
  "key15": "5EKh6SohN6xLUKXLnnd76ocP2aKm97vH1d7MKncoYKJRCy1hNSxtu9Lx9hn7MLvpsXEQ7g3BKh18T2mnoHCRbM1v",
  "key16": "5P3hGfJ4Wwh56SxRxVM8ZcSim8o5YMwZQZVdVo6wNmni8qivzC2ctmA1zSjQr9Ko2Q3PDpUXpvRCG6boZNbiXVV7",
  "key17": "58WaKgq3A9HUN3rRWsLU8X2Fmww9861v2aSdUyYJDZA2VjHVMCc8u1ah341KpcuTfZPghSeKzXcYEug7ms9y4RT1",
  "key18": "3zwCnm3whiFiLuhMCAaKHcScAt3GSMKaJZ9CqsDjUzvwqKXcdQFX22vVKaDjkbyxbUJs8TNvy1iM4oyxyYPo9yvE",
  "key19": "67YfqUEaALph7i4K2eiAt6Sg1FEGL89UT5UikJPKKYhkDkxrE7pXDvinpXNXUVWzCznzfPZgUqz6hnh42v17GYYS",
  "key20": "4WPWj7JVK2MrTb9CTyWNVSQ5iK6YBs4inp7958WTtYFX1J4JC8ubUkmZrY7E97MKgKMHTt3FBdxLqQkKNd8rfQ3R",
  "key21": "44eJQ5V2ijiFTRXoaHxwRf1TZJF4wY89GQNynwQmRYTmRUtJHrKjMs3B9Kg2XCGYnFpTs8bwmsMxbf9wSAe6kLvg",
  "key22": "32dicVhDcL2t38qm5Zv6npbVmFVGgrjCXbnDHLYyJB3oDWeuRUayjikf5VRBjGWnN7jFJhyEkMP6YyU2GMLA756d",
  "key23": "4nZhSuQDUpSksqs11ubQR7ymjhYNYxfgMpP7qZeRTCuNCdf7bER7cjhDqAqQgPJmtZszwkgMWscjNs9GzYEtiJ6q",
  "key24": "iSctLzs1ww2GVVfAyuwzb2n6HR9fwvCNqvFajVhFXq7MNcEDF5ZP7nWv3J9hJ9DYRv6WkYyRmC5ddWiS1p91yh4",
  "key25": "2bvbAJXfcHH7drGmNhTpR1vqanmyBeuLEhG5WUVynL7aAJWFgWMQqG7AJ7sxatFETHCXstFyqaibyuWxkyu1Zk48",
  "key26": "4C7y4qsVBLFjaNy9Ds6eWusEzVoWvbXkWNzY32CSrb6F21d9u33ReoBErJTQeP9jgg5DCX9qvyvrmscpsF7Bjmdu",
  "key27": "3Nk2vnPcvWcn7DnBsEXgeH6wiyoQXnozHMr36keFCLAKZNJ5KrqujsVFp7shErXEr7AhNU3QnvE2CK7mYwe3GmLz",
  "key28": "4QM4ed4bTBwgFddMyGvtT9yKBXhrX5KVKFicH59261XaNtxL1wmWHopzKifWuQu6DxSuUve1Ky3k531AJbZTgKct",
  "key29": "rjLDHd4eob3w695b4kQaCDRmfsrnTqdTRJDhk6zhJBh4fZryHwC44G663TXxsJfSYa1VzbGVB5jVKq2rwutSPmF",
  "key30": "5M5PKBPYWTsrEu1SQj75cJbqDwG34ThJb3GeJFaed5jrMFunTBH4V6skEF8KtxPm3jZdqzvxYCobUXX2gkXxnH1P",
  "key31": "1MFpGXzNmLbR84djHVLKDFmh6nt3SYeimwei7JoE5obP8cNRPmKnT1RqFtqwSD63sv3CLa656p1W4c26izawYqq",
  "key32": "27FQhewcCBHFW6VtVRixEjHdHVmYWmD48kSDJcUNqU4bkSXxF2V3h72ZepDveWwTVkghYQLYbCRAUqUjiHDJcmW5",
  "key33": "4vFaMPxaEvZLXqtRW7B9amF2LCJ6EqCn4PJwoRf6gTtUgVJH94gitkK5yZiU4pdrKdF9UNaJgsda624yEFh1yR2U",
  "key34": "5SrprYqqk1VpYwwzky61ddceBPsGVT9bqHB4soyXSQuAkqDpcncYgrogudbgad2xZtRTXZt5PSo2Ma7ANtJEToUC"
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
