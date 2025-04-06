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
    "2pvYUHot41FBZEmxwy2TfuMDhkomZSv7i22XvzrpQjSUDC3DyHbpbvp2HdJandyKcTjZTP2uLNev5kJC8dmVc4xm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FwjRVGFEn28XS8up82ocJve6NGCPrgkqcYbh5nheP4j461Ggrvgd2KpTvRHa94H4FgY3d19qaXCyEKAohuvxfej",
  "key1": "3JR8XfEWGM5b21S85BJDBcptLtcKYbWkcTugAeCUPTbLnEjnA2wxigRC2x2zr2H317mxHdGsDPF6QyMk9qNuakAZ",
  "key2": "51Lq7fApVm1gN9qMdEQPLammwrwCVUfXHGVsEser9x3MWviYG4133ciB1BNHRd6vnGCtA2vkAwaE5VvPEpzgqBqg",
  "key3": "5cNqQVjnWRjipZioJSQBrkyfVjy2TuohebMe51brvgG8Xj7JMWtkd5JWQvewiWm2s42eKdKa2NJhun94c5AMQttS",
  "key4": "2LUfx5umZvoBoUMrGUD3Jjmoq3SD5k8J8xCXFsuKXpQLmHdvjTcuPEm73saSVcTjLFA8Wy9hbQ2m6z61CMspVML6",
  "key5": "MYm9Poa387ZCbQ1Ua82t465F5aGKBET6c1M2Tq3G6JwwZeYc5qfqDjwZmn64uSi6CEZqHhTd3gkD8iYyRUahqPJ",
  "key6": "9fapVYc3gRktsEsChq7KFyZU3f8JnHngoDJfHworQCAKpvZoLAH3e6d54QtW4CGED8JsdBAeeksggZvU4EBcRc2",
  "key7": "5vuHoVaGJ8dPe9U1cxMWDHHFE6XFKRHC1AsqppgwkoDqXBNWSe4N4KLvsyy59TSrLJTT1cfhDFFM2Lapg8xZe6iV",
  "key8": "5xRxSGVtaN4BoyEVg9fT64H6MxcQxXB8yMzGfTVMiaFdbpKmRMxGYwsZXcWne3skFtKNBmhzu8SXkCEZignbU6M6",
  "key9": "5n8Ap7Y4FYBGQVqNPHaV5R56ueg93UbW1vQQSfS5ymCmhJ4CNbUzxExbwkEAyhMJqdYQZ9ADBnKdmBVk9QPTiCKx",
  "key10": "5xqFRzQCzM3ugyRCdwcfKVeJBdccawwFZ9oZwM6RK1tLA4j6YhLUrS7An8eNJKhq9jSQwvL67yAtsoc5Q5wX6cx6",
  "key11": "4yRgkPcCYxu6KdGgczUGgKvEenCCxyZ1aiMXMtkNfoY4Lxfx4QxK8Bg6hJ6zZTU97mvJg3JDjFMmCm82S97mkjCQ",
  "key12": "636jfnH4Q8kNC5VPXijCoTrUkTopqVfwvPU2A3oa57QW4egijSLQVQwLXuyV9Pdy3VUPrpygbqTCGUDhuLw1AWzG",
  "key13": "2QETBUKCAXzpSZuTSM917QKR6P5i8gbSRZ6oEo5B4kGWkFVUXfXBqZuLXUoJh8SG1JJimWg66MfDryuN2t6idkMk",
  "key14": "58JsVhnDJ6tbCQBDqTdXai4irZzzLhHVvczWBSaUg9d6ZZd8ECxY6Ae49UTccq9tRciT36hvYbGQH3YR2mEu8ttS",
  "key15": "4AA5LZriBEzZhQQKbZhUWWPeSDj2Gx597o8c4Y6NbndL289SLyMieQgDC4xzFRvtCosihC1cWqChmBL1utvh9FWb",
  "key16": "3BfVEBPRECKKAfXuK1iWocgzWuFBCJGqyS4PTtnnygyHp7xp3cjLUMCq7K1n52pK923Xq4urDNqobdeN2jUMsVwN",
  "key17": "54hLSvsWzNNgToidy6E1B6E1V2VFBf98FUeQz7VLjvgmYbgWY8CdBApRqh4Te76EtZsq4jgkD3uMVCxEXJN4hoCD",
  "key18": "49LNkHKBafzaP6LfrtpjnRk8KNmc3A4bSvsDpzhe25CXTXu7N8gEVo4XSoUj9rrz6oZV38BWtwyHCXxEzYdeNPQd",
  "key19": "36WUAJdeoPMkxsbdnmSzmiaDPVnn5aJiBCXG8X9ewDpqyduEdJ4gUj5Btd2ovMncRrV8zYE29wvKyKb1CdZNJY1u",
  "key20": "An4mZm5p6pdqL8aG37eLSU1GxrHpBaiJ4gNH3SZUkvE79SQc2JM3z9YNa8fhBfeCC6TCThNgE9RQ8vPm2EGpYTb",
  "key21": "3BjY3B3k8u8LSJG52vtk9HiEcvdyESXz2WJKBgvSKNTNuNV3PEJUWk69UuhhQBHEBB8bjcNux1VdkE5eaz6rQBWu",
  "key22": "4s7gCo2Jwaubyv7KsgocGwz7fcqV3WymSRL1FhQhDr2XUp5wZje9gzhktCVAaRuxsjB7bmQha3tU79eGTRPoNCfP",
  "key23": "2Z9g6VSvrZ5udFT2VhcMG2dKikijCByR3sChZ8EGGHbcxLWPTtriao3MWBZ1gnySyT7mzipfDwbVFXd7TePKJdjE",
  "key24": "59bvrthpz6tTs37dNXaffXH3R1sGHZVmuavFyQ4VH1DiTY3MyAgZcUAfJXGu4fLVzmE8FpspST7xpwzZ19HzvDmV",
  "key25": "asmzjsE4eiY5Twpq8fnaMUnqs6dHh1CKhhMHHvADEVnhXCqUXX1tfFDGiV1RUAVyjzx6CKgmWg5ZrWuDcc7YkfF",
  "key26": "4g4t3oPPrFbFfhLNFHfozKkusHcUnGDXJ8tCCTiTQwKGJzovwEXuJVBUsmK9UQdU2VXUCiHFrFVF1uSUrHonYoFC",
  "key27": "4M4kNsaZpPUTnm8mgHxkN6JTTYyc3qejsVCC4gx3q7HCophcWEkhVeQFm9iD8qdHND6H9GP9C5HXYsEJzuHVD9fb",
  "key28": "2vHVws8jcq27uonBdQqMc73tgrM3UhbCsf4b9fB8VfgZrem88K55kVjR2FFJw6aCkStdHbydZ8b89smdHYNChRc",
  "key29": "2iVv6tWeBfEXMdcXgeXXFY2iqRtp2ugYxwCaET5oKGp3Mv2EMSvU9Vq4YY6re2Kz8T4jqGXpywdG3woypnRRsmsn",
  "key30": "R1Jc33Q8ci4oeoGhr9eTKYAwFRGmwdqkuWGWiA4oHkhHfJ7tRGsXxfoxnyUFkNDjU2N6oy4ijR7ZHMCmUUFzXru",
  "key31": "m7sE451vjwZc9ShPky9BYC9nEDuKUio9umhERetSregrad99nNGfyVsWat66gEsHdWiobWUZCLkmHN5wHtmBGNT",
  "key32": "3eEHE52yF5Tq32DAYow5cBCY6Kzc6LC1pCK1PpBrSXYw8Vbi5bmuzedEv3H5jxsASDxdPxZuE3oJ2LsVcDPVijKe",
  "key33": "2EznPwz381JhQDFqz5GJSqgaN9ddoa6nV3F4bxgX4jxZkMsK4CnfY4F28QKZ75uokTfm76WYJ61Tuj3rRg1cK37t",
  "key34": "5sxKAMJ6FQGg9YYNfy2joyTdF8vQSKsSCaaE1dcbjL2ABKsz3r59SLzoqaj1MujMPMEV8GBVJhA5uDm92oV8yvRf",
  "key35": "8jBXPLN3irpMcvu9zvLFtZG4yczEukK111XD35MXDog3BGtYS9F6ZPCS6uBTC5XFBbv4EBbaMd9L57cPVLNUJ3n",
  "key36": "3rUgCHccPpuJVawHUqgmHi6C5WCewQTXTx8xrobYFRdSoHFhWo9igQfBJ4Cjype8rwQ85tArwneAWQbSppqj638V",
  "key37": "55C5DmSsu4yLi1tE5RV1AgYes3mgwyfATPJUEjG74LmmX65AhctSrfnfESsjp6aooJPoe8uus1mkNvTdv8uP873b",
  "key38": "3fj1RgyKXBugtssxti3LEsYmaRztsNt2TmHXciCEpWAduLbrDiYT8LoMETPJSeNZtE6h22EBFhCTmTy9BvidXZRh"
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
