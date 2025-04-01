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
    "2QXs6PrxWUQG93JvxsUscawZ3uYyygAE9zuMqVZ1PiRihUdqH4FvvD646s2ZRu8ynmt6HMWvY7kQezTHkHboG3zY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JAJzFQrTHHFonXJCD1SCXXJPRUgdXwGYYsD2TXT57r76cmJ2K4XzU2Q52kUmSErG6wf4PqDViFbfuAm1MHdf6gU",
  "key1": "2PwEMBZ74UZgiojyxvKhJaGJmgebEridkyMc7rAYF1WT9zAi8cuNdLhzu9sgwMEjhXpsCHhzudB5EdR5Ey1JuAjF",
  "key2": "2SYN8533msszkQxtWufaJ1E2hyWfSx8qwLGSPZdu4xA5RESacEmyCgK8MCjQiTCWcX1fLGV493v3ewGhDc5o4JFK",
  "key3": "3b62ss6YfRW8Co22e9dVHZ8aVeptmpQggHYtGhmDQ7MUJT5k2RuCty2Ukq71NgrLWVhk9CBtWzB4Wcdgsit2L6La",
  "key4": "2ukB3czW6qfoivrSCVejT98mjW9qtGwXJzMhrg3KpmhJJmZVR9SEddoHLMRe3fJXBQLwyE7eUK61uYV3fZ1ehqqb",
  "key5": "4NowaRf3eEWFcCE2LUxTmmAsNj6nd6VLHsT8tfe2ccazEab9riB5T64bvDoVz4bHSLZpoQdeY6bpTzBngGx6iVT9",
  "key6": "27YuwXYqpn48PUqp9SinNin5wHZ8aKxTQqSuMjUs8D9LDKaUd3rtg697KugTwD9RdunNewgPEAQyeKjnGXiMptLf",
  "key7": "briKY2gfJoevDv5jgUnQtzLfpPWQEeDzdutQqmofvTpnUJK3bf1AYe8Uvci6knZwHpFguoaw3eLk6rNp1PNqhL6",
  "key8": "2UZWbHsZW9zPnzKM2bsDbmGSemUiTmcEJKYQgvYhwR1sgxWnKSMBG7iWQZsJpXDnmfy999JM8wx6KGwaBFCuexnu",
  "key9": "5PrkhzPvGb9oduoXY92tcAjroMsLYeb6x2yd6AjGoNU25qMM2hnty6LQhba7EWNjmGtyCWvJjPZyaP3YAS6aFS8g",
  "key10": "5VuvJoaB2i26phGoR4VZAreyWYUb5ypX4wzf4mEKx4EkZEoA9tep7xy6aL3avhF1VoAeyMhyZ3H8AW2gJcomgier",
  "key11": "3TNRcakCQ9SU1RmnaabqCwA5e1x8E6bvNifpnJmLf32r15Bkk1CzmVMTRgVzvawZGaevmCyccA25vXqNVH1JKrhP",
  "key12": "2pvGHePeNbaaSHrrB4XQ9By1xzj68krvnzFq4LFpoPgXSJx1vUMnZ72PLKSrXpMaFrdvwYYUfJgJcACKGQpypiad",
  "key13": "4n7irQevpHCQfdF99atqrTTtFnXGCK1RYXBYa1TbfUC1uCd3VUvP2S7yoiFPEetk7V2PbB1uh4cT8Dmz3GUmBkh3",
  "key14": "4NLeiye8pY91BVo91G8VcMoS7PxdHRzTpJd9XCe8LPzCrMxYcw3Br6rijgAhfe7EEre1Wykd2ntVA2wxWz2K3qVC",
  "key15": "3Bkra1g7wYcJc7rPHsXnhYQ5zVztTK9Rc6uzuW7AJ8bvtGZW56RAesGqhrp8jTLhLBUMkwxUu3unpKjnxVrsC5iD",
  "key16": "3DXcXFF5fxiTM3BQjAysctzXR6QpFqBVQoSSJ8Domo1TzGzrSWhRcQHmzu4K1XpPYTBbyiSFBHxftjjG6ivCQeoo",
  "key17": "FifuLiFGzZT5z5WRjCM5taiiPWnGSKUMbe4PYt7TZcR1BMETm1v2rZj6sCyxvN5B7oQhcJBYXUB7XCyPAZX7KsM",
  "key18": "21Ujtvgue38nZyt1nN7KhVd4cyApBsdgeg7TsBMVReyrYV1ZKGFmLrgkbDCsMLnSdd3dbTtaRDY6yR727HLnhGv4",
  "key19": "649WwjNZ5FvhVp1fZABAYLM9VxRbrZoyNnSWW588i1tsZfDC44rtiUUse3AURM4Qewpt54RboCDNdPUbvoCBzvyb",
  "key20": "yRftWdb8gYQcPyWid4vA93RnEsjFUBqhtm4pHdYu2Qcz9EjQEgXMBcKMFjDfHn6Wn7P5Fa8s3A8yBMmoEJ9HKGr",
  "key21": "5x1byzCw2ycdQNs2UqiaEXwYfnLTLCxCJhQnt5E99HRqzFJAM27Rviek29a3akDgvMM3BSSDjhfjykx52qEsrRP4",
  "key22": "4SHZkWrqaQq18sR4YUYCcyAk3FSkcQHLHoyEQwFV4S8DLLWcVB8A11P9wwnBcLAzjoCi4K9wuQ3DYWU3oqBhJzBJ",
  "key23": "56vXMmTnaPGyMduMNQdVSGRPUu6xdPPh53DnA45P5QVKTPB7NmyZ9fnRi9qvQkUuMNQZiZ6mdmsD3vxEVmQm4q1x",
  "key24": "WZq9d4ArQ6g9uhZG2rifp6Hh2sxr76HPyGhb2FuuraVuRaomGYpuMQ7yw8L7EHhphnLvi55QdtGnnj7Dm2BivpX",
  "key25": "3ecie6m8waouAAV1gRugn7HCVhyCDNidJgnrTJ8tDLNyZrzBcEhrSW91zvMGqHbXRPtKmd5T17ZHd2D3yVVUiiT7",
  "key26": "3x4RWiRcbj6hNWu7rWSB6PVMDhcC6HScFDHKTiJK7SrLmgoFSzhGxuSZV1BYacqDhCH3wWoPBDkdB2db9EmsdWHS",
  "key27": "5NUET8gbVL7wKdyU4RtzPkRfPkBp2efqB41zkqnoEQHrEqJ4iAmYz7STGFBc1B7Mwap1kgmKBrdvA3icNzvHdAjd",
  "key28": "2JFUAmxz6QK7B9HEHvEb6478yAyHaHFsJds9jgGk8mVXXvv9SEZLZ54Pwq7D9PiPv9p1X3tseX8LUAXF2pSNFLtb",
  "key29": "5r2VJpJR1pntByqZnDZ8oEKnaHdsj8Y2w32FYhru1Kb9JPirzcT3t6BW6YFqC3TtvXydK4PcxWacbJ6wMxntQVgt",
  "key30": "3tNytkJHTndpgAbKYS8ecYASkKk6Ubeu5q3MTUvfhSEbKJYsDvLH7Szs5GURZf9PAJNBD2yffmhZiYZrQtSnR6Ew",
  "key31": "5gJtZYwpSbJM9VKSBZV3ixz2xhXLHCe5W4mgDJGJJsM8RbKPL8okr2kLFrcCJS8TgRyNDXT2WoWRVm6XfeVGrSsF",
  "key32": "5scCAJtPV2Z26CGdAqTmk19DeuKE1a5KQkYciJchZv7FSQd3q8RWCtKcM9y2cVcXy7goBsdDZG8975tYU5JguhUY",
  "key33": "goEAFhuxw5KZLpFTuuphxL6eMTBnMExfhyBC7tNtZgxyyhRm3d5MHqhNvBJLLhxVWS67ZqtaWYpyjjuuFLaxeiS",
  "key34": "2cnMR7zX1W4FYL11z3TesCKPsty3f2WwAhKtY1u7ojATh1SGFQzurACphenWSi7z8Ry1YaV9pvwWhjy8evuR35GD",
  "key35": "4jbtwKLufbdSansKnd1HNg57vjq4F7kGZyjdDrfs6SQEk1EUEh37Cbz9Zoozjm2k2UXujQzgtPziwu8zn5Ri2qdb"
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
