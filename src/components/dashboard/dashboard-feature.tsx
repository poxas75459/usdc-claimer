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
    "5MdvdayDdUGaiw8mJN717t3HUdmAGY7YshDAjXQ2RhHyAJXuPhZaD3JdsKCzaZSVzxMjWoPc6cTuoN1xH7YBbMNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zUmxykLuvd5cdE2NRTd9SbGnJ8xR44pdUDvJxh6Bn7vM8wNEKDBeR6W3rmSdpNeR1ncNBwoaeyZtQN76Xfki7Z6",
  "key1": "3afNpueSWgZYwj6opcjHEEKfHQeaB3dJTCujcEGDmqP8KkXbuuouSH7DzxkgVZmMeoGuAKiC7FPMAQXTcdryxy5a",
  "key2": "69FnqMPoxtV7hsg7qNhB7mVzjtJ5PasT17qtpCozUTm94UDVM3CXqrQ1F4Qtrz8Bup6LqKd9q2Mwy7W6sJHqvrJ",
  "key3": "54BvgismM6TBBWpkQk6bjtMgjgL5g6EyLYwnhz1oHZRBvHFXkhkD561d7tLdiFgXMgNj12khUkmLcbqdfzQChUfV",
  "key4": "4jeHipjAw658sAETHtZVewJCfzWnQJcKD2W8thUBYNYapP9Dsr8qpPTj15Q977E57hxonNKH7ZeYnWRdX3P3iGDd",
  "key5": "4Fs4Ks4XDjYUYyhy3EdzgERUkKVzv1kLsFTRYRBBnC91R8REw4i5Pmb8iqkZZeuJJBMz9gm6aDLL4ERo4XBmEx7j",
  "key6": "4Qrak6N45iDur7dtQ98vLtWNSugXAZ7CxBx5iURw96Be6NgKyF2RZi9NYPG5AeAnMs2MLyPNM2iJLrcCRFQvw2Wi",
  "key7": "553va4o5jqEkiq1GMZbZCQ7sULsuVGH3patyaxEp9p8LGtz9cZVxgFHZZtqZdKkUTrq4XPUGbzMfF5sXaAgGaUMT",
  "key8": "46yLxkos6QjeDND6i5SKHGDAAKEqet65Pscwg2fmzftcmx1dDNKYeHtvZqLu8QcBAGZx1SNUN1F84Q1hQ7RXGU8H",
  "key9": "28iNFFuXKGE1j6PEjiKxYfKkrBZ8wvJYDu83GY3LKFMhxWrufWWiGAn8wsLCuZm4YfFcyZXStoBzUnqxomeiZrJ8",
  "key10": "5NzTLfypyPg9wQH5FwKXdpUMhnBySeaKUmj4uD6DGsfxEQm2Fv7cirqqFbzsGfQRY8rgiyC2oaLRL8481dV3WtoH",
  "key11": "3sqhfUKFrf4EW3XjGVD7Ldpt8E3Lm3TdicXtMy4LxDnNkkYP3nRf7ooEuquLuBMjY5Br4tHLHQj9B5gotv6pSx7C",
  "key12": "4cHdd1fxtBi1f3tZnnJqZB8Stwn8WNumDrR4GRKBnbCXPT4wv5YMg2TEitTPYNF3iMeun7xRXrQJh51XM9ZYnnrT",
  "key13": "2WsCNDQU7ceS3x1DkwSwJ5xVxCD328s74pk4kGN3UvgzyZnrRdSdChdGxcdcypGSQj2hSbnn3q2myzK8FX4CNh5W",
  "key14": "4RXgV5AVDYLTvEUqg5wtHnkmBguVXUm94ixLj8U9cWSBDwxKpnVsmidKJmZcJ43mDRjrp3nnNR95VGKU387Dt69r",
  "key15": "374cfTDmnqNWe3N7s82WnG59gAB4HTqHDQJDHqHuKhuKzSbig8EYLhHUSrHMce8FyN4FygrVv5VXviaVbiBLgt55",
  "key16": "4LohFqrgYEsdqAME6ZQBMS26UK3HWqDo8dHN2aU56xuPLGCvDM3dsSVe32joPnJfU6sUPZQrfQjrFmduTwEUQbuT",
  "key17": "2wckKCJJMqyDyp5CF6Fyi6mu4chMoxZmdvoUfu3D7ee5G9LDGrUKy5ZL7W4T8f4erdH1hUaUpxguoUkgRngXtxV2",
  "key18": "4YzpkosnnHkZxC9LLLvv9qEEdjV2SVr61oEWq9u9mxeRiL6qbHMP3CpyXo9RukSp2FBBVmp8GJCNJngZFHyYaUR7",
  "key19": "4npUEjDkxfZmhy7oPhsRXDzRYqEkiKpeEE8P71vXFRjTJ4EPmHHzAMoSJXRJNVdbKeWNgNszgA5s3GFtGPfp4R6q",
  "key20": "4bkrH5TEY7HUMUZxkS5s4VMWUsFyLQhzykEeXd4t5EtaL6nwJvDDXcS8U1wJnFQeUuoJS8EVTRJhUVSbUeHRMfVz",
  "key21": "T2agpCAkcrAVoPXdz34dMRLbGoLM3opvgpbTUtxHUBj81kLwnEXvW5xYTgJjBanT5JLBnijGr4ZkYLu69TcXHa5",
  "key22": "3Smd5v7uE6xitsJnVoT6k6FS3eJxNDqCPkK4Ah7EWaoGviT3yjPaKCtCpGhV8oM65hFKu129Zh4VGhUJmrdyKQwj",
  "key23": "4mPL28n6nweDLxTtH8gXwAknmUaavqecqRa8YqfJooyZK38tyVWKgXLB1v6UnYozYSVxqzPPQ2w9Vx9EFfFa2u7M",
  "key24": "5ErVK6nqiVQwVNAR4K85AnEXXiSagyxa2vaPZ7uk3qwUmuiLENBMNywB4wfjdhGBFR1WF4hxJN5uR8MFNB7Udakt",
  "key25": "65Yxa7iAJSrA9CLkAPwiANU47qRLSYbR5YZcXZFCCXaDqsJoKSf7Paq7rxmx5uwStUuoYhNhBDzHHZqwxgreRt6E",
  "key26": "4Z6E4AAG6FmT27qYSErWK9B8CnykwKWFRZ6xHWyWA6HBtcF4J5zvRgqaqhzXkCeb6gH2wCoya4o8RXmR88PfYnB1",
  "key27": "2mzdW7PAFjgf9KnH7VX5xMuuwcFfGZtBsEuAAhYGuM5YZp1i8PJEctsntp6GSP3bDdyJGR6HTSHwEG64jyrSoLnG",
  "key28": "2JKW323WFToEVgxiEcYh8mCKhDq7GtCvfjG8Pr9vGWVZsh3zN2vNnusDNXKjnuWPmrXhoG24jMCG8XEDLip7aw3g",
  "key29": "3DMjPc3Vo9btGwxFatsJ8Q7ka5drsRYQh6aMNhwUbdd6RKWH8BJ1yd9gxyc4mzY5qgLUE4psZ9esokmajBnPDpKB",
  "key30": "ku4CjRYzRB9xqzTEusTJ5qN2PSoBx4SA4P2VQm36edDWFb9rcfvYsiTYsYnhqrxS3DGUhy1pz2F2ZXjc19h1WQe"
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
