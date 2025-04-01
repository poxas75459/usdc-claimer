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
    "5ntMyPMJvqPueW95ikodSMLEj6rD1KEnJCVPQuuRgXmAdsTZdhkDffCVFqVHaotPNhLyzEaCgTjWCpWUq3cGcEu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QoomUMveeC8kgJG6BLSLLZLQPiF27dvz3uSEhcXqqGyqVZEoU5usxE96vhoLNicARzFBsf4uoR1tEMTnQVF2w3D",
  "key1": "25qPdUUYFpy4NxpYhhURhdGbEViAPeyugXNKZF7WGFtpP7cLjvUE6mH1wkz258vJ57GBA152c1ZPz56eXQKSG7ae",
  "key2": "uw1euHBip6zSsnduUJm9wLM7U8oWk6xHgEzxawg8vAGVwVDhAfSahVcJrZZb6Yez65wh67N2VSLnbRuSifnCBgL",
  "key3": "22Jr93RAHLPDtRYwedHwdNLvCcZYQsJ3pmpiyS9xnM6uUDRau13RWte5Yi5Mfmshv3mDXgQiF8qUR8KE989BoY89",
  "key4": "2BAYjoTaq7GuEgqD7dXycXWNyFQksNqMULF94aXJZfC9ozimDQNe6A1Zr3zWtTbAfXRAxNium5mEkBVy4dv7MxCi",
  "key5": "4RZ7hDsq2y3gLNmyGusF4p8CUN4siBnams2rhrcmmwXyyi4i9rsHq1VF8sHduXzTkfrnpbATP2VFHA5yYnKFrwG4",
  "key6": "ta3Y3cQjjuhnKL1hmfby2MfMsAjhpaW5APePqauiPQC3SvrQ5BxvvmAgQu6qpPkagRR7ZPxJD3PLCGzwjqBZBJc",
  "key7": "4c3XKX8tL3UbELJ5H1Ji2YnvNShBToDec2DzJxwChjsdRxUJZ1JCuAa3MtDVVSgfRpw1GDa7qsrpFmbJPzueua25",
  "key8": "4FERihgrbKCGT5JBh31ZiK2XVSv8U3sdbwf5NkFRgwHaF2vmi4bhaCP6dXND9G8kTXZ542DTSMMXa7W735XA7saH",
  "key9": "5weEYEesAppmyXqg6LcBHqUrtnJN3QYoTmeLWvYfBorFD9yDYKEpgTtNfHHeTtjfPAuQF3SCsLNhutTg1H49ZSoU",
  "key10": "4YJ9g2v49gGeuZHR2K1a5Bc1dqx1sq3ps6JVDcJdMi4ngMmStB23hGS4NccACrHvF4kAfoUSxStpJ2n6H8qY7a5X",
  "key11": "5WVRvAASDdjHbE7QC6iRXBVWwWahpVFATFFovvsW86tUAEXQjN15KeXdy2mMqAu8RQnwrzwVrPSgU7uwba8uLhwt",
  "key12": "WHMbxmBbDJoVbwmd1j3tc9VgqvvSSa5fsdKEHe6hujdMERv2gYJBLzJC28EY35RxWnCTintVd5YNWWTJ7d2ix8Q",
  "key13": "3jiRTo3ttG5vmvB25HctNtapkV3r5sjxVeaPxv4xESB7TUyjSdyFi44bMAuWMcBMP55PPm2dU7qyqwQBT8JmVMv6",
  "key14": "4fVDihNBoRnv2Q5esfeFFqW3b5RhGo3D6hpT61s9JnDcTGbHCJ9FEckfjEoy2C34tLUW88eWc1FJQnbvN5u6C8Lz",
  "key15": "5VRGXd2KQBZypwHsG1Xbvg2U3xrA91C5raKXUiVuWoAKsddYXcK5JJw74Ly7J9xiMM9LkmDnrkUmScbjKhDA17Jw",
  "key16": "PgpaFH83kSsP2JuPTpxenxB23wXHJEwM8zvLiNXy2tqWWNnN8fXdjyheJvCVL1pKScAayQxKpgoni1asKLhMyeL",
  "key17": "3NUt8mgqrrLu7NpwHT3r2dtarWdzyFYsuQgB7yNnPV7XZpsMFwse6BpJiNoKpgKoJtvfkHLy48QZeaskoXVvKxya",
  "key18": "3SR6T2zinDC6CDRnt5tPtV6JzyeD4nGb7MnFPa7Xb1mykTpGZqdCGsbXSV16bFBXPVFVz3bE6MZQTTeh198En2r4",
  "key19": "2ZC17njhho41PHyo8vsjaWoBjrBpAX8AjqobkmXWYCvZVNEP3Bn1pafMXiMeT6qFVSEdMjoEMg3WdqXxWvGWkBa",
  "key20": "4JRnVQurcV9H5FRfTfbwdUkNws13RTSFXFRh4FoJ4wv4quLbJqGtvcvwpyTfLUMN54CyVzLHgHE3RNxZaajTh7UV",
  "key21": "4cT5v9WfNHUDBi3cYZYgLDw9Xjd5ukTLoArhCDtr9qjRKTVunxdS9dHJG5opf3rbvS1hMzKBCGAFKhRQJm3T5XzG",
  "key22": "5xVPQ3QyYacxT4pYRJ3FwHsmxAJB6VjN8eVuPuLPUsV3w5ggEwbpQRfFZcyhZkXLks8g3jfausQdQa3L7whNmBdG",
  "key23": "JVMZsz4CtMNUsRZq9ypFvXGV3rhNuhE3w6sTXPYq7SjaPgrvkzewHcyhSPx4SXwaZXyoDoVg9Tk37okGmSSBHsa",
  "key24": "5YbjLP6JZf5KcuYQyXUuYfh1zVLM4eALCVGBzppapn1diYrs5JwyP7tNoayXtLKQGs1rPqtsZrCKnrHQnSPZsqSi",
  "key25": "2R67vr4FzWTETrgDVJizWxbwppMsbjELFRz9knTBwbqztf81eKuUKC56JQ5Q3gwMmCsAGKcN9RYjeVEFx3eaUzSP",
  "key26": "5DHx6Bqr8LkFRr6wCH9qJ4TbksjsaLYAxe3Ux6LMajjj3AjhC3k8qHd8dRmhsfU1c1b8bFx6gRBP1koJfjGNfujj",
  "key27": "34KR3aC3wTmG87schUuW3opGTJHbUpJuG88bWQ2cSPGXjiL8aHQdpPrwBjKmeNZoEqWtZGFiL7QdubSqg6ymiUvE",
  "key28": "5f5bv9pusbkJDLxbX8XBfsjEWQEawab21uc8X6kXWEux15Pxr8gXHXufZGfdoXF7BgAtc1yhKX1j7XQ4SS5ifuRQ",
  "key29": "5vdxXB2q6cT71bZBHQkFzGxFEcnKoVojZRR3byp36B2NaJbnwiEeuDDHfxGy6BpghcwdWgyso8gE1bqBZUpekKYc",
  "key30": "2C3e6AmrHTmgUJuPnRZnpopa36nSBg8kwxn7tXvHtG6149d6gdZppEyujK2L9HsuoDFDv1Ftx5LjpRHGEYvSrG91",
  "key31": "Q3dNbJoS4p5xhR6QXmuD9miGeo3n5Rb1dZ3PMXBrWuhv3T9cr3QLkST71KxcG4Rs4kHQXv7uC1k6Us1j7k8fKob",
  "key32": "3jP1sav3avH4BdTw9x3Hx5p9DB8S6WHN1nBTEbERLsRip22SXDA8X2UZYbvtSGPvaWC9HNm3e34mNNUsD9zkrsmF",
  "key33": "5nEeWxYvDp1gVt1ZokU6KCygCXDMWKP1wBKJnCuKV9aQuZUwr5a7YX5RCFfSuVEhVYbtZFS5vLMKHZs5wV1WXSPQ",
  "key34": "5wVTxU5mgcHa3LoArGjdoJPA7B7eWL2siPPcVWEumqFfh9cAfZCBqp8ak1mguCw7edDG5hgpL2vLRNB4VctXChH4",
  "key35": "5UnHfHBcHcrcYXJqp7JzK96ginVyEnCWVTm2R345gEp8s7TyxDU2TJGTAy5ctp19n7htZy8qsxQkbkpQEsXE9Qxy",
  "key36": "3qbyi6GPPaHEKxsZeMPfWdi7YChZ3q9QtEgbc4GGezXExydNEnJudqwbRFnJPLszroAGgcELqAz8f8anuoPoNyjL",
  "key37": "GsZV5KNVpWgCNgRoTyz6skGsAoiUGGywP7Y8nuE1xrVwXApWnH3ZfYTimRy2zVPwyyianqVP88d7saBpEaa3VnR"
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
