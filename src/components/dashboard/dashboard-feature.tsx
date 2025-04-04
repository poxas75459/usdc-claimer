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
    "3kPWvVhffjUtAtMDLF4Uz7GkVjbZnkjCAEoeFmHDvnePjLYezz5Toc6FkufASaU9p24S6zvKKJ9ju1whw2CJES5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BnF4P13bKG1M4T4z3yv5okZFhxxjdHavq1o3BWQu1U4sjn84kazscNxoWGhZ1WtFrKv7kua1z9R9V3oUdzJ5s37",
  "key1": "4ZMqEpDpoRxkdPcKu4yzT9r8vabFPq6dVij1SwoFc1nSRhJUA5wXhhng3MLw7jfnWHbchsP8nZEZPg5qEBAJpoTx",
  "key2": "3mZ8qAiPYzLb8WDH9heWTacYDtohjgQG8grawKCtTAXo3pkop46CrMrVqr3S13gAQVmA2WeeN3R37BrVSmvy3WXj",
  "key3": "4qxF9BDMxPKbc4QaVQA9bhg6HRcH3dTa7enzsfrPfgvAPw4Sqv2MxPaTc6SL1JEv5QRNCCuTRWkiBbGS7UJJQo4F",
  "key4": "49kFfBFmekTZNxUMkBFgweetjHUdtSsvbWJASEwgCciuT1Vx4R4tq3Jx1i8ChEwSbvGAMagFM45j1t78DvGPnR4c",
  "key5": "5eUjbWfu9Hh2pdFVzSLaQZnmGNTKQ2sZKyyVGtfqeBuM5E8WkEZPKzaCQaKGpgiFwHREY2DDYN3V3jrytexafyEu",
  "key6": "5esxanKnz2Hqcoq4mtqGzmC6hSGaig5dkD8NYSj7GfkLAYinTa6YGmoXZH4PDu7fWdghQE4ofotec8f8zynvJvAF",
  "key7": "2fsNEREPyBEX5YeCAp44BVEjty8Pxq2Ft18iewndp7wvpf1P9G8QYYMs2ViGkG3eGS4YJ85xQRNvacHSYDm2iCrM",
  "key8": "4YWh6ADe6pdKWNHxkk6sMddA13Tz99KhHS3yUzgdbxzMY38oMWbuTSzeeuXn6GerNkHFh6dmQnTGb8oTWAWetvrx",
  "key9": "n2Tp5L3YXcaDDMa9Pps9GSetK6Sfe81wpPmVw8FRmsEL9kSevv75s26BgTLGfrJ87wz8yi1gsXqVxyeF12Niy43",
  "key10": "4aizoLfYVnWAnno9GPuNR2BakhQdcAEJrHhjCbtUi1ydJNddQpurB66J4Fu2S3722s6zJGmQP5ZsY2zUy3PbWeRt",
  "key11": "4MGwmuTqQgqgoMsqoQCTyVAL2QocJ7pQaCg7jQpSJmBsa2L79UBru3Goawd99NFzEiY7f7NoLq2n2R9Rw5dxk26X",
  "key12": "3SsDM23itbp7RwhfQ5urV6PCzYJL7PYfALAmhVcgYMvpRswxJDr4x1t3MhrhzC636C8ddMsFM2zvvThh7mCuMV2E",
  "key13": "5EdiDVTqRUCLhv7MdJ4kR6xpFWFauq9pw9uAE3WWFgCpnDYNvNCkL2JYSm44WB63cn3tvdhhQ1Qu39vrSYUe39ex",
  "key14": "K2M2H4z89VZWBLd9AmZDc3F6VAcnw1T7L3kmJwDNZCg4WfsPB564YgUkRD47PnWJKtnZshLiaMskTEtYbqeVmLE",
  "key15": "5bUEQbJk1ejHowtfSmEfZsHZvLFypaATkau2F7RjQ6jbJ5YAJCbbGr4oJ7NSZAFpyvk9AagheJgzm34JMTHFiM65",
  "key16": "DB1ZadeqKjaqUGoRr8rddwDjrbPMqg9kic1XL8ztR7WE6VSG1rQejZbqXyALRkgWfnQr4PGojYNrbVRcbXA4itU",
  "key17": "GCvz2F31b1HYNndyazyMfurBPF9VP2w9mGqWAcULa9kdbkNJJRH2eia3J2E1aafhCcTyYDhpLR7ratvbZnDKRXH",
  "key18": "2NR9irBFELNPdvxTwaX61EQhLTGi9pvJNm7VKu8mdNp5JrdmRoJb8jieFcTMMpAemeQn7xKFTMDf4GEtCtiqEWKq",
  "key19": "4GjeEd6PjwvhZJ2qCkLesyZyLutVi1Td6jshw6QUTbg5bBG9uYPXbvJTdq53r1Bn8hNa7spwfuNkjuKMKZXNQrGU",
  "key20": "EJh75qZ6LPbpG9PzXEp15tifgv124J6FsrAzF8Mv98mBjEUaVynZ5nUeUQpyBo4keZsp5mWVfxiwWoxPrwkCgcm",
  "key21": "2fGjwSPAzAcmEPdSk6XtjfspiN6qURQ8qPNrNxydb3C1fYZY9EX1DxHvrjKsVTk4vL8uV1pXUkGad1AjgB4Hj7TY",
  "key22": "sro9rorf5BU3NU23Fsgjh3ker3V6qT35LvWXVugvFTbRdmie2hWnhJV9TMA39Ej6bs1qvBWSrtPmsNxuLPYse4v",
  "key23": "yWSpsJdDsCUZbyLARFxizNn16MuxobwwetawMDL3bgybYrPe9CESwKx95UNdZ3Y1dkbqmBx5txMcmBgfmJ8YfiB",
  "key24": "4gUJMSVHjuAe6aUWGm8SawTtGpsHbXAFt9vChM8gb3zVFJwayoBHhMvrkBmCKCUKTomtw4xFyhpNeZqfFUgWoVn5",
  "key25": "2rMC6dHnZYdQVRPmnxZLPtdocLQbPSepN3QrkL92ABKZH156W2LQsHQdQ9BTNumm67EfjCC2ReAzzsYBVVFkBkv3",
  "key26": "2Z3XTbJPHC6pK3Zd6XwKuBzafQMmKJ252SwrLRaVTVHHww2PZw8PVxCDV7Csw6QbR89it5Ryw9e6ZArhVzrLq1Jd",
  "key27": "5FhbH2ivWBm5g99hktAFmMdMUQVMj6kF5iC53z6nJ8sWRgg8HsZbyys7qTre5sq5X7nGVTazQ5EwicZ27S7LapB2",
  "key28": "448pTMhnmwmvasUrfmhSHMXKYeFB2gdkDe697ve2U8NEz3s6fVwSePopa1KwKygTnWaE9jBaH5zBbT6wz8MfGhpZ",
  "key29": "2c1ukUSJDXCY9TXQq3ygjPVQJ8kyx7TMua3hbAeidc3TzRf2VNPxFryvNfR5MRqBoGN4H2gLrUr3xAJEQWvn6xTU",
  "key30": "x8deFZwjRqaMKUXvMkEVB9m6KZLfDf78pHP9iXfvS4B6aG9jA3Nh8LmcEb1jbkZMGXVNnounZYUqNoLZHD1GNTC",
  "key31": "2wp8Jro2mLEFeP1P7pHuqNGo4QoAkLc1nvfRk6hbpNuP91KTSKGdiDv4KdMpn5kw2dJnp9C2BhyRv3FvmVV1zo1i",
  "key32": "42WJdgFCYXXkZCkEkqzh769B8yZvcDekp4vmbmhQDT9zK4QizXNLo4PjjjWMDXfbKReNrAb4N8U3XuWguGnMd4Z",
  "key33": "4UcKW7f6UL4bK43ajwnvwVrGQ3pFn7DQw3GA5cB5s9P8dZ2sypTQwgvGfqkW5hXZTroC3uPUWiUoapFUCY3JXEa",
  "key34": "FaiuMMYU8xX7ScbgTJLtB2erYhGz5XWw3tutTaxQjR7Cb889ukLq4LgspzB6uoF1Z3fXbyNGyyXgJZnQjsbr2R6",
  "key35": "yFswddjiyGaZcA9dqCFaZtQBWNjAuZJ1zw58rAyRP8Uh8JyCSmQhrZAJwaP3eHqr8wG3dvV5nYwwP18cTbbxZja",
  "key36": "oTkWuzitM4sJRi8eKEJhzCSWR7ooB6WevRgZddUso44PtyCiQbEemcauSttEBircgGxmBXs3jgdwxxp4fuicC4S",
  "key37": "4Gdof5VijgZVkkfTPNLoq4fNfsKNxLGwivL43fYkd3iDs9naVvSejToXA6yTeLQ4nygbndTm1JQ3Di31NorzCMu2",
  "key38": "CWfZbiaWa9KPXeCcZesEQDWckQbe5hDdj3JxhM8DKZr2yaimhw3nKyQ8tJTRSKsRpVHWVpdj6LK2F2zcHGp26q8"
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
