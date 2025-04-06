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
    "62RhjzQpEqzUVZ6JjNP2ZHjnPQk4zFRMVBuvNVbdqFXCy8Y1mYJVFZ6LSrfPYPYRjfwRYPtY3USsGFfurEe3ddar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VDac2ywEUB3cnm1Rds9csSEfcERMFnuVWqTWn2txUWHCvCsnj74tXvzV2hKMQU8VHxRgmQTpeY2iySrE4pbqoKZ",
  "key1": "2pyUzAHUsocXnoByeAcy6Gn4DoR5GccWwNvc3t8yswkbngnQ6e6WyR3x75RP4vPzRZ65dU54PX4ipzqY7GiR3JnP",
  "key2": "2rqNX3HXF33Dubn7uRcuvcgQRhC9A34SXZYc4qK27aYrZzVSVBXaphuu9GBsQfbaBrw1d8y1nHVzN6Lym7dQDkSk",
  "key3": "4p8st1a2hvHiib7i36QY6qQu9oxeDb5zpzr54QKimhPUZ7PxjnUeE8QyMksExRB2KRuqb9jkBK9nEcyxFK6mbTSe",
  "key4": "49nUt2JGy8hykVdCn8p7FWXNLpAAwK61rWgPWVy5ZNvuWt1f2QUtYodvER8HHSndAnyUNrSG5nVaFdnUmjM5JXKw",
  "key5": "37dtkYFLeySs6mx3oA9zwDNsKYTk16dUs3QAMaNwhgYDupKLtNPzXu4rRiyzj4fPsUQXhaZh1SeSLNMyrETLCJh",
  "key6": "4abUkhBUzTTrmscUVSiax9U3gEiNEMBD5JGr7eajmDEom47VFkMFPMeieepVP8AydozpEhCnFX2hM8EoLBg8rZe2",
  "key7": "4xNAunSfDXSfSXbyQ6ZYwxCTocepffgUg5dZWR3ASoNoqnrx5dnC1d1duU8Xf9N6qqozPuUj51BjDGRS71pkrK4N",
  "key8": "xtZ1RQdReiV4yUe6crKrdRiv9tYNSvDn46GcVJBXJ2YojgqwYdADVCGCFyw5XNNizj7s4uDXxDoExW42xSe4CW8",
  "key9": "4iXJjVkiDEG5zJmp5h9gV8T8UbwZdf1s4ZRY9wEnJv5fde3GDJ1whNxW6W2r5RQz9kEaF2xsqmcEiXyBVfQkFjki",
  "key10": "3U8TkGFDmnCeEP2WSNZ1qwtoTaQ93aVNBBwFSBv5ZibdQLTGESiaee1giqbwKqtkzXq9uX6FSsdZVrLRWkKRqpt9",
  "key11": "5BAuYWRHk5a54y41RpsSHXyWL32i2WGTqCLPXVzvas4Kf7FhpyhVTfWkoujsiwnJ2REif3fDPMN6aBTLbJD9LSEP",
  "key12": "XErmSvvpAW52euAaLaiZdib9tRHCwQKsDs35xk2LgUXgsK28MvKjnmbK4SkeaUQqHEHvQaENTZr4b5yWMp7RANj",
  "key13": "KFLFDkMigitYKujYp6rFnwHtv62pJZ9HAHRG2Pj8qQA8amrvw5uxVb9FGVtSx5KUPyLrncqFa7CGuJFcxf7xwSw",
  "key14": "333CYqm36eMPMMyudCZRsE6YgP3RFymjLRiDrJdc3382BNse8JpKMdyGSr6wRxBe4coQv4BCepJmwX2RJYxk9X5d",
  "key15": "3s8mxmUgn7eE28noXKSxz8EZJuETRGL7VSerthzUqmQD3NsQgGGMWEnBSX76EySLUMt2gYAgVzk5EPWSu8R1Ci77",
  "key16": "2vhRaN4mbR12yJv3LDfhBYxqTyCh2mgh3BcftWPU9RRYepRhmfSz239V9zjfpTmnqow7QCTNNz6Y8Gz8a5jJDm4s",
  "key17": "3DRuQxktinpiqFjZnEBXs8uy2GP2sLXuupnvNjRBrveubLKMiKKifhgptiD3wxLANdnoxZJCzBuNm6kH4GDsaXvL",
  "key18": "5ubS3zmVkAo1G4vmPRqhbUFDNoeVGDGzCG9PdxqfvkPkjnna4ijz8TKsPou5U2ZkiAf6sSf1NphLNUiN5WfDM7n7",
  "key19": "WY8YBQRutrTavqwbZTijjMAJi8zP8ptz1HRa1v7639Ws25fnbhGqNuWD94tQvEPdKA7KwTedQRBuYZALEWTKDjA",
  "key20": "32mdpE4mZ4vNrxxYEwXjiep8naF2oRDo1XDd9v4bGSoQgeRHgVsegeWrYBQFe6VSHnkEvzHQHsjN7qdJv6d5P2kn",
  "key21": "4igb34EyhWjLn4TTaqfGqiHQHviA7VZqV7kLNFsX2rqbGDmFY1TGNGDDmD6BerNwfNomhAxoybmy9mFSwxZ3DvHv",
  "key22": "3anLCqAvUWH1c9uBEmHG9WsA3ivTRA9g1Ndetk8nbWJhG5VQRiMivGM8GjAgaPeoq8LyosMBk2gqh3Wq2e7X3tat",
  "key23": "5ohpNeLHYbNCR43YUsQa7ekvC8uuCDXGXYmRsZewyF43vL49kKcouGsyYbLbZ5TiMvuK97a7Yv9FiEsSHgzimh3P",
  "key24": "5JNvYzUuBd7HXVLZjpA87nr836vrZ31RdXDNT2Yu2zChPCeULd2fmNTXA1UwGZPv8VAm15U37NMvHkB2RAktTVRc",
  "key25": "4SqsvdCuKsd5NnTSpHYtZ6FshY3q19oHmrYzSLfuFUEdmWw56op6mn83EsgazpCoberhcXVdEbNEPgqwbstJmxiT",
  "key26": "2WKWvvt7Gi7iUJ9JccmFBQuAeTiACnzNwXZyGuDpnC1n3yb3nQV2bp3TDaUzN8sUuJimzP5qTPdA25aj7naFDXfB",
  "key27": "5oRhpSwmvdPJAsooi6a4z25KqerVXTdJrbmQUonbaS4JEd3iXiP89bVED5zrG4oLL1dEtoyHg7TCqk2BG89RifqC",
  "key28": "3yMdErGpXR5xMoxEVaLXnv8QJAr999Bm4Yqg8tgCFgSwZQfdwcBb4tcnzvZrLY592dVq2J8mK6E9VfBtUZb4L9ga",
  "key29": "4pvWBKzDNnbBRSK7UyYeNT8MSLYQi3VvaoGwzpEVRhTSrvKN2voycxBfze41TQzk2i8QX2B3zX9cqiBGrpKhAkdT",
  "key30": "3ohZwDfyh6krjWXsJ9X5kV8WTGU9NakWxMEUnfthHBR47TLSvHspARj58h79GeBpDqqVF5irGAuyg8uid3zY6yMG",
  "key31": "2wCVcZwYpsNCNW2Wkm1i3NDTKZrE44pMHhRzXqNKN6kPnsRjyMbvw78VtptP77943KUi4bz1gqUpatfZjnU35zEA",
  "key32": "5V9SZygJyY4dkJhkvNvVwTFGPEd7P88FQjhPvJ656uMKgBuyC3N9ci6gSpJzdQMLjjXB31UonjM83b2UKqh6vDiu",
  "key33": "24vYXRyRaNusTVGfxtRm3JZgzNedNKpNaoWb6ovxk7sc3G1VmdPYYP2u28kHizK9JHWn8MSovRBzYpXD8e8XMGLw",
  "key34": "5gfKUp7nXicdGX6eGSnsxdVjvRaHTRTtooyoVmQRzJ6rt2cqm89MXyHetfCB6ShCPabyzhHyz8scNsD4fLbNVixT",
  "key35": "33y4y1bqyoz2J7rHUQ4V6XBpbeWn7Ed4BuFRTwyRZGPzZQbSHj3w1g5n383VZjyXieDty348LTknjLqpQziqsxpf",
  "key36": "67AmL9a9DwpPtBPQU5AzS3mkhpFDy6UACtByr6zqnBnzqmD6sH5kjPSaEhCQrJscEqwTzpXr75D4HguUCsijf8FH",
  "key37": "59vELLcMSCUJC4tQo2N36gsdLNwhwwXJcjf4BHBt2jTynzzA2TUGhmYbcBz36oykh6eEYeLKgSrZN5w1wpgB2cth",
  "key38": "2P1fuedZ4dHUhAVSGWG8uDH9zT33QQsRaXs4TCeZyuWSWmDwESBs2g4dpTs7qS3QtQdF7uo5TJ75cHs2xACtz9mq",
  "key39": "2oHva9Frpr5LwBSFL9j3mYvvvBMds41xJ4nwKcFQpBEQmfV7wAdi3kcD4kAHar8sUKBYFXgk5FCsx6agWsoziDjy",
  "key40": "2e4bLtHBZdRykMfpdK53QMmSVEGys8WQpv16mEw62Fhyg9sqKrzQYusi1BdTW3HdQES4dtmMGnVPuXE8gTKUGWL7",
  "key41": "uW72Vy7cffFz6q3LjoRSKkaiQUFghTaMaEejoff52dBfYebmbimYwruTzbRijnmSD9vnVZpow9iafrixUerv1LY"
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
