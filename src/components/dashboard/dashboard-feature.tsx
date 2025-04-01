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
    "2yyw1ppKmLhJRamdtqjLdUsk9ZPnvjEJxFQtKLaA6PgF9BUrV5zmuW7thZRCXp9yfJKKeMR5pbpXx47Qmg8ed8an"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EM6Ved2UjexLmvJ7Hf9YBr9UZsnysg91CWkuf66npryF1Qtx8HpQtr2geuPSZ7weTQ8NPWuZTtJjFKs2aQLSBSE",
  "key1": "2bEegiyGrXeL5c54SUNPrjZ7QnZRPRovSpqMFWdRgELk24qYqVEVSJSnUuBszMqKenTKgkEkkRHyogiPoDwTH1hg",
  "key2": "3seJTN9AdfrFgN3zgYCUjksHQyBVCNRbwnJeafAhoeLnryRgvorFzpD6gVHxJuV5sGT555HCp9Ry8741jeh2NX4H",
  "key3": "2YgMsE6NKz2aLpENGfjBX6ioyeXLPmwkCm7H8PDtLGdHARsxvTLtUfoqPc1h5yAnkNLamAZkMZposBXufq93xbuC",
  "key4": "41zJxG3os4podPffftmnJ3s6xKFfZ1YeCZKa7VPSEVTmwe1xdt8LXZsMECa4ZMitwMKYsm8XWaK8aX6YqVGBVckN",
  "key5": "dvJxwNbnaBgZUd8FbtY9pTiWZNxyf6mk44mwnPKhUJbnfcTxHUhMYhcbgzD8SW4fhcySbcQsAyY19aqG61kiH1y",
  "key6": "5tdqZK6FfwApkp3FfQSkgWQAPuH5MiLwzzCdmt3XxPCx1WWccEfJQiEpxN8dqtEcChHAZhgv968TNauenemWPn7m",
  "key7": "3H5758BZJvoBoEwAh5hK7WZeHLtg9QV4iVXPrYFEYvbGPbpvECWEKsQMAUw2ddcYjf8BqXnQFUrMZY9JpMaBmqLt",
  "key8": "b8ZcuHcLcE8UC67YLG41VNm2gGgafLyrYUgrutFxizHtwurnzrrXheCLsnwWax3hT9M8gNRkw73Wa625eQ1AMsT",
  "key9": "5YDUp129ciwP8apV4eVk9g9oL8Cyur6L76DMy49CQ1ejxhu8YehcFgnjCmcvN4pZUKhfuU2jHtQUTWqrueJZBDq2",
  "key10": "2vq1ZksVaJaowTCrCpm2KN7pzmdhgdsrVuFGFHMuJJkrmfo1eVLBZRNNnb6KYBtZAz2AbqvJZAmgFW8fu7qH2x8s",
  "key11": "67GwNySWb7KSPCpVoa3yLf31pM5ChQM9g4QH1osampKzw8kfWxv8FMNQDA5EZsVB1p1jgN95N21B2jDhVw9p44XN",
  "key12": "3ZHFtxZ1SXY7YB9Mu1hfyLGGn2BPN9csWLAji1raVTFch6fiezJLYyD5gGgzmaKtgXK5N4vo9zhMvcgngFCDLEmM",
  "key13": "3sjqj8kXALVtqwH9qeToh19tpVBmDEEE4rmrfgQJjmYMHC2ADcKD546QiHtWvzvtC8dvtjZuSgkN6QQtsNf7iuf6",
  "key14": "4XnsXvtzjdJTvDJbf1i3cjAuxqV7oY6xJjZVWxbxER44jwo5bu1U24ZYfGoa7AZKeuJi4coSx9RHxedDzUeDCzeq",
  "key15": "2YSip2gCQiS2dnDQbizKFjB6TT3TuZkVzpBZTTVxPSpnjfdbcbpjk2k2DEoDUAb3EvNt4xSSPF38KHaKnWD6cgmd",
  "key16": "tckvSUUkonLTb1STD6b2s7P7NoTGv3PUuZ77YAamgvwoifHZvpnUyvF4iL8VJ9pyX8Ydu5SVET2NPC9osgWP4xg",
  "key17": "5YAJ47iT22qC2xo9YDyXMnD4qzuA7tHjiQ2Dv1gR1aAstBw1Y4vhtbp5PLdT74hNze26fUo23fDsTyMzwYxdTzUm",
  "key18": "2bvXXXgtchNwSkmEzdoGiVdkBxxwSTsumwWWd1xrS5FxPx2e9eqS1kRGbUs63HczQoipojgkBrvZnKEh46xxDkcN",
  "key19": "3N2y2xuT8xsC1UWXrmK7jTZ7ENbopegZXpeKZ9SaNvj2zjbf4MmPhYP4BiiijnRKrnTuVKwuLhE6cHNNRMDnCKXm",
  "key20": "4aHAcsEQWzxvJRRs5ydTjXSDa4LgzNPfwShHawJ1wd87Ya3b8AYKVgKrt8mTRWPnDhnt5cPHdd6c6qiHguL1Tv37",
  "key21": "2nz9mXB8zHgnr7viSduwXDD5REjaTpzUfBhoWpLFnC17AxtdPF92kyJhKT4NdkAY3Em3SPuJiaCFaEZFT5ihynhE",
  "key22": "83n4x8xkFX38JJS9Hzhz8kBJPfgZ6jakNycFSEXQ45ga4qYh3You2ct111yEqCerK6UH25q4QhJSpdLqcrGM1t4",
  "key23": "4RsteTpsRSA82FeQPPzDzka38ntQsiXThoWDxXwPpBVD71SPwfaY56Az5BwK2EUh3rCgSJ9qH7E5TSPsAuWNw9hi",
  "key24": "22yHKJEFdCQLtG3cFj8KogYAcHnYiUFN6Uu8UZuGxowGKAGZa3NfKXJrKPY5abtCSpjBtvDyaRjy2vh4TJcPq29Y",
  "key25": "2csBG4gYKwLYDxkgkMtSWLQdZWVe6bGfPrzoa1mNt9LcNVrVTmXqz6bDrYz1JtSmHx5XW32RkLeWqWdNcJo7iAnk",
  "key26": "2tKsqh2jLBBvyzchGSvDCY44CgzbBiZeNUHWBvB4ca9vjZ8AqvnoRwTujZK5EKx3RwhUdPENBSis43SvQpp8azaD",
  "key27": "3zQLJFnT6H4vzvWTUqKa9pbR7wCjDBzLmrdbgUriaubVos2mWiSFzA4XRewkLhtQWBTfcpkpxXkPGnMef5vb2zPt",
  "key28": "o366JEGqvxGCeebJEQShszATbGC6ZHTKkjMTQiMyYpwevYwnJLYWZpRKNLPdXdLMggzvmkumY9299NfNYYG5R5u",
  "key29": "3AMqK8k89pG6iMQW1cq3nSsZKuz3QdPpzUbbsZuVErz2sANcSwk8siZ7t4TpsvAy2BLH7vaN8A8sEdxq2Dnwbdp2",
  "key30": "MLfbA1ATGFSQ5XZChyj5YfC2VAkr6MepLrEADsEWikyVJQTuMFRZ2F53yeK1Js8WL8GWAP7B3rotdue8TWWbCV7",
  "key31": "PrZnwqwSaoD8ji7GSy1ETCAYMhyZxyjUgNBG21UAE47cpeWBMKUvXLJx26b87HTA8ohDbfxGfqudKAYJZDzNMBi",
  "key32": "5AommUdNWBTX49ayt4gM5bXaGV3bjqaBDh7Ao4DfrToSQ8RvgX7dSPtMifFAqfBkzpWmXPg4edccL5FqAHsf99zg",
  "key33": "3LkXeVDV7AsWioAregNKgnmKnHTygSYWJ1LPFpshJZMjx4VimdcDoKNziNYj5qr3o6aqVYKHcmtzWrZD7gLL26XX",
  "key34": "LS8M8s4Hn5AF8hAJfNdyxnkMh4LediwT3xYUmNzqVgvV6c44DACAGKFzXXxbcPYG1FSVizxKFCoSEkezRsm7ngq",
  "key35": "5BCpwnZM9xFwLSxDDoqqXoTLqtq4VYYHdhr952Pu7iqRXdqqXxE33PTQux4qX6FM5w7m9NHQUxbKGa86zphUWRLd",
  "key36": "4QQAw3mfngaCmKXvNUjkmAJmzSpGvxPXiEJFnpbfrJZJvxgGUWBFEZPeaAQVMhHhQN3JLhVeR2rDrNtgc9xKphTi",
  "key37": "4UcKMAGMuZDuRoi78dhhYPUAkwYioktWxNNAtfzZ1c4bUKa13fuP1Hw1RMvUwPNDPCTvMbpGLi83KTG7XmkphueS",
  "key38": "4BnrUyWset7sQrRkQDs5HA3TnhWHoAJUDu2akQGRedxqjBD28JdzKoYpiLoLUQNSKhhHu4wECdUuPzo6uSBa25WJ",
  "key39": "3TD6d5ASCuyYhYdHLDWLZ6Wp8uCDPmsNSpAh7mmSA3WpfdFKZHjucrZGTXT5PpjrqxD1pjNzBRwnBhGuKLk2YUAe",
  "key40": "4ri2x3LZpAW2ksBKQS9BysfzrynMYnw1MosPqxVA4JUngmcKxJdH2WKPPodGcrSzTUBdgHFBdx4ap8R7u3YLA55m",
  "key41": "2UqJKCfpWLHZ8hs9EJnYLC4K8KR1WEx63yxf3ydrdzvvc7dbKYUV4qw76XeFBoiKhnHnqw9nPjM8SoarRDwBu2U3",
  "key42": "3bEjFAUwEqYMS2MpcVo3LqYKW93qfAfh3NbBxDA41KUvbfzivgsSQPaZBjcmUJo7zVNkpAKwxMnYHxgfVFbFWMc9",
  "key43": "4JiAUSBNhCy6w4P1kTfjtWYU5z5JLWWx7376x4dVN9YA5aUUwzqyFqkpJYuyJCLusic4M7EaMFXmm5u34MWghxM4",
  "key44": "3k36DgHqA39ALzgHijDv9pV4grGf6ZMxYg366TiEuvd99YejYSR6NpBNd6yGVpVZSMXVdfqhDvae1SQiKxaAJsTf",
  "key45": "4mu184pxoqo7sUUDY5ZDh94sMnRqJSh4MZEbzoKLq9Y6qKijCo9yWNnKBPPnschD6Mvf68Hj5jrG1CyTQR2y2r3f"
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
