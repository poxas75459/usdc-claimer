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
    "62UQ4Whki4y9YqnU1pTcWjGKjBVmpcMr4mrYJem3EoKqwBVeRr7VviBJJfr2ZB9KqbfjWtXSVQRWNY2VA7KuqW8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CfSjodDXjGTbrLWNSXS1nJarL2kBctovvSu9XiXYZoWwyoNn6VFdFP4TSqS4rgxZhmwv5i4KrJ4QkpunmEemhH7",
  "key1": "5JXt59AMvS5BYiuPcRwucr9YYx1SiyGSHghTSyjgh96MUpuvKgxoAfkfeaAYGyeFkuDZj5J9Gq7HwRYkjjiictDS",
  "key2": "2UJQbS2fRreQBctSMGffps3t6KBu16duMd6RL3QaxLMy5EYcgE6945eHtYN3iGCeh8cZip7SmAsjP1pdst7fm5FT",
  "key3": "2dBWP7XP4mVWun5ECf3mo3VAvnsmPgYRmbfxskWruRoQF9dSrhjTcAjRu3jtAxkF1qGL18SpNR3oEx6Jx9RW14KZ",
  "key4": "4KpJuoZU7XdcMrNQL4Xt3kFXW5RQuzqtUrZRqBMQ4DfVdPGspUoTychmdeG6g8xX8Q3bB2BQBwMhJLnZY31qeW77",
  "key5": "55MhboK4c6k5cxwoBLoaUuRsQrpiHjrDU2awm12jSCcMdx8DVQpajFMuKT1qXQdDU64Y1UW4LQoCRCYszheoVpST",
  "key6": "4eMVep3eGZ2hcDJ4rGxFTWojEYFm2vsuWiyuGiGWBud9FBPNb6ZNCvoq5aNuaZkuBN3sH5KnXkkF7JmrUtaGo47Z",
  "key7": "2bwmK21sJtUuiYpx9zx9ULNgKq1pKeAsVZEqLHtpV5A8GtsXqFj7Aygsf4U54MhYFvm1vzhF3WgEfmY8UEMunYbu",
  "key8": "2h1jERNEmYNeScwev18wiXBSevUb5E3UgozKQp726vk2vHsVrUqbsEU2SgzPSqScLnuZR3jM7y6ingbcy4ayNqv3",
  "key9": "YSyVwumgM4GSvdv3i2ZfTjN8fJWzPrS8UXrtDtxiMJnKNkDgVAmHAQjB75Xy1GyovgdnPVb4LH53NsTnJxKYcpT",
  "key10": "tWtL2dbvH9S4YqL25Wb9bn98DfEKXJadybxUDHo7hvpkTk7EyrBPYbXjkouuKqxjiXDZbhWmvxoi6AUU2SCM8cA",
  "key11": "3CVzAtj3E8BnQNYYBpMHMaEuu5ktCGzNDRV4j72kyxFKs21UjsvGrJxXhCZSJR68yi8kMqYKLFrR78WMk8dFsrRp",
  "key12": "2mLReydu35tjkvjMevXgLGVGadKRQEgzgsWhrhJoWefkdehcEbQWHdjzM5D8Q4jXmzv4SNK9WtshoPY2UmdpWS2Q",
  "key13": "4ckiTjf1NNzq8QDG5ee6k1UQ24GtU9QB3x4JKLUzhLyr92ofeHKwuGSa33UmNPb2s7ULaGX2V1a6naoKdae4XUK7",
  "key14": "4fDqkS7x5MFqa8PnXNUHA7yETB27wHHjFMAazmoYTtSgKe9A48NUmSE7qiFA2qLMF67tHqxMVPGG2cafDffgsF8v",
  "key15": "2yVzCpR2zEytdpMDybLyZmq1s2x9rrXVmyV2LnHbsQSxVM3PUiS1adMpUUVXqy7GzYQZGQMYV7iXEXyH4WEZ42J8",
  "key16": "2c5GzmByNfxbiJHvnwsxyWDBw2syx3cZFUFzwhts8xKnmt6bFvXEmF9v7L1oig1oCeYxhTz2L4HUWkkqXXUcAuZy",
  "key17": "wEkE13QvL5YcoezKcHqt5fHopo554xpsqBc6Q2V4248G1XJTiwdH5aDyNfiupCumXmeNuyjbgiqTynUEK69kqAX",
  "key18": "3bvevvHtR1PaGuLcvPzQsq5cmSbg3R96TYw5USYNWDZpHpTctfVvQAkQDWvkJx4RviYQbGomD2c7aazuiBVap8sS",
  "key19": "3tXXsSDgeZJDKz4rvGDq1zPiYV35ukKbTsKpsCuzjwT5zrhQnq3F4JJ541vp3v2sMxNyhxn3T8n6G1k9jxvWciHn",
  "key20": "3kP8uLMghtwzHRePx142iva6tBXw2s4Pgfd36srvwX2sEgrWgp1RseQxaAnmbUTpqwR4YsQxYESx9sYj3KzQFPrS",
  "key21": "MYwehfrQFxnCWRARY2Wp11fbFAkvk9zSgzM9YMg4ZZXogTx6xqXAP2UDogw41diwE6cFKEGwdrVeUKryUMMfa8T",
  "key22": "QLnHPzcz39YPKEePfcrAsmay7AGwzmJJ7rmBg1zFYV58eQbLN84RKUNv7GFQT4XkPt38PKggnQBNEgTTm7VHXyW",
  "key23": "4GRwBFXLsQFv7LiaDrQJ1ga5x5ovBQJsiYspDLB9jkQ2kgCVsSPUcNagqQqcPRmLqZsaN93t8iY67J1b1HsKJdk3",
  "key24": "ET2ShHjqYqntUueeGBcpgfXC8dStwRmPqWP2rJn19h6426kjtRYdShZHWK49he9wEpdfkigcXAA9BW8jZT3kg6g",
  "key25": "36rgjD53UEQMzywVTqEaxWkZLzmMspsLwdVHVximztifRab8wJYBxf9uNFPBaSSKYkjTqeynrXLwJ8j5i9gxs56f",
  "key26": "7oGpus3RpEyY4TmmZF6oqKeNotM7Lv4pgVcRrKAjVx8sXbhumLj3u2EEo2JVD7QkS7jm5NF6LhFgjFbRHbrAF5b",
  "key27": "3cvHr61zxvxpnwK9y4CUMyZKHXcRsgeY7erXBnp56zauKMBF3ffeKQ7Zxs9TMPx7JjZB5hqP3p11QSHciyHfT6qN",
  "key28": "3MDkuzztjAr4a6YvVyreATkx8Cy4P8Hwga2ExAC6MXi9B1nxiyh7NS6y8pze4bwVCTKmsKySML7FpFYtM4eBYSwc",
  "key29": "86uDZaDM4zpXNUtJ1cCTrGP8SMPcTwdENyCeEpwBGa4QvjiCGmLvvhTtpM3zuTJPYjVKaz4EhewuMsSVgggQfE8",
  "key30": "2kWyVpCx4bZh8uw2BZAGGZ5WPBbtQNRRe3hhD1x4WpEpXmtPBDYxvd1PD6aKx42hRP7KFdFBrX3CBo53g4qYTVRd",
  "key31": "3eH8gx1X2VxTibcP13Jazfstw8pFUvmZb1JscZJboRwxhYAJyXDT1u9zjSqni7ro1tuHfNHEzfW9VXQWE8BTV3oR",
  "key32": "2c2Sa5dxzEMJGohAxcjea8LNh9tQ8sJW6Xi1SCZwMx3pR9uBpaEk2GaYasi84dtvsDU1uEgAW45L7ZtCmCoTDokT",
  "key33": "ssrrKnBpZxEe7Xbnvyhn9ken5KgRZ4F9DiJRjRRjszngUYkJXFiQJQcLegkPzoUX5Eo6s142ErVECKwBwPJ67sG",
  "key34": "2JfTz43KM3RiqiG5RJNJ8FH7xXSfk5fzsdMXtSUXLyhkGmNb6NVtn2kdbYc2vauMRNZmEmMGhv3C7RjgWfJzCUZp",
  "key35": "39puz2ZmUbGcG74GcFQQdZjZBrSax5CMhgUnKPhEBdZu2ZQj44M39tErdkYUvgxBcYhbQffs8bLBeMkvufCUngGw",
  "key36": "YaiqkcamPufEpZ6jrvp4s984BWXWZR1kfhcnAGURPxKev9ZxBuHALUWUVxsMvonmYQ8GNCoVvMoTwamqRxdNCzr",
  "key37": "BCYfq5u3aNmZATgBkUEvLerh1nneyExtn5iKHCy469nyy22HfwMzyjvL92QSVF8pgThq67tsBJf6SautFNrRMtM",
  "key38": "4bKGirfEFytBEYxbV4axjJwCqxdBxkV86CkdN9oLbz69So5dX4RvbMaF5t46Au6y9irQVVQKFAcemqPyqtKMTnd6",
  "key39": "2zLgoP9xNMztp41X2PTU9fUcqmccB6Adv4qGQ8FvPbky752WFBoEJRrWHdgjYvQToBJVxkDCndyrJJD9xZ1rFwv9",
  "key40": "2C1gbsQwemU9cuLFwcYmGTj7vRMq5kqRadYfyHqYKDNNSgbbsDVBvdUQssV71YbxGYZXVUvZY3p9ZAcwpvGXzCDc"
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
