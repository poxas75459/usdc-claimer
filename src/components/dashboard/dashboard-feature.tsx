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
    "Jdiz25RW3BkUapRXSJEL5uFTNVJuChJ55e1gBuLswjDD2skA7xGPJGrM96sup9AdbkU6cwMHHQ4B854XuytCFzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JnjRMH4n6R31Ae1ddY5eK2DvZ2f5dcU1MkzLoBpbProXwoVZTM9qUdEF8VQetgPvgdBo6ueK6KWUz6C3ydhp5V9",
  "key1": "2ETg7FEfUhwmrpd5Gik8b6MTHrEu3zdMD1q64kTLYdtnFbYm9467qBfJfq9XxjKDKbcR2GRn7yQsR9UhavuAy7Wt",
  "key2": "gy9og6QT1SBQkV9LtarFqg7tyAqo1BJWuMkSsifubgrQD74nEvJHyETG5RdXmVsHwNa9VoLgk3N95y2JfyPKqtb",
  "key3": "4pVSaHywbebAEUHTVUAp2ge6LLZoNj5GwC5zujwnSorJQmNWCx2XT4416aJVhxLwUA6dYLMaBztEhoNwUMz228UB",
  "key4": "4cucnYjwwzGTGjS4zVVp9yKKyRGD1n2PW4M74xzYHfb6GeCXnhJaCbRnza8ehx4677768WHTJY7wxJpH2CXiTHLj",
  "key5": "rAddNgzjeDEisfagB7aUQMm4FbwGkYtRiot3EU7mo3JdQt2XgJF7RcfUBdhqZv7JAgQZQGcjMmTqMtAX54BbKX1",
  "key6": "3SGccefV8Kg9mvXE43aHWmtWXfxT9w5MFCELu3t7b46Er79txwnoJfpscgNjkT5gBiKCGkS85j9KquaBX6zTXTP",
  "key7": "4BzFMHZAQj4wgKWombMAJSkN5jaSPbWwbWAJw96CC7YVeNJrWaeu2Vebdy52ryFqSNWoto3wwxptMi1Unp3UFpvq",
  "key8": "2PVYMTCu4YZ1dp3AgT9V7YswU6c69CqpCbjXMhb86pkwMZ3WKzXa4AV215kKZWX3hQHShviTFhRpxZd1sg9NY1rP",
  "key9": "63Fo6PWchhfyAxw1Gycr3kbTJvPxaPNAK2ZFEN6uNPdxHDu2K3RN39NSf7LA1ot85n1pQLyVZ9eaeQprFFfT523E",
  "key10": "5taxLhbs1dT2mKq8Pknb4x49xAFNooHSza99qSUDkqqmfky9AbXMCGT6irqBqZ5V6EeNL4R4wJbVsL9fbo4b7kzE",
  "key11": "22CUBYRmwvkaEHM9o2Rf8JbJyBhSTMrmhh3AL89kYY8Fkyrk4wj9eJWN6CA5VuPQrH6rY2qt1zczsAEF5uQptZx8",
  "key12": "SumaBfhgrHXwSs1N5HNVx6B7BTr1br8rEdpisHBv4hgv8t2gDoQHzam2i8Ld8S3Cdbvp7igF1uZ67BBrbViyyv9",
  "key13": "3Jv7xyTiQbymdkYY5GxnbespqLUCT4DoWYtZBJhYGBbkHyBX4rhGCX3PTfhu5382UiZa9VS2TA6uAnQ5UczngrHf",
  "key14": "638U9FmymSFDv6zx4w7EswdDJKEm8pqpAKjgZL6PmxxezH1LYo4xDQj49gYnufgwEX63CB5nEGzPxCckDDTVKgW8",
  "key15": "4iun74TMa92wv2ixhwK3TAMiVm1u26CPuvCbyfPKhjKB6Y8CzMWqsf7hh3314iNsrUhzwnhQRagojs7d5wCxAMrG",
  "key16": "5vTZjFD8x8FPQq9iaY52zYd4zNyB8G3owpE5tx5gbw7Fq8RoxC4M73iydgYPdpduBGeHCR2tmzYVLLvsxgxvTFsM",
  "key17": "62P72nFaSGQd9NUpAxEB3FsHKMr595PC9sETqhPwk6DX4TyA62CyDjX5nWQyQENoq3T3auc63RcW5jR7Pq5JDJLu",
  "key18": "2JR7Huh6aMyYJthKmPo4c38dsERjVYwwCghYvNEHr3XNjgGfk3Z7ne5hxdygQfjJq22PRz3BLgA96UP2xakJ1fx7",
  "key19": "3Dvy8rGWeuq8otYpd2BuUezbPj1cN4sYKNnukC1C1yMg6CbAitDcET9YBQrFyGo7CXnJc93MCLxHVud6zPxqKwsL",
  "key20": "4JzSodeNtxYX3ahWCZPJ3tQgTmLQcQhH4i72YnhfWPmM8XXb26RyQmwM4muN5AGjE76E8ewT8RA3W7RsRqFFcVe7",
  "key21": "2ZhkB4pSZG9TX96iJqFDrDzs8C76DbJzDDGd471gi9QzeAzZaZbUAQBLJqYtLZcthssRgzR8Q3y5TMeLtxw2iASG",
  "key22": "4FWFikvXfuMyMv5WJTUfhMthxLBik7dsGBLiJ6LMUsadPSeEWpWFzdTYQpMDZ5bZ9h2rNyDsBDxRwXprgTySnfi4",
  "key23": "4kiLhTmo8mZxBb9cj2Y5cZTMnMDsMBeAH89jGR8whUAyyyLUmps5bp3U8hJ8QzYfCz5AUQjQgYMGGCiKwsr4WvZX",
  "key24": "4ZXMZ9u6xobDH69JhkrgW3muecGgBk6TabMpsMaryADWVYGJR3Zbg2ajktHU8QKvf2pydjC4pWfNbvyMKYb7G4Br",
  "key25": "3Gap9NWoYj7BQrxXc1jusCgGGAHsovaCh3PEm5E7RxMxDmnJ2dNDZHpadpKy8DZQGdjKz6BypZBH9Kj8bYddW7DG",
  "key26": "4yiMkKVrQf6YatH8repFcSfyDNcg1xMPaky3zBQjHEpyHX5B9czhS5bxzBtsGm3UChG4NNwJYQsFVR9CiuUCjaqi",
  "key27": "pGce3tn7U1hsrLFLrHtQQzW99m6BAYzwM7UvLBoApdSbtdVpdw5rvozXSvHXhxoDTnL5rLLmgyj7i8hhbjhWERM",
  "key28": "YZ6uxrbinGoLrd9r9RSVEECtz7xCji4kLQGY8nnCFx69dfA188CTtZwHDWCNEqSnYgtKjmxuhFFad1jhKmqehGB",
  "key29": "4zhVrXrbXEBZ3Rkn6aBo6iqVCEJuRUrQV7JagXHpfUeWcudytwanAEmjx6rSQcbKamjKzHhsCA7Q8HSRUN5M7TH",
  "key30": "3BVKx4ZuP5V44XmkA8bxcVUCoNZdQubehZvkWamSG5EXx4rJWzsyL5fdW3jTdrYKYvQpMiHDvNw9B7YZqqzbn5Nk",
  "key31": "4NBrYWpsxBJekUizd4XvpFhDe12kGNPCFQFhJ5AUSEkXKPWKYHJekgPMB6gekAXnqXMiTi5r6yJy9C62QrX8RSA8",
  "key32": "4HZCtw4H6pE7sbRmFjHcETuw6EAZB4G4DAFmhc4yBaefVFCxYeqdAXDj1wnu1u1KBG4pRXYSoqo2ZiR9yortwEgC",
  "key33": "2X2HNiJcWZYKtQsP2vE8rHvZki7VK9aSGE9ayvXNzbtyA5iPQJTut7ZSzCYgsEyz75tovuauEyzjET3ug4Uyg1VD",
  "key34": "3gmXvVTFcDYZmM3yXDp8hs8Fj5Chsh85EHAaPe9SGkpQQQCzYDhtU1kt3Gs7bhpvFRuAZ96KgmjBRyh3MFaTBvEw",
  "key35": "3bh33M7d3GXKNvzTz7M9nAjWWTJxRKbQVoDSKnuMQXDMf7mdHDzDBvoK4VahZu4WYkTgTBYS5nNJsT6yFAncxRct",
  "key36": "3vKLPi1LoYRvce8PXAPPhJjS1NLvmxvkEJXjTbcWV4DWbpK6je3PoSZNeL2XJ1jYrwTs2nk6FKw3JDUhxQgRZKrM",
  "key37": "22nRxw2CEA6ZDUZDnhePnMdbVpEuMparxYKFVb8Ded5ALoQJPva5fTvEmYiwiHELYjyJPondmvsmpbg9F2b2vizZ",
  "key38": "2LVfdHS48QZcKZ3HZJt3FDo4YxuGT1jB2U5TarUeV3YKsciPenmni8QeiyQf8wj6THyPmKqcsoMh71eK3NvynxPW",
  "key39": "3pH2s5j6C7kfSu2SBzRkA27TwPAFGyne9t1EmSCthyWnAaWenjPdYCsfaJnwNagzMRqz2P4MfwAtvxZgUEUab6c3",
  "key40": "35RjyN75bqmZajxh7SRwaGPNWWicAr6wYHScygp847sipnu95YgRNDFvZowatw34NxH7neckczCpfjHJkHnNpHKF",
  "key41": "5y3aV6AsrppHJ4o2zg9Ro7WC7hRLMW9pGAdLBJuSif7aEbmPRjqk2kxpmReCSSjrx6gb8xm1FKvQxNuehce3yYG9",
  "key42": "3R3LiPEc8XNLkfim9arJCkuAbRX2YdbxpxuuGdNvz6LRF1cKCZJnKTcdorbe9P2oQLFEJC1jcZkcoGmQP1VVgThr",
  "key43": "2FQ3JFiev61Gtoe5Yyozw7uVCupAwfQU6ayxd3mAeNxtQCvoaTXrKr42Q57mFVZ1iULQ7ytPYyFmaJxa6GUw8irp",
  "key44": "4GKoaMSJmXw3z5XdS5KmG9YmP618EhQbxEwRXChwQWVRhXtFumsRnzZheoFbKvkeZB89MiUBrcuZbVgcFXGxDmsP",
  "key45": "2E117vTfa4ho9DZRvFpaeMHGtbd4K8KZmkhUM6KSg9Nb3N9Sm7nvWx8YNNVsbtENTaM61f5irzct8aw9D42JtEQS",
  "key46": "3nVCmhh7sCy7QhTzxnRyqXrsJe8i1M3j9mbk5NxNGYcDf9HB2cnD1KA2cCjy6yYbCsdoBPKsXhSeHkuVHbE55PSn",
  "key47": "9AtxLycEf1WHY32QtUTjVND3QDZ5H2MV1u1E6kJkMSirwK94MFNaNrBQxwXA9bLMpiMeG87FPT4VFY12jtyjCz6",
  "key48": "frmuuRpohGsqt3WnxM8ssrXGCZEBNCb8ZF7UAT2ov29C2vgS6145N6xeoXbnzz7X13P3bukceqcpWXb8E7fautj"
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
