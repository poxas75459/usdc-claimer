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
    "2A1N7uPdB6wmuDj8wGqSAMaMpH5Bwo1jgojXQJj2iDR66m21qsc3nWZo3seFrcM47tgwUAW3ZAsNetLuBoLW5veB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2maZAd1LRQaepH8Z35HkjhWzG7SH8cA92cwQEnkULP4yHgyNbdBnzNFvpm7PWXexWAS7vtPjdHakwdTjX8uunJBr",
  "key1": "2f3mAH1hsrZz77Wo7YrBe1M9sXFo5XzAbESSnUf2L4L8jrpuZDbLDdLGDXSuShpcPR5YtLTiDkgAA3EY7Cq2SHmX",
  "key2": "CTJgA51ztCKWFM1JX4RXQTtQhx6u6qrSeWkwT4QmqjX6UxL5Bcf5gRCot18vHTke34V9jd7bb9DUzbiQ1NiRewx",
  "key3": "2tDwHUaWY1r7mVB2jnGqQmQVhkaNuDC74sc8uhadaSptgPWg1YnkZjHcs5Kd9pAW7XACDCywTcMrinKKvjKZjZiC",
  "key4": "2mJ7iGoXHBgps7a9BpmqHTFcpCKBVNVoULtdZzujZzqCuGyG3RjPu7TDmcj959PWNrWpbdqgywtNZFBTkx9tJoDe",
  "key5": "c2ib76WCu5sQAAsGMsZfuj8Hya72CG1stP9EvD5i3cQitxhXUuzgL6nKAYjmaJsFDPQX9bSPJwt38b6nweYrdtb",
  "key6": "2PYqiEA5zUZuvkPaB7aADXV4Bw5aPVrWZnT5Rh3WGx69q8CvGuZk7qyXhBVb4XRkoxX1Ks1BoXWEaLGjoWqpsePg",
  "key7": "5wXjyM7cxFM2CHHRofMkujx1u8gnphUkkquAssSMSCzobxMM3CrFUSf9iwhqqYBBLcW6bVRkduLmkoDR9zpXmHbg",
  "key8": "4vX8HpvFijhXnge54kJ1xsRZiLG7sAodH8usiFUqu9fvJUqDHGVth4tWgXtCaMpU6n6WbgwFQ2Us1cacaPFuUGqU",
  "key9": "5b8EEhJJ8NHNFgLnc1Tj46Fk4P4erUCqrHKQCu9TYhhzho7co1277F4azT5Qv4k8jmUaqEYBvbEnVahjn5ySt9GN",
  "key10": "2LQgDXGbXbv2bGraNoU1NVG9HteVQ1i7athNQoniNZkYRgrqoVToSUK6MW4D92dt92yBYURgfbjMXBBm4n1zmpra",
  "key11": "5zh1kNEVu9CBuwb9jbHQQicUf77fZ8hVVctdUsDAmM4iC8KwQGu3JxnHUCBfpCAFupz7KFrStPpUSqK7EUcfmCZf",
  "key12": "36xjWnvMn6MvA9oRFovpVWjiTG6SFdN1oPi8EPQfMAxEjkJwEPgMPHVQ2pFQbZVCha7hs7ne1bp1emKoMPDGrDuh",
  "key13": "2UQ1GuyXV8DYg5J3vbTfRMXQ1vwVRCJcKX2SqYYjtiN8zm3xE7U1rAS1p4wtNEE1Tww8EfE5ti8sqNcxGWjQHeF3",
  "key14": "RvRz8vRpkzxWCyVcCnSUUBUGDGgiw5yUQdTH4xN8S7TJMMYvZkq7E9LuJW4PnrpwyWUY2CGnVJMndApYQHqPdqp",
  "key15": "PdVYe8USFsF3ttmxi6mm9NUoDzvz5wXQbsJxoTkTyCPJfgHQsV1bm8vCG6fukcguafiTFcDz7437RvuDZV7RHf7",
  "key16": "4mYqVLNmMrvWZoVpXxkPKEN3YHdqZxkPQdVkpxNVhV1Q1VHBRvJ1S3z9QGWx1n4kgC9mdWnTqPoTXdTocqHCBsup",
  "key17": "5dshkQRKXyXMpMxJatSfFh4SbeYwyRKdcRS9kw7kopJkCyzLQ8BCGtWkqy6j7asCN3xFbxQxvWYhG3N7qLRDueVa",
  "key18": "58MFkkdy1LNqxT9qRs7k2Ysxsho5qBaGMg4bdXHLd9jeHdGTciHk5YB8D2wgkAQvv9jSrCXUuv3VsjxW15mZCAda",
  "key19": "ErrKTziTkuixHB66PxeDdgr3ARKkowa5XMwfgcmoMy6e5pNA4FssVTzdNJ88u2whHbfBWtD3WM98KZya941yaom",
  "key20": "2umxivJayHehDoNdmB7TdFJGBBQErw81JDF35kvivBu2Bf27Z6RiCNJHbrW4jcX1C5RY53uDj4sdy7M4brH3SDZm",
  "key21": "3FGuYRg8Mmyo4Wd8jMKPuTDoEVc7TKrtK5WP691WvBr3LAPVpxhjohQQvXwZbTJWwfeDevWk2AwWMNZJFmGBKsWa",
  "key22": "35bAgL4iJwy4h4VBWn6rf8LXiP9sTeBbCX5MioEe1v2bDWRfYstPB7R3UmEJNxKXm9ptH1Sy1Uu5kvwMjtEM68UP",
  "key23": "2Xu4FSKG8j8rC7miPb8pEi7yqEWit1sL2SiZWUvHQiEanGZUBekuQT8VXxucdcWrUJQpPzqF9UNuhNbmwHUqBSBx",
  "key24": "2moDfabGVFbN9KXSAFkDdNEYm4bCRJcQyo62gXcU76WmKZ4csHFAPwq2KJQe39cz5ttc6zEMEdDHXm2RBzgnBLfk",
  "key25": "2yFK9rvRJiwBG5tSzwKhgrfyKVzjDF3y4GmFbkK5WEum42CNwg7dX7fVJF4ZnJGAJzy3PFWJ5MoB9Xf76DdvNmA8",
  "key26": "2rqeVaFywWu6U5Mhvh62GYPpUfuaoybWG1J4eKoKFiWUkeTnUVkhoaRcS4AwqvY5DYNDSnLS4pYJ6HXczqq69Lix",
  "key27": "4j5grVywvAEb5xaEuou5Est9uTFWdJzrxN8wdoAyJQMhd5rUEZs84dbJs3QyJAbnwpGibaDiNnoi7wYj1RAkagaf",
  "key28": "a7AbfYZRMezwfE1a1fdXg4VAKgQJXFp1U6zTDVscGxBg2N3eh7xpQqmysF7irP152HZMgAgFuLYF1E45WNdmfch",
  "key29": "4Uvo429TBDZ5jekNpQWcUHk34f9DD2ZRhJ2mjc3ug6XcQRtNjpapVpiNo21PDozbSWW2YG6V283PskmaqU1GbE1e",
  "key30": "kk7i93BpwmRm4w2i2m4hrBztmpX2zPEB7TvywiJT1cGSPFsc5puMg9QDGyiqcDEeeTRQd5MadFYMNfogwU3rsmz",
  "key31": "2N4rGo1pKJuPBjY6RyYqhakPKK8NHSsPF9U9dSbWMziidDEvL3SYSJg9NhqjjphpLXBRQpjYqRoMD3eyhWe5SmMC",
  "key32": "bhwePTJj6LpZkncTUyvQ8fDteJ8qQKY8RqF1PuBM5FWZ8d57NyzT96p5HAjJQLEEiF94NVX6UqP63Po5RTEhegM",
  "key33": "JYGzRAKtfNMq1ur9E3kwjJa4uXSKySHVhyWfjSqEB7gd5UrTAQLbd4bzzbS28zYYzHK9WiJPBFNx35o8HA1vDBD",
  "key34": "3wVfzM2XaAWzzMAVDdb6CJPf8ZzZrMJUdnJEawJ21LTCax2mzX4oBJQPZpRPK8GiZ3r8Yc2T5U1U1adTjUctQC14",
  "key35": "5PuyYRNfnrRwkfhHcpR7Eu11dA4984Siod9CcEyKVkYZTcxFDP8gmLhic1XtSA4QKf4Ca1h2cMAY3RsWZKqDsbrE",
  "key36": "5y5PhiSeXvP559DQ7BxzDRNxq8tgauHDnPLr8AZcmwnvMQD74j4izkKn91dHA1RawXseThHietFd2g7sTNrxjr9c",
  "key37": "2q5VAEDomknvpdvWrxVxJte3SZiirycduTfQXrxgLBLszMYN5bGMzxcEnURH5nCaCGgjGyrjuZe1jBbGn5x2mN3Y"
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
