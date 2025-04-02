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
    "3EUG3DqbYZ3b7ms43CA8SiQumWWJzr7xUSmpcRLnrMv47DL54ZoE6MF1YKhmyfmfSesG4NNPbSAtGnAD14ebsUNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R2CY12P8jcgumBD5acYMrGrFGRxmmV84iHVF4Jge8tmasUkLDJskuEWJciqp5ue8WaVBTrv5VmtLXKjsaRtNnHW",
  "key1": "2oTDWQir8nprK6RXJqmf8FGh5foz7iDhLQamohNqWSZpSz4n23XEhweAH38ZeobYD9V4JAEcTUFU4dDbv31ZCJGr",
  "key2": "3vGjrCZYyVRgUHRzXbzJqCoLkY2AVZggKE8hmP339HzNbmrwh5qXTfBZiTTc5mSGi1kmfPGdRphHeWo9x1hQEA6g",
  "key3": "28e6Bok1JFfJJfjFCANDZEMZgJ4BmtSiVpaAppodXHBnYNANjFjyXv6LVtaTfBj4UjsLPNxnN2pjkEfrbABDZXdq",
  "key4": "61QX7wVZsbCFKfFyNj1ukFMSv77wu8CWxtBkuq3fdUNjgSc8VXBFExgYk1F6qY2rSWjgQtMCFy9c8Bn6Auyni1i5",
  "key5": "JPNA3cTp2Gf6D1cDAAknB4CXkQBYWWTpeukDY1QZoABFi4UUzmT6nY6WoKS2XKjtumjsi4gEwfnG79EtD5JnACx",
  "key6": "3diRjMrmYJthCb112gas2c2bm6VC1tFgo2pVQBsX7LCqsSLW8QdEcop9SvQfQh62V3pjjTsJBMpr53qm9RBJs8Hj",
  "key7": "DyVJBCK5yhRTTvB93AigrxpYP1d82qoq949wncqwYUeo5c2Q4ikkyJB2hcrGwH6g8P4eYYixUqxQwXgihCWh4Ak",
  "key8": "63jHN1iqhkCeVN3DGniP4tWtEAVip9CWbQooZrv7EAMX3Cy7dZG7eqUAoCfnCCHC4Mz1xjLcAHU8uGACStepz25Z",
  "key9": "LztuLzsRvnFKvD9DsDBrXzV8dw1dEt3Ce3m572qkDV8DG6MwdNAfGjoyr6HigQ1Sje1hihdbvnJSgjDxVE7ZQqE",
  "key10": "5DFBnRKPaiPfCGc9zWk6zBndVen33n1aEDmbwebjP3RZnyw8rEV3pMuep7REU1q16iWmiK2PbVu7WCoRt3CKZ1dH",
  "key11": "41X8dEZQbWVUDBQ6nLPDjcnxRS1kGfKVKsbztcchMzfMMzBzk6B5nAJG1FqFZUp6zFNVDyKSk6s7iknRXzbiPphe",
  "key12": "3S6MaCqd5pj5gWbcZxtXyQWjZXEn7wMtznDStqNNYhZ51psnAM6iHaQmjWEV2AdRuHioRBxDFvrJQCx3uVq99rbU",
  "key13": "UdZ3GvG5PD4YigyKWjSUiFMLLfebQcnWg53QJKHLUazi7tvNmeSeZDa7WWPZU8f5DAWK1jMLLrSLL8Tvm5zkP1S",
  "key14": "3CgdyEG6Kh2VfdXBqGzNeLn5V4fZnqq9dZ5EXXmFYbqQXfYx3Mur49QvtgQY1AMESQzuyGSVJZVDK4YLpLMswwUV",
  "key15": "4zyydMVmekXYdiGDjT215Cepg2UGQvsvwarNPgaaHzF3nxGT58yvYj2C2TCmMtZTHjptUX7wM4jSLexuFCC7oDb1",
  "key16": "ZccR4ddb5J2ESYLSgUvPe5VaACFBYSauRFQYaQsc4YbH4o22a98oCiycpXzgBbFbehCAZGU6J8uqv2HSHG3mFtB",
  "key17": "3NVdNbCK2ZbDb9TkYu3gDstXWydPK2Y4mjzY1oubNoRmTMAenhVCqD3vjX62kLr6atmT9x54rtMcRNL1RamY38Uh",
  "key18": "2nqjFTqUQg1gVpRtHrncKsph6eRCPraBouCbM7iWgGe4fPDpLMAdWio4S9Nyux5ktbcki9PWXac1R1Z8VqVEpwPh",
  "key19": "1wpdQr8ExVsRFa8ggNBp4FrKuFSrKqMJPRnEv4SjH1iSpbnYhGWXPSzHLkezV4QD4eGMfHgZrURJs7mdjdBCrWx",
  "key20": "2vV1trpAAGzaLr8HUNfhxAKm9J6AnZbvBtFnTFgkDwTmVq2yiL51bhdEZMzdbTBMSFd1pHTmNTEgPvozDZw6kbDC",
  "key21": "4VK46Bp6xH2Au7URamLjfkfG4FgkXgQaMhzGqRDgPU9Wjm4Pa86hRfaDfCVi2njrS8sb2dwCbVabHuf1LoB41ZVH",
  "key22": "3Tp28AJLP1dQQxyW49yrXgrG6YGPDvkFJQbYRe675SQv3ijjLvfSU6yRcuAmFtSxY2zjhb8aU6rbDoy3rXW9KN7y",
  "key23": "3eKyMf6jHo9MpDUMvt3DA3PfNoHKBapJgXjEDETPYCxyxe7UmUNPUQMQGumoc9TFLQuLWysENVCBuYgMqFjikSyK",
  "key24": "42birHrc8T7muTWHfGg5kfXbMyyXTanxELWonBL5ejiyE54k2CjzNyokvqRjLgc8J3PaF59ksmedTaP6kMnyjCtr",
  "key25": "3NgwvUoeaZUzMcrmmWLYwB5V3fqRAbaaVeyfxibo3YPTnVmZ65AR9584oo8Q7swGKDeqA4XkjBj5qNTcivNyHbvt",
  "key26": "4x6WgKAKjKSxmAz9TGyZLyDDVdRG7epTZdjRhWQHbHaNYBdN1UFN9e971yt11g49Ju5dRTbwUvpWkg8ovE2KJxTm",
  "key27": "4D5NEXSDufeV71URFcKGC61ZV5vbAiwyK5fmtBbMpXvVMd95xJnVZfLPyzG2rQ5sbR6Jt52K1acLsiEvkPZCtq1t",
  "key28": "43Kxn2qXpQREJQUY4R7YfpupJuvMSb2mgmJfyoH72mGiMULdDUTTU2STAnFwcAjVdr2Gudy88Hgu7ir7UchiaRp8",
  "key29": "36Fjc6jguJiawkuV9o7jMQqYqJWAXFSxNsciD2bNxZygrwC7VSD4fj13gbZmQ1uPmAxm8iGUBmX4sV5H6Y8jbkcu",
  "key30": "4XGZ7qfbjnhiqth2K72GrakvseRfT5SdMPyxNQByhp8XxSGGepPtD2jdaC2NZiWbg97BUG88j9htUNZXzkVyxbha",
  "key31": "3jyib82wigcYr1nQeWHTww4UoTQDwaMgQA7UFLkh6m9bcEMw7SEsdJ4JQX91BkoJMnXtGrTuoA81EPUSbkVR7wps",
  "key32": "2bH9HpdSym7RvgP3JsRyniQcZvZ5s6YeX7jt3SY7hwFUNFRSt4brb3qruHJoDBopHFo4XCUYcRzikJuZKQbw5xSm",
  "key33": "3SYuVrJuR2VSQxzF13XTHnytHRycVVb2zfeJAo6uWdPrV7Y2vRYsjL56zEPjWtNjN6e7v2T44pMfC8B8nqm5vKa1",
  "key34": "2Wfz42eLNo74xxUjstgFKDzrKQCyW1iXoz6pdsNGitQGWuBtyxXmSpMnep218GABTm9rM4csNN3e1F6RiVRSUFdn",
  "key35": "61MoWhQ9fHujAhVPqmJwVsvfARGx1kbSTuxigDr1najyRysMchEbZMDoi3iRGXZGobHz1xHR63nDroq37sVP1rUM",
  "key36": "nZk2niiRS7DPMTNVVfGNC1a1QzqGoryAFQaTbD9sjrZXWvVTAEB7ccQdivG4ytZ6Yn9uMjz4gNb7Lk44HdPA8L9",
  "key37": "34Cb7bYG4NXzj587evAVvs3eN7smaFvpAKiDKgFSmB53mYyD4ezDdiSVL4Z9mC21AHwWjXBpqkHawSX9UBBcW4sK",
  "key38": "5rdQWGcWqfvkhqPngW7A6L9mDBqMF3fsP36LbMDLS2ksTSQiAiv7DPG9x3ox4x7duRrmV3CigJcWn4tRMfyPSBTD"
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
