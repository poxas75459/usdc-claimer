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
    "5Gr2ykVPBs99KQLcD98CvjjsX4NcFKVyuoJi4wBjhq7jYaJt8fdRnhjNi5EDqftJsLo2PwMEemWSeA47xh7X4kAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "prxrxAeWvaepnqa3Y7L5AnQPRbd4JsMEBq1bUG4NJmUoGDhxGMTA9PmaBq6HMkVfnMRX2fxB9hRFujhiiAuxyLt",
  "key1": "5k4rJKjopkNMPr1WmoL3Sr1AkPnP3GaMLnQfVKqeZMRrmj7CJ5XXkXWrozhimmAdvJx7eFq7mf3oQiBSAej4EvU7",
  "key2": "2QptadE2kBsfCp8aNYgPfbsvJo4AFKzDuPyj6VqLHNdgN9SsuvXUGNYyX9UkFixLKVTEwBmHosYoP22TvUvN8Ay7",
  "key3": "nrEvyWVRWJkQo8mNywyKYAtEA2VWJY8xC5yBfHSA3BqMUoh6W4DSZ643MJrYYaaHvWqhoq4qYg37W9vuewimhxX",
  "key4": "5Md4tCxLdo5vp9ZvtaZNcin17Y4FUbL5APZ5nGa3rPFkyGxxrkya7kRxQGnq6VsAuRCRh2qeKMTGE181wgaW3APN",
  "key5": "guxjehphJsqhbikuS1Hu2chhNVhmbTyqcnpNwecVnHBBHEVidktccbM3C3fuLRYTXuF2dd4TnCrATeBnSXpvrom",
  "key6": "5QW4kwuicJ3MJyiPjBQM1eUwBV86P9HqeSyDUtyh7sVSdkhBAn83tNzJe39SMhKY9GoLorgNuYTjiBKaSQ2dxbti",
  "key7": "5XjyehrtPrM5kcQqiokFGg7wdKDcAUiHGRHiKY8rdN7r8eenNJa8UYUkzjbXJMtikUzf7mA4AibB9XNfaamSwcAb",
  "key8": "3m4rFM6Fs9xsz9hiRXwEiPfouj3MDQrq3w86gCyXRozoAe9tYs1EpY6mysyiy4niPr5vndeUddwFbPJdN7Qqqpr1",
  "key9": "4nUfBqqzRdFHjg1CKeeV4at8Xt7ikdhGHhieKEJSpDv7untVSgKtqPYNMVSNNagmcYeiNWjqNx9K8dzskUN3cr9H",
  "key10": "4AztiugmkYYZQPFteXbdb5jEkYi5pLHZiEKt7AFSc7BCjhNdav9EsjjnFpUWBa3e7NjGb1Adv98SY2Kah9KQZv1h",
  "key11": "4cegePZcNzs9MJcN65A85SUfJZj59j6ZMBnnjoczPLau4yhxmsd3o2tPLQ1EWmwZ8NskPqDR7RwRhmCYmUVr7bK8",
  "key12": "5kzVCSwwMAcFCHHsuKXpkeAb9wbYg5PLYthYTmdjriTmPCqnMXyoQcbarnbHabUjxumoyd45EWZiZcjtmUi8udbx",
  "key13": "58MvRohb62K1NsbQDkQaLSNZkJscjUq928orj4LvLUG5Fy2tQRD41wfpTEdj3cfRt4WnE7WKDM2PuLwGoomM7fQJ",
  "key14": "5HrkwFUTAfafkZ7ZgG8F1qgVSPfgmnCTGfo7zc5HtrUgQBdkLpgUHVNf91Yn7tkbQzbmdGcSxBAKzoSrDQ9WJA1o",
  "key15": "2JHSKGPqf7ocC8mFr4F86vqMkYB3qX8VNULSLE7QmGwYaDWFmnT7uC9tnZXrh2Yi5LEtFSx5srbwSUx5kk6UzWdD",
  "key16": "ZR7bRsmeQkj4KD6Mncj2QuU5PvEAAyAyCvXnNU74q9izhXfUvm9NAPz8LsyE7S5JsfYTGiHTs7o2Pnggh93m7Qb",
  "key17": "JAajaWCpD8C2fEBfSi3GNoDJC55g3BvUpA4jgJoF9i1cFKQ1pZWSGSmccMP1sy7t4EuiitDWB8Cfjr2fQiU1b8R",
  "key18": "5Rh6QjURWjTgp1AjYNxgPkzxxNwZ2KVb337wpDxpme1EJZWKmnsMcKSczTJNmZ2TeXwDf86UCfyG83a1nAoXsFVy",
  "key19": "2j4pVZsdMiQqJVGniDB5APCe8v5sU8oG4YPU4A6jJV7KGRZ8vUHz1scQmek9cGH7387DN6nHKP5mFuf8Ssa9Re3x",
  "key20": "3f4uRznhQ7A5EgCZGU7VCvv73tGJiPVYVWyRzTfQVUovQeGWaYuzFwQDyAbiQgpgE24BZJw6aVCwgxL6gAyfQQVX",
  "key21": "3Y9CTvXM447AvEMWyvQNnhz9ZuR2bT4bqbdadv3f1RqcvbkpjswQHP4eLWgfWs7sWcy789RYYfCBVJ4agXjtyNyy",
  "key22": "54SyHiC9WHTAkPhSSFeUYfJm82CGV3oWvz1WHkUCrMxso7uoZaXotVsYGstJstVhJcmb2aGzEFjacGGVA7izyc9W",
  "key23": "5VVLnBUqDAQ5yiA69vkd85iYPU3aUFbQVykRz5qDjnZqeuG6YDRT9ek1ntmaKdFnyU9j4p9GwhZr8ydA8VHRmanD",
  "key24": "3bbLGP3HjBaV9FasgH2MsEbu83HJWXRL3XrLcJDSeVDy3Wz4Q6ydhncbsGmz5n92nubNi5EruPH4oDhpK8hr7boe",
  "key25": "4FXQK8xLuJkXs4JZyNtiJxkMCbZ4YwnnyyeZfK5M6kGpbD81U6N4pAHXq5yoEkMRvikmwkuCy9kJPK3oHP3bUEnB",
  "key26": "3MmAWrGeoMYp1McF6YhbQcCuZ2NYFPUW7cJPdbJ5wTE6HDB8FWYMJ4NKsah7EFuRgybcHQSCTsabcQbtC8j3biAz",
  "key27": "3ePpCr2FvBtZEcA78QssGgkWMvsuZuaLV1HSdx5aAZ8D6B6HaayiZJmBxwTMe4tQdituPZXpZMxnNCJbG9ooonWZ",
  "key28": "5EHg1rUfhqJLtZRAGJ52jeGkqbtvyTVYN2fPoWt1rj55UpUgL8D1YbYxrDvkenMkzvVe3DEKoVEiheMfaKijaJZs",
  "key29": "5j3kaXc69bi7wyhVXGxLGwbicdnbrKHkKSn7NPnvfV7Dco5R9UcgaHd348tSEq6xyCaxeGifYGnFeDkZTAg5Q8Jh",
  "key30": "2tTLFo56ARjCXGG2HRYv13AHsfHvMk28i2SrnU3tJSGhxq1qb65qDYBfUCeEfst7PG9z9CVg4zy5hMdJnYbd4Pkw"
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
