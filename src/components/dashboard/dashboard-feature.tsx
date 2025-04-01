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
    "4W2V2ho6vmvjdRjkx3t33MJftB6gitLm4tbRANv7Q5F8WPoabgYzbVv2Jp39aD6k7dWGMjkb1a1YVSoffFwqR5gC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27PksnBj5KyaaLJxaYjyLTwYphJrW6jR4tMz2RhPxtRCfUMaSptyRCDkRhpinUn2NLBLzMpLckPGjdQkpmy1amvp",
  "key1": "3C1itRd7uT6B2RE2NMYqWuSaPtwVewaa6su2oRFUrx7UtCxdUAEZtXHLT69MXvewfmn3tyHs2eVgVP1XC9LyauiB",
  "key2": "4b124PtsnoHG4LvFkQBDPKw26TZtVwnd4DarfpmgF5XmnU7Zi9Rj9nGSjLbHunFUFHsUmYn3LXrxxxmxa3rkMS2P",
  "key3": "m6CvBPtEa4hHxbPPrrJcWvFQbNHNP5zU3PKMi86v3RyzBAu7tyz8juDS26S4jje8HYFAFntMHmS2JagQKzUrmRb",
  "key4": "31pmpp8bdAyhmMWyTgtGZQE3C3igMTJjsjPGkeYzSxWVPgFZBFNvJscTi8gtjCb1k5N31uFGCEk8QpfZmEXNkPkN",
  "key5": "DG9r6jbJRPSm4GyN8V95FsxtDt8ZDAdaToRDFzrDfy3VNwZ4Gbtw1sAHrXSoXqTAWwHyaYqYL1t53VnvLCTQGra",
  "key6": "3H49Aw2QMPgRfyV192suYwwzmnUM6394ChiB9jJRj1th6JvHoZ6uDAXm8xqbS3XcFgg5btQpLCxb8oE5BCdKrgdL",
  "key7": "5hASo6j8pSewLhCv93KCuXiuHfAG8LJSv9dd1c3xrv2GsHus9k1HF25e4Bvfwx9ejJwB7Jcb8eBvnzVh6KQAoKS5",
  "key8": "2wgMDE7CQiaNWy5wBQbpw8oitBpryXPCvPxnppqZPkt8PLipdorEe5QBz5JLwfjyAYM34BbxEYHwPFJyUhXpfocA",
  "key9": "2D6fDeAjmiMvXB4PoWiguVxHQFVn6aUBk4NG7aNo8mU5MoiBfehwFhtsAYjD45YX9qn8yzf5ZMWfM3h4aWpFkSmn",
  "key10": "m9DuhopY6ChCiLdXv4i7dtETnFCB6jvodXDx7zmhqxSCk15LUubVwzwqjrJ2yU6mx6xwM7HyMFaW38VKJXdvbmL",
  "key11": "3MfELv2BG8PFnvArjLo8qo9SRHvCy8gftGcExEoXD4MmEsU9j9GwUsSDRib3R7zNFHDMxGUp4bMnQ5RyMuLuPSGW",
  "key12": "5sRTeaggWkb5jX946LXLbgJBjwhzAYv4boV4PoEhAchNApmj31YZbpUnhGsEPtVYpSy4KxzpbmCwnBfWAFHuWqPY",
  "key13": "2nKasajUdnq4T5yqER4og1x7j9d1Hr34LG7FW7h6PkWYNExbqVQym1Zodhqvvkehbis3hQNRjczeaWxwbMsnS9T1",
  "key14": "5NArqQRHk4tr89cwUnem9FHxSNfrhpyGsvtxeKLjFBvx9gkP72stiTsRcVPztVzKkaoXHVs85Uj2k6feytkco2WZ",
  "key15": "3g3CAt7fE1pxih5oQRTT11LSYPYyqxgpUa9XXCdyZYUxGeGfA5tsjnp6zwFkP8wq66fJEaYnyvXF4mn4jQr8jpXq",
  "key16": "vMtbNF34SSwEKM8hXwk31v1GEbYPaCU4sWGWaPeRYXAA6i8ARZSZew5B3TeePw3NcAHuHBEL51u4n8HNtzhFtnE",
  "key17": "4n49ZpD6u9qjGuNesZNWc4sKiV16Sw6TU3AwCCzzGpdKEshft98prQJYiq1x8HP28m8WrL3LxwKdMqbHzSiBpwcL",
  "key18": "PnDSjGzWCnhtjLYdtcHQFaqtNqrjQD8BdPLZm2o78nhTTvH9FzpApQD88FE574KEZWcMehV98rskzB6t2U6sk8z",
  "key19": "K4dQkb5ynHhPnUcWbZqwDSkJJdf479U5pSbovTCbJcxgH2GmCR2naLYaE3NJjHhYD1qrBtQsP8AmYNuQ71DJn7u",
  "key20": "5vWhzNHC3PzZxMSxT9yVNWrBFoNYwx3JdX3ssYFzkP51DGx73fizoFMSa5nUxyTLsfEzTJMc1d5RjuPYafoJmt54",
  "key21": "5pTEKe67HcZttuiM4N3kTw7BEeFTa836JTQE9bJDcbp7UZtQnmvH9yVG69Q1UpAfPr18M6C7GJB7ieJQVr4i5TFp",
  "key22": "TUh2UCUPeDi1iJPfsgZZmdZ2Na8sRtvuoW4mrkBJtTEcijqpsrxUuouvydm7Hdu1rrxoBrqvwJ8xCgNHYQUvYAd",
  "key23": "qN9NCxvFj7h6D6vd1CVmCqAGKzVkAkZ9XFNmZp2iGrBMMZWHxhhbEgBFke7YCZsbXQ7M26LDsEKjCSLeV48VaAR",
  "key24": "33wGEk2fXx2nxR1PXW8Xz1keNAZggcfXK7aDJysBLJoepLWTNzNmjmJ55naMG7KnVGia39dvwJVgzSvrse5phmSX",
  "key25": "L5Lt2k734pMcBSqxcXDRJ5Do6e1xMc3zRUEPb1Nw1Ws6xknccGZtp26ciLcPySGi38VG2xYf9ZaZxmCcDjEVxXR",
  "key26": "8bwwR3DUToResKHsc1WxMDZzDivGbnfzuQJbdKcqw9Mjs8WzornYzRZaR5HiFFGNUi7HMWpsjdtMLfWoofF4MUj",
  "key27": "2FRscAs1EKCLAMyCgu1crttZHq1QnPAUpEndQoh72kcKKev5H9nzcaPEPLNB5oNKqe5BHfsWtRi2TLBQGX4thfXC",
  "key28": "5bJEXqH81qSAQFDYfrxwsFaNABwzoGVvdx9CASswAF4XYZQGSzjSK7rMyRPGrgzu9oh78sDxiUMdSax4APpTDN2a",
  "key29": "2oyzUKTEat3ddyDUncotD1hH8D64UbknFG3qw5UUGiDCSTRu7ExXb6thN2bJLVwpuHpjwUUpHeFtn1McpmVxr6K2",
  "key30": "29udG7rXE7ydmYTtCYWmWXAjTD5mzv5xD7SnXUEzZtdkVYzDETnLTwQo2t5ELDe72RvEf6yXWQMFCkhqyVuAJwgb",
  "key31": "qZDDmWejt1P7FchSDfYCb1j9Yw1W3WvYoyeokZ8gMrTYz9BRb9SeNxu2JKVozpZqEYSpW8zEvvKFNyMmSiP2Jc3",
  "key32": "5kbXuWSwLhHoRzAEEe9Y2auyxsd2eF86cfZvZFMrnxW5BPDeqWhfMnR4U9y9G914UK4CGAZJ4GWAUDebQ7L3V3nj",
  "key33": "V7R149x3fGuw2Xnyb8eFTVskGEt4KMxHwHMjUhagAhizr475yig7KvMgfxDfArQDZx86wWxXrJ8xwFNk2BQKoTc",
  "key34": "2TGNpx7jsbsdjr3S1vri4kvcxrhcs9Jtmg291wL54TR9jyn1FJJggmPSp2HhPXd6gqywv9LzSAG6bX98Pyi5DU8U",
  "key35": "46W3LJ4UUSrnuUTorYkbGUphBoE5dFhF4tjaAiKP3eAYYfUJv6CEB8E3PDhmrowbmEDaD3NMxhVNpmUSGdAdp5TV",
  "key36": "61onfMUM2Am6R9rgSuEuxroPD35Gpgq1HJDpBTzewJ4NjUQvAAdqLcSyaBqC7mFscPoAb9SMiWXwA8Ynqj6ifx5H",
  "key37": "2prVhUUVPBNi4vkzpJwQ4CutWExrw4vWKmEKhg114htWDNAm1EXYyYz9MPh5nQuD6KfiNTQnczLL5nEJSqfmP1iR"
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
