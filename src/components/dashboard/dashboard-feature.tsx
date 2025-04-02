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
    "3P8t6whaYWno1BqTAnpd2ypyDAhMdKDSThVVqw1QapoDer39gBEF8qhtftVcUHM4SDjWq3xdxzr7yq95W7aALJ9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ktf2kgAti9f4X9fXoPVCGBoizd4Vxjp3TZMkvw4NnZdHQNMPt6KyeiP3RSDVSvz4VPJGtj9Dg5wevtZ2azFwryp",
  "key1": "2TvuUXx3LFcACzhX8DJr8CetmqZeK5LaziRExF7e6UehjWReEvjYYTZeq67n7ZKX5grhMB7fX7MXzPupjxQSYnp6",
  "key2": "4443Nn6ek8RdnSKr11zwbAg2mjgPUzQJAFpTtMEGoeaNhdr6XRsRb2JbkSs2FutuWDZJp4S8JbfUaVKESrzk1Vgd",
  "key3": "3CW1Z3A82VzL6iGzRvUzVpqhuC3CWH8myi7jB7p15r8ryBrrVdhhczexCKMtx3Dhpx7vpvh5ucrZNrtUGsKGirLR",
  "key4": "5QUozJsqY64ShXmDfFxFiGV6mJgZPbcPgeYHfFK1PFE2wTW3icsVm2zBSbUQn9wqs8W2RLLcgsHjD9LGjnCGeYPk",
  "key5": "3CbvXcQjvvht4FwA5EVMrZJq7XMHYJMmSsoRVCbE2Eoctf37uLxjtzT4TpvUAtwPkCXHzCLyP9Sb46n1tRZBiKZ9",
  "key6": "oLDCMVhNR2mbc8f8MWRxokkgwjkUkJDiSK7t9yUzbAZ9fm6iGUe4s11G5uf3hNrAWZ5vzs5ivosqYXFLV6EAvW2",
  "key7": "2utkVVYuAzjRFCcJNe9wZajpfFfMsitUH5EEXDdoKvyP7xK3712XsFK7syjVWeQNbJjySufTjV233rkfCLLoqJJy",
  "key8": "4o55t8xvx7VozSpNw2iVJWMKYqZ48A7yUr1Kyy85QotxAj6Yc8erRCaRA86JeMsELaNFAGyGNsRr5NgovXe2Dq4N",
  "key9": "2EmW23hnspBgeBB7ofXthBuT4m3twBTPiLgSW7EDiRarEKpZ3NnGgaxZEKhAQhARc8qJKjnKnaFMP9n7zeSdw6RB",
  "key10": "5gSXFvNKi3Gue3fCPJZV9xtMRRRUyg6VGdbmdDHRYBqcbApvx9yUrPkbHotsHKhwhUz9LPQSsiLnBQ1MKq8CpnAB",
  "key11": "2kgQo91jeV8bD5Rqqnjo8xFjDdhkPuiWy2F7YDjumNtMFSGmCnJV2CNTjC8XFsg14FXyvKDSUrbzkGWcUj5TzGWJ",
  "key12": "2fpm7NEbucwNQopSDAdc3VS4orXFnBZhdaRYwvraXzcWwFb2eFvERPWZ8CKE2XmKDvHDt5XP29roue1Z2mZKYB8b",
  "key13": "2xVQjadpT3LVWXWERXR4nW8xFjsX6nZHvuwCrkrdHVKjApp4eYb31EbznUs2FbYqedzTs6m6TvSBbcjEnQDJtrn7",
  "key14": "2aJcLXhaUKWt8vWRcFDhsV6g1uh8pJxxsDPituZyfgHQdk6WcXatDfivLD8cpGiToMkukZATA51Mar5jNZTFMB77",
  "key15": "2ooCxEWNLmW37T7d7TfifMmmkwa9BdogP5zs9vFeMR1pDpfyFfWZZsHTaCUaDkFitsvFSk9LDhQGh454h1m3UuPK",
  "key16": "3ELghvbVFKNLD76UnKRYXiT8ZuokMTTJR1mVbSHEgthizGNSygNaRd7tkeTzTb9CCdYT5nFCWcGVitTkVsku8gXn",
  "key17": "2Jevq1zHX9m4bZ4unJvRhW8eRsaTaKyboMAYm88cQoAGiANsiKhDPEXYoFbWLctGarYe7eqXvPrWhXGjk5DavpM1",
  "key18": "2zQAHjq3vKvAd1RGUFuhpZHrbs478bxziNGFAvddiLSQTqFb5hFgZ3r3ubnaX1JsLAiJ6wvfGKYt25mmgtFwDi1D",
  "key19": "3uLtv2pvRVaFEtNSFyvW8FJVgwGtLPaxh8MCnaKEXjav2qEKbTHj5XirGrruKwqdDfFNuu6cS3zxjH7ZwbGwjMWM",
  "key20": "2zgfvdAQ9vx3k7WmaTXAZrihyZ4QJZXQe9CBAA8DQXVeLZuG6MZY1RTQz2aCPu9VBcW3k9YQgMZpHoRsEukGSEW5",
  "key21": "8H7nBt2uxbXV5n3H8EmZG3nAnGRTuATa1P9JjLrb4r5qWW3MvbxCBYtSqQ3GNaWjxdpTSZMsiNERrBmKWTA5fMA",
  "key22": "55gvfw8yTv2EQRD4eaaT4Bk6fad3Wsn7A43BqmxkjKaaiDnbf3r7EGazpdEtDZwAgkra4F4kVm2TsFXvSUaDhPWq",
  "key23": "3zAioifntKxDHTZyx8HqaUWYeFrcjRBLryk81ATbn2LZgLUWjxW5dr4tpAyKinBgKc9eaJj647jR5PXzR2LQPTKK",
  "key24": "PJjRt8QFW5NXy8vfXn4B9ugxrUmR7xwz2gj3MzfJbZn1A5Ey3bornoDDwc2JkUjDm4e3XyZTmgXbFkCnUSt1oEZ"
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
