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
    "2hApfHbyz72zxAygn93yi9wtx5Rkz3SsdYUAHNP4moSYoHtww38VfySWMpzxVD7oyDxsMrY4q4CZGT7miDnonwXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ec14NbPW2TGGeKYTUCxYVmYJBadumidHjfpzW9jnwEaJ3zQaqu1EjePzvaQY2UxVHUghbr95KUwpZcHHPNA7y7w",
  "key1": "4WgaVGde167z2MNdih1pm27tU4GdbgTSFvBPLAsizbT2wAXySsooszR9uwfKb1qejHtF9AZdaCBuM1RwNRH9Zpxt",
  "key2": "367e52Z1uwCjCJDzVhknNR1eARXmn6mMoXKRYwcr8RrfFKr68yLRycYn1reEc9oS9FT8tktsLDP9bXUxXTxHLh9C",
  "key3": "58BvabKxeyE9HtwTGKz4ZKggZu1a9sCetf322kF8YKY8B5S3LGGTu5TZBcQbyfV83mxNn4eWrMZuuJ9GAV7rkhHb",
  "key4": "MRBsZ11vCeopZ2yWAWnZmqGT7o8P5EL92uioaN2vdPZiHm6FHKA88mjYx9zuL9zkAhDw8xyhrEgj4JjquB2k4KK",
  "key5": "4YxvyeU7fXSvjDQzTvQwJwd9924BteMR9BhjPdqsn4TopUjsfPFiQ4iwfYgT79KzAhMgFK5gsgciFg8C5LY8a1Ys",
  "key6": "24TX4AsuUeyquhxi2EFXb77c64qZ8eiYH2igeniBTR4MJQSGWQbMufvJjZqixyHhrABAD4MAPgcn9MEG3uTX4skE",
  "key7": "3ShiLM4CVyuPELH2btL4fvwmjBPRua1C4bFYMjCWcHtN2C6mShmo8gxANuMBFgaj5PwTMWkoCF7Tq5Y8cE95SZ1z",
  "key8": "5DMTED6goDWLfCYBT2fwZDnUmEvsVJsXJJVAbiTHdKh2aDmqW3Fidn6siwRARTx3kKzEiPNGYDgMyexkt93hKrsZ",
  "key9": "4wiVyQ6iM2hesJVevkBHg8yLdsERtkZricEeG16ET4eeJAVek6gD3TUcRqwKMhTCknYZ2FowXdAm1UkYm6wmmjtL",
  "key10": "4bNHMKrJ3vVA892zBDHVbasESVzvthRFE9Pg86WnmKgaFxb9867Qz2iNswb5tVJ6dPnMyxADTNNmaqS7dWsd3G8g",
  "key11": "5x9Spc5JTNUefATTcBVi7gDvui7eRWYMH2vZXb1kcAtgC1ZDHStC5cnZKYwoudMwyk5ZVztPqqYzJCNvmgxPGUBq",
  "key12": "38CdtKTGLrg8Dw7rJ3mQuaAN6QX8MU4SHbKS6unSNYiN8T91dvVwTzHSd4T3xtcpyTmbgXfRpdRXsnRzaKhkxZDE",
  "key13": "99KjQSoCLw3jKZrwkCgnJF7cwzSVsGBHCyhcZ1iN9x9TctnENmAVRxEvSfjC6qtcnz8kcMd5S1jwtpYTAcU76bQ",
  "key14": "5ynNUaQxxWJbpAYkuPaEwJrjpsRgLng1CkzFeJHPDqCthuBytLZsYpmUBaCUcoBDvabrfQmtVzaeWVajaH6MuAsN",
  "key15": "4pVo1zkJUQhAVhQemXDFny4VVfKuZmP9WHVwhBnEE1WNS2HHYA2TU4s1m1gXH3ASWAwgziaC3vfD8dq7tS389VVE",
  "key16": "468oVMXa5m1qh8wWfmmMoqBWBrpZabVgPf6VEUmdC3uAJJm4Yp9HYCQBLqKKwx2ccwa8KhNmVfoa8Zbui2odUtZY",
  "key17": "4yKnK3eRir3SS7CtbSJgKjHxWtN2ZAFd3Xfoyx3EkuzT9UQvhKZGxEAa6Se9RmaniMBM9k1VCtYv4szAkxwM42NJ",
  "key18": "jSKAZEeFjE1enAB1SU8YvDuYSRsFBaUQzU2dDHA66itvsA7pUjNzEG9QBM4MuUvJt7ePXvLQVJdBafonb53ZwYX",
  "key19": "4R2mL5puiHBcdyJLMtu6Josp7simRQNazrPpGt8Cf1PdDVxjz1i4xvcBfto5dRQWHhHw3mJNar4TDQvrj3vxviP9",
  "key20": "2GkEzXkfejy6NJAv3wX9XcpdxaF48CgJe3XFGQpGaxL6i3Zm3cqU4RYwkSgrvP2pUZJ74koSdrBbjTzpfT4x8BjN",
  "key21": "5MuYWyw613LzhZPPsmtrmjKjLLC9KTo2tq6m1czfT2JKvETLaBx8FCqdNh9YK1GEym9EmiqHUBb6cUX8H7XNgjQ7",
  "key22": "2xWJpQEwXQ6bMjLFGqxC6SF4gWCKFtqcxrPuY96YMfXmfA6DB2QCrn7bx3ky6A9Zq96UTcSWtrp1hyPSoubmJ5Eb",
  "key23": "4P1mTkDJu3BD3U6b9PpxPW8ebL35HXg3tFymrCewB1tXniUaxVmJSy23CJ8YESuvL18dUAw3NZr9Z4qRQ1ct3FYw",
  "key24": "2A2xa6P8k2UMAU9r8EzRFjHNbBqgA6AXMGi1sHuDdUjqJLoZpTBxqmti8jQoySpWdAzyMibQuPBsJjGUwFN9sqti",
  "key25": "2CQ2UXLM91ggiNAvd1dLCKejvS7xRAW29VzhpGJ7e4pFwDK4JUAYYjAYVYaNCJuQsM1udnhuogZZvSNjJJmVnPud",
  "key26": "SHrTdWGmKwvjfoSc14hLVUJXgYLCM97S68npJnG27MFjex4xrDhTrnnrHzY44GGF5A6DQcJtyM3uymjCwJGxd5d",
  "key27": "2dvFc9jRYaeW6grfTx1MyuQwss2Ptvc5z7kQkyU1TXK3dPjo75uP61EJpifRkuSRcoPdTXwFURrWh2HrnfELkYRy",
  "key28": "4ofxRvH8BJQrKfgk8VdN9ZpB36fuJ9we8dcowtian4ziLQZqZQTpZugUZeCC5tADinLQW5BJwyWURxDFH6yAUrdW",
  "key29": "4dN6DggDgJvfeZGtgLWEnAqem2xbEgYMBebdojFcXh4CcYMm7nuajhV1V9BWXeTgKhoBbwZbrcUmMLN4JCqjZc5R",
  "key30": "5bqmWMRkmDc4gsuzWYbZ1wDizvyDapTQF9UevXbbcuyaFZBe5xpGvo3tWA9GAQ5niA2VS1acrMUJuJ7YrKeGkkGP",
  "key31": "4oa3Do7xEsTo649MhxucQ2KKrW1irTmkg41Dri6JD5BnUGZqGvvyWMkPt34vVTye6My3T1TUK7M58roukVuNM9XN",
  "key32": "qmP4NEyebc3KpY4odSs5vo5LgjHFjSpcoNjjAmrw8F9ao9K9iBdifTVDmfsgBuMFo8CxvrjjJVuGPifouAVLuvq",
  "key33": "4BXMXSNHtcjK6pPMaREXRToHyLkaTqFi2zL8DsNrxmEgFi5QK4yRenk3nvGTCfPohvQxEVxSs8JbVs2pZavt2Tti",
  "key34": "44sGashtdGpfx7cFLpohm9pSqL8KyPqnAhbENgq4suGuJpaBoh63RfDgRyFBaq8iMKjf1K7DXR3qftBkPJLPC5gN",
  "key35": "4FMgEY3xSKkJtJKaKUogtcq2bCwvmBPh4WT1V46ozEqGyz1n4CdTrVinUhLwM6kNvh93YQVJbJiLQj25Wat5CB9K",
  "key36": "4oerYQp4iYaAaZ3LQD8XwjPCSPenuioXejU7vnsZczitcpyyTJ1DxUxrdoeHnw6sGSEg5rdnocddNS4XaacpLo3W",
  "key37": "4voo9qt93YpZRCWv28XK5x2784qRvAiT4CZZfRr4ZGtm8c4bERWQZ8XttVaw2ga5ZKHa9CVm6VDpZNNoLemQhisC",
  "key38": "2c8K3iX39bnJE97noqcmdXHQp9BtX2dtbkEpQZbQteh1YLaf2ivVUpgYf7fA6iW7x14Jy1eHmUctVvU895ZLFQwr",
  "key39": "54Se7AitMzWXxkoZ7Q9RGFvFHZb6BoU3Qp3MQeNeoB3WHd5NnV8E5oZTSQ6znRXVjXWcxHLHuG7QuZkGDkmtRSBL",
  "key40": "2qexVSP1A5nWBmK6JJuVb4DiCpVSF5JaMKnBGqRmve76wtM4NnxPPokHq2PE2SkstShBoq2GuXA4vqU4Pv9URRpC",
  "key41": "5QDJ97zXn8Bizm2h1FBvhEvSb999dvVrQA1cipHAQjzKzuD5HGRsYPWd8x49YZMYdB1rraxoptsh7MtQN2BLAwne",
  "key42": "4gWGsLu3MuG8aLQiUqwzZAhg5ehbMrfUvYL8yFRhAFoU92JMyLyXV3pKmVxc4DUgZvTSpGtzFXuRmNt7Ujy1yoJb",
  "key43": "3BfznteTJA73SzY2BzfRJDPkPPEkbJfttn9HBCp4tNm3i6MXKaSYqpzTmRh5PBdH3kc6hpMmFtMx4i5tLdVW1Nbb",
  "key44": "iRfXDqJz3LVB44MFfQ2qhiQV7d8jRzy1MTLmYzNFXpwLiShwfn4QdKpbKgsWnX82qtLoJPJKjRAKEyFvBMnf9ZP",
  "key45": "2Bbp5jVa7Qcp4tizZmn15ZBZmDQNJ6vGbBecma3ko57AQaBatjnHXSKv1JCDFiVw8Sr8NPpYN9BZXCoi8iaDp472"
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
