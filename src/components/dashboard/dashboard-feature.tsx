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
    "57pUqEKJT3NcomUKX8MdifbXbe2MKbVKkbEjwpMBqpLiGsJ1FPwo4e1i6aRSmF9ZhxH3PFEAdbKfaVkms7LxAQ2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NKgnbVjN2HGq9u6khV7Nds7CgZr45En84y7XvzoHb3P2aadphKJRnLZGpwxKTbomnh8M7uNK8YZgHRvM2dijEpQ",
  "key1": "2pSM8TdS69pP3xW3WFxYuhh3fspDZvBC1sUf4cbUrbHd7yChfHpLmRVRVR3qEVLV8TgSPqWHZPSnRN6Ytt45jcSQ",
  "key2": "3jjcpdrnRbEs8h4XKCzNKXaJwyQjYYBuQ7M7N5fwioZfxPAtynrHvDuwKFP2RK5V5f4Bz64e7FEyPfiknC1UFN9s",
  "key3": "Mvq1uYMQQpTf7KCBqaCUgd13sQEf9KbLPVVkJCffPKy8RNGSwbdNX2eqgpiYm7AbYCY4ktcqM318jKJgHCgj9dv",
  "key4": "5Ww5V3SBmprvrBodHZWJpSgsaVLzF3pwZ66C8zUCPThwZ6Ze5FYS1P64XK2KJQqtJ3bkceKkLgwgja2PWBd9pi1y",
  "key5": "3A8ED7jDT2ywYQR7diH15A3StjYPQxEPaqqkixNkUJUEPVxXvj4nEopGvbLLarwNqE628NeBHedavwh5zZa3KNfp",
  "key6": "9FMkjbXaSJXHkWtBidv3rwWBp8LmgedR7MmXysT1emFFQ98rh1qGtUEUgpC1kwgPdVigbXQzVcs48GqWZ5bt6HL",
  "key7": "2oiiUaSLpaNme7QYpb9HhhHJAVoLbmHw74sbdMSwdpUqmrMDB2AQPAKcVN3tK5L6dzAhH5FYcxG2EQTHGbuUVsfu",
  "key8": "Cf2aTer2wZrsrbpF4wYeG9UESY2YArgHcjaMXfkoHfANqAx9efnGr516nvjohQUi2rLRPNypxQvFKMne8TUkEW7",
  "key9": "4RmbyxiBLs52pkVbQvfgku7Gxr1AopjttwJyr7fDdWMUh4yr8CLbkGXzbDn2jvFAY7fAjF5ZBNxiQ6ZFhnXn5cuB",
  "key10": "5bLALzaeaCsRijq7mRnpXfRG6o9S8S2XU5GQTYSzMxoxi8cjNgEKmMWmWFzm8XxPgtXkmtuxoeSBagL8iW6YkmVv",
  "key11": "4XKC7Gjg15kwmiLTqQEStq5DKytrKrifLJB8ANrNvUQg6PT3whvmyKRLfN5VTSU5kRqVrsZn4vUsqvnYeh1HimBE",
  "key12": "35SNmq5pfen1asY4LnDN7tHmaih2C24eKhqA1cEACCnJnd6oZkR3WGEHFcsr9fKhPmrxQtnrUMnenh6TSky8dVCC",
  "key13": "4129sGuuKozfYEfumqjZQm7ht3rpGjhese2XKefUroT1wYALo3hnvSUhjzfjoDmKpAGswEjWNnLwkcQjKkibPevM",
  "key14": "3Sp9yJ4WVwe3aJzCSDdNrm9dRd5ocQyWsBQHXMZ7uGxMJ4UAgca52NaCEuQLAsn2Lpida6PZeU9ZoNV9hr61vMa7",
  "key15": "5G6dWx8c7unPiGakYRyf6g6GL1gi2LSBiAcFmgW2CgxVAeg7EYpbUxXS8bnnD5uFH7drz1sutMG6KgiLf7gnxbGT",
  "key16": "iv4uvFUnRHaGNuT9oy4iqVYtVXPXyhCDwE6SrteFR1ThY83q4844651UdtfaYJfweVkxRWBQjnEjoomQFRBHLuw",
  "key17": "SiDvRL7xrYAGzwZ57MhvDvg7dZfQpV5a11N25ZGwmv2qRHSTXqXmyHVAQyq4LpUdJ7zGRGYifKrYkLph8aK6HJV",
  "key18": "3yRToHETk2Dm6WfjM43H7vzCnAbQDgiaM1bu7mYDSPC5S3EpFPNwkt2gzNuZKZ54noLzG3CNXZdEbR3eXY5eCZhX",
  "key19": "21MmZukJR19VisNoC4JjMnhc9kCsfJcrTVvssrhtzpVC8kT3it5f6FW1AapvDm48h7dCqzNSWRot7KjwLoFKoCNZ",
  "key20": "2iZYztqaHEAyyd4rzKhRHGajRkLzJ1j9tkVq4ULHaTcAhFYQDPNMeZC5aj4VokLmccUQzJ898pR4VoKrr2cP4yoh",
  "key21": "2WgxQaEZfiR4HHum4jS9rX7wF5Ue6VLhkeNEehTNJoqnxPgsfU84kvCe3vFupucSthL8uQKqbxcw8NT1Lhv3bPfv",
  "key22": "574defcNPNp3xFWjSFfoXdz4Fr3K4FQBhB4VRZJGvZ62TmTzeYcfEpgQqGzzQvLyzkywtWQzcXQCzCUeAF8WYigz",
  "key23": "2GWMWRCn44SqzprXPb8VtrrKPRNeQbECEpd6FnYcADefre8AHY8XheYhBk7fVqcRPYchL1xPnEUaVQ5h3sxjoWcB",
  "key24": "5b6nfBPUVYFgCVNy8vK4EdqGyg7hce14JfhM7EZaZCdxCjACkbyszFsav8z4ssdgpjudf2aHDT6x5UopS6KSKT9P",
  "key25": "34Dg68KJka4R4zAAfEmpZHEH5Gt9JpKsxvi3tYwiAiExACeaE68Q5CbWSWru5gxBZC7ABQ13Ubo5mzfr8HRegM6n",
  "key26": "kUqVqqKW9uBkhihtuCq3RguRhGo2qQEuy9pus6TJ4RKTkn47N9kZdnQECM4k3WgjcVikfk6gh2gCb4UqMZtnrtb",
  "key27": "3WMsrNmzZhtRLVSjV48KWZBRgsSXXv281DPHvDYt3Qgyfgk8RZt3yXZXDLbTxgSjK7mTrhyxYF7dHPCDFPGY5NQX",
  "key28": "2fm7vU7eWJfq6XcN8tSwRswyfQnYDCTQQwczZAWZYjeUxoGQJgPNkNkDAc9oDZ2YjqGR8BZZbV6HDBJqzSRKbU2R",
  "key29": "4CBh7w3auE6Zntp5sovC9qy3dmBkHrH6CmzqorcPU9hwkpmUsENtZtq2F6q2S5ReUJ3pRCjB1mxa7ab24JLLfZmJ",
  "key30": "5whzPfaJa616fomjF4sc2boWqzPGe2uczdqLtJdjegYC4CkFmGQSD645CwMj3JFjRXrJZphSqjyo7Ae8WybXszvg",
  "key31": "2oPXp8RswPYJhtJZhnzh81pBnB7H8VMCyXymejGXSe5ipLPr5g6AsEaTFWmKr1TrUx6KkQ6umEV3ZeiivzcaGrEq",
  "key32": "2HRRkXEx1aow9QJSEhifxqM7jtbzQV9RSSNvEoD3VSgz7vFoXW3oGzVkbhYBhEyKSe62yvQrkMmbUJhRaprzRNR4",
  "key33": "2A2PfZDZSxDxvW73AaSefA1iq7SjzkypcobfvE2C6dm3qZHgqgyGVjae9dEr7uEsB3yNFzYz4VnrnJnEX7bDv4jW",
  "key34": "5EVN9xj9ue7YF3HiVqY268rxQ2ihbEYQyCMeppuLj4VGTfn2WTSbjyGy5W6HVUyywWND1uJ5Mf5nHGtDgTMVjVzW",
  "key35": "3kZvuby2V4GVfMPYdgC5da5T1phd3mNVa3q7JSSBEdGLf4yYhJZ5Q6ktv6QosabV7aex8eDf8THC73TyPg2XCagQ",
  "key36": "3GmMS8e3XrWSc6jRL1na5jUkXtiQynYzHcZaVHPWsvE4GErZ6HGHD7BdHSiGzWJYcDj14mYgXFjqB6vtZmX7bLo5",
  "key37": "3fdWWhNowkYYYjRbFsjzG8tYkscrTjx3uGz3EfkbA8mq1xQ8qqtFnTUjf6ZAgKVgNmEpYehZzbQFYvX8pyk6bpgH",
  "key38": "4xZLSvaLhFpDCXSsgdgzxgN63PDZKAfBS19r1A33vLFrcPD4ZuQeSCvcZJjqWHQL9V1nAy2be8kk5esdHFTWGDvw",
  "key39": "4f9Vg6osyEj5YFGYyFtSjsEHwRrxvFUFoxQkPnoAaTyFqxSEND6z31gFEcetCTfq4uSa3hurJo2es9fkyWbJSHGw",
  "key40": "5L2m99zACnDNN1AABHmhmAkVZ4f3uTtGxeWVf1Tw6uwbyMZTBd4sPHJ5ANsE9u8txjoQLVMaYRUtpScsL7kbNf31",
  "key41": "5Ue6pB99ZSGw2LwJ2V3JNFLipqev9YXCoBd2av4MR63CvU2y4ywQHLDAxo8CSBAJ5A88PNsbZd1BQCswmgq8nY1e",
  "key42": "5BGRxUA7suC6okvCfMvK6hbRRpZ8vKEqBdC7o6xgqdcyMQ17FHEABjLsZmVF9qyeU3GJx1wYp6zQeoTaxk4PdXyY",
  "key43": "46bmL6HmanNXn1YpDnx5H6nt6W8uCXDNNYqeXcZkjGqcAWW452zSYMCcCUDWH8x7Jevz1r6VeTnmMEX7Xum9JR9S",
  "key44": "3URwMGZkPSga4Qa2TLhqFy6HW8ZjZsgnfSjHUxvyy9omrEWF3eYZAdhso3PFn1GwUatpCdoeaJRdr5vLPb7Z6HbW",
  "key45": "4oSNcicCGAmu7G1VnDw88Q2GVfHc2eSrqYKW6BAgbZnxzdg5Hq1M7mQrvQEuX3J5dvi1N8tcCNkZ1h4bRLfPFBXF",
  "key46": "3h9nPi7W2qpBHmuVs7Jg1KgNTmLNizhyKc9G5bphBtBU1ofMAEwwDefezFdUn2bdNyMTVcQGrn6poNqppwhFzHP8"
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
