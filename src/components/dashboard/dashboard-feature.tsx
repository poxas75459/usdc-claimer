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
    "5BhTXWSRYnmCxjzrLFnwGxnaCp5P5vLQ3CR9zbunjnQDrQR68qnb8Ez5ezNBFJaBoQHCVdsWRZatULz5QSdwGF65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59jdtwdVr8gPTzzZ8iRQhANramWJ3S6z2pxYLGtTqZ6wfRNKiVaTQ9K9qeBkgTmWWxVEu3CE2j9YSeio72aymPoi",
  "key1": "2vRCFYPoRWTmRSHgCbWUWQGoKTTK4YtfB6bA6kQuYFfJjFeLi5ozjUcVZ4HBZbaGfb6WvCs5eVaBsUQ86wkP2x7z",
  "key2": "2W2DxfZUVMKDW7V4rnz6zPsrtEpM4SoLdyuW2LZ1wV3ngCKZ9Fjq3iPB5jdjgtjZtw1CgsHbPj8nQwZy42eQ5MBa",
  "key3": "51Ebsm7QU6zdjjkcs4q9Ar5ePQiRyhVxheDZ94Nrm5Ds3vNfqCaHzoD3Mt7ogoyHEHybf2SeqvbUQpCXi6nFAMfK",
  "key4": "5ZhksTrt47CKSjxPbeZ4fK4ypPMYJf2LCN5oJV8rW4KKw9v2i7VRVcudsPeNnxXJWqeAqeTwnGPNLczUv8CwovHh",
  "key5": "NoBcmSRis6bRhbbUKpji9dFpy6JQ8Dm7QsAMN5fgWqA8yNXKE6HyEUhzWabpLQDxNR6ANgY4jc1N58RTwZe8HLG",
  "key6": "RimeErFNCzhP6f8vza2iwTJ6Lpk1Nz2GNjAEo3DfteUrydGsLaTstHAUoLc6SqcUa7S5Y5Yez3QKfxtG9KuRm3y",
  "key7": "4WQnFPjdwXXty61WgeDBgkTy6nxichtJKCRRAvF5UDZJE48MiHwzYZCezY8u3ihKvD3YCu9NpX9heLCpj6RH9sbi",
  "key8": "K3k6zVt6mCWiH6776YRxWkBzRZL6jLecEhJUgEMsvXMG88m3KD97QpXd32BKQBe8a6CjU5xMyknyibCLNPyKqK4",
  "key9": "56PnhDb2NamBs8tmotMtRLSKL4wVYEDfxJSnr8AKQs8PJTj5EXMNMgyaoNNSPomBDR1rJR6otv5WoPbfz3PrWJxU",
  "key10": "5811EBrtKJYVba2dt9dBibDDaaXtXTrzNVwmL6ZqQTYz29emzJtzfemza7wUEeuJwYpk1JpADDkF2pJsgTFfwhxC",
  "key11": "2XBCh6VQBwfGr9Mb2xUoNU9tWpdbGMcESAB6ci3ntjHmgYXSvbnujvthLeWpwPT9qYyRfFtWP4QLxhgKMEK1DsHZ",
  "key12": "2pg71JQXcGuoNqBBQ6soSp1q8Xubmor7jEPXB6vKjWYr1ykNS3vtYAipGEoh4KmhnHqjW5nrFVJmP1ZgRH1ibqq",
  "key13": "5bW3pzNmdVsY8ax1ZUGpXdz6PaTAReuN1mQYKCoGVXTU2UNSfNC4qFi6g5Y35XDDy8JHL8zQsNPxfVLhNfKnDGtv",
  "key14": "YBmb3GyEDK1oXx1oUd453zyvKc18Y69LYwbhXrsf4HjVc4qpt7GMG7iRv4y6mTUjCginUanWkczt8pJk9WGYdqQ",
  "key15": "5EkNPfqDGrwCvp77CGxdsn8iTAVL1YKCP1C9iEJZNNAqkmZLPbcZffeMxg8dnGoGGjyrM9L2GQZ8VZCSUD4D9ESM",
  "key16": "5uX2vGehcgqhBvSnhcCzzByYnXfEB1QZ8UVryPkUHUoDiq6aubrCxxQtCw1bXKjWB76iYjCh12q6Q1h8e8nH5Jfb",
  "key17": "4Up7yUMRMJFiXUTeDXs9TUip7wFXPjm6satyurLvuy6KUwEr3bZcqbtmB6dfNSbodZw6NrB1Wz1DruJqnWoQnt72",
  "key18": "5GFMSBC9MS6i8Ntg5PPycjqnt3yrJM38hs6mgUNxRUq11QdPcVrY4rkL5humjc3aY7hqNx4Vqtp7gJCy4w9X8cxh",
  "key19": "3uKiGNWAB9XoSc1ygNquYTaQ7BMTkAJwfTkDrkPMsVBZreyRMUS7YdJq7AgHvB7X8BVvhHFJKNQV9Rr2ofRQn51W",
  "key20": "ALhShAfqjdnwDY9MnnRBtto4grCJTPYN4YZ4qLE4G1zbdKj9w53gGatfUGadLDKuCbKjbBE3HqxuY2GZKriZJ82",
  "key21": "2pXAb3jcTLZppBhEAbCdfgn4hnZZFCjnwA3wNk3xKwimxUadTLFoNTq6xMbmrTPDXZfePTyfvkyUzL9ANvFJ41dZ",
  "key22": "2kmS1MKiqdZpGTUeuDe3Mf2jgVE7tNS8tRiJP3Wf6bKpybRtuTCrcsN2FKNfKSbN1PuzkWxRJy9GwJ6BWk8Wehbf",
  "key23": "5idL9aKersLYKt1MTEpHBTd1oe9fn1RB41j5SbantJ85ikSYsAxPDnRWCpAytAzmjiCVFV12sEu4Z8jGA7R5U8n1",
  "key24": "59ddZBJnhGcTPfa1NyB3DPwjuBsGVTF3UuCUufoqCWyz9kNg8NJ57gBgm7hQsa63fRRYYE81fSnyaUEGZ8rUxRWB",
  "key25": "5dCPqcy4PtWc88YxrnnBv58twA4FJXtgRLYzM1K4ro8uXxdCiXiHBNEbAnVovvTRRc6w18oQUtXSEro6EnV7uPVN",
  "key26": "2T8AphbSKQekk1XDL5VW9yYXivFPtqG3oByBSLjzzjv6gzTEbcEeSUuj3aWtm74WKmoV4Z7PXjS5rALyu19euJj7",
  "key27": "N96NGZbeSAEhwdoAJ22crU8TVgD9PVUh2Hmrhjm4cTP6sLNmHLTfB4WeVryJFptLzrunkEWUoJraiHKjqHQVEu6",
  "key28": "2hGguhCctcCSY2gJz7thrgU8ZgSLDZmakCZae9VvWZnq25d38HJ6S4ZGQCtmZcXCaawt7avsfDbrDmhxSPeKZM7u",
  "key29": "5HE1FVCkvhrV8ETFFct4nnoaGH1eVxaDV2gapYd1EatnmNx9E9gnACWts4T1PL7UF7Xcm5tzPb6kPU3BsPmJyWfF",
  "key30": "A1C8cye2JS5zxPskA4xEANvUpogBrEJ29osdFXFw18tVT31ehuCt4nc512YGutnorzfikahstsaDfAcCiWS3R1c",
  "key31": "aLyQ42ZzG6yiNs4VxMfVVFpaoArpfJPYFbfAM8GiQUrVXveCSE6oXCDrKt7MSu6oA63E9HpPX4URV8XDjn4uU4z",
  "key32": "5YBz6wHQCSrrWBitPw3Nx7tMAiPHew7AZ4pqXi2kRXXMF7hCQ3Bu2UmUKu6VQFd4pV2PtbmrBvz38Nwq9PLqh5Ap"
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
