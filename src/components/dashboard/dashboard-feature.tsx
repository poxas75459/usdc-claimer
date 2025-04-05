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
    "Lo2Zukh1UgRiw98Qb83bmY7fTjywJFynaVnX6L15NTqvVKFtBBEnghcXKoR22w1TcWhcif1SQgvJ1ej2rortD9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46KrKdsVFfiJUTtKhxNqDzdb6BCYRdfcxYGyP3qXPbMZTA1MB47BoVaLjXf2FsXJ54Pungch8r5ipLAA96kCZFx8",
  "key1": "2JxepEMStF2Rk8mZThPukzGkczGnpGbM3YWtBPD59ASRh1pUge13iyVbU4oFWoT6g16SjntaGSjE8iSL6sqBXS9U",
  "key2": "2538YHzQU8WT3RPFiwM4en4qbxBLox1UpopTZKG1MdhqCrqh9MuQYydR1Zmk7ypUtqsaS9rsZYA3zWUK8myu6vE6",
  "key3": "4XYmChxtL8tM5J1tuiAgMPQ32DnMhqxUULYC81RkcUercSNufatJknd3EbA8ravPUGFdSZSkUQV349DqkkZGYsxV",
  "key4": "5WdaLR6AVADPSY9JUXifpjWyfnxTMzL9PdSC83oaW3knD8cCUK3H14FhnH13xLnGujEow9G92h2Aav99kiNFwQjU",
  "key5": "4zyUAtDuX89BFGFRKRFPzGV5deAFGsmXy8KJqxbkaVVwQE28tTWCzRB1UWb41YAYSK5psx8ahLuZtMEDKRzt1Xg5",
  "key6": "5Rsy4Pi2DE2skxi5wkqeh7w5pgdTf3Tw4djt68fm8anW3KEhsqMZ4TUTHawyqC9nCDoztkRQg12QqFHTYdJzuebv",
  "key7": "4uRbVd9rqJAzwhXqsRYzHFTUMkqZxpZvx8bjRom3E4Bgf8q18dVwjuipyU2Neyojct5rH5HQa7PVKLukEeTBzHSq",
  "key8": "4t9eH6UVbSfZZJdykAyj36zBh1yMuR7RHGWWyPkNKKDLtZtArEVKi4Zd6ZYZ49LQkvAvYPYVH7qbAp7aKiHqnk8S",
  "key9": "3i61Bg41ThMg99bS42NfBq4bTdJfNyoTKRaCt3ZY6UBMHNAxGFroLKB4tPDbvDPDxtuN4ESHmx92aMEXzzFkHt3N",
  "key10": "3CMCyejN6ZftXzJHxhopKDQMKmLQmzzK6JXMm5rzJgZTspXiJY6YxdVNX1YHcntdHHu74Mz1YkdHZCXb7Hyb1EqA",
  "key11": "3dKiGx85cy8aaS5snBaYz1vSzSL18q5CsgbAfAP1Pi9Ac36b24XvACjsjDtWzh1CRPE5t3sekjTbA5qT4GtVxdvu",
  "key12": "2eyh62vYSLuoXFoiiT5aUKzxes6n5M5YxGCd261e457zLcBun3LaYG2npVf4HhDG8SmYMWPkASrgTJ3KVEHZ432d",
  "key13": "hyXSbt1ijmtoruDz3hBACDwXntgpJjiBrx2GoCkhLmHd59D9vmZMr3bLd2XbbkgGdQ4pqBT6KmPjuVkUEaU4dLp",
  "key14": "29enAL4QnxRfBr5nkCzuHwqU8c7U9r12ST4HCfstAPNSMyManSDtuDgEXEBA1xmZj6jxCti8Vbsh2ZFhoLfqN224",
  "key15": "56BeGk4dRGa7ih6sYj2DkgzWyQhVZHcWV5zDbqmf1hKodMrzu85tcnsqUyn4eoGYHkniqdqiuiYb9AmYmdLbmgVh",
  "key16": "3bNTX7X6NehnrRo9TggXi15RM2AJwaHFfQX5f5si7tRCs9ayhMCQ38Wcc5trrsJuY2VvTGPS69ehqHYmsKz8c3TV",
  "key17": "21wE2neFG5JktRunr2eKmDNobWqSMR2xqHZfrwXDN3NeQREkALK9AASukPLKg4MBKEmZxbirBetnv1Beq1Uir8sV",
  "key18": "5kfdMHjStK9F5dxmDjMofMzo4iRveN7KWHEtVCwHm8AYPe9L5KqECXWDzd4aAmQBg9JeVuqEaGRV44sHu2vVht7Q",
  "key19": "X8qJqZCppaTyqS4e7q2VhpyQ5oFfqgRrbaYPXcJB8nnMiunbSkFPR1Zpd7AB2SVc41SbVGEisqYyYCuo8TXfD8q",
  "key20": "57pykjCn8T6yoPt79fwvyyJsjFa1cB6bPNZ2VtPnmExsC5uf1TxJ5GWMAqdhpuJkpC2eGPVGSxkGas3tN69Lna69",
  "key21": "4PAoEFaL4CxSPzYUcoQJLV4dJuLgaTX85Qioz9esAsnyQaUp4DumAHqXt57m4Ld4fKtQ7v3PdtNvgMAuopc7Q4b2",
  "key22": "2VAubFxNb6HfrHGvW8AoJdNFUXhEuU7Sre8NndkUeF9d1gsnLoRXcsur5DcnP7pt9dN8RdpHMhpMiTgkppK9gQj9",
  "key23": "3Wq3DRJfVsU61YpLB48R2GNisKbDyi2b7cEy8Fh4ktRVW9XDSRgkKEkhZNgeGh8VFuFWi8fW1L6Z2AHTDZUXp55D",
  "key24": "2WxXS8juhL6EoJH5JUXURQe3iACEAhm75sj1Xr3MwCB6Krau2bqhQii61dMmdJLpWW2khssKsz8ypZrnEeMimLP4",
  "key25": "4YoSuoN3RvoqNjiW5JCAnG4SpNu66QBP3tTGDxxvfaDVdXyV7jAvPGWPXd2YpTcJGa9H7P3VfrMDujP2zxczHTkg",
  "key26": "4JxGp1wz5Mccd7aFhqGUrSNJeQUfj9NQjsr6XnE7nMjNoPf27yEnan2xkzRxgfTWzZS5LRt4o6PLh6My5MeX9QA7",
  "key27": "5oiBkoEV1faMca1tU4BY4dBwrzaDscptXjbrNrDY5wNrkytuS4r7SyfVrfUayQvDwHUhCWp1oUbcNc4SowYDsR6V",
  "key28": "1bGw2gHSptP9oLh65PcKVoT2wRNxNrVhZxrCXdP3HTHKSVetendcym9Uk2WczzinqCvAuyvEjk9aor9yJtUktYS",
  "key29": "oiUBCoPuWJ5mVuG2WZriyw8Fbx4qSNeAaK3NdoooZgcVX4s9gV61CSjHNGuHm7Ah3s3jBKXBhBZVFwJzpRrk1Wc",
  "key30": "66brxiGiukVujYdnFEbigMqoZa5C2HRvRLJZA2nkE9AXhCUAzZxPemeDJSt1ujHPLbEbnJxLkwQ2QRT3dDBNTJqL",
  "key31": "woJoBrak5djT41SWfxMrvXb6jTnnbTmBe1zAmpybRdAWmMwKQAF1M8UqiBK2n98TGkzX38N2Mvh7pHy2CnzctpR",
  "key32": "1Vjky2y477MtQm8dt1df8yzYfGWo5Kaf7Amvmc5UbH9o8cLRS7W6NjbUdpVmWR9RKpt5GPJWBninFWbauAmY7X9",
  "key33": "4LCuakaTfMJzeh48TJzGJqfa3rsKuJRuuxhU6JRZfdGUuXmxSEyXK9MDMrhzaNdy6yjgvs8DwonGiwytzGhbEEx2",
  "key34": "4SKxioTREGzou7BJEFzHo9G7z269qF85SizYyHDN6Y4CLupEqZb3egm51ANCHfaD6obpE2ECjMtEqRu3eYDHbmr5",
  "key35": "4GyZUw5U7NUAfno1zxq77W1SVSPbhwfHzzGEQCy27H4sL9bjpFUgR6c1M4qLLdN3PUTEXAaXGFD1LuUr77d6WTfx",
  "key36": "5k1bML83tanjC3aKxMCgni5DMT8P1ytCnaBLaSaidAFf2uL491Bt3nvS7b8rPDGuGSb2cMMnd8DDkHCkq4sWBDG5",
  "key37": "YG1LAfSo6QsYnEWTCyjZisycoH2msZSnMcGRoLTduwFdhsBGQ2DYCDwbawthcrWoKWEL3vysZS4AsYFXFuC4Xi3"
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
