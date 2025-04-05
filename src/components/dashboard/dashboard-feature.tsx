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
    "2qLMfzop99Y315tNdZfXvW58zSW4DwUw1c3S2BfXUAbCA64EZzXY1ZBv32Cwe866waQyJiDZdA4gXQN5XmyyMCet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XMHk74ZvwPHHBsGiXVFYhysyJJ9Yc87mcptbkG2GxLuzTZYzHqV57w1cQHzWbw716dbsp5aEbWVJxejogYf9wPc",
  "key1": "5WCa9XdEfCThSDgqF4MmCGD6rdmFsZ5m4zXkwvpb4F9EGLWTw2BSUSBRfTMVeruAeDfaD2nymbNi4fpu3GL7wRoG",
  "key2": "45TgydFGn391MWFjzTQ9Pu13EBsFYbzDTGW3TaQcByLxSAScbVDozTEdZ1ahTutUTrNBipc77kw3zQRwSvUG262S",
  "key3": "53tseCFrsBYXedPZ7ZC9vEgq9x64wPEsymaFadRcW9aqeeBM4vvTXrpRCHWXEUTeqFiNihE2MEvVkBkJTNFVx53s",
  "key4": "2r7me89veHi4M7ouZf5LLELfUDWgKExYFSHoQSGeajJjC4Qq6oufx5PFwDZGRioeYZZE1FXS55qYLXRdb732Z7vk",
  "key5": "2DYmcqMPA6uD1aNR4Xg9K6mkr2cx9LSJXyYMTHMdhLf1cP943fqBtqJNSNj7MdDYuCEwYREsx1oAML6GtdFuvTK1",
  "key6": "3Z9s2Aw93Wygi2RuqhknBEDhvP2SmFD7rAG7t1Vgt2gQTmW5Fwf72MqJmBZLR28QqQtDdVosfDae4Bruz3jYGXHo",
  "key7": "5iLhLk5vuLMenm29qbjCyFNVyyLU87oa2fsTDSqT1ffjCmS3oiaBvjJuE85XXBKDvpMLddkQFXXZHRpJJymXnRMY",
  "key8": "c6bCqunXVLL6kNgGgxu2GwaJodZZY2uG5LjntduNXN4uc1ScZCWWKxj8vjNW8g3CcoLEionKWuLEFu4iuCo24m1",
  "key9": "3Rpj4ZDYLG9646Ts1qBWzRGgJfF16QvnKVcBhj3pybPEejd3SdhNX8krwQcfePv28PGbe1UuMuPogctixYXZCnw8",
  "key10": "3Afa1gXtYm7MrT1k1Jg47ULxxgC88v7vrETw2CeUmkTAdY2ud3BoLBwYcQkoqTP9LkXfzxJGSUCesdt8mLZ9WweZ",
  "key11": "4N7RPm5adms5MsaPCDrGd375kwaKVLo4FDXsrHuoxYoufPh4ugY8GJZ24uzAJP1wN7nCZ49UY6CdVRK2fhDqzo6G",
  "key12": "3NqB6KdZ2PSg5jgwx6de778aFa6U7tjticHrSuiJUe9zW6ewXYWVnYA3X6gd1X776peFhEE6ZVYCqn67zUpFEGy2",
  "key13": "4ysVCjTqBXp95KCNMsf6rnWVEa7ukTcF4hHtugQHCwfLxbTrbHfcz9qBiKZ7KvS5yLrRmq6RXxjogzA1jpgsCDA3",
  "key14": "35Cg3RNHeT2yZgNyN3UgsNL53VrNepT9znPTWt5vL5SgEfMaYLC9nFBoqAPdoZdXpgB56BBjEFvMqeUuehJefetw",
  "key15": "5xoDaM9BK8YXhnYY7TG2h85Nz42uQ4MG6j7W8WydECb3QRZS9fZKp7ckwUBZmL6BgJ2SrpDZBhy7Pf7tKzbwvnwj",
  "key16": "5We5iKMC6x4yD5pYvkFAKAd5x3RFAhvPmpakTyr1ysP6RqeXhfj6xj6nCLYQMGZSMgASFRnHR4GcvRJJmKMq6uwi",
  "key17": "4WrVNP4TgznkgaD9Exb8EKj7JnyWLEkEv4hvkpWZjP2Z19ffosXHZyKLF73kV8FJXQ9zaXViXMZXffFC5sMmmJBE",
  "key18": "3BwoJvyF1ZT7QUc4b2AmEMFzwdB4TeoDJZrKDEovHquT1R3Jm6uXP9SuA71CatqWjBQH5NaiUduqThKoxcsj9ieD",
  "key19": "2SoRyeGSe43VBAinjHHtgPAcuaUjJR8HjWNiVBbjTJDPtGiR11h3jZn6jQ8wEL1sE2DSDmuqg6vnNZDSNPwZHURb",
  "key20": "5fPePeW5f3FbVgv29AFZB5gT42yMcTkqBk7kXAh9CAaohA48gBNYoNPAq9pKAf36QRdhaYvhnY8PzdKgnTWU7e6f",
  "key21": "4kmyhKwH9zNZGbFDq8yWMC8VHadEq7xTNNEQPb3CQf4XNpjtkddFd2rBtVPMNGnuzUdpd864a6AAiQNuqLrP2ocX",
  "key22": "48fMAQb5KdLUT375UUx6VMiiKJAs3ATWLW2hv91NL4tspyZ5yAbYPTcKeqPBxA8K77b8ZpBAB851faj5jn6kHkQA",
  "key23": "4f8cTR7Tr9Pixq2wyJsJPgGg86cs7wu2Az23KLbvqEUiAto6etfc7TJzuxb2pSo3rGty8x9fTs6PpW1BQy4LUChn",
  "key24": "LuYr72kY9weq7qSVK1FHGf3KuS45x5pU4oe79zQSBktp86GaakseMwHj78Mri97ou85BfnamMT3d9Umv7xbt3rW",
  "key25": "35dGtPUphZGrNAojJuwjBKwTGg4FYAKhE2LuWi8ReCEdd8HM9Q9i35CVSfJepBCKkn9fvEHT4TPpmVQLLt63SUsm",
  "key26": "q9mM9i5raKad9BP1W4wd7TDfgTTsbCsrWY8ZA2i1WSzpk4JgEs8yx74TpRTNjft4ruHyoF9darRJwHHPLmkLCxi",
  "key27": "4xXxmtERask8WbMD41bdLjFmZupc6CGfraCRngAULqJRgpbMFn1xgkhKTa6tp2dEU741iWEMc9bghxQFAaF1id7U",
  "key28": "2CG3dsbPa4mcd27NFFQMRsdCwpB9xp6y5djBaPhpdrqmmTXwpbMaJBcaHxVvsepDgVjnRAQbVF68Gpgt8uktFErd",
  "key29": "dMWtXksjVUuLmFVRiMXi3sdwS9vXkFkgR5Rb1TW21mpd5FQzmSiWbGkyyvkGT7TPAWid5JtTU4WZA7h9aSca7df",
  "key30": "2bH6zsY6GXHx5Z1s19F23ECrwP8hn4k1nRJv8aB8f7sPB85Ht8L73uo5LC469PqeouYgHpQoTkHvusCguXGHQPhC"
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
