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
    "5MHfd2G8KWSmCYsUrSGFfB1j8kaQFaLmedS22epQBdRFSjFyJ8VotdCNTixSwGTb1kxHwWm8BMRSdXf8jBrhGuK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3voiz4Y6Cbg9ph6U5aoRh28hKJcVD3QPMAn1693C45kGk95zVhcruP3qmJ2v6dkcaqFvTky8dj298cq7gbgc9rih",
  "key1": "4cqkVuht83nVrmopRNxYeL2vAVUMx2ptj6owC6n9d6SFbfiQX3nbTJqcvFvwbjR1AbKYVbhd67emeFWdDeGMNYKL",
  "key2": "4APFdB8t1WjbPjGoMGN6sK2FQfhH2eDrwwBxmopKq4DRfYb7fYV6isrJMq5kZzQK1ENgB4By4H7BefcMJCfq1y5f",
  "key3": "5neyfPJNmJ753Gtaye16UqX7gfgQb81gdVZgZkjTX12cxoL4338abpwGGT7xpvYL628vXdxXFfTdBH5ULewVijdx",
  "key4": "3JGzNa6mhc6ca7yZNyTqw9MKYsnyAbbb323gcRZpfTtYvEe8dUGSpKRLqoEBz4hhmUMehbJGna2p69xxdwktL1p6",
  "key5": "2ojm9vhbPEoxfFvLgDikFhQAzzT8VGzkuaPugeGs6TL7GCJ2zHkMmdSQw8Lvytb5Z2zWXoeKqgmvGretSF1coSX4",
  "key6": "4uNxJTqRgJDBE7NsZhNAyGwJQimTnXYKjKBKv2JNwnWFv1Mo2fNVKdRLSu2j9nmNWfXrHZtDJkPB7FTmL8vmvDJY",
  "key7": "5oQWdJVc2z2ufZzEaQT7TtxwcV2nXXUtFBZCzjL1k26Pkgk1VM4XqAfXamdbLpESuw26EnMZxT1SyaN7k8Ppqfdu",
  "key8": "2G8YjNC7yKRXG9UMA9DLLZEfHcFN6eeYdLeNAcP97F8GL6gC3c1gUhngPCnebxKdARJJ5zVReMH84D7jMeRKCG2v",
  "key9": "3axkWLmxoFMc3ijwAyzyeTxkmYe4ZVWGSoRRu4FX3aBfudMmS5LHSRLSHsBbM6FsRZUPrzs4eKZFRbxEidHpzAoN",
  "key10": "4VJnQbrtcckLpUVMYnmY6n8k3TNcgQS2smdoyygeFRKWUYN5ySRPohsqZqVn76Sujw2PBfp3kExVTxBDvyxponWe",
  "key11": "4oz256zETV7j45uYW6n5H7EH8V4XdWoEjEGeSYBu1fDZya9ovD5kZM5i9XFvU4maTGeyJrUbfm6RTqMtiqBorLip",
  "key12": "mkr6WH9uJ4nNbvMGg74AuNuCMWFDdpUBmBv4AnFZQq6x4QV32iRr4hmDr4HMiXco3gf6KJmD8rRFDuc9PTmJG2C",
  "key13": "7vwVDGM6s53eZXvrPgQZsD2Bvd3UnX9aw438CfDMZbC7PSux4HuqHTgkXEfHye2krHvPLnhVskchuSbNCiPuU5B",
  "key14": "2dG9VDoYLxgBhajBXv2j9xyD7Ybv2p2PCD5iJggpQdtyuuZM8kfepSvMLTvJiKb2wwVMocxNwe8bnAx2451S5k1Y",
  "key15": "4hjkXJVdEgCTo6wvUuEghDHT9viNXAGStswrDEJAv2AH91EAGoZjerixS2cP9kYXqBYdiUiGCHuYShXJaxox367p",
  "key16": "3Vmf5Yd2zVbjYYR2NvQcn2PFw4vZWCVL8PxXB2MEZYo7tbaKJ1imzjSwzc7KGjSyz55amKL7edNhvEsSoJ8yB99t",
  "key17": "3Nymk4BStvFrPrKFehF6Hvu5ZY7mkmi3k4RQR9J3KfcEjb8HadorDPhijVKuUGznRfpDBfqkRPSB1Yq6M6iHXWwx",
  "key18": "49BHiQ6HzNKECwVCcVaj5hp6BVP6aPM3qwk1qY4DLUR5b4zzCrsNfCEuVjFrwvvJYDFSxatsgp4kGo1j3wXeSi6R",
  "key19": "3yHENfu6M9654isr3oa252QJX6fAfUjgu5CQVt1777iCHkgL9Wm78u25mmmYvQVAAGniuX49eLPVbfjYr1feeodg",
  "key20": "28jALaf62UCeFVmMShcKirz1xCmeXxpGLKqyj7AaoaB211cDQJ223n7cJ6kBq9kcuda7zfJm8qG2L8zeVx8CzJ4Y",
  "key21": "2Em5Lb2b3TBQN2j5Rn7CV9mpiYTk28A45fwKe8Xhhnjcu8h6NssELSf6C7cnsQa6goZyK5Zmd5zT65pFSYhXvSQ8",
  "key22": "XVFQwnh7AyZdLgVxzcRxovCAuJJ1cNpu99mMLGTjubgS88oB4cPdb2wahqXvvYRUfXFaLeJfPVvsMJgskFAi3vk",
  "key23": "3XZMjXMiG6kR4rcqoE2ySGfxqfCNEnNam6UyFnocgb1YatjsbekLMc5aPC4NjgapufDnY2kJ2ogczHhAfGY48TfR",
  "key24": "4M6GQn2Y2nEMmQnBmX2Wa6zY9akBsXXQu36wKJkUSPb831LzWr48rkkneyYra3v9fs4y8GR5DEgUTsWs8VmD74NV",
  "key25": "wHcyxYMtvfKSq4JAxv2zLY3v1HtSGe7PhkSsb9wfC4AGssY1jsQRJHjcGCbeBTYoM398t2QCbKBCJb472okYziW",
  "key26": "WbyuWPc2KdQgHDcbMfK3xxsyqhGw6kNosCd6GJ7q11eWsXZcc2Hd9BjoWA19WMSdKr5HerREC23JLZZXuUToVig",
  "key27": "36UqbEKEa38AmizRnoSz7uJvgRUimPipY3DTXMQaNe3tRvQC2wQXF1kqbHZgtsGH5RxUJN7eDDU1pHiRpLJryuyz",
  "key28": "3guHbHP7QGCcVRGjsXngGV1JURZi96fZVaQiQi8ojtQpTZZmoPvwduZ8fFqWAVU1ZFJWvrcLSXDuNo1ChhQzJyAo",
  "key29": "QgVs3QnGo8Dkd3R3A7trQNmF2DPcFJVwpAEz3kMqLtcbSDYpThoZLHwQ7PMBQmwUkDDBr2gMqiBUZ26hyAkTWVj",
  "key30": "5vYdsLsTx9rFsuGctZPkBEZ8c1qomHUr5EdmaMfB9Ms9gUJuK8oRudAd1G9n22Gy4qL9NZ88biqoYRCzWUMLW1Uf",
  "key31": "3Tmys3AkSckFQhrntrGnBv3gLGcZvL3VbBnwnQ9JH2eVoWNbrCxTJR6Vh73cnX3xoKdysg26dJiYXPtdJVnp8KJU",
  "key32": "5QnmxDYWhdr5HzyL74yLoajB6y3JFhGPPtgKfEGme9WvtrFv9ZvhXMtX3j7KkzHdTvs4u38z7jrqeeQnMCr3X4oi",
  "key33": "4rjDbY95xSW3TRfCuM5hCiuzR7WmQTr33AGaQZE2aJPDvDWvnDwGnHXfQeJYK8P9jSFgJukNRc24Rgbw8s3GosbG",
  "key34": "5h8P8j4FyfiwQxBN5L2PecxeVPDeCX5YQA1Fzb7ZdsyDeezWWsTNsqzh7FEjmjDVH58VReVtgSk8XosiJCMam1CB",
  "key35": "23b9q3CVYJpCEc5HJnNDYJJxsZt7oHMJS7kMQZimPtn1HMUAPpeatRWYYcjeSMjRDvFDLZyRxHADMrnUDHk6rPza",
  "key36": "4rUe7fkCwQRCv1axLtyw9dQYJvuuWszjXabdqr4hGRR4ghpJSCiVzRfiBnMybQtEawtzhdoBQnTLTLweLXiECBUX",
  "key37": "p71Vq1k2G5ojs1veBP7b28iPDykrT6RKVTgeGTRbtovkNrV86AQKFtBZtVatED5CV7QwKQjuV4zgQfNHTp3JRW1",
  "key38": "2afpk48C78VQQS3SCmVVjDpTNE8LHPMm96jqN69zhQyhF3GRKgr3iJWKvSjvsSsdrvD6SYZXP3ER37vmCVD65xpo",
  "key39": "4QykGLRDNH8ayP8x1exPYKNRem1wZnwaPgu34rzNuuZVUqLYtcm3ybEoBPRtr6xf6jRV42CghH5au8BWs5hDN5Zi",
  "key40": "Gf95PmSnUga8TZ798wg1r7LqTiPtp8sKFK8YkgWq54h9zmaRYvdDdeTTSxsRH8Egh3ssM42neucdz5jEEFdSiDr",
  "key41": "2uDBvgoAHtGU1mhqHJVDDuGU1tyXhGyLRUsLho5J5rqTzpdcQ7XiCm1YHbbXZemdaE3EC5V618Uqb8RMY45rYRh6",
  "key42": "2siu7WLZL96EMvEjB3Q9YNmbeRk8yevNvF6CAmqnYd6AVYWjZ1fV1XK3wqevEHZuWHU4V54qjjL8PaNt9vjym6Mk",
  "key43": "2uCCHkR9d1jNbCAgJRnw2rG1UiRDmwEZoAc3GktK36STVf7gaxJeoZsrZDp4h3NhEGN8MzoQ9g6QHDwWRM5wnsE4",
  "key44": "Sqnept7rKjAT4RFK9Uy2S3Cdb7u1t8enYtT5TvytJfMHioSBwr8QzMByafL2akQejcjLXN1SjvHpULaqqaSXmyX",
  "key45": "bgos1ub6rG9kU9WQ1jcB5oUiMYuqnM8wKdyqs6UspdoEpKYM9pg7nuPPy2ZB8nU4e5qf5HEuSFmPp2N7XXJZZaV",
  "key46": "w8teDL8mpQavzg5wjSDfSqmxc9xEpGTiUAnSAMyWqc3SgmE6ZgCaVyfqUAt2obByHUFtzk7ieGTTuDPKn48UW26",
  "key47": "5tkvWiVK2EgarvKTpFT5Swxsb2VPY6xG8vwt68GFNziuhtFVNdj5c6NDiv1NwucrnuriUm45x7UqdEBnStCihubN",
  "key48": "67Pvap4jbu8xeYZCjcj8zrRrHF1LWnZ5FWUWp98nuPvX1X5PWENCS6yzdsqdrEbHuQFCKJrwpCEa4M67JGZyRtze",
  "key49": "EwnxaMdqpYUPqYH3aWHrmLEmgGb4dxFU5b8Qc24KVcNbRAbT3u7DyWebfFWMXHnnLVNMBZc146deQ5pTQGKda94"
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
