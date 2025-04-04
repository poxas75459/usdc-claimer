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
    "3qrb9NLguKUbBkzyTXfqV6ZdQL6SfDG22aCe38Fyb26vbnCsRDsD1tQoQ5suNtbRZ5obyUABxmxWsZeLZSsVzP4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "364f64k8iRyWfPErjDApENDUQbg7KsEXr25J8UmDQ6CEt8kSxZMB7HZ3ompQxCegPNaeG4UzzWyesdTJDKNsCkgC",
  "key1": "4re2fQVRgzXDiRZuRXDknKNUx7woQNrFZkzdnTirS7eTvx1GUsnKuh424VSVx2aXgjSyts2kZkkumfbYJiHNC8Xu",
  "key2": "4QwxiLvEotr8ufDpms4rnx3itJhEx4ZNS2CEgErDG5sL5sik9wSSXdrjnytxMTNJtfaQNrAvjv1DpMESH1DEbV3Y",
  "key3": "4fF9yMC4qC9K421DgXETJ1T2skh4R8vrPXWhzhPm1VE8G1uZmATrxu9LbRcVzQimtMtdCqxGdn5Cbfu6ZVbfQE6q",
  "key4": "2nJQ8sAjda7E3pcTERyCKiSoZPt7F8ziaWvSvk1osVkHLX61Aoyte7Qzf51qHfbwamCTjVCjnFZbTDzsGRJLb8h7",
  "key5": "2aoXREUmJpRe2NRwu5r6eVUZhtLk27vydjrGrLjLde9xzAbJm13PaJkPKPn59WqAseri591GQDMVb36gUhpn3fy4",
  "key6": "5FnM2DyJGQQQ7pdXHecmA52kEnQz4oBE6Zmo5Cw8b7QLUzXcvmqeHcqCCcbn3cJi2KzdyqvZMzGS9NrMow9ubqXd",
  "key7": "2mt3m4CNf7vkx1NmBGkdDPrwaTbvQb7Bsoa5aaxuz39VmkzaXL3Y5uKuTYEk6KdGXdX228yWCsLddGd8fxpUtfxf",
  "key8": "RSVDByvqPzH4LcVwbioVFbbkmd4f8Up2hupfZauExdyvcG3uEVX1ydxx3YAxp18ByqVtbwGTjpuF6e5TFUW2wAK",
  "key9": "xYm9GUH8UbhLLn7Pt6oPRUdNfTnxFC68poxRvkBgc2M7hycw1DPeLUbMDPhB9B3pnWzoNiu7T18vhW7gWhLm2QR",
  "key10": "3S2z3zrj9dRzpEru64zZUuUSmkqGNRFd2aw4Lq17oNNWveLXDhLHWQ7A3rmsHK7XTBLDc1JmuonAPVtQRnk5NXYa",
  "key11": "2mUVPmi4MPRXKkBiTMUhCgvucsx4YXKtU1RShPsiyjoUnR2m4R9KxgaDDzPNJ5VvtNssYpGkKNgGoC2gk7FBcVhU",
  "key12": "3hLTuAxpLhPdj2vTxExyTnzVjSfrNwcGm6x4VYZhwG9p7xfPKGkZUMDUK9C3j15xWvW1Kw1W4mPpY55vNSvooiVH",
  "key13": "2jwT7F7mm5EVqzSht9HEyqxySbGWj3QD2yRoa9DQYvsZiWGYpzbxSWLZDaLX5Jhp8BM2cFgWnDsFY8wQSCdAcnvA",
  "key14": "5DaQ4QTw4j9B1dhDxeeg6UnjxZaW93Jq1yWcehTtm5Q1ym4XJuGCxn85CfHfuWJaC7JhGYjMyCufcy7N5QQd9ac1",
  "key15": "61548xLDE7vwxZ38AvnXzEjbPkHg2bj5CgRUerdTi6SU5UoF5hycZzpDC631f4drA9rmcL51Ri73dNCNe5HafMpd",
  "key16": "3BfqZdgK6Dz55UXF8LT2DcmwjUP7cFy94EzaAx8LHcWMb6B9b8Tr6zyaQLkQfwoKLKwRkqUseC1Hpt2H43uWVhUc",
  "key17": "4RvugdJA2H9yzYUdhGpMqjg4r3Nf67FW6qjz45opo9beEYKDBKoyiS36Dmf9cwak52JQS2exmRwo7kjWbUK3M6qD",
  "key18": "5HBoS3NNt46eFW3kq5WEJQStVqSYJ3fPc4qikRmff6BgeRF2AgvoM6AhZ9xWp2QfqrThkRhUXwB1NQ8NZ2rJVDJ8",
  "key19": "5DDBVaLZs6Vn1QWBuNLyYxxgb4tkZKhsYpTuKg57W9pSbzuQNa98DWdjo8vAMDut7xPJXAcKcFB3oVNzqthCHE3j",
  "key20": "4wBt1obULcB1NoUiEif4Yw3osos2yNVbY2ss7vyuNzE5mggNcGNRnwjztTR3JEVDjYvgEeA27DSUDP62eQ8hRG5S",
  "key21": "53YMJPZ6iYU49KSjiErCcdT7cFTFrPefuPHUijzo7smu7NV8aNraFyJKkbbkoFi7McnJVkFi8nx1w3WUcnoYnUrU",
  "key22": "4Cjz2zcGP2hbyWKHBrdkWCKzV1yjFxzSMyDgbV3noHRxRgYRSXVjJHPLyCynp3fytQ6NMstUjBQhnSS4PxY5vbXR",
  "key23": "5uiycYf2EvN8tnzp8LGP6EdKGZmNmnRLEs4HdeeC5zbDELDdAC7zUfkSGmsvgSU7NSjjwyXH3mgXGkX63R52A9R9",
  "key24": "2UCKMUELoQ5Saqqo8BxXH3YE35xEbRCeHRVVrBFvekAPfACAN78KBVzRibTj99oN2XGNwTzwSfmofLch5yedS99T",
  "key25": "2Bsz513CECB44svNwgMpP4vCyjtY6cyQ4skBFUGnRVerDWRTxFjuo7M971GVVYJpyNnVaLtRcTJpr7B4zm5DpX1x",
  "key26": "2uYiF6v5r2b8zLzMhVN7HfqKyPxZnbqGoXvMGc28m343x1WiyH359MHZMqz7EFEamFBPWy98tq4YiJYjNyUQarUA",
  "key27": "3Tdgv7rWneaFkiPi3LxEHCi1tYKWxwjWVGLpWzvz7NNY16y5bYpQy7gYXBNRgbvCkD8csNTRJhNwfq7m3JEGdeBr",
  "key28": "2XTSQbim6wNJUiqn4SRUwFZcYVvFS2p5HpNFDa7Y9AcRQuHdVdux4kACAE4Lh4W3g34KUwE628d1nUVur2czVtwx",
  "key29": "4NBL32LsS6CpEjToofrAWqHgg1AfXBuoWJWFtywqeaCUkgRFKHDznHWdgag5igsvMJL5RdDz9CSZxd6wBEeCj28q",
  "key30": "4E4svfPfV2EETGixx95wmUykEDr8Fqi9ri7evoV62ESTSgNJE4BbjADZ75gYxU6SDK4mKkWqUca1bJbyNdooWMXa",
  "key31": "dBgCKQR7jG6kg1LsTvTKXtDPH8YhUdygcbqSgqVhHfDaLAgsNuWbUiLiMYG9tStnMjqMST2rNGfHLhTqYFHmBy9",
  "key32": "vYGSNTU7cUJbduZNC2FkzYyMVKpP1UfuhmgXCQzgE5b9pcfbJuevFALZVbFR2rcwxgurZ4HWXZML1vwadG2M6qp",
  "key33": "53DhEfMhpUf8V4PQfYSv2skoZrewXYR83FsDStSSA76DmgRybnFqBo5ivvQdWknYe3h3YuBY7J2Hc6JF5YDF44DL",
  "key34": "363fv3u8scYNJ8izYj5aziVewbToGfdhURz3YdnB357zHb7qc1CRKNrCcTNSwQUoYQDRZvP8mYWm1VS3Yp2UhVH7",
  "key35": "pGLMvDGpEtrLbL9EuV7AceoBCaForv7GiAWwWScVno9nbHEKLUJiwunC7pjpmin6doA1G5n1q4KQonGmRTrDMiJ",
  "key36": "VaSfJw1MyATiyLXLRJNaNt6o3A9Jz7gXAu978LmiJqNru8YYJvympQjbGSeJdxCmYsKSEL7fDCHhcP89zzgZnnf",
  "key37": "3dcnVGwVzYr9bZZDNF9McEe9mouMmbq2chrtijWhxzGv9kaSPMDJ3GCAKkVLqPWKwh8aK5mj6G8jLg2yZrovgyqJ",
  "key38": "4F955Qif95exB4i2YoWFARc2UF655xWBdtTuxsdeoX3KBb9EEYcctKchctsKzs3dfA2NE5owvwR4q4VMKkRKL78c",
  "key39": "5fiBcUFMQnYu1rYtNmcZMZKvd8J9MCzar7cnavwsbLxHR2EVSwPouHaTEuqWHCZUVPHwBt7c2QWddgyfAhf5pFT9",
  "key40": "2LvMnXShXEQkDFuazCbmA9xurYLirgXHpcSDeNmLtLTZzEbNsSygErZLFfxzXhEqe1xCoXo9LxHonpRXitr1EbNN",
  "key41": "YAATcHCjDTrDNtmGVgyj2eqKyyQ15c9dW2rQYL1X34PBQY4jR3seDwuqBGtBNBNpX567f5sk21AqBn5k3FCyQwD",
  "key42": "uQzSTkChmtAMF2YChCR4QETCh4rtGCZ2TLXuYrn7NjJufS2sKzDhPTbjNgxsuW2S1GR7G3CLnwAZezaamL2c5wg"
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
