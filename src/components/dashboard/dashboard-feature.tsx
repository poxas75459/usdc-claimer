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
    "2RBTSgrLi3pzBzR8xpNF3PHTzTNP4bbYhAHJNtGwHzVY52ekdoipN672zqCbrj4i2T5qfZYqNoRyNcQYXDs25ZLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xPGB1mt5vim21a2EXFEz49LD82TpaaH1Q637j75tYcoeioX2JcbYzbtLbYUfKFxgnsVyaUvBWm1eqzvLvPUcvrs",
  "key1": "2hnHZycBQpaowv7rfcd57wZthB2V9t2JmfSkiNLmZ8iRg1uH3pEzDBJKHXdwpZK3KH3XmjBJdShXnt2k65Ff2UTX",
  "key2": "563g2f8osgkrMWm35VHhfToHat9NfMzJKoWTzdmnQTvv39qQVfbyENmvrRUTw3CEezG9R9oRuZVtiEU6VXo43tV4",
  "key3": "2ZZFe1nryRcnipYLUr8nx95fwAyWoGQcqyVRYYgKrYtHUuriFsGCz8V1URhgT4ahx52W6UDy24ej7obA2AZEqzCJ",
  "key4": "674G2wfkXzcPd73AUB7NLBDcnii4B1FWxKMsxe5CsbnbecEQnhKk1X9hSFbuHT8NQJWRwfSZTJ1gNowhe6MwRR1Z",
  "key5": "2hJVGSnG4CGdEWWfkrK4ZVZFHLBo5BTub2jg3GPWhc8GjgFxgBnjXnnYdhctXxU1geqQw7j1vF2PHQUuJLeYbTDW",
  "key6": "2p6UMuiQWU8Zc7iaSUi7BzyQGe9JU9xF3bwDfgMLHpZtVDqXyXb3xqiBM1pFiVQVACRf1qdAeqe9h8Aa79TZsAif",
  "key7": "d17PzWQNHraBLtbnxv7sB78uJQSpTfbdBd8N23DdXpQenPYc7RR32n9YMusZoCWQqDvY27KCdGbR9ETYHgv2F1w",
  "key8": "2MbC3iSJwPSJVJtuFhBZEnS7sSXos4aEYvs6syMFybJrvphpArsEhk6MM1hNMe4pSgYKBZALUF9yWpxV2MMruqoe",
  "key9": "ixmNq2Ky2GjUoNTg7RpxUxQ5y6niTD9JLXaNvmqcFnLuX5D65G5oVpJVyH9kFQxpyHstqoqdNvC9r9SMxVRH9Ko",
  "key10": "5wZF5vZtf8ogrAPJM2VQFdTwjfD4HCRm1wsgXo4dvCeu6J2TN4RaVgPPSSNfkhZXeF5i4te3EBwmGYQEHCxpukgH",
  "key11": "3JAg2EdfxRC9x8Z84eHD8az6zfovsyxddRaFNBM1j7Q3KuETeijoxYM5wN2zkBMcBwi5uPyGsLpU8Qer2PU6qi5c",
  "key12": "5VdUN1XU9mXQWBdi3xdrvsTixdJrGciMW3pBwMRyujJpGA8hJMgz3Qo7LnqygJa4zwG7LmxXJzNyiFWJ4Ez6VNRp",
  "key13": "3zepDbC6oWTbpLon1xpSoDkTFLTJoK4HbUQrsNBAbFKEPYwr6b8Va1RN4EDV1xQN14PHUvxVayeDRqDowBxnyzep",
  "key14": "37WesbGdSJyBT1Ec5jor4hRW4FjFHUQkHe5nNpGFw6fsXyWfPgQ1YT36UKNmLZhH9zYHvGiWvgdwVTyYyw3D2jzD",
  "key15": "2cm9WXGHvX993iB75mqXXFgJFfdaXHihEYShhfPjfmVfENDFLtSVBDMTb88JderAFvwyhVEW6E7XCiAzbsESf2Eu",
  "key16": "2yWwTEfbxZQyAindhe6jTq7NQjTBb7B635R4Nrx6sqSwotjjwEYe6GhjDduqqskjMGjdPyCDfWNsZTt585aJ3c5C",
  "key17": "24A97CXcjFNf8eWCSaykjrx4LLD5CNuKpe17bmWLvtxpPqsWQgyUdTKi9dsVdT8z4sXvC4ri56RHs9LtMy7qJMjr",
  "key18": "4XtbfczYQXBG27VWBMNSQ7y5WKyUmKBAB68tgJeRLmsZACEWj88e5JpQ8CTXGvDCt8T7yvobb3B6WS6iZ2KSYgHC",
  "key19": "3akskTSvCua36VJjSrkqCqVwXv1vGqH7sAiBxFLacFv3xZfABQgSoGUTcZLivVwp8sbSMzMZnDc5d5PbPjdT34bk",
  "key20": "4tbC8F4rMg3H1CQPqa7eDukeXqgHRWMdvZjQEkYHvJjDRDRMTxPbjuNpATNAucSfEUnNefC7wn5UdJ7J1qLBA3Q5",
  "key21": "4SqboVdoWBamyKqy8ZNDUCGPnYiomu9ELtgdxABN3QwTsioSgLAo1JgEQXFsrWYrxZYiaDydtpgchL9nD1g6s94W",
  "key22": "3xx6e7XLtHfiQv6k2dPckADg9HSTvU133PtcMq6xKnVUcYHVzg8mg9Bg2jnHPNPiN3MAkXvGzXFarjsHvqPanfKa",
  "key23": "f7Ufhw799HihtdkpbQcpqhikXurZkKzrjv1YmkZ78TA4gZny7rez4t1G812j1kGiLZDyHzAPgRn1VEW27aEbr49",
  "key24": "2p4mPxuEckLwoZyLQy8PoQfjkF2hUFrytbr8aa564nz8cncgYcooHNH36ffomK5kYcpPcZCcjmqcetxji4Stioeb",
  "key25": "h1HpTH5V2xYNhEPPUpi2LWd9TiFtg1hBzNW4znqiGFeFYffD84cN1THERhihdsovTut17VEVjVUG2mdnjoxNzDy",
  "key26": "4gtocbvNWERYvn2HWYCfrggmLBi4NNvvGeYq5ePH7waUAG7WS3KMKUi9A1MyhufLP7XZVCc2CZMdqwFWekEW973R",
  "key27": "54v4HS7quvFubJ4c5b9w35u54fHmqCFuDzVwtEhfGPvAeRRCcT19PJysZ9ESaEnHoPwFx6oVxoJD7whcLnEtxCZK",
  "key28": "3mXfjqDwwkikMFyXpEFoWxENYgU1wK3PTuPbt4XB2nHS8ZfMKtkm4YsPy5uCH4aneQkq1dW4iGpkmQjMDHZ7vttv",
  "key29": "5ZrA6QY5HFmfS3xUHy7opij2CkEPatcNyHQpgKsa3GTcHW96d58cG5SrTv3kZ2HQCoQ5qmnXFJzH4x1XrFUuTNXS",
  "key30": "3FS6a6Sk81JJ8ZMY4fNGxkgKNH1SAUWgrTFreG1kVGH4zAJhFg3ppPK8o4v2X5TN8vTBMSP3JBFKc2nnEHdmfcN4",
  "key31": "Avue96aPoNuZkCH6bVhM7baZRtEa42TZ5uAyffCH1fodxo1hAxYTTUaHkt5PHiLLAMAS1qfMYPYyp461aQNBXKU",
  "key32": "fotcECqJKYFNUQMUdC8kwDMstoSSweTGhH7aQRhFszDFwNzr8QWn8zDPW24kbPXG1q9veVTbRx2k4UaPXmnoRHP",
  "key33": "3cXc1fkQbtN1o5ftKMCoybSgchwqJwKz2YmByb6q8oMkspybGqta57GWfQuEMGFdt9TNaS4BTNgnxqUc6D2bUWYJ",
  "key34": "37WTEeJK5PdspVL8wJrNTpkXaezM29wj3TmxYJePHFURLcRLKZJ7Azfe9gLhCA3KdVtgbUSj28e4FEB4BuGjnvwj",
  "key35": "4rtHcBERZPLkJ68NKHVATe2Xd3tnwGbZyoTaBfQGnca6XWwWVuX4NWW5khPeGirZGpxMBdBUu2uVpNA8H2nS2i42",
  "key36": "51UvNmu5DHrqsXoazeLvgQScFvXEj5T7LaTuq8FZGHu1PwGrpTFRMKHmrWtcDFmnPdV5aAX2mPFdDGsVa9eeK9AM",
  "key37": "2x4fAw6P4wvFa4PfxkLXRXiv425xJJfzz7q8RaR7dz76q49HFyV6vPde7PxwYJ9sjPC5rTZyGZ6vLXy47S6kg51U",
  "key38": "48Y48Px2Ypgws8FbQUoUyEvFguVPZUtFq3NbUTWsdVeFHieSdR3af1eWedbM7QQrdF73iB8Dm9vyT21kJEo1eX9T",
  "key39": "5Jjjsq4fqUEFesUEfB6EGF8fSNjUTE3Pi9vRsieikhY3wbYgbkdYBYbr57VD5KfMEMuHasyPYpWbm1trAmobgVEv",
  "key40": "5tUBmxk7kYHtTSytDukLB9gHUyb5V2MA9E48Js6RMjJcHUX7soxHfg6Npo48ka1rzfx4Zv73jZFJWYk8GMJzBC6M",
  "key41": "5JsB2gwYaEma7LnmW8yDu6xksKnoxbTJyb3L2wVnpkiY7S9irMdoRxLJcA4v9CFvJdkam9CicDuyJ6pqg7vBTKzH"
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
