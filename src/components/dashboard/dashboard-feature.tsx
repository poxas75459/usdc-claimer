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
    "qnDSgGEyVHGVAXoWNBwf33bTMPAchrWyaZggh1V7SERJQ99Y1V6shSW2jVKcMPr2h7YnYyHU99Ttr4YriP2DDLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sXJVweH536vhXp3C3nQMxzWyvXJFohg51LumVJrXXcmz67KSeXSKsvdsBuXgdLuN7h7F14BVUXHF88ypfBG1EHn",
  "key1": "3HU5erBp1jgP7evx96Q4SyDAXLnyJiEm8qyW4uafvSBZf3LNDgqn8MZvVGYEu37c7NNSDYHtPytMv9hWEjw2dx2X",
  "key2": "4YTvGNBGL4U3kga7ud2wjnXX56Ue6oVtAS2phLCaj8oefEYkpbVYtCRwLbzE8aFFnvAj2JGYB11tnpwq4SLx6mTQ",
  "key3": "3CE2eMUuQjoXePSc14ZvwnnVqFshsHpDRHeJxqDataGcMRxUuUPgh2r4hns6RLFXymvhW8uL1Te61LMHEZLsGLuN",
  "key4": "37WaS3ZzQoVWJRNgXEKwqmqntNxTH77F7Ry3kMuViTizZ8ganUNHQKwyQPiMJJ4VpbBYcw6KGKkdNsi336qJThY7",
  "key5": "4BbSVaVgSeaf7D4fHYwVzsXabSojhqcxhU84FM8Yz6c4aUKTaQeFMYxRp3Ev4aiRdHBS6hmtYR7cf9DFySJaJp1v",
  "key6": "3VUj5Usx362iiTgTWQH1uvZ8fzYk7WozurgSAdeUWTHnNyL3U3pGgd9JJq7nC3dhT3Myq4MGFJCd3Ry7mwasWVt4",
  "key7": "5tYncRYb4rg6cnrHkS3gZKPzpHkEapmEugszztEXJJwz8Q9x9FheK1y7kygKN1AnPWSUrCPiVYdZoT9fLK862pNP",
  "key8": "65yH4scsHChvMFWeUe4jmitsCKhKgHB4nLdyLAnCzqL9RYnyiMU2cnRpPdtbPBC43xJiKLUL32ENC9a5PoyA2qe1",
  "key9": "34JDoXZ5Y6uGxffvdGRUusFSdj7yKHADoVXCpaRj1stXeDMo1MFiVvAa3UPsg2hyvSq66uwV5yKED9B9zuaE8j6y",
  "key10": "48zm6y5MmB7M1fkt8fJkqNqLbSbf8gDzVWVcoiaZjFhinBs2CGPpcyMN5EXhJ7N7CSXQvfowb7TkkD1NuMpYxQLC",
  "key11": "RK9CWD9MPR52CLSqYh2KnVptwFNL1SQriPiJMoUtanGyRsGR4GbSPHADyJD8PLV7NCiLsyTESjobERyS4h5tPmX",
  "key12": "4YTGi9L6XCZd8N3Z4qmBQeFJ5rH364aBSi19qBbRgDT85i2w55SKntky7Zyv3tH7rKt54DNNCEsqQ9FdWS2zYocZ",
  "key13": "57B9PZsyrgKCdRorrpQfeNnBr5ev62AznagudNbGXrs6VwWp7RYx5v1xgVb9zFTMPjqMXshYFLCyVnSSUYbzVDEC",
  "key14": "2Z2cZaob2ZN6YMeCoB4xqCKLaWDq5q7imyjAUWtGQu4t9gbCQa7vRxuS8gLQ25iHjfo4cM4fFfXvaupP6aagtXjL",
  "key15": "5U2fhgRegdunmk8zaUN9Twi5k9EzvgNtFu876W3FEkZSJqmw7XEPPwCkssraF5Fa5MoxRBvAqPuKJzC6aGSQwBgC",
  "key16": "37N7mWkiT2DQGZ7bkLV2eK3EXFJPbXQSm1Eo5MY7fXU43t3ZpbHiTy398BDqzyFLAjrBWCo6aGfEtKZhYsTVRYV",
  "key17": "2QquyHy9AJLmfHKwHvy88Y52suU7J4iPGC355aQuy37wVy3HVLnFGL3hpTCVen14mJcvJLGumMhsGaQ49jjm7kpw",
  "key18": "59MLaoBEupWJQFjaZZ5UHNNQmTu3pwMd4ig8EP5CUC4YKCe33vVshS22Ai58Roypj2WaGSkJj26rXt49Q9MKRNUJ",
  "key19": "22DFzw4KZz9FPKcyKH4wjQZEscTzmcVkQa5SEYYgN32hEVZxYHenzRDBvhdtsTf4R7P9zh4JV1VuHf5nd9zYwqD1",
  "key20": "2sdh6JeLEhPetguHWdMWSS9fWKsF1hqSoG3ovvqJYYzn2DZ69LDQbNQAu3rPmef6pADmyBifETX2AJinzWWeaHTS",
  "key21": "vC6JmQ4Rp2fzxfRuDU28iZeTTaEXyixVLgvHHFQFRfzhAra8JkWHDVdJdbq2VeM7jkdpWWG9mJRBSzk2qvNeSGq",
  "key22": "3rmh2KwA2hXr94RRmGCaJWkhThCvLhbYtYHHjSuRGyLTLXAog2XzQrfSjAjPDuc411cpmSkyJFBmwdgiqtZdTKJB",
  "key23": "fa82gayEfVf1w7FVPA3gLrWDGXrLe11ajenfFgzYhyFqNcb4kZqds9JMTPo46YUZLe4whbAABZHhr6ADApqWHtC",
  "key24": "p3qXMq21UPZyUarjg9afoXB9hgmKCiDq7XmH4AMSqBuaemMUHzjijZN9ybpjmJMztavZfMsuhPrQvcUkXPLZrCv",
  "key25": "3h5keuSSYAJntZtd8SK8AdUbHvaQGMiT4nWFKBosYq1WTadSYmfx5hfAqJQAvnNvgbmGiyGmjaG5x9UZm13fPZfu",
  "key26": "51PayMyyw4CHiD1yddSdWny7o7DLo3ViiBHkvaapPVMqvuRe4Zco68JqMuUMpaQCQMDMJ7t3ruh35VaHqfAcq3hA",
  "key27": "24eBLye1VMWPZ9iWNkjwuUvD9C6WQXW9jERAc1odh9TyUCpAMHP5ffF6brBuy2YzE4pCLSivR4XHpmzH528cDtGy",
  "key28": "4CBySZCyFfdcn5QjdeGJkmgcp7isZheHXncmV7YYKwkNAfKeaxRrytfYGvrtVDd58CcFChdnb3Wxaf25ADthd8jt",
  "key29": "4vCH8qnvbecYJ9Ym363eN7TZF4sB4L1aQy5SaeLmUbru9VQ5CiTYyC8rwroe1yJHcZA727AZ3nyEkiQ9e5ooXvvg",
  "key30": "5YTLqx9aV8XiqCkCRz1hiaEMJgdJHavBhD5yQBTA3xTdAkudJcHUBcbzCy8uJb3MZkczC3odgfxjiyzQjLxpxApC",
  "key31": "67X5TxgeLExaUCbV89vUBdeqDoQfqLmdoXLXqtvHEAox5PtjX4mCszJrK94Li3wMerj7cYCjsWvHnpXvcZEzYacy",
  "key32": "RRzL4a7qRJ4hG3mek3Ra42GEmU72t3VVWTJHocdg82qzM1yAGRxb2oipp6ddEx9PCxnvGabKsVPDqpE8EHXHBuT",
  "key33": "5jTjUjFM34deCMGuWRpbh9fQYDNLAmXbFEJWshxDXN6ugZ7SiaoeyP2Ss2tPWRHoUjtmqAC4FTydKWnkFNGLyCVG",
  "key34": "4qLN9CCKKVe9XdS6riXHdyXaLVR6jU6PdzZuoHwpx6CUFtmTjxJdaqzm8dTMzstCwZqd4JXvsi3EDeTPJt749GUU",
  "key35": "4TzCYLt4FkXnxnT16i2m7Uw8V5SrW9R4BaSsWEKLpvN4otvBUj7SzUTsrw5VbQzobuPXu4vMDNkmLjtNLZEn2pAP",
  "key36": "4SUhHCqXidaeDvYk3jL5gXBr37jvoFdSuCaLqEcsBY3wyfzLik4PDNyfNWkL99PmnLPdL9jxfSWRzwPthr5F4pUw",
  "key37": "5BTLLsd38YZ3ueUqwJSynAV5XVKErdQXK25JAeGCSo6P8QHaxoiv6BUFhiF9LEGo7FCrtS3HkaxKnWXvfLJEQVXL",
  "key38": "3bXzaGNEMdU4TL1iCHw4vLr1xMPgEJzKG49uvuGav8vGHUFEzj3WiNVEhFiXchDuay6PyH8DLpDJk5SfrE1sXxC3",
  "key39": "2Tws7yWDrmwccpZSaY8iYTp57DYWGJJ6w9X2Rm7S1U1Dz8yFeuUbtNrYGKcz7ePNFeC9rikJdCXuNoLXmiSQYdCm",
  "key40": "2ghnkj6LauLjHcS3fDTnD6WUKEcVLvVfuK6hZnfqb4JBF881YrJfqufXBMBwNw9JMQSKexJickiCy2JCS2zT4S7X",
  "key41": "4xrESa32AeS14yTUBJEopSQ1cPe6jTAZkhqSjstviwqTfS87FdDoo1CXKTQnUB1NQn6YADtcSzBpXuUAXigqTBjK",
  "key42": "3VWLnQRKQEaaggf76XDQnLPK6gffE553eKsoj6DUMJUtz7auSvu6GUT3YMUyEgwxfFhbDDyDXBSYMndfBBrgrALu",
  "key43": "3oF9qnD5vQTADKhDrYvb7X3aKxQfCQNPe1kgJK79iAtTb6eAxgMmYpCPrE3qMBCiBHHLX3LuwevpycCpG2tbNd3e",
  "key44": "5UubgpEfZ2FBkR7tTphj8UxPE55fUN2tbYa5U5dXt2nARpgjbsgAkSmWhRZ2wZKRW7aPoZjZbWrXbVSTjDQBtdR9"
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
