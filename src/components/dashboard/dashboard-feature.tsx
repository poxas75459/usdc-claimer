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
    "34hZJzW6vpt43XF3gm3Be3LtG9U5GZWrbHr6o4qizBsiHXarFLfKQUPYbjZnQvKJ9qebtkXgXH13PdAhf8WDMfXG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iTPUW3MpUyQDjS3TuyYFfzdWKqs447MaPYMmDESbhnXWxowwpnSG3z8gGw9qfyETuzHbzHoVpSqHyK2YnsJcdAh",
  "key1": "39JzhVDC2GnzbwbonbMX6ssN8yppQcHQwwGoMLraS6Kts5MrpMg9mDEASuUDbBw1Nh8MKraAmyLtFpBwJVTENJEy",
  "key2": "5SDbin8RrgxppjwyYqAGCGAtzGCtBqvSQFQkGYMaeZyeonRf1jnMcPpaqYJjHAKLqUTozBaWeP435Gwgb3gboRqK",
  "key3": "3bQntT2hAR5qYuQmXcK227csMJC5S1PsjsBK7Q6HUWzE5AyqwgFzB21s6K2yMqNv38DKFKTB6wafacMkpM66VC9Z",
  "key4": "4KvM52ez5mxZRTCAMpauFrJaSUCXnNwGVAzma6XCZFJ5YvME8NG1ARShwh1ogKRn5SN772Fneem6Jf8ZtDHrB4re",
  "key5": "37GU3uNkKHr9mZMxnLZ3kCZxNLaEcYXx4i57766jGtL88tfHjupn1DUb547WCrhMbpaxiaHyTBiaevnqyM4cDmaf",
  "key6": "1uiqv1xAWCPddCtihiw9j3fh99BRUtCuxAAzRWgbHNHCA6sqBJUQTZkAY8yL6foLxoiAiujkhhn5qjMQuVs897P",
  "key7": "ZfnwQpVLie3xisvHBG3e6Ff23a7rh6nCv8WLp5wHqHrK5fcZesZR9zgtRg9gWgBewHvAzHDwc3ByRkcJXiYtZju",
  "key8": "4V4cqfTnhPwtV3uyNyXYqqLf3c9DgsPGakjcr7CWofPGvftHqGkQ6ERk2Sn6H5JgrDaUDk6dmkzVMBEKVNfEVMYR",
  "key9": "4HnC2USStqKGHAKM8ECrNhtxXrw1KtadYszsmC9HipffMKeUx9337yWotJfRj6n5p1ZoBo7z5GEaFBbsKDKc1gh7",
  "key10": "2L63DJVTNhVhmxadE7BzFAthPcGG8T84k36kMssbQRicJ57SPZmeqeUNqv2RYPsZrAUSHG1dBJmV5nUCakCABoCp",
  "key11": "3ksfwHqz9uYmf92RNA9G68j1mtPZbnqqVGUYEKLUnNUwLUfXPituUGwM5VkKZsTCGp5enB3SR1d5xJibiqCu3HKi",
  "key12": "2h7Gmb2t82MMUWi7iswHmadCV27FfgT1Brey1h8qz8MDuprCGEwzrkLpUTWJjyF238VVJYkoq1wuxveVvvr4gyCb",
  "key13": "4MmFagXeCTShVymcitvzaX9FwYbHFrB7FhEhMyrS8tSFPxkpioBYuYuxEm1MGbkRR2BzAD8rrb9HqKVjURBGrMcY",
  "key14": "3Q5xRk4hhj6LxffgtWjRZfb3A2xULjyTHh45PyZt1sMDUxSXWYwSkTihcWJZLoBZGa5ETtJ41FerTDwYoLatgdo7",
  "key15": "VjrrhxeBJtKEerKWwSWyfiUKi4LcsqbCGAp9u56A3kHGYkZ3FttDvVKXpriJKKEqLwiQZJV1pu3n7nq7iweAMEh",
  "key16": "4EiaEQJikEUuM5pc6KmBtNozabynS215i5fffM6iELQGzbjEPBc3qgWZAQN9cpBQMSZ3DJeBApuUq1N2mDayZK5Z",
  "key17": "2PzmasD4qbKJ6y5aaTA8NHbnGsD5MBiJmhMN6P6fgYf4Msi1HTquew1Wgw5HACnTo5p8A7GUEuwuPgJGuafAvzjN",
  "key18": "2FcfPD2vhM15K4fhTVxuEbNviCi6pprZuzGaCFRdv1DH3qNT3e2rZW7iJ4ZYo35erBdCX4ZNVJyDMpnv6fGJvFR2",
  "key19": "vKEdjg1d2LYnbZHg8REy88vYZCy5z1mwiMH86C5mLoPqN3hP1AAE7mj7797mQUtFyfVap21gxWr5FcYK4QiNsvV",
  "key20": "4cSeNohLjwY3MFhhBwVku4oD3nSN4GPxHRcHDR188AK16wdN2fqMzTXTpgf3kikbYRT1AL2aJmbgLEbunVa4jQb4",
  "key21": "BrWqBu8jGAuyyRKbXnsNWTcBaCosdrRX8mLAAbWwe9XR8x2ry7feVFSCfBVNwesTm67Wtk6VT8tFjmTvow7M3W8",
  "key22": "3XpzWUyYswDyjCnY1BWg4BvUyJfbQo5YbcGudWYE4idFnfHQUErZN6ZQuX29GuUCDfQneiVtkQW3w3Rda4jWEPdP",
  "key23": "T3Zc87kKGBvUQecdjxKcCRLCwh7c3uoqRNxTsqBbHaW9TqgUXcSgU4b81U24j6NzDMR5cxJHT13ZpXrrARmAzWp",
  "key24": "gvWquHxtY6w7vafR1FUvXnBarV1dCSEWNm8JLFoutCkC3HMeRRvAr858XT9jGaw5v5A4rccMREbDrC3ZbspKdkS",
  "key25": "4jizNy6d6owZsXgUZ2JUvuh9GzHxTdQSnFeJSvB64MKwstTfRmyBhMQjss2U8CjXsHLWdgiTESFki7TJbpumgXJ4",
  "key26": "4Tm2VJsY9kWc6UQ9fTuvyWGyLUxWsR9mMJjCvZPBfYeQ1Tq76fNrMU8cFRSdCAReDBFaF4ib1QtarpBJDGuPiHSK",
  "key27": "5kB1F6wVe3QdSetYc1QewbxWUfZ18EVovhzX3WdWyc4RFwdYbeo19Qzj3JGEKU13oK94n43sp7Y1LbnS8J7ZFknp",
  "key28": "4E88VzYbDDZKPwwwAB2dKNrwz2A2awFY9ydxMD2x6o7UfnUGa6Qm8VPkm5bwS6ar5WQvs4DbdyqXxz8EAvpvnsgT"
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
