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
    "4AHRzoA7YgHRsLyuQSWzLxwBKQwE65t9NSA1eyWn5n9eU3vZZJHXvyf3yQftPB9CWmBaPfyvwPJrXh5MDNaMGjiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h5qVddyEcthCqe6Xt1MmpuSzgM7TGJASGt6wDJ3Q3p5eUZdgVtYsexCRNgc1fDR9AGESnjQP3XPKPXhuaviqrMq",
  "key1": "4zAcFXwbwekHTVj7i1ySf8GU32XwgbiBjnir6Dj7GuWbdi5c6hTXBi7AxtDEttfhLZEV7ihfT16qatY6nryT6JuT",
  "key2": "2FpDCFiU49d4KCchFwD8zFjy4SD8NgAMpjfFKoL3EuimcQS6DyzGQyRcuamgutqwebrbH9mNcttX1DYau7oQPE1E",
  "key3": "2kxJ4rcmmWEDjamYQjWrq5vinAMeezo6KBTx1rv25VD7FWwYCTTd4FpwnFci6Ua2ybmrsoxNPSj7PHVvCq8Dp7qS",
  "key4": "4DjcYUqiR7JhGg5kFSnH5DmnsV11kvTVcGyNDjcmJtD3uTRPGt84BGcuhmcunYnbybWY6pLRJskzE6NhTqTtCgQc",
  "key5": "B58y1M7nLGYTV2dk8fACuUtGVjyeMrHXqZ3s6fDQ3PBRL217PPnRb5LDmjeUZ2bHGcFG1oycrHujXAgvcLUuyMG",
  "key6": "5qPfsMRpX6p3vHawj6SmfReDvTenFWpWD6P5n9fEoajGaCeyZawD7G5HTpvfAU8vTtsVuvG8f7Dnn7c5FwXo1HmX",
  "key7": "2FqXXvhYB7d5fR3WLjXUJf3bJsKJBVBykULGYN6rYxdJUfyoSdgwuk3KdRqnpnzUb5wTwJ75QZfmrom93xhuP8mP",
  "key8": "fiM43PGsi8d5t2RwT2HN63dztosGyGw6aHdva38zkN78ykYDZ7JTNdguhPmiyopnhTzTpYzSi85pocMdrE6DLTQ",
  "key9": "4iR7jvtdPuBxQm46zZjYDjRepMAz6j6s6CQDVZDhnsLnrdLPyVCRqKVV4ypi8XZ72p8nm7nfTHNb7LibUcXGMFKU",
  "key10": "525B9Anby9kuphkodd3NVHLhG5dfws1KKp8pxmZKiQWuxfXJ8iY2V4zsyDaFVui5V4ZvQwHMADazF7VeKKSntqz6",
  "key11": "5Jt3bHkaLPLNiCBFZVGy6rPYBRe29AX2eYCEznWZCcVnKvMFxVbNkWjUaKVxXRrWWViz6F4jzegV4Gf6Q7mydCS1",
  "key12": "2bkrWQWh73rDwLyvZscA4PcHcrgQj7GrWYo5aB1A8T1eMSuEFDRPhAGm4QcpHnKRexKZdG6CyfSLWsHu7XBNyuC1",
  "key13": "3PQJERttxScmptigZJHd6KGJ5XY417je45vqqk3tvhnw1rPFaZo3HDNqsz1Tr7GRcQCsAjDmz4yiiBcE63VQ532Q",
  "key14": "3r6kgrnMcvFzyCc9e3vfWkeYjnSuxBTofyB6Cy1rxK3qJycoXkLDX8BEQxfPAygrGTBucmzYRtie9RGkGG3YeZKf",
  "key15": "5UBGBgSABfhxpysd3brWhN8kUbmBUgijJ7tu4WKfyRn7GUSucRCwrPZGGAwLmRBPt1Lxi71rfrpYcmY5uyQHcde1",
  "key16": "5efpWQWAABP4tSrv3D1ZWT1qHxzTLJbmx3QY3qUmnDVrdnXm6uYoHXXtFSDpCrW2CcQbSMc7QqRJxA9ejkp6XBBg",
  "key17": "3tyjfTFxCoUemjSsuGQRozz6xpXYRzxhWzet8votP72YqUo6BHm764nejJBBtFPGp6pM8FpAosBciZePbvg9t8EM",
  "key18": "2hx4FCQ4gkuK45qc7uqybSJbqWWuLqqcDpnLehnQhWj7i97ZkYnZ6ZrHiPcvy7M6zjKXHDyKPHFQ8yk3ZpaofoH6",
  "key19": "5CbsjchbMqWap35SpqReJ33Cre6UeWSJtUGqtfC5J2vpUKQomkRPm828MPN3rtGSwKeb2Y4Vt7sEV8SuG2urxt2d",
  "key20": "4rhh3RE75qxvvoDGKQurqFa1UrkVUTFGQPLXTJzTHk94nQ3ZMwucsBXMFtmEVpVQ5tt7iLPePD1NsfHGJPTHf6wk",
  "key21": "3Q9qvACjABLFDe2LLNyua8XHsvdSb8LSvzjGxkQLmioJi3dXXCBBFXJgLrDjnwaV34y1Bid8j15ia97n98w8CMdd",
  "key22": "5cZu5TVeoBJVrTust5eVV5E6KDKFeMXTNxMPAEKQrnPBV2ZHXpRXS29fQqP4qdQfEpEKQqs5dM6LigtCcTUcyu3Q",
  "key23": "3DWU7g11vowunfX4NfnhTHGEDdJ9kXxN9Ft6ooPz5P1nTy12pcz5wjAFsAEXBbEdQ9ntRpdg6iZLXURfK2pYWPAh",
  "key24": "4iwBv7p4fxXdstKLmW3jS6x4HSx4TriphVJw5BsVd9uzJb3PZzf2JwEu8Ng88kZaEeJHW1UhznQCmNunzwRwmxRh",
  "key25": "oRWRJ1Wp8UJ5URym2YHZhyKpscEbA3yBeuY7V23F7GA8uCLYHRMtbZa8aTdTdiN2Thr9BkJMJxPzCKS7PNh2Vdd",
  "key26": "5UxT6meBEjq9jV2H2SM9rBofAt3Sfoi6dCd2MG3sp4o13H8Cve2ixqhD892DQwtiDXSqWDbAvvowuLUwTFbdaCYC",
  "key27": "3rQgp9Maii2D4qY9dLz8ubWmiK6MiXVKVcVA9kPtd9ZrDMAysVKB4FVe4Dn1f4PVVBViJLJdP5SBDAFnys7YYLdz"
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
