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
    "5ot5NgMC8beXfisrqtKgaW61YR2TLzBTHtGFKHmnYjbE59P7Pk2gaWpSZrADEh1f1BpTQAoXZAWzC7j6JLidoUfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q5tRy2Tm6wShjr3CixeCMUJE1taRwQ7MS3XmfidXgKm5UYWK1FNJzemwQ9j8FZpcW8xxFHWst5jnt8ReHEurh68",
  "key1": "3JCUmZrx5MkZuqoeU8CrMZ8LNHk929PZa42fYdEGRrssXtpi9EfXWbc3AY8qanA8jTGRd9eT14Rfx8xtJrwbAzwJ",
  "key2": "5fHTBGVXJgG4GigTBMe6T6adY2uLoneTiEC3U1VPE8fSVemzgJ3bgTbWzBGTboCadYu4Fd9mDqsp6h1njtcpJFtB",
  "key3": "3K5KiPtjY1AXTU3gGCKt2ZeqNZZTM9b71WSYDx4ymrjkd3QzvGJMXVttsb6UDSxSzjhAEW5xJBQ8Xxz1vrSZtvY4",
  "key4": "5HJaCbTcz32kMwmP4RDYt6pdpcquMRfhFsLpUvYMH7MYZARUWSnddePYfpodvqL8igM6Nsnsk7oTwLTz4P1dNS8u",
  "key5": "iMoeNki8mK63d7jWbb1A6eym39Yn7jVoWZsvTCqcUQe9PBm4ijjgsgkhWTe7f1nCyrktXjojGEN8S68dUbMQyDb",
  "key6": "3pbeH8KsrHJrvt8sZF5QKXJdQK9npiNNs6aptfdHPNYGKFnUbp6UemQjCkZAQKLYqQcE1YiFHhSUDLboJUhrqgPE",
  "key7": "48gJvoMGPeRSt3hkCpNyxZA1MfrzBDCx6T7n8WZhqqCgrBiLLsgcF43nY4oL2to8psAjMEYcgshErgpjvEF56S3D",
  "key8": "a7ushgGg8jQpJRN9coPKY6pKaLoZk4LHzRv38WDSB7H2R9qafXnBfEEo4VNCUJhB14ZSdtX5wawVj4TsSAbjsXC",
  "key9": "4LzaPHZmdqicCiBLH2fX3X6kESUdLFgGGVLd8eGLAkEsns1PLYh9UerVzFd1c6rwfekKaQExCDoMDM5WKe6q4LjB",
  "key10": "3g9Jyakz3ePj77Cbpy8DbRcZnB5aQC7wbLTXW3Z5M3FCxKEibDZWkmGiFCingn5UsTMhUY2Yjqak7QCi1U3pokCR",
  "key11": "ou2MeJE7bPprdFquN1ovSVqnLtbUBRSR23Q72eH78QR9d3gYhuxggc7pUz1CyGNJiK1zctdXpQ6r21FTHa2Dsv6",
  "key12": "5qVKDWUGnCnvNrXw8KCP4Wb1aFTdAhVBLD73kfB3VKQfAMAC3MtqgqsR7cewomxCek5oz61nzVUDiGDzBQqKaWxf",
  "key13": "5T5TRXhmjiwBCHRWQgDkw3ude3n3D6kTwE7y8d3fL5tM83oV7pUkbocNo93TXxJVUxDqS35gqfGPVf5HrFz34Vky",
  "key14": "316sJoPhU5kZ4EiPRAK9YsAAdWVju7Go2A2Lx5Fw2MABxkeWMWpG4d62zSQgsvHJrWvzCXe7uUADqNPFuXjBcBr7",
  "key15": "W3M652WcdK2rkf5vMcS2p93YsY1eBQwpSNcSiM5CDek4osgzpmDgXdxDut9pv7MRs6mHcAku3KJTzsSEn2He8vx",
  "key16": "5m71XrZ8Sjw1xFJvDF2A8unadfMq1iVCKgGsEuzQs2Egi9XagrpKEL47DyRMw1Z3PT3rHxGuAX24hdBpgVhe9LMh",
  "key17": "3epjB4pCERY56rumD4HPEiAGmGy6njAaMKXAvSBRfsPvzLQXufhqFALArkgNBatKddWsoqGN1LkjDvycCVFa3afP",
  "key18": "2Yfraj36fkZ3yQ1jksFjuPC9CWWogV6Lc9Wm38LWhiEgrUMkxJjcnBuDzL3VmHEHo5gbVkEfkub9YGPHfivcDreb",
  "key19": "LPoFcSw4j6nbiHDzajhHuH1qDzF4xjo1pUYJmUN2z5ZFSFxUPV3B7AeYXsZo51L5ay8j7hvijvAEkcwnj2uM1rP",
  "key20": "2Tj6kR9PW5ABvbJMMt3i1Pb8JzTaTtWKCBdfaMPWbBfR77Krh82gUXcz3bUxzudnERhjSYCb34yKgLRVyjo54dEw",
  "key21": "2rQRJiAbEPF2hWJCxxSdBzZjDRnMbwjzFzNMkHkLoswxDtvv7ki81SDBeDP9fJ31NAsVmY5NNzus7Z9GGiYfC11x",
  "key22": "3XyFAdjffyg8WZTdykYWzTkSydFH7ojZANGrzNfzUaHMuUKyVoiAJn9jzH1rz3ecUo6rRk5FsdyKnFWu2BkiA1vi",
  "key23": "4uy2jCbVE9L7pCTjsMpe4hcHK9aBP2TeqJX1rsSSPzJ4CBd8Y6DmjsVnYbVVoudSHafgH7z85a4c5dhqbNvCz8rw",
  "key24": "5X2kQw3xfthJMZfk4qxtsRSC61GezyjpuXjKEE7tbzMsjghbpDeRut6BeEGPRjVqLy1Fe6DxetbC4CdWmQN7JeCw",
  "key25": "2iMwWxwN6orJFXmh6b5AE38ATeL2KEp4gt3gKyr9zAk14ya4xqXmM5rRhAb6HYWLCWgbsf1zTNm17DyWcTwMCDCU",
  "key26": "3eyJksgGN5yJEgnyuYitrGEoe9fZ7e8wz6VwJrDimJyS6SyKgSkwvfR8Set22TUw6gmRaDVy3q7fpqXKvbScjdtJ",
  "key27": "3RZge1xNEmyhbcTzSf61MqEEcudcCtG4PLxp6PqDrkWLZK4p8NWZfq8E5ypEKjWgSBcrSW2zQfuQpWxCzEupkfv8",
  "key28": "3xSmakAnntZLehKRnD1PomfSGhjkJXwKiYATutip1d6LvpdSHaahXTDQmpshkxrmdXEHYyBqQXiso4ZoK451d9iK",
  "key29": "4jRZkris2yow6yXkun3o5P29WCeNKTJWEGeFh2YkiC8e2E6PQGogArnjJi9gZNrqTKs2g3a948Hv8noeg6L9uXux",
  "key30": "2obBVuzk9585VyojNxvok1BBaxJK4jfDnQYw85e6xrkj1inmGm7Tv8gYkRvFUk3nSKnT2YQHpYW4FW2EJtMy3AHF",
  "key31": "iWQL3R5ZMf7jBFKyCi8XreApmCrWn4MtHfyAh5gzrjhzxcRncXxznwVn8e5JqYp1Xg6ysh22aqcAmaLBnrVix1F",
  "key32": "fUFt9Ch5aVdKb5AR6Na4YfFLqzNTY79TTQNisyQmV3j7qhPVK6JaZqDwsArJEKoVYEdhnRsqL789HjXJkYgtio3",
  "key33": "4FNUnPnJEpJrGprP5S7sWweANR4gX5atx1y3tdkWjVyFSEbsmQNAEpxSqLMkwdW6vvEJrWoEs9hMQGo69EWBxjTU",
  "key34": "2373Dfvo1ayMKz8UmKTn5Uzk2LvDETsmDdAhXsW1ch7U64uu8oZJB6k2KKHZCRB752QT3iJ1CkTN1BLF25joi5VC",
  "key35": "5VTopC7bmN61gRzo4odtey5NCSzQ1ntwKynizPP5ZJGd6FsLSYEky4zytKyVYBsmt2RhR4UKdfCuVJTJpc4HXbu7",
  "key36": "4sTKz6Et9vnjc5pnRoxNND27i4Bjkv4m7MY62VS9HhJjAQJzVWaySU5CTbYTKfAJ55EeBXCCPPM65V7g8TaJ5pGk"
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
