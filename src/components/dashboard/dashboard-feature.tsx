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
    "5Z982q9aHhdebgMxfbaoGJAtmMduK5kzX217WQw8S6MY2V9wZxgGeaDtpJbn7HQKe2CkAGL7mGcAqwdAL85i4EPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HZqhEBaG8sDJPGkmrfNDFmxiCH7QgJnBEBDxxEjsoiR4v6ygqBjEFv6GUy5B2aVLDfgHa6ieuw1wwXcBQjjQZjQ",
  "key1": "2UczYuGpBDztxeeL7H8uCcywhcjfe6V1uMNShbQ1pVg7eYQoHeVMqk87of2n85ZT6433wYPSaJGgeQ1s1BVVj1qd",
  "key2": "5z947ijwRxKPioiqVB7TxErWgpZ7nX7PgK7CBXAiJXsiYhYmwNpDtyo23zokhNKy6nG7eW7tM1zTaDazkLqiyXA5",
  "key3": "43jApF42HWV92LwnSFGGb67VzLVncAJcGZ3SVt2mUffJeLZutEoJThiv7RcHkiTAPxeJ2SKdp1GXwu3MVLZA9w7C",
  "key4": "2FVJLGk2zTLjVT3CyQLa6mmeeDt8Hmc6tmK4Ptqw61QSAisbiLvUuNVewp3xnVXYG3Ct8rWTNrv74eTKTHshDFCL",
  "key5": "4j87Uh8aaqPEq4B29epoiRKZTVgZfh2uBTzum6eFSsmZqhYv6rM1KS3t65ByQ6B2kT7q2Q9KZvMgCtxkvRCDFzYL",
  "key6": "jxb6yKtRV5Yhk4vsCXK9DposSu2JXAnX8Y499JXekgd6KCFwCpDLtE75sE5Be9DoiaRPNJpYkkotPjp4RvZSAtx",
  "key7": "4vHqQLQFigm6rDtcayzuiDCzShWuRSWRL7tkfpcCEYjrLXVo756ssnQsafiPct6zryTVK1yaXpMPEyZUqGSTBT4S",
  "key8": "29XWCuN1Mzmgqk5g3mwBMKQEGe82c728Nmcv3tbT3AyNHTWn3AFwZGoPJfQYK4TYMRjgnje8vrtwbhYkLd4FMMHe",
  "key9": "UhMVVmkBfXE4wwfdFSUPfE2DpgE8MbbZZLgnUxd7RVzWXR5Qr1WUGdHPYfrCJjdB9vszpZzqRSrPoTCF7jbqfR7",
  "key10": "2AgCb7HEuqz35QR1NVnZfanWqgUcViJt8st85aRnBKENWCtfYVqDfgRURH3eMK7T46W28ABTWt9u4j4zWyhnuvLk",
  "key11": "2Z7psvxMWfopke9rdGrZVPnmYMYW1ycWvWpsg8zPuS5XzvnW42NHY26Anhzx5ZCa3vjv9io2uGCNP9Q7rrqEZrQX",
  "key12": "446tkAVD4f2Q8QeuqiGTxyNnqxTn5VFHP7CvweAqt66kccwT2bJWyzGeEHB3spEPMPpPWS8qqCqsXDFwGXRPg44L",
  "key13": "2PFeF2hwxUJFrwKwEeRugQaaSLTcstqSwdc5J8EQiXbpceKW2t4QJWeX5mtqs3PqkSvna2rEpuEQm8aApSiamVea",
  "key14": "2XGn2eF1DYWe1sNWTFhJJKYpUCNFdfU94YDZ5Qb641qdcRwSqS6gmccGpr4ouXgMxr1jWtcxjxkq7q6eb5kX5BLu",
  "key15": "4GffMALFCgUNCMS63mbmCsvyRyZYfV7BtQX58BpgsEKFkjifNhamEZVMT5QsrS2emcYAkUgLiBxDo7VKLryawJo5",
  "key16": "2bjXcNQ7aPC32v2nsMq5HLnVb8RhrukmQLA5Uknzd37XdofgLVzhRT5GK926pREqVQNeumCtK4QeYvyJ8jkENDBK",
  "key17": "2YH7hNGBT4d9UFHGCMbrqUNjVxMfYv47eWxcAX1TxHX46pY1XQjkoAbhyBgpB291yLPx3Nh6a8EqbGssbbjhhfnB",
  "key18": "3A6LdGcukZLG3W11ucgwzfnLhRjtMaMY1EQubCR37TDBHawxQGHzMDYSbJqATmN5hSFHnoXFX2FraeUovpDYTczZ",
  "key19": "hkJWtadrWLTmWBJFfnyyyPLXtw7WiMXv6BJK3szShXd3Ni52SsjRN3zoULMKn5KZ5dHMqoMxfb2BzATVYjc3cfg",
  "key20": "3RLfQJVTMUXz5Gkv2PC892uBYgNeecM5Qng8ZE2jsD2ssmtxcyMsqr3pNW8DjE9nLZ7r566qaLjUsToq4iDCbtnq",
  "key21": "4fr3TzqJCUALfsxCBS7RjvhpX1LEogb1AtduuwSEYwDQEhDpJyriTRLiDNXJEDDmvztCixtgf4AgF2NqGrhZZbFr",
  "key22": "2QKn15hCqVoTnh7DaWQwE8ucqAhdDLa2PBuQgZhcncUSen8Zq8STvaRSN2Q9xW5h8RcpWEfdSM6zHJ9jy6fkw9S8",
  "key23": "3iMEADVFTroWS9LCudi6qGypwAMPrzcd2Spr3NP1zo5EwDyV1wh3WY7ftb8DtmhbadmEK8fqnrBBEnjWaMgzA5bi",
  "key24": "2grJuRLTeMT2Ea7Lu6GRDCZWXmui6dqdjH5U7SYy9iUdHE8b2LNBxTNejSPCfcTstVp5yMSNcX3q1QgKgP49s2t1",
  "key25": "gGjfXj4h1FnC6Fj1LCbPWwoJMASezLzUhGxiA8fiG33yMRfUg9RVqkx2fNPrTSG8im6rKyLL1MYbYQVCSoDno1q",
  "key26": "3PqJHaSMNUuu6HWMvsFbzkyxDYXLr2ZAey7rWeGtLxjqcXXsre2QTcnzH7zQXgCTizH5sdNAXW31QPnVvSKbPPPD",
  "key27": "2XT5AqGw2exia3AiDpsNpHTCC4ZdPvmdXxoBda1A8RUdyexb94dfug8h7vBjqzPAndFC5tFZY3nPjFgquETCPz6A",
  "key28": "37QFFk8cAg4sdoUS6KWn9Pt7L1FEeAj2VYVxbtjZNFNnc9DEB5hu9BjnqYeThNnefS6bt9WX9kydEkd6KfePwiA4",
  "key29": "3azcQoKpjue52KEDSCBpt5f1j1afTHPEwp7jMb9KXzhFLoqVNqQX4tKfdJfLNusuNEEHqfUNFZFbUCZzqmYCtmUe",
  "key30": "3QkMacUKzXopLsPjQmdWHWqoRzRdyz536pQABRRpnPo8DRp8dCmGJvYohGfU5pQfULwR9nuTPhmd97vLR7QAfvcz",
  "key31": "3U8v7vvzgfe93LcdjjwA7LJRvDsjor2ge6yC7gHxcEonhF4VLYgZTTBsRDdTwXdoat7nxUY8L1pcnXR8iWJghbfT",
  "key32": "54UXFx1AiVveRqjETc4PQCySP91tcUfFQJM9NYMGN6WyzR5F3gzoN7DbEtNDmzoih8Ds76JumkpEb4xhyD141NQs",
  "key33": "2ypBrW2y2Tzmz7wuGWaprqNBjTDDmzvviS2npvkH2bqNj1PfoAdFB7Z7JhvazudX54HBBgcN99gGN3hJQDKiiT8z",
  "key34": "5CkxDsBD176MoJjZJy7wBrB5hosREd9NxAGo3BuCMHHrHSw75hCEycJgx3sCYYtW1tzeGKn8Y1iE1p1Gko16YZq",
  "key35": "4dVRtAGBwwT8vSKNpDPQbGreNnez7WcBSxhwpb8ATN57LXDnP2ZSJaREa9NovaX9XRTUHoKp9aMuTZzFqUoeYge5",
  "key36": "2Hq1SW2Tp1uLA31RzBeyYoi1Je6ipbQni5fiw8SpbkcCxim7vjZAs1DEhdgnwBcs9vnHpKWvAi8ALHq3rJAsZQ4M",
  "key37": "BTWCoMZaET9LKrC6DYFFvtusFFimWsehWPAikNVdrkN1xnZ8vhECY4D6kg99FZKxjeWCs8agFDJi94hvqxAVRWH",
  "key38": "3uSfsa4fYN3igGQy83BEmBLUzUN7jdxPTBnfQnsiSNpKz9LJeLhUZEeFkGkKqLpT8BXPG7zxX1WuMah3HKAJDLYY",
  "key39": "4TcEvH6AJMjam8nC3QVJ2EFVZbXf93h1syyyts9kJB6zEQPqzxdgPGdXwVa9kQV4ji5BxVZ7ibKD8UQRFV9YBJV6",
  "key40": "2UKXK2qEgqPuQRXBpugk9XFPQiEHR5oyE957eoD81q4BPSeNdph1vWeivU3LxFKsc4kRHC8gxQ53bwTymNA3zvZ1",
  "key41": "4UMaoPhBj6mRoyT8nHe4n3UASEVxCLp5sNUxC69QzM43xxriwXDztcXM5oWxqjc73oUpq2uG4bKBT7tu54CKrrjc",
  "key42": "5MpRtpGhcoPHYDKknPJvtJxqqxqubNKJNvZCQ6nAp7unAi8EAh9fh81nenEdjv3sMyvwcr9BC6WguEeZ8m1qSe6z",
  "key43": "4KcRf4aMMRWZGFFEJsHVFAiLBKEPGFkXBtRhm4TegGwEP3tvQxqQ4asy4TtmCFJx8hiCkxPpsr284XrdPAg8bAbi",
  "key44": "2pGAetxWCnUAV6DTPYyzKLjkWboU5eoPDxQ6ybNCUQJp3WNB8wn569H1JQczRjub24RJ2T2eMXauRBvCw38g7cpe",
  "key45": "4kNWa7gVsG8AuTqys5ugcnUey98heZqTkzZZJ3oKPs2gbQTuyzsVuEuMCANhiQJn17Bk39wh4qpu3ewohvPXzazi",
  "key46": "2KDnpU73EFrwMFFAX8QywyXPqC2JupEvYAwF1GuA7VgQT44CkVrJj9A5izyxeypoZRZhcT4k3euWBSooZebVLr3P"
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
