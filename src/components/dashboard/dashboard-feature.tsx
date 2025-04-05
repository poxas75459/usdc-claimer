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
    "45U1dwZ3kr3sBqGqcwA2enMp5jo4etvjLPPvpdTcAqbagBmubGfshyyTW5eWtKhVAVjXqFz5WFpWu7Btu2CnZqSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wuLk27kujGCf7A3H3uUXKz6WTMsZYoSMxHhw4k3WM2yVZc5ohhk4Nfiq1GW53t6cNHuKBWHmGJwz4w8qBgsSyF6",
  "key1": "4nSvAMPq65zUPi1c1R4f2wSpDVtEqZ2UfKJH3D6CGfnNfKmtv6FjTxY1QQ1YXNyEcCdefpaJFys6NKyciB95JFJr",
  "key2": "5fihqYBAvUQ7sSn3yKkDh2HCSQpmiFCmaUCqBSNUeskuk4KYh4Ad1ekk39d1V9vzKMyF5LY17z8qhzrjDwZuBWQr",
  "key3": "61PTz8WMFrBATUobRezvTm36EzbD2rWfqwhh92QCh3zEyL2fFMKvVf9o5FhpNaxHJg8tcBDfAtL93xXnNaSMiHtr",
  "key4": "3oT8xdr6cCySwqTJqsp8qAf2Vu1uVAa1NBxPnUmuR77GkT5e8gXrQchCefZSG3S63pFscqc3xGNDNZ3xAhnUcHmK",
  "key5": "nwGckHer86dGEpdjBZ3AtTxiRqargefd9y1jAbTy9NTNqfyPihjRE7sDZxu2w9dyxRNFUfXHBZnuxEJ6NF5fPTz",
  "key6": "3zHpHczAYcCZztYpWnBsLhytjz5VGvxUkxGyzbTGMw1htLC6x6hsAikP9CTti3c4c2yHpyB5L2XSnB7KA8s4ywV",
  "key7": "bBbvgeiX5ohBF9e8uJKHaoNPjT2xRZAd554VJUySLGXydy7PfKEJmoWiHeEJnwkJLy4K1fDwbUfM5tAfEkVh7ZT",
  "key8": "4KJh6dKVJCVis77Jje8oQRVpZ1H8yUHkvAjbTcGoQv4hn1iCtgg1b97arMrvcqQ2So2H3QsW93iNdX42EGpPUV5w",
  "key9": "5Hi6shAky2HmLvHbZS4KazmbmHHcyjL7u7i4hBu9CdipbtpxDjgJcQirX2rCecy5a37r4fr7A4sNDUAsAFvvgBF4",
  "key10": "4bGUEpE1P8VNK7pUne1mUdDUNveyog85ptGdhJxM6WDDUHYRc47HCm6aNkDcU1ApuVBjJfkVpt1RxDCyuEYEPvik",
  "key11": "fd1cjcHr4L4zgAnVkzFZhLXCuBBGuXijYeMXmredcznwvfzYXEpviC5pSp3JcTUvtVEXMMyLJowshakwFrdQFEJ",
  "key12": "XXvFdxfn5ZMUT4th8Pn3q4Gd5ETfQ5uwQUGvG5zoujiK7WDsqLDMSZiSskdSVQLNfCYCwpQ8WMDLsh3HFuDAzrN",
  "key13": "2iYxkH1h2NfRB1QMwhT9HnvXv3zkm4pUS62RV6WYreZfqR3ySzTMpPf7ZKtPotw3kqaya6A8ckSwbcs489BuAB3K",
  "key14": "LTHZpoCD8fZwQaV2LX2PccW3jfmZiehnY7ZJSfxBSFnT1MtVDP92cZbfTY5QT2c5hoUXbP6HuXYAu6AiujziVRp",
  "key15": "a1AjSaiaYKTpB4nKmfWd7MCLp4B22kFcVVXpUT5KzzEf1C3qkPKhJYaGnk3bKNZ2FbDbS8aGCQGdjUYZ1UZKXnT",
  "key16": "3yRqFqrUYabPBzX2RW8imgwknWiA4pZHHjVLbPnXawbD3t5Yo1W5wMWm9CLGbfqp3wnyvi3e3AJwqHU8NsYBkFpv",
  "key17": "KfcprYBfondCJ1GCSvhSo82qTyXLurARQAm1jhCHcfwpTpZsZdJPUxADGjkdW1FViSpqWth8dZLWRoL8moqfNf7",
  "key18": "5UDoBBvX7cQs5khE21aqmyiB4r37gR5acxEMZL4pkgUizT1XEnzAph3ehkeTAEXJALRzM2gPiAvHUVeqhQaQDSnw",
  "key19": "3wd4JyX1QiW8Pix6AjiinVkAtfwDAqMgJpxu8tvcm7s9tN8R7Uc9v4WRzV3XsgowoJKnrWSrA5KTewtB1JEf418b",
  "key20": "2zqZX6XM6sSFd2RkwTYbN5qX1b2idhUPEgwT4cbyKFCk7PUxQ5PKe8si2LHmrLdvdtDkcfpqn9xLUpaXHiswrnRi",
  "key21": "3Ld37W9ZKZuFGotPzGqyKvJroMsDDc4XhnUnQgs55NgKgfkdeMZ8NidNDXZuwGBZodE8Ly1YfFaWrAwtVrcVwUzK",
  "key22": "4SP7SMusXEDqQyyCzednqHdVCzpNQVkCYPzbN79Q2q55U2CtagqzE7wcPeG1zc1gkufh5oJyUgWFWEenpu6K41Jo",
  "key23": "4bWzdrfoqXpU9caeHibeTNWDKxnX1jTMebnrtApPJHeTwfGqqy8uhyWFNbtd96uuvJMho4wAvkpaatTM7ohqYdCk",
  "key24": "2onj1c4QGbfzvTVPg4XummoLUHhTSe4j2sgu2x8qXWSxGRwpvsK4UKGgR6JnNH5vv8mjaMPCoXzsq7MHKTJ9Nt5f",
  "key25": "4daCBm9tmnWyGU2peZ6q6nLsCrqvo3dxtdcgCz28j6zgfhDsdv73BTtPqaMo6dCxjbrXK9BH1X2noRC2JyRMUrZz",
  "key26": "4e4nuqHNqLM2gFt9o29TtQaoYQAqvK6xAZ8vM7dpvkD3AeJn6MMiuLPFrnnRrpfZv3JrXNaYTyc43nqAw8RtHD92",
  "key27": "2rB7Vs2DzEJiknK1od3S9zVxkhmBmNuDojNZYDE2r4AXGgzWsXQREJiHiZMeMYff4JPyEH7B7oTfW9MpyGCcVUJG",
  "key28": "3ehK5e6osvnbKsXiWAVEC2z6JxjTzSASepS5Cxubg7CAJxiroYcm8gtPXBLzvbRYGJVLo2LXr3s5V5PVULXXrCnc",
  "key29": "4JVG6Z3TQq3z4bqcLwE2RyyjwMEBk7f5GLsAtegKSNtP5f4AB3FcPhETurj9a5TGYedcsqwqpnesWbDMmmXa5raL",
  "key30": "xbpNzYLwU2Kh6e5S6oKknVSW7QVkrnS1dUDXw6UMmQoi5TX2hJ1oD4YehtVvNn3x2m26fEUpWCfSZPL4bknQVmD",
  "key31": "425NJ9iqNL7NDWgyWo3JV9pJBrKAF9gd7rGsnULXSrht23WGGyDzucF66WaujPf7TAzMEx1CP4UzPV4t7bLZG1gb",
  "key32": "4ibp9E3YDgKpLEyHaYutqSrkeeEwdCS7P7EcBRjsLs9SWet1z3cjjquKY66mpDJagNeJR7x52zEWBdmhVuLmppzF",
  "key33": "5XBXGMEJHMRT3idfExjEeHU7QU3Lj6rEDdzqXgbBc66dxMQD4ZZAXDZt53haDZBPf6CsmXfh7qvog4wUvMWxPmyz",
  "key34": "4RVdBY9PpdAzibH692R73QGM9q1BTkx7d2shDvcMWzMCxKKuiGG6p4pccV2kK6WpycLE3wxF3zE9pbA27nws47eg",
  "key35": "7w8BZZxx2rJCWCM4tHP9D7GxZZU9gJ114NHz5jNhDvbaSR17E8m3RPFZLDFajSWxHR9dRy7HEhnauk9AtLVcto9",
  "key36": "2nrpKCHJ4t9Er8xhiviaShy1mRQyN9YbAyB7Z525eniUuD4pyobWGeAEU4LNs7Z1DDNMWMv5dqWEAiS8Dw1At1F4",
  "key37": "5qLDyrPdRYPrgDMAXV7ux8dSHxQYQMbSh7BpQJCmDhfWYbv1oQcfGvXJ4xpzQLMr9rz2Hi1E9A6ePoGcEXuYmwFc"
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
