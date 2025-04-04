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
    "4NYuwKCZaY9CX3s6tstJSEoCJ4rxJf7ivnLnAs49KXhrzdo7bFmJQKW8wvaPiXiyiapVpoJRigqbPmVAL23DGYMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "asMN6XKKND63XjTFZ8RJDg5Gh7D3LtVvrvh2r3piwMn1nY1kRzMU6Y1v1gumPTamor3YEpweK2P8HAfKHcEMm6D",
  "key1": "4ghVhin1bGm4ggKjC1VvezreadnRaqBtMh72yX7jnhCo9g1WpbZxVdidtpCmXrwBYqrq5cUkmGZPRpvMqJp2QghQ",
  "key2": "4g7bcrcn4cbUFCFhZPVJGhABFDiqjzbgTYEBHA2dqXB3i63ukdn6cDwgQhAftLWogwAcCKYvQaTTw7oH4Bih6mfz",
  "key3": "3CXcP96iJtFJTdBaeaMrBDbCuveMLLhjyrcuNmxEPmaQExAyGRiVQD9t416htz4PfWdfrb958veJVzo4pvp1WGhC",
  "key4": "5578eXjZTwse743RGqHmPehV715Pc9b213ENKmuttEi25jdYMypfnajg6qV9hTvGN2dCyuYG4wEtXtjAdHkuoBtC",
  "key5": "3Mm4DKiR5j7YCxYYoVTqmvN58GavoWhMGJmwx7JZjDGJs8Pzwaxig4Dd9n9R5sJAsHLVmW4CLRdL8DNh1cPP9Aa3",
  "key6": "4irTsWd4XhMzYdijEAo4aqhJ841a43wS4FEnFoNVJnwjC5asvpbC1ox1z74pY3BBXGdpUpBC6yLbvLLxphsD4bfd",
  "key7": "4gCA8CRVyDTpEtVe55mvvXDP4ReTrnYt3SZ7DYpxFNGBvJpaCHtHZknRKVictqSWc9Fh3JLUZy4LJwVbREqzu9bv",
  "key8": "3jmmRMfWD1QXJgQA4nESVo9dknjtstqVrVSw4KhUkDx7bjjX9GoMc1vWf7kmV26DtH2W1x3Uhefzq9fXV8yeFJn1",
  "key9": "45RrZ7TgHt3wV81bxvKxe1tVYdYDR9uhP6XYjnfBEJgEJ8Vet27CGyYbEvyJxNQ6xknd639SHFtpY326R57BR9qB",
  "key10": "32nSc4JFNVmqpE8sv8eMgzLCAzZz8anwFyXaZqPLVfSsMWDG6etgkMRCcKvcUKittq7QiiD8YJJjxavepppJaxRe",
  "key11": "2ewJaSC26ac7jEoh3WQCm1bu4jQs1xh3zBMNsgfNNmrzNdb6qYc1w8KDg7K1YxATr2nme6QjEJz6WMkHbycbCuXk",
  "key12": "25F5tkDMyLTVsQK7coPVyeZT7QVxP7dFX8raAncfpb1kMYFTB4xFszvZDPMmpha8vEJhnF5NwsCDYnajY3yHdFst",
  "key13": "auQDqfWR6kK43i53oiPaVyabexYikTCVdSDz8mkhhq2tT9YVNSRVSp6pFF6j1W5UX3QYU47njJYynimjAsEnQZz",
  "key14": "oNeeTMWaNjhFhFHa9z3dy3zAKCnStzykMJrMBpeZuoGQn473RYK2AhaMGtEuEwHfJHf7CNwnQVWdakVjLfKZW7o",
  "key15": "2sF5BhxARRuC9hC2huWhZ44Dm8HKQvfhfosFaR6htStvBDQTNh28vfu9TGAWoAEsHH2YMcUqovnuqdeabSEL6naj",
  "key16": "2qXzMDZTYEkZm4MAoYDHSzhCvFAP8Duu4KKWLHxn4rEAWar2aZZussdGhpzsLh2aHghFDLojpryqt8hqPDWgt59B",
  "key17": "36bExYpWkBiXrTZvV5Y4v4DKi17dtB2EmsPvMidtM89RM78zaFnEqQ5fHQYdqSNUBzXJLzHWNTDeJkR7KRJespin",
  "key18": "3pms4wSJxtb1tZY9cE37PZ3y7vUmsjsAvp49bgUBVqQ7aTPzVQW2QZ7DpuVq43Qna7u42E3nPEozsn5ZePVQySan",
  "key19": "4GQh5H3zt28mnX6PNdxi6YvJbd1Zt7gbQTdQgCE4ZzdbQWYXybgJo68fVbLCSK79EtSAntWy4AjZ1WMyoXhFXyMr",
  "key20": "4nneC9R497gAGDLaXT4JEp8CKsUJWU7WS9YudeXEkE3wurHWaMBRbLyn9RFqAURA7y2WNFRtEnKu6GgcfUwm3yfx",
  "key21": "31ryf2xT7bCtA8mtaDjaPmrSXZnNdK9WGYDCJPbXp6eJ49KxdfgLCFR9bcptMCXTzbKtER5Ejfo2CcSmkonqNMV8",
  "key22": "2VnPTgsHEW3EBrh9b7yD6CageE55Hh2tAuCYamYkHsB2MK2bLKYwE92iDcGDr7LpvkwSd6G89AAghKU6XMZGHNg3",
  "key23": "4UZDAJpMqi38TQ9HqyPwDzk9c8x8xqejXgR2ouWf6zxJ1fGozLjiRJt6vZG5JymjtNjYBDAG2qCjW6z5Hjnck1NF",
  "key24": "4sVxZmCNkcdFP9PshkeextuhLqDXJyBdAhEqtxVbtrVFFKiFBZqoU9UcRdznK9BsthkvqZHtSz6ep5ZrPaAPhPGx",
  "key25": "2S7JHAoRCe6H3988sTF1LQABVB4WZXLA5LwAkVgh6DqvSHpGc4EffzBN5zPuE98PExrbWVq2HUtKafEM1SS8fAAM",
  "key26": "5AsYjLJFc26X191EgDRrT3zuwaepxmN6ntvy3SN7zhykjE2HemahcHMeFKZ49wdsejN3T2aoPNWSqu927U2obaZ1",
  "key27": "3MSPQjuDYyA5M3Rq2wf1J46SwVVwZbH7ZbaoHEugLvyU9rhq5rxzmQep8CbdDhosevsXzJGtJGF132xReECAHcoE",
  "key28": "5hiiSk5fneJKqHQQceX4ChfkYAaMESUXz6B432kKropdKqtqLqJywxsrxp3mxEXEecncha2cyTYt9seSk2jcAdgy",
  "key29": "4LcGnWMpjxTuHcCN6936XWQrDQXDxwLCoR3fsBLdC8RFRcMi2vQWdvQV8Vjmcs9TGtVcmQg5hVb4sVPMakCT49yF",
  "key30": "52hLZYmzm2rucPTQFk8KKFK8xsm1mxeTwoNFf4yaC8fieL8q5E7FsVcpmUT5Sc8bSuBnahv15VdcLVqMhWDEf6xF",
  "key31": "4FYoEBAcXwRch7FxH7rHENdcJS4arbDo7EtcjpQxma9s5PGkdH7pxntCUULxGaYFFM91z9HgvUsE2FyZEuQbQFAd",
  "key32": "iVGcNztCpTe2bZAA95PHX5dQ9QqMunxtTKhRrZosLV2Gm9ruFybnGeUKoVHAyijGhv2Bo6rxtJ5h4bqUf6RVGvD",
  "key33": "3wbSNSovrQjsSdKdYP2ZhJ2PQ5pLYncZZSDRwYzFxYRdvvfMnWuzWxU9A46NK4XYYq5vVofjx1HdJVt55Wi7uNNU",
  "key34": "48sJxt1yjuL1eK3DrRKxxuiYS1YtLU7GiqR9kVX8FU1AEbDqcJjFhWAFoRvQ8YGCSVTTSiiGzoBVYugZKKSjAJEG",
  "key35": "3aCuJYsJiB18AuNscTPbCc7jKsj9jAss3NJoNRoeUen6Ewu4V9HABxaEcyfTq5DbNZwyMejuGYJ6qz7XS4ixL96c",
  "key36": "4z9Kqs5LDPYVr6evqmT9basr5afe7K8DMLeiVQ1oP9BzY7VFFX7jLKJvCqRNZH73UY4fBeTe8pCNCn2xPLiozVo8",
  "key37": "56Poe1WcKBEUyrnCWFwVPrYZ95bZUFzymJN31UEbuSJrHbeMFLvxNFbD9wpx7eNc8TT7dDYbo7LWBMg4F6kD3xAC",
  "key38": "5d7R7oRib1WqjQhk44XgEKLsSNRxfTZZqTKqVhr78sWrvU3pqEDamLjvtEgvxLDgEZQD13HHSPi8TJwShAtfTtQA",
  "key39": "2pJbwNfhCJ2YYmajWx1iLZoEiY7PvhK4KXUv5THWUp2hPySTjo47bp7KjQuoLdZTcXxxMxJujJqSrhwou6HU7M9N",
  "key40": "4n1AP5TkZSXDFCQ1uqdRH9d7jXd52K1GKUgo7JYGjCcU99PsgEKFyrCQWaawoN7ZGPpXmwkjkqWrqFURnfU2bXJd",
  "key41": "2TxVnx5UWTMjeweHgi7TRTDB7xmyC6ppyCMfZoXHjgkMqxt1Yju1Za5hzmzCx5Sq9qV5de4JKk7S4sgf7HE2YFzd",
  "key42": "4RPDKC6HPQgghEq5MhBu7PEwfxhyx3nrPvXy4hCGcjMjGCddZryeVpYDZ8Q9YnK5WXxkfFMGwRbhvVU9Ko5Nh2yJ"
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
