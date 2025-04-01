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
    "5cmcRbGiVQSP56spcnNi4sNDivtDUbvQaGfYQ4cjAgBXPAFor4kwVDfZZ7DMGDdbFfgDHDmBTwHW1tfUyMCi7gQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zSDpFXquDevtbi3PRmfWzKSkF9dEE2VhxAv9q1mNBKndeAJoYriEc4cKesFy8155xjmq4y4fphF512LSjp4z7su",
  "key1": "dmdmvq4wpFF8uEigtBfWx2Cxfy3nrwYczJt7UiqGicRfek5yZpwZ3P3YtnQKyFY5yQKjaYHEcb3tX8S4CcjmKvZ",
  "key2": "4XXbK5iL875E2czk72ZQ4J52pmE1s4QXh7mDix9kPjhSamyKRYL7WeNPfc6VsjXAm13WzBFbTtfSoQngvaaq3PNv",
  "key3": "2uuHPh1vU6evbx84a6GJENqyPLScfC6NtnMN479Zx1ZjQTNn2ffT65W1F9cMZDKq2mBsCUv48cfUiG3irebDjMAT",
  "key4": "5T8Qwoppbvumt659gogwfeQpojQ4i46BPUVnAFvvUaNNtcRADSeDyRR5g9HfNJBZtffhbfoD3uq6VUW8VzTzoRnv",
  "key5": "3jmxiUbUUQmnFx9sEBPxaLuMBR7WgD85bunWXFY7oQ9t1SWivQy2v1gHYVe78j1jQ7mT1LV2jo75acBKrWUPSeew",
  "key6": "24pvjRGXqkQkxRrox5dxqdo6tAwgiqC21kG1TWr1Qov6KeMGwnEmpbmK2yoXfSzbzEP5AsgxQ19Sss6zx317XVcj",
  "key7": "5w897FAjAo9owUZRZKTKqExpsFezg3C7UkhPs4ugWSdFTfxLAMP6WbBkt6GhvoeQjUsrUUeptCrFX9rUDAKxGoH8",
  "key8": "4Wp1iGJs7YQRLhGfyV6KG7BPGrZKYuiDPVMvJANe6zGusaWYktJWxAXYvAyrawbamg55kfJBjFiMdEqD6SXMgJrC",
  "key9": "k3j5ztXP3XGvLCQuNfa2HEX9ToViUnUdpQa7k7wzhkjJLcRuHPXU1KjMDiCzgStGbVJcGN4Ro2qFhZ1rupqheuk",
  "key10": "5rjS49BTrPXGWVRqP3wjLDNoyipzX9RaTwECNxnGxSw13dAJdrvSu1LjRZM1fxfiSvkzadZTyeo4VhDtfTWPE1sM",
  "key11": "87m3t8GAE4hGbuTXvVuxoVprJFLGkBjJ4esscx9BjPYhEohq9xhZNgYSrnbBk3156Xeweu2Sn2KciNiAJTYVz9j",
  "key12": "53YPHkuBxRHF9jrjH1xVMmhmWw2dVbFX4XHxbMrrn1Dt5ZzKuRMTNMAtgeR18LRYWNDkEkWWZPbyiwM77PrHaysv",
  "key13": "2tVtP2QFKW2MKPo7yocoJy3pBus9prva7JoqRDtmfVykbkL368VgzgbmEHAxR6pBbbzgoWbijqrXdF83xeQWzygw",
  "key14": "3zLeLgDwKrQANozg7Vi5ujLjU6jdfdiWuazN9iMDWx813fuZwBaiM4GuoTR4uGB1HHsDaumnSHHizuAFgpYsrCCr",
  "key15": "st4eeHai6mFNtjSyq2NeRNiBqAdUUcB8PVbR6rDJSJzGtKmApdJp74G1E6AGHEBgLfiTvJZDoCugtwTsi3y7cB2",
  "key16": "42rj5L337XQk9qZnsaMoS1oQXyAQFE2AusaKBnF7GAmzfiwuhV4sSxfRYXWbnBwB9iVZhpF6hgqBcPzzFk8woJVT",
  "key17": "WsYXNBDUmVt1WzsTRVioVBBJ7isbBG9HohVLjawp7FuCAo85G14wQhXAQtVLTpgmSZ5GXSTNuUcXASGMCYeHT7c",
  "key18": "3T7BHStK15gCopGjTUUyRxoZ8XBbwbP9KJUrg5qPD2P3y1yWY8YNZST9iECF7YAZA4Z587iocHLAVUQ7xVaW5EKL",
  "key19": "2fnN65T1gxZT7tC89H3bBdWay2HFtd7vSe9ZwRrH7dp4UPeMDz3hccm8nELrDBgaAnvjm8hP4C1sbW2rYenQ59C",
  "key20": "tBDma1Qf5w6BGxsBjdMjAQ6hRmG6sWgXLK3AEMSTwHRgsURAovH2SD8tp3A4hezJwpTZYsQcXEX85qp4QrtM8ni",
  "key21": "2PZkdQEcJDMGngxMpbxQNBUVDSriPTTZgJRpW48RCstDXrBw5d1MnhPxuTygsqvJ96Y6nf1oXvK9YfaHU8Zqm3oR",
  "key22": "MmN41A67fz9CCYevpASE5bV3CGhkRwxjdAJNeoc7X5n9EKaRf2rReEruKoeKug7zHztunePve7DvKu1TkGvrh1K",
  "key23": "rAuyDaKUhNiGcZPv5ALXH7ZqeUEP6WMibttTLFoztupnBnCPLzDhJDQJtQazHAvGsxiNm3KuARYau2n4dDogePK",
  "key24": "7R4oop4xfusJvHxce8LoUuJ1ZD3NDqw9vthMKSGvSqMjqMT1iBGtA1ckeLF6FB9SuKX7mCn4wv5zvjmnq73QFBX",
  "key25": "4Zn7X1zhoiZ2jV8ojcW6bFZp53ng5eppwW1dz61JmDNnZbjVpZfwSUcHujJAb3NPhquspAXfhZvpNz3Yh6yagzxj",
  "key26": "5jgS1DNGLce9ZPfNrxkNaRLb4yb5q2FA8snxQkXDpPHtjUpKP6YBUk2vcj2cgnwGvTMLk2mAqiPLeZnFUxBQWaxE",
  "key27": "4kheEPXk819nqKdffhfxQ1C9yke3SosYGY9UndDFq1pAfqgR74Nzk9UJqV1fepFZtn8HqQ7vDiKprvHQ34p8uRCh",
  "key28": "XNwyL3FQE1tNoGHaYdqkotm7jfLyzZSPsSv9U9AcVJfJradpyGyQLvFxLAmLFMopGybK58xa54N862kTUvE6Anb"
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
