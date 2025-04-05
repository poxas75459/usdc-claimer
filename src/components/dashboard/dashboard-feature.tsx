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
    "JvZNNPtqe4pYtmoPQEtRf1HQVP7Svfn9F9ghfbByVdJnfBMCCWwJJv3fKj2RJdvb4xNcX1CxNeHVqXAa7HqUYbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g4rPJsnMpLsBZ2sU6bUj5bjnJbPGCP6HJct9LPu4MRavZg2X9HJpgK1fqCFiiajTBCDikdiPnTRqXwYeyEnNh6o",
  "key1": "2D2fHPqo1yYD2Ko1eQtzUw1e6ofBBozAokKeANNboJchBUWXPMR792WZLXjPPo3jYUMunqLaP4wYiTjJE2zVZB5s",
  "key2": "214Uz6xQCkBheVW2AGEhj2k6nd6T1BQCcpKyuy14wGVWeKVm77Fbf8tGK4r4hZ94nGWjghRARDwUWAsUH6cSkLHd",
  "key3": "zyAbwPEut2et9DkQkN9QR733sZrWpbwRPgX7TC1EMq7tA4YJFmFRMUNSutyQdKi2FH2eUmz97xD9SFWaCjqAR7D",
  "key4": "sDsH3bpJgoCNbXi6omsJiNJ1s3h7t76SAQTUyqAMMHrpxqFs3tCSCxJpGP4Nz6jvVZNbLUuN9BEd63QJxjubzXU",
  "key5": "61YUCNYi9ksDY9zWHVNkXzxvH5fjFyW9nFbT6Apf7gGF4zFFzCVcrPtSBEF3JitaU98CvKqnDJP2Yv9542H7TcMY",
  "key6": "3ABUTYuj1DHMqrBP1s8Ni2tPjSgNd8gypKDbaJ8vquk8XxMfFF8hv1LWYdH3Q6J2xNseVovdyu9WvDQHibqRrUDm",
  "key7": "EvjYz4aNSA5dVNtoHv2yGAusgGxe9eRq5QVcWNixQLsjWY8My7riFsvSZQgxQyCEtoAvPJaBhPxfgoMew9wz1Qx",
  "key8": "5d3w3h8P8ZUqhms9Cyu68FMdBoUQUJFbuCeWyy538U1sHFuTndsUm7Vqb5cndaqLCL53CWPyZK7Jz4K5YCzJ3eKc",
  "key9": "41iBtRmT5P3xhVpEVyy4i9yv6sjYXjXVtpeWnmuzjkGzDabFaeooDKWzvgYBPeUBHRGc423otLKs5P5bi9BpibFr",
  "key10": "5aH6ADCsVbs4c4f5xE5htQ5Nh71E7vAVoh635z4nm8DYyBgz9K7LTfwk757YFwbdmKA4YyBFzLasABxmsoKFvwsr",
  "key11": "4GL8QjWtuWUzhvMXZPxxMmyU2m1trrCRGn4oEibofNSc5PMvRDhq1HZ4Zq73tSYtci6LTB5a8qCdwevvwPhWACvk",
  "key12": "4gLQrUoNLR78EEzrFpyRbXY8NJNMWCyjwgbHy9HVosVecEzuemNhF8w6VG5NpMNhDssfUtXSqrtdrznL1kTf3k76",
  "key13": "4obsTZZHE7htKRWrcrR1xWfzezFHQHgPafJyE16Ce6fSy7wEsCHvd23BW6xDo9QL18exvyZckEfUHKZSJjsUG3bd",
  "key14": "3qq2fpU9wrPomQa4i3bouUM3pPECPL1H4R8qU37HYwgVNoQyMfjBovQcE5G47hoPnUiKGd3cn8mM6Eym7firJfiE",
  "key15": "23Zth7n7i5Mw98aE5iPbT8Et8mGs6BwgUZEXcDzu2nqyDRQZALgfVyHLBnh4pQqghNRsik2nhwCQWGFS1S7tWA1h",
  "key16": "c7SJZ9Q3jU8jLtRsrPgJU6mHvp9LWLvCDmcSjjknCZnZNrGJUQQvBXQEpogxmmvHyDueUtjVTsu7DfjMCzzFCNa",
  "key17": "33UqiRQnQ45n4EAS9dECAJvtAd9EwftFXCA8taeDjei8ogL9Nb54MWXJBfRd2ZperLa6XfntnAKWsc2bHJNi8YXe",
  "key18": "5dJYAMm7euvRfEwvP3jigNxhoRF8i1K1WedNaUT7zERUdYhpp5G1pefGda4um8EnYRd2uWK7spDF2G71DJEDuzs4",
  "key19": "3rN3MMyDZWutuSBxKzsKCzzrzycWnk623VRHCDnoztBzPTSHps1Bwi8f5BBPBuYcJhi3ERMAYJ7eB5NcXSzGWwrj",
  "key20": "3jjsTzcrNqnPJ5foRv2EqFbtAK53WoSmPdKW2C8nRj5X7oymPCcqU6NxRYffoyrfk9zqp1Pg1mHUNhFtfwsMXQyZ",
  "key21": "5Nh9nDhxqn4EJP9xhDgNvw381NofkWVf7aXzt2c9mDf1DZrjkGgbjUpeU24V2wX7jjbSuEXcuehWpjB1CxxCamEC",
  "key22": "4qz3aXiRDXTRDXRKDMLXnSqc2LTxxHVSzBHTLJyDuoZZHnvacQzGXM8D6UgfZJGupf6pVrd2Q7twYe1CF5mp77pz",
  "key23": "iWofdMVaFZJDut3mHUa5fycwzjnFHV732ibBk4b3xjnAb1WEfXZtf42eLM7vpsv8SdUtxvrq2pYBQB5AcPwssAe",
  "key24": "3VyyCouyBVXvUtjWQjwTUWYu9efwn1mBJgi2SWXfcJrp28Fnf6JM6L6VWDy17PBFPnnQtsDR5bgXLzxBW5QtCHN",
  "key25": "4CC6LAdQuUfNxEJ7Frur11EuNEWVYDUTq5NdVh1x36hDbECa5uJomHPjrRgv3Tw1yX3dL7hpdWGU5PyJcdSf9Q8L",
  "key26": "4zC68Y9FFwENLWExsVvtKmrgdJYExmLjXxeDCK44FWwpkX3LdC8T58zqyc2BgZYRHxKURUGXf5pZgUp2e78m44Wo",
  "key27": "3ZPd2WjASUSywC8TuGbApP7x5J6LcNH8MiqWMhCzqBP46htxFTYMuMaTNYUsXE5EJn5kHa8YpKyekj8srRFcaooy",
  "key28": "4YAMdULrfbmiVbFSxwHrDrmA7znbdqjxMxQXxzSBv3DqqpkYW3Tfa1o7TzLytGRVocKVJ5mxQE1i5XFwpZca8ye8",
  "key29": "2vTMBcR6zvfenW9TJPwD8UbbuYrpV6domv5viTVH75kQJrwR6GY5TFk8PG48FmtTnvFvp1Edyh1fNtpTXuLsD4Yu",
  "key30": "2pFKXe9seaHm2KTNcDACPHttYwxUqtBuCuHSJH4z98WRkxmtk8X2ZTNzejVz8Sx8wfePcG65YRkZUUgZenrJLYz4",
  "key31": "5nHqQ1ug7sg8xMVcukgtyjuzNriSxCixP6PZmxJfxXDmGgyCm2RCuoygnYXoFKmtW3XY89UvKEYh5W1Vy2Qc3Fos",
  "key32": "3ea1bniP5ptJ5KRJi69f83RH6TLQfMwfxbBVuUhtvhi8eUKtxwgohjSW6xxwKPjKjK5iAmVCsd5C4aeHV54GHK73",
  "key33": "44GE5nFjT7jRtvECgHWRg8K7e8tmMGNzbVNt6Gh1coFAMxFYrLbkSa2SAapfTmAZTBiDF3RdpzMmyEsA3EzQXErr",
  "key34": "4rUattu7pAmVtHApCdpxmyFH5Gmg89dXGX6DdX2ysYBbx6arW83KD6CbNVN6HhZAhmKutXGAa2muvMVuAswB4v11",
  "key35": "9B5YL3NCwhCB8VBLdzMMsVCFT14RTLcNunAEd8uF1WE4sVNi2v2AFFy8cSRbjWxye9N3iEZgVriqzTpV8htXTh5",
  "key36": "BbVkq2vGbhGayykUuPyBb93ts8AS7sawUsHSgPPg3ZdFMwgLCM6EoKvsJV13Etg7CNAPUE5tVMbCYfHkKW3PCrt",
  "key37": "5eLAdNnGyeJAKMpH4LLVoKBnJ1gThKxx29YqEvkFmELSW9u5bUmkibJZm2p6FANJ1KxyDeQY6nxAgKDLKxF9X2ao",
  "key38": "2gy3zmxGEi8sfFk6ZV1rGGwfHgSm491qbMHmAi5TBdnsKJL7BMnQMnc7MYx4stVRE1H4mHmzv2CnBqJAW6nDgM6g",
  "key39": "26R9Lx7sY47hC8XQaNLpv4yaWma9eLk45DqRLXRrGsVmAHcWbFMC5iBWFrFNhPs46isTiApPTUm4sgoFk2JjUVyu",
  "key40": "5tKLUoSgVJMV1XJ8Gy45Bc4ciBsxKzBVweob4uLLuNfHYoebA2bW12sLq6aYqM4RucrZ1tYVeDmTvDfySGgF5SAq",
  "key41": "5LhK9ZBWdmmq7AKV8Kf3QYPc7EVdJMhurJVXC3uaPKJ6uYw92P7UrcRuPaBuVoHfmVuGepe2uPXkSbVMCqABG9YA",
  "key42": "3kXfoamLtQY9pPttcSPPH7FgAzSmnRMGNwVRrVXki7wspsy32DJWVWJDUQUtivwpdKwx15S3pSxRSETiDTPR1dhZ",
  "key43": "RPXD8oSsbX8aufjhoFbZcsXL8nTdvRMDD4TYZJ91MdBWH1bzWtS2DZpMSBfeU6FUU6JAfH5tUKiFq3sD2zXLGFm",
  "key44": "5WwEGbngtbUPiVFN2hHGigapYiQ4T1Ln2sp8vbHRZGeftr1KEwFZmCxZLrAXVX1EysMEGNbUdNnVuSMoYxMqYddR",
  "key45": "5uL4tZuMJM1KGkP2U2UBNj524CycrckvttQ9SAgye4iqs3sCW9cCh5rUeyVtPMparWyzou2gXEoUa87MKLyS75uA",
  "key46": "z49kcHCj88gxUBctGgLA8oFpzsay6KMHt83YZcQsc38uX3vu1seAoYEvsLzLQR2VTG1CF2R46GHyVuXbZo8ajWt"
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
