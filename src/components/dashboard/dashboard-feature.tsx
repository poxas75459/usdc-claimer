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
    "235FZo5tr2JTijF54jXognf3Jz8KiYZK7ahJPEoyigpcPuFZ4uVME4ZXk1PYvkTaqwGdSpo7TLFL4eNSnNRndLGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xLtfzni7uSRKYFg3RLjZaxtj6NBxzTzv21bL5EUWDQ1RmmCAgiqmTTJZbyJougD67SPGotViAeu7R8QTMeLQREH",
  "key1": "32zQFu3LQzV9PDoC3K3MWnQNgYpUTcBRWzCLBYe6SaW8pTSpQJT14NaTUMZa52CJFpdspLzooyRgs1tiCyuoyxuy",
  "key2": "3dtfkpC7Ps4oDkSxNw9NxqjvtV97SEKFnhQXt1cp5y8NEaHbZG2SoAw3H9DKYfgZo7e2HfufKwsLzAwmC3zK3JQ5",
  "key3": "5hCVLYxVgsD2cht18ryvi2xVVXRJPxT9Wcvc8wBXDrJjcop3zeXAE3V21PvDntQrF8c9ysjQL9phHLrTQj78a8w7",
  "key4": "513xuHFabmQ1cPSUWmg6SZG1KwJh8AKCHBDPypieaJetqhg6XGzxSab3Sa2JMQYXaGZZCksJwE7DPJRq1cWqhoYv",
  "key5": "4XyWrFQR2HXXWzjWeQBtf3tk5XVHnMs3aVHGNVhJEZUQ3pqSBPtLfB5RmQmJnGR4WvTUbrXT7k6xfZijNRk947X3",
  "key6": "5rLgo1yvikrZ3hpBwVZuEGFKqLkg35W8DAxrJCv87ZGmbDkeP3dELtueiTcgHCZU4Hd4M1EH6MgSY893eCCGDJ5c",
  "key7": "3GA9MxH1TEjmieQaTUcMm22oidK661a8j5SNa4P5Zrnk1q1SMN3XafRikjN4agaVdz5xHhS7zsSDzDAKrKFJcohE",
  "key8": "5HbwvvFxcW5rxXWPccPRoQmeD9KHZc4P6KxSBdPFRm42ZTc9vK4nshnkPkp9YfEUukrMm7DvCdDKSZTZe2y7d5n7",
  "key9": "bv4mECuQK2Xsbkzm8546L78Vc2rWLH4e2kpzrHS5qJKqEn5L9WCLbhstgEECzpdnY2VAgvARbdwQPrZB9bC9XAr",
  "key10": "5BjYy8YHs1pGr55TtMCpR3PAZCJ6wnqCFojR4FxvJxzswWBxwb5awCcbisPjfjwYSNHRaUPW9reKu9mz8tTzgJv1",
  "key11": "4tdLth2eU1hxSRBMSdeaW6GGDk17HDxZ7YU4a96b7VPCNLTwqp66jSUrczgpBYH8azc6KP5X5wvNwvM59AFyGXLB",
  "key12": "2wr8SSahmtdLHS5SwWBbzWm59tTr3eLAMsEhef9ms3SpxGPtF3fVFfww658fVgQfQDaHSMGwnkiCyiBnSB6vMVZH",
  "key13": "5JqML3MQ68LWe8GZ5jwXZufQ7Ur1EzkswWUCiYfdLmm9AyY1anKxMP7diUqAGG5i8G96N7oECoDqv5T6tL5Yxohz",
  "key14": "4cEFXH626io5ERaxWcYpPgyYsVMKgxrewJAT166dTxRVb2c7ApmyRfz6fikaiDy9w1FVooMwmrSjsEHK2KrjazFC",
  "key15": "Y9rScDJD66biEchA63kb7e9X6sM9UzkPG9hpQrc7CsW96UqNmCB953MHbPgTgRaHDPJiCKdrTP5tvjACMVBGjXE",
  "key16": "prP99DwWTWZhu2w1fA7FpopYN4m33n3sMtx9dE9zaMAfKgYMqxt9KFKFud6kUDHw53pPjJnLiqibPdpc4b3ehED",
  "key17": "4oZ7sLBh9QpN1Y9CXjC1GzFXJfZfmGkzbNba72Ds2eYgzS7UHXsw8zYA17SWXHwgtDbZqnVJJK8BrHnxrPyVMpd8",
  "key18": "56KMoKEscn63HUfbTA1udTu4EKthJzHPVBqRvjRG6Jmm9UA9yfC18CWd1duJy9hAuHe3utC7rSzpx1FcjeSpeRn3",
  "key19": "5y5iB26Gtyn1iib5jGeGjodnTLeeGoDX3b9oGLQzRd7onbEKbYiFKmGn1CZWqRj44UDbVnzx58XdDAiBRsVyjDvq",
  "key20": "3Yb53kBquoqD1mCF1AKLCoPnPJbjCRQ3xMLQyNEvwT6iaTCZW9Ay4c3ATne2QQCWy5uvrp789djXJHXiE4oGPbvG",
  "key21": "xDJ9C1fC7BGdd1t4ua4Jx4TJ1hsyf5L3ikEnZvsxm1jpNjBUWVj2hfBSQEmaFj9RX9XhAY6v65jCxGXcWCjJZt4",
  "key22": "E4BhYs7HUd4WeFWZcrfiSyte4qvjjYWBtxRJd9cwJnY3N4UYvpr7wAY9cS3Sorp8XkCEcxbgdae1XfDbsoZx2PA",
  "key23": "KEDX82YA1C86Y7j3zQtpmoKbJrwKkQShtDGMbrgmwnRaaFmVLaKYifkFB4bVjZJWMfvK1eRttNocDybB686X9Pc",
  "key24": "5JePoUYmPbGgAQ5Xc7EuPotEE9byGWYh5u5BGg5Np1K49j5kHdm9Uzyzc4CvAgp8syYtPaBcDJvx8qqn6BgB4SG5",
  "key25": "6hmxabJeNyc1xzUQr4SqUX5qx9jQESpguijM4jGw2FF7KA3LJFKZaCVTBYFqgQPFRS32SWezDbQhPU32X7qvumU",
  "key26": "4jJzqUWbWqfPKz97FJq6HjMuh5bGZrGFZd6qDGd9X22Qy9DUbVoScRif7rLdedN7zBz6SZoTkhi4MmvNxMiZP3F6",
  "key27": "UPpXyTJP8YWXFKLbWbT1RgNe3MBkQspxkQfW1hHYj2cQs1SMJwzN1TT4GEU8i1bp55W6aooe7Hqx1y6PaUSdabi",
  "key28": "43hRi9AXHYHYNJh98UhWMhGy3TvWztx7MDaefLJw3tAHz7HHwwsoKoTyjPaXmAgnuSDTFqtbF2hmeMGqF2KoZUM7",
  "key29": "3ncYGpKqeEBoE9HKpGYYaz2wJCpcZgr5dz5kNQq1uwWjfe1FKr3DrqVCn9SY42m5QNs98PegLGWv3agjGjTknGNR",
  "key30": "8aKDyYxFYf1MecThSAnztjw1fBQxyPQbsx7oYp89tcYE6i3qVc5fYc4Y1kuYnJji7BQhz5Y6zQrvjJNsQf2LvJs",
  "key31": "xkj3ZLYn9xuUu4yug9B98ixewi6qVZk4sXvWHBzQ2fKUDBrDMjndFk3DMvbCRPeTHTiiogSXz7AKx5cKpjWZp8e",
  "key32": "5KdjbS1DNgxTgnZCxUNiaaiZf5xkze6jmREDAXD5JUhJqsPmCKFRVLm2cLqoPEuqw8GtXtErzCfuKGUuf3m4Sg8u",
  "key33": "2pxjcS8qY3z1SHwKdX6kg2q95d7JBi1jMbpF3kf3KsYhZFWHQDRhr33FUDZVGbVLRDaAS7fvB9Z6UC269No49knu",
  "key34": "Fh3TBgVe1TtUf6MencLamLoh4MwXSjDyCdYm7pMJAuhHRK1b6MJ11iTzUdDbE8jXAinivYkdtWXe3AxFckTABTU",
  "key35": "3ZmL81onJVu4ZaEXHtp72oszpDZ3FngkfyXnWuFUR2rYF3pT6kWqSbCGTnrjt4MEL52mQ2zqPDvXUf8mvSXzGeSB",
  "key36": "5MdUkeUBtiTcz5CUyRyg28VzYXR2ShmPSu76kWXcBTj3XXkWeo4oqaUdRrLTTnvhopRRXPnAJBRAmV8GbbzDiuyi",
  "key37": "D8SnVnneZXvAgNq2FHTf5So5B2oUUhkgueManu45Z6WYBL9Xgve56LaRynVxcLDv1upYYWJsiqpBiuXax4bTNeU",
  "key38": "3gKgHs88i1nDdQ2S85JUiMTmYRnjf3Nx1rRCmhSC1CAPdHNBFMREb1xdoi4q5T8cAptBFD2ziFNQ7Xdmh39jLbxU",
  "key39": "4j9R5ijuKrBTM33Tok7syLtQy1trFmyN74f1UccWf1A9QZGvpvVjnTAcZqXLACGXcXF9d99rmWhS2ZYGc2JTjNBN",
  "key40": "yGfBX8sGWmUP172dGGbtZB8XeWMuTDA2Gv1CdgRo44yWWfmVgQvo4cxPjizpyyYroLsHdLRRvU6BCoXHHb2kHDq",
  "key41": "2MKanVNR8hMAJeEWXbrNcAsR8AwKneDqgbQKjF4cTqGMuwsa5AsLWvD885WFKbPZGvgXvisjsT3L3K3h5rN7DEdu",
  "key42": "gDsKx8C5nwdDAvoXLJfA79Wt8iTbS2DXDYJggWy2916t3mtNK2nPJWnzZQ4xDfoVwsF6VUxLcta7a5oLtf4APc6",
  "key43": "4rNHAmmYE9yZ3U8BJnZrd7ETm3Zgk1kz72Qdase5dvpc1bFGm6k5BDekPeQEo3nuN3Ee4dS2jcyEzhrEevDtxDZm",
  "key44": "5a5tWCiuBhosHz5S5Pi1wv1zFrw2nLvLrZkiLU6H4YtNDDdg41FRiw2gpfYq4eAzM1vRpnbKHzebB5w27EVBcXRZ",
  "key45": "4mCCFLAr3H46A5N1UskZQZcQZ1gcWAWLWvPmz7vGBSMYRwyqipVZnBBCJiknpZrGxanwXRLFuUz75bR6CMUVThCH",
  "key46": "2JVEojTpXeCsHP1PdYW4x7Rh9J2WEggUvwwAffodRUVciNCnYyvQnbcaJvJmKw9S84T1mU45EZg76NuebNg4zA1V"
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
