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
    "2dcYfs45ythmnFUbccCD9NoA34oigeqQn9WwALtPorC3FpqwGnyjjFduFCPC8RDYhq9ruFbjTd5G5qHow4yccGNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y87V5LnHfy1Rapeww8R7AP2HL8HDAe7LTTGrqBgSHJnqGjxvtj3GFztibmRsHWG7UMfyXogFXZAnbv9vqy4fMtB",
  "key1": "4jC46c2SzNQw2FF5ierice4HRyYn3J4UmoCZ5cp25YoPCYZpEBX8UsNVHrbDJRQKT2aLhoDKGUvHvHzGThqv3ziA",
  "key2": "55ssFTxDySZJvAJu2fBeSm2YEMc8ASmDiJyPEZiAMiCYVFXoLvyuhUR6gBA6CVn3LGEdhm9bfmatK4Qj7dPw1ew8",
  "key3": "4C5QFwPip8ADLp1VbQnVF8FsSUVSCAHPgtjLSBw7a3ur5d7ExiUe9fg8SSirs2zK62PscsRf432VwbBe9zGb8yUP",
  "key4": "YjqMVAgcaPNShkJ3HRrsfGdbgcqruER9nS8dZmz1yEJ9Wv7gdW92Gca5Rc1tUSad4qWWMfUciSpUJufC2t387tp",
  "key5": "2rFBD2HrnSTX1tfgQm7uoAxU1N4rPMgNKNH2rLNxvU1h5yJ81GJ4DkFnWXFiRAi2QQBmCJJo8H95ptawQvQrHzeq",
  "key6": "EpTr4TXXHGR2F6qmKrcgH3BPt5mPg6EtYTXWgBrXnmxoeR5Nkc2hDuhBu6E1oEviEkCconK15ivc8oFT79aLr1K",
  "key7": "5eMHvuipzGz1jj8sD5jFzZpnR1NtFc4j9gSrfqabJAP2fsGh65g379wuN1MK36Qk9zjMfqUxDDBzVLKQWVS5HcRU",
  "key8": "5qirMEeh1ubtDQoYCV77o2EVcd62txQU7LGwTajG4QRgv59GjrytbHCehbETSzyTVKBtqi7MeFzn8xB6sZ9c6FV8",
  "key9": "5wLUjbbGKkMdgZpdRgUobT8Npd9nZt2JDMJBmE4D4BeAvHrYYYJAGh6LJfAgj2izyhwCG2fzwiTnJJ6MzgdgqYXF",
  "key10": "TkbseSPEHEhFPpsYBWhzq6MBJFsTGmgiidxc6StBHqJMVWCYhLefbkF7wZcBCffDUc43NWAe7kLPSJvYnTfdhKf",
  "key11": "2K5bXcAX6Vo9f6zoewsrm6AdBxPJUMV1PcoqrngxTjrjZeJnggxK6jFjEw82BjsUYTxTFVuKfAD8d1WuPHK2GDxr",
  "key12": "3gLt9YCNCAkNtSTzhnvnXft15M5ubchmezFwsToeojSdQ5XGSceT6RwGs2yNodVtfRvypcuFZTwXWDduoFwXU91k",
  "key13": "4W4Ag2PA31PEF72YwsoKJy2Bjj6jN4cyzjnsDSPEfoWQr9A7hRBrSRr7G3MKCF7CZ5E9eHRxTyHttBCQqRY2hUCN",
  "key14": "2MZZb2HHvF7jP69yYhSfGhtqA3J8QNsBSEy6eX3gZr5PyrkuHmWrghnBQ2DZZJS2WJWAc39VUZ5PZeohX5vY6BVQ",
  "key15": "3vrXTd8u8PreaGXySsB5x1tWUi3dXb3hut9f9iey3AjtT7SnR9Tj7KVQi5SWAnhcMmEb43fm6aTy6krtMgRnnXhe",
  "key16": "5ZnnycSvQr8NCnnNtjVC7mjB6H7sSKpbJGdFahxpuDoXri6cA8rg1xKuuXQKhaGVy1fAh8hiweCqkzXwcUPVHXzF",
  "key17": "48r2MhS2fK4B7Come6Kp2qiCR1NEf3SN4RthFLE5tScXLRv6wYxGvW2x9AqKw1FNSNohaTZ3ZFy99yG9UBJGWVZV",
  "key18": "623vKRmoi9vKLGuwdwAeWFecjaXfXEZvQ2rsTe1pyuAargoqVNusUKH1jFrXfvwMrPgKwFjzmVEFpWvcZwrWzjSF",
  "key19": "3SqoixpxkoAU9wPFp6RJF4jV2WMBo2gB313pwAowKYL5VPGfyGUFHrGtLUJTcDxR64k5APEz8rD5HT2kjDyHu9M9",
  "key20": "2dDM49LG4eM87QM4QsHWJA2CBaSL3b6ZpffZA6JU9nihLmanKSBCqZthgaGby27Hww56PFiTweDC7QDTzzFabi3u",
  "key21": "4YiQP8S4p5Eia3h1E6Tv5KhnBNcUKkHbnTGZtxYd99JpWpw35hoqTBiiyue9xaumAJWQCRb24ZfzU9wLJrUNbWWE",
  "key22": "Fix1L3bTgYyw1itJdkc5Du7ToTxerNzJWBEjQcibpxWPZVoLDmoMYwjgesypf2TyR68Tfg7FCoUrVERWM6T2BHg",
  "key23": "5onvKmxtGQ4ct2itqGTQiRGg33oEsMABmsZY3VGApbMot7c6YKgw6JVtkFxTJpVjWUsbCgapdvPGWhCNwDVGvFHr",
  "key24": "5JbqhWw24KPJvA1w94muETE9P1EiF5AT9b1iowz6xxT4xBAU7w1ApCy5LTZchvYXxz7n4Tspvh5N3SEgYPF1eE4R",
  "key25": "48mVjqmPCsAZN7ZmWYtnrhrE5Fr52ubGmgwLjejdR21vwczh6APavNkwHHh5MYDw2uh1bkKNdfd8fz7GB6UyGHYR",
  "key26": "51vQEc3pY5iqfbNxnsUQsRiU7hjC6mPMJbzAFbzaNNx62p1HkVthBEsTL1oQR8vY1h81v98oRrJWX8RvuxCZwByW",
  "key27": "5irfZHLEipYW7pTW3t2yV2RiXNGKgkYeQ6cddKY3e5ada7TRz9G7JCy2V6ub5s9vCE4kZWJ9nYVGEwqF2L5VEVhM",
  "key28": "5Yd6YLij8gdqEnZ6xWDD56ahXVr75NuD3L6kLtf9HSbUasoyRvWz78ZUEmuTNUaLvSP4yZHckH9PKcbgFwTesQKg",
  "key29": "3a22xuztvKT86duP3hWLwiRkfYPE2oncAnyy6inqqKex9WK44GQRKxYhLPGndSeNhShvbpYE932NJQQoD9xfpyAY",
  "key30": "599Zqt6qhCtFDMaTPKEWp1FSEcG9JwkPYKcSmUAnLVmTB9AGpx7gDnXPEdiqeHghy3aqokfxA5YBW2m28T6Em3uQ"
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
