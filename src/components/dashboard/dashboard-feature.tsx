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
    "2fhc6txqKjD3RJeLcXfsVKT4gd9tECfKkEfLH3kGBmSdnMDwpiYWteoQNQJhaBoq6ttXEioXSPJ2MS489LFwy3bj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ciZusviGYJpuUVzWFuK4spK6ZFJnLUcEG4rKZgiEhnony186U77P3mGUjE1Ro4N7gShcYvf2do9f2B9SZ61hY6Y",
  "key1": "46zwpPBSwXacqqc5MGkbxipsmzStEDCVqPzegF2QoVnviTNsJA4PYPdv9xvkvpHSTTddEbaKhGymM6EAKngfysKF",
  "key2": "48QfZmVZWrV5vwRyxBhXq5Gd6EvuqGJBpqNczUFKB9sKwErCZLkUxyLsUbEF6iGwL1jqEPJ2uLFxGRNRNdiUGxCm",
  "key3": "GfX3bH3cQtkuCTJHtwTvWab4fXYXJ49wG2oxEGMUL6bKGtXSv4rG3TZ7zm9SKFkTH3UQrKA5XQzoH2y1UdAh8rp",
  "key4": "2pKcEr4Ny31gvUcynYyvm3UKXsxWPSsPtv9yfigfmEHr8Nv9PeK8byWwV5z4zNWDZhhuWdwyWUh3gKR9sjeVdYHd",
  "key5": "22np76kJyLWd8naZxyrmhFDxujZNKAHuJm6kztWzZ3D4BCRFjpF3U4H6eY1VRWws1eKEqeRUVGbYUTXfwFuQ8AYv",
  "key6": "3asibKPYSKghfuu6DBYT6pNLiHLAxDDva35EcFuBezXRQHGtL8D7NTJE5kRrRjDqn6Jx4v1hER2nPqnPAPHRrxT2",
  "key7": "5T1moDPMugQLUbbDAhCYZqjo9hikLVNbYZLWGVFcKRDXpb6G72r3YkkBtgciBWJzs8dhR9KYG3AQbXDPRWuzbX12",
  "key8": "5qv2818tZVtMaTJbEnVbfVqFnu8Uheubh1TaTDwyV6f2dkqdjuDiWTJoPjbZpaQYaEaa4jiCao5fadoCnerbATwi",
  "key9": "37dCGLgJ2onE7RX77QdWYips7ny18Wtix6aa6zi3JMtLSCmYc6LFfn1ApZMdUx1dRbpkQFWfDLi2hizXqm9yBeoy",
  "key10": "5UaLLA3FQsFYzwnmH8BvLCDaXqXijjg6tjbQLKknb4vdUdMyfunyAp5FB7bJ8hF4s1dFGMsdV5dkEtpSHgq2xYRT",
  "key11": "1nZNjkgznp8Jr9NzXMReZ81se4gppTZ5VQi2UMZT9YG5iZB4ZRWCfRyimM5PLJ3kXjtdafm3BGSUS3VueXDDxbW",
  "key12": "31kGJQFLbmHrWbvfV2WryDYCsPQjZPTLpWqnnDA1JbnVMtmCp3tevhNd4gU6ZqpmpmtDC3Poi8x2u2v45rpRQEi6",
  "key13": "3CWq6VqwHWUGmyS7rhLnviQZmAeeXRephRfZhz73Bo5rQbk1jjPqHBwYiokEHsc19cZkzZqowmor2C9WNMEirEvZ",
  "key14": "2LP9tSNUYB6dNmKh5HDfjFpXCz6c2SSd2b8FsnPMi2a7sb5ouPB1uLiZQQWoybGeCGdsSaLnxkgb1LuhvKesav8v",
  "key15": "M4DpXSVqAFb1TjLnzpNN7Q7RAQ2dPUT5FLu7VRoCyCorsHcyyS7xuymQxPpputETqhGmaDP1qYjEwty7BJaRxNQ",
  "key16": "49sNVEAYxhqgpKiNpFCvUqUrA6pLyqZnz7bb81KB5KXTN3CZEqQwVMnBAidVM1jMLnoXndN8uK9pjPXm1KpzTKYj",
  "key17": "42sXezqsdp83wEV5DrqJecUb8ZXbsLpvX8d8QuCy1SnZ3wZqhMYVuoTvo32eApTsHcYNtToavmy5VG87EP9b9tkb",
  "key18": "yozKudZmCMNLYq5V9SFYhLSXWp62isxcnwPbjLTu7yzEzeFZfoLTj1FMzPcyjASecGe9BjrvL87yJLCq73dwQup",
  "key19": "27X5ZfewThXbbcexJ5hMRYXVwi7EqCAc9BsXoN9uz8KQLYmpxvWSKyKzFB568ypm2fu3EAViD3XgzQng46k3uk48",
  "key20": "47od1mLpJhHEr3PN95eohVHKCzLMoUSzUqygRekb2VeYcbE1Nrt4gSsnZdReBrQXnyGxR7fY1M7ASSAa8NCBn9c7",
  "key21": "5uPAde8iLCVNmhLbs6EAgi7SR8GWkvW2uSDvNdqH4nCoocGGowTJbqHnqJWsE1h4XE6kYDuQ68cnycAAPQMaavfZ",
  "key22": "5UUX1nhVzb9RAv2zVUnYh5XU1dCkk7mprf2FC534PHgXSXf4dSZVyBrDGGdSJhdXei4jfBcHPmwxGXLx9i7w5GTL",
  "key23": "3XUwrQX89SkvnkGX9GmB1cMbqLuTCNDbPZVUNeFeCsn2HFRKugtJEQMntRw6XFHNWRh2u6WHA654B6VPs9K8qBk4",
  "key24": "44J2SxrYnx4s1cc2bXwBBkrVSrbsvDron4dJtSkfpQYquz37rBQPRpDaNPRDMy1kkTcvsY7hmQJVcd8ocKSfeyAA",
  "key25": "2c9y25S5X57bG8B1QngTfD86sEKPDTampsYD1nUUbdqirSTZbSHshvjYyQZnyBKQ3ekPX1D3jMqWPaEzkDkYaeKi",
  "key26": "5nWcb9sUX6E9wQ5BWY2ZyALR2Dig1u6QsazZ86NZrAQbVYRs4GFakE2DAaDkDPNrBTiXR15i6xAR9zbo3kXdHokH",
  "key27": "4FGSL6ecG3EsekRTJyJC6NFJKVEHErKK5HrbKKmPBt7uukaNP2a11oiAonwWaXvLc1QmrbS4t4Vprz4Lt4CQ68pS",
  "key28": "eaWJUBs8TJ7iFJsAL1DNYrdVdfpx1KjttC3tcvcr6Sg6hcpW4PJV8CNzmvMssP3GKeY2LxGSvfdBhfWPLXvB9qw"
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
