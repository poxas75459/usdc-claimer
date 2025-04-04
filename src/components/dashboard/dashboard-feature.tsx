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
    "2vjEM5VNRBFq8jjdtDcnRdpNmoHUx8SNSRHDk6YfBvw1ahyi9wDpvCWmUyDf4QuWj1bvtFBJrqXcGeRA5bniLgYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XiePM3zakPHZSJQAhpHJu143kbgkcTez9zEqSxVDcSeoPkrBxsfYzhnEYQMCMxnYj5qzmWa6FFD1CLDMry8K9AD",
  "key1": "52RP9tzFpz9QcFvMv6QMSCFfW5SZStpzQk3yQ93g9YLQ5jWc5R8bwoGTCBEHNdUFnNH9Po4eWscRuHRrLBQc54C8",
  "key2": "2HGhXkjTMaHrrPSU3N2dw2fGFQSjcXiCgfbn3P427SaJJrF8teuduFK2m1tDFvtiwD88y4JSd7K6vrVKGAR85PyD",
  "key3": "2fxGWTeM1ktNpD6k4aU9wCkDFv7dvdVXvv1DtQSymnZ9D65ZXpjZcuJUgj5Pw5R11ZFsXAmg1pNsvNAFuhGfVQ6a",
  "key4": "4JdE3dTEZJJDNNYnjPnEqiQ1xhpcu9tgQBmwZgw7RDHE4tHKn4z2hKorzzDwVFxVo3UH8SiP36faTHQtQz1ydcgN",
  "key5": "TcxNg6CLVV5ZKgvWJaqwzbfzEeRpoEgRNR7pVep2m9Ur6JeWzB7jME45YQ8PWHe7tTEn6Up1vpAVHWjLmiCWuX8",
  "key6": "2GBxtCqUQ86cJvD5XoGrq6KpJgJ8tLhYuQuHnTraPYnxo6xzsyD2Evm6BWzh9X6NzNRWz4p1HLS5pHzDysrqAFqZ",
  "key7": "1AAaz4B4oQ8vFcixGwjFuWy9VfthWhJ9Xh34YhoXXjRCYfsRL5U4YEkUsJQ4mgo35cQSTCtHUPuxfboLye4Jx61",
  "key8": "5on3XbPqt5cQAxANuRHBrNNoZ8fDMABkYzocoG8SsGXSVdKYjE9ygYdF7HpsWk9sxxpDdf5gDjAHdvc6hRg92A4h",
  "key9": "3eY9KDb2aDZ8SMdrBirEaEZauv7EUdmgq6wikrhWCP22DnCoybwaZndfC1iuKuSB1q9gQqaJT3JVTiRB6yFvB5Zs",
  "key10": "4ntgURz9bd4uyNBj5gMhH8U5nddC11CShMjUnU1BHHiFL8tky3P74CHDhvMJ8pAr8EgEEoTHyc4YX2dwiVkMFwCx",
  "key11": "3KwMu9G6SWQeFvC1gDfXBucWRNwC1pLcBUpNSfzH7nnncZFAR68AR1a2vXgwC5ZsD2gFoNJmhsWEk2CSxzZ3N1Nk",
  "key12": "9EJV8WvrciXpGBe8dQqVrTJ75MW4AEncj9a1TPA4bjw4NEfzQuK5aY6BADyVQx5urW3XohCRfGVErE8dfrfieD4",
  "key13": "48Mn6HPihNtLVUq3rAk5xpidNjuhW1x89muQycG1bWTeTHzh5n2mLWUMGQzAzSLHoixD2hpaGNPhGRT2vX45HwRc",
  "key14": "2FZkngx3YFkYwDfQqzne3xkVUmJqCaNciF4mdMpo3DxUG4yfcn8KhWbiX3Scau1NXhHRppWgNHwQLzEWzx9kQ4gA",
  "key15": "6tyiAd4ZjBFZFcHBDsMAGaCmBMWKh224t9czKwkRaFz1PxgniWKcpYWANWkCGSMRv9aMWoYv5sHqtCgsQ7SiKJa",
  "key16": "2KBVRCJm4RjtNAhpD4CpAdXADq9cV97YjN81saEkf2zWeK8gisQuqS6YUsCWDBaLKYaLKdAAvnLyQromutKniZMS",
  "key17": "4xZzndDsqyHzuiEKevDTZyNaFnAL7JeyD2ivaNKRSprNJUHGvazpmzeRtczWUivDfDYkCuHUCLLwJNmBLHX8cun2",
  "key18": "HWCacSemp8Q9XNWHwQuugjNYfUSMexQcfAGLR9Ek2BkGMAJBcXi2Vb6AxFDhfZ2iaxiZB9R4ytJgRs95a7ZZAxb",
  "key19": "4m298wNFwxRysja56Tdt7bbG5oBadbanyYixVKLZUF1XsUptPojgRBDDHxnFZTXDTfnvjx4Kx4emh8qbdoVsgBuC",
  "key20": "2wNCWiXwjwtxySeq5EaPQWu5wkS9TFzomwUjosYhTyuJmDqP6kfR3CadJMeHPFf9qCJ34eEpMW7j8yyWvZwyiE5X",
  "key21": "4iubRCJRbMv9EsWXf91HU9tp5CFnPJnkMtaGSdvd1NKNivyeNqhKaHAmNRbpCFoLF2ovDxumee8Jc1jgwBcxn6RZ",
  "key22": "5tcL88brfz97Nj78EpwQWezMh1f6BExEngGjb6vBw9nJM1KtP4jvYLEojdw3yGoKcdycGKLx4RYu3gL5iuLR1LE3",
  "key23": "5QwUdkfw6q4gqVgSqzwT8xTfwUEajPpfAQhrsVQfbfrZfjA6VZG9TQsiWryifYWoiLotKsHDgmk6mMq1CsuJHMvh",
  "key24": "3Tao8ivBub2mRHCdSpu8FXGuJvXnWhpJNumpdxYwCkptEAUxDU72PLpN4ntnzeUSofcM9iKUEmpuSdWYJtTtx55s",
  "key25": "3Sn2iUzf5GzCPNN32M91jamkJdXXonLyNkRLGTJEFWjaYQMXaidESorrxNsdL7p2kdSibuMKpCuGeSbtq25jnaE3",
  "key26": "bfzLcKUsBN9fnPefzsati52hNaApmTnHJuxRf1To1JP9Uvto12VKsSNvYEFwVF23r41Z92gHQKx4utiGXmNFu14",
  "key27": "2ZeGBo3cZvUXNuo17XGKU2TSqQp8a8h2Lp8w5u7WrckaJfL5EKNAKxvwf7HNT7v65gLNBzuMfy2dDP4c1dJoAHzd",
  "key28": "AqCNkcKiNR3Bejkbj9aMSiWpq6sQEE6ooFz47X3HBskakZNCZVR3FSY8prP7MsLik2xB4EMt3sgF9BxujihRU1h",
  "key29": "3ZdJb9gbEwUy52R5pj7o8yfwSsqzo2e4h2tPdkwJRCqmiuYTr6fch5myT1SHoyWLSMcserEa89FnSeY7Dnz9Z8Py",
  "key30": "2wFLqbTwjPkEgsS123Kp24hooE6kmrZrmTUX7X2FPLcJUB3sxnnq3X2r4C1MHjKb1BApEGPFeBJQrurKcE24kfEy",
  "key31": "57YqvdUFZd3zBYynhWSgtfrE6q4nyjmNBsLXZMgEW6HrMiXLq416xE8nqLkzHSiYWwj4W52CsTpDtFX7PBRShSi3",
  "key32": "46z6r7gFeQXBPV3DdHnabo28Ar1mWhcLG63VbRmQt2Aqt88DzLEKgTNF1A2fgps9aJ6ZQyCYv1gV4PMBVd1vxTDi",
  "key33": "4pZousiFM8arXwZk7tTEzkopKtRKKVeGTH7Re7aoDZTGPiJX2wuFfbfvLVNqg5jXursew5ahTDtEEbTMEzgUZAru",
  "key34": "3ymXE1HcXdMsHRwiiPjgtrHtcL3keCnQCW9h8aDZcBYZDKKBe38CHNwdrqeeuzLUNXMFgfdqr1m8ZJxVUtvPnCRa",
  "key35": "4KiizsdyQ8wsKgyxKYHajtZ9yxcY38hSjpQ46RLZVHnFgvA12NuZNYpzTSrhFrQqx9zw6HJ7XpueMGK7zyBUM4G1",
  "key36": "5wZHjinexQDkWUfC9zk4VFLsrCSNrCFKozZVnFzMUcnPSFakHKziBGBSJX43JcAg2VSzdWuRuoDC4qjHSjp4s92u",
  "key37": "5bAPukbHkLiKH6ZF1kUc1ADo32kg9KHDaycGEDas4sRouGf1JRtTmRFNBvedw14gLS36fFBQ9B12KqevujVRAdmZ",
  "key38": "5JsrYvzRmayWFiR7XkUpRLfBrbxW8BmrKTU6bj1tK4BV1Z97oisKUsiCXYWf4NPdFuF5eEZN7j8c2iwm9mrRgme5",
  "key39": "r6B51xSch2gpUbW4ExKCmRfFUQfBDyR3u2WygwdLwY8gCNNT7MCr14DkABCVaxgaUz98YYmwwV38BBrvWbAfqVf",
  "key40": "3WnkrCtUF3sSxT1b2rJvduEU7uKejSnnKXvTNB4RXVYL65KQAvgNXHDcUnVdRx6xoXckxQeajs4wNh4jBxb6A884",
  "key41": "4xQ9e9vwaKae3TGhN4VaPtSDVHmaAZa7tFgeKi7wXmCuRHk2q5rpSyPDYSpGncq7EiR7dQpAqXG3RQe9du9cBhkg",
  "key42": "Robvek4VokQXMtWfa6Vn8aDvnBRCBqAkjDdN6RLc5i23dJU2iR7j36v7BFb1TJVMtgofqDSwGUZNECND8zdeBEY"
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
