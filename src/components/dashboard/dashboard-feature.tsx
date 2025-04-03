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
    "T6wvk4DzHnp4hWS6VLGyygfXUsjsrv1AJVExQTNgdEkPrLVayzxNKtdb6Zj7YxkvVAnB6GWjvybveYgLsFUFZt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WhGveuJb1szh9UhrQYJYfz6TFy9jQkxNRCXhyuEY5kmJDaqkLL9o2vvnzVX7HpmgDJRZB333LqMAiEJVLvuvgN4",
  "key1": "3wAgYc9BYvNbQTvB263eQS4mfHmspN2WwzFeWVQBxjVbxs9hvGUhFSVjh942rfEs3ea2p7xu6pbB7v7ifMGc3PXR",
  "key2": "5ZYnWWjL6sHPazhL9LhQb8Pe9xKCRe6q8Y3rNwscbSpJ4j45KA6Y7n15XjvWQShhVCB1a9efSnHjmP1hVhczKYkd",
  "key3": "21yQeWHHtsB7qYoADRmDaZezFX2eXEDGTErYSi1TCvsvmJ9B9DPzFVPYCGadt3z7puybhuNS6atMS6Gb6j4PhBVG",
  "key4": "Cz4EzN4hrk2rSi8hWVLLXdYAND4aNGYE9YhbaQEbkGm2sxevQu46YFS5YcM5EUSbksK147sVtcZEPDGazjo8QjW",
  "key5": "5ZpZT75DrEQV5F6cUeQppHYp3wmBzLrN7qmKeHLxXZBMD97LiaT8aczNcJQzsAeMJVDj8NBN8kuybVWAe5K5K4CV",
  "key6": "3XXvhnFi7GASUbn9bS3xw49xgM8ce9JEEfwEi7RqDR511wSsVHXvhmsGXRekyXWiH1gUATXb3uMXvGpYoWPSTtrq",
  "key7": "2bAFJcu8wSeo7AiKSK8VrtzwJnJpmgK74abX8nLg33U2Y7kh8fxLGLaApzFoYrYBWj2uvhLXVgnzRtLvKFu3iUKj",
  "key8": "5boAcypb7RygpFjCmbwG8gkYxFTv9Y9JqsqdRu7AJQVxQ7rNGZB6Ge8HSfYvsa79XsGQtHNQSGUn9F8TxF8F68pw",
  "key9": "xbfC9emVgYr5fqQXnUHQekzZMDhDhSy8RcjkgHUbhs6orLkZNfmmUMSCTjsFA6GDSJUDX9pWLrXTZ7p5iN9dymc",
  "key10": "BvJvTYyg4Pyyzjr31mfEYJcsYTtC8U4W3sjzJr8mgPR5Bv9NzNTRWSBqL6bhzEiRJrS8P82e2VoeQ6Zi7KicpyC",
  "key11": "2LjVFskTgyFRrhZbcCkp8Wjx5fStPcok95JpX2zc2vqVxa3rjtYRMgs9jUZEZA67Nt1D6XGSD9MruciKUvwYdFaK",
  "key12": "22j31FSrXqrR2GNdidNKrZ5Pz1J18m5jaMm22HYvKeoJAWSNTqb2v9tJWSSgaSYGB5KxzmBH3ovobZWaR5qDrCux",
  "key13": "3FAR6YL7LdoPojNub92hZxCLVxyDBFXzTpgtZez3ycSUhF6CkqHCHDZ6eqHtdYJf1tWTZDaSArNAwSt2b6rHfSKf",
  "key14": "HR8KXq8pw7Mzizv5w6JRx58WEGw4P3UKQEgy6VsdLAZ9DXaUwfMFqbqA3aKr9XbdB2BQQR836mnTApdtpdGAcZX",
  "key15": "51hg79Viqfz1HgQdtMP7Zj6hgYWBffkb5gMpmGwSP5SyehfrVYV1uDm5A9tCtxWyNLXYBoMPgMV7WjvCnNK4hx5Z",
  "key16": "2wkU44pmgiacSpxhnQiCZQW7sf9CAxpv5uMw1iZ76UbpQgwZnNMkHyvynSRKygFb7aHrBrbfBF4j84KVPFikkKaU",
  "key17": "jpWeY8waepJea9f5dRZk54rpoUDLJp6gX7eWeziAjMMLbpkN4WmU6KgyZwaAYTV54J14tWap7QUGcLA26XSYnYQ",
  "key18": "5xh6261vWKmDKDionssyJw3zWBJRXV21pu2RdxtDNb2LEapRjv1K4oMjFWsNQTdrMUbKFuR3WV64iwXW6aR7nTZr",
  "key19": "64e61UBLAuYasgdWD92gYibuavJxQHk8YthPDW8tzVZka5Zed5ayjpaGVSkQk8no3d9HM5B9kg8jhdmF9a53SSD3",
  "key20": "28yswDxtZFk9J53yL9qfadxd8D3HLpt3T72bsZGrf45XJUULH2enWQGTS6g47iGEhu4qNDAUPLKA4KQWhiB3Cufd",
  "key21": "5karAkEbLKsHepm24mhKqp7XMZUKSyiSPkygYQsy5kaVWXdMpqVC4VA3U394S4PqWovYp4wwCzdKdfRzsJkNvtrU",
  "key22": "2cERxVWhyFH6DDhPqa41JTG6qSZgMSjT8mNRZEAyia11FZgikq6ZpFaDaAtcRBerfQVzb3WdaPZChZ7bvfMKJivF",
  "key23": "3Y5fDqeTQF3fMVxzwJnhvQGenjt3pf1n16ckrSEWZSmyBZaeHnkNqkqAU8nvgKAJymjhhFTrUrqpEbwFTbZcJzyh",
  "key24": "w4UEBaYKi9rrrioRVGMfDGrAbke5xgmrujBT168BEF6D6J44BUdLvAGRiYA4f11YfwQXXD6YfX8m29NMgjCSULq",
  "key25": "33ZvnonF6ES2VDz9HdKgdWuNyqzfFsrv4rczzDKXgurHabUBM2KE3b8Fhyjfo1ZE3KZvQENhuLzWZKy2RFqJrHW8",
  "key26": "5MzqpxDnnm4v3DsnPxcnCH3mVK362v8KDkoW7gjdFcCmA211gqucnCthzFT4wFmasqu3PyXcXxVLNCYeLCdRQa6x",
  "key27": "5X9rKVPuryUMriL2FUoKQRNefnCxg8sUM2CEBB1qN8h1aYeeTqrMAD7vbSTPruBbUPZFR2k4AGjEpM2WkgnacvS1",
  "key28": "Rp2iyteDMwN7tmAtwAVvghHcwa9YXqXXvrntEKWPQgUoWW3q6Nu36frgndJtCxkzj6bWj1EDewhRt1NJLKDkEvE",
  "key29": "5NYv2RrQ9NJpEjoM8dvD2Ky8jE56U2q1GyLBfaXjGmaDHmtTB7mnsruJCT8ixwz1m6sybnQQgNiHzjortCGSaxif",
  "key30": "2ETZzwctTiU9vAnazvn68gihkziZA364bNgjhoKY5v5yVqpNAb4K2LomiciVK6b35FMj6d4R1S7hQ5M1bqfbqxWp",
  "key31": "cnjxEJi8NSLqFXDSxPQMTxMPKVNneKm8gqdaFRHdAvQs9hXEsxfBgzGNF1zrTfczw8PHVLSQat82S4hX3ARDmDF",
  "key32": "4saM3MrkRiHXgRWFyivmkSv9udWSZ1km235rWgARb2UqhSUeRNx2QN4ta8xnCxksjvsNo5doWSwydtyBgzDUSJ4a",
  "key33": "bX2MmZhLrxtqeMQjdVPdcRUHo2r983fuSkYEC4FTTKQvo3MdSjgdSoePMvtpUr5NkGqgwL8V2sF6tFtjzk6nSrh",
  "key34": "TVTqcnBiy8UXeSaiVwF9SKyygQwMaQDYgubB7HDyivmBmqZ2YRa9g31zuQxJoarHjyqvajyjPhm9UU9bpDiYWdE",
  "key35": "2GH5afNYgEnr5hkhz9cRq2D6fhQiaGXeAePzaZcLgDGMHP64xRV8HFHQtga7f1cwEBWj5QK8urGLdDSAuDHxd3NX",
  "key36": "4jeXWex6WB46Jjgmgw6s9SBhdBb2MuoRrvHtZmH4aKKdaN64CWDJzybm2W4QmE86U4rsfLYesDhyzCqKcbw8nUbg",
  "key37": "Jn48JeZ4eRhJUz6hpbaMay38nEVEXssmZjDoE3QHiLXqZsLmVE6YYkU6144YEzGwmTDfBkkYv2PRtUpTkVRr1nG",
  "key38": "41Hfd2ry9fS6Tze7nYeA681AKWBX7Efd5Xw16zZN9YZkrWPuKTgRjVvLVvgsxEbKquyYA6SBF3SYsjcPbTBhi6RV",
  "key39": "5Vjs24Rrh4kDUw1sMTNz5Yk3zch67r5qdLzAWSiLdSMWkLtmrdaUgQDXjtn3128djtoeLnnAi9R9aAgxbYmux54D",
  "key40": "5x2wS75eJtnXvnPzTK3UHwqRJksLLYb5QDQjeca7UhknCGnbGTkRkrM2keUkxx5GbExyh2oVfsLKepXm8vQD93LD",
  "key41": "28febqVKLmAm4RhBu9ErWZ4AS9rCdqfGjow9s59F1n1B9oxomUKcpxZKELy3Vhyw1ci5hYr9NzC1SmoJyMNoptm6",
  "key42": "ircCbihtDLspFTB4qGeqCFD4f2x8LbGt1c3nnNHW81ZTmyfuhxPjFaydG7eCtEk1cE1igUFZfWiyqZyoUKqBsTs",
  "key43": "29KfgK1SfgSgscRtH2voJTqcW8DKPKytErNTfhYSm6tcssx9hRd4861jHa2UG76MH4jaEPdWtwrwgLb6W1nntXEd",
  "key44": "5MYfnwbKQU5e5Dzw2iVFuYNG4Gy8LxdPcgukhJ2kNeeMkR55FYLKEhkpJ2pMNwr5xq4tLS7G723hixWJvDuHqnDT",
  "key45": "a59NQHvupCkztTmdzGscErdhFv75SgnkKQUxXa8CWiApmt97XUxpEiVD9qqsnHyorrsQE9ZU4Asa3WuvkMgWqqF",
  "key46": "3PUc1AoZptqJ1KdpMW2JigMKPSp4fJPEA8TsyVKqGCSHts3tcJWahBCQvzrPwxDjeWfiNq2AyKmoxLYWz1r2WxUR",
  "key47": "3uia5dKQQrouCXz8SXXDrWyXBzeL1U2ZfnnhQP8N5XKvKDzHytJ4LrGwHYe6WHEvznySDXzW27KHB1q2FnZf6DRy"
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
