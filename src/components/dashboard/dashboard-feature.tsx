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
    "32mifVhLzvmqeR53C7Ex2NQH8QuF7P3dg7cTcGdJszwk5kLpCnRP3mPd4BN5RDsHAkADooCPGxKi1tNX2fLHmCCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dqV37HhnHGKdBfuQNAB6Pok3euFHUZH37k1TS16mkftW74KgMefdoVLVtkRgPjBWZZowwNUfVZY7fgr8dBNCn25",
  "key1": "5MNT9DZx2cMd1sby7RSPxKdSGEdMRUGYe3ZpmiJrxRkXgHd2ioKLGeW1kJ3fRNjX72hkk3bPwwXt4uUXgaQb8AT5",
  "key2": "9ARrb26ocppXjSr9medYx1ZtkSCLCxoJqQMPKMjFv7pyfFenFLq7Npimp2PCzQ5AJF1Mf46kGsU2T2ncTe6J7dW",
  "key3": "4BN7AVf9XqMfqdCvHQ9hgyNtfUNRxaoqnX8dbfxnLeDtrEY7Eiiy6ZVMZc44KGLNgMWy8CkZANsnMkEiurjm5Nuc",
  "key4": "2T2obukpVgi6p3BB3T7BFixdfCVqnEHW5bbvGaNR2CMoLexY5dnh4WeBJrRYNWnoiM5v8a5HLWvXPj5CWC7coWgM",
  "key5": "2zQ8HJgfn2FGQpNgQ6g3Pp7ytJvdu8T46UfBuAA116dqDR4CceQLbVkvHFbahUiV5YyESQpDyWtQZN1jV8YYxrCe",
  "key6": "4ZWbQ9za2GfS56E21HE8RQbGdWiTF2AehnqGZ6gz2pjmiXV81nxuUSye3ws27uMGg8ZxZEvjVnSwTVbzvPWE94CS",
  "key7": "67F7EJPoq4rarazMVNPSnGAx7megXUrCoUCqzZTFysxEKoxyx4nszpwuRC56K4buhZw8AiE6hBcShofzNe5BiZRQ",
  "key8": "2mjUA3MsDHwJThRGWhBHQL6z1HTE85tJL6RzQveoR9Xp4emFLZN5gkQ346Z4bR5fJCfrKpiJWsjz1eeHTzznNcb1",
  "key9": "3wzhVBu9gRiye9uoAtc5peoyNXEmz7WjnddNbs8XNNa84pNbSAp6FHkapNJvboZCBFp8VD4EAvy28LLfFt7BxykK",
  "key10": "5K7rT7iVWrgS7Uqq4RuqQpMVpJpvyAZepBBS1fDVS3DxdQWpWkTfkVQhjwzAJcnXeXEyas1n7XRG71RKpjUvAkcn",
  "key11": "3shqpKFhaETvZQkbgBuWFYD2TjroBWqphVB3xB664NmXEiZYX8cCe8cfCj6aDU6V6pKfHAfifwySPMHgHWxcpVUj",
  "key12": "3HQj9WyZtPU87dzHa4wrDuqESTNwTAThhTmiJDr8EQ5Ha6kzdHmfs75D6ixefFWs6jHzUzGtrT4UpgbAZBqgwpst",
  "key13": "EUd3EbWyE6CAniwKBKTWr9cfndADuzazkjPqrwTBkqd4trnVt29rgqTXqjF8iVak5EXXNEQSd4uZoV63PRTh9dn",
  "key14": "4qpcB4riS8SafDmCrw1eN9XxHWZFNw1PqdXhxJKxSTB79Y1JYUTWdbdZKRY1DvQnm3YJ42Be9rCQNuknSnoJwtYx",
  "key15": "58LjXhLM9Z2cSDQCytpDWbHG4hFQ5FL38BtKRYXvV7zs9GFjrgq16PLpZyopBytVwB5GjEhjjUiaeWi24uQ1SK8n",
  "key16": "4d5PsTPeh1LGQ6P74oxyb7acCjByqT2kDBaHGcy2Prk4hJcAJfzSD7LgYb2qPxrytKQCpkzMNDBdcW1R8wSsp6dC",
  "key17": "51jzKd8M8KBFooda73ECLJ2JdFHJoJL3wYFcrXACWMfGMa15CQa6JdiKzJGa3vVyGfNnrXKhoXYBE3xwLEWx1bsj",
  "key18": "2QawmyRVpzrW7Vdnj4MxhNJ4kjWCJJkk9oRxJaVzBW3qD5BoMJM56GMZ5PshMjCMNeJcgRbuKWCFg8H7gTNN5PUz",
  "key19": "5bS9Bg3gb8fKEM1TbwV3sWHH19CQAqsYHufcz1HdbaV7exejZYFjUqwvU1FpZoVsJwwiR8Au81Uu57RD1PPZPVP9",
  "key20": "2wGhG1aiZ7EoyvmMM4uqHiftNvjNAie4j7tVe8XK19UmBCVnc76TWka7x6CgFKH6zBGkR6yA2NBHpw68ptxmBtJ2",
  "key21": "57iQsWA4kHtKGaZvW4J15pC4rcjRevu2WsgTJUKsrSrEtWepHgf1UBTLrdS3kvb64vooGZeziXK6WvEXbvHDS8zN",
  "key22": "3rtjeZVeR67cs66EvdRbGpKbRtvFjhcjjvtRhQg5yK1pCxAfwVNS1L717zgumeS2QaxNwUVhiGAbK9pzK6crR8Xi",
  "key23": "2LyepyGWq8NRSyhrSTeiJomAt5uohHy7A53C6ijMR5XD4VM9Bh1xL1LucNH5Wb6qgxWFEA5WeyTaKwsQ77kd8q6Q",
  "key24": "3PhAz2K5gBp5EzuPQwn7UFEGDq2uE4i7r5JGErDAG7HGqwDZ8XRpR8miUJvAxMk53iv1eNkbL7dy9uMZuav2xyrh",
  "key25": "5NVUfEHaE758idsXSvehZv9aUnDweC7KYFFJoTH4gy5F3iPdacatijV78KxANca6zgVutvvZR8qdHEompNuijsWr",
  "key26": "qM6kMA2JxwcbJtCdDMN6TrPFv5TiVdvfkZtQ8ogTRkRR26nSmUqRfFdBsNa9ojTNm4jRA8Pqo8VJYKYJ7wJeEyv",
  "key27": "3m7at99gM44KDoDskCPM6mf5ioaFqCNPByHdgqPNzRszEJjaeVE7rY98XEiTR8UMDtdrXRDMzha292muyGvjUr92",
  "key28": "5EdD9WitVKCTgTPnkJ9ZWJVXxH9voLp124hkZS6gH2sfxhyTcg3TrUEqFTZDL5jEyQvnwV45jVr7vCDDswD4wky3",
  "key29": "5G2U7W9jQ24L5QizcTzCm9M73qD5NXGE7cHcprraZpg4zpYv27eckygVmPuLcR2Q78VXDjquoExYtKvgLZZijesx",
  "key30": "4G3VYzDpGBPbUHmW8ahZmvd2d9AkzL73p4gsfT1Sh14AzAKfVaABgHZPmuTXysw1cBqTrN84xwHLFZPvZN4RCgoP",
  "key31": "3rb3JcBZYePzXXG82iYC5fvXoBhqKAGY7G7FLEjHiZR1afDSJkTWWTLMHZmAT5iWu67S3cVWwqVEJnwL2rHBkbQg",
  "key32": "4NQuVXZCJ46nUZsEUdkbQV71aaCMwaz89nUB6MUaYep6UChqHZA5LSMVUkJ2o5AggzQYx7akVkVrXcMQGshJxsUZ",
  "key33": "2DVhce6MFVNSME1G1MECUrRD6Mm1e6v3EoCPfdyFE4yxxWpJPqksNyV8ewfDmWF2W4DHQg7TsAJyhurNmiJC64Bk"
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
