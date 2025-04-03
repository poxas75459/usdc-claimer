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
    "55qJ3BiNLzfoF2CURzgDMyLFohWFDrXfurbpwYJKURzr3bgzCt6N51y7eKsfUS3irvJkRLLzwv9kw4LHAh5Ex8NH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ncU9LK65z5TLxZgiWYHzMLwhUPQRJPQ9gULpHKukQDfN1Xu5yRx1mo9w5qJYgiL3VrQhsmwLoHDL2imvoMYjFPz",
  "key1": "2cGumLqMUnxng2qedtaxrQ1e49i8Zqj1igqsQDocfTC2Zh9VcepWbAKuJRkR4X7uApKk6Mo1FL9gNpZ7N9ATtrZH",
  "key2": "3mMsBFnXk1kRJtfdmJaXbUL5iEGhS2Rcobv7PQNdajxm3yRQpRD5TfyUfT8AGJRDNAB8Y6LxHHeFVJQ7ixB8wA68",
  "key3": "51YFJYyRCMmu6aMpzJiw2buQ7CYg8qwQWxhgMoeYxWmGBHp6T55SQDPDuwhenik2fETZoKN9LG3qiMBWjegNUNiJ",
  "key4": "ndXEX5o1S68PzgLZA3hTGQSMVnkCxbSLzTwJw18byvx7jBLZ2JAj6Cq5yb2YhUveihJQth622mLRB2vkNMjGkS8",
  "key5": "3ou8aWBL8rwN99rdscHgyv2WHJZ8TXxEs1XorcjRSRPeW3Aiyeoa1mjtyNxdPouiMHgYP8xMWXjni1niWQ75uPnu",
  "key6": "2vxnuNEX3mdG9vneiHJMgmgsPXnyHLmv8EQ6qxD3Dudg1VUyF5txjsx4j6675NoLV7ybkeupXaars857y9xbeVBP",
  "key7": "36m4yhbnbzGQnLd3nL3R8Y854j8fCrGiQVkvSAQaFUuzJAsFq8Lj4zV8XtdVrUFwV44HZLyt6wbZEGEuKRzEVty6",
  "key8": "4Kv7HDMqeQwQPCgQfjaoj2Fvwv7DHp8qaccNDU4yBjLKoektKA8pSaaoGW8g7MKVMR7eEEvPPRETaKJS5DX4pEgv",
  "key9": "3Mw7TZgBTfCjjn8zbWM7Z1oq4UrvrmmpyqhRQhk2ZU6QeB8pcz3y7zhn8LgTSuPut4BzSoih4frT9BSreQ7AsLia",
  "key10": "2wZu2KEVaMyktTDeCHamyrpidw1XzDpJ1i2Mvp4BtNJii3VGLRh3Rb1auaxE4yWtjvLGp4TDoxti6bXSjPTqZaeS",
  "key11": "4cvVqSzR54Cpdjt1i27bHGaRrBnK3HMMoJkiRcAPq7EtHn7RHPSkK1oABCCLnCU6MJufRx4pBuRNuyd9UVwzHCHP",
  "key12": "29vsadPmU9g3QGcE3HEipqGAitz9CP8J9yNxHmXDFVNf8gFF9y3hTjnV61ya28cotBk5dVydNfV5UVzbqf8B8kt1",
  "key13": "2PY7vDwyqrkFSk9Y3HZJmCr89wPX7exU6P6SBPVYV1CKEi2e1kg85y4F82ULynhmKrd9m9A2F8H8K1nvCgSQEdhJ",
  "key14": "VWnBntGEqF7esYs9uctgBb95TxYbmH2gQVPofbAyRKGiTENsWJyZe9utB7Dn7QqfFeYNS83uj4AtKMUjBrwySTU",
  "key15": "29WvHDCDUrtAN8xbwF2ryjcTZpAGCYR8rCvh2qbq1pYBB67M42GbmFAx6AGjBXNZBh4Frf9a6ZvFzgZGsBCMExCX",
  "key16": "39tGh9PoAE6WXNZJmWJgSCrcudVMn7RhfcC6Raudozk7c3m8uWcGBzJckFFnqCaGypp89t2FNdGj5QBHHzFpviNv",
  "key17": "2cJ4dtd34uXi46fpsrUSm48uaKybLo9enRrHuUic9rWcnPgTt9FU6TR7BDoWpFWmFrcpzap1pHzDyxYex9YVPKA2",
  "key18": "2zdsKAxoZduLLG6uChPgMwH8s7CzA9aEgwQfn15FobtPijoJuk37cesBwpi2MsRswynSCU9hbF9gSgFXGU849ZmZ",
  "key19": "331RiHegfDk22pvfLGCzrLKdWEQMQ4Kc1zhFkumpRSMwdZWdHfin3Wf9qea57dZ7eJfkD6Qp1Mdoy4pSDT99RHwq",
  "key20": "3QMHxJQyo8kjATcpa3ziuPrs2VNKfgcr46JCUzMN1AMhUphrXGtCBPGMybGF1M1YiziqFKYPzdDnKKRAr69LcL6M",
  "key21": "3cyJBEwkfY52fjX9wBfp1GWD1b2m2d7HDMitH2yGY35CX2x3vTL9nV8KH6spfQ6USRw7nCAy7awXkvDeExzuRsP7",
  "key22": "2UUo4PnxnAe7bdRDRw43t4WbHdoyLS7JYkLozEmfgSmKeVid1MZWAjqpuwSX1G3gtDrfvp8iqeprdN4Hzy8Mx2gd",
  "key23": "2P94btEj1DnXDvFDEvZ29qSrZsJ8BZPKU5fmksGWVpCsPBoZQVLkBJdhSVm6LYmge8DyomCqtgLNL1BmLHygsR5J",
  "key24": "akVNd7M4YcijW3cDEskqV9552oycdY6BqfZxNJqojcWW9d5MBRArKC3GmbHwEkrKQMobhR8fhp6LYjV3n7mjVNi",
  "key25": "3MyTy2smgJMWoKswfYGgpN2ASZBuP4YkeFueAVsRTwztWEHoHUAymMyvSjJbgQ2nAkhtWJ9YeK6zZcb24CBCnevS",
  "key26": "2feqhXhAmB5d64AxJPqyXtqik9DCEozzo81RHPyZ8CenMVPkX5bjyGQnc9e1PxUXw5WX7nm7HZyjCzpHh6vNWHGU",
  "key27": "5tLHdwZosW59ziAiyCVEx8qv7aGMf1XSpTKpbS6tWoQr4wAUGfSZmtxe1D5MmH8R53k9YH3QMMAEBWBkLLjTRnkf",
  "key28": "4fWQG8ku8Kq4HUCVWSPFW2DjaYhdEGdh3E8FwPxXjxbwVHrcZVytA9R8DwZqQVPsJcuHe3MPTa7PPXVmo6hyxB2T",
  "key29": "2rAJaQy1FAyvhXJf5Z4H4HaWWqg8y4U6iceyD2kuJGAXAbzXDfFoTp3THAu9BYyGn6FQYhvNyJAdnB1kgorJxaZV",
  "key30": "4DZHuY12oBLTkgqovyT8SLLo447v4SjrLAuTtUm5ahhkxXYsHTccp2hBVDpiFD4cMF7ppcLZtdH8coUgVCM9x2jW",
  "key31": "53kinaBPP2dEr5umBoLUz52cAGQAu9ZXrNm71QDJB3rqsa6Q6AVS1BoSb9ehj5dLQks1npEssoNSVQbeksEJxDNC",
  "key32": "4cJKYy8DRr6qszJmFLehnd999NA1ttgu5vhBLwwx78d4Cnxp8AyQw5rZu6zS93TPeGtNejmYADVJ9wGszomqyFoB",
  "key33": "5trLqRA1EPJFzVv152nwV7VxyLLtPi3VbtzZY6mU4px26dAZTUgov5bugbExHLd2CatJFJaEf7oqfkrxRDY9fYLV",
  "key34": "2swDCaArVQjXVEe4L1SQCd3URwMkJ7XF98gSUsREE2iqdPpCRYu9DWdHoDSGppwsDTbHtFJepWRJg6kaCNDvFu9T",
  "key35": "2VrrCpNxmWyDY3A9jnpAcT4VZpc8TgCQzkhiQ3Y4srjeoqPWXsAAvuccSdVa1rautdF8Lx9L2ZSuBbRqc2qDX828",
  "key36": "bTJ9GVVLpMU3KjipZ6Fa92RS8C3D4xysMme4tbDvctMxtaDdRgvijHcrKSWgr4ZaZfrC2tbFt1rGgGiGpTDitDL"
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
