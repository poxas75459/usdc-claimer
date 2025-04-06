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
    "WKnuxFeGK9h8bcF8zZxka5LErAioyPVb9Dd3sgBhsWhEcSecmLvzPpJcCw6Cp2G9kskjsA1sZgVtENTsgvu9Wev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21aX8g3axkwG3SmAmSS8ejZmKp9PxmP59HktQfF6C7A6HkSKMoz5rGRhKMzBWM7LsdpULqzzE1iDMJNjzfmLX25E",
  "key1": "3GF2W3ptiXypK18AbLrpQqwQnSZuZWPrix9xSPyRBz7HJwkuGpN1YuxgPZWKJjQMo6J2wt1aKpao4MHw9uhSRxZ8",
  "key2": "4H4u83hLNAdAyaHmdCGzx7LMyopiQZcy1ax712qhaRMeTvJWXZ2ABPkKaVEeFv5otzUGAHkdcqPFUqPB39SgZMuE",
  "key3": "28MGbjTFhHg2yz1qVLJeNmibNqH5TPtjU9djLh8Aqw6hccrB6JZ1FvtwPDNzS91EJD4tupzcxwfNmktDRC8xhXoL",
  "key4": "5oQFVrnaYgBU15w4T6GQi2BYnsDzKFHZwPYGVeU8W7Ry3j4emFvTkXX5XjYjEqA5LfTfDDJUC2orrB2NFdxhTiFU",
  "key5": "5rBSU3W3MYEsveLgzAQSN6gkr66N16PPE4tvyX3ZN2kq2oSR8kLcD72NFKgnCyD7c4xUWahLSuhf8QZc2yE7Cpnq",
  "key6": "2oLNxjh4QUj1BwokLRSFhrrf3aYGL7XKypJyiQ1ftTVuJK7GfMvC2X7v8C8PwnCtL3ieDf2iNPuK7kjNmy8aMrzh",
  "key7": "3rg7zNybUFFVq5hxkaD9T7zBkFdkjR3yR27tKA4TxrrmYCfggZYsMfbXTQT84FRcR5GCRwvTA9WZuZnDUERrwrnp",
  "key8": "35YVwuqWUy3KYyaGLT4HAWumft6jFoa26zu64q57ZJdySSTcr2MEWaDpc8iC67UV6hY7YsvwNHXArBrzgRRXkhqU",
  "key9": "2ZKfT9rmzcD8yYo868d9EaxeruupXbjfd63FnzeyeS3tWHg85RQgBosRGVPs4tAXj3MDLirj7EFAwwEVejBxrCnE",
  "key10": "4Zmr1so32HQLBCJijXZr6gKAw4AJ7CUPtmvhuBjizdiqt6przLFvkqGJji7AikSmgx8XbXjhcspLa4tWJzEaoY9X",
  "key11": "5prjU8qBp9RKdy4HM9eWaQqWmCLYe7uZNCCyYDDrBoZbzdWGQVHWSLpavZ3Kq86vLE7PZZ1pMQN7pw7X59hWetcS",
  "key12": "4r55wLQ2H1UAXkqddfp8gMmma4sC2CBp7zXrbeEL4pRHgSFf53v9xxoaAu3HXSzVb4sZxZnPrgXBb4xhsVvun2Pc",
  "key13": "4UrYYD5Mx6s6aKji1qheGvrrtgqJr5PtdZwfiPgHGHy9ui8VLEsuNR1RY8ahGhzprT41Pk4PatTrWHvVAyvU3e7S",
  "key14": "3ZJCGGMXJUJA4RTaRbKeMvxeTmeZ3eL3ksXzY2M1SmocXiTSqWodBQXyHnmMH6pmfmGPyv8KgHBpmneHTkEiVn1h",
  "key15": "5DnBuUA4QWLNpKi5Cgdm4A3EkmDrWPGrfdLCmzepCmc67b613ZG2gdyBf355pK3AXuFUWBsYzdBuLdsmTD2yKG3z",
  "key16": "4ZkZHC8S9LGHaNp6YhjMzqXuJvdY4JhxMeZ4JuUt3e94UrmbnLBLa5cL438DsshE5BmGd7xBqjGLsF6qchATMLjK",
  "key17": "icozxrB9tntkTRkzV7SjrNqcgbzT1yfpWAcd312s6RxywamxF3CuzGSBVWYseizAEgDqXjDhkM45Jto5Gj6VpiM",
  "key18": "4nay1ueYZ67YMLt47sMPLRLR4vq73jwKmCra5ZCP9nhzQp4AAD2VT4G8C47xHXe35r3Vf2ryZ9UQwskUxqHSfNGc",
  "key19": "2Nmgj2Rq9emuiPeQzAt2a4ZB1LUDkqEHz5q2ShkQ8ExXhcESzmE3CF5pezug9qDiX79DWMUs1UftoxPBf1QTiWTw",
  "key20": "64msYH8J3sWbgnXvLHYGfDLQfPXGUsL8fs8q6LLHcvRjv3rcEu2YkhP5LABsAP614oAHY6r7HrJkLyzisAGoBjiF",
  "key21": "5Tekzy5YyeKex9T1kxZuZEG8LQETz5HrwSKTA6nfNzux441RqVWaBAg48tFoGktZ1hmynKhcE27F6NzFQZeToPML",
  "key22": "3RJFt5KFk1YtCnjBFMCZgpNWUq7bQecRsJbU2p6SEE9eoHC3fcK3X8yJYMn8s98CuXMs1ohYnvei1abNorbj8tXW",
  "key23": "H9vBPBgEFLKAofxP9XkwLMQ1iSXdubLH1fujNj9Wb6HbbroCagUfKh1GRuZPyvfAveqPG8Et5DV4gSh7jKnkLXL",
  "key24": "4NrNUwt2W75BZPWu5zwUm61fQFxtP5sZpfB24WCPivAph3Zg4gEs6rUvwFxvXdXt897j8nx3F96HNp8TYK8gRmCK",
  "key25": "3bXE7JjVQstVt21xnBGSFQ1FCrcCimLjBG89i8jSmxF9QtFdR5yAk8diT7tE23CDxyuUSwjazUh1feW8SMARZQMn",
  "key26": "37G1srgTQvPunyBL3jYPGt5YWzmqy6vv1Qw73QjeprUQXb6V7GBPuEMvZg2qCUC6YNsd5a5FXDRZNYT6MjJ6Je2M",
  "key27": "4u5wC73z9Gk4my1HmuP6YYQcmz32TnB62zqYrJoZDr5SEdQcHqdNiPmrWEjP2v4nS8aYboQFL9fK6nW5whnUi7xs",
  "key28": "ZPMhgHocRR3bsQTowSeVgpb2HfcNXEWqqAztzGqQhMTKbRvTqn3jPpg8qdn3WppfE3e6XCFDtJt9CWGoeHFGGdr",
  "key29": "2HmaJrXZbqLMRSpTyVD7NLEtTqPeXNEXbyzPCoHWC1GAdMAncfKZ3XghTt2r5tHt39raJacUL7Q2s73RWkiq9yCW",
  "key30": "2cLiwzBPV55bHYczfBGSTQZHknP6DLZ6tRqWAthREFhYKJ6kiHU4rFwB3z7saHiqKkXiXsADHjzgWoYUm3iW8shF",
  "key31": "3TN3Zk5UMzzfGQrDSJGxoThqZD85B2MkxicwPhLraNeGgTUFbA6RuvCLWHFiCYMUaGo6uyhaBNQTP2hDqbPckYP8",
  "key32": "qE3eSbvXzQcScov6ekKMrgukPNsvfbU71CDrQfariMHCnGhmsCQxffkcSyLNdrYcX1vzybUgT8kDwYM6EYpyUrt",
  "key33": "3qZf6iSocRiAALKiJPwzcsAdtzZTUP5VCYJtRpygbgqaYoijkveMCe4VXxVcfyEeMjTuzWn5sfBx94h4PEaer4Fy",
  "key34": "4WUt2cHhJxRBpQqizU7iDahhYa7wK2Qt5PQi4NcbJPXT1oRjy7q8B1A8Q3nA3sVrHmVZuMB9J4awNSBKK3GY5DVF",
  "key35": "iy5qjfc4Uoj7cKUB57r31YPkGZHoBSniuXnzZjqd1j4PTVttmejGEXRkBHaBfgcJcPzCohxKnFwqVeAKj1Fccwq"
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
