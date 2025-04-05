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
    "4E8eLDh9QSVgeMyswEV35LQdmE21f7yr6WKcsa4JbZR6MDEQ2p1WB34JjaizvMPYAr6QAuTnMWktF5hXbMu9AJMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RSRTZuiydW7czgxqHiXZbFf3hSAsbzhau4vBwRwnH6WFErtEgNWzvodsDgqbXZ9B4jXfZvX3gj5g4JTVHHwXgcN",
  "key1": "54vAvQbV6PN1ErRuKkMYJ3HU17Y3wDM4qB33SPJnkKdCDT3vsS3d1ffXKTNMQQnicznEVBf6zrBcKVBwXRwzCs6o",
  "key2": "5evhbyHpqmK853rAMoDnsS6HJpRD77JbPpwTU39xRUsHz6gLvoarEq73AnxeD4HF75QZkMmn7ZfqgoVdMH1QwGSi",
  "key3": "5p1wJLW6DWbQTteV7A7wxg6WYJduNRpr6KW8cND7tkPdFzWcewPUfLzagxdsd6GMb6iyThUV3SDpZ6gTSjkf8ju3",
  "key4": "3JjNJyce1J5vbApqy25tiuqp9TpsFRLzezBDDqwhfvGtnkrzgVCTYQauHggAGusC2DPCmtYxj6j77HqvwGxAPA22",
  "key5": "3o78yAAF9X4ZYUZttZ6wJ1Hymw9vSoAXnTrqguN7bWJeSAGNxAboX2PaPWVxyD4cCNJfSfciGrMihmZ8zzChfDVN",
  "key6": "2a5upDfaDzWJ6UwcciXzXdojM3s8nhd1mSgKfKmyXmxaMDiu7dVp1dg1t4a9BaPGzw4sBcCkDfZWLJ6fJEFMS7kL",
  "key7": "fWhKa3ARs2afwZr4SE5jVP2DawCgw2f5b2nueQJx3emz8HB8xMP3xvuX52qneQ7czNGCYiRUANg4PMrAUjzsq84",
  "key8": "2rF11rjrpipA5tVaB8Kh8TRaWZ8R6KeX2zHMuEE6rsVuo7BVSACchoh3HJ9f5BU18YvAnZNGNr4xrspwhu5tfdn9",
  "key9": "VoimQwHytQH7cJFe74fwzvF7JFuPpL25YnpQjdqiXCx2NNQAisog18vvYkm4Zs9Gq5kXB7AeESg4xWf9isctp5r",
  "key10": "3PZ6cjoY8kUfrVa4kCjcm6exv1uhTJRt3eCZgYmnoPxo3YMCG2cToMQNubFGE8kcuWm5jynaWg2eH8u8uLFEHWhZ",
  "key11": "y2P8zbLtqjDsu7wozTmfUbR15U5L6eXLg75bjsm3dhdTvm2s7qXb8U5fq6XPTUdL4v2fnKG2gmxovfJLPh7S5AH",
  "key12": "5H7PNu7kSyx4JrXg9YCTTCCfVoYNKBW3Fyr3z5H7MBqFguXkKGiRDmjyC2fkLRJ3uJ2np4z7ezQuMRoHqzVWVEyH",
  "key13": "45yonhEzNRKYhQXhiHGZcHYMHyztFWmhUyNKRPbcie84nF9ghAB13vowbAcDQNZhNKLfF5VsdffpzQ3TCrL9bFHu",
  "key14": "4TPf1AV5Nxu3JioMuQQpgdrA8QBBsk1YKBZpCA8z1LwvUdrepXbUu7KkkjCPMTm2SPWXX5PNPtg76LJsDTkTHpF2",
  "key15": "YF5Hz43bdQrfn45najfPgMLCZzaNfoUR85N1LerjSZkrJVR4XKAkXDdoz9TJC1FrqUC44bgQTP7Uo5B36WgHYfE",
  "key16": "5DrRao3xBeiJnErZEduXL1yNJmKNv4VGe38zycvkBETsRbf9suiFtw2Dy7dm7wk7quUqhiZL381g4aDRbbu1b2TT",
  "key17": "vHpk3Ts49CPa6UpoWDyP6yDrXgHmRnxjZH8H9n6Vn8YcdjTmgHn6hj2s2AsY611LADcUo6BUoSRnPN9GrzBAPhY",
  "key18": "2jgi5SZUKnaZNQnyXW3y4Yzyoy6wEuZ2zheMzjFgDVahvFNyaVmwgCK7qWaUqUwoFQSyry96BhREhN69tV6RXGMs",
  "key19": "31fDc3TEnRuQVVQSYZ1BQtihWPCn2JUqVm9onVQgfdFCNfswaCrQhswzr5Rbo4w2ijn9ZdNNW76H6NXxsg9MRioR",
  "key20": "35rRScs1uL9SnJG6nqtSLjcAEGhe59vk62717UJuCrhjWaZCaGJQ9YcYFqcxZ1e6rBYbwRUwtBNMHje3KAutfdEY",
  "key21": "qcFAQwknY3Rmvi7twXagdqyQdMxQtYAFjkLCSgLkVr6K55DEn6UgPgudozTtK6Sv2h3hXn9iEEk3Q7NoiL2BzhP",
  "key22": "2DfFGt4SBX8ZS68Q7b8PiGNhgsZLrSmMR1tPyPEHcMV5bZ7xWmX7NtKA9F4dcCoQ6MQoxBjZwXiCcfHGvMkkj1PR",
  "key23": "2Y1U3bjd5gjfQftoudDRPPp3mMsEN4VSp3iHH2hY1s4kzuQ8gSAygzFn4VSBYE3iELpysKWFKBvBeAo9GBNFAuDg",
  "key24": "4YrL9m3w7QzdF2qNQHpg8Pd5MuJPpDMHeGy8RywRQkMNRQkjGLGsA38pe4kkfGBofjc1AAj14BV2hirbQDCCsmGa",
  "key25": "5sj5qxgDjYby5idWQ98M1yjLwsmJSns2oHvu83Pe7kcSUheHcfoWxmpat5BkFHPm4rM72gihDZMJ5tzfkJBGwFR2",
  "key26": "TiSJ9pa7NZzffNhEM61Rk6VEZzZzP3qX7YqYJxd59huCD8qb24ErpRWWewt5WzLMAZM1vnj3Dzw95qoD4PJ6dWx",
  "key27": "6BDGraXgu9mc4Lo2yMTUTTLMnviRiFuG58mTGucjf3aKQXB8vLw8AvTmDUnKJhjieFDvPAqtaLSay4XzM3RDxV6",
  "key28": "3vgaUW5pK9mBxfpGUT6cKKnf4TDdC4nsEH4r5SJ9bNk8gh6n9DXhnETEbHhNC9E4e4wWJtMkaNnW7xJc4ufX3a53",
  "key29": "4bNQahSMk9u6UtJYj2hqdbww5xzbbxUAhMp8oKBdQqtXmDQYzK4WutHZsotEqo8jKptktMWkVraGEo5eZxcfE37G",
  "key30": "3ZAg7YxCHUARPSMLaQyazRQxi4EWUvQuMVYJNXV1mFTngTCRmpMAJqBavXAuC1e8UWw6zD9uCW8u6jSngnZj1GRi",
  "key31": "3X2a82qqHdWWNquwAWhk7TyreB9pzh4rjPqKYsgxEAETW1JYPVCWeosDJ3V8RrJcbHJsb1cEQPB1xyevoDfHUy1R",
  "key32": "2kf3oqTd5XWJbvwPXW6tsbBu4tbT2zhtXQ67XpdKe9qVk5JWapFCm3aY44xGPYVgCnXcCHdKfYQbv8N6TJimeTPL",
  "key33": "3gQRfw1CZ5svGx75XRXBiFpAHc5tz75ZNAkAFgvtcjKYNDmPYZEDwJzMMqzftNPABYaV1joxUQ47Z1mWzGfNkcSY",
  "key34": "5BRWFHPb9WNPyphrHPQTV4VoQF9bMUbcdwwPoL9QocM8XMwm3emjLtKxn46LqCHaqroeqoj9VcccTHN72bwkHpEf",
  "key35": "3kK8W1td4ucKZJ2HQx4rP9yUYBbK5MiKBZG8mm1W9SHPttJ8rMnoD6f1fGedoi7JUMVs3v67kUJEXPgxe1csp69N",
  "key36": "4VYyGyiZ958ZFZzTKVvDQ17Bfn25zohAkm9rb65zdoCJxNR413mWAt2Uf234Cziu9j9jtHdt6h7TMMxeKaP1Uzpq"
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
