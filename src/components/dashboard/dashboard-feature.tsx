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
    "2ZEBcYWUEkkkweigPSJUaotZzS7gdGPBAj9VyZHETQU2JJaHV2u1QxUXZiEwc39hs4NzzJzLLw6FTRCRYNj6CVUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qU38c7yNSVE63LtnoVxedscZxQ93jrxWaH2Rm6r1r5CHDNBbPhGN9P6cvnXiis5q6NTxskgrRehnpcYU3CuvKF1",
  "key1": "4179ui4qmVoSj4iW17Hb4mkKf1rzvL47E3go59Ds8ncFwtdoy2fpSi9jDtB5AXD26ZRSCohXXvDdcyEDFBWCyMgE",
  "key2": "4b6mAbsKVwh142toJ6cTmGVnEa8cHgyShftZBHEQHbjYoh7M1BuMb8hjFxLiF4iUKv4htb7zBiGJwfN4HgUwpcri",
  "key3": "5WBS3YwNazsfnfSomtbRZY48WwgMNQPvFghWaMv9KCTZDdUk2o44F2bvJpBePuJhfgnyKvq7tQEpLAsodg4jTf2N",
  "key4": "3NADscej6p98bYF26Ke3LmbsMUoarQWFgfrwEoJzPEf368UaaZoJrECjUjqcv655AZ7FkrCQgEEDVq1yCz6GymNC",
  "key5": "5VBnSaEdYDw3dJcBmbeqgPNwS4UomTtqVT78d3rd7zMTkm3hKetUZRtrTwckH7oyYNT6YABbAxXxKnzj4BS7SGZc",
  "key6": "5AbCQbY7vQkfEzvFooWz9ae7JjH7JVAWttFmfZDWiAwvjHJVNePppQfUQ4gz92YQBnc4TuJGDz1SaE2RWBH3MUEc",
  "key7": "223xWoTtLxu5mp3hScz81N8EJQ6LfRCkXHGbkVg9h8tFkCP4sWhwjmSuzwrQsZTrxqkRwX76vYUreV2iQwCnz9n4",
  "key8": "4eky8C32JAoMzpSB2R42BFtYQ9uzNpZr52UHY6aFZzKMsTgkYfzfXcjjDy5r6AN97Fa3y254RnXdUfAgcADofvtD",
  "key9": "4uLbNWngoKWf5jurMHcgPYkk6XNZC4reZinFAsaLkoUrVHyPLfVSTdGnCQsDKHJ8yHjuGcJHQmvLZ2vv61rmdnBC",
  "key10": "4zRT9pg2Hy23gWZdX8rGRs5aDdc4BUpbaNdNUVbLK9r3xQA2huQMriGpXq1VmBn9WC6WoRmop66Sr1RxsntT7mQA",
  "key11": "4izQ8N6qCNb194KQd2jUzzb7uotKyNKuTYUdJ6dS7irDADQpL5WJkGndbzbjbLYYPsLHKP8CHvfHauGdEKBq5dda",
  "key12": "5gtuFidfd25aNbFLJsLE3st2CBWVeyNQEZS6P6MYuFesHiYzeKicFiD8ovuFFq4YQDCPhh9UzSwMYAiC4uHkafQ8",
  "key13": "3ABUQEvJdzbHyML2Zz6sEeVxd9GcuHGS1yJNQ2WqMoMyfSQjRT4j3gT4ghMRK5NEu56MS3iEBAiQCdSKG3UBErN6",
  "key14": "5HoPRbq1kUnEiD6rsuxjDQg874Dc1ciKnurmG9KiCvmD8QPGKxiBK21XcfPvGAPKL1rW5FRjFtDTaTVUyygwQhAJ",
  "key15": "3sxbV16AuCbcs8nnNxTbLBpCw1Lv6FfTuhW7AC1fKsdC5WmoWgukZt6dEUapsNBtwTJhfGbDNNHgzNVb628yhf86",
  "key16": "2Em5sGu7eueMhoDzFwTHjpdf8GzB8NHuVVS57jEbe1VBBiqvVuPVKFtZRMnqJmD9huUhqejfeA1FJsaN38irF4Pa",
  "key17": "4w76agh3ptMSaeqAnmKbdU378hzTqj4Wi9koxiJRSkHqZZWFA7SCE6RHVdSopqfPuZm4E8NJ4jPRaWayXeCE7W7x",
  "key18": "2pFfidbd1kSdYBjZoL98BADSjPtqALJgjLJzhqsmtFFSY5hv49W2cTpDFEZRD38RvDUXUgeVMdnXPueSHRDTTG6X",
  "key19": "3D4NWuXhfhdYCKEazLkaxnA4eWqE4UkQCuCPtsHmhiEPRTJuvoVe5Q77bebRcvaQ4SeeNo3APBokY8dnY2pYusEi",
  "key20": "2jhxCqmxwVQ9HxKc6b8tatFptUQXbc7KufDERpt9F9bLfkUJRPHPUaGRe1NdDbb5Qqp88R812iTRsMKjYgLakLw",
  "key21": "5xSfNJoU4xg5hwS9FY2JfVUBH4f4EBcHw5XzEsyX4HVVSkGoVRaH85L3Gzc2RVyRbSTKWb5gtJEVCT1JrUgdXP41",
  "key22": "2iQAYFGsRyPYRSJmhwh6R386Gv8CVGBnPHSYGAHYVAVzAkisjGVeuJsG5T3CCE9wiznYB4r6m1VogqFqvn2CESZU",
  "key23": "2ev8mqvTDMAFvGQZnxeMjrMGar5L5TakNXygWmrq9JQXQWMm84fLJwXa58jz1XaAbjM52p77mSF4rFajPU1XmV7k",
  "key24": "3rGXEYituobGiz3zLLvYR4AeJLmjFAhZs8ZqcRVK19wWhLY2crYV9mzRkQvV15nahoSX11XDbLWe8eZ6JrvgRU3P",
  "key25": "4RirNKDnw6fvxh7WRM9MbBdy41tjGNsevfFa8ZYkE4NwHCv8HMwAW9K8bLBRSYbeVH6KfMWSnPjQkuJYGmoG9awk",
  "key26": "4ydc7pR8ua6HSEYPN7G4ti3zR5SowbGCDizftJMy4Vwn4nMpctrr5x5knapJpuxMurTR1mbFh9w7BLaE3MPaPUTj",
  "key27": "3wt2vQqWqwyaPZY28hzjmJ8y9qFiGuUCapzh51urY8PTEyxSVXn4WmdcJLBiwE1a1Ug5qtk7uWvXzm9csReV2bZ3",
  "key28": "5P7xYApkGoZCJk2uz66CtTqsegXm7fggz1eajU3p3WwZwtjXFDJdcL2qeKuTt3xdx2idGirTRoBZTDDid1RcRAyt",
  "key29": "5ioXrPLV7Dsn3ERNUPAVa4CSqWYAG4paVPaaHoXaEXZdmQ7NZ6WKKpsXrAxwfbBjpPRKYg1xXiUKzsCJ4UvG2kiT"
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
