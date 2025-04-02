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
    "3SwyA7VMKLK6rE2iVucmZ9V8PDFhKfNimGRDADGHZS9XHWUUZFGWMCSCaDsZACh1pkHWs7gid4zeoj5NcADjRpA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AWiWH3waL9P29xzr7zeVMe4Hootne6WQW1fcx87TYLuBzC3bUgPoGDe7Yjd4pZ4s3SrQozNXsNz8HiKrMNEFCTd",
  "key1": "4RVooKstXM1c1kWych65UPR3PJSuiRPELU6HujVcx8M9dTkhiJ3KZuDDefPDs8tJhBcjoAWKn5QrGVzYGTy14dQk",
  "key2": "2KEu3jaea7AqYKsok5pG828h2betPvYPyciKmDEoAd87BVMU4QE5cE9pGXK4LNXMmN7yBC32YZrhHYNyqwhNVa9c",
  "key3": "2FmEgHHX6H6N45BWSdK8JL366KkPQDcp9dBjGMEvaJRugp8P8TTC2AtBq42TTpBAAg5YvayYfLiDUdnw4uh86qyt",
  "key4": "23JqGUkxkfY5ACzXDr54KBNsJsVGPbyLvd9FrYtkDApQNRfWUd7aeFqXEq8pJiqfaaPS8i7fMX8zMNP4SZGh3GvH",
  "key5": "N6PxpfdSvTr7Ubq6aEUHRPD17d5e2T4JiCjMLYrhX68sqpkssQ5mC8AUrc6toR9uFCmYwhgF1MCpewotJWxcNrr",
  "key6": "2rguiBzsjUnPKPEe272n3Fy2eqdtomeM3deantuAZE1CmbkN1Eg3NKejU1XAefqVZ7jewQTeEgQfEHGxPx7dg87b",
  "key7": "2QcyXRg6mmLXk14N95dECRViRZ2VQD3dNGDy3TVnUHguMpfu7LuLEWkD9t3FvZHY5TTKBtr9WYSHtfcLZKM6Wktt",
  "key8": "2nEAfE2xGJdRkgSb5gK2Qm4YeTtGdkB7HyjvQrwKwakqvESmEHviJ14v5aGfSWikCUjsWqro7nW8gbXu5DWypggu",
  "key9": "2HYjPCsKU8baVZ2ztsrRWLrmxyQidCU1yX8suCMJbv9HbQCC9iTDJ5QnXwoNGXK9DGxr7FDyZYyReof4pgQqFSkD",
  "key10": "4UJ6ChBj87HWggiREGuunDE7p2Ljsb6XUaw8HV4kYqsE7uHqiRu9G9T8dHLmbPYnTbSvPDrZcgDPJzWciGeZw2py",
  "key11": "nSCMS3Dz8X5AdZZ49wZdAnDLi4MUtU4xxfAtmADcNKJwJ6cHrGNSDN9EqSCG6N51aVBvHrCxBEL4sMLqXZ9uQ9v",
  "key12": "hbr4QJaxwBu9iR6ULGXJcJTFLSWvnQoKX1aMu2WQQFbmExjnRdDWyZxqdR6ymbhLRyAqDXGZ7DyWsNyc4VgN91Q",
  "key13": "2x7XDAteVwqsRVPhECXFUJWPrhp9ses2YtuHMNs4EfneurdDpgMxD12S6voRNBWQPpHFa68HfDH8QCPg9c5ELihc",
  "key14": "5Xz8n67hQB7imE9TgyqTrpmWwHbEAPe8xTmEeipZ4nwuXk6Qyh4qJnjD3dj4jBCPWArwmRznFBjdNpKWrjVTXkV8",
  "key15": "3VvJCuiwSjghmg9vZG4VSApc2zJtT2a3FSNQFojP2kewyGTm8mutXVSwzpQDBUcgUdxFkTyihoSV2szfWmsuFuc6",
  "key16": "5uDwxutXPicYB5zzBo2nHZhJPGuFF7nMQ8SqLmE57eiSqwgrGPNK7V36ic5uPzDbzVqzEhPvSC9iTFLnxvGnAMg8",
  "key17": "44SxQco11q6ix4pEzSHqd897bZWHgurYUHKMYqeXMrbwmKEMLxJTefUwDFM7rdqyxax4oAfduXsdc7RRCkT7qkH8",
  "key18": "4ueoqV4v5QNVYB2f4q3VfSJff1Cu34d1bML8QfVr15KQbybPoLLJUHeVHF7PHKwFzRdc2ymJEYqH3Jv22Np8vWjp",
  "key19": "5x8c9XavNnD4HWHA4Hh7FL1eyytccnf7S7BHt4D9ape6nQoA3yiLf8a4jQaeAb5cMM97KRJjm4VTMFd9aCuKZahs",
  "key20": "3mqa82gwdA5c6nW3UyQC5PwJAFgpKk7M99qZcrsBQt1NWJ3Vms9LTLfot4kNTMv69qf1VGpKEtRHpcWEASCbAnzQ",
  "key21": "4szK7krh73P6WL6oJ9Cqf6CjX69abA5WQdxPUq1GfZZQ9jKxMkFNrcUQcYEpfcJg9yFgAAdGXvavAw4ozBX5djEH",
  "key22": "qoHy9ZkhVHjeze8vP2yaADSHH7JDhpXNvfaxTUHCSTXvSkFVNEcMwf93xhqGz7jHbtcrDK49WsUJXZTTuGGefgP",
  "key23": "5vrU4ANsLxT8m6YAJApcCWkJtVykN2CtNXfd8kmX3HdJJgvo1Wn4o3sPFa93cZSHdnLkmo3drvuEd5YSRpkQxhSa",
  "key24": "5xh85A1U4bw5Moq8B4VUf1QmeRE9UDYFVfdS1oHzc6fBAHxKLtoWJnFH4Zcy154s5wRBFXN3MjmPYmact6U14WoN",
  "key25": "2LUmnBFqHqXQzk7km49uQdvuJ2VdGPhgha5vATtA7VmAAgDWENa2ByDWAMcBpBQXdVsz2NKSMhtcQtfXNkFJUbRw",
  "key26": "4uF6wXGPQjbViAt7ZQrsnGHgxrTFq9gjs4x53eFCMnXKXBLVWz62KoFiEbBuycpRY5HwMwceVZf1ddbxHyboY81m",
  "key27": "2NUvPvhSnQn7zDWXKNdorUCeWTLMbXEXDeNf4MbhLiZ3xsHdR97Bo9wgwfxxkgb7fRJjemQC85bE6MBqvxU5kHtw",
  "key28": "4JoUo7iHtLVjmv2VSdRAkNZvT25QmVbT4puaSAWniRL95JHm8zdWxBRUyKpcqZY72FYjUedd3LxwNA8ALxuzzVRr",
  "key29": "2kUjvqSmNLJbrdikoxfZDyzLtRDSn3ve59H4VWdgV3bvEooeZWJjCwDWDiYQMWCxmKTADdSDkW9otz8A4okvCeqz",
  "key30": "scVwejPL1bUxQLhJ9nHngcWb6fNuu2ewnZrEYJ2ejyryKYfuT1Ca4aV8NPRfzbUY4iTky5SoWjW8fdTfzkw5fnJ",
  "key31": "3KNoCp1rSiBHaDiFkWRRf9uKaXi4YAHZvC4HxGoqd1CayTyxnLfiV55aogkQS5nTwGnd5YF2NobnTfDnVFfwM6SH",
  "key32": "4ZM6JLVNHcB96zBQbEZs4fZs3r2YvUDAP7MueU3XHPhBXZVGFiMjiaLnfjs4VXwQ3zYbKdJeARMifEG8y2R4C9KZ",
  "key33": "4mGJEHY2Gs4Sm3bWm3Muw7qxKipPc2fsrPcq6Aodg3VtGtPLDE1Cs923Ve1W7ShwFwt2YmuT52f3bsqKMGtCP7Rd",
  "key34": "4ehJCnY8c4mXqaPHeouRybgHCbUdELvbpKQG3DmxhYktEzxne1q8cU67usQA4amngrWBJ2DUtj9wVWi2UtNGVTr8",
  "key35": "4Kk5a33a1f7zQKfnMqfY7Bexj4LASf9E6iKsYfcqSu2grdxRabSvkMaLvX81BXuwFBi82bgjJeSiFEiiVeoaq5Ki",
  "key36": "36a1EXe7weDSBT6GvQv7tHRhkYxpMG8gqH7LiidaT1BNMaQ8t35PYssRYQHS3AMEZTbcrELYFhKWHVkGZE8PqwvM",
  "key37": "4J6xWjRbfnZisiLCNZ6Q9pnGq7iNpEGKgFFdT9V8p3inVhZhFjJW4pGAbPD9NUxMD9iTB8pr1XkRH5HX2G4vL7az",
  "key38": "2mXSLjbQ4AcdvqnQJe6zUmvmqnAhuQexEWDYTVYGBZCRAmE2rxhxCRtEXmABzMCn9pAZFyAB8nsdzyYoPXrQYd84",
  "key39": "4BLZ4KKfRNtU7JStMFXRwyMmFKbNyaazxs7poRTPyxDPENUn3Tih7EgavMeNgWFuaCLKqvp1ryb7njKQRdtrGNuE",
  "key40": "3c16LX1NVHUvLar9LKkX28m7uRSJCUCTxtZUf3oV1AdyCKhim2Qib1Gv2swrVS93oNmjjPoypkjyeSfSR1TUdc4B",
  "key41": "31gJcDvXsT5s7e47nK4YSCwSpkMSzwznXbgg29kG1zRZgCgYb67dEK1pb7tjmkakGtx4EG2e6Znt1TSFkGfb2KyN",
  "key42": "YbAb4M2qdggt9qH8Fv4C6UoSy5EUh23rwshBA5s7nbxrjJcucgsstLq3rVHmSRLC6UC4vy6HoEfjwLZzxMdzwPV",
  "key43": "2i8fSode8J2PR4EYXXAxeQDmRi3Fx1i6P3qEcuDXG4PvePM2N3zVM5LRhqNbgsfcg7CXp84j9qVccKpaao92dHJ3",
  "key44": "29x3NBCBtayGxcMWePFHW3ja7wpXjbVk4ezgStrwvUXVicH53cLXUZ3PWZs4xdmdn2iywkUhidrqJPD2YMdo254E",
  "key45": "5giPvEYXDdxPaXtYz7YwmkbaFzLaNv1n7TyAHH4qEU97uskYKkGrQwvBapd4BrQJQUD1eGhf8ysZpifWetNCmWtu",
  "key46": "4fee6urxKE9XXgEaPkEAfeEPCTDQjpxza8fGuGGWAmTWfYiheBRJbtyFxd29Kvw7ibh1FZZHHEEJQCc2HFt5j5Rz",
  "key47": "67KbqAozLZxiHV6W8pSSE8gXi9zvwe1bjEgbviZcNebb7t1ov5ZkbVz5MQgGZvBcvvjnLmENGe43qfYsGT6HJAqR",
  "key48": "mDoAyx4my4g6BafG6zS5X79c9TcKitqADaDfqgTo4X9LaDSgpbXBcApmnwUxtQ851EhqEZjrAb3FsvbqASQYQVT"
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
