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
    "3hDzomJPrEcCXpZB8C32Sf3JXhp1ZNc4tbCFjjTXv39G9RjtWPC9352dMA42WipVTpdPgYmfAjBzJyg5RqZ9icYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44v2tRLojndimgoTUfQ5R44bE5A6XhYV8k4q1Lr3fvAYWFTuzi2GUHzbKZFVeEayYpQec432T3SzGdWac96psTMm",
  "key1": "53E3ENGVczF6VWhRWuw4SZ9rtth1StkdtegjmoFsecyHBvsbYEdBmZoDz117y8VhL5LbmJN5a2wfias6uhbnZg7g",
  "key2": "3PwCTSWwtwnqZETuhHwXFmaeDXFaTRDPLhwHzB2SEJ9vc4795mgFWpMbRuES2XdV2ME2iEzySs23QKEDzwnDuPSy",
  "key3": "5HzB7AJJTKrv1M49ox84QsoxV7rgDmPkbRoZjPhzLpbhCaf33CmtjLL6iFrZ4havgq7DVtWhvcR7g9TbvwWC5fJp",
  "key4": "53iZEr3Mhhc4uNtqRMwM9RwUZBf1rqwR24wEkfRBAkzGJoadAQLm2VXQhETz4hp9yBcadm95sF6Py2B9fkGFWE1u",
  "key5": "7EF1RFEEQstbMRmwkUM8RvnNskjHu3UcWbDQWUrWmLrmeiFc2NLqnyNhwR5HohcAp6GA9LzQi3HSzRwkwDV7rPw",
  "key6": "3LNTWYL44mezTgaPKN6v4hPSbqf4C624wRCXR5MqpEpekayYi7dTsrFoo3n4Fc3pKFin29omnbAbEb64Kkxe2g47",
  "key7": "VmPhndDjVw4DHS1zK4fm4BkD1XLq1xutxMZRiwH8B2ksstH922jASsEFeYLQZESawLPb62ggDyhiEjNRvcuPmQm",
  "key8": "447QShvYMiGotLrjyw9LTXLVGUEBtJrBH48FyUQxkBw9DxF7M4LonhXR3g5NGCg49wi1rD7ewiXd6n1PhqTWtKE5",
  "key9": "5DGS6Ne4d2799DTuWuncbUKqFCKRjnvvKD1nX2Ea9kzw4XUdCHGnF6fyKmZGUjtTJQxeEiDypxZiKnHZFh6hP7y5",
  "key10": "4c1G7ix8UsYwo9zG4V3VyZr61Xiz6hxUnEgH4wqbyLo1qZ8bAwZy6ov5qrGFsqhWA7eMqcaTS6tc5cFGLAMGs2PU",
  "key11": "4K24b4HpojF3UUd14vWMenrR3mw6XBkvAQ5CAWMBmTb7S3QxDGMd1KbQmgjCdoeexKvqcTgDaUeQvVfb43CNAFvt",
  "key12": "32j9iU5UGjHQFnsDvpJ2Wn1YTMjnQnSBVLMQGhS8ZfhWogpoPQwuHMwt4HniPLFznjpvdJ4Gc8MXXMKLimu3WjdE",
  "key13": "5tHqpXajaHboc6NPZES9CUXGwrJ8EMAiUQXqzKc5KnqrrLTVt3AAAmgGzAo6ZBNj7XE73Q8g45qET8nD9XQme6Yn",
  "key14": "pKDoHeqhWzpRZXA8UVRyyQtSHV5zqsGw7go1ZMqNYZaLBNirfiu7QWVbWc5tv5jZN37Qasi7WT9JZBU1aucwsnp",
  "key15": "gLSXJ5ACJ6WXDkpWENnnBSBXbyTRqts9MsFpqAe4Z5Gv6firWdehNuM35EFcDTCmF8G7a41QBi2JquCTufd881Q",
  "key16": "5WYocvsrz6gnzzNbmfcgX4jmdenWY27hgPnmUhQDsKWuADKAfb5rzPE3hN6tCYLfhwFz5SjA6bCyYJ9VqE62RPox",
  "key17": "oUz7LsZk9Z2wLbMo89Mh3ZaQQCwXyxvPBHeVidBzvnUnRtmcEdMPSfbVsM5C2SRb2TYJtof3sFLEn8uDgcJLPgo",
  "key18": "373CUWKaE4JxiotUMu3QRxajw8UMxszuUw3yUKEy62UWefKiv1f5a3gy2bEANqBrtMpETTNreFxQ45SrRZzWu17s",
  "key19": "rY1wGtzWXDyZuMWFgcozQ9SrbcqMX8KUNhgdnVH2CettFWSXBKuWnFbSAMeyzavrcaUKLWavJCYyJPqK76MX4eU",
  "key20": "jxom71UXR9n81uK6WUy6a54CDqs9X6AqKpeQVfgSSoQfjBwo6eZnetHXdPXp6WQrF85UFzHfm92yELPzG38Ap66",
  "key21": "3yWbxT5NtyD11geudhJs7q9nVuyhxMxdf5mqz8G8Qhq7EeuWrTXCodCy1nGhQJYDWTiHEMq3RCFi7ZEQTc4dACq8",
  "key22": "2kHvuQGN3BF3R6Us75UznuE4karqS6XqZdivbYa5uJXzWk8KZVwzKU6d5x3xsnkb8wytEHTcD9Gwe85uMB6erAwK",
  "key23": "4ixCPkPNcgUdW8agtGR7oK4KJLFV4bAg98eC8UG7WvM4PArWxjN5t2FVuZQuAzc1DGEpNqwFoL2xKvbrBpts1WU9",
  "key24": "pywutHcVkzGMRWG6g1Jopby9MFd2jHcFvfw5ti9nci8qMZS2FKj1zfepm4VFsMgNobciKpWSo6rkXx9T6gbBSsV",
  "key25": "5tXH7nnGKh2hvp6xCqf6ZmiT3PaBy22QG2mJGox76pywb41QX2uUihom3a2KPgT29AkYV6oUHJiDqQCL9AVzS8F7",
  "key26": "2PkM9YfcDnvaDBLGbunJjxL4dBXq1XPdUZLfyYRqTypSyyHPjEu2qVFG6LSB9fGU5r9wFkKXz3omZxas7fKMwyTi",
  "key27": "27G4hqyAymYGz143xWixXKGqZXTvFZQQMqCigRmYruAzUbYov2hDUciYs5utLMfYDBvmy5qozxGpAJnuVQkPvuxg",
  "key28": "4MoGjT1i1dVwBmumwBGwKSjGyFEc4XCjpybjxVM9JtyziAnnSz8DkRx4oCkRLt82Ya8JpQUmPqokeLScxikgQJkf",
  "key29": "2buFmVJN2fShDrzb4esm7jYuKeGwSckKPiGAocSQdDJwGfWweMrtsuHumYEYxoHwCzNrbwQJay5SnnL94BxNZSdb",
  "key30": "2ZgDNswfwFaL123jFD7SgPEFdHstFJbntwjifXtrr9ceTm5D5DrxdcTaXJCkp8qdSsm1tPS1CpYTMwhfAuawUQiX",
  "key31": "4HtNjNAudx5ntTSof9e9BSkMFjLZdr3X1ay3vGgvKENXvjEjrHLLVCXRDRMkD57ZQQEcsSN8jyEgzH6aQrT6mLq9",
  "key32": "eADBtswEjW4dx2NYx3TV5QJHorUyuLMS83X7N7xtd7T1varS8pmP68QPfV7uJdXLxqFGk1oeAvM9L1SnxAyffEH",
  "key33": "5SZroSGdbDGcJbjx6cKBWgTxVmjixYxWber5jJZpP5feTNNhxrkfvSiXvst8sCT2fztgKLSvdUhWYPfUtmEsU7Lf",
  "key34": "3cSxWJwwEFptgYL3NRoPFHbRgcdB9KmQbFyEidgNEiTvhYG6SJRoLMvEBJ144tESSukZXEcUKRxYjsPeVAvbt4Po",
  "key35": "2TJUC9ioFj2hS9iPu5SmGy7rGTMuXdX9qCDPmVda4whP5fYmQXuzwTyFTAqpECsZJXZUsyEcc8iQN1U5aALZ6hqm",
  "key36": "2A7dFAxbdUk7bvjjpF9zoPNNyH5dxH26jnAuCWPTwzQdkisrrc8guMVwP2S5fAcUduTVG3YqX5u9JnL8xcR3o8Gs"
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
