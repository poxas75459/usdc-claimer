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
    "4zM3oTkc2NHDD2n1V6BmiAh9BBHWvRoBrUbDpTH76ienPXeQCAwzdWYAwtyWD3g7TqbZsnYVRnhG57UeTQAMG7KY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45wupZYeSBRbeNyV3uwh8BXmzsGTf4R5NNtuPGCLpTt5DHTiSKRKtiUXEfh63APebBUPRoxMZsszUUEAJYTsBYfu",
  "key1": "2GwSfXizW6Z4Ki7CsZpSCYubtdj4dNUE2X2QAYp43sxcCxBh4zemTeACcpAhannYdMhab94E6H7sSkbtVYCv9BU3",
  "key2": "5vT44qdEhhC3hNY5HWtABqYHU4tJhpL35eCFxA7szVFKVAKaGFmCRHzBSdghYHc7VWj1g7hw2SERGEqsMk4cuUPv",
  "key3": "2wRwxHM3ohwY5xevFRitji8cbTWT4MnkKr1o83eJXZxVwr9W8DY2PMYiN5qVrzgTMLHheBiLeLNh9PvqsrEtMtfw",
  "key4": "5Pk1ALyLTpXTNyqRccJSjkB8rT4m2FQeKM8c7sfAD684FJFQ8iGCGhAf7PLRn75hwqNQH685hx5XnQfjMcqxJ3EP",
  "key5": "5S9AUjaePXGdru4JWivfE93e52u3bkYD82DiDWg7oUZ7QKhKPJDPCc25ymXbx8fqo31mdK3TbPw1a288tbZwuCBm",
  "key6": "4kX8QAVy49aUrbQuSzaSb1M3FScxr6z99aydZzYLwbZzQho1tx6k1J1QV428g6FmadfNMQTDQmPvaL7yzEDgJewW",
  "key7": "bGTqxDwRBeuqpmrNzVJFoxGx2HLFTNtjo5gAq2t111dRXagKJYE6ZpRPAswgoYRVmZetGYXDLpzV3oLomL2MA5C",
  "key8": "2VQh3d2L2un7rxNh3SnQTp69q8sLE26yLyCXL1fh5DSTPUYuy2FsBiT3tnTp9y4Qvzaa52XL5gR8BfqWGom5pmkt",
  "key9": "4Y4jBiMMETq9aT4fiZ4VV7pCrivFhSSSDC76qUXo8uEhfkdDW2CJ3U7rjyAmpjFaex3fmWaWg76ft22dqTkqgtmp",
  "key10": "62bo7WJZsNDhLYBKQkwbU2yfwLCrKXpPKw8TkV7Sr3nSisy16RFAxtNXYzaSDZQjnXzH2NgDxn7ZUpqZxK76EeiQ",
  "key11": "NHHzkyX53HLahkgndJbFZPXrj3VG2k3ZtPv7bsCgcmfwKMo8Yqsp1oaUBNLo73A5avGYJGZiH8985HYKefTKQyv",
  "key12": "4DfvuezixkGdLycZYcYRV8diThh3eTSFCt47Yjduano3DR8v1YiVktGWfsPof13aERzHrRZXTUA4qhmrr7oaqmW5",
  "key13": "3DUYJvQA9BdJxtAkb19sVp8UoJhL2NsDAWbe7gmt11fcfU4bLnL61j37dTswx8pGXWn6Wa4TXws93ykuC9NNj7ep",
  "key14": "23SDEgJJqjz5a6hgh11gczz6zAUAP2FZeU3yF9ADAGwSPCqo6JMu8QDfkxkrBVnBUj5Fia8HfpPzx8fPh6hy7EEQ",
  "key15": "35WaaUmdqYw2GAc4aUhT3xFuqggwyeMpfRUog1snJj3aKnLM27sHqwuRhvrsj3t3noaV6YeMz3Z9KjAmBmivhhdS",
  "key16": "5dQUz6UVqMoGqnf4uzN8Jqmceh9iEef1yzZqyviQyMupueAsz6TBvQNRMx1tHVKaoCxGxg1f864NvkqdeCYKsqbP",
  "key17": "FZi2pMq27PZ6HvrZnkdninigpmbJhfjmjwvTRtiMqNmv3Vv3qFf8r8vmp5W6nQmKLArqvJ87B6XqirCvMNAmXYy",
  "key18": "5nQoPeuTntedyoeQVhcvR1SWii6aKBLaKih85WvqnvJNVG6UsWyq38AB2oFtBmKMLFj9xu3e6Tr7bEbQQ3xNf7zN",
  "key19": "5v4xFmUGNPjSgQdwYWrFoawRto4SxajV5ENmwpiyTyVKmPUyyHeEwTj5MDquKbLFaGR6qx89Gpon4ya3cXs6rHBN",
  "key20": "3Fd6vA9XYsDGgtKuDsY4Fhbh85ztvs7W7ramLU7ojRZQeiXSVm8iudKdtDe86uvuxU6HmH2TC4bYeiRdKJNztRaH",
  "key21": "61QU2PBi5Swucmq1meHKiV5rqfmdzPJjg6NFwvcy5RKbT2rzhMkDDQQK5ZJpqGazBKNJML2DgXsgNUA4ctc78itd",
  "key22": "JuoPXSoe9fArqtBzi3FAh4ruYVhQCGXJcjLPdH3YypgzBPL672MNwi249vQqvUSSHH9p81aKMKxfC2Jye8aFmup",
  "key23": "PEqmg4oQjjhPqwpKJsSFADbi7WQxcgHzk6xJdoRrM2i3N15svPpse5pBDvxxtBzqsxjHfE5CMdGqRFkQSs5NvMs",
  "key24": "2YHj8di4zQwkbXSi7Rmg8FJMDuXqC4GL4xscpD4oZehvB2dd3tZYPirTxQthq7awELrK89aUckJLa59oxtLD2M4",
  "key25": "55ZmbehKoR98akfMxQxb88EgqUx7u6S8QhN9zciVXUdSr9igCtZkYmAxHN7gR74nrEPDmUw42Q8pmvVp1XZUx5Q",
  "key26": "2av3BXw6gdj1UPcnepwuPZ7RttyPVzX8K1hS3d2iVVLwnhtxUeCb8yJP8ArvoXPPokSmh42QnnCd3R3WR2tx2yew",
  "key27": "KZqDxMV1aRKcqgJX5VqQwMYGcZqegWRUcd8ZwUxu8NjEhcymJviBmTDxTT2RPDQCAbTQG9RNE2vRmxQS6Yto8Xv",
  "key28": "4mFAhuApcA1MtEwVcfHHCL3uTGcYbrtwgeYpBWtwVkjuUhAYFtKNJpPQEreRguaoVM2qgc5Ts1hRybmMQLMykyi9",
  "key29": "frSxSkR9VbbPYgRo98ZoMLT6oZwKNyBs38GiDGmEQg4Lw4a4bcERVP1zG4Cqc5t2XyyVxUGWxrU1jc2aPuvjzHZ",
  "key30": "2Y35DuGd2pqhFXfZh3KqTPHZDGghNpwdhSnyHamTVm2JkECdrMAHiC5wUvAQQRznqYEixvbca4DD72F5YNJFrRLk",
  "key31": "4tkqDsy2UwFzdadYorxVxEabHW6D935cWYhsYabeqjwAfZtrHZY8qRQ3hkrF652Xj51c36h4YTe3dSZUjHJpcj8k",
  "key32": "46ABhkSojjeFrUFrp5mRD667SR8s2V2QA37FUGzhS39biA86kcQC5AzejCEgikRmLzfp3cNKxTnKiagGDSARHR27",
  "key33": "2N3PDu46FiWxJFoTq1tKLZmKV1sCMJfVaYWg5XzHCxGUDce4LKcw7skWHzV82Mp4g3RemoidqqGnfCbhdrB1Yhov"
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
