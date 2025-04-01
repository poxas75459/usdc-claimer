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
    "2a8JjBPhFFasBKDBdC51Vq5EzyPm5fnhUkiW8nnK7wYfFyuwT5XkYa7ex2J8Zf1TxuoKForF7wruKJa9XiKXFk6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FBticsE2hksaN9hCbspc1i6qurwpEhJ1oWJiaPTYtBoB8Pnbi4yWim4wXbii6vobJaFvwdgZJBtaUQ1wR6714Me",
  "key1": "3VfHuzFVUPTA49sMT7ubqk6ZGSoWvsAhn5JcWCQVbVxydVu6E2CRNU5nED2xYBg3MsUv9XYpu4p9pnRoHC1d2vVr",
  "key2": "2F1Az7RjjNXgACyAp7mpz7yNpBL1LJMcZWyXsCe5JMLW1ho6H6wFKnA7cMxJxuY1ZeaqpCZaPY8fefwD4AQfo48D",
  "key3": "xiDPaK6M4AauwRmtZVv1xbL9NFpnsx5LJuJ994H31pa5pm8FZ7JrZyPmS2KaNwToeLzjUGUFMo5fNHM9xqfz4s3",
  "key4": "4Uau91jRALUmLRCn2QKwdZbmSjy83bBWjd5hjp9j5N36FDqP2QfP5YLvotswrzaJ2YdRdTEnwSfBKhcJNdCUn6CZ",
  "key5": "2pVU1xtN3SL9BPbxHRAAcueGT7cmDzZRECMRcxdGmf19EsGSXdQyneiD3wBdbheakVsMYqRHZK74jbG7yyytBKAX",
  "key6": "DL5K3p71njTX4r84cWHJSbJet6v22S7fqvJxeV4JWQ19fvp2BZ7mkD4GCwRvhoTEWuch27fttLXJNtrKHbF3Ncw",
  "key7": "2zZuW3JEfx8NxJiSfgZ4SLnDUsbU2yVHqTd4otbLgijw7Whx9FbeJX2jc3Bjgig2R2wRG8kbEs9um3jKmw3g4265",
  "key8": "3eXbHBieibzgqJnpiQWnYTcyhe9LS92D4PhP356g3tMpBd4U13Td18AcSTGZ9VtCbdVrYgLQfmeKCjxyUeMTcUBU",
  "key9": "2ByocLamir7GryvAZaWUCgGvdo55GrCzEtYw1LCmvrSvYMzNDpyQdxq3q2h9i4um1F7VNwDXma5crdDLFcsXUnLA",
  "key10": "2134m2wiqk6vD4cWoxawucKT3yTjdkXDLeBHMeHmmDVe8pyZQEVjCoWk2XSHEP7NJpwf6oPg2ncHFaMoPmYio2KJ",
  "key11": "64hfCZFouukxkC8UPBHG6tdDVxn1Ri9VdqksdoRHrGKDDaQyGdCQncvjFGWiZ14qpYsHN1xarjgaNhKmKkN8QVcZ",
  "key12": "5qTtkvUwCWhQ15qBvxgZySdbvhWk7M35jdCefSj4QVyc5WZYNk9rHCqYHqyazWsgSaFHXrka5SGsdZWheeH8wXBC",
  "key13": "4M4WBqMs8Y4nAxxNwMn3MVHSqnkKqmbazqBTEgVkmQ7CA8n6TcWs2Ps6UgqdqzvrcroZeF4EaQshVbaLGvxQqPZi",
  "key14": "2EKEixKPp9AM9aNn2ag3fJraz8Db4R3zi4jjfnt1enmNRQGyP9dwsNmjHszdyDrbWPSSo428qVvxkUnvvRDLUG2L",
  "key15": "2ZgrnuYsSXYWm5iSkoGoqE3kvVdR7TBBtRYf2eDNMxeFV179NzoXSHAFVhEGbxKbVpFNAjpzEpGycDyXrDJzPdx4",
  "key16": "3Dkts6YGbTrudeB6Cxs1gr1YRcREcM7sGjtMJhMxN7C8xL7KYJY1ESXpayAWKtiUsxJ86FLpHWBRLEe8BuWrzGAh",
  "key17": "25A3GWunqPN9ZjTzCoEkSDZ184Q98t6NbKGyUqMVau1e2NBfE2UzMPH4BGXxUhEygKxQTv6KRSPQNyYfLPui1qsL",
  "key18": "5hSyaSpo3kBT6gEukEijvzfW2iBfwdKjCbFNNfUXFidkgTnxVwkMppXrRQW7AadyEat92wTuFc7bTL5AwTN4XpJp",
  "key19": "3ZuPbhby6GQijmnRiCujadiqN5epHzFZnrGKAwoYQf3kCmDsBJf8GENXzeWLDHkXjrnQA7AGT6RhsVtgTKC8n2rc",
  "key20": "3QvLaoaW9REzZavykpNUH9saYoZ9QVVDZ93kWnWZRv1FBiMjatHZZE7VvyA4UAYoPRtiMFbqLV7guj1xRynCbdBg",
  "key21": "4nD6xT1qZ5TKb5xRiVrjr67qGgmCYkrHQ9jjFsKp75xSMj4A5Twq1HuETS2GbosPjbT2b8vaS6ZX9LwjjiSRBBFT",
  "key22": "2sWo8R7KHHDPs7aEWGy1nz9adTTVaxVDnnvNXJeWkdCMu3iCQ5FhVxEw3kt3Rn2am5BYTy7W7xBzGwnn8AhsN58u",
  "key23": "4LzK8hfip8WmnBeL9L2vcx4tUGhoYtd7MdnRyz4ANaFHBQEydVu4bopG8LqhrGBbW3vRdjatC9XT4uWoszDdjiwM",
  "key24": "3fosDWY4VSWyQSWtnTazp6YT72oba61y8y8vQzrPFejEvhYZaKZBxSyFudt4K933HVosv4kWTfjugvzHVyQEzggH",
  "key25": "3awJanfHSv1Aimz11JPhRpVoZ6ydsb6QjBQxaTcGRU8v2zQDU3LkXkWC5h4tgRFBsBYWmQh8A7uvbSqSpoFr8BCY",
  "key26": "7gY1RPAkhfT66sCTtaCwCNRUm8T4H6kjPeW4sXcN6jkGgwe2WStcbNPaUpmX7hMB7h2SGuHaUxBp3Fka7Wzrrhe",
  "key27": "2qz4qWsaW5GsXJHMTNCJujGEt5GBh2CPZTtqRQGnhtPu8bSgfXLiF9nGG1NFMzpWdGrBxi2X9WD6yfedx9Khkbas",
  "key28": "5q1PXCEhK4xyJWqNsRuA6erhBm2Cgs8FLYvQKDkhpFmaenyLamtvL7eWLDhtupNbVcZiop6r4shQ5XyYpCv1yRb8",
  "key29": "5RCy52H6QR7u3QGr74qMxjoEfhu73rTnSnxeKyrUsb2kabzVy4PP7KxZtyNhB5ug7fDQ7Ydyv5NPA3eenSCmAwgc",
  "key30": "3oo287iuAZvScuqdmqQFRFWe7rU8ytB21qHVgneAhVbes6yL7APVC1rGorExLN3UAbivMcdrigTj5aTr7meQfcfh",
  "key31": "5Zme8rHAP6exZW3Pp7uKEDz1EDNSbsVVMRqV7sumaCFMCmL7XWQrBhMRr5Aw9ZadW7Pyw8sNtSMqVYxuZ9PQtM4f",
  "key32": "3krKwknUqgLs318St9NqEus1dDTpBAdnutY5MYYSGKQteNZ2x9bWAE9ZtcFPXBZiE6pGdo7i95uBPvp7c6hjH1GL",
  "key33": "tD7qX1kA4mtx1e9jRPHDXbGryw2JM6poLQtEyHzPYnQDrSJ5b58BaDkH7MS2mg7hC68zFvHVrvSweED2VWFE6z7",
  "key34": "TToQE81bU4MnHpzavk4WtptKYqZWDYbHK4D19xSDVg1GuVsdiafQeQWAL7o9zT5SAuJ7JKFfpi9cG5zEn7psxMD",
  "key35": "2YvvfLEpWtTnGhnWCZWDV2XL4TpD97D7CWq7DB28qEqKpZvcdLZafNUWSyUm3kHGaNGgroEWNCbXe9dALCHmzFpx",
  "key36": "5hVM53qA6bwAGostSekuU4BCUkuWWcxHtxanG1iRcYLkppDo9TGLnZAt7h1eaBLUjKwmNFWaJxkH1cWTWhe46tub",
  "key37": "2Y6q14YgVAfaEYPM5yX9mHW1RfaJYBRLPsH1CdiALikqZ8wghtjweZuL8dhqKPzPLbbrVthGhLV3c8BjkmCG72Vg",
  "key38": "3YFq859BTgmxtJaCdVATBcrceAYrtDertjFgn2tmqpCiMETfBQEeJ9H3tuJ73JEw6NobwhtovFsgCsfYmhS9Boaj",
  "key39": "45XhyTWiHpvT9pZfYAfpiEVayY2VVvR6LhvYx1PmAfxm2CaKxx91qY71QX7NCjgH6FphsHK56stTV4ga5CZJz5JS",
  "key40": "4LZy4VCAWNcwvvK59Rwbs8AXCjmoTe9E6uDe49stZ7gVSa9kLxc2Lne85DCsAYLPeyL84hbmfaaLN4Bs3o9EbWB",
  "key41": "3vXjV3nJwmV9m9Bnhugt5TamPrVSApPPmPL1YY16zidpszJbVUmJ89Xb1UEDEsiG9m6xvWTSQxU83wFZEwDizkFZ"
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
