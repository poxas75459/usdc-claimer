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
    "2z2Y8g52WYQHbxnbRRwGVwygAcjkrYJSimTeuMf1N8kN295AyjvAGkvV2zfKLm9BHup7TTtvVxKcvnXtj5WYG9Mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NcGdB6PKDpjVXvbdPZmrkXsty1sA2wqu9DMuVvZa6PqxSDVK7GnWAcPwGtsLaEkUvmC2KqqgJzvM96j9M9n9VeL",
  "key1": "2Z5GyVniovfGSkFiov94ZRMJ5g3XW59Qo5LVM64RtZbYswEmz8LzE6aSEgkCTxJSnLDsMbRsCCwDXEDKW4USHKad",
  "key2": "BEmeD2HF1ycyjg2JdN7fBczmTdiw56JSvZXKzGtw39Z4hH382r5CW3tbj65jCVtKe3KKtKmcBhCExfmDpma9wWA",
  "key3": "4e7g8WoQ3D1YUwcqRi8SSigZuTUhJL5dtdXHAT4SBLoLsT3BWLGvFP6NeFvQYEs34q7yRqZxNVYhtT9P4uJye2UP",
  "key4": "2CeeE2EC1JHNzbAXDDn614nKJQ9grT3PaBLMp1BnwtbuVwqDgRvpN77m6nGuMt5wyQ462gpdNjMmZ4Kpjhq1Njax",
  "key5": "5mr9frWbtfEE6jwXmNBzj3KSb8iHs2ShnLF1fSn2hsL8aVi7CCsYvq5J1cqZuX5RCfueR8q7gGSJzAyk93cydXex",
  "key6": "2bFzvn6xUXGdo1YdcmuJGNpjpEmEFWS3TJwPaVDzEBsQyytgJmkebqbHeqECAsK6At4UgTM7jykEtiSLmBFB5rAo",
  "key7": "hvyFv1VLFN76ioYB6tpE3qrfqnbKRKQrU9LyMvYtKZoFrTLrFxorLiKwXosHRouV8RjjtBkvmJhm2ggMr9BTbFw",
  "key8": "5UC23so9XwXJa9bjNwQJsdTK3UjvsbAveK933EW43dE67WNU82MRPSFYWQ9S8ePc6ndCgd8DeEF7koGxQDmmSsLr",
  "key9": "1WECw2tddsftHdTCjHH3LWQdCdZt32WvWBsCuJ2rVPPYi2nD7F2jkYBu4VXbmoBQYU85mgJvDoKiLQqhjTxjGBF",
  "key10": "p7QUyUCmedgp2AUT2n2AJnSnYa1WJSS4RquWWHHSTmHA439gPzyhM5MqasQ7dToihEqq49EToHHoN39syWrFdxD",
  "key11": "63qF4P1dALhspj837Df6ZwSFGsCLPgdpndxYDMdN15q2qxxyC3mcwS98Bo66FEft9jqt46qxMksKUMFTr5ngc14D",
  "key12": "yfBPNnyekyCwU94obBwUgaBbMhcHchR3Eib2MhMEZbpnY5khVt7NcNueuJkB1ozu61dHUyhj5AcnXUi3oP3HkLx",
  "key13": "2GQZ8z6HKbK4T9kgqUuYXepuDGzWgAm34Lvz1azySm4vSm8k9945QsPYWXfn39rBvFMfdf2cZhAVZPyy1fiXL41G",
  "key14": "26eFsBkmyjTJBKSVJjYQ4kbAfDV5w5Sp2FdQSGyKEVXi6ura4p5ESw2bFdMQweBPbtUDqHuXpBHJ5U6xWy7WHegi",
  "key15": "5EF23nJgNMjAr3VMCWH4vz9sUkK4iaWDkjqeg2BSNZd4wREhGme3JWCexCFkbUbN5HftrDcKPm86Ezkr9tAgYd3j",
  "key16": "2BqoC4m61GMM3areATJT6J4sCufY54PSHxYvNRuA4utsQFYsPkq8K9XYdqTfUtKkLJHXEQ8Ghu9r533JWxQgHYpz",
  "key17": "5eEytasW6gaDLDrAPDjpHnSNWQfaVCYWtXaE5LZ96mVovz5MtFbHASwRVTvzRoNyXsAvCPAphQewZAw7WXGHUrQR",
  "key18": "zjaomA4JfrfNKoBttt3W9986LGsuykg3L7skFRKJZjH2MWhv5343nxjGMK1fA14ocy4xRkjb56oGb3C7zZwEbAt",
  "key19": "R3uXvFw3z4biQcEVjiUbnDaYk3zUhEqJUJDxNGr611RHyqB32igVe2eWFX293UtFqUox2RPH1Mv5MfW5Be7aEsW",
  "key20": "4sJT5VzGygAxEzkfKm8fbyXDpyKwixvWWYbWJWszoJH4h1bh4y2KwqxZWWMuj2AhzirF5ppgyEyAXSrgipVyXMC5",
  "key21": "2Gqe1L4bfitT29rfNbRpH52n5pPXEtHLXTZ5PnoQ3SSGFevffKS4dvKPogr3qrNUm2N4gK5KZmdAXKnM95fohQjw",
  "key22": "41Sc9tz3ox9rM5dZQfuYumPTV9eEn8NjeEtJK7D5VoPzzuCoZMhxi3EMwaBJqDrSyPhEoK6FeTcPABBNwnf5Pb88",
  "key23": "2GFTz4CdueBoWtQMN282ejkBnWT27hr8baBASAnXea13bb4kwkSJWVSeyqotqHtpLdzmWfiUqbvStcH4Q19BoAQy",
  "key24": "ym2NANQKH8D9sptSGdg1QnCWMoorykah2bQUdxLBmu8Q6tJ7ZfoNjEQ9Xt2Y3WDjMrdHEgJVzNK6csto84LarKJ",
  "key25": "W9g328kcsAMupAewqB5HDuvZcXKFbxHNoFpmDshsWKv24fjm3H6t94A66fiW4DnnUiDBsRYAfJsJaaYsretwApq",
  "key26": "3n5GqTJkm9cL66UpLKBefzXUbsj35xtuPfi4RvFPwJykbeMqmFCqzogkwhTvrQxxsog6DYKxTg5zvcwpTD1J9VEj",
  "key27": "3XWTxg8DVAa6YbqrWjw4bF7iMVkSp4h44bss6Y7e3b9LDbMHom29fmFxznzKLsLqC9cFFxFDuMmC6B4HH9MyF8Ty",
  "key28": "2hMw7tpD5G84L1QdTJT1G8Yr2ocwuFXZwHEPSur9XqxLyUtV6nqwjo8ZMbV3PpjSHS1QF12RsquB6jv5tETf3PgJ",
  "key29": "5HY4C89k8XQWN5d4simXvj65C8fGdRBp38aD7GKdAmQSH1Kh9Vf7XcoMrqaQGYdXvqpzfGvX7BAprA4boJZLxyD4",
  "key30": "5ubo938c54jc5h5zKFjwWv9CMFsi8CU3AnwZgXkZuDQ7vaMfk14Y82NhwKtxQxtUqWaQL4xiTpF9NFET7AwEBL3u",
  "key31": "hRGqhQz1Yp2nU5udhKaBKj4p3Kn1vcuesUfbtrXv7XKxzssbwQ2futX88cYWin2aBrdA7LPJLLjKxa6WbpLVcMQ",
  "key32": "4vLiaNZLoQrphzeX9yGmEKmYm1U9ETGdW57uQ8khzztn6b75RaFpo4P35kzC4b8Y5AyGj5aJowUwCuNNEB6voXU4",
  "key33": "SSavFeCLXBkbBdVEVMmUdDFMXY5CXrkAXaaq5j65RzjjamksUFUzXsYD3L38n4F8qWgaK5jTVRAqqAZtV1ofS4Y",
  "key34": "5sEapYNaj5iRD7E2UPVHVqfrVXeWkeMmh1PxYJXkubjMDdyMxeykS4ZBX1Crp7w4rptst3PM2pW2PAFAxnqSzZcJ",
  "key35": "oG6EQCcXPGp2y2zJAJpNzWW9LkoicWRKxrS43pk7qmAnDg3u4gD2p8bg7fcsFFWYSNwJ2rzVcJdNWfd87WZfKob",
  "key36": "285ouianu24aY2sogGusqTUki2oQiHmQVbsHSudshKZ437EgFFojjpPehfizveRrNSoZq8zNgAWKEUJNNLWsbLfk",
  "key37": "4j27Xsxkkfow2kopiMzdyYWmZaX7UCn8ujDQRHEXou1GUb2fq6dcFvQ3y4XXxqqMDLnzGfgcmW4uwecyDiKZAt8P",
  "key38": "3fjo57yQm5pyQPoCnudYpT8fT55juiWsF1XhHUNbp9yftMcGa5tAwAoqvmpoRiXRf5zZLpoZpAaxZ8gd4w5jcMTX",
  "key39": "4Cb4n8eS7jaPwKM5oehRtDHZAYCEzfLDNkUPxn2vxbapSarZC2Axp8DqgRi9Ry6b6xkbJsAydnSbSMWVtbK72GAa",
  "key40": "5GzfgLuvJjM2rh6d71d4JFBijo4nxkk45mEKeAspXCtU5yLay9LAnKJhTQRGMqGUZFHAeNTss5mT9G2Vttg1Pge6",
  "key41": "5pu6LEBScRc9D2bXU5RWsEqnURgy5FnZJbgLLXgtYqkAYbjcJLwcwySDdYdsKFsgwLoPjPgWjjrvTfZ2sZJgWwqP",
  "key42": "5Vjf4GYze1KXjDbpJz2QWWwfdCifnff3JQ9eCicvMuV8fYTnSAmot2fqBzJHsAP6e3dQDQ4bEohWSxKDqisJJHjk",
  "key43": "4LVoaVCmMLbzbLCjTXeH2YBhQyMATakD7JkRYXA5QmCLrgPqkGTLvfGMeLgk6jdsC496dnMq8pRRrXhyY7tfCVps",
  "key44": "3q4xV8vKuHf3X4D6wNQKa7o5MoVSBDBMMZWjZp1d5XGcpmN8fUs4GBehxQaKArTpNtk4VDG7PWaEWPj4XkxWhFeV",
  "key45": "5gYDs8ibGbs2o7hF5NSk3MBgbVd7MyhigHyj2RkaypqsTQP6xkrUoBcEb5qdyG8eDXoyx5VSoVNF5pFBJq7PwjyZ",
  "key46": "M5Hr3Q3BryZMVFXZmDXjv6ajRAUHUhwgK3J4A7VnWm7SDELird6gy66NcVHGkKx3YdCiR7V67HE964AEQfbEz8H",
  "key47": "4xDkUCvTAJfia15VpkP2Jbtjm4ppcTGv6xh6JLTL5FspESEZcyhMYRH28gtUy9RsMMzwKEgDcr5GsZ5JizTg1vqU"
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
