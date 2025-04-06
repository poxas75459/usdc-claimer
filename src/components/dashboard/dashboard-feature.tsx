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
    "2rz2QwnMmH5bF6NPhQdqTQmeM8somXQ5Qxjegw1qacpHbMESwxzuGmASKJMfeyZyrorQDM6eXMWtmMzUfQ5fPhes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MBP5X4tMFW5ibfwQrsfK7Wg7YitLyHUb5aE14KdnST9WAzPjJmm8QHSPGBgd561rBn636XJcNJ45wHBBXQVgF7r",
  "key1": "2K9VoFfRkwubeKSQtr9EEtVwy4jEiuiDbEGiikAutVyvpBMC1RbcQM8rBCYYzWxD38N55mPWeTrDetMstQYn5QG",
  "key2": "pphJdnswKHroLcExwX3jkkfrEpvsznu9tQzZyDRptiFGfsP6SgpqgpPUzpad77Y6HEbd9XecyniP7m72vWJ31bd",
  "key3": "5L2Xa2KbuJ8Pi2uq4xtGfpmZfxJhpq9YPAXxELddut6gFgDyyyCaT7qs3tXPrngGFBYNKEc1ijiToqp58X73THwA",
  "key4": "39GEVHgvGGnccuQtMRjZ3kSMvFwFUxAfabUwNgtDxF3MsXzbYgPDcJZ8cfF48aj8SmxsD2qp42Tfjp3oasatVAF",
  "key5": "3qy9ATk4y5qep69Y62kQmLg91NYXN286AVnhHUPdCAC4h1G7Rnup27GsNggQ6QGv4zDA4Rfcg1Q5fhKTsBRQPGbL",
  "key6": "2r5rHZcxVbBFPZ4jjGgjfCEMCcNG2wWbLkji54z8REWZQgYQZ1M1aPBZbJ8MfHutLcKVUgUnVGFoNZEbEN69z28m",
  "key7": "5ondxifehmRjR9Ar5THE4KAJAF5CVLMeT9dJcESxmiNifkVrji4naLheoR4GRaJRUkfkjNcWqRFFxWyZR8jTkucT",
  "key8": "5wwMykGN7x2kyi6vNMYzVsgy78zqsND318fRC2H2yV93ZQdFCEZyWLJ5sbq9P96WFMWFpuCYccgzNnup2yh9e3va",
  "key9": "4hVQLw5i9ofqK4evs2AbkKK5rC5NUxpmi5csNXrNVWRzjtRi1heGmE5XnpFBPmm7XVCKAe4PF4LzDohtHZtufsH5",
  "key10": "2hKgdisKv5YVHS8DLEQVnggWmFJNdddnHtAKyzbnonvWxaQ56hP6osCcJD5HnQZK5xKJwsnppkw6wbGbkmd2ztKa",
  "key11": "3V9NAEtcgWkMmV8VUvsi9QT8tKSBLnhH1DfLuXXsxrxYghuJ8CosGJyphdzSUxKzg6tmsVGN2AGcWsYLoAyv8Hwz",
  "key12": "2vApfwsauXv9HWJQYWZZpQubcVtY7TGPCBAPzTf3HysGYDBqTE5MVbQvgiriNhmYyi9ygZiArYFx117YDeJDbHMy",
  "key13": "27Fo39ZHxQPi81upJ7r9ZgU2uoXRSXty3dvD1AZiroyQff3t1ePjop33XTEGg3Us26VDkRN1kKSHiFbQAGd7WG8A",
  "key14": "23zJ4PK7Guihy4kKv47FGYeFbPZUDT94FeCQTtoKYjrLvR1a2HxS1AAn8fYGsNDqceoVi4SSVN6LjAs4qnbCZhCA",
  "key15": "qB34euv1Fmpyenu2jT5jduBSxeGVY3HbrCtkjUHgAXFMbsuGaccsgRMFLtxbtSktMdVssmySPn1LStbD1tbrRzw",
  "key16": "26wxCS2vp8KR8cgZHfRrMDivU2UHBDv2MbKQvik14HYWueyV4hyzbm843yUQo14hmJnYfJzVi14KmLveUV2sJJ4e",
  "key17": "6Y8y69FFtx38WUBU7isXo3eVx51thFKGpTzmm77V45St84U858rWwKTtNc4VkdjtEtU9TsdChzJw6cVYTvShxLT",
  "key18": "4sA4vQraZxmFs6VFHw1i74ZYpaRGESLYxLWqVkLSe1bmsDbYRND82yc6S5oQXjNQavcXgFX7CCcJ3dDSh1gPEDee",
  "key19": "5LY3ktwxy9HAS2tmKTBcg2J6e4tgneTDUcrP7THYcqYdNMEt8aTYqZJLFkhEXgdF3fhmj3DCw4HTgH6sgVsZFTMR",
  "key20": "bFidACx3qkMtZQwDesajnUbmXCtkh3XNAaYduhFV5F1YPoxCfbagsBh3nSFFyB9tF2fUnXxP9v5TeMGBWRWN3YD",
  "key21": "65AqDmoBRWtez9DY63iD4covkvesXkMFChRhU9Z2YHTZb8VEdBnRBYTaorMFCaDWbBRiKqds4bSxdJR13EPFF2ia",
  "key22": "SszQLzGggZnvB64cia5crWDxcWV8hgeuk6BUwNPoN3sfKK93zR2QFgZNJ6JhpkoYu4SrHhxphGgCY3wdiXsfNCk",
  "key23": "4oFxvYhA5t5EPxMK69F7QCfkwEFoyTFT1s8NYeYoEeTsR8yyZo9AgKopqygnJwrdA7UZMmfZp6cxWyJCHbfSLLrU",
  "key24": "36Ded6AFbjmAPNGa1Nkwf42FMf41gfFWPq3vvsnDwuZS2D5Ymrbo1Htk45CXovBdzZZGkuTJdPk15ad7UhKadPpS",
  "key25": "9gVV7Z9W5WintyuQZ48BaL3WbvSkZHMujpXxCJ4TVk8Trc3wcZF11DuEosrhBpKhaihtRT422aaczLcRs9PSSNi",
  "key26": "5WEUSnbnt9D4qAGUypWNTpYHb3mc4LtUdtSC61xmSdeUpxN19XUkDRHwBUQFtYo33cA8k18cpCvLg7rDu3q64Mp1",
  "key27": "jf2eieJEezmvMpsMdLht15Y3JxbTm2CRSB8AKvLhjV1JRYY2vzyZikxNssnQMaKArQjxVCJZXWLmT1vkcoccyh7",
  "key28": "2HXUbf8sb39PGfpfN875b7VBfjWuvRuJzYAkgDDFHkeDisjQEifbFXUcks1MxZsKCSD97T5kLRLLowEiVosE6kNv",
  "key29": "4axi4dkqMHabQJBPdqU4oRgCVjrH2KXszhj1RXUhgAxYyQvzK11wPSsKBLjSP1kBw8QTJPVzxFmjBihKzowifr7J",
  "key30": "3CevKuMew5psTJbAqCBaffE6a9nLQPPvMDiHpJZK5dkFR7fWV9faVPqGgT5MFiVWVHxqtzvSHUToNok6RWRB3x6X",
  "key31": "4CLpqT65weWSYFPyi4VEBzrFqVviN2syVEu1E5gqiSN5KdmwMi8wbosWka7eNyrErr2YqeAfpqDRCdw6qpfi6E3b",
  "key32": "5fAcQkQ6jYg8t2y8Ay5mciDedpGwdogvHba1zkYENhXdsGvEGZNQqSbCeDJvndnkj3Dfgxnyjj4E9BpgpGrNCh86",
  "key33": "4XzcU6hggTFtVAQqtUJ6x69krA3RcdXU71gAJ8vdpuquAMKbFRx5QfrictmGucnmmHE81TLADCRv89poKcK1jVYy",
  "key34": "66QqFvUKvWpGabw1YnB72V2sa4tCrDLjE2GSLjiuSLHfR4ZwkbdRLi56Canq9jifgZUxbivSw5Re5ZwKWDGLxW15",
  "key35": "5k7GR6jyU8dQjuKytf1pzdEgzFeQvWSFy5tfr2ku5cj7ZJNXZNhL47VJYLqJfkEGM9sH6LMGe7wXnUDD2xqTtUEx",
  "key36": "2nooU5zsgbC5oWyRED7p4uYHo1nkGHTRQeqCaJsLmKkFd79jBXwXnXbDQXXdLNjVcm9xxjJZabfSb7qYSYsqz5Ej",
  "key37": "BTBvoN2bewTwLadt7F7FGPMJx3bvnzEsNRpM75CUWcMRNox7SVKZU88UHWDePyqjpeEgjPNCEeRGQwsZJ57cbYE",
  "key38": "3omkA9zYA4RuoZB2zfPQqPE9EL3zobxocJ7vnBR1UErxRShoe81U4Hmu8Rh9oAQ6boCxZLY8bMaVJwU23HkLCDAF",
  "key39": "UKzUsfkBTDB91Hzy11ot1xJHHajGR1Y3sW2y2eMJunSqUtVEttYTNERyFMxLbgpizz5pPfQykA4Wy9tSfUFmyKH"
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
