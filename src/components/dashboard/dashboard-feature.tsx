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
    "2MbCToVWRNiMbs2pyfX7eCqQ2SKatt1JYhzUDQgxN1YpHuXcrSqTm49iPDkaVMaQC83vViSnNDJFW8sWugS3sATD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V7cFKq5Aw8fq5h4RFBC9KR9JZBeAeAFVvb1wueHSBiDhrR8dSARhW6vtRsV8c8Ho4Jinv9Ga7AWXcM9XRZRn9Uc",
  "key1": "3QzjNNggkeYPjNZ9dfnJZw8Ny997J4ht1wujDHrPJUFRDwkcNA13BudrMFw8BpW9HvQYH2xWMnbynKvTYgk9kcXj",
  "key2": "2yH3z6BGXWvwYXGSRtATUgMcudyuW3SNwHjEofZHmz2tshHUXfKMJaWZX33jhEES3ybcLDP87kFqzcrjTPZjkPEJ",
  "key3": "4kkrUnDLXAsNRYfcjTRcs4c5Bu8Le7rMuwixp6mQ36GJXXz8SU15rqfqeneYuf7SKKaEaAfQH6BMaZAFtNLnnAoJ",
  "key4": "3h93DEYvAu9fu2q2r4ib9R4zryTgQmceXms3QPrpq8qYubvjA9Z3ccDhdBoa6bMsUHaZCXQCEPpXm4mptLgVwtNQ",
  "key5": "2Qeg93jbXJ2q3sUyZRjrGywP4XZb9d8FVevdVTPMY9e8RMEXHZ5uFFRHLGYEyhTuorxQBNAtwjjRutAynkpcLQLu",
  "key6": "64gwJF8JEuQEtXBxu5NgiEipFKPE22tYSh3R8isvB8LBRZgheuG5xNAc6mKjgsXiNnb8f2SmLxCkGvQySVRVRBxH",
  "key7": "5zbhYoixGXrUsmKHeHFJDCP1uGM6P7fRhQ9jEdVCYWhzUUybwYZGTwazrkaA579JQMUFRfPMUMoXGcu1Uo1saCgW",
  "key8": "RWZWu35J7Qg5RxH5CemqH8Xna5fQYxdy8nxPLJ1BujAawZ7hhpbYT8tTwX98p3HRptBwnX5XQaRVYvjn8yaXfPG",
  "key9": "2o5u1Rg3NwvDAC7H9iNsWTKsM83RwnAWaKmMS4p8jq7xiDozgcKhiNBtwGHYfYpVADojzdCzjrEVSqhbpPWRzMaV",
  "key10": "3vHYg4vRScVyYWFogPPEkepxMLPa86cnFZt97TRFwhP5NWpVtj3i14usm7ybEocVcZQtdNwUacpUnauhMDkGEZ7o",
  "key11": "3tiAu2ucSoBtYBTeQGsHxKSTo99RcGoxaMYaZrKvXCgkUVcm6b4jibrx7Ezjv6UB2Hay2PUUP22A4iGhYq2Sopjb",
  "key12": "vMkeFc7qBbjQ9WsN827mACPd1p6G5GFYnSDLXEfaXV3QvLSWKbGZfRkSiBNxAL6y1JrMD2ufBmG9oDQ2p5YnP7J",
  "key13": "4RXy1GoLm6cW5U3C2BVth6Sa3gHRrT1dnf3xRnR5JBHGxoSWMAqBfi3SYh58rLZB9SsRMqrFWpZ2CbSMb1Wmvz8n",
  "key14": "4RzqZod349PzxiZ14TSjusYWct42uVaz1kr1yY2VfJfbSdn3TWqAexFVQZFt47EcGP72TN85wb6R8CJWACwEjbPE",
  "key15": "3rrZnECGkFmXkMt45RnsYbfm7ThDZyKCEUVv1YWkDEAAfTjW1P8XCQVut9vNN2WFZC2EjCPrFjVZ9fudZBx2uxkx",
  "key16": "2heV9LqjTVrPxdXhz6JaDn2itwbrk6JeHkc3SqpNKcowQboNj4fpRrrhZSkAB5hXUxaCWcWejR8xektpfEih7tas",
  "key17": "4rs9juK4SohVgzLCfE7EUoT6WGyPGZ8b3P1dYsS5BxvV6U6qaT1V5LjEfnYkxqSihDfSCwyf7gEzZWQeC9wYzEfs",
  "key18": "3kaXyWtMFZQDJQPnFBcxE2sETXoSqnnfzHEyM8JvHFGFWCDQASyUhoAvMzqqoYPVeM6Jf31F5YKbgykjsL6b6KhU",
  "key19": "4edfnzJX4s5YL8n1uQJxTyX5SpD4nRs9JD3sMAyUzUZ79BM9bmyfgtcRGFkASNnu7KdrCvn3vEyidG7TsyyAeGjP",
  "key20": "4CLTojHeSKKSy4USPusXYJREvk2CNBMNz6vc6T6utxcoDzq8JZWab8rZv5VXxrVgbH4DL7jdja4R8oyD3ALnE6eL",
  "key21": "4ahuYMNRPfKdTzh2VqfcjgQQ6RAvr3J1PrtTguSuz59ivK8DpTAdyUnzSpyRRgNuSWJyyjS2Aq8Jsef2aFkv2rUR",
  "key22": "4fpCDhfmeGEXsRQcKuxprwQfwDTNhSkDFvYe4oKs4dtur1bi5vr9ih2YCZbC9vVsrMzTNSAYqyvwebpp4UyX5xa8",
  "key23": "35XLFY9mgP3wdsQVAHTXgzKEejHYDcUn9XxidjbtzKjsHtqWovrkggGqxausDaNjkXfsEKi9jdSXhVR9gGQ3ccYx",
  "key24": "4ExRhkQA3nSNDDAsMdJNo5JT51hJtptSDaXtPdYk3qrBZUptKSENCpMRdYDnMMcxYz3JH3CJSXPWPfJpLCEVYDK1",
  "key25": "Xfm5KcGv8qAeQHmr1X5QxXxyPBnY5xK2NnQ63BtPpwEELe1qa47dEmJ88wXS7VdFcytiap8BzLq5FisL2hgJkJ4",
  "key26": "MDhoiKD4ybDYg17eZYjfgrnxiqGDVhUhsUagiPG4xiywFmaXVBPGfJg38RGdW66GhJVRwZxkXkGK67cA33mdjtC",
  "key27": "25kS8pvoketFNSBF74hjc6gVdKGQgdKq2DCCXA68ADAkKHn3SiYNW2R4o9poX7ZWUkLTKdjeCHRW86oKn8h4SGuu",
  "key28": "2depPKQKHFq8dsRz6KH6RZb8Zb5eosncGswoLvtrp2orccXMMBr2k8ZfRwRCM9JGftJd8UmiieCDhpqGvxq9ZSVb",
  "key29": "3TvUAAto78Ejdk5HE6xsGUxKyFwgfRhKRaPtn2ogy5MmbriAs2rcb528NmAGvgv53YxyzrRLUbRz5GGCkwAm5UPd",
  "key30": "2JQv1wG3FFZjojFSvymTRZVQzybZZmq6xa9Xhwu2Qo3kTwnL9od9VTUh1EcQ7XYVB1QHHY47bYp4JrYPrHFhCUn7",
  "key31": "TZLhdYfphwvPtYne8msQnRwhARDrjdXMhcfh2Zt6mZkqXr6tgmcYHu27r3DWx8b63JszdwWw3cS25GLFmMpwLBg",
  "key32": "3WSBd2V8AJJJifHqoRTwFuSsJLgWqmcGFaadkTsHKWftq5RaTSz5PuukdhKJFHGhr7nWertLggvEjQZgfDuwVBvc",
  "key33": "2JjGiHD3CAkPDPTJmKC6h6BKHkYrnQj9dHkD7NAb5kuABKp3r8HhgQoJstJDfycsMaaRQWgmZXWs9brgwTP8jzV4",
  "key34": "5A5wgVhJSv6bpqvFbjJ3gtJZoUkAi7SLf7wo3z8URnVCxea5pFxCFTL8rZRvmJNLmwjgR89kfRmkZ9ZS13au4EYx",
  "key35": "2DETvRiij3t2vWkSwZNksHRtuoArJh2qiAkGYE7k7Q1JTNdY4C7pXqqGG8wEuSjGkUMTrCU7R6wiXQSVM6TejYJF",
  "key36": "5XKzG9fWMRU9wTA5ncoefz1Cr1x8JdXNDwnR95G7GddgmW8L72RbonbeC8obve7Wf2HAKK4xE5a9tazcXRbN94Zn"
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
