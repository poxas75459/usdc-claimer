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
    "33CVD4Y84qCi3rp5DeNWmx4Qifzs7RK2nBf7JQm3xTbDs4MRK8vuVEsdCXtid72EAsu63uXydhFt5seQydCKkJAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zGbQF1NoatKEw5SzD5XUAw18KeAuZqsZck5mgZVAr4TAFi5nUm4x2c6aThjdD72ZyhyMbUwWFGU6uBMUS284FAj",
  "key1": "3yDuwoE6DSrEjFt1hfHe5CaVTke9hhBd9d4BfbuT56ndZRCQYwjuRQ1j8QCSFzHbxZimQDmSwfV1SYWtaoVhSiZf",
  "key2": "mcVHbCeX8SVptAeVFsBH9Vgm1KPPdmU3wgynwooNDH4KBkRZ5F8DofvquP8kp5kPT1SVaRKQ1ocNW7o2JuEjdMh",
  "key3": "JU8WwzdvJttpMAEuhKvjU9ZLH84ffjg8RPxXLQmtgHQJi6gojcDjBHwWnvTYuSWjF6NWeLHcvAvXUy9ew8FVVJF",
  "key4": "4CmA1RrD9knx1R9AWRyq91S237e9iVHL1CBUDaabd6RsPcriE7Vnzue4CjuBSKmdR1yeTG2Qn7F5FerpGC7EJYHM",
  "key5": "3jLmgXGikAemc9egdt9zHpQJhimQ4vRvdSjUSbZ3HQFpE4dKZBcrukLVZesLBpV4DSvMoi5dU3heJSwH21RkN7sG",
  "key6": "5eakPNBNeAY27XaPj3PZQFzjwAWBuajUNUjLhY3SFgTBdyQWQNfTpSGJSd59f84aJpiKdfzvsEyv1BfDG2ZPHFVR",
  "key7": "smLmJmw9u6GxC2oThbNuACyQujsCceDvkq7a4CqRQonPcoyRiVA8NL68fE5qqejwkHv7NbBWzxgKLzE9zQEZX5B",
  "key8": "ZHSy4N3YZNfM24dTe42gZtk9Q3MWsNmE5JScfRUd6vDFNXMbEHwjChPi4zFp4MasSUX9NjUNsbrfb8izdwbq2Y8",
  "key9": "2tM7PDFcMESD1WMgxWyhzjWk9gSWc5JBSKnxwaQ7QbXUbnV23NEPNxyMhsLEDqdmkDWGMdTnGSf2uHvtMtHJxLL6",
  "key10": "2bjitYcyFBCSfyKNUrReZXT3fzxkKXnWjwoYUyjunBhd6Sec1ftgQcTe3isNzoGDq4ZZb2hz6amqaCQFbHVfSHQx",
  "key11": "5SM5ygczXdtuLXYcTV1uXZjyDBCNrv37aNuhMvTfGdpBnh46quDwVDsgV6PbDBNnAc8yrh9j21r7xuzpZVPZzUmd",
  "key12": "tX5keZRFbyT8iR1e37NQHn9THWA5jjY3yK67NVhzRqghqrUPCUmt4GJ5C8H5rRZTdrWpBjr9dXkThhf2KXnSr77",
  "key13": "2RBFfxQR9Jo45TKZerjuXu34725p3BMo4Xg9DzD8tq48ThECXcUc2wDwJpaTUvovtoBz48QpzgCuNyizUuvF8zuC",
  "key14": "n4Pk5jPbhhuM1bT5xiectDwPABDMU3inQTp53K4PNEHvqjxyLijfEYwBd5Wi7L6A4EGyUbuDVPKzizSdP71vnuH",
  "key15": "3FN2hUvirMPrGvGFJSBv2wRRnS3BS2WF9ExazCwCrJ6BhYUrVpbRScTBHcDEjP6y1oKHyugmhs3RuW7KVjRQ5PJv",
  "key16": "2jKMYPFprnJfK6uULNc8CNGYbJfsJ2bjiTB8JWeGCkk2Kq4kCAYxkFELCpfgdvGYiqQbcdt4neNAzCmqR4miCagn",
  "key17": "4PJ75gHcEhmwNJQhh2jBuq5hHRs1B4Bq4t1RQsfz3qKJVsfwpKaaQhGjhr5dA8sWBHzaDNPmV9CSbtTc7Beff16U",
  "key18": "2Qu7d7J1wXEiigo5KC9QegtmHwawNF7srBecx4rqGQKGNXmJ7YoNi13MJLtasdewhhToZ1pcomjhWR9XaQTDCmVZ",
  "key19": "5d2Vz6ZvjNDFAK9ssensYsZ21crkkSKHgxqNRACinPrJ66gFUf18s8p47yH4TggtieFiXGLzeHEJrYpQDWwpvYFS",
  "key20": "4hfzP1ixkRtAczEnKWQAXkauJeK3KFb8YD468hm62WRPfFT9akbm6fmEjBuAAmbujiSuVqqKq6aUqRwkzQ6pLM3H",
  "key21": "2snoT7qLUEQrhy3t4oaWgqQWSBrV5uAYHhXFn3s2ndPGSuwhtfB11obodar9ni89PDQc4jYM9bfMKDhgvfzmzfPx",
  "key22": "54d3fEE9n93XRR9ihwq4xcrZ9bWRRfmzPJjmUg5abNTLTGA4Tz7eFsJtjKrcZ1HKRwyv2A82BWRrx3fPHv3XMBQM",
  "key23": "5F3RKjw9GZQoBQNpDZdTrgMqkvXH1RiJfRhdeN9v5xDb8FtiQ4tyKL7oXNhoCDs6mdSGvQk8TujmSMMpwKW7CmN4",
  "key24": "31DCXmSpo8xqMtDf6BZVPS8kcwVj65ApbZNQqLuyAbuXMRS4dsXX1K2X5PU1TMxfzcNGJY5NsqjeH9H5HfpQypeg",
  "key25": "3dZBPEi2rsCKysyYNDPderwx7z9i3uoervHfErMRhAaXmucFcpFVEuARo26uh81dbM3tZepA7Yt19aau5qus9sQy",
  "key26": "2VS7fiuvdYQiVcmUTyGxjdJMcM77DRBwzd6JwnadaQn7LfZgTQyL32othXihrt61xaS68YA1o7XkDFwDiRhWbr42",
  "key27": "s4Ru6bgk2Tf1m3JuuK7JK249TKnFXYANZoDTZWiRhHfkLWzrUkiyFNh1gstJKLFWnKzHehHyiJby1xc98PWQnoG",
  "key28": "4ba4CkwPA6wVRk67Vh2EXmVcyKUd6h6vhNCXAvs94NBqNseEJmBRdtRKTpwiFmCXeMtigpazDUf2KUycHPGPC9Ne",
  "key29": "22m2FuxY8YZiAmYCfjonCfD31to32t4yt2TEpGra8dsEP5ApgrasHeVsjKamiirdLFfk4ED2ny8w5EetNkTMvXKk",
  "key30": "5LkqskcCfqZ1DaTuQ3PMhRnY3omYL75TSK4WbbSmTe6wyQF5WA8SQ8ym4XNGpaBAAbUo8A2Hu9G1CJwVLzyAMr25",
  "key31": "4Ccx7SzWXgRUrDf79hGriFwQEEgURsmhT8cSHdBY9SyNGH9BTNs7VpUcYJz6YWoFBejjgiyaQmMWNmtCbbZaRJbx",
  "key32": "4j2r4gWqYbvczwdtHw8sz5iGfeycvG89jky1dKSomLrFrWi2iybKHXPu5WeEpwxKHgUsXSyHS9qYAN1QL6yzxiin",
  "key33": "5gn1taSFSsuxwoqNJGgCfePFiYQMSQZd4LYpMugHKrtEndRRNh2Fr2aLYFN381CKV7itfLRp7WWiYcqexejEfT6u"
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
