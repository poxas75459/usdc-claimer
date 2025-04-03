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
    "ziMvnaj1pksmpkaGWeJbWGebwVZ3d6YJUVK9sBgj6SxvaDyCjQtVsTNNsdm1QhutMD7S4rptZHuhufvMFc43gdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xq7iWJBcnWwsSbjxo3bEHmkuBXGVW7mZSkRXJvEXMWwRyMc7jpusYa6bNAZ9JxYQFgC9XPHV8tAENKAeNtFENsY",
  "key1": "5icbetQdfYTU2B4sdGCp61CkvwJ5KbLgdLvbTzEVGA85XNpxjK1QNJ3wqjt34Qav7XDk8T3t63FEWzHxBmRVsaMe",
  "key2": "4DzZGwDv6f6Ywijop7Mv3UnYjTr5DeRx9qnpoM13zPLmCJ1Fw75R6EA7tdpY2Nnc7KnVyBCGimDLSC3iBi3FeQCu",
  "key3": "4JjEUofbex6S5cw23d3aoP3vy2Ven8Djv4RoEaPjvWGGmfftoJPAT9exJSRoC4yTSu4QMNzPvD66s5qMphun8aaj",
  "key4": "286wFMWSBHFLoTxyaWcVYm63NZNdKtmkgEGpxSz4hEFJvNVd6gLxjxBgM8XDJdZLibJiwkAFYCFrY53U9iLb7U6F",
  "key5": "52G3sz5WDoLTBfGyEh8C513jbvRXNGn1VnV7mrMPLupZXmYnXodcQ6dDFq3BAkQFsvyzDn1t2G7ov5fxtaUqZarE",
  "key6": "3gNnZKkHd5hp82fZ5dMJUQP6FVGtRJjP3mR9XfjmWdazjNEXFqSJXn8izVdaLmGiFHNwzhdz7CSYqHukyEGCUC6h",
  "key7": "2Du13LAFcuywEy8qa62uxdLWjBAijp2UbPjkGTjpbPYthcuP19c9Y5aWp62uVJzPSchoubKKHY6RYVNwBhgGdnBX",
  "key8": "4cAjKp7LpCotbuMyndzWTjeWZK8AALtTjZc9v8hvuSnYWPBYrnwSx2hHHGufknbua6kjkpWUwDos3PqS5eNVNKt8",
  "key9": "328PeUiHguRjKGbkdvRaenPMAvhgViagUX2MaNzVdfcDdzncDnB7jvPtqw6wDjGqoueri2v1R4mEuzbVPkru5LFg",
  "key10": "18tv6ybvbtjpx6ntNi7fmPah4f2P6Pq7hK52Z1sJ9P5xzeKe3J2Rj2ciuJ37j4dNtmredrCuDdVTc6W7sAXe1gW",
  "key11": "XtyS4VyjDXbzjGVxHL5DXijDZgY81ZUCx2tLCK58xJAMKFEQuNJKqaMeqofYpd1XNMPwgcFVDkcgqS42cQA514V",
  "key12": "UZQ9xT9NoDBeu96fpvyQ1QeGxPMwv66EDHDVLJtvPFwhQYwFRyGfG6adPrTnw5ZsuVyhaufTFxSQeH45e2ovm1Q",
  "key13": "5BYV4j6GCGJY3TKyTJ1qKPWKqdF1x9TozrcnmShRMg7LvdDSA15KG2bajy9enAozfmHz5KitrJ8tJ73sSTEvk5Nm",
  "key14": "5z4TFhLbvyXY1u5ZRrSMBHe9UGKcpPika2XPvr4hdpNXBHgEUbN36oaNDiF2m1YMNmjEtRCmUAMqjEGVtLgjZTNL",
  "key15": "5yqU4M3jPdDyy7aKVKQjbSZp64NMeHJyP3kkZ4QUfZ96WhdtriT6Uhuy63HXEKEBXjv96u91cCnNvHCENg7TMWuz",
  "key16": "X3bzu6ch8amLA2k1Fv94YW9mwCVWjhA5xgkb1r9ZxYZH8J3NUguJbppGMoYDmPtiuE81jjpmggnXZSoZama14yC",
  "key17": "je3ybMTxCu4ftHo2339ye9c2NRbctubmjLxCA7mZvyzTGTXxzq8sgLzbvVaJsmGk7nx56uQUByb8NdvPBBdmjxu",
  "key18": "66yDfmF4x3bA9s5DPGDywek6NioweiaDPM59xuQFwTXpu1tLzo63Biakwk46pgh6LSCvKSeZe6cXrU43CX2PB7Ui",
  "key19": "3N3Uaknrn79DRuKRwGMoYM1cX8ykS2i9XxsSKmqu9CgQMmAYDZsxLoPDq8ETxqQrM2pSyNudRUMtntMCmbLWwNYX",
  "key20": "SGVApaZGcMpsmRDTmsppLYwEF6eDsERj7Ge31X2DaNdm1GuCvSQt7xgtWcz7Gsk2LU3X1bxyHc8GWu5eorzCDnk",
  "key21": "4jCLHdBLifniSszKVpMuuKaZwKiYdboP9vT2aK69WRge7X9cwwKuMBXLxVMKMo6MP5DLbJiNEuVwduQhpmwTPT7n",
  "key22": "5YcqeTY8ApqxSvxBo3CmfyRhnnGA7WCA6V9cUbBgZdu6HAFhoyixgtigNbYYSTLUE615wwFKreP337zEYj1spPAH",
  "key23": "vqHiooiLR8MmsnZGRWVZfcQiVoexzvAw7aK2UPWUwkej3zZFC1jmAEwBb6ZwcbBGvxVWAoiiRg8JH6UdXegXaYp",
  "key24": "2xkDqJC4i8N9FQRsAofzM6uJ5jWo3j7k8suUvKx15etaSwfShuUvPsoVVtHnjpG7YeHogg3BMmSDmHgsQKRDbUbd",
  "key25": "2hEBgGKiEAN5wjbTUXLAdjeXFr4yuNUARkbU3B1tcFihpyW4kzo7wDyiwPF95Vi9Pp2MMLpYqmE1uLggbPzYJTWd",
  "key26": "4znRweWSvjDpP17qqcbGTywePbP6icKY7a7prt4Azek7ozfyscQXiC9XKrRa6vDzKDZAnESDxuQUFtEkTvfqr4Np",
  "key27": "668QdrfFvzUtgTDYn6aX13m5q9gK4ApUuwH185vAmKBhW8qJnQjLrQH1F64UvQ2XEGfen7D1MVJngucNKh9Sohpk",
  "key28": "2eqC3i53NsYBFFcmvTqtYDZaoeH9cxwq2PisKV63MewdHRfveH88q2vXeUHKJfCMvg3ZXLY9tSSDHXKJwwBgUuEt",
  "key29": "3eLuNybgTPPn7kzcsuF3QRyoNqVHvoqQMutaQWVozEnfiRGdrsM5pRX64zacQxA49P6W2KPEWaWUYJ2dM4HWcaHE",
  "key30": "3vHuXkvYQ73JHJ7A7iHn8zZjodE1rZ674JopaSndbowG8qNiYtyMgY1LkiG5CP3MT6Gz8X6zCbZ2pHURbMTTdirK",
  "key31": "368U4LW8fv16gfp6AfBozm86cy98CgJW4TbDvHRB9Tcs8aNS56CxHiGjbb3wra42pK6KzzkGjUaynzG5edYdEX8m",
  "key32": "2Zx1CDPvFDT75z5PA8ubrQJE1gPgrXrU8btesLQwN3TpBubZb95TGKoiVJrHGwabiHHXwLs3UTTufqeCTum4XC38",
  "key33": "rXnFj5KDnqtKqpKTSHsgt1DCejTKzxwNzHxm7h3Hw1z37jpPqgGTCNKE1oifQann57gwQe77gxtbbdZLut2269p",
  "key34": "kMary6A4voxuywyFko9mCwLod8dN9Bwgf7ukgLprxUjtaJMQoPuvQ8Zku92y1GHFadNWbY131uiab2KS5iiAcpQ",
  "key35": "4CbEYvbM4tPgpGYVhgtuPkbpaNr123mFtjgt3q83uVNj9bHLdXnfGTYZrB9qsn2UTvqUdmzvfA4un6ZsSUD45hz6",
  "key36": "5AJLvYHgvqoV37EUVTgqfhNiLJvoVSM7oKUQnQBTaic1CrnFiXDq2jxhprCkDtGN3UwiL8dseXt8ZuRFMW4S1Hdx",
  "key37": "474g7ywGgnVnMPgQ1pSXN3VERyKTdq6foAVP2UiKBqonGLCJ64iQ9LPDBQQN3T2PYkQHskKKhp4atsCJLwGczZPV"
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
