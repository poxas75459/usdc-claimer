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
    "5JnAcg3r1EZ3y4XKorwhTfVvBKE1B7n4UXwwf6bQbPejaQyV4QDRZWG4QbBkxVEqgXFJnHfm3efRPddZg59ejGup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31H8Gq2Zdtge6JtKn2xw4JBcLHncL471jpDc8UoaxM3hju5qLu7iKVRAamer7p6Zxa1dLyovJGGvqvH4ppWweDm",
  "key1": "3ggBjosUoqDSLX7isciUoyLR3ydPzfMhk7ymdywzRtAu4sSrbZFvNVYbWzHCgMtdXaVU4zgZHLuPRns2jU9Vxht8",
  "key2": "31pmzJtqatxsmB8oMNsPQv9VgtFQ8c2TxDDmWVhyWcfZMbjs88oZKKh94Xv4kppSLhj5UTTiiVRLdJvsy1EZo4CP",
  "key3": "aBoMVM3MEY6ZfwhVLSpC6FbnyZYSz43gtZpMaECEy48oWKcnqZn9PHbt4DVbQgQ71NLcnrAsX8SDCvgtVBcTQGJ",
  "key4": "4Xp9WRXZAPkUHkmb8j3xAFZMuxCwry4NQDwRhcEEMEE8ax9BLbtMWpcrj3Xtmk6VzFRB5sXvAvznCKwHNrFHjMiG",
  "key5": "3VAg1Mdm2fthW5N4AJcBjFQ9yU49PU43iqnw3hNa2qiSzYthRfbgNTxMUrjNn9NmxAVjkkYjVHaVfh78PbrUWFdX",
  "key6": "628f7xjQGGaFBGRHoMNAm8jhx9TezKA199CTgEUsyM9VSHL78iwURpXDTjLJtjWrg9xBMco6uf5MEbEoCT9Vnomk",
  "key7": "4NCKFnLoQwvhX3HsxSq6BZuLhjypCU97eP6ycH3epBooJdyGi1RaTcu6rBDyvUXGFgyueU9iY2iVLzLQHP7yK2SX",
  "key8": "5AV5gChWB1QdvyyBWaWJ2WW56Bfzp9CCgniLgQUvXNTMH5ipgtfDApcFS2WR23WVQ91oHR59SGRMHd5QEtxPxn3t",
  "key9": "2yTGGbwRhSfrQ4oQQvXLsCFKxv1nDPWne8f1hJTJGce889k2bk2XZPBMhm2TBgnyPECe88F96i6sGieLu6jCcy8u",
  "key10": "22KttV6MWGxgjqbqDzY1E7euRugecknFqRQfoxxuC8tfWUY8Mi6oWKF85sJGLNTpqv5WKGn2LcqPmTwDfizRMfx4",
  "key11": "5DL4f7Hr6RdMPd6p7GNCJjZT5H5fwqEcBS6sS8fhKHj15L3Yc9zind4taDwZd8LFxxJLAEtjQAgbC9bjpnsAfYAj",
  "key12": "3dShdgwuYLUCc9fdy31j98jtkoHPLrP2H2yjESYJGqLX4vwd2WPBDCkTmxCBaj5agfS6aoG1xg3n2QWYo4Ccva8S",
  "key13": "2CZeLNeYze2zUTEbATXpWVaACcEbjuqrCsK3Y24gwRPqTE7z8ur8VE9dUNi3h6UzLsaczBst6xHRH96iumNWKv5n",
  "key14": "26tqs5v7tG4dpu2iChSiqF5oZ7R95DDXs9Swu4CANtuycSG9rsBfbsyJz63gcDfDHeBPuh1CYn61xMmkWicZwJZj",
  "key15": "gin3W6n18bEz7Knnd8nqA7gH58gVQdQpFtXMeXGpYhAGd9mJwBGRHgT9uYLyx3cad6Ps1Pt3ymaA6911FXKJUom",
  "key16": "3kwWLXd29K36C9Z651YrzNKoBe57wX1fawyijL33FeFgSNfe8v6LKmaBPvtDGKT6n2fkjvU3KQ7UiVbam9E1FLkP",
  "key17": "3Bq7XY3fVsL8xZ84oisjjfjgn5a7j6sFFiNEfho51rWWxz4XERNupc429u7vvKEVsCXbsEtrA5HTv71UK4NPv3dU",
  "key18": "4Zgaizghshtri7r5LzW89ysX9f2wWpaLgB3w2yh7jsgfUspTQFMmEr1urJ5peB5tyeb5WmXAHbQkeeH2A78VGqcs",
  "key19": "7skkww19XjmFghhHpyvztUoWxeWxZxQageq8k2bRsZK9Wp5tKcCeYqBD7zWxU9iTsESp3eHfgdLMMKpgPjZPsxD",
  "key20": "36uEZ2WTGzcwXJBNzEBuiqv5jyXC2Ybthg6pyKDTSJvXYdKkUHwv3n5dcbiACikaLrMGoJ1UDFjiJecFJo82CZwj",
  "key21": "5x4EyHFRjUzZok2X9NQVvrnAihQ9sPkJ7AJYSuzNfBbAL6qtjcrDfkD3eyUJma6Fq6JYn4iHpBQBgieKSSMygykW",
  "key22": "Pqf6Bh3yHD2pwSKp9dexJXqPnJH1ke91Cc3wdSPu8YfFzdfbx7ZNMKq2H4YWyxGgVrkLy6ND3Qbm1MGZo5nS2uc",
  "key23": "5pYp9cXoF6QcgBn1iTUVCJzzBbzf9wnBdPEKQaAuTJzkbQz8pSA8GviHV6sT8D2jwfq3pJvUKZEXTf1kSFgRc9Ps",
  "key24": "DakrrZw2NybeDfUzkjcZB2fSgaGE9Dk3r2jfAPMKfF1ecrHqRnojhyCHFqjV5vXGphtzmePgZokvbeR3VYmi9Cq",
  "key25": "4hBq51PQr5oGvNYpGtmMgJpTWXhcb4zkKpcs6Gzn3s4DWDQB2Vct9nT225KJStktUFLbLgdjacMfnFDhJrfPBj9A",
  "key26": "39DHfqTEfKrRn6RP9paPL6XwHM7Jws9UY48caMFiavGy5vk7CzamgfywRwhAZgbJ75XtQPyQSa8a42jm91jD5fY1",
  "key27": "ZiK7eMct2RWmmk2nWCS8JqYdBvzF91ezmuyHmcGjg77yKQ4YzwAJAX3nvCrQmZM3Sca8i2Xgi5QEwvZjY3wDkJ8",
  "key28": "4Y2iKBf1aceKFnahA7iy1f2wtD1XPzx91h9DjEb1qJ9fQZBVavh9VFWptziJEwJ2SbvhDnTJJgDTfWjH71Sx6B9",
  "key29": "3sx8FAKoopdoDFWHGfSrCqbXJaWSo5S7ypV1GkkLsBg138NU9DShXRHPkALqeuHirE2PbyGo3JTjZRTsRwtj72ap",
  "key30": "3eAXmFZCbu5mvDRPsxMboTedHbituCbXceiUsoaKfbnWhqbfopHevV2wy3XujHsMFke2j4D1WT9eC421YNLsRriU",
  "key31": "5HTM4SCDyxprbes7uVBQCkPbNnNofXaPARJ8CfmKZ6dkCyVapZjggH8XMZxeWxiZWV2Kb6W4MUBJ2LDtykBxezna",
  "key32": "UpTwKgj12Q5e4WhAGCPe6ewW8ZHyggjFeyT3adoouwtE59L4baeHwhDo2itaDZGXc3kQBk2VP4mMtFst6GG5JoU",
  "key33": "3UEZEYSGUPEAbGtVUHHNaseKtuCKcW3GAqxZtEv9NGvjXnhaouRzkK3a5AfFeKBy8sHUF46FFQChaYcQcooevRtq"
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
