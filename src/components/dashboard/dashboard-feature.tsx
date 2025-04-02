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
    "4F6UhXj2DTwqsH66G9NK2rtbYhZqVzRUCjDsPGhG3rNMKAPeXP3swPpA4Dcy5tBy2KSccSZknMqd8pbdHJgBWsvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ktArSaUj85gBYE9i3EcfcDWhmDqHAHJyE1AJhpTGR8AfYgAQRZ4qUVnKh5VtBVqJw9Fx97atVSnQdFhhciaNukR",
  "key1": "64dPRPr7iu2RgerZiRGfPLvApe1qQci7MxykDFUBH6MiUVd6R9de4eqUNWseGPbw2d2soKqZJbaTB8XHxAUUCQzE",
  "key2": "2Zon4XYM8rA7nGE7L9WsVhXgutn6RkZD8rpeTTVdbu2r7jz8Rz2FyEoG2K1X1J9nCEtXFLyagUhL9uGJwRYYU1cA",
  "key3": "3s4b4bvyPZBJYPZvm6wjaUDjL9He6NkMt6TYQhLiE1pxn3P286QbvBZYn5wknvuxZSAfat1qtU5rvKcVWrW7PENB",
  "key4": "122FagGZizE4Lu5hWVZ9n4ZQXw5sCq8eEwHJeYuH3KStsqRtTdNcX7qMY7gN8kLPKy79Z886zwBQxgM2znTfvkKF",
  "key5": "4Wb8SLfwxGeWHHSmpwRtgujsshgA8eDDn3hWWnmwUFBPgzKbbChqZkfZVJfyqZLELmrXQdAYNZpM7qd9suX2QTiC",
  "key6": "2pjd5mJmSEpwRL6L5hhb5oQ9Bu6bC5fDpzq61WsPXQvFDSinVp6s9WaaLFTR84JaY9Ebm7ZTqq3k5mufDjswjK5D",
  "key7": "3DQEMLWx9nsFHM4MQfvJHKnahJbTaufhKxtp4JcgjLNd4P28ogYegPz87JEXndYMAMiuT9dTpivm1jZr3Bvjm5rH",
  "key8": "53x9stu54Uf8zPzazgavQCgCtBKQCFQQrNV5uyoaTVbimMDms11KxW39wuKcy6sn2ViZSt2iS2PF8niJZi6Lxmwo",
  "key9": "5bAhNACvTbuCSmxgXU45yPhcUJD3BsY5HwBRbvEbCV8HFduTzgMxnvr9a7nGVttmTTVV9JntC5SuaGEzheBVUgv9",
  "key10": "5i49yK99BZGiZBpvT2QVWLk2aD6nQPSyTGaQooNdmhbAV3R67iH3SpTNH4TApLbABnwMeqZxhrjMvoEgZZGc9RsN",
  "key11": "4Lyup1jR4YeAmQteygSTRBGK6rBbajGpj86uhuny7uC8Pj2YWGypMemHtfDi3r4hmZZL76nCWyJFqeQDNzDQkgwf",
  "key12": "2ySrznPP35hBwT9eAwVxJxVnhGAC8ufwnxomNFWo4tiLJ2ksKHi3kFByX2wGxE6Cc6DhDVQSzxGhys9S4iDEhz2u",
  "key13": "34XE2jAmJUh3RsTbJSj24DFCGSxMMQBYD1ikXkZHRkAMi35WUeJRwwKBAbVyrxrUMFf4k7fJ6FPRixX4LCbWhTqn",
  "key14": "gnE7MSJB8mmmHKPoJJpgiLot2pafQ9GhoMJqzXNiDYvwc5sZgNqnpT5k72A2wtxbcBqnPxYdTXzpEyJoZAabbgx",
  "key15": "61MeGAB2DFiv5SGwjsou9HkcjDxnxr77uEkah4bQCY1ae6qyJDFC1HfjubDXdd8hmeeqyfaDUeutv2B2YYFt5h29",
  "key16": "CstkAdzFQwWEJedtq6zi9AMuua1qmKEK2D5endmrQxLQeAM9ESUkfewE6meptHbmBrAGdDbiS72cR8Lkxr6bfRE",
  "key17": "4TMbx8L5QyF3y3suyAKcXqce7yzwUW9vC5zvVzCp4ZDKWPAZm6LkipcNLxbRa5cR7ukDB2VuFkggxFVFNZWtBKmQ",
  "key18": "5k5XR92LHtddsUuvoCqQ1bytnW5zcL2Q87XcNrmMmFz2aWNErfkdri8QLW6EFpzFptYHww92jpSGy9CQhYnraXu9",
  "key19": "4fBz6Ah6NSVZYHk16y2MsN9NXXAYy5H7sxP8GQaU1n9orynVQXcZ86fPyeLj4KP9QBrdhmarr4hMsZZ936s7hxdE",
  "key20": "Cb6zVc1M9iDPJX1p1GXjPaPpoCpwETzZDyiLLk9DFw3MdzMiA2jXPmwe1YooNEoH1Q9Sz7kSbsGow3pC2g3uS4a",
  "key21": "3DJSMuxiYxugBquo7hByxBCX2hhvZ2bMFKE99yZHymGPcf2mAFa4hYoqY6kAHkcvSb1s9RFdr73dTAxrjgsmYNpD",
  "key22": "2DeVLP7QfKCqVtdHXwM3JAxu9Gm4cuVgB75Yo1ePFphGobkYybVoP3jo933YFdcaUjQmQZuWTmq49deAbZXEwCh2",
  "key23": "5YDkuCMXdMHBGj24nKA4yXSXicoUP3GU7niXJ2y3JqYtpASouExV49SqwdfDFCw1ujA49pjgpQKsWZon6g2RMhvh",
  "key24": "4XudhAB3mwtXf8w4wDMkTs5m5RpQhybw4GyshRzn8fZuvSjyZJgEV72EzCEb3XCDBfeTTjb17R97oDZw6zkQ7roz",
  "key25": "mCYcpiz6CuXFxCr1qQvbXi34ZXKSDDTyhWJbR4YcmeTF936gE7ebpJ7m7csVagMPUAghT3WqYipLJsYig4vgcTW",
  "key26": "5GcQW51M9HKUExgCAbW3KfonGdy4kWPF9dFoZHusVNycxLk8t6UHrts9t2GxGznrYfTVRyd3WqZRMazzzyt1P24y",
  "key27": "2JxLir897Ux4VT4NeM5ZWHjQD9cGXW24hdkyKswMbgwGbFd58Wpcbkenscx3xy3b2vZThJG3beGN5rtd6WMAgNK3",
  "key28": "47F4CsP5BA6r5EH5vnbqwkb1renfeyD16taLVz5sbXinHU43B5qciiijZVswW6oDQhUi65Mnw2bAQk2iSDzVNwgD",
  "key29": "2KGGcgYFLHF1WMcjNs59YF1Uvf6teuLqLy3bXnGiaDPHD2RGab8468mMToUVhZGX6B1aHJ6Bki4GQbTZpgxZ2CjT",
  "key30": "61cRYboogM5eBjPzmorJJxVwbsHvHuJyty8uXSyU3jsfrtkkFjkWcANkiz2AkBKij7UZjhaB5EKbQTSvwGXJ9T69",
  "key31": "WcktBpBHBX1TVD6zUoXzVVfidnHQiJb12HBr2mEK7D9UTwVxg8R2KKQ3MuhoheVGMQHRF8x8rikahzUAQYs7NcS",
  "key32": "5KAZr4xLJggWqnoxGaHMVTb2sPfmVV8SdEFZxDVe6uTTrzzcnqfvixpFpTThKTA8eyGgmewG5h5LVfHz7ZSRF2U",
  "key33": "bw2saDkfTTjL6ukfZwj8RYPkweo1HicTgnMrL7GdR5W9Cr8m5wg4QQgSaAM1wobntL4WQzuXXXR9QsgpzJTdQVR",
  "key34": "5vHjih5UqpNXXwDUi2Ub1fUwc16VC3ktJF35mBJvv6vZdV5C21r7kppRVL8XkK4RTnVwHahGLDjGB5synzHg5TC9",
  "key35": "2oyPecWEDGfxtX3okobhDPGs2jQz8Npsaac6QRrxsn1csfJZfCNUhPxaTuXE18kudUrEWqGV4Gfm2oaADQFQspQ4",
  "key36": "5uVvwwryA9uWDhgNnE7Y4YBWcHpuCiKgXzM2hqsVofvofSmmD7K5pcrMBzWF1jHEbZeQZbqc4tWJPqNwyaDYPMaD",
  "key37": "4wqtATe6BwQhDY4FkJHa6DF9pGHtGscebk52jHfYhnuBH7ASwR7iM4hSbtLJeoGQkkU1iRkzfAjpM9ebv69aVMdD",
  "key38": "3JMgcfgR3PSRbsvCXKCNiBkU2ehxuuaMKKbqK93jGdxmcBBTkBhUFfTp3LFMt563yWiAxQ6sd9g1NdT6vSWG2CTS",
  "key39": "57dHGTsohAgyS19HfV8HboUXya4qR8TwtgaeFBNTEyeuuXEPPNkTnekZJ2FrfAkvu2VMEVhYoiR3vjVoG96U2Q2u",
  "key40": "4a17BvHMACmZx6sp5SPkTm6AZEYGi8pphkKxNoPzY4oLQrovUEhwfrDe2anWK87FKdMCjixSfd8anJ32Xp1UXniY",
  "key41": "3z24KhRcLFBecP7kT62ZyTHUcYMvvZ7cprCMwU2FBfHJiQYz3HHcva7tUdyqGqSiiqR7AgAXtvWWj1Afs8cBsurY",
  "key42": "4t4f4J7kaBC2AfZFXfuBVPqUvJwynMkZKT3Qa8r9AarpPExAUYsxx5TezmKPVimqzzXJPXFk4XfHhLqWVditdibu",
  "key43": "2wsqgKanJm6ZE6xYXJubW8Jp2eH3UTdEKi8ueRqnn84vyC4UDteW5NwyEPVwAVatzuMryvKn1VUXbwjGAgA3D6ic",
  "key44": "4kFVPVwwFhzmX4TgxvqWvWMJZCc3RSsvZKjvctSSpebNF2Mw2L3YHwpEPCnFNcSgwJord35NngTfe7jUhzDFbMdF"
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
