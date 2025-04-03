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
    "5hbYGmoo42MnWxoKJEd6PUDb2QzVwqiAhfwg53jzvNpQy58o6qp1F32Lk1WakfZH2hux1rBVeqSr4QZvAaXbTNvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "daxmcriZf32EbHgSbJHPvVRZYzAc8Wq9GKYY2FRgq4w61dVqCRu2yjNUzcNJocq5544XWjFUU6qcKGKwXypFT24",
  "key1": "3Wyt7wzTqkDCp7MMDxcEB12Mpj8TiSN1UZnyLRjBf9jdkH2cjBn2T8eGzUG7ghPcusEjxJjNdboKpoiYtzmBn2sK",
  "key2": "zCPVhBCBWaPeFXmWiMnH8yyzwCtWNt4CNTr3KFQQ8qV8tPj4qsc7C7ZvShSRt71TvuWvGVMKJZfdAaZVBh2iuaN",
  "key3": "2VSLDNcn4CCVHvaNN7uxBC3ntNaowozDhSGUYnbL6sXJmQoDuXMZxFaLdSnjQQJkLAGgHvekfmQyDrTPtXTqMoUa",
  "key4": "39DyjceoBccQCLa2ViJ4sk5PpwDsCnG4hSb9rK5gazQ9a9fHL8sDU7FQn3odg2i6UfTLjENTxKsKoyEdebJ64y8f",
  "key5": "2m99YuWt2v7XjuUcjG8rJi1JTNMfWXL55VqSoorkNYmv2DiJVQrUdpqX85aKzDLXP6srhRSNxW82h958euHDoEEi",
  "key6": "3em3P8haTCkU2kLGccE6yHHLBGB8v5dwgRjoAjYYg6tLB4j7Yu6ZnnWk4TVHqu21a5mTfYG28W3ijfjeBuiDyvoS",
  "key7": "3zYjfguEZdnhQyX1ry6GuHGvctMd3JzUZzveUfADuSvVCezvuiyQRmdBQhGZCZshgbR87brJorhza5Fzuu5CLSUY",
  "key8": "4iEPYjWbXntGdCEjzZmwMX7nZL8GWB1gMGAhPPp4gtrbhk9MPiw9jH9t1iuzGxQ7qBbwc5sFUbvPAmHJhg5WzziW",
  "key9": "8LFK4a6aXg5R39ETTmvyP3btiy2832TT4LoMonrkRsXJE2S8bhQStbSAJNS7gKKYKU55gqyr1wVLBSohTM57qgE",
  "key10": "3bnk4KNTZy6V3DUAn7eCXJViVt2m7rJUhJStBGfjMJ8Wzxt3iEj2beRwzxxyvZZHzgCePs4Kwn88KA6mJ7unoZDz",
  "key11": "395psLHUctdaanVLQNDftsRigMCx2ohL4FJy3vph45ncaMwPG5vCjWbHPGAWyh1EvGGBiXfijACGhEiyLGocBbhm",
  "key12": "53FWZpThd2LC7hqdKU57cZmZ198dXJjZAKMRvk2nV4swTWDcoCrQ8pSs8ipiQrTp7UaGMSnq7BcFqUssrcmbMkkD",
  "key13": "4CcNiDhTAYYWX2FUKLmAt9NTxv1K38JnZtQ56xP2SUV2ZE2LL6a5T5fRz2QAipg8xJqbCGYLirz9Bs6L6NJmqNaF",
  "key14": "2zni8ZKCgACX2izW7LC7vf7bRXqCBjsviwZNt3F4u9ryz7YtHb5iVuBWXhVnDb3YzT9ckRsMgB8BFDSMQnMsEe75",
  "key15": "3D9gjVr5VzG3HhfSKpgJLh6hTBq9ctQ2PxTRmT3xhXk9EHWDNQeJbGsjZWQaYjARTi9jB18SEyoFea2Vxpa9hPWB",
  "key16": "49rTDgj5LjnaEFE4PP712DSAwqfKqmuYKkJRat914azdTYD4HUwPSU5u4cwGwUrxgUVhnah6htgsZxhUotpRwBPk",
  "key17": "59ADWFQfHJX6zX4nKmWKddG2gNXB9DUVfoPwQxV8XAKRx2PjD4A6DcvRXHR1s9Tybwsr8RQC2V9meRiKt5HNrkYE",
  "key18": "5gth8j7mBc667s7NQFHaepyDiCiK91MP3NnbHAK684YqhfQStDn8gDbNBwmJwbnvMHvh68oPoAgQ444DBfQGfWZU",
  "key19": "5tvTzJHZLf9GGRakwYExTHnzWurT1xkuJS1bMJBnRHSudUUgp8DLizePtstFgUBSTaEezmnTZAw9kpiokEujnJ7w",
  "key20": "61NR3L9GWXey2oAs4g9HiMWEVtBL4hgBb9r4z8Qrye86NJZbBVqSEhR3Zpy7UuA9pivUbHTY3sMYXU61y3R57a9j",
  "key21": "2SkMy9u3t52gkkQumdV1fQK8paxv9ozooFBQCrcNnqGqQcJWittEyKp5zwmbzzYNAhKGRnivU8hVQuq6DFVLw5c7",
  "key22": "5dJBf1bkkQHCemQZWgi8JwtBnGJEmRBg4WbUkEJFNt5diPNHoduTyMLhAh3WvfCSgbJANbuD9oAyxvMAxz493FyY",
  "key23": "374hGB7iBErTMrFbhYoKd76npJ21TMKYuPkfwHHYc72NgtwRdR7oGma49Ym8n5CuYKaM7j4CvYRTNNgff97SvvR3",
  "key24": "4Q6g2coEbGz8qHBjYkr2nYip8jtjvnDC2km7Ei6rjM1ASHuUWcHv1MPWfzufvV2SVfRcuWisa94GuSnDwn4XsZHB",
  "key25": "2sSGyLkoDw37qJNoj8itVVXKMhmqxqMUrdbjN2dTDJLYmCUq3dNJ53DyV8nKkZh6q91VVpx6Yuq3tnGrnY92Q99D",
  "key26": "31U4Uh2CYvQa2YtEw6Et1sKRbgEgzrK8sMmYy8N8fgFqVD4CVqeHtqK3u4wzjo2jo1gCKkEbCwyaKH9ydcFnpBJR",
  "key27": "2uhsNqCLB2JAy5S1NkscEbEBwcCnfKFarGRb6gpYnJ57RkRmRCxj3aksH7S5YpeLFq9mcCURDqn68v9izEtparaS",
  "key28": "1W2Hnu8tURjwAfuwhdhjbSstSGFnVdNvToaamcKWhGTavsf5mQsdPqWXD1uQUkAu78NrhUU9iECcKvrGtwhN5U7",
  "key29": "4pJes6EFENDE6cQCsUJojLb7fUtPTYpJAFyFQta37fav1LZqYmWFKPwbiUre4qjZTQ5oLLxB7cacxCcsKVSEdUm4",
  "key30": "4EA9FgU3t1saF8JkfoSgUwqiMHeyFCPzkVqstz3kNtgeSKGmVaX8ygBv2qzjpvxL4XnzLuekSJdevX7i4iWdNwFj"
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
