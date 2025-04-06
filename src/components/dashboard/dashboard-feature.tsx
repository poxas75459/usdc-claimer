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
    "3SZNuSrxorJv2Nc1WMCWfEzRkRdby9hAKsc6D4jwf3KAfp7D8M9gfKzpzMmuuFzTeuHQYPacvXXJYMSzsfhkkWUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w6omJzKEn6uoc1J6PAajcB3kuCf5NFC4BE4ia7i7XoKwoDnQZkehhKDXEHjbyugeQqSF1WnmG2kTVkMMcd3oT2f",
  "key1": "3wbBUCoeP4K7Q4w6oKocHmBQWJhbo8LST7Mga8AbCKj1cf6ar9CXiMkPcddaTXE3n2kvVT4eeByNXGGVrpjETsTc",
  "key2": "5p81oYabefSLrNZgPnebHLGgGy5j59jiDYKdqDnuCt1wMe4UQP5VvnHCzc8LTZpFArhCbqWLsXAYnR8FXGVaqkM4",
  "key3": "25sdphBLeCtcrjwPRWEFGYV63c1AZ8gF8ZBk4m7uSEhJq3bVH1vNSxMtpPbhjxM2oGhXH2Y1DgqBywjUpDNmun81",
  "key4": "22qFdqe2XPLQTNzFCqbmDenXoy98RX3QytPLNhDjasfCPxtgrsaf763f9c4id1GMBPLpi9PkwHJ5RxhjTZazScbu",
  "key5": "5xmYobEJsDdJPgoUjKReoZwwUHTfnimoHkU2VAQZCgskVE7tLMzbLQDzvnFv6LwoJvRdK6wAnbRBpCA6NK7RJuxW",
  "key6": "4oGMyUx7iu6298nmvLHBEiPR8h14Kc5oAJqsWrMthtFML1Nw12xtpVdjHS2QL9Sq6WN67iw9qKoz44qBNhdhpsWQ",
  "key7": "4V3ah5YkxEwv1Tcf8EYJuEKiXeYczKnFzpuioGKqy2NvbXSzM3WmwkcLfRF4ih4fZFJdZvYBvuRLYURfks4NCHak",
  "key8": "vLyHjSiZgp7sdbcPKYMdSiNiPnojDCijwqyiXmXaUk8K54yGvxPzCF6psNx5i49RH15SP7h51pqRCBjUoGEmqcj",
  "key9": "RB5dHxKWiGHChJwNirQAaXBdh9HPr4GT7aee1e6uP2gbFNBSKpjdsftARcFoXPHFCuhqS2gU7aesijmZxWvLUhH",
  "key10": "aTf5Kk9M6mVbxyLyaGCNTPRMsyqNueSsFbRRrG72TxJn8VMT7ngJmyiz4YpHk7fnqxGTQwf2u5EsrtKLfPd8Xem",
  "key11": "3upkGGDfH4ZJyKyMraFbrPjbPa8LXSo1txL3H3AorfphxqPgJC9Kzd4nmbJVCRWUSkuL2ZRvbJ1Mh4UP1A92LD8E",
  "key12": "4Z2u4jFzwKB5qatTdeccPTVHGhpT2TFY6dw8f4mTRaqCQGQFgfd59eM43VdVyBFrTUPFkoGg621WyDZ1khp2TxXU",
  "key13": "w1s1XZYEbSHqscS9FNGuU7mXmXCAwtJ3RhWYg1nTcFuEqBGgWopbacDDubm3ZM6HFWBrY7cUgV7TeF62kzf2PsT",
  "key14": "frSCHLUcuNACvo5nDE8oyKchfoUGd86T7qdjShWoQQzvcHH9HEcToH4marxAtoWdubZHY9ifykz3wDCFXtCQ3yY",
  "key15": "2KCPcP8CU2n7KkPeemupNoQMa7pNJX8e6dQ87KucMNTCMHGgwKQpBRzmwAfTGGPch1nNEdidRvoQhmtJgMRTqhV4",
  "key16": "2zn8UigFFtBVkZtnZ3q5PgARz93xokMdKkjqM6oVH9LeSEnDL8oCwfD6VJDDKzsR8KkSeFSkuLsBPDAVodW3aerz",
  "key17": "5GoC69SHafhGHS6yxL9gJZbwaxYb7MSDJ7d6uywKjE1LnNaa9d1wbXV6VWfYHt9GBcyXedJ5HtD6m3KUpWhZ2Gmd",
  "key18": "3xs6AyCwLr25b44PYbv1Q52qjhiq8okzSP9mpmnD78RRxFWwHWG19CfCxtVbKuzYf3Ud1vEKe2zN9ddus98QzdSh",
  "key19": "2YADM6kfAyCHZdiWbqpdjs4PS44zVsryzEjswEwLjpMYChnLmqxee9RpLheWBatUTRk7GEg9cJ5By1Wsinst16NX",
  "key20": "5cuZdXoA5Pn18MdDVQU8zw86k4xGeokBKF6hp9qv99uGMLf26Jpff36zHjQXebk9c6toJhW3BnK7RGVRpZbYWQaE",
  "key21": "39sQ37fRdHvjdJ2KH7ABSmctnGS4vzmpnHbE4HUoJTd2nBwRRtWWbNo6XKY4EA432YtW1dmoKTwWQwu12gXnSSnT",
  "key22": "3KfroQN6bxkms1xXtBEUtzXGHjKFGX6x7uQpMFbKT92YrVRPJ2tDBzHPdk3xwgbzY9BGDz3yd3stGyqFxjb5TXBZ",
  "key23": "5ps2rophhRsusTgbcnXsDJaTATiREX8vCgaLR85aypvRKtdMv2rnLTchsVbemGsaaSKNArdoYR2z2vPsscsKzVQj",
  "key24": "5u9iT1GcKHkmFg4sKDnyMFaE9BhzGnFQFpxXqBp1bVWXJTCufmVM8QjQe9webkxGMjuZds1ayJCS2DvuptgMPuxt",
  "key25": "3xehn9nQVU8hcBNy79tjTmTRgbRzs39rqLG95XVt8eHmoYw7ynxnAVPN7YyETn7vV1zHfuWngzDHxeXJHqaAabvX",
  "key26": "47c98tA2UcBcpU7S31pV3oZZSL2W1Qmr3oDcJjNEeaEjPUaa3dMjGUMXKkQQcWWpdYJSho72fwHk1NzVatmFJtMQ",
  "key27": "4wyVDvuCC98ntMq6iGZ8tunDiDhZTgCshN26o3ZGkmwe2m1tNJuthmeC6xj3ozVoy4uD7riSyKXDjeQhs3KLtNGn",
  "key28": "3VRi5edWYaNp3MijapDaimcxgfWGJUTZDw5QXo8n5AJZ5qfCvdeZdYz3Bi2ZETZjjttnJtSZm9kqojN9GKyVJ6Ko",
  "key29": "3UP5W5LZthoYXF2wp7aSQ9tuhGXbeUWa8FzoHxiY15phBFpjkdKjbqqHCQZzAKKUxDT1wjKCsy5h4QHhYstRmYMh",
  "key30": "5ioj65pTRCrYSjc4KLkBQC5vYzCt7z1KsssJyEDi3UX5jTpLEVVyayD3gQfa6e47VMebaZSyHK3QMc4P3oZuxTQw",
  "key31": "5r3oG11p4H3quP66DfvwkXvkjciQWR5SRcz5TsbUz3qn3Gh1kUmCtDzdFXyXHPkwXwiczLSZKbhkT1uuHWBhUG8j",
  "key32": "gZqw24LJRAAKiJ7UzvF9XFjoft8BDvVRZFhSLwf6kqtSfJqDE4xHh6V93MZkBvCqKEdLMKrdkwtBQiD2V8oq2b7",
  "key33": "4yaERdso85Hz7pQdBGBnLpH4bGeSJu3DuHMi9SBFc5PkmXneauNunhRupn7p4bxp8mbYjHc8LXzzGLWLUsdbKQxp",
  "key34": "3Pj6CvN8NwmJJGbocxY1ZaPCUH2jiXig5Z5iRT435bFCnCcxHR9K1DeshuAxiJFvGsngASGXd3jhVAn4UNNVD1G7",
  "key35": "2PjrZyPLrZhuTPyRKPZgvyLCZBvRDQoydSZcSZgEhcDCSMkwNND8ENXX1itpbP9rcXqNCCphaVfNZHZ7pt6CZhKM"
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
