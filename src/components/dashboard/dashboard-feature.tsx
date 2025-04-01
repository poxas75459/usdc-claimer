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
    "3r2mCrNvhRywCv3TACMecezDaehwAEB3YB6k54FfZvdCgfaFWu13p8FU63BtRyzGBSsFAyw58FeNrzELgG2NL8Y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FBQmNNaDnHW1XPKM1G9gFebzAXxgcqfH2SCB5hBZGe5mJAADSksiLzNFCqf7YdQGZhvLqkg1MamiqkCTPGmBzKM",
  "key1": "3eGSZ7K81F5pFs97rXJsAEV56tuvZ43xkuBdW9T6LWboG7CCfB6sf9FWrKxwrSJN39eLGgbQRfSf8RuXiQrsQ5Gk",
  "key2": "56nYTuw4xxMhUNLkWQ4orxcnFdgENTrhfoQW7YkqgKhBTfEn9g6TF7mFrCbBTchoXjPTp3TtRAMbuaXyrC8NkTAs",
  "key3": "2n9ccXziKDUcMe2kjYGm9skGBvMhJXUNSFHU7Qu53AT7pdbbq7fcN9kknNrWYdAU4NmLXRYHoFPimqooRLKduDjm",
  "key4": "xEKk1aSVB1zJTKhEPh8fk5H9VgsNFc5Ps8Um9jXsy4VNf4LU6F3EwksU4MFvX1GPHdfkAp345qYuVUJxkqUDmUs",
  "key5": "rZQbo7e9fEpUeVaQFD6uHMXkCSYkQMJ2dJ6jgZEFLq9BA2FtFGLn4CWgGM8vTAbskQWd47RbN3hDoTeWMXLczrS",
  "key6": "3XR4Bze9ydpEWnE2XaZDjd7h2AcLXmVW8zFuoaTRajykY8SHBYfHArNp9WUZH5UsgruCmGsgPrAKDgcyX3hCRhag",
  "key7": "42oRxD2VfxFzS4UvxRhKtz41HaKgA3h196prBnXKwt6i3NCLUWKVwg52CxFXhyJUaYirvi4mwikGhfjL3ogNoNeU",
  "key8": "1Mu6kCxeeoCcjMsDq8MhwGZK7n2JSSxktoYcH5ckx4UZxtDbMhjdEHnTcFRuNQXn34FiJq8Yn6FHR8EpJ7AcZxw",
  "key9": "cvSkdo8CgBADgu33uiSgJLFEgnVZfZCMsMSC1ReJB3DaTiYbUDsN6u11YuWHwecrk3156pg5DH3toM2zXkxy53Q",
  "key10": "5grExZg6TiehXHt1qtKjn36uXRwGaHaUPyAAMxJFNreqYuKpGEzKfhk7UqZb9ddaBnAp15fcT4nM5EqaeryHCxC4",
  "key11": "4tkUVJQsVb5QGbUhQyURemf2CJXCPw82fcixMDEqtu5XVkFWmwzLJcv5LkRWkeFdkgTYueiDzPaqsTs6zj2Y5eqP",
  "key12": "5GYEDDb31ZTiYuf442nSnUHZpcHTuwYgx8St3C2WW2XuFXSJDBcVTUzRUU78Y3qx8B2DhLQ4RGZg1HYfcRjxZQJC",
  "key13": "3bumhkf11ynUdWmo3pbhF5rpxWgxSCmzCn4StvahyjLf4U9Ypt3yxfZnQvrjnCATV9aNohy3XfUb7hSrTuoYoSEJ",
  "key14": "3wMg1vBuPb34PYYvS1PBSLP72fpW51UE8UtX7wi3FcCC3FaRuVAtmD8UF1swy8JWRMrG4RE6GvHVZu5YfNbYWVq5",
  "key15": "5HUfJEMW5W9Q6RhLoGZsq6SenTF2q6qzMGrvebyACUFaDVJMKmRJdiqDroAhR4Xm6bJkbtBq5AhBBh7qa4m7CcPq",
  "key16": "4fbzN7JVK5RKSkEjCyxNY1crQZjKVDALSSYMHjae6wfqtG3KEHwaZUzWrziUwCtX8uwzWEhrBDmt9DJW3Jobr42T",
  "key17": "2gcJTiC5Qh5755o3ya3SPKpNcRFuYwNJQPTe2uuUztSPP1zqkvYAsfErFz3pcrRMqTws3WLnFfVPk6eruEFAf7jN",
  "key18": "3NdBLTzW6NLhQFMBWQtGQBBjjYq1henmEZcPursjrRRvBtCbzpxU6qoKgwxqs3hpnLmByC5DooyK8f7TQd6uFDXZ",
  "key19": "3QZzqbdESN64eKck8oLaMJaS4FmBrEF4b1LCCYg66Z72obfPFAJqKBuaEo2UXdHgx3irHP4VFeUeT7JzgMDbEjBD",
  "key20": "4awpw53n5TPBJCBf4UDhpah1xRBrBEDKmKAq81j1HRmf9W5Mw3aaTHxExuGSn2mpns1XtBux6vdmXumfN6S6BmuL",
  "key21": "RcUakraN5As8mwhU3TkqSn6Gq4XHvmXNqo4WPR59nWg2cMGBe1DskBEM1E5RwdXHPJPUaxUrmVog2baqBWh1H15",
  "key22": "2uzAsuzNmArPbajppAr1EJwKLo4M5EWanABoMQtUfB7664XQL9YJHq5Bmp54aqG9Y8DopBUGWDQLRahAaXxU6EmM",
  "key23": "45sY4HeZSc3AktkvtctpbechMoqqsnEJ7mX1HE2pDTWaqpz4Z69BiUUfK6msrQBdYAh3vsfhRLY5qjJLDiLD8Lio",
  "key24": "4oUb4P8TihaGBUbKni7eLvCTvXsTcUo3xp3P6E5hiMr3e39HMULCyqHD6HNcnz2aVGQTq8WS1iTa8GBSBe6zYUks",
  "key25": "h16vbHsjDzoPZQC2ZzZCyExm4pCU2Qf5TcNhtMDsDjpaCB8z7dxgow8uz7H5Y4hM7Xy55axpHapEmaMZDkSavhG",
  "key26": "5syptFxc76Xc4sNCZNDDq5bwPNcoiYZ45pq98fJVBBaKVbF5CjPgMLFB5BggaTEFW99pJ7hHLEcSYBpMapxH15K8",
  "key27": "5Zzm7GAHGorwTQpB1opkMc8u8LnXHJQbffwT3rAwR8R4t9RdWQHMsUQ6nMrDT5qc8yXmFTuN5uocqsMz4ECLgRgV",
  "key28": "5m2F1CJbDwwMQu8cSxKcTDntHNXYru6CKx2MA8QuCkVcs7cdbU64Ge25sm396v5shPXKzbGNkQiqXYUxp51xXcgo",
  "key29": "39KJatrstH7qC1AZxYVHhyHG31eAH7BCGRK9wcqa7qYNB9GBFoxEFPtw1UY6y9MBMRC1pLQbJmXzR2dAWLwvYc57",
  "key30": "26n43wNgMgpV8zYdAXhfqMdseahhbT4fwZe8sCRBcjif4GYND6mLhEtRbzYQqaEXrSJYEaLaN6By3hvCo27QsprE",
  "key31": "bRKgGa7Qou1awuwyB2nencEPm2ueiYqHFRCWpUuNsx8ffD3m58GhZW7LcK5gkKZjUkcXj2RPZjLSaGV6ytd6rj1",
  "key32": "362nXfBi2ecKYV4pihFjhQz4nFJgodCxteMNTRpoi9c4Cb1uSyMQukaryCCmfQgpydLXi4EqT8CmhEDbLJuKdJeE",
  "key33": "imrLza9xYm2zVFkDYF7XFwS2Z79RuomiWZ5BVRPnANwcTkXrTb7dfcr6yk3H6miExVvuncxHkpJyitku6aQ2Z4M",
  "key34": "2Sv1UbypEMsX1ndSzwiZRAgyYjeMDzGJwe6BPSxE9iz6TcHj7VYU8pEppw5XskwAJfuy5Vivq4jfPSyQx5jupyev",
  "key35": "XnJKJMJwpAUTg6jT8rFR4qAzhtxqTyATkupj7Afqi9xCE3U493DJtzagicwjU1SuPCe484iVjmdee9qEMAcm8pk",
  "key36": "2ES48HcfcERjiiX5dyyiQv4nrciDVsxC2GnfWyH5KScbCdpJp9BbmLQ9UnNyHMrvp9v97yJFaCZk1NNr8iZaf4wr",
  "key37": "4A2TeWgEoLh9eGZ2SpDGRGHMUAajn5cu9QeMqDGkSq13ewiekmR7UiQKYdSpLLBGaLXqB6doskq3uZHaNcpvJvcn",
  "key38": "ZmawmcqfTUr5zgNXH1KnKkynHXXBd7taGDDv8atGXVPApBtUxyop23vxyTK5gAmVnar2T4u3Qeps5gsw5czqHsw",
  "key39": "49fXnvLD5pysooeBn8wkDWiD86UpxczrvAR4FPbX72bFe47178hibJV8vRyhXMF1iy4uBvTZqrYEB1ucJcT2UCBW",
  "key40": "5u82Np4xw9R769zxYvZngZRfxuLgkuuBUr6Zhgx4THM2vfp316ofSB4rQqV1nPygQhuzhLiyQSUAHZkKYK6vxYWy",
  "key41": "3W9VGpks9BPfDYEsn8j852bM4xLEMtCq7ZJTabXHHYJyypsLWqGBYk7pUFwLbwKVkdSzE1X5AjzeYW8cJXHeVqJa",
  "key42": "5bEMxNwzzvoxePQnqCu29PZNmnJin97589CyeYTSeRNAKhZHqyuZdPXppyM5yx5hThhiaocZfBzKUGTrVCprqF3V",
  "key43": "3v31pZGkkCtAJgqnhqD7PXe3FWR4VmCLDFGUMs5HhYzmE5XpRA3kmwSGxHqCVv3WvY5KjcBBPMrdyARxrfWZpSPA",
  "key44": "2YEbHSNajntAjJq4iVmnErEzDjhFSkm7UZEUPTjamJvUqGMbBjtLjpmYN7DYMmPpTVYLeTigFWnA2KQVCp8yM6Qw",
  "key45": "ABLxAErzjKGxsYfUsHsqHB6ZE499KUPvc416HFd7RPidhvrDhq31WoKKyK4anPrsRa9AtkQgFTBiBqLDoyC3ojr",
  "key46": "3JKXHwTvZjaHsz4jA732FMr36yeowWeuaZQm1zcRhGJx4dazd339qZx1wpoMFmurn8oierTqRreMrXgBmdAu1CcH",
  "key47": "5oq4YEUywRtanpB71Rg2VW3xkzSNFs5sUxSqrtjBsab6eBjUVr3YXkGdCtJm5ULeQ4JxbuhTK6g3dsRxvrg3EKzZ"
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
