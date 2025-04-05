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
    "4jxSFkd2Vk4ELpaTVqgCkUS9PkZVL1S56fagGsjvR9owKSRBzSL9kFBHo1Ci99JaRCFsYWKJWcUMZSDjYpULfWSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sqBT1L9YF1wwcRjRkaDiVQmJ6YFWijxcy5frFoFYK324z6tDJSay1sFMTJyDEhQFuySSNt8xP4LGS8L61y61gLS",
  "key1": "3VQdDfsJER6bFt5voP8WkYVdULKRTbQovYtfvTvPHm7uBBqkknovcPHMimXHmQ9tmWPz4abuWQBAWJBFibX3zAmP",
  "key2": "5AcrdTjNuEKwTYgKo53SE9ouBia1jMKmC9QkCcWGXZuLRQ5WSRSEMkSshccvb3VS9NvfZPr4iqUiSMajWmDX4jzL",
  "key3": "r7pwrLaESAPv9uuj3pXNZstVAXDmng7SsEKa3x1V4pAH3GrD3a8eKWNbUwcom2pe7nYwzpJ6HVxVnpCsGxBGKrN",
  "key4": "52bu5ixNr3pBpoXsPeecQX8YSrbQj5rEeN1hgJeFCt76RgLzCvigAtxWxAqFNitvQyNzgTUJ8Zd5baWuFTLRrqxF",
  "key5": "2no8an4DEgfv45GqQatFkncA8HpcmeoFWvmPzUxXVk6mDhLAjg1JGdq9KZfzECyYibmegGddbNRMpmqzhXBiUprS",
  "key6": "4zUKhRND6QuYgAfsNMHWX8TY4gScuTYrajtgBtXpNyN1htaqEJqHAvjb7mXggHZGeNqxBP4FYi2EAWngiY4k4cp5",
  "key7": "4CBPo9faw6bYYhpVTYQ8UuePqMW7xNHqqqvLpaaH4UYku7k5SrQjWzQVJWk4ENTdRasvPv2FdtchFTPJ9jJ7Jw3N",
  "key8": "2uhQmpvrXbDbHeNk4ghkE31DEJr6fGCXJGAQiWRYLTRjSBnRRDYuo9Lkq3WEGwAhQnMibTQvVKeTzS528cZFw8pg",
  "key9": "4v8h89tLX1Q9j94nRDHFzYMNFZpi1BAWH38dkduUdXu5DoVHT26ZHwPoBAUYq9gQSTXnteMF8qFtPpjt84iZRBB7",
  "key10": "3q6658XihpVnB4bbeHSuSsiLtRxpqCuwuB3VHjiLLy8bLMavk91RVfaZV8JXvrprGPbuV1Vte3jKth7NR637SzaA",
  "key11": "42UJZ2uZ5Aard6YGYqogXT2rn51wY5iwVcwzcK8A1tu9QKfARvQ7917METPQpGGp33iYiR43T5ExoZbMigpCKDje",
  "key12": "2LdFsTzMcrKtPVXjzvrhA7MSDMFpCTYRtraAmJzXDQRfVrqpNz3q9gEDu5LTc2tzHVBisaeZqVdJ7aTbzvBLJnoS",
  "key13": "2jadBzSFUEHWeemeNozJ4HWXQnRJwfmyFEW685mtyPB61Y9zUpM3T5R46aJv1ELaiDBD6LnpQ15Lo3wAQ4nLsJxT",
  "key14": "24MdsgAqWG4poFMVgWeoUUnQgZgx8q1NMBK345w9FGMU195PwNmYfWjnBbvtyAZZw9wDJBtva4UyF2vfeGuNQL8x",
  "key15": "4VLmmnuLBqPbvb9VFnLdrUkDEwVXBuS93t69km7fC4zkDTofBHVEU93HaFeThADxhT9ZZ5N2VgD1tzCtwL5hYCER",
  "key16": "Xcp4eyXEe8UAmLNFsSjmXq5YyMCS2S7Z6qwQyzfhHEqD8teDn1ESqdc948NEP2eUKMDRxgdMUGbVreW37TvqEsn",
  "key17": "3gfdjBkKaFLrPfvN13QiK88gkidjLqyJmSBz7CxXuCSYpjYUM4BtJvCZeqrAXDLB3tS4dURLh1ztC3F6NesYKnKx",
  "key18": "4FznXL7eEowVB9bYeB9NGG9TnpggXStqVBbLUFYi5YGK2DgAYLiwyGh8PwXv41TeiKGFgr76fMWfTmNYTY98ksmu",
  "key19": "XPNnn2Wg3jt51bErpKyJJgqNFXxaWQGTgygnmRfbUFNv2kQWtVwEZ1wEupGvvU3rwaute9ktgSRnAdQdwm9nuR5",
  "key20": "2v9BDVF89WSehZFFtsnaxxXo4gPR3RYPGcmqS7h1JL3KbuRX2pw7jkgVZcndeHM9ySrubLUZvG2t6LY5WcNMVfrP",
  "key21": "23jNVJrV8bEjC4PkMse5KS4gQaho2NCByXyqnVcXLmxza9uQSF3sDe99KqQoG51UotMasAj4vmsN9AfVjQiqLG7U",
  "key22": "54m7QSFr3secmDQjeUZje8TaVKFnGzn4EmQTbTGovbyu6ZmT6ejKNcykTmog92uGpm8seHGuqinPw3suverJETeQ",
  "key23": "7t2Nr3SXMZFKPkGLLkrbaoEQRACwGrAkerjY8PcBeLHiSXTgMcpuoByFk2qzUEYSLeyqFapLUxVG9WqyLNTZi2i",
  "key24": "3Qj4NC4qoVXXVkAiPqyw3VUZQPEziXCJXCXoTyvHV2jHoCNaZzpY1KYaoK3CF3WiCBCL55S9K6CWpQCYRSpNa3HW",
  "key25": "6569khMYdAeH5J1hMdpvUpf4a5PinzBtKZbWPDysK2V7yGwDvZvfZaUDVbVuBJwkU1J91tvDNAtj2zq2C2pAQPHG",
  "key26": "56yLA9ubdnBHQ7V43rBLnqf2CLT7oVMS6yxad6xXFwMEB2CsffDUcumFY5JDdNh37suu7aUBktg16R7oac3Ugiqv",
  "key27": "28vC43SSGYnDDKerquQ8oPaxFfyAkYvfdU8niDuJzPq8jCm71o7UcwKnwMcQG75TzxYu5wHt6h2a4mHSp93Ut4jd",
  "key28": "3w2W13NbuhsHZCqhcd4KPwYzjCGEW3r4TXKjwXmMpWCU3p7n622PZn5yrfeg82UaArBCSnsULeEVHxtwpbvWpJTL",
  "key29": "4ENV7DbcR4YALhX6J7otpBfmevEfvMBDzoAk4Fk48sp8TAbThe8axL7HwgFVGYjKEsyK67jhmmxaJNSjvhzXhVjS",
  "key30": "221M5s22SpMPb7wDnSwF1fij8y9Y5FeyWBNkBgrpDpu6LHaWptbfbxXDEeBRviTjv8ThBymBtyh26AkuwqcBsDsj",
  "key31": "4LmFfqRAXjZqARpb5f1BbmkryatLwYEBoGi1vV2SFZFgBXSVZ7JH6KYaiXB7DXifz7ashbxrtGg2va8nvWhfB8mj",
  "key32": "2AJksw1UyHau2vwZHyPxRZ8xQFrgqJWtPAQskrBHGMkv6JWGs2UrZtzGuMiwwCV7pKn8So62W9NcByc7ckCebQ1q",
  "key33": "GJupkFUpmZYrorM7Q6Aiv4xmYz4vGDUsLb3E7D7f3ix5ujtoGudcE7CgpWXCm1xCTpedhX7WftSoaffXJMFvU19",
  "key34": "3oxEaxCVsAqdzB45Rc67kZ4XMAt6vQvCjdaYZTsJL2NFHa1K4uHk3nAvLZyJEzr8ciaAonFY9Uu3U4V84MKgZxzi",
  "key35": "5PVw8myTmEf3pspr6qf2FQCCP1JMjh9AXstPqG84T8nTJ6ZVb68ijJGuLbsU14Q2BbZ79BqF2W6hpChcT4V9Ewos",
  "key36": "5ffieuQRtsrAGqTMV8D9KobZ4YsKYL6Ge1ZBiVRwgGNRndc6KTmaUW168VQidYiAQGJNsB3ACS5nUGWod6rndGAn",
  "key37": "4ihALHxtnpdnAZJ5eftknwALyfocSWnnEMavBf1i4va4KUswSXQkBnbS9njyrs6EYgUZWdFjzThMmKYDKTjxzDjP",
  "key38": "4316LWvaeYhpkS1QfYXampkcg98ZAvNYQifweVcEzrhJyR7RwksS3UmUzN5hc5pfn7zPr2tWUJyNkYvtNsBtZRQV",
  "key39": "TdvPbni7q37BgAwTBK9YG5xx2GsMNVwDbcqC2CpCyg2TQFyYGPa82tHD9ygc4zXEepANskdD8Ude5jYGbGNRsrd",
  "key40": "4qUF7rRZ4QexJRyGoib1Ddyoi9ZW71TTjZykP88ekvPqyM2PWY8JdzQZRMbzaUKKKqvV8RmCiL1Qt6fe86af4JNH",
  "key41": "2ZbWSRiWvPnHkrN984wStnoknxvL2o75WwYDgw4MfqDo2P5CKqdaaa2ooWsnv6eTGBDFTPYVyWb2yFnJJmAG14eJ",
  "key42": "53Py6iGzJS9YWdEByA6paimhNDyGgTcBC4vVeUbW2NnRBp7vGKUX9WGqBUp2HqGFPbo2x3Du29LXaHnygU92irok",
  "key43": "4As1qvPADQFZw7zfWA4rsT42D5qScH37xNogrF4QNUqXfZQUUStWrmrR6KWosH9fQGijXAc6LMGw7KDkjNrjm7VJ"
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
