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
    "65x7tn9qeM8QEWD4AFhLX9xUweb2vRfZgJsT2dvDXdkf6ioVm45LuMPHPTTWaN4jappZ4tnBCDNa3nVRirGMsbk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DLu2xcKtAwbBtTXSJy3HdpcTiJNTA75cvJSsGxV5v2TFVSFF1T3iXPHLPWKTShwH4a36svpdRpU5o1pS98UpE9C",
  "key1": "491cZVt3HQmwvotpPago6UdDSbgGpgRVmbHjRWb1XSL2KDQ3k3iYCRWWZsrWa6ttiQXWFdyYQkCvmxLPAHDG6bY5",
  "key2": "5mXWqDLx6VVBPek87DTzWkH6rPx1HvUZMynEJhivBRMvkTsKYM8Tnc1GD6CvoMZqnswg7VuwqDy23NVLPUiEknaj",
  "key3": "4VjYkRKMJrXMQrApdhKBE2eqoc2k7EJNqRNhdC6orcJQ3bKbeivuEvUFBbQjKQJkWnRG1VzMvXNmJUcRS26trFno",
  "key4": "5CYc5EaNFCeCygCAC4xHobeUUu9GAhEseeaZNpZxaAye5w8kx4Ny2ZRfbHgh2XjEg34RzzAi2VVzCfdRXps43uap",
  "key5": "2RuvpWP3NYqu9skkTPzbRyArBYUBZwjm9XVp9Fg45sB4GvyNBqKPY5c96ZEFie3so58pmfLGdjzkmxib1dgHjRN7",
  "key6": "5vvYyASo2KeUfrj6BgBiAeZ2fTJRRhiDnTMV8LBWmKnhYwpEFKLAxrehTrT78MPrCgevujPxU58TM5AJqZcShLoR",
  "key7": "bHBE4DQDStA4JQx2SENNg2FUWZc9Diemb5QU1Xckt9WPknMMtC4mACH6WhReqys9t1MH7WeE4XuqUhCbqqm9U3y",
  "key8": "5zHwMxdBNScc8UwrRmbRLmEhYev3zkG58qGGt19D7XrE5EJBbMoQjoa8dLoLGnfiML5QWit5szfYst6B2MT6QYcg",
  "key9": "tdF6hqXrHjZvpTFCPNRR6sxKDvemPgPit2D47mSWa48hYJdJsdBE51CscSRpqbVLdvUgVNqJJwynBfMunSoiSW5",
  "key10": "52QZ9ZD333MFbZcD6HjNkCbzfywuCHcWACiFy1CSfS1zaazjXhyVwgYW4vDWq2yYP6aQtcYY7dER5sAmtnCHni9X",
  "key11": "4kdp39HBVmjzj99RmAuPxQKUmcXiUUTtg2FWZiV3UKvs9LgrCJ7sQU7q7UijvMySQyDoG9QAWRpinZMSjQowNmqe",
  "key12": "5cy5tCeb4NWxyAGJX4hZnq6UyjgLg8EJNKL1CqwuisdBZ3Hp21U6xuQaUWRXMhTke1AxKpbkyhyCzBuwMQXqyYAE",
  "key13": "PhjAw1YgfjbY9mLQ3HxD2PUiLMwd96C2FcaroqDvhK3CUA8rmBL7BhpTHgwtiWiSuvF2WAWiixztrRTHjKwaCa8",
  "key14": "4GmW54eBDuYNWDxD5EEwKYzhAhiGApJFyk2DDL3Y55XbtQjvmxHPXeLQLCxZXoWYbP3JgE4NukpCiusyncvn5cYD",
  "key15": "obdFaX347si6HCR3hkaLVrMq5FeRUYt29oaMMdzb7EjmWqEf49fNRXN2pUCD9vCkSw8Bv6tGga6E1BZ251kzC8c",
  "key16": "uGtSHdcNMBbD4hqea1dAu1iy1imCg96UxEcy3hT5BBwGMNYqG7AR1K2fKJgw37yekAFScyAEZLdEbeYjGQ9uRD8",
  "key17": "TnZNtL6qVhhicqBLRsSGWq2NV1H64P6vvwPNg4jqHnxE9vREK6wRajdAU1eMNQFuifazzCAFgSob5tYLWCda4ze",
  "key18": "4jgeqaEtqAuB68tRPDmMkjT8rwtqeDQZYF5TBVSgk17D1gaEzBeJYFBPinQQZmroE2SwXMw436gQmQ1LrMfMePmb",
  "key19": "5SEvPDPi2kFP1Vn7rcPd6rSi3u3AJnTWRzPuAeXRuGpCK7NeKeCLAwKHVP6nQFCnSYQpGjQuFD96vDxhRKcyvCGD",
  "key20": "2smfkbBYet4ieMFFpnEZYZHMwjX5cswScRPqYeU2t5sdBrK9kvHTyEJmDSqhStuxsFCJcmGTvCiFkVLUmWEGz838",
  "key21": "2zJ66G4nb6m1FH7m3yhqRjzkaW1rjvpc29t88qBUwoxgTKNvjoj5xeNaVpPbbsFMqhDUyoMKfkNt37vi2drm19RD",
  "key22": "3TNw5FBRYyzRmLDQmXxKFG3HRBFykCCpUEygV4mkv6QMVN7JYGiCk5zSY9YN5niHqpEMYdWdBCyyagP3Jv83epi3",
  "key23": "3E1QabttghiC8RXd2qYp9y64BSoMb7zekRbJqqi2qbAibwqYLDd7ckiNj9rGMCahgVF3gFmunmwh5ABc5AqV2AqT",
  "key24": "52TXp4gCgRgvh1wTQtAKJ4Hae2Mkww4W5wnkaJcv8tV5rPXoUt2tnXNhJDNmC2FZ1nmFKs3LBseufKViYCKrCwex",
  "key25": "3ti3ygYqQZu9iLnvvHRyw9DQpJtPvadkYJfpz3sktCXiyg3CnCbXbbh57bLYAeerq7zUnwawJPsRgYz7k5NsEewB",
  "key26": "3sdc4U8hbPrzxmgFzDXgXuw3B3VNk4MTXKXRFbNwgozDxwSxAaxKFBj7AQcsKFXZKnpvisLCi2nWyDpRqmktFVok",
  "key27": "44kTbao9KMdhJ6fWDHZFUvU2LdokfUbNcwPeLwHLQbLtA8T8rZtJ27qkKYGBaUpuMpFUwX1CsHKYKK76Y5mjqKTk",
  "key28": "35SsoeHxsAXSwZuPyw41MeQKWDDecgN28votgp6rU8MLCEKsxV4DFAvygsMwMkxNmca2rMfBKz7n9qG3mUtHYXj9",
  "key29": "4WQbKPFFj9vm34i7HkuhD7GpmpEw1efx3JwiVeForRxBeq797Q7BnDS36rarGLfaBQFTZUSpRA2f3nbuCH7YbM3t",
  "key30": "29jeUjRADSbQFH2eNgtqj1DCnvqBEJcGPeMWwynkz5mHKr7EYM6yAA4Q2opsML6kcK7cBWRqxT1i1g9cFAjPRCXM",
  "key31": "BrFkF8ZFgRaWTBdtadyxHpp2qPfno1BV3t41f2Tq5h3AQf3HYJ4ezFRYfKRLfbYFgk4xMEunk4Hh55UioBaaBYd",
  "key32": "4tyUaYdUdejxKFVCWbpLoxTvtzmYQgH2uUhb7CkHbG5FRYhk5TWrrVA5k3pXo5uqaThCrpTkymNQQxFPbaQsDzeq",
  "key33": "2GZCNKn3bZofHF4sZKbh52TQNHi2N1um6SmVwTJpRPJX5wwphkutmBEvENDurocL4U64AgVvxyJkwZfV1rSaxaWg",
  "key34": "2bqUY917NYbBMo4V3TDULP2fDQh49x7wPu4TVSu9SZT44tW85Vec7cD3C89xwRPy1nLKuMGVQZahJgoiCzjturdv",
  "key35": "5KGAm6nNSjNo7emuFSwGCvXX9YWw8FAXhJkuEjKE28wkZ9rGRui35ZyvdqL4dtVf84uWhNPpn9TNDVVQKXnTagTK",
  "key36": "2StBZUeVb4zC5xpL8PFiiEwYe2nf4uTewtbmVauRgqvVHqTdsLd5bKkSUrnKNTg4fxPM47EzWiidGbfkN8q6Ssyh"
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
