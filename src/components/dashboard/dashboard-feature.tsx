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
    "5eEmXmyKGxNN3wZMTWammBfeZQF1dPpjLjBvWrukpvhHZyghWq2H6jRrkDoe7SHuJJ7woZq8a8auC3GuaLsfW7sC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LBiWqHeKa3Vrb5RDBf8biKhkewMcqe9ACYJGWcCxwavKwYijDdEDx1j8eCUFZDWy7DDL9VjdRio7GDb8sSZW6YD",
  "key1": "5iCSaNvs2xw4ds1V8cFyMtscXyPMAtLUixawBpWmPrqbDxQJBgcxPVtmjs8mJwW8WZ4ifV9j5Xn6rrFEbB3QjS8Q",
  "key2": "4HEM14XHxzf3evkur8T5GM21YCfyd7KN2HNWhtr47SkrjgUbysibqFmGagKNZrRCHHA1hj3USRXVvDTUJ3JVuDAt",
  "key3": "56AvyFEMsYDgKFzn9B2CYqB66m6GirCNDQX3eGWr4MxJT493fJt9KmHaMWS3BE1nYzFsx5gyBUS1V78Kzun8vVS8",
  "key4": "k76jrRQboCTzW8LgA5KSmHRSc2ud67sFBv2jhkDoXhz6HVFNZAS6G8kwS3oMujR3eDiMCAMUBoHRPagDwq8bqJT",
  "key5": "ff9Ljf5y5Z3mzADjcTwSAa5EP7hx1Guga2vSVDVD1UYW7MWAfGKbnugKKAs8ag8TXBTHX1annwQ7KxUgQpSRfjs",
  "key6": "4Khv5vpZNi8YRWt5STnrqBW88moEyXXy9tS6k2kgytVs8QXMdMhnFyHmHcnqesAEM3kR6J9QmQE156reMqUuxo2d",
  "key7": "Trp3hc6mEE81Ar7diqns1eLcYfyJdCLtwhuQHgjkYi3tzefqAZYufbDwkJAGJiGTau67qhVKYZoTWoAtJ4cRMFW",
  "key8": "56rdYPSpzMPU9eNjxJBzLQK7p3tVAdWfmP5rVu7iEksTqz9p5GNGu3U88QP6M4HZtypnQr9z8sA9NRKvnjz4GVMd",
  "key9": "gPLVtn4J7pBbv7HTajMZq3qNc4sFSMaPpbarpS2t6kijev7bbLN5Q79r3Ad7a5m2YdEALFMM9KGYPmNNtMpwhBd",
  "key10": "yeh3WExHdqjY8Eo29214mC8eRWWWemWKbCNatQej8gr6gR5M7rs8g4mC5ssUL56KATfrstg9GQgx9bMcy5KQ9aP",
  "key11": "3E4H1LMZZRoc8KduHbjdTQLQKQs5JrP9F3Ax5aVWyycMYq6ptgsGG3PR51qR5XpmXEv4nSPBxPJc5fcr5DAh2ux8",
  "key12": "G6KGXXaF3wuTgoQDjDRmuepqKEb2FubJKk7tj1joLALraTUvmxaUtDwguFBniTUPDtqfviWdkwE8VtF1ZL4Yh7w",
  "key13": "5QrbkJfUTqg2beFowz6YkgdDthcTcBm2BfFHSJDfP3eRnGG8Ax9bi5k22tsBjfJhw6bJuB8HucN1RmgbecSG9Jij",
  "key14": "5KPoHBWxqPb9eotQc7dnRYJrBEnUdeZ9Xu4Z6i99ahvcizRzr9rEvdxE39oEvJmKACxNb3cCGZgzMpNEgEyRKFrT",
  "key15": "1WK3XDSU8UCKfZCyva6AH6qG6LcMkjfz4hdexRBonWUPmgAfq6aYJBCUnLSp1CgjwCJYKFczFZwSv4x9x5nHtxV",
  "key16": "My6s1nGG7uMKRRz5gv3KuYXiJXFsVqYHcNs8nRGfYA7BiBKC27RUaDUwyAtUGEoqMvwP8Eqmt7kRhRoxFXqfE3g",
  "key17": "4SAh96EyUYybHGxPBRSkQzJftQrdTvNbCopPvKpmXcdPDHKfZ2Z5q7PhTzjVHcUtPs112E34MAX8HvuBjyy26aKe",
  "key18": "5JUCSKURbvZYU1QxXiwbh4YZ8DJtWdNzUtaMYgY1TQ39VjYSBDa4ukay1ihTTE6fzevX9vziUSqmhVgsrN1FnmJy",
  "key19": "2Vsv7WBnHKre8Ke18t6ENZmdDwyoQL5YkkzrR7vjLQPwp91scRL7tw4X9JGAn6hzWdUbHymArzMLN8PMc1yhJG5d",
  "key20": "29UkxxiW4WYFBg4bkSGPXd7rfTA2NyK9mz5Aeh6B6G8xijXgM6NRUafYmX1TzBgJnTxrrjpWnKEeyK5Bufb9TTy2",
  "key21": "4jV9pFSx3H764BdjxuANjSQpyUZZQXZuJwcQa6bx2Mvuxjj7ZEM7PXyQMXkjwd6YiPfmqigktxgB73gGroPJQgsk",
  "key22": "3phpMXwGQpyA4A32phTbnnyxgrspvD3moTF6CiSPqD4VJdDMQJpxpqd45HpckNcK8uhcpYzxVXjeatk6foVVw9SC",
  "key23": "4eiSrtJtqiv7KEgcjhShEjeF89ALfLqHmaJUqnpePivcCr2eNcV6fgRbbi1cosLZBBGEQJcDfuXfRz4nXk6wPvqZ",
  "key24": "3RDni6kM62inWs4kA1SA8PsmM81xD3vbnFGurcTbhn7aHCEyDeJ7kQEULcuZonN1r4ZDrAR9rsx6cWSo9gGwuhDt",
  "key25": "hsGttHGJBnALGVW1NqwsbXrCZugSEGM6zFyuFdZd1bSmzk4iiYaKPmyUY2eA3ucqp476o7EU3JUuhchZ8LDBFPz",
  "key26": "5bTQgkTMYm5STNFyucTRX4eWeHcXMrRrW8cpNpBNHB614pSeFxytx55c3ai96gh2uMKiBcnM7f7sYs4AFJCX4v7F",
  "key27": "3nASDBsJQD4fXy4Rcy3Se7zrtGTkqEjpmb76Xz6QCgb11MLsefoiJtGbWLeRn1gHLs5uFSD9P6qseK3n4A1Dp5qX"
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
